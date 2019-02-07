declare module "gzip-size" {
  import typeof * as stream from "stream";

  import typeof * as zlib from "zlib";

  declare type GzipSizeStream = {
    on(event: string, listener: (...args: any[]) => void): this,
    on(event: "gzip-size", listener: (size: number) => void): this,

    /**
     * Contains the gzip size of the stream after it is finished.
     * Since this happens asynchronously, it is recommended you use
     * the `.on("gzip-size", size => console.log(size))` method instead
     */
    gzipSize?: number
  } & stream.PassThrough;

  /**
   * Returns a Promise for the size.
   * @param input A string or Buffer to determine the gzip size of
   * @param options Any zlib option
   */
  declare function gzipSize(
    input: string | Buffer,
    options?: zlib.ZlibOptions
  ): Promise<number>;

  declare var npm$namespace$gzipSize: {
    sync: typeof gzipSize$sync,
    stream: typeof gzipSize$stream,
    file: typeof gzipSize$file
  };

  /**
   * Returns the size synchronously
   * @param input A string or Buffer to determine the gzip size of
   * @param options Any zlib option
   */
  declare function gzipSize$sync(
    input: string | Buffer,
    options?: zlib.ZlibOptions
  ): number;

  /**
   * Returns a stream.PassThrough. The stream emits a gzip-size event and has a gzipSize property.
   * @param options Any zlib option
   */
  declare function gzipSize$stream(options?: zlib.ZlibOptions): GzipSizeStream;

  /**
   * Returns a Promise for the size of the file.
   * @param path The path to the file
   * @param options Any zlib option
   */
  declare function gzipSize$file(
    path: string,
    options?: zlib.ZlibOptions
  ): Promise<number>;

  declare module.exports: typeof gzipSize;
}
