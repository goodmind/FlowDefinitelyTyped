declare module "arr-diff" {
  declare module.exports: typeof arrDiff;

  declare function arrDiff<T>(first: T[], ...args: any[][]): T[];
}
