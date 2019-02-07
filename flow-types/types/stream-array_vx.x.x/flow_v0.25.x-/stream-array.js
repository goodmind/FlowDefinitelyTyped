declare module "stream-array" {
  import type { Readable } from "stream";

  declare function streamify(array: $ReadOnlyArray<any>): Readable;

  declare module.exports: typeof streamify;
}
