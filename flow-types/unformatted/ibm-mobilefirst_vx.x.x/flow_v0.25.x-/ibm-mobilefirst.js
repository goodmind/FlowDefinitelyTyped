declare module 'ibm-mobilefirst' {
        
      declare var npm$namespace$WL: {
        
        Logger: typeof WL$Logger,
ClientMessages: typeof WL$ClientMessages,
      }

      declare var npm$namespace$Events: {
        
        WORKLIGHT_IS_CONNECTED: typeof Events$WORKLIGHT_IS_CONNECTED,
WORKLIGHT_IS_DISCONNECTED: typeof Events$WORKLIGHT_IS_DISCONNECTED,
      }
declare var Events$WORKLIGHT_IS_CONNECTED: string;

declare var Events$WORKLIGHT_IS_DISCONNECTED: string;


      declare var npm$namespace$AppProperty: {
        
        AIR_ICON_16x16_PATH: typeof AppProperty$AIR_ICON_16x16_PATH,
AIR_ICON_128x128_PATH: typeof AppProperty$AIR_ICON_128x128_PATH,
DOWNLOAD_APP_LINK: typeof AppProperty$DOWNLOAD_APP_LINK,
APP_DISPLAY_NAME: typeof AppProperty$APP_DISPLAY_NAME,
APP_LOGIN_TYPE: typeof AppProperty$APP_LOGIN_TYPE,
APP_VERSION: typeof AppProperty$APP_VERSION,
LATEST_VERSION: typeof AppProperty$LATEST_VERSION,
MAIN_FILE_PATH: typeof AppProperty$MAIN_FILE_PATH,
SHOW_IN_TASKBAR: typeof AppProperty$SHOW_IN_TASKBAR,
THUMBNAIL_IMAGE_URL: typeof AppProperty$THUMBNAIL_IMAGE_URL,
      }
declare var AppProperty$AIR_ICON_16x16_PATH: string;

declare var AppProperty$AIR_ICON_128x128_PATH: string;

declare var AppProperty$DOWNLOAD_APP_LINK: string;

declare var AppProperty$APP_DISPLAY_NAME: string;

declare var AppProperty$APP_LOGIN_TYPE: string;

declare var AppProperty$APP_VERSION: string;

declare var AppProperty$LATEST_VERSION: string;

declare var AppProperty$MAIN_FILE_PATH: string;

declare var AppProperty$SHOW_IN_TASKBAR: string;

declare var AppProperty$THUMBNAIL_IMAGE_URL: string;


      declare var npm$namespace$Environment: {
        
        ADOBE_AIR: typeof Environment$ADOBE_AIR,
ANDROID: typeof Environment$ANDROID,
EMBEDDED: typeof Environment$EMBEDDED,
IPAD: typeof Environment$IPAD,
IPHONE: typeof Environment$IPHONE,
MOBILE_WEB: typeof Environment$MOBILE_WEB,
PREVIEW: typeof Environment$PREVIEW,
WINDOWS_PHONE_8: typeof Environment$WINDOWS_PHONE_8,
WINDOWS8: typeof Environment$WINDOWS8,
      }
declare var Environment$ADOBE_AIR: string;

declare var Environment$ANDROID: string;

declare var Environment$EMBEDDED: string;

declare var Environment$IPAD: string;

declare var Environment$IPHONE: string;

declare var Environment$MOBILE_WEB: string;

declare var Environment$PREVIEW: string;

declare var Environment$WINDOWS_PHONE_8: string;

declare var Environment$WINDOWS8: string;

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
invocationContext?: any,
title: string,
text: string
} 

declare interface WL$ResponseHandler<T> {
(response: T): void
} 


      declare var npm$namespace$Analytics: {
        disable: typeof Analytics$disable,
enable: typeof Analytics$enable,
log: typeof Analytics$log,
restart: typeof Analytics$restart,
send: typeof Analytics$send,
state: typeof Analytics$state,
        
      }
declare function Analytics$disable(): void


declare function Analytics$enable(): void


declare function Analytics$log(message: string, name: string): void



/**
 * @deprecated since version 6.2. WL.Analytics.restart is now a NOP.
 */
declare function Analytics$restart(): void


declare function Analytics$send(): void


