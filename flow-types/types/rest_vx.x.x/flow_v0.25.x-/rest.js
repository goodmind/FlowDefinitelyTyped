declare module "rest" {
  import typeof * as when from "when";

  declare export default typeof rest;

  declare function rest(path: string): rest$ResponsePromise;

  declare function rest(request: rest$Request): rest$ResponsePromise;

  declare var npm$namespace$rest: {
    setDefaultClient: typeof rest$setDefaultClient,
    getDefaultClient: typeof rest$getDefaultClient,
    resetDefaultClient: typeof rest$resetDefaultClient,
    wrap: typeof rest$wrap
  };
  declare export function rest$setDefaultClient(client: rest$Client): void;

  declare export function rest$getDefaultClient(): rest$Client;

  declare export function rest$resetDefaultClient(): void;

  declare export function rest$wrap<T>(
    interceptor: rest$Interceptor<T>,
    config?: T
  ): rest$Client;

  declare export interface rest$Request {
    method?: string;
    path?: string;
    params?: any;
    headers?: any;
    entity?: any;
    canceled?: boolean;
    cancel?: () => void;
    originator?: (request?: rest$Request) => rest$ResponsePromise;
  }

  declare export interface rest$Status {
    code: number;
    text?: string;
  }

  declare export interface rest$Headers {
    [index: string]: any;
  }

  declare export interface rest$Response {
    request: rest$Request;
    raw: any;
    status: rest$Status;
    headers: rest$Headers;
    entity: any;
  }

  declare export type rest$ResponsePromise = {
    entity(): when.Promise<any>,
    status(): when.Promise<number>,
    headers(): when.Promise<rest$Headers>,
    header(headerName: string): when.Promise<any>
  } & when.Promise<rest$Response>;

  declare export interface rest$Interceptor<T> {
    (parent?: rest$Client, config?: T): rest$Client;
  }

  declare export interface rest$Client {
    (path: string): rest$ResponsePromise;
    (request: rest$Request): rest$ResponsePromise;
    skip(): rest$Client;
    wrap<T>(interceptor: rest$Interceptor<T>, config?: T): rest$Client;
  }

  declare export interface rest$Meta {
    client: rest$Client;
    arguments: any;
  }
}
declare module "rest/interceptor" {
  import typeof * as when from "when";

  import typeof * as rest from "rest";

  declare function interceptor<T, U>(
    config: interceptor$Config<T, U>
  ): rest$Interceptor<T>;

  declare interface interceptor$Config<T, U> {
    init?: (config: T) => U;
    request?: (
      request: rest$Request,
      config: U,
      meta: rest$Meta
    ) => rest$Request | when.Promise<rest$Request>;
    response?: (
      response: rest$Response,
      config: U,
      meta: rest$Meta
    ) => rest$Response | when.Promise<rest$Response>;
    success?: (
      response: rest$Response,
      config: U,
      meta: rest$Meta
    ) => rest$Response | when.Promise<rest$Response>;
    error?: (
      response: rest$Response,
      config: U,
      meta: rest$Meta
    ) => rest$Response | when.Promise<rest$Response>;
  }
  declare export default typeof interceptor;
}
declare module "rest/interceptor/defaultRequest" {
  import typeof * as rest from "rest";

  declare var defaultRequest: rest$Interceptor<defaultRequest$Config>;
  declare interface defaultRequest$Config {
    method?: string;
    path?: string;
    params?: any;
    headers?: any;
    entity?: any;
    mixin?: any;
  }
  declare export default typeof defaultRequest;
}
declare module "rest/interceptor/hateoas" {
  import typeof * as rest from "rest";

  declare var hateoas: rest$Interceptor<hateoas$Config>;
  declare interface hateoas$Config {
    target?: string;
    client?: rest$Client;
  }
  declare export default typeof hateoas;
}
declare module "rest/interceptor/location" {
  import typeof * as rest from "rest";

  declare var location: rest$Interceptor<location$Config>;
  declare interface location$Config {
    client?: rest$Client;
    code?: number;
  }
  declare export default typeof location;
}
declare module "rest/interceptor/mime" {
  import typeof * as rest from "rest";

  import typeof * as registry from "rest/mime/registry";

