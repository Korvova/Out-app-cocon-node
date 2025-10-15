// CoCon client adapter
// For now supports calling existing .NET Out-app-cocon REST as a backend (legacyApiBase)
// Later: add native CoCon Room Server / MME integrations.

const axios = require('axios');

// Global storage for current agenda ID (shared across all CoconClient instances)
let globalCurrentAgendaId = null;

class CoconClient {
  constructor({ store }) {
    this.store = store;
  }

  get cfg() { return this.store.get('cocon') || {}; }

  async connect() { return { ok: true }; }

  // --- Delegates ---
  async getAllDelegates() {
    // Prefer native CoCon REST if configured
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (coConBase) {
      try {
        const url = coConBase + '/Delegate/GetAllDelegates';
        const r = await axios.get(url, { timeout: 8000 });
        const raw = typeof r.data === 'string' ? safeParse(r.data) : r.data;
        const arr = raw?.GetAllDelegates?.Delegates || [];
        return arr;
      } catch (e) {
        // fallback to legacy if configured
      }
    }
    // Fallback to legacy .NET bridge if provided
    const legacy = this.cfg.legacyApiBase;
    if (legacy) {
      const url = legacy.replace(/\/$/, '') + '/api/coconagenda/GetAllDelegates';
      const r = await axios.get(url, { timeout: 8000 });
      return r.data || [];
    }
    throw new Error('Neither coConBase nor legacyApiBase configured');
  }

  async getVotingTemplates() {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (coConBase) {
      const url = coConBase + '/Meeting_Agenda/GetVotingAgendaTemplateList';
      const r = await axios.get(url, { timeout: 8000 });
      const raw = typeof r.data === 'string' ? safeParse(r.data) : r.data;
      return raw?.GetVotingAgendaTemplateList?.AgendaItems || [];
    }
    return [];
  }

  async getDelegatesOnSeats() {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (coConBase) {
      // В ряде сборок используется Meeting_Agenda/GetDelegatesOnSeats
      const url = coConBase + '/Meeting_Agenda/GetDelegatesOnSeats';
      const r = await axios.get(url, { timeout: 8000 });
      const raw = typeof r.data === 'string' ? safeParse(r.data) : r.data;
      // ожидаем форматы вроде { GetDelegatesOnSeats: { Items: [...] } } — нормализуем
      const root = raw?.GetDelegatesOnSeats || raw || {};
      const list = root.Items || root.Delegates || root.Seats || [];
      return list;
    }
    return [];
  }

