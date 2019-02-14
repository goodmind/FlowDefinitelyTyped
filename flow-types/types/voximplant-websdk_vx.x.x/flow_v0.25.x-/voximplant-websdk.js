declare module "voximplant-websdk" {
  declare export default typeof VoxImplant;

  declare var npm$namespace$VoxImplant: {
    getInstance: typeof VoxImplant$getInstance,
    version: typeof VoxImplant$version,

    Events: typeof VoxImplant$Events,
    IMEvents: typeof VoxImplant$IMEvents,
    CallEvents: typeof VoxImplant$CallEvents,
    ChatStateType: typeof VoxImplant$ChatStateType,
    IMErrorType: typeof VoxImplant$IMErrorType,
    MessageEventType: typeof VoxImplant$MessageEventType,
    OperatorACDStatuses: typeof VoxImplant$OperatorACDStatuses,
    RosterItemEvent: typeof VoxImplant$RosterItemEvent,
    SubscriptionRequestType: typeof VoxImplant$SubscriptionRequestType,
    UserStatuses: typeof VoxImplant$UserStatuses,
    ChatRoomOperationType: typeof VoxImplant$ChatRoomOperationType
  };

  /**
   * VoxImplant.Client general events
   */

  declare var VoxImplant$Events: {|
    +AuthResult: 0, // 0
    +ConnectionClosed: 1, // 1
    +ConnectionEstablished: 2, // 2
    +ConnectionFailed: 3, // 3
    +IncomingCall: 4, // 4
    +MicAccessResult: 5, // 5
    +NetStatsReceived: 6, // 6
    +PlaybackFinished: 7, // 7
    +SDKReady: 8, // 8
    +SourcesInfoUpdated: 9 // 9
  |};

  /**
   * VoxImplant.Client Instant Messaging and Presence events
   */

  declare var VoxImplant$IMEvents: {|
    +ChatHistoryReceived: 0, // 0
    +ChatRoomBanList: 1, // 1
    +ChatRoomCreated: 2, // 2
    +ChatRoomError: 3, // 3
    +ChatRoomHistoryReceived: 4, // 4
    +ChatRoomInfo: 5, // 5
    +ChatRoomInvitation: 6, // 6
    +ChatRoomInviteDeclined: 7, // 7
    +ChatRoomMessageModified: 8, // 8
    +ChatRoomMessageNotModified: 9, // 9
    +ChatRoomMessageReceived: 10, // 10
    +ChatRoomMessageRemoved: 11, // 11
    +ChatRoomNewParticipant: 12, // 12
    +ChatRoomOperation: 13, // 13
    +ChatRoomParticipantExit: 14, // 14
    +ChatRoomParticipants: 15, // 15
    +ChatRoomPresenceUpdate: 16, // 16
    +ChatRoomStateUpdate: 17, // 17
    +ChatRoomSubjectChange: 18, // 18
    +ChatRoomsDataReceived: 19, // 19
    +ChatStateUpdate: 20, // 20
    +MessageModified: 21, // 21
    +MessageNotModified: 22, // 22
    +MessageReceived: 23, // 23
    +MessageRemoved: 24, // 24
    +MessageStatus: 25, // 25
    +PresenceUpdate: 26, // 26
    +RosterItemChange: 27, // 27
    +RosterPresenceUpdate: 28, // 28
    +RosterReceived: 29, // 29
    +SubscriptionRequest: 30, // 30
    +SystemError: 31, // 31
    +UCConnected: 32, // 32
    +UCDisconnected: 33 // 33
  |};

  /**
   * VoxImplant.Call events
   */

  declare var VoxImplant$CallEvents: {|
    +Connected: 0, // 0
    +Disconnected: 1, // 1
    +Failed: 2, // 2
    +ICETimeout: 3, // 3
    +InfoReceived: 4, // 4
    +MessageReceived: 5, // 5
    +ProgressToneStart: 6, // 6
    +ProgressToneStop: 7, // 7
    +TransferComplete: 8, // 8
    +TransferFailed: 9 // 9
  |};

  /**
   * Event dispatched after login , loginWithOneTimeKey, requestOneTimeLoginKey or loginWithCode function call
   */
  declare interface VoxImplant$EventTypes$AuthResult {
    /**
     * Auth error code, possible values are: 301 - code for 'code' auth type was sent, 302 - key for 'onetimekey' auth type received, 401 - invalid password, 404 - invalid username, 403 - user account is frozen, 500 - internal error
     */
    code?: number;

    /**
     * Authorized user's display name
     */
    displayName?: string;

    /**
     * This parameter is used to calculate hash parameter for loginWithOneTimeKey method. AuthResult with the key dispatched after requestOneTimeLoginKey method was called
     */
    key?: string;

    /**
     * Application options
     */
    options?: Object;

    /**
     * True in case of successful authorization, false - otherwise
     */
    result: boolean;
  }

  /**
   * Event dispatched if connection to VoxImplant Cloud was closed because of network problems. See connect function
   */
  declare interface VoxImplant$EventTypes$ConnectionClosed {}

  /**
   * Event dispatched after connection to VoxImplant Cloud was established successfully. See connect function
   */
  declare interface VoxImplant$EventTypes$ConnectionEstablished {}

  /**
   * Event dispatched if connection to VoxImplant Cloud couldn't be established. See connect function
   */
  declare interface VoxImplant$EventTypes$ConnectionFailed {
    /**
     * Failure reason description
     */
    message: string;
  }

  /**
   * Event dispatched when there is a new incoming call to current user
   */
  declare interface VoxImplant$EventTypes$IncomingCall {
    /**
     * Incoming call instance. See VoxImplant.Call for details
     */
    call: VoxImplant$Call;

    /**
     * Optional SIP headers received with the message
     */
    headers?: Object;
  }

  /**
   * Event dispatched after user interaction with the mic access dialog.
   */
  declare interface VoxImplant$EventTypes$MicAccessResult {
    /**
     * True is access was allowed, false - otherwise
     */
    result: boolean;
  }

  /**
   * Event dispatched when packet loss data received from VoxImplant servers
   */
  declare interface VoxImplant$EventTypes$NetStatsReceived {
    /**
     * Network info object
     */
    stats: VoxImplant$NetworkInfo;
  }

  /**
   * Event dispatched after sound playback was stopped. See playToneScript and stopPlayback functions
   */
  declare interface VoxImplant$EventTypes$PlaybackFinished {}

  /**
   * Event dispatched after SDK was successfully initialized after init function call
   */
  declare interface VoxImplant$EventTypes$SDKReady {
    /**
     * SDK version
     */
    version: string;
  }

  /**
   * Event dispatched when audio and video sources information was updated. See audioSources and videoSources for details
   */
  declare interface VoxImplant$EventTypes$SourcesInfoUpdated {}

  /**
   * Event dispatched after call was connected
   */
  declare interface VoxImplant$CallEventTypes$Connected {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;

    /**
     * Optional SIP headers received with the message
     */
    headers?: Object;
  }

  /**
   * Event dispatched after call was disconnected
   */
  declare interface VoxImplant$CallEventTypes$Disconnected {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;

    /**
     * Optional SIP headers received with the message
     */
    headers?: Object;
  }

  /**
   * Event dispatched after if call failed
   */
  declare interface VoxImplant$CallEventTypes$Failed {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;

    /**
     * Status code of the call (i.e. 486)
     */
    code: number;

    /**
     * Optional SIP headers received with the message
     */
    headers?: Object;

    /**
     * Status message of call failure (i.e. Busy Here)
     */
    reason: string;
  }

  /**
   * Event dispatched in case of network connection problem between 2 peers
   */
  declare interface VoxImplant$CallEventTypes$ICETimeout {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when INFO message is received
   */
  declare interface VoxImplant$CallEventTypes$InfoReceived {
    /**
     * Content of the message
     */
    body: string;

    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;

    /**
     * Optional SIP headers received with the message
     */
    headers?: Object;

    /**
     * MIME type of INFO message
     */
    mimeType: string;
  }

  /**
   * Event dispatched when text message is received
   */
  declare interface VoxImplant$CallEventTypes$MessageReceived {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;

    /**
     * Content of the message
     */
    text: string;

    /**
     * Message content
     */
    content: string;

    /**
     * User id (of the user who sent the message)
     */
    id: string;

    /**
     * Message id
     */
    message_id: string;

    /**
     * Resource name
     */
    resource?: string;

    /**
     * User id (of the user to whom the message was sent)
     */
    to: string;
  }

  /**
   * Event dispatched when progress tone playback starts
   */
  declare interface VoxImplant$CallEventTypes$ProgressToneStart {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when progress tone playback stops
   */
  declare interface VoxImplant$CallEventTypes$ProgressToneStop {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when call has been transferred successfully
   */
  declare interface VoxImplant$CallEventTypes$TransferComplete {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when call transfer failed
   */
  declare interface VoxImplant$CallEventTypes$TransferFailed {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when chat history received
   */
  declare interface VoxImplant$IMEventTypes$ChatHistoryReceived {
    /**
     * User id
     */
    id: string;

    /**
     * Message id specified in getInstantMessagingHistory method
     */
    message_id: string;

    /**
     * List of messages
     */
    messages: VoxImplant$IMHistoryMessage[];
  }

  /**
   * Event dispatched when info about banned chat room participants received
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomBanList {
    /**
     * Participants list
     */
    participants: VoxImplant$ChatRoomParticipant[];

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched if chat room was created successfully
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomCreated {
    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched in case of error while chat room operation
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomError {
    /**
     * Error code
     */
    code: string;

    /**
     * Operation name
     */
    operation: string;

    /**
     * Room id
     */
    room: string;

    /**
     * Error description
     */
    text: string;
  }

  /**
   * Event dispatched when chat room history received
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomHistoryReceived {
    /**
     * Message id specified in getInstantMessagingHistory method
     */
    message_id: string;

    /**
     * List of messages
     */
    messages: VoxImplant$IMHistoryMessage[];

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched when user joins chat room
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomInfo {
    /**
     * Room features
     */
    features: number;

    /**
     * Room info object
     */
    info: VoxImplant$IMEventTypes$ChatRoomInfo;

    /**
     * Room id
     */
    room: string;

    /**
     * Room name
     */
    room_name: string;

    /**
     * Creation date
     */
    creationdate: string;

    /**
     * Room description
     */
    description: string;

    /**
     * Number of chat room participants
     */
    occupants: number;

    /**
     * Room's name / subject
     */
    subject: string;
  }

  /**
   * Event dispatched when invitation to chat room received
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomInvitation {
    /**
     * The body of the message
     */
    body: string;

    /**
     * User id (inviter)
     */
    from: string;

    /**
     * Password for the room
     */
    password: string;

    /**
     * A reason of the invitation
     */
    reason: string;

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched if an invitation to chat room was declined by the invitee
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomInviteDeclined {
    /**
     * User id (invitee)
     */
    invitee: string;

    /**
     * A reason of the invitation
     */
    reason: string;

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched when chat room message modified
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomMessageModified {
    /**
     * New message content
     */
    content: string;

    /**
     * User id
     */
    from: string;

    /**
     * Modified message id
     */
    message_id: string;

    /**
     * Private/public message flag
     */
    private_message: string;

    /**
     * Resource name
     */
    resource: string;

    /**
     * Room id
     */
    room: string;

    /**
     * Message timestamp
     */
    timestamp: string;
  }

  /**
   * Event dispatched in case of error during chat room message modification
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomMessageNotModified {
    /**
     * Error code
     */
    code: number;

    /**
     * Message id
     */
    message_id: string;

    /**
     * Private/public message flag
     */
    private_message: string;

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched when instant message was sent to chat room
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomMessageReceived {
    /**
     * Message content
     */
    content: string;

    /**
     * User id
     */
    from: string;

    /**
     * Modified message id
     */
    message_id: string;

    /**
     * Private/public message flag
     */
    private_message: string;

    /**
     * Resource name
     */
    resource: string;

    /**
     * Room id
     */
    room: string;

    /**
     * Message timestamp
     */
    timestamp: string;
  }

  /**
   * Event dispatched when chat room message removed
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomMessageRemoved {
    /**
     * User id
     */
    from: string;

    /**
     * Modified message id
     */
    message_id: string;

    /**
     * Private/public message flag
     */
    private_message: string;

    /**
     * Resource name
     */
    resource: string;

    /**
     * Room id
     */
    room: string;

    /**
     * Message timestamp
     */
    timestamp: string;
  }

  /**
   * Event dispatched when new participant joined the chat room
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomNewParticipant {
    /**
     * User display name
     */
    displayName: string;

    /**
     * User id
     */
    participant: string;

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched when chat room participant was banned/unbanned
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomOperation {
    /**
     * Room id
     */
    room: string;

    /**
     * Operation type
     */
    operation: VoxImplant$ChatRoomOperationType;

    /**
     * Operation result: true/false - success/failure
     */
    result: boolean;
  }

  /**
   * Event dispatched when participant left the chat room
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomParticipantExit {
    /**
     * User id
     */
    participant: string;

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched when info about chat room participants received
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomParticipants {
    /**
     * Participants list
     */
    participants: VoxImplant$ChatRoomParticipant[];

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched if chat room participant presence status was updated
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomPresenceUpdate {
    /**
     * Optional presence message
     */
    message: string;

    /**
     * Participant info
     */
    participant: VoxImplant$ParticipantInfo;

    /**
     * Current presence status
     */
    presence: VoxImplant$UserStatuses;

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched when chat session state updated
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomStateUpdate {
    /**
     * User id
     */
    from: string;

    /**
     * Resource name
     */
    resource: string;

    /**
     * Room id
     */
    room: string;

    /**
     * Current chat session state
     */
    state: VoxImplant$ChatStateType;
  }

  /**
   * Event dispatched if chat room subject was changed
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomSubjectChange {
    /**
     * User id who changed the subject
     */
    id: string;

    /**
     * Resource name
     */
    resource: string;

    /**
     * Room id
     */
    room: string;

    /**
     * New subject
     */
    subject: string;
  }

  /**
   * Event dispatched when information about chat rooms where user participates received
   */
  declare interface VoxImplant$IMEventTypes$ChatRoomsDataReceived {
    /**
     * Rooms list
     */
    rooms: VoxImplant$ChatRoom[];
  }

  /**
   * Event dispatched when chat session state updated
   */
  declare interface VoxImplant$IMEventTypes$ChatStateUpdate {
    /**
     * User id
     */
    id: string;

    /**
     * Resource name
     */
    resource?: string;

    /**
     * Current chat session state. See VoxImplant.ChatStateType enum
     */
    state: VoxImplant$ChatStateType;
  }

  /**
   * Event dispatched when instant message was modified by user
   */
  declare interface VoxImplant$IMEventTypes$MessageModified {
    /**
     * Message new content
     */
    content: string;

    /**
     * User id (of the user who sent the message)
     */
    id: string;

    /**
     * Message id
     */
    message_id: string;

    /**
     * User id (of the user to whom the message was sent)
     */
    to: string;
  }

  /**
   * Event dispatched if error happened during instant message modification
   */
  declare interface VoxImplant$IMEventTypes$MessageNotModified {
    /**
     * Message new content
     */
    code: number;

    /**
     * Message id
     */
    message_id: string;

    /**
     * User id (of the user to whom the message was sent)
     */
    to: string;
  }

  /**
   * Event dispatched when text message is received
   */
  declare interface VoxImplant$IMEventTypes$MessageReceived {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;

    /**
     * Content of the message
     */
    text: string;

    /**
     * Message content
     */
    content: string;

    /**
     * User id (of the user who sent the message)
     */
    id: string;

    /**
     * Message id
     */
    message_id: string;

    /**
     * Resource name
     */
    resource?: string;

    /**
     * User id (of the user to whom the message was sent)
     */
    to: string;
  }

  /**
   * Event dispatched when instant message was removed by user
   */
  declare interface VoxImplant$IMEventTypes$MessageRemoved {
    /**
     * User id (of the user who sent the message)
     */
    id: string;

    /**
     * Message id
     */
    message_id: string;

    /**
     * User id (of the user to whom the message was sent)
     */
    to: string;
  }

  /**
   * Event dispatched when sent message status changed
   */
  declare interface VoxImplant$IMEventTypes$MessageStatus {
    /**
     * User id
     */
    id: string;

    /**
     * Message id
     */
    message_id: string;

    /**
     * Resource name
     */
    resource?: string;

    /**
     * Message event type. See VoxImplant.MessageEventType enum
     */
    type: VoxImplant$MessageEventType;
  }

  /**
   * Event dispatched when self presence updated
   */
  declare interface VoxImplant$IMEventTypes$PresenceUpdate {
    /**
     * User id
     */
    id: string;

    /**
     * Status message
     */
    message: string;

    /**
     * Current presence status
     */
    presence: VoxImplant$UserStatuses;

    /**
     * Resource name
     */
    resource?: string;
  }

  /**
   * Event dispatched when roster item changed
   */
  declare interface VoxImplant$IMEventTypes$RosterItemChange {
    /**
     * User display name
     */
    displayName: string;

    /**
     * Roster item groups
     */
    groups: string[];

    /**
     * User id
     */
    id: string;

    /**
     * Resource name
     */
    resource?: string;

    /**
     * Roster item event type. See VoxImplant.RosterItemEvent enum
     */
    type: VoxImplant$RosterItemEvent;
  }

  /**
   * Event dispatched when roster item presence update happened
   */
  declare interface VoxImplant$IMEventTypes$RosterPresenceUpdate {
    /**
     * User id
     */
    id: string;

    /**
     * Status message
     */
    message?: string;

    /**
     * Current presence status
     */
    presence: VoxImplant$UserStatuses;

    /**
     * Resource name
     */
    resource?: string;
  }

  /**
   * Event dispatched when roster data received
   */
  declare interface VoxImplant$IMEventTypes$RosterReceived {
    /**
     * User id
     */
    id: string;

    /**
     * Array contains VoxImplant.RosterItem elements
     */
    roster: VoxImplant$RosterItem[];
  }

  /**
   * Event dispatched when some user tries to add current user into his roster. Current user can confirm or reject the subscription, then VoxImplant.IMEvents.RosterItemChange will be dispatched on for user that made the request
   */
  declare interface VoxImplant$IMEventTypes$SubscriptionRequest {
    /**
     * User id
     */
    id: string;

    /**
     * Optional message
     */
    message?: string;

    /**
     * Resource name
     */
    resource?: string;

    /**
     * Message event type. See VoxImplant.SubscriptionRequestType enum
     */
    type: VoxImplant$SubscriptionRequestType;
  }

  /**
   * Event dispatched in case of instant messaging subsystem error
   */
  declare interface VoxImplant$IMEventTypes$SystemError {
    /**
     * Error data object, contains the error details
     */
    errorData: Object;

    /**
     * Error type
     */
    errorType: VoxImplant$IMErrorType;
  }

  /**
   * Event dispatched when instant messaging and presence subsystems (UC) are online
   */
  declare interface VoxImplant$IMEventTypes$UCConnected {}

  /**
   * Event dispatched when instant messaging and presence subsystems (UC) are offline
   */
  declare interface VoxImplant$IMEventTypes$UCDisconnected {}

  declare type VoxImplant$VoxImplantEvent =
    | EventTypes$AuthResult
    | EventTypes$ConnectionClosed
    | EventTypes$ConnectionEstablished
    | EventTypes$ConnectionFailed
    | EventTypes$IncomingCall
    | EventTypes$MicAccessResult
    | EventTypes$NetStatsReceived
    | EventTypes$PlaybackFinished
    | EventTypes$SDKReady
    | EventTypes$SourcesInfoUpdated;

  declare type VoxImplant$VoxImplantCallEvent =
    | CallEventTypes$Connected
    | CallEventTypes$Disconnected
    | CallEventTypes$Failed
    | CallEventTypes$InfoReceived
    | CallEventTypes$MessageReceived
    | CallEventTypes$ProgressToneStart
    | CallEventTypes$ProgressToneStop
    | CallEventTypes$TransferComplete
    | CallEventTypes$TransferFailed;

  declare type VoxImplant$VoxImplantIMEvent =
    | IMEventTypes$ChatHistoryReceived
    | IMEventTypes$ChatRoomBanList
    | IMEventTypes$ChatRoomCreated
    | IMEventTypes$ChatRoomError
    | IMEventTypes$ChatRoomHistoryReceived
    | IMEventTypes$ChatRoomInfo
    | IMEventTypes$ChatRoomInvitation
    | IMEventTypes$ChatRoomInviteDeclined
    | IMEventTypes$ChatRoomMessageModified
    | IMEventTypes$ChatRoomMessageNotModified
    | IMEventTypes$ChatRoomMessageReceived
    | IMEventTypes$ChatRoomMessageRemoved
    | IMEventTypes$ChatRoomNewParticipant
    | IMEventTypes$ChatRoomOperation
    | IMEventTypes$ChatRoomParticipantExit
    | IMEventTypes$ChatRoomParticipants
    | IMEventTypes$ChatRoomPresenceUpdate
    | IMEventTypes$ChatRoomStateUpdate
    | IMEventTypes$ChatRoomSubjectChange
    | IMEventTypes$ChatRoomsDataReceived
    | IMEventTypes$ChatStateUpdate
    | IMEventTypes$MessageModified
    | IMEventTypes$MessageNotModified
    | IMEventTypes$MessageReceived
    | IMEventTypes$MessageRemoved
    | IMEventTypes$MessageStatus
    | IMEventTypes$PresenceUpdate
    | IMEventTypes$RosterItemChange
    | IMEventTypes$RosterPresenceUpdate
    | IMEventTypes$RosterReceived
    | IMEventTypes$SubscriptionRequest
    | IMEventTypes$SystemError
    | IMEventTypes$UCConnected
    | IMEventTypes$UCDisconnected;

  /**
   * VoxImplant SDK Configuration
   */
  declare interface VoxImplant$Config {
    /**
     * XSS protection for inbound instant messages that can contain HTML content
     */
    imXSSprotection?: boolean;

    /**
     * If set to true microphone access dialog will be shown and all functions will become available only after user allowed access
     */
    micRequired?: boolean;

    /**
     * Automatically plays progress tone by means of SDK according to specified progressToneCountry
     */
    progressTone?: boolean;

    /**
     * Country code for progress tone generated automatically if progressTone set to true
     */
    progressToneCountry?: string;

    /**
     * Show debug info in console
     */
    showDebugInfo?: boolean;

    /**
     * Show Flash Settings panel instead of standard Allow/Deny dialog (in Flash mode)
     */
    showFlashSettings?: boolean;

    /**
     * Id of HTMLElement that will be used as container for Flash component of SDK (Mic/cam access dialog will appear in the container). If micRequired set to true element should have size not less than 215x138 (px) for access dialog to be shown
     */
    swfContainer?: string;

    /**
     * Force VoxImplant to use Flash (WebRTC is used if available by default)
     */
    useFlashOnly?: boolean;

    /**
     * Force VoxImplant to use WebRTC (WebRTC is used if available by default). Error will be thrown if WebRTC in unavailable
     */
    useRTCOnly?: boolean;

    /**
     * Default constraints that will be applied while the next attachRecordingDevice function call or if micRequired set to true
     */
    videoConstraints?: VoxImplant$VideoSettings | boolean;

    /**
     * Video support
     */
    videoSupport?: boolean;
  }

  /**
   * VoxImplant login options
   */
  declare interface VoxImplant$LoginOptions {
    /**
     * If set to false Web SDK can be used only for ACD status management
     */
    receiveCalls?: boolean;

    /**
     * If set to true user presence will be changed automatically while a call
     */
    serverPresenceControl?: boolean;
  }

  /**
   * Audio playback device info
   */
  declare interface VoxImplant$AudioOutputInfo {
    /**
     * Device id that can be used to choose audio playback device
     */
    id: number | string;

    /**
     * Device name , in WebRTC mode populated with real data only when app has been opened using HTTPS protocol
     */
    name: string;
  }

  /**
   * Audio recording device info
   */
  declare interface VoxImplant$AudioSourceInfo {
    /**
     * Device id that can be used to choose audio recording device
     */
    id: number | string;

    /**
     * Device name , in WebRTC mode populated with real data only when app has been opened using HTTPS protocol
     */
    name: string;
  }

  /**
   * Video recording device info
   */
  declare interface VoxImplant$VideoSourceInfo {
    /**
     * Device id that can be used to choose video recording device
     */
    id: number | string;

    /**
     * Device name , in WebRTC mode populated with real data only when app has been opened using HTTPS protocol
     */
    name: string;
  }

  declare var VoxImplant$ChatStateType: {|
    +Active: 0, // 0
    +Composing: 1, // 1
    +Gone: 2, // 2
    +Inactive: 3, // 3
    +Invalid: 4, // 4
    +Paused: 5 // 5
  |};

  declare var VoxImplant$IMErrorType: {|
    +RemoteFunctionError: 0, // 0
    +Error: 1, // 1
    +RosterError: 2 // 2
  |};

  declare var VoxImplant$MessageEventType: {|
    +Cancel: 0, // 0
    +Composing: 1, // 1
    +Delivered: 2, // 2
    +Displayed: 3, // 3
    +Invalid: 4, // 4
    +Offline: 5 // 5
  |};

  declare var VoxImplant$OperatorACDStatuses: {|
    +AfterService: 0, // 0
    +DND: 1, // 1
    +InService: 2, // 2
    +Offline: 3, // 3
    +Online: 4, // 4
    +Ready: 5, // 5
    +Timeout: 6 // 6
  |};

  declare var VoxImplant$RosterItemEvent: {|
    +Added: 0, // 0
    +Removed: 1, // 1
    +Subscribed: 2, // 2
    +Unsubscribed: 3, // 3
    +Updated: 4 // 4
  |};

  declare var VoxImplant$SubscriptionRequestType: {|
    +Subscribe: 0, // 0
    +Unsubscribe: 1 // 1
  |};

  declare var VoxImplant$UserStatuses: {|
    +Away: 0, // 0
    +Chat: 1, // 1
    +DND: 2, // 2
    +Offline: 3, // 3
    +Online: 4, // 4
    +XA: 5 // 5
  |};

  declare var VoxImplant$ChatRoomOperationType: {|
    +Ban: 0, // 0
    +Unban: 1 // 1
  |};

  /**
   * Chat room
   */
  declare interface VoxImplant$ChatRoom {
    /**
     * Chat room id
     */
    id: string;

    /**
     * Chat room password
     */
    pass: string;
  }

  /**
   * Event dispatched when user joins chat room
   */
  declare interface VoxImplant$ChatRoomInfo {
    /**
     * Room features
     */
    features: number;

    /**
     * Room info object
     */
    info: VoxImplant$ChatRoomInfo;

    /**
     * Room id
     */
    room: string;

    /**
     * Room name
     */
    room_name: string;

    /**
     * Creation date
     */
    creationdate: string;

    /**
     * Room description
     */
    description: string;

    /**
     * Number of chat room participants
     */
    occupants: number;

    /**
     * Room's name / subject
     */
    subject: string;
  }

  /**
   * Chat room participant
   */
  declare interface VoxImplant$ChatRoomParticipant {
    /**
     * User id
     */
    id: string;

    /**
     * User display name
     */
    name: string;

    /**
     * True if the user is owner/admin of the room
     */
    owner?: boolean;
  }

  /**
   * Message received from history
   */
  declare interface VoxImplant$IMHistoryMessage {
    /**
     * Message body
     */
    body: string;

    /**
     * User id - author of the message
     */
    from: string;

    /**
     * Message id
     */
    id: string;

    /**
     * Message creation time
     */
    time: string;
  }

  /**
   * Participant info
   */
  declare interface VoxImplant$ParticipantInfo {
    /**
     * The participant's affiliation with the room
     */
    affiliation: number;

    /**
     * Indicate conditions like: user has been kicked or banned from the room
     */
    flags: number;

    /**
     * User id
     */
    id: string;

    /**
     * Reason
     */
    reason: string;

    /**
     * Resource name
     */
    resource: string;

    /**
     * The participant's role with the room
     */
    role: number;
  }

  /**
   * Client class used to control platform functions. Can't be instantiatied directly (singleton), please use VoxImplant.getInstance to get the class instance
   */
  declare interface VoxImplant$Client {
    /**
     * Register handler for specified event
     * @param eventName Event name
     * @param eventHandler Handler function. A single parameter is passed - object with the event information
     */
    addEventListener(
      eventName: VoxImplant$Events | VoxImplant$IMEvents,
      eventHandler: (
        eventObject: VoxImplant$VoxImplantEvent | VoxImplant$VoxImplantIMEvent
      ) => any
    ): void;

    /**
     * Add roster item (IM)
     * @param user_id User id
     * @param name Display name
     * @param group User group
     */
    addRosterItem(user_id: string, name: string, group?: string): void;

    /**
     * Add roster item group (IM)
     * @param user_id User id
     * @param group Group name
     */
    addRosterItemGroup(user_id: string, group: string): void;

    /**
     * Enable microphone/camera if micRequired in VoxImplant.Config was set to false (WebRTC mode only)
     * @param successCallback A function called in case of successful audio recording device change
     * @param failedCallback A function called in case of problems while changing audio recording device
     */
    attachRecordingDevice(
      successCallback?: () => any,
      failedCallback?: () => any
    ): void;

    /**
     * Get a list of all currently available audio playback devices
     */
    audioOutputs(): VoxImplant$AudioOutputInfo[];

    /**
     * Get a list of all currently available audio sources / microphones
     */
    audioSources(): VoxImplant$AudioSourceInfo[];

    /**
     * Ban user from the chat room
     * @param room Room id
     * @param user_id User id
     * @param reason Ban reason
     */
    banChatRoomUser(room: string, user_id: string, reason?: string): void;

    /**
     * Create call
     * @param number The number to call
     * @param useVideo Tells if video should be supported for the call
     * @param customData Custom string associated with the call session. It can be later obtained from Call History using HTTP API
     * @param extraHeaders Optional custom parameters (SIP headers) that should be passed with call (INVITE) message. Parameter names must start with "X-" to be processed by application. IMPORTANT: Headers size limit is 200 bytes
     */
    call(
      number: string,
      useVideo?: boolean,
      customData?: string,
      extraHeaders?: Object
    ): VoxImplant$Call;

    /**
     * Get current config
     */
    config(): VoxImplant$Config;

    /**
     * Connect to VoxImplant Cloud
     */
    connect(): void;

    /**
     * Check if connected to VoxImplant Cloud
     */
    connected(): boolean;

    /**
     * Create multi-user chat room and join it
     * @param pass Password for room access
     * @param users User ids of the invited users to the chat room
     */
    createChatRoom(pass?: string, users?: string[]): string;

    /**
     * Decline invitation to join chat room
     * @param room Room id
     * @param user_id User id (inviter)
     * @param reason User-supplied decline reason
     */
    declineChatRoomInvite(room: string, user_id: string, reason?: string): void;

    /**
     * Disable microphone/camera if micRequired in VoxImplant.Config was set to false (WebRTC mode only)
     */
    detachRecordingDevice(): void;

    /**
     * Disconnect from VoxImplant Cloud
     */
    disconnect(): void;

    /**
     * Edit message in the chat room
     * @param room Room id
     * @param message_id Message id
     * @param msg New message content
     */
    editChatRoomMessage(room: string, message_id: string, msg: string): void;

    /**
     * Edit message sent to user
     * @param room Room id
     * @param message_id Message id
     * @param msg New message content
     */
    editInstantMessage(room: string, message_id: string, msg: string): void;

    /**
     * Get chat room history
     * @param room Room id
     * @param message_id Message id (to get messages sent before/after the message)
     * @param direction False/true to get messages older/newer than the message with specified id
     * @param count Number of messages
     */
    getChatRoomHistory(
      room: string,
      message_id?: string,
      direction?: boolean,
      count?: number
    ): void;

    /**
     * Get messages in a conversation with particular use
     * @param user_id User id
     * @param message_id Message id (to get messages sent before/after the message)
     * @param direction False/true to get messages older/newer than the message with specified id
     * @param count Number of messages
     */
    getInstantMessagingHistory(
      user_id: string,
      message_id?: string,
      direction?: boolean,
      count?: number
    ): void;

    /**
     * Initialize SDK. SDKReady event will be dispatched after succesful SDK initialization. SDK can't be used until it's initialized
     * @param config Client configuration options
     */
    init(config?: VoxImplant$Config): void;

    /**
     * Invite user to join chat room
     * @param room Room id
     * @param user_id User id (invitee)
     * @param reason User-supplied reason for the invitation
     */
    inviteToChatRoom(room: string, user_id: string, reason?: string): void;

    /**
     * Check if WebRTC support is available
     */
    isRTCsupported(): boolean;

    /**
     * Join multi-user chat room
     * @param room Room id
     * @param pass Password for room access
     */
    joinChatRoom(room: string, pass?: string): void;

    /**
     * Leave multi-user chat room
     * @param room Room id
     * @param msg Message for other participants
     */
    leaveChatRoom(room: string, msg?: string): void;

    /**
     * Login into application
     * @param username
     * @param password
     * @param options Login options
     */
    login(
      username: string,
      password: string,
      options?: VoxImplant$LoginOptions
    ): void;

    /**
     * Login into application using 'code' auth method
     * @param username
     * @param code
     * @param options Login options
     */
    loginWithCode(
      username: string,
      code: string,
      options?: VoxImplant$LoginOptions
    ): void;

    /**
     * Login into application using 'onetimekey' auth method
     * @param username
     * @param hash
     * @param options Login options
     */
    loginWithOneTimeKey(
      username: string,
      hash: string,
      options?: VoxImplant$LoginOptions
    ): void;

    /**
     * Move roster item group (IM)
     * @param user_id User id
     * @param groupSrc Group name (source)
     * @param groupDst Group name (destination)
     */
    moveRosterItemGroup(
      user_id: string,
      groupSrc: string,
      groupDst: string
    ): void;

    /**
     * Play ToneScript using WebAudio API
     * @param script Tonescript string
     * @param loop Loop playback if true
     */
    playToneScript(script: string, loop?: boolean): void;

    /**
     * Remove message in the chat room
     * @param room Room id
     * @param message_id Message id
     */
    removeChatRoomMessage(room: string, message_id: string): void;

    /**
     * Remove user from the chat room
     * @param room Room id
     * @param user_id User id
     * @param reason Reason
     */
    removeChatRoomUser(room: string, user_id: string, reason?: string): void;

    /**
     * Remove handler for specified event
     * @param eventName Event name
     * @param eventHandler Handler function
     */
    removeEventListener(
      eventName: VoxImplant$Events | VoxImplant$IMEvents,
      eventHandler: () => any
    ): void;

    /**
     * Remove message sent to user
     * @param user_id User id
     * @param message_id Message id
     */
    removeInstantMessage(user_id: string, message_id: string): void;

    /**
     * Remove roster item (IM)
     * @param user_id User id
     */
    removeRosterItem(user_id: string): void;

    /**
     * Remove roster item group (IM)
     * @param user_id User id
     * @param group Group name
     */
    remoteRosterItemGroup(user_id: string, group: string): void;

    /**
     * Rename roster item (IM)
     * @param user_id User id
     * @param name New display name
     */
    renameRosterItem(user_id: string, name: string): void;

    /**
     * Request a key for 'onetimekey' auth method. Server will send the key in AuthResult event with code 302
     * @param username
     */
    requestOneTimeLoginKey(username: string): void;

    /**
     * Send message to chat room
     * @param room Room id
     * @param msg Message for other participants
     */
    sendChatRoomMessage(room: string, msg: string): string;

    /**
     * Send message to user (IM)
     * @param user_id User id
     * @param content Message content
     */
    sendInstantMessage(user_id: string, content: string): string;

    /**
     * Start/stop sending local video to remote party/parties
     * @param flag Start/stop - true/false
     */
    sendVideo(flag: boolean): void;

    /**
     * Set active call
     * @param call VoxImplant call instance
     * @param active If true make call active, otherwise make call inactive
     */
    setCallActive(call: VoxImplant$Call, active: boolean): void;

    /**
     * Set chat room session state info
     * @param room Room id
     * @param status Chat session status
     */
    setChatRoomState(room: string, status: VoxImplant$ChatStateType): void;

    /**
     * Set new chat room subject
     * @param room Room id
     * @param subject New subject
     */
    setChatRoomSubject(room: string, subject: string): void;

    /**
     * Set chat session state info
     * @param user_id User id
     * @param status Chat session status. See VoxImplant.ChatStateType enum
     */
    setChatState(user_id: string, status: VoxImplant$ChatStateType): void;

    /**
     * Set local video position
     * @param x Horizontal position (px)
     * @param y Vertical position (px)
     */
    setLocalVideoPosition(x: number, y: number): void;

    /**
     * Set local video size
     * @param width Width in pixels
     * @param height Height in pixels
     */
    setLocalVideoSize(width: number, height: number): void;

    /**
     * Set local video size
     * @param user_id User id
     * @param type Message event type: VoxImplant.MessageEventType.Delivered or VoxImplant.MessageEventType.Displayed. See VoxImplant.MessageEventType enum
     * @param message_id Message id(s)
     */
    setMessageStatus(
      user_id: string,
      type: VoxImplant$MessageEventType,
      message_id: string[]
    ): void;

    /**
     * Set ACD status
     * @param status Presence status string, see VoxImplant.OperatorACDStatuses
     */
    setOperatorACDStatus(status: VoxImplant$OperatorACDStatuses): void;

    /**
     * Set presence
     * @param status Presence status from VoxImplant.UserStatuses
     * @param msg Presence text message
     */
    setPresenceStatus(status: VoxImplant$UserStatuses, msg: string): void;

    /**
     * Set background color of flash app (only for Flash mode)
     * @param color Color in web format (i.e. #000000 for black)
     */
    setSwfColor(color: string): void;

    /**
     * Set bandwidth limit for video calls. Currently supported by Chrome/Chromium. The limit will be applied for the next call. (WebRTC mode only)
     * @param bandwidth Bandwidth limit in kilobits per second (kbps)
     */
    setVideoBandwidth(bandwidth: number): void;

    /**
     * Set video settings globally. This settings will be used for the next call.
     * @param settings Video settings
     * @param successCallback Success callback function
     * @param failedCallback Failed callback function
     */
    setVideoSettings(
      settings: VoxImplant$VideoSettings | VoxImplant$FlashVideoSettings,
      successCallback?: () => any,
      failedCallback?: () => any
    ): void;

    /**
     * Show flash settings panel
     * @param panel Settings type - default/microphone/camera/etc as described in SecurityPanel class
     */
    showFlashSettingsPanel(panel?: string): void;

    /**
     * Show/hide local video
     * @param flag Show/hide - true/false
     */
    showLocalVideo(flag: boolean): void;

    /**
     * Stop playing ToneScript using WebAudio API
     */
    stopPlayback(): void;

    /**
     * Transfer call, depending on the result VoxImplant.CallEvents.TransferComplete or VoxImplant.CallEvents.TransferFailed event will be dispatched
     * @param call1 Call which will be transferred
     * @param call2 Call where call1 will be transferred
     */
    transferCall(call1: VoxImplant$Call, call2: VoxImplant$Call): void;

    /**
     * Remove a ban on a user in the chat room
     * @param room Room id
     * @param user_id User id
     * @param reason Reason
     */
    unbanChatRoomUser(room: string, user_id: string, reason?: string): void;

    /**
     * Use specified audio source , use audioSources to get the list of available audio sources
     * @param id Id of the audio source
     * @param successCallback Called in WebRTC mode if audio source changed successfully
     * @param failedCallback Called in WebRTC mode if audio source couldn't be changed successfully
     */
    useAudioSource(
      id: number | string,
      successCallback?: () => any,
      failedCallback?: () => any
    ): void;

    /**
     * Use specified audio source , use audioSources to get the list of available audio sources
     * @param id Id of the video source
     * @param successCallback Called in WebRTC mode if video source changed successfully
     * @param failedCallback Called in WebRTC mode if video source couldn't be changed successfully
     */
    useVideoSource(
      id: number | string,
      successCallback?: () => any,
      failedCallback?: () => any
    ): void;

    /**
     * Get a list of all currently available video sources / cameras
     */
    videoSources(): VoxImplant$VideoSourceInfo[];
  }

  declare interface VoxImplant$Call {
    /**
     * Returns information about the call's media state (active/inactive)
     */
    active(): boolean;

    /**
     * Register handler for specified event
     * @param eventName Event name
     * @param eventHandler Handler function. A single parameter is passed - object with the event information
     */
    addEventListener(
      eventName: VoxImplant$CallEvents,
      eventHandler: (eventObject: VoxImplant$VoxImplantCallEvent) => any
    ): void;

    /**
     * Answer on incoming call
     * @param customData Set custom string associated with call session. It can be later obtained from Call History using HTTP API
     * @param extraHeaders Optional custom parameters (SIP headers) that should be sent after accepting incoming call. Parameter names must start with "X-" to be processed by application
     */
    answer(customData?: string, extraHeaders?: Object): void;

    /**
     * Reject incoming call
     * @param extraHeaders Optional custom parameters (SIP headers) that should be sent after accepting incoming call. Parameter names must start with "X-" to be processed by application
     */
    decline(extraHeaders?: Object): void;

    /**
     * Returns display name
     */
    displayName(): string;

    /**
     * Returns HTML video element's id for the call (WebRTC mode)
     */
    getVideoElementId(): string;

    /**
     * Hangup call
     * @param extraHeaders Optional custom parameters (SIP headers) that should be sent after disconnecting/cancelling call. Parameter names must start with "X-" to be processed by application
     */
    hangup(extraHeaders?: Object): void;

    /**
     * Returns headers object
     */
    headers(): Object;

    /**
     * Returns call id
     */
    id(): string;

    /**
     * Mute microphone
     */
    muteMicrophone(): void;

    /**
     * Mute sound
     */
    mutePlayback(): void;

    /**
     * Returns dialed number or caller id
     */
    number(): string;

    /**
     * Reject incoming call
     * @param extraHeaders Optional custom parameters (SIP headers) that should be sent after disconnecting/cancelling call. Parameter names must start with "X-" to be processed by application
     */
    reject(extraHeaders?: Object): void;

    /**
     * Remove handler for specified event
     * @param eventName Event name
     * @param eventHandler Handler function
     */
    removeEventListener(
      eventName: VoxImplant$CallEvents,
      eventHandler: () => any
    ): void;

    /**
     * Send Info (SIP INFO) message inside the call
     * @param mimeType MIME type of the message
     * @param body Message content
     * @param extraHeaders Optional headers to be passed with the message
     */
    sendInfo(mimeType: string, body: string, extraHeaders?: Object): void;

    /**
     * Send text message
     * @param msg Message text
     */
    sendMessage(msg: string): void;

    /**
     * Send tone (DTMF)
     * @param key Send tone according to pressed key: 0-9 , * , #
     */
    sendTone(key: string): void;

    /**
     * Set remote video position
     * @param x Horizontal position (px)
     * @param y Vertical position (px)
     */
    setRemoteVideoPosition(x: number, y: number): void;

    /**
     * Set remote video size
     * @param width Width in pixels
     * @param height Height in pixels
     */
    setRemoteVideoSize(width: number, height: number): void;

    /**
     * Set video settings
     * @param settings Video settings for current call
     * @param successCallback Called in WebRTC mode if video settings were applied successfully
     * @param failedCallback Called in WebRTC mode if video settings couldn't be applied
     */
    setVideoSettings(
      settings: VoxImplant$VideoSettings | VoxImplant$FlashVideoSettings,
      successCallback?: () => any,
      failedCallback?: () => any
    ): void;

    /**
     * Show/hide remote party video
     * @param flag Show/hide - true/false
     */
    showRemoteVideo(flag: boolean): void;

    /**
     * Get call's current state
     */
    state(): string;

    /**
     * Unmute microphone
     */
    unmuteMicrophone(): void;

    /**
     * Unmute sound
     */
    unmutePlayback(): void;
  }

  /**
   * WebRTC Video Settings (aka Constraints)
   */
  declare interface VoxImplant$VideoSettings {
    /**
     * The width or width range, in pixels
     */
    width?: number | any;

    /**
     * The height or height range, in pixels
     */
    height?: number | any;

    /**
     * The exact aspect ratio (width in pixels divided by height in pixels, represented as a double rounded to the tenth decimal place) or aspect ratio range
     */
    aspectRatio?: number | any;

    /**
     * The exact frame rate (frames per second) or frame rate range
     */
    frameRate?: number | any;

    /**
     * This string (or each string, when a list) should be one of the members of VideoFacingModeEnum
     */
    facingMode?: string | any;

    /**
     * The origin-unique identifier for the source of the MediaStreamTrack
     */
    deviceId?: string;

    /**
     * The origin-unique group identifier for the source of the MediaStreamTrack. Two devices have the same group identifier if they belong to the same physical device
     */
    groupId?: string;

    /**
     * Mandatory constraints object
     */
    mandatory?: Object;

    /**
     * Optional constraints object
     */
    optional?: Object;
  }

  /**
   * Flash Video Settings
   */
  declare interface VoxImplant$FlashVideoSettings {
    /**
     * The maximum amount of bandwidth the current outgoing video feed can use, in bytes
     */
    bandwidth?: number;

    /**
     * The maximum rate at which the camera can capture data, in frames per second
     */
    fps?: number;

    /**
     * Height in pixels (should be set together with width)
     */
    height?: number;

    /**
     * Width in pixels (should be set together with height)
     */
    width?: number;

    /**
     * Keyframe interval (seconds)
     */
    keyframeInterval?: number;

    /**
     * H.264 video codec level
     */
    level?: string;

    /**
     * H.264 video codec profile
     */
    profile?: string;

    /**
     * The required level of picture quality, as determined by the amount of compression being applied to each video frame. Acceptable quality values range from 1 (lowest quality, maximum compression) to 100 (highest quality, no compression). The default value is 0, which means that picture quality can vary as needed to avoid exceeding available bandwidth
     */
    quality?: number;
  }

  /**
   * Network information
   */
  declare interface VoxImplant$NetworkInfo {
    /**
     * Packet loss percentage
     */
    packetLoss: number;
  }

  /**
   * VoxImplant roster item
   */
  declare interface VoxImplant$RosterItem {
    /**
     * Groups this roster item belongs to
     */
    groups: string[];

    /**
     * User id
     */
    id: string;

    /**
     * User display name
     */
    name: string;

    /**
     * Resources
     */
    resources: string[];

    /**
     * Subscription type
     */
    subscription_type: number;
  }

  /**
   * Get Client instance to use platform functions
   */
  declare function VoxImplant$getInstance(): VoxImplant$Client;

  /**
   * VoxImplant Web SDK lib version
   */
  declare function VoxImplant$version(): String;
}
