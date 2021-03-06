declare interface Rx$Observable<T> {
  delaySubscription(dueTime: number, scheduler?: IScheduler): Rx$Observable<T>;
  delayWithSelector(
    delayDurationSelector: (item: T) => number
  ): Rx$Observable<T>;
  delayWithSelector(
    subscriptionDelay: number,
    delayDurationSelector: (item: T) => number
  ): Rx$Observable<T>;
  timeoutWithSelector<TTimeout>(
    firstTimeout: Rx$Observable<TTimeout>,
    timeoutdurationSelector?: (item: T) => Rx$Observable<TTimeout>,
    other?: Rx$Observable<T>
  ): Rx$Observable<T>;
  debounceWithSelector<TTimeout>(
    debounceDurationSelector: (item: T) => Rx$Observable<TTimeout>
  ): Rx$Observable<T>;

  /**
   * @deprecated use #debounceWithSelector instead.
   */
  throttleWithSelector<TTimeout>(
    debounceDurationSelector: (item: T) => Rx$Observable<TTimeout>
  ): Rx$Observable<T>;
  skipLastWithTime(duration: number, scheduler?: IScheduler): Rx$Observable<T>;
  takeLastWithTime(
    duration: number,
    timerScheduler?: IScheduler,
    loopScheduler?: IScheduler
  ): Rx$Observable<T>;
  takeLastBufferWithTime(
    duration: number,
    scheduler?: IScheduler
  ): Rx$Observable<T[]>;
  takeWithTime(duration: number, scheduler?: IScheduler): Rx$Observable<T>;
  skipWithTime(duration: number, scheduler?: IScheduler): Rx$Observable<T>;
  skipUntilWithTime(startTime: Date, scheduler?: IScheduler): Rx$Observable<T>;
  skipUntilWithTime(duration: number, scheduler?: IScheduler): Rx$Observable<T>;
  takeUntilWithTime(endTime: Date, scheduler?: IScheduler): Rx$Observable<T>;
  takeUntilWithTime(duration: number, scheduler?: IScheduler): Rx$Observable<T>;
  windowWithTime(
    timeSpan: number,
    timeShift: number,
    scheduler?: IScheduler
  ): Rx$Observable<Rx$Observable<T>>;
  windowWithTime(
    timeSpan: number,
    scheduler?: IScheduler
  ): Rx$Observable<Rx$Observable<T>>;
  windowWithTimeOrCount(
    timeSpan: number,
    count: number,
    scheduler?: IScheduler
  ): Rx$Observable<Rx$Observable<T>>;
  bufferWithTime(
    timeSpan: number,
    timeShift: number,
    scheduler?: IScheduler
  ): Rx$Observable<T[]>;
  bufferWithTime(timeSpan: number, scheduler?: IScheduler): Rx$Observable<T[]>;
  bufferWithTimeOrCount(
    timeSpan: number,
    count: number,
    scheduler?: IScheduler
  ): Rx$Observable<T[]>;
}

declare interface Rx$ObservableStatic {
  timer(
    dueTime: Date,
    period: number,
    scheduler?: IScheduler
  ): Rx$Observable<number>;
  timer(dueTime: Date, scheduler?: IScheduler): Rx$Observable<number>;
  generateWithRelativeTime<TState, TResult>(
    initialState: TState,
    condition: (state: TState) => boolean,
    iterate: (state: TState) => TState,
    resultSelector: (state: TState) => TResult,
    timeSelector: (state: TState) => number,
    scheduler?: IScheduler
  ): Rx$Observable<TResult>;
  generateWithAbsoluteTime<TState, TResult>(
    initialState: TState,
    condition: (state: TState) => boolean,
    iterate: (state: TState) => TState,
    resultSelector: (state: TState) => TResult,
    timeSelector: (state: TState) => Date,
    scheduler?: IScheduler
  ): Rx$Observable<TResult>;
}
declare module "rx-lite-time" {
  declare module.exports: typeof Rx;
}
