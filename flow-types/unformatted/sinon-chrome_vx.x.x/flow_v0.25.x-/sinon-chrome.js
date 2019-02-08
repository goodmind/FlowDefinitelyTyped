
      declare var npm$namespace$SinonChrome: {
        flush: typeof SinonChrome$flush,
reset: typeof SinonChrome$reset,
registerPlugin: typeof SinonChrome$registerPlugin,
        csi: typeof SinonChrome$csi,
loadTimes: typeof SinonChrome$loadTimes,
      }
declare type events$Event = {
dispatch(...args: any[]): void,
trigger(...args: any[]): void,
triggerAsync(...args: any[]): void,
applyTrigger(args: any[]): void,
applyTriggerAsync(args: any[]): void,
addListener: Sinon.SinonSpy,
removeListener: Sinon.SinonSpy,
removeListeners: Sinon.SinonSpy,
hasListener: Sinon.SinonSpy,
dispatch(...args: any[]): void,
trigger(...args: any[]): void,
triggerAsync(...args: any[]): void,
applyTrigger(args: any[]): void,
applyTriggerAsync(args: any[]): void,
addListener: Sinon.SinonSpy,
removeListener: Sinon.SinonSpy,
removeListeners: Sinon.SinonSpy,
hasListener: Sinon.SinonSpy
} & undefined.events$Event<Function>



/**
 * Flush cache
 */
declare export function SinonChrome$flush(): void



/**
 * Reset all stubs and remove event listeners
 * See https://github.com/cjohansen/Sinon.JS/issues/572
 */
declare export function SinonChrome$reset(): void


declare export function SinonChrome$registerPlugin(plugin: {}): void


declare export var SinonChrome$csi: Sinon.SinonSpy;

