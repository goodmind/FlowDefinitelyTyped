declare module "upng-js" {
  declare export interface ImageFrameRect {
    x: number;
    y: number;
    width: number;
    height: number;
  }
  declare export interface ImageFrame {
    rect: ImageFrameRect;
    delay: number;
    dispose: number;
    blend: number;
  }
  declare export interface ImageTabACTL {
    num_frames: number;
    num_plays: number;
  }
  declare export interface ImageTabText {
    [key: string]: string;
  }
  declare export interface ImageTabs {
    acTL?: ImageTabACTL;
    pHYs?: number[];
    cHRM?: number[];
    tEXt?: ImageTabText;
    iTXt?: ImageTabText;
    PLTE?: number[];
    hIST?: number[];
    tRNS?: number | number[];
    gAMA?: number;
    sRGB?: number;
    bKGD?: number | number[];
  }
  declare export interface Image {
    width: number;
    height: number;
    depth: number;
    ctype: number;
    frames: ImageFrame[];
    tabs: ImageTabs;
    data: ArrayBuffer;
  }
  declare export interface QuantizeResult {
    abuf: ArrayBuffer;
    inds: Uint8Array;
    plte: any[];
  }
  declare export function encode(
    imgs: ArrayBuffer[],
    w: number,
    h: number,
    cnum: number,
    dels?: number[]
  ): ArrayBuffer;

  declare export function encodeLL(
    imgs: ArrayBuffer[],
    w: number,
    h: number,
    cc: number,
    ac: number,
    depth: number,
    dels?: number[]
  ): ArrayBuffer;

  declare export function decode(buffer: ArrayBuffer): Image;

  declare export function toRGBA8(out: Image): ArrayBuffer[];

  declare export function quantize(
    data: ArrayBuffer,
    psize: number
  ): QuantizeResult;
}
