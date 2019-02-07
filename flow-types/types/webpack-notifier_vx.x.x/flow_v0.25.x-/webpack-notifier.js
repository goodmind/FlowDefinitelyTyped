declare module "webpack-notifier" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof WebpackNotifierPlugin;

  declare class WebpackNotifierPlugin mixins Plugin {
    constructor(
      options?: WebpackNotifierPlugin$WebpackNotifierPlugin$Options
    ): this;
  }
  declare interface WebpackNotifierPlugin$Options {
    alwaysNotify?: boolean;
    contentImage?: string;
    excludeWarnings?: boolean;
    skipFirstNotification?: boolean;
    title?: string;
  }

  /**
   * @deprecated use Options
   */
  declare type WebpackNotifierPlugin$Config = WebpackNotifierPlugin$Options;
}
