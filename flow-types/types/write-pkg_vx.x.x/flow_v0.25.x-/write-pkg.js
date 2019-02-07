declare module "write-pkg" {
  declare interface WritePkg {
    (
      path: string,
      data: {
        [k: string]: any
      }
    ): Promise<void>;
    (data: {
      [k: string]: any
    }): Promise<void>;
    sync(
      path: string,
      data: {
        [k: string]: any
      }
    ): void;
    sync(data: {
      [k: string]: any
    }): void;
  }
  declare var writePkg: WritePkg;
  declare module.exports: typeof writePkg;
}
