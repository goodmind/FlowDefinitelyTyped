declare module "random-obj-prop" {
  declare module.exports: typeof randomObjProp;

  declare function randomObjProp<T>(input: {
    [key: string]: T
  }): T;
}
