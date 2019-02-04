declare module 'keysym' {
        declare export interface Record {
keysym: number,
names: string[],
status: string,
unicode: number
} 
	
/**
 * Contains all associated keysyms, unicode characters, names, and their status
 */
declare export var records: Record[];
	
/**
 * Converts a keysym into an associated record describing all representations of the key
 * @param keysym - Keysym of the key
 * @returns - Associated record or undefined if one couldn't be found
 */
declare export function fromKeysym(keysym: number): Record | void

	
/**
 * Converts a key name into an associated record describing all representations of the key
 * @param name - Name of the key
 * @returns - Associated record or undefined if one couldn't be found
 */
declare export function fromName(name: string): Record | void

	
/**
 * Converts a unicode character or value into an array of all matching records describing all possible representations of the key
 * @param code - Unicode character or value
 * @returns - Associated records, will be empty if no matches were found
 * @throws Will throw an error if string is not one character
 */
declare export function fromUnicode(code: string | number): Record[]

    }
