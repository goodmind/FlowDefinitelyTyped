declare function expect(target?: any): Expect$Expect$Root;
declare interface Expect$Assertion {
  /**
   * Check if the value is truthy
   */
  ok(): void;

  /**
   * Creates an anonymous function which calls fn with arguments.
   */
  withArgs(...args: any[]): Expect$Root;

  /**
   * Assert that the function throws.
   * @param fn callback to match error string against
   */
  throwError(fn?: (exception: any) => void): void;

  /**
   * Assert that the function throws.
   * @param fn callback to match error string against
   */
  throwException(fn?: (exception: any) => void): void;

  /**
   * Assert that the function throws.
   * @param regexp regexp to match error string against
   */
  throwError(regexp: RegExp): void;

  /**
   * Assert that the function throws.
   * @param fn callback to match error string against
   */
  throwException(regexp: RegExp): void;

  /**
   * Checks if the array is empty.
   */
  empty(): Expect$Assertion;

  /**
   * Checks if the obj exactly equals another.
   */
  equal(obj: any): Expect$Assertion;

  /**
   * Checks if the obj sortof equals another.
   */
  eql(obj: any): Expect$Assertion;

  /**
   * Assert within start to finish (inclusive).
   * @param start
   * @param finish
   */
  within(start: number, finish: number): Expect$Assertion;

  /**
   * Assert typeof.
   */
  a(type: string): Expect$Assertion;

  /**
   * Assert instanceof.
   */
  a(type: Function): Expect$Assertion;

  /**
   * Assert typeof / instanceof.
   */
  an: Expect$An;

  /**
   * Assert numeric value above n.
   */
  greaterThan(n: number): Expect$Assertion;

  /**
   * Assert numeric value above n.
   */
  above(n: number): Expect$Assertion;

  /**
   * Assert numeric value below n.
   */
  lessThan(n: number): Expect$Assertion;

  /**
   * Assert numeric value below n.
   */
  below(n: number): Expect$Assertion;

  /**
   * Assert string value matches regexp.
   * @param regexp
   */
  match(regexp: RegExp): Expect$Assertion;

  /**
   * Assert property "length" exists and has value of n.
   * @param n
   */
  length(n: number): Expect$Assertion;

  /**
   * Assert property name exists, with optional val.
   * @param name
   * @param val
   */
  property(name: string, val?: any): Expect$Assertion;

  /**
   * Assert that string contains str.
   */
  contain(str: string): Expect$Assertion;
  string(str: string): Expect$Assertion;

  /**
   * Assert that the array contains obj.
   */
  contain(obj: any): Expect$Assertion;
  string(obj: any): Expect$Assertion;

  /**
   * Assert exact keys or inclusion of keys by using the `.own` modifier.
   */
  key(keys: string[]): Expect$Assertion;

  /**
   * Assert exact keys or inclusion of keys by using the `.own` modifier.
   */
  key(...keys: string[]): Expect$Assertion;

  /**
   * Assert exact keys or inclusion of keys by using the `.own` modifier.
   */
  keys(keys: string[]): Expect$Assertion;

  /**
   * Assert exact keys or inclusion of keys by using the `.own` modifier.
   */
  keys(...keys: string[]): Expect$Assertion;

  /**
   * Assert a failure.
   */
  fail(message?: string): Expect$Assertion;
}

declare type Expect$Root = {
  not: Expect$Not,
  to: Expect$To,
  only: Expect$Only,
  have: Expect$Have,
  be: Expect$Be
} & Expect$Assertion;

declare type Expect$Be = {
  /**
   * Checks if the obj exactly equals another.
   */
  (obj: any): Expect$Assertion,
  an: Expect$An
} & Expect$Assertion;

declare type Expect$An = {
  /**
   * Assert typeof.
   */
  (type: string): Expect$Assertion,

  /**
   * Assert instanceof.
   */
  (type: Function): Expect$Assertion
} & Expect$Assertion;

declare type Expect$Not = {
  to: Expect$Expect$ToBase
} & Expect$Expect$NotBase;

declare type Expect$NotBase = {
  be: Expect$Be,
  have: Expect$Have,
  include: Expect$Assertion,
  only: Expect$Only
} & Expect$Assertion;

declare type Expect$To = {
  not: Expect$Expect$NotBase
} & Expect$Expect$ToBase;

declare type Expect$ToBase = {
  be: Expect$Be,
  have: Expect$Have,
  include: Expect$Assertion,
  only: Expect$Only
} & Expect$Assertion;

declare type Expect$Only = {
  have: Expect$Have
} & Expect$Assertion;

declare type Expect$Have = {
  own: Expect$Assertion
} & Expect$Assertion;
declare module "expect.js" {
  declare module.exports: typeof expect;
}
