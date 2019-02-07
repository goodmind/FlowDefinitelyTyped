declare module "emojione" {
  declare export var sprites: boolean;
  declare export var imagePathPNG: string;
  declare export var imagePathSVG: string;
  declare export var imagePathSVGSprites: string;
  declare export var imageType: "png" | "svg";
  declare export var unicodeAlt: boolean;
  declare export var ascii: boolean;
  declare export var unicodeRegexp: string;
  declare export var cacheBustParam: string;
  declare export function toShort(str: string): string;

  declare export function toImage(str: string): string;

  declare export function shortnameToImage(str: string): string;

  declare export function unicodeToImage(str: string): string;

  declare export function shortnameToUnicode(str: string): string;
}
