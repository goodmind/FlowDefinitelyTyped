declare module "make-dir" {
  import typeof * as fs from "fs";

  declare export default typeof makeDir;

  /**
   * Returns a `Promise` for the path to the created directory.
   * @param path Directory to create.
   */
  declare function makeDir(
    path: string,
    options?: makeDir$Options
  ): Promise<string>;

  declare var npm$namespace$makeDir: {
    sync: typeof makeDir$sync
  };

  /**
   * Returns the path to the created directory.
   * @param path Directory to create.
   */
  declare function makeDir$sync(
    path: string,
    options?: makeDir$Options
  ): string;

  declare interface makeDir$Options {
    /**
     * Default: `0o777 & (~process.umask())`
     *
     * Directory [permissions](https://x-team.com/blog/file-system-permissions-umask-node-js/).
     */
    mode?: number;

    /**
     * Default: `require('fs')`
     *
     * Use a custom `fs` implementation. For example [`graceful-fs`](https://github.com/isaacs/node-graceful-fs).
     */
    fs?: typeof fs;
  }
}
