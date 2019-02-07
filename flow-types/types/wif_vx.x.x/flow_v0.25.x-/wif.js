declare module "wif" {
  declare export interface WIFReturn {
    +version: number;
    +privateKey: Buffer;
    +compressed: boolean;
  }
  declare export function decodeRaw(
    buffer: Buffer,
    version?: number
  ): WIFReturn;

  declare export function decode(string: string, version: number): WIFReturn;

  declare export function encodeRaw(
    version: number,
    privateKey: Buffer,
    compressed: boolean
  ): Buffer;

  declare export function encode(
    version: number,
    privateKey: Buffer,
    compressed: boolean
  ): string;
}
