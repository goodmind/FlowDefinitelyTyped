declare module 'webpack-chunk-hash' {
        import type {
          Plugin
        } from 'webpack';

	declare module.exports: typeof WebpackChunkHash

	declare class WebpackChunkHash mixins Plugin {
constructor(options?: WebpackChunkHash$WebpackChunkHash$Options): this
}
	declare interface WebpackChunkHash$Options {

/**
 * @default 'md5'
 * @description The hash algorithm to use
 * @see {@link https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options}
 */
algorithm?: string,

/**
 * @default 'hex'
 * @description The digest enconding to use
 * @see {@link https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options}
 */
digest?: "hex" | "latin1" | "base64",

/**
 * @default null
 * @description A callback to add more content to the resulting hash
 */
additionalHashContent(chunk: any): string
} 
    }
