declare interface Rx$Observable<T> {
  finalValue(): Rx$Observable<T>;
  aggregate(accumulator: (acc: T, value: T) => T): Rx$Observable<T>;
  aggregate<TAcc>(
    seed: TAcc,
    accumulator: (acc: TAcc, value: T) => TAcc
  ): Rx$Observable<TAcc>;
  reduce(accumulator: (acc: T, value: T) => T): Rx$Observable<T>;
  reduce<TAcc>(
    accumulator: (acc: TAcc, value: T) => TAcc,
    seed: TAcc
  ): Rx$Observable<TAcc>;
  any(
    predicate?: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<boolean>;
  some(
    predicate?: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<boolean>;
  isEmpty(): Rx$Observable<boolean>;
  all(predicate?: (value: T) => boolean, thisArg?: any): Rx$Observable<boolean>;
  every(
    predicate?: (value: T) => boolean,
    thisArg?: any
  ): Rx$Observable<boolean>;
  contains(value: T): Rx$Observable<boolean>;
  contains<TOther>(
    value: TOther,
    comparer: (value1: T, value2: TOther) => boolean
  ): Rx$Observable<boolean>;
  count(
    predicate?: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<number>;
  sum(
    keySelector?: (value: T, index: number, source: Rx$Observable<T>) => number,
    thisArg?: any
  ): Rx$Observable<number>;
  minBy<TKey>(
    keySelector: (item: T) => TKey,
    comparer: (value1: TKey, value2: TKey) => number
  ): Rx$Observable<T>;
  minBy(keySelector: (item: T) => number): Rx$Observable<T>;
  min(comparer?: (value1: T, value2: T) => number): Rx$Observable<T>;
  maxBy<TKey>(
    keySelector: (item: T) => TKey,
    comparer: (value1: TKey, value2: TKey) => number
  ): Rx$Observable<T>;
  maxBy(keySelector: (item: T) => number): Rx$Observable<T>;
  max(comparer?: (value1: T, value2: T) => number): Rx$Observable<number>;
  average(
    keySelector?: (value: T, index: number, source: Rx$Observable<T>) => number,
    thisArg?: any
  ): Rx$Observable<number>;
  sequenceEqual<TOther>(
    second: Rx$Observable<TOther>,
    comparer: (value1: T, value2: TOther) => number
  ): Rx$Observable<boolean>;
  sequenceEqual<TOther>(
    second: IPromise<TOther>,
    comparer: (value1: T, value2: TOther) => number
  ): Rx$Observable<boolean>;
  sequenceEqual(second: Rx$Observable<T>): Rx$Observable<boolean>;
  sequenceEqual(second: IPromise<T>): Rx$Observable<boolean>;
  sequenceEqual<TOther>(
    second: TOther[],
    comparer: (value1: T, value2: TOther) => number
  ): Rx$Observable<boolean>;
  sequenceEqual(second: T[]): Rx$Observable<boolean>;
  elementAt(index: number): Rx$Observable<T>;
  single(
    predicate?: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<T>;
  first(
    predicate?: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<T>;
  last(
    predicate?: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<T>;
  find(
    predicate: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<T>;
  findIndex(
    predicate: (value: T, index: number, source: Rx$Observable<T>) => boolean,
    thisArg?: any
  ): Rx$Observable<number>;
}
declare module "rx-lite-aggregates" {
  declare module.exports: typeof Rx;
}
