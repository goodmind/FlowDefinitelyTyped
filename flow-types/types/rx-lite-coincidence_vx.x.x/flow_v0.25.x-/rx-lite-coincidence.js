declare interface Rx$Observable<T> {
  join<TRight, TDurationLeft, TDurationRight, TResult>(
    right: Rx$Observable<TRight>,
    leftDurationSelector: (leftItem: T) => Rx$Observable<TDurationLeft>,
    rightDurationSelector: (rightItem: TRight) => Rx$Observable<TDurationRight>,
    resultSelector: (leftItem: T, rightItem: TRight) => TResult
  ): Rx$Observable<TResult>;
  groupJoin<TRight, TDurationLeft, TDurationRight, TResult>(
    right: Rx$Observable<TRight>,
    leftDurationSelector: (leftItem: T) => Rx$Observable<TDurationLeft>,
    rightDurationSelector: (rightItem: TRight) => Rx$Observable<TDurationRight>,
    resultSelector: (leftItem: T, rightItem: Rx$Observable<TRight>) => TResult
  ): Rx$Observable<TResult>;
  window<TWindowOpening>(
    windowOpenings: Rx$Observable<TWindowOpening>
  ): Rx$Observable<Rx$Observable<T>>;
  window<TWindowClosing>(
    windowClosingSelector: () => Rx$Observable<TWindowClosing>
  ): Rx$Observable<Rx$Observable<T>>;
  window<TWindowOpening, TWindowClosing>(
    windowOpenings: Rx$Observable<TWindowOpening>,
    windowClosingSelector: () => Rx$Observable<TWindowClosing>
  ): Rx$Observable<Rx$Observable<T>>;
  buffer<TBufferOpening>(
    bufferOpenings: Rx$Observable<TBufferOpening>
  ): Rx$Observable<T[]>;
  buffer<TBufferClosing>(
    bufferClosingSelector: () => Rx$Observable<TBufferClosing>
  ): Rx$Observable<T[]>;
  buffer<TBufferOpening, TBufferClosing>(
    bufferOpenings: Rx$Observable<TBufferOpening>,
    bufferClosingSelector: () => Rx$Observable<TBufferClosing>
  ): Rx$Observable<T[]>;

  /**
   * Returns a new observable that triggers on the second and subsequent triggerings of the input observable.
   * The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
   * The argument passed to the N-1th triggering is held in hidden internal state until the Nth triggering occurs.
   * @returns An observable that triggers on successive pairs of observations from the input observable as an array.
   */
  pairwise(): Rx$Observable<T[]>;

  /**
 * Returns two observables which partition the observations of the source by the given function.
 * The first will trigger observations for those values for which the predicate returns true.
 * The second will trigger observations for those values where the predicate returns false.
 * The predicate is executed once for each subscribed observer.
 * Both also propagate all error observations arising from the source and each completes
 * when the source completes.
 * @param predicate The function to determine which output Observable will trigger a particular observation.
 * @returns An array of observables. The first triggers when the predicate returns true,
and the second triggers when the predicate returns false.
 */
  partition(
    predicate: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Array<Rx$Observable<T>>;
}
declare module "rx-lite-coincidence" {
  declare module.exports: typeof Rx;
}
