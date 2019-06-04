declare module "amazon-connect-streams" {
  declare var connect: typeof npm$namespace$connect;

  declare var npm$namespace$connect: {
    agent: typeof connect$agent,
    contact: typeof connect$contact,
    hitch: typeof connect$hitch,
    core: typeof connect$core,
    AgentStateType: typeof connect$AgentStateType,
    AgentAvailStates: typeof connect$AgentAvailStates,
    AgentErrorStates: typeof connect$AgentErrorStates,
    EndpointType: typeof connect$EndpointType,
    ConnectionType: typeof connect$ConnectionType,
    ConnectionStateType: typeof connect$ConnectionStateType,
    ContactStateType: typeof connect$ContactStateType,
    CONTACT_ACTIVE_STATES: typeof connect$CONTACT_ACTIVE_STATES,
    ContactType: typeof connect$ContactType,
    SoftphoneCallType: typeof connect$SoftphoneCallType,
    SoftphoneErrorTypes: typeof connect$SoftphoneErrorTypes,
    CTIExceptions: typeof connect$CTIExceptions,
    Endpoint: typeof connect$Endpoint
  };

  /**
   * A callback to receive agent details
   * @param agent An Agent object containing information about the currently
   * signed-in agent.
   */
  declare type connect$AgentCallback = (agent: connect$Agent) => void;

  /**
   * Register a callback to receive agent details
   * @param callback A callback that will receive an {Agent} instance
   * when agent information becomes available.
   */
  declare function connect$agent(callback: connect$AgentCallback): void;

  /**
   * A callback to receive contact details
   * @param agent A Contact object containing information about the current contact.
   */
  declare type connect$ContactCallback = (contact: connect$Contact) => void;

  /**
   * Register a callback to receive contact details
   * @param callback A callback that will receive a Contact instance
   * when contact information is updated.
   */
  declare function connect$contact(callback: connect$ContactCallback): void;

  /**
   * Binds the given instance object as the context for
   * the method provided.
   * @param scope The instance object to be set as the scope
   * of the function.
   * @param method The method to be encapsulated.
   *
   * All other arguments, if any, are bound to the method
   * invocation inside the closure.
   * @return A closure encapsulating the invocation of the
   * method provided in context of the given instance.
   */
  declare function connect$hitch(
    scope: { [key: string]: any },
    method: () => any
  ): void;

  declare interface connect$Core {
    initCCP(containerDiv: HTMLElement, options: connect$InitCCPOptions): void;
  }

  declare var connect$core: connect$Core;

  declare interface connect$SoftPhoneOptions {
    disableRingtone?: boolean;
    allowFramedSoftphone?: boolean;
    ringtoneUrl?: string;
  }

  declare interface connect$InitCCPOptions {
    ccpUrl: string;
    loginPopup?: boolean;
    softphone?: connect$SoftPhoneOptions;
  }

  declare var connect$AgentStateType: {|
    +INIT: "init", // "init"
    +ROUTABLE: "routable", // "routable"
    +NOT_ROUTABLE: "not_routable", // "not_routable"
    +OFFLINE: "offline" // "offline"
  |};

  declare var connect$AgentAvailStates: {|
    +INIT: "Init", // "Init"
    +BUSY: "Busy", // "Busy"
    +AFTER_CALL_WORK: "AfterCallWork", // "AfterCallWork"
    +CALLING_CUSTOMER: "CallingCustomer", // "CallingCustomer"
    +DIALING: "Dialing", // "Dialing"
    +JOINING: "Joining", // "Joining"
    +PENDING_AVAILABLE: "PendingAvailable", // "PendingAvailable"
    +PENDING_BUSY: "PendingBusy" // "PendingBusy"
  |};

  declare var connect$AgentErrorStates: {|
    +ERROR: "Error", // "Error"
    +AGENT_HUNG_UP: "AgentHungUp", // "AgentHungUp"
    +BAD_ADDRESS_AGENT: "BadAddressAgent", // "BadAddressAgent"
    +BAD_ADDRESS_CUSTOMER: "BadAddressCustomer", // "BadAddressCustomer"
    +DEFAULT: "Default", // "Default"
    +FAILED_CONNECT_AGENT: "FailedConnectAgent", // "FailedConnectAgent"
    +FAILED_CONNECT_CUSTOMER: "FailedConnectCustomer", // "FailedConnectCustomer"
    +LINE_ENGAGED_AGENT: "LineEngagedAgent", // "LineEngagedAgent"
    +LINE_ENGAGED_CUSTOMER: "LineEngagedCustomer", // "LineEngagedCustomer"
    +MISSED_CALL_AGENT: "MissedCallAgent", // "MissedCallAgent"
    +MISSED_CALL_CUSTOMER: "MissedCallCustomer", // "MissedCallCustomer"
    +MULTIPLE_CCP_WINDOWS: "MultipleCcpWindows", // "MultipleCcpWindows"
    +REALTIME_COMMUNICATION_ERROR: "RealtimeCommunicationError" // "RealtimeCommunicationError"
  |};

  declare var connect$EndpointType: {|
    +PHONE_NUMBER: "phone_number", // "phone_number"
    +AGENT: "agent", // "agent"
    +QUEUE: "queue" // "queue"
  |};

  declare var connect$ConnectionType: {|
    +AGENT: "agent", // "agent"
    +INBOUND: "inbound", // "inbound"
    +OUTBOUND: "outbound", // "outbound"
    +MONITORING: "monitoring" // "monitoring"
  |};

  declare var connect$ConnectionStateType: {|
    +INIT: "init", // "init"
    +CONNECTING: "connecting", // "connecting"
    +CONNECTED: "connected", // "connected"
    +HOLD: "hold", // "hold"
    +DISCONNECTED: "disconnected" // "disconnected"
  |};

  declare interface connect$CONNECTION_ACTIVE_STATES {
    [key: string]: number;
  }

  declare var connect$ContactStateType: {|
    +INIT: "init", // "init"
    +INCOMING: "incoming", // "incoming"
    +PENDING: "pending", // "pending"
    +CONNECTING: "connecting", // "connecting"
    +CONNECTED: "connected", // "connected"
    +MISSED: "missed", // "missed"
    +ERROR: "error", // "error"
    +ENDED: "ended" // "ended"
  |};

  declare var connect$CONTACT_ACTIVE_STATES: {|
    +INCOMING: "incoming", // "incoming"
    +CONNECTING: "connecting", // "connecting"
    +CONNECTED: "connected" // "connected"
  |};

  declare var connect$ContactType: {|
    +VOICE: "voice", // "voice"
    +QUEUE_CALLBACK: "queue_callback" // "queue_callback"
  |};

  declare var connect$SoftphoneCallType: {|
    +AUDIO_VIDEO: "audio_video", // "audio_video"
    +VIDEO_ONLY: "video_only", // "video_only"
    +AUDIO_ONLY: "audio_only", // "audio_only"
    +NONE: "none" // "none"
  |};

  declare var connect$SoftphoneErrorTypes: {|
    +UNSUPPORTED_BROWSER: "unsupported_browser", // "unsupported_browser"
    +MICROPHONE_NOT_SHARED: "microphone_not_shared", // "microphone_not_shared"
    +SIGNALLING_HANDSHAKE_FAILURE: "signalling_handshake_failure", // "signalling_handshake_failure"
    +SIGNALLING_CONNECTION_FAILURE: "signalling_connection_failure", // "signalling_connection_failure"
    +ICE_COLLECTION_TIMEOUT: "ice_collection_timeout", // "ice_collection_timeout"
    +USER_BUSY_ERROR: "user_busy_error", // "user_busy_error"
    +WEBRTC_ERROR: "webrtc_error", // "webrtc_error"
    +REALTIME_COMMUNICATION_ERROR: "realtime_communication_error", // "realtime_communication_error"
    +OTHER: "other" // "other"
  |};

  declare var connect$CTIExceptions: {|
    +ACCESS_DENIED_EXCEPTION: "AccessDeniedException", // "AccessDeniedException"
    +INVALID_STATE_EXCEPTION: "InvalidStateException", // "InvalidStateException"
    +BAD_ENDPOINT_EXCEPTION: "BadEndpointException", // "BadEndpointException"
    +INVALID_AGENT_ARNEXCEPTION: "InvalidAgentARNException", // "InvalidAgentARNException"
    +INVALID_CONFIGURATION_EXCEPTION: "InvalidConfigurationException", // "InvalidConfigurationException"
    +INVALID_CONTACT_TYPE_EXCEPTION: "InvalidContactTypeException", // "InvalidContactTypeException"
    +PAGINATION_EXCEPTION: "PaginationException", // "PaginationException"
    +REFRESH_TOKEN_EXPIRED_EXCEPTION: "RefreshTokenExpiredException", // "RefreshTokenExpiredException"
    +SEND_DATA_FAILED_EXCEPTION: "SendDataFailedException", // "SendDataFailedException"
    +UNAUTHORIZED_EXCEPTION: "UnauthorizedException" // "UnauthorizedException"
  |};

  declare type connect$SuccessFailCallback = () => void;

  declare interface connect$SuccessFailOptions {
    success?: connect$SuccessFailCallback;
    failure?: connect$SuccessFailCallback;
  }

  declare type connect$ConnectOptions = {
    queueARN?: string
  } & connect$SuccessFailOptions;

  declare interface connect$Agent {
    /**
     * Subscribe a method to be called whenever Contact information is about to be updated.
     * @param callback A callback to receive updated Agent information.
     */
    onContactPending(callback: connect$AgentCallback): void;

    /**
     * Subscribe a method to be called whenever new agent data is available.
     * @param callback A callback to receive updated Agent information.
     */
    onRefresh(callback: connect$AgentCallback): void;

    /**
     * Subscribe a method to be called when the agent becomes routable, meaning that they can be routed incoming contacts.
     * @param callback A callback to receive updated Agent information.
     */
    onRoutable(callback: connect$AgentCallback): void;

    /**
     * Subscribe a method to be called when the agent becomes not-routable, meaning that they are online but cannot be routed incoming contacts.
     * @param callback A callback to receive updated Agent information.
     */
    onNotRoutable(callback: connect$AgentCallback): void;

    /**
     * Subscribe a method to be called when the agent goes offline.
     * @param callback A callback to receive updated Agent information.
     */
    onOffline(callback: connect$AgentCallback): void;

    /**
     * Subscribe a method to be called when the agent is put into an error state.
     * @param callback A callback to receive updated Agent information.
     */
    onError(callback: connect$AgentCallback): void;

    /**
     * Subscribe a method to be called when the agent enters the "After Call Work" (ACW) state.
     * @param callback A callback to receive updated Agent information.
     */
    onAfterCallWork(callback: connect$AgentCallback): void;

    /**
     * Subscribe a method to be called when the agent updates the mute status,
     * meaning that agents mute/unmute APIs are called and the local media stream
     * is succesfully updated with the new status.
     * @param callback A callback to receive updates on agent mute state
     */
    onMuteToggle(callback: connect$AgentCallback): void;

    /**
     * Get the agent's current AgentState object indicating their availability state type.
     */
    getState(): connect$AgentState;

    /**
     * Get the duration of the agent's state in milliseconds relative to local time.
     */
    getStateDuration(): number;

    /**
     * Gets a list of Contact API objects for each of the agent's current contacts.
     */
    getContacts(contactTypeFilter: string): connect$Contact[];

    /**
     * Gets the full AgentConfiguration object for the agent.
     */
    getConfiguration(): connect$AgentConfiguration;

    /**
     * Gets the list of selectable AgentState API objects.
     */
    getAgentStates(): connect$AgentState[];

    /**
     * Gets the agent's routing profile.
     */
    getRoutingProfile(): connect$AgentRoutingProfile;

    /**
     * Gets the agent's user friendly display name from the AgentConfiguration object for the agent.
     */
    getName(): string;

    /**
     * Gets the agent's phone number from the AgentConfiguration object for the agent.
     */
    getExtension(): string;

    /**
     * Determine if softphone is enabled for the agent.
     */
    isSoftphoneEnabled(): boolean;

    /**
     * Updates the agent's configuration with the given AgentConfiguration object.
     * @param configuration The desired configuration
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    setConfiguration(
      configuration: connect$AgentConfiguration,
      successFailOptions: connect$SuccessFailOptions
    ): void;

    /**
     * Set the agent's current availability state.
     * @param state The new agent state.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    setState(
      state: connect$AgentState,
      successFailOptions: connect$SuccessFailOptions
    ): void;

    /**
     * Creates an outbound contact to the given endpoint.
     * @param endpoint An object describing the endpoint to which to connect.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    connect(
      endpoint: connect$Endpoint,
      successFailOptions: connect$ConnectOptions
    ): void;

    /**
     * Create a snapshot version of the current Agent state and save it for future use, such as adding to a log file or posting elsewhere.
     */
    toSnapshot(): connect$Agent;
    mute(): void;
    unmute(): void;
  }

  /**
   * An object containing the current Agent state
   */
  declare interface connect$AgentState {
    /**
     * The name of the agent's current availability state.
     */
    name: string;

    /**
     * The agent's current availability state type, as per the AgentStateType enumeration.
     */
    type: $Values<typeof connect$AgentStateType>;

    /**
     * A relative local state duration. To get the actual duration of the state relative
     * to the current time, use agent.getStateDuration().
     */
    duration?: number;

    /**
     * Indicates whether the agent is currently muted.
     */
    muted?: boolean;
  }

  declare interface connect$AgentConfiguration {
    /**
     * The agent's user friendly display name.
     */
    name: string;

    /**
     * Indicates whether the agent's phone calls should route to the agent's browser-based softphone or the telephone number configured as the agent's extension.
     */
    softphoneEnabled: boolean;

    /**
     * Indicates the phone number that should be dialed to connect the agent to their inbound or outbound calls when softphone is not enabled.
     */
    extension: string;

    /**
     * Describes the agent's current routing profile and list of queues therein. See agent.getRoutingProfile() for more info.
     */
    routingProfile: connect$AgentRoutingProfile;

    /**
     * The username for the agent as entered in their Amazon Connect user account.
     */
    username: string;
  }

  declare interface connect$AgentRoutingProfile {
    /**
     * The name of the routing profile.
     */
    name: string;

    /**
     * The queues contained in the routing profile.
     */
    queues: string;

    /**
     * The default queue which should be associated with outbound contacts.
     */
    defaultOutboundQueue: string;
  }

  declare interface connect$AttributeDictionary {
    [key: string]: string;
  }

  declare interface connect$Contact {
    /**
     * Subscribe a method to be invoked whenever the contact is updated.
     */
    onRefresh(callback: connect$ContactCallback): void;

    /**
     * Subscribe a method to be invoked when the contact is incoming.
     */
    onIncoming(callback: connect$ContactCallback): void;

    /**
     * Subscribe a method to be invoked whenever the contact is accepted.
     */
    onAccepted(callback: connect$ContactCallback): void;

    /**
     * Subscribe a method to be invoked whenever the contact is ended or destroyed.
     */
    onEnded(callback: connect$ContactCallback): void;

    /**
     * Subscribe a method to be invoked when the contact is connected.
     */
    onConnected(callback: connect$ContactCallback): void;

    /**
     * Get the unique contactId of this contact.
     */
    getContactId(): string;

    /**
     * Get the original contact id from which this contact was transferred,
     * or none if this is not an internal Connect transfer.
     */
    getOriginalContactId(): string;

    /**
     * Get the type of the contact. This indicates what type of media is
     * carried over the connections of the contact.
     */
    getType(): string;

    /**
     * Get a ContactState object representing the state of the contact.
     */
    getStatus(): connect$ContactState;

    /**
     * Get the duration of the contact state in milliseconds relative to local time.
     */
    getStatusDuration(): number;

    /**
     * Get the queue associated with the contact.
     */
    getQueue(): connect$Queue;

    /**
     * Get a list containing Connection API objects for each connection in the contact.
     */
    getConnections(): connect$Connection[];

    /**
     * Get the initial connection of the contact.
     */
    getInitialConnection(): connect$Connection;

    /**
     * Get the inital connection of the contact, or null if the initial connection
     * is no longer active.
     */
    getActiveInitialConnection(): connect$Connection;

    /**
     * Get a list of all of the third-party connections, i.e. the list of all
     * connections except for the initial connection, or an empty list if there
     * are no third-party connections.
     */
    getThirdPartyConnections(): connect$Connection;

    /**
     * In Voice contacts, there can only be one active third-party connection.
     * This method returns the single active third-party connection, or null if
     * there are no currently active third-party connections.
     */
    getSingleActiveThirdPartyConnection(): connect$Connection;

    /**
     * Gets the agent connection. This is the connection that represents the agent's
     * participation in the contact.
     */
    getAgentConnection(): connect$Connection;

    /**
     * Get a map from attribute name to value for each attribute associated with the contact.
     */
    getAttributes(): {
      [key: string]: string
    };
    isSoftphoneCall(): boolean;

    /**
     * Determine whether this is an inbound or outbound contact.
     */
    isInbound(): boolean;

    /**
     * Determine whether the contact is in a connected state.
     */
    isConnected(): boolean;

    /**
     * Accept an incoming contact.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    accept(successFailOptions: connect$SuccessFailOptions): void;

    /**
     * Close the contact and all of its associated connections.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    destroy(successFailOptions: connect$SuccessFailOptions): void;

    /**
     * Provide diagnostic information for the contact in the case
     * something exceptional happens on the front end.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    notifyIssue(successFailOptions: connect$SuccessFailOptions): void;

    /**
     * Add a new outbound third-party connection to this contact and connect
     * it to the specified endpoint.
     * @param endpoint The endpoint to add.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    addConnection(
      endpoint: connect$Endpoint,
      successFailOptions: connect$SuccessFailOptions
    ): void;

    /**
     * Rotate through the connected and on hold connections of the contact.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    toggleActiveConnections(
      successFailOptions: connect$SuccessFailOptions
    ): void;

    /**
     * Conference together the active connections of the conversation.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    conferenceConnections(successFailOptions: connect$SuccessFailOptions): void;
  }

  declare interface connect$ContactState {
    /**
     * The contact state type, as per the ContactStateType enumeration.
     */
    type: string;

    /**
     * A relative local state duration. To get the actual duration of the state
     * relative to the current time, use contact.getStateDuration().
     */
    duration: number;
  }

  declare interface connect$Queue {
    /**
     * The queueARN of the queue.
     */
    queueARN: string;

    /**
     * The name of the queue.
     */
    name: string;
  }

  declare class connect$Endpoint {
    endpointARN: string;
    endpointId: string;
    type: $Values<typeof connect$EndpointType>;
    name: string;
    phoneNumber: string;
    agentLogin: string;
    queue: string;
    static byPhoneNumber(phoneNumber: string): connect$Endpoint;
  }

  declare type connect$SendDigitOptions = {
    digits: string
  } & connect$SuccessFailOptions;

  declare interface connect$Connection {
    /**
     * Gets the unique contactId of the contact to which this connection belongs.
     */
    getContactId(): string;

    /**
     * Gets the unique connectionId for this connection.
     */
    getConnectionId(): string;

    /**
     * Gets the endpoint to which this connection is connected.
     */
    getEndpoint(): connect$Endpoint;

    /**
     * Gets the ConnectionState object for this connection.
     */
    getState(): connect$ConnectionState;

    /**
     * Get the duration of the connection state, in milliseconds, relative to local time.
     */
    getStateDuration(): number;

    /**
     * Get the type of connection.
     */
    getType(): "inbound" | "outbound" | "monitoring";

    /**
     * Determine if the connection is the contact's initial connection.
     */
    isInitialConnection(): boolean;

    /**
     * Determine if the contact is active.
     */
    isActive(): boolean;

    /**
     * Determine if the connection is connected, meaning that the agent is live in a
     * conversation through this connection.
     */
    isConnected(): boolean;

    /**
     * Determine whether the connection is in the process of connecting.
     */
    isConnecting(): boolean;

    /**
     * Determine whether the connection is on hold.
     */
    isOnHold(): boolean;

    /**
     * Ends the connection.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    destroy(successFailOptions: connect$SuccessFailOptions): void;

    /**
     * Send a digit or string of digits through this connection.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    sendDigits(options: connect$SendDigitOptions): void;

    /**
     * Put this connection on hold.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    hold(successFailOptions: connect$SuccessFailOptions): void;

    /**
     * Resume this connection if it was on hold.
     * @param successFailOptions Optional success and failure callbacks can be provided to determine whether the operation was successful.
     */
    resume(successFailOptions: connect$SuccessFailOptions): void;
  }

  declare interface connect$ConnectionState {
    /**
     * The connection state type, as per the ConnectionStateType enumeration.
     */
    type: string;

    /**
     * A relative local state duration. To get the actual duration of the state
     * relative to the current time, use connection.getStateDuration().
     */
    duration: number;
  }
}
