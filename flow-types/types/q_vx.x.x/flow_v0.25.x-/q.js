declare var npm$namespace$Q: {
  defer: typeof Q$defer,
  resolve: typeof Q$resolve,
  reject: typeof Q$reject,
  when: typeof Q$when,
  fbind: typeof Q$fbind,
  fcall: typeof Q$fcall,
  invoke: typeof Q$invoke,
  send: typeof Q$send,
  mcall: typeof Q$mcall,
  nfbind: typeof Q$nfbind,
  denodeify: typeof Q$denodeify,
  nbind: typeof Q$nbind,
  nfapply: typeof Q$nfapply,
  nfcall: typeof Q$nfcall,
  npost: typeof Q$npost,
  ninvoke: typeof Q$ninvoke,
  nsend: typeof Q$nsend,
  all: typeof Q$all,
  race: typeof Q$race,
  allSettled: typeof Q$allSettled,
  allResolved: typeof Q$allResolved,
  spread: typeof Q$spread,
  timeout: typeof Q$timeout,
  delay: typeof Q$delay,
  isFulfilled: typeof Q$isFulfilled,
  isRejected: typeof Q$isRejected,
  isPending: typeof Q$isPending,
  Promise: typeof Q$Promise,
  promised: typeof Q$promised,
  isPromise: typeof Q$isPromise,
  isPromiseAlike: typeof Q$isPromiseAlike,
  nearer: typeof Q$nearer,
  async: typeof Q$async,
  nextTick: typeof Q$nextTick,
  noConflict: typeof Q$noConflict,
  onerror: typeof Q$onerror,
  longStackSupport: typeof Q$longStackSupport
};
export type Q$IWhenable<T> = PromiseLike<T> | T;

export type Q$IPromise<T> = PromiseLike<T>;

export interface Q$Deferred<T> {
  promise: Q$Promise<T>;

  /**
   * Calling resolve with a pending promise causes promise to wait on the passed promise, becoming fulfilled with its
   * fulfillment value or rejected with its rejection reason (or staying pending forever, if the passed promise does).
   * Calling resolve with a rejected promise causes promise to be rejected with the passed promise's rejection reason.
   * Calling resolve with a fulfilled promise causes promise to be fulfilled with the passed promise's fulfillment value.
   * Calling resolve with a non-promise value causes promise to be fulfilled with that value.
   */
  Q$resolve(value?: Q$IWhenable<T>): void;

  /**
   * Calling reject with a reason causes promise to be rejected with that reason.
   */
  Q$reject(reason?: any): void;

  /**
   * Calling notify with a value causes promise to be notified of progress with that value. That is, any onProgress
   * handlers registered with promise or promises derived from promise will be called with the progress value.
   */
  notify(value: any): void;

  /**
   * Returns a function suitable for passing to a Node.js API. That is, it has a signature (err, result) and will
   * reject deferred.promise with err if err is given, or fulfill it with result if that is given.
   */
  makeNodeResolver(): (reason: any, value: T) => void;
}

export interface Q$Promise<T> {
  /**
   * The then method from the Promises/A+ specification, with an additional progress handler.
   */
  then<U>(
    onFulfill?: ((value: T) => Q$IWhenable<U>) | null,
    onReject?: ((error: any) => Q$IWhenable<U>) | null,
    onProgress?: ((progress: any) => any) | null
  ): Q$Promise<U>;
  then<U, V>(
    onFulfill?: ((value: T) => Q$IWhenable<U>) | null,
    onReject?: ((error: any) => Q$IWhenable<V>) | null,
    onProgress?: ((progress: any) => any) | null
  ): Q$Promise<U | V>;

