declare module "stream-buffers" {
  import typeof * as stream from "stream";

  declare export type WritableStreamBufferOptions = {
    initialSize?: number,
    incrementAmount?: number
  } & stream.WritableOptions;

  declare export class WritableStreamBuffer mixins stream.Writable {
    constructor(options?: WritableStreamBufferOptions): this;
    size(): number;
    maxSize(): number;
    getContents(length?: number): Buffer;
    getContentsAsString(encoding?: string, length?: number): string;
  }
  declare export type ReadableStreamBufferOptions = {
    frequency?: number,
    chunkSize?: number,
    initialSize?: number,
    incrementAmount?: number
  } & stream.ReadableOptions;

  declare export class ReadableStreamBuffer mixins stream.Readable {
    constructor(options?: ReadableStreamBufferOptions): this;
    put(data: string | Buffer, encoding?: string): void;
    stop(): void;
    size(): number;
    maxSize(): number;
  }
  declare export var DEFAULT_INITIAL_SIZE: number;
  declare export var DEFAULT_INCREMENT_AMOUNT: number;
  declare export var DEFAULT_FREQUENCY: number;
  declare export var DEFAULT_CHUNK_SIZE: number;
}
