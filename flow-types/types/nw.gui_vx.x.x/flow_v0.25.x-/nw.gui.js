declare module "nw.gui" {
  declare interface IEventEmitter {
    addListener(event: string, listener: Function): EventEmitter;
    on(event: string, listener: Function): EventEmitter;
    once(event: string, listener: Function): EventEmitter;
    removeListener(event: string, listener: Function): EventEmitter;
    removeAllListeners(event?: string): EventEmitter;
    setMaxListeners(n: number): void;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
  }
  declare class EventEmitter mixins IEventEmitter {
    addListener(event: string, listener: Function): EventEmitter;
    on(event: string, listener: Function): EventEmitter;
    once(event: string, listener: Function): EventEmitter;
    removeListener(event: string, listener: Function): EventEmitter;
    removeAllListeners(event?: string): EventEmitter;
    setMaxListeners(n: number): void;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
  }
  declare export interface MenuConfig {
    type?: string;
  }
  declare export interface HideMenusOptions {
    hideEdit: boolean;
    hideWindow: boolean;
  }
  declare export interface MenuItemConfig {
    label?: string;
    click?: Function;
    type?: string;
    submenu?: Menu;
    icon?: string;
    tooltip?: string;
    checked?: boolean;
    enabled?: boolean;
    key?: string;
    modifiers?: string;
  }
  declare export class MenuItem mixins EventEmitter, MenuItemConfig {
    constructor(config: MenuItemConfig): this;
    label: string;
    click: Function;
    type: string;
    submenu: Menu;
    icon: string;
    tooltip: string;
    checked: boolean;
    enabled: boolean;
    key: string;
    modifiers: string;
  }
  declare export class Menu {
    constructor(config?: MenuConfig): this;
    items: MenuItem[];
    append(item: MenuItem): void;
    remove(item: MenuItem): void;
    insert(item: MenuItem, atPosition: number): void;
    removeAt(index: number): void;
    popup(x: number, y: number): void;
    createMacBuiltin(appname: string, options?: HideMenusOptions): void;
  }
  declare export interface ShortcutOption {
    key: string;
    active: Function;
    failed: Function;
  }
  declare export class Shortcut mixins EventEmitter {
    constructor(option: ShortcutOption): this;
    key: string;
    active: Function;
    failed: Function;
  }
  declare export interface WindowManifestOptions {
    title?: string;
    icon?: string;
    toolbar?: boolean;
    frame?: boolean;
    width?: number;
    height?: number;
    position?: string;
    min_width?: number;
    min_height?: number;
    max_width?: number;
    max_height?: number;
  }
  declare export class Window mixins EventEmitter {
    static get(windowObject?: any): Window;
    static open(url: string, options?: WindowManifestOptions): Window;
    x: number;
    y: number;
    width: number;
    height: number;
    title: string;
    menu: Menu;
    isFullScreen: boolean;
    isKioskMode: boolean;
    zoomLevel: number;
    moveTo(x: number, y: number): void;
    moveBy(x: number, y: number): void;
    resizeTo(width: number, height: number): void;
    resizeBy(width: number, height: number): void;
    focus(): void;
    blur(): void;
    show(): void;
    hide(): void;
    close(force?: boolean): void;
    reload(): void;
    reloadIgnoringCache(): void;
    maximize(): void;
    unmaximize(): void;
    minimize(): void;
    restore(): void;
    enterFullscreen(): void;
    leaveFullscreen(): void;
    toggleFullscreen(): void;
    enterKioskMode(): void;
    leaveKioskMode(): void;
    toggleKioskMode(): void;
    showDevTools(id?: string, headless?: boolean): void;
    showDevTools(id: HTMLIFrameElement, headless?: boolean): void;
    closeDevTools(): void;
    isDevToolsOpen(): boolean;
    setMaximumSize(width: number, height: number): void;
    setMinimumSize(width: number, height: number): void;
    setResizable(resizable: boolean): void;
    setAlwaysOnTop(top: boolean): void;
    setPosition(position: string): void;
    setShowInTaskbar(show: boolean): void;
    requestAttention(attention: boolean): void;
    requestAttention(attention: number): void;
    capturePage(callback: Function, imageformat?: string): void;
    capturePage(
      callback: Function,
      config_object: {
        format: string,
        datatype: string
      }
    ): void;
    setProgressBar(progress: number): void;
    setBadgeLabel(label: string): void;
    eval(frame: HTMLIFrameElement, script: string): void;
  }
  declare export type App = {
    argv: any,
    fullArgv: any,
    dataPath: string,
    manifest: any,
    clearCache(): void,
    closeAllWindows(): void,
    crashBrowser(): void,
    crashRenderer(): void,
    getProxyForURL(url: string): void,
    quit(): void,
    setCrashDumpDir(dir: string): void,
    addOriginAccessWhitelistEntry(
      sourceOrigin: string,
      destinationProtocol: string,
      destinationHost: string,
      allowDestinationSubdomains: boolean
    ): void,
    removeOriginAccessWhitelistEntry(
      sourceOrigin: string,
      destinationProtocol: string,
      destinationHost: string,
      allowDestinationSubdomains: boolean
    ): void,
    registerGlobalHotKey(shortcut: Shortcut): void,
    unregisterGlobalHotKey(shortcut: Shortcut): void
  } & EventEmitter;

  declare export class Clipboard {
    static get(): Clipboard;
    get(type?: string): string;
    set(data: string, type?: string): void;
    clear(): void;
  }
  declare export interface TrayOption {
    title?: string;
    tooltip?: string;
    icon?: string;
    alticon?: string;
    menu?: Menu;
  }
  declare export class Tray mixins EventEmitter, TrayOption {
    constructor(option: TrayOption): this;
    title: string;
    tooltip: string;
    icon: string;
    alticon: string;
    menu: Menu;
    remove(): void;
  }
  declare interface Shell {
    openExternal(uri: string): void;
    openItem(file_path: string): void;
    showItemInFolder(file_path: string): void;
  }
  declare export var App: App;
  declare export var Shell: Shell;
}
