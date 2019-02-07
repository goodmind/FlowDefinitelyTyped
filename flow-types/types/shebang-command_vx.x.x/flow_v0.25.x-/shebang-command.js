declare module "shebang-command" {
  declare module.exports: typeof shebangCommand;

  declare function shebangCommand(str: string): string | null;
}
