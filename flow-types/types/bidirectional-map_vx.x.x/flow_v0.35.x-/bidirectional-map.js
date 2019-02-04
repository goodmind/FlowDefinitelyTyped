declare module 'bidirectional-map' {
        declare export default class BiMap<TValue>  {
constructor(object?: {
[i: string]: TValue
}): this;
size: number;
set(key: string, value: TValue): void;
get(key: string): TValue;
getKey(value: TValue): string;
clear(): void;
delete(key: string): void;
deleteValue(value: TValue): void;
entries(): IterableIterator<[string, TValue]>;
has(key: string): boolean;
hasValue(value: TValue): boolean;
keys(): IterableIterator<string>;
values(): IterableIterator<TValue>
}
    }
