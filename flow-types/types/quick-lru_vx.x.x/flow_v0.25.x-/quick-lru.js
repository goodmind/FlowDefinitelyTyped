declare module "quick-lru" {
  declare module.exports: typeof QuickLRU;

  declare class QuickLRU<K, V> mixins Iterable<[K, V]> {
    size: number;
    constructor(options: QuickLRU$QuickLRU$Options): this;
    undefined(): Iterator<[K, V]>;
    set(key: K, value: V): this;
    get(key: K): V | void;
    has(key: K): boolean;
    peek(key: K): V | void;
    delete(key: K): boolean;
    clear(): void;
    keys(): Iterable<K>;
    values(): Iterable<V>;
  }
  declare interface QuickLRU$Options {
    maxSize: number;
  }
}
