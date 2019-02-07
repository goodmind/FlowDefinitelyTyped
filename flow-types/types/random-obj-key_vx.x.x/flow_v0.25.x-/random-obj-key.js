declare module "random-obj-key" {
  declare module.exports: typeof randomObjKey;

  declare function randomObjKey<
    TObj: {
      [key: string]: any
    }
  >(
    input: TObj
  ): $Keys<TObj>;
}
