declare module "os-locale" {
  declare module.exports: typeof osLocale;

  declare function osLocale(
    options?: osLocale$osLocale$Options
  ): Promise<string>;

  declare var npm$namespace$osLocale: {
    sync: typeof osLocale$sync
  };
  declare function osLocale$sync(options?: osLocale$Options): string;

  declare interface osLocale$Options {
    spawn?: boolean;
  }
}
