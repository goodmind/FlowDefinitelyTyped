declare module "follow-redirects" {
  import typeof * as coreHttp from "http";

  import typeof * as coreHttps from "https";

  import type { Writable } from "stream";

  declare export interface WrappableRequest {
    getHeader?: (...args: any[]) => any;
    setHeader(...args: any[]): any;
    removeHeader(...args: any[]): any;
    abort?: (...args: any[]) => any;
    flushHeaders?: (...args: any[]) => any;
    setNoDelay?: (...args: any[]) => any;
    setSocketKeepAlive?: (...args: any[]) => any;
    setTimeout?: (...args: any[]) => any;
  }
  declare export interface WrappableResponse {
    statusCode?: number;
    headers: {
      location?: string
    };
    destroy(): any;
  }
  declare export interface Scheme<
    Options,
    Request: WrappableRequest,
    Response
  > {
    request(options: Options, callback?: (res: Response) => any): Request;
  }
  declare export type RedirectableRequest<
    Request: WrappableRequest,
    Response
  > = {
    setHeader: $PropertyType<Request, "setHeader">,
    removeHeader: $PropertyType<Request, "removeHeader">,
    abort: $PropertyType<Request, "abort">,
    flushHeaders: $PropertyType<Request, "flushHeaders">,
    getHeader: $PropertyType<Request, "getHeader">,
    setNoDelay: $PropertyType<Request, "setNoDelay">,
    setSocketKeepAlive: $PropertyType<Request, "setSocketKeepAlive">,
    setTimeout: $PropertyType<Request, "setTimeout">,
    addListener(event: string, listener: (...args: any[]) => void): this,
    addListener(
      event: "response",
      listener: (response: Response) => void
    ): this,
    addListener(event: "error", listener: (err: Error) => void): this,
    emit(event: string | Symbol, ...args: any[]): boolean,
    emit(event: "response", response: Response): boolean,
    emit(event: "error", err: Error): boolean,
    on(event: string, listener: (...args: any[]) => void): this,
    on(event: "response", listener: (response: Response) => void): this,
    on(event: "error", listener: (err: Error) => void): this,
    once(event: string, listener: (...args: any[]) => void): this,
    once(event: "response", listener: (response: Response) => void): this,
    once(event: "error", listener: (err: Error) => void): this,
    prependListener(event: string, listener: (...args: any[]) => void): this,
    prependListener(
      event: "response",
      listener: (response: Response) => void
    ): this,
    prependListener(event: "error", listener: (err: Error) => void): this,
    prependOnceListener(
      event: string,
      listener: (...args: any[]) => void
    ): this,
    prependOnceListener(
      event: "response",
      listener: (response: Response) => void
    ): this,
    prependOnceListener(event: "error", listener: (err: Error) => void): this
  } & Writable;

  declare export interface RedirectScheme<
    Options,
    Request: WrappableRequest,
    Response
  > {
    request(
      options: string | (Options & FollowOptions),
      callback?: (res: Response & FollowResponse) => void
    ): RedirectableRequest<Request, Response>;
    get(
      options: string | (Options & FollowOptions),
      callback?: (res: Response & FollowResponse) => void
    ): RedirectableRequest<Request, Response>;
  }
  declare export type Override<T, U> = Pick<T, Exclude<$Keys<T>, $Keys<U>>> & U;
  declare export interface FollowOptions {
    maxRedirects?: number;
    maxBodyLength?: number;
  }
  declare export interface FollowResponse {
    responseUrl: string;
    redirects: Redirect[];
  }
  declare export interface Redirect {
    url: string;
    headers: coreHttp.IncomingHttpHeaders;
    statusCode: number;
  }
  declare export var http: Override<
    typeof coreHttp,
    RedirectScheme<
      coreHttp.RequestOptions,
      coreHttp.ClientRequest,
      coreHttp.IncomingMessage
    >
  >;
  declare export var https: Override<
    typeof coreHttps,
    RedirectScheme<
      coreHttps.RequestOptions,
      coreHttp.ClientRequest,
      coreHttp.IncomingMessage
    >
  >;
  declare export type WrappedScheme<T: Scheme<any, any, any>> = Override<
    T,
    RedirectScheme<
      /* Flow doesn't support conditional types, use $Call utility type */ any,
      /* Flow doesn't support conditional types, use $Call utility type */ any,
      /* Flow doesn't support conditional types, use $Call utility type */ any
    >
  >;
  declare export function wrap<
    T: {
      [key: string]: Scheme<any, any, any>
    }
  >(
    protocols: T
  ): $ObjMapi<T, <K>(K) => WrappedScheme<$ElementType<T, K>>>;
}
