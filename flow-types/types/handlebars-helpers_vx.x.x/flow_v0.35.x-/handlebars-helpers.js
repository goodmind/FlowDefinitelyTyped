declare module 'handlebars-helpers' {
        import typeof * as Handlebars from 'handlebars';

	declare function helpers(
groups?: helpers$helpers$Options | string | string[],
options?: helpers$helpers$Options): {
[name: string]: Handlebars.HelperDelegate
}

	declare interface Utils {

/**
 * Returns true if the given value contains the given
 * `object`, optionally passing a starting index.
 */
contains<T>(val: T[], obj: T, start: number): boolean,

/**
 * Remove leading and trailing whitespace and non-word
 * characters from the given string.
 */
chop(str: string): string,

/**
 * Change casing on the given `string`, optionally
 * passing a delimiter to use between words in the
 * returned string.
 * 
 * ```handlebars
 *      * utils.changecase('fooBarBaz');
 *      * //=> 'foo bar baz'
 *      *
 *      * utils.changecase('fooBarBaz' '-');
 *      * //=> 'foo-bar-baz'
 *      * ```
 */
changecase(str: string, fn: (str: string) => string): string
} 
	
      declare var npm$namespace$helpers: {
        
        utils: typeof helpers$utils,
      }
declare interface helpers$Options {
handlebars?: typeof Handlebars,
hbs?: typeof Handlebars
} 

declare var helpers$utils: Utils;
	declare module.exports: typeof helpers

    }
