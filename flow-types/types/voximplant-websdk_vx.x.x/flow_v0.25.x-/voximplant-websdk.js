declare module "voximplant-websdk" {
  declare module.exports: typeof VoxImplant;

  declare var npm$namespace$VoxImplant: {
    getInstance: typeof VoxImplant$getInstance,
    version: typeof VoxImplant$version
  };

  /**
   * VoxImplant.Client general events
   */
  declare class VoxImplant$Events {
    constructor(...args: empty): mixed;
    static +AuthResult: Class<VoxImplant$Events__AuthResult> &
      VoxImplant$Events__AuthResult &
      0; // 0
    static +ConnectionClosed: Class<VoxImplant$Events__ConnectionClosed> &
      VoxImplant$Events__ConnectionClosed &
      1; // 1
    static +ConnectionEstablished: Class<VoxImplant$Events__ConnectionEstablished> &
      VoxImplant$Events__ConnectionEstablished &
      2; // 2
    static +ConnectionFailed: Class<VoxImplant$Events__ConnectionFailed> &
      VoxImplant$Events__ConnectionFailed &
      3; // 3
    static +IncomingCall: Class<VoxImplant$Events__IncomingCall> &
      VoxImplant$Events__IncomingCall &
      4; // 4
    static +MicAccessResult: Class<VoxImplant$Events__MicAccessResult> &
      VoxImplant$Events__MicAccessResult &
      5; // 5
    static +NetStatsReceived: Class<VoxImplant$Events__NetStatsReceived> &
      VoxImplant$Events__NetStatsReceived &
      6; // 6
    static +PlaybackFinished: Class<VoxImplant$Events__PlaybackFinished> &
      VoxImplant$Events__PlaybackFinished &
      7; // 7
    static +SDKReady: Class<VoxImplant$Events__SDKReady> &
      VoxImplant$Events__SDKReady &
      8; // 8
    static +SourcesInfoUpdated: Class<VoxImplant$Events__SourcesInfoUpdated> &
      VoxImplant$Events__SourcesInfoUpdated &
      9; // 9
  }

  declare class VoxImplant$Events__AuthResult mixins VoxImplant$Events {}
  declare class VoxImplant$Events__ConnectionClosed mixins VoxImplant$Events {}
  declare class VoxImplant$Events__ConnectionEstablished
    mixins VoxImplant$Events {}
  declare class VoxImplant$Events__ConnectionFailed mixins VoxImplant$Events {}
  declare class VoxImplant$Events__IncomingCall mixins VoxImplant$Events {}
  declare class VoxImplant$Events__MicAccessResult mixins VoxImplant$Events {}
  declare class VoxImplant$Events__NetStatsReceived mixins VoxImplant$Events {}
  declare class VoxImplant$Events__PlaybackFinished mixins VoxImplant$Events {}
  declare class VoxImplant$Events__SDKReady mixins VoxImplant$Events {}
  declare class VoxImplant$Events__SourcesInfoUpdated
    mixins VoxImplant$Events {}

  /**
   * VoxImplant.Client Instant Messaging and Presence events
   */
  declare class VoxImplant$IMEvents {
    constructor(...args: empty): mixed;
    static +ChatHistoryReceived: Class<VoxImplant$IMEvents__ChatHistoryReceived> &
      VoxImplant$IMEvents__ChatHistoryReceived &
      0; // 0
    static +ChatRoomBanList: Class<VoxImplant$IMEvents__ChatRoomBanList> &
      VoxImplant$IMEvents__ChatRoomBanList &
      1; // 1
    static +ChatRoomCreated: Class<VoxImplant$IMEvents__ChatRoomCreated> &
      VoxImplant$IMEvents__ChatRoomCreated &
      2; // 2
    static +ChatRoomError: Class<VoxImplant$IMEvents__ChatRoomError> &
      VoxImplant$IMEvents__ChatRoomError &
      3; // 3
    static +ChatRoomHistoryReceived: Class<VoxImplant$IMEvents__ChatRoomHistoryReceived> &
      VoxImplant$IMEvents__ChatRoomHistoryReceived &
      4; // 4
    static +ChatRoomInfo: Class<VoxImplant$IMEvents__ChatRoomInfo> &
      VoxImplant$IMEvents__ChatRoomInfo &
      5; // 5
    static +ChatRoomInvitation: Class<VoxImplant$IMEvents__ChatRoomInvitation> &
      VoxImplant$IMEvents__ChatRoomInvitation &
      6; // 6
    static +ChatRoomInviteDeclined: Class<VoxImplant$IMEvents__ChatRoomInviteDeclined> &
      VoxImplant$IMEvents__ChatRoomInviteDeclined &
      7; // 7
    static +ChatRoomMessageModified: Class<VoxImplant$IMEvents__ChatRoomMessageModified> &
      VoxImplant$IMEvents__ChatRoomMessageModified &
      8; // 8
    static +ChatRoomMessageNotModified: Class<VoxImplant$IMEvents__ChatRoomMessageNotModified> &
      VoxImplant$IMEvents__ChatRoomMessageNotModified &
      9; // 9
    static +ChatRoomMessageReceived: Class<VoxImplant$IMEvents__ChatRoomMessageReceived> &
      VoxImplant$IMEvents__ChatRoomMessageReceived &
      10; // 10
    static +ChatRoomMessageRemoved: Class<VoxImplant$IMEvents__ChatRoomMessageRemoved> &
      VoxImplant$IMEvents__ChatRoomMessageRemoved &
      11; // 11
    static +ChatRoomNewParticipant: Class<VoxImplant$IMEvents__ChatRoomNewParticipant> &
      VoxImplant$IMEvents__ChatRoomNewParticipant &
      12; // 12
    static +ChatRoomOperation: Class<VoxImplant$IMEvents__ChatRoomOperation> &
      VoxImplant$IMEvents__ChatRoomOperation &
      13; // 13
    static +ChatRoomParticipantExit: Class<VoxImplant$IMEvents__ChatRoomParticipantExit> &
      VoxImplant$IMEvents__ChatRoomParticipantExit &
      14; // 14
    static +ChatRoomParticipants: Class<VoxImplant$IMEvents__ChatRoomParticipants> &
      VoxImplant$IMEvents__ChatRoomParticipants &
      15; // 15
    static +ChatRoomPresenceUpdate: Class<VoxImplant$IMEvents__ChatRoomPresenceUpdate> &
      VoxImplant$IMEvents__ChatRoomPresenceUpdate &
      16; // 16
    static +ChatRoomStateUpdate: Class<VoxImplant$IMEvents__ChatRoomStateUpdate> &
      VoxImplant$IMEvents__ChatRoomStateUpdate &
      17; // 17
    static +ChatRoomSubjectChange: Class<VoxImplant$IMEvents__ChatRoomSubjectChange> &
      VoxImplant$IMEvents__ChatRoomSubjectChange &
      18; // 18
    static +ChatRoomsDataReceived: Class<VoxImplant$IMEvents__ChatRoomsDataReceived> &
      VoxImplant$IMEvents__ChatRoomsDataReceived &
      19; // 19
    static +ChatStateUpdate: Class<VoxImplant$IMEvents__ChatStateUpdate> &
      VoxImplant$IMEvents__ChatStateUpdate &
      20; // 20
    static +MessageModified: Class<VoxImplant$IMEvents__MessageModified> &
      VoxImplant$IMEvents__MessageModified &
      21; // 21
    static +MessageNotModified: Class<VoxImplant$IMEvents__MessageNotModified> &
      VoxImplant$IMEvents__MessageNotModified &
      22; // 22
    static +MessageReceived: Class<VoxImplant$IMEvents__MessageReceived> &
      VoxImplant$IMEvents__MessageReceived &
      23; // 23
    static +MessageRemoved: Class<VoxImplant$IMEvents__MessageRemoved> &
      VoxImplant$IMEvents__MessageRemoved &
      24; // 24
    static +MessageStatus: Class<VoxImplant$IMEvents__MessageStatus> &
      VoxImplant$IMEvents__MessageStatus &
      25; // 25
    static +PresenceUpdate: Class<VoxImplant$IMEvents__PresenceUpdate> &
      VoxImplant$IMEvents__PresenceUpdate &
      26; // 26
    static +RosterItemChange: Class<VoxImplant$IMEvents__RosterItemChange> &
      VoxImplant$IMEvents__RosterItemChange &
      27; // 27
    static +RosterPresenceUpdate: Class<VoxImplant$IMEvents__RosterPresenceUpdate> &
      VoxImplant$IMEvents__RosterPresenceUpdate &
      28; // 28
    static +RosterReceived: Class<VoxImplant$IMEvents__RosterReceived> &
      VoxImplant$IMEvents__RosterReceived &
      29; // 29
    static +SubscriptionRequest: Class<VoxImplant$IMEvents__SubscriptionRequest> &
      VoxImplant$IMEvents__SubscriptionRequest &
      30; // 30
    static +SystemError: Class<VoxImplant$IMEvents__SystemError> &
      VoxImplant$IMEvents__SystemError &
      31; // 31
    static +UCConnected: Class<VoxImplant$IMEvents__UCConnected> &
      VoxImplant$IMEvents__UCConnected &
      32; // 32
    static +UCDisconnected: Class<VoxImplant$IMEvents__UCDisconnected> &
      VoxImplant$IMEvents__UCDisconnected &
      33; // 33
  }

  declare class VoxImplant$IMEvents__ChatHistoryReceived
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomBanList
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomCreated
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomError mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomHistoryReceived
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomInfo mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomInvitation
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomInviteDeclined
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomMessageModified
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomMessageNotModified
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomMessageReceived
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomMessageRemoved
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomNewParticipant
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomOperation
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomParticipantExit
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomParticipants
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomPresenceUpdate
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomStateUpdate
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomSubjectChange
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatRoomsDataReceived
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__ChatStateUpdate
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__MessageModified
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__MessageNotModified
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__MessageReceived
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__MessageRemoved
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__MessageStatus mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__PresenceUpdate
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__RosterItemChange
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__RosterPresenceUpdate
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__RosterReceived
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__SubscriptionRequest
    mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__SystemError mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__UCConnected mixins VoxImplant$IMEvents {}
  declare class VoxImplant$IMEvents__UCDisconnected
    mixins VoxImplant$IMEvents {}

  /**
   * VoxImplant.Call events
   */
  declare class VoxImplant$CallEvents {
    constructor(...args: empty): mixed;
    static +Connected: Class<VoxImplant$CallEvents__Connected> &
      VoxImplant$CallEvents__Connected &
      0; // 0
    static +Disconnected: Class<VoxImplant$CallEvents__Disconnected> &
      VoxImplant$CallEvents__Disconnected &
      1; // 1
    static +Failed: Class<VoxImplant$CallEvents__Failed> &
      VoxImplant$CallEvents__Failed &
      2; // 2
    static +ICETimeout: Class<VoxImplant$CallEvents__ICETimeout> &
      VoxImplant$CallEvents__ICETimeout &
      3; // 3
    static +InfoReceived: Class<VoxImplant$CallEvents__InfoReceived> &
      VoxImplant$CallEvents__InfoReceived &
      4; // 4
    static +MessageReceived: Class<VoxImplant$CallEvents__MessageReceived> &
      VoxImplant$CallEvents__MessageReceived &
      5; // 5
    static +ProgressToneStart: Class<VoxImplant$CallEvents__ProgressToneStart> &
      VoxImplant$CallEvents__ProgressToneStart &
      6; // 6
    static +ProgressToneStop: Class<VoxImplant$CallEvents__ProgressToneStop> &
      VoxImplant$CallEvents__ProgressToneStop &
      7; // 7
    static +TransferComplete: Class<VoxImplant$CallEvents__TransferComplete> &
      VoxImplant$CallEvents__TransferComplete &
      8; // 8
    static +TransferFailed: Class<VoxImplant$CallEvents__TransferFailed> &
      VoxImplant$CallEvents__TransferFailed &
      9; // 9
  }

  declare class VoxImplant$CallEvents__Connected mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__Disconnected
    mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__Failed mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__ICETimeout
    mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__InfoReceived
    mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__MessageReceived
    mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__ProgressToneStart
    mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__ProgressToneStop
    mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__TransferComplete
    mixins VoxImplant$CallEvents {}
  declare class VoxImplant$CallEvents__TransferFailed
    mixins VoxImplant$CallEvents {}

  /**
   * Event dispatched after login , loginWithOneTimeKey, requestOneTimeLoginKey or loginWithCode function call
   */
  declare interface EventTypes$AuthResult {
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
  declare interface EventTypes$ConnectionClosed {}

  /**
   * Event dispatched after connection to VoxImplant Cloud was established successfully. See connect function
   */
  declare interface EventTypes$ConnectionEstablished {}

  /**
   * Event dispatched if connection to VoxImplant Cloud couldn't be established. See connect function
   */
  declare interface EventTypes$ConnectionFailed {
    /**
     * Failure reason description
     */
    message: string;
  }

  /**
   * Event dispatched when there is a new incoming call to current user
   */
  declare interface EventTypes$IncomingCall {
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
  declare interface EventTypes$MicAccessResult {
    /**
     * True is access was allowed, false - otherwise
     */
    result: boolean;
  }

  /**
   * Event dispatched when packet loss data received from VoxImplant servers
   */
  declare interface EventTypes$NetStatsReceived {
    /**
     * Network info object
     */
    stats: VoxImplant$NetworkInfo;
  }

  /**
   * Event dispatched after sound playback was stopped. See playToneScript and stopPlayback functions
   */
  declare interface EventTypes$PlaybackFinished {}

  /**
   * Event dispatched after SDK was successfully initialized after init function call
   */
  declare interface EventTypes$SDKReady {
    /**
     * SDK version
     */
    VoxImplant$version: string;
  }

  /**
   * Event dispatched when audio and video sources information was updated. See audioSources and videoSources for details
   */
  declare interface EventTypes$SourcesInfoUpdated {}

  /**
   * Event dispatched after call was connected
   */
  declare interface CallEventTypes$Connected {
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
  declare interface CallEventTypes$Disconnected {
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
  declare interface CallEventTypes$Failed {
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
  declare interface CallEventTypes$ICETimeout {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when INFO message is received
   */
  declare interface CallEventTypes$InfoReceived {
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
  declare interface CallEventTypes$MessageReceived {
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
  declare interface CallEventTypes$ProgressToneStart {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when progress tone playback stops
   */
  declare interface CallEventTypes$ProgressToneStop {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when call has been transferred successfully
   */
  declare interface CallEventTypes$TransferComplete {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when call transfer failed
   */
  declare interface CallEventTypes$TransferFailed {
    /**
     * Call that dispatched the event
     */
    call: VoxImplant$Call;
  }

  /**
   * Event dispatched when chat history received
   */
  declare interface IMEventTypes$ChatHistoryReceived {
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
  declare interface IMEventTypes$ChatRoomBanList {
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
  declare interface IMEventTypes$ChatRoomCreated {
    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched in case of error while chat room operation
   */
  declare interface IMEventTypes$ChatRoomError {
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
  declare interface IMEventTypes$ChatRoomHistoryReceived {
    /**
     * Message id specified in getInstantMessagingHistory method
     */
    message_id: string;

    /**
     * List of messages
     */
    messages: VoxImplant$VoxImplant$IMHistoryMessage[];

    /**
     * Room id
     */
    room: string;
  }

  /**
   * Event dispatched when user joins chat room
   */
  declare interface IMEventTypes$ChatRoomInfo {
    /**
     * Room features
     */
    features: number;

    /**
     * Room info object
     */
    info: IMEventTypes$ChatRoomInfo;

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
  declare interface IMEventTypes$ChatRoomInvitation {
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
  declare interface IMEventTypes$ChatRoomInviteDeclined {
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
  declare interface IMEventTypes$ChatRoomMessageModified {
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
  declare interface IMEventTypes$ChatRoomMessageNotModified {
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
  declare interface IMEventTypes$ChatRoomMessageReceived {
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
  declare interface IMEventTypes$ChatRoomMessageRemoved {
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
  declare interface IMEventTypes$ChatRoomNewParticipant {
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
  declare interface IMEventTypes$ChatRoomOperation {
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
  declare interface IMEventTypes$ChatRoomParticipantExit {
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
  declare interface IMEventTypes$ChatRoomParticipants {
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
  declare interface IMEventTypes$ChatRoomPresenceUpdate {
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
  declare interface IMEventTypes$ChatRoomStateUpdate {
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
  declare interface IMEventTypes$ChatRoomSubjectChange {
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
  declare interface IMEventTypes$ChatRoomsDataReceived {
    /**
     * Rooms list
     */
    rooms: VoxImplant$ChatRoom[];
  }

  /**
   * Event dispatched when chat session state updated
   */
  declare interface IMEventTypes$ChatStateUpdate {
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
  declare interface IMEventTypes$MessageModified {
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
  declare interface IMEventTypes$MessageNotModified {
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
  declare interface IMEventTypes$MessageReceived {
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
  declare interface IMEventTypes$MessageRemoved {
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
  declare interface IMEventTypes$MessageStatus {
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
  declare interface IMEventTypes$PresenceUpdate {
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
  declare interface IMEventTypes$RosterItemChange {
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
  declare interface IMEventTypes$RosterPresenceUpdate {
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
  declare interface IMEventTypes$RosterReceived {
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
  declare interface IMEventTypes$SubscriptionRequest {
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
  declare interface IMEventTypes$SystemError {
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
  declare interface IMEventTypes$UCConnected {}

  /**
   * Event dispatched when instant messaging and presence subsystems (UC) are offline
   */
  declare interface IMEventTypes$UCDisconnected {}

  declare type VoxImplant$VoxImplantEvent =
    | EventTypes$EventTypes$AuthResult
    | EventTypes$EventTypes$ConnectionClosed
    | EventTypes$EventTypes$ConnectionEstablished
    | EventTypes$EventTypes$ConnectionFailed
    | EventTypes$EventTypes$IncomingCall
    | EventTypes$EventTypes$MicAccessResult
    | EventTypes$EventTypes$NetStatsReceived
    | EventTypes$EventTypes$PlaybackFinished
    | EventTypes$EventTypes$SDKReady
    | EventTypes$EventTypes$SourcesInfoUpdated;

  declare type VoxImplant$VoxImplantCallEvent =
    | CallEventTypes$CallEventTypes$Connected
    | CallEventTypes$CallEventTypes$Disconnected
    | CallEventTypes$CallEventTypes$Failed
    | CallEventTypes$CallEventTypes$InfoReceived
    | CallEventTypes$IMEventTypes$MessageReceived
    | CallEventTypes$CallEventTypes$ProgressToneStart
    | CallEventTypes$CallEventTypes$ProgressToneStop
    | CallEventTypes$CallEventTypes$TransferComplete
    | CallEventTypes$CallEventTypes$TransferFailed;

  declare type VoxImplant$VoxImplantIMEvent =
    | IMEventTypes$IMEventTypes$ChatHistoryReceived
    | IMEventTypes$IMEventTypes$ChatRoomBanList
    | IMEventTypes$IMEventTypes$ChatRoomCreated
    | IMEventTypes$IMEventTypes$ChatRoomError
    | IMEventTypes$IMEventTypes$ChatRoomHistoryReceived
    | IMEventTypes$IMEventTypes$ChatRoomInfo
    | IMEventTypes$IMEventTypes$ChatRoomInvitation
    | IMEventTypes$IMEventTypes$ChatRoomInviteDeclined
    | IMEventTypes$IMEventTypes$ChatRoomMessageModified
    | IMEventTypes$IMEventTypes$ChatRoomMessageNotModified
    | IMEventTypes$IMEventTypes$ChatRoomMessageReceived
    | IMEventTypes$IMEventTypes$ChatRoomMessageRemoved
    | IMEventTypes$IMEventTypes$ChatRoomNewParticipant
    | IMEventTypes$IMEventTypes$ChatRoomOperation
    | IMEventTypes$IMEventTypes$ChatRoomParticipantExit
    | IMEventTypes$IMEventTypes$ChatRoomParticipants
    | IMEventTypes$IMEventTypes$ChatRoomPresenceUpdate
    | IMEventTypes$IMEventTypes$ChatRoomStateUpdate
    | IMEventTypes$IMEventTypes$ChatRoomSubjectChange
    | IMEventTypes$IMEventTypes$ChatRoomsDataReceived
    | IMEventTypes$IMEventTypes$ChatStateUpdate
    | IMEventTypes$IMEventTypes$MessageModified
    | IMEventTypes$IMEventTypes$MessageNotModified
    | IMEventTypes$IMEventTypes$MessageReceived
    | IMEventTypes$IMEventTypes$MessageRemoved
    | IMEventTypes$IMEventTypes$MessageStatus
    | IMEventTypes$IMEventTypes$PresenceUpdate
    | IMEventTypes$IMEventTypes$RosterItemChange
    | IMEventTypes$IMEventTypes$RosterPresenceUpdate
    | IMEventTypes$IMEventTypes$RosterReceived
    | IMEventTypes$IMEventTypes$SubscriptionRequest
    | IMEventTypes$IMEventTypes$SystemError
    | IMEventTypes$IMEventTypes$UCConnected
    | IMEventTypes$IMEventTypes$UCDisconnected;

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

  declare class VoxImplant$ChatStateType {
    constructor(...args: empty): mixed;
    static +Active: Class<VoxImplant$ChatStateType__Active> &
      VoxImplant$ChatStateType__Active &
      0; // 0
    static +Composing: Class<VoxImplant$ChatStateType__Composing> &
      VoxImplant$ChatStateType__Composing &
      1; // 1
    static +Gone: Class<VoxImplant$ChatStateType__Gone> &
      VoxImplant$ChatStateType__Gone &
      2; // 2
    static +Inactive: Class<VoxImplant$ChatStateType__Inactive> &
      VoxImplant$ChatStateType__Inactive &
      3; // 3
    static +Invalid: Class<VoxImplant$ChatStateType__Invalid> &
      VoxImplant$ChatStateType__Invalid &
      4; // 4
    static +Paused: Class<VoxImplant$ChatStateType__Paused> &
      VoxImplant$ChatStateType__Paused &
      5; // 5
  }

  declare class VoxImplant$ChatStateType__Active
    mixins VoxImplant$ChatStateType {}
  declare class VoxImplant$ChatStateType__Composing
    mixins VoxImplant$ChatStateType {}
  declare class VoxImplant$ChatStateType__Gone
    mixins VoxImplant$ChatStateType {}
  declare class VoxImplant$ChatStateType__Inactive
    mixins VoxImplant$ChatStateType {}
  declare class VoxImplant$ChatStateType__Invalid
    mixins VoxImplant$ChatStateType {}
  declare class VoxImplant$ChatStateType__Paused
    mixins VoxImplant$ChatStateType {}

  declare class VoxImplant$IMErrorType {
    constructor(...args: empty): mixed;
    static +RemoteFunctionError: Class<VoxImplant$IMErrorType__RemoteFunctionError> &
      VoxImplant$IMErrorType__RemoteFunctionError &
      0; // 0
    static +Error: Class<VoxImplant$IMErrorType__Error> &
      VoxImplant$IMErrorType__Error &
      1; // 1
    static +RosterError: Class<VoxImplant$IMErrorType__RosterError> &
      VoxImplant$IMErrorType__RosterError &
      2; // 2
  }

  declare class VoxImplant$IMErrorType__RemoteFunctionError
    mixins VoxImplant$IMErrorType {}
  declare class VoxImplant$IMErrorType__Error mixins VoxImplant$IMErrorType {}
  declare class VoxImplant$IMErrorType__RosterError
    mixins VoxImplant$IMErrorType {}

  declare class VoxImplant$MessageEventType {
    constructor(...args: empty): mixed;
    static +Cancel: Class<VoxImplant$MessageEventType__Cancel> &
      VoxImplant$MessageEventType__Cancel &
      0; // 0
    static +Composing: Class<VoxImplant$MessageEventType__Composing> &
      VoxImplant$MessageEventType__Composing &
      1; // 1
    static +Delivered: Class<VoxImplant$MessageEventType__Delivered> &
      VoxImplant$MessageEventType__Delivered &
      2; // 2
    static +Displayed: Class<VoxImplant$MessageEventType__Displayed> &
      VoxImplant$MessageEventType__Displayed &
      3; // 3
    static +Invalid: Class<VoxImplant$MessageEventType__Invalid> &
      VoxImplant$MessageEventType__Invalid &
      4; // 4
    static +Offline: Class<VoxImplant$MessageEventType__Offline> &
      VoxImplant$MessageEventType__Offline &
      5; // 5
  }

  declare class VoxImplant$MessageEventType__Cancel
    mixins VoxImplant$MessageEventType {}
  declare class VoxImplant$MessageEventType__Composing
    mixins VoxImplant$MessageEventType {}
  declare class VoxImplant$MessageEventType__Delivered
    mixins VoxImplant$MessageEventType {}
  declare class VoxImplant$MessageEventType__Displayed
    mixins VoxImplant$MessageEventType {}
  declare class VoxImplant$MessageEventType__Invalid
    mixins VoxImplant$MessageEventType {}
  declare class VoxImplant$MessageEventType__Offline
    mixins VoxImplant$MessageEventType {}

  declare class VoxImplant$OperatorACDStatuses {
    constructor(...args: empty): mixed;
    static +AfterService: Class<VoxImplant$OperatorACDStatuses__AfterService> &
      VoxImplant$OperatorACDStatuses__AfterService &
      0; // 0
    static +DND: Class<VoxImplant$OperatorACDStatuses__DND> &
      VoxImplant$OperatorACDStatuses__DND &
      1; // 1
    static +InService: Class<VoxImplant$OperatorACDStatuses__InService> &
      VoxImplant$OperatorACDStatuses__InService &
      2; // 2
    static +Offline: Class<VoxImplant$OperatorACDStatuses__Offline> &
      VoxImplant$OperatorACDStatuses__Offline &
      3; // 3
    static +Online: Class<VoxImplant$OperatorACDStatuses__Online> &
      VoxImplant$OperatorACDStatuses__Online &
      4; // 4
    static +Ready: Class<VoxImplant$OperatorACDStatuses__Ready> &
      VoxImplant$OperatorACDStatuses__Ready &
      5; // 5
    static +Timeout: Class<VoxImplant$OperatorACDStatuses__Timeout> &
      VoxImplant$OperatorACDStatuses__Timeout &
      6; // 6
  }

  declare class VoxImplant$OperatorACDStatuses__AfterService
    mixins VoxImplant$OperatorACDStatuses {}
  declare class VoxImplant$OperatorACDStatuses__DND
    mixins VoxImplant$OperatorACDStatuses {}
  declare class VoxImplant$OperatorACDStatuses__InService
    mixins VoxImplant$OperatorACDStatuses {}
  declare class VoxImplant$OperatorACDStatuses__Offline
    mixins VoxImplant$OperatorACDStatuses {}
  declare class VoxImplant$OperatorACDStatuses__Online
    mixins VoxImplant$OperatorACDStatuses {}
  declare class VoxImplant$OperatorACDStatuses__Ready
    mixins VoxImplant$OperatorACDStatuses {}
  declare class VoxImplant$OperatorACDStatuses__Timeout
    mixins VoxImplant$OperatorACDStatuses {}

  declare class VoxImplant$RosterItemEvent {
    constructor(...args: empty): mixed;
    static +Added: Class<VoxImplant$RosterItemEvent__Added> &
      VoxImplant$RosterItemEvent__Added &
      0; // 0
    static +Removed: Class<VoxImplant$RosterItemEvent__Removed> &
      VoxImplant$RosterItemEvent__Removed &
      1; // 1
    static +Subscribed: Class<VoxImplant$RosterItemEvent__Subscribed> &
      VoxImplant$RosterItemEvent__Subscribed &
      2; // 2
    static +Unsubscribed: Class<VoxImplant$RosterItemEvent__Unsubscribed> &
      VoxImplant$RosterItemEvent__Unsubscribed &
      3; // 3
    static +Updated: Class<VoxImplant$RosterItemEvent__Updated> &
      VoxImplant$RosterItemEvent__Updated &
      4; // 4
  }

  declare class VoxImplant$RosterItemEvent__Added
    mixins VoxImplant$RosterItemEvent {}
  declare class VoxImplant$RosterItemEvent__Removed
    mixins VoxImplant$RosterItemEvent {}
  declare class VoxImplant$RosterItemEvent__Subscribed
    mixins VoxImplant$RosterItemEvent {}
  declare class VoxImplant$RosterItemEvent__Unsubscribed
    mixins VoxImplant$RosterItemEvent {}
  declare class VoxImplant$RosterItemEvent__Updated
    mixins VoxImplant$RosterItemEvent {}

  declare class VoxImplant$SubscriptionRequestType {
    constructor(...args: empty): mixed;
    static +Subscribe: Class<VoxImplant$SubscriptionRequestType__Subscribe> &
      VoxImplant$SubscriptionRequestType__Subscribe &
      0; // 0
    static +Unsubscribe: Class<VoxImplant$SubscriptionRequestType__Unsubscribe> &
      VoxImplant$SubscriptionRequestType__Unsubscribe &
      1; // 1
  }

  declare class VoxImplant$SubscriptionRequestType__Subscribe
    mixins VoxImplant$SubscriptionRequestType {}
  declare class VoxImplant$SubscriptionRequestType__Unsubscribe
    mixins VoxImplant$SubscriptionRequestType {}

  declare class VoxImplant$UserStatuses {
    constructor(...args: empty): mixed;
    static +Away: Class<VoxImplant$UserStatuses__Away> &
      VoxImplant$UserStatuses__Away &
      0; // 0
    static +Chat: Class<VoxImplant$UserStatuses__Chat> &
      VoxImplant$UserStatuses__Chat &
      1; // 1
    static +DND: Class<VoxImplant$UserStatuses__DND> &
      VoxImplant$UserStatuses__DND &
      2; // 2
    static +Offline: Class<VoxImplant$UserStatuses__Offline> &
      VoxImplant$UserStatuses__Offline &
      3; // 3
    static +Online: Class<VoxImplant$UserStatuses__Online> &
      VoxImplant$UserStatuses__Online &
      4; // 4
    static +XA: Class<VoxImplant$UserStatuses__XA> &
      VoxImplant$UserStatuses__XA &
      5; // 5
  }

  declare class VoxImplant$UserStatuses__Away mixins VoxImplant$UserStatuses {}
  declare class VoxImplant$UserStatuses__Chat mixins VoxImplant$UserStatuses {}
  declare class VoxImplant$UserStatuses__DND mixins VoxImplant$UserStatuses {}
  declare class VoxImplant$UserStatuses__Offline
    mixins VoxImplant$UserStatuses {}
  declare class VoxImplant$UserStatuses__Online
    mixins VoxImplant$UserStatuses {}
  declare class VoxImplant$UserStatuses__XA mixins VoxImplant$UserStatuses {}

  declare class VoxImplant$ChatRoomOperationType {
    constructor(...args: empty): mixed;
    static +Ban: Class<VoxImplant$ChatRoomOperationType__Ban> &
      VoxImplant$ChatRoomOperationType__Ban &
      0; // 0
    static +Unban: Class<VoxImplant$ChatRoomOperationType__Unban> &
      VoxImplant$ChatRoomOperationType__Unban &
      1; // 1
  }

  declare class VoxImplant$ChatRoomOperationType__Ban
    mixins VoxImplant$ChatRoomOperationType {}
  declare class VoxImplant$ChatRoomOperationType__Unban
    mixins VoxImplant$ChatRoomOperationType {}

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
      eventName: VoxImplant$VoxImplant$Events | VoxImplant$VoxImplant$IMEvents,
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
      eventName: VoxImplant$VoxImplant$Events | VoxImplant$VoxImplant$IMEvents,
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
      eventName: VoxImplant$VoxImplant$CallEvents,
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
      eventName: VoxImplant$VoxImplant$CallEvents,
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
