declare module "oauth2orize" {
  import type { IncomingMessage, ServerResponse } from "http";

  declare export interface OAuth2 {
    client: any;
    user: any;
    transactionID: string;
    redirectURI: string;
    req: OAuth2Req;
    info: OAuth2Info;
  }
  declare export interface OAuth2Req {
    clientID: string;
    redirectURI: string;
    scope: string;
    state: string;
    type: string;
    transactionID: string;
  }
  declare export interface OAuth2Info {
    scope: string;
  }
  declare export type MiddlewareRequest = {
    oauth2?: OAuth2,
    user?: any
  } & IncomingMessage;

  declare export interface ServerOptions {
    store: any;
    loadTransaction: boolean;
  }
  declare export function createServer(options?: ServerOptions): OAuth2Server;

  declare export interface AuthorizeOptions {
    idLength?: number;
    sessionKey?: string;
  }
  declare export interface DecisionOptions {
    cancelField: string;
    userProperty: string;
    sessionKey: string;
  }
  declare export interface ErrorHandlerOptions {
    mode?: string;
  }
  declare export type MiddlewareFunction = (
    req: MiddlewareRequest,
    res: ServerResponse,
    next: MiddlewareNextFunction
  ) => void;
  declare export type MiddlewareErrorFunction = (
    err: Error,
    req: MiddlewareRequest,
    res: ServerResponse,
    next: MiddlewareNextFunction
  ) => void;
  declare export type MiddlewareNextFunction = (err?: Error) => void;
  declare export type ValidateFunction = (
    clientId: string,
    redirectURI: string,
    validated: (err: Error | null, client?: any, redirectURI?: string) => void
  ) => void;
  declare export type ImmediateFunction = (
    client: any,
    user: any,
    scope: string[],
    type: string,
    areq: any,
    done: (err: Error | null, allow: boolean, info: any, locals: any) => void
  ) => void;
  declare export type DecisionParseFunction = (
    req: MiddlewareRequest,
    done: (err: Error | null, params: any) => void
  ) => void;
  declare export type SerializeClientFunction = (
    client: any,
    done: SerializeClientDoneFunction
  ) => void;
  declare export type SerializeClientDoneFunction = (
    err: Error | null,
    id: string
  ) => void;
  declare export type DeserializeClientFunction = (
    id: string,
    done: DeserializeClientDoneFunction
  ) => void;
  declare export type DeserializeClientDoneFunction = (
    err: Error | null,
    client?: any | boolean
  ) => void;
  declare export type IssueGrantCodeFunction = (
    client: any,
    redirectUri: string,
    user: any,
    res: any,
    issued: (err: Error | null, exchange$code?: string) => void
  ) => void;
  declare export type IssueGrantTokenFunction = (
    client: any,
    user: any,
    ares: any,
    issued: (err: Error | null, exchange$code?: string, params?: any) => void
  ) => void;
  declare export type IssueExchangeCodeFunction = (
    client: any,
    exchange$code: string,
    redirectURI: string,
    issued: ExchangeDoneFunction
  ) => void;
  declare export type ExchangeDoneFunction = (
    err: Error | null,
    accessToken?: string | boolean,
    exchange$refreshToken?: string,
    params?: any
  ) => void;
  declare export class OAuth2Server {
    grant(type: string, fn: MiddlewareFunction): OAuth2Server;
    grant(fn: MiddlewareFunction): OAuth2Server;
    exchange(type: string, fn: MiddlewareFunction): OAuth2Server;
    exchange(fn: MiddlewareFunction): OAuth2Server;
    authorize(
      options: AuthorizeOptions,
      validate: ValidateFunction
    ): MiddlewareFunction;
    authorize(validate: ValidateFunction): MiddlewareFunction;
    authorization(
      options: AuthorizeOptions,
      validate: ValidateFunction,
      immediate?: ImmediateFunction
    ): MiddlewareFunction;
    authorization(
      validate: ValidateFunction,
      immediate?: ImmediateFunction
    ): MiddlewareFunction;
    decision(
      options: DecisionOptions,
      parse: DecisionParseFunction
    ): MiddlewareFunction;
    decision(parse: DecisionParseFunction): MiddlewareFunction;
    decision(): MiddlewareFunction;
    token(options?: any): MiddlewareFunction;
    errorHandler(options?: any): MiddlewareErrorFunction;
    serializeClient(fn: SerializeClientFunction): void;
    serializeClient(client: any, done: SerializeClientDoneFunction): void;
    deserializeClient(fn: DeserializeClientFunction): void;
    deserializeClient(obj: any, done: DeserializeClientDoneFunction): void;
  }

