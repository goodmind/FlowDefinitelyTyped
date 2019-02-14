import {
  Objectify,
  Fix,
  UnwrapComputedPropertySetters,
  UnwrapComputedPropertySetter,
  UnwrapComputedPropertyGetters,
  UnwrapComputedPropertyGetter,
  EmberClassArguments,
  EmberClassConstructor,
  EmberInstanceArguments,
  ComputedPropertyCallback,
  ObserverMethod
} from "@ember/object/-private/types";
import * as HandlebarsNamespace from "handlebars";
import Rsvp from "rsvp";
import { TemplateFactory } from "htmlbars-inline-precompile";
import * as EmberServiceNs from "@ember/service";
import * as EmberControllerNs from "@ember/controller";
import * as EmberStringNs from "@ember/string";
import * as EmberPolyfillsNs from "@ember/polyfills";
import * as EmberUtilsNs from "@ember/utils";
import * as EmberRunloopNs from "@ember/runloop";
import * as EmberObjectNs from "@ember/object";
import * as EmberObjectObserversNs from "@ember/object/observers";
import EmberMixin from "@ember/object/mixin";
import * as EmberObjectProxyNs from "@ember/object/proxy";
import * as EmberObjectPromiseProxyNs from "@ember/object/promise-proxy-mixin";
import * as EmberObjectInternalsNs from "@ember/object/internals";
import * as EmberObjectComputedNs from "@ember/object/computed";
import * as EmberObjectEventedNs from "@ember/object/evented";
import * as EmberObjectEventsNs from "@ember/object/events";
import * as EmberDebugNs from "@ember/debug";
import _ContainerDebugAdapter from "@ember/debug/container-debug-adapter";
import EmberDataAdapter from "@ember/debug/data-adapter";
import * as EmberEngineNs from "@ember/engine";
import * as EmberEngineInstanceNs from "@ember/engine/instance";
import _ContainerProxyMixin from "@ember/engine/-private/container-proxy-mixin";
import _RegistryProxyMixin from "@ember/engine/-private/registry-proxy-mixin";
import EmberCoreObject from "@ember/object/core";
import * as EmberApplicationNs from "@ember/application";
import * as EmberApplicationInstanceNs from "@ember/application/instance";
import * as EmberApplicationDeprecateNs from "@ember/application/deprecations";
import * as EmberTestNs from "@ember/test";
import EmberObservable from "@ember/object/observable";
import * as EmberArrayNs from "@ember/array";
import EmberMutableArray from "@ember/array/mutable";
import EmberNativeArray from "@ember/array/-private/native-array";
import EmberArrayProxy from "@ember/array/proxy";
import EmberEnumerable from "@ember/array/-private/enumerable";
import EmberMutableEnumerable from "@ember/array/-private/mutable-enumerable";
import EmberArrayProtoExtensions from "@ember/array/types/prototype-extensions";
import { RunMethod } from "@ember/runloop/-private/types";
import EmberError from "@ember/error";
declare type EmberArray<T> = EmberArrayNs.default<T>;
import EmberActionHandler from "@ember/object/-private/action-handler";
import EmberComponent from "@ember/component";
import EmberTextArea from "@ember/component/text-area";
import EmberTextField from "@ember/component/text-field";
import EmberCheckbox from "@ember/component/checkbox";
import EmberHelper from "@ember/component/helper";
import EmberRoutingRouter from "@ember/routing/router";
import EmberRoutingRoute from "@ember/routing/route";
import EmberRoutingTransition from "@ember/routing/-private/transition";
import EmberRoutingRouterService from "@ember/routing/router-service";
import EmberRoutingHashLocation from "@ember/routing/hash-location";
import EmberRoutingAutoLocation from "@ember/routing/auto-location";
import EmberRoutingHistoryLocation from "@ember/routing/history-location";
import EmberRoutingNoneLocation from "@ember/routing/none-location";
import EmberRoutingLinkComponent from "@ember/routing/link-component";
import EmberDefaultResolver from "@ember/application/-private/default-resolver";
import EmberEventDispatcher from "@ember/application/-private/event-dispatcher";
import EmberRegistry from "@ember/application/-private/registry";
import EmberResolver from "@ember/application/resolver";
import EmberTestAdapter from "@ember/test/adapter";

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

  ArrayProxy: typeof Ember$ArrayProxy,
  Router: typeof Ember$Router,
  Route: typeof Ember$Route,
  Controller: typeof Ember$Controller,
  Component: typeof Ember$Component,
  TextArea: typeof Ember$TextArea,
  TextField: typeof Ember$TextField,
  Checkbox: typeof Ember$Checkbox,
  Helper: typeof Ember$Helper,
  HashLocation: typeof Ember$HashLocation,
  NoneLocation: typeof Ember$NoneLocation,
  HistoryLocation: typeof Ember$HistoryLocation,
  LinkComponent: typeof Ember$LinkComponent,
  DefaultResolver: typeof Ember$DefaultResolver,
  Resolver: typeof Ember$Resolver,
  EventDispatcher: typeof Ember$EventDispatcher,
  Registry: typeof Ember$Registry,
  ComputedProperty: typeof Ember$ComputedProperty,
  Container: typeof Ember$Container,
  ContainerDebugAdapter: typeof Ember$ContainerDebugAdapter,
  Object: typeof Ember$Object,
  ObjectProxy: typeof Ember$ObjectProxy,
  CoreObject: typeof Ember$CoreObject,
  DataAdapter: typeof Ember$DataAdapter,
  EngineInstance: typeof Ember$EngineInstance,
  Engine: typeof Ember$Engine,
  Map: typeof Ember$Map,
  MapWithDefault: typeof Ember$MapWithDefault,
  Mixin: typeof Ember$Mixin,
  Namespace: typeof Ember$Namespace,
  OrderedSet: typeof Ember$OrderedSet,
  Service: typeof Ember$Service,
  Application: typeof Ember$Application,
  ApplicationInstance: typeof Ember$ApplicationInstance,
  Test: typeof npm$namespace$Ember$Test,
  inject: typeof npm$namespace$Ember$inject,
  ENV: typeof npm$namespace$Ember$ENV,
  Handlebars: typeof npm$namespace$Ember$Handlebars,
  String: typeof npm$namespace$Ember$String
};
declare var Ember$A: typeof EmberArrayNs.A;

