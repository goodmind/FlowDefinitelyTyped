declare module "oniguruma" {
  /**
   * An (error, match) callback function to be invoked after an asynchronous
   * search operation is completed. The type of T varies slightly based on the
   * method being called.
   */
  declare export type Callback<T> = (error: Error, match: T) => void;

  /**
   * An object representing a range within a search string, corresponding to
   * either a full-string match, or a capturing group within a match.
   */
  declare export interface CaptureIndex {
    /**
     * The index of the capturing group, or 0 for a full-string match
     */
    index: number;

    /**
     * The position in the search string where the capture begins
     */
    start: number;

    /**
     * The position in the search string where the capture ends
     */
    end: number;

    /**
     * The total character length of the capture
     */
    length: number;
  }

  /**
   * An object representing one successful regex match between a pattern and a
   * search string.
   */
  declare export interface Match {
    /**
     * The index of the best pattern match
     */
    index: number;

    /**
     * An array holding all of the captures (full match + capturing groups)
     */
    captureIndices: CaptureIndex[];
  }

  /**
   * An object representing a single regex pattern, which can be used to
   * interrogate strings for matches against that pattern.
   */
  declare export class OnigRegExp {
    /**
     * Create a new regex with the given pattern
     * @param pattern A string pattern
     */
    constructor(pattern: string): this;

    /**
     * The regex pattern that the OnigRegExp matches against
     */
    source: string;

    /**
     * The OnigScanner instance used internally for regex matching
     */
    scanner: OnigScanner;

    /**
 * Augment the capture indices for the given Match object by extracting
 * the substrings associated with each capture, assinging them to the
 * CaptureIndex object's 'match' property
 * @param string The search string from which 'match' resulted
 * @param match The Match object containing the matches of the search
 * @return An array of CaptureIndex objects which have been augmented with
the original text that triggered the match
 */
    captureIndicesForMatch(
      string: any,
      match: Match
    ): Array<
      CaptureIndex & {
        match: string
      }
    >;

    /**
 * Search the string for a match starting at the given position.
 * @param string The string to search.
 * @param startPosition The optional position to start at, defaults to 0
 * @param callback The (error, match) function to call when done. Match will
be null if no matches were found. Otherwise, match will be an
array of objects for each matched group.
 */
    search(
      string: string,
      startPosition: number,
      callback: Callback<CaptureIndex[] | null>
    ): void;

    /**
 * Search the string for a match starting at the beginning of the string.
 * @param string The string to search.
 * @param callback The (error, match) function to call when done. Match will
be null if no matches were found. Otherwise, match will be an
array of objects for each matched group.
 */
    search(string: string, callback: Callback<CaptureIndex[] | null>): void;

    /**
 * Synchronously search the string for a match starting at the given
 * position.
 * @param string The string to search.
 * @param startPosition The optional position to start at, defaults to 0
 * @return An array of objects representing each matched group, or null if
there were no matches.
 */
    searchSync(string: string, startPosition?: number): CaptureIndex[] | null;

    /**
 * Test if this regular expression matches the given string.
 * @param string The string to test against.
 * @param callback The (error, matches) function to call when done. Matches
will be true if at least one match was found, or false otherwise.
 */
    test(sring: string, callback: Callback<boolean>): void;

    /**
     * Synchronously test if this regular expression matches the given string.
     * @param string The string to test against.
     * @return True if there is at least one match, or false otherwise.
     */
    testSync(string: string): boolean;
  }

  /**
   * An object representing one OR MORE regex patterns, which can be used to
   * interrogate strings for matches against any of the supplied patterns.
   */
  declare export class OnigScanner {
    /**
     * Create a new scanner with the given patterns.
     * @param patterns An array of string patterns.
     */
    constructor(patterns: $ReadOnlyArray<string>): this;

    /**
 * Find the next match from a given position
 * @param string The string to search
 * @param startPosition The optional position to start at, defaults to 0
 * @param callback The (error, match) function to be called when done. Match
will be null when there is no match.
 */
    findNextMatch(
      string: string,
      startPosition: number,
      callback: Callback<Match | null>
    ): void;

    /**
 * Find the next match from the beginning of a string
 * @param string The string to search
 * @param callback The (error, match) function to be called when done. Match
will be null when there is no match.
 */
    findNextMatch(string: string, callback: Callback<Match | null>): void;

    /**
     * Synchronously find the next match from a given position
     * @param string The string to search
     * @param startPosition The optional position to start at, defaults to 0
     * @return An object containing details about the match, or null if no match
     */
    findNextMatchSync(string: string, startPosition?: number): Match | null;
  }

  /**
   * An object class used internally as a wrapper for JavaScript string
   * primitives.
   */
  declare export class OnigString {
    /**
     * Wrap a string primitive in a new OnigString object
     * @param string The string primitive to be wrapped
     */
    constructor(string: string): this;

    /**
     * The character length of the string primitive wrapped by the object
     */
    length: number;

    /**
     * The string primitive wrapped by the object
     */
    content: string;

    /**
     * Returns a reference the string primitive wrapped by the object
     * @return A reference to the wrapped string primitive
     */
    toString(): string;

    /**
     * Returns a substring of the string primitive wrapped by the object
     * @param start The index of the first character to include
     * @param end The index before which the substring should end
     * @return A new string primitive containing the specified index range
     */
    substring(start: number, end: number): string;
  }
}
