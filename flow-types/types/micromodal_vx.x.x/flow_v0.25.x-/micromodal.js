declare module "micromodal" {
  /**
   * MicroModal configuration options
   */
  declare export interface MicroModalConfig {
    /**
     * This is fired when the modal is opening.
     */
    onShow?: (modal?: HTMLElement) => void;

    /**
     * This is fired when the modal is closing.
     */
    onClose?: (modal?: HTMLElement) => void;

    /**
     * Custom data attribute to open modal. Default is data-micromodal-trigger.
     */
    openTrigger?: string;

    /**
     * Custom data attribute to close modal. Default is data-micromodal-close.
     */
    closeTrigger?: string;

    /**
     * This disables scrolling on the page while the modal is open. The default value is false.
     */
    disableScroll?: boolean;

    /**
     * Disable auto focus on first focusable element. Default is false
     */
    disableFocus?: boolean;

    /**
     * Set this to true if using css animations to hide the modal. This allows it to wait for the animation to
     * finish before removing it from the DOM. Default is false
     */
    awaitCloseAnimation?: boolean;

    /**
     * This option suppresses the console warnings if passed as true. The default value is false.
     */
    debugMode?: boolean;
  }

  declare var npm$namespace$MicroModal: {
    init: typeof MicroModal$init,
    show: typeof MicroModal$show,
    close: typeof MicroModal$close
  };

  /**
   * Binds click handlers to all modal triggers
   * @param config configuration options
   */
  declare function MicroModal$init(config?: MicroModalConfig): void;

  /**
   * Shows a particular modal
   * @param targetModal The id of the modal to display
   * @param config configuration options
   */
  declare function MicroModal$show(
    targetModal: string,
    config?: MicroModalConfig
  ): void;

  /**
   * Closes the active modal
   */
  declare function MicroModal$close(): void;

  declare export default typeof MicroModal;
}
