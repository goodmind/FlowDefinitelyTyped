
/**
 * Promise A+
 */
declare interface Rx$IPromise<T> {
then<R>(
onFulfilled: (value: T) => Rx$IPromise<R>,
onRejected: (reason: any) => Rx$IPromise<R>): Rx$IPromise<R>,
then<R>(
onFulfilled: (value: T) => Rx$IPromise<R>,
onRejected?: (reason: any) => R): Rx$IPromise<R>,
then<R>(
onFulfilled: (value: T) => R,
onRejected: (reason: any) => Rx$IPromise<R>): Rx$IPromise<R>,
then<R>(
onFulfilled?: (value: T) => R,
onRejected?: (reason: any) => R): Rx$IPromise<R>
} 

declare interface Rx$IDisposable {
dispose(): void
} 

declare interface Rx$IScheduler {
catch(handler: (exception: any) => boolean): Rx$IScheduler,
catchException(handler: (exception: any) => boolean): Rx$IScheduler
} 

declare interface Rx$Observer<T> {
checked(): Rx$Observer<any>
} 

declare interface Rx$ObserverStatic {

/**
 * Schedules the invocation of observer methods on the given scheduler.
 * @param scheduler Scheduler to schedule observer messages on.
 * @returns Observer whose messages are scheduled on the given scheduler.
 */
notifyOn<T>(scheduler: Rx$IScheduler): Rx$Observer<T>
} 

declare interface Rx$Observable<T> {
observeOn(scheduler: Rx$IScheduler): Rx$Observable<T>,
subscribeOn(scheduler: Rx$IScheduler): Rx$Observable<T>,
amb(rightSource: Rx$IPromise<T> | Rx$Observable<T>): Rx$Observable<T>,
onErrorResumeNext(second: Rx$IPromise<T> | Rx$Observable<T>): Rx$Observable<T>,
bufferWithCount(count: number, skip?: number): Rx$Observable<T[]>,
windowWithCount(count: number, skip?: number): Rx$Observable<Rx$Observable<T>>,
defaultIfEmpty(defaultValue?: T): Rx$Observable<T>,
distinct(
skipParameter: boolean,
valueSerializer: (value: T) => string): Rx$Observable<T>,
distinct<TKey>(
keySelector?: (value: T) => TKey,
keySerializer?: (key: TKey) => string): Rx$Observable<T>,
groupBy<TKey, TElement>(
keySelector: (value: T) => TKey,
skipElementSelector?: boolean,
keySerializer?: (key: TKey) => string): Rx$Observable<Rx$GroupedObservable<TKey, T>>,
groupBy<TKey, TElement>(
keySelector: (value: T) => TKey,
elementSelector: (value: T) => TElement,
keySerializer?: (key: TKey) => string): Rx$Observable<Rx$GroupedObservable<TKey, TElement>>,
groupByUntil<TKey, TDuration>(
keySelector: (value: T) => TKey,
skipElementSelector: boolean,
durationSelector: (group: Rx$GroupedObservable<TKey, T>) => Rx$Observable<TDuration>,
keySerializer?: (key: TKey) => string): Rx$Observable<Rx$GroupedObservable<TKey, T>>,
groupByUntil<TKey, TElement, TDuration>(
keySelector: (value: T) => TKey,
elementSelector: (value: T) => TElement,
durationSelector: (group: Rx$GroupedObservable<TKey, TElement>) => Rx$Observable<TDuration>,
keySerializer?: (key: TKey) => string): Rx$Observable<Rx$GroupedObservable<TKey, TElement>>
} 

declare interface Rx$ObservableStatic {
using<TSource, TResource: Rx$IDisposable>(
resourceFactory: () => TResource,
observableFactory: (resource: TResource) => Rx$Observable<TSource>): Rx$Observable<TSource>,
amb<T>(...sources: Array<Rx$IPromise<T>>): Rx$Observable<T>,
amb<T>(...sources: Array<Rx$Observable<T>>): Rx$Observable<T>,
amb<T>(sources: Array<Rx$IPromise<T>> | Array<Rx$Observable<T>>): Rx$Observable<T>,
onErrorResumeNext<T>(...sources: Array<Rx$IPromise<T>>): Rx$Observable<T>,
onErrorResumeNext<T>(...sources: Array<Rx$Observable<T>>): Rx$Observable<T>,
onErrorResumeNext<T>(sources: Array<Rx$IPromise<T>> | Array<Rx$Observable<T>>): Rx$Observable<T>
} 

declare type Rx$GroupedObservable<TKey, TElement> = {
key: TKey,
underlyingObservable: Rx$Observable<TElement>
} & Rx$Observable<TElement>
declare module 'rx-core' {
        declare module.exports: typeof Rx

    }
