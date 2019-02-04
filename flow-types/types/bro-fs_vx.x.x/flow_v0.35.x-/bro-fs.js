declare module 'bro-fs' {
        declare export type TextType = "Text" | "BinaryString" | "DataURL";
	declare export interface FSOptions {
bytes?: number,

/**
 * show request quota popup for PERSISTENT type
 * (for Chrome extensions with `unlimitedStorage` permission it is useful to pass `options.requestQuota = false`)
 */
requestQuota?: boolean,

/**
 * `window.PERSISTENT` | `window.TEMPORARY`
 */
type?: number
} 
	declare export interface StatObject {
fullPath: string,
isDirectory: boolean,
isFile: boolean,
modificationTime: Date,
name: string,
size: number
} 
	declare export interface UsageObject {
grantedBytes: number,
usedBytes: number
} 
	declare export function appendFile(
path: string | FileEntry,
data: string | Blob | File | ArrayBuffer): Promise<FileSystem>

	declare export function clear(): Promise<void[]>

	declare export function copy(
oldPath: string | FileEntry,
newPath: string,
options?: {
create?: boolean
}): Promise<FileEntry>

	declare export function exists(path: string): Promise<boolean>

	declare export function getEntry(path: FileEntry): Promise<FileEntry>

	declare export function getRoot(): Promise<DirectoryEntry>

	declare export function getUrl(path: string | FileEntry): Promise<string>

	declare export function init(options?: FSOptions): Promise<FileSystem>

	declare export function isSupported(): boolean

	declare export function mkdir(path: string): Promise<DirectoryEntry>

	declare export function readdir(
path: string | DirectoryEntry,
options?: {
deep?: boolean
}): Promise<FileEntry[]>

	declare export function readFile(
path: string | FileEntry,
options: {
type: "ArrayBuffer"
}): Promise<ArrayBuffer>

	declare export function readFile(path: string | FileEntry, options?: {
type?: TextType
}): Promise<string>

	declare export function rename(
oldPath: string | FileEntry,
newPath: string,
options?: {
create?: boolean
}): Promise<FileEntry>

	declare export function rmdir(path: string | DirectoryEntry): Promise<boolean>

	declare export function stat(path: string | FileEntry): Promise<StatObject>

	declare export function unlink(path: string | FileEntry): Promise<boolean>

	declare export function usage(): Promise<UsageObject>

	declare export function writeFile(path: string, data: string | Blob | File | ArrayBuffer): Promise<FileEntry>

    }
