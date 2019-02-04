declare module 'logrotate-stream' {
        
/**
 * Options object for the exported function.
 */
declare export interface logrotateStream$Options {

/**
 * The file log file to write data to.
 */
file: string,

/**
 * The max file size of a log before rotation occurs. Supports 1024, 1k, 1m, 1g
 */
size: string,

/**
 * The number of rotated log files to keep (including the primary log file). Additional logs are deleted no rotation.
 */
keep: number,

/**
 * Optionally compress rotated files with gzip.
 */
compress?: boolean
} 
	
/**
 * Create a rotating log stream.
 * @returns a writable stream to a rotating log file
 */
declare function logrotateStream(opts: logrotateStream$logrotateStream$Options): stream.Writable

	declare module.exports: typeof logrotateStream

    }
