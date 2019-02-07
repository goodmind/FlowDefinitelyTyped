declare module "builtin-modules" {
  declare var builtinModules: $ReadOnlyArray<string>;
  declare module.exports: typeof builtinModules;
}
