declare module "alertify" {
  declare var alertify: alertify$alertify$IAlertifyStatic;
  declare interface alertify$IAlertifyStatic {
    /**
     * Create an alert dialog box
     * @param message The message passed from the callee
     * @param fn Callback function
     * @param cssClass Class(es) to append to dialog box
     * @return alertify (ie this)
     * @since 0.0.1
     */
    alert(
      message: string,
      fn?: Function,
      cssClass?: string
    ): alertify$IAlertifyStatic;

    /**
     * Create a confirm dialog box
     * @param message The message passed from the callee
     * @param fn Callback function
     * @param cssClass Class(es) to append to dialog box
     * @return alertify (ie this)
     * @since 0.0.1
     */
    confirm(
      message: string,
      fn?: Function,
      cssClass?: string
    ): alertify$IAlertifyStatic;

    /**
     * Extend the log method to create custom methods
     * @param type Custom method name
     * @return function for logging
     * @since 0.0.1
     */
    extend(
      type: string
    ): (message: string, wait?: number) => alertify$IAlertifyStatic;

    /**
     * Initialize Alertify and create the 2 main elements.
     * Initialization will happen automatically on the first
     * use of alert, confirm, prompt or log.
     * @since 0.0.1
     */
    init(): void;

    /**
     * Show a new log message box
     * @param message The message passed from the callee
     * @param type Optional type of log message
     * @param wait Optional time (in ms) to wait before auto-hiding
     * @return alertify (ie this)
     * @since 0.0.1
     */
    log(
      message: string,
      type?: string,
      wait?: number
    ): alertify$IAlertifyStatic;

    /**
     * Create a prompt dialog box
     * @param message The message passed from the callee
     * @param fn Callback function
     * @param placeholder Default value for prompt input
     * @param cssClass Class(es) to append to dialog
     * @return alertify (ie this)
     * @since 0.0.1
     */
    prompt(
      message: string,
      fn?: Function,
      placeholder?: string,
      cssClass?: string
    ): alertify$IAlertifyStatic;

    /**
     * Shorthand for log messages
     * @param message The message passed from the callee
     * @return alertify (ie this)
     * @since 0.0.1
     */
    success(message: string): alertify$IAlertifyStatic;

    /**
     * Shorthand for log messages
     * @param message The message passed from the callee
     * @return alertify (ie this)
     * @since 0.0.1
     */
    error(message: string): alertify$IAlertifyStatic;

    /**
     * Used to set alertify properties
     * @param Properties
     * @since 0.2.11
     */
    set(args: alertify$IProperties): void;

    /**
     * The labels used for dialog buttons
     */
    labels: alertify$ILabels;

    /**
     * Attaches alertify.error to window.onerror method
     * @since 0.3.8
     */
    debug(): void;
  }

  /**
   * Properties for alertify.set function
   */
  declare interface alertify$IProperties {
    /**
     * Default value for milliseconds display of log messages
     */
    delay?: number;

    /**
     * Default values for display of labels
     */
    labels?: alertify$ILabels;

    /**
     * Default button for focus
     */
    buttonFocus?: string;

    /**
     * Should buttons be displayed in reverse order
     */
    buttonReverse?: boolean;
  }

  /**
   * Labels for altertify.set function
   */
  declare interface alertify$ILabels {
    ok?: string;
    cancel?: string;
  }
}
