declare module 'array.prototype.flatmap' {
        declare interface FlatMap {
<A, B, T: {[key: string]: any} | void= void>(xs: $ReadOnlyArray<A>, fn: (x: A, index: number, array: A[]) => B[], thisArg?: T): B[],
getPolyfill(): typeof flatMapImpl,
implementation: typeof flatMapImpl,
shim(): typeof flatMapImpl
} 
	declare var flatMap: FlatMap;
	declare module.exports: typeof flatMap

    }
