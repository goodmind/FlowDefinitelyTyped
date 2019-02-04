declare module 'gulp-clean-dest' {
        declare interface gulpCleanDest$Options {

/**
 * The working directory the folder is relative to.
 */
cwd?: string,

/**
 * Extension of the destination files. Useful if it differs from the original.
 */
extension?: string
} 
	
/**
 * Removes files from the dest directory prior to building.
 * @param destination The name of the dest directory
 * @param options Options for the cleaning process
 */
declare function gulpCleanDest(
destination: string,
options?: gulpCleanDest$gulpCleanDest$Options): NodeJS.ReadWriteStream

	declare module.exports: typeof gulpCleanDest

    }
