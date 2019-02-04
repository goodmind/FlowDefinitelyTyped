declare module 'iconv' {
        declare interface Iconv$Static {
new (fromEncoding: string, toEncoding: string): Iconv$Iconv,
(fromEncoding: string, toEncoding: string): Iconv$Iconv
} 

declare type Iconv$Iconv = {
writable: boolean,
convert(input: string | Buffer, encoding?: string): Buffer,
write(input: string | Buffer, encoding?: string): boolean,
end(input?: string | Buffer, encoding?: string): void,
write(buffer: Buffer | string, cb?: Function): boolean,
write(str: string, encoding?: string, cb?: Function): boolean,
end(): void,
end(buffer: Buffer, cb?: Function): void,
end(str: string, cb?: Function): void,
end(str: string, encoding?: string, cb?: Function): void,
pipe<T: NodeJS.WritableStream>(destination: T, options?: {
end?: boolean
}): T
} & NodeJS.WritableStream

	declare var Iconv$Iconv: Iconv$Iconv.Iconv$Static;
	declare module.exports: typeof Iconv$Iconv

    }
