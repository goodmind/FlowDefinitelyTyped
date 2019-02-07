declare module "express-less" {
  declare function less(
    root: string,
    options?: less$less$Options
  ): express.RequestHandler;

  declare export interface less$Options {
    debug?: boolean;
    compress?: boolean;
  }
  declare module.exports: typeof less;
}
