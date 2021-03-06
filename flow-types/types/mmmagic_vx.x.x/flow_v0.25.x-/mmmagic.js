declare module "mmmagic" {
  declare export type bitmask = number;
  declare export class Magic {
    constructor(magicPath?: string, mask?: bitmask): this;
    constructor(mask?: bitmask): this;
    detectFile(
      path: string,
      callback: (err: Error, result: string) => void
    ): void;
    detect(data: Buffer, callback: (err: Error, result: string) => void): void;
  }
  declare export var MAGIC_NONE: bitmask;
  declare export var MAGIC_DEBUG: bitmask;
  declare export var MAGIC_SYMLINK: bitmask;
  declare export var MAGIC_DEVICES: bitmask;
  declare export var MAGIC_MIME_TYPE: bitmask;
  declare export var MAGIC_CONTINUE: bitmask;
  declare export var MAGIC_CHECK: bitmask;
  declare export var MAGIC_PRESERVE_ATIME: bitmask;
  declare export var MAGIC_RAW: bitmask;
  declare export var MAGIC_MIME_ENCODING: bitmask;
  declare export var MAGIC_MIME: bitmask;
  declare export var MAGIC_APPLE: bitmask;
  declare export var MAGIC_NO_CHECK_TAR: bitmask;
  declare export var MAGIC_NO_CHECK_SOFT: bitmask;
  declare export var MAGIC_NO_CHECK_APPTYPE: bitmask;
  declare export var MAGIC_NO_CHECK_ELF: bitmask;
  declare export var MAGIC_NO_CHECK_TEXT: bitmask;
  declare export var MAGIC_NO_CHECK_CDF: bitmask;
  declare export var MAGIC_NO_CHECK_TOKENS: bitmask;
  declare export var MAGIC_NO_CHECK_ENCODING: bitmask;
}
