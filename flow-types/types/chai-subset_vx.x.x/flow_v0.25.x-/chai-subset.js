declare interface Chai$Assertion {
  containSubset(expected: any): Chai$Assertion;
}

declare interface Chai$Assert {
  containSubset(val: any, exp: any, msg?: string): void;
}
declare module "global" {
}
declare module "chai-subset" {
  declare function chaiSubset(chai: any, utils: any): void;

  declare module.exports: typeof chaiSubset;
}
