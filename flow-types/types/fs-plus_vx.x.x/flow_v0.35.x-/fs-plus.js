declare module 'fs-plus' {
        import type {
          Stats
        } from 'fs';

	declare export * from 'fs';

	
/**
 * Returns the absolute path to the home directory.
 */
declare export function getHomeDirectory(): string

	
/**
 * Make the given path absolute by resolving it against the current working directory.
 */
declare export function absolute(relativePath: string): string

	
/**
 * Normalize the given path treating a leading `~` segment as referring to the home directory. This method does not query the filesystem.
 */
declare export function normalize(pathToNormalize: string): string

	
/**
 * Convert an absolute path to tilde path for Linux and macOS.
 */
declare export function tildify(pathToTildify: string): string

	
/**
 * Get path to store application specific data.
 * 
 * * Mac: `~/Library/Application Support/`
 * * Win: `%AppData%`
 * * Linux: `/var/lib`
 */
declare export function getAppDataDirectory(): string

	
/**
 * Returns true if the given path is absolute.
 */
declare export function isAbsolute(pathToCheck: string): boolean

	
/**
 * Returns true if a file or folder at the specified path exists.
 */
declare export function existsSync(pathToCheck: string): boolean

	
/**
 * Returns true if the given path exists and is a directory.
 */
declare export function isDirectorySync(directoryPath: string): boolean

	
/**
 * Asynchronously checks that the given path exists and is a directory.
 */
declare export function isDirectory(directoryPath: string, callback: (result: boolean) => void): void

	
/**
 * Returns true if the specified path exists and is a file.
 */
declare export function isFileSync(filePath: string): boolean

	
/**
 * Returns true if the specified path is a symbolic link.
 */
declare export function isSymbolicLinkSync(symlinkPath: string): boolean

	
/**
 * Calls back with true if the specified path is a symbolic link.
 */
declare export function isSymbolicLink(symlinkPath: string, callback: (result: boolean) => void): void

	
/**
 * Returns true if the specified path is executable.
 */
declare export function isExecutableSync(pathToCheck: string): boolean

	
/**
 * Returns the size of the specified path.
 */
declare export function getSizeSync(pathToCheck: string): number

	
/**
 * Returns an Array with the paths of the files and directories contained within the directory path. It is not recursive.
 */
declare export function listSync(rootPath: string, extensions?: string[]): string[]

	
/**
 * Asynchronously lists the files and directories in the given path. The listing is not recursive.
 */
declare export function list(rootPath: string, callback: (err: Error, result: string[]) => void): void

	
/**
 * Asynchronously lists the files and directories in the given path. The listing is not recursive.
 */
declare export function list(
rootPath: string,
extensions: string[],
callback: (err: Error, result: string[]) => void): void

	
/**
 * Get all paths under the given path.
 */
declare export function listTreeSync(rootPath: string): string[]

	
/**
 * Moves the source file or directory to the target.
 */
declare export function moveSync(source: string, target: string): void

	
/**
 * Asynchronously moves the source file or directory to the target.
 */
declare export function move(source: string, target: string, callback: (err: Error) => void): void

	
/**
 * Removes the file or directory at the given path.
 */
declare export function removeSync(pathToRemove: string): void

	
/**
 * Asynchronously removes the file or directory at the given path.
 */
declare export function remove(pathToRemove: string, callback: (err: Error) => void): void

	
/**
 * Open, write, flush, and close a file, writing the given content synchronously.
 */
declare export function writeFileSync(
filePath: string,
content: string,
options?: {
encoding?: string | null,
mode?: number | string,
flag?: string
} | string | null): void

	
/**
 * Open, write, flush, and close a file, writing the given content asynchronously.
 */
declare export function writeFile(filePath: string, content: any, callback: (err: any) => void): void

	
/**
 * Open, write, flush, and close a file, writing the given content asynchronously.
 */
declare export function writeFile(
filePath: string,
content: any,
options: {
encoding?: string | null,
mode?: number | string,
flag?: string
} | string | void | null,
callback: (err: any) => void): void

	
/**
 * Copies the given path.
 */
declare export function copySync(source: string, target: string): void

	
/**
 * Asynchronously copies the given path.
 */
declare export function copy(source: string, target: string, callback: (err: any) => void): void

	
/**
 * Copies the given path synchronously, buffering reads and writes to keep memory footprint to a minimum. If the destination directory doesn't exist, it creates it.
 */
declare export function copyFileSync(source: string, target: string, bufferSize?: number): void

	
/**
 * Create a directory at the specified path including any missing parent directories.
 */
declare export function makeTreeSync(directoryPath: string): void

	
/**
 * Asynchronously create a directory at the specified path including any missing parent directories.
 */
declare export function makeTree(directoryPath: string, callback: (err: any) => void): void

	
/**
 * Recursively walk the given path and execute the given functions.
 */
declare export function traverseTreeSync(
rootPath: string,
onFile: (file: string) => void,
onDirectory: (dir: string) => boolean | void): void

	
/**
 * Asynchronously walk the given path and execute the given functions.
 */
declare export function traverseTree(
rootPath: string,
onFile: (file: string) => void,
onDirectory: (dir: string) => boolean | void,
onDone: (err: any) => void): void

	
/**
 * Hashes the contents of the given file.
 */
declare export function md5ForPath(pathToDigest: string): string

	
/**
 * Finds a relative path among the given array of paths.
 */
declare export function resolve(loadPath: string, pathToResolve: string, extensions?: string[]): string | void

	
/**
 * Finds a relative path using Node's module paths as load paths.
 */
declare export function resolveOnLoadPath(pathToResolve: string, extensions?: string[]): string | void

	
/**
 * Finds the first file in the given path which matches the extension in the order given.
 */
declare export function resolveExtension(pathToResolve: string, extensions: string[]): string | void

	
/**
 * Returns true for extensions associated with compressed files.
 */
declare export function isCompressedExtension(ext: string): boolean

	
/**
 * Returns true for extensions associated with image files.
 */
declare export function isImageExtension(ext: string): boolean

	
/**
 * Returns true for extensions associated with PDF files.
 */
declare export function isPdfExtension(ext: string): boolean

	
/**
 * Returns true for extensions associated with binary files.
 */
declare export function isBinaryExtension(ext: string): boolean

	
/**
 * Returns true for files named similarily to `README`.
 */
declare export function isReadmePath(readmePath: string): boolean

	
/**
 * Returns true for extensions associated with Markdown files.
 */
declare export function isMarkdownExtension(ext: string): boolean

	
/**
 * Is the filesystem case insensitive?
 */
declare export function isCaseInsensitive(): boolean

	
/**
 * Is the filesystem case sensitive?
 */
declare export function isCaseSensitive(): boolean

    }
