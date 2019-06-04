declare module "array-binarysearch.closest" {
  declare function binarySearch(
    arr: $ReadOnlyArray<string>,
    val: string
  ): number;

  declare function binarySearch(
    arr: $ReadOnlyArray<number>,
    val: number
  ): number;

  declare function binarySearch<T>(
    arr: $ReadOnlyArray<T>,
    val: T,
    fn?: null | ((itm: T, val: T, m: any, arr: $ReadOnlyArray<T>) => number),
    ths?: any,
    bgn?: number,
    end?: number
  ): number;

  declare export default typeof binarySearch;
}