  /**
   * Like a finally clause, allows you to observe either the fulfillment or rejection of a promise, but to do so
   * without modifying the final value. This is useful for collecting resources regardless of whether a job succeeded,
   * like closing a database connection, shutting a server down, or deleting an unneeded key from an object.
   * finally returns a promise, which will become resolved with the same fulfillment value or rejection reason
   * as promise. However, if callback returns a promise, the resolution of the returned promise will be delayed
   * until the promise returned from callback is finished. Furthermore, if the returned promise rejects, that
   * rejection will be passed down the chain instead of the previous result.
   */
  finally(finallyCallback: () => any): Q$Promise<T>;

  /**
   * Alias for finally() (for non-ES5 browsers)
   */
  fin(finallyCallback: () => any): Q$Promise<T>;

  /**
   * Like then, but "spreads" the array into a variadic fulfillment handler. If any of the promises in the array are
   * rejected, instead calls onRejected with the first rejected promise's rejection reason.
   * This is especially useful in conjunction with all
   */
  Q$spread<U>(
    onFulfill: (...args: any[]) => Q$IWhenable<U>,
    onReject?: (reason: any) => Q$IWhenable<U>
  ): Q$Promise<U>;

  /**
   * A sugar method, equivalent to promise.then(undefined, onRejected).
   */
  catch<U>(onRejected: (reason: any) => Q$IWhenable<U>): Q$Promise<U>;

  /**
   * Alias for catch() (for non-ES5 browsers)
   */
  fail<U>(onRejected: (reason: any) => Q$IWhenable<U>): Q$Promise<U>;

  /**
   * A sugar method, equivalent to promise.then(undefined, undefined, onProgress).
   */
  progress(onProgress: (progress: any) => any): Q$Promise<T>;

  /**
   * Much like then, but with different behavior around unhandled rejection. If there is an unhandled rejection,
   * either because promise is rejected and no onRejected callback was provided, or because onFulfilled or onRejected
   * threw an error or returned a rejected promise, the resulting rejection reason is thrown as an exception in a
   * future turn of the event loop.
   * This method should be used to terminate chains of promises that will not be passed elsewhere. Since exceptions
   * thrown in then callbacks are consumed and transformed into rejections, exceptions at the end of the chain are
   * easy to accidentally, silently ignore. By arranging for the exception to be thrown in a future turn of the
   * event loop, so that it won't be caught, it causes an onerror event on the browser window, or an uncaughtException
   * event on Node.js's process object.
   * Exceptions thrown by done will have long stack traces, if Q.longStackSupport is set to true. If Q.onerror is set,
   * exceptions will be delivered there instead of thrown in a future turn.
   * The Golden Rule of done vs. then usage is: either return your promise to someone else, or if the chain ends
   * with you, call done to terminate it. Terminating with catch is not sufficient because the catch handler may
   * itself throw an error.
   */
  done(
    onFulfilled?: ((value: T) => any) | null,
    onRejected?: ((reason: any) => any) | null,
    onProgress?: ((progress: any) => any) | null
  ): void;

  /**
   * If callback is a function, assumes it's a Node.js-style callback, and calls it as either callback(rejectionReason)
   * when/if promise becomes rejected, or as callback(null, fulfillmentValue) when/if promise becomes fulfilled.
   * If callback is not a function, simply returns promise.
   */
  nodeify(callback: (reason: any, value: any) => void): Q$Promise<T>;

  /**
   * Returns a promise to get the named property of an object. Essentially equivalent to
   * @example promise.then(function (o) { return o[propertyName]; });
   */
  get<U>(propertyName: string): Q$Promise<U>;
  set<U>(propertyName: string, value: any): Q$Promise<U>;
  delete<U>(propertyName: string): Q$Promise<U>;

  /**
   * Returns a promise for the result of calling the named method of an object with the given array of arguments.
   * The object itself is this in the function, just like a synchronous method call. Essentially equivalent to
   * @example promise.then(function (o) { return o[methodName].apply(o, args); });
   */
  post<U>(methodName: string, args: any[]): Q$Promise<U>;

  /**
   * Returns a promise for the result of calling the named method of an object with the given variadic arguments.
   * The object itself is this in the function, just like a synchronous method call.
   */
  Q$invoke<U>(methodName: string, ...args: any[]): Q$Promise<U>;

