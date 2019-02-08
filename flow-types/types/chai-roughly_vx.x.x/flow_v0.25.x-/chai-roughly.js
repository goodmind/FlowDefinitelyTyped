declare type Chai$Roughly = {
  (tolerance?: number): Chai$Assertion
} & Chai$Assertion;

declare type Chai$Assertion = {
  roughly: Chai$Roughly
} & LanguageChains &
  NumericComparison &
  TypeComparison;

declare interface Chai$Assert {
  roughly: Chai$Roughly;
}
declare module "global" {
}
declare module "chai-roughly" {
  declare function chaiRoughly(chai: any, utils: any): void;

  declare module.exports: typeof chaiRoughly;
}
