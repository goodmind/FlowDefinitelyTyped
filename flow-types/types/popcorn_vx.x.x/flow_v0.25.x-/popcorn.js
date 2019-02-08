declare module "popcorn" {
  declare var Popcorn: PopcornStatic;
  declare interface PopcornStatic {
    (callback: Function): PopcornImpl;
    (selector: string, options?: any): PopcornImpl;
    plugin: {
      (pluginName: string, info: PopcornPlugin, manifest?: any): any,
      debug: boolean,
      errors: any[]
    };
    util: {
      toSeconds(smpte: string, fps?: number): number
    };
    destroy(insntace: PopcornImpl): void;
    extend(target: string, source: any, ...rest: any[]): void;
    forEach(object: any, callback: Function, context?: any): void;
    getJSONP(url: string, successCallback: Function): void;
    getScript(url: string, successCallback: Function): void;
    guid(prefix: string): void;
    locale: PopcornLocale;
    parser(parserName: any, fn: any, data: any): void;
  }
  declare interface PopcornLocale {
    get(): string;
    set(langRegion: string): void;
  }
  declare interface PopcornImpl {
    media: HTMLMediaElement;
    footnote(data: Footnote): void;
    autoplay(flag: boolean): void;
    buffered(): TimeRanges;
    compose(name: string, definitionObject: any, manifest?: any): void;
    controls(flag: boolean): void;
    cue(time: string, callback: Function): void;
    cue(time: number, callback: Function): void;
    currentTime(time?: string): number;
    currentTime(time?: number): number;
    defaults(pluginName: string, options: any): void;
    destroy(): void;
    disable(pluginName: string): void;
    duration(): number;
    emit(eventName: string, dataObject?: any): void;
    enable(pluginName: string): PopcornImpl;
    exec(time: string, callback: Function): void;
    exec(time: number, callback: Function): void;
    listen(eventName: string, callback: Function): void;
    load(): void;
    loop(flag: boolean): void;
    mute(): void;
    muted(flag: boolean): void;
    off(eventName: string, callback: Function): void;
    on(eventName: string, callback: Function): void;
    pause(time?: number): void;
    pause(time?: string): void;
    paused(): boolean;
    play(time?: number): void;
    play(time?: string): void;
    playbackRate(rate?: number): void;
    played(): TimeRanges;
    position(): ClientRect;
    preload(state: string): void;
    readyState(): number;
    roundTime(): number;
    seekable(): any;
    seeking(): boolean;
    toggle(pluginName: string): void;
    trigger(eventName: string, dataObject?: any): void;
    unlisten(eventName: string, callback: Function): void;
    unmute(): void;
    volume(value?: number): number;
    getLastTrackEventId(): string;
    removeTrackEvent(id: string): void;
  }
  declare interface PopcornPlugin {
    (options: any): any;
    _setup?: (track?: TrackEvent) => void;
    _update?: (track?: TrackEvent) => void;
    _teardown?: (track?: TrackEvent) => void;
    start?: (event: any, track?: TrackEvent) => void;
    end?: (event: any, track?: TrackEvent) => void;
    frame?: (event: any, track?: TrackEvent) => void;
    toString?: () => string;
    manifest?: PopcornManifest;
  }
  declare interface PopcornManifest {
    about: PopcornManifestAbout;
    options: PopcornManifestOptions;
  }
  declare interface PopcornManifestAbout {
    name: string;
    version: string;
    author: string;
    website: string;
  }
  declare interface PopcornManifestOptions {
    start: PopcornManifestOption;
    end: PopcornManifestOption;
    target: string;
    text: PopcornManifestOption;
  }
  declare interface PopcornManifestOption {
    elem: string;
    type: string;
    label: string;
  }
  declare interface Footnote {
    start: number;
    end: number;
    target: string;
    text: string;
  }
}
