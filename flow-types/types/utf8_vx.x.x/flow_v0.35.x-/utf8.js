declare module 'utf8' {
        
/**
 * A string representing the semantic version number.
 */
declare var version: string;
	
/**
 * Encodes any given JavaScript string (string) as UTF-8, and returns the UTF-8-encoded version of the string.
 * It throws an error if the input string contains a non-scalar value, i.e. a lone surrogate.
 * @param {string} inputString
 */
declare function encode(inputString: string): string

	
/**
 * Decodes any given UTF-8-encoded string (byteString) as UTF-8, and returns the UTF-8-decoded version of the string.
 * It throws an error when malformed UTF-8 is detected.
 * @param {string} byteString
 */
declare function decode(byteString: string): string

    }
