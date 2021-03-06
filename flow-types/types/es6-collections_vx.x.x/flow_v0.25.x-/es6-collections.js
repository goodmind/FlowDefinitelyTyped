declare interface IteratorResult<T> {
  done: boolean;
  value?: T;
}
declare interface Iterator<T> {
  next(value?: any): IteratorResult<T>;
  return?: (value?: any) => IteratorResult<T>;
  throw?: (e?: any) => IteratorResult<T>;
}
declare interface ForEachable<T> {
  forEach(callbackfn: (value: T) => void): void;
}
declare interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(
    callbackfn: (value: V, index: K, map: Map<K, V>) => void,
    thisArg?: any
  ): void;
  get(key: K): V;
  has(key: K): boolean;
  set(key: K, value?: V): Map<K, V>;
  entries(): Iterator<[K, V]>;
  keys(): Iterator<K>;
  values(): Iterator<V>;
  size: number;
}
declare interface MapConstructor {
  new<K, V>(): Map<K, V>;
  new<K, V>(iterable: ForEachable<[K, V]>): Map<K, V>;
  prototype: Map<any, any>;
}
declare var Map: MapConstructor;
declare interface Set<T> {
  add(value: T): Set<T>;
  clear(): void;
  delete(value: T): boolean;
  forEach(
    callbackfn: (value: T, index: T, set: Set<T>) => void,
    thisArg?: any
  ): void;
  has(value: T): boolean;
  entries(): Iterator<[T, T]>;
  keys(): Iterator<T>;
  values(): Iterator<T>;
  size: number;
}
declare interface SetConstructor {
  new<T>(): Set<T>;
  new<T>(iterable: ForEachable<T>): Set<T>;
  prototype: Set<any>;
}
declare var Set: SetConstructor;
declare interface WeakMap<K: { [key: string]: any }, V> {
  delete(key: K): boolean;
  clear(): void;
  get(key: K): V;
  has(key: K): boolean;
  set(key: K, value?: V): WeakMap<K, V>;
}
declare interface WeakMapConstructor {
  new<K: { [key: string]: any }, V>(): WeakMap<K, V>;
  new<K: { [key: string]: any }, V>(
    iterable: ForEachable<[K, V]>
  ): WeakMap<K, V>;
  prototype: WeakMap<any, any>;
}
declare var WeakMap: WeakMapConstructor;
declare interface WeakSet<T> {
  delete(value: T): boolean;
  clear(): void;
  add(value: T): WeakSet<T>;
  has(value: T): boolean;
}
declare interface WeakSetConstructor {
  new<T>(): WeakSet<T>;
  new<T>(iterable: ForEachable<T>): WeakSet<T>;
  prototype: WeakSet<any>;
}
declare var WeakSet: WeakSetConstructor;
declare module "es6-collections" {
  declare var Map: MapConstructor;
  declare var Set: SetConstructor;
  declare var WeakMap: WeakMapConstructor;
  declare var WeakSet: WeakSetConstructor;
}
