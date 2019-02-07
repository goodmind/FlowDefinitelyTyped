declare module "qr-image" {
  /**
   * error correction level. One of L, M, Q, H. Default M.
   */
  declare export type ec_level = "L" | "M" | "Q" | "H";

  /**
   * @default 'png'
   */
  declare export type image_type = "png" | "svg" | "pdf" | "eps";
  declare export interface Options {
    ec_level?: ec_level;
    type?: image_type;
    size?: number;
    margin?: number;
    parse_url?: boolean;
  }
  declare export function image(
    text: string,
    level?: ec_level
  ): NodeJS.ReadableStream;

  declare export function image(
    text: string,
    options?: Options
  ): NodeJS.ReadableStream;

  declare export function imageSync(text: string, level?: ec_level): Buffer;

  declare export function imageSync(
    text: string,
    options?: Options
  ): string | Buffer;

  declare export function svgObject(text: string, level?: ec_level): any;

  declare export function svgObject(text: string, options?: Options): any;

  declare export function matrix(text: string, level?: ec_level): any[][];
}
