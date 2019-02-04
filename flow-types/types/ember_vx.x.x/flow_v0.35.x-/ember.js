import type {
          Objectify,Fix,UnwrapComputedPropertySetters,UnwrapComputedPropertySetter,UnwrapComputedPropertyGetters,UnwrapComputedPropertyGetter,EmberClassArguments,EmberClassConstructor,EmberInstanceArguments,ComputedPropertyCallback,ObserverMethod
        } from '@ember/object/-private/types';
import typeof * as HandlebarsNamespace from 'handlebars';
import typeof Rsvp from 'rsvp';
import type {
          TemplateFactory
        } from 'htmlbars-inline-precompile';
import typeof * as EmberServiceNs from '@ember/service';
import typeof * as EmberControllerNs from '@ember/controller';
import typeof * as EmberStringNs from '@ember/string';
import typeof * as EmberPolyfillsNs from '@ember/polyfills';
import typeof * as EmberUtilsNs from '@ember/utils';
import typeof * as EmberRunloopNs from '@ember/runloop';
import typeof * as EmberObjectNs from '@ember/object';
import typeof * as EmberObjectObserversNs from '@ember/object/observers';
import typeof EmberMixin from '@ember/object/mixin';
import typeof * as EmberObjectProxyNs from '@ember/object/proxy';
import typeof * as EmberObjectPromiseProxyNs from '@ember/object/promise-proxy-mixin';
import typeof * as EmberObjectInternalsNs from '@ember/object/internals';
import typeof * as EmberObjectComputedNs from '@ember/object/computed';
import typeof * as EmberObjectEventedNs from '@ember/object/evented';
import typeof * as EmberObjectEventsNs from '@ember/object/events';
import typeof * as EmberDebugNs from '@ember/debug';
import typeof _ContainerDebugAdapter from '@ember/debug/container-debug-adapter';
import typeof EmberDataAdapter from '@ember/debug/data-adapter';
import typeof * as EmberEngineNs from '@ember/engine';
import typeof * as EmberEngineInstanceNs from '@ember/engine/instance';
import typeof _ContainerProxyMixin from '@ember/engine/-private/container-proxy-mixin';
import typeof _RegistryProxyMixin from '@ember/engine/-private/registry-proxy-mixin';
import typeof EmberCoreObject from '@ember/object/core';
import typeof * as EmberApplicationNs from '@ember/application';
import typeof * as EmberApplicationInstanceNs from '@ember/application/instance';
import typeof * as EmberApplicationDeprecateNs from '@ember/application/deprecations';
import typeof * as EmberTestNs from '@ember/test';
import typeof EmberObservable from '@ember/object/observable';
import typeof * as EmberArrayNs from '@ember/array';
import typeof EmberMutableArray from '@ember/array/mutable';
import typeof EmberNativeArray from '@ember/array/-private/native-array';
import typeof EmberArrayProxy from '@ember/array/proxy';
import typeof EmberEnumerable from '@ember/array/-private/enumerable';
import typeof EmberMutableEnumerable from '@ember/array/-private/mutable-enumerable';
import typeof EmberArrayProtoExtensions from '@ember/array/types/prototype-extensions';
import type {
          RunMethod
        } from '@ember/runloop/-private/types';
