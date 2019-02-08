declare module "global" {
  declare interface JQuery {
    gray(options?: Options): JQuery;
    toggleClass(className: "grayscale-off"): JQuery;
  }
}
declare module "jquery-gray" {
  declare export type Classes = $Shape<{
    fade: string
  }>;
  declare export type Options = $Shape<{
    fade: boolean,
    classes: Classes
  }>;
}
