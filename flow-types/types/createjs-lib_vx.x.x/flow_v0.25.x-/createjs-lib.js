declare module "createjs-lib" {
  declare var npm$namespace$createjs: {
    extend: typeof createjs$extend,
    indexOf: typeof createjs$indexOf,
    promote: typeof createjs$promote,
    proxy: typeof createjs$proxy,

    Event: typeof createjs$Event,
    EventDispatcher: typeof createjs$EventDispatcher
  };
  declare export class createjs$Event {
    constructor(type: string, bubbles: boolean, cancelable: boolean): this;
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: any;
    defaultPrevented: boolean;
    eventPhase: number;
    immediatePropagationStopped: boolean;
    propagationStopped: boolean;
    removed: boolean;
    target: any;
    timeStamp: number;
    type: string;
    data: any;
    delta: number;
    error: string;
    id: string;
    item: any;
    loaded: number;
    name: string;
    next: string;
    params: any;
    paused: boolean;
    progress: number;
    rawResult: any;
    result: any;
    runTime: number;
    src: string;
    time: number;
    total: number;
    clone(): createjs$Event;
    preventDefault(): void;
    remove(): void;
    set(props: Object): createjs$Event;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    toString(): string;
  }

  declare export class createjs$EventDispatcher {
    constructor(): this;
    addEventListener(
      type: string,
      listener: (eventObj: Object) => boolean,
      useCapture?: boolean
    ): Function;
    addEventListener(
      type: string,
      listener: (eventObj: Object) => void,
      useCapture?: boolean
    ): Function;
    addEventListener(
      type: string,
      listener: {
        handleEvent: (eventObj: Object) => boolean
      },
      useCapture?: boolean
    ): Object;
    addEventListener(
      type: string,
      listener: {
        handleEvent: (eventObj: Object) => void
      },
      useCapture?: boolean
    ): Object;
    dispatchEvent(eventObj: Object, target?: Object): boolean;
    dispatchEvent(eventObj: string, target?: Object): boolean;
    dispatchEvent(eventObj: createjs$Event, target?: Object): boolean;
    hasEventListener(type: string): boolean;
    static initialize(target: Object): void;
    off(
      type: string,
      listener: (eventObj: Object) => boolean,
      useCapture?: boolean
    ): void;
    off(
      type: string,
      listener: (eventObj: Object) => void,
      useCapture?: boolean
    ): void;
    off(
      type: string,
      listener: {
        handleEvent: (eventObj: Object) => boolean
      },
      useCapture?: boolean
    ): void;
    off(
      type: string,
      listener: {
        handleEvent: (eventObj: Object) => void
      },
      useCapture?: boolean
    ): void;
    off(type: string, listener: Function, useCapture?: boolean): void;
    on(
      type: string,
      listener: (eventObj: Object) => boolean,
      scope?: Object,
      once?: boolean,
      data?: any,
      useCapture?: boolean
    ): Function;
    on(
      type: string,
      listener: (eventObj: Object) => void,
      scope?: Object,
      once?: boolean,
      data?: any,
      useCapture?: boolean
    ): Function;
    on(
      type: string,
      listener: {
        handleEvent: (eventObj: Object) => boolean
      },
      scope?: Object,
      once?: boolean,
      data?: any,
      useCapture?: boolean
    ): Object;
    on(
      type: string,
      listener: {
        handleEvent: (eventObj: Object) => void
      },
      scope?: Object,
      once?: boolean,
      data?: any,
      useCapture?: boolean
    ): Object;
    removeAllEventListeners(type?: string): void;
    removeEventListener(
      type: string,
      listener: (eventObj: Object) => boolean,
      useCapture?: boolean
    ): void;
    removeEventListener(
      type: string,
      listener: (eventObj: Object) => void,
      useCapture?: boolean
    ): void;
    removeEventListener(
      type: string,
      listener: {
        handleEvent: (eventObj: Object) => boolean
      },
      useCapture?: boolean
    ): void;
    removeEventListener(
      type: string,
      listener: {
        handleEvent: (eventObj: Object) => void
      },
      useCapture?: boolean
    ): void;
    removeEventListener(
      type: string,
      listener: Function,
      useCapture?: boolean
    ): void;
    toString(): string;
    willTrigger(type: string): boolean;
  }

  declare export function createjs$extend(
    subclass: () => any,
    superclass: () => any
  ): () => any;

  declare export function createjs$indexOf(
    array: any[],
    searchElement: Object
  ): number;

  declare export function createjs$promote(
    subclass: () => any,
    prefix: string
  ): () => any;

  declare export function createjs$proxy(
    method: (eventObj: Object) => boolean,
    scope: Object,
    ...arg: any[]
  ): (eventObj: Object) => any;

  declare export function createjs$proxy(
    method: (eventObj: Object) => void,
    scope: Object,
    ...arg: any[]
  ): (eventObj: Object) => any;

  declare export function createjs$proxy(
    method: {
      handleEvent: (eventObj: Object) => boolean
    },
    scope: Object,
    ...arg: any[]
  ): (eventObj: Object) => any;

  declare export function createjs$proxy(
    method: {
      handleEvent: (eventObj: Object) => void
    },
    scope: Object,
    ...arg: any[]
  ): (eventObj: Object) => any;
}
