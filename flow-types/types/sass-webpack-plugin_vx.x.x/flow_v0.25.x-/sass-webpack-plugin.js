declare module "sass-webpack-plugin" {
  import type { Options } from "node-sass";

  import type { Plugin } from "webpack";

  declare type SassPlugin$NODE_ENV = "production" | "development";

  declare type SassPlugin$FileRule =
    | string
    | string[]
    | {
        [key: string]: string
      };

  declare interface SassPlugin$Config {
    sourceMap?: boolean;
    autoprefixer?: boolean;
    sass?: Options;
  }
  declare class SassPlugin mixins Plugin {
    constructor(
      file: SassPlugin$SassPlugin$FileRule,
      mode?: SassPlugin$SassPlugin$NODE_ENV | SassPlugin$SassPlugin$Config
    ): this;
    constructor(
      file: SassPlugin$SassPlugin$FileRule,
      mode: SassPlugin$SassPlugin$NODE_ENV,
      config?: SassPlugin$SassPlugin$Config
    ): this;
  }
  declare module.exports: typeof SassPlugin;
}
