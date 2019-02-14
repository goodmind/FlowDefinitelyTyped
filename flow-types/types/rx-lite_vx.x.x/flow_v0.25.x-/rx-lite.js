declare var npm$namespace$Rx: {
  Scheduler: typeof Rx$Scheduler,
  Observer: typeof Rx$Observer,
  Observable: typeof Rx$Observable,

  CompositeDisposable: typeof Rx$CompositeDisposable,
  Disposable: typeof Rx$Disposable,
  SingleAssignmentDisposable: typeof Rx$SingleAssignmentDisposable,
  SerialDisposable: typeof Rx$SerialDisposable,
  RefCountDisposable: typeof Rx$RefCountDisposable,
  Notification: typeof Rx$Notification,
  internals: typeof npm$namespace$Rx$internals,
  config: typeof npm$namespace$Rx$config,
  helpers: typeof npm$namespace$Rx$helpers
};

declare var npm$namespace$Rx$internals: {
  isEqual: typeof Rx$internals$isEqual,
  addRef: typeof Rx$internals$addRef,

  PriorityQueue: typeof Rx$internals$PriorityQueue,
  ScheduledItem: typeof Rx$internals$ScheduledItem
};
declare function Rx$internals$isEqual(left: any, right: any): boolean;

declare function Rx$internals$addRef<T>(
  xs: Rx$Observable<T>,
  r: {
    getDisposable(): IDisposable
  }
): Rx$Observable<T>;

declare class Rx$internals$PriorityQueue<TTime> {
  constructor(capacity: number): this;
  length: number;
  isHigherPriority(left: number, right: number): boolean;
  percolate(index: number): void;
  heapify(index: number): void;
  peek(): internals$ScheduledItem<TTime>;
  removeAt(index: number): void;
  dequeue(): internals$ScheduledItem<TTime>;
  enqueue(item: internals$ScheduledItem<TTime>): void;
  remove(item: internals$ScheduledItem<TTime>): boolean;
  static count: number;
}

declare class Rx$internals$ScheduledItem<TTime> {
  constructor(
    scheduler: Rx$IScheduler,
    state: any,
    action: (scheduler: Rx$IScheduler, state: any) => IDisposable,
    dueTime: TTime,
    comparer?: (x: TTime, y: TTime) => number
  ): this;
  scheduler: Rx$IScheduler;
  state: TTime;
  action: (scheduler: Rx$IScheduler, state: any) => IDisposable;
  dueTime: TTime;
  comparer: (x: TTime, y: TTime) => number;
  disposable: Rx$SingleAssignmentDisposable;
  invoke(): void;
  compareTo(other: Rx$internals$ScheduledItem<TTime>): number;
  isCancelled(): boolean;
  invokeCore(): IDisposable;
}

declare var npm$namespace$Rx$config: {
  useNativeEvents: typeof Rx$config$useNativeEvents
};

/**
 * Configuration option to determine whether to use native events only
 */
declare var Rx$config$useNativeEvents: boolean;

declare var npm$namespace$Rx$helpers: {
  noop: typeof Rx$helpers$noop,
  notDefined: typeof Rx$helpers$notDefined,
  identity: typeof Rx$helpers$identity,
  defaultNow: typeof Rx$helpers$defaultNow,
  defaultComparer: typeof Rx$helpers$defaultComparer,
  defaultSubComparer: typeof Rx$helpers$defaultSubComparer,
  defaultKeySerializer: typeof Rx$helpers$defaultKeySerializer,
  defaultError: typeof Rx$helpers$defaultError,
  isPromise: typeof Rx$helpers$isPromise,
  asArray: typeof Rx$helpers$asArray,
  not: typeof Rx$helpers$not,
  isFunction: typeof Rx$helpers$isFunction
};
declare function Rx$helpers$noop(): void;

declare function Rx$helpers$notDefined(value: any): boolean;

declare function Rx$helpers$identity<T>(value: T): T;

declare function Rx$helpers$defaultNow(): number;

declare function Rx$helpers$defaultComparer(left: any, right: any): boolean;

declare function Rx$helpers$defaultSubComparer(left: any, right: any): number;

declare function Rx$helpers$defaultKeySerializer(key: any): string;

declare function Rx$helpers$defaultError(err: any): void;

declare function Rx$helpers$isPromise(p: any): boolean;

declare function Rx$helpers$asArray<T>(...args: T[]): T[];

declare function Rx$helpers$not(value: any): boolean;

declare function Rx$helpers$isFunction(value: any): boolean;

declare class Rx$CompositeDisposable mixins IDisposable {
  constructor(...disposables: IDisposable[]): this;
  constructor(disposables: IDisposable[]): this;
  isDisposed: boolean;
  length: number;
  dispose(): void;
  add(item: IDisposable): void;
  remove(item: IDisposable): boolean;
  toArray(): IDisposable[];
}

declare class Rx$Disposable mixins IDisposable {
  constructor(action: () => void): this;
  static create(action: () => void): IDisposable;
  static empty: IDisposable;
  dispose(): void;
}

declare class Rx$SingleAssignmentDisposable mixins IDisposable {
  constructor(): this;
  isDisposed: boolean;
  current: IDisposable;
  dispose(): void;
  getDisposable(): IDisposable;
  setDisposable(value: IDisposable): void;
}

declare class Rx$SerialDisposable mixins SingleAssignmentDisposable {
  constructor(): this;
}

declare class Rx$RefCountDisposable mixins IDisposable {
  constructor(disposable: IDisposable): this;
  dispose(): void;
  isDisposed: boolean;
  getDisposable(): IDisposable;
}

