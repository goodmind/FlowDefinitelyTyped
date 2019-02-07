declare module "is-function" {
  declare module.exports: typeof isFunction;

  declare function isFunction(fn: any): boolean;
}