  /**
   * Returns a promise for an array of the property names of an object. Essentially equivalent to
   * @example promise.then(function (o) { return Object.keys(o); });
   */
  keys(): Q$Promise<string[]>;

  /**
 * Returns a promise for the result of calling a function, with the given array of arguments. Essentially equivalent to
 * @example promise.then(function (f) {
return f.apply(undefined, args);
});
 */
  fapply<U>(args: any[]): Q$Promise<U>;

  /**
 * Returns a promise for the result of calling a function, with the given variadic arguments. Has the same return
 * value/thrown exception translation as explained above for fbind.
 * In its static form, it is aliased as Q.try, since it has semantics similar to a try block (but handling both
 * synchronous exceptions and asynchronous rejections). This allows code like
 * @example Q.try(function () {
if (!isConnectedToCloud()) {
throw new Error("The cloud is down!");
}
return syncToCloud();
})
.catch(function (error) {
console.error("Couldn't sync to the cloud", error);
});
 */
  Q$fcall<U>(...args: any[]): Q$Promise<U>;

  /**
   * A sugar method, equivalent to promise.then(function () { return value; }).
   */
  thenResolve<U>(value: U): Q$Promise<U>;

  /**
   * A sugar method, equivalent to promise.then(function () { throw reason; }).
   */
  thenReject<U>(reason?: any): Q$Promise<U>;

  /**
   * Attaches a handler that will observe the value of the promise when it becomes fulfilled, returning a promise for
   * that same value, perhaps deferred but not replaced by the promise returned by the onFulfilled handler.
   */
  tap(onFulfilled: (value: T) => any): Q$Promise<T>;

  /**
   * Returns a promise that will have the same result as promise, except that if promise is not fulfilled or rejected
   * before ms milliseconds, the returned promise will be rejected with an Error with the given message. If message
   * is not supplied, the message will be "Timed out after " + ms + " ms".
   */
  Q$timeout(ms: number, message?: string): Q$Promise<T>;

  /**
   * Returns a promise that will have the same result as promise, but will only be fulfilled or rejected after at least
   * ms milliseconds have passed.
   */
  Q$delay(ms: number): Q$Promise<T>;

  /**
   * Returns whether a given promise is in the fulfilled state. When the static version is used on non-promises, the
   * result is always true.
   */
  Q$isFulfilled(): boolean;

  /**
   * Returns whether a given promise is in the rejected state. When the static version is used on non-promises, the
   * result is always false.
   */
  Q$isRejected(): boolean;

  /**
   * Returns whether a given promise is in the pending state. When the static version is used on non-promises, the
   * result is always false.
   */
  Q$isPending(): boolean;
  valueOf(): any;

  /**
   * Returns a "state snapshot" object, which will be in one of three forms:
   *
   * - { state: "pending" }
   * - { state: "fulfilled", value: <fulfllment value> }
   * - { state: "rejected", reason: <rejection reason> }
   */
  inspect(): Q$PromiseState<T>;
}

export interface Q$PromiseState<T> {
  state: "fulfilled" | "rejected" | "pending";
  value?: T;
  reason?: any;
}

/**
 * Returns a "deferred" object with a:
 * promise property
 * resolve(value) method
 * reject(reason) method
 * notify(value) method
 * makeNodeResolver() method
 */
declare export function Q$defer<T>(): Q$Deferred<T>;

/**
 * Calling resolve with a pending promise causes promise to wait on the passed promise, becoming fulfilled with its
 * fulfillment value or rejected with its rejection reason (or staying pending forever, if the passed promise does).
 * Calling resolve with a rejected promise causes promise to be rejected with the passed promise's rejection reason.
 * Calling resolve with a fulfilled promise causes promise to be fulfilled with the passed promise's fulfillment value.
 * Calling resolve with a non-promise value causes promise to be fulfilled with that value.
 */
declare export function Q$resolve<T>(object?: Q$IWhenable<T>): Q$Promise<T>;

