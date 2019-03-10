declare interface KnockoutSubscribableFunctions<T> {
  notifySubscribers(valueToWrite?: T, event?: string): void;
}
declare interface KnockoutComputedFunctions<T> {}
declare interface KnockoutObservableFunctions<T> {
  equalityComparer(a: T, b: T): boolean;
}
declare interface KnockoutReadonlyObservableArrayFunctions<T> {
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array.
   */
  slice(start: number, end?: number): T[];
}
declare type KnockoutObservableArrayFunctions<T> = {
  /**
   * Removes and returns all the remaining elements starting from a given index.
   * @param start The zero-based location in the array from which to start removing elements.
   */
  splice(start: number): T[],

  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items Elements to insert into the array in place of the deleted elements.
   */
  splice(start: number, deleteCount: number, ...items: T[]): T[],

  /**
   * Removes the last value from the array and returns it.
   */
  pop(): T,

  /**
   * Adds a new item to the end of array.
   * @param items Items  to be added
   */
  push(...items: T[]): void,

  /**
   * Removes the first value from the array and returns it.
   */
  shift(): T,

  /**
   * Inserts a new item at the beginning of the array.
   * @param items Items to be added
   */
  unshift(...items: T[]): number,

  /**
   * Reverses the order of the array and returns the observableArray (not the underlying array).
   */
  reverse(): KnockoutObservableArray<T>,

  /**
   * Sorts the array contents and returns the observableArray.
   */
  sort(): KnockoutObservableArray<T>,

  /**
   * Sorts the array contents and returns the observableArray.
   * @param compareFunction A function that returns negative value if first argument is smaller, positive value if second is smaller, or zero to treat them as equal.
   */
  sort(
    compareFunction: (left: T, right: T) => number
  ): KnockoutObservableArray<T>,

  /**
   * Replaces the first value that equals oldItem with newItem
   * @param oldItem Item to be replaced
   * @param newItem Replacing item
   */
  replace(oldItem: T, newItem: T): void,

  /**
   * Removes all values that equal item and returns them as an array.
   * @param item The item to be removed
   */
  remove(item: T): T[],

  /**
   * Removes all values and returns them as an array.
   * @param removeFunction A function used to determine true if item should be removed and fasle otherwise
   */
  remove(removeFunction: (item: T) => boolean): T[],

  /**
   * Removes all values that equal any of the supplied items
   * @param items Items to be removed
   */
  removeAll(items: T[]): T[],

  /**
   * Removes all values and returns them as an array.
   */
  removeAll(): T[],

  /**
   * Finds any objects in the array that equal someItem and gives them a special property called _destroy with value true.
   * @param item Items to be marked with the property.
   */
  destroy(item: T): void,

  /**
   * Finds any objects in the array filtered by a function and gives them a special property called _destroy with value true.
   * @param destroyFunction A function used to determine which items should be marked with the property.
   */
  destroy(destroyFunction: (item: T) => boolean): void,

  /**
   * Finds any objects in the array that equal suplied items and gives them a special property called _destroy with value true.
   * @param items
   */
  destroyAll(items: T[]): void,

  /**
   * Gives a special property called _destroy with value true to all objects in the array.
   */
  destroyAll(): void
} & KnockoutReadonlyObservableArrayFunctions<T>;
declare interface KnockoutSubscribableStatic {
  fn: KnockoutSubscribableFunctions<any>;
  new<T>(): KnockoutSubscribable<T>;
}
declare interface KnockoutSubscription {
  /**
   * Terminates a subscription
   */
  dispose(): void;
}
declare type KnockoutSubscribable<T> = {
  /**
   * Registers to be notified after the observable's value changes
   * @param callback Function that is called whenever the notification happens
   * @param target Defines the value of 'this' in the callback function
   * @param event The name of the event to receive notification for
   */
  subscribe(
    callback: (newValue: T) => void,
    target?: any,
    event?: "change"
  ): KnockoutSubscription,

  /**
   * Registers to be notified before the observable's value changes
   * @param callback Function that is called whenever the notification happens
   * @param target Defines the value of 'this' in the callback function
   * @param event The name of the event to receive notification for
   */
  subscribe(
    callback: (newValue: T) => void,
    target: any,
    event: "beforeChange"
  ): KnockoutSubscription,

  /**
   * Registers to be notified when the observable's value changes
   * @param callback Function that is called whenever the notification happens
   * @param target Defines the value of 'this' in the callback function
   * @param event The name of the event to receive notification for
   */
  subscribe<TEvent>(
    callback: (newValue: TEvent) => void,
    target: any,
    event: string
  ): KnockoutSubscription,

  /**
   * Customizes observables basic functionality
   * @param requestedExtenders Name of the extender feature and its value, e.g. { notify: 'always' }, { rateLimit: 50 }
   */
  extend(requestedExtenders: {
    [key: string]: any
  }): KnockoutSubscribable<T>,

  /**
   * Gets total number of subscribers
   */
  getSubscriptionsCount(): number,

  /**
   * Gets number of subscribers of a particular event
   * @param event Event name
   */
  getSubscriptionsCount(event: string): number
} & KnockoutSubscribableFunctions<T>;
declare interface KnockoutComputedStatic {
  fn: KnockoutComputedFunctions<any>;

