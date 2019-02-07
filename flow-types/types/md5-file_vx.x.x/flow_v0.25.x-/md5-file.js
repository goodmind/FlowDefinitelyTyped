declare module "md5-file" {
  declare var module: {
    (filename: string, cb: (err: Error, hash: string) => void): void,
    sync: (filename: string) => string
  };
  declare module.exports: typeof module;
}
