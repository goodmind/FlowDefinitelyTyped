declare module 'ndarray' {
        declare function ndarray<T>(
data: ndarray$ndarray$Data<T>,
shape?: number[],
stride?: number[],
offset?: number): ndarray<T>

	declare interface ndarray<T> {
data: ndarray$ndarray$Data<T>,
shape: number[],
stride: number[],
offset: number,
dtype: ndarray$ndarray$DataType,
size: number,
order: number[],
dimension: number,
get(...args: number[]): T,
set(...args: number[]): T,
index(...args: number[]): T,
lo(...args: number[]): ndarray<T>,
hi(...args: number[]): ndarray<T>,
step(...args: number[]): ndarray<T>,
transpose(...args: number[]): ndarray<T>,
pick(...args: Array<number | null>): ndarray<T>,
reshape(...shapes: number[]): ndarray<T>,
T: ndarray<T>
} 
	declare type ndarray$DataType = "int8"
| "int16"
| "int32"
| "uint8"
| "uint16"
| "uint32"
| "float32"
| "float64"
| "array"
| "uint8_clamped"
| "buffer"
| "generic";

declare type ndarray$Data<T> = T[]
| Int8Array
| Int16Array
| Int32Array
| Uint8Array
| Uint16Array
| Uint32Array
| Float32Array
| Float64Array
| Uint8ClampedArray;
	declare module.exports: typeof ndarray

    }