  /**
   * Creates computed observable
   */
  <T>(): KnockoutComputed<T>;

  /**
   * Creates computed observable
   * @param evaluatorFunction Function that computes the observable value
   * @param context Defines the value of 'this' when evaluating the computed observable
   * @param options An object with further properties for the computed observable
   */
  <T>(
    evaluatorFunction: () => T,
    context?: any,
    options?: KnockoutComputedOptions<T>
  ): KnockoutComputed<T>;

  /**
   * Creates computed observable
   * @param options An object that defines the computed observable options and behavior
   * @param context Defines the value of 'this' when evaluating the computed observable
   */
  <T>(options: KnockoutComputedDefine<T>, context?: any): KnockoutComputed<T>;
}
declare type KnockoutReadonlyComputed<T> = {
  isActive(): boolean,
  getDependenciesCount(): number
} & KnockoutReadonlyObservable<T>;
declare type KnockoutComputed<T> = {
  fn: KnockoutComputedFunctions<any>,

  /**
   * Manually disposes the computed observable, clearing all subscriptions to dependencies.
   * This function is useful if you want to stop a computed observable from being updated or want to clean up memory for a
   * computed observable that has dependencies on observables that won’t be cleaned.
   */
  dispose(): void,

  /**
   * Returns whether the computed observable may be updated in the future. A computed observable is inactive if it has no dependencies.
   */
  isActive(): boolean,

  /**
   * Returns the current number of dependencies of the computed observable.
   */
  getDependenciesCount(): number,

  /**
   * Customizes observables basic functionality
   * @param requestedExtenders Name of the extender feature and it's value, e.g. { notify: 'always' }, { rateLimit: 50 }
   */
  extend(requestedExtenders: {
    [key: string]: any
  }): KnockoutComputed<T>
} & KnockoutReadonlyComputed<T> &
  KnockoutObservable<T> &
  KnockoutComputedFunctions<T>;
declare interface KnockoutObservableArrayStatic {
  fn: KnockoutObservableArrayFunctions<any>;
  <T>(value?: T[] | null): KnockoutObservableArray<T>;
}
/**
 * While all observable arrays are writable at runtime, this type is analogous to the native ReadonlyArray type:
 * casting an observable array to this type expresses the intention that it shouldn't be mutated.
 */
declare type KnockoutReadonlyObservableArray<T> = {
  subscribe(
    callback: (newValue: KnockoutArrayChange<T>[]) => void,
    target: any,
    event: "arrayChange"
  ): KnockoutSubscription,
  subscribe(
    callback: (newValue: T[]) => void,
    target: any,
    event: "beforeChange"
  ): KnockoutSubscription,
  subscribe(
    callback: (newValue: T[]) => void,
    target?: any,
    event?: "change"
  ): KnockoutSubscription,
  subscribe<TEvent>(
    callback: (newValue: TEvent) => void,
    target: any,
    event: string
  ): KnockoutSubscription
} & KnockoutReadonlyObservable<$ReadOnlyArray<T>> &
  KnockoutReadonlyObservableArrayFunctions<T>;
