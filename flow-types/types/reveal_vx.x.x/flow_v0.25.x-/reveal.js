declare module "reveal" {
  declare var Reveal: RevealStatic;
  declare interface RevealStatic {
    initialize: (config: RevealOptions) => void;
    configure: (diff: RevealOptions) => void;
    slide(indexh: number, indexv?: number, f?: number, o?: number): void;
    left(): void;
    right(): void;
    up(): void;
    down(): void;
    prev(): void;
    next(): void;
    prevFragment(): boolean;
    nextFragment(): boolean;
    shuffle(): void;
    toggleOverview(override?: boolean): void;
    togglePause(override?: boolean): void;
    toggleAutoSlide(override?: boolean): void;
    getPreviousSlide(): Element;
    getCurrentSlide(): Element;
    getIndices(
      slide?: Element
    ): {
      h: number,
      v: number
    };
    getProgress(): number;
    getTotalSlides(): number;
    getSlideNotes(slide?: Element): string;
    addEventListener(
      type: string,
      listener: (event: any) => void,
      useCapture?: boolean
    ): void;
    removeEventListener(
      type: string,
      listener: (event: any) => void,
      useCapture?: boolean
    ): void;
    isFirstSlide(): boolean;
    isLastSlide(): boolean;
    isPaused(): boolean;
    isOverview(): boolean;
    isAutoSliding(): boolean;
    layout(): void;
    addEventListeners(): void;
    removeEventListeners(): void;
    getSlide(x: number, y?: number): Element;
    getScale(): number;
    getConfig(): RevealOptions;
    getQueryHash(): any;
    setState(state: any): void;
    getState(): any;
    sync(): void;
  }
  declare interface RevealOptions {
    controls?: boolean;
    progress?: boolean;
    slideNumber?: boolean | string;
    history?: boolean;
    keyboard?: any;
    overview?: boolean;
    center?: boolean;
    touch?: boolean;
    loop?: boolean;
    rtl?: boolean;
    shuffle?: boolean;
    fragments?: boolean;
    embedded?: boolean;
    help?: boolean;
    showNotes?: boolean;
    autoSlide?: number;
    autoSlideStoppable?: boolean;
    autoSlideMethod?: any;
    mouseWheel?: boolean;
    hideAddressBar?: boolean;
    previewLinks?: boolean;
    transition?: string;
    transitionSpeed?: string;
    backgroundTransition?: string;
    viewDistance?: number;
    parallaxBackgroundImage?: string;
    parallaxBackgroundSize?: string;
    parallaxBackgroundHorizontal?: number;
    parallaxBackgroundVertical?: number;
    rollingLinks?: boolean;
    theme?: string;
    width?: number | string;
    height?: number | string;
    margin?: number | string;
    minScale?: number | string;
    maxScale?: number | string;
    dependencies?: RevealDependency[];
    postMessage?: boolean;
    postMessageEvents?: boolean;
    multiplex?: MultiplexConfig;
    math?: MathConfig;
  }
  declare interface SlideEvent {
    previousSlide?: Element;
    currentSlide: Element;
    indexh: number;
    indexv?: number;
  }
  declare interface FragmentEvent {
    fragment: Element;
  }
  declare interface MultiplexConfig {
    secret?: string;
    id: string;
    url: string;
  }
  declare interface MathConfig {
    mathjax: string;
    config: string;
  }
  declare interface RevealDependency {
    src: string;
    condition?: () => boolean;
    async?: boolean;
    callback?: () => void;
  }
}
