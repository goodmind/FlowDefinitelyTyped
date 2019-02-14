declare module "cookie_js" {
  declare export default typeof cookie;
}
declare module "cookiejs" {
  declare export default typeof cookie;
}
declare function cookie(key: string, fallback?: string): string;
declare function cookie(keys: string[], fallback?: string): string;
declare interface UtilStatic {
  isArray: (value: any) => boolean;
  isObject: (value: any) => boolean;
  toArray: (...args: any[]) => any[];
  getKeys: (value: {}) => any[];
  encode: (value: string) => string;
  decode: (value: string) => string;
  retrieve: (x: string, y: string) => string;
}
declare interface Options {
  expires: number | string | Date;
  domain: string;
  path: string;
  secure: boolean;
}
declare var npm$namespace$cookie: {
  set: typeof cookie$set,
  remove: typeof cookie$remove,
  removeSpecific: typeof cookie$removeSpecific,
  empty: typeof cookie$empty,
  get: typeof cookie$get,
  all: typeof cookie$all,
  enabled: typeof cookie$enabled,
  utils: typeof cookie$utils,
  defaults: typeof cookie$defaults
};

/**
 * Create a cookie. The value will automatically be escaped.
 */
declare export function cookie$set(
  key: string,
  value: string,
  options?: any
): void;

/**
 * Set several cookies at once
 */
declare export function cookie$set(obj: any, options?: any): void;

/**
 * Remove cookies
 */
declare export function cookie$remove(key: string): void;

declare export function cookie$remove(keys: string[]): void;

declare export function cookie$remove(...args: string[]): void;

/**
 * Remove cookies that were set with custom options (e.g. specifing domain or path)
 */
declare export function cookie$removeSpecific(key: string, options?: any): void;

declare export function cookie$removeSpecific(
  keys: string[],
  options?: any
): void;

/**
 * Remove all cookies
 */
declare export function cookie$empty(): void;

/**
 * Retrieve the value of the cookie
 */
declare export function cookie$get(key: string, fallback?: string): string;

/**
 * Retrieve values of several cookies
 */
declare export function cookie$get(keys: string[], fallback?: string): any;

/**
 * Get all currently saved cookies
 */
declare export function cookie$all(): any;

/**
 * Test if cookies are enabled
 */
declare export function cookie$enabled(): boolean;

/**
 * Utility methods
 */
declare export var cookie$utils: UtilStatic;

/**
 * Set default options
 */
declare export var cookie$defaults: Options;
