declare module "jquery.tinyscrollbar" {
  declare export interface JQueryTinyScrollbar$JQueryTinyScrollbarOptions {
    /**
     * Enable mobile invert style scrolling. (default: false)
     */
    invertscroll?: boolean;

    /**
     * Vertical or horizontal scroller? 'x' or 'y'. (default: 'x')
     */
    axis?: string;

    /**
     * How many pixels must the mouswheel scrolls at a time. (default: 40)
     */
    wheel?: number;

    /**
     * Enable or disable the mousewheel. (default: true)
     */
    scroll?: boolean;

    /**
     * Return scrollwheel event to browser if there is no more content. (default: true)
     */
    lockscroll?: boolean;

    /**
     * Set the size of the scrollbar to auto or a fixed number. (default: 'auto')
     */
    size?: any;

    /**
     * Set the size of the thumb to auto or a fixed number. (default: 'auto')
     */
    sizethumb?: any;
  }
  declare interface JQuery {
    /**
     * Creates a new tinyscrollbar with the specified, or default, options.
     * @param options The options
     */
    tinyscrollbar(
      options?: JQueryTinyScrollbar$JQueryTinyScrollbar$JQueryTinyScrollbarOptions
    ): JQuery;

    /**
     * Updates an existing tinyscrollbar with the specified, or default, options.
     * @param options The options
     */
    tinyscrollbar_update(options?: any): JQuery;
  }
}
