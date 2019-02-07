declare module "p-one" {
  declare module.exports: typeof pOne;

  declare function pOne<T>(
    input: Iterable<PromiseLike<T> | T>,
    testFn: (element: T, index: number) => boolean | Promise<boolean>,
    options?: pOne$pOne$Options
  ): Promise<boolean>;

  declare interface pOne$Options {
    concurrency?: number;
  }
}
