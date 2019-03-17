declare function When(): When$Promise<void>
declare function When<T>(promiseOrValue: T | When$Promise<T> | When$Thenable<T>): When$Promise<T>
declare function When<T, U>(
promiseOrValue: T | When$Promise<T> | When$Thenable<T>,
transform: (val: T) => U): When$Promise<U>
declare var When: typeof npm$namespace$When;

      declare var npm$namespace$When: {
        attempt: typeof When$attempt,
lift: typeof When$lift,
promise: typeof When$promise,
reject: typeof When$reject,
all: typeof When$all,
map: typeof When$map,
reduce: typeof When$reduce,
reduceRight: typeof When$reduceRight,
settle: typeof When$settle,
iterate: typeof When$iterate,
unfold: typeof When$unfold,
defer: typeof When$defer,
join: typeof When$join,
resolve: typeof When$resolve,
        
        
        
        
      }
declare interface When$_$Fn0<T> {
(): T
} 

declare interface When$_$Fn1<A1, T> {
(a1: A1): T
} 

declare interface When$_$Fn2<A1, A2, T> {
(a1: A1, a2: A2): T
} 

declare interface When$_$Fn3<A1, A2, A3, T> {
(a1: A1, a2: A2, a3: A3): T
} 

declare interface When$_$Fn4<A1, A2, A3, A4, T> {
(a1: A1, a2: A2, a3: A3, a4: A4): T
} 

declare interface When$_$Fn5<A1, A2, A3, A4, A5, T> {
(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): T
} 

declare interface When$_$Fn6<A1, A2, A3, A4, A5, A6, T> {
(a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): T
} 

declare type When$_$LiftedFn0<T> = {} & When$_$Fn0<When$Promise<T>>


declare type When$_$LiftedFn1<A1, T> = {} & When$_$Fn1<A1 | When$Promise<A1>, When$Promise<T>>


declare type When$_$LiftedFn2<A1, A2, T> = {} & When$_$Fn2<A1 | When$Promise<A1>, A2 | When$Promise<A2>, When$Promise<T>>


declare type When$_$LiftedFn3<A1, A2, A3, T> = {} & When$_$Fn3<A1 | When$Promise<A1>, A2 | When$Promise<A2>, A3 | When$Promise<A3>, When$Promise<T>>


declare type When$_$LiftedFn4<A1, A2, A3, A4, T> = {} & When$_$Fn4<A1 | When$Promise<A1>, A2 | When$Promise<A2>, A3 | When$Promise<A3>, A4 | When$Promise<A4>, When$Promise<T>>


declare type When$_$LiftedFn5<A1, A2, A3, A4, A5, T> = {} & When$_$Fn5<A1 | When$Promise<A1>, A2 | When$Promise<A2>, A3 | When$Promise<A3>, A4 | When$Promise<A4>, A5 | When$Promise<A5>, When$Promise<T>>


declare interface When$_$NodeCallback<T> {
(err: any, result: T): void
} 

declare type When$_$NodeFn0<T> = {} & When$_$Fn1<When$_$NodeCallback<T>, void>


declare type When$_$NodeFn1<A1, T> = {} & When$_$Fn2<A1, When$_$NodeCallback<T>, void>


declare type When$_$NodeFn2<A1, A2, T> = {} & When$_$Fn3<A1, A2, When$_$NodeCallback<T>, void>


declare type When$_$NodeFn3<A1, A2, A3, T> = {} & When$_$Fn4<A1, A2, A3, When$_$NodeCallback<T>, void>


declare type When$_$NodeFn4<A1, A2, A3, A4, T> = {} & When$_$Fn5<A1, A2, A3, A4, When$_$NodeCallback<T>, void>


declare type When$_$NodeFn5<A1, A2, A3, A4, A5, T> = {} & When$_$Fn6<A1, A2, A3, A4, A5, When$_$NodeCallback<T>, void>


declare function When$attempt<T>(f: When$_$Fn0<T>): When$Promise<T>


declare function When$attempt<A1, T>(f: When$_$Fn1<A1, T>, arg1: A1 | When$Promise<A1>): When$Promise<T>


