declare module "promise-map-limit" {
  declare module.exports: typeof promiseMapLimit;

  declare function promiseMapLimit<T, R>(
    iterable: Iterable<T>,
    concurrency: number,
    iteratee: promiseMapLimit$promiseMapLimit$IIteratee<T, R>
  ): Promise<R[]>;

  declare type promiseMapLimit$IIteratee<T, R> = (value: T) => Promise<R> | R;
}
