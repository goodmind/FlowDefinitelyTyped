declare module "vkbeautify" {
  /**
   * Pretty print an xml string with the given number of whitespace, or with a given indentation pattern
   */
  declare export function xml(
    text: string,
    amountOfWhitespaces?: number | string
  ): string;

  /**
   * Pretty print a json string with the given number of whitespace, or with a given indentation pattern
   */
  declare export function json(
    text: string,
    amountOfWhitespaces?: number | string
  ): string;

  /**
   * Pretty print a css string with the given number of whitespace, or with a given indentation pattern
   */
  declare export function css(
    text: string,
    amountOfWhitespaces?: number | string
  ): string;

  /**
   * Pretty print an sql string with the given number of whitespace, or with a given indentation pattern
   */
  declare export function sql(
    text: string,
    amountOfWhitespaces?: number | string
  ): string;

  /**
   * Minifiy an xml string, and preserve or remove comments (default)
   */
  declare export function xmlmin(
    text: string,
    preserveComments?: boolean
  ): string;

  /**
   * Minifiy a json string
   */
  declare export function jsonmin(text: string): string;

  /**
   * Minifiy a css string, and preserve or remove comments (default)
   */
  declare export function cssmin(
    text: string,
    preserveComments?: boolean
  ): string;

  /**
   * Minifiy an sql string
   */
  declare export function sqlmin(text: string): string;
}