declare var Ember$isArray: typeof EmberArrayNs.isArray;

declare type Ember$Enumerable<T> = EmberEnumerable<T>;

declare var Ember$Enumerable: typeof EmberEnumerable;

declare class Ember$ArrayProxy<T> mixins EmberArrayProxy<T> {}

declare type Ember$Array<T> = EmberArray<T>;

declare var Ember$Array: typeof EmberArrayNs.default;

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

declare var Ember$deprecateFunc: typeof EmberApplicationDeprecateNs.deprecateFunc;

declare var Ember$deprecate: typeof EmberApplicationDeprecateNs.deprecate;

declare var Ember$getOwner: typeof EmberApplicationNs.getOwner;

declare var Ember$setOwner: typeof EmberApplicationNs.setOwner;

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
  property(...args: string[]): Ember$ComputedProperty<any>;

  /**
   * The `observes` extension of Javascript's Function prototype is available
   * when `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Function` is
   * true, which is the default.
   */
  observes(...args: string[]): this;

  /**
   * The `on` extension of Javascript's Function prototype is available
   * when `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Function` is
   * true, which is the default.
   */
  on(...args: string[]): this;
}

declare type Ember$ArrayPrototypeExtensions<
  T
> = {} & EmberArrayProtoExtensions<T>;

declare interface Ember$StringPrototypeExtensions {
  camelize(): string;
  decamelize(): string;
  classify(): string;
  capitalize(): string;
  loc(values?: string[]): string;
  dasherize(): string;
  underscore(): string;
  w(): string[];
}

