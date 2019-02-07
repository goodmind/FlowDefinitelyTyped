declare module "cryptiles" {
  /**
   * Returns a cryptographically strong pseudo-random data string. Takes a size argument for the length of the string.
   */
  declare export function randomString(size: number): string;

  /**
   * Returns a cryptographically strong pseudo-random data string consisting of only numerical digits (0-9).
   * Takes a size argument for the length of the string.
   */
  declare export function randomDigits(size: number): string;

  /**
   * Compare two strings using fixed time algorithm (to prevent time-based analysis of MAC digest match).
   * Returns true if the strings match, false if they differ.
   */
  declare export function fixedTimeComparison(a: string, b: string): boolean;
}
