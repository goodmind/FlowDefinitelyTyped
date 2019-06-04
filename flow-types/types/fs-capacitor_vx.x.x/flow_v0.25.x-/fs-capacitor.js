declare module "fs-capacitor" {
  import type {
    ReadStream as FSReadStream,
    WriteStream as FSWriteStream
  } from "fs";

  declare export class ReadAfterDestroyedError mixins Error {}
  declare export class ReadStream mixins FSReadStream {}
  declare export class WriteStream mixins FSWriteStream {
    constructor(): this;
    createReadStream(name?: string): ReadStream;
  }
}
