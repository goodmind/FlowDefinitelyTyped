declare module "bl" {
  declare class BufferList mixins stream.Duplex {
    constructor(
      callbackOrData?:
        | ((err: Error, buffer: Buffer) => void)
        | Buffer
        | Buffer[]
        | BufferList
        | BufferList[]
        | string
    ): this;
    length: number;
    append(
      buffer: Buffer | Buffer[] | BufferList | BufferList[] | string
    ): void;
    get(index: number): number;
    slice(start?: number, end?: number): Buffer;
    shallowSlice(start?: number, end?: number): BufferList;
    copy(
      dest: Buffer,
      destStart?: number,
      srcStart?: number,
      srcEnd?: number
    ): void;
    duplicate(): BufferList;
    consume(bytes?: number): void;
    toString(encoding?: string, start?: number, end?: number): string;
    indexOf(
      value: string | number | Uint8Array | BufferList | Buffer,
      byteOffset?: number,
      encoding?: string
    ): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readUInt8(offset: number, noAssert?: boolean): number;
  }
  declare module.exports: typeof BufferList;
}
