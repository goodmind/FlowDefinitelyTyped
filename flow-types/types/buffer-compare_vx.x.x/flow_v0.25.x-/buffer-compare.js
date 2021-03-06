declare module "buffer-compare" {
  declare interface List {
    [index: number]: any;
    length: number;
  }
  declare function compare(cmp: List, to: List): number;

  declare function compare<T>(cmp: T, to: T): number;

  declare function compare<C, T>(cmp: C, to: T): number;

  declare module.exports: typeof compare;
}
