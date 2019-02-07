declare module "hash-stream" {
  import typeof * as stream from "stream";

  declare module.exports: typeof hashStream;

  declare function hashStream(
    stream: stream.Readable,
    algorithm: string,
    callback?: (error: any, hash: Buffer) => void
  ): Promise<Buffer>;

  declare function hashStream(
    filename: string,
    algorithm: string,
    callback?: (error: Error | null, hash: Buffer) => void
  ): Promise<Buffer>;
}
