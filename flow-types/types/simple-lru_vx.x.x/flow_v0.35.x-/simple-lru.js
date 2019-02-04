declare module 'simple-lru' {
        declare class SimpleLRU<K, V>  {
constructor(max: number): this;
del(key: K): V | void;
get(key: K): V | void;
has(key: K): boolean;
keys(): K[];
length(): number;
max(max?: number): number;
peek(key: K): V | void;
reset(): void;
set(key: K, val: V): void;
static version: string
}
	declare module.exports: typeof SimpleLRU

    }
