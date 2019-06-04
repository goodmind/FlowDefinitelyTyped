declare module "resolve-options" {
  declare interface Options {
    cwd?: string | ((...args: any[]) => string);
    buffer?: boolean | ((...args: any[]) => boolean);
    read?: boolean | ((...args: any[]) => boolean);
    base?: string | ((...args: any[]) => string);
    since?: Date | number | ((...args: any[]) => Date | number);
    passthrough?: boolean | ((...args: any[]) => boolean);
    allowEmpty?: boolean | ((...args: any[]) => boolean);
    mode?: string | number | ((...args: any[]) => string | number);
    dirMode?: string | number | ((...args: any[]) => string | number);
    overwrite?: boolean | ((...args: any[]) => boolean);
    deep?: boolean | ((...args: any[]) => boolean);
  }
  declare interface ConfigItem {
    type: string | string[];
    default?: any;
  }
  declare interface Resolver {
    resolve: (key: string) => number | string | boolean | Date | void | null;
  }
  declare interface Config {
    [par: string]: ConfigItem;
  }
  declare function createResolver(config: Config, options: Options): Resolver;

  declare export default typeof createResolver;
}
