declare module "p-memoize" {
  declare interface MemOptions {
    /**
     * Milliseconds until the cache expires.
     * @default Infinity
     */
    maxAge?: number;

    /**
     * Determines the cache key for storing the result based on the
     * function arguments. By default, if there's only one argument and
     * it's a primitive, it's used directly as a key, otherwise it's all
     * the function arguments JSON stringified as an array.
     *
     * You could for example change it to only cache on the first argument
     * `x => JSON.stringify(x)`.
     */
    cacheKey?: (...args: any[]) => string;

    /**
     * Use a different cache storage.
     * Must implement the following methods:
     * `.has(key)`, `.get(key)`, `.set(key, value)`, `.delete(key)`, and optionally `.clear()`
     * You could for example use a `WeakMap` instead or `quick-lru` for a LRU cache.
     * @default new Map()
     */
    cache?: pMemoize$pMemoize$Cache;

    /**
     * Cache rejected promises.
     */
    cachePromiseRejection?: boolean;
  }
  declare type PMemoize = <T: (...args: any[]) => any>(
    f: T,
    memoizeOptions?: MemOptions
  ) => T;
  declare var pMemoize: PMemoize;
  declare interface pMemoize$Cache<K = string, V = any> {
    get(key: K): V;
    set(key: K, value: V): void;
    has(key: K): boolean;
    delete(key: K): void;
    clear?: () => void;
  }
  declare module.exports: typeof pMemoize;
}
