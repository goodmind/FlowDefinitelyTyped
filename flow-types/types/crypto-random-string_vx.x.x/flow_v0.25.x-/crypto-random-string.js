declare module "crypto-random-string" {
  /**
   * Generate a hexadecimal string of the given length.
   * @param length the length of the random string.
   * @return a string of the specified length.
   */
  declare function cryptoRandomString(length: number): string;

  declare module.exports: typeof cryptoRandomString;
}
