declare module "sinon-chrome" {
  import typeof * as Sinon from "sinon";

  declare export default typeof SinonChrome;

  declare type SinonChromeStub = {
    flush(): void
  } & Sinon.SinonStub;

  declare var npm$namespace$SinonChrome: {
    flush: typeof SinonChrome$flush,
    reset: typeof SinonChrome$reset,
    registerPlugin: typeof SinonChrome$registerPlugin,
    csi: typeof SinonChrome$csi,
    loadTimes: typeof SinonChrome$loadTimes,

    alarms: typeof npm$namespace$SinonChrome$alarms,
    app: typeof npm$namespace$SinonChrome$app,
    bookmarks: typeof npm$namespace$SinonChrome$bookmarks,
    browserAction: typeof npm$namespace$SinonChrome$browserAction,
    browsingData: typeof npm$namespace$SinonChrome$browsingData,
    contentSettings: typeof npm$namespace$SinonChrome$contentSettings,
    contextMenus: typeof npm$namespace$SinonChrome$contextMenus,
    omnibox: typeof npm$namespace$SinonChrome$omnibox,
    cookies: typeof npm$namespace$SinonChrome$cookies,
    declarativeContent: typeof npm$namespace$SinonChrome$declarativeContent,
    desktopCapture: typeof npm$namespace$SinonChrome$desktopCapture,
    downloads: typeof npm$namespace$SinonChrome$downloads,
    extension: typeof npm$namespace$SinonChrome$extension,
    fontSettings: typeof npm$namespace$SinonChrome$fontSettings,
    gcm: typeof npm$namespace$SinonChrome$gcm,
    history: typeof npm$namespace$SinonChrome$history,
    i18n: typeof npm$namespace$SinonChrome$i18n,
    identity: typeof npm$namespace$SinonChrome$identity,
    idle: typeof npm$namespace$SinonChrome$idle,
    management: typeof npm$namespace$SinonChrome$management,
    notifications: typeof npm$namespace$SinonChrome$notifications,
    pageCapture: typeof npm$namespace$SinonChrome$pageCapture,
    permissions: typeof npm$namespace$SinonChrome$permissions,
    plugins: typeof npm$namespace$SinonChrome$plugins,
    power: typeof npm$namespace$SinonChrome$power,
    privacy: typeof npm$namespace$SinonChrome$privacy,
    proxy: typeof npm$namespace$SinonChrome$proxy,
    pushMessaging: typeof npm$namespace$SinonChrome$pushMessaging,
    runtime: typeof npm$namespace$SinonChrome$runtime,
    sessions: typeof npm$namespace$SinonChrome$sessions,
    storage: typeof npm$namespace$SinonChrome$storage,
    tabCapture: typeof npm$namespace$SinonChrome$tabCapture,
    tabs: typeof npm$namespace$SinonChrome$tabs,
    topSites: typeof npm$namespace$SinonChrome$topSites,
    tts: typeof npm$namespace$SinonChrome$tts,
    ttsEngine: typeof npm$namespace$SinonChrome$ttsEngine,
    webNavigation: typeof npm$namespace$SinonChrome$webNavigation,
    webRequest: typeof npm$namespace$SinonChrome$webRequest,
    windows: typeof npm$namespace$SinonChrome$windows
  };

  /**
   * Flush cache
   */
  declare export function SinonChrome$flush(): void;

  /**
   * Reset all stubs and remove event listeners
   * See https://github.com/cjohansen/Sinon.JS/issues/572
   */
  declare export function SinonChrome$reset(): void;

  declare export function SinonChrome$registerPlugin(plugin: {}): void;

  declare export var SinonChrome$csi: Sinon.SinonSpy;

  declare export var SinonChrome$loadTimes: Sinon.SinonSpy;

  declare type SinonChrome$events$Event = {
    dispatch(...args: any[]): void,
    trigger(...args: any[]): void,
    triggerAsync(...args: any[]): void,
    applyTrigger(args: any[]): void,
    applyTriggerAsync(args: any[]): void,
    addListener: Sinon.SinonSpy,
    removeListener: Sinon.SinonSpy,
    removeListeners: Sinon.SinonSpy,
    hasListener: Sinon.SinonSpy
  } & undefined.Event<Function>;

  declare var npm$namespace$SinonChrome$alarms: {
    clear: typeof SinonChrome$alarms$clear,
    clearAll: typeof SinonChrome$alarms$clearAll,
    create: typeof SinonChrome$alarms$create,
    get: typeof SinonChrome$alarms$get,
    getAll: typeof SinonChrome$alarms$getAll,
    onAlarm: typeof SinonChrome$alarms$onAlarm
  };
  declare export var SinonChrome$alarms$clear: SinonChromeStub;

  declare export var SinonChrome$alarms$clearAll: SinonChromeStub;

  declare export var SinonChrome$alarms$create: SinonChromeStub;

  declare export var SinonChrome$alarms$get: SinonChromeStub;

  declare export var SinonChrome$alarms$getAll: SinonChromeStub;

  declare export var SinonChrome$alarms$onAlarm: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$app: {
    getDetails: typeof SinonChrome$app$getDetails,
    getDetailsForFrame: typeof SinonChrome$app$getDetailsForFrame,
    getIsInstalled: typeof SinonChrome$app$getIsInstalled,
    installState: typeof SinonChrome$app$installState,
    runningState: typeof SinonChrome$app$runningState
  };
  declare export var SinonChrome$app$getDetails: SinonChromeStub;

  declare export var SinonChrome$app$getDetailsForFrame: SinonChromeStub;

  declare export var SinonChrome$app$getIsInstalled: SinonChromeStub;

  declare export var SinonChrome$app$installState: SinonChromeStub;

  declare export var SinonChrome$app$runningState: SinonChromeStub;

  declare var npm$namespace$SinonChrome$bookmarks: {
    create: typeof SinonChrome$bookmarks$create,
    get: typeof SinonChrome$bookmarks$get,
    getChildren: typeof SinonChrome$bookmarks$getChildren,
    getRecent: typeof SinonChrome$bookmarks$getRecent,
    getSubTree: typeof SinonChrome$bookmarks$getSubTree,
    getTree: typeof SinonChrome$bookmarks$getTree,
    move: typeof SinonChrome$bookmarks$move,
    remove: typeof SinonChrome$bookmarks$remove,
    removeTree: typeof SinonChrome$bookmarks$removeTree,
    search: typeof SinonChrome$bookmarks$search,
    update: typeof SinonChrome$bookmarks$update,
    onChanged: typeof SinonChrome$bookmarks$onChanged,
    onChildrenReordered: typeof SinonChrome$bookmarks$onChildrenReordered,
    onCreated: typeof SinonChrome$bookmarks$onCreated,
    onImportBegan: typeof SinonChrome$bookmarks$onImportBegan,
    onImportEnded: typeof SinonChrome$bookmarks$onImportEnded,
    onMoved: typeof SinonChrome$bookmarks$onMoved,
    onRemoved: typeof SinonChrome$bookmarks$onRemoved
  };
  declare export var SinonChrome$bookmarks$create: SinonChromeStub;

