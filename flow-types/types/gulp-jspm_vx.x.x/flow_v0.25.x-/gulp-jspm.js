declare module "gulp-jspm" {
  declare interface Options {
    arithmetic?: string;
    selfExecutingBundle?: boolean;
    plugin?: boolean | string;
    inject?: boolean;
    minify?: boolean;
  }
  declare interface GulpJspm {
    (options?: Options): NodeJS.ReadWriteStream;
  }
  declare var gulpJspm: GulpJspm;
  declare module.exports: typeof gulpJspm;
}