  async getRunningMeetingId() {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) return null;
    const url = coConBase + '/Meeting_Agenda/GetAllMeetings';
    const r = await axios.get(url, { timeout: 8000 });
    const raw = typeof r.data === 'string' ? safeParse(r.data) : r.data;
    const meetings = raw?.GetAllMeetings?.Meetings || [];
    const running = meetings.find(m => String(m.State).toLowerCase() === 'running');
    return running ? running.Id : null;
  }

  // --- Create Agenda flow (as in decompiled Out-app-cocon) ---
  async createAgenda(req) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) throw new Error('coConBase not configured');
    // End active if any
    const active = await this.getRunningMeetingId();
    if (active) {
      await this.endAgenda();
    }
    // Start empty meeting
    const now = new Date();
    const title = encodeURIComponent((req?.AgendaData?.Name) || 'Auto');
    const from = encodeURIComponent((req?.AgendaData?.StartTime) || isoNoMs(now));
    const to = encodeURIComponent((req?.AgendaData?.EndTime) || isoNoMs(new Date(now.getTime()+60*60*1000)));
    // LoginMethod: 0 = badge, 2 = fixed seating (as in .NET variant). Allow override via req or config.
    const loginMethod = Number(
      (req?.AgendaData?.LoginMethod ?? this.cfg.loginMethod ?? 0)
    );
    const startUrl = `${coConBase}/Meeting_Agenda/StartEmptyMeeting/?Title=${title}&From=${from}&To=${to}&LoginMethod=${loginMethod}&AuthenticationMode=0&AuthenticationType=0`;
    const startResp = await axios.get(startUrl, { timeout: 12000 });
    const startRaw = typeof startResp.data === 'string' ? safeParse(startResp.data) : startResp.data;
    const meetingId = startRaw?.StartEmptyMeeting?.MeetingId || (await this.getRunningMeetingId());
    if (!meetingId) throw new Error('Failed to start meeting in CoCon');

    // Add questions
    const pairs = [];
    const questions = Array.isArray(req?.Questions) ? req.Questions : [];
    for (const q of questions) {
      const qId = await this.addQuestionInAgenda({ Number: q.Number, Name: q.Name, Description: q.Description });
      pairs.push({ SdegQuestionId: q.SdegId || String(q.Number), CoConQuestionId: qId });
    }

    // Add delegates
    let ids = Array.isArray(req?.DelegatesIds) ? req.DelegatesIds : [];
    // Limit number of delegates by maxSeats (from config or request) if provided
    const maxSeats = Number(req?.MaxSeats ?? this.cfg.maxSeats ?? 0);
    if (maxSeats > 0 && ids.length > maxSeats) {
      ids = ids.slice(0, maxSeats);
    }
    if (ids.length) {
      // CoCon принимает CSV; у них делали по одному, но CSV работает быстрее
      const csv = encodeURIComponent(ids.join(','));
      const addUrl = `${coConBase}/Meeting_Agenda/AddDelegatesToMeeting/?DelegatesId=${csv}&MeetingId=${encodeURIComponent(meetingId)}`;
      const addResp = await axios.get(addUrl, { timeout: 12000 });
      const addStr = typeof addResp.data === 'string' ? addResp.data : JSON.stringify(addResp.data);
      // Ожидаем "0" на успех
      if (!/\b0\b/.test(addStr)) {
        throw new Error('AddDelegatesToMeeting failed: ' + addStr);
      }
    }

    // Create voting templates with CanCorrect=true
    // This allows voters to change their vote during voting
    console.log(`[CoconClient] Creating voting templates with CanCorrect=true and IndividualOption=2...`);
    try {
      await this.createVotingTemplate({
        title: '3_Vote_Correctable',
        voteType: 'OPEN',
        duration: 180,
        canCorrect: true
      });
      // Create new template with IndividualOption=4 to store results in DB
      await this.createVotingTemplate({
        title: 'Vote_Store_Results_v2',
        voteType: 'OPEN',
        duration: 180,
        canCorrect: true
      });
      console.log(`[CoconClient] ✓ Voting templates created successfully`);
    } catch (e) {
      console.log(`[CoconClient] Warning: Failed to create voting templates: ${e.message}`);
      // Don't fail meeting creation if template creation fails
    }

    return { SdegAgendaId: req?.AgendaData?.SdegId || null, CoConAgendaId: meetingId, QuestionsPairs: pairs };
  }

  async addQuestionInAgenda(item) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) throw new Error('coConBase not configured');

    // Get current agenda items to find next sequence number
    let nextSequence = String(item?.Number ?? '1');
    try {
      const agendaUrl = `${coConBase}/Meeting_Agenda/GetAgendaItemInformationInRunningMeeting`;
      const agendaResp = await axios.get(agendaUrl, { timeout: 8000 });
      const agendaRaw = typeof agendaResp.data === 'string' ? safeParse(agendaResp.data) : agendaResp.data;
      const agendaItems = agendaRaw?.GetAgendaItemInformationInRunningMeeting?.AgendaItems || [];

      if (agendaItems.length > 0) {
        // Find max Id and add 1
        const maxId = Math.max(...agendaItems.map(a => parseInt(a.Id) || 0));
        nextSequence = String(maxId + 1);
        console.log(`[CoconClient] Found ${agendaItems.length} existing items, using sequence ${nextSequence}`);
      }
    } catch (e) {
      console.log('[CoconClient] Could not get existing agenda items, using provided sequence:', e.message);
    }

    const sequence = encodeURIComponent(nextSequence);
    const title = encodeURIComponent(item?.Name ?? String(item?.Number ?? ''));
    const desc = encodeURIComponent(item?.Description ?? '');
    const type = encodeURIComponent('Discussion');
    // API Doc 6.10 section 4.3.4.13: AddAgendaItem expects Title, Des, Sequence, Type
    // NOTE: Sequence must be sequential! CoCon requires next number after last item.
    const url = `${coConBase}/Meeting_Agenda/AddAgendaItem/?Title=${title}&Des=${desc}&Sequence=${sequence}&Type=${type}`;
    const r = await axios.get(url, { timeout: 10000 });
    const raw = typeof r.data === 'string' ? safeParse(r.data) : r.data;
    const id = raw?.AddNewAgendaItem?.Id || raw?.Id || raw?.AddNewAgendaItem?.ID;
    if (!id) throw new Error('AddAgendaItem returned no Id (empty string) - check if sequence is valid');
    return id;
  }

  async setCurrentQuestionInAgenda(number) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    const url = `${coConBase}/Meeting_Agenda/SetActiveAgendaItemById/?Id=${encodeURIComponent(number)}`;
    const r = await axios.get(url, { timeout: 8000 });
    const str = typeof r.data === 'string' ? r.data : JSON.stringify(r.data);
    if (str === '-1' || str === '1') throw new Error('SetActiveAgendaItemById failed: ' + str);
    return true;
  }

  async startVotingInAgenda(item) {
    // Expect item to hold { number } or { CoConQuestionId }
    const number = item?.number || item?.CoConQuestionId || item?.id;
    if (!number) throw new Error('number required');
    await this.setCurrentQuestionInAgenda(number);
    await this.setVotingState('Start');
    return 'OK';
  }

  async restartVotingForQuestion(number) {
    await this.setCurrentQuestionInAgenda(number);
    await this.setVotingState('Start');
    return 'OK';
  }

  async setVotingState(state) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    const url = `${coConBase}/Voting/SetVotingState/?State=${encodeURIComponent(state)}`;
    console.log(`[CoconClient] Calling SetVotingState: ${state} -> ${url}`);
    const r = await axios.get(url, { timeout: 8000 });
    const str = typeof r.data === 'string' ? r.data : JSON.stringify(r.data);
    console.log(`[CoconClient] SetVotingState(${state}) response: "${str}"`);
    if (str === '-1' || str === '1') throw new Error('SetVotingState failed: ' + str);
    return true;
  }

  async getVotingState() {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    const url = `${coConBase}/Voting/GetVotingState`;
    const r = await axios.get(url, { timeout: 8000 });
    const raw = typeof r.data === 'string' ? safeParse(r.data) : r.data;
    return raw?.GetVotingState?.State || 'Unknown';
  }

  async createVotingTemplate({ title, voteType = 'OPEN', duration = 60, canCorrect = true }) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) throw new Error('coConBase not configured');

    const templateTitle = encodeURIComponent(title || `Vote_${Date.now()}`);

    // Convert duration to MM:SS format
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const durationStr = encodeURIComponent(`00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);

    // Create 3-button template: За (Green) / Против (Red) / Воздержался (Yellow)
    // With CanCorrect enabled so voters can change their vote
    const templateUrl = `${coConBase}/Voting/AddVotingTemplate/?` +
      `Title=${templateTitle}&` +
      `NrOfOptions=3&` +
      `IsPrinted=false&` +
      `Description1=${encodeURIComponent('За')}&` +
      `Option1=%23FF008000&` + // Green
      `SymbolIndex1=1&` +
      `LedColour1=Green&` +
      `IsAbstain1=false&` +
      `Description2=${encodeURIComponent('Против')}&` +
      `Option2=%23FFFF0000&` + // Red
      `SymbolIndex2=2&` +
      `LedColour2=Red&` +
      `IsAbstain2=false&` +
      `Description3=${encodeURIComponent('Воздержался')}&` +
      `Option3=%23FFFFFF00&` + // Yellow
      `SymbolIndex3=3&` +
      `LedColour3=Yellow&` +
      `IsAbstain3=true&` +
      `AbstainOption=3&` +
      `AbstainIndex=3&` +
      `BadgeOption=4&` + // All voting units
      `OverallOption=${voteType === 'OPEN' ? '4' : '1'}&` + // OPEN: show to all
      // TESTING: Try IndividualOption=5 (Everybody during) to store results in DB!
      // 1=Never, 2=Not during vote, 3=Vote master only, 4=All operators, 5=Everybody during
      // Option 5 should enable storing individual votes!
      `IndividualOption=5&` + // Everybody during - MUST store individual votes!
      `CanCorrect=${canCorrect}&` + // IMPORTANT: Allow changing vote!
      `HasPin=false&` +
      `IsWeightUsed=false&` +
      `IsOperatorIndicated=true&` + // Show indication on operator screen
      `IsSignageIndicated=true&` + // Show indication on signage
      `PanelIndicationOption=2&` + // Real vote choice on panel
      `EnableVotingTimer=true&` + // Must be enabled (CoCon hangs without it)
      `DurationOfVotingTimer=23%3A59%3A59&` + // 24 hours - effectively no limit (website controls)
      `WarningOfVotingTimer=00%3A00%3A00&` + // No warning
      `CountDownOfVotingTimer=false&` + // Don't show countdown
      `ExceedOfVotingTimer=true&` + // Can exceed (not important since website controls)
      `EnableQuorum=false&` +
      `EnableOutcomMsg=false`;

    // IMPORTANT NOTE: Timer in CoCon is set to 24 hours to avoid timeout issues,
    // but real control is done from website - when website timer ends, voting stops in CoCon automatically

    console.log(`[CoconClient] Creating voting template: ${title} (CanCorrect=${canCorrect}, Timer=24h - controlled by website)`);
    const resp = await axios.get(templateUrl, { timeout: 10000 });
    const respStr = typeof resp.data === 'string' ? resp.data : JSON.stringify(resp.data);

    if (respStr === '-1' || respStr === '1') {
      throw new Error('AddVotingTemplate failed: ' + respStr);
    }

    console.log(`[CoconClient] ✓ Template created: ${title}`);
    return title;
  }

  async endAgenda() {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    // Prefer EndActiveMeeting as in theirs
    try {
      const r = await axios.get(coConBase + '/Meeting_Agenda/EndActiveMeeting', { timeout: 8000 });
      const raw = typeof r.data === 'string' ? safeParse(r.data) : r.data;
      return raw?.EndActiveMeeting?.MeetingId ?? null;
    } catch (e) {
      // fallback older paths
      await axios.get(coConBase + '/Voting/SetVotingState/?State=Closed', { timeout: 5000 }).catch(()=>{});
      await axios.get(coConBase + '/Meeting_Agenda/EndMeeting', { timeout: 5000 }).catch(()=>{});
      await axios.get(coConBase + '/Meeting_Agenda/StopMeeting', { timeout: 5000 }).catch(()=>{});
      await axios.get(coConBase + '/Meeting_Agenda/EndAgenda', { timeout: 5000 }).catch(()=>{});
      return null;
    }
  }

  async startVotingWithTemplate(params) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) throw new Error('coConBase not configured');

    const agendaItemNumber = params?.agendaItemNumber;
    const votingTitle = params?.votingTitle || 'Голосование';
    const voteType = params?.voteType || 'OPEN';
    const duration = params?.duration || 60; // seconds

    if (!agendaItemNumber) throw new Error('agendaItemNumber required');

    console.log(`[CoconClient] Starting voting: number=${agendaItemNumber}, title="${votingTitle}", type=${voteType}, duration=${duration}s`);

    // CRITICAL: Clear previous voting results BEFORE starting new voting!
    // This prevents CoCon from reusing old agenda items with stale results
    try {
      console.log(`[CoconClient] Clearing previous voting before start...`);
      await this.setVotingState('Clear');
      console.log(`[CoconClient] ✓ Previous voting cleared`);
    } catch (e) {
      console.log(`[CoconClient] Clear failed (may be OK if no previous voting): ${e.message}`);
    }

    // Store agenda ID globally for later retrieval of results
    globalCurrentAgendaId = agendaItemNumber;
    console.log(`[CoconClient] Stored agenda ID: ${globalCurrentAgendaId}`);

    // 1. Set active agenda item
    await this.setCurrentQuestionInAgenda(agendaItemNumber);

    // 2. Try to use AddInstantVote to create voting instance
    // According to docs: "Adds a new instance voting item" - creates but doesn't start
    // Try new template FIRST (with IndividualOption=5 to store results in DB!)
    // IMPORTANT: Try 3_Vote_Correctable BEFORE Vote_Correctable_Dynamic!
    // Vote_Correctable_Dynamic doesn't store individual votes!
    const templatesToTry = ['Vote_Store_Results_v2', 'Vote_Store_Results', '3_Vote_Correctable', '3_Vote_Public', 'Vote_Correctable_Dynamic', '3_Vote_Secret'];

    for (const templateName of templatesToTry) {
      try {
        console.log(`[CoconClient] Trying AddInstantVote with template: ${templateName}...`);
        const instantUrl = `${coConBase}/Voting/AddInstantVote/?VotingTemplate=${encodeURIComponent(templateName)}`;
        const instantResp = await axios.get(instantUrl, { timeout: 10000 });
        const instantRaw = typeof instantResp.data === 'string' ? safeParse(instantResp.data) : instantResp.data;

        // LOG FULL RESPONSE to see if there's an ID we're missing!
        console.log(`[CoconClient] AddInstantVote FULL response:`, JSON.stringify(instantRaw, null, 2));

        const result = instantRaw?.AddInstantVote?.Result;
        const agendaId = instantRaw?.AddInstantVote?.Id || instantRaw?.AddInstantVote?.AgendaId || instantRaw?.AddInstantVote?.VotingId;

        if (agendaId) {
          console.log(`[CoconClient] ✅ AddInstantVote returned ID: ${agendaId}`);
          // Update global ID with the real CoCon DB ID!
          globalCurrentAgendaId = agendaId;
          console.log(`[CoconClient] Updated stored agenda ID to: ${globalCurrentAgendaId}`);
        }

        if (result === true) {
          console.log(`[CoconClient] ✓ Instant vote created with template: ${templateName}`);
          console.log(`[CoconClient] Now calling Start to actually begin voting...`);

          // IMPORTANT: AddInstantVote only creates voting, need to Start it!
          await this.setVotingState('Start');
          console.log(`[CoconClient] ✓ Voting started successfully!`);
          return 'OK';
        } else {
          console.log(`[CoconClient] AddInstantVote with ${templateName} returned false, trying next...`);
        }
      } catch (e) {
        console.log(`[CoconClient] AddInstantVote with ${templateName} failed: ${e.message}`);
      }
    }

    // 3. Fallback: try Restart (if voting was already configured)
    console.log(`[CoconClient] Trying Restart command...`);
    try {
      await this.setVotingState('Restart');
      console.log(`[CoconClient] ✓ Voting started with Restart!`);
      return 'OK';
    } catch (e) {
      console.log(`[CoconClient] Restart failed: ${e.message}`);
    }

    // 4. Fallback: try Start directly
    console.log(`[CoconClient] Trying Start command...`);
    try {
      await this.setVotingState('Start');
      console.log(`[CoconClient] ✓ Voting started with Start!`);
      return 'OK';
    } catch (e) {
      console.log(`[CoconClient] Start failed: ${e.message}`);
    }

    throw new Error('Failed to start voting with all methods');
  }

  async stopVoting() {
    console.log(`[CoconClient] Stopping voting...`);
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');

    // Try SetVotingState('Stop') with retry mechanism
    // CoCon API is flaky - sometimes Stop doesn't work on first try
    let maxAttempts = 3;
    let currentState = 'Unknown';

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        console.log(`[CoconClient] Stop attempt ${attempt}/${maxAttempts}...`);
        await this.setVotingState('Stop');

        // Wait 500ms for CoCon to process
        await new Promise(resolve => setTimeout(resolve, 500));

        // Check if Stop actually worked
        currentState = await this.getVotingState();
        console.log(`[CoconClient] State after Stop attempt ${attempt}: ${currentState}`);

        if (currentState === 'VotingStopped' || currentState === 'VotingIdle') {
          console.log(`[CoconClient] ✓ Voting stopped successfully on attempt ${attempt}`);
          break;
        } else if (currentState === 'VotingStarted') {
          if (attempt < maxAttempts) {
            console.warn(`[CoconClient] ⚠️ Stop didn't work (still ${currentState}), retrying...`);
          } else {
            console.error(`[CoconClient] ❌ Failed to stop voting after ${maxAttempts} attempts (still ${currentState})`);
          }
        }
      } catch (e) {
        console.error(`[CoconClient] Stop attempt ${attempt} failed: ${e.message}`);
        if (attempt === maxAttempts) throw e;
      }
    }

    // AUTO-FETCH VOTING RESULTS AFTER STOP (BEFORE CLEAR!)
    // CRITICAL: Must fetch results BEFORE Clear, as Clear may delete them!
    if (globalCurrentAgendaId) {
      console.log(`[CoconClient] 📊 AUTO-FETCHING voting results for agenda ${globalCurrentAgendaId}...`);
      console.log(`[CoconClient] ⚠️ IMPORTANT: Fetching BEFORE Clear to preserve results!`);

      // Wait 2-3 seconds for CoCon to finalize results (increased from 1 second)
      console.log(`[CoconClient] Waiting 3 seconds for CoCon to finalize results...`);
      await new Promise(resolve => setTimeout(resolve, 3000));

      try {
        // CRITICAL FIX: Get real DB ID from CoCon!
        // GetIndividualVotingResults needs IdInDb, not sequence number!
        console.log(`[CoconClient] 🔍 Getting real DB ID for agenda sequence ${globalCurrentAgendaId}...`);
        const dbId = await this.getAgendaDbId(globalCurrentAgendaId);

        if (dbId) {
          console.log(`[CoconClient] ✅ Found DB ID: ${dbId} for sequence ${globalCurrentAgendaId}`);

          let results = await this.getIndividualVotingResults(dbId);
          console.log(`[CoconClient] ✅ Got ${results.length} individual votes from CoCon`);

          // FALLBACK: If no individual results, try aggregated results
          if (results.length === 0) {
            console.log(`[CoconClient] ⚠️ No individual votes found, trying aggregated results...`);
            const aggregated = await this.getAggregatedVotingResults(dbId);
            if (aggregated) {
              console.log(`[CoconClient] ✅ Got aggregated results: FOR=${aggregated.votesFor}, AGAINST=${aggregated.votesAgainst}, ABSTAIN=${aggregated.votesAbstain}`);
              // We have aggregated results but don't know WHO voted
              // Return aggregated data for server to handle
              return {
                ok: true,
                agendaSequence: globalCurrentAgendaId,
                agendaDbId: dbId,
                votesCount: aggregated.totalVotes,
                votes: [],
                aggregated: aggregated // Server needs to handle this differently
              };
            }
          }

          if (results.length > 0) {
            // Map VotingOptionId to choice using relative positioning
            // Our template ALWAYS creates options in this order:
            // Option 1 = "За" (FOR), Option 2 = "Против" (AGAINST), Option 3 = "Воздержался" (ABSTAIN)
            // So: minId = FOR, minId+1 = AGAINST, minId+2 = ABSTAIN

            // Find minimum VotingOptionId to establish baseline
            const allOptionIds = results.map(v => v.VotingOptionId);
            const minOptionId = Math.min(...allOptionIds);
            const mapping = {
              [minOptionId]: 'FOR',
              [minOptionId + 1]: 'AGAINST',
              [minOptionId + 2]: 'ABSTAIN'
            };

            console.log(`[CoconClient] 📊 Option ID mapping (baseId=${minOptionId}):`, mapping);

            console.log('========== VOTING RESULTS ==========');
            results.forEach((vote, index) => {
              const choice = mapping[vote.VotingOptionId] || 'UNKNOWN';
              console.log(`  ${index + 1}. DelegateId: ${vote.DelegateId}, VotingOptionId: ${vote.VotingOptionId} (${choice}), Seat: ${vote.SeatNumber}`);
            });
            console.log('====================================');
            console.log(`[CoconClient] Full results:`, JSON.stringify(results, null, 2));

            // TODO: Send results to server for database insertion
            // Format: [{ delegateId, choice: 'FOR'|'AGAINST'|'ABSTAIN', seatNumber }]
            const processedResults = results.map(vote => ({
              delegateId: vote.DelegateId,
              choice: mapping[vote.VotingOptionId] || 'UNKNOWN',
              seatNumber: vote.SeatNumber,
              votingOptionId: vote.VotingOptionId
            }));

            console.log(`[CoconClient] 📤 Processed results ready for server:`, JSON.stringify(processedResults, null, 2));

            // Return results for sending to server
            return {
              ok: true,
              agendaSequence: globalCurrentAgendaId,
              agendaDbId: dbId,
              votesCount: results.length,
              votes: processedResults
            };
          } else {
            console.log(`[CoconClient] ⚠️ No votes found - either nobody voted or results were cleared`);
            return { ok: true, votesCount: 0, votes: [] };
          }
        } else {
          console.error(`[CoconClient] ❌ Could not find DB ID for agenda ${globalCurrentAgendaId}`);
          return { ok: false, error: 'Could not find DB ID for agenda' };
        }
      } catch (e) {
        console.error(`[CoconClient] ❌ Failed to fetch voting results: ${e.message}`);
        return { ok: false, error: e.message };
      }
    } else {
      console.log(`[CoconClient] ⚠️ No agenda ID stored, skipping results fetch`);
      return { ok: true, votesCount: 0, votes: [] };
    }

    // DON'T CLEAR! Let's see if Clear is deleting results
    console.log(`[CoconClient] ⚠️ SKIPPING Clear to test if it deletes results...`);
    // Clear voting to return to VotingIdle state
    // try {
    //   console.log(`[CoconClient] Clearing voting...`);
    //   await this.setVotingState('Clear');
    //   console.log(`[CoconClient] Voting cleared successfully`);
    // } catch (e) {
    //   console.log(`[CoconClient] Clear voting failed: ${e.message}`);
    // }
  }

  // Get real DB ID from CoCon for agenda sequence number
  // CRITICAL: GetIndividualVotingResults needs IdInDb, not sequence!
  async getAgendaDbId(sequenceNumber) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) throw new Error('coConBase not configured');

    try {
      const url = `${coConBase}/Meeting_Agenda/GetAgendaItemInformationInRunningMeeting`;
      console.log(`[CoconClient] Getting agenda info from: ${url}`);
      const resp = await axios.get(url, { timeout: 10000 });
      const raw = typeof resp.data === 'string' ? safeParse(resp.data) : resp.data;

      const agendaItems = raw?.GetAgendaItemInformationInRunningMeeting?.AgendaItems || [];
      console.log(`[CoconClient] Found ${agendaItems.length} agenda items in meeting`);

      // Find item by sequence (Id field) or by State=active
      let targetItem = agendaItems.find(item => String(item.Id) === String(sequenceNumber));

      if (!targetItem) {
        // Try to find active voting item
        targetItem = agendaItems.find(item => item.State === 'active' && item.Type === 'VotingAgendaItem');
        console.log(`[CoconClient] No item with Id=${sequenceNumber}, using active voting item`);
      }

      if (targetItem && targetItem.IdInDb) {
        console.log(`[CoconClient] ✅ Found agenda item: Id="${targetItem.Id}", IdInDb=${targetItem.IdInDb}, State="${targetItem.State}"`);
        return targetItem.IdInDb;
      }

      console.error(`[CoconClient] ❌ Could not find agenda item with Id=${sequenceNumber}`);
      console.log(`[CoconClient] Available items:`, JSON.stringify(agendaItems.map(i => ({ Id: i.Id, IdInDb: i.IdInDb, State: i.State, Type: i.Type })), null, 2));
      return null;
    } catch (e) {
      console.error(`[CoconClient] Failed to get agenda DB ID: ${e.message}`);
      return null;
    }
  }

  // Get individual voting results for a specific agenda item
  // Returns array of votes: [{DelegateId, VotingOptionId, SeatNumber}, ...]
  async getIndividualVotingResults(agendaId) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) throw new Error('coConBase not configured');

    // Try WITHOUT Id parameter first - maybe it returns active voting results
    console.log(`[CoconClient] Trying to get results WITHOUT Id parameter (active voting)...`);
    try {
      const urlNoId = `${coConBase}/Voting/GetIndividualVotingResults`;
      console.log(`[CoconClient] URL: ${urlNoId}`);
      const respNoId = await axios.get(urlNoId, { timeout: 10000 });
      const rawNoId = typeof respNoId.data === 'string' ? safeParse(respNoId.data) : respNoId.data;

      console.log(`[CoconClient] Response WITHOUT Id:`, JSON.stringify(rawNoId, null, 2));

      const resultsNoId = rawNoId?.IndividualVotingResults?.VotingResults || [];
      if (resultsNoId.length > 0) {
        console.log(`[CoconClient] ✅ Got ${resultsNoId.length} votes WITHOUT Id parameter!`);
        return resultsNoId;
      }
    } catch (e) {
      console.log(`[CoconClient] GetIndividualVotingResults WITHOUT Id failed: ${e.message}`);
    }

    // Try WITH Id parameter (original approach)
    console.log(`[CoconClient] Trying WITH Id=${agendaId}...`);
    const url = `${coConBase}/Voting/GetIndividualVotingResults/?Id=${encodeURIComponent(agendaId)}`;
    console.log(`[CoconClient] URL: ${url}`);

    try {
      const resp = await axios.get(url, { timeout: 10000 });
      const raw = typeof resp.data === 'string' ? safeParse(resp.data) : resp.data;

      console.log(`[CoconClient] Response WITH Id=${agendaId}:`, JSON.stringify(raw, null, 2));

      const results = raw?.IndividualVotingResults?.VotingResults || [];
      console.log(`[CoconClient] Got ${results.length} individual votes for agenda ${agendaId}`);

      return results; // [{DelegateId, VotingOptionId, SeatNumber}, ...]
    } catch (e) {
      console.error(`[CoconClient] Failed to get individual voting results: ${e.message}`);
      return [];
    }
  }

  // Get aggregated voting results (total counts, not individual votes)
  // Returns: { votesFor, votesAgainst, votesAbstain, totalVotes }
  async getAggregatedVotingResults(agendaId) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) throw new Error('coConBase not configured');

    try {
      // CoCon 6.10 uses GetGeneralVotingResults instead of GetAggregatedVotingResults
      const url = `${coConBase}/Voting/GetGeneralVotingResults/?Id=${encodeURIComponent(agendaId)}`;
      console.log(`[CoconClient] Getting general voting results from: ${url}`);
      const resp = await axios.get(url, { timeout: 10000 });
      const raw = typeof resp.data === 'string' ? safeParse(resp.data) : resp.data;

      console.log(`[CoconClient] GetGeneralVotingResults response:`, JSON.stringify(raw, null, 2));

      const options = raw?.GetGeneralVotingResults?.VotingResults?.Options || [];

      // Find options by description or color
      // Our template has: "За" (Green), "Против" (Red), "Воздержался" (Yellow)
      const optionFor = options.find(opt => opt.Name === 'За' || opt.Name === 'FOR' || opt.Color?.includes('008000'));
      const optionAgainst = options.find(opt => opt.Name === 'Против' || opt.Name === 'AGAINST' || opt.Color?.includes('FF0000'));
      const optionAbstain = options.find(opt => opt.Name === 'Воздержался' || opt.Name === 'ABSTAIN' || opt.Color?.includes('FFFF00'));

      const votesFor = optionFor?.Votes?.Count || 0;
      const votesAgainst = optionAgainst?.Votes?.Count || 0;
      const votesAbstain = optionAbstain?.Votes?.Count || 0;
      const totalVotes = votesFor + votesAgainst + votesAbstain;

      console.log(`[CoconClient] General results: FOR=${votesFor}, AGAINST=${votesAgainst}, ABSTAIN=${votesAbstain}, TOTAL=${totalVotes}`);

      return { votesFor, votesAgainst, votesAbstain, totalVotes };
    } catch (e) {
      console.error(`[CoconClient] Failed to get general voting results: ${e.message}`);
      return null;
    }
  }

  // Get voting option IDs mapping from aggregated results
  // Returns mapping: { optionIdFor: X, optionIdAgainst: Y, optionIdAbstain: Z }
  async getVotingOptionMapping(agendaId) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    if (!coConBase) throw new Error('coConBase not configured');

    try {
      const url = `${coConBase}/Voting/GetAggregatedVotingResults/?Id=${encodeURIComponent(agendaId)}`;
      console.log(`[CoconClient] Getting voting options mapping from: ${url}`);
      const resp = await axios.get(url, { timeout: 10000 });
      const raw = typeof resp.data === 'string' ? safeParse(resp.data) : resp.data;

      console.log(`[CoconClient] GetAggregatedVotingResults response:`, JSON.stringify(raw, null, 2));

      const options = raw?.AggregatedVotingResults?.Options || [];

      // Find option IDs by description
      // Our template has: "За", "Против", "Воздержался"
      const optionFor = options.find(opt => opt.Description === 'За' || opt.Description === 'FOR');
      const optionAgainst = options.find(opt => opt.Description === 'Против' || opt.Description === 'AGAINST');
      const optionAbstain = options.find(opt => opt.Description === 'Воздержался' || opt.Description === 'ABSTAIN' || opt.IsAbstain === true);

      const mapping = {
        optionIdFor: optionFor?.Id || null,
        optionIdAgainst: optionAgainst?.Id || null,
        optionIdAbstain: optionAbstain?.Id || null
      };

      console.log(`[CoconClient] Voting option mapping:`, mapping);
      return mapping;
    } catch (e) {
      console.error(`[CoconClient] Failed to get voting option mapping: ${e.message}`);
      // Return null mapping - will need to handle this
      return { optionIdFor: null, optionIdAgainst: null, optionIdAbstain: null };
    }
  }

  async disableMicrophone(userId) {
    const coConBase = (this.cfg.coConBase || '').replace(/\/$/, '');
    const meetingId = await this.getRunningMeetingId();
    if (!meetingId) throw new Error('No running meeting');
    const seatResp = await axios.get(`${coConBase}/Meeting_Agenda/GetDelegateSeating/?MeetingId=${encodeURIComponent(meetingId)}`, { timeout: 8000 });
    const seatRaw = typeof seatResp.data === 'string' ? safeParse(seatResp.data) : seatResp.data;
    const seats = seatRaw?.GetDelegateSeating?.DelegateSeating || [];
    const seat = seats.find(d => String(d.DelegateId) === String(userId));
    if (!seat) throw new Error('Delegate not in seating');
    const url = `${coConBase}/Microphone/SetMicrophoneOff/?SeatId=${encodeURIComponent(seat.SeatId)}`;
    await axios.get(url, { timeout: 8000 });
    return 'OK';
  }
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return null; }
}

function isoNoMs(d) {
  return d.toISOString().slice(0,19);
}

module.exports = { CoconClient };
