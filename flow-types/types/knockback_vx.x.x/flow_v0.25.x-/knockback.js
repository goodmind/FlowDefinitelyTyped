declare interface Knockback$EventWatcherOptions {
  emitter: (newEmitter: any) => void;
  update: (newValue: any) => void;
  event_selector: string;
  key?: string;
}

declare interface Knockback$FactoryOptions {
  factories: any;
}

declare interface Knockback$StoreOptions {
  creator: any;
  path: string;
  store: Knockback$Store;
  factory: Knockback$Factory;
}

declare class Knockback$Destroyable {
  destroy(): void;
}

declare class Knockback$ViewModel mixins Knockback$Destroyable {
  constructor(
    model?: Backbone.Model,
    options?: Knockback$ViewModelOptions,
    viewModel?: Knockback$ViewModel
  ): this;
  shareOptions(): Knockback$ViewModelOptions;
  extend(source: any): void;
  model(): Backbone.Model;
}

declare class Knockback$EventWatcher mixins Knockback$Destroyable {
  static useOptionsOrCreate(
    options: any,
    emitter: KnockoutObservable<any>,
    obj: Backbone.Model,
    callback_options: any
  ): void;
  emitter(): Backbone.Model;
  emitter(newEmitter: Backbone.Model): void;
  registerCallbacks(obj: any, callback_info: any): void;
  releaseCallbacks(obj: any): void;
}

declare class Knockback$Factory {
  static useOptionsOrCreate(
    options: Knockback$FactoryOptions,
    obj: any,
    owner_path: string
  ): void;
  constructor(parent_factory: any): this;
  hasPath(path: string): boolean;
  addPathMapping(path: string, create_info: any): void;
  addPathMappings(factories: any, owner_path: string): void;
  hasPathMappings(factories: any, owner_path: string): boolean;
  creatorForPath(obj: any, path: string): void;
}

declare class Knockback$Store mixins Knockback$Destroyable {
  static useOptionsOrCreate(
    options: Knockback$StoreOptions,
    obj: any,
    observable: KnockoutObservable<any>
  ): void;
  constructor(model: Backbone.Model, options: Knockback$StoreOptions): this;
  clear(): void;
  register(
    obj: Backbone.Model,
    observable: KnockoutObservable<any>,
    options: Knockback$StoreOptions
  ): void;
  findOrCreate(obj: Backbone.Model, options: Knockback$StoreOptions): void;
}

declare class Knockback$DefaultObservable mixins Knockback$Destroyable {
  constructor(
    targetObservable: KnockoutObservable<any>,
    defaultValue: any
  ): this;
  setToDefault(): void;
}

declare class Knockback$FormattedObservable mixins Knockback$Destroyable {
  constructor(format: string, args: any[]): this;
  constructor(format: KnockoutObservable<any>, args: any[]): this;
}

declare interface Knockback$LocalizedObservable {
  constructor(value: any, options: any, vm: any): void;
  destroy(): void;
  resetToCurrent(): void;
  observedValue(value: any): void;
}

declare class Knockback$TriggeredObservable mixins Knockback$Destroyable {
  constructor(emitter: Backbone.ModelBase, event: string): this;
  emitter(): Backbone.ModelBase;
  emitter(newEmitter: Backbone.ModelBase): void;
}

declare class Knockback$Statistics {
  constructor(): this;
  clear(): void;
  addModelEvent(event: string): void;
  modelEventsStatsString(): void;
  register(key: string, obj: any): void;
  unregister(key: string, obj: any): void;
  registeredCount(type: any): number;
  registeredStatsString(success_message: string): string;
}

declare interface Knockback$OptionsBase {
  path?: string;
  store?: Knockback$Store;
  factory?: Knockback$Factory;
  options?: any;
}

declare type Knockback$ViewModelOptions = {
  internals?: string[],
  requires?: string[],
  keys?: string[],
  if(objOrArray: any): void,
  path?: string,
  factories?: any
} & Knockback$OptionsBase;

declare type Knockback$CollectionOptions = {
  models_only?: boolean,
  view_model?: any,
  create?: any,
  factories?: any,
  comparator?: any,
  sort_attribute?: string,
  filters?: any
} & Knockback$OptionsBase;

