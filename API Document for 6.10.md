# CoCon API Description

## Copyright

All information in this document is subject to change without notice. No part of this document may be reproduced or transmitted in any form or by any means, electronic or mechanical, for any purpose, without the express written permission of Televic. (c) 2020 Televic NV. All rights reserved.

## Document history

|  Version | Author | Date | Description  |
| --- | --- | --- | --- |
|  0.01 | JV | 23/01/2014 | Initial version  |
|  0.02 | DL | 12/02/2014 | Add commands description  |
|  0.03 | DL | 13/02/2014 | Add badge event and delegate event  |
|  0.04 | DL | 07/03/2014 | Add user information during microphone state change  |
|  1.0 | JV | 22/05/2014 | Finalized the API for CoCon v3.1  |
|  1.1 | JV | 16/06/2014 | Added commands for individual voting results  |
|  1.2 | JV | 24/06/2014 | Defined the event model and commands  |
|  1.3 | JV | 11/07/2014 | Added the "ButtonLED_Event" model  |
|  1.4 | JV | 18/08/2014 | Added commands for
- Interactive model: Delegate screen control
- Start meeting from XML file
- Agenda and voting control  |
|  1.5 | MP | 31/10/2014 | Added and improved commands in the Meeting_Agenda
model  |
|  1.6 | GL | 25/11/2014 | Modify SeatTimerPauseResumed name and parameters  |
|  1.7 | GL | 26/12/2014 | Added commands for  |

|  |   |   |   |
| --- | --- | --- | --- |
|  1.8 | GL | 12/01/2015 | Added commands for <br> - Initialization  |
|  1.9 | GL/MP | 21/04/2015 | Added command for <br> - SetNextButtonLedStatus <br> - SetPriorButtonLedStatus <br> - NextButtonPressedEvent <br> - PriorButtonPressedEvent <br> - Send message to Operator  |
|  2.0 | GL/MP | 04/05/2015 | Agenda item ID replaced with sequence number ID is not well readable for user. <br> But Sequence number is string ,It might be "1", "1.1", "1.1.2" <br> Added commands for <br> - RemoveAgendaltemById <br> - DeleteAllAgendaltems <br> - MoveAgendaltem  |
|  2.1 | GL/MP | 21/05/2015 | Added commands for Interpretation  |
|  4.1 | KMA/MP | 25/01/2016 | Updated with commands for <br> - Interpreter <br> - Intercom <br> - Flexible delegate <br> - Timer  |
|  4.5 | KMA | 28/08/2016 | Updated commands for <br> - Room (initialization)  |
|  5.0 | MP/KMA | 03/04/2017 | Update API for <br> - Timer setting enabled / disabled <br> - Video application <br> - API for microphone activation type <br> - GetUnitErrorState <br> - GetMatrixNodeStatus <br> - GetCUState <br> - GetNetworkDeviceList  |
|  5.1 | MP/KMA | 12/07/2017 | Update API for: <br> - StartEmptyMeeting (With login method as optional) <br> - GetCulpAddress <br> - SetCulpAddress <br> - RestartRoomServer <br> - GetAmountOfVotes <br> - NotifyExternalCall <br> - Intercom Parameter name improved. (Request/ Accept /End call ) <br> - AddSeat (New API) <br> - RemoveSeat (New API) <br> - AddChannel / EditChannel (add new para : IsRecording)  |

| 5.1.1 | MP | 11/07/2017 | - Audio preset commands. (Newly added) <br> - Interpreter Preset API improved with new optional parameter. <br> - Remove unit from room. <br> - SaveAndSendInterpreterPreset <br> - AddDelegatesToMeeting <br> - AddDelegatesToSeats <br> - EditSeat \& EditBooth (intercom new field) <br> - Audio API update events (MatrixNodeUpdated; ActiveAudioPresetUpdated; MatrixNodeVolumeUpdated) <br> - API name correction and keep old API for exiting customer.(ActivateNextMicrophone; GetAudioConfigurationDetailByld; GetAudioConfigurationDetailByName) <br> - SetMicrophoneSensitivity / MicrophoneSensitivityUpdated <br> - SetDelegateTimer \& SetGroupTimer update event added with the correct name. |
| :--: | :--: | :--: | :--: |
| 5.2 | MP | 12/20/2017 | - AddSynoptic <br> - EditSeat (IsChairman) <br> - GetDefaultMicrophoneModeForRoom <br> - SetDefaultMicrophoneModeForRoom <br> - DefaultMicrophoneModeForRoomUpdated <br> - ClearAllMeetingAndDelegateData <br> - AddVotingTemplate |
| 5.3.2 | MP | 09/10/2018 | - ResetDelegateTimer <br> - ResetGlobalDelegateTimer <br> - ResetGroupTimer <br> - ResetGlobalGroupTimer <br> - ChangeDelegateTimer <br> - ChangeGroupTimer <br> - ResendMeetingData <br> - keypad_login_code (notification api) |
| 5.4 | MP | 05/12/2018 | - Updated api <br> 1. Voting template with new para " IsUnanimous" <br> 2. AddDelegate, EditDelegate, DelegateAdded \& Delegateupdated api calls with new Para"MiddleName", "FingerprinterData", "KeypadLoginCode" <br> - Newly added api <br> 1. SetAudioSoftwareConfigurationByld (update notification) <br> 2. CurrentAudioSoftwareConfigurationUpdated(upd ate notification) <br> 3. GetGeneralVotingResults <br> 4. Recording Module <br> i. GetRecordingFilesInfo <br> ii. Startrecording |

|  |   |   |   |   |
| --- | --- | --- | --- | --- |
|   |  |  |  | iii. Stoprecording  |
|   |  |  |  | iv. Getrecordingstate  |
|   |  |  |  | 5. Wireless Coupling Module  |
|   |  |  |  | i. Getwcapinfo  |
|   |  |  |  | ii. Getallwcapinfo  |
|   |  |  |  | iii. SetWcapCoupledMode  |
|  5.4.1 | MP | 04/17/2019 |  | - API updated :  |
|   |  |  |  | 1. ClearAllMeetingAndDelegateData with optional  |
|   |  |  |  | parameter "IncludeService=True/False"  |
|  6.0 | JHO | 05/20/2019 |  | - API updated: CoCon for Plixus no longer supported  |
|  6.1 | MP / ISA | 12/10/2019 |  | - Added new api :  |
|   |  | 22/10/2019 |  | 1. ServiceRequestEvent  |
|   |  |  |  | 2. GetServiceList  |
|   |  |  |  | 3. GetServiceListbyMeetingId  |
|   |  |  |  | 4. GetServiceState  |
|   |  |  |  | 5. SetServiceRequestState  |
|   |  |  |  | 6. GetVotingAgendaTemplateList  |
|   |  |  |  | 7. GetAgendaDetailById  |
|   |  |  |  | 8. FingerprintEvent  |
|   |  |  |  | 9. RemoveDelegatesFromSeat  |
|   |  |  |  | 10. RemoveAllDelegatesFromSeat  |
|   |  |  |  | - API updated with additional optional parameters  |
|   |  |  |  | 1. SetDelegateScreen/Discussion:  |
|   |  |  |  | "VideoStream=1"  |
|   |  |  |  | Updated \& Validated api document for 6.1  |
|  6.2 | FN | 02/01/2020 |  | - Extended SetNextButtonEnabled and  |
|   |  |  |  | SetPriorButtonEnabled with possibility to apply to all  |
|   |  |  |  | seats (indicating seat number 9999)  |
|   |  |  |  | - Added a note that ButtonLED_Event module is  |
|   |  |  |  | default NOT subscribed.  |
|  6.2 | FN | 22/01/2020 |  | Added a note regarding  |
|   |  |  |  | GetCurrentAudioSoftwareConfigurationInDetails call which  |
|   |  |  |  | only returns the current saved configuration info.  |
|  6.3 | MP | 10/03/2020 |  | - Newly added API for Interpretation  |
|   |  |  |  | 1. AssignDeskToBooth  |
|   |  |  |  | 2. Unassigndesk  |
|   |  |  |  | 3. UpdateBooth.  |

|  6.3.2 | MP/FN | 18/11/2020 | - | SetCustomScreenOnSeat/SetCustomScreenOnRoom api extended with fullscreen parameter
- GetIndividualVotingResults
- Removed the MaxNbRequest parameter as option for microphone mode (no longer supported)
- Added documentation for GetActivationType call which was already supported
- SetNextButtonLedStatus and SetPriorButtonLedStatus are applied on seat level now  |
| --- | --- | --- | --- | --- |
|  6.3.2 | FN | 07/01/2021 | - | Added API call Voting/DeleteVotingTemplate
- Added API call Interactive/DisableDelegateScreen  |
|  6.3.2
6.3.3 | FN | 24/02/2021 | - | Correct parameter of NextButtonPressed and PriorButtonPressed towards seat ID
- Added sections which were part of separate application note (enabling of API and best practices)
- Updated response of StartEmtpyMeeting
- Added notes regarding using API calls to remove delegate from seat (only working in fixed seating mode)  |
|  6.3.3 | FN | 31/03/2021 | - | Added example for SetCustomScreen
- Added API call AddChannels
- Updated description of RemoveDelegateFromMeeting API call which is not allowed once delegate has participated in a voting
- Removed MaxNrRequest as return value from API call "Get", since not relevant anymore since Core version
- Added API call to change delegate and group timer state  |
|  6.3.3 | FN | 20/04/2021 | - | Added API call GetAllMeetings
- Added API call SetSeatPriority
- Added API call EditMeetingTitle  |
|  6.3.4 | FN | 30/09/2021 | - | Added API call ResetScreen
- Added comment about Timer event intervals
- Updated FingerprintEvent
- Added API call GetAuthorityOverview
- Added module OperatorCustomization (both API calls as event)  |
|  6.3.4b | FN / MP | 02/03/2022
17/03/2022 | - | Limitations for custom buttons and labels
- Added API call Disconnect (already present since version 6.3.3)
- Fixed API call documentation for SetDefaultMicrophoneModeForRoom
- Added API call GetSynoptic
- Added optional parameter (SeatId) on All Interactive api(s) call.
- Added Video API:  |

|   |  |  | - GetVideoInputParts
- GetVideoOutputParts
- GetVideoConfigurations
- GetCurrentVideoConfigurationInDetails
- ActivateVideoConfigurationById
- SetVideoStreamProperties
- AddVideoPartToInputGroup
- AddVideoPartToOutputGroup
- RemoveVideoPartFromInputGroup
- RemoveVideoPartFromOutputGroup
- SetVideoStreamInputGroup
- SetVideoStreamOutputGroup
- SaveActiveVideoConfiguration
- AddVideoConfiguration
- RemoveVideoConfiguration
- GetVideoConfiguration
- AddVideoInputGroup
- AddVideoOutputGroup
- DeleteVideoInputGroup
- DeleteVideoOutputGroup  |
| --- | --- | --- | --- |
|  6.4 | JZ / MP | 16/11/2022 | - API for Intercom
- RegisterToSeat
- GetCallerList
- RequestConversation
- AcceptConversation
- EndConversation
- GetSeatsloginstatus  |
|  6.5 | JZ | 30/03/2023 | - Additional parameter 'AuthorityBadge' for API:
- AddDelegate
- EditDelegate  |
|  6.6 | JZ | 27/06/2023 | - Added API SetMicLED  |
|  6.8 | JZ | 7/5/2024 | - Updated description for StartEmptyMeeting API call  |
|  6.9 | JZ | 24/9/2024 | - Updated description of IndividualVotingResults
- Added API StopPresenceDetection
- Added API ClearQuorumMessage  |

Table of Contents

## Table of Contents

1 Introduction & Scope ..................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

4.1.1.23 HomeControl : ScreenControlOptions ..... 38
4.1.1.24 DiscussionControl : ScreenControlOptions ..... 38
4.1.1.25 AgendaControl : ScreenControlOptions ..... 38
4.1.1.26 DelegatesControl : ScreenControlOptions ..... 39
4.1.1.27 VotingControl : ScreenControlOptions ..... 39
4.1.1.28 DocumentsControl : ScreenControlOptions ..... 39
4.1.1.29 MessagesControl : ScreenControlOptions ..... 39
4.1.1.30 ServicesControl : ScreenControlOptions ..... 39
4.1.1.31 ConfigurationControl : ScreenControlOptions ..... 39
4.1.1.32 Unit ..... 39
4.1.1.33 Channel ..... 39
4.1.1.34 InterpreterPreset ..... 40
4.1.1.35 DeskUnitInChannel ..... 40
4.1.1.36 ChannelRealtimeData ..... 40
4.2 Server to client ..... 40
4.2.1 Room ..... 41
4.2.1.1 InitializationState ..... 41
4.2.1.2 UnitStateChanged ..... 41
4.2.1.3 VolumeChangedForRoom ..... 41
4.2.1.4 UnitError ..... 42
4.2.2 Microphone ..... 42
4.2.2.1 MicrophoneState ..... 42
4.2.2.2 MicrophoneMode ..... 43
4.2.2.3 MicButtonEvent ..... 44
4.2.2.4 MicrophoneSensitivityUpdated ..... 44
4.2.2.5 MicStateChangedInRunningMeeting ..... 44
4.2.3 Meeting_Agenda ..... 45
4.2.3.1 MeetingTitleChanged ..... 45
4.2.3.2 MeetingStatus ..... 45
4.2.3.3 MeetingAgendaChanged ..... 46
4.2.3.4 Agenda_ItemChanged ..... 46
4.2.3.5 Keypad_login_code ..... 47
4.2.3.6 FingerprintEvent ..... 47
4.2.4 Voting ..... 48
4.2.4.1 VotingState ..... 48
4.2.4.2 VotingOutcome ..... 48
4.2.4.3 GeneralVotingResults ..... 49
4.2.4.4 IndividualVotingResults ..... 49
4.2.4.5 VotingTemplateAdded ..... 49
4.2.5 Timer ..... 55
4.2.5.1 MeetingTimerEvent ..... 55
4.2.5.2 MeetingTimerStateChange ..... 55
4.2.5.3 DelegateTimerEvent ..... 56
4.2.5.4 DelegateTimerStateChange ..... 56

4.2.5.5 GroupTimerEvent ..... 56
4.2.5.6 GroupTimerStateChange ..... 57
4.2.5.7 SeatTimerEvent ..... 57
4.2.5.8 SeatTimerPauseResumed ..... 58
4.2.5.9 ActiveAgendaltemTimerEvent ..... 58
4.2.5.10 ActiveAgendaltemTimerPauseResumed ..... 58
4.2.5.11 VotingTimerEvent ..... 59
4.2.5.12 VotingTimerPauseResumed ..... 59
4.2.6 Delegate ..... 60
4.2.6.1 BadgeEvent ..... 60
4.2.6.2 DelegateOnSeat ..... 60
4.2.6.3 DelegateSeatingUpdated ..... 61
4.2.6.4 MeetingStartsUserInformation ..... 61
4.2.6.5 DelegateUpdated ..... 62
4.2.6.6 DelegateAdded ..... 62
4.2.6.7 DelegateRemoved ..... 63
4.2.6.8 DelegateSeatingUpdated ..... 64
4.2.6.9 DelegatesInMeetingUpdated ..... 64
4.2.7 Interactive ..... 65
4.2.7.1 ScreenLockRemoved ..... 65
4.2.7.2 DelegateScreenSetChanged ..... 65
4.2.7.3 CustomButtonEvent ..... 66
4.2.7.4 ServiceRequestEvent ..... 66
4.2.8 Audio ..... 66
4.2.8.1 SetAudioSoftwareConfigurationById ..... 66
4.2.8.2 CurrentAudioSoftwareConfigurationUpdated ..... 66
4.2.9 Logging ..... 67
4.2.9.1 ConnectionLost_CentralUnit ..... 67
4.2.9.2 ConnectionLost_Database ..... 67
4.2.10 ButtonLED_Event ..... 68
4.2.10.1 ButtonPressed ..... 68
4.2.10.2 NextButtonPressed ..... 68
4.2.10.3 PriorButtonPressed ..... 69
4.2.11 Interpretation ..... 70
4.2.11.1 IMicrophoneStateUpdated ..... 70
4.2.11.2 IActivatedChannelUpdated ..... 70
4.2.11.3 SpeakSlowerRequest ..... 70
4.2.11.4 SpeakSlowerEnded ..... 71
4.2.11.5 ActivePresetStateChanged ..... 71
4.2.12 Recording ( AE-R \& Plixus Core only) ..... 71
4.2.12.1 RecordingStatusUpdate ..... 71
4.2.13 Wireless Coupling ..... 72
4.2.13.1 WcapInfoUpdated ..... 72
4.2.13.2 WcapCoupledUpdated ..... 72
4.2.13.3 AllWcapInfoUpdated ..... 72

4.2.14 Operator Customization ..... 73
4.2.14.1 CustomButtonPressed ..... 73
4.2.15 Intercom ..... 73
4.2.15.1 CallerUnitStateUpdated ..... 73
4.2.15.2 CallerStateUpdated ..... 73
4.2.15.3 ConversationRequested ..... 74
4.2.15.4 ConversationAccepted ..... 74
4.2.15.5 ConversationEnded ..... 75
4.3 Client to server ..... 76
4.3.1 General ..... 76
4.3.1.1 Connect ..... 76
4.3.1.2 Disconnect ..... 76
4.3.1.3 Subscribe ..... 77
4.3.1.4 Unsubscribe ..... 77
4.3.1.5 Notification ..... 77
4.3.1.6 RebootSystem ..... 78
4.3.2 Room ..... 79
4.3.2.1 GetRoomServerName ..... 79
4.3.2.2 GetActiveRoomInfo ..... 79
4.3.2.3 GetStatusOfCuAndDbConnection ..... 79
4.3.2.4 SetInitializationState ..... 80
4.3.2.5 GetAllUnitsState ..... 80
4.3.2.6 SetDefaultVolumeForRoom ..... 81
4.3.2.7 GetDefaultMicrophoneModeForRoom ..... 81
4.3.2.8 SetDefaultMicrophoneModeForRoom ..... 82
4.3.2.9 SetVolumeForRoom ..... 83
4.3.2.10 AddSynoptic ..... 83
4.3.2.11 GetSynoptic ..... 84
4.3.2.12 GetAllSeats ..... 84
4.3.2.13 GetBooths ..... 85
4.3.2.14 EditSeat ..... 85
4.3.2.15 GetAllUnits ..... 86
4.3.2.16 SetOperatingMode ..... 86
4.3.2.17 GetOperatingMode ..... 87
4.3.2.18 ClearAllMeetingAndDelegateData ..... 87
4.3.2.19 SetSeatPriority ..... 88
4.3.3 Microphone ..... 89
4.3.3.1 SetState ..... 89
4.3.3.2 SetMicrophoneMode ..... 89
4.3.3.3 SetActivationType ..... 90
4.3.3.4 SetMicrophoneSensitivity ..... 90
4.3.3.5 Get ..... 92
4.3.3.6 GetState ..... 92
4.3.3.7 ClearMicrophoneList ..... 92

4.3.3.8 GetMicrophoneMode ..... 93
4.3.3.9 GetActivationType ..... 93
4.3.3.10 ActivateNextMicrophone ..... 93
4.3.4 Meeting_Agenda ..... 94
4.3.4.1 SetMeetingState ..... 94
4.3.4.2 StartEmptyMeeting ..... 94
4.3.4.3 GetMeetingsForToday ..... 95
4.3.4.4 GetAllMeetingsForDate ..... 96
4.3.4.5 GetMeetingByld ..... 96
4.3.4.6 SetActiveAgendaltemByDirection ..... 96
4.3.4.7 SetActiveAgendaltemByld ..... 97
4.3.4.8 GetAgendaltemInformationInRunningMeeting ..... 97
4.3.4.9 GetAgendaltemInformationInMeetingByld ..... 98
4.3.4.10 GetAgendaltemByld ..... 98
4.3.4.11 StartMeetingViaMeetingTemplate ..... 99
4.3.4.12 StartMeetingViaXMLimport ..... 99
4.3.4.13 AddAgendaltem ..... 101
4.3.4.14 GetLoginMethodForMeeting ..... 101
4.3.4.15 RemoveAgendaltemByld ..... 102
4.3.4.16 DeleteAllAgendaltems ..... 102
4.3.4.17 MoveAgendaltem ..... 103
4.3.4.18 EditAgendaltem ..... 103
4.3.4.19 AddDelegateToMeeting ..... 104
4.3.4.20 AddDelegatesToMeeting ..... 104
4.3.4.21 RemoveDelegateFromMeeting ..... 105
4.3.4.22 GetDelegateSeating ..... 105
4.3.4.23 AddDelegateToSeat ..... 106
4.3.4.24 AddDelegatesToSeats ..... 106
4.3.4.25 RemoveDelegateFromSeat ..... 107
4.3.4.26 RemoveDelegatesFromSeat ..... 107
4.3.4.27 RemoveAllDelegatesFromSeat ..... 108
4.3.4.28 ApplyDelegatesToSystem ..... 108
4.3.4.29 EndActiveMeeting ..... 108
4.3.4.30 ResendMeetingData ..... 109
4.3.4.31 GetVotingAgendaTemplateList ..... 109
4.3.4.32 GetAgendaDetailByld ..... 109
4.3.4.33 GetAllMeetings ..... 110
4.3.4.34 EditMeetingTitle ..... 110
4.3.4.35 GetSeatsLoginStatus ..... 111
4.3.5 Voting ..... 112
4.3.5.1 SetVotingState ..... 112
4.3.5.2 AddInstantVote ..... 113
4.3.5.3 AddVotingTemplate ..... 113

4.3.5.4 GetVotingState ..... 121
4.3.5.5 GetAmountOfVotes ..... 122
4.3.5.6 GetGeneralVotingResults ..... 122
4.3.5.7 GetIndividualVotingResults ..... 122
4.3.5.8 DeleteVotingTemplate ..... 123
4.3.5.9 StopPresenceDetection ..... 123
4.3.5.10 ClearQuorumMessage ..... 124
4.3.6 Timer ..... 124
4.3.6.1 Get ..... 124
4.3.6.2 GetDelegateTimers ..... 124
4.3.6.3 GetSeatTimers ..... 125
4.3.6.4 GetGroupTimers ..... 125
4.3.6.5 GetActiveTimers ..... 125
4.3.6.6 SetDelegateTimer ..... 125
4.3.6.7 SetGroupTimer ..... 126
4.3.6.8 SetGlobalDelegateTimer ..... 127
4.3.6.9 SetGlobalSeatTimer ..... 128
4.3.6.10 SetGlobalGroupTimer ..... 128
4.3.6.11 ResetDelegateTimer ..... 129
4.3.6.12 ResetGlobalDelegateTimer ..... 130
4.3.6.13 ResetGroupTimer ..... 130
4.3.6.14 ResetGlobalGroupTimer ..... 130
4.3.6.15 ChangeDelegateTimer ..... 132
4.3.6.16 ChangeGroupTimer ..... 132
4.3.6.17 ChangeDelegateTimerState ..... 133
4.3.6.18 ChangeGroupTimerState ..... 133
4.3.7 Delegate ..... 134
4.3.7.1 GetDelegatesInMeeting ..... 134
4.3.7.2 GetDelegatesInCurrentMeeting ..... 135
4.3.7.3 ClearAllDelegatesAndGroups ..... 135
4.3.7.4 GetAllDelegates ..... 136
4.3.7.5 AddDelegate ..... 136
4.3.7.6 RemoveDelegate ..... 138
4.3.7.7 EditDelegate ..... 138
4.3.7.8 ImportDelegatesFromFile ..... 141
4.3.7.9 GetAuthorityOverview ..... 142
4.3.8 Interactive ..... 143
4.3.8.1 SetDelegateScreen ..... 143
4.3.8.2 RemoveScreenLock ..... 149
4.3.8.3 SetCustomButtonOnSeat ..... 149
4.3.8.4 SetCustomButtonOnRoom ..... 149
4.3.8.5 SetCustomLabelOnSeat ..... 150
4.3.8.6 SetCustomLabelOnRoom ..... 150

4.3.8.7 SetCustomScreenOnSeat ..... 150
4.3.8.8 SetCustomScreenOnRoom ..... 151
4.3.8.9 GetServiceList ..... 152
4.3.8.10 GetServiceListbyMeetingId ..... 152
4.3.8.11 SetServiceRequestState ..... 152
4.3.8.12 GetServiceRequestStates ..... 152
4.3.8.13 DisableDelegateScreen ..... 153
4.3.8.14 ResetScreen ..... 153
4.3.9 Audio ..... 155
4.3.9.1 GetCurrentAudioSoftwareConfiguration ..... 155
4.3.9.2 GetCurrentAudioSoftwareConfigurationInDetails ..... 155
4.3.9.3 GetAudioSoftwareConfigurations ..... 161
4.3.9.4 GetAudioGroupsInCurrentConfiguration ..... 161
4.3.9.5 SetAudioSoftwareConfigurationById ..... 162
4.3.9.6 SetAudioSoftwareConfigurationByName ..... 162
4.3.9.7 ChangeMatrixNodeStatus ..... 163
4.3.9.8 GetMatrixNodeStatus ..... 163
4.3.9.9 SaveAudioSoftwareConfiguration ..... 164
4.3.10 Logging ..... 165
4.3.10.1 GetCUSteate ..... 165
4.3.10.2 GetUnitErrorState ..... 165
4.3.11 ButtonLED_Event ..... 165
4.3.11.1 SetButtonsEnabled ..... 165
4.3.11.2 SetLED ..... 166
4.3.11.3 SetNextButtonEnabled ..... 167
4.3.11.4 SetPriorButtonEnabled ..... 167
4.3.11.5 SetNextButtonLedStatus ..... 168
4.3.11.6 SetPriorButtonLedStatus ..... 168
4.3.11.7 SetMicLED ..... 169
4.3.12 External ..... 169
4.3.12.1 Send message to Operator ..... 169
4.3.12.2 NotifyExternalCall ..... 169
4.3.13 Interpretation ..... 171
4.3.13.1 GetAllBoothsInRoom ..... 171
4.3.13.2 AddLanguage ..... 171
4.3.13.3 RemoveLanguage ..... 171
4.3.13.4 ClearLanguages ..... 172
4.3.13.5 AddInterpreterPreset ..... 172
4.3.13.6 DeleteInterpreterPreset ..... 173
4.3.13.7 ApplyInterpreterPreset ..... 174
4.3.13.8 GetActiveInterpreterPreset ..... 174
4.3.13.9 GetAllInterpreterPresets ..... 175
4.3.13.10 GetAllLanguages ..... 175
4.3.13.11 GetAllChannels ..... 175

4.3.13.12 AddChannel ..... 176
4.3.13.13 AddChannels ..... 177
4.3.13.14 EditChannel ..... 178
4.3.13.15 DeleteChannel ..... 179
4.3.13.16 RemoveAllChannels ..... 179
4.3.13.17 SetDisplayText ..... 180
4.3.13.18 SaveInterpreterPresetAs ..... 180
4.3.13.19 GetAllChannelRealtimeData ..... 181
4.3.13.20 GetSpeakSlowerRequestList ..... 182
4.3.13.21 GetInterpreterPresetById ..... 182
4.3.13.22 AssignDeskToBooth ..... 183
4.3.13.23 UnassignDesk ..... 183
4.3.13.24 UpdateBooth ..... 184
4.3.14 API calls for Configurations ..... 184
4.3.14.1 GetCulpAddress ..... 184
4.3.14.2 SetCulpAddress ..... 185
4.3.14.3 RestartRoomServer ..... 185
4.3.14.4 GetCoconServerVersion ..... 185
4.3.15 Recording ( AE-R \& Plixus Core only) ..... 186
4.3.15.1 Getrecordingfilesinfo ..... 186
4.3.15.2 Startrecording ..... 186
4.3.15.3 Stoprecording ..... 187
4.3.15.4 Getrecordingstate ..... 187
4.3.16 Wireless coupling ..... 188
4.3.16.1 Getwcapinfo ..... 188
4.3.16.2 Getallwcapinfo ..... 188
4.3.16.3 SetWcapCoupledMode ..... 188
4.3.17 Operator Customization ..... 189
4.3.17.1 GetCustomButtons ..... 189
4.3.17.2 GetCustomLabels ..... 189
4.3.17.3 SetCustomButton ..... 189
4.3.17.4 SetCustomLabel ..... 190
4.3.17.5 SetCustomButtonState ..... 191
4.3.17.6 SetNumberOfCustomButtons ..... 191
4.3.17.7 SetNumberOfCustomLabels ..... 192
4.3.18 Video ..... 193
4.3.18.1 GetVideoInputParts ..... 193
4.3.18.2 GetVideoOutputParts ..... 193
4.3.18.3 GetVideoConfigurations ..... 193
4.3.18.4 GetCurrentVideoConfigurationInDetails ..... 194
4.3.18.5 ActivateVideoConfigurationById ..... 195
4.3.18.6 SaveActiveVideoConfiguration ..... 195
4.3.18.7 SetVideoStreamProperties ..... 196
4.3.18.8 AddVideoPartTolInputGroup ..... 197

4.3.18.9 AddVideoPartToOutputGroup ..... 197
4.3.18.10 RemoveVideoPartFromInputGroup ..... 198
4.3.18.11 RemoveVideoPartFromOutputGroup ..... 199
4.3.18.12 SetVideoStreamInputGroup ..... 199
4.3.18.13 SetVideoStreamOutputGroup ..... 200
4.3.18.14 SaveActiveVideoConfiguration ..... 201
4.3.18.15 AddVideoConfiguration ..... 201
4.3.18.16 RemoveVideoConfiguration ..... 202
4.3.18.17 GetVideoConfiguration ..... 202
4.3.18.18 AddVideoInputGroup ..... 203
4.3.18.19 AddVideoOutputGroup ..... 203
4.3.18.20 DeleteVideoInputGroup ..... 204
4.3.18.21 DeleteVideoOutputGroup ..... 204
4.3.19 Intercom ..... 205
4.3.19.1 RegisterToSeat ..... 205
4.3.19.2 GetCallerList ..... 205
4.3.19.3 RequestConversation ..... 206
4.3.19.4 AcceptConversation ..... 206
4.3.19.5 EndConversation ..... 207
5 Future commands ..... 208
5.1 Server to client ..... 208
5.2 Client to server ..... 208
6 Best practice for use of API ..... 209
6.1 Setting up and operating the CoCon API connection ..... 209
6.1.1 General ..... 209
6.1.2 Wireshark log screenshot of API connection ..... 209
6.2 Advised way of working ..... 211
6.3 To be avoided ..... 212

# List of figures

No table of figures entries found.

# List of tables

No table of figures entries found.

# Terminology

|  Name | Meaning  |
| --- | --- |
|  |   |

## References

|  ID | Reference | Version | Name and meaning  |
| --- | --- | --- | --- |
|  |   |   |   |

# 1 Introduction \& Scope

### 1.1 Introduction

This document contains the description of the API (Application Programmers' Interface) of the CoCon Room Server. Through this API, CoCon offers two functionalities:

- Publication of events that are happening in the conference room and software;
- External control of the conference room and software.

### 1.2 Scope

### 1.2.1 In scope

The current version of the document targets one technology that is used for the API. This is REST (Representational State Transfer) with JSON format. The general working of this system is described and the commands are defined and shown with examples.

### 1.2.2 Out of scope

- Other technologies than REST/JSON.
- Other external points of access to the CoCon software and Televic Conference products in general.

### 1.3 API module compatibility

This table shows which API modules are available in the different systems.

|  API Module |  | CoCon for
Plixus Core | Plixus Core  |
| --- | --- | --- | --- |
|  Server to Client |  |  |   |
|  4.2.1 Room |  |  |   |
|  4.2.1.1 | InitializationState | $\square$ | $\square$  |
|  4.2.1.2 | UnitStateChanged | $\square$ | $\square$  |
|  4.2.1.3 | VolumeChangedForRoom | $\square$ | $\square$  |
|  4.2.1.4 | UnitError | $\square$ | $\square$  |
|  4.2.2 Microphone |  |  |   |
|  4.2.2.1 | MicrophoneState | $\square$ | $\square$  |
|  4.2.2.2 | MicrophoneMode | $\square$ | $\square$  |
|  4.2.2.3 | MicButtonEvent | $\square$ | $\square$  |
|  4.2.2.4 | MicrophoneSensitivityUpdated | $\square$ | $\square$  |
|  4.2.2.5 | MicStateChangedInRunningMeeting | $\square$ | $\square$  |
|  4.2.3 Meeting Agenda |  |  |   |
|  4.2.3.1 | MeetingTitleChanged | $\square$ | $\square$  |

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  4.3.13 | Interpretation |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.1 | GetAllBoothsInRoom |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.2 | AddLanguage |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.3 | RemoveLanguage |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.4 | ClearLanguages |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.5 | AddInterpreterPreset |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.6 | DeleteInterpreterPreset |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.7 | ApplyInterpreterPreset |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.8 | GetActiveInterpreterPreset |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.9 | GetAllInterpreterPresets |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.10 | GetAllLanguages |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.11 | GetAllChannels |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.12 | AddChannel |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.12 | AddChannels |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.13 | EditChannel |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.14 | DeleteChannel |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.15 | RemoveAllChannels |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.16 | SetDisplayText |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.17 | SaveInterpreterPresetAs |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.18 | GetAllChannelRealtimeData |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.19 | GetSpeakSlowerRequestList |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.20 | GetInterpreterPresetById |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.21 | AssignDeskToBooth |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.22 | UnassignDesk |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.13.23 | UpdateBooth |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.14 | API calls for Configurations |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.14.1 | GetCulpAddress |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.14.2 | SetCulpAddress |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.14.3 | RestartRoomServer |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.14.4 | GetCoconServerVersion |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.15 | Recording ( AE-R & Plixus Core only) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |
|  4.3.15.1 | GetRecordingFilesInfo |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |   |

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 

|  API Module |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 

# 2 How to activate the API

## 2.1 Plixus Core

Plixus Core REST API can be enabled/disabled via the Plixus Engine webserver > Menu > Network

In that case API connection needs to be made directly to the Plixus Engine ip address – port 8890 and REST API needs to be enabled on the Plixus webserver

|  Subbedo | Plixe |  |  |   |
| --- | --- | --- | --- | --- |
|  |   |   |   |   |
|  |   |   |   |   |
|  |   |   |   |   |
|  |   |   |   |   |
|  Network information |  |  |  | Camera protocol  |
|   |  |  | Apply settings |   |
|   |  |  |  | Enable camera protocol  |
|   |  | Hostname | unicos_cu |   |
|   |  | IP address | 192.168.0.111 | REST API  |
|   |  | Subnet mask | 255.255.255.0 |   |
|   |  | Gateway |  | Enable REST API  |

## 2.2 Cocon for Plixus Core

In that case API connection needs to be made to the Cocon server ip address – port 8890, API needs to be enabled in the Cocon server configuration wizard

|  Server Set Up | |
| --- | --- |
|  Advanced settings | |
|  Module | |
|  General | |
|  ☐ Run the Room Server at Windows startup | |
|  API | |
|  ☑ Activate the API | |

# 3 General communication structure 

### 3.1 Communication format

### 3.1.1 REST/JSON

The technology being used for the CoCon API is REST (Representational State Transfer) with the JSON (JavaScript Object Notation) used. More information can be found at:
http://en.wikipedia.org/wiki/Representational state transfer
http://en.wikipedia.org/wiki/Json

### 3.1.2 Long polling

Since REST is a framework that does not natively allow to send messages from the server-side to the clientside, the CoCon API uses long polling to make sure that these messages can be sent. This means that a connection between client and server is kept open for a longer period of time. Over this connection, the server can then send information when and if it is available. See also the figure below:
![img-0.jpeg](img-0.jpeg)

### 3.2 Communication methods

Different Plixus setups are available. Depending on the Plixus system you have installed different use cases of the API are possible:

- CoCon for Plixus Core: this is the CoCon software specifically designed to work with Plixus Core. Also in this case the API will connect to the room server.
![img-1.jpeg](img-1.jpeg)
- Plixus Core: in this system part of the conference logic resides in the engine (such as initialization and audio settings). Configuration of these features goes through a web server (which navigates to the IP address of the engine). In this case the API connects to the Plixus engine.

![img-2.jpeg](img-2.jpeg)

Note:

- The Plixus Core API is a subset of the Cocon Core API. Only a limited set of modules is possible with the Plixus Core API. At the beginning of this document you can find an exhaustive list of all API modules together with the system that supports it.


# 3.3 Publish/Subscribe 

The CoCon API uses a Publish/Subscribe mechanism. This means that external clients who connect to the API can choose of which events they are being informed.
As can be seen below, there are commands contained in the API to subscribe or unsubscribe from each of the "Models". Each model contains a certain set of functionality in relation to the conference room and software. The currently available models are:

- Room: This module publish all necessary events for Room Initialization, Volume change, unit state.
- Microphone: this includes all events relating to microphone state change (on, off, in request) and changes of the microphone mode.
- Meeting_Agenda: this model contains all events with relation to the meeting (start, stop, pause, title change) and the agenda control in the meeting (next, previous, ...)
- Voting: this model will publish all information with regard to voting. This can be voting start, stop, pause, resume as well as individual and global voting results (if and when available).
- Timer: this model will publish all information about timers
- Delegate: this model contains all information about delegates in the meeting: detailed information, badge events,
- Interactive: this model allows controlling interactive meeting sessions. This is only applicable for the Televic uniCOS (PlixUs) CU and system.
- Audio : N/A
- Logging: This model will publish all status of connection between CoCon server and Database, Broken unit status and CU status.
- ButtonLED_Event: this model allows to listen to button events on the delegate units and set LEDs accordingly.
Some remarks specifically for this model:
- The order to use the commands is typically the following:
- "SetButtonsEnabled" to enable one or more buttons (section 4.3.11.1).
- Listen to the events "ButtonPressed", which mean that a button was pressed on a unit (section 4.2.10.1).
- Control the LEDs on the unit using the command "SetLED" (section 0).
- Note that CoCon does not guarantee that button events will always be sent out or set LEDs always responded upon. This is because in certain phases of operation (most notably voting sessions), the buttons and LEDs are used by CoCon for voting functionality.

- When a voting session is active, the buttons and LEDs are controlled by CoCon, and cannot be controlled externally by the API. This means that the ButtonLED_Event commands and events can only be used or listened to if the VotingState is equal to "Clear". See section Error! R eference source not found. For the notification of this state to the API client.
- When the voting session is ended, the buttons that were enabled before the voting session, by the ButtonLED_Event commands, are again enabled. However, the LED state is not restored. Keeping track of LED-state and re-setting this state is the responsibility of the API client.
- The functionality of this model depends heavily on the type of CU (Central Unit) and/or DU (Delegate Unit) to which CoCon is connected.
- External: This module send event for special button pressed by chairmen units.
- Interpretation: This module sent all the necessary events related to Interpretation.
- Intercom: This module sends the events related to Intercom communication.


# Note the following: 

- Upon connection, clients are by default subscribed to almost ALL models. If some information is not useful for the client in question, he can send commands to unsubscribe from certain of these models (see below for the Unsubscribe command).
- Default events for module "ButtonLED_Event" will NOT be received, since these events are 'blacklisted'. One will need to explicit subscribe to the "ButtonLED_Event" module.
- Clients can send commands to the CoCon API, independently from the models to which they are described. This means for example: a client who is NOT subscribed to the Microphone model CAN send a command to turn on a microphone, but will NOT be notified that the microphone has been turned.
This means that the API client needs to judiciously select the models to which it will subscribe and unsubscribe.
- Notification api call time-out :
- Response type 408 (intended to indicate time-outs)
- Time-out time of 30sec
- Response message : "Notification request timeout"
- Invalid notification (invalid id or id which has expired) :
- Response type 400 (bad request) for expired or invalid id
- Make clinet id expired if ther is no request of get notification in 180sec.
- Response message
- in case of expired session: "("Notification" : "Error 400")"
- in case of invalid id: "("Notification" : "Error 400")"


### 3.4 Setting up and operating the CoCon API connection

### 3.4.1 General

The CoCon API connection consists of a number of URI's (Uniform Resource Identifier) which are exchanged between the API client and the CoCon Server over a TCP/IP-connection.

In this document, it is assumed that the API Client and the CoCon Room Server are running on the same computer. This means that the URI's are using "localhost" as the target machine of the API-calls. Of course, if the CoCon Room Server is running on another machine and you are connecting to this machine, then you have to exchange "localhost" to the IP address or host name of the target machine.

Basically, the CoCon API uses two (or more) parallel HTTP-connections. These are the following:

- A "notification" connection that the client and Server keep open in case any information need to be transferred from the Server to the client.
- Any other connection that is used to transfer information from the client to the Server.

The notification connection should be initialized by the client, and is kept open by both sides. Then one of two things can happen:

- The Server has information to send to the client and uses the notification connection for this. The information is transferred and the connection is closed (as per the HTTP standard). After this, the client needs to create a new notification connection. The Server will guarantee that no information is lost during this short period where the client has no connection to the Server.
Note that the new notification connection needs to be created within 60 seconds. If this does not happen, the Server will discard the client data.
- The HTTP-connection times out before the Server has any information to send to the client. At this point, the client needs to create a new notification connection. Again, the Server will guarantee that no information is lost.


# 3.4.2 REST/JSON Example 

This section contains an example of the creation and operation of the API connection to the CoCon Server using the REST/JSON format.

The first URI that has to be sent to the CoCon API is the Connect URI:
http://localhost:8890/CoCon/Connect
As a reply, the following JSON string will be sent back:
"{"Connect":true,"id":"3f5b8afe-6efb-4428-8762-e39d42a0762d"}"
The first parameter indicates that the connection has succeeded; the second parameter is the Id of this connection that has to be used when opening the notification connection. In order to open this notification connection, the following URI has to be sent to the Server:
http://localhost:8890/CoCon/Notification/id=3f5b8afe-6efb-4428-8762-e39d42a0762d
Now the notification connection is open and the Server can send updates to the client. This can for example be the following:
\{"MicrophoneMode": \{"Mode" :":"Operator" ; "MaxNrActive" : <MaxActiveMicNumber> \}\}
This is an update of the Microphone Mode that is currently being used in the conference software and room. As discussed above, the CoCon Server will send all applicable updates to the API clients that are subscribed to the model that the event falls under. By default, clients are subscribed to all models. Unsubscribing can be done by sending the following URI over the API:
http://localhost:8890/CoCon/Unsubscribe/?Model=Logging\&id=3f5b8afe-6efb-4428-8762e39d42a0762d

This URI unsubscribes the current client from the Logging model. From this point onwards, no more events from the specified model will be sent to this API client.

When a microphone is activated, the following information will be sent over the notification connection:
\{"MicrophoneState":\{"Speakers":[1,5];"Requests":[7]\}
...which indicates that the microphones on seats 1 and 5 are on, and that the microphone on seat 7 is in request. After receiving this information, the client must re-open the notification connection.

The other way around, if the API client wants to activate a microphone, the following URI must be sent to the CoCon Server:
http://localhost:8890/CoCon/Microphone/SetState/?State=On\&SeatNr=9
...to turn on the microphone on seat 9 .

# 3.4.3 Server return values 

Over-all feedback from the CoCon during the $3^{\text {rd }}$ party API communication.
Command request based on integer data type:
>> 0: Command received successfully to CoCon server and handle.
>> 1: Command sends from $3^{\text {rd }}$ party with in-correct parameter value / parameter list.
>> -1: Command received correctly on CoCon server but exception happen due to the abnormal value send by user.

Command request based on the string data type:
Server returns data when command successful handled.
Server returns hint information for the unhandled command.

# 4 Operational commands 

This chapter contains the description of all commands making up the API. Note that the format has been kept general.

### 4.1 Data models

These models will be used to exchange information from and to the CoCon API.

### 4.1.1.1 AuthorityAssigned

This represents authority present voted, and register in the voting
Properties:

| Name | Description | Type |
| :--: | :--: | :--: |
| Present | The number of authorities that present in the <br> voting | int |
| Voted | The number of authorities that voted in the <br> voting | int |
| Register | The number of authorities that Register in the <br> voting | int |

### 4.1.1.2 Meeting

Data model that represents meeting object
Properties:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The id of the meeting | int |
| Title | The title of the meeting | string |
| Description | The description of the meeting | string |
| StartTime | The start time of the meeting | string |
| State | The state of the meeting <br> Paused; <br> Running; <br> Ended | string |

### 4.1.1.3 VotingCountWeight

Data model that represents the voting count and weight pair

| Name | Description | Type |
| :--: | :--: | :--: |
| Count | The count of the voting | int |
| Weight | The weight of the voting | double |

### 4.1.1.4 VotingOption

Data model that represents the voting option

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The id of the voting option | int |

|  Name | The name of the option | string  |
| --- | --- | --- |
|  Color | The color of the voting option | string  |

# 4.1.1.5 VotingOptionVoteDetail

Data model that represents the votingCountWeight of the voting option

|  Name | Description | Type  |
| --- | --- | --- |
|  Option | The related voting option | VotingOption  |
|  OptionVoted | The voted count and weight of the option | VotingCountWeight  |

### 4.1.1.6 VotingResultSummary

Data model that represents the summary result of the voting

|  Name | Description | Type  |
| --- | --- | --- |
|  Total | The total voting count and weight | VotingCountWeight  |
|  Voted | The voted voting count and weight | VotingCountWeight  |
|  NotVoted | The not voted voting count and weight | VotingCountWeight  |
|  Options | Each voting option count and weight | VotingOptionVoteDetail  |
|  AuthorityAssigned | The authority used in the voting | AuthorityAssigned  |

### 4.1.1.7 IndividualVote

Data model that represents the summary result of the voting

|  Name | Description | Type  |
| --- | --- | --- |
|  DelegateID | The ID of the delegate that has cast the vote | int  |
|  VotingOptionID | The ID of the voting option for which the vote
was cast
(Note: value 0 indicates that delegate has cast
vote but the vote is not seen by user) | int (single selection)
Array of int (multiple selection)  |

### 4.1.1.8 Timer

Data model that represents the timer

|  Name | Description | Type  |
| --- | --- | --- |
|  TotalTime | The total time (hh:mm:ss) | string  |
|  TimeUsed | Used time (hh:mm:ss) | string  |
|  CountingDown | Show counting down or up in CoCon | bool  |
|  WarningTime | Warning time in CoCon (hh:mm:ss) | string  |
|  enabled | Set enabled or disabled timer | bool  |

### 4.1.1.9 BaseObjectTimer

Data model that represents the object's timer

|  Name | Description | Type  |
| --- | --- | --- |
|  Timer | The timer of the object | Timer  |

# 4.1.1.10 DelegateTimer : BaseObjectTimer

Data model that represents the delegate's timer

|  Name | Description | Type  |
| --- | --- | --- |
|  DelegateId | The delegate's Id | int  |

### 4.1.1.11 GroupTimer : BaseObjectTimer

Data model that represents the group's timer

|  Name | Description | Type  |
| --- | --- | --- |
|  GroupId | The delegate's Id | int  |

### 4.1.1.12 SeatTimer : BaseObjectTimer

Data model that represents the timer of the seat

|  Name | Description | Type  |
| --- | --- | --- |
|  SeatNr | The number of the seat | int  |

### 4.1.1.13 Delegate

Data model that represents the delegate

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | The id of the delegate | int  |
|  FirstName | The first name of the delegate | string  |
|  Name | The name of the delegate | string  |
|  Street | The street that the delegate lives | string  |
|  StreetNumber | The street number of that street | int  |
|  PostCode | The post code of the delegate that he lives | string  |
|  City | The city that the delegate lives | string  |
|  Country | The country that the delegate lives | string  |
|  Title | The title of the delegate | string  |
|  BirthDate | The birth date of the delegate | string (format yyyy-MM-dd)  |
|  District | The district of the delegate lives | string  |
|  Biography | The delegate's biography | string  |
|  Groups | The groups of the delegate | An array of Group  |

# 4.1.1.14 Group 

Data model that represents the group

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The id of the group | int |
| Name | The name of the group | string |

### 4.1.1.15 Agendaltem

Data model that represents the agenda item

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The id of the Agenda item | string |
| Title | The title of the agenda item | string |
| Description | The description of the agenda item | string |
| Type | The type of the agenda item <br> VotingAgendaltem <br> LecturerAgendaltem <br> Agendaltem | string |
| State | The state of the agenda item | string |
| Children | The Children agenda item of this agenda item | List<Agendaltem> |

### 4.1.1.16 VotingAgendaltem:Agendaltem

Data model that represent the voting agenda item

| Name | Description | Type |
| :--: | :--: | :--: |
| VotingOptions | The voting options | List $<$ VotingOption $>$ |

### 4.1.1.17 LecturerAgendaltem:Agendaltem

Data model that represent the lecturer agenda item

| Name | Description | Type |
| :--: | :--: | :--: |
| Lectures | The lecturers of this item | List<Delegate> |

### 4.1.1.18 AudioGroup

Data model that represent Audio group which contains routing input group and routing output group.

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The Id of the audio group | int |
| Type | The type of the audio group(input/output) | string |
| Name | The name of the audio group | string |

### 4.1.1.19 AudioMatrixNode

Data model that represent Audio matrix node.

|  Name | Description | Type  |
| --- | --- | --- |
|  InputGroupName | The name of the routing input group | string  |
|  OutputGroupName | The name of the routing output group | string  |
|  MixValue | The mix value of the matrix node(-100~0) | int  |
|  Status | The status of the matrix node(enable or not) | bool  |
|  BackupStatus | The backup status of the matrix node(enable
or not) | bool  |

### 4.1.1.20 AudioSoftwareConfiguration

Data model that represent Audio software configuration basic information.

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | The Id of the audio software configuration | int  |
|  Name | The name of the audio software configuration | string  |

### 4.1.1.21 AudioSoftwareConfigurationDetailed

Data model that represent Audio software configuration detail information.

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | The Id of the audio software configuration | int  |
|  Name | The name of the audio software configuration | string  |
|  AudioMatrixNodes | All the audio matrix nodes | List< AudioMatrixNode>  |
|  AudioGroups | All the audio groups | List< AudioGroup>  |

### 4.1.1.22 ScreenControlOptions

Properties: None (the inheriting objects will specify the necessary properties).

### 4.1.1.23 HomeControl : ScreenControlOptions

Properties: None

### 4.1.1.24 DiscussionControl : ScreenControlOptions

Properties:

|  Name | Description | Type  |
| --- | --- | --- |
|  video | Set video viewing mode
0: disabled; no video shown
1: normal
2: full screen | int  |

### 4.1.1.25 AgendaControl : ScreenControlOptions

Properties:

|  Name | Description | Type  |
| --- | --- | --- |
|  select | Select and show active agenda item | bool  |

# 4.1.1.26 DelegatesControl : ScreenControlOptions 

Properties: None

### 4.1.1.27 VotingControl : ScreenControlOptions

Properties:

| Name | Description | Type |
| :--: | :--: | :--: |
| res | Show voting results | bool |
| graph | Show voting graph | bool |

### 4.1.1.28 DocumentsControl : ScreenControlOptions

Properties:

| Name | Description | Type |
| :--: | :--: | :--: |
| doc | Id of the document to select | string |
| lck | Lock the document (no selection) | bool |
| page | Page number to be scrolled to | int |
| docfs | Show the document fullscreen | bool |

### 4.1.1.29 MessagesControl : ScreenControlOptions

Properties: None

### 4.1.1.30 ServicesControl : ScreenControlOptions

Properties: None

### 4.1.1.31 ConfigurationControl : ScreenControlOptions

Properties: None

### 4.1.1.32 Unit

Data model that represent unit(like: microphone unit, vote unit,etc)

| Name | Description | Type |
| :--: | :--: | :--: |
| Roomld | The ld of the room | int |
| SystemUnitld | The ld of the unit | int |
| SerialNumber | The serial number of the unit | string |
| UnitCapabilitiesInfo | The capabilities information of the unit | string |
| WirelessCapability | If the unit has the wireless capability | bool |
| VersionInfo | The version of the unit | string |

### 4.1.1.33 Channel

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | The Id of the preset | int  |
|  Order | The order of the channel | int  |
|  Language | The language name | string  |
|  AudioRouting | Set audio routing for the channel.
Plixus Core \& CoCon For Plixus Core:
'comma-separated-booth-numbers', Disabled,
External, EmptyBooth | string  |
|  DisplayText | The text will be displayed | string  |
|  AutoFloor | The channel is auto floor | bool  |
|  BackupChannel | The backup channel name | String  |
|  IsRecording | Channel recording or not.
Optional parameter. | bool  |

# 4.1.1.34 InterpreterPreset

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | The Id of the interpreter preset | int  |
|  Name | The name of the interpreter preset | string  |
|  Description | The description of the interpreter preset | string  |
|  DeskMode | The mode between desks | int  |
|  BoothMode | The mode between booths | int  |
|  State | The state of the interpreter preset | string  |

### 4.1.1.35 DeskUnitInChannel

|  Name | Description | Type  |
| --- | --- | --- |
|  Name | The name of the desk unit | string  |
|  ActiveChannel | The index of the active channel | int  |

### 4.1.1.36 ChannelRealtimeData

|  Name | Description | Type  |
| --- | --- | --- |
|  Order | The order of the channel | int  |
|  Language | The name of the language | string  |
|  Booth | The name of the booth | string  |
|  Desks | The list of the desks in the channel | List $<$ DeskUnitInChannel $>$  |
|  Relay | The relay of the channel | string  |
|  Quality | The quality of the channel | int  |

### 4.2 Server to client

This section describes all commands that the CoCon Server will send to the API clients, notifying them of any events that have happened in the conference software or room.

As discussed above, the functionality is divided into models. Each model will be discussed in a separate section below. The first section is a general section.

# 4.2.1 Room 

### 4.2.1.1 InitializationState

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| InitialisationState | $\square$ | $\square$ |

This command is sent when Initialization state changes. The initialization states are:

- Start
- Stop
- Retrieve
- Auto
- Reset

Name: InitialisationState
REST/JON Example:
\{"InitialisationState": "AUTO"\}
(Note: uppercase letters will be used on return)

### 4.2.1.2 UnitStateChanged

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| UnitStateChanged | $\square$ | $\square$ |

This notification is sent when a unit's online state changes, i.e. if it goes offline of comes online again.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Unitld | The id of the unit | int |
| State | The new state of the unit <br> 0 : offline <br> 1: online | $<0 / 1>$ |

## Example:

Wired unit's notification :
\{"UnitStateChanged":\{"Id":9,"State":0\}\}
Wireless unit's notification :
\{"UnitStateChanged":\{"Id":6,"State":0,"BatteryState":1448,"Snr":0,"PacketLoss":3\}\}

### 4.2.1.3 VolumeChangedForRoom

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| VolumeChangedForRoom | $\square$ | $\square$ |

This notification will send once default volume changed in room.

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | Connected room id | int |
| Volume | Volume of the room | int |

## REST/JON Example:

\{"VolumeChangedForRoom":\{"Id":1,"volume":24\}\}

### 4.2.1.4 UnitError

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| UnitError | $\square$ | $\square$ |

This notification will send out once the unit erro happen.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| State | State of the unit | string |
| Unitld | Unitld | int |

## REST/JON Example:

\{"UnitError":\{"State":"Error","Unitld":6\}\}

### 4.2.2 Microphone

### 4.2.2.1 MicrophoneState

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| MicrophoneState | $\square$ | $\square$ |

This command is sent every time the state of a microphone changes. The different options of a microphone state are:

- On = Speakers
- In Request = Requests
- Off

As indicated, the seat-numbers of the microphones that are On are contained in the "Speakers" array. The seatnumbers of the microphones that are In Request are contained in the second parameter.

Name: MicrophoneState

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |

| Speakers | An array of the seatNrs of all currently active <br> microphones | Array of integers |
| :--: | :--: | :--: |
| Requests | An array of the seatNrs of all the microphones <br> that are currently in request | Array of integers |
| Replies | An array of the seatNrs of all the microphones <br> that are currently in replies | Array of integers |

# REST/JON Example: 

\{"MicrophoneState":\{"Speakers":[6],"Requests":[],"Replies":[]\}

### 4.2.2.2 MicrophoneMode

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| MicrophoneMode | $\square$ | $\square$ |

This command is sent every time the microphone mode changes.
Name: MicrophoneMode

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Mode | The Microphone mode. Values: <br> Operator <br> DirectSpeak <br> Request <br> Vox <br> OnlyRequest | string |
| MaxNrActive | The maximum number of microphones active <br> at the same time | int |
| AllowRequest | bool indicating whether the delegates are <br> allowed to request. <br> Not applicable for all modes. <br> Optional | bool |
| AllowCancelRequest | bool indicating whether the delegates are <br> allowed to cancel their request. <br> Not applicable for all modes. <br> Optional | bool |
| FIFO | bool indicating whether the FIFO mode is <br> active <br> Not applicable for all modes. <br> Optional | bool |
| AllowSwitchOffMic | Bool indicating whether the delegate are <br> allowed to switch off their mic or not. | bool |
| ReplyRequest | Indicating that the ReplyRequest (Replik) <br> function is enabled or not on Server. | bool |

## REST/JON Example:

\{"MicrophoneMode":\{"Mode":"OnlyRequest","MaxNrActive":4,"AllowRequest":true,"AllowCancelRequest":false," FIFO":false,"ActivationType":"Toggle","AllowSwitchOffMic":True,"ReplyRequest":false\}\}

# 4.2.2.3 MicButtonEvent 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| MicButtonEvent | $\square$ | $\square$ |

This event is sent every time a microphone button is pushed. It contains information about the seat that has generated the event.

Name: MicButtonEvent

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| SeatNr | The number of the seat | int |
| Event | The button event (up or down) | string |

## REST/JON Example:

\{"MicButtonEvent":\{"SeatNr":2,"Event":"up"\}

### 4.2.2.4 MicrophoneSensitivityUpdated

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| MicrophoneSensitivityUpdated | $\square$ | $\square$ |

This event notification for the seat (Microphone) sensitivity changed or updated.
Name: MicrophoneSensitivityUpdated

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Seatld | The number of the seat | int |
| Sensitivity | Value of the sensitivity <br> Range of value <br> $+12 \mathrm{to}-12$ <br> Ex. $(12,11,10,9 \ldots-10,-11,-12)$ | int |

## REST/JON Example:

\{"MicrophoneSensitivityUpdated":\{"Seatld":1,"Sensitivity":-6\}\}

### 4.2.2.5 MicStateChangedInRunningMeeting

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| MicStateChangedInRunningMeeting | $\square$ | $\square$ |

This event notification for the delegate on seat (Microphone) updated.

Name: MicStateChangedInRunningMeeting

# REST/JON Example: 

\{"MicStateChangedInRunningMeeting":\{"SeatNr":1,"State":"On","User":\{"Id":463,"FirstName":"Marcel","Name":" Ackermann","MiddleName":null,"Street":"Route Principale 11c","StreetNumber":0,"PostCode":"2803","City":"Bourrignon","Country":"","Title":"Député","BirthDate":"","District ":",","Biography":",","Groups":[\{"Id":21,"Name":"PDC"\}],"SeatNumber":1,"BadgeNumber":"14EFB4E2","Fingerprint erData":",","KeypadLoginCode":""\}\}

### 4.2.3 Meeting_Agenda

### 4.2.3.1 MeetingTitleChanged

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| MeetingTitleChanged | $\square$ | $\square$ |

This command is sent every time the active meeting title changed.
Name: MeetingTitleChanged

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| MeetingId | ID of the meeting | int |
| NewTitle | The new meeting title | string |

## REST/JON Example:

\{"MeetingTitleChanged":\{"Title":"2/11/2014 new Meeting"\}

### 4.2.3.2 MeetingStatus

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| MeetingStatus | $\square$ | $\square$ |

This command is sent every time the state of current active meeting changed.
Name: MeetingStatus

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| MeetingId | The id of the meeting | int |
| State | The state of the meeting include: <br> Paused; <br> Running; <br> Ended | string |

## REST/JSON Example:

\{"MeetingStatus":\{"MeetingId":14,"State":"Paused"\}\}
\{"MeetingStatus":\{"MeetingId":14,"State":"Running"\}\}
\{"MeetingStatus":\{"MeetingId":14,"State":"Ended"\}\}

# 4.2.3.3 MeetingAgendaChanged 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| MeetingAgendaChanged | $\square$ | $\square$ |

This notification is sent out when the agenda has changed, i.e. when an agenda item is added, removed, edited or moved. It is NOT sent when the active agenda item changes, since there is already another API command for that (Agenda_ItemChanged).
The API client that is interested in the changes in the agenda, can get the entire agenda with GetAgendaItemInformationInRunningMeeting

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | The id of the meeting | int |

## REST/JSON Example:

\{"MeetingAgendaChanged":\{"MeetingId":9\}\}

### 4.2.3.4 Agenda_ItemChanged

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Agenda_ItemChanged | $\square$ | $\square$ |

This command is sent every time the state of an agenda item changes.
Name: Agenda_ItemChanged

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | The id of the meeting | int |
| Agenda_ItemChanged | The changed agenda item | Agendaltem |
| IdlnDb | In CoCon DB Agenda ID | int |

## REST/JON Example:

\{"MeetingId":74,"Agenda_ItemChanged":\{"Id":"4","Title":"","Description":"","Type":"VotingAgendaltem","State":"e nded","VotingOptions":[\{"Id":397,"Name":"1","Color":"\#FF006400"\},\{"Id":398,"Name":"2","Color":"\#FF008000"\},{"I d":399,"Name":"3","Color":"\#FFFFFF00"\},\{"Id":400,"Name":"4","Color":"\#FFFF0000"\},\{"Id":401,"Name":"5","Colo r":"\#FF8B0000"\}],"Children":[],"IdlnDb":131\}\}

# 4.2.3.5 Keypad_login_code

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  keypad_login_code | ☑ | ☐  |

This command is sent from Plixus FMM (IDC) to CoCon whenever user input numeric code and press the Ok.

**Name:** keypad_login_code

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  SeatNr | Seat number | int  |
|  LoginCode | Code entered by user from Plixus FMM (IDC) | string  |

**REST/JON Example:** {"keypad_login_code":{"SeatNr":4,"LoginCode":"1234"}}

## 4.2.3.6 FingerprintEvent

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  FingerprintEvent | ☑ | ☐  |

This command is sent from Plixus FMM (IDC) to CoCon whenever user press finger on fingerprint device.

**Name:** FingerprintEvent

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  SeatNr | Seat number | int  |
|  FingerprintEvent | Fingerprint data from fingerprint device | String  |
|  DelegateId | Delegate Id to which the fingerprint was matched (processing taking place on the unicos/unibox unit) | int  |
|  DelegateId | 0 : in case the fingerprint verification was not able to match it to the fingerprints of delegate part of the meeting |   |

**REST/JON Example:** {"FingerprintEvent":{"SeatNr":7,"FingerprintData":"464d520020323000000000f0000000b4010000980098010000004923804d000fb400805b00222600807e00231300406300282400402b00333d00403e00343400806a003e25008098003fb200407300441c00808a0044af0080a000453900407600613400805e00634600406e0067470040610071ef00802b00794f004085007d8600804a007e53004094007f2000806a008b6800407d00900e00804a0094e5008083009f0600805c00a86300803500ade400801900ae5700804300ba6200405100bcf700803c00c0ea00406100c07600808400c00200804900ccf000404600d16700403000d9ee00802500ebeb000000", "DelegateId":1063}}

# 4.2.4 Voting

### 4.2.4.1 VotingState

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  VotingState | ☑ | ☐  |

The voting state of current active voting agenda item **Name**: VotingState

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | ID of the VotingAgendaltem | int  |
|  State | The state of voting, include:
Start;
Stop
Pause
Clear | string  |
|  VotingTemplate | The voting template that voting agenda item based on | string  |

**REST/JON Example:**

{"VotingState":{"Id":11;"State":"Start","VotingTemplate":"3_Vote_Public"}}

### 4.2.4.2 VotingOutcome

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  VotingOutcome | ☑ | ☐  |

The outcome message of voting result **Name**: VotingOutcome

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | ID of the VotingAgendaltem | int  |
|  VotingOptionId | ID of the VotingOption that won, if applicable
0 if not applicable | int  |
|  Outcome | The outcome message of voting result | string  |

**REST/JON Example:**

{"VotingOutcome":{"Id":11;"VotingOptionId":1147;"OutCome":"Pass option1"}}

CoCon API 20 Nov 2024 48/212

# 4.2.4.3 GeneralVotingResults 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| GeneralVotingResults | $\square$ | $\square$ |

The general voting results of current voting
Name: GeneralVotingResults

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | ID of the VotingAgendaltem | int |
| VotingResults | The general results of current voting | VotingResultSummary |

## REST/JON Example:

\{"GeneralVotingResults":\{"Id":11;"VotingResults":\{"Total":\{"Count":10,"Weight":10\},"Voted":\{"Count":0,"Weight":0 \},"NotVoted":\{"Count":10,"Weight":10\},"AuthorityAssigned":\{"Present":0,"Voted":0,"Register":0\}}\}

### 4.2.4.4 IndividualVotingResults

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| IndividualVotingResults | $\square$ | $\square$ |

The individual voting results of current voting, whenever a new vote is available. Note the following:

- For every one vote, this event will only be sent once, at the moment of casting the vote.
- The delegate info and voting option info is not present in this command to optimize performance. Only IDs are available.

Name: IndividualVotingResults

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | ID of the VotingAgendaltem | int |
| VotingResults | An array with all the individual votes | Array of IndividualVote |

REST/JON Example:
Single selection:
\{"IndividualVotingResults":\{"Id":11;"VotingResults":\{\{"DelegateID":24;"VotingOptionID:2\};...]\}\}
Multiple selection
\{"IndividualVotingResults":\{"Id":11;"VotingResults":\{\{"DelegateID":24;"VotingOptionID:[2,3,4]\};...]\}\}

### 4.2.4.5 VotingTemplateAdded

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |

| VotingTemplateAdded | $\square$ |
| :-- | :-- |

Event notification for the added new voting template or update voting template.

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| Title | Name of the Voting template and will keep the title doe that agenda | string |
| NrOfOptions | Number of voting options | int |
| IsPrinted | Enabled the function for print after voting stop. | bool |
| IsVotingNumber | Enabled Symbol or Number for voting choice Note: not applicable after 5.0 cocon | bool |
| AbstainOption | Choose the Voting abstain Options Value : 1 to 3 | int |
| AbstainIndex | Select abstain index for move voting for Value : 1 to .. based on the voting options. | int |
| Description1 | Description for voting option 1 | string |
| Option1 (Option Color) | Voting Option Color Ex $\rightarrow \% 23$ FFFFF000 <br> Where $\% 23$ is Prefix and 8 chars of the RGB value. <br> Note: Make sure for correct RGB value. | string |
| SymbolIndex1 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour1 | Voting LED color <br> We support only 7 color now. <br> Blue, White, Green, Yellow, Red, Magenta, Cyan | string |
| IsAbstain1 | Enabled the abstain function | bool |
| MsgOfMajority1 | Message for majority | string |
| Description2 | Description for voting option 2 | string |
| Option2 | Voting Option Color Ex $\rightarrow \% 23$ FFFFF000 <br> Where $\% 23$ is Prefix and 8 chars of the RGB value. <br> Note: Make sure for correct RGB value. | string |
| SymbolIndex2 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour2 | Voting LED color <br> We support only 7 color now. <br> Blue, White, Green, Yellow, Red, Magenta, Cyan | string |
| IsAbstain2 | Enabled the abstain function | bool |
| MsgOfMajority2 | Message for majority | string |
| Description3 | Description for voting option 3 | string |
| Option3 | Voting Option Color Ex $\rightarrow \% 23$ FFFFF000 <br> Where $\% 23$ is Prefix and 8 chars of the RGB value. <br> Note: Make sure for correct RGB value. | string |
| SymbolIndex3 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour3 | Voting LED color <br> We support only 7 color now. <br> Blue, White, Green, Yellow, Red, Magenta, Cyan | string |
| IsAbstain3 | Enabled the abstain function | bool |
| MsgOfMajority3 | Message for majority | string |

|  Description4 | Description for voting option 4 | string  |
| --- | --- | --- |
|  Option4 | Voting Option Color Ex->\%23FFFFF000
Where \%23 is Prefix and 8 chars of the RGB value.
Note: Make sure for correct RGB value. | string  |
|  SymbolIndex4 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int  |
|  LedColour4 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan | string  |
|  IsAbstain4 | Enabled the abstain function | bool  |
|  MsgOfMajority4 | Message for majority | string  |
|  Description5 | Description for voting option 5 | string  |
|  Option5 | Voting Option Color Ex->\%23FFFFF000
Where \%23 is Prefix and 8 chars of the RGB value.
Note: Make sure for correct RGB value. | string  |
|  SymbolIndex5 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int  |
|  LedColour5 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan | string  |
|  IsAbstain5 | Enabled the abstain function | bool  |
|  MsgOfMajority5 | Message for majority | string  |
|  Description6 | Description for voting option 6 | string  |
|  Option6 | Voting Option Color Ex->\%23FFFFF000
Where \%23 is Prefix and 8 chars of the RGB value.
Note: Make sure for correct RGB value. | string  |
|  SymbolIndex6 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int  |
|  LedColour6 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan
Note: LED color not support for more than 5 button options. | string  |
|  IsAbstain6 | Enabled the abstain function | bool  |
|  MsgOfMajority6 | Message for majority | string  |
|  Description7 | Description for voting option 7 | string  |
|  Option7 | Voting Option Color Ex->\%23FFFFF000
Where \%23 is Prefix and 8 chars of the RGB value.
Note: Make sure for correct RGB value. | string  |
|  SymbolIndex7 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int  |
|  LedColour7 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan
Note: LED color not support for more than 5 button options. | string  |
|  IsAbstain7 | Enabled the abstain function | bool  |

| MsgOfMajority7 | Message for majority | string |
| :--: | :--: | :--: |
| Description8 | Description for voting option 8 | string |
| Option8 | ```Voting Option Color Ex->%23FFFFF000 Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value.``` | string |
| SymbolIndex8 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour8 | ```Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan Note: LED color not support for more than 5 button options.``` | string |
| IsAbstain8 | Enabled the abstain function | bool |
| MsgOfMajority8 | Message for majority | string |
| Description9 | Description for voting option 9 | string |
| Option9 | ```Voting Option Color Ex->%23FFFFF000 Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value.``` | string |
| SymbolIndex9 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour9 | ```Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan Note: LED color not support for more than 5 button options.``` | string |
| IsAbstain9 | Enabled the abstain function | bool |
| MsgOfMajority9 | Message for majority | string |
| Description10 | Description for voting option 10 | string |
| Option10 | ```Voting Option Color Ex->%23FFFFF000 Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value.``` | string |
| SymbolIndex10 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour10 | ```Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan Note: LED color not support for more than 5 button options.``` | string |
| IsAbstain10 | Enabled the abstain function | bool |
| MsgOfMajority10 | Message for majority | string |
| BadgeOption | Choose option for "Who can participate in voting" <br> Value : 1 to 4 <br> Ex. $4=$ All voting units <br> Note: badge options will be available based on the meeting type. | int |
| OverallOption | Choose overall option "Who sees the overall results during the vote? <br> Value : 1 to 4 <br> $1=$ no one | int |
| IndividualOption | Choose the option for "Who sees the individual voting results (during \& after the vote)" <br> Value: 1 to 5 | int |

|  1= No one ;Never |  |   |
| --- | --- | --- |
|  CanCorrect | Enabled the correction option Value : True means user can change voting | bool  |
|  HasPin | Enable the option for "Enter PinId for voting" Note: it will be used for IDC only. | bool  |
|  IsWeightUsed | Enable option to check the voting weight for voting result calculation. | bool  |
|  IsOperatorIndicated | Vote indication Enabled the Operator voting indication Note: it can configure based on the individual voting setting. | bool  |
|  IsSignageIndicated | Vote indication Enabled the Signage voting indication Note: it can configure based on the individual voting setting. | bool  |
|  PanelIndicationOption | Vote button indication
Choose the vote panel indication option
Value : 0 to 2
2 means "Real vote choice"
Note: it can configure based on the individual voting setting. | int  |
|  EnableAgendaTimer | Enabled the timer for Agenda | bool  |
|  DurationOfAgendaTimer | Total Time for Agenda
Ex. 00:05:00 | String  |
|  WarningOfAgendaTimer | Warning time for the Agenda
Ex. 00:01:00 | String  |
|  CountDownOfAgendaTime
r | Choose the agenda timer count-up / count-down | Bool  |
|  ExceedOfAgendaTimer | Allow exceed agenda timer | Bool  |
|  EnableVotingTimer | Enabled the timer for voting | Bool  |
|  DurationOfVotingTimer | Total Time for Agenda
Ex. 00:05:00 | String  |
|  WarningOfVotingTImer | Warning time for the Agenda
Ex. 00:01:00 | String  |
|  CountDownOfVotingTimer | Choose the agenda timer count-up / count-down | Bool  |
|  ExceedOfVotingTimer | Allow exceed voting timer | Bool  |
|  EnableQuorum | Enabled the Quorum Functionality | Bool  |
|  AbsoluteOfQuorum | Choose Quorum define function for Absolute or relative
Ex. True means Absolute enabled
False means Relative option selected. (enabled) | Bool  |
|  ValueOfQuorum | Value of the Quorum | decimal  |
|  OptionOfQuorum | Choose the options for Presence of determination.
Value : 1 to 5 | int  |
|  EnableQuorumMsg | Enabled the Quorum message option | bool  |
|  QuorumMsg | Message for Quorum | string  |
|  AbsoluteOfOutcome | Choose Majority define function for Absolute or relative
Ex. True means Absolute enabled
False means Relative option selected (enabled). | bool  |
|  ValueOfMajority | Value of the Majority | decimal  |
|  MajorityOption | Choose the majority options
Value :1 to 2 | int  |
|  EnableOutcomMsg | Enabled Outcome message option. | bool  |
|  PassedMsg | Message for the Pass Majority | string  |
|  FailedMsg | Message for the Fail Majority | string  |

| HungMsg | Message for the Hung Majority | string |
| :--: | :--: | :--: |
| EnabledMajorityMsg | Enabled Majority Achieved Details | bool |
| HungVoteSetting | Choose option for the hung vote solution <br> Value : 1 to 5 <br> Ex. <br> $0=$ Stop voting automatically. <br> $1=$ Keep the vote active until the Operator or <br> Chairman manually stops it. <br> $2=$ Restart voting with all options available <br> $3=$ Determined by chairmen votes in this <br> voting session. <br> $4=$ Stop voting and the operator decides. <br> $5=$ Determined by chairmen votes in a new <br> chairmen-only voting session. | Int |
| IsUnanimous | If value is true, means Voting options for the <br> voting session decision made by operator <br> even thoug user can choose his own chose as <br> well. (this option will used by the Cocon Op <br> app only now) <br> Note: default value is false | bool |

REST/JON Example:
\{"VotingTemplateAdded":\{"Id":36,"Title":"TEST
501","NrOfOptions":5,"IsPrinted":false,"IsVotingNumber":false,"BadgeOption":1,"OverallOption":1,"Options":[{"Id ":157,"Description":"Pass","Option":"\#0000FF","SymbolIndex":0,"LedColour":"Red","IsAbstain":true,"MsgOfMajo rity":""},{"Id":158,"Description":"ABS","Option":"\#FFFF0000","SymbolIndex":1,"LedColour":"Red","IsAbstain":fals e,"MsgOfMajority":"Motion
Accepted"},{"Id":159,"Description":"Fail","Option":"\#FFFFFF00","SymbolIndex":2,"LedColour":"Blue","IsAbstain": false,"MsgOfMajority":"Motion
Postponed"},{"Id":160,"Description":"ISA","Option":"\#39FF14","SymbolIndex":3,"LedColour":"Yellow","IsAbstain": false,"MsgOfMajority":"Motion
Rejected"},{"Id":161,"Description":"XYZ","Option":"\#FF00FF","SymbolIndex":4,"LedColour":"Magenta","IsAbstain ":false,"MsgOfMajority":""J],"IndividualOption":1,"CanCorrect":true,"HasPin":false,"IsWeightUsed":true,"IsOperat orIndicated":true,"IsSignageIndicated":true,"PanelIndicationOption":1,"AgendaTimer":\{"Id":73,"EnableAgendaTi mer":true,"DurationOfAgendaTimer":"00:05:00","WarningOfAgendaTimer":"00:03:00","CountDownOfAgendaTim er":false,"ExceedOfAgendaTimer":true},"VotingTimer":\{"Id":74,"EnableVotingTimer":true,"DurationOfVotingTime r":"00:05:00","WarningOfVotingTImer":"00:05:00","CountDownOfVotingTimer":false,"ExceedOfVotingTimer":true \},"EnableQuorum":true,"AbsoluteOfQuorum":false,"ValueOfQuorum":0.0,"OptionOfQuorum":1,"EnableQuorumM sg":true,"QuorumMsg":"It
works","AbsoluteOfOutcome":false,"ValueOfMajority":10.0,"MajorityOption":1,"EnableOutcomMsg":true,"Passed Msg":"Majority achieved","FailedMsg":"fail","HungMsg":"hung","EnabledMajorityMsg":true,"HungVoteSetting":4\}

# Example 2 : 

\{"VotingTemplateAdded":\{"Id":3,"Title":"Test
223","NrOfOptions":3,"IsPrinted":false,"IsVotingNumber":false,"BadgeOption":4,"OverallOption":4,"Options":[{"Id ":66,"Description":"","Option":"\#FF008000","SymbolIndex":1,"LedColour":"Blue","IsAbstain":false,"MsgOfMajority ":"Motion
Accepted"},{"Id":67,"Description":"","Option":"\#FFFFFF00","SymbolIndex":2,"LedColour":"Blue","IsAbstain":false, "MsgOfMajority":"Motion
Postponed"},{"Id":68,"Description":"","Option":"\#FFFF0000","SymbolIndex":3,"LedColour":"Blue","IsAbstain":fals e,"MsgOfMajority":"Motion
Rejected"J],"IndividualOption":5,"CanCorrect":false,"HasPin":false,"IsWeightUsed":true,"IsOperatorIndicated":fal se,"IsSignageIndicated":false,"PanelIndicationOption":0,"AgendaTimer":\{"Id":109,"EnableAgendaTimer":false,"D urationOfAgendaTimer":"00:00:00","WarningOfAgendaTimer":"00:00:00","CountDownOfAgendaTimer":true,"Exc eedOfAgendaTimer":false\},"VotingTimer":\{"Id":110,"EnableVotingTimer":false,"DurationOfVotingTimer":"00:00:0 0","WarningOfVotingTImer":"00:00:00","CountDownOfVotingTimer":true,"ExceedOfVotingTimer":false\},"Enable Quorum":false,"AbsoluteOfQuorum":true,"ValueOfQuorum":0.0,"OptionOfQuorum":4,"EnableQuorumMsg":false, "QuorumMsg":"Quorum not OK - voting
postponed","AbsoluteOfOutcome":true,"ValueOfMajority":1.0,"MajorityOption":2,"EnableOutcomMsg":false,"Pas

sedMsg":"Majority achieved","FailedMsg":"Majority not achieved","HungMsg":"Hung vote","EnabledMajorityMsg":false,"HungVoteSetting":1,"IsUnanimous":false))

# 4.2.5 Timer

Note: default timer events will be send out every 5 seconds. However, there is a possibility to have timer events send out with different time intervals. For this the "TimerEventIntervalSeconds" value can be changed inside Cocon server xml configuration file.

### 4.2.5.1 MeetingTimerEvent

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  MeetingTimerEvent | $\square$ | $\square$  |

The timer event of the current active meeting Name: MeetingTimerEvent

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  MeetingTimer | The timer of current meeting | BaseObjectTimer  |

## REST/JON Example:

\{"MeetingTimerEvent":\{"MeetingTimer":\{"Timer":\{"TotalTime":"02:00:00","TimeUsed":"00:00:11","CountingDown ":true,"WarningTime":"00:05:00"\}\}\}

### 4.2.5.2 MeetingTimerStateChange

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  MeetingTimerPauseResumed | $\square$ | $\square$  |

Pause or Resume current active meeting Timer Name: MeetingTimerPauseResumed

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Paused | The pause state of timer | bool  |
|  MeetingTimer | The timer of current meeting | BaseObjectTimer  |

## REST/JON Example:

\{"MeetingTimerPauseResumed":\{"Paused":true,"MeetingTimer":\{"Timer":\{"TotalTime":"02:00:00","TimeUsed":"0 0:02:35","CountingDown":true,"WarningTime":"00:05:00"\}\}\}

## 4.2.5.3 DelegateTimerEvent

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| DelegateTimerEvent | ☑ | ☐ |

The timer event of the delegate

**Name**: DelegateTimerEvent

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  DelegateTimer | The time of the delegate | DelegateTimer : BaseObjectTimer  |

**REST/JON Example:**

{"DelegateTimerEvent":{"DelegateTimer":{"DelegateId":10,"Timer":{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingDown":true,"WarningTime":"00:01:00"}}}

## 4.2.5.4 DelegateTimerStateChange

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| DelegateTimerPauseResumed | ☑ | ☐ |

Pause or resume the delegate timer

**Name**: DelegateTimerPauseResumed

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Paused | The pause state of timer | bool  |
|  DelegateTimer | The timer of the delegate | DelegateTimer : BaseObjectTimer  |

**REST/JON Example:**

{"DelegateTimerPauseResumed":{"Paused":true,"DelegateTimer":{"DelegateId":10,"Timer":{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingDown":true,"WarningTime":"00:01:00"}}}

## 4.2.5.5 GroupTimerEvent

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| GroupTimerEvent | ☑ | ☐ |

The timer event of the group

**Name**: GroupTimerEvent

**Parameters:**

CoCon API 20 Nov 2024 56/212

|  Name | Description | Type  |
| --- | --- | --- |
|  GroupTimer | The time of the group | GroupTimer : BaseObjectTimer  |

REST/JON Example: {"GroupTimerEvent":{"GroupTimer":{"GroupId":1,"Timer":{"TotalTime":"00:05:00","TimeUsed":"00:00:00","Counti ngDown":true,"WarningTime":"00:01:00"}}}

4.2.5.6 GroupTimerStateChange

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GroupTimerPauseResumed | ☑ | ☐  |

Pause or resume the group timer Name: GroupTimerPauseResumed

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Paused | The pause state of timer | bool  |
|  GroupTimer | The timer of the delegate | GroupTimer : BaseObjectTimer  |

REST/JON Example: {"GroupTimerPauseResumed":{"Paused":true,"GroupTimer":{"GroupId":1,"Timer":{"TotalTime":"00:05:00","Time Used":"00:00:00","CountingDown":true,"WarningTime":"00:01:00"}}}

4.2.5.7 SeatTimerEvent

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SeatTimerEvent | ☑ | ☐  |

The timer event of the seat

Name: SeatTimerEvent

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  SeatTimer | The timer of the seat | SeatTimer : BaseObjectTimer  |

REST/JON Example: {"SeatTimerEvent":{"SeatTimer":"SeatNr":1,"Timer":{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingD own":true,"WarningTime":"00:01:00"}}}

CoCon API 20 Nov 2024 57/212

## 4.2.5.8 SeatTimerPauseResumed

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| SeatTimerPauseResumed | ☑ | ☐ |

Pause or resume the seat timer

**Name:** SeatTimerPauseResumed

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Paused | The pause state of timer | bool  |
|  SeatTimer | The timer of the seat | SeatTimer : BaseObjectTimer  |

**REST/JON Example:**

{"SeatTimerPauseResumed":{"Paused":true,"SeatTimer":{"SeatNr":1,"Timer":{"TotalTime":"00:05:00","TimeUse d":"00:00:00","CountingDown":true,"WarningTime":"00:01:00"}}}

## 4.2.5.9 ActiveAgendaltemTimerEvent

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| ActiveAgendaltemTimerEvent | ☑ | ☐ |

The timer event of the active agenda item

**Name:** ActiveAgendaltemTimerEvent

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  ActiveAgendaltemTimer | The timer of the active agenda item | BaseObjectTimer  |

**REST/JON Example:**

{"ActiveAgendaltemTimerEvent":{"ActiveAgendaltemTimer":{"Timer":{"TotalTime":"00:05:00","TimeUsed":"00:00:21","CountingDown":false,"WarningTime":"00:00:00"}}}

## 4.2.5.10 ActiveAgendaltemTimerPauseResumed

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| ActiveAgendaltemTimerPauseResumed | ☑ | ☐ |

Pause or resume the active agenda item timer

**Name:** ActiveAgendaltemTimerPauseResumed

**Parameters:**

CoCon API 20 Nov 2024 58/212

|  Name | Description | Type  |
| --- | --- | --- |
|  Paused | The pause state of timer | bool  |
|  ActiveAgendaltemTimer | The timer of the seat | BaseObjectTimer  |

REST/JON Example: {"ActiveAgendaltemTimerPauseResumed":{"Paused":false,"ActiveAgendaltemTimer":{"Timer":{"TotalTime":"00: 05:00","TimeUsed":"00:00:00","CountingDown":false,"WarningTime":"00:00:00"}}}

4.2.5.11 VotingTimerEvent

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  VotingTimerEvent | ☑ | ☐  |

The timer event of the voting

Name: VotingTimerEvent

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  VotingTimer | The timer of the voting | BaseObjectTimer  |

REST/JON Example: {"VotingTimerEvent":{"VotingTimer":{"Timer":{"TotalTime":"00:05:00","TimeUsed":"00:00:02","CountingDown":fal se,"WarningTime":"00:00:00"}}}

4.2.5.12 VotingTimerPauseResumed

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  VotingTimerPauseResumed | ☑ | ☐  |

Pause or resume the voting

Name: VotingTimerPauseResumed

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Paused | The pause state of timer | bool  |
|  VotingTimer | The timer of the seat | BaseObjectTimer  |

REST/JON Example: {"VotingTimerPauseResumed":{"Paused":true,"VotingTimer":{"Timer":{"TotalTime":"00:05:00","TimeUsed":"00:0 0:32","CountingDown":false,"WarningTime":"00:00:00"}}}

CoCon API 20 Nov 2024 59/212

# 4.2.6 Delegate 

### 4.2.6.1 BadgeEvent

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| BadgeEvent | $\square$ | $\square$ |

Delegate on the seat, insert badge to show the present. (Fixed seat insert badge for the present meeting mode.)
Name: BadgeEvent

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| SeatNr | The number of the seat | int |
| Delegate | The information of the delegate on seat | Delegate |
| Badgelnserted | Badge insert or not | bool |

## REST/JON Example:

Meeting Running :
\{"BadgeEvent":\{"SeatNr":2,"Delegate":\{"Id":463,"FirstName":"Marcel","Name":"Ackermann","MiddleName":null," Street":"Route Principale
11c","StreetNumber":0,"PostCode":"2803","City":"Bourrignon","Country":"","Title":"Député","BirthDate":"","District ":",",Biography":",",Groups":[{"Id":21,"Name":"PDC"}],"SeatNumber":2,"BadgeNumber":"14EFB4E2","Fingerprint erData":"","KeypadLoginCode":""},"BadgeInserted":true,"bid":"14EFB4E2"\}\}

No Meeting running :
\{"BadgeEvent":\{"SeatNr":4,"Delegate":null,"Badgelnserted":true,"bid":"14EFB4E2"\}\}
Meeting Running :

### 4.2.6.2 DelegateOnSeat

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| DelegateOnSeat | $\square$ | $\square$ |

When seat is empty, and meeting is free-seat, and delegates insert or remove their badges.
Name: DelegateOnSeat

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| SeatNr | The number of the seat | int |
| Delegate | The information of the delegate on seat | Delegate |
| OnSeat | Delegate is no seat or not | bool |

## REST/JON Example:

\{"DelegateOnSeat":\{"SeatNr":4,"Delegate":\{"ld":463,"Title":"Député","FirstName":"Marcel","Name":"Ackermann", "MiddleName":null,"Groups":[{"ld":21,"Name":"PDC"}],"OnSeat":true,"bid":"14EFB4E2"\}

REST/JON Example: Remove delegate from a seat \{"DelegateOnSeat":\{"SeatNr":2,"Delegate":"","OnSeat":false\}\}

# 4.2.6.3 DelegateSeatingUpdated 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| DelegateSeatingUpdated | $\square$ | $\square$ |

When delegate removed from seat, this api call notified from server.
Name: DelegateSeatingUpdated

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | Delegate id from the meeting user table | int |
| Seatld | Seat number, where user was seated | int |

### 4.2.6.4 MeetingStartsUserInformation

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| MeetingStartsUserInformation | $\square$ | $\square$ |

When meeting starts, send users in meeting to client.
Name: MeetingStartsUserInformation

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| MeetingId | ID of the meeting | int |
| Users | The Users in meeting | List<Delegate> |

## REST/JON Example:

\{"MeetingStartsUserInformation":\{"Users":[{"ld":4,"FirstName":"11","Name":"Test1","Street":"","StreetNumber":n ull,"PostCode":"","City":"","Country":"","Title":"","BirthDate":"","District":"","Biography":"","Groups":[{"ld":1,"Name": "Group1"}],"SeatNumber":2},\{"Id":5,"FirstName":"22","Name":"Test2","Street":"","StreetNumber":null,"PostCode": "","City":"","Country":"","Title":"","BirthDate":"","District":"","Biography":"","Groups":[],"SeatNumber":3},\{"Id":3,"Firs tName":"asfwesw","Name":"wefwef","Street":"","StreetNumber":null,"PostCode":"","City":"","Country":"","Title":"T est2","BirthDate":"","District":"","Biography":"","Groups":[{"ld":2,"Name":"Group2"}],"SeatNumber":5},\{"Id":2,"First Name":"wefwef","Name":"sdf","Street":"","StreetNumber":null,"PostCode":"","City":"","Country":"","Title":"Test1"," BirthDate":"","District":"","Biography":"","Groups":[{"ld":1,"Name":"Group1"}],"SeatNumber":1},\{"Id":6,"FirstName " :"33","Name":"Test3","Street":"","StreetNumber":null,"PostCode":"","City":"","Country":"","Title":"","BirthDate":""," District":"","Biography":"","Groups":[{"ld":2,"Name":"Group2"}],"SeatNumber":4}]]\}

# 4.2.6.5 DelegateUpdated 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| DelegateUpdated | $\square$ | $\square$ |

This event is sent if a delegate was edited.
Name: DelegateUpdated

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | The Id of the delegate | int |
| Name | The name of the delegate | string |
| FirstName | The first name of the delegate | string |
| Title | The title of the delegate | string |
| MiddleName | MiddleName of the delegate [Optional parameter] | string |
| BadgeNr | The badge number | int |
| UserName | The username for the delegate | string |
| Password | The password for the delegate | string |
| Street | The street for the delegate | string |
| StreetNr | The street number for the delegate | string |
| City | The city for the delegate | string |
| PostalCode | The postal code for the delegate | string |
| Country | The country for the delegate | string |
| District | The district for the delegate | string |
| BirthDate | The delegate's birthday | string |
| Email | The delegate's email address | string |
| PhoneNr | The delegate's phone number | string |
| VotingRight | Does the delegate have the right to vote? | Bool |
| VotingWeight | The voting weight to apply for this delegate | Int |
| PinId | PinId to login for voting | Int |
| FingerprinterData | Fingerprint data to open the Unicos IDC screen [Optional parameter] | string |
| KeypadLoginCode | Code to login into the Unicos FMM (IDC) [Optional parameter] | int |

## REST/JON Example:

\{"DelegateUpdated":\{"DelegateId":534,"Name":"Manoj","MiddleName":"Subhashbhai","FirstName":"Patel","Title" :"Mr.","BadgeNr":"","UserName":"","Password":"","Street":"","StreetNr":"0","PostalCode":"","City":"","Country":""," BirthDate":"","District":"","Email":"","PhoneNr":"","VotingRight":true,"VotingWeight":1,"PinId":"9876","Fingerprinte rData":"","KeypadLoginCode":"1234"\}\}

### 4.2.6.6 DelegateAdded

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| DelegateAdded | $\square$ | $\square$ |

This event is sent if a delegate was Added.
Name: DelegateAdded

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | The Id of the delegate | int |
| Name | The name of the delegate | string |
| FirstName | The first name of the delegate | string |
| Title | The title of the delegate | string |
| MiddleName | MiddleName of the delegate [Optional parameter] | string |
| BadgeNr | The badge number | int |
| UserName | The username for the delegate | string |
| Password | The password for the delegate | string |
| Street | The street for the delegate | string |
| StreetNr | The street number for the delegate | string |
| City | The city for the delegate | string |
| PostalCode | The postal code for the delegate | string |
| Country | The country for the delegate | string |
| District | The district for the delegate | string |
| BirthDate | The delegate's birthday | string |
| Email | The delegate's email address | string |
| PhoneNr | The delegate's phone number | string |
| VotingRight | Does the delegate have the right to vote? | Bool |
| VotingWeight | The voting weight to apply for this delegate | int |
| PinId | PinId to login for voting | Int |
| FingerprinterData | Fingerprint data to open the Unicos IDC screen [Optional parameter] | string |
| KeypadLoginCode | Code to login into the Unicos FMM (IDC) [Optional parameter] | int |

## REST/JON Example:

\{"DelegateAdded":\{"DelegateId":534,"Name":"Isha","MiddleName":null,"FirstName":"Sakhalakr","Title":"Mrs.","B adgeNr":"","UserName":"","Password":"","Street":"","StreetNr":"0","PostalCode":"","City":"","Country":"","BirthDat e":"","District":"","Email":"","PhoneNr":"","VotingRight":true,"VotingWeight":1,"PinId":"","FingerprinterData":"","Ke ypadLoginCode":""\}\}

### 4.2.6.7 DelegateRemoved

| API Module | Cocon for
Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| DelegateRemoved | $\square$ | $\square$ |

This event is sent if a delegate was removed from the database.
Name: DelegateRemoved

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | The Id of the delegate | int |

## REST/JON Example:

\{"DelegateRemoved":\{"DelegateId":12 \}

### 4.2.6.8 DelegateSeatingUpdated

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| DelegateSeatingUpdated | $\square$ | $\square$ |

This event is sent to all API clients when the delegate seating is changed (a delegate is added to or removed from a seat).
\{"DelegateSeatingUpdated":\{\{"DelegateId":1, "SeatId":1\}, \{"DelegateId":2, "SeatId":0\} \}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | The id of the delegate | int |
| Seatld | The id of the seat. <br> 0 means that this delegate was not positioned on a seat yet | int |

### 4.2.6.9 DelegatesInMeetingUpdated

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| DelegatesInMeetingUpdated | $\square$ | $\square$ |

This event is sent if something changed to the list of delegates in a meeting (delegate added to or removed from meeting.
Please note that we do not send the new list of delegates in the meeting. API clients that are interested in the change, can request this list with "GetDelegatesInMeeting".
\{"DelegatesInMeetingUpdated":\{"MeetingId":25\}

# 4.2.7 Interactive 

This section describes commands that are only applicable for the Televic Plixus MME.

### 4.2.7.1 ScreenLockRemoved

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ScreenLockRemoved | $\square$ | $\square$ |

The screen lock on the uniCOS has been removed
Name: ScreenLockRemoved
REST/JON Example:
\{"ScreenLockRemoved" : true\}

### 4.2.7.2 DelegateScreenSetChanged

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| DelegateScreenSetChanged | $\square$ | $\square$ |

The screen on the Multimedia Unit changed event
Name: DelegateScreenSetChanged
Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| IsLocked | Lock state of uniCOS | Bool |
| IsGoTo | Whether changed to the screen | Bool |
| IsShow | Show or hide the screen | Bool |
| Screen | Screens on the uniCOS: <br> None <br> Home <br> Discussion <br> Agenda <br> Delegates <br> Voting <br> Documents <br> Messages <br> Web <br> Services <br> Configuration | string |
| Option | Options for the screen | ScreenControlOptions |

## REST/JON Example:

\{"DelegateScreenSetChanged" : \{"IsLocked"
false,"IsGoTo":true,"IsShow":true,"Screen":"Agenda","Option":\{"selact":true\} \}
Example 2: (With additional parameter of video stream)

\{"DelegateScreenSetChanged":\{"IsLocked":false,"IsGoTo":true,"IsShow":true,"Screen":"Discussion","Option":\{"v ideo":1,"stream":1\}}\}

# 4.2.7.3 CustomButtonEvent

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  CustomButtonEvent | $\square$ | $\square$  |

This event is generated when the custom button is pushed or released. REST/JON Example: \{"CustomButtonEvent" : \{"SeatId": 5, "ButtonId":1, "Event": "down"\}\}

### 4.2.7.4 ServiceRequestEvent

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  ServiceRequestEvent | $\square$ | $\square$  |

This event is generated on service requested from Multimedia units. REST/JON Example: \{"ServiceRequestEvent":\{"SeatId":2,"ServiceId":1,"ServiceState":1\}

### 4.2.8 Audio

### 4.2.8.1 SetAudioSoftwareConfigurationById

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetAudioSoftwareConfigurationById | $\square$ | $\square$  |

Update event come from the Service \& ERS for the SetAudioSoftwareConfigurationById active preset.

## REST/JON Example:

>>>["SetAudioSoftwareConfigurationById":\{"AudioSoftwareConfiguration":\{"Description":"Incoming audio from microphone, auxiliary inputs 1, 2 \& 3 and Dante input channel 1 is routed by default to the unit speakers, auxiliary outputs 1, 2 \& 3 and Dante output channel 1.","Id":1,"Name":"Normal routing","Predefined":true,"State":"Active"\}\}

### 4.2.8.2 CurrentAudioSoftwareConfigurationUpdated

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  CurrentAudioSoftwareConfigurationUpdated | $\square$ | $\square$  |

Update event come from the Server for the volume change for node in active preset.

## REST/JON Example:

"CurrentAudioSoftwareConfigurationUpdated":1\}

# 4.2.9 Logging

### 4.2.9.1 ConnectionLost_CentralUnit

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Connection_CentralUnit | ☑ | ☐  |

Lost central unit connection message

**Name:** Connection_CentralUnit

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  State | The state of the connection
Connected
Disconnected | string  |

**REST/JON Example:**

{"Connection_CentralUnit":{"State":<State>}} {"Connection_CentralUnit":{"State":"Disconnected"}}

### 4.2.9.2 ConnectionLost_Database

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Connection_Database | ☑ | ☐  |

CoCon and database connection state

**Name:** Connection_Database

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  State | The state of the connection
Connected
Disconnected | string  |

**REST/JON Example:**

{"Connection_Database":{"State":<State>}}

# 4.2.10 ButtonLED_Event 

Events from CoCon Server to API clients can only be sent after the buttons have been enabled, using the command "SetButtonsEnabled", described in section 4.3.11.1.

### 4.2.10.1 ButtonPressed

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ButtonPressed | $\square$ | $\square$ |

A button was pressed on a unit.
Name: ButtonPressed

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| SeatNr | The number of the seat on which a button was pressed. | int |
| ButtonNr | The number of the button which was pressed <br> Possible values: 1-5, depending on the possibilities of the delegate units. <br> For example: delegate units with 3 buttons only have buttons 2-3-4 | int |

## REST/JSON Example:

\{"ButtonPressed":\{"SeatNr":2;"ButtonNr":3\}\}

### 4.2.10.2 NextButtonPressed

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| NextButtonPressed | $\square$ | $\square$ |

Next button was pressed on a seat (unit).
Name: NextButtonPressed

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Unitld | The seat Id | int |

## REST/JSON Example:

\{"NextButtonPressed":\{"Unitld":2\}
Important note: the return values mentions identifier "Unitld" however the number returned refers to the Seat Id.

# 4.2.10.3 PriorButtonPressed 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| PriorButtonPressed | $\square$ | $\square$ |

Prior button was pressed on a seat (unit).
Name: PriorButtonPressed
Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Unitld | The seat Id | int |

## REST/JSON Example:

\{"PriorButtonPressed":\{"Unitld":2\}
Important note: the return values mentions identifier "Unitld" however the number returned refers to the Seat Id.

# 4.2.11 Interpretation 

### 4.2.11.1 IMicrophoneStateUpdated

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| IMicrophoneStateUpdated | $\square$ | $\square$ |

This function contain the microphone state changed events, channel changed events based on the desk. Description:
When a microphone event of the ID s happens CoCon sends an update of the realtimedata. This contains all the ID microphone statuses. This is not required. Only send the information of the microphone unit that was changed.
Note:
Not necessary to subscribe to this module. It will send 3rdpart API based on the interpreter licensed mode. And
MIC state: $0=$ ON \& \& $2=$ OFF.
Ex.
\{"IMicrophoneStateUpdated":\{"Order":2,"Language":"French","Booth":"2","Desk":1, "Micstate":0\}\}

### 4.2.11.2 IActivatedChannelUpdated

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| IActivatedChannelUpdated | $\square$ | $\square$ |

These events receive by API once the any channel updated on Interpreter desk.
Note:
A/B/C channel index: 0: Active channel A, 1: active channel B and 2 : active channel C (Interpreter Desk output channel)

Ex: \{"IActivatedChannelUpdated ":\{"Order":2,"Language":"French","Booth":"2","Desk":1, "ActiveChannel":0\}\}

### 4.2.11.3 SpeakSlowerRequest

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SpeakSlowerRequest | $\square$ | $\square$ |

This event is sent when an interpreter has pressed the slow-down button on his unit.
Note: Speak Slow function should be enabed for receiving notification.

## Parameters:

| Name | Description | Type |
| :-- | :-- | :-- |
| Unitld | The unit's Id | Int |
| Booth | Booth id | Int |
| Desk | Desk id in the booth | int |

## Return:

\{"SpeakSlowerRequest":\{"Unitld":8\}\}

# 4.2.11.4 SpeakSlowerEnded

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SpeakSlowerEnded | $\square$ | $\square$  |

These events receive by API once speak slower ended. Return: {"SpeakSlowerEnded":{"Unitld":8}} 4.2.11.5 ActivePresetStateChanged

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  ActivePresetStateChanged | $\square$ | $\square$  |

Received event once the active pre-set has been changed. Note: Bool value received (True : active pre-set has changed.) Ex: \{ActivePresetStateChanged":"true"\}

### 4.2.12 Recording ( AE-R \& Plixus Core only)

Notification for the recording module.

### 4.2.12.1 RecordingStatusUpdate

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  WcapInfoUpdated | $\square$ | $\square$  |

Notify the status change of the recording. Return: string {"RecordingStateUpdated":{"RecordingState":"idle"}}

# 4.2.13 Wireless Coupling

Notification from the WCAP to rest api user.

### 4.2.13.1 WcapInfoUpdated

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  WcapInfoUpdated | $\square$ | $\square$  |

Notification for the update from WCAP. Return: string {"WcapInfoUpdated":{"chans":[],"cpld":1,"gtw":"192.168.8.1","hn":"admin","ipa":"192.168.8.210","mac":"1C:BA:8 C:99:FE:81","online":1,"op_mode":1,"reg":"Europe","sbm":"255.255.255.0","serial":352321544,"wlist":[]}} 4.2.13.2 WcapCoupledUpdated

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  WcapCoupledUpdated | $\square$ | $\square$  |

Notification for the update of WCAP coupling from WCAP. Return: string {"WcapCoupledUpdated":{"CoupledMode":true,"WcapSerial":352321544}} 4.2.13.3 AllWcapInfoUpdated

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  AllWcapInfoUpdated | $\square$ | $\square$  |

Notification for the update of all WCAP coupling from WCAP. Return: string {"AllWcapInfoUpdated":[{"chans":[],"cpld":1,"gtw":"192.168.8.1","hn":"admin","ipa":"192.168.8.210","mac":"1C:B A:8C:99:FE:81","online":1,"op_mode":0,"reg":"Europe","sbm":"255.255.255.0","serial":352321544,"wlist":[35343 6539,353436545,353436622]}}

# 4.2.14 Operator Customization

Notification from custom buttons to rest api user. Note that these events only can be triggered in case a license for the Operator Customization module is available.

### 4.2.14.1 CustomButtonPressed

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  CustomButtonPressed | $\square$ | $\square$  |

## Return: string

{"CustomButtonPressed":{"Id":1,"Text":"Button1"}

### 4.2.15 Intercom

Notification from intercom to rest api user.

### 4.2.15.1 CallerUnitStateUpdated

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  CallerUnitStateUpdated | $\square$ | $\square$  |

This notification command is used to send an update of the state of an individual unit Name: CallerUnitStateUpdated

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Unitld | ID of the unit | int  |
|  State | State of the caller:
$0 \rightarrow$ Disabled
$1 \rightarrow$ Enabled
$2 \rightarrow$ Occupied | $<0-2>$  |

## REST/JON Example:

{"CallerUnitStateUpdated":{"Unitld":24,"State":2}

### 4.2.15.2 CallerStateUpdated

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  CallerStateUpdated | $\square$ | $\square$  |

This notification command is used to send an update of the state of a caller Name: CallerStateUpdated

# Parameters: 

| Name | Description | Type |
| :-- | :-- | :--: |
| Callerld | ID of the caller | int |
| State | State of the caller: <br> $0->$ Free <br> $1->$ Busy | $<0 / 1>$ |

## REST/JON Example:

\{"CallerStateUpdated":\{"Callerld":7,"State":1\}

### 4.2.15.3 ConversationRequested

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ConversationRequested | $\square$ | $\square$ |

This notification command is used to tell the API client that a conversation is requested
Name: ConversationRequested

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| FromCid | Caller ID of the caller that requests the <br> conversation | int |
| FromUid | Unit ID of the unit that requests the <br> conversation -1 means the requester is an API <br> client | int |
| Told | Unit ID the request is directed to | int |

## REST/JON Example:

\{"ConversationRequested":\{"FromCid":7,"FromUid":24,"Told":8\}

### 4.2.15.4 ConversationAccepted

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ConversationAccepted | $\square$ | $\square$ |

This notification command is used to tell the API client that a conversation is accepted
Name: ConversationAccepted

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| FromCid | Caller ID of the caller that accepted the <br> conversation | int |
| FromUid | Unit ID of the unit that accepted the <br> conversation -1 means the requester is an API <br> client | int |
| Told | Caller ID of the caller that initiated the <br> conversation | int |

## REST/JON Example:

\{"ConversationAccepted":\{"FromCid":8,"FromUid":25,"Told":24\}\}

# 4.2.15.5 ConversationEnded

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  ConversationEnded | $\square$ | $\square$  |

This notification command is used to tell the API client that a conversation is ended Name: ConversationEnded

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  FromCid | Caller ID of the caller that ended the
conversation | int  |
|  FromUid | Unit ID of the unit that ended the conversation
-1 means the requester is an API client | int  |
|  Told | Caller ID of the other caller in the conversation | int  |

## REST/JON Example:

$\{"$ ConversationEnded":\{"FromCid":7,"FromUid":24,"Told":25\}\}

# 4.3 Client to server 

For those methods that do not explicitly return a result (usually the methods starting with "Set"), the following return values are used:

- 0: Command was successfully executed.
- 1: parameter or value passed in the API call was wrong. See the CoCon Server log file for more details.
- -1: Exception occurred on the CoCon API side. See the CoCon Server log file for more details.


### 4.3.1 General

### 4.3.1.1 Connect

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Connect | $\square$ | $\square$ |

This is the first URI that has to be sent to initiate the API connection.

## Structure:

http://localhost:8890/CoCon/Connect
Parameters: N/A

## Example:

http://localhost:8890/CoCon/Connect

Return: \{"Connect":<bool>;"id":"<id>" \}
\{"Connect":true,"id":"970196c9-6f6c-4601-b7d7-f27b1d591bc5"

### 4.3.1.2 Disconnect

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Disconnect | $\square$ | $\square$ |

This is the first URI that has to be sent to disconnect the API connection. Note however that the main principle should not require a disconnect. In most cases, an API connected is setup and events are being continuously received.

## Structure:

http://localhost:8890/CoCon/Disonnect/?Id=\{Id\}
Parameters: connection id

## Example:

http://localhost:8890/CoCon/Disconnect/?Id=970196c9-6f6c-4601-b7d7-f27b1d591bc5

## Return:

0 : OK
1 : Invalid ID or no API client found (please check parameters)

# 4.3.1.3 Subscribe 

### 4.3.1.4 Unsubscribe

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Subscribe/ UnSubscribe | $\square$ | $\square$ |

Subscribe and Unsubscribe are the subscribe/publish mode of our system, by default, once connected to CoCon the client subscribe all modes of cocon, include: Microphone, meetingAgenda, Voting, Timer, Delegate, Audio, Logging.

## Structure:

http://localhost:8890/CoCon/Subscribe/?Model=\{model\}\&id=\{id\}\&details=\{bool\} http://localhost:8890/CoCon/Unsubscribe/?Model=\{model\}\&id=\{id\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Model | The mode that want to subscribe/Unsubscribe <br> Room <br> Microphone <br> MeetingAgenda <br> Voting <br> Timer <br> Delegate <br> Audio <br> Interpretation <br> Logging <br> ButtonLED_Event <br> Interactive <br> External <br> Intercom <br> Video | string |
| Id | The id that is returned by connection | String |
| Details | To get all update events information in details <br> *Optional parameter. <br> Default value is true | bool |

## Example:

http://localhost:8890/CoCon/Subscribe/?Model=Microphone\&id=5a44aed8-e257-4b21-9240-efdd72bf866d http://localhost:8890/CoCon/Unsubscribe/?Model=Microphone\&id=a372c5d5-a5ce-4c3a-b401-53d6cd85dbeb

Return: \{"Subscribe":\{"Model":"Microphone","result":true,"details":true\}\} \{"UnSubscribe":\{"Model":"Microphone","result":true\}\}

### 4.3.1.5 Notification

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Notification | $\square$ | $\square$ |

Get notification from CoCon, this request should keep asking the CoCon.

## Structure:

http://localhost:8890/CoCon/Notification/id=\{id\}

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| id | The id that is returned by connection | string |

## Example:

http://localhost:8890/CoCon/Notification/id=5a44aed8-e257-4b21-9240-efdd72bf866d

## Return:

without connection: \{"Notification" : "Error 400"\}
with connection \{"EventName": Event Value\}
with connectin " $\{"$ Notification" : "Error 408"\}"

### 4.3.1.6 RebootSystem

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RebootSystem | $\square$ | $\square$ |

Reboot the CPU.
http://localhost:8890/CoCon/RebootSystem
Return: int
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.2 Room

### 4.3.2.1 GetRoomServerName

|  API Module | Cocon for
Plixus Core | Plixus
Core  |
| --- | --- | --- |
|  GetRoomServerName | $\square$ | $\square$  |

Get the name of the current room server Structure: http://localhost:8890/CoCon/Room/GetRoomServerName Example: http://localhost:8890/CoCon/Room/GetRoomServerName Return: {"GetRoomServerName":{"Name":"Isha Test 250 API"}} 4.3.2.2 GetActiveRoomInfo

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetActiveRoomInfo | $\square$ | $\square$  |

Get the current room information from the room server. Structure: http://192.168.8.126:8890/CoCon/Room/GetActiveRoomInfo Example: http://192.168.8.126:8890/CoCon/Room/GetActiveRoomInfo Return: CoCon for Core : {"GetActiveRoomInfo":{"ActiveRoom":{"RoomId":1,"Name":"CoCon 5.3.2.23 (230)","CoConServerVersion":"5.4.0.14","CRPVersion":"5.4.10","DBName":"LOCALHOSTSQLEXPRESS"}}} Note: RoomId is CoCon DB Room Id. Plixus Core : {"GetActiveRoomInfo":{"ActiveRoom":{"RoomId":1}}} Note: RoomId: active room on Plixus.

### 4.3.2.3 GetStatusOfCuAndDbConnection

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetStatusOfCuAndDbConnection | $\square$ | $\square$  |

Get the status of the CU connection and DB connection.

Structure: http://localhost:8890/CoCon/Room/GetStatusOfCuAndDbConnection

Example: http://localhost:8890/CoCon/Room/GetStatusOfCuAndDbConnection

Return: {"GetStatusOfCuAndDbConnection":{"CuState":"Connected","DbState":"Connected"}}

4.3.2.4 SetInitializationState

|  API Module | Cocon for Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetInitializationState | [x] | [x]  |

Set the initialization state.

Structure: http://localhost:8890/CoCon/Room/SetInitializationState/?State={state}

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  State | The initialization will be set. The state could be like: Reset(Manual init completely) Auto(Auto init compeletely) Stop Retrieve | string  |

Note: Only "Reset" and "Stop" working in Cocon for Plixus Core and Plixus Core

Example: http://localhost:8890/CoCon/Room/SetInitializationState/?State=Auto

Return: 0 : ok -1: exception at CoCon side 1 : exception at 3rd party side.(please check parameters)

4.3.2.5 GetAllUnitsState

|  API Module | Cocon for Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetAllUnitsState | [x] | [x]  |

Get all units state which is initialized in CoCon.

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Roomid | The connected room id on CoCon DB. | int  |

Return State : 0 = unit is offline 1 = unit is online.

Structure: http://localhost:8890/CoCon/Room/GetAllUnitsState/?RoomId={roomId}

# Example: 

http://localhost:8890/CoCon/Room/GetAllUnitsState/?RoomId=1

## Return by events:

\{"GetAllUnitsState":\{"Units":[\{"State":1,"UnitId":0\},\{"State":1,"UnitId":1\},\{"State":1,"UnitId":2\},\{"State":1,"UnitId": 3\}]\}\}

### 4.3.2.6 SetDefaultVolumeForRoom

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| SetDefaultVolumeForRoom | $\square$ | $\square$ |

Set default volume on CU.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Room | The connected room on CU (1) | int |
| Volume | The number of volume (0-25) | int |

Return value: int
Structure:
http://localhost:8890/CoCon/Room/SetDefaultVolumeForRoom/?Room=\{roomNr\&Volume=\{volume\}

## Example:

http://localhost:8890/CoCon/Room/SetDefaultVolumeForRoom/?Room=1\&Volume=24

## Return by events:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
Update event :
\{"VolumeChangedForRoom":\{"Id":1,"Volume":24\}\}

### 4.3.2.7 GetDefaultMicrophoneModeForRoom

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetDefaultmicrophoneModeForRoom | $\square$ | $\square$ |

Get default mic mode for the active room.
Structure:
http://localhost:8890/CoCon/Room/GetDefaultmicrophoneModeForRoom

## Example:

http://localhost:8890/CoCon/Room/GetDefaultmicrophoneModeForRoom

## Return by events:

\{"GetDefaultMicrophoneModeForRoom":\{"MicrophoneMode":\{"AllowCancelRequest":true,"AllowSwitchOffMic":tr ue,"FIFO":true,"MaxNrActive":1,"Mode":"DirectSpeak","ReplyRequest":false\}\}\}

# 4.3.2.8 SetDefaultMicrophoneModeForRoom 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetDefaultmicrophoneModeForRoom | $\square$ | $\square$ |

Set the default microphone mode for the room.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Mode | The Mode of microphone Operator <br> DirectSpeak <br> Request <br> Vox (Cocon 5.0 :Vox become activation type with Groupdiscussion.) OnlyRequest | string |
| MaxNrActive | The maximum number of active microphone | int |
| AllowRequest | bool indicating whether the delegates are allowed to request. <br> Not applicable for all modes. Optional | bool |
| AllowCancelRequest | bool indicating whether the delegates are allowed to cancel their request. Not applicable for all modes. Optional | bool |
| FIFO | bool indicating whether the FIFO mode is active <br> Not applicable for all modes. Optional | bool |
| AllowSwitchOffMic | bool indicating whether delegates can switch off their own microphones. Optional | bool |

## Structure:

Basic structure:
http://localhost:8890/CoCon/Room/SetDefaultMicrophoneModeForRoom/?Mode=(mode)\&MaxNrActive $=$ (MaxNr Active)

Optional structure:
http://localhost:8890/CoCon/Room/SetDefaultMicrophoneModeForRoom/?Mode=(mode)\& MaxNrActive=(maxNrActive)\&AllowRequest=(allowRequest)\&AllowCancelRequest=(allowCancelRequest) \& FIFO=(IsFIFO) \& AllowSwitchOffMic=(allowSwitchOffMic)

## Example:

http://localhost:8890/CoCon/Room/SetDefaultmicrophoneModeForRoom/?Mode=DirectSpeak\&MaxNrActive=4 \& AllowRequest=False\&AllowCancelRequest=False\&AllowSwitchOffMic=True\&FIFO=true

## Return by events:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.2.9 SetVolumeForRoom

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetVolumeForRoom | ☑ | ☑  |

Set volume on CU. This will be temp; once the CU re-start it will back as default value.

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Room | The connected room on CU (1) | int  |
|  Volume | The number of volume (0-25) | int  |
|  Return value: int |  |   |

**Structure:**

http://localhost:8890/CoCon/Room/SetVolumeForRoom/?Room={roomNr}&Volume={volume}

**Example:**

http://localhost:8890/CoCon/Room/SetVolumeForRoom/?Room=1&Volume=24

**Return by events:**

0 → operation success; 1 → Operation fail (not valid value) -1 → exception

# 4.3.2.10 AddSynoptic

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  AddSynoptic | ☑ | ☐  |

Add new synoptic to current active room.

**Note:** It will only create new Synoptic if no any synoptic in active room.

**Structure:**

http://localhost:8890/CoCon/Room/AddSynoptic

**Example:**

http://localhost:8890/CoCon/Room/AddSynoptic

**Return by events:**

{"AddSynoptic":{"RoomSynoptic":{"SynopticId":2,"SynopticName":"Manoj T2_1","IsMaster":true}}}

CoCon API 20 Nov 2024 83/212

# 4.3.2.11 GetSynoptic

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetSynoptic | ☑ | ☐  |

Retrieves information (including seat position and label) regarding room synoptics

**Parameter:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Synopticld | Synoptic identifier (optional) | int  |

**Structure:**

http://localhost:8890/CoCon/Room/GetSynoptic/?Synopticld={synopticld}

**Example:**

http://localhost:8890/CoCon/Room/GetSynoptic/?Synopticld=4

**Return by events**: string

{"GetSynoptic":{"RoomSynoptic":{"Synopticld":4,"SynopticName":"Allen","IsMaster":false,"SynopticNode":[{"SeatId":"2","X":273.0,"Y":306.0,"Lable":"Node"},{"SeatId":"3","X":534.0,"Y":203.0,"Lable":"Node"},{"SeatId":"5","X":179.0,"Y":219.0,"Lable":"Node"}]}]}}

# 4.3.2.12 GetAllSeats

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetAllSeats | ☑ | ☑  |

Get all seats from the Room.

**Structure:**

http://localhost:8890/CoCon/Room/GetAllSeats/?RoomId={roomId}

**Example:**

http://localhost:8890/CoCon/Room/GetAllSeats/?RoomId=1

**Return by events**: string

{"GetAllSeats":{"Seats":[{"IsChairMan":false,"SeatId":"0","SeatName":"Seat_0","UnitId":"0"},{"IsChairMan":false,"SeatId":"1","SeatName":"Seat_1","UnitId":"1"},{"IsChairMan":true,"SeatId":"2","SeatName":"Seat_2","UnitId":"2"},{"IsChairMan":false,"SeatId":"3","SeatName":"Seat_3","UnitId":"3"}]}}

# 4.3.2.13 GetBooths 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetBooths | $\square$ | $\square$ |

Get all boot inform from the current room.
Structure:
http://localhost:8890/CoCon/Room/GetBooths

## Example:

http://localhost:8890/CoCon/Room/GetBooths

## Return:

\{"GetBooths":\{"Booths":\{\{"Order":1,"Units":\{\{"Unitld":1\}\}\}\}\}

### 4.3.2.14 EditSeat

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
|  |  | Note: Not all <br> options are <br> implemented, <br> chairman <br> should work <br> Note: Not all <br> options are <br> implemented, <br> chairman should <br> work |

This api call will allow user to edit seat properties based on the seat number.
Note: After edit seat, user should have to send the SaveRoomConfig command to make sure modification take correct action.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| SeatNumber | Existing seat number from the active room. | int |
| Intercom | Is intercom is enabled for the seat <br> (True/ False) | bool |
| Description | Description | String |
| IsChairMen | Change seat priority <br> (True/False) | bool |

Return value: string
Structure:
http://localhost:8890/CoCon/Room/EditSeat/?SeatNumber=\{seatNumber\}\&Intercom=\{isIntercom\}\&Description=\{ description\}\&IsChairMan=\{IsChairMan\}

## Example:

http://localhost:8890/CoCon/Room/EditSeat/?SeatNumber=3\&Intercom=True\&Description=hi\&IsChairMan=True
Return by events: string
\{"EditSeat":\{"SeatId":3,"SeatName":"Seat
3","Description":"hi","UnitId":"","Type":"","IsIntercom":true,"IsChairman":true\}\}
1: for fail / Exception string in log.

# 4.3.2.15 GetAllUnits 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAllUnits | $\square$ | $\square$ |

Get all Units from the CU.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Type | The type of units to retrieve from the CU (e.g. IDesk) Optional | string |

Returns: String.
Note:

- return 1 if a) no database or b) no room
- return an empty list in case no units in room (but there is a database and a room)
- return list of units --> normal case


## Structure:

http://localhost:8890/CoCon/Room/GetAllUnits

## Example:

http://localhost:8890/CoCon/Room/GetAllUnits

## Return by events:

\{"GetAllUnits":\{"Units":\{"RoomId":1,"SystemUnitId":1,"SerialNumber":"15200241","UnitType":"Plixus NE"\}, \{"RoomId":1,"SystemUnitId":2,"SerialNumber":"153a003d","UnitType":"Confidea T Delegate Unit"\}, \{"RoomId":1,"SystemUnitId":3,"SerialNumber":"15511567","UnitType":"Confidea FCS"\}, \{"RoomId":1,"SystemUnitId":4,"SerialNumber":"141a0007","UnitType":"uniCOS F/MM" \}, \{"RoomId":1,"SystemUnitId":5,"SerialNumber":"161a0004","UnitType":"uniCOS F/MM 10""),\{"RoomId":1,"SystemUnitId":6,"SerialNumber":"157b034f","UnitType":"Confidea FDIVC" \}, \{"RoomId":1,"SystemUnitId":7,"SerialNumber":"157b002d","UnitType":"Confidea FDIVC" \}, \{"RoomId":1,"SystemUnitId":8,"SerialNumber":"14200197","UnitType":"Lingua ID"\}\}\}

### 4.3.2.16 SetOperatingMode

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetOperatingMode | $\square$ | $\square$ |

Set Operating mode for CU.
Note: On set operating mode need to stop the init by calling " Room/SetInitializationState/?State=Stop" on the necessary mode.
Ex. If user send this call "Room/SetOperatingMode/?Mode=3\&Append=False" they have to send the stop init call to stop the init and it will update the CoCon DB.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Mode | Set the Config mode ( 0 to 4) | int |
|  | $0 \rightarrow$ default |  |
|  | $1 \rightarrow$ open_access |  |

|   | 2 -> from_config (If Append is true and
ConfigName is empty, it will just load the
current configuration again)
3 -> auto_init
4 -> man_init |   |
| --- | --- | --- |
|  Append | Set append mode | bool  |
|  ConfigName | Set the description of the configuration | string  |

Returns: int.

# Structure:

http://localhost:8890/CoCon/Room/SetOperatingMode/?Mode=\{mode\}\&Append=\{bAppend\}\&ConfigName=\{conf igName

## Example:

http://localhost:8890/CoCon/Room/SetOperatingMode/?Mode=3\&Append=True Or http://localhost:8890/CoCon/Room/SetOperatingMode/?Mode=3\&Append=True\&ConfigName=XYZ Return by events: int $0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.2.17 GetOperatingMode

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetOperatingMode | $\square$ | $\square$  |

Get Operating mode from CU Structure: http://localhost:8890/CoCon/Room/GetOperatingMode

## Example:

http://localhost:8890/CoCon/Room/GetOperatingMode

## Returns:

\{"GetOperatingMode":\{"OperatingInfo":\{"Mode":2,"Append":true,"ConfigName":"Default Configuration"\}\}

### 4.3.2.18 ClearAllMeetingAndDelegateData

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  ClearAllMeetingAndDelegateData | $\square$ | $\square$  |

This API will clear the all meeting \& Meeting template data as well as clear the Delegate list from DB. Note: this api keep the room configuration as it is. (Ex. Synoptic \& units etc.)

## Structure:

http://localhost:8890/CoCon/Room/ClearAllMeetingAndDelegateData/?IncludeService=\{isIncludeService\}

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  IncludeService | Service data can be keep or remove by choice.
True $=$ clear service data
False $=$ keep service related data.
(Optional Parameter) | bool  |

# Example:

http://localhost:8890/CoCon/Room/ClearAllMeetingAndDelegateData

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.2.19 SetSeatPriority

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetSeatPriority | $\square$ | $\square$  |

This API allows to configure the priority for the seats in the room

## Structure:

http://localhost:8890/CoCon/Room/SetSeatPriority/?SeatNumber=\{seatNumber\}\&Priority=\{priority\}

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  SeatNumber | Seat id | Int  |
|  Priority | Desired priority from list
'Delegate', 'Vip', 'Chairman' | String  |

## Example:

http://localhost:8890/CoCon/Room/SetSeatPriority/?SeatNumber=3\&Priority=Vip

## Return:

$0 \rightarrow$ operation success $1 \rightarrow$ Operation fail (not valid value: non existing seat, invalid priority value) $-1 \rightarrow$ exception

# 4.3.3 Microphone

## 4.3.3.1 SetState

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetState | ☑ | ☑  |

Set the state of the microphone:

**Structure:**

http://localhost:8890/CoCon/Microphone/SetState/?State={State}&SeatNr={seatNr}

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  State | The state of microphone
On
Off
Request
Toggle | string  |
|  seatNr | The number of the seat | int  |

**Example:**

http://localhost:8890/CoCon/Microphone/SetState/?State=On&SeatNr=1

**Return:**

- 0 → operation success or non-existing seat
- 1 → Operation fail (not valid value)
- -1 → exception

## 4.3.3.2 SetMicrophoneMode

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetMicrophoneMode | ☑ | ☑  |

Set the mode of the microphone:

**Structure:**

**Basic structure:**

http://localhost:8890/CoCon/Microphone/SetMicrophoneMode/?Mode={mode}&MaxNrActive={MaxNrActive}

**Optional structure:**

http://localhost:8890/CoCon/Microphone/SetMicrophoneMode/?Mode={mode}&MaxNrActive={maxNrActive&&AllowRequest={allowRequest}&AllowCancelRequest={allowCancelRequest}&FIFO={IsFIFO}&AllowSwitchOffMic={allowSwitchOffMic}

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Mode | The Mode of microphone
Operator
DirectSpeak
Request
Vox (Cocon 5.0 :Vox become activation type with Groupdiscussion.)
OnlyRequest | string  |

|  |   |   |
| --- | --- | --- |
|  MaxNrActive | The maximum number of active microphone | int  |
|  AllowRequest | bool indicating whether the delegates are allowed to request. Not applicable for all modes. Optional | bool  |
|  AllowCancelRequest | bool indicating whether the delegates are allowed to cancel their request. Not applicable for all modes. Optional | bool  |
|  FIFO | bool indicating whether the FIFO mode is active Not applicable for all modes. Optional | bool  |
|  AllowSwitchOffMic | bool indicating whether delegates can switch off their own microphones. Optional | bool  |

# Example:

http://localhost:8890/CoCon/Microphone/SetMicrophoneMode/?Mode=OnlyRequest\&MaxNrActive=4\&AllowReq uest=False\&AllowCancelRequest=False\&AllowSwitchOffMic=True

## Return by events:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.3.3 SetActivationType

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetActivationType | $\square$ | $\square$  |

Set activation type is used for the change the microphone activation type available on the current microphone mode. Structure: http://localhost:8890/CoCon/Microphone/SetActivationType/?ActivationType=(activationType)

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  ActivationType | User can set the activation type base on the
active mic mode.
Ex: Direct speaker "Push Or Toggle"
Request(Group discussion) "Push Or Toggle
Or Vox". | string  |

## Example:

http://192.168.8.250:8890/CoCon/Microphone/SetActivationType/?ActivationType=Toggle

## Return by events:

Int: $0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.3.4 SetMicrophoneSensitivity

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetMicrophoneSensitivity | ☑ | ☑  |

Set microphone sensitivity for the seat (Microphone).

**Structure:**

http://localhost:8890/CoCon/Microphone/SetMicrophoneSensitivity/?SeatId={seatId}&Sensitivity={sensitivity}

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  SeatId | The number of the seat | int  |
|  Sensitivity | Value of the sensitivity
Range of value
+12 to -12
Ex. (12, 11, 10, 9, ..., 10, -11, -12) | int  |

**REST/JON Example:**

http://localhost:8890/CoCon/Microphone/SetMicrophoneSensitivity/?SeatId=1&Sensitivity=0

**Return: int**

0 → operation success; 1 → Operation fail (not valid value) -1 → exception

# 4.3.3.5 Get 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Get | $\square$ | $\square$ |

Get all information of Cocon
Structure:
http://localhost:8890/CoCon/Microphone/Get

## Example:

http://localhost:8890/CoCon/Microphone/Get

## Return:

\{"Get" : \{"MicrophoneMode" : \{"Mode" : "Operator", "MaxNrActive" : 4\}, "State" : \{"Speakers": [], "Requests" : [],"Replies":[]]\}\}
\{"Get":\{"MicrophoneMode":\{"MaxNrActive":4,"Mode":"Request"\},"State":\{"Requests":[],"Speakers":[]]\}

### 4.3.3.6 GetState

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetState | $\square$ | $\square$ |

Get all microphones state of CoCon
Structure:
http://localhost:8890/CoCon/Microphone/GetState

## Example:

http://localhost:8890/CoCon/Microphone/GetState

## Return:

\{"GetState":\{"State":\{"Speakers":[5],"Requests":[4],"Replies":[]]\}\}

### 4.3.3.7 ClearMicrophoneList

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ClearMicrophoneList | $\square$ | $\square$ |

Clear microphone list.
Structure:
http://localhost:8890/CoCon/Microphone/ClearMicrophoneList/?Type=\{type\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Type | SpeakersAndRequests (Include Chairman) Speakers (not Include chairman) Requests | string |

## Example:

http://localhost:8890/CoCon/Microphone/ClearMicrophoneList/?Type=SpeakersAndRequests

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.3.8 GetMicrophoneMode

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetMicrophoneMode | $\square$ | $\square$  |

Get microphone mode of CoCon Structure: http://localhost:8890/CoCon/Microphone/GetMicrophoneMode Example: http://localhost:8890/CoCon/Microphone/GetMicrophoneMode Return: {"GetMicrophoneMode":{"MicrophoneMode":{"AllowCancelRequest":true,"AllowSwitchOffMic":true,"FIFO":true," MaxNrActive":4,"Mode":"Request","ReplyRequest":false} }

### 4.3.3.9 GetActivationType

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetActivationType | $\square$ | $\square$  |

Get activation type used for changing the microphone activation.

## Structure:

http://localhost:8890/CoCon/Microphone/GetActivationType

## Example:

http://192.168.8.250:8890/CoCon/Microphone/GetActivationType

## Return:

{\"GetActivationType":"{\"ActivationType":""Toggle"}}

### 4.3.3.10 ActivateNextMicrophone

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  ActivateNextMicrophone | $\square$ | $\square$  |

Activate the next microphone in the request list Structure: http://localhost:8890/CoCon/Microphone/ActivateNextMicrophone

## Example:

http://localhost:8890/CoCon/Microphone/ActivateNextMicrophone

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.4 Meeting_Agenda 

### 4.3.4.1 SetMeetingState

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| SetMeetingState | $\square$ | $\square$ |

Set the state of selected meeting
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/SetMeetingState/?State=<State>\&MeetingId=<MeetingId>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| State | The state of meeting <br> Running <br> Ended <br> Paused | string |
| MeetingId | The id of the meeting | int |

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/SetMeetingState/?State=Running\&MeetingId=8

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.4.2 StartEmptyMeeting

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| StartEmptyMeeting | $\square$ | $\square$ |

Start an empty meeting directly
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/StartEmptyMeeting/?Title=<meetingTitle>\&From=<meetingFrom> \&To=<meetingTo>\&LoginMethod=<loginMethod>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Title | The title of the empty meeting | string |
| From | The time of the meeting to be started (the time must be a future time) | DateTime |
| To | The time of the meeting to be finished (the time must be after From time) | DateTime |
| LoginMethod | [Optional parameter] Default login method $=2$ 0 - Fixed seating, delegates are positioned on a fixed seat, delegates must authenticate 1 - Fixed seating, delegates are positioned on a fixed seating, no authentication needed 2 - Free seating, delegates must authenticate | int |
| AuthenticationMode | [Optional parameter] Default value $=0$ 0 - Internal authentication | int |

|  | 1 - External authentication |  |
| :-- | :-- | :-- |
| AuthenticationType | [Optional parameter] <br> Default value $=1$ <br> 0 - None <br> 1 - Badge <br> 2 - Fingerprint <br> 3 - Badge + Fingerprint <br> 4 - Keypad <br> 5 - Badge + Keypad <br> 6 - Fingerprint + Keypad <br> 7 - Badge + Fingerprint + Keypad | int |

# (Refer to the settings in the Meeting Manager) 

- Fixed seating, delegates are positioned on a fixed seat, delegates must authenticate
- LoginMethod -> 0
- AuthenticationMode -> 0
- AuthenticationType can be (1 - 7)
- Fixed seating, delegates are positioned on a fixed seating, no authentication needed
- LoginMethod -> 1
- AuthenticationMode -> 0
- AuthenticationType -> 0
- Free seating, delegates must authenticate
- LoginMethod -> 2
- AuthenticationMode -> 0
- AuthenticationType can be (1 - 7)
- Free seating, delegates must authenticate through external authentication
- LoginMethod -> 1
- AuthenticationMode -> 1
- AuthenticationType can be (1 - 7)


## Example:

http://localhost:8890/CoCon/Meeting_Agenda/StartEmptyMeeting/?Title=This is a empty meeting\&From=2017/6/5 00:00:00\&To=2017/6/5 00:10:00\&LoginMethod=1

## Return:

["StartEmptyMeeting":["Result":true,"MeetingId":23,"MeetingTitle":"This is a empty meeting","NewMeetingFrom":"2021/02/04 00:09:00","NewMeetingTo":"2021/10/28 00:10:00","LoginMethod":2, "AuthenticationType":3, "AuthenticationMode":11]

### 4.3.4.3 GetMeetingsForToday

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetMeetingsForToday | $\square$ | $\square$ |

Return all meeting scheduled for today
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/GetMeetingsForToday

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/GetMeetingsForToday

## Return:

\{"GetMeetings":\{"Meetings":\{\{"Id":1,"Title":"Fixed seat metign ","Description":"Fixed seat metign ","StartTime":"2018/12/10 10:18:32","State":"Ended","Nameplate_Layout":null\},\{"Id":3,"Title":"Title hjhhj","Description":"","StartTime":"2018/12/10
13:49:47","State":"Ended","Nameplate_Layout":null\},\{"Id":4,"Title":"This is a empty meeting","Description":"","StartTime":"2018/12/10 13:52:32","State":"Running","Nameplate_Layout":""\}]\}

# 4.3.4.4 GetAllMeetingsForDate 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAllMeetingsForDate | $\square$ | $\square$ |

Return all the meetings for a period of 24 hours after the given Date/Time combination
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/GetAllMeetingsForDate/?Time=<Time>
Time format : YYYY/MM/DD HH:mm:ss
Note that the HH:mm:ss can be omitted to retrieve all the meetings taking place on the given date.

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/GetAllMeetingsForDate/?Time=2018/06/08

## Return:

\{"GetMeetings":\{"Meetings":\{\{"Id":2,"Title":"This is a empty meeting","Description":"","StartTime":"2018/12/10 13:52:17","State":"Running","Nameplate_Layout":""\}\}\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Time | The date time (YYYY/MM/DD HH:mm:ss) | DateTime |

### 4.3.4.5 GetMeetingById

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetMeetingById | $\square$ | $\square$ |

Returns the meeting identified by the certain MeetingId.
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/GetMeetingById/?MeetingId=<MeetingId>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| MeetingId | The id of the meeting to get | int |

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/GetMeetingById/?MeetingId=497

## Return:

\{"GetMeeting":\{"Meeting":\{"Id":497,"Title":"Title dtrte","Description":"","StartTime":"2017/08/29 12:53:47","State":"Ended"\}\}\}
\{"GetMeeting":\{"Meeting":\{"Id":2,"Title":"This is a empty meeting","Description":"","StartTime":"2018/12/10 13:52:17","State":"Running","Nameplate_Layout":""\}\}\}

### 4.3.4.6 SetActiveAgendaltemByDirection

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetActiveAgendaltemByDirection | ☑ | ☐  |

Active agenda item by next and previous command

**Structure:**

http://localhost:8890/CoCon/Meeting_Agenda/SetActiveAgendaltemByDirection/?Direction=<Direction>

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Direction | The direction of active agenda item | string  |
|   | Next |   |
|   | Previous |   |

**Example:**

http://localhost:8890/CoCon/Meeting_Agenda/SetActiveAgendaltemByDirection/?Direction=Next

**Return:**

0 → operation success; 1 → Operation fail (not valid value) -1 → exception

### 4.3.4.7 SetActiveAgendaltemById

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetActiveAgendaltemById | ☑ | ☐  |

Active agenda item by Id of the agenda item

**Structure:**

http://localhost:8890/CoCon/Meeting_Agenda/SetActiveAgendaltemById/?Id=<Id>

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | The Id of the agenda item to activate | string  |

**Example:**

http://localhost:8890/CoCon/Meeting_Agenda/SetActiveAgendaltemById/?Id=3

**Return:**

0 → operation success; 1 → Operation fail (not valid value) -1 → exception

### 4.3.4.8 GetAgendaltemInformationInRunningMeeting

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetAgendaltemInformationInRunningMeeting | ☑ | ☐  |

Get all the agenda item information in running meeting

**Structure:**

http://localhost:8890/CoCon/Meeting_Agenda/GetAgendaltemInformationInRunningMeeting

**Example:**

http://localhost:8890/CoCon/Meeting_Agenda/GetAgendaltemInformationInRunningMeeting

Return: string Reply with the all agenda in running meeting. \{"GetAgendaltemInformationInRunningMeeting":\{"Agendaltems":[\{"ld":"1","Title":"Test Discussion 1","Description":"Test Discussion 1","Type":"Agendaltem","State":"notstarted","IdInDb":16,"Children":[]],\{"ld":"2","Title":"Test Voting 1_3_Vote_Public","Description":"Test Voting 1_3_Vote_Public","Type":"VotingAgendaltem","State":"active","VotingOptions":[\{"ld":45,"Name":"","Color":"\#FF0 08000"},\{"ld":46,"Name":"","Color":"\#FFFFFF00"},\{"ld":47,"Name":"","Color":"\#FFFF0000"\}],"Children":[\{"ld":"2.1" ,"Title":"Test Voting 2_2_Vote_Public","Description":"Test Voting 2_2_Vote_Public","Type":"VotingAgendaltem","State":"notstarted","VotingOptions":[\{"ld":40,"Name":"","Color":"\# FF008000"},\{"ld":41,"Name":"","Color":"\#FFFF0000"\}],"Children":[],"IdInDb":18\}],"IdInDb":17\}]\}

# 4.3.4.9 GetAgendaltemInformationInMeetingByld 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAgendaltemInformationInMeetingByld | $\square$ | $\square$ |

Get all the agenda item information in the meeting identified by a given Meetingld. Structure:
http://localhost:8890/CoCon/Meeting_Agenda/GetAgendaltemInformationInMeetingByld/?MeetingId=<Meetingl d>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | The Id of the meeting | int |

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/GetAgendaltemInformationInMeetingByld/?MeetingId=498
Return: string
Reply with the all agenda in running meeting.
\{"GetAgendaltemInformationInMeetingByld":\{"Agendaltems":[\{"ld":"1","Title":"Test Discussion 1","Description":"Test Discussion 1","Type":"Agendaltem","State":"notstarted","IdInDb":16,"Children":[]],\{"ld":"2","Title":"Test Voting 1_3_Vote_Public","Description":"Test Voting 1_3_Vote_Public","Type":"VotingAgendaltem","State":"ended","VotingOptions":[\{"ld":45,"Name":"","Color":"\#FF0 08000"},\{"ld":46,"Name":"","Color":"\#FFFFFF00"},\{"ld":47,"Name":"","Color":"\#FFFF0000"\}],"Children":[\{"ld":"2.1" ,"Title":"Test Voting 2_2_Vote_Public","Description":"Test Voting 2_2_Vote_Public","Type":"VotingAgendaltem","State":"active","VotingOptions":[\{"ld":40,"Name":"","Color":"\#FF0 08000"},\{"ld":41,"Name":"","Color":"\#FFFF0000"\}],"Children":[],"IdInDb":18\}],"IdInDb":17\}]\}

### 4.3.4.10 GetAgendaltemByld

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAgendaltemByld | $\square$ | $\square$ |

Get the agenda item by agenda item id.
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/GetAgendaltemByld/?Id=<Id>

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | The Id of the agenda item | string  |

# Example: 

http://localhost:8890/CoCon/Meeting Agenda/GetAgendaltemById/?Id=2

## Return: string

\{"GetAgendaltemById":\{"Agendaltem":\{"Id":"2","Title":"Test Voting 1_3_Vote_Public","Description":"Test Voting 1_3_Vote_Public","Type":"VotingAgendaltem","State":"ended","VotingOptions":\{\{"Id":45,"Name":"","Color":"\#FF0 08000"\}\},\{"Id":46,"Name":"","Color":"\#FFFFFF00"\}\},\{"Id":47,"Name":"","Color":"\#FFFF0000"\}\},"Children":\{\{"Id":"2.1" ,"Title":"Test Voting 2_2_Vote_Public","Description":"Test Voting 2_2_Vote_Public","Type":"VotingAgendaltem","State":"active","VotingOptions":[],"Children":[],"IdInDb":18\}\},"IdIn $\left.\mathrm{Db}^{\prime \prime}: 17\right\}\}$

### 4.3.4.11 StartMeetingViaMeetingTemplate

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| StartMeetingViaMeetingTemplate | $\square$ | $\square$ |

Start the meeting via template meeting name

## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/StartMeetingViaMeetingTemplate/?TemplateName=\{templateNa me

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| TemplateName | Name of the existing meeting template | string |

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/StartMeetingViaMeetingTemplate/?TemplateName=Test meeting

## Return:

\{"StartMeetingViaMeetingTemplate":\{"Result":true,"MeetingId":500\}\}
new created meetingId

### 4.3.4.12 StartMeetingViaXMLimport

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| StartMeetingViaXMLimport | $\square$ | $\square$ |

Start the meeting from an imported XML template. The XML file, containing the meeting data to be imported, should be uploaded to an integrated FTP-server, hosted by the CoCon Server.

FTP Server IP: CoCon Server IP
Port: 2125
User Name: televiz
Password: tiv
Path: default path.

Hint: if you want to put the file directly on to the CoCon Server, the actual path on the CoCon Server PC (for Windows 7)is:

C:\Users\=CoCon_Server_login_user>\AppData\Local\Televic_Conference\CoCon\Doc\Server\

# Structure: 

http://localhost:8890/CoCon/Meeting_Agenda/StartMeetingViaXMLimport/?XMLName=\{xml_name\}\&Type=\{type \}

## Return:

new created meetingld, or -1 when the import has failed

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| XMLName | The name of the XML file to be used for import | string |
| Type | The type of the XML file for import. Possible values: <br> "Generated": the XML-format used by the Save Offline function in the Meeting Manager Note : Group list or Grouprelated info should not be a part of generated xml meeting else meeting start will fail. <br> "Readable": the XML format as described in section 10.6.3 "Readable XML" of the CoCon manual | string |

## Example:

http://192.168.8.171:8890/CoCon/Meeting_Agenda/StartMeetingViaXMLimport/?XMLName=testmeeting.xml\&Type=Readable

### 4.3.4.13 AddAgendaltem

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| AddAgendaltem | ☑ | ☐ |

Add a new agenda item to the agenda.

**Structure:**

http://localhost:8890/CoCon/Meeting_Agenda/AddAgendaltem/?Title={title}&Des={description}&Sequence={sequence}&Type={type}&VotingTemplate={template}

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Title | The title of agenda item | string  |
|  Des | The description of agenda item | string  |
|  Sequence | The sequence string of agenda item, eg: 1.2.1 | string  |
|  Type | The type of agenda item: Discussion Lecture Voting | string  |
|  VotingTemplate (optional) | The template of voting (optional, if Type is Voting) | string  |

**Example:**

http://localhost:8890/CoCon/Meeting_Agenda/AddAgendaltem/?Title=Test_Agedna_1&Des=Test_Agedna_1&Sequence=2.1&Type=Discussion

**Return:**

{"AddNewAgendaltem":{"Id":"2.1"}}

### 4.3.4.14 GetLoginMethodForMeeting

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| GetLoginMethodForMeeting | ☑ | ☐ |

Get login method for the delegates in a meeting

**Structure:**

http://localhost:8890/CoCon/Meeting_Agenda/GetLoginMethodForMeeting/?MeetingId=<MeetingId>

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  MeetingId | The Id of the meeting | int  |

**Example:**

http://localhost:8890/CoCon/Meeting_Agenda/GetLoginMethodForMeeting/?MeetingId=500

**Return:**

String

A string which is one of the following Strings:

1. FixedSeatWithBadge
2. FixedSeatWithoutBadge
3. FreeSeating
4. ""(Empty string,It means get login method failure)
{"GetLoginMethodForMeeting":"FreeSeating"}
{"GetLoginMethodForMeeting":"FixedSeatWithoutBadge"}

# 4.3.4.15 RemoveAgendaltemById 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| RemoveAgendaltemById | $\square$ | $\square$ |

Remove the agenda item by agenda item id.
Note: It will delete the child item as well.
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/RemoveAgendaltemById/?Id=<Id>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The Id of the agenda item | string |

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/RemoveAgendaltemById/?Id=2

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.4.16 DeleteAllAgendaltems

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| DeleteAllAgendaltems | $\square$ | $\square$ |

Delete all the agenda items in meeting
Structure:
http://localhost:8890/CoCon/ Meeting_Agenda/DeleteAllAgendaltems/?Id=<meetingId>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The Id of the meeting | int |

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/DeleteAllAgendaltems/?Id=500

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.4.17 MoveAgendaltem 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| MoveAgendaltem | $\square$ | $\square$ |

Move agenda item location; it provides four type of movement, Up/Down/LevelUp/LevelDown Structure:
http://localhost:8890/CoCon/Meeting_Agenda/MoveAgendaltem/?Id=<agendald>\&Move=<movement>
Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The Id of the agenda item | string |
| Move | Include four options <br> (Up/Down/LevelUp/LevelDown) | string |

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/MoveAgendaltem/?Id=2.1\&Move=LevelUp

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.4.18 EditAgendaltem

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| EditAgendaltem | $\square$ | $\square$ |

Edit agenda item based on the order for the running meeting.
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/EditAgendaltem/?Id=<id>\&Title=\{title\}\&Des=\{Des\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The Id(order / sequence id) of the agenda. | string |
| Title | Title user defined | string |
| Des | Description for the agenda. | string |

Return : String.
Example:
http://localhost:8890/CoCon/Meeting_Agenda/EditAgendaltem/?Id=1.1\&Title=test_agenda item\&Des=New agenda item

Reply : agenda item with data.
\{"EditedAgendaltem":"Id":"1.1","Title":"TestTitle","Des":"Description of the item."\}

## 4.3.4.19 AddDelegateToMeeting

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| AddDelegateToMeeting | ☑ | ☐ |

Add delegate to the meeting.

**Structure:**

http://localhost:8890/CoCon/Meeting_Agenda/AddDelegateToMeeting/?DelegateId={DelegateId}&MeetingId={MeetingId}

**Parameters:**

| Name | Description | Type |
| --- | --- | --- |
| DelegateId | The Delegate id from DB | int |
| MeetingId | Meeting id. | int |

Return : int

**Example:**

http://localhost:8890/CoCon/Meeting_Agenda/AddDelegateToMeeting/?DelegateId=43&MeetingId=11

**Returns:**

0 → operation success; 1 → Operation fail (not valid value) -1 → exception

{"DelegatesInMeetingUpdated":{"MeetingId":11}}

## 4.3.4.20 AddDelegatesToMeeting

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| AddDelegateToMeeting | ☑ | ☐ |

Add delegates to the meeting. (Multiple delegates can be added at same time)

**Structure:**

http://localhost:8890/CoCon/Meeting_Agenda/AddDelegatesToMeeting/?DelegateId={DelegatesId&MeetingId={MeetingId}}

**Parameters:**

| Name | Description | Type |
| --- | --- | --- |
| DelegatesId | The Delegates id from DB | string |
| MeetingId | Meeting id. | int |

**Example:**

http://localhost:8890/CoCon/Meeting_Agenda/AddDelegatesToMeeting/?DelegateId=487,486,485&MeetingId=483

**Returns:**

0 → operation success; 1 → Operation fail (not valid value) -1 → exception

0, success but these delegates: 487 486 failed, because they not exist in the database {"DelegatesInMeetingUpdated":{"MeetingId":11}}

# 4.3.4.21 RemoveDelegateFromMeeting 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RemoveDelegateFromMeeting | $\square$ | $\square$ |

Remove delegate from the meeting.
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/RemoveDelegateFromMeeting/?DelegateId=(DelegateId)\&Meetin gId=(MeetingId)

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | The Delegate id from DB | int |
| MeetingId | Meeting id. | int |

Return : int
Note: Removing a delegate from the meeting is NOT allowed if the delegate has already participated in voting session in this meeting.

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/RemoveDelegateFromMeeting/?DelegateId=43\&MeetingId=11

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
\{"DelegatesInMeetingUpdated":\{"MeetingId":11\}

### 4.3.4.22 GetDelegateSeating

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetDelegateSeating | $\square$ | $\square$ |

Get delegate seating form the synoptic.
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/GetDelegateSeating/?MeetingId=(MeetingId)

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| MeetingId | Meeting id. | int |

Return : int

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/GetDelegateSeating/?MeetingId=11

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
\{"GetDelegateSeating":\{"DelegateSeating":\{\{"DelegateId":44,"SeatId":0\},\{"DelegateId":43,"SeatId":1\},\{"DelegateI d":45,"SeatId":0\}]\}\}

# 4.3.4.23 AddDelegateToSeat 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| AddDelegateToSeat | $\square$ | $\square$ |

Add Delegate to seat.
Note: if delegate is in DB that will be added to meeting user(if not a meeting user) and set on seat.

## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/AddDelegateToSeat/?MeetingId=12\&DelegateId=45\&SeatId=4
Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | Meeting id | int |
| DelegateId | Delegate id from db | int |
| Seatld | Seat id on room (Synoptic) | int |

Return : int

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/AddDelegateToSeat/?MeetingId=13\&DelegateId=45\&SeatId=2

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
\{"DelegatesInMeetingUpdated":\{"MeetingId":13\}\}

### 4.3.4.24 AddDelegatesToSeats

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| AddDelegatesToSeats | $\square$ | $\square$ |

Add Delegates to seats API call will allow to assign delegates on seats like list as one time.
Note: if delegate is in DB that will be added to meeting user (if not a meeting user) and set on seat.
Structure:
http://localhost:8890/CoCon/Meeting_Agenda/AddDelegatesToSeats/?
MeetingId=\{meetingld\} \&DelegateId $=1,2,3 \&$ Seatlds $=2,3,4$

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | Meeting id | int |
| DelegateIds | Delegate id from db | int |
| Seatlds | Seat id on room (Synoptic) | int |

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/AddDelegatesToSeats/?MeetingId=13\&DelegateIds=2,101,125, $3 \&$ Seatlds $=2,3,4$

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
\{"DelegatesInMeetingUpdated":\{"MeetingId":13\}\}

# 4.3.4.25 RemoveDelegateFromSeat 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RemoveDelegateFromSeat | $\square$ | $\square$ |

Remove the delegate from seat.
Important note: removing delegate(s) from seat is only allowed in case of fixed seating meeting (not in case of free seating meeting)

## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/RemoveDelegateFromSeat/?MeetingId=\{MeetingId\&DelegateId= \{delegateld

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | Meeting id. | int |
| DelegateId | The Delegate id from DB | int |

Return : int

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/RemoveDelegateFromSeat/?MeetingId=12\&DelegateId=43

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.4.26 RemoveDelegatesFromSeat

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RemoveDelegatesFromSeat | $\square$ | $\square$ |

Remove the delegates from seat. (Multiple delegates can remove in 1 api call)
Important note: removing delegate(s) from seat is only allowed in case of fixed seating meeting (not in case of free seating meeting)

## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/RemovesDelegateFromSeat/?MeetingId=\{MeetingId\} \&DelegateId s=\{delegateId\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | Meeting id. | int |
| DelegateIds | The Delegate ids from DB | int |

Return : int

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/RemoveDelegatesFromSeat/?MeetingId=59\&DelegateIds=101,3 47,381

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.4.27 RemoveAllDelegatesFromSeat 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RemoveAllDelegatesFromSeat | $\square$ | $\square$ |

Remove all delegates from a seats based on meeting id. (this api will not work for ended meeting) Important note: removing delegate(s) from seat is only allowed in case of fixed seating meeting (not in case of free seating meeting)

## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/RemoveAllDelegatesFromSeat/?MeetingId=[Meetingld]

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | Meeting id. | int |

Return : int

## Example:

http://localhost:8890/CoCon/Meeting_Agenda/RemoveAllDelegatesFromSeat/?MeetingId=59

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.4.28 ApplyDelegatesToSystem

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ApplyDelegatesToSystem | $\square$ | $\square$ |

Apply the seat modification to H/W.

## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/ApplyDelegatesToSystem

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.4.29 EndActiveMeeting

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| EndActiveMeeting | $\square$ | $\square$ |

End the current active meeting.

## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/EndActiveMeeting

## Returns:

\{"EndActiveMeeting":\{"MeetingId":12\}\}

# 4.3.4.30 ResendMeetingData 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ResendMeetingData | $\square$ | $\square$ |

Resend meeting data for current active meeting. (helping to open the IDC log in screen if it not open after restart IDC and delegate already on seat).

## Structure:

http://localhost:8890/CoCon/Meeting Agenda/ResendMeetingData

## Returns:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.4.31 GetVotingAgendaTemplateList

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetVotingAgendaTemplateList | $\square$ | $\square$ |

API will help user to get the full details of all existing voting templates from cocon DB, so user can edit or reuse the exiting voting templates.

## Structure:

http://localhost:8890/CoCon/Meeting Agenda/GetVotingAgendaTemplateList

## Returns: string

It will return with all Voting templates from Cocon Database, including all settings and details values.

### 4.3.4.32 GetAgendaDetailByld

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAgendaDetailByld | $\square$ | $\square$ |

This api will help user to get all details information of any agenda item to check all setting is correct or any modification is required.

## Structure:

http://localhost:8890/CoCon/Meeting Agenda/GetAgendaDetailByld/?Id=1\&MeetingId=9

## Returns: string

>>>["GetAgendaDetailByld":["AgendaItem":["NrOfVotingOption":3,"IsCorrection":true,"IsOutcomeEnable":false," IsQuorumEnable":false,"IsQuorumAbsolute":true,"QuorumValue":0.0000,"QuorumDeterminedBy":4,"IsMajorityE nable":true,"IsMajorityAbsolute":true,"MajorityValue":1.0000,"HungVoteSetting":4,"BadgeOption":4,"VotingTemp lateTitle":"test
2","IsPrint":false,"SeeIndividualVoteResultOption":5,"SeeOverallVoteResultOption":4,"IsOperatorIndicate":false, "IsSignageIndicate":false,"VotePanelIndicateChoice":0,"AllocateAbstainOption":1,"AllocateAbstainVoteIndex":0," VoteState":"New","IsVotingChoiceNumber":false,"PassMsg":"","HungMsg":"","FailMsg":"","IsEnableQuorumMsg" :false,"QuorumFailedMsg":"","MajorityOption":2,"VotingStartTime":"0001-01-
01T00:00:00","VotingEndTime":"0001-01-
01T00:00:00","IsVotingWithPin":false,"IsMajorityAchievedDetailsEnabled":false,"IsIncludingVotingWeight":true,"I

sUnanimous":false,"IsMultipleSelectionEnabled":false,"MultipleSelectionNumber":0,"VotingOptions":[{"Id":169," Name":"\#FF008000","Description":"","OptionChoice":1,"IsAbstain":false,"Index":1,"LedColor":"Blue","MajorityAc hievedDetail":""},{"Id":170,"Name":"\#FFFFFF00","Description":"","OptionChoice":2,"IsAbstain":false,"Index":2,"L edColor":"Blue","MajorityAchievedDetail":""},{"Id":171,"Name":"\#FFFF0000","Description":"","OptionChoice":3,"Is Abstain":false,"Index":3,"LedColor":"Blue","MajorityAchievedDetail":""J],"AgendaltemSpeechTimeSettings":["\$id" :"1","EntityKey":null,"IsGlobal":true,"CoCoSEditState":0,"CountForEverySpeaker":false,"Id":0,"Agendaltem":null, "IsEnabled":false,"Meeting":[],"SpeechTime":"00:05:00","VotingTemplate":null,"WarningTime":"00:01:00","AutoS witchOff":false,"IncludeChairman":false,"CanGoNegative":false,"SpeechTimeUsed":"00:00:00","ResetAfterTurn Off":false,"CountDown":false,"IsRunning":false,"TotalSpeechTimeUsed":"00:00:00","HasBeenDisabled":false,"Is Different":false},"VotingAgendaTimeSettings":["\$id":"2","EntityKey":null,"VotingAgendaltem":null,"CoCoSEditSta te":0,"Meetings":[],"Id":0,"VotingTemplate":null,"IsEnabled":false,"SpeechTime":"00:05:00","WarningTime":"00:0 5:00","AutoSwitchOff":false,"IncludeChairman":false,"CanGoNegative":false,"SpeechTimeUsed":"00:00:00","Re setAfterTurnOff":false,"CountDown":true,"IsRunning":false,"TotalSpeechTimeUsed":"00:00:00","HasBeenDisabl ed":false,"IsDifferent":false},"Id":"1","Title":"test 2","Description":"","Type":"VotingAgendaltem","State":"notstarted","IdInDb":50]\}\}

# 4.3.4.33 GetAllMeetings 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAllMeetings | $\square$ | $\square$ |

This api returns all meetings (not the meeting templates) with their state.

## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/GetAllMeetings

## Example:

## Returns: string

\{"GetAllMeetings":\{"Meetings":[{"Id":2,"Title":"fixed seating ignore
authentication","Description":"","StartTime":"2021/04/16 17:05:19","EndTime":"2021/04/16
17:08:04","State":"Ended"},{"Id":3,"Title":"fixed seating ignore
authentication","Description":"","StartTime":"2021/04/19
11:30:17","EndTime":"","State":"Paused"},{"Id":4,"Title":"fixed seating ignore
authentication","Description":"","StartTime":"2021/04/19
11:45:00","EndTime":"","State":"New"},{"Id":5,"Title":"New meeting -
4/19/2021","Description":"","StartTime":"2021/04/19 12:00:00","EndTime":"","State":"New"}]\}\}

### 4.3.4.34 EditMeetingTitle

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| EditMeetingTitle | $\square$ | $\square$ |

This api allows to change the meeting title of:

- The running meeting (no MeetingId is provided)
- A prepared meeting (when MeetingId is provided)


## Structure:

http://localhost:8890/CoCon/Meeting_Agenda/EditMeetingTitle/?MeetingId=(meetingId)\&Title=(title)

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| Meetingld | Meeting ID <br> which is optional in case you want to change <br> the meeting title of the running meeting | Int |
| Title | (new) meeting title | string |

## Example:

http://localhost:8890/CoCon/Meeting Agenda/EditMeetingTitle/?Meetingld=4\&Title=Testing meeting 1

## Return:

$0 \rightarrow$ operation success
$1 \rightarrow$ Operation fail

* No Title parameter specified
* No Meetingld specified and no running meeting in the room
* Meetingld specified, but is not valid/know
* Meetingld specified, but is a template meeting
* Meetingld specified, but meeting is In 'paused' or 'ended' state
$-1 \rightarrow$ exception


### 4.3.4.35 GetSeatsLoginStatus

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetSeatsLoginStatus | $\square$ | $\square$ |

This api returns all seats information where user is logged in or not. It contain information like Seatld, Delegate ID , loginstate.

## Structure:

http://localhost:8890/CoCon/Meeting Agenda/GetSeatsLoginStatus

## Example:

http://localhost:8890/CoCon/Meeting Agenda/GetSeatsLoginStatus

## Returns: string

\{"GetSeatsLoginStatus":\{"Seats":\{\{"Seatld":1,"DelegateId":0,"LoginState":false\},\{"Seatld":2,"DelegateId":4831,"L oginState":true\},\{"Seatld":3,"DelegateId":4832,"LoginState":true\},\{"Seatld":4,"DelegateId":0,"LoginState":false\},\{" Seatld":5,"DelegateId":4829,"LoginState":true\},\{"Seatld":7,"DelegateId":0,"LoginState":false\},\{"Seatld":9,"Delega teld":4830,"LoginState":true\},\{"Seatld":10,"DelegateId":0,"LoginState":false\}]\}\}

# 4.3.5 Voting 

### 4.3.5.1 SetVotingState

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetVotingState | $\square$ | $\square$ |

Set the voting state of current active voting agenda item
Structure:
http://localhost:8890/CoCon/Voting/SetVotingState/?State=<State>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| State | The state of voting <br> Start <br> Stop <br> Pause <br> Resume <br> Restart <br> Clear | string |

Following voting states and transitions are allowed:
Start : VotingIdle (means voting is clear)
Stop : VotingPaused and VotingStarted
Pause : VotingStarted
Resume : VotingPaused
Clear : VotingStopped
Restart : VotingStarted and VotingStopped
![img-3.jpeg](img-3.jpeg)

## Example:

http://localhost:8890/CoCon/Voting/SetVotingState/?State=Start

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

#### 4.3.5.2 AddInstantVote

| API Module | Cocon for Plixus Core | Plixus Core |
|------------------------|---------|---------|
| AddInstantVote | ☑     |  |

Adds a new instance voting item

**Structure:**

http://localhost:8890/CoCon/Voting/AddInstantVote/?VotingTemplate=<VotingTemplate>

**Parameters:**

| Name | Description | Type |
|----------------|--------------|------|
| VotingTemplate | The voting template name that instance voting based on | string |

**Example:**

http://localhost:8890/CoCon/Voting/AddInstantVote/?VotingTemplate=3_Vote_Public

**Return:**

{"AddInstantVote":{"Result":true}}

#### 4.3.5.3 AddVotingTemplate

| API Module | Cocon for Plixus Core | Plixus Core |
|------------------------|---------|---------|
| AddVotingTemplate | ☑     |  |

Will allow user to add new voting template.

**Note:** Some special character need to replace with other

| Character Escape Code | Character Escape Code |
|----------------|----------------|
| SPACE  | %20  |
| <   | %3C  |
| >   | %3E  |
| #   | %23  |
| %   | %25  |
| {   | %7B  |
| }   | %7D  |
| |   | %7C  |
| |   | %5C  |
| ^   | %5E  |
| ~   | %7E  |

|  | %5B  |
|  | %5D  |
|  | %60  |
| ;   | %3B  |
| /   | %2F  |
| ?   | %3F  |
| :   | %3A  |
| @   | %40  |
| =   | %3D  |
| &   | %26  |
| $   | %24  |

# Structure: 

http://localhost:8890/CoCon/Voting/AddVotingTemplate/7 Title=[title]\&NrOfOptions=[nrOfOptions]\&IsPrinted=[isPrintedWhenStop]\&IsVotingNumber=[isVotingNumber]\&A bstainOption=[abstainOption]\&AbstainIndex=[abstainIndex]\&
Description1=[description1]\&Option1=[option1]\&SymbolIndex1=[symbolIndex1]\&LedColour1=[ledColor1]\&IsAb stain1=[isAbstain1]\&MsgOfMajority1=[msgOfMajority1]\&
Description2=[description2]\&Option2=[option2]\&SymbolIndex2=[symbolIndex2]\&LedColour2=[ledColor2]\&IsAb stain2=[isAbstain2]\&MsgOfMajority2=[msgOfMajority2]\&
Description3=[description3]\&Option3=[option3]\&SymbolIndex3=[symbolIndex3]\&LedColour3=[ledColor3]\&IsAb stain3=[isAbstain3]\&MsgOfMajority3=[msgOfMajority3]\&
Description4=[description4]\&Option4=[option4]\&SymbolIndex4=[symbolIndex4]\&LedColour4=[ledColor4]\&IsAb stain4=[isAbstain4]\&MsgOfMajority4=[msgOfMajority4]\&
Description5=[description5]\&Option5=[option5]\&SymbolIndex5=[symbolIndex5]\&LedColour5=[ledColor5]\&IsAb stain5=[isAbstain5]\&MsgOfMajority5=[msgOfMajority5]\&
Description6=[description6]\&Option6=[option6]\&SymbolIndex6=[symbolIndex6]\&LedColour6=[ledColor6]\&IsAb stain6=[isAbstain6]\&MsgOfMajority6=[msgOfMajority6]\&
Description7=[description7]\&Option7=[option7]\&SymbolIndex7=[symbolIndex7]\&LedColour7=[ledColor7]\&IsAb stain7=[isAbstain7]\&MsgOfMajority7=[msgOfMajority7]\&
Description8=[description8]\&Option8=[option8]\&SymbolIndex8=[symbolIndex8]\&LedColour8=[ledColor8]\&IsAb stain8=[isAbstain8]\&MsgOfMajority8=[msgOfMajority8]\&
Description9=[description9]\&Option9=[option9]\&SymbolIndex9=[symbolIndex9]\&LedColour9=[ledColor9]\&IsAb stain9=[isAbstain9]\&MsgOfMajority9=[msgOfMajority9]\&
Description10=[description10]\&Option10=[option10]\&SymbolIndex10=[symbolIndex10]\&LedColour10=[ledColo r10]\&IsAbstain10=[isAbstain10]\&MsgOfMajority10=[msgOfMajority10]\&
BadgeOption=[badgeOption]\&OverallOption=[overallOption]\&IndividualOption=[individualOption]\&CanCorrect= (canCorrect)\&HasPin=[hasPin]\&IsWeightUsed=[isWeightUsed]\&
IsOperatorIndicated=[isOperatorIndicated]\&IsSignageIndicated=[isSignageIndicated]\&PanelIndicationOption=[p anellndicationOption]\&
EnableAgendaTimer=[isEnabledOfAgendaTimer]\&DurationOfAgendaTimer=[durationOfAgendaTimer]\&Warnin gOfAgendaTimer=[warningOfAgendaTimer]\&CountDownOfAgendaTimer=[isCountDownOfAgendaTimer]\&Exce edOfAgendaTimer=[canExceedOfAgendaTimer]\&
EnableVotingTimer=[isEnabledOfVotingTimer]\&DurationOfVotingTimer=[durationOfVotingTimer]\&WarningOfVo tingTimer=[warningOfVotingTimer]\&CountDownOfVotingTimer=[isCountDownOfVotingTimer]\&ExceedOfVoting Timer-[canExceedOfVotingTimer]\&
EnableQuorum=[isEnabledOfQuorum]\&AbsoluteOfQuorum=[isAbsoluteOfQuorum]\&ValueOfQuorum=[valueOf Quorum]\&OptionOfQuorum=[optionOfQuorum]\&EnableQuorumMsg=[isEnabledOfQuorumMsg]\&QuorumMsg=[ quorumMsg]\&
AbsoluteOfOutcome=[isAbsoluteOfOutcome]\&ValueOfMajority=[valueOfMajority]\&MajorityOption=[majorityOpti on]\&
EnableOutcomMsg=[isEnabledOfOutcomeMsg]\&PassedMsg=[passedMsg]\&FailedMsg=[failedMsg]\&HungMsg $=$ [hungMsg] \&EnabledMajorityMsg=[isEnabledOfMajorityMsg]\&
HungVoteSetting=[hungVoteSetting]\&IsUnanimous=[ isUnanimous]

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Title | Name of the Voting template and will keep the title doe that agenda | string |
| NrOfOptions | Number of voting options | int |
| IsPrinted | Enabled the function for print after voting stop. | bool |
| IsVotingNumber | Enabled Symbol or Number for voting choice Note: not applicable after 5.0 cocon | bool |
| AbstainOption | Choose the Voting abstain Options Value :1 to 3 | int |
| AbstainIndex | Select abstain index for move voting for Value : 1 to .. based on the voting options. | int |
| Description1 | Description for voting option 1 | string |
| Option1 (Option Color) | Voting Option Color Ex $\rightarrow \% 23 F F F F F 000$ Where $\% 23$ is Prefix and 8 chars of the RGB value. | string |

|  |   |   |
| --- | --- | --- |
|   | Note: Make sure for correct RGB value. |   |
|  SymbolIndex1 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int  |
|  LedColour1 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan | string  |
|  IsAbstain1 | Enabled the abstain function | bool  |
|  MsgOfMajority1 | Message for majority | string  |
|  Description2 | Description for voting option 2 | string  |
|  Option2 | Voting Option Color Ex->%23FFFFF000 Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value. | string  |
|  SymbolIndex2 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int  |
|  LedColour2 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan | string  |
|  IsAbstain2 | Enabled the abstain function | bool  |
|  MsgOfMajority2 | Message for majority | string  |
|  Description3 | Description for voting option 3 | string  |
|  Option3 | Voting Option Color Ex->%23FFFFF000 Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value. | string  |
|  SymbolIndex3 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int  |
|  LedColour3 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan | string  |
|  IsAbstain3 | Enabled the abstain function | bool  |
|  MsgOfMajority3 | Message for majority | string  |
|  Description4 | Description for voting option 4 | string  |
|  Option4 | Voting Option Color Ex->%23FFFFF000 Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value. | string  |
|  SymbolIndex4 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int  |
|  LedColour4 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan | string  |
|  IsAbstain4 | Enabled the abstain function | bool  |
|  MsgOfMajority4 | Message for majority | string  |
|  Description5 | Description for voting option 5 | string  |
|  Option5 | Voting Option Color Ex->%23FFFFF000 Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value. | string  |

| SymbolIndex5 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| :--: | :--: | :--: |
| LedColour5 | Voting LED color <br> We support only 7 color now. <br> Blue, White, Green, Yellow, Red, Magenta, Cyan | string |
| IsAbstain5 | Enabled the abstain function | bool |
| MsgOfMajority5 | Message for majority | string |
| Description6 | Description for voting option 6 | string |
| Option6 | Voting Option Color Ex $\rightarrow \% 23$ FFFFF000 <br> Where $\% 23$ is Prefix and 8 chars of the RGB value. <br> Note: Make sure for correct RGB value. | string |
| SymbolIndex6 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour6 | Voting LED color <br> We support only 7 color now. <br> Blue, White, Green, Yellow, Red, Magenta, Cyan <br> Note: LED color not support for more than 5 button options. | string |
| IsAbstain6 | Enabled the abstain function | bool |
| MsgOfMajority6 | Message for majority | string |
| Description7 | Description for voting option 7 | string |
| Option7 | Voting Option Color Ex $\rightarrow \% 23$ FFFFF000 <br> Where $\% 23$ is Prefix and 8 chars of the RGB value. <br> Note: Make sure for correct RGB value. | string |
| SymbolIndex7 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour7 | Voting LED color <br> We support only 7 color now. <br> Blue, White, Green, Yellow, Red, Magenta, Cyan <br> Note: LED color not support for more than 5 button options. | string |
| IsAbstain7 | Enabled the abstain function | bool |
| MsgOfMajority7 | Message for majority | string |
| Description8 | Description for voting option 8 | string |
| Option8 | Voting Option Color Ex $\rightarrow \% 23$ FFFFF000 <br> Where $\% 23$ is Prefix and 8 chars of the RGB value. <br> Note: Make sure for correct RGB value. | string |
| SymbolIndex8 | Buttons enabled for voting Index : 0 to 9 based on the options. Ex. | int |
| LedColour8 | Voting LED color <br> We support only 7 color now. <br> Blue, White, Green, Yellow, Red, Magenta, Cyan <br> Note: LED color not support for more than 5 button options. | string |
| IsAbstain8 | Enabled the abstain function | bool |
| MsgOfMajority8 | Message for majority | string |
| Description9 | Description for voting option 9 | string |
| Option9 | Voting Option Color Ex $\rightarrow \% 23$ FFFFF000 | string |

|  SymbolIndex9 | Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value. Buttons enabled for voting Index: 0 to 9 based on the options. Ex. | int  |
| --- | --- | --- |
|  LedColour9 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan Note: LED color not support for more than 5 button options. | string  |
|  IsAbstain9 | Enabled the abstain function | bool  |
|  MsgOfMajority9 | Message for majority | string  |
|  Description10 | Description for voting option 10 | string  |
|  Option10 | Voting Option Color Ex→%23FFFFF000 Where %23 is Prefix and 8 chars of the RGB value. Note: Make sure for correct RGB value. | string  |
|  SymbolIndex10 | Buttons enabled for voting Index: 0 to 9 based on the options. Ex. | int  |
|  LedColour10 | Voting LED color We support only 7 color now. Blue, White, Green, Yellow, Red, Magenta, Cyan Note: LED color not support for more than 5 button options. | string  |
|  IsAbstain10 | Enabled the abstain function | bool  |
|  MsgOfMajority10 | Message for majority | string  |
|  BadgeOption | Choose option for "Who can participate in voting" Value: 1 to 4 Ex. 1 = Only delegates with Badge 2 = Only delegates positioned on a seat 3 = Delegates with a badge or positioned on a seat. 4 = All voting units Note: badge options will be available based on the meeting type Note: Options is available based on the meeting login method. | int  |
|  OverallOption | Choose overall option "Who sees the overall results during the vote ? Value: 1 to 4 1= no one 2 = Choose this option if the overall result should only be shown to the vote master. This is an option that can be selected in the Operator application. 3 = Choose this option if all Operator application should show the overall results during the vote. 4 = Choose this option if all operator & Signage application should show the overall results. | int  |
|  IndividualOption | Choose the option for "Who sees the individual voting results (during & after the vote)" Value: 1 to 5 1= No one ;Never 2 = No one during the vote 3 = Only vote master 4 = All operators applications 5 = Choose this option if everybody should see the individual results during the vote. | int  |
|  CanCorrect | Enabled the correction option Value: True means user can change voting | bool  |

| HasPin | Enable the option for "Enter PinId for voting" Note: it will be used for IDC only. | bool |
| :--: | :--: | :--: |
| IsWeightUsed | Enable option to check the voting weight for voting result calculation. | bool |
| IsOperatorIndicated | Vote indication <br> Enabled the Operator voting indication Note: it can configure based on the individual voting setting. | bool |
| IsSignageIndicated | Vote indication <br> Enabled the Signage voting indication Note: it can configure based on the individual voting setting. | bool |
| PanelIndicationOption | ```Vote button indication Chose the vote panel indication option Value : 0 to 2 2 means "Real vote choice" Note: it can configure based on the individual voting setting.``` | int |
| EnableAgendaTimer | Enabled the timer for Agenda | bool |
| DurationOfAgendaTimer | Total Time for Agenda Ex. 00:05:00 | String |
| WarningOfAgendaTimer | Warning time for the Agenda Ex. 00:01:00 | String |
| CountDownOfAgendaTime <br> r | Choose the agenda timer count-up / countdown | Bool |
| ExceedOfAgendaTimer | Allow exceed agenda timer | Bool |
| EnableVotingTimer | Enabled the timer for voting | Bool |
| DurationOfVotingTimer | Total Time for Agenda Ex. 00:05:00 | String |
| WarningOfVotingTImer | Warning time for the Agenda Ex. 00:01:00 | String |
| CountDownOfVotingTimer | Choose the agenda timer count-up / countdown | Bool |
| ExceedOfVotingTimer | Allow exceed voting timer | Bool |
| EnableQuorum | Enabled the Quorum Functionality $0=$ Not enabled $1=$ Enabled Default value is 0 | Bool |
| AbsoluteOfQuorum | Choose Quorum define function for Absolute or relative <br> Ex. True means Absolute enabled False means Relative option selected. (enabled) | Bool |
| ValueOfQuorum | Value of the Quorum | decimal |
| OptionOfQuorum | Choose the options for Presence of determination. <br> Value : 1 to 5 <br> $1=$ Introduced badges <br> $2=$ Presence detection phase before vote <br> $3=$ Delegates positioned on a seat <br> $4=$ Entered manually by operator <br> $5=$ Total number of votes | int |
| EnableQuorumMsg | Enabled the Quorum message option | bool |
| QuorumMsg | Message for Quorum | string |
| AbsoluteOfOutcome | Choose Majority define function for Absolute or relative <br> Ex. True means Absolute enabled False means Relative option selected (enabled). | bool |
| ValueOfMajority | Value of the Majority | decimal |
| MajorityOption | Choose the majority options <br> Value :1 to 2 <br> $1=$ Number of delegates entitled to vote is used for majority calculation. | int |

|  | $2=$ Number of votes cast is used for majority <br> calculation. <br> Note: option 1 can only be selectable if the <br> relative option is slecled. |  |
| :--: | :--: | :--: |
| EnableOutcomMsg | Enabled Outcome message option. | bool |
| PassedMsg | Message for the Pass Majority | string |
| FailedMsg | Message for the Fail Majority | string |
| HungMsg | Message for the Hung Majority | string |
| EnabledMajorityMsg | Enabled Majority Achieved Details | bool |
| HungVoteSetting | Choose option for the hung vote solution <br> Value : 1 to 5 <br> Ex. <br> $0=$ Stop voting automatically. <br> $1=$ Keep the vote active until the Operator or <br> Chairman manually stops it. <br> $2=$ Restart voting with all options available <br> $3=$ Determined by chairmen votes in this <br> voting session. <br> $4=$ Stop voting and the operator decides. <br> $5=$ Determined by chairmen votes in a new <br> chairmen-only voting session. | Int |
| IsUnanimous | If value is true, means Voting options for the <br> voting session decision made by operator <br> even thoug user can choose his own chose as <br> well. (this option will used by the Cocon Op <br> app only now) <br> Note: default value is false | bool |

# Example 1: 

http://localhost:8890/CoCon/Voting/AddVotingTemplate/?Title=Test 223

## Example 2:

http://localhost:8890/CoCon/Voting/AddVotingTemplate/?Title=TEST 201
\&NrOfOptions=5\&IsPrinted=false\&Description1=Pass\&Option1=\%230000FF\&SymbolIndex1=0\&LedColour1=R ed\&Description2=ABS\&Option2=\%23FFFF0000\&SymbolIndex2=1\&LedColour2=Red\&Description3=Fail\&Optio n3=\%23FFFFFFF00\&SymbolIndex3=2\&LedColour3=Blue\&Description4=ISA\&Option4=\%2339FF14\&SymbolInde x4=3\&LedColour4=Yellow\&Description5=XYZ\&Option5=\%23FF00FF\&SymbolIndex5=4\&LedColour5=Magenta \&EnableQuorum=True\&AbsoluteOfQuorum=False\&OptionOfQuorum=1\&EnableQuorumMsg=True\&QuorumMs $\mathrm{g}=\mathrm{It}$
works\&AbsoluteOfOutcome=False\&ValueOfMajority=10\&MajorityOption=1\&EnableOutcomMsg=True\&Passed Msg=Majority
achieved\&FailedMsg=fail\&HungMsg=hung\&EnabledMajorityMsg=True\&HungVoteSetting=4\&BadgeOption=1\&E nableAgendaTimer=True\&EnableVotingTimer=True\&DurationOfAgendaTimer=00\%3A05\%3A00\&WarningOfAg endaTimer=00\%3A03\%3A00\&CountDownOfAgendaTimer=False\&ExceedOfAgendaTimer=True\&DurationOfVot ingTimer=00\%3A05\%3A00\&WarningOfVotingT1mer=00\%3A05\%3A00\&CountDownOfVotingTimer=False\&Exce edOfVotingTimer=True\&OverallOption=1\&IndividualOption=1\&CanCorrect=True\&IsWeightUsed=True\&IsOperat orIndicated=True\&IsSignageIndicated=True\&PanelIndicationOption=1

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

## Update event for Example 1:

\{"VotingTemplateAdded":\{"Id":35,"Title":"Test
223","NrOfOptions":3,"IsPrinted":false,"IsVotingNumber":false,"BadgeOption":4,"OverallOption":4,"Options":[("Id ":154,"Description":"","Option":"\#FF008000","SymbolIndex":1,"LedColour":"Blue","IsAbstain":false,"MsgOfMajorit y":"Motion
Accepted"\},\{"Id":155,"Description":"","Option":"\#FFFFFF00","SymbolIndex":2,"LedColour":"Blue","IsAbstain":fals e,"MsgOfMajority":"Motion
Postponed"\},\{"Id":156,"Description":"","Option":"\#FFFF0000","SymbolIndex":3,"LedColour":"Blue","IsAbstain":fal se,"MsgOfMajority":"Motion

Rejected" |],"IndividualOption":5,"CanCorrect":false,"HasPin":false,"IsWeightUsed":true,"IsOperatorIndicated":false,"IsSignageIndicated":false,"PanelIndicationOption":0,"AgendaTimer":["Id":71,"EnableAgendaTimer":false,"Du rationOfAgendaTimer":"00:00:00","WarningOfAgendaTimer":"00:00:00","CountDownOfAgendaTimer":true,"Exce edOfAgendaTimer":false),"VotingTimer":["Id":72,"EnableVotingTimer":false,"DurationOfVotingTimer":"00:00:00", "WarningOfVotingTImer":"00:00:00","CountDownOfVotingTimer":true,"ExceedOfVotingTimer":false],"EnableQuo rum":false,"AbsoluteOfQuorum":true,"ValueOfQuorum":0.0,"OptionOfQuorum":4,"EnableQuorumMsg":false,"Qu orumMsg":"Quorum not OK - voting postponed","AbsoluteOfOutcome":true,"ValueOfMajority":1.0,"MajorityOption":2,"EnableOutcomMsg":false,"Pas sedMsg":"Majority achieved","FailedMsg":"Majority not achieved","HungMsg":"Hung vote","EnabledMajorityMsg":false,"HungVoteSetting":1))

# Update event for Example 2: 

{"VotingTemplateAdded":["Id":33,"Title":"TEST 201
","NrOfOptions":5,"IsPrinted":false,"IsVotingNumber":false,"BadgeOption":1,"OverallOption":1,"Options":[{"Id":14 4,"Description":"Pass","Option":"\#0000FF","SymbolIndex":0,"LedColour":"Red","IsAbstain":false,"MsgOfMajority ":""},{"Id":145,"Description":"ABS","Option":"\#FFFF0000","SymbolIndex":1,"LedColour":"Red","IsAbstain":false," MsgOfMajority":"Motion
Accepted"},{"Id":146,"Description":"Fail","Option":"\#FFFFFF00","SymbolIndex":2,"LedColour":"Blue","IsAbstain": false,"MsgOfMajority":"Motion
Postponed"},{"Id":147,"Description":"ISA","Option":"\#39FF14","SymbolIndex":3,"LedColour":"Yellow","IsAbstain": false,"MsgOfMajority":"Motion
Rejected"},{"Id":148,"Description":"XYZ","Option":"\#FF00FF","SymbolIndex":4,"LedColour":"Magenta","IsAbstain ":false,"MsgOfMajority":""}],"IndividualOption":1,"CanCorrect":true,"HasPin":false,"IsWeightUsed":true,"IsOperat orIndicated":true,"IsSignageIndicated":true,"PanelIndicationOption":1,"AgendaTimer":["Id":67,"EnableAgendaTi mer":true,"DurationOfAgendaTimer":"00:05:00","WarningOfAgendaTimer":"00:03:00","CountDownOfAgendaTim er":false,"ExceedOfAgendaTimer":true),"VotingTimer":["Id":68,"EnableVotingTimer":true,"DurationOfVotingTime r":"00:05:00","WarningOfVotingTImer":"00:05:00","CountDownOfVotingTimer":false,"ExceedOfVotingTimer":true },"EnableQuorum":true,"AbsoluteOfQuorum":false,"ValueOfQuorum":0.0,"OptionOfQuorum":1,"EnableQuorumM sg":true,"QuorumMsg":"It
works","AbsoluteOfOutcome":false,"ValueOfMajority":10.0,"MajorityOption":1,"EnableOutcomMsg":true,"Passed Msg":"Majority achieved","FailedMsg":"fail","HungMsg":"hung","EnabledMajorityMsg":true,"HungVoteSetting":4}}

## Example 3:

http://localhost:8890/CoCon/Voting/AddVotingTemplate/?Title=TEST
501\&NrOfOptions=5\&IsPrinted=false\&Description1=Pass\&Option1=\%230000FF\&SymbolIndex1=0\&LedColour1 =Red\&Description2=ABS\&Option2=\%23FFFF0000\&SymbolIndex2=1\&LedColour2=Red\&Description3=Fail\&Op tion3=\%23FFFFFF00\&SymbolIndex3=2\&LedColour3=Blue\&Description4=ISA\&Option4=\%2339FF14\&SymbolIn dex4=3\&LedColour4=Yellow\&Description5=XYZ\&Option5=\%23FF00FF\&SymbolIndex5=4\&LedColour5=Magen ta\&EnableQuorum=True\&AbsoluteOfQuorum=False\&OptionOfQuorum=1\&EnableQuorumMsg=True\&QuorumM sg=It
works\&AbsoluteOfOutcome=False\&ValueOfMajority=10\&MajorityOption=1\&EnableOutcomMsg=True\&Passed Msg=Majority
achieved\&FailedMsg=fail\&HungMsg=hung\&EnabledMajorityMsg=True\&HungVoteSetting=4\&BadgeOption=1\&E nableAgendaTimer=True\&EnableVotingTimer=True\&DurationOfAgendaTimer=00\%3A05\%3A00\&WarningOfAg endaTimer=00\%3A03\%3A00\&CountDownOfAgendaTimer=False\&ExceedOfAgendaTimer=True\&DurationOfVot ingTimer=00\%3A05\%3A00\&WarningOfVotingTImer=00\%3A05\%3A00\&CountDownOfVotingTimer=False\&Exce edOfVotingTimer=True\&OverallOption=1\&IndividualOption=1\&CanCorrect=True\&IsWeightUsed=True\&IsOperat orIndicated=True\&IsSignageIndicated=True\&PanelIndicationOption=1\&IsAbstain1=True\&AbstainOption=3\&Abs tainIndex $=2$

## Update event for Example 4 :

>>>("VotingTemplateAdded":["Id":36,"Title":"TEST
501","NrOfOptions":5,"IsPrinted":false,"IsVotingNumber":false,"BadgeOption":1,"OverallOption":1,"Options":[{"Id ":157,"Description":"Pass","Option":"\#0000FF","SymbolIndex":0,"LedColour":"Red","IsAbstain":true,"MsgOfMajo rity":""},{"Id":158,"Description":"ABS","Option":"\#FFFF0000","SymbolIndex":1,"LedColour":"Red","IsAbstain":fals e,"MsgOfMajority":"Motion
Accepted"},{"Id":159,"Description":"Fail","Option":"\#FFFFFF00","SymbolIndex":2,"LedColour":"Blue","IsAbstain": false,"MsgOfMajority":"Motion
Postponed"},{"Id":160,"Description":"ISA","Option":"\#39FF14","SymbolIndex":3,"LedColour":"Yellow","IsAbstain": false,"MsgOfMajority":"Motion

Rejected"),{"Id":161,"Description":"XYZ","Option":"\#FF00FF","SymbolIndex":4,"LedColour":"Magenta","IsAbstain ":false,"MsgOfMajority":""§","IndividualOption":1,"CanCorrect":true,"HasPin":false,"IsWeightUsed":true,"IsOperat orIndicated":true,"IsSignageIndicated":true,"PanelIndicationOption":1,"AgendaTimer":{"Id":73,"EnableAgendaTi mer":true,"DurationOfAgendaTimer":"00:05:00","WarningOfAgendaTimer":"00:03:00","CountDownOfAgendaTim er":false,"ExceedOfAgendaTimer":true},"VotingTimer":{"Id":74,"EnableVotingTimer":true,"DurationOfVotingTime r":"00:05:00","WarningOfVotingTImer":"00:05:00","CountDownOfVotingTimer":false,"ExceedOfVotingTimer":true },"EnableQuorum":true,"AbsoluteOfQuorum":false,"ValueOfQuorum":0.0,"OptionOfQuorum":1,"EnableQuorumM sg":true,"QuorumMsg":"It works","AbsoluteOfOutcome":false,"ValueOfMajority":10.0,"MajorityOption":1,"EnableOutcomMsg":true,"Passed Msg":"Majority achieved","FailedMsg":"fail","HungMsg":"hung","EnabledMajorityMsg":true,"HungVoteSetting":4}}

Update event for Example 5 : With additional para "IsUnanimous"
{"VotingTemplateAdded":{"Id":3,"Title":"Test
223","NrOfOptions":3,"IsPrinted":false,"IsVotingNumber":false,"BadgeOption":4,"OverallOption":4,"Options":[{"Id ":66,"Description":"","Option":"\#FF008000","SymbolIndex":1,"LedColour":"Blue","IsAbstain":false,"MsgOfMajority ":"Motion
Accepted"},{"Id":67,"Description":"","Option":"\#FFFFFF00","SymbolIndex":2,"LedColour":"Blue","IsAbstain":false, "MsgOfMajority":"Motion
Postponed"},{"Id":68,"Description":"","Option":"\#FFFF0000","SymbolIndex":3,"LedColour":"Blue","IsAbstain":fals e,"MsgOfMajority":"Motion
Rejected"|],"IndividualOption":5,"CanCorrect":false,"HasPin":false,"IsWeightUsed":true,"IsOperatorIndicated":fal se,"IsSignageIndicated":false,"PanelIndicationOption":0,"AgendaTimer":{"Id":109,"EnableAgendaTimer":false,"D urationOfAgendaTimer":"00:00:00","WarningOfAgendaTimer":"00:00:00","CountDownOfAgendaTimer":true,"Exc eedOfAgendaTimer":false},"VotingTimer":{"Id":110,"EnableVotingTimer":false,"DurationOfVotingTimer":"00:00:0 0","WarningOfVotingTImer":"00:00:00","CountDownOfVotingTimer":true,"ExceedOfVotingTimer":false},"Enable Quorum":false,"AbsoluteOfQuorum":true,"ValueOfQuorum":0.0,"OptionOfQuorum":4,"EnableQuorumMsg":false, "QuorumMsg":"Quorum not OK - voting
postponed","AbsoluteOfOutcome":true,"ValueOfMajority":1.0,"MajorityOption":2,"EnableOutcomMsg":false,"Pas sedMsg":"Majority achieved","FailedMsg":"Majority not achieved","HungMsg":"Hung vote","EnabledMajorityMsg":false,"HungVoteSetting":1,"IsUnanimous":false]}

# 4.3.5.4 GetVotingState 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| GetVotingState | $\square$ | $\square$ |

Gets the voting state of currently active agenda item. Only applicable for voting items.
If the currently active agenda item is not a voting agenda item, then the state Stop will be returned
Structure:
http://localhost:8890/CoCon/Voting/GetVotingState
Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| State | The state of voting <br> Start <br> Stop <br> Pause <br> (Idle)Clear <br> Retrieve | string |

## Example:

http://localhost:8890/CoCon/Voting/GetVotingState

## Return:

\{"GetVotingState":\{"State":"VotingIdle"\}

# 4.3.5.5 GetAmountOfVotes 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAmountOfVotes | $\square$ | $\square$ |

Will help user to get the current vote amount during the voting. (voting is running / paused or stopped) Note: if voting state is idle then it will reply with no voting is running.

## Structure:

http://localhost:8890/CoCon/Voting/GetAmountOfVotes
Example:
http://localhost:8890/CoCon/Voting/GetAmountOfVotes

## Return:

\{"GetAmountOfVotes":\{"Total voted":0,"Total not voted":15,"Entitled to vote":15\}\}
If voting is not running :
There is no running voting

### 4.3.5.6 GetGeneralVotingResults

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetGeneralVotingResults | $\square$ | $\square$ |

Will help user to get the overall voting result for the active voting agenda after the voting stop.

## Structure:

http://localhost:8890/CoCon/Voting/GetGeneralVotingResults/?Id=\{id\}
Example:
http://localhost:8890/CoCon/Voting/GetGeneralVotingResults/?Id=20

## Return:

\{"GetGeneralVotingResults":\{"Id":100,"VotingResults":\{"Total":\{"Count":4,"Weight":4.0\},"Voted":\{"Count":1,"Weig ht":1.0\},"NotVoted":\{"Count":3,"Weight":3.0\},"Options":\{\{"Id":181,"Name":"","Color":"\#FF008000","Votes":\{"Count ":0,"Weight":0.0\}\},{"Id":182,"Name":"","Color":"\#FFFFFF00","Votes":\{"Count":0,"Weight":0.0\}\},{"Id":183,"Name":" ","Color":"\#FFFF0000","Votes":\{"Count":1,"Weight":1.0\}\},"AuthorityAssigned":\{"Present":0,"Voted":0,"Register": 0\}}\}\}

1 : if agedna is not voting agenda or voting agenda does not have result.
-1 : internal exception.

### 4.3.5.7 GetIndividualVotingResults

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetGeneralVotingResults | $\square$ | $\square$ |

This api will help user to get voting individual result for active voting agenda, if it has voting result. Where Id is Agenda id from db.

## Structure:

http://localhost:8890/CoCon/Voting/GetIndividualVotingResults/?Id=\{id\}
Example:
http://localhost:8890/CoCon/Voting/GetIndividualVotingResults/?Id=112

# Return: 

Single selection:
\{"IndividualVotingResults":\{"Id":112,"VotingResults":[{"DelegateId":174,"VotingOptionId":247,"SeatNumber":13}]] \}

Multiple selection:
\{"IndividualVotingResults":\{"Id":112,"VotingResults":[{"DelegateId":174,"VotingOptionId":[247,248,249],"SeatNu mber":13}]\}

### 4.3.5.8 DeleteVotingTemplate

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| DeleteVotingTemplate | $\square$ | $\square$ |

This api will delete a voting template. The template needs to be identified by its title

## Structure:

http://localhost:8890/CoCon/Voting/DeleteVotingTemplate/?Title=\{title\}
Example:
http://localhost:8890/CoCon/Voting/DeleteVotingTemplate/?Title=MyVotingTemplateExample

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (template not found) $-1 \rightarrow$ exception

### 4.3.5.9 StopPresenceDetection

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| StopPresenceDetection | $\square$ | $\square$ |

This API allows to stop quorum presence detection for options:

- Introduced badges
- Presence detection phase before vote
- Entered manually by operator


## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Presence | Presence value for quorum option "Entered <br> manually by operator" | int |

## Structure:

http://localhost:8890/CoCon/Voting/StopPresenceDetection/?Presence=\{presence\}
Example:
http://localhost:8890/CoCon/Voting/StopPresenceDetection/?Presence=5

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail; $-1 \rightarrow$ exception

# 4.3.5.10 ClearQuorumMessage 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ClearQuorumMessage | $\square$ | $\square$ |

This API will clear quorum message

## Structure:

http://localhost:8890/CoCon/Voting/ClearQuorumMessage

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail; $-1 \rightarrow$ exception

### 4.3.6 Timer

### 4.3.6.1 Get

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Get | $\square$ | $\square$ |

Gets an update of all timers
Structure:
http://localhost:8890/CoCon/Timer/Get

## Return:

\{"GetAllTimers":\{"MeetingTimer":\{"Timer":\{"TotalTime":"02:00:00","TimeUsed":"00:31:23","CountingDown":true," WarningTime":"00:05:00"\}\},"ActiveAgendaltemTimer":\{"Timer":\{"TotalTime":"02:00:00","TimeUsed":"00:31:23"," CountingDown":true,"WarningTime":"00:05:00"\}\},"VotingTimer":\{"Timer":null\},"SeatsTimer":\{"SeatNr":1,"Timer": \{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingDown":true,"WarningTime":"00:01:00"\}\},"DelegatesTi mer":\{\{"Delegateld":10,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingDown":true,"WarningTi me":"00:01:00"\}\},"GroupsTimer":\{\{"GroupId":1,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00","Countin gDown":true,"WarningTime":"00:01:00"\}\},{"GroupId":11,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00"," CountingDown":true,"WarningTime":"00:01:00"\}\}\}\}

### 4.3.6.2 GetDelegateTimers

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetDelegateTimers | $\square$ | $\square$ |

Get all delegates timer. (meeting users)
Note: Delegate on seat only can have timer.
Structure:
http://localhost:8890/CoCon/Timer/GetDelegateTimers

## Return:

\{"GetDelegateTimers":\{\{"Delegateld":2,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingDown": true,"WarningTime":"00:01:00"\}\},{"Delegateld":3,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00","Counti ngDown":true,"WarningTime":"00:01:00"\}\},{"Delegateld":4,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:0 0","CountingDown":true,"WarningTime":"00:01:00"\}\}\}

# 4.3.6.3 GetSeatTimers 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetSeatTimers | $\square$ | $\square$ |

Get all seat timers. (empty seat without delegate on seat.)
Structure:
http://localhost:8890/CoCon/Timer/GetSeatTimers

## Return:

\{"GetSeatTimers":\{\{"SeatNr":4,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingDown":true,"Wa rningTime":"00:01:00"\}\},\{"SeatNr":5,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingDown":tru e,"WarningTime":"00:01:00"\}\}\}

### 4.3.6.4 GetGroupTimers

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetGroupTimers | $\square$ | $\square$ |

Get all groups timer. (Meeting groups timer only)
Structure:
http://localhost:8890/CoCon/Timer/GetGroupTimers

## Return:

\{"GetGroupTimers":\{\{"GroupId":3,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00","CountingDown":tr ue,"WarningTime":"00:01:00"\}\},\{"GroupId":4,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:00","Counti ngDown":true,"WarningTime":"00:01:00"\}\}\}

### 4.3.6.5 GetActiveTimers

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetActiveTimers | $\square$ | $\square$ |

Get all active timers info. (Seat timer; Delegate timer ; Group timer )
Structure:
http://localhost:8890/CoCon/Timer/GetActiveTimers
Return:
\{"GetActiveTimers":\{"SeatsTimer":\{\{"SeatNr":8,"Timer":\{"TotalTime":"00:05:00","TimeUsed":"00:00:15","Coun tingDown":true,"WarningTime":"00:01:00"\}\}\},"DelegatesTimer":\{\{"DelegateId":43,"Timer":\{"TotalTime":"00:05 :00","TimeUsed":"00:00:17","CountingDown":true,"WarningTime":"00:01:00"\}\}\},"GroupsTimer":\{\}\}

### 4.3.6.6 SetDelegateTimer

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetDelegateTimer | $\square$ | $\square$ |

Set delegate timer.
Note: Delegate timer will enabled auto and set timer, if timer was not enabled.
Structure:
http://localhost:8890/CoCon/Timer/SetDelegateTimer/?DelegateId=\{delegateId\}\&EndTime=\{endTime\}\&Warni ngTime=\{warningTime\}\&CountDown=\{countDown\}\&IncludeChairman=\{includeChairman\}\&SpeechTimeCanExe eed=\{speechTimeCanExceed\}\&AutoSwitchOffMic=\{autoSwitchOffMic\}\&ResetWhenMicOff=\{resetWhenMicOff\} \&Enable $\}=\{e n a b l e\}$

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | The Delegate id from DB | int |
| EndTime | End time for the timer | string |
| WarningTime | Warning time for the timer | string |
| CountDown | Counting up or down for timer | bool |
| IncludeChairman | Include chairman | bool |
| SpeechTimeCanExceed | Speech time can exceed (high priority) | bool |
| AutoSwitchOffMic | Auto switch off mic if time is over (Low Priority) | bool |
| ResetWhenMicOff | Reset timer once mic off. | bool |
| Enable | Set enabled / disabled timer | bool |

Note: if SpeechTimeCanExceed =True and AutoSwitchOffMic = True, then SpeechTimeCanExceed has higher priority than AutoSwitchOffMic.

## Example:

http://localhost:8890/CoCon/Timer/SetDelegateTimer/?DelegateId=2\&EndTime=00:01:00\&WarningTime=00:00: 30\&CountDown=True\&IncludeChairman=True\&SpeechTimeCanExceed=True\&AutoSwitchOffMic=True\&Reset WhenMicOff=True\&Enable=True

## Return: string

\{"SetDelegateTimer":\{"DelegateId":71,"Endtime":"00:01:00","WarningTime":"00:00:30","CountDown":true,"Includ eChairman":true,"SpeechTimeCanExceed":true,"AutoSwitchOffMic":false,"ResetWhenMicOff":false,"Enable":tru e\}\}

### 4.3.6.7 SetGroupTimer

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| SetGroupTimer | $\square$ | $\square$ |

Set group timer.
Note: Delegate timer will enabled auto and set timer, if timer was not enabled.
Structure:
http://localhost:8890/CoCon/Timer/SetGroupTimer/?GroupId=\{groupId\}\&EndTime=\{endTime\}\&WarningTime=\{w arningTime\}\&CountDown=\{countDown\}\&IncludeChairman=\{includeChairman\}\&SpeechTimeCanExceed=\{speec hTimeCanExceed\}\&AutoSwitchOffMic=\{autoSwitchOffMic\}\&CountForEverySpeaker=\{countForEverySpeaker\}\& Enable $=\{$ enable $\}$

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| GroupId | The Group id from DB | int |

|  EndTime | End time for the timer | string  |
| --- | --- | --- |
|  WarningTime | Warning time for the timer | string  |
|  CountDown | Counting up or down for timer | bool  |
|  IncludeChairman | Include chairman | bool  |
|  SpeechTimeCanExceed | Speech time can exceed (high priority) | bool  |
|  AutoSwitchOffMic | Auto switch off mic if time is over (Low Priority) | bool  |
|  CountForEverySpeaker | Count for every speaker belong to that group | bool  |
|  Enable | Set enabled / disabled timer | bool  |

Note: if SpeechTimeCanExceed =True and AutoSwitchOffMic = True, then SpeechTimeCanExceed has higher priority than AutoSwitchOffMic.

# Example:

http://localhost:8890/CoCon/Timer/SetGroupTimer/?GroupId=1\&EndTime=00:10:00\&WarningTime=00:01:30\&C ountDown=True\&IncludeChairman=True\&SpeechTimeCanExceed=True\&AutoSwitchOffMic=True\&CountForEv erySpeaker=True\&Enable=True

## Return: string

("SetGroupTimer":["GroupId":9,"Endtime":"00:03:00","WarningTime":"00:01:30","CountDown":true,"IncludeChair man":true,"SpeechTimeCanExceed":true,"AutoSwitchOffMic":false,"CountForEverySpeaker":true,"Enable":true))

### 4.3.6.8 SetGlobalDelegateTimer

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetGroupTimer | $\square$ | $\square$  |

Set global delegate timer. (for all meeting user ) Note: Delegate timer will enabled auto and set timer, if timer was not enabled.

## Structure

http://localhost:8890/CoCon/Timer/SetGlobalDelegateTimer/?EndTime=(endTime)\&WarningTime=(warningTim e)\&CountDown=(countDown)\&IncludeChairman=(includeChairman)\&SpeechTimeCanExceed=(speechTimeCa nExceed)\&AutoSwitchOffMic=(autoSwitchOffMic)\&ResetWhenMicOff=(resetWhenMicOff)\&Enable=(enable)

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  EndTime | End time for the timer | string  |
|  WarningTime | Warning time for the timer | string  |
|  CountDown | Counting up or down for timer | bool  |
|  IncludeChairman | Include chairman | bool  |
|  SpeechTimeCanExceed | Speech time can exceed (high priority) | bool  |
|  AutoSwitchOffMic | Auto switch off mic if time is over (Low Priority) | bool  |
|  ResetWhenMicOff | Reset timer once mic off. | bool  |
|  Enable | Set enabled / disabled timer | bool  |

Note: if SpeechTimeCanExceed =True and AutoSwitchOffMic = True, then SpeechTimeCanExceed has higher priority than AutoSwitchOffMic.

## Example:

http://localhost:8890/CoCon/Timer/SetGlobalDelegateTimer/?EndTime=00:02:00\&WarningTime=00:00:30\&Cou ntDown=False\&IncludeChairman=True\&SpeechTimeCanExceed=True\&AutoSwitchOffMic=True\&ResetWhenMi cOff=True\&Enable=True

Return: string
\{"SetGlobalDelegateTimer":\{"Endtime":"00:02:00","WarningTime":"00:00:30","CountDown":false,"IncludeChairm an":true,"SpeechTimeCanExceed":true,"AutoSwitchOffMic":false,"ResetWhenMicOff":true\}\}

# 4.3.6.9 SetGlobalSeatTimer 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetGlobalSeatTimer | $\square$ | $\square$ |

Set global seat timer. (For all empty seat in running meeting.)
Note: Delegate timer will enabled auto and set timer, if timer was not enabled.
Structure:
http://localhost:8890/CoCon/Timer/SetGlobalSeatTimer/?EndTime=(endTime)\&WarningTime=(warningTime)\&C ountDown=(countDown)\&IncludeChairman=(includeChairman)\&SpeechTimeCanExceed=(speechTimeCanExce ed)\&AutoSwitchOffMic=(autoSwitchOffMic)\&ResetWhenMicOff=(resetWhenMicOff)\&Enable=(enable)

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| EndTime | End time for the timer | string |
| WarningTime | Warning time for the timer | string |
| CountDown | Counting up or down for timer | bool |
| IncludeChairman | Include chairman | bool |
| SpeechTimeCanExceed | Speech time can exceed (high priority) | bool |
| AutoSwitchOffMic | Auto switch off mic if time is over (Low Priority) | bool |
| ResetWhenMicOff | Reset timer once mic off. | bool |
| Enable | Set enabled / disabled timer | bool |

Note: if SpeechTimeCanExceed =True and AutoSwitchOffMic = True, then SpeechTimeCanExceed has higher priority than AutoSwitchOffMic.

## Example:

http://localhost:8890/CoCon/Timer/SetGlobalSeatTimer/?EndTime=00:02:00\&WarningTime=00:00:30\&CountDo wn=True\&IncludeChairman=True\&SpeechTimeCanExceed=True\&AutoSwitchOffMic=True\&ResetWhenMicOff= True\&Enable=True

## Return: string

\{"SetGlobalSeatTimer":\{"Endtime":"00:01:00","WarningTime":"00:00:30","CountDown":true,"IncludeChairman":tr ue,"SpeechTimeCanExceed":true,"AutoSwitchOffMic":false,"ResetWhenMicOff":true\}\}

### 4.3.6.10 SetGlobalGroupTimer

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetGlobalSeatTimer | $\square$ | $\square$ |

Set global group timer. (For all running meeting groups.) Note: Delegate timer will enabled auto and set timer, if timer was not enabled. Structure: http://localhost:8890/CoCon/Timer/SetGlobalGroupTimer/?EndTime=(endTime)\&WarningTime=(warningTime)\& CountDown=(countDown)\&IncludeChairman=(includeChairman)\&SpeechTimeCanExceed=(speechTimeCanEx ceed)\&AutoSwitchOffMic=(autoSwitchOffMic)\&CountForEverySpeaker=(countForEverySpeaker)\&Enable=(enab le)

Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  EndTime | End time for the timer | string  |
|  WarningTime | Warning time for the timer | string  |
|  CountDown | Counting up or down for timer | bool  |
|  IncludeChairman | Include chairman | bool  |
|  SpeechTimeCanExceed | Speech time can exceed (high priority) | bool  |
|  AutoSwitchOffMic | Auto switch off mic if time is over (Low Priority) | bool  |
|  CountForEverySpeaker | Count for every speaker belong to that group | bool  |
|  Enable | Set enabled / disabled timer | bool  |

Note: if SpeechTimeCanExceed =True and AutoSwitchOffMic = True, then SpeechTimeCanExceed has higher priority than AutoSwitchOffMic.

# Example:

http://localhost:8890/CoCon/Timer/SetGlobalGroupTimer/?EndTime=00:01:00\&WarningTime=00:00:30\&Count Down=True\&IncludeChairman=True\&SpeechTimeCanExceed=True\&AutoSwitchOffMic=True\&CountForEveryS peaker=False\&Enable=True

## Return: string

\{"SetGlobalGroupTimer":\{"Endtime":"00:01:00","WarningTime":"00:00:30","CountDown":true,"IncludeChairman": true,"SpeechTimeCanExceed":true,"AutoSwitchOffMic":false,"CountForEverySpeaker":false\}\}

### 4.3.6.11 ResetDelegateTimer

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  ResetDelegateTimer | $\square$ | $\square$  |

Reset delegate timer to the configured time if user have running or used timer in active meeting. Note: Delegate should be a meeting user and his timer should be enabled Structure: http://localhost:8890/CoCon/Timer/ResetDelegateTimer/?DelegateId=(id)

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  DelegateId | Id of the delegate | string  |

## Example:

http://192.168.8.165:8890/CoCon/Timer/ResetDelegateTimer/?DelegateId=10

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.6.12 ResetGlobalDelegateTimer 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ResetGlobalDelegateTimer | $\square$ | $\square$ |

Reset global delegate timer to the configured time for the all meeting user whos timer is enabled in active meeting.

## Structure:

http://localhost:8890/CoCon/Timer/ResetGlobalDelegateTimer

## Example:

http://localhost:8890/CoCon/Timer/ResetGlobalDelegateTimer

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.6.13 ResetGroupTimer

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ResetGroupTimer | $\square$ | $\square$ |

Reset group timer to the configured time if the group has running or used timer in active meeting. Note: Group should be a meeting Group and his timer should be enabled

## Structure:

http://localhost:8890/CoCon/Timer/ResetDelegateTimer/?DelegateId=[id]

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Groupld | Id of the meeting group | string |

## Example:

http://192.168.8.165:8890/CoCon/Timer/ResetGroupTimer/?GroupId=1

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.6.14 ResetGlobalGroupTimer

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ResetGlobalGroupTimer | $\square$ | $\square$ |

Reset global group timer to the configured time for the all meeting Group whose timer is enabled in active meeting.

# Structure: 

http://192.168.8.165:8890/CoCon/Timer/ResetGlobalGroupTimer

## Example:

http://192.168.8.165:8890/CoCon/Timer/ResetGlobalGroupTimer
Return: int
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.6.15 ChangeDelegateTimer 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ChangeDelegateTimer | $\square$ | $\square$ |

Change delegate timer to the configured time if user have running or used timer in active meeting. Note: Delegate should be a meeting user and his timer should be enabled.

## Structure:

http://localhost:8890/CoCon/Timer/ChangeDelegateTimer/?DelegateId=\{delegateId\}\&UsedTime=\{usedTime\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | Id of the delegate | String |
| UsedTime | Time which user would like to update | String |

## Example:

http://192.168.8.165:8890/CoCon/Timer/ChangeDelegateTimer/?DelegateId=9\&UsedTime=00:00:30

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.6.16 ChangeGroupTimer

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ChangeGroupTimer | $\square$ | $\square$ |

Change group timer to the configured time if the group has running or used timer in active meeting. Note: Group should be a meeting Group and his timer should be enabled

## Structure:

http://localhost:8890/CoCon/Timer/ChangeGroupTimer/?GroupId=\{groupId\}\&UsedTime=\{usedTime\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| GroupId | Id of the meeting group | string |

## Example:

http://192.168.8.165:8890/CoCon/Timer/ChangeGroupTimer/?GroupId=1\&UsedTime=00:01:00

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.6.17 ChangeDelegateTimerState 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| ChangeDelegateTimerState | $\square$ | $\square$ |

Change delegate timer state.
Note: This call can only be performed on a running meeting, when delegate is in meeting and microphone of that delegate is enabled. Of course timer functionality must also be enabled.

## Structure:

http://localhost:8890/CoCon/Timer/ChangeDelegateTimerState/?DelegateId=\{delegateId\}\&TimerState=\{state\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | Id of the delegate | integer |
| TimerState | State of the timer | String <br> ["Pause", "Resume", "Restart"] |

## Example:

http://192.168.8.165:8890/CoCon/Timer/ChangeDelegateTimerState/?DelegateId=1\&TimerState=Pause

## Return: int

$0 \rightarrow$ operation success
$1 \rightarrow$ operation fail (wrong TimerState value, no meeting running, delegate not in meeting, microphone not on or timers not enabled)
$-1 \rightarrow$ exception

### 4.3.6.18 ChangeGroupTimerState

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| ChangeGroupTimerState | $\square$ | $\square$ |

Change group timer state.
Note: This call can only be performed on a running meeting and when group is in meeting. Of course timer functionality must also be enabled.

## Structure:

http://localhost:8890/CoCon/Timer/ChangeGroupTimerState/?GroupId=\{groupId\}\&TimerState=\{state\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| GroupId | Id of the group | integer |
| TimerState | State of the timer | String <br> ["Pause", "Resume", "Restart"] |

## Example:

http://192.168.8.165:8890/CoCon/Timer/ChangeGroupTimerState/?GroupId=1\&TimerState=Pause

## Return: int

$0 \rightarrow$ operation success
$1 \rightarrow$ operation fail (wrong TimerState value, no meeting running, group not in meeting or timers not enabled)
$-1 \rightarrow$ exception

# 4.3.7 Delegate 

### 4.3.7.1 GetDelegatesInMeeting

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| GetDelegatesInMeeting | $\square$ | $\square$ |

Get all the delegates information in the special meeting
Structure:
http://localhost:8890/CoCon/Delegate/GetDelegatesInMeeting/?MeetingId=<MeetingId>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| MeetingId | The id of the meeting those delegates in | int |

## Example:

http://localhost:8890/CoCon/Delegate/GetDelegatesInMeeting/?MeetingId=8

## Return:

\{"GetDelegatesInMeeting":\{"Delegates":[\{"Id":240,"FirstName":"","Name":"AUCOUTURIER","MiddleName":null," Street":"","StreetNumber":0,"PostCode":"","City":"","Country":null,"Title":"","BirthDate":"","District":null,"Biography ":"","Groups":[\{"Id":9,"Name":"G9"\}],"SeatNumber":2,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginC ode":""\},\{"Id":274,"FirstName":"","Name":"AUDIBERT8TROIN","MiddleName":null,"Street":"","StreetNumber":0," PostCode":"","City":"","Country":null,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[\{"Id":10,"Name ":"G10"\}],"SeatNumber":3,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginCode":""\},\{"Id":275,"FirstNa me":"","Name":"BARREILLE","MiddleName":null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country":null,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[\{"Id":10,"Name":"G10"\}],"SeatNumber":null,"Bad geNumber":null,"FingerprinterData":"","KeypadLoginCode":""\},{"Id":261,"FirstName":"","Name":"BATTIN","Middl eName":null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country":null,"Title":"Mr","BirthDate":"","District ":null,"Biography":"","Groups":[\{"Id":10,"Name":"G10"\}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterDat a":"","KeypadLoginCode":""\},{"Id":418,"FirstName":"David","Name":"Balmer","MiddleName":null,"Street":"Les Gasses
27","StreetNumber":0,"PostCode":"2946","City":"Miécourt","Country":null,"Title":"Député","BirthDate":"","District": null,"Biography":"","Groups":[\{"Id":18,"Name":"PLR"\}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData ":",","KeypadLoginCode":""\},{"Id":348,"FirstName":"D.","Name":"BATAILLE","MiddleName":null,"Street":"","Street Number":0,"PostCode":"","City":"","Country":null,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[\{"I d":14,"Name":"GROUPE
PS"\}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginCode":""\},{"Id":336,"FirstNam e":"B.","Name":"BAUDOUX","MiddleName":null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country":nu II,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[\{"Id":13,"Name":"GROUPE PC"\}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginCode":""\},{"Id":334,"FirstNam e":"C.","Name":"BEAUCHAMP","MiddleName":null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country" :null,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[\{"Id":13,"Name":"GROUPE PC"\}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginCode":""\},{"Id":457,"FirstNam e":"Elisabeth","Name":"Baume-Schneider","MiddleName":null,"Street":"Rue du 24-Septembre 2","StreetNumber":0,"PostCode":"2800","City":"Delémont","Country":"","Title":"Ministre","BirthDate":"","District":"" ,"Biography":"","Groups":[\{"Id":20,"Name":"PS"\}],"SeatNumber":null,"BadgeNumber":"A4F538DE","Fingerprinter Data":"","KeypadLoginCode":""\}])

# 4.3.7.2 GetDelegatesInCurrentMeeting 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| GetDelegatesInCurrentMeeting | $\square$ | $\square$ |

Get all the delegates information in the current running meeting
Structure:
http://localhost:8890/CoCon/Delegate/GetDelegatesInCurrentMeeting

## Return:

\{"GetDelegatesInCurrentMeeting":\{"IsMeetingRunning":true,"Delegates":[{"Id":240,"FirstName":"","Name":"AUC OUTURIER","MiddleName":null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country":null,"Title":"","Birt hDate":"","District":null,"Biography":"","Groups":[{"Id":9,"Name":"G9"}],"SeatNumber":2,"BadgeNumber":null,"Fin gerprinterData":"","KeypadLoginCode":""},{"Id":274,"FirstName":"","Name":"AUDIBERT8TROIN","MiddleName": null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country":null,"Title":"","BirthDate":"","District":null,"Biogr aphy":"","Groups":[{"Id":10,"Name":"G10"}],"SeatNumber":3,"BadgeNumber":null,"FingerprinterData":"","Keypad LoginCode":""},{"Id":275,"FirstName":"","Name":"BARREILLE","MiddleName":null,"Street":"","StreetNumber":0," PostCode":"","City":"","Country":null,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[{"Id":10,"Name ":"G10"}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginCode":""},{"Id":261,"FirstN ame":"","Name":"BATTIN","MiddleName":null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country":null, "Title":"Mr","BirthDate":"","District":null,"Biography":"","Groups":[{"Id":10,"Name":"G10"}],"SeatNumber":null,"Bad geNumber":null,"FingerprinterData":"","KeypadLoginCode":""},{"Id":418,"FirstName":"David","Name":"Balmer"," MiddleName":null,"Street":"Les Gasses
27","StreetNumber":0,"PostCode":"2946","City":"Miécourt","Country":null,"Title":"Député","BirthDate":"","District": null,"Biography":"","Groups":[{"Id":18,"Name":"PLR"}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData ":"","KeypadLoginCode":""},{"Id":348,"FirstName":"D.","Name":"BATAILLE","MiddleName":null,"Street":"","Street Number":0,"PostCode":"","City":"","Country":null,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[{"I d":14,"Name":"GROUPE
PS"}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginCode":""},{"Id":336,"FirstNam e":"B.","Name":"BAUDOUX","MiddleName":null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country":nu II,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[{"Id":13,"Name":"GROUPE
PC"}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginCode":""},{"Id":334,"FirstNam e":"C.","Name":"BEAUCHAMP","MiddleName":null,"Street":"","StreetNumber":0,"PostCode":"","City":"","Country" :null,"Title":"","BirthDate":"","District":null,"Biography":"","Groups":[{"Id":13,"Name":"GROUPE
PC"}],"SeatNumber":null,"BadgeNumber":null,"FingerprinterData":"","KeypadLoginCode":""},{"Id":457,"FirstNam e":"Elisabeth","Name":"Baume-Schneider","MiddleName":null,"Street":"Rue du 24-Septembre 2","StreetNumber":0,"PostCode":"2800","City":"Delémont","Country":"","Title":"Ministre","BirthDate":"","District":"" ,"Biography":"","Groups":[{"Id":20,"Name":"PS"}],"SeatNumber":null,"BadgeNumber":"A4F538DE","Fingerprinter Data":"","KeypadLoginCode":""}]\}

### 4.3.7.3 ClearAllDelegatesAndGroups

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| ClearAllDelegatesAndGroups | $\square$ | $\square$ |

Clear all the delegates and groups in the database.
Structure:
http://localhost:8890/CoCon/Delegate/ClearAllDelegatesAndGroups

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
Update event:

\{"DelegateRemoved":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,3 $3,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68$, $69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,1$ $03,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,12$ $8,129,130,131,132,133,134,135,136,137,138,139,140,141,142,144]\}$

# 4.3.7.4 GetAllDelegates 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAllDelegates | $\square$ | $\square$ |

Get all delegates list from the DB

## Structure:

http://localhost:8890/CoCon/Delegate/GetAllDelegates

## Example:

http://localhost:8890/CoCon/Delegate/GetAllDelegates

## Return:

>>»{"GetAllDelegates":\{"Delegates":[{"Id":81,"Name":"Vande
Lanotte","MiddleName":null,"FirstName":"Johan","Title":"Mr","BadgeNumber":null,"UserName":null,"Password":n ull,"Street":"","StreetNumber":"","City":"","PostCode":"","Country":"","District":"","BirthDate":"","Email":null,"Phone $\mathrm{Nr}^{\text {" }}: \mathrm{null}$,"VotingRight":true,"VotingWeight":1,"FingerprinterData":"","KeypadLoginCode":""},{"Id":101,"Name":"Aer s","MiddleName":null,"FirstName":"Wilfried","Title":"Mr","BadgeNumber":"64CBA3DB","UserName":"","Password ":null,"Street":"","StreetNumber":"","City":"","PostCode":"","Country":"","District":"","BirthDate":"","Email":"","Phon eNr":"","VotingRight":true,"VotingWeight":1,"FingerprinterData":"","KeypadLoginCode":""},{"Id":372,"Name":"66", "MiddleName":null,"FirstName":"","Title":"","BadgeNumber":null,"UserName":null,"Password":null,"Street":"","Str eetNumber":"","City":"","PostCode":"","Country":null,"District":null,"BirthDate":"","Email":null,"PhoneNr":null,"Voti ngRight":true,"VotingWeight":1,"FingerprinterData":"","KeypadLoginCode":""},{"Id":463,"Name":"Ackermann","Mi ddleName":null,"FirstName":"Marcel","Title":"Député","BadgeNumber":"14EFB4E2","UserName":"","Password": null,"Street":"Route Principale
11c","StreetNumber":"","City":"Bourrignon","PostCode":"2803","Country":"","District":"","BirthDate":"","Email":""," PhoneNr":"","VotingRight":true,"VotingWeight":1,"FingerprinterData":"","KeypadLoginCode":""},{"Id":532,"Name": "76","MiddleName":null,"FirstName":"76","Title":"","BadgeNumber":null,"UserName":null,"Password":null,"Street" :"","StreetNumber":"","City":"","PostCode":"","Country":null,"District":null,"BirthDate":"","Email":null,"PhoneNr":nul I,"VotingRight":true,"VotingWeight":1,"FingerprinterData":"","KeypadLoginCode":""}]\}

### 4.3.7.5 AddDelegate

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| AddDelegate | $\square$ | $\square$ |

Add delegate to the DB.

## Structure:

http://localhost:8890/CoCon/Delegate/AddDelegate/?Name=\{name\}\&FirstName=\{firstName\}\&Title=\{title\}\& MiddleName =\{ middleName \} \&BadgeNr=\{badgeNr\}\&UserName=\{userName\}\&Password=\{password\} \&Street=\{street\}\&StreetNr=\{streetNr\}\&City=\{city\}\&PostalCode=\{postalCode\}\&Country=\{country\}\&District=\{district $\}$ \&BirthDate=\{birthDate\} \&Email=\{email\}\&PhoneNr=\{phoneNr\}\&Biography=\{biography\}\&VotingRight=\{votingRight\}\&VotingWeight=\{votin gWeight\}\&PinId=\{pinId\}\&FingerprinterData=\{ fingerprinterData\}\&KeypadLoginCode=\{ keypadLoginCode $\}$

| Name | Description | Type |
| :--: | :--: | :--: |
| Name | The name of the delegate | string |
| FirstName | The first name of the delegate | string |
| Title | The title of the delegate [Optional parameter] | string |
| MiddleName | MiddleName of the delegate [Optional parameter] | string |
| BadgeNr | The badge number [Optional parameter] | string |
| UserName | The username for the delegate [Optional parameter] | string |
| Password | The password for the delegate [Optional parameter] | string |
| Street | The street for the delegate [Optional parameter] | string |
| StreetNr | The street number for the delegate [Optional parameter] | string |
| City | The city for the delegate [Optional parameter] | string |
| PostalCode | The postal code for the delegate [Optional parameter] | string |
| Country | The country for the delegate [Optional parameter] | string |
| District | The district for the delegate [Optional parameter] | string |
| BirthDate | The delegate's birthday [Optional parameter] | string |
| Email | The delegate's email address [Optional parameter] | string |
| PhoneNr | The delegate's phone number [Optional parameter] | String |
| Biography | Biography of the delegate [Optional parameter] | string |
| VotingRight | Does the delegate have the right to vote? Default value : True [Optional parameter] | Bool |
| VotingWeight | The voting weight to apply for this delegate Default value : 1 [Optional parameter] | Int |
| PinId | PinId to login for voting Must be 4 number only (0-9) [Optional parameter] | Int |
| FingerprinterData | Fingerprint data to open the Unicos IDC screen [Optional parameter] | string |
| KeypadLoginCode | Code to login into the Unicos FMM (IDC) [Optional parameter] | int |
| BackupBadge | The backup badge number [Optional parameter] | string |
| AuthorityBadge | The authority badge number [Optional parameter] | string |

# Example: 

http://localhost:8890/CoCon/Delegate/AddDelegate/?Name=Isha\&FirstName=Sakhalakr\&Title=Mrs.
http://localhost:8890/CoCon/Delegate/AddDelegate/?Name=Isha\&FirstName=Sakhalakr\&Title=Mrs.\&PinId=123 4

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

## Update event :

{"DelegateAdded":{"DelegateId":534,"Name":"Isha","MiddleName":null,"FirstName":"Sakhalakr","Title":"Mrs."," BadgeNr":"","UserName":"","Password":"","Street":"","StreetNr":"0","PostalCode":"","City":"","Country":"","Birth Date":"","District":"","Email":"","PhoneNr":"","VotingRight":true,"VotingWeight":1,"PinId":"","FingerprinterData":"", "KeypadLoginCode":"" }}

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RemoveDelegate | $\square$ | $\square$ |

Remove delegate from the DB.
Structure:
http://localhost:8890/CoCon/Delegate/RemoveDelegate/?DelegateId=\{delegateId\}

# Example: 

http://localhost:8890/CoCon/Delegate/RemoveDelegate/?DelegateId=40
Return:
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

## Update Event :

\{"DelegateRemoved":[40]\}

### 4.3.7.7 EditDelegate

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| EditDelegate | $\square$ | $\square$ |

Edit exiting delegate in DB.

## Structure:

http://localhost:8890/CoCon/Delegate/EditDelegate/?DelegateId=\{delegateId\}\&Name=\{name\}\&FirstName=\{first Name\}\&Title=\{title\}\&MiddleName=\{middleName\}\&BadgeNr=\{badgeNr\}\&UserName=\{userName\}\&Password=\{pa ssword\}\&Street=\{street\}\&StreetNr=\{streetNr\}\&City=\{city\}\&PostalCode=\{postalCode\}\&Country=\{country\}\&District=\{district\}\&BirthDate=\{birthDate\}\&Email=\{email\}\&PhoneNr=\{phoneNr\}\&Biography=\{biography\}\&VotingRight=\{vo tingRight\}\&VotingWeight=\{votingWeight\}\&PinId=\{pinId\}\&FingerprinterData=\{ fingerprinterData\}\&KeypadLoginCode=\{ keypadLoginCode \}

| Name | Description | Type |
| :--: | :--: | :--: |
| DelegateId | The Id of the delegate | int |
| Name | The name of the delegate | string |
| FirstName | The first name of the delegate | string |
| Title | The title of the delegate [Optional parameter] | string |
| MiddleName | MiddleName of the delegate [Optional parameter] | string |
| BadgeNr | The badge number [Optional parameter] | string |
| UserName | The username for the delegate [Optional parameter] | string |
| Password | The password for the delegate [Optional parameter] | string |
| Street | The street for the delegate [Optional parameter] | string |
| StreetNr | The street number for the delegate [Optional parameter] | string |
| City | The city for the delegate [Optional parameter] | string |
| PostalCode | The postal code for the delegate [Optional parameter] | string |

| Country | The country for the delegate [Optional parameter] | string |
| :--: | :--: | :--: |
| District | The district for the delegate [Optional parameter] | string |
| BirthDate | The delegate's birthday [Optional parameter] | string |
| Email | The delegate's email address [Optional parameter] | string |
| PhoneNr | The delegate's phone number [Optional parameter] | string |
| Biography | Biography of the delegate [Optional parameter] | string |
| VotingRight | Does the delegate have the right to vote? [Optional parameter] | Bool |
| VotingWeight | The voting weight to apply for this delegate [Optional parameter] | Int |
| PinId | PinId to login for voting Must be 4 number only (0-9) [Optional parameter] | Int |
| FingerprinterData | Fingerprint data to open the Unicos IDC screen [Optional parameter] <br> Fingerprint Id <br> $1=$ Right Thumb <br> $2=$ Right Index <br> $6=$ Left Thumb <br> $7=$ Left Index | string |
| KeypadLoginCode | Code to login into the Unicos FMM (IDC) [Optional parameter] | int |
| BackupBadge | The backup badge number [Optional parameter] | string |
| AuthorityBadge | The authority badge number [Optional parameter] | string |

# Example: 

http://localhost:8890/CoCon/Delegate/EditDelegate/?DelegateId=505\&Name=Manoj\&FirstName=Patel\&Title=M r.\&PinId=9876

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

## Update Event :

\{"DelegateUpdated":\{"DelegateId":534,"Name":"Manoj","MiddleName":"Subhashbhai","FirstName":"Patel","Title" :"Mr.","BadgeNr":"","UserName":"","Password":"","Street":"","StreetNr":"0","PostalCode":"","City":"","Country":""," BirthDate":"","District":"","Email":"","PhoneNr":"","VotingRight":true,"VotingWeight":1,"PinId":"9876","Fingerprinte rData":"","KeypadLoginCode":"1234"\}\}

Additional information for Fingerprint related data:
Add a fingerprint data :
Example:
http://localhost:8890/CoCon/Delegate/EditDelegate/?DelegateId=1\&Name=Test\&FingerprinterData =1:Finger1,2:Finger2,6:Finger6,7:Finger7

Return:
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
Update Event:
\{"DelegateAdded":\{"DelegateId":537,"Name":"Test","MiddleName":null,"FirstName":"Ivo","Title":"Mr ","BadgeNr":"249937DE","UserName":"","Password":null,"Street":"","StreetNr":"0","PostalCode":""," City":"","Country":"","BirthDate":"","District":"","Email":"","PhoneNr":"","VotingRight":true,"VotingWei

ght":1,"PinId":"","FingerprinterData":["1:Finger1","2:Finger2","6:Finger6","7:Finger7"],"KeypadLogin Code":"","BackupBadge":""]\}

Delete fingerprintdata : 1 and 2 fingerprint data keep and 6 and 7 fingerprint data removed.
Example:
http://localhost:8890/CoCon/Delegate/EditDelegate/?DelegateId=1\&Name=Test\&FingerprinterData $=1$ :Finger1,2:Finger2

Return:
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
Update Event:
\{"DelegateUpdated":\{"DelegateId":537,"Name":"Test","MiddleName":null,"FirstName":"Ivo","Title":" Mr","BadgeNr":"249937DE","UserName":"","Password":null,"Street":"","StreetNr":"0","PostalCode": "","City":"","Country":"","BirthDate":"","District":"","Email":"","PhoneNr":"","VotingRight":true,"Voting Weight":1,"PinId":"","FingerprinterData":["1:Finger1","2:Finger2"],"KeypadLoginCode":"","BackupBa dge":""]\}

Update fingerprint1:
Example:
http://localhost:8890/CoCon/Delegate/EditDelegate/?DelegateId=1\&Name=Test\&FingerprinterData $=1$ :FingerTest1,2:Finger2,6:Finger6

Return:
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
Update Event:
\{"DelegateUpdated":\{"DelegateId":537,"Name":"Test","MiddleName":null,"FirstName":"Ivo","Title":" Mr","BadgeNr":"249937DE","UserName":"","Password":null,"Street":"","StreetNr":"0","PostalCode": "","City":"","Country":"","BirthDate":"","District":"","Email":"","PhoneNr":"","VotingRight":true,"Voting Weight":1,"PinId":"","FingerprinterData":["1:FingerTest1","2:Finger2","6:Finger6"],"KeypadLoginCod e":"","BackupBadge":""]\}

It will be allowed to remove all fingerprints by
Example:
http://localhost:8890/CoCon/Delegate/EditDelegate/?DelegateId=1\&Name=TEST\&FirstName=First TEST\&FingerprinterData=

Return:
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
Update Event:

\{"DelegateUpdated":\{"DelegateId":537,"Name":"TEST","MiddleName":null,"FirstName":"FirstTEST" ,"Title":"Mr","BadgeNr":"249937DE","UserName":"","Password":null,"Street":"","StreetNr":"0","PostalCode": "","City":"","Country":"","BirthDate":"","District":"","Email":"","PhoneNr":"","VotingRight":true,"VotingWeight": 1,"PinId":"","FingerprinterData":[],"KeypadLoginCode":"","BackupBadge":""\}\}

# 4.3.7.8 ImportDelegatesFromFile 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ImportDelegatesFromFile | $\square$ | $\square$ |

Import delegate from the file. (Note: it should be work wit the same version of the installer).

## Structure:

http://localhost:8890/CoCon/Delegate/ImportDelegatesFromFile/?FilePath=[filePath]

## Example:

http://localhost:8890/CoCon/Delegate/ImportDelegatesFromFile/?FilePath=C:\Users\MP\Desktop\ERS\3.1-05-15-38-fullname.xml

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.7.9 GetAuthorityOverview 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAuthorityOverview | $\square$ | $\square$ |

API call to get overview of delegate authority. It details the delegates whose authority is passed to another delegate. When no meeting is active, this call will return all authority data.

## Structure:

http://localhost:8890/CoCon/Delegate/GetAuthorityOverview

## Example:

http://localhost:8890/CoCon/Delegate/GetAuthorityOverview

## Return:

$0 \rightarrow$ operation success; $-1 \rightarrow$ exception

# 4.3.8 Interactive 

This section describes commands that are only applicable for the Televic uniCOS (PlixUs) hardware.

### 4.3.8.1 SetDelegateScreen

Set the delegate screen on the IDCs as well as screen options.
Only applicable for uniCOS (PlixUs).
Parameters applicable for ALL screens:

| Name | Description | Type |
| :--: | :--: | :--: |
| IsLocked | Lock state of IDC | Bool |
| IsGoTo | bool indicating whether the IDC should change <br> to the specified screen | Bool |
| IsShow | Show or hide the screen | Bool |

Note that the specific screens described below might have more additional parameters

### 4.3.8.1.1 Home

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Home | $\square$ | $\square$ |

## Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Home/?IsLocked=\{bool\}\&IsGoTo=\{bool\}\&IsShow=\{ bool\}

## Updated Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Home/?SeatId=\{seatId\}\&IsLocked=\{bool\}\&IsGoTo=\{ bool\}\&IsShow=\{bool\}

## Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Home/?IsLocked=True\&IsGoTo=True\&IsShow=True

## Updated Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Home/?SeatId=1\&IsLocked=True\&IsGoTo=True\&Is Show=True

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.8.1.2 Discussion

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| Discussion | $\square$ | $\square$ |

## Additional parameters

| Name | Description | Type |
| :-- | :-- | :-- |

|  Video | Set video viewing mode
0 : disabled; no video shown
1: normal
2: full screen | int  |
| --- | --- | --- |
|  VideoStream | Set video stream for Multimedia units.
(VideoStream: 1 to 6 number) | Int  |
|  Seatld | Seatld which user want to control
(Optional) | int  |

# Structure

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Discussion/?lsLocked=\{bool\&lsGoTo=\{bool\&lsSho w=\{bool\} \&Video=\{int\}\&VideoStream=\{videoStream\}

## Updated Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Discussion/?SeatId=\{seatld\&lsLocked=\{bool\&lsGo To=\{bool\&lsShow=\{bool\&Video=\{int\}\&VideoStream=\{videoStream\}

## Example 1:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Discussion/?lsLocked=True\&lsGoTo=True\&lsShow =True\&Video=1

## Example 2:

http://192.168.8.230:8890/CoCon/Interactive/SetDelegateScreen/Discussion/?lsLocked=True\&lsGoTo=True\&ls Show=True\&Video=1\&VideoStream=2

## Updated Example:

http://192.168.8.230:8890/CoCon/Interactive/SetDelegateScreen/Discussion/?SeatId=1\&lsLocked=True\&lsGoT o=True\&lsShow=True\&Video=1\&VideoStream=2

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.8.1.3 Agenda

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Agenda | $\square$ | $\square$  |

## Additional parameters

|  Name | Description | Type  |
| --- | --- | --- |
|  Select | Select and show active agenda item | bool  |
|  Seatld | Seatld which user want to control
(Optional) | int  |

## Structure

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Agenda/?lsLocked=\{bool\&lsGoTo=\{bool\&lsShow= \{bool\} \&Select=\{bool\}}$

## Updated Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Agenda/?SeatId=\{seatld\&lsLocked=\{bool\&lsGoTo $=\{$ bool $\} \&$ lsShow $=\{$ bool $\} \&$ Select $=\{$ bool $\}$

## Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Agenda/?lsLocked=True\&lsGoTo=True\&lsShow=True\&Select=True

# Updated Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Agenda/?SeatId=1\&IsLocked=True\&IsGoTo=True\&l sShow=True\&Select=True

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.8.1.4 Delegates

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Delegates | $\square$ | $\square$  |

## Structure

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Delegates/?IsLocked=(bool)\&IsGoTo=(bool)\&IsSho w=(bool)

## Updated Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Delegates/?SeatId=(seatld)\&IsLocked=(bool)\&IsGo To=(bool)\&IsShow=(bool)

## Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Delegates/?IsLocked=True\&IsGoTo=True\&IsShow= True

## Updated Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Delegates/?SeatId=1\&IsLocked=True\&IsGoTo=True \&IsShow=True

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fails (not valid value) $-1 \rightarrow$ exception

### 4.3.8.1.5 Voting

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Voting | $\square$ | $\square$  |

## Additional parameters

|  Name | Description | Type  |
| --- | --- | --- |
|  Res | Show voting results | bool  |
|  Graph | Show voting graph | bool  |
|  Seatld | Seatld which user want to control
(Optional) | int  |

## Structure

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Voting/?IsLocked=(bool)\&IsGoTo=(bool)\&IsShow=( bool)\&Res=(bool)\&Graph=(bool)

# Updated Structure: 

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Voting/?SeatId=\{seatId\&IsLocked=\{bool\}\&IsGoTo=\{bool\}\&IsShow=\{bool\}\&Res=\{bool\}\&Graph=\{bool\}

## Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Voting/?IsLocked=True\&IsGoTo=True\&IsShow=True\&Res=True\&Graph=True

## Updated Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Voting/?SeatId=1\&IsLocked=True\&IsGoTo=True\&Is Show=True\&Res=True\&Graph=True

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.8.1.6 Documents

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| Documents | $\square$ | $\square$ |

## Additional parameters

| Name | Description | Type |
| :--: | :--: | :--: |
| Doc | Id of the document to select | string |
| Lck | Lock the document (no selection) | bool |
| Page | Page number to be scrolled to | int |
| Docfs | Show the document fullscreen | bool |
| Seatld | Seatld which user want to control <br> (Optional) | int |

## Structure

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Documents/?IsLocked=\{bool\}\&IsGoTo=\{bool\}\&IsSh ow=\{bool\}\&Doc=\{string\}\&Lck=\{bool\}\&Page=\{int\}\&Docfs=\{bool\}

## Updated Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Documents/?SeatId=\{seatId\&IsLocked=\{bool\}\&IsG oTo=\{bool\}\&IsShow=\{bool\}\&Doc=\{string\}\&Lck=\{bool\}\&Page=\{int\}\&Docfs=\{bool\}

## Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Documents/?IsLocked=True\&IsGoTo=True\&IsShow =True\&Doc=Cocon-manual\&Lck=True\&Page=1\&Docfs=True

## Updated Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Documents/?SeatId=1\&IsLocked=True\&IsGoTo=True\&IsShow=True\&Doc=Cocon-manual\&Lck=True\&Page=1\&Docfs=True

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.8.1.7 Messages

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Messages | $\square$ | $\square$  |

## Structure

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Messages/?lsLocked=(bool)\&lsGoTo=(bool)\&lsSho w=(bool)

## Updated Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Messages/?SeatId=(seatld)\&lsLocked=(bool)\&lsGo To=(bool)\&lsShow=(bool)

## Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Messages/?lsLocked=True\&lsGoTo=True\&lsShow= True

## Updated Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Messages/?SeatId=1\&lsLocked=True\&lsGoTo=True \&lsShow=True

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.8.1.8 Services

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Services | $\square$ | $\square$  |

## Structure

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Services/?lsLocked=(bool)\&lsGoTo=(bool)\&lsShow $=$ (bool)

## Updated Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Services/?SeatId=(seatld)\&lsLocked=(bool)\&lsGoT o=(bool)\&lsShow=(bool)

## Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Services/?lsLocked=True\&lsGoTo=True\&lsShow=T rue

## Updated Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Services/?SeatId=1\&lsLocked=True\&lsGoTo=True \&lsShow=True

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.8.1.9 Configuration

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Configuration | ☑ | ☐  |

Structure

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Configuration/?lsLocked={bool}&lsGoTo={bool}&lsShow={bool}

Updated Structure:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Configuration/?SeatId={seatId}&lsLocked={bool}&lsGoTo={bool}&lsShow={bool}

Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Configuration/?lsLocked=True&lsGoTo=True&lsShow=True

Updated Example:

http://localhost:8890/CoCon/Interactive/SetDelegateScreen/Configuration/?SeatId=1&lsLocked=True&lsGoTo=True&lsShow=True

Return:

0 → operation success; 1 → Operation fail (not valid value) -1 → exception

# 4.3.8.2 RemoveScreenLock

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  RemoveScreenLock | ☑ | ☐  |

Remove the screen lock on the Multimedia Unit. Only applicable for uniCOS (PlixUs)

**Structure:** http://localhost:8890/CoCon/Screen/RemoveScreenLock

**Return:** {RemoveScreenLock : {"success" : "true"}}

# 4.3.8.3 SetCustomButtonOnSeat

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetCustomButtonOnSeat | ☑ | ☐  |

Configure a custom button on a seat

**Structure:** http://localhost:8890/CoCon/Interactive/SetCustomButtonOnSeat?SeatId={int}&ButtonId={int}&Text={string}&FgColor={string}&BgColor={string}&Show={bool}&EnableDown={bool}&EnableUp={bool}

**Example:** http://localhost:8890/CoCon/Interactive/SetCustomButtonOnSeat?SeatId=5&ButtonId=1&Text=RequestFloor&FgColor=black&BgColor=white&Show=True&EnableDown=True&EnableUp=False

**Return:** {"SetCustomButtonOnSeat": {"success": "true"}}

# 4.3.8.4 SetCustomButtonOnRoom

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetCustomButtonOnRoom | ☑ | ☐  |

Configure a custom button on a seat

**Structure:** http://localhost:8890/CoCon/Interactive/SetCustomButtonOnRoom?ButtonId={int}&Text={string}&FgColor={string}&BgColor={string&Show={bool}&EnableDown={bool}&EnableUp={bool}

**Example:** http://localhost:8890/CoCon/Interactive/SetCustomButtonOnRoom?ButtonId=1&Text=RequestFloor&FgColor=black&BgColor=white&Show=True&EnableDown=True&EnableUp=False

**Return:** {"SetCustomButtonOnRoom": {"success": "true"}

# 4.3.8.5 SetCustomLabelOnSeat

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetCustomLabelOnSeat | $\square$ | $\square$  |

Configure a custom button on a seat Structure http://localhost:8890/CoCon/Interactive/SetCustomLabelOnSeat?SeatId=(int) \&LabelId=(int)\&Text=(string)\&FgC olor=(string)\&BgColor=(string)\&Show=(bool)

## Example:

http://localhost:8890/CoCon/Interactive/SetCustomLabelOnSeat?SeatId=5\&LabelId=1\&Text=Floor Requested\&FgColor=black\&BgColor=white\&Show=True

## Return:

$\{"$ SetCustomLabelOnSeat": \{"success": "true"\}

### 4.3.8.6 SetCustomLabelOnRoom

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetCustomLabelOnRoom | $\square$ | $\square$  |

Configure a custom button on a seat Structure http://localhost:8890/CoCon/Interactive/SetCustomLabelOnRoom?LabelId=(int)\&Text=(string)\&FgColor=(string) \&BgColor=(string)\&Show=(bool)

## Example:

http://localhost:8890/CoCon/Interactive/SetCustomLabelOnRoom?LabelId=1\&Text=Floor Requested\&FgColor=black\&BgColor=white\&Show=True

## Return:

$\{"$ SetCustomLabelOnRoom": \{"success": "true"\}

### 4.3.8.7 SetCustomScreenOnSeat

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetCustomScreenOnSeat | $\square$ | $\square$  |

Configure a custom screen on a seat (see specific notes in API call SetCustomScreenOnRoom) Structure http://localhost:8890/CoCon/Interactive/SetCustomScreenOnSeat?SeatId=(int)\&Lock=(bool)\&Go=(bool)\&Show= (bool)\&CustomScreenId=(int)\&Title=(string)\&Content=(String)\&fullscreen=(bool)

## Example (also see extended example and notes in SetCustomScreenOnRoom):

http://192.168.8.120:8890/CoCon/Interactive/SetCustomScreenOnSeat?SeatId=2\&Lock=False\&Go=False\&Sho w=True\&CustomScreenId=1\&Title=Custom Tab\&Content=<HTML><HEAD><TITLE>UNIT1</TITLE></HEAD><BODY><H1>Custom screen</H1><P>This is a custom screen.</P></BODY></HTML>

## Return:

$\{"$ SetCustomScreenOnSeat": \{"success": "true"\}

# 4.3.8.8 SetCustomScreenOnRoom 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| SetCustomScreenOnRoom | $\square$ | $\square$ |

Configure a custom button on a seat

## Structure

http://localhost:8890/CoCon/Interactive/SetCustomScreenOnRoom?Lock=(bool)\&Go=(bool)\&Show=(bool)\&Cus tomScreenId=(int)\&Title=(string)\&Content=(String)\&fullscreen=(bool)

## Example:

http://localhost:8890/CoCon/Interactive/SetCustomScreenOnRoom?Lock=False\&Go=False\&Show=True\&Custo mScreenId=1\&Title=Custom
Tab\&Content=<HTML><HEAD><TITLE>UNIT1</TITLE></HEAD><BODY><H1>Custom screen</H1><P>This is a custom screen. $</$ P $></$ BODY $></$ HTML $>$

Extended example with styling, embedded image and javascript:
http://localhost:8890/CoCon/Interactive/SetCustomScreenOnRoom?Lock=False\&Go=False\&Show=True\&Custo mScreenId=1\&Title=Custom\&Content=< iframe style="height:449px;"
srcdoc="<html><head><style>h1{color:red;}</style></head><body><h1 id='myheader'>Header h1</h1><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D\%2BPAAAAGXRFW HRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJIYWR5cclIPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAA Dw/eHBhY2tldCBiZWdpbj0i77u/liBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8\%2BIDx4OnhtcG1ldGEg eG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JIIFhNUCBDb3JIIDUuNi1jMTQ1IDc5LjE2M zQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8v d3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9Ii IgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL2 5zLmFkb2JILmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzE uMC9zVHIwZS9SZXNvdXJjZVJIZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMT kgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUIEPSJ4bXAuaWlkOjg2NkYzNDFGMzBGNTExRTk5REU0QzMy MkU4Q0VDNjQ4IiB4bXBNTTpEb2N1bWVudEIEPSJ4bXAuZGlkOjg2NkYzNDIwMzBGNTExRTk5REU0QzMyM kU4Q0VDNjQ4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNISUQ9InhtcC5paWQ6ODY2RjM 0MUQzMEY1MTFFOTIERTRDMzIyRThDRUM2NDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODY2R jM0MUUzMEY1MTFFOTIERTRDMzIyRThDRUM2NDgiLz4gPC9yZGY6RGVzY3JpcHRpb24\%2BIDwvcmRmOl JERj4gPC94OnhtcG1ldGE\%2BIDw/eHBhY2tldCBlbmQ9InIiPz4zwT8RAAAABIBMVEUAAP8AAAB7Yr8\%2BAA AADkIEQVR42mJgoCcACDAAAG4AARwPxJAAAAAASUVORK5CYII=!><script type='text/javascript'>document.body.innerHTML \%2B='<p>This text was added in JavaScript!</p>';</script></body></html>"></iframe>

## Notes:

- The complete URL (including base64 string) needs to be encoded. You can use https://www.urlencoder.org/ to do so. The " + " character is e.g. converted to "\%2B"
- An iframe is not required, unless you want to use CSS for styling. Alternatively you can configure everything through the style attribute
- The height of 449px corresponds to unicos 7 " unit, use 649px for unicos 10 " unit
- Javascript is possible, but will be (re-)activated when entering in the specific tab
- Don't use hyperlinks
- Not possible to use e.g. remote image sources
- A special use-case could be to navigate to intranet page which is hosted on webserver which is connected with the Plixus NEXT LAN interface. This will also require a DHCP server. Please be aware of limitations and ask more information regarding this use-case.


## Return:

\{"SetCustomScreenOnRoom": \{"success": "true"\}\}

# 4.3.8.9 GetServiceList

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetServiceList | $\square$ | $\square$  |

This api will help user to get all service list which is present on Cocon Database. Structure: http://localhost:8890/CoCon/Interactive/GetServiceList Example: http://localhost:8890/CoCon/Interactive/GetServiceList Return: {"ServiceList":{"Services":[{"Id":1,"Name":"Tea"},{"Id":2,"Name":"Coffee"},{"Id":3,"Name":"Cake"}]}}

### 4.3.8.10 GetServiceListbyMeetingId

This api will help user to get list of service based on meeting id.

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetServiceListbyMeetingId | $\square$ | $\square$  |

## Structure:

http://localhost:8890/CoCon/Interactive/GetServiceListbyMeetingId/?MeetingId=[int] Example: http://localhost:8890/CoCon/Interactive/GetServiceListbyMeetingId/?MeetingId=17 Return: {"ServiceList":{"Services":[{"Id":1,"Name":"Tea"},{"Id":2,"Name":"Coffee"}]}}

### 4.3.8.11 SetServiceRequestState

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetServiceRequestState | $\square$ | $\square$  |

Configure Service Request State Structure: http://localhost:8890/CoCon/Interactive/SetServiceRequestState?SeatId=[int] \&ServiceId=[int] \&ServiceState=[int ] Example: http://localhost:8890/CoCon/Interactive/SetServiceRequestState?SeatId=2\&ServiceId=1\&ServiceState=0 Return: Update Event: {"ServiceRequestEvent":{"SeatId":2,"ServiceId":1,"ServiceState":0}}

### 4.3.8.12 GetServiceRequestStates

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetServiceRequestStates | $\square$ | $\square$ |

This api will help user to get list of service based on meeting id.
Structure:
http://localhost:8890/CoCon/Interactive/GetServiceRequestStates

# Example: 

http://localhost:8890/CoCon/Interactive/GetServiceRequestStates

## Return:

\{"ServiceRequestEvent":\{"Seats":[\{"SeatId":2,"Services":[\{"ServiceId":1,"ServiceState":1\},{"ServiceId":2,"Service State":1\}]]\}\}

### 4.3.8.13 DisableDelegateScreen

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| DisableDelegateScreen | $\square$ | $\square$ |

This API allows to disable uniCOS delegate screens
Notes:

- It doesn't apply to uniBOX units
- It only applies to the uniCOS F/MM7 (71.98.2002), F/MM10 (71.98.2001) and T/MM10 (71.98.2003). Or on the customized units based on these uniCOS unit generation


## Structure:

http://localhost:8890/CoCon/Interactive/DisableDelegateScreen/?Disable=\{isDisabled\}

## Example:

http://localhost:8890/CoCon/Interactive/DisableDelegateScreen/?Disable=false

## Return:

0 succeed
$-1 \quad$ exception

### 4.3.8.14 ResetScreen

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ResetScreen | $\square$ | $\square$ |

This API allows to reset the software of unicos/unibox units. The behavior is identical to "reset screen" functionality which is offered through the Cocon Operator application. Important to mention that a meeting pause/resume or resend meeting data is required to have the unit back in correct meeting state.

## Structure:

http://localhost:8890/CoCon/Interactive/ResetScreen/?SeatId=\{seatNumber\}

## Example:

http://localhost:8890/CoCon/Interactive/ResetScreen/?SeatId=2

## Return:

|  0 | succeed  |
| --- | --- |
|  -1 | exception  |
|  1 | seat not found  |

Note: HTTP status code 503 in case central unit is not connected.

# 4.3.9 Audio 

### 4.3.9.1 GetCurrentAudioSoftwareConfiguration

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetCurrentAudioSoftwareConfiguration | $\square$ | $\square$ |

## Structure:

http://localhost:8890/CoCon/Audio/GetCurrentAudioSoftwareConfiguration

## Example:

http://localhost:8890/CoCon/Audio/GetCurrentAudioSoftwareConfiguration

## Return:

\{"GetCurrentAudioSoftwareConfiguration":\{"AudioSoftwareConfiguration":\{"Id":3,"Name":"External equalizer"\}\}

### 4.3.9.2 GetCurrentAudioSoftwareConfigurationInDetails

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetCurrentAudioSoftwareConfigurationInDetail <br> s | $\square$ | $\square$ |

## Structure:

http://localhost:8890/CoCon/Audio/GetCurrentAudioSoftwareConfigurationInDetails

## Example:

http://localhost:8890/CoCon/Audio/GetCurrentAudioSoftwareConfigurationInDetails

Note: This call returns the details of the current SAVED audio configuration. If changes were applied one will only observe these through this call after saving the configuration.

## Return:

\{"GetCurrentAudioSoftwareConfigurationInDetails":\{"AudioSoftwareConfiguration":\{"Id":1,"Name":"Normal routing","MatrixNodes":\{"InputGroupName":"Floor IN","OutputGroupName":"Floor OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"AUX IN","OutputGroupName":"Floor OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"Dante IN","OutputGroupName":"Floor OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"Floor IN","OutputGroupName":"AUX OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"AUX IN","OutputGroupName":"AUX OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"Dante IN","OutputGroupName":"AUX OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"Floor IN","OutputGroupName":"Dante OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"AUX IN","OutputGroupName":"Dante OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"Dante IN","OutputGroupName":"Dante OUT","MixValue":0,"Status":true,"BackupStatus":false\},\{"InputGroupName":"Lang1 IN","OutputGroupName":"Lang1

OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor
IN","OutputGroupName":"Lang1
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX
IN","OutputGroupName":"Lang1
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante
IN","OutputGroupName":"Lang1
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang2
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11
IN","OutputGroupName":"Lang1
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2
IN","OutputGroupName":"Lang2
OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor
IN","OutputGroupName":"Lang2
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX
IN","OutputGroupName":"Lang2
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante
IN","OutputGroupName":"Lang2
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11
IN","OutputGroupName":"Lang2
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3
IN","OutputGroupName":"Lang3
OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor
IN","OutputGroupName":"Lang3
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX
IN","OutputGroupName":"Lang3

OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante IN","OutputGroupName":"Lang3 OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11 IN","OutputGroupName":"Lang3 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4 IN","OutputGroupName":"Lang4 OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor IN","OutputGroupName":"Lang4 OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX IN","OutputGroupName":"Lang4 OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante IN","OutputGroupName":"Lang4 OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11 IN","OutputGroupName":"Lang4 OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5 IN","OutputGroupName":"Lang5 OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor IN","OutputGroupName":"Lang5 OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX IN","OutputGroupName":"Lang5 OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante IN","OutputGroupName":"Lang5 OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1 IN","OutputGroupName":"Lang5

OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11 IN","OutputGroupName":"Lang5
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6 IN","OutputGroupName":"Lang6
OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor IN","OutputGroupName":"Lang6
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX
IN","OutputGroupName":"Lang6
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante
IN","OutputGroupName":"Lang6
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11
IN","OutputGroupName":"Lang6
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7
IN","OutputGroupName":"Lang7
OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor
IN","OutputGroupName":"Lang7
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX
IN","OutputGroupName":"Lang7
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante
IN","OutputGroupName":"Lang7
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1
IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2
IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3
IN","OutputGroupName":"Lang7

OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4 IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5 IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6 IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8 IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9 IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10 IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11 IN","OutputGroupName":"Lang7
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8 IN","OutputGroupName":"Lang8
OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor IN","OutputGroupName":"Lang8
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX IN","OutputGroupName":"Lang8
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante IN","OutputGroupName":"Lang8
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11 IN","OutputGroupName":"Lang8
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9 IN","OutputGroupName":"Lang9
OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor IN","OutputGroupName":"Lang9
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX
IN","OutputGroupName":"Lang9
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante
IN","OutputGroupName":"Lang9
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1
IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2
IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3
IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4
IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5
IN","OutputGroupName":"Lang9

OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6 IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7 IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8 IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10 IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11 IN","OutputGroupName":"Lang9
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang10 IN","OutputGroupName":"Lang10
OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor IN","OutputGroupName":"Lang10
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX
IN","OutputGroupName":"Lang10
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante IN","OutputGroupName":"Lang10
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1 IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2 IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3 IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4 IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5 IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6 IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7 IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang8 IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang9
IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11
IN","OutputGroupName":"Lang10
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang11
IN","OutputGroupName":"Lang11
OUT","MixValue":0,"Status":true,"BackupStatus":false),{"InputGroupName":"Floor
IN","OutputGroupName":"Lang11
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"AUX
IN","OutputGroupName":"Lang11
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Dante
IN","OutputGroupName":"Lang11
OUT","MixValue":0,"Status":false,"BackupStatus":true),{"InputGroupName":"Lang1
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang2
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang3
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang4
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang5
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang6
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false),{"InputGroupName":"Lang7
IN","OutputGroupName":"Lang11

```
OUT","MixValue":33,"Status":false,"BackupStatus":false},{"InputGroupName":"Lang8
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false},{"InputGroupName":"Lang9
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false},{"InputGroupName":"Lang10
IN","OutputGroupName":"Lang11
OUT","MixValue":33,"Status":false,"BackupStatus":false},{"AudioGroups":[{"Id":0,"Name":"Floor
IN","Type":"Input"},{"Id":1,"Name":"AUX IN","Type":"Input"},{"Id":2,"Name":"Dante
IN","Type":"Input"},{"Id":3,"Name":"Lang1 IN","Type":"Input"},{"Id":4,"Name":"Lang2
IN","Type":"Input"},{"Id":5,"Name":"Lang3 IN","Type":"Input"},{"Id":6,"Name":"Lang4
IN","Type":"Input"},{"Id":7,"Name":"Lang5 IN","Type":"Input"},{"Id":8,"Name":"Lang6
IN","Type":"Input"},{"Id":9,"Name":"Lang7 IN","Type":"Input"},{"Id":10,"Name":"Lang8
IN","Type":"Input"},{"Id":11,"Name":"Lang9 IN","Type":"Input"},{"Id":12,"Name":"Lang10
IN","Type":"Input"},{"Id":13,"Name":"Lang11 IN","Type":"Input"},{"Id":1,"Name":"Floor
OUT","Type":"Output"},{"Id":2,"Name":"AUX OUT","Type":"Output"},{"Id":3,"Name":"Dante
OUT","Type":"Output"},{"Id":4,"Name":"Lang1 OUT","Type":"Output"},{"Id":5,"Name":"Lang2
OUT","Type":"Output"},{"Id":6,"Name":"Lang3 OUT","Type":"Output"},{"Id":7,"Name":"Lang4
OUT","Type":"Output"},{"Id":8,"Name":"Lang5 OUT","Type":"Output"},{"Id":9,"Name":"Lang6
OUT","Type":"Output"},{"Id":10,"Name":"Lang7 OUT","Type":"Output"},{"Id":11,"Name":"Lang8
OUT","Type":"Output"},{"Id":12,"Name":"Lang9 OUT","Type":"Output"},{"Id":13,"Name":"Lang10
OUT","Type":"Output"},{"Id":14,"Name":"Lang11 OUT","Type":"Output"}]}}}
```


# 4.3.9.3 GetAudioSoftwareConfigurations 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAudioSoftwareConfigurations | $\square$ | $\square$ |

## Structure:

http://localhost:8890/CoCon/Audio/GetAudioSoftwareConfigurations

## Example:

http://localhost:8890/CoCon/Audio/GetAudioSoftwareConfigurations

## Return:

\{"GetAudioSoftwareConfigurations":\{"AudioSoftwareConfigurations":\{"Id":1,"Name":"Normal
routing","Description":"Incoming audio from microphone ,auxiliary inputs $1-2 \& 3$ and dante input channel 1 is routed by default to the unit speakers ,auxiliary outputs $1-2 \& 3$ and dante output channel 1.","Predefined":true,"State":"New"},{"Id":2,"Name":"Distance conferencing","Description":"Incoming audio from microphone ,auxiliary inputs $1-2 \& 3$ and dante input channel 1 is routed by default to the unit speakers. Incoming audio from microphone is routed by default to the auxiliary outputs $1-2 \& 3$ and dante output channel 1.","Predefined":true,"State":"New"},{"Id":3,"Name":"External equalizer","Description":"Incoming audio from auxiliary inputs $1-2 \& 3$ and dante input channel 1 is routed by default to the unit speakers. Incoming audio from microphone is routed by default to the auxiliary outputs $1-2 \& 3$ and dante output channel 1.","Predefined":true,"State":"New"},{"Id":4,"Name":"New Preset","Description":"This is a new preset","Predefined":false,"State":"Running"}]}\}

### 4.3.9.4 GetAudioGroupsInCurrentConfiguration

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAudioGroupsInCurrentConfiguration | $\square$ | $\square$ |

This command will reply with all groups from running (Active) Preset.

## Structure:

http://localhost:8890/CoCon/Audio/GetAudioGroupsInCurrentConfiguration

# Example: 

http://localhost:8890/CoCon/Audio/GetAudioGroupsInCurrentConfiguration

## Return:

\{"GetAudioGroupsInCurrentConfiguration":\{"AudioGroups":\{"Id":0,"Name":"Floor IN","Type":"Input"},{"Id":1,"Name":"AUX IN","Type":"Input"},{"Id":2,"Name":"Dante IN","Type":"Input"},{"Id":5,"Name":"Lang1 IN","Type":"Input"},{"Id":4,"Name":"Lang2 IN","Type":"Input"},{"Id":5,"Name":"Lang3 IN","Type":"Input"},{"Id":6,"Name":"Lang4 IN","Type":"Input"},{"Id":7,"Name":"Lang5 IN","Type":"Input"},{"Id":8,"Name":"Lang6 IN","Type":"Input"},{"Id":9,"Name":"Lang7 IN","Type":"Input"},{"Id":10,"Name":"Lang8 IN","Type":"Input"},{"Id":11,"Name":"Lang9 IN","Type":"Input"},{"Id":12,"Name":"Lang10 IN","Type":"Input"},{"Id":13,"Name":"Lang11 IN","Type":"Input"},{"Id":1,"Name":"Floor OUT","Type":"Output"},{"Id":2,"Name":"AUX OUT","Type":"Output"},{"Id":3,"Name":"Dante OUT","Type":"Output"},{"Id":4,"Name":"Lang1 OUT","Type":"Output"},{"Id":5,"Name":"Lang2 OUT","Type":"Output"},{"Id":6,"Name":"Lang3 OUT","Type":"Output"},{"Id":7,"Name":"Lang4 OUT","Type":"Output"},{"Id":8,"Name":"Lang5 OUT","Type":"Output"},{"Id":9,"Name":"Lang6 OUT","Type":"Output"},{"Id":10,"Name":"Lang7 OUT","Type":"Output"},{"Id":11,"Name":"Lang8 OUT","Type":"Output"},{"Id":12,"Name":"Lang9 OUT","Type":"Output"},{"Id":13,"Name":"Lang10 OUT","Type":"Output"},{"Id":14,"Name":"Lang11 OUT","Type":"Output"}]}\}

### 4.3.9.5 SetAudioSoftwareConfigurationById

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| SetAudioSoftwareConfigurationById | $\square$ | $\square$ |

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | The id of the audio software configuration | int |

## Structure:

http://localhost:8890/CoCon/Audio/SetAudioSoftwareConfigurationById/?Id=(id)

## Example:

http://localhost:8890/CoCon/Audio/SetAudioSoftwareConfigurationById/?Id=1

## Return:

\{"SetAudioSoftwareConfigurationById":\{"AudioSoftwareConfiguration":\{"Description":"Incoming audio from microphone, auxiliary inputs 1, 2 \& 3 and Dante input channel 1 is routed by default to the unit speakers, auxiliary outputs 1, 2 \& 3 and Dante output channel 1.","Id":1,"Name":"Normal routing","Predefined":true,"State":"Active"\}\}

### 4.3.9.6 SetAudioSoftwareConfigurationByName

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetAudioSoftwareConfigurationByName | $\square$ | $\square$ |

Name: SetAudioSoftwareConfigurationByName
Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Name | The Name of the audio software configuration | string |

# Structure: 

http://localhost:8890/CoCon/Audio/SetAudioSoftwareConfigurationByName/?Name=\{name\}

## Example:

http://localhost:8890/CoCon/Audio/SetAudioSoftwareConfigurationByName/?Name=Normal routing 123

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.9.7 ChangeMatrixNodeStatus

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| ChangeMatrixNodeStatus | $\square$ | $\square$ |

This command will apply on the current running (active) preset only.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| InputGroupName | The name of routing input group | string |
| OutputGroupName | The name of routing output group | string |
| Status | The matrix node status(enable or not) <br> True/False | bool |
| BackupStatus | The matrix node backup status(enable or not) <br> True/False | bool |
| MixValue | The mix value of the group(-100 0) | int |

## Structure:

http://localhost:8890/CoCon/Audio/ChangeMatrixNodeStatus/?InputGroupName=\{inputGroupName\}\&OutputGro upName=\{outputGroupName\}\&Status=\{status\}\&BackupStatus=\{backupStatus\}\&MixValue=\{mixValue\}

## Example:

http://localhost:8890/CoCon/Audio/ChangeMatrixNodeStatus/?InputGroupName=Floor In\&OutputGroupName=Floor Out\&Status=False\&BackupStatus=False\&MixValue=-20

## Return:

\{"ChangeMatrixNodeStatus":\{"MatrixNode":\{"InputGroupName":"Floor In","OutputGroupName":"Floor out","MixValue":-20,"Status":false,"BackupStatus":false,"Id":201\}\}\}

### 4.3.9.8 GetMatrixNodeStatus

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetMatrixNodeStatus | $\square$ | $\square$ |

Get the status of a specific node in running (Active) audio preset. The input group and output group are required.

|  Name | Description | Type  |
| --- | --- | --- |
|  InputGroupName | The name of routing input group | String  |
|  OutputGroupName | The name of routing output group | string  |

# Structure: 

http://localhost:8890/CoCon/Audio/GetMatrixNodeStatus/?InputGroupName=(inputGroupName)\&OutputGroupN ame $=$ (inputGroupName)

## Example:

http://localhost:8890/CoCon/Audio/GetMatrixNodeStatus/?InputGroupName=Floor In\&OutputGroupName=Floor Out

## Return:

\{"GetMatrixNodeStatus":\{"MatrixNode":\{"InputGroupName":"Floor In","OutputGroupName":"Floor out","MixValue":-20,"Status":false,"BackupStatus":true,"Id":201\}\}

### 4.3.9.9 SaveAudioSoftwareConfiguration

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SaveAudioSoftwareConfiguration | $\square$ | $\square$ |

If the " name " corresponding configuration not exists in the database, it will create a new configuration and If the " name " is exists in the database then save it.
Note: CoCon will ignore the text case for the preset name.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Name | Name of the configuration | string |
| Description | Description of the configuration | string |

## Structure:

http://localhost:8890/CoCon/Audio/SaveAudioSoftwareConfiguration/?Name=(name)\&Description=(description)

## Example:

http://localhost:8890/CoCon/Audio/SaveAudioSoftwareConfiguration/?Name=Audio Preset Test\&Description=Audio Preset Test

## Return:

\{"SaveAudioSoftwareConfiguration":\{"AudioSoftwareConfiguration":\{"Id":16,"Name":"Audio Preset Test","Description":"Audio Preset Test","Predefined":false,"State":"New"\}\}

## Return for CoCon for Plixus Core \& Plixus Core:

Note: only the second reply contains the right data, so user have to send 2 time api call to get the updated info.

# 4.3.10 Logging

### 4.3.10.1 GetCUState

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetCUState | ☐ | ☐  |

Get the status of the Plixus engine

**Structure:** http://localhost:8890/CoCon/Logging/GetCUState

**Return:** - {"GetCUState":{"CuState":"Connected"} - {"GetCUState":{"CuState":"Disconnected"} -

### 4.3.10.2 GetUnitErrorState

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetUnitErrorState | ☐ | ☐  |

Gets the IDs of the units which are currently in error state.

**Structure:** http://localhost:8890/CoCon/Logging/GetUnitErrorState

**Return:** - {"GetUnitErrorState":{"Units":[{"UnitId":1},{"UnitId":2},{"UnitId":6},{"UnitId":7}]} -

### 4.3.11 ButtonLED_Event

### 4.3.11.1 SetButtonsEnabled

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetButtonsEnabled | ☐ | ☐  |

Set the buttons of one or more seats to be disabled or disabled. If the buttons are disabled, no button events are possible. Set the enabled to true to allow CoCon, and the API, to receive button events from the units.

The event "ButtonPressed" (see section 4.2.10.1) can only be received by the API clients after one or more of the buttons have been enabled, using the command "SetButtonsEnabled".

**Structure:** http://localhost:8890/CoCon/ButtonLED_Event/SetButtonsEnabled/?SeatNr=<SeatNr>&ButtonNr=<ButtonNr>&Enabled=<Enabled>

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| SeatNr | The number of the seat on which the buttons are enable/disabled. Use 9999 for all units | int |
| ButtonNr | The number of the button which was pressed. <br> Possible values: 1-5, depending on the possibilities of the delegate units. <br> For example: delegate units with 3 buttons only have buttons 2-3-4 | int |
| Enabled | True to enable buttons False to disable buttons | bool |

## Example:

http://localhost:8890/CoCon/ButtonLED Event/SetButtonsEnabled/?SeatNr=5\&ButtonNr=2\&Enabled=true

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value); $-1 \rightarrow$ exception

### 4.3.11.2 SetLED

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetLED | $\square$ | $\square$ |

Sets the LED of one or more seats.

## Structure:

http://localhost:8890/CoCon/ButtonLED Event/SetLED/?SeatNr=<SeatNr>\&LEDNr=<LEDNr>\&State=<State>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| SeatNr | The number of the seat on which the LEDs are set. Use 9999 for all units | int |
| LEDNr | The number of the LED which should be set. Possible values: <br> 1-5, depending on the possibilities of the delegate units. <br> For example: delegate units with 3 buttons only have buttons 2-3-4 | int |
| State | The state to which the LED should be set Values: <br> On <br> Off <br> Blinking | string |

## Example:

http://localhost:8890/CoCon/ButtonLED Event/SetLED/?SeatNr=4\&LEDNr=2\&State=Blinking

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value); $-1 \rightarrow$ exception

# 4.3.11.3 SetNextButtonEnabled

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetNextButtonEnabled | $\square$ | $\square$  |

Enables the Next button of a unit. When enabled and a button up event is triggered, an API event will be sent out. The events will remain active for each button up event until the next system reboot or until they are explicitly de-activated through this API call.

Note: This api call will work only on delegate(no chairmen) seat where unit have Next \& Prior physical buttons and configurable by Room server xml file.

## Structure:

http://localhost:8890/CoCon/ButtonLED Event/SetNextButtonEnabled/?SeatNr=(SeatNr)\&Enabled=(Enabled)

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  SeatNr | The seat number
Use 9999 for all units | int  |
|  Enabled | true, false | boolean  |

## Example:

http://localhost:8890/CoCon/ButtonLED Event/SetNextButtonEnabled/?SeatNr=7\&Enabled=true

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value); $-1 \rightarrow$ exception

### 4.3.11.4 SetPriorButtonEnabled

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetPriorButtonEnabled | $\square$ | $\square$  |

Enables the Prior button of a unit. When enabled and a button up event is triggered, an API event will be sent out. The events will remain active for each button up event until the next system reboot or until they are explicitly de-activated through this API call.

Note: This api call will work only on delegate(no chairmen) seat where unit have Next \& Prior physical buttons and configurable by Room server xml file..

## Structure:

http://localhost:8890/CoCon/ButtonLED Event/SetPriorButtonEnabled/?SeatNr=(SeatNr)\&Enabled=(Enabled)

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  SeatNr | The seat number
Use 9999 for all units | int  |
|  Enabled | true, false | boolean  |

## Example:

http://localhost:8890/CoCon/ButtonLED Event/SetPriorButtonEnabled/?SeatNr=7\&Enabled=true

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value); $-1 \rightarrow$ exception

### 4.3.11.5 SetNextButtonLedStatus

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| SetNextButtonLedStatus | ☑ | ☑ |

Sets the Next button LED status

As for the LED color:

- Confidea-F: Red
- Confidea-T: Blue
- Confidea-FLEX: White
- Confidea wireless G3: NOT SUPPORTED

Structure: http://localhost:8890/CoCon/ButtonLED_Event/SetNextButtonLedStatus/?SeatNr={seatnr}&State={state}

Parameters:

| Name | Description | Type |
| --- | --- | --- |
| SeatNr | The seat number | int |
| State | supported values : On, Off, Fast, Slow, Medium | string |

Example: http://localhost:8890/CoCon/ButtonLED_Event/SetNextButtonLedStatus/?SeatNr=1&State=on

Return: 0 → operation success; 1 → Operation fail (not valid value); -1 → exception

### 4.3.11.6 SetPriorButtonLedStatus

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| SetPriorButtonLedStatus | ☑ | ☑ |

Sets the Prior button LED status

As for the LED color:

- Confidea-F: Red
- Confidea-T: Blue
- Confidea-FLEX: White
- Confidea wireless G3: NOT SUPPORTED

Structure: http://localhost:8890/CoCon/ButtonLED_Event/SetPriorButtonLedStatus/?SeatNr={seatnr}&State={state}

Parameters:

| Name | Description | Type |
| --- | --- | --- |
| SeatNr | The seat number | Int |
| State | Supported values : On, Off, Fast, Slow, Medium | string |

Example: http://localhost:8890/CoCon/ButtonLED_Event/SetPriorButtonLedStatus/?SeatNr=7&State=fast

Return: 0 → operation success; 1 → Operation fail (not valid value) -1 → exception

# 4.3.11.7 SetMicLED 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| SetMicLED | $\square$ | $\square$ |

Sets the LED of microphone or ring for the seat.

## Structure:

http://localhost:8890/CoCon/ButtonLED_Event/SetMicLED/?SeatNr=<SeatNr>\&LedName=<LedName>\&LedCol or=<LedColor>\&LedBlinkingPace=<LedBlinkingPace>

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| SeatNr | The seat number | int |
| LedName | The LED name which should be set. Supported values: mic, ring | string |
| LedColor | The LED color which should be set. Supported values: red, green | string |
| LedBlinkingPace | The LED blinking pace which should be set. Supported values: on, off, fast, medium, slow | string |

## Example:

http://localhost:8890/CoCon/ButtonLED_Event/SetMicLED/?SeatNr=2\&LedName=mic\&LedColor=green\&LedBlixingPace=slow

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value); $-1 \rightarrow$ exception

### 4.3.12 External

### 4.3.12.1 Send message to Operator

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SendMsgToOperato | $\square$ | $\square$ |

## Structure:

http://localhost:8890/CoCon/External/SendMsgToOperator/?Message=\{msg\}
Example:
http://localhost:8890/CoCon/External/SendMsgToOperator/?Message=["This is an example msg"]

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.12.2 NotifyExternalCall

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| NotifyExternalCall | $\square$ | $\square$ |

Notification to Interpreter Desk for the external call.

## Structure:

http://localhost:8890/CoCon/External/NotifyExternalCall/?To=(unitlds)\&Beep=(isBeep)

| Parameters: |  |  |
| :--: | :--: | :--: |
| Name | Description | Type |
| Unitlds | The unit ids list separate by comma. $2,5,10$ | srting |
| Beep | True/ False <br> To send Beep sound on the desk | bool |

# Example: 

http://localhost:8890/CoCon/External/NotifyExternalCall/?To=2,3,4\&Beep=True

## Returns: string

\{"NotifyExternalCall":true\}

# 4.3.13 Interpretation

Interpreter management and configuration commands

### 4.3.13.1 GetAllBoothsInRoom

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetAllBoothsInRoom | $\square$ | $\square$  |

Get all booths name from current active room. Structure: http://localhost:8890/CoCon/Interpretation/GetAllBoothsInRoom Example: http://localhost:8890/CoCon/Interpretation/GetAllBoothsInRoom Return: {"GetAllBoothsInRoom":{"Booths":[{"BoothId":1,"Desks":[10,7]}}}

### 4.3.13.2 AddLanguage

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  AddLanguage | $\square$ | $\square$  |

Add new language to DB. Structure: http://localhost:8890/CoCon/Interpretation/AddLanguage/?Name=(name)\&ISO=(iso) Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Name | Name of the Language | string  |
|  ISO | $2 / 3$ letters code for the Language | string  |

Return: int Example: http://localhost:8890/CoCon/Interpretation/AddLanguage/?Name=English\&ISO=EN Return: $0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.13.3 RemoveLanguage

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  RemoveLanguage | $\square$ | $\square$  |

Remove language from the existing list of language. Structure: http://localhost:8890/CoCon/Interpretation/RemoveLanguage/?Name=(name) Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Name | Name of the Language | string  |

Return: int

# Example:

http://localhost:8890/CoCon/Interpretation/RemoveLanguage/?Name=English

## Return:

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.13.4 ClearLanguages

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  ClearLanguages | $\square$ | $\square$  |

Clear all the language from the language list. Structure: http://localhost:8890/CoCon/Interpretation/ClearLanguages Return: int Example: http://localhost:8890/CoCon/Interpretation/ClearLanguages

## Return:

$0 \rightarrow$ operation success (reply not send in Cocon for Plixus Core and Plixus Core); $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.13.5 AddInterpreterPreset

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  AddInterpreterPreset | $\square$ | $\square$  |

Add new interpreter preset Structure: http://localhost:8890/CoCon/Interpretation/AddInterpreterPreset/?Name=(name)\&Description=(description)\&Mic Mode=(micMode)\&BoothMode=(boothMode)

## New Optional Structure :

http://localhost:8890/CoCon/Interpretation/AddInterpreterPreset/?Name=(name)\&Description=(description)\&Mic Mode=(micMode)\&BoothMode=(boothMode)\&MultipleChannelActivation=(multipleChannelActivation)\&IsOverrid eChannel=(isOverrideChannel)\&IsAllActiveMicsLEDBlink=(isAllActiveMicsLEDBlink)\&AllActiveMicsLEDBlinkTim e=(allActiveMicsLEDBlinkTime)\&IsSlowDownImplementedExternally=(isSlowDownImplementedExternally)\&IsLi stenerCountConfigurator=(isListenerCountConfigurator)\&ListenerCountConfiguratorTime=(listenerCountConfigu ratorTime)

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Name | The name of Interpreter preset (Required) | string  |
|  Description | The description of the interpreter preset
(Optional) | string  |

| MicMode | Interpretation mic mode <br> $0=$ override mode <br> $1=$ mixed mode <br> (Optional) | int |
| :--: | :--: | :--: |
| BoothMode | Interpretation mode between booths <br> $0=$ override mode <br> $1=$ mixed mode <br> $2=$ Lock on A. Override on B <br> (Optional) | Int |
| MultipleChannelActivation | Allow multiple channel can active on same <br> booth (True / False : Optional parameter, <br> Default value : False) | Bool |
| IsOverrideChannel | Allow only one channel can active in one booth <br> (True / False : Optional parameter, Default <br> value : False) | Bool |
| IsAllActiveMicsLEDBlink | All active mics LED blinking if the speak slow <br> function enabled <br> (True / False : Optional parameter, Default <br> value : False) | Bool |
| AllActiveMicsLEDBlinkTime | Speak slow function Enabled + configure the <br> time for the mic led blinking for speak slow <br> function. <br> (Optional parameter, Default value : 5 sec ) | int |
| IsSlowDownImplementedExternal <br> y | Send notification for the speak low to external <br> API user. <br> (True / False : Optional parameter, Default <br> value : True) | Bool |
| IsListenerCountConfigurator | Listener Count function enabled <br> (True / False : Optional parameter, Default <br> value : False) | Bool |
| ListenerCountConfiguratorTime | Configure the time for the listener count event <br> from CU to Server <br> (Optional parameter, Default value : 60 sec ) | int |

# Example: 

http://localhost:8890/CoCon/Interpretation/AddInterpreterPreset/?Name=My first test \&Description=Test first test\&MicMode=0\&BoothMode $=0$

## Return:

\{"AddInterpreterPreset":\{"InterpreterPreset":\{"Id":11,"Name":"My first test ","Description":"Test first test","DeskMode":0,"BoothMode":0,"State":"Inactive"\}\}

## New Return value :

\{"AddInterpreterPreset":\{"InterpreterPreset":\{"Id":10,"Name":" MTest
1","Description":"","DeskMode":0,"BoothMode":0,"MultipleChannelActivation":false,"IsOverrideChannel":false,"Is AllActiveMicsLEDBlink":false,"AllActiveMicsLEDBlinkTime":5,"IsSlowDownImplementedExternally":true,"IsListen erCountConfigurator":false,"ListenerCountConfiguratorTime":60,"State":"Inactive"\}\}

### 4.3.13.6 DeleteInterpreterPreset

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| DeleteInterpreterPreset | $\square$ | $\square$ |

Delete the existing interpreter preset by Preset id
Structure:
http://localhost:8890/CoCon/Interpretation/DeleteInterpreterPreset/?Id=\{presetId\}

## Parameters:

| Name | Description | Type |
| :-- | :-- | :--: |
| Presetld | The Id of Interpreter Preset | int |

Return: int Note: Active preset can't be deleted. Example: http://localhost:8890/CoCon/Interpretation/DeleteInterpreterPreset/?Id=2 Return: $0 \rightarrow$ operation success (reply not send in Cocon for Plixus Core and Plixus Core); $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.13.7 ApplyInterpreterPreset

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  ApplyInterpreterPreset | $\checkmark$ | $\checkmark$  |

Send interpreter Preset to activate preset by ID Structure: http://localhost:8890/CoCon/Interpretation/ApplyInterpreterPreset/?Id=(presetId) Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Presetld | The Id of Interpreter Preset | int  |

Return: int Example: http://localhost:8890/CoCon/Interpretation/ApplyInterpreterPreset/?Id=2 Return: $0 \rightarrow$ operation success (reply not send in Plixus Core); $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception Return for CoCon for Plixus Core \& Plixus Core: Note: Api call will work as expected and update event will recived instead of "0" String : \{"ApplyInterpreterPreset":2\}

### 4.3.13.8 GetActiveInterpreterPreset

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetActiveInterpreterPreset | $\checkmark$ | $\checkmark$  |

Get current active interpreter preset information. Structure: http://localhost:8890/CoCon/Interpretation/GetActiveInterpreterPreset Example: http://localhost:8890/CoCon/Interpretation/GetActiveInterpreterPreset

Return: string

\{"GetActiveInterpreterPreset":\{"InterpreterPreset":\{"Id":0,"Name":"Default","Description":"The default configuration with English, French, German and Dutch.","DeskMode":0,"BoothMode":0,"MultiChannelActivation":false,"Locked":false,"AudienceIndication":false," AudienceIndicationInterval":60,"State":"Active","Channels":[\{"Order":1,"Language":"01 EN","Booth":"1","Desks":[\{"Name":"1","ActiveChannel":0,"Relays":["Floor","Floor","Floor","Floor","Floor","Floor"]]\} ,"Quality":0,"IsRecording":false), \{"Order":2,"Language":"02 FR","Booth":"EmptyBooth","Desks":[],"Quality":0,"IsRecording":false), \{"Order":3,"Language":"03 DE","Booth":"EmptyBooth","Desks":[],"Quality":0,"IsRecording":false), \{"Order":4,"Language":"04 NL","Booth":"EmptyBooth","Desks":[],"Quality":0,"IsRecording":false), \{"Order":5,"Language":"05 TA","Booth":"EmptyBooth","Desks":[],"Quality":0,"IsRecording":false\}]\}\}

# 4.3.13.9 GetAllInterpreterPresets 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAllInterpreterPresets | $\square$ | $\square$ |

Get all interpreter presets from the current room.
Structure:
http://localhost:8890/CoCon/Interpretation/GetAllInterpreterPresets

## Example:

http://localhost:8890/CoCon/Interpretation/GetAllInterpreterPresets
Return: string
\{"GetAllInterpreterPresets":\{"InterpreterPreset":\{"Id":7,"Name":"Test
1","Description":"","DeskMode":0,"BoothMode":0,"MultipleChannelActivation":false,"IsOverrideChannel":true,"Is AllActiveMicsLEDBlink":true,"AllActiveMicsLEDBlinkTime":5,"IsSlowDownImplementedExternally":true,"IsListen erCountConfigurator":true,"ListenerCountConfiguratorTime":10,"State":"Active"},{"Id":9,"Name":"My first test ","Description":"Test first
test","DeskMode":0,"BoothMode":0,"MultipleChannelActivation":false,"IsOverrideChannel":false,"IsAllActiveMics LEDBlink":false,"AllActiveMicsLEDBlinkTime":5,"IsSlowDownImplementedExternally":true,"IsListenerCountConfi gurator":false,"ListenerCountConfiguratorTime":60,"State":"Inactive"}]\}

### 4.3.13.10 GetAllLanguages

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAllLanguages | $\square$ | $\square$ |

Get all languages which is available in language list.
Structure :
http://localhost:8890/CoCon/Interpretation/GetAllLanguages
Example:
http://localhost:8890/CoCon/Interpretation/GetAllLanguages
Return: string
\{"GetAllLanguages":\{"Languages":\{"Name":"Bulgarian","ISO":"BG"},{"Name":"Bosnian","ISO":"BS"},{"Name":"Bi hari","ISO":"BH"},{"Name":"Czech","ISO":"CS"},{"Name":"Cree","ISO":"CR"},{"Name":"Dutch","ISO":"NL"},{"Nam e":"Divehi","ISO":"DV"},{"Name":"Hebrew","ISO":"HE"},{"Name":"Haitian","ISO":"HT"},{"Name":"Limburgish","IS $\left.\mathrm{O}^{\text {" }}: " \mathrm{LI} "\right]\}\}$

### 4.3.13.11 GetAllChannels

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAllChannels | $\square$ | $\square$ |

Get all channels list by existing preset id.
Structure:
http://localhost:8890/CoCon/Interpretation/GetAllChannels/?PresetId=\{presetId\}

# Example: 

http://localhost:8890/CoCon/Interpretation/GetAllChannels/?PresetId=2
Return: String
\{"GetAllChannels":\{"Channels":\{\{"Order":1,"Language":"English","AudioRouting":"1","DisplayText":"01
EN","AutoFloor":false,"BackupChannel":"Floor"\},{"Order":2,"Language":"Chinese","AudioRouting":"2","DisplayTe
xt":"02
ZH","AutoFloor":false,"BackupChannel":"Floor"\},{"Order":3,"Language":"Dutch","AudioRouting":"3","DisplayText"
:"03
NL","AutoFloor":false,"BackupChannel":"Floor"\},{"Order":4,"Language":"French","AudioRouting":"External","Disp layText":"04
FR","AutoFloor":false,"BackupChannel":"Floor"\},{"Order":5,"Language":"Hindi","AudioRouting":"Disabled","Displ ayText":"05 HI","AutoFloor":false,"BackupChannel":"Floor"\}\}\}

### 4.3.13.12 AddChannel

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| AddChannel | $\square$ | $\square$ |

Add channel to existing preset via preset Id.
Please note that for now, channels should always be added at the end of the channel list (i.e., you have to supply the next free channel number to the "Order" parameter.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| PresetId | The Id of Interpreter Preset | int |
| Order | Number of the channels | int |
| Language | Language name | string |
| DisplayText | Display text: Text that is shown on the channel selector. E.g.: 02 ENG | string |
| AudioRouting | Set audio routing for the channel. Plixus Core \& CoCon For Plixus Core: 'comma-separated-booth-numbers', Disabled, External, EmptyBooth | string |
| BackupChannel | Set the backup channel Floor <br> (Now only floor is backup channel) Optional parameter. | string |
| AutoFloor | Set auto floor is enabled or disabled False <br> (CoCon 5.1does not support auto floor yet) Optional parameter. | bool |
| IsRecording | Channel recording or not. Optional parameter. | bool |

## Structure:

http://localhost:8890/CoCon/Interpretation/AddChannel/?PresetId=\{presetId\}\&Order=\{channelNumber\}\&Langua ge=\{language\}\&DisplayText=\{displayText\}\&AudioRouting=\{audioRouting\}\&BackupChannel=\{backupChannel\}\& AutoFloor=\{autoFloor\} \&IsRecording=\{IsRecording\}

# Example: 

http://192.168.8.120:8890/CoCon/Interpretation/AddChannel/?PresetId=5\&Order=4\&Language=English\&Displa yText=EN\&AudioRouting=1,2\&BackupChannel=Floor\&AutoFloor=False\&IsRecording=False

## Return:

"AddChannel":("Channel":("Order":1,"Language":"English","AudioRouting":"1,2","DisplayText":"EN","AutoFloor":f
alse,"IsRecording":false,"BackupChannel":"Floor"))\}
**Log file will have detail for wrong order : You gave an inappropriate channel order, and it has been changed from 5 to 3 !

### 4.3.13.13 AddChannels

| API Module | Cocon for Plixus Core | Plixus Core |
| :--: | :--: | :--: |
| AddChannels | $\square$ | $\square$ |

Add channels to existing preset via preset Id.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| PresetId | The Id of Interpreter Preset Every configuration has a unique ID, you need. When creating a new configuration you will find this, or you can use the command /CoCon/Interpretation/GetAllInterpreterPresets | int |
| Language | Language name list comma separated list of languages. This will add a channel per language in that list to the configuration. It's not needed that the language is 1 of the existing languages. Important is that the language is unique and is not already used in the configuration. To have a list of existing languages with their ISO you can use this API: <br> CoCon/Interpretation/GetAllLanguages | string |
| DisplayText | Display text list: Text that is shown on the channel selector. E.g.: 02 ENG | string |
| AudioRouting | Set audio routing for the channels. list of comma separated audioroutings per channel/language. Options: <br> - number $\rightarrow$ The corresponding channel/language will be used in 1 booth (booth number) <br> - (comma separated list of numbers) $\rightarrow$ the corresponding channel/language will be used in multiple booths. All the numbers of the list are all the booths that will be used. <br> - EmptyBooth $\rightarrow$ the corresponding channel/language is an active channel but there is no booth assigned to it <br> - External $\rightarrow$ the channel/language is an external channel <br> - Disabled $\rightarrow$ the corresponding channel/language is disabled. | string |

# Structure: 

http://localhost:8890/CoCon/Interpretation/AddChannels/?PresetId=\{presetId\}\&Language=\{languageList\}\&Displ ayText=\{displayTextList\}\&AudioRouting=\{audioRoutingList\}

## Example:

http://192.168.8.120:8890/CoCon/Interpretation/AddChannels/?PresetId=5\&Language=French,English,Dutch,G erman,Spanish\&DisplayText=02FR,03ENG,04NLD,05GER,06SPA\&AudioRouting=1, $(2,3,4,10)$,EmptyBooth,Ext ernal,Disabled

This command will add 5 channels, first channel with language 'French' (and display text '02FR') assigned to booth 1 , second will be a channel with language 'English' (and display text '03ENG') assigned to booth 2,3,4 and 10, third will be a channel with language 'Dutch' (and display text '04NLD') not assigned to a booth (but still enabling this language to be spoken on B/C channel of interpreter desks), etc
The arrays for Language and DisplayText and AudioRouting need to be of equal length.

### 4.3.13.14 EditChannel

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| EditChannel | $\square$ | $\square$ |

Edit the existing channel via preset id. (Overwrite the existing channel.)
Please note that it is not allowed to change the Language Name for a channel.
Structure:
http://localhost:8890/CoCon/Interpretation/EditChannel/?PresetId=\{presetId\}\&Order=\{channelNumber\}\&Langua ge=\{language\}\&DisplayText=\{displayText\}\&AudioRouting=\{audioRouting\}\&BackupChannel=\{backupChannel\}\& AutoFloor=\{autoFloor\}\&IsRecording=\{ IsRecording\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| PresetId | The Id of Interpreter Preset | int |
| Order | Order of the channel | int |
| Language | Language name | string |
| DisplayText | Display text: Text that is shown on the channel selector. E.g.: 02 ENG | string |
| AudioRouting | Set audio routing for the channel. Plixus Core \& CoCon For Plixus Core: 'comma-separated-booth-numbers', Disabled, External, EmptyBooth | string |
| BackupChannel | Set the backup channel Floor <br> (Now only floor is backup channel) | string |
| AutoFloor | Set auto floor is enabled or disabled False <br> (CoCon 4.0 does not support auto floor yet) | bool |
| IsRecording | Channel recording or not. Optional parameter. | bool |

## Return: string

\{"EditChannel":\{"Channel":\{"Order":4,"Language":"Hindi","AudioRouting":"External","DisplayText":"04 HI","AutoFloor":false,"BackupChannel":"Floor ","IsRecording":false \}\}\}

## Example:

http://localhost:8890/CoCon/Interpretation/EditChannel/?PresetId=21\&Order=4\&Language=Hindi\&DisplayText= HI\&AudioRouting=External\&BackupChannel=Floor\&AutoFloor=False\&IsRecording=False

This command can be used to swap languages between 2 booths. For example, we start from a situation where Booth 1 is English and Booth 2 is French. If we want to swap them, we need to execute the following sequence of commands:

- Change the audio routing for the English channel to "Disabled" ("freeing" Booth 1):
http://localhost:8890/CoCon/Interpretation/EditChannel/?Presetld=21&Order=1&Language=English&Dis playText=01 EN&AudioRouting=Disabled&BackupChannel=Floor&AutoFloor=False
- Move the French channel to Booth 1:
http://localhost:8890/CoCon/Interpretation/EditChannel/?Presetld=21&Order=2&Language=French&Dis playText=01 FR&AudioRouting=1&BackupChannel=Floor&AutoFloor=False
- Move the English channel to Booth 2:
http://localhost:8890/CoCon/Interpretation/EditChannel/?Presetld=21&Order=1&Language=English&Dis playText=02 EN&AudioRouting=2&BackupChannel=Floor&AutoFloor=False


# 4.3.13.15 DeleteChannel 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| DeleteChannel | $\square$ | $\square$ |

Delete channel form the preset via channel id.
Structure:
http://localhost:8890/CoCon/Interpretation/DeleteChannel/?Presetld=(presetld) $\&$ Order=(ordernumber)

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Presetld | The Id of Interpreter Preset | int |
| Order | The order of the channel | int |

## Example:

http://localhost:8890/CoCon/Interpretation/DeleteChannel/?Presetld=21\&Order=18
Return: int
$0 \rightarrow$ operation success (reply not send in Cocon for Plixus Core and Plixus Core); $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.13.16 RemoveAllChannels

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RemoveAllChannels | $\square$ | $\square$ |

Remove all the channels from the existing preset.
Structure:
http://localhost:8890/CoCon/Interpretation/RemoveAllChannels/?Presetld=(presetld)

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Presetld | The Id of Interpreter Preset | int |

## Example:

http://localhost:8890/CoCon/Interpretation/RemoveAllChannels/?Presetld=21

Return: int
$0 \rightarrow$ operation success (reply not send in Cocon for Plixus Core and Plixus Core); $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

# 4.3.13.17 SetDisplayText 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetDisplayTex | $\square$ | $\square$ |

Set / modify display text for the existing channel via channel Id.
Structure:
http://localhost:8890/CoCon/Interpretation/SetDisplayText/?PresetId=\{presetId\}Order=\{order\}\&NewText=\{text\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Presetld | The preset of the Id which will be used | int |
| Order | The order of the channel | int |
| NewText | Text for display on channel selector. | string |

## Example:

http://localhost:8890/CoCon/Interpretation/SetDisplayText/?PresetId=12\&Order=2\&NewText=ENG
Return: int
$0 \rightarrow$ operation success (reply not send in Cocon for Plixus Core and Plixus Core); $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception

### 4.3.13.18 SaveInterpreterPresetAs

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SaveInterpreterPresetAs | $\square$ | $\square$ |

It will save the preset with new name, based on the existing preset id.

## Structure:

http://localhost:8890/CoCon/Interpretation/SaveInterpreterPresetAs/?Id=\{id\}\&Name=\{name\}\&Description=\{ description\}\&MicMode=\{micMode\}\&BoothMode=\{boothMode\}

## New Structure with additional optional fields :

http://localhost:8890/CoCon/Interpretation/SaveInterpreterPresetAs/?Id=\{id\}\&Name=\{name\}\&Descrip tion=\{description\}\&MicMode=\{micMode\}\&BoothMode=\{boothMode\}\&MultipleChannelActivation=\{mul tipleChannelActivation\}\&IsOverrideChannel=\{isOverrideChannel\}\&IsAllActiveMicsLEDBlink=\{isAllActi veMicsLEDBlink\}\&AllActiveMicsLEDBlinkTime=\{allActiveMicsLEDBlinkTime\}\&IsSlowDownImplemen tedExternally=\{isSlowDownImplementedExternally\}\&IsListenerCountConfigurator=\{isListenerCountCo nfigurator\}\&ListenerCountConfiguratorTime=\{listenerCountConfiguratorTime\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | Existing Preset's id (Required) | int |
| Name | The name of Interpreter preset (Required) | string |
| Description | The description of the interpreter preset (Optional) | string |
| MicMode | Interpretation mic mode $0=$ override mode $1=$ mixed mode | int |
| BoothMode | Interpretation mode between booths $0=$ override mode $1=$ mixed mode $2=$ Lock on A. Override on B (Optional) | Int |
| MultipleChannelActivation | Allow multiple channel can active on same booth (True / False : Optional parameter, Default value : False) (Optional) | Bool |
| IsOverrideChannel | Allow only one channel can active in one booth (True / False : Optional parameter, Default value : False) | Bool |
| IsAllActiveMicsLEDBlink | All active mics LED blinking if the speak slow function enabled (True / False : Optional parameter, Default value : False) | Bool |
| AllActiveMicsLEDBlinkTime | Speak slow function Enabled + configure the time for the mic led blinking for speak slow function. <br> (Optional parameter, Default value : 5 sec ) | int |
| IsSlowDownImplementedExternal y | Send notification for the speak low to external API user. <br> (True / False : Optional parameter, Default value : True) | Bool |
| IsListenerCountConfigurator | Listener Count function enabled (True / False : Optional parameter, Default value : False) | Bool |
| ListenerCountConfiguratorTime | Configure the time for the listener count event from CU to Server <br> (Optional parameter, Default value : 60 sec ) | int |

# Return: 

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception
\{"ActivePresetUpdated":\{"InterpreterPreset":\{"InterpreterPreset":\{"Id":4,"Name":"New Preset 1","Description":"","DeskMode":1,"BoothMode":0,"MultipleChannelActivation":true,"IsOverrideChannel":false,"Is AllActiveMicsLEDBlink":true,"AllActiveMicsLEDBlinkTime":5,"IsSlowDownImplementedExternally":true,"IsListe nerCountConfigurator":true,"ListenerCountConfiguratorTime":60,"State":"Active","Channels":[\{"Order":1,"Language":"English","Booth":"1","Desks":[("Name":"1","ActiveChannel":0,"Relays":[]],"Quality":3,"IsRecording":false}, \{"Order":2,"Language":"Chinese","Booth":"EmptyBooth","Desks":[],"Quality":3,"IsRecording":false\}]}]\}\}

## Note: CoCon for Plixus Core \& PlixusCore:

This call will update the preset based on the Preset id, not create new preset. (Function like update existing preset).

### 4.3.13.19 GetAllChannelRealtimeData

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetAllChannelRealtimeData | $\square$ | $\square$ |

Get real time data for channels based on the active interpreter preset.
Note: user should request for this command.

The quality of the channel

|  | Cocon for Core / Plixus Core |
| :-- | :-- |
| floor | 0 |
| translation from floor | 1 |
| 2nd translation from floor | 2 |
| 3rd translation from floor | 3 |
| 4th translation from floor | 4 |
| $\ldots$ |  |
| Listening to own translation | 255 |

# Structure: 

http://localhost:8890/CoCon/Interpretation/GetAllChannelRealtimeData

## Example:

http://localhost:8890/CoCon/Interpretation/GetAllChannelRealtimeData

## Return:

## CoCon for Core \& Plixus Core:

\{"GetAllChannelRealTimeData":\{\{"Order":1,"Language":"Hindi","Booths":[]\},\{"Order":2,"Language":"English","Bo oths":\{\{"Name":1,"Desks":\{\{"Name":1,"ActiveChannel":1,"Relay":"English"\}\},"Quality":255\}]\},\{"Order":3,"Languag e":"Chinese","Booths":[]]\}

### 4.3.13.20 GetSpeakSlowerRequestList

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetSpeakSlowerRequestList | $\square$ | $\square$ |

Get event form Interpreter desk for the speck slow button pressed.
Structure:
http://localhost:8890/CoCon/Interpretation/GetSpeakSlowerRequestList

## Example:

http://localhost:8890/CoCon/Interpretation/GetSpeakSlowerRequestList

## Return:

\{"SpeakSlowerRequest":\{"UnitId":3\}\}

### 4.3.13.21 GetInterpreterPresetById

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetInterpreterPresetById | $\square$ | $\square$ |

Get full information of interpreterpreset by id.
Structure:
http://localhost:8890/CoCon/Interpretation/GetInterpreterPresetById/?Id=2

# Example: 

http://localhost:8890/CoCon/Interpretation/GetInterpreterPresetById/?Id=2

## Return:

["GetInterpreterPresetById":["InterpreterPreset":["Id":12,"Name":"Test 100","Description":"XYZ","DeskMode":0,"BoothMode":0,"MultipleChannelActivation":false,"IsOverrideChannel":f alse,"IsAllActiveMicsLEDBlink":false,"AllActiveMicsLEDBlinkTime":5,"IsSlowDownImplementedExternally":true,"I sListenerCountConfigurator":false,"ListenerCountConfiguratiorTime":60,"State":"Active","Channels":[["Order":1," Language":"Hindi","Booth":"1","Desks":[["Name":"1","ActiveChannel":0,"Relays":[]],["Name":"2","ActiveChannel": 0,"Relays":[]],"IsRecording":false],{"Order":2,"Language":"English","Booth":"2","Desks":[("Name":"1","ActiveCha nnel":0,"Relays":[]],"IsRecording":false]]}]}

### 4.3.13.22 AssignDeskToBooth

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| AssignDeskToBooth | $\square$ | $\square$ |

Moves any desk (unassigned or already assigned at other booth) by its seat ID to the specified booth.

## Structure:

http://localhost:8890/CoCon/Interpretation/AssignDeskToBooth?DeskSeatId=\{seat\&BoothId=\{booth\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| DeskSeatID | Seat Id for Interpreter desk (Required) | Int |
| BoothID | Booth Id in which desk to add (Required) | int |

## Example:

http://localhost:8890/CoCon/Interpretation/AssignDeskToBooth?DeskSeatId=4\&BoothId=5

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value); $-1 \rightarrow$ exception

### 4.3.13.23 UnassignDesk

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| UnassignDesk | $\square$ | $\square$ |

If assigned to a booth, removes the desk from its booth. If the booth is empty, it is deleted.

## Structure:

http://localhost:8890/CoCon/Interpretation/Unassigndesk?DeskSeatId=\{seat\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| DeskSeatID | Seat Id for Interpreter desk (Required) | Int |

# Example: 

http://localhost:8890/CoCon/Interpretation/Unassigndesk?DeskSeatId=1
Return: int
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value); $-1 \rightarrow$ exception

### 4.3.13.24 UpdateBooth

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| UpdateBooth | $\square$ | $\square$ |

Allow user to update Booth.

## Structure:

http://localhost:8890/CoCon/Interpretation/UpdateBooth?BoothId=\{booth\}\&Label=\{label\}\&Intercom=\{intercom\} Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| BoothID | Booth Id which need to update (Required) | Int |
| Intercom | Enabled intercom on Booth (Optional) | boolean |
| Label | Add label for booth (Optional) | string |

## Example:

http://localhost:8890/CoCon/Interpretation/UpdateBooth?BoothId=5\&Label=NewLabel
http://localhost:8890/CoCon/Interpretation/UpdateBooth?BoothId=1\&Intercom=false
Return: int
$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value); $-1 \rightarrow$ exception

### 4.3.14 API calls for Configurations

### 4.3.14.1 GetCulpAddress

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetCulpAddress | $\square$ | $\square$ |

Get CU IP address from the Room server config file (which CU is currently connected).

## Structure:

http://localhost:8890/CoCon/GetCulpAddress

## Return:

\{"GetCulpAddress":\{"IpAddress":"192.168.8.110"\}\}

# 4.3.14.2 SetCulpAddress 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetCulpAddress | $\square$ | $\square$ |

Set / Update CU IP address API will update the CoCon room server config file and Room service config file, for the taking impact of the modified IP address user should have to restart room server and Room service as well.

Note: Room server and Room service must have to restart after this API call, else the new IP address will not take impact.

## Structure:

http://localhost:8890/CoCon/SetCulpAddress/?lpAddress=192.168.8.110

## Return:

\{"SetCulpAddress":\{"Result":true,"lpAddress":"192.168.8.110"\}\}

### 4.3.14.3 RestartRoomServer

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RestartRoomServer | $\square$ | $\square$ |

Restart Room server.

## Structure:

http://localhost:8890/CoCon/RestartRoomServer

## Return:

Simply 3rd party tool lost connection.

### 4.3.14.4 GetCoconServerVersion

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetCoconServerVersion | $\square$ | $\square$ |

This API calls reply with the Cocon room server version.

## Structure:

http://localhost:8890/CoCon/GetCoconServerVersion

## Return: string

\{"GetCoconServerVersion":\{"Version":"5.3.0.52"\}\}

# 4.3.15 Recording ( AE-R \& Plixus Core only) 

### 4.3.15.1 Getrecordingfilesinfo

| API Module | Cocon for <br> Plixus Core | Plixus Core_AE-R |
| :-- | :-- | :-- |
| GetRecordingFilesInfo | $\square$ | $\square$ |

This api call we return of the recored files information from CU.

## Structure:

http://192.168.8.235:8890/CoCon/Recording/getrecordingfilesinfo

## Return: string

\{"GetRecordingFilesInfo":\{"RecordingFilesInfo":\{"RecordingFiles":\{"Name":"/audio/internal/1970-01-
01_00h04m36s_01-EN_00.mp3"\},\{"Name":"/audio/internal/1970-01-
01_00h04m36s_Floor_00.mp3"\},\{"Name":"/audio/internal/1970-01-01_00h05m20s_01-
EN_00.mp3"\},\{"Name":"/audio/internal/1970-01-
01_00h05m20s_Floor_00.mp3"\},\{"Name":"/audio/internal/test_1970-01-01_00h06m01s_01-
EN_Test_00.mp3"\},\{"Name":"/audio/internal/test_1970-01-
01_00h06m01s_Floor_Test_00.mp3"\},\{"Name":"/audio/internal/test_1970-01-01_00h08m20s_01-
EN_Test_00.mp3"\},\{"Name":"/audio/internal/test_1970-01-
01_00h08m20s_Floor_Test_00.mp3"\}\},"StorageType":"internal"\},\{"RecordingFiles":[],"StorageType":"external"\}]\} \}

### 4.3.15.2 Startrecording

| API Module | Cocon for <br> Plixus Core | Plixus Core_AE-R |
| :-- | :-- | :-- |
| Startrecording | $\square$ | $\square$ |

This api call will start recording and store the file based on the configuration.
NOTE1: Both these arguments are optional. If the arguments are not present ( eg: Recording/StartRecording ), the last set prefix and suffix are used. To clear the prefix and/or suffix the argument must be passed with "" (Prefix="")

If Succeeded: RecordingState: Active
When an invalid string is passed as Prefix or Suffix:
Errors: \{RecordError: kErrorIllegalSuffix\} and/or \{RecordError: kErrorIllegalPrefix\}
NOTE2: These ONLY appear in case of an error, if the strings are ok there is no Errors field.
NOTE3: Even if these appear, the recording will start. The recording file will simply omit the invalid prefix or suffix and an empty prefix or suffix.
NOTE4: This function will start recording the floor if no channels have been selected to record in a previous setup.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Prefix | File name start with (Optional) | string |
| Suffix | File name end with (Optional) | string |

## Structure:

http://192.168.8.235:8890/CoCon/Recording/Startrecording

# Example : 

http://192.168.8.235:8890/CoCon/Recording/Startrecording/?Prefix=Room1\&Suffix=Televic

## Return: string

\{"StartRecording":\{"RecordingState":"active"\}
Update event :
\{"RecordingStateUpdated":\{"RecordingState":"active"\}

### 4.3.15.3 Stoprecording

| API Module | Cocon for <br> Plixus Core | Plixus Core_AE-R |
| :-- | :-- | :-- |
| Stoprecording | $\square$ | $\square$ |

This api call will stop the current recording.

## Structure:

http://192.168.8.235:8890/CoCon/Recording/Stoprecording

## Return: string

\{"StopRecording":\{"RecordingState":"idle"\}
Update Event :
\{"RecordingStateUpdated":\{"RecordingState":"idle"\}

### 4.3.15.4 Getrecordingstate

| API Module | Cocon for <br> Plixus Core | Plixus Core_AE-R |
| :-- | :-- | :-- |
| Getrecordingstate | $\square$ | $\square$ |

This api will get the current state of the recording.
State can be:
active
error
idle
paused
unknown.
Note: There is also one Server to Client call whenever the RecordingState on the device is updated:

## Structure:

http://192.168.8.235:8890/CoCon/Recording/Getrecordingstate

## Return: string

\{"GetRecordingState":\{"RecordingState":"idle"\}

# 4.3.16 Wireless coupling

### 4.3.16.1 Getwcapinfo

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Getwcapinfo | $\square$ | $\square$  |

This api call will get the information of the WCAP.

## Structure:

http://192.168.8.240:8890/CoCon/Wireless/Getwcapinfo/?WcapSerial=(wcapSerial_number)

## Example :

http://192.168.8.240:8890/CoCon/Wireless/Getwcapinfo/?WcapSerial=352321544

## Return: string

\{"WcapInfoUpdated":\{"chans":[],"cpld":0,"gtw":"192.168.8.1","hn":"admin","ipa":"192.168.8.210","mac":"1C:BA:8 C:99:FE:81","online":1,"op_mode":1,"reg":"Europe","sbm":"255.255.255.0","serial":352321544,"wlist":[]]\}

### 4.3.16.2 Getallwcapinfo

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  Getallwcapinfo | $\square$ | $\square$  |

This api call will get All WCAP information which is connected.

## Structure:

http://192.168.8.235:8890/CoCon/Wireless/Getallwcapinfo

## Return: string

\{"AllWcapInfoUpdated":[\{"chans":[],"cpld":1,"gtw":"192.168.8.1","hn":"admin","ipa":"192.168.8.210","mac":"1C:B A:8C:99:FE:81","online":1,"op_mode":1,"reg":"Europe","sbm":"255.255.255.0","serial":352321544,"wlist":[]]\}

### 4.3.16.3 SetWcapCoupledMode

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetWcapCoupledMode | $\square$ | $\square$  |

Set the WCAP coupling mode.

## Structure:

http://192.168.8.120:8890/CoCon/Wireless/SetWcapCoupledMode/?WcapSerial=352321544\&CoupledMode=F alse

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (not valid value) $-1 \rightarrow$ exception Update Event : \{"WcapCoupledUpdated":\{"CoupledMode":false,"WcapSerial":352321544\}\}

# 4.3.17 Operator Customization

Important notes:

- all functionality within this module is only available in case "operator customization" license is present. It allows to have a tab in the operator application ribbon with place for custom labels and buttons. The buttons can trigger API events which can be handled by $3^{\text {rd }}$ parties.
- First configure how many buttons and labels will be used before configuring the custom buttons and labels.

### 4.3.17.1 GetCustomButtons

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetCustomButtons | $\square$ | $\square$  |

This API call provides an overview of the configured custom buttons.

## Structure:

http://localhost:8890/CoCon/OperatorCustomization/GetCustomButtons

### 4.3.17.2 GetCustomLabels

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  GetCustomButtons | $\square$ | $\square$  |

This API call provides an overview of the configured custom labels.

## Structure:

http://localhost:8890/CoCon/OperatorCustomization/GetCustomLabels

### 4.3.17.3 SetCustomButton

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetCustomButton | $\square$ | $\square$  |

This API call allows to configure a custom button. Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | Id of the button | Int  |
|  Text | Text shown in the button | string  |
|  FontColorHex | (optional) font color of the text in the button
Example black color ( $\mathrm{R}=0, \mathrm{G}=0, \mathrm{~B}=0$ ) is ' $\# 000000$ ' which should be passed as " $\% 23000000$ " | Hex string  |
|  BackgroundColorHex | (optional) background color of the button
Example for white color ( $\mathrm{R}=255, \mathrm{G}=255, \mathrm{~B}=255$ ) is ' $\#$ FFFFFF' which should be passed as " $\% 23$ FFFFFF' | Hex string  |

# Structure: 

http://localhost:8890/CoCon/OperaorCustomization/SetCustomButton/?Id=\{id\}\&Text=\{text\}\&FontColorHex=\{font ColorHex\}\&BackgroundColorHex=\{backgroundColorHex\}

## Example:

http://localhost:8890/CoCon/OperatorCustomization/SetCustomButton/?Id=1\&Text=test\&FontColorHex=\%23DC 143C\&BackgroundColorHex=\%23E0FFFF

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (button not found); HTTP status code $404 \rightarrow$ no valid license

### 4.3.17.4 SetCustomLabel

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetCustomLabel | $\square$ | $\square$ |

This API call allows to configure a custom label.

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | Id of the label | Int |
| Text | Text shown in the label | string |
| FontColorHex | (optional) font color of the text in the label <br> Example black color ( $\mathrm{R}=0, \mathrm{G}=0, \mathrm{~B}=0$ ) is ' $\# 000000$ ' which should be <br> passed as ' $\% 23000000$ ' | Hex string |

## Structure:

http://localhost:8890/CoCon/OperaorCustomization/SetCustomLabel/?Id=\{id\}\&Text=\{text\}\&FontColorHex=\{fontC olorHex\}

## Example:

http://localhost:8890/CoCon/OperatorCustomization/SetCustomLabel/?Id=1\&Text=test\&FontColorHex=\%23DC1 43C

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (button not found); HTTP status code $404 \rightarrow$ no valid license

# 4.3.17.5 SetCustomButtonState

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetCustomButtonState | ☑ | ☐  |

This API call allows to configure a custom button state.

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Id | Id of the button | Int  |
|  State | State of the button
{"Enable","Disable"} | string  |

**Structure:**

http://localhost:8890/CoCon/OperatorCustomization/SetCustomButtonState/?Id={id}&State={state}

**Example:**

http://localhost:8890/CoCon/OperatorCustomization/SetCustomButtonState/?Id=1&State=Disable

**Return: int**

0 → operation success; 1 → Operation fail (wrong state parameter or button not found) HTTP status code 404 → no valid license

# 4.3.17.6 SetNumberOfCustomButtons

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetNumberOfCustomButtons | ☑ | ☐  |

This API call allows to configure the amount of custom buttons.

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Number | Number of buttons
(value >= 0) | Int  |

**Structure:**

http://localhost:8890/CoCon/OperatorCustomization/SetNumberOfCustomButtons/?Number={number}

**Example:**

http://localhost:8890/CoCon/OperatorCustomization/SetNumberOfCustomButtons/?Number=2

**Return: int**

0 → operation success; 1 → Operation fail (wrong parameter) HTTP status code 404 → no valid license

# 4.3.17.7 SetNumberOfCustomLabels

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetNumberOfCustomLabels | ☑ | ☐  |

This API call allows to configure the number of custom labels.

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  Number | Number of labels
(value >= 0) | Int  |

**Structure:**

http://localhost:8890/CoCon/OperatorCustomization/SetNumberOfCustomLabels/?Number={number}

**Example:**

http://localhost:8890/CoCon/OperatorCustomization/SetNumberOfCustomLabels/?Number=2

**Return: int**

0 → operation success; 1 → Operation fail (wrong parameter) HTTP status code 404 → no valid license

# 4.3.18 Video 

### 4.3.18.1 GetVideoInputParts

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetVideoInputParts | $\square$ | $\square$ |

To get the video input parts information, such as how many seats have webcam. It will return with the seat's id as video input part id.

## Structure:

http://localhost:8890/CoCon/Video/GetVideoInputParts
Parameters: N/A

## Example:

http://localhost:8890/CoCon/Video/GetVideoInputParts

## Return:

\{"GetVideoInputParts":\{"VideoInputParts":\{\{"Id":0,"Type":"sdi"\}, \{"Id":1,"Type":"input_box"\}, \{"Id":2,"Type":"unknow n"\}, \{"Id":4,"Type":"unknown"\}, \{"Id":6,"Type":"webcam"\}, \{"Id":0,"Type":"sdi"\}]\}

### 4.3.18.2 GetVideoOutputParts

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetVideoOutputParts | $\square$ | $\square$ |

To get the video output parts information, such as how many seats have video selector. It will return with the seat's id as video output part id.

## Structure:

http://localhost:8890/CoCon/Video/GetVideoOutputParts
Parameters: N/A

## Example:

http://localhost:8890/CoCon/Video/GetVideoOutputParts

## Return:

\{"GetVideoOutputParts":\{"VideoOutputParts":\{\{"Id":3,"Type":"output_box"\}, \{"Id":6,"Type":"mmu"\}, \{"Id":7,"Type":" mmu"\}, \{"Id":8,"Type":"mmu"\}, \{"Id":9,"Type":"mmu"\}]\}

### 4.3.18.3 GetVideoConfigurations

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetVideoConfigurations | $\square$ | $\square$ |

To get the list of the video configurations from server with the basic information.

# Structure: 

http://localhost:8890/CoCon/Video/GetVideoConfigurations

## Parameters: N/A

## Example:

http://localhost:8890/CoCon/Video/GetVideoConfigurations

## Return:

\{"GetVideoConfigurations":\{"VideoConfigurations":\{"Id":0,"Name":"Default"\},{"Id":1,"Name":"Configuration 1"\},{"Id":2,"Name":"Configuration 2"},{"Id":3,"Name":"Configuration to test"},{"Id":4,"Name":"Configuration 3For Auto Test"\},{"Id":5,"Name":"Default_Copy(1)"},{"Id":6,"Name":"Demo for API"},{"Id":7,"Name":"API Test 1"}]\}\}

### 4.3.18.4 GetCurrentVideoConfigurationInDetails

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetCurrentVideoConfigurationInDetails | $\square$ | $\square$ |

To get the detailed configuration settings of active video preset.

## Structure:

http://localhost:8890/CoCon/Video/GetCurrentVideoConfigurationInDetails

## Parameters: N/A

## Example:

http://localhost:8890/CoCon/Video/GetCurrentVideoConfigurationInDetails

## Return:

\{"GetCurrentVideoConfigurationInDetails":\{"VideoConfiguration":\{"Id":0,"Name":"API Test 1","Description":"API Test
1","Streams":[\{"Id":1,"Name":"Str_1","IsAvailableForDelegates":true,"InputGroup":2,"OutputGroups":[1]),\{"Id":2," Name":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]\},{"Id":3,"Name":"Str_3","IsAvai lableForDelegates":true,"InputGroup":6,"OutputGroups":[3]\},{"Id":4,"Name":"Str_4","IsAvailableForDelegates":tru e,"InputGroup":-1,"OutputGroups":[4]\},{"Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]},{"Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]}],"InputGroups":[\{"Id":0,"Name":"SDI","Type":"normal","InputParts":[0]\},{"Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]},{"Id":2,"Name":"MIC 2","Type":"normal","InputParts":[6]\},{"Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]},{"Id":4,"Name":"MIC 4","Type":"normal","InputParts":[4]\},{"Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]},{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[2]\},{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]},{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]}],"OutputGroups":[\{"Id":1,"Name":"V-OUT 1","OutputParts":[3]\},{"Id":2,"Name":"V-OUT 2","OutputParts":[6]\},{"Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]\},{"Id":4,"Name":"V-OUT 4","OutputParts":[]}]\}\}

# 4.3.18.5 ActivateVideoConfigurationById 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| ActivateVideoConfigurationById | $\square$ | $\square$ |

To set / activate video configuration by configuration id.

## Structure:

http://localhost:8890/CoCon/Video/ActivateVideoConfigurationById?PresetId=\{presetId\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Presetld | Id of the video configuration (Preset Id) | int |

## Example:

http://localhost:8890/CoCon/Video/ActivateVideoConfigurationById?PresetId=7

## Return:

\{"ActivateVideoConfigurationById":\{"VideoConfiguration":\{"Id":7,"Name":"API Test 1","Description":"API Test 1","Streams":[\{"Id":1,"Name":"TH_1","IsAvailableForDelegates":true,"InputGroup":0,"OutputGroups":[1]\},\{"Id":2," Name":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]\},\{"Id":3,"Name":"Str_3","IsAvai lableForDelegates":true,"InputGroup":6,"OutputGroups":[3]\},\{"Id":4,"Name":"Str_4","IsAvailableForDelegates":tru e,"InputGroup":0,"OutputGroups":[4]\},\{"Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":0,"Out putGroups":[]\},\{"Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":0,"OutputGroups":[]\},"InputGr oups":[\{"Id":0,"Name":"SDI","Type":"normal","InputParts":[0]\},\{"Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]\},\{"Id":2,"Name":"MIC 2","Type":"normal","InputParts":[6]\},\{"Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]\},\{"Id":4,"Name":"MIC 4","Type":"normal","InputParts":[4]\},\{"Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]\},\{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[2]\},\{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]\},\{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]\},"OutputGroups":[\{"Id":1,"Name":"V-OUT 1","OutputParts":[3]\},\{"Id":2,"Name":"V-OUT 2","OutputParts":[6]\},\{"Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]\},\{"Id":4,"Name":"V-OUT 4","OutputParts":[]\}]\}\}

### 4.3.18.6 SaveActiveVideoConfiguration

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| SaveActiveVideoConfiguration | $\square$ | $\square$ |

Save the current active Preset.

## Structure:

http://localhost:8890/CoCon/Video/SaveActiveVideoConfiguration

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Presetld | Id of the video configuration (Preset Id) | int |

## Example:

http://localhost:8890/CoCon/Video/SaveActiveVideoConfiguration

## Return:

\{"SaveActiveVideoConfiguration":\{"VideoConfiguration":\{"Id":7,"Name":"API Test 1","Description":"API Test 1","Streams":\{\{"Id":1,"Name":"TH","IsAvailableForDelegates":true,"InputGroup":6,"OutputGroups":[]\},\{"Id":2,"Na me":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[1,2]\},\{"Id":3,"Name":"Str_3","IsAvail ableForDelegates":true,"InputGroup":6,"OutputGroups":[3]\},\{"Id":4,"Name":"Str_4","IsAvailableForDelegates":tru e,"InputGroup":-1,"OutputGroups":[4]\},\{"Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]\},\{"Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]\},"InputGroups":[{"Id":0,"Name":"SDI","Type":"normal","InputParts":[0]\},\{"Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]\},\{"Id":2,"Name":"MIC 2","Type":"normal","InputParts":[6]\},\{"Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]\},\{"Id":4,"Name":"MIC 4","Type":"normal","InputParts":[4]\},\{"Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]\},\{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[2]\},\{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]\},\{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]\},"OutputGroups":[\{"Id":1,"Name":"V-OUT 1","OutputParts":[3]\},\{"Id":2,"Name":"V-OUT 2","OutputParts":[6]\},\{"Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]\},\{"Id":4,"Name":"V-OUT 4","OutputParts":[]\}]\}\}

# 4.3.18.7 SetVideoStreamProperties 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| SetVideoStreamProperties | $\square$ | $\square$ |

To set / edit video stream properties, such as enabled / disabled the video stream for delegates accessibilities OR edit name of the video stream.

## Structure:

http://localhost:8890/CoCon/Video/SetVideoStreamProperties?VideoStreamId=\{videoStreamId\&VideoStrea mName=\{videoStreamName\} \&IsAvailableForDelegates=\{isAvailableForDelegates\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| VideoStreamld | Video stream Id | int |
| VideoStreamName | Set the name of video stream <br> Note: Stream name with max 5 Char | string |
| IsAvailableForDelegates | Set True if stream should be available for <br> delegates | bool |

## Example:

http://localhost:8890/CoCon/Video/SetVideoStreamProperties?VideoStreamId=1\&VideoStreamName $=$ test\&IsAv ailableForDelegates=true
http://localhost:8890/CoCon/Video/SetVideoStreamProperties?VideoStreamId=1\&VideoStreamName=TH\&IsAv ailableForDelegates=true

## Return:

\{"SetVideoStreamProperties":\{"VideoConfiguration":\{"Id":7,"Name":"API Test 1","Description":"API Test 1","Streams":\{\{"Id":1,"Name":"TH","IsAvailableForDelegates":true,"InputGroup":2,"OutputGroups":[1]\},\{"Id":2,"Na me":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]\},\{"Id":3,"Name":"Str_3","IsAvailab leForDelegates":true,"InputGroup":6,"OutputGroups":[3]\},\{"Id":4,"Name":"Str_4","IsAvailableForDelegates":true," InputGroup":-1,"OutputGroups":[4]\},\{"Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]\},\{"Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]\},"InputGroups":[\{"Id":0,"Name":"SDI","Type":"normal","InputParts":[0]\},\{"Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]\},\{"Id":2,"Name":"MIC 2","Type":"normal","InputParts":[]\},\{"Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]\},\{"Id":4,"Name":"MIC 4","Type":"normal","InputParts":[]\},\{"Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]\},\{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[]\},\{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]\},\{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]\},"OutputGroups":[\{"Id":1,"Name":"V-OUT

1","OutputParts":[3]),["Id":2,"Name":"V-OUT 2","OutputParts":[6]),["Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]),["Id":4,"Name":"V-OUT 4","OutputParts":[]]]} }

# 4.3.18.8 AddVideoPartTolinputGroup 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| AddVideoPartTolInputGroup | $\square$ | $\square$ |

Add video input part (by video input parts id) To video input group (by video input group id).

## Structure:

http://localhost:8890/CoCon/Video/AddVideoPartTolInputGroup?VInputGroupId=\{videoInputGroupId\&VInput PartId=\{videoInputPartId\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| VInputGroupId | Video input group Id | int |
| VInputPartId | Video input part Id | int |

## Example:

http://localhost:8890/CoCon/Video/AddVideoPartTolInputGroup?VInputGroupId=2\&VInputPartId=6

## Return:

\{"AddVideoPartTolInputGroup":\{"VideoConfiguration":\{"Id":0,"Name":"API Test 1","Description":"API Test 1","Streams":[\{"Id":1,"Name":"Str_1","IsAvailableForDelegates":true,"InputGroup":2,"OutputGroups":[1]),\{"Id":2," Name":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]\}, \{"Id":3,"Name":"Str_3","IsAvai lableForDelegates":true,"InputGroup":6,"OutputGroups":[3]\}, \{"Id":4,"Name":"Str_4","IsAvailableForDelegates":tru e,"InputGroup":-1,"OutputGroups":[4]\}, \{"Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]\}, \{"Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":-

1,"OutputGroups":[]],\{"InputGroups":\{"Id":0,"Name":"SDI","Type":"normal","InputParts":[0]\}, \{"Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]\}, \{"Id":2,"Name":"MIC 2","Type":"normal","InputParts":[6]\}, \{"Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]\}, \{"Id":4,"Name":"MIC 4","Type":"normal","InputParts":[]\}, \{"Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]\}, \{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[]\}, \{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]\}, \{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]\},"OutputGroups":[\{"Id":1,"Name":"V-OUT 1","OutputParts":[3]\}, \{"Id":2,"Name":"V-OUT 2","OutputParts":[6]\}, \{"Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]\}, \{"Id":4,"Name":"V-OUT 4","OutputParts":[]]]}}

### 4.3.18.9 AddVideoPartToOutputGroup

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| AddVideoPartToOutputGroup | $\square$ | $\square$ |

Add video output parts (by video output parts id) To video output group (by video output group id).

## Structure:

http://localhost:8890/CoCon/Video/AddVideoPartToOutputGroup?VOutputGroupId=\{videoOutputGroupId\& VOutputPartId=\{videoOutputPartId\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |

| VOutputGroupId | Video Output group Id | int |
| :--: | :--: | :--: |
| VOutputPartId | Video Output part Id | int |

# Example: 

http://localhost:8890/CoCon/Video/AddVideoPartToOutputGroup?VOutputGroupId=2\&VOutputPartId=2http://loc alhost:8890/CoCon/Video/AddVideoPartToOutputGroup?VOutputGroupId=2\&VOutputPartId=6

## Return:

>>»["AddVideoPartToOutputGroup":["VideoConfiguration":["Id":7,"Name":"API Test 1","Description":"API Test 1","Streams":[["Id":1,"Name":"TH","IsAvailableForDelegates":true,"InputGroup":2,"OutputGroups":[1]],[Id":2,"Na me":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]],[Id":3,"Name":"Str_3","IdAvailab leForDelegates":true,"InputGroup":6,"OutputGroups":[3]],[Id":4,"Name":"Str_4","IsAvailableForDelegates":true," InputGroup":-1,"OutputGroups":[4]],[Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]],[Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]],"InputGroups":[["Id":0,"Name":"SDI","Type":"normal","InputParts":[0]],[Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]],[Id":2,"Name":"MIC 2","Type":"normal","InputParts":[]],[Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]],[Id":4,"Name":"MIC 4","Type":"normal","InputParts":[]],[Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]],[Id":6,"Name":"MIC 6","Type":"normal","InputParts":[]],[Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]],[Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]],"OutputGroups":[["Id":1,"Name":"V-OUT 1","OutputParts":[3]],[Id":2,"Name":"V-OUT 2","OutputParts":[6]],[Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]],[Id":4,"Name":"V-OUT 4","OutputParts":[]]]}}}

### 4.3.18.10 RemoveVideoPartFromInputGroup

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RemoveVideoPartFromInputGroup | $\square$ | $\square$ |

Remove video input parts (by video input parts id) From video input group (by video input group id).

## Structure:

http://localhost:8890/CoCon/Video/RemoveVideoPartFromInputGroup?VInputGroupId=\{videoInputGroupId\} \&VInputPartId=\{videoInputPartId\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| VInputGroupId | Video input group Id | int |
| VInputPartId | Video input part Id | int |

## Example:

http://localhost:8890/CoCon/Video/RemoveVideoPartFromInputGroup?VInputGroupId=2\&VInputPartId=6

## Return:

>>»["RemoveVideoPartFromInputGroup":["VideoConfiguration":["Id":7,"Name":"API Test 1","Description":"API Test
1","Streams":[["Id":1,"Name":"TH","IsAvailableForDelegates":true,"InputGroup":2,"OutputGroups":[1]],[Id":2,"Na me":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]],[Id":3,"Name":"Str_3","IsAvailab leForDelegates":true,"InputGroup":6,"OutputGroups":[3]],[Id":4,"Name":"Str_4","IsAvailableForDelegates":true," InputGroup":-1,"OutputGroups":[4]],[Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]],[Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]],"InputGroups":[["Id":0,"Name":"SDI","Type":"normal","InputParts":[0]],[Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]],[Id":2,"Name":"MIC 2","Type":"normal","InputParts":[]],[Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]],[Id":4,"Name":"MIC 4","Type":"normal","InputParts":[4]],[Id":5,"Name":"MIC

5","Type":"normal","InputParts":[]},{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[2]},{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]},{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]}],"OutputGroups":{"Id":1,"Name":"V-OUT 1","OutputParts":[3]},{"Id":2,"Name":"V-OUT 2","OutputParts":[6]},{"Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]},{"Id":4,"Name":"V-OUT 4","OutputParts":[]}}}}

### 4.3.18.11 RemoveVideoPartFromOutputGroup

|  API Module | Cocon for Plixus Core | Plixus Core  |
| --- | --- | --- |
|  RemoveVideoPartFromOutputGroup | ☑ | ☐  |

Remove video output parts (by video output parts id) **From** video output group (by video output group id).

**Structure:**

http://localhost:8890/CoCon/Video/RemoveVideoPartFromOutputGroup/?VOutputGroupId={videoOutputGro upId}&VOutputPartId={videoOutputPartId}

**Parameters:**

|  Name | Description | Type  |
| --- | --- | --- |
|  VOutputGroupId | Video Output group Id | int  |
|  VOutputPartId | Video Output part Id | int  |

**Example:**

http://localhost:8890/CoCon/Video/RemoveVideoPartFromOutputGroup/?VOutputGroupId=2&VOutputPartId =6

**Return:**

>>>{"RemoveVideoPartFromOutputGroup":{"VideoConfiguration":{"Id":7,"Name":"API Test 1","Description":"API Test 1","Streams":[{"Id":1,"Name":"TH","IsAvailableForDelegates":true,"InputGroup":2,"OutputGroups":[1]},{"Id":2,"Name":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]},{"Id":3,"Name":"Str_3","IsAvailableForDelegates":true,"InputGroup":6,"OutputGroups":[3]},{"Id":4,"Name":"Str_4","IsAvailableForDelegates":true,"InputGroup":-1,"OutputGroups":[4]},{"Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":-1,"OutputGroups":[]},{"Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":-1,"OutputGroups":[]},"InputGroups":[{"Id":0,"Name":"SDI","Type":"normal","InputParts":[0]},{"Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]},{"Id":2,"Name":"MIC 2","Type":"normal","InputParts":[]},{"Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]},{"Id":4,"Name":"MIC 4","Type":"normal","InputParts":[]},{"Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]},{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[]},{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]},{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]}],"OutputGroups":[{"Id":1,"Name":"V-OUT 1","OutputParts":[3]},{"Id":2,"Name":"V-OUT 2","OutputParts":[]},{"Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]},{"Id":4,"Name":"V-OUT 4","OutputParts":[]}}]}

### 4.3.18.12 SetVideoStreamInputGroup

|  API Module | Cocon for Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetVideoStreamInputGroup | ☑ | ☐  |

**Structure:**

http://localhost:8890/CoCon/Video/SetVideoStreamInputGroup?VideoStreamId={videoStreamId&VInputGro upId={videoInputGroupId}

**Parameters:**

CoCon API 20 Nov 2024 199/212

|  Name | Description | Type  |
| --- | --- | --- |
|  VideoStreamId | Video stream Id (configured Video stream id ) | int  |
|  VInputGroupId | Video input group Id | int  |

# Example:

Enable: http://localhost:8890/CoCon/Video/SetVideoStreamInputGroup?VideoStreamId=1\&VInputGroupId=1 Disable: http://localhost:8890/CoCon/Video/SetVideoStreamInputGroup?VideoStreamId=1\&VInputGroupId=-1

## Return:

>>>["SetVideoStreamInputGroup":["VideoConfiguration":["Id":7,"Name":"API Test 1","Description":"API Test 1","Streams":[["Id":1,"Name":"TH","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[1]],[Id":2,"Na me":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]],[Id":3,"Name":"Str_3","IsAvailab leForDelegates":true,"InputGroup":6,"OutputGroups":[3]],[Id":4,"Name":"Str_4","IsAvailableForDelegates":true," InputGroup":-1,"OutputGroups":[4]],[Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]],[Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]],[InputGroups":[("Id":0,"Name":"SDI","Type":"normal","InputParts":[0]],[Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]],[Id":2,"Name":"MIC 2","Type":"normal","InputParts":[6]],[Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]],[Id":4,"Name":"MIC 4","Type":"normal","InputParts":[4]],[Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]],[Id":6,"Name":"MIC 6","Type":"normal","InputParts":[2]],[Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]],[Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]],"OutputGroups":[("Id":1,"Name":"V-OUT 1","OutputParts":[3]],[Id":2,"Name":"V-OUT 2","OutputParts":[6]],[Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]],[Id":4,"Name":"V-OUT 4","OutputParts":[]]]\}$

### 4.3.18.13 SetVideoStreamOutputGroup

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  SetVideoStreamOutputGroup | $\square$ | $\square$  |

## Structure:

http://localhost:8890/CoCon/Video/SetVideoStreamOutputGroup?VideoStreamId=\{videoStreamId\}\&VOutput GroupIds=\{videoOutputGroupIds

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  VideoStreamId | Video stream Id (configured Video stream id) | int  |
|  VOutputGroupIds | Video output group Ids
Note: can set more than 1 output groups for
single video input stream | Array of int  |

## Example:

Add/Update: http://localhost:8890/CoCon/Video/SetVideoStreamOutputGroup?VideoStreamId=2\&VOutputGroupIds=2,3 Delete: http://localhost:8890/CoCon/Video/SetVideoStreamOutputGroup?VideoStreamId=2\&VOutputGroupIds=

## Return:

>>>["SetVideoStreamOutputGroup":["VideoConfiguration":["Id":7,"Name":"API Test 1","Description":"API Test 1","Streams":[("Id":1,"Name":"TH","IsAvailableForDelegates":true,"InputGroup":6,"OutputGroups":[]],[Id":2,"Na me":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[1,2]],[Id":3,"Name":"Str_3","IsAvail ableForDelegates":true,"InputGroup":6,"OutputGroups":[3]],[Id":4,"Name":"Str_4","IsAvailableForDelegates":tru

e,"InputGroup":-1,"OutputGroups":[4]),{"Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]},{"Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":1,"OutputGroups":[]},"InputGroups":[{"Id":0,"Name":"SDI","Type":"normal","InputParts":[0]},{"Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]},{"Id":2,"Name":"MIC 2","Type":"normal","InputParts":[6]},{"Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]},{"Id":4,"Name":"MIC 4","Type":"normal","InputParts":[4]},{"Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]},{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[2]},{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]},{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]},"OutputGroups":[{"Id":1,"Name":"V-OUT 1","OutputParts":[3]},{"Id":2,"Name":"V-OUT 2","OutputParts":[6]},{"Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]},{"Id":4,"Name":"V-OUT 4","OutputParts":[]}]}}

# 4.3.18.14 SaveActiveVideoConfiguration 

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| SetVideoStreamOutputGroup | $\square$ | $\square$ |

This api call will save the active video preset, if any modification done by api.

## Structure:

http://localhost:8890/CoCon/Video/SaveActiveVideoConfiguration

## Parameters:

| Name | Description | Type |
| :-- | :-- | :-- |
| SaveActiveVideoConfiguration | Save the active preset |  |

## Example:

http://localhost:8890/CoCon/Video/SaveActiveVideoConfiguration

## Return:

{"SaveActiveVideoConfiguration":{"VideoConfiguration":{"Id":7,"Name":"API Test 1","Description":"API Test 1","Streams":[{"Id":1,"Name":"TH_1","IsAvailableForDelegates":true,"InputGroup":0,"OutputGroups":[1]},{"Id":2," Name":"Str_2","IsAvailableForDelegates":true,"InputGroup":4,"OutputGroups":[2]},{"Id":3,"Name":"Str_3","IsAvai lableForDelegates":true,"InputGroup":6,"OutputGroups":[3]},{"Id":4,"Name":"Str_4","IsAvailableForDelegates":tru e,"InputGroup":0,"OutputGroups":[4]},{"Id":5,"Name":"Str_5","IsAvailableForDelegates":true,"InputGroup":0,"Out putGroups":[]},{"Id":6,"Name":"Str_6","IsAvailableForDelegates":true,"InputGroup":0,"OutputGroups":[]},"InputGr oups":[{"Id":0,"Name":"SDI","Type":"normal","InputParts":[0]},{"Id":1,"Name":"MIC 1","Type":"normal","InputParts":[]},{"Id":2,"Name":"MIC 2","Type":"normal","InputParts":[6]},{"Id":3,"Name":"MIC 3","Type":"normal","InputParts":[]},{"Id":4,"Name":"MIC 4","Type":"normal","InputParts":[4]},{"Id":5,"Name":"MIC 5","Type":"normal","InputParts":[]},{"Id":6,"Name":"MIC 6","Type":"normal","InputParts":[2]},{"Id":7,"Name":"MIC 7","Type":"normal","InputParts":[]},{"Id":8,"Name":"MIC 8","Type":"normal","InputParts":[]},"OutputGroups":[{"Id":1,"Name":"V-OUT 1","OutputParts":[3]},{"Id":2,"Name":"V-OUT 2","OutputParts":[6]},{"Id":3,"Name":"V-OUT 3","OutputParts":[7,8,9]},{"Id":4,"Name":"V-OUT 4","OutputParts":[]}]}}

### 4.3.18.15 AddVideoConfiguration

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| AddVideoConfiguration | $\square$ | $\square$ |

This api call will add new video preset to system.

Structure:
http://localhost:8890/CoCon/Video/AddVideoConfiguration?Name={name}&Description={description}

Parameters:

| Name | Description | Type |
| --- | --- | --- |
| Name | Name of the new video preset | string |
| Description | Description of the video preset | string |

Example:
http://localhost:8890/CoCon/Video/AddVideoConfiguration?Name=Custom Video Preset&Description=Custom
Video Preset for validation

Return: int
0 → operation success; 1 → Operation fail (button not found); HTTP status code 404 → no valid license

4.3.18.16 RemoveVideoConfiguration

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| RemoveVideoConfiguration | ☑ | ☐ |

Remove / Delete the video configuration by id.

Note: Active video preset should not be deleted.

Structure:
http://localhost:8890/CoCon/Video/RemoveVideoConfiguration?Id={Id}

Parameters:

| Name | Description | Type |
| --- | --- | --- |
| Id | Video preset Id to delete | int |

Example:
http://localhost:8890/CoCon/Video/RemoveVideoConfiguration?Id=8

Return: int
0 → operation success; 1 → Operation fail (button not found); HTTP status code 404 → no valid license

4.3.18.17 GetVideoConfiguration

| API Module | Cocon for Plixus Core | Plixus Core |
| --- | --- | --- |
| GetVideoConfiguration | ☑ | ☐ |

To get video configuration by Id.

Structure:
http://localhost:8890/CoCon/Video/GetVideoConfiguration?Id={Id}

CoCon API 20 Nov 2024 202/212

# Parameters: 

| Name | Description | Type |
| :--: | :--: | :--: |
| Id | Video preset Id | int |

## Example:

http://localhost:8890/CoCon/Video/GetVideoConfiguration?Id=9

## Return:

\{"GetVideoConfiguration":\{"VideoConfiguration":\{"Id":9,"Name":"Custom_Video_Preset","Description":"Custom_ Video_Preset for validation","Streams":[],"InputGroups":[],"OutputGroups":[]]\}\}

### 4.3.18.18 AddVideoInputGroup

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| AddVideoInputGroup | $\square$ | $\square$ |

Add video input group to video preset.

## Structure:

http://localhost:8890/CoCon/Video/AddVideoInputGroup?ConfigurationId=(configurationId)\&GroupName=(name )

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| Configurationld | Video preset id | int |
| GroupName | Name of the video input group | string |

## Example:

http://localhost:8890/CoCon/Video/AddVideoInputGroup?ConfigurationId=9\&GroupName=T H

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (button not found); HTTP status code $404 \rightarrow$ no valid license

### 4.3.18.19 AddVideoOutputGroup

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :--: | :--: |
| AddVideoOutputGroup | $\square$ | $\square$ |

Add video output group to video preset.

## Structure:

http://localhost:8890/CoCon/Video/AddVideoOutputGroup?ConfigurationId=(configurationId)\&GroupName=(na me)

## Parameters:

| Name | Description | Type |
| :-- | :-- | :-- |

|  Configurationld | Video preset id | int  |
| --- | --- | --- |
|  GroupName | Name of the video output group | string  |

# Example:

http://localhost:8890/CoCon/Video/AddVideoOutputGroup?ConfigurationId=9&GroupName= VOutbox1

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (button not found); HTTP status code $404 \rightarrow$ no valid license

### 4.3.18.20 DeleteVideoInputGroup

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  DeleteVideoInputGroup | $\square$ | $\square$  |

Remove / Delete the video input group from video preset.

## Structure:

http://localhost:8890/CoCon/Video/DeleteVideoInputGroup?ConfigurationId=(configurationld)\&GroupId=(groupl d)

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  Configurationld | Video preset id | int  |
|  Groupld | Video input group Id | int  |

## Example:

http://localhost:8890/CoCon/Video/DeleteVideoInputGroup?ConfigurationId=9\&GroupId= 1

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (button not found); HTTP status code $404 \rightarrow$ no valid license

### 4.3.18.21 DeleteVideoOutputGroup

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  DeleteVideoOutputGroup | $\square$ | $\square$  |

Remove / Delete the video output group from video preset.

## Structure:

http://localhost:8890/CoCon/Video/DeleteVideoOutputGroup?ConfigurationId=(configurationld)\&GroupId=(groupld)

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  |   |   |

| Configurationld | Video preset id | int |
| :--: | :--: | :--: |
| Groupld | Video output group ld | int |

# Example: 

http://localhost:8890/CoCon/Video/DeleteVideoOutputGroup?ConfigurationId=9\&GroupId $=1$

## Return: int

$0 \rightarrow$ operation success; $1 \rightarrow$ Operation fail (button not found); HTTP status code $404 \rightarrow$ no valid license

### 4.3.19 Intercom

### 4.3.19.1 RegisterToSeat

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| RegisterToSeat | $\square$ | $\square$ |

This command is used by the API client to get the information regarding intercom seat and the unit id on the particular seat.

Note: CoCon not allow make new intercom seat by this API call, for making new intercom seat use the edit seat api.

Structure:
http://localhost:8890/CoCon/Intercom/RegisterToSeat/?SeatNr=\{seatNr\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| seatNr | The number of the seat to which we want to <br> know the Unit id on seat | int |

## Example:

Intercom/RegisterToSeat/?SeatNr=4

## Return:

\{"RegisterToSeat":\{"SeatNr":4,"UnitId":8\}\}

### 4.3.19.2 GetCallerList

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| GetCallerList | $\square$ | $\square$ |

This command request the list of possible callers.

## Structure:

http://localhost:8890/CoCon/Intercom/GetCallerList

## Return:

\{"GetCallerList":\{"CallerList":\{"Id":0,"Name":"Booth 1","State":0\},\{"Id":1,"Name":"Seat 5","State":0\},\{"Id":2,"Name":"Seat 8","State":0\},\{"Id":3,"Name":"Seat 10","State":0\},\{"Id":4,"Name":"Seat 9","State":0\}]\}\}

# 4.3.19.3 RequestConversation

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  RequestConversation | $\square$ | $\square$  |

Request conversation from unit to the caller.

## Structure:

http://localhost:8890/CoCon/Intercom/RequestConversation/?FromUid={fromUid} \& ToCid={toCid}

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  FromUid | The unit id we received from CoCon | int  |
|  ToCid | The caller ID of the caller we want to call to | int  |

## Example:

Intercom/RequestConversation/?FromUid=9\&ToCid=2

## Return:

0 -> operation success; 1 -> operation failed; -1 -> exception

## Update Events:

$\{^{2}$ CallerStateUpdated":{"CallerId":4,"State":1$\}$ {^CallerUnitStateUpdated":{^UnitId":9,"State":2$\}}$ {^CallerStateUpdated":{^CallerId":2,"State":1$\}$ {^CallerUnitStateUpdated":{^UnitId":8,"State":2$\}}$ {^ConversationRequested ":{^FromCid":4,"FromUid":9,"ToId":2$\}$

### 4.3.19.4 AcceptConversation

|  API Module | Cocon for
Plixus Core | Plixus Core  |
| --- | --- | --- |
|  AcceptConversation | $\square$ | $\square$  |

Accept the conversation from the Unit id to caller id

## Structure:

http://localhost:8890/CoCon/Intercom/AcceptConversation/?FromUid={fromUid} \& ToCid={toCid}

## Parameters:

|  Name | Description | Type  |
| --- | --- | --- |
|  FromUid | The unit id we received from CoCon | int  |
|  ToCid | The caller ID of the caller we want to call to | int  |

## Example:

Intercom/AcceptConversation/?FromUid=8\&ToCid=4

## Return:

0 -> operation success; 1 -> operation failed; -1 -> exception

# Update Events: 

\{"ConversationAccepted":\{"FromCid":2,"FromUid":8,"Told":9\}\}

### 4.3.19.5 EndConversation

| API Module | Cocon for <br> Plixus Core | Plixus Core |
| :-- | :-- | :-- |
| EndConversation | $\square$ | $\square$ |

End conversation from unit id to caller id.

## Structure:

http://localhost:8890/CoCon/Intercom/EndConversation/?FromUid=\{fromUid\}\&ToCid=\{toCid\}

## Parameters:

| Name | Description | Type |
| :--: | :--: | :--: |
| FromUid | The unit id we received from CoCon | int |
| ToCid | The caller ID of the caller we want to call to | int |

## Example:

Intercom/EndConversation/?FromUid=9\&ToCid=2

## Return:

0 -> operation success; 1 -> operation failed; -1 -> exception

## Update Events:

\{"CallerStateUpdated":\{"CallerId":4,"State":0\}\}
\{"CallerUnitStateUpdated":\{"UnitId":9,"State":1\}\}
\{"CallerStateUpdated":\{"CallerId":2,"State":0\}\}
\{"CallerUnitStateUpdated":\{"UnitId":8,"State":1\}\}
\{"ConversationEnded":\{"FromCid":4,"FromUid":9,"Told":8\}\}

# 5 Future commands 

### 5.1 Server to client

### 5.2 Client to server

# 6 Best practice for use of API 

### 6.1 Setting up and operating the CoCon API connection

### 6.1.1 General

The CoCon API connection consists of a number of URI's (Uniform Resource Identifier) which are exchanged between the API client and the CoCon Server over a TCP/IP-connection.
Basically, the CoCon API uses two (or more) parallel HTTP-connections. These are the following:

- A "notification" connection that the client and Server keep open in case any information need to be transferred from the Server to the client.
- Any other connection that is used to transfer information from the client to the Server.

The notification connection should be initialized by the client, and is kept open by both sides. Then one of two things can happen:

- The Server has information to send to the client and uses the notification connection for this. The information is transferred and the connection is closed (as per the HTTP standard). After this, the client needs to create a new notification connection. The Server will guarantee that no information is lost during this short period where the client has no connection to the Server. Note that the new notification connection needs to be created within 30 seconds. If this does not happen, the Server will discard the client data.
- The HTTP-connection times out before the Server has any information to send to the client. At this point, the client needs to create a new notification connection. Again, the Server will guarantee that no information is lost.


### 6.1.2 Wireshark log screenshot of API connection

In below screenshot an example of communication between API client and Cocon/ERS server is shown : this illustrates the following

1) Setup connection between server and client ; a connection ID is returned
2) Client sends a notification request with this connection ID to request information
3) After some time, If there is no information to be send, server will return "request time out", which has to be replied immediately by a new notification request
4) $\qquad$
5) Each time information was send by the server (e.g. mic button event) this has to be followed by a new notification request by the client

|  332 3.128278 | 101.168.8.188 | 101.168.8.189 | HTTP | 111 GST (Codon/Connect HTTP/1.1  |
| --- | --- | --- | --- | --- |
|  337 3.170482 | 101.168.8.189 | 101.168.8.189 | TCP | 68 8898 = 01487 [ACX] Seq=1 Ack=58 AEx=256 Len=0  |
|  5886 43.851740 | 101.168.8.189 | 101.168.8.189 | HTTP | 173 HTTP/1.1 488 Request Timeout  |
|  5888 43.863926 | 101.168.8.189 | 101.168.8.189 | HTTP | 174 HTTP/1.1 288 50 (application/jun)  |
|  5889 43.863913 | 101.168.8.189 | 101.168.8.189 | TCP | 59 01487 = 8898 [ACX] Seq=58 AEx=256 Len=0  |
|  5818 43.864020 | 101.168.8.189 | 101.168.8.189 | HTTP | 156 GST (Codon/Notification/10=281590;e-a589-405F-S16a-03887481e010 HTTP/1.1  |
|  5815 43.898566 | 101.168.8.189 | 101.168.8.189 | HTTP | 173 HTTP/1.1 488 Request Timeout  |
|  5816 43.891284 | 101.168.8.189 | 101.168.8.189 | HTTP | 156 GST (Codon/Notification/10=281590;e-a589-405F-S16a-03887481e010 HTTP/1.1  |
|  5817 43.918880 | 101.168.8.189 | 101.168.8.189 | TCP | 68 8898 = 01487 [ACX] Seq=582 AEx=256 Len=0  |
|  5828 43.941028 | 101.168.8.189 | 101.168.8.189 | TCP | 68 8898 = 01050 [ACX] Seq=108 AEx=283 AEx=251 Len=0  |
|  12450 183.889876 | 101.168.8.189 | 101.168.8.189 | HTTP | 173 HTTP/1.1 488 Request Timeout  |
|  12450 183.889873 | 101.168.8.189 | 101.168.8.189 | HTTP | 156 GST (Codon/Notification/10=281590;e-a589-405F-S16a-03887481e010 HTTP/1.1  |
|  12461 183.985120 | 101.168.8.189 | 101.168.8.189 | HTTP | 173 HTTP/1.1 488 Request Timeout  |
|  12462 183.985053 | 101.168.8.189 | 101.168.8.189 | HTTP | 156 GST (Codon/Notification/10=281590;e-a589-405F-S16a-03887481e010 HTTP/1.1  |
|  12467 183.998588 | 101.168.8.189 | 101.168.8.189 | TCP | 68 8898 = 01487 [ACX] Seq=861 AEx=262 AEx=255 Len=0  |
|  12468 183.992922 | 101.168.8.189 | 101.168.8.189 | TCP | 68 8898 = 01050 [ACX] Seq=199 AEx=295 AEx=256 Len=0  |
|  13323 111.461271 | 101.168.8.189 | 101.168.8.189 | HTTP | 204 HTTP/1.1 288 50 (application/jun)  |
|  13324 111.461992 | 101.168.8.189 | 101.168.8.189 | HTTP | 156 GST (Codon/Notification/10=281590;e-a589-405F-S16a-03887481e010 HTTP/1.1  |
|  13331 111.584048 | 101.168.8.189 | 101.168.8.189 | HTTP | 204 HTTP/1.1 288 50 (application/jun)  |
|  13332 111.589533 | 101.168.8.189 | 101.168.8.189 | HTTP | 156 GST (Codon/Notification/10=281590;e-a589-405F-S16a-03887481e010 HTTP/1.1  |
|  13333 111.586358 | 101.168.8.189 | 101.168.8.189 | HTTP | 557 HTTP/1.1 288 50 (application/jun)  |
|  13334 111.586771 | 101.168.8.189 | 101.168.8.189 | HTTP | 156 GST (Codon/Notification/10=281590;e-a589-405F-S16a-03887481e010 HTTP/1.1  |
|  13343 111.561213 | 101.168.8.189 | 101.168.8.189 | TCP | 68 8898 = 01050 [ACX] Seq=198 AEx=511 AEx=255 Len=0  |
|  19379 163.811423 | 101.168.8.189 | 101.168.8.189 | HTTP | 173 HTTP/1.1 488 Request Timeout  |
|  19388 163.911288 | 101.168.8.189 | 101.168.8.189 | HTTP | 156 GST (Codon/Notification/10=281590;e-a589-405F-S16a-03887481e010 HTTP/1.1  |
|  19391 163.962781 | 101.168.8.189 | 101.168.8.189 | TCP | 68 8898 = 01487 [ACX] Seq=588 AEx=264 AEx=256 Len=0  |

# 6.2 Advised way of working 

In order to optimize the performance of the external developed REST API client application we propose the following:

- Make sure that only a single connect is done.
- The id returned by the connect call must be used to make a quickly as possible a notification call. This notification call can:
- Return immediately if the id is invalid (HTTP 400) $\rightarrow$ In this case a new connection should be opened. This can e.g. take place if Plixus CU is restarted.
- Return after a period of time (30sec) when no message is send (HTTP 408). $\rightarrow$ In this case a new notification call should be opened as quick as possible.
- Return a message before time-out $\rightarrow$ In this case the message should be send/processed and a new notification call should be openend as quick as possible.
- It is strongly advised that for quick handling of messages, there is a separate thread for handling notifications. It should be avoided that there are gaps in open notification calls
- In case REST API client program also involved business logic and/or UI, this is best placed in separate thread with quick communication from the notification thread.

The above way of working will guarantee quick and proper handling of REST API notifcations.
A schematic representation is given in the picture on next page.

## Important remark:

When opening a connection, by default notification from ALL modules will be received. One can unsubscribe to specific modules. The advantages of unsubscribing to modules for which the notification are not needed/desired are the following:

- Plixus CU will not be processing and sending out unwanted messages
- Client API program will not spend any time receiving and processing packets which are of no interest for the application.

![img-4.jpeg](img-4.jpeg)

# 6.3 To be avoided 

Common mistake is that with very short intervals, new connections are established by the API client : this creates lots of unnecessary traffic, which is to be avoided. So through notification requests, the ongoing connection needs to be reused and kept open.

