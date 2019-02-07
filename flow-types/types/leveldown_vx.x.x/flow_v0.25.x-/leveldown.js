declare module "leveldown" {
  import type {
    AbstractLevelDOWN,
    AbstractIteratorOptions,
    AbstractIterator,
    AbstractOpenOptions,
    AbstractGetOptions,
    ErrorCallback,
    ErrorValueCallback,
    AbstractChainedBatch,
    AbstractBatch,
    AbstractOptions
  } from "abstract-leveldown";

  declare export type Bytes = string | Buffer;
  declare export type ErrorSizeCallback = (
    err: Error | void,
    size: number
  ) => void;
  declare export type LevelDown = {
    open(cb: ErrorCallback): void,
    open(options: LevelDownOpenOptions, cb: ErrorCallback): void,
    get(key: Bytes, cb: ErrorValueCallback<Bytes>): void,
    get(
      key: Bytes,
      options: LevelDownGetOptions,
      cb: ErrorValueCallback<Bytes>
    ): void,
    put(key: Bytes, value: Bytes, cb: ErrorCallback): void,
    put(
      key: Bytes,
      value: Bytes,
      options: LevelDownPutOptions,
      cb: ErrorCallback
    ): void,
    del(key: Bytes, cb: ErrorCallback): void,
    del(key: Bytes, options: LevelDownDelOptions, cb: ErrorCallback): void,
    batch(): AbstractChainedBatch<Bytes, Bytes>,
    batch(
      array: AbstractBatch[],
      cb: ErrorCallback
    ): AbstractChainedBatch<Bytes, Bytes>,
    batch(
      array: AbstractBatch[],
      options: LevelDownBatchOptions,
      cb: ErrorCallback
    ): AbstractChainedBatch<Bytes, Bytes>,
    approximateSize(start: Bytes, end: Bytes, cb: ErrorSizeCallback): void,
    compactRange(start: Bytes, end: Bytes, cb: ErrorCallback): void,
    getProperty(property: string): string,
    destroy(location: string, cb: ErrorCallback): void,
    repair(location: string, cb: ErrorCallback): void,
    iterator(options?: LevelDownIteratorOptions): LevelDownIterator
  } & AbstractLevelDOWN<Bytes, Bytes>;

  declare interface LevelDownConstructor {
    new(location: string): LevelDown;
    (location: string): LevelDown;
  }
  declare export type LevelDownOpenOptions = {
    compression?: boolean,
    cacheSize?: number,
    writeBufferSize?: number,
    blockSize?: number,
    maxOpenFiles?: number,
    blockRestartInterval?: number,
    maxFileSize?: number
  } & AbstractOpenOptions;

  declare export type LevelDownGetOptions = {
    fillCache?: boolean
  } & AbstractGetOptions;

  declare export type LevelDownPutOptions = {
    sync?: boolean
  } & AbstractOptions;

  declare export type LevelDownDelOptions = {
    sync?: boolean
  } & AbstractOptions;

  declare export type LevelDownBatchOptions = {
    sync?: boolean
  } & AbstractOptions;

  declare export type LevelDownIteratorOptions = {
    fillCache?: boolean
  } & AbstractIteratorOptions<Bytes>;

  declare export type LevelDownIterator = {
    seek(key: Bytes): void,
    binding: any,
    cache: any,
    finished: any,
    fastFuture: any
  } & AbstractIterator<Bytes, Bytes>;

  declare var LevelDOWN: LevelDownConstructor;
  declare export default typeof LevelDOWN;
}
