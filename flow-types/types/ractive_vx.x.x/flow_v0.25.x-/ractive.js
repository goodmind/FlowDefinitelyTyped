declare type _RactiveEvent = Ractive$Event;
export type Ractive$Node = {
  _ractive: any
} & HTMLElement;

export type Ractive$Promise = {} & Object;

export type Ractive$AnimationPromise = {
  stop(): void
} & Ractive$Promise;

export type Ractive$AdaptorPlugin = {} & Object;

export type Ractive$ComponentPlugin = {} & Ractive$Static;

export interface Ractive$DecoratorPlugin {
  (
    node: HTMLElement,
    ...args: any[]
  ): {
    update?: (...args: any[]) => void,
    teardown: () => void
  };
}

export type Ractive$EventPlugin = {} & Function;

export interface Ractive$TransitionPlugin {
  (t: Ractive$Transition, params: Object): void;
}

export interface Ractive$AdaptorPlugins {
  [key: string]: Ractive$AdaptorPlugin;
}

export interface Ractive$ComponentPlugins {
  [key: string]: Ractive$ComponentPlugin;
}

export interface Ractive$DecoratorPlugins {
  [key: string]: Ractive$DecoratorPlugin;
}

export interface Ractive$EventPlugins {
  [key: string]: Ractive$EventPlugin;
}

export interface Ractive$TransitionPlugins {
  [key: string]: Ractive$TransitionPlugin;
}

export interface Ractive$Event {
  context: any;
  component?: Ractive$Ractive;
  index: {
    [key: string]: number
  };
  keypath: string;
  name: string;
  node: HTMLElement;
  original: _RactiveEvent;
}

export interface Ractive$NodeInfo {
  ractive: Ractive$Ractive;
  keypath: string;
  index: {
    [key: string]: number
  };
}

export interface Ractive$Observe {
  cancel(): void;
}

export interface Ractive$Transition {
  isIntro: boolean;
  name: string;
  node: HTMLElement;
  animateStyle(
    prop: string,
    value: any,
    options: Ractive$TransitionAnimateOptions,
    complete: Function
  ): void;
  animateStyle(
    props: Object,
    options: Ractive$TransitionAnimateOptions,
    complete: Function
  ): void;
  complete(noReset?: boolean): void;
  getStyle(prop: string): string;
  getStyle(props: string[]): Object;
  processParams(params: any, defaults?: Object): Object;
  resetStyle(): void;
  setStyle(prop: string, value: any): Ractive$Transition;
  setStyle(props: Object): Ractive$Transition;
}

export interface Ractive$TransitionAnimateOptions {
  duration: number;
  easing?: string;
  delay: number;
}

export interface Ractive$AnimateOptions {
  duration?: number;
  easing?: string | Function;
  step?: (t: number, value: number) => void;
  complate?: (t: number, value: number) => void;
}

export type Ractive$ObserveOptions = {
  init?: boolean
} & Ractive$ObserveOnceOptions;

export interface Ractive$ObserveOnceOptions {
  context?: any;
  defer?: boolean;
}

export interface Ractive$ParseOptions {
  preserveWhitespace: boolean;
  sanitize: any;
}

export interface Ractive$SanitizeOptions {
  elements: string[];
  eventAttributes?: boolean;
}

export interface Ractive$NewOptions {
  adapt?: (string | Ractive$AdaptorPlugin)[];
  adaptors?: Ractive$AdaptorPlugins;

  /**
   * Default false
   * @type {boolean} or any type that option `el` accepts (HTMLElement or String or jQuery-like collection)
   */
  append?: boolean | any;
  complete?: Function;
  components?: Ractive$ComponentPlugins;
  computed?: Object;
  css?: string;

  /**
   * @type {Object} or Function
   */
  data?: Object | Function;
  decorators?: Ractive$DecoratorPlugins;

  /**
   * @type {[open, close]}
   */
  delimiters?: string[];
  easing?: string | Function;

  /**
   * @type {HTMLElement} or String or jQuery-like collection
   */
  el?: string | HTMLElement | any;
  events?: Ractive$EventPlugins;
  interpolators?: {
    [key: string]: any
  };
  onchange?: (options: Ractive$NewOptions) => void;
  oncomplete?: () => void;
  onconfig?: () => void;
  onconstruct?: (options: Ractive$NewOptions) => void;
  ondetach?: () => void;
  oninit?: () => void;
  oninsert?: () => void;
  onrender?: () => void;
  onunrender?: () => void;
  onupdate?: () => void;
  onteardown?: () => void;

  /**
   * any is same type as template
   */
  partials?: {
    [key: string]: any
  };

  /**
   * Default false
   */
  sanitize?: boolean | Ractive$SanitizeOptions;

  /**
   * Default ['[[', ']]']
   * @type {[open, close]}
   */
  staticDelimiters?: string[];

  /**
   * Default ['[[[', ']]]']
   * @type {[open, close]}
   */
  staticTripleDelimiters?: string[];

  /**
   * @type {String} or (if preparsing "Ractive.parse") Array or Object
   */
  template?: any;
  transitions?: Ractive$TransitionPlugins;

