declare module "fast-json-stable-stringify" {
  declare module.exports: typeof stringify;

  declare function stringify(
    obj: any,
    options?: stringify$stringify$Options | stringify$stringify$Comparator
  ): string;

  declare interface stringify$Options {
    cmp?: (
      a: stringify$CompareDescriptor,
      b: stringify$CompareDescriptor
    ) => number;
    cycles?: boolean;
  }

  declare type stringify$Comparator = (
    a: stringify$CompareDescriptor,
    b: stringify$CompareDescriptor
  ) => number;

  declare interface stringify$CompareDescriptor {
    key: string;
    value: any;
  }
}
