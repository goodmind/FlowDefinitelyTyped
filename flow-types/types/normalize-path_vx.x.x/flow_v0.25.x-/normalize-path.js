declare module "normalize-path" {
  declare module.exports: typeof normalizePath;

  declare function normalizePath(path: string, stripTrailing?: boolean): string;
}
