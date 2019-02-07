declare module "pvutils" {
  declare module.exports: typeof PvUtils;

  declare var npm$namespace$PvUtils: {
    getUTCDate: typeof PvUtils$getUTCDate,
    getParametersValue: typeof PvUtils$getParametersValue,
    bufferToHexCodes: typeof PvUtils$bufferToHexCodes,
    checkBufferParams: typeof PvUtils$checkBufferParams,
    utilFromBase: typeof PvUtils$utilFromBase,
    utilToBase: typeof PvUtils$utilToBase,
    utilConcatBuf: typeof PvUtils$utilConcatBuf,
    utilDecodeTC: typeof PvUtils$utilDecodeTC,
    utilEncodeTC: typeof PvUtils$utilEncodeTC,
    isEqualBuffer: typeof PvUtils$isEqualBuffer,
    padNumber: typeof PvUtils$padNumber,
    toBase64: typeof PvUtils$toBase64,
    fromBase64: typeof PvUtils$fromBase64,
    arrayBufferToString: typeof PvUtils$arrayBufferToString,
    stringToArrayBuffer: typeof PvUtils$stringToArrayBuffer,
    nearestPowerOf2: typeof PvUtils$nearestPowerOf2
  };

  /**
   * Making UTC date from local date
   * @param {Date} date Date to convert from
   * @returns {Date}
   */
  declare function PvUtils$getUTCDate(date: Date): Date;

  /**
   * Get value for input parameters, or set a default value
   * @param {Object} parameters
   * @param {string} name
   * @param defaultValue
   */
  declare function PvUtils$getParametersValue<T>(
    parameters: any,
    name: string,
    defaultValue?: T
  ): T;

  /**
   * Converts "ArrayBuffer" into a hexdecimal string
   * @param {ArrayBuffer} inputBuffer
   * @param {number} inputOffset
   * @param {number} inputLength
   * @returns {string}
   */
  declare function PvUtils$bufferToHexCodes(
    inputBuffer: ArrayBuffer,
    inputOffset?: number,
    inputLength?: number
  ): string;

  /**
   * Check input "ArrayBuffer" for common functions
   * @param {LocalBaseBlock} baseBlock
   * @param {ArrayBuffer} inputBuffer
   * @param {number} inputOffset
   * @param {number} inputLength
   * @returns {boolean}
   */
  declare function PvUtils$checkBufferParams(
    baseBlock: any,
    inputBuffer: ArrayBuffer,
    inputOffset: number,
    inputLength: number
  ): boolean;

  /**
   * Convert number from 2^base to 2^10
   * @param {Uint8Array} inputBuffer
   * @param {number} inputBase
   * @returns {number}
   */
  declare function PvUtils$utilFromBase(
    inputBuffer: Uint8Array,
    inputBase: number
  ): number;

  /**
   * Convert number from 2^10 to 2^base
   * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} value The number to convert
   * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} base The base for 2^base
   * @param {number} reserved Pre-defined number of bytes in output array (-1 = limited by function itself)
   * @returns {ArrayBuffer}
   */
  declare function PvUtils$utilToBase(
    value: number,
    base: number,
    reserved?: number
  ): ArrayBuffer;

  /**
   * Concatenate two ArrayBuffers
   * @param {"NO PRINT IMPLEMENTED: JSDocVariadicType"} buffers First ArrayBuffer (first part of concatenated array)
   * @returns {ArrayBuffer}
   */
  declare function PvUtils$utilConcatBuf(...buf: ArrayBuffer[]): ArrayBuffer;

  /**
   * Decoding of "two complement" values
   * The function must be called in scope of instance of "hexBlock" class ("valueHex" and "warnings" properties must be present)
   * @returns {number}
   */
  declare function PvUtils$utilDecodeTC(): number;

  /**
   * Encode integer value to "two complement" format
   * @param {number} value Value to encode
   * @returns {ArrayBuffer}
   */
  declare function PvUtils$utilEncodeTC(value: number): ArrayBuffer;

  /**
   * Compare two array buffers
   * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} inputBuffer1
   * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} inputBuffer2
   * @returns {boolean}
   */
  declare function PvUtils$isEqualBuffer(
    inputBuffer1: ArrayBuffer,
    inputBuffer2: ArrayBuffer
  ): boolean;

  /**
   * Pad input number with leade "0" if needed
   * @param {number} inputNumber
   * @param {number} fullLength
   * @returns {string}
   */
  declare function PvUtils$padNumber(
    inputNumber: number,
    fullLength: number
  ): string;

  /**
   * Encode string into BASE64 (or "base64url")
   * @param {string} input
   * @param {boolean} useUrlTemplate useUrlTemplate If "true" then output would be encoded using "base64url"
   * @param {boolean} skipPadding skipPadding Skip BASE-64 padding or not
   * @returns {string}
   */
  declare function PvUtils$toBase64(
    input: string,
    useUrlTemplate?: boolean,
    skipPadding?: boolean
  ): string;

  /**
   * Decode string from BASE64 (or "base64url")
   * @param {string} input
   * @param {boolean} useUrlTemplate If "true" then output would be encoded using "base64url"
   * @param {boolean} cutTailZeros If "true" then cut tailing zeroz from function result
   * @returns {string}
   */
  declare function PvUtils$fromBase64(
    input: string,
    useUrlTemplate?: boolean,
    cutTailZeros?: boolean
  ): string;

  declare function PvUtils$arrayBufferToString(buffer: BufferSource): string;

  declare function PvUtils$stringToArrayBuffer(str: string): ArrayBuffer;

  /**
   * Get nearest to input length power of 2
   * @param {number} length Current length of existing array
   * @returns {number}
   */
  declare function PvUtils$nearestPowerOf2(length: number): number;
}
