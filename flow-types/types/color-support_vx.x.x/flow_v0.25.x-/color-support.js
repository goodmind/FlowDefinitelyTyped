declare module "color-support" {
  declare type ColorSupportLevel = 0 | 1 | 2 | 3;
  declare interface ColorSupportOptions {
    alwaysReturn?: boolean;
    env?: NodeJS$ProcessEnv;
    ignoreCI?: boolean;
    ignoreDumb?: boolean;
    ignoreTTY?: boolean;
    level?: ColorSupportLevel;
    stream?: NodeJS$WriteStream;
    term?: string;
  }
  declare interface ColorSupportResult {
    level: ColorSupportLevel;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
  }
  declare type ColorSupport = (
    options?: ColorSupportOptions,
    obj?: ColorSupportResult
  ) => false | ColorSupportResult;
  declare var colorSupport: ColorSupport;
  declare export default typeof colorSupport;
}
