declare module "inflation" {
  import type { Readable } from "stream";

  import type { ZlibOptions } from "zlib";

  declare export default typeof inflate;

  /**
   * Automatically unzip an HTTP stream.
   * @returns a stream that emits inflated data from the given stream.
   */
  declare function inflate(req: Readable, options?: inflate$Options): Readable;

  declare type inflate$Options = {
    /**
     * The encoding of the stream. If not given, will look in `stream.headers['content-encoding']`.
     */
    gzip?: "deflate" | "gzip" | "identity"
  } & ZlibOptions;
}