declare function Analytics$state(): void



      declare var npm$namespace$BackgroundHandler: {
        setOnAppEnteringBackground: typeof BackgroundHandler$setOnAppEnteringBackground,
        hideView: typeof BackgroundHandler$hideView,
defaultIOSBehavior: typeof BackgroundHandler$defaultIOSBehavior,
hideElements: typeof BackgroundHandler$hideElements,
      }
declare interface BackgroundHandler$Handler {
(): void
} 

declare function BackgroundHandler$setOnAppEnteringBackground(handler: BackgroundHandler$Handler): void


declare var BackgroundHandler$hideView: BackgroundHandler$Handler;

declare var BackgroundHandler$defaultIOSBehavior: BackgroundHandler$Handler;


/**
 * @deprecated since version 6.0.0
 */
declare var BackgroundHandler$hideElements: BackgroundHandler$Handler;


      declare var npm$namespace$Badge: {
        setNumber: typeof Badge$setNumber,
        
      }
declare function Badge$setNumber(badgeNumber: number): void


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


      declare var npm$namespace$Client: {
        addGlobalHeader: typeof Client$addGlobalHeader,
checkForDirectUpdate: typeof Client$checkForDirectUpdate,
clearSharedToken: typeof Client$clearSharedToken,
close: typeof Client$close,
connect: typeof Client$connect,
createChallengeHandler: typeof Client$createChallengeHandler,
createProvisioningChallengeHandler: typeof Client$createProvisioningChallengeHandler,
createWLChallengeHandler: typeof Client$createWLChallengeHandler,
deleteUserPref: typeof Client$deleteUserPref,
getAppProperty: typeof Client$getAppProperty,
getEnvironment: typeof Client$getEnvironment,
getLanguage: typeof Client$getLanguage,
getLastAccessToken: typeof Client$getLastAccessToken,
getLoginName: typeof Client$getLoginName,
getRequiredAccessTokenScope: typeof Client$getRequiredAccessTokenScope,
getSharedToken: typeof Client$getSharedToken,
getUserInfo: typeof Client$getUserInfo,
getUserName: typeof Client$getUserName,
getUserPref: typeof Client$getUserPref,
hasUserPref: typeof Client$hasUserPref,
init: typeof Client$init,
invokeProcedure: typeof Client$invokeProcedure,
isConnected: typeof Client$isConnected,
isUserAuthenticated: typeof Client$isUserAuthenticated,
logActivity: typeof Client$logActivity,
login: typeof Client$login,
logout: typeof Client$logout,
minimize: typeof Client$minimize,
obtainAccessToken: typeof Client$obtainAccessToken,
purgeEventTransmissionBuffer: typeof Client$purgeEventTransmissionBuffer,
reloadApp: typeof Client$reloadApp,
removeGlobalHeader: typeof Client$removeGlobalHeader,
setEventTransmissionPolicy: typeof Client$setEventTransmissionPolicy,
setHeartBeatInterval: typeof Client$setHeartBeatInterval,
setSharedToken: typeof Client$setSharedToken,
setUserPref: typeof Client$setUserPref,
setUserPrefs: typeof Client$setUserPrefs,
transmitEvent: typeof Client$transmitEvent,
updateUserInfo: typeof Client$updateUserInfo,
        
      }
declare interface Client$SharedTokenObject {
key: string
} 

declare interface Client$ConnectOptions {
onSuccess: (response: WL$ResponseBase) => void,
onFailure: (response: WL$FailureResponse) => void,
timeout?: number
} 

declare interface Client$ChallengehandlerInvocationData {
adapter: string,
procedure: string,
parameters: any[]
} 

declare interface Client$ChallengeHandlerAuthenticationOptions {} 

declare interface Client$ChallengeHandlerSubmitLoginFormOptions {
timeout?: number,
headers?: Object,
parameters?: Object
} 

declare class Client$AbstractChallengeHandler  {
handleChallenge(challenge: any): boolean;
isCustomResponse(transport: any): boolean;
submitAdapterAuthentication(
invocationData: Client$ChallengehandlerInvocationData,
options: Client$ChallengeHandlerAuthenticationOptions): void;
submitFailure(error: string): void;
submitLoginForm(
reqURL: string,
options: Client$ChallengeHandlerSubmitLoginFormOptions,
submitLoginFormCallback: (transport: any) => void): void;
submitSuccess(): void
}

