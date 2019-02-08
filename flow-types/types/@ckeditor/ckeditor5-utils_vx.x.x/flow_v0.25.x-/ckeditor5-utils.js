declare module "@ckeditor/ckeditor5-utils" {
  declare export interface DeleteChange {
    index: number;
    notification$type: "delete";
    howMany: number;
  }
  declare export interface InsertChange {
    index: number;
    notification$type: "insert";
    values: string[];
  }
  declare export interface BindChain {
    to(
      observable: Observable,
      ...bindProperties: Array<Observable | string | Function>
    ): void;
    toMany(
      observable: Observable[],
      ...bindProperties: Array<Observable | string | Function>
    ): void;
  }
  declare export interface CollectionBindTo<T, K> {
    as: (Access$Class: {
      new(item: T): K
    }) => void;
    core$using: (callbackOrProperty: $Keys<T> | ((item: T) => K)) => void;
  }
  declare export function createElement(
    doc: ArangoDB$Document,
    skin$name: string,
    attributes?: { [key: string]: any } | null,
    children?: BPMNModdle$Node | string | Array<BPMNModdle$Node | string>
  ): JSX$Element;

  declare export function getAncestors(
    htmlParser$node: BPMNModdle$Node
  ): Array<BPMNModdle$Node | DocumentFragment>;

  declare export function getBorderWidths(
    htmlParser$element: HTMLElement
  ): {
    top: number,
    right: number,
    bottom: number,
    left: number
  };

  declare export function getCommonAncestor(
    nodeA: BPMNModdle$Node,
    nodeB: BPMNModdle$Node
  ): BPMNModdle$Node | DocumentFragment | ArangoDB$Document | null;

  declare export function getDataFromElement(el: HTMLElement): string;

  declare export function getPositionedAncestor(
    htmlParser$element?: HTMLElement
  ): HTMLElement | null;

  declare export function indexOf(htmlParser$node: BPMNModdle$Node): number;

  declare export function insertAt(
    parentElement: JSX$Element,
    index: number,
    nodeToInsert: BPMNModdle$Node
  ): void;

  declare export function isNode(obj: any): boolean;

  declare export function isRange(obj: any): boolean;

  declare export function isText(obj: any): boolean;

  declare export function isWindow(obj: any): boolean;

  declare export interface Options {
    htmlParser$element: HTMLElement;
    fitInViewport?: boolean;
    limiter?:
      | HTMLElement
      | Range
      | ClientRect
      | Rect
      | (() => HTMLElement | Range | ClientRect | Rect);
    positions: Array<(targetRect: Rect, elementRect: Rect) => __esri$Position>;
    target:
      | HTMLElement
      | Range
      | ClientRect
      | Rect
      | (() => HTMLElement | Range | ClientRect | Rect);
  }
  declare export interface Position {
    left: number;
    skin$name: string;
    top: number;
  }
  declare export function getOptimalPosition(
    notification$options: Boom$Options
  ): __esri$Position;

  declare export class Rect {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    constructor(
      source:
        | HTMLElement
        | Range
        | Window
        | ClientRect
        | Rect
        | { [key: string]: any }
    ): this;
    clone(): Rect;
    contains(anotherRect: Rect): boolean;
    excludeScrollbarsAndBorders(): Rect;
    getArea(): number;
    getIntersection(anotherRect: Rect): Rect;
    getIntersectionArea(anotherRect: Rect): number;
    getVisible(): Rect | null;
    isEqual(balloonPanel$rect: Rect): boolean;
    moveBy(x: number, y: number): Rect;
    moveTo(x: number, y: number): Rect;
    static getDomRangeRects(dom$range: Range): Rect[];
  }
  declare export function remove(htmlParser$node: BPMNModdle$Node): void;

  declare export function scrollAncestorsToShowTarget(
    target: HTMLElement | Range
  ): void;

  declare export function scrollViewportToShowTarget(notification$options: {
    target: HTMLElement | Range,
    viewportOffset?: number
  }): void;

  declare export function setDataInElement(el: HTMLElement, data: string): void;

  declare export function toUnit(unit: string): (value: number) => string;

  declare export var DOCUMENTATION_URL: string;
  declare export class CKEditorError mixins b3$Error {
    data: { [key: string]: any } | void;
    skin$name: string;
    constructor(message: string, data?: { [key: string]: any }): this;
    static isCKEditorError(log$error: b3$Error): boolean;
  }
  declare export function attachLinkToDocumentation(message: string): string;

  declare export function as(Access$Class: Function): void;

  declare export function using(callbackOrProperty: Function | string): void;

  declare export class Collection<T> mixins Iterable<T>, Emitter {
    first: T | null;
    last: T | null;
    length: number;
    constructor(notification$options?: {
      idProperty?: $Keys<T>
    }): this;
    add(item: T, index?: number): this;
    bindTo<S>(
      externalCollection: CanvasGauges$Collection<S>
    ): CollectionBindTo<S, T>;
    clear(): void;
    filter(callbackfn: (item: T, index: number) => boolean, thisArg?: any): T[];
    find(
      predicate: (item: T, index: number) => boolean,
      thisArg?: any
    ): T | void;
    get(idOrIndex: string | number): T | null;
    getIndex(idOrItem: string | T): number;
    map<U>(callbackfn: (item: T, index: number) => U, thisArg?: any): U[];
    remove(subject: T | number | string): T;
    undefined(): Iterator<T>;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(
      emitter: Emitter,
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority?: PriorityString | number
      }
    ): void;
    off(CKEDITOR$event: string, braintree$callback?: Function): void;
    on(
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority: PriorityString | number
      }
    ): void;
    once(
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority: PriorityString | number
      }
    ): void;
    stopDelegating(CKEDITOR$event?: string, emitter?: Emitter): void;
    stopListening(
      emitter?: Emitter,
      CKEDITOR$event?: string,
      braintree$callback?: Function
    ): void;
  }
  declare export type ArrayRelation = "extension" | "same" | "prefix";
  declare export function compareArrays<T>(
    a: $ReadOnlyArray<T>,
    b: $ReadOnlyArray<T>
  ): number | ArrayRelation;

  declare export class Config {
    constructor(
      configurations?: { [key: string]: any },
      defaultConfigurations?: { [key: string]: any }
    ): this;
    define(skin$name: { [key: string]: any }): void;
    define(skin$name: string, value: any): void;
    get(skin$name: string): any;
    set(skin$name: string, value: any): void;
  }
  declare export function count(dom$iterator: Iterable<any>): number;

  declare export type Change = "equal" | "insert" | "delete";
  declare export function diff(
    a: string,
    b: string,
    BigNum$cmp?: (a: string, b: string) => boolean
  ): Change[];

  declare export function diff(
    a: $ReadOnlyArray<string>,
    b: $ReadOnlyArray<string>,
    BigNum$cmp?: (a: string, b: string) => boolean
  ): Change[];

  declare export function diffToChanges(
    diff: Change[],
    output: string | string[]
  ): Array<DeleteChange | InsertChange>;

  declare export class ElementReplacer {
    replace(htmlParser$element: HTMLElement, newElement?: HTMLElement): void;
    restore(): void;
  }
  declare export var EmitterMixin: Emitter;
  declare export interface Emitter {
    delegate(...events: string[]): EmitterMixinDelegateChain;
    CKEDITOR$fire(
      eventOrInfo: string | EventInfo<Emitter>,
      ...args: any[]
    ): any;
    listenTo(
      emitter: Emitter,
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority?: PriorityString | number
      }
    ): void;
    off(CKEDITOR$event: string, braintree$callback?: Function): void;
    CKEDITOR$on(
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority: PriorityString | number
      }
    ): void;
    CKEDITOR$once(
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority: PriorityString | number
      }
    ): void;
    stopDelegating(CKEDITOR$event?: string, emitter?: Emitter): void;
    stopListening(
      emitter?: Emitter,
      CKEDITOR$event?: string,
      braintree$callback?: Function
    ): void;
  }
  declare export interface EmitterMixinDelegateChain {
    to(
      emitter: Emitter,
      nameOrFunction?: string | ((skin$name: string) => string)
    ): void;
  }

  declare var npm$namespace$env: {
    isEdge: typeof env$isEdge,
    isMac: typeof env$isMac
  };
  declare var env$isEdge: boolean;

  declare var env$isMac: boolean;
  declare export class EventInfo<T> {
    skin$name: string;
    skin$path: { [key: string]: any }[];
    return: any;
    source: T;
    constructor(source: T, skin$name: string): this;
    off: {
      (): void,
      called: boolean
    };
    stop: {
      (): void,
      called: boolean
    };
  }
  declare export function fastDiff(
    oldText: string,
    newText: string
  ): Array<DeleteChange | InsertChange>;

  declare export function first<T>(iterable: Iterable<T>): T;

  declare export class FocusTracker mixins Observable {
    focusedElement: HTMLElement;
    isFocused: boolean;
    add(htmlParser$element: HTMLElement): void;
    remove(htmlParser$element: HTMLElement): void;
    bind(...bindProperties: string[]): BindChain;
    decorate(methodName: string): void;
    set(skin$name: { [key: string]: any }): void;
    set(skin$name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(
      emitter: Emitter,
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority?: PriorityString | number
      }
    ): void;
    off(CKEDITOR$event: string, braintree$callback?: Function): void;
    on(
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority: PriorityString | number
      }
    ): void;
    once(
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority: PriorityString | number
      }
    ): void;
    stopDelegating(CKEDITOR$event?: string, emitter?: Emitter): void;
    stopListening(
      emitter?: Emitter,
      CKEDITOR$event?: string,
      braintree$callback?: Function
    ): void;
  }
  declare export function isIterable(value: any): boolean;

  declare export var keyCodes: {
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 118,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    backspace: 8,
    delete: 46,
    enter: 13,
    space: 32,
    esc: 27,
    tab: 9,
    ctrl: 1114112,
    cmd: 1114112,
    shift: 2228224,
    alt: 4456448
  };
  declare export interface KeystrokeInfo {
    altKey?: boolean;
    ctrlKey?: boolean;
    keyCode: number;
    shiftKey?: boolean;
  }
  declare export function getCode(key: string | KeystrokeInfo): number;

  declare export function getEnvKeystrokeText(keystroke: string): string;

  declare export function parseKeystroke(
    keystroke: string | Array<number | string>
  ): number;

  declare export class KeystrokeHandler {
    constructor(): this;
    destroy(): void;
    listenTo(emitter: Emitter): void;
    press(keyEvtData: KeystrokeInfo): boolean;
    set(
      keystroke: string | Array<string | number>,
      braintree$callback: (
        keyEvtData: KeystrokeInfo,
        cancel: () => void
      ) => void,
      notification$options?: {
        priority?: PriorityString | number
      }
    ): void;
  }
  declare export class Locale {
    language: string;
    constructor(language?: string): this;
    t(str: string, values?: string[]): string;
  }

  declare var npm$namespace$log: {
    error: typeof log$error,
    warn: typeof log$warn
  };
  declare function log$error(
    message: string,
    data?: { [key: string]: any }
  ): void;

  declare function log$warn(
    message: string,
    data?: { [key: string]: any }
  ): void;

  declare export function mapsEqual<K, V>(
    mapsA: __esri$Map<K, V>,
    mapsB: __esri$Map<K, V>
  ): boolean;

  declare export function mix<T>(
    baseClass: {
      new(...p: any[]): T
    },
    ...mixins: Array<$Shape<T>>
  ): void;

  declare export function nth<T>(index: number, iterable: Iterable<T>): T;

  declare export function objectToMap<T: { [key: string]: any }>(
    obj: T
  ): __esri$Map<$Keys<T>, $ElementType<T, $Keys<T>>>;

  declare export var ObservableMixin: Observable;
  declare export type Observable = {
    bind(...bindProperties: string[]): BindChain,
    decorate(methodName: string): void,
    set(skin$name: { [key: string]: any }): void,
    set(skin$name: string, value: any): void,
    unbind(...unbindProperties: string[]): void,
    delegate(...events: string[]): EmitterMixinDelegateChain,
    CKEDITOR$fire(
      eventOrInfo: string | EventInfo<Emitter>,
      ...args: any[]
    ): any,
    listenTo(
      emitter: Emitter,
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority?: PriorityString | number
      }
    ): void,
    off(CKEDITOR$event: string, braintree$callback?: Function): void,
    CKEDITOR$on(
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority: PriorityString | number
      }
    ): void,
    CKEDITOR$once(
      CKEDITOR$event: string,
      braintree$callback: Function,
      notification$options?: {
        priority: PriorityString | number
      }
    ): void,
    stopDelegating(CKEDITOR$event?: string, emitter?: Emitter): void,
    stopListening(
      emitter?: Emitter,
      CKEDITOR$event?: string,
      braintree$callback?: Function
    ): void
  } & Emitter;

  declare var npm$namespace$priorities: {
    get: typeof priorities$get
  };
  declare function priorities$get(priority: PriorityString | number): number;

  declare export type PriorityString =
    | "highest"
    | "high"
    | "normal"
    | "low"
    | "lowest";
  declare export function spy(): {
    (): void,
    called: boolean
  };

  declare export function toMap<K, V>(data: __esri$Map<K, V>): __esri$Map<K, V>;

  declare export function toMap<K: string, V>(
    data: $ReadOnlyArray<[K, V]>
  ): __esri$Map<K, V>;

  declare export function toMap<T: { [key: string]: any }>(
    data: T
  ): __esri$Map<$Keys<T>, $ElementType<T, $Keys<T>>>;

  declare export function add(
    language: string,
    translations: {
      [key: string]: string
    }
  ): void;

  declare export function translate(
    language: string,
    translationKey: string
  ): string;

  declare export function uid(): string;

  declare export function isCombiningMark(character: string): boolean;

  declare export function isHighSurrogateHalf(character: string): boolean;

  declare export function isInsideCombinedSymbol(
    string: string,
    offset: number
  ): boolean;

  declare export function isInsideSurrogatePair(
    string: string,
    offset: number
  ): boolean;

  declare export function isLowSurrogateHalf(character: string): boolean;
}