declare function When$attempt<A1, A2, T>(
f: When$_$Fn2<A1, A2, T>,
arg1: A1 | When$Promise<A1>,
arg2: A2 | When$Promise<A2>): When$Promise<T>


declare function When$attempt<A1, A2, A3, T>(
f: When$_$Fn3<A1, A2, A3, T>,
arg1: A1 | When$Promise<A1>,
arg2: A2 | When$Promise<A2>,
arg3: A3 | When$Promise<A3>): When$Promise<T>


declare function When$attempt<A1, A2, A3, A4, T>(
f: When$_$Fn4<A1, A2, A3, A4, T>,
arg1: A1 | When$Promise<A1>,
arg2: A2 | When$Promise<A2>,
arg3: A3 | When$Promise<A3>,
arg4: A4 | When$Promise<A4>): When$Promise<T>


declare function When$attempt<A1, A2, A3, A4, A5, T>(
f: When$_$Fn5<A1, A2, A3, A4, A5, T>,
arg1: A1 | When$Promise<A1>,
arg2: A2 | When$Promise<A2>,
arg3: A3 | When$Promise<A3>,
arg4: A4 | When$Promise<A4>,
arg5: A5 | When$Promise<A5>): When$Promise<T>


declare function When$lift<T>(f: When$_$Fn0<T>): When$_$LiftedFn0<T>


declare function When$lift<A1, T>(f: When$_$Fn1<A1, T>): When$_$LiftedFn1<A1, T>


declare function When$lift<A1, A2, T>(f: When$_$Fn2<A1, A2, T>): When$_$LiftedFn2<A1, A2, T>


declare function When$lift<A1, A2, A3, T>(f: When$_$Fn3<A1, A2, A3, T>): When$_$LiftedFn3<A1, A2, A3, T>


declare function When$lift<A1, A2, A3, A4, T>(
f: When$_$Fn4<A1, A2, A3, A4, T>): When$_$LiftedFn4<A1, A2, A3, A4, T>


declare function When$lift<A1, A2, A3, A4, A5, T>(
f: When$_$Fn5<A1, A2, A3, A4, A5, T>): When$_$LiftedFn5<A1, A2, A3, A4, A5, T>


declare function When$promise<T>(
resolver: (resolve: (value: T) => void, reject: (reason: any) => void) => void): When$Promise<T>


declare function When$reject<T>(reason: any): When$Promise<T>



/**
 * Return a promise that will resolve only once all the supplied promisesOrValues
 * have resolved. The resolution value of the returned promise will be an array
 * containing the resolution values of each of the promisesOrValues.
 * @memberOf when
 * @param promisesOrValues array of anything, may contain a mix
 * of {@link Promise}s and values
 */
declare function When$all<T>(promisesOrValues: any[]): When$Promise<T>



/**
 * Promise-aware array map function, similar to `Array.prototype.map()`,
 * but input array may contain promises or values.
 * @param promisesOrValues array of anything, may contain a mix of {@link Promise}s and values
 * @param mapFunc map function which may return a promise or value
 * @returns a promise that will fulfill with an array of mapped values
 * or reject if any input promise rejects.
 */
declare function When$map<T>(
promisesOrValues: any[],
mapFunc: (value: any, index: number) => any): When$Promise<T>



/**
 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
 * input may contain promises and/or values, and reduceFunc
 * may return either a value or a promise, *and* initialValue may
 * be a promise for the starting value.
 * @param promisesOrValues array or promise for an array of anything,
 * may contain a mix of promises and values.
 * @param reduceFunc function(accumulated:*, x:*, index:number):*} f reduce function
 * @returns a promise that will resolve to the final reduced value
 */
declare function When$reduce<T>(
promisesOrValues: any[],
reduceFunc: (reduction: T, value: any, index: number) => T | When$Promise<T>,
initialValue: T): When$Promise<T>



/**
 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
 * input may contain promises and/or values, and reduceFunc
 * may return either a value or a promise, *and* initialValue may
 * be a promise for the starting value.
 * @param promisesOrValues array or promise for an array of anything,
 * may contain a mix of promises and values.
 * @param reduceFunc function(accumulated:*, x:*, index:number):*} f reduce function
 * @returns a promise that will resolve to the final reduced value
 */