  declare var mime: rest$Interceptor<mime$Config>;
  declare interface mime$Config {
    mime?: string;
    accept?: string;
    registry?: registry$Registry;
    permissive?: boolean;
  }
  declare export default typeof mime;
}
declare module "rest/interceptor/pathPrefix" {
  import typeof * as rest from "rest";

  declare var pathPrefix: rest$Interceptor<pathPrefix$Config>;
  declare interface pathPrefix$Config {
    prefix?: string;
  }
  declare export default typeof pathPrefix;
}
declare module "rest/interceptor/basicAuth" {
  import typeof * as rest from "rest";

  declare var basicAuth: rest$Interceptor<basicAuth$Config>;
  declare interface basicAuth$Config {
    username?: string;
    password?: string;
  }
  declare export default typeof basicAuth;
}
declare module "rest/interceptor/oAuth" {
  import typeof * as rest from "rest";

  declare var oAuth: rest$Interceptor<oAuth$Config>;
  declare interface oAuth$DismissWindow {
    (): void;
  }

  declare interface oAuth$Config {
    token?: string;
    clientId?: string;
    scope?: string;
    authorizationUrl?: string;
    redirectUrl?: string;
    windowStrategy?: (url: string) => oAuth$DismissWindow;
    oAuthCallback?: (hash: string) => void;
    oAuthCallbackName?: string;
  }
  declare export default typeof oAuth;
}
declare module "rest/interceptor/csrf" {
  import typeof * as rest from "rest";

  declare var csrf: rest$Interceptor<csrf$Config>;
  declare interface csrf$Config {
    name?: string;
    token?: string;
  }
  declare export default typeof csrf;
}
declare module "rest/interceptor/errorCode" {
  import typeof * as rest from "rest";

  declare var errorCode: rest$Interceptor<errorCode$Config>;
  declare interface errorCode$Config {
    code?: number;
  }
  declare export default typeof errorCode;
}
declare module "rest/interceptor/retry" {
  import typeof * as rest from "rest";

  declare var retry: rest$Interceptor<retry$Config>;
  declare interface retry$Config {
    initial?: number;
    multiplier?: number;
    max?: number;
  }
  declare export default typeof retry;
}
declare module "rest/interceptor/template" {
  import typeof * as rest from "rest";

  declare var template: rest$Interceptor<template$Config>;
  declare interface template$Config {
    template?: string;
    params?: {
      [name: string]: any
    };
  }
  declare export default typeof template;
}
declare module "rest/interceptor/timeout" {
  import typeof * as rest from "rest";

  declare var timeout: rest$Interceptor<timeout$Config>;
  declare interface timeout$Config {
    timeout?: number;
    transient?: boolean;
  }
  declare export default typeof timeout;
}
declare module "rest/interceptor/jsonp" {
  import typeof * as rest from "rest";

  declare var jsonp: rest$Interceptor<jsonp$Config>;
  declare interface jsonp$Config {
    callback?: {
      param?: string,
      prefix?: string,
      name?: string
    };
  }
  declare export default typeof jsonp;
}
declare module "rest/interceptor/ie/xdomain" {
  import typeof * as rest from "rest";

  declare var xdomain: rest$Interceptor<{}>;
  declare export default typeof xdomain;
}
declare module "rest/interceptor/ie/xhr" {
  import typeof * as rest from "rest";

  declare var xhr: rest$Interceptor<{}>;
  declare export default typeof xhr;
}
declare module "rest/mime/registry" {
  import typeof * as when from "when";

  declare var registry: registry$Registry;
  declare interface registry$MIMEConverter {
    read(value: string): any | when.Promise<any>;
    write(value: any): string | when.Promise<string>;
  }

  declare interface registry$Registry {
    lookup(mimeType: string): when.Promise<registry$MIMEConverter>;
    register(mimeType: string, converter: registry$MIMEConverter): void;
  }
  declare export default typeof registry;
}
declare module "rest/client/xhr" {
  import typeof * as rest from "rest";

  declare var xhr: rest$Client;
  declare export default typeof xhr;
}
declare module "rest/client/node" {
  import typeof * as rest from "rest";

  declare var node: rest$Client;
  declare export default typeof node;
}
declare module "rest/client/jsonp" {
  import typeof * as rest from "rest";

  declare var jsonp: rest$Client;
  declare export default typeof jsonp;
}
declare module "rest/client/xdr" {
  import typeof * as rest from "rest";

  declare var xdr: rest$Client;
  declare export default typeof xdr;
}
