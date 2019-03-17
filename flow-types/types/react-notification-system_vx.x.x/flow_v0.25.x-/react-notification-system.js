declare module "react-notification-system" {
  import typeof * as React from "react";

  declare export type NotificationSystem$System = {
    addNotification(
      notification: NotificationSystem$Notification
    ): NotificationSystem$Notification,
    removeNotification(
      uidOrNotification: number | string | NotificationSystem$Notification
    ): void,
    clearNotifications(): void,
    editNotification(
      uidOrNotification: number | string | NotificationSystem$Notification,
      newNotification: NotificationSystem$Notification
    ): void
  } & React.Component<NotificationSystem$Attributes, NotificationSystem$State>;

  declare export type NotificationSystem$CallBackFunction = (
    notification: NotificationSystem$Notification
  ) => void;

  declare export interface NotificationSystem$Notification {
    title?: string | React$Node;
    message?: string | React$Node;
    level?: "error" | "warning" | "info" | "success";
    position?: "tr" | "tl" | "tc" | "br" | "bl" | "bc";
    autoDismiss?: number;
    dismissible?: boolean;
    action?: NotificationSystem$ActionObject;
    children?: React.Node;
    onAdd?: NotificationSystem$CallBackFunction;
    onRemove?: NotificationSystem$CallBackFunction;
    uid?: number | string;
  }

  declare export interface NotificationSystem$ActionObject {
    label: string;
    callback?: () => void;
  }

  declare export interface NotificationSystem$ContainersStyle {
    DefaultStyle: React.CSSProperties;
    tl?: React.CSSProperties;
    tr?: React.CSSProperties;
    tc?: React.CSSProperties;
    bl?: React.CSSProperties;
    br?: React.CSSProperties;
    bc?: React.CSSProperties;
  }

  declare export interface NotificationSystem$ItemStyle {
    DefaultStyle?: React.CSSProperties;
    success?: React.CSSProperties;
    error?: React.CSSProperties;
    warning?: React.CSSProperties;
    info?: React.CSSProperties;
  }

  declare export interface NotificationSystem$WrapperStyle {
    DefaultStyle?: React.CSSProperties;
  }

  declare export interface NotificationSystem$Style {
    Wrapper?: any;
    Containers?: NotificationSystem$ContainersStyle;
    NotificationItem?: NotificationSystem$ItemStyle;
    Title?: NotificationSystem$ItemStyle;
    MessageWrapper?: NotificationSystem$WrapperStyle;
    Dismiss?: NotificationSystem$ItemStyle;
    Action?: NotificationSystem$ItemStyle;
    ActionWrapper?: NotificationSystem$WrapperStyle;
  }

  declare export type NotificationSystem$Attributes = {
    noAnimation?: boolean,
    style?: NotificationSystem$Style | boolean,
    allowHTML?: boolean
  } & React.ClassAttributes<NotificationSystem$System>;

  declare export interface NotificationSystem$State {
    notifications: NotificationSystem$Notification[];
  }
  declare var NotificationSystem: React.ClassicComponentClass<NotificationSystem$Attributes>;
  declare export default typeof NotificationSystem;
}
