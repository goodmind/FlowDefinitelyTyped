declare module "global" {
  declare interface JQuery {
    loadingOverlay(options?: Options): JQuery;
    loadingOverlay(method: "remove", options?: Options): JQuery;
  }
}
declare module "jquery-loading-overlay" {
  declare export type Options = $Shape<{
    /**
     * Class added to target while loading
     */
    loadingClass: string,

    /**
     * Class added to overlay (style with CSS)
     */
    overlayClass: string,

    /**
     * Class added to loading overlay spinner
     */
    spinnerClass: string,

    /**
     * Class added to loading overlay spinner
     */
    iconClass: string,

    /**
     * Class added to loading overlay spinner
     */
    textClass: string,

    /**
     * Text within loading overlay
     */
    loadingText: string
  }>;
}
