declare module "lodash-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof LodashModuleReplacementPlugin;

  declare class LodashModuleReplacementPlugin mixins Plugin {
    constructor(
      options?: LodashModuleReplacementPlugin$LodashModuleReplacementPlugin$Options
    ): this;
  }
  declare interface LodashModuleReplacementPlugin$Options {
    caching?: boolean;
    chaining?: boolean;
    cloning?: boolean;
    coercions?: boolean;
    collections?: boolean;
    currying?: boolean;
    deburring?: boolean;
    exotics?: boolean;
    flattening?: boolean;
    guards?: boolean;
    memoizing?: boolean;
    metadata?: boolean;
    paths?: boolean;
    placeholders?: boolean;
    shorthands?: boolean;
    unicode?: boolean;
  }
}