declare type KnockoutObservableArray<T> = {
  subscribe(
    callback: (newValue: KnockoutArrayChange<T>[]) => void,
    target: any,
    event: "arrayChange"
  ): KnockoutSubscription,
  subscribe(
    callback: (newValue: T[]) => void,
    target: any,
    event: "beforeChange"
  ): KnockoutSubscription,
  subscribe(
    callback: (newValue: T[]) => void,
    target?: any,
    event?: "change"
  ): KnockoutSubscription,
  subscribe<TEvent>(
    callback: (newValue: TEvent) => void,
    target: any,
    event: string
  ): KnockoutSubscription,
  extend(requestedExtenders: {
    [key: string]: any
  }): KnockoutObservableArray<T>
} & KnockoutObservable<T[]> &
  KnockoutObservableArrayFunctions<T>;
declare interface KnockoutObservableStatic {
  fn: KnockoutObservableFunctions<any>;
  <T>(value: T): KnockoutObservable<T>;
  <T>(value: null): KnockoutObservable<T | null>;
  <T>(): KnockoutObservable<T | void>;
}
/**
 * While all observable are writable at runtime, this type is analogous to the native ReadonlyArray type:
 * casting an observable to this type expresses the intention that this observable shouldn't be mutated.
 */
declare type KnockoutReadonlyObservable<T> = {
  (): T,

  /**
   * Returns the current value of the computed observable without creating a dependency
   */
  peek(): T,
  valueHasMutated?: {
    (): void
  },
  valueWillMutate?: {
    (): void
  }
} & KnockoutSubscribable<T> &
  KnockoutObservableFunctions<T>;
declare type KnockoutObservable<T> = {
  (value: T): void,
  extend(requestedExtenders: {
    [key: string]: any
  }): KnockoutObservable<T>
} & KnockoutReadonlyObservable<T>;
declare interface KnockoutComputedOptions<T> {
  /**
   * Makes the computed observable writable. This is a function that receives values that other code is trying to write to your computed observable.
   * It’s up to you to supply custom logic to handle the incoming values, typically by writing the values to some underlying observable(s).
   * @param value
   */
  write?: (value: T) => void;

  /**
   * Disposal of the computed observable will be triggered when the specified DOM node is removed by KO.
   * This feature is used to dispose computed observables used in bindings when nodes are removed by the template and control-flow bindings.
   */
  disposeWhenNodeIsRemoved?: Node;

  /**
   * This function is executed before each re-evaluation to determine if the computed observable should be disposed.
   * A true-ish result will trigger disposal of the computed observable.
   */
  disposeWhen?: () => boolean;

  /**
   * Defines the value of 'this' whenever KO invokes your 'read' or 'write' callbacks.
   */
  owner?: any;

  /**
   * If true, then the value of the computed observable will not be evaluated until something actually attempts to access its value or manually subscribes to it.
   * By default, a computed observable has its value determined immediately during creation.
   */
  deferEvaluation?: boolean;

