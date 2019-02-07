declare module "lorem-ipsum" {
  declare interface LoremIpsumOptions {
    /**
     * Number of words, sentences, or paragraphs to generate.
     */
    count?: number;

    /**
     * Generate words, sentences, or paragraphs.
     */
    units?: "words" | "sentences" | "paragraphs";

    /**
     * Minimum words per sentence.
     */
    sentenceLowerBound?: number;

    /**
     * Maximum words per sentence.
     */
    sentenceUpperBound?: number;

    /**
     * Minimum sentences per paragraph.
     */
    paragraphLowerBound?: number;

    /**
     * Maximum sentences per paragraph.
     */
    paragraphUpperBound?: number;

    /**
     * Plain text or html.
     */
    format?: "plain" | "html";

    /**
     * Custom word dictionary.
     */
    words?: string[];

    /**
     * A PRNG function. Uses Math.random by default.
     */
    random?: () => number;

    /**
     * The character to insert between paragraphs. Defaults to default EOL.
     */
    suffix?: string;
  }

  /**
   * Generate a passage of lorem ipsum text.
   */
  declare function loremIpsum(options?: LoremIpsumOptions): string;

  declare module.exports: typeof loremIpsum;
}
