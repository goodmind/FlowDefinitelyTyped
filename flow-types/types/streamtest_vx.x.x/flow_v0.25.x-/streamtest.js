declare module "streamtest" {
  import type {
    PassThrough,
    Readable,
    ReadableOptions,
    Writable,
    WritableOptions
  } from "stream";

  declare export type Chunk = string | Buffer | Uint8Array;
  declare export type NonNull = {} | void;

  /**
   * Allowed version names for streamtest
   */
  declare export type VersionName = "v1" | "v2";

  /**
   * List of supported versions (currently v1 and v2). v1 should be used for
   * Node < 0.10 streams.
   */
  declare export var versions: VersionName[];

  /**
   * v1 methods (Node version < 0.10)
   */
  declare export var v1: typeof v2;

  declare var npm$namespace$v2: {
    fromChunks: typeof v2$fromChunks,
    fromObjects: typeof v2$fromObjects,
    fromErroredChunks: typeof v2$fromErroredChunks,
    fromErroredObjects: typeof v2$fromErroredObjects,
    toChunks: typeof v2$toChunks,
    toObjects: typeof v2$toObjects,
    toText: typeof v2$toText,
    readable: typeof v2$readable,
    writable: typeof v2$writable,
    syncReadableChunks: typeof v2$syncReadableChunks,
    syncReadableObjects: typeof v2$syncReadableObjects,
    syncWrite: typeof v2$syncWrite,
    syncError: typeof v2$syncError
  };

  /**
   * Create a readable stream streaming 'chunks' each after 'timeout'
   * milliseconds and then end. Useful for testing buffer based streams.
   * @param chunks The input chunks for the readable stream
   * @param timeout The timeout (in milliseconds) used to space chunks.
   * Defaults to 0.
   * @returns A new readable stream
   */
  declare function v2$fromChunks(chunks: Chunk[], timeout?: number): Readable;

  /**
   * Create a readable stream streaming 'objects' each after 'timeout'
   * milliseconds and then end. Useful for testing objectMode based streams.
   * @param chunks The input objects for the readable stream
   * @param timeout The timeout (in milliseconds) used to space chunks.
   * Defaults to 0.
   * @returns A new readable stream
   */
  declare function v2$fromObjects(
    objects: NonNull[],
    timeout?: number
  ): Readable;

  /**
   * Create a readable stream streaming 'chunks' each after 'timeout'
   * milliseconds, emit 'err,' and then end. Useful for testing buffer based
   * streams.
   * @param err The error to emit
   * @param chunks The input objects for the readable stream
   * @param timeout The timeout (in milliseconds) used to space chunks.
   * Defaults to 0.
   * @returns A new readable stream
   */
  declare function v2$fromErroredChunks(
    err: Error,
    chunks: Chunk[],
    timeout?: number
  ): Readable;

  /**
   * Create a readable stream streaming 'objects' each after 'timeout'
   * milliseconds, emit 'err,' and then end. Useful for testing objectMode
   * based streams.
   * @param err The error to emit
   * @param chunks The input objects for the readable stream
   * @param timeout The timeout (in milliseconds) used to space chunks.
   * Defaults to 0.
   * @returns A new readable stream
   */
  declare function v2$fromErroredObjects(
    err: Error,
    objects: NonNull[],
    timeout?: number
  ): Readable;

  /**
   * Create a writable stream collecting written chunks and call the passed
   * callback function when it finishes.
   * @param cb The callback function. Takes an error as its first argument and
   * an array of chunks as its second
   * @returns A new writable stream
   */
  declare function v2$toChunks(
    cb: (err: Error, chunks: Chunk[]) => any
  ): Writable;

  /**
   * Create a writable stream collecting written chunks and call the passed
   * callback function when it finishes.
   * @param cb The callback function. Takes an error as its first argument and
   * an array of objects as its second
   * @returns A new writable stream
   */
  declare function v2$toObjects(
    cb: (err: Error, objects: NonNull[]) => any
  ): Writable;

  /**
   * Create a writable stream collecting written chunks and call the passed
   * callback function when it finishes.
   * @param cb The callback function. Takes an error as its first argument and
   * an string as its second
   * @returns A new writable stream
   */
  declare function v2$toText(cb: (err: Error, text: string) => any): Writable;

  /**
   * Create a new readable stream
   * @param options The options used to create the stream
   * @returns A new readable stream
   */
  declare function v2$readable(options?: ReadableOptions): Readable;

  /**
   * Create a new writable stream
   * @param options The options used to create the stream
   * @returns A new writable stream
   */
  declare function v2$writable(options?: WritableOptions): Writable;

  /**
   * Create a synchronous PassThrough stream
   * @returns A PassThrough stream
   */
  declare function v2$syncReadableChunks(): PassThrough;

  /**
   * Create a synchronous PassThrough stream in object mode
   * @returns A PassThrough stream
   */
  declare function v2$syncReadableObjects(): PassThrough;

  /**
   * Write chunks to a stream synchronously
   * @param stream The stream to write to
   * @param chunks The chunks to write
   */
  declare function v2$syncWrite(stream: Writable, chunks: Chunk[]): void;

  /**
   * Write chunks to a stream synchronously and emit an error when done
   * @param stream The stream to write to
   * @param err The error to emit
   * @param chunks The chunks to write
   */
  declare function v2$syncError(
    stream: Writable,
    err: Error,
    chunks: Chunk[]
  ): void;
}