declare type Client$InitOptions = {
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
onConnectionFailure?: (response: WL$WL$FailureResponse) => void,
onUnsupportedVersion?: (response: WL$WL$FailureResponse) => void,
onRequestTimeout?: (response: WL$WL$FailureResponse) => void,
onUnsupportedBrowser?: (response: WL$WL$FailureResponse) => void,
onDisabledCookies?: (response: WL$WL$FailureResponse) => void,
onUserInstanceAccessViolation?: (response: WL$WL$FailureResponse) => void,
onErrorRemoteDisableDenial?: (response: WL$WL$FailureResponse) => void,

/**
 * @deprecated since version 5.0.6. Instead, use onErrorRemoteDisableDenial.
 */
onErrorAppVersionAccessDenial?: (response: WL$WL$FailureResponse) => void,
validateArguments?: boolean,
autoHideSplash?: boolean,
onGetCustomDeviceProvisioningProperties: (resumeDeviceProvisioningProcess: (data: any) => void) => void,
username?: string,
password?: string,
LocalStorage$clear?: boolean,
localKeyGen?: boolean,
analytics?: boolean
} & WL$Options


declare interface Client$ProcedureInvocationData {
adapter: string,
procedure: string,
parameters?: any[],
compressResponse?: boolean
} 

declare interface Client$ProcedureInvocationResult {
isSuccessful: boolean,
errors?: string[]
} 

declare type Client$ProcedureResponse = {
invocationResult?: Client$ProcedureInvocationResult,
parameters?: any[]
} & WL$ResponseBase


declare type Client$ProcedureInvocationOptions = {
timeout: number,
onSuccess: (response: Client$ProcedureResponse) => void
} & WL$Options


declare function Client$addGlobalHeader(headerName: string, headerValue: string): void


declare function Client$checkForDirectUpdate(options: WL$Options): void


declare function Client$clearSharedToken(object: Client$SharedTokenObject): JQueryDeferred<any>


declare function Client$close(): void


declare function Client$connect(options?: Client$ConnectOptions): void


declare function Client$createChallengeHandler(realmName: string): Client$AbstractChallengeHandler


declare function Client$createProvisioningChallengeHandler(realmName: string): Client$AbstractChallengeHandler


declare function Client$createWLChallengeHandler(realName: string): Client$AbstractChallengeHandler


declare function Client$deleteUserPref(key: string, options?: WL$Options): void



/**
 * See WL.AppProperty for possible results
 */
declare function Client$getAppProperty(property: any): any



/**
 * See WL.Environment for possible results
 */
declare function Client$getEnvironment(): string


declare function Client$getLanguage(): string


declare function Client$getLastAccessToken(scope?: string): string


declare function Client$getLoginName(realmName: string): string



/**
 * @deprecated since version 7.0
 */
declare function Client$getRequiredAccessTokenScope(status: number, header: string): string


declare function Client$getSharedToken(object: Client$SharedTokenObject): JQueryDeferred<any>


declare function Client$getUserInfo(realm: string, key: string): any


declare function Client$getUserName(realm: any): string


declare function Client$getUserPref(key: any): any


declare function Client$hasUserPref(key: any): boolean


declare function Client$init(options: Client$InitOptions): void


declare function Client$invokeProcedure(
invocationData: Client$ProcedureInvocationData,
options?: Client$ProcedureInvocationOptions): JQueryDeferred<WL$Response>



/**
 * @deprecated since version 4.1.3. Use WL.Device.getNetworkInfo instead.
 */
declare function Client$isConnected(): void


declare function Client$isUserAuthenticated(realm: string): boolean



/**
 * @deprecated since version 7.0. Use WL.Logger instead.
 */
declare function Client$logActivity(activityType: string): void


declare function Client$login(realm: string, options?: WL$Options): void


declare function Client$logout(realm: string, options?: WL$Options): void


declare function Client$minimize(): void



/**
 * @deprecated since version 7.0
 */
declare function Client$obtainAccessToken(
scope: string,
onSuccess: WL$ResponseHandler<WL$Response>,
onFailure: WL$ResponseHandler<WL$FailureResponse>): void


declare function Client$purgeEventTransmissionBuffer(): void


declare function Client$reloadApp(): void


declare function Client$removeGlobalHeader(headerName: string): void


declare interface Client$EventTransmissionPolicy {
eventStorageEnabled?: boolean,
interval?: number
} 

declare function Client$setEventTransmissionPolicy(policy: Client$EventTransmissionPolicy): void


declare function Client$setHeartBeatInterval(interval: number): void


