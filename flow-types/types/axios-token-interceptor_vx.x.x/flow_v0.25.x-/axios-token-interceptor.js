declare module "axios-token-interceptor" {
  import type { AxiosRequestConfig } from "axios";

  declare function AxiosTokenProvider(
    Options: AxiosTokenProvider$InterceptorOptions
  ): AxiosTokenProvider$TokenProvider;

  declare var npm$namespace$AxiosTokenProvider: {
    tokenCache: typeof AxiosTokenProvider$tokenCache
  };
  declare function AxiosTokenProvider$tokenCache(
    getToken: Promise<string>,
    options: AxiosTokenProvider$TokenCacheOptions
  ): AxiosTokenProvider$TokenCache;

  declare interface AxiosTokenProvider$InterceptorOptions {
    token?: string;
    getToken?: () => string | Promise<string>;
    header?: string;
    headerFormatter?: (token: string) => string;
  }

  declare type AxiosTokenProvider$TokenProvider = (
    config: AxiosRequestConfig
  ) => Promise<AxiosRequestConfig>;

  declare interface AxiosTokenProvider$TokenCacheOptions {
    getMaxAge?: () => number;
    maxAge?: number;
  }

  declare interface AxiosTokenProvider$TokenCache {
    reset(): void;
  }
  declare export default typeof AxiosTokenProvider;
}
