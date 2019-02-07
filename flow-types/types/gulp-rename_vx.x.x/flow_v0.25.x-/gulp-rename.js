declare module "gulp-rename" {
  declare interface rename$ParsedPath {
    dirname?: string;
    basename?: string;
    extname?: string;
  }

  declare type rename$Options = {
    prefix?: string,
    suffix?: string
  } & rename$ParsedPath;

  declare function rename(name: string): NodeJS.ReadWriteStream;

  declare function rename(
    callback: (path: rename$rename$ParsedPath) => any
  ): NodeJS.ReadWriteStream;

  declare function rename(opts: rename$rename$Options): NodeJS.ReadWriteStream;

  declare module.exports: typeof rename;
}
