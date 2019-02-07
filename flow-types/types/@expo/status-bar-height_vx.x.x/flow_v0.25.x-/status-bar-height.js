declare module "@expo/status-bar-height" {
  declare export type StatusBarHeightHandler = (height: number) => void;
  declare export class StatusBarHeight {
    /**
     * Get the current status bar height
     */
    getAsync(): Promise<number>;

    /**
     * Add 'willChange' event listener
     */
    addEventListener(handler: StatusBarHeightHandler): void;

    /**
     * Remove 'willChange' event listener
     */
    removeEventListener(handler: StatusBarHeightHandler): void;
  }
  declare var StatusBarHeightStatic: StatusBarHeight;
  declare export default typeof StatusBarHeightStatic;
}
