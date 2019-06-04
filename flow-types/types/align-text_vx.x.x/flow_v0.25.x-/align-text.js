declare module "align-text" {
  declare interface TransformResult {
    /**
     * the amount of indentation to use. Default is 0 when an object is returned.
     */
    indent: number;

    /**
     * the character to use for indentation. Default is '' (empty string) when an object is returned.
     */
    character: string;

    /**
     * leading characters to use at the beginning of each line. '' (empty string) when an object is returned.
     */
    prefix: string;
  }
  declare interface Callback {
    /**
     * @param len the length of the "current" line
     * @param longest the length of the longest line
     * @param line the current line (string) being aligned
     * @param lines the array of all lines
     */
    (
      len: number,
      longest: number,
      line: string,
      lines: string[]
    ): number | TransformResult;
  }
  declare function align_text(text: string, fn?: number | Callback): string;

  declare function align_text(text: any[], fn?: number | Callback): string[];

  declare export default typeof align_text;
}
