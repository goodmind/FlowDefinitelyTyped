declare module 'jest-docblock' {
        
/**
 * extract the "first" docblock from code, return empty string if not found.
 */
declare export function extract(code: string): string

	
/**
 * parse @pragma from docblock.
 */
declare export function parse(docblock: string): {
[pragma: string]: string
}

    }
