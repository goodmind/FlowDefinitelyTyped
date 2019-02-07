declare module "detect-browser" {
  declare export {};

  declare export type BrowserName =
    | "aol"
    | "android"
    | "bb10"
    | "chrome"
    | "crios"
    | "edge"
    | "facebook"
    | "firefox"
    | "fxios"
    | "ie"
    | "instagram"
    | "ios"
    | "ios-webview"
    | "kakaotalk"
    | "node"
    | "opera"
    | "phantomjs"
    | "safari"
    | "samsung"
    | "vivaldi"
    | "yandexbrowser";
  declare export interface BrowserInfo {
    name?: string;
    version?: string;
    os?: string | null;
    bot?: true;
  }
  declare export function detect(): null | false | BrowserInfo;

  declare export function detectOS(userAgentString: string): null | string;

  declare export function parseUserAgent(
    userAgentString: string
  ): null | BrowserInfo;

  declare export function getNodeVersion(): false | BrowserInfo;
}
