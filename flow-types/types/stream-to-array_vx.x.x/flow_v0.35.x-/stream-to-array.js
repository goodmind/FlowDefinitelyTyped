declare module 'stream-to-array' {
        declare module.exports: typeof toArray

	declare function toArray(callback?: (err: any, arr: any[]) => void): Promise<any[]>

	declare function toArray(
stream: NodeJS.ReadableStream,
callback?: (err: any, arr: any[]) => void): Promise<any[]>

    }
