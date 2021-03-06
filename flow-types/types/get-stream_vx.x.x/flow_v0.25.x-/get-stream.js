declare module "get-stream" {
  import type { Stream } from "stream";

  declare interface Options {
    /**
     * Encoding of the incoming stream.
     * @default 'utf8'
     */
    encoding?: BufferEncoding | "buffer";

    /**
     * Maximum length of the returned string. If it exceeds this value before
     * the stream ends, the promise will be rejected.
     * @default Infinity
     */
    maxBuffer?: number;
  }

  /**
   * Get the stream as a string.
   * The methods returns a promise that resolves when the end event fires on the
   * stream, indicating that there is no more data to be read.
   * The stream is switched to flowing mode.
   */
  declare function getStream(
    stream: Stream,
    options?: Options
  ): Promise<string>;

  declare var npm$namespace$getStream: {
    array: typeof getStream$array,
    buffer: typeof getStream$buffer
  };

  /**
   * Get the `stream` as an array of values.
   *
   * It honors both the `maxBuffer` and `encoding` options.
   * The behavior changes slightly based on the encoding chosen:
   *
   * - When `encoding` is unset, it assumes an [object mode stream](https://nodesource.com/blog/understanding-object-streams/)
   *    and collects values emitted from `stream` unmodified.
   *    In this case `maxBuffer` refers to the number of items in the array
   *    (not the sum of their sizes).
   *
   * - When `encoding` is set to `buffer`, it collects an array of buffers.
   *    `maxBuffer` refers to the summed byte lengths of every buffer in the array.
   *
   * - When `encoding` is set to anything else, it collects an array of strings.
   *    `maxBuffer` refers to the summed character lengths of every string in the array.
   */
  declare function getStream$array<T>(
    stream: Stream,
    options?: Options
  ): Promise<T[]>;

  /**
   * Get the stream as a buffer.
   *
   * It honors the maxBuffer option as above, but it refers to byte length
   * rather than string length.
   */
  declare function getStream$buffer(
    stream: Stream,
    options?: Options
  ): Promise<Buffer>;

  declare export default typeof getStream;
}
