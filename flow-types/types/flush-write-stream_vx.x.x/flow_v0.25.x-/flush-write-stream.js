declare module "flush-write-stream" {
  import type { Writable, WritableOptions } from "stream";

  declare type Callback = (error?: Error) => void;
  declare type Write = (
    chunk: any,
    encoding: string,
    callback: Callback
  ) => void;
  declare type Flush = (callback: Callback) => void;
  declare var WriteStream: {
    (opts: WritableOptions, write: Write, flush?: Flush): Writable,
    (write: Write, flush?: Flush): Writable,
    new(opts: WritableOptions, write: Write, flush?: Flush): Writable,
    new(write: Write, flush?: Flush): Writable,
    obj(opts: WritableOptions, write: Write, flush?: Flush): Writable,
    obj(write: Write, flush?: Flush): Writable
  };
  declare module.exports: typeof WriteStream;
}
