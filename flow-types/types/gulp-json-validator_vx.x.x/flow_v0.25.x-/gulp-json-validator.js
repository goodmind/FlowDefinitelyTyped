declare module "gulp-json-validator" {
  declare interface GulpJsonValidatorOptions {
    allowDuplicatedKeys?: boolean;
  }
  declare function gulpJsonValidator(
    option?: GulpJsonValidatorOptions
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof gulpJsonValidator;
}
