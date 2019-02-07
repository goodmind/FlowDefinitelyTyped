declare module "strip-indent" {
  declare module.exports: typeof stripIndent;

  declare function stripIndent(str: string): string;
}
