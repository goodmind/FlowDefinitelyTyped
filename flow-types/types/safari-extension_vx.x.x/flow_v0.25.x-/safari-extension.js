declare module "safari-extension" {
  declare interface Window {
    safari: typeof safari;
  }

  declare var npm$namespace$safari: {
    application: typeof safari$application,
    extension: typeof safari$extension,
    self: typeof safari$self
  };
  declare export var safari$application: SafariApplication;

  declare export var safari$extension: SafariExtension;

  declare export var safari$self:
    | SafariExtensionGlobalPage
    | SafariExtensionBar;
  declare interface SafariEvent {
    /**
     * The type of the event.
     * The string used to identify a particular type of event is documented in the reference for that class.
     */
    type: string;

    /**
     * The target of the event.
     * This attribute stays the same as the event moves through the event-dispatch hierarchy. Its value is the same as the object that the event is sent to during the targeting phase.
     */
    target: SafariEventTarget;

    /**
     * The object that the event is currently being sent to.
     * This attribute varies as the event progresses through the phases, changing as the event moves through the event-dispatch hierarchy.
     */
    currentTarget: SafariEventTarget;

    /**
     * The time and date that the event was created.
     */
    timestamp: number;

    /**
     * The event-handling phase that the event is in.
     * The values for this property are the same as the values used by Webkit to identify the event-handling phases.
     */
    eventPhase: number;

    /**
     * A Boolean value that indicates whether the event goes through the bubbling phase.
     */
    bubbles: boolean;

    /**
     * A Boolean value that indicates whether the event can be canceled.
     */
    cancelable: boolean;

    /**
     * A Boolean value that indicates whether the event’s default action has been prevented.
     */
    defaultPrevented: boolean;

    /**
     * Prevents the event from any further propagation.
     * Propagation can be stopped only fon cancelable events. After propagation is stopped, the event is not sent to any other targets.
     */
    stopPropagation(): void;

    /**
     * Prevents the browser from performing the default action for an event.
     * Use this method to indicate that your extension has already fully handled the event; you don’t want the browser to do anything. Note that preventing the default action does not stop an event from propagating.
     */
    preventDefault(): void;
  }
  declare type SafariEventListener = {
    (event: SafariEvent): any
  } & Function;

  declare interface SafariEventTarget {
    addEventListener(
      type: string,
      listener: SafariEventListener,
      useCapture?: boolean
    ): void;
    removeEventListener(
      type: string,
      listener: SafariEventListener,
      useCapture?: boolean
    ): void;
  }
  declare type SafariBrowserWindow = {
    tabs: Array<SafariBrowserTab>,
    visible: boolean,
    activeTab: SafariBrowserTab,
    activate(): void,
    close(): void,

    /**
     * Opens a new tab in the window.
     * Available in Safari 5.0 and later.
     * @param visibility Either foreground if the tab should be opened in the foreground, or background if it should be opened in the background.
     * @param index The desired location of the new tab.
     * @returns A new tab.
     */
    openTab(visibility?: string, index?: number): SafariBrowserTab,
    insertTab(tab: SafariBrowserTab, index: number): SafariBrowserTab
  } & SafariEventTarget;

  declare type SafariBrowserTab = {
    browserWindow: SafariBrowserWindow,
    reader: SafariReader,

    /**
     * The tab’s current title.
     * The tab’s title is the same as the title of the webpage in most cases. For example, the title of the webpage may be truncated for display, but the value of this property is not truncated.
     * Available in Safari 5.0 and later.
     */
    title: string,
    page: SafariWebPageProxy,

    /**
     * The URL loaded in this tab.
     * Setting this attribute to a new value loads the page at the new URL in the tab.
     * Available in Safari 5.0 and later.
     */
    url: string,
    visibleContentsAsDataURL(): string,
    activate(): void,
    close(): void
  } & SafariEventTarget;

  declare type SafariReader = {
    available: boolean,
    tab: SafariBrowserTab,
    visible: boolean,
    enter(): void,
    exit(): void,
    dispatchMessage(name: string, message?: any): void
  } & SafariEventTarget;

  declare interface SafariWebPageProxy {
    dispatchMessage(name: string, message?: any): void;
  }
  declare interface SafariExtensionGlobalPage {
    contentWindow: Window;
  }
  declare type SafariExtensionPopover = {
    identifier: string,
    visible: boolean,
    contentWindow: Window,
    height: number,
    width: number,
    hide(): void
  } & SafariEventTarget;

  declare interface SafariExtensionMenu {
    identifier: string;
    menuItems: Array<SafariExtensionMenuItem>;
    visible: boolean;
    appendMenuItem(
      identifier: string,
      title: string,
      command?: string
    ): SafariExtensionMenuItem;
    appendSeparator(identifier: string): SafariExtensionMenuItem;
    insertMenuItem(
      index: number,
      identifier: string,
      title: string,
      command?: string
    ): SafariExtensionMenuItem;
    insertSeparator(index: number, identifier: string): SafariExtensionMenuItem;
    removeMenuItem(index: number): void;
  }
  declare type SafariExtensionMenuItem = {
    command: string,
    identifier: string,
    separator: boolean,
    title: string,
    image: string,
    submenu: SafariExtensionMenu,
    visible: boolean,
    disabled: boolean,
    checkedState: number
  } & SafariEventTarget;

  declare type SafariExtensionSettings = {
    [index: string]: any,
    [index: number]: any,
    getItem(key: string): any,
    setItem(key: string, value: any): void,
    removeItem(key: string): void,
    clear(): void
  } & SafariEventTarget;

  declare type SafariExtensionSecureSettings = {
    [index: string]: any,
    getItem(key: string): any,
    setItem(key: string, value: any): void,
    removeItem(key: string): void,
    clear(): void
  } & SafariEventTarget;

  declare type SafariExtensionBar = {
    identifier: string,
    label: string,
    visible: boolean,
    browserWindow: SafariBrowserWindow,
    contentWindow: Window,
    hide(doNotRemember?: boolean): void,
    show(doNotRemember?: boolean): void
  } & SafariEventTarget;

  declare type SafariExtensionToolbarItem = {
    /**
     * The current badge number.
     */
    badge: number,

    /**
     * The URL of the current image.
     */
    image: string,

    /**
     * The label of the toolbar item, as shown in the toolbar’s overflow menu.
     */
    label: string,

    /**
     * The label of the toolbar item, as shown in the Customize palette.
     * This attribute is optional; its value defaults to the value of label.
     */
    paletteLabel: string,

    /**
     * The tooltip (help tag) of the toolbar item.
     * This attribute is optional; its value defaults to the value of label.
     */
    toolTip: string,
    menu: SafariExtensionMenu,
    popover: SafariExtensionPopover,
    browserWindow: SafariBrowserWindow,
    command: string,
    disabled: boolean,
    identifier: string,
    showMenu(): void,
    showPopover(): void,
    validate(): void
  } & SafariEventTarget;

  declare interface SafariPrivateBrowsing {
    enabled: boolean;
  }
  declare interface SafariExtension {
    bars: Array<SafariExtensionBar>;
    baseURI: string;
    globalPage: SafariExtensionGlobalPage;
    toolbarItems: Array<SafariExtensionToolbarItem>;
    displayVersion: string;
    bundleVersion: string;
    menus: Array<SafariExtensionMenu>;
    createMenu(identifier: string): SafariExtensionMenu;
    removeMenu(identifier: string): void;
    popovers: Array<SafariExtensionPopover>;
    createPopover(
      identifier: string,
      url: string,
      width?: number,
      height?: number
    ): SafariExtensionPopover;
    removePopover(identifier: string): void;
    addContentScript(
      source: string,
      whitelist: Array<string>,
      blacklist: Array<string>,
      runAtEnd: boolean
    ): string;
    addContentScriptFromURL(
      url: string,
      whitelist: Array<string>,
      blacklist: Array<string>,
      runAtEnd: boolean
    ): string;
    addContentStyleSheet(
      source: string,
      whitelist: Array<string>,
      blacklist: Array<string>
    ): string;
    addContentStyleSheetFromURL(
      url: string,
      whitelist: Array<string>,
      blacklist: Array<string>
    ): string;
    removeContentScript(url: string): void;
    removeContentScripts(): void;
    removeContentStyleSheet(url: string): void;
    removeContentStyleSheets(): void;
    settings: SafariExtensionSettings;
    secureSettings: SafariExtensionSecureSettings;
  }
  declare type SafariApplication = {
    activeBrowserWindow: SafariBrowserWindow,
    browserWindows: Array<SafariBrowserWindow>,
    privateBrowsing: SafariPrivateBrowsing,
    openBrowserWindow(): SafariBrowserWindow
  } & SafariEventTarget;

  declare type SafariExtensionContextMenuEvent = {
    /**
     * The target of the event.
     * This attribute stays the same as the event moves through the event-dispatch hierarchy. Its value is the same as the object that the event is sent to during the targeting phase.
     */
    target: SafariExtensionContextMenuItem,

    /**
     * The object that the event is currently being sent to.
     * This attribute varies as the event progresses through the phases, changing as the event moves through the event-dispatch hierarchy.
     */
    currentTarget: SafariExtensionContextMenuItem,

    /**
     * Information about the current context menu event.
     */
    userInfo: any,

    /**
     * The context menu being built up.
     */
    contextMenu: SafariExtensionContextMenu
  } & SafariEvent;

  declare interface SafariExtensionContextMenu {
    /**
     * Returns a list of the context menu items from this extension.
     * Only menu items from your extension are returned.
     */
    contextMenuItems: any[];

    /**
     * Appends a menu item to the contextual menu.
     * If another menu item with the same identifier already exists, it is removed before appending the menu item. If command is not supplied, identifier is used as the command identifier.
     * @param identifier The unique identifier of the menu item.
     * @param title The title of the menu item.
     * @param command The command identifier that the context menu item sends when activated.
     * @returns The context menu item that was appended.
     */
    appendContextMenuItem(
      identifier: string,
      title: string,
      command?: string
    ): SafariExtensionContextMenuItem;

    /**
     * Inserts a menu item at a specific index in the contextual menu.
     * If another menu item with the same identifier already exists, it is removed before appending the menu item. If command is not supplied, identifier is used as the command identifier.
     * @param index The index where the menu item is being inserted.
     * @param identifier The unique identifier of the menu item.
     * @param title The title of the menu item.
     * @param command The command identifier that the context menu item sends when activated.
     * @returns The context menu item that was inserted.
     */
    insertContextMenuItem(
      index: number,
      identifier: string,
      title: string,
      command?: string
    ): SafariExtensionContextMenuItem;
  }
  declare type SafariExtensionContextMenuItem = {
    /**
     * The command identifier that the context menu item sends when activated.
     * Setting an empty string, null, or undefined has no effect.
     */
    command: string,

    /**
     * A Boolean value that indicates whether a context menu item is disabled.
     * Disabled menu items are not displayed in the context menu.
     */
    disabled: boolean,

    /**
     * The unique identifier of the context menu item.
     */
    identifier: string,

    /**
     * The title displayed in the context menu.
     */
    title: string
  } & SafariEventTarget;

  declare type SafariValidateEvent = {
    /**
     * The command identifier of the target being validated.
     */
    command: string
  } & SafariEvent;

  declare interface SafariExtensionContextMenuItemValidateEvent {
    /**
     * The target of the event.
     * This attribute stays the same as the event moves through the event-dispatch hierarchy. Its value is the same as the object that the event is sent to during the targeting phase.
     */
    target: SafariExtensionContextMenuItem;

    /**
     * The object that the event is currently being sent to.
     * This attribute varies as the event progresses through the phases, changing as the event moves through the event-dispatch hierarchy.
     */
    currentTarget: SafariExtensionContextMenuItem;

    /**
     * Information about the current context menu event.
     */
    userInfo: any;
  }
  declare type SafariCommandEvent = {
    /**
     * The command identifier of the target being dispatched.
     */
    command: string
  } & SafariEvent;

  declare type SafariExtensionContextMenuItemCommandEvent = {
    /**
     * The target of the event.
     * This attribute stays the same as the event moves through the event-dispatch hierarchy. Its value is the same as the object that the event is sent to during the targeting phase.
     */
    target: SafariExtensionContextMenuItem,

    /**
     * The object that the event is currently being sent to.
     * This attribute varies as the event progresses through the phases, changing as the event moves through the event-dispatch hierarchy.
     */
    currentTarget: SafariExtensionContextMenuItem,

    /**
     * The user info object for this context menu event.
     */
    userInfo: any
  } & SafariCommandEvent;

  declare type SafariExtensionSettingsChangeEvent = {
    /**
     * The target of the event.
     * This attribute stays the same as the event moves through the event-dispatch hierarchy. Its value is the same as the object that the event is sent to during the targeting phase.
     */
    target: SafariExtensionSettings | SafariExtensionSecureSettings,

    /**
     * The object that the event is currently being sent to.
     * This attribute varies as the event progresses through the phases, changing as the event moves through the event-dispatch hierarchy.
     */
    currentTarget: SafariExtensionSettings | SafariExtensionSecureSettings,

    /**
     * The key identifier of the setting that was changed.
     */
    key: string,

    /**
     * The value before the settings change.
     */
    oldValue: any,

    /**
     * The value after the settings change.
     */
    newValue: any
  } & SafariEvent;

  declare type SafariExtensionMessageEvent = {
    /**
     * The name of the message.
     */
    name: string,

    /**
     * The message data.
     */
    message: any
  } & SafariEvent;
}
