declare module "changelog-parser" {
  declare interface Options {
    /**
     * Path to changelog file.
     */
    filePath: string;

    /**
     * Removes the markdown markup from the changelog entries by default.
     * You can change its value to false to keep the markdown.
     */
    removeMarkdown: boolean;
  }

  /**
   * Change log parser for node.
   */
  declare function parseChangelog(
    options: $Shape<Options> | string,
    callback?: (error: string | null, result: { [key: string]: any }) => void
  ): Promise<{ [key: string]: any }>;

  declare export default typeof parseChangelog;
}
