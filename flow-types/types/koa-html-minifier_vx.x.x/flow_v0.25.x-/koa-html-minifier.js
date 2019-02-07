declare module "koa-html-minifier" {
  import type { koaHtmlMinifier$Options as HtmlMinifierOptions } from "html-minifier";

  import type { Middleware } from "koa";

  declare function koaHtmlMinifier(
    options?: koaHtmlMinifier$koaHtmlMinifier$Options
  ): Middleware;

  declare type koaHtmlMinifier$Options = HtmlMinifierOptions;
  declare module.exports: typeof koaHtmlMinifier;
}
