declare module "iscroll" {
  declare interface IScrollOptions {
    x?: number;
    y?: number;
    bounce?: boolean;
    bounceLock?: boolean;
    momentum?: boolean;
    lockDirection?: boolean;
    useTransform?: boolean;
    useTransition?: boolean;
    topOffset?: number;
    checkDOMChanges?: boolean;
    handleClick?: boolean;
    hScrollbar?: boolean;
    vScrollbar?: boolean;
    fixedScrollbar?: boolean;
    hideScrollbar?: boolean;
    fadeScrollbar?: boolean;
    scrollbarClass?: string;
    zoom?: boolean;
    zoomMin?: number;
    zoomMax?: number;
    doubleTapZoom?: number;
    mouseWheel?: boolean;
    wheelAction?: string;
    snap?: string | boolean;
    snapThreshold?: number;
    resizeIndicator?: boolean;
    mouseWheelSpeed?: number;
    startX?: number;
    startY?: number;
    scrollX?: boolean;
    scrollY?: boolean;
    scrollbars?: boolean | string;
    shrinkScrollbars?: string;
    interactiveScrollbars?: boolean;
    releaseScroll?: boolean;
    fadeScrollbars?: boolean;
    directionLockThreshold?: number;
    bounceTime?: number;
    bounceEasing?:
      | string
      | {
          style: string,
          fn: (k: any) => any
        };
    preventDefault?: boolean;
    preventDefaultException?: Array<RegExp> | Object;
    HWCompositing?: boolean;
    freeScroll?: boolean;
    resizePolling?: number;
    tap?: boolean;
    click?: boolean;
    invertWheelDirection?: boolean;
    eventPassthrough?: string | boolean;
    probeType?: number;
    disableMouse?: boolean;
    disablePointer?: boolean;
    disableTouch?: boolean;
  }
  declare class IScroll {
    constructor(element: string, options?: IScrollOptions): this;
    constructor(element: HTMLElement, options?: IScrollOptions): this;
    x: number;
    y: number;
    scale: number;
    destroy(): void;
    refresh(): void;
    scrollTo(x: number, y: number, time?: number, relative?: boolean): void;
    scrollToElement(element: string, time?: number): void;
    scrollToElement(element: HTMLElement, time?: number): void;
    scrollToElement(
      element: HTMLElement,
      time?: number,
      offsetX?: number | boolean,
      offsetY?: number | boolean,
      easing?: Function
    ): void;
    goToPage(pageX: number, pageY: number, time?: number): void;
    disable(): void;
    enable(): void;
    stop(): void;
    zoom(scale: number, x?: number, y?: number, time?: number): void;
    isReady(): boolean;
    on(type: string, fn: (evt?: any) => void): void;
    off(type: string, fn?: (evt?: any) => void): void;
  }
}
