declare module "p-locate" {
  declare module.exports: typeof pLocate;

  declare function pLocate<T>(
    input: Iterable<PromiseLike<T> | T>,
    tester: (element: T) => Promise<boolean> | boolean,
    options?: pLocate$pLocate$Options
  ): Promise<T | void>;

  declare interface pLocate$Options {
    concurrency?: number;
    preserveOrder?: boolean;
  }
}
