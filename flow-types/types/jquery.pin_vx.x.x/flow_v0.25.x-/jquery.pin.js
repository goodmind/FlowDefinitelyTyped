declare module "global" {
  declare interface JQuery {
    pin(options?: Options): JQuery;
  }
}
declare module "jquery.pin" {
  declare export interface Options {
    minWidth?: number;
    activeClass?: string;
    containerSelector?: string;
    padding?: {
      top?: number,
      bottom?: number
    };
  }
}