declare export var SinonChrome$loadTimes: Sinon.SinonSpy;declare module 'sinon-chrome' {
        import typeof * as Sinon from 'sinon';

	declare export default typeof SinonChrome

	declare type SinonChromeStub = {
SinonChrome$flush(): void
} & Sinon.SinonStub

	declare type events$Event = {
dispatch(...args: any[]): void,
trigger(...args: any[]): void,
triggerAsync(...args: any[]): void,
applyTrigger(args: any[]): void,
applyTriggerAsync(args: any[]): void,
addListener: Sinon.SinonSpy,
removeListener: Sinon.SinonSpy,
removeListeners: Sinon.SinonSpy,
hasListener: Sinon.SinonSpy,
dispatch(...args: any[]): void,
trigger(...args: any[]): void,
triggerAsync(...args: any[]): void,
applyTrigger(args: any[]): void,
applyTriggerAsync(args: any[]): void,
addListener: Sinon.SinonSpy,
removeListener: Sinon.SinonSpy,
removeListeners: Sinon.SinonSpy,
hasListener: Sinon.SinonSpy
} & undefined.events$Event<Function>



      declare var npm$namespace$alarms: {
        
        clear: typeof alarms$clear,
clearAll: typeof alarms$clearAll,
create: typeof alarms$create,
get: typeof alarms$get,
getAll: typeof alarms$getAll,
onAlarm: typeof alarms$onAlarm,
      }
declare export var alarms$clear: SinonChromeStub;

declare export var alarms$clearAll: SinonChromeStub;

declare export var alarms$create: SinonChromeStub;

declare export var alarms$get: SinonChromeStub;

declare export var alarms$getAll: SinonChromeStub;

declare export var alarms$onAlarm: SinonChrome$events.events$Event;


      declare var npm$namespace$app: {
        
        getDetails: typeof app$getDetails,
getDetailsForFrame: typeof app$getDetailsForFrame,
getIsInstalled: typeof app$getIsInstalled,
installState: typeof app$installState,
runningState: typeof app$runningState,
      }
declare export var app$getDetails: SinonChromeStub;

declare export var app$getDetailsForFrame: SinonChromeStub;

declare export var app$getIsInstalled: SinonChromeStub;

declare export var app$installState: SinonChromeStub;

declare export var app$runningState: SinonChromeStub;


      declare var npm$namespace$bookmarks: {
        
        create: typeof bookmarks$create,
get: typeof bookmarks$get,
getChildren: typeof bookmarks$getChildren,
getRecent: typeof bookmarks$getRecent,
getSubTree: typeof bookmarks$getSubTree,
getTree: typeof bookmarks$getTree,
move: typeof bookmarks$move,
remove: typeof bookmarks$remove,
removeTree: typeof bookmarks$removeTree,
search: typeof bookmarks$search,
update: typeof bookmarks$update,
onChanged: typeof bookmarks$onChanged,
onChildrenReordered: typeof bookmarks$onChildrenReordered,
onCreated: typeof bookmarks$onCreated,
onImportBegan: typeof bookmarks$onImportBegan,
onImportEnded: typeof bookmarks$onImportEnded,
onMoved: typeof bookmarks$onMoved,
onRemoved: typeof bookmarks$onRemoved,
      }
declare export var bookmarks$create: SinonChromeStub;

declare export var bookmarks$get: SinonChromeStub;

declare export var bookmarks$getChildren: SinonChromeStub;

declare export var bookmarks$getRecent: SinonChromeStub;

declare export var bookmarks$getSubTree: SinonChromeStub;

declare export var bookmarks$getTree: SinonChromeStub;

declare export var bookmarks$move: SinonChromeStub;

declare export var bookmarks$remove: SinonChromeStub;

declare export var bookmarks$removeTree: SinonChromeStub;

declare export var bookmarks$search: SinonChromeStub;

declare export var bookmarks$update: SinonChromeStub;

declare export var bookmarks$onChanged: SinonChrome$events.events$Event;

declare export var bookmarks$onChildrenReordered: SinonChrome$events.events$Event;

declare export var bookmarks$onCreated: SinonChrome$events.events$Event;

declare export var bookmarks$onImportBegan: SinonChrome$events.events$Event;

declare export var bookmarks$onImportEnded: SinonChrome$events.events$Event;

declare export var bookmarks$onMoved: SinonChrome$events.events$Event;

declare export var bookmarks$onRemoved: SinonChrome$events.events$Event;


      declare var npm$namespace$browserAction: {
        
        disable: typeof browserAction$disable,
enable: typeof browserAction$enable,
getBadgeBackgroundColor: typeof browserAction$getBadgeBackgroundColor,
getBadgeText: typeof browserAction$getBadgeText,
getPopup: typeof browserAction$getPopup,
getTitle: typeof browserAction$getTitle,
setBadgeBackgroundColor: typeof browserAction$setBadgeBackgroundColor,
setBadgeText: typeof browserAction$setBadgeText,
setIcon: typeof browserAction$setIcon,
setPopup: typeof browserAction$setPopup,
setTitle: typeof browserAction$setTitle,
onClicked: typeof browserAction$onClicked,
      }
declare export var browserAction$disable: SinonChromeStub;

declare export var browserAction$enable: SinonChromeStub;

declare export var browserAction$getBadgeBackgroundColor: SinonChromeStub;

declare export var browserAction$getBadgeText: SinonChromeStub;

declare export var browserAction$getPopup: SinonChromeStub;

declare export var browserAction$getTitle: SinonChromeStub;

declare export var browserAction$setBadgeBackgroundColor: SinonChromeStub;

declare export var browserAction$setBadgeText: SinonChromeStub;

declare export var browserAction$setIcon: SinonChromeStub;

declare export var browserAction$setPopup: SinonChromeStub;

declare export var browserAction$setTitle: SinonChromeStub;

declare export var browserAction$onClicked: SinonChrome$events.events$Event;


      declare var npm$namespace$browsingData: {
        
        remove: typeof browsingData$remove,
removeAppcache: typeof browsingData$removeAppcache,
removeCache: typeof browsingData$removeCache,
removeCookies: typeof browsingData$removeCookies,
removeDownloads: typeof browsingData$removeDownloads,
removeFileSystems: typeof browsingData$removeFileSystems,
removeFormData: typeof browsingData$removeFormData,
removeHistory: typeof browsingData$removeHistory,
removeIndexedDB: typeof browsingData$removeIndexedDB,
removeLocalStorage: typeof browsingData$removeLocalStorage,
removePasswords: typeof browsingData$removePasswords,
removePluginData: typeof browsingData$removePluginData,
removeWebSQL: typeof browsingData$removeWebSQL,
settings: typeof browsingData$settings,
      }
declare export var browsingData$remove: SinonChromeStub;

declare export var browsingData$removeAppcache: SinonChromeStub;

declare export var browsingData$removeCache: SinonChromeStub;

declare export var browsingData$removeCookies: SinonChromeStub;

declare export var browsingData$removeDownloads: SinonChromeStub;

declare export var browsingData$removeFileSystems: SinonChromeStub;

declare export var browsingData$removeFormData: SinonChromeStub;

declare export var browsingData$removeHistory: SinonChromeStub;

declare export var browsingData$removeIndexedDB: SinonChromeStub;

declare export var browsingData$removeLocalStorage: SinonChromeStub;

declare export var browsingData$removePasswords: SinonChromeStub;

declare export var browsingData$removePluginData: SinonChromeStub;

declare export var browsingData$removeWebSQL: SinonChromeStub;

declare export var browsingData$settings: SinonChromeStub;


      declare var npm$namespace$contentSettings: {
        
        cookies: typeof contentSettings$cookies,
images: typeof contentSettings$images,
javascript: typeof contentSettings$javascript,
notifications: typeof contentSettings$notifications,
plugins: typeof contentSettings$plugins,
popups: typeof contentSettings$popups,
      }
declare interface contentSettings$StubbedContentSetting {
alarms$clear: SinonChromeStub,
bookmarks$get: SinonChromeStub,
getResourceIdentifiers: SinonChromeStub,
set: SinonChromeStub
} 

declare export var contentSettings$cookies: contentSettings$StubbedContentSetting;

declare export var contentSettings$images: contentSettings$StubbedContentSetting;

declare export var contentSettings$javascript: contentSettings$StubbedContentSetting;

declare export var contentSettings$notifications: contentSettings$StubbedContentSetting;

declare export var contentSettings$plugins: contentSettings$StubbedContentSetting;

declare export var contentSettings$popups: contentSettings$StubbedContentSetting;


      declare var npm$namespace$contextMenus: {
        
        create: typeof contextMenus$create,
remove: typeof contextMenus$remove,
removeAll: typeof contextMenus$removeAll,
update: typeof contextMenus$update,
onClicked: typeof contextMenus$onClicked,
      }
declare export var contextMenus$create: SinonChromeStub;

declare export var contextMenus$remove: SinonChromeStub;

declare export var contextMenus$removeAll: SinonChromeStub;

declare export var contextMenus$update: SinonChromeStub;

declare export var contextMenus$onClicked: SinonChrome$events.events$Event;


      declare var npm$namespace$omnibox: {
        
        setDefaultSuggestion: typeof omnibox$setDefaultSuggestion,
onInputStarted: typeof omnibox$onInputStarted,
onInputChanged: typeof omnibox$onInputChanged,
onInputEntered: typeof omnibox$onInputEntered,
onInputCancelled: typeof omnibox$onInputCancelled,
      }
declare export var omnibox$setDefaultSuggestion: SinonChromeStub;

declare export var omnibox$onInputStarted: SinonChrome$events.events$Event;

declare export var omnibox$onInputChanged: SinonChrome$events.events$Event;

declare export var omnibox$onInputEntered: SinonChrome$events.events$Event;

declare export var omnibox$onInputCancelled: SinonChrome$events.events$Event;


      declare var npm$namespace$cookies: {
        
        get: typeof cookies$get,
getAll: typeof cookies$getAll,
getAllCookieStores: typeof cookies$getAllCookieStores,
onChanged: typeof cookies$onChanged,
remove: typeof cookies$remove,
set: typeof cookies$set,
      }
declare export var cookies$get: SinonChromeStub;

declare export var cookies$getAll: SinonChromeStub;

declare export var cookies$getAllCookieStores: SinonChromeStub;

declare export var cookies$onChanged: SinonChrome$events.events$Event;

declare export var cookies$remove: SinonChromeStub;

declare export var cookies$set: SinonChromeStub;


      declare var npm$namespace$declarativeContent: {
        
        PageStateMatcher: typeof declarativeContent$PageStateMatcher,
RequestContentScript: typeof declarativeContent$RequestContentScript,
ShowPageAction: typeof declarativeContent$ShowPageAction,
onPageChanged: typeof declarativeContent$onPageChanged,
      }
declare export var declarativeContent$PageStateMatcher: SinonChromeStub;

declare export var declarativeContent$RequestContentScript: SinonChromeStub;

declare export var declarativeContent$ShowPageAction: SinonChromeStub;

declare export var declarativeContent$onPageChanged: SinonChrome$events.events$Event;


      declare var npm$namespace$desktopCapture: {
        
        cancelChooseDesktopMedia: typeof desktopCapture$cancelChooseDesktopMedia,
chooseDesktopMedia: typeof desktopCapture$chooseDesktopMedia,
      }
declare export var desktopCapture$cancelChooseDesktopMedia: SinonChromeStub;

declare export var desktopCapture$chooseDesktopMedia: SinonChromeStub;


      declare var npm$namespace$downloads: {
        
        acceptDanger: typeof downloads$acceptDanger,
cancel: typeof downloads$cancel,
download: typeof downloads$download,
drag: typeof downloads$drag,
erase: typeof downloads$erase,
getFileIcon: typeof downloads$getFileIcon,
open: typeof downloads$open,
pause: typeof downloads$pause,
removeFile: typeof downloads$removeFile,
resume: typeof downloads$resume,
search: typeof downloads$search,
setShelfEnabled: typeof downloads$setShelfEnabled,
show: typeof downloads$show,
showDefaultFolder: typeof downloads$showDefaultFolder,
onChanged: typeof downloads$onChanged,
onCreated: typeof downloads$onCreated,
onDeterminingFilename: typeof downloads$onDeterminingFilename,
onErased: typeof downloads$onErased,
      }
declare export var downloads$acceptDanger: SinonChromeStub;

declare export var downloads$cancel: SinonChromeStub;

declare export var downloads$download: SinonChromeStub;

declare export var downloads$drag: SinonChromeStub;

declare export var downloads$erase: SinonChromeStub;

declare export var downloads$getFileIcon: SinonChromeStub;

declare export var downloads$open: SinonChromeStub;

declare export var downloads$pause: SinonChromeStub;

declare export var downloads$removeFile: SinonChromeStub;

declare export var downloads$resume: SinonChromeStub;

declare export var downloads$search: SinonChromeStub;

declare export var downloads$setShelfEnabled: SinonChromeStub;

declare export var downloads$show: SinonChromeStub;

declare export var downloads$showDefaultFolder: SinonChromeStub;

declare export var downloads$onChanged: SinonChrome$events.events$Event;

declare export var downloads$onCreated: SinonChrome$events.events$Event;

declare export var downloads$onDeterminingFilename: SinonChrome$events.events$Event;

declare export var downloads$onErased: SinonChrome$events.events$Event;


      declare var npm$namespace$extension: {
        
        connect: typeof extension$connect,
connectNative: typeof extension$connectNative,
getBackgroundPage: typeof extension$getBackgroundPage,
getURL: typeof extension$getURL,
getViews: typeof extension$getViews,
isAllowedFileSchemeAccess: typeof extension$isAllowedFileSchemeAccess,
isAllowedIncognitoAccess: typeof extension$isAllowedIncognitoAccess,
sendMessage: typeof extension$sendMessage,
sendNativeMessage: typeof extension$sendNativeMessage,
sendRequest: typeof extension$sendRequest,
setUpdateUrlData: typeof extension$setUpdateUrlData,
onConnect: typeof extension$onConnect,
onConnectExternal: typeof extension$onConnectExternal,
onMessage: typeof extension$onMessage,
onMessageExternal: typeof extension$onMessageExternal,
onRequest: typeof extension$onRequest,
onRequestExternal: typeof extension$onRequestExternal,
      }
declare export var extension$connect: SinonChromeStub;

declare export var extension$connectNative: SinonChromeStub;

declare export var extension$getBackgroundPage: SinonChromeStub;

declare export var extension$getURL: SinonChromeStub;

declare export var extension$getViews: SinonChromeStub;

declare export var extension$isAllowedFileSchemeAccess: SinonChromeStub;

declare export var extension$isAllowedIncognitoAccess: SinonChromeStub;

declare export var extension$sendMessage: SinonChromeStub;

declare export var extension$sendNativeMessage: SinonChromeStub;

declare export var extension$sendRequest: SinonChromeStub;

declare export var extension$setUpdateUrlData: SinonChromeStub;

declare export var extension$onConnect: SinonChrome$events.events$Event;

declare export var extension$onConnectExternal: SinonChrome$events.events$Event;

declare export var extension$onMessage: SinonChrome$events.events$Event;

declare export var extension$onMessageExternal: SinonChrome$events.events$Event;

declare export var extension$onRequest: SinonChrome$events.events$Event;

declare export var extension$onRequestExternal: SinonChrome$events.events$Event;


      declare var npm$namespace$fontSettings: {
        
        clearDefaultFixedFontSize: typeof fontSettings$clearDefaultFixedFontSize,
clearDefaultFontSize: typeof fontSettings$clearDefaultFontSize,
clearFont: typeof fontSettings$clearFont,
clearMinimumFontSize: typeof fontSettings$clearMinimumFontSize,
getDefaultFixedFontSize: typeof fontSettings$getDefaultFixedFontSize,
getDefaultFontSize: typeof fontSettings$getDefaultFontSize,
getFont: typeof fontSettings$getFont,
getFontList: typeof fontSettings$getFontList,
getMinimumFontSize: typeof fontSettings$getMinimumFontSize,
setDefaultFixedFontSize: typeof fontSettings$setDefaultFixedFontSize,
setDefaultFontSize: typeof fontSettings$setDefaultFontSize,
setFont: typeof fontSettings$setFont,
setMinimumFontSize: typeof fontSettings$setMinimumFontSize,
onDefaultFixedFontSizeChanged: typeof fontSettings$onDefaultFixedFontSizeChanged,
onDefaultFontSizeChanged: typeof fontSettings$onDefaultFontSizeChanged,
onFontChanged: typeof fontSettings$onFontChanged,
onMinimumFontSizeChanged: typeof fontSettings$onMinimumFontSizeChanged,
      }
declare export var fontSettings$clearDefaultFixedFontSize: SinonChromeStub;

declare export var fontSettings$clearDefaultFontSize: SinonChromeStub;

declare export var fontSettings$clearFont: SinonChromeStub;

declare export var fontSettings$clearMinimumFontSize: SinonChromeStub;

declare export var fontSettings$getDefaultFixedFontSize: SinonChromeStub;

declare export var fontSettings$getDefaultFontSize: SinonChromeStub;

declare export var fontSettings$getFont: SinonChromeStub;

declare export var fontSettings$getFontList: SinonChromeStub;

declare export var fontSettings$getMinimumFontSize: SinonChromeStub;

declare export var fontSettings$setDefaultFixedFontSize: SinonChromeStub;

declare export var fontSettings$setDefaultFontSize: SinonChromeStub;

declare export var fontSettings$setFont: SinonChromeStub;

declare export var fontSettings$setMinimumFontSize: SinonChromeStub;

declare export var fontSettings$onDefaultFixedFontSizeChanged: SinonChrome$events.events$Event;

declare export var fontSettings$onDefaultFontSizeChanged: SinonChrome$events.events$Event;

declare export var fontSettings$onFontChanged: SinonChrome$events.events$Event;

declare export var fontSettings$onMinimumFontSizeChanged: SinonChrome$events.events$Event;


      declare var npm$namespace$gcm: {
        
        onMessage: typeof gcm$onMessage,
onMessagesDeleted: typeof gcm$onMessagesDeleted,
onSendError: typeof gcm$onSendError,
register: typeof gcm$register,
send: typeof gcm$send,
unregister: typeof gcm$unregister,
      }
declare export var gcm$onMessage: SinonChrome$events.events$Event;

declare export var gcm$onMessagesDeleted: SinonChrome$events.events$Event;

declare export var gcm$onSendError: SinonChrome$events.events$Event;

declare export var gcm$register: SinonChromeStub;

declare export var gcm$send: SinonChromeStub;

declare export var gcm$unregister: SinonChromeStub;


      declare var npm$namespace$history: {
        
        addUrl: typeof history$addUrl,
deleteAll: typeof history$deleteAll,
deleteRange: typeof history$deleteRange,
deleteUrl: typeof history$deleteUrl,
getVisits: typeof history$getVisits,
search: typeof history$search,
onVisitRemoved: typeof history$onVisitRemoved,
onVisited: typeof history$onVisited,
      }
declare export var history$addUrl: SinonChromeStub;

declare export var history$deleteAll: SinonChromeStub;

declare export var history$deleteRange: SinonChromeStub;

declare export var history$deleteUrl: SinonChromeStub;

declare export var history$getVisits: SinonChromeStub;

declare export var history$search: SinonChromeStub;

declare export var history$onVisitRemoved: SinonChrome$events.events$Event;

declare export var history$onVisited: SinonChrome$events.events$Event;


      declare var npm$namespace$i18n: {
        
        getAcceptLanguages: typeof i18n$getAcceptLanguages,
getMessage: typeof i18n$getMessage,
getUILanguage: typeof i18n$getUILanguage,
      }
declare export var i18n$getAcceptLanguages: SinonChromeStub;

declare export var i18n$getMessage: SinonChromeStub;

declare export var i18n$getUILanguage: SinonChromeStub;


      declare var npm$namespace$identity: {
        
        getAuthToken: typeof identity$getAuthToken,
getProfileUserInfo: typeof identity$getProfileUserInfo,
getRedirectURL: typeof identity$getRedirectURL,
launchWebAuthFlow: typeof identity$launchWebAuthFlow,
removeCachedAuthToken: typeof identity$removeCachedAuthToken,
onSignInChanged: typeof identity$onSignInChanged,
      }
declare export var identity$getAuthToken: SinonChromeStub;

declare export var identity$getProfileUserInfo: SinonChromeStub;

declare export var identity$getRedirectURL: SinonChromeStub;

declare export var identity$launchWebAuthFlow: SinonChromeStub;

declare export var identity$removeCachedAuthToken: SinonChromeStub;

declare export var identity$onSignInChanged: SinonChrome$events.events$Event;


      declare var npm$namespace$idle: {
        
        onStateChanged: typeof idle$onStateChanged,
queryState: typeof idle$queryState,
setDetectionInterval: typeof idle$setDetectionInterval,
      }
declare export var idle$onStateChanged: SinonChrome$events.events$Event;

declare export var idle$queryState: SinonChromeStub;

declare export var idle$setDetectionInterval: SinonChromeStub;


      declare var npm$namespace$management: {
        
        createAppShortcut: typeof management$createAppShortcut,
generateAppForLink: typeof management$generateAppForLink,
get: typeof management$get,
getAll: typeof management$getAll,
getPermissionWarningsById: typeof management$getPermissionWarningsById,
getPermissionWarningsByManifest: typeof management$getPermissionWarningsByManifest,
launchApp: typeof management$launchApp,
setEnabled: typeof management$setEnabled,
setLaunchType: typeof management$setLaunchType,
uninstall: typeof management$uninstall,
uninstallSelf: typeof management$uninstallSelf,
onDisabled: typeof management$onDisabled,
onEnabled: typeof management$onEnabled,
onInstalled: typeof management$onInstalled,
onUninstalled: typeof management$onUninstalled,
      }
declare export var management$createAppShortcut: SinonChromeStub;

declare export var management$generateAppForLink: SinonChromeStub;

declare export var management$get: SinonChromeStub;

declare export var management$getAll: SinonChromeStub;

declare export var management$getPermissionWarningsById: SinonChromeStub;

declare export var management$getPermissionWarningsByManifest: SinonChromeStub;

declare export var management$launchApp: SinonChromeStub;

declare export var management$setEnabled: SinonChromeStub;

declare export var management$setLaunchType: SinonChromeStub;

declare export var management$uninstall: SinonChromeStub;

declare export var management$uninstallSelf: SinonChromeStub;

declare export var management$onDisabled: SinonChrome$events.events$Event;

declare export var management$onEnabled: SinonChrome$events.events$Event;

declare export var management$onInstalled: SinonChrome$events.events$Event;

declare export var management$onUninstalled: SinonChrome$events.events$Event;


      declare var npm$namespace$notifications: {
        
        clear: typeof notifications$clear,
create: typeof notifications$create,
getAll: typeof notifications$getAll,
getPermissionLevel: typeof notifications$getPermissionLevel,
update: typeof notifications$update,
onButtonClicked: typeof notifications$onButtonClicked,
onClicked: typeof notifications$onClicked,
onClosed: typeof notifications$onClosed,
onPermissionLevelChanged: typeof notifications$onPermissionLevelChanged,
onShowSettings: typeof notifications$onShowSettings,
      }
declare export var notifications$clear: SinonChromeStub;

declare export var notifications$create: SinonChromeStub;

declare export var notifications$getAll: SinonChromeStub;

declare export var notifications$getPermissionLevel: SinonChromeStub;

declare export var notifications$update: SinonChromeStub;

declare export var notifications$onButtonClicked: SinonChrome$events.events$Event;

declare export var notifications$onClicked: SinonChrome$events.events$Event;

declare export var notifications$onClosed: SinonChrome$events.events$Event;

declare export var notifications$onPermissionLevelChanged: SinonChrome$events.events$Event;

declare export var notifications$onShowSettings: SinonChrome$events.events$Event;


      declare var npm$namespace$pageCapture: {
        
        saveAsMHTML: typeof pageCapture$saveAsMHTML,
      }
declare export var pageCapture$saveAsMHTML: SinonChromeStub;


      declare var npm$namespace$permissions: {
        
        contains: typeof permissions$contains,
getAll: typeof permissions$getAll,
onAdded: typeof permissions$onAdded,
onRemoved: typeof permissions$onRemoved,
remove: typeof permissions$remove,
request: typeof permissions$request,
      }
declare export var permissions$contains: SinonChromeStub;

declare export var permissions$getAll: SinonChromeStub;

declare export var permissions$onAdded: SinonChrome$events.events$Event;

declare export var permissions$onRemoved: SinonChrome$events.events$Event;

declare export var permissions$remove: SinonChromeStub;

declare export var permissions$request: SinonChromeStub;

export interface plugins$Translations {
[key: string]: {
message: string,
description?: string,
placeholders?: {
[key: string]: {
content: string,
example?: string
}
}
}
} 

declare export class plugins$I18nPlugin  {
constructor(translations?: plugins$Translations): this
}

declare export class plugins$CookiePlugin  {
constructor(state?: Array<chrome.contentSettings$cookies.Cookie>): this
}


      declare var npm$namespace$power: {
        
        releaseKeepAwake: typeof power$releaseKeepAwake,
requestKeepAwake: typeof power$requestKeepAwake,
      }
declare export var power$releaseKeepAwake: SinonChromeStub;

declare export var power$requestKeepAwake: SinonChromeStub;

declare interface types$StubbedChromeSetting {
notifications$clear: SinonChromeStub,
management$get: SinonChromeStub,
cookies$set: SinonChromeStub,
onChange: SinonChrome$events.events$Event
} 


      declare var npm$namespace$privacy: {
        
        network: typeof privacy$network,
services: typeof privacy$services,
website: typeof privacy$website,
      }
declare export var privacy$network: {
networkPredictionEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting
};

declare export var privacy$services: {
alternateErrorPagesEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting,
autofillEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting,
passwordSavingEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting,
safeBrowsingEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting,
searchSuggestEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting,
spellingServiceEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting,
translationServiceEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting
};

declare export var privacy$website: {
hyperlinkAuditingEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting,
referrersEnabled: SinonChrome$SinonChrome$types.types$StubbedChromeSetting,
thirdPartyCookiesAllowed: SinonChrome$SinonChrome$types.types$StubbedChromeSetting
};


      declare var npm$namespace$proxy: {
        
        onProxyError: typeof proxy$onProxyError,
settings: typeof proxy$settings,
      }
declare export var proxy$onProxyError: SinonChrome$events.events$Event;

declare export var proxy$settings: SinonChrome$SinonChrome$types.types$StubbedChromeSetting;


      declare var npm$namespace$pushMessaging: {
        
        getChannelId: typeof pushMessaging$getChannelId,
onMessage: typeof pushMessaging$onMessage,
      }
declare export var pushMessaging$getChannelId: SinonChromeStub;

declare export var pushMessaging$onMessage: SinonChrome$events.events$Event;


      declare var npm$namespace$runtime: {
        
        connect: typeof runtime$connect,
connectNative: typeof runtime$connectNative,
getBackgroundPage: typeof runtime$getBackgroundPage,
getManifest: typeof runtime$getManifest,
getPackageDirectoryEntry: typeof runtime$getPackageDirectoryEntry,
getPlatformInfo: typeof runtime$getPlatformInfo,
reload: typeof runtime$reload,
requestUpdateCheck: typeof runtime$requestUpdateCheck,
restart: typeof runtime$restart,
sendMessage: typeof runtime$sendMessage,
sendNativeMessage: typeof runtime$sendNativeMessage,
onBrowserUpdateAvailable: typeof runtime$onBrowserUpdateAvailable,
onConnect: typeof runtime$onConnect,
onConnectExternal: typeof runtime$onConnectExternal,
onInstalled: typeof runtime$onInstalled,
onMessage: typeof runtime$onMessage,
onMessageExternal: typeof runtime$onMessageExternal,
onRestartRequired: typeof runtime$onRestartRequired,
onStartup: typeof runtime$onStartup,
onSuspend: typeof runtime$onSuspend,
onSuspendCanceled: typeof runtime$onSuspendCanceled,
onUpdateAvailable: typeof runtime$onUpdateAvailable,
id: typeof runtime$id,
getURL: typeof runtime$getURL,
lastError: typeof runtime$lastError,
      }
declare export var runtime$connect: SinonChromeStub;

declare export var runtime$connectNative: SinonChromeStub;

declare export var runtime$getBackgroundPage: SinonChromeStub;

declare export var runtime$getManifest: SinonChromeStub;

declare export var runtime$getPackageDirectoryEntry: SinonChromeStub;

declare export var runtime$getPlatformInfo: SinonChromeStub;

declare export var runtime$reload: SinonChromeStub;

declare export var runtime$requestUpdateCheck: SinonChromeStub;

declare export var runtime$restart: SinonChromeStub;

declare export var runtime$sendMessage: SinonChromeStub;

declare export var runtime$sendNativeMessage: SinonChromeStub;

declare export var runtime$onBrowserUpdateAvailable: SinonChrome$events.events$Event;

declare export var runtime$onConnect: SinonChrome$events.events$Event;

declare export var runtime$onConnectExternal: SinonChrome$events.events$Event;

declare export var runtime$onInstalled: SinonChrome$events.events$Event;

declare export var runtime$onMessage: SinonChrome$events.events$Event;

declare export var runtime$onMessageExternal: SinonChrome$events.events$Event;

declare export var runtime$onRestartRequired: SinonChrome$events.events$Event;

declare export var runtime$onStartup: SinonChrome$events.events$Event;

declare export var runtime$onSuspend: SinonChrome$events.events$Event;

declare export var runtime$onSuspendCanceled: SinonChrome$events.events$Event;

declare export var runtime$onUpdateAvailable: SinonChrome$events.events$Event;

declare export var runtime$id: string;

declare export var runtime$getURL: SinonChromeStub;

declare export var runtime$lastError: {
message?: string
};


      declare var npm$namespace$sessions: {
        
        getDevices: typeof sessions$getDevices,
getRecentlyClosed: typeof sessions$getRecentlyClosed,
restore: typeof sessions$restore,
onChanged: typeof sessions$onChanged,
      }
declare export var sessions$getDevices: SinonChromeStub;

declare export var sessions$getRecentlyClosed: SinonChromeStub;

declare export var sessions$restore: SinonChromeStub;

declare export var sessions$onChanged: SinonChrome$events.events$Event;


      declare var npm$namespace$storage: {
        
        local: typeof storage$local,
managed: typeof storage$managed,
sync: typeof storage$sync,
onChanged: typeof storage$onChanged,
      }
declare interface storage$StubbedStorageArea {
notifications$clear: SinonChromeStub,
management$get: SinonChromeStub,
getBytesInUse: SinonChromeStub,
permissions$remove: SinonChromeStub,
cookies$set: SinonChromeStub
} 

declare export var storage$local: storage$StubbedStorageArea;

declare export var storage$managed: storage$StubbedStorageArea;

declare export var storage$sync: storage$StubbedStorageArea;

declare export var storage$onChanged: SinonChrome$events.events$Event;


      declare var npm$namespace$tabCapture: {
        
        capture: typeof tabCapture$capture,
getCapturedTabs: typeof tabCapture$getCapturedTabs,
onStatusChanged: typeof tabCapture$onStatusChanged,
      }
declare export var tabCapture$capture: SinonChromeStub;

declare export var tabCapture$getCapturedTabs: SinonChromeStub;

declare export var tabCapture$onStatusChanged: SinonChrome$events.events$Event;


      declare var npm$namespace$tabs: {
        
        captureVisibleTab: typeof tabs$captureVisibleTab,
connect: typeof tabs$connect,
create: typeof tabs$create,
detectLanguage: typeof tabs$detectLanguage,
duplicate: typeof tabs$duplicate,
executeScript: typeof tabs$executeScript,
get: typeof tabs$get,
getAllInWindow: typeof tabs$getAllInWindow,
getCurrent: typeof tabs$getCurrent,
getSelected: typeof tabs$getSelected,
highlight: typeof tabs$highlight,
insertCSS: typeof tabs$insertCSS,
move: typeof tabs$move,
query: typeof tabs$query,
reload: typeof tabs$reload,
remove: typeof tabs$remove,
sendMessage: typeof tabs$sendMessage,
sendRequest: typeof tabs$sendRequest,
update: typeof tabs$update,
onActivated: typeof tabs$onActivated,
onActiveChanged: typeof tabs$onActiveChanged,
onAttached: typeof tabs$onAttached,
onCreated: typeof tabs$onCreated,
onDetached: typeof tabs$onDetached,
onHighlightChanged: typeof tabs$onHighlightChanged,
onHighlighted: typeof tabs$onHighlighted,
onMoved: typeof tabs$onMoved,
onRemoved: typeof tabs$onRemoved,
onReplaced: typeof tabs$onReplaced,
onSelectionChanged: typeof tabs$onSelectionChanged,
onUpdated: typeof tabs$onUpdated,
onZoomChange: typeof tabs$onZoomChange,
      }
declare export var tabs$captureVisibleTab: SinonChromeStub;

declare export var tabs$connect: SinonChromeStub;

declare export var tabs$create: SinonChromeStub;

declare export var tabs$detectLanguage: SinonChromeStub;

declare export var tabs$duplicate: SinonChromeStub;

declare export var tabs$executeScript: SinonChromeStub;

declare export var tabs$get: SinonChromeStub;

declare export var tabs$getAllInWindow: SinonChromeStub;

declare export var tabs$getCurrent: SinonChromeStub;

declare export var tabs$getSelected: SinonChromeStub;

declare export var tabs$highlight: SinonChromeStub;

declare export var tabs$insertCSS: SinonChromeStub;

declare export var tabs$move: SinonChromeStub;

declare export var tabs$query: SinonChromeStub;

declare export var tabs$reload: SinonChromeStub;

declare export var tabs$remove: SinonChromeStub;

declare export var tabs$sendMessage: SinonChromeStub;

declare export var tabs$sendRequest: SinonChromeStub;

declare export var tabs$update: SinonChromeStub;

declare export var tabs$onActivated: SinonChrome$events.events$Event;

declare export var tabs$onActiveChanged: SinonChrome$events.events$Event;

declare export var tabs$onAttached: SinonChrome$events.events$Event;

declare export var tabs$onCreated: SinonChrome$events.events$Event;

declare export var tabs$onDetached: SinonChrome$events.events$Event;

declare export var tabs$onHighlightChanged: SinonChrome$events.events$Event;

declare export var tabs$onHighlighted: SinonChrome$events.events$Event;

declare export var tabs$onMoved: SinonChrome$events.events$Event;

declare export var tabs$onRemoved: SinonChrome$events.events$Event;

declare export var tabs$onReplaced: SinonChrome$events.events$Event;

declare export var tabs$onSelectionChanged: SinonChrome$events.events$Event;

declare export var tabs$onUpdated: SinonChrome$events.events$Event;

declare export var tabs$onZoomChange: SinonChrome$events.events$Event;


      declare var npm$namespace$topSites: {
        
        get: typeof topSites$get,
      }
declare export var topSites$get: SinonChromeStub;


      declare var npm$namespace$tts: {
        
        getVoices: typeof tts$getVoices,
isSpeaking: typeof tts$isSpeaking,
pause: typeof tts$pause,
resume: typeof tts$resume,
speak: typeof tts$speak,
stop: typeof tts$stop,
onEvent: typeof tts$onEvent,
      }
declare export var tts$getVoices: SinonChromeStub;

declare export var tts$isSpeaking: SinonChromeStub;

declare export var tts$pause: SinonChromeStub;

declare export var tts$resume: SinonChromeStub;

declare export var tts$speak: SinonChromeStub;

declare export var tts$stop: SinonChromeStub;

declare export var tts$onEvent: SinonChrome$events.events$Event;


      declare var npm$namespace$ttsEngine: {
        
        onPause: typeof ttsEngine$onPause,
onResume: typeof ttsEngine$onResume,
onSpeak: typeof ttsEngine$onSpeak,
onStop: typeof ttsEngine$onStop,
sendTtsEvent: typeof ttsEngine$sendTtsEvent,
      }
declare export var ttsEngine$onPause: SinonChrome$events.events$Event;

declare export var ttsEngine$onResume: SinonChrome$events.events$Event;

declare export var ttsEngine$onSpeak: SinonChrome$events.events$Event;

declare export var ttsEngine$onStop: SinonChrome$events.events$Event;

declare export var ttsEngine$sendTtsEvent: SinonChromeStub;


      declare var npm$namespace$webNavigation: {
        
        getAllFrames: typeof webNavigation$getAllFrames,
getFrame: typeof webNavigation$getFrame,
onBeforeNavigate: typeof webNavigation$onBeforeNavigate,
onCommitted: typeof webNavigation$onCommitted,
onCompleted: typeof webNavigation$onCompleted,
onCreatedNavigationTarget: typeof webNavigation$onCreatedNavigationTarget,
onDOMContentLoaded: typeof webNavigation$onDOMContentLoaded,
onErrorOccurred: typeof webNavigation$onErrorOccurred,
onHistoryStateUpdated: typeof webNavigation$onHistoryStateUpdated,
onReferenceFragmentUpdated: typeof webNavigation$onReferenceFragmentUpdated,
onTabReplaced: typeof webNavigation$onTabReplaced,
      }
declare export var webNavigation$getAllFrames: SinonChromeStub;

declare export var webNavigation$getFrame: SinonChromeStub;

declare export var webNavigation$onBeforeNavigate: SinonChrome$events.events$Event;

declare export var webNavigation$onCommitted: SinonChrome$events.events$Event;

declare export var webNavigation$onCompleted: SinonChrome$events.events$Event;

declare export var webNavigation$onCreatedNavigationTarget: SinonChrome$events.events$Event;

declare export var webNavigation$onDOMContentLoaded: SinonChrome$events.events$Event;

declare export var webNavigation$onErrorOccurred: SinonChrome$events.events$Event;

declare export var webNavigation$onHistoryStateUpdated: SinonChrome$events.events$Event;

declare export var webNavigation$onReferenceFragmentUpdated: SinonChrome$events.events$Event;

declare export var webNavigation$onTabReplaced: SinonChrome$events.events$Event;


      declare var npm$namespace$webRequest: {
        
        handlerBehaviorChanged: typeof webRequest$handlerBehaviorChanged,
onAuthRequired: typeof webRequest$onAuthRequired,
onBeforeRedirect: typeof webRequest$onBeforeRedirect,
onBeforeRequest: typeof webRequest$onBeforeRequest,
onBeforeSendHeaders: typeof webRequest$onBeforeSendHeaders,
onCompleted: typeof webRequest$onCompleted,
onErrorOccurred: typeof webRequest$onErrorOccurred,
onHeadersReceived: typeof webRequest$onHeadersReceived,
onResponseStarted: typeof webRequest$onResponseStarted,
onSendHeaders: typeof webRequest$onSendHeaders,
      }
declare export var webRequest$handlerBehaviorChanged: SinonChromeStub;

declare export var webRequest$onAuthRequired: SinonChrome$events.events$Event;

declare export var webRequest$onBeforeRedirect: SinonChrome$events.events$Event;

declare export var webRequest$onBeforeRequest: SinonChrome$events.events$Event;

declare export var webRequest$onBeforeSendHeaders: SinonChrome$events.events$Event;

declare export var webRequest$onCompleted: SinonChrome$events.events$Event;

declare export var webRequest$onErrorOccurred: SinonChrome$events.events$Event;

declare export var webRequest$onHeadersReceived: SinonChrome$events.events$Event;

declare export var webRequest$onResponseStarted: SinonChrome$events.events$Event;

declare export var webRequest$onSendHeaders: SinonChrome$events.events$Event;


      declare var npm$namespace$windows: {
        
        create: typeof windows$create,
get: typeof windows$get,
getAll: typeof windows$getAll,
getCurrent: typeof windows$getCurrent,
getLastFocused: typeof windows$getLastFocused,
remove: typeof windows$remove,
update: typeof windows$update,
onCreated: typeof windows$onCreated,
onFocusChanged: typeof windows$onFocusChanged,
onRemoved: typeof windows$onRemoved,
      }
declare export var windows$create: SinonChromeStub;

declare export var windows$get: SinonChromeStub;

declare export var windows$getAll: SinonChromeStub;

declare export var windows$getCurrent: SinonChromeStub;

declare export var windows$getLastFocused: SinonChromeStub;

declare export var windows$remove: SinonChromeStub;

declare export var windows$update: SinonChromeStub;

declare export var windows$onCreated: SinonChrome$events.events$Event;

declare export var windows$onFocusChanged: SinonChrome$events.events$Event;

declare export var windows$onRemoved: SinonChrome$events.events$Event;
    }
