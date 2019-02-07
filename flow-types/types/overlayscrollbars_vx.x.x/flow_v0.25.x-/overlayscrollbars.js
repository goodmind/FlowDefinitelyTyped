declare module "overlayscrollbars" {
  declare type OverlayScrollbars$ResizeBehavior =
    | "none"
    | "both"
    | "horizontal"
    | "vertical"
    | "n"
    | "b"
    | "h"
    | "v";

  declare type OverlayScrollbars$OverflowBehavior =
    | "hidden"
    | "scroll"
    | "visible-hidden"
    | "visible-scroll"
    | "h"
    | "s"
    | "v-h"
    | "v-s";

  declare type OverlayScrollbars$VisibilityBehavior =
    | "visible"
    | "hidden"
    | "auto"
    | "v"
    | "h"
    | "a";

  declare type OverlayScrollbars$AutoHideBehavior =
    | "never"
    | "scroll"
    | "leave"
    | "move"
    | "n"
    | "s"
    | "l"
    | "m";

  declare type OverlayScrollbars$ScrollBehavior =
    | "always"
    | "ifneeded"
    | "never";

  declare type OverlayScrollbars$BlockBehavior =
    | "begin"
    | "end"
    | "center"
    | "nearest";

  declare type OverlayScrollbars$Easing = string | null | void;

  declare type OverlayScrollbars$Margin = number | boolean;

  declare type OverlayScrollbars$Position = number | string;

  declare type OverlayScrollbars$BasicEventCallback = () => void;

  declare type OverlayScrollbars$ScrollEventCallback = (args?: UIEvent) => void;

  declare type OverlayScrollbars$OverflowChangedCallback = (
    args?: OverlayScrollbars$OverflowChangedArgs
  ) => void;

  declare type OverlayScrollbars$OverflowAmountChangedCallback = (
    args?: OverlayScrollbars$OverflowAmountChangedArgs
  ) => void;

  declare type OverlayScrollbars$DirectionChangedCallback = (
    args?: OverlayScrollbars$DirectionChangedArgs
  ) => void;

  declare type OverlayScrollbars$SizeChangedCallback = (
    args?: OverlayScrollbars$SizeChangedArgs
  ) => void;

  declare type OverlayScrollbars$UpdatedCallback = (
    args?: OverlayScrollbars$UpdatedArgs
  ) => void;

  declare type OverlayScrollbars$Coordinates =
    | {
        x?: OverlayScrollbars$Position,
        y?: OverlayScrollbars$Position
      }
    | {
        l?: OverlayScrollbars$Position,
        t?: OverlayScrollbars$Position
      }
    | {
        left?: OverlayScrollbars$Position,
        top?: OverlayScrollbars$Position
      }
    | [OverlayScrollbars$Position, OverlayScrollbars$Position]
    | OverlayScrollbars$Position
    | HTMLElement
    | JQuery
    | {
        el: HTMLElement | JQuery,
        scroll?:
          | OverlayScrollbars$ScrollBehavior
          | {
              x?: OverlayScrollbars$ScrollBehavior,
              y?: OverlayScrollbars$ScrollBehavior
            }
          | [
              OverlayScrollbars$ScrollBehavior,
              OverlayScrollbars$ScrollBehavior
            ],
        block?:
          | OverlayScrollbars$BlockBehavior
          | {
              x?: OverlayScrollbars$BlockBehavior,
              y?: OverlayScrollbars$BlockBehavior
            }
          | [OverlayScrollbars$BlockBehavior, OverlayScrollbars$BlockBehavior],
        margin?:
          | OverlayScrollbars$Margin
          | {
              top?: OverlayScrollbars$Margin,
              right?: OverlayScrollbars$Margin,
              bottom?: OverlayScrollbars$Margin,
              left?: OverlayScrollbars$Margin
            }
          | [OverlayScrollbars$Margin, OverlayScrollbars$Margin]
          | [
              OverlayScrollbars$Margin,
              OverlayScrollbars$Margin,
              OverlayScrollbars$Margin,
              OverlayScrollbars$Margin
            ]
      };

  declare interface OverlayScrollbars$OverflowChangedArgs {
    x: boolean;
    y: boolean;
    xScrollable: boolean;
    yScrollable: boolean;
    clipped: boolean;
  }

  declare interface OverlayScrollbars$OverflowAmountChangedArgs {
    x: number;
    y: number;
  }

  declare interface OverlayScrollbars$DirectionChangedArgs {
    isRTL: number;
    dir: string;
  }

  declare interface OverlayScrollbars$SizeChangedArgs {
    width: number;
    height: number;
  }

  declare interface OverlayScrollbars$UpdatedArgs {
    forced: boolean;
  }

  declare interface OverlayScrollbars$Options {
    className?: string | null;
    resize?: OverlayScrollbars$ResizeBehavior;
    sizeAutoCapable?: boolean;
    clipAlways?: boolean;
    normalizeRTL?: boolean;
    paddingAbsolute?: boolean;
    autoUpdate?: boolean | null;
    autoUpdateInterval?: number;
    nativeScrollbarsOverlaid?: {
      showNativeScrollbars?: boolean,
      initialize?: boolean
    };
    overflowBehavior?: {
      x?: OverlayScrollbars$OverflowBehavior,
      y?: OverlayScrollbars$OverflowBehavior
    };
    scrollbars?: {
      visibility?: OverlayScrollbars$VisibilityBehavior,
      autoHide?: OverlayScrollbars$AutoHideBehavior,
      autoHideDelay?: number,
      dragScrolling?: boolean,
      clickScrolling?: boolean,
      touchSupport?: boolean
    };
    textarea?: {
      dynWidth?: boolean,
      dynHeight?: boolean,
      inheritedAttrs?: string | $ReadOnlyArray<string> | null
    };
    callbacks?: {
      onInitialized?: OverlayScrollbars$BasicEventCallback | null,
      onInitializationWithdrawn?: OverlayScrollbars$BasicEventCallback | null,
      onDestroyed?: OverlayScrollbars$BasicEventCallback | null,
      onScrollStart?: OverlayScrollbars$ScrollEventCallback | null,
      onScroll?: OverlayScrollbars$ScrollEventCallback | null,
      onScrollStop?: OverlayScrollbars$ScrollEventCallback | null,
      onOverflowChanged?: OverlayScrollbars$OverflowChangedCallback | null,
      onOverflowAmountChanged?: OverlayScrollbars$OverflowAmountChangedCallback | null,
      onDirectionChanged?: OverlayScrollbars$DirectionChangedCallback | null,
      onContentSizeChanged?: OverlayScrollbars$SizeChangedCallback | null,
      onHostSizeChanged?: OverlayScrollbars$SizeChangedCallback | null,
      onUpdated?: OverlayScrollbars$UpdatedCallback | null
    };
  }

  declare interface OverlayScrollbars$ScrollInfo {
    position: {
      x: number,
      y: number
    };
    ratio: {
      x: number,
      y: number
    };
    max: {
      x: number,
      y: number
    };
    handleOffset: {
      x: number,
      y: number
    };
    handleLength: {
      x: number,
      y: number
    };
    handleLengthRatio: {
      x: number,
      y: number
    };
    trackLength: {
      x: number,
      y: number
    };
    isRTL: boolean;
    isRTLNormalized: boolean;
  }

  declare interface OverlayScrollbars$Elements {
    target: HTMLElement;
    host: HTMLElement;
    padding: HTMLElement;
    viewport: HTMLElement;
    content: HTMLElement;
    scrollbarHorizontal: {
      scrollbar: HTMLElement,
      track: HTMLElement,
      handle: HTMLElement
    };
    scrollbarVertical: {
      scrollbar: HTMLElement,
      track: HTMLElement,
      handle: HTMLElement
    };
    scrollbarCorner: HTMLElement;
  }

  declare interface OverlayScrollbars$State {
    sleeping: boolean;
    autoUpdate: boolean;
    widthAuto: boolean;
    heightAuto: boolean;
    documentMixed: boolean;
    padding: {
      t: number,
      r: number,
      b: number,
      l: number
    };
    overflowAmount: {
      x: number,
      y: number
    };
    hideOverflow: {
      x: boolean,
      y: boolean,
      xs: boolean,
      ys: boolean
    };
    hasOverflow: {
      x: boolean,
      y: boolean
    };
    contentScrollSize: {
      width: number,
      height: number
    };
    viewportSize: {
      width: number,
      height: number
    };
    hostSize: {
      width: number,
      height: number
    };
  }

  declare interface OverlayScrollbars$Extension {
    contract(global: any): boolean;
    added(options?: {}): void;
    removed(): void;
    on(
      callbackName: string,
      callbackArgs?:
        | UIEvent
        | OverlayScrollbars$OverflowChangedArgs
        | OverlayScrollbars$OverflowAmountChangedArgs
        | OverlayScrollbars$DirectionChangedArgs
        | OverlayScrollbars$SizeChangedArgs
        | OverlayScrollbars$UpdatedArgs
    ): void;
  }

  declare interface OverlayScrollbars$ExtensionInfo {
    name: string;
    extensionFactory: (
      defaultOptions: {},
      compatibility: OverlayScrollbars$Compatibility,
      framework: any
    ) => OverlayScrollbars$Extension;
    defaultOptions?: {};
  }

  declare interface OverlayScrollbars$Globals {
    defaultOptions: {};
    autoUpdateLoop: boolean;
    autoUpdateRecommended: boolean;
    supportMutationObserver: boolean;
    supportResizeObserver: boolean;
    supportPassiveEvents: boolean;
    supportTransform: boolean;
    supportTransition: boolean;
    restrictedMeasuring: boolean;
    nativeScrollbarStyling: boolean;
    cssCalc: string | null;
    nativeScrollbarSize: {
      x: number,
      y: number
    };
    nativeScrollbarIsOverlaid: {
      x: boolean,
      y: boolean
    };
    overlayScrollbarDummySize: {
      x: number,
      y: number
    };
    rtlScrollBehavior: {
      i: boolean,
      n: boolean
    };
  }

  declare interface OverlayScrollbars$Compatibility {
    wW(): number;
    wH(): number;
    mO(): any;
    rO(): any;
    rAF(): (callback: (...args: any[]) => any) => number;
    cAF(): (requestID: number) => void;
    now(): number;
    stpP(event: Event): void;
    prvD(event: Event): void;
    page(
      event: MouseEvent
    ): {
      x: number,
      y: number
    };
    mBtn(event: MouseEvent): number;
    inA<T>(item: T, array: T[]): number;
    isA(obj: any): boolean;
    type(obj: any): string;
    bind(func: (...args: any[]) => any, thisObj: any, ...args: any[]): any;
  }
  declare interface OverlayScrollbars {
    options(): OverlayScrollbars$OverlayScrollbars$Options;
    options(options: OverlayScrollbars$OverlayScrollbars$Options): void;
    options(optionName: string): any;
    options(optionName: string, optionValue: {} | null): void;
    update(force?: boolean): void;
    sleep(): void;
    scroll(): OverlayScrollbars$OverlayScrollbars$ScrollInfo;
    scroll(
      coordinates: OverlayScrollbars$OverlayScrollbars$Coordinates,
      duration?: number,
      easing?:
        | OverlayScrollbars$OverlayScrollbars$Easing
        | {
            x?: OverlayScrollbars$OverlayScrollbars$Easing,
            y?: OverlayScrollbars$OverlayScrollbars$Easing
          }
        | [
            OverlayScrollbars$OverlayScrollbars$Easing,
            OverlayScrollbars$OverlayScrollbars$Easing
          ],
      complete?: (...args: any[]) => any
    ): void;
    scroll(
      coordinates: OverlayScrollbars$OverlayScrollbars$Coordinates,
      options: {}
    ): void;
    scrollStop(): OverlayScrollbars;
    getElements(): OverlayScrollbars$OverlayScrollbars$Elements;
    getElements(elementName: string): any;
    getState(): OverlayScrollbars$OverlayScrollbars$State;
    getState(stateProperty: string): any;
    destroy(): void;
    ext(): {};
    ext(extensionName: string): OverlayScrollbars$OverlayScrollbars$Extension;
    addExt(
      extensionName: string,
      options: {}
    ): OverlayScrollbars$OverlayScrollbars$Extension;
    removeExt(extensionName: string): boolean;
  }
  declare interface OverlayScrollbarsStatic {
    (
      element: HTMLElement | Element | JQuery,
      options: OverlayScrollbars$OverlayScrollbars$Options,
      extensions?:
        | string
        | $ReadOnlyArray<string>
        | {
            [extensionName: string]: {}
          }
    ): OverlayScrollbars;
    (element: HTMLElement | Element | JQuery | null): OverlayScrollbars | void;
    (
      elements: NodeListOf<Element> | $ReadOnlyArray<Element> | JQuery,
      options: OverlayScrollbars$OverlayScrollbars$Options,
      extensions?:
        | string
        | $ReadOnlyArray<string>
        | {
            [extensionName: string]: {}
          }
    ): OverlayScrollbars | OverlayScrollbars[] | void;
    (
      elements: NodeListOf<Element> | $ReadOnlyArray<Element> | JQuery,
      filter?:
        | string
        | ((element: Element, instance: OverlayScrollbars) => boolean)
    ): OverlayScrollbars | OverlayScrollbars[] | void;
    globals(): OverlayScrollbars$OverlayScrollbars$Globals;
    defaultOptions(): OverlayScrollbars$OverlayScrollbars$Options;
    defaultOptions(
      newDefaultOptions: OverlayScrollbars$OverlayScrollbars$Options
    ): void;
    extension(): {
      [index: number]: OverlayScrollbars$OverlayScrollbars$ExtensionInfo,
      length: number
    };
    extension(
      extensionName: string
    ): OverlayScrollbars$OverlayScrollbars$ExtensionInfo;
    extension(
      extensionName: string,
      extensionFactory: (
        defaultOptions: {},
        compatibility: OverlayScrollbars$OverlayScrollbars$Compatibility,
        framework: any
      ) => OverlayScrollbars$OverlayScrollbars$Extension,
      defaultOptions?: {}
    ): void;
    extension(extensionName: string, extensionFactory: null | void): void;
  }
  declare interface JQuery {
    overlayScrollbars(
      options: OverlayScrollbars$OverlayScrollbars$Options,
      extensions?:
        | string
        | $ReadOnlyArray<string>
        | {
            [extensionName: string]: {}
          }
    ): JQuery;
    overlayScrollbars(
      filter?:
        | string
        | ((element: Element, instance: OverlayScrollbars) => boolean)
    ): OverlayScrollbars | OverlayScrollbars[] | void;
  }
  declare module.exports: typeof OverlayScrollbars;

  declare var OverlayScrollbars: OverlayScrollbarsStatic;
}
