const { io } = require('socket.io-client');
const os = require('os');
const crypto = require('crypto');

function ensureConnectorId(store) {
  let id = store.get('connector.connectorId');
  if (!id || typeof id !== 'string' || id.length < 4) {
    id = 'conn-' + crypto.randomBytes(4).toString('hex');
    store.set('connector.connectorId', id);
  }
  return id;
}

function deviceInfo() {
  return {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
  };
}

async function startSocketBridge({ store }) {
  const site = store.get('site') || {};
  const cocon = store.get('cocon') || {};
  const security = store.get('security') || {};
  const connectorId = ensureConnectorId(store);

  const socketBase = (site.socketUrl || 'https://rms-bot.com').replace(/\/$/, '');
  const namespace = site.namespace || '/cocon-connector';
  const topic = site.topic || 'default-topic';
  const roomId = cocon.roomId || 1;

  const url = socketBase + namespace;

  const sock = io(url, {
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 2000,
    reconnectionDelayMax: 8000,
    auth: {
      token: security.token || '',
      connectorId,
      topic,
      roomId,
    },
  });

  // Запуск CoCon Event Listener
  console.log('[socket] ============================================');
  console.log('[socket] Attempting to load CoconEventListener...');
  let eventListener = null;
  try {
    const { CoconEventListener } = require('./coconEventListener');
    console.log('[socket] CoconEventListener class loaded successfully!');
    eventListener = new CoconEventListener({
      store,
      socketClient: { socket: sock }
    });
    console.log('[socket] CoconEventListener instance created!');
  } catch (e) {
    console.log('[socket] ❌ CoconEventListener FAILED:', e.message);
    console.log('[socket] Error stack:', e.stack);
  }
  console.log('[socket] ============================================');

  sock.on('connect', async () => {
    try {
      const hello = {
        connectorId,
        topic,
        roomId,
        mmeIp: cocon.mmeIp,
        mmePort: cocon.mmePort,
        roomServerIp: cocon.roomServerIp,
        roomServerSecondaryIp: cocon.roomServerSecondaryIp,
        roomName: cocon.roomName,
        serverVersion: cocon.serverVersion,
        protocolVersion: cocon.protocolVersion,
        device: deviceInfo(),
        capabilities: [
          'CreateAgenda',
          'GetDelegatesOnSeats',
          'EndAgenda',
          'AddQuestionInAgenda',
          'StartVotingInAgenda',
          'SetCurrentQuestionInAgenda',
          'RestartVotingForQuestion',
          'GetAllDelegates',
          'GetVotingAgendaTemplates',
          'DisableMicrophone',
        ],
      };
      sock.emit('connector:hello', hello);

      // Запускаем event listener после успешного подключения
      console.log('[socket] ✅ Socket CONNECTED! EventListener exists:', !!eventListener);
      if (eventListener) {
        console.log('[socket] 🚀 Starting eventListener...');
        eventListener.start();
        console.log('[socket] ✅ EventListener started!');
      } else {
        console.log('[socket] ❌ NO eventListener to start!');
      }

      // Create voting template with CanCorrect=true on startup (once)
      // Check if template already exists to avoid duplicates
      try {
        const { CoconClient } = require('./coconClient');
        const client = new CoconClient({ store });

        console.log('[socket] Checking for existing voting templates...');
        const templates = await client.getVotingTemplates();
        const templateName = 'Vote_Correctable_Dynamic';
        const exists = templates.some(t => (t.Title || t.Name) === templateName);

        if (exists) {
          console.log(`[socket] ✅ Template "${templateName}" already exists, skipping creation`);
        } else {
          console.log('[socket] Creating voting template with dynamic timer (CanCorrect=true)...');
          await client.createVotingTemplate({
            title: templateName,
            voteType: 'OPEN',
            duration: 300, // Default 5 minutes (will be overridden per vote)
            canCorrect: true
          });
          console.log('[socket] ✅ Voting template created successfully!');
        }
      } catch (e) {
        console.log('[socket] ⚠️ Could not check/create voting template:', e.message);
      }
    } catch (e) {
      // ignore
    }
  });

  sock.on('disconnect', (reason) => {
    // console.log('[socket] disconnected:', reason);
    // Останавливаем event listener при отключении
    if (eventListener) {
      eventListener.stop();
    }
  });
  sock.on('connect_error', (err) => {
    // console.log('[socket] connect_error:', err.message);
  });

  // Command execution handler (server → connector)
  sock.on('server:command:exec', async (cmd) => {
    const { id, type, payload } = cmd || {};
    try {
      if (id) sock.emit('connector:command:ack', { id });

      const { handleCommand } = require('./commandHandlers');
      const result = await handleCommand({ type, payload, store });

      // Special handling for StopVoting: send voting results to server
      // Send both individual votes (if available) and aggregated results
      if (type === 'StopVoting' && result && result.ok) {
        const hasIndividualVotes = result.votes && result.votes.length > 0;
        const hasAggregatedResults = result.aggregated && result.aggregated.totalVotes > 0;

        if (hasIndividualVotes || hasAggregatedResults) {
          console.log(`[socket] 📤 Sending voting results to server...`);
          sock.emit('connector:voting:results', {
            agendaSequence: result.agendaSequence,
            agendaDbId: result.agendaDbId,
            votesCount: result.votesCount || 0,
            votes: result.votes || [],
            aggregated: result.aggregated || null,
            timestamp: new Date().toISOString()
          });

          if (hasIndividualVotes) {
            console.log(`[socket] ✅ Sent ${result.votesCount} individual votes to server`);
          }
          if (hasAggregatedResults) {
            console.log(`[socket] ✅ Sent aggregated results: FOR=${result.aggregated.votesFor}, AGAINST=${result.aggregated.votesAgainst}, ABSTAIN=${result.aggregated.votesAbstain}`);
          }
        } else {
          console.log(`[socket] ⚠️ StopVoting completed but no votes found (neither individual nor aggregated)`);
        }
      }

      if (id) {
        sock.emit('connector:command:result', { id, ok: true, data: result || null });
      }
    } catch (e) {
      if (id) {
        sock.emit('connector:command:result', { id, ok: false, error: e?.message || String(e) });
      }
    }
  });

  // Expose minimal status in store (for UI via /api/config)
  setInterval(() => {
    store.set('connector.lastSocketStatus', {
      connected: sock.connected,
      id: sock.id,
      ts: Date.now(),
    });
  }, 2000);
}

module.exports = { startSocketBridge };

