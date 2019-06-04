declare module "@hapi/boom" {
  declare export default typeof Boom;

  /**
   * boom provides a set of utilities for returning HTTP errors. Each utility returns a Boom error response object (instance of Error) which includes the following properties:
   * @see {@link https://github.com/hapijs/boom#boom}
   */
  declare class Boom<Data = any> mixins Error {
    /**
     * Creates a new Boom object using the provided message and then calling boomify() to decorate the error with the Boom properties.
     */
    constructor(message?: string | Error, options?: Boom$Options<Data>): this;

    /**
     * isBoom - if true, indicates this is a Boom object instance.
     */
    isBoom: boolean;

    /**
     * isServer - convenience bool indicating status code >= 500.
     */
    isServer: boolean;

    /**
     * message - the error message.
     */
    message: string;

    /**
     * output - the formatted response. Can be directly manipulated after object construction to return a custom error response. Allowed root keys:
     */
    output: Boom$Output;

    /**
     * reformat() - rebuilds error.output using the other object properties.
     */
    reformat(): string;

    /**
     * "If message is unset, the 'error' segment of the header will not be present and
     * isMissing will be true on the error object." mentioned in
     * @see {@link https://github.com/hapijs/boom#boomunauthorizedmessage-scheme-attributes}
     */
    isMissing: boolean;

    /**
     * https://github.com/hapijs/boom#createstatuscode-message-data and https://github.com/hapijs/boom/blob/v4.3.0/lib/index.js#L99
     */
    data: Data;
  }
  declare var Boom: typeof npm$namespace$Boom;

  declare var npm$namespace$Boom: {
    boomify: typeof Boom$boomify,
    isBoom: typeof Boom$isBoom,
    badRequest: typeof Boom$badRequest,
    unauthorized: typeof Boom$unauthorized,
    paymentRequired: typeof Boom$paymentRequired,
    forbidden: typeof Boom$forbidden,
    notFound: typeof Boom$notFound,
    methodNotAllowed: typeof Boom$methodNotAllowed,
    notAcceptable: typeof Boom$notAcceptable,
    proxyAuthRequired: typeof Boom$proxyAuthRequired,
    clientTimeout: typeof Boom$clientTimeout,
    conflict: typeof Boom$conflict,
    resourceGone: typeof Boom$resourceGone,
    lengthRequired: typeof Boom$lengthRequired,
    preconditionFailed: typeof Boom$preconditionFailed,
    entityTooLarge: typeof Boom$entityTooLarge,
    uriTooLong: typeof Boom$uriTooLong,
    unsupportedMediaType: typeof Boom$unsupportedMediaType,
    rangeNotSatisfiable: typeof Boom$rangeNotSatisfiable,
    expectationFailed: typeof Boom$expectationFailed,
    teapot: typeof Boom$teapot,
    badData: typeof Boom$badData,
    locked: typeof Boom$locked,
    failedDependency: typeof Boom$failedDependency,
    preconditionRequired: typeof Boom$preconditionRequired,
    tooManyRequests: typeof Boom$tooManyRequests,
    illegal: typeof Boom$illegal,
    badImplementation: typeof Boom$badImplementation,
    internal: typeof Boom$internal,
    notImplemented: typeof Boom$notImplemented,
    badGateway: typeof Boom$badGateway,
    serverUnavailable: typeof Boom$serverUnavailable,
    gatewayTimeout: typeof Boom$gatewayTimeout
  };
  declare interface Boom$Options<Data> {
    /**
     * statusCode - the HTTP status code. Defaults to 500 if no status code is already set.
     */
    statusCode?: number;

    /**
     * data - additional error information (assigned to error.data).
     */
    data?: Data;

    /**
     * decorate - an option with extra properties to set on the error object.
     */
    decorate?: { [key: string]: any };

    /**
     * ctor - constructor reference used to crop the exception call stack output.
     */
    ctor?: any;

    /**
     * message - error message string. If the error already has a message, the provided message is added as a prefix. Defaults to no message.
     */
    message?: string;

    /**
     * override - if false, the err provided is a Boom object, and a statusCode or message are
     * provided, the values are ignored. Defaults to true (apply the provided statusCode and
     * message options to the error regardless of its type, Error or Boom object).
     */
    override?: boolean;
  }

  declare interface Boom$Output {
    /**
     * statusCode - the HTTP status code (typically 4xx or 5xx).
     */
    statusCode: number;

    /**
     * headers - an object containing any HTTP headers where each key is a header name and
     * value is the header content. (Limited value type to string
     * https://github.com/hapijs/boom/issues/151 )
     */
    headers: {
      [index: string]: string
    };

    /**
     * payload - the formatted object used as the response payload (stringified).
     * Can be directly manipulated but any changes will be lost if reformat() is called.
     * Any content allowed and by default includes the following content:
     */
    payload: Boom$Payload;
  }

  declare interface Boom$Payload {
    /**
     * statusCode - the HTTP status code, derived from error.output.statusCode.
     */
    statusCode: number;

    /**
     * error - the HTTP status message (e.g. 'Bad Request', 'Internal Server Error') derived from statusCode.
     */
    error: string;

    /**
     * message - the error message derived from error.message.
     */
    message: string;

    /**
     * "Every key/value pair will be included ... in the response payload under the attributes key."
     * [see docs](https://github.com/hapijs/boom#boomunauthorizedmessage-scheme-attributes)
     */
    attributes?: any;
  }

  /**
   * Decorates an error with the boom properties
   * @param error the error object to wrap. If error is already a boom object, it defaults to overriding the object with the new status code and message.
   * @param options optional additional options
   * @see {@link https://github.com/hapijs/boom#boomifyerror-options}
   */
  declare function Boom$boomify(
    error: Error,
    options?: {
      statusCode?: number,
      message?: string,
      override?: boolean
    }
  ): Boom<null>;

  /**
   * Identifies whether an error is a Boom object. Same as calling instanceof Boom.
   * @param error the error object to identify.
   */
  declare function Boom$isBoom(error: Error): boolean;

  /**
   * Returns a 400 Bad Request error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boombadrequestmessage-data}
   */
  declare function Boom$badRequest<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 401 Unauthorized error
   * @param message optional message.
   * @param scheme can be one of the following:
   * * an authentication scheme name
   * * an array of string values. These values will be separated by ', ' and set to the 'WWW-Authenticate' header.
   * @param attributes an object of values to use while setting the 'WWW-Authenticate' header.
   * This value is only used when scheme is a string, otherwise it is ignored.
   * Every key/value pair will be included in the 'WWW-Authenticate' in the format of
   * 'key="value"' as well as in the response payload under the attributes key.
   * Alternatively value can be a string which is use to set the value of the scheme,
   * for example setting the token value for negotiate header.
   * If string is used message parameter must be null.
   * null and undefined will be replaced with an empty string. If attributes is set,
   * message will be used as the 'error' segment of the 'WWW-Authenticate' header.
   * If message is unset, the 'error' segment of the header will not be present and isMissing will be true on the error object.
   * @see {@link https://github.com/hapijs/boom#boomunauthorizedmessage-scheme-attributes}
   */
  declare function Boom$unauthorized(
    message?: string,
    scheme?: string,
    attributes?: {
      [index: string]: string
    }
  ): Boom<null>;

  declare function Boom$unauthorized(
    message?: string,
    scheme?: string[]
  ): Boom<null>;

  declare function Boom$unauthorized(
    message?: null,
    scheme?: string,
    attributes?:
      | {
          [index: string]: string
        }
      | string
  ): Boom<null>;

  /**
   * Returns a 402 Payment Required error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boompaymentrequiredmessage-data}
   */
  declare function Boom$paymentRequired<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 403 Forbidden error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomforbiddenmessage-data}
   */
  declare function Boom$forbidden<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 404 Not Found error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomnotfoundmessage-data}
   */
  declare function Boom$notFound<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 405 Method Not Allowed error
   * @param message optional message.
   * @param data optional additional error data.
   * @param allow optional string or array of strings (to be combined and separated by ', ') which is set to the 'Allow' header.
   * @see {@link https://github.com/hapijs/boom#boommethodnotallowedmessage-data-allow}
   */
  declare function Boom$methodNotAllowed<Data>(
    message?: string,
    data?: Data,
    allow?: string | string[]
  ): Boom<Data>;

  /**
   * Returns a 406 Not Acceptable error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomnotacceptablemessage-data}
   */
  declare function Boom$notAcceptable<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 407 Proxy Authentication Required error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomproxyauthrequiredmessage-data}
   */
  declare function Boom$proxyAuthRequired<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 408 Request Time-out error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomclienttimeoutmessage-data}
   */
  declare function Boom$clientTimeout<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 409 Conflict error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomconflictmessage-data}
   */
  declare function Boom$conflict<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 410 Gone error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomresourcegonemessage-data}
   */
  declare function Boom$resourceGone<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 411 Length Required error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomlengthrequiredmessage-data}
   */
  declare function Boom$lengthRequired<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 412 Precondition Failed error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boompreconditionfailedmessage-data}
   */
  declare function Boom$preconditionFailed<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 413 Request Entity Too Large error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomentitytoolargemessage-data}
   */
  declare function Boom$entityTooLarge<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 414 Request-URI Too Large error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomuritoolongmessage-data}
   */
  declare function Boom$uriTooLong<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 415 Unsupported Media Type error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomunsupportedmediatypemessage-data}
   */
  declare function Boom$unsupportedMediaType<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 416 Requested Range Not Satisfiable error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomrangenotsatisfiablemessage-data}
   */
  declare function Boom$rangeNotSatisfiable<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 417 Expectation Failed error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomexpectationfailedmessage-data}
   */
  declare function Boom$expectationFailed<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 418 I'm a Teapot error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomteapotmessage-data}
   */
  declare function Boom$teapot<Data>(message?: string, data?: Data): Boom<Data>;

  /**
   * Returns a 422 Unprocessable Entity error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boombaddatamessage-data}
   */
  declare function Boom$badData<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 423 Locked error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomlockedmessage-data}
   */
  declare function Boom$locked<Data>(message?: string, data?: Data): Boom<Data>;

  /**
   * Returns a 424 Failed Dependency error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomfaileddependencymessage-data}
   */
  declare function Boom$failedDependency<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 428 Precondition Required error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boompreconditionrequiredmessage-data}
   */
  declare function Boom$preconditionRequired<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 429 Too Many Requests error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomtoomanyrequestsmessage-data}
   */
  declare function Boom$tooManyRequests<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 451 Unavailable For Legal Reasons error
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomillegalmessage-data}
   */
  declare function Boom$illegal<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 500 Internal Server Error error
   * Only 500 errors will hide your message from the end user. Your message is recorded in the server log.
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boombadimplementationmessage-data---alias-internal}
   */
  declare function Boom$badImplementation<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 500 Internal Server Error error
   * Only 500 errors will hide your message from the end user. Your message is recorded in the server log.
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boombadimplementationmessage-data---alias-internal}
   */
  declare function Boom$internal<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 501 Not Implemented error with your error message to the user
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomnotimplementedmessage-data}
   */
  declare function Boom$notImplemented<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 502 Bad Gateway error with your error message to the user
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boombadgatewaymessage-data}
   */
  declare function Boom$badGateway<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 503 Service Unavailable error with your error message to the user
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomserverunavailablemessage-data}
   */
  declare function Boom$serverUnavailable<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;

  /**
   * Returns a 504 Gateway Time-out error with your error message to the user
   * @param message optional message.
   * @param data optional additional error data.
   * @see {@link https://github.com/hapijs/boom#boomgatewaytimeoutmessage-data}
   */
  declare function Boom$gatewayTimeout<Data>(
    message?: string,
    data?: Data
  ): Boom<Data>;
}
