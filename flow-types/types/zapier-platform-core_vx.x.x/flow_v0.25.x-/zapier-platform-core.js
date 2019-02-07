declare module "zapier-platform-core" {
  import typeof * as http from "http";

  declare export function createAppHandler(
    appRawOrPath: { [key: string]: any } | string
  ): (event: any, context: any, callback: any) => void;

  declare export function createAppTester(
    appRawOrPath: { [key: string]: any } | string
  ): Promise<any>;

  declare export function integrationTestHandler(
    event: any,
    context: any,
    callback: any
  ): any;

  declare export var version: string;
  declare export interface HttpRequestOptions {
    url?: string;
    method?: "POST" | "GET" | "OPTIONS" | "HEAD" | "DELETE" | "PATCH" | "PUT";
    body?:
      | string
      | Buffer
      | NodeJS.ReadableStream
      | { [key: string]: any }
      | null;
    headers?: {
      [name: string]: string
    };
    json?: { [key: string]: any } | any[] | null;
    params?: { [key: string]: any };
    form?: { [key: string]: any } | null;
    raw?: boolean;
    redirect?: "manual" | "error" | "follow";
    follow?: number;
    compress?: boolean;
    agent?: http.Agent | null;
    timeout?: number;
    size?: number;
  }
  declare export interface HttpResponse {
    status: number;
    content: string | Buffer;
    json:
      | { [key: string]: any }
      | void
      | Promise<{ [key: string]: any } | void>;
    body?: NodeJS.ReadableStream;
    headers: {
      [key: string]: string
    };
    getHeader(key: string): string | void;
    throwForStatus(): void;
    request: HttpRequestOptions;
  }
  declare export class HaltedError mixins Error {}
  declare export class ExpiredAuthError mixins Error {}
  declare export class RefreshAuthError mixins Error {}
  declare export interface Z {
    request(options: HttpRequestOptions): Promise<HttpResponse>;
    request(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    JSON: typeof JSON;
    console: Console;
    hash(alg: string, data: string): any;
    errors: {
      RefreshAuthError: {
        new(message?: string): HaltedError,
        new(message?: string): ExpiredAuthError,
        new(message?: string): RefreshAuthError
      }
    };
    stashFile: (
      promise: Promise<HttpResponse>,
      knownLength?: number | string,
      filename?: string,
      contentType?: string
    ) => Promise<string>;
    dehydrate: <T>(
      callback: (z: Z, bundle: Bundle<T>) => any,
      inputData: T
    ) => string;
  }
  declare export interface AuthData {
    access_token: string;
    refresh_token?: string;
  }
  declare export interface Bundle<InputData = {}> {
    authData: AuthData;
    inputData: InputData;
  }
  declare export interface AuthorizeUrlBundle<InputData = {}> {
    inputData: InputData;
  }
  declare export interface GetAccessTokenBundle<InputData = {}> {
    inputData: InputData & {
      code: string
    };
  }
  declare export interface RefreshAccessTokenBundle<InputData> {
    inputData: InputData;
    authData: AuthData;
  }
  declare export interface OAuth2Authentication<InputData = {}> {
    type: "oauth2";
    connectionLabel: string;
    oauth2Config: {
      authorizeUrl:
        | string
        | ((
            z: Z,
            bundle: AuthorizeUrlBundle<InputData>
          ) => string | Promise<string>)
        | HttpRequestOptions,
      getAccessToken:
        | ((
            z: Z,
            bundle: GetAccessTokenBundle<InputData>
          ) => AuthData | Promise<AuthData>)
        | HttpRequestOptions,
      refreshAccessToken?:
        | ((
            z: Z,
            bundle: RefreshAccessTokenBundle<InputData>
          ) => AuthData | Promise<AuthData>)
        | HttpRequestOptions,
      autoRefresh: boolean,
      scope?: string
    };
    test:
      | ((z: Z, bundle: Bundle<InputData>) => boolean | Promise<boolean>)
      | {
          url: string
        };
  }
}
