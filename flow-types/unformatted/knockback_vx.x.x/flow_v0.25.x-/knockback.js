declare module 'knockback' {
        declare interface Knockback$EventWatcherOptions {
emitter: (newEmitter: <<UNKNOWN PARAM FORMAT>>) => void,
update: (newValue: <<UNKNOWN PARAM FORMAT>>) => void,
event_selector: string,
key?: string
} 

declare interface Knockback$FactoryOptions {
factories: any
} 

declare interface Knockback$StoreOptions {
creator: any,
path: string,
store: Knockback$Store,
factory: Knockback$Factory
} 

declare class Knockback$Destroyable  {
destroy(): void
}

declare class Knockback$ViewModel mixins Knockback$Destroyable {
constructor(model?: Backbone.Model, options?: Knockback$ViewModelOptions, viewModel?: Knockback$ViewModel): this;
shareOptions(): Knockback$ViewModelOptions;
extend(source: any): void;
model(): Backbone.Model
}

declare class Knockback$EventWatcher mixins Knockback$Destroyable {
static useOptionsOrCreate(
options: <<UNKNOWN PARAM FORMAT>>,
emitter: KnockoutObservable<any>,
obj: Backbone.Model,
callback_options: any): void;
emitter(): Backbone.Model;
emitter(newEmitter: Backbone.Model): void;
registerCallbacks(obj: any, callback_info: any): void;
releaseCallbacks(obj: any): void
}

declare class Knockback$Factory  {
static useOptionsOrCreate(options: Knockback$FactoryOptions, obj: any, owner_path: string): void;
constructor(parent_factory: any): this;
hasPath(path: string): boolean;
addPathMapping(path: string, create_info: <<UNKNOWN PARAM FORMAT>>): void;
addPathMappings(factories: any, owner_path: string): void;
hasPathMappings(factories: any, owner_path: string): boolean;
creatorForPath(obj: any, path: string): void
}

declare class Knockback$Store mixins Knockback$Destroyable {
static useOptionsOrCreate(
options: Knockback$StoreOptions,
obj: any,
observable: KnockoutObservable<any>): void;
constructor(model: Backbone.Model, options: Knockback$StoreOptions): this;
clear(): void;
register(
obj: Backbone.Model,
observable: KnockoutObservable<any>,
options: Knockback$StoreOptions): void;
findOrCreate(obj: Backbone.Model, options: Knockback$StoreOptions): void
}

declare class Knockback$DefaultObservable mixins Knockback$Destroyable {
constructor(targetObservable: KnockoutObservable<any>, defaultValue: any): this;
setToDefault(): void
}

declare class Knockback$FormattedObservable mixins Knockback$Destroyable {
constructor(format: string, args: any[]): this;
constructor(format: KnockoutObservable<any>, args: any[]): this
}

declare interface Knockback$LocalizedObservable {
constructor<<UNKNOWN PARAM FORMAT>>,
destroy<<UNKNOWN PARAM FORMAT>>,
resetToCurrent<<UNKNOWN PARAM FORMAT>>,
observedValue<<UNKNOWN PARAM FORMAT>>
} 

declare class Knockback$TriggeredObservable mixins Knockback$Destroyable {
constructor(emitter: Backbone.ModelBase, event: string): this;
emitter(): Backbone.ModelBase;
emitter(newEmitter: Backbone.ModelBase): void
}

declare class Knockback$Statistics  {
constructor(): this;
clear(): void;
addModelEvent(event: string): void;
modelEventsStatsString(): void;
register(key: string, obj: any): void;
unregister(key: string, obj: any): void;
registeredCount(type: any): number;
registeredStatsString(success_message: string): string
}

declare interface Knockback$OptionsBase {
path?: string,
store?: Knockback$Store,
factory?: Knockback$Factory,
options?: any
} 

declare type Knockback$ViewModelOptions = {
internals?: string[],
requires?: string[],
keys?: string[],
if<<UNKNOWN PARAM FORMAT>>,
path?: string,
factories?: any
} & Knockback$OptionsBase


declare type Knockback$CollectionOptions = {
models_only?: boolean,
view_model?: any,
create?: any,
factories?: any,
comparator?: any,
sort_attribute?: string,
filters?: any
} & Knockback$OptionsBase


declare type Knockback$CollectionObservable = {
collection<<UNKNOWN PARAM FORMAT>>,
collection(): Backbone.Collection<Backbone.Model>,
destroy<<UNKNOWN PARAM FORMAT>>,
shareOptions(): Knockback$CollectionOptions,
filters(id: any): Backbone.Model,
filters(ids: any[]): Knockback$CollectionObservable,
filters(iterator: (element: Backbone.Model) => boolean): Knockback$CollectionObservable,
comparator<<UNKNOWN PARAM FORMAT>>,
sortAttribute<<UNKNOWN PARAM FORMAT>>,
viewModelByModel(model: Backbone.Model): Knockback$ViewModel,
hasViewModels(): boolean
} & KnockoutObservableArray<any>


declare interface Knockback$Utils {
wrappedObservable(obj: any): any,
wrappedObservable<<UNKNOWN PARAM FORMAT>>,
wrappedObject(obj: any): any,
wrappedObject<<UNKNOWN PARAM FORMAT>>,
wrappedModel(obj: any): any,
wrappedModel<<UNKNOWN PARAM FORMAT>>,
wrappedStore(obj: any): any,
wrappedStore<<UNKNOWN PARAM FORMAT>>,
wrappedFactory(obj: any): any,
wrappedFactory<<UNKNOWN PARAM FORMAT>>,
wrappedEventWatcher(obj: any): any,
wrappedEventWatcher<<UNKNOWN PARAM FORMAT>>,
wrappedDestroy<<UNKNOWN PARAM FORMAT>>,
valueType(observable: KnockoutObservable<any>): any,
pathJoin(path1: string, path2: string): string,
optionsPathJoin(options: any, path: string): any,
inferCreator<<UNKNOWN PARAM FORMAT>>,
createFromDefaultCreator<<UNKNOWN PARAM FORMAT>>,
hasModelSignature(obj: any): boolean,
hasCollectionSignature(obj: any): boolean
} 

declare type Knockback$Static = {
Knockback$ViewModel: <<UNKNOWN PARAM FORMAT>>,
Knockback$CollectionObservable: <<UNKNOWN PARAM FORMAT>>,
collectionObservable(
model?: Backbone.Collection<Backbone.Model>,
options?: Knockback$CollectionOptions): Knockback$CollectionObservable,

/**
 * Base class for observing model attributes.
 */
observable(
model: Backbone.Model,
options: Knockback$IObservableOptions,
vm?: Knockback$ViewModel): KnockoutObservable<any>,
observable(
model: Backbone.Model,
options_attributeName: string,
vm?: Knockback$ViewModel): KnockoutObservable<any>,
viewModel(model?: Backbone.Model, options?: any): KnockoutObservable<any>,
defaultObservable(
targetObservable: KnockoutObservable<any>,
defaultValue: any): KnockoutObservable<any>,
formattedObservable(format: string, args: any[]): KnockoutObservable<any>,
formattedObservable(format: KnockoutObservable<any>, args: any[]): KnockoutObservable<any>,
localizedObservable(data: any, options: any): KnockoutObservable<any>,
release<<UNKNOWN PARAM FORMAT>>,
releaseKeys<<UNKNOWN PARAM FORMAT>>,
releaseOnNodeRemove<<UNKNOWN PARAM FORMAT>>,
renderTemplate<<UNKNOWN PARAM FORMAT>>,
renderAutoReleasedTemplate<<UNKNOWN PARAM FORMAT>>,
applyBindings<<UNKNOWN PARAM FORMAT>>
} & Knockback$Utils



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
key: string,
read?: () => any,
write?: (value: any) => void,
args?: KnockoutObservable<any>[],
localizer?: Knockback$LocalizedObservable,
default?: any,
path?: string,
store?: any,
factory?: any,
options?: any
} 
	declare var kb: Knockback$Knockback$Static;
    }
