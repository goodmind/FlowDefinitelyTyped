declare module "repeating" {
  declare export default typeof repeating;

  /**
   * Repeat a string - fast
   * @param count Times the 'string' should be repeated.
   * @param str String to repeat. Default: ' '
   */
  declare function repeating(count: number, str?: string): string;
}