  /**
   * If true, the computed observable will be set up as a purecomputed observable. This option is an alternative to the ko.pureComputed constructor.
   */
  pure?: boolean;
}
declare type KnockoutComputedDefine<T> = {
  /**
   * A function that is used to evaluate the computed observable’s current value.
   */
  read(): T
} & KnockoutComputedOptions<T>;
declare interface KnockoutBindingContext {
  $parent: any;
  $parents: any[];
  $root: any;
  $data: any;
  $rawData: any | KnockoutObservable<any>;
  $index?: KnockoutObservable<number>;
  $parentContext?: KnockoutBindingContext;
  $component: any;
  $componentTemplateNodes: Node[];
  extend(properties: any): any;
  createChildContext(
    dataItemOrAccessor: any,
    dataItemAlias?: any,
    extendCallback?: Function
  ): any;
}
declare interface KnockoutAllBindingsAccessor {
  (): any;
  get(name: string): any;
  has(name: string): boolean;
}
declare interface KnockoutBindingHandler<E: Node = any, V = any, VM = any> {
  after?: Array<string>;
  init?: (
    element: E,
    valueAccessor: () => V,
    allBindingsAccessor: KnockoutAllBindingsAccessor,
    viewModel: VM,
    bindingContext: KnockoutBindingContext
  ) => void | {
    controlsDescendantBindings: boolean
  };
  update?: (
    element: E,
    valueAccessor: () => V,
    allBindingsAccessor: KnockoutAllBindingsAccessor,
    viewModel: VM,
    bindingContext: KnockoutBindingContext
  ) => void;
  options?: any;
  preprocess?: (
    value: string,
    name: string,
    addBindingCallback?: (name: string, value: string) => void
  ) => string;
  [s: string]: any;
}
declare interface KnockoutBindingHandlers {
  [bindingHandler: string]: KnockoutBindingHandler<>;
  visible: KnockoutBindingHandler<>;
  text: KnockoutBindingHandler<>;
  html: KnockoutBindingHandler<>;
  css: KnockoutBindingHandler<>;
  style: KnockoutBindingHandler<>;
  attr: KnockoutBindingHandler<>;
  foreach: KnockoutBindingHandler<>;
  if: KnockoutBindingHandler<>;
  ifnot: KnockoutBindingHandler<>;
  with: KnockoutBindingHandler<>;
  click: KnockoutBindingHandler<>;
  event: KnockoutBindingHandler<>;
  submit: KnockoutBindingHandler<>;
  enable: KnockoutBindingHandler<>;
  disable: KnockoutBindingHandler<>;
  value: KnockoutBindingHandler<>;
  textInput: KnockoutBindingHandler<>;
  hasfocus: KnockoutBindingHandler<>;
  checked: KnockoutBindingHandler<>;
  options: KnockoutBindingHandler<>;
  selectedOptions: KnockoutBindingHandler<>;
  uniqueName: KnockoutBindingHandler<>;
  template: KnockoutBindingHandler<>;
  component: KnockoutBindingHandler<>;
}
declare interface KnockoutMemoization {
  memoize(callback: () => string): string;
  unmemoize(memoId: string, callbackParams: any[]): boolean;
  unmemoizeDomNodeAndDescendants(
    domNode: any,
    extraCallbackParamsArray: any[]
  ): boolean;
  parseMemoText(memoText: string): string;
}
declare interface KnockoutVirtualElement {}
declare interface KnockoutVirtualElements {
  allowedBindings: {
    [bindingName: string]: boolean
  };
  emptyNode(node: KnockoutVirtualElement): void;
  firstChild(node: KnockoutVirtualElement): KnockoutVirtualElement;
  insertAfter(
    container: KnockoutVirtualElement,
    nodeToInsert: Node,
    insertAfter: Node
  ): void;
  nextSibling(node: KnockoutVirtualElement): Node;
  prepend(node: KnockoutVirtualElement, toInsert: Node): void;
  setDomNodeChildren(
    node: KnockoutVirtualElement,
    newChildren: {
      length: number,
      [index: number]: Node
    }
  ): void;
  childNodes(node: KnockoutVirtualElement): Node[];
}
declare interface KnockoutExtenders {
  throttle(target: any, timeout: number): KnockoutComputed<any>;
  notify(target: any, notifyWhen: string): any;
  rateLimit(target: any, timeout: number): any;
  rateLimit(
    target: any,
    options: {
      timeout: number,
      method?: string
    }
  ): any;
  trackArrayChanges(target: any): any;
}
declare interface KnockoutUtils {
  domData: {
    get(node: Node, key: string): any,
    set(node: Node, key: string, value: any): void,
    getAll(node: Node, createIfNotFound: boolean): any,
    clear(node: Node): boolean
  };
  domNodeDisposal: {
    addDisposeCallback(node: Node, callback: Function): void,
    removeDisposeCallback(node: Node, callback: Function): void,
    cleanNode(node: Node): Node,
    removeNode(node: Node): void
  };
  addOrRemoveItem<T>(
    array: T[] | KnockoutObservable<T>,
    value: T,
    included: T
  ): void;
  arrayFilter<T>(array: T[], predicate: (item: T) => boolean): T[];
  arrayFirst<T>(
    array: T[],
    predicate: (item: T) => boolean,
    predicateOwner?: any
  ): T;
  arrayForEach<T>(array: T[], action: (item: T, index: number) => void): void;
  arrayGetDistinctValues<T>(array: T[]): T[];
  arrayIndexOf<T>(array: T[], item: T): number;
  arrayMap<T, U>(array: T[], mapping: (item: T) => U): U[];
  arrayPushAll<T>(
    array: T[] | KnockoutObservableArray<T>,
    valuesToPush: T[]
  ): T[];
  arrayRemoveItem(array: any[], itemToRemove: any): void;
  compareArrays<T>(a: T[], b: T[]): Array<KnockoutArrayChange<T>>;
  extend(target: Object, source: Object): Object;
  fieldsIncludedWithJsonPost: any[];
  getFormFields(form: any, fieldName: string): any[];
  objectForEach(obj: any, action: (key: any, value: any) => void): void;
  parseHtmlFragment(html: string): any[];
  parseJson(jsonString: string): any;
  postJson(urlOrForm: any, data: any, options: any): void;
  peekObservable<T>(value: KnockoutObservable<T>): T;
  range(min: any, max: any): any;
  registerEventHandler(element: any, eventType: any, handler: Function): void;
  setHtml(node: Element, html: () => string): void;
  setHtml(node: Element, html: string): void;
  setTextContent(
    element: any,
    textContent: string | KnockoutObservable<string>
  ): void;
  stringifyJson(data: any, replacer?: Function, space?: string): string;
  toggleDomNodeCssClass(
    node: any,
    className: string,
    shouldHaveClass: boolean
  ): void;
  triggerEvent(element: any, eventType: any): void;
  unwrapObservable<T>(value: KnockoutObservable<T> | T): T;
  unwrapObservable<T>(value: KnockoutObservableArray<T> | T[]): T[];
}
declare interface KnockoutArrayChange<T> {
  status: "added" | "deleted" | "retained";
  value: T;
  index: number;
  moved?: number;
}
declare interface KnockoutTemplateSourcesDomElement {
  text(): any;
  text(value: any): void;
  data(key: string): any;
  data(key: string, value: any): any;
}
declare type KnockoutTemplateAnonymous = {
  nodes(): any,
  nodes(value: any): void
} & KnockoutTemplateSourcesDomElement;
declare interface KnockoutTemplateSources {
  domElement: {
    prototype: KnockoutTemplateSourcesDomElement,
    new(element: Element): KnockoutTemplateSourcesDomElement
  };
  anonymousTemplate: {
    prototype: KnockoutTemplateAnonymous,
    new(element: Element): KnockoutTemplateAnonymous
  };
}
declare type KnockoutNativeTemplateEngine = {
  renderTemplateSource(
    templateSource: Object,
    bindingContext?: KnockoutBindingContext,
    options?: Object
  ): any[]
} & KnockoutTemplateEngine;
declare interface KnockoutTemplateEngine {
  createJavaScriptEvaluatorBlock(script: string): string;
  makeTemplateSource(template: any, templateDocument?: Document): any;
  renderTemplate(
    template: any,
    bindingContext: KnockoutBindingContext,
    options: Object,
    templateDocument: Document
  ): any;
  isTemplateRewritten(template: any, templateDocument: Document): boolean;
  rewriteTemplate(
    template: any,
    rewriterCallback: Function,
    templateDocument: Document
  ): void;
}
declare interface KnockoutTasks {
  scheduler: (callback: Function) => any;
  schedule(task: Function): number;
  cancel(handle: number): void;
  runEarly(): void;
}
declare interface KnockoutStatic {
  utils: KnockoutUtils;
  memoization: KnockoutMemoization;
  bindingHandlers: KnockoutBindingHandlers;
  getBindingHandler(handler: string): KnockoutBindingHandler<>;
  virtualElements: KnockoutVirtualElements;
  extenders: KnockoutExtenders;
  applyBindings(viewModelOrBindingContext?: any, rootNode?: any): void;
  applyBindingsToDescendants(
    viewModelOrBindingContext: any,
    rootNode: any
  ): void;
  applyBindingAccessorsToNode(
    node: Node,
    bindings: (bindingContext: KnockoutBindingContext, node: Node) => {},
    bindingContext: KnockoutBindingContext
  ): void;
  applyBindingAccessorsToNode(
    node: Node,
    bindings: {},
    bindingContext: KnockoutBindingContext
  ): void;
  applyBindingAccessorsToNode(
    node: Node,
    bindings: (bindingContext: KnockoutBindingContext, node: Node) => {},
    viewModel: any
  ): void;
  applyBindingAccessorsToNode(node: Node, bindings: {}, viewModel: any): void;
  applyBindingsToNode(
    node: Node,
    bindings: any,
    viewModelOrBindingContext?: any
  ): any;
  subscribable: KnockoutSubscribableStatic;
  observable: KnockoutObservableStatic;
  computed: KnockoutComputedStatic;

