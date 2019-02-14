declare module "react-s-alert" {
  import typeof * as React from "react";

  declare class SAlert mixins React.Component<SAlert$SAlertProps> {}

  declare var npm$namespace$SAlert: {
    info: typeof SAlert$info,
    error: typeof SAlert$error,
    warning: typeof SAlert$warning,
    success: typeof SAlert$success,
    close: typeof SAlert$close,
    closeAll: typeof SAlert$closeAll
  };
  declare interface SAlert$SAlertConfigProps {
    position?: string;
    offset?: number;
    stack?: boolean | SAlert$SAlertStackProps;
    effect?: string;
    beep?: string | boolean | SAlert$SAlertBeepProps;
    timeout?: string | number;
    html?: boolean;
    onClose?: () => void;
    onShow?: () => void;
    customFields?: { [key: string]: any };
    contentTemplate?: (...args: any[]) => any;
  }

  declare type SAlert$SAlertProps = {
    message?: string
  } & SAlertConfigProps;

  declare interface SAlert$SAlertStackProps {
    limit?: number;
    spacing?: number;
  }

  declare interface SAlert$SAlertBeepProps {
    info?: string;
    error?: string;
    warning?: string;
    success?: string;
  }

  declare function SAlert$info(
    msg?: string,
    data?: SAlert$SAlertConfigProps
  ): number;

  declare function SAlert$error(
    msg?: string,
    data?: SAlert$SAlertConfigProps
  ): number;

  declare function SAlert$warning(
    msg?: string,
    data?: SAlert$SAlertConfigProps
  ): number;

  declare function SAlert$success(
    msg?: string,
    data?: SAlert$SAlertConfigProps
  ): number;

  declare function SAlert$close(id: number): void;

  declare function SAlert$closeAll(): void;

  declare export default typeof SAlert;
}
