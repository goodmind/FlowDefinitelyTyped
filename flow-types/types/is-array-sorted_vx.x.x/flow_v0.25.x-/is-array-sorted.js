declare module "is-array-sorted" {
  declare module.exports: typeof isArraySorted;

  declare function isArraySorted<T>(
    array: $ReadOnlyArray<T>,
    comparator?: (a: T, b: T) => number
  ): boolean;
}
