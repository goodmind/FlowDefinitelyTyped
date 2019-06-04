declare module "reserved-words" {
  declare export type Dialect =
    | "es3"
    | 3
    | "es5"
    | 5
    | "es2015"
    | 6
    | "es7"
    | 7
    | "es6"
    | "next";
  declare export interface Keywords {
    [index: string]: {
      [index: string]: true
    };
  }
  declare export var KEYWORDS: Keywords;

  /**
   * Checks a word for being a reserved word and returns true if the provided
   * identifier string is a reserved word in some ECMAScript dialect.
   * @param word word to check
   * @param dialect dialect or version
   * @param strict strict mode additionally checks whether word is a keyword or
   * future reserved word under strict mode.
   */
  declare export function check(
    word: string,
    dialect?: Dialect,
    strict?: boolean
  ): boolean;
}
