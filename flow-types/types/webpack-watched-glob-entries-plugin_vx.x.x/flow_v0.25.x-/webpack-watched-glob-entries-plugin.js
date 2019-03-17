declare module "webpack-watched-glob-entries-plugin" {
  import type { IOptions } from "glob";

  import type { EntryFunc, Plugin } from "webpack";

  declare interface PluginOptions {
    basename_as_entry_name?: boolean;
  }
  declare class WebpackWatchedGlobEntries mixins Plugin {
    static getEntries(
      globs: string[],
      globOptions?: IOptions,
      pluginOptions?: PluginOptions
    ): EntryFunc;
    static getFiles(
      globString: string,
      globOptions?: IOptions,
      basename_as_entry_name?: boolean
    ): Record<string, string>;
  }
  declare export default typeof WebpackWatchedGlobEntries;
}
