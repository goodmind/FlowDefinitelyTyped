declare module "@hapi/hoek" {
  declare export interface ContainOptions {
    /**
     * Perform a deep comparison of the values?
     */
    deep?: boolean;

    /**
     * Allow only one occurrence of each value?
     */
    once?: boolean;

    /**
     * Don't allow values not explicitly listed?
     */
    only?: boolean;

    /**
     * Allow partial match of the values?
     */
    part?: boolean;
  }
  declare export interface ReachOptions {
    /**
     * String to split chain path on. Defaults to ".".
     */
    separator?: string;

    /**
     * Value to return if the path or value is not present. Default is undefined.
     */
    default?: any;

    /**
     * Throw an error on missing member? Default is false.
     */
    strict?: boolean;

    /**
     * Allow traversing functions for properties?
     */
    functions?: boolean;
  }

  /**
   * Clone an object or an array.
   */
  declare export function clone<T>(obj: T): T;

  /**
   * Clone an object or array.
   */
  declare export function cloneWithShallow(obj: any, keys: string[]): any;

  /**
   * Merge all the properties of source into target.
   */
  declare export function merge<T1, T2>(
    target: T1,
    source: T2,
    isNullOverride?: boolean,
    isMergeArrays?: boolean
  ): T1 & T2;

  /**
   * Apply options to a copy of the defaults.
   */
  declare export function applyToDefaults<T1, T2>(
    defaults: T1,
    options: T2,
    isNullOverride?: boolean
  ): T1 & T2;

  /**
   * Apply options to a copy of the defaults.
   */
  declare export function applyToDefaultsWithShallow<T1, T2>(
    defaults: T1,
    options: T2,
    keys?: string[]
  ): T1 & T2;

  /**
   * Perform a deep comparison of the two values.
   */
  declare export function deepEqual<T>(b: T, a: T, options?: any): T;

  /**
   * Remove duplicate items from Array.
   */
  declare export function unique<T>(array: T[], key?: string): T[];

  /**
   * Convert an Array into an Object.
   */
  declare export function mapToObject(array: any[], key?: string): any;

  /**
   * Find the common unique items in two arrays.
   */
  declare export function intersect(array1: any[], array2: any[]): any;

  /**
   * Test if the reference value contains the provided values.
   */
  declare export function contain(
    ref: any,
    values: any,
    options?: ContainOptions
  ): boolean;

  /**
   * Flatten an array.
   */
  declare export function flatten(array: any[], target?: any[]): any[];

  /**
   * Convert an object key chain string to reference.
   */
  declare export function reach(
    obj: any,
    chain: any,
    options?: ReachOptions
  ): any;

  /**
   * Replace string parameters ({name}) with their corresponding object key values.
   */
  declare export function reachTemplate(
    obj: any,
    template: string,
    options?: ReachOptions
  ): any;

  /**
   * Transform an existing object into a new one based on the supplied obj and transform map.
   */
  declare export function transform(
    obj: any,
    transform: any,
    options?: ReachOptions
  ): any;

  /**
   * Perform a shallow copy by copying the references of all the top level children.
   */
  declare export function shallow(obj: any): any;

  /**
   * Convert an object to string. Any errors are caught and reported back in the form of the returned string.
   */
  declare export function stringify(obj: any): string;

  /**
   * A Timer object.
   */
  declare export class Timer {
    /**
     * The number of milliseconds elapsed since the epoch.
     */
    ts: number;

    /**
     * The time (ms) elapsed since the timer was created.
     */
    elapsed(): number;
  }

  /**
   * Same as Timer, except ts stores the internal node clock.
   */
  declare export class Bench {
    /**
     * The number of milliseconds on the node clock elapsed since the epoch.
     */
    ts: number;

    /**
     * The time (ms) elapsed since the timer was created.
     */
    elapsed(): number;
  }

  /**
   * Encode value of string or buffer type in Base64 or URL encoding.
   */
  declare export function base64urlEncode(value: string): string;

  /**
   * Decode string into Base64 or URL encoding.
   */
  declare export function base64urlDecode(value: string): string;

  /**
   * Escape html characters.
   */
  declare export function escapeHtml(htmlString: string): string;

  /**
   * Escape attribute value for use in HTTP header.
   */
  declare export function escapeHeaderAttribute(attribute: string): string;

  /**
   * Escape string for Regex construction.
   */
  declare export function escapeRegex(regexString: string): string;

  /**
   * Print message or throw error if condition fails.
   */
  declare export function assert(
    condition: boolean,
    message: string | Error
  ): void | Error;

  /**
   * Throw if process.env.NODE_ENV === 'test'. Else display most recent stack and exit process.
   */
  declare export function abort(message: string | Error): void;

  /**
   * Display the trace stack.
   */
  declare export function displayStack(slice?: any): string[];

  /**
   * Return a trace stack array.
   */
  declare export function callStack(slice?: any): any[];

  /**
   * Wrap fn in process.nextTick.
   */
  declare export function nextTick(fn: () => void): () => void;

  /**
   * Make sure fn is only run once.
   */
  declare export function once(fn: () => void): () => void;

  /**
   * A simple no-op function.
   */
  declare export function ignore(): void;

  /**
   * path to prepend to a randomly generated file name.
   */
  declare export function uniqueFilename(
    path: string,
    extension?: string
  ): string;

  /**
   * Check value to see if it is an integer.
   */
  declare export function isInteger(value: any): boolean;
}
