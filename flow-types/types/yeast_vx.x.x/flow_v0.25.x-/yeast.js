declare module "yeast" {
  declare export default typeof yeast;

  /**
   * Yeast: A tiny growing id generator.
   */
  declare function yeast(): string;

  declare var yeast: typeof npm$namespace$yeast;

  declare var npm$namespace$yeast: {
    encode: typeof yeast$encode,
    decode: typeof yeast$decode
  };

  /**
   * Return a string representing the specified number.
   */
  declare function yeast$encode(num: number): string;

  /**
   * Return the integer value specified by the given string.
   */
  declare function yeast$decode(str: string): number;
}