  declare export var SinonChrome$bookmarks$get: SinonChromeStub;

  declare export var SinonChrome$bookmarks$getChildren: SinonChromeStub;

  declare export var SinonChrome$bookmarks$getRecent: SinonChromeStub;

  declare export var SinonChrome$bookmarks$getSubTree: SinonChromeStub;

  declare export var SinonChrome$bookmarks$getTree: SinonChromeStub;

  declare export var SinonChrome$bookmarks$move: SinonChromeStub;

  declare export var SinonChrome$bookmarks$remove: SinonChromeStub;

  declare export var SinonChrome$bookmarks$removeTree: SinonChromeStub;

  declare export var SinonChrome$bookmarks$search: SinonChromeStub;

  declare export var SinonChrome$bookmarks$update: SinonChromeStub;

  declare export var SinonChrome$bookmarks$onChanged: SinonChrome$events$Event;

  declare export var SinonChrome$bookmarks$onChildrenReordered: SinonChrome$events$Event;

  declare export var SinonChrome$bookmarks$onCreated: SinonChrome$events$Event;

  declare export var SinonChrome$bookmarks$onImportBegan: SinonChrome$events$Event;

  declare export var SinonChrome$bookmarks$onImportEnded: SinonChrome$events$Event;

  declare export var SinonChrome$bookmarks$onMoved: SinonChrome$events$Event;

  declare export var SinonChrome$bookmarks$onRemoved: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$browserAction: {
    disable: typeof SinonChrome$browserAction$disable,
    enable: typeof SinonChrome$browserAction$enable,
    getBadgeBackgroundColor: typeof SinonChrome$browserAction$getBadgeBackgroundColor,
    getBadgeText: typeof SinonChrome$browserAction$getBadgeText,
    getPopup: typeof SinonChrome$browserAction$getPopup,
    getTitle: typeof SinonChrome$browserAction$getTitle,
    setBadgeBackgroundColor: typeof SinonChrome$browserAction$setBadgeBackgroundColor,
    setBadgeText: typeof SinonChrome$browserAction$setBadgeText,
    setIcon: typeof SinonChrome$browserAction$setIcon,
    setPopup: typeof SinonChrome$browserAction$setPopup,
    setTitle: typeof SinonChrome$browserAction$setTitle,
    onClicked: typeof SinonChrome$browserAction$onClicked
  };
  declare export var SinonChrome$browserAction$disable: SinonChromeStub;

  declare export var SinonChrome$browserAction$enable: SinonChromeStub;

  declare export var SinonChrome$browserAction$getBadgeBackgroundColor: SinonChromeStub;

  declare export var SinonChrome$browserAction$getBadgeText: SinonChromeStub;

  declare export var SinonChrome$browserAction$getPopup: SinonChromeStub;

  declare export var SinonChrome$browserAction$getTitle: SinonChromeStub;

  declare export var SinonChrome$browserAction$setBadgeBackgroundColor: SinonChromeStub;

  declare export var SinonChrome$browserAction$setBadgeText: SinonChromeStub;

  declare export var SinonChrome$browserAction$setIcon: SinonChromeStub;

  declare export var SinonChrome$browserAction$setPopup: SinonChromeStub;

  declare export var SinonChrome$browserAction$setTitle: SinonChromeStub;

  declare export var SinonChrome$browserAction$onClicked: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$browsingData: {
    remove: typeof SinonChrome$browsingData$remove,
    removeAppcache: typeof SinonChrome$browsingData$removeAppcache,
    removeCache: typeof SinonChrome$browsingData$removeCache,
    removeCookies: typeof SinonChrome$browsingData$removeCookies,
    removeDownloads: typeof SinonChrome$browsingData$removeDownloads,
    removeFileSystems: typeof SinonChrome$browsingData$removeFileSystems,
    removeFormData: typeof SinonChrome$browsingData$removeFormData,
    removeHistory: typeof SinonChrome$browsingData$removeHistory,
    removeIndexedDB: typeof SinonChrome$browsingData$removeIndexedDB,
    removeLocalStorage: typeof SinonChrome$browsingData$removeLocalStorage,
    removePasswords: typeof SinonChrome$browsingData$removePasswords,
    removePluginData: typeof SinonChrome$browsingData$removePluginData,
    removeWebSQL: typeof SinonChrome$browsingData$removeWebSQL,
    settings: typeof SinonChrome$browsingData$settings
  };
  declare export var SinonChrome$browsingData$remove: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeAppcache: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeCache: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeCookies: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeDownloads: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeFileSystems: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeFormData: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeHistory: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeIndexedDB: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeLocalStorage: SinonChromeStub;

  declare export var SinonChrome$browsingData$removePasswords: SinonChromeStub;

  declare export var SinonChrome$browsingData$removePluginData: SinonChromeStub;

  declare export var SinonChrome$browsingData$removeWebSQL: SinonChromeStub;

  declare export var SinonChrome$browsingData$settings: SinonChromeStub;

  declare var npm$namespace$SinonChrome$contentSettings: {
    cookies: typeof SinonChrome$contentSettings$cookies,
    images: typeof SinonChrome$contentSettings$images,
    javascript: typeof SinonChrome$contentSettings$javascript,
    notifications: typeof SinonChrome$contentSettings$notifications,
    plugins: typeof SinonChrome$contentSettings$plugins,
    popups: typeof SinonChrome$contentSettings$popups
  };
  declare interface SinonChrome$contentSettings$StubbedContentSetting {
    clear: SinonChromeStub;
    get: SinonChromeStub;
    getResourceIdentifiers: SinonChromeStub;
    set: SinonChromeStub;
  }

  declare export var SinonChrome$contentSettings$cookies: SinonChrome$contentSettings$StubbedContentSetting;

  declare export var SinonChrome$contentSettings$images: SinonChrome$contentSettings$StubbedContentSetting;

  declare export var SinonChrome$contentSettings$javascript: SinonChrome$contentSettings$StubbedContentSetting;

  declare export var SinonChrome$contentSettings$notifications: SinonChrome$contentSettings$StubbedContentSetting;

  declare export var SinonChrome$contentSettings$plugins: SinonChrome$contentSettings$StubbedContentSetting;

  declare export var SinonChrome$contentSettings$popups: SinonChrome$contentSettings$StubbedContentSetting;

