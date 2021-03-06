declare module "uglifycss" {
  declare var npm$namespace$UglifyCSS: {
    processString: typeof UglifyCSS$processString,
    processFiles: typeof UglifyCSS$processFiles
  };
  declare interface UglifyCSS$UglifyCSSOptions {
    /**
     * Adds a newline (approx.) every n characters; 0 means no newline and is the default value
     */
    maxLineLen?: number;

    /**
     * eEpands variables; by default, @variables blocks are preserved and var(x)s are not expanded
     */
    expandVars?: boolean;

    /**
     * Removes newlines within preserved comments; by default, newlines are preserved
     */
    uglyComments?: boolean;

    /**
     * Preserves newlines within and around preserved comments
     */
    cuteComments?: boolean;
  }

  /**
   * Uglify a string
   */
  declare function UglifyCSS$processString(
    content: string,
    options?: UglifyCSS$UglifyCSSOptions
  ): string;

  /**
   * Uglify one or more files
   */
  declare function UglifyCSS$processFiles(
    filenames: Array<string>,
    options?: UglifyCSS$UglifyCSSOptions
  ): string;

  declare export default typeof UglifyCSS;
}
