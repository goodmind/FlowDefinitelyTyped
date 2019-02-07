declare module "screenfull" {
  declare var screenfull: IScreenfull | false;
  declare interface IScreenfullRaw {
    requestFullscreen?: string;
    exitFullscreen?: string;
    fullscreenElement?: string;
    fullscreenEnabled?: string;
    fullscreenchange?: string;
    fullscreenerror?: string;
  }
  declare interface IScreenfull {
    isFullscreen: boolean;
    element: Element;
    enabled: boolean;
    raw: IScreenfullRaw;
    request(elem?: Element): void;
    toggle(elem?: Element): void;
    exit(): void;
    onchange(handler: () => void): void;
    onerror(handler: (event: Event) => void): void;
    on(name: EventNameMap, handler: (event: Event) => void): void;
    off(name: EventNameMap, handler: (event: Event) => void): void;
  }
  declare type EventNameMap = "change" | "error";
  declare module.exports: typeof screenfull;
}
