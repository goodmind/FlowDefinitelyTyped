declare module "memory-cache" {
  declare export class CacheClass<K, V> {
    put(
      key: K,
      value: V,
      time?: number,
      timeoutCallback?: (key: K, value: V) => void
    ): V;
    get(key: K): V;
    del(key: K): void;
    clear(): void;
    size(): number;
    memsize(): number;
    debug(bool: boolean): void;
    hits(): number;
    misses(): number;
    keys(): K[];
  }
  declare export var Cache: typeof CacheClass;
  declare export function put<V>(
    key: any,
    value: V,
    time?: number,
    timeoutCallback?: (key: any, value: any) => void
  ): V;

  declare export function get(key: any): any;

  declare export function del(key: any): void;

  declare export function clear(): void;

  declare export function size(): number;

  declare export function memsize(): number;

  declare export function debug(bool: boolean): void;

  declare export function hits(): number;

  declare export function misses(): number;

  declare export function keys(): any[];
}
