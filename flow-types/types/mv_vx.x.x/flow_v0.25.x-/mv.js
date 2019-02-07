declare module "mv" {
  declare interface Options {
    mkdirp?: boolean;
    clobber?: boolean;
  }
  declare interface Mv {
    (
      src: string,
      dest: string,
      options: Options,
      callback: (error: any) => void
    ): void;
    (src: string, dest: string, callback: (error: any) => void): void;
  }
  declare var inst: Mv;
  declare module.exports: typeof inst;
}
