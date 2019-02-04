declare module 'urlsafe-base64' {
        
/**
 * Library version.
 */
declare export var version: string;
	
/**
 * .encode
 * 
 * return an encoded Buffer as URL Safe Base64
 * 
 * Note: This function encodes to the RFC 4648 Spec where '+' is encoded
 *        as '-' and '/' is encoded as '_'. The padding character '=' is
 *        removed.
 * @param {Buffer} buffer
 * @return {String}
 * @api public
 */
declare export function encode(buffer: Buffer): string

	
/**
 * .decode
 * 
 * return an decoded URL Safe Base64 as Buffer
 * @param {String}
 * @return {Buffer}
 * @api public
 */
declare export function decode(base64: string): Buffer

	
/**
 * .validate
 * 
 * Validates a string if it is URL Safe Base64 encoded.
 * @param {String}
 * @return {Boolean}
 * @api public
 */
declare export function validate(base64: string): boolean

    }
