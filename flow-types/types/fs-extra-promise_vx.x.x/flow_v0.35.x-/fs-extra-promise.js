declare module 'fs-extra-promise' {
        import typeof * as stream from 'stream';

	import typeof * as fs from 'fs';

	import typeof * as Promise from 'bluebird';

	import type {
          CopyFilter,CopyOptions,ReadOptions,WriteOptions,MoveOptions
        } from 'fs-extra';

	declare export * from 'fs-extra';

	declare export interface MkdirOptions {
fs?: any,
mode?: number
} 
	declare export function copyAsync(src: string, dest: string, options?: CopyFilter | CopyOptions): Promise<void>

	declare export function createFileAsync(file: string): Promise<void>

	declare export function mkdirsAsync(dir: string, options?: MkdirOptions): Promise<void>

	declare export function mkdirpAsync(dir: string, options?: MkdirOptions): Promise<void>

	declare export function moveAsync(src: string, dest: string, options?: MoveOptions): Promise<void>

	declare export function outputFileAsync(file: string, data: any): Promise<void>

	declare export function outputJsonAsync(file: string, data: any): Promise<void>

	declare export function outputJSONAsync(file: string, data: any): Promise<void>

	declare export function readJsonAsync(file: string, options?: ReadOptions): Promise<any>

	declare export function readJSONAsync(file: string, options?: ReadOptions): Promise<any>

	declare export function removeAsync(dir: string): Promise<void>

	declare export function writeJsonAsync(file: string, object: any, options?: WriteOptions): Promise<void>

	declare export function writeJSONAsync(file: string, object: any, options?: WriteOptions): Promise<void>

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

	declare export function realpathAsync(path: string, cache?: {
[path: string]: string
}): Promise<string>

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

	declare export function readFileAsync(filename: string, options: string | ReadOptions): Promise<string>

	declare export function readFileAsync(filename: string): Promise<Buffer>

	declare export function writeFileAsync(filename: string, data: any, options?: string | WriteOptions): Promise<void>

	declare export function appendFileAsync(filename: string, data: any, option?: string | WriteOptions): Promise<void>

	declare export function existsAsync(path: string): Promise<boolean>

	declare export function ensureDirAsync(path: string): Promise<void>

	declare export function isDirectory(path: string, callback?: (err: Error, isDirectory: boolean) => void): void

	declare export function isDirectorySync(path: string): boolean

	declare export function isDirectoryAsync(path: string): Promise<boolean>

    }
