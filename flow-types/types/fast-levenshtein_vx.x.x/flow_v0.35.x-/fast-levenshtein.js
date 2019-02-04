declare module 'fast-levenshtein' {
        declare export interface LevenshteinOptions {
useCollator?: boolean
} 
	declare export function get(str1: string, str2: string, opts?: LevenshteinOptions): number

    }
