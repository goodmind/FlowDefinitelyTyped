declare module "snakecase-keys" {
  declare module.exports: typeof snakecaseKeys;

  declare function snakecaseKeys(
    obj: { [key: string]: any },
    options?: snakecaseKeys$snakecaseKeys$Options
  ): {
    [key: string]: any
  };

  declare interface snakecaseKeys$Options {
    deep?: boolean;
    exclude?: Array<string | RegExp>;
  }
}
