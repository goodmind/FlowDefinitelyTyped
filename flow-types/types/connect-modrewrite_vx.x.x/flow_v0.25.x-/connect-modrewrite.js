declare module "connect-modrewrite" {
  declare function modrewrite(rewrites: string[]): express.RequestHandler;

  declare module.exports: typeof modrewrite;
}
