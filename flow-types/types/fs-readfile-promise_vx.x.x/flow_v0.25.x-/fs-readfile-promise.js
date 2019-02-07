declare module "fs-readfile-promise" {
  import type { PathLike } from "fs";

  declare type PathType = PathLike | number;
  declare type OptionsType =
    | {
        encoding: string,
        flag?: string
      }
    | string;
  declare module.exports: typeof fsReadFilePromise;

  /**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
  declare function fsReadFilePromise(
    path: PathType,
    options: OptionsType
  ): Promise<string>;

  /**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 */
  declare function fsReadFilePromise(
    path: PathType,
    options?: null
  ): Promise<Buffer>;
}
