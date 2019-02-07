declare module "jwplayer" {
  declare interface jwplayer$Version {
    version: string;
    major: number;
    minor: number;
  }

  declare interface jwplayer$Browser {
    chrome: boolean;
    edge: boolean;
    facebook: boolean;
    firefox: boolean;
    ie: boolean;
    msie: boolean;
    safari: boolean;
    version: jwplayer$Version;
  }

  declare interface jwplayer$OS {
    android: boolean;
    androidNative: boolean;
    iOS: boolean;
    mobile: boolean;
    mac: boolean;
    iPad: boolean;
    iPhone: boolean;
    windows: boolean;
    version: jwplayer$Version;
  }

  declare interface jwplayer$Features {
    flash: boolean;
    flashVersion: number;
    iframe: boolean;
  }

  declare interface jwplayer$Environment {
    jwplayer$Browser: jwplayer$Browser;
    jwplayer$OS: jwplayer$OS;
    jwplayer$Features: jwplayer$Features;
  }

  declare interface jwplayer$AdProgressParam {
    client: "vast" | "googima";
    creativetype: string;
    tag: string;
  }

  declare interface jwplayer$AdCompanionsParam {
    companions: any[];
    tag: string;
  }

  declare interface jwplayer$AdErrorParam {
    message: string;
    tag: string;
  }

  declare interface jwplayer$AdRequestParam {
    adposition: "pre" | "mid" | "post";
    client: "vast" | "googima";
    offset: "pre" | "mid" | "post";
    tag: string;
  }

  declare interface jwplayer$AdImpressionParam {
    adposition: "pre" | "mid" | "post";
    adsystem: string;
    adtitle: string;
    clickThroughUrl: string;
    client: "vast" | "googima";
    creativetype: string;
    linear: string;
    mediafile: any;
    tag: string;
    vastversion: number;
    wrapper: any[];
  }

  declare interface jwplayer$AdScheduleParam {
    tag: string;
    client: string;
    adbreaks: { [key: string]: any }[];
  }

  declare interface jwplayer$AdStartedParam {
    creativetype: string;
    tag: string;
  }

  declare interface jwplayer$AdPlayParam {
    creativetype: string;
    newstate: string;
    oldstate: string;
    tag: string;
  }

  declare interface jwplayer$BufferParam {
    newstate: string;
    oldstate: string;
    reason: "loading" | "complete" | "stalled" | "error";
  }

  declare interface jwplayer$BufferChangeParam {
    duration: number;
    bufferPercent: number;
    position: number;
    metadata: any;
  }

  declare interface jwplayer$AdTimeParam {
    client: "vast" | "googima";
    creativetype: string;
    duration: number;
    position: number;
    sequence: number;
    tag: string;
  }

  declare interface jwplayer$AudioTracksParam {
    levels: any[];
  }

  declare interface jwplayer$CaptionsChangedParam {
    currentTrack: number;
  }

  declare interface jwplayer$CaptionsListParam {
    tracks: any[];
  }

  declare interface jwplayer$AudioTrackChangedParam {
    currentTrack: number;
  }

  declare interface jwplayer$MetadataParam {
    metadata: any;
  }

  declare interface jwplayer$ControlsParam {
    controls: boolean;
  }

  declare interface jwplayer$ErrorParam {
    message: string;
  }

  declare interface jwplayer$FullscreenParam {
    fullscreen: boolean;
  }

  declare interface jwplayer$IdleParam {
    oldstate: "buffering" | "playing" | "paused";
  }

  declare interface jwplayer$LevelsChangedParam {
    currentQuality: number;
  }

  declare interface jwplayer$MuteParam {
    mute: boolean;
  }

  declare interface jwplayer$VolumeParam {
    volume: boolean;
  }

  declare interface jwplayer$PlayParam {
    oldstate: "buffering" | "playing";
    viewable: 0 | 1;
  }

  declare interface jwplayer$PlaylistParam {
    playlist: any[];
  }

  declare interface jwplayer$PlaylistItemParam {
    index: number;
    item: any;
  }

  declare interface jwplayer$ReadyParam {
    setupTime: number;
    viewable: 0 | 1;
  }

  declare interface jwplayer$ResizeParam {
    width: number;
    height: number;
  }

  declare interface jwplayer$VisualQualityParam {
    mode: string;
    label: string;
    reason: string;
  }

  declare interface jwplayer$LevelsParam {
    width: number;
    levels: any[];
  }

  declare interface jwplayer$SeekParam {
    position: number;
    offset: number;
  }

  declare interface jwplayer$TimeParam {
    duration: number;
    position: number;
    viewable: 0 | 1;
  }

  declare interface jwplayer$FirstFrameParam {
    loadTime: number;
    viewable: 0 | 1;
  }

  declare type jwplayer$EventCallback<T> = (param: T) => void;

  declare interface jwplayer$Region {
    x: 0;
    y: 0;
    width: number;
    height: number;
  }

  declare interface jwplayer$CaptionOptions {
    color: string;
    fontSize: number;
    fontFamily: string;
    fontOpacity: number;
    backgroundColor: string;
    backgroundOpacity: number;
    edgeStyle: string;
    windowColor: string;
    windowOpacity: number;
  }

  declare interface jwplayer$Level {
    bitrate: number;
    height: number;
    width: number;
    label: string;
  }

  declare interface jwplayer$QualityLevel {
    mode: "auto" | "manual";
    level: jwplayer$Level;
    reason: "auto" | "api" | "initial choice";
  }

  declare interface jwplayer$CastParam {
    available: boolean;
    active: boolean;
    deviceName: string;
    type: "cast";
  }

  declare interface jwplayer$EventParams {
    adClick: jwplayer$AdProgressParam;
    adCompanions: jwplayer$AdCompanionsParam;
    adComplete: jwplayer$AdProgressParam;
    adSkipped: jwplayer$AdProgressParam;
    adError: jwplayer$AdErrorParam;
    adRequest: jwplayer$AdRequestParam;
    adSchedule: jwplayer$AdScheduleParam;
    adStarted: jwplayer$AdStartedParam;
    adImpression: jwplayer$AdImpressionParam;
    adPlay: jwplayer$AdPlayParam;
    adPause: jwplayer$AdPlayParam;
    adTime: jwplayer$AdTimeParam;
    cast: jwplayer$CastParam;
    meta: jwplayer$MetadataParam;
    audioTracks: jwplayer$AudioTracksParam;
    audioTrackChanged: jwplayer$AudioTrackChangedParam;
    firstFrame: jwplayer$FirstFrameParam;
    buffer: jwplayer$BufferParam;
    bufferChange: jwplayer$BufferChangeParam;
    captionsChanged: jwplayer$CaptionsChangedParam;
    captionsList: jwplayer$CaptionsListParam;
    controls: jwplayer$ControlsParam;
    error: jwplayer$ErrorParam;
    fullscreen: jwplayer$FullscreenParam;
    idle: jwplayer$IdleParam;
    levelsChanged: jwplayer$LevelsChangedParam;
    mute: jwplayer$MuteParam;
    volume: jwplayer$VolumeParam;
    pause: jwplayer$PlayParam;
    play: jwplayer$PlayParam;
    playlist: jwplayer$PlaylistParam;
    playlistItem: jwplayer$PlaylistItemParam;
    ready: jwplayer$ReadyParam;
    resize: jwplayer$ResizeParam;
    visualQuality: jwplayer$VisualQualityParam;
    levels: jwplayer$LevelsParam;
    seek: jwplayer$SeekParam;
    setupError: jwplayer$ErrorParam;
    time: jwplayer$TimeParam;
  }

  declare type jwplayer$NoParamEvent =
    | "adBlock"
    | "beforeComplete"
    | "complete"
    | "beforePlay"
    | "displayClick"
    | "playlistComplete"
    | "seeked"
    | "remove";

  declare interface jwplayer$JWPlayer {
    addButton(
      icon: string,
      label: string,
      handler: () => void,
      id: string
    ): void;
    getAudioTracks(): any[];
    getBuffer(): number;
    getCaptionsList(): any[];
    getControls(): boolean;
    getCurrentAudioTrack(): number;
    getCurrentCaptions(): number;
    getCurrentQuality(): number;
    getDuration(): number;
    getHeight(): number;
    getFullscreen(): boolean;
    getMute(): boolean;
    getPlaylist(): any[];
    getPlaylistIndex(): number;
    getPlaylistItem(index?: number): any;
    getPosition(): number;
    getQualityLevels(): any[];
    getRenderingMode(): string;
    getSafeRegion(): jwplayer$Region;
    getState(): string;
    getVolume(): number;
    getContainer(): HTMLElement;
    getEnvironment(): jwplayer$Environment;
    getWidth(): number;
    getVisualQuality(): jwplayer$QualityLevel | void;
    load(playlist: any[] | string): void;
    on<TEvent: $Keys<jwplayer$EventParams>>(
      event: TEvent,
      callback: jwplayer$EventCallback<
        $ElementType<jwplayer$EventParams, TEvent>
      >
    ): void;
    on(event: jwplayer$NoParamEvent, callback: () => void): void;
    once<TEvent: $Keys<jwplayer$EventParams>>(
      event: TEvent,
      callback: jwplayer$EventCallback<
        $ElementType<jwplayer$EventParams, TEvent>
      >
    ): void;
    once(event: jwplayer$NoParamEvent, callback: () => void): void;
    off(event: $Keys<jwplayer$EventParams> | jwplayer$NoParamEvent): void;
    trigger<TEvent: $Keys<jwplayer$EventParams>>(
      event: TEvent,
      args: $ElementType<jwplayer$EventParams, TEvent>
    ): void;
    trigger(event: jwplayer$NoParamEvent): void;
    pause(state?: boolean): void;
    play(state?: boolean): void;
    playAd(tag: string): void;
    playlistItem(index: number): void;
    registerPlugin(
      id: string,
      target: string,
      jsPlugin: () => void,
      swfURL?: string
    ): void;
    remove(): void;
    removeButton(id: string): void;
    resize(width: number, height: number): void;
    seek(position: number): void;
    setControls(controls: boolean): void;
    setCurrentAudioTrack(index: number): void;
    setCurrentCaptions(index: number): void;
    setCurrentQuality(index: number): void;
    setFullscreen(state: boolean): void;
    setMute(state?: boolean): void;
    setup(options: any): jwplayer$JWPlayer;
    setVolume(volume: number): void;
    setCaptions(options: jwplayer$CaptionOptions): void;
    stop(): void;
  }

  declare interface jwplayer$JWPlayerStatic {
    (query?: string | number | Element): jwplayer$JWPlayer;
    key: string;
    version: string;
  }
  declare var jwplayer: jwplayer$jwplayer$JWPlayerStatic;
}
