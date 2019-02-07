declare module "nslog" {
  /**
   * Outputs a message to the native console.
   */
  declare type NSLog = (...args: any[]) => void;
  declare var nslog: NSLog;
  declare module.exports: typeof nslog;
}
