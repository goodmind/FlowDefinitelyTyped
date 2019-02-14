declare module "buffer-crc32" {
  declare export default typeof crc32;

  declare function crc32(input: string | Buffer, partialCrc?: Buffer): Buffer;

  declare var npm$namespace$crc32: {
    signed: typeof crc32$signed,
    unsigned: typeof crc32$unsigned
  };
  declare function crc32$signed(buffer: Buffer): number;

  declare function crc32$unsigned(buffer: Buffer): number;
}
