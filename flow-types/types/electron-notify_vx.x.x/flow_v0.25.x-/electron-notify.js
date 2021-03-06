declare module "electron-notify" {
  /**
   * Nice and simple notifications for electron apps
   */
  declare export interface ICustomConfig {
    width?: number;
    height?: number;
    padding?: number;
    borderRadius?: number;
    displayTime?: number;
    animationSteps?: number;
    animationStepMs?: number;
    animateInParallel?: boolean;
    appIcon?: string;
    pathToModule?: string;
    logging?: boolean;
    defaultWindow?: Electron.BrowserWindowConstructorOptions;
    defaultStyleContainer?: any;
    defaultStyleAppIcon?: any;
    defaultStyleImage?: any;
    defaultStyleClose?: any;
    defaultStyleText?: any;
  }
  declare export interface ICloseNotificationEvent {
    event: "close" | "show" | "click";
    id: number;
  }
  declare export type INotificationEvent = {
    closeNotification: (reason: any) => void
  } & ICloseNotificationEvent;

  declare export interface INotification {
    title: string;
    text?: string;
    image?: string;
    url?: string;
    sound?: string;
    onClickFunc?: (event: INotificationEvent) => void;
    onShowFunc?: (event: INotificationEvent) => void;
    onCloseFunc?: (event: ICloseNotificationEvent) => void;
  }

  /**
   * Change some config options. Can be run multiple times, also between notify()-calls to change electron-notifys behaviour.
   */
  declare export function setConfig(customConfig: ICustomConfig): void;

  /**
   * Displays new notification.
   */
  declare export function notify(notification: INotification): void;

  /**
   * Clears the animation queue and closes all windows opened by electron-notify. Call this to clean up before quiting your app.
   */
  declare export function closeAll(): void;

  declare export function getTemplatePath(): string;

  declare export function setTemplatePath(path: string): void;
}
