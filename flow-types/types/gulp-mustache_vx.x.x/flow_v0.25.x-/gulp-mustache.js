declare module "gulp-mustache" {
  import type { Transform } from "stream";

  declare type GulpMustache$View = GulpMustache$Hash | string | void;

  declare interface GulpMustache$Hash {
    [key: string]: any;
  }

  declare interface GulpMustache$Options {
    extension?: string;
    tags?: $ReadOnlyArray<string>;
  }
  declare function GulpMustache(
    view: GulpMustache$GulpMustache$View,
    options?: GulpMustache$GulpMustache$Options,
    partials?: GulpMustache$GulpMustache$Hash
  ): Transform;

  declare module.exports: typeof GulpMustache;
}
