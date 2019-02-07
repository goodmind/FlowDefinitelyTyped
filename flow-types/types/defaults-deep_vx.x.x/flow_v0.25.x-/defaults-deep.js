declare module "defaults-deep" {
  declare interface Obj {
    [k: string]: any;
  }
  declare function defaultsDeep(...objs: Obj[]): Obj;

  declare module.exports: typeof defaultsDeep;
}