  declare var npm$namespace$grant: {
    code: typeof grant$code,
    token: typeof grant$token
  };
  declare interface grant$Options {
    scopeSeparator?: string;
    userProperty?: string;
    scopeSeparator?: string;
  }

  declare function grant$code(
    options: grant$Options,
    issue: IssueGrantCodeFunction
  ): MiddlewareFunction;

  declare function grant$code(
    issue: IssueGrantCodeFunction
  ): MiddlewareFunction;

  declare function grant$token(
    options: grant$Options,
    issue: IssueGrantTokenFunction
  ): MiddlewareFunction;

  declare function grant$token(
    issue: IssueGrantTokenFunction
  ): MiddlewareFunction;

  declare var npm$namespace$exchange: {
    authorizationCode: typeof exchange$authorizationCode,
    code: typeof exchange$code,
    clientCredentials: typeof exchange$clientCredentials,
    password: typeof exchange$password,
    refreshToken: typeof exchange$refreshToken
  };
  declare interface exchange$Options {
    scopeSeparator?: string;
    userProperty?: string;
    scopeSeparator?: string;
  }

  declare function exchange$authorizationCode(
    options: exchange$Options,
    issue: IssueExchangeCodeFunction
  ): MiddlewareFunction;

  declare function exchange$authorizationCode(
    issue: IssueExchangeCodeFunction
  ): MiddlewareFunction;

  declare function exchange$code(
    options: exchange$Options,
    issue: IssueExchangeCodeFunction
  ): MiddlewareFunction;

  declare function exchange$code(
    issue: IssueExchangeCodeFunction
  ): MiddlewareFunction;

  declare function exchange$clientCredentials(
    options: exchange$Options,
    issue: (
      client: any,
      scope: string[],
      body: any,
      authInfo: any,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$clientCredentials(
    options: exchange$Options,
    issue: (
      client: any,
      scope: string[],
      body: any,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$clientCredentials(
    options: exchange$Options,
    issue: (client: any, scope: string[], issued: ExchangeDoneFunction) => void
  ): MiddlewareFunction;

  declare function exchange$clientCredentials(
    options: exchange$Options,
    issue: (client: any, issued: ExchangeDoneFunction) => void
  ): MiddlewareFunction;

  declare function exchange$clientCredentials(
    issue: (client: any, scope: string[], issued: ExchangeDoneFunction) => void
  ): MiddlewareFunction;

  declare function exchange$clientCredentials(
    issue: (client: any, issued: ExchangeDoneFunction) => void
  ): MiddlewareFunction;

  declare function exchange$password(
    options: exchange$Options,
    issue: (
      client: any,
      username: string,
      exchange$password: string,
      scope: string[],
      body: any,
      authInfo: any,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$password(
    options: exchange$Options,
    issue: (
      client: any,
      username: string,
      exchange$password: string,
      scope: string[],
      body: any,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$password(
    options: exchange$Options,
    issue: (
      client: any,
      username: string,
      exchange$password: string,
      scope: string[],
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$password(
    options: exchange$Options,
    issue: (
      client: any,
      username: string,
      exchange$password: string,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$password(
    issue: (
      client: any,
      username: string,
      exchange$password: string,
      scope: string[],
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$password(
    issue: (
      client: any,
      username: string,
      exchange$password: string,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$refreshToken(
    options: exchange$Options,
    issue: (
      client: any,
      exchange$refreshToken: string,
      scope: string[],
      body: any,
      authInfo: any,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$refreshToken(
    options: exchange$Options,
    issue: (
      client: any,
      exchange$refreshToken: string,
      scope: string[],
      body: any,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$refreshToken(
    options: exchange$Options,
    issue: (
      client: any,
      exchange$refreshToken: string,
      scope: string[],
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$refreshToken(
    options: exchange$Options,
    issue: (
      client: any,
      exchange$refreshToken: string,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$refreshToken(
    issue: (
      client: any,
      exchange$refreshToken: string,
      scope: string[],
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;

  declare function exchange$refreshToken(
    issue: (
      client: any,
      exchange$refreshToken: string,
      issued: ExchangeDoneFunction
    ) => void
  ): MiddlewareFunction;
}
