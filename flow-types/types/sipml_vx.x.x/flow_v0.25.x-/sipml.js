declare module "sipml" {
  declare var npm$namespace$SIPml: {
    getNavigatorFriendlyName: typeof SIPml$getNavigatorFriendlyName,
    getNavigatorVersion: typeof SIPml$getNavigatorVersion,
    getSystemFriendlyName: typeof SIPml$getSystemFriendlyName,
    getWebRtc4AllVersion: typeof SIPml$getWebRtc4AllVersion,
    haveMediaStream: typeof SIPml$haveMediaStream,
    init: typeof SIPml$init,
    isInitialized: typeof SIPml$isInitialized,
    isNavigatorOutdated: typeof SIPml$isNavigatorOutdated,
    isReady: typeof SIPml$isReady,
    isScreenShareSupported: typeof SIPml$isScreenShareSupported,
    isWebRtcPluginOutdated: typeof SIPml$isWebRtcPluginOutdated,
    isWebRtc4AllSupported: typeof SIPml$isWebRtc4AllSupported,
    isWebRtcSupported: typeof SIPml$isWebRtcSupported,
    isWebSocketSupported: typeof SIPml$isWebSocketSupported,
    setDebugLevel: typeof SIPml$setDebugLevel,
    setWebRtcType: typeof SIPml$setWebRtcType,

    Event: typeof SIPml$Event,
    EventTarget: typeof SIPml$EventTarget,
    Session: typeof SIPml$Session,
    Stack: typeof SIPml$Stack,
    Session: typeof npm$namespace$SIPml$Session,
    Stack: typeof npm$namespace$SIPml$Stack
  };
  declare class SIPml$Event {
    description: string;
    type: string;
    getContent(): Object;
    getContentString(): string;
    getContentType(): Object;
    getSipResponseCode(): number;
  }

  declare class SIPml$EventTarget<
    EventSubscriptionType: string,
    EventType: SIPml$Event
  > {
    addEventListener(
      type: Stack$EventSubscriptionType,
      listener: (e: EventType) => void
    ): void;
    removeEventListener(type: Stack$EventSubscriptionType): void;
  }

  declare class SIPml$Session
    mixins EventTarget<Session$EventSubscriptionType, Session$Event> {
    accept(configuration?: Session$Configuration): number;
    getId(): number;
    getRemoteFriendlyName(): string;
    getRemoteUri(): string;
    reject(configuration?: Session$Configuration): number;
    setConfiguration(configuration?: Session$Configuration): void;
  }

  declare var npm$namespace$SIPml$Session: {
    Call: typeof SIPml$Session$Call,
    Event: typeof SIPml$Session$Event,
    Message: typeof SIPml$Session$Message,
    Publish: typeof SIPml$Session$Publish,
    Registration: typeof SIPml$Session$Registration,
    Subscribe: typeof SIPml$Session$Subscribe
  };

  /**
   * Should be
   *
   * "*" |
   * "connecting" |
   * "connected" |
   * "terminating" |
   * "terminated" |
   * "i_ao_request" |
   * "media_added" |
   * "media_removed" |
   * "i_request" |
   * "o_request" |
   * "cancelled_request" |
   * "sent_request" |
   * "transport_error" |
   * "global_error" |
   * "message_error" |
   * "webrtc_error" |
   */
  declare type SIPml$Session$EventSubscriptionType = string;

  declare interface SIPml$Session$Configuration {
    audio_remote?: HTMLElement;
    bandwidth?: {
      audio: number,
      video: number
    };
    events_listener?: {
      events:
        | SIPml$Session$EventSubscriptionType
        | SIPml$Session$EventSubscriptionType[],
      listener: (e: Session$Event) => void
    };
    expires?: number;
    from?: string;
    sip_caps?: Object[];
    sip_headers?: Object[];
    video_local?: HTMLElement;
    video_remote?: HTMLElement;
    video_size?: {
      minWidth?: number,
      maxWidth?: number,
      minHeight?: number,
      maxHeight?: number
    };
  }

  declare class SIPml$Session$Call
    mixins Session,
      EventTarget<Session$Call$EventSubscriptionType, Session$Event> {
    acceptTransfer(configuration?: Session$Configuration): number;
    call(to: string, configuration?: Session$Configuration): number;
    dtmf(): number;
    hangup(configuration?: Session$Configuration): number;
    hold(configuration?: Session$Configuration): number;
    info(): number;
    rejectTransfer(): number;
    resume(): number;
    transfer(): number;
  }

  /**
   * Should be
   *
   * Session.EventSubscriptionType |
   * "m_early_media" |
   * "m_local_hold_ok" |
   * "m_local_hold_nok" |
   * "m_local_resume_ok" |
   * "m_local_resume_nok" |
   * "m_remote_hold" |
   * "m_remote_resume" |
   * "m_stream_video_local_added" |
   * "m_stream_video_local_removed" |
   * "m_stream_video_remote_added" |
   * "m_stream_video_remote_removed" |
   * "m_stream_audio_local_added" |
   * "m_stream_audio_local_removed" |
   * "m_stream_audio_remote_added" |
   * "m_stream_audio_remote_removed" |
   * "i_ect_new_call" |
   * "o_ect_trying" |
   * "o_ect_accepted" |
   * "o_ect_completed" |
   * "i_ect_completed" |
   * "o_ect_failed" |
   * "i_ect_failed" |
   * "o_ect_notify" |
   * "i_ect_notify" |
   * "i_ect_requested " |
   * "m_bfcp_info" |
   * "i_info" |
   */
  declare type SIPml$Session$Call$EventSubscriptionType = Session$EventSubscriptionType;

  declare class SIPml$Session$Event mixins SIPml$Event {
    session: SIPml$Session;
    getTransferDestinationFriendlyName(): string;
  }

  declare class SIPml$Session$Message mixins Session {
    send(
      to: string,
      content?: any,
      contentType?: string,
      configuration?: Session$Configuration
    ): number;
  }

  declare class SIPml$Session$Publish mixins Session {
    publish(
      content?: any,
      contentType?: string,
      configuration?: Session$Configuration
    ): number;
    unpublish(configuration?: Session$Configuration): void;
  }

  declare class SIPml$Session$Registration mixins Session {
    register(configuration?: Session$Configuration): void;
    unregister(configuration?: Session$Configuration): void;
  }

  declare class SIPml$Session$Subscribe
    mixins Session,
      EventTarget<Session$Subscribe$EventSubscriptionType, Session$Event> {
    subscribe(to: string, configuration?: Session$Configuration): number;
    unsubscribe(configuration?: Session$Configuration): number;
  }

  /**
   * Should be
   *
   * Session.EventSubscriptionType | "i_notify"
   */
  declare type SIPml$Session$Subscribe$EventSubscriptionType = Session$EventSubscriptionType;

  declare class SIPml$Stack
    mixins EventTarget<Stack$EventSubscriptionType, Stack$Event> {
    constructor(configuration?: Stack$Configuration): this;
    setConfiguration(configuration: Stack$Configuration): number;
    newSession(type: string, configuration?: Session$Configuration): any;
    start(): number;
    stop(timeout?: number): number;
  }

  declare var npm$namespace$SIPml$Stack: {
    Event: typeof SIPml$Stack$Event
  };

  /**
   * Should be
   *
   * "*" |
   * "starting" |
   * "started" |
   * "stopping" |
   * "stopped" |
   * "failed_to_start" |
   * "failed_to_stop" |
   * "i_new_call" |
   * "i_new_message" |
   * "m_permission_requested" |
   * "m_permission_accepted" |
   * "m_permission_refused";
   */
  declare type SIPml$Stack$EventSubscriptionType = string;

  declare interface SIPml$Stack$Configuration {
    bandwidth?: {
      audio: number,
      video: number
    };
    display_name?: string;
    enable_click2call?: boolean;
    enable_early_ims?: boolean;
    enable_media_stream_cache?: boolean;
    enable_rtcweb_breaker?: boolean;
    events_listener?: {
      events:
        | SIPml$Stack$EventSubscriptionType
        | SIPml$Stack$EventSubscriptionType[],
      listener: (e: Stack$Event) => void
    };
    ice_servers?: Object[];
    impi?: string;
    impu?: string;
    outbound_proxy_url?: string;
    password?: string;
    realm?: string;
    sip_headers?: Object[];
    video_size?: {
      minWidth?: number,
      maxWidth?: number,
      minHeight?: number,
      maxHeight?: number
    };
    websocket_proxy_url?: string;
  }

  declare class SIPml$Stack$Event mixins SIPml$Event {
    description: string;
    newSession: SIPml$Session;
    type: string;
  }

  declare function SIPml$getNavigatorFriendlyName(): string;

  declare function SIPml$getNavigatorVersion(): string;

  declare function SIPml$getSystemFriendlyName(): string;

  declare function SIPml$getWebRtc4AllVersion(): string;

  declare function SIPml$haveMediaStream(): boolean;

  declare function SIPml$init(
    readyCallback?: (e: any) => any,
    errorCallback?: (e: any) => any
  ): boolean;

  declare function SIPml$isInitialized(): boolean;

  declare function SIPml$isNavigatorOutdated(): boolean;

  declare function SIPml$isReady(): boolean;

  declare function SIPml$isScreenShareSupported(): boolean;

  declare function SIPml$isWebRtcPluginOutdated(): boolean;

  declare function SIPml$isWebRtc4AllSupported(): boolean;

  declare function SIPml$isWebRtcSupported(): boolean;

  declare function SIPml$isWebSocketSupported(): boolean;

  declare function SIPml$setDebugLevel(level: string): void;

  declare function SIPml$setWebRtcType(type: string): boolean;
}
