declare module "png.js" {
  declare type BitDepth = 2 | 4 | 8 | 16;
  declare type ColorType = 0 | 2 | 3 | 4 | 6;
  declare type ParseCallback = (err: Error | void, png: PNG) => void;
  declare interface ParseOptions {
    data?: boolean;
  }
  declare class PNGReader {
    bytes: Uint8Array | number[] | Buffer;
    dataChunks: number[][];
    i: number;
    png: PNG;
    constructor(bytes: Uint8Array | string | Buffer | ArrayBuffer): this;
    parse(callback: ParseCallback): void;
    parse(options: ParseOptions, callback: ParseCallback): void;
  }
  declare class PNG {
    alpha: boolean;
    bitDepth: BitDepth;
    colors: number;
    colorType: ColorType;
    compressionMethod: 0;
    filterMethod: 0;
    height: number;
    interlaceMethod: 0 | 1;
    palette: number[] | null;
    pixelBits: number;
    pixels: Buffer | null;
    width: number;
    getBitDepth(): BitDepth;
    getColorType(): ColorType;
    getCompressionMethod(): 0;
    getFilterMethod(): 0;
    getHeight(): number;
    getInterlaceMethod(): 0 | 1;
    getPalette(): number[];
    getPixel(x: number, y: number): [number, number, number, number];
    getWidth(): number;
    setBitDepth(bitDepth: BitDepth): void;
    setColorType(colorType: ColorType): void;
    setCompressionMethod(compressionMethod: 0): void;
    setFilterMethod(filterMethod: 0): void;
    setHeight(height: number): void;
    setInterlaceMethod(interlaceMethod: 0 | 1): void;
    setPalette(palette: number[]): void;
    setWidth(width: number): void;
  }
  declare module.exports: typeof PNGReader;
}
