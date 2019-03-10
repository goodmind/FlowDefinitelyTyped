declare module "activex-shdocvw" {
  declare var npm$namespace$SHDocVw: {
    BrowserBarConstants: typeof SHDocVw$BrowserBarConstants,
    BrowserNavConstants: typeof SHDocVw$BrowserNavConstants,
    CommandStateChangeConstants: typeof SHDocVw$CommandStateChangeConstants,
    NewProcessCauseConstants: typeof SHDocVw$NewProcessCauseConstants,
    OLECMDEXECOPT: typeof SHDocVw$OLECMDEXECOPT,
    OLECMDF: typeof SHDocVw$OLECMDF,
    OLECMDID: typeof SHDocVw$OLECMDID,
    RefreshConstants: typeof SHDocVw$RefreshConstants,
    SecureLockIconConstants: typeof SHDocVw$SecureLockIconConstants,
    ShellWindowFindWindowOptions: typeof SHDocVw$ShellWindowFindWindowOptions,
    ShellWindowTypeConstants: typeof SHDocVw$ShellWindowTypeConstants,
    tagREADYSTATE: typeof SHDocVw$tagREADYSTATE,
    CScriptErrorList: typeof SHDocVw$CScriptErrorList,
    InternetExplorer: typeof SHDocVw$InternetExplorer,
    InternetExplorerMedium: typeof SHDocVw$InternetExplorerMedium,
    ShellBrowserWindow: typeof SHDocVw$ShellBrowserWindow,
    ShellNameSpace: typeof SHDocVw$ShellNameSpace,
    ShellUIHelper: typeof SHDocVw$ShellUIHelper,
    ShellWindows: typeof SHDocVw$ShellWindows,
    WebBrowser: typeof SHDocVw$WebBrowser,
    WebBrowser_V1: typeof SHDocVw$WebBrowser_V1
  };

  declare var SHDocVw$BrowserBarConstants: {|
    +AddressBar: 9, // 9
    +Tools: 10, // 10
    +Links: 11, // 11
    +Search: "{30D02401-6A81-11D0-8274-00C04FD5AE38}", // "{30D02401-6A81-11D0-8274-00C04FD5AE38}"
    +Favorites: "{EFA24E61-B078-11D0-89E4-00C04FC9E26E}", // "{EFA24E61-B078-11D0-89E4-00C04FC9E26E}"
    +History: "{EFA24E62-B078-11D0-89E4-00C04FC9E26E}", // "{EFA24E62-B078-11D0-89E4-00C04FC9E26E}"
    +Channels: "{EFA24E63-B078-11D0-89E4-00C04FC9E26E}" // "{EFA24E63-B078-11D0-89E4-00C04FC9E26E}"
  |};

  declare var SHDocVw$BrowserNavConstants: {|
    +OpenInNewWindow: 1, // 1
    +NoHistory: 2, // 2
    +AllowAutosearch: 16, // 16
    +BrowserBar: 32, // 32
    +Hyperlink: 64, // 64
    +EnforceRestricted: 128, // 128
    +NewWindowsManaged: 256, // 256
    +UntrustedForDownload: 512, // 512
    +TrustedForActiveX: 1024, // 1024
    +OpenInNewTab: 2048, // 2048
    +OpenInBackgroundTab: 4096, // 4096
    +KeepWordWheelText: 8192, // 8192
    +VirtualTab: 16384, // 16384
    +BlockRedirectsXDomain: 32768, // 32768
    +OpenNewForegroundTab: 65536 // 65536
  |};

  /**
   * Constants for WebBrowser CommandStateChange
   */

  declare var SHDocVw$CommandStateChangeConstants: {|
    +CSC_NAVIGATEBACK: 2, // 2
    +CSC_NAVIGATEFORWARD: 1, // 1
    +CSC_UPDATECOMMANDS: -1 // -1
  |};

  /**
   * Constants for WebBrowser NewProcess notification
   */

  declare var SHDocVw$NewProcessCauseConstants: {|
    +ProtectedModeRedirect: 1 // 1
  |};

  declare var SHDocVw$OLECMDEXECOPT: {|
    +OLECMDEXECOPT_DODEFAULT: 0, // 0
    +OLECMDEXECOPT_DONTPROMPTUSER: 2, // 2
    +OLECMDEXECOPT_PROMPTUSER: 1, // 1
    +OLECMDEXECOPT_SHOWHELP: 3 // 3
  |};

  declare var SHDocVw$OLECMDF: {|
    +OLECMDF_DEFHIDEONCTXTMENU: 32, // 32
    +OLECMDF_ENABLED: 2, // 2
    +OLECMDF_INVISIBLE: 16, // 16
    +OLECMDF_LATCHED: 4, // 4
    +OLECMDF_NINCHED: 8, // 8
    +OLECMDF_SUPPORTED: 1 // 1
  |};

  declare var SHDocVw$OLECMDID: {|
    +OLECMDID_ACTIVEXINSTALLSCOPE: 66, // 66
    +OLECMDID_ADDTRAVELENTRY: 60, // 60
    +OLECMDID_ALLOWUILESSSAVEAS: 46, // 46
    +OLECMDID_CLEARSELECTION: 18, // 18
    +OLECMDID_CLOSE: 45, // 45
    +OLECMDID_COPY: 12, // 12
    +OLECMDID_CUT: 11, // 11
    +OLECMDID_DELETE: 33, // 33
    +OLECMDID_DONTDOWNLOADCSS: 47, // 47
    +OLECMDID_ENABLE_INTERACTION: 36, // 36
    +OLECMDID_ENABLE_VISIBILITY: 77, // 77
    +OLECMDID_EXITFULLSCREEN: 81, // 81
    +OLECMDID_FIND: 32, // 32
    +OLECMDID_FOCUSVIEWCONTROLS: 57, // 57
    +OLECMDID_FOCUSVIEWCONTROLSQUERY: 58, // 58
    +OLECMDID_GETPRINTTEMPLATE: 52, // 52
    +OLECMDID_GETUSERSCALABLE: 75, // 75
    +OLECMDID_GETZOOMRANGE: 20, // 20
    +OLECMDID_HIDETOOLBARS: 24, // 24
    +OLECMDID_HTTPEQUIV: 34, // 34
    +OLECMDID_HTTPEQUIV_DONE: 35, // 35
    +OLECMDID_LAYOUT_VIEWPORT_WIDTH: 71, // 71
    +OLECMDID_MEDIA_PLAYBACK: 78, // 78
    +OLECMDID_NEW: 2, // 2
    +OLECMDID_ONBEFOREUNLOAD: 83, // 83
    +OLECMDID_ONTOOLBARACTIVATED: 31, // 31
    +OLECMDID_ONUNLOAD: 37, // 37
    +OLECMDID_OPEN: 1, // 1
    +OLECMDID_OPTICAL_GETZOOMRANGE: 64, // 64
    +OLECMDID_OPTICAL_ZOOM: 63, // 63
    +OLECMDID_PAGEACTIONBLOCKED: 55, // 55
    +OLECMDID_PAGEACTIONUIQUERY: 56, // 56
    +OLECMDID_PAGEAVAILABLE: 74, // 74
    +OLECMDID_PAGESETUP: 8, // 8
    +OLECMDID_PASTE: 13, // 13
    +OLECMDID_PASTESPECIAL: 14, // 14
    +OLECMDID_POPSTATEEVENT: 69, // 69
    +OLECMDID_PREREFRESH: 39, // 39
    +OLECMDID_PRINT: 6, // 6
    +OLECMDID_PRINT2: 49, // 49
    +OLECMDID_PRINTPREVIEW: 7, // 7
    +OLECMDID_PRINTPREVIEW2: 50, // 50
    +OLECMDID_PROPERTIES: 10, // 10
    +OLECMDID_PROPERTYBAG2: 38, // 38
    +OLECMDID_REDO: 16, // 16
    +OLECMDID_REFRESH: 22, // 22
    +OLECMDID_SAVE: 3, // 3
    +OLECMDID_SAVEAS: 4, // 4
    +OLECMDID_SAVECOPYAS: 5, // 5
    +OLECMDID_SCROLLCOMPLETE: 82, // 82
    +OLECMDID_SELECTALL: 17, // 17
    +OLECMDID_SET_HOST_FULLSCREENMODE: 80, // 80
    +OLECMDID_SETDOWNLOADSTATE: 29, // 29
    +OLECMDID_SETFAVICON: 79, // 79
    +OLECMDID_SETPRINTTEMPLATE: 51, // 51
    +OLECMDID_SETPROGRESSMAX: 25, // 25
    +OLECMDID_SETPROGRESSPOS: 26, // 26
    +OLECMDID_SETPROGRESSTEXT: 27, // 27
    +OLECMDID_SETTITLE: 28, // 28
    +OLECMDID_SHOWFIND: 42, // 42
    +OLECMDID_SHOWMESSAGE: 41, // 41
    +OLECMDID_SHOWMESSAGE_BLOCKABLE: 84, // 84
    +OLECMDID_SHOWPAGEACTIONMENU: 59, // 59
    +OLECMDID_SHOWPAGESETUP: 43, // 43
    +OLECMDID_SHOWPRINT: 44, // 44
    +OLECMDID_SHOWSCRIPTERROR: 40, // 40
    +OLECMDID_SHOWTASKDLG: 68, // 68
    +OLECMDID_SHOWTASKDLG_BLOCKABLE: 85, // 85
    +OLECMDID_SPELL: 9, // 9
    +OLECMDID_STOP: 23, // 23
    +OLECMDID_STOPDOWNLOAD: 30, // 30
    +OLECMDID_UNDO: 15, // 15
    +OLECMDID_UPDATE_CARET: 76, // 76
    +OLECMDID_UPDATEBACKFORWARDSTATE: 62, // 62
    +OLECMDID_UPDATECOMMANDS: 21, // 21
    +OLECMDID_UPDATEPAGESTATUS: 48, // 48
    +OLECMDID_UPDATETRAVELENTRY: 61, // 61
    +OLECMDID_UPDATETRAVELENTRY_DATARECOVERY: 67, // 67
    +OLECMDID_USER_OPTICAL_ZOOM: 73, // 73
    +OLECMDID_VIEWPORT_MODE: 70, // 70
    +OLECMDID_VISUAL_VIEWPORT_EXCLUDE_BOTTOM: 72, // 72
    +OLECMDID_WINDOWSTATECHANGED: 65, // 65
    +OLECMDID_ZOOM: 19 // 19
  |};

  declare var SHDocVw$RefreshConstants: {|
    +Normal: 0, // 0
    +IfExpired: 1, // 1
    +Completely: 3 // 3
  |};

  /**
   * Constants for WebBrowser security icon notification
   */

  declare var SHDocVw$SecureLockIconConstants: {|
    +secureLockIconMixed: 1, // 1
    +secureLockIconSecure128Bit: 6, // 6
    +secureLockIconSecure40Bit: 3, // 3
    +secureLockIconSecure56Bit: 4, // 4
    +secureLockIconSecureFortezza: 5, // 5
    +secureLockIconSecureUnknownBits: 2, // 2
    +secureLockIconUnsecure: 0 // 0
  |};

  /**
   * Options for ShellWindows FindWindow
   */

  declare var SHDocVw$ShellWindowFindWindowOptions: {|
    +SWFO_COOKIEPASSED: 4, // 4
    +SWFO_INCLUDEPENDING: 2, // 2
    +SWFO_NEEDDISPATCH: 1 // 1
  |};

  /**
   * Constants for ShellWindows registration
   */

  declare var SHDocVw$ShellWindowTypeConstants: {|
    +SWC_3RDPARTY: 2, // 2
    +SWC_BROWSER: 1, // 1
    +SWC_CALLBACK: 4, // 4
    +SWC_DESKTOP: 8, // 8
    +SWC_EXPLORER: 0 // 0
  |};

  declare var SHDocVw$tagREADYSTATE: {|
    +READYSTATE_COMPLETE: 4, // 4
    +READYSTATE_INTERACTIVE: 3, // 3
    +READYSTATE_LOADED: 2, // 2
    +READYSTATE_LOADING: 1, // 1
    +READYSTATE_UNINITIALIZED: 0 // 0
  |};

  declare type SHDocVw$TargetFrameValues =
    | "_blank"
    | "_parent"
    | "_self"
    | "_top";

  declare class SHDocVw$CScriptErrorList {
    constructor(): this;
    advanceError(): void;
    canAdvanceError(): number;
    canRetreatError(): number;
    getAlwaysShowLockState(): number;
    getDetailsPaneOpen(): number;
    getErrorChar(): number;
    getErrorCode(): number;
    getErrorLine(): number;
    getErrorMsg(): string;
    getErrorUrl(): string;
    getPerErrorDisplay(): number;
    retreatError(): void;
    setDetailsPaneOpen(fDetailsPaneOpen: number): void;
    setPerErrorDisplay(fPerErrorDisplay: number): void;
  }

  /**
   * Internet Explorer Application.
   */
  declare class SHDocVw$InternetExplorer {
    constructor(): this;

    /**
     * Controls whether address bar is shown
     */
    AddressBar: boolean;

    /**
     * Returns the application automation object if accessible, this automation object otherwise..
     */
    Application: any;

    /**
     * Query to see if something is still in progress.
     */
    Busy: boolean;

    /**
     * Converts client sizes into window sizes.
     */
    ClientToWindow(pcx: number, pcy: number): void;

    /**
     * Returns the container/parent automation object, if any.
     */
    Container: any;

    /**
     * Returns the active Document automation object, if any.
     */
    Document: any;

    /**
     * IOleCommandTarget::Exec
     */
    ExecWB(
      cmdID: $Values<typeof SHDocVw$OLECMDID>,
      cmdexecopt: $Values<typeof SHDocVw$OLECMDEXECOPT>,
      pvaIn?: any,
      pvaOut?: any
    ): void;

    /**
     * Returns file specification of the application, including path.
     */
    FullName: string;

    /**
     * Maximizes window and turns off statusbar, toolbar, menubar, and titlebar.
     */
    FullScreen: boolean;

    /**
     * Retrieve the Associated value for the property vtValue in the context of the object.
     */
    GetProperty(Property: string): any;

    /**
     * Navigates to the previous item in the history list.
     */
    GoBack(): void;

    /**
     * Navigates to the next item in the history list.
     */
    GoForward(): void;

    /**
     * Go home/start page.
     */
    GoHome(): void;

    /**
     * Go Search Page.
     */
    GoSearch(): void;

    /**
     * The vertical dimension (pixels) of the frame window/object.
     */
    Height: number;

    /**
     * Returns the HWND of the current IE window.
     */
    HWND: number;

    /**
     * The horizontal position (pixels) of the frame window relative to the screen/container.
     */
    Left: number;

    /**
     * Gets the short (UI-friendly) name of the URL/file currently viewed.
     */
    LocationName: string;

    /**
     * Gets the full URL/path currently viewed.
     */
    LocationURL: string;

    /**
     * Controls whether menubar is shown.
     */
    MenuBar: boolean;

    /**
     * Returns name of the application.
     */
    Name: string;

    /**
     * Navigates to a URL or file.
     */
    Navigate(
      URL: string,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Navigates to a URL or file or pidl.
     */
    Navigate2(
      URL: any,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Controls if the frame is offline (read from cache)
     */
    Offline: boolean;

    /**
     * Returns the automation object of the container/parent if one exists or this automation object.
     */
    Parent: any;

    /**
     * Returns the path to the application.
     */
    Path: string;

    /**
     * Associates vtValue with the name szProperty in the context of the object.
     */
    PutProperty(Property: string, vtValue: any): void;

    /**
     * IOleCommandTarget::QueryStatus
     */
    QueryStatusWB(
      cmdID: $Values<typeof SHDocVw$OLECMDID>
    ): $Values<typeof SHDocVw$OLECMDF>;

    /**
     * Exits application and closes the open document.
     */
    Quit(): void;
    ReadyState: $Values<typeof SHDocVw$tagREADYSTATE>;

    /**
     * Refresh the currently viewed page.
     */
    Refresh(): void;

    /**
     * Refresh the currently viewed page.
     */
    Refresh2(Level?: $Values<typeof SHDocVw$RefreshConstants>): void;

    /**
     * Registers OC as a top-level browser (for target name resolution)
     */
    RegisterAsBrowser: boolean;

    /**
     * Registers OC as a drop target for navigation
     */
    RegisterAsDropTarget: boolean;

    /**
     * Controls whether the window is resizable
     */
    Resizable: boolean;

    /**
     * Set BrowserBar to Clsid
     */
    ShowBrowserBar(
      pvaClsid: string | $Values<typeof SHDocVw$BrowserBarConstants>,
      pvarShow?: boolean
    ): void;

    /**
     * Controls if any dialog boxes can be shown
     */
    Silent: boolean;

    /**
     * Turn on or off the statusbar.
     */
    StatusBar: boolean;

    /**
     * Text of Status window.
     */
    StatusText: string;

    /**
     * Stops opening a file.
     */
    Stop(): void;

    /**
     * Controls if the browser is in theater mode
     */
    TheaterMode: boolean;

    /**
     * Controls which toolbar is shown.
     */
    ToolBar: number;

    /**
     * The vertical position (pixels) of the frame window relative to the screen/container.
     */
    Top: number;

    /**
     * Returns True if this is the top level object.
     */
    TopLevelContainer: boolean;

    /**
     * Returns the type of the contained document object.
     */
    Type: string;

    /**
     * Determines whether the application is visible or hidden.
     */
    Visible: boolean;

    /**
     * The horizontal dimension (pixels) of the frame window/object.
     */
    Width: number;
  }

  /**
   * Internet Explorer Application with default integrity of Medium
   */
  declare class SHDocVw$InternetExplorerMedium {
    constructor(): this;

    /**
     * Controls whether address bar is shown
     */
    AddressBar: boolean;

    /**
     * Returns the application automation object if accessible, this automation object otherwise..
     */
    Application: any;

    /**
     * Query to see if something is still in progress.
     */
    Busy: boolean;

    /**
     * Converts client sizes into window sizes.
     */
    ClientToWindow(pcx: number, pcy: number): void;

    /**
     * Returns the container/parent automation object, if any.
     */
    Container: any;

    /**
     * Returns the active Document automation object, if any.
     */
    Document: any;

    /**
     * IOleCommandTarget::Exec
     */
    ExecWB(
      cmdID: $Values<typeof SHDocVw$OLECMDID>,
      cmdexecopt: $Values<typeof SHDocVw$OLECMDEXECOPT>,
      pvaIn?: any,
      pvaOut?: any
    ): void;

    /**
     * Returns file specification of the application, including path.
     */
    FullName: string;

    /**
     * Maximizes window and turns off statusbar, toolbar, menubar, and titlebar.
     */
    FullScreen: boolean;

    /**
     * Retrieve the Associated value for the property vtValue in the context of the object.
     */
    GetProperty(Property: string): any;

    /**
     * Navigates to the previous item in the history list.
     */
    GoBack(): void;

    /**
     * Navigates to the next item in the history list.
     */
    GoForward(): void;

    /**
     * Go home/start page.
     */
    GoHome(): void;

    /**
     * Go Search Page.
     */
    GoSearch(): void;

    /**
     * The vertical dimension (pixels) of the frame window/object.
     */
    Height: number;

    /**
     * Returns the HWND of the current IE window.
     */
    HWND: number;

    /**
     * The horizontal position (pixels) of the frame window relative to the screen/container.
     */
    Left: number;

    /**
     * Gets the short (UI-friendly) name of the URL/file currently viewed.
     */
    LocationName: string;

    /**
     * Gets the full URL/path currently viewed.
     */
    LocationURL: string;

    /**
     * Controls whether menubar is shown.
     */
    MenuBar: boolean;

    /**
     * Returns name of the application.
     */
    Name: string;

    /**
     * Navigates to a URL or file.
     */
    Navigate(
      URL: string,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Navigates to a URL or file or pidl.
     */
    Navigate2(
      URL: any,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Controls if the frame is offline (read from cache)
     */
    Offline: boolean;

    /**
     * Returns the automation object of the container/parent if one exists or this automation object.
     */
    Parent: any;

    /**
     * Returns the path to the application.
     */
    Path: string;

    /**
     * Associates vtValue with the name szProperty in the context of the object.
     */
    PutProperty(Property: string, vtValue: any): void;

    /**
     * IOleCommandTarget::QueryStatus
     */
    QueryStatusWB(
      cmdID: $Values<typeof SHDocVw$OLECMDID>
    ): $Values<typeof SHDocVw$OLECMDF>;

    /**
     * Exits application and closes the open document.
     */
    Quit(): void;
    ReadyState: $Values<typeof SHDocVw$tagREADYSTATE>;

    /**
     * Refresh the currently viewed page.
     */
    Refresh(): void;

    /**
     * Refresh the currently viewed page.
     */
    Refresh2(Level?: $Values<typeof SHDocVw$RefreshConstants>): void;

    /**
     * Registers OC as a top-level browser (for target name resolution)
     */
    RegisterAsBrowser: boolean;

    /**
     * Registers OC as a drop target for navigation
     */
    RegisterAsDropTarget: boolean;

    /**
     * Controls whether the window is resizable
     */
    Resizable: boolean;

    /**
     * Set BrowserBar to Clsid
     */
    ShowBrowserBar(
      pvaClsid: string | $Values<typeof SHDocVw$BrowserBarConstants>,
      pvarShow?: boolean
    ): void;

    /**
     * Controls if any dialog boxes can be shown
     */
    Silent: boolean;

    /**
     * Turn on or off the statusbar.
     */
    StatusBar: boolean;

    /**
     * Text of Status window.
     */
    StatusText: string;

    /**
     * Stops opening a file.
     */
    Stop(): void;

    /**
     * Controls if the browser is in theater mode
     */
    TheaterMode: boolean;

    /**
     * Controls which toolbar is shown.
     */
    ToolBar: number;

    /**
     * The vertical position (pixels) of the frame window relative to the screen/container.
     */
    Top: number;

    /**
     * Returns True if this is the top level object.
     */
    TopLevelContainer: boolean;

    /**
     * Returns the type of the contained document object.
     */
    Type: string;

    /**
     * Determines whether the application is visible or hidden.
     */
    Visible: boolean;

    /**
     * The horizontal dimension (pixels) of the frame window/object.
     */
    Width: number;
  }

  /**
   * Shell Browser Window.
   */
  declare class SHDocVw$ShellBrowserWindow {
    constructor(): this;

    /**
     * Controls whether address bar is shown
     */
    AddressBar: boolean;

    /**
     * Returns the application automation object if accessible, this automation object otherwise..
     */
    Application: any;

    /**
     * Query to see if something is still in progress.
     */
    Busy: boolean;

    /**
     * Converts client sizes into window sizes.
     */
    ClientToWindow(pcx: number, pcy: number): void;

    /**
     * Returns the container/parent automation object, if any.
     */
    Container: any;

    /**
     * Returns the active Document automation object, if any.
     */
    Document: any;

    /**
     * IOleCommandTarget::Exec
     */
    ExecWB(
      cmdID: $Values<typeof SHDocVw$OLECMDID>,
      cmdexecopt: $Values<typeof SHDocVw$OLECMDEXECOPT>,
      pvaIn?: any,
      pvaOut?: any
    ): void;

    /**
     * Returns file specification of the application, including path.
     */
    FullName: string;

    /**
     * Maximizes window and turns off statusbar, toolbar, menubar, and titlebar.
     */
    FullScreen: boolean;

    /**
     * Retrieve the Associated value for the property vtValue in the context of the object.
     */
    GetProperty(Property: string): any;

    /**
     * Navigates to the previous item in the history list.
     */
    GoBack(): void;

    /**
     * Navigates to the next item in the history list.
     */
    GoForward(): void;

    /**
     * Go home/start page.
     */
    GoHome(): void;

    /**
     * Go Search Page.
     */
    GoSearch(): void;

    /**
     * The vertical dimension (pixels) of the frame window/object.
     */
    Height: number;

    /**
     * Returns the HWND of the current IE window.
     */
    HWND: number;

    /**
     * The horizontal position (pixels) of the frame window relative to the screen/container.
     */
    Left: number;

    /**
     * Gets the short (UI-friendly) name of the URL/file currently viewed.
     */
    LocationName: string;

    /**
     * Gets the full URL/path currently viewed.
     */
    LocationURL: string;

    /**
     * Controls whether menubar is shown.
     */
    MenuBar: boolean;

    /**
     * Returns name of the application.
     */
    Name: string;

    /**
     * Navigates to a URL or file.
     */
    Navigate(
      URL: string,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Navigates to a URL or file or pidl.
     */
    Navigate2(
      URL: any,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Controls if the frame is offline (read from cache)
     */
    Offline: boolean;

    /**
     * Returns the automation object of the container/parent if one exists or this automation object.
     */
    Parent: any;

    /**
     * Returns the path to the application.
     */
    Path: string;

    /**
     * Associates vtValue with the name szProperty in the context of the object.
     */
    PutProperty(Property: string, vtValue: any): void;

    /**
     * IOleCommandTarget::QueryStatus
     */
    QueryStatusWB(
      cmdID: $Values<typeof SHDocVw$OLECMDID>
    ): $Values<typeof SHDocVw$OLECMDF>;

    /**
     * Exits application and closes the open document.
     */
    Quit(): void;
    ReadyState: $Values<typeof SHDocVw$tagREADYSTATE>;

    /**
     * Refresh the currently viewed page.
     */
    Refresh(): void;

    /**
     * Refresh the currently viewed page.
     */
    Refresh2(Level?: $Values<typeof SHDocVw$RefreshConstants>): void;

    /**
     * Registers OC as a top-level browser (for target name resolution)
     */
    RegisterAsBrowser: boolean;

    /**
     * Registers OC as a drop target for navigation
     */
    RegisterAsDropTarget: boolean;

    /**
     * Controls whether the window is resizable
     */
    Resizable: boolean;

    /**
     * Set BrowserBar to Clsid
     */
    ShowBrowserBar(
      pvaClsid: string | $Values<typeof SHDocVw$BrowserBarConstants>,
      pvarShow?: boolean
    ): void;

    /**
     * Controls if any dialog boxes can be shown
     */
    Silent: boolean;

    /**
     * Turn on or off the statusbar.
     */
    StatusBar: boolean;

    /**
     * Text of Status window.
     */
    StatusText: string;

    /**
     * Stops opening a file.
     */
    Stop(): void;

    /**
     * Controls if the browser is in theater mode
     */
    TheaterMode: boolean;

    /**
     * Controls which toolbar is shown.
     */
    ToolBar: number;

    /**
     * The vertical position (pixels) of the frame window relative to the screen/container.
     */
    Top: number;

    /**
     * Returns True if this is the top level object.
     */
    TopLevelContainer: boolean;

    /**
     * Returns the type of the contained document object.
     */
    Type: string;

    /**
     * Determines whether the application is visible or hidden.
     */
    Visible: boolean;

    /**
     * The horizontal dimension (pixels) of the frame window/object.
     */
    Width: number;
  }

  declare class SHDocVw$ShellNameSpace {
    constructor(): this;
    Columns: string;

    /**
     * number of view types
     */
    CountViewTypes: number;

    /**
     * method CreateSubscriptionForSelection
     */
    CreateSubscriptionForSelection(): boolean;

    /**
     * method DeleteSubscriptionForSelection
     */
    DeleteSubscriptionForSelection(): boolean;
    Depth: number;

    /**
     * options
     */
    EnumOptions: number;

    /**
     * expands item specified depth
     */
    Expand(var_0: any, iDepth: number): void;

    /**
     * method Export
     */
    Export(): void;
    Flags: number;

    /**
     * method Import
     */
    Import(): void;

    /**
     * method InvokeContextMenuCommand
     */
    InvokeContextMenuCommand(strCommand: string): void;
    Mode: number;

    /**
     * method MoveSelectionDown
     */
    MoveSelectionDown(): void;

    /**
     * method MoveSelectionTo
     */
    MoveSelectionTo(): void;

    /**
     * method MoveSelectionUp
     */
    MoveSelectionUp(): void;

    /**
     * method NewFolder
     */
    NewFolder(): void;

    /**
     * method ResetSort
     */
    ResetSort(): void;

    /**
     * get the root item
     */
    Root: any;

    /**
     * get the selected item
     */
    SelectedItem: any;

    /**
     * collection of selected items
     */
    SelectedItems(): any;

    /**
     * old, use put_Root() instead
     */
    SetRoot(bstrFullPath: string): void;

    /**
     * set view type
     */
    SetViewType(iType: number): void;

    /**
     * Query to see if subscriptions are enabled
     */
    SubscriptionsEnabled: boolean;

    /**
     * method Synchronize
     */
    Synchronize(): void;
    TVFlags: number;

    /**
     * unselects all items
     */
    UnselectAll(): void;
  }

  declare class SHDocVw$ShellUIHelper {
    constructor(): this;
    AddChannel(URL: string): void;
    AddDesktopComponent(
      URL: string,
      Type: string,
      Left?: any,
      Top?: any,
      Width?: any,
      Height?: any
    ): void;
    AddFavorite(URL: string, Title?: any): void;
    AddSearchProvider(URL: string): void;
    AddService(URL: string): void;
    AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(
      strSearch: string,
      strFailureUrl: string,
      pvarTargetFrame?: any
    ): void;
    BrandImageUri(): string;
    BuildNewTabPage(): void;
    ContentDiscoveryReset(): void;
    CustomizeClearType(fSet: boolean): void;
    CustomizeSettings(
      fSQM: boolean,
      fPhishing: boolean,
      bstrLocale: string
    ): void;
    DefaultSearchProvider(): string;
    DiagnoseConnection(): void;
    EnableSuggestedSites(fEnable: boolean): void;
    GetCVListData(): string;
    GetCVListLocalData(): string;
    GetEMIEListData(): string;
    GetEMIEListLocalData(): string;
    GetExperimentalFlag(bstrFlagString: string): boolean;
    GetExperimentalValue(bstrValueString: string): number;
    GetNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
    HasNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    InPrivateFilteringEnabled(): boolean;
    IsSearchMigrated(): boolean;
    IsSearchProviderInstalled(URL: string): number;
    IsServiceInstalled(URL: string, Verb: string): number;
    IsSubscribed(URL: string): boolean;
    IsSuggestedSitesEnabled(): boolean;
    LaunchIE(bstrUrl: string, automated: boolean): void;
    LaunchInHVSI(bstrUrl: string): void;
    msActiveXFilteringEnabled(): boolean;
    msAddSiteMode(): void;
    msAddTrackingProtectionList(URL: string, bstrFilterName: string): void;
    msChangeDefaultBrowser(fChange: boolean): void;
    msClearTile(): void;
    msDiagnoseConnectionUILess(): void;
    msEnableTileNotificationQueue(fChange: boolean): void;
    msEnableTileNotificationQueueForSquare150x150(fChange: boolean): void;
    msEnableTileNotificationQueueForSquare310x310(fChange: boolean): void;
    msEnableTileNotificationQueueForWide310x150(fChange: boolean): void;
    msIsSiteMode(): boolean;
    msIsSiteModeFirstRun(fPreserveState: boolean): any;
    msLaunchInternetOptions(): void;
    msLaunchNetworkClientHelp(): void;
    msPinnedSiteState(): any;
    msProvisionNetworks(bstrProvisioningXml: string): any;
    msRemoveScheduledTileNotification(bstrNotificationId: string): void;
    msReportSafeUrl(): void;
    msScheduledTileNotification(
      bstrNotificationXml: string,
      bstrNotificationId: string,
      bstrNotificationTag: string,
      startTime?: any,
      expirationTime?: any
    ): void;
    msSiteModeActivate(): void;
    msSiteModeAddButtonStyle(
      uiButtonID: any,
      bstrIconURL: string,
      bstrTooltip: string
    ): any;
    msSiteModeAddJumpListItem(
      bstrName: string,
      bstrActionUri: string,
      bstrIconUri: string,
      pvarWindowType?: any
    ): void;
    msSiteModeAddThumbBarButton(bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeClearBadge(): void;
    msSiteModeClearIconOverlay(): void;
    msSiteModeClearJumpList(): void;
    msSiteModeCreateJumpList(bstrHeader: string): void;
    msSiteModeRefreshBadge(): void;
    msSiteModeSetIconOverlay(IconUrl: string, pvarDescription?: any): void;
    msSiteModeShowButtonStyle(uiButtonID: any, uiStyleID: any): void;
    msSiteModeShowJumpList(): void;
    msSiteModeShowThumbBar(): void;
    msSiteModeUpdateThumbBarButton(
      ButtonID: any,
      fEnabled: boolean,
      fVisible: boolean
    ): void;
    msStartPeriodicBadgeUpdate(
      pollingUri: string,
      startTime?: any,
      uiUpdateRecurrence?: any
    ): void;
    msStartPeriodicTileUpdate(
      pollingUris: any,
      startTime?: any,
      uiUpdateRecurrence?: any
    ): void;
    msStartPeriodicTileUpdateBatch(
      pollingUris: any,
      startTime?: any,
      uiUpdateRecurrence?: any
    ): void;
    msStopPeriodicBadgeUpdate(): void;
    msStopPeriodicTileUpdate(): void;
    msTrackingProtectionEnabled(): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    NavigateToSuggestedSites(bstrRelativeUrl: string): void;
    OpenFavoritesPane(): void;
    OpenFavoritesSettings(): void;
    PhishingEnabled(): boolean;
    RefreshOfflineDesktop(): void;
    ResetAllExperimentalFlagsAndValues(): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RunOnceHasShown(): boolean;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceShown(): void;
    SearchGuideUrl(): string;
    SetActivitiesVisible(fVisible: boolean): void;
    SetExperimentalFlag(bstrFlagString: string, vfFlag: boolean): void;
    SetExperimentalValue(bstrValueString: string, dwValue: number): void;
    SetNeedIEAutoLaunchFlag(bstrUrl: string, flag: boolean): void;
    SetRecentlyClosedVisible(fVisible: boolean): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    ShowInPrivateHelp(): void;
    ShowTabsHelp(): void;
    SkipRunOnce(): void;
    SkipTabsWelcome(): void;
    SqmEnabled(): boolean;
  }

  /**
   * ShellDispatch Load in Shell Context
   */
  declare class SHDocVw$ShellWindows {
    constructor(): this;

    /**
     * Get count of open Shell windows
     */
    Count: number;

    /**
     * Find the window based on the location
     */
    FindWindowSW(
      pvarloc: any,
      pvarlocRoot: any,
      swClass: number,
      pHWND: number,
      swfwOptions: number
    ): any;

    /**
     * Return the shell window for the given index
     */
    Item(index?: any): any;

    /**
     * Notifies the activation
     */
    OnActivated(lCookie: number, fActive: boolean): void;

    /**
     * Notifies on creation and frame name set
     */
    OnCreated(lCookie: number, punk: any): void;

    /**
     * Notifies the new location
     */
    OnNavigate(lCookie: number, pvarloc: any): void;

    /**
     * Used by IExplore to register different processes
     */
    ProcessAttachDetach(fAttach: boolean): void;

    /**
     * Register a window with the list
     */
    Register(pid: any, HWND: number, swClass: number, plCookie: number): void;

    /**
     * Register a pending open with the list
     */
    RegisterPending(
      lThreadId: number,
      pvarloc: any,
      pvarlocRoot: any,
      swClass: number,
      plCookie: number
    ): void;

    /**
     * Remove a window from the list
     */
    Revoke(lCookie: number): void;
  }

  /**
   * WebBrowser Control
   */
  declare class SHDocVw$WebBrowser {
    constructor(): this;

    /**
     * Controls whether address bar is shown (ignored by WebBrowser)
     */
    AddressBar: boolean;

    /**
     * Returns the application automation object if accessible, this automation object otherwise..
     */
    Application: any;

    /**
     * Query to see if something is still in progress.
     */
    Busy: boolean;

    /**
     * Converts client sizes into window sizes.
     */
    ClientToWindow(pcx: number, pcy: number): void;

    /**
     * Returns the container/parent automation object, if any.
     */
    Container: any;

    /**
     * Returns the active Document automation object, if any.
     */
    Document: any;

    /**
     * IOleCommandTarget::Exec
     */
    ExecWB(
      cmdID: $Values<typeof SHDocVw$OLECMDID>,
      cmdexecopt: $Values<typeof SHDocVw$OLECMDEXECOPT>,
      pvaIn?: any,
      pvaOut?: any
    ): void;

    /**
     * Returns file specification of the application, including path.
     */
    FullName: string;

    /**
     * Maximizes window and turns off statusbar, toolbar, menubar, and titlebar.
     */
    FullScreen: boolean;

    /**
     * Retrieve the Associated value for the property vtValue in the context of the object.
     */
    GetProperty(Property: string): any;

    /**
     * Navigates to the previous item in the history list.
     */
    GoBack(): void;

    /**
     * Navigates to the next item in the history list.
     */
    GoForward(): void;

    /**
     * Go home/start page.
     */
    GoHome(): void;

    /**
     * Go Search Page.
     */
    GoSearch(): void;

    /**
     * The vertical dimension (pixels) of the frame window/object.
     */
    Height: number;

    /**
     * Returns the HWND of the current IE window.
     */
    HWND: number;

    /**
     * The horizontal position (pixels) of the frame window relative to the screen/container.
     */
    Left: number;

    /**
     * Gets the short (UI-friendly) name of the URL/file currently viewed.
     */
    LocationName: string;

    /**
     * Gets the full URL/path currently viewed.
     */
    LocationURL: string;

    /**
     * Controls whether menubar is shown.
     */
    MenuBar: boolean;

    /**
     * Returns name of the application.
     */
    Name: string;

    /**
     * Navigates to a URL or file.
     */
    Navigate(
      URL: string,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Navigates to a URL or file or pidl.
     */
    Navigate2(
      URL: any,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Controls if the frame is offline (read from cache)
     */
    Offline: boolean;

    /**
     * Returns the automation object of the container/parent if one exists or this automation object.
     */
    Parent: any;

    /**
     * Returns the path to the application.
     */
    Path: string;

    /**
     * Associates vtValue with the name szProperty in the context of the object.
     */
    PutProperty(Property: string, vtValue: any): void;

    /**
     * IOleCommandTarget::QueryStatus
     */
    QueryStatusWB(
      cmdID: $Values<typeof SHDocVw$OLECMDID>
    ): $Values<typeof SHDocVw$OLECMDF>;

    /**
     * Exits application and closes the open document.
     */
    Quit(): void;
    ReadyState: $Values<typeof SHDocVw$tagREADYSTATE>;

    /**
     * Refresh the currently viewed page.
     */
    Refresh(): void;

    /**
     * Refresh the currently viewed page.
     */
    Refresh2(Level?: $Values<typeof SHDocVw$RefreshConstants>): void;

    /**
     * Registers OC as a top-level browser (for target name resolution)
     */
    RegisterAsBrowser: boolean;

    /**
     * Registers OC as a drop target for navigation
     */
    RegisterAsDropTarget: boolean;

    /**
     * Controls whether the window is resizable
     */
    Resizable: boolean;

    /**
     * Set BrowserBar to Clsid
     */
    ShowBrowserBar(
      pvaClsid: string | $Values<typeof SHDocVw$BrowserBarConstants>,
      pvarShow?: boolean
    ): void;

    /**
     * Controls if any dialog boxes can be shown
     */
    Silent: boolean;

    /**
     * Turn on or off the statusbar.
     */
    StatusBar: boolean;

    /**
     * Text of Status window.
     */
    StatusText: string;

    /**
     * Stops opening a file.
     */
    Stop(): void;

    /**
     * Controls if the browser is in theater mode
     */
    TheaterMode: boolean;

    /**
     * Controls which toolbar is shown.
     */
    ToolBar: number;

    /**
     * The vertical position (pixels) of the frame window relative to the screen/container.
     */
    Top: number;

    /**
     * Returns True if this is the top level object.
     */
    TopLevelContainer: boolean;

    /**
     * Returns the type of the contained document object.
     */
    Type: string;

    /**
     * Determines whether the application is visible or hidden.
     */
    Visible: boolean;

    /**
     * The horizontal dimension (pixels) of the frame window/object.
     */
    Width: number;
  }

  /**
   * WebBrowser Control
   */
  declare class SHDocVw$WebBrowser_V1 {
    constructor(): this;

    /**
     * Returns the application automation object if accessible, this automation object otherwise..
     */
    Application: any;

    /**
     * Query to see if something is still in progress.
     */
    Busy: boolean;

    /**
     * Returns the container/parent automation object, if any.
     */
    Container: any;

    /**
     * Returns the active Document automation object, if any.
     */
    Document: any;

    /**
     * Navigates to the previous item in the history list.
     */
    GoBack(): void;

    /**
     * Navigates to the next item in the history list.
     */
    GoForward(): void;

    /**
     * Go home/start page.
     */
    GoHome(): void;

    /**
     * Go Search Page.
     */
    GoSearch(): void;

    /**
     * The vertical dimension (pixels) of the frame window/object.
     */
    Height: number;

    /**
     * The horizontal position (pixels) of the frame window relative to the screen/container.
     */
    Left: number;

    /**
     * Gets the short (UI-friendly) name of the URL/file currently viewed.
     */
    LocationName: string;

    /**
     * Gets the full URL/path currently viewed.
     */
    LocationURL: string;

    /**
     * Navigates to a URL or file.
     */
    Navigate(
      URL: string,
      Flags?: $Values<typeof SHDocVw$BrowserNavConstants>,
      TargetFrameName?: SHDocVw$TargetFrameValues | string,
      PostData?: any,
      Headers?: string
    ): void;

    /**
     * Returns the automation object of the container/parent if one exists or this automation object.
     */
    Parent: any;

    /**
     * Refresh the currently viewed page.
     */
    Refresh(): void;

    /**
     * Refresh the currently viewed page.
     */
    Refresh2(Level?: $Values<typeof SHDocVw$RefreshConstants>): void;

    /**
     * Stops opening a file.
     */
    Stop(): void;

    /**
     * The vertical position (pixels) of the frame window relative to the screen/container.
     */
    Top: number;

    /**
     * Returns True if this is the top level object.
     */
    TopLevelContainer: boolean;

    /**
     * Returns the type of the contained document object.
     */
    Type: string;

    /**
     * The horizontal dimension (pixels) of the frame window/object.
     */
    Width: number;
  }

  declare type SHDocVw$EventHelperTypes$InternetExplorer_BeforeNavigate2_ArgNames = [
    "pDisp",
    "URL",
    "Flags",
    "TargetFrameName",
    "PostData",
    "Headers",
    "Cancel"
  ];

  declare type SHDocVw$EventHelperTypes$InternetExplorerMedium_BeforeNavigate2_ArgNames = [
    "pDisp",
    "URL",
    "Flags",
    "TargetFrameName",
    "PostData",
    "Headers",
    "Cancel"
  ];

  declare type SHDocVw$EventHelperTypes$ShellBrowserWindow_BeforeNavigate2_ArgNames = [
    "pDisp",
    "URL",
    "Flags",
    "TargetFrameName",
    "PostData",
    "Headers",
    "Cancel"
  ];

  declare type SHDocVw$EventHelperTypes$ShellNameSpace_FavoritesSelectionChange_ArgNames = [
    "cItems",
    "hItem",
    "strName",
    "strUrl",
    "cVisits",
    "strDate",
    "fAvailableOffline"
  ];

  declare type SHDocVw$EventHelperTypes$WebBrowser_BeforeNavigate2_ArgNames = [
    "pDisp",
    "URL",
    "Flags",
    "TargetFrameName",
    "PostData",
    "Headers",
    "Cancel"
  ];

  declare type SHDocVw$EventHelperTypes$WebBrowser_V1_BeforeNavigate_ArgNames = [
    "URL",
    "Flags",
    "TargetFrameName",
    "PostData",
    "Headers",
    "Cancel"
  ];

  declare type SHDocVw$EventHelperTypes$WebBrowser_V1_FrameBeforeNavigate_ArgNames = [
    "URL",
    "Flags",
    "TargetFrameName",
    "PostData",
    "Headers",
    "Cancel"
  ];

  declare type SHDocVw$EventHelperTypes$WebBrowser_V1_FrameNewWindow_ArgNames = [
    "URL",
    "Flags",
    "TargetFrameName",
    "PostData",
    "Headers",
    "Processed"
  ];

  declare type SHDocVw$EventHelperTypes$WebBrowser_V1_NewWindow_ArgNames = [
    "URL",
    "Flags",
    "TargetFrameName",
    "PostData",
    "Headers",
    "Processed"
  ];

  declare interface SHDocVw$EventHelperTypes$InternetExplorer_BeforeNavigate2_Parameter {
    Cancel: boolean;
    +Flags: any;
    +Headers: any;
    +pDisp: any;
    +PostData: any;
    +TargetFrameName: any;
    +URL: any;
  }

  declare interface SHDocVw$EventHelperTypes$InternetExplorerMedium_BeforeNavigate2_Parameter {
    Cancel: boolean;
    +Flags: any;
    +Headers: any;
    +pDisp: any;
    +PostData: any;
    +TargetFrameName: any;
    +URL: any;
  }

  declare interface SHDocVw$EventHelperTypes$ShellBrowserWindow_BeforeNavigate2_Parameter {
    Cancel: boolean;
    +Flags: any;
    +Headers: any;
    +pDisp: any;
    +PostData: any;
    +TargetFrameName: any;
    +URL: any;
  }

  declare interface SHDocVw$EventHelperTypes$ShellNameSpace_FavoritesSelectionChange_Parameter {
    +cItems: number;
    +cVisits: number;
    +fAvailableOffline: number;
    +hItem: number;
    +strDate: string;
    +strName: string;
    +strUrl: string;
  }

  declare interface SHDocVw$EventHelperTypes$WebBrowser_BeforeNavigate2_Parameter {
    Cancel: boolean;
    +Flags: any;
    +Headers: any;
    +pDisp: any;
    +PostData: any;
    +TargetFrameName: any;
    +URL: any;
  }

  declare interface SHDocVw$EventHelperTypes$WebBrowser_V1_BeforeNavigate_Parameter {
    Cancel: boolean;
    +Flags: number;
    +Headers: string;
    +PostData: any;
    +TargetFrameName: string;
    +URL: string;
  }

  declare interface SHDocVw$EventHelperTypes$WebBrowser_V1_FrameBeforeNavigate_Parameter {
    Cancel: boolean;
    +Flags: number;
    +Headers: string;
    +PostData: any;
    +TargetFrameName: string;
    +URL: string;
  }

  declare interface SHDocVw$EventHelperTypes$WebBrowser_V1_FrameNewWindow_Parameter {
    +Flags: number;
    +Headers: string;
    +PostData: any;
    Processed: boolean;
    +TargetFrameName: string;
    +URL: string;
  }

  declare interface SHDocVw$EventHelperTypes$WebBrowser_V1_NewWindow_Parameter {
    +Flags: number;
    +Headers: string;
    +PostData: any;
    Processed: boolean;
    +TargetFrameName: string;
    +URL: string;
  }
  declare interface ActiveXObject {
    on(
      obj: SHDocVw$InternetExplorer,
      event: "BeforeNavigate2",
      argNames: SHDocVw$EventHelperTypes$InternetExplorer_BeforeNavigate2_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$InternetExplorer_BeforeNavigate2_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "BeforeScriptExecute",
      argNames: ["pDispWindow"],
      handler: (parameter: {
        +pDispWindow: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "ClientToHostWindow",
      argNames: ["CX", "CY"],
      handler: (parameter: {
        CX: number,
        CY: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "CommandStateChange",
      argNames: ["Command", "Enable"],
      handler: (parameter: {
        +Command: number,
        +Enable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "DocumentComplete" | "NavigateComplete2",
      argNames: ["pDisp", "URL"],
      handler: (parameter: {
        +pDisp: any,
        +URL: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "FileDownload",
      argNames: ["ActiveDocument", "Cancel"],
      handler: (parameter: {
        +ActiveDocument: boolean,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "NavigateError",
      argNames: ["pDisp", "URL", "Frame", "StatusCode", "Cancel"],
      handler: (parameter: {
        +pDisp: any,
        +URL: any,
        +Frame: any,
        +StatusCode: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "NewProcess",
      argNames: ["lCauseFlag", "pWB2", "Cancel"],
      handler: (parameter: {
        +lCauseFlag: number,
        +pWB2: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "NewWindow2",
      argNames: ["ppDisp", "Cancel"],
      handler: (parameter: {
        ppDisp: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "NewWindow3",
      argNames: ["ppDisp", "Cancel", "dwFlags", "bstrUrlContext", "bstrUrl"],
      handler: (parameter: {
        ppDisp: any,
        Cancel: boolean,
        +dwFlags: number,
        +bstrUrlContext: string,
        +bstrUrl: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "OnFullScreen",
      argNames: ["FullScreen"],
      handler: (parameter: {
        +FullScreen: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "OnMenuBar",
      argNames: ["MenuBar"],
      handler: (parameter: {
        +MenuBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "OnStatusBar",
      argNames: ["StatusBar"],
      handler: (parameter: {
        +StatusBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "OnTheaterMode",
      argNames: ["TheaterMode"],
      handler: (parameter: {
        +TheaterMode: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "OnToolBar",
      argNames: ["ToolBar"],
      handler: (parameter: {
        +ToolBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "OnVisible",
      argNames: ["Visible"],
      handler: (parameter: {
        +Visible: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "PrintTemplateInstantiation" | "PrintTemplateTeardown",
      argNames: ["pDisp"],
      handler: (parameter: {
        +pDisp: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "PrivacyImpactedStateChange",
      argNames: ["bImpacted"],
      handler: (parameter: {
        +bImpacted: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "ProgressChange",
      argNames: ["Progress", "ProgressMax"],
      handler: (parameter: {
        +Progress: number,
        +ProgressMax: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "PropertyChange",
      argNames: ["szProperty"],
      handler: (parameter: {
        +szProperty: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "RedirectXDomainBlocked",
      argNames: ["pDisp", "StartURL", "RedirectURL", "Frame", "StatusCode"],
      handler: (parameter: {
        +pDisp: any,
        +StartURL: any,
        +RedirectURL: any,
        +Frame: any,
        +StatusCode: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "SetPhishingFilterStatus",
      argNames: ["PhishingFilterStatus"],
      handler: (parameter: {
        +PhishingFilterStatus: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "SetSecureLockIcon",
      argNames: ["SecureLockIcon"],
      handler: (parameter: {
        +SecureLockIcon: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "StatusTextChange" | "TitleChange",
      argNames: ["Text"],
      handler: (parameter: {
        +Text: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "ThirdPartyUrlBlocked",
      argNames: ["URL", "dwCount"],
      handler: (parameter: {
        +URL: any,
        +dwCount: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "UpdatePageStatus",
      argNames: ["pDisp", "nPage", "fDone"],
      handler: (parameter: {
        +pDisp: any,
        +nPage: any,
        +fDone: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WebWorkerFinsihed",
      argNames: ["dwUniqueID"],
      handler: (parameter: {
        +dwUniqueID: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WebWorkerStarted",
      argNames: ["dwUniqueID", "bstrWorkerLabel"],
      handler: (parameter: {
        +dwUniqueID: number,
        +bstrWorkerLabel: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WindowClosing",
      argNames: ["IsChildWindow", "Cancel"],
      handler: (parameter: {
        +IsChildWindow: boolean,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WindowSetHeight",
      argNames: ["Height"],
      handler: (parameter: {
        +Height: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WindowSetLeft",
      argNames: ["Left"],
      handler: (parameter: {
        +Left: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WindowSetResizable",
      argNames: ["Resizable"],
      handler: (parameter: {
        +Resizable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WindowSetTop",
      argNames: ["Top"],
      handler: (parameter: {
        +Top: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WindowSetWidth",
      argNames: ["Width"],
      handler: (parameter: {
        +Width: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "WindowStateChanged",
      argNames: ["dwWindowStateFlags", "dwValidFlagsMask"],
      handler: (parameter: {
        +dwWindowStateFlags: number,
        +dwValidFlagsMask: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "BeforeNavigate2",
      argNames: SHDocVw$EventHelperTypes$InternetExplorerMedium_BeforeNavigate2_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$InternetExplorerMedium_BeforeNavigate2_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "BeforeScriptExecute",
      argNames: ["pDispWindow"],
      handler: (parameter: {
        +pDispWindow: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "ClientToHostWindow",
      argNames: ["CX", "CY"],
      handler: (parameter: {
        CX: number,
        CY: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "CommandStateChange",
      argNames: ["Command", "Enable"],
      handler: (parameter: {
        +Command: number,
        +Enable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "DocumentComplete" | "NavigateComplete2",
      argNames: ["pDisp", "URL"],
      handler: (parameter: {
        +pDisp: any,
        +URL: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "FileDownload",
      argNames: ["ActiveDocument", "Cancel"],
      handler: (parameter: {
        +ActiveDocument: boolean,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "NavigateError",
      argNames: ["pDisp", "URL", "Frame", "StatusCode", "Cancel"],
      handler: (parameter: {
        +pDisp: any,
        +URL: any,
        +Frame: any,
        +StatusCode: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "NewProcess",
      argNames: ["lCauseFlag", "pWB2", "Cancel"],
      handler: (parameter: {
        +lCauseFlag: number,
        +pWB2: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "NewWindow2",
      argNames: ["ppDisp", "Cancel"],
      handler: (parameter: {
        ppDisp: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "NewWindow3",
      argNames: ["ppDisp", "Cancel", "dwFlags", "bstrUrlContext", "bstrUrl"],
      handler: (parameter: {
        ppDisp: any,
        Cancel: boolean,
        +dwFlags: number,
        +bstrUrlContext: string,
        +bstrUrl: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "OnFullScreen",
      argNames: ["FullScreen"],
      handler: (parameter: {
        +FullScreen: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "OnMenuBar",
      argNames: ["MenuBar"],
      handler: (parameter: {
        +MenuBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "OnStatusBar",
      argNames: ["StatusBar"],
      handler: (parameter: {
        +StatusBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "OnTheaterMode",
      argNames: ["TheaterMode"],
      handler: (parameter: {
        +TheaterMode: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "OnToolBar",
      argNames: ["ToolBar"],
      handler: (parameter: {
        +ToolBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "OnVisible",
      argNames: ["Visible"],
      handler: (parameter: {
        +Visible: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "PrintTemplateInstantiation" | "PrintTemplateTeardown",
      argNames: ["pDisp"],
      handler: (parameter: {
        +pDisp: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "PrivacyImpactedStateChange",
      argNames: ["bImpacted"],
      handler: (parameter: {
        +bImpacted: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "ProgressChange",
      argNames: ["Progress", "ProgressMax"],
      handler: (parameter: {
        +Progress: number,
        +ProgressMax: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "PropertyChange",
      argNames: ["szProperty"],
      handler: (parameter: {
        +szProperty: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "RedirectXDomainBlocked",
      argNames: ["pDisp", "StartURL", "RedirectURL", "Frame", "StatusCode"],
      handler: (parameter: {
        +pDisp: any,
        +StartURL: any,
        +RedirectURL: any,
        +Frame: any,
        +StatusCode: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "SetPhishingFilterStatus",
      argNames: ["PhishingFilterStatus"],
      handler: (parameter: {
        +PhishingFilterStatus: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "SetSecureLockIcon",
      argNames: ["SecureLockIcon"],
      handler: (parameter: {
        +SecureLockIcon: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "StatusTextChange" | "TitleChange",
      argNames: ["Text"],
      handler: (parameter: {
        +Text: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "ThirdPartyUrlBlocked",
      argNames: ["URL", "dwCount"],
      handler: (parameter: {
        +URL: any,
        +dwCount: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "UpdatePageStatus",
      argNames: ["pDisp", "nPage", "fDone"],
      handler: (parameter: {
        +pDisp: any,
        +nPage: any,
        +fDone: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WebWorkerFinsihed",
      argNames: ["dwUniqueID"],
      handler: (parameter: {
        +dwUniqueID: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WebWorkerStarted",
      argNames: ["dwUniqueID", "bstrWorkerLabel"],
      handler: (parameter: {
        +dwUniqueID: number,
        +bstrWorkerLabel: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WindowClosing",
      argNames: ["IsChildWindow", "Cancel"],
      handler: (parameter: {
        +IsChildWindow: boolean,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WindowSetHeight",
      argNames: ["Height"],
      handler: (parameter: {
        +Height: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WindowSetLeft",
      argNames: ["Left"],
      handler: (parameter: {
        +Left: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WindowSetResizable",
      argNames: ["Resizable"],
      handler: (parameter: {
        +Resizable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WindowSetTop",
      argNames: ["Top"],
      handler: (parameter: {
        +Top: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WindowSetWidth",
      argNames: ["Width"],
      handler: (parameter: {
        +Width: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "WindowStateChanged",
      argNames: ["dwWindowStateFlags", "dwValidFlagsMask"],
      handler: (parameter: {
        +dwWindowStateFlags: number,
        +dwValidFlagsMask: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "BeforeNavigate2",
      argNames: SHDocVw$EventHelperTypes$ShellBrowserWindow_BeforeNavigate2_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$ShellBrowserWindow_BeforeNavigate2_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "BeforeScriptExecute",
      argNames: ["pDispWindow"],
      handler: (parameter: {
        +pDispWindow: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "ClientToHostWindow",
      argNames: ["CX", "CY"],
      handler: (parameter: {
        CX: number,
        CY: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "CommandStateChange",
      argNames: ["Command", "Enable"],
      handler: (parameter: {
        +Command: number,
        +Enable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "DocumentComplete" | "NavigateComplete2",
      argNames: ["pDisp", "URL"],
      handler: (parameter: {
        +pDisp: any,
        +URL: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "FileDownload",
      argNames: ["ActiveDocument", "Cancel"],
      handler: (parameter: {
        +ActiveDocument: boolean,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "NavigateError",
      argNames: ["pDisp", "URL", "Frame", "StatusCode", "Cancel"],
      handler: (parameter: {
        +pDisp: any,
        +URL: any,
        +Frame: any,
        +StatusCode: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "NewProcess",
      argNames: ["lCauseFlag", "pWB2", "Cancel"],
      handler: (parameter: {
        +lCauseFlag: number,
        +pWB2: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "NewWindow2",
      argNames: ["ppDisp", "Cancel"],
      handler: (parameter: {
        ppDisp: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "NewWindow3",
      argNames: ["ppDisp", "Cancel", "dwFlags", "bstrUrlContext", "bstrUrl"],
      handler: (parameter: {
        ppDisp: any,
        Cancel: boolean,
        +dwFlags: number,
        +bstrUrlContext: string,
        +bstrUrl: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "OnFullScreen",
      argNames: ["FullScreen"],
      handler: (parameter: {
        +FullScreen: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "OnMenuBar",
      argNames: ["MenuBar"],
      handler: (parameter: {
        +MenuBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "OnStatusBar",
      argNames: ["StatusBar"],
      handler: (parameter: {
        +StatusBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "OnTheaterMode",
      argNames: ["TheaterMode"],
      handler: (parameter: {
        +TheaterMode: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "OnToolBar",
      argNames: ["ToolBar"],
      handler: (parameter: {
        +ToolBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "OnVisible",
      argNames: ["Visible"],
      handler: (parameter: {
        +Visible: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "PrintTemplateInstantiation" | "PrintTemplateTeardown",
      argNames: ["pDisp"],
      handler: (parameter: {
        +pDisp: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "PrivacyImpactedStateChange",
      argNames: ["bImpacted"],
      handler: (parameter: {
        +bImpacted: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "ProgressChange",
      argNames: ["Progress", "ProgressMax"],
      handler: (parameter: {
        +Progress: number,
        +ProgressMax: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "PropertyChange",
      argNames: ["szProperty"],
      handler: (parameter: {
        +szProperty: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "RedirectXDomainBlocked",
      argNames: ["pDisp", "StartURL", "RedirectURL", "Frame", "StatusCode"],
      handler: (parameter: {
        +pDisp: any,
        +StartURL: any,
        +RedirectURL: any,
        +Frame: any,
        +StatusCode: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "SetPhishingFilterStatus",
      argNames: ["PhishingFilterStatus"],
      handler: (parameter: {
        +PhishingFilterStatus: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "SetSecureLockIcon",
      argNames: ["SecureLockIcon"],
      handler: (parameter: {
        +SecureLockIcon: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "StatusTextChange" | "TitleChange",
      argNames: ["Text"],
      handler: (parameter: {
        +Text: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "ThirdPartyUrlBlocked",
      argNames: ["URL", "dwCount"],
      handler: (parameter: {
        +URL: any,
        +dwCount: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "UpdatePageStatus",
      argNames: ["pDisp", "nPage", "fDone"],
      handler: (parameter: {
        +pDisp: any,
        +nPage: any,
        +fDone: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WebWorkerFinsihed",
      argNames: ["dwUniqueID"],
      handler: (parameter: {
        +dwUniqueID: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WebWorkerStarted",
      argNames: ["dwUniqueID", "bstrWorkerLabel"],
      handler: (parameter: {
        +dwUniqueID: number,
        +bstrWorkerLabel: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WindowClosing",
      argNames: ["IsChildWindow", "Cancel"],
      handler: (parameter: {
        +IsChildWindow: boolean,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WindowSetHeight",
      argNames: ["Height"],
      handler: (parameter: {
        +Height: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WindowSetLeft",
      argNames: ["Left"],
      handler: (parameter: {
        +Left: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WindowSetResizable",
      argNames: ["Resizable"],
      handler: (parameter: {
        +Resizable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WindowSetTop",
      argNames: ["Top"],
      handler: (parameter: {
        +Top: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WindowSetWidth",
      argNames: ["Width"],
      handler: (parameter: {
        +Width: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "WindowStateChanged",
      argNames: ["dwWindowStateFlags", "dwValidFlagsMask"],
      handler: (parameter: {
        +dwWindowStateFlags: number,
        +dwValidFlagsMask: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$ShellNameSpace,
      event: "FavoritesSelectionChange",
      argNames: SHDocVw$EventHelperTypes$ShellNameSpace_FavoritesSelectionChange_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$ShellNameSpace_FavoritesSelectionChange_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$ShellWindows,
      event: "WindowRegistered" | "WindowRevoked",
      argNames: ["lCookie"],
      handler: (parameter: {
        +lCookie: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "BeforeNavigate2",
      argNames: SHDocVw$EventHelperTypes$WebBrowser_BeforeNavigate2_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$WebBrowser_BeforeNavigate2_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "BeforeScriptExecute",
      argNames: ["pDispWindow"],
      handler: (parameter: {
        +pDispWindow: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "ClientToHostWindow",
      argNames: ["CX", "CY"],
      handler: (parameter: {
        CX: number,
        CY: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "CommandStateChange",
      argNames: ["Command", "Enable"],
      handler: (parameter: {
        +Command: number,
        +Enable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "DocumentComplete" | "NavigateComplete2",
      argNames: ["pDisp", "URL"],
      handler: (parameter: {
        +pDisp: any,
        +URL: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "FileDownload",
      argNames: ["ActiveDocument", "Cancel"],
      handler: (parameter: {
        +ActiveDocument: boolean,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "NavigateError",
      argNames: ["pDisp", "URL", "Frame", "StatusCode", "Cancel"],
      handler: (parameter: {
        +pDisp: any,
        +URL: any,
        +Frame: any,
        +StatusCode: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "NewProcess",
      argNames: ["lCauseFlag", "pWB2", "Cancel"],
      handler: (parameter: {
        +lCauseFlag: number,
        +pWB2: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "NewWindow2",
      argNames: ["ppDisp", "Cancel"],
      handler: (parameter: {
        ppDisp: any,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "NewWindow3",
      argNames: ["ppDisp", "Cancel", "dwFlags", "bstrUrlContext", "bstrUrl"],
      handler: (parameter: {
        ppDisp: any,
        Cancel: boolean,
        +dwFlags: number,
        +bstrUrlContext: string,
        +bstrUrl: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "OnFullScreen",
      argNames: ["FullScreen"],
      handler: (parameter: {
        +FullScreen: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "OnMenuBar",
      argNames: ["MenuBar"],
      handler: (parameter: {
        +MenuBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "OnStatusBar",
      argNames: ["StatusBar"],
      handler: (parameter: {
        +StatusBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "OnTheaterMode",
      argNames: ["TheaterMode"],
      handler: (parameter: {
        +TheaterMode: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "OnToolBar",
      argNames: ["ToolBar"],
      handler: (parameter: {
        +ToolBar: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "OnVisible",
      argNames: ["Visible"],
      handler: (parameter: {
        +Visible: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "PrintTemplateInstantiation" | "PrintTemplateTeardown",
      argNames: ["pDisp"],
      handler: (parameter: {
        +pDisp: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "PrivacyImpactedStateChange",
      argNames: ["bImpacted"],
      handler: (parameter: {
        +bImpacted: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "ProgressChange",
      argNames: ["Progress", "ProgressMax"],
      handler: (parameter: {
        +Progress: number,
        +ProgressMax: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "PropertyChange",
      argNames: ["szProperty"],
      handler: (parameter: {
        +szProperty: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "RedirectXDomainBlocked",
      argNames: ["pDisp", "StartURL", "RedirectURL", "Frame", "StatusCode"],
      handler: (parameter: {
        +pDisp: any,
        +StartURL: any,
        +RedirectURL: any,
        +Frame: any,
        +StatusCode: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "SetPhishingFilterStatus",
      argNames: ["PhishingFilterStatus"],
      handler: (parameter: {
        +PhishingFilterStatus: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "SetSecureLockIcon",
      argNames: ["SecureLockIcon"],
      handler: (parameter: {
        +SecureLockIcon: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "StatusTextChange" | "TitleChange",
      argNames: ["Text"],
      handler: (parameter: {
        +Text: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "ThirdPartyUrlBlocked",
      argNames: ["URL", "dwCount"],
      handler: (parameter: {
        +URL: any,
        +dwCount: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "UpdatePageStatus",
      argNames: ["pDisp", "nPage", "fDone"],
      handler: (parameter: {
        +pDisp: any,
        +nPage: any,
        +fDone: any
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WebWorkerFinsihed",
      argNames: ["dwUniqueID"],
      handler: (parameter: {
        +dwUniqueID: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WebWorkerStarted",
      argNames: ["dwUniqueID", "bstrWorkerLabel"],
      handler: (parameter: {
        +dwUniqueID: number,
        +bstrWorkerLabel: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WindowClosing",
      argNames: ["IsChildWindow", "Cancel"],
      handler: (parameter: {
        +IsChildWindow: boolean,
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WindowSetHeight",
      argNames: ["Height"],
      handler: (parameter: {
        +Height: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WindowSetLeft",
      argNames: ["Left"],
      handler: (parameter: {
        +Left: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WindowSetResizable",
      argNames: ["Resizable"],
      handler: (parameter: {
        +Resizable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WindowSetTop",
      argNames: ["Top"],
      handler: (parameter: {
        +Top: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WindowSetWidth",
      argNames: ["Width"],
      handler: (parameter: {
        +Width: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "WindowStateChanged",
      argNames: ["dwWindowStateFlags", "dwValidFlagsMask"],
      handler: (parameter: {
        +dwWindowStateFlags: number,
        +dwValidFlagsMask: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "BeforeNavigate",
      argNames: SHDocVw$EventHelperTypes$WebBrowser_V1_BeforeNavigate_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$WebBrowser_V1_BeforeNavigate_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "CommandStateChange",
      argNames: ["Command", "Enable"],
      handler: (parameter: {
        +Command: number,
        +Enable: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "FrameBeforeNavigate",
      argNames: SHDocVw$EventHelperTypes$WebBrowser_V1_FrameBeforeNavigate_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$WebBrowser_V1_FrameBeforeNavigate_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "FrameNavigateComplete" | "NavigateComplete",
      argNames: ["URL"],
      handler: (parameter: {
        +URL: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "FrameNewWindow",
      argNames: SHDocVw$EventHelperTypes$WebBrowser_V1_FrameNewWindow_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$WebBrowser_V1_FrameNewWindow_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "NewWindow",
      argNames: SHDocVw$EventHelperTypes$WebBrowser_V1_NewWindow_ArgNames,
      handler: (
        parameter: SHDocVw$EventHelperTypes$WebBrowser_V1_NewWindow_Parameter
      ) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "ProgressChange",
      argNames: ["Progress", "ProgressMax"],
      handler: (parameter: {
        +Progress: number,
        +ProgressMax: number
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "PropertyChange",
      argNames: ["Property"],
      handler: (parameter: {
        +Property: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "Quit",
      argNames: ["Cancel"],
      handler: (parameter: {
        Cancel: boolean
      }) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event: "StatusTextChange" | "TitleChange",
      argNames: ["Text"],
      handler: (parameter: {
        +Text: string
      }) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorer,
      event: "DownloadBegin" | "DownloadComplete" | "OnQuit",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: SHDocVw$InternetExplorerMedium,
      event: "DownloadBegin" | "DownloadComplete" | "OnQuit",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: SHDocVw$ShellBrowserWindow,
      event: "DownloadBegin" | "DownloadComplete" | "OnQuit",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: SHDocVw$ShellNameSpace,
      event: "DoubleClick" | "Initialized" | "SelectionChange",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser,
      event: "DownloadBegin" | "DownloadComplete" | "OnQuit",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: SHDocVw$WebBrowser_V1,
      event:
        | "DownloadBegin"
        | "DownloadComplete"
        | "WindowActivate"
        | "WindowMove"
        | "WindowResize",
      handler: (parameter: {}) => void
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "InternetExplorer.Application": SHDocVw$InternetExplorer;
    "Shell.Explorer": SHDocVw$WebBrowser;
    "Shell.UIHelper": SHDocVw$ShellUIHelper;
    "ShellNameSpace.ShellNameSpace": SHDocVw$ShellNameSpace;
  }
}
