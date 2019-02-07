declare module "base64-arraybuffer" {
  declare export function encode(arraybuffer: ArrayBuffer): string;

  declare export function decode(base64: string): ArrayBuffer;
}
