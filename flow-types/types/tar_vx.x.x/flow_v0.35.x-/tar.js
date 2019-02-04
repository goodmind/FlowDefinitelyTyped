declare module 'tar' {
        declare export interface HeaderProperties {
path?: string,
mode?: number,
noProprietary?: boolean,
uid?: number,
gid?: number,
size?: number,
mtime?: number,
uname?: string,
gname?: string,
devmaj?: number,
devmin?: number
} 
	declare export interface ExtractOptions {
type?: string,
Directory?: boolean,
path?: string,
strip?: number,

/**
 * A function that will get called with (message, data)
 * for any warnings encountered.
 */
onwarn(message: string, data: Buffer): void,

/**
 * Treat warnings as crash-worthy errors. Default false.
 */
strict?: boolean,

/**
 * Extract files relative to the specified directory. Defaults to
 * process.cwd(). If provided, this must exist and must be a directory.
 */
cwd?: string,

/**
 * Alias for cwd.
 */
C?: string,

/**
 * A function that gets called with (path, stat) for each entry being
 * added. Return true to emit the entry from the archive, or false to skip it.
 */
filter(path: string, stat: FileStat): boolean,

/**
 * Set to true to keep the existing file on disk if it's newer than
 * the file in the archive.
 */
newer?: boolean,

/**
 * Alias for newer.
 */
"keep-newer"?: boolean,

/**
 * Alias for newer.
 */
"keep-newer-files"?: boolean,

/**
 * Do not overwrite existing files. In particular, if a file appears more
 * than once in an archive, later copies will not overwrite earlier copies
 */
keep?: boolean,

/**
 * Alias for keep.
 */
k?: boolean,

/**
 * Alias for keep.
 */
"keep-existing"?: boolean,

/**
 * Unlink files before creating them. Without this option, tar overwrites
 * existing files, which preserves existing hardlinks. With this option,
 * existing hardlinks will be broken, as will any symlink that would
 * affect the location of an extracted file.
 */
unlink?: boolean,

/**
 * Remove the specified number of leading path elements. Pathnames with
 * fewer elements will be silently skipped. Note that the pathname
 * is edited after applying the filter, but before security checks.
 */
strip?: number,

/**
 * Alias for strip.
 */
"strip-components"?: number,

/**
 * Alias for strip.
 */
stripComponents?: number,

/**
 * If true, tar will set the uid and gid of extracted entries to the uid
 * and gid fields in the archive. This defaults to true when run as root,
 * and false otherwise. If false, then files and directories will be set
 * with the owner and group of the user running the process. This is
 * similar to -p in tar(1), but ACLs and other system-specific data is
 * never unpacked in this implementation, and modes
 * are set by default already.
 */
preserveOwner?: boolean,

/**
 * Alias for preserveOwner.
 */
p?: boolean,

/**
 * Set to a number to force ownership of all extracted files and folders,
 * and all implicitly created directories, to be owned by the specified
 * user id, regardless of the uid field in the archive. Cannot be used
 * along with preserveOwner. Requires also setting a gid option.
 */
uid?: number,

/**
 * Set to a number to force ownership of all extracted files and folders,
 * and all implicitly created directories, to be owned by the specified
 * group id, regardless of the gid field in the archive. Cannot be used
 * along with preserveOwner. Requires also setting a uid option
 */
gui?: number
} 
	declare export type ParseStream = {
position: number,
_stream: stream.Stream,
_ended: boolean,
_streamEnd(): void,
_process(c: Buffer): void,
_startEntry(c: Buffer): void
} & NodeJS.ReadWriteStream

	declare export type PackStream = {
writable: boolean,
readable: boolean,
_noProprietary: boolean,
_global: HeaderProperties,
_buffer: stream.Stream[],
_currentEntry: any,
_processing: boolean,
_pipeRoot: stream.Stream,
_needDrain: boolean,
_paused: boolean,
addGlobal(props: HeaderProperties): void,
add(stream: stream.Stream): boolean,
destroy(): void,
_process(): void
} & NodeJS.ReadWriteStream

	declare export interface Fields {
path: number,
mode: number,
uid: number,
gid: number,
size: number,
mtime: number,
cksum: number,
type: number,
linkpath: number,
ustar: number,
ustarvar: number,
uname: number,
gname: number,
devmaj: number,
devmin: number,
prefix: number,
fill: number
} 
	declare export type fields = Fields;
	declare export var fieldSize: number[];
	declare export var fieldOffs: number[];
	declare export var fieldEnds: number[];
	
/**
 * Different values of the 'type' field
 * paths match the values of Stats.isX() functions, where appropriate
 */
declare export var types: {
0: string,
"\u0000": string,
"": string,
1: string,
2: string,
3: string,
4: string,
5: string,
6: string,
7: string,
g: string,
x: string,
A: string,
D: string,
I: string,
K: string,
L: string,
M: string,
N: string,
S: string,
V: string,
X: string,
File: string,
OldFile: string,
Link: string,
SymbolicLick: string,
CharacterDevice: string,
BlockDevice: string,
Directory: string,
FIFO: string,
ContiguousFile: string,
GlobalExtendedHeader: string,
ExtendedHeader: string,
SolarisACL: string,
GNUDumpDir: string,
INode: string,
NextFileHasLonLinkPath: string,
NextFileHasLongPath: string,
ContinuationFile: string,
TapeVolumeHeader: string,
OldExtendedHeader: string
};
	
/**
 * Values for the mode field
 */
declare export var modes: {
suid: number,
sgid: number,
svtx: number,
uread: number,
uwrite: number,
uexec: number,
gread: number,
gwrite: number,
gexec: number,
oread: number,
owrite: number,
oexec: number
};
	declare export var numeric: {
mode: boolean,
uid: boolean,
gid: boolean,
size: boolean,
mtime: boolean,
devmaj: boolean,
devmin: boolean,
cksum: boolean,
atime: boolean,
ctime: boolean,
dev: boolean,
ino: boolean,
nlink: boolean
};
	declare export var knownExtended: {
atime: boolean,
charset: boolean,
comment: boolean,
ctime: boolean,
gid: boolean,
gname: boolean,
linkpat: boolean,
mtime: boolean,
path: boolean,
realtime: boolean,
security: boolean,
size: boolean,
uid: boolean,
uname: boolean
};
	declare export var headerSize: number;
	declare export var blockSize: number;
	
/**
 * Returns a writable stream. Write tar data to it and it will emit entry events for each entry parsed from the tarball. This is used by tar.Extract.
 */
declare export function Parse(): ParseStream

	
/**
 * Returns a through stream. Use fstream to write files into the pack stream and you will receive tar archive data from the pack stream.
 * This only works with directories, it does not work with individual files.
 * The optional properties object are used to set properties in the tar 'Global Extended Header'.
 */
declare export function Pack(props?: HeaderProperties): PackStream

	
/**
 * Returns a through stream. Write tar data to the stream and the files in the tarball will be extracted onto the filesystem.
 * options can be:
 * ```
 *  * {
 *  *   path: '/path/to/extract/tar/into',
 *  *   strip: 0, // how many path segments to strip from the root when extracting
 *  * }
 *  * ```
 * options also get passed to the fstream.Writer instance that tar uses internally.
 */
declare export function Extract(opts: ExtractOptions | string): ParseStream

	declare export type FileStat = {
header: HeaderProperties,
startBlockSize: number,
blockRemain: number,
remain: number,
meta: boolean,
ignore: boolean,
size: number
} & stream.Readable & Fields

	declare export interface CreateOptions {

/**
 * A function that will get called with (message, data)
 * for any warnings encountered.
 */
onwarn(message: string, data: Buffer): void,

/**
 * Treat warnings as crash-worthy errors. Default false.
 */
strict?: boolean,

/**
 * The current working directory for creating the archive. Defaults to process.cwd().
 */
cwd?: string,

/**
 * Alias for cwd.
 */
C?: string,

/**
 * Set to any truthy value to create a gzipped archive,
 * or an object with settings for zlib.Gzip()
 */
gzip?: boolean | zlib.ZlibOptions,

/**
 * Alias for gzip.
 */
z?: boolean | zlib.ZlibOptions,

/**
 * A function that gets called with (path, stat) for each entry being
 * added. Return true to add the entry to the archive, or false to omit it.
 */
filter(path: string, stat: FileStat): boolean,

/**
 * Omit metadata that is system-specific: ctime, atime, uid, gid, uname,
 * gname, dev, ino, and nlink. Note that mtime is still included,
 * because this is necessary other time-based operations.
 */
portable?: boolean,

/**
 * Allow absolute paths. By default, / is stripped from absolute paths.
 */
preservePaths?: boolean,

/**
 * Alias for presevePaths.
 */
P?: boolean,

/**
 * The mode to set on the created file archive.
 */
mode?: number,

/**
 * Do not recursively archive the contents of directories.
 */
noDirRecurse?: boolean,

/**
 * Set to true to pack the targets of symbolic links. Without this
 * option, symbolic links are archived as such.
 */
follow?: boolean,

/**
 * Alias for follow.
 */
L?: boolean,

/**
 * Alias for follow.
 */
h?: boolean,

/**
 * uppress pax extended headers. Note that this means that long paths and
 * linkpaths will be truncated, and large or negative numeric values
 * may be interpreted incorrectly.
 */
noPax?: boolean
} 
	declare export interface ListOptions {

/**
 * Treat warnings as crash-worthy errors. Default false.
 */
strict?: boolean,

/**
 * Extract files relative to the specified directory. Defaults to
 * process.cwd(). If provided, this must exist and must be a directory.
 */
cwd?: string,

/**
 * Alias for cwd.
 */
C?: string,

/**
 * A function that gets called with (path, stat) for each entry being
 * added. Return true to emit the entry from the archive, or false to skip it.
 */
filter(path: string, entry: FileStat): boolean,

/**
 * A function that gets called with (entry) for each entry that passes the
 * filter. This is important for when both file and sync are set, because
 * it will be called synchronously.
 */
onentry(entry: FileStat): void,

/**
 * The maximum buffer size for fs.read() operations. Defaults to 16 MB.
 */
maxReadSize?: number,

/**
 * By default, entry streams are resumed immediately after the call to
 * onentry. Set noResume: true to suppress this behavior. Note that by
 * opting into this, the stream will never complete until the entry
 * data is consumed.
 */
noResume?: boolean
} 
	declare export interface ReplaceOptions {

/**
 * Required. Write the tarball archive to the specified filename.
 */
file: string,

/**
 * Act synchronously. If this is set, then any provided file will be
 * fully written after the call to tar.c.
 */
sync?: boolean,

/**
 * A function that will get called with (message, data)
 * for any warnings encountered.
 */
onwarn(message: string, data: Buffer): void,

/**
 * Treat warnings as crash-worthy errors. Default false.
 */
strict?: boolean,

/**
 * Extract files relative to the specified directory. Defaults to
 * process.cwd(). If provided, this must exist and must be a directory.
 */
cwd?: string,

/**
 * Alias for cwd.
 */
C?: string,

/**
 * A path portion to prefix onto the entries in the archive.
 */
prefix?: string,

/**
 * Set to any truthy value to create a gzipped archive,
 * or an object with settings for zlib.Gzip()
 */
gzip?: boolean | zlib.ZlibOptions,

/**
 * A function that gets called with (path, stat) for each entry being
 * added. Return true to emit the entry from the archive, or false to skip it.
 */
filter(path: string, stat: FileStat): boolean,

/**
 * Allow absolute paths. By default, / is stripped from absolute paths.
 */
preservePaths?: boolean,

/**
 * The maximum buffer size for fs.read() operations. Defaults to 16 MB.
 */
maxReadSize?: number,

/**
 * Do not recursively archive the contents of directories.
 */
noDirRecurse?: boolean,

/**
 * Set to true to pack the targets of symbolic links. Without this
 * option, symbolic links are archived as such.
 */
follow?: boolean,

/**
 * Alias for follow.
 */
L?: boolean,

/**
 * Alias for follow.
 */
h?: boolean,

/**
 * uppress pax extended headers. Note that this means that long paths and
 * linkpaths will be truncated, and large or negative numeric values
 * may be interpreted incorrectly.
 */
noPax?: boolean
} 
	declare export interface FileOptions {

/**
 * Uses the given file as the input or output of this function.
 */
file?: string,

/**
 * Alias for file.
 */
f?: string
} 
	
/**
 * Create a tarball archive. The fileList is an array of paths to add to the
 * tarball. Adding a directory also adds its children recursively. An entry in
 * fileList that starts with an @ symbol is a tar archive whose entries will
 * be added. To add a file that starts with @, prepend it with `./`.
 * 
 * Archive data may be read from the returned stream.
 */
declare export function create(
options: CreateOptions,
fileList: $ReadOnlyArray<string>,
callback?: (err?: Error) => void): stream.Readable

	
/**
 * Create a tarball archive. The fileList is an array of paths to add to the
 * tarball. Adding a directory also adds its children recursively. An entry in
 * fileList that starts with an @ symbol is a tar archive whose entries will
 * be added. To add a file that starts with @, prepend it with `./`.
 */
declare export function create(
options: CreateOptions & FileOptions,
fileList: $ReadOnlyArray<string>): Promise<void>

	declare export function create(
options: CreateOptions & FileOptions & {
sync: true
},
fileList: $ReadOnlyArray<string>): void

	declare export function create(
options: CreateOptions & FileOptions,
fileList: $ReadOnlyArray<string>,
callback: (err?: Error) => void): void

	
/**
 * Alias for create
 */
declare export var c: typeof create;
	
/**
 * Extract a tarball archive. The fileList is an array of paths to extract
 * from the tarball. If no paths are provided, then all the entries are
 * extracted. If the archive is gzipped, then tar will detect this and unzip
 * it. Note that all directories that are created will be forced to be
 * writable, readable, and listable by their owner, to avoid cases where a
 * directory prevents extraction of child entries by virtue of its mode. Most
 * extraction errors will cause a warn event to be emitted. If the cwd is
 * missing, or not a directory, then the extraction will fail completely.
 * 
 * Archive data should be written to the returned stream.
 */
declare export function extract(
options: ExtractOptions,
fileList?: $ReadOnlyArray<string>,
callback?: (err?: Error) => void): stream.Writable

	
/**
 * Extract a tarball archive. The fileList is an array of paths to extract
 * from the tarball. If no paths are provided, then all the entries are
 * extracted. If the archive is gzipped, then tar will detect this and unzip
 * it. Note that all directories that are created will be forced to be
 * writable, readable, and listable by their owner, to avoid cases where a
 * directory prevents extraction of child entries by virtue of its mode. Most
 * extraction errors will cause a warn event to be emitted. If the cwd is
 * missing, or not a directory, then the extraction will fail completely.
 */
declare export function extract(
options: ExtractOptions & FileOptions,
fileList?: $ReadOnlyArray<string>): Promise<void>

	declare export function extract(
options: ExtractOptions & FileOptions & {
sync: true
},
fileList?: $ReadOnlyArray<string>): void

	declare export function extract(
options: ExtractOptions & FileOptions,
fileList: $ReadOnlyArray<string> | void,
callback: (err?: Error) => void): void

	
/**
 * Alias for extract
 */
declare export var x: typeof extract;
	
/**
 * List the contents of a tarball archive. The fileList is an array of paths
 * to list from the tarball. If no paths are provided, then all the entries
 * are listed. If the archive is gzipped, then tar will detect this and unzip
 * it.
 * 
 * Archive data should be written to the returned stream.
 */
declare export function list(
options?: ListOptions,
fileList?: $ReadOnlyArray<string>,
callback?: (err?: Error) => void): stream.Writable

	
/**
 * List the contents of a tarball archive. The fileList is an array of paths
 * to list from the tarball. If no paths are provided, then all the entries
 * are listed. If the archive is gzipped, then tar will detect this and unzip
 * it.
 */
declare export function list(
options: ListOptions & FileOptions,
fileList?: $ReadOnlyArray<string>): Promise<void>

	declare export function list(
options: ListOptions & FileOptions & {
sync: true
},
fileList?: $ReadOnlyArray<string>): void

	
/**
 * Alias for list
 */
declare export var t: typeof list;
	
/**
 * Add files to an existing archive. Because later entries override earlier
 * entries, this effectively replaces any existing entries. The fileList is an
 * array of paths to add to the tarball. Adding a directory also adds its
 * children recursively. An entry in fileList that starts with an @ symbol is
 * a tar archive whose entries will be added. To add a file that
 * starts with @, prepend it with ./.
 */
declare export function replace(options: ReplaceOptions, fileList?: $ReadOnlyArray<string>): Promise<void>

	declare export function replace(
options: ReplaceOptions,
fileList: $ReadOnlyArray<string> | void,
callback: (err?: Error) => void): Promise<void>

	
/**
 * Alias for replace
 */
declare export var r: typeof replace;
	
/**
 * Add files to an archive if they are newer than the entry already in the
 * tarball archive. The fileList is an array of paths to add to the tarball.
 * Adding a directory also adds its children recursively. An entry in fileList
 * that starts with an @ symbol is a tar archive whose entries will be added.
 * To add a file that starts with @, prepend it with ./.
 */
declare export function update(options: ReplaceOptions, fileList?: $ReadOnlyArray<string>): Promise<void>

	declare export function update(
options: ReplaceOptions,
fileList: $ReadOnlyArray<string> | void,
callback: (err?: Error) => void): Promise<void>

	
/**
 * Alias for update
 */
declare export var u: typeof update;
    }
