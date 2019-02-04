declare module 'cpx' {
        import typeof * as stream from 'stream';

	declare export interface SyncOptions {

/**
 * remove files that copied on past before copy.
 */
clean?: boolean,

/**
 * Follow symbolic links when copying from them.
 */
dereference?: boolean,

/**
 * Copy empty directories which is matched with the glob.
 */
includeEmptyDirs?: boolean,

/**
 * Preserve UID, GID, ATIME, and MTIME of files.
 */
preserve?: boolean,

/**
 * Do not overwrite files on destination if the source file is older.
 */
update?: boolean
} 
	declare export type AsyncOptions = {

/**
 * Function that creates a `stream.Transform` object to transform each copying file.
 */
transform(filepath: string): stream.Transform[]
} & SyncOptions

	declare export type WatchOptions = {

/**
 * Flag to not copy at the initial time of watch.
 */
initialCopy?: boolean
} & AsyncOptions & SyncOptions

	declare export class Watcher mixins NodeJS.EventEmitter {
constructor(options: WatchOptions): this;
open(): void;
close(): void
}
	declare export function copy(
source: string,
dest: string,
options?: AsyncOptions,
callback?: (error: Error | null) => void): void

	declare export function copy(source: string, dest: string, callback?: (error: Error | null) => void): void

	declare export function copySync(source: string, dest: string, options?: SyncOptions): void

	declare export function watch(source: string, dest: string, options?: WatchOptions): Watcher

    }