  declare var npm$namespace$SinonChrome$contextMenus: {
    create: typeof SinonChrome$contextMenus$create,
    remove: typeof SinonChrome$contextMenus$remove,
    removeAll: typeof SinonChrome$contextMenus$removeAll,
    update: typeof SinonChrome$contextMenus$update,
    onClicked: typeof SinonChrome$contextMenus$onClicked
  };
  declare export var SinonChrome$contextMenus$create: SinonChromeStub;

  declare export var SinonChrome$contextMenus$remove: SinonChromeStub;

  declare export var SinonChrome$contextMenus$removeAll: SinonChromeStub;

  declare export var SinonChrome$contextMenus$update: SinonChromeStub;

  declare export var SinonChrome$contextMenus$onClicked: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$omnibox: {
    setDefaultSuggestion: typeof SinonChrome$omnibox$setDefaultSuggestion,
    onInputStarted: typeof SinonChrome$omnibox$onInputStarted,
    onInputChanged: typeof SinonChrome$omnibox$onInputChanged,
    onInputEntered: typeof SinonChrome$omnibox$onInputEntered,
    onInputCancelled: typeof SinonChrome$omnibox$onInputCancelled
  };
  declare export var SinonChrome$omnibox$setDefaultSuggestion: SinonChromeStub;

  declare export var SinonChrome$omnibox$onInputStarted: SinonChrome$events$Event;

  declare export var SinonChrome$omnibox$onInputChanged: SinonChrome$events$Event;

  declare export var SinonChrome$omnibox$onInputEntered: SinonChrome$events$Event;

  declare export var SinonChrome$omnibox$onInputCancelled: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$cookies: {
    get: typeof SinonChrome$cookies$get,
    getAll: typeof SinonChrome$cookies$getAll,
    getAllCookieStores: typeof SinonChrome$cookies$getAllCookieStores,
    onChanged: typeof SinonChrome$cookies$onChanged,
    remove: typeof SinonChrome$cookies$remove,
    set: typeof SinonChrome$cookies$set
  };
  declare export var SinonChrome$cookies$get: SinonChromeStub;

  declare export var SinonChrome$cookies$getAll: SinonChromeStub;

  declare export var SinonChrome$cookies$getAllCookieStores: SinonChromeStub;

  declare export var SinonChrome$cookies$onChanged: SinonChrome$events$Event;

  declare export var SinonChrome$cookies$remove: SinonChromeStub;

  declare export var SinonChrome$cookies$set: SinonChromeStub;

  declare var npm$namespace$SinonChrome$declarativeContent: {
    PageStateMatcher: typeof SinonChrome$declarativeContent$PageStateMatcher,
    RequestContentScript: typeof SinonChrome$declarativeContent$RequestContentScript,
    ShowPageAction: typeof SinonChrome$declarativeContent$ShowPageAction,
    onPageChanged: typeof SinonChrome$declarativeContent$onPageChanged
  };
  declare export var SinonChrome$declarativeContent$PageStateMatcher: SinonChromeStub;

  declare export var SinonChrome$declarativeContent$RequestContentScript: SinonChromeStub;

  declare export var SinonChrome$declarativeContent$ShowPageAction: SinonChromeStub;

  declare export var SinonChrome$declarativeContent$onPageChanged: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$desktopCapture: {
    cancelChooseDesktopMedia: typeof SinonChrome$desktopCapture$cancelChooseDesktopMedia,
    chooseDesktopMedia: typeof SinonChrome$desktopCapture$chooseDesktopMedia
  };
  declare export var SinonChrome$desktopCapture$cancelChooseDesktopMedia: SinonChromeStub;

  declare export var SinonChrome$desktopCapture$chooseDesktopMedia: SinonChromeStub;

  declare var npm$namespace$SinonChrome$downloads: {
    acceptDanger: typeof SinonChrome$downloads$acceptDanger,
    cancel: typeof SinonChrome$downloads$cancel,
    download: typeof SinonChrome$downloads$download,
    drag: typeof SinonChrome$downloads$drag,
    erase: typeof SinonChrome$downloads$erase,
    getFileIcon: typeof SinonChrome$downloads$getFileIcon,
    open: typeof SinonChrome$downloads$open,
    pause: typeof SinonChrome$downloads$pause,
    removeFile: typeof SinonChrome$downloads$removeFile,
    resume: typeof SinonChrome$downloads$resume,
    search: typeof SinonChrome$downloads$search,
    setShelfEnabled: typeof SinonChrome$downloads$setShelfEnabled,
    show: typeof SinonChrome$downloads$show,
    showDefaultFolder: typeof SinonChrome$downloads$showDefaultFolder,
    onChanged: typeof SinonChrome$downloads$onChanged,
    onCreated: typeof SinonChrome$downloads$onCreated,
    onDeterminingFilename: typeof SinonChrome$downloads$onDeterminingFilename,
    onErased: typeof SinonChrome$downloads$onErased
  };
  declare export var SinonChrome$downloads$acceptDanger: SinonChromeStub;

  declare export var SinonChrome$downloads$cancel: SinonChromeStub;

  declare export var SinonChrome$downloads$download: SinonChromeStub;

  declare export var SinonChrome$downloads$drag: SinonChromeStub;

  declare export var SinonChrome$downloads$erase: SinonChromeStub;

  declare export var SinonChrome$downloads$getFileIcon: SinonChromeStub;

  declare export var SinonChrome$downloads$open: SinonChromeStub;

  declare export var SinonChrome$downloads$pause: SinonChromeStub;

  declare export var SinonChrome$downloads$removeFile: SinonChromeStub;

  declare export var SinonChrome$downloads$resume: SinonChromeStub;

  declare export var SinonChrome$downloads$search: SinonChromeStub;

  declare export var SinonChrome$downloads$setShelfEnabled: SinonChromeStub;

  declare export var SinonChrome$downloads$show: SinonChromeStub;

  declare export var SinonChrome$downloads$showDefaultFolder: SinonChromeStub;

  declare export var SinonChrome$downloads$onChanged: SinonChrome$events$Event;

  declare export var SinonChrome$downloads$onCreated: SinonChrome$events$Event;

  declare export var SinonChrome$downloads$onDeterminingFilename: SinonChrome$events$Event;

