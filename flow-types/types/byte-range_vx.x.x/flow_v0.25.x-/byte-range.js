declare module "byte-range" {
  declare export default typeof byteRange;

  /**
   * Calculates integer ranges for a given number of bytes.
   * @param bytes Number of bytes to return the integer range for. Must be a positive integer.
   */
  declare function byteRange(
    bytes: number,
    options?: byteRange$Options
  ): byteRange$ByteRange;

  declare var npm$namespace$byteRange: {
    uint8: typeof byteRange$uint8,
    uint16: typeof byteRange$uint16,
    uint32: typeof byteRange$uint32,
    int8: typeof byteRange$int8,
    int16: typeof byteRange$int16,
    int32: typeof byteRange$int32
  };

  /**
   * Precomputed byte range for an unsigned 8 bit integer.
   */
  declare var byteRange$uint8: byteRange$ByteRange;

  /**
   * Precomputed byte range for an unsigned 16 bit integer.
   */
  declare var byteRange$uint16: byteRange$ByteRange;

  /**
   * Precomputed byte range for an unsigned 32 bit integer.
   */
  declare var byteRange$uint32: byteRange$ByteRange;

  /**
   * Precomputed byte range for an signed 8 bit integer.
   */
  declare var byteRange$int8: byteRange$ByteRange;

  /**
   * Precomputed byte range for an signed 16 bit integer.
   */
  declare var byteRange$int16: byteRange$ByteRange;

  /**
   * Precomputed byte range for an signed 32 bit integer.
   */
  declare var byteRange$int32: byteRange$ByteRange;

  declare interface byteRange$Options {
    /**
     * @default false
     */
    signed?: boolean;
  }

  declare type byteRange$ByteRange = [number, number];
}
