declare type Chai$Assertion = {
  oequal(result: any, method?: string): Equal,
  oeql(result: any, method?: string): Equal,
  oeq(result: any, method?: string): Equal
} & LanguageChains &
  NumericComparison &
  TypeComparison;

declare interface Chai$Assert {
  oequal(act: any, exp: any, method?: string): Equal;
  oeql(act: any, exp: any, method?: string): Equal;
  oeq(act: any, exp: any, method?: string): Equal;
}
declare module "chai-oequal" {
  declare function chaiOequal(chai: any, utils: any): void;

  declare module.exports: typeof chaiOequal;
}
