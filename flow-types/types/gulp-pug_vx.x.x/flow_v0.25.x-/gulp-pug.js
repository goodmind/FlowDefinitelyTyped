declare module "gulp-pug" {
  import type { Options } from "pug";

  declare function GulpPug(params?: GulpPug$GulpPug$Params): stream.Transform;

  declare type GulpPug$Params = {
    locals?: any,
    data?: any,
    client?: boolean,
    pug?: any,
    verbose?: boolean
  } & Options;

  declare module.exports: typeof GulpPug;
}
