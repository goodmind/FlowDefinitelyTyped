declare module "extra-watch-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof ExtraWatchWebpackPlugin;

  declare class ExtraWatchWebpackPlugin mixins Plugin {
    constructor(
      options?: ExtraWatchWebpackPlugin$ExtraWatchWebpackPlugin$Options
    ): this;
  }
  declare interface ExtraWatchWebpackPlugin$Options {
    /**
     * `string` (absolute path or glob pattern) or `array`, default `[]`, attach extra files to webpack's watch system
     */
    files?: string | $ReadOnlyArray<string>;

    /**
     * `string` or `array`, default `[]`, attach extra dirs to webpack's watch system
     */
    dirs?: string | $ReadOnlyArray<string>;
  }
}
