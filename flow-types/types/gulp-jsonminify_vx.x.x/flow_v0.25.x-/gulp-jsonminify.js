declare module "gulp-jsonminify" {
  declare function jsonminify(): NodeJS.ReadWriteStream;

  declare module.exports: typeof jsonminify;
}