  declare export var SinonChrome$downloads$onErased: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$extension: {
    connect: typeof SinonChrome$extension$connect,
    connectNative: typeof SinonChrome$extension$connectNative,
    getBackgroundPage: typeof SinonChrome$extension$getBackgroundPage,
    getURL: typeof SinonChrome$extension$getURL,
    getViews: typeof SinonChrome$extension$getViews,
    isAllowedFileSchemeAccess: typeof SinonChrome$extension$isAllowedFileSchemeAccess,
    isAllowedIncognitoAccess: typeof SinonChrome$extension$isAllowedIncognitoAccess,
    sendMessage: typeof SinonChrome$extension$sendMessage,
    sendNativeMessage: typeof SinonChrome$extension$sendNativeMessage,
    sendRequest: typeof SinonChrome$extension$sendRequest,
    setUpdateUrlData: typeof SinonChrome$extension$setUpdateUrlData,
    onConnect: typeof SinonChrome$extension$onConnect,
    onConnectExternal: typeof SinonChrome$extension$onConnectExternal,
    onMessage: typeof SinonChrome$extension$onMessage,
    onMessageExternal: typeof SinonChrome$extension$onMessageExternal,
    onRequest: typeof SinonChrome$extension$onRequest,
    onRequestExternal: typeof SinonChrome$extension$onRequestExternal
  };
  declare export var SinonChrome$extension$connect: SinonChromeStub;

  declare export var SinonChrome$extension$connectNative: SinonChromeStub;

  declare export var SinonChrome$extension$getBackgroundPage: SinonChromeStub;

  declare export var SinonChrome$extension$getURL: SinonChromeStub;

  declare export var SinonChrome$extension$getViews: SinonChromeStub;

  declare export var SinonChrome$extension$isAllowedFileSchemeAccess: SinonChromeStub;

  declare export var SinonChrome$extension$isAllowedIncognitoAccess: SinonChromeStub;

  declare export var SinonChrome$extension$sendMessage: SinonChromeStub;

  declare export var SinonChrome$extension$sendNativeMessage: SinonChromeStub;

  declare export var SinonChrome$extension$sendRequest: SinonChromeStub;

  declare export var SinonChrome$extension$setUpdateUrlData: SinonChromeStub;

  declare export var SinonChrome$extension$onConnect: SinonChrome$events$Event;

  declare export var SinonChrome$extension$onConnectExternal: SinonChrome$events$Event;

  declare export var SinonChrome$extension$onMessage: SinonChrome$events$Event;

  declare export var SinonChrome$extension$onMessageExternal: SinonChrome$events$Event;

  declare export var SinonChrome$extension$onRequest: SinonChrome$events$Event;

  declare export var SinonChrome$extension$onRequestExternal: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$fontSettings: {
    clearDefaultFixedFontSize: typeof SinonChrome$fontSettings$clearDefaultFixedFontSize,
    clearDefaultFontSize: typeof SinonChrome$fontSettings$clearDefaultFontSize,
    clearFont: typeof SinonChrome$fontSettings$clearFont,
    clearMinimumFontSize: typeof SinonChrome$fontSettings$clearMinimumFontSize,
    getDefaultFixedFontSize: typeof SinonChrome$fontSettings$getDefaultFixedFontSize,
    getDefaultFontSize: typeof SinonChrome$fontSettings$getDefaultFontSize,
    getFont: typeof SinonChrome$fontSettings$getFont,
    getFontList: typeof SinonChrome$fontSettings$getFontList,
    getMinimumFontSize: typeof SinonChrome$fontSettings$getMinimumFontSize,
    setDefaultFixedFontSize: typeof SinonChrome$fontSettings$setDefaultFixedFontSize,
    setDefaultFontSize: typeof SinonChrome$fontSettings$setDefaultFontSize,
    setFont: typeof SinonChrome$fontSettings$setFont,
    setMinimumFontSize: typeof SinonChrome$fontSettings$setMinimumFontSize,
    onDefaultFixedFontSizeChanged: typeof SinonChrome$fontSettings$onDefaultFixedFontSizeChanged,
    onDefaultFontSizeChanged: typeof SinonChrome$fontSettings$onDefaultFontSizeChanged,
    onFontChanged: typeof SinonChrome$fontSettings$onFontChanged,
    onMinimumFontSizeChanged: typeof SinonChrome$fontSettings$onMinimumFontSizeChanged
  };
  declare export var SinonChrome$fontSettings$clearDefaultFixedFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$clearDefaultFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$clearFont: SinonChromeStub;

  declare export var SinonChrome$fontSettings$clearMinimumFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$getDefaultFixedFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$getDefaultFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$getFont: SinonChromeStub;

  declare export var SinonChrome$fontSettings$getFontList: SinonChromeStub;

  declare export var SinonChrome$fontSettings$getMinimumFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$setDefaultFixedFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$setDefaultFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$setFont: SinonChromeStub;

  declare export var SinonChrome$fontSettings$setMinimumFontSize: SinonChromeStub;

  declare export var SinonChrome$fontSettings$onDefaultFixedFontSizeChanged: SinonChrome$events$Event;

  declare export var SinonChrome$fontSettings$onDefaultFontSizeChanged: SinonChrome$events$Event;

  declare export var SinonChrome$fontSettings$onFontChanged: SinonChrome$events$Event;

  declare export var SinonChrome$fontSettings$onMinimumFontSizeChanged: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$gcm: {
    onMessage: typeof SinonChrome$gcm$onMessage,
    onMessagesDeleted: typeof SinonChrome$gcm$onMessagesDeleted,
    onSendError: typeof SinonChrome$gcm$onSendError,
    register: typeof SinonChrome$gcm$register,
    send: typeof SinonChrome$gcm$send,
    unregister: typeof SinonChrome$gcm$unregister
  };
  declare export var SinonChrome$gcm$onMessage: SinonChrome$events$Event;

  declare export var SinonChrome$gcm$onMessagesDeleted: SinonChrome$events$Event;

  declare export var SinonChrome$gcm$onSendError: SinonChrome$events$Event;

  declare export var SinonChrome$gcm$register: SinonChromeStub;

  declare export var SinonChrome$gcm$send: SinonChromeStub;

  declare export var SinonChrome$gcm$unregister: SinonChromeStub;

  declare var npm$namespace$SinonChrome$history: {
    addUrl: typeof SinonChrome$history$addUrl,
    deleteAll: typeof SinonChrome$history$deleteAll,
    deleteRange: typeof SinonChrome$history$deleteRange,
    deleteUrl: typeof SinonChrome$history$deleteUrl,
    getVisits: typeof SinonChrome$history$getVisits,
    search: typeof SinonChrome$history$search,
    onVisitRemoved: typeof SinonChrome$history$onVisitRemoved,
    onVisited: typeof SinonChrome$history$onVisited
  };
  declare export var SinonChrome$history$addUrl: SinonChromeStub;

  declare export var SinonChrome$history$deleteAll: SinonChromeStub;

  declare export var SinonChrome$history$deleteRange: SinonChromeStub;

  declare export var SinonChrome$history$deleteUrl: SinonChromeStub;

  declare export var SinonChrome$history$getVisits: SinonChromeStub;

  declare export var SinonChrome$history$search: SinonChromeStub;