declare function Client$setSharedToken(token: Client$SharedTokenObject): void


declare function Client$setUserPref(key: string, value: string, options?: WL$Options): void


declare interface Client$UserPreferences {
[key: string]: string
} 

declare function Client$setUserPrefs(userPrefsHash: Client$UserPreferences, options?: WL$Options): void


declare function Client$transmitEvent(event: any, immediate?: boolean): void


declare function Client$updateUserInfo(options: WL$Options): void



      declare var npm$namespace$Device: {
        getNetworkInfo: typeof Device$getNetworkInfo,
        
      }
declare interface Device$AddressPair {
wifiAddress: string,
"3GAddress": string
} 

declare interface Device$NetworkInfo {
isNetworkConnected?: boolean,
isAirplaneMode?: boolean,
isRoaming?: boolean,
networkConnectionType?: string,
wifiName?: string,
telephonyNetworkType?: string,
carrierName?: string,
ipAddress?: string,
Ipv4Addresses?: Device$AddressPair[],
Ipv6Addresses?: Device$AddressPair[]
} 

declare function Device$getNetworkInfo(callback: (networkInfo: Device$NetworkInfo) => void): void



      declare var npm$namespace$EncryptedCache: {
        close: typeof EncryptedCache$close,
destroy: typeof EncryptedCache$destroy,
open: typeof EncryptedCache$open,
read: typeof EncryptedCache$read,
remove: typeof EncryptedCache$remove,
write: typeof EncryptedCache$write,
        OK: typeof EncryptedCache$OK,
ERROR_COULD_NOT_GENERATE_KEY: typeof EncryptedCache$ERROR_COULD_NOT_GENERATE_KEY,
ERROR_CREDENTIALS_MISMATCH: typeof EncryptedCache$ERROR_CREDENTIALS_MISMATCH,
ERROR_EOC_CLOSED: typeof EncryptedCache$ERROR_EOC_CLOSED,
ERROR_EOC_DELETED: typeof EncryptedCache$ERROR_EOC_DELETED,
ERROR_EOC_TO_BE_DELETED: typeof EncryptedCache$ERROR_EOC_TO_BE_DELETED,
ERROR_INVALID_PARAMETER: typeof EncryptedCache$ERROR_INVALID_PARAMETER,
ERROR_KEY_CREATION_IN_PROGRESS: typeof EncryptedCache$ERROR_KEY_CREATION_IN_PROGRESS,
ERROR_LOCAL_STORAGE_NOT_SUPPORTED: typeof EncryptedCache$ERROR_LOCAL_STORAGE_NOT_SUPPORTED,
ERROR_MIGRATION: typeof EncryptedCache$ERROR_MIGRATION,
ERROR_NO_EOC: typeof EncryptedCache$ERROR_NO_EOC,
ERROR_NO_SUCH_KEY: typeof EncryptedCache$ERROR_NO_SUCH_KEY,
ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE: typeof EncryptedCache$ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE,
ERROR_UNKNOWN: typeof EncryptedCache$ERROR_UNKNOWN,
ERROR_UNSAFE_CREDENTIALS: typeof EncryptedCache$ERROR_UNSAFE_CREDENTIALS,
      }
declare var EncryptedCache$OK: number;

declare var EncryptedCache$ERROR_COULD_NOT_GENERATE_KEY: number;

declare var EncryptedCache$ERROR_CREDENTIALS_MISMATCH: number;

declare var EncryptedCache$ERROR_EOC_CLOSED: number;

declare var EncryptedCache$ERROR_EOC_DELETED: number;

declare var EncryptedCache$ERROR_EOC_TO_BE_DELETED: number;

declare var EncryptedCache$ERROR_INVALID_PARAMETER: number;

declare var EncryptedCache$ERROR_KEY_CREATION_IN_PROGRESS: number;

declare var EncryptedCache$ERROR_LOCAL_STORAGE_NOT_SUPPORTED: number;

declare var EncryptedCache$ERROR_MIGRATION: number;

declare var EncryptedCache$ERROR_NO_EOC: number;

declare var EncryptedCache$ERROR_NO_SUCH_KEY: number;

declare var EncryptedCache$ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE: number;

declare var EncryptedCache$ERROR_UNKNOWN: number;

declare var EncryptedCache$ERROR_UNSAFE_CREDENTIALS: number;


/**
 * See above statuses for possible values
 */
