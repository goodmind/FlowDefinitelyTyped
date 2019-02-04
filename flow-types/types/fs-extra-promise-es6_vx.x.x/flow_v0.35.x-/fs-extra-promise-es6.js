declare module 'fs-extra-promise-es6' {
        declare export type Stats = fs.Stats;
	declare export interface FSWatcher {
close(): void
} 
	declare export class ReadStream mixins stream.Readable {}
	declare export class WriteStream mixins stream.Writable {}
	declare export function copy(src: string, dest: string, callback?: (err: Error) => void): void

	declare export function copy(
src: string,
dest: string,
filter: (src: string) => boolean,
callback?: (err: Error) => void): void

	declare export function copySync(src: string, dest: string, filter?: (src: string) => boolean): void

	declare export function createFile(file: string, callback?: (err: Error) => void): void

	declare export function createFileSync(file: string): void

	declare export function mkdirs(dir: string, callback?: (err: Error) => void): void

	declare export function mkdirp(dir: string, callback?: (err: Error) => void): void

	declare export function mkdirsSync(dir: string): void

	declare export function mkdirpSync(dir: string): void

	declare export function outputFile(file: string, data: any, callback?: (err: Error) => void): void

	declare export function outputFileSync(file: string, data: any): void

	declare export function outputJson(file: string, data: any, callback?: (err: Error) => void): void

	declare export function outputJSON(file: string, data: any, callback?: (err: Error) => void): void

	declare export function outputJsonSync(file: string, data: any): void

	declare export function outputJSONSync(file: string, data: any): void

	declare export function readJson(file: string, callback?: (err: Error) => void): void

	declare export function readJson(file: string, options?: OpenOptions, callback?: (err: Error) => void): void

	declare export function readJSON(file: string, callback?: (err: Error) => void): void

	declare export function readJSON(file: string, options?: OpenOptions, callback?: (err: Error) => void): void

	declare export function readJsonSync(file: string, options?: OpenOptions): void

	declare export function readJSONSync(file: string, options?: OpenOptions): void

	declare export function remove(dir: string, callback?: (err: Error) => void): void

	declare export function removeSync(dir: string): void

	declare export function writeJson(file: string, object: any, callback?: (err: Error) => void): void

	declare export function writeJson(
file: string,
object: any,
options?: OpenOptions,
callback?: (err: Error) => void): void

	declare export function writeJSON(file: string, object: any, callback?: (err: Error) => void): void

	declare export function writeJSON(
file: string,
object: any,
options?: OpenOptions,
callback?: (err: Error) => void): void

	declare export function writeJsonSync(file: string, object: any, options?: OpenOptions): void

	declare export function writeJSONSync(file: string, object: any, options?: OpenOptions): void

	declare export function rename(oldPath: string, newPath: string, callback?: (err: Error) => void): void

	declare export function renameSync(oldPath: string, newPath: string): void

	declare export function truncate(fd: number, len: number, callback?: (err: Error) => void): void

	declare export function truncateSync(fd: number, len: number): void

	declare export function chown(path: string, uid: number, gid: number, callback?: (err: Error) => void): void

	declare export function chownSync(path: string, uid: number, gid: number): void

	declare export function fchown(fd: number, uid: number, gid: number, callback?: (err: Error) => void): void

	declare export function fchownSync(fd: number, uid: number, gid: number): void

	declare export function lchown(path: string, uid: number, gid: number, callback?: (err: Error) => void): void

	declare export function lchownSync(path: string, uid: number, gid: number): void

	declare export function chmod(path: string, mode: number | string, callback?: (err: Error) => void): void

	declare export function chmodSync(path: string, mode: number | string): void

	declare export function fchmod(fd: number, mode: number | string, callback?: (err: Error) => void): void

	declare export function fchmodSync(fd: number, mode: number | string): void

	declare export function lchmod(path: string, mode: number | string, callback?: (err: Error) => void): void

	declare export function lchmodSync(path: string, mode: number | string): void

	declare export function stat(path: string, callback?: (err: Error, stats: Stats) => void): void

	declare export function lstat(path: string, callback?: (err: Error, stats: Stats) => void): void

	declare export function fstat(fd: number, callback?: (err: Error, stats: Stats) => void): void

	declare export function statSync(path: string): Stats

	declare export function lstatSync(path: string): Stats

	declare export function fstatSync(fd: number): Stats

	declare export function link(srcpath: string, dstpath: string, callback?: (err: Error) => void): void

	declare export function linkSync(srcpath: string, dstpath: string): void

	declare export function symlink(
srcpath: string,
dstpath: string,
type?: string,
callback?: (err: Error) => void): void

	declare export function symlinkSync(srcpath: string, dstpath: string, type?: fs.symlink.Type): void

	declare export function readlink(path: string, callback?: (err: Error, linkString: string) => void): void

	declare export function realpath(path: string, callback?: (err: Error, resolvedPath: string) => void): void

	declare export function realpath(
path: string,
cache: string,
callback: (err: Error, resolvedPath: string) => void): void

	declare export function realpathSync(path: string, cache?: boolean): string

	declare export function unlink(path: string, callback?: (err: Error) => void): void

	declare export function unlinkSync(path: string): void

	declare export function rmdir(path: string, callback?: (err: Error) => void): void

	declare export function rmdirSync(path: string): void

	declare export function mkdir(path: string, mode?: number | string, callback?: (err: Error) => void): void

	declare export function mkdirSync(path: string, mode?: number | string): void

	declare export function readdir(path: string, callback?: (err: Error, files: string[]) => void): void

	declare export function readdirSync(path: string): string[]

	declare export function close(fd: number, callback?: (err: Error) => void): void

	declare export function closeSync(fd: number): void

	declare export function open(
path: string,
flags: string,
mode?: string,
callback?: (err: Error, fs: number) => void): void

	declare export function openSync(path: string, flags: string, mode?: string): number

	declare export function utimes(
path: string,
atime: number,
mtime: number,
callback?: (err: Error) => void): void

	declare export function utimesSync(path: string, atime: number, mtime: number): void

	declare export function futimes(
fd: number,
atime: number,
mtime: number,
callback?: (err: Error) => void): void

	declare export function futimesSync(fd: number, atime: number, mtime: number): void

	declare export function fsync(fd: number, callback?: (err: Error) => void): void

	declare export function fsyncSync(fd: number): void

	declare export function write(
fd: number,
buffer: Buffer,
offset: number,
length: number,
position: number,
callback?: (err: Error, written: number, buffer: Buffer) => void): void

	declare export function writeSync(
fd: number,
buffer: Buffer,
offset: number,
length: number,
position: number): number

	declare export function read(
fd: number,
buffer: Buffer,
offset: number,
length: number,
position: number,
callback?: (err: Error, bytesRead: number, buffer: Buffer) => void): void

	declare export function readSync(
fd: number,
buffer: Buffer,
offset: number,
length: number,
position: number): number

	declare export function readFile(
filename: string,
options: OpenOptions | string,
callback: (err: Error, data: string) => void): void

	declare export function readFile(filename: string, callback: (err: Error, data: Buffer) => void): void

	declare export function readFileSync(filename: string): Buffer

	declare export function readFileSync(filename: string, options: OpenOptions | string): string

	declare export function writeFile(filename: string, data: any, callback?: (err: Error) => void): void

	declare export function writeFile(
filename: string,
data: any,
options: OpenOptions | string,
callback?: (err: Error) => void): void

	declare export function writeFileSync(filename: string, data: any, option?: OpenOptions | string): void

	declare export function appendFile(filename: string, data: any, callback?: (err: Error) => void): void

	declare export function appendFile(
filename: string,
data: any,
option: OpenOptions | string,
callback?: (err: Error) => void): void

	declare export function appendFileSync(filename: string, data: any, option?: OpenOptions | string): void

	declare export function watchFile(filename: string, listener: {
curr: Stats,
prev: Stats
}): void

	declare export function watchFile(
filename: string,
options: {
persistent?: boolean,
interval?: number
},
listener: {
curr: Stats,
prev: Stats
}): void

	declare export function unwatchFile(filename: string, listener?: Stats): void

	declare export function watch(
filename: string,
options?: {
persistent?: boolean
},
listener?: (event: string, filename: string) => any): FSWatcher

	declare export function exists(path: string, callback?: (exists: boolean) => void): void

	declare export function existsSync(path: string): boolean

	declare export function ensureDir(path: string, cb: (err: Error) => void): void

	declare export function ensureDirSync(path: string): void

	declare export interface OpenOptions {
encoding?: string,
flag?: string
} 
	declare export function createReadStream(
path: string | Buffer,
options?: {
flags?: string,
encoding?: string,
fd?: number,
mode?: number,
autoClose?: boolean,
start?: number,
end?: number
}): ReadStream

	declare export function createWriteStream(
path: string | Buffer,
options?: {
flags?: string,
encoding?: string,
fd?: number,
mode?: number
}): WriteStream

	declare export function copyAsync(src: string, dest: string, filter?: (src: string) => boolean): Promise<void>

	declare export function createFileAsync(file: string): Promise<void>

	declare export function mkdirsAsync(dir: string): Promise<void>

	declare export function mkdirpAsync(dir: string): Promise<void>

	declare export function outputFileAsync(file: string, data: any): Promise<void>

	declare export function outputJSONAsync(file: string, data: any): Promise<void>

	declare export function readJSONAsync(file: string, options?: OpenOptions): Promise<void>

	declare export function removeAsync(dir: string): Promise<void>

	declare export function writeJsonAsync(file: string, object: any, options?: OpenOptions): Promise<void>

	declare export function writeJSONAsync(file: string, object: any, options?: OpenOptions): Promise<void>

	declare export function renameAsync(oldPath: string, newPath: string): Promise<void>

	declare export function truncateAsync(fd: number, len: number): Promise<void>

	declare export function chownAsync(path: string, uid: number, gid: number): Promise<void>

	declare export function fchownAsync(fd: number, uid: number, gid: number): Promise<void>

	declare export function lchownAsync(path: string, uid: number, gid: number): Promise<void>

	declare export function chmodAsync(path: string, mode: number | string): Promise<void>

	declare export function fchmodAsync(fd: number, mode: number | string): Promise<void>

	declare export function lchmodAsync(path: string, mode: number | string): Promise<void>

	declare export function statAsync(path: string): Promise<Stats>

	declare export function lstatAsync(path: string): Promise<Stats>

	declare export function fstatAsync(fd: number): Promise<Stats>

	declare export function linkAsync(srcpath: string, dstpath: string): Promise<void>

	declare export function symlinkAsync(srcpath: string, dstpath: string, type?: fs.symlink.Type): Promise<void>

	declare export function readlinkAsync(path: string): Promise<string>

	declare export function realpathAsync(path: string, cache?: string): Promise<string>

	declare export function unlinkAsync(path: string): Promise<void>

	declare export function rmdirAsync(path: string): Promise<void>

	declare export function mkdirAsync(path: string, mode?: number | string): Promise<void>

	declare export function readdirAsync(path: string): Promise<string[]>

	declare export function closeAsync(fd: number): Promise<void>

	declare export function openAsync(path: string, flags: string, mode?: string): Promise<number>

	declare export function utimesAsync(path: string, atime: number, mtime: number): Promise<void>

	declare export function futimesAsync(fd: number, atime: number, mtime: number): Promise<void>

	declare export function fsyncAsync(fd: number): Promise<void>

	declare export function writeAsync(
fd: number,
buffer: Buffer,
offset: number,
length: number,
position: number): Promise<[number, Buffer]>

	declare export function readAsync(
fd: number,
buffer: Buffer,
offset: number,
length: number,
position: number): Promise<[number, Buffer]>

	declare export function readFileAsync(filename: string, options: OpenOptions | string): Promise<string>

	declare export function readFileAsync(filename: string): Promise<Buffer>

	declare export function writeFileAsync(filename: string, data: any, options?: OpenOptions | string): Promise<void>

	declare export function appendFileAsync(filename: string, data: any, option?: OpenOptions | string): Promise<void>

	declare export function existsAsync(path: string): Promise<boolean>

	declare export function ensureDirAsync(path: string): Promise<void>

	declare export function isDirectory(path: string, callback?: (err: Error, isDirectory: boolean) => void): void

	declare export function isDirectorySync(path: string): boolean

	declare export function isDirectoryAsync(path: string): Promise<boolean>

    }
