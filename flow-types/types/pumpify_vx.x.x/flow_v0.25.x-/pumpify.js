declare module "pumpify" {
  import type { Stream, Writable, Readable, Duplex } from "stream";

  import typeof * as duplexify from "duplexify";

  declare class Pumpify mixins Duplex, duplexify.Duplexify {
    constructor(...streams: Stream[]): this;
    constructor(streams: Stream[]): this;
    setPipeline(...streams: Stream[]): void;
    setPipeline(streams: Stream[]): void;
    setWritable(writable: Writable): void;
    setReadable(readable: Readable): void;
  }
  declare interface PumpifyFactoryOptions {
    autoDestroy: boolean;
    destroy: boolean;
    objectMode: boolean;
    highWaterMark: number;
  }

  declare var npm$namespace$Pumpify: {
    ctor: typeof Pumpify$ctor,
    obj: typeof Pumpify$obj
  };
  declare var Pumpify$obj: typeof Pumpify;

  declare function Pumpify$ctor(opts: PumpifyFactoryOptions): typeof Pumpify;

  declare module.exports: typeof Pumpify;
}
