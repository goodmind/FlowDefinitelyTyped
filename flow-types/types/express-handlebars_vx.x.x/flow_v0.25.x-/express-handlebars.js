declare interface PartialTemplateOptions {
  cache?: boolean;
  precompiled?: boolean;
}
declare interface RenderOptions {
  cache?: boolean;
  data?: Object;
  helpers?: any;
  partials?: any;
}
declare interface ExphbsOptions {
  handlebars?: any;
  extname?: string;
  layoutsDir?: string;
  partialsDir?: any;
  defaultLayout?: string;
  helpers?: any;
  compilerOptions?: any;
}
declare interface Exphbs {
  engine: Function;
  extname: string;
  compiled: Object;
  precompiled: Object;
  create(options?: ExphbsOptions): Exphbs;
  getPartials(options?: PartialTemplateOptions): Promise<Object>;
  getTemplate(
    filePath: string,
    options?: PartialTemplateOptions
  ): Promise<Function>;
  getTemplates(
    dirPath: string,
    options?: PartialTemplateOptions
  ): Promise<Object>;
  render(
    filePath: string,
    context: Object,
    options?: RenderOptions
  ): Promise<string>;
  renderView(
    viewPath: string,
    optionsOrCallback: any,
    callback?: () => string
  ): void;
}
declare interface ExpressHandlebars {
  (options?: ExphbsOptions): Function;
  create(options?: ExphbsOptions): Exphbs;
}
declare module "express-handlebars" {
  declare var exphbs: ExpressHandlebars;
  declare module.exports: typeof exphbs;
}
