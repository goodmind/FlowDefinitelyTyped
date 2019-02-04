declare module 'quoted-printable' {
        
/**
 * A string representing the semantic version number.
 */
declare export var version: string;
	
/**
 * This function takes an encoded byte string (the input
 * parameter) and Quoted-Printable-encodes it. Each item
 * in the input string represents an octet as per the
 * desired character encoding.
 */
declare export function encode(input: string): string

	
/**
 * This function takes a string of text (the text parameter)
 * and Quoted-Printable-decodes it. The return value is a
 * ‘byte string’, i.e. a string of which each item represents
 * an octet as per the character encoding that’s being used.
 */
declare export function decode(input: string): string

    }
