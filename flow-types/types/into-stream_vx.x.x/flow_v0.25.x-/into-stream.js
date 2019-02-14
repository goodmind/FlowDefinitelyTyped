declare module "into-stream" {
  declare export default typeof intoStream;

  declare function intoStream(
    input: intoStream$Input | Promise<intoStream$Input>
  ): NodeJS.ReadableStream;

  declare var npm$namespace$intoStream: {
    obj: typeof intoStream$obj
  };
  declare function intoStream$obj(
    input:
      | { [key: string]: any }
      | Iterable<{ [key: string]: any }>
      | Promise<{ [key: string]: any } | Iterable<{ [key: string]: any }>>
  ): NodeJS.ReadableStream;

  declare type intoStream$Input = Buffer | string | Iterable<Buffer | string>;
}
