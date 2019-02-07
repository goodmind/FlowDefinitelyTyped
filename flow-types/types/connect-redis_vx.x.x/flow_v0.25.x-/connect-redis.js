declare module "connect-redis" {
  import typeof * as express from "express";

  import typeof * as session from "express-session";

  import typeof * as redis from "redis";

  declare function s(
    options: (options?: session.SessionOptions) => express.RequestHandler
  ): s$s$RedisStore;

  declare type s$RedisStore = {
    new(options: s$RedisStoreOptions): session.Store
  } & session.Store;

  declare interface s$RedisStoreOptions {
    client?: redis.RedisClient;
    host?: string;
    port?: number;
    socket?: string;
    url?: string;
    ttl?: number;
    disableTTL?: boolean;
    db?: number;
    pass?: string;
    prefix?: string;
    unref?: boolean;
    serializer?: s$Serializer | JSON;
    logErrors?: boolean | ((error: string) => void);
    scanCount?: number;
  }

  declare interface s$Serializer {
    stringify: Function;
    parse: Function;
  }
  declare module.exports: typeof s;
}
