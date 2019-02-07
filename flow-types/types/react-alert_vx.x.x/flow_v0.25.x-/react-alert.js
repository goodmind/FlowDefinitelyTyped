declare module "react-alert" {
  import typeof * as React from "react";

  declare export type AlertPosition =
    | "top left"
    | "top right"
    | "top center"
    | "bottom left"
    | "bottom right"
    | "bottom center";
  declare export type AlertType = "info" | "success" | "error";
  declare export type AlertTransition = "fade" | "scale";
  declare export interface ProviderOptions {
    /**
     * The margin of each alert
     *
     * Default value: '10px'
     */
    offset?: string;

    /**
     * The position of the alerts in the page
     *
     * Default value: 'top center'
     */
    position?: AlertPosition;

    /**
     * Timeout to alert remove itself, if  set to 0 it never removes itself
     *
     * Default value: 0
     */
    timeout?: number;

    /**
     * The default alert type used when calling this.props.alert.show
     *
     * Default value: 'info'
     */
    type?: AlertType;

    /**
     * The transition animation
     *
     * Default value: 'fade'
     */
    transition?: AlertTransition;

    /**
     * The z-index of alerts
     *
     * Default value: 100
     */
    zIndex?: number;
  }
  declare export class Provider
    mixins React.Component<
        ProviderOptions & {
          template: React.ComponentType
        }
      > {}
  declare export var Alert: React.Consumer<InjectedAlertProp>;
  declare export interface AlertCustomOptions {
    /**
     * Custom timeout just for this one alert
     */
    timeout?: number;

    /**
     * Callback that will be executed after this alert open
     */
    onOpen?: () => void;

    /**
     * Callback that will be executed after this alert is removed
     */
    onClose?: () => void;
  }
  declare export type AlertCustomOptionsWithType = {
    type?: AlertType
  } & AlertCustomOptions;

  declare export interface InjectedAlertProp {
    show(
      message?: string,
      options?: AlertCustomOptionsWithType
    ): InjectedAlertProp;
    remove(alert: InjectedAlertProp): void;
    success(message?: string, options?: AlertCustomOptions): InjectedAlertProp;
    error(message?: string, options?: AlertCustomOptions): InjectedAlertProp;
    info(message?: string, options?: AlertCustomOptions): InjectedAlertProp;
  }
  declare export function withAlert<
    P: {
      alert: InjectedAlertProp
    }
  >(
    c: React.ComponentType<P>
  ): React.ComponentType<Pick<P, Exclude<$Keys<P>, "alert">>>;
}