declare interface Rx$IScheduler {
  now(): number;
  isScheduler(value: any): boolean;
  schedule(action: () => void): IDisposable;
  scheduleWithState<TState>(
    state: TState,
    action: (scheduler: Rx$IScheduler, state: TState) => IDisposable
  ): IDisposable;
  scheduleWithAbsolute(dueTime: number, action: () => void): IDisposable;
  scheduleWithAbsoluteAndState<TState>(
    state: TState,
    dueTime: number,
    action: (scheduler: Rx$IScheduler, state: TState) => IDisposable
  ): IDisposable;
  scheduleWithRelative(dueTime: number, action: () => void): IDisposable;
  scheduleWithRelativeAndState<TState>(
    state: TState,
    dueTime: number,
    action: (scheduler: Rx$IScheduler, state: TState) => IDisposable
  ): IDisposable;
  scheduleRecursive(action: (action: () => void) => void): IDisposable;
  scheduleRecursiveWithState<TState>(
    state: TState,
    action: (state: TState, action: (state: TState) => void) => void
  ): IDisposable;
  scheduleRecursiveWithAbsolute(
    dueTime: number,
    action: (action: (dueTime: number) => void) => void
  ): IDisposable;
  scheduleRecursiveWithAbsoluteAndState<TState>(
    state: TState,
    dueTime: number,
    action: (
      state: TState,
      action: (state: TState, dueTime: number) => void
    ) => void
  ): IDisposable;
  scheduleRecursiveWithRelative(
    dueTime: number,
    action: (action: (dueTime: number) => void) => void
  ): IDisposable;
  scheduleRecursiveWithRelativeAndState<TState>(
    state: TState,
    dueTime: number,
    action: (
      state: TState,
      action: (state: TState, dueTime: number) => void
    ) => void
  ): IDisposable;
  schedulePeriodic(period: number, action: () => void): IDisposable;
  schedulePeriodicWithState<TState>(
    state: TState,
    period: number,
    action: (state: TState) => TState
  ): IDisposable;
}

declare type Rx$Scheduler = {} & IScheduler;

declare interface Rx$SchedulerStatic {
  new(
    now: () => number,
    schedule: (
      state: any,
      action: (scheduler: Rx$IScheduler, state: any) => IDisposable
    ) => IDisposable,
    scheduleRelative: (
      state: any,
      dueTime: number,
      action: (scheduler: Rx$IScheduler, state: any) => IDisposable
    ) => IDisposable,
    scheduleAbsolute: (
      state: any,
      dueTime: number,
      action: (scheduler: Rx$IScheduler, state: any) => IDisposable
    ) => IDisposable
  ): Rx$Scheduler;
  normalize(timeSpan: number): number;
  immediate: Rx$IScheduler;
  currentThread: Rx$ICurrentThreadScheduler;
  default: Rx$IScheduler;
  timeout: Rx$IScheduler;
}

declare var Rx$Scheduler: Rx$SchedulerStatic;

declare type Rx$ICurrentThreadScheduler = {
  scheduleRequired(): boolean
} & IScheduler;

declare class Rx$Notification<T> {
  accept(observer: Rx$IObserver<T>): void;
  accept<TResult>(
    onNext: (value: T) => TResult,
    onError?: (exception: any) => TResult,
    onCompleted?: () => TResult
  ): TResult;
  toObservable(scheduler?: Rx$IScheduler): Rx$Observable<T>;
  hasValue: boolean;
  equals(other: Rx$Notification<T>): boolean;
  kind: string;
  value: T;
  exception: any;
  static createOnNext<T>(value: T): Rx$Notification<T>;
  static createOnError<T>(exception: any): Rx$Notification<T>;
  static createOnCompleted<T>(): Rx$Notification<T>;
}

declare interface Rx$IObserver<T> {
  onNext(value: T): void;
  onError(exception: any): void;
  onCompleted(): void;
}

declare type Rx$Observer<T> = {
  toNotifier(): (notification: Rx$Notification<T>) => void,
  asObserver(): Rx$Observer<T>
} & IObserver<T>;

declare interface Rx$ObserverStatic {
  create<T>(
    onNext?: (value: T) => void,
    onError?: (exception: any) => void,
    onCompleted?: () => void
  ): Rx$Observer<T>;
  fromNotifier<T>(
    handler: (notification: Rx$Notification<T>, thisArg?: any) => void
  ): Rx$Observer<T>;
}

declare var Rx$Observer: Rx$ObserverStatic;

declare interface Rx$IObservable<T> {
  subscribe(observer: Rx$Observer<T>): IDisposable;
  subscribe(
    onNext?: (value: T) => void,
    onError?: (exception: any) => void,
    onCompleted?: () => void
  ): IDisposable;
  subscribeOnNext(onNext: (value: T) => void, thisArg?: any): IDisposable;
  subscribeOnError(
    onError: (exception: any) => void,
    thisArg?: any
  ): IDisposable;
  subscribeOnCompleted(onCompleted: () => void, thisArg?: any): IDisposable;
}