declare function When$reduceRight<T>(
promisesOrValues: any[],
reduceFunc: (reduction: T, value: any, index: number) => T | When$Promise<T>,
initialValue: T): When$Promise<T>



/**
 * Describes the outcome of a promise.
 * state may be one of:
 * "fulfilled" - the promise has resolved
 * "rejected" - the promise has rejected
 */
declare type When$Descriptor<T> = When$FulfilledDescriptor<T> | When$RejectedDescriptor;


/**
 * Snapshot which describes the status of a promise.
 * state may be one of:
 * "fulfilled" - the promise has resolved
 * "rejected" - the promise has rejected
 * "pending" - the promise is still pending to resolve/reject
 */
declare type When$Snapshot<T> = When$FulfilledDescriptor<T> | When$RejectedDescriptor | When$PendingDescriptor;

declare interface When$FulfilledDescriptor<T> {
state: "fulfilled",
value: T
} 

declare interface When$RejectedDescriptor {
state: "rejected",
reason: any
} 

declare interface When$PendingDescriptor {
state: "pending"
} 


/**
 * Returns a promise for an array containing the same number of elements as the input array.
 * Each element is a descriptor object describing of the outcome of the corresponding element in the input.
 * The returned promise will only reject if array itself is a rejected promise. Otherwise,
 * it will always fulfill with an array of descriptors. This is in contrast to when.all,
 * which will reject if any element of array rejects.
 * @memberOf when
 * @param promisesOrValues array of anything, may contain a mix
 * of {@link Promise}s and values
 */
declare function When$settle<T>(promisesOrValues: any[]): When$Promise<When$Descriptor<T>[]>



/**
 * Generates a potentially infinite stream of promises by repeatedly calling f until predicate becomes true.
 * @memberOf when
 * @param f function that, given a seed, returns the next value or a promise for it.
 * @param predicate function that receives the current iteration value, and should return truthy when the iterating should stop
 * @param handler function that receives each value as it is produced by f. It may return a promise to delay the next iteration.
 * @param seed initial value provided to the handler, and first f invocation. May be a promise.
 */
declare function When$iterate<U>(
f: (seed: U) => U | When$Promise<U>,
predicate: (value: U) => boolean,
handler: (value: U) => When$Promise<any> | void,
seed: U | When$Promise<U>): When$Promise<U>



/**
 * Similar to when/iterate, when.unfold generates a potentially infinite stream of promises by repeatedly calling
 * unspool until predicate becomes true. when.unfold allows you to thread additional state information through the iteration.
 * @memberOf when
 * @param unspool function that, given a seed, returns a [valueToSendToHandler, newSeed] pair.
 * May return an array, array of promises, promise for an array, or promise for an array of promises.
 * @param predicate function that receives the current seed, and should return truthy when the unfold should stop
 * @param handler function that receives the valueToSendToHandler of the current iteration.
 * This function can process valueToSendToHandler in whatever way you need.
 * It may return a promise to delay the next iteration of the unfold.
 * @param seed initial value provided to the first unspool invocation. May be a promise.
 */
declare function When$unfold<T, U>(
unspool: (
seed: U) => [T | When$Promise<T>, U | When$Promise<U>] | When$Promise<[T | When$Promise<T>, U | When$Promise<U>]>,
predicate: (value: U) => boolean | When$Promise<boolean>,
handler: (value: T) => When$Promise<any> | void,
seed: U | When$Promise<U>): When$Promise<void>



/**
 * Creates a {promise, resolver} pair, either or both of which
 * may be given out safely to consumers.
 * The resolver has resolve, reject, and progress.  The promise
 * has then plus extended promise API.
 */
declare function When$defer<T>(): When$Deferred<T>



/**
 * Joins multiple promises into a single returned promise.
 * @return a promise that will fulfill when *all* the input promises
 * have fulfilled, or will reject when *any one* of the input promises rejects.
 */
declare function When$join<T>(...promises: When$Promise<T>[]): When$Promise<T[]>



/**
 * Joins multiple promises into a single returned promise.
 * @return a promise that will fulfill when *all* the input promises
 * have fulfilled, or will reject when *any one* of the input promises rejects.
 */
