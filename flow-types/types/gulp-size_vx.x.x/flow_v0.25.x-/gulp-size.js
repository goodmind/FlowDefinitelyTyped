declare module "gulp-size" {
  declare interface size$Options {
    showFiles?: boolean;
    gzip?: boolean;
    title?: string;
    pretty?: boolean;
    showTotal?: boolean;
  }

  declare type size$SizeStream = {
    size: number,
    prettySize: string
  } & NodeJS.ReadWriteStream;

  declare function size(options?: size$size$Options): size$size$SizeStream;

  declare module.exports: typeof size;
}
