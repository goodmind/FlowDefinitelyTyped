declare module "through2-concurrent" {
  import type { TransformFunction, FlushCallback } from "through2";

  import type { DuplexOptions, Transform as TransformStream } from "stream";

  declare function through2Concurrent(
    transform?: TransformFunction,
    flush?: FlushCallback
  ): TransformStream;

  declare function through2Concurrent(
    opts?: through2Concurrent$through2Concurrent$Through2ConcurrentOptions,
    transform?: TransformFunction,
    flush?: FlushCallback
  ): TransformStream;

  declare var npm$namespace$through2Concurrent: {
    obj: typeof through2Concurrent$obj
  };
  declare type through2Concurrent$Through2ConcurrentOptions = {
    maxConcurrency?: number
  } & DuplexOptions;

  declare function through2Concurrent$obj(
    transform?: TransformFunction,
    flush?: FlushCallback
  ): TransformStream;

  declare function through2Concurrent$obj(
    opts?: through2Concurrent$Through2ConcurrentOptions,
    transform?: TransformFunction,
    flush?: FlushCallback
  ): TransformStream;

  declare module.exports: typeof through2Concurrent;
}
