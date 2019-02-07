declare module "define-lazy-prop" {
  declare module.exports: typeof defineLazyProp;

  declare function defineLazyProp<O: { [key: string]: any }, P: string, T>(
    obj: O,
    prop: P,
    fn: () => T
  ): O & $ObjMapi<{ [k: P]: any }, <K>(K) => T>;
}
