declare module "escape-regexp" {
  declare function escapeRegExp(str: string): string;

  declare module.exports: typeof escapeRegExp;
}
