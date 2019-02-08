declare module "fast-list" {
  declare module.exports: typeof FastList;

  declare var FastList: FastListFactory;
  declare interface FastListFactory {
    <T>(): FastList$FastList$List<T>;
    new<T>(): FastList$FastList$List<T>;
  }
  declare interface FastList$List<T> {
    +length: number;
    push(item: T): void;
    pop(): T | void;
    unshift(item: T): void;
    shift(): T | void;
    drop(): void;
    item(index: number): T | void;
    array$map<U, V>(
      callbackfn: (value: T, index: number, plugins$list: this) => U,
      thisArg?: V
    ): FastList$List<U>;
    array$reduce<U, V>(
      callbackfn: (acc: U, value: T, index: number, plugins$list: this) => U,
      initialValue?: U,
      thisArg?: V
    ): U;
    array$forEach<U>(
      callbackfn: (value: T, index: number, plugins$list: this) => void,
      thisArg?: U
    ): void;
    util$filter<U>(
      callbackfn: (value: T, index: number, plugins$list: this) => boolean,
      thisArg?: U
    ): FastList$List<T>;
    slice(start?: number, end?: number): T[];
  }
}
