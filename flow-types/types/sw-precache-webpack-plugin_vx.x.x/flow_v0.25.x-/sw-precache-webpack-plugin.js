declare module "sw-precache-webpack-plugin" {
  import type { SWPrecacheWebpackPlugin$Options as SwPrecacheOptions } from "sw-precache";

  import type { Plugin } from "webpack";

  declare type _Options = {
    importScripts?: any
  } & SwPrecacheOptions;

  declare type SWPrecacheWebpackPlugin$Options = {
    filename?: string,
    filepath?: string,
    staticFileGlobsIgnorePatterns?: RegExp[],
    mergeStaticsConfig?: boolean,
    minify?: boolean,
    importScripts?: Array<
      | string
      | {
          chunkName?: string,
          filename?: string
        }
    >
  } & _Options;

  declare class SWPrecacheWebpackPlugin mixins Plugin {
    constructor(
      options?: SWPrecacheWebpackPlugin$SWPrecacheWebpackPlugin$Options
    ): this;
  }
  declare module.exports: typeof SWPrecacheWebpackPlugin;
}
