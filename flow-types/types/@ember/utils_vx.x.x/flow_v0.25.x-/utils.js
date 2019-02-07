declare module "@ember/utils" {
  import type { TypeLookup, KeysOfType, FunctionArgs } from "./-private/types";

  /**
   * Compares two javascript values and returns:
   */
  declare export function compare(v: any, w: any): number;

  /**
   * A value is blank if it is empty or a whitespace string.
   */
  declare export function isBlank(obj?: any): boolean;

  /**
   * Verifies that a value is `null` or an empty string, empty array,
   * or empty function.
   */
  declare export function isEmpty(obj?: any): boolean;

  /**
   * Compares two objects, returning true if they are equal.
   */
  declare export function isEqual(a: any, b: any): boolean;

  /**
   * Returns true if the passed value is null or undefined. This avoids errors
   * from JSLint complaining about use of ==, which can be technically
   * confusing.
   */
  declare export function isNone(obj?: any): boolean;

  /**
   * A value is present if it not `isBlank`.
   */
  declare export function isPresent(obj?: any): boolean;

  /**
   * Checks to see if the `methodName` exists on the `obj`,
   * and if it does, invokes it with the arguments passed.
   */
  declare export function tryInvoke<FNAME: $Keys<T>, T: { [key: string]: any }>(
    obj: T,
    methodName: FNAME,
    args: FunctionArgs<$ElementType<T, FNAME>>
  ): "There was Conditional Type, use $Call utility type";

  declare export function tryInvoke<FNAME: $Keys<T>, T: { [key: string]: any }>(
    obj: T,
    methodName: FNAME
  ): "There was Conditional Type, use $Call utility type";

  declare export function tryInvoke(
    obj: { [key: string]: any },
    methodName: string,
    args?: any[]
  ): void;

  /**
   * Returns a consistent type for the passed object.
   */
  declare export function typeOf<T>(value: T): KeysOfType<TypeLookup, T>;

  declare export function typeOf(): "undefined";

  declare export function typeOf(item: any): string;
}
