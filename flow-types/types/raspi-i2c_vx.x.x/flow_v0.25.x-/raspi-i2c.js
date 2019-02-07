declare module "raspi-i2c" {
  import type { Peripheral } from "raspi-peripheral";

  declare export type ReadCallback = (
    err: null | Error | string,
    data: null | Buffer | number
  ) => void;
  declare export type WriteCallback = (err: null | Error | string) => void;
  declare export class I2C mixins Peripheral {
    constructor(): this;
    destroy(): void;
    read(address: number, length: number, cb: ReadCallback): void;
    read(
      address: number,
      register: number,
      length: number,
      cb: ReadCallback
    ): void;
    readSync(
      address: number,
      registerOrLength: number | void,
      length?: number
    ): Buffer;
    readByte(address: number, cb: ReadCallback): void;
    readByte(address: number, register: number, cb: ReadCallback): void;
    readByteSync(address: number, register?: number): number;
    readWord(address: number, cb: ReadCallback): void;
    readWord(address: number, register: number, cb: ReadCallback): void;
    readWordSync(address: number, register?: number): number;
    write(address: number, buffer: Buffer, cb?: WriteCallback): void;
    write(
      address: number,
      register: number,
      buffer: Buffer,
      cb?: WriteCallback
    ): void;
    writeSync(address: number, buffer: Buffer): void;
    writeSync(address: number, register: number, buffer: Buffer): void;
    writeByte(address: number, byte: number, cb?: WriteCallback): void;
    writeByte(
      address: number,
      register: number,
      byte: number,
      cb?: WriteCallback
    ): void;
    writeByteSync(address: number, registerOrByte: number, byte?: number): void;
    writeWord(address: number, word: number, cb?: WriteCallback): void;
    writeWord(
      address: number,
      register: number,
      word: number,
      cb?: WriteCallback
    ): void;
    writeWordSync(address: number, registerOrWord: number, word?: number): void;
  }
}
