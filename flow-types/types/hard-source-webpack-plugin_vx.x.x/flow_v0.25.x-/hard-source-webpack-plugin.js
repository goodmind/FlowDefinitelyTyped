declare module "hard-source-webpack-plugin" {
  import typeof * as webpack from "webpack";

  declare class hard_source_webpack_plugin {
    constructor(options?: Options): this;
    apply(...args: any[]): void;
  }

  declare interface Options {
    cacheDirectory?: string;
    configHash?: string | ((webpackConfig?: webpack.Configuration) => string);
    environmentHash?: {
      root: string,
      directories: string[],
      files: string[]
    };
    info?: {
      mode: "none" | "test",
      level: "debug" | "log" | "info" | "warn" | "error"
    };
    cachePrune?: {
      maxAge: number,
      sizeThreshold: number
    };
  }
  declare module.exports: typeof hard_source_webpack_plugin;
}
