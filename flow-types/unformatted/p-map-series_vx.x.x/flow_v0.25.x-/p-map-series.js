declare module 'p-map-series' {
        declare module.exports: typeof pMapSeries

	declare function pMapSeries<T, U= T>(
input: Iterable<PromiseLike<T> | T>,
mapper: (element: T, index: number) => PromiseLike<U> | U): Promise<U[]>

    }
