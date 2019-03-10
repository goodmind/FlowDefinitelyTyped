declare module 'ibm-mobilefirst' {
        declare var WL: typeof npm$namespace$WL;

      declare var npm$namespace$WL: {
        
        Logger: typeof WL$Logger,
ClientMessages: typeof WL$ClientMessages,
        
        ResponseBase: typeof WL$ResponseBase,
FailureResponse: typeof WL$FailureResponse,
Response: typeof WL$Response,
BusyIndicator: typeof WL$BusyIndicator,
Item: typeof WL$Item,
LoggerObject: typeof WL$LoggerObject,
LogInstance: typeof WL$LogInstance,
TabBarItem: typeof WL$TabBarItem,
        Events: typeof npm$namespace$WL$Events,
AppProperty: typeof npm$namespace$WL$AppProperty,
Environment: typeof npm$namespace$WL$Environment,
Analytics: typeof npm$namespace$WL$Analytics,
App: typeof npm$namespace$WL$App,
Badge: typeof npm$namespace$WL$Badge,
Client: typeof npm$namespace$WL$Client,
Device: typeof npm$namespace$WL$Device,
EncryptedCache: typeof npm$namespace$WL$EncryptedCache,
Geo: typeof npm$namespace$WL$Geo,
JSONStore: typeof npm$namespace$WL$JSONStore,
LocalStorage: typeof npm$namespace$WL$LocalStorage,
NativePage: typeof npm$namespace$WL$NativePage,
SecurityUtils: typeof npm$namespace$WL$SecurityUtils,
SimpleDialog: typeof npm$namespace$WL$SimpleDialog,
TabBar: typeof npm$namespace$WL$TabBar,
Toast: typeof npm$namespace$WL$Toast,
Trusteer: typeof npm$namespace$WL$Trusteer,
UserAuth: typeof npm$namespace$WL$UserAuth,
      }

      declare var npm$namespace$WL$Events: {
        
        WORKLIGHT_IS_CONNECTED: typeof WL$Events$WORKLIGHT_IS_CONNECTED,
WORKLIGHT_IS_DISCONNECTED: typeof WL$Events$WORKLIGHT_IS_DISCONNECTED,
        
        
        
      }
declare var WL$Events$WORKLIGHT_IS_CONNECTED: string;

declare var WL$Events$WORKLIGHT_IS_DISCONNECTED: string;


      declare var npm$namespace$WL$AppProperty: {
        
        AIR_ICON_16x16_PATH: typeof WL$AppProperty$AIR_ICON_16x16_PATH,
AIR_ICON_128x128_PATH: typeof WL$AppProperty$AIR_ICON_128x128_PATH,
DOWNLOAD_APP_LINK: typeof WL$AppProperty$DOWNLOAD_APP_LINK,
APP_DISPLAY_NAME: typeof WL$AppProperty$APP_DISPLAY_NAME,
APP_LOGIN_TYPE: typeof WL$AppProperty$APP_LOGIN_TYPE,
APP_VERSION: typeof WL$AppProperty$APP_VERSION,
LATEST_VERSION: typeof WL$AppProperty$LATEST_VERSION,
MAIN_FILE_PATH: typeof WL$AppProperty$MAIN_FILE_PATH,
SHOW_IN_TASKBAR: typeof WL$AppProperty$SHOW_IN_TASKBAR,
THUMBNAIL_IMAGE_URL: typeof WL$AppProperty$THUMBNAIL_IMAGE_URL,
        
        
        
      }
declare var WL$AppProperty$AIR_ICON_16x16_PATH: string;

declare var WL$AppProperty$AIR_ICON_128x128_PATH: string;

declare var WL$AppProperty$DOWNLOAD_APP_LINK: string;

declare var WL$AppProperty$APP_DISPLAY_NAME: string;

declare var WL$AppProperty$APP_LOGIN_TYPE: string;

declare var WL$AppProperty$APP_VERSION: string;

declare var WL$AppProperty$LATEST_VERSION: string;

declare var WL$AppProperty$MAIN_FILE_PATH: string;

declare var WL$AppProperty$SHOW_IN_TASKBAR: string;

declare var WL$AppProperty$THUMBNAIL_IMAGE_URL: string;


      declare var npm$namespace$WL$Environment: {
        
        ADOBE_AIR: typeof WL$Environment$ADOBE_AIR,
ANDROID: typeof WL$Environment$ANDROID,
EMBEDDED: typeof WL$Environment$EMBEDDED,
IPAD: typeof WL$Environment$IPAD,
IPHONE: typeof WL$Environment$IPHONE,
MOBILE_WEB: typeof WL$Environment$MOBILE_WEB,
PREVIEW: typeof WL$Environment$PREVIEW,
WINDOWS_PHONE_8: typeof WL$Environment$WINDOWS_PHONE_8,
WINDOWS8: typeof WL$Environment$WINDOWS8,
        
        
        
      }
declare var WL$Environment$ADOBE_AIR: string;

declare var WL$Environment$ANDROID: string;

declare var WL$Environment$EMBEDDED: string;

declare var WL$Environment$IPAD: string;

declare var WL$Environment$IPHONE: string;

declare var WL$Environment$MOBILE_WEB: string;

declare var WL$Environment$PREVIEW: string;

declare var WL$Environment$WINDOWS_PHONE_8: string;

declare var WL$Environment$WINDOWS8: string;

declare interface WL$IResponse {
invocationContext?: any
} 

declare interface WL$Headers {
[key: string]: string
} 

declare class WL$ResponseBase  {
invocationContext: any;
headerJSON: {
[key: string]: any
};
readyState: number;
request: any;
responseJSON: {
[key: string]: any
};
responseText: string;
responseXML: string;
status: number;
statusText: string;
errorCode: number;
errorMsg: string
}

declare class WL$FailureResponse mixins WL$ResponseBase {}

declare class WL$Response mixins WL$ResponseBase {
getHeaderNames(): string[];
getAllHeaders(): WL$Headers;
getHeader(name: any): string
}

declare interface WL$Options {
onSuccess?: (response: WL$IResponse) => void,
onFailure?: (response: WL$IResponse) => void,
invocationContext?: any
} 

declare interface WL$ResponseHandler<T> {
(response: T): void
} 


      declare var npm$namespace$WL$Analytics: {
        disable: typeof WL$Analytics$disable,
enable: typeof WL$Analytics$enable,
log: typeof WL$Analytics$log,
restart: typeof WL$Analytics$restart,
send: typeof WL$Analytics$send,
state: typeof WL$Analytics$state,
        
        
        
        
      }
declare function WL$Analytics$disable(): void


declare function WL$Analytics$enable(): void


declare function WL$Analytics$log(message: string, name: string): void



/**
 * @deprecated since version 6.2. WL.Analytics.restart is now a NOP.
 */
declare function WL$Analytics$restart(): void


declare function WL$Analytics$send(): void


declare function WL$Analytics$state(): void



      declare var npm$namespace$WL$App: {
        addActionReceiver: typeof WL$App$addActionReceiver,
close: typeof WL$App$close,
copyToClipboard: typeof WL$App$copyToClipboard,
getDeviceLanguage: typeof WL$App$getDeviceLanguage,
getDeviceLocale: typeof WL$App$getDeviceLocale,
getErrorMessage: typeof WL$App$getErrorMessage,
hideSplashScreen: typeof WL$App$hideSplashScreen,
openURL: typeof WL$App$openURL,
overrideBackButton: typeof WL$App$overrideBackButton,
removeActionReceiver: typeof WL$App$removeActionReceiver,
resetBackButton: typeof WL$App$resetBackButton,
sendActionToNative: typeof WL$App$sendActionToNative,
setKeepAliveInBackground: typeof WL$App$setKeepAliveInBackground,
showSplashScreen: typeof WL$App$showSplashScreen,
        
        
        
        BackgroundHandler: typeof npm$namespace$WL$App$BackgroundHandler,
      }
declare interface WL$App$ActionReceiverCallback {
(action: any): void
} 

declare interface WL$App$Callback {
(): void
} 

declare interface WL$App$OpenURLOptions {
status?: number,
toolbar?: number,
location?: number,
menubar?: number,
directories?: number,
resizable?: number,
scrollbars?: number
} 

declare interface WL$App$Data {} 

declare interface WL$App$KeepAliveInBackgroundOptions {
tickerText?: string,
contentTitle?: string,
contentTextText?: string,
icon?: string,
notificationId?: number,
className?: string
} 

declare function WL$App$addActionReceiver(id: string, callback: WL$App$ActionReceiverCallback): void



/**
 * @deprecate Deprecated.
 */
declare function WL$App$close(): void


declare function WL$App$copyToClipboard(stringToCopy: string, callback?: WL$App$Callback): void


declare function WL$App$getDeviceLanguage(): string


declare function WL$App$getDeviceLocale(): string



/**
 * TODO: declare exception type. (Exceptions that are thrown by the IBM® Worklight® client runtime framework)
 */
declare function WL$App$getErrorMessage(exception: any): string


declare function WL$App$hideSplashScreen(): void


declare function WL$App$openURL(url: string, target?: string, options?: WL$App$OpenURLOptions): void


declare function WL$App$overrideBackButton(callback: WL$App$Callback): void


declare function WL$App$removeActionReceiver(id: string): void



/**
 * @deprecated since version 6.0.0
 */
declare function WL$App$resetBackButton(): void


declare function WL$App$sendActionToNative(action: string, data?: WL$App$Data): void


declare function WL$App$setKeepAliveInBackground(enabled: boolean, options?: WL$App$KeepAliveInBackgroundOptions): void


declare function WL$App$showSplashScreen(): void



      declare var npm$namespace$WL$App$BackgroundHandler: {
        setOnAppEnteringBackground: typeof WL$App$BackgroundHandler$setOnAppEnteringBackground,
        hideView: typeof WL$App$BackgroundHandler$hideView,
defaultIOSBehavior: typeof WL$App$BackgroundHandler$defaultIOSBehavior,
hideElements: typeof WL$App$BackgroundHandler$hideElements,
        
        
        
      }
declare interface WL$App$BackgroundHandler$Handler {
(): void
} 

declare function WL$App$BackgroundHandler$setOnAppEnteringBackground(handler: WL$App$BackgroundHandler$Handler): void


declare var WL$App$BackgroundHandler$hideView: WL$App$BackgroundHandler$Handler;

declare var WL$App$BackgroundHandler$defaultIOSBehavior: WL$App$BackgroundHandler$Handler;


/**
 * @deprecated since version 6.0.0
 */
declare var WL$App$BackgroundHandler$hideElements: WL$App$BackgroundHandler$Handler;


      declare var npm$namespace$WL$Badge: {
        setNumber: typeof WL$Badge$setNumber,
        
        
        
        
      }
declare function WL$Badge$setNumber(badgeNumber: number): void


declare interface WL$BusyIndicatorOptions {
tickerText?: string,
contentTitle?: string,
contentTextText?: string,
icon?: string,
notificationId?: number,
className?: string
} 

declare class WL$BusyIndicator  {
constructor(containerId?: string, options?: WL$BusyIndicator): this;
hide(): void;
show(): void
}


      declare var npm$namespace$WL$Client: {
        addGlobalHeader: typeof WL$Client$addGlobalHeader,
checkForDirectUpdate: typeof WL$Client$checkForDirectUpdate,
clearSharedToken: typeof WL$Client$clearSharedToken,
close: typeof WL$Client$close,
connect: typeof WL$Client$connect,
createChallengeHandler: typeof WL$Client$createChallengeHandler,
createProvisioningChallengeHandler: typeof WL$Client$createProvisioningChallengeHandler,
createWLChallengeHandler: typeof WL$Client$createWLChallengeHandler,
deleteUserPref: typeof WL$Client$deleteUserPref,
getAppProperty: typeof WL$Client$getAppProperty,
getEnvironment: typeof WL$Client$getEnvironment,
getLanguage: typeof WL$Client$getLanguage,
getLastAccessToken: typeof WL$Client$getLastAccessToken,
getLoginName: typeof WL$Client$getLoginName,
getRequiredAccessTokenScope: typeof WL$Client$getRequiredAccessTokenScope,
getSharedToken: typeof WL$Client$getSharedToken,
getUserInfo: typeof WL$Client$getUserInfo,
getUserName: typeof WL$Client$getUserName,
getUserPref: typeof WL$Client$getUserPref,
hasUserPref: typeof WL$Client$hasUserPref,
init: typeof WL$Client$init,
invokeProcedure: typeof WL$Client$invokeProcedure,
isConnected: typeof WL$Client$isConnected,
isUserAuthenticated: typeof WL$Client$isUserAuthenticated,
logActivity: typeof WL$Client$logActivity,
login: typeof WL$Client$login,
logout: typeof WL$Client$logout,
minimize: typeof WL$Client$minimize,
obtainAccessToken: typeof WL$Client$obtainAccessToken,
purgeEventTransmissionBuffer: typeof WL$Client$purgeEventTransmissionBuffer,
reloadApp: typeof WL$Client$reloadApp,
removeGlobalHeader: typeof WL$Client$removeGlobalHeader,
setEventTransmissionPolicy: typeof WL$Client$setEventTransmissionPolicy,
setHeartBeatInterval: typeof WL$Client$setHeartBeatInterval,
setSharedToken: typeof WL$Client$setSharedToken,
setUserPref: typeof WL$Client$setUserPref,
setUserPrefs: typeof WL$Client$setUserPrefs,
transmitEvent: typeof WL$Client$transmitEvent,
updateUserInfo: typeof WL$Client$updateUserInfo,
        
        
        AbstractChallengeHandler: typeof WL$Client$AbstractChallengeHandler,
        
      }
declare interface WL$Client$SharedTokenObject {
key: string
} 

declare interface WL$Client$ConnectOptions {
onSuccess: (response: WL$ResponseBase) => void,
onFailure: (response: WL$FailureResponse) => void,
timeout?: number
} 

declare interface WL$Client$ChallengehandlerInvocationData {
adapter: string,
procedure: string,
parameters: any[]
} 

declare interface WL$Client$ChallengeHandlerAuthenticationOptions {} 

declare interface WL$Client$ChallengeHandlerSubmitLoginFormOptions {
timeout?: number,
headers?: Object,
parameters?: Object
} 

declare class WL$Client$AbstractChallengeHandler  {
handleChallenge(challenge: any): boolean;
isCustomResponse(transport: any): boolean;
submitAdapterAuthentication(
invocationData: WL$Client$ChallengehandlerInvocationData,
options: WL$Client$ChallengeHandlerAuthenticationOptions): void;
submitFailure(error: string): void;
submitLoginForm(
reqURL: string,
options: WL$Client$ChallengeHandlerSubmitLoginFormOptions,
submitLoginFormCallback: (transport: any) => void): void;
submitSuccess(): void
}

declare type WL$Client$InitOptions = {
timeout?: number,

/**
 * @deprecated since version 6.2. Use WL.Logger.config function with an object specifying the level instead.
 */
enableLogger?: boolean,
messages?: string,
authenticator?: Object,
heartBeatIntervalInSecs?: number,

/**
 * @deprecated . If you would like your application to connect to the Worklight Server, use WL.Client.connect().
 */
connectOnStartup?: boolean,
onConnectionFailure?: (response: WL$FailureResponse) => void,
onUnsupportedVersion?: (response: WL$FailureResponse) => void,
onRequestTimeout?: (response: WL$FailureResponse) => void,
onUnsupportedBrowser?: (response: WL$FailureResponse) => void,
onDisabledCookies?: (response: WL$FailureResponse) => void,
onUserInstanceAccessViolation?: (response: WL$FailureResponse) => void,
onErrorRemoteDisableDenial?: (response: WL$FailureResponse) => void,

/**
 * @deprecated since version 5.0.6. Instead, use onErrorRemoteDisableDenial.
 */
onErrorAppVersionAccessDenial?: (response: WL$FailureResponse) => void,
validateArguments?: boolean,
autoHideSplash?: boolean,
onGetCustomDeviceProvisioningProperties: (resumeDeviceProvisioningProcess: (data: any) => void) => void
} & WL$Options


declare interface WL$Client$ProcedureInvocationData {
adapter: string,
procedure: string,
parameters?: any[],
compressResponse?: boolean
} 

declare interface WL$Client$ProcedureInvocationResult {
isSuccessful: boolean,
errors?: string[]
} 

declare type WL$Client$ProcedureResponse = {
invocationResult?: WL$Client$ProcedureInvocationResult,
parameters?: any[]
} & WL$ResponseBase


declare type WL$Client$ProcedureInvocationOptions = {
timeout: number,
onSuccess: (response: WL$Client$ProcedureResponse) => void
} & WL$Options


declare function WL$Client$addGlobalHeader(headerName: string, headerValue: string): void


declare function WL$Client$checkForDirectUpdate(options: WL$Options): void


declare function WL$Client$clearSharedToken(object: WL$Client$SharedTokenObject): JQueryDeferred<any>


declare function WL$Client$close(): void


declare function WL$Client$connect(options?: WL$Client$ConnectOptions): void


declare function WL$Client$createChallengeHandler(realmName: string): WL$Client$AbstractChallengeHandler


declare function WL$Client$createProvisioningChallengeHandler(realmName: string): WL$Client$AbstractChallengeHandler


declare function WL$Client$createWLChallengeHandler(realName: string): WL$Client$AbstractChallengeHandler


declare function WL$Client$deleteUserPref(key: string, options?: WL$Options): void



/**
 * See WL.AppProperty for possible results
 */
declare function WL$Client$getAppProperty(property: any): any



/**
 * See WL.Environment for possible results
 */
declare function WL$Client$getEnvironment(): string


declare function WL$Client$getLanguage(): string


declare function WL$Client$getLastAccessToken(scope?: string): string


declare function WL$Client$getLoginName(realmName: string): string



/**
 * @deprecated since version 7.0
 */
declare function WL$Client$getRequiredAccessTokenScope(status: number, header: string): string


declare function WL$Client$getSharedToken(object: WL$Client$SharedTokenObject): JQueryDeferred<any>


declare function WL$Client$getUserInfo(realm: string, key: string): any


declare function WL$Client$getUserName(realm: any): string


declare function WL$Client$getUserPref(key: any): any


declare function WL$Client$hasUserPref(key: any): boolean


declare function WL$Client$init(options: WL$Client$InitOptions): void


declare function WL$Client$invokeProcedure(
invocationData: WL$Client$ProcedureInvocationData,
options?: WL$Client$ProcedureInvocationOptions): JQueryDeferred<WL$Response>



/**
 * @deprecated since version 4.1.3. Use WL.Device.getNetworkInfo instead.
 */
declare function WL$Client$isConnected(): void


declare function WL$Client$isUserAuthenticated(realm: string): boolean



/**
 * @deprecated since version 7.0. Use WL.Logger instead.
 */
declare function WL$Client$logActivity(activityType: string): void


declare function WL$Client$login(realm: string, options?: WL$Options): void


declare function WL$Client$logout(realm: string, options?: WL$Options): void


declare function WL$Client$minimize(): void



/**
 * @deprecated since version 7.0
 */
declare function WL$Client$obtainAccessToken(
scope: string,
onSuccess: WL$ResponseHandler<WL$Response>,
onFailure: WL$ResponseHandler<WL$FailureResponse>): void


declare function WL$Client$purgeEventTransmissionBuffer(): void


declare function WL$Client$reloadApp(): void


declare function WL$Client$removeGlobalHeader(headerName: string): void


declare interface WL$Client$EventTransmissionPolicy {
eventStorageEnabled?: boolean,
interval?: number
} 

declare function WL$Client$setEventTransmissionPolicy(policy: WL$Client$EventTransmissionPolicy): void


declare function WL$Client$setHeartBeatInterval(interval: number): void


declare function WL$Client$setSharedToken(token: WL$Client$SharedTokenObject): void


declare function WL$Client$setUserPref(key: string, value: string, options?: WL$Options): void


declare interface WL$Client$UserPreferences {
[key: string]: string
} 

declare function WL$Client$setUserPrefs(userPrefsHash: WL$Client$UserPreferences, options?: WL$Options): void


declare function WL$Client$transmitEvent(event: any, immediate?: boolean): void


declare function WL$Client$updateUserInfo(options: WL$Options): void



      declare var npm$namespace$WL$Device: {
        getNetworkInfo: typeof WL$Device$getNetworkInfo,
        
        
        
        
      }
declare interface WL$Device$AddressPair {
wifiAddress: string,
"3GAddress": string
} 

declare interface WL$Device$NetworkInfo {
isNetworkConnected?: boolean,
isAirplaneMode?: boolean,
isRoaming?: boolean,
networkConnectionType?: string,
wifiName?: string,
telephonyNetworkType?: string,
carrierName?: string,
ipAddress?: string,
Ipv4Addresses?: WL$Device$AddressPair[],
Ipv6Addresses?: WL$Device$AddressPair[]
} 

declare function WL$Device$getNetworkInfo(callback: (networkInfo: WL$Device$NetworkInfo) => void): void



      declare var npm$namespace$WL$EncryptedCache: {
        close: typeof WL$EncryptedCache$close,
destroy: typeof WL$EncryptedCache$destroy,
open: typeof WL$EncryptedCache$open,
read: typeof WL$EncryptedCache$read,
remove: typeof WL$EncryptedCache$remove,
write: typeof WL$EncryptedCache$write,
        OK: typeof WL$EncryptedCache$OK,
ERROR_COULD_NOT_GENERATE_KEY: typeof WL$EncryptedCache$ERROR_COULD_NOT_GENERATE_KEY,
ERROR_CREDENTIALS_MISMATCH: typeof WL$EncryptedCache$ERROR_CREDENTIALS_MISMATCH,
ERROR_EOC_CLOSED: typeof WL$EncryptedCache$ERROR_EOC_CLOSED,
ERROR_EOC_DELETED: typeof WL$EncryptedCache$ERROR_EOC_DELETED,
ERROR_EOC_TO_BE_DELETED: typeof WL$EncryptedCache$ERROR_EOC_TO_BE_DELETED,
ERROR_INVALID_PARAMETER: typeof WL$EncryptedCache$ERROR_INVALID_PARAMETER,
ERROR_KEY_CREATION_IN_PROGRESS: typeof WL$EncryptedCache$ERROR_KEY_CREATION_IN_PROGRESS,
ERROR_LOCAL_STORAGE_NOT_SUPPORTED: typeof WL$EncryptedCache$ERROR_LOCAL_STORAGE_NOT_SUPPORTED,
ERROR_MIGRATION: typeof WL$EncryptedCache$ERROR_MIGRATION,
ERROR_NO_EOC: typeof WL$EncryptedCache$ERROR_NO_EOC,
ERROR_NO_SUCH_KEY: typeof WL$EncryptedCache$ERROR_NO_SUCH_KEY,
ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE: typeof WL$EncryptedCache$ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE,
ERROR_UNKNOWN: typeof WL$EncryptedCache$ERROR_UNKNOWN,
ERROR_UNSAFE_CREDENTIALS: typeof WL$EncryptedCache$ERROR_UNSAFE_CREDENTIALS,
        
        
        
      }
declare var WL$EncryptedCache$OK: number;

declare var WL$EncryptedCache$ERROR_COULD_NOT_GENERATE_KEY: number;

declare var WL$EncryptedCache$ERROR_CREDENTIALS_MISMATCH: number;

declare var WL$EncryptedCache$ERROR_EOC_CLOSED: number;

declare var WL$EncryptedCache$ERROR_EOC_DELETED: number;

declare var WL$EncryptedCache$ERROR_EOC_TO_BE_DELETED: number;

declare var WL$EncryptedCache$ERROR_INVALID_PARAMETER: number;

declare var WL$EncryptedCache$ERROR_KEY_CREATION_IN_PROGRESS: number;

declare var WL$EncryptedCache$ERROR_LOCAL_STORAGE_NOT_SUPPORTED: number;

declare var WL$EncryptedCache$ERROR_MIGRATION: number;

declare var WL$EncryptedCache$ERROR_NO_EOC: number;

declare var WL$EncryptedCache$ERROR_NO_SUCH_KEY: number;

declare var WL$EncryptedCache$ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE: number;

declare var WL$EncryptedCache$ERROR_UNKNOWN: number;

declare var WL$EncryptedCache$ERROR_UNSAFE_CREDENTIALS: number;


/**
 * See above statuses for possible values
 */
declare interface WL$EncryptedCache$StatusHandler {
(status: number): void
} 

declare function WL$EncryptedCache$close(
successHandler: WL$EncryptedCache$StatusHandler,
failureHandler: WL$EncryptedCache$StatusHandler): void


declare function WL$EncryptedCache$destroy(
successHandler: WL$EncryptedCache$StatusHandler,
failureHandler: WL$EncryptedCache$StatusHandler): void


declare function WL$EncryptedCache$open(
credentials: string,
createIfNone: boolean,
successHandler: WL$EncryptedCache$StatusHandler,
failureHandler: WL$EncryptedCache$StatusHandler): void


declare function WL$EncryptedCache$read(
key: string,
successHandler: WL$EncryptedCache$StatusHandler,
failureHandler: WL$EncryptedCache$StatusHandler): void


declare function WL$EncryptedCache$remove(
key: string,
successHandler: WL$EncryptedCache$StatusHandler,
failureHandler: WL$EncryptedCache$StatusHandler): void


declare function WL$EncryptedCache$write(
key: string,
value: string,
successHandler: WL$EncryptedCache$StatusHandler,
failureHandler: WL$EncryptedCache$StatusHandler): void



      declare var npm$namespace$WL$Geo: {
        getDistanceBetweenCoordinates: typeof WL$Geo$getDistanceBetweenCoordinates,
getDistanceToCircle: typeof WL$Geo$getDistanceToCircle,
getDistanceToPolygon: typeof WL$Geo$getDistanceToPolygon,
isInsideCircle: typeof WL$Geo$isInsideCircle,
isInsidePolygon: typeof WL$Geo$isInsidePolygon,
isOutsideCircle: typeof WL$Geo$isOutsideCircle,
isOutsidePolygon: typeof WL$Geo$isOutsidePolygon,
        
        
        
        
      }
declare interface WL$Geo$Coordinate {
latitute: number,
longitude: number
} 

declare type WL$Geo$Circle = {
radius: number
} & WL$Geo$Coordinate


declare interface WL$Geo$DistanceOptions {
bufferZoneWidth: number
} 

declare interface WL$Geo$InsideOutsideOptions {

/**
 * confidenceLevel can be 'low', 'medium', 'high'
 */
confidenceLevel: string
} 

declare function WL$Geo$getDistanceBetweenCoordinates(coordinate1: WL$Geo$Coordinate, coordinate2: WL$Geo$Coordinate): number


declare function WL$Geo$getDistanceToCircle(
coordinate: WL$Geo$Coordinate,
circle: WL$Geo$Circle,
options: WL$Geo$DistanceOptions): number


declare function WL$Geo$getDistanceToPolygon(
coordinate: WL$Geo$Coordinate,
polygon: WL$Geo$Coordinate[],
options: WL$Geo$DistanceOptions): number


declare function WL$Geo$isInsideCircle(
coordinate: WL$Geo$Coordinate,
circle: WL$Geo$Circle,
options: WL$Geo$InsideOutsideOptions): boolean


declare function WL$Geo$isInsidePolygon(
coordinate: WL$Geo$Coordinate,
polygon: WL$Geo$Coordinate[],
options: WL$Geo$InsideOutsideOptions): boolean


declare function WL$Geo$isOutsideCircle(
coordinate: WL$Geo$Coordinate,
circle: WL$Geo$Circle,
options: WL$Geo$InsideOutsideOptions): boolean


declare function WL$Geo$isOutsidePolygon(
coordinate: WL$Geo$Coordinate,
polygon: WL$Geo$Coordinate[],
options: WL$Geo$InsideOutsideOptions): boolean


declare class WL$Item  {
setEnabled(isEnable: string): void;
setImagePath(imagePath: string): void;
setTitle(title: string): void
}


      declare var npm$namespace$WL$JSONStore: {
        changePassword: typeof WL$JSONStore$changePassword,
clearPassword: typeof WL$JSONStore$clearPassword,
closeAll: typeof WL$JSONStore$closeAll,
commitTransaction: typeof WL$JSONStore$commitTransaction,
destroy: typeof WL$JSONStore$destroy,
documentify: typeof WL$JSONStore$documentify,
fileInfo: typeof WL$JSONStore$fileInfo,
get: typeof WL$JSONStore$get,
getErrorMessage: typeof WL$JSONStore$getErrorMessage,
init: typeof WL$JSONStore$init,
initCollection: typeof WL$JSONStore$initCollection,
QueryPart: typeof WL$JSONStore$QueryPart,
rollbackTransaction: typeof WL$JSONStore$rollbackTransaction,
startTransaction: typeof WL$JSONStore$startTransaction,
usePassword: typeof WL$JSONStore$usePassword,
        
        
        JSONStoreInstance: typeof WL$JSONStore$JSONStoreInstance,
QueryPartObj: typeof WL$JSONStore$QueryPartObj,
        
      }

/**
 * Changes the password for the internal storage. You must have an initialized collection before calling WL.JSONStore.changePassword.
 */
declare function WL$JSONStore$changePassword(
oldPassword: string,
newPassword: string,
username: string,
options: WL$Options): JQueryDeferred<any>



/**
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
 */
declare function WL$JSONStore$clearPassword(): boolean



/**
 * Locks access to all the collections until WL.JSONStore.init is called.
 */
declare function WL$JSONStore$closeAll(options?: WL$Options): JQueryDeferred<any>



/**
 * Commit a transaction.
 */
declare function WL$JSONStore$commitTransaction(): JQueryDeferred<number>



/**
 * Completely wipes data for all users, destroys the internal storage, and clears security artifacts.
 * @parameters options is
 * @deprecated
 */
declare function WL$JSONStore$destroy(username: string, options?: WL$Options): JQueryDeferred<number>



/**
 * @deprecated since version 6.2.0.
 */
declare function WL$JSONStore$documentify(id: number, data: any): any



/**
 * Returns information about the file that is used to persist data in the store. The following key value pairs are returned:
 * name - name of the store
 * size - the total size, in bytes, of the store
 * isEncrypted - boolean that is true when encrypted and false otherwise.
 */
declare function WL$JSONStore$fileInfo(): JQueryDeferred<any>



/**
 * Provides an accessor to the collection if the collection exists, otherwise it returns undefined.
 */
declare function WL$JSONStore$get(collectionName: string): WL$JSONStore$JSONStoreInstance



/**
 * Returns the message that is associated with a JSONStore error code.
 */
declare function WL$JSONStore$getErrorMessage(errorCode: number): string


declare interface WL$JSONStore$InitOptions {
username?: string,
password?: string,
clear?: boolean,
localKeyGen?: boolean,
analytics?: boolean
} 

declare function WL$JSONStore$init(collections: any, options?: WL$JSONStore$InitOptions): JQueryDeferred<any>



/**
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
 */
declare function WL$JSONStore$initCollection(
name: string,
searchFields: any,
options?: WL$JSONStore$InitOptions): WL$JSONStore$JSONStoreInstance



/**
 * Creates a query for advanced find. See WL.JSONStore.QueryPart for more information.
 */
declare function WL$JSONStore$QueryPart(): WL$JSONStore$QueryPartObj



/**
 * Roll back a transaction
 */
declare function WL$JSONStore$rollbackTransaction(): JQueryDeferred<number>



/**
 * Initiates a transaction
 */
declare function WL$JSONStore$startTransaction(): JQueryDeferred<number>



/**
 * Sets the password that is used to generate keys to encrypt data that is stored locally on the device.
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
 */
declare function WL$JSONStore$usePassword(pwd: string): boolean


declare type WL$JSONStore$AddOptions = {
additionalSearchFields?: any,
markDirty?: boolean,

/**
 * @deprecated
 */
push?: boolean
} & WL$Options


declare type WL$JSONStore$BasicFindOptions = {
filter?: string[],
sort?: string[]
} & WL$Options


declare type WL$JSONStore$AdvancedFindOptions = {
limit?: number,
offset?: number
} & WL$JSONStore$BasicFindOptions


declare type WL$JSONStore$FindOptions = {
exact?: boolean,
limit?: number,
offset?: number
} & WL$JSONStore$BasicFindOptions


declare type WL$JSONStore$EraseOptions = {
push?: boolean
} & WL$Options


declare type WL$JSONStore$RefreshOptions = {
push: boolean
} & WL$Options


declare type WL$JSONStore$ChangeOptions = {
addNew?: boolean,
markDirty?: boolean,
replaceCriteria?: string[]
} & WL$Options


declare type WL$JSONStore$RemoveOptions = {
markDirty?: boolean,

/**
 * @deprecated
 */
push?: boolean,
exact?: boolean
} & WL$Options


declare type WL$JSONStore$ReplaceOptions = {
markDirty?: boolean,

/**
 * @deprecated
 */
push?: boolean
} & WL$Options


declare type WL$JSONStore$StoreOptions = {
additionalSearchFields?: Object,
push?: boolean
} & WL$Options


declare class WL$JSONStore$JSONStoreInstance  {
add(data: any, options?: WL$JSONStore$AddOptions): JQueryDeferred<any>;
advancedFind(query: any[], options?: WL$JSONStore$AdvancedFindOptions): JQueryDeferred<any>;
change(data: any, options?: WL$JSONStore$ChangeOptions): JQueryDeferred<any>;
clear(options?: WL$Options): JQueryDeferred<any>;
count(query?: any, options?: WL$Options): JQueryDeferred<any>;
countAllDirty(options?: WL$Options): JQueryDeferred<any>;
enhance(name: string, fn: Function): number;

/**
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.remove with {push: false}.
 */
erase(doc: any, options?: WL$JSONStore$EraseOptions): void;
find(
query: Object | Object[],
options?: WL$JSONStore$FindOptions): JQueryDeferred<any>;
findAll(options?: WL$JSONStore$BasicFindOptions): JQueryDeferred<any>;
findById(options?: WL$Options): JQueryDeferred<any>;
isDirty(doc: any, options?: WL$Options): JQueryDeferred<boolean>;

/**
 * @deprecated since version 6.2.0.
 */
load(options?: WL$Options): JQueryDeferred<any>;
markClean(docs: any[], options?: WL$Options): JQueryDeferred<any>;

/**
 * @deprecated since version 6.2.0.
 */
push(options?: any): JQueryDeferred<any>;

/**
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.push.
 */
pushSelected(doc: any, options?: WL$Options): JQueryDeferred<any>;

/**
 * @deprecated since version 5.0.6. It is no longer needed if you use WL.JSONStore.JSONStoreInstance.replace with {push: false}.
 */
refresh(doc: any, options?: WL$JSONStore$RefreshOptions): JQueryDeferred<any>;
remove(doc: any, options?: WL$JSONStore$RemoveOptions): JQueryDeferred<any>;

/**
 * Deletes all the documents that are stored inside a collection.
 */
removeCollection(options?: WL$Options): JQueryDeferred<any>;
replace(
doc: Object | Object[],
options?: WL$JSONStore$ReplaceOptions): JQueryDeferred<any>;

/**
 * Writes data to a collection.
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.add with {push: false}.
 */
store(data: Object | Object[], options?: WL$JSONStore$StoreOptions): void;
toString(limit?: number, offset?: number): JQueryDeferred<number>
}

declare class WL$JSONStore$QueryPartObj  {

/**
 * Add a between clause to a query for advanced find.
 */
between(searchField: any, value: any): any[];

/**
 * Add an equal to clause to a query for advanced find.
 */
equal(searchField: any, value: any): any[];

/**
 * Add a greater or equal thanclause to a query for advanced find.
 */
greaterOrEqualThan(searchField: any, value: any): any[];

/**
 * Add a greater than clause to a query for advanced find.
 */
greaterThan(searchField: any, value: any): any[];

/**
 * Add an in clause to a query for advanced find.
 */
inside(searchField: any, value: any): any[];

/**
 * Add a left clause to a query for advanced find.
 */
leftLike(searchField: any, value: any): any[];

/**
 * Add a less or equal than clause to a query for advanced find.
 */
lessOrEqualThan(searchField: any, value: any): any[];

/**
 * Add a less than clause to a query for advanced find.
 */
lessThan(searchField: any, value: any): any[];

/**
 * Add a like clause to a query for advanced find.
 */
like(searchField: any, value: any): any[];

/**
 * Add a not between clause to a query for advanced find.
 */
notBetween(searchField: any, value: any): any[];

/**
 * Add a not equal to clause to a query for advanced find.
 */
notEqual(searchField: any, value: any): any[];

/**
 * Add a not in clause to a query for advanced find.
 */
notInside(searchField: any, value: any): any[];

/**
 * Add a not left clause to a query for advanced find.
 */
notLeftLike(searchField: any, value: any): any[];

/**
 * Add a not like clause to a query for advanced find.
 */
notLike(searchField: any, value: any): any[];

/**
 * Add a not right clause to a query for advanced find.
 */
notRightLike(searchField: any, value: any): any[];

/**
 * Add a right clause to a query for advanced find.
 */
rightLike(searchField: any, value: any): any[]
}


      declare var npm$namespace$WL$LocalStorage: {
        getValue: typeof WL$LocalStorage$getValue,
setValue: typeof WL$LocalStorage$setValue,
clear: typeof WL$LocalStorage$clear,
clearAll: typeof WL$LocalStorage$clearAll,
        
        
        
        
      }
declare function WL$LocalStorage$getValue(key: string): string


declare function WL$LocalStorage$setValue(key: string, value: string): void


declare function WL$LocalStorage$clear(key: string): void


declare function WL$LocalStorage$clearAll(): void


declare var WL$Logger: WL$LoggerObject;

declare interface WL$LoggerCallback {
(message: string | string[], level: string, package: string): void
} 

declare interface WL$Tag {
level?: boolean,
tag?: boolean
} 

declare interface WL$Filter {
[name: string]: string
} 

declare interface WL$LoggerOptions {
stringify?: boolean,
pretty?: boolean,
stacktrace?: boolean,
callback?: WL$LoggerCallback,
pkg?: string,
tag?: WL$Tag,

/**
 * @deprecated since version 6.2. use filters instead.
 */
whitelist?: string[],

/**
 * @deprecated since version 6.2. use filters instead.
 */
blacklist?: string[],
filters?: WL$Filter,
capture?: boolean,
autoSendLogs?: boolean,
maxFileSize?: number,
level?: string[] | string | number
} 

declare interface WL$NativeOptions {
maxFileSize?: number,
level?: string,
capture?: boolean,
autoSendLogs?: boolean,
autoUpdateConfig?: boolean,
filters?: WL$Filter
} 


/**
 * Artifact to allow chaining of Logger class as: WL.Logger.ctx({pkg: 'something'}).debug('Hello world');
 */
declare class WL$LoggerObject  {

/**
 * Configures the logger globally.
 */
config(options?: WL$LoggerOptions): WL$LoggerObject;

/**
 * Creates an instance of a logger with its own context (also called status or state).
 */
create(options?: WL$LoggerOptions): WL$LogInstance;

/**
 * Updates the state (also called context or status) of the logger.
 */
ctx(options?: WL$LoggerOptions): WL$LoggerObject;

/**
 * Prints arguments to the console.
 */
debug(message: string): void;

/**
 * Prints arguments to the console.
 */
error(message: string): void;

/**
 * Prints arguments to the console.
 */
fatal(message: string): void;

/**
 * Prints arguments to the console.
 */
info(message: string): void;

/**
 * Prints arguments to the console.
 */
log(message: string): void;

/**
 * Attach additional metadata to the next logger instance call.
 */
metadata(options: any): WL$LoggerObject;

/**
 * @deprecated since version 6.2. WL.Logger.on is now a no-op. WL.Logger is always enabled. Use WL.Logger.config with {'level': 'FATAL'} to reduce verbosity.
 */
off(): WL$LoggerObject;

/**
 * @deprecated since version 6.2. WL.Logger.on is now a no-op. WL.Logger is always enabled. Use WL.Logger.config with {'level': 'FATAL'} to reduce verbosity.
 */
on(options: any): WL$LoggerObject;

/**
 * Send any logs collected up to this point to the IBM® Worklight® server.
 */
send(): JQueryDeferred<any>;

/**
 * @deprecated since version 6.2. Use WL.Logger.config instead. Sets options in native application layer (iOS and Android only)
 */
setNativeOptions(options?: WL$NativeOptions): void;

/**
 * Shows the status (current configuration) of the logger.
 */
status(): JQueryDeferred<any>;

/**
 * Prints arguments to the console.
 */
trace(message: string): void;

/**
 * Retrieves and applies any matching configuration profile from the IBM® Worklight® Server.
 */
updateConfigFromServer(): JQueryDeferred<any>;

/**
 * Prints arguments to the console.
 */
warn(message: string): void
}


/**
 * Class which defines instances created via:  WL.Logger.create({pkg: 'something'});
 * Actual definition is outside of WL namespace. For easier d.ts file compiling it is here
 */
declare class WL$LogInstance  {
debug(message: string): void;
error(message: string): void;
fatal(message: string): void;
info(message: string): void;
trace(message: string): void;
warn(message: string): void
}


      declare var npm$namespace$WL$NativePage: {
        show: typeof WL$NativePage$show,
        
        
        
        
      }
declare function WL$NativePage$show(className: string, callback: (data: any) => void, data: any): void



      declare var npm$namespace$WL$SecurityUtils: {
        base64Decode: typeof WL$SecurityUtils$base64Decode,
base64Encode: typeof WL$SecurityUtils$base64Encode,
decrypt: typeof WL$SecurityUtils$decrypt,
encrypt: typeof WL$SecurityUtils$encrypt,
keygen: typeof WL$SecurityUtils$keygen,
localRandomString: typeof WL$SecurityUtils$localRandomString,
remoteRandomString: typeof WL$SecurityUtils$remoteRandomString,
        
        
        
        
      }
declare interface WL$SecurityUtils$DecryptOptions {
key: string,
ct: string,
lv: string,
src: string,
v: string
} 

declare interface WL$SecurityUtils$EncryptOptions {
key: string,
text: string
} 

declare interface WL$SecurityUtils$KeygenOptions {
password: string,
salt: string,
iterations: number
} 

declare function WL$SecurityUtils$base64Decode(input: string): JQueryDeferred<string>


declare function WL$SecurityUtils$base64Encode(input: string): JQueryDeferred<string>


declare function WL$SecurityUtils$decrypt(options: WL$SecurityUtils$DecryptOptions): JQueryDeferred<string>


declare function WL$SecurityUtils$encrypt(options: WL$SecurityUtils$EncryptOptions): JQueryDeferred<string>


declare function WL$SecurityUtils$keygen(options: WL$SecurityUtils$KeygenOptions): JQueryDeferred<string>


declare function WL$SecurityUtils$localRandomString(bytes?: number): JQueryDeferred<string>


declare function WL$SecurityUtils$remoteRandomString(bytes?: number): JQueryDeferred<string>



      declare var npm$namespace$WL$SimpleDialog: {
        show: typeof WL$SimpleDialog$show,
        
        
        
        
      }
declare interface WL$SimpleDialog$Button {
text: string,
handler?: Function
} 

declare interface WL$SimpleDialog$Options {
title: string,
text: string
} 

declare function WL$SimpleDialog$show(
title: string,
text: string,
buttons: WL$SimpleDialog$Button[],
options?: WL$SimpleDialog$Options): void



      declare var npm$namespace$WL$TabBar: {
        addItem: typeof WL$TabBar$addItem,
init: typeof WL$TabBar$init,
isVisible: typeof WL$TabBar$isVisible,
RemoveAllItems: typeof WL$TabBar$RemoveAllItems,
setEnabled: typeof WL$TabBar$setEnabled,
setParentDivId: typeof WL$TabBar$setParentDivId,
setSelectedItem: typeof WL$TabBar$setSelectedItem,
setVisible: typeof WL$TabBar$setVisible,
        
        
        
        
      }
declare interface WL$TabBar$ItemOptions {
image: string,
badge?: string,
imageSelected?: string
} 

declare function WL$TabBar$addItem(
id: string,
callback: Function,
title: string,
options: WL$TabBar$ItemOptions): WL$TabBarItem


declare function WL$TabBar$init(): void


declare function WL$TabBar$isVisible(): boolean


declare function WL$TabBar$RemoveAllItems(): void


declare function WL$TabBar$setEnabled(isEnabled: boolean): void



/**
 * @deprecated
 */
declare function WL$TabBar$setParentDivId(parentId: string): void


declare function WL$TabBar$setSelectedItem(id: string): void


declare function WL$TabBar$setVisible(isVisible: boolean): void


declare class WL$TabBarItem  {
setEnabled(isEnabled: boolean): void;
updateBadge(badge?: string): void
}


      declare var npm$namespace$WL$Toast: {
        show: typeof WL$Toast$show,
        
        
        
        
      }
declare function WL$Toast$show(): void



      declare var npm$namespace$WL$Trusteer: {
        getRiskAssessment: typeof WL$Trusteer$getRiskAssessment,
        
        
        
        
      }
declare interface WL$Trusteer$AssesmentRisk {
value: number,
additionalData: string,
lastCalculated: number,
name: string
} 

declare interface WL$Trusteer$AssetmentRisks {
device_key: string,
"malware.any"?: WL$Trusteer$AssesmentRisk,
"network.wifi"?: WL$Trusteer$AssesmentRisk,
"os.rooted"?: WL$Trusteer$AssesmentRisk,
"os.rooted.native"?: WL$Trusteer$AssesmentRisk,
"os.rooted.hiders"?: WL$Trusteer$AssesmentRisk,
"os.ver_up_to_date"?: WL$Trusteer$AssesmentRisk,
"plat.android.dumpsys"?: WL$Trusteer$AssesmentRisk,
"plat.android.apprestrict"?: WL$Trusteer$AssesmentRisk,
"total.risk.generic"?: WL$Trusteer$AssesmentRisk,
"tas.config_update"?: WL$Trusteer$AssesmentRisk
} 

declare function WL$Trusteer$getRiskAssessment(
onSuccess: WL$ResponseHandler<WL$Response>,
onFailure: WL$ResponseHandler<WL$FailureResponse>): WL$Trusteer$AssetmentRisks



      declare var npm$namespace$WL$UserAuth: {
        deleteCertificate: typeof WL$UserAuth$deleteCertificate,
        
        
        
        
      }
declare function WL$UserAuth$deleteCertificate(provisioningEntity?: string): JQueryDeferred<void>


declare var WL$ClientMessages: {
[name: string]: string
};
	declare var WLAuthorizationManager: typeof npm$namespace$WLAuthorizationManager;

      declare var npm$namespace$WLAuthorizationManager: {
        addCachedAuthorizationHeader: typeof WLAuthorizationManager$addCachedAuthorizationHeader,
getAppIdentity: typeof WLAuthorizationManager$getAppIdentity,
getAuthorizationScope: typeof WLAuthorizationManager$getAuthorizationScope,
getCachedAuthorizationHeader: typeof WLAuthorizationManager$getCachedAuthorizationHeader,
getDeviceIdentity: typeof WLAuthorizationManager$getDeviceIdentity,
getUserIdentity: typeof WLAuthorizationManager$getUserIdentity,
isAuthorizationRequired: typeof WLAuthorizationManager$isAuthorizationRequired,
obtainAuthorizationHeader: typeof WLAuthorizationManager$obtainAuthorizationHeader,
setAuthorizationPersistencePolicy: typeof WLAuthorizationManager$setAuthorizationPersistencePolicy,
        ALWAYS: typeof WLAuthorizationManager$ALWAYS,
NEVER: typeof WLAuthorizationManager$NEVER,
        
        
        
      }

/**
 * AuthorizationPersistencePolicy possible values
 */
declare var WLAuthorizationManager$ALWAYS: string;

declare var WLAuthorizationManager$NEVER: string;

declare interface WLAuthorizationManager$RequestObject {
setRequestHeader: (header: string, value: string) => void
} 

declare function WLAuthorizationManager$addCachedAuthorizationHeader(
request: WLAuthorizationManager$RequestObject): JQueryDeferred<WLAuthorizationManager$RequestObject>


declare function WLAuthorizationManager$getAppIdentity(): JQueryDeferred<any>


declare function WLAuthorizationManager$getAuthorizationScope(responseAuthenticationHeader: string): string



/**
 * TODO: Set Promise types. Should be something like: JQueryDeferred<data, error>()
 */
declare function WLAuthorizationManager$getCachedAuthorizationHeader(): JQueryDeferred<any>



/**
 * TODO: Set Promise types. Should be something like: JQueryDeferred<data, error>()
 */
declare function WLAuthorizationManager$getDeviceIdentity(): JQueryDeferred<any>



/**
 * TODO: Set Promise types. Should be something like: JQueryDeferred<data, error>()
 */
declare function WLAuthorizationManager$getUserIdentity(): JQueryDeferred<any>


declare function WLAuthorizationManager$isAuthorizationRequired(responseStatus: number, responseAuthenticationHeader: string): boolean



/**
 * TODO: Set Promise types. Should be something like: JQueryDeferred<header, error>()
 */
declare function WLAuthorizationManager$obtainAuthorizationHeader(scope: string): JQueryDeferred<any>



/**
 * See WLAuthorizarionManager.NEVER and WLAuthorizarionManager.ALWAYS
 */
declare function WLAuthorizationManager$setAuthorizationPersistencePolicy(authorizationPersistencePolicy: string): void

	declare class WLResourceRequest  {
constructor(url: string, method: string, timeout?: number): this;
addHeader(name: string, value: string | number | boolean): void;
getHeader(name: string): string;
getHeaderNames(): string[];
getHeaders(name: string): string[];
getMethod(): string;
getQueryParameters(): any;
getTimeout(): number;
getUrl(): string;
send(content?: any): JQueryDeferred<any>;
sendFormParameters(json: Object): JQueryDeferred<any>;
setHeader(name: string, value: string | number | boolean): void;
setHeaders(requestHeaders?: {
[name: string]: string | string[]
}): void;
setQueryParameter(name: string, value: string | number | boolean | Object): void;
setQueryParameters(parameters?: {
[name: string]: string | number | boolean | Object
}): void;
setTimeout(requestTimeout: number): void;
static GET: string;
static POST: string;
static PUT: string;
static DELETE: string;
static HEAD: string;
static OPTIONS: string;
static TRACE: string;
static CONNECT: string
}
    }
