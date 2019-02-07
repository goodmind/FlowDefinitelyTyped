declare module "rolling-rate-limiter" {
  declare module.exports: typeof RollingRateLimiter;

  declare function RollingRateLimiter(
    options: RollingRateLimiter$RollingRateLimiter$InMemoryOptions
  ): RollingRateLimiter$RollingRateLimiter$SyncOrAsyncLimiter;

  declare function RollingRateLimiter(
    options: RollingRateLimiter$RollingRateLimiter$WithRedisOptions
  ): RollingRateLimiter$RollingRateLimiter$AsyncLimiter;

  declare interface RollingRateLimiter$GeneralOptions {
    interval: number;
    maxInInterval: number;
    minDifference?: number;
  }

  declare type RollingRateLimiter$WithRedisOptions = {
    redis: RollingRateLimiter$CompatibleRedisClient,
    namespace?: string
  } & RollingRateLimiter$GeneralOptions;

  declare interface RollingRateLimiter$CompatibleRedisClient {
    multi: () => any;
  }

  declare type RollingRateLimiter$InMemoryOptions = RollingRateLimiter$GeneralOptions;

  declare type RollingRateLimiter$AsyncLimiterWithToken = (
    token: string,
    callback: RollingRateLimiter$AsyncLimiterCallback
  ) => void;

  declare type RollingRateLimiter$AsyncLimiterWithoutToken = (
    callback: RollingRateLimiter$AsyncLimiterCallback
  ) => void;

  declare type RollingRateLimiter$AsyncLimiterCallback = (
    err: any,
    timeLeft: number,
    actionsLeft: number
  ) => void;

  declare type RollingRateLimiter$AsyncLimiter = RollingRateLimiter$AsyncLimiterWithToken &
    RollingRateLimiter$AsyncLimiterWithToken;

  declare type RollingRateLimiter$SyncLimiter = (token?: string) => number;

  declare type RollingRateLimiter$SyncOrAsyncLimiter = RollingRateLimiter$SyncLimiter &
    RollingRateLimiter$AsyncLimiter;
}