/**
 * Returns a promise that is rejected with reason.
 */
declare export function Q$reject<T>(reason?: any): Q$Promise<T>;

declare export function Q$when(): Q$Promise<void>;

declare export function Q$when<T>(value: Q$IWhenable<T>): Q$Promise<T>;

declare export function Q$when<T, U>(
  value: Q$IWhenable<T>,
  onFulfilled: (val: T) => Q$IWhenable<U>,
  onRejected?: ((reason: any) => Q$IWhenable<U>) | null,
  onProgress?: ((progress: any) => any) | null
): Q$Promise<U>;

/**
 * (Deprecated) Returns a new function that calls a function asynchronously with the given variadic arguments, and returns a promise.
 * Notably, any synchronous return values or thrown exceptions are transformed, respectively, into fulfillment values
 * or rejection reasons for the promise returned by this new function.
 * This method is especially useful in its static form for wrapping functions to ensure that they are always
 * asynchronous, and that any thrown exceptions (intentional or accidental) are appropriately transformed into a
 * returned rejected promise. For example:
 * @example var getUserData = Q.fbind(function (userName) {
if (!userName) {
throw new Error("userName must be truthy!");
}
if (localCache.has(userName)) {
return localCache.get(userName);
}
return getUserFromCloud(userName);
});
 */
declare export function Q$fbind<T>(
  method: (...args: any[]) => Q$IWhenable<T>,
  ...args: any[]
): (...args: any[]) => Q$Promise<T>;

/**
 * Returns a promise for the result of calling a function, with the given variadic arguments. Has the same return
 * value/thrown exception translation as explained above for fbind.
 * In its static form, it is aliased as Q.try, since it has semantics similar to a try block (but handling both synchronous
 * exceptions and asynchronous rejections). This allows code like
 * @example Q.try(function () {
if (!isConnectedToCloud()) {
throw new Error("The cloud is down!");
}
return syncToCloud();
})
.catch(function (error) {
console.error("Couldn't sync to the cloud", error);
});
 */
declare export function Q$fcall<T>(
  method: (...args: any[]) => T,
  ...args: any[]
): Q$Promise<T>;

declare export { Q$fcall as Q$try };

/**
 * Returns a promise for the result of calling the named method of an object with the given variadic arguments.
 * The object itself is this in the function, just like a synchronous method call.
 */
declare export function Q$invoke<T>(
  obj: any,
  functionName: string,
  ...args: any[]
): Q$Promise<T>;

/**
 * Alias for invoke()
 */
declare export function Q$send<T>(
  obj: any,
  functionName: string,
  ...args: any[]
): Q$Promise<T>;

/**
 * Alias for invoke()
 */
declare export function Q$mcall<T>(
  obj: any,
  functionName: string,
  ...args: any[]
): Q$Promise<T>;

/**
 * Creates a promise-returning function from a Node.js-style function, optionally binding it with the given
 * variadic arguments. An example:
 * @example var readFile = Q.nfbind(FS.readFile);
readFile("foo.txt", "utf-8").done(function (text) {
//...
});

Note that if you have a method that uses the Node.js callback pattern, as opposed to just a function, you will
need to bind its this value before passing it to nfbind, like so:
 * @example var Kitty = mongoose.model("Kitty");
var findKitties = Q.nfbind(Kitty.find.bind(Kitty));

The better strategy for methods would be to use Q.nbind, as shown below.
 */
declare export function Q$nfbind<T>(
  nodeFunction: (...args: any[]) => any,
  ...args: any[]
): (...args: any[]) => Q$Promise<T>;

/**
 * Alias for nfbind()
 */
declare export function Q$denodeify<T>(
  nodeFunction: (...args: any[]) => any,
  ...args: any[]
): (...args: any[]) => Q$Promise<T>;

