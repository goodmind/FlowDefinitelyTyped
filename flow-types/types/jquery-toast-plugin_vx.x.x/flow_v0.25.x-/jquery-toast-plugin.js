declare module "jquery-toast-plugin" {
  declare interface JQueryStatic {
    toast(options: toastOptions): void;
  }
  declare interface toastOptions {
    text: string;
    heading?: string;
    showHideTransition?: "fade" | "slide" | "plain";
    allowToastClose?: boolean;
    hideAfter?: number | false;
    loader?: boolean;
    loaderBg?: string;
    stack?: number | false;
    position?:
      | "bottom-left"
      | "bottom-right"
      | "bottom-center"
      | "top-right"
      | "top-left"
      | "top-center"
      | "mid-center"
      | CustomPosition;
    bgColor?: string;
    textColor?: string;
    textAlign?: "left" | "right" | "center";
    icon?: "info" | "warning" | "error" | "success";
    beforeShow?: () => any;
    afterShown?: () => any;
    beforeHide?: () => any;
    afterHidden?: () => any;
  }
  declare interface CustomPosition {
    left: number | "auto";
    right: number | "auto";
    top: number | "auto";
    bottom: number | "auto";
  }
}
