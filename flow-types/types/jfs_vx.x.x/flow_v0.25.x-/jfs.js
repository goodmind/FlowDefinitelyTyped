declare module "jfs" {
  declare var JsonFileStore$JsonFileStore: JsonFileStore$JsonFileStore.JsonFileStore$JsonFileStore;
  declare interface JsonFileStore$Storable {
    [key: string]: any;
  }

  declare interface JsonFileStore$Options {
    type?: "single" | "memory";
    pretty?: boolean;
    saveId?: boolean | string;
  }

  declare interface JsonFileStore$JsonFileStore {
    new<T: JsonFileStore$Storable>(
      name?: string,
      opts?: JsonFileStore$Options
    ): JsonFileStore$Instance<T>;
  }

  declare interface JsonFileStore$Instance<T> {
    save<K: $Keys<T>, V: $ElementType<T, K>>(
      id: K,
      o: V,
      cb?: (err?: Error, id?: K) => void
    ): void;
    save<V: $ElementType<T, $Keys<T>>>(
      o: V,
      cb?: (err?: Error, id?: string) => void
    ): void;
    saveSync<K: $Keys<T>, V: $ElementType<T, K>>(id: K, o: V): void;
    saveSync<V: $ElementType<T, $Keys<T>>>(o: V): void;
    get<K: $Keys<T>, V: $ElementType<T, K>>(
      id: K,
      cb?: (err?: Error, o?: V) => void
    ): void;
    getSync<K: $Keys<T>, V: $ElementType<T, K>>(id: K): V | Error;
    delete<K: $Keys<T>>(id: K, cb?: (err?: Error) => void): void;
    deleteSync<K: $Keys<T>>(id: K): Error | void;
    all(cb: (err?: Error, all?: T) => void): void;
    allSync(): T;
  }
  declare module.exports: typeof JsonFileStore$JsonFileStore;
}
