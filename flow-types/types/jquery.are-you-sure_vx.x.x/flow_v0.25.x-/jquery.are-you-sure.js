declare module "jquery.are-you-sure" {
  /**
   * Options available to control dirty form checking
   */
  declare interface AreYouSureOptions {
    /**
     * Message to show when attempting to quit a dirty form without saving
     */
    message?: string;

    /**
     * Class to assign to the form when dirty
     */
    dirtyClass?: string;

    /**
     * Callback when form is found to be dirty - allows control of submit/reset buttons etc
     */
    change?: Function;

    /**
     * Jquery selector to use to find input elements
     */
    fieldSelector?: string;

    /**
     * Make Are-You-Sure "silent" by disabling the warning message
     */
    silent?: boolean;
  }
  declare interface AreYouSure {
    (): JQuery;
    (options: AreYouSureOptions): JQuery;
  }
  declare interface JQuery {
    areYouSure: AreYouSure;
  }
}
