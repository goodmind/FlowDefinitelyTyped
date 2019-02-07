declare module "babel-webpack-plugin" {
  import type { Plugin } from "webpack";

  import type { TransformOptions } from "babel-core";

  declare module.exports: typeof BabelWebpackPlugin;

  declare class BabelWebpackPlugin mixins Plugin {
    constructor(options?: BabelWebpackPlugin$BabelWebpackPlugin$Options): this;
  }
  declare type BabelWebpackPlugin$Matcher =
    | RegExp
    | string
    | Array<RegExp | string>;

  declare type BabelWebpackPlugin$Options = {
    test?: BabelWebpackPlugin$Matcher,
    include?: BabelWebpackPlugin$Matcher,
    exclude?: BabelWebpackPlugin$Matcher
  } & TransformOptions;
}
