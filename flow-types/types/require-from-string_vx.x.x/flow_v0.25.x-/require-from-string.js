declare module "require-from-string" {
  /**
   * Load module from string in Node.
   */
  declare function requireFromString(
    code: string,
    options?: requireFromString$requireFromString$Options
  ): any;

  declare function requireFromString(
    code: string,
    filename?: string,
    options?: requireFromString$requireFromString$Options
  ): any;

  declare interface requireFromString$Options {
    /**
     * List of `paths`, that will be appended to module `paths`.
     * Useful when you want to be able require modules from these paths.
     */
    appendPaths?: string[];

    /**
     * List of `paths`, that will be preppended to module `paths`.
     * Useful when you want to be able require modules from these paths.
     */
    prependPaths?: string[];
  }
  declare module.exports: typeof requireFromString;
}
