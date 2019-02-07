declare module "electron-debug" {
  /**
   * Install keyboard shortcuts and optionally activate DevTools on each
   * created BrowserWindow.
   */
  declare function electronDebug(options: {
    /**
     * Enable debug options.
     */
    enabled?: boolean,

    /**
     * Show DevTools on each created BrowserWindow.
     */
    showDevTools?: boolean | "right" | "bottom" | "undocked"
  }): void;

  declare module.exports: typeof electronDebug;
}
