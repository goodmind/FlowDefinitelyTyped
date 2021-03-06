declare module "jquery.rowgrid" {
  declare interface JQueryRowGridJSOptions {
    minMargin?: number;
    maxMargin?: number;
    itemSelector: string;
  }
  declare interface JQuery {
    rowGrid(options?: JQueryRowGridJSOptions): JQuery;
    rowGrid(appended: string): JQuery;
  }
}
