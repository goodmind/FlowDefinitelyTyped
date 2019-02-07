declare module "playerframework" {
  declare class PlayerFramework$AdvertisingState {
    constructor(...args: empty): mixed;
    static +none: Class<PlayerFramework$AdvertisingState__none> &
      PlayerFramework$AdvertisingState__none &
      0; // 0
    static +loading: Class<PlayerFramework$AdvertisingState__loading> &
      PlayerFramework$AdvertisingState__loading &
      1; // 1
    static +linear: Class<PlayerFramework$AdvertisingState__linear> &
      PlayerFramework$AdvertisingState__linear &
      2; // 2
    static +nonLinear: Class<PlayerFramework$AdvertisingState__nonLinear> &
      PlayerFramework$AdvertisingState__nonLinear &
      3; // 3
  }

  declare class PlayerFramework$AdvertisingState__none
    mixins PlayerFramework$AdvertisingState {}
  declare class PlayerFramework$AdvertisingState__loading
    mixins PlayerFramework$AdvertisingState {}
  declare class PlayerFramework$AdvertisingState__linear
    mixins PlayerFramework$AdvertisingState {}
  declare class PlayerFramework$AdvertisingState__nonLinear
    mixins PlayerFramework$AdvertisingState {}

  declare class PlayerFramework$AutohideBehavior {
    constructor(...args: empty): mixed;
    static +none: Class<PlayerFramework$AutohideBehavior__none> &
      PlayerFramework$AutohideBehavior__none &
      0; // 0
    static +allowDuringPlaybackOnly: Class<PlayerFramework$AutohideBehavior__allowDuringPlaybackOnly> &
      PlayerFramework$AutohideBehavior__allowDuringPlaybackOnly &
      1; // 1
    static +preventDuringInteractiveHover: Class<PlayerFramework$AutohideBehavior__preventDuringInteractiveHover> &
      PlayerFramework$AutohideBehavior__preventDuringInteractiveHover &
      2; // 2
    static +all: Class<PlayerFramework$AutohideBehavior__all> &
      PlayerFramework$AutohideBehavior__all &
      3; // 3
  }

  declare class PlayerFramework$AutohideBehavior__none
    mixins PlayerFramework$AutohideBehavior {}
  declare class PlayerFramework$AutohideBehavior__allowDuringPlaybackOnly
    mixins PlayerFramework$AutohideBehavior {}
  declare class PlayerFramework$AutohideBehavior__preventDuringInteractiveHover
    mixins PlayerFramework$AutohideBehavior {}
  declare class PlayerFramework$AutohideBehavior__all
    mixins PlayerFramework$AutohideBehavior {}

  declare class PlayerFramework$InteractionType {
    constructor(...args: empty): mixed;
    static +none: Class<PlayerFramework$InteractionType__none> &
      PlayerFramework$InteractionType__none &
      0; // 0
    static +soft: Class<PlayerFramework$InteractionType__soft> &
      PlayerFramework$InteractionType__soft &
      1; // 1
    static +hard: Class<PlayerFramework$InteractionType__hard> &
      PlayerFramework$InteractionType__hard &
      2; // 2
    static +all: Class<PlayerFramework$InteractionType__all> &
      PlayerFramework$InteractionType__all &
      3; // 3
  }

  declare class PlayerFramework$InteractionType__none
    mixins PlayerFramework$InteractionType {}
  declare class PlayerFramework$InteractionType__soft
    mixins PlayerFramework$InteractionType {}
  declare class PlayerFramework$InteractionType__hard
    mixins PlayerFramework$InteractionType {}
  declare class PlayerFramework$InteractionType__all
    mixins PlayerFramework$InteractionType {}

  declare class PlayerFramework$NetworkState {
    constructor(...args: empty): mixed;
    static +empty: Class<PlayerFramework$NetworkState__empty> &
      PlayerFramework$NetworkState__empty &
      0; // 0
    static +idle: Class<PlayerFramework$NetworkState__idle> &
      PlayerFramework$NetworkState__idle &
      1; // 1
    static +loading: Class<PlayerFramework$NetworkState__loading> &
      PlayerFramework$NetworkState__loading &
      2; // 2
    static +noSource: Class<PlayerFramework$NetworkState__noSource> &
      PlayerFramework$NetworkState__noSource &
      3; // 3
  }

  declare class PlayerFramework$NetworkState__empty
    mixins PlayerFramework$NetworkState {}
  declare class PlayerFramework$NetworkState__idle
    mixins PlayerFramework$NetworkState {}
  declare class PlayerFramework$NetworkState__loading
    mixins PlayerFramework$NetworkState {}
  declare class PlayerFramework$NetworkState__noSource
    mixins PlayerFramework$NetworkState {}

  declare class PlayerFramework$MediaQuality {
    constructor(...args: empty): mixed;
    static +standardDefinition: Class<PlayerFramework$MediaQuality__standardDefinition> &
      PlayerFramework$MediaQuality__standardDefinition &
      0; // 0
    static +highDefinition: Class<PlayerFramework$MediaQuality__highDefinition> &
      PlayerFramework$MediaQuality__highDefinition &
      1; // 1
  }

  declare class PlayerFramework$MediaQuality__standardDefinition
    mixins PlayerFramework$MediaQuality {}
  declare class PlayerFramework$MediaQuality__highDefinition
    mixins PlayerFramework$MediaQuality {}

  declare class PlayerFramework$PlayerState {
    constructor(...args: empty): mixed;
    static +unloaded: Class<PlayerFramework$PlayerState__unloaded> &
      PlayerFramework$PlayerState__unloaded &
      0; // 0
    static +pending: Class<PlayerFramework$PlayerState__pending> &
      PlayerFramework$PlayerState__pending &
      1; // 1
    static +loading: Class<PlayerFramework$PlayerState__loading> &
      PlayerFramework$PlayerState__loading &
      2; // 2
    static +loaded: Class<PlayerFramework$PlayerState__loaded> &
      PlayerFramework$PlayerState__loaded &
      3; // 3
    static +opened: Class<PlayerFramework$PlayerState__opened> &
      PlayerFramework$PlayerState__opened &
      4; // 4
    static +starting: Class<PlayerFramework$PlayerState__starting> &
      PlayerFramework$PlayerState__starting &
      5; // 5
    static +started: Class<PlayerFramework$PlayerState__started> &
      PlayerFramework$PlayerState__started &
      6; // 6
    static +ending: Class<PlayerFramework$PlayerState__ending> &
      PlayerFramework$PlayerState__ending &
      7; // 7
    static +ended: Class<PlayerFramework$PlayerState__ended> &
      PlayerFramework$PlayerState__ended &
      8; // 8
    static +failed: Class<PlayerFramework$PlayerState__failed> &
      PlayerFramework$PlayerState__failed &
      9; // 9
  }

  declare class PlayerFramework$PlayerState__unloaded
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__pending
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__loading
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__loaded
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__opened
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__starting
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__started
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__ending
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__ended
    mixins PlayerFramework$PlayerState {}
  declare class PlayerFramework$PlayerState__failed
    mixins PlayerFramework$PlayerState {}

  declare class PlayerFramework$ReadyState {
    constructor(...args: empty): mixed;
    static +nothing: Class<PlayerFramework$ReadyState__nothing> &
      PlayerFramework$ReadyState__nothing &
      0; // 0
    static +metadata: Class<PlayerFramework$ReadyState__metadata> &
      PlayerFramework$ReadyState__metadata &
      1; // 1
    static +currentData: Class<PlayerFramework$ReadyState__currentData> &
      PlayerFramework$ReadyState__currentData &
      2; // 2
    static +futureData: Class<PlayerFramework$ReadyState__futureData> &
      PlayerFramework$ReadyState__futureData &
      3; // 3
    static +enoughData: Class<PlayerFramework$ReadyState__enoughData> &
      PlayerFramework$ReadyState__enoughData &
      4; // 4
  }

  declare class PlayerFramework$ReadyState__nothing
    mixins PlayerFramework$ReadyState {}
  declare class PlayerFramework$ReadyState__metadata
    mixins PlayerFramework$ReadyState {}
  declare class PlayerFramework$ReadyState__currentData
    mixins PlayerFramework$ReadyState {}
  declare class PlayerFramework$ReadyState__futureData
    mixins PlayerFramework$ReadyState {}
  declare class PlayerFramework$ReadyState__enoughData
    mixins PlayerFramework$ReadyState {}

  declare class PlayerFramework$MediaErrorCode {
    constructor(...args: empty): mixed;
    static +unknown: Class<PlayerFramework$MediaErrorCode__unknown> &
      PlayerFramework$MediaErrorCode__unknown &
      0; // 0
    static +aborted: Class<PlayerFramework$MediaErrorCode__aborted> &
      PlayerFramework$MediaErrorCode__aborted &
      1; // 1
    static +network: Class<PlayerFramework$MediaErrorCode__network> &
      PlayerFramework$MediaErrorCode__network &
      2; // 2
    static +decode: Class<PlayerFramework$MediaErrorCode__decode> &
      PlayerFramework$MediaErrorCode__decode &
      3; // 3
    static +notSupported: Class<PlayerFramework$MediaErrorCode__notSupported> &
      PlayerFramework$MediaErrorCode__notSupported &
      4; // 4
  }

  declare class PlayerFramework$MediaErrorCode__unknown
    mixins PlayerFramework$MediaErrorCode {}
  declare class PlayerFramework$MediaErrorCode__aborted
    mixins PlayerFramework$MediaErrorCode {}
  declare class PlayerFramework$MediaErrorCode__network
    mixins PlayerFramework$MediaErrorCode {}
  declare class PlayerFramework$MediaErrorCode__decode
    mixins PlayerFramework$MediaErrorCode {}
  declare class PlayerFramework$MediaErrorCode__notSupported
    mixins PlayerFramework$MediaErrorCode {}

  declare class PlayerFramework$ImageErrorCode {
    constructor(...args: empty): mixed;
    static +unknown: Class<PlayerFramework$ImageErrorCode__unknown> &
      PlayerFramework$ImageErrorCode__unknown &
      0; // 0
    static +aborted: Class<PlayerFramework$ImageErrorCode__aborted> &
      PlayerFramework$ImageErrorCode__aborted &
      1; // 1
  }

  declare class PlayerFramework$ImageErrorCode__unknown
    mixins PlayerFramework$ImageErrorCode {}
  declare class PlayerFramework$ImageErrorCode__aborted
    mixins PlayerFramework$ImageErrorCode {}

  declare class PlayerFramework$TextTrackMode {
    /**
     * The track is disabled.
     */
    static off: string;

    /**
     * The track is active, but the player is not actively displaying cues.
     */
    static hidden: string;

    /**
     * The track is active and the player is actively displaying cues.
     */
    static showing: string;
  }

  declare class PlayerFramework$TextTrackDisplayMode {
    constructor(...args: empty): mixed;
    static +none: Class<PlayerFramework$TextTrackDisplayMode__none> &
      PlayerFramework$TextTrackDisplayMode__none &
      0; // 0
    static +custom: Class<PlayerFramework$TextTrackDisplayMode__custom> &
      PlayerFramework$TextTrackDisplayMode__custom &
      1; // 1
    static +native: Class<PlayerFramework$TextTrackDisplayMode__native> &
      PlayerFramework$TextTrackDisplayMode__native &
      2; // 2
    static +all: Class<PlayerFramework$TextTrackDisplayMode__all> &
      PlayerFramework$TextTrackDisplayMode__all &
      3; // 3
  }

  declare class PlayerFramework$TextTrackDisplayMode__none
    mixins PlayerFramework$TextTrackDisplayMode {}
  declare class PlayerFramework$TextTrackDisplayMode__custom
    mixins PlayerFramework$TextTrackDisplayMode {}
  declare class PlayerFramework$TextTrackDisplayMode__native
    mixins PlayerFramework$TextTrackDisplayMode {}
  declare class PlayerFramework$TextTrackDisplayMode__all
    mixins PlayerFramework$TextTrackDisplayMode {}

  declare class PlayerFramework$TextTrackReadyState {
    constructor(...args: empty): mixed;
    static +none: Class<PlayerFramework$TextTrackReadyState__none> &
      PlayerFramework$TextTrackReadyState__none &
      0; // 0
    static +loading: Class<PlayerFramework$TextTrackReadyState__loading> &
      PlayerFramework$TextTrackReadyState__loading &
      1; // 1
    static +loaded: Class<PlayerFramework$TextTrackReadyState__loaded> &
      PlayerFramework$TextTrackReadyState__loaded &
      2; // 2
    static +error: Class<PlayerFramework$TextTrackReadyState__error> &
      PlayerFramework$TextTrackReadyState__error &
      3; // 3
  }

  declare class PlayerFramework$TextTrackReadyState__none
    mixins PlayerFramework$TextTrackReadyState {}
  declare class PlayerFramework$TextTrackReadyState__loading
    mixins PlayerFramework$TextTrackReadyState {}
  declare class PlayerFramework$TextTrackReadyState__loaded
    mixins PlayerFramework$TextTrackReadyState {}
  declare class PlayerFramework$TextTrackReadyState__error
    mixins PlayerFramework$TextTrackReadyState {}

  declare class PlayerFramework$ViewModelState {
    constructor(...args: empty): mixed;
    static +unloaded: Class<PlayerFramework$ViewModelState__unloaded> &
      PlayerFramework$ViewModelState__unloaded &
      0; // 0
    static +loading: Class<PlayerFramework$ViewModelState__loading> &
      PlayerFramework$ViewModelState__loading &
      1; // 1
    static +paused: Class<PlayerFramework$ViewModelState__paused> &
      PlayerFramework$ViewModelState__paused &
      2; // 2
    static +playing: Class<PlayerFramework$ViewModelState__playing> &
      PlayerFramework$ViewModelState__playing &
      3; // 3
  }

  declare class PlayerFramework$ViewModelState__unloaded
    mixins PlayerFramework$ViewModelState {}
  declare class PlayerFramework$ViewModelState__loading
    mixins PlayerFramework$ViewModelState {}
  declare class PlayerFramework$ViewModelState__paused
    mixins PlayerFramework$ViewModelState {}
  declare class PlayerFramework$ViewModelState__playing
    mixins PlayerFramework$ViewModelState {}

  declare interface PlayerFramework$PlaylistItem {
    src: string;
    tracks?: Array<any>;
  }

  declare class PlayerFramework$PluginBase {
    isEnabled: boolean;
    isLoaded: boolean;
    isActive: boolean;
    mediaPlayer: PlayerFramework$MediaPlayer;
    currentMediaSource: MediaSource;
    load(): void;
    unload(): void;
    update(mediaSource: MediaSource): void;
  }

  declare class Plugins$TrackingPluginBase mixins PlayerFramework$PluginBase {
    trackingEvents: Array<any>;
  }

  declare class Plugins$BufferingPlugin mixins PlayerFramework$PluginBase {
    hide(): void;
    show(): void;
  }

  declare class Plugins$ControlPlugin mixins PlayerFramework$PluginBase {
    compactThresholdInInches(): number;
    hide(): void;
    isCompact(): boolean;
    orientation(): string;
    show(): void;
  }

  declare class Plugins$ErrorPlugin mixins PlayerFramework$PluginBase {
    hide(): void;
    show(): void;
  }

  declare class Plugins$LoaderPlugin mixins PlayerFramework$PluginBase {
    hide(): void;
    show(): void;
  }

  /**
   */
  declare class Plugins$PlaylistPlugin mixins PlayerFramework$PluginBase {
    /**
     */
    autoAdvance: boolean;

    /**
     */
    currentPlaylistItem: PlayerFramework$PlaylistItem;

    /**
     */
    currentPlaylistItemIndex: number;

    /**
     */
    playlist: Array<PlayerFramework$PlaylistItem>;

    /**
     */
    startupPlaylistItemIndex: number;

    /**
     */
    skipBackThreshold: number;
    goToPreviousPlaylistItem(): void;
    goToNextPlaylistItem(): void;
    canGoToPreviousPlaylistItem(): boolean;
    canGoToNextPlaylistItem(): boolean;
  }

  declare class Plugins$PlayTimeTrackingPlugin
    mixins PlayerFramework$PluginBase {
    playTime: number;
    playTimePercentage: number;
  }

  declare class Plugins$PositionTrackingPlugin
    mixins PlayerFramework$PluginBase {
    evaluateOnForwardOnly: boolean;
    position: number;
    positionPercentage: number;
  }

  declare class Plugins$SystemTransportControlsPlugin
    mixins PlayerFramework$PluginBase {
    isPreviousTrackEnabled: boolean;
    isNextTrackEnabled: boolean;
    nextTrackExists: boolean;
    previousTrackExists: boolean;
  }

  declare class Plugins$ChaptersPlugin mixins PlayerFramework$PluginBase {
    defaultChapterCount: number;
    autoCreateDefaultChapters: boolean;
    autoCreateChaptersFromTextTracks: boolean;
    visualMarkerClass: string;
  }

  declare class Plugins$DisplayRequestPlugin mixins PlayerFramework$PluginBase {
    isRequestActive: boolean;
  }

  declare class Plugins$CaptionSelectorPlugin
    mixins PlayerFramework$PluginBase {
    hide(): void;
    show(): void;

    /**
     * Not available in phone.
     */
    alignment: string;

    /**
     * Not available in phone.
     */
    anchor: HTMLElement;

    /**
     * Not available in phone.
     */
    placement: string;
  }

  declare class Plugins$AudioSelectorPlugin mixins PlayerFramework$PluginBase {
    hide(): void;
    show(): void;

    /**
     * Not available in phone.
     */
    alignment: string;

    /**
     * Not available in phone.
     */
    anchor: HTMLElement;

    /**
     * Not available in phone.
     */
    placement: string;
  }

  /**
   */
  declare class PlayerFramework$InteractiveViewModel {
    /**
     * TODO
     */
    state: PlayerFramework$ViewModelState;

    /**
     * TODO
     */
    startTime: number;

    /**
     * TODO
     */
    maxTime: number;

    /**
     * TODO
     */
    endTime: number;

    /**
     * TODO
     */
    currentItem: number;

    /**
     * TODO
     */
    bufferedPercentage: number;

    /**
     * TODO
     */
    playPouseIcon: string;

    /**
     * TODO
     */
    playPauseLabel: string;

    /**
     * TODO
     */
    playPauseTooltip: string;

    /**
     * TODO
     */
    isPlayPauseDisabled: boolean;

    /**
     * TODO
     */
    isPlayPauseHidden: boolean;

    /**
     * TODO
     */
    playResumeIcon: string;

    /**
     * TODO
     */
    playResumeLabel: string;

    /**
     * TODO
     */
    playResumeTooltip: string;

    /**
     * TODO
     */
    isPlayResumeDisabled: boolean;

    /**
     * TODO
     */
    isPlayResumeHidden: boolean;

    /**
     * TODO
     */
    pauseIcon: string;

    /**
     * TODO
     */
    pauseLabel: string;

    /**
     * TODO
     */
    pauseTooltip: string;

    /**
     * TODO
     */
    isPauseDisabled: boolean;

    /**
     * TODO
     */
    isPauseHidden: boolean;

    /**
     * TODO
     */
    replayIcon: string;

    /**
     * TODO
     */
    replayLabel: string;

    /**
     * TODO
     */
    replayTooltip: string;

    /**
     * TODO
     */
    isReplayDisabled: boolean;

    /**
     * TODO
     */
    isReplayHidden: boolean;

    /**
     * TODO
     */
    rewindIcon: string;

    /**
     * TODO
     */
    rewindLabel: string;

    /**
     * TODO
     */
    rewindTooltip: string;

    /**
     * TODO
     */
    isRewindDisabled: boolean;

    /**
     * TODO
     */
    isRewindHidden: boolean;

    /**
     * TODO
     */
    fastForwardIcon: string;

    /**
     * TODO
     */
    fastForwardLabel: string;

    /**
     * TODO
     */
    fastForwardTooltip: string;

    /**
     * TODO
     */
    isFastForwardDisabled: boolean;

    /**
     * TODO
     */
    isFastForwardHidden: boolean;

    /**
     * TODO
     */
    slowMotionIcon: string;

    /**
     * TODO
     */
    slowMotionLabel: string;

    /**
     * TODO
     */
    slowMotionTooltip: string;

    /**
     * TODO
     */
    isSlowMotionDisabled: boolean;

    /**
     * TODO
     */
    isSlowMotionHidden: boolean;

    /**
     * TODO
     */
    skipPreviousIcon: string;

    /**
     * TODO
     */
    skipPreviousLabel: string;

    /**
     * TODO
     */
    skipPreviousTooltip: string;

    /**
     * TODO
     */
    isSkipPreviousDisabled: boolean;

    /**
     * TODO
     */
    isSkipPreviousHidden: boolean;

    /**
     * TODO
     */
    skipNextIcon: string;

    /**
     * TODO
     */
    skipNextLabel: string;

    /**
     * TODO
     */
    skipNextTooltip: string;

    /**
     * TODO
     */
    isSkipNextDisabled: boolean;

    /**
     * TODO
     */
    isSkipNextHidden: boolean;

    /**
     * TODO
     */
    skipBackIcon: string;

    /**
     * TODO
     */
    skipBackLabel: string;

    /**
     * TODO
     */
    skipBackTooltip: string;

    /**
     * TODO
     */
    isSkipBackDisabled: boolean;

    /**
     * TODO
     */
    isSkipBackHidden: boolean;

    /**
     * TODO
     */
    skipAheadIcon: string;

    /**
     * TODO
     */
    skipAheadLabel: string;

    /**
     * TODO
     */
    skipAheadTooltip: string;

    /**
     * TODO
     */
    isSkipAheadDisabled: boolean;

    /**
     * TODO
     */
    isSkipAheadHidden: boolean;

    /**
     * TODO
     */
    elapsedTime: number;

    /**
     * TODO
     */
    elapsedTimeText: string;

    /**
     * TODO
     */
    elapsedTimeLabel: string;

    /**
     * TODO
     */
    elapsedTimeTooltip: string;

    /**
     * TODO
     */
    isElapsedTimeDisabled: boolean;

    /**
     * TODO
     */
    isElapsedTimeHidden: boolean;

    /**
     * TODO
     */
    remainingTime: number;

    /**
     * TODO
     */
    remainingTimeText: string;

    /**
     * TODO
     */
    remainingTimeLabel: string;

    /**
     * TODO
     */
    remainingTimeTooltip: string;

    /**
     * TODO
     */
    isRemainingTimeDisabled: boolean;

    /**
     * TODO
     */
    isRemainingTimeHidden: boolean;

    /**
     * TODO
     */
    totalTime: number;

    /**
     * TODO
     */
    totalTimeText: string;

    /**
     * TODO
     */
    totalTimeLabel: string;

    /**
     * TODO
     */
    totalTimeTooltip: string;

    /**
     * TODO
     */
    isTotalTimeDisabled: boolean;

    /**
     * TODO
     */
    isTotalTimeHidden: boolean;

    /**
     * TODO
     */
    timelineLabel: string;

    /**
     * TODO
     */
    timelineTooltip: string;

    /**
     * TODO
     */
    isTimelineDisabled: boolean;

    /**
     * TODO
     */
    isTimelineHidden: boolean;

    /**
     * TODO
     */
    goLiveText: string;

    /**
     * TODO
     */
    goLiveLabel: string;

    /**
     * TODO
     */
    goLiveTooltip: string;

    /**
     * TODO
     */
    isGoLiveDisabled: boolean;

    /**
     * TODO
     */
    isGoLiveHidden: boolean;

    /**
     * TODO
     */
    captionsIcon: string;

    /**
     * TODO
     */
    captionsLabel: string;

    /**
     * TODO
     */
    captionsTooltip: string;

    /**
     * TODO
     */
    isCaptionsDisabled: boolean;

    /**
     * TODO
     */
    audioIcon: string;

    /**
     * TODO
     */
    audioLabel: string;

    /**
     * TODO
     */
    audioTooltip: string;

    /**
     * TODO
     */
    isAudioDisabled: boolean;

    /**
     * TODO
     */
    isAudioHidden: boolean;

    /**
     * TODO
     */
    volume: number;

    /**
     * TODO
     */
    volumeMuteIcon: string;

    /**
     * TODO
     */
    volumeMuteLabel: string;

    /**
     * TODO
     */
    volumeMuteTooltip: string;

    /**
     * TODO
     */
    isVolumeMuteDisabled: boolean;

    /**
     * TODO
     */
    isVolumeMuteHidden: boolean;

    /**
     * TODO
     */
    volumeIcon: string;

    /**
     * TODO
     */
    volumeLabel: string;

    /**
     * TODO
     */
    volumeTooltip: string;

    /**
     * TODO
     */
    isVolumeDisabled: boolean;

    /**
     * TODO
     */
    isVolumeHidden: boolean;

    /**
     * TODO
     */
    muteIcon: string;

    /**
     * TODO
     */
    muteLabel: string;

    /**
     * TODO
     */
    muteTooltip: string;

    /**
     * TODO
     */
    isMuteDisabled: boolean;

    /**
     * TODO
     */
    isMuteHidden: boolean;

    /**
     * TODO
     */
    fullScreenIcon: string;

    /**
     * TODO
     */
    fullScreenLabel: string;

    /**
     * TODO
     */
    fullScreenTooltip: string;

    /**
     * TODO
     */
    isFullScreenDisabled: boolean;

    /**
     * TODO
     */
    isFullScreenHidden: boolean;

    /**
     * TODO
     */
    stopIcon: string;

    /**
     * TODO
     */
    stopLabel: string;

    /**
     * TODO
     */
    stopTooltip: string;

    /**
     * TODO
     */
    isStopDisabled: boolean;

    /**
     * TODO
     */
    isStopHidden: boolean;

    /**
     * TODO
     */
    infoIcon: string;

    /**
     * TODO
     */
    infoLabel: string;

    /**
     * TODO
     */
    infoTooltip: string;

    /**
     * TODO
     */
    isInfoDisabled: boolean;

    /**
     * TODO
     */
    isInfoHidden: boolean;

    /**
     * TODO
     */
    moreIcon: string;

    /**
     * TODO
     */
    moreLabel: string;

    /**
     * TODO
     */
    moreTooltip: string;

    /**
     * TODO
     */
    isMoreDisabled: boolean;

    /**
     * TODO
     */
    isMoreHidden: boolean;

    /**
     * TODO
     */
    zoomIcon: string;

    /**
     * TODO
     */
    zoomLabel: string;

    /**
     * TODO
     */
    zoomTooltip: string;

    /**
     * TODO
     */
    isZoomDisabled: boolean;

    /**
     * TODO
     */
    isZoomHidden: boolean;

    /**
     * TODO
     */
    signalStrength: number;

    /**
     * TODO
     */
    signalStrengthLabel: string;

    /**
     * TODO
     */
    signalStrengthTooltip: string;

    /**
     * TODO
     */
    isSignalStrengthDisabled: boolean;

    /**
     * TODO
     */
    isSignalStrengthHidden: boolean;

    /**
     * TODO
     */
    mediaQuality: PlayerFramework$MediaQuality;

    /**
     * TODO
     */
    mediaQualityLabel: string;

    /**
     * TODO
     */
    mediaQualityTooltip: string;

    /**
     * TODO
     */
    isMediaQualityDisabled: boolean;

    /**
     * TODO
     */
    isMediaQualityHidden: boolean;

    /**
     * TODO
     */
    visualMarkers: Array<any>;

    /**
     * TODO
     */
    thumbnailImageSrc: string;

    /**
     * TODO
     */
    isThumbnailVisible: boolean;

    /**
     * TODO
     */
    mediaMetadata: Object;
    uninitialize(): void;
    playPause(e?: any): void;
    playResume(): void;
    pause(): void;
    replay(): void;
    rewind(): void;
    fastForward(): void;
    slowMotion(): void;
    skipPrevious(): void;
    skipNext(): void;
    skipBack(): void;
    skipAhead(): void;
    startScrub(time: number): void;
    updateScrub(time: number): void;
    completeScrub(time: number): void;
    goLive(): void;
    setVolume(volume: number): void;
    toggleMutted(): void;
    toggleFullScreen(): void;
    stop(): void;
    info(): void;
    more(): void;
    toggleZoom(): void;
    captions(): void;
    audio(): void;
    onTimelineSliderStart(e: any): void;
    onTimelineSliderUpdate(e: any): void;
    onTimelineSliderComplete(e: any): void;
    onTimelineSliderSkipToMarker(e: any): void;
    onVolumeSliderUpdate(e: any): void;
    onVolumeMuteClick(e: any): void;
    onVolumeMuteFocus(e: any): void;
    onVolumeMuteSliderUpdate(e: any): void;
    onVolumeMuteSliderFocusIn(e: any): void;
    onVolumeMuteSliderFocusOut(e: any): void;
    onVolumeMuteSliderMSPointerOver(e: any): void;
    onVolumeMuteSliderMSPointerOut(e: any): void;
    onVolumeMuteSliderTransitionEnd(e: any): void;
  }

  /**
   */
  declare class PlayerFramework$MediaPlayer {
    constructor(element: HTMLElement, options?: any): this;

    /**
     * Gets or sets the current advertising state of the player.
     */
    advertisingState: PlayerFramework$AdvertisingState;

    /**
     * Gets the audio tracks for the current media source.
     */
    audioTracks: Array<any>;

    /**
     * Gets or sets a value that indicates whether to automatically start buffering the current media source.
     */
    autobuffer: boolean;

    /**
     * Gets or sets a value that specifies whether interactive elements(e.g.the control panel) will be hidden automatically.
     */
    autohide: boolean;

    /**
     * Gets or sets the behavior of the autohide feature.
     */
    autohideBehavior: PlayerFramework$AutohideBehavior;

    /**
     * Gets or sets the amount of time (in seconds) before interactive elements(e.g.the control panel) will be hidden automatically.
     */
    autohideTime: number;

    /**
     * Gets or sets a value that specifies whether to start loading the current media source automatically.
     */
    autoload: boolean;

    /**
     * Gets or sets a value that specifies whether to automatically start playing the current media source.
     */
    autoplay: boolean;

    /**
     * Gets the buffered time ranges for the current media source.
     */
    buffered: Array<any>;

    /**
     * Gets the caption and subtitle tracks for the current media source.
     */
    captionTracks: Array<any>;

    /**
     * Gets or sets a value that specifies whether to display the native controls for the current media source.
     */
    controls: boolean;

    /**
     * Gets or sets the current audio track.
     */
    currentAudioTrack: any;

    /**
     * Gets or sets the current caption / subtitle track.
     */
    currentCaptionTrack: any;

    /**
     * Gets the URL of the current media source.
     */
    currentSrc: string;

    /**
     * Gets or sets the current playback position (in seconds).
     */
    currentTime: number;

    /**
     * Gets the view model that will be restored following a temporary change to the current interactive view model(e.g.during an ad).
     */
    defaultInteractiveViewModel: PlayerFramework$InteractiveViewModel;

    /**
     * Gets or sets the playback rate to use when play is resumed.
     */
    defaultPlaybackRate: number;

    /**
     * Gets the duration (in seconds) of the current media source.
     */
    duration: number;

    /**
     * Gets the host element for the control.
     */
    element: HTMLElement;

    /**
     * Gets a value that specifies whether playback has ended.
     */
    ended: boolean;

    /**
     * Gets or sets the end time (in seconds) of the current media source.This is useful in live streaming scenarios.
     */
    endTime: number;

    /**
     * Gets the current error state of the player.
     */
    error: MediaError;

    /**
     * Gets or sets the height of the host element.
     */
    height: string;

    /**
     * Gets the earliest possible position (in seconds) that playback can begin.
     */
    initialTime: number;

    /**
     * Gets or sets the type of interactions that will cause interactive elements(e.g.the control panel) to be shown.
     */
    interactiveActivationMode: PlayerFramework$InteractionType;

    /**
     * Gets or sets the type of interactions that will cause interactive elements(e.g.the control panel) to be hidden.
     */
    interactiveDeactivationMode: PlayerFramework$InteractionType;

    /**
     * Gets or sets the view model that interactive elements are bound to(e.g.the control panel).
     */
    interactiveViewModel: PlayerFramework$InteractiveViewModel;

    /**
     * Gets a value that specifies whether interaction with the audio control is allowed based on the current state of the player.
     */
    isAudioAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the audio control is enabled.
     */
    isAudioEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the audio control is visible.
     */
    isAudioVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the captions control is allowed based on the current state of the player.
     */
    isCaptionsAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the captions control is enabled.
     */
    isCaptionsEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the captions control is visible.
     */
    isCaptionsVisible: boolean;

    /**
     * Gets a value that specifies whether the current playback position is "live".
     */
    isCurrentTimeLive: boolean;

    /**
     * Gets a value that specifies whether interaction with the elapsed time control is allowed based on the current state of the player.
     */
    isElapsedTimeAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the elapsed time control is enabled.
     */
    isElapsedTimeEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the elapsed time control is visible.
     */
    isElapsedTimeVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the fast forward control is allowed based on the current state of the player.
     */
    isFastForwardAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the fast forward control is enabled.
     */
    isFastForwardEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the fast forward control is visible.
     */
    isFastForwardVisible: boolean;

    /**
     * Gets or sets a value that specifies whether the player is in full screen mode.
     */
    isFullScreen: boolean;

    /**
     * Gets a value that specifies whether interaction with the full screen control is allowed based on the current state of the player.
     */
    isFullScreenAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the full screen control is enabled.
     */
    isFullScreenEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the full screen control is visible.
     */
    isFullScreenVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the go live control is allowed based on the current state of the player.
     */
    isGoLiveAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the go live control is enabled.
     */
    isGoLiveEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the go live control is visible.
     */
    isGoLiveVisible: boolean;

    /**
     * Gets or sets a value that specifies whether the player is currently in interactive mode(e.g.showing the control panel).
     */
    isInteractive: boolean;

    /**
     * Gets a value that specifies whether the current media source is a live stream.
     */
    isLive: boolean;

    /**
     * Gets a value that specifies whether interaction with the media quality control is allowed based on the current state of the player.
     */
    isMediaQualityAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the media quality control is enabled.
     */
    isMediaQualityEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the media quality control is visible.
     */
    isMediaQualityVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the mute control is allowed based on the current state of the player.
     */
    isMuteAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the mute control is enabled.
     */
    isMuteEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the mute control is visible.
     */
    isMuteVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the pause control is allowed based on the current state of the player.
     */
    isPauseAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the pause control is enabled.
     */
    isPauseEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the pause control is visible.
     */
    isPauseVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the play / pause control is allowed based on the current state of the player.
     */
    isPlayPauseAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the play / pause control is enabled.
     */
    isPlayPauseEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the play / pause control is visible.
     */
    isPlayPauseVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the play / resume control is allowed based on the current state of the player.
     */
    isPlayResumeAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the play / resume control is enabled.
     */
    isPlayResumeEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the play / resume control is visible.
     */
    isPlayResumeVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the remaining time control is allowed based on the current state of the player.
     */
    isRemainingTimeAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the remaining time control is enabled.
     */
    isRemainingTimeEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the remaining time control is visible.
     */
    isRemainingTimeVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the replay control is allowed based on the current state of the player.
     */
    isReplayAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the replay control is enabled.
     */
    isReplayEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the replay control is visible.
     */
    isReplayVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the rewind control is allowed based on the current state of the player.
     */
    isRewindAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the rewind control is enabled.
     */
    isRewindEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the rewind control is visible.
     */
    isRewindVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the signal strength control is allowed based on the current state of the player.
     */
    isSignalStrengthAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the signal strength control is enabled.
     */
    isSignalStrengthEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the signal strength control is visible.
     */
    isSignalStrengthVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the skip ahead control is allowed based on the current state of the player.
     */
    isSkipAheadAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the skip ahead control is enabled.
     */
    isSkipAheadEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the skip ahead control is visible.
     */
    isSkipAheadVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the skip back control is allowed based on the current state of the player.
     */
    isSkipBackAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the skip back control is enabled.
     */
    isSkipBackEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the skip back control is visible.
     */
    isSkipBackVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the skip next control is allowed based on the current state of the player.
     */
    isSkipNextAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the skip next control is enabled.
     */
    isSkipNextEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the skip next control is visible.
     */
    isSkipNextVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the skip previous control is allowed based on the current state of the player.
     */
    isSkipPreviousAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the skip previous control is enabled.
     */
    isSkipPreviousEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the skip previous control is visible.
     */
    isSkipPreviousVisible: boolean;

    /**
     * Gets or sets a value that specifies whether the player is playing in slow motion.
     */
    isSlowMotion: boolean;

    /**
     * Gets a value that specifies whether interaction with the slow motion control is allowed based on the current state of the player.
     */
    isSlowMotionAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the slow motion control is enabled.
     */
    isSlowMotionEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the slow motion control is visible.
     */
    isSlowMotionVisible: boolean;

    /**
     * Gets or sets a value that specifies whether the start time is offset.
     */
    isStartTimeOffset: boolean;

    /**
     * Gets a value that specifies whether interaction with the timeline control is allowed based on the current state of the player.
     */
    isTimelineAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the timeline control is enabled.
     */
    isTimelineEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the timeline control is visible.
     */
    isTimelineVisible: boolean;

    /**
     * Gets a value that specifies whether interaction with the volume control is allowed based on the current state of the player.
     */
    isVolumeAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the volume control is enabled.
     */
    isVolumeEnabled: boolean;

    /**
     * Gets a value that specifies whether interaction with the volume / mute control is allowed based on the current state of the player.
     */
    isVolumeMuteAllowed: boolean;

    /**
     * Gets or sets a value that specifies whether the volume / mute control is enabled.
     */
    isVolumeMuteEnabled: boolean;

    /**
     * Gets or sets a value that specifies whether the volume / mute control is visible.
     */
    isVolumeMuteVisible: boolean;

    /**
     * Gets or sets a value that specifies whether the volume control is visible.
     */
    isVolumeVisible: boolean;

    /**
     * Gets or sets the live position (in seconds).
     */
    liveTime: number;

    /**
     * Gets or sets the live buffer time (in seconds) for the current playback position to be considered "live".
     */
    liveTimeBuffer: number;

    /**
     * Gets or sets a value that specifies whether playback should be restarted after it ends.
     */
    loop: boolean;

    /**
     * Gets the media element associated with the player.
     */
    mediaElement: HTMLMediaElement;

    /**
     * Gets or sets the media extension manager to be used by the player and its plugins.A new instance will be created on first use if one is not already set.
     */
    mediaExtensionManager: Windows.Media.MediaExtensionManager;

    /**
     * Gets or sets the quality of the current media source.
     */
    mediaQuality: PlayerFramework$MediaQuality;

    /**
     * Gets or sets a value that specifies the purpose of the media, such as background audio or alerts.
     */
    msAudioCategory: string;

    /**
     * Gets or sets a value that specifies the output device ID that the audio will be sent to.
     */
    msAudioDeviceType: string;

    /**
     * Gets or sets a value that specifies whether the media is flipped horizontally.
     */
    msHorizontalMirror: boolean;

    /**
     * Gets a value that specifies whether the media can be rendered more efficiently.
     */
    msIsLayoutOptimalForPlayback: boolean;

    /**
     * Gets a value that specifies whether the system considers the media to be stereo 3D.
     */
    msIsStereo3D: boolean;

    /**
     * Gets or sets a value that specifies whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: boolean;

    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: boolean;

    /**
     * Gets the media source for use by the PlayToManager.
     */
    msPlayToSource: Object;

    /**
     * Gets or sets a value that specifies whether or not to enable low - latency playback.
     */
    msRealTime: boolean;

    /**
     * Gets or sets the frame - packing mode for stereo 3D video content.
     */
    msStereo3DPackingMode: string;

    /**
     * Gets or sets a value that specifies whether the system display is set to stereo display.
     */
    msStereo3DRenderMode: string;

    /**
     * Gets or sets a value that specifies whether the video frame is trimmed to fit the display.
     */
    msZoom: boolean;

    /**
     * Gets or sets a value that indicates whether the audio is muted.
     */
    muted: boolean;

    /**
     * Gets the current network state for the player.
     */
    networkState: PlayerFramework$NetworkState;

    /**
     * Gets a value that specifies whether playback is paused.
     */
    paused: boolean;

    /**
     * Gets or sets the playback rate for the current media source.
     */
    playbackRate: number;

    /**
     * Gets the played time ranges for the current media source.
     */
    played: Array<any>;

    /**
     * Gets the playlist plugin.
     */
    playlistPlugin: Plugins$Plugins$PlaylistPlugin;

    /**
     * Gets or sets the current state of the player.
     */
    playerState: PlayerFramework$PlayerState;
    plugins: Array<any>;
    poster: string;

    /**
     * * Gets or sets a hint to how much buffering is advisable for the current media source.
     */
    preload: string;

    /**
     * Gets the current readiness state of the player.
     */
    readyState: PlayerFramework$ReadyState;

    /**
     * Gets or sets the amount of time (in seconds) to offset the current playback position during replay.
     */
    replayOffset: number;

    /**
     * Gets a value that specifies whether the player is currently moving to a new playback position due to a scrub operation.
     */
    scrubbing: boolean;

    /**
     * Gets the seekable time ranges of the current media source.
     */
    seekable: any;

    /**
     * Gets a value that specifies whether the player is currently moving to a new playback position due to a seek operation.
     */
    seeking: boolean;

    /**
     * Gets or sets a value that specifies whether the current video frame should be updated during a scrub operation.
     */
    seekWhileScrubbing: boolean;

    /**
     * Gets or sets the signal strength of the current media source.This is useful in adaptive streaming scenarios.
     */
    signalStrength: number;

    /**
     * Gets or sets the amount of time (in seconds) that the skip ahead control will seek forward.
     */
    skipAheadInterval: number;

    /**
     * Gets or sets the amount of time (in seconds) that the skip back control will seek backward.
     */
    skipBackInterval: number;

    /**
     * Gets or sets the playback rate to use when in slow motion.
     */
    slowMotionPlaybackRate: number;

    /**
     * Gets or sets the media sources to be considered.
     */
    sources: Array<any>;

    /**
     * Gets or sets the URL of the current media source to be considered.
     */
    src: string;

    /**
     * Gets or sets the start time (in seconds) of the current media source.This is useful in live streaming scenarios.
     */
    startTime: number;

    /**
     * Gets or sets the position (in seconds) where playback should start.This is useful for resuming a video where the user left off in a previous session.
     */
    startupTime: number;

    /**
     * Gets or sets whether a test for the media feature pack should be performed prior to allowing content to be laoded.This is useful to enable if Windows 8 N / KN users will be using this app.
     */
    testForMediaPack: boolean;

    /**
     * Gets the text tracks for the current media source.
     */
    textTracks: any;

    /**
     * Gets or sets the tracks for the player.
     */
    tracks: Array<any>;

    /**
     * Gets the intrinsic height of the current video (in pixels).
     */
    videoHeight: number;

    /**
     * Gets the intrinsic width of the current video (in pixels).
     */
    videoWidth: number;

    /**
     * Gets or sets the volume level(from 0 to 1) for the audio portions of media playback.
     */
    volume: number;

    /**
     * Gets or sets the width of the host element.
     */
    width: string;

    /**
     * Adds the specified CSS class to the host element.
     * @param name The name of the class to add. Multiple classes can be added using space-delimited names.
     */
    addClass(name: string): void;

    /**
     * Adds an event listener for the MediaPlayer events.
     * //TODO
     * @param type The type (name) of the event. You can use any of the following: "".
     * @param listener The listener to invoke when the event is raised.
     * @param capture true to initiate capture, otherwise false.
     */
    addEventListener(type: string, listener: Function, capture?: boolean): void;

    /**
     * Create a new TextTrack object to add to an HTML5 video.
     * @param kind String The type of text track
     * @param label String A user readable title for a text track
     * @param language String The BCP47 language tag of the track. For example "en" for English or "fr" for French
     */
    addTextTrack(kind: string, label?: string, language?: string): void;

    /**
     * Raises the audioinvoked event used to indicate that an audio selection dialog should be presented to the user (usually in the form of a flyout).
     */
    audio(): void;

    /**
     * Returns a value that specifies whether the player can play a given media type.
     * @param type The type of media to be played.
     * @returns One of the following values: "probably", "maybe", or an empty string if the media cannot be rendered.
     */
    canPlayType(type: string): string;

    /**
     * Raises the captionsinvoked event used to indicate that closed options should be toggled on/off or that a caption selection dialog should be presented to the user (usually in the form of a flyout).
     */
    captions(): void;

    /**
     * Decreases the current playback rate by a factor of two.After the rate reaches 1(normal speed), it will flip to - 1, and then begins to rewind.
     */
    decreasePlaybackRate(): void;

    /**
     * Shuts down and releases all resources.
     */
    dispose(): void;

    /**
     * Gives focus to the host element.
     */
    focus(): void;

    /**
     * Increases the current playback rate by a factor of two.After the rate reaches - 1, it flips to 1(normal speed), and then begins to fast forward.
     */
    increasePlaybackRate(): void;

    /**
     * Raises the infoinvoked event used to indicate that more information about the current media should be displayed to the user.
     */
    info(): void;

    /**
     * Reloads the current media source.
     */
    load(): void;

    /**
     * Raises the moreinvoked event typically used to indicate that more options that were unable to fit in the control panel should be presented to the user (usually in the form of a flyout).
     */
    more(): void;

    /**
     * Clears all effects from the media pipeline.
     */
    msClearEffects(): void;

    /**
     * Steps the video forward or backward by one frame.
     * @param forward If true, the video is stepped forward, otherwise the video is stepped backward.
     */
    msFrameStep(forward: boolean): void;

    /**
     * Inserts the specified audio effect into the media pipeline.
     * @param activatableClassId The audio effects class.
     * @param effectRequired
     * @param config
     */
    msInsertAudioEffect(
      activatableClassId: string,
      effectRequired: boolean,
      config: Object
    ): void;

    /**
     * Inserts the specified video effect into the media pipeline.
     * @param activatableClassId The video effects class.
     * @param effectRequired
     * @param config
     */
    msInsertVideoEffect(
      activatableClassId: string,
      effectRequired: boolean,
      config: Object
    ): void;

    /**
     * Sets the MSMediaKeys to be used for decrypting media data.
     * @param mediaKeys The media keys to use for decrypting media data.
     */
    msSetMediaKeys(mediaKeys: MSMediaKeys): void;

    /**
     * Sets the media protection manager for a given media pipeline.
     * @param mediaProtectionManager
     */
    msSetMediaProtectionManager(
      mediaProtectionManager: Windows.Media.Protection.MediaProtectionManager
    ): void;

    /**
     * Sets the dimensions of a sub - rectangle within a video.
     * @param left The left position of the rectangle.
     * @param top The top position of the rectangle.
     * @param right The right position of the rectangle.
     * @param bottom The bottom position of the rectangle.
     */
    msSetVideoRectangle(
      left: number,
      top: number,
      right: number,
      bottom: number
    ): void;

    /**
     * Pauses playback of the current media source.
     */
    pause(): void;

    /**
     * Loads and starts playback of the current media source.
     */
    play(): void;

    /**
     * Resets the playback rate and resumes playing the current media source.
     */
    playResume(): void;

    /**
     * Removes the specified CSS class from the host element.
     * @param name The name of the class to remove. Multiple classes can be removed using space-delimited names.
     */
    removeClass(name: string): void;

    /**
     * Removes an event listener from the media player control.
     * @param type The type (name) of the event. You can use any of the following: "". //TODO
     * @param eventHandler The listener to remove.
     */
    removeEventListener(eventName: string, eventHandler: Function): void;

    /**
     * Supports instant replay by applying an offset to the current playback position.
     */
    replay(): void;

    /**
     * Reloads the current media source and resumes where playback was left off.
     */
    retry(): void;

    /**
     * Stops playback and raises the stopped event.
     */
    stop(): void;

    /**
     * Updates the player and its plugins with the specified media source(e.g.the current playlist item).
     * @param mediaSource A JSON object containing the set of options that represent a media source.
     */
    update(mediaSource: Object): void;
  }

  declare class PlayerFramework$DynamicTextTrack {
    stream: any;
    label: string;
    language: string;
    augmentPayload(payload: any, startTime: number, endTime: number): void;
  }

  declare class UI$Button {
    element: HTMLElement;
    type: string;
    content: string;
    hoverContent: string;
    label: string;
    tooltip: string;
    disabled: boolean;
    hidden: boolean;
    flyout: Element;
  }

  declare class UI$ControlPanel {
    element: HTMLElement;
    hidden: boolean;
    isPlayPauseHidden: boolean;
    isPlayResumeHidden: boolean;
    isPauseHidden: boolean;
    isReplayHidden: boolean;
    isRewindHidden: boolean;
    isFastForwardHidden: boolean;
    isSlowMotionHidden: boolean;
    isSkipPreviousHidden: boolean;
    isSkipNextHidden: boolean;
    isSkipBackHidden: boolean;
    isSkipAheadHidden: boolean;
    isElapsedTimeHidden: boolean;
    isRemainingTimeHidden: boolean;
    isTotalTimeHidden: boolean;
    isTimelineHidden: boolean;
    isGoLiveHidden: boolean;
    isCaptionsHidden: boolean;
    isAudioHidden: boolean;
    isVolumeMuteHidden: boolean;
    isVolumeHidden: boolean;
    isMuteHidden: boolean;
    isFullScreenHidden: boolean;
    isStopHidden: boolean;
    isInfoHidden: boolean;
    isMoreHidden: boolean;
    isZoomHidden: boolean;
    isSignalStrengthHidden: boolean;
    isMediaQualityHidden: boolean;
    flyoutContainerElement: HTMLElement;
  }

  declare class UI$Indicator {
    element: HTMLElement;
    value: string;
    label: string;
    tooltip: string;
    disabled: boolean;
    hidden: boolean;
  }

  declare class UI$Meter {
    element: HTMLElement;
    value: number;
    label: string;
    tooltip: string;
    disabled: boolean;
    hidden: boolean;
  }

  declare class UI$Slider {
    element: HTMLElement;
    min: number;
    max: number;
    value: number;
    progress: number;
    step: number;
    altStep1: number;
    altStep2: number;
    altStep3: number;
    label: string;
    tooltip: string;
    vertical: boolean;
    disabled: boolean;
    hidden: boolean;
    markers: Array<any>;
    thumbnailImageSrc: string;
    isThumbnailVisible: boolean;
  }

  declare interface Advertising$AdvertisementBase {
    source: any;
  }

  declare class Advertising$PrerollAdvertisement
    mixins Advertising$AdvertisementBase {
    source: any;
  }

  declare class Advertising$MidrollAdvertisement
    mixins Advertising$AdvertisementBase {
    source: any;
    time: number;
    timePercentage: number;
  }
  declare class VideoAdvertising$VastAdPayloadHandler {
    static adType: string;
  }

  declare class VideoAdvertising$Extensions {
    static defaultUserAgent: string;
  }

  /**
   * Provides an ad source that requires a Url to be downloaded and turned into a stream before passing to the ad handler.
   */
  declare class Advertising$RemoteAdSource {}
}
