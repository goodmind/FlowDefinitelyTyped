declare module 'snappy' {
        declare export interface SnappyDecompressOpts {
asBuffer: boolean
} 
	declare export type bufferCallback = (err: Error | null, data: Buffer) => void;
	declare export type bufferOrStringCallback = (err: Error | null, data: Buffer | string) => void;
	declare export type booleanCallback = (err: Error | null, data: boolean) => void;
	declare export function compress(buffer: Buffer | string, callback: bufferCallback): void

	declare export function compressSync(buffer: Buffer | string): Buffer

	declare export function uncompress(buffer: Buffer, callback: bufferCallback): void

	declare export function uncompress(
buffer: Buffer,
options: SnappyDecompressOpts,
callback: bufferOrStringCallback): void

	declare export function uncompressSync(buffer: Buffer): Buffer

	declare export function uncompressSync(buffer: Buffer, options: SnappyDecompressOpts): Buffer | string

	declare export function isValidCompressed(buffer: Buffer, callback: booleanCallback): void

	declare export function isValidCompressedSync(buffer: Buffer): boolean

    }
