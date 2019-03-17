declare interface MapConstructor {}
declare interface WeakMapConstructor {}
declare interface SetConstructor {}
declare interface WeakSetConstructor {}
declare interface Set<T> {}
declare interface Map<K, V> {}
declare interface ReadonlySet<T> {}
declare interface IteratorResult<T> {}
declare interface Iterable<T> {}
declare interface Iterator<T> {
  next(value?: any): IteratorResult<T>;
}
declare interface IterableIterator<T> {}
declare interface AsyncIterableIterator<T> {}
declare interface SymbolConstructor {
  +iterator: Symbol;
  +asyncIterator: Symbol;
}
declare var Symbol: SymbolConstructor;
declare interface SharedArrayBuffer {
  +byteLength: number;
  slice(begin?: number, end?: number): SharedArrayBuffer;
}
declare module "util" {
  declare var inspect: typeof npm$namespace$inspect;

  declare var npm$namespace$inspect: {
    custom: typeof inspect$custom
  };
  declare var inspect$custom: Symbol;
  declare var promisify: typeof npm$namespace$promisify;

  declare var npm$namespace$promisify: {
    custom: typeof promisify$custom
  };
  declare var promisify$custom: Symbol;
}
