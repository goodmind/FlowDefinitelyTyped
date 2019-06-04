declare module "sc-errors" {
  declare export class AuthTokenExpiredError mixins Error {
    expiry: Date;
    constructor(message: string, expiry: Date): this;
  }
  declare export class AuthTokenInvalidError mixins Error {
    constructor(message: string): this;
  }
  declare export class AuthTokenNotBeforeError mixins Error {
    date: Date;
    constructor(message: string, date: Date): this;
  }
  declare export class AuthTokenError mixins Error {
    constructor(message: string): this;
  }
  declare export class SilentMiddlewareBlockedError mixins Error {
    type: string;
    constructor(message: string, type: string): this;
  }
  declare export class InvalidActionError mixins Error {
    constructor(message: string): this;
  }
  declare export class InvalidArgumentsError mixins Error {
    constructor(message: string): this;
  }
  declare export class InvalidOptionsError mixins Error {
    constructor(message: string): this;
  }
  declare export class InvalidMessageError mixins Error {
    constructor(message: string): this;
  }
  declare export class SocketProtocolError mixins Error {
    code: number;
    constructor(message: string, code: number): this;
  }
  declare export class ServerProtocolError mixins Error {
    constructor(message: string): this;
  }
  declare export class HTTPServerError mixins Error {
    constructor(message: string): this;
  }
  declare export class ResourceLimitError mixins Error {
    constructor(message: string): this;
  }
  declare export class TimeoutError mixins Error {
    constructor(message: string): this;
  }
  declare export class BadConnectionError mixins Error {
    type: string;
    constructor(message: string, type: string): this;
  }
  declare export class BrokerError mixins Error {
    constructor(message: string): this;
  }
  declare export class ProcessExitError mixins Error {
    code: number;
    constructor(message: string, code?: number): this;
  }
  declare export class UnknownError mixins Error {
    constructor(message: string): this;
  }
  declare export interface SocketProtocolErrorStatuses {
    1001: string;
    1002: string;
    1003: string;
    1005: string;
    1006: string;
    1007: string;
    1008: string;
    1009: string;
    1010: string;
    1011: string;
    4000: string;
    4001: string;
    4002: string;
    4003: string;
    4004: string;
    4005: string;
    4006: string;
    4007: string;
    4008: string;
  }
  declare export var socketProtocolErrorStatuses: SocketProtocolErrorStatuses;
  declare export interface SocketProtocolIgnoreStatuses {
    1000: string;
    1001: string;
  }
  declare export var socketProtocolIgnoreStatuses: SocketProtocolIgnoreStatuses;

  /**
   * Convert an error into a JSON-compatible type which can later be hydrated
   * back to its *original* form.
   */
  declare export function dehydrateError(
    error: any,
    includeStackTrace?: boolean
  ): DehydratedError;

  /**
   * Convert a dehydrated error back to its *original* form.
   */
  declare export function hydrateError(error: DehydratedError): any;

  declare export type DehydratedError = any;

  /**
   * Make a deep copy of an object or array, assuring that there is at most
   * one instance of each object or array in the resulting structure. The
   * duplicate references (which might be forming cycles) are replaced with
   * an object of the form
   *       {$ref: PATH}
   * where the PATH is a JSONPath string that locates the first occurance.
   */
  declare export function decycle(object: any): any;
}