/**
 * Creates a promise-returning function from a Node.js-style method, optionally binding it with the given
 * variadic arguments. An example:
 * @example var Kitty = mongoose.model("Kitty");
var findKitties = Q.nbind(Kitty.find, Kitty);
findKitties({ cute: true }).done(function (theKitties) {
//...
});
 */
declare export function Q$nbind<T>(
  nodeFunction: (...args: any[]) => any,
  thisArg: any,
  ...args: any[]
): (...args: any[]) => Q$Promise<T>;

/**
 * Calls a Node.js-style function with the given array of arguments, returning a promise that is fulfilled if the
 * Node.js function calls back with a result, or rejected if it calls back with an error
 * (or throws one synchronously). An example:
 * @example Q.nfapply(FS.readFile, ["foo.txt", "utf-8"]).done(function (text) {
});

Note that this example only works because FS.readFile is a function exported from a module, not a method on
an object. For methods, e.g. redisClient.get, you must bind the method to an instance before passing it to
Q.nfapply (or, generally, as an argument to any function call):
 * @example Q.nfapply(redisClient.get.bind(redisClient), ["user:1:id"]).done(function (user) {
});

The better strategy for methods would be to use Q.npost, as shown below.
 */
declare export function Q$nfapply<T>(
  nodeFunction: (...args: any[]) => any,
  args: any[]
): Q$Promise<T>;

/**
 * Calls a Node.js-style function with the given variadic arguments, returning a promise that is fulfilled if the
 * Node.js function calls back with a result, or rejected if it calls back with an error
 * (or throws one synchronously). An example:
 * @example Q.nfcall(FS.readFile, "foo.txt", "utf-8").done(function (text) {
});

The same warning about functions vs. methods applies for nfcall as it does for nfapply. In this case, the better
strategy would be to use Q.ninvoke.
 */
declare export function Q$nfcall<T>(
  nodeFunction: (...args: any[]) => any,
  ...args: any[]
): Q$Promise<T>;

/**
 * Calls a Node.js-style method with the given arguments array, returning a promise that is fulfilled if the method
 * calls back with a result, or rejected if it calls back with an error (or throws one synchronously). An example:
 * @example Q.npost(redisClient, "get", ["user:1:id"]).done(function (user) {
});
 */
declare export function Q$npost<T>(
  nodeModule: any,
  functionName: string,
  args: any[]
): Q$Promise<T>;

/**
 * Calls a Node.js-style method with the given variadic arguments, returning a promise that is fulfilled if the
 * method calls back with a result, or rejected if it calls back with an error (or throws one synchronously). An example:
 * @example Q.ninvoke(redisClient, "get", "user:1:id").done(function (user) {
});
 */
declare export function Q$ninvoke<T>(
  nodeModule: any,
  functionName: string,
  ...args: any[]
): Q$Promise<T>;

/**
 * Alias for ninvoke()
 */
declare export function Q$nsend<T>(
  nodeModule: any,
  functionName: string,
  ...args: any[]
): Q$Promise<T>;

/**
 * Returns a promise that is fulfilled with an array containing the fulfillment value of each promise, or is rejected with the same rejection reason as the first promise to be rejected.
 */
declare export function Q$all<A, B, C, D, E, F>(
  promises: Q$IWhenable<
    [
      Q$IWhenable<A>,
      Q$IWhenable<B>,
      Q$IWhenable<C>,
      Q$IWhenable<D>,
      Q$IWhenable<E>,
      Q$IWhenable<F>
    ]
  >
): Q$Promise<[A, B, C, D, E, F]>;

/**
 * Returns a promise that is fulfilled with an array containing the fulfillment value of each promise, or is rejected with the same rejection reason as the first promise to be rejected.
 */
declare export function Q$all<A, B, C, D, E>(
  promises: Q$IWhenable<
    [
      Q$IWhenable<A>,
      Q$IWhenable<B>,
      Q$IWhenable<C>,
      Q$IWhenable<D>,
      Q$IWhenable<E>
    ]
  >
): Q$Promise<[A, B, C, D, E]>;

