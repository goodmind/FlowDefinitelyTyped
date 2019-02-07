declare module "notifyjs-browser" {
  declare interface NotificationOptions {
    clickToHide: boolean;
    autoHide: boolean;
    autoHideDelay: number;
    arrowShow: boolean;
    arrowSize: number;
    position: string;
    elementPosition: string;
    globalPosition: string;
    style: string;
    className: string;
    showAnimation: string;
    showDuration: number;
    hideAnimation: string;
    hideDuration: number;
    gap: number;
  }
  declare interface JQueryStaticNotify {
    /**
     * notify user
     * @param element a jquery element
     * @param notificationdata global notification data
     * @param options notification options
     */
    (
      element?: any,
      notificationdata?: any,
      options?: NotificationOptions
    ): JQueryStatic;

    /**
     * Add style
     * @param styleName style name
     * @param styleDefinition style definition object
     */
    addStyle(styleName: string, styleDefinition: any): any;

    /**
     * Remove style
     * @param styleName style name
     */
    removeStyle(styleName: string): any;

    /**
     * Get style
     * @param styleName style name
     */
    getStyle(styleName: string): any;

    /**
     * Insert css
     * @param cssText css text to insert
     */
    insertCSS(cssText: string): any;

    /**
     * Set defaults for notifications
     * @param options notification iptions
     */
    defaults(options: NotificationOptions): any;
  }
  declare interface JQueryStatic {
    notify: JQueryStaticNotify;
  }
  declare interface JQueryNotify {
    /**
     * notify user
     * @param element a jquery element
     * @param notificationdata global notification data
     * @param options notification options
     */
    (
      element?: any,
      notificationdata?: any,
      options?: NotificationOptions
    ): JQuery;

    /**
     * Add style
     * @param styleName style name
     * @param styleDefinition style definition object
     */
    addStyle(styleName: string, styleDefinition: any): any;

    /**
     * Remove style
     * @param styleName style name
     */
    removeStyle(styleName: string): any;

    /**
     * Get style
     * @param styleName style name
     */
    getStyle(styleName: string): any;

    /**
     * Insert css
     * @param cssText css text to insert
     */
    insertCSS(cssText: string): any;

    /**
     * Set defaults for notifications
     * @param options notification iptions
     */
    defaults(options: NotificationOptions): any;
  }
  declare interface JQuery {
    notify: JQueryStaticNotify;
  }
}
