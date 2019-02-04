declare module 'stream-shift' {
        declare function shift(stream: NodeJS.ReadableStream): Buffer | string | null

	declare module.exports: typeof shift

    }
