declare module "collectionsjs" {
  declare export default class Collection<T> {
    constructor(items?: T[]): this;
    add(item: T): Collection<T>;
    all(): Collection<T>;
    average(property?: string | ((property?: number) => number)): number;
    chunk(size: number): Collection<T>;
    collect(collectable: T[]): Collection<T>;
    concat(collection: T[] | Collection<T>): Collection<T>;
    contains(closure: (item: T) => boolean): boolean;
    count(): number;
    each(callback: (item: T) => void): Collection<T>;
    filter(callback: (item: T) => boolean): Collection<T>;
    find(item: T): number;
    first(callback?: ((item: T) => boolean) | null): T;
    flatten(deep?: boolean): Collection<T>;
    get(index: number): T;
    has(item: T): boolean;
    join(separator?: string): string;
    keys(): Collection<T>;
    last(callback?: ((item: T) => boolean) | null): T;
    map<R>(callback: (item: T) => R): Collection<R>;
    pluck(property: string): Collection<T>;
    push(item: T): Collection<T>;
    reduce<R>(callback: (previous: R, current: T) => R, initial: R): R;
    reject(callback: (item: T) => boolean): Collection<T>;
    remove(item: T): boolean;
    reverse(): Collection<T>;
    skip(count: number): Collection<T>;
    slice(start: number, end?: number): Collection<T>;
    sort(compare?: () => boolean): Collection<T>;
    sortBy(property: string, order?: string): Collection<T>;
    stringify(): string;
    sum(
      property: /* Flow doesn't support conditional types, use $Call utility type */ any
    ): number;
    take(count: number): Collection<T>;
    static macro(
      name: string,
      callback: (coll: Collection<mixed>, ...args: mixed[]) => mixed
    ): void;
    unique(callback?: string | null | ((item: T) => any)): Collection<T>;
    values(): Collection<T>;
    where<K: $Keys<T>>(key: K, value: $ElementType<T, K>): Collection<T>;
    where(callback: (item: T) => boolean): Collection<T>;
    zip(array: T[] | Collection<T>): Collection<T>;
  }
}
