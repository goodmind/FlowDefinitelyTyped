declare module "postcss-modules-resolve-imports" {
  import type { Plugin } from "postcss";

  declare interface resolveImports$Resolve {
    alias?: {
      [alias: string]: string
    };
    extensions?: string[];
    modules?: string[];
    mainFile?: string;
    preserveSymlinks?: boolean;
  }

  declare interface resolveImports$Options {
    icssExports?: boolean;
    resolve?: resolveImports$Resolve;
  }

  declare type resolveImports$ResolveImports = Plugin<resolveImports$Options>;
  declare var resolveImports: resolveImports$resolveImports$ResolveImports;
  declare module.exports: typeof resolveImports;
}
