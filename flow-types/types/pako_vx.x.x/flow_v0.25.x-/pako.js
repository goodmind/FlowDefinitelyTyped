declare module "pako" {
  declare export default typeof Pako;

  declare var npm$namespace$Pako: {
    deflate: typeof Pako$deflate,
    deflateRaw: typeof Pako$deflateRaw,
    gzip: typeof Pako$gzip,
    inflate: typeof Pako$inflate,
    inflateRaw: typeof Pako$inflateRaw,
    ungzip: typeof Pako$ungzip,

    Deflate: typeof Pako$Deflate,
    Inflate: typeof Pako$Inflate
  };
  declare export interface Pako$DeflateOptions {
    level?: number;
    windowBits?: number;
    memLevel?: number;
    strategy?: number;
    dictionary?: any;
    raw?: boolean;
    to?: "string";
  }

  declare export interface Pako$InflateOptions {
    windowBits?: number;
    raw?: boolean;
    to?: "string";
  }

  declare export type Pako$Data = Uint8Array | Array<number> | string;

  /**
   * Compress data with deflate algorithm and options.
   */
  declare export function Pako$deflate(
    data: Pako$Data,
    options: Pako$DeflateOptions & {
      to: "string"
    }
  ): string;

  declare export function Pako$deflate(
    data: Pako$Data,
    options?: Pako$DeflateOptions
  ): Uint8Array;

  /**
   * The same as deflate, but creates raw data, without wrapper (header and adler32 crc).
   */
  declare export function Pako$deflateRaw(
    data: Pako$Data,
    options: Pako$DeflateOptions & {
      to: "string"
    }
  ): string;

  declare export function Pako$deflateRaw(
    data: Pako$Data,
    options?: Pako$DeflateOptions
  ): Uint8Array;

  /**
   * The same as deflate, but create gzip wrapper instead of deflate one.
   */
  declare export function Pako$gzip(
    data: Pako$Data,
    options: Pako$DeflateOptions & {
      to: "string"
    }
  ): string;

  declare export function Pako$gzip(
    data: Pako$Data,
    options?: Pako$DeflateOptions
  ): Uint8Array;

  /**
   * Decompress data with inflate/ungzip and options. Autodetect format via wrapper header
   * by default. That's why we don't provide separate ungzip method.
   */
  declare export function Pako$inflate(
    data: Pako$Data,
    options: Pako$InflateOptions & {
      to: "string"
    }
  ): string;

  declare export function Pako$inflate(
    data: Pako$Data,
    options?: Pako$InflateOptions
  ): Uint8Array;

  /**
   * The same as inflate, but creates raw data, without wrapper (header and adler32 crc).
   */
  declare export function Pako$inflateRaw(
    data: Pako$Data,
    options: Pako$InflateOptions & {
      to: "string"
    }
  ): string;

  declare export function Pako$inflateRaw(
    data: Pako$Data,
    options?: Pako$InflateOptions
  ): Uint8Array;

  /**
   * Just shortcut to inflate, because it autodetects format by header.content. Done for convenience.
   */
  declare export function Pako$ungzip(
    data: Pako$Data,
    options: Pako$InflateOptions & {
      to: "string"
    }
  ): string;

  declare export function Pako$ungzip(
    data: Pako$Data,
    options?: Pako$InflateOptions
  ): Uint8Array;

  declare export class Pako$Deflate {
    constructor(options?: Pako$DeflateOptions): this;
    err: number;
    msg: string;
    result: Uint8Array | Array<number>;
    onData(chunk: Pako$Data): void;
    onEnd(status: number): void;
    push(data: Pako$Data | ArrayBuffer, mode?: number | boolean): boolean;
  }

  declare export class Pako$Inflate {
    constructor(options?: Pako$InflateOptions): this;
    err: number;
    msg: string;
    result: Pako$Data;
    onData(chunk: Pako$Data): void;
    onEnd(status: number): void;
    push(data: Pako$Data | ArrayBuffer, mode?: number | boolean): boolean;
  }
}