/**
 * Implements some standard methods for comparing objects. Add this mixin to
 * any class you create that can compare its instances.
 */
declare interface Ember$Comparable {
  compare(a: any, b: any): number;
}

declare var Ember$Comparable: EmberMixin<Ember$Comparable>;

declare class Ember$ComputedProperty<Get, Set = Get>
  mixins EmberObjectComputedNs.default<Get, Set> {}

/**
 * A container used to instantiate and cache objects.
 */
declare class Ember$Container {
  /**
   * Given a fullName, return the corresponding factory. The consumer of the factory
   * is responsible for the destruction of any factory instances, as there is no
   * way for the container to ensure instances are destroyed when it itself is
   * destroyed.
   */
  factoryFor(fullName: string, options?: {}): any;
}

declare class Ember$ContainerDebugAdapter mixins _ContainerDebugAdapter {}

declare class Ember$Object mixins EmberObjectNs.default {}

declare class Ember$ObjectProxy mixins EmberObjectProxyNs.default {}

declare var Ember$Observable: typeof EmberObservable;

declare var Ember$PromiseProxyMixin: typeof EmberObjectPromiseProxyNs.default;

declare class Ember$CoreObject mixins EmberCoreObject {}

declare class Ember$DataAdapter mixins EmberDataAdapter {}

declare var Ember$Debug: {
  registerDeprecationHandler: typeof EmberDebugNs.registerDeprecationHandler,
  registerWarnHandler: typeof EmberDebugNs.registerWarnHandler
};

declare class Ember$EngineInstance mixins EmberEngineInstanceNs.default {}

declare class Ember$Engine mixins EmberEngineNs.default {}

/**
 * A subclass of the JavaScript Error object for use in Ember.
 */
declare var Ember$Error: typeof EmberError;

declare var Ember$Evented: typeof EmberObjectEventedNs.default;

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
declare class Ember$Map {
  copy(): Ember$Map;
  static create(): Ember$Map;
  forEach(callback: (...args: any[]) => any, self: any): void;
  get(key: any): any;
  has(key: any): boolean;
  set(key: any, value: any): void;
  length: number;
}

/**
 * @deprecated
 */
declare class Ember$MapWithDefault mixins Map {
  copy(): Ember$MapWithDefault;
  static create(): Ember$MapWithDefault;
}

declare class Ember$Mixin<T, Base = EmberObjectNs.default>
  mixins EmberMixin<T, Base> {}

/**
 * A Namespace is an object usually used to contain other objects or methods
 * such as an application or framework. Create a namespace anytime you want
 * to define one of these new containers.
 */
declare class Ember$Namespace mixins Object {}

/**
 * This class is used internally by Ember and Ember Data.
 * Please do not use it at this time. We plan to clean it up
 * and add many tests soon.
 * @deprecated
 */
declare class Ember$OrderedSet {
  add(obj: any): void;
  clear(): void;
  copy(): Ember$OrderedSet;
  static create(): Ember$OrderedSet;
  forEach(fn: (...args: any[]) => any, self: any): void;
  has(obj: any): boolean;
  isEmpty(): boolean;
  toArray(): any[];
}

declare class Ember$Service mixins Object {}

declare interface Ember$ViewTargetActionSupport {
  target: any;
  actionContext: any;
}

declare var Ember$ViewTargetActionSupport: Ember$Mixin<Ember$ViewTargetActionSupport>;

declare var Ember$ViewUtils: {
  isSimpleClick(event: Event): boolean
};

declare var Ember$RSVP: typeof Rsvp;

declare type Ember$RSVP$Promise<T> = Rsvp.Promise<T>;

declare class Ember$Application mixins EmberApplicationNs.default {}

declare class Ember$ApplicationInstance
  mixins EmberApplicationInstanceNs.default {}

