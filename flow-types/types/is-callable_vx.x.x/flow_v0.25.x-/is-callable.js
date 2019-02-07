declare module "is-callable" {
  declare function isCallable(val: any): boolean;

  declare module.exports: typeof isCallable;
}
