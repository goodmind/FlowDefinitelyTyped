declare module "crc" {
  declare export function crc1(buf: string | Buffer, previous?: number): number;

  declare export function crc8(buf: string | Buffer, previous?: number): number;

  declare export function crc81wire(
    buf: string | Buffer,
    previous?: number
  ): number;

  declare export function crc16(
    buf: string | Buffer,
    previous?: number
  ): number;

  declare export function crc16ccitt(
    buf: string | Buffer,
    previous?: number
  ): number;

  declare export function crc16modbus(
    buf: string | Buffer,
    previous?: number
  ): number;

  declare export function crc16xmodem(
    buf: string | Buffer,
    previous?: number
  ): number;

  declare export function crc16kermit(
    buf: string | Buffer,
    previous?: number
  ): number;

  declare export function crc24(
    buf: string | Buffer,
    previous?: number
  ): number;

  declare export function crc32(
    buf: string | Buffer,
    previous?: number
  ): number;
}
