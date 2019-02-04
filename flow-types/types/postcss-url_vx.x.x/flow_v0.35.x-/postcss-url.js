declare module 'postcss-url' {
        import type {
          Plugin
        } from 'postcss';

	declare type url$CustomTransformFunction = (
asset: {

/**
 * Original URL.
 */
url: string,

/**
 * URL pathname.
 */
pathname?: string,

/**
 * Absolute path to asset.
 */
absolutePath?: string,

/**
 * Current relative path to asset.
 */
relativePath?: string,

/**
 * Querystring from URL.
 */
search?: string,

/**
 * Hash from URL.
 */
hash?: string
},
dir: {

/**
 * PostCSS from option.
 */
from?: string,

/**
 * PostCSS to option.
 */
to?: string,

/**
 * File path.
 */
file?: string
}) => string;

declare type url$CustomHashFunction = (file: Buffer) => string;

declare type url$CustomFilterFunction = (file: string) => boolean;

declare interface url$Options {

/**
 * URL rewriting mechanism.
 * @default 'rebase'
 */
url?: "copy" | "inline" | "rebase" | url$CustomTransformFunction,

/**
 * Specify the maximum file size to inline (in kilobytes).
 */
maxSize?: number,

/**
 * Do not warn when an SVG URL with a fragment is inlined.
 * PostCSS-URL does not support partial inlining.
 * The entire SVG file will be inlined.
 * By default a warning will be issued when this occurs.
 * @default false
 */
ignoreFragmentWarning?: boolean,

/**
 * Determine wether a file should be inlined.
 */
filter?: RegExp | url$CustomFilterFunction | string,

/**
 * Specifies whether the URL's fragment identifer value, if present, will be added to the inlined data URI.
 * @default false
 */
includeUriFragment?: boolean,

/**
 * The fallback method to use if the maximum size is exceeded or the URL contains a hash.
 */
fallback?: url$CustomTransformFunction,

/**
 * Specify the base path or list of base paths where to search images from.
 */
basePath?: string | string[],

/**
 * The assets files will be copied in that destination.
 * @default false
 */
assetsPath?: boolean | string,

/**
 * Rename the path of the files by a hash name.
 * @default false
 */
useHash?: boolean,

/**
 * Hash options
 */
hashOptions?: {

/**
 * Hashing method or custom function.
 */
method?: "xxhash32" | "xxhash64" | url$CustomHashFunction,

/**
 * Shrink hast to certain length.
 */
shrink?: number,

/**
 * Append the original filename in resulting filename.
 */
append?: boolean
}
} 

declare type url$Url = Plugin<url$Options | url$Options[]>;
	declare var url: url$url$Url;
	declare module.exports: typeof url

    }
