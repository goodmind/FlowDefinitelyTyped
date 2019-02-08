declare module "global" {
  declare interface JQuery {
    focusable(options?: Options): JQuery;
  }
}
declare module "jquery-focusable" {
  declare export type Options = $Shape<{
    /**
     * Find elements with tabindex equal to -1
     */
    findNegativeTabindex: boolean,

    /**
     * Find elements with tabindex greater than 0
     */
    findPositiveTabindex: true
  }>;
}
