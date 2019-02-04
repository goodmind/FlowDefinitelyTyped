declare module 'hexo-fs' {
        import type {
          PathLike,Stats,ReadStream,WriteStream,chmodSync,fchmodSync,lchmodSync,chownSync,fchownSync,lchownSync,closeSync,createReadStream,createWriteStream,fsyncSync,linkSync,mkdirSync,openSync,symlinkSync,readSync,readdirSync,readlinkSync,realpathSync,renameSync,statSync,fstatSync,lstatSync,truncateSync,ftruncateSync,unlinkSync,utimesSync,futimesSync,watchFile,unwatchFile,writeSync
        } from 'graceful-fs';

	declare export interface DirectoryOptions {
ignoreHidden?: boolean,
ignorePattern?: RegExp
} 
	declare export interface AppendFileOptions {
encoding?: string | null,
mode?: string | number,
flag?: string
} 
	declare export var F_OK: number | void;
	declare export var R_OK: number | void;
	declare export var W_OK: number | void;
	declare export var X_OK: number | void;
	declare export var access: ((path: PathLike, mode?: number) => Promise<void>) | void;
	declare export var accessSync: ((path: PathLike, mode?: number) => void) | void;
	
/**
 * Appends data to a file.
 */
declare export function appendFile(path: string, data: any, callback?: (err: any) => void): Promise<void>

	
/**
 * Appends data to a file.
 */
declare export function appendFile(
path: string,
data: any,
options: string | AppendFileOptions,
callback?: (err: any) => void): Promise<void>

	
/**
 * Synchronous version of fs.appendFile.
 */
declare export function appendFileSync(path: string, data: any, options?: string | AppendFileOptions): void

	declare export function chmod(path: PathLike, mode: string | number): Promise<void>

	declare export function fchmod(fd: number, mode: string | number): Promise<void>

	declare export function lchmod(path: PathLike, mode: string | number): Promise<void>

	declare export {
          chmodSync,fchmodSync,lchmodSync
        }

	declare export function chown(path: PathLike, uid: number, gid: number): Promise<void>

	declare export function fchown(fd: number, uid: number, gid: number): Promise<void>

	declare export function lchown(path: PathLike, uid: number, gid: number): Promise<void>

	declare export {
          chownSync,fchownSync,lchownSync
        }

	declare export function close(fd: number): Promise<void>

	declare export {
          closeSync
        }

	
/**
 * Copies a directory from src to dest. It returns an array of copied files.
 */
declare export function copyDir(
src: string,
dest: string,
callback?: (err: any, value?: string[]) => void): Promise<string[]>

	
/**
 * Copies a directory from src to dest. It returns an array of copied files.
 */
declare export function copyDir(
src: string,
dest: string,
options?: DirectoryOptions,
callback?: (err: any, value?: string[]) => void): Promise<string[]>

	
/**
 * Copies a file from src to dest.
 */
declare export function copyFile(src: PathLike, dest: string, callback?: (err: any) => void): Promise<void>

	declare export {
          createReadStream,createWriteStream
        }

	
/**
 * Deletes all files in a directory. It returns an array of deleted files.
 */
declare export function emptyDir(
path: string,
callback?: (err: any, value?: string | string[]) => void): Promise<string | string[]>

	declare export function emptyDir(
path: string,
options?: DirectoryOptions & {
exclude?: string[]
},
callback?: (err: any, value?: string | string[]) => void): Promise<string | string[]>

	declare export function emptyDirSync(
path: string,
options?: DirectoryOptions & {
exclude?: string[]
},
parent?: string): string | string[]

	
/**
 * Ensures the given path is available to use or appends a number to the path.
 */
declare export function ensurePath(path: string, callback?: (err: any, value?: string) => void): Promise<string>

	
/**
 * Synchronous version of `fs.ensurePath`.
 */
declare export function ensurePathSync(path: string): string

	
/**
 * Creates the parent directories if they does not exist and returns a writable stream.
 */
declare export function ensureWriteStream(
path: string,
callback?: (err: any, value?: WriteStream) => void): Promise<WriteStream>

	
/**
 * Creates the parent directories if they does not exist and returns a writable stream.
 */
declare export function ensureWriteStream(
path: string,
options?: string | {
flags?: string,
defaultEncoding?: string,
fd?: number,
mode?: number,
autoClose?: boolean,
start?: number
},
callback?: (err: any, value?: WriteStream) => void): Promise<WriteStream>

	
/**
 * Synchronous version of fs.ensureWriteStream.
 */
declare export function ensureWriteStreamSync(
path: string,
options?: string | {
flags?: string,
defaultEncoding?: string,
fd?: number,
mode?: number,
autoClose?: boolean,
start?: number
}): WriteStream

	
/**
 * Test whether or not the given `path` exists by checking with the file system.
 * @param path checking if exists.
 */
declare export function exists(path: PathLike, callback?: (exist: boolean) => void): Promise<boolean>

	
/**
 * Synchronous version of `fs.exists`.
 */
declare export function existsSync(path: PathLike): boolean

	declare export function fsync(fd: number): Promise<void>

	declare export {
          fsyncSync
        }

	declare export function link(existingPath: PathLike, newPath: PathLike): Promise<void>

	declare export {
          linkSync
        }

	
/**
 * Lists files in a directory.
 */
declare export function listDir(
path: string,
callback?: (err: any, value?: string[]) => void): Promise<string[]>

	
/**
 * Lists files in a directory.
 */
declare export function listDir(
path: string,
options?: DirectoryOptions,
callback?: (err: any, value?: string[]) => void): Promise<string[]>

	
/**
 * Synchronous version of `fs.listDir`.
 */
declare export function listDirSync(path: string, options?: DirectoryOptions, parent?: string): string | string[]

	declare export function mkdir(path: PathLike, mode?: string | number): Promise<void>

	declare export {
          mkdirSync
        }

	
/**
 * Creates a directory and its parent directories if they does not exist.
 */
declare export function mkdirs(path: PathLike, callback?: (err: any) => void): Promise<void>

	
/**
 * Synchronous version of `fs.mkdirs`.
 */
declare export function mkdirsSync(path: string): void

	declare export function open(
path: PathLike,
flags: string | number,
mode?: string | number | null): Promise<number>

	declare export {
          openSync
        }

	declare export function symlink(target: PathLike, path: PathLike, type?: string | null): Promise<void>

	declare export {
          symlinkSync
        }

	declare export function read<TBuffer: Buffer | Uint8Array>(
fd: number,
buffer: TBuffer,
offset: number,
length: number,
position: number | null): Promise<{
bytesRead: number,
buffer: TBuffer
}>

	declare export {
          readSync
        }

	declare export function readdir(
path: PathLike,
options?: {
encoding: BufferEncoding | null
} | BufferEncoding | null): Promise<string[]>

	declare export function readdir(path: PathLike, options: "buffer" | {
encoding: "buffer"
}): Promise<Buffer[]>

	declare export function readdir(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): Promise<Array<string | Buffer>>

	declare export {
          readdirSync
        }

	
/**
 * Reads the entire contents of a file.
 */
declare export function readFile(
path: PathLike | number,
callback?: (err: any, value?: string) => void): Promise<string>

	
/**
 * Reads the entire contents of a file.
 */
declare export function readFile(
path: PathLike | number,
options?: {
encoding?: string,
flag?: string,
escape?: boolean
},
callback?: (err: any, value?: string) => void): Promise<string>

	
/**
 * Synchronous version of `fs.readFile`.
 */
declare export function readFileSync(
path: PathLike | number,
options?: {
encoding?: string,
flag?: string,
escape?: boolean
}): string

	declare export function readlink(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string>

	declare export function readlink(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer>

	declare export function readlink(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): Promise<string | Buffer>

	declare export {
          readlinkSync
        }

	declare export function realpath(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string>

	declare export function realpath(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer>

	declare export function realpath(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): Promise<string | Buffer>

	declare export {
          realpathSync
        }

	declare export function rename(oldPath: PathLike, newPath: PathLike): Promise<void>

	declare export {
          renameSync
        }

	declare export function rmdir(path: string, callback?: (err: any) => void): Promise<void>

	declare export function rmdirSync(path: string): void

	declare export function stat(path: PathLike): Promise<Stats>

	declare export function fstat(fd: number): Promise<Stats>

	declare export function lstat(path: PathLike): Promise<Stats>

	declare export {
          statSync,fstatSync,lstatSync
        }

	declare export function truncate(path: PathLike, len?: number | null): Promise<void>

	declare export function ftruncate(fd: number, len?: number | null): Promise<void>

	declare export {
          truncateSync,ftruncateSync
        }

	declare export function unlink(path: PathLike): Promise<void>

	declare export {
          unlinkSync
        }

	declare export function utimes(
path: PathLike,
atime: string | number | Date,
mtime: string | number | Date): Promise<void>

	declare export function futimes(
fd: number,
atime: string | number | Date,
mtime: string | number | Date): Promise<void>

	declare export {
          utimesSync,futimesSync
        }

	import type {
          FSWatcher,WatchOptions
        } from 'chokidar';

	
/**
 * Watches changes of a file or a directory.
 * 
 * See Chokidar API for more info.
 */
declare export function watch(
path: string | string[],
options?: WatchOptions,
callback?: (err: any, value?: FSWatcher) => void): Promise<FSWatcher>

	declare export {
          watchFile,unwatchFile
        }

	declare export function write<TBuffer: Buffer | Uint8Array>(
fd: number,
buffer?: TBuffer,
offset?: number,
length?: number,
position?: number | null): Promise<{
bytesWritten: number,
buffer: TBuffer
}>

	declare export function write(
fd: number,
string: any,
position?: number | null,
encoding?: string | null): Promise<{
bytesWritten: number,
buffer: string
}>

	declare export {
          writeSync
        }

	
/**
 * Writes data to a file.
 */
declare export function writeFile(path: string, data: any, callback?: (err: any) => void): Promise<void>

	
/**
 * Writes data to a file.
 */
declare export function writeFile(
path: string,
data: any,
options?: string | {
encoding?: string | null,
mode?: string | number,
flag?: string
},
callback?: (err: any) => void): Promise<void>

	
/**
 * Synchronous version of `fs.writeFile`.
 */
declare export function writeFileSync(
path: string,
data: any,
options?: string | {
encoding?: string | null,
mode?: string | number,
flag?: string
}): void

	declare export {
          Stats,ReadStream,WriteStream
        }from 'graceful-fs';

	declare export function escapeEOL(str: string): string

	declare export function escapeBOM(str: string): string

    }
