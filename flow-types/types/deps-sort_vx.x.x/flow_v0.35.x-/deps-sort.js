declare module 'deps-sort' {
        import typeof * as stream from 'stream';

	
/**
 * Return a new through stream that should get written module-deps objects and will output sorted objects.
 */
declare function depsSort(opts?: depsSort$depsSort$Options): stream.Transform

	
/**
 * module-deps constructor options
 */
declare interface depsSort$Options {

/**
 * When true, for each module-deps row, insert 'row.index' with the numeric index and
 * 'row.indexDeps' like 'row.deps' but mapping require strings to row indices
 */
index?: boolean,

/**
 * array of names or object mapping names to true not to mangle with integer indexes when 'index' is turned on.
 * If 'expose' maps names to strings, those strings will be used to resolve the indexed references.
 */
expose?: string[] | {
[name: string]: boolean | string
},

/**
 * Set 'row.dedupe' for files that match existing contents. Sets 'row.dedupeIndex' when 'index' is enabled.
 * When 'row.dedupe' is set, 'row.sameDeps' will be set to a boolean of whether the dependencies at the dedupe target match (true) or just the source content (false).
 */
dedupe?: boolean,
[prop: string]: any
} 


/**
 * Input objects are file objects in the module-deps shape. They must at least have these properties:
 */
declare interface depsSort$InputRow {

/**
 * a unique identifier for the file
 */
id: string,

/**
 * the file contents
 */
source: string,

/**
 * dependencies for this file, mapping strings as used in require() to row IDs
 */
deps: string[]
} 


/**
 * All the input properties, and:
 */
declare interface depsSort$OutputRow {

/**
 * when 'opts.index' is true, the sorted numeric index of the row
 */
index: number,

/**
 * like 'row.deps', but mapping to 'row.index' instead of 'row.id'
 */
indexDeps: {
[id: string]: number
},

/**
 * when 'opts.dedupe' is true, contains the row ID of a file with identical contents
 */
dedupe: string,

/**
 * like 'row.dedupe', but contains the 'row.index' instead of 'row.id'
 */
dedupeIndex: number
} 
	declare module.exports: typeof depsSort

    }