import typeof EmberError from '@ember/error';
declare type EmberArray<T> = EmberArrayNs.default<T>;import typeof EmberActionHandler from '@ember/object/-private/action-handler';
import typeof EmberComponent from '@ember/component';
import typeof EmberTextArea from '@ember/component/text-area';
import typeof EmberTextField from '@ember/component/text-field';
import typeof EmberCheckbox from '@ember/component/checkbox';
import typeof EmberHelper from '@ember/component/helper';
import typeof EmberRoutingRouter from '@ember/routing/router';
import typeof EmberRoutingRoute from '@ember/routing/route';
import typeof EmberRoutingTransition from '@ember/routing/-private/transition';
import typeof EmberRoutingRouterService from '@ember/routing/router-service';
import typeof EmberRoutingHashLocation from '@ember/routing/hash-location';
import typeof EmberRoutingAutoLocation from '@ember/routing/auto-location';
import typeof EmberRoutingHistoryLocation from '@ember/routing/history-location';
import typeof EmberRoutingNoneLocation from '@ember/routing/none-location';
import typeof EmberRoutingLinkComponent from '@ember/routing/link-component';
import typeof EmberDefaultResolver from '@ember/application/-private/default-resolver';
import typeof EmberEventDispatcher from '@ember/application/-private/event-dispatcher';
import typeof EmberRegistry from '@ember/application/-private/registry';
import typeof EmberResolver from '@ember/application/resolver';
import typeof EmberTestAdapter from '@ember/test/adapter';

      declare var npm$namespace$Ember: {
        getEngineParent: typeof Ember$getEngineParent,
keys: typeof Ember$keys,
onerror: typeof Ember$onerror,
        A: typeof Ember$A,
isArray: typeof Ember$isArray,
Enumerable: typeof Ember$Enumerable,
Array: typeof Ember$Array,
MutableArray: typeof Ember$MutableArray,
NativeArray: typeof Ember$NativeArray,
MutableEnumerable: typeof Ember$MutableEnumerable,
ActionHandler: typeof Ember$ActionHandler,
deprecateFunc: typeof Ember$deprecateFunc,
deprecate: typeof Ember$deprecate,
getOwner: typeof Ember$getOwner,
setOwner: typeof Ember$setOwner,
Comparable: typeof Ember$Comparable,
Observable: typeof Ember$Observable,
PromiseProxyMixin: typeof Ember$PromiseProxyMixin,
Debug: typeof Ember$Debug,
Error: typeof Ember$Error,
Evented: typeof Ember$Evented,
Logger: typeof Ember$Logger,
ViewTargetActionSupport: typeof Ember$ViewTargetActionSupport,
ViewUtils: typeof Ember$ViewUtils,
RSVP: typeof Ember$RSVP,
computed: typeof Ember$computed,
run: typeof Ember$run,
platform: typeof Ember$platform,
assert: typeof Ember$assert,
debug: typeof Ember$debug,
defineProperty: typeof Ember$defineProperty,
runInDebug: typeof Ember$runInDebug,
warn: typeof Ember$warn,
cacheFor: typeof Ember$cacheFor,
addListener: typeof Ember$addListener,
removeListener: typeof Ember$removeListener,
sendEvent: typeof Ember$sendEvent,
on: typeof Ember$on,
isBlank: typeof Ember$isBlank,
isEmpty: typeof Ember$isEmpty,
isNone: typeof Ember$isNone,
isPresent: typeof Ember$isPresent,
merge: typeof Ember$merge,
aliasMethod: typeof Ember$aliasMethod,
observer: typeof Ember$observer,
addObserver: typeof Ember$addObserver,
removeObserver: typeof Ember$removeObserver,
get: typeof Ember$get,
notifyPropertyChange: typeof Ember$notifyPropertyChange,
getWithDefault: typeof Ember$getWithDefault,
getProperties: typeof Ember$getProperties,
setProperties: typeof Ember$setProperties,
set: typeof Ember$set,
trySet: typeof Ember$trySet,
compare: typeof Ember$compare,
copy: typeof Ember$copy,
isEqual: typeof Ember$isEqual,
typeOf: typeof Ember$typeOf,
assign: typeof Ember$assign,
guidFor: typeof Ember$guidFor,
inspect: typeof Ember$inspect,
tryInvoke: typeof Ember$tryInvoke,
VERSION: typeof Ember$VERSION,
$: typeof Ember$$,
testing: typeof Ember$testing,
expandProperties: typeof Ember$expandProperties,
      }
declare var Ember$A: typeof undefined;

declare var Ember$isArray: typeof undefined;

declare type Ember$Enumerable<T> = EmberEnumerable<T>;

declare var Ember$Enumerable: typeof EmberEnumerable;

declare class Ember$ArrayProxy<T> mixins EmberArrayProxy<T> {}

declare type Ember$Array<T> = EmberArray<T>;

declare var Ember$Array: typeof undefined;

declare type Ember$MutableArray<T> = EmberMutableArray<T>;

declare var Ember$MutableArray: typeof EmberMutableArray;

declare type Ember$NativeArray<T> = EmberNativeArray<T>;

