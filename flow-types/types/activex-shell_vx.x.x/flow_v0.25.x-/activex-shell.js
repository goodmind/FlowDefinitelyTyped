declare module "activex-shell" {
  declare class Shell32$BrowseInfoFlags {
    constructor(...args: empty): mixed;
    static +BIF_BROWSEFILEJUNCTIONS: Class<Shell32$BrowseInfoFlags__BIF_BROWSEFILEJUNCTIONS> &
      Shell32$BrowseInfoFlags__BIF_BROWSEFILEJUNCTIONS &
      65536; // 65536
    static +BIF_BROWSEFORCOMPUTER: Class<Shell32$BrowseInfoFlags__BIF_BROWSEFORCOMPUTER> &
      Shell32$BrowseInfoFlags__BIF_BROWSEFORCOMPUTER &
      4096; // 4096
    static +BIF_BROWSEFORPRINTER: Class<Shell32$BrowseInfoFlags__BIF_BROWSEFORPRINTER> &
      Shell32$BrowseInfoFlags__BIF_BROWSEFORPRINTER &
      8192; // 8192
    static +BIF_BROWSEINCLUDEFILES: Class<Shell32$BrowseInfoFlags__BIF_BROWSEINCLUDEFILES> &
      Shell32$BrowseInfoFlags__BIF_BROWSEINCLUDEFILES &
      16384; // 16384
    static +BIF_BROWSEINCLUDEURLS: Class<Shell32$BrowseInfoFlags__BIF_BROWSEINCLUDEURLS> &
      Shell32$BrowseInfoFlags__BIF_BROWSEINCLUDEURLS &
      128; // 128
    static +BIF_DONTGOBELOWDOMAIN: Class<Shell32$BrowseInfoFlags__BIF_DONTGOBELOWDOMAIN> &
      Shell32$BrowseInfoFlags__BIF_DONTGOBELOWDOMAIN &
      2; // 2
    static +BIF_EDITBOX: Class<Shell32$BrowseInfoFlags__BIF_EDITBOX> &
      Shell32$BrowseInfoFlags__BIF_EDITBOX &
      16; // 16
    static +BIF_NEWDIALOGSTYLE: Class<Shell32$BrowseInfoFlags__BIF_NEWDIALOGSTYLE> &
      Shell32$BrowseInfoFlags__BIF_NEWDIALOGSTYLE &
      64; // 64
    static +BIF_NONEWFOLDERBUTTON: Class<Shell32$BrowseInfoFlags__BIF_NONEWFOLDERBUTTON> &
      Shell32$BrowseInfoFlags__BIF_NONEWFOLDERBUTTON &
      512; // 512
    static +BIF_NOTRANSLATETARGETS: Class<Shell32$BrowseInfoFlags__BIF_NOTRANSLATETARGETS> &
      Shell32$BrowseInfoFlags__BIF_NOTRANSLATETARGETS &
      1024; // 1024
    static +BIF_RETURNFSANCESTORS: Class<Shell32$BrowseInfoFlags__BIF_RETURNFSANCESTORS> &
      Shell32$BrowseInfoFlags__BIF_RETURNFSANCESTORS &
      8; // 8
    static +BIF_RETURNONLYFSDIRS: Class<Shell32$BrowseInfoFlags__BIF_RETURNONLYFSDIRS> &
      Shell32$BrowseInfoFlags__BIF_RETURNONLYFSDIRS &
      1; // 1
    static +BIF_SHAREABLE: Class<Shell32$BrowseInfoFlags__BIF_SHAREABLE> &
      Shell32$BrowseInfoFlags__BIF_SHAREABLE &
      32768; // 32768
    static +BIF_STATUSTEXT: Class<Shell32$BrowseInfoFlags__BIF_STATUSTEXT> &
      Shell32$BrowseInfoFlags__BIF_STATUSTEXT &
      4; // 4
    static +BIF_UAHINT: Class<Shell32$BrowseInfoFlags__BIF_UAHINT> &
      Shell32$BrowseInfoFlags__BIF_UAHINT &
      256; // 256
    static +BIF_USENEWUI: Class<Shell32$BrowseInfoFlags__BIF_USENEWUI> &
      Shell32$BrowseInfoFlags__BIF_USENEWUI &
      144; // 144
    static +BIF_VALIDATE: Class<Shell32$BrowseInfoFlags__BIF_VALIDATE> &
      Shell32$BrowseInfoFlags__BIF_VALIDATE &
      32; // 32
  }

  declare class Shell32$BrowseInfoFlags__BIF_BROWSEFILEJUNCTIONS
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_BROWSEFORCOMPUTER
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_BROWSEFORPRINTER
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_BROWSEINCLUDEFILES
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_BROWSEINCLUDEURLS
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_DONTGOBELOWDOMAIN
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_EDITBOX
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_NEWDIALOGSTYLE
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_NONEWFOLDERBUTTON
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_NOTRANSLATETARGETS
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_RETURNFSANCESTORS
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_RETURNONLYFSDIRS
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_SHAREABLE
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_STATUSTEXT
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_UAHINT
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_USENEWUI
    mixins Shell32$BrowseInfoFlags {}
  declare class Shell32$BrowseInfoFlags__BIF_VALIDATE
    mixins Shell32$BrowseInfoFlags {}

  declare class Shell32$ExplorerBarCLSID {
    constructor(...args: empty): mixed;
    static +Favorites: Class<Shell32$ExplorerBarCLSID__Favorites> &
      Shell32$ExplorerBarCLSID__Favorites &
      "{EFA24E61-B078-11d0-89E4-00C04FC9E26E}"; // "{EFA24E61-B078-11d0-89E4-00C04FC9E26E}"
    static +Folders: Class<Shell32$ExplorerBarCLSID__Folders> &
      Shell32$ExplorerBarCLSID__Folders &
      "{EFA24E64-B078-11d0-89E4-00C04FC9E26E}"; // "{EFA24E64-B078-11d0-89E4-00C04FC9E26E}"
    static +History: Class<Shell32$ExplorerBarCLSID__History> &
      Shell32$ExplorerBarCLSID__History &
      "{EFA24E62-B078-11d0-89E4-00C04FC9E26E}"; // "{EFA24E62-B078-11d0-89E4-00C04FC9E26E}"
    static +Search: Class<Shell32$ExplorerBarCLSID__Search> &
      Shell32$ExplorerBarCLSID__Search &
      "{30D02401-6A81-11d0-8274-00C04FD5AE38}"; // "{30D02401-6A81-11d0-8274-00C04FD5AE38}"
  }

  declare class Shell32$ExplorerBarCLSID__Favorites
    mixins Shell32$ExplorerBarCLSID {}
  declare class Shell32$ExplorerBarCLSID__Folders
    mixins Shell32$ExplorerBarCLSID {}
  declare class Shell32$ExplorerBarCLSID__History
    mixins Shell32$ExplorerBarCLSID {}
  declare class Shell32$ExplorerBarCLSID__Search
    mixins Shell32$ExplorerBarCLSID {}

  declare class Shell32$FileOperationFlag {
    constructor(...args: empty): mixed;
    static +FOF_ALLOWUNDO: Class<Shell32$FileOperationFlag__FOF_ALLOWUNDO> &
      Shell32$FileOperationFlag__FOF_ALLOWUNDO &
      64; // 64
    static +FOF_FILESONLY: Class<Shell32$FileOperationFlag__FOF_FILESONLY> &
      Shell32$FileOperationFlag__FOF_FILESONLY &
      128; // 128
    static +FOF_NOCONFIRMATION: Class<Shell32$FileOperationFlag__FOF_NOCONFIRMATION> &
      Shell32$FileOperationFlag__FOF_NOCONFIRMATION &
      16; // 16
    static +FOF_NOCONFIRMMKDIR: Class<Shell32$FileOperationFlag__FOF_NOCONFIRMMKDIR> &
      Shell32$FileOperationFlag__FOF_NOCONFIRMMKDIR &
      512; // 512
    static +FOF_NO_CONNECTED_ELEMENTS: Class<Shell32$FileOperationFlag__FOF_NO_CONNECTED_ELEMENTS> &
      Shell32$FileOperationFlag__FOF_NO_CONNECTED_ELEMENTS &
      8192; // 8192
    static +FOF_NOCOPYSECURITYATTRIBS: Class<Shell32$FileOperationFlag__FOF_NOCOPYSECURITYATTRIBS> &
      Shell32$FileOperationFlag__FOF_NOCOPYSECURITYATTRIBS &
      2048; // 2048
    static +FOF_NOERRORUI: Class<Shell32$FileOperationFlag__FOF_NOERRORUI> &
      Shell32$FileOperationFlag__FOF_NOERRORUI &
      1024; // 1024
    static +FOF_NORECURSION: Class<Shell32$FileOperationFlag__FOF_NORECURSION> &
      Shell32$FileOperationFlag__FOF_NORECURSION &
      4096; // 4096
    static +FOF_RENAMEONCOLLISION: Class<Shell32$FileOperationFlag__FOF_RENAMEONCOLLISION> &
      Shell32$FileOperationFlag__FOF_RENAMEONCOLLISION &
      8; // 8
    static +FOF_SILENT: Class<Shell32$FileOperationFlag__FOF_SILENT> &
      Shell32$FileOperationFlag__FOF_SILENT &
      4; // 4
    static +FOF_SIMPLEPROGRESS: Class<Shell32$FileOperationFlag__FOF_SIMPLEPROGRESS> &
      Shell32$FileOperationFlag__FOF_SIMPLEPROGRESS &
      256; // 256
  }

  declare class Shell32$FileOperationFlag__FOF_ALLOWUNDO
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_FILESONLY
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_NOCONFIRMATION
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_NOCONFIRMMKDIR
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_NO_CONNECTED_ELEMENTS
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_NOCOPYSECURITYATTRIBS
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_NOERRORUI
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_NORECURSION
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_RENAMEONCOLLISION
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_SILENT
    mixins Shell32$FileOperationFlag {}
  declare class Shell32$FileOperationFlag__FOF_SIMPLEPROGRESS
    mixins Shell32$FileOperationFlag {}

  declare class Shell32$FileSystemDetails {
    constructor(...args: empty): mixed;
    static +Name: Class<Shell32$FileSystemDetails__Name> &
      Shell32$FileSystemDetails__Name &
      0; // 0
    static +Size: Class<Shell32$FileSystemDetails__Size> &
      Shell32$FileSystemDetails__Size &
      1; // 1
    static +Type: Class<Shell32$FileSystemDetails__Type> &
      Shell32$FileSystemDetails__Type &
      2; // 2
    static +LastModified: Class<Shell32$FileSystemDetails__LastModified> &
      Shell32$FileSystemDetails__LastModified &
      3; // 3
    static +Attributes: Class<Shell32$FileSystemDetails__Attributes> &
      Shell32$FileSystemDetails__Attributes &
      4; // 4
    static +InfoTip: Class<Shell32$FileSystemDetails__InfoTip> &
      Shell32$FileSystemDetails__InfoTip &
      -1; // -1
  }

  declare class Shell32$FileSystemDetails__Name
    mixins Shell32$FileSystemDetails {}
  declare class Shell32$FileSystemDetails__Size
    mixins Shell32$FileSystemDetails {}
  declare class Shell32$FileSystemDetails__Type
    mixins Shell32$FileSystemDetails {}
  declare class Shell32$FileSystemDetails__LastModified
    mixins Shell32$FileSystemDetails {}
  declare class Shell32$FileSystemDetails__Attributes
    mixins Shell32$FileSystemDetails {}
  declare class Shell32$FileSystemDetails__InfoTip
    mixins Shell32$FileSystemDetails {}

  declare class Shell32$HotkeyModifiers {
    constructor(...args: empty): mixed;
    static +SHIFT: Class<Shell32$HotkeyModifiers__SHIFT> &
      Shell32$HotkeyModifiers__SHIFT &
      1; // 1
    static +CTRL: Class<Shell32$HotkeyModifiers__CTRL> &
      Shell32$HotkeyModifiers__CTRL &
      2; // 2
    static +ALT: Class<Shell32$HotkeyModifiers__ALT> &
      Shell32$HotkeyModifiers__ALT &
      4; // 4
    static +Extended: Class<Shell32$HotkeyModifiers__Extended> &
      Shell32$HotkeyModifiers__Extended &
      8; // 8
  }

  declare class Shell32$HotkeyModifiers__SHIFT mixins Shell32$HotkeyModifiers {}
  declare class Shell32$HotkeyModifiers__CTRL mixins Shell32$HotkeyModifiers {}
  declare class Shell32$HotkeyModifiers__ALT mixins Shell32$HotkeyModifiers {}
  declare class Shell32$HotkeyModifiers__Extended
    mixins Shell32$HotkeyModifiers {}

  declare class Shell32$LinkShowWindowState {
    constructor(...args: empty): mixed;
    static +Normal: Class<Shell32$LinkShowWindowState__Normal> &
      Shell32$LinkShowWindowState__Normal &
      1; // 1
    static +Minimized: Class<Shell32$LinkShowWindowState__Minimized> &
      Shell32$LinkShowWindowState__Minimized &
      2; // 2
    static +Maximized: Class<Shell32$LinkShowWindowState__Maximized> &
      Shell32$LinkShowWindowState__Maximized &
      3; // 3
  }

  declare class Shell32$LinkShowWindowState__Normal
    mixins Shell32$LinkShowWindowState {}
  declare class Shell32$LinkShowWindowState__Minimized
    mixins Shell32$LinkShowWindowState {}
  declare class Shell32$LinkShowWindowState__Maximized
    mixins Shell32$LinkShowWindowState {}

  /**
   * Constants for Folder2.OfflineStatus
   */
  declare class Shell32$OfflineFolderStatus {
    constructor(...args: empty): mixed;
    static +OFS_DIRTYCACHE: Class<Shell32$OfflineFolderStatus__OFS_DIRTYCACHE> &
      Shell32$OfflineFolderStatus__OFS_DIRTYCACHE &
      3; // 3
    static +OFS_INACTIVE: Class<Shell32$OfflineFolderStatus__OFS_INACTIVE> &
      Shell32$OfflineFolderStatus__OFS_INACTIVE &
      -1; // -1
    static +OFS_OFFLINE: Class<Shell32$OfflineFolderStatus__OFS_OFFLINE> &
      Shell32$OfflineFolderStatus__OFS_OFFLINE &
      1; // 1
    static +OFS_ONLINE: Class<Shell32$OfflineFolderStatus__OFS_ONLINE> &
      Shell32$OfflineFolderStatus__OFS_ONLINE &
      0; // 0
    static +OFS_SERVERBACK: Class<Shell32$OfflineFolderStatus__OFS_SERVERBACK> &
      Shell32$OfflineFolderStatus__OFS_SERVERBACK &
      2; // 2
  }

  declare class Shell32$OfflineFolderStatus__OFS_DIRTYCACHE
    mixins Shell32$OfflineFolderStatus {}
  declare class Shell32$OfflineFolderStatus__OFS_INACTIVE
    mixins Shell32$OfflineFolderStatus {}
  declare class Shell32$OfflineFolderStatus__OFS_OFFLINE
    mixins Shell32$OfflineFolderStatus {}
  declare class Shell32$OfflineFolderStatus__OFS_ONLINE
    mixins Shell32$OfflineFolderStatus {}
  declare class Shell32$OfflineFolderStatus__OFS_SERVERBACK
    mixins Shell32$OfflineFolderStatus {}

  declare class Shell32$ShellFolderEnumerationFlags {
    constructor(...args: empty): mixed;
    static +SHCONTF_CHECKING_FOR_CHILDREN: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_CHECKING_FOR_CHILDREN> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_CHECKING_FOR_CHILDREN &
      16; // 16
    static +SHCONTF_FOLDERS: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_FOLDERS> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_FOLDERS &
      32; // 32
    static +SHCONTF_NONFOLDERS: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_NONFOLDERS> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_NONFOLDERS &
      64; // 64
    static +SHCONTF_INCLUDEHIDDEN: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_INCLUDEHIDDEN> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_INCLUDEHIDDEN &
      128; // 128
    static +SHCONTF_NETPRINTERSRCH: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_NETPRINTERSRCH> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_NETPRINTERSRCH &
      512; // 512
    static +SHCONTF_SHAREABLE: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_SHAREABLE> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_SHAREABLE &
      1024; // 1024
    static +SHCONTF_STORAGE: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_STORAGE> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_STORAGE &
      2048; // 2048
    static +SHCONTF_NAVIGATION_ENUM: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_NAVIGATION_ENUM> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_NAVIGATION_ENUM &
      4096; // 4096
    static +SHCONTF_FASTITEMS: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_FASTITEMS> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_FASTITEMS &
      8192; // 8192
    static +SHCONTF_FLATLIST: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_FLATLIST> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_FLATLIST &
      16384; // 16384
    static +SHCONTF_ENABLE_ASYNC: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_ENABLE_ASYNC> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_ENABLE_ASYNC &
      32768; // 32768
    static +SHCONTF_INCLUDESUPERHIDDEN: Class<Shell32$ShellFolderEnumerationFlags__SHCONTF_INCLUDESUPERHIDDEN> &
      Shell32$ShellFolderEnumerationFlags__SHCONTF_INCLUDESUPERHIDDEN &
      65536; // 65536
  }

  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_CHECKING_FOR_CHILDREN
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_FOLDERS
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_NONFOLDERS
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_INCLUDEHIDDEN
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_NETPRINTERSRCH
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_SHAREABLE
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_STORAGE
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_NAVIGATION_ENUM
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_FASTITEMS
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_FLATLIST
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_ENABLE_ASYNC
    mixins Shell32$ShellFolderEnumerationFlags {}
  declare class Shell32$ShellFolderEnumerationFlags__SHCONTF_INCLUDESUPERHIDDEN
    mixins Shell32$ShellFolderEnumerationFlags {}

  declare class Shell32$ShellFolderViewOptions {
    constructor(...args: empty): mixed;
    static +SFVVO_SHOWALLOBJECTS: Class<Shell32$ShellFolderViewOptions__SFVVO_SHOWALLOBJECTS> &
      Shell32$ShellFolderViewOptions__SFVVO_SHOWALLOBJECTS &
      1; // 1
    static +SFVVO_SHOWEXTENSIONS: Class<Shell32$ShellFolderViewOptions__SFVVO_SHOWEXTENSIONS> &
      Shell32$ShellFolderViewOptions__SFVVO_SHOWEXTENSIONS &
      2; // 2
    static +SFVVO_SHOWCOMPCOLOR: Class<Shell32$ShellFolderViewOptions__SFVVO_SHOWCOMPCOLOR> &
      Shell32$ShellFolderViewOptions__SFVVO_SHOWCOMPCOLOR &
      8; // 8
    static +SFVVO_SHOWSYSFILES: Class<Shell32$ShellFolderViewOptions__SFVVO_SHOWSYSFILES> &
      Shell32$ShellFolderViewOptions__SFVVO_SHOWSYSFILES &
      32; // 32
    static +SFVVO_WIN95CLASSIC: Class<Shell32$ShellFolderViewOptions__SFVVO_WIN95CLASSIC> &
      Shell32$ShellFolderViewOptions__SFVVO_WIN95CLASSIC &
      64; // 64
    static +SFVVO_DOUBLECLICKINWEBVIEW: Class<Shell32$ShellFolderViewOptions__SFVVO_DOUBLECLICKINWEBVIEW> &
      Shell32$ShellFolderViewOptions__SFVVO_DOUBLECLICKINWEBVIEW &
      128; // 128
    static +SFVVO_DESKTOPHTML: Class<Shell32$ShellFolderViewOptions__SFVVO_DESKTOPHTML> &
      Shell32$ShellFolderViewOptions__SFVVO_DESKTOPHTML &
      512; // 512
  }

  declare class Shell32$ShellFolderViewOptions__SFVVO_SHOWALLOBJECTS
    mixins Shell32$ShellFolderViewOptions {}
  declare class Shell32$ShellFolderViewOptions__SFVVO_SHOWEXTENSIONS
    mixins Shell32$ShellFolderViewOptions {}
  declare class Shell32$ShellFolderViewOptions__SFVVO_SHOWCOMPCOLOR
    mixins Shell32$ShellFolderViewOptions {}
  declare class Shell32$ShellFolderViewOptions__SFVVO_SHOWSYSFILES
    mixins Shell32$ShellFolderViewOptions {}
  declare class Shell32$ShellFolderViewOptions__SFVVO_WIN95CLASSIC
    mixins Shell32$ShellFolderViewOptions {}
  declare class Shell32$ShellFolderViewOptions__SFVVO_DOUBLECLICKINWEBVIEW
    mixins Shell32$ShellFolderViewOptions {}
  declare class Shell32$ShellFolderViewOptions__SFVVO_DESKTOPHTML
    mixins Shell32$ShellFolderViewOptions {}

  declare class Shell32$ShellFolderViewSelectItem {
    constructor(...args: empty): mixed;
    static +Deselect: Class<Shell32$ShellFolderViewSelectItem__Deselect> &
      Shell32$ShellFolderViewSelectItem__Deselect &
      0; // 0
    static +Select: Class<Shell32$ShellFolderViewSelectItem__Select> &
      Shell32$ShellFolderViewSelectItem__Select &
      1; // 1
    static +EditMode: Class<Shell32$ShellFolderViewSelectItem__EditMode> &
      Shell32$ShellFolderViewSelectItem__EditMode &
      3; // 3
    static +DeselectAllButThis: Class<Shell32$ShellFolderViewSelectItem__DeselectAllButThis> &
      Shell32$ShellFolderViewSelectItem__DeselectAllButThis &
      4; // 4
    static +ScrollIntoView: Class<Shell32$ShellFolderViewSelectItem__ScrollIntoView> &
      Shell32$ShellFolderViewSelectItem__ScrollIntoView &
      8; // 8
    static +Focus: Class<Shell32$ShellFolderViewSelectItem__Focus> &
      Shell32$ShellFolderViewSelectItem__Focus &
      16; // 16
  }

  declare class Shell32$ShellFolderViewSelectItem__Deselect
    mixins Shell32$ShellFolderViewSelectItem {}
  declare class Shell32$ShellFolderViewSelectItem__Select
    mixins Shell32$ShellFolderViewSelectItem {}
  declare class Shell32$ShellFolderViewSelectItem__EditMode
    mixins Shell32$ShellFolderViewSelectItem {}
  declare class Shell32$ShellFolderViewSelectItem__DeselectAllButThis
    mixins Shell32$ShellFolderViewSelectItem {}
  declare class Shell32$ShellFolderViewSelectItem__ScrollIntoView
    mixins Shell32$ShellFolderViewSelectItem {}
  declare class Shell32$ShellFolderViewSelectItem__Focus
    mixins Shell32$ShellFolderViewSelectItem {}

  declare class Shell32$ShellLinkResolveFlags {
    constructor(...args: empty): mixed;
    static +NoUI: Class<Shell32$ShellLinkResolveFlags__NoUI> &
      Shell32$ShellLinkResolveFlags__NoUI &
      1; // 1
    static +Update: Class<Shell32$ShellLinkResolveFlags__Update> &
      Shell32$ShellLinkResolveFlags__Update &
      4; // 4
    static +NoUpdate: Class<Shell32$ShellLinkResolveFlags__NoUpdate> &
      Shell32$ShellLinkResolveFlags__NoUpdate &
      8; // 8
    static +NoSearch: Class<Shell32$ShellLinkResolveFlags__NoSearch> &
      Shell32$ShellLinkResolveFlags__NoSearch &
      16; // 16
    static +NoTrack: Class<Shell32$ShellLinkResolveFlags__NoTrack> &
      Shell32$ShellLinkResolveFlags__NoTrack &
      32; // 32
    static +NoLinkInfo: Class<Shell32$ShellLinkResolveFlags__NoLinkInfo> &
      Shell32$ShellLinkResolveFlags__NoLinkInfo &
      64; // 64
    static +InvokeMSI: Class<Shell32$ShellLinkResolveFlags__InvokeMSI> &
      Shell32$ShellLinkResolveFlags__InvokeMSI &
      128; // 128
  }

  declare class Shell32$ShellLinkResolveFlags__NoUI
    mixins Shell32$ShellLinkResolveFlags {}
  declare class Shell32$ShellLinkResolveFlags__Update
    mixins Shell32$ShellLinkResolveFlags {}
  declare class Shell32$ShellLinkResolveFlags__NoUpdate
    mixins Shell32$ShellLinkResolveFlags {}
  declare class Shell32$ShellLinkResolveFlags__NoSearch
    mixins Shell32$ShellLinkResolveFlags {}
  declare class Shell32$ShellLinkResolveFlags__NoTrack
    mixins Shell32$ShellLinkResolveFlags {}
  declare class Shell32$ShellLinkResolveFlags__NoLinkInfo
    mixins Shell32$ShellLinkResolveFlags {}
  declare class Shell32$ShellLinkResolveFlags__InvokeMSI
    mixins Shell32$ShellLinkResolveFlags {}

  declare class Shell32$SettingKey {
    constructor(...args: empty): mixed;
    static +SSF_AUTOCHECKSELECT: Class<Shell32$SettingKey__SSF_AUTOCHECKSELECT> &
      Shell32$SettingKey__SSF_AUTOCHECKSELECT &
      8388608; // 8388608
    static +SSF_DESKTOPHTML: Class<Shell32$SettingKey__SSF_DESKTOPHTML> &
      Shell32$SettingKey__SSF_DESKTOPHTML &
      512; // 512
    static +SSF_DONTPRETTYPATH: Class<Shell32$SettingKey__SSF_DONTPRETTYPATH> &
      Shell32$SettingKey__SSF_DONTPRETTYPATH &
      2048; // 2048
    static +SSF_DOUBLECLICKINWEBVIEW: Class<Shell32$SettingKey__SSF_DOUBLECLICKINWEBVIEW> &
      Shell32$SettingKey__SSF_DOUBLECLICKINWEBVIEW &
      128; // 128
    static +SSF_FILTER: Class<Shell32$SettingKey__SSF_FILTER> &
      Shell32$SettingKey__SSF_FILTER &
      65536; // 65536
    static +SSF_HIDDENFILEEXTS: Class<Shell32$SettingKey__SSF_HIDDENFILEEXTS> &
      Shell32$SettingKey__SSF_HIDDENFILEEXTS &
      4; // 4
    static +SSF_HIDEICONS: Class<Shell32$SettingKey__SSF_HIDEICONS> &
      Shell32$SettingKey__SSF_HIDEICONS &
      16384; // 16384
    static +SSF_ICONSONLY: Class<Shell32$SettingKey__SSF_ICONSONLY> &
      Shell32$SettingKey__SSF_ICONSONLY &
      16777216; // 16777216
    static +SSF_MAPNETDRVBUTTON: Class<Shell32$SettingKey__SSF_MAPNETDRVBUTTON> &
      Shell32$SettingKey__SSF_MAPNETDRVBUTTON &
      4096; // 4096
    static +SSF_NOCONFIRMRECYCLE: Class<Shell32$SettingKey__SSF_NOCONFIRMRECYCLE> &
      Shell32$SettingKey__SSF_NOCONFIRMRECYCLE &
      32768; // 32768
    static +SSF_NONETCRAWLING: Class<Shell32$SettingKey__SSF_NONETCRAWLING> &
      Shell32$SettingKey__SSF_NONETCRAWLING &
      1048576; // 1048576
    static +SSF_SEPPROCESS: Class<Shell32$SettingKey__SSF_SEPPROCESS> &
      Shell32$SettingKey__SSF_SEPPROCESS &
      524288; // 524288
    static +SSF_SERVERADMINUI: Class<Shell32$SettingKey__SSF_SERVERADMINUI> &
      Shell32$SettingKey__SSF_SERVERADMINUI &
      4; // 4
    static +SSF_SHOWALLOBJECTS: Class<Shell32$SettingKey__SSF_SHOWALLOBJECTS> &
      Shell32$SettingKey__SSF_SHOWALLOBJECTS &
      1; // 1
    static +SSF_SHOWATTRIBCOL: Class<Shell32$SettingKey__SSF_SHOWATTRIBCOL> &
      Shell32$SettingKey__SSF_SHOWATTRIBCOL &
      256; // 256
    static +SSF_SHOWCOMPCOLOR: Class<Shell32$SettingKey__SSF_SHOWCOMPCOLOR> &
      Shell32$SettingKey__SSF_SHOWCOMPCOLOR &
      8; // 8
    static +SSF_SHOWEXTENSIONS: Class<Shell32$SettingKey__SSF_SHOWEXTENSIONS> &
      Shell32$SettingKey__SSF_SHOWEXTENSIONS &
      2; // 2
    static +SSF_SHOWINFOTIP: Class<Shell32$SettingKey__SSF_SHOWINFOTIP> &
      Shell32$SettingKey__SSF_SHOWINFOTIP &
      8192; // 8192
    static +SSF_SHOWSTARTPAGE: Class<Shell32$SettingKey__SSF_SHOWSTARTPAGE> &
      Shell32$SettingKey__SSF_SHOWSTARTPAGE &
      4194304; // 4194304
    static +SSF_SHOWSUPERHIDDEN: Class<Shell32$SettingKey__SSF_SHOWSUPERHIDDEN> &
      Shell32$SettingKey__SSF_SHOWSUPERHIDDEN &
      262144; // 262144
    static +SSF_SHOWSYSFILES: Class<Shell32$SettingKey__SSF_SHOWSYSFILES> &
      Shell32$SettingKey__SSF_SHOWSYSFILES &
      32; // 32
    static +SSF_SHOWTYPEOVERLAY: Class<Shell32$SettingKey__SSF_SHOWTYPEOVERLAY> &
      Shell32$SettingKey__SSF_SHOWTYPEOVERLAY &
      33554432; // 33554432
    static +SSF_SORTCOLUMNS: Class<Shell32$SettingKey__SSF_SORTCOLUMNS> &
      Shell32$SettingKey__SSF_SORTCOLUMNS &
      16; // 16
    static +SSF_STARTPANELON: Class<Shell32$SettingKey__SSF_STARTPANELON> &
      Shell32$SettingKey__SSF_STARTPANELON &
      2097152; // 2097152
    static +SSF_WEBVIEW: Class<Shell32$SettingKey__SSF_WEBVIEW> &
      Shell32$SettingKey__SSF_WEBVIEW &
      131072; // 131072
    static +SSF_WIN95CLASSIC: Class<Shell32$SettingKey__SSF_WIN95CLASSIC> &
      Shell32$SettingKey__SSF_WIN95CLASSIC &
      1024; // 1024
  }

  declare class Shell32$SettingKey__SSF_AUTOCHECKSELECT
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_DESKTOPHTML mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_DONTPRETTYPATH
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_DOUBLECLICKINWEBVIEW
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_FILTER mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_HIDDENFILEEXTS
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_HIDEICONS mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_ICONSONLY mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_MAPNETDRVBUTTON
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_NOCONFIRMRECYCLE
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_NONETCRAWLING
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SEPPROCESS mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SERVERADMINUI
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWALLOBJECTS
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWATTRIBCOL
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWCOMPCOLOR
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWEXTENSIONS
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWINFOTIP mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWSTARTPAGE
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWSUPERHIDDEN
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWSYSFILES
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SHOWTYPEOVERLAY
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_SORTCOLUMNS mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_STARTPANELON
    mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_WEBVIEW mixins Shell32$SettingKey {}
  declare class Shell32$SettingKey__SSF_WIN95CLASSIC
    mixins Shell32$SettingKey {}

  declare class Shell32$ShellExecuteShow {
    constructor(...args: empty): mixed;
    static +Hidden: Class<Shell32$ShellExecuteShow__Hidden> &
      Shell32$ShellExecuteShow__Hidden &
      0; // 0
    static +Normal: Class<Shell32$ShellExecuteShow__Normal> &
      Shell32$ShellExecuteShow__Normal &
      1; // 1
    static +Minimized: Class<Shell32$ShellExecuteShow__Minimized> &
      Shell32$ShellExecuteShow__Minimized &
      2; // 2
    static +Maximized: Class<Shell32$ShellExecuteShow__Maximized> &
      Shell32$ShellExecuteShow__Maximized &
      3; // 3
    static +Last: Class<Shell32$ShellExecuteShow__Last> &
      Shell32$ShellExecuteShow__Last &
      4; // 4
    static +Current: Class<Shell32$ShellExecuteShow__Current> &
      Shell32$ShellExecuteShow__Current &
      5; // 5
    static +MinimizedNotActivated: Class<Shell32$ShellExecuteShow__MinimizedNotActivated> &
      Shell32$ShellExecuteShow__MinimizedNotActivated &
      7; // 7
    static +Application: Class<Shell32$ShellExecuteShow__Application> &
      Shell32$ShellExecuteShow__Application &
      10; // 10
  }

  declare class Shell32$ShellExecuteShow__Hidden
    mixins Shell32$ShellExecuteShow {}
  declare class Shell32$ShellExecuteShow__Normal
    mixins Shell32$ShellExecuteShow {}
  declare class Shell32$ShellExecuteShow__Minimized
    mixins Shell32$ShellExecuteShow {}
  declare class Shell32$ShellExecuteShow__Maximized
    mixins Shell32$ShellExecuteShow {}
  declare class Shell32$ShellExecuteShow__Last
    mixins Shell32$ShellExecuteShow {}
  declare class Shell32$ShellExecuteShow__Current
    mixins Shell32$ShellExecuteShow {}
  declare class Shell32$ShellExecuteShow__MinimizedNotActivated
    mixins Shell32$ShellExecuteShow {}
  declare class Shell32$ShellExecuteShow__Application
    mixins Shell32$ShellExecuteShow {}

  /**
   * Constants for Special Folders for open/Explore
   */
  declare class Shell32$ShellSpecialFolderConstants {
    constructor(...args: empty): mixed;
    static +ssfALTSTARTUP: Class<Shell32$ShellSpecialFolderConstants__ssfALTSTARTUP> &
      Shell32$ShellSpecialFolderConstants__ssfALTSTARTUP &
      29; // 29
    static +ssfAPPDATA: Class<Shell32$ShellSpecialFolderConstants__ssfAPPDATA> &
      Shell32$ShellSpecialFolderConstants__ssfAPPDATA &
      26; // 26
    static +ssfBITBUCKET: Class<Shell32$ShellSpecialFolderConstants__ssfBITBUCKET> &
      Shell32$ShellSpecialFolderConstants__ssfBITBUCKET &
      10; // 10
    static +ssfCOMMONALTSTARTUP: Class<Shell32$ShellSpecialFolderConstants__ssfCOMMONALTSTARTUP> &
      Shell32$ShellSpecialFolderConstants__ssfCOMMONALTSTARTUP &
      30; // 30
    static +ssfCOMMONAPPDATA: Class<Shell32$ShellSpecialFolderConstants__ssfCOMMONAPPDATA> &
      Shell32$ShellSpecialFolderConstants__ssfCOMMONAPPDATA &
      35; // 35
    static +ssfCOMMONDESKTOPDIR: Class<Shell32$ShellSpecialFolderConstants__ssfCOMMONDESKTOPDIR> &
      Shell32$ShellSpecialFolderConstants__ssfCOMMONDESKTOPDIR &
      25; // 25
    static +ssfCOMMONFAVORITES: Class<Shell32$ShellSpecialFolderConstants__ssfCOMMONFAVORITES> &
      Shell32$ShellSpecialFolderConstants__ssfCOMMONFAVORITES &
      31; // 31
    static +ssfCOMMONPROGRAMS: Class<Shell32$ShellSpecialFolderConstants__ssfCOMMONPROGRAMS> &
      Shell32$ShellSpecialFolderConstants__ssfCOMMONPROGRAMS &
      23; // 23
    static +ssfCOMMONSTARTMENU: Class<Shell32$ShellSpecialFolderConstants__ssfCOMMONSTARTMENU> &
      Shell32$ShellSpecialFolderConstants__ssfCOMMONSTARTMENU &
      22; // 22
    static +ssfCOMMONSTARTUP: Class<Shell32$ShellSpecialFolderConstants__ssfCOMMONSTARTUP> &
      Shell32$ShellSpecialFolderConstants__ssfCOMMONSTARTUP &
      24; // 24
    static +ssfCONTROLS: Class<Shell32$ShellSpecialFolderConstants__ssfCONTROLS> &
      Shell32$ShellSpecialFolderConstants__ssfCONTROLS &
      3; // 3
    static +ssfCOOKIES: Class<Shell32$ShellSpecialFolderConstants__ssfCOOKIES> &
      Shell32$ShellSpecialFolderConstants__ssfCOOKIES &
      33; // 33
    static +ssfDESKTOP: Class<Shell32$ShellSpecialFolderConstants__ssfDESKTOP> &
      Shell32$ShellSpecialFolderConstants__ssfDESKTOP &
      0; // 0
    static +ssfDESKTOPDIRECTORY: Class<Shell32$ShellSpecialFolderConstants__ssfDESKTOPDIRECTORY> &
      Shell32$ShellSpecialFolderConstants__ssfDESKTOPDIRECTORY &
      16; // 16
    static +ssfDRIVES: Class<Shell32$ShellSpecialFolderConstants__ssfDRIVES> &
      Shell32$ShellSpecialFolderConstants__ssfDRIVES &
      17; // 17
    static +ssfFAVORITES: Class<Shell32$ShellSpecialFolderConstants__ssfFAVORITES> &
      Shell32$ShellSpecialFolderConstants__ssfFAVORITES &
      6; // 6
    static +ssfFONTS: Class<Shell32$ShellSpecialFolderConstants__ssfFONTS> &
      Shell32$ShellSpecialFolderConstants__ssfFONTS &
      20; // 20
    static +ssfHISTORY: Class<Shell32$ShellSpecialFolderConstants__ssfHISTORY> &
      Shell32$ShellSpecialFolderConstants__ssfHISTORY &
      34; // 34
    static +ssfINTERNETCACHE: Class<Shell32$ShellSpecialFolderConstants__ssfINTERNETCACHE> &
      Shell32$ShellSpecialFolderConstants__ssfINTERNETCACHE &
      32; // 32
    static +ssfLOCALAPPDATA: Class<Shell32$ShellSpecialFolderConstants__ssfLOCALAPPDATA> &
      Shell32$ShellSpecialFolderConstants__ssfLOCALAPPDATA &
      28; // 28
    static +ssfMYPICTURES: Class<Shell32$ShellSpecialFolderConstants__ssfMYPICTURES> &
      Shell32$ShellSpecialFolderConstants__ssfMYPICTURES &
      39; // 39
    static +ssfNETHOOD: Class<Shell32$ShellSpecialFolderConstants__ssfNETHOOD> &
      Shell32$ShellSpecialFolderConstants__ssfNETHOOD &
      19; // 19
    static +ssfNETWORK: Class<Shell32$ShellSpecialFolderConstants__ssfNETWORK> &
      Shell32$ShellSpecialFolderConstants__ssfNETWORK &
      18; // 18
    static +ssfPERSONAL: Class<Shell32$ShellSpecialFolderConstants__ssfPERSONAL> &
      Shell32$ShellSpecialFolderConstants__ssfPERSONAL &
      5; // 5
    static +ssfPRINTERS: Class<Shell32$ShellSpecialFolderConstants__ssfPRINTERS> &
      Shell32$ShellSpecialFolderConstants__ssfPRINTERS &
      4; // 4
    static +ssfPRINTHOOD: Class<Shell32$ShellSpecialFolderConstants__ssfPRINTHOOD> &
      Shell32$ShellSpecialFolderConstants__ssfPRINTHOOD &
      27; // 27
    static +ssfPROFILE: Class<Shell32$ShellSpecialFolderConstants__ssfPROFILE> &
      Shell32$ShellSpecialFolderConstants__ssfPROFILE &
      40; // 40
    static +ssfPROGRAMFILES: Class<Shell32$ShellSpecialFolderConstants__ssfPROGRAMFILES> &
      Shell32$ShellSpecialFolderConstants__ssfPROGRAMFILES &
      38; // 38
    static +ssfPROGRAMFILESx86: Class<Shell32$ShellSpecialFolderConstants__ssfPROGRAMFILESx86> &
      Shell32$ShellSpecialFolderConstants__ssfPROGRAMFILESx86 &
      48; // 48
    static +ssfPROGRAMS: Class<Shell32$ShellSpecialFolderConstants__ssfPROGRAMS> &
      Shell32$ShellSpecialFolderConstants__ssfPROGRAMS &
      2; // 2
    static +ssfRECENT: Class<Shell32$ShellSpecialFolderConstants__ssfRECENT> &
      Shell32$ShellSpecialFolderConstants__ssfRECENT &
      8; // 8
    static +ssfSENDTO: Class<Shell32$ShellSpecialFolderConstants__ssfSENDTO> &
      Shell32$ShellSpecialFolderConstants__ssfSENDTO &
      9; // 9
    static +ssfSTARTMENU: Class<Shell32$ShellSpecialFolderConstants__ssfSTARTMENU> &
      Shell32$ShellSpecialFolderConstants__ssfSTARTMENU &
      11; // 11
    static +ssfSTARTUP: Class<Shell32$ShellSpecialFolderConstants__ssfSTARTUP> &
      Shell32$ShellSpecialFolderConstants__ssfSTARTUP &
      7; // 7
    static +ssfSYSTEM: Class<Shell32$ShellSpecialFolderConstants__ssfSYSTEM> &
      Shell32$ShellSpecialFolderConstants__ssfSYSTEM &
      37; // 37
    static +ssfSYSTEMx86: Class<Shell32$ShellSpecialFolderConstants__ssfSYSTEMx86> &
      Shell32$ShellSpecialFolderConstants__ssfSYSTEMx86 &
      41; // 41
    static +ssfTEMPLATES: Class<Shell32$ShellSpecialFolderConstants__ssfTEMPLATES> &
      Shell32$ShellSpecialFolderConstants__ssfTEMPLATES &
      21; // 21
    static +ssfWINDOWS: Class<Shell32$ShellSpecialFolderConstants__ssfWINDOWS> &
      Shell32$ShellSpecialFolderConstants__ssfWINDOWS &
      36; // 36
  }

  declare class Shell32$ShellSpecialFolderConstants__ssfALTSTARTUP
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfAPPDATA
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfBITBUCKET
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCOMMONALTSTARTUP
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCOMMONAPPDATA
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCOMMONDESKTOPDIR
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCOMMONFAVORITES
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCOMMONPROGRAMS
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCOMMONSTARTMENU
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCOMMONSTARTUP
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCONTROLS
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfCOOKIES
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfDESKTOP
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfDESKTOPDIRECTORY
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfDRIVES
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfFAVORITES
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfFONTS
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfHISTORY
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfINTERNETCACHE
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfLOCALAPPDATA
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfMYPICTURES
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfNETHOOD
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfNETWORK
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfPERSONAL
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfPRINTERS
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfPRINTHOOD
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfPROFILE
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfPROGRAMFILES
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfPROGRAMFILESx86
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfPROGRAMS
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfRECENT
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfSENDTO
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfSTARTMENU
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfSTARTUP
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfSYSTEM
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfSYSTEMx86
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfTEMPLATES
    mixins Shell32$ShellSpecialFolderConstants {}
  declare class Shell32$ShellSpecialFolderConstants__ssfWINDOWS
    mixins Shell32$ShellSpecialFolderConstants {}

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
      vOptions?: Shell32$FileOperationFlag
    ): void;

    /**
     * Call this after the WebView barricade is dismissed by the user
     */
    DismissedWebViewBarricade(): void;

    /**
 * Get the details about an item.
 * @param vItem The item for which to retrieve the information.
 * @param iColumn An integer value that specifies the information to be retrieved. The information available for an item depends on the folder in which it is displayed. This value
corresponds to the zero-based column number that is displayed in a Shell view.
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
      vOptions?: Shell32$FileOperationFlag
    ): void;

    /**
     * Create a new sub folder in this folder.
     */
    NewFolder(bName: string): void;

    /**
     * Offline status of the server?
     */
    OfflineStatus: Shell32$OfflineFolderStatus;

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
      grfFlags: Shell32$ShellFolderEnumerationFlags,
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
      Options: number | Shell32$BrowseInfoFlags,
      RootFolder?: string | Shell32$ShellSpecialFolderConstants
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
    Explore(vDir: string | Shell32$ShellSpecialFolderConstants): void;

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
    GetSetting(lSetting: number | Shell32$SettingKey): boolean;

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
      vDir: string | Shell32$ShellSpecialFolderConstants
    ): Shell32$Folder3 | null;

    /**
     * Open a folder
     */
    Open(vDir: string | Shell32$ShellSpecialFolderConstants): void;

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
performed.
 * @param vShow A recommendation as to how the application window should be displayed initially. The application can ignore this recommendation.
 */
    ShellExecute(
      File: string,
      vArgs?: string,
      vDir?: string,
      vOperation?: string,
      vShow?: Shell32$ShellExecuteShow
    ): void;

    /**
     * Show/Hide browser bar.
     */
    ShowBrowserBar(bstrClsid: Shell32$ExplorerBarCLSID, bShow: boolean): any;

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
      dwFlags: Shell32$ShellFolderViewSelectItem
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
    ViewOptions: Shell32$ShellFolderViewOptions;
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
    Resolve(fFlags: Shell32$ShellLinkResolveFlags): void;

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
    ShowCommand: Shell32$LinkShowWindowState;

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
      obj: Shell32$Shell32$ShellFolderView,
      event:
        | "BeginDrag"
        | "DefaultVerbInvoked"
        | "EnumDone"
        | "SelectionChanged"
        | "VerbInvoked",
      handler: (parameter: {}) => void
    ): void;
    on(
      obj: Shell32$Shell32$ShellFolderViewOC,
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
    "Shell.Application": Shell32$Shell32$Shell;
    "Shell.FolderView": Shell32$Shell32$ShellFolderViewOC;
  }
  declare interface EnumeratorConstructor {
    new(
      col: Shell32$Shell32$FolderItems3
    ): Enumerator<Shell32$Shell32$ShellFolderItem>;
    new(
      col: Shell32$Shell32$FolderItemVerbs
    ): Enumerator<Shell32$Shell32$FolderItemVerb>;
    new(
      col: Shell32$Shell32$ShellWindows
    ): Enumerator<SHDocVw.InternetExplorer>;
  }
}
