declare module "uint32" {
  /**
   * Creates an uint32 from the given bytes in big endian order.
   * @param highByte the high byte
   * @param secondHighByte the 2nd high byte
   * @param thirdHighByte the 3rd high byte
   * @param lowByte the low byte
   * @returns highByte concat secondHighByte concat thirdHighByte concat lowByte
   */
  declare export function fromBytesBigEndian(
    highByte: number,
    secondHighByte: number,
    thirdHighByte: number,
    lowByte: number
  ): number;

  /**
   * Returns the byte.
   * e.g. when byteNo is 0, the high byte is returned, when byteNo = 3 the low byte is returned.
   * @param uint32value the source to be extracted
   * @param byteNo 0-3 the byte number, 0 is the high byte, 3 the low byte
   * @returns the 0-255 byte according byteNo
   */
  declare export function getByteBigEndian(
    uint32value: number,
    byteNo: number
  ): number;

  /**
   * Returns the bytes as array.
   * @param uint32value the source to be extracted
   * @returns the array [highByte, 2ndHighByte, 3rdHighByte, lowByte]
   */
  declare export function getBytesBigEndian(
    uint32value: number
  ): [number, number, number, number];

  /**
   * Converts a given uin32 to a hex string including leading zeros.
   * @param uint32value the uint32 to be stringified
   * @param optionalMinLength the optional (default 8)
   */
  declare export function toHex(
    uint32value: number,
    optionalMinLength?: number
  ): string;

  /**
   * Converts a number to an uint32.
   * @param number the number to be converted.
   * @returns an uint32 value
   */
  declare export function toUint32(number: number): number;

  /**
   * Returns the part above the uint32 border.
   * Depending to the javascript engine, that are the 54-32 = 22 high bits
   * @param number the number to extract the high part
   * @returns the high part of the number
   */
  declare export function highPart(number: number): number;

  /**
   * Returns a bitwise OR operation on two or more values.
   * @param uint32val0 first uint32 value
   * @param argv one or more uint32 values
   * @returns the bitwise OR uint32 value
   */
  declare export function or(uint32val0: number, ...argv: number[]): number;

  /**
   * Returns a bitwise AND operation on two or more values.
   * @param uint32val0 first uint32 value
   * @param argv one or more uint32 values
   * @returns the bitwise AND uint32 value
   */
  declare export function and(uint32val0: number, ...argv: number[]): number;

  /**
   * Returns a bitwise XOR operation on two or more values.
   * @param uint32val0 first uint32 value
   * @param argv one or more uint32 values
   * @returns the bitwise XOR uint32 value
   */
  declare export function xor(uint32val0: number, ...argv: number[]): number;

  declare export function not(uint32val: number): number;

  /**
   * Returns the uint32 representation of a << operation.
   * @param uint32val the word to be shifted
   * @param numBits the number of bits to be shifted (0-31)
   * @returns the uint32 value of the shifted word
   */
  declare export function shiftLeft(uint32val: number, numBits: number): number;

  /**
   * Returns the uint32 representation of a >>> operation.
   * @param uint32val the word to be shifted
   * @param numBits the number of bits to be shifted (0-31)
   * @returns the uint32 value of the shifted word
   */
  declare export function shiftRight(
    uint32val: number,
    numBits: number
  ): number;

  declare export function rotateLeft(
    uint32val: number,
    numBits: number
  ): number;

  declare export function rotateRight(
    uint32val: number,
    numBits: number
  ): number;

  /**
   * Bitwise choose bits from y or z, as a bitwise x ? y : z
   */
  declare export function choose(x: number, y: number, z: number): number;

  /**
   * Majority gate for three parameters. Takes bitwise the majority of x, y and z,
   * @see https://en.wikipedia.org/wiki/Majority_function
   */
  declare export function majority(x: number, y: number, z: number): number;

  /**
   * Adds the given values modulus 2^32.
   * @returns the sum of the given values modulus 2^32
   */
  declare export function addMod32(
    uint32val0: number,
    ...optionalValues: number[]
  ): number;

  /**
   * Returns the log base 2 of the given value. That is the number of the highest set bit.
   * @param uint32val the value, the log2 is calculated of
   * @returns the logarithm base 2, an integer between 0 and 31
   */
  declare export function log2(uint32val: number): number;

  /**
   * Returns the the low and the high uint32 of the multiplication.
   * @param factor1 an uint32
   * @param factor2 an uint32
   * @param resultUint32Array2 the Array, where the result will be written to
   */
  declare export function mult(
    factor1: number,
    factor2: number,
    resultUint32Array2: Uint32Array
  ): void;
}
