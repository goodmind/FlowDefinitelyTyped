declare module 'junk' {
        
/**
 * Returns `true` if `filename` matches a junk file.
 */
declare export function is(filename: string): boolean

	
/**
 * Returns `true` if `filename` doesn't match a junk file.
 */
declare export function not(filename: string): boolean

	
/**
 * Regex used for matching.
 */
declare export var regex: RegExp;
    }
