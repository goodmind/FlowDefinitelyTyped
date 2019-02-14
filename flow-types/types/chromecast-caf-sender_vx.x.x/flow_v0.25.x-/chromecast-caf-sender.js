declare module "chromecast-caf-sender" {
  declare interface Window {
    cast: typeof cast;
  }

  declare var npm$namespace$cast: {
    framework: typeof npm$namespace$cast$framework
  };

  declare var npm$namespace$cast$framework: {
    setLoggerLevel: typeof cast$framework$setLoggerLevel,
    VERSION: typeof cast$framework$VERSION,
    LoggerLevel: typeof cast$framework$LoggerLevel,
    CastState: typeof cast$framework$CastState,
    SessionState: typeof cast$framework$SessionState,
    CastContextEventType: typeof cast$framework$CastContextEventType,
    SessionEventType: typeof cast$framework$SessionEventType,
    RemotePlayerEventType: typeof cast$framework$RemotePlayerEventType,
    ActiveInputState: typeof cast$framework$ActiveInputState,
    CastContext: typeof cast$framework$CastContext,
    CastSession: typeof cast$framework$CastSession,
    RemotePlayerController: typeof cast$framework$RemotePlayerController,
    RemotePlayer: typeof cast$framework$RemotePlayer,
    ApplicationMetadata: typeof cast$framework$ApplicationMetadata,
    EventData: typeof cast$framework$EventData,
    ActiveInputStateEventData: typeof cast$framework$ActiveInputStateEventData,
    ApplicationMetadataEventData: typeof cast$framework$ApplicationMetadataEventData,
    ApplicationStatusEventData: typeof cast$framework$ApplicationStatusEventData,
    CastStateEventData: typeof cast$framework$CastStateEventData,
    MediaSessionEventData: typeof cast$framework$MediaSessionEventData,
    RemotePlayerChangedEvent: typeof cast$framework$RemotePlayerChangedEvent,
    SessionStateEventData: typeof cast$framework$SessionStateEventData,
    VolumeEventData: typeof cast$framework$VolumeEventData
  };

  declare var cast$framework$LoggerLevel: {|
    +DEBUG: 0, // 0
    +INFO: 1, // 1
    +WARNING: 2, // 2
    +ERROR: 3, // 3
    +NONE: 4 // 4
  |};

  declare var cast$framework$CastState: {|
    +NO_DEVICES_AVAILABLE: "NO_DEVICES_AVAILABLE", // "NO_DEVICES_AVAILABLE"
    +NOT_CONNECTED: "NOT_CONNECTED", // "NOT_CONNECTED"
    +CONNECTING: "CONNECTING", // "CONNECTING"
    +CONNECTED: "CONNECTED" // "CONNECTED"
  |};

  declare var cast$framework$SessionState: {|
    +NO_SESSION: "NO_SESSION", // "NO_SESSION"
    +SESSION_STARTING: "SESSION_STARTING", // "SESSION_STARTING"
    +SESSION_STARTED: "SESSION_STARTED", // "SESSION_STARTED"
    +SESSION_START_FAILED: "SESSION_START_FAILED", // "SESSION_START_FAILED"
    +SESSION_ENDING: "SESSION_ENDING", // "SESSION_ENDING"
    +SESSION_ENDED: "SESSION_ENDED", // "SESSION_ENDED"
    +SESSION_RESUMED: "SESSION_RESUMED" // "SESSION_RESUMED"
  |};

  declare var cast$framework$CastContextEventType: {|
    +CAST_STATE_CHANGED: "caststatechanged", // "caststatechanged"
    +SESSION_STATE_CHANGED: "sessionstatechanged" // "sessionstatechanged"
  |};

  declare var cast$framework$SessionEventType: {|
    +APPLICATION_STATUS_CHANGED: "applicationstatuschanged", // "applicationstatuschanged"
    +APPLICATION_METADATA_CHANGED: "applicationmetadatachanged", // "applicationmetadatachanged"
    +ACTIVE_INPUT_STATE_CHANGED: "activeinputstatechanged", // "activeinputstatechanged"
    +VOLUME_CHANGED: "volumechanged", // "volumechanged"
    +MEDIA_SESSION: "mediasession" // "mediasession"
  |};

  declare var cast$framework$RemotePlayerEventType: {|
    +ANY_CHANGE: "anyChanged", // "anyChanged"
    +IS_CONNECTED_CHANGED: "isConnectedChanged", // "isConnectedChanged"
    +IS_MEDIA_LOADED_CHANGED: "isMediaLoadedChanged", // "isMediaLoadedChanged"
    +DURATION_CHANGED: "durationChanged", // "durationChanged"
    +CURRENT_TIME_CHANGED: "currentTimeChanged", // "currentTimeChanged"
    +IS_PAUSED_CHANGED: "isPausedChanged", // "isPausedChanged"
    +VOLUME_LEVEL_CHANGED: "volumeLevelChanged", // "volumeLevelChanged"
    +CAN_CONTROL_VOLUME_CHANGED: "canControlVolumeChanged", // "canControlVolumeChanged"
    +IS_MUTED_CHANGED: "isMutedChanged", // "isMutedChanged"
    +CAN_PAUSE_CHANGED: "canPauseChanged", // "canPauseChanged"
    +CAN_SEEK_CHANGED: "canSeekChanged", // "canSeekChanged"
    +DISPLAY_NAME_CHANGED: "displayNameChanged", // "displayNameChanged"
    +STATUS_TEXT_CHANGED: "statusTextChanged", // "statusTextChanged"
    +TITLE_CHANGED: "titleChanged", // "titleChanged"
    +DISPLAY_STATUS_CHANGED: "displayStatusChanged", // "displayStatusChanged"
    +MEDIA_INFO_CHANGED: "mediaInfoChanged", // "mediaInfoChanged"
    +IMAGE_URL_CHANGED: "imageUrlChanged", // "imageUrlChanged"
    +PLAYER_STATE_CHANGED: "playerStateChanged" // "playerStateChanged"
  |};

  declare var cast$framework$ActiveInputState: {|
    +ACTIVE_INPUT_STATE_UNKNOWN: -1, // -1
    +ACTIVE_INPUT_STATE_NO: 0, // 0
    +ACTIVE_INPUT_STATE_YES: 1 // 1
  |};

  declare interface cast$framework$CastOptions {
    autoJoinPolicy: chrome.castAutoJoinPolicy;
    language?: string;
    receiverApplicationId?: string;
    resumeSavedSession?: boolean;
  }

  declare var cast$framework$VERSION: string;

  declare function cast$framework$setLoggerLevel(
    level: cast$framework$LoggerLevel
  ): void;

  declare class cast$framework$CastContext {
    static getInstance(): cast$framework$CastContext;
    setOptions(options: cast$framework$CastOptions): void;
    getCastState(): cast$framework$CastState;
    getSessionState(): cast$framework$SessionState;
    requestSession(): Promise<chrome.castErrorCode | void>;
    getCurrentSession(): framework$CastSession | null;
    endCurrentSession(stopCasting: boolean): void;
    addEventListener(
      type: CastContextEventType.CAST_STATE_CHANGED,
      handler: (event: framework$CastStateEventData) => void
    ): void;
    addEventListener(
      type: CastContextEventType.SESSION_STATE_CHANGED,
      handler: (event: framework$SessionStateEventData) => void
    ): void;
    removeEventListener(
      type: CastContextEventType.CAST_STATE_CHANGED,
      handler: (event: framework$CastStateEventData) => void
    ): void;
    removeEventListener(
      type: CastContextEventType.SESSION_STATE_CHANGED,
      handler: (event: framework$SessionStateEventData) => void
    ): void;
  }

  declare class cast$framework$CastSession {
    constructor(
      sessionObj: chrome.castSession,
      state: cast$framework$SessionState
    ): this;
    getSessionObj(): chrome.castSession;
    getSessionId(): string;
    getSessionState(): cast$framework$SessionState;
    getCastDevice(): chrome.castReceiver;
    getApplicationMetadata(): framework$ApplicationMetadata;
    getApplicationStatus(): string;
    getActiveInputState(): cast$framework$ActiveInputState;
    endSession(stopCasting: boolean): void;
    setVolume(volume: number): Promise<chrome.castErrorCode | void>;
    getVolume(): number;
    setMute(mute: boolean): Promise<chrome.castErrorCode | void>;
    isMute(): boolean;
    sendMessage(
      namespace: string,
      data: any
    ): Promise<chrome.castErrorCode | void>;
    addMessageListener(
      namespace: string,
      listener: (namespace: string, message: string) => void
    ): void;
    removeMessageListener(
      namespace: string,
      listener: (namespace: string, message: string) => void
    ): void;
    loadMedia(
      request: chrome.castmediaLoadRequest
    ): Promise<chrome.castErrorCode | void>;
    getMediaSession(): chrome.castmediaMedia | null;
    addEventListener(
      type: SessionEventType.ACTIVE_INPUT_STATE_CHANGED,
      handler: (event: framework$ActiveInputStateEventData) => void
    ): void;
    addEventListener(
      type: SessionEventType.APPLICATION_METADATA_CHANGED,
      handler: (event: framework$ApplicationMetadataEventData) => void
    ): void;
    addEventListener(
      type: SessionEventType.APPLICATION_STATUS_CHANGED,
      handler: (event: framework$ApplicationStatusEventData) => void
    ): void;
    addEventListener(
      type: SessionEventType.MEDIA_SESSION,
      handler: (event: framework$MediaSessionEventData) => void
    ): void;
    addEventListener(
      type: SessionEventType.VOLUME_CHANGED,
      handler: (event: framework$VolumeEventData) => void
    ): void;
    removeEventListener(
      type: SessionEventType.ACTIVE_INPUT_STATE_CHANGED,
      handler: (event: framework$ActiveInputStateEventData) => void
    ): void;
    removeEventListener(
      type: SessionEventType.APPLICATION_METADATA_CHANGED,
      handler: (event: framework$ApplicationMetadataEventData) => void
    ): void;
    removeEventListener(
      type: SessionEventType.APPLICATION_STATUS_CHANGED,
      handler: (event: framework$ApplicationStatusEventData) => void
    ): void;
    removeEventListener(
      type: SessionEventType.MEDIA_SESSION,
      handler: (event: framework$MediaSessionEventData) => void
    ): void;
    removeEventListener(
      type: SessionEventType.VOLUME_CHANGED,
      handler: (event: framework$VolumeEventData) => void
    ): void;
  }

  declare class cast$framework$RemotePlayerController {
    constructor(player: framework$RemotePlayer): this;
    playOrPause(): void;
    stop(): void;
    seek(): void;
    muteOrUnmute(): void;
    setVolumeLevel(): void;
    getFormattedTime(timeInSec: number): string;
    getSeekPosition(currentTime: number, duration: number): number;
    getSeekTime(currentPosition: number, duration: number): number;
    addEventListener(
      type: cast$framework$RemotePlayerEventType,
      handler: (event: framework$RemotePlayerChangedEvent) => void
    ): void;
    removeEventListener(
      type: cast$framework$RemotePlayerEventType,
      handler: (event: framework$RemotePlayerChangedEvent) => void
    ): void;
  }

  declare interface cast$framework$SavedPlayerState {
    mediaInfo: chrome.castmediaPlayerState | null;
    currentTime: number;
    isPaused: boolean;
  }

  declare class cast$framework$RemotePlayer {
    isConnected: boolean;
    isMediaLoaded: boolean;
    duration: number;
    currentTime: number;
    volumeLevel: number;
    canControlVolume: boolean;
    isPaused: boolean;
    isMuted: boolean;
    canPause: boolean;
    canSeek: boolean;
    displayName: string;
    statusText: string;
    title: string;
    displayStatus: string;
    mediaInfo: chrome.castmediaMediaInfo;
    imageUrl: string | null;
    playerState: chrome.castmediaPlayerState | null;
    savedPlayerState: cast$framework$SavedPlayerState | null;
    controller: cast$framework$RemotePlayerController | null;
  }

  declare class cast$framework$ApplicationMetadata {
    constructor(sessionObj: chrome.castSession): this;
    applicationId: string;
    images: chrome.castImage[];
    name: string;
    namespaces: string[];
  }

  declare class cast$framework$EventData {
    constructor(type: string): this;
    type: string;
  }

  declare class cast$framework$ActiveInputStateEventData mixins EventData {
    constructor(activeInputState: cast$framework$ActiveInputState): this;
    activeInputState: cast$framework$ActiveInputState;
  }

  declare class cast$framework$ApplicationMetadataEventData mixins EventData {
    constructor(metadata: cast$framework$ApplicationMetadata): this;
    metadata: cast$framework$ApplicationMetadata;
  }

  declare class cast$framework$ApplicationStatusEventData mixins EventData {
    constructor(status: string): this;
    status: string;
  }

  declare class cast$framework$CastStateEventData mixins EventData {
    constructor(castState: cast$framework$CastState): this;
    castState: cast$framework$CastState;
  }

  declare class cast$framework$MediaSessionEventData mixins EventData {
    constructor(mediaSession: chrome.castmediaMedia): this;
    mediaSession: chrome.castmediaMedia;
  }

  declare class cast$framework$RemotePlayerChangedEvent<T = any>
    mixins EventData {
    constructor(
      type: cast$framework$RemotePlayerEventType,
      field: string,
      value: T
    ): this;
    field: string;
    value: T;
  }

  declare class cast$framework$SessionStateEventData mixins EventData {
    constructor(
      session: cast$framework$CastSession,
      sessionState: cast$framework$SessionState,
      opt_errorCode: chrome.castErrorCode
    ): this;
    errorCode: chrome.castErrorCode;
    session: cast$framework$CastSession;
    sessionState: cast$framework$SessionState;
  }

  declare class cast$framework$VolumeEventData mixins EventData {
    constructor(volume: number, isMute: boolean): this;
    isMute: boolean;
    volume: number;
  }
}
