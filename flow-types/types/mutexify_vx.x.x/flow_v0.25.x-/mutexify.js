declare module "mutexify" {
  declare interface Lock {
    (fn: Release): number;
    locked: boolean;
  }
  declare type Release = (
    cb: (err?: any, value?: any) => any,
    err: any,
    value: any
  ) => void;
  declare function mutexify(): Lock;

  declare module.exports: typeof mutexify;
}
