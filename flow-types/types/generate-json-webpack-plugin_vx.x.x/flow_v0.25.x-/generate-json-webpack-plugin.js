declare module "generate-json-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof GenerateJsonWebpackPlugin;

  declare class GenerateJsonWebpackPlugin mixins Plugin {
    constructor(
      fileName: string,
      value: { [key: string]: any },
      replacer?: (key: string, value: any) => any,
      space?: string | number
    ): this;
  }
}
