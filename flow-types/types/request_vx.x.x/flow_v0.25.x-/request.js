declare module "request" {
  import type { Url } from "url";

  import type { SecureContextOptions } from "tls";

  declare interface request$RequestAPI<
    TRequest: request$Request,
    TOptions: request$CoreOptions,
    TUriUrlOptions
  > {
    defaults(
      options: TOptions
    ): request$RequestAPI<TRequest, TOptions, request$RequiredUriUrl>;
    defaults(
      options: request$RequiredUriUrl & TOptions
    ): request$DefaultUriUrlRequestApi<
      TRequest,
      TOptions,
      request$OptionalUriUrl
    >;
    (
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    (uri: string, callback?: request$RequestCallback): TRequest;
    (
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    get(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    get(uri: string, callback?: request$RequestCallback): TRequest;
    get(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    post(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    post(uri: string, callback?: request$RequestCallback): TRequest;
    post(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    put(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    put(uri: string, callback?: request$RequestCallback): TRequest;
    put(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    head(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    head(uri: string, callback?: request$RequestCallback): TRequest;
    head(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    patch(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    patch(uri: string, callback?: request$RequestCallback): TRequest;
    patch(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    del(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    del(uri: string, callback?: request$RequestCallback): TRequest;
    del(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    delete(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    delete(uri: string, callback?: request$RequestCallback): TRequest;
    delete(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest;
    initParams(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): request$RequiredUriUrl & TOptions;
    initParams(
      uriOrOpts: string | (request$RequiredUriUrl & TOptions),
      callback?: request$RequestCallback
    ): request$RequiredUriUrl & TOptions;
    forever(agentOptions: any, optionsArg: any): TRequest;
    jar(store?: any): request$CookieJar;
    cookie(str: string): request$Cookie | void;
    debug: boolean;
  }

  declare type request$DefaultUriUrlRequestApi<
    TRequest: request$Request,
    TOptions: request$CoreOptions,
    TUriUrlOptions
  > = {
    defaults(
      options: TOptions
    ): request$DefaultUriUrlRequestApi<
      TRequest,
      TOptions,
      request$OptionalUriUrl
    >,
    (callback?: request$RequestCallback): TRequest,
    get(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    get(uri: string, callback?: request$RequestCallback): TRequest,
    get(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    get(callback?: request$RequestCallback): TRequest,
    post(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    post(uri: string, callback?: request$RequestCallback): TRequest,
    post(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    post(callback?: request$RequestCallback): TRequest,
    put(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    put(uri: string, callback?: request$RequestCallback): TRequest,
    put(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    put(callback?: request$RequestCallback): TRequest,
    head(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    head(uri: string, callback?: request$RequestCallback): TRequest,
    head(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    head(callback?: request$RequestCallback): TRequest,
    patch(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    patch(uri: string, callback?: request$RequestCallback): TRequest,
    patch(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    patch(callback?: request$RequestCallback): TRequest,
    del(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    del(uri: string, callback?: request$RequestCallback): TRequest,
    del(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    del(callback?: request$RequestCallback): TRequest,
    delete(
      uri: string,
      options?: TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    delete(uri: string, callback?: request$RequestCallback): TRequest,
    delete(
      options: TUriUrlOptions & TOptions,
      callback?: request$RequestCallback
    ): TRequest,
    delete(callback?: request$RequestCallback): TRequest
  } & request$RequestAPI<TRequest, TOptions, TUriUrlOptions>;

  declare interface request$CoreOptions {
    baseUrl?: string;
    callback?: request$RequestCallback;
    jar?: request$CookieJar | boolean;
    formData?: {
      [key: string]: any
    };
    form?:
      | {
          [key: string]: any
        }
      | string;
    auth?: request$AuthOptions;
    oauth?: request$OAuthOptions;
    aws?: request$AWSOptions;
    hawk?: request$HawkOptions;
    qs?: any;
    qsStringifyOptions?: any;
    qsParseOptions?: any;
    json?: any;
    jsonReviver?: (key: string, value: any) => any;
    jsonReplacer?: (key: string, value: any) => any;
    multipart?: request$RequestPart[] | request$Multipart;
    agent?: http.Agent | https.Agent;
    agentOptions?: http.AgentOptions | https.AgentOptions;
    agentClass?: any;
    forever?: any;
    host?: string;
    port?: number;
    method?: string;
    headers?: request$Headers;
    body?: any;
    family?: 4 | 6;
    followRedirect?: boolean | ((response: http.IncomingMessage) => boolean);
    followAllRedirects?: boolean;
    followOriginalHttpMethod?: boolean;
    maxRedirects?: number;
    removeRefererHeader?: boolean;
    encoding?: string | null;
    pool?: any;
    timeout?: number;
    localAddress?: string;
    proxy?: any;
    tunnel?: boolean;
    strictSSL?: boolean;
    rejectUnauthorized?: boolean;
    time?: boolean;
    gzip?: boolean;
    preambleCRLF?: boolean;
    postambleCRLF?: boolean;
    withCredentials?: boolean;
    key?: Buffer;
    cert?: Buffer;
    passphrase?: string;
    ca?: string | Buffer | string[] | Buffer[];
    har?: request$HttpArchiveRequest;
    useQuerystring?: boolean;
  }

  declare interface request$UriOptions {
    uri: string | Url;
  }

  declare interface request$UrlOptions {
    url: string | Url;
  }

  declare type request$RequiredUriUrl = request$UriOptions | request$UrlOptions;

  declare type request$OptionalUriUrl = request$RequiredUriUrl | {};

  declare type request$OptionsWithUri = request$UriOptions &
    request$CoreOptions;

  declare type request$OptionsWithUrl = request$UrlOptions &
    request$CoreOptions;

  declare type request$Options =
    | request$OptionsWithUri
    | request$OptionsWithUrl;

  declare type request$RequestCallback = (
    error: any,
    response: request$Response,
    body: any
  ) => void;

  declare interface request$HttpArchiveRequest {
    url?: string;
    method?: string;
    headers?: request$NameValuePair[];
    postData?: {
      mimeType?: string,
      params?: request$NameValuePair[]
    };
  }

  declare interface request$NameValuePair {
    name: string;
    value: string;
  }

  declare interface request$Multipart {
    chunked?: boolean;
    data?: Array<{
      "content-type"?: string,
      body: string
    }>;
  }

  declare interface request$RequestPart {
    headers?: request$Headers;
    body: any;
  }

  declare type request$Request = {
    readable: boolean,
    writable: boolean,
    explicitMethod?: true,
    debug(...args: any[]): void,
    pipeDest(dest: any): void,
    qs(q: { [key: string]: any }, clobber?: boolean): request$Request,
    form(): FormData,
    form(form: any): request$Request,
    multipart(multipart: request$RequestPart[]): request$Request,
    json(val: any): request$Request,
    aws(opts: request$AWSOptions, now?: boolean): request$Request,
    hawk(opts: request$HawkOptions): void,
    auth(
      username: string,
      password: string,
      sendImmediately?: boolean,
      bearer?: string
    ): request$Request,
    oauth(oauth: request$OAuthOptions): request$Request,
    jar(jar: request$CookieJar): request$Request,
    on(event: string, listener: (...args: any[]) => void): this,
    on(event: "request", listener: (req: http.ClientRequest) => void): this,
    on(event: "response", listener: (resp: request$Response) => void): this,
    on(event: "data", listener: (data: Buffer | string) => void): this,
    on(event: "error", listener: (e: Error) => void): this,
    on(
      event: "complete",
      listener: (resp: request$Response, body?: string | Buffer) => void
    ): this,
    on(event: "pipe", listener: (src: stream.Readable) => void): this,
    on(event: "socket", listener: (src: net.Socket) => void): this,
    write(buffer: Buffer | string, cb?: (err?: Error) => void): boolean,
    write(str: string, encoding?: string, cb?: (err?: Error) => void): boolean,
    end(cb?: () => void): void,
    end(chunk: string | Buffer, cb?: () => void): void,
    end(str: string, encoding?: string, cb?: () => void): void,
    pause(): void,
    resume(): void,
    abort(): void,
    destroy(): void,
    toJSON(): request$RequestAsJSON,
    host?: string,
    port?: number,
    followAllRedirects?: boolean,
    followOriginalHttpMethod?: boolean,
    maxRedirects?: number,
    removeRefererHeader?: boolean,
    encoding?: string | null,
    timeout?: number,
    localAddress?: string,
    strictSSL?: boolean,
    rejectUnauthorized?: boolean,
    time?: boolean,
    gzip?: boolean,
    preambleCRLF?: boolean,
    postambleCRLF?: boolean,
    withCredentials?: boolean,
    key?: Buffer,
    cert?: Buffer,
    passphrase?: string,
    ca?: string | Buffer | string[] | Buffer[],
    har?: request$HttpArchiveRequest,
    headers: request$Headers,
    method: string,
    pool:
      | false
      | {
          [key: string]: http.Agent | https.Agent
        },
    dests: stream.Readable[],
    callback?: request$RequestCallback,
    uri: Url & {
      href: string,
      pathname: string
    },
    proxy: null | string | Url,
    tunnel: boolean,
    setHost: boolean,
    path: string,
    agent: false | http.Agent | https.Agent,
    body: Buffer | Buffer[] | string | string[] | stream.Readable,
    timing?: boolean,
    src?: stream.Readable,
    href: string,
    startTime?: number,
    startTimeNow?: number,
    timings?: {
      socket: number,
      lookup: number,
      connect: number,
      response: number,
      end: number
    },
    elapsedTime?: number,
    response?: request$Response
  } & caseless.Httpified &
    stream.Stream;

  declare type request$Response = {
    statusCode: number,
    statusMessage: string,
    request: request$Request,
    body: any,
    caseless: caseless.Caseless,
    toJSON(): request$ResponseAsJSON,
    timingStart?: number,
    elapsedTime?: number,
    timings?: {
      socket: number,
      lookup: number,
      connect: number,
      response: number,
      end: number
    },
    timingPhases?: {
      wait: number,
      dns: number,
      tcp: number,
      firstByte: number,
      download: number,
      total: number
    }
  } & http.IncomingMessage;

  declare type request$ResponseRequest = request$Request;

  declare type request$RequestResponse = request$Response;

  declare interface request$Headers {
    [key: string]: any;
  }

  declare interface request$AuthOptions {
    user?: string;
    username?: string;
    pass?: string;
    password?: string;
    sendImmediately?: boolean;
    bearer?: string | (() => string);
  }

  declare interface request$OAuthOptions {
    callback?: string;
    consumer_key?: string;
    consumer_secret?: string;
    token?: string;
    token_secret?: string;
    transport_method?: "body" | "header" | "query";
    verifier?: string;
    body_hash?: true | string;
  }

  declare interface request$HawkOptions {
    credentials: any;
  }

  declare interface request$AWSOptions {
    secret: string;
    bucket?: string;
  }

  declare interface request$RequestAsJSON {
    uri: Url;
    method: string;
    headers: request$Headers;
  }

  declare interface request$ResponseAsJSON {
    statusCode: number;
    body: any;
    headers: request$Headers;
    request: request$RequestAsJSON;
  }

  declare type request$Cookie = tough.request$Cookie;

  declare interface request$CookieJar {
    setCookie(
      cookieOrStr: request$Cookie | string,
      uri: string | Url,
      options?: tough.request$CookieJar.SetCookieOptions
    ): void;
    getCookieString(uri: string | Url): string;
    getCookies(uri: string | Url): request$Cookie[];
  }
  declare var request: request$request$RequestAPI<
    request$request$Request,
    request$request$CoreOptions,
    request$request$RequiredUriUrl
  >;
  declare module.exports: typeof request;
}
