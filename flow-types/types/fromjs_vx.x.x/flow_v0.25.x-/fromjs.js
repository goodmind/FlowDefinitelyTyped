declare module "fromjs" {
  declare function from<T>(results: Array<T>): FromJS$FromJS$IQueryable<T>;

  declare function from<T>(results: any): FromJS$FromJS$IQueryable<any>;

  declare export type FromJS$IOrderedQueryable<T> = {
    thenBy<TResult>(item: (item: T) => TResult): FromJS$IOrderedQueryable<T>,
    thenByDesc<TResult>(item: (item: T) => TResult): FromJS$IOrderedQueryable<T>
  } & FromJS$IQueryable<T>;

  declare export interface FromJS$IQueryable<T> {
    where(predicate: (item: T) => boolean): FromJS$IQueryable<T>;
    select<TResult>(item: (item: T) => TResult): FromJS$IQueryable<TResult>;
    orderByDesc<TResult>(
      item: (item: T) => TResult
    ): FromJS$IOrderedQueryable<T>;
    orderBy<TResult>(item: (item: T) => TResult): FromJS$IOrderedQueryable<T>;
    selectMany<TResult>(
      item: (item: T) => Array<TResult>
    ): FromJS$IQueryable<TResult>;
    skip<TResult>(count: Number): FromJS$IQueryable<TResult>;
    take<TResult>(count: Number): FromJS$IQueryable<TResult>;
    single(): T;
    single(predicate: (item: T) => boolean): T;
    singleOrDefault(): T;
    singleOrDefault(predicate: (item: T) => boolean): T;
    first(): T;
    last(): T;
    max(): T;
    distinct(): FromJS$IQueryable<T>;
    count(): number;
    contains(item: T): boolean;
    first(predicate: (item: T) => boolean): T;
    firstOrDefault(): T;
    each<TKey>(action: (value: T, key: TKey) => void): void;
    each(action: (item: T) => void, a?: boolean): void;
    toArray(): Array<T>;
    concat(second: Array<T>): FromJS$IQueryable<T>;
    sum(): T;
    distinct(): FromJS$IQueryable<T>;
    any(): boolean;
    any(predicate: (item: T) => boolean): boolean;
    all(predicate: (item: T) => boolean): boolean;
  }
}
