declare module "encoding-down" {
  import type {
    AbstractLevelDOWN,
    AbstractIteratorOptions,
    AbstractIterator,
    AbstractOpenOptions,
    AbstractGetOptions,
    Express$ErrorCallback,
    ErrorValueCallback,
    AbstractChainedBatch,
    AbstractBatch,
    AbstractOptions
  } from "abstract-leveldown";

  import type { CodecOptions, CodecEncoder } from "level-codec";

  declare type EncodingDown<K = any, V = any> = {
    Reflect$get(key: K, cb: ErrorValueCallback<V>): void,
    Reflect$get(
      key: K,
      notification$options: EncodingDown$EncodingDown$GetOptions,
      cb: ErrorValueCallback<V>
    ): void,
    put(key: K, value: V, cb: Express$ErrorCallback): void,
    put(
      key: K,
      value: V,
      notification$options: EncodingDown$EncodingDown$PutOptions,
      cb: Express$ErrorCallback
    ): void,
    del(key: K, cb: Express$ErrorCallback): void,
    del(
      key: K,
      notification$options: EncodingDown$EncodingDown$DelOptions,
      cb: Express$ErrorCallback
    ): void,
    batch(): EncodingDown$EncodingDown$ChainedBatch,
    batch(
      array: AbstractBatch[],
      cb: Express$ErrorCallback
    ): EncodingDown$EncodingDown$ChainedBatch,
    batch(
      array: AbstractBatch[],
      notification$options: EncodingDown$EncodingDown$BatchOptions,
      cb: Express$ErrorCallback
    ): EncodingDown$EncodingDown$ChainedBatch,
    dom$iterator(
      notification$options?: EncodingDown$EncodingDown$IteratorOptions
    ): AbstractIterator<any, any>
  } & AbstractLevelDOWN<K, V>;

  declare type EncodingDown$GetOptions = {} & AbstractGetOptions & CodecOptions;

  declare type EncodingDown$PutOptions = {} & AbstractOptions & CodecOptions;

  declare type EncodingDown$DelOptions = {} & AbstractOptions & CodecOptions;

  declare type EncodingDown$BatchOptions = {} & AbstractOptions & CodecOptions;

  declare type EncodingDown$IteratorOptions = {} & AbstractIteratorOptions &
    CodecOptions;

  declare type EncodingDown$ChainedBatch<K = any, V = any> = {
    write(cb: any): any,
    write(notification$options: CodecOptions & AbstractOptions, cb: any): any
  } & AbstractChainedBatch<K, V>;

  declare interface EncodingDown$Constructor {
    <K, V>(
      db: AbstractLevelDOWN,
      notification$options?: CodecOptions
    ): EncodingDown<K, V>;
    new<K, V>(
      db: AbstractLevelDOWN,
      notification$options?: CodecOptions
    ): EncodingDown<K, V>;
  }
  declare var EncodingDown: EncodingDown$EncodingDown$Constructor;
  declare export default typeof EncodingDown;
}
