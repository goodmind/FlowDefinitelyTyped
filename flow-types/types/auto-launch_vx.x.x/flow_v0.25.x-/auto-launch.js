declare module "auto-launch" {
  declare interface AutoLaunchOptions {
    /**
     * Application name.
     */
    name: string;

    /**
     * Path to application. Default is `process.execPath`.
     */
    path?: string;

    /**
     * Hidden on launch. Default is `false`.
     */
    isHidden?: boolean;

    /**
     * For Mac-only options.
     */
    mac?: {
      /**
       * By default, AppleScript is used to add a Login Item. If this is `true`, Launch Agent will be used to auto-launch your app. Defaults is `false`.
       */
      useLaunchAgent?: boolean
    };
  }
  declare class AutoLaunch {
    constructor(options: AutoLaunchOptions): this;

    /**
     * Enables auto-launch at start up.
     */
    enable(): Promise<void>;

    /**
     * Disables auto-launch at start up.
     */
    disable(): Promise<void>;

    /**
     * Returns true if auto-launch is enabled.
     */
    isEnabled(): Promise<boolean>;
  }
  declare module.exports: typeof AutoLaunch;
}
