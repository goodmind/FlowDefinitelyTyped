declare module "activex-shell" {
  declare var npm$namespace$Shell32: {
    BrowseInfoFlags: typeof Shell32$BrowseInfoFlags,
    ExplorerBarCLSID: typeof Shell32$ExplorerBarCLSID,
    FileOperationFlag: typeof Shell32$FileOperationFlag,
    FileSystemDetails: typeof Shell32$FileSystemDetails,
    HotkeyModifiers: typeof Shell32$HotkeyModifiers,
    LinkShowWindowState: typeof Shell32$LinkShowWindowState,
    OfflineFolderStatus: typeof Shell32$OfflineFolderStatus,
    ShellFolderEnumerationFlags: typeof Shell32$ShellFolderEnumerationFlags,
    ShellFolderViewOptions: typeof Shell32$ShellFolderViewOptions,
    ShellFolderViewSelectItem: typeof Shell32$ShellFolderViewSelectItem,
    ShellLinkResolveFlags: typeof Shell32$ShellLinkResolveFlags,
    SettingKey: typeof Shell32$SettingKey,
    ShellExecuteShow: typeof Shell32$ShellExecuteShow,
    ShellSpecialFolderConstants: typeof Shell32$ShellSpecialFolderConstants,
    FileSearchBand: typeof Shell32$FileSearchBand,
    Folder3: typeof Shell32$Folder3,
    FolderItems3: typeof Shell32$FolderItems3,
    FolderItemVerb: typeof Shell32$FolderItemVerb,
    FolderItemVerbs: typeof Shell32$FolderItemVerbs,
    Shell: typeof Shell32$Shell,
    ShellDispatchInproc: typeof Shell32$ShellDispatchInproc,
    ShellFolderItem: typeof Shell32$ShellFolderItem,
    ShellFolderView: typeof Shell32$ShellFolderView,
    ShellFolderViewOC: typeof Shell32$ShellFolderViewOC,
    ShellLinkObject: typeof Shell32$ShellLinkObject,
    ShellWindows: typeof Shell32$ShellWindows
  };

  declare var Shell32$BrowseInfoFlags: {|
    +BIF_BROWSEFILEJUNCTIONS: 65536, // 65536
    +BIF_BROWSEFORCOMPUTER: 4096, // 4096
    +BIF_BROWSEFORPRINTER: 8192, // 8192
    +BIF_BROWSEINCLUDEFILES: 16384, // 16384
    +BIF_BROWSEINCLUDEURLS: 128, // 128
    +BIF_DONTGOBELOWDOMAIN: 2, // 2
    +BIF_EDITBOX: 16, // 16
    +BIF_NEWDIALOGSTYLE: 64, // 64
    +BIF_NONEWFOLDERBUTTON: 512, // 512
    +BIF_NOTRANSLATETARGETS: 1024, // 1024
    +BIF_RETURNFSANCESTORS: 8, // 8
    +BIF_RETURNONLYFSDIRS: 1, // 1
    +BIF_SHAREABLE: 32768, // 32768
    +BIF_STATUSTEXT: 4, // 4
    +BIF_UAHINT: 256, // 256
    +BIF_USENEWUI: 144, // 144
    +BIF_VALIDATE: 32 // 32
  |};

  declare var Shell32$ExplorerBarCLSID: {|
    +Favorites: "{EFA24E61-B078-11d0-89E4-00C04FC9E26E}", // "{EFA24E61-B078-11d0-89E4-00C04FC9E26E}"
    +Folders: "{EFA24E64-B078-11d0-89E4-00C04FC9E26E}", // "{EFA24E64-B078-11d0-89E4-00C04FC9E26E}"
    +History: "{EFA24E62-B078-11d0-89E4-00C04FC9E26E}", // "{EFA24E62-B078-11d0-89E4-00C04FC9E26E}"
    +Search: "{30D02401-6A81-11d0-8274-00C04FD5AE38}" // "{30D02401-6A81-11d0-8274-00C04FD5AE38}"
  |};

  declare var Shell32$FileOperationFlag: {|
    +FOF_ALLOWUNDO: 64, // 64
    +FOF_FILESONLY: 128, // 128
    +FOF_NOCONFIRMATION: 16, // 16
    +FOF_NOCONFIRMMKDIR: 512, // 512
    +FOF_NO_CONNECTED_ELEMENTS: 8192, // 8192
    +FOF_NOCOPYSECURITYATTRIBS: 2048, // 2048
    +FOF_NOERRORUI: 1024, // 1024
    +FOF_NORECURSION: 4096, // 4096
    +FOF_RENAMEONCOLLISION: 8, // 8
    +FOF_SILENT: 4, // 4
    +FOF_SIMPLEPROGRESS: 256 // 256
  |};

  declare var Shell32$FileSystemDetails: {|
    +Name: 0, // 0
    +Size: 1, // 1
    +Type: 2, // 2
    +LastModified: 3, // 3
    +Attributes: 4, // 4
    +InfoTip: -1 // -1
  |};

  declare var Shell32$HotkeyModifiers: {|
    +SHIFT: 1, // 1
    +CTRL: 2, // 2
    +ALT: 4, // 4
    +Extended: 8 // 8
  |};

  declare var Shell32$LinkShowWindowState: {|
    +Normal: 1, // 1
    +Minimized: 2, // 2
    +Maximized: 3 // 3
  |};

  /**
   * Constants for Folder2.OfflineStatus
   */

  declare var Shell32$OfflineFolderStatus: {|
    +OFS_DIRTYCACHE: 3, // 3
    +OFS_INACTIVE: -1, // -1
    +OFS_OFFLINE: 1, // 1
    +OFS_ONLINE: 0, // 0
    +OFS_SERVERBACK: 2 // 2
  |};

  declare var Shell32$ShellFolderEnumerationFlags: {|
    +SHCONTF_CHECKING_FOR_CHILDREN: 16, // 16
    +SHCONTF_FOLDERS: 32, // 32
    +SHCONTF_NONFOLDERS: 64, // 64
    +SHCONTF_INCLUDEHIDDEN: 128, // 128
    +SHCONTF_NETPRINTERSRCH: 512, // 512
    +SHCONTF_SHAREABLE: 1024, // 1024
    +SHCONTF_STORAGE: 2048, // 2048
    +SHCONTF_NAVIGATION_ENUM: 4096, // 4096
    +SHCONTF_FASTITEMS: 8192, // 8192
    +SHCONTF_FLATLIST: 16384, // 16384
    +SHCONTF_ENABLE_ASYNC: 32768, // 32768
    +SHCONTF_INCLUDESUPERHIDDEN: 65536 // 65536
  |};

  declare var Shell32$ShellFolderViewOptions: {|
    +SFVVO_SHOWALLOBJECTS: 1, // 1
    +SFVVO_SHOWEXTENSIONS: 2, // 2
    +SFVVO_SHOWCOMPCOLOR: 8, // 8
    +SFVVO_SHOWSYSFILES: 32, // 32
    +SFVVO_WIN95CLASSIC: 64, // 64
    +SFVVO_DOUBLECLICKINWEBVIEW: 128, // 128
    +SFVVO_DESKTOPHTML: 512 // 512
  |};

  declare var Shell32$ShellFolderViewSelectItem: {|
    +Deselect: 0, // 0
    +Select: 1, // 1
    +EditMode: 3, // 3
    +DeselectAllButThis: 4, // 4
    +ScrollIntoView: 8, // 8
    +Focus: 16 // 16
  |};

  declare var Shell32$ShellLinkResolveFlags: {|
    +NoUI: 1, // 1
    +Update: 4, // 4
    +NoUpdate: 8, // 8
    +NoSearch: 16, // 16
    +NoTrack: 32, // 32
    +NoLinkInfo: 64, // 64
    +InvokeMSI: 128 // 128
  |};

  declare var Shell32$SettingKey: {|
    +SSF_AUTOCHECKSELECT: 8388608, // 8388608
    +SSF_DESKTOPHTML: 512, // 512
    +SSF_DONTPRETTYPATH: 2048, // 2048
    +SSF_DOUBLECLICKINWEBVIEW: 128, // 128
    +SSF_FILTER: 65536, // 65536
    +SSF_HIDDENFILEEXTS: 4, // 4
    +SSF_HIDEICONS: 16384, // 16384
    +SSF_ICONSONLY: 16777216, // 16777216
    +SSF_MAPNETDRVBUTTON: 4096, // 4096
    +SSF_NOCONFIRMRECYCLE: 32768, // 32768
    +SSF_NONETCRAWLING: 1048576, // 1048576
    +SSF_SEPPROCESS: 524288, // 524288
    +SSF_SERVERADMINUI: 4, // 4
    +SSF_SHOWALLOBJECTS: 1, // 1
    +SSF_SHOWATTRIBCOL: 256, // 256
    +SSF_SHOWCOMPCOLOR: 8, // 8
    +SSF_SHOWEXTENSIONS: 2, // 2
    +SSF_SHOWINFOTIP: 8192, // 8192
    +SSF_SHOWSTARTPAGE: 4194304, // 4194304
    +SSF_SHOWSUPERHIDDEN: 262144, // 262144
    +SSF_SHOWSYSFILES: 32, // 32
    +SSF_SHOWTYPEOVERLAY: 33554432, // 33554432
    +SSF_SORTCOLUMNS: 16, // 16
    +SSF_STARTPANELON: 2097152, // 2097152
    +SSF_WEBVIEW: 131072, // 131072
    +SSF_WIN95CLASSIC: 1024 // 1024
  |};

  declare var Shell32$ShellExecuteShow: {|
    +Hidden: 0, // 0
    +Normal: 1, // 1
    +Minimized: 2, // 2
    +Maximized: 3, // 3
    +Last: 4, // 4
    +Current: 5, // 5
    +MinimizedNotActivated: 7, // 7
    +Application: 10 // 10
  |};

  /**
   * Constants for Special Folders for open/Explore
   */

  declare var Shell32$ShellSpecialFolderConstants: {|
    +ssfALTSTARTUP: 29, // 29
    +ssfAPPDATA: 26, // 26
    +ssfBITBUCKET: 10, // 10
    +ssfCOMMONALTSTARTUP: 30, // 30
    +ssfCOMMONAPPDATA: 35, // 35
    +ssfCOMMONDESKTOPDIR: 25, // 25
    +ssfCOMMONFAVORITES: 31, // 31
    +ssfCOMMONPROGRAMS: 23, // 23
    +ssfCOMMONSTARTMENU: 22, // 22
    +ssfCOMMONSTARTUP: 24, // 24
    +ssfCONTROLS: 3, // 3
    +ssfCOOKIES: 33, // 33
    +ssfDESKTOP: 0, // 0
    +ssfDESKTOPDIRECTORY: 16, // 16
    +ssfDRIVES: 17, // 17
    +ssfFAVORITES: 6, // 6
    +ssfFONTS: 20, // 20
    +ssfHISTORY: 34, // 34
    +ssfINTERNETCACHE: 32, // 32
    +ssfLOCALAPPDATA: 28, // 28
    +ssfMYPICTURES: 39, // 39
    +ssfNETHOOD: 19, // 19
    +ssfNETWORK: 18, // 18
    +ssfPERSONAL: 5, // 5
    +ssfPRINTERS: 4, // 4
    +ssfPRINTHOOD: 27, // 27
    +ssfPROFILE: 40, // 40
    +ssfPROGRAMFILES: 38, // 38
    +ssfPROGRAMFILESx86: 48, // 48
    +ssfPROGRAMS: 2, // 2
    +ssfRECENT: 8, // 8
    +ssfSENDTO: 9, // 9
    +ssfSTARTMENU: 11, // 11
    +ssfSTARTUP: 7, // 7
    +ssfSYSTEM: 37, // 37
    +ssfSYSTEMx86: 41, // 41
    +ssfTEMPLATES: 21, // 21
    +ssfWINDOWS: 36 // 36
  |};

  /**
   * FileSearchBand Class
   */
  declare class Shell32$FileSearchBand {
    constructor(): this;

    /**
     * Retrieve the file from which the search was restored.
     */
    QueryFile: any;

    /**
     * Get the search scope
     */
    Scope: any;

    /**
     * Retrieve the guid of the currently active search.
     */
    SearchID: string;

    /**
     * method SetFocus
     */
    SetFocus(): void;

    /**
     * method SetSearchParameters
     */
    SetSearchParameters(
      pbstrSearchID: string,
      bNavToResults: boolean,
      pvarScope?: any,
      pvarQueryFile?: any
    ): void;
  }

  /**
   * Definition of interface Folder version 3
   */
  declare class Shell32$Folder3 {
    constructor(): this;

    /**
     * Get Application object
     */
    Application: any;

    /**
     * Copy Items to this folder.
     */
    CopyHere(
      vItem: string | Shell32$ShellFolderItem | Shell32$FolderItems3,
      vOptions?: $Values<typeof Shell32$FileOperationFlag>
    ): void;

    /**
     * Call this after the WebView barricade is dismissed by the user
     */
    DismissedWebViewBarricade(): void;

    /**
     * Get the details about an item.
     * @param vItem The item for which to retrieve the information.
     * @param iColumn An integer value that specifies the information to be retrieved. The information available for an item depends on the folder in which it is displayed. This value
     * corresponds to the zero-based column number that is displayed in a Shell view.
     */
    GetDetailsOf(vItem: Shell32$ShellFolderItem, iColumn: number): string;

    /**
     * Should the WebView barricade be shown?
     */
    HaveToShowWebViewBarricade: boolean;

    /**
     * The collection of Items in folder
     */
    Items(): Shell32$FolderItems3;

    /**
     * Move Items to this folder.
     */
    MoveHere(
      vItem: string | Shell32$ShellFolderItem | Shell32$FolderItems3,
      vOptions?: $Values<typeof Shell32$FileOperationFlag>
    ): void;

    /**
     * Create a new sub folder in this folder.
     */
    NewFolder(bName: string): void;

    /**
     * Offline status of the server?
     */
    OfflineStatus: $Values<typeof Shell32$OfflineFolderStatus>;

    /**
     * Get Parent object
     */
    ParentFolder: Shell32$Folder3;

    /**
     * Parse the name to get an item.
     */
    ParseName(bName: string): Shell32$ShellFolderItem | null;

    /**
     * Folder's FolderItem interface
     */
    Self: Shell32$ShellFolderItem;

    /**
     * Ask if the WebView barricade should be shown or not
     */
    ShowWebViewBarricade: boolean;

    /**
     * Synchronize all offline files
     */
    Synchronize(): void;

    /**
     * Get the display name for the window
     */
    Title: string;
  }

  /**
   * Definition of interface FolderItems3
   */
  declare class Shell32$FolderItems3 {
    constructor(): this;

    /**
     * Get Application object
     */
    Application: any;

    /**
     * Get count of items in the folder
     */
    Count: number;

    /**
     * Set a wildcard filter to apply to the items returned
     */
    Filter(
      grfFlags: $Values<typeof Shell32$ShellFolderEnumerationFlags>,
      bstrFileSpec: string
    ): void;

    /**
     * Executes a verb on a collection of `FolderItem` objects
     * @param vVerb String that corresponds to the command to be executed. If no verb is specified, the default verb is executed.
     * @param vArgs String with one or more arguments to the command specified by vVerb. The format of this string depends on the particular verb.
     */
    InvokeVerbEx(vVerb?: string, vArgs?: string): void;

    /**
     * Return the figure for the given index
     */
    Item(index?: any): Shell32$ShellFolderItem;

    /**
     * Get the list of verbs common to all the items
     */
    Verbs: Shell32$FolderItemVerbs;
  }

  /**
   * Definition of interface FolderItemVerb
   */
  declare class Shell32$FolderItemVerb {
    constructor(): this;

    /**
     * Execute the verb
     */
    DoIt(): void;

    /**
     * Get display name for item
     */
    Name: string;
  }

  /**
   * Definition of interface FolderItemVerbs
   */
  declare class Shell32$FolderItemVerbs {
    constructor(): this;

    /**
     * Get count of open folder windows
     */
    Count: number;

    /**
     * Return the specified verb
     */
    Item(index?: any): Shell32$FolderItemVerb;
  }

  /**
   * Shell Object Type Information
   */
  declare class Shell32$Shell {
    constructor(): this;

    /**
     * Add an object to the Recent Docuements
     */
    AddToRecent(varFile: string | null, bstrCategory?: string): void;

    /**
     * Get Application object
     */
    Application: any;

    /**
     * Browse the name space for a Folder
     */
    BrowseForFolder(
      Hwnd: number,
      Title: string,
      Options: number | $Values<typeof Shell32$BrowseInfoFlags>,
      RootFolder?: string | $Values<typeof Shell32$ShellSpecialFolderConstants>
    ): Shell32$Folder3;

    /**
     * Determine if the current user can start/stop the named service.
     */
    CanStartStopService(ServiceName: string): boolean;

    /**
     * Cascade Windows
     */
    CascadeWindows(): void;
    ControlPanelItem(bstrDir: string): void;

    /**
     * Eject the pc
     */
    EjectPC(): void;

    /**
     * Explore a folder
     */
    Explore(
      vDir: string | $Values<typeof Shell32$ShellSpecialFolderConstants>
    ): void;

    /**
     * Return explorer policy value
     *
     * The specified value name must be within the **HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer** subkey.
     * If the value name does not exist then the method returns null.
     */
    ExplorerPolicy(bstrPolicyName: string): any;

    /**
     * Bring up the file run dialog box
     */
    FileRun(): void;

    /**
     * Find a computer
     */
    FindComputer(): void;

    /**
     * Find Files
     */
    FindFiles(): void;

    /**
     * Find a Printer in the Directory Service
     */
    FindPrinter(Name?: string, location?: string, model?: string): void;

    /**
     * Return shell global setting
     */
    GetSetting(lSetting: number | $Values<typeof Shell32$SettingKey>): boolean;

    /**
     * `DirectoryServiceAvailable` -- Returns **true** if the directory service is available
     *
     * `IsOS_DomainMember` -- Returns **true** if the computer is a member of a domain (_Windows XP and later_)
     *
     * `IsOS_Personal` -- Returns **true** if the operating system is Windows XP Home Edition (_Windows XP only_)
     *
     * `IsOS_Professional` -- Returns **true** if the operating system is Windows XP Professional Edition (_Windows XP only_)
     */
    GetSystemInformation(
      Name:
        | "DirectoryServiceAvailable"
        | "IsOS_DomainMember"
        | "IsOS_Personal"
        | "IsOS_Professional"
    ): boolean;

    /**
     * `DoubleClickTime` -- The double-click time, in milliseconds
     *
     * `PhysicalMemoryInstalled` -- The amount of physical memory installed, in bytes
     *
     * `ProcessorArchitecture` -- The processor architecture. For details, see the discussion of the **wProcessorArchitecture** member of the
     * [`SYSTEM_INFO`](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724958.aspx) structure
     *
     * `ProcessorLevel` -- The processor level. Returns 3, 4, or 5, for x386, x486, and Pentium-level processors, respectively (_Windows Vista and later_)
     *
     * `ProcessorSpeed` -- The processor speed, in megahertz (MHz)
     */
    GetSystemInformation(
      Name:
        | "DoubleClickTime"
        | "PhysicalMemoryInstalled"
        | "ProcessorArchitecture"
        | "ProcessorLevel"
        | "ProcessorSpeed"
    ): number;

    /**
     * Display shell help
     */
    Help(): void;

    /**
     * get restriction settings
     */
    IsRestricted(Group: string, Restriction: string): number;

    /**
     * Determine if a service is running by name.
     */
    IsServiceRunning(ServiceName: string): any;

    /**
     * Minimize all windows
     */
    MinimizeAll(): void;

    /**
     * Get special folder from ShellSpecialFolderConstants
     */
    NameSpace(
      vDir: string | $Values<typeof Shell32$ShellSpecialFolderConstants>
    ): Shell32$Folder3 | null;

    /**
     * Open a folder
     */
    Open(
      vDir: string | $Values<typeof Shell32$ShellSpecialFolderConstants>
    ): void;

    /**
     * Get Parent object
     */
    Parent: any;

    /**
     * Refresh the menu
     */
    RefreshMenu(): void;

    /**
     * Immersive Search
     */
    SearchCommand(): void;

    /**
     * Start a service by name, and optionally set it to autostart.
     *
     * The method returns `false` if the service has already been started. Before calling this method, you can call
     * [Shell.IsServiceRunning](https://msdn.microsoft.com/en-us/library/windows/desktop/gg537742.aspx) to ascertain the status of the service.
     */
    ServiceStart(ServiceName: string, Persistent?: boolean): boolean;

    /**
     * Stop a service by name, and optionally disable autostart.
     *
     * The method returns `false` if the service has already been stopped. Before calling this method, you can call
     * [Shell.IsServiceRunning](https://msdn.microsoft.com/en-us/library/windows/desktop/gg537742.aspx) to ascertain the status of the service.
     */
    ServiceStop(ServiceName: string, Persistent?: boolean): boolean;

    /**
     * Displays the **Date and Time Properties** dialog box.
     */
    SetTime(): void;

    /**
     * Execute generic command
     * @param sFile A string that contains the name of the file on which `ShellExecute` will perform the action specified by `vOperation`.
     * @param vArgs A string that contains parameter values for the operation.
     * @param vDir The fully qualified path of the directory that contains the file specified by `sFile`. If this parameter is not specified, the current working directory is used.
     * @param vOperation The operation to be performed. This value is set to one of the verb strings that is supported by the file. If this parameter is not specified, the default operation is
     * performed.
     * @param vShow A recommendation as to how the application window should be displayed initially. The application can ignore this recommendation.
     */
    ShellExecute(
      File: string,
      vArgs?: string,
      vDir?: string,
      vOperation?: string,
      vShow?: $Values<typeof Shell32$ShellExecuteShow>
    ): void;

    /**
     * Show/Hide browser bar.
     */
    ShowBrowserBar(
      bstrClsid: $Values<typeof Shell32$ExplorerBarCLSID>,
      bShow: boolean
    ): any;

    /**
     * Exit Windows
     */
    ShutdownWindows(): void;

    /**
     * Tile windows horizontally
     */
    TileHorizontally(): void;

    /**
     * Tile windows vertically
     */
    TileVertically(): void;

    /**
     * Raise/lower the desktop
     */
    ToggleDesktop(): void;

    /**
     * Displays the **Taskbar and Start Menu Properties** dialog box.
     */
    TrayProperties(): void;

    /**
     * Undo Minimize All
     */
    UndoMinimizeALL(): void;

    /**
     * The collection of open folder windows
     */
    Windows(): Shell32$ShellWindows;

    /**
     * Displays the **Windows Security** dialog box.
     */
    WindowsSecurity(): void;

    /**
     * Displays your open windows in a 3D stack that you can flip through.
     */
    WindowSwitcher(): void;
  }

  /**
   * ShellDispatch Load in Shell Context
   */
  declare class Shell32$ShellDispatchInproc {
    constructor(): this;
  }

  /**
   * Shell Folder Item
   */
  declare class Shell32$ShellFolderItem {
    constructor(): this;

    /**
     * Get Application object
     */
    Application: any;

    /**
     * Access an extended property
     */
    ExtendedProperty(bstrPropName: string): any;

    /**
     * If item is a folder return folder object
     */
    GetFolder: Shell32$Folder3 | null;

    /**
     * If item is link return link object
     */
    GetLink: Shell32$ShellLinkObject | null;

    /**
     * Execute a command on the item.
     * Must be one of the values returned by the item's `FolderItemVerb.Name` property.
     * If no verb is specified, the default verb will be invoked.
     */
    InvokeVerb(vVerb?: string): void;

    /**
     * Extended version of InvokeVerb
     * @param vVerb String that corresponds to the command to be executed. If no verb is specified, the default verb is executed.
     * @param vArgs String with one or more arguments to the command specified by vVerb. The format of this string depends on the particular verb.
     */
    InvokeVerbEx(vVerb?: string, vArgs?: string): void;

    /**
     * Indicates if the item can be hosted inside a browser or Windows Explorer frame.
     */
    IsBrowsable: boolean;

    /**
     * Is the item a file system object?
     */
    IsFileSystem: boolean;

    /**
     * Is the item a Folder?
     */
    IsFolder: boolean;

    /**
     * Is the item a link?
     */
    IsLink: boolean;

    /**
     * Modification Date?
     */
    ModifyDate: VarDate;

    /**
     * Get display name for item
     */
    Name: string;

    /**
     * Get Parent object
     */
    Parent: any;

    /**
     * Get the pathname to the item
     */
    Path: string;

    /**
     * Size
     */
    Size: number;

    /**
     * Contains a string representation of the item's type
     */
    Type: string;

    /**
     * Get the list of verbs for the object
     */
    Verbs(): Shell32$FolderItemVerbs;
  }

  /**
   * Shell Folder View Object
   */
  declare class Shell32$ShellFolderView {
    constructor(): this;

    /**
     * Get Application object
     */
    Application: any;

    /**
     * Get Current View Mode
     */
    CurrentViewMode: number;

    /**
     * Filter View
     */
    FilterView(bstrFilterText: string): void;

    /**
     * The currently focused item in the folder
     */
    FocusedItem: Shell32$ShellFolderItem;

    /**
     * Get the folder being viewed
     */
    Folder: Shell32$Folder3;

    /**
     * Get Folder Flags
     */
    FolderFlags: number;

    /**
     * Get Group By Column
     */
    GroupBy: string;

    /**
     * Set Icon Size
     */
    IconSize: number;

    /**
     * Show items menu and return command selected
     */
    PopupItemMenu(pfi: Shell32$ShellFolderItem, vx?: any, vy?: any): string;

    /**
     * The collection of Selected Items in folder
     */
    SelectedItems(): Shell32$FolderItems3;

    /**
     * Select the item
     */
    SelectItem(
      pvfi: Shell32$ShellFolderItem,
      dwFlags: $Values<typeof Shell32$ShellFolderViewSelectItem>
    ): void;

    /**
     * Select Item relative to the Current Item
     */
    SelectItemRelative(iRelative: number): void;

    /**
     * Get Sorting Columns
     */
    SortColumns: string;

    /**
     * Returns the view options for showing a folder.
     */
    ViewOptions: $Values<typeof Shell32$ShellFolderViewOptions>;
  }

  /**
   * The **ShellFolderView** object fires two events, **EnumDone** and **SelectionChanged**, that are typically handled by applications. However, some applications
   * must handle events from a series of **ShellFolderView** objects. For example, an application might host a **WebBrowser** control that allows users to navigate through
   * a series of folders. Each folder has its own **ShellFolderView** object with its associated events. Handling these events can be difficult.
   *
   * The **ShellFolderViewOC** object simplifies event handling for such scenarios. It allows applications to handle events for all ShellFolderView objects with a single
   * pair of **ShellFolderViewOC** event handlers. Each time the user navigates to a new folder, the application passes the associated **ShellFolderView** object to the
   * **ShellFolderViewOC** object by calling **SetFolderView**. Then, when an **EnumDone** or **SelectionChanged** event is fired, the **ShellFolderViewOC** object
   * forwards the event to its own handler for processing.
   */
  declare class Shell32$ShellFolderViewOC {
    constructor(): this;

    /**
     * Set the ShellFolderView object to monitor events of.
     */
    SetFolderView(pdisp: Shell32$ShellFolderView): void;
  }

  /**
   * Shell Link object
   */
  declare class Shell32$ShellLinkObject {
    constructor(): this;

    /**
     * Arguments for the link
     */
    Arguments: string;

    /**
     * Description of the link
     */
    Description: string;

    /**
     * Get the IconLocation for the link
     */
    GetIconLocation(pbs: string): number;

    /**
     * Hotkey for the link
     */
    Hotkey: number;

    /**
     * Fully qualified path of the link
     */
    Path: string;

    /**
     * Tell the link to resolve itself
     */
    Resolve(fFlags: $Values<typeof Shell32$ShellLinkResolveFlags>): void;

    /**
     * Tell the link to save the changes
     * @param sFile The fully qualified path of the file where the new link information is to be saved. If no file is specified, the current file is used.
     */
    Save(vWhere?: string): void;

    /**
     * Set the IconLocation for the link
     * @param sPath The fully qualified path of the file that contains the icon.
     * @param iIcon The index of the icon in the file specified by _sPath_.
     */
    SetIconLocation(sPath: string, iIcon: number): void;

    /**
     * Get the Show Command for the link
     */
    ShowCommand: $Values<typeof Shell32$LinkShowWindowState>;

    /**
     * Get the target of a link object
     */
    Target: Shell32$ShellFolderItem | null;

    /**
     * Get the working directory for the link
     */
    WorkingDirectory: string;
  }

  declare class Shell32$ShellWindows {
    constructor(): this;

    /**
     * Retrieves an InternetExplorer object that represents the Shell window.
     * @param index Default is 0
     */
    Item(index?: number): SHDocVw.InternetExplorer;

    /**
     * Contains the number of items in the collection.
     */
    Count: number;
  }
  declare interface ActiveXObject {
    on(
      obj: Shell32$ShellFolderView,
      event:
        | "BeginDrag"
        | "DefaultVerbInvoked"
        | "EnumDone"
        | "SelectionChanged"
        | "VerbInvoked",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Shell32$ShellFolderViewOC,
      event:
        | "BeginDrag"
        | "DefaultVerbInvoked"
        | "EnumDone"
        | "SelectionChanged"
        | "VerbInvoked",
      handler: (parameter: {}) => void
    ): void;
  }
  declare interface ActiveXObjectNameMap {
    "Shell.Application": Shell32$Shell;
    "Shell.FolderView": Shell32$ShellFolderViewOC;
  }
  declare interface EnumeratorConstructor {
    new(col: Shell32$FolderItems3): Enumerator<Shell32$ShellFolderItem>;
    new(col: Shell32$FolderItemVerbs): Enumerator<Shell32$FolderItemVerb>;
    new(col: Shell32$ShellWindows): Enumerator<SHDocVw.InternetExplorer>;
  }
}
