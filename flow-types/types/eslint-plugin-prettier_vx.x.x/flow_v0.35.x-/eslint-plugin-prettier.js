declare module 'eslint-plugin-prettier' {
        
/**
 * Converts invisible characters to a commonly recognizable visible form.
 * @param str The string with invisibles to convert.
 */
declare export function showInvisibles(str: string): string

	
/**
 * Generate results for differences between source code and formatted version.
 * @param source The original source.
 * @param formatted The formatted source.
 */
declare export function generateDifferences(source: string, formatted: string): Difference[]

	declare export interface Difference {
operation: "insert" | "delete" | "replace",
offset: number,
insertText?: string,
deleteText?: string
} 
	declare export var rules: any;
    }
