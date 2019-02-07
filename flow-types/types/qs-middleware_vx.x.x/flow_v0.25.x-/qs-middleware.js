declare module "qs-middleware" {
  declare function qsMiddleware(
    options?: qs.IParseOptions
  ): express.RequestHandler;

  declare module.exports: typeof qsMiddleware;
}