  /**
   * Creates a pure computed observable
   * @param evaluatorFunction Function that computes the observable value
   * @param context Defines the value of 'this' when evaluating the computed observable
   */
  pureComputed<T>(
    evaluatorFunction: () => T,
    context?: any
  ): KnockoutComputed<T>;

  /**
   * Creates a pure computed observable
   * @param options An object that defines the computed observable options and behavior
   * @param context Defines the value of 'this' when evaluating the computed observable
   */
  pureComputed<T>(
    options: KnockoutComputedDefine<T>,
    context?: any
  ): KnockoutComputed<T>;
  observableArray: KnockoutObservableArrayStatic;
  contextFor(node: any): any;
  isSubscribable(instance: any): boolean;
  toJSON(viewModel: any, replacer?: Function, space?: any): string;
  toJS(viewModel: any): any;

  /**
   * Determine if argument is an observable. Returns true for observables, observable arrays, and all computed observables.
   * @param instance Object to be checked
   */
  isObservable(instance: any): boolean;

  /**
   * Determine if argument is an observable. Returns true for observables, observable arrays, and all computed observables.
   * @param instance Object to be checked
   */
  isObservable<T>(instance: KnockoutObservable<T> | T): boolean;

  /**
   * Determine if argument is a writable observable. Returns true for observables, observable arrays, and writable computed observables.
   * @param instance Object to be checked
   */
  isWriteableObservable(instance: any): boolean;

