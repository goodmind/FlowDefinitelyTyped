declare module "stream-chain" {
  import type {
    Readable,
    Writable,
    Duplex,
    Transform,
    DuplexOptions
  } from "stream";

  declare module.exports: typeof Chain;

  declare type TransformFunction = (chunk: any, encoding?: string) => any;
  declare type Stream = Readable | Writable | Duplex | Transform;
  declare type StreamItem = Stream | TransformFunction;
  declare class Chain mixins Duplex {
    constructor(fns: StreamItem[], options?: Chain$Chain$ChainOptions): this;
    input: Stream;
    output: Stream;
    streams: Stream[];
  }

  declare var npm$namespace$Chain: {
    chain: typeof Chain$chain
  };
  declare type Chain$ChainOptions = {
    skipEvents?: boolean
  } & DuplexOptions;

  declare function Chain$chain(
    fns: StreamItem[],
    options?: Chain$ChainOptions
  ): Chain;
}