/**
 * Returns a promise that is fulfilled with an array containing the fulfillment value of each promise, or is rejected with the same rejection reason as the first promise to be rejected.
 */
declare export function Q$all<A, B, C, D>(
  promises: Q$IWhenable<
    [Q$IWhenable<A>, Q$IWhenable<B>, Q$IWhenable<C>, Q$IWhenable<D>]
  >
): Q$Promise<[A, B, C, D]>;

/**
 * Returns a promise that is fulfilled with an array containing the fulfillment value of each promise, or is rejected with the same rejection reason as the first promise to be rejected.
 */
declare export function Q$all<A, B, C>(
  promises: Q$IWhenable<[Q$IWhenable<A>, Q$IWhenable<B>, Q$IWhenable<C>]>
): Q$Promise<[A, B, C]>;

/**
 * Returns a promise that is fulfilled with an array containing the fulfillment value of each promise, or is rejected with the same rejection reason as the first promise to be rejected.
 */
declare export function Q$all<A, B>(
  promises: Q$IWhenable<[Q$IPromise<A>, Q$IPromise<B>]>
): Q$Promise<[A, B]>;

declare export function Q$all<A, B>(
  promises: Q$IWhenable<[A, Q$IPromise<B>]>
): Q$Promise<[A, B]>;

declare export function Q$all<A, B>(
  promises: Q$IWhenable<[Q$IPromise<A>, B]>
): Q$Promise<[A, B]>;

declare export function Q$all<A, B>(
  promises: Q$IWhenable<[A, B]>
): Q$Promise<[A, B]>;

/**
 * Returns a promise that is fulfilled with an array containing the fulfillment value of each promise, or is rejected with the same rejection reason as the first promise to be rejected.
 */
declare export function Q$all<T>(
  promises: Q$IWhenable<Array<Q$IWhenable<T>>>
): Q$Promise<T[]>;

/**
 * Returns a promise for the first of an array of promises to become settled.
 */
declare export function Q$race<T>(
  promises: Array<Q$IWhenable<T>>
): Q$Promise<T>;

/**
 * Returns a promise that is fulfilled with an array of promise state snapshots, but only after all the original promises
 * have settled, i.e. become either fulfilled or rejected.
 */
declare export function Q$allSettled<T>(
  promises: Q$IWhenable<Array<Q$IWhenable<T>>>
): Q$Promise<Array<Q$PromiseState<T>>>;

/**
 * Deprecated Alias for allSettled()
 */
declare export function Q$allResolved<T>(
  promises: Q$IWhenable<Array<Q$IWhenable<T>>>
): Q$Promise<Array<Q$Promise<T>>>;

/**
 * Like then, but "spreads" the array into a variadic fulfillment handler. If any of the promises in the array are
 * rejected, instead calls onRejected with the first rejected promise's rejection reason. This is especially useful
 * in conjunction with all.
 */
declare export function Q$spread<T, U>(
  promises: Array<Q$IWhenable<T>>,
  onFulfilled: (...args: T[]) => Q$IWhenable<U>,
  onRejected?: (reason: any) => Q$IWhenable<U>
): Q$Promise<U>;

/**
 * Returns a promise that will have the same result as promise, except that if promise is not fulfilled or rejected
 * before ms milliseconds, the returned promise will be rejected with an Error with the given message. If message
 * is not supplied, the message will be "Timed out after " + ms + " ms".
 */
declare export function Q$timeout<T>(
  promise: Q$Promise<T>,
  ms: number,
  message?: string
): Q$Promise<T>;

/**
 * Returns a promise that will have the same result as promise, but will only be fulfilled or rejected after at least ms milliseconds have passed.
 */
declare export function Q$delay<T>(
  promiseOrValue: Q$Promise<T> | T,
  ms: number
): Q$Promise<T>;

/**
 * Returns a promise that will be fulfilled with undefined after at least ms milliseconds have passed.
 */
declare export function Q$delay(ms: number): Q$Promise<void>;

