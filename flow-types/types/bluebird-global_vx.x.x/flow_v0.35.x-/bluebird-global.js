declare module 'bluebird-global' {
        declare module 'global' {
        declare interface Promise<T> {
all: $ElementType<Bluebird<T>, "all">,
any: $ElementType<Bluebird<T>, "any">,
asCallback: $ElementType<Bluebird<T>, "asCallback">,
bind: $ElementType<Bluebird<T>, "bind">,
call: $ElementType<Bluebird<T>, "call">,
cancel: $ElementType<Bluebird<T>, "cancel">,
caught: $ElementType<Bluebird<T>, "caught">,
delay: $ElementType<Bluebird<T>, "delay">,
disposer: $ElementType<Bluebird<T>, "disposer">,
done: $ElementType<Bluebird<T>, "done">,
each: $ElementType<Bluebird<T>, "each">,
error: $ElementType<Bluebird<T>, "error">,
filter: $ElementType<Bluebird<T>, "filter">,
get: $ElementType<Bluebird<T>, "get">,
isCancelled: $ElementType<Bluebird<T>, "isCancelled">,
isFulfilled: $ElementType<Bluebird<T>, "isFulfilled">,
isPending: $ElementType<Bluebird<T>, "isPending">,
isRejected: $ElementType<Bluebird<T>, "isRejected">,
isResolved: $ElementType<Bluebird<T>, "isResolved">,
lastly: $ElementType<Bluebird<T>, "lastly">,
map: $ElementType<Bluebird<T>, "map">,
mapSeries: $ElementType<Bluebird<T>, "mapSeries">,
nodeify: $ElementType<Bluebird<T>, "nodeify">,
props: $ElementType<Bluebird<T>, "props">,
race: $ElementType<Bluebird<T>, "race">,
reason: $ElementType<Bluebird<T>, "reason">,
reduce: $ElementType<Bluebird<T>, "reduce">,
reflect: $ElementType<Bluebird<T>, "reflect">,
return: $ElementType<Bluebird<T>, "return">,
some: $ElementType<Bluebird<T>, "some">,
spread: $ElementType<Bluebird<T>, "spread">,
suppressUnhandledRejections: $ElementType<Bluebird<T>, "suppressUnhandledRejections">,
tap: $ElementType<Bluebird<T>, "tap">,
tapCatch: $ElementType<Bluebird<T>, "tapCatch">,
thenReturn: $ElementType<Bluebird<T>, "thenReturn">,
thenThrow: $ElementType<Bluebird<T>, "thenThrow">,
catchReturn: $ElementType<Bluebird<T>, "catchReturn">,
catchThrow: $ElementType<Bluebird<T>, "catchThrow">,
throw: $ElementType<Bluebird<T>, "throw">,
timeout: $ElementType<Bluebird<T>, "timeout">,
toJSON: $ElementType<Bluebird<T>, "toJSON">,
function toString() { [native code] }: $ElementType<Bluebird<T>, "toString">,
value: $ElementType<Bluebird<T>, "value">,
then<TResult1, TResult2>(
onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | void | null,
onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | void | null): Promise<TResult1 | TResult2>,
catch<TResult>(
onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | void | null): Promise<T | TResult>,
catch(
predicate: (error: any) => boolean,
onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>): Bluebird<T>,
catch<U>(
predicate: (error: any) => boolean,
onReject: (error: any) => U | PromiseLike<U>): Bluebird<U | T>,
catch<E: Error>(
ErrorClass: (...args: any[]) => E,
onReject: (error: E) => T | PromiseLike<T> | void | PromiseLike<void>): Bluebird<T>,
catch<E: Error, U>(
ErrorClass: (...args: any[]) => E,
onReject: (error: E) => U | PromiseLike<U>): Bluebird<U | T>,
catch(
predicate: Object,
onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>): Bluebird<T>,
catch<U>(
predicate: Object,
onReject: (error: any) => U | PromiseLike<U>): Bluebird<U | T>,
finally(onfinally?: (() => void) | void | null): Promise<T>
} 
	declare interface PromiseConstructor {
new <T>(
callback: (
resolve: (thenableOrResult?: T | PromiseLike<T>) => void,
reject: (error?: any) => void,
onCancel?: (callback: () => void) => void) => void): Promise<T>,
any: typeof undefined,
attempt: typeof undefined,
bind: typeof undefined,
cast: typeof undefined,
config: typeof undefined,
coroutine: typeof undefined,
defer: typeof undefined,
delay: typeof undefined,
each: typeof undefined,
filter: typeof undefined,
fromCallback: typeof undefined,
fromNode: typeof undefined,
is: typeof undefined,
join: typeof undefined,
longStackTraces: typeof undefined,
map: typeof undefined,
mapSeries: typeof undefined,
method: typeof undefined,
onPossiblyUnhandledRejection: typeof undefined,
promisify: typeof undefined,
promisifyAll: typeof undefined,
props: typeof undefined,
reduce: typeof undefined,
some: typeof undefined,
try: typeof undefined,
using: typeof undefined,
all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>,
all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>,
all<T1, T2, T3, T4, T5, T6, T7, T8>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>,
all<T1, T2, T3, T4, T5, T6, T7>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>,
all<T1, T2, T3, T4, T5, T6>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>,
all<T1, T2, T3, T4, T5>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>,
all<T1, T2, T3, T4>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<[T1, T2, T3, T4]>,
all<T1, T2, T3>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>,
all<T1, T2>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>,
all<T>(values: (T | PromiseLike<T>)[]): Promise<T[]>,
race<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<T1
| T2
| T3
| T4
| T5
| T6
| T7
| T8
| T9
| T10>,
race<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<T1
| T2
| T3
| T4
| T5
| T6
| T7
| T8
| T9>,
race<T1, T2, T3, T4, T5, T6, T7, T8>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<T1
| T2
| T3
| T4
| T5
| T6
| T7
| T8>,
race<T1, T2, T3, T4, T5, T6, T7>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<T1
| T2
| T3
| T4
| T5
| T6
| T7>,
race<T1, T2, T3, T4, T5, T6>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<T1
| T2
| T3
| T4
| T5
| T6>,
race<T1, T2, T3, T4, T5>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<T1
| T2
| T3
| T4
| T5>,
race<T1, T2, T3, T4>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<T1 | T2 | T3 | T4>,
race<T1, T2, T3>(
values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<T1 | T2 | T3>,
race<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<T1 | T2>,
race<T>(values: (T | PromiseLike<T>)[]): Promise<T>,
reject(reason: any): Promise<empty>,
reject<T>(reason: any): Promise<T>,
resolve<T>(value: T | PromiseLike<T>): Promise<T>,
resolve(): Promise<void>
} 
	declare var Promise: PromiseConstructor;
    }

    }
