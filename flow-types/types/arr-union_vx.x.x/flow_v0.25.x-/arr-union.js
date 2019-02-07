declare module "arr-union" {
  declare function union<T>(...arrays: Array<ArrayLike<T>>): T[];

  declare module.exports: typeof union;
}
