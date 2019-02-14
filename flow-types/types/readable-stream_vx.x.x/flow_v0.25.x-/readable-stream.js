declare module "readable-stream" {
  import typeof * as events from "events";

  import typeof * as stream from "stream";

  import typeof * as SafeBuffer from "safe-buffer";

  import type { NodeStringDecoder } from "string_decoder";

  declare class _Readable mixins stream.Readable {
    _readableState: _Readable$ReadableState;
    destroyed: boolean;
    constructor(options?: _Readable$ReadableOptions): this;
    destroy(err?: Error, callback?: (error: Error | null) => void): this;
    _undestroy(): void;
  }

  declare var npm$namespace$_Readable: {
    NodeBaseExport: typeof _Readable$NodeBaseExport,

    Duplex: typeof _Readable$Duplex,
    PassThrough: typeof _Readable$PassThrough,
    Readable: typeof _Readable$Readable,
    Transform: typeof _Readable$Transform,
    Writable: typeof _Readable$Writable,
    Stream: typeof _Readable$Stream
  };
  declare interface _Readable$Entry<D> {
    data: D;
    next: _Readable$Entry<D> | null;
  }

  declare interface _Readable$BufferList<
    D: SafeBuffer.Buffer = SafeBuffer.Buffer
  > {
    head: _Readable$Entry<D>;
    tail: _Readable$Entry<D>;
    length: number;
    push(v: D): void;
    unshift(v: D): void;
    shift(): D;
    clear(): void;
    join(s: any): string;
    concat(n: number): D;
  }

  declare interface _Readable$Destroy {
    destroy(
      error: Error | null,
      callback?: (error: Error | null) => void
    ): _Readable$Readable | _Readable$Writable;
    undestroy(): void;
  }

  declare type _Readable$DuplexOptions = _Readable$ReadableOptions &
    _Readable$WritableOptions & {
      allowHalfOpen?: boolean,
      readable?: boolean,
      writable?: boolean,
      read?: (size: number) => void,
      write?: (
        chunk: any,
        encoding: string,
        callback: (error?: Error | null) => void
      ) => void,
      writev?: (
        chunks: Array<{
          chunk: any,
          encoding: string
        }>,
        callback: (error?: Error | null) => void
      ) => void,
      final?: (callback: (error?: Error | null) => void) => void,
      destroy?: (
        error: Error | null,
        callback: (error: Error | null) => void
      ) => void
    };

  declare class _Readable$Duplex mixins Writable, _Readable, stream.Duplex {
    allowHalfOpen: boolean;
    destroyed: boolean;
    readable: boolean;
    readableHighWaterMark: number;
    readableLength: number;
    _readableState: _Readable$ReadableState;
    _read(size?: number): void;
    read(size?: number): any;
    setEncoding(enc: string): this;
    resume(): this;
    pause(): this;
    isPaused(): boolean;
    unpipe(dest?: NodeJS.WritableStream): this;
    unshift(chunk: any): boolean;
    wrap(oldStream: NodeJS.ReadableStream): this;
    push(chunk: any, encoding?: string): boolean;
    _destroy(err: Error | null, callback: (error: Error | null) => void): void;
    destroy(err?: Error, callback?: (error: Error | null) => void): this;
    pipe<S: NodeJS.WritableStream>(
      dest: S,
      pipeOpts?: {
        end?: boolean
      }
    ): S;
    addListener(ev: string | Symbol, fn: (...args: any[]) => void): this;
    on(ev: string | Symbol, fn: (...args: any[]) => void): this;
    _undestroy(): void;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): AsyncIterableIterator<
      string | Buffer
    >;
    constructor(options?: _Readable$DuplexOptions): this;
  }

  declare class _Readable$PassThrough mixins Transform, stream.PassThrough {
    constructor(options?: _Readable$TransformOptions): this;
    _transform<T>(
      chunk: T,
      encoding: string | null | void,
      callback: (error: any, data: T) => void
    ): void;
  }

  declare interface _Readable$ReadableStateOptions {
    defaultEncoding?: string;
    encoding?: string;
    highWaterMark?: number;
    objectMode?: boolean;
    readableObjectMode?: boolean;
    readableHighWaterMark?: number;
  }

  declare interface _Readable$ReadableState {
    objectMode: boolean;
    highWaterMark: number;
    buffer: _Readable$BufferList<any>;
    length: number;
    pipes: any;
    pipesCount: number;
    flowing: any;
    ended: boolean;
    endEmitted: boolean;
    reading: boolean;
    sync: boolean;
    needReadable: boolean;
    emittedReadable: boolean;
    readableListening: boolean;
    resumeScheduled: boolean;
    destroyed: boolean;
    awaitDrain: number;
    defaultEncoding: string;
    readingMore: boolean;
    decoder: NodeStringDecoder | null;
    encoding: string | null;
  }

  declare type _Readable$ReadableOptions = _Readable$ReadableStateOptions & {
    read?: (size: number) => void,
    destroy?: (
      error: Error | null,
      callback: (error: Error | null) => void
    ) => void
  };

  declare class _Readable$Readable mixins _Readable {
    constructor(options?: _Readable$ReadableOptions): this;
  }

  declare type _Readable$TransformOptions = _Readable$DuplexOptions & {
    read?: (size: number) => void,
    write?: (
      chunk: any,
      encoding: string,
      callback: (error?: Error | null) => void
    ) => void,
    writev?: (
      chunks: Array<{
        chunk: any,
        encoding: string
      }>,
      callback: (error?: Error | null) => void
    ) => void,
    final?: (callback: (error?: Error | null) => void) => void,
    destroy?: (
      error: Error | null,
      callback: (error: Error | null) => void
    ) => void,
    transform?: (
      chunk: any,
      encoding: string,
      callback: (error?: Error, data?: any) => void
    ) => void,
    flush?: (callback: (er: any, data: any) => void) => void
  };

  declare class _Readable$Transform mixins Duplex, stream.Transform {
    _transformState: {
      afterTransform: (er: any, data: any) => void | boolean,
      needTransform: boolean,
      transforming: boolean,
      writecb: ((err: any) => any) | null,
      writechunk: any,
      writeencoding: string | null
    };
    constructor(options?: _Readable$TransformOptions): this;
    _transform(
      chunk: any,
      encoding: string,
      callback: (error?: Error, data?: any) => void
    ): void;
    _flush(callback: (error?: Error, data?: any) => void): void;
  }

  declare interface _Readable$CorkedRequest {
    next: any;
    entry: any;
    finish(): void;
  }

  declare interface _Readable$BufferRequest {
    chunk: any;
    encoding: string;
    isBuf: boolean;
    callback: (error?: Error | null) => void;
    next: _Readable$BufferRequest | null;
  }

  declare interface _Readable$WritableStateOptions {
    decodeStrings?: boolean;
    defaultEncoding?: string;
    highWaterMark?: number;
    objectMode?: boolean;
    writableObjectMode?: boolean;
    writableHighWaterMark?: number;
  }

  declare interface _Readable$WritableState {
    buffer: _Readable$BufferRequest[];
    objectMode: boolean;
    highWaterMark: number;
    finalCalled: boolean;
    needDrain: boolean;
    ending: boolean;
    ended: boolean;
    finished: boolean;
    destroyed: boolean;
    decodeStrings: boolean;
    defaultEncoding: string;
    length: number;
    writing: boolean;
    corked: number;
    sync: boolean;
    bufferProcessing: boolean;
    writelen: number;
    pendingcb: number;
    prefinished: boolean;
    errorEmitted: boolean;
    bufferedRequestCount: number;
    writecb: ((err?: Error | null) => void) | null;
    onwrite: (er?: Error | null) => any;
    bufferedRequest: _Readable$BufferRequest | null;
    lastBufferedRequest: _Readable$BufferRequest | null;
    corkedRequestsFree: _Readable$CorkedRequest;
    getBuffer(): _Readable$BufferRequest[];
  }

  declare type _Readable$WritableOptions = _Readable$WritableStateOptions & {
    write?: (
      chunk: any,
      encoding: string,
      callback: (error?: Error | null) => void
    ) => void,
    writev?: (
      chunk: ArrayLike<{
        chunk: any,
        encoding: string
      }>,
      callback: (error?: Error | null) => void
    ) => void,
    destroy?: (
      error: Error | null,
      callback: (error: Error | null) => void
    ) => void,
    final?: (callback: (error?: Error | null) => void) => void
  };

  declare class _Readable$Writable mixins stream.Writable {
    destroyed: boolean;
    _writableState: _Readable$WritableState;
    constructor(options?: _Readable$WritableOptions): this;
    destroy(error?: Error, callback?: (error?: Error | null) => void): this;
    _undestroy(): void;
  }

  declare class _Readable$Stream mixins _Readable {
    constructor(options?: _Readable$ReadableOptions): this;
  }

  declare var _Readable$NodeBaseExport: stream.Readable & {
    Readable: stream.Readable,
    Writable: stream.Writable,
    Duplex: stream.Duplex,
    Transform: stream.Transform,
    PassThrough: stream.PassThrough,
    Stream: stream
  };
  declare export default typeof _Readable;
}
