declare module "bdfjs" {
  declare export interface ParseOptions {
    allprops?: boolean;
    onlymeta?: boolean;
  }
  declare export interface BoundingBox {
    width: number;
    height: number;
    x: number;
    y: number;
  }
  declare export interface Glyph {
    bitmap: number[][];
    boundingBox: BoundingBox;
    bytes: number[];
    char: string;
    code: number;
    deviceWidthX: number;
    deviceWidthY: number;
    name: string;
    scalableWidthX: number;
    scalableWidthY: number;
  }
  declare export interface Properties {
    defaultChar: number;
    fontAscent: number;
    fontDescent: number;
    addStyleName?: string;
    averageWidth?: number;
    capHeight?: number;
    charsetEncoding?: string;
    charsetRegistry?: string;
    copyright?: string;
    faceName?: string;
    familyName?: string;
    font?: string;
    fontnameRegistry?: string;
    fontVersion?: string;
    foundry?: string;
    notice?: string;
    pixelSize?: number;
    pointSize?: number;
    resolutionX?: number;
    resolutionY?: number;
    setwidthName?: string;
    slant?: string;
    spacing?: string;
    weightName?: string;
    xHeight?: number;
    [key: string]: string | number | void;
  }
  declare export interface Size {
    points: number;
    resolutionX: number;
    resolutionY: number;
  }
  declare export interface Meta {
    boundingBox: BoundingBox;
    name: string;
    properties: Properties;
    size: Size;
    totalChars: number;
    version: string;
  }
  declare export interface Font {
    meta: Meta;
    glyphs: {
      [key: number]: Glyph
    };
  }
  declare export function parse(
    text: string | Buffer,
    options?: ParseOptions
  ): Font;

  declare export interface DrawOptions {
    kerningBias?: number;
  }
  declare export interface Bitmap {
    width: number;
    height: number;
    [row: number]: number[];
  }
  declare export function draw(
    font: Font,
    text: string,
    options?: DrawOptions
  ): Bitmap | void;

  declare export function trim(bitmap: Bitmap): Bitmap;
}
