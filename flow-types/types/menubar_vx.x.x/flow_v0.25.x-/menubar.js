declare type Menubar$Position =
  | "trayLeft"
  | "trayBottomLeft"
  | "trayRight"
  | "trayBottomRight"
  | "trayCenter"
  | "trayBottomCenter"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "topCenter"
  | "bottomCenter"
  | "center";

declare type Menubar$TrayBounds =
  | "trayLeft"
  | "trayBottomLeft"
  | "trayRight"
  | "trayBottomRight"
  | "trayCenter"
  | "trayBottomCenter";

declare interface Menubar$ElectronPositioner {
  move(pos: Menubar$Position): void;
  calculate(pos: Menubar$Position, bounds?: Menubar$TrayBounds): Electron.Point;
}

declare class Menubar$MenubarApp mixins NodeJS.EventEmitter {
  app: Electron.App;
  window: Electron.BrowserWindow;
  tray: Electron.Tray;
  positioner: Menubar$ElectronPositioner;
  setOption(opt: string, value: any): void;
  getOption(opt: string): any;
  showWindow(): void;
  hideWindow(): void;
}

declare type Menubar$MenubarOptions = {
  dir?: string,
  index?: string,
  tooltip?: string,
  tray?: Electron.Tray,
  preloadWindow?: boolean,
  alwaysOnTop?: boolean,
  showOnAllWorkspaces?: boolean,
  windowPosition?: Menubar$Position,
  showDockIcon?: boolean,
  showOnRightClick?: boolean
} & Electron.BrowserWindowConstructorOptions;
declare module "menubar" {
  declare var ctor: (
    opts?: Menubar$Menubar$MenubarOptions
  ) => Menubar$Menubar$MenubarApp;
  declare module.exports: typeof ctor;
}
