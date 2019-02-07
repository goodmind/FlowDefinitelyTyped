declare interface Rx$Observable<T> {
  /**
 * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
 * @example var pauser = new Rx.Subject();
var source = Rx.Observable.interval(100).pausable(pauser);
 * @param pauser The observable sequence used to pause the underlying sequence.
 * @returns The observable sequence which is paused based upon the pauser.
 */
  pausable(pauser?: Rx$Observable<boolean>): Rx$PausableObservable<T>;

  /**
 * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
 * and yields the values that were buffered while paused.
 * @example var pauser = new Rx.Subject();
var source = Rx.Observable.interval(100).pausableBuffered(pauser);
 * @param pauser The observable sequence used to pause the underlying sequence.
 * @returns The observable sequence which is paused based upon the pauser.
 */
  pausableBuffered(pauser?: Rx$Observable<boolean>): Rx$PausableObservable<T>;

  /**
 * Attaches a controller to the observable sequence with the ability to queue.
 * @example var source = Rx.Observable.interval(100).controlled();
source.request(3); // Reads 3 values
 */
  controlled(enableQueue?: boolean): Rx$ControlledObservable<T>;
}

declare type Rx$ControlledObservable<T> = {
  request(numberOfItems?: number): IDisposable
} & Rx$Observable<T>;

declare type Rx$PausableObservable<T> = {
  pause(): void,
  resume(): void
} & Rx$Observable<T>;
declare module "rx-lite-backpressure" {
  declare module.exports: typeof Rx;
}
