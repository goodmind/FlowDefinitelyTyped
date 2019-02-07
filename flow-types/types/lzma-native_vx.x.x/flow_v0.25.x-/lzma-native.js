declare module "lzma-native" {
  import type { Stream } from "stream";

  declare export interface LzmaOptions {
    synchronous?: boolean;
    bufsize?: number;
    memlimit?: number;
    check?: Check;
    preset?: Preset;
    flags?:
      | "TELL_NO_CHECK"
      | "TELL_UNSUPPORTED_CHECK"
      | "TELL_ANY_CHECK"
      | "CONCATENATED";
    threads?: number;
    blockSize?: number;
    timeout?: number;
  }
  declare export type Check =
    | "CHECK_CRC32"
    | "CHECK_CRC64"
    | "CHECK_NONE"
    | "CHECK_SHA256";
  declare export type Coders =
    | "easyEncoder"
    | "aloneDecoder"
    | "rawEncoder"
    | "autoDecoder"
    | "aloneEncoder"
    | "streamEncoder"
    | "streamDecoder";
  declare export type Preset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  declare export interface FileOptions {
    fileSize: number;
    memlimit?: number;
    read: (
      count: number,
      offset: number,
      cb: (err: any, buffer: Buffer) => void
    ) => void;
  }
  declare export interface StreamInfo {
    streamPadding: number;
    memlimit: number;
    streams: number;
    blocks: number;
    fileSize: number;
    uncompressedSize: number;
    checks: number;
  }
  declare export function createStream(
    coder: Coders,
    options?: LzmaOptions
  ): JSLzmaStream;

  declare export function createCompressor(options?: LzmaOptions): JSLzmaStream;

  declare export function createDecompressor(
    options?: LzmaOptions
  ): JSLzmaStream;

  declare export function crc32(
    input: string,
    encoding?: string,
    previous?: number
  ): string;

  declare export function isXZ(buf: Buffer | string): boolean;

  declare export function versionString(): string;

  declare export function versionNumber(): number;

  declare export function checkSize(check: Check): number;

  declare export function easyDecoderMemusage(preset: Preset): number;

  declare export function easyEncoderMemusage(preset: Preset): number;

  declare export function rawDecoderMemusage(preset: Preset): number;

  declare export function rawEncoderMemusage(preset: Preset): number;

  declare export function Compressor(
    preset?: Preset,
    options?: LzmaOptions
  ): JSLzmaStream;

  declare export function Decompressor(options?: LzmaOptions): JSLzmaStream;

  declare export function parseFileIndex(
    options: FileOptions,
    callback?: (err: any, info?: StreamInfo) => void
  ): void;

  declare export function parseFileIndexFD(
    fileDescriptor: number,
    callback?: (err: any, info?: StreamInfo) => void
  ): void;

  declare export function compress(
    buf: Buffer | string,
    options?: LzmaOptions | Preset,
    on_finish?: (result: Buffer) => void
  ): void;

  declare export function decompress(
    buf: Buffer | string,
    options?: LzmaOptions | Preset,
    on_finish?: (result: Buffer) => void
  ): void;

  declare export function LZMA(): {
    compress(
      buf: Buffer | string,
      mode: Preset,
      on_finish: (result: Buffer) => void,
      on_progress?: (progress: number) => void
    ): void,
    decompress(
      buf: Buffer | string,
      on_finish: (result: Buffer) => void,
      on_progress?: (progress: number) => void
    ): void
  };

  declare export class JSLzmaStream mixins Stream.Transform {
    constructor(nativeStream: Stream, options: LzmaOptions): this;
    bufsize(): number;
    bufsize(size: number): void;
    totalInt(): number;
    totalOut(): number;
    cleanUp(): void;
  }
}
