declare module "dargs" {
  declare module.exports: typeof dargs;

  declare function dargs(
    input: { [key: string]: any },
    options?: dargs$dargs$Options
  ): string[];

  declare interface dargs$Options {
    excludes?: $ReadOnlyArray<string | RegExp>;
    includes?: $ReadOnlyArray<string | RegExp>;
    aliases?: {
      [key: string]: string
    };
    useEquals?: boolean;
    ignoreFalse?: boolean;
    allowCamelCase?: boolean;
  }
}
