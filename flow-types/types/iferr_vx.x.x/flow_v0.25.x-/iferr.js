declare module "iferr" {
  declare type nodeCallback<T> = (err: Error | void, ...a: T[]) => any;
  declare function iferr<T>(
    fail: (err: Error) => void,
    succ: (...result: T[]) => void
  ): nodeCallback<T>;

  declare var npm$namespace$iferr: {
    iferr: typeof iferr$iferr,
    tiferr: typeof iferr$tiferr,
    throwerr: typeof iferr$throwerr,
    printerr: typeof iferr$printerr
  };
  declare function iferr$iferr<T>(
    fail: (err: Error) => void,
    succ: (...result: T[]) => void
  ): nodeCallback<T>;

  declare function iferr$tiferr<T>(
    fail: (err: Error) => void,
    succ: (...result: T[]) => void
  ): nodeCallback<T>;

  declare function iferr$throwerr<T>(
    succ: (...result: T[]) => void
  ): nodeCallback<T>;

  declare function iferr$printerr(): nodeCallback<any>;

  declare export default typeof iferr;
}
