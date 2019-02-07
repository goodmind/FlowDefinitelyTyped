declare module "es6-promisify" {
  declare export type Callback<T> = (err: any, arg?: T) => any;
  declare export type CallbackFunction = (...args: any[]) => any;
  declare export type PromiseFunction = (...args: any[]) => Promise<any>;
  declare export function promisify<T>(
    original: (cb: Callback<T>) => any
  ): () => Promise<T>;

  declare export function promisify<T, U>(
    original: (param1: U, cb: Callback<T>) => any
  ): (param1: U) => Promise<T>;

  declare export function promisify<T, U, V>(
    original: (param1: U, param2: V, cb: Callback<T>) => any
  ): (param1: U, param2: V) => Promise<T>;

  declare export function promisify<T, U, V, W>(
    original: (param1: U, param2: V, param3: W, cb: Callback<T>) => any
  ): (param1: U, param2: V, param3: W) => Promise<T>;

  declare export function promisify(
    original: CallbackFunction
  ): PromiseFunction;

  declare var npm$namespace$promisify: {
    argumentNames: typeof promisify$argumentNames,
    Promise: typeof promisify$Promise
  };

  /**
   * This symbol can be placed on the function to be promisified to
   * provide names as an array of strings for the values in a success
   * callback.
   */
  declare var promisify$argumentNames: Symbol;

  /**
   * The user can supply their own Promise implementation by setting it
   * here. Otherwise, the global Promise object will be used.
   */
  declare var promisify$Promise: PromiseConstructor;
}
