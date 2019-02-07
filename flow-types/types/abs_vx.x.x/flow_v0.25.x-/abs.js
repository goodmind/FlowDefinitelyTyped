declare module "abs" {
  /**
   * Compute the absolute path of an input.
   * @param input The input path.
   */
  declare function Abs(input: string): string;

  declare module.exports: typeof Abs;
}