declare type Knockback$CollectionObservable = {
  collection(colleciton: Backbone.Collection<Backbone.Model>): void,
  collection(): Backbone.Collection<Backbone.Model>,
  destroy(): void,
  shareOptions(): Knockback$CollectionOptions,
  filters(id: any): Backbone.Model,
  filters(ids: any[]): Knockback$CollectionObservable,
  filters(
    iterator: (element: Backbone.Model) => boolean
  ): Knockback$CollectionObservable,
  comparator(comparatorFunction: any): void,
  sortAttribute(attr: string): void,
  viewModelByModel(model: Backbone.Model): Knockback$ViewModel,
  hasViewModels(): boolean
} & KnockoutObservableArray<any>;

declare interface Knockback$Utils {
  wrappedObservable(obj: any): any;
  wrappedObservable(obj: any, value: any): void;
  wrappedObject(obj: any): any;
  wrappedObject(obj: any, value: any): void;
  wrappedModel(obj: any): any;
  wrappedModel(obj: any, value: any): void;
  wrappedStore(obj: any): any;
  wrappedStore(obj: any, value: any): void;
  wrappedFactory(obj: any): any;
  wrappedFactory(obj: any, value: any): void;
  wrappedEventWatcher(obj: any): any;
  wrappedEventWatcher(obj: any, value: any): void;
  wrappedDestroy(obj: any): void;
  valueType(observable: KnockoutObservable<any>): any;
  pathJoin(path1: string, path2: string): string;
  optionsPathJoin(options: any, path: string): any;
  inferCreator(
    value: any,
    factory: Knockback$Factory,
    path: string,
    owner: any,
    key: string
  ): void;
  createFromDefaultCreator(obj: any, options?: any): void;
  hasModelSignature(obj: any): boolean;
  hasCollectionSignature(obj: any): boolean;
}

declare type Knockback$Static = {
  Knockback$ViewModel: any,
  Knockback$CollectionObservable: any,
  collectionObservable(
    model?: Backbone.Collection<Backbone.Model>,
    options?: Knockback$CollectionOptions
  ): Knockback$CollectionObservable,

  /**
   * Base class for observing model attributes.
   */
  observable(
    model: Backbone.Model,
    options: Knockback$IObservableOptions,
    vm?: Knockback$ViewModel
  ): KnockoutObservable<any>,
  observable(
    model: Backbone.Model,
    options_attributeName: string,
    vm?: Knockback$ViewModel
  ): KnockoutObservable<any>,
  viewModel(model?: Backbone.Model, options?: any): KnockoutObservable<any>,
  defaultObservable(
    targetObservable: KnockoutObservable<any>,
    defaultValue: any
  ): KnockoutObservable<any>,
  formattedObservable(format: string, args: any[]): KnockoutObservable<any>,
  formattedObservable(
    format: KnockoutObservable<any>,
    args: any[]
  ): KnockoutObservable<any>,
  localizedObservable(data: any, options: any): KnockoutObservable<any>,
  release(object: any, pre_release?: () => void): void,
  releaseKeys(object: any): void,
  releaseOnNodeRemove(viewmodel: Knockback$ViewModel, node: Element): void,
  renderTemplate(
    template: string,
    viewModel: Knockback$ViewModel,
    options: any
  ): void,
  renderAutoReleasedTemplate(
    template: string,
    viewModel: Knockback$ViewModel,
    options: any
  ): void,
  applyBindings(viewModel: Knockback$ViewModel, node?: Element): void
} & Knockback$Utils;

/**
 * parameter of ko.observable constructor
 * Options Hash: (option):
 * key (String) — the name of the attribute.
 * read (Function) — a function used to provide transform the attribute value before passing it to the caller. Signature: read()
 * write (Function) — a function used to provide transform the value before passing it to the model set function. Signature: write(value)
 * args (Array) — arguments to pass to the read and write functions (they can be ko.observables). Can be useful for passing arguments to a locale manager.
 * localizer (Constructor) — a concrete kb.LocalizedObservable constructor for localization.
 * default (Data|ko.observable) — the default value. Can be a value, string or ko.observable.
 * path (String) — the path to the value (used to create related observables from the factory).
 * store (kb.Store) — a store used to cache and share view models.
 * factory (kb.Factory) — a factory used to create view models.
 * options (Object) — a set of options merge into these options using _.defaults. Useful for extending options when deriving classes rather than merging them by hand.
 */
declare interface Knockback$IObservableOptions {
  key: string;
  read?: () => any;
  write?: (value: any) => void;
  args?: KnockoutObservable<any>[];
  localizer?: Knockback$LocalizedObservable;
  default?: any;
  path?: string;
  store?: any;
  factory?: any;
  options?: any;
}
declare module "knockback" {
  declare var kb: Knockback$Knockback$Static;
}
