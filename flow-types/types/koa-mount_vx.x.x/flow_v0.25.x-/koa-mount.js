declare module "koa-mount" {
  declare function mount(app: Koa.Middleware | Koa): Koa.Middleware;

  declare function mount(
    prefix: string,
    app: Koa.Middleware | Koa
  ): Koa.Middleware;

  declare module.exports: typeof mount;
}
