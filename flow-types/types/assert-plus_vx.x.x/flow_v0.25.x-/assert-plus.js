declare module "assert-plus" {
  import type { Stream } from "stream";

  declare export function array(arr: any[], message?: string): void;

  declare export function bool(bool: boolean, message?: string): void;

  declare export function buffer(buffer: Buffer, message?: string): void;

  declare export function func(func: any, message?: string): void;

  declare export function number(number: number, message?: string): void;

  declare export function finite(finite: number, message?: string): void;

  declare export function object(obj: any, message?: string): void;

  declare export function string(str: string, message?: string): void;

  declare export function stream(stream: Stream, message?: string): void;

  declare export function date(date: Date, message?: string): void;

  declare export function regexp(regexp: RegExp, message?: string): void;

  declare export function uuid(uuid: string, message?: string): void;

  declare export function arrayOfArray(arr: any[][], message?: string): void;

  declare export function arrayOfBool(arr: boolean[], message?: string): void;

  declare export function arrayOfBuffer(arr: Buffer[], message?: string): void;

  declare export function arrayOfFunc(arr: any[], message?: string): void;

  declare export function arrayOfNumber(arr: number[], message?: string): void;

  declare export function arrayOfFinite(arr: number[], message?: string): void;

  declare export function arrayOfObject(arr: any[], message?: string): void;

  declare export function arrayOfString(arr: string[], message?: string): void;

  declare export function arrayOfStream(arr: Stream[], message?: string): void;

  declare export function arrayOfDate(arr: Date[], message?: string): void;

  declare export function arrayOfRegexp(arr: RegExp[], message?: string): void;

  declare export function arrayOfUuid(arr: string[], message?: string): void;

  declare export function optionalArray(
    arr: any[] | void,
    message?: string
  ): void;

  declare export function optionalBool(
    bool: boolean | void,
    message?: string
  ): void;

  declare export function optionalBuffer(
    buffer: Buffer | void,
    message?: string
  ): void;

  declare export function optionalFunc(options: any, message?: string): void;

  declare export function optionalNumber(
    options: number | void,
    message?: string
  ): void;

  declare export function optionalFinite(
    options: number | void,
    message?: string
  ): void;

  declare export function optionalObject(options: any, message?: string): void;

  declare export function optionalString(
    options: string | void,
    message?: string
  ): void;

  declare export function optionalStream(
    options: Stream | void,
    message?: string
  ): void;

  declare export function optionalDate(
    options: Date | void,
    message?: string
  ): void;

  declare export function optionalRegexp(
    options: RegExp | void,
    message?: string
  ): void;

  declare export function optionalUuid(
    options: string | void,
    message?: string
  ): void;

  declare export function optionalArrayOfArray(
    arr: any[][] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfBool(
    arr: boolean[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfBuffer(
    arr: Buffer[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfFunc(
    arr: any[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfNumber(
    arr: number[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfFinite(
    arr: number[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfObject(
    arr: any[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfString(
    arr: string[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfStream(
    arr: Stream[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfDate(
    arr: Date[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfRegexp(
    arr: RegExp[] | void,
    message?: string
  ): void;

  declare export function optionalArrayOfUuid(
    arr: string[] | void,
    message?: string
  ): void;

  declare export function AssertionError(options: any, message?: string): void;

  /**
   * Throws an `AssertionError`. If `message` is falsy, the error message is set
   * as the values of `actual` and `expected` separated by the provided `operator`.
   * Otherwise, the error message is the value of `message`.
   *
   * ```js
   *  * const assert = require('assert');
   *  *
   *  * assert.fail(1, 2, undefined, '>');
   *  * // AssertionError: 1 > 2
   *  *
   *  * assert.fail(1, 2, 'whoops', '>');
   *  * // AssertionError: whoops
   *  * ```
   */
  declare export function fail(
    actual: any,
    expected: any,
    message: any,
    operator: any
  ): void;

  /**
   * Tests if `value` is truthy. It is equivalent to `assert.equal(!!value, true, message)`.
   *
   * If `value` is not truthy, an `AssertionError` is thrown with a `message` property
   * set equal to the value of the `message` parameter.
   * If the `message` parameter is `undefined`, a default error message is assigned.
   *
   * ```js
   *  * const assert = require('assert');
   *  *
   *  * assert.ok(true);
   *  * // OK
   *  * assert.ok(1);
   *  * // OK
   *  * assert.ok(false);
   *  * // throws "AssertionError: false == true"
   *  * assert.ok(0);
   *  * // throws "AssertionError: 0 == true"
   *  * assert.ok(false, 'it\'s false');
   *  * // throws "AssertionError: it's false"
   *  * ```
   */
  declare export function ok(options: any, message?: string): void;

  /**
   * Tests shallow, coercive equality between the actual and expected parameters
   * using the equal comparison operator ( `==` ).
   *
   * ```js
   *  * const assert = require('assert');
   *  *
   *  * assert.equal(1, 1);
   *  * // OK, 1 == 1
   *  * assert.equal(1, '1');
   *  * // OK, 1 == '1'
   *  *
   *  * assert.equal(1, 2);
   *  * // AssertionError: 1 == 2
   *  * assert.equal({a: {b: 1}}, {a: {b: 1}});
   *  * //AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
   *  * ```
   *
   * If the values are not equal, an `AssertionError` is thrown with
   * a `message` property set equal to the value of the `message` parameter.
   * If the `message` parameter is undefined, a default error message is assigned.
   */
  declare export function equal(
    actual: any,
    expected: any,
    message?: string
  ): void;

  /**
   * Tests shallow, coercive inequality with the not equal comparison operator ( `!=` ).
   *
   * ```js
   *  * const assert = require('assert');
   *  *
   *  * assert.notEqual(1, 2);
   *  * // OK
   *  *
   *  * assert.notEqual(1, 1);
   *  * // AssertionError: 1 != 1
   *  *
   *  * assert.notEqual(1, '1');
   *  * // AssertionError: 1 != '1'
   *  * ```
   *
   * If the values are equal, an `AssertionError` is thrown with
   * a `message` property set equal to the value of the `message` parameter.
   * If the `message` parameter is undefined, a default error message is assigned.
   */
  declare export function notEqual(
    actual: any,
    expected: any,
    message?: string
  ): void;

  /**
   * Tests for deep equality between the `actual` and `expected` parameters.
   * Primitive values are compared with the equal comparison operator ( `==` ).
   *
   * Only enumerable "own" properties are considered.
   * The `deepEqual()` implementation does not test object prototypes, attached symbols,
   * or non-enumerable properties. This can lead to some potentially surprising results.
   * For example, the following example does not throw an `AssertionError` because
   * the properties on the Error object are non-enumerable:
   *
   * ```js
   *  * // WARNING: This does not throw an AssertionError!
   *  * assert.deepEqual(Error('a'), Error('b'));
   *  * ```
   *
   * "Deep" equality means that the enumerable "own" properties of child objects are evaluated also.
   *
   * If the values are not equal, an `AssertionError` is thrown with a `message` property
   * set equal to the value of the `message` parameter. If the `message` parameter is undefined,
   * a default error message is assigned.
   */
  declare export function deepEqual<T>(
    actual: T,
    expected: T,
    message?: string
  ): void;

  /**
   * Tests for any deep inequality. Opposite of `assert.deepEqual()`.
   *
   * ```js
   *  * const assert = require('assert');
   *  *
   *  * const obj1 = { a : { b : 1 } };
   *  * const obj2 = { a : { b : 2 } };
   *  * const obj3 = { a : { b : 1 } };
   *  * const obj4 = Object.create(obj1);
   *  *
   *  * assert.notDeepEqual(obj1, obj1);
   *  * // AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
   *  *
   *  * assert.notDeepEqual(obj1, obj2);
   *  * // OK, obj1 and obj2 are not deeply equal
   *  *
   *  * assert.notDeepEqual(obj1, obj3);
   *  * // AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
   *  *
   *  * assert.notDeepEqual(obj1, obj4);
   *  * // OK, obj1 and obj2 are not deeply equal
   *  * ```
   *
   * If the values are deeply equal, an `AssertionError` is thrown with
   * a `message` property set equal to the value of the `message` parameter.
   * If the `message` parameter is undefined, a default error message is assigned.
   */
  declare export function notDeepEqual(
    actual: any,
    expected: any,
    message?: string
  ): void;

  /**
   * Tests strict equality as determined by the strict equality operator ( `===` ).
   *
   * ```js
   *  * const assert = require('assert');
   *  *
   *  * assert.strictEqual(1, 2);
   *  * // AssertionError: 1 === 2
   *  *
   *  * assert.strictEqual(1, 1);
   *  * // OK
   *  *
   *  * assert.strictEqual(1, '1');
   *  * // AssertionError: 1 === '1'
   *  * ```
   *
   * If the values are not strictly equal, an `AssertionError` is thrown with
   * a `message` property set equal to the value of the `message` parameter.
   * If the `message` parameter is undefined, a default error message is assigned.
   */
  declare export function strictEqual<T>(
    actual: T,
    expected: T,
    message?: string
  ): void;

  /**
   * Tests strict inequality as determined by the strict not equal operator ( `!==` ).
   *
   * ```js
   *  * const assert = require('assert');
   *  *
   *  * assert.notStrictEqual(1, 2);
   *  * // OK
   *  *
   *  * assert.notStrictEqual(1, 1);
   *  * // AssertionError: 1 !== 1
   *  *
   *  * assert.notStrictEqual(1, '1');
   *  * // OK
   *  * ```
   *
   * If the values are strictly equal, an `AssertionError` is thrown with a `message` property
   * set equal to the value of the `message` parameter. If the `message` parameter is undefined,
   * a default error message is assigned.
   */
  declare export function notStrictEqual(
    actual: any,
    expected: any,
    message?: string
  ): void;

  declare export function throws(
    block: any,
    error?: any,
    message?: string
  ): void;

  /**
   * Asserts that the function `block` does not throw an error. See `assert.throws()` for more details.
   *
   * When `assert.doesNotThrow()` is called, it will immediately call the `block` function.
   *
   * If an error is thrown and it is the same type as that specified by the `error` parameter,
   * then an `AssertionError` is thrown. If the error is of a different type,
   * or if the `error` parameter is undefined, the error is propagated back to the caller.
   *
   * The following, for instance, will throw the TypeError because there is no matching error type in the assertion:
   * ```js
   *  * assert.doesNotThrow(
   *  *   () => {
   *  *     throw new TypeError('Wrong value');
   *  *   },
   *  *   SyntaxError
   *  * );
   *  * ```
   *
   * However, the following will result in an `AssertionError` with the message 'Got unwanted exception (TypeError)..':
   * ```js
   *  * assert.doesNotThrow(
   *  *   () => {
   *  *     throw new TypeError('Wrong value');
   *  *   },
   *  *   TypeError
   *  * );
   *  * ```
   *
   * If an `AssertionError` is thrown and a value is provided for the `message` parameter,
   * the value of `message` will be appended to the `AssertionError` message:
   * ```js
   *  * assert.doesNotThrow(
   *  *   () => {
   *  *     throw new TypeError('Wrong value');
   *  *   },
   *  *   TypeError,
   *  *   'Whoops'
   *  * );
   *  * // Throws: AssertionError: Got unwanted exception (TypeError). Whoops
   *  * ```
   */
  declare export function doesNotThrow(
    block: any,
    error?: any,
    message?: string
  ): void;

  /**
   * Throws `value` if `value` is truthy. This is useful when testing the `error` argument in callbacks.
   * ```js
   *  * const assert = require('assert');
   *  *
   *  * assert.ifError(0);
   *  * // OK
   *  * assert.ifError(1);
   *  * // Throws 1
   *  * assert.ifError('error');
   *  * // Throws 'error'
   *  * assert.ifError(new Error());
   *  * // Throws Error
   *  * ```
   */
  declare export function ifError(value: any): void;
}
