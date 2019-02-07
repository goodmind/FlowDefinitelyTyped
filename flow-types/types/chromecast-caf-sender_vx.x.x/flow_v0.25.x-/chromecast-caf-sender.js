declare module "chromecast-caf-sender" {
  declare interface Window {
    cast: typeof cast;
  }

  declare var npm$namespace$framework: {
    setLoggerLevel: typeof framework$setLoggerLevel,
    VERSION: typeof framework$VERSION
  };
  declare class framework$LoggerLevel {
    constructor(...args: empty): mixed;
    static +DEBUG: Class<framework$LoggerLevel__DEBUG> &
      framework$LoggerLevel__DEBUG &
      0; // 0
    static +INFO: Class<framework$LoggerLevel__INFO> &
      framework$LoggerLevel__INFO &
      1; // 1
    static +WARNING: Class<framework$LoggerLevel__WARNING> &
      framework$LoggerLevel__WARNING &
      2; // 2
    static +ERROR: Class<framework$LoggerLevel__ERROR> &
      framework$LoggerLevel__ERROR &
      3; // 3
    static +NONE: Class<framework$LoggerLevel__NONE> &
      framework$LoggerLevel__NONE &
      4; // 4
  }

  declare class framework$LoggerLevel__DEBUG mixins framework$LoggerLevel {}
  declare class framework$LoggerLevel__INFO mixins framework$LoggerLevel {}
  declare class framework$LoggerLevel__WARNING mixins framework$LoggerLevel {}
  declare class framework$LoggerLevel__ERROR mixins framework$LoggerLevel {}
  declare class framework$LoggerLevel__NONE mixins framework$LoggerLevel {}

  declare class framework$CastState {
    constructor(...args: empty): mixed;
    static +NO_DEVICES_AVAILABLE: Class<framework$CastState__NO_DEVICES_AVAILABLE> &
      framework$CastState__NO_DEVICES_AVAILABLE &
      "NO_DEVICES_AVAILABLE"; // "NO_DEVICES_AVAILABLE"
    static +NOT_CONNECTED: Class<framework$CastState__NOT_CONNECTED> &
      framework$CastState__NOT_CONNECTED &
      "NOT_CONNECTED"; // "NOT_CONNECTED"
    static +CONNECTING: Class<framework$CastState__CONNECTING> &
      framework$CastState__CONNECTING &
      "CONNECTING"; // "CONNECTING"
    static +CONNECTED: Class<framework$CastState__CONNECTED> &
      framework$CastState__CONNECTED &
      "CONNECTED"; // "CONNECTED"
  }

  declare class framework$CastState__NO_DEVICES_AVAILABLE
    mixins framework$CastState {}
  declare class framework$CastState__NOT_CONNECTED mixins framework$CastState {}
  declare class framework$CastState__CONNECTING mixins framework$CastState {}
  declare class framework$CastState__CONNECTED mixins framework$CastState {}

  declare class framework$SessionState {
    constructor(...args: empty): mixed;
    static +NO_SESSION: Class<framework$SessionState__NO_SESSION> &
      framework$SessionState__NO_SESSION &
      "NO_SESSION"; // "NO_SESSION"
    static +SESSION_STARTING: Class<framework$SessionState__SESSION_STARTING> &
      framework$SessionState__SESSION_STARTING &
      "SESSION_STARTING"; // "SESSION_STARTING"
    static +SESSION_STARTED: Class<framework$SessionState__SESSION_STARTED> &
      framework$SessionState__SESSION_STARTED &
      "SESSION_STARTED"; // "SESSION_STARTED"
    static +SESSION_START_FAILED: Class<framework$SessionState__SESSION_START_FAILED> &
      framework$SessionState__SESSION_START_FAILED &
      "SESSION_START_FAILED"; // "SESSION_START_FAILED"
    static +SESSION_ENDING: Class<framework$SessionState__SESSION_ENDING> &
      framework$SessionState__SESSION_ENDING &
      "SESSION_ENDING"; // "SESSION_ENDING"
    static +SESSION_ENDED: Class<framework$SessionState__SESSION_ENDED> &
      framework$SessionState__SESSION_ENDED &
      "SESSION_ENDED"; // "SESSION_ENDED"
    static +SESSION_RESUMED: Class<framework$SessionState__SESSION_RESUMED> &
      framework$SessionState__SESSION_RESUMED &
      "SESSION_RESUMED"; // "SESSION_RESUMED"
  }

  declare class framework$SessionState__NO_SESSION
    mixins framework$SessionState {}
  declare class framework$SessionState__SESSION_STARTING
    mixins framework$SessionState {}
  declare class framework$SessionState__SESSION_STARTED
    mixins framework$SessionState {}
  declare class framework$SessionState__SESSION_START_FAILED
    mixins framework$SessionState {}
  declare class framework$SessionState__SESSION_ENDING
    mixins framework$SessionState {}
  declare class framework$SessionState__SESSION_ENDED
    mixins framework$SessionState {}
  declare class framework$SessionState__SESSION_RESUMED
    mixins framework$SessionState {}

  declare class framework$CastContextEventType {
    constructor(...args: empty): mixed;
    static +CAST_STATE_CHANGED: Class<framework$CastContextEventType__CAST_STATE_CHANGED> &
      framework$CastContextEventType__CAST_STATE_CHANGED &
      "caststatechanged"; // "caststatechanged"
    static +SESSION_STATE_CHANGED: Class<framework$CastContextEventType__SESSION_STATE_CHANGED> &
      framework$CastContextEventType__SESSION_STATE_CHANGED &
      "sessionstatechanged"; // "sessionstatechanged"
  }

  declare class framework$CastContextEventType__CAST_STATE_CHANGED
    mixins framework$CastContextEventType {}
  declare class framework$CastContextEventType__SESSION_STATE_CHANGED
    mixins framework$CastContextEventType {}

  declare class framework$SessionEventType {
    constructor(...args: empty): mixed;
    static +APPLICATION_STATUS_CHANGED: Class<framework$SessionEventType__APPLICATION_STATUS_CHANGED> &
      framework$SessionEventType__APPLICATION_STATUS_CHANGED &
      "applicationstatuschanged"; // "applicationstatuschanged"
    static +APPLICATION_METADATA_CHANGED: Class<framework$SessionEventType__APPLICATION_METADATA_CHANGED> &
      framework$SessionEventType__APPLICATION_METADATA_CHANGED &
      "applicationmetadatachanged"; // "applicationmetadatachanged"
    static +ACTIVE_INPUT_STATE_CHANGED: Class<framework$SessionEventType__ACTIVE_INPUT_STATE_CHANGED> &
      framework$SessionEventType__ACTIVE_INPUT_STATE_CHANGED &
      "activeinputstatechanged"; // "activeinputstatechanged"
    static +VOLUME_CHANGED: Class<framework$SessionEventType__VOLUME_CHANGED> &
      framework$SessionEventType__VOLUME_CHANGED &
      "volumechanged"; // "volumechanged"
    static +MEDIA_SESSION: Class<framework$SessionEventType__MEDIA_SESSION> &
      framework$SessionEventType__MEDIA_SESSION &
      "mediasession"; // "mediasession"
  }

  declare class framework$SessionEventType__APPLICATION_STATUS_CHANGED
    mixins framework$SessionEventType {}
  declare class framework$SessionEventType__APPLICATION_METADATA_CHANGED
    mixins framework$SessionEventType {}
  declare class framework$SessionEventType__ACTIVE_INPUT_STATE_CHANGED
    mixins framework$SessionEventType {}
  declare class framework$SessionEventType__VOLUME_CHANGED
    mixins framework$SessionEventType {}
  declare class framework$SessionEventType__MEDIA_SESSION
    mixins framework$SessionEventType {}

  declare class framework$RemotePlayerEventType {
    constructor(...args: empty): mixed;
    static +ANY_CHANGE: Class<framework$RemotePlayerEventType__ANY_CHANGE> &
      framework$RemotePlayerEventType__ANY_CHANGE &
      "anyChanged"; // "anyChanged"
    static +IS_CONNECTED_CHANGED: Class<framework$RemotePlayerEventType__IS_CONNECTED_CHANGED> &
      framework$RemotePlayerEventType__IS_CONNECTED_CHANGED &
      "isConnectedChanged"; // "isConnectedChanged"
    static +IS_MEDIA_LOADED_CHANGED: Class<framework$RemotePlayerEventType__IS_MEDIA_LOADED_CHANGED> &
      framework$RemotePlayerEventType__IS_MEDIA_LOADED_CHANGED &
      "isMediaLoadedChanged"; // "isMediaLoadedChanged"
    static +DURATION_CHANGED: Class<framework$RemotePlayerEventType__DURATION_CHANGED> &
      framework$RemotePlayerEventType__DURATION_CHANGED &
      "durationChanged"; // "durationChanged"
    static +CURRENT_TIME_CHANGED: Class<framework$RemotePlayerEventType__CURRENT_TIME_CHANGED> &
      framework$RemotePlayerEventType__CURRENT_TIME_CHANGED &
      "currentTimeChanged"; // "currentTimeChanged"
    static +IS_PAUSED_CHANGED: Class<framework$RemotePlayerEventType__IS_PAUSED_CHANGED> &
      framework$RemotePlayerEventType__IS_PAUSED_CHANGED &
      "isPausedChanged"; // "isPausedChanged"
    static +VOLUME_LEVEL_CHANGED: Class<framework$RemotePlayerEventType__VOLUME_LEVEL_CHANGED> &
      framework$RemotePlayerEventType__VOLUME_LEVEL_CHANGED &
      "volumeLevelChanged"; // "volumeLevelChanged"
    static +CAN_CONTROL_VOLUME_CHANGED: Class<framework$RemotePlayerEventType__CAN_CONTROL_VOLUME_CHANGED> &
      framework$RemotePlayerEventType__CAN_CONTROL_VOLUME_CHANGED &
      "canControlVolumeChanged"; // "canControlVolumeChanged"
    static +IS_MUTED_CHANGED: Class<framework$RemotePlayerEventType__IS_MUTED_CHANGED> &
      framework$RemotePlayerEventType__IS_MUTED_CHANGED &
      "isMutedChanged"; // "isMutedChanged"
    static +CAN_PAUSE_CHANGED: Class<framework$RemotePlayerEventType__CAN_PAUSE_CHANGED> &
      framework$RemotePlayerEventType__CAN_PAUSE_CHANGED &
      "canPauseChanged"; // "canPauseChanged"
    static +CAN_SEEK_CHANGED: Class<framework$RemotePlayerEventType__CAN_SEEK_CHANGED> &
      framework$RemotePlayerEventType__CAN_SEEK_CHANGED &
      "canSeekChanged"; // "canSeekChanged"
    static +DISPLAY_NAME_CHANGED: Class<framework$RemotePlayerEventType__DISPLAY_NAME_CHANGED> &
      framework$RemotePlayerEventType__DISPLAY_NAME_CHANGED &
      "displayNameChanged"; // "displayNameChanged"
    static +STATUS_TEXT_CHANGED: Class<framework$RemotePlayerEventType__STATUS_TEXT_CHANGED> &
      framework$RemotePlayerEventType__STATUS_TEXT_CHANGED &
      "statusTextChanged"; // "statusTextChanged"
    static +TITLE_CHANGED: Class<framework$RemotePlayerEventType__TITLE_CHANGED> &
      framework$RemotePlayerEventType__TITLE_CHANGED &
      "titleChanged"; // "titleChanged"
    static +DISPLAY_STATUS_CHANGED: Class<framework$RemotePlayerEventType__DISPLAY_STATUS_CHANGED> &
      framework$RemotePlayerEventType__DISPLAY_STATUS_CHANGED &
      "displayStatusChanged"; // "displayStatusChanged"
    static +MEDIA_INFO_CHANGED: Class<framework$RemotePlayerEventType__MEDIA_INFO_CHANGED> &
      framework$RemotePlayerEventType__MEDIA_INFO_CHANGED &
      "mediaInfoChanged"; // "mediaInfoChanged"
    static +IMAGE_URL_CHANGED: Class<framework$RemotePlayerEventType__IMAGE_URL_CHANGED> &
      framework$RemotePlayerEventType__IMAGE_URL_CHANGED &
      "imageUrlChanged"; // "imageUrlChanged"
    static +PLAYER_STATE_CHANGED: Class<framework$RemotePlayerEventType__PLAYER_STATE_CHANGED> &
      framework$RemotePlayerEventType__PLAYER_STATE_CHANGED &
      "playerStateChanged"; // "playerStateChanged"
  }

  declare class framework$RemotePlayerEventType__ANY_CHANGE
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__IS_CONNECTED_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__IS_MEDIA_LOADED_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__DURATION_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__CURRENT_TIME_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__IS_PAUSED_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__VOLUME_LEVEL_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__CAN_CONTROL_VOLUME_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__IS_MUTED_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__CAN_PAUSE_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__CAN_SEEK_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__DISPLAY_NAME_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__STATUS_TEXT_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__TITLE_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__DISPLAY_STATUS_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__MEDIA_INFO_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__IMAGE_URL_CHANGED
    mixins framework$RemotePlayerEventType {}
  declare class framework$RemotePlayerEventType__PLAYER_STATE_CHANGED
    mixins framework$RemotePlayerEventType {}

  declare class framework$ActiveInputState {
    constructor(...args: empty): mixed;
    static +ACTIVE_INPUT_STATE_UNKNOWN: Class<framework$ActiveInputState__ACTIVE_INPUT_STATE_UNKNOWN> &
      framework$ActiveInputState__ACTIVE_INPUT_STATE_UNKNOWN &
      -1; // -1
    static +ACTIVE_INPUT_STATE_NO: Class<framework$ActiveInputState__ACTIVE_INPUT_STATE_NO> &
      framework$ActiveInputState__ACTIVE_INPUT_STATE_NO &
      0; // 0
    static +ACTIVE_INPUT_STATE_YES: Class<framework$ActiveInputState__ACTIVE_INPUT_STATE_YES> &
      framework$ActiveInputState__ACTIVE_INPUT_STATE_YES &
      1; // 1
  }

  declare class framework$ActiveInputState__ACTIVE_INPUT_STATE_UNKNOWN
    mixins framework$ActiveInputState {}
  declare class framework$ActiveInputState__ACTIVE_INPUT_STATE_NO
    mixins framework$ActiveInputState {}
  declare class framework$ActiveInputState__ACTIVE_INPUT_STATE_YES
    mixins framework$ActiveInputState {}

  declare interface framework$CastOptions {
    autoJoinPolicy: chrome.cast.AutoJoinPolicy;
    language?: string;
    receiverApplicationId?: string;
    resumeSavedSession?: boolean;
  }

  declare var framework$VERSION: string;

  declare function framework$setLoggerLevel(level: framework$LoggerLevel): void;

  declare class framework$CastContext {
    static getInstance(): framework$CastContext;
    setOptions(options: framework$CastOptions): void;
    getCastState(): framework$CastState;
    getSessionState(): framework$SessionState;
    requestSession(): Promise<chrome.cast.ErrorCode | void>;
    getCurrentSession(): framework$CastSession | null;
    endCurrentSession(stopCasting: boolean): void;
    addEventListener(
      type: framework$CastContextEventType.CAST_STATE_CHANGED,
      handler: (event: framework$CastStateEventData) => void
    ): void;
    addEventListener(
      type: framework$CastContextEventType.SESSION_STATE_CHANGED,
      handler: (event: framework$SessionStateEventData) => void
    ): void;
    removeEventListener(
      type: framework$CastContextEventType.CAST_STATE_CHANGED,
      handler: (event: framework$CastStateEventData) => void
    ): void;
    removeEventListener(
      type: framework$CastContextEventType.SESSION_STATE_CHANGED,
      handler: (event: framework$SessionStateEventData) => void
    ): void;
  }

  declare class framework$CastSession {
    constructor(
      sessionObj: chrome.cast.Session,
      state: framework$SessionState
    ): this;
    getSessionObj(): chrome.cast.Session;
    getSessionId(): string;
    getSessionState(): framework$SessionState;
    getCastDevice(): chrome.cast.Receiver;
    getApplicationMetadata(): framework$ApplicationMetadata;
    getApplicationStatus(): string;
    getActiveInputState(): framework$ActiveInputState;
    endSession(stopCasting: boolean): void;
    setVolume(volume: number): Promise<chrome.cast.ErrorCode | void>;
    getVolume(): number;
    setMute(mute: boolean): Promise<chrome.cast.ErrorCode | void>;
    isMute(): boolean;
    sendMessage(
      namespace: string,
      data: any
    ): Promise<chrome.cast.ErrorCode | void>;
    addMessageListener(
      namespace: string,
      listener: (namespace: string, message: string) => void
    ): void;
    removeMessageListener(
      namespace: string,
      listener: (namespace: string, message: string) => void
    ): void;
    loadMedia(
      request: chrome.cast.media.LoadRequest
    ): Promise<chrome.cast.ErrorCode | void>;
    getMediaSession(): chrome.cast.media.Media | null;
    addEventListener(
      type: framework$SessionEventType.ACTIVE_INPUT_STATE_CHANGED,
      handler: (event: framework$ActiveInputStateEventData) => void
    ): void;
    addEventListener(
      type: framework$SessionEventType.APPLICATION_METADATA_CHANGED,
      handler: (event: framework$ApplicationMetadataEventData) => void
    ): void;
    addEventListener(
      type: framework$SessionEventType.APPLICATION_STATUS_CHANGED,
      handler: (event: framework$ApplicationStatusEventData) => void
    ): void;
    addEventListener(
      type: framework$SessionEventType.MEDIA_SESSION,
      handler: (event: framework$MediaSessionEventData) => void
    ): void;
    addEventListener(
      type: framework$SessionEventType.VOLUME_CHANGED,
      handler: (event: framework$VolumeEventData) => void
    ): void;
    removeEventListener(
      type: framework$SessionEventType.ACTIVE_INPUT_STATE_CHANGED,
      handler: (event: framework$ActiveInputStateEventData) => void
    ): void;
    removeEventListener(
      type: framework$SessionEventType.APPLICATION_METADATA_CHANGED,
      handler: (event: framework$ApplicationMetadataEventData) => void
    ): void;
    removeEventListener(
      type: framework$SessionEventType.APPLICATION_STATUS_CHANGED,
      handler: (event: framework$ApplicationStatusEventData) => void
    ): void;
    removeEventListener(
      type: framework$SessionEventType.MEDIA_SESSION,
      handler: (event: framework$MediaSessionEventData) => void
    ): void;
    removeEventListener(
      type: framework$SessionEventType.VOLUME_CHANGED,
      handler: (event: framework$VolumeEventData) => void
    ): void;
  }

  declare class framework$RemotePlayerController {
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
      type: framework$RemotePlayerEventType,
      handler: (event: framework$RemotePlayerChangedEvent) => void
    ): void;
    removeEventListener(
      type: framework$RemotePlayerEventType,
      handler: (event: framework$RemotePlayerChangedEvent) => void
    ): void;
  }

  declare interface framework$SavedPlayerState {
    mediaInfo: chrome.cast.media.PlayerState | null;
    currentTime: number;
    isPaused: boolean;
  }

  declare class framework$RemotePlayer {
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
    mediaInfo: chrome.cast.media.MediaInfo;
    imageUrl: string | null;
    playerState: chrome.cast.media.PlayerState | null;
    savedPlayerState: framework$SavedPlayerState | null;
    controller: framework$RemotePlayerController | null;
  }

  declare class framework$ApplicationMetadata {
    constructor(sessionObj: chrome.cast.Session): this;
    applicationId: string;
    images: chrome.cast.Image[];
    name: string;
    namespaces: string[];
  }

  declare class framework$EventData {
    constructor(type: string): this;
    type: string;
  }

  declare class framework$ActiveInputStateEventData mixins framework$EventData {
    constructor(activeInputState: framework$ActiveInputState): this;
    activeInputState: framework$ActiveInputState;
  }

  declare class framework$ApplicationMetadataEventData
    mixins framework$EventData {
    constructor(metadata: framework$ApplicationMetadata): this;
    metadata: framework$ApplicationMetadata;
  }

  declare class framework$ApplicationStatusEventData
    mixins framework$EventData {
    constructor(status: string): this;
    status: string;
  }

  declare class framework$CastStateEventData mixins framework$EventData {
    constructor(castState: framework$CastState): this;
    castState: framework$CastState;
  }

  declare class framework$MediaSessionEventData mixins framework$EventData {
    constructor(mediaSession: chrome.cast.media.Media): this;
    mediaSession: chrome.cast.media.Media;
  }

  declare class framework$RemotePlayerChangedEvent<T = any>
    mixins framework$EventData {
    constructor(
      type: framework$RemotePlayerEventType,
      field: string,
      value: T
    ): this;
    field: string;
    value: T;
  }

  declare class framework$SessionStateEventData mixins framework$EventData {
    constructor(
      session: framework$CastSession,
      sessionState: framework$SessionState,
      opt_errorCode: chrome.cast.ErrorCode
    ): this;
    errorCode: chrome.cast.ErrorCode;
    session: framework$CastSession;
    sessionState: framework$SessionState;
  }

  declare class framework$VolumeEventData mixins framework$EventData {
    constructor(volume: number, isMute: boolean): this;
    isMute: boolean;
    volume: number;
  }
}
