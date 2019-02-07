declare module "replacestream" {
  declare interface ReplaceStream$Options {
    /**
     * Sets a limit on the number of times the replacement will be made. This
     * is forced to one when a regex without the global flag is provided.
     *
     * Default: `Infinity`
     */
    limit?: number;

    /**
     * The text encoding used during search and replace.
     *
     * Default: `"utf8"`
     */
    encoding?: string;

    /**
     * When doing cross-chunk replacing, this sets the maximum length match
     * that will be supported.
     *
     * Default: `100`
     */
    maxMatchLen?: number;

    /**
     * When doing string match (not relevant for regex matching) whether to do a
     * case insensitive search.
     *
     * Default: `true`
     */
    ignoreCase?: boolean;

    /**
 * When provided, these flags will be used when creating the search regexes
 * internally.
 * @deprecated as the flags set on the regex provided are no longer mutated
if this is not provided.
 */
    regExpOptions?: string;
  }

  declare type ReplaceStream$ReplaceFunction = (
    match: string,
    p1: string,
    offset: number,
    string: string
  ) => string;
  declare function ReplaceStream(
    search: RegExp | string,
    replace: ReplaceStream$ReplaceStream$ReplaceFunction | string,
    options?: ReplaceStream$ReplaceStream$Options
  ): any;

  declare module.exports: typeof ReplaceStream;
}
