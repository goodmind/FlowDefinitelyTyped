declare interface Chai$Assertion {
  afterDate(date: Date): Chai$Assertion;
  beforeDate(date: Date): Chai$Assertion;
  equalDate(date: Date): Chai$Assertion;
  withinDate(dateFrom: Date, dateTo: Date): Chai$Assertion;
  afterTime(date: Date): Chai$Assertion;
  beforeTime(date: Date): Chai$Assertion;
  equalTime(date: Date): Chai$Assertion;
  withinTime(dateFrom: Date, dateTo: Date): Chai$Assertion;
}

declare interface Chai$Assert {
  equalTime(val: Date, exp: Date, msg?: string): void;
  notEqualTime(val: Date, exp: Date, msg?: string): void;
  beforeTime(val: Date, exp: Date, msg?: string): void;
  notBeforeTime(val: Date, exp: Date, msg?: string): void;
  afterTime(val: Date, exp: Date, msg?: string): void;
  notAfterTime(val: Date, exp: Date, msg?: string): void;
  withinTime(val: Date, expFrom: Date, expTo: Date, msg?: string): void;
  notWithinTime(val: Date, expFrom: Date, expTo: Date, msg?: string): void;
  equalDate(val: Date, exp: Date, msg?: string): void;
  notEqualDate(val: Date, exp: Date, msg?: string): void;
  beforeDate(val: Date, exp: Date, msg?: string): void;
  notBeforeDate(val: Date, exp: Date, msg?: string): void;
  afterDate(val: Date, exp: Date, msg?: string): void;
  notAfterDate(val: Date, exp: Date, msg?: string): void;
  withinDate(val: Date, expFrom: Date, expTo: Date, msg?: string): void;
  notWithinDate(val: Date, expFrom: Date, expTo: Date, msg?: string): void;
}
declare module "global" {
  declare interface Date {
    should: Chai$Chai$Assertion;
  }
}
declare module "chai-datetime" {
  declare function chaiDateTime(chai: any, utils: any): void;

  declare module.exports: typeof chaiDateTime;
}
