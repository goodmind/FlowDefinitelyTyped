declare module "css-modules-loader-core" {
  import type { Plugin } from "postcss";

  declare type Core$Source =
    | string
    | {
        toString(): string
      };

  declare type Core$PathFetcher = (
    file: string,
    relativeTo: string,
    depTrace: string
  ) => void;

  declare interface Core$ExportTokens {
    [index: string]: string;
  }

  declare interface Core$Result {
    injectableSource: string;
    exportTokens: Core$ExportTokens;
  }
  declare class Core {
    static values: Plugin<{}>;
    static localByDefault: Plugin<{}>;
    static extractImports: Plugin<{}>;
    static scope: Plugin<{}>;
    static defaultPlugins: Array<Plugin<{}>>;
    constructor(plugins?: Array<Plugin<any>>): this;
    load(
      source: Core$Source,
      sourcePath?: string,
      trace?: string,
      pathFetcher?: Core$PathFetcher
    ): Promise<Core$Result>;
  }
  declare export default typeof Core;
}
