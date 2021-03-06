declare module "bignum" {
  declare export default typeof BigNum;

  declare class BigNum {
    /**
     * Create a new BigNum from n.
     */
    constructor(n: number | BigNum): this;

    /**
     * Create a new BigNum from n and a base.
     */
    constructor(n: string, base?: number): this;

    /**
     * Create a new BigNum from a Buffer.
     *
     * The default options are: {endian: 'big', size: 1}.
     */
    static fromBuffer(buffer: Buffer, options?: BigNum$BufferOptions): BigNum;

    /**
     * Generate a probable prime of length bits.
     *
     * If safe is true, it will be a "safe" prime of the form p=2p'+1 where p' is also prime.
     */
    static prime(bits: number, safe?: boolean): BigNum;

    /**
     * Return true if num is identified as a BigNum instance. Otherwise, return false.
     */
    static isBigNum(num: any): boolean;

    /**
     * Print out the BigNum instance in the requested base as a string. Default: base 10
     */
    toString(base?: number): string;

    /**
     * Turn a BigNum into a Number.
     *
     * If the BigNum is too big you'll lose precision or you'll get ±Infinity.
     */
    toNumber(): number;

    /**
     * Return a new Buffer with the data from the BigNum.
     *
     * The default options are: {endian: 'big', size: 1}.
     */
    toBuffer(options?: BigNum$BufferOptions): Buffer;

    /**
     * Return a new BigNum containing the instance value plus n.
     */
    add(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum containing the instance value minus n.
     */
    sub(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum containing the instance value multiplied by n.
     */
    mul(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum containing the instance value integrally divided by n.
     */
    div(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum with the absolute value of the instance.
     */
    abs(): BigNum;

    /**
     * Return a new BigNum with the negative of the instance value.
     */
    neg(): BigNum;

    /**
     * Compare the instance value to n.
     *
     * Return a positive integer if > n, a negative integer if < n, and 0 if == n.
     */
    cmp(n: BigNum$BigNumCompatible): number;

    /**
     * Return a boolean: whether the instance value is greater than n (> n).
     */
    gt(n: BigNum$BigNumCompatible): boolean;

    /**
     * Return a boolean: whether the instance value is greater than or equal to n (>= n).
     */
    ge(n: BigNum$BigNumCompatible): boolean;

    /**
     * Return a boolean: whether the instance value is equal to n (== n).
     */
    eq(n: BigNum$BigNumCompatible): boolean;

    /**
     * Return a boolean: whether the instance value is less than n (< n).
     */
    lt(n: BigNum$BigNumCompatible): boolean;

    /**
     * Return a boolean: whether the instance value is less than or equal to n (<= n).
     */
    le(n: BigNum$BigNumCompatible): boolean;

    /**
     * Return a new BigNum with the instance value bitwise AND (&)-ed with n.
     */
    and(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum with the instance value bitwise inclusive-OR (|)-ed with n.
     */
    or(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum with the instance value bitwise exclusive-OR (^)-ed with n.
     */
    xor(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum with the instance value modulo n.
     */
    mod(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum with the instance value raised to the nth power.
     */
    pow(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum with the instance value raised to the nth power modulo m.
     */
    powm(n: BigNum$BigNumCompatible, m: BigNum$BigNumCompatible): BigNum;

    /**
     * Compute the multiplicative inverse modulo m.
     */
    invertm(m: BigNum$BigNumCompatible): BigNum;

    /**
     * If upperBound is supplied, return a random BigNum between the instance value and upperBound - 1, inclusive.
     * Otherwise, return a random BigNum between 0 and the instance value - 1, inclusive.
     */
    rand(upperBound?: BigNum$BigNumCompatible): BigNum;

    /**
     * Return whether the BigNum is:
     *   - certainly prime (true)
     *   - probably prime ('maybe')
     *   - certainly composite (false)
     */
    probPrime(): boolean | string;

    /**
     * Return a new BigNum that is the 2^n multiple. Equivalent of the << operator.
     */
    shiftLeft(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return a new BigNum of the value integer divided by 2^n. Equivalent of the >> operator.
     */
    shiftRight(n: BigNum$BigNumCompatible): BigNum;

    /**
     * Return the greatest common divisor of the current BigNum with n as a new BigNum.
     */
    gcd(n: BigNum): BigNum;

    /**
     * Return the Jacobi symbol (or Legendre symbol if n is prime) of the current BigNum (= a) over n.
     * Note that n must be odd and >= 3. 0 <= a < n.
     *
     * Returns -1 or 1 as an int (NOT a BigNum). Throws an error on failure.
     */
    jacobi(n: BigNum): number;

    /**
     * Return the number of bits used to represent the current BigNum.
     */
    bitLength(): number;
  }

  declare var npm$namespace$BigNum: {
    toNumber: typeof BigNum$toNumber,
    toBuffer: typeof BigNum$toBuffer,
    add: typeof BigNum$add,
    sub: typeof BigNum$sub,
    mul: typeof BigNum$mul,
    div: typeof BigNum$div,
    abs: typeof BigNum$abs,
    neg: typeof BigNum$neg,
    cmp: typeof BigNum$cmp,
    gt: typeof BigNum$gt,
    ge: typeof BigNum$ge,
    eq: typeof BigNum$eq,
    lt: typeof BigNum$lt,
    le: typeof BigNum$le,
    and: typeof BigNum$and,
    or: typeof BigNum$or,
    xor: typeof BigNum$xor,
    mod: typeof BigNum$mod,
    pow: typeof BigNum$pow,
    powm: typeof BigNum$powm,
    invertm: typeof BigNum$invertm,
    rand: typeof BigNum$rand,
    probPrime: typeof BigNum$probPrime,
    shiftLeft: typeof BigNum$shiftLeft,
    shiftRight: typeof BigNum$shiftRight,
    gcd: typeof BigNum$gcd,
    jacobi: typeof BigNum$jacobi,
    bitLength: typeof BigNum$bitLength
  };

  /**
   * Anything that can be converted to BigNum.
   */
  declare type BigNum$BigNumCompatible = BigNum | number | string;

  declare export interface BigNum$BufferOptions {
    /**
     * Can be either 'big' or 'little'. Also accepts 1 for big and -1 for little. Doesn't matter when size = 1.
     */
    endian: string | number;

    /**
     * Number of bytes per word, or 'auto' to flip entire Buffer.
     */
    size: number | string;
  }

  /**
   * Turn a BigNum into a Number.
   *
   * If the BigNum is too big you'll lose precision or you'll get ±Infinity.
   */
  declare export function BigNum$toNumber(n: BigNum$BigNumCompatible): number;

  /**
   * Return a new Buffer with the data from the BigNum.
   *
   * The default options are: {endian: 'big', size: 1}.
   */
  declare export function BigNum$toBuffer(
    n: BigNum$BigNumCompatible,
    options?: BigNum$BufferOptions
  ): Buffer;

  /**
   * Return a new BigNum containing the instance value plus n.
   */
  declare export function BigNum$add(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum containing the instance value minus n.
   */
  declare export function BigNum$sub(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum containing the instance value multiplied by n.
   */
  declare export function BigNum$mul(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum containing the instance value integrally divided by n.
   */
  declare export function BigNum$div(
    dividend: BigNum$BigNumCompatible,
    divisor: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum with the absolute value of the instance.
   */
  declare export function BigNum$abs(n: BigNum$BigNumCompatible): BigNum;

  /**
   * Return a new BigNum with the negative of the instance value.
   */
  declare export function BigNum$neg(n: BigNum$BigNumCompatible): BigNum;

  /**
   * Compare the instance value to n.
   *
   * Return a positive integer if > n, a negative integer if < n, and 0 if == n.
   */
  declare export function BigNum$cmp(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): number;

  /**
   * Return a boolean: whether the instance value is greater than n (> n).
   */
  declare export function BigNum$gt(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): boolean;

  /**
   * Return a boolean: whether the instance value is greater than or equal to n (>= n).
   */
  declare export function BigNum$ge(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): boolean;

  /**
   * Return a boolean: whether the instance value is equal to n (== n).
   */
  declare export function BigNum$eq(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): boolean;

  /**
   * Return a boolean: whether the instance value is less than n (< n).
   */
  declare export function BigNum$lt(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): boolean;

  /**
   * Return a boolean: whether the instance value is less than or equal to n (<= n).
   */
  declare export function BigNum$le(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): boolean;

  /**
   * Return a new BigNum with the instance value bitwise AND (&)-ed with n.
   */
  declare export function BigNum$and(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum with the instance value bitwise inclusive-OR (|)-ed with n.
   */
  declare export function BigNum$or(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum with the instance value bitwise exclusive-OR (^)-ed with n.
   */
  declare export function BigNum$xor(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum with the instance value modulo n.
   */
  declare export function BigNum$mod(
    left: BigNum$BigNumCompatible,
    right: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum with the instance value raised to the nth power.
   */
  declare export function BigNum$pow(
    base: BigNum$BigNumCompatible,
    exponent: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum with the instance value raised to the nth power modulo m.
   */
  declare export function BigNum$powm(
    base: BigNum$BigNumCompatible,
    exponent: BigNum$BigNumCompatible,
    m: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Compute the multiplicative inverse modulo m.
   */
  declare export function BigNum$invertm(
    n: BigNum$BigNumCompatible,
    m: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * If upperBound is supplied, return a random BigNum between the instance value and upperBound - 1, inclusive.
   * Otherwise, return a random BigNum between 0 and the instance value - 1, inclusive.
   */
  declare export function BigNum$rand(
    n: BigNum$BigNumCompatible,
    upperBound?: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return whether the BigNum is:
   *   - certainly prime (true)
   *   - probably prime ('maybe')
   *   - certainly composite (false)
   */
  declare export function BigNum$probPrime(
    n: BigNum$BigNumCompatible
  ): boolean | string;

  /**
   * Return a new BigNum that is the 2^bits multiple. Equivalent of the << operator.
   */
  declare export function BigNum$shiftLeft(
    n: BigNum$BigNumCompatible,
    bits: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return a new BigNum of the value integer divided by 2^bits. Equivalent of the >> operator.
   */
  declare export function BigNum$shiftRight(
    n: BigNum$BigNumCompatible,
    bits: BigNum$BigNumCompatible
  ): BigNum;

  /**
   * Return the greatest common divisor of the current BigNum with n as a new BigNum.
   */
  declare export function BigNum$gcd(
    left: BigNum$BigNumCompatible,
    right: BigNum
  ): BigNum;

  /**
   * Return the Jacobi symbol (or Legendre symbol if n is prime) of the current BigNum (= a) over n.
   * Note that n must be odd and >= 3. 0 <= a < n.
   *
   * Returns -1 or 1 as an int (NOT a BigNum). Throws an error on failure.
   */
  declare export function BigNum$jacobi(
    a: BigNum$BigNumCompatible,
    n: BigNum
  ): number;

  /**
   * Return the number of bits used to represent the current BigNum.
   */
  declare export function BigNum$bitLength(n: BigNum$BigNumCompatible): number;
}
