declare module "bitwise-xor" {
  /**
   * Bitwise XOR between two Buffers or Strings, returns a Buffer
   */
  declare function xor(a: Buffer | string, b: Buffer | string): Buffer;

  declare module.exports: typeof xor;
}