  /**
   * Determine if argument is a writable observable. Returns true for observables, observable arrays, and writable computed observables.
   * @param instance Object to be checked
   */
  isWriteableObservable<T>(instance: KnockoutObservable<T> | T): boolean;

  /**
   * Determine if argument is a computed observable
   * @param instance Object to be checked
   */
  isComputed(instance: any): boolean;

  /**
   * Determine if argument is a computed observable
   * @param instance Object to be checked
   */
  isComputed<T>(instance: KnockoutObservable<T> | T): boolean;
  dataFor(node: any): any;
  removeNode(node: Node): void;
  cleanNode(node: Node): Node;
  renderTemplate(
    template: Function,
    viewModel: any,
    options?: any,
    target?: any,
    renderMode?: any
  ): any;
  renderTemplate(
    template: string,
    viewModel: any,
    options?: any,
    target?: any,
    renderMode?: any
  ): any;
  unwrap<T>(value: KnockoutObservable<T> | T): T;
  unwrap<T>(value: KnockoutObservableArray<T> | T[]): T[];

  /**
   * Get information about the current computed property during the execution of a computed observable’s evaluator function.
   */
  computedContext: KnockoutComputedContext;
  templateSources: KnockoutTemplateSources;
  templateEngine: {
    prototype: KnockoutTemplateEngine,
    new(): KnockoutTemplateEngine
  };
  templateRewriting: {
    ensureTemplateIsRewritten(
      template: Node,
      templateEngine: KnockoutTemplateEngine,
      templateDocument: Document
    ): any,
    ensureTemplateIsRewritten(
      template: string,
      templateEngine: KnockoutTemplateEngine,
      templateDocument: Document
    ): any,
    memoizeBindingAttributeSyntax(
      htmlString: string,
      templateEngine: KnockoutTemplateEngine
    ): any,
    applyMemoizedBindingsToNextSibling(bindings: any, nodeName: string): string
  };
  nativeTemplateEngine: {
    prototype: KnockoutNativeTemplateEngine,
    new(): KnockoutNativeTemplateEngine,
    instance: KnockoutNativeTemplateEngine
  };
  jqueryTmplTemplateEngine: {
    prototype: KnockoutTemplateEngine,
    renderTemplateSource(
      templateSource: Object,
      bindingContext: KnockoutBindingContext,
      options: Object
    ): Node[],
    createJavaScriptEvaluatorBlock(script: string): string,
    addTemplate(templateName: string, templateMarkup: string): void
  };
  setTemplateEngine(templateEngine: KnockoutNativeTemplateEngine | void): void;
  renderTemplate(
    template: Function,
    dataOrBindingContext: KnockoutBindingContext,
    options: Object,
    targetNodeOrNodeArray: Node,
    renderMode: string
  ): any;
  renderTemplate(
    template: any,
    dataOrBindingContext: KnockoutBindingContext,
    options: Object,
    targetNodeOrNodeArray: Node,
    renderMode: string
  ): any;
  renderTemplate(
    template: Function,
    dataOrBindingContext: any,
    options: Object,
    targetNodeOrNodeArray: Node,
    renderMode: string
  ): any;
  renderTemplate(
    template: any,
    dataOrBindingContext: any,
    options: Object,
    targetNodeOrNodeArray: Node,
    renderMode: string
  ): any;
  renderTemplate(
    template: Function,
    dataOrBindingContext: KnockoutBindingContext,
    options: Object,
    targetNodeOrNodeArray: Node[],
    renderMode: string
  ): any;
  renderTemplate(
    template: any,
    dataOrBindingContext: KnockoutBindingContext,
    options: Object,
    targetNodeOrNodeArray: Node[],
    renderMode: string
  ): any;
  renderTemplate(
    template: Function,
    dataOrBindingContext: any,
    options: Object,
    targetNodeOrNodeArray: Node[],
    renderMode: string
  ): any;
  renderTemplate(
    template: any,
    dataOrBindingContext: any,
    options: Object,
    targetNodeOrNodeArray: Node[],
    renderMode: string
  ): any;
  renderTemplateForEach(
    template: Function,
    arrayOrObservableArray: any[],
    options: Object,
    targetNode: Node,
    parentBindingContext: KnockoutBindingContext
  ): any;
  renderTemplateForEach(
    template: any,
    arrayOrObservableArray: any[],
    options: Object,
    targetNode: Node,
    parentBindingContext: KnockoutBindingContext
  ): any;
  renderTemplateForEach(
    template: Function,
    arrayOrObservableArray: KnockoutObservable<any>,
    options: Object,
    targetNode: Node,
    parentBindingContext: KnockoutBindingContext
  ): any;
  renderTemplateForEach(
    template: any,
    arrayOrObservableArray: KnockoutObservable<any>,
    options: Object,
    targetNode: Node,
    parentBindingContext: KnockoutBindingContext
  ): any;

