declare module "global" {
  declare interface JQuery {
    animateScroll(options?: Options): JQuery;
    scrollHere(options?: Options): JQuery;
  }
  declare interface JQueryStatic {
    scrollTo(element: JQuery, options?: Options): void;
  }
}
declare module "jquery-animate-scroll" {
  declare export type Options = $Shape<{
    $container: JQuery,
    speed: number,
    offset: number
  }>;
}
