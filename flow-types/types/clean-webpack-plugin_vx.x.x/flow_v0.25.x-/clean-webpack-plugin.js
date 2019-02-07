declare module "clean-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof CleanWebpackPlugin;

  declare class CleanWebpackPlugin mixins Plugin {
    /**
     * @param paths A glob or array of globs to delete
     */
    constructor(
      paths: string | $ReadOnlyArray<string>,
      options?: string | CleanWebpackPlugin$CleanWebpackPlugin$Options
    ): this;
  }
  declare interface CleanWebpackPlugin$Options {
    /**
     * Absolute path to your webpack root folder (paths appended to this)
     * Default: root of your package
     */
    root?: string;

    /**
     * Write logs to the console.
     */
    verbose?: boolean;

    /**
     * Set to `true` to emulate deletion without actually removing any files.
     */
    dry?: boolean;

    /**
     * If true, remove files on recompile.
     */
    watch?: boolean;

    /**
     * Instead of removing whole path recursively,
     * remove all path's content with exclusion of provided immediate children.
     * Good for not removing shared files from build directories.
     */
    exclude?: $ReadOnlyArray<string>;

    /**
     * Allow the plugin to clean folders outside of the webpack root
     */
    allowExternal?: boolean;
  }
}