declare interface EncryptedCache$StatusHandler {
(status: number): void
} 

declare function EncryptedCache$close(
successHandler: EncryptedCache$StatusHandler,
failureHandler: EncryptedCache$StatusHandler): void


declare function EncryptedCache$destroy(
successHandler: EncryptedCache$StatusHandler,
failureHandler: EncryptedCache$StatusHandler): void


declare function EncryptedCache$open(
credentials: string,
createIfNone: boolean,
successHandler: EncryptedCache$StatusHandler,
failureHandler: EncryptedCache$StatusHandler): void


declare function EncryptedCache$read(
key: string,
successHandler: EncryptedCache$StatusHandler,
failureHandler: EncryptedCache$StatusHandler): void


declare function EncryptedCache$remove(
key: string,
successHandler: EncryptedCache$StatusHandler,
failureHandler: EncryptedCache$StatusHandler): void


declare function EncryptedCache$write(
key: string,
value: string,
successHandler: EncryptedCache$StatusHandler,
failureHandler: EncryptedCache$StatusHandler): void



      declare var npm$namespace$Geo: {
        getDistanceBetweenCoordinates: typeof Geo$getDistanceBetweenCoordinates,
getDistanceToCircle: typeof Geo$getDistanceToCircle,
getDistanceToPolygon: typeof Geo$getDistanceToPolygon,
isInsideCircle: typeof Geo$isInsideCircle,
isInsidePolygon: typeof Geo$isInsidePolygon,
isOutsideCircle: typeof Geo$isOutsideCircle,
isOutsidePolygon: typeof Geo$isOutsidePolygon,
        
      }
declare interface Geo$Coordinate {
latitute: number,
longitude: number
} 

declare type Geo$Circle = {
radius: number
} & Geo$Coordinate


declare interface Geo$DistanceOptions {
bufferZoneWidth: number
} 

declare interface Geo$InsideOutsideOptions {

/**
 * confidenceLevel can be 'low', 'medium', 'high'
 */
confidenceLevel: string
} 

declare function Geo$getDistanceBetweenCoordinates(coordinate1: Geo$Coordinate, coordinate2: Geo$Coordinate): number


declare function Geo$getDistanceToCircle(
coordinate: Geo$Coordinate,
circle: Geo$Circle,
options: Geo$DistanceOptions): number


declare function Geo$getDistanceToPolygon(
coordinate: Geo$Coordinate,
polygon: Geo$Coordinate[],
options: Geo$DistanceOptions): number


declare function Geo$isInsideCircle(
coordinate: Geo$Coordinate,
circle: Geo$Circle,
options: Geo$InsideOutsideOptions): boolean


declare function Geo$isInsidePolygon(
coordinate: Geo$Coordinate,
polygon: Geo$Coordinate[],
options: Geo$InsideOutsideOptions): boolean


declare function Geo$isOutsideCircle(
coordinate: Geo$Coordinate,
circle: Geo$Circle,
options: Geo$InsideOutsideOptions): boolean


declare function Geo$isOutsidePolygon(
coordinate: Geo$Coordinate,
polygon: Geo$Coordinate[],
options: Geo$InsideOutsideOptions): boolean


declare class WL$Item  {
setEnabled(isEnable: string): void;
setImagePath(imagePath: string): void;
setTitle(title: string): void
}


      declare var npm$namespace$JSONStore: {
        changePassword: typeof JSONStore$changePassword,
clearPassword: typeof JSONStore$clearPassword,
closeAll: typeof JSONStore$closeAll,
commitTransaction: typeof JSONStore$commitTransaction,
destroy: typeof JSONStore$destroy,
documentify: typeof JSONStore$documentify,
fileInfo: typeof JSONStore$fileInfo,
get: typeof JSONStore$get,
getErrorMessage: typeof JSONStore$getErrorMessage,
init: typeof JSONStore$init,
initCollection: typeof JSONStore$initCollection,
QueryPart: typeof JSONStore$QueryPart,
rollbackTransaction: typeof JSONStore$rollbackTransaction,
startTransaction: typeof JSONStore$startTransaction,
usePassword: typeof JSONStore$usePassword,
        
      }

/**
 * Changes the password for the internal storage. You must have an initialized collection before calling WL.JSONStore.changePassword.
 */
declare function JSONStore$changePassword(
oldPassword: string,
newPassword: string,
username: string,
options: WL$WL$Options): JQueryDeferred<any>



