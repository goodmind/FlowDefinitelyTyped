declare module 'jsonabc' {
        
/**
 * Sort the JSON (clean, parse, sort, stringify).
 * @param noArray Sort or don't sort arrays
 */
declare export function sort(inputStr: string, noArray?: boolean): string

	
/**
 * Sort the JSON (clean, parse, sort, stringify).
 * @param noArray Sort or don't sort arrays
 */
declare export function sortObj(input: {[key: string]: any}, noArray?: boolean): {[key: string]: any}

	
/**
 * Remove trailing commas
 */
declare export function cleanJSON(input: string): string

    }
