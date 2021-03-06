declare module "jquery.notifybar" {
  declare interface JQueryNotifyBar$NotifyBarOptions {
    /**
     * What text will be inside bar. Can be HTML or just text.
     */
    html?: string;

    /**
     * How long bar will be delayed, doesn't count animation time.
     */
    delay?: number;

    /**
     * How long this bar will be slided up and down.
     *
     * Default: "normal"
     */
    animationSpeed?: string | number;

    /**
     * Custom jQuery object for notify bar.
     */
    jqObject?: JQuery;

    /**
     * You can define own CSS class for Notify bar. There are too premade classes "error", "warning" and "success".
     */
    cssClass?: string;

    /**
     * If set to true close button will be displayed.
     */
    close?: boolean;

    /**
     * Sets the text to close button.
     */
    closeText?: string;

    /**
     * If enabled, user can hide notify bar just by click on it.
     */
    closeOnClick?: boolean;

    /**
     * If enabled, user can hide notify bar just by moving mouse cursor on it.
     */
    closeOnOver?: boolean;

    /**
     * Callback on before show.
     */
    onBeforeShow?: () => any;

    /**
     * Callback on show.
     */
    onShow?: () => any;

    /**
     * Callback on before hide.
     */
    onBeforeHide?: () => any;

    /**
     * Callback on hide.
     */
    onHide?: () => any;

    /**
     * Set the position of notify bar. Possible values are "top", "bottom".
     */
    position?: string;
  }

  declare type JQueryNotifyBar$NotifyBarOptionsForAnimationSpeedString = {
    /**
     * How long this bar will be slided up and down. Possible values are "slow", "default", "normal", "fast".
     */
    animationSpeed?: string
  } & JQueryNotifyBar$NotifyBarOptions;

  declare type JQueryNotifyBar$NotifyBarOptionsForAnimationSpeedNumber = {
    /**
     * How long this bar will be slided up and down.
     */
    animationSpeed?: number
  } & JQueryNotifyBar$NotifyBarOptions;

  declare interface JQueryStatic {
    /**
     * Show notify bar.
     * @param options notify bar options
     */
    notifyBar(options?: JQueryNotifyBar$JQueryNotifyBar$NotifyBarOptions): void;
  }
}
