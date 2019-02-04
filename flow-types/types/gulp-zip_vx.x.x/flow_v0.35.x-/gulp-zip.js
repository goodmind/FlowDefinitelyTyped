declare module 'gulp-zip' {
        declare interface GulpZip$GulpZipOptions {

/**
 * Compress
 * @default true
 */
compress?: boolean
} 
	declare function GulpZip(filename: string, options?: GulpZip$GulpZip$GulpZipOptions): NodeJS.ReadStream

	declare module.exports: typeof GulpZip

    }
