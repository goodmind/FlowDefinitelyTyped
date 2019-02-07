declare module "array-find-index" {
  declare function arrayFindIndex<T>(
    arr: T[],
    predicate: (element: T, index: number, array: T[]) => boolean
  ): number;

  declare function arrayFindIndex<T, U>(
    arr: T[],
    predicate: (element: T, index: number, array: T[]) => boolean,
    ctx: U
  ): number;

  declare module.exports: typeof arrayFindIndex;
}
