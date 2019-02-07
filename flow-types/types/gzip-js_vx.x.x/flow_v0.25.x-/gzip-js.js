declare module "gzip-js" {
  declare export interface ZipOptions {
    level?: number;
    name?: string;
    timestamp?: number;
  }
  declare export function zip(data: string, opts?: ZipOptions): number[];

  declare export function unzip(data: number[] | Buffer | Uint8Array): number[];

  declare export var DEFAULT_LEVEL: number;
}
