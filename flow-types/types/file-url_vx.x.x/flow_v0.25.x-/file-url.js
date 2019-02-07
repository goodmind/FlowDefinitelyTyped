declare module "file-url" {
  /**
   * Options for the fileUrl() API.
   */
  declare interface FileUrlOptions {
    /**
     * Passing false will make it not call path.resolve() on the path.
     */
    resolve?: boolean;
  }

  /**
   * Convert a path to a file URL.
   * @param path File path to convert.
   * @param options Options to use.
   * @return File URL.
   */
  declare function fileUrl(path: string, options?: FileUrlOptions): string;

  declare module.exports: typeof fileUrl;
}
