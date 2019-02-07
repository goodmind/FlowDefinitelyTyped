declare module "remove-markdown" {
  declare module.exports: typeof RemoveMarkdown;

  /**
   * Strip Markdown formatting from text
   * @param markdown Markdown text
   */
  declare function RemoveMarkdown(
    markdown: string,
    options?: {
      stripListLeaders?: boolean,
      gfm?: boolean
    }
  ): string;
}
