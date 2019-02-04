declare module 'typedarray-pool' {
        declare type DataType = "uint8"
| "uint16"
| "uint32"
| "int8"
| "int16"
| "int32"
| "float"
| "float32"
| "double"
| "float64"
| "arraybuffer"
| "data"
| "dataview"
| "uint8_clamped"
| "buffer";
	declare export function malloc(n: number, dtype?: DataType): any

	declare export function mallocUint8(n: number): Uint8Array

	declare export function mallocUint16(n: number): Uint16Array

	declare export function mallocUint32(n: number): Uint32Array

	declare export function mallocUint8Clamped(n: number): Uint8ClampedArray

	declare export function mallocInt8(n: number): Int8Array

	declare export function mallocInt16(n: number): Int16Array

	declare export function mallocInt32(n: number): Int32Array

	declare export function mallocFloat(n: number): Float32Array

	declare export function mallocDouble(n: number): Float64Array

	declare export function mallocArrayBuffer(n: number): ArrayBuffer

	declare export function mallocDataView(n: number): DataView

	declare export function mallocBuffer(n: number): any

	declare export function free(array: any): void

	declare export function freeUint8(array: Uint8Array): void

	declare export function freeUint16(array: Uint16Array): void

	declare export function freeUint32(array: Uint32Array): void

	declare export function freeUint8Clamped(array: Uint8ClampedArray): void

	declare export function freeInt8(array: Int8Array): void

	declare export function freeInt16(array: Int16Array): void

	declare export function freeInt32(array: Int32Array): void

	declare export function freeFloat(array: Float32Array): void

	declare export function freeDouble(array: Float64Array): void

	declare export function freeArrayBuffer(buffer: ArrayBuffer): void

	declare export function freeDataView(view: DataView): void

	declare export function freeBuffer(buffer: any): void

	declare export function clearCache(): void

    }