declare var Ember$NativeArray: typeof EmberNativeArray;

declare type Ember$MutableEnumerable<T> = EmberMutableEnumerable<T>;

declare var Ember$MutableEnumerable: typeof EmberMutableEnumerable;

declare class Ember$Router mixins EmberRoutingRouter {}

declare class Ember$Route mixins EmberRoutingRoute {}

declare var Ember$ActionHandler: typeof EmberActionHandler;

declare class Ember$Controller mixins EmberControllerNs.default {}

declare class Ember$Component mixins EmberComponent {}

declare class Ember$TextArea mixins EmberTextArea {}

declare class Ember$TextField mixins EmberTextField {}

declare class Ember$Checkbox mixins EmberCheckbox {}

declare class Ember$Helper mixins EmberHelper {}

declare class Ember$HashLocation mixins EmberRoutingHashLocation {}

declare class Ember$NoneLocation mixins EmberRoutingNoneLocation {}

declare class Ember$HistoryLocation mixins EmberRoutingHistoryLocation {}

declare class Ember$LinkComponent mixins EmberRoutingLinkComponent {}

declare var Ember$deprecateFunc: typeof undefined;

declare var Ember$deprecate: typeof undefined;

declare var Ember$getOwner: typeof undefined;

declare var Ember$setOwner: typeof undefined;

declare class Ember$DefaultResolver mixins EmberDefaultResolver {}

declare class Ember$Resolver mixins EmberResolver {}

declare class Ember$EventDispatcher mixins EmberEventDispatcher {}

declare class Ember$Registry mixins EmberRegistry {}

declare interface Ember$FunctionPrototypeExtensions {

/**
 * The `property` extension of Javascript's Function prototype is available
 * when `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Function` is
 * `true`, which is the default.
 */
property(...args: string[]): Ember$ComputedProperty<any>,

/**
 * The `observes` extension of Javascript's Function prototype is available
 * when `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Function` is
 * true, which is the default.
 */
observes(...args: string[]): this,

/**
 * The `on` extension of Javascript's Function prototype is available
 * when `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Function` is
 * true, which is the default.
 */
on(...args: string[]): this
} 

declare type Ember$ArrayPrototypeExtensions<T> = {} & EmberArrayProtoExtensions<T>


declare interface Ember$StringPrototypeExtensions {
camelize(): string,
decamelize(): string,
classify(): string,
capitalize(): string,
loc(values?: string[]): string,
dasherize(): string,
underscore(): string,
w(): string[]
} 


/**
 * Implements some standard methods for comparing objects. Add this mixin to
 * any class you create that can compare its instances.
 */
declare interface Ember$Comparable {
compare(a: any, b: any): number
} 

declare var Ember$Comparable: EmberMixin<Ember$Comparable>;

declare class Ember$ComputedProperty<Get, Set> mixins EmberObjectComputedNs.default<Get, Set> {}


/**
 * A container used to instantiate and cache objects.
 */
declare class Ember$Container  {

/**
 * Given a fullName, return the corresponding factory. The consumer of the factory
 * is responsible for the destruction of any factory instances, as there is no
 * way for the container to ensure instances are destroyed when it itself is
 * destroyed.
 */
factoryFor(fullName: string, options?: {}): any
}

declare class Ember$ContainerDebugAdapter mixins _ContainerDebugAdapter {}

declare class Ember$Object mixins EmberObjectNs.default {}

declare class Ember$ObjectProxy mixins EmberObjectProxyNs.default {}

declare var Ember$Observable: typeof EmberObservable;

declare var Ember$PromiseProxyMixin: typeof undefined;

declare class Ember$CoreObject mixins EmberCoreObject {}

declare class Ember$DataAdapter mixins EmberDataAdapter {}

declare var Ember$Debug: {
registerDeprecationHandler: typeof undefined,
registerWarnHandler: typeof undefined
};

declare class Ember$EngineInstance mixins EmberEngineInstanceNs.default {}

declare class Ember$Engine mixins EmberEngineNs.default {}


/**
 * A subclass of the JavaScript Error object for use in Ember.
 */
declare var Ember$Error: typeof EmberError;

declare var Ember$Evented: typeof undefined;