  declare export var SinonChrome$history$onVisitRemoved: SinonChrome$events$Event;

  declare export var SinonChrome$history$onVisited: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$i18n: {
    getAcceptLanguages: typeof SinonChrome$i18n$getAcceptLanguages,
    getMessage: typeof SinonChrome$i18n$getMessage,
    getUILanguage: typeof SinonChrome$i18n$getUILanguage
  };
  declare export var SinonChrome$i18n$getAcceptLanguages: SinonChromeStub;

  declare export var SinonChrome$i18n$getMessage: SinonChromeStub;

  declare export var SinonChrome$i18n$getUILanguage: SinonChromeStub;

  declare var npm$namespace$SinonChrome$identity: {
    getAuthToken: typeof SinonChrome$identity$getAuthToken,
    getProfileUserInfo: typeof SinonChrome$identity$getProfileUserInfo,
    getRedirectURL: typeof SinonChrome$identity$getRedirectURL,
    launchWebAuthFlow: typeof SinonChrome$identity$launchWebAuthFlow,
    removeCachedAuthToken: typeof SinonChrome$identity$removeCachedAuthToken,
    onSignInChanged: typeof SinonChrome$identity$onSignInChanged
  };
  declare export var SinonChrome$identity$getAuthToken: SinonChromeStub;

  declare export var SinonChrome$identity$getProfileUserInfo: SinonChromeStub;

  declare export var SinonChrome$identity$getRedirectURL: SinonChromeStub;

  declare export var SinonChrome$identity$launchWebAuthFlow: SinonChromeStub;

  declare export var SinonChrome$identity$removeCachedAuthToken: SinonChromeStub;

  declare export var SinonChrome$identity$onSignInChanged: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$idle: {
    onStateChanged: typeof SinonChrome$idle$onStateChanged,
    queryState: typeof SinonChrome$idle$queryState,
    setDetectionInterval: typeof SinonChrome$idle$setDetectionInterval
  };
  declare export var SinonChrome$idle$onStateChanged: SinonChrome$events$Event;

  declare export var SinonChrome$idle$queryState: SinonChromeStub;

  declare export var SinonChrome$idle$setDetectionInterval: SinonChromeStub;

  declare var npm$namespace$SinonChrome$management: {
    createAppShortcut: typeof SinonChrome$management$createAppShortcut,
    generateAppForLink: typeof SinonChrome$management$generateAppForLink,
    get: typeof SinonChrome$management$get,
    getAll: typeof SinonChrome$management$getAll,
    getPermissionWarningsById: typeof SinonChrome$management$getPermissionWarningsById,
    getPermissionWarningsByManifest: typeof SinonChrome$management$getPermissionWarningsByManifest,
    launchApp: typeof SinonChrome$management$launchApp,
    setEnabled: typeof SinonChrome$management$setEnabled,
    setLaunchType: typeof SinonChrome$management$setLaunchType,
    uninstall: typeof SinonChrome$management$uninstall,
    uninstallSelf: typeof SinonChrome$management$uninstallSelf,
    onDisabled: typeof SinonChrome$management$onDisabled,
    onEnabled: typeof SinonChrome$management$onEnabled,
    onInstalled: typeof SinonChrome$management$onInstalled,
    onUninstalled: typeof SinonChrome$management$onUninstalled
  };
  declare export var SinonChrome$management$createAppShortcut: SinonChromeStub;

  declare export var SinonChrome$management$generateAppForLink: SinonChromeStub;

  declare export var SinonChrome$management$get: SinonChromeStub;

  declare export var SinonChrome$management$getAll: SinonChromeStub;

  declare export var SinonChrome$management$getPermissionWarningsById: SinonChromeStub;

  declare export var SinonChrome$management$getPermissionWarningsByManifest: SinonChromeStub;

  declare export var SinonChrome$management$launchApp: SinonChromeStub;

  declare export var SinonChrome$management$setEnabled: SinonChromeStub;

  declare export var SinonChrome$management$setLaunchType: SinonChromeStub;

  declare export var SinonChrome$management$uninstall: SinonChromeStub;

  declare export var SinonChrome$management$uninstallSelf: SinonChromeStub;

  declare export var SinonChrome$management$onDisabled: SinonChrome$events$Event;

  declare export var SinonChrome$management$onEnabled: SinonChrome$events$Event;

  declare export var SinonChrome$management$onInstalled: SinonChrome$events$Event;

  declare export var SinonChrome$management$onUninstalled: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$notifications: {
    clear: typeof SinonChrome$notifications$clear,
    create: typeof SinonChrome$notifications$create,
    getAll: typeof SinonChrome$notifications$getAll,
    getPermissionLevel: typeof SinonChrome$notifications$getPermissionLevel,
    update: typeof SinonChrome$notifications$update,
    onButtonClicked: typeof SinonChrome$notifications$onButtonClicked,
    onClicked: typeof SinonChrome$notifications$onClicked,
    onClosed: typeof SinonChrome$notifications$onClosed,
    onPermissionLevelChanged: typeof SinonChrome$notifications$onPermissionLevelChanged,
    onShowSettings: typeof SinonChrome$notifications$onShowSettings
  };
  declare export var SinonChrome$notifications$clear: SinonChromeStub;

  declare export var SinonChrome$notifications$create: SinonChromeStub;

  declare export var SinonChrome$notifications$getAll: SinonChromeStub;

  declare export var SinonChrome$notifications$getPermissionLevel: SinonChromeStub;

  declare export var SinonChrome$notifications$update: SinonChromeStub;

  declare export var SinonChrome$notifications$onButtonClicked: SinonChrome$events$Event;

  declare export var SinonChrome$notifications$onClicked: SinonChrome$events$Event;

  declare export var SinonChrome$notifications$onClosed: SinonChrome$events$Event;

  declare export var SinonChrome$notifications$onPermissionLevelChanged: SinonChrome$events$Event;

  declare export var SinonChrome$notifications$onShowSettings: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$pageCapture: {
    saveAsMHTML: typeof SinonChrome$pageCapture$saveAsMHTML
  };
  declare export var SinonChrome$pageCapture$saveAsMHTML: SinonChromeStub;

  declare var npm$namespace$SinonChrome$permissions: {
    contains: typeof SinonChrome$permissions$contains,
    getAll: typeof SinonChrome$permissions$getAll,
    onAdded: typeof SinonChrome$permissions$onAdded,
    onRemoved: typeof SinonChrome$permissions$onRemoved,
    remove: typeof SinonChrome$permissions$remove,
    request: typeof SinonChrome$permissions$request
  };
  declare export var SinonChrome$permissions$contains: SinonChromeStub;

  declare export var SinonChrome$permissions$getAll: SinonChromeStub;

  declare export var SinonChrome$permissions$onAdded: SinonChrome$events$Event;