declare var npm$namespace$Ember$Test: {
  onInjectHelpers: typeof Ember$Test$onInjectHelpers,
  promise: typeof Ember$Test$promise,
  resolve: typeof Ember$Test$resolve,
  checkWaiters: typeof Ember$Test$checkWaiters,
  registerHelper: typeof Ember$Test$registerHelper,
  unregisterHelper: typeof Ember$Test$unregisterHelper,
  registerWaiter: typeof Ember$Test$registerWaiter,
  unregisterWaiter: typeof Ember$Test$unregisterWaiter,
  registerAsyncHelper: typeof Ember$Test$registerAsyncHelper,
  adapter: typeof Ember$Test$adapter,

  Adapter: typeof Ember$Test$Adapter,
  QUnitAdapter: typeof Ember$Test$QUnitAdapter,
  Promise: typeof Ember$Test$Promise
};
declare class Ember$Test$Adapter mixins EmberTestAdapter {}

declare var Ember$Test$registerHelper: typeof EmberTestNs.registerHelper;

declare var Ember$Test$unregisterHelper: typeof EmberTestNs.unregisterHelper;

declare var Ember$Test$registerWaiter: typeof EmberTestNs.registerWaiter;

declare var Ember$Test$unregisterWaiter: typeof EmberTestNs.unregisterWaiter;

declare var Ember$Test$registerAsyncHelper: typeof EmberTestNs.registerAsyncHelper;

/**
 * Used to register callbacks to be fired whenever `App.injectTestHelpers`
 * is called.
 */
declare function Ember$Test$onInjectHelpers(
  callback: (app: Ember$Application) => void
): void;

/**
 * This returns a thenable tailored for testing.  It catches failed
 * `onSuccess` callbacks and invokes the `Ember.Test.adapter.exception`
 * callback in the last chained then.
 */
declare function Ember$Test$promise<T>(
  resolver: (
    resolve: (value?: T | PromiseLike<T>) => void,
    reject: (reason?: any) => void
  ) => void,
  label?: string
): Ember$RSVP$Promise<T>;

/**
 * Replacement for `Ember.RSVP.resolve`
 * The only difference is this uses
 * an instance of `Ember.Test.Promise`
 */
declare function Ember$Test$resolve<T>(
  value?: T | PromiseLike<T>,
  label?: string
): Ember$RSVP$Promise<T>;

/**
 * Iterates through each registered test waiter, and invokes
 * its callback. If any waiter returns false, this method will return
 * true indicating that the waiters have not settled yet.
 */
declare function Ember$Test$checkWaiters(): boolean;

/**
 * Used to allow ember-testing to communicate with a specific testing
 * framework.
 */
declare var Ember$Test$adapter: EmberTestAdapter;

/**
 * This class implements the methods defined by Ember.Test.Adapter for the
 * QUnit testing framework.
 */
declare class Ember$Test$QUnitAdapter mixins EmberTestAdapter {}

