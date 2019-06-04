declare module "react-native-version-check" {
  import type { RequestInit } from "node-fetch";

  declare var VersionCheck: typeof npm$namespace$VersionCheck;

  declare var npm$namespace$VersionCheck: {
    getCountry: typeof VersionCheck$getCountry,
    getPackageName: typeof VersionCheck$getPackageName,
    getCurrentBuildNumber: typeof VersionCheck$getCurrentBuildNumber,
    getStoreUrl: typeof VersionCheck$getStoreUrl,
    getAppStoreUrl: typeof VersionCheck$getAppStoreUrl,
    getPlayStoreUrl: typeof VersionCheck$getPlayStoreUrl,
    getCurrentVersion: typeof VersionCheck$getCurrentVersion,
    getLatestVersion: typeof VersionCheck$getLatestVersion,
    needUpdate: typeof VersionCheck$needUpdate
  };

  /**
   * Returns device's country code of 2 characters.
   */
  declare function VersionCheck$getCountry(): Promise<string>;

  /**
   * Returns package name of app.
   */
  declare function VersionCheck$getPackageName(): string;

  /**
   * Returns current app build number.
   */
  declare function VersionCheck$getCurrentBuildNumber(): number;

  /**
   * Returns url of Play Market or App Store of app.
   */
  declare function VersionCheck$getStoreUrl(option?: {
    /**
     * App ID
     */
    appID?: string,
    appName?: string,

    /**
     * @default true
     */
    ignoreErrors?: boolean
  }): Promise<string>;

  /**
   * Returns url of App Store of app.
   */
  declare function VersionCheck$getAppStoreUrl(option?: {
    /**
     * App ID
     */
    appID?: string,
    appName?: string,

    /**
     * @default true
     */
    ignoreErrors?: boolean
  }): Promise<string>;

  /**
   * Returns url of Play Store of app.
   */
  declare function VersionCheck$getPlayStoreUrl(option?: {
    /**
     * Package Name
     */
    packageName?: string,

    /**
     * @default true
     */
    ignoreErrors?: boolean
  }): Promise<string>;

  /**
   * Returns current app version.
   */
  declare function VersionCheck$getCurrentVersion(): string;

  /**
   * Returns the latest app version parsed from url. Returns null when parsing error occurs.
   */
  declare function VersionCheck$getLatestVersion(option?: {
    /**
     * @default false
     */
    forceUpdate?: boolean,

    /**
     * provider name or function that returns promise or value of the latest version
     */
    provider?: () => string | string,

    /**
     * isomorphic-fetch options (https://github.github.io/fetch/)
     */
    fetchOptions?: RequestInit,

    /**
     * @default true
     */
    ignoreErrors?: boolean
  }): Promise<string>;

  /**
   * Returns an object contains with boolean value whether update needed, current version and latest version.
   * Current and the latest app versions are first split by delimiter, and check each split numbers into depth.
   */
  declare function VersionCheck$needUpdate(option?: {
    /**
     * app's current version from getCurrentVersion()
     */
    currentVersion?: string,

    /**
     * app's latest version from getLatestVersion()
     */
    latestVersion?: string,

    /**
     * @default Infinity
     */
    depth?: number,

    /**
     * @default false
     */
    forceUpdate?: boolean,

    /**
     * provider name or function that returns promise or value of the latest version
     */
    provider?: () => string | string,

    /**
     * isomorphic-fetch options (https://github.github.io/fetch/)
     */
    fetchOptions?: RequestInit,

    /**
     * @default true
     */
    ignoreErrors?: boolean
  }): Promise<{
    isNeeded: boolean,
    currentVersion: string,
    latestVersion: string
  }>;

  declare export default typeof VersionCheck;
}
