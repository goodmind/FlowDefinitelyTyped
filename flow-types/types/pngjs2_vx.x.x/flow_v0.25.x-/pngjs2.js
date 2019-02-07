declare module "pngjs2" {
  declare interface PNGOptions {
    width?: number;
    height?: number;
    checkCRC?: boolean;
    deflateChunkSize?: number;
    deflateLevel?: number;
    deflateStrategy?: number;
    deflateFactory?: any;
    filterType?: number | number[];
    colorType?: number;
    inputHasAlpha?: boolean;
  }
  declare interface PNGMetadata {
    width: number;
    height: number;
    palette: boolean;
    color: boolean;
    alpha: boolean;
    interlace: boolean;
  }
  declare export class PNG mixins stream.Writable {
    constructor(options?: PNGOptions): this;
    width: number;
    height: number;
    data: Buffer;
    gamma: number;
    on(event: string, callback: Function): this;
    on(event: "metadata", callback: (metadata: PNGMetadata) => void): this;
    on(event: "parsed", callback: (data: Buffer) => void): this;
    on(event: "error", callback: (err: Error) => void): this;
    parse(
      data: string | Buffer,
      callback?: (err: Error, data: Buffer) => void
    ): PNG;
    pack(): PNG;
    static bitblt(
      src: PNG,
      dst: PNG,
      srcX: number,
      srcY: number,
      width: number,
      height: number,
      deltaX: number,
      deltaY: number
    ): void;
    bitblt(
      dst: PNG,
      srcX: number,
      srcY: number,
      width: number,
      height: number,
      deltaX: number,
      deltaY: number
    ): PNG;
  }

  declare var npm$namespace$sync: {
    read: typeof sync$read
  };
  declare function sync$read(
    buffer: string | Buffer,
    options?: PNGOptions
  ): PNG;
}
