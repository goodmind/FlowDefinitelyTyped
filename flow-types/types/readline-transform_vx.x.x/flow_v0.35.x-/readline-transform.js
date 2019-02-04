declare module 'readline-transform' {
        import type {
          Transform,TransformOptions
        } from 'stream';

	declare type ReadlineTransform$Options = {

/**
 * line break matcher for str.split() (default: /\r?\n/)
 */
breakMatcher?: RegExp,

/**
 * if content ends with line break, ignore last empty line (default: true)
 */
ignoreEndOfBreak?: boolean,

/**
 * if line is empty string, skip it (default: false)
 */
skipEmpty?: boolean
} & TransformOptions

	declare class ReadlineTransform mixins Transform {
constructor(options?: ReadlineTransform$ReadlineTransform$Options): this
}
	declare module.exports: typeof ReadlineTransform

    }
