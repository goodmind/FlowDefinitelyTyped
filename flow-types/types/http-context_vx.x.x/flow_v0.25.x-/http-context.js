declare module "http-context" {
  declare module.exports: typeof HttpContext;

  declare function HttpContext(): HttpContext$HttpContext$Context;

  declare interface HttpContext$RequestJSON {
    method: string;
    url: string;
    header: http.IncomingHttpHeaders;
  }

  declare interface HttpContext$RequestDelegate {
    header: http.IncomingHttpHeaders;
    headers: http.IncomingHttpHeaders;
    url: string;
    href: string;
    method: string;
    path: string;
    query: {
      [param: string]: string | string[]
    };
    querystring: string;
    search: string;
    host: string;
    hostname: string;
    fresh: boolean;
    idempotent: boolean;
    protocol: string;
    secure: boolean;
    subdomains: string[];
    accepts(types: string[]): string[] | string | false;
    accepts(...types: string[]): string[] | string | false;
    acceptsCharsets(charsets: string[]): string | false;
    acceptsCharsets(...charsets: string[]): string | false;
    acceptsEncodings(encodings: string[]): string | false;
    acceptsEncodings(...encodings: string[]): string | false;
    acceptsLanguages(languages: string[]): string | false;
    acceptsLanguages(...languages: string[]): string | false;
    is(types: string[]): string | false;
    is(...types: string[]): string | false;
    get(field: string): string;
  }

  declare type HttpContext$Request = {
    request: http.IncomingMessage,
    charset: string,
    length: number,
    type: string,
    accept: accepts.Accepts,
    inspect(): HttpContext$RequestJSON,
    toJSON(): HttpContext$RequestJSON
  } & HttpContext$RequestDelegate;

  declare interface HttpContext$ResponseJSON {
    status: number;
    message: string;
    header: http.OutgoingHttpHeaders;
  }

  declare interface HttpContext$ResponseDelegate {
    status: number;
    message: string;
    body: any;
    length: number;
    headerSent: boolean;
    type: string;
    lastModified: string | Date;
    etag: string;
    writable: boolean;
    vary(field: string): void;
    redirect(url: string, alt: string): void;
    attachment(filename: string): void;
    set(field: string, val: string): void;
    append(field: string, val: string[]): void;
    append(field: string, ...val: string[]): void;
    remove(field: string): void;
  }

  declare type HttpContext$Response = {
    response: http.OutgoingMessage,
    header: http.OutgoingHttpHeaders,
    is(types: string[]): string | false,
    is(...types: string[]): string | false,
    get(field: string): string,
    inspect(): HttpContext$ResponseJSON,
    toJSON(): HttpContext$ResponseJSON
  } & HttpContext$ResponseDelegate;

  declare type HttpContext$Context = {
    request: HttpContext$Request,
    response: HttpContext$Response
  } & HttpContext$RequestDelegate &
    HttpContext$ResponseDelegate;
}