declare function When$join<T>(...promises: any[]): When$Promise<T[]>



/**
 * Returns a resolved promise. The returned promise will be
 *   - fulfilled with promiseOrValue if it is a value, or
 *   - if promiseOrValue is a promise
 *     - fulfilled with promiseOrValue's value after it is fulfilled
 *     - rejected with promiseOrValue's reason after it is rejected
 */
declare function When$resolve(): When$Promise<void>


declare function When$resolve<T>(promiseOrValue: T | When$Promise<T> | When$Thenable<T>): When$Promise<T>


declare interface When$Deferred<T> {
notify(update: any): void,
promise: When$Promise<T>,
reject(reason: any): void,
resolve(value?: T): void,
resolve(value?: When$Promise<T>): void
} 

declare interface When$Promise<T> {
catch<U>(onRejected?: (reason: any) => U | When$Promise<U>): When$Promise<U>,
catch<U>(
filter: (reason: any) => boolean,
onRejected?: (reason: any) => U | When$Promise<U>): When$Promise<U>,
catch<U>(
exceptionType: any,
onRejected?: (reason: any) => U | When$Promise<U>): When$Promise<U>,
finally(onFulfilledOrRejected: Function): When$Promise<T>,
ensure(onFulfilledOrRejected: Function): When$Promise<T>,
inspect(): When$Snapshot<T>,
yield<U>(value: U | When$Promise<U>): When$Promise<U>,
else(value: T): When$Promise<T>,
orElse(value: T): When$Promise<T>,
tap(onFulfilledSideEffect: (value: T) => void): When$Promise<T>,
delay(milliseconds: number): When$Promise<T>,
timeout(milliseconds: number, reason?: any): When$Promise<T>,
with(thisArg: any): When$Promise<T>,
withThis(thisArg: any): When$Promise<T>,
otherwise<U>(onRejected?: (reason: any) => U | When$Promise<U>): When$Promise<U>,
otherwise<U>(
predicate: (reason: any) => boolean,
onRejected?: (reason: any) => U | When$Promise<U>): When$Promise<U>,
otherwise<U>(
exceptionType: any,
onRejected?: (reason: any) => U | When$Promise<U>): When$Promise<U>,
then<TResult1, TResult2>(
onFulfilled: ((value: T) => TResult1 | When$Thenable<TResult1>),
onRejected: ((reason: any) => TResult2 | When$Thenable<TResult2>),
onProgress?: (update: any) => void): When$Promise<TResult1 | TResult2>,
then<TResult>(
onFulfilled: ((value: T) => TResult | When$Thenable<TResult>),
onRejected?: ((reason: any) => TResult | When$Thenable<TResult>) | void | null,
onProgress?: (update: any) => void): When$Promise<TResult>,
then<TResult>(
onFulfilled: ((value: T) => T | When$Thenable<T>) | void | null,
onRejected: ((reason: any) => TResult | When$Thenable<TResult>),
onProgress?: (update: any) => void): When$Promise<T | TResult>,
then(
onFulfilled?: ((value: T) => T | When$Thenable<T>) | void | null,
onRejected?: ((reason: any) => T | When$Thenable<T>) | void | null,
onProgress?: (update: any) => void): When$Promise<T>,
spread<T>(onFulfilled: When$_$Fn0<When$Promise<T> | T>): When$Promise<T>,
spread<A1, T>(onFulfilled: When$_$Fn1<A1, When$Promise<T> | T>): When$Promise<T>,
spread<A1, A2, T>(
onFulfilled: When$_$Fn2<A1, A2, When$Promise<T> | T>): When$Promise<T>,
spread<A1, A2, A3, T>(
onFulfilled: When$_$Fn3<A1, A2, A3, When$Promise<T> | T>): When$Promise<T>,
spread<A1, A2, A3, A4, T>(
onFulfilled: When$_$Fn4<A1, A2, A3, A4, When$Promise<T> | T>): When$Promise<T>,
spread<A1, A2, A3, A4, A5, T>(
onFulfilled: When$_$Fn5<A1, A2, A3, A4, A5, When$Promise<T> | T>): When$Promise<T>,
done<U>(onFulfilled?: (value: T) => void, onRejected?: (reason: any) => void): void,
fold<U, V>(
combine: (value1: T, value2: V) => U | When$Promise<U>,
value2: V | When$Promise<V>): When$Promise<U>
} 

