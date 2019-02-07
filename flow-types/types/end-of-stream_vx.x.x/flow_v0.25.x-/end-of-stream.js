declare module "end-of-stream" {
  declare interface Options {
    readable?: boolean;
    writable?: boolean;
    error?: boolean;
  }
  declare type Stream = NodeJS.ReadableStream | NodeJS.WritableStream;
  declare type Callback = (error?: Error | null) => void;
  declare function eos(stream: Stream, callback?: Callback): () => void;

  declare function eos(
    stream: Stream,
    options: Options,
    callback?: Callback
  ): () => void;

  declare module.exports: typeof eos;
}
