declare module "stream-to-string" {
  declare module.exports: typeof streamToString;

  declare function streamToString(
    stream: NodeJS.ReadableStream,
    cb?: Callback
  ): Promise<string>;

  declare function streamToString(
    stream: NodeJS.ReadableStream,
    enc: string,
    cb?: Callback
  ): Promise<string>;

  declare type Callback = (error: Error | void, str: string) => void;
}
