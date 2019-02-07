declare module "json-stable-stringify" {
  declare function stringify(
    obj: any,
    opts?: stringify$stringify$Comparator | stringify$stringify$Options
  ): string;

  declare interface stringify$Element {
    key: string;
    value: any;
  }

  declare type stringify$Comparator = (
    a: stringify$Element,
    b: stringify$Element
  ) => number;

  declare type stringify$Replacer = (key: string, value: any) => any;

  declare interface stringify$Options {
    cmp?: stringify$Comparator;
    space?: number | string;
    replacer?: stringify$Replacer;
  }
  declare module.exports: typeof stringify;
}
