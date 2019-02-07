declare module "memoize-one" {
  declare function memoizeOne<T: (...args: any[]) => any>(
    resultFn: T,
    isEqual?: EqualityFn
  ): T;

  declare export type EqualityFn = (a: any, b: any, index: number) => boolean;
  declare export default typeof memoizeOne;
}
