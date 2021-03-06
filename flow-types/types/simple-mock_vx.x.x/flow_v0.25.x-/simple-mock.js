declare module "simple-mock" {
  declare type Simple$Fn<T> = {
    (...args: any[]): T
  };

  declare export interface Simple$Static {
    /**
     * Restores all current mocks.
     */
    restore(): void;

    /**
     * Use this if you need to restore only a single mock value or function on an object.
     */
    restore(obj: any, key: string): void;

    /**
     * Wraps fn in a spy and sets this on the obj, restorable with all mocks.
     */
    mock<T>(obj: any, key: string, fn: Simple$Fn<T>): Simple$Stub<T>;

    /**
     * Sets the value on this object. E.g. mock(config, 'title', 'test') is the same as config.title = 'test', but restorable with all mocks.
     */
    mock<T>(obj: any, key: string, mockValue: T): T;

    /**
     * If obj has already has this function, it is wrapped in a spy. The resulting spy can be turned into a stub by further configuration. Restores with all mocks.
     */
    mock(obj: any, key: string): Simple$Stub<any>;
    mock<T>(obj: any, key: string): Simple$Stub<T>;

    /**
     * Wraps fn in a spy.
     */
    spy<T>(fn: Simple$Fn<T>): Simple$Spy<T>;

    /**
     * Wraps fn in a spy.
     */
    mock<T>(fn: Simple$Fn<T>): Simple$Spy<T>;

    /**
     * Returns a stub function that is also a spy.
     */
    stub(): Simple$Stub<any>;
    stub<T>(): Simple$Stub<T>;

    /**
     * Returns a stub function that is also a spy.
     */
    mock(): Simple$Stub<any>;
    mock<T>(): Simple$Stub<T>;
    Promise?: PromiseConstructorLike;
  }

  declare interface Simple$Calls<T> {
    /**
     * an array of arguments received on the call
     */
    args: any[];

    /**
     * first argument
     */
    arg: any;

    /**
     * the context (this) of the call
     */
    context: any;

    /**
     * the value returned by the wrapped function
     */
    returned: T;

    /**
     * the error thrown by the wrapped function
     */
    threw: Error;

    /**
     * autoincrementing number, can be compared to evaluate call order
     */
    k: number;
  }

  declare export interface Simple$Spy<T> {
    (...args: any[]): T;
    called: boolean;

    /**
     * Number of times the function was called.
     */
    callCount: number;
    calls: Simple$Calls<T>[];
    firstCall: Simple$Calls<T>;

    /**
     * The last call object. (This is often also the first and only call.)
     */
    lastCall: Simple$Calls<T>;

    /**
     * Resets all counts and properties to the original state.
     */
    reset(): void;
  }

  declare export interface Simple$Action<T> {
    /**
     * arguments to call back with
     */
    cbArgs: ArrayLike<any>;
    returnValue: T;
    throwError: Error;
  }

  declare export type Simple$Stub<T> = {
    /**
     * Configures this stub to call this function, returning its return value.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callFn<R>(fn: Simple$Fn<R>): Simple$Stub<R>,

    /**
     * Configures this stub to call the original, unstubbed function, returning its return value.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callOriginal(): Simple$Stub<T>,

    /**
     * Configures this stub to return with this value.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    returnWith<R>(val: R): Simple$Stub<R>,

    /**
     * Configures this stub to throw this error.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    throwWith(err: Error): Simple$Stub<T>,

    /**
     * Configures this stub to call back with the arguments passed. It will use either the last argument as callback, or the argument at cbArgumentIndex.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callback(...args: any[]): Simple$Stub<T>,

    /**
     * Configures this stub to call back with the arguments passed. It will use either the last argument as callback, or the argument at cbArgumentIndex.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callbackWith(...args: any[]): Simple$Stub<T>,

    /**
     * Configures this stub to call back with the arguments passed. It will use either the last argument as callback, or the argument at cbArgumentIndex.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callbackAtIndex(cbArgumentIndex: number, ...args: any[]): Simple$Stub<T>,

    /**
     * Configures this stub to call back with the arguments passed. It will use either the last argument as callback, or the argument at cbArgumentIndex.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callbackArgWith(cbArgumentIndex: number, ...args: any[]): Simple$Stub<T>,

    /**
     * Configures the last configured function or callback to be called in this context, i.e. this will be obj.
     */
    inThisContext(obj: any): Simple$Stub<T>,

    /**
     * Configures the stub to return a Promise (where available] resolving to this value. Same as stub.returnWith(Promise.resolve(val)).
     * You can use a custom Promise-conforming library, i.e. simple.Promise = require('bluebird') or simple.Promise = $q.
     */
    resolveWith<V>(val: V): Simple$Stub<PromiseLike<V>>,

    /**
     * Configures the stub to return a Promise (where available) rejecting with this error. Same as stub.returnWith(Promise.reject(val)).
     * You can use a custom Promise-conforming library, i.e. simple.Promise = require('bluebird') or simple.Promise = $q.
     */
    rejectWith<V>(val: V): Simple$Stub<PromiseLike<V>>,

    /**
     * Configures this stub to use the specified array of actions.
     */
    withActions(actions?: Simple$Action<T>[]): Simple$Stub<T>,

    /**
     * Configures the stub to enable looping.
     */
    withLoop(): Simple$Stub<T>,

    /**
     * Configures the stub to disable looping.
     */
    noLoop(): Simple$Stub<T>,

    /**
     * An array of behaviours.
     * Note: modifying this array directly is not supported, rather use stub.withActions(actions) if you need to add actions.
     */
    actions: Simple$Action<T>[],

    /**
     * setting whether the queue of actions for this stub should repeat.
     * @default true
     */
    loop: boolean
  } & Simple$Spy<T>;

  declare var Simple: Simple$Simple$Static;
  declare module.exports: typeof Simple;
}
