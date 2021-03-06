declare module "async-writer" {
  declare var npm$namespace$async_writer: {
    create: typeof async_writer$create,
    enableAsyncStackTrace: typeof async_writer$enableAsyncStackTrace,

    StringWriter: typeof async_writer$StringWriter,
    BufferedWriter: typeof async_writer$BufferedWriter,
    AsyncWriter: typeof async_writer$AsyncWriter
  };
  declare interface async_writer$EventFunction {
    (event: string, callback: Function): void;
  }

  declare class async_writer$StringWriter {
    constructor(events: events.EventEmitter): this;
    end(): void;
    write(what: string): async_writer$StringWriter;
    toString(): string;
  }

  declare class async_writer$BufferedWriter {
    constructor(wrappedStream: stream.Stream): this;
    flush(): void;
    on(event: string, callback: Function): async_writer$BufferedWriter;
    once(event: string, callback: Function): async_writer$BufferedWriter;
    clear(): void;
    end(): void;
    write(what: string): async_writer$BufferedWriter;
  }

  declare interface async_writer$BeginAsyncOptions {
    last?: boolean;
    timeout?: number;
    name?: string;
  }

  declare class async_writer$AsyncWriter {
    static enableAsyncStackTrace(): void;
    constructor(
      writer?: any,
      global?: {
        [s: string]: any
      },
      async?: boolean,
      buffer?: boolean
    ): this;
    isAsyncWriter: async_writer$AsyncWriter;
    sync(): void;
    getAttributes(): {
      [s: string]: any
    };
    getAttribute(): any;
    write(str: string): async_writer$AsyncWriter;
    getOutput(): string;
    captureString(func: Function, thisObj: Object): string;
    swapWriter(
      newWriter: async_writer$StringWriter | async_writer$BufferedWriter,
      func: Function,
      thisObj: Object
    ): void;
    createNestedWriter(
      writer: async_writer$StringWriter | async_writer$BufferedWriter
    ): async_writer$AsyncWriter;
    beginAsync(
      options?: number | async_writer$BeginAsyncOptions
    ): async_writer$AsyncWriter;
    handleBeginAsync(
      options: number | async_writer$BeginAsyncOptions,
      parent: async_writer$AsyncWriter
    ): void;
    on(event: string, callback: Function): async_writer$AsyncWriter;
    once(event: string, callback: Function): async_writer$AsyncWriter;
    onLast(callback: Function): async_writer$AsyncWriter;
    emit(arg: any): async_writer$AsyncWriter;
    removeListener(): async_writer$AsyncWriter;
    pipe(stream: stream.Stream): async_writer$AsyncWriter;
    error(e: Error): void;
    end(data?: any): async_writer$AsyncWriter;
    handleEnd(isAsync: boolean): void;
    _finish(): void;
    flush(): void;
  }

  declare interface async_writer$AsyncWriterOptions {
    global?: {
      [s: string]: any
    };
    buffer?: boolean;
  }

  declare function async_writer$create(
    writer?: any,
    options?: async_writer$AsyncWriterOptions
  ): async_writer$AsyncWriter;

  declare function async_writer$enableAsyncStackTrace(): void;

  declare export default typeof async_writer;
}
