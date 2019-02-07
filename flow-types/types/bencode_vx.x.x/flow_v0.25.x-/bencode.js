declare module "bencode" {
  declare export function byteLength(value: any): number;

  declare export function encodingLength(value: any): number;

  declare export function encode(
    data: any,
    buffer?: Buffer,
    offset?: number
  ): Buffer;

  declare export function decode(
    data: Buffer,
    start?: number,
    end?: number,
    encoding?: string
  ): any;
}
