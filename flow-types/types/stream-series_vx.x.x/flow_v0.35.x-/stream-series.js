declare module 'stream-series' {
        declare function series<T: NodeJS.ReadableStream>(...streams: T[]): NodeJS.ReadWriteStream

	declare module.exports: typeof series

    }
