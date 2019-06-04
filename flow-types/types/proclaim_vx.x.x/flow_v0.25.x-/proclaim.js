declare module "proclaim" {
  declare export {};

  declare interface AssertionError {
    msg: string;
    actual: any;
    expected: any;
    operator: string;
    stackStartFunction: any;
  }

  /**
   * Throw an assertion error.
   */
  declare export function fail(
    actual: any,
    expected: any,
    msg: string,
    operator: string
  ): AssertionError;

  /**
   * Assert that value is truthy.
   */
  declare export function ok(value: any, msg: string): AssertionError | void;

  /**
   * Assert that value is falsy.
   */
  declare export function notOk(value: any, msg: string): AssertionError | void;

  /**
   * Assert that actual == expected.
   */
  declare export function equal(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual != expected.
   */
  declare export function notEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual === expected.
   */
  declare export function strictEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual !== expected.
   */
  declare export function notStrictEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual is deeply equal to expected.
   */
  declare export function deepEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual is not deeply equal to expected.
   */
  declare export function notDeepEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual is deeply equal to expected, as determined by the strict equality operator ===.
   */
  declare export function deepStrictEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual is not deeply equal to expected, as determined by the strict not equal operator !==.
   */
  declare export function notDeepStrictEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that fn throws an error.
   */
  declare export function throws(
    fn: () => void,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that fn does not throw an error.
   */
  declare export function doesNotThrow(
    fn: () => void,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that typeof actual === expected.
   */
  declare export function isTypeOf(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that typeof actual !== expected.
   */
  declare export function isNotTypeOf(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual instanceof expected.
   */
  declare export function isInstanceOf(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that !(actual instanceof expected).
   */
  declare export function isNotInstanceOf(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is an array.
   */
  declare export function isArray(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is not an array.
   */
  declare export function isNotArray(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is a boolean.
   */
  declare export function isBoolean(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is not a boolean.
   */
  declare export function isNotBoolean(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value === true.
   */
  declare export function isTrue(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value === false.
   */
  declare export function isFalse(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is a function.
   */
  declare export function isFunction(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is not a function.
   */
  declare export function isNotFunction(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is NaN.
   */
  declare export function isNaN(value: any, msg: string): AssertionError | void;

  /**
   * Assert that value is not NaN.
   */
  declare export function isNotNaN(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value === null.
   */
  declare export function isNull(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value !== null.
   */
  declare export function isNotNull(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is a number.
   */
  declare export function isNumber(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is not a number.
   */
  declare export function isNotNumber(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is an object.
   */
  declare export function isObject(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is not an object.
   */
  declare export function isNotObject(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is a string.
   */
  declare export function isString(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value is not a string.
   */
  declare export function isNotString(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value === undefined.
   */
  declare export function isUndefined(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value !== undefined.
   */
  declare export function isDefined(
    value: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual matches the RegExp in expected.
   */
  declare export function match(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual does not match the RegExp in expected.
   */
  declare export function notMatch(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that haystack contains needle.
   */
  declare export function include(
    haystack: any,
    needle: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that haystack does not contain needle.
   */
  declare export function doesNotInclude(
    haystack: any,
    needle: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that value.length === expected.
   */
  declare export function lengthEquals(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual < expected.
   */
  declare export function lessThan(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual <= expected.
   */
  declare export function lessThanOrEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual > expected.
   */
  declare export function greaterThan(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that actual >= expected.
   */
  declare export function greaterThanOrEqual(
    actual: any,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that fn.length === expected.
   */
  declare export function arity(
    fn: () => void,
    expected: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that Math.abs(actual - expected) < (0.5 * Math.pow(10, -precision)).
   */
  declare export function almostEqual(
    actual: any,
    expected: any,
    precision: number,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that obj[property] is not enumerable.
   */
  declare export function isNotEnumerable(
    object: { [key: string]: any },
    property: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that obj[property] is enumerable.
   */
  declare export function isEnumerable(
    object: { [key: string]: any },
    property: any,
    msg: string
  ): AssertionError | void;

  /**
   * Assert that fn.name === expected.
   */
  declare export function hasName(
    fn: () => void,
    expected: any,
    msg: string
  ): AssertionError | void;
}
