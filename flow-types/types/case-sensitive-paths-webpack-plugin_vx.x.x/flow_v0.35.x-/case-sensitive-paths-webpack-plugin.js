declare module 'case-sensitive-paths-webpack-plugin' {
        import type {
          Plugin
        } from 'webpack';

	declare module.exports: typeof CaseSensitivePathsWebpackPlugin

	declare class CaseSensitivePathsWebpackPlugin mixins Plugin {
constructor(options?: CaseSensitivePathsWebpackPlugin$CaseSensitivePathsWebpackPlugin$Options): this
}
	declare interface CaseSensitivePathsWebpackPlugin$Options {

/**
 * Show more information
 */
debug?: boolean
} 
    }
