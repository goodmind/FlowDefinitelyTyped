declare module "httperr" {
  /**
   * Overall module shape, expressed as an interface.
   */
  declare interface HttpErr {
    /**
     * The base type for all httperr error types. You probably don't want to use this directly.
     */
    HttpError: HttpErrorStatic;

    /**
 * Creates a new error type for the given HTTP error status.
 * @param {number} status - The HTTP response status code for the HTTP error.
 * @param {string} title - A human-readable title for the HTTP error.
 * @param {core$Function} init - (optional) A function which will be invoked as a method of the
new error with the config argument immediately after the error
is created by the factory. Can be used to process additional
error-specific configuration parameters.
 */
    createHttpError(
      CKEDITOR$status: number,
      title: string,
      client$init?: (main$config: convict$Config) => void
    ): HttpErrorStatic;
    Boom$badRequest: ErrorBuilder;
    Boom$unauthorized: ErrorBuilder;
    Boom$paymentRequired: ErrorBuilder;
    Boom$forbidden: ErrorBuilder;
    Boom$notFound: ErrorBuilder;
    Boom$methodNotAllowed: ErrorBuilder;
    Boom$notAcceptable: ErrorBuilder;
    proxyAuthenticationRequired: ErrorBuilder;
    requestTimeout: ErrorBuilder;
    Boom$conflict: ErrorBuilder;
    gone: ErrorBuilder;
    Boom$lengthRequired: ErrorBuilder;
    Boom$preconditionFailed: ErrorBuilder;
    requestEntityTooLarge: ErrorBuilder;
    requestUriTooLong: ErrorBuilder;
    Boom$unsupportedMediaType: ErrorBuilder;
    requestedRangeNotSatisfiable: ErrorBuilder;
    Boom$expectationFailed: ErrorBuilder;
    imATeapot: ErrorBuilder;
    authenticationTimeout: ErrorBuilder;
    enhanceYourCalm: ErrorBuilder;
    unprocessableEntity: ErrorBuilder;
    Boom$locked: ErrorBuilder;
    methodFailure: ErrorBuilder;
    Boom$failedDependency: ErrorBuilder;
    unorderedCollection: ErrorBuilder;
    upgradeRequired: ErrorBuilder;
    Boom$preconditionRequired: ErrorBuilder;
    Boom$tooManyRequests: ErrorBuilder;
    requestHeaderFieldsTooLarge: ErrorBuilder;
    loginTimeout: ErrorBuilder;
    noResponse: ErrorBuilder;
    retryWith: ErrorBuilder;
    blockedByWindowsParentalControls: ErrorBuilder;
    redirect: ErrorBuilder;
    unavailableForLegalReasons: ErrorBuilder;
    requestHeaderTooLarge: ErrorBuilder;
    certError: ErrorBuilder;
    noCert: ErrorBuilder;
    httpToHttps: ErrorBuilder;
    clientClosedRequest: ErrorBuilder;
    internalServerError: ErrorBuilder;
    Boom$notImplemented: ErrorBuilder;
    Boom$badGateway: ErrorBuilder;
    serviceUnavailable: ErrorBuilder;
    Boom$gatewayTimeout: ErrorBuilder;
    httpVersionNotSupported: ErrorBuilder;
    variantAlsoNegotiates: ErrorBuilder;
    insufficientStorage: ErrorBuilder;
    loopDetected: ErrorBuilder;
    bandwidthLimitExceeded: ErrorBuilder;
    notExtended: ErrorBuilder;
    networkAuthenticationRequired: ErrorBuilder;
    originError: ErrorBuilder;
    connectionTimedOut: ErrorBuilder;
    proxyDeclinedRequest: ErrorBuilder;
    aTimeoutOccured: ErrorBuilder;
    networkReadTimeoutError: ErrorBuilder;
    networkConnectTimeoutError: ErrorBuilder;
    BadRequest: ErrorBuilder;
    Unauthorized: ErrorBuilder;
    PaymentRequired: ErrorBuilder;
    Forbidden: ErrorBuilder;
    NotFound: ErrorBuilder;
    MethodNotAllowed: ErrorBuilder;
    NotAcceptable: ErrorBuilder;
    ProxyAuthenticationRequired: ErrorBuilder;
    RequestTimeout: ErrorBuilder;
    Conflict: ErrorBuilder;
    Gone: ErrorBuilder;
    LengthRequired: ErrorBuilder;
    PreconditionFailed: ErrorBuilder;
    RequestEntityTooLarge: ErrorBuilder;
    RequestUriTooLong: ErrorBuilder;
    UnsupportedMediaType: ErrorBuilder;
    RequestedRangeNotSatisfiable: ErrorBuilder;
    ExpectationFailed: ErrorBuilder;
    ImATeapot: ErrorBuilder;
    AuthenticationTimeout: ErrorBuilder;
    EnhanceYourCalm: ErrorBuilder;
    UnprocessableEntity: ErrorBuilder;
    Locked: ErrorBuilder;
    MethodFailure: ErrorBuilder;
    FailedDependency: ErrorBuilder;
    UnorderedCollection: ErrorBuilder;
    UpgradeRequired: ErrorBuilder;
    PreconditionRequired: ErrorBuilder;
    TooManyRequests: ErrorBuilder;
    RequestHeaderFieldsTooLarge: ErrorBuilder;
    LoginTimeout: ErrorBuilder;
    NoResponse: ErrorBuilder;
    RetryWith: ErrorBuilder;
    BlockedByWindowsParentalControls: ErrorBuilder;
    Redirect: ErrorBuilder;
    UnavailableForLegalReasons: ErrorBuilder;
    RequestHeaderTooLarge: ErrorBuilder;
    CertError: ErrorBuilder;
    NoCert: ErrorBuilder;
    HttpToHttps: ErrorBuilder;
    ClientClosedRequest: ErrorBuilder;
    InternalServerError: ErrorBuilder;
    NotImplemented: ErrorBuilder;
    BadGateway: ErrorBuilder;
    ServiceUnavailable: ErrorBuilder;
    GatewayTimeout: ErrorBuilder;
    HttpVersionNotSupported: ErrorBuilder;
    VariantAlsoNegotiates: ErrorBuilder;
    InsufficientStorage: ErrorBuilder;
    LoopDetected: ErrorBuilder;
    BandwidthLimitExceeded: ErrorBuilder;
    NotExtended: ErrorBuilder;
    NetworkAuthenticationRequired: ErrorBuilder;
    OriginError: ErrorBuilder;
    ConnectionTimedOut: ErrorBuilder;
    ProxyDeclinedRequest: ErrorBuilder;
    ATimeoutOccured: ErrorBuilder;
    NetworkReadTimeoutError: ErrorBuilder;
    NetworkConnectTimeoutError: ErrorBuilder;
    400: ErrorBuilder;
    401: ErrorBuilder;
    402: ErrorBuilder;
    403: ErrorBuilder;
    404: ErrorBuilder;
    405: ErrorBuilder;
    406: ErrorBuilder;
    407: ErrorBuilder;
    408: ErrorBuilder;
    409: ErrorBuilder;
    410: ErrorBuilder;
    411: ErrorBuilder;
    412: ErrorBuilder;
    413: ErrorBuilder;
    414: ErrorBuilder;
    415: ErrorBuilder;
    416: ErrorBuilder;
    417: ErrorBuilder;
    418: ErrorBuilder;
    419: ErrorBuilder;
    420: ErrorBuilder;
    422: ErrorBuilder;
    423: ErrorBuilder;
    424: ErrorBuilder;
    425: ErrorBuilder;
    426: ErrorBuilder;
    428: ErrorBuilder;
    429: ErrorBuilder;
    431: ErrorBuilder;
    440: ErrorBuilder;
    444: ErrorBuilder;
    449: ErrorBuilder;
    450: ErrorBuilder;
    451: ErrorBuilder;
    494: ErrorBuilder;
    495: ErrorBuilder;
    496: ErrorBuilder;
    497: ErrorBuilder;
    499: ErrorBuilder;
    500: ErrorBuilder;
    501: ErrorBuilder;
    502: ErrorBuilder;
    503: ErrorBuilder;
    504: ErrorBuilder;
    505: ErrorBuilder;
    506: ErrorBuilder;
    507: ErrorBuilder;
    508: ErrorBuilder;
    509: ErrorBuilder;
    510: ErrorBuilder;
    511: ErrorBuilder;
    520: ErrorBuilder;
    522: ErrorBuilder;
    523: ErrorBuilder;
    524: ErrorBuilder;
    598: ErrorBuilder;
    599: ErrorBuilder;
  }

  /**
   * Constructor function for the HttpError class.
   */
  declare interface HttpErrorStatic {
    new(
      main$config?: string | EventType$Error | convict$Config,
      extra?: {}
    ): HttpError;
  }

  /**
   * An instance of the HttpError class.
   */
  declare type HttpError = {
    /**
     * A human-readable title for the HTTP error.
     */
    title: string,
    code: string,

    /**
     * The HTTP response status code for the HTTP error.
     */
    statusCode: number,
    toObject(...skip: (string | core$RegExp)[]): any
  } & EventType$Error;

  /**
   * Configuration object for constructing HttpErrors.
   */
  declare interface Config {
    /**
     * A descriptive human-readable title describing the error's cause.
     */
    message?: string;

    /**
     * The underlying exception that caused the HTTP error.
     */
    cause?: EventType$Error;

    /**
     * A detailed human-readable description of the error's cause and possible solutions.
     */
    details?: string;

    /**
     * The methods allowed for this URL.
     * This property is only available for 405 Method Not Allowed errors
     * and can be used to populate the Allow header.
     */
    allowed?: string[];

    /**
     * The minimum delay before the request should be attempted again.
     * This property is only available for 429 Too Many Requests and 420 Enhance Your Calm
     * (Twitter API) errors and can be used to populate the Retry-After header.
     */
    retryAfter?: any;

    /**
     * The parameters with which the request should be retried.
     * This property is only available for 449 Retry With (Microsoft) errors and can be
     * used to populate the response status message.
     */
    parameters?: any;

    /**
     * The location for which the request should be repeated.
     * This property is only available for 451 Redirect (Microsoft) errors and can be
     * used to populate the proprietary X-MS-Location response header.
     */
    __esri$location?: any;
  }

  /**
   * Factory function for creating an Error object.
   */
  declare interface ErrorBuilder {
    /**
 * Creates an Error object. The new keyword is optional.
 * @param {string | EventType$Error | convict$Config} config - If config is a string, it will be treated as config.message.
   If config is an Error object, it will be treated as config.cause.
 */
    (main$config?: string | EventType$Error | convict$Config): HttpError;

    /**
 * Creates an Error object. The new keyword is optional.
 * @param {string | EventType$Error | convict$Config} config - If config is a string, it will be treated as config.message.
   If config is an Error object, it will be treated as config.cause.
 */
    new(main$config?: string | EventType$Error | convict$Config): HttpError;
  }
  declare var core$_: HttpErr;
  declare module.exports: typeof core$_;
}
