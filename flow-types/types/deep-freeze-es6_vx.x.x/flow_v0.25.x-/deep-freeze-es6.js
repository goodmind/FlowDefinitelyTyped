declare module "deep-freeze-es6" {
  declare export default typeof deepFreeze;

  declare function deepFreeze<T>(obj: T): T;

  declare var npm$namespace$deepFreeze: {
    prototype: typeof deepFreeze$prototype
  };
  declare var deepFreeze$prototype: {};
}
