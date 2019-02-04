declare module 'float-regex' {
        
/**
 * regular expression for real floating point values in javascript notation:
 * ```
 *  * /[-+]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/
 *  * ```
 * 
 * does not match:
 * * +/- Infinity
 * * NaN
 */
declare var regexp: RegExp;
	declare module.exports: typeof regexp

    }
