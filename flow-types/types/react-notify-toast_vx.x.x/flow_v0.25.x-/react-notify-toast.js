declare module "react-notify-toast" {
  import typeof * as React from "react";

  declare interface reactNotifyToastColor {
    background: string;
    text: string;
  }
  declare class reactNotifyToast {
    show(
      text: string,
      type?: "success" | "error" | "warning" | "custom",
      timeout?: number,
      color?: reactNotifyToastColor
    ): void;
    hide(): void;
    createShowQueue(): reactNotifyToast;
  }
  declare interface Options {
    wrapperId?: string;
    animationDuration?: number;
    timeout?: number;
    zIndex?: number;
    top?: number | string;
    colors?: any;
  }
  declare interface NotificationProps {
    options?: Options;
  }
  declare export class Notification
    mixins React.Component<NotificationProps, any> {}
  declare export var notify: reactNotifyToast;
  declare export default typeof Notification;
}