declare type Rx$Observable<T> = {
  forEach(
    onNext?: (value: T) => void,
    onError?: (exception: any) => void,
    onCompleted?: () => void
  ): IDisposable,
  toArray(): Rx$Observable<T[]>,
  catch(
    handler: (exception: Error) => IPromise<T> | Rx$Observable<T>
  ): Rx$Observable<T>,
  catch(second: Rx$Observable<T>): Rx$Observable<T>,
  catchException(
    handler: (exception: Error) => IPromise<T> | Rx$Observable<T>
  ): Rx$Observable<T>,
  catchException(second: Rx$Observable<T>): Rx$Observable<T>,
  combineLatest<T2>(
    second: Rx$Observable<T2> | IPromise<T2>
  ): Rx$Observable<[T, T2]>,
  combineLatest<T2, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    resultSelector: (v1: T, v2: T2) => TResult
  ): Rx$Observable<TResult>,
  combineLatest<T2, T3>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>
  ): Rx$Observable<[T, T2, T3]>,
  combineLatest<T2, T3, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    resultSelector: (v1: T, v2: T2, v3: T3) => TResult
  ): Rx$Observable<TResult>,
  combineLatest<T2, T3, T4>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>
  ): Rx$Observable<[T, T2, T3, T4]>,
  combineLatest<T2, T3, T4, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
  ): Rx$Observable<TResult>,
  combineLatest<T2, T3, T4, T5>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>
  ): Rx$Observable<[T, T2, T3, T4, T5]>,
  combineLatest<T2, T3, T4, T5, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
  ): Rx$Observable<TResult>,
  combineLatest<TOther, TResult>(
    souces: (Rx$Observable<TOther> | IPromise<TOther>)[],
    resultSelector: (firstValue: T, ...otherValues: TOther[]) => TResult
  ): Rx$Observable<TResult>,
  withLatestFrom<T2>(
    second: Rx$Observable<T2> | IPromise<T2>
  ): Rx$Observable<[T, T2]>,
  withLatestFrom<T2, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    resultSelector: (v1: T, v2: T2) => TResult
  ): Rx$Observable<TResult>,
  withLatestFrom<T2, T3>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>
  ): Rx$Observable<[T, T2, T3]>,
  withLatestFrom<T2, T3, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    resultSelector: (v1: T, v2: T2, v3: T3) => TResult
  ): Rx$Observable<TResult>,
  withLatestFrom<T2, T3, T4>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>
  ): Rx$Observable<[T, T2, T3, T4]>,
  withLatestFrom<T2, T3, T4, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
  ): Rx$Observable<TResult>,
  withLatestFrom<T2, T3, T4, T5>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>
  ): Rx$Observable<[T, T2, T3, T4, T5]>,
  withLatestFrom<T2, T3, T4, T5, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
  ): Rx$Observable<TResult>,
  withLatestFrom<TOther, TResult>(
    souces: (Rx$Observable<TOther> | IPromise<TOther>)[],
    resultSelector: (firstValue: T, ...otherValues: TOther[]) => TResult
  ): Rx$Observable<TResult>,
  concat(...sources: (Rx$Observable<T> | IPromise<T>)[]): Rx$Observable<T>,
  concat(sources: (Rx$Observable<T> | IPromise<T>)[]): Rx$Observable<T>,
  concatAll(): T,
  concatObservable(): Rx$Observable<T>,
  concatMap<T2, R>(
    selector: (value: T, index: number) => Rx$Observable<T2>,
    resultSelector: (value1: T, value2: T2, index: number) => R
  ): Rx$Observable<R>,
  concatMap<T2, R>(
    selector: (value: T, index: number) => IPromise<T2>,
    resultSelector: (value1: T, value2: T2, index: number) => R
  ): Rx$Observable<R>,
  concatMap<R>(
    selector: (value: T, index: number) => Rx$Observable<R>
  ): Rx$Observable<R>,
  concatMap<R>(
    selector: (value: T, index: number) => IPromise<R>
  ): Rx$Observable<R>,
  concatMap<R>(selector: (value: T, index: number) => R[]): Rx$Observable<R>,
  concatMap<R>(sequence: Rx$Observable<R>): Rx$Observable<R>,
  concatMap<R>(sequence: R[]): Rx$Observable<R>,
  merge(maxConcurrent: number): T,
  merge(other: Rx$Observable<T>): Rx$Observable<T>,
  merge(other: IPromise<T>): Rx$Observable<T>,
  mergeAll(): T,
  mergeObservable(): T,
  skipUntil<T2>(other: Rx$Observable<T2>): Rx$Observable<T>,
  skipUntil<T2>(other: IPromise<T2>): Rx$Observable<T>,
  switch(): T,
  switchLatest(): T,
  takeUntil<T2>(other: Rx$Observable<T2>): Rx$Observable<T>,
  takeUntil<T2>(other: IPromise<T2>): Rx$Observable<T>,
  zip<T2>(second: Rx$Observable<T2> | IPromise<T2>): Rx$Observable<[T, T2]>,
  zip<T2, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    resultSelector: (v1: T, v2: T2) => TResult
  ): Rx$Observable<TResult>,
  zip<T2, T3>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>
  ): Rx$Observable<[T, T2, T3]>,
  zip<T2, T3, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    resultSelector: (v1: T, v2: T2, v3: T3) => TResult
  ): Rx$Observable<TResult>,
  zip<T2, T3, T4>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>
  ): Rx$Observable<[T, T2, T3, T4]>,
  zip<T2, T3, T4, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
  ): Rx$Observable<TResult>,
  zip<T2, T3, T4, T5>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>
  ): Rx$Observable<[T, T2, T3, T4, T5]>,
  zip<T2, T3, T4, T5, TResult>(
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
  ): Rx$Observable<TResult>,
  zip<TOther, TResult>(
    second: (Rx$Observable<TOther> | IPromise<TOther>)[],
    resultSelector: (left: T, ...right: TOther[]) => TResult
  ): Rx$Observable<TResult>,
  asObservable(): Rx$Observable<T>,
  dematerialize<TOrigin>(): Rx$Observable<TOrigin>,
  distinctUntilChanged(
    skipParameter: boolean,
    comparer: (x: T, y: T) => boolean
  ): Rx$Observable<T>,
  distinctUntilChanged<TValue>(
    keySelector?: (value: T) => TValue,
    comparer?: (x: TValue, y: TValue) => boolean
  ): Rx$Observable<T>,
  do(observer: Rx$Observer<T>): Rx$Observable<T>,
  do(
    onNext?: (value: T) => void,
    onError?: (exception: Error) => void,
    onCompleted?: () => void
  ): Rx$Observable<T>,
  doAction(observer: Rx$Observer<T>): Rx$Observable<T>,
  doAction(
    onNext?: (value: T) => void,
    onError?: (exception: Error) => void,
    onCompleted?: () => void
  ): Rx$Observable<T>,
  tap(observer: Rx$Observer<T>): Rx$Observable<T>,
  tap(
    onNext?: (value: T) => void,
    onError?: (exception: Error) => void,
    onCompleted?: () => void
  ): Rx$Observable<T>,
  doOnNext(onNext: (value: T) => void, thisArg?: any): Rx$Observable<T>,
  doOnError(onError: (exception: any) => void, thisArg?: any): Rx$Observable<T>,
  doOnCompleted(onCompleted: () => void, thisArg?: any): Rx$Observable<T>,
  tapOnNext(onNext: (value: T) => void, thisArg?: any): Rx$Observable<T>,
  tapOnError(
    onError: (exception: any) => void,
    thisArg?: any
  ): Rx$Observable<T>,
  tapOnCompleted(onCompleted: () => void, thisArg?: any): Rx$Observable<T>,
  finally(action: () => void): Rx$Observable<T>,
  finallyAction(action: () => void): Rx$Observable<T>,
  ignoreElements(): Rx$Observable<T>,
  materialize(): Rx$Observable<Rx$Notification<T>>,
  repeat(repeatCount?: number): Rx$Observable<T>,
  retry(retryCount?: number): Rx$Observable<T>,
  retryWhen<TError>(
    notifier: (errors: Rx$Observable<TError>) => Rx$Observable<any>
  ): Rx$Observable<T>,

  /**
   * Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
   * For aggregation behavior with no intermediate results, see Observable.aggregate.
   * @example var res = source.scan(function (acc, x) { return acc + x; });
   * var res = source.scan(function (acc, x) { return acc + x; }, 0);
   * @param accumulator An accumulator function to be invoked on each element.
   * @param seed The initial accumulator value.
   * @returns An observable sequence containing the accumulated values.
   */
  scan<TAcc>(
    accumulator: (
      acc: TAcc,
      value: T,
      index?: number,
      source?: Rx$Observable<TAcc>
    ) => TAcc,
    seed: TAcc
  ): Rx$Observable<TAcc>,
  scan(
    accumulator: (
      acc: T,
      value: T,
      index?: number,
      source?: Rx$Observable<T>
    ) => T
  ): Rx$Observable<T>,
  skipLast(count: number): Rx$Observable<T>,
  startWith(...values: T[]): Rx$Observable<T>,
  startWith(scheduler: Rx$IScheduler, ...values: T[]): Rx$Observable<T>,
  takeLast(count: number): Rx$Observable<T>,
  takeLastBuffer(count: number): Rx$Observable<T[]>,
  select<TResult>(
    selector: (value: T, index: number, source: Rx$Observable<T>) => TResult,
    thisArg?: any
  ): Rx$Observable<TResult>,
  map<TResult>(
    selector: (value: T, index: number, source: Rx$Observable<T>) => TResult,
    thisArg?: any
  ): Rx$Observable<TResult>,
  pluck<TResult>(prop: string): Rx$Observable<TResult>,
  selectMany<TOther, TResult>(
    selector: (value: T) => Rx$Observable<TOther>,
    resultSelector: (item: T, other: TOther) => TResult
  ): Rx$Observable<TResult>,
  selectMany<TOther, TResult>(
    selector: (value: T) => IPromise<TOther>,
    resultSelector: (item: T, other: TOther) => TResult
  ): Rx$Observable<TResult>,
  selectMany<TResult>(
    selector: (value: T) => Rx$Observable<TResult>
  ): Rx$Observable<TResult>,
  selectMany<TResult>(
    selector: (value: T) => IPromise<TResult>
  ): Rx$Observable<TResult>,
  selectMany<TResult>(other: Rx$Observable<TResult>): Rx$Observable<TResult>,
  selectMany<TResult>(other: IPromise<TResult>): Rx$Observable<TResult>,
  selectMany<TResult>(
    selector: (value: T) => TResult[]
  ): Rx$Observable<TResult>,
  flatMap<TOther, TResult>(
    selector: (value: T) => Rx$Observable<TOther>,
    resultSelector: (item: T, other: TOther) => TResult
  ): Rx$Observable<TResult>,
  flatMap<TOther, TResult>(
    selector: (value: T) => IPromise<TOther>,
    resultSelector: (item: T, other: TOther) => TResult
  ): Rx$Observable<TResult>,
  flatMap<TResult>(
    selector: (value: T) => Rx$Observable<TResult>
  ): Rx$Observable<TResult>,
  flatMap<TResult>(
    selector: (value: T) => IPromise<TResult>
  ): Rx$Observable<TResult>,
  flatMap<TResult>(other: Rx$Observable<TResult>): Rx$Observable<TResult>,
  flatMap<TResult>(other: IPromise<TResult>): Rx$Observable<TResult>,
  flatMap<TResult>(selector: (value: T) => TResult[]): Rx$Observable<TResult>,

  /**
   * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
   * @param onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
   * @param onError A transform function to apply when an error occurs in the source sequence.
   * @param onCompleted A transform function to apply when the end of the source sequence is reached.
   * @param thisArg An optional "this" to use to invoke each transform.
   * @returns An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
   */
  selectManyObserver<T2, T3, T4>(
    onNext: (value: T, index: number) => Rx$Observable<T2>,
    onError: (exception: any) => Rx$Observable<T3>,
    onCompleted: () => Rx$Observable<T4>,
    thisArg?: any
  ): Rx$Observable<T2 | T3 | T4>,

  /**
   * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
   * @param onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
   * @param onError A transform function to apply when an error occurs in the source sequence.
   * @param onCompleted A transform function to apply when the end of the source sequence is reached.
   * @param thisArg An optional "this" to use to invoke each transform.
   * @returns An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
   */
  flatMapObserver<T2, T3, T4>(
    onNext: (value: T, index: number) => Rx$Observable<T2>,
    onError: (exception: any) => Rx$Observable<T3>,
    onCompleted: () => Rx$Observable<T4>,
    thisArg?: any
  ): Rx$Observable<T2 | T3 | T4>,
  selectConcat<T2, R>(
    selector: (value: T, index: number) => Rx$Observable<T2>,
    resultSelector: (value1: T, value2: T2, index: number) => R
  ): Rx$Observable<R>,
  selectConcat<T2, R>(
    selector: (value: T, index: number) => IPromise<T2>,
    resultSelector: (value1: T, value2: T2, index: number) => R
  ): Rx$Observable<R>,
  selectConcat<R>(
    selector: (value: T, index: number) => Rx$Observable<R>
  ): Rx$Observable<R>,
  selectConcat<R>(
    selector: (value: T, index: number) => IPromise<R>
  ): Rx$Observable<R>,
  selectConcat<R>(sequence: Rx$Observable<R>): Rx$Observable<R>,

  /**
   * Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
   * transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
   * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
   * @param thisArg Object to use as this when executing callback.
   * @returns An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
   * and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
   */
  selectSwitch<TResult>(
    selector: (
      value: T,
      index: number,
      source: Rx$Observable<T>
    ) => Rx$Observable<TResult>,
    thisArg?: any
  ): Rx$Observable<TResult>,

  /**
   * Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
   * transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
   * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
   * @param thisArg Object to use as this when executing callback.
   * @returns An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
   * and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
   */
  flatMapLatest<TResult>(
    selector: (
      value: T,
      index: number,
      source: Rx$Observable<T>
    ) => Rx$Observable<TResult>,
    thisArg?: any
  ): Rx$Observable<TResult>,

  /**
   * Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
   * transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
   * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
   * @param thisArg Object to use as this when executing callback.
   * @since 2.2.28
   * @returns An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
   * and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
   */
  switchMap<TResult>(
    selector: (value: T, index: number, source: Rx$Observable<T>) => TResult,
    thisArg?: any
  ): Rx$Observable<TResult>,
  skip(count: number): Rx$Observable<T>,
  skipWhile(
    predicate: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<T>,
  take(count: number, scheduler?: Rx$IScheduler): Rx$Observable<T>,
  takeWhile(
    predicate: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<T>,
  where(
    predicate: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<T>,
  filter(
    predicate: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<T>,

  /**
   * Converts an existing observable sequence to an ES6 Compatible Promise
   * @example var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
   * @param promiseCtor The constructor of the promise.
   * @returns An ES6 compatible promise with the last value from the observable sequence.
   */
  toPromise<TPromise: IPromise<T>>(promiseCtor: {
    new(
      resolver: (
        resolvePromise: (value: T) => void,
        rejectPromise: (reason: any) => void
      ) => void
    ): TPromise
  }): TPromise,

  /**
   * Converts an existing observable sequence to an ES6 Compatible Promise
   * @example var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
   *
   * // With config
   * Rx.config.Promise = RSVP.Promise;
   * var promise = Rx.Observable.return(42).toPromise();
   * @param promiseCtor The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
   * @returns An ES6 compatible promise with the last value from the observable sequence.
   */
  toPromise(promiseCtor?: {
    new(
      resolver: (
        resolvePromise: (value: T) => void,
        rejectPromise: (reason: any) => void
      ) => void
    ): IPromise<T>
  }): IPromise<T>,

  /**
   * Performs a exclusive waiting for the first to finish before subscribing to another observable.
   * Observables that come in between subscriptions will be dropped on the floor.
   * Can be applied on `Observable<Observable<R>>` or `Observable<IPromise<R>>`.
   * @since 2.2.28
   * @returns A exclusive observable with only the results that happen when subscribed.
   */
  exclusive<R>(): Rx$Observable<R>,

  /**
   * Performs a exclusive map waiting for the first to finish before subscribing to another observable.
   * Observables that come in between subscriptions will be dropped on the floor.
   * Can be applied on `Observable<Observable<I>>` or `Observable<IPromise<I>>`.
   * @since 2.2.28
   * @param selector Selector to invoke for every item in the current subscription.
   * @param thisArg An optional context to invoke with the selector parameter.
   * @returns An exclusive observable with only the results that happen when subscribed.
   */
  exclusiveMap<I, R>(
    selector: (value: I, index: number, source: Rx$Observable<I>) => R,
    thisArg?: any
  ): Rx$Observable<R>,
  publish(): Rx$ConnectableObservable<T>,
  delay(dueTime: Date, scheduler?: Rx$IScheduler): Rx$Observable<T>,
  delay(dueTime: number, scheduler?: Rx$IScheduler): Rx$Observable<T>,
  debounce(dueTime: number, scheduler?: Rx$IScheduler): Rx$Observable<T>,
  throttleWithTimeout(
    dueTime: number,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>,

  /**
   * @deprecated use #debounce or #throttleWithTimeout instead.
   */
  throttle(dueTime: number, scheduler?: Rx$IScheduler): Rx$Observable<T>,
  timeInterval(scheduler?: Rx$IScheduler): Rx$Observable<Rx$TimeInterval<T>>,
  timestamp(scheduler?: Rx$IScheduler): Rx$Observable<Rx$Timestamp<T>>,
  sample(interval: number, scheduler?: Rx$IScheduler): Rx$Observable<T>,
  sample<TSample>(
    sampler: Rx$Observable<TSample>,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>,
  timeout(
    dueTime: Date,
    other?: Rx$Observable<T>,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>,
  timeout(
    dueTime: number,
    other?: Rx$Observable<T>,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>
} & IObservable<T>;

declare type Rx$ConnectableObservable<T> = {
  connect(): Rx$Disposable
} & Observable<T>;

declare interface Rx$ObservableStatic {
  create<T>(
    subscribe: (observer: Rx$Observer<T>) => IDisposable
  ): Rx$Observable<T>;
  create<T>(
    subscribe: (observer: Rx$Observer<T>) => () => void
  ): Rx$Observable<T>;
  create<T>(subscribe: (observer: Rx$Observer<T>) => void): Rx$Observable<T>;
  createWithDisposable<T>(
    subscribe: (observer: Rx$Observer<T>) => IDisposable
  ): Rx$Observable<T>;
  defer<T>(observableFactory: () => Rx$Observable<T>): Rx$Observable<T>;
  defer<T>(observableFactory: () => IPromise<T>): Rx$Observable<T>;
  empty<T>(scheduler?: Rx$IScheduler): Rx$Observable<T>;

  /**
   * This method creates a new Observable sequence from an array object.
   * @param array An array-like or iterable object to convert to an Observable sequence.
   * @param mapFn Map function to call on every element of the array.
   * @param thisArg The context to use calling the mapFn if provided.
   * @param scheduler Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
   */
  from<T, TResult>(
    array: T[],
    mapFn: (value: T, index: number) => TResult,
    thisArg?: any,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<TResult>;

  /**
   * This method creates a new Observable sequence from an array object.
   * @param array An array-like or iterable object to convert to an Observable sequence.
   * @param mapFn Map function to call on every element of the array.
   * @param thisArg The context to use calling the mapFn if provided.
   * @param scheduler Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
   */
  from<T>(
    array: T[],
    mapFn?: (value: T, index: number) => T,
    thisArg?: any,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>;

  /**
   * This method creates a new Observable sequence from an array-like object.
   * @param array An array-like or iterable object to convert to an Observable sequence.
   * @param mapFn Map function to call on every element of the array.
   * @param thisArg The context to use calling the mapFn if provided.
   * @param scheduler Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
   */
  from<T, TResult>(
    array: {
      length: number,
      [index: number]: T
    },
    mapFn: (value: T, index: number) => TResult,
    thisArg?: any,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<TResult>;

  /**
   * This method creates a new Observable sequence from an array-like object.
   * @param array An array-like or iterable object to convert to an Observable sequence.
   * @param mapFn Map function to call on every element of the array.
   * @param thisArg The context to use calling the mapFn if provided.
   * @param scheduler Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
   */
  from<T>(
    array: {
      length: number,
      [index: number]: T
    },
    mapFn?: (value: T, index: number) => T,
    thisArg?: any,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>;

  /**
   * This method creates a new Observable sequence from an array-like or iterable object.
   * @param array An array-like or iterable object to convert to an Observable sequence.
   * @param mapFn Map function to call on every element of the array.
   * @param thisArg The context to use calling the mapFn if provided.
   * @param scheduler Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
   */
  from<T>(
    iterable: any,
    mapFn?: (value: any, index: number) => T,
    thisArg?: any,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>;
  fromArray<T>(array: T[], scheduler?: Rx$IScheduler): Rx$Observable<T>;
  fromArray<T>(
    array: {
      length: number,
      [index: number]: T
    },
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>;
  generate<TState, TResult>(
    initialState: TState,
    condition: (state: TState) => boolean,
    iterate: (state: TState) => TState,
    resultSelector: (state: TState) => TResult,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<TResult>;
  never<T>(): Rx$Observable<T>;

  /**
   * This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
   * @example var res = Rx.Observable.of(1, 2, 3);
   * @since 2.2.28
   * @returns The observable sequence whose elements are pulled from the given arguments.
   */
  of<T>(...values: T[]): Rx$Observable<T>;

  /**
   * This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
   * @example var res = Rx.Observable.ofWithScheduler(Rx.Scheduler.timeout, 1, 2, 3);
   * @since 2.2.28
   * @param scheduler A scheduler to use for scheduling the arguments.
   * @returns The observable sequence whose elements are pulled from the given arguments.
   */
  ofWithScheduler<T>(
    scheduler?: Rx$IScheduler,
    ...values: T[]
  ): Rx$Observable<T>;
  range(
    start: number,
    count: number,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<number>;
  repeat<T>(
    value: T,
    repeatCount?: number,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>;
  return<T>(value: T, scheduler?: Rx$IScheduler): Rx$Observable<T>;

  /**
   * @since 2.2.28
   */
  just<T>(value: T, scheduler?: Rx$IScheduler): Rx$Observable<T>;
  returnValue<T>(value: T, scheduler?: Rx$IScheduler): Rx$Observable<T>;
  throw<T>(exception: Error, scheduler?: Rx$IScheduler): Rx$Observable<T>;
  throwException<T>(
    exception: Error,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<T>;
  throwError<T>(error: Error, scheduler?: Rx$IScheduler): Rx$Observable<T>;
  catch<T>(sources: IPromise<T>[] | Rx$Observable<T>[]): Rx$Observable<T>;
  catch<T>(...sources: Rx$Observable<T>[]): Rx$Observable<T>;
  catch<T>(...sources: IPromise<T>[]): Rx$Observable<T>;
  catchException<T>(
    sources: IPromise<T>[] | Rx$Observable<T>[]
  ): Rx$Observable<T>;
  catchException<T>(...sources: Rx$Observable<T>[]): Rx$Observable<T>;
  catchException<T>(...sources: IPromise<T>[]): Rx$Observable<T>;
  catchError<T>(sources: IPromise<T>[] | Rx$Observable<T>[]): Rx$Observable<T>;
  catchError<T>(...sources: Rx$Observable<T>[]): Rx$Observable<T>;
  catchError<T>(...sources: IPromise<T>[]): Rx$Observable<T>;
  combineLatest<T, T2>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>
  ): Rx$Observable<[T, T2]>;
  combineLatest<T, T2, TResult>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    resultSelector: (v1: T, v2: T2) => TResult
  ): Rx$Observable<TResult>;
  combineLatest<T, T2, T3>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>
  ): Rx$Observable<[T, T2, T3]>;
  combineLatest<T, T2, T3, TResult>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    resultSelector: (v1: T, v2: T2, v3: T3) => TResult
  ): Rx$Observable<TResult>;
  combineLatest<T, T2, T3, T4>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>
  ): Rx$Observable<[T, T2, T3, T4]>;
  combineLatest<T, T2, T3, T4, TResult>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
  ): Rx$Observable<TResult>;
  combineLatest<T, T2, T3, T4, T5>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>
  ): Rx$Observable<[T, T2, T3, T4, T5]>;
  combineLatest<T, T2, T3, T4, T5, TResult>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
  ): Rx$Observable<TResult>;
  combineLatest<T>(
    sources: (Rx$Observable<T> | IPromise<T>)[]
  ): Rx$Observable<T[]>;
  combineLatest<TOther, TResult>(
    sources: (Rx$Observable<TOther> | IPromise<TOther>)[],
    resultSelector: (...otherValues: TOther[]) => TResult
  ): Rx$Observable<TResult>;
  withLatestFrom<T, T2>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>
  ): Rx$Observable<[T, T2]>;
  withLatestFrom<T, T2, TResult>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    resultSelector: (v1: T, v2: T2) => TResult
  ): Rx$Observable<TResult>;
  withLatestFrom<T, T2, T3>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>
  ): Rx$Observable<[T, T2, T3]>;
  withLatestFrom<T, T2, T3, TResult>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    resultSelector: (v1: T, v2: T2, v3: T3) => TResult
  ): Rx$Observable<TResult>;
  withLatestFrom<T, T2, T3, T4>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>
  ): Rx$Observable<[T, T2, T3, T4]>;
  withLatestFrom<T, T2, T3, T4, TResult>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
  ): Rx$Observable<TResult>;
  withLatestFrom<T, T2, T3, T4, T5>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>
  ): Rx$Observable<[T, T2, T3, T4, T5]>;
  withLatestFrom<T, T2, T3, T4, T5, TResult>(
    first: Rx$Observable<T> | IPromise<T>,
    second: Rx$Observable<T2> | IPromise<T2>,
    third: Rx$Observable<T3> | IPromise<T3>,
    fourth: Rx$Observable<T4> | IPromise<T4>,
    fifth: Rx$Observable<T5> | IPromise<T5>,
    resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
  ): Rx$Observable<TResult>;
  withLatestFrom<TOther, TResult>(
    souces: (Rx$Observable<TOther> | IPromise<TOther>)[],
    resultSelector: (...otherValues: TOther[]) => TResult
  ): Rx$Observable<TResult>;
  concat<T>(...sources: Rx$Observable<T>[]): Rx$Observable<T>;
  concat<T>(...sources: IPromise<T>[]): Rx$Observable<T>;
  concat<T>(sources: IPromise<T>[] | Rx$Observable<T>[]): Rx$Observable<T>;
  merge<T>(...sources: Rx$Observable<T>[]): Rx$Observable<T>;
  merge<T>(...sources: IPromise<T>[]): Rx$Observable<T>;
  merge<T>(sources: IPromise<T>[] | Rx$Observable<T>[]): Rx$Observable<T>;
  merge<T>(
    scheduler: Rx$IScheduler,
    ...sources: Rx$Observable<T>[]
  ): Rx$Observable<T>;
  merge<T>(
    scheduler: Rx$IScheduler,
    ...sources: IPromise<T>[]
  ): Rx$Observable<T>;
  merge<T>(
    scheduler: Rx$IScheduler,
    sources: IPromise<T>[] | Rx$Observable<T>[]
  ): Rx$Observable<T>;
  pairs<T>(
    obj: {
      [key: string]: T
    },
    scheduler?: Rx$IScheduler
  ): Rx$Observable<[string, T]>;
  zip<T1, T2>(
    first: Rx$Observable<T1> | IPromise<T1>,
    sources:
      | Rx$Observable<T2>
      | IPromise<T2>
      | (Rx$Observable<T2> | IPromise<T2>)[]
  ): Rx$Observable<[T1, T2]>;
  zip<T1, T2, TResult>(
    first: Rx$Observable<T1> | IPromise<T1>,
    sources: (Rx$Observable<T2> | IPromise<T2>)[],
    resultSelector: (item1: T1, ...right: T2[]) => TResult
  ): Rx$Observable<TResult>;
  zip<T1, T2, TResult>(
    source1: Rx$Observable<T1> | IPromise<T1>,
    source2: Rx$Observable<T2> | IPromise<T2>,
    resultSelector: (item1: T1, item2: T2) => TResult
  ): Rx$Observable<TResult>;
  zip<T1, T2, T3>(
    source1: Rx$Observable<T1> | IPromise<T1>,
    source2: Rx$Observable<T2> | IPromise<T2>,
    source3: Rx$Observable<T3> | IPromise<T3>
  ): Rx$Observable<[T1, T2, T3]>;
  zip<T1, T2, T3, TResult>(
    source1: Rx$Observable<T1> | IPromise<T1>,
    source2: Rx$Observable<T2> | IPromise<T2>,
    source3: Rx$Observable<T3> | IPromise<T3>,
    resultSelector: (item1: T1, item2: T2, item3: T3) => TResult
  ): Rx$Observable<TResult>;
  zip<T1, T2, T3, T4>(
    source1: Rx$Observable<T1> | IPromise<T1>,
    source2: Rx$Observable<T2> | IPromise<T2>,
    source3: Rx$Observable<T3> | IPromise<T3>,
    source4: Rx$Observable<T4> | IPromise<T4>
  ): Rx$Observable<[T1, T2, T3, T4]>;
  zip<T1, T2, T3, T4, TResult>(
    source1: Rx$Observable<T1> | IPromise<T1>,
    source2: Rx$Observable<T2> | IPromise<T2>,
    source3: Rx$Observable<T3> | IPromise<T3>,
    source4: Rx$Observable<T4> | IPromise<T4>,
    resultSelector: (item1: T1, item2: T2, item3: T3, item4: T4) => TResult
  ): Rx$Observable<TResult>;
  zip<T1, T2, T3, T4, T5>(
    source1: Rx$Observable<T1> | IPromise<T1>,
    source2: Rx$Observable<T2> | IPromise<T2>,
    source3: Rx$Observable<T3> | IPromise<T3>,
    source4: Rx$Observable<T4> | IPromise<T4>,
    source5: Rx$Observable<T5> | IPromise<T5>
  ): Rx$Observable<[T1, T2, T3, T4, T5]>;
  zip<T1, T2, T3, T4, T5, TResult>(
    source1: Rx$Observable<T1> | IPromise<T1>,
    source2: Rx$Observable<T2> | IPromise<T2>,
    source3: Rx$Observable<T3> | IPromise<T3>,
    source4: Rx$Observable<T4> | IPromise<T4>,
    source5: Rx$Observable<T5> | IPromise<T5>,
    resultSelector: (
      item1: T1,
      item2: T2,
      item3: T3,
      item4: T4,
      item5: T5
    ) => TResult
  ): Rx$Observable<TResult>;
  zipArray<T>(
    ...sources: (Rx$Observable<T> | IPromise<T>)[]
  ): Rx$Observable<T[]>;
  zipArray<T>(sources: (Rx$Observable<T> | IPromise<T>)[]): Rx$Observable<T[]>;

  /**
   * Converts a Promise to an Observable sequence
   * @param promise An ES6 Compliant promise.
   * @returns An Observable sequence which wraps the existing promise success and failure.
   */
  fromPromise<T>(promise: IPromise<T>): Rx$Observable<T>;
  prototype: any;
  fromCallback: {
    <TResult>(
      func: (callback: (result: TResult) => any) => any,
      context?: any
    ): () => Rx$Observable<TResult>,
    <T1, TResult>(
      func: (arg1: T1, callback: (result: TResult) => any) => any,
      context?: any
    ): (arg1: T1) => Rx$Observable<TResult>,
    <T1, T2, TResult>(
      func: (arg1: T1, arg2: T2, callback: (result: TResult) => any) => any,
      context?: any
    ): (arg1: T1, arg2: T2) => Rx$Observable<TResult>,
    <T1, T2, T3, TResult>(
      func: (
        arg1: T1,
        arg2: T2,
        arg3: T3,
        callback: (result: TResult) => any
      ) => any,
      context?: any
    ): (arg1: T1, arg2: T2, arg3: T3) => Rx$Observable<TResult>,
    <TCallbackResult, TResult>(
      func: (callback: Function) => any,
      context: any,
      selector: (args: TCallbackResult[]) => TResult
    ): () => Rx$Observable<TResult>,
    <T1, TCallbackResult, TResult>(
      func: (arg1: T1, callback: Function) => any,
      context: any,
      selector: (args: TCallbackResult[]) => TResult
    ): (arg1: T1) => Rx$Observable<TResult>,
    <T1, T2, TCallbackResult, TResult>(
      func: (arg1: T1, arg2: T2, callback: Function) => any,
      context: any,
      selector: (args: TCallbackResult[]) => TResult
    ): (arg1: T1, arg2: T2) => Rx$Observable<TResult>,
    <T1, T2, T3, TCallbackResult, TResult>(
      func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any,
      context: any,
      selector: (args: TCallbackResult[]) => TResult
    ): (arg1: T1, arg2: T2, arg3: T3) => Rx$Observable<TResult>,
    <TResult>(
      func: (callback: Function) => any,
      context?: any
    ): () => Rx$Observable<TResult>,
    <T1, TResult>(
      func: (arg1: T1, callback: Function) => any,
      context?: any
    ): (arg1: T1) => Rx$Observable<TResult>,
    <T1, T2, TResult>(
      func: (arg1: T1, arg2: T2, callback: Function) => any,
      context?: any
    ): (arg1: T1, arg2: T2) => Rx$Observable<TResult>,
    <T1, T2, T3, TResult>(
      func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any,
      context?: any
    ): (arg1: T1, arg2: T2, arg3: T3) => Rx$Observable<TResult>,
    <TCallbackResult, TResult>(
      func: Function,
      context: any,
      selector: (args: TCallbackResult[]) => TResult
    ): (...args: any[]) => Rx$Observable<TResult>,
    <TResult>(
      func: Function,
      context?: any
    ): (...args: any[]) => Rx$Observable<TResult>
  };
  fromNodeCallback: {
    <T>(
      func: (callback: (err: any, result: T) => any) => any,
      context?: any
    ): () => Rx$Observable<T>,
    <T1, T>(
      func: (arg1: T1, callback: (err: any, result: T) => any) => any,
      context?: any
    ): (arg1: T1) => Rx$Observable<T>,
    <T1, T2, T>(
      func: (arg1: T1, arg2: T2, callback: (err: any, result: T) => any) => any,
      context?: any
    ): (arg1: T1, arg2: T2) => Rx$Observable<T>,
    <T1, T2, T3, T>(
      func: (
        arg1: T1,
        arg2: T2,
        arg3: T3,
        callback: (err: any, result: T) => any
      ) => any,
      context?: any
    ): (arg1: T1, arg2: T2, arg3: T3) => Rx$Observable<T>,
    <TC, TR>(
      func: (callback: Function) => any,
      context: any,
      selector: (results: TC[]) => TR
    ): () => Rx$Observable<TR>,
    <T1, TC, TR>(
      func: (arg1: T1, callback: Function) => any,
      context: any,
      selector: (results: TC[]) => TR
    ): (arg1: T1) => Rx$Observable<TR>,
    <T1, T2, TC, TR>(
      func: (arg1: T1, arg2: T2, callback: Function) => any,
      context: any,
      selector: (results: TC[]) => TR
    ): (arg1: T1, arg2: T2) => Rx$Observable<TR>,
    <T1, T2, T3, TC, TR>(
      func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any,
      context: any,
      selector: (results: TC[]) => TR
    ): (arg1: T1, arg2: T2, arg3: T3) => Rx$Observable<TR>,
    <TR>(
      func: (callback: Function) => any,
      context?: any
    ): () => Rx$Observable<TR>,
    <T1, TR>(
      func: (arg1: T1, callback: Function) => any,
      context?: any
    ): (arg1: T1) => Rx$Observable<TR>,
    <T1, T2, TR>(
      func: (arg1: T1, arg2: T2, callback: Function) => any,
      context?: any
    ): (arg1: T1, arg2: T2) => Rx$Observable<TR>,
    <T1, T2, T3, TR>(
      func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any,
      context?: any
    ): (arg1: T1, arg2: T2, arg3: T3) => Rx$Observable<TR>,
    <TC, T>(
      func: Function,
      context: any,
      selector: (results: TC[]) => T
    ): (...args: any[]) => Rx$Observable<T>,
    <T>(func: Function, context?: any): (...args: any[]) => Rx$Observable<T>
  };
  fromEvent<T>(
    element:
      | ArrayLike<Rx$DOMEventTarget>
      | Rx$DOMEventTarget
      | Rx$NodeEventTarget
      | Rx$NativeEventTarget,
    eventName: string,
    selector?: (...args: any[]) => T
  ): Rx$Observable<T>;
  fromEventPattern<T>(
    addHandler: (handler: Function) => void,
    removeHandler: (handler: Function) => void,
    selector?: (...args: any[]) => T
  ): Rx$Observable<T>;
  interval(period: number, scheduler?: Rx$IScheduler): Rx$Observable<number>;
  interval(
    dutTime: number,
    period: number,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<number>;
  timer(
    dueTime: number,
    period: number,
    scheduler?: Rx$IScheduler
  ): Rx$Observable<number>;
  timer(dueTime: number, scheduler?: Rx$IScheduler): Rx$Observable<number>;
}

declare var Rx$Observable: Rx$ObservableStatic;

declare interface Rx$NodeEventTarget {
  addListener(name: string, cb: (e: any) => any): void;
}

declare interface Rx$NativeEventTarget {
  on(name: string, cb: (e: any) => any): void;
  off(name: string, cb: (e: any) => any): void;
}

declare interface Rx$DOMEventTarget {
  addEventListener(
    type: string,
    listener: (e: any) => any,
    useCapture: boolean
  ): void;
  removeEventListener(
    type: string,
    listener: (e: any) => any,
    useCapture: boolean
  ): void;
}

declare interface Rx$TimeInterval<T> {
  value: T;
  interval: number;
}

declare interface Rx$Timestamp<T> {
  value: T;
  timestamp: number;
}
declare module "rx-lite" {
  declare export default typeof Rx;
}
