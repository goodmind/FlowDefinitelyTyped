declare module 'gulp-copy' {
        
/**
 * Copy files to destination and expose those files as source streams for the gulp pipeline.
 * @param outDirectory The name of the destination directory. If this directory
does not exist, it will be created atomatically.
 */
declare function gulpCopy(outDirectory: string): through.ThroughStream

	
/**
 * Copy files to destination and expose those files as source streams for the gulp pipeline.
 * @param outDirectory The name of the destination directory. If this directory
does not exist, it will be created atomatically.
 * @param options Override values for available settings.
 */
declare function gulpCopy(
outDirectory: string,
options: gulpCopy$gulpCopy$GulpCopyOptions): through.ThroughStream

	declare export interface gulpCopy$GulpCopyOptions {

/**
 * Specifies the number of parts of the path to be ignored as path prefixes.
 */
prefix: number
} 
	declare module.exports: typeof gulpCopy

    }
