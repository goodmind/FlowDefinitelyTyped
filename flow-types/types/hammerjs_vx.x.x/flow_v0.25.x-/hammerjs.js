declare var Hammer: HammerStatic;
declare module "hammerjs" {
  declare module.exports: typeof Hammer;
}
declare interface HammerStatic {
  new(
    element: HTMLElement | SVGElement,
    options?: HammerOptions
  ): HammerManager;
  defaults: HammerDefaults;
  VERSION: number;
  INPUT_START: number;
  INPUT_MOVE: number;
  INPUT_END: number;
  INPUT_CANCEL: number;
  STATE_POSSIBLE: number;
  STATE_BEGAN: number;
  STATE_CHANGED: number;
  STATE_ENDED: number;
  STATE_RECOGNIZED: number;
  STATE_CANCELLED: number;
  STATE_FAILED: number;
  DIRECTION_NONE: number;
  DIRECTION_LEFT: number;
  DIRECTION_RIGHT: number;
  DIRECTION_UP: number;
  DIRECTION_DOWN: number;
  DIRECTION_HORIZONTAL: number;
  DIRECTION_VERTICAL: number;
  DIRECTION_ALL: number;
  Manager: HammerManagerConstructor;
  Input: HammerInput;
  TouchAction: TouchAction;
  TouchInput: TouchInput;
  MouseInput: MouseInput;
  PointerEventInput: PointerEventInput;
  TouchMouseInput: TouchMouseInput;
  SingleTouchInput: SingleTouchInput;
  Recognizer: RecognizerStatic;
  AttrRecognizer: AttrRecognizerStatic;
  Tap: TapRecognizerStatic;
  Pan: PanRecognizerStatic;
  Swipe: SwipeRecognizerStatic;
  Pinch: PinchRecognizerStatic;
  Rotate: RotateRecognizerStatic;
  Press: PressRecognizerStatic;
  on(target: EventTarget, types: string, handler: Function): void;
  off(target: EventTarget, types: string, handler: Function): void;
  each(obj: any, iterator: Function, context: any): void;
  merge(dest: any, src: any): any;
  extend(dest: any, src: any, merge: boolean): any;
  inherit(child: Function, base: Function, properties: any): any;
  bindFn(fn: Function, context: any): Function;
  prefixed(obj: any, property: string): string;
}
declare type RecognizerTuple =
  | [RecognizerStatic]
  | [RecognizerStatic, RecognizerOptions]
  | [RecognizerStatic, RecognizerOptions, string | string[]]
  | [
      RecognizerStatic,
      RecognizerOptions,
      string | string[],
      (string | Recognizer) | (string | Recognizer)[]
    ];
declare type HammerDefaults = {
  domEvents: boolean,
  enable: boolean,
  preset: RecognizerTuple[],
  touchAction: string,
  cssProps: CssProps,
  inputClass: HammerInput,
  inputTarget: EventTarget
} & HammerOptions;
declare interface CssProps {
  contentZooming: string;
  tapHighlightColor: string;
  touchCallout: string;
  touchSelect: string;
  userDrag: string;
  userSelect: string;
}
declare interface HammerOptions {
  cssProps?: CssProps;
  domEvents?: boolean;
  enable?: boolean | ((manager: HammerManager) => boolean);
  preset?: RecognizerTuple[];
  touchAction?: string;
  recognizers?: RecognizerTuple[];
  inputClass?: HammerInput;
  inputTarget?: EventTarget;
}
declare interface HammerManagerConstructor {
  new(element: EventTarget, options?: HammerOptions): HammerManager;
}
declare interface HammerListener {
  (event: HammerInput): void;
}
declare interface HammerManager {
  add(recogniser: Recognizer): Recognizer;
  add(recogniser: Recognizer): HammerManager;
  add(recogniser: Recognizer[]): Recognizer;
  add(recogniser: Recognizer[]): HammerManager;
  destroy(): void;
  emit(event: string, data: any): void;
  get(recogniser: Recognizer): Recognizer;
  get(recogniser: string): Recognizer;
  off(events: string, handler?: HammerListener): void;
  on(events: string, handler: HammerListener): void;
  recognize(inputData: any): void;
  remove(recogniser: Recognizer): HammerManager;
  remove(recogniser: string): HammerManager;
  set(options: HammerOptions): HammerManager;
  stop(force: boolean): void;
}
declare class HammerInput {
  constructor(manager: HammerManager, callback: Function): this;
  destroy(): void;
  handler(): void;
  init(): void;

  /**
   * Name of the event. Like panstart.
   */
  type: string;

  /**
   * Movement of the X axis.
   */
  deltaX: number;

  /**
   * Movement of the Y axis.
   */
  deltaY: number;

  /**
   * Total time in ms since the first input.
   */
  deltaTime: number;

  /**
   * Distance moved.
   */
  distance: number;

  /**
   * Angle moved.
   */
  angle: number;

  /**
   * Velocity on the X axis, in px/ms.
   */
  velocityX: number;

