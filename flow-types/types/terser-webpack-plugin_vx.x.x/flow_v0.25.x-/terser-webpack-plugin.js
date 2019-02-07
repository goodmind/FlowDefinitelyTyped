declare module "terser-webpack-plugin" {
  import type { Plugin } from "webpack";

  import type { MinifyOptions } from "terser";

  declare module.exports: typeof TerserPlugin;

  declare class TerserPlugin mixins Plugin {
    constructor(opts?: TerserPlugin$TerserPlugin$TerserPluginOptions): this;
  }
  declare interface TerserPlugin$MinifyResult {
    error: any;
    map: any;
    code: any;
    warnings: any;
    extractedComments: any;
  }

  declare interface TerserPlugin$ExtractCommentOptions {
    condition:
      | boolean
      | string
      | RegExp
      | TerserPlugin$ExtractCommentFn
      | { [key: string]: any };
    filename?: string | TerserPlugin$FormatFn;
    banner?: boolean | string | TerserPlugin$FormatFn;
  }

  declare type TerserPlugin$ExtractCommentFn = (
    node: any,
    comment: any
  ) => boolean | { [key: string]: any };

  declare type TerserPlugin$FormatFn = (input: string) => string;

  declare interface TerserPlugin$TerserPluginOptions {
    test?: string | RegExp | Array<string | RegExp>;
    include?: string | RegExp | Array<string | RegExp>;
    exclude?: string | RegExp | Array<string | RegExp>;
    chunkFilter?: (chunk: webpack.compilation.Chunk) => boolean;
    cache?: boolean | string;
    cacheKeys?: (defaultCacheKeys: any, file: any) => { [key: string]: any };
    parallel?: boolean | number;
    sourceMap?: boolean;
    minify?: (file: any, sourceMap: any) => TerserPlugin$MinifyResult;
    terserOptions?: MinifyOptions;
    extractComments?:
      | boolean
      | string
      | RegExp
      | TerserPlugin$ExtractCommentFn
      | TerserPlugin$ExtractCommentOptions;
    warningsFilter?: (warning: any, source: any) => boolean;
  }
}
