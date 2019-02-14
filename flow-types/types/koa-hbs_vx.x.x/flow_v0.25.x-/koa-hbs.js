declare module "koa" {
  declare export interface Context {
    render(
      tpl: string,
      locals?: {
        [key: string]: any
      }
    ): Promise<void>;
  }
}
declare module "koa-hbs" {
  import typeof * as Koa from "koa";

  import typeof * as Handlebars from "handlebars";

  declare export interface Hbs$Middleware {
    viewPath: Array<string> | string;
    handlebars?: Function;
    templateOptions?: {};
    extname?: string;
    partialsPath?: Array<string> | string;
    defaultLayout?: string;
    layoutsPath?: string;
    contentHelperName?: string;
    blockHelperName?: string;
    disableCache?: boolean;
  }
  declare class Hbs {
    constructor(): this;
    middleware(opts: Hbs$Middleware): any;
    registerHelper: typeof Handlebars.registerHelper;
    SafeString: typeof Handlebars.SafeString;
    Utils: typeof Handlebars.Utils;
  }
  declare var hbs: Hbs;
  declare export default typeof hbs;
}
