declare module 'omggif' {
        declare export interface GifOptions {
background?: number,
loop?: number,
palette?: number[]
} 
	declare export interface FrameOptions {
delay?: number,
disposal?: number,
palette?: number[] | null,
transparent?: number
} 
	declare export interface Frame {
data_length: number,
data_offset: number,
delay: number,
disposal: number,
has_local_palette: boolean,
height: number,
interlaced: boolean,
palette_offset: number | null,
palette_size: number | null,
transparent_index: number | null,
width: number,
x: number,
y: number
} 
	declare export class GifWriter  {
height: number;
width: number;
constructor(buf: Buffer, width: number, height: number, gopts?: GifOptions): this;
addFrame(
x: number,
y: number,
w: number,
h: number,
indexed_pixels: number[],
opts?: FrameOptions): number;
end(): number;
getOutputBuffer(): Buffer;
getOutputBufferPosition(): number;
setOutputBuffer(v: Buffer): void;
setOutputBufferPosition(v: number): void
}
	declare export class GifReader  {
constructor(buf: Buffer): this;
decodeAndBlitFrameBGRA(frame_num: number, pixels: number[]): void;
decodeAndBlitFrameRGBA(frame_num: number, pixels: number[]): void;
frameInfo(frame_num: number): Frame;
loopCount(): number;
numFrames(): number
}
    }
