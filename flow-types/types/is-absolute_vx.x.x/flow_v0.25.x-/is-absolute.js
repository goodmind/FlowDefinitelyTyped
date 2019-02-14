declare module "is-absolute" {
  declare export default typeof isAbsolute;

  declare function isAbsolute(path: string): boolean;

  declare var npm$namespace$isAbsolute: {
    posix: typeof isAbsolute$posix,
    win32: typeof isAbsolute$win32
  };
  declare function isAbsolute$posix(path: string): boolean;

  declare function isAbsolute$win32(path: string): boolean;
}
