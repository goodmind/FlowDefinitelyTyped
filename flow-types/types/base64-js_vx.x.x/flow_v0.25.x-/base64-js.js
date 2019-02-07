declare module "base64-js" {
  declare export function byteLength(encoded: string): number;

  declare export function toByteArray(encoded: string): Uint8Array;

  declare export function fromByteArray(bytes: Uint8Array): string;
}
