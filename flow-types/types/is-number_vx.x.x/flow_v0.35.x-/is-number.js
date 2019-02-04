declare module 'is-number' {
        declare module.exports: typeof is_number

	
/**
 * Will test to see if the argument is a valid number, excluding Infinity and NaN.
 * @param num Any value that should be tested for being a number
 * @returns true if the parameter is a valid number, otherwise false
 */
declare function is_number(num: any): boolean

    }
