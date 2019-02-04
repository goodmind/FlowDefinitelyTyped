declare module 'ncp' {
        declare export function ncp(source: string, destination: string, callback: (err: Error) => void): void

	declare export function ncp(
source: string,
destination: string,
options: Options,
callback: (err: Error) => void): void

	declare interface Options {
filter?: RegExp | ((filename: string) => boolean),
transform?: (read: NodeJS.ReadableStream, write: NodeJS.WritableStream) => void,
clobber?: boolean,
dereference?: boolean,
stopOnErr?: boolean,
errs?: NodeJS.WritableStream
} 
    }
