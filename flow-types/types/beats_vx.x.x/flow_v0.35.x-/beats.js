declare module 'beats' {
        declare module.exports: typeof beats

	declare function beats(
bins: $ReadOnlyArray<beats$beats$Bin>,
minSeparation?: number): (
frequencies: Uint8Array | Float32Array | $ReadOnlyArray<number>,
dt?: number) => Float32Array

	declare interface beats$Bin {
lo: number,
hi: number,
threshold: number,
decay: number
} 
    }