/**
 * Returns whether a given promise is in the fulfilled state. When the static version is used on non-promises, the result is always true.
 */
declare export function Q$isFulfilled(promise: Q$Promise<any>): boolean;

/**
 * Returns whether a given promise is in the rejected state. When the static version is used on non-promises, the result is always false.
 */
declare export function Q$isRejected(promise: Q$Promise<any>): boolean;

/**
 * Returns whether a given promise is in the pending state. When the static version is used on non-promises, the result is always false.
 */
declare export function Q$isPending(
  promiseOrObject: Q$Promise<any> | any
): boolean;

/**
 * Synchronously calls resolver(resolve, reject, notify) and returns a promise whose state is controlled by the
 * functions passed to resolver. This is an alternative promise-creation API that has the same power as the deferred
 * concept, but without introducing another conceptual entity.
 * If resolver throws an exception, the returned promise will be rejected with that thrown exception as the rejection reason.
 * note: In the latest github, this method is called Q.Promise, but if you are using the npm package version 0.9.7
 * or below, the method is called Q.promise (lowercase vs uppercase p).
 */
declare export function Q$Promise<T>(
  resolver: (
    Q$resolve: (val?: Q$IWhenable<T>) => void,
    Q$reject: (reason?: any) => void,
    notify: (progress: any) => void
  ) => void
): Q$Promise<T>;

/**
 * Creates a new version of func that accepts any combination of promise and non-promise values, converting them to their
 * fulfillment values before calling the original func. The returned version also always returns a promise: if func does
 * a return or throw, then Q.promised(func) will return fulfilled or rejected promise, respectively.
 * This can be useful for creating functions that accept either promises or non-promise values, and for ensuring that
 * the function always returns a promise even in the face of unintentional thrown exceptions.
 */
declare export function Q$promised<T>(
  callback: (...args: any[]) => T
): (...args: any[]) => Q$Promise<T>;

/**
 * Returns whether the given value is a Q promise.
 */
declare export function Q$isPromise(object: any): boolean;

/**
 * Returns whether the given value is a promise (i.e. it's an object with a then function).
 */
declare export function Q$isPromiseAlike(object: any): boolean;

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it's a fulfilled promise, the fulfillment value is nearer.
 * If it's a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 */
declare export function Q$nearer<T>(promise: Q$Promise<T>): T;

/**
 * This is an experimental tool for converting a generator function into a deferred function. This has the potential
 * of reducing nested callbacks in engines that support yield.
 */
declare export function Q$async<T>(
  generatorFunction: any
): (...args: any[]) => Q$Promise<T>;

declare export function Q$nextTick(callback: (...args: any[]) => any): void;

/**
 * A settable property that will intercept any uncaught errors that would otherwise be thrown in the next tick of the
 * event loop, usually as a result of done. Can be useful for getting the full
 * stack trace of an error in browsers, which is not usually possible with window.onerror.
 */
declare export var Q$onerror: (reason: any) => void;

/**
 * A settable property that lets you turn on long stack trace support. If turned on, "stack jumps" will be tracked
 * across asynchronous promise operations, so that if an uncaught error is thrown by done or a rejection reason's stack
 * property is inspected in a rejection callback, a long stack trace is produced.
 */
declare export var Q$longStackSupport: boolean;

/**
 * Resets the global "Q" variable to the value it has before Q was loaded.
 * This will either be undefined if there was no version or the version of Q which was already loaded before.
 * @returns The last version of Q.
 */
declare export function Q$noConflict(): typeof Q;
declare module "q" {
  declare export default typeof Q;

  /**
   * If value is a Q promise, returns the promise.
   * If value is a promise from another library it is coerced into a Q promise (where possible).
   * If value is not a promise, returns a promise that is fulfilled with value.
   */
  declare function Q<T>(promise: PromiseLike<T> | T): Q$Q$Promise<T>;

  /**
   * Calling with nothing at all creates a void promise
   */
  declare function Q(): Q$Q$Promise<void>;
}