/**
 * Inside Ember-Metal, simply uses the methods from `imports.console`.
 * Override this to provide more robust logging functionality.
 */
declare var Ember$Logger: {

/**
 * If the value passed into `Ember.Logger.assert` is not truthy it will throw an error with a stack trace.
 */
assert(test: boolean, message?: string): void,

/**
 * Logs the arguments to the console in blue text.
 */
debug(...args: any[]): void,

/**
 * Prints the arguments to the console with an error icon, red text and a stack trace.
 */
error(...args: any[]): void,

/**
 * Logs the arguments to the console.
 */
info(...args: any[]): void,

/**
 * Logs the arguments to the console.
 */
log(...args: any[]): void,

/**
 * Prints the arguments to the console with a warning icon.
 */
warn(...args: any[]): void
};


/**
 * A Map stores values indexed by keys. Unlike JavaScript's
 * default Objects, the keys of a Map can be any JavaScript
 * object.
 * @deprecated
 */
declare class Ember$Map  {
copy(): Ember$Map;
static create(): Ember$Map;
forEach(callback: (...args: any[]) => any, self: any): void;
get(key: any): any;
has(key: any): boolean;
set(key: any, value: any): void;
length: number
}


/**
 * @deprecated
 */
declare class Ember$MapWithDefault mixins Ember$Map {
copy(): Ember$MapWithDefault;
static create(): Ember$MapWithDefault
}

declare class Ember$Mixin<T, Base> mixins EmberMixin<T, Base> {}


/**
 * A Namespace is an object usually used to contain other objects or methods
 * such as an application or framework. Create a namespace anytime you want
 * to define one of these new containers.
 */
declare class Ember$Namespace mixins Ember$Object {}


/**
 * This class is used internally by Ember and Ember Data.
 * Please do not use it at this time. We plan to clean it up
 * and add many tests soon.
 * @deprecated
 */
declare class Ember$OrderedSet  {
add(obj: any): void;
clear(): void;
copy(): Ember$OrderedSet;
static create(): Ember$OrderedSet;
forEach(fn: (...args: any[]) => any, self: any): void;
has(obj: any): boolean;
isEmpty(): boolean;
toArray(): any[]
}

declare class Ember$Service mixins Ember$Object {}

declare interface Ember$ViewTargetActionSupport {
target: any,
actionContext: any
} 

declare var Ember$ViewTargetActionSupport: Ember$Mixin<Ember$ViewTargetActionSupport>;

declare var Ember$ViewUtils: {
isSimpleClick(event: Event): boolean
};

declare var Ember$RSVP: typeof Rsvp;

declare type RSVP$Promise<T> = Rsvp.RSVP$Promise<T>;

declare class Ember$Application mixins EmberApplicationNs.default {}

declare class Ember$ApplicationInstance mixins EmberApplicationInstanceNs.default {}


      declare var npm$namespace$Test: {
        onInjectHelpers: typeof Test$onInjectHelpers,
promise: typeof Test$promise,
resolve: typeof Test$resolve,
checkWaiters: typeof Test$checkWaiters,
        registerHelper: typeof Test$registerHelper,
unregisterHelper: typeof Test$unregisterHelper,
registerWaiter: typeof Test$registerWaiter,
unregisterWaiter: typeof Test$unregisterWaiter,
registerAsyncHelper: typeof Test$registerAsyncHelper,
adapter: typeof Test$adapter,
      }
declare class Test$Adapter mixins EmberTestAdapter {}

declare var Test$registerHelper: typeof undefined;

declare var Test$unregisterHelper: typeof undefined;

declare var Test$registerWaiter: typeof undefined;

declare var Test$unregisterWaiter: typeof undefined;

declare var Test$registerAsyncHelper: typeof undefined;


/**
 * Used to register callbacks to be fired whenever `App.injectTestHelpers`
 * is called.
 */
declare function Test$onInjectHelpers(callback: (app: Ember$Application) => void): void



/**
 * This returns a thenable tailored for testing.  It catches failed
 * `onSuccess` callbacks and invokes the `Ember.Test.adapter.exception`
 * callback in the last chained then.
 */
