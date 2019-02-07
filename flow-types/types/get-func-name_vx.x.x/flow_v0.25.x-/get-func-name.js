declare module "get-func-name" {
  declare module.exports: typeof getFuncName;

  declare function getFuncName(fn: Function): string;
}
