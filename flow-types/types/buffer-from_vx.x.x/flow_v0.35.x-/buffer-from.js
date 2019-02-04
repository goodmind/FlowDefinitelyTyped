declare module 'buffer-from' {
        declare function bufferFrom(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer

	declare function bufferFrom(str: string, encoding?: string): Buffer

	declare function bufferFrom(data: $ReadOnlyArray<any> | Buffer): Buffer

	declare module.exports: typeof bufferFrom

    }
