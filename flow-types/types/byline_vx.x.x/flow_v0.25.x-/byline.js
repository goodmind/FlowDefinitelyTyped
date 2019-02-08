declare var npm$namespace$bl: {
  createStream: typeof bl$createStream,
  LineStream: typeof bl$LineStream
};
export type bl$LineStreamOptions = {
  keepEmptyLines?: boolean
} & stream.TransformOptions;

export type bl$LineStream = {} & stream.Transform;

export type bl$LineStreamCreatable = {
  new(options?: bl$LineStreamOptions): bl$LineStream
} & bl$LineStream;

declare export function bl$createStream(): bl$LineStream;

declare export function bl$createStream(
  stream: NodeJS.ReadableStream,
  options?: bl$LineStreamOptions
): bl$LineStream;

declare export var bl$LineStream: bl$LineStreamCreatable;
declare module "byline" {
  declare function bl(): bl$bl$LineStream;

  declare function bl(
    stream: NodeJS.ReadableStream,
    options?: bl$bl$LineStreamOptions
  ): bl$bl$LineStream;

  declare export default typeof bl;
}
