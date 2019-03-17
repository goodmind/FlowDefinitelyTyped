declare module "bit-twiddle" {
  declare export var INT_BITS: number;
  declare export var INT_MAX: number;
  declare export var INT_MIN: number;

  /**
   * Computes the sign of the integer.
   */
  declare export function sign(value: number): number;

  /**
   * Returns the absolute value of the integer.
   */
  declare export function abs(value: number): number;

  /**
   * Computes the minimum of integers x and y.
   */
  declare export function min(x: number, y: number): number;

  /**
   * Computes the maximum of integers x and y.
   */
  declare export function max(x: number, y: number): number;

  /**
   * Returns true if value is a power of 2, otherwise false.
   */
  declare export function isPow2(value: number): boolean;

  /**
   * Returns an integer approximation of the log-base 2 of value.
   */
  declare export function log2(value: number): number;

  /**
   * Returns an integer approximation of the log-base 10 of value.
   */
  declare export function log10(value: number): number;

  /**
   * Counts the number of bits set in value.
   */
  declare export function popCount(value: number): number;

  /**
   * Counts the number of trailing zeros.
   */
  declare export function countTrailingZeros(value: number): number;

  /**
   * Rounds value up to the next power of 2.
   */
  declare export function nextPow2(value: number): number;

  /**
   * Rounds value down to the previous power of 2.
   */
  declare export function prevPow2(value: number): number;

  /**
   * Computes the parity of the bits in value.
   */
  declare export function parity(value: number): number;

  /**
   * Reverses the bits of value.
   */
  declare export function reverse(value: number): number;

  /**
   * Interleaves a pair of 16 bit integers. Useful for fast quadtree style indexing.
   * @see http://en.wikipedia.org/wiki/Z-order_curve
   */
  declare export function interleave2(x: number, y: number): number;

  /**
   * Deinterleaves the bits of value, returns the nth part.
   * If both x and y are 16 bit.
   */
  declare export function deinterleave2(x: number, y: number): number;

  /**
   * Interleaves a triple of 10 bit integers. Useful for fast octree indexing.
   */
  declare export function interleave3(x: number, y: number, z: number): number;

  /**
   * Same deal as deinterleave2, only for triples instead of pairs.
   */
  declare export function deinterleave3(x: number, y: number): number;

  /**
   * Returns next combination ordered colexicographically.
   */
  declare export function nextCombination(x: number): number;
}
