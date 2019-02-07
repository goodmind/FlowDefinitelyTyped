declare module "is-progressive" {
  import type { Readable } from "stream";

  /**
 * Returns whether the `buffer` is a progressive JPEG image.
 * @param buffer Buffer of a JPEG image.
Must be at least `65535` bytes when the file is larger than that.
 */
  declare export function buffer(buffer: Buffer): boolean;

  /**
   * Returns a Promise for a boolean indicating whether the file stream is a progressive JPEG image.
   * @param stream Data stream.
   */
  declare export function stream(stream: Readable): Promise<boolean>;

  /**
   * Returns a Promise for a boolean indicating whether the file is a progressive JPEG image.
   * @param filepath Filepath to the image.
   */
  declare export function file(filepath: string): Promise<boolean>;

  /**
   * Returns whether the buffer is a progressive JPEG.
   * @param filepath Filepath to the image.
   */
  declare export function fileSync(filepath: string): boolean;
}
