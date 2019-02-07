declare module "optimize-css-assets-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof OptimizeCssAssetsPlugin;

  declare interface OptimizeCssAssetsPlugin$Options {
    assetNameRegExp?: RegExp;
    cssProcessor?: any;
    cssProcessorOptions?: any;
    canPrint?: boolean;
  }
  declare class OptimizeCssAssetsPlugin mixins Plugin {
    constructor(
      options?: OptimizeCssAssetsPlugin$OptimizeCssAssetsPlugin$Options
    ): this;
  }
}
