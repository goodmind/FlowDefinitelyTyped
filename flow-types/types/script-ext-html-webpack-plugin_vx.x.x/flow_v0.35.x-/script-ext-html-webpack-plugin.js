declare module 'script-ext-html-webpack-plugin' {
        import type {
          Plugin
        } from 'webpack';

	declare module.exports: typeof ScriptExtHtmlWebpackPlugin

	declare class ScriptExtHtmlWebpackPlugin mixins Plugin {
constructor(options?: ScriptExtHtmlWebpackPlugin$ScriptExtHtmlWebpackPlugin$Options): this
}
	declare type ScriptMatchingPatternBase = string | RegExp | $ReadOnlyArray<string | RegExp>;
	declare interface ScriptMatchingPatternHash {
test: ScriptMatchingPatternBase
} 
	declare type ScriptMatchingPattern = ScriptMatchingPatternBase | ScriptMatchingPatternHash;
	declare type ScriptMatchingPatternPre = ScriptMatchingPatternBase | ScriptMatchingPatternHash & {
chunks?: "initial" | "async" | "all"
};
	declare interface Custom {
test: ScriptMatchingPattern,
attribute: string,
value?: string
} 
	declare interface ScriptExtHtmlWebpackPlugin$Options {

/**
 * scripts that should be inlined in the html (default: `[]`)
 */
inline?: ScriptMatchingPattern,

/**
 * script names that should have no attribute (default: `[]`)
 */
sync?: ScriptMatchingPattern,

/**
 * script names that should have an async attribute (default: `[]`)
 */
async?: ScriptMatchingPattern,

/**
 * script names that should have a defer attribute (default: `[]`)
 */
defer?: ScriptMatchingPattern,

/**
 * the default attribute to set - 'sync' actually results in no attribute (default: 'sync')
 */
defaultAttribute?: "sync" | "async" | "defer",

/**
 * script names that should have a type="module" attribute (default: `[]`)
 */
module?: ScriptMatchingPattern,

/**
 * scripts that should have accompanying preload resource hints (default: `[]`)
 */
preload?: ScriptMatchingPatternPre,

/**
 * scripts that should have accompanying prefetch resource hints (default: `[]`)
 */
prefetch?: ScriptMatchingPatternPre,

/**
 * scripts that should have a custom attribute(s) added, the attribute(s), and the value(s)
 */
custom?: Custom | Custom[]
} 
    }
