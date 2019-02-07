declare module "connect-pg-simple" {
  import type { RequestHandler } from "express";

  import type { Store, SessionOptions } from "express-session";

  import type { Pool, PoolConfig } from "pg";

  declare function connectPgSimple(
    session: (options?: SessionOptions) => RequestHandler
  ): typeof undefined;

  declare class connectPgSimple$PGStore mixins Store {
    constructor(options?: connectPgSimple$PGStoreOptions): this;
    close(): void;
    pruneSessions(callback?: (err: Error) => void): void;
  }

  declare interface connectPgSimple$PGStoreOptions {
    pool?: Pool;
    pgPromise?: { [key: string]: any };
    conString?: string;
    conObject?: PoolConfig;
    ttl?: number;
    schemaName?: string;
    tableName?: string;
    pruneSessionInterval?: false | number;
    errorLog?: (...args: any[]) => void;
  }
  declare module.exports: typeof connectPgSimple;
}
