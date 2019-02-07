declare module "uglifyjs-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof UglifyJsPlugin;

  declare class UglifyJsPlugin mixins Plugin {
    constructor(
      options?: UglifyJsPlugin$UglifyJsPlugin$UglifyJsPluginOptions
    ): this;
  }
  declare interface UglifyJsPlugin$UglifyJsPluginOptions {
    test?: RegExp | RegExp[];
    include?: RegExp | RegExp[];
    exclude?: RegExp | RegExp[];
    cache?: boolean | string;
    parallel?: boolean | number;
    sourceMap?: boolean;
    uglifyOptions?: UglifyJsPlugin$UglifyJsOptions;
    extractComments?:
      | boolean
      | RegExp
      | ((node: { [key: string]: any }, comment: string) => boolean)
      | UglifyJsPlugin$ExtractCommentsOptions;
    warningsFilter?: (source: string) => boolean;
  }

  declare interface UglifyJsPlugin$UglifyJsOptions {
    ie8?: boolean;
    ecma?: number;
    parse?: { [key: string]: any };
    mangle?: boolean | { [key: string]: any };
    output?: { [key: string]: any };
    compress?: boolean | { [key: string]: any };
    warnings?: boolean;
    toplevel?: boolean;
    nameCache?: { [key: string]: any };
    keep_classnames?: boolean;
    keep_fnames?: boolean;
    safari10?: boolean;
  }

  declare interface UglifyJsPlugin$ExtractCommentsOptions {
    condition?:
      | RegExp
      | ((node: { [key: string]: any }, comment: string) => boolean);
    filename?: string | ((originalFileName: string) => string);
    banner?: boolean | string | ((fileName: string) => string);
  }
}