  declare export var SinonChrome$permissions$onRemoved: SinonChrome$events$Event;

  declare export var SinonChrome$permissions$remove: SinonChromeStub;

  declare export var SinonChrome$permissions$request: SinonChromeStub;

  declare var npm$namespace$SinonChrome$plugins: {
    I18nPlugin: typeof SinonChrome$plugins$I18nPlugin,
    CookiePlugin: typeof SinonChrome$plugins$CookiePlugin
  };
  declare export interface SinonChrome$plugins$Translations {
    [key: string]: {
      message: string,
      description?: string,
      placeholders?: {
        [key: string]: {
          content: string,
          example?: string
        }
      }
    };
  }

  declare export class SinonChrome$plugins$I18nPlugin {
    constructor(translations?: SinonChrome$plugins$Translations): this;
  }

  declare export class SinonChrome$plugins$CookiePlugin {
    constructor(state?: Array<chrome.cookies.Cookie>): this;
  }

  declare var npm$namespace$SinonChrome$power: {
    releaseKeepAwake: typeof SinonChrome$power$releaseKeepAwake,
    requestKeepAwake: typeof SinonChrome$power$requestKeepAwake
  };
  declare export var SinonChrome$power$releaseKeepAwake: SinonChromeStub;

  declare export var SinonChrome$power$requestKeepAwake: SinonChromeStub;

  declare interface SinonChrome$types$StubbedChromeSetting {
    clear: SinonChromeStub;
    get: SinonChromeStub;
    set: SinonChromeStub;
    onChange: SinonChrome$events$Event;
  }

  declare var npm$namespace$SinonChrome$privacy: {
    network: typeof SinonChrome$privacy$network,
    services: typeof SinonChrome$privacy$services,
    website: typeof SinonChrome$privacy$website
  };
  declare export var SinonChrome$privacy$network: {
    networkPredictionEnabled: SinonChrome$types$StubbedChromeSetting
  };

  declare export var SinonChrome$privacy$services: {
    alternateErrorPagesEnabled: SinonChrome$types$StubbedChromeSetting,
    autofillEnabled: SinonChrome$types$StubbedChromeSetting,
    passwordSavingEnabled: SinonChrome$types$StubbedChromeSetting,
    safeBrowsingEnabled: SinonChrome$types$StubbedChromeSetting,
    searchSuggestEnabled: SinonChrome$types$StubbedChromeSetting,
    spellingServiceEnabled: SinonChrome$types$StubbedChromeSetting,
    translationServiceEnabled: SinonChrome$types$StubbedChromeSetting
  };

  declare export var SinonChrome$privacy$website: {
    hyperlinkAuditingEnabled: SinonChrome$types$StubbedChromeSetting,
    referrersEnabled: SinonChrome$types$StubbedChromeSetting,
    thirdPartyCookiesAllowed: SinonChrome$types$StubbedChromeSetting
  };

  declare var npm$namespace$SinonChrome$proxy: {
    onProxyError: typeof SinonChrome$proxy$onProxyError,
    settings: typeof SinonChrome$proxy$settings
  };
  declare export var SinonChrome$proxy$onProxyError: SinonChrome$events$Event;

  declare export var SinonChrome$proxy$settings: SinonChrome$types$StubbedChromeSetting;

  declare var npm$namespace$SinonChrome$pushMessaging: {
    getChannelId: typeof SinonChrome$pushMessaging$getChannelId,
    onMessage: typeof SinonChrome$pushMessaging$onMessage
  };
  declare export var SinonChrome$pushMessaging$getChannelId: SinonChromeStub;

  declare export var SinonChrome$pushMessaging$onMessage: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$runtime: {
    connect: typeof SinonChrome$runtime$connect,
    connectNative: typeof SinonChrome$runtime$connectNative,
    getBackgroundPage: typeof SinonChrome$runtime$getBackgroundPage,
    getManifest: typeof SinonChrome$runtime$getManifest,
    getPackageDirectoryEntry: typeof SinonChrome$runtime$getPackageDirectoryEntry,
    getPlatformInfo: typeof SinonChrome$runtime$getPlatformInfo,
    reload: typeof SinonChrome$runtime$reload,
    requestUpdateCheck: typeof SinonChrome$runtime$requestUpdateCheck,
    restart: typeof SinonChrome$runtime$restart,
    sendMessage: typeof SinonChrome$runtime$sendMessage,
    sendNativeMessage: typeof SinonChrome$runtime$sendNativeMessage,
    onBrowserUpdateAvailable: typeof SinonChrome$runtime$onBrowserUpdateAvailable,
    onConnect: typeof SinonChrome$runtime$onConnect,
    onConnectExternal: typeof SinonChrome$runtime$onConnectExternal,
    onInstalled: typeof SinonChrome$runtime$onInstalled,
    onMessage: typeof SinonChrome$runtime$onMessage,
    onMessageExternal: typeof SinonChrome$runtime$onMessageExternal,
    onRestartRequired: typeof SinonChrome$runtime$onRestartRequired,
    onStartup: typeof SinonChrome$runtime$onStartup,
    onSuspend: typeof SinonChrome$runtime$onSuspend,
    onSuspendCanceled: typeof SinonChrome$runtime$onSuspendCanceled,
    onUpdateAvailable: typeof SinonChrome$runtime$onUpdateAvailable,
    id: typeof SinonChrome$runtime$id,
    getURL: typeof SinonChrome$runtime$getURL,
    lastError: typeof SinonChrome$runtime$lastError
  };
  declare export var SinonChrome$runtime$connect: SinonChromeStub;

  declare export var SinonChrome$runtime$connectNative: SinonChromeStub;

  declare export var SinonChrome$runtime$getBackgroundPage: SinonChromeStub;

  declare export var SinonChrome$runtime$getManifest: SinonChromeStub;

  declare export var SinonChrome$runtime$getPackageDirectoryEntry: SinonChromeStub;

  declare export var SinonChrome$runtime$getPlatformInfo: SinonChromeStub;

  declare export var SinonChrome$runtime$reload: SinonChromeStub;

  declare export var SinonChrome$runtime$requestUpdateCheck: SinonChromeStub;

  declare export var SinonChrome$runtime$restart: SinonChromeStub;

  declare export var SinonChrome$runtime$sendMessage: SinonChromeStub;

  declare export var SinonChrome$runtime$sendNativeMessage: SinonChromeStub;

  declare export var SinonChrome$runtime$onBrowserUpdateAvailable: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onConnect: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onConnectExternal: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onInstalled: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onMessage: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onMessageExternal: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onRestartRequired: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onStartup: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onSuspend: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onSuspendCanceled: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$onUpdateAvailable: SinonChrome$events$Event;

  declare export var SinonChrome$runtime$id: string;

