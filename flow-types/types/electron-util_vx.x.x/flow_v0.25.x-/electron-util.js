declare module "electron-util" {
  declare export var app: {
    app: any,
    BrowserWindow: any,
    dialog: any
  };
  declare export var is: {
    macos: boolean,
    linux: boolean,
    windows: boolean,
    main: boolean,
    renderer: boolean,
    development: boolean,
    usingAsar: boolean,
    macAppStore: boolean,
    windowsStore: boolean
  };
  declare export var appReady: Promise<void>;
  declare export var electronVersion: string;
  declare export var chromeVersion: string;
  declare export interface PlatformsParameter<T> {
    macos?: T | (() => T);
    windows?: T | (() => T);
    linux?: T | (() => T);
    default?: T | (() => T);
  }
  declare export function platform<T>(platforms: PlatformsParameter<T>): T;

  declare export function activeWindow(): any;

  declare export function runJS(code: string, window?: any): Promise<any>;

  declare export function fixPathForAsarUnpack(path: string): string;
}
