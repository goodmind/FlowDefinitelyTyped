declare module "global" {
  declare type Chai$Assertion = {
    afterMoment(expected: string, granularity?: string): void,
    beforeMoment(expected: string, granularity?: string): void,
    sameMoment(expected: string, granularity?: string): void
  } & LanguageChains &
    NumericComparison &
    TypeComparison;

  declare interface Chai$Assert {
    afterMoment(val: any, exp: any, granularity?: any, msg?: any): void;
    beforeMoment(val: any, exp: any, granularity?: any, msg?: any): void;
    sameMoment(val: any, exp: any, granularity?: any, msg?: any): void;
  }
}
declare module "chai-moment" {
  declare function chaiMoment(chai: any, utils: any): void;

  declare export default typeof chaiMoment;
}
