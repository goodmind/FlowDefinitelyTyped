declare module "xmlrpc" {
  import type { EventEmitter } from "events";

  import type { Server as HttpServer } from "http";

  import type { Server as HttpsServer } from "https";

  import type { TlsOptions } from "tls";

  declare interface ClientOptions {
    host?: string;
    path?: string;
    port?: number;
    url?: string;
    cookies?: boolean;
    headers?: {
      [header: string]: string
    };
    basic_auth?: {
      user: string,
      pass: string
    };
    method?: string;
  }
  declare interface ServerOptions {
    host?: string;
    path?: string;
    port?: number;
  }
  declare interface DateFormatterOptions {
    colons?: boolean;
    hyphens?: boolean;
    local?: boolean;
    ms?: boolean;
    offset?: boolean;
  }
  declare class Cookies {
    get(name: string): string;
    set(
      name: string,
      value: string,
      options?: {
        secure: boolean,
        expires: Date
      }
    ): void;
    toString(): string;
  }

  declare var npm$namespace$xmlrpc: {
    createClient: typeof xmlrpc$createClient,
    createSecureClient: typeof xmlrpc$createSecureClient,
    createServer: typeof xmlrpc$createServer,
    createSecureServer: typeof xmlrpc$createSecureServer,
    dateFormatter: typeof xmlrpc$dateFormatter,

    CustomType: typeof xmlrpc$CustomType
  };
  declare function xmlrpc$createClient(
    options: string | ClientOptions
  ): xmlrpc$Client;

  declare function xmlrpc$createSecureClient(
    options: string | ClientOptions
  ): xmlrpc$Client;

  declare function xmlrpc$createServer(
    options: string | ServerOptions,
    callback: () => void
  ): xmlrpc$Server;

  declare function xmlrpc$createSecureServer(
    options: string | TlsOptions,
    callback: () => void
  ): xmlrpc$Server;

  declare interface xmlrpc$Client {
    options: ClientOptions;
    isSecure: boolean;
    headersProcessors: {
      processors: xmlrpc$HeadersProcessor[]
    };
    cookies?: Cookies;
    methodCall(
      method: string,
      params: any[],
      callback: (error: Object, value: any) => void
    ): void;
    getCookie(name: string): string;
    setCookie(name: string, value: string): this;
  }

  declare type xmlrpc$ServerFunction = (
    error: any,
    params: any,
    callback: (error: any, value: any) => void
  ) => void;

  declare type xmlrpc$ServerNotFoundFunction = (
    methodName: string,
    params: any[]
  ) => void;

  declare type xmlrpc$Server = {
    httpServer: HttpServer | HttpsServer,
    on(eventName: "NotFound", callback: xmlrpc$ServerNotFoundFunction): this,
    on(eventName: string, callback: xmlrpc$ServerFunction): this
  } & EventEmitter;

  declare type xmlrpc$Headers = {
    [header: string]: string
  };

  declare interface xmlrpc$HeadersProcessor {
    composeRequest(headers: xmlrpc$Headers): void;
    parseResponse(headers: xmlrpc$Headers): void;
  }

  declare export var xmlrpc$dateFormatter: {
    setOpts(opts: DateFormatterOptions): void,
    decodeIso8601(time: string): Date,
    encodeIso8601(date: Date): string
  };

  declare export class xmlrpc$CustomType {
    tagName: string;
    raw: string;
    constructor(raw: string): this;
    serialize(xml: any): any;
  }
  declare export default typeof xmlrpc;
}
