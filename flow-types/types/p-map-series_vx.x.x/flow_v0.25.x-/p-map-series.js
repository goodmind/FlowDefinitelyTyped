declare module "p-map-series" {
  declare module.exports: typeof pMapSeries;

  declare function pMapSeries<T, U>(
    input: Iterable<PromiseLike<T> | T>,
    mapper: (htmlParser$element: T, index: number) => PromiseLike<U> | U
  ): OfficeExtension$Promise<U[]>;
}
