declare module "es6-weak-map" {
  declare module.exports: typeof WeakMap;

  declare interface Iterable<T> {
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): Iterator<T>;
  }
  declare class WeakMap<K, V> {
    constructor(): this;
    constructor(iterable: Iterable<[K, V]>): this;
    delete(key: K): boolean;
    get(key: K): V;
    has(key: K): boolean;
    set(key: K, value?: V): WeakMap<K, V>;
  }
}
