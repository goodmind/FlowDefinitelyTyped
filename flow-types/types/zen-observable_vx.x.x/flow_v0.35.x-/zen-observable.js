declare module 'zen-observable' {
        declare module 'global' {
        declare interface SymbolConstructor {
+observable: Symbol
} 
	declare interface ZenObservable$SubscriptionObserver<T> {
closed: boolean,
next(value: T): void,
error(errorValue: any): void,
complete(): void
} 

declare interface ZenObservable$Subscription {
closed: boolean,
unsubscribe(): void
} 

declare interface ZenObservable$Observer<T> {
start(subscription: ZenObservable$Subscription): any,
next(value: T): void,
error(errorValue: any): void,
complete(): void
} 

declare type ZenObservable$Subscriber<T> = (
observer: ZenObservable$SubscriptionObserver<T>) => void | (() => void) | ZenObservable$Subscription;

declare interface ZenObservable$ObservableLike<T> {
subscribe?: ZenObservable$Subscriber<T>,
undefined(): Observable<T> | ZenObservable$ObservableLike<T>
} 
    }

	declare class Observable<T>  {
constructor(subscriber: ZenObservable$ZenObservable$Subscriber<T>): this;
subscribe(
observer: ZenObservable$ZenObservable$Observer<T>): ZenObservable$ZenObservable$Subscription;
subscribe(
onNext: (value: T) => void,
onError?: (error: any) => void,
onComplete?: () => void): ZenObservable$ZenObservable$Subscription;
undefined(): Observable<T>;
forEach(callback: (value: T) => void): Promise<void>;
map<R>(callback: (value: T) => R): Observable<R>;
filter(callback: (value: T) => boolean): Observable<T>;
reduce(
callback: (previousValue: T, currentValue: T) => T,
initialValue?: T): Observable<T>;
reduce<R>(
callback: (previousValue: R, currentValue: T) => R,
initialValue?: R): Observable<R>;
flatMap<R>(
callback: (value: T) => ZenObservable$ZenObservable$ObservableLike<R>): Observable<R>;
concat<R>(...observable: Array<Observable<R>>): Observable<R>;
static from<R>(
observable: Observable<R> | ZenObservable$ZenObservable$ObservableLike<R> | ArrayLike<R>): Observable<R>;
static of<R>(...items: R[]): Observable<R>
}
	
	declare module.exports: typeof Observable

    }