declare interface When$Thenable<T> {
then<U>(
onFulfilled?: (value: T) => U,
onRejected?: (reason: any) => U): When$Thenable<U>
} declare module 'when' {
        declare export default typeof When

    }
declare module 'when/node' {
        import typeof * as when from 'when';

	declare var _: typeof when._;
	declare function lift<T>(fn: _$NodeFn0<T>): _$LiftedFn0<T>

	declare function lift<A1, T>(fn: _$NodeFn1<A1, T>): _$LiftedFn1<A1, T>

	declare function lift<A1, A2, T>(fn: _$NodeFn2<A1, A2, T>): _$LiftedFn2<A1, A2, T>

	declare function lift<A1, A2, A3, T>(fn: _$NodeFn3<A1, A2, A3, T>): _$LiftedFn3<A1, A2, A3, T>

	declare function lift<A1, A2, A3, A4, T>(
fn: _$NodeFn4<A1, A2, A3, A4, T>): _$LiftedFn4<A1, A2, A3, A4, T>

	declare function lift<A1, A2, A3, A4, A5, T>(
fn: _$NodeFn5<A1, A2, A3, A4, A5, T>): _$LiftedFn5<A1, A2, A3, A4, A5, T>

	declare function call<T>(fn: _$NodeFn0<T>): when.Promise<T>

	declare function call<A1, T>(fn: _$NodeFn1<A1, T>, arg1: A1 | when.Promise<A1>): when.Promise<T>

	declare function call<A1, A2, T>(
fn: _$NodeFn2<A1, A2, T>,
arg1: A1 | when.Promise<A1>,
arg2: A2 | when.Promise<A2>): when.Promise<T>

	declare function call<A1, A2, A3, T>(
fn: _$NodeFn3<A1, A2, A3, T>,
arg1: A1 | when.Promise<A1>,
arg2: A2 | when.Promise<A2>,
arg3: A3 | when.Promise<A3>): when.Promise<T>

	declare function call<A1, A2, A3, A4, T>(
fn: _$NodeFn4<A1, A2, A3, A4, T>,
arg1: A1 | when.Promise<A1>,
arg2: A2 | when.Promise<A2>,
arg3: A3 | when.Promise<A3>,
arg4: A4 | when.Promise<A4>): when.Promise<T>

	declare function call<A1, A2, A3, A4, A5, T>(
fn: _$NodeFn5<A1, A2, A3, A4, A5, T>,
arg1: A1 | when.Promise<A1>,
arg2: A2 | when.Promise<A2>,
arg3: A3 | when.Promise<A3>,
arg4: A4 | when.Promise<A4>,
arg5: A5 | when.Promise<A5>): when.Promise<T>

	declare function apply<T>(fn: _$NodeFn0<T>, args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(fn: _$NodeFn1<any, T>, args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(fn: _$NodeFn2<any, any, T>, args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(fn: _$NodeFn3<any, any, any, T>, args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(
fn: _$NodeFn4<any, any, any, any, T>,
args: any[] | IArguments): when.Promise<T>

	declare function apply<T>(
fn: _$NodeFn5<any, any, any, any, any, T>,
args: any[] | IArguments): when.Promise<T>

	declare function liftAll(
srcApi: any,
transform?: (destApi: any, liftedFunc: Function, name: string) => any,
destApi?: any): any

	declare function liftCallback<TArg>(
callback: (err: any, arg: TArg) => void): (value: when.Promise<TArg>) => when.Promise<TArg>

	declare function bindCallback<TArg>(
arg: when.Promise<TArg>,
callback: (err: any, arg: TArg) => void): when.Promise<TArg>

	declare interface Resolver<T> {
reject(reason: any): void,
resolve(value?: T | when.Promise<T>): void
} 
	declare function createCallback<TArg>(resolver: Resolver<TArg>): (err: any, arg: TArg) => void

    }
