declare module "check-sum" {
  import type { Readable } from "stream";

  declare module.exports: typeof checksum;

  declare function checksum(
    stream: Readable,
    hashes: checksum$checksum$Hashes,
    callback: (error: checksum$checksum$ChecksumError | any) => void
  ): (fn: () => void) => void;

  declare function checksum(
    path: string,
    hashes: checksum$checksum$Hashes,
    callback: (error: checksum$checksum$ChecksumError | Error | void) => void
  ): (fn: () => void) => void;

  declare interface checksum$ChecksumError {
    algorithm: string;
    expected: string;
    actual: string;
  }

  declare interface checksum$Hashes {
    [algorithm: string]: string | Buffer;
  }
}
