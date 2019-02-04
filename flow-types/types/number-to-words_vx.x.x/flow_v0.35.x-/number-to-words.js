declare module 'number-to-words' {
        
/**
 * Converts an integer into a string with an ordinal postfix. If number is decimal, the decimals will be removed.
 */
declare export function toOrdinal(number: number): string

	
/**
 * Converts an integer into words. If number is decimal, the decimals will be removed.
 */
declare export function toWords(number: number): string

	
/**
 * Converts a number into ordinal words. If number is decimal, the decimals will be removed.
 */
declare export function toWordsOrdinal(number: number): string

    }
