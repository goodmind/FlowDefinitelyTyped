declare module 'jpeg-js' {
        declare export interface RawImageData<D: Uint8Array> {
data: D,
width: number,
height: number
} 
	declare export function decode(
jpegData: ArrayLike<number> | Iterable<number> | ArrayBuffer,
useTypedArray: true): RawImageData<Uint8Array>

	declare export function decode(
jpegData: ArrayLike<number> | Iterable<number> | ArrayBuffer,
useTypedArray?: false): RawImageData<Buffer>

	declare export function decode(
jpegData: ArrayLike<number> | Iterable<number> | ArrayBuffer,
useTypedArray: boolean): RawImageData<Uint8Array | Buffer>

	declare export function encode(imgData: RawImageData<Uint8Array | Buffer>, qu?: number): RawImageData<Buffer>

    }
