declare module "iltorb" {
  import type { Transform } from "stream";

  declare export interface BrotliEncodeParams {
    disable_literal_context_modeling?: boolean;
    lgblock?: number;
    lgwin?: number;
    mode?: number;
    quality?: number;
    size_hint?: number;
  }
  declare export interface BrotliFlushable {
    flush(): void;
  }
  declare export type IltorbCallback = (
    err: Error | null | void,
    output: Buffer
  ) => void;
  declare export function compress(
    buffer: Buffer,
    options: BrotliEncodeParams,
    callback: IltorbCallback
  ): void;

  declare export function compress(
    buffer: Buffer,
    callback: IltorbCallback
  ): void;

  declare export function compress(
    buffer: Buffer,
    options?: BrotliEncodeParams
  ): Promise<Buffer>;

  declare export function decompress(
    buffer: Buffer,
    callback: IltorbCallback
  ): void;

  declare export function decompress(buffer: Buffer): Promise<Buffer>;

  declare export function compressSync(
    buffer: Buffer,
    options?: BrotliEncodeParams
  ): Buffer;

  declare export function decompressSync(buffer: Buffer): Buffer;

  declare export function compressStream(
    options?: BrotliEncodeParams
  ): Transform & BrotliFlushable;

  declare export function decompressStream(): Transform;
}
