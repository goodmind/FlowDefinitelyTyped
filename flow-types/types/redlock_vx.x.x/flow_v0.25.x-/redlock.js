declare module "redlock" {
  import typeof * as Promise from "bluebird";

  import type { EventEmitter } from "events";

  declare module.exports: typeof Redlock;

  declare type Redlock$Callback<T> = (err: any, value?: T) => void;

  declare class Redlock$Lock {
    redlock: Redlock;
    resource: string;
    value: string | null;
    expiration: number;
    constructor(
      redlock: Redlock,
      resource: string,
      value: string | null,
      expiration: number
    ): this;
    unlock(callback?: Redlock$Callback<void>): Promise<void>;
    extend(
      ttl: number,
      callback?: Redlock$Callback<Redlock$Lock>
    ): Promise<Redlock$Lock>;
  }

  declare interface Redlock$Options {
    driftFactor?: number;
    retryCount?: number;
    retryDelay?: number;
    retryJitter?: number;
    lockScript?: (origLockScript: string) => string;
    unlockScript?: (origUnlockScript: string) => string;
    extendScript?: (origExtendScript: string) => string;
  }

  declare class Redlock$LockError mixins Error {
    name: "LockError";
    constructor(message?: string): this;
  }

  declare interface Redlock$CompatibleRedisClient {
    eval(args: any[], callback?: (err: Error | null, res: any) => void): any;
    eval(...args: any[]): any;
  }
  declare class Redlock mixins EventEmitter {
    Redlock$LockError: typeof undefined;
    Redlock$Lock: typeof undefined;
    driftFactor: number;
    retryCount: number;
    retryDelay: number;
    retryJitter: number;
    servers: Redlock$Redlock$CompatibleRedisClient[];
    constructor(
      clients: Redlock$Redlock$CompatibleRedisClient[],
      options?: Redlock$Redlock$Options
    ): this;
    acquire(
      resource: string,
      ttl: number,
      callback?: Redlock$Redlock$Callback<Redlock$Redlock$Lock>
    ): Promise<Redlock$Redlock$Lock>;
    lock(
      resource: string,
      ttl: number,
      callback?: Redlock$Redlock$Callback<Redlock$Redlock$Lock>
    ): Promise<Redlock$Redlock$Lock>;
    disposer(
      resource: string,
      ttl: number,
      errorHandler?: Redlock$Redlock$Callback<void>
    ): Promise.Disposer<Redlock$Redlock$Lock>;
    release(
      lock: Redlock$Redlock$Lock,
      callback?: Redlock$Redlock$Callback<void>
    ): Promise<void>;
    unlock(
      lock: Redlock$Redlock$Lock,
      callback?: Redlock$Redlock$Callback<void>
    ): Promise<void>;
    extend(
      lock: Redlock$Redlock$Lock,
      ttl: number,
      callback?: Redlock$Redlock$Callback<Redlock$Redlock$Lock>
    ): Promise<Redlock$Redlock$Lock>;
    addListener(event: "clientError", listener: (err: any) => void): this;
    on(event: "clientError", listener: (err: any) => void): this;
    once(event: "clientError", listener: (err: any) => void): this;
    removeListener(event: "clientError", listener: (err: any) => void): this;
  }
}
