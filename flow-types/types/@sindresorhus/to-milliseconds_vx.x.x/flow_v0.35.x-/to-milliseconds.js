declare module '@sindresorhus/to-milliseconds' {
        declare module.exports: typeof toMilliseconds

	declare function toMilliseconds(input: toMilliseconds$toMilliseconds$TimeSpec): number

	declare interface toMilliseconds$TimeSpec {
days?: number,
hours?: number,
minutes?: number,
seconds?: number,
milliseconds?: number,
microseconds?: number,
nanoseconds?: number
} 
    }