  /**
   * Executes a callback function inside a computed observable, without creating a dependecy between it and the observables inside the function
   * @param callback Function to be called.
   * @param callbackTarget Defines the value of 'this' in the callback function
   * @param callbackArgs Arguments for the callback Function
   */
  ignoreDependencies<T>(
    callback: () => T,
    callbackTarget?: any,
    callbackArgs?: any
  ): T;
  expressionRewriting: {
    bindingRewriteValidators: any[],
    twoWayBindings: any,
    parseObjectLiteral: (objectLiteralString: string) => any[],

    /**
     * Internal, private KO utility for updating model properties from within bindings
     * property:            If the property being updated is (or might be) an observable, pass it here
     *                       If it turns out to be a writable observable, it will be written to directly
     * allBindings:         An object with a get method to retrieve bindings in the current execution context.
     *                       This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
     *                       (See note below)
     * key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
     * value:               The value to be written
     * checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
     *                       it is !== existing value on that writable observable
     *
     * Note that if you need to write to the viewModel without an observable property,
     * you need to set ko.expressionRewriting.twoWayBindings[key] = true; *before* the binding evaluation.
     */
    writeValueToProperty: (
      property: KnockoutObservable<any> | any,
      allBindings: KnockoutAllBindingsAccessor,
      key: string,
      value: any,
      checkIfDifferent?: boolean
    ) => void
  };
  bindingProvider: {
    instance: KnockoutBindingProvider,
    new(): KnockoutBindingProvider
  };
  selectExtensions: {
    readValue(element: HTMLElement): any,
    writeValue(element: HTMLElement, value: any, allowUnset?: boolean): void
  };
  components: KnockoutComponents;
  options: {
    deferUpdates: boolean,
    useOnlyNativeEvents: boolean
  };
  tasks: KnockoutTasks;
  onError?: (error: Error) => void;
}
declare interface KnockoutBindingProvider {
  nodeHasBindings(node: Node): boolean;
  getBindings(node: Node, bindingContext: KnockoutBindingContext): {};
  getBindingAccessors?: (
    node: Node,
    bindingContext: KnockoutBindingContext
  ) => {
    [key: string]: string
  };
}
declare interface KnockoutComputedContext {
  /**
   * Returns the number of dependencies of the computed observable detected so far during the current evaluation.
   */
  getDependenciesCount(): number;

