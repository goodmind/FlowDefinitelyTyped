declare module "jquery-toastmessage-plugin" {
  declare interface JQuery {
    toastmessage: JQueryToastmessage$JQueryToastmessage$ToastmessageStatic;
  }
  declare interface JQueryToastmessage$ToastmessageStatic {
    (command: JQueryToastmessage$ShowToastCommand, message: string): JQuery;

    /**
     * shows a custom toast
     */
    (command: "showToast", toastOpts: JQueryToastmessage$ToastOptions): JQuery;

    /**
     * removes the specified toast and returns it
     */
    (
      command: "removeToast",
      toast: JQuery,
      closeOpts?: JQueryToastmessage$ToastOptions
    ): void;

    /**
     * configures the default toast options
     */
    (toastOpts: JQueryToastmessage$ToastOptions): void;
  }

  declare type JQueryToastmessage$ShowToastCommand =
    | "showNoticeToast"
    | "showSuccessToast"
    | "showWarningToast"
    | "showErrorToast";

  declare type JQueryToastmessage$ToastType =
    | "notice"
    | "warning"
    | "error"
    | "success";

  declare type JQueryToastmessage$ToastPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "middle-left"
    | "middle-center"
    | "middle-right";

  declare interface JQueryToastmessage$ToastOptions {
    /**
     * in effect duration in miliseconds @default 600
     */
    inEffectDuration?: number;

    /**
     * time in miliseconds before the item has to disappear @default 3000
     */
    stayTime?: number;

    /**
     * content of the item @default ''
     */
    text?: string;

    /**
     * should the toast item sticky or not? @default false
     */
    sticky?: boolean;

    /**
     * the type of toast @default 'notice'
     */
    type?: JQueryToastmessage$ToastType;

    /**
     * Position of the toast container holding different toast.
     * Position can be set only once at the very first call,
     * changing the position after the first call does nothing
     * @default 'top-right'
     */
    position?: JQueryToastmessage$ToastPosition;

    /**
     * text which will be shown as close button,
     * set to '' when you want to introduce an image via css
     * @default ''
     */
    closeText?: string;

    /**
     * callback function when the toastmessage is closed @default null
     */
    close?: () => void;
  }
}
