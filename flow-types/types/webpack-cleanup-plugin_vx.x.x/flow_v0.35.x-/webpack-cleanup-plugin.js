declare module 'webpack-cleanup-plugin' {
        import type {
          Plugin
        } from 'webpack';

	declare module.exports: typeof WebpackCleanupPlugin

	declare class WebpackCleanupPlugin mixins Plugin {
constructor(options?: WebpackCleanupPlugin$WebpackCleanupPlugin$Options): this
}
	declare interface WebpackCleanupPlugin$Options {

/**
 * Keep some files in the output path. It accepts globbing as in [minimatch](https://github.com/isaacs/minimatch).
 */
exclude?: string[],

/**
 * Print the list of the files that will be deleted without actually deleting them.
 */
preview?: boolean,

/**
 * Mute the console output.
 */
quiet?: boolean
} 
    }
