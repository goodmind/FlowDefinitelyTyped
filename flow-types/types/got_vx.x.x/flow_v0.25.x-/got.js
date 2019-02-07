declare module "got" {
  import type { Url, URL } from "url";

  import typeof * as http from "http";

  import typeof * as https from "https";

  import typeof * as nodeStream from "stream";

  import type { CookieJar } from "tough-cookie";

  declare module.exports: typeof got;

  declare class RequestError mixins StdError {
    name: "RequestError";
  }
  declare class ReadError mixins StdError {
    name: "ReadError";
  }
  declare class ParseError mixins StdError {
    name: "ParseError";
    statusCode: number;
    statusMessage: string;
  }
  declare class HTTPError mixins StdError {
    name: "HTTPError";
    statusCode: number;
    statusMessage: string;
    headers: http.IncomingHttpHeaders;
  }
  declare class MaxRedirectsError mixins StdError {
    name: "MaxRedirectsError";
    statusCode: number;
    statusMessage: string;
    redirectUrls: string[];
  }
  declare class UnsupportedProtocolError mixins StdError {
    name: "UnsupportedProtocolError";
  }
  declare class CancelError mixins StdError {
    name: "CancelError";
  }
  declare class TimeoutError mixins StdError {
    name: "TimeoutError";
  }
  declare class StdError mixins Error {
    code: string;
    host: string;
    hostname: string;
    method: string;
    path: string;
    protocol: string;
    url: string;
    response: any;
  }
  declare var got: got$got$GotFn &
    Record<
      "get" | "post" | "put" | "patch" | "head" | "delete",
      got$got$GotFn
    > & {
      stream: got$got$GotStreamFn &
        Record<
          "get" | "post" | "put" | "patch" | "head" | "delete",
          got$got$GotStreamFn
        >,
      RequestError: typeof RequestError,
      ReadError: typeof ReadError,
      ParseError: typeof ParseError,
      HTTPError: typeof HTTPError,
      MaxRedirectsError: typeof MaxRedirectsError,
      UnsupportedProtocolError: typeof UnsupportedProtocolError,
      CancelError: typeof CancelError,
      TimeoutError: typeof TimeoutError
    };
  declare type InternalRequestOptions = {
    timeout?: any,
    agent?: any
  } & https.RequestOptions;

  declare interface got$GotFn {
    (url: got$GotUrl): got$GotPromise<string>;
    (url: got$GotUrl, options: got$GotJSONOptions): got$GotPromise<any>;
    (
      url: got$GotUrl,
      options: got$GotFormOptions<string>
    ): got$GotPromise<string>;
    (
      url: got$GotUrl,
      options: got$GotFormOptions<null>
    ): got$GotPromise<Buffer>;
    (
      url: got$GotUrl,
      options: got$GotBodyOptions<string>
    ): got$GotPromise<string>;
    (
      url: got$GotUrl,
      options: got$GotBodyOptions<null>
    ): got$GotPromise<Buffer>;
  }

  declare type got$GotStreamFn = (
    url: got$GotUrl,
    options?: got$GotOptions<string | null>
  ) => got$GotEmitter & nodeStream.Duplex;

  declare type got$GotUrl = string | https.RequestOptions | Url | URL;

  /**
   * Hooks allow modifications during the request lifecycle. Hook functions may be async and are
   * run serially.
   * @see https://github.com/sindresorhus/got#hooks
   * @template Request options.
   * @template Response body type.
   */
  declare interface got$Hooks<
    Options,
    Body: Buffer | string | { [key: string]: any }
  > {
    beforeRequest?: Array<got$BeforeRequestHook<Options>>;
    beforeRedirect?: Array<got$BeforeRedirectHook<Options>>;
    beforeRetry?: Array<got$BeforeRetryHook<Options>>;
    afterResponse?: Array<got$AfterResponseHook<Options, Body>>;
  }

  /**
   * @param options Normalized request options.
   */
  declare type got$BeforeRequestHook<Options> = (options: Options) => any;

  /**
   * @param options Normalized request options.
   */
  declare type got$BeforeRedirectHook<Options> = (options: Options) => any;

  /**
   * @param options Normalized request options.
   * @param error Request error.
   * @param retryCount Number of retry.
   */
  declare type got$BeforeRetryHook<Options> = (
    options: Options,
    error: got$GotError,
    retryCount: number
  ) => any;

  /**
   * @param response Response object.
   * @param retryWithMergedOptions Retries request with the updated options.
   */
  declare type got$AfterResponseHook<
    Options,
    Body: Buffer | string | { [key: string]: any }
  > = (
    response: got$Response<Body>,
    retryWithMergedOptions: (updateOptions: Options) => got$GotPromise<Body>
  ) => got$Response<Body> | Promise<got$Response<Body>>;

  declare type got$GotBodyOptions<E: string | null> = {
    body?: string | Buffer | nodeStream.Readable,
    hooks?: got$Hooks<
      got$GotBodyOptions<E>,
      string | Buffer | nodeStream.Readable
    >
  } & got$GotOptions<E>;

  declare type got$GotJSONOptions = {
    body?: { [key: string]: any },
    form?: boolean,
    json: true,
    hooks?: got$Hooks<got$GotJSONOptions, { [key: string]: any }>
  } & got$GotOptions<string | null>;

  declare type got$GotFormOptions<E: string | null> = {
    body?: Record<string, any>,
    form: true,
    json?: boolean,
    hooks?: got$Hooks<got$GotFormOptions<E>, Record<string, any>>
  } & got$GotOptions<E>;

  declare type got$GotOptions<E: string | null> = {
    baseUrl?: string,
    cookieJar?: CookieJar,
    encoding?: E,
    query?: string | { [key: string]: any },
    timeout?: number | got$TimeoutOptions,
    retry?: number | got$RetryOptions,
    followRedirect?: boolean,
    decompress?: boolean,
    useElectronNet?: boolean,
    throwHttpErrors?: boolean,
    agent?: http.Agent | boolean | got$AgentOptions,
    cache?: got$Cache
  } & InternalRequestOptions;

  /**
   * Contains properties to constrain the duration of each phase of the request lifecycle.
   * @see https://github.com/sindresorhus/got#timeout
   */
  declare interface got$TimeoutOptions {
    /**
     * Starts when a socket is assigned and ends when the hostname has been resolved. Does not
     * apply when using a Unix domain socket.
     */
    lookup?: number;

    /**
     * Starts when `lookup` completes (or when the socket is assigned if lookup does not apply
     * to the request) and ends when the socket is connected.
     */
    connect?: number;

    /**
     * Starts when `connect` completes and ends when the handshaking process completes (HTTPS
     * only).
     */
    secureConnect?: number;

    /**
     * Starts when the socket is connected. See [request.setTimeout](https://nodejs.org/api/http.html#http_request_settimeout_timeout_callback).
     */
    socket?: number;

    /**
     * Starts when the request has been written to the socket and ends when the response headers
     * are received.
     */
    response?: number;

    /**
     * Starts when the socket is connected and ends with the request has been written to the
     * socket.
     */
    send?: number;

    /**
     * Starts when the request is initiated and ends when the response's end event fires.
     */
    request?: number;
  }

  declare type got$RetryFunction = (retry: number, error: any) => number;

  declare interface got$RetryOptions {
    retries?: number | got$RetryFunction;
    methods?: Array<"GET" | "PUT" | "HEAD" | "DELETE" | "OPTIONS" | "TRACE">;
    statusCodes?: Array<408 | 413 | 429 | 500 | 502 | 503 | 504>;
    maxRetryAfter?: number;

    /**
     * Allowed error codes.
     */
    errorCodes?: string[];
  }

  declare interface got$AgentOptions {
    http: http.Agent;
    https: https.Agent;
  }

  declare interface got$Cache {
    set(key: string, value: any, ttl?: number): any;
    get(key: string): any;
    delete(key: string): any;
  }

  declare type got$Response<B: Buffer | string | { [key: string]: any }> = {
    body: B,
    url: string,
    requestUrl: string,
    fromCache: boolean,
    redirectUrls?: string[]
  } & http.IncomingMessage;

  declare type got$GotPromise<
    B: Buffer | string | { [key: string]: any }
  > = Promise<got$Response<B>> & {
    cancel(): void
  };

  declare interface got$GotEmitter {
    addListener(
      event: "request",
      listener: (req: http.ClientRequest) => void
    ): this;
    addListener(
      event: "response",
      listener: (res: http.IncomingMessage) => void
    ): this;
    addListener(
      event: "redirect",
      listener: (
        res: http.IncomingMessage,
        nextOptions: got$GotOptions<string | null> & Url
      ) => void
    ): this;
    addListener(
      event: "error",
      listener: (
        error: got$GotError,
        body?: any,
        res?: http.IncomingMessage
      ) => void
    ): this;
    addListener(
      event: "downloadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    addListener(
      event: "uploadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    on(event: "request", listener: (req: http.ClientRequest) => void): this;
    on(event: "response", listener: (res: http.IncomingMessage) => void): this;
    on(
      event: "redirect",
      listener: (
        res: http.IncomingMessage,
        nextOptions: got$GotOptions<string | null> & Url
      ) => void
    ): this;
    on(
      event: "error",
      listener: (
        error: got$GotError,
        body?: any,
        res?: http.IncomingMessage
      ) => void
    ): this;
    on(
      event: "downloadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    on(
      event: "uploadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    once(event: "request", listener: (req: http.ClientRequest) => void): this;
    once(
      event: "response",
      listener: (res: http.IncomingMessage) => void
    ): this;
    once(
      event: "redirect",
      listener: (
        res: http.IncomingMessage,
        nextOptions: got$GotOptions<string | null> & Url
      ) => void
    ): this;
    once(
      event: "error",
      listener: (
        error: got$GotError,
        body?: any,
        res?: http.IncomingMessage
      ) => void
    ): this;
    once(
      event: "downloadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    once(
      event: "uploadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    prependListener(
      event: "request",
      listener: (req: http.ClientRequest) => void
    ): this;
    prependListener(
      event: "response",
      listener: (res: http.IncomingMessage) => void
    ): this;
    prependListener(
      event: "redirect",
      listener: (
        res: http.IncomingMessage,
        nextOptions: got$GotOptions<string | null> & Url
      ) => void
    ): this;
    prependListener(
      event: "error",
      listener: (
        error: got$GotError,
        body?: any,
        res?: http.IncomingMessage
      ) => void
    ): this;
    prependListener(
      event: "downloadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    prependListener(
      event: "uploadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    prependOnceListener(
      event: "request",
      listener: (req: http.ClientRequest) => void
    ): this;
    prependOnceListener(
      event: "response",
      listener: (res: http.IncomingMessage) => void
    ): this;
    prependOnceListener(
      event: "redirect",
      listener: (
        res: http.IncomingMessage,
        nextOptions: got$GotOptions<string | null> & Url
      ) => void
    ): this;
    prependOnceListener(
      event: "error",
      listener: (
        error: got$GotError,
        body?: any,
        res?: http.IncomingMessage
      ) => void
    ): this;
    prependOnceListener(
      event: "downloadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    prependOnceListener(
      event: "uploadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    removeListener(
      event: "request",
      listener: (req: http.ClientRequest) => void
    ): this;
    removeListener(
      event: "response",
      listener: (res: http.IncomingMessage) => void
    ): this;
    removeListener(
      event: "redirect",
      listener: (
        res: http.IncomingMessage,
        nextOptions: got$GotOptions<string | null> & Url
      ) => void
    ): this;
    removeListener(
      event: "error",
      listener: (
        error: got$GotError,
        body?: any,
        res?: http.IncomingMessage
      ) => void
    ): this;
    removeListener(
      event: "downloadProgress",
      listener: (progress: got$Progress) => void
    ): this;
    removeListener(
      event: "uploadProgress",
      listener: (progress: got$Progress) => void
    ): this;
  }

  declare type got$GotError =
    | RequestError
    | ReadError
    | ParseError
    | HTTPError
    | MaxRedirectsError
    | UnsupportedProtocolError
    | CancelError
    | TimeoutError;

  declare interface got$Progress {
    percent: number;
    transferred: number;
    total: number | null;
  }
}
