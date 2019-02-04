declare module 'gulp-ruby-sass' {
        
/**
 * The interface includes all options that available for sass executable.
 * Options are converted from dashed to camelCase
 * @interface SassOptions
 */
declare interface SassOptions {
loadPath?: string | string[],
require?: string,
compass?: boolean,
style?: string,
force?: boolean,
stopOnError?: boolean,
scss?: boolean,
defaultEncoding?: string,
unixNewlines?: boolean,
debugInfo?: boolean,
lineNumbers?: boolean,
lineComments?: boolean,
check?: boolean,
precision?: number,
cacheLocation?: string,
noCache?: boolean,
trace?: boolean,
quiet?: boolean,
sourcemap?: any,
watch?: string,
update?: string,
stdin?: boolean,
interactive?: boolean
} 
	
/**
 * The interface includes the node-ruby-sass only options.
 * Attention: sourcemap option type differs from the same SassOption's type.
 * @interface Options
 * @extends
 */
declare type Options = {
verbose?: boolean,
bundleExec?: boolean,
sourcemap?: boolean,
container?: string
} & SassOptions

	
/**
 * Object to be exported
 * @param {string} source - Filename or directory
 * @param {Options} options - Additional processing rules/options
 */
declare function sass(source: string, options?: Options): NodeJS.ReadableStream

	
	declare module.exports: typeof sass

    }
