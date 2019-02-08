declare type Chai$Assertion = {
  array(): Chai$Assertion,
  ofSize(size: number): Chai$Assertion,
  equalTo(arr: any[]): Chai$Assertion,
  containing(value: any): Chai$Assertion,
  containingAllOf(values: any[]): Chai$Assertion,
  containingAnyOf(values: any[]): Chai$Assertion,
  sorted(): Chai$Assertion
} & LanguageChains &
  NumericComparison &
  TypeComparison;

declare interface Chai$Assert {
  array(val: any[], msg?: string): void;
  ofSize(val: any[], size: number, msg?: string): void;
  equalTo(val: any[], array: any[], msg?: string): void;
  containing(val: any[], value: any, msg?: string): void;
  containingAllOf(val: any[], values: any[], msg?: string): void;
  containingAnyOf(val: any[], values: any[], msg?: string): void;
  sorted(val: any[], msg?: string): void;
}
declare module "global" {
  declare interface Array<T> {
    should: Chai$Chai$Assertion;
  }
}
declare module "chai-arrays" {
  declare function chaiArrays(chai: any, utils: any): void;

  declare module.exports: typeof chaiArrays;
}