  declare export var SinonChrome$runtime$getURL: SinonChromeStub;

  declare export var SinonChrome$runtime$lastError: {
    message?: string
  };

  declare var npm$namespace$SinonChrome$sessions: {
    getDevices: typeof SinonChrome$sessions$getDevices,
    getRecentlyClosed: typeof SinonChrome$sessions$getRecentlyClosed,
    restore: typeof SinonChrome$sessions$restore,
    onChanged: typeof SinonChrome$sessions$onChanged
  };
  declare export var SinonChrome$sessions$getDevices: SinonChromeStub;

  declare export var SinonChrome$sessions$getRecentlyClosed: SinonChromeStub;

  declare export var SinonChrome$sessions$restore: SinonChromeStub;

  declare export var SinonChrome$sessions$onChanged: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$storage: {
    local: typeof SinonChrome$storage$local,
    managed: typeof SinonChrome$storage$managed,
    sync: typeof SinonChrome$storage$sync,
    onChanged: typeof SinonChrome$storage$onChanged
  };
  declare interface SinonChrome$storage$StubbedStorageArea {
    clear: SinonChromeStub;
    get: SinonChromeStub;
    getBytesInUse: SinonChromeStub;
    remove: SinonChromeStub;
    set: SinonChromeStub;
  }

  declare export var SinonChrome$storage$local: SinonChrome$storage$StubbedStorageArea;

  declare export var SinonChrome$storage$managed: SinonChrome$storage$StubbedStorageArea;

  declare export var SinonChrome$storage$sync: SinonChrome$storage$StubbedStorageArea;

  declare export var SinonChrome$storage$onChanged: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$tabCapture: {
    capture: typeof SinonChrome$tabCapture$capture,
    getCapturedTabs: typeof SinonChrome$tabCapture$getCapturedTabs,
    onStatusChanged: typeof SinonChrome$tabCapture$onStatusChanged
  };
  declare export var SinonChrome$tabCapture$capture: SinonChromeStub;

  declare export var SinonChrome$tabCapture$getCapturedTabs: SinonChromeStub;

  declare export var SinonChrome$tabCapture$onStatusChanged: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$tabs: {
    captureVisibleTab: typeof SinonChrome$tabs$captureVisibleTab,
    connect: typeof SinonChrome$tabs$connect,
    create: typeof SinonChrome$tabs$create,
    detectLanguage: typeof SinonChrome$tabs$detectLanguage,
    duplicate: typeof SinonChrome$tabs$duplicate,
    executeScript: typeof SinonChrome$tabs$executeScript,
    get: typeof SinonChrome$tabs$get,
    getAllInWindow: typeof SinonChrome$tabs$getAllInWindow,
    getCurrent: typeof SinonChrome$tabs$getCurrent,
    getSelected: typeof SinonChrome$tabs$getSelected,
    highlight: typeof SinonChrome$tabs$highlight,
    insertCSS: typeof SinonChrome$tabs$insertCSS,
    move: typeof SinonChrome$tabs$move,
    query: typeof SinonChrome$tabs$query,
    reload: typeof SinonChrome$tabs$reload,
    remove: typeof SinonChrome$tabs$remove,
    sendMessage: typeof SinonChrome$tabs$sendMessage,
    sendRequest: typeof SinonChrome$tabs$sendRequest,
    update: typeof SinonChrome$tabs$update,
    onActivated: typeof SinonChrome$tabs$onActivated,
    onActiveChanged: typeof SinonChrome$tabs$onActiveChanged,
    onAttached: typeof SinonChrome$tabs$onAttached,
    onCreated: typeof SinonChrome$tabs$onCreated,
    onDetached: typeof SinonChrome$tabs$onDetached,
    onHighlightChanged: typeof SinonChrome$tabs$onHighlightChanged,
    onHighlighted: typeof SinonChrome$tabs$onHighlighted,
    onMoved: typeof SinonChrome$tabs$onMoved,
    onRemoved: typeof SinonChrome$tabs$onRemoved,
    onReplaced: typeof SinonChrome$tabs$onReplaced,
    onSelectionChanged: typeof SinonChrome$tabs$onSelectionChanged,
    onUpdated: typeof SinonChrome$tabs$onUpdated,
    onZoomChange: typeof SinonChrome$tabs$onZoomChange
  };
  declare export var SinonChrome$tabs$captureVisibleTab: SinonChromeStub;

  declare export var SinonChrome$tabs$connect: SinonChromeStub;

  declare export var SinonChrome$tabs$create: SinonChromeStub;

  declare export var SinonChrome$tabs$detectLanguage: SinonChromeStub;

  declare export var SinonChrome$tabs$duplicate: SinonChromeStub;

  declare export var SinonChrome$tabs$executeScript: SinonChromeStub;

  declare export var SinonChrome$tabs$get: SinonChromeStub;

  declare export var SinonChrome$tabs$getAllInWindow: SinonChromeStub;

  declare export var SinonChrome$tabs$getCurrent: SinonChromeStub;

  declare export var SinonChrome$tabs$getSelected: SinonChromeStub;

  declare export var SinonChrome$tabs$highlight: SinonChromeStub;

  declare export var SinonChrome$tabs$insertCSS: SinonChromeStub;

  declare export var SinonChrome$tabs$move: SinonChromeStub;

  declare export var SinonChrome$tabs$query: SinonChromeStub;

  declare export var SinonChrome$tabs$reload: SinonChromeStub;

  declare export var SinonChrome$tabs$remove: SinonChromeStub;

  declare export var SinonChrome$tabs$sendMessage: SinonChromeStub;

  declare export var SinonChrome$tabs$sendRequest: SinonChromeStub;

  declare export var SinonChrome$tabs$update: SinonChromeStub;

  declare export var SinonChrome$tabs$onActivated: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onActiveChanged: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onAttached: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onCreated: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onDetached: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onHighlightChanged: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onHighlighted: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onMoved: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onRemoved: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onReplaced: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onSelectionChanged: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onUpdated: SinonChrome$events$Event;

  declare export var SinonChrome$tabs$onZoomChange: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$topSites: {
    get: typeof SinonChrome$topSites$get
  };
  declare export var SinonChrome$topSites$get: SinonChromeStub;

  declare var npm$namespace$SinonChrome$tts: {
    getVoices: typeof SinonChrome$tts$getVoices,
    isSpeaking: typeof SinonChrome$tts$isSpeaking,
    pause: typeof SinonChrome$tts$pause,
    resume: typeof SinonChrome$tts$resume,
    speak: typeof SinonChrome$tts$speak,
    stop: typeof SinonChrome$tts$stop,
    onEvent: typeof SinonChrome$tts$onEvent
  };
  declare export var SinonChrome$tts$getVoices: SinonChromeStub;

