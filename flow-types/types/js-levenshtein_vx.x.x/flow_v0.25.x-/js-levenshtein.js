declare module "js-levenshtein" {
  /**
   * Calculates Levenshtein distance between two strings
   */
  declare function levenshtein(compareFrom: string, compareTo: string): number;

  declare module.exports: typeof levenshtein;
}
