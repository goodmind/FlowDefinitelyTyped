declare module 'restify-errors' {
        import type {
          VError,vErrorOptions
        } from 'verror';

	declare export type RestifyHttpErrorOptions = {
statusCode?: number,
message?: string,
code?: string,
context?: any
} & vErrorOptions

	declare export class HttpError mixins VError {
constructor(printf: string, ...args: any[]): this;
constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]): this;
constructor(priorErr: any, printf?: string, ...args: any[]): this;
constructor(priorErr: any, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]): this;
message: string;
statusCode: number;
code: string;
body: any;
displayName: string;
toJSON(): any
}
	declare export class DefinedHttpError mixins HttpError {
constructor(): this;
constructor(printf: string, ...args: any[]): this;
constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]): this;
constructor(priorErr: any, printf?: string, ...args: any[]): this;
constructor(priorErr: any, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]): this
}
	declare export type RestifyRestErrorOptions = {
restCode?: string
} & RestifyHttpErrorOptions

	declare export class RestError mixins HttpError {
constructor(printf: string, ...args: any[]): this;
constructor(options: RestifyRestErrorOptions, printf?: string, ...args: any[]): this;
constructor(priorErr: any, printf?: string, ...args: any[]): this;
constructor(priorErr: any, options: RestifyRestErrorOptions, printf?: string, ...args: any[]): this;
restCode: string
}
	declare export class DefinedRestError mixins RestError {
constructor(): this;
constructor(printf: string, ...args: any[]): this;
constructor(options: RestifyHttpErrorOptions, printf?: string, ...args: any[]): this;
constructor(priorErr: any, printf?: string, ...args: any[]): this;
constructor(priorErr: any, options: RestifyHttpErrorOptions, printf?: string, ...args: any[]): this
}
	declare export function makeConstructor(name: string, defaults?: any): void

	declare export function makeErrFromCode(statusCode: number, ...args: any[]): HttpError

	declare export function bunyanSerializer(err: any): any

	declare export class BadRequestError mixins DefinedHttpError {}
	declare export class UnauthorizedError mixins DefinedHttpError {}
	declare export class PaymentRequiredError mixins DefinedHttpError {}
	declare export class ForbiddenError mixins DefinedHttpError {}
	declare export class NotFoundError mixins DefinedHttpError {}
	declare export class MethodNotAllowedError mixins DefinedHttpError {}
	declare export class NotAcceptableError mixins DefinedHttpError {}
	declare export class ProxyAuthenticationRequiredError mixins DefinedHttpError {}
	declare export class RequestTimeoutError mixins DefinedHttpError {}
	declare export class ConflictError mixins DefinedHttpError {}
	declare export class GoneError mixins DefinedHttpError {}
	declare export class LengthRequiredError mixins DefinedHttpError {}
	declare export class PreconditionFailedError mixins DefinedHttpError {}
	declare export class RequestEntityTooLargeError mixins DefinedHttpError {}
	declare export class RequesturiTooLargeError mixins DefinedHttpError {}
	declare export class UnsupportedMediaTypeError mixins DefinedHttpError {}
	declare export class RangeNotSatisfiableError mixins DefinedHttpError {}
	declare export class ExpectationFailedError mixins DefinedHttpError {}
	declare export class ImATeapotError mixins DefinedHttpError {}
	declare export class UnprocessableEntityError mixins DefinedHttpError {}
	declare export class LockedError mixins DefinedHttpError {}
	declare export class FailedDependencyError mixins DefinedHttpError {}
	declare export class UnorderedCollectionError mixins DefinedHttpError {}
	declare export class UpgradeRequiredError mixins DefinedHttpError {}
	declare export class PreconditionRequiredError mixins DefinedHttpError {}
	declare export class TooManyRequestsError mixins DefinedHttpError {}
	declare export class RequestHeaderFieldsTooLargeError mixins DefinedHttpError {}
	declare export class InternalServerError mixins DefinedHttpError {}
	declare export class NotImplementedError mixins DefinedHttpError {}
	declare export class BadGatewayError mixins DefinedHttpError {}
	declare export class ServiceUnavailableError mixins DefinedHttpError {}
	declare export class GatewayTimeoutError mixins DefinedHttpError {}
	declare export class HttpVersionNotSupportedError mixins DefinedHttpError {}
	declare export class VariantAlsoNegotiatesError mixins DefinedHttpError {}
	declare export class InsufficientStorageError mixins DefinedHttpError {}
	declare export class BandwidthLimitExceededError mixins DefinedHttpError {}
	declare export class NotExtendedError mixins DefinedHttpError {}
	declare export class NetworkAuthenticationRequiredError mixins DefinedHttpError {}
	declare export class PayloadTooLargeError mixins DefinedHttpError {}
	declare export class UriTooLongError mixins DefinedHttpError {}
	declare export class MisdirectedRequestError mixins DefinedHttpError {}
	declare export class UnavailableForLegalReasonsError mixins DefinedHttpError {}
	declare export class LoopDetectedError mixins DefinedHttpError {}
	declare export class BadDigestError mixins DefinedRestError {}
	declare export class BadMethodError mixins DefinedRestError {}
	declare export class InternalError mixins DefinedRestError {}
	declare export class InvalidArgumentError mixins DefinedRestError {}
	declare export class InvalidContentError mixins DefinedRestError {}
	declare export class InvalidCredentialsError mixins DefinedRestError {}
	declare export class InvalidHeaderError mixins DefinedRestError {}
	declare export class InvalidVersionError mixins DefinedRestError {}
	declare export class MissingParameterError mixins DefinedRestError {}
	declare export class NotAuthorizedError mixins DefinedRestError {}
	declare export class RequestExpiredError mixins DefinedRestError {}
	declare export class RequestThrottledError mixins DefinedRestError {}
	declare export class ResourceNotFoundError mixins DefinedRestError {}
	declare export class WrongAcceptError mixins DefinedRestError {}
    }
