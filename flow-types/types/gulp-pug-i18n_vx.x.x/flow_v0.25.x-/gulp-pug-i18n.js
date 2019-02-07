declare module "gulp-pug-i18n" {
  import type { gulpPugI18n$Options as PugOptions } from "pug";

  import type { Transform } from "stream";

  declare function gulpPugI18n(
    options: gulpPugI18n$gulpPugI18n$Options
  ): Transform;

  declare type gulpPugI18n$Options = {
    data?: any,
    i18n: {
      default?: string,
      filename?: string,
      locales: string | $ReadOnlyArray<string>,
      namespace?: string | null
    }
  } & PugOptions;

  declare module.exports: typeof gulpPugI18n;
}
