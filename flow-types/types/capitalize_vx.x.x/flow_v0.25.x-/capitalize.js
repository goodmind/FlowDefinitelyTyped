declare module "capitalize" {
  /**
   * Capitalize the first letter of a string
   * @param input the string to capitalize
   */
  declare function capitalize(input: string): string;

  declare var npm$namespace$capitalize: {
    words: typeof capitalize$words
  };

  /**
   * Capitalize each word in a string
   * @param input the string to capitalize
   */
  declare function capitalize$words(input: string): string;

  declare module.exports: typeof capitalize;
}
