declare module 'knockout.rx' {
        declare interface KnockoutSubscribableFunctions<T> {
toObservable(event?: string): Rx$Rx$Observable<T>,
toObservable<TEvent>(event: string): Rx$Rx$Observable<TEvent>
} 
	declare interface KnockoutObservableFunctions<T> {
toObservableWithReplyLatest(): Rx$Rx$Observable<T>,
toSubject(): Rx$ISubject<T>
} 
	declare interface KnockoutComputedFunctions<T> {
toObservableWithReplyLatest(): Rx$Rx$Observable<T>
} 
	declare interface Rx$Observable<T> {
toKoSubscribable(): KnockoutSubscribable<T>,
toKoObservable(initialValue?: T): KnockoutObservable<T>
} 

declare interface Rx$Subject<T> {
toKoObservable(initialValue?: T): KnockoutObservable<T>
} 
    }
