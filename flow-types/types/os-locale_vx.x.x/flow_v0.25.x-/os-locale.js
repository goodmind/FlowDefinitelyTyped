declare module "os-locale" {
  declare export default typeof osLocale;

  declare function osLocale(options?: osLocale$Options): Promise<string>;

  declare var npm$namespace$osLocale: {
    sync: typeof osLocale$sync
  };
  declare function osLocale$sync(options?: osLocale$Options): string;

  declare interface osLocale$Options {
    spawn?: boolean;
  }
}