declare function Test$promise<T>(
resolver: (
Test$resolve: (value?: T | PromiseLike<T>) => void,
reject: (reason?: any) => void) => void,
label?: string): RSVP$Promise<T>



/**
 * Replacement for `Ember.RSVP.resolve`
 * The only difference is this uses
 * an instance of `Ember.Test.Promise`
 */
declare function Test$resolve<T>(value?: T | PromiseLike<T>, label?: string): RSVP$Promise<T>



/**
 * Iterates through each registered test waiter, and invokes
 * its callback. If any waiter returns false, this method will return
 * true indicating that the waiters have not settled yet.
 */
declare function Test$checkWaiters(): boolean



/**
 * Used to allow ember-testing to communicate with a specific testing
 * framework.
 */
declare var Test$adapter: EmberTestAdapter;


/**
 * This class implements the methods defined by Ember.Test.Adapter for the
 * QUnit testing framework.
 */
declare class Test$QUnitAdapter mixins EmberTestAdapter {}

declare class Test$Promise<T> mixins Rsvp.Test$Promise<T> {
constructor(executor: (
Test$resolve: (value?: T | PromiseLike<T>) => void,
reject: (reason?: any) => void) => void): this
}


      declare var npm$namespace$inject: {
        controller: typeof inject$controller,
        service: typeof inject$service,
      }

/**
 * Creates a property that lazily looks up another controller in the container.
 * Can only be used when defining another controller.
 */
declare function inject$controller(): Ember$ComputedProperty<Ember$Controller>


declare function inject$controller<K: $Keys<ControllerRegistry>>(
name: Handlebars$K): Ember$ComputedProperty<$ElementType<ControllerRegistry, Handlebars$K>>


declare var inject$service: typeof undefined;


      declare var npm$namespace$ENV: {
        
        EXTEND_PROTOTYPES: typeof ENV$EXTEND_PROTOTYPES,
LOG_BINDINGS: typeof ENV$LOG_BINDINGS,
LOG_STACKTRACE_ON_DEPRECATION: typeof ENV$LOG_STACKTRACE_ON_DEPRECATION,
LOG_VERSION: typeof ENV$LOG_VERSION,
MODEL_FACTORY_INJECTIONS: typeof ENV$MODEL_FACTORY_INJECTIONS,
RAISE_ON_DEPRECATION: typeof ENV$RAISE_ON_DEPRECATION,
      }
declare var ENV$EXTEND_PROTOTYPES: {
Ember$Array: boolean,
Function: boolean,
String: boolean
};

declare var ENV$LOG_BINDINGS: boolean;

declare var ENV$LOG_STACKTRACE_ON_DEPRECATION: boolean;

declare var ENV$LOG_VERSION: boolean;

declare var ENV$MODEL_FACTORY_INJECTIONS: boolean;

declare var ENV$RAISE_ON_DEPRECATION: boolean;


      declare var npm$namespace$Handlebars: {
        compile: typeof Handlebars$compile,
precompile: typeof Handlebars$precompile,
registerPartial: typeof Handlebars$registerPartial,
K: typeof Handlebars$K,
createFrame: typeof Handlebars$createFrame,
Exception: typeof Handlebars$Exception,
parse: typeof Handlebars$parse,
print: typeof Handlebars$print,
log: typeof Handlebars$log,
        SafeString: typeof Handlebars$SafeString,
logger: typeof Handlebars$logger,
      }
declare function Handlebars$compile(string: string): (...args: any[]) => any


declare function Handlebars$compile(environment: any, options?: any, context?: any, asObject?: any): any


declare function Handlebars$precompile(string: string, options: any): void


declare class Handlebars$Compiler  {}

declare class Handlebars$JavaScriptCompiler  {}

declare function Handlebars$registerPartial(name: string, str: any): void


declare function Handlebars$K(): any


declare function Handlebars$createFrame(objec: any): any


declare function Handlebars$Exception(message: string): void


declare var Handlebars$SafeString: typeof undefined;

declare function Handlebars$parse(string: string): any


declare function Handlebars$print(ast: any): void


declare var Handlebars$logger: typeof Logger;

