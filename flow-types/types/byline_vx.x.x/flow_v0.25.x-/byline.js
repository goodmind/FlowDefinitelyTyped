declare module "byline" {
  import typeof * as stream from "stream";

  declare function bl(): bl$LineStream;

  declare function bl(
    stream: NodeJS$ReadableStream,
    options?: bl$LineStreamOptions
  ): bl$LineStream;

  declare var npm$namespace$bl: {
    createStream: typeof bl$createStream,
    LineStream: typeof bl$LineStream
  };
  declare export type bl$LineStreamOptions = {
    keepEmptyLines?: boolean
  } & stream.TransformOptions;

  declare export type bl$LineStream = {} & stream.Transform;

  declare export type bl$LineStreamCreatable = {
    new(options?: bl$LineStreamOptions): bl$LineStream
  } & LineStream;

  declare export function bl$createStream(): bl$LineStream;

  declare export function bl$createStream(
    stream: NodeJS$ReadableStream,
    options?: bl$LineStreamOptions
  ): bl$LineStream;

  declare export var bl$LineStream: bl$LineStreamCreatable;
  declare export default typeof bl;
}
