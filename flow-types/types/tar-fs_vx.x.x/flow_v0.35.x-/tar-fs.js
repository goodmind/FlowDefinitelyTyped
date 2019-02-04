declare module 'tar-fs' {
        declare export function pack(cwd: string, opts?: PackOptions): stream.Readable

	declare export function extract(cwd: string, opts?: ExtractOptions): stream.Writable

	declare export interface Options {
ignore?: (name: string) => boolean,
filter?: (name: string) => boolean,
map?: (header: Headers) => Headers,
mapStream?: (fileStream: fs.ReadStream, header: Headers) => fs.ReadStream,
dmode?: number,
fmode?: number,
readable?: boolean,
writable?: boolean,
strict?: boolean
} 
	declare export type PackOptions = {
entries?: string[],
dereference?: boolean,
finalize?: boolean,
finish?: (pack: any) => void
} & Options

	declare export type ExtractOptions = {
ignore?: (name: string, header?: Headers) => boolean,
filter?: (name: string, header?: Headers) => boolean
} & Options

	declare export interface Headers {
name: string,
mode: number,
mtime: Date,
size: number,
type: "file" | "directory" | "link" | "symlink",
uid: number,
gid: number
} 
    }
