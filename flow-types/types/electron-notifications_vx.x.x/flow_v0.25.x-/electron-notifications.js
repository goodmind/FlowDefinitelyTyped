declare var npm$namespace$ElectronNotifications: {
  notify: typeof ElectronNotifications$notify
};
declare interface ElectronNotifications$NotifierOptions {
  /**
   * A message to display under the title.
   */
  message?: string;

  /**
   * The absolute URL of a icon displayed to the left of the text.
   */
  icon?: string;

  /**
   * One or two buttons to display on the right of the notification.
   */
  buttons?: string[];
}

declare class ElectronNotifications$NotificationWindow
  mixins Electron.BrowserWindow {
  /**
   * When the notification was clicked, but not dragged. This usually does the default action, or closes the notification.
   */
  on(event: "clicked", listener: Function): this;

  /**
   * When the notification has been swiped to the right. This usually indiciated the user wants to dismiss the notification.
   */
  on(event: "swipedRight", listener: Function): this;

  /**
   * When any one of the buttons are clicked, it will trigger a buttonClicked event, and pass the text that was clicked to the handler.
   */
  on(event: "buttonClicked", listener: (text: string) => void): this;
  on(event: string, listener: Function): this;
}

/**
 * A node module for sending notifications in electron applications
 */
declare export function ElectronNotifications$notify(
  title: string,
  data?: ElectronNotifications$ElectronNotifications$NotifierOptions
): ElectronNotifications$ElectronNotifications$NotificationWindow;
declare module "electron-notifications" {
  import typeof * as Electron from "electron";

  declare module.exports: typeof ElectronNotifications;
}
