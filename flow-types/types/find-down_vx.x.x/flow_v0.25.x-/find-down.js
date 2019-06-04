declare module "find-down" {
  declare interface findDown$Options {
    /**
     * Directory to end with. Default: `process.cwd()`
     */
    cwd?: string;
  }
  declare function findDown(
    filename: string | string[],
    options?: findDown$Options
  ): Promise<string | null>;

  declare export default typeof findDown;
}
