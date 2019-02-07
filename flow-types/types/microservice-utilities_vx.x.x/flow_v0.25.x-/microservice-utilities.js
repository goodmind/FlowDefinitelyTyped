declare module "microservice-utilities" {
  /**
   * Authorizer
   */
  declare export interface AuthorizerConfiguration {
    jwkKeyListUrl: string;
    authorizerContextResolver?: string;
  }
  declare export interface AuthorizerPolicy {
    principalId: string;
    policyDocument: { [key: string]: any };
  }
  declare export class Authorizer {
    constructor(
      logFunction: (msg: any) => void,
      configuration: AuthorizerConfiguration
    ): this;
    getPolicy(request: { [key: string]: any }): Promise<AuthorizerPolicy>;
  }

  /**
   * PlatformClient
   */
  declare export interface PlatformClientConfiguration {
    client: { [key: string]: any };
  }
  declare export interface PlatformClientResponse<T> {
    data?: T;
    status: number;
    statusText: string;
    headers: any;
    config: { [key: string]: any };
    request?: any;
  }
  declare export class PlatformClient {
    constructor(
      logFunction: (msg: any) => void,
      tokenResolverFunction?: () => Promise<string>,
      configuration?: PlatformClientConfiguration
    ): this;
    get<T>(
      url: string,
      headers?: {
        [s: string]: string
      },
      type?: string
    ): Promise<PlatformClientResponse<T>>;
    post<T>(
      url: string,
      data: { [key: string]: any },
      headers?: {
        [s: string]: string
      }
    ): Promise<PlatformClientResponse<T>>;
    put<T>(
      url: string,
      data: { [key: string]: any },
      headers?: {
        [s: string]: string
      }
    ): Promise<PlatformClientResponse<T>>;
    patch<T>(
      url: string,
      data: { [key: string]: any },
      headers?: {
        [s: string]: string
      }
    ): Promise<PlatformClientResponse<T>>;
    delete<T>(
      url: string,
      headers?: {
        [s: string]: string
      }
    ): Promise<PlatformClientResponse<T>>;
    head<T>(
      url: string,
      headers?: {
        [s: string]: string
      }
    ): Promise<PlatformClientResponse<T>>;
    options<T>(
      url: string,
      headers?: {
        [s: string]: string
      }
    ): Promise<PlatformClientResponse<T>>;
  }

  /**
   * RequestLogger
   */
  declare export interface RequestLoggerConfiguration {
    logFunction?: (msg: any) => void;
    extendErrorObjects?: boolean;
    jsonSpace?: number;
  }
  declare export class RequestLogger {
    constructor(configuration?: RequestLoggerConfiguration): this;
    log(msg: any): void;
  }

  /**
   * ServiceTokenProvider
   */
  declare export interface ServiceTokenProviderConfiguration {
    clientId: string;
    encryptedClientSecret: string;
    audience: string;
    tokenEndpoint: string;
  }
  declare export class ServiceTokenProvider {
    constructor(
      httpClient: { [key: string]: any },
      kmsClient: { [key: string]: any },
      configuration?: ServiceTokenProviderConfiguration
    ): this;
    getToken(): Promise<string>;
    getTokenWithoutCache(): Promise<string>;
  }
}
