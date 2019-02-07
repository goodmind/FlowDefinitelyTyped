declare module "compare-func" {
  declare type extractFunc<T> = (e: T) => number | string;
  declare function compare_func<T>(
    prop?: $ReadOnlyArray<string | extractFunc<T>> | string | extractFunc<T>
  ): (e1: T, e2: T) => number;

  declare module.exports: typeof compare_func;
}