/**
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
 */
declare function JSONStore$clearPassword(): boolean



/**
 * Locks access to all the collections until WL.JSONStore.init is called.
 */
declare function JSONStore$closeAll(options?: WL$WL$Options): JQueryDeferred<any>



/**
 * Commit a transaction.
 */
declare function JSONStore$commitTransaction(): JQueryDeferred<number>



/**
 * Completely wipes data for all users, destroys the internal storage, and clears security artifacts.
 * @parameters options is
 * @deprecated
 */
declare function JSONStore$destroy(username: string, options?: WL$WL$Options): JQueryDeferred<number>



/**
 * @deprecated since version 6.2.0.
 */
declare function JSONStore$documentify(id: number, data: any): any



/**
 * Returns information about the file that is used to persist data in the store. The following key value pairs are returned:
 * name - name of the store
 * size - the total size, in bytes, of the store
 * isEncrypted - boolean that is true when encrypted and false otherwise.
 */
declare function JSONStore$fileInfo(): JQueryDeferred<any>



/**
 * Provides an accessor to the collection if the collection exists, otherwise it returns undefined.
 */
declare function JSONStore$get(collectionName: string): JSONStore$JSONStoreInstance



/**
 * Returns the message that is associated with a JSONStore error code.
 */
declare function JSONStore$getErrorMessage(errorCode: number): string


declare type JSONStore$InitOptions = {
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
onConnectionFailure?: (response: WL$WL$FailureResponse) => void,
onUnsupportedVersion?: (response: WL$WL$FailureResponse) => void,
onRequestTimeout?: (response: WL$WL$FailureResponse) => void,
onUnsupportedBrowser?: (response: WL$WL$FailureResponse) => void,
onDisabledCookies?: (response: WL$WL$FailureResponse) => void,
onUserInstanceAccessViolation?: (response: WL$WL$FailureResponse) => void,
onErrorRemoteDisableDenial?: (response: WL$WL$FailureResponse) => void,

/**
 * @deprecated since version 5.0.6. Instead, use onErrorRemoteDisableDenial.
 */
onErrorAppVersionAccessDenial?: (response: WL$WL$FailureResponse) => void,
validateArguments?: boolean,
autoHideSplash?: boolean,
onGetCustomDeviceProvisioningProperties: (resumeDeviceProvisioningProcess: (data: any) => void) => void,
username?: string,
password?: string,
LocalStorage$clear?: boolean,
localKeyGen?: boolean,
analytics?: boolean
} & WL$Options


declare function JSONStore$init(collections: any, options?: JSONStore$InitOptions): JQueryDeferred<any>



/**
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
 */
declare function JSONStore$initCollection(
name: string,
searchFields: any,
options?: JSONStore$InitOptions): WL$WL$JSONStore.JSONStore$JSONStoreInstance



/**
 * Creates a query for advanced find. See WL.JSONStore.QueryPart for more information.
 */
declare function JSONStore$QueryPart(): JSONStore$QueryPartObj



/**
 * Roll back a transaction
 */
declare function JSONStore$rollbackTransaction(): JQueryDeferred<number>



/**
 * Initiates a transaction
 */
declare function JSONStore$startTransaction(): JQueryDeferred<number>



/**
 * Sets the password that is used to generate keys to encrypt data that is stored locally on the device.
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
 */
declare function JSONStore$usePassword(pwd: string): boolean


declare type JSONStore$AddOptions = {
additionalSearchFields?: any,
markDirty?: boolean,

/**
 * @deprecated
 */
push?: boolean
} & WL$WL$Options


declare type JSONStore$BasicFindOptions = {
filter?: string[],
sort?: string[]
} & WL$WL$Options


declare type JSONStore$AdvancedFindOptions = {
limit?: number,
offset?: number
} & JSONStore$BasicFindOptions


declare type JSONStore$FindOptions = {
exact?: boolean,
limit?: number,
offset?: number
} & JSONStore$BasicFindOptions


declare type JSONStore$EraseOptions = {
push?: boolean
} & WL$WL$Options


declare type JSONStore$RefreshOptions = {
push: boolean
} & WL$WL$Options


declare type JSONStore$ChangeOptions = {
addNew?: boolean,
markDirty?: boolean,
replaceCriteria?: string[]
} & WL$WL$Options


