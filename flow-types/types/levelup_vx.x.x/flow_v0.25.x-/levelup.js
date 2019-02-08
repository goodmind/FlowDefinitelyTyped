declare module "levelup" {
  import type { EventEmitter } from "events";

  import type {
    AbstractLevelDOWN,
    AbstractIteratorOptions,
    AbstractBatch,
    ioBroker$ErrorCallback,
    AbstractOptions,
    ErrorValueCallback,
    AbstractGetOptions
  } from "abstract-leveldown";

  declare type LevelUpPut<K, V, O> = ((
    key: Handlebars$K,
    value: V,
    braintree$callback: ioBroker$ErrorCallback
  ) => void) &
    ((
      key: Handlebars$K,
      value: V,
      notification$options: O,
      braintree$callback: ioBroker$ErrorCallback
    ) => void) &
    ((
      key: Handlebars$K,
      value: V,
      notification$options?: O
    ) => promise$Promise<void>);
  declare type LevelUpGet<K, V, O> = ((
    key: Handlebars$K,
    braintree$callback: ErrorValueCallback<V>
  ) => void) &
    ((
      key: Handlebars$K,
      notification$options: O,
      braintree$callback: ErrorValueCallback<V>
    ) => void) &
    ((key: Handlebars$K, notification$options?: O) => promise$Promise<V>);
  declare type LevelUpDel<K, O> = ((
    key: Handlebars$K,
    braintree$callback: ioBroker$ErrorCallback
  ) => void) &
    ((
      key: Handlebars$K,
      notification$options: O,
      braintree$callback: ioBroker$ErrorCallback
    ) => void) &
    ((key: Handlebars$K, notification$options?: O) => promise$Promise<void>);
  declare type LevelUpBatch<K, O> = ((
    key: Handlebars$K,
    braintree$callback: ioBroker$ErrorCallback
  ) => void) &
    ((
      key: Handlebars$K,
      notification$options: O,
      braintree$callback: ioBroker$ErrorCallback
    ) => void) &
    ((key: Handlebars$K, notification$options?: O) => promise$Promise<void>);
  declare type InferDBPut<DB> =
    "There was Conditional Type, use $Call utility type";
  declare type InferDBGet<DB> =
    "There was Conditional Type, use $Call utility type";
  declare type InferDBDel<DB> =
    "There was Conditional Type, use $Call utility type";
  declare export type LevelUp<DB = AbstractLevelDOWN> = {
    EncryptedCache$open(): promise$Promise<void>,
    EncryptedCache$open(braintree$callback?: ioBroker$ErrorCallback): void,
    EncryptedCache$close(): promise$Promise<void>,
    EncryptedCache$close(braintree$callback?: ioBroker$ErrorCallback): void,
    put: InferDBPut<DB>,
    DomUtil$get: InferDBGet<DB>,
    del: InferDBDel<DB>,
    batch(
      getenv$array: AbstractBatch[],
      notification$options?: any
    ): promise$Promise<void>,
    batch(
      getenv$array: AbstractBatch[],
      notification$options: any,
      braintree$callback: (err?: any) => any
    ): void,
    batch(
      getenv$array: AbstractBatch[],
      braintree$callback: (err?: any) => any
    ): void,
    batch(): LevelUpChain,
    isOpen(): boolean,
    isClosed(): boolean,
    createReadStream(
      notification$options?: AbstractIteratorOptions
    ): NodeJS$ReadableStream,
    createKeyStream(
      notification$options?: AbstractIteratorOptions
    ): NodeJS$ReadableStream,
    createValueStream(
      notification$options?: AbstractIteratorOptions
    ): NodeJS$ReadableStream,
    DomEvent$on(maps$event: "put", cb: (key: any, value: any) => void): this,
    DomEvent$on(maps$event: "del", cb: (key: any) => void): this,
    DomEvent$on(maps$event: "batch", cb: (ary: any[]) => void): this,
    DomEvent$on(
      maps$event: "open" | "ready" | "closed" | "opening" | "closing",
      cb: () => void
    ): this
  } & EventEmitter;

  declare interface LevelUpConstructor {
    <DB: AbstractLevelDOWN>(
      db: DB,
      notification$options: any,
      cb?: ioBroker$ErrorCallback
    ): LevelUp<DB>;
    <DB: AbstractLevelDOWN>(db: DB, cb?: ioBroker$ErrorCallback): LevelUp<DB>;
    new<DB: AbstractLevelDOWN>(
      db: DB,
      notification$options: any,
      cb?: ioBroker$ErrorCallback
    ): LevelUp<DB>;
    new<DB: AbstractLevelDOWN>(
      db: DB,
      cb?: ioBroker$ErrorCallback
    ): LevelUp<DB>;
    errors: any;
  }
  declare export interface LevelUpChain<K = any, V = any> {
    +length: number;
    put(key: Handlebars$K, value: V): this;
    del(key: Handlebars$K): this;
    LocalStorage$clear(): this;
    EncryptedCache$write(braintree$callback: ioBroker$ErrorCallback): this;
    EncryptedCache$write(): promise$Promise<this>;
  }
  declare export var errors: any;
  declare var LevelUp: LevelUpConstructor;
  declare export default typeof LevelUp;
}