  /**
   * @type {[open, close]}
   */
  tripleDelimiters?: string[];
  lazy?: boolean;
  magic?: boolean;
  modifyArrays?: boolean;
  noCSSTransform?: boolean;
  noIntro?: boolean;
  preserveWhitespace?: boolean;
  stripComments?: boolean;
  transitionsEnabled?: boolean;
  twoway?: boolean;
}

export type Ractive$ExtendOptions = {
  /**
   * @deprecated
   */
  beforeInit?: (options: Ractive$ExtendOptions) => void,

  /**
   * @deprecated
   */
  init?: (options: Ractive$ExtendOptions) => void,
  isolated?: boolean
} & Ractive$NewOptions;

export type Ractive$DefaultsOptions = {
  /**
   * @deprecated since 0.7.1
   */
  debug?: boolean
} & Ractive$ExtendOptions;

/**
 * Static members of Ractive
 */
export interface Ractive$Static {
  new(options: Ractive$NewOptions): Ractive$Ractive;
  extend(options: Ractive$ExtendOptions): Ractive$Static;
  getNodeInfo(node: HTMLElement): Ractive$NodeInfo;
  parse(template: string, options?: Ractive$ParseOptions): any;
  adaptors: Ractive$AdaptorPlugins;
  components: Ractive$ComponentPlugins;
  DEBUG: boolean;
  defaults: Ractive$DefaultsOptions;
  decorators: Ractive$DecoratorPlugins;
  easing: {
    [key: string]: (x: number) => number
  };
  events: Ractive$EventPlugins;
  partials: {
    [key: string]: any
  };
  Ractive$Promise: Ractive$Promise;
  transitions: Ractive$TransitionPlugins;
}

/**
 * The Ractive instance members
 */
export interface Ractive$Ractive {
  add(keypath: string, number?: number): Ractive$Promise;
  animate(
    keypath: string,
    value: any,
    options?: Ractive$AnimateOptions
  ): Ractive$AnimationPromise;
  animate(
    map: Object,
    options?: Ractive$AnimateOptions
  ): Ractive$AnimationPromise;
  detach(): DocumentFragment;
  find(selector: string): HTMLElement;
  findAll(
    selector: string,
    options?: {
      live: boolean
    }
  ): HTMLElement[];
  findAllComponents(
    name: string,
    options?: {
      live: boolean
    }
  ): Ractive$Ractive[];
  findComponent(name?: string): Ractive$Ractive;
  findContainer(name: string): Ractive$Ractive;
  findParent(name: string): Ractive$Ractive;
  fire(eventName: string, ...args: any[]): void;
  get(keypath: string): any;
  get(): Object;
  insert(target: any, anchor?: any): void;
  merge(
    keypath: string,
    value: any[],
    options?: {
      compare: boolean | string | Function
    }
  ): Ractive$Promise;
  observe(
    keypath: string,
    callback: (newValue: any, oldValue: any, keypath: string) => void,
    options?: Ractive$ObserveOptions
  ): Ractive$Observe;
  observe(map: Object, options?: Ractive$ObserveOptions): Ractive$Observe;
  observeOnce(
    keypath: string,
    callback: (newValue: any, oldValue: any, keypath: string) => void,
    options?: Ractive$ObserveOnceOptions
  ): Ractive$Observe;
  off(
    eventName?: string,
    handler?: (
      event?: Ractive$Ractive.Ractive$Event | any,
      ...args: any[]
    ) => any
  ): Ractive$Ractive;
  on(
    eventName: string,
    handler: (
      event?: Ractive$Ractive.Ractive$Event | any,
      ...args: any[]
    ) => any
  ): Ractive$Observe;
  on(map: {
    [eventName: string]: (
      event?: Ractive$Ractive.Ractive$Event | any,
      ...args: any[]
    ) => any
  }): Ractive$Observe;
  once(
    eventName: string,
    handler: (
      event?: Ractive$Ractive.Ractive$Event | any,
      ...args: any[]
    ) => any
  ): Ractive$Observe;
  pop(keypath: string): Ractive$Promise;
  push(keypath: string, value: any): Ractive$Promise;
  render(target: any): void;
  reset(data?: Object): Ractive$Promise;
  resetPartial(name: string, partial: any): Ractive$Promise;
  resetTemplate(): void;
  set(keypath: string, value: any): Ractive$Promise;
  set(map: Object): Ractive$Promise;
  shift(keypath: string): Ractive$Promise;
  splice(
    keypath: string,
    index: number,
    removeCount: number,
    ...add: any[]
  ): Ractive$Promise;
  subtract(keypath: string, number?: number): Ractive$Promise;
  teardown(): Ractive$Promise;
  toggle(keypath: string): Ractive$Promise;
  toHTML(): string;
  unrender(): void;
  unshift(keypath: string, value: any): Ractive$Promise;
  update(keypath?: string): Ractive$Promise;

  /**
   * Update out of sync two-way bindings
   * @param keypath A string
   * @param cascade A boolean with default false
   */
  updateModel(keypath?: string, cascade?: boolean): Ractive$Promise;
  container: Ractive$Ractive;
  nodes: Object;
  partials: Object;
  parent: Ractive$Ractive;
  root: Ractive$Ractive;
  transitions: Object;
}
declare module "ractive" {
  declare export default typeof Ractive$Ractive;
}
declare var Ractive$Ractive: Ractive$Ractive.Ractive$Static;
