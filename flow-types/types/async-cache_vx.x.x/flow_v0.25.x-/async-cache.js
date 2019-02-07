declare module "async-cache" {
  import type { AsyncCache$Options as LRUOptions } from "lru-cache";

  declare module.exports: typeof AsyncCache;

  declare var AsyncCache: AsyncCacheFactory;
  declare interface AsyncCacheFactory {
    <T>(
      options: AsyncCache$AsyncCache$Options<T>
    ): AsyncCache$AsyncCache$Cache<T>;
    new<T>(
      options: AsyncCache$AsyncCache$Options<T>
    ): AsyncCache$AsyncCache$Cache<T>;
  }
  declare interface AsyncCache$Cache<T> {
    +itemCount: number;
    get(key: string, cb: (error: any, value: T) => void): void;
    keys(): string[];
    set(key: string, value: T, maxAge?: number): boolean;
    reset(): void;
    has(key: string): boolean;
    del(key: string): void;
    peek(key: string): T | void;
  }

  declare type AsyncCache$Options<T> = {
    load(
      key: string,
      callback: (error: any, asyncValue: T, maxAge?: number) => void
    ): void
  } & LRUOptions<string, T>;
}
