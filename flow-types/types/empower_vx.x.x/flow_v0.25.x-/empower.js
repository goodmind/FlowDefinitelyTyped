declare module "empower" {
  declare function empower(
    originalAssert: any,
    formatter: any,
    options?: empower$empower$Options
  ): any;

  declare module.exports: typeof empower;

  declare export interface empower$Options {
    destructive?: boolean;
    modifyMessageOnRethrow?: boolean;
    saveContextOnRethrow?: boolean;
    patterns?: string[];
  }
}
