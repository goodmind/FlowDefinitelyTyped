declare module "cssnano" {
  import type { Plugin } from "postcss";

  declare interface cssnano$CssNanoOptions {
    configFile?: string;
    preset?: [string, { [key: string]: any }] | string;
  }

  declare type cssnano$CssNano = Plugin<cssnano$CssNanoOptions>;
  declare var cssnano: cssnano$cssnano$CssNano;
  declare module.exports: typeof cssnano;
}
