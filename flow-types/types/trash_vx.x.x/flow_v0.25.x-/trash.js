declare module "trash" {
  /**
   * Move files and folders to the trash
   * @param paths Accepts paths and [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns).
   * @param Enable globbing when matching file paths
   */
  declare function trash(
    paths: string | string[],
    options?: trash$trash$Options
  ): Promise<void>;

  declare interface trash$Options {
    glob: boolean;
  }
  declare module.exports: typeof trash;
}
