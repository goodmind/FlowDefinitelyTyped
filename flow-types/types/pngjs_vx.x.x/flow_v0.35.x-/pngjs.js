declare module 'pngjs' {
        import type {
          Duplex
        } from 'stream';

	import type {
          createDeflate
        } from 'zlib';

	declare export class PNG mixins Duplex {
static adjustGamma(src: PNG): void;
static bitblt(
src: PNG,
dst: PNG,
srcX?: number,
srcY?: number,
width?: number,
height?: number,
deltaX?: number,
deltaY?: number): void;
static sync: {
read(buffer: Buffer, options?: ParserOptions): PNG,
write(png: PNG, options?: PackerOptions): Buffer
};
constructor(options?: PNGOptions): this;
data: Buffer;
gamma: number;
height: number;
width: number;
adjustGamma(): void;
bitblt(
dst: PNG,
srcX?: number,
srcY?: number,
width?: number,
height?: number,
deltaX?: number,
deltaY?: number): PNG;
on(event: "metadata", callback: (metadata: Metadata) => void): this;
on(event: "parsed", callback: (data: Buffer) => void): this;
on(event: "error", callback: (error: Error) => void): this;
on(event: string, callback: (...args: any[]) => void): this;
pack(): PNG;
parse(data: string | Buffer, callback?: (error: Error, data: PNG) => void): PNG
}
	declare export interface BaseOptions {
width?: number,
height?: number,
fill?: boolean
} 
	declare export interface ParserOptions {
checkCRC?: boolean
} 
	declare export interface PackerOptions {
deflateChunkSize?: number,
deflateLevel?: number,
deflateStrategy?: number,
deflateFactory?: typeof createDeflate,
colorType?: ColorType,
bitDepth?: 8 | 16,
bgColor?: {
red: number,
green: number,
blue: number
},
inputHasAlpha?: boolean,
inputColorType?: ColorType,
filterType?: number | number[]
} 
	declare export type PNGOptions = BaseOptions & ParserOptions & PackerOptions;
	declare export type ColorType = 0 | 2 | 4 | 6;
	declare export interface Metadata {
width: number,
height: number,
depth: 1
| 2
| 4
| 8
| 16,
interlace: boolean,
palette: boolean,
color: boolean,
alpha: boolean,
bpp: 1 | 2 | 3 | 4,
colorType: ColorType
} 
    }
