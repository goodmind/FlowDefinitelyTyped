declare module "coinstring" {
  declare export function createDecoder(
    version: number
  ): (base58str: string, version?: number | Buffer) => Buffer;

  declare export function createEncoder(
    version: number
  ): (
    payload: Buffer | number[] | Uint8Array,
    version?: number | Buffer
  ) => string;

  declare export function createValidator(
    version: number
  ): (base58str: string, version?: number | Buffer) => boolean;

  declare export function decode(
    base58str: string,
    version?: number | Buffer
  ): Buffer;

  declare export function encode(
    payload: Buffer | number[] | Uint8Array,
    version?: number | Buffer
  ): string;

  declare export function isValid(
    base58str: string,
    version?: number | Buffer
  ): boolean;
}
