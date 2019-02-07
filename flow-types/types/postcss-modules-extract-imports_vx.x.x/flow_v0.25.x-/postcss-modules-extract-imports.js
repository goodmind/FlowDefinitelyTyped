declare module "postcss-modules-extract-imports" {
  import type { Plugin } from "postcss";

  declare interface extractImports$Options {
    failOnWrongOrder?: boolean;
    createImportedName?: (importName: string, importPath: string) => string;
  }

  declare type extractImports$ExtractImports = Plugin<extractImports$Options>;
  declare var extractImports: extractImports$extractImports$ExtractImports;
  declare module.exports: typeof extractImports;
}