  /**
   * Velocity on the Y axis, in px/ms
   */
  velocityY: number;

  /**
   * Highest velocityX/Y value.
   */
  velocity: number;

  /**
   * Direction moved. Matches the DIRECTION constants.
   */
  direction: number;

  /**
   * Direction moved from it's starting point. Matches the DIRECTION constants.
   */
  offsetDirection: number;

  /**
   * Scaling that has been done when multi-touch. 1 on a single touch.
   */
  scale: number;

  /**
   * Rotation that has been done when multi-touch. 0 on a single touch.
   */
  rotation: number;

  /**
   * Center position for multi-touch, or just the single pointer.
   */
  center: HammerPoint;

  /**
   * Source event object, type TouchEvent, MouseEvent or PointerEvent.
   */
  srcEvent: TouchEvent | MouseEvent | PointerEvent;

  /**
   * Target that received the event.
   */
  target: HTMLElement;

  /**
   * Primary pointer type, could be touch, mouse, pen or kinect.
   */
  pointerType: string;

  /**
   * Event type, matches the INPUT constants.
   */
  eventType: number;

  /**
   * true when the first input.
   */
  isFirst: boolean;

  /**
   * true when the final (last) input.
   */
  isFinal: boolean;

  /**
   * Array with all pointers, including the ended pointers (touchend, mouseup).
   */
  pointers: any[];

  /**
   * Array with all new/moved/lost pointers.
   */
  changedPointers: any[];

  /**
   * Reference to the srcEvent.preventDefault() method. Only for experts!
   */
  preventDefault: Function;
}
declare class MouseInput mixins HammerInput {
  constructor(manager: HammerManager, callback: Function): this;
}
declare class PointerEventInput mixins HammerInput {
  constructor(manager: HammerManager, callback: Function): this;
}
declare class SingleTouchInput mixins HammerInput {
  constructor(manager: HammerManager, callback: Function): this;
}
declare class TouchInput mixins HammerInput {
  constructor(manager: HammerManager, callback: Function): this;
}
declare class TouchMouseInput mixins HammerInput {
  constructor(manager: HammerManager, callback: Function): this;
}
declare interface RecognizerOptions {
  direction?: number;
  enable?:
    | boolean
    | ((recognizer: Recognizer, inputData: HammerInput) => boolean);
  event?: string;
  interval?: number;
  pointers?: number;
  posThreshold?: number;
  taps?: number;
  threshold?: number;
  time?: number;
  velocity?: number;
}
declare interface RecognizerStatic {
  new(options?: RecognizerOptions): Recognizer;
}
declare interface Recognizer {
  defaults: any;
  canEmit(): boolean;
  canRecognizeWith(otherRecognizer: Recognizer): boolean;
  dropRecognizeWith(
    otherRecognizer: Recognizer | Recognizer[] | string
  ): Recognizer;
  dropRequireFailure(
    otherRecognizer: Recognizer | Recognizer[] | string
  ): Recognizer;
  emit(input: HammerInput): void;
  getTouchAction(): any[];
  hasRequireFailures(): boolean;
  process(inputData: HammerInput): string;
  recognize(inputData: HammerInput): void;
  recognizeWith(
    otherRecognizer: Recognizer | Recognizer[] | string
  ): Recognizer;
  requireFailure(
    otherRecognizer: Recognizer | Recognizer[] | string
  ): Recognizer;
  reset(): void;
  set(options?: RecognizerOptions): Recognizer;
  tryEmit(input: HammerInput): void;
}
declare interface AttrRecognizerStatic {
  attrTest(input: HammerInput): boolean;
  process(input: HammerInput): any;
}
declare type AttrRecognizer = {
  new(options?: RecognizerOptions): AttrRecognizer
} & Recognizer;
declare interface PanRecognizerStatic {
  new(options?: RecognizerOptions): PanRecognizer;
}
declare type PanRecognizer = {} & AttrRecognizer;
declare interface PinchRecognizerStatic {
  new(options?: RecognizerOptions): PinchRecognizer;
}
declare type PinchRecognizer = {} & AttrRecognizer;
declare interface PressRecognizerStatic {
  new(options?: RecognizerOptions): PressRecognizer;
}
declare type PressRecognizer = {} & AttrRecognizer;
declare interface RotateRecognizerStatic {
  new(options?: RecognizerOptions): RotateRecognizer;
}
declare type RotateRecognizer = {} & AttrRecognizer;
declare interface SwipeRecognizerStatic {
  new(options?: RecognizerOptions): SwipeRecognizer;
}
declare type SwipeRecognizer = {} & AttrRecognizer;
declare interface TapRecognizerStatic {
  new(options?: RecognizerOptions): TapRecognizer;
}
declare type TapRecognizer = {} & AttrRecognizer;
declare class TouchAction {
  constructor(manager: HammerManager, value: string): this;
  compute(): string;
  preventDefaults(input: HammerInput): void;
  preventSrc(srcEvent: any): void;
  set(value: string): void;
  update(): void;
}
declare interface HammerPoint {
  x: number;
  y: number;
}