declare class Ember$Test$Promise<T> mixins Rsvp.Promise<T> {
  constructor(
    executor: (
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): this;
}

declare var npm$namespace$Ember$inject: {
  controller: typeof Ember$inject$controller,
  service: typeof Ember$inject$service
};

/**
 * Creates a property that lazily looks up another controller in the container.
 * Can only be used when defining another controller.
 */
declare function Ember$inject$controller(): Ember$ComputedProperty<Ember$Controller>;

declare function Ember$inject$controller<K: $Keys<ControllerRegistry>>(
  name: Handlebars$K
): Ember$ComputedProperty<$ElementType<ControllerRegistry, Handlebars$K>>;

declare var Ember$inject$service: typeof EmberServiceNs.inject;

declare var npm$namespace$Ember$ENV: {
  EXTEND_PROTOTYPES: typeof Ember$ENV$EXTEND_PROTOTYPES,
  LOG_BINDINGS: typeof Ember$ENV$LOG_BINDINGS,
  LOG_STACKTRACE_ON_DEPRECATION: typeof Ember$ENV$LOG_STACKTRACE_ON_DEPRECATION,
  LOG_VERSION: typeof Ember$ENV$LOG_VERSION,
  MODEL_FACTORY_INJECTIONS: typeof Ember$ENV$MODEL_FACTORY_INJECTIONS,
  RAISE_ON_DEPRECATION: typeof Ember$ENV$RAISE_ON_DEPRECATION
};
declare var Ember$ENV$EXTEND_PROTOTYPES: {
  Array: boolean,
  Function: boolean,
  String: boolean
};

declare var Ember$ENV$LOG_BINDINGS: boolean;

declare var Ember$ENV$LOG_STACKTRACE_ON_DEPRECATION: boolean;

declare var Ember$ENV$LOG_VERSION: boolean;

declare var Ember$ENV$MODEL_FACTORY_INJECTIONS: boolean;

declare var Ember$ENV$RAISE_ON_DEPRECATION: boolean;

declare var npm$namespace$Ember$Handlebars: {
  compile: typeof Ember$Handlebars$compile,
  precompile: typeof Ember$Handlebars$precompile,
  registerPartial: typeof Ember$Handlebars$registerPartial,
  K: typeof Ember$Handlebars$K,
  createFrame: typeof Ember$Handlebars$createFrame,
  Exception: typeof Ember$Handlebars$Exception,
  parse: typeof Ember$Handlebars$parse,
  print: typeof Ember$Handlebars$print,
  log: typeof Ember$Handlebars$log,
  SafeString: typeof Ember$Handlebars$SafeString,
  logger: typeof Ember$Handlebars$logger,

  Compiler: typeof Ember$Handlebars$Compiler,
  JavaScriptCompiler: typeof Ember$Handlebars$JavaScriptCompiler
};
declare function Ember$Handlebars$compile(
  string: string
): (...args: any[]) => any;

declare function Ember$Handlebars$compile(
  environment: any,
  options?: any,
  context?: any,
  asObject?: any
): any;

declare function Ember$Handlebars$precompile(
  string: string,
  options: any
): void;

declare class Ember$Handlebars$Compiler {}

declare class Ember$Handlebars$JavaScriptCompiler {}

declare function Ember$Handlebars$registerPartial(name: string, str: any): void;

declare function Ember$Handlebars$K(): any;

declare function Ember$Handlebars$createFrame(objec: any): any;

declare function Ember$Handlebars$Exception(message: string): void;

declare var Ember$Handlebars$SafeString: typeof HandlebarsNamespace.SafeString;

declare function Ember$Handlebars$parse(string: string): any;

declare function Ember$Handlebars$print(ast: any): void;

declare var Ember$Handlebars$logger: typeof Logger;

declare function Ember$Handlebars$log(level: string, str: string): void;

declare var npm$namespace$Ember$String: {
  fmt: typeof Ember$String$fmt,
  camelize: typeof Ember$String$camelize,
  capitalize: typeof Ember$String$capitalize,
  classify: typeof Ember$String$classify,
  dasherize: typeof Ember$String$dasherize,
  decamelize: typeof Ember$String$decamelize,
  htmlSafe: typeof Ember$String$htmlSafe,
  isHTMLSafe: typeof Ember$String$isHTMLSafe,
  loc: typeof Ember$String$loc,
  underscore: typeof Ember$String$underscore,
  w: typeof Ember$String$w
};
declare var Ember$String$camelize: typeof EmberStringNs.camelize;

declare var Ember$String$capitalize: typeof EmberStringNs.capitalize;

declare var Ember$String$classify: typeof EmberStringNs.classify;

declare var Ember$String$dasherize: typeof EmberStringNs.dasherize;

declare var Ember$String$decamelize: typeof EmberStringNs.decamelize;

declare function Ember$String$fmt(...args: string[]): string;

declare var Ember$String$htmlSafe: typeof EmberStringNs.htmlSafe;

declare var Ember$String$isHTMLSafe: typeof EmberStringNs.isHTMLSafe;

declare var Ember$String$loc: typeof EmberStringNs.loc;

declare var Ember$String$underscore: typeof EmberStringNs.underscore;

declare var Ember$String$w: typeof EmberStringNs.w;

declare var Ember$computed: typeof EmberObjectNs.computed;

declare var Ember$run: typeof EmberRunloopNs.run;

declare var Ember$platform: {
  defineProperty: boolean,
  hasPropertyAccessors: boolean
};

/**
 * `getEngineParent` retrieves an engine instance's parent instance.
 */
declare function Ember$getEngineParent(
  engine: Ember$EngineInstance
): Ember$EngineInstance;

declare var Ember$assert: typeof EmberDebugNs.assert;

declare var Ember$debug: typeof EmberDebugNs.debug;

declare var Ember$defineProperty: typeof EmberObjectNs.defineProperty;

declare var Ember$runInDebug: typeof EmberDebugNs.runInDebug;

declare var Ember$warn: typeof EmberDebugNs.warn;

declare var Ember$cacheFor: typeof EmberObjectInternalsNs.cacheFor;

declare var Ember$addListener: typeof EmberObjectEventsNs.addListener;

declare var Ember$removeListener: typeof EmberObjectEventsNs.removeListener;

declare var Ember$sendEvent: typeof EmberObjectEventsNs.sendEvent;

declare var Ember$on: typeof EmberObjectEventedNs.on;

declare var Ember$isBlank: typeof EmberUtilsNs.isBlank;

declare var Ember$isEmpty: typeof EmberUtilsNs.isEmpty;

declare var Ember$isNone: typeof EmberUtilsNs.isNone;

declare var Ember$isPresent: typeof EmberUtilsNs.isPresent;

declare var Ember$merge: typeof EmberPolyfillsNs.merge;

declare var Ember$aliasMethod: typeof EmberObjectNs.aliasMethod;

declare var Ember$observer: typeof EmberObjectNs.observer;

declare var Ember$addObserver: typeof EmberObjectObserversNs.addObserver;

declare var Ember$removeObserver: typeof EmberObjectObserversNs.removeObserver;

declare var Ember$get: typeof EmberObjectNs.get;

declare var Ember$notifyPropertyChange: typeof EmberObjectNs.notifyPropertyChange;

declare var Ember$getWithDefault: typeof EmberObjectNs.getWithDefault;

declare var Ember$getProperties: typeof EmberObjectNs.getProperties;

declare var Ember$setProperties: typeof EmberObjectNs.setProperties;

declare var Ember$set: typeof EmberObjectNs.set;

declare var Ember$trySet: typeof EmberObjectNs.trySet;

declare var Ember$compare: typeof EmberUtilsNs.compare;

/**
 * Creates a shallow copy of the passed object. A deep copy of the object is
 * returned if the optional `deep` argument is `true`.
 */
declare var Ember$copy: typeof EmberObjectInternalsNs.copy;

declare var Ember$isEqual: typeof EmberUtilsNs.isEqual;

declare var Ember$typeOf: typeof EmberUtilsNs.typeOf;

/**
 * Copy properties from a source object to a target object.
 * @deprecated Use Object.assign
 */
declare var Ember$assign: typeof EmberPolyfillsNs.assign;

/**
 * Polyfill for Object.keys
 * @deprecated Use Object.keys
 */
declare function Ember$keys(o: any): string[];

declare var Ember$guidFor: typeof EmberObjectInternalsNs.guidFor;

declare var Ember$inspect: typeof EmberDebugNs.inspect;

declare var Ember$tryInvoke: typeof EmberUtilsNs.tryInvoke;

/**
 * A function may be assigned to `Ember.onerror` to be called when Ember
 * internals encounter an error. This is useful for specialized error handling
 * and reporting code.
 */
declare function Ember$onerror(error: Ember$Error): void;

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

declare var Ember$expandProperties: typeof EmberObjectComputedNs.expandProperties;
declare export default typeof Ember;
declare module "htmlbars-inline-precompile" {
  declare interface TemplateFactory {
    __htmlbars_inline_precompile_template_factory: any;
  }
  declare export default function hbs(
    tagged: TemplateStringsArray
  ): TemplateFactory;
}
