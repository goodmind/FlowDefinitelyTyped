declare module "jquery.cycle" {
  declare interface CycleOptions {
    activePagerClass?: string;
    after?: (
      currSlideElement: Element,
      nextSlideElement: Element,
      options: CycleOptions,
      forwardFlag: boolean
    ) => void;
    allowPagerClickBubble?: boolean;
    animIn?: any;
    animOut?: any;
    aspect?: boolean;
    autostop?: boolean;
    autostopCount?: number;
    backwards?: boolean;
    before?: (
      currSlideElement: Element,
      nextSlideElement: Element,
      options: CycleOptions,
      forwardFlag: boolean
    ) => void;
    center?: boolean;
    cleartype?: boolean;
    cleartypeNoBg?: boolean;
    containerResize?: boolean;
    containerResizeHeight?: boolean;
    continuous?: boolean;
    cssAfter?: any;
    cssBefore?: any;
    delay?: number;
    easeIn?: string;
    easeOut?: string;
    easing?: string;
    end?: (options: CycleOptions) => void;
    fastOnEvent?: boolean;
    fit?: boolean;
    fx?: string;
    fxFn?: (
      currSlideElement: Element,
      nextSlideElement: Element,
      options: CycleOptions,
      afterCalback: Function,
      forwardFlag: boolean
    ) => void;
    height?: any;
    manualTrump?: boolean;
    metaAttr?: string;
    next?: any;
    nowrap?: boolean;
    onPagerEvent?: (zeroBasedSlideIndex: number, slideElement: Element) => void;
    onPrevNextEvent?: (
      isNext: boolean,
      zeroBasedSlideIndex: number,
      slideElement: Element
    ) => void;
    pager?: any;
    pagerAnchorBuilder?: (index: number, DOMelement: Element) => string;
    pagerEvent?: string;
    pause?: boolean;
    pauseOnPagerHover?: boolean;
    prev?: any;
    prevNextEvent?: string;
    random?: boolean;
    randomizeEffects?: boolean;
    requeueOnImageNotLoaded?: boolean;
    requeueTimeout?: number;
    rev?: boolean;
    shuffle?: any;
    skipInitializationCallbacks?: boolean;
    slideExpr?: string;
    slideResize?: boolean;
    speed?: any;
    speedIn?: any;
    speedOut?: any;
    startingSlide?: number;
    sync?: boolean;
    timeout?: number;
    timeoutFn?: (
      currSlideElement: Element,
      nextSlideElement: Element,
      options: CycleOptions,
      forwardFlag: boolean
    ) => void;
    updateActivePagerLink?: (
      pager: any,
      currSlide: number,
      clsName: string
    ) => void;
    width?: any;
  }
  declare interface Cycle {
    (fx?: string): JQuery;
    (options?: CycleOptions): JQuery;
    ver: () => string;
    debug: boolean;
    defaults: CycleOptions;
    next: (options?: CycleOptions) => void;
    prev: (options?: CycleOptions) => void;
    transitions: {
      [key: string]: (
        $cont: JQuery,
        $slides: JQuery,
        options: CycleOptions
      ) => void
    };
    custom: (
      currSlideElement: Element,
      nextSlideElement: Element,
      options: CycleOptions,
      afterCalback: Function,
      forwardFlag: boolean,
      speedOverride?: number
    ) => void;
    commonReset: (
      currSlideElement: Element,
      nextSlideElement: Element,
      options: CycleOptions,
      w?: boolean,
      h?: boolean,
      rev?: boolean
    ) => void;
    hopsFromLast: (options: CycleOptions, forwardFlag?: boolean) => number;
    createPagerAnchor: (
      index: number,
      DOMElement: Element,
      $pager: JQuery,
      els: any,
      options: CycleOptions
    ) => string;
    updateActivePagerLink: (
      pager: any,
      currSlide: number,
      clsName: string
    ) => void;
    resetState: (options: CycleOptions, fx?: string) => void;
  }
  declare interface JQuery {
    cycle: Cycle;
  }
}