declare function Handlebars$log(level: string, str: string): void



      declare var npm$namespace$String: {
        fmt: typeof String$fmt,
        camelize: typeof String$camelize,
capitalize: typeof String$capitalize,
classify: typeof String$classify,
dasherize: typeof String$dasherize,
decamelize: typeof String$decamelize,
htmlSafe: typeof String$htmlSafe,
isHTMLSafe: typeof String$isHTMLSafe,
loc: typeof String$loc,
underscore: typeof String$underscore,
w: typeof String$w,
      }
declare var String$camelize: typeof undefined;

declare var String$capitalize: typeof undefined;

declare var String$classify: typeof undefined;

declare var String$dasherize: typeof undefined;

declare var String$decamelize: typeof undefined;

declare function String$fmt(...args: string[]): string


declare var String$htmlSafe: typeof undefined;

declare var String$isHTMLSafe: typeof undefined;

declare var String$loc: typeof undefined;

declare var String$underscore: typeof undefined;

declare var String$w: typeof undefined;

declare var Ember$computed: typeof undefined;

declare var Ember$run: typeof undefined;

declare var Ember$platform: {
defineProperty: boolean,
hasPropertyAccessors: boolean
};


/**
 * `getEngineParent` retrieves an engine instance's parent instance.
 */
declare function Ember$getEngineParent(engine: Ember$EngineInstance): Ember$EngineInstance


declare var Ember$assert: typeof undefined;

declare var Ember$debug: typeof undefined;

declare var Ember$defineProperty: typeof undefined;

declare var Ember$runInDebug: typeof undefined;

declare var Ember$warn: typeof undefined;

declare var Ember$cacheFor: typeof undefined;

declare var Ember$addListener: typeof undefined;

declare var Ember$removeListener: typeof undefined;

declare var Ember$sendEvent: typeof undefined;

declare var Ember$on: typeof undefined;

declare var Ember$isBlank: typeof undefined;

declare var Ember$isEmpty: typeof undefined;

declare var Ember$isNone: typeof undefined;

declare var Ember$isPresent: typeof undefined;

declare var Ember$merge: typeof undefined;

declare var Ember$aliasMethod: typeof undefined;

declare var Ember$observer: typeof undefined;

declare var Ember$addObserver: typeof undefined;

declare var Ember$removeObserver: typeof undefined;

declare var Ember$get: typeof undefined;

declare var Ember$notifyPropertyChange: typeof undefined;

declare var Ember$getWithDefault: typeof undefined;

declare var Ember$getProperties: typeof undefined;

declare var Ember$setProperties: typeof undefined;

declare var Ember$set: typeof undefined;

declare var Ember$trySet: typeof undefined;

declare var Ember$compare: typeof undefined;


/**
 * Creates a shallow copy of the passed object. A deep copy of the object is
 * returned if the optional `deep` argument is `true`.
 */
declare var Ember$copy: typeof undefined;

declare var Ember$isEqual: typeof undefined;

declare var Ember$typeOf: typeof undefined;


/**
 * Copy properties from a source object to a target object.
 * @deprecated Use Object.assign
 */
declare var Ember$assign: typeof undefined;


/**
 * Polyfill for Object.keys
 * @deprecated Use Object.keys
 */
declare function Ember$keys(o: any): string[]


declare var Ember$guidFor: typeof undefined;

declare var Ember$inspect: typeof undefined;

declare var Ember$tryInvoke: typeof undefined;


/**
 * A function may be assigned to `Ember.onerror` to be called when Ember
 * internals encounter an error. This is useful for specialized error handling
 * and reporting code.
 */
declare function Ember$onerror(error: Ember$Error): void



/**
 * The semantic version
 */
declare var Ember$VERSION: string;


/**
 * Alias for jQuery
 */
declare var Ember$$: JQueryStatic;


/**
 * This property indicates whether or not this application is currently in
 * testing mode. This is set when `setupForTesting` is called on the current
 * application.
 */
declare var Ember$testing: boolean;

declare var Ember$expandProperties: typeof undefined;declare export default typeof Ember
declare module 'htmlbars-inline-precompile' {
        declare interface TemplateFactory {
__htmlbars_inline_precompile_template_factory: any
} 
	declare export default function hbs(tagged: TemplateStringsArray): TemplateFactory

    }
