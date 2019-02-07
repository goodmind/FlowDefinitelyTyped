declare module "@feathersjs/errors" {
  declare export class FeathersError mixins Error {
    constructor(
      msg: string | Error,
      name: string,
      code: number,
      className: string,
      data: any
    ): this;
  }
  declare export class BadRequest mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class NotAuthenticated mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class PaymentError mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class Forbidden mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class NotFound mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class MethodNotAllowed mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class NotAcceptable mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class Timeout mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class Conflict mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class LengthRequired mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class Unprocessable mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class TooManyRequests mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class GeneralError mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class NotImplemented mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class BadGateway mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export class Unavailable mixins FeathersError {
    constructor(msg?: string | Error, data?: any): this;
  }
  declare export interface Errors {
    FeathersError: FeathersError;
    BadRequest: BadRequest;
    NotAuthenticated: NotAuthenticated;
    PaymentError: PaymentError;
    Forbidden: Forbidden;
    NotFound: NotFound;
    MethodNotAllowed: MethodNotAllowed;
    NotAcceptable: NotAcceptable;
    Timeout: Timeout;
    Conflict: Conflict;
    LengthRequired: LengthRequired;
    Unprocessable: Unprocessable;
    TooManyRequests: TooManyRequests;
    GeneralError: GeneralError;
    NotImplemented: NotImplemented;
    BadGateway: BadGateway;
    Unavailable: Unavailable;
  }
  declare export function convert(error: any): FeathersError;

  declare export var types: Errors;
  declare export var errors: Errors;
}
