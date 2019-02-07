declare var npm$namespace$Rx: {
  Subject: typeof Rx$Subject,
  AsyncSubject: typeof Rx$AsyncSubject,
  BehaviorSubject: typeof Rx$BehaviorSubject,
  ReplaySubject: typeof Rx$ReplaySubject,
  ConnectableObservable: typeof Rx$ConnectableObservable
};
declare type Rx$ISubject<T> = {
  hasObservers(): boolean
} & Rx$Observable<T> &
  Observer<T> &
  IDisposable;

declare type Rx$Subject<T> = {} & Rx$ISubject<T>;

declare interface Rx$SubjectStatic {
  new<T>(): Rx$Subject<T>;
  create<T>(
    observer?: Observer<T>,
    observable?: Rx$Observable<T>
  ): Rx$ISubject<T>;
}

declare var Rx$Subject: Rx$SubjectStatic;

declare type Rx$AsyncSubject<T> = {} & Rx$Subject<T>;

declare interface Rx$AsyncSubjectStatic {
  new<T>(): Rx$AsyncSubject<T>;
}

declare var Rx$AsyncSubject: Rx$AsyncSubjectStatic;

declare type Rx$BehaviorSubject<T> = {
  getValue(): T
} & Rx$Subject<T>;

declare interface Rx$BehaviorSubjectStatic {
  new<T>(initialValue: T): Rx$BehaviorSubject<T>;
}

declare var Rx$BehaviorSubject: Rx$BehaviorSubjectStatic;

declare type Rx$ReplaySubject<T> = {} & Rx$Subject<T>;

declare interface Rx$ReplaySubjectStatic {
  new<T>(
    bufferSize?: number,
    window?: number,
    scheduler?: IScheduler
  ): Rx$ReplaySubject<T>;
}

declare var Rx$ReplaySubject: Rx$ReplaySubjectStatic;

declare type Rx$ConnectableObservable<T> = {
  connect(): IDisposable,
  refCount(): Rx$Observable<T>
} & Rx$Observable<T>;

declare interface Rx$ConnectableObservableStatic {
  new<T>(): Rx$ConnectableObservable<T>;
}

declare var Rx$ConnectableObservable: Rx$ConnectableObservableStatic;

declare interface Rx$Observable<T> {
  multicast(subject: Rx$Observable<T>): Rx$ConnectableObservable<T>;
  multicast<TResult>(
    subjectSelector: () => Rx$ISubject<T>,
    selector: (source: Rx$ConnectableObservable<T>) => Rx$Observable<T>
  ): Rx$Observable<T>;
  publish(): Rx$ConnectableObservable<T>;
  publish<TResult>(
    selector: (source: Rx$ConnectableObservable<T>) => Rx$Observable<TResult>
  ): Rx$Observable<TResult>;

  /**
   * Returns an observable sequence that shares a single subscription to the underlying sequence.
   * This operator is a specialization of publish which creates a subscription when the number of observers goes from zero to one,
   * then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
   * @example var res = source.share();
   * @returns An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
   */
  share(): Rx$Observable<T>;
  publishLast(): Rx$ConnectableObservable<T>;
  publishLast<TResult>(
    selector: (source: Rx$ConnectableObservable<T>) => Rx$Observable<TResult>
  ): Rx$Observable<TResult>;
  publishValue(initialValue: T): Rx$ConnectableObservable<T>;
  publishValue<TResult>(
    selector: (source: Rx$ConnectableObservable<T>) => Rx$Observable<TResult>,
    initialValue: T
  ): Rx$Observable<TResult>;

  /**
   * Returns an observable sequence that shares a single subscription to the underlying sequence and starts with an initialValue.
   * This operator is a specialization of publishValue which creates a subscription when the number of observers goes from zero to one,
   * then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
   * @example var res = source.shareValue(42);
   * @param initialValue Initial value received by observers upon subscription.
   * @returns An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
   */
  shareValue(initialValue: T): Rx$Observable<T>;
  replay(
    selector?: boolean,
    bufferSize?: number,
    window?: number,
    scheduler?: IScheduler
  ): Rx$ConnectableObservable<T>;
  replay(
    selector: (source: Rx$ConnectableObservable<T>) => Rx$Observable<T>,
    bufferSize?: number,
    window?: number,
    scheduler?: IScheduler
  ): Rx$Observable<T>;
  shareReplay(
    bufferSize?: number,
    window?: number,
    scheduler?: IScheduler
  ): Rx$Observable<T>;
}
declare module "rx-core-binding" {
  declare module.exports: typeof Rx;
}
