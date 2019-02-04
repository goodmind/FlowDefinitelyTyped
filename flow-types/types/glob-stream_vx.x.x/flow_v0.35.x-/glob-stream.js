declare module 'glob-stream' {
        declare function GlobStream(glob: string | string[]): NodeJS.ReadableStream

	declare function GlobStream(
glob: string | string[],
options: GlobStream$GlobStream$Options): NodeJS.ReadableStream

	declare export interface GlobStream$Entry {
cwd: string,
base: string,
path: string
} 

declare export type GlobStream$UniqueByStringPredicate = "cwd" | "base" | "path";

declare export type GlobStream$UniqueByFunctionPredicate = (entry: GlobStream$Entry) => string;

declare export type GlobStream$Options = {

/**
 * Whether or not to error upon an empty singular glob.
 */
allowEmpty?: boolean,

/**
 * The absolute segment of the glob path that isn't a glob. This value is attached
 * to each globobject and is useful for relative pathing.
 */
base?: string,

/**
 * Whether or not the `cwd` and `base` should be the same.
 */
cwdbase?: boolean,

/**
 * Filters stream to remove duplicates based on the string property name or the result of function.
 * When using a function, the function receives the streamed
 * data (objects containing `cwd`, `base`, `path` properties) to compare against.
 */
uniqueBy?: GlobStream$UniqueByStringPredicate | GlobStream$UniqueByFunctionPredicate
} & glob.IOptions

	declare module.exports: typeof GlobStream

    }
