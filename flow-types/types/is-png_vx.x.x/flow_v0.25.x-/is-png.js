declare module "is-png" {
  /**
   * Check whether a buffer contains a PNG image.
   * @remarks This only performs a header check, and the buffer may not parse as a PNG file.
   * @param buffer The buffer to check.
   * @returns Whether the given buffer contains a PNG image.
   */
  declare function isPng(buffer: Uint8Array | Buffer): boolean;

  declare module.exports: typeof isPng;
}
