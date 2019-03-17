declare module "html-truncate" {
  declare interface TruncateOptions {
    /**
     * Flag to specify if keep image tag, false by default.
     */
    keepImageTag: boolean;

    /**
     * Omission symbol for truncated string, '...' by default.
     */
    ellipsis: boolean | string;
  }

  /**
   * Truncate HTML text and also keep tag safe.
   */
  declare function truncate(
    input: string,
    maxLength: number,
    options?: TruncateOptions
  ): string;

  declare export default typeof truncate;
}
