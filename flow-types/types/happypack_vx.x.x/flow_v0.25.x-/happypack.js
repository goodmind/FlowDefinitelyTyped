declare module "happypack" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof happypack;

  declare interface happypack$PluginOptions {
    id?: string;
    threads?: number;
    loaders: any;
  }
  declare class happypack mixins Plugin {
    constructor(options: happypack$happypack$PluginOptions): this;
  }
}
