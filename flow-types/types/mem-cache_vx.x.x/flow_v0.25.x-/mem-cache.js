declare module "mem-cache" {
  import type { EventEmitter } from "events";

  declare interface CacheOptions {
    timeout?: number;
    doesNotRenewTimeout?: boolean;
    timeoutDisabled?: boolean;
  }
  declare class Cache mixins EventEmitter {
    keys: string[];
    length: number;
    constructor(options?: number | CacheOptions): this;
    set(key: string, value: any, timeout?: number): void;
    get(key: string): any;
    remove(key: string): void;
    clean(): void;
  }
  declare module.exports: typeof Cache;
}
