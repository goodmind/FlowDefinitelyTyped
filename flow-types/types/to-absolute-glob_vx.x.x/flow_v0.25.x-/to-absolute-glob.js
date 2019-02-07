declare module "to-absolute-glob" {
  declare function toAbsoluteGlob(
    pattern: string,
    options?: toAbsoluteGlob$toAbsoluteGlob$Options
  ): string;

  declare interface toAbsoluteGlob$Options {
    cwd?: string;
    root?: string;
  }
  declare module.exports: typeof toAbsoluteGlob;
}
