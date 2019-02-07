declare module "p-every" {
  declare module.exports: typeof pEvery;

  declare function pEvery<T>(
    input: Iterable<PromiseLike<T> | T>,
    testFn: (element: T, index: number) => boolean | Promise<boolean>,
    options?: pEvery$pEvery$Options
  ): Promise<boolean>;

  declare interface pEvery$Options {
    concurrency?: number;
  }
}
