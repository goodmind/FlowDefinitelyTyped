declare module "stale-lru-cache" {
  declare class Cache<K, V> {
    constructor(options?: Cache$Cache$CacheOptions<K, V>): this;
    delete(key: K): boolean;
    get(key: K): V | void;
    set(
      key: K,
      value: V,
      options?: string | Cache$Cache$SetOptions<K, V>
    ): boolean;
    has(key: K): boolean;
    isStale(key: K): boolean;
    keys(): K[];
    reset(): void;
    size(): number;
    values(): V[];
    wrap(
      key: K,
      revalidate: Cache$Cache$RevalidationCallback<K, V>,
      callback: Cache$Cache$OptionsCallback<K, V>
    ): void;
  }
  declare type Cache$OptionsCallback<K, V> = (
    error: any,
    value?: V,
    options?: string | Cache$SetOptions<K, V>
  ) => void;

  declare type Cache$RevalidationCallback<K, V> = (
    key: K,
    callback: Cache$OptionsCallback<K, V>
  ) => void;

  declare interface Cache$CacheOptions<K, V> {
    maxAge?: number;
    staleWhileRevalidate?: number;
    revalidate?: Cache$RevalidationCallback<K, V>;
    maxSize?: number;
    getSize?: (value: V, key: K) => number;
  }

  declare interface Cache$SetOptions<K, V> {
    maxAge?: number;
    staleWhileRevalidate?: number;
    revalidate?: Cache$RevalidationCallback<K, V>;
  }
  declare module.exports: typeof Cache;
}
