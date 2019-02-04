declare module 'kdbush' {
        declare type Points = number[][];
	declare type Get<T> = (point: T) => number;
	declare type ArrayType = typeof Int8Array
| typeof Int16Array
| typeof Int32Array
| typeof Float32Array
| typeof Float64Array
| typeof Array;
	declare function kdbush(points: Points): kdbush$kdbush$KDBush<Points>

	declare function kdbush<T>(
points: T[],
getX: Get<T>,
getY: Get<T>,
nodeSize?: number,
ArrayType?: ArrayType): kdbush$kdbush$KDBush<T>

	declare class kdbush$KDBush<T>  {
ids: number[];
coords: number[];
nodeSize: number;
points: T[];
range(minX: number, minY: number, maxX: number, maxY: number): number[];
within(x: number, y: number, r: number): number[]
}
	declare module.exports: typeof kdbush

    }
