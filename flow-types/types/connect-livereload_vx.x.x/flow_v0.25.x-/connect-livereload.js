declare module "connect-livereload" {
  import type { HandleFunction } from "connect";

  declare function livereload(): HandleFunction;

  declare function livereload(
    options: livereload$livereload$Options
  ): HandleFunction;

  declare export type livereload$FileMatcher = string | RegExp;

  declare export interface livereload$Rule {
    match: RegExp;
    fn: (w: string, s: string) => string;
  }

  declare export interface livereload$Options {
    ignore?: livereload$FileMatcher[];
    excludeList?: livereload$FileMatcher[];
    include?: livereload$FileMatcher[];
    html?: (val: string) => boolean;
    rules?: livereload$Rule[];
    disableCompression?: boolean;
    hostname?: string;
    port?: number;
    src?: string;
  }
  declare module.exports: typeof livereload;
}