declare type JSONStore$RemoveOptions = {
markDirty?: boolean,

/**
 * @deprecated
 */
push?: boolean,
exact?: boolean
} & WL$WL$Options


declare type JSONStore$ReplaceOptions = {
markDirty?: boolean,

/**
 * @deprecated
 */
push?: boolean
} & WL$WL$Options


declare type JSONStore$StoreOptions = {
additionalSearchFields?: Object,
push?: boolean
} & WL$WL$Options


declare class JSONStore$JSONStoreInstance  {
add(data: any, options?: JSONStore$AddOptions): JQueryDeferred<any>;
advancedFind(query: any[], options?: JSONStore$AdvancedFindOptions): JQueryDeferred<any>;
change(data: any, options?: JSONStore$ChangeOptions): JQueryDeferred<any>;
clear(options?: WL$WL$Options): JQueryDeferred<any>;
count(query?: any, options?: WL$WL$Options): JQueryDeferred<any>;
countAllDirty(options?: WL$WL$Options): JQueryDeferred<any>;
enhance(name: string, fn: Function): number;

/**
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.remove with {push: false}.
 */
erase(doc: any, options?: JSONStore$EraseOptions): void;
find(query: Object | Object[], options?: JSONStore$FindOptions): JQueryDeferred<any>;
findAll(options?: JSONStore$BasicFindOptions): JQueryDeferred<any>;
findById(options?: WL$WL$Options): JQueryDeferred<any>;
isDirty(doc: any, options?: WL$WL$Options): JQueryDeferred<boolean>;

/**
 * @deprecated since version 6.2.0.
 */
load(options?: WL$WL$Options): JQueryDeferred<any>;
markClean(docs: any[], options?: WL$WL$Options): JQueryDeferred<any>;

/**
 * @deprecated since version 6.2.0.
 */
push(options?: any): JQueryDeferred<any>;

/**
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.push.
 */
pushSelected(doc: any, options?: WL$WL$Options): JQueryDeferred<any>;

/**
 * @deprecated since version 5.0.6. It is no longer needed if you use WL.JSONStore.JSONStoreInstance.replace with {push: false}.
 */
refresh(doc: any, options?: JSONStore$RefreshOptions): JQueryDeferred<any>;
remove(doc: any, options?: JSONStore$RemoveOptions): JQueryDeferred<any>;

/**
 * Deletes all the documents that are stored inside a collection.
 */
removeCollection(options?: WL$WL$Options): JQueryDeferred<any>;
replace(
doc: Object | Object[],
options?: JSONStore$ReplaceOptions): JQueryDeferred<any>;

/**
 * Writes data to a collection.
 * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.add with {push: false}.
 */
store(data: Object | Object[], options?: JSONStore$StoreOptions): void;
toString(limit?: number, offset?: number): JQueryDeferred<number>
}

declare class JSONStore$QueryPartObj  {

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


      declare var npm$namespace$LocalStorage: {
        getValue: typeof LocalStorage$getValue,
setValue: typeof LocalStorage$setValue,
clear: typeof LocalStorage$clear,
clearAll: typeof LocalStorage$clearAll,
        
      }
declare function LocalStorage$getValue(key: string): string


declare function LocalStorage$setValue(key: string, value: string): void


declare function LocalStorage$clear(key: string): void


declare function LocalStorage$clearAll(): void


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
ctx(options?: WL$LoggerOptions): WL$WL$LoggerObject;

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
off(): WL$WL$LoggerObject;

/**
 * @deprecated since version 6.2. WL.Logger.on is now a no-op. WL.Logger is always enabled. Use WL.Logger.config with {'level': 'FATAL'} to reduce verbosity.
 */
on(options: any): WL$WL$LoggerObject;

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


      declare var npm$namespace$NativePage: {
        show: typeof NativePage$show,
        
      }
declare function NativePage$show(className: string, callback: (data: any) => void, data: any): void



