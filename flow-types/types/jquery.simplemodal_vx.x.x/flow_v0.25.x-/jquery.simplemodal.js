declare module "jquery.simplemodal" {
  declare interface SimpleModal$SimpleModalOptions {
    /**
     * The jQuery selector to append the elements to. For ASP.NET, use 'form'. Default: 'body'.
     */
    appendTo?: string;

    /**
     * Focus in the first visible, enabled element? Default: true.
     */
    focus?: boolean;

    /**
     * The opacity value for the overlay div, from 0 - 100. Default: 50.
     */
    opacity?: number;

    /**
     * The DOM element id for the overlay div. Default: 'simplemodal-overlay'.
     */
    overlayId?: string;

    /**
     * The CSS styling for the overlay div. Default: {}.
     */
    overlayCss?: Object;

    /**
     * The DOM element id for the container div. Default: 'simplemodal-container'.
     */
    containerId?: string;

    /**
     * The CSS styling for the container div. Default: {}.
     */
    containerCss?: Object;

    /**
     * The DOM element id for the data div. Default: 'simplemodal-data'.
     */
    dataId?: string;

    /**
     * The CSS styling for the data div. Default: {}.
     */
    dataCss?: Object;

    /**
     * The minimum height for the container. Default: null.
     */
    minHeight?: number;

    /**
     * The minimum width for the container. Default: null.
     */
    minWidth?: number;

    /**
     * The maximum height for the container. If not specified, the window height is used. Default: null.
     */
    maxHeight?: number;

    /**
     * The maximum width for the container. If not specified, the window width is used. Default: null.
     */
    maxWidth?: number;

    /**
     * Resize the container if it exceeds the browser window dimensions? Default: false. (Changed in 1.4)
     */
    autoResize?: boolean;

    /**
     * Automatically position the container upon creation and on window resize? Default: true. (Changed in 1.4)
     */
    autoPosition?: boolean;

    /**
     * Starting z-index value. Default: 1000.
     */
    zIndex?: number;

    /**
     * If true, closeHTML, escClose and overlayClose will be used if set. If false, none of them will be used. Default: true.
     */
    close?: boolean;

    /**
     * The HTML for the default close link. SimpleModal will automatically add the closeClass to this element. Default: ''.
     */
    closeHTML?: string;

    /**
     * The CSS class used to bind to the close event. Default: 'simplemodal-close'.
     */
    closeClass?: string;

    /**
     * Allow Esc keypress to close the dialog? Default: true.
     */
    escClose?: boolean;

    /**
     * Allow click on overlay to close the dialog? Default: false.
     */
    overlayClose?: boolean;

    /**
     * Position of container [top, left]. Can be number of pixels or percentage. Default: null.
     */
    position?: Array<any>;

    /**
     * Persist the data across modal calls? Only used for existing DOM elements. If true, the data will be maintained across modal calls, if false, the data will be reverted to its original state. Default: true.
     */
    persist?: boolean;

    /**
     * User will be unable to interact with the page below the modal or tab away from the dialog. If false, the overlay, iframe, and certain events will be disabled allowing the user to interact with the page below the dialog. Default: true. (Added in 1.3.4. Name changed from transient in 1.3.5)
     */
    modal?: boolean;

    /**
     * The callback function used in place of SimpleModal's open. Default: null.
     */
    onOpen?: (dialog: SimpleModal$SimpleModalDialog) => void;

    /**
     * The callback function used after the modal dialog has opened. Default: null.
     */
    onShow?: (dialog: SimpleModal$SimpleModalDialog) => void;

    /**
     * The callback function used in place of SimpleModal's close. Default: null.
     */
    onClose?: (dialog: SimpleModal$SimpleModalDialog) => void;
  }

  /**
   * Sent to callbacks as a parameter.
   */
  declare interface SimpleModal$SimpleModalDialog {
    overlay: JQuery;
    container: JQuery;
    data: any;
    iframe: JQuery;
  }

  declare interface SimpleModal$Static {
    defaults: SimpleModal$SimpleModalOptions;
    (element: JQuery, options?: SimpleModal$SimpleModalOptions): JQuery;
    (html: string, options?: SimpleModal$SimpleModalOptions): JQuery;
    close(): void;
  }

  declare interface SimpleModal$JQueryExtension {
    (options?: SimpleModal$SimpleModalOptions): JQuery;
  }
  declare interface JQueryStatic {
    modal: SimpleModal$SimpleModal$Static;
  }
  declare interface JQuery {
    modal: SimpleModal$SimpleModal$JQueryExtension;
  }
}
