declare module "sanitize-filename" {
  declare function sanitize(
    filename: string,
    options?: sanitize$sanitize$Options
  ): string;

  declare interface sanitize$Options {
    replacement: string;
  }
  declare module.exports: typeof sanitize;
}