  /**
   * A function that returns true if called during the first ever evaluation of the current computed observable, or false otherwise.
   * For pure computed observables, isInitial() is always undefined.
   */
  isInitial: () => boolean;
  isSleeping: boolean;
}
declare interface KnockoutComponentTypes$Config {
  viewModel?:
    | KnockoutComponentTypes$ViewModelFunction
    | KnockoutComponentTypes$ViewModelSharedInstance
    | KnockoutComponentTypes$ViewModelFactoryFunction
    | KnockoutComponentTypes$AMDModule;
  template:
    | string
    | Node[]
    | DocumentFragment
    | KnockoutComponentTypes$TemplateElement
    | KnockoutComponentTypes$AMDModule;
  synchronous?: boolean;
}

declare interface KnockoutComponentTypes$ComponentConfig {
  viewModel?:
    | KnockoutComponentTypes$ViewModelFunction
    | KnockoutComponentTypes$ViewModelSharedInstance
    | KnockoutComponentTypes$ViewModelFactoryFunction
    | KnockoutComponentTypes$AMDModule;
  template: any;
  createViewModel?: any;
}

declare interface KnockoutComponentTypes$EmptyConfig {}

declare interface KnockoutComponentTypes$AMDModule {
  require: string;
}

declare interface KnockoutComponentTypes$ViewModelFunction {
  (params?: any): any;
}

declare interface KnockoutComponentTypes$ViewModelSharedInstance {
  instance: any;
}

declare interface KnockoutComponentTypes$ViewModelFactoryFunction {
  createViewModel: (
    params?: any,
    componentInfo?: KnockoutComponentTypes$ComponentInfo
  ) => any;
}

declare interface KnockoutComponentTypes$ComponentInfo {
  element: Node;
  templateNodes: Node[];
}

declare interface KnockoutComponentTypes$TemplateElement {
  element: string | Node;
}

declare interface KnockoutComponentTypes$Loader {
  getConfig?: (
    componentName: string,
    callback: (result: KnockoutComponentTypes$ComponentConfig | null) => void
  ) => void;
  loadComponent?: (
    componentName: string,
    config: KnockoutComponentTypes$ComponentConfig,
    callback: (result: KnockoutComponentTypes$Definition | null) => void
  ) => void;
  loadTemplate?: (
    componentName: string,
    templateConfig: any,
    callback: (result: Node[] | null) => void
  ) => void;
  loadViewModel?: (
    componentName: string,
    viewModelConfig: any,
    callback: (result: any) => void
  ) => void;
  suppressLoaderExceptions?: boolean;
}

declare interface KnockoutComponentTypes$Definition {
  template: Node[];
  createViewModel?: (
    params: any,
    options: {
      element: Node
    }
  ) => any;
}
declare interface KnockoutComponents {
  /**
   * Registers a component, in the default component loader, to be used by name in the component binding.
   * @param componentName Component name.
   * @param config Component configuration.
   */
  register(
    componentName: string,
    config: KnockoutComponentTypes$Config | KnockoutComponentTypes$EmptyConfig
  ): void;

  /**
   * Determine if a component with the specified name is already registered in the default component loader.
   * @param componentName Component name.
   */
  isRegistered(componentName: string): boolean;

  /**
   * Removes the named component from the default component loader registry. Or if no such component was registered, does nothing.
   * @param componentName Component name.
   */
  unregister(componentName: string): void;

  /**
   * Searchs each registered component loader by component name, and returns the viewmodel/template declaration via callback parameter
   * @param componentName Component name.
   * @param callback Function to be called with the viewmodel/template declaration parameter.
   */
  get(
    componentName: string,
    callback: (definition: KnockoutComponentTypes$Definition) => void
  ): void;

  /**
   * Clears the cache knockout creates to speed up component loading, for a given component.
   * @param componentName Component name.
   */
  clearCachedDefinition(componentName: string): void;
  defaultLoader: KnockoutComponentTypes$Loader;
  loaders: KnockoutComponentTypes$Loader[];
  getComponentNameForNode(node: Node): string;
}
declare var ko: KnockoutStatic;
declare module "knockout" {
  declare export default typeof ko;
}
