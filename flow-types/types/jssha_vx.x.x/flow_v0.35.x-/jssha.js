declare module 'jssha' {
        declare type jsSHA$StringDataFormat = "HEX" | "TEXT" | "B64" | "BYTES";

declare type jsSHA$ArrayBufferDataFormat = "ARRAYBUFFER";

declare interface jsSHA$EncodingOptions {
encoding?: string
} 

declare type jsSHA$Options = {
numRounds?: number
} & jsSHA$EncodingOptions


declare interface jsSHA$OutputFormatOptions {
outputUpper?: boolean,
b64Pad?: string,
shakeLen?: number
} 

declare interface jsSHA$jsSHA {

/**
 * Create a Hasher object.
 * @param variant - The desired SHA variant (SHA-1, SHA-224, SHA-256,
SHA-384, SHA-512, SHA3-224, SHA3-256, SHA3-384, SHA3-512, SHAKE128, or SHAKE256).
 * @param inputFormat The format of srcString.
 */
new (
variant: string,
inputFormat: jsSHA$StringDataFormat,
options?: jsSHA$Options): jsSHA$Hasher<string>,
new (
variant: string,
inputFormat: jsSHA$ArrayBufferDataFormat,
options?: jsSHA$Options): jsSHA$Hasher<ArrayBuffer>
} 

declare interface jsSHA$Hasher<InputT> {

/**
 * Sets the HMAC key for an eventual getHMAC call.  Must be called
 * immediately after jsSHA object instantiation
 * @param key - The key used to calculate the HMAC.
 * @param inputFormat - The format of key.
 */
setHMACKey(
key: string,
inputFormat: jsSHA$StringDataFormat,
encodingOpts?: jsSHA$EncodingOptions): void,
setHMACKey(
key: ArrayBuffer,
inputFormat: jsSHA$ArrayBufferDataFormat,
encodingOpts?: jsSHA$EncodingOptions): void,

/**
 * Takes strString and hashes as many blocks as possible.  Stores the
 * rest for either a future update or getHash call.
 * @param srcString - The string to be hashed
 */
update(srcString: InputT): void,

/**
 * Returns the desired SHA hash of the string specified at instantiation
 * using the specified parameters
 * @expose
 * @param format - The desired output formatting.
 * @returns The string representation of the hash
in the format specified.
 */
getHash(
format: jsSHA$StringDataFormat,
outputFormatOpts?: jsSHA$OutputFormatOptions): string,
getHash(
format: jsSHA$ArrayBufferDataFormat,
outputFormatOpts?: jsSHA$OutputFormatOptions): ArrayBuffer,

/**
 * Returns the the HMAC in the specified format using the key given by
 * a previous setHMACKey call.
 * @param format - The desired output formatting.
 * @returns The string representation of the hash in the format
specified
 */
getHMAC(
format: jsSHA$StringDataFormat,
outputFormatOpts?: jsSHA$OutputFormatOptions): string,
getHMAC(
format: jsSHA$ArrayBufferDataFormat,
outputFormatOpts?: jsSHA$OutputFormatOptions): ArrayBuffer
} 
	declare var jsSHA$jsSHA: jsSHA$jsSHA.jsSHA$jsSHA;
	declare module.exports: typeof jsSHA$jsSHA

    }