  declare export var SinonChrome$tts$isSpeaking: SinonChromeStub;

  declare export var SinonChrome$tts$pause: SinonChromeStub;

  declare export var SinonChrome$tts$resume: SinonChromeStub;

  declare export var SinonChrome$tts$speak: SinonChromeStub;

  declare export var SinonChrome$tts$stop: SinonChromeStub;

  declare export var SinonChrome$tts$onEvent: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$ttsEngine: {
    onPause: typeof SinonChrome$ttsEngine$onPause,
    onResume: typeof SinonChrome$ttsEngine$onResume,
    onSpeak: typeof SinonChrome$ttsEngine$onSpeak,
    onStop: typeof SinonChrome$ttsEngine$onStop,
    sendTtsEvent: typeof SinonChrome$ttsEngine$sendTtsEvent
  };
  declare export var SinonChrome$ttsEngine$onPause: SinonChrome$events$Event;

  declare export var SinonChrome$ttsEngine$onResume: SinonChrome$events$Event;

  declare export var SinonChrome$ttsEngine$onSpeak: SinonChrome$events$Event;

  declare export var SinonChrome$ttsEngine$onStop: SinonChrome$events$Event;

  declare export var SinonChrome$ttsEngine$sendTtsEvent: SinonChromeStub;

  declare var npm$namespace$SinonChrome$webNavigation: {
    getAllFrames: typeof SinonChrome$webNavigation$getAllFrames,
    getFrame: typeof SinonChrome$webNavigation$getFrame,
    onBeforeNavigate: typeof SinonChrome$webNavigation$onBeforeNavigate,
    onCommitted: typeof SinonChrome$webNavigation$onCommitted,
    onCompleted: typeof SinonChrome$webNavigation$onCompleted,
    onCreatedNavigationTarget: typeof SinonChrome$webNavigation$onCreatedNavigationTarget,
    onDOMContentLoaded: typeof SinonChrome$webNavigation$onDOMContentLoaded,
    onErrorOccurred: typeof SinonChrome$webNavigation$onErrorOccurred,
    onHistoryStateUpdated: typeof SinonChrome$webNavigation$onHistoryStateUpdated,
    onReferenceFragmentUpdated: typeof SinonChrome$webNavigation$onReferenceFragmentUpdated,
    onTabReplaced: typeof SinonChrome$webNavigation$onTabReplaced
  };
  declare export var SinonChrome$webNavigation$getAllFrames: SinonChromeStub;

  declare export var SinonChrome$webNavigation$getFrame: SinonChromeStub;

  declare export var SinonChrome$webNavigation$onBeforeNavigate: SinonChrome$events$Event;

  declare export var SinonChrome$webNavigation$onCommitted: SinonChrome$events$Event;

  declare export var SinonChrome$webNavigation$onCompleted: SinonChrome$events$Event;

  declare export var SinonChrome$webNavigation$onCreatedNavigationTarget: SinonChrome$events$Event;

  declare export var SinonChrome$webNavigation$onDOMContentLoaded: SinonChrome$events$Event;

  declare export var SinonChrome$webNavigation$onErrorOccurred: SinonChrome$events$Event;

  declare export var SinonChrome$webNavigation$onHistoryStateUpdated: SinonChrome$events$Event;

  declare export var SinonChrome$webNavigation$onReferenceFragmentUpdated: SinonChrome$events$Event;

  declare export var SinonChrome$webNavigation$onTabReplaced: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$webRequest: {
    handlerBehaviorChanged: typeof SinonChrome$webRequest$handlerBehaviorChanged,
    onAuthRequired: typeof SinonChrome$webRequest$onAuthRequired,
    onBeforeRedirect: typeof SinonChrome$webRequest$onBeforeRedirect,
    onBeforeRequest: typeof SinonChrome$webRequest$onBeforeRequest,
    onBeforeSendHeaders: typeof SinonChrome$webRequest$onBeforeSendHeaders,
    onCompleted: typeof SinonChrome$webRequest$onCompleted,
    onErrorOccurred: typeof SinonChrome$webRequest$onErrorOccurred,
    onHeadersReceived: typeof SinonChrome$webRequest$onHeadersReceived,
    onResponseStarted: typeof SinonChrome$webRequest$onResponseStarted,
    onSendHeaders: typeof SinonChrome$webRequest$onSendHeaders
  };
  declare export var SinonChrome$webRequest$handlerBehaviorChanged: SinonChromeStub;

  declare export var SinonChrome$webRequest$onAuthRequired: SinonChrome$events$Event;

  declare export var SinonChrome$webRequest$onBeforeRedirect: SinonChrome$events$Event;

  declare export var SinonChrome$webRequest$onBeforeRequest: SinonChrome$events$Event;

  declare export var SinonChrome$webRequest$onBeforeSendHeaders: SinonChrome$events$Event;

  declare export var SinonChrome$webRequest$onCompleted: SinonChrome$events$Event;

  declare export var SinonChrome$webRequest$onErrorOccurred: SinonChrome$events$Event;

  declare export var SinonChrome$webRequest$onHeadersReceived: SinonChrome$events$Event;

  declare export var SinonChrome$webRequest$onResponseStarted: SinonChrome$events$Event;

  declare export var SinonChrome$webRequest$onSendHeaders: SinonChrome$events$Event;

  declare var npm$namespace$SinonChrome$windows: {
    create: typeof SinonChrome$windows$create,
    get: typeof SinonChrome$windows$get,
    getAll: typeof SinonChrome$windows$getAll,
    getCurrent: typeof SinonChrome$windows$getCurrent,
    getLastFocused: typeof SinonChrome$windows$getLastFocused,
    remove: typeof SinonChrome$windows$remove,
    update: typeof SinonChrome$windows$update,
    onCreated: typeof SinonChrome$windows$onCreated,
    onFocusChanged: typeof SinonChrome$windows$onFocusChanged,
    onRemoved: typeof SinonChrome$windows$onRemoved
  };
  declare export var SinonChrome$windows$create: SinonChromeStub;

  declare export var SinonChrome$windows$get: SinonChromeStub;

  declare export var SinonChrome$windows$getAll: SinonChromeStub;

  declare export var SinonChrome$windows$getCurrent: SinonChromeStub;

  declare export var SinonChrome$windows$getLastFocused: SinonChromeStub;

  declare export var SinonChrome$windows$remove: SinonChromeStub;

  declare export var SinonChrome$windows$update: SinonChromeStub;

  declare export var SinonChrome$windows$onCreated: SinonChrome$events$Event;

  declare export var SinonChrome$windows$onFocusChanged: SinonChrome$events$Event;

  declare export var SinonChrome$windows$onRemoved: SinonChrome$events$Event;
}