      declare var npm$namespace$SecurityUtils: {
        base64Decode: typeof SecurityUtils$base64Decode,
base64Encode: typeof SecurityUtils$base64Encode,
decrypt: typeof SecurityUtils$decrypt,
encrypt: typeof SecurityUtils$encrypt,
keygen: typeof SecurityUtils$keygen,
localRandomString: typeof SecurityUtils$localRandomString,
remoteRandomString: typeof SecurityUtils$remoteRandomString,
        
      }
declare interface SecurityUtils$DecryptOptions {
key: string,
ct: string,
lv: string,
src: string,
v: string
} 

declare interface SecurityUtils$EncryptOptions {
key: string,
text: string
} 

declare interface SecurityUtils$KeygenOptions {
password: string,
salt: string,
iterations: number
} 

declare function SecurityUtils$base64Decode(input: string): JQueryDeferred<string>


declare function SecurityUtils$base64Encode(input: string): JQueryDeferred<string>


declare function SecurityUtils$decrypt(options: SecurityUtils$DecryptOptions): JQueryDeferred<string>


declare function SecurityUtils$encrypt(options: SecurityUtils$EncryptOptions): JQueryDeferred<string>


declare function SecurityUtils$keygen(options: SecurityUtils$KeygenOptions): JQueryDeferred<string>


declare function SecurityUtils$localRandomString(bytes?: number): JQueryDeferred<string>


declare function SecurityUtils$remoteRandomString(bytes?: number): JQueryDeferred<string>



      declare var npm$namespace$SimpleDialog: {
        show: typeof SimpleDialog$show,
        
      }
declare interface SimpleDialog$Button {
text: string,
handler?: Function
} 

declare interface SimpleDialog$Options {
onSuccess?: (response: WL$IResponse) => void,
onFailure?: (response: WL$IResponse) => void,
invocationContext?: any,
title: string,
text: string
} 

declare function SimpleDialog$show(
title: string,
text: string,
buttons: SimpleDialog$Button[],
options?: SimpleDialog$Options): void



      declare var npm$namespace$TabBar: {
        addItem: typeof TabBar$addItem,
init: typeof TabBar$init,
isVisible: typeof TabBar$isVisible,
RemoveAllItems: typeof TabBar$RemoveAllItems,
setEnabled: typeof TabBar$setEnabled,
setParentDivId: typeof TabBar$setParentDivId,
setSelectedItem: typeof TabBar$setSelectedItem,
setVisible: typeof TabBar$setVisible,
        
      }
declare interface TabBar$ItemOptions {
image: string,
badge?: string,
imageSelected?: string
} 

declare function TabBar$addItem(
id: string,
callback: Function,
title: string,
options: TabBar$ItemOptions): WL$WL$TabBarItem


declare function TabBar$init(): void


declare function TabBar$isVisible(): boolean


declare function TabBar$RemoveAllItems(): void


declare function TabBar$setEnabled(isEnabled: boolean): void



/**
 * @deprecated
 */
declare function TabBar$setParentDivId(parentId: string): void


declare function TabBar$setSelectedItem(id: string): void


declare function TabBar$setVisible(TabBar$isVisible: boolean): void


declare class WL$TabBarItem  {
setEnabled(isEnabled: boolean): void;
updateBadge(badge?: string): void
}


      declare var npm$namespace$Toast: {
        show: typeof Toast$show,
        
      }
declare function Toast$show(): void



      declare var npm$namespace$Trusteer: {
        getRiskAssessment: typeof Trusteer$getRiskAssessment,
        
      }
declare interface Trusteer$AssesmentRisk {
value: number,
additionalData: string,
lastCalculated: number,
name: string
} 

declare interface Trusteer$AssetmentRisks {
device_key: string,
"malware.any"?: Trusteer$AssesmentRisk,
"network.wifi"?: Trusteer$AssesmentRisk,
"os.rooted"?: Trusteer$AssesmentRisk,
"os.rooted.native"?: Trusteer$AssesmentRisk,
"os.rooted.hiders"?: Trusteer$AssesmentRisk,
"os.ver_up_to_date"?: Trusteer$AssesmentRisk,
"plat.android.dumpsys"?: Trusteer$AssesmentRisk,
"plat.android.apprestrict"?: Trusteer$AssesmentRisk,
"total.risk.generic"?: Trusteer$AssesmentRisk,
"tas.config_update"?: Trusteer$AssesmentRisk
} 

declare function Trusteer$getRiskAssessment(
onSuccess: WL$ResponseHandler<WL$Response>,
onFailure: WL$ResponseHandler<WL$FailureResponse>): Trusteer$AssetmentRisks



      declare var npm$namespace$UserAuth: {
        deleteCertificate: typeof UserAuth$deleteCertificate,
        
      }
declare function UserAuth$deleteCertificate(provisioningEntity?: string): JQueryDeferred<void>


declare var WL$ClientMessages: {
[name: string]: string
};
	
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
