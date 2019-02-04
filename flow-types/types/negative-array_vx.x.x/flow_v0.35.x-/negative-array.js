declare module 'negative-array' {
        declare module.exports: typeof negativeArray

	declare function negativeArray<T>(array: T[]): T[]

    }
