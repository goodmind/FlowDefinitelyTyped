declare module 'chayns' {
        
      declare var npm$namespace$chayns: {
        register: typeof chayns$register,
login: typeof chayns$login,
getUser: typeof chayns$getUser,
getUacGroups: typeof chayns$getUacGroups,
startInteractionIdentification: typeof chayns$startInteractionIdentification,
stopInteractionIdentification: typeof chayns$stopInteractionIdentification,
allowRefreshScroll: typeof chayns$allowRefreshScroll,
disallowRefreshScroll: typeof chayns$disallowRefreshScroll,
showTitleImage: typeof chayns$showTitleImage,
hideTitleImage: typeof chayns$hideTitleImage,
setOnActivateCallback: typeof chayns$setOnActivateCallback,
setNetworkChangeCallback: typeof chayns$setNetworkChangeCallback,
setNfcCallback: typeof chayns$setNfcCallback,
removeNfcCallback: typeof chayns$removeNfcCallback,
startNfcDetection: typeof chayns$startNfcDetection,
stopNfcDetection: typeof chayns$stopNfcDetection,
scanQRCode: typeof chayns$scanQRCode,
createQRCode: typeof chayns$createQRCode,
showFinetradingQRCode: typeof chayns$showFinetradingQRCode,
selectTapp: typeof chayns$selectTapp,
openUrl: typeof chayns$openUrl,
closeUrl: typeof chayns$closeUrl,
openUrlInBrowser: typeof chayns$openUrlInBrowser,
getGeoLocation: typeof chayns$getGeoLocation,
getLocationBeacons: typeof chayns$getLocationBeacons,
getBeaconHistory: typeof chayns$getBeaconHistory,
getBaseColor: typeof chayns$getBaseColor,
share: typeof chayns$share,
getAvailableSharingServices: typeof chayns$getAvailableSharingServices,
navigateBack: typeof chayns$navigateBack,
updateNavigation: typeof chayns$updateNavigation,
enableDisplayTimeout: typeof chayns$enableDisplayTimeout,
disableDisplayTimeout: typeof chayns$disableDisplayTimeout,
setSpeechToText: typeof chayns$setSpeechToText,
createTappShortcut: typeof chayns$createTappShortcut,
setSubTapp: typeof chayns$setSubTapp,
removeSubTapp: typeof chayns$removeSubTapp,
vibrate: typeof chayns$vibrate,
setHeight: typeof chayns$setHeight,
scrollToY: typeof chayns$scrollToY,
addToWallet: typeof chayns$addToWallet,
addScrollListener: typeof chayns$addScrollListener,
setScreenOrientation: typeof chayns$setScreenOrientation,
findSite: typeof chayns$findSite,
showWaitCursor: typeof chayns$showWaitCursor,
hideWaitCursor: typeof chayns$hideWaitCursor,
showFloatingButton: typeof chayns$showFloatingButton,
hideFloatingButton: typeof chayns$hideFloatingButton,
openImage: typeof chayns$openImage,
uploadImage: typeof chayns$uploadImage,
openVideo: typeof chayns$openVideo,
saveAppointment: typeof chayns$saveAppointment,
playSound: typeof chayns$playSound,
addErrorListener: typeof chayns$addErrorListener,
getGlobalData: typeof chayns$getGlobalData,
        ready: typeof chayns$ready,
smartShop: typeof chayns$smartShop,
      }

/**
 * Getting Started
 * chayns
 */
declare var chayns$ready: Promise<any>;

declare function chayns$register(config: RegisterConfig): void



/**
 * Basic Functions
 * chayns
 */
declare function chayns$login(parameters?: string[]): Promise<any>


declare function chayns$getUser(config: GetUserConfig): Promise<User>


declare function chayns$getUacGroups(siteId: number, updateCache?: boolean): Promise<UacGroup[]>


declare function chayns$startInteractionIdentification(config: InteractionIdentificationConfig): Promise<any>


declare function chayns$stopInteractionIdentification(): Promise<any>


declare function chayns$allowRefreshScroll(): Promise<any>


declare function chayns$disallowRefreshScroll(): Promise<any>


declare function chayns$showTitleImage(): Promise<any>


declare function chayns$hideTitleImage(): Promise<any>


declare function chayns$setOnActivateCallback(callback: (tappEvent: number) => any): Promise<any>


declare function chayns$setNetworkChangeCallback(callback: (result: NetworkChangeResult) => any, ongoing: boolean): Promise<any>


declare function chayns$setNfcCallback(callback: (rfid: string) => any): Promise<any>


declare function chayns$removeNfcCallback(): Promise<any>


declare function chayns$startNfcDetection(
callback: (result: NfcDetectionResult) => any,
interval: number,
chayns$vibrate: boolean): Promise<any>


declare function chayns$stopNfcDetection(): Promise<any>


declare function chayns$scanQRCode(cameryType?: number, timeout?: number): Promise<any>


declare function chayns$createQRCode(text: string): Promise<string>


declare function chayns$showFinetradingQRCode(): Promise<any>


declare function chayns$selectTapp(tapp: SelectTappConfig, parameter?: string[]): Promise<any>


declare function chayns$openUrl(config: OpenUrlConfig): void


declare function chayns$closeUrl(): void


declare function chayns$openUrlInBrowser(url: string): void


declare function chayns$getGeoLocation(): Promise<GeoLocationResult>


declare function chayns$getLocationBeacons(forceReload: boolean): Promise<LocationBeacon[]>


declare function chayns$getBeaconHistory(subNumber?: number): Promise<BeaconHistory[]>


declare function chayns$getBaseColor(color?: string, colorMode?: number): string


declare function chayns$share(config: ShareConfig): Promise<any>


declare function chayns$getAvailableSharingServices(): Promise<number[]>


declare function chayns$navigateBack(): Promise<any>


declare function chayns$updateNavigation(tappId?: number, config?: UpdateNavigationConfig): Promise<any>


declare function chayns$enableDisplayTimeout(): Promise<any>


declare function chayns$disableDisplayTimeout(): Promise<any>


declare function chayns$setSpeechToText(callback: (result: SpeechToTextResult) => any, title?: string): Promise<any>


declare function chayns$createTappShortcut(name: string, imageUrl: string): Promise<any>


declare function chayns$setSubTapp(config: SubTappConfig): void


declare function chayns$removeSubTapp(config: RemoveSubTappConfig): void


declare function chayns$vibrate(ms: number[]): Promise<any>


declare function chayns$setHeight(config: SetHeightConfig): Promise<any>


declare function chayns$scrollToY(position: number): Promise<any>


declare function chayns$addToWallet(passbook: string): Promise<any>


declare function chayns$addScrollListener(callback: (data: any) => any, throttle?: number): Promise<any>


declare function chayns$setScreenOrientation(orientation: number): Promise<any>


declare function chayns$findSite(name: string, skip?: number, take?: number): Promise<Site[]>



/**
 * UI Functions
 * Waitcursor
 * chayns
 */
declare function chayns$showWaitCursor(text?: string, timeout?: number): Promise<any>


declare function chayns$hideWaitCursor(): Promise<any>



/**
 * UI Functions
 * Floating Button
 * chayns
 */
declare function chayns$showFloatingButton(config: FloatingConfig, callback: () => any): void


declare function chayns$hideFloatingButton(): void



/**
 * Media Functions
 * Image
 * chayns
 */
declare function chayns$openImage(urls: string[], start?: number): Promise<any>


declare function chayns$uploadImage(): Promise<string>



/**
 * Media Functions
 * Miscellaneous
 * chayns
 */
declare function chayns$openVideo(url: string): Promise<any>


declare function chayns$saveAppointment(config: SaveAppointmentConfig): Promise<any>


declare function chayns$playSound(url: string, playOnMute?: boolean): Promise<any>


declare function chayns$addErrorListener(logFn: (error: any) => Promise<{}>, appName: string): void


declare function chayns$getGlobalData(): GlobalData



/**
 * chayns.smartShop
 */
declare var chayns$smartShop: any;


      declare var npm$namespace$intercom: {
        sendMessageToUser: typeof intercom$sendMessageToUser,
sendMessageToGroup: typeof intercom$sendMessageToGroup,
sendMessageToPage: typeof intercom$sendMessageToPage,
        
      }
declare function intercom$sendMessageToUser(userId: number, config: IntercomConfig): Promise<any>


declare function intercom$sendMessageToGroup(groupId: number, config: IntercomConfig): Promise<any>


declare function intercom$sendMessageToPage(config: IntercomConfig): Promise<any>



      declare var npm$namespace$passKit: {
        getInstalled: typeof passKit$getInstalled,
isInstalled: typeof passKit$isInstalled,
        
      }
declare function passKit$getInstalled(): Promise<any>


declare function passKit$isInstalled(identifier: string): Promise<any>



      declare var npm$namespace$env: {
        
        _parameters: typeof env$_parameters,
parameters: typeof env$parameters,
isBrowser: typeof env$isBrowser,
isChaynsWeb: typeof env$isChaynsWeb,
isChaynsWebDesktop: typeof env$isChaynsWebDesktop,
isChaynsWebMobile: typeof env$isChaynsWebMobile,
isDesktop: typeof env$isDesktop,
isMobile: typeof env$isMobile,
isApp: typeof env$isApp,
isIOS: typeof env$isIOS,
isAndroid: typeof env$isAndroid,
isTablet: typeof env$isTablet,
isWP: typeof env$isWP,
appVersion: typeof env$appVersion,
os: typeof env$os,
apiVersion: typeof env$apiVersion,
debugMode: typeof env$debugMode,
isChaynsParent: typeof env$isChaynsParent,
isChaynsWebLight: typeof env$isChaynsWebLight,
isInFacebookFrame: typeof env$isInFacebookFrame,
isInFrame: typeof env$isInFrame,
isWidget: typeof env$isWidget,
language: typeof env$language,
      }
declare var env$_parameters: any;

declare var env$parameters: any;

declare var env$isBrowser: boolean;

declare var env$isChaynsWeb: boolean;

declare var env$isChaynsWebDesktop: boolean;

declare var env$isChaynsWebMobile: boolean;

declare var env$isDesktop: boolean;

declare var env$isMobile: boolean;

declare var env$isApp: boolean;

declare var env$isIOS: boolean;

declare var env$isAndroid: boolean;

declare var env$isTablet: boolean;

declare var env$isWP: boolean;

declare var env$appVersion: number;

declare var env$os: string;

declare var env$apiVersion: number;

declare var env$debugMode: boolean;

declare var env$isChaynsParent: boolean;

declare var env$isChaynsWebLight: boolean;

declare var env$isInFacebookFrame: boolean;

declare var env$isInFrame: boolean;

declare var env$isWidget: boolean;

declare var env$language: string;


      declare var npm$namespace$user: {
        
        tobitAccessToken: typeof user$tobitAccessToken,
facebookAccessToken: typeof user$facebookAccessToken,
facebookId: typeof user$facebookId,
id: typeof user$id,
name: typeof user$name,
personId: typeof user$personId,
isAuthenticated: typeof user$isAuthenticated,
language: typeof user$language,
groups: typeof user$groups,
      }
declare var user$tobitAccessToken: string;

declare var user$facebookAccessToken: string;

declare var user$facebookId: string;

declare var user$id: number;

declare var user$name: string;

declare var user$personId: string;

declare var user$isAuthenticated: boolean;

declare var user$language: string;

declare var user$groups: UserGroup[];


      declare var npm$namespace$site: {
        
        color: typeof site$color,
colorMode: typeof site$colorMode,
colorScheme: typeof site$colorScheme,
domain: typeof site$domain,
facebookAppId: typeof site$facebookAppId,
facebookPageId: typeof site$facebookPageId,
id: typeof site$id,
isAdEnabled: typeof site$isAdEnabled,
isArEnabled: typeof site$isArEnabled,
language: typeof site$language,
locationId: typeof site$locationId,
locationPersonId: typeof site$locationPersonId,
tapps: typeof site$tapps,
title: typeof site$title,
url: typeof site$url,
version: typeof site$version,
      }
declare var site$color: string;

declare var site$colorMode: number;

declare var site$colorScheme: number;

declare var site$domain: string;

declare var site$facebookAppId: string;

declare var site$facebookPageId: string;

declare var site$id: string;

declare var site$isAdEnabled: boolean;

declare var site$isArEnabled: boolean;

declare var site$language: string;

declare var site$locationId: number;

declare var site$locationPersonId: string;

declare var site$tapps: SiteTapp[];

declare var site$title: string;

declare var site$url: string;

declare var site$version: string;


      declare var npm$namespace$tapp: {
        
        customUrl: typeof tapp$customUrl,
id: typeof tapp$id,
internalName: typeof tapp$internalName,
isExclusiveView: typeof tapp$isExclusiveView,
isKioskMode: typeof tapp$isKioskMode,
isSubTapp: typeof tapp$isSubTapp,
showName: typeof tapp$showName,
sortId: typeof tapp$sortId,
userGroupIds: typeof tapp$userGroupIds,
      }
declare var tapp$customUrl: string;

declare var tapp$id: number;

declare var tapp$internalName: string;

declare var tapp$isExclusiveView: boolean;

declare var tapp$isKioskMode: boolean;

declare var tapp$isSubTapp: boolean;

declare var tapp$showName: string;

declare var tapp$sortId: number;

declare var tapp$userGroupIds: number[];


      declare var npm$namespace$app: {
        
        flavor: typeof app$flavor,
languageId: typeof app$languageId,
model: typeof app$model,
name: typeof app$name,
uid: typeof app$uid,
version: typeof app$version,
      }
declare var app$flavor: string;

declare var app$languageId: string;

declare var app$model: string;

declare var app$name: string;

declare var app$uid: string;

declare var app$version: string;


      declare var npm$namespace$device: {
        
        fontScale: typeof device$fontScale,
imei: typeof device$imei,
languageId: typeof device$languageId,
model: typeof device$model,
systemName: typeof device$systemName,
systemVersion: typeof device$systemVersion,
uid: typeof device$uid,
      }
declare var device$fontScale: any;

declare var device$imei: string;

declare var device$languageId: string;

declare var device$model: string;

declare var device$systemName: string;

declare var device$systemVersion: number;

declare var device$uid: string;


      declare var npm$namespace$browser: {
        
        name: typeof browser$name,
version: typeof browser$version,
      }
declare var browser$name: string;

declare var browser$version: string;


      declare var npm$namespace$dialog: {
        alert: typeof dialog$alert,
confirm: typeof dialog$confirm,
date: typeof dialog$date,
select: typeof dialog$select,
input: typeof dialog$input,
facebook: typeof dialog$facebook,
        
      }
declare  class dialog$buttonType {
  constructor(...args: empty): mixed;
static +CANCEL: Class<dialog$buttonType__CANCEL> & dialog$buttonType__CANCEL & -1;// -1
static +NEGATIVE: Class<dialog$buttonType__NEGATIVE> & dialog$buttonType__NEGATIVE & 0;// 0
static +POSITIVE: Class<dialog$buttonType__POSITIVE> & dialog$buttonType__POSITIVE & 1;// 1

}

declare class dialog$buttonType__CANCEL mixins dialog$buttonType {}
declare class dialog$buttonType__NEGATIVE mixins dialog$buttonType {}
declare class dialog$buttonType__POSITIVE mixins dialog$buttonType {}


declare  class dialog$buttonText {
  constructor(...args: empty): mixed;
static +CANCEL: Class<dialog$buttonText__CANCEL> & dialog$buttonText__CANCEL & "Abbrechen";// "Abbrechen"
static +NO: Class<dialog$buttonText__NO> & dialog$buttonText__NO & "Nein";// "Nein"
static +OK: Class<dialog$buttonText__OK> & dialog$buttonText__OK & "OK";// "OK"
static +YES: Class<dialog$buttonText__YES> & dialog$buttonText__YES & "Ja";// "Ja"

}

declare class dialog$buttonText__CANCEL mixins dialog$buttonText {}
declare class dialog$buttonText__NO mixins dialog$buttonText {}
declare class dialog$buttonText__OK mixins dialog$buttonText {}
declare class dialog$buttonText__YES mixins dialog$buttonText {}


declare  class dialog$dateType {
  constructor(...args: empty): mixed;
static +DATE: Class<dialog$dateType__DATE> & dialog$dateType__DATE & 0;// 0
static +TIME: Class<dialog$dateType__TIME> & dialog$dateType__TIME & 1;// 1
static +DATE_TIME: Class<dialog$dateType__DATE_TIME> & dialog$dateType__DATE_TIME & 2;// 2

}

declare class dialog$dateType__DATE mixins dialog$dateType {}
declare class dialog$dateType__TIME mixins dialog$dateType {}
declare class dialog$dateType__DATE_TIME mixins dialog$dateType {}


declare  class dialog$inputType {
  constructor(...args: empty): mixed;
static +DEFAULT: Class<dialog$inputType__DEFAULT> & dialog$inputType__DEFAULT & 0;// 0
static +PASSWORD: Class<dialog$inputType__PASSWORD> & dialog$inputType__PASSWORD & 1;// 1

}

declare class dialog$inputType__DEFAULT mixins dialog$inputType {}
declare class dialog$inputType__PASSWORD mixins dialog$inputType {}


declare function dialog$alert(site$title: string, message?: string): Promise<dialog$buttonType>


declare function dialog$confirm(
site$title: string,
message?: string,
buttons?: DialogButton[]): Promise<dialog$buttonType>


declare function dialog$date(config: DialogDateConfig): Promise<DialogDateResult>


declare function dialog$select(config: DialogSelectConfig): Promise<DialogSelectResult>


declare function dialog$input(config: DialogInputConfig): Promise<DialogInputResult>


declare function dialog$facebook(options: DialogFacebookOptions): Promise<DialogFacebookResult>



      declare var npm$namespace$modeSwitch: {
        init: typeof modeSwitch$init,
addItem: typeof modeSwitch$addItem,
changeMode: typeof modeSwitch$changeMode,
remove: typeof modeSwitch$remove,
add: typeof modeSwitch$add,
        
      }
declare function modeSwitch$init(config: ModeSwitchConfig): void


declare function modeSwitch$addItem(item: ModeSwitchItem, index?: number): void


declare function modeSwitch$changeMode(item: number | ModeSwitchItem): void


declare function modeSwitch$remove(): void


declare function modeSwitch$add(): void



      declare var npm$namespace$gallery: {
        create: typeof gallery$create,
setUrls: typeof gallery$setUrls,
getUrls: typeof gallery$getUrls,
addUrl: typeof gallery$addUrl,
removeUrl: typeof gallery$removeUrl,
        
      }
declare function gallery$create(tapp$id: string, urls: string[]): void


declare function gallery$setUrls(tapp$id: string, urls: string[]): void


declare function gallery$getUrls(tapp$id: string): string[]


declare function gallery$addUrl(tapp$id: string, site$url: string): void


declare function gallery$removeUrl(tapp$id: string, site$url: string): void



      declare var npm$namespace$tooltip: {
        init: typeof tooltip$init,
        
      }
declare function tooltip$init(config: UiTooltipInitConfig, rootElement: any): Promise<boolean>



      declare var npm$namespace$slider: {
        refreshTrack: typeof slider$refreshTrack,
        
      }
declare function slider$refreshTrack(): void



      declare var npm$namespace$utils: {
        isHex: typeof utils$isHex,
isArray: typeof utils$isArray,
isBLEAdress: typeof utils$isBLEAdress,
isBlank: typeof utils$isBlank,
isDate: typeof utils$isDate,
isDefined: typeof utils$isDefined,
isFormData: typeof utils$isFormData,
isFunction: typeof utils$isFunction,
isGUID: typeof utils$isGUID,
isMacAdress: typeof utils$isMacAdress,
isNumber: typeof utils$isNumber,
isObject: typeof utils$isObject,
isPromise: typeof utils$isPromise,
isString: typeof utils$isString,
isUUID: typeof utils$isUUID,
isUndefined: typeof utils$isUndefined,
isDeferred: typeof utils$isDeferred,
isJwt: typeof utils$isJwt,
isUrl: typeof utils$isUrl,
getJwtPayload: typeof utils$getJwtPayload,
mod: typeof utils$mod,
trim: typeof utils$trim,
replacePlaceholder: typeof utils$replacePlaceholder,
mixColor: typeof utils$mixColor,
isPresent: typeof utils$isPresent,
setLevel: typeof utils$setLevel,
        
      }

/**
 * Utility Functions
 * Check Types
 * chayns.utils
 */
declare function utils$isHex(parameter: any, shorthand: boolean): boolean


declare function utils$isArray(parameter: any): boolean


declare function utils$isBLEAdress(parameter: any): boolean


declare function utils$isBlank(parameter: any): boolean


declare function utils$isDate(parameter: any): boolean


declare function utils$isDefined(parameter: any): boolean


declare function utils$isFormData(parameter: any): boolean


declare function utils$isFunction(parameter: any): boolean


declare function utils$isGUID(parameter: any): boolean


declare function utils$isMacAdress(parameter: any): boolean


declare function utils$isNumber(parameter: any): boolean


declare function utils$isObject(parameter: any): boolean


declare function utils$isPromise(parameter: any): boolean


declare function utils$isString(parameter: any): boolean


declare function utils$isUUID(parameter: any): boolean


declare function utils$isUndefined(parameter: any): boolean


declare function utils$isDeferred(parameter: any): boolean


declare function utils$isJwt(parameter: any): boolean


declare function utils$isUrl(parameter: any): boolean



/**
 * Utility Functions
 * Miscellaneous
 * chayns.utils
 */
declare function utils$getJwtPayload(token: string): JwtPaylod


declare function utils$mod(number: number, modulo: number): number


declare function utils$trim(test: string): string


declare function utils$replacePlaceholder(text: string, env$parameters: any[]): string


declare function utils$mixColor(color1: string, color2: string, saturation: number): string


declare function utils$isPresent(parameter: any): boolean


declare function utils$setLevel(level: number): void



      declare var npm$namespace$ls: {
        set: typeof ls$set,
get: typeof ls$get,
remove: typeof ls$remove,
removeAll: typeof ls$removeAll,
        
      }
declare function ls$set(key: string, value: string): void


declare function ls$get(key: string): string


declare function ls$remove(key: string): void


declare function ls$removeAll(): void



      declare var npm$namespace$lang: {
        init: typeof lang$init,
renderTextStrings: typeof lang$renderTextStrings,
get: typeof lang$get,
translateDomStrings: typeof lang$translateDomStrings,
        
      }
declare function lang$init(config: any): void


declare function lang$renderTextStrings(): void


declare function lang$get(textString: string): string


declare function lang$translateDomStrings(): void



      declare var npm$namespace$storage: {
        set: typeof storage$set,
get: typeof storage$get,
remove: typeof storage$remove,
        
      }
declare  class storage$accessMode {
  constructor(...args: empty): mixed;
static +PUBLIC: Class<storage$accessMode__PUBLIC> & storage$accessMode__PUBLIC & 0;// 0
static +PROTECTED: Class<storage$accessMode__PROTECTED> & storage$accessMode__PROTECTED & 1;// 1
static +PRIVATE: Class<storage$accessMode__PRIVATE> & storage$accessMode__PRIVATE & 2;// 2

}

declare class storage$accessMode__PUBLIC mixins storage$accessMode {}
declare class storage$accessMode__PROTECTED mixins storage$accessMode {}
declare class storage$accessMode__PRIVATE mixins storage$accessMode {}


declare function storage$set(
key: string,
value: any,
storage$accessMode?: storage$accessMode,
tappIds?: number[]): Promise<any>


declare function storage$get(key: string, storage$accessMode?: storage$accessMode): any


declare function storage$remove(key: string, storage$accessMode?: storage$accessMode): Promise<any>

	
/**
 * Getting Started
 * chayns
 * interfaces
 */
declare interface RegisterConfig {
strictMode?: boolean,
appName?: string,
cssPrefix?: string,
callbackPrefix?: string,
initialHeight?: number,
autoResize?: boolean
} 
	
/**
 * Basic Functions
 * chayns
 * interfaces
 */
declare interface GetUserConfig {
accessToken?: string,
userId?: number,
fbId?: string,
user$personId?: string
} 
	declare interface User {
FacebookID: string,
FirstName: string,
LastName: string,
PersonID: string,
UserFullName: string,
UserID: number
} 
	declare interface UacGroup {
tapp$id: number,
browser$name: string,
tapp$showName: string
} 
	declare interface InteractionIdentificationConfig {
duration: number,
delay?: number,
callback: any,
resetOnInteraction?: boolean,
foregroundColor: string,
backgroundColor?: string
} 
	declare interface NetworkChangeResult {
isConnected: boolean,
type: number
} 
	declare interface NfcDetectionResult {
connected: boolean,
rfid: string
} 
	declare interface SelectTappConfig {
tapp$id?: number,
tapp$internalName?: string,
tapp$showName?: string,
position?: number
} 
	declare interface OpenUrlConfig {
site$url: string,
site$title?: string,
exclusiveView?: boolean,
darkenBackground?: boolean,
fullSize?: boolean,
width?: number
} 
	declare interface GeoLocationResult {
longitude: number,
latitude: number
} 
	declare interface LocationBeacon {
tapp$id: number,
pushMessage: string,
latitude: number,
longitude: number
} 
	declare interface BeaconHistory {
tapp$id: number,
timestamp: number
} 
	declare interface ShareConfig {
site$title?: string,
text: string,
imageUrl?: string,
sharingApp: number,
sharingAndroidApp?: string
} 
	declare interface UpdateNavigationConfig {
stateOnly?: boolean,
updateTapp?: boolean
} 
	declare interface SpeechToTextResult {
languageCode: string,
text: string[]
} 
	declare interface SubTappConfig {
tappID: number,
browser$name: string,
site$color: string,
colorText?: string,
sortID: number,
icon: string,
callbackURL(result: any): any,
site$url: string,
buttonName: string,
tapp$isExclusiveView?: boolean,
replaceParent?: boolean,
boldText?: boolean
} 
	declare interface RemoveSubTappConfig {
tappID: number,
close: boolean,
storage$remove: boolean
} 
	declare interface SetHeightConfig {
height: number,
growOnly?: boolean,
full?: boolean,
fullViewport?: boolean
} 
	declare interface Site {
appstoreName: string,
user$facebookId: string,
siteId: string,
site$locationId: number
} 
	
/**
 * Basic Functions
 * chayns.intercom
 * interfaces
 */
declare interface IntercomConfig {
text: string
} 
	
/**
 * UI Functions
 * chayns.dialog
 * interfaces
 */
declare interface DialogButton {
text: string,
dialog$buttonType: chayns$dialog.dialog$buttonType
} 
	declare interface DialogDateConfig {
dialog$dateType: chayns$dialog.dialog$dateType,
preSelect?: Date,
minDate?: Date,
maxDate?: Date
} 
	declare interface DialogDateResult {
timestamp: number,
dialog$buttonType: chayns$dialog.dialog$buttonType
} 
	declare interface DialogSelectConfig {
site$title: string,
message?: string,
quickfind?: boolean,
multiselect?: boolean,
buttons?: any[],
list: DialogSelectConfigItem[]
} 
	declare interface DialogSelectConfigItem {
browser$name: string,
value?: string,
image?: string,
isSelected?: boolean
} 
	declare interface DialogSelectResult {
dialog$buttonType: chayns$dialog.dialog$buttonType,
selection: DialogSelectResultItem[]
} 
	declare interface DialogSelectResultItem {
browser$name: string,
value?: string
} 
	declare interface DialogInputConfig {
site$title: string,
message?: string,
placeholderText?: string,
text?: string,
buttons?: DialogButton[]
} 
	declare interface DialogInputResult {
dialog$buttonType: chayns$dialog.dialog$buttonType,
text: string
} 
	
/**
 * UI Functions
 * chayns.ui.modeswitch
 * interfaces
 */
declare interface ModeSwitchConfig {
items: ModeSwitchItem[],
callback(result: ModeSwitchItem): void,
headline?: string,
preventclose?: boolean
} 
	declare interface ModeSwitchItem {
browser$name: string,
value: number,
default?: boolean
} 
	
/**
 * UI Functions
 * Floating Button
 * chayns
 * interfaces
 */
declare interface FloatingConfig {
text?: string,
site$color?: string,
colorText?: string,
icon?: string
} 
	
/**
 * Media Functions
 * Miscellaneous
 * chayns
 * interfaces
 */
declare interface SaveAppointmentConfig {
browser$name: string,
location: string,
description: string,
start: Date,
end: Date
} 
	
/**
 * Utility Functions
 * Miscellaneous
 * chayns.utils
 * interfaces
 */
declare interface JwtPaylod {
FacebookUserID: string,
FirstName: string,
LastName: string,
PersonID: string,
LocationID: number,
TobitUserID: number,
LoginType: number,
isAdmin: boolean
} 
	
/**
 * Enviroment Variables
 * User
 * interfaces
 */
declare interface UserGroup {
tapp$id: number,
isActive?: boolean,
isSystemGroup?: boolean,
browser$name: string,
tapp$showName?: string
} 
	
/**
 * Enviroment Variables
 * Site
 * interfaces
 */
declare interface SiteTapp {
tapp$customUrl: string,
tapp$id: number,
tapp$internalName: string,
tapp$isExclusiveView: boolean,
tapp$isKioskMode: boolean,
tapp$isSubTapp: boolean,
tapp$showName: string,
tapp$sortId: number,
tapp$userGroupIds: number[]
} 
	declare interface GlobalData {
_result: any
} 
	declare interface DialogFacebookOptions {
site$title: string,
message?: string,
quickfind?: number,
multiselect?: number,
button?: DialogFacebookButton[],
preSelected: number[]
} 
	declare interface DialogFacebookButton {
text: string,
value: number
} 
	declare interface DialogFacebookResult {
dialog$buttonType: number,
selection: DialogFacebookResultSelection[]
} 
	declare interface DialogFacebookResultSelection {
first_name: string,
last_name: string,
tapp$id: string,
gender: string,
browser$name: string
} 
	declare interface UiTooltipInitConfig {
tooltipClass: string,
preventAnimation: boolean
} 
    }
