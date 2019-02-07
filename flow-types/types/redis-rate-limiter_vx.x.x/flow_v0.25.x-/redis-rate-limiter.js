declare module "redis-rate-limiter" {
  import typeof * as express from "express";

  import typeof * as redis from "redis";

  declare class RedisRateLimiter {
    static create(
      options: RedisRateLimiter$RedisRateLimiter$Options
    ): (
      req: express.Request,
      callback: (
        err: Error,
        res: RedisRateLimiter$RedisRateLimiter$Response
      ) => void
    ) => void;
    static middleware(
      options: RedisRateLimiter$RedisRateLimiter$Options
    ): express.RequestHandler;
  }
  declare export interface RedisRateLimiter$Options {
    redis: redis.RedisClient;
    key: "ip" | ((req: express.Request) => string);
    window?: number;
    limit?: number;
    rate?: string;
    deleteImmediatelyIfRaceCondition?: boolean;
    onPossibleRaceCondition?: (key: string) => void;
  }

  declare export interface RedisRateLimiter$Response {
    key: string;
    current: number;
    limit: number;
    window: number;
    over: boolean;
  }
  declare module.exports: typeof RedisRateLimiter;
}
