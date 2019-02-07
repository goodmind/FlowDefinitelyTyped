declare module "gulp-autoprefixer" {
  declare interface autoPrefixer$Options {
    browsers?: string[];
    cascade?: boolean;
    remove?: boolean;
  }
  declare function autoPrefixer(
    opts?: autoPrefixer$autoPrefixer$Options
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof autoPrefixer;
}
