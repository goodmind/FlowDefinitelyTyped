declare module "through2" {
  declare function through2(
    transform?: through2$TransformFunction,
    flush?: through2$FlushCallback
  ): stream.Transform;

  declare function through2(
    opts?: stream.DuplexOptions,
    transform?: through2$TransformFunction,
    flush?: through2$FlushCallback
  ): stream.Transform;

  declare var npm$namespace$through2: {
    obj: typeof through2$obj,
    ctor: typeof through2$ctor
  };
  declare type through2$Through2Constructor = {
    new(opts?: stream.DuplexOptions): stream.Transform,
    (opts?: stream.DuplexOptions): stream.Transform
  } & stream.Transform;

  declare type through2$TransformCallback = (err?: any, data?: any) => void;

  declare type through2$TransformFunction = (
    chunk: any,
    enc: string,
    callback: through2$TransformCallback
  ) => void;

  declare type through2$FlushCallback = (flushCallback: () => void) => void;

  /**
   * Convenvience method for creating object streams
   */
  declare function through2$obj(
    transform?: through2$TransformFunction,
    flush?: through2$FlushCallback
  ): stream.Transform;

  /**
   * Creates a constructor for a custom Transform. This is useful when you
   * want to use the same transform logic in multiple instances.
   */
  declare function through2$ctor(
    transform?: through2$TransformFunction,
    flush?: through2$FlushCallback
  ): through2$Through2Constructor;

  declare function through2$ctor(
    opts?: stream.DuplexOptions,
    transform?: through2$TransformFunction,
    flush?: through2$FlushCallback
  ): through2$Through2Constructor;

  declare export default typeof through2;
}
