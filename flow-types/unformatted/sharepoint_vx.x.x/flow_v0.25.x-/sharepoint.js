declare module 'sharepoint' {
        declare var _spBodyOnLoadFunctions: Array<() => void>;
	declare var _spBodyOnLoadFunctionNames: string[];
	declare var _spBodyOnLoadCalled: boolean;
	declare function ExecuteOrDelayUntilBodyLoaded(initFunc: () => void): void

	declare function ExecuteOrDelayUntilScriptLoaded(func: () => void, depScriptFileName: string): boolean

	declare function ExecuteOrDelayUntilEventNotified(func: (...args: any[]) => void, eventName: string): boolean

	declare var Strings: any;
	declare  class Sods {
  constructor(...args: empty): mixed;
static +missing: Class<Sods__missing> & Sods__missing & 1;// 1
static +loading: Class<Sods__loading> & Sods__loading & 2;// 2
static +pending: Class<Sods__pending> & Sods__pending & 3;// 3
static +loaded: Class<Sods__loaded> & Sods__loaded & 4;// 4
static +error: Class<Sods__error> & Sods__error & 5;// 5

}

declare class Sods__missing mixins Sods {}
declare class Sods__loading mixins Sods {}
declare class Sods__pending mixins Sods {}
declare class Sods__loaded mixins Sods {}
declare class Sods__error mixins Sods {}

	declare interface Sod {
url: string,
key: string,
loaded: boolean,
depkeys?: string[],
state: Sods,
qfn?: any[],
reset?: boolean
} 
	declare var _v_dictSod: {
[address: string]: Sod
};
	
      declare var npm$namespace$SP: {
        
        SOD: typeof SP$SOD,
      }
declare interface SP$SOD {
execute(fileName: string, functionName: string, ...args: any[]): void,
executeFunc(fileName: string, typeName: string, fn: () => void): void,
executeOrDelayUntilEventNotified(func: (...args: any[]) => void, eventName: string): boolean,
executeOrDelayUntilScriptLoaded(func: () => void, depScriptFileName: string): boolean,
notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName: string): void,
notifyEventAndExecuteWaitingJobs(eventName: string, args?: any[]): void,
registerSod(fileName: string, url: string): void,
registerSodDep(fileName: string, dependentFileName: string): void,
loadMultiple(keys: string[], fn: () => void, bSync?: boolean): void,
delayUntilEventNotified(func: (...args: any[]) => void, eventName: string): void,
get_prefetch(): boolean,
set_prefetch(value: boolean): void,
get_ribbonImagePrefetchEnabled(): boolean,
set_ribbonImagePrefetchEnabled(value: boolean): void
} 

declare var SP$SOD: SP$SOD;

declare  class SP$ListLevelPermissionMask {
  constructor(...args: empty): mixed;
static +viewListItems: Class<SP$ListLevelPermissionMask__viewListItems> & SP$ListLevelPermissionMask__viewListItems & 0;// 0
static +insertListItems: Class<SP$ListLevelPermissionMask__insertListItems> & SP$ListLevelPermissionMask__insertListItems & 1;// 1
static +editListItems: Class<SP$ListLevelPermissionMask__editListItems> & SP$ListLevelPermissionMask__editListItems & 2;// 2
static +deleteListItems: Class<SP$ListLevelPermissionMask__deleteListItems> & SP$ListLevelPermissionMask__deleteListItems & 3;// 3
static +approveItems: Class<SP$ListLevelPermissionMask__approveItems> & SP$ListLevelPermissionMask__approveItems & 4;// 4
static +openItems: Class<SP$ListLevelPermissionMask__openItems> & SP$ListLevelPermissionMask__openItems & 5;// 5
static +viewVersions: Class<SP$ListLevelPermissionMask__viewVersions> & SP$ListLevelPermissionMask__viewVersions & 6;// 6
static +deleteVersions: Class<SP$ListLevelPermissionMask__deleteVersions> & SP$ListLevelPermissionMask__deleteVersions & 7;// 7
static +breakCheckout: Class<SP$ListLevelPermissionMask__breakCheckout> & SP$ListLevelPermissionMask__breakCheckout & 8;// 8
static +managePersonalViews: Class<SP$ListLevelPermissionMask__managePersonalViews> & SP$ListLevelPermissionMask__managePersonalViews & 9;// 9
static +manageLists: Class<SP$ListLevelPermissionMask__manageLists> & SP$ListLevelPermissionMask__manageLists & 10;// 10

}

declare class SP$ListLevelPermissionMask__viewListItems mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__insertListItems mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__editListItems mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__deleteListItems mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__approveItems mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__openItems mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__viewVersions mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__deleteVersions mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__breakCheckout mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__managePersonalViews mixins SP$ListLevelPermissionMask {}
declare class SP$ListLevelPermissionMask__manageLists mixins SP$ListLevelPermissionMask {}


declare class SP$HtmlBuilder  {
constructor(): this;
addAttribute(name: string, value: string): void;
addCssClass(cssClassName: string): void;
addCommunitiesCssClass(cssClassName: string): void;
renderBeginTag(tagName: string): void;
renderEndTag(): void;
write(s: string): void;
writeEncoded(s: string): void;
toString(): string
}

declare class SP$ScriptHelpers  {
static disableWebpartSelection(context: SPClientTemplates$SPClientTemplates$RenderContext): void;
static getDocumentQueryPairs(): {
[index: string]: string
};
static getFieldFromSchema(
schema: SPClientTemplates$SPClientTemplates$ListSchema,
fieldName: string): SPClientTemplates$SPClientTemplates$FieldSchema;
static getLayoutsPageUrl(pageName: string, webServerRelativeUrl: string): string;
static getListLevelPermissionMask(jsonItem: string): number;
static getTextAreaElementValue(textAreaElement: HTMLTextAreaElement): string;
static getUrlQueryPairs(docUrl: string): {
[index: string]: string
};
static getUserFieldProperty(item: SP$ListItem, fieldName: string, propertyName: string): any;
static hasPermission(
listPermissionMask: number,
listPermission: SP$ListLevelPermissionMask): boolean;
static newGuid(): SP$SP$Guid;
static isNullOrEmptyString(str: string): boolean;
static isNullOrUndefined(obj: any): boolean;
static isNullOrUndefinedOrEmpty(str: string): boolean;
static isUndefined(obj: any): boolean;
static replaceOrAddQueryString(url: string, key: string, value: string): string;
static removeHtml(str: string): string;
static removeStyleChildren(element: HTMLElement): void;
static removeHtmlAndTrimStringWithEllipsis(str: string, maxLength: number): string;
static setTextAreaElementValue(textAreaElement: HTMLTextAreaElement, newValue: string): void;
static truncateToInt(n: number): number;
static urlCombine(path1: string, path2: string): string;
static resizeImageToSquareLength(imgElement: HTMLImageElement, squareLength: number): void
}

declare class SP$PageContextInfo  {
constructor(): this;
static get_siteServerRelativeUrl(): string;
static get_webServerRelativeUrl(): string;
static get_webAbsoluteUrl(): string;
static get_serverRequestPath(): string;
static get_siteAbsoluteUrl(): string;
static get_webTitle(): string;
static get_tenantAppVersion(): string;
static get_isAppWeb(): boolean;
static get_webLogoUrl(): string;
static get_webLanguage(): number;
static get_currentLanguage(): number;
static get_pageItemId(): number;
static get_pageListId(): string;
static get_webPermMasks(): {
High: number,
Low: number
};
static get_currentCultureName(): string;
static get_currentUICultureName(): string;
static get_clientServerTimeDelta(): number;
static get_userLoginName(): string;
static get_webTemplate(): string;
static get_pagePersonalizationScope(): string
}

declare class SP$ContextPermissions  {
has(perm: number): boolean;
hasPermissions(high: number, low: number): boolean;
fromJson(json: {
High: number,
Low: number
}): void
}


      declare var npm$namespace$ViewOperation: {
        getSelectedView: typeof ViewOperation$getSelectedView,
navigateUp: typeof ViewOperation$navigateUp,
refreshView: typeof ViewOperation$refreshView,
        
      }
declare function ViewOperation$getSelectedView(): string


declare function ViewOperation$navigateUp(viewId: string): void


declare function ViewOperation$refreshView(viewId: string): void



      declare var npm$namespace$Selection: {
        selectListItem: typeof Selection$selectListItem,
getSelectedItems: typeof Selection$getSelectedItems,
getSelectedList: typeof Selection$getSelectedList,
getSelectedView: typeof Selection$getSelectedView,
navigateUp: typeof Selection$navigateUp,
deselectAllListItems: typeof Selection$deselectAllListItems,
        
      }
declare function Selection$selectListItem(iid: string, bSelect: boolean): void


declare function Selection$getSelectedItems(): Array<{
id: number,
fsObjType: SP$FileSystemObjectType
}>


declare function Selection$getSelectedList(): string


declare function Selection$getSelectedView(): string


declare function Selection$navigateUp(viewId: string): void


declare function Selection$deselectAllListItems(iid: string): void



      declare var npm$namespace$Overrides: {
        overrideDeleteConfirmation: typeof Overrides$overrideDeleteConfirmation,
        
      }
declare function Overrides$overrideDeleteConfirmation(listId: string, overrideText: string): void


declare  class SP$RequestExecutorErrors {
  constructor(...args: empty): mixed;
static +requestAbortedOrTimedout: Class<SP$RequestExecutorErrors__requestAbortedOrTimedout> & SP$RequestExecutorErrors__requestAbortedOrTimedout & 0;// 0
static +unexpectedResponse: Class<SP$RequestExecutorErrors__unexpectedResponse> & SP$RequestExecutorErrors__unexpectedResponse & 1;// 1
static +httpError: Class<SP$RequestExecutorErrors__httpError> & SP$RequestExecutorErrors__httpError & 2;// 2
static +noAppWeb: Class<SP$RequestExecutorErrors__noAppWeb> & SP$RequestExecutorErrors__noAppWeb & 3;// 3
static +domainDoesNotMatch: Class<SP$RequestExecutorErrors__domainDoesNotMatch> & SP$RequestExecutorErrors__domainDoesNotMatch & 4;// 4
static +noTrustedOrigins: Class<SP$RequestExecutorErrors__noTrustedOrigins> & SP$RequestExecutorErrors__noTrustedOrigins & 5;// 5
static +iFrameLoadError: Class<SP$RequestExecutorErrors__iFrameLoadError> & SP$RequestExecutorErrors__iFrameLoadError & 6;// 6

}

declare class SP$RequestExecutorErrors__requestAbortedOrTimedout mixins SP$RequestExecutorErrors {}
declare class SP$RequestExecutorErrors__unexpectedResponse mixins SP$RequestExecutorErrors {}
declare class SP$RequestExecutorErrors__httpError mixins SP$RequestExecutorErrors {}
declare class SP$RequestExecutorErrors__noAppWeb mixins SP$RequestExecutorErrors {}
declare class SP$RequestExecutorErrors__domainDoesNotMatch mixins SP$RequestExecutorErrors {}
declare class SP$RequestExecutorErrors__noTrustedOrigins mixins SP$RequestExecutorErrors {}
declare class SP$RequestExecutorErrors__iFrameLoadError mixins SP$RequestExecutorErrors {}


declare class SP$RequestExecutor  {
constructor(url: string, options?: any): this;
get_formDigestHandlingEnabled(): boolean;
set_formDigestHandlingEnabled(value: boolean): void;
get_iFrameSourceUrl(): string;
set_iFrameSourceUrl(value: string): void;
executeAsync(requestInfo: SP$RequestInfo): void;
attemptLogin(
returnUrl: string,
success: (response: SP$ResponseInfo) => void,
error?: (
response: SP$ResponseInfo,
error: SP$RequestExecutorErrors,
statusText: string) => void): void
}

declare interface SP$RequestInfo {
url: string,
method?: string,
headers?: {
[key: string]: string
},

/**
 * Can be string or bytearray depending on binaryStringRequestBody field
 */
body?: string | Uint8Array,
binaryStringRequestBody?: boolean,

/**
 * Currently need fix to get ginary response. Details: http:// techmikael.blogspot.ru/2013/07/how-to-copy-files-between-sites-using.html
 */
binaryStringResponseBody?: boolean,
timeout?: number,
success?: (response: SP$ResponseInfo) => void,
error?: (
response: SP$ResponseInfo,
error: SP$RequestExecutorErrors,
statusText: string) => void,
state?: any
} 

declare interface SP$ResponseInfo {
statusCode?: number,
statusText?: string,
responseAvailable: boolean,
allResponseHeaders?: string,
headers?: {
[key: string]: string
},
contentType?: string,

/**
 * Can be string or bytearray depending on request.binaryStringResponseBody field
 */
body?: string | Uint8Array,
state?: any
} 

declare class SP$ProxyWebRequestExecutor mixins undefined.WebRequestExecutor {
constructor(url: string, options?: any): this
}

declare class SP$ProxyWebRequestExecutorFactory mixins SP$SP$IWebRequestExecutorFactory {
constructor(url: string, options?: any): this;
createWebRequestExecutor(): SP$ProxyWebRequestExecutor
}

declare class SP$ScriptUtility  {
static isNullOrEmptyString(str: string): boolean;
static isNullOrUndefined(obj: any): boolean;
static isUndefined(obj: any): boolean;
static truncateToInt(n: number): number
}

declare class SP$Guid  {
constructor(guidText: string): this;
static get_empty(): SP$SP$Guid;
static newGuid(): SP$SP$Guid;
static isValid(uuid: string): boolean;
toString(format?: string): string;
equals(uuid: SP$SP$Guid): boolean;
ToSerialized(): string
}


/**
 * Specifies permissions that are used to define user roles. Represents SPBasePermissions class.
 */
declare  class SP$PermissionKind {
  constructor(...args: empty): mixed;
static +emptyMask: Class<SP$PermissionKind__emptyMask> & SP$PermissionKind__emptyMask & 0;// 0
static +viewListItems: Class<SP$PermissionKind__viewListItems> & SP$PermissionKind__viewListItems & 1;// 1
static +addListItems: Class<SP$PermissionKind__addListItems> & SP$PermissionKind__addListItems & 2;// 2
static +editListItems: Class<SP$PermissionKind__editListItems> & SP$PermissionKind__editListItems & 3;// 3
static +deleteListItems: Class<SP$PermissionKind__deleteListItems> & SP$PermissionKind__deleteListItems & 4;// 4
static +approveItems: Class<SP$PermissionKind__approveItems> & SP$PermissionKind__approveItems & 5;// 5
static +openItems: Class<SP$PermissionKind__openItems> & SP$PermissionKind__openItems & 6;// 6
static +viewVersions: Class<SP$PermissionKind__viewVersions> & SP$PermissionKind__viewVersions & 7;// 7
static +deleteVersions: Class<SP$PermissionKind__deleteVersions> & SP$PermissionKind__deleteVersions & 8;// 8
static +cancelCheckout: Class<SP$PermissionKind__cancelCheckout> & SP$PermissionKind__cancelCheckout & 9;// 9
static +managePersonalViews: Class<SP$PermissionKind__managePersonalViews> & SP$PermissionKind__managePersonalViews & 10;// 10
static +manageLists: Class<SP$PermissionKind__manageLists> & SP$PermissionKind__manageLists & 11;// 11
static +viewFormPages: Class<SP$PermissionKind__viewFormPages> & SP$PermissionKind__viewFormPages & 12;// 12
static +anonymousSearchAccessList: Class<SP$PermissionKind__anonymousSearchAccessList> & SP$PermissionKind__anonymousSearchAccessList & 13;// 13
static +open: Class<SP$PermissionKind__open> & SP$PermissionKind__open & 14;// 14
static +viewPages: Class<SP$PermissionKind__viewPages> & SP$PermissionKind__viewPages & 15;// 15
static +addAndCustomizePages: Class<SP$PermissionKind__addAndCustomizePages> & SP$PermissionKind__addAndCustomizePages & 16;// 16
static +applyThemeAndBorder: Class<SP$PermissionKind__applyThemeAndBorder> & SP$PermissionKind__applyThemeAndBorder & 17;// 17
static +applyStyleSheets: Class<SP$PermissionKind__applyStyleSheets> & SP$PermissionKind__applyStyleSheets & 18;// 18
static +viewUsageData: Class<SP$PermissionKind__viewUsageData> & SP$PermissionKind__viewUsageData & 19;// 19
static +createSSCSite: Class<SP$PermissionKind__createSSCSite> & SP$PermissionKind__createSSCSite & 20;// 20
static +manageSubwebs: Class<SP$PermissionKind__manageSubwebs> & SP$PermissionKind__manageSubwebs & 21;// 21
static +createGroups: Class<SP$PermissionKind__createGroups> & SP$PermissionKind__createGroups & 22;// 22
static +managePermissions: Class<SP$PermissionKind__managePermissions> & SP$PermissionKind__managePermissions & 23;// 23
static +browseDirectories: Class<SP$PermissionKind__browseDirectories> & SP$PermissionKind__browseDirectories & 24;// 24
static +browseUserInfo: Class<SP$PermissionKind__browseUserInfo> & SP$PermissionKind__browseUserInfo & 25;// 25
static +addDelPrivateWebParts: Class<SP$PermissionKind__addDelPrivateWebParts> & SP$PermissionKind__addDelPrivateWebParts & 26;// 26
static +updatePersonalWebParts: Class<SP$PermissionKind__updatePersonalWebParts> & SP$PermissionKind__updatePersonalWebParts & 27;// 27
static +manageWeb: Class<SP$PermissionKind__manageWeb> & SP$PermissionKind__manageWeb & 28;// 28
static +anonymousSearchAccessWebLists: Class<SP$PermissionKind__anonymousSearchAccessWebLists> & SP$PermissionKind__anonymousSearchAccessWebLists & 29;// 29
static +useClientIntegration: Class<SP$PermissionKind__useClientIntegration> & SP$PermissionKind__useClientIntegration & 30;// 30
static +useRemoteAPIs: Class<SP$PermissionKind__useRemoteAPIs> & SP$PermissionKind__useRemoteAPIs & 31;// 31
static +manageAlerts: Class<SP$PermissionKind__manageAlerts> & SP$PermissionKind__manageAlerts & 32;// 32
static +createAlerts: Class<SP$PermissionKind__createAlerts> & SP$PermissionKind__createAlerts & 33;// 33
static +editMyUserInfo: Class<SP$PermissionKind__editMyUserInfo> & SP$PermissionKind__editMyUserInfo & 34;// 34
static +enumeratePermissions: Class<SP$PermissionKind__enumeratePermissions> & SP$PermissionKind__enumeratePermissions & 35;// 35
static +fullMask: Class<SP$PermissionKind__fullMask> & SP$PermissionKind__fullMask & 36;// 36

}

declare class SP$PermissionKind__emptyMask mixins SP$PermissionKind {}
declare class SP$PermissionKind__viewListItems mixins SP$PermissionKind {}
declare class SP$PermissionKind__addListItems mixins SP$PermissionKind {}
declare class SP$PermissionKind__editListItems mixins SP$PermissionKind {}
declare class SP$PermissionKind__deleteListItems mixins SP$PermissionKind {}
declare class SP$PermissionKind__approveItems mixins SP$PermissionKind {}
declare class SP$PermissionKind__openItems mixins SP$PermissionKind {}
declare class SP$PermissionKind__viewVersions mixins SP$PermissionKind {}
declare class SP$PermissionKind__deleteVersions mixins SP$PermissionKind {}
declare class SP$PermissionKind__cancelCheckout mixins SP$PermissionKind {}
declare class SP$PermissionKind__managePersonalViews mixins SP$PermissionKind {}
declare class SP$PermissionKind__manageLists mixins SP$PermissionKind {}
declare class SP$PermissionKind__viewFormPages mixins SP$PermissionKind {}
declare class SP$PermissionKind__anonymousSearchAccessList mixins SP$PermissionKind {}
declare class SP$PermissionKind__open mixins SP$PermissionKind {}
declare class SP$PermissionKind__viewPages mixins SP$PermissionKind {}
declare class SP$PermissionKind__addAndCustomizePages mixins SP$PermissionKind {}
declare class SP$PermissionKind__applyThemeAndBorder mixins SP$PermissionKind {}
declare class SP$PermissionKind__applyStyleSheets mixins SP$PermissionKind {}
declare class SP$PermissionKind__viewUsageData mixins SP$PermissionKind {}
declare class SP$PermissionKind__createSSCSite mixins SP$PermissionKind {}
declare class SP$PermissionKind__manageSubwebs mixins SP$PermissionKind {}
declare class SP$PermissionKind__createGroups mixins SP$PermissionKind {}
declare class SP$PermissionKind__managePermissions mixins SP$PermissionKind {}
declare class SP$PermissionKind__browseDirectories mixins SP$PermissionKind {}
declare class SP$PermissionKind__browseUserInfo mixins SP$PermissionKind {}
declare class SP$PermissionKind__addDelPrivateWebParts mixins SP$PermissionKind {}
declare class SP$PermissionKind__updatePersonalWebParts mixins SP$PermissionKind {}
declare class SP$PermissionKind__manageWeb mixins SP$PermissionKind {}
declare class SP$PermissionKind__anonymousSearchAccessWebLists mixins SP$PermissionKind {}
declare class SP$PermissionKind__useClientIntegration mixins SP$PermissionKind {}
declare class SP$PermissionKind__useRemoteAPIs mixins SP$PermissionKind {}
declare class SP$PermissionKind__manageAlerts mixins SP$PermissionKind {}
declare class SP$PermissionKind__createAlerts mixins SP$PermissionKind {}
declare class SP$PermissionKind__editMyUserInfo mixins SP$PermissionKind {}
declare class SP$PermissionKind__enumeratePermissions mixins SP$PermissionKind {}
declare class SP$PermissionKind__fullMask mixins SP$PermissionKind {}


declare class SP$BaseCollection<T> mixins IEnumerable<T> {
getEnumerator(): IEnumerator<T>;
get_count(): number;
itemAtIndex(index: number): T;
constructor(): this
}

declare interface SP$IFromJson {
fromJson(initValue: any): void,
customFromJson(initValue: any): boolean
} 

declare class SP$Base64EncodedByteArray  {
constructor(base64Str?: string): this;
get_length(): number;
toBase64String(): string;
append(b: any): void;
getByteAt(index: number): any;
setByteAt(index: number, b: any): void
}

declare class SP$ConditionalScopeBase  {
startScope(): any;
startIfTrue(): any;
startIfFalse(): any;
get_testResult(): boolean;
fromJson(initValue: any): void;
customFromJson(initValue: any): boolean
}

declare class SP$ClientObjectPropertyConditionalScope mixins SP$SP$ConditionalScopeBase {
constructor(clientObject: SP$SP$ClientObject, propertyName: string, comparisonOperator: string, valueToCompare: any, allowAllActions?: boolean): this
}

declare class SP$ClientResult<T>  {
get_value(): T;
setValue(value: T): void;
constructor(): this
}

declare class SP$BooleanResult  {
get_value(): boolean;
constructor(): this
}

declare class SP$CharResult  {
get_value(): any;
constructor(): this
}

declare class SP$IntResult  {
get_value(): number;
constructor(): this
}

declare class SP$DoubleResult  {
get_value(): number;
constructor(): this
}

declare class SP$StringResult  {
get_value(): string;
constructor(): this
}

declare class SP$DateTimeResult  {
get_value(): Date;
constructor(): this
}

declare class SP$GuidResult  {
get_value(): SP$SP$Guid;
constructor(): this
}

declare class SP$JsonObjectResult  {
get_value(): any;
constructor(): this
}

declare class SP$ClientDictionaryResultHandler<T>  {
constructor(dict: SP$SP$ClientResult<T>): this
}

declare class SP$ClientUtility  {
static urlPathEncodeForXmlHttpRequest(url: string): string;
static getOrCreateObjectPathForConstructor(
context: SP$SP$ClientRuntimeContext,
typeId: string,
args: any[]): SP$SP$ObjectPath
}

declare class SP$XElement  {
get_name(): string;
set_name(value: string): void;
get_attributes(): any;
set_attributes(value: any): void;
get_children(): any;
set_children(value: any): void;
constructor(): this
}

declare class SP$ClientXElement  {
get_element(): SP$SP$XElement;
set_element(value: SP$SP$XElement): void;
constructor(): this
}

declare class SP$ClientXDocument  {
get_root(): SP$SP$XElement;
set_root(value: SP$SP$XElement): void;
constructor(): this
}

declare class SP$DataConvert  {
static writePropertiesToXml(
writer: SP$SP$XmlWriter,
obj: any,
propNames: string[],
serializationContext: SP$SP$SerializationContext): void;
static populateDictionaryFromObject(dict: any, parentNode: any): void;
static fixupTypes(context: SP$SP$ClientRuntimeContext, dict: any): void;
static populateArray(context: SP$SP$ClientRuntimeContext, dest: any, jsonArrayFromServer: any): void;
static fixupType(context: SP$SP$ClientRuntimeContext, obj: any): any;
static writeDictionaryToXml(
writer: SP$SP$XmlWriter,
dict: any,
topLevelElementTagName: string,
keys: any,
serializationContext: SP$SP$SerializationContext): void;
static writeValueToXmlElement(
writer: SP$SP$XmlWriter,
objValue: any,
serializationContext: SP$SP$SerializationContext): void;
static invokeSetProperty(obj: any, propName: string, propValue: any): void;
static invokeGetProperty(obj: any, propName: string): any;
static specifyDateTimeKind(datetime: Date, kind: SP$Srch$DateTimeKind): void;
static getDateTimeKind(datetime: Date): SP$Srch$DateTimeKind;
static createUnspecifiedDateTime(
year: number,
month: number,
day: number,
hour: number,
minute: number,
second: number,
milliseconds: number): Date;
static createUtcDateTime(milliseconds: number): Date;
static createLocalDateTime(milliseconds: number): Date
}

declare interface SP$IWebRequestExecutorFactory {
createWebRequestExecutor(): Sys.Net.WebRequestExecutor
} 

declare class SP$PageRequestFailedEventArgs mixins Sys.EventArgs {
get_executor(): Sys.Net.WebRequestExecutor;
get_errorMessage(): string;
get_isErrorPage(): boolean
}

declare class SP$PageRequestSucceededEventArgs mixins Sys.EventArgs {
get_executor(): Sys.Net.WebRequestExecutor
}

declare class SP$PageRequest  {
get_request(): Sys.Net.WebRequest;
get_url(): string;
set_url(value: string): void;
get_expectedContentType(): string;
set_expectedContentType(value: string): void;
post(body: string): void;
get(): void;
static doPost(
url: string,
body: string,
expectedContentType: string,
succeededHandler: (sender: any, args: SP$SP$PageRequestSucceededEventArgs) => void,
failedHandler: (sender: any, args: SP$SP$PageRequestFailedEventArgs) => void): void;
static doGet(
url: string,
expectedContentType: string,
succeededHandler: (sender: any, args: SP$SP$PageRequestSucceededEventArgs) => void,
failedHandler: (sender: any, args: SP$SP$PageRequestFailedEventArgs) => void): void;
add_succeeded(value: (sender: any, args: SP$SP$PageRequestSucceededEventArgs) => void): void;
remove_succeeded(value: (sender: any, args: SP$SP$PageRequestSucceededEventArgs) => void): void;
add_failed(value: (sender: any, args: SP$SP$PageRequestFailedEventArgs) => void): void;
remove_failed(value: (sender: any, args: SP$SP$PageRequestFailedEventArgs) => void): void;
constructor(): this
}

declare class SP$ResResources  {
static getString(resourceId: string, args: any[]): string
}


/**
 * Defines a writer that provides a set of methods to append text in XML format. Use the static SP.XmlWriter.create(sb) Method to create an SP.XmlWriter object with the Sys.StringBuilder object you pass in.
 */
declare class SP$XmlWriter  {

/**
 * Creates a new instance of the XmlWriter class with the specified string builder.
 */
static create(sb: Sys.StringBuilder): SP$SP$XmlWriter;

/**
 * Appends a start element tag with the specified name in XML format to the object?s string builder.
 */
writeStartElement(tagName: string): void;

/**
 * Appends an element with the specified tag name and value in XML format to the string builder.
 */
writeElementString(tagName: string, value: string): void;

/**
 * Appends an end element tag in XML format to the object?s string builder. This method appends the end element tag ?/>? if the start element tag is not closed; otherwise, it appends a full end element tag ?</tagName>? to the string builder.
 */
writeEndElement(): void;

/**
 * Appends an attribute with the specified name and value in XML format to the object?s string builder.
 */
writeAttributeString(localName: string, value: string): void;

/**
 * This method only appends the name of the attribute. You can append the value of the attribute by calling the SP.XmlWriter.writeString(value) Method, and close the attribute by calling the SP.XmlWriter.writeEndAttribute() Method.
 */
writeStartAttribute(localName: string): void;

/**
 * Appends an end of an attribute in XML format to the object?s string builder.
 */
writeEndAttribute(): void;

/**
 * Appends the specified value for an element tag or attribute to the object?s string builder.
 */
writeString(value: string): void;

/**
 * Appends the specified text to the object?s string builder.
 */
writeRaw(xml: string): void;

/**
 * This member is reserved for internal use and is not intended to be used directly from your code.
 */
close(): void
}

declare class SP$ClientConstants  {
AddExpandoFieldTypeSuffix: string;
Actions: string;
ApplicationName: string;
Body: string;
CatchScope: string;
ChildItemQuery: string;
ChildItems: string;
ConditionalScope: string;
Constructor: string;
Context: string;
ErrorInfo: string;
ErrorMessage: string;
ErrorStackTrace: string;
ErrorCode: string;
ErrorTypeName: string;
ErrorValue: string;
ErrorDetails: string;
ErrorTraceCorrelationId: string;
SP$ExceptionHandlingScope: string;
ExceptionHandlingScopeSimple: string;
QueryableExpression: string;
FinallyScope: string;
HasException: string;
Id: string;
Identity: string;
IfFalseScope: string;
IfTrueScope: string;
IsNull: string;
LibraryVersion: string;
TraceCorrelationId: string;
Count: string;
Method: string;
Methods: string;
Name: string;
SPAnimation$Object: string;
ObjectPathId: string;
SP$ObjectPath: string;
ObjectPaths: string;
ObjectType: string;
ObjectIdentity: string;
SP$ObjectIdentityQuery: string;
ObjectVersion: string;
Parameter: string;
JsGridControl$Parameters: string;
ParentId: string;
Processed: string;
JsGrid$Property: string;
Properties: string;
Query$Query: string;
QueryResult: string;
Request: string;
Results: string;
ScalarProperty: string;
SchemaVersion: string;
ScopeId: string;
SelectAll: string;
SelectAllProperties: string;
SetProperty: string;
SetStaticProperty: string;
StaticMethod: string;
StaticProperty: string;
SuffixChar: string;
SuffixByte: string;
SuffixInt16: string;
SuffixUInt16: string;
SuffixInt32: string;
SuffixUInt32: string;
SuffixInt64: string;
SuffixUInt64: string;
SuffixSingle: string;
SuffixDouble: string;
SuffixDecimal: string;
SuffixTimeSpan: string;
SuffixArray: string;
Test: string;
TryScope: string;
WidgetControl$Type: string;
TypeId: string;
Update: string;
Version: string;
XmlElementName: string;
XmlElementAttributes: string;
XmlElementChildren: string;
XmlNamespace: string;
FieldValuesMethodName: string;
RequestTokenHeader: string;
FormDigestHeader: string;
useWebLanguageHeader: string;
useWebLanguageHeaderValue: string;
ClientTagHeader: string;
TraceCorrelationIdRequestHeader: string;
TraceCorrelationIdResponseHeader: string;
greaterThan: string;
lessThan: string;
equal: string;
notEqual: string;
greaterThanOrEqual: string;
lessThanOrEqual: string;
andAlso: string;
orElse: string;
not: string;
expressionParameter: string;
expressionProperty: string;
expressionStaticProperty: string;
expressionMethod: string;
expressionStaticMethod: string;
expressionConstant: string;
expressionConvert: string;
expressionTypeIs: string;
ofType: string;
take: string;
where: string;
orderBy: string;
orderByDescending: string;
thenBy: string;
thenByDescending: string;
queryableObject: string;
ServiceFileName: string;
ServiceMethodName: string;
fluidApplicationInitParamUrl: string;
fluidApplicationInitParamViaUrl: string;
fluidApplicationInitParamRequestToken: string;
fluidApplicationInitParamFormDigestTimeoutSeconds: string;
fluidApplicationInitParamFormDigest: string
}

declare class SP$ClientSchemaVersions  {
version14: string;
version15: string;
currentVersion: string
}

declare class SP$ClientErrorCodes  {
genericError: number;
accessDenied: number;
docAlreadyExists: number;
versionConflict: number;
listItemDeleted: number;
invalidFieldValue: number;
notSupported: number;
redirect: number;
notSupportedRequestVersion: number;
fieldValueFailedValidation: number;
itemValueFailedValidation: number
}

declare class SP$ClientAction  {
get_id(): number;
get_path(): SP$SP$ObjectPath;
get_name(): string
}

declare class SP$ClientActionSetProperty mixins SP$SP$ClientAction {
constructor(obj: SP$SP$ClientObject, propName: string, propValue: any): this
}

declare class SP$ClientActionSetStaticProperty mixins SP$SP$ClientAction {
constructor(context: SP$SP$ClientRuntimeContext, typeId: string, propName: string, propValue: any): this
}

declare class SP$ClientActionInvokeMethod mixins SP$SP$ClientAction {
constructor(obj: SP$SP$ClientObject, methodName: string, parameters: any[]): this
}

declare class SP$ClientActionInvokeStaticMethod mixins SP$SP$ClientAction {
constructor(context: SP$SP$ClientRuntimeContext, typeId: string, methodName: string, parameters: any[]): this
}

declare class SP$ClientObject  {
constructor(context: SP$SP$ClientRuntimeContext, objectPath: SP$SP$ObjectPath): this;
get_context(): SP$SP$ClientRuntimeContext;
get_path(): SP$SP$ObjectPath;
get_objectVersion(): string;
set_objectVersion(value: string): void;
fromJson(initValue: any): void;
customFromJson(initValue: any): boolean;
refreshLoad(): void;
retrieve(propertyNames?: string[]): void;
isPropertyAvailable(propertyName: string): boolean;
isObjectPropertyInstantiated(propertyName: string): boolean;
get_serverObjectIsNull(): boolean;
get_typedObject(): SP$SP$ClientObject;
initPropertiesFromJson(initValue: any): void;
checkUninitializedProperty(propName: string): void
}

declare class SP$ClientObjectData  {
get_properties(): any;
get_clientObjectProperties(): any;
get_methodReturnObjects(): any;
constructor(): this
}


/**
 * Provides a base class for a collection of objects on a remote client.
 */
declare class SP$ClientObjectCollection<T> mixins SP$SP$ClientObject, IEnumerable<T> {
constructor(): this;
get_areItemsAvailable(): boolean;

/**
 * Gets the data for all of the items in the collection.
 */
retrieveItems(): SP$SP$ClientObjectPrototype;

/**
 * Returns an enumerator that iterates through the collection.
 */
getEnumerator(): IEnumerator<T>;

/**
 * Returns number of items in the collection.
 */
get_count(): number;
get_data(): T[];
addChild(obj: T): void;
getItemAtIndex(index: number): T;
fromJson(obj: any): void
}

declare class SP$ClientObjectList<T> mixins SP$SP$ClientObjectCollection<T> {
constructor(context: SP$SP$ClientRuntimeContext, objectPath: SP$SP$ObjectPath, childItemType: any): this;
fromJson(initValue: any): void;
customFromJson(initValue: any): boolean
}

declare class SP$ClientObjectPrototype  {
retrieve(propertyNames?: string[]): void;
retrieveObject(propertyName: string): SP$SP$ClientObjectPrototype;
retrieveCollectionObject(propertyName: string): SP$SP$ClientObjectCollectionPrototype
}

declare class SP$ClientObjectCollectionPrototype mixins SP$SP$ClientObjectPrototype {
retrieveItems(): SP$SP$ClientObjectPrototype
}

declare  class SP$ClientRequestStatus {
  constructor(...args: empty): mixed;
static +active: Class<SP$ClientRequestStatus__active> & SP$ClientRequestStatus__active & 0;// 0
static +inProgress: Class<SP$ClientRequestStatus__inProgress> & SP$ClientRequestStatus__inProgress & 1;// 1
static +completedSuccess: Class<SP$ClientRequestStatus__completedSuccess> & SP$ClientRequestStatus__completedSuccess & 2;// 2
static +completedException: Class<SP$ClientRequestStatus__completedException> & SP$ClientRequestStatus__completedException & 3;// 3

}

declare class SP$ClientRequestStatus__active mixins SP$ClientRequestStatus {}
declare class SP$ClientRequestStatus__inProgress mixins SP$ClientRequestStatus {}
declare class SP$ClientRequestStatus__completedSuccess mixins SP$ClientRequestStatus {}
declare class SP$ClientRequestStatus__completedException mixins SP$ClientRequestStatus {}


declare class SP$WebRequestEventArgs mixins Sys.EventArgs {
constructor(webRequest: Sys.Net.WebRequest): this;
get_webRequest(): Sys.Net.WebRequest
}

declare class SP$ClientRequest  {
static get_nextSequenceId(): number;
get_webRequest(): Sys.Net.WebRequest;
add_requestSucceeded(
value: (sender: any, args: SP$SP$ClientRequestSucceededEventArgs) => void): void;
remove_requestSucceeded(
value: (sender: any, args: SP$SP$ClientRequestSucceededEventArgs) => void): void;
add_requestFailed(value: (sender: any, args: SP$SP$ClientRequestFailedEventArgs) => void): void;
remove_requestFailed(value: (sender: any, args: SP$SP$ClientRequestFailedEventArgs) => void): void;
get_navigateWhenServerRedirect(): boolean;
set_navigateWhenServerRedirect(value: boolean): void
}

declare class SP$ClientRequestEventArgs mixins Sys.EventArgs {
get_request(): SP$SP$ClientRequest
}

declare class SP$ClientRequestFailedEventArgs mixins SP$SP$ClientRequestEventArgs {
constructor(request: SP$SP$ClientRequest, message: string, stackTrace: string, errorCode: number, errorValue: string, errorTypeName: string, errorDetails: any, errorTraceCorrelationId?: string): this;
get_message(): string;
get_stackTrace(): string;
get_errorCode(): number;
get_errorValue(): string;
get_errorTypeName(): string;
get_errorDetails(): any;
get_errorTraceCorrelationId(): string
}

declare class SP$ClientRequestSucceededEventArgs mixins SP$SP$ClientRequestEventArgs {}

declare class SP$ClientRuntimeContext mixins Sys.IDisposable {
constructor(serverRelativeUrlOrFullUrl: string): this;
get_url(): string;
get_viaUrl(): string;
set_viaUrl(value: string): void;
get_formDigestHandlingEnabled(): boolean;
set_formDigestHandlingEnabled(value: boolean): void;
get_applicationName(): string;
set_applicationName(value: string): void;
get_clientTag(): string;
set_clientTag(value: string): void;
get_webRequestExecutorFactory(): SP$SP$IWebRequestExecutorFactory;
set_webRequestExecutorFactory(value: SP$SP$IWebRequestExecutorFactory): void;
get_pendingRequest(): SP$SP$ClientRequest;
get_hasPendingRequest(): boolean;
add_executingWebRequest(value: (sender: any, args: SP$SP$WebRequestEventArgs) => void): void;
remove_executingWebRequest(value: (sender: any, args: SP$SP$WebRequestEventArgs) => void): void;
add_requestSucceeded(
value: (sender: any, args: SP$SP$ClientRequestSucceededEventArgs) => void): void;
remove_requestSucceeded(
value: (sender: any, args: SP$SP$ClientRequestSucceededEventArgs) => void): void;
add_requestFailed(value: (sender: any, args: SP$SP$ClientRequestFailedEventArgs) => void): void;
remove_requestFailed(value: (sender: any, args: SP$SP$ClientRequestFailedEventArgs) => void): void;
add_beginningRequest(value: (sender: any, args: SP$SP$ClientRequestEventArgs) => void): void;
remove_beginningRequest(value: (sender: any, args: SP$SP$ClientRequestEventArgs) => void): void;
get_requestTimeout(): number;
set_requestTimeout(value: number): void;
executeQueryAsync(
succeededCallback?: (sender: any, args: SP$SP$ClientRequestSucceededEventArgs) => void,
failedCallback?: (sender: any, args: SP$SP$ClientRequestFailedEventArgs) => void): void;
get_staticObjects(): any;
castTo(obj: SP$SP$ClientObject, type: any): SP$SP$ClientObject;
addQuery(query: SP$SP$ClientAction): void;
addQueryIdAndResultObject(id: number, obj: any): void;
parseObjectFromJsonString(json: string, skipTypeFixup?: boolean): any;
load(clientObject: SP$SP$ClientObject, ...exps: string[]): void;
loadQuery<T>(clientObjectCollection: SP$SP$ClientObjectCollection<T>, exp?: string): any;
get_serverSchemaVersion(): string;
get_serverLibraryVersion(): string;
get_traceCorrelationId(): string;
set_traceCorrelationId(value: string): void;
dispose(): void
}

declare class SP$SimpleDataTable  {
get_rows(): any[];
constructor(): this
}

declare class SP$ClientValueObject  {
fromJson(obj: any): void;
customFromJson(obj: any): boolean;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
customWriteToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): boolean;
get_typeId(): string
}

declare class SP$ClientValueObjectCollection<T> mixins SP$SP$ClientValueObject, IEnumerable<T> {
get_count(): number;
getEnumerator(): IEnumerator<T>;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void
}

declare class SP$ExceptionHandlingScope  {
constructor(context: SP$SP$ClientRuntimeContext): this;
startScope(): any;
startTry(): any;
startCatch(): any;
startFinally(): any;
get_processed(): boolean;
get_hasException(): boolean;
get_errorMessage(): string;
get_serverStackTrace(): string;
get_serverErrorCode(): number;
get_serverErrorValue(): string;
get_serverErrorTypeName(): string;
get_serverErrorDetails(): any
}

declare class SP$ObjectIdentityQuery mixins SP$SP$ClientAction {
constructor(objectPath: SP$SP$ObjectPath): this
}

declare class SP$ObjectPath  {
setPendingReplace(): void
}

declare class SP$ObjectPathProperty mixins SP$SP$ObjectPath {
constructor(context: SP$SP$ClientRuntimeContext, parent: SP$SP$ObjectPath, propertyName: string): this
}

declare class SP$ObjectPathStaticProperty mixins SP$SP$ObjectPath {
constructor(context: SP$SP$ClientRuntimeContext, typeId: string, propertyName: string): this
}

declare class SP$ObjectPathMethod mixins SP$SP$ObjectPath {
constructor(context: SP$SP$ClientRuntimeContext, parent: SP$SP$ObjectPath, methodName: string, parameters: any[]): this
}

declare class SP$ObjectPathStaticMethod mixins SP$SP$ObjectPath {
constructor(context: SP$SP$ClientRuntimeContext, typeId: string, methodName: string, parameters: any[]): this
}

declare class SP$ObjectPathConstructor mixins SP$SP$ObjectPath {
constructor(context: SP$SP$ClientRuntimeContext, typeId: string, parameters: any[]): this
}

declare class SP$SerializationContext  {
addClientObject(obj: SP$SP$ClientObject): void;
addObjectPath(path: SP$SP$ObjectPath): void
}

declare class SP$ResourceStrings  {
argumentExceptionMessage: string;
argumentNullExceptionMessage: string;
cC_AppIconAlt: string;
cC_AppWebUrlNotSet: string;
cC_ArrowImageAlt: string;
cC_BackToSite: string;
cC_ErrorGettingThemeInfo: string;
cC_HelpLinkToolTip: string;
cC_HostSiteUrlNotSet: string;
cC_InvalidArgument: string;
cC_InvalidJSON: string;
cC_InvalidOperation: string;
cC_PlaceHolderElementNotFound: string;
cC_RequiredScriptNotLoaded: string;
cC_SendFeedback: string;
cC_SettingsLinkToolTip: string;
cC_TimeoutGettingThemeInfo: string;
cC_Welcome: string;
cannotFindContextWebServerRelativeUrl: string;
collectionHasNotBeenInitialized: string;
collectionModified: string;
invalidUsageOfConditionalScope: string;
invalidUsageOfConditionalScopeNowAllowedAction: string;
invalidUsageOfExceptionHandlingScope: string;
namedPropertyHasNotBeenInitialized: string;
namedServerObjectIsNull: string;
noObjectPathAssociatedWithObject: string;
notSameClientContext: string;
notSupportedQueryExpressionWithExpressionDetail: string;
objectNameIdentity: string;
objectNameMethod: string;
objectNameProperty: string;
objectNameType: string;
propertyHasNotBeenInitialized: string;
rE_BrowserBinaryDataNotSupported: string;
rE_BrowserNotSupported: string;
rE_CannotAccessSite: string;
rE_CannotAccessSiteCancelled: string;
rE_CannotAccessSiteOpenWindowFailed: string;
rE_DismissOpenWindowMessageLinkText: string;
rE_DomainDoesNotMatch: string;
rE_FixitHelpMessage: string;
rE_InvalidArgumentOrField: string;
rE_InvalidOperation: string;
rE_NoTrustedOrigins: string;
rE_OpenWindowButtonText: string;
rE_OpenWindowMessage: string;
rE_RequestAbortedOrTimedout: string;
rE_RequestUnexpectedResponse: string;
rE_RequestUnexpectedResponseWithContentTypeAndStatus: string;
requestAbortedOrTimedOut: string;
requestEmptyQueryName: string;
requestHasBeenExecuted: string;
requestUnexpectedResponse: string;
requestUnexpectedResponseWithContentTypeAndStatus: string;
requestUnexpectedResponseWithStatus: string;
requestUnknownResponse: string;
serverObjectIsNull: string;
unknownError: string;
unknownResponseData: string
}

declare class SP$RuntimeRes  {
cC_PlaceHolderElementNotFound: string;
rE_CannotAccessSiteOpenWindowFailed: string;
noObjectPathAssociatedWithObject: string;
cC_TimeoutGettingThemeInfo: string;
unknownResponseData: string;
requestUnexpectedResponseWithStatus: string;
objectNameProperty: string;
requestUnknownResponse: string;
rE_RequestUnexpectedResponseWithContentTypeAndStatus: string;
rE_BrowserNotSupported: string;
argumentExceptionMessage: string;
namedServerObjectIsNull: string;
objectNameType: string;
requestUnexpectedResponseWithContentTypeAndStatus: string;
cC_InvalidJSON: string;
invalidUsageOfExceptionHandlingScope: string;
serverObjectIsNull: string;
cC_AppWebUrlNotSet: string;
rE_OpenWindowMessage: string;
argumentNullExceptionMessage: string;
cC_HelpLinkToolTip: string;
propertyHasNotBeenInitialized: string;
rE_RequestAbortedOrTimedout: string;
invalidUsageOfConditionalScope: string;
cC_ErrorGettingThemeInfo: string;
rE_DismissOpenWindowMessageLinkText: string;
rE_CannotAccessSiteCancelled: string;
objectNameIdentity: string;
cC_HostSiteUrlNotSet: string;
rE_FixitHelpMessage: string;
notSupportedQueryExpressionWithExpressionDetail: string;
rE_RequestUnexpectedResponse: string;
rE_DomainDoesNotMatch: string;
cC_BackToSite: string;
rE_NoTrustedOrigins: string;
rE_InvalidOperation: string;
collectionModified: string;
cC_Welcome: string;
cC_AppIconAlt: string;
cC_SendFeedback: string;
cC_ArrowImageAlt: string;
cC_InvalidOperation: string;
requestAbortedOrTimedOut: string;
invalidUsageOfConditionalScopeNowAllowedAction: string;
cannotFindContextWebServerRelativeUrl: string;
rE_OpenWindowButtonText: string;
unknownError: string;
cC_InvalidArgument: string;
rE_InvalidArgumentOrField: string;
cC_SettingsLinkToolTip: string;
requestEmptyQueryName: string;
cC_RequiredScriptNotLoaded: string;
rE_CannotAccessSite: string;
notSameClientContext: string;
requestUnexpectedResponse: string;
rE_BrowserBinaryDataNotSupported: string;
collectionHasNotBeenInitialized: string;
namedPropertyHasNotBeenInitialized: string;
requestHasBeenExecuted: string;
objectNameMethod: string
}

declare class SP$ParseJSONUtil  {
static parseObjectFromJsonString(json: string): any;
static validateJson(text: string): boolean
}

declare  class SP$DateTimeKind {
  constructor(...args: empty): mixed;
static +unspecified: Class<SP$DateTimeKind__unspecified> & SP$DateTimeKind__unspecified & 0;// 0
static +utc: Class<SP$DateTimeKind__utc> & SP$DateTimeKind__utc & 1;// 1
static +local: Class<SP$DateTimeKind__local> & SP$DateTimeKind__local & 2;// 2

}

declare class SP$DateTimeKind__unspecified mixins SP$DateTimeKind {}
declare class SP$DateTimeKind__utc mixins SP$DateTimeKind {}
declare class SP$DateTimeKind__local mixins SP$DateTimeKind {}


declare class SP$OfficeVersion  {
majorBuildVersion: number;
previousMajorBuildVersion: number;
majorVersion: string;
previousVersion: string;
majorVersionDotZero: string;
previousVersionDotZero: string;
assemblyVersion: string;
wssMajorVersion: string
}

declare class SP$ClientContext mixins SP$SP$ClientRuntimeContext {
constructor(serverRelativeUrlOrFullUrl?: string): this;
get_web(): SP$SP$Web;
get_site(): SP$SP$Site;
get_serverVersion(): string;
static get_current(): SP$SP$ClientContext
}

declare  class SP$ULSTraceLevel {
  constructor(...args: empty): mixed;
static +verbose: Class<SP$ULSTraceLevel__verbose> & SP$ULSTraceLevel__verbose & 0;// 0

}

declare class SP$ULSTraceLevel__verbose mixins SP$ULSTraceLevel {}



/**
 * Provides a Unified Logging Service (ULS) that monitors log messages.
 */
declare class SP$ULS  {

/**
 * Gets a value that indicates whether the Unified Logging Service (ULS) is enabled.
 */
static get_enabled(): boolean;

/**
 * Sets a value that indicates whether the Unified Logging Service (ULS) is enabled.
 */
static set_enabled(value: boolean): void;

/**
 * Logs the specified debug message.
 * This method logs the message with a time stamp. If any log messages are pending, this method also logs them. If the message cannot be logged, the message is added to the list of pending log messages.
 */
static log(debugMessage: string): void;

/**
 * Increases the indentation for subsequent log messages.
 */
static increaseIndent(): void;

/**
 * Decreases the indentation for subsequent log messages.
 */
static decreaseIndent(): void;

/**
 * Traces when the function was entered.
 */
static traceApiEnter(functionName: string, args?: any[]): void;

/**
 * Traces when the function has finished.
 */
static traceApiLeave(): void
}

declare class SP$AccessRequests  {
static changeRequestStatus(
context: SP$SP$ClientRuntimeContext,
itemId: number,
newStatus: number,
convStr: string,
permType: string,
permissionLevel: number): void;
static changeRequestStatusBulk(
context: SP$SP$ClientRuntimeContext,
requestIds: number[],
newStatus: number): void
}

declare  class SP$AddFieldOptions {
  constructor(...args: empty): mixed;
static +defaultValue: Class<SP$AddFieldOptions__defaultValue> & SP$AddFieldOptions__defaultValue & 0;// 0
static +addToDefaultContentType: Class<SP$AddFieldOptions__addToDefaultContentType> & SP$AddFieldOptions__addToDefaultContentType & 1;// 1
static +addToNoContentType: Class<SP$AddFieldOptions__addToNoContentType> & SP$AddFieldOptions__addToNoContentType & 2;// 2
static +addToAllContentTypes: Class<SP$AddFieldOptions__addToAllContentTypes> & SP$AddFieldOptions__addToAllContentTypes & 3;// 3
static +addFieldInternalNameHint: Class<SP$AddFieldOptions__addFieldInternalNameHint> & SP$AddFieldOptions__addFieldInternalNameHint & 4;// 4
static +addFieldToDefaultView: Class<SP$AddFieldOptions__addFieldToDefaultView> & SP$AddFieldOptions__addFieldToDefaultView & 5;// 5
static +addFieldCheckDisplayName: Class<SP$AddFieldOptions__addFieldCheckDisplayName> & SP$AddFieldOptions__addFieldCheckDisplayName & 6;// 6

}

declare class SP$AddFieldOptions__defaultValue mixins SP$AddFieldOptions {}
declare class SP$AddFieldOptions__addToDefaultContentType mixins SP$AddFieldOptions {}
declare class SP$AddFieldOptions__addToNoContentType mixins SP$AddFieldOptions {}
declare class SP$AddFieldOptions__addToAllContentTypes mixins SP$AddFieldOptions {}
declare class SP$AddFieldOptions__addFieldInternalNameHint mixins SP$AddFieldOptions {}
declare class SP$AddFieldOptions__addFieldToDefaultView mixins SP$AddFieldOptions {}
declare class SP$AddFieldOptions__addFieldCheckDisplayName mixins SP$AddFieldOptions {}


declare class SP$AlternateUrl mixins SP$SP$ClientObject {
get_uri(): string;
get_urlZone(): SP$SP$UrlZone
}

declare class SP$App mixins SP$SP$ClientObject {
get_assetId(): string;
get_contentMarket(): string;
get_versionString(): string
}

declare class SP$AppCatalog  {
static getAppInstances(
context: SP$SP$ClientRuntimeContext,
web: SP$SP$Web): SP$SP$ClientObjectList<SP$SP$AppInstance>;
static getDeveloperSiteAppInstancesByIds(
context: SP$SP$ClientRuntimeContext,
site: SP$SP$Site,
appInstanceIds: SP$SP$Guid[]): SP$SP$ClientObjectList<SP$SP$AppInstance>;
static isAppSideloadingEnabled(context: SP$SP$ClientRuntimeContext): SP$SP$BooleanResult
}

declare class SP$AppContextSite mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext, siteUrl: string): this;
get_site(): SP$SP$Site;
get_web(): SP$SP$Web;
static newObject(context: SP$SP$ClientRuntimeContext, siteUrl: string): SP$SP$AppContextSite
}

declare class SP$AppInstance mixins SP$SP$ClientObject {
get_appPrincipalId(): string;
get_appWebFullUrl(): string;
get_id(): SP$SP$Guid;
get_inError(): boolean;
get_startPage(): string;
get_remoteAppUrl(): string;
get_settingsPageUrl(): string;
get_siteId(): SP$SP$Guid;
get_status(): SP$SP$AppInstanceStatus;
get_title(): string;
get_webId(): SP$SP$Guid;
getErrorDetails(): SP$SP$ClientObjectList<SP$SP$AppInstanceErrorDetails>;
uninstall(): SP$SP$GuidResult;
upgrade(appPackageStream: SP$SP$Base64EncodedByteArray): void;
cancelAllJobs(): SP$SP$BooleanResult;
install(): SP$SP$GuidResult;
getPreviousAppVersion(): SP$SP$App;
retryAllJobs(): void
}

declare class SP$AppInstanceErrorDetails mixins SP$SP$ClientObject {
get_correlationId(): SP$SP$Guid;
set_correlationId(value: SP$SP$Guid): void;
get_errorDetail(): string;
get_errorType(): SP$SP$AppInstanceErrorType;
set_errorType(value: SP$SP$AppInstanceErrorType): void;
get_errorTypeName(): string;
get_exceptionMessage(): string;
get_source(): SP$SP$AppInstanceErrorSource;
set_source(value: SP$SP$AppInstanceErrorSource): void;
get_sourceName(): string
}

declare  class SP$AppInstanceErrorSource {
  constructor(...args: empty): mixed;
static +common: Class<SP$AppInstanceErrorSource__common> & SP$AppInstanceErrorSource__common & 0;// 0
static +appWeb: Class<SP$AppInstanceErrorSource__appWeb> & SP$AppInstanceErrorSource__appWeb & 1;// 1
static +parentWeb: Class<SP$AppInstanceErrorSource__parentWeb> & SP$AppInstanceErrorSource__parentWeb & 2;// 2
static +remoteWebSite: Class<SP$AppInstanceErrorSource__remoteWebSite> & SP$AppInstanceErrorSource__remoteWebSite & 3;// 3
static +database: Class<SP$AppInstanceErrorSource__database> & SP$AppInstanceErrorSource__database & 4;// 4
static +officeExtension: Class<SP$AppInstanceErrorSource__officeExtension> & SP$AppInstanceErrorSource__officeExtension & 5;// 5
static +eventCallouts: Class<SP$AppInstanceErrorSource__eventCallouts> & SP$AppInstanceErrorSource__eventCallouts & 6;// 6
static +finalization: Class<SP$AppInstanceErrorSource__finalization> & SP$AppInstanceErrorSource__finalization & 7;// 7

}

declare class SP$AppInstanceErrorSource__common mixins SP$AppInstanceErrorSource {}
declare class SP$AppInstanceErrorSource__appWeb mixins SP$AppInstanceErrorSource {}
declare class SP$AppInstanceErrorSource__parentWeb mixins SP$AppInstanceErrorSource {}
declare class SP$AppInstanceErrorSource__remoteWebSite mixins SP$AppInstanceErrorSource {}
declare class SP$AppInstanceErrorSource__database mixins SP$AppInstanceErrorSource {}
declare class SP$AppInstanceErrorSource__officeExtension mixins SP$AppInstanceErrorSource {}
declare class SP$AppInstanceErrorSource__eventCallouts mixins SP$AppInstanceErrorSource {}
declare class SP$AppInstanceErrorSource__finalization mixins SP$AppInstanceErrorSource {}


declare  class SP$AppInstanceErrorType {
  constructor(...args: empty): mixed;
static +transient: Class<SP$AppInstanceErrorType__transient> & SP$AppInstanceErrorType__transient & 0;// 0
static +configuration: Class<SP$AppInstanceErrorType__configuration> & SP$AppInstanceErrorType__configuration & 1;// 1
static +app: Class<SP$AppInstanceErrorType__app> & SP$AppInstanceErrorType__app & 2;// 2

}

declare class SP$AppInstanceErrorType__transient mixins SP$AppInstanceErrorType {}
declare class SP$AppInstanceErrorType__configuration mixins SP$AppInstanceErrorType {}
declare class SP$AppInstanceErrorType__app mixins SP$AppInstanceErrorType {}


declare  class SP$AppInstanceStatus {
  constructor(...args: empty): mixed;
static +invalidStatus: Class<SP$AppInstanceStatus__invalidStatus> & SP$AppInstanceStatus__invalidStatus & 0;// 0
static +installing: Class<SP$AppInstanceStatus__installing> & SP$AppInstanceStatus__installing & 1;// 1
static +canceling: Class<SP$AppInstanceStatus__canceling> & SP$AppInstanceStatus__canceling & 2;// 2
static +uninstalling: Class<SP$AppInstanceStatus__uninstalling> & SP$AppInstanceStatus__uninstalling & 3;// 3
static +installed: Class<SP$AppInstanceStatus__installed> & SP$AppInstanceStatus__installed & 4;// 4
static +upgrading: Class<SP$AppInstanceStatus__upgrading> & SP$AppInstanceStatus__upgrading & 5;// 5
static +initialized: Class<SP$AppInstanceStatus__initialized> & SP$AppInstanceStatus__initialized & 6;// 6
static +upgradeCanceling: Class<SP$AppInstanceStatus__upgradeCanceling> & SP$AppInstanceStatus__upgradeCanceling & 7;// 7
static +disabling: Class<SP$AppInstanceStatus__disabling> & SP$AppInstanceStatus__disabling & 8;// 8
static +disabled: Class<SP$AppInstanceStatus__disabled> & SP$AppInstanceStatus__disabled & 9;// 9

}

declare class SP$AppInstanceStatus__invalidStatus mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__installing mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__canceling mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__uninstalling mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__installed mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__upgrading mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__initialized mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__upgradeCanceling mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__disabling mixins SP$AppInstanceStatus {}
declare class SP$AppInstanceStatus__disabled mixins SP$AppInstanceStatus {}


declare class SP$AppLicense mixins SP$SP$ClientValueObject {
get_rawXMLLicenseToken(): string;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$AppLicenseCollection mixins SP$SP$ClientValueObjectCollection<SP$AppLicense> {
add(item: SP$SP$AppLicense): void;
get_item(index: number): SP$SP$AppLicense;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$AppLicenseType {
  constructor(...args: empty): mixed;
static +perpetualMultiUser: Class<SP$AppLicenseType__perpetualMultiUser> & SP$AppLicenseType__perpetualMultiUser & 0;// 0
static +perpetualAllUsers: Class<SP$AppLicenseType__perpetualAllUsers> & SP$AppLicenseType__perpetualAllUsers & 1;// 1
static +trialMultiUser: Class<SP$AppLicenseType__trialMultiUser> & SP$AppLicenseType__trialMultiUser & 2;// 2
static +trialAllUsers: Class<SP$AppLicenseType__trialAllUsers> & SP$AppLicenseType__trialAllUsers & 3;// 3

}

declare class SP$AppLicenseType__perpetualMultiUser mixins SP$AppLicenseType {}
declare class SP$AppLicenseType__perpetualAllUsers mixins SP$AppLicenseType {}
declare class SP$AppLicenseType__trialMultiUser mixins SP$AppLicenseType {}
declare class SP$AppLicenseType__trialAllUsers mixins SP$AppLicenseType {}


declare class SP$Attachment mixins SP$SP$ClientObject {
get_fileName(): string;
get_serverRelativeUrl(): string;
deleteObject(): void
}

declare type SP$AttachmentCollection = {
itemAt(index: number): SP$SP$Attachment,
get_item(index: number): SP$SP$Attachment,
getByFileName(fileName: string): SP$SP$Attachment
} & SP$SP$ClientObjectCollection<SP$Attachment>


declare class SP$AttachmentCreationInformation mixins SP$SP$ClientValueObject {
get_contentStream(): SP$SP$Base64EncodedByteArray;
set_contentStream(value: SP$SP$Base64EncodedByteArray): void;
get_fileName(): string;
set_fileName(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$BasePermissions mixins SP$SP$ClientValueObject {
set(perm: SP$SP$PermissionKind): void;
clear(perm: SP$SP$PermissionKind): void;
clearAll(): void;
has(perm: SP$SP$PermissionKind): boolean;
equals(perm: SP$SP$BasePermissions): boolean;
hasPermissions(high: number, low: number): boolean;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}


/**
 * Specifies the base type for a list.
 */
declare  class SP$BaseType {
  constructor(...args: empty): mixed;
static +none: Class<SP$BaseType__none> & SP$BaseType__none & 0;// 0
static +genericList: Class<SP$BaseType__genericList> & SP$BaseType__genericList & 1;// 1
static +documentLibrary: Class<SP$BaseType__documentLibrary> & SP$BaseType__documentLibrary & 2;// 2
static +unused: Class<SP$BaseType__unused> & SP$BaseType__unused & 3;// 3
static +discussionBoard: Class<SP$BaseType__discussionBoard> & SP$BaseType__discussionBoard & 4;// 4
static +survey: Class<SP$BaseType__survey> & SP$BaseType__survey & 5;// 5
static +issue: Class<SP$BaseType__issue> & SP$BaseType__issue & 6;// 6

}

declare class SP$BaseType__none mixins SP$BaseType {}
declare class SP$BaseType__genericList mixins SP$BaseType {}
declare class SP$BaseType__documentLibrary mixins SP$BaseType {}
declare class SP$BaseType__unused mixins SP$BaseType {}
declare class SP$BaseType__discussionBoard mixins SP$BaseType {}
declare class SP$BaseType__survey mixins SP$BaseType {}
declare class SP$BaseType__issue mixins SP$BaseType {}


declare  class SP$BrowserFileHandling {
  constructor(...args: empty): mixed;
static +permissive: Class<SP$BrowserFileHandling__permissive> & SP$BrowserFileHandling__permissive & 0;// 0
static +strict: Class<SP$BrowserFileHandling__strict> & SP$BrowserFileHandling__strict & 1;// 1

}

declare class SP$BrowserFileHandling__permissive mixins SP$BrowserFileHandling {}
declare class SP$BrowserFileHandling__strict mixins SP$BrowserFileHandling {}


declare  class SP$CalendarType {
  constructor(...args: empty): mixed;
static +none: Class<SP$CalendarType__none> & SP$CalendarType__none & 0;// 0
static +gregorian: Class<SP$CalendarType__gregorian> & SP$CalendarType__gregorian & 1;// 1
static +japan: Class<SP$CalendarType__japan> & SP$CalendarType__japan & 2;// 2
static +taiwan: Class<SP$CalendarType__taiwan> & SP$CalendarType__taiwan & 3;// 3
static +korea: Class<SP$CalendarType__korea> & SP$CalendarType__korea & 4;// 4
static +hijri: Class<SP$CalendarType__hijri> & SP$CalendarType__hijri & 5;// 5
static +thai: Class<SP$CalendarType__thai> & SP$CalendarType__thai & 6;// 6
static +hebrew: Class<SP$CalendarType__hebrew> & SP$CalendarType__hebrew & 7;// 7
static +gregorianMEFrench: Class<SP$CalendarType__gregorianMEFrench> & SP$CalendarType__gregorianMEFrench & 8;// 8
static +gregorianArabic: Class<SP$CalendarType__gregorianArabic> & SP$CalendarType__gregorianArabic & 9;// 9
static +gregorianXLITEnglish: Class<SP$CalendarType__gregorianXLITEnglish> & SP$CalendarType__gregorianXLITEnglish & 10;// 10
static +gregorianXLITFrench: Class<SP$CalendarType__gregorianXLITFrench> & SP$CalendarType__gregorianXLITFrench & 11;// 11
static +koreaJapanLunar: Class<SP$CalendarType__koreaJapanLunar> & SP$CalendarType__koreaJapanLunar & 12;// 12
static +chineseLunar: Class<SP$CalendarType__chineseLunar> & SP$CalendarType__chineseLunar & 13;// 13
static +sakaEra: Class<SP$CalendarType__sakaEra> & SP$CalendarType__sakaEra & 14;// 14
static +umAlQura: Class<SP$CalendarType__umAlQura> & SP$CalendarType__umAlQura & 15;// 15

}

declare class SP$CalendarType__none mixins SP$CalendarType {}
declare class SP$CalendarType__gregorian mixins SP$CalendarType {}
declare class SP$CalendarType__japan mixins SP$CalendarType {}
declare class SP$CalendarType__taiwan mixins SP$CalendarType {}
declare class SP$CalendarType__korea mixins SP$CalendarType {}
declare class SP$CalendarType__hijri mixins SP$CalendarType {}
declare class SP$CalendarType__thai mixins SP$CalendarType {}
declare class SP$CalendarType__hebrew mixins SP$CalendarType {}
declare class SP$CalendarType__gregorianMEFrench mixins SP$CalendarType {}
declare class SP$CalendarType__gregorianArabic mixins SP$CalendarType {}
declare class SP$CalendarType__gregorianXLITEnglish mixins SP$CalendarType {}
declare class SP$CalendarType__gregorianXLITFrench mixins SP$CalendarType {}
declare class SP$CalendarType__koreaJapanLunar mixins SP$CalendarType {}
declare class SP$CalendarType__chineseLunar mixins SP$CalendarType {}
declare class SP$CalendarType__sakaEra mixins SP$CalendarType {}
declare class SP$CalendarType__umAlQura mixins SP$CalendarType {}



/**
 * Specifies a Collaborative Application Markup Language (CAML) query on a list.
 */
declare class SP$CamlQuery mixins SP$SP$ClientValueObject {
constructor(): this;

/**
 * This method creates a Collaborative Application Markup Language (CAML) string
 * that can be used to recursively get all of the items in a list, including
 * the items in the subfolders.
 */
static createAllItemsQuery(): SP$SP$CamlQuery;

/**
 * This method creates a Collaborative Application Markup Language (CAML) string
 * that can be used to recursively get all of the folders in a list, including
 * the subfolders.
 */
static createAllFoldersQuery(): SP$SP$CamlQuery;

/**
 * Returns true if the query returns dates in Coordinated Universal Time (UTC) format.
 */
get_datesInUtc(): boolean;

/**
 * Sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format.
 */
set_datesInUtc(value: boolean): void;

/**
 * Server relative URL of a list folder from which results will be returned.
 */
get_folderServerRelativeUrl(): string;

/**
 * Sets a value that specifies the server relative URL of a list folder from which results will be returned.
 */
set_folderServerRelativeUrl(value: string): void;
get_listItemCollectionPosition(): SP$SP$ListItemCollectionPosition;

/**
 * Sets a value that specifies the information required to get the next page of data for the list view.
 */
set_listItemCollectionPosition(value: SP$SP$ListItemCollectionPosition): void;

/**
 * Gets value that specifies the XML schema that defines the list view.
 */
get_viewXml(): string;

/**
 * Sets value that specifies the XML schema that defines the list view. It must be null, empty, or an XML fragment that conforms to the ViewDefinition type.
 */
set_viewXml(value: string): void;

/**
 * This member is reserved for internal use and is not intended to be used directly from your code.
 */
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void
}

declare class SP$Change mixins SP$SP$ClientObject {
get_changeToken(): SP$SP$ChangeToken;
get_changeType(): SP$SP$ChangeType;
get_siteId(): SP$SP$Guid;
get_time(): Date
}

declare class SP$ChangeAlert mixins SP$SP$Change {
get_alertId(): SP$SP$Guid;
get_webId(): SP$SP$Guid
}

declare type SP$ChangeCollection = {
itemAt(index: number): SP$SP$Change,
get_item(index: number): SP$SP$Change
} & SP$SP$ClientObjectCollection<SP$Change>


declare class SP$ChangeContentType mixins SP$SP$Change {
get_contentTypeId(): SP$SP$ContentTypeId;
get_webId(): SP$SP$Guid
}

declare class SP$ChangeField mixins SP$SP$Change {
get_fieldId(): SP$SP$Guid;
get_webId(): SP$SP$Guid
}

declare class SP$ChangeFile mixins SP$SP$Change {
get_uniqueId(): SP$SP$Guid;
get_webId(): SP$SP$Guid
}

declare class SP$ChangeFolder mixins SP$SP$Change {
get_uniqueId(): SP$SP$Guid;
get_webId(): SP$SP$Guid
}

declare class SP$ChangeGroup mixins SP$SP$Change {
get_groupId(): number
}

declare class SP$ChangeItem mixins SP$SP$Change {
get_itemId(): number;
get_listId(): SP$SP$Guid;
get_webId(): SP$SP$Guid
}

declare class SP$ChangeList mixins SP$SP$Change {
get_listId(): SP$SP$Guid;
get_webId(): SP$SP$Guid
}

declare class SP$ChangeLogItemQuery mixins SP$SP$ClientValueObject {
get_changeToken(): string;
set_changeToken(value: string): void;
get_contains(): string;
set_contains(value: string): void;
get_query(): string;
set_query(value: string): void;
get_queryOptions(): string;
set_queryOptions(value: string): void;
get_rowLimit(): string;
set_rowLimit(value: string): void;
get_viewFields(): string;
set_viewFields(value: string): void;
get_viewName(): string;
set_viewName(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$ChangeQuery mixins SP$SP$ClientValueObject {
constructor(): this;
constructor(allChangeObjectTypes: boolean, allChangeTypes: boolean): this;
get_add(): boolean;
set_add(value: boolean): void;
get_alert(): boolean;
set_alert(value: boolean): void;
get_changeTokenEnd(): SP$SP$ChangeToken;
set_changeTokenEnd(value: SP$SP$ChangeToken): void;
get_changeTokenStart(): SP$SP$ChangeToken;
set_changeTokenStart(value: SP$SP$ChangeToken): void;
get_contentType(): boolean;
set_contentType(value: boolean): void;
get_deleteObject(): boolean;
set_deleteObject(value: boolean): void;
get_field(): boolean;
set_field(value: boolean): void;
get_file(): boolean;
set_file(value: boolean): void;
get_folder(): boolean;
set_folder(value: boolean): void;
get_group(): boolean;
set_group(value: boolean): void;
get_groupMembershipAdd(): boolean;
set_groupMembershipAdd(value: boolean): void;
get_groupMembershipDelete(): boolean;
set_groupMembershipDelete(value: boolean): void;
get_item(): boolean;
set_item(value: boolean): void;
get_list(): boolean;
set_list(value: boolean): void;
get_move(): boolean;
set_move(value: boolean): void;
get_navigation(): boolean;
set_navigation(value: boolean): void;
get_rename(): boolean;
set_rename(value: boolean): void;
get_restore(): boolean;
set_restore(value: boolean): void;
get_roleAssignmentAdd(): boolean;
set_roleAssignmentAdd(value: boolean): void;
get_roleAssignmentDelete(): boolean;
set_roleAssignmentDelete(value: boolean): void;
get_roleDefinitionAdd(): boolean;
set_roleDefinitionAdd(value: boolean): void;
get_roleDefinitionDelete(): boolean;
set_roleDefinitionDelete(value: boolean): void;
get_roleDefinitionUpdate(): boolean;
set_roleDefinitionUpdate(value: boolean): void;
get_securityPolicy(): boolean;
set_securityPolicy(value: boolean): void;
get_site(): boolean;
set_site(value: boolean): void;
get_systemUpdate(): boolean;
set_systemUpdate(value: boolean): void;
get_update(): boolean;
set_update(value: boolean): void;
get_user(): boolean;
set_user(value: boolean): void;
get_view(): boolean;
set_view(value: boolean): void;
get_web(): boolean;
set_web(value: boolean): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void
}

declare class SP$ChangeSite mixins SP$SP$Change {}

declare class SP$ChangeToken mixins SP$SP$ClientValueObject {
get_stringValue(): string;
set_stringValue(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$ChangeType {
  constructor(...args: empty): mixed;
static +noChange: Class<SP$ChangeType__noChange> & SP$ChangeType__noChange & 0;// 0
static +add: Class<SP$ChangeType__add> & SP$ChangeType__add & 1;// 1
static +update: Class<SP$ChangeType__update> & SP$ChangeType__update & 2;// 2
static +deleteObject: Class<SP$ChangeType__deleteObject> & SP$ChangeType__deleteObject & 3;// 3
static +rename: Class<SP$ChangeType__rename> & SP$ChangeType__rename & 4;// 4
static +moveAway: Class<SP$ChangeType__moveAway> & SP$ChangeType__moveAway & 5;// 5
static +moveInto: Class<SP$ChangeType__moveInto> & SP$ChangeType__moveInto & 6;// 6
static +restore: Class<SP$ChangeType__restore> & SP$ChangeType__restore & 7;// 7
static +roleAdd: Class<SP$ChangeType__roleAdd> & SP$ChangeType__roleAdd & 8;// 8
static +roleDelete: Class<SP$ChangeType__roleDelete> & SP$ChangeType__roleDelete & 9;// 9
static +roleUpdate: Class<SP$ChangeType__roleUpdate> & SP$ChangeType__roleUpdate & 10;// 10
static +assignmentAdd: Class<SP$ChangeType__assignmentAdd> & SP$ChangeType__assignmentAdd & 11;// 11
static +assignmentDelete: Class<SP$ChangeType__assignmentDelete> & SP$ChangeType__assignmentDelete & 12;// 12
static +memberAdd: Class<SP$ChangeType__memberAdd> & SP$ChangeType__memberAdd & 13;// 13
static +memberDelete: Class<SP$ChangeType__memberDelete> & SP$ChangeType__memberDelete & 14;// 14
static +systemUpdate: Class<SP$ChangeType__systemUpdate> & SP$ChangeType__systemUpdate & 15;// 15
static +navigation: Class<SP$ChangeType__navigation> & SP$ChangeType__navigation & 16;// 16
static +scopeAdd: Class<SP$ChangeType__scopeAdd> & SP$ChangeType__scopeAdd & 17;// 17
static +scopeDelete: Class<SP$ChangeType__scopeDelete> & SP$ChangeType__scopeDelete & 18;// 18
static +listContentTypeAdd: Class<SP$ChangeType__listContentTypeAdd> & SP$ChangeType__listContentTypeAdd & 19;// 19
static +listContentTypeDelete: Class<SP$ChangeType__listContentTypeDelete> & SP$ChangeType__listContentTypeDelete & 20;// 20

}

declare class SP$ChangeType__noChange mixins SP$ChangeType {}
declare class SP$ChangeType__add mixins SP$ChangeType {}
declare class SP$ChangeType__update mixins SP$ChangeType {}
declare class SP$ChangeType__deleteObject mixins SP$ChangeType {}
declare class SP$ChangeType__rename mixins SP$ChangeType {}
declare class SP$ChangeType__moveAway mixins SP$ChangeType {}
declare class SP$ChangeType__moveInto mixins SP$ChangeType {}
declare class SP$ChangeType__restore mixins SP$ChangeType {}
declare class SP$ChangeType__roleAdd mixins SP$ChangeType {}
declare class SP$ChangeType__roleDelete mixins SP$ChangeType {}
declare class SP$ChangeType__roleUpdate mixins SP$ChangeType {}
declare class SP$ChangeType__assignmentAdd mixins SP$ChangeType {}
declare class SP$ChangeType__assignmentDelete mixins SP$ChangeType {}
declare class SP$ChangeType__memberAdd mixins SP$ChangeType {}
declare class SP$ChangeType__memberDelete mixins SP$ChangeType {}
declare class SP$ChangeType__systemUpdate mixins SP$ChangeType {}
declare class SP$ChangeType__navigation mixins SP$ChangeType {}
declare class SP$ChangeType__scopeAdd mixins SP$ChangeType {}
declare class SP$ChangeType__scopeDelete mixins SP$ChangeType {}
declare class SP$ChangeType__listContentTypeAdd mixins SP$ChangeType {}
declare class SP$ChangeType__listContentTypeDelete mixins SP$ChangeType {}


declare class SP$ChangeUser mixins SP$SP$Change {
get_activate(): boolean;
get_userId(): number
}

declare class SP$ChangeView mixins SP$SP$Change {
get_viewId(): SP$SP$Guid;
get_listId(): SP$SP$Guid;
get_webId(): SP$SP$Guid
}

declare class SP$ChangeWeb mixins SP$SP$Change {
get_webId(): SP$SP$Guid
}

declare  class SP$CheckinType {
  constructor(...args: empty): mixed;
static +minorCheckIn: Class<SP$CheckinType__minorCheckIn> & SP$CheckinType__minorCheckIn & 0;// 0
static +majorCheckIn: Class<SP$CheckinType__majorCheckIn> & SP$CheckinType__majorCheckIn & 1;// 1
static +overwriteCheckIn: Class<SP$CheckinType__overwriteCheckIn> & SP$CheckinType__overwriteCheckIn & 2;// 2

}

declare class SP$CheckinType__minorCheckIn mixins SP$CheckinType {}
declare class SP$CheckinType__majorCheckIn mixins SP$CheckinType {}
declare class SP$CheckinType__overwriteCheckIn mixins SP$CheckinType {}


declare  class SP$CheckOutType {
  constructor(...args: empty): mixed;
static +online: Class<SP$CheckOutType__online> & SP$CheckOutType__online & 0;// 0
static +offline: Class<SP$CheckOutType__offline> & SP$CheckOutType__offline & 1;// 1
static +none: Class<SP$CheckOutType__none> & SP$CheckOutType__none & 2;// 2

}

declare class SP$CheckOutType__online mixins SP$CheckOutType {}
declare class SP$CheckOutType__offline mixins SP$CheckOutType {}
declare class SP$CheckOutType__none mixins SP$CheckOutType {}


declare  class SP$ChoiceFormatType {
  constructor(...args: empty): mixed;
static +dropdown: Class<SP$ChoiceFormatType__dropdown> & SP$ChoiceFormatType__dropdown & 0;// 0
static +radioButtons: Class<SP$ChoiceFormatType__radioButtons> & SP$ChoiceFormatType__radioButtons & 1;// 1

}

declare class SP$ChoiceFormatType__dropdown mixins SP$ChoiceFormatType {}
declare class SP$ChoiceFormatType__radioButtons mixins SP$ChoiceFormatType {}


declare class SP$CompatibilityRange mixins SP$SP$ClientObject {}

declare class SP$ContentType mixins SP$SP$ClientObject {
get_description(): string;
set_description(value: string): void;
get_displayFormTemplateName(): string;
set_displayFormTemplateName(value: string): void;
get_displayFormUrl(): string;
set_displayFormUrl(value: string): void;
get_documentTemplate(): string;
set_documentTemplate(value: string): void;
get_documentTemplateUrl(): string;
get_editFormTemplateName(): string;
set_editFormTemplateName(value: string): void;
get_editFormUrl(): string;
set_editFormUrl(value: string): void;
get_fieldLinks(): SP$SP$FieldLinkCollection;
get_fields(): SP$SP$FieldCollection;
get_group(): string;
set_group(value: string): void;
get_hidden(): boolean;
set_hidden(value: boolean): void;
get_id(): SP$SP$ContentTypeId;
get_jsLink(): string;
set_jsLink(value: string): void;
get_name(): string;
set_name(value: string): void;
get_newFormTemplateName(): string;
set_newFormTemplateName(value: string): void;
get_newFormUrl(): string;
set_newFormUrl(value: string): void;
get_parent(): SP$SP$ContentType;
get_readOnly(): boolean;
set_readOnly(value: boolean): void;
get_schemaXml(): string;
get_schemaXmlWithResourceTokens(): string;
set_schemaXmlWithResourceTokens(value: string): void;
get_scope(): string;
get_sealed(): boolean;
set_sealed(value: boolean): void;
get_stringId(): string;
get_workflowAssociations(): SP$SP$Workflow.Workflow$WorkflowAssociationCollection;
update(updateChildren: boolean): void;
deleteObject(): void
}

declare type SP$ContentTypeCollection = {
itemAt(index: number): SP$SP$ContentType,
get_item(index: number): SP$SP$ContentType,
getById(contentTypeId: string): SP$SP$ContentType,
addExistingContentType(contentType: SP$SP$ContentType): SP$SP$ContentType,
add(parameters: SP$SP$ContentTypeCreationInformation): SP$SP$ContentType
} & SP$SP$ClientObjectCollection<SP$ContentType>


declare class SP$ContentTypeCreationInformation mixins SP$SP$ClientValueObject {
get_description(): string;
set_description(value: string): void;
get_group(): string;
set_group(value: string): void;
get_name(): string;
set_name(value: string): void;
get_parentContentType(): SP$SP$ContentType;
set_parentContentType(value: SP$SP$ContentType): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$ContentTypeId mixins SP$SP$ClientValueObject {
toString(): string;
get_stringValue(): string;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$CustomizedPageStatus {
  constructor(...args: empty): mixed;
static +none: Class<SP$CustomizedPageStatus__none> & SP$CustomizedPageStatus__none & 0;// 0
static +uncustomized: Class<SP$CustomizedPageStatus__uncustomized> & SP$CustomizedPageStatus__uncustomized & 1;// 1
static +customized: Class<SP$CustomizedPageStatus__customized> & SP$CustomizedPageStatus__customized & 2;// 2

}

declare class SP$CustomizedPageStatus__none mixins SP$CustomizedPageStatus {}
declare class SP$CustomizedPageStatus__uncustomized mixins SP$CustomizedPageStatus {}
declare class SP$CustomizedPageStatus__customized mixins SP$CustomizedPageStatus {}


declare  class SP$DateTimeFieldFormatType {
  constructor(...args: empty): mixed;
static +dateOnly: Class<SP$DateTimeFieldFormatType__dateOnly> & SP$DateTimeFieldFormatType__dateOnly & 0;// 0
static +dateTime: Class<SP$DateTimeFieldFormatType__dateTime> & SP$DateTimeFieldFormatType__dateTime & 1;// 1

}

declare class SP$DateTimeFieldFormatType__dateOnly mixins SP$DateTimeFieldFormatType {}
declare class SP$DateTimeFieldFormatType__dateTime mixins SP$DateTimeFieldFormatType {}


declare  class SP$DateTimeFieldFriendlyFormatType {
  constructor(...args: empty): mixed;
static +unspecified: Class<SP$DateTimeFieldFriendlyFormatType__unspecified> & SP$DateTimeFieldFriendlyFormatType__unspecified & 0;// 0
static +disabled: Class<SP$DateTimeFieldFriendlyFormatType__disabled> & SP$DateTimeFieldFriendlyFormatType__disabled & 1;// 1
static +relative: Class<SP$DateTimeFieldFriendlyFormatType__relative> & SP$DateTimeFieldFriendlyFormatType__relative & 2;// 2

}

declare class SP$DateTimeFieldFriendlyFormatType__unspecified mixins SP$DateTimeFieldFriendlyFormatType {}
declare class SP$DateTimeFieldFriendlyFormatType__disabled mixins SP$DateTimeFieldFriendlyFormatType {}
declare class SP$DateTimeFieldFriendlyFormatType__relative mixins SP$DateTimeFieldFriendlyFormatType {}


declare  class SP$DraftVisibilityType {
  constructor(...args: empty): mixed;
static +reader: Class<SP$DraftVisibilityType__reader> & SP$DraftVisibilityType__reader & 0;// 0
static +author: Class<SP$DraftVisibilityType__author> & SP$DraftVisibilityType__author & 1;// 1
static +approver: Class<SP$DraftVisibilityType__approver> & SP$DraftVisibilityType__approver & 2;// 2

}

declare class SP$DraftVisibilityType__reader mixins SP$DraftVisibilityType {}
declare class SP$DraftVisibilityType__author mixins SP$DraftVisibilityType {}
declare class SP$DraftVisibilityType__approver mixins SP$DraftVisibilityType {}


declare class SP$EventReceiverDefinition mixins SP$SP$ClientObject {
get_receiverAssembly(): string;
get_receiverClass(): string;
get_receiverId(): SP$SP$Guid;
get_receiverName(): string;
get_sequenceNumber(): number;
get_synchronization(): SP$SP$EventReceiverSynchronization;
get_eventType(): SP$SP$EventReceiverType;
get_receiverUrl(): string;
update(): void;
deleteObject(): void
}

declare type SP$EventReceiverDefinitionCollection = {
itemAt(index: number): SP$SP$EventReceiverDefinition,
get_item(index: number): SP$SP$EventReceiverDefinition,
getById(eventReceiverId: SP$SP$Guid): SP$SP$EventReceiverDefinition,
add(
eventReceiverCreationInformation: SP$SP$EventReceiverDefinitionCreationInformation): SP$SP$EventReceiverDefinition
} & SP$SP$ClientObjectCollection<SP$EventReceiverDefinition>


declare class SP$EventReceiverDefinitionCreationInformation mixins SP$SP$ClientValueObject {
get_receiverAssembly(): string;
set_receiverAssembly(value: string): void;
get_receiverClass(): string;
set_receiverClass(value: string): void;
get_receiverName(): string;
set_receiverName(value: string): void;
get_sequenceNumber(): number;
set_sequenceNumber(value: number): void;
get_synchronization(): SP$SP$EventReceiverSynchronization;
set_synchronization(value: SP$SP$EventReceiverSynchronization): void;
get_eventType(): SP$SP$EventReceiverType;
set_eventType(value: SP$SP$EventReceiverType): void;
get_receiverUrl(): string;
set_receiverUrl(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$EventReceiverSynchronization {
  constructor(...args: empty): mixed;
static +defaultSynchronization: Class<SP$EventReceiverSynchronization__defaultSynchronization> & SP$EventReceiverSynchronization__defaultSynchronization & 0;// 0
static +synchronous: Class<SP$EventReceiverSynchronization__synchronous> & SP$EventReceiverSynchronization__synchronous & 1;// 1
static +asynchronous: Class<SP$EventReceiverSynchronization__asynchronous> & SP$EventReceiverSynchronization__asynchronous & 2;// 2

}

declare class SP$EventReceiverSynchronization__defaultSynchronization mixins SP$EventReceiverSynchronization {}
declare class SP$EventReceiverSynchronization__synchronous mixins SP$EventReceiverSynchronization {}
declare class SP$EventReceiverSynchronization__asynchronous mixins SP$EventReceiverSynchronization {}


declare  class SP$EventReceiverType {
  constructor(...args: empty): mixed;
static +invalidReceiver: Class<SP$EventReceiverType__invalidReceiver> & SP$EventReceiverType__invalidReceiver & 0;// 0
static +itemAdding: Class<SP$EventReceiverType__itemAdding> & SP$EventReceiverType__itemAdding & 1;// 1
static +itemUpdating: Class<SP$EventReceiverType__itemUpdating> & SP$EventReceiverType__itemUpdating & 2;// 2
static +itemDeleting: Class<SP$EventReceiverType__itemDeleting> & SP$EventReceiverType__itemDeleting & 3;// 3
static +itemCheckingIn: Class<SP$EventReceiverType__itemCheckingIn> & SP$EventReceiverType__itemCheckingIn & 4;// 4
static +itemCheckingOut: Class<SP$EventReceiverType__itemCheckingOut> & SP$EventReceiverType__itemCheckingOut & 5;// 5
static +itemUncheckingOut: Class<SP$EventReceiverType__itemUncheckingOut> & SP$EventReceiverType__itemUncheckingOut & 6;// 6
static +itemAttachmentAdding: Class<SP$EventReceiverType__itemAttachmentAdding> & SP$EventReceiverType__itemAttachmentAdding & 7;// 7
static +itemAttachmentDeleting: Class<SP$EventReceiverType__itemAttachmentDeleting> & SP$EventReceiverType__itemAttachmentDeleting & 8;// 8
static +itemFileMoving: Class<SP$EventReceiverType__itemFileMoving> & SP$EventReceiverType__itemFileMoving & 9;// 9
static +itemVersionDeleting: Class<SP$EventReceiverType__itemVersionDeleting> & SP$EventReceiverType__itemVersionDeleting & 10;// 10
static +fieldAdding: Class<SP$EventReceiverType__fieldAdding> & SP$EventReceiverType__fieldAdding & 11;// 11
static +fieldUpdating: Class<SP$EventReceiverType__fieldUpdating> & SP$EventReceiverType__fieldUpdating & 12;// 12
static +fieldDeleting: Class<SP$EventReceiverType__fieldDeleting> & SP$EventReceiverType__fieldDeleting & 13;// 13
static +listAdding: Class<SP$EventReceiverType__listAdding> & SP$EventReceiverType__listAdding & 14;// 14
static +listDeleting: Class<SP$EventReceiverType__listDeleting> & SP$EventReceiverType__listDeleting & 15;// 15
static +siteDeleting: Class<SP$EventReceiverType__siteDeleting> & SP$EventReceiverType__siteDeleting & 16;// 16
static +webDeleting: Class<SP$EventReceiverType__webDeleting> & SP$EventReceiverType__webDeleting & 17;// 17
static +webMoving: Class<SP$EventReceiverType__webMoving> & SP$EventReceiverType__webMoving & 18;// 18
static +webAdding: Class<SP$EventReceiverType__webAdding> & SP$EventReceiverType__webAdding & 19;// 19
static +groupAdding: Class<SP$EventReceiverType__groupAdding> & SP$EventReceiverType__groupAdding & 20;// 20
static +groupUpdating: Class<SP$EventReceiverType__groupUpdating> & SP$EventReceiverType__groupUpdating & 21;// 21
static +groupDeleting: Class<SP$EventReceiverType__groupDeleting> & SP$EventReceiverType__groupDeleting & 22;// 22
static +groupUserAdding: Class<SP$EventReceiverType__groupUserAdding> & SP$EventReceiverType__groupUserAdding & 23;// 23
static +groupUserDeleting: Class<SP$EventReceiverType__groupUserDeleting> & SP$EventReceiverType__groupUserDeleting & 24;// 24
static +roleDefinitionAdding: Class<SP$EventReceiverType__roleDefinitionAdding> & SP$EventReceiverType__roleDefinitionAdding & 25;// 25
static +roleDefinitionUpdating: Class<SP$EventReceiverType__roleDefinitionUpdating> & SP$EventReceiverType__roleDefinitionUpdating & 26;// 26
static +roleDefinitionDeleting: Class<SP$EventReceiverType__roleDefinitionDeleting> & SP$EventReceiverType__roleDefinitionDeleting & 27;// 27
static +roleAssignmentAdding: Class<SP$EventReceiverType__roleAssignmentAdding> & SP$EventReceiverType__roleAssignmentAdding & 28;// 28
static +roleAssignmentDeleting: Class<SP$EventReceiverType__roleAssignmentDeleting> & SP$EventReceiverType__roleAssignmentDeleting & 29;// 29
static +inheritanceBreaking: Class<SP$EventReceiverType__inheritanceBreaking> & SP$EventReceiverType__inheritanceBreaking & 30;// 30
static +inheritanceResetting: Class<SP$EventReceiverType__inheritanceResetting> & SP$EventReceiverType__inheritanceResetting & 31;// 31
static +workflowStarting: Class<SP$EventReceiverType__workflowStarting> & SP$EventReceiverType__workflowStarting & 32;// 32
static +itemAdded: Class<SP$EventReceiverType__itemAdded> & SP$EventReceiverType__itemAdded & 33;// 33
static +itemUpdated: Class<SP$EventReceiverType__itemUpdated> & SP$EventReceiverType__itemUpdated & 34;// 34
static +itemDeleted: Class<SP$EventReceiverType__itemDeleted> & SP$EventReceiverType__itemDeleted & 35;// 35
static +itemCheckedIn: Class<SP$EventReceiverType__itemCheckedIn> & SP$EventReceiverType__itemCheckedIn & 36;// 36
static +itemCheckedOut: Class<SP$EventReceiverType__itemCheckedOut> & SP$EventReceiverType__itemCheckedOut & 37;// 37
static +itemUncheckedOut: Class<SP$EventReceiverType__itemUncheckedOut> & SP$EventReceiverType__itemUncheckedOut & 38;// 38
static +itemAttachmentAdded: Class<SP$EventReceiverType__itemAttachmentAdded> & SP$EventReceiverType__itemAttachmentAdded & 39;// 39
static +itemAttachmentDeleted: Class<SP$EventReceiverType__itemAttachmentDeleted> & SP$EventReceiverType__itemAttachmentDeleted & 40;// 40
static +itemFileMoved: Class<SP$EventReceiverType__itemFileMoved> & SP$EventReceiverType__itemFileMoved & 41;// 41
static +itemFileConverted: Class<SP$EventReceiverType__itemFileConverted> & SP$EventReceiverType__itemFileConverted & 42;// 42
static +itemVersionDeleted: Class<SP$EventReceiverType__itemVersionDeleted> & SP$EventReceiverType__itemVersionDeleted & 43;// 43
static +fieldAdded: Class<SP$EventReceiverType__fieldAdded> & SP$EventReceiverType__fieldAdded & 44;// 44
static +fieldUpdated: Class<SP$EventReceiverType__fieldUpdated> & SP$EventReceiverType__fieldUpdated & 45;// 45
static +fieldDeleted: Class<SP$EventReceiverType__fieldDeleted> & SP$EventReceiverType__fieldDeleted & 46;// 46
static +listAdded: Class<SP$EventReceiverType__listAdded> & SP$EventReceiverType__listAdded & 47;// 47
static +listDeleted: Class<SP$EventReceiverType__listDeleted> & SP$EventReceiverType__listDeleted & 48;// 48
static +siteDeleted: Class<SP$EventReceiverType__siteDeleted> & SP$EventReceiverType__siteDeleted & 49;// 49
static +webDeleted: Class<SP$EventReceiverType__webDeleted> & SP$EventReceiverType__webDeleted & 50;// 50
static +webMoved: Class<SP$EventReceiverType__webMoved> & SP$EventReceiverType__webMoved & 51;// 51
static +webProvisioned: Class<SP$EventReceiverType__webProvisioned> & SP$EventReceiverType__webProvisioned & 52;// 52
static +groupAdded: Class<SP$EventReceiverType__groupAdded> & SP$EventReceiverType__groupAdded & 53;// 53
static +groupUpdated: Class<SP$EventReceiverType__groupUpdated> & SP$EventReceiverType__groupUpdated & 54;// 54
static +groupDeleted: Class<SP$EventReceiverType__groupDeleted> & SP$EventReceiverType__groupDeleted & 55;// 55
static +groupUserAdded: Class<SP$EventReceiverType__groupUserAdded> & SP$EventReceiverType__groupUserAdded & 56;// 56
static +groupUserDeleted: Class<SP$EventReceiverType__groupUserDeleted> & SP$EventReceiverType__groupUserDeleted & 57;// 57
static +roleDefinitionAdded: Class<SP$EventReceiverType__roleDefinitionAdded> & SP$EventReceiverType__roleDefinitionAdded & 58;// 58
static +roleDefinitionUpdated: Class<SP$EventReceiverType__roleDefinitionUpdated> & SP$EventReceiverType__roleDefinitionUpdated & 59;// 59
static +roleDefinitionDeleted: Class<SP$EventReceiverType__roleDefinitionDeleted> & SP$EventReceiverType__roleDefinitionDeleted & 60;// 60
static +roleAssignmentAdded: Class<SP$EventReceiverType__roleAssignmentAdded> & SP$EventReceiverType__roleAssignmentAdded & 61;// 61
static +roleAssignmentDeleted: Class<SP$EventReceiverType__roleAssignmentDeleted> & SP$EventReceiverType__roleAssignmentDeleted & 62;// 62
static +inheritanceBroken: Class<SP$EventReceiverType__inheritanceBroken> & SP$EventReceiverType__inheritanceBroken & 63;// 63
static +inheritanceReset: Class<SP$EventReceiverType__inheritanceReset> & SP$EventReceiverType__inheritanceReset & 64;// 64
static +workflowStarted: Class<SP$EventReceiverType__workflowStarted> & SP$EventReceiverType__workflowStarted & 65;// 65
static +workflowPostponed: Class<SP$EventReceiverType__workflowPostponed> & SP$EventReceiverType__workflowPostponed & 66;// 66
static +workflowCompleted: Class<SP$EventReceiverType__workflowCompleted> & SP$EventReceiverType__workflowCompleted & 67;// 67
static +entityInstanceAdded: Class<SP$EventReceiverType__entityInstanceAdded> & SP$EventReceiverType__entityInstanceAdded & 68;// 68
static +entityInstanceUpdated: Class<SP$EventReceiverType__entityInstanceUpdated> & SP$EventReceiverType__entityInstanceUpdated & 69;// 69
static +entityInstanceDeleted: Class<SP$EventReceiverType__entityInstanceDeleted> & SP$EventReceiverType__entityInstanceDeleted & 70;// 70
static +appInstalled: Class<SP$EventReceiverType__appInstalled> & SP$EventReceiverType__appInstalled & 71;// 71
static +appUpgraded: Class<SP$EventReceiverType__appUpgraded> & SP$EventReceiverType__appUpgraded & 72;// 72
static +appUninstalling: Class<SP$EventReceiverType__appUninstalling> & SP$EventReceiverType__appUninstalling & 73;// 73
static +emailReceived: Class<SP$EventReceiverType__emailReceived> & SP$EventReceiverType__emailReceived & 74;// 74
static +contextEvent: Class<SP$EventReceiverType__contextEvent> & SP$EventReceiverType__contextEvent & 75;// 75

}

declare class SP$EventReceiverType__invalidReceiver mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemUpdating mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemCheckingIn mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemCheckingOut mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemUncheckingOut mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemAttachmentAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemAttachmentDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemFileMoving mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemVersionDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__fieldAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__fieldUpdating mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__fieldDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__listAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__listDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__siteDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__webDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__webMoving mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__webAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupUpdating mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupUserAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupUserDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleDefinitionAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleDefinitionUpdating mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleDefinitionDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleAssignmentAdding mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleAssignmentDeleting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__inheritanceBreaking mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__inheritanceResetting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__workflowStarting mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemUpdated mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemCheckedIn mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemCheckedOut mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemUncheckedOut mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemAttachmentAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemAttachmentDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemFileMoved mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemFileConverted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__itemVersionDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__fieldAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__fieldUpdated mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__fieldDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__listAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__listDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__siteDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__webDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__webMoved mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__webProvisioned mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupUpdated mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupUserAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__groupUserDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleDefinitionAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleDefinitionUpdated mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleDefinitionDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleAssignmentAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__roleAssignmentDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__inheritanceBroken mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__inheritanceReset mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__workflowStarted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__workflowPostponed mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__workflowCompleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__entityInstanceAdded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__entityInstanceUpdated mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__entityInstanceDeleted mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__appInstalled mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__appUpgraded mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__appUninstalling mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__emailReceived mixins SP$EventReceiverType {}
declare class SP$EventReceiverType__contextEvent mixins SP$EventReceiverType {}


declare class SP$Feature mixins SP$SP$ClientObject {
get_definitionId(): SP$SP$Guid
}

declare type SP$FeatureCollection = {
itemAt(index: number): SP$SP$Feature,
get_item(index: number): SP$SP$Feature,
getById(featureId: SP$SP$Guid): SP$SP$Feature,
add(
featureId: SP$SP$Guid,
force: boolean,
featdefScope: SP$SP$FeatureDefinitionScope): SP$SP$Feature,
remove(featureId: SP$SP$Guid, force: boolean): void
} & SP$SP$ClientObjectCollection<SP$Feature>


declare  class SP$FeatureDefinitionScope {
  constructor(...args: empty): mixed;
static +none: Class<SP$FeatureDefinitionScope__none> & SP$FeatureDefinitionScope__none & 0;// 0
static +farm: Class<SP$FeatureDefinitionScope__farm> & SP$FeatureDefinitionScope__farm & 1;// 1
static +site: Class<SP$FeatureDefinitionScope__site> & SP$FeatureDefinitionScope__site & 2;// 2
static +web: Class<SP$FeatureDefinitionScope__web> & SP$FeatureDefinitionScope__web & 3;// 3

}

declare class SP$FeatureDefinitionScope__none mixins SP$FeatureDefinitionScope {}
declare class SP$FeatureDefinitionScope__farm mixins SP$FeatureDefinitionScope {}
declare class SP$FeatureDefinitionScope__site mixins SP$FeatureDefinitionScope {}
declare class SP$FeatureDefinitionScope__web mixins SP$FeatureDefinitionScope {}


declare class SP$Field mixins SP$SP$ClientObject {
get_canBeDeleted(): boolean;
get_defaultValue(): string;
set_defaultValue(value: string): void;
get_description(): string;
set_description(value: string): void;
get_direction(): string;
set_direction(value: string): void;
get_enforceUniqueValues(): boolean;
set_enforceUniqueValues(value: boolean): void;
get_entityPropertyName(): string;
get_filterable(): boolean;
get_fromBaseType(): boolean;
get_group(): string;
set_group(value: string): void;
get_hidden(): boolean;
set_hidden(value: boolean): void;
get_id(): SP$SP$Guid;
get_indexed(): boolean;
set_indexed(value: boolean): void;
get_internalName(): string;
get_jsLink(): string;
set_jsLink(value: string): void;
get_readOnlyField(): boolean;
set_readOnlyField(value: boolean): void;
get_required(): boolean;
set_required(value: boolean): void;
get_schemaXml(): string;
set_schemaXml(value: string): void;
get_schemaXmlWithResourceTokens(): string;
get_scope(): string;
get_sealed(): boolean;
get_sortable(): boolean;
get_staticName(): string;
set_staticName(value: string): void;
get_title(): string;
set_title(value: string): void;
get_fieldTypeKind(): SP$SP$FieldType;
set_fieldTypeKind(value: SP$SP$FieldType): void;
get_typeAsString(): string;
set_typeAsString(value: string): void;
get_typeDisplayName(): string;
get_typeShortDescription(): string;
get_validationFormula(): string;
set_validationFormula(value: string): void;
get_validationMessage(): string;
set_validationMessage(value: string): void;
validateSetValue<T= any>(item: SP$SP$ListItem<T>, value: string): void;
updateAndPushChanges(pushChangesToLists: boolean): void;
update(): void;
deleteObject(): void;
setShowInDisplayForm(value: boolean): void;
setShowInEditForm(value: boolean): void;
setShowInNewForm(value: boolean): void
}

declare class SP$FieldCalculated mixins SP$SP$Field {
get_dateFormat(): SP$SP$DateTimeFieldFormatType;
set_dateFormat(value: SP$SP$DateTimeFieldFormatType): void;
get_formula(): string;
set_formula(value: string): void;
get_outputType(): SP$SP$FieldType;
set_outputType(value: SP$SP$FieldType): void
}

declare class SP$FieldCalculatedErrorValue mixins SP$SP$ClientValueObject {
get_errorMessage(): string;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$FieldMultiChoice mixins SP$SP$Field {
get_fillInChoice(): boolean;
set_fillInChoice(value: boolean): void;
get_mappings(): string;
get_choices(): string[];
set_choices(value: string[]): void
}

declare class SP$FieldChoice mixins SP$SP$FieldMultiChoice {
get_editFormat(): SP$SP$ChoiceFormatType;
set_editFormat(value: SP$SP$ChoiceFormatType): void
}

declare type SP$FieldCollection = {
itemAt(index: number): SP$SP$Field,
get_item(index: number): SP$SP$Field,
get_schemaXml(): string,
getByTitle(title: string): SP$SP$Field,
getById(id: SP$SP$Guid): SP$SP$Field,
add(field: SP$SP$Field): SP$SP$Field,
addDependentLookup(
displayName: string,
primaryLookupField: SP$SP$Field,
lookupField: string): SP$SP$Field,
addFieldAsXml(
schemaXml: string,
addToDefaultView: boolean,
options: SP$SP$AddFieldOptions): SP$SP$Field,
getByInternalNameOrTitle(strName: string): SP$SP$Field
} & SP$SP$ClientObjectCollection<SP$Field>


declare class SP$FieldComputed mixins SP$SP$Field {
get_enableLookup(): boolean;
set_enableLookup(value: boolean): void
}

declare class SP$FieldNumber mixins SP$SP$Field {
get_maximumValue(): number;
set_maximumValue(value: number): void;
get_minimumValue(): number;
set_minimumValue(value: number): void
}

declare class SP$FieldCurrency mixins SP$SP$FieldNumber {
get_currencyLocaleId(): number;
set_currencyLocaleId(value: number): void
}

declare class SP$FieldDateTime mixins SP$SP$Field {
get_dateTimeCalendarType(): SP$SP$CalendarType;
set_dateTimeCalendarType(value: SP$SP$CalendarType): void;
get_displayFormat(): SP$SP$DateTimeFieldFormatType;
set_displayFormat(value: SP$SP$DateTimeFieldFormatType): void;
get_friendlyDisplayFormat(): SP$SP$DateTimeFieldFriendlyFormatType;
set_friendlyDisplayFormat(value: SP$SP$DateTimeFieldFriendlyFormatType): void
}

declare class SP$FieldGeolocation mixins SP$SP$Field {}

declare class SP$FieldGeolocationValue mixins SP$SP$ClientValueObject {
get_altitude(): number;
set_altitude(value: number): void;
get_latitude(): number;
set_latitude(value: number): void;
get_longitude(): number;
set_longitude(value: number): void;
get_measure(): number;
set_measure(value: number): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$FieldGuid mixins SP$SP$Field {}

declare class SP$FieldLink mixins SP$SP$ClientObject {
get_hidden(): boolean;
set_hidden(value: boolean): void;
get_id(): SP$SP$Guid;
get_name(): string;
get_required(): boolean;
set_required(value: boolean): void;
deleteObject(): void
}

declare type SP$FieldLinkCollection = {
itemAt(index: number): SP$SP$FieldLink,
get_item(index: number): SP$SP$FieldLink,
getById(id: SP$SP$Guid): SP$SP$FieldLink,
add(parameters: SP$SP$FieldLinkCreationInformation): SP$SP$FieldLink,
reorder(internalNames: string[]): void
} & SP$SP$ClientObjectCollection<SP$FieldLink>


declare class SP$FieldLinkCreationInformation mixins SP$SP$ClientValueObject {
get_field(): SP$SP$Field;
set_field(value: SP$SP$Field): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$FieldLookup mixins SP$SP$Field {
get_allowMultipleValues(): boolean;
set_allowMultipleValues(value: boolean): void;
get_isRelationship(): boolean;
set_isRelationship(value: boolean): void;
get_lookupField(): string;
set_lookupField(value: string): void;
get_lookupList(): string;
set_lookupList(value: string): void;
get_lookupWebId(): SP$SP$Guid;
set_lookupWebId(value: SP$SP$Guid): void;
get_primaryFieldId(): string;
set_primaryFieldId(value: string): void;
get_relationshipDeleteBehavior(): SP$SP$RelationshipDeleteBehaviorType;
set_relationshipDeleteBehavior(value: SP$SP$RelationshipDeleteBehaviorType): void
}

declare class SP$FieldLookupValue mixins SP$SP$ClientValueObject {
get_lookupId(): number;
set_lookupId(value: number): void;
get_lookupValue(): string;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$FieldMultiLineText mixins SP$SP$Field {
get_allowHyperlink(): boolean;
set_allowHyperlink(value: boolean): void;
get_appendOnly(): boolean;
set_appendOnly(value: boolean): void;
get_numberOfLines(): number;
set_numberOfLines(value: number): void;
get_restrictedMode(): boolean;
set_restrictedMode(value: boolean): void;
get_richText(): boolean;
set_richText(value: boolean): void;
get_wikiLinking(): boolean
}

declare class SP$FieldRatingScale mixins SP$SP$FieldMultiChoice {
get_gridEndNumber(): number;
set_gridEndNumber(value: number): void;
get_gridNAOptionText(): string;
set_gridNAOptionText(value: string): void;
get_gridStartNumber(): number;
set_gridStartNumber(value: number): void;
get_gridTextRangeAverage(): string;
set_gridTextRangeAverage(value: string): void;
get_gridTextRangeHigh(): string;
set_gridTextRangeHigh(value: string): void;
get_gridTextRangeLow(): string;
set_gridTextRangeLow(value: string): void;
get_rangeCount(): number
}

declare class SP$FieldRatingScaleQuestionAnswer mixins SP$SP$ClientValueObject {
get_answer(): number;
set_answer(value: number): void;
get_question(): string;
set_question(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$FieldStringValues mixins SP$SP$ClientObject {
get_fieldValues(): any;
get_item(fieldName: string): string;
refreshLoad(): void
}

declare class SP$FieldText mixins SP$SP$Field {
get_maxLength(): number;
set_maxLength(value: number): void
}

declare  class SP$FieldType {
  constructor(...args: empty): mixed;
static +invalid: Class<SP$FieldType__invalid> & SP$FieldType__invalid & 0;// 0
static +integer: Class<SP$FieldType__integer> & SP$FieldType__integer & 1;// 1
static +text: Class<SP$FieldType__text> & SP$FieldType__text & 2;// 2
static +note: Class<SP$FieldType__note> & SP$FieldType__note & 3;// 3
static +dateTime: Class<SP$FieldType__dateTime> & SP$FieldType__dateTime & 4;// 4
static +counter: Class<SP$FieldType__counter> & SP$FieldType__counter & 5;// 5
static +choice: Class<SP$FieldType__choice> & SP$FieldType__choice & 6;// 6
static +lookup: Class<SP$FieldType__lookup> & SP$FieldType__lookup & 7;// 7
static +boolean: Class<SP$FieldType__boolean> & SP$FieldType__boolean & 8;// 8
static +number: Class<SP$FieldType__number> & SP$FieldType__number & 9;// 9
static +currency: Class<SP$FieldType__currency> & SP$FieldType__currency & 10;// 10
static +URL: Class<SP$FieldType__URL> & SP$FieldType__URL & 11;// 11
static +computed: Class<SP$FieldType__computed> & SP$FieldType__computed & 12;// 12
static +threading: Class<SP$FieldType__threading> & SP$FieldType__threading & 13;// 13
static +guid: Class<SP$FieldType__guid> & SP$FieldType__guid & 14;// 14
static +multiChoice: Class<SP$FieldType__multiChoice> & SP$FieldType__multiChoice & 15;// 15
static +gridChoice: Class<SP$FieldType__gridChoice> & SP$FieldType__gridChoice & 16;// 16
static +calculated: Class<SP$FieldType__calculated> & SP$FieldType__calculated & 17;// 17
static +file: Class<SP$FieldType__file> & SP$FieldType__file & 18;// 18
static +attachments: Class<SP$FieldType__attachments> & SP$FieldType__attachments & 19;// 19
static +user: Class<SP$FieldType__user> & SP$FieldType__user & 20;// 20
static +recurrence: Class<SP$FieldType__recurrence> & SP$FieldType__recurrence & 21;// 21
static +crossProjectLink: Class<SP$FieldType__crossProjectLink> & SP$FieldType__crossProjectLink & 22;// 22
static +modStat: Class<SP$FieldType__modStat> & SP$FieldType__modStat & 23;// 23
static +error: Class<SP$FieldType__error> & SP$FieldType__error & 24;// 24
static +contentTypeId: Class<SP$FieldType__contentTypeId> & SP$FieldType__contentTypeId & 25;// 25
static +pageSeparator: Class<SP$FieldType__pageSeparator> & SP$FieldType__pageSeparator & 26;// 26
static +threadIndex: Class<SP$FieldType__threadIndex> & SP$FieldType__threadIndex & 27;// 27
static +workflowStatus: Class<SP$FieldType__workflowStatus> & SP$FieldType__workflowStatus & 28;// 28
static +allDayEvent: Class<SP$FieldType__allDayEvent> & SP$FieldType__allDayEvent & 29;// 29
static +workflowEventType: Class<SP$FieldType__workflowEventType> & SP$FieldType__workflowEventType & 30;// 30
static +geolocation: Class<SP$FieldType__geolocation> & SP$FieldType__geolocation & 31;// 31
static +outcomeChoice: Class<SP$FieldType__outcomeChoice> & SP$FieldType__outcomeChoice & 32;// 32
static +maxItems: Class<SP$FieldType__maxItems> & SP$FieldType__maxItems & 33;// 33

}

declare class SP$FieldType__invalid mixins SP$FieldType {}
declare class SP$FieldType__integer mixins SP$FieldType {}
declare class SP$FieldType__text mixins SP$FieldType {}
declare class SP$FieldType__note mixins SP$FieldType {}
declare class SP$FieldType__dateTime mixins SP$FieldType {}
declare class SP$FieldType__counter mixins SP$FieldType {}
declare class SP$FieldType__choice mixins SP$FieldType {}
declare class SP$FieldType__lookup mixins SP$FieldType {}
declare class SP$FieldType__boolean mixins SP$FieldType {}
declare class SP$FieldType__number mixins SP$FieldType {}
declare class SP$FieldType__currency mixins SP$FieldType {}
declare class SP$FieldType__URL mixins SP$FieldType {}
declare class SP$FieldType__computed mixins SP$FieldType {}
declare class SP$FieldType__threading mixins SP$FieldType {}
declare class SP$FieldType__guid mixins SP$FieldType {}
declare class SP$FieldType__multiChoice mixins SP$FieldType {}
declare class SP$FieldType__gridChoice mixins SP$FieldType {}
declare class SP$FieldType__calculated mixins SP$FieldType {}
declare class SP$FieldType__file mixins SP$FieldType {}
declare class SP$FieldType__attachments mixins SP$FieldType {}
declare class SP$FieldType__user mixins SP$FieldType {}
declare class SP$FieldType__recurrence mixins SP$FieldType {}
declare class SP$FieldType__crossProjectLink mixins SP$FieldType {}
declare class SP$FieldType__modStat mixins SP$FieldType {}
declare class SP$FieldType__error mixins SP$FieldType {}
declare class SP$FieldType__contentTypeId mixins SP$FieldType {}
declare class SP$FieldType__pageSeparator mixins SP$FieldType {}
declare class SP$FieldType__threadIndex mixins SP$FieldType {}
declare class SP$FieldType__workflowStatus mixins SP$FieldType {}
declare class SP$FieldType__allDayEvent mixins SP$FieldType {}
declare class SP$FieldType__workflowEventType mixins SP$FieldType {}
declare class SP$FieldType__geolocation mixins SP$FieldType {}
declare class SP$FieldType__outcomeChoice mixins SP$FieldType {}
declare class SP$FieldType__maxItems mixins SP$FieldType {}


declare class SP$FieldUrl mixins SP$SP$Field {
get_displayFormat(): SP$SP$UrlFieldFormatType;
set_displayFormat(value: SP$SP$UrlFieldFormatType): void
}

declare class SP$FieldUrlValue mixins SP$SP$ClientValueObject {
get_description(): string;
set_description(value: string): void;
get_url(): string;
set_url(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$FieldUser mixins SP$SP$FieldLookup {
get_allowDisplay(): boolean;
set_allowDisplay(value: boolean): void;
get_presence(): boolean;
set_presence(value: boolean): void;
get_selectionGroup(): number;
set_selectionGroup(value: number): void;
get_selectionMode(): SP$SP$FieldUserSelectionMode;
set_selectionMode(value: SP$SP$FieldUserSelectionMode): void
}

declare  class SP$FieldUserSelectionMode {
  constructor(...args: empty): mixed;
static +peopleOnly: Class<SP$FieldUserSelectionMode__peopleOnly> & SP$FieldUserSelectionMode__peopleOnly & 0;// 0
static +peopleAndGroups: Class<SP$FieldUserSelectionMode__peopleAndGroups> & SP$FieldUserSelectionMode__peopleAndGroups & 1;// 1

}

declare class SP$FieldUserSelectionMode__peopleOnly mixins SP$FieldUserSelectionMode {}
declare class SP$FieldUserSelectionMode__peopleAndGroups mixins SP$FieldUserSelectionMode {}


declare class SP$FieldUserValue mixins SP$SP$FieldLookupValue {
static fromUser(userName: string): SP$SP$FieldUserValue;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}


/**
 * Represents a file in a SharePoint Web site that can be a Web Part Page, an item in a document library, or a file in a folder.
 */
declare class SP$File mixins SP$SP$ClientObject {
get_author(): SP$SP$User;

/**
 * Returns the user who has checked out the file.
 */
get_checkedOutByUser(): SP$SP$User;

/**
 * Returns the comment that was specified when the document was checked into the document library.
 */
get_checkInComment(): string;

/**
 * The type of checkout that exists on the document.
 */
get_checkOutType(): SP$SP$CheckOutType;
get_contentTag(): string;

/**
 * Gets the customization(ghost) status of the SPFile.
 */
get_customizedPageStatus(): SP$SP$CustomizedPageStatus;

/**
 * Gets the ETag of the file
 */
get_eTag(): string;

/**
 * Specifies whether the file exists
 */
get_exists(): boolean;
get_length(): number;
get_level(): SP$SP$FileLevel;

/**
 * Specifies the SPListItem corresponding to this file if this file belongs to a doclib. Values for all fields are returned also.
 */
get_listItemAllFields<T= any>(): SP$SP$ListItem<T>;

/**
 * Returns the user that owns the current lock on the file. MUST return null if there is no lock.
 */
get_lockedByUser(): SP$SP$User;

/**
 * Specifies the major version of the file.
 */
get_majorVersion(): number;

/**
 * Specifies the minor version of the file.
 */
get_minorVersion(): number;
get_modifiedBy(): SP$SP$User;
get_name(): string;
get_serverRelativeUrl(): string;

/**
 * Specifies when the file was created.
 */
get_timeCreated(): Date;

/**
 * Specifies when the file was created.
 */
get_timeLastModified(): Date;
get_title(): string;

/**
 * Specifies the implementation-specific version identifier of the file.
 */
get_uIVersion(): number;

/**
 * Specifies the implementation-specific version identifier of the file.
 */
get_uIVersionLabel(): string;

/**
 * Returns a collection of file version objects that represent the versions of the file.
 */
get_versions(): SP$SP$FileVersionCollection;

/**
 * Reverts an existing online or offline checkout for the file.
 */
undoCheckOut(): void;
checkIn(comment: string, checkInType: SP$SP$CheckinType): void;
publish(comment: string): void;

/**
 * Removes the file from content approval with the specified comment.
 */
unPublish(comment: string): void;

/**
 * Approves the file submitted for content approval with the specified comment.
 */
approve(comment: string): void;

/**
 * Denies the file submitted for content approval.
 */
deny(comment: string): void;
static getContentVerFromTag(context: SP$SP$ClientRuntimeContext, contentTag: string): SP$SP$IntResult;
getLimitedWebPartManager(
scope: SP$SP$WebParts.WebParts$PersonalizationScope): SP$SP$WebParts.WebParts$LimitedWebPartManager;
moveTo(newUrl: string, flags: SP$SP$MoveOperations): void;
copyTo(strNewUrl: string, bOverWrite: boolean): void;
saveBinary(parameters: SP$SP$FileSaveBinaryInformation): void;
deleteObject(): void;

/**
 * Moves the file to the recycle bin. MUST return the identifier of the new Recycle Bin item
 */
recycle(): SP$SP$GuidResult;
checkOut(): void
}

declare type SP$FileCollection = {
itemAt(index: number): SP$SP$File,
get_item(index: number): SP$SP$File,
getByUrl(url: string): SP$SP$File,
add(parameters: SP$SP$FileCreationInformation): SP$SP$File,
addTemplateFile(urlOfFile: string, templateFileType: SP$SP$TemplateFileType): SP$SP$File
} & SP$SP$ClientObjectCollection<SP$File>


declare class SP$FileCreationInformation mixins SP$SP$ClientValueObject {
get_content(): SP$SP$Base64EncodedByteArray;
set_content(value: SP$SP$Base64EncodedByteArray): void;
get_overwrite(): boolean;
set_overwrite(value: boolean): void;
get_url(): string;
set_url(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$FileLevel {
  constructor(...args: empty): mixed;
static +published: Class<SP$FileLevel__published> & SP$FileLevel__published & 0;// 0
static +draft: Class<SP$FileLevel__draft> & SP$FileLevel__draft & 1;// 1
static +checkout: Class<SP$FileLevel__checkout> & SP$FileLevel__checkout & 2;// 2

}

declare class SP$FileLevel__published mixins SP$FileLevel {}
declare class SP$FileLevel__draft mixins SP$FileLevel {}
declare class SP$FileLevel__checkout mixins SP$FileLevel {}


declare class SP$FileSaveBinaryInformation mixins SP$SP$ClientValueObject {
get_checkRequiredFields(): boolean;
set_checkRequiredFields(value: boolean): void;
get_content(): SP$SP$Base64EncodedByteArray;
set_content(value: SP$SP$Base64EncodedByteArray): void;
get_eTag(): string;
set_eTag(value: string): void;
get_fieldValues(): any;
set_fieldValues(value: any): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$FileSystemObjectType {
  constructor(...args: empty): mixed;
static +invalid: Class<SP$FileSystemObjectType__invalid> & SP$FileSystemObjectType__invalid & 0;// 0
static +file: Class<SP$FileSystemObjectType__file> & SP$FileSystemObjectType__file & 1;// 1
static +folder: Class<SP$FileSystemObjectType__folder> & SP$FileSystemObjectType__folder & 2;// 2
static +web: Class<SP$FileSystemObjectType__web> & SP$FileSystemObjectType__web & 3;// 3

}

declare class SP$FileSystemObjectType__invalid mixins SP$FileSystemObjectType {}
declare class SP$FileSystemObjectType__file mixins SP$FileSystemObjectType {}
declare class SP$FileSystemObjectType__folder mixins SP$FileSystemObjectType {}
declare class SP$FileSystemObjectType__web mixins SP$FileSystemObjectType {}


declare class SP$FileVersion mixins SP$SP$ClientObject {
get_checkInComment(): string;
get_created(): Date;
get_createdBy(): SP$SP$User;
get_iD(): number;
get_isCurrentVersion(): boolean;
get_size(): number;
get_url(): string;
get_versionLabel(): string;
deleteObject(): void
}

declare type SP$FileVersionCollection = {
itemAt(index: number): SP$SP$FileVersion,
get_item(index: number): SP$SP$FileVersion,
getById(versionid: number): SP$SP$FileVersion,
deleteByID(vid: number): void,
deleteByLabel(versionlabel: string): void,
deleteAll(): void,
restoreByLabel(versionlabel: string): void
} & SP$SP$ClientObjectCollection<SP$FileVersion>


declare class SP$Folder mixins SP$SP$ClientObject {
get_contentTypeOrder(): SP$SP$ContentTypeId[];
get_files(): SP$SP$FileCollection;
get_listItemAllFields<T= any>(): SP$SP$ListItem<T>;
get_itemCount(): number;
get_name(): string;
get_parentFolder(): SP$SP$Folder;
get_properties(): SP$SP$PropertyValues;
get_serverRelativeUrl(): string;
get_folders(): SP$SP$FolderCollection;
get_uniqueContentTypeOrder(): SP$SP$ContentTypeId[];
set_uniqueContentTypeOrder(value: SP$SP$ContentTypeId[]): void;
get_welcomePage(): string;
set_welcomePage(value: string): void;
update(): void;
deleteObject(): void;
recycle(): SP$SP$GuidResult
}

declare type SP$FolderCollection = {
itemAt(index: number): SP$SP$Folder,
get_item(index: number): SP$SP$Folder,
getByUrl(url: string): SP$SP$Folder,
add(url: string): SP$SP$Folder
} & SP$SP$ClientObjectCollection<SP$Folder>


declare class SP$Form mixins SP$SP$ClientObject {
get_id(): SP$SP$Guid;
get_serverRelativeUrl(): string;
get_formType(): SP$SP$PageType
}

declare type SP$FormCollection = {
itemAt(index: number): SP$SP$Form,
get_item(index: number): SP$SP$Form,
getByPageType(formType: SP$SP$PageType): SP$SP$Form,
getById(id: SP$SP$Guid): SP$SP$Form
} & SP$SP$ClientObjectCollection<SP$Form>


declare class SP$Principal mixins SP$SP$ClientObject {
get_id(): number;
get_isHiddenInUI(): boolean;
get_loginName(): string;
get_title(): string;
set_title(value: string): void;
get_principalType(): SP$SP$Utilities.Utilities$PrincipalType
}

declare class SP$Group mixins SP$SP$Principal {
get_allowMembersEditMembership(): boolean;
set_allowMembersEditMembership(value: boolean): void;
get_allowRequestToJoinLeave(): boolean;
set_allowRequestToJoinLeave(value: boolean): void;
get_autoAcceptRequestToJoinLeave(): boolean;
set_autoAcceptRequestToJoinLeave(value: boolean): void;
get_canCurrentUserEditMembership(): boolean;
get_canCurrentUserManageGroup(): boolean;
get_canCurrentUserViewMembership(): boolean;
get_description(): string;
set_description(value: string): void;
get_onlyAllowMembersViewMembership(): boolean;
set_onlyAllowMembersViewMembership(value: boolean): void;
get_owner(): SP$SP$Principal;
set_owner(value: SP$SP$Principal): void;
get_ownerTitle(): string;
get_requestToJoinLeaveEmailSetting(): string;
set_requestToJoinLeaveEmailSetting(value: string): void;
get_users(): SP$SP$UserCollection;
update(): void
}

declare type SP$GroupCollection = {
itemAt(index: number): SP$SP$Group,
get_item(index: number): SP$SP$Group,
getByName(name: string): SP$SP$Group,
getById(id: number): SP$SP$Group,
add(parameters: SP$SP$GroupCreationInformation): SP$SP$Group,
removeByLoginName(loginName: string): void,
removeById(id: number): void,
remove(group: SP$SP$Group): void
} & SP$SP$ClientObjectCollection<SP$Group>


declare class SP$GroupCreationInformation mixins SP$SP$ClientValueObject {
get_description(): string;
set_description(value: string): void;
get_title(): string;
set_title(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$InformationRightsManagementSettings mixins SP$SP$ClientObject {
get_allowPrint(): boolean;
set_allowPrint(value: boolean): void;
get_allowScript(): boolean;
set_allowScript(value: boolean): void;
get_allowWriteCopy(): boolean;
set_allowWriteCopy(value: boolean): void;
get_disableDocumentBrowserView(): boolean;
set_disableDocumentBrowserView(value: boolean): void;
get_documentAccessExpireDays(): number;
set_documentAccessExpireDays(value: number): void;
get_documentLibraryProtectionExpireDate(): Date;
set_documentLibraryProtectionExpireDate(value: Date): void;
get_enableDocumentAccessExpire(): boolean;
set_enableDocumentAccessExpire(value: boolean): void;
get_enableDocumentBrowserPublishingView(): boolean;
set_enableDocumentBrowserPublishingView(value: boolean): void;
get_enableGroupProtection(): boolean;
set_enableGroupProtection(value: boolean): void;
get_enableLicenseCacheExpire(): boolean;
set_enableLicenseCacheExpire(value: boolean): void;
get_groupName(): string;
set_groupName(value: string): void;
get_licenseCacheExpireDays(): number;
set_licenseCacheExpireDays(value: number): void;
get_policyDescription(): string;
set_policyDescription(value: string): void;
get_policyTitle(): string;
set_policyTitle(value: string): void;
reset(): void;
update(): void
}

declare class SP$Language mixins SP$SP$ClientValueObject {
get_displayName(): string;
get_languageTag(): string;
get_lcid(): number;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$SecurableObject mixins SP$SP$ClientObject {
get_firstUniqueAncestorSecurableObject(): SP$SP$SecurableObject;
get_hasUniqueRoleAssignments(): boolean;
get_roleAssignments(): SP$SP$RoleAssignmentCollection;
resetRoleInheritance(): void;
breakRoleInheritance(copyRoleAssignments: boolean, clearSubscopes: boolean): void
}


/**
 * Represents display mode for a control or form
 */
declare  class SP$ControlMode {
  constructor(...args: empty): mixed;
static +invalid: Class<SP$ControlMode__invalid> & SP$ControlMode__invalid & 0;// 0
static +displayMode: Class<SP$ControlMode__displayMode> & SP$ControlMode__displayMode & 1;// 1
static +editMode: Class<SP$ControlMode__editMode> & SP$ControlMode__editMode & 2;// 2
static +newMode: Class<SP$ControlMode__newMode> & SP$ControlMode__newMode & 3;// 3

}

declare class SP$ControlMode__invalid mixins SP$ControlMode {}
declare class SP$ControlMode__displayMode mixins SP$ControlMode {}
declare class SP$ControlMode__editMode mixins SP$ControlMode {}
declare class SP$ControlMode__newMode mixins SP$ControlMode {}



/**
 * Represents a list on a SharePoint Web site.
 */
declare class SP$List<T= any> mixins SP$SP$SecurableObject {

/**
 * Gets item by id.
 */
getItemById(id: number): SP$SP$ListItem<T>;

/**
 * Gets a value that specifies whether the list supports content types.
 */
get_allowContentTypes(): boolean;

/**
 * Gets the list definition type on which the list is based. For lists based on OOTB list definitions, return value corresponds the SP.ListTemplateType enumeration.
 */
get_baseTemplate(): number;

/**
 * Gets base type for the list.
 */
get_baseType(): SP$SP$BaseType;

/**
 * Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level.
 */
get_browserFileHandling(): SP$SP$BrowserFileHandling;

/**
 * Gets the content types that are associated with the list.
 */
get_contentTypes(): SP$SP$ContentTypeCollection;

/**
 * Gets a value that specifies whether content types are enabled for the list.
 */
get_contentTypesEnabled(): boolean;

/**
 * Sets a value that specifies whether content types are enabled for the list.
 */
set_contentTypesEnabled(value: boolean): void;

/**
 * Gets a value that specifies when the list was created.
 */
get_created(): Date;

/**
 * Gets the data source associated with the list, or null if the list is not a virtual list.
 */
get_dataSource(): SP$SP$ListDataSource;

/**
 * Gets a value that specifies the default workflow identifier for content approval on the list.
 */
get_defaultContentApprovalWorkflowId(): SP$SP$Guid;

/**
 * Sets a value that specifies the default workflow identifier for content approval on the list.
 */
set_defaultContentApprovalWorkflowId(value: SP$SP$Guid): void;

/**
 * Gets a value that specifies the location of the default display form for the list.
 */
get_defaultDisplayFormUrl(): string;

/**
 * Sets a value that specifies the location of the default display form for the list.
 */
set_defaultDisplayFormUrl(value: string): void;

/**
 * Gets a value that specifies the URL of the edit form to use for list items in the list.
 */
get_defaultEditFormUrl(): string;

/**
 * Sets a value that specifies the URL of the edit form to use for list items in the list.
 */
set_defaultEditFormUrl(value: string): void;

/**
 * Gets a value that specifies the location of the default new form for the list.
 */
get_defaultNewFormUrl(): string;

/**
 * Sets a value that specifies the location of the default new form for the list.
 */
set_defaultNewFormUrl(value: string): void;

/**
 * Gets default view for the list.
 */
get_defaultView(): SP$SP$View;

/**
 * Get URL of the default view for the list.
 */
get_defaultViewUrl(): string;

/**
 * Gets a value that specifies the description of the list.
 */
get_description(): string;

/**
 * Sets a value that specifies the description of the list.
 */
set_description(value: string): void;

/**
 * Gets a value that specifies the reading order of the list.
 */
get_direction(): string;

/**
 * Sets a value that specifies the reading order of the list.
 */
set_direction(value: string): void;

/**
 * Gets a value that specifies the server-relative URL of the document template for the list
 */
get_documentTemplateUrl(): string;

/**
 * Sets a value that specifies the server-relative URL of the document template for the list
 */
set_documentTemplateUrl(value: string): void;

/**
 * Gets a value that specifies the minimum permission required to view minor versions and drafts within the list.
 */
get_draftVersionVisibility(): SP$SP$DraftVisibilityType;

/**
 * Sets a value that specifies the minimum permission required to view minor versions and drafts within the list.
 */
set_draftVersionVisibility(value: SP$SP$DraftVisibilityType): void;

/**
 * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
 */
get_effectiveBasePermissions(): SP$SP$BasePermissions;

/**
 * Gets the effective base permissions for the current user, as they should be displayed in UI. This will only differ from EffectiveBasePermissions if ReadOnlyUI is set to true, and in all cases will be a subset of EffectiveBasePermissions. To put it another way, EffectiveBasePermissionsForUI will always be as or more restrictive than EffectiveBasePermissions.
 */
get_effectiveBasePermissionsForUI(): SP$SP$BasePermissions;

/**
 * Gets a value that specifies whether list item attachments are enabled for the list.
 */
get_enableAttachments(): boolean;

/**
 * Sets a value that specifies whether list item attachments are enabled for the list.
 */
set_enableAttachments(value: boolean): void;

/**
 * Gets a value that specifies whether new list folders can be added to the list.
 */
get_enableFolderCreation(): boolean;

/**
 * Sets a value that specifies whether new list folders can be added to the list.
 */
set_enableFolderCreation(value: boolean): void;

/**
 * Gets a value that specifies whether minor versions are enabled for the list.
 */
get_enableMinorVersions(): boolean;

/**
 * Sets a value that specifies whether minor versions are enabled for the list.
 */
set_enableMinorVersions(value: boolean): void;

/**
 * Gets a value that specifies whether content approval is enabled for the list.
 */
get_enableModeration(): boolean;

/**
 * Sets a value that specifies whether content approval is enabled for the list
 */
set_enableModeration(value: boolean): void;

/**
 * Gets a value that specifies whether historical versions of list items and documents can be created in the list
 */
get_enableVersioning(): boolean;

/**
 * Sets a value that specifies whether historical versions of list items and documents can be created in the list
 */
set_enableVersioning(value: boolean): void;

/**
 * The entity type name.
 */
get_entityTypeName(): string;

/**
 * Gets collection of event receiver objects associated with the list.
 */
get_eventReceivers(): SP$SP$EventReceiverDefinitionCollection;

/**
 * Gets a value that specifies the collection of all fields in the list.
 */
get_fields(): SP$SP$FieldCollection;

/**
 * Gets a value that indicates whether forced checkout is enabled for the document library.
 */
get_forceCheckout(): boolean;

/**
 * Sets a value that indicates whether forced checkout is enabled for the document library
 */
set_forceCheckout(value: boolean): void;

/**
 * Gets collections of forms associated with the list.
 */
get_forms(): SP$SP$FormCollection;

/**
 * Returns true if this is external list.
 */
get_hasExternalDataSource(): boolean;

/**
 * Gets wherever the list is hidden
 */
get_hidden(): boolean;

/**
 * Sets if the list is hidden from "All site contents" or not.
 */
set_hidden(value: boolean): void;

/**
 * Gets id of the list
 */
get_id(): SP$SP$Guid;

/**
 * Gets a value that specifies the URI for the icon of the list
 */
get_imageUrl(): string;

/**
 * Sets a value that specifies the URI for the icon of the list
 */
set_imageUrl(value: string): void;

/**
 * Settings of document library Information Rights Management (IRM)
 */
get_informationRightsManagementSettings(): SP$SP$InformationRightsManagementSettings;

/**
 * Gets a value that specifies whether Information Rights Management (IRM) is enabled for the list.
 */
get_irmEnabled(): boolean;

/**
 * Sets a value that specifies whether Information Rights Management (IRM) is enabled for the list.
 */
set_irmEnabled(value: boolean): void;

/**
 * Gets a value that specifies whether Information Rights Management (IRM) expiration is enabled for the list.
 */
get_irmExpire(): boolean;

/**
 * Sets a value that specifies whether Information Rights Management (IRM) expiration is enabled for the list.
 */
set_irmExpire(value: boolean): void;

/**
 * Gets a value that specifies whether Information Rights Management (IRM) rejection is enabled for the list.
 */
get_irmReject(): boolean;

/**
 * Sets a value that specifies whether Information Rights Management (IRM) rejection is enabled for the list.
 */
set_irmReject(value: boolean): void;

/**
 * Indicates whether this list should be treated as a top level navigation object or not.
 */
get_isApplicationList(): boolean;

/**
 * Sets a value that indicates whether this list should be treated as a top level navigation object or not.
 */
set_isApplicationList(value: boolean): void;

/**
 * Gets a value that specifies whether the list is a gallery.
 */
get_isCatalog(): boolean;

/**
 * Gets a value that indicates whether the document library is a private list with restricted permissions, such as for Solutions.
 */
get_isPrivate(): boolean;

/**
 * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
 */
get_isSiteAssetsLibrary(): boolean;

/**
 * Gets a value that specifies the number of list items in the list
 */
get_itemCount(): number;

/**
 * Gets a value that specifies the last time a list item was deleted from the list.
 */
get_lastItemDeletedDate(): Date;

/**
 * Gets a value that specifies the last time a list item, field, or property of the list was modified.
 */
get_lastItemModifiedDate(): Date;

/**
 * Sets a value that specifies the last time the list was modified.
 */
set_lastItemModifiedDate(value: Date): void;

/**
 * The entity type full name of the list item in the list.
 */
get_listItemEntityTypeFullName(): string;

/**
 * Gets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site
 */
get_multipleDataList(): boolean;

/**
 * Sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site
 */
set_multipleDataList(value: boolean): void;

/**
 * Gets a value that specifies that the crawler must not crawl the list
 */
get_noCrawl(): boolean;

/**
 * Sets a value that specifies that the crawler must not crawl the list
 */
set_noCrawl(value: boolean): void;

/**
 * Gets a value that specifies whether the list appears on the Quick Launch of the site
 */
get_onQuickLaunch(): boolean;

/**
 * Sets a value that specifies whether the list appears on the Quick Launch of the site
 */
set_onQuickLaunch(value: boolean): void;

/**
 * Gets a value that specifies the site that contains the list.
 */
get_parentWeb(): SP$SP$Web;

/**
 * Gets a value that specifies the server-relative URL of the site that contains the list.
 */
get_parentWebUrl(): string;

/**
 * Gets the root folder that contains the files in the list and any related files.
 */
get_rootFolder(): SP$SP$Folder;

/**
 * Gets a value that specifies the list schema of the list.
 */
get_schemaXml(): string;

/**
 * Gets a value that indicates whether folders can be created within the list.
 */
get_serverTemplateCanCreateFolders(): boolean;

/**
 * Gets a value that specifies the feature identifier of the feature that contains the list schema for the list.
 */
get_templateFeatureId(): SP$SP$Guid;

/**
 * Gets the list title. You can determine list URL from it's root folder URL.
 */
get_title(): string;

/**
 * Sets the list title. To change list URL you should change name of the root folder.
 */
set_title(value: string): void;

/**
 * Gets collection of custom actions associated with the list.
 */
get_userCustomActions(): SP$SP$UserCustomActionCollection;

/**
 * Gets a value that specifies the data validation criteria for a list item.
 */
get_validationFormula(): string;

/**
 * Sets a value that specifies the data validation criteria for a list item.
 */
set_validationFormula(value: string): void;

/**
 * Gets a value that specifies the error message returned when data validation fails for a list item.
 */
get_validationMessage(): string;

/**
 * Sets a value that specifies the error message returned when data validation fails for a list item.
 */
set_validationMessage(value: string): void;

/**
 * Returns collection of views added to the list
 */
get_views(): SP$SP$ViewCollection;

/**
 * Gets the collection of workflow association objects that represents all the workflows that are associated with the list.
 */
get_workflowAssociations(): SP$SP$Workflow.Workflow$WorkflowAssociationCollection;

/**
 * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
 */
getChanges(query: SP$SP$ChangeQuery): SP$SP$ChangeCollection;

/**
 * Returns array of items describing changes since time specified in the query
 */
getListItemChangesSinceToken(query: SP$SP$ChangeLogItemQuery): any[];

/**
 * Gets the effective permissions that a specified user has on the list.
 */
getUserEffectivePermissions(userName: string): SP$SP$BasePermissions;

/**
 * First tries to find if the view already exists. Overwrite it if yes, add a new view if no. Then extract all the adhoc filter/sort info from the URL and build and update the view's xml Returns the url of the new/overwritten view.
 * @param oldName The name of the view the user did the adhoc filter on (is currently on).
 * @param newName The desired name the user typed
 * @param privateView Boolean true when the user wants make a new view that's personal
 * @param uri Url that keeps all the adhoc filter/sort inforatmion
 */
saveAsNewView(
oldName: string,
newName: string,
privateView: boolean,
uri: string): SP$SP$StringResult;

/**
 * Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
 */
getRelatedFields(): SP$SP$RelatedFieldCollection;

/**
 * This member is reserved for internal use and is not intended to be used directly from your code.
 */
getRelatedFieldsExtendedData(): SP$SP$RelatedFieldExtendedDataCollection;

/**
 * Returns json string which contains all information necessary for rendering the specified list form for the specified itemId. Mode is SP.ControlMode
 */
renderListFormData(itemId: number, formId: string, mode: SP$SP$ControlMode): SP$SP$StringResult;

/**
 * Returns the data for the specified query view.
 */
renderListData(viewXml: string): SP$SP$StringResult;

/**
 * This member is reserved for internal use and is not intended to be used directly from your code.
 */
reserveListItemId(): SP$SP$IntResult;

/**
 * Updates the database with changes that are made to the list object.
 */
update(): void;

/**
 * Returns the list view with the specified view identifier.
 */
getView(viewGuid: SP$SP$Guid): SP$SP$View;

/**
 * Deletes the list.
 */
deleteObject(): void;

/**
 * Sends the list to the site recycle bin.
 */
recycle(): SP$SP$GuidResult;

/**
 * Returns collection of list items based on the specified CAML query.
 */
getItems(query: SP$SP$CamlQuery): SP$SP$ListItemCollection<T>;

/**
 * Creates a new list item in the list.
 */
addItem(parameters: SP$SP$ListItemCreationInformation): SP$SP$ListItem<T>
}


/**
 * Represents a collection of SP.List objects
 */
declare type SP$ListCollection = {

/**
 * Gets the list at the specified index in the collection.
 */
itemAt<T= any>(index: number): SP$SP$List<T>,

/**
 * Gets the list at the specified index in the collection.
 */
get_item<T= any>(index: number): SP$SP$List<T>,

/**
 * Returns the list with the specified title from the collection.
 */
getByTitle<T= any>(title: string): SP$SP$List<T>,

/**
 * Returns the list with the specified list identifier.
 */
getById<T= any>(id: string | SP$SP$Guid): SP$SP$List<T>,

/**
 * Creates a new list or a document library.
 */
add(parameters: SP$SP$ListCreationInformation): SP$SP$List,

/**
 * Gets a list that is the default location for wiki pages.
 */
ensureSitePagesLibrary(): SP$SP$List,

/**
 * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
 */
ensureSiteAssetsLibrary(): SP$SP$List
} & SP$SP$ClientObjectCollection<SP$List>


declare class SP$ListCreationInformation mixins SP$SP$ClientValueObject {
get_customSchemaXml(): string;
set_customSchemaXml(value: string): void;
get_dataSourceProperties(): any;
set_dataSourceProperties(value: any): void;
get_description(): string;
set_description(value: string): void;
get_documentTemplateType(): number;
set_documentTemplateType(value: number): void;
get_quickLaunchOption(): SP$SP$QuickLaunchOptions;
set_quickLaunchOption(value: SP$SP$QuickLaunchOptions): void;
get_templateFeatureId(): SP$SP$Guid;
set_templateFeatureId(value: SP$SP$Guid): void;
get_templateType(): number;
set_templateType(value: number): void;
get_title(): string;
set_title(value: string): void;
get_url(): string;
set_url(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$ListDataSource mixins SP$SP$ClientValueObject {
get_properties(): any;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$ListDataValidationExceptionValue mixins SP$SP$ClientValueObject {
get_fieldFailures(): SP$SP$ListDataValidationFailure[];
get_itemFailure(): SP$SP$ListDataValidationFailure;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$ListDataValidationFailure mixins SP$SP$ClientValueObject {
get_displayName(): string;
get_message(): string;
get_name(): string;
get_reason(): SP$SP$ListDataValidationFailureReason;
get_validationType(): SP$SP$ListDataValidationType;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$ListDataValidationFailureReason {
  constructor(...args: empty): mixed;
static +dataFailure: Class<SP$ListDataValidationFailureReason__dataFailure> & SP$ListDataValidationFailureReason__dataFailure & 0;// 0
static +formulaError: Class<SP$ListDataValidationFailureReason__formulaError> & SP$ListDataValidationFailureReason__formulaError & 1;// 1

}

declare class SP$ListDataValidationFailureReason__dataFailure mixins SP$ListDataValidationFailureReason {}
declare class SP$ListDataValidationFailureReason__formulaError mixins SP$ListDataValidationFailureReason {}


declare  class SP$ListDataValidationType {
  constructor(...args: empty): mixed;
static +userFormulaField: Class<SP$ListDataValidationType__userFormulaField> & SP$ListDataValidationType__userFormulaField & 0;// 0
static +userFormulaItem: Class<SP$ListDataValidationType__userFormulaItem> & SP$ListDataValidationType__userFormulaItem & 1;// 1
static +requiredField: Class<SP$ListDataValidationType__requiredField> & SP$ListDataValidationType__requiredField & 2;// 2
static +choiceField: Class<SP$ListDataValidationType__choiceField> & SP$ListDataValidationType__choiceField & 3;// 3
static +minMaxField: Class<SP$ListDataValidationType__minMaxField> & SP$ListDataValidationType__minMaxField & 4;// 4
static +textField: Class<SP$ListDataValidationType__textField> & SP$ListDataValidationType__textField & 5;// 5

}

declare class SP$ListDataValidationType__userFormulaField mixins SP$ListDataValidationType {}
declare class SP$ListDataValidationType__userFormulaItem mixins SP$ListDataValidationType {}
declare class SP$ListDataValidationType__requiredField mixins SP$ListDataValidationType {}
declare class SP$ListDataValidationType__choiceField mixins SP$ListDataValidationType {}
declare class SP$ListDataValidationType__minMaxField mixins SP$ListDataValidationType {}
declare class SP$ListDataValidationType__textField mixins SP$ListDataValidationType {}



/**
 * Represents an item or row in a list.
 */
declare class SP$ListItem<T= any> mixins SP$SP$SecurableObject {
get_fieldValues(): T;

/**
 * Gets the specified field value for the list item. Field value is returned as string, but it can be casted to a specific field value type, e.g. SP.LookupFieldValue, etc.
 */
get_item<K: $Keys<T>>(fieldInternalName: K): $ElementType<T, K>;

/**
 * Sets the specified field value for the list item. Consider using parseAndSetFieldValue instead.
 */
set_item<K: $Keys<T>>(fieldInternalName: K, value: $ElementType<T, K>): void;

/**
 * Gets collection of objects that represent attachments for the list item.
 */
get_attachmentFiles(): SP$SP$AttachmentCollection;

/**
 * Gets the content type of the item.
 */
get_contentType(): SP$SP$ContentType;

/**
 * Gets a value that specifies the display name of the list item.
 * This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string.
 */
get_displayName(): string;

/**
 * Gets a value that specifies the effective permissions on the list item that are assigned to the current user.
 * This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string.
 */
get_effectiveBasePermissions(): SP$SP$BasePermissions;

/**
 * Gets the effective base permissions for the current user, as they should be displayed in UI.
 * This will only differ from EffectiveBasePermissions if ReadOnlyUI is set to true on the item's parent list, and in all cases will be a subset of EffectiveBasePermissions. To put it another way, EffectiveBasePermissionsForUI will always be as or more restrictive than EffectiveBasePermissions.
 * This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string.
 */
get_effectiveBasePermissionsForUI(): SP$SP$BasePermissions;
get_fieldValuesAsHtml(): SP$SP$FieldStringValues;
get_fieldValuesAsText(): SP$SP$FieldStringValues;
get_fieldValuesForEdit(): SP$SP$FieldStringValues;

/**
 * Gets the file that is represented by the item from a document library. Only for document libraries.
 */
get_file(): SP$SP$File;

/**
 * Gets or sets the file system object type for the item (file, folder or invalid).
 */
get_fileSystemObjectType(): SP$SP$FileSystemObjectType;

/**
 * Gets the parent folder for the list item
 */
get_folder(): SP$SP$Folder;

/**
 * Gets id of the item
 */
get_id(): number;

/**
 * Get the list in which the item resides.
 */
get_parentList(): SP$SP$List;
refreshLoad(): void;
getWOPIFrameUrl(action: SP$SP$Utilities.Utilities$SPWOPIFrameAction): SP$SP$StringResult;

/**
 * Commits changed properties of the list item. The actual update is performed during context.executeQueryAsync method call.
 */
update(): void;

/**
 * Deletes the list item
 */
deleteObject(): void;

/**
 * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
 */
recycle(): SP$SP$GuidResult;

/**
 * Gets effective permissions for the specified user.
 */
getUserEffectivePermissions(userName: string): SP$SP$BasePermissions;

/**
 * Sets the value of the field for the list item based on an implementation specific transformation of the value.
 */
parseAndSetFieldValue(fieldInternalName: string, value: string): void;

/**
 * Validates form values specified for the list item. Errors are returned through hasException and errorMessage properties of the ListItemFormUpdateValue objects
 */
validateUpdateListItem(
formValues: SP$SP$ListItemFormUpdateValue[],
bNewDocumentUpdate: boolean): SP$SP$ListItemFormUpdateValue[]
}

declare type SP$ListItemCollection<T= any> = {
itemAt(index: number): SP$SP$ListItem<T>,
get_item(index: number): SP$SP$ListItem<T>,
getById(id: number | string): SP$SP$ListItem<T>,
get_listItemCollectionPosition(): SP$SP$ListItemCollectionPosition
} & SP$SP$ClientObjectCollection<SP$ListItem<T>>


declare class SP$ListItemCollectionPosition mixins SP$SP$ClientValueObject {
get_pagingInfo(): string;
set_pagingInfo(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}


/**
 * Specifies the properties of the new list item.
 */
declare class SP$ListItemCreationInformation mixins SP$SP$ClientValueObject {
get_folderUrl(): string;

/**
 * Sets a value that specifies the folder for the new list item.
 */
set_folderUrl(value: string): void;
get_leafName(): string;

/**
 * Sets a value that specifies the name of the new list item. It must be the name of the file if the parent list of the list item is a document library.
 */
set_leafName(value: string): void;
get_underlyingObjectType(): SP$SP$FileSystemObjectType;

/**
 * Sets a value that specifies whether the new list item is a file or a folder.
 */
set_underlyingObjectType(value: SP$SP$FileSystemObjectType): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare type SP$ListItemEntityCollection<T> = {
itemAt(index: number): SP$SP$ListItem<T>,
get_item(index: number): SP$SP$ListItem<T>
} & SP$SP$ClientObjectCollection<SP$ListItem<T>>


declare class SP$ListItemFormUpdateValue mixins SP$SP$ClientValueObject {
get_errorMessage(): string;
set_errorMessage(value: string): void;
get_fieldName(): string;
set_fieldName(value: string): void;
get_fieldValue(): string;
set_fieldValue(value: string): void;
get_hasException(): boolean;
set_hasException(value: boolean): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$ListTemplate mixins SP$SP$ClientObject {
get_allowsFolderCreation(): boolean;
get_baseType(): SP$SP$BaseType;
get_description(): string;
get_featureId(): SP$SP$Guid;
get_hidden(): boolean;
get_imageUrl(): string;
get_internalName(): string;
get_isCustomTemplate(): boolean;
get_name(): string;
get_onQuickLaunch(): boolean;
get_listTemplateTypeKind(): number;
get_unique(): boolean
}

declare type SP$ListTemplateCollection = {
itemAt(index: number): SP$SP$ListTemplate,
get_item(index: number): SP$SP$ListTemplate,
getByName(name: string): SP$SP$ListTemplate
} & SP$SP$ClientObjectCollection<SP$ListTemplate>


declare  class SP$ListTemplateType {
  constructor(...args: empty): mixed;
static +invalidType: Class<SP$ListTemplateType__invalidType> & SP$ListTemplateType__invalidType & 0;// 0
static +noListTemplate: Class<SP$ListTemplateType__noListTemplate> & SP$ListTemplateType__noListTemplate & 1;// 1
static +genericList: Class<SP$ListTemplateType__genericList> & SP$ListTemplateType__genericList & 2;// 2
static +documentLibrary: Class<SP$ListTemplateType__documentLibrary> & SP$ListTemplateType__documentLibrary & 3;// 3
static +survey: Class<SP$ListTemplateType__survey> & SP$ListTemplateType__survey & 4;// 4
static +links: Class<SP$ListTemplateType__links> & SP$ListTemplateType__links & 5;// 5
static +announcements: Class<SP$ListTemplateType__announcements> & SP$ListTemplateType__announcements & 6;// 6
static +contacts: Class<SP$ListTemplateType__contacts> & SP$ListTemplateType__contacts & 7;// 7
static +events: Class<SP$ListTemplateType__events> & SP$ListTemplateType__events & 8;// 8
static +tasks: Class<SP$ListTemplateType__tasks> & SP$ListTemplateType__tasks & 9;// 9
static +discussionBoard: Class<SP$ListTemplateType__discussionBoard> & SP$ListTemplateType__discussionBoard & 10;// 10
static +pictureLibrary: Class<SP$ListTemplateType__pictureLibrary> & SP$ListTemplateType__pictureLibrary & 11;// 11
static +dataSources: Class<SP$ListTemplateType__dataSources> & SP$ListTemplateType__dataSources & 12;// 12
static +webTemplateCatalog: Class<SP$ListTemplateType__webTemplateCatalog> & SP$ListTemplateType__webTemplateCatalog & 13;// 13
static +userInformation: Class<SP$ListTemplateType__userInformation> & SP$ListTemplateType__userInformation & 14;// 14
static +webPartCatalog: Class<SP$ListTemplateType__webPartCatalog> & SP$ListTemplateType__webPartCatalog & 15;// 15
static +listTemplateCatalog: Class<SP$ListTemplateType__listTemplateCatalog> & SP$ListTemplateType__listTemplateCatalog & 16;// 16
static +xMLForm: Class<SP$ListTemplateType__xMLForm> & SP$ListTemplateType__xMLForm & 17;// 17
static +masterPageCatalog: Class<SP$ListTemplateType__masterPageCatalog> & SP$ListTemplateType__masterPageCatalog & 18;// 18
static +noCodeWorkflows: Class<SP$ListTemplateType__noCodeWorkflows> & SP$ListTemplateType__noCodeWorkflows & 19;// 19
static +workflowProcess: Class<SP$ListTemplateType__workflowProcess> & SP$ListTemplateType__workflowProcess & 20;// 20
static +webPageLibrary: Class<SP$ListTemplateType__webPageLibrary> & SP$ListTemplateType__webPageLibrary & 21;// 21
static +customGrid: Class<SP$ListTemplateType__customGrid> & SP$ListTemplateType__customGrid & 22;// 22
static +solutionCatalog: Class<SP$ListTemplateType__solutionCatalog> & SP$ListTemplateType__solutionCatalog & 23;// 23
static +noCodePublic: Class<SP$ListTemplateType__noCodePublic> & SP$ListTemplateType__noCodePublic & 24;// 24
static +themeCatalog: Class<SP$ListTemplateType__themeCatalog> & SP$ListTemplateType__themeCatalog & 25;// 25
static +designCatalog: Class<SP$ListTemplateType__designCatalog> & SP$ListTemplateType__designCatalog & 26;// 26
static +appDataCatalog: Class<SP$ListTemplateType__appDataCatalog> & SP$ListTemplateType__appDataCatalog & 27;// 27
static +dataConnectionLibrary: Class<SP$ListTemplateType__dataConnectionLibrary> & SP$ListTemplateType__dataConnectionLibrary & 28;// 28
static +workflowHistory: Class<SP$ListTemplateType__workflowHistory> & SP$ListTemplateType__workflowHistory & 29;// 29
static +ganttTasks: Class<SP$ListTemplateType__ganttTasks> & SP$ListTemplateType__ganttTasks & 30;// 30
static +helpLibrary: Class<SP$ListTemplateType__helpLibrary> & SP$ListTemplateType__helpLibrary & 31;// 31
static +accessRequest: Class<SP$ListTemplateType__accessRequest> & SP$ListTemplateType__accessRequest & 32;// 32
static +tasksWithTimelineAndHierarchy: Class<SP$ListTemplateType__tasksWithTimelineAndHierarchy> & SP$ListTemplateType__tasksWithTimelineAndHierarchy & 33;// 33
static +maintenanceLogs: Class<SP$ListTemplateType__maintenanceLogs> & SP$ListTemplateType__maintenanceLogs & 34;// 34
static +meetings: Class<SP$ListTemplateType__meetings> & SP$ListTemplateType__meetings & 35;// 35
static +agenda: Class<SP$ListTemplateType__agenda> & SP$ListTemplateType__agenda & 36;// 36
static +meetingUser: Class<SP$ListTemplateType__meetingUser> & SP$ListTemplateType__meetingUser & 37;// 37
static +decision: Class<SP$ListTemplateType__decision> & SP$ListTemplateType__decision & 38;// 38
static +meetingObjective: Class<SP$ListTemplateType__meetingObjective> & SP$ListTemplateType__meetingObjective & 39;// 39
static +textBox: Class<SP$ListTemplateType__textBox> & SP$ListTemplateType__textBox & 40;// 40
static +thingsToBring: Class<SP$ListTemplateType__thingsToBring> & SP$ListTemplateType__thingsToBring & 41;// 41
static +homePageLibrary: Class<SP$ListTemplateType__homePageLibrary> & SP$ListTemplateType__homePageLibrary & 42;// 42
static +posts: Class<SP$ListTemplateType__posts> & SP$ListTemplateType__posts & 43;// 43
static +comments: Class<SP$ListTemplateType__comments> & SP$ListTemplateType__comments & 44;// 44
static +categories: Class<SP$ListTemplateType__categories> & SP$ListTemplateType__categories & 45;// 45
static +facility: Class<SP$ListTemplateType__facility> & SP$ListTemplateType__facility & 46;// 46
static +whereabouts: Class<SP$ListTemplateType__whereabouts> & SP$ListTemplateType__whereabouts & 47;// 47
static +callTrack: Class<SP$ListTemplateType__callTrack> & SP$ListTemplateType__callTrack & 48;// 48
static +circulation: Class<SP$ListTemplateType__circulation> & SP$ListTemplateType__circulation & 49;// 49
static +timecard: Class<SP$ListTemplateType__timecard> & SP$ListTemplateType__timecard & 50;// 50
static +holidays: Class<SP$ListTemplateType__holidays> & SP$ListTemplateType__holidays & 51;// 51
static +iMEDic: Class<SP$ListTemplateType__iMEDic> & SP$ListTemplateType__iMEDic & 52;// 52
static +externalList: Class<SP$ListTemplateType__externalList> & SP$ListTemplateType__externalList & 53;// 53
static +mySiteDocumentLibrary: Class<SP$ListTemplateType__mySiteDocumentLibrary> & SP$ListTemplateType__mySiteDocumentLibrary & 54;// 54
static +issueTracking: Class<SP$ListTemplateType__issueTracking> & SP$ListTemplateType__issueTracking & 55;// 55
static +adminTasks: Class<SP$ListTemplateType__adminTasks> & SP$ListTemplateType__adminTasks & 56;// 56
static +healthRules: Class<SP$ListTemplateType__healthRules> & SP$ListTemplateType__healthRules & 57;// 57
static +healthReports: Class<SP$ListTemplateType__healthReports> & SP$ListTemplateType__healthReports & 58;// 58
static +developerSiteDraftApps: Class<SP$ListTemplateType__developerSiteDraftApps> & SP$ListTemplateType__developerSiteDraftApps & 59;// 59

}

declare class SP$ListTemplateType__invalidType mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__noListTemplate mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__genericList mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__documentLibrary mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__survey mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__links mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__announcements mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__contacts mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__events mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__tasks mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__discussionBoard mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__pictureLibrary mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__dataSources mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__webTemplateCatalog mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__userInformation mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__webPartCatalog mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__listTemplateCatalog mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__xMLForm mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__masterPageCatalog mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__noCodeWorkflows mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__workflowProcess mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__webPageLibrary mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__customGrid mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__solutionCatalog mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__noCodePublic mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__themeCatalog mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__designCatalog mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__appDataCatalog mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__dataConnectionLibrary mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__workflowHistory mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__ganttTasks mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__helpLibrary mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__accessRequest mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__tasksWithTimelineAndHierarchy mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__maintenanceLogs mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__meetings mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__agenda mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__meetingUser mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__decision mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__meetingObjective mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__textBox mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__thingsToBring mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__homePageLibrary mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__posts mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__comments mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__categories mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__facility mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__whereabouts mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__callTrack mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__circulation mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__timecard mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__holidays mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__iMEDic mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__externalList mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__mySiteDocumentLibrary mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__issueTracking mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__adminTasks mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__healthRules mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__healthReports mixins SP$ListTemplateType {}
declare class SP$ListTemplateType__developerSiteDraftApps mixins SP$ListTemplateType {}


declare  class SP$MoveOperations {
  constructor(...args: empty): mixed;
static +none: Class<SP$MoveOperations__none> & SP$MoveOperations__none & 0;// 0
static +overwrite: Class<SP$MoveOperations__overwrite> & SP$MoveOperations__overwrite & 1;// 1
static +allowBrokenThickets: Class<SP$MoveOperations__allowBrokenThickets> & SP$MoveOperations__allowBrokenThickets & 2;// 2
static +bypassApprovePermission: Class<SP$MoveOperations__bypassApprovePermission> & SP$MoveOperations__bypassApprovePermission & 3;// 3

}

declare class SP$MoveOperations__none mixins SP$MoveOperations {}
declare class SP$MoveOperations__overwrite mixins SP$MoveOperations {}
declare class SP$MoveOperations__allowBrokenThickets mixins SP$MoveOperations {}
declare class SP$MoveOperations__bypassApprovePermission mixins SP$MoveOperations {}


declare class SP$Navigation mixins SP$SP$ClientObject {
get_quickLaunch(): SP$SP$NavigationNodeCollection;
get_topNavigationBar(): SP$SP$NavigationNodeCollection;
get_useShared(): boolean;
set_useShared(value: boolean): void;
getNodeById(id: number): SP$SP$NavigationNode
}

declare class SP$NavigationNode mixins SP$SP$ClientObject {
get_children(): SP$SP$NavigationNodeCollection;
get_id(): number;
get_isDocLib(): boolean;
get_isExternal(): boolean;
get_isVisible(): boolean;
set_isVisible(value: boolean): void;
get_title(): string;
set_title(value: string): void;
get_url(): string;
set_url(value: string): void;
update(): void;
deleteObject(): void
}

declare type SP$NavigationNodeCollection = {
itemAt(index: number): SP$SP$NavigationNode,
get_item(index: number): SP$SP$NavigationNode,
add(parameters: SP$SP$NavigationNodeCreationInformation): SP$SP$NavigationNode
} & SP$SP$ClientObjectCollection<SP$NavigationNode>


declare class SP$NavigationNodeCreationInformation mixins SP$SP$ClientValueObject {
get_asLastNode(): boolean;
set_asLastNode(value: boolean): void;
get_isExternal(): boolean;
set_isExternal(value: boolean): void;
get_previousNode(): SP$SP$NavigationNode;
set_previousNode(value: SP$SP$NavigationNode): void;
get_title(): string;
set_title(value: string): void;
get_url(): string;
set_url(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$ObjectSharingInformation mixins SP$SP$ClientObject {
get_anonymousEditLink(): string;
get_anonymousViewLink(): string;
get_canManagePermissions(): boolean;
get_hasPendingAccessRequests(): boolean;
get_hasPermissionLevels(): boolean;
get_isSharedWithCurrentUser(): boolean;
get_isSharedWithGuest(): boolean;
get_isSharedWithMany(): boolean;
get_isSharedWithSecurityGroup(): boolean;
get_pendingAccessRequestsLink(): string;
getSharedWithUsers(): SP$SP$ClientObjectList<SP$SP$ObjectSharingInformationUser>;
static getListItemSharingInformation(
context: SP$SP$ClientRuntimeContext,
listID: SP$SP$Guid,
itemID: number,
excludeCurrentUser: boolean,
excludeSiteAdmin: boolean,
excludeSecurityGroups: boolean,
retrieveAnonymousLinks: boolean,
retrieveUserInfoDetails: boolean,
checkForAccessRequests: boolean): SP$SP$ObjectSharingInformation;
static getWebSharingInformation(
context: SP$SP$ClientRuntimeContext,
excludeCurrentUser: boolean,
excludeSiteAdmin: boolean,
excludeSecurityGroups: boolean,
retrieveAnonymousLinks: boolean,
retrieveUserInfoDetails: boolean,
checkForAccessRequests: boolean): SP$SP$ObjectSharingInformation;
static getObjectSharingInformation(
context: SP$SP$ClientRuntimeContext,
securableObject: SP$SP$SecurableObject,
excludeCurrentUser: boolean,
excludeSiteAdmin: boolean,
excludeSecurityGroups: boolean,
retrieveAnonymousLinks: boolean,
retrieveUserInfoDetails: boolean,
checkForAccessRequests: boolean,
retrievePermissionLevels: boolean): SP$SP$ObjectSharingInformation
}

declare class SP$ObjectSharingInformationUser mixins SP$SP$ClientObject {
get_customRoleNames(): string;
get_department(): string;
get_email(): string;
get_hasEditPermission(): boolean;
get_hasViewPermission(): boolean;
get_id(): number;
get_isSiteAdmin(): boolean;
get_jobTitle(): string;
get_loginName(): string;
get_name(): string;
get_picture(): string;
get_principal(): SP$SP$Principal;
get_sipAddress(): string;
get_user(): SP$SP$User
}

declare  class SP$OpenWebOptions {
  constructor(...args: empty): mixed;
static +none: Class<SP$OpenWebOptions__none> & SP$OpenWebOptions__none & 0;// 0
static +initNavigationCache: Class<SP$OpenWebOptions__initNavigationCache> & SP$OpenWebOptions__initNavigationCache & 1;// 1

}

declare class SP$OpenWebOptions__none mixins SP$OpenWebOptions {}
declare class SP$OpenWebOptions__initNavigationCache mixins SP$OpenWebOptions {}


declare  class SP$PageType {
  constructor(...args: empty): mixed;
static +invalid: Class<SP$PageType__invalid> & SP$PageType__invalid & 0;// 0
static +defaultView: Class<SP$PageType__defaultView> & SP$PageType__defaultView & 1;// 1
static +normalView: Class<SP$PageType__normalView> & SP$PageType__normalView & 2;// 2
static +dialogView: Class<SP$PageType__dialogView> & SP$PageType__dialogView & 3;// 3
static +view: Class<SP$PageType__view> & SP$PageType__view & 4;// 4
static +displayForm: Class<SP$PageType__displayForm> & SP$PageType__displayForm & 5;// 5
static +displayFormDialog: Class<SP$PageType__displayFormDialog> & SP$PageType__displayFormDialog & 6;// 6
static +editForm: Class<SP$PageType__editForm> & SP$PageType__editForm & 7;// 7
static +editFormDialog: Class<SP$PageType__editFormDialog> & SP$PageType__editFormDialog & 8;// 8
static +newForm: Class<SP$PageType__newForm> & SP$PageType__newForm & 9;// 9
static +newFormDialog: Class<SP$PageType__newFormDialog> & SP$PageType__newFormDialog & 10;// 10
static +solutionForm: Class<SP$PageType__solutionForm> & SP$PageType__solutionForm & 11;// 11
static +pAGE_MAXITEMS: Class<SP$PageType__pAGE_MAXITEMS> & SP$PageType__pAGE_MAXITEMS & 12;// 12

}

declare class SP$PageType__invalid mixins SP$PageType {}
declare class SP$PageType__defaultView mixins SP$PageType {}
declare class SP$PageType__normalView mixins SP$PageType {}
declare class SP$PageType__dialogView mixins SP$PageType {}
declare class SP$PageType__view mixins SP$PageType {}
declare class SP$PageType__displayForm mixins SP$PageType {}
declare class SP$PageType__displayFormDialog mixins SP$PageType {}
declare class SP$PageType__editForm mixins SP$PageType {}
declare class SP$PageType__editFormDialog mixins SP$PageType {}
declare class SP$PageType__newForm mixins SP$PageType {}
declare class SP$PageType__newFormDialog mixins SP$PageType {}
declare class SP$PageType__solutionForm mixins SP$PageType {}
declare class SP$PageType__pAGE_MAXITEMS mixins SP$PageType {}


declare class SP$PropertyValues mixins SP$SP$ClientObject {
get_fieldValues(): any;
get_item(fieldName: string): any;
set_item(fieldName: string, value: any): void;
refreshLoad(): void
}

declare class SP$PushNotificationSubscriber mixins SP$SP$ClientObject {
get_customArgs(): string;
set_customArgs(value: string): void;
get_deviceAppInstanceId(): SP$SP$Guid;
get_lastModifiedTimeStamp(): Date;
get_registrationTimeStamp(): Date;
get_serviceToken(): string;
set_serviceToken(value: string): void;
get_subscriberType(): string;
set_subscriberType(value: string): void;
get_user(): SP$SP$User;
update(): void
}

declare type SP$PushNotificationSubscriberCollection = {
itemAt(index: number): SP$SP$PushNotificationSubscriber,
get_item(index: number): SP$SP$PushNotificationSubscriber,
getByStoreId(id: string): SP$SP$PushNotificationSubscriber
} & SP$SP$ClientObjectCollection<SP$PushNotificationSubscriber>


declare  class SP$QuickLaunchOptions {
  constructor(...args: empty): mixed;
static +off: Class<SP$QuickLaunchOptions__off> & SP$QuickLaunchOptions__off & 0;// 0
static +on: Class<SP$QuickLaunchOptions__on> & SP$QuickLaunchOptions__on & 1;// 1
static +defaultValue: Class<SP$QuickLaunchOptions__defaultValue> & SP$QuickLaunchOptions__defaultValue & 2;// 2

}

declare class SP$QuickLaunchOptions__off mixins SP$QuickLaunchOptions {}
declare class SP$QuickLaunchOptions__on mixins SP$QuickLaunchOptions {}
declare class SP$QuickLaunchOptions__defaultValue mixins SP$QuickLaunchOptions {}


declare class SP$RecycleBinItem mixins SP$SP$ClientObject {
get_author(): SP$SP$User;
get_deletedBy(): SP$SP$User;
get_deletedDate(): Date;
get_dirName(): string;
get_id(): SP$SP$Guid;
get_itemState(): SP$SP$RecycleBinItemState;
get_itemType(): SP$SP$RecycleBinItemType;
get_leafName(): string;
get_size(): number;
get_title(): string;
deleteObject(): void;
restore(): void
}

declare type SP$RecycleBinItemCollection = {
itemAt(index: number): SP$SP$RecycleBinItem,
get_item(index: number): SP$SP$RecycleBinItem,
getById(id: SP$SP$Guid): SP$SP$RecycleBinItem,
deleteAll(): void,
restoreAll(): void
} & SP$SP$ClientObjectCollection<SP$RecycleBinItem>


declare  class SP$RecycleBinItemState {
  constructor(...args: empty): mixed;
static +none: Class<SP$RecycleBinItemState__none> & SP$RecycleBinItemState__none & 0;// 0
static +firstStageRecycleBin: Class<SP$RecycleBinItemState__firstStageRecycleBin> & SP$RecycleBinItemState__firstStageRecycleBin & 1;// 1
static +secondStageRecycleBin: Class<SP$RecycleBinItemState__secondStageRecycleBin> & SP$RecycleBinItemState__secondStageRecycleBin & 2;// 2

}

declare class SP$RecycleBinItemState__none mixins SP$RecycleBinItemState {}
declare class SP$RecycleBinItemState__firstStageRecycleBin mixins SP$RecycleBinItemState {}
declare class SP$RecycleBinItemState__secondStageRecycleBin mixins SP$RecycleBinItemState {}


declare  class SP$RecycleBinItemType {
  constructor(...args: empty): mixed;
static +none: Class<SP$RecycleBinItemType__none> & SP$RecycleBinItemType__none & 0;// 0
static +file: Class<SP$RecycleBinItemType__file> & SP$RecycleBinItemType__file & 1;// 1
static +fileVersion: Class<SP$RecycleBinItemType__fileVersion> & SP$RecycleBinItemType__fileVersion & 2;// 2
static +listItem: Class<SP$RecycleBinItemType__listItem> & SP$RecycleBinItemType__listItem & 3;// 3
static +list: Class<SP$RecycleBinItemType__list> & SP$RecycleBinItemType__list & 4;// 4
static +folder: Class<SP$RecycleBinItemType__folder> & SP$RecycleBinItemType__folder & 5;// 5
static +folderWithLists: Class<SP$RecycleBinItemType__folderWithLists> & SP$RecycleBinItemType__folderWithLists & 6;// 6
static +attachment: Class<SP$RecycleBinItemType__attachment> & SP$RecycleBinItemType__attachment & 7;// 7
static +listItemVersion: Class<SP$RecycleBinItemType__listItemVersion> & SP$RecycleBinItemType__listItemVersion & 8;// 8
static +cascadeParent: Class<SP$RecycleBinItemType__cascadeParent> & SP$RecycleBinItemType__cascadeParent & 9;// 9
static +web: Class<SP$RecycleBinItemType__web> & SP$RecycleBinItemType__web & 10;// 10

}

declare class SP$RecycleBinItemType__none mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__file mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__fileVersion mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__listItem mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__list mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__folder mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__folderWithLists mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__attachment mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__listItemVersion mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__cascadeParent mixins SP$RecycleBinItemType {}
declare class SP$RecycleBinItemType__web mixins SP$RecycleBinItemType {}


declare class SP$RegionalSettings mixins SP$SP$ClientObject {
get_adjustHijriDays(): number;
get_alternateCalendarType(): number;
get_aM(): string;
get_calendarType(): number;
get_collation(): number;
get_collationLCID(): number;
get_dateFormat(): number;
get_dateSeparator(): string;
get_decimalSeparator(): string;
get_digitGrouping(): string;
get_firstDayOfWeek(): number;
get_firstWeekOfYear(): number;
get_isEastAsia(): boolean;
get_isRightToLeft(): boolean;
get_isUIRightToLeft(): boolean;
get_listSeparator(): string;
get_localeId(): number;
get_negativeSign(): string;
get_negNumberMode(): number;
get_pM(): string;
get_positiveSign(): string;
get_showWeeks(): boolean;
get_thousandSeparator(): string;
get_time24(): boolean;
get_timeMarkerPosition(): number;
get_timeSeparator(): string;
get_timeZone(): SP$SP$TimeZone;
get_timeZones(): SP$SP$TimeZoneCollection;
get_workDayEndHour(): number;
get_workDays(): number;
get_workDayStartHour(): number
}

declare class SP$RelatedField mixins SP$SP$ClientObject {
get_fieldId(): SP$SP$Guid;
get_listId(): SP$SP$Guid;
get_lookupList(): SP$SP$List;
get_relationshipDeleteBehavior(): SP$SP$RelationshipDeleteBehaviorType;
get_webId(): SP$SP$Guid
}

declare type SP$RelatedFieldCollection = {
itemAt(index: number): SP$SP$RelatedField,
get_item(index: number): SP$SP$RelatedField
} & SP$SP$ClientObjectCollection<SP$RelatedField>


declare class SP$RelatedFieldExtendedData mixins SP$SP$ClientObject {
get_fieldId(): SP$SP$Guid;
get_listId(): SP$SP$Guid;
get_listImageUrl(): string;
get_resolvedListTitle(): string;
get_toolTipDescription(): string;
get_webId(): SP$SP$Guid
}

declare type SP$RelatedFieldExtendedDataCollection = {
itemAt(index: number): SP$SP$RelatedFieldExtendedData,
get_item(index: number): SP$SP$RelatedFieldExtendedData
} & SP$SP$ClientObjectCollection<SP$RelatedFieldExtendedData>


declare class SP$RelatedItem mixins SP$SP$ClientValueObject {
get_iconUrl(): string;
set_iconUrl(value: string): void;
get_itemId(): number;
set_itemId(value: number): void;
get_listId(): string;
set_listId(value: string): void;
get_title(): string;
set_title(value: string): void;
get_url(): string;
set_url(value: string): void;
get_webId(): string;
set_webId(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$RelatedItemManager mixins SP$SP$ClientObject {
static getRelatedItems(
context: SP$SP$ClientRuntimeContext,
SourceListName: string,
SourceItemID: number): SP$SP$RelatedItem[];
static getPageOneRelatedItems(
context: SP$SP$ClientRuntimeContext,
SourceListName: string,
SourceItemID: number): SP$SP$RelatedItem[];
static addSingleLink(
context: SP$SP$ClientRuntimeContext,
SourceListName: string,
SourceItemID: number,
SourceWebUrl: string,
TargetListName: string,
TargetItemID: number,
TargetWebUrl: string,
TryAddReverseLink: boolean): void;
static addSingleLinkToUrl(
context: SP$SP$ClientRuntimeContext,
SourceListName: string,
SourceItemID: number,
TargetItemUrl: string,
TryAddReverseLink: boolean): void;
static addSingleLinkFromUrl(
context: SP$SP$ClientRuntimeContext,
SourceItemUrl: string,
TargetListName: string,
TargetItemID: number,
TryAddReverseLink: boolean): void;
static deleteSingleLink(
context: SP$SP$ClientRuntimeContext,
SourceListName: string,
SourceItemID: number,
SourceWebUrl: string,
TargetListName: string,
TargetItemID: number,
TargetWebUrl: string,
TryDeleteReverseLink: boolean): void
}

declare  class SP$RelationshipDeleteBehaviorType {
  constructor(...args: empty): mixed;
static +none: Class<SP$RelationshipDeleteBehaviorType__none> & SP$RelationshipDeleteBehaviorType__none & 0;// 0
static +cascade: Class<SP$RelationshipDeleteBehaviorType__cascade> & SP$RelationshipDeleteBehaviorType__cascade & 1;// 1
static +restrict: Class<SP$RelationshipDeleteBehaviorType__restrict> & SP$RelationshipDeleteBehaviorType__restrict & 2;// 2

}

declare class SP$RelationshipDeleteBehaviorType__none mixins SP$RelationshipDeleteBehaviorType {}
declare class SP$RelationshipDeleteBehaviorType__cascade mixins SP$RelationshipDeleteBehaviorType {}
declare class SP$RelationshipDeleteBehaviorType__restrict mixins SP$RelationshipDeleteBehaviorType {}


declare class SP$RequestVariable mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext): this;
get_value(): string;
static newObject(context: SP$SP$ClientRuntimeContext): SP$SP$RequestVariable;
append(value: string): void;
set(value: string): void
}

declare class SP$RoleAssignment mixins SP$SP$ClientObject {
get_member(): SP$SP$Principal;
get_principalId(): number;
get_roleDefinitionBindings(): SP$SP$RoleDefinitionBindingCollection;
importRoleDefinitionBindings(roleDefinitionBindings: SP$SP$RoleDefinitionBindingCollection): void;
update(): void;
deleteObject(): void
}

declare type SP$RoleAssignmentCollection = {
itemAt(index: number): SP$SP$RoleAssignment,
get_item(index: number): SP$SP$RoleAssignment,
get_groups(): SP$SP$GroupCollection,
getByPrincipal(principalToFind: SP$SP$Principal): SP$SP$RoleAssignment,
getByPrincipalId(principalId: number): SP$SP$RoleAssignment,
add(
principal: SP$SP$Principal,
roleBindings: SP$SP$RoleDefinitionBindingCollection): SP$SP$RoleAssignment
} & SP$SP$ClientObjectCollection<SP$RoleAssignment>


declare class SP$RoleDefinition mixins SP$SP$ClientObject {
get_basePermissions(): SP$SP$BasePermissions;
set_basePermissions(value: SP$SP$BasePermissions): void;
get_description(): string;
set_description(value: string): void;
get_hidden(): boolean;
get_id(): number;
get_name(): string;
set_name(value: string): void;
get_order(): number;
set_order(value: number): void;
get_roleTypeKind(): SP$SP$RoleType;
update(): void;
deleteObject(): void
}

declare class SP$RoleDefinitionBindingCollection mixins SP$SP$ClientObjectCollection<SP$RoleDefinition> {
constructor(context: SP$SP$ClientRuntimeContext): this;
itemAt(index: number): SP$SP$RoleDefinition;
get_item(index: number): SP$SP$RoleDefinition;
add(roleDefinition: SP$SP$RoleDefinition): void;
remove(roleDefinition: SP$SP$RoleDefinition): void;
removeAll(): void;
static newObject(context: SP$SP$ClientRuntimeContext): SP$SP$RoleDefinitionBindingCollection
}

declare type SP$RoleDefinitionCollection = {
itemAt(index: number): SP$SP$RoleDefinition,
get_item(index: number): SP$SP$RoleDefinition,
getByName(name: string): SP$SP$RoleDefinition,
add(parameters: SP$SP$RoleDefinitionCreationInformation): SP$SP$RoleDefinition,
getById(id: number): SP$SP$RoleDefinition,
getByType(roleType: SP$SP$RoleType): SP$SP$RoleDefinition
} & SP$SP$ClientObjectCollection<SP$RoleDefinition>


declare class SP$RoleDefinitionCreationInformation mixins SP$SP$ClientValueObject {
get_basePermissions(): SP$SP$BasePermissions;
set_basePermissions(value: SP$SP$BasePermissions): void;
get_description(): string;
set_description(value: string): void;
get_name(): string;
set_name(value: string): void;
get_order(): number;
set_order(value: number): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$RoleType {
  constructor(...args: empty): mixed;
static +none: Class<SP$RoleType__none> & SP$RoleType__none & 0;// 0
static +guest: Class<SP$RoleType__guest> & SP$RoleType__guest & 1;// 1
static +reader: Class<SP$RoleType__reader> & SP$RoleType__reader & 2;// 2
static +contributor: Class<SP$RoleType__contributor> & SP$RoleType__contributor & 3;// 3
static +webDesigner: Class<SP$RoleType__webDesigner> & SP$RoleType__webDesigner & 4;// 4
static +administrator: Class<SP$RoleType__administrator> & SP$RoleType__administrator & 5;// 5
static +editor: Class<SP$RoleType__editor> & SP$RoleType__editor & 6;// 6

}

declare class SP$RoleType__none mixins SP$RoleType {}
declare class SP$RoleType__guest mixins SP$RoleType {}
declare class SP$RoleType__reader mixins SP$RoleType {}
declare class SP$RoleType__contributor mixins SP$RoleType {}
declare class SP$RoleType__webDesigner mixins SP$RoleType {}
declare class SP$RoleType__administrator mixins SP$RoleType {}
declare class SP$RoleType__editor mixins SP$RoleType {}


declare class SP$ServerSettings  {
static getAlternateUrls(
context: SP$SP$ClientRuntimeContext): SP$SP$ClientObjectList<SP$SP$AlternateUrl>;
static getGlobalInstalledLanguages(
context: SP$SP$ClientRuntimeContext,
compatibilityLevel: number): SP$SP$Language[]
}

declare class SP$Site mixins SP$SP$ClientObject {
get_allowDesigner(): boolean;
set_allowDesigner(value: boolean): void;
get_allowMasterPageEditing(): boolean;
set_allowMasterPageEditing(value: boolean): void;
get_allowRevertFromTemplate(): boolean;
set_allowRevertFromTemplate(value: boolean): void;
get_allowSelfServiceUpgrade(): boolean;
set_allowSelfServiceUpgrade(value: boolean): void;
get_allowSelfServiceUpgradeEvaluation(): boolean;
set_allowSelfServiceUpgradeEvaluation(value: boolean): void;
get_canUpgrade(): boolean;
get_compatibilityLevel(): number;
get_eventReceivers(): SP$SP$EventReceiverDefinitionCollection;
get_features(): SP$SP$FeatureCollection;
get_id(): SP$SP$Guid;
get_lockIssue(): string;
get_maxItemsPerThrottledOperation(): number;
get_owner(): SP$SP$User;
set_owner(value: SP$SP$User): void;
get_primaryUri(): string;
get_readOnly(): boolean;
get_recycleBin(): SP$SP$RecycleBinItemCollection;
get_rootWeb(): SP$SP$Web;
get_serverRelativeUrl(): string;
get_shareByLinkEnabled(): boolean;
get_showUrlStructure(): boolean;
set_showUrlStructure(value: boolean): void;
get_uIVersionConfigurationEnabled(): boolean;
set_uIVersionConfigurationEnabled(value: boolean): void;
get_upgradeInfo(): SP$SP$UpgradeInfo;
get_upgradeReminderDate(): Date;
get_upgrading(): boolean;
get_url(): string;
get_usage(): SP$SP$UsageInfo;
get_userCustomActions(): SP$SP$UserCustomActionCollection;
updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs: boolean): void;
needsUpgradeByType(versionUpgrade: boolean, recursive: boolean): SP$SP$BooleanResult;
runHealthCheck(
ruleId: SP$SP$Guid,
bRepair: boolean,
bRunAlways: boolean): SP$SP$SiteHealth.SiteHealth$SiteHealthSummary;
createPreviewSPSite(upgrade: boolean, sendemail: boolean): void;
runUpgradeSiteSession(versionUpgrade: boolean, queueOnly: boolean, sendEmail: boolean): void;
getChanges(query: SP$SP$ChangeQuery): SP$SP$ChangeCollection;
openWeb(strUrl: string): SP$SP$Web;
openWebById(gWebId: SP$SP$Guid): SP$SP$Web;
getWebTemplates(LCID: number, overrideCompatLevel: number): SP$SP$WebTemplateCollection;
getCustomListTemplates(web: SP$SP$Web): SP$SP$ListTemplateCollection;
getCatalog(typeCatalog: number): SP$SP$List;
extendUpgradeReminderDate(): void;
invalidate(): void
}

declare class SP$SiteUrl mixins SP$SP$ClientObject {}

declare class SP$SubwebQuery mixins SP$SP$ClientValueObject {
get_configurationFilter(): number;
set_configurationFilter(value: number): void;
get_webTemplateFilter(): number;
set_webTemplateFilter(value: number): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$TemplateFileType {
  constructor(...args: empty): mixed;
static +standardPage: Class<SP$TemplateFileType__standardPage> & SP$TemplateFileType__standardPage & 0;// 0
static +wikiPage: Class<SP$TemplateFileType__wikiPage> & SP$TemplateFileType__wikiPage & 1;// 1
static +formPage: Class<SP$TemplateFileType__formPage> & SP$TemplateFileType__formPage & 2;// 2

}

declare class SP$TemplateFileType__standardPage mixins SP$TemplateFileType {}
declare class SP$TemplateFileType__wikiPage mixins SP$TemplateFileType {}
declare class SP$TemplateFileType__formPage mixins SP$TemplateFileType {}


declare class SP$ThemeInfo mixins SP$SP$ClientObject {
get_accessibleDescription(): string;
get_themeBackgroundImageUri(): string;
getThemeShadeByName(name: string): SP$SP$StringResult;
getThemeFontByName(name: string, lcid: number): SP$SP$StringResult
}

declare class SP$TimeZone mixins SP$SP$ClientObject {
get_description(): string;
get_id(): number;
get_information(): SP$SP$TimeZoneInformation;
localTimeToUTC(date: Date): SP$SP$DateTimeResult;
utcToLocalTime(date: Date): SP$SP$DateTimeResult
}

declare type SP$TimeZoneCollection = {
itemAt(index: number): SP$SP$TimeZone,
get_item(index: number): SP$SP$TimeZone,
getById(id: number): SP$SP$TimeZone
} & SP$SP$ClientObjectCollection<SP$TimeZone>


declare class SP$TimeZoneInformation mixins SP$SP$ClientValueObject {
get_bias(): number;
get_daylightBias(): number;
get_standardBias(): number;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$UpgradeInfo mixins SP$SP$ClientValueObject {
get_errorFile(): string;
get_errors(): number;
get_lastUpdated(): Date;
get_logFile(): string;
get_requestDate(): Date;
get_retryCount(): number;
get_startTime(): Date;
get_status(): SP$SP$UpgradeStatus;
get_upgradeType(): SP$SP$UpgradeType;
get_warnings(): number;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SP$UpgradeStatus {
  constructor(...args: empty): mixed;
static +none: Class<SP$UpgradeStatus__none> & SP$UpgradeStatus__none & 0;// 0
static +inProgress: Class<SP$UpgradeStatus__inProgress> & SP$UpgradeStatus__inProgress & 1;// 1
static +failed: Class<SP$UpgradeStatus__failed> & SP$UpgradeStatus__failed & 2;// 2
static +completed: Class<SP$UpgradeStatus__completed> & SP$UpgradeStatus__completed & 3;// 3

}

declare class SP$UpgradeStatus__none mixins SP$UpgradeStatus {}
declare class SP$UpgradeStatus__inProgress mixins SP$UpgradeStatus {}
declare class SP$UpgradeStatus__failed mixins SP$UpgradeStatus {}
declare class SP$UpgradeStatus__completed mixins SP$UpgradeStatus {}


declare  class SP$UpgradeType {
  constructor(...args: empty): mixed;
static +buildUpgrade: Class<SP$UpgradeType__buildUpgrade> & SP$UpgradeType__buildUpgrade & 0;// 0
static +versionUpgrade: Class<SP$UpgradeType__versionUpgrade> & SP$UpgradeType__versionUpgrade & 1;// 1

}

declare class SP$UpgradeType__buildUpgrade mixins SP$UpgradeType {}
declare class SP$UpgradeType__versionUpgrade mixins SP$UpgradeType {}


declare  class SP$UrlFieldFormatType {
  constructor(...args: empty): mixed;
static +hyperlink: Class<SP$UrlFieldFormatType__hyperlink> & SP$UrlFieldFormatType__hyperlink & 0;// 0
static +image: Class<SP$UrlFieldFormatType__image> & SP$UrlFieldFormatType__image & 1;// 1

}

declare class SP$UrlFieldFormatType__hyperlink mixins SP$UrlFieldFormatType {}
declare class SP$UrlFieldFormatType__image mixins SP$UrlFieldFormatType {}


declare  class SP$UrlZone {
  constructor(...args: empty): mixed;
static +defaultZone: Class<SP$UrlZone__defaultZone> & SP$UrlZone__defaultZone & 0;// 0
static +intranet: Class<SP$UrlZone__intranet> & SP$UrlZone__intranet & 1;// 1
static +internet: Class<SP$UrlZone__internet> & SP$UrlZone__internet & 2;// 2
static +custom: Class<SP$UrlZone__custom> & SP$UrlZone__custom & 3;// 3
static +extranet: Class<SP$UrlZone__extranet> & SP$UrlZone__extranet & 4;// 4

}

declare class SP$UrlZone__defaultZone mixins SP$UrlZone {}
declare class SP$UrlZone__intranet mixins SP$UrlZone {}
declare class SP$UrlZone__internet mixins SP$UrlZone {}
declare class SP$UrlZone__custom mixins SP$UrlZone {}
declare class SP$UrlZone__extranet mixins SP$UrlZone {}


declare class SP$UsageInfo mixins SP$SP$ClientValueObject {
get_bandwidth(): number;
get_discussionStorage(): number;
get_hits(): number;
get_storage(): number;
get_storagePercentageUsed(): number;
get_visits(): number;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$User mixins SP$SP$Principal {
get_email(): string;
set_email(value: string): void;
get_groups(): SP$SP$GroupCollection;
get_isSiteAdmin(): boolean;
set_isSiteAdmin(value: boolean): void;
get_userId(): SP$SP$UserIdInfo;
update(): void
}

declare type SP$UserCollection = {
itemAt(index: number): SP$SP$User,
get_item(index: number): SP$SP$User,
getByLoginName(loginName: string): SP$SP$User,
getById(id: number): SP$SP$User,
getByEmail(emailAddress: string): SP$SP$User,
removeByLoginName(loginName: string): void,
removeById(id: number): void,
remove(user: SP$SP$User): void,
add(parameters: SP$SP$UserCreationInformation): SP$SP$User,
addUser(user: SP$SP$User): SP$SP$User
} & SP$SP$ClientObjectCollection<SP$User>


declare class SP$UserCreationInformation mixins SP$SP$ClientValueObject {
get_email(): string;
set_email(value: string): void;
get_loginName(): string;
set_loginName(value: string): void;
get_title(): string;
set_title(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$UserCustomAction mixins SP$SP$ClientObject {
get_commandUIExtension(): string;
set_commandUIExtension(value: string): void;
get_description(): string;
set_description(value: string): void;
get_group(): string;
set_group(value: string): void;
get_id(): SP$SP$Guid;
get_imageUrl(): string;
set_imageUrl(value: string): void;
get_location(): string;
set_location(value: string): void;
get_name(): string;
set_name(value: string): void;
get_registrationId(): string;
set_registrationId(value: string): void;
get_registrationType(): SP$SP$UserCustomActionRegistrationType;
set_registrationType(value: SP$SP$UserCustomActionRegistrationType): void;
get_rights(): SP$SP$BasePermissions;
set_rights(value: SP$SP$BasePermissions): void;
get_scope(): SP$SP$UserCustomActionScope;
get_scriptBlock(): string;
set_scriptBlock(value: string): void;
get_scriptSrc(): string;
set_scriptSrc(value: string): void;
get_sequence(): number;
set_sequence(value: number): void;
get_title(): string;
set_title(value: string): void;
get_url(): string;
set_url(value: string): void;
get_versionOfUserCustomAction(): string;
update(): void;
deleteObject(): void
}

declare type SP$UserCustomActionCollection = {
itemAt(index: number): SP$SP$UserCustomAction,
get_item(index: number): SP$SP$UserCustomAction,
getById(id: SP$SP$Guid): SP$SP$UserCustomAction,
clear(): void,
add(): SP$SP$UserCustomAction
} & SP$SP$ClientObjectCollection<SP$UserCustomAction>


declare  class SP$UserCustomActionRegistrationType {
  constructor(...args: empty): mixed;
static +none: Class<SP$UserCustomActionRegistrationType__none> & SP$UserCustomActionRegistrationType__none & 0;// 0
static +list: Class<SP$UserCustomActionRegistrationType__list> & SP$UserCustomActionRegistrationType__list & 1;// 1
static +contentType: Class<SP$UserCustomActionRegistrationType__contentType> & SP$UserCustomActionRegistrationType__contentType & 2;// 2
static +progId: Class<SP$UserCustomActionRegistrationType__progId> & SP$UserCustomActionRegistrationType__progId & 3;// 3
static +fileType: Class<SP$UserCustomActionRegistrationType__fileType> & SP$UserCustomActionRegistrationType__fileType & 4;// 4

}

declare class SP$UserCustomActionRegistrationType__none mixins SP$UserCustomActionRegistrationType {}
declare class SP$UserCustomActionRegistrationType__list mixins SP$UserCustomActionRegistrationType {}
declare class SP$UserCustomActionRegistrationType__contentType mixins SP$UserCustomActionRegistrationType {}
declare class SP$UserCustomActionRegistrationType__progId mixins SP$UserCustomActionRegistrationType {}
declare class SP$UserCustomActionRegistrationType__fileType mixins SP$UserCustomActionRegistrationType {}


declare  class SP$UserCustomActionScope {
  constructor(...args: empty): mixed;
static +unknown: Class<SP$UserCustomActionScope__unknown> & SP$UserCustomActionScope__unknown & 0;// 0
static +site: Class<SP$UserCustomActionScope__site> & SP$UserCustomActionScope__site & 1;// 1
static +web: Class<SP$UserCustomActionScope__web> & SP$UserCustomActionScope__web & 2;// 2
static +list: Class<SP$UserCustomActionScope__list> & SP$UserCustomActionScope__list & 3;// 3

}

declare class SP$UserCustomActionScope__unknown mixins SP$UserCustomActionScope {}
declare class SP$UserCustomActionScope__site mixins SP$UserCustomActionScope {}
declare class SP$UserCustomActionScope__web mixins SP$UserCustomActionScope {}
declare class SP$UserCustomActionScope__list mixins SP$UserCustomActionScope {}


declare class SP$UserIdInfo mixins SP$SP$ClientValueObject {
get_nameId(): string;
get_nameIdIssuer(): string;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$View mixins SP$SP$ClientObject {
get_aggregations(): string;
set_aggregations(value: string): void;
get_aggregationsStatus(): string;
set_aggregationsStatus(value: string): void;
get_baseViewId(): string;
get_contentTypeId(): SP$SP$ContentTypeId;
set_contentTypeId(value: SP$SP$ContentTypeId): void;
get_defaultView(): boolean;
set_defaultView(value: boolean): void;
get_defaultViewForContentType(): boolean;
set_defaultViewForContentType(value: boolean): void;
get_editorModified(): boolean;
set_editorModified(value: boolean): void;
get_formats(): string;
set_formats(value: string): void;
get_hidden(): boolean;
set_hidden(value: boolean): void;
get_htmlSchemaXml(): string;
get_id(): SP$SP$Guid;
get_imageUrl(): string;
get_includeRootFolder(): boolean;
set_includeRootFolder(value: boolean): void;
get_viewJoins(): string;
set_viewJoins(value: string): void;
get_jsLink(): string;
set_jsLink(value: string): void;
get_listViewXml(): string;
set_listViewXml(value: string): void;
get_method(): string;
set_method(value: string): void;
get_mobileDefaultView(): boolean;
set_mobileDefaultView(value: boolean): void;
get_mobileView(): boolean;
set_mobileView(value: boolean): void;
get_moderationType(): string;
get_orderedView(): boolean;
get_paged(): boolean;
set_paged(value: boolean): void;
get_personalView(): boolean;
get_viewProjectedFields(): string;
set_viewProjectedFields(value: string): void;
get_viewQuery(): string;
set_viewQuery(value: string): void;
get_readOnlyView(): boolean;
get_requiresClientIntegration(): boolean;
get_rowLimit(): number;
set_rowLimit(value: number): void;
get_scope(): SP$SP$ViewScope;
set_scope(value: SP$SP$ViewScope): void;
get_serverRelativeUrl(): string;
get_styleId(): string;
get_threaded(): boolean;
get_title(): string;
set_title(value: string): void;
get_toolbar(): string;
set_toolbar(value: string): void;
get_toolbarTemplateName(): string;
get_viewType(): string;
get_viewData(): string;
set_viewData(value: string): void;
get_viewFields(): SP$SP$ViewFieldCollection;
deleteObject(): void;
renderAsHtml(): SP$SP$StringResult;
update(): void
}

declare type SP$ViewCollection = {
itemAt(index: number): SP$SP$View,
get_item(index: number): SP$SP$View,
getByTitle(strTitle: string): SP$SP$View,
getById(guidId: SP$SP$Guid): SP$SP$View,
add(parameters: SP$SP$ViewCreationInformation): SP$SP$View
} & SP$SP$ClientObjectCollection<SP$View>


declare class SP$ViewCreationInformation mixins SP$SP$ClientValueObject {
get_paged(): boolean;
set_paged(value: boolean): void;
get_personalView(): boolean;
set_personalView(value: boolean): void;
get_query(): string;
set_query(value: string): void;
get_rowLimit(): number;
set_rowLimit(value: number): void;
get_setAsDefaultView(): boolean;
set_setAsDefaultView(value: boolean): void;
get_title(): string;
set_title(value: string): void;
get_viewFields(): string[];
set_viewFields(value: string[]): void;
get_viewTypeKind(): SP$SP$ViewType;
set_viewTypeKind(value: SP$SP$ViewType): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare type SP$ViewFieldCollection = {
itemAt(index: number): string,
get_item(index: number): string,
get_schemaXml(): string,
moveFieldTo(field: string, index: number): void,
add(strField: string): void,
remove(strField: string): void,
removeAll(): void
} & SP$SP$ClientObjectCollection<string>


declare  class SP$ViewScope {
  constructor(...args: empty): mixed;
static +defaultValue: Class<SP$ViewScope__defaultValue> & SP$ViewScope__defaultValue & 0;// 0
static +recursive: Class<SP$ViewScope__recursive> & SP$ViewScope__recursive & 1;// 1
static +recursiveAll: Class<SP$ViewScope__recursiveAll> & SP$ViewScope__recursiveAll & 2;// 2
static +filesOnly: Class<SP$ViewScope__filesOnly> & SP$ViewScope__filesOnly & 3;// 3

}

declare class SP$ViewScope__defaultValue mixins SP$ViewScope {}
declare class SP$ViewScope__recursive mixins SP$ViewScope {}
declare class SP$ViewScope__recursiveAll mixins SP$ViewScope {}
declare class SP$ViewScope__filesOnly mixins SP$ViewScope {}


declare  class SP$ViewType {
  constructor(...args: empty): mixed;
static +none: Class<SP$ViewType__none> & SP$ViewType__none & 0;// 0
static +html: Class<SP$ViewType__html> & SP$ViewType__html & 1;// 1
static +grid: Class<SP$ViewType__grid> & SP$ViewType__grid & 2;// 2
static +calendar: Class<SP$ViewType__calendar> & SP$ViewType__calendar & 3;// 3
static +recurrence: Class<SP$ViewType__recurrence> & SP$ViewType__recurrence & 4;// 4
static +chart: Class<SP$ViewType__chart> & SP$ViewType__chart & 5;// 5
static +gantt: Class<SP$ViewType__gantt> & SP$ViewType__gantt & 6;// 6

}

declare class SP$ViewType__none mixins SP$ViewType {}
declare class SP$ViewType__html mixins SP$ViewType {}
declare class SP$ViewType__grid mixins SP$ViewType {}
declare class SP$ViewType__calendar mixins SP$ViewType {}
declare class SP$ViewType__recurrence mixins SP$ViewType {}
declare class SP$ViewType__chart mixins SP$ViewType {}
declare class SP$ViewType__gantt mixins SP$ViewType {}


declare class SP$Web mixins SP$SP$SecurableObject {
get_allowDesignerForCurrentUser(): boolean;
get_allowMasterPageEditingForCurrentUser(): boolean;
get_allowRevertFromTemplateForCurrentUser(): boolean;
get_allowRssFeeds(): boolean;
get_allProperties(): SP$SP$PropertyValues;
get_appInstanceId(): SP$SP$Guid;
get_associatedMemberGroup(): SP$SP$Group;
set_associatedMemberGroup(value: SP$SP$Group): void;
get_associatedOwnerGroup(): SP$SP$Group;
set_associatedOwnerGroup(value: SP$SP$Group): void;
get_associatedVisitorGroup(): SP$SP$Group;
set_associatedVisitorGroup(value: SP$SP$Group): void;
get_availableContentTypes(): SP$SP$ContentTypeCollection;
get_availableFields(): SP$SP$FieldCollection;
get_configuration(): number;
get_contentTypes(): SP$SP$ContentTypeCollection;
get_created(): Date;
get_currentUser(): SP$SP$User;
get_customMasterUrl(): string;
set_customMasterUrl(value: string): void;
get_description(): string;
set_description(value: string): void;
get_documentLibraryCalloutOfficeWebAppPreviewersDisabled(): boolean;
get_effectiveBasePermissions(): SP$SP$BasePermissions;
get_enableMinimalDownload(): boolean;
set_enableMinimalDownload(value: boolean): void;
get_eventReceivers(): SP$SP$EventReceiverDefinitionCollection;
get_features(): SP$SP$FeatureCollection;
get_fields(): SP$SP$FieldCollection;
get_folders(): SP$SP$FolderCollection;
get_id(): SP$SP$Guid;
get_language(): number;
get_lastItemModifiedDate(): Date;
get_lists(): SP$SP$ListCollection;
get_listTemplates(): SP$SP$ListTemplateCollection;
get_masterUrl(): string;
set_masterUrl(value: string): void;
get_navigation(): SP$SP$Navigation;
get_parentWeb(): SP$SP$WebInformation;
get_pushNotificationSubscribers(): SP$SP$PushNotificationSubscriberCollection;
get_quickLaunchEnabled(): boolean;
set_quickLaunchEnabled(value: boolean): void;
get_recycleBin(): SP$SP$RecycleBinItemCollection;
get_recycleBinEnabled(): boolean;
get_regionalSettings(): SP$SP$RegionalSettings;
get_roleDefinitions(): SP$SP$RoleDefinitionCollection;
get_rootFolder(): SP$SP$Folder;
get_saveSiteAsTemplateEnabled(): boolean;
set_saveSiteAsTemplateEnabled(value: boolean): void;
get_serverRelativeUrl(): string;
set_serverRelativeUrl(value: string): void;
get_showUrlStructureForCurrentUser(): boolean;
get_siteLogoUrl(): string;
get_siteGroups(): SP$SP$GroupCollection;
get_siteUserInfoList(): SP$SP$List;
get_siteUsers(): SP$SP$UserCollection;
get_supportedUILanguageIds(): number[];
get_syndicationEnabled(): boolean;
set_syndicationEnabled(value: boolean): void;
get_themeInfo(): SP$SP$ThemeInfo;
get_title(): string;
set_title(value: string): void;
get_treeViewEnabled(): boolean;
set_treeViewEnabled(value: boolean): void;
get_uIVersion(): number;
set_uIVersion(value: number): void;
get_uIVersionConfigurationEnabled(): boolean;
set_uIVersionConfigurationEnabled(value: boolean): void;
get_url(): string;
get_userCustomActions(): SP$SP$UserCustomActionCollection;
get_webs(): SP$SP$WebCollection;
get_webTemplate(): string;
get_workflowAssociations(): SP$SP$Workflow.Workflow$WorkflowAssociationCollection;
get_workflowTemplates(): SP$SP$Workflow.Workflow$WorkflowTemplateCollection;
doesUserHavePermissions(permissionMask: SP$SP$BasePermissions): SP$SP$BooleanResult;
getUserEffectivePermissions(userName: string): SP$SP$BasePermissions;
mapToIcon(
fileName: string,
progId: string,
size: SP$SP$Utilities.Utilities$IconSize): SP$SP$StringResult;
registerPushNotificationSubscriber(
deviceAppInstanceId: SP$SP$Guid,
serviceToken: string): SP$SP$PushNotificationSubscriber;
unregisterPushNotificationSubscriber(deviceAppInstanceId: SP$SP$Guid): void;
getPushNotificationSubscribersByArgs(customArgs: string): SP$SP$PushNotificationSubscriberCollection;
getPushNotificationSubscribersByUser(userName: string): SP$SP$PushNotificationSubscriberCollection;
doesPushNotificationSubscriberExist(deviceAppInstanceId: SP$SP$Guid): SP$SP$BooleanResult;
getPushNotificationSubscriber(deviceAppInstanceId: SP$SP$Guid): SP$SP$PushNotificationSubscriber;
getUserById(userId: number): SP$SP$User;
getAvailableWebTemplates(lcid: number, doIncludeCrossLanguage: boolean): SP$SP$WebTemplateCollection;
getCatalog(typeCatalog: number): SP$SP$List;
getChanges(query: SP$SP$ChangeQuery): SP$SP$ChangeCollection;
applyWebTemplate(webTemplate: string): void;
deleteObject(): void;
update(): void;
getFileByServerRelativeUrl(serverRelativeUrl: string): SP$SP$File;
getFolderByServerRelativeUrl(serverRelativeUrl: string): SP$SP$Folder;
getEntity(namespace: string, name: string): SP$SP$BusinessData.BusinessData$Entity;
getAppBdcCatalogForAppInstance(appInstanceId: SP$SP$Guid): SP$SP$BusinessData.BusinessData$AppBdcCatalog;
getAppBdcCatalog(): SP$SP$BusinessData.BusinessData$AppBdcCatalog;
getSubwebsForCurrentUser(query: SP$SP$SubwebQuery): SP$SP$WebCollection;
getAppInstanceById(appInstanceId: SP$SP$Guid): SP$SP$AppInstance;
getAppInstancesByProductId(productId: SP$SP$Guid): SP$SP$ClientObjectList<SP$SP$AppInstance>;
loadAndInstallAppInSpecifiedLocale(
appPackageStream: SP$SP$Base64EncodedByteArray,
installationLocaleLCID: number): SP$SP$AppInstance;
loadApp(
appPackageStream: SP$SP$Base64EncodedByteArray,
installationLocaleLCID: number): SP$SP$AppInstance;
loadAndInstallApp(appPackageStream: SP$SP$Base64EncodedByteArray): SP$SP$AppInstance;
ensureUser(logonName: string): SP$SP$User;
applyTheme(
colorPaletteUrl: string,
fontSchemeUrl: string,
backgroundImageUrl: string,
shareGenerated: boolean): void;

/**
 * Available after March 2015 CU for SharePoint 2013
 */
getList(url: string): SP$List
}

declare type SP$WebCollection = {
itemAt(index: number): SP$SP$Web,
get_item(index: number): SP$SP$Web,
add(parameters: SP$SP$WebCreationInformation): SP$SP$Web
} & SP$SP$ClientObjectCollection<SP$Web>


declare class SP$WebCreationInformation mixins SP$SP$ClientValueObject {
get_description(): string;
set_description(value: string): void;
get_language(): number;
set_language(value: number): void;
get_title(): string;
set_title(value: string): void;
get_url(): string;
set_url(value: string): void;
get_useSamePermissionsAsParentSite(): boolean;
set_useSamePermissionsAsParentSite(value: boolean): void;
get_webTemplate(): string;
set_webTemplate(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$WebInformation mixins SP$SP$ClientObject {
get_configuration(): number;
get_created(): Date;
get_description(): string;
get_id(): SP$SP$Guid;
get_language(): number;
get_lastItemModifiedDate(): Date;
get_serverRelativeUrl(): string;
get_title(): string;
get_webTemplate(): string;
get_webTemplateId(): number
}

declare class SP$WebProxy  {
static invoke(
context: SP$SP$ClientRuntimeContext,
requestInfo: SP$SP$WebRequestInfo): SP$SP$WebResponseInfo
}

declare class SP$WebRequestInfo mixins SP$SP$ClientValueObject {
get_body(): string;
set_body(value: string): void;
get_headers(): any;
set_headers(value: any): void;
get_method(): string;
set_method(value: string): void;
get_url(): string;
set_url(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$WebResponseInfo mixins SP$SP$ClientValueObject {
get_body(): string;
set_body(value: string): void;
get_headers(): any;
set_headers(value: any): void;
get_statusCode(): number;
set_statusCode(value: number): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class SP$WebTemplate mixins SP$SP$ClientObject {
get_description(): string;
get_displayCategory(): string;
get_id(): number;
get_imageUrl(): string;
get_isHidden(): boolean;
get_isRootWebOnly(): boolean;
get_isSubWebOnly(): boolean;
get_lcid(): number;
get_name(): string;
get_title(): string
}

declare type SP$WebTemplateCollection = {
itemAt(index: number): SP$SP$WebTemplate,
get_item(index: number): SP$SP$WebTemplate,
getByName(name: string): SP$SP$WebTemplate
} & SP$SP$ClientObjectCollection<SP$WebTemplate>


declare interface UI$DefaultFormsInformationRequestor {
onDefaultFormsInformationRetrieveSuccess(defaultForms: SP$SP$Application.SP$UI.UI$DefaultFormsInformation): void,
onDefaultFormsInformationRetrieveFailure(): void
} 

declare class UI$FormsInfo  {
ContentTypeName: string;
NewFormUrl: string;
DisplayFormUrl: string;
EditFormUrl: string;
constructor(): this
}

declare class UI$DefaultFormsInformation  {
DefaultForms: SP$SP$Application.SP$UI.UI$FormsInfo;
OtherForms: any;
constructor(): this
}

declare class UI$DefaultFormsMenuBuilder  {
static getDefaultFormsInformation(
requestor: SP$SP$Application.SP$UI.UI$DefaultFormsInformationRequestor,
listId: SP$SP$Guid): void
}

declare class UI$ViewSelectorMenuOptions  {
showRepairView: boolean;
showMergeView: boolean;
showEditView: boolean;
showCreateView: boolean;
showApproverView: boolean;
listId: string;
viewId: string;
viewParameters: string;
constructor(): this
}

declare interface UI$ViewInformationRequestor {
onViewInformationReturned(viewGroups: SP$SP$Application.SP$UI.UI$ViewSelectorGroups): void
} 

declare class UI$ViewSelectorGroups  {
ModeratedViews: any;
PublicViews: any;
PersonalViews: any;
OtherViews: any;
DefaultView: SP$SP$Application.SP$UI.UI$ViewSelectorMenuItem;
ViewCreation: any;
constructor(): this
}

declare class UI$ViewSelectorMenuItem  {
Text: string;
ActionScriptText: string;
NavigateUrl: string;
ImageSourceUrl: string;
Description: string;
Id: string;
Sequence: number;
ItemType: string;
GroupId: number;
constructor(): this
}

declare class UI$ViewSelectorSubMenu  {
Text: string;
ImageSourceUrl: string;
SubMenuItems: any;
constructor(): this
}

declare class UI$ViewSelectorMenuBuilder  {
static get_filterMenuItemsCallback(): (menuItems: any) => any;
static set_filterMenuItemsCallback(value: (menuItems: any) => any): void;
static showMenu(
elem: HTMLElement,
options: SP$SP$Application.SP$UI.UI$ViewSelectorMenuOptions): void;
static getViewInformation(
requestor: SP$SP$Application.SP$UI.UI$ViewInformationRequestor,
options: SP$SP$Application.SP$UI.UI$ViewSelectorMenuOptions): void
}

declare class UI$MoreColorsPicker mixins undefined.Control {
constructor(e: HTMLElement): this;
initialize(): void;
dispose(): void;
get_colorValue(): string;
set_colorValue(value: string): void
}

declare class UI$MoreColorsPage mixins undefined.Control {
constructor(e: HTMLElement): this;
initialize(): void;
dispose(): void;
get_moreColorsPicker(): SP$SP$Application.SP$UI.UI$MoreColorsPicker;
set_moreColorsPicker(value: SP$SP$Application.SP$UI.UI$MoreColorsPicker): void
}

declare class UI$ThemeWebPage mixins undefined.Control {
add_themeDisplayUpdated(value: (sender: any, e: Sys.EventArgs) => void): void;
remove_themeDisplayUpdated(value: (sender: any, e: Sys.EventArgs) => void): void;
constructor(e: HTMLElement): this;
initialize(): void;
dispose(): void;
onThemeSelectionChanged(evt: Sys.SP$UI.DomEvent): void;
updateThemeDisplay(): void;
get_thmxThemes(): any;
set_thmxThemes(value: any): void
}

declare class UI$WikiPageNameInPlaceEditor  {
constructor(ownerDoc: any, displayElemId: string, editElemId: string, editTextBoxId: string): this;
editingPageCallback(): void;
savingPageCallback(): void
}

declare class Analytics$AnalyticsUsageEntry mixins SP$SP$ClientObject {
static logAnalyticsEvent(context: SP$SP$ClientRuntimeContext, eventTypeId: number, itemId: string): void;
static logAnalyticsEvent2(
context: SP$SP$ClientRuntimeContext,
eventTypeId: number,
itemId: string,
rollupScopeId: SP$SP$Guid,
siteId: SP$SP$Guid,
userId: string): void;
static logAnalyticsAppEvent(
context: SP$SP$ClientRuntimeContext,
appEventTypeId: SP$SP$Guid,
itemId: string): void;
static logAnalyticsAppEvent2(
context: SP$SP$ClientRuntimeContext,
appEventTypeId: SP$SP$Guid,
itemId: string,
rollupScopeId: SP$SP$Guid,
siteId: SP$SP$Guid,
userId: string): void
}

declare  class Analytics$EventTypeId {
  constructor(...args: empty): mixed;
static +none: Class<Analytics$EventTypeId__none> & Analytics$EventTypeId__none & 0;// 0
static +first: Class<Analytics$EventTypeId__first> & Analytics$EventTypeId__first & 1;// 1
static +view: Class<Analytics$EventTypeId__view> & Analytics$EventTypeId__view & 2;// 2
static +recommendationView: Class<Analytics$EventTypeId__recommendationView> & Analytics$EventTypeId__recommendationView & 3;// 3
static +recommendationClick: Class<Analytics$EventTypeId__recommendationClick> & Analytics$EventTypeId__recommendationClick & 4;// 4
static +last: Class<Analytics$EventTypeId__last> & Analytics$EventTypeId__last & 5;// 5

}

declare class Analytics$EventTypeId__none mixins Analytics$EventTypeId {}
declare class Analytics$EventTypeId__first mixins Analytics$EventTypeId {}
declare class Analytics$EventTypeId__view mixins Analytics$EventTypeId {}
declare class Analytics$EventTypeId__recommendationView mixins Analytics$EventTypeId {}
declare class Analytics$EventTypeId__recommendationClick mixins Analytics$EventTypeId {}
declare class Analytics$EventTypeId__last mixins Analytics$EventTypeId {}


declare class SiteHealth$SiteHealthResult mixins SP$SP$ClientValueObject {
get_messageAsText(): string;
get_ruleHelpLink(): string;
get_ruleId(): SP$SP$Guid;
get_ruleIsRepairable(): boolean;
get_ruleName(): string;
get_status(): SP$SP$SiteHealth.SiteHealth$SiteHealthStatusType;
set_status(value: SP$SP$SiteHealth.SiteHealth$SiteHealthStatusType): void;
get_timeStamp(): Date;
set_timeStamp(value: Date): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare  class SiteHealth$SiteHealthStatusType {
  constructor(...args: empty): mixed;
static +passed: Class<SiteHealth$SiteHealthStatusType__passed> & SiteHealth$SiteHealthStatusType__passed & 0;// 0
static +failedWarning: Class<SiteHealth$SiteHealthStatusType__failedWarning> & SiteHealth$SiteHealthStatusType__failedWarning & 1;// 1
static +failedError: Class<SiteHealth$SiteHealthStatusType__failedError> & SiteHealth$SiteHealthStatusType__failedError & 2;// 2

}

declare class SiteHealth$SiteHealthStatusType__passed mixins SiteHealth$SiteHealthStatusType {}
declare class SiteHealth$SiteHealthStatusType__failedWarning mixins SiteHealth$SiteHealthStatusType {}
declare class SiteHealth$SiteHealthStatusType__failedError mixins SiteHealth$SiteHealthStatusType {}


declare class SiteHealth$SiteHealthSummary mixins SP$SP$ClientObject {
get_failedErrorCount(): number;
get_failedWarningCount(): number;
get_passedCount(): number;
get_results(): SP$SP$SiteHealth.SiteHealth$SiteHealthResult[]
}

declare class BusinessData$AppBdcCatalog mixins SP$SP$ClientObject {
getEntity(namespace: string, name: string): SP$SP$BusinessData.BusinessData$Entity;
getLobSystemProperty(lobSystemName: string, propertyName: string): SP$SP$StringResult;
setLobSystemProperty(lobSystemName: string, propertyName: string, propertyValue: string): void;
getLobSystemInstanceProperty(
lobSystemName: string,
lobSystemInstanceName: string,
propertyName: string): SP$SP$StringResult;
setLobSystemInstanceProperty(
lobSystemName: string,
lobSystemInstanceName: string,
propertyName: string,
propertyValue: string): void;
getConnectionId(lobSystemName: string, lobSystemInstanceName: string): SP$SP$StringResult;
setConnectionId(
lobSystemName: string,
lobSystemInstanceName: string,
connectionId: string): void;
getPermissibleConnections(): string[]
}

declare class BusinessData$Entity mixins SP$SP$ClientObject {
get_estimatedInstanceCount(): number;
get_name(): string;
get_namespace(): string;
getIdentifiers(): SP$SP$BusinessData.Collections.Collections$EntityIdentifierCollection;
getIdentifierCount(): SP$SP$IntResult;
getLobSystem(): SP$SP$BusinessData.BusinessData$LobSystem;
getCreatorView(methodInstanceName: string): SP$SP$BusinessData.BusinessData$EntityView;
getUpdaterView(updaterName: string): SP$SP$BusinessData.BusinessData$EntityView;
getFinderView(methodInstanceName: string): SP$SP$BusinessData.BusinessData$EntityView;
getSpecificFinderView(specificFinderName: string): SP$SP$BusinessData.BusinessData$EntityView;
getDefaultSpecificFinderView(): SP$SP$BusinessData.BusinessData$EntityView;
findSpecificDefault(
identity: SP$SP$BusinessData.Runtime.Runtime$EntityIdentity,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): SP$SP$BusinessData.Runtime.Runtime$EntityInstance;
findSpecific(
identity: SP$SP$BusinessData.Runtime.Runtime$EntityIdentity,
specificFinderName: string,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): SP$SP$BusinessData.Runtime.Runtime$EntityInstance;
findSpecificDefaultByBdcId(
bdcIdentity: string,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): SP$SP$BusinessData.Runtime.Runtime$EntityInstance;
findSpecificByBdcId(
bdcIdentity: string,
specificFinderName: string,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): SP$SP$BusinessData.Runtime.Runtime$EntityInstance;
findFiltered(
filterList: SP$SP$BusinessData.Collections.Collections$FilterCollection,
nameOfFinder: string,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): SP$SP$BusinessData.Collections.Collections$EntityInstanceCollection;
findAssociated(
entityInstance: SP$SP$BusinessData.Runtime.Runtime$EntityInstance,
associationName: string,
filterList: SP$SP$BusinessData.Collections.Collections$FilterCollection,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): SP$SP$BusinessData.Collections.Collections$EntityInstanceCollection;
getFilters(
methodInstanceName: string): SP$SP$BusinessData.Collections.Collections$FilterCollection;
execute(
methodInstanceName: string,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance,
inputParams: any[]): SP$SP$BusinessData.BusinessData$MethodExecutionResult;
getAssociationView(associationName: string): SP$SP$BusinessData.BusinessData$EntityView;
create(
fieldValues: SP$SP$BusinessData.Runtime.Runtime$EntityFieldValueDictionary,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): SP$SP$BusinessData.Runtime.Runtime$EntityIdentity;
subscribe(
eventType: SP$SP$BusinessData.Runtime.Runtime$EntityEventType,
notificationCallback: SP$SP$BusinessData.Runtime.Runtime$NotificationCallback,
onBehalfOfUser: string,
subscriberName: string,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): SP$SP$BusinessData.Runtime.Runtime$Subscription;
unsubscribe(
subscription: SP$SP$BusinessData.Runtime.Runtime$Subscription,
onBehalfOfUser: string,
unsubscriberName: string,
lobSystemInstance: SP$SP$BusinessData.BusinessData$LobSystemInstance): void
}

declare class BusinessData$EntityField mixins SP$SP$ClientObject {
get_containsLocalizedDisplayName(): boolean;
get_defaultDisplayName(): string;
get_localizedDisplayName(): string;
get_name(): string
}

declare class BusinessData$EntityIdentifier mixins SP$SP$ClientObject {
get_identifierType(): string;
get_name(): string;
getDefaultDisplayName(): SP$SP$StringResult;
containsLocalizedDisplayName(): SP$SP$BooleanResult;
getLocalizedDisplayName(): SP$SP$StringResult
}

declare class BusinessData$EntityView mixins SP$SP$ClientObject {
get_fields(): SP$SP$BusinessData.Collections.Collections$EntityFieldCollection;
get_name(): string;
get_relatedSpecificFinderName(): string;
getDefaultValues(): SP$SP$BusinessData.Runtime.Runtime$EntityFieldValueDictionary;
getXmlSchema(): SP$SP$StringResult;
getTypeDescriptor(fieldDotNotation: string): SP$SP$BusinessData.BusinessData$TypeDescriptor;
getType(fieldDotNotation: string): SP$SP$StringResult
}

declare class BusinessData$Filter mixins SP$SP$ClientObject {
get_defaultDisplayName(): string;
get_filterField(): string;
get_filterType(): string;
get_localizedDisplayName(): string;
get_name(): string;
get_valueCount(): number
}

declare class BusinessData$LobSystem mixins SP$SP$ClientObject {
get_name(): string;
getLobSystemInstances(): SP$SP$BusinessData.Collections.Collections$LobSystemInstanceCollection
}

declare class BusinessData$LobSystemInstance mixins SP$SP$ClientObject {
get_name(): string
}

declare class BusinessData$MethodExecutionResult mixins SP$SP$ClientObject {
get_returnParameterCollection(): SP$SP$BusinessData.BusinessData$ReturnParameterCollection
}

declare type BusinessData$ReturnParameterCollection = {
itemAt(index: number): SP$SP$BusinessData.Runtime.Runtime$EntityFieldValueDictionary,
get_item(index: number): SP$SP$BusinessData.Runtime.Runtime$EntityFieldValueDictionary
} & SP$SP$ClientObjectCollection<SP$SP$BusinessData.Runtime.Runtime$EntityFieldValueDictionary>


declare class BusinessData$TypeDescriptor mixins SP$SP$ClientObject {
get_containsReadOnly(): boolean;
get_isCollection(): boolean;
get_isReadOnly(): boolean;
get_name(): string;
get_typeName(): string;
containsLocalizedDisplayName(): SP$SP$BooleanResult;
getLocalizedDisplayName(): SP$SP$StringResult;
getDefaultDisplayName(): SP$SP$StringResult;
isRoot(): SP$SP$BooleanResult;
isLeaf(): SP$SP$BooleanResult;
getChildTypeDescriptors(): SP$SP$BusinessData.Collections.Collections$TypeDescriptorCollection;
getParentTypeDescriptor(): SP$SP$BusinessData.BusinessData$TypeDescriptor
}

declare type Collections$EntityFieldCollection = {
itemAt(index: number): SP$SP$BusinessData.BusinessData$EntityField,
get_item(index: number): SP$SP$BusinessData.BusinessData$EntityField
} & SP$SP$ClientObjectCollection<SP$SP$BusinessData.BusinessData$EntityField>


declare type Collections$EntityIdentifierCollection = {
itemAt(index: number): SP$SP$BusinessData.BusinessData$EntityIdentifier,
get_item(index: number): SP$SP$BusinessData.BusinessData$EntityIdentifier
} & SP$SP$ClientObjectCollection<SP$SP$BusinessData.BusinessData$EntityIdentifier>


declare type Collections$EntityInstanceCollection = {
itemAt(index: number): SP$SP$BusinessData.Runtime.Runtime$EntityInstance,
get_item(index: number): SP$SP$BusinessData.Runtime.Runtime$EntityInstance
} & SP$SP$ClientObjectCollection<SP$SP$BusinessData.Runtime.Runtime$EntityInstance>


declare type Collections$FilterCollection = {
itemAt(index: number): SP$SP$BusinessData.BusinessData$Filter,
get_item(index: number): SP$SP$BusinessData.BusinessData$Filter,
setFilterValue(inputFilterName: string, valueIndex: number, value: any): void
} & SP$SP$ClientObjectCollection<SP$SP$BusinessData.BusinessData$Filter>


declare type Collections$LobSystemInstanceCollection = {
itemAt(index: number): SP$SP$BusinessData.BusinessData$LobSystemInstance,
get_item(index: number): SP$SP$BusinessData.BusinessData$LobSystemInstance
} & SP$SP$ClientObjectCollection<SP$SP$BusinessData.BusinessData$LobSystemInstance>


declare type Collections$TypeDescriptorCollection = {
itemAt(index: number): SP$SP$BusinessData.BusinessData$TypeDescriptor,
get_item(index: number): SP$SP$BusinessData.BusinessData$TypeDescriptor
} & SP$SP$ClientObjectCollection<SP$SP$BusinessData.BusinessData$TypeDescriptor>


declare class Infrastructure$ExternalSubscriptionStore mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext, web: SP$SP$Web): this;
static newObject(
context: SP$SP$ClientRuntimeContext,
web: SP$SP$Web): SP$SP$BusinessData.Infrastructure.Infrastructure$ExternalSubscriptionStore;
indexStore(): void
}

declare  class Runtime$EntityEventType {
  constructor(...args: empty): mixed;
static +none: Class<Runtime$EntityEventType__none> & Runtime$EntityEventType__none & 0;// 0
static +itemAdded: Class<Runtime$EntityEventType__itemAdded> & Runtime$EntityEventType__itemAdded & 1;// 1
static +itemUpdated: Class<Runtime$EntityEventType__itemUpdated> & Runtime$EntityEventType__itemUpdated & 2;// 2
static +itemDeleted: Class<Runtime$EntityEventType__itemDeleted> & Runtime$EntityEventType__itemDeleted & 3;// 3

}

declare class Runtime$EntityEventType__none mixins Runtime$EntityEventType {}
declare class Runtime$EntityEventType__itemAdded mixins Runtime$EntityEventType {}
declare class Runtime$EntityEventType__itemUpdated mixins Runtime$EntityEventType {}
declare class Runtime$EntityEventType__itemDeleted mixins Runtime$EntityEventType {}


declare class Runtime$EntityFieldValueDictionary mixins SP$SP$ClientObject {
get_fieldValues(): any;
get_item(fieldName: string): any;
set_item(fieldName: string, value: any): void;
refreshLoad(): void;
fromXml(xml: string): void;
toXml(): SP$SP$StringResult;
createInstance(fieldInstanceDotNotation: string, fieldDotNotation: string): void;
createCollectionInstance(fieldDotNotation: string, size: number): void;
getCollectionSize(fieldDotNotation: string): SP$SP$IntResult
}

declare class Runtime$EntityIdentity mixins SP$SP$ClientObject {
get_fieldValues(): any;
get_item(fieldName: string): any;
constructor(context: SP$SP$ClientRuntimeContext, identifierValues: any[]): this;
get_identifierCount(): number;
static newObject(
context: SP$SP$ClientRuntimeContext,
identifierValues: any[]): SP$SP$BusinessData.Runtime.Runtime$EntityIdentity;
refreshLoad(): void
}

declare class Runtime$EntityInstance mixins SP$SP$ClientObject {
get_fieldValues(): any;
get_item(fieldName: string): any;
set_item(fieldName: string, value: any): void;
refreshLoad(): void;
createInstance(fieldInstanceDotNotation: string, fieldDotNotation: string): void;
createCollectionInstance(fieldDotNotation: string, size: number): void;
getIdentity(): SP$SP$BusinessData.Runtime.Runtime$EntityIdentity;
deleteObject(): void;
update(): void;
fromXml(xml: string): void;
toXml(): SP$SP$StringResult
}

declare class Runtime$NotificationCallback mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext, notificationEndpoint: string): this;
get_notificationContext(): string;
set_notificationContext(value: string): void;
get_notificationEndpoint(): string;
get_notificationForwarderType(): string;
set_notificationForwarderType(value: string): void;
static newObject(
context: SP$SP$ClientRuntimeContext,
notificationEndpoint: string): SP$SP$BusinessData.Runtime.Runtime$NotificationCallback
}

declare class Runtime$Subscription mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext, id: any, hash: string): this;
get_hash(): string;
get_iD(): any;
static newObject(
context: SP$SP$ClientRuntimeContext,
id: any,
hash: string): SP$SP$BusinessData.Runtime.Runtime$Subscription
}

declare class Sharing$DocumentSharingManager  {
static getRoleDefinition(
context: SP$SP$ClientRuntimeContext,
role: SP$SP$Sharing.Sharing$Role): SP$SP$RoleDefinition;
static isDocumentSharingEnabled(context: SP$SP$ClientRuntimeContext, list: SP$SP$List): SP$SP$BooleanResult;
static updateDocumentSharingInfo(
context: SP$SP$ClientRuntimeContext,
resourceAddress: string,
userRoleAssignments: SP$SP$Sharing.Sharing$UserRoleAssignment[],
validateExistingPermissions: boolean,
additiveMode: boolean,
sendServerManagedNotification: boolean,
customMessage: string,
includeAnonymousLinksInNotification: boolean): SP$SP$Sharing.Sharing$UserSharingResult[]
}

declare  class Sharing$Role {
  constructor(...args: empty): mixed;
static +none: Class<Sharing$Role__none> & Sharing$Role__none & 0;// 0
static +view: Class<Sharing$Role__view> & Sharing$Role__view & 1;// 1
static +edit: Class<Sharing$Role__edit> & Sharing$Role__edit & 2;// 2
static +owner: Class<Sharing$Role__owner> & Sharing$Role__owner & 3;// 3

}

declare class Sharing$Role__none mixins Sharing$Role {}
declare class Sharing$Role__view mixins Sharing$Role {}
declare class Sharing$Role__edit mixins Sharing$Role {}
declare class Sharing$Role__owner mixins Sharing$Role {}


declare class Sharing$UserRoleAssignment mixins SP$SP$ClientValueObject {
get_role(): SP$SP$Sharing.Sharing$Role;
set_role(value: SP$SP$Sharing.Sharing$Role): void;
get_userId(): string;
set_userId(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class Sharing$UserSharingResult mixins SP$SP$ClientValueObject {
get_allowedRoles(): SP$SP$Sharing.Sharing$Role[];
get_currentRole(): SP$SP$Sharing.Sharing$Role;
get_isUserKnown(): boolean;
get_message(): string;
get_status(): boolean;
get_user(): string;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}


/**
 * Identifies an actor as a user, document, site, or tag.
 */
declare  class Social$SocialActorType {
  constructor(...args: empty): mixed;
static +user: Class<Social$SocialActorType__user> & Social$SocialActorType__user & 0;// 0
static +document: Class<Social$SocialActorType__document> & Social$SocialActorType__document & 1;// 1
static +site: Class<Social$SocialActorType__site> & Social$SocialActorType__site & 2;// 2
static +tag: Class<Social$SocialActorType__tag> & Social$SocialActorType__tag & 3;// 3

}

declare class Social$SocialActorType__user mixins Social$SocialActorType {}
declare class Social$SocialActorType__document mixins Social$SocialActorType {}
declare class Social$SocialActorType__site mixins Social$SocialActorType {}
declare class Social$SocialActorType__tag mixins Social$SocialActorType {}



/**
 * Specifies one or more actor types in a query to the server.
 */
declare  class Social$SocialActorTypes {
  constructor(...args: empty): mixed;
static +none: Class<Social$SocialActorTypes__none> & Social$SocialActorTypes__none & 0;// 0
static +users: Class<Social$SocialActorTypes__users> & Social$SocialActorTypes__users & 1;// 1
static +documents: Class<Social$SocialActorTypes__documents> & Social$SocialActorTypes__documents & 2;// 2
static +sites: Class<Social$SocialActorTypes__sites> & Social$SocialActorTypes__sites & 3;// 3
static +tags: Class<Social$SocialActorTypes__tags> & Social$SocialActorTypes__tags & 4;// 4
static +excludeContentWithoutFeeds: Class<Social$SocialActorTypes__excludeContentWithoutFeeds> & Social$SocialActorTypes__excludeContentWithoutFeeds & 5;// 5
static +all: Class<Social$SocialActorTypes__all> & Social$SocialActorTypes__all & 6;// 6

}

declare class Social$SocialActorTypes__none mixins Social$SocialActorTypes {}
declare class Social$SocialActorTypes__users mixins Social$SocialActorTypes {}
declare class Social$SocialActorTypes__documents mixins Social$SocialActorTypes {}
declare class Social$SocialActorTypes__sites mixins Social$SocialActorTypes {}
declare class Social$SocialActorTypes__tags mixins Social$SocialActorTypes {}
declare class Social$SocialActorTypes__excludeContentWithoutFeeds mixins Social$SocialActorTypes {}
declare class Social$SocialActorTypes__all mixins Social$SocialActorTypes {}



/**
 * Specifies whether the action is to navigate to the attachment or to perform some action dependent on the context in which the attachment is presented to the user.
 */
declare  class Social$SocialAttachmentActionKind {
  constructor(...args: empty): mixed;
static +navigate: Class<Social$SocialAttachmentActionKind__navigate> & Social$SocialAttachmentActionKind__navigate & 0;// 0
static +adHocAction: Class<Social$SocialAttachmentActionKind__adHocAction> & Social$SocialAttachmentActionKind__adHocAction & 1;// 1

}

declare class Social$SocialAttachmentActionKind__navigate mixins Social$SocialAttachmentActionKind {}
declare class Social$SocialAttachmentActionKind__adHocAction mixins Social$SocialAttachmentActionKind {}


declare  class Social$SocialAttachmentKind {
  constructor(...args: empty): mixed;
static +image: Class<Social$SocialAttachmentKind__image> & Social$SocialAttachmentKind__image & 0;// 0
static +video: Class<Social$SocialAttachmentKind__video> & Social$SocialAttachmentKind__video & 1;// 1
static +document: Class<Social$SocialAttachmentKind__document> & Social$SocialAttachmentKind__document & 2;// 2

}

declare class Social$SocialAttachmentKind__image mixins Social$SocialAttachmentKind {}
declare class Social$SocialAttachmentKind__video mixins Social$SocialAttachmentKind {}
declare class Social$SocialAttachmentKind__document mixins Social$SocialAttachmentKind {}



/**
 * Specifies whether the item being inserted is a user, document, site, tag, or link.
 */
declare  class Social$SocialDataItemType {
  constructor(...args: empty): mixed;
static +user: Class<Social$SocialDataItemType__user> & Social$SocialDataItemType__user & 0;// 0
static +document: Class<Social$SocialDataItemType__document> & Social$SocialDataItemType__document & 1;// 1
static +site: Class<Social$SocialDataItemType__site> & Social$SocialDataItemType__site & 2;// 2
static +tag: Class<Social$SocialDataItemType__tag> & Social$SocialDataItemType__tag & 3;// 3
static +link: Class<Social$SocialDataItemType__link> & Social$SocialDataItemType__link & 4;// 4

}

declare class Social$SocialDataItemType__user mixins Social$SocialDataItemType {}
declare class Social$SocialDataItemType__document mixins Social$SocialDataItemType {}
declare class Social$SocialDataItemType__site mixins Social$SocialDataItemType {}
declare class Social$SocialDataItemType__tag mixins Social$SocialDataItemType {}
declare class Social$SocialDataItemType__link mixins Social$SocialDataItemType {}



/**
 * Specifies whether the overlay is a link or one or more actors.
 */
declare  class Social$SocialDataOverlayType {
  constructor(...args: empty): mixed;
static +link: Class<Social$SocialDataOverlayType__link> & Social$SocialDataOverlayType__link & 0;// 0
static +actors: Class<Social$SocialDataOverlayType__actors> & Social$SocialDataOverlayType__actors & 1;// 1

}

declare class Social$SocialDataOverlayType__link mixins Social$SocialDataOverlayType {}
declare class Social$SocialDataOverlayType__actors mixins Social$SocialDataOverlayType {}



/**
 * Specifies whether the sort order is by creation time or modification time.
 */
declare  class Social$SocialFeedSortOrder {
  constructor(...args: empty): mixed;
static +byModifiedTime: Class<Social$SocialFeedSortOrder__byModifiedTime> & Social$SocialFeedSortOrder__byModifiedTime & 0;// 0
static +byCreatedTime: Class<Social$SocialFeedSortOrder__byCreatedTime> & Social$SocialFeedSortOrder__byCreatedTime & 1;// 1

}

declare class Social$SocialFeedSortOrder__byModifiedTime mixins Social$SocialFeedSortOrder {}
declare class Social$SocialFeedSortOrder__byCreatedTime mixins Social$SocialFeedSortOrder {}



/**
 * Identifies the kind of post to be retrieved.
 */
declare  class Social$SocialFeedType {
  constructor(...args: empty): mixed;
static +personal: Class<Social$SocialFeedType__personal> & Social$SocialFeedType__personal & 0;// 0
static +news: Class<Social$SocialFeedType__news> & Social$SocialFeedType__news & 1;// 1
static +timeline: Class<Social$SocialFeedType__timeline> & Social$SocialFeedType__timeline & 2;// 2
static +likes: Class<Social$SocialFeedType__likes> & Social$SocialFeedType__likes & 3;// 3
static +everyone: Class<Social$SocialFeedType__everyone> & Social$SocialFeedType__everyone & 4;// 4

}

declare class Social$SocialFeedType__personal mixins Social$SocialFeedType {}
declare class Social$SocialFeedType__news mixins Social$SocialFeedType {}
declare class Social$SocialFeedType__timeline mixins Social$SocialFeedType {}
declare class Social$SocialFeedType__likes mixins Social$SocialFeedType {}
declare class Social$SocialFeedType__everyone mixins Social$SocialFeedType {}



/**
 * Provides information about the feed.
 * This type provides information about whether the feed on the server contains additional threads that were not returned.
 */
declare  class Social$SocialFeedAttributes {
  constructor(...args: empty): mixed;
static +none: Class<Social$SocialFeedAttributes__none> & Social$SocialFeedAttributes__none & 0;// 0
static +moreThreadsAvailable: Class<Social$SocialFeedAttributes__moreThreadsAvailable> & Social$SocialFeedAttributes__moreThreadsAvailable & 1;// 1

}

declare class Social$SocialFeedAttributes__none mixins Social$SocialFeedAttributes {}
declare class Social$SocialFeedAttributes__moreThreadsAvailable mixins Social$SocialFeedAttributes {}



/**
 * Specifies attributes of the post, such as whether the current user can like or delete the post.
 */
declare  class Social$SocialPostAttributes {
  constructor(...args: empty): mixed;
static +none: Class<Social$SocialPostAttributes__none> & Social$SocialPostAttributes__none & 0;// 0
static +canLike: Class<Social$SocialPostAttributes__canLike> & Social$SocialPostAttributes__canLike & 1;// 1
static +canDelete: Class<Social$SocialPostAttributes__canDelete> & Social$SocialPostAttributes__canDelete & 2;// 2
static +useAuthorImage: Class<Social$SocialPostAttributes__useAuthorImage> & Social$SocialPostAttributes__useAuthorImage & 3;// 3
static +useSmallImage: Class<Social$SocialPostAttributes__useSmallImage> & Social$SocialPostAttributes__useSmallImage & 4;// 4
static +canFollowUp: Class<Social$SocialPostAttributes__canFollowUp> & Social$SocialPostAttributes__canFollowUp & 5;// 5

}

declare class Social$SocialPostAttributes__none mixins Social$SocialPostAttributes {}
declare class Social$SocialPostAttributes__canLike mixins Social$SocialPostAttributes {}
declare class Social$SocialPostAttributes__canDelete mixins Social$SocialPostAttributes {}
declare class Social$SocialPostAttributes__useAuthorImage mixins Social$SocialPostAttributes {}
declare class Social$SocialPostAttributes__useSmallImage mixins Social$SocialPostAttributes {}
declare class Social$SocialPostAttributes__canFollowUp mixins Social$SocialPostAttributes {}



/**
 * Defines the type of item being specified in the SocialPostDefinitionDataItem.
 * This type is only available in server-to-server calls.
 */
declare  class Social$SocialPostDefinitionDataItemType {
  constructor(...args: empty): mixed;
static +text: Class<Social$SocialPostDefinitionDataItemType__text> & Social$SocialPostDefinitionDataItemType__text & 0;// 0
static +user: Class<Social$SocialPostDefinitionDataItemType__user> & Social$SocialPostDefinitionDataItemType__user & 1;// 1
static +document: Class<Social$SocialPostDefinitionDataItemType__document> & Social$SocialPostDefinitionDataItemType__document & 2;// 2
static +site: Class<Social$SocialPostDefinitionDataItemType__site> & Social$SocialPostDefinitionDataItemType__site & 3;// 3
static +tag: Class<Social$SocialPostDefinitionDataItemType__tag> & Social$SocialPostDefinitionDataItemType__tag & 4;// 4
static +link: Class<Social$SocialPostDefinitionDataItemType__link> & Social$SocialPostDefinitionDataItemType__link & 5;// 5

}

declare class Social$SocialPostDefinitionDataItemType__text mixins Social$SocialPostDefinitionDataItemType {}
declare class Social$SocialPostDefinitionDataItemType__user mixins Social$SocialPostDefinitionDataItemType {}
declare class Social$SocialPostDefinitionDataItemType__document mixins Social$SocialPostDefinitionDataItemType {}
declare class Social$SocialPostDefinitionDataItemType__site mixins Social$SocialPostDefinitionDataItemType {}
declare class Social$SocialPostDefinitionDataItemType__tag mixins Social$SocialPostDefinitionDataItemType {}
declare class Social$SocialPostDefinitionDataItemType__link mixins Social$SocialPostDefinitionDataItemType {}


declare  class Social$SocialPostType {
  constructor(...args: empty): mixed;
static +root: Class<Social$SocialPostType__root> & Social$SocialPostType__root & 0;// 0
static +reply: Class<Social$SocialPostType__reply> & Social$SocialPostType__reply & 1;// 1

}

declare class Social$SocialPostType__root mixins Social$SocialPostType {}
declare class Social$SocialPostType__reply mixins Social$SocialPostType {}



/**
 * Specifies a status or error code.
 */
declare  class Social$SocialStatusCode {
  constructor(...args: empty): mixed;
static +OK: Class<Social$SocialStatusCode__OK> & Social$SocialStatusCode__OK & 0;// 0
static +invalidRequest: Class<Social$SocialStatusCode__invalidRequest> & Social$SocialStatusCode__invalidRequest & 1;// 1
static +accessDenied: Class<Social$SocialStatusCode__accessDenied> & Social$SocialStatusCode__accessDenied & 2;// 2
static +itemNotFound: Class<Social$SocialStatusCode__itemNotFound> & Social$SocialStatusCode__itemNotFound & 3;// 3
static +invalidOperation: Class<Social$SocialStatusCode__invalidOperation> & Social$SocialStatusCode__invalidOperation & 4;// 4
static +itemNotModified: Class<Social$SocialStatusCode__itemNotModified> & Social$SocialStatusCode__itemNotModified & 5;// 5
static +internalError: Class<Social$SocialStatusCode__internalError> & Social$SocialStatusCode__internalError & 6;// 6
static +cacheReadError: Class<Social$SocialStatusCode__cacheReadError> & Social$SocialStatusCode__cacheReadError & 7;// 7
static +cacheUpdateError: Class<Social$SocialStatusCode__cacheUpdateError> & Social$SocialStatusCode__cacheUpdateError & 8;// 8
static +personalSiteNotFound: Class<Social$SocialStatusCode__personalSiteNotFound> & Social$SocialStatusCode__personalSiteNotFound & 9;// 9
static +failedToCreatePersonalSite: Class<Social$SocialStatusCode__failedToCreatePersonalSite> & Social$SocialStatusCode__failedToCreatePersonalSite & 10;// 10
static +notAuthorizedToCreatePersonalSite: Class<Social$SocialStatusCode__notAuthorizedToCreatePersonalSite> & Social$SocialStatusCode__notAuthorizedToCreatePersonalSite & 11;// 11
static +cannotCreatePersonalSite: Class<Social$SocialStatusCode__cannotCreatePersonalSite> & Social$SocialStatusCode__cannotCreatePersonalSite & 12;// 12
static +limitReached: Class<Social$SocialStatusCode__limitReached> & Social$SocialStatusCode__limitReached & 13;// 13
static +attachmentError: Class<Social$SocialStatusCode__attachmentError> & Social$SocialStatusCode__attachmentError & 14;// 14
static +partialData: Class<Social$SocialStatusCode__partialData> & Social$SocialStatusCode__partialData & 15;// 15
static +featureDisabled: Class<Social$SocialStatusCode__featureDisabled> & Social$SocialStatusCode__featureDisabled & 16;// 16

}

declare class Social$SocialStatusCode__OK mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__invalidRequest mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__accessDenied mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__itemNotFound mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__invalidOperation mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__itemNotModified mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__internalError mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__cacheReadError mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__cacheUpdateError mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__personalSiteNotFound mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__failedToCreatePersonalSite mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__notAuthorizedToCreatePersonalSite mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__cannotCreatePersonalSite mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__limitReached mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__attachmentError mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__partialData mixins Social$SocialStatusCode {}
declare class Social$SocialStatusCode__featureDisabled mixins Social$SocialStatusCode {}



/**
 * Specifies properties of the thread.
 */
declare  class Social$SocialThreadAttributes {
  constructor(...args: empty): mixed;
static +none: Class<Social$SocialThreadAttributes__none> & Social$SocialThreadAttributes__none & 0;// 0
static +isDigest: Class<Social$SocialThreadAttributes__isDigest> & Social$SocialThreadAttributes__isDigest & 1;// 1
static +canReply: Class<Social$SocialThreadAttributes__canReply> & Social$SocialThreadAttributes__canReply & 2;// 2
static +canLock: Class<Social$SocialThreadAttributes__canLock> & Social$SocialThreadAttributes__canLock & 3;// 3
static +isLocked: Class<Social$SocialThreadAttributes__isLocked> & Social$SocialThreadAttributes__isLocked & 4;// 4
static +replyLimitReached: Class<Social$SocialThreadAttributes__replyLimitReached> & Social$SocialThreadAttributes__replyLimitReached & 5;// 5

}

declare class Social$SocialThreadAttributes__none mixins Social$SocialThreadAttributes {}
declare class Social$SocialThreadAttributes__isDigest mixins Social$SocialThreadAttributes {}
declare class Social$SocialThreadAttributes__canReply mixins Social$SocialThreadAttributes {}
declare class Social$SocialThreadAttributes__canLock mixins Social$SocialThreadAttributes {}
declare class Social$SocialThreadAttributes__isLocked mixins Social$SocialThreadAttributes {}
declare class Social$SocialThreadAttributes__replyLimitReached mixins Social$SocialThreadAttributes {}


declare  class Social$SocialThreadType {
  constructor(...args: empty): mixed;
static +normal: Class<Social$SocialThreadType__normal> & Social$SocialThreadType__normal & 0;// 0
static +likeReference: Class<Social$SocialThreadType__likeReference> & Social$SocialThreadType__likeReference & 1;// 1
static +replyReference: Class<Social$SocialThreadType__replyReference> & Social$SocialThreadType__replyReference & 2;// 2
static +mentionReference: Class<Social$SocialThreadType__mentionReference> & Social$SocialThreadType__mentionReference & 3;// 3
static +tagReference: Class<Social$SocialThreadType__tagReference> & Social$SocialThreadType__tagReference & 4;// 4

}

declare class Social$SocialThreadType__normal mixins Social$SocialThreadType {}
declare class Social$SocialThreadType__likeReference mixins Social$SocialThreadType {}
declare class Social$SocialThreadType__replyReference mixins Social$SocialThreadType {}
declare class Social$SocialThreadType__mentionReference mixins Social$SocialThreadType {}
declare class Social$SocialThreadType__tagReference mixins Social$SocialThreadType {}



/**
 * Contains information about an actor retrieved from server. An actor is a user, document, site, or tag.
 */
declare class Social$SocialActor mixins SP$SP$ClientValueObject {

/**
 * The AccountName property returns the user account name.
 * This property is only available for social actors of type "user".
 */
get_accountName(): string;

/**
 * Identifies whether the actor is a user, document, site, or tag.
 */
get_actorType(): Social$SocialActorType;

/**
 * Specifies whether the actor can be followed by the current user.
 */
get_canFollow(): boolean;

/**
 * Returns the URI of the document or site content.
 * This property is only available for social actors of type Document or Site.
 */
get_contentUri(): string;
get_emailAddress(): string;

/**
 * Returns the URI of the user's followed content folder.
 * This property is only available for social actors of type "user".
 */
get_followedContentUri(): string;

/**
 * Returns the actor's unique identifier.
 */
get_id(): string;

/**
 * Returns the URI of the image representing the actor.
 * This property is only available if actor is User, Document, or Site.
 */
get_imageUri(): string;

/**
 * Returns true if the current user is following the actor; otherwise, it returns false.
 */
get_isFollowed(): boolean;

/**
 * Returns the URI of the library containing the document.
 * This property is only available for social actors of type "document".
 */
get_libraryUri(): string;

/**
 * The Name property returns the actor's display name.
 */
get_name(): string;

/**
 * Returns the URI of the user's personal site.
 * This property is only available for social actors of type "user".
 */
get_personalSiteUri(): string;

/**
 * Represents the status of retrieving the actor
 */
get_status(): Social$SocialStatusCode;

/**
 * The StatusText property returns the most recent post of the user.
 * This property is only available for social actors of type "user".
 */
get_statusText(): string;

/**
 * Returns the GUID of the tag.
 * Only available for social actors of type "tag"
 */
get_tagGuid(): string;

/**
 * Returns the user's title
 * This property is only available for social actors of type "user".
 */
get_title(): string;

/**
 * Returns the URI of the actor.
 */
get_uri(): string
}


/**
 * Identifies an actor to the server. An actor can be a user, document, site, or tag.
 */
declare class Social$SocialActorInfo mixins SP$SP$ClientValueObject {

/**
 * User account name.
 * This property is only available for social actors of type "user".
 */
get_accountName(): string;

/**
 * User account name.
 * This property is only available for social actors of type "user".
 */
set_accountName(value: string): string;

/**
 * Identifies whether the actor is a user, document, site, or tag.
 */
get_actorType(): Social$SocialActorType;

/**
 * Identifies whether the actor is a user, document, site, or tag.
 */
set_actorType(value: Social$SocialActorType): Social$SocialActorType;

/**
 * URI of the document or site content.
 * This property is only available for social actors of type Document or Site.
 */
get_contentUri(): string;

/**
 * URI of the document or site content.
 * This property is only available for social actors of type Document or Site.
 */
set_contentUri(value: string): string;

/**
 * Actor's unique identifier.
 */
get_id(): string;

/**
 * Actor's unique identifier.
 */
set_id(value: string): string;

/**
 * GUID of the tag.
 * Only available for social actors of type "tag"
 */
get_tagGuid(): string;

/**
 * GUID of the tag.
 * Only available for social actors of type "tag"
 */
set_tagGuid(value: string): string
}


/**
 * Represents an image, document preview, or video preview attachment.
 */
declare class Social$SocialAttachment mixins SP$SP$ClientValueObject {

/**
 * Specifies the type of object that the attachment contains.
 */
get_attachmentKind(): Social$SocialAttachmentKind;

/**
 * Specifies the type of object that the attachment contains.
 */
set_attachmentKind(value: Social$SocialAttachmentKind): Social$SocialAttachmentKind;

/**
 * Specifies the action to take when the user selects the attachment.
 * This property is only present if the AttachmentKind is Video.
 */
get_clickAction(): Social$SocialAttachmentAction;

/**
 * Specifies the action to take when the user selects the attachment.
 * This property is only present if the AttachmentKind is Video.
 */
set_clickAction(value: Social$SocialAttachmentAction): Social$SocialAttachmentAction;

/**
 * Specifies the URI of the attachment content.
 */
get_contentUri(): string;

/**
 * Specifies the URI of the attachment content.
 */
set_contentUri(value: string): string;

/**
 * Provides a text description of the attachment.
 */
get_description(): string;

/**
 * Provides a text description of the attachment.
 */
set_description(value: string): string;

/**
 * Specifies the height of the attachment or of the attachment preview.
 */
get_height(): number;

/**
 * Specifies the height of the attachment or of the attachment preview.
 */
set_height(value: number): number;

/**
 * Specifies the duration of the attachment in seconds. This property is only present if the AttachmentKind is Video.
 */
get_length(): number;

/**
 * Specifies the duration of the attachment in seconds. This property is only present if the AttachmentKind is Video.
 */
set_length(value: number): number;

/**
 * Provides the attachment name.
 */
get_name(): string;

/**
 * Provides the attachment name.
 */
set_name(value: string): string;

/**
 * Specifies the URI of the attachment's preview thumbnail.
 * This property is only present if the AttachmentKind is Document or Video.
 */
get_previewUri(): string;

/**
 * Specifies the URI of the attachment's preview thumbnail.
 * This property is only present if the AttachmentKind is Document or Video.
 */
set_previewUri(value: string): string;

/**
 * Provides the attachment URI.
 */
get_uri(): string;

/**
 * Provides the attachment URI.
 */
set_uri(value: string): string;

/**
 * Specifies the width of the attachment or of the attachment preview.
 */
get_width(): number;

/**
 * Specifies the width of the attachment or of the attachment preview.
 */
set_width(value: number): number
}


/**
 * Specifies the user actions that are allowed for the attachment object.
 */
declare class Social$SocialAttachmentAction mixins SP$SP$ClientValueObject {

/**
 * Specifies whether the action is to navigate to a URI or an action that is dependent on the context in which the object is presented to the user.
 */
get_actionKind(): Social$SocialAttachmentActionKind;

/**
 * Specifies whether the action is to navigate to a URI or an action that is dependent on the context in which the object is presented to the user.
 */
set_actionKind(value: Social$SocialAttachmentActionKind): Social$SocialAttachmentActionKind;

/**
 * Specifies the URI associated with the action.
 */
get_actionUri(): string;

/**
 * Specifies the URI associated with the action.
 */
set_actionUri(value: string): string
}


/**
 * Defines a user, document, site, tag, or link to be inserted in a new post.
 * The SocialPostCreationData class defines the content text that contains substitution strings.
 * Each substitution string is replaced by a SocialDataItem value.
 */
declare class Social$SocialDataItem mixins SP$SP$ClientValueObject {

/**
 * Identifies the user.
 */
get_accountName(): string;

/**
 * Identifies the user.
 */
set_accountName(value: string): string;

/**
 * Specifies whether the item being inserted is a user, document, site, tag, or link.
 */
get_itemType(): Social$SocialDataItemType;

/**
 * Specifies whether the item being inserted is a user, document, site, tag, or link.
 */
set_itemType(value: Social$SocialDataItemType): Social$SocialDataItemType;

/**
 * Identifies the tag.
 */
get_tagGuid(): string;

/**
 * Identifies the tag.
 */
set_tagGuid(value: string): string;

/**
 * Specifies the plain text to be inserted in the created post. The server can use the specified text or can use text that identifies the item, for example the name specified in a user profile.
 */
get_text(): string;

/**
 * Specifies the plain text to be inserted in the created post. The server can use the specified text or can use text that identifies the item, for example the name specified in a user profile.
 */
set_text(value: string): string;

/**
 * Identifies the site, document, or link.
 */
get_uri(): string;

/**
 * Identifies the site, document, or link.
 */
set_uri(value: string): string
}


/**
 * Provides information about an overlay.
 * An overlay is a substring in a post that represents a user, document, site, tag, or link.
 * The SocialPost class contains an array of SocialDataOverlay objects.
 * Each of the SocialDataOverlay objects specifies a link or one or more actors.
 */
declare class Social$SocialDataOverlay mixins SP$SP$ClientValueObject {

/**
 * Specifies one or more actors as an array of integers where each integer specifies an index into the SocialThreadActors array.
 * This property is only available if the get_overlayType() has a value of SocialDataOverlayType.actors.
 */
get_actorIndexes(): number[];

/**
 * The Index property specifies the starting position of the overlay in the SocialPostText string
 */
get_index(): number;

/**
 * The Length property specifies the number of characters in the overlay.
 */
get_length(): number;

/**
 * The LinkUri property specifies the URI of the link.
 * This property is only available if the get_overlayType() has a value of SocialDataOverlayType.link.
 */
get_linkUri(): string;

/**
 * Specifies whether the overlay is a link or one or more actors.
 */
get_overlayType(): Social$SocialDataOverlayType
}


/**
 * Specifies information about errors that the server has encountered.
 */
declare class Social$SocialExceptionDetails mixins SP$SP$ClientValueObject {
get_internalErrorCode(): number;
get_internalMessage(): string;
get_internalStackTrace(): string;

/**
 * Specifies a type name associated with the internal error if a type name is available.
 */
get_internalTypeName(): string;
get_status(): Social$SocialStatusCode
}


/**
 * Specifies a feed, which contains an array of SocialThreads, each of which specifies a root SocialPost object and an array of response SocialPost objects.
 */
declare class Social$SocialFeed mixins SP$SP$ClientValueObject {

/**
 * Specifies attributes of the returned feed.
 * The attributes specify if the requested feed has additional threads that were not included in the returned thread.
 */
get_attributes(): Social$SocialFeedAttributes;

/**
 * Returns the date-time of the most recent post that was requested.
 * The most recent post that was requested can be removed from the feed if the current user does not have access to it.
 * Consequently, the feed does not always contain the post with the date specified in this property.
 */
get_newestProcessed(): string;

/**
 * The OldestProcessed property returns the date-time of the oldest post that was requested.
 * The oldest post that was requested can be removed from the feed if the current user does not have access to it.
 * Consequently, the feed does not always contain the post with the date specified in this property
 */
get_oldestProcessed(): string;

/**
 * Contains the social threads in the feed.
 */
get_threads(): Social$SocialThread[];

/**
 * Returns the number of mentions of the current user that have been added to the feed on the server since the time that the unread mention count was cleared for the current user.
 */
get_unreadMentionCount(): number
}


/**
 * Provides access to social feeds.
 * It provides methods to create posts, delete posts, read posts, and perform other operations on posts.
 */
declare class Social$SocialFeedManager mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext): this;

/**
 * Returns the current user
 */
get_owner(): Social$SocialActor;

/**
 * Specifies the URI of the personal site portal.
 */
get_personalSitePortalUri(): string;

/**
 * Creates a post in the current user's newsfeed, in the specified user's feed, or in the specified thread.
 * This method returns a new or a modified thread.
 * @param targetId Optional, specifies the target of the post.
If this parameter is null, the post is created as a root post in the current user's feed.
If this parameter is set to a site URL or a site actor identification, the post is created as a root post in the specified site feed.
If this parameter is set to a thread identification, the post is created as a reply post in the specified thread.
 * @param creationData Specifies the format and content of the post.
 */
createPost(
targetId: string,
creationData: Social$SocialPostCreationData): Social$SocialThread;

/**
 * Deletes the specified post.
 * This method returns a digest of the modified thread.
 * If the entire thread is deleted, this method returns null.
 * If the post being deleted is the root post of a thread, all reply posts are also deleted.
 * @param postId Specifies the post to be deleted.
Corresponds the value returned from SocialPost.get_id().
 */
deletePost(postId: string): Social$SocialThread;

/**
 * Returns the set of users who have liked the specified post.
 * @param postId Specifies the post being queried for information about users that like the post.
Corresponds the value returned from SocialPost.get_id().
 */
getAllLikers(postId: string): Social$SocialActor[];

/**
 * Returns a feed for the current user.
 * The feed consists of an array of message threads.
 * Each thread consists of a root post and an array of reply posts.
 */
getFeed(
type: Social$SocialFeedType,
options: Social$SocialFeedOptions): Social$SocialFeed;

/**
 * Returns the public feed for a user or for a site.
 * The feed lists activity by the user and posts created by the server for that user.
 * For example, the feed can include posts indicating the user's birthday or indicating that the user liked a post.
 * @param actorId Corresponds to the value returned by SocialActor.get_id().
If the actorId specifies the current user, this method returns the public feed for the current user.
 */
getFeedFor(actorId: string, options: Social$SocialFeedOptions): Social$SocialFeed;

/**
 * Returns the root post and all reply posts in the thread.
 */
getFullThread(threadId: string): Social$SocialThread;

/**
 * Returns a feed containing mention reference threads from the current user's personal feed.
 */
getMentions(
clearUnreadMentions: boolean,
options: Social$SocialFeedOptions): Social$SocialFeed;

/**
 * Returns the server's count of unread mentions of the current user.
 * The server maintains a count of unread mentions in posts, but does not track which mentions have been read.
 * When a new mention is stored on the server, it increments the unread mention for the user specified by the mention.
 * The unread mention count is cleared by the GetMentions method.
 */
getUnreadMentionCount(): SP$SP$IntResult;

/**
 * Specifies that the current user likes the specified post.
 * Returns a digest thread containing the specified post.
 * A digest thread contains the root post and a selection of reply posts
 */
likePost(postId: string): Social$SocialThread;

/**
 * Specifies that the current user does not like the specified post.
 * Returns a digest thread containing the specified post.
 */
unlikePost(postId: string): Social$SocialThread;

/**
 * Prevents any user from adding a new reply post to the specified thread.
 * Once a thread is locked, no new reply posts can be added until after the thread has been unlocked with the unlockThread method.
 * This method returns a digest of the locked thread
 */
lockThread(threadId: string): Social$SocialThread;

/**
 * Allows users to add new reply posts to the specified thread.
 */
unlockThread(threadId: string): Social$SocialThread;

/**
 * Suppresses activity notifications for the current user of updates to the specified thread.
 */
suppressThreadNotifications(threadId: string): void;

/**
 * Creates an image attachment for a future post.
 */
createImageAttachment(name: string, description: string, imageData: any): Social$SocialAttachment;

/**
 * Generates a preview for the content specified by the URL.
 */
getPreview(itemUrl: string): Social$SocialAttachment;

/**
 * Returns the preview image data for an image attachment.
 * @param url Specifies the URL of the preview image relative to the personal site portal.
 * @param key Specifies the URL-encoded key to decrypt the image.
 * @param iv Specifies the URL-encoded initialization vector for decrypting the image.
 */
getPreviewImage(url: string, key: string, iv: string): any
}

declare class Social$SocialFeedOptions mixins SP$SP$ClientObject {
get_maxThreadCount(): number;
set_maxThreadCount(value: number): number;
get_newerThan(): string;
set_newerThan(value: string): string;
get_olderThan(): string;
set_olderThan(value: string): string;
get_sortOrder(): Social$SocialFeedSortOrder;
set_sortOrder(value: Social$SocialFeedSortOrder): Social$SocialFeedSortOrder
}


/**
 * Provides properties and methods for managing a user's list of followed actors.
 * Actors can be users, documents, sites, and tags.
 */
declare class Social$SocialFollowingManager mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext): this;

/**
 * URI to a site  that lists the current user's followed documents.
 */
get_followedDocumentsUri(): string;

/**
 * URI to a site  that lists the current user's followed sites.
 */
get_followedSitesUri(): string;

/**
 * Adds the specified actor to the current user's list of followed items.
 * Returns one of the following values, wrapped into the SP.IntResult object:
 * 0 = ok,
 * 1 = alreadyFollowing,
 * 2 = limitReached,
 * 3 = internalError
 */
follow(actor: Social$SocialActorInfo): SP$SP$IntResult;
stopFollowing(actor: Social$SocialActorInfo): SP$SP$BooleanResult;
isFollowed(actor: Social$SocialActorInfo): SP$SP$BooleanResult;
getFollowed(types: Social$SocialActorTypes): Social$SocialActor[];
getFollowedCount(types: Social$SocialActorTypes): SP$SP$IntResult;

/**
 * Returns the users who are followers of the current user.
 */
getFollowers(): Social$SocialActor[];
getSuggestions(): Social$SocialActor[]
}


/**
 * Defines a link that includes a URI and text representation.
 * This class is used to represent the location of a web site.
 */
declare class Social$SocialLink mixins SP$SP$ClientValueObject {
get_text(): string;
set_text(value: string): string;
get_uri(): string;
set_uri(value: string): string
}


/**
 * Specifies a post read from the server.
 */
declare class Social$SocialPost mixins SP$SP$ClientValueObject {

/**
 * Specifies an image, document preview, or video preview attachment
 */
get_attachment(): Social$SocialAttachment;

/**
 * Describes attributes about the post, such as whether the current user can delete or like the post.
 */
get_attributes(): Social$SocialPostAttributes;

/**
 * Specifies the author of the post as an index to the social thread's Actors array.
 */
get_authorIndex(): number;

/**
 * Specifies the date and time that the post was created on the server.
 */
get_createdTime(): string;

/**
 * Specifies the unique identifier of the post.
 */
get_id(): string;

/**
 * Specifies information about users who like the post.
 */
get_likerInfo(): Social$SocialPostActorInfo;

/**
 * Specifies the date and time that the post was last modified on the server.
 */
get_modifiedTime(): string;

/**
 * An array of objects in a post, where each object represents a user, document, site, tag, or link.
 */
get_overlays(): Social$SocialDataOverlay[];

/**
 * Specifies whether a post is the root post or a reply post in a thread
 */
get_postType(): Social$SocialPostType;

/**
 * Specifies the URI of the image to be displayed with the post.
 */
get_preferredImageUri(): string;

/**
 * Specifies the link to a web site associated with the application that created the post.
 */
get_source(): Social$SocialLink;

/**
 * Specifies the text of the post.
 */
get_text(): string
}


/**
 * Specifies a set of users, documents, sites, and tags by an index into the SocialThreadActors array
 */
declare class Social$SocialPostActorInfo mixins SP$SP$ClientValueObject {
get_includesCurrentUser(): boolean;

/**
 * Specifies an array of indexes into the SocialThreadActors array.
 * The server can choose to return a limited set of actors. For example, the server can choose to return a subset of the users that like a post.
 */
get_indexes(): number[];
get_totalCount(): number
}


/**
 * Specifies the content of a post in the SocialFeedManager.createPost method.
 * The post consists of a text message, which can optionally include social tags, mentions of users, and links.
 */
declare class Social$SocialPostCreationData mixins SP$SP$ClientValueObject {

/**
 * Specifies an image, document preview, or video preview to be used in the post.
 */
get_attachment(): Social$SocialAttachment;

/**
 * Specifies an image, document preview, or video preview to be used in the post.
 */
set_attachment(value: Social$SocialAttachment): Social$SocialAttachment;

/**
 * Specifies an array consisting of social tags, user mentions, links to documents, links to sites, and generic links.
 * Each element in the array is inserted into the ContentText string if there is a substitution reference to the array element in the string.
 */
get_contentItems(): Social$SocialDataItem[];

/**
 * Specifies an array consisting of social tags, user mentions, links to documents, links to sites, and generic links.
 * Each element in the array is inserted into the ContentText string if there is a substitution reference to the array element in the string.
 */
set_contentItems(value: Social$SocialDataItem[]): Social$SocialDataItem[];

/**
 * Contains the text body of the post.
 */
get_contentText(): string;

/**
 * Contains the text body of the post.
 * It can optionally contain one or more substitution references to elements in the zero-based ContentItems array.
 * A substitution reference consists of a series of characters that consist of an open-brace character ({) followed by one of more digits in the range 0 to 9 and terminated by a close-brace character (}).
 * The substitution reference is replaced by the text value of the element in the in the array at the offset specified by the value of the digits.
 * For example, the text string "{0}" is replaced by the first element in the ContentItems array.
 */
set_contentText(value: string): string;

/**
 * Specifies additional information when creating server-generated posts
 */
get_definitionData(): Social$SocialPostDefinitionData;

/**
 * Specifies additional information when creating server-generated posts
 */
set_definitionData(value: Social$SocialPostDefinitionData): Social$SocialPostDefinitionData;

/**
 * Specifies the link to a web site associated with the application that created the post
 */
get_source(): Social$SocialLink;

/**
 * Specifies the link to a web site associated with the application that created the post
 */
set_source(value: Social$SocialLink): Social$SocialLink;

/**
 * Specifies that access to the post SHOULD be restricted to users that have access to the objects identified by the array of URIs
 */
get_securityUris(): string[];

/**
 * Specifies that access to the post SHOULD be restricted to users that have access to the objects identified by the array of URIs
 */
set_securityUris(value: string[]): string[];

/**
 * Indicates whether the post is to be used as the current user's new status message.
 */
get_updateStatusText(): boolean;

/**
 * Indicates whether the post is to be used as the current user's new status message.
 */
set_updateStatusText(value: boolean): boolean
}


/**
 * Provides additional information about server-generated posts.
 * This type can only be specified in a server-to-server call.
 */
declare class Social$SocialPostDefinitionData mixins SP$SP$ClientValueObject {
get_items(): Social$SocialPostDefinitionDataItem[];
set_items(
value: Social$SocialPostDefinitionDataItem[]): Social$SocialPostDefinitionDataItem[];
get_name(): string;
set_name(value: string): string
}


/**
 * Specifies an item to be inserted in a post by replacing a token in the post definition.
 * This type can only be specified in a server-to-server call.
 */
declare class Social$SocialPostDefinitionDataItem mixins SP$SP$ClientValueObject {

/**
 * Specifies the name of the user.
 * This property is only used if the ItemType property specifies that the item is a User.
 */
get_accountName(): string;

/**
 * Specifies the name of the user.
 * This property is only used if the ItemType property specifies that the item is a User.
 */
set_accountName(value: string): string;

/**
 * Specifies whether the item being formatted is a text element, a user, a document, a site, a tag, or a link.
 */
get_itemType(): Social$SocialPostDefinitionDataItemType;

/**
 * Specifies whether the item being formatted is a text element, a user, a document, a site, a tag, or a link.
 */
set_itemType(
value: Social$SocialPostDefinitionDataItemType): Social$SocialPostDefinitionDataItemType;

/**
 * Specifies the post definition token to be replaced by the item
 */
get_placeholderName(): string;

/**
 * Specifies the post definition token to be replaced by the item
 */
set_placeholderName(value: string): string;

/**
 * Specifies the GUID that identifies the tag.
 * This property is only used if the ItemType property specifies that the item is a Tag.
 */
get_tagGuid(): string;

/**
 * Specifies the GUID that identifies the tag.
 * This property is only used if the ItemType property specifies that the item is a Tag.
 */
set_tagGuid(value: string): string;

/**
 * Specifies the text that is substituted for the placeholder
 */
get_text(): string;

/**
 * Specifies the text that is substituted for the placeholder
 */
set_text(value: string): string;

/**
 * Specifies the URI of the document, site, or link.
 * This property is only available if the ItemType property specifies that the item is a Document, Link, or Site.
 */
get_uri(): string;

/**
 * Specifies the URI of the document, site, or link.
 * This property is only available if the ItemType property specifies that the item is a Document, Link, or Site.
 */
set_uri(value: string): string
}


/**
 * Specifies a reference to a post in another thread.
 * The referenced post can be a post with a tag, a post that is liked, a post that mentions a user, or a post that is a reply.
 */
declare class Social$SocialPostReference mixins SP$SP$ClientValueObject {

/**
 * Provides a digest of the thread containing the referenced post
 */
get_digest(): Social$SocialThread;
get_post(): Social$SocialPost;

/**
 * Specifies the unique identifier of the thread containing the referenced post.
 */
get_threadId(): string;

/**
 * Specifies the current owner of the thread as an index into the SocialThreadActors array.
 */
get_threadOwnerIndex(): number
}


/**
 * Specifies a thread that is stored on the server.
 * The thread contains a root post and zero or more reply posts.
 */
declare class Social$SocialThread mixins SP$SP$ClientValueObject {

/**
 * Specifies the users who have created a post in the returned thread and also contains any users, documents, sites, and tags that are referenced in any of the posts in the returned thread.
 */
get_actors(): Social$SocialActor[];

/**
 * Specifies attributes of the thread, such as whether the current user can reply or lock the thread and whether the thread is a digest of a thread on the server, whether the number of replies has reached the maximum, and whether the thread is locked.
 */
get_attributes(): Social$SocialThreadAttributes;

/**
 * Specifies the unique identification of the thread.
 */
get_id(): string;

/**
 * Specifies the thread owner as an index into the Actors array.
 * Typically, the thread owner is the user who created the root post, but the thread owner can be any user included in the Actors array.
 */
get_ownerIndex(): number;

/**
 * Specifies a URI that is a permanent reference to the thread, if such a permanent reference is available.
 */
get_permalink(): string;

/**
 * Specifies a reference to a post in another thread.
 * The PostReference property is available only if the ThreadType has a value of ReplyReference, LikeReference, MentionReference, or TagReference.
 */
get_postReference(): Social$SocialPostReference;

/**
 * Returns an array of zero or more reply posts.
 * The server can return a subset of the reply posts that are stored on the server.
 */
get_replies(): Social$SocialPost[];
get_rootPost(): Social$SocialPost;

/**
 * Provides information about conditions that were encountered retrieving the thread that did not prevent the operation from completing.
 */
get_status(): Social$SocialStatusCode;

/**
 * Specifies if the thread is a normal thread created by one or more CreatePost calls or a reference post generated by the server when a user replies to a post, likes a post, or creates a post with a tag or mention
 */
get_threadType(): Social$SocialThreadType;
get_totalReplyCount(): number
}

declare  class Taxonomy$StringMatchOption {
  constructor(...args: empty): mixed;
static +startsWith: Class<Taxonomy$StringMatchOption__startsWith> & Taxonomy$StringMatchOption__startsWith & 0;// 0
static +exactMatch: Class<Taxonomy$StringMatchOption__exactMatch> & Taxonomy$StringMatchOption__exactMatch & 1;// 1

}

declare class Taxonomy$StringMatchOption__startsWith mixins Taxonomy$StringMatchOption {}
declare class Taxonomy$StringMatchOption__exactMatch mixins Taxonomy$StringMatchOption {}


declare  class Taxonomy$ChangeItemType {
  constructor(...args: empty): mixed;
static +unknown: Class<Taxonomy$ChangeItemType__unknown> & Taxonomy$ChangeItemType__unknown & 0;// 0
static +term: Class<Taxonomy$ChangeItemType__term> & Taxonomy$ChangeItemType__term & 1;// 1
static +termSet: Class<Taxonomy$ChangeItemType__termSet> & Taxonomy$ChangeItemType__termSet & 2;// 2
static +group: Class<Taxonomy$ChangeItemType__group> & Taxonomy$ChangeItemType__group & 3;// 3
static +termStore: Class<Taxonomy$ChangeItemType__termStore> & Taxonomy$ChangeItemType__termStore & 4;// 4
static +site: Class<Taxonomy$ChangeItemType__site> & Taxonomy$ChangeItemType__site & 5;// 5

}

declare class Taxonomy$ChangeItemType__unknown mixins Taxonomy$ChangeItemType {}
declare class Taxonomy$ChangeItemType__term mixins Taxonomy$ChangeItemType {}
declare class Taxonomy$ChangeItemType__termSet mixins Taxonomy$ChangeItemType {}
declare class Taxonomy$ChangeItemType__group mixins Taxonomy$ChangeItemType {}
declare class Taxonomy$ChangeItemType__termStore mixins Taxonomy$ChangeItemType {}
declare class Taxonomy$ChangeItemType__site mixins Taxonomy$ChangeItemType {}


declare  class Taxonomy$ChangeOperationType {
  constructor(...args: empty): mixed;
static +unknown: Class<Taxonomy$ChangeOperationType__unknown> & Taxonomy$ChangeOperationType__unknown & 0;// 0
static +add: Class<Taxonomy$ChangeOperationType__add> & Taxonomy$ChangeOperationType__add & 1;// 1
static +edit: Class<Taxonomy$ChangeOperationType__edit> & Taxonomy$ChangeOperationType__edit & 2;// 2
static +deleteObject: Class<Taxonomy$ChangeOperationType__deleteObject> & Taxonomy$ChangeOperationType__deleteObject & 3;// 3
static +move: Class<Taxonomy$ChangeOperationType__move> & Taxonomy$ChangeOperationType__move & 4;// 4
static +copy: Class<Taxonomy$ChangeOperationType__copy> & Taxonomy$ChangeOperationType__copy & 5;// 5
static +pathChange: Class<Taxonomy$ChangeOperationType__pathChange> & Taxonomy$ChangeOperationType__pathChange & 6;// 6
static +merge: Class<Taxonomy$ChangeOperationType__merge> & Taxonomy$ChangeOperationType__merge & 7;// 7
static +importObject: Class<Taxonomy$ChangeOperationType__importObject> & Taxonomy$ChangeOperationType__importObject & 8;// 8
static +restore: Class<Taxonomy$ChangeOperationType__restore> & Taxonomy$ChangeOperationType__restore & 9;// 9

}

declare class Taxonomy$ChangeOperationType__unknown mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__add mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__edit mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__deleteObject mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__move mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__copy mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__pathChange mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__merge mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__importObject mixins Taxonomy$ChangeOperationType {}
declare class Taxonomy$ChangeOperationType__restore mixins Taxonomy$ChangeOperationType {}


declare class Taxonomy$TaxonomySession mixins SP$SP$ClientObject {
static getTaxonomySession(context: SP$SP$ClientContext): Taxonomy$TaxonomySession;
get_offlineTermStoreNames(): string[];
get_termStores(): Taxonomy$TermStoreCollection;
getTerms(labelMatchInformation: Taxonomy$LabelMatchInformation): Taxonomy$TermCollection;
updateCache(): void;
getTerm(guid: SP$SP$Guid): Taxonomy$Term;
getTermsById(termIds: SP$SP$Guid[]): Taxonomy$TermCollection;
getTermsInDefaultLanguage(
termLabel: string,
defaultLabelOnly: boolean,
stringMatchOption: Taxonomy$StringMatchOption,
resultCollectionSize: number,
trimUnavailable: boolean,
trimDeprecated: boolean): Taxonomy$TermCollection;
getTermsInWorkingLocale(
termLabel: string,
defaultLabelOnly: boolean,
stringMatchOption: Taxonomy$StringMatchOption,
resultCollectionSize: number,
trimUnavailable: boolean,
trimDeprecated: boolean): Taxonomy$TermCollection;
getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): Taxonomy$TermCollection;
getTermsWithCustomProperty(
customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation): Taxonomy$TermCollection;
getTermSetsByName(termSetName: string, lcid: number): Taxonomy$TermSetCollection;
getTermSetsByTermLabel(requiredTermLabels: string[], lcid: number): Taxonomy$TermSetCollection;
getDefaultKeywordsTermStore(): Taxonomy$TermStore;
getDefaultSiteCollectionTermStore(): Taxonomy$TermStore
}

declare type Taxonomy$TermStoreCollection = {
itemAt(index: number): Taxonomy$TermStore,
get_item(index: number): Taxonomy$TermStore,
getById(id: SP$SP$Guid): Taxonomy$TermStore,
getByName(name: string): Taxonomy$TermStore
} & SP$SP$ClientObjectCollection<Taxonomy$TermStore>


declare class Taxonomy$TermStore mixins SP$SP$ClientObject {
get_contentTypePublishingHub(): string;
get_defaultLanguage(): number;
set_defaultLanguage(value: number): void;
get_groups(): Taxonomy$TermGroupCollection;
get_hashTagsTermSet(): Taxonomy$TermSet;
get_id(): SP$SP$Guid;
get_isOnline(): boolean;
get_keywordsTermSet(): Taxonomy$TermSet;
get_languages(): number[];
get_name(): string;
get_orphanedTermsTermSet(): Taxonomy$TermSet;
get_systemGroup(): Taxonomy$TermGroup;
get_workingLanguage(): number;
set_workingLanguage(value: number): void;
addLanguage(lcid: number): void;
commitAll(): void;
createGroup(name: string, groupId?: SP$SP$Guid): Taxonomy$TermGroup;
deleteLanguage(lcid: number): void;
getChanges(changeInformation: Taxonomy$ChangeInformation): Taxonomy$ChangedItemCollection;
getGroup(id: SP$SP$Guid): Taxonomy$TermGroup;
getTerm(termId: SP$SP$Guid): Taxonomy$Term;
getTermInTermSet(termSetId: SP$SP$Guid, termId: SP$SP$Guid): Taxonomy$Term;
getTermsById(termIds: SP$SP$Guid[]): Taxonomy$TermCollection;
getTerms(termLabel: string, trimUnavailable: boolean): Taxonomy$TermCollection;
getTerms(labelMatchInformation: Taxonomy$LabelMatchInformation): Taxonomy$TermCollection;
getTermSetsByName(termSetName: string, lcid: number): Taxonomy$TermSetCollection;
getTermSetsByTermLabel(requiredTermLabels: string[], lcid: number): Taxonomy$TermSetCollection;
getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): Taxonomy$TermCollection;
getTermsWithCustomProperty(
customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation): Taxonomy$TermCollection;
getTermSet(termSetId: SP$SP$Guid): Taxonomy$TermSet;
getTermSetsWithCustomProperty(
customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation): Taxonomy$TermSetCollection;
rollbackAll(): void;
updateCache(): void;
getSiteCollectionGroup(currentSite: SP$SP$Site, createIfMissing: boolean): Taxonomy$TermGroup;
updateUsedTermsOnSite(currentSite: SP$SP$Site): void
}

declare class Taxonomy$TaxonomyItem mixins SP$SP$ClientObject {
static normalizeName(context: SP$SP$ClientContext, name: string): SP$SP$StringResult;
get_createdDate(): Date;
get_id(): SP$SP$Guid;
get_lastModifiedDate(): Date;
get_name(): string;
set_name(value: string): void;
get_termStore(): Taxonomy$TermStore;
deleteObject(): void
}

declare type Taxonomy$TermGroupCollection = {
itemAt(index: number): Taxonomy$TermGroup,
get_item(index: number): Taxonomy$TermGroup,
getById(id: SP$SP$Guid): Taxonomy$TermGroup,
getByName(name: string): Taxonomy$TermGroup
} & SP$SP$ClientObjectCollection<Taxonomy$TermGroup>


declare class Taxonomy$TermGroup mixins Taxonomy$TaxonomyItem {
get_description(): string;
set_description(value: string): void;
get_isSiteCollectionGroup(): boolean;
get_isSystemGroup(): boolean;
get_termSets(): Taxonomy$TermSetCollection;
createTermSet(name: string, newTermSetId: SP$SP$Guid, lcid: number): Taxonomy$TermSet;
exportObject(): SP$SP$StringResult;
getChanges(changeInformation: Taxonomy$ChangeInformation): Taxonomy$ChangedItemCollection;
getTermSetsWithCustomProperty(
customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation): Taxonomy$TermSetCollection
}

declare class Taxonomy$TermSetItem mixins Taxonomy$TaxonomyItem {
get_customProperties(): {
[key: string]: string
};
get_customSortOrder(): string;
set_customSortOrder(value: string): void;
get_isAvailableForTagging(): boolean;
set_isAvailableForTagging(value: boolean): void;
get_owner(): string;
set_owner(value: string): void;
get_terms(): Taxonomy$TermCollection;
createTerm(name: string, lcid: number, newTermId: SP$SP$Guid): Taxonomy$Term;
reuseTerm(sourceTerm: Taxonomy$Term, reuseBranch: boolean): Taxonomy$Term;
reuseTermWithPinning(sourceTerm: Taxonomy$Term): Taxonomy$Term;
deleteCustomProperty(name: string): void;
deleteAllCustomProperties(): void;
setCustomProperty(name: string, value: string): void
}

declare type Taxonomy$TermSetCollection = {
itemAt(index: number): Taxonomy$TermSet,
get_item(index: number): Taxonomy$TermSet,
getById(id: SP$SP$Guid): Taxonomy$TermSet,
getByName(name: string): Taxonomy$TermSet
} & SP$SP$ClientObjectCollection<Taxonomy$TermSet>


declare class Taxonomy$TermSet mixins Taxonomy$TermSetItem {
get_contact(): string;
set_contact(value: string): void;
get_description(): string;
set_description(value: string): void;
get_group(): Taxonomy$TermGroup;
get_isOpenForTermCreation(): boolean;
set_isOpenForTermCreation(value: boolean): void;
get_stakeholders(): string[];
addStakeholder(stakeholderName: string): void;
copy(): Taxonomy$TermSet;
deleteStakeholder(stakeholderName: string): void;
exportObject(): SP$SP$StringResult;
getAllTerms(): Taxonomy$TermCollection;
getChanges(changeInformation: Taxonomy$ChangeInformation): Taxonomy$ChangedItemCollection;
getTerm(termId: SP$SP$Guid): Taxonomy$Term;
getTerms(pagingLimit: number | Taxonomy$LabelMatchInformation): Taxonomy$TermCollection;
getTerms(termLabel: string, trimUnavailable: boolean): Taxonomy$TermCollection;
getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): Taxonomy$TermCollection;
getTermsWithCustomProperty(
customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation): Taxonomy$TermCollection;
move(targetGroup: Taxonomy$TermGroup): void
}

declare type Taxonomy$TermCollection = {
itemAt(index: number): Taxonomy$Term,
get_item(index: number): Taxonomy$Term,
getById(id: SP$SP$Guid): Taxonomy$Term,
getByName(name: string): Taxonomy$Term
} & SP$SP$ClientObjectCollection<Taxonomy$Term>


declare class Taxonomy$Term mixins Taxonomy$TermSetItem {
get_description(): string;
get_isDeprecated(): boolean;
get_isKeyword(): boolean;
get_isPinned(): boolean;
get_isPinnedRoot(): boolean;
get_isReused(): boolean;
get_isRoot(): boolean;
get_isSourceTerm(): boolean;
get_labels(): Taxonomy$LabelCollection;
get_localCustomProperties(): {
[key: string]: string
};
get_mergedTermIds(): SP$SP$Guid[];
get_parent(): Taxonomy$Term;
get_pathOfTerm(): string;
get_pinSourceTermSet(): Taxonomy$TermSet;
get_reusedTerms(): Taxonomy$TermCollection;
get_sourceTerm(): Taxonomy$Term;
get_termsCount(): number;
get_termSet(): Taxonomy$TermSet;
get_termSets(): Taxonomy$TermSetCollection;
copy(doCopyChildren: boolean): Taxonomy$Term;
createLabel(labelName: string, lcid: number, isDefault: boolean): Taxonomy$Label;
deleteLocalCustomProperty(name: string): void;
deleteAllLocalCustomProperties(): void;
deprecate(doDepricate: boolean): void;
getAllLabels(lcid: number): Taxonomy$LabelCollection;
getDefaultLabel(lcid: number): Taxonomy$Label;
getDescription(lcid: number): SP$SP$StringResult;
getTerms(pagingLimit: number): Taxonomy$TermCollection;
getTerms(
termLabel: string,
lcid: number,
defaultLabelOnly: boolean,
stringMatchOption: Taxonomy$StringMatchOption,
resultCollectionSize: number,
trimUnavailable: boolean): Taxonomy$TermCollection;
merge(termToMerge: Taxonomy$Term): void;
move(newParnt: Taxonomy$TermSetItem): void;
reassignSourceTerm(reusedTerm: Taxonomy$Term): void;
setDescription(description: string, lcid: number): void;
setLocalCustomProperty(name: string, value: string): void;
getIsDescendantOf(ancestorTerm: Taxonomy$Term): SP$SP$BooleanResult;
getPath(lcid: number): SP$SP$StringResult
}

declare type Taxonomy$LabelCollection = {
itemAt(index: number): Taxonomy$Label,
get_item(index: number): Taxonomy$Label,
getByValue(name: string): Taxonomy$Label
} & SP$SP$ClientObjectCollection<Taxonomy$Label>


declare class Taxonomy$Label mixins SP$SP$ClientObject {
get_isDefaultForLanguage(): boolean;
get_language(): number;
set_language(value: number): void;
get_term(): Taxonomy$Term;
get_value(): string;
set_value(value: string): void;
deleteObject(): void;
setAsDefaultForLanguage(): void
}

declare class Taxonomy$LabelMatchInformation mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientContext): this;
get_defaultLabelOnly(): boolean;
set_defaultLabelOnly(value: boolean): void;
get_excludeKeyword(): boolean;
set_excludeKeyword(value: boolean): void;
get_lcid(): number;
set_lcid(value: number): void;
get_resultCollectionSize(): number;
set_resultCollectionSize(value: number): void;
get_stringMatchOption(): Taxonomy$StringMatchOption;
set_stringMatchOption(value: Taxonomy$StringMatchOption): void;
get_termLabel(): string;
set_termLabel(value: string): void;
get_trimDeprecated(): boolean;
set_trimDeprecated(value: boolean): void;
get_trimUnavailable(): boolean;
set_trimUnavailable(value: boolean): void
}

declare class Taxonomy$CustomPropertyMatchInformation mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientContext): this;
get_customPropertyName(): string;
set_customPropertyName(value: string): void;
get_customPropertyValue(): string;
set_customPropertyValue(value: string): void;
get_resultCollectionSize(): number;
set_resultCollectionSize(value: number): void;
get_stringMatchOption(): Taxonomy$StringMatchOption;
set_stringMatchOption(value: Taxonomy$StringMatchOption): void;
get_trimUnavailable(): boolean;
set_trimUnavailable(value: boolean): void
}

declare class Taxonomy$ChangeInformation mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientContext): this;
get_itemType(): Taxonomy$ChangeItemType;
set_itemType(value: Taxonomy$ChangeItemType): void;
get_operationType(): Taxonomy$ChangeOperationType;
set_operationType(value: Taxonomy$ChangeOperationType): void;
get_startTime(): Date;
set_startTime(value: Date): void;
get_withinTimeSpan(): number;
set_withinTimeSpan(value: number): void
}

declare type Taxonomy$ChangedItemCollection = {
itemAt(index: number): Taxonomy$ChangedItem,
get_item(index: number): Taxonomy$ChangedItem
} & SP$SP$ClientObjectCollection<Taxonomy$ChangedItem>


declare class Taxonomy$ChangedItem mixins SP$SP$ClientObject {
get_changedBy(): string;
get_changedTime(): Date;
get_id(): SP$SP$Guid;
get_itemType(): Taxonomy$ChangeItemType;
get_operation(): Taxonomy$ChangeOperationType
}

declare class Taxonomy$ChangedSite mixins Taxonomy$ChangedItem {
get_siteId(): SP$SP$Guid;
get_termId(): SP$SP$Guid;
get_termSetId(): SP$SP$Guid
}

declare class Taxonomy$ChangedGroup mixins Taxonomy$ChangedItem {}

declare class Taxonomy$ChangedTerm mixins Taxonomy$ChangedItem {
get_changedCustomProperties(): string[];
get_changedLocalCustomProperties(): string[];
get_groupId(): SP$SP$Guid;
get_lcidsForChangedDescriptions(): number[];
get_lcidsForChangedLabels(): number[];
get_termSetId(): SP$SP$Guid
}

declare class Taxonomy$ChangedTermSet mixins Taxonomy$ChangedItem {
get_fromGroupId(): SP$SP$Guid;
get_groupId(): SP$SP$Guid
}

declare class Taxonomy$ChangedTermStore mixins Taxonomy$ChangedItem {
get_changedLanguage(): number;
get_isDefaultLanguageChanged(): boolean;
get_isFullFarmRestore(): boolean
}

declare class Taxonomy$TaxonomyField mixins SP$SP$FieldLookup {
constructor(context: SP$SP$ClientContext, fields: SP$SP$FieldCollection, filedName: string): this;
get_anchorId(): SP$SP$Guid;
set_anchorId(value: SP$SP$Guid): void;
get_createValuesInEditForm(): boolean;
set_createValuesInEditForm(value: boolean): void;
get_isAnchorValid(): boolean;
get_isKeyword(): boolean;
set_isKeyword(value: boolean): void;
get_isPathRendered(): boolean;
set_isPathRendered(value: boolean): void;
get_isTermSetValid(): boolean;
get_open(): boolean;
set_open(value: boolean): void;
get_sspId(): SP$SP$Guid;
set_sspId(value: SP$SP$Guid): void;
get_targetTemplate(): string;
set_targetTemplate(value: string): void;
get_termSetId(): SP$SP$Guid;
set_termSetId(value: SP$SP$Guid): void;
get_textField(): SP$SP$Guid;
get_userCreated(): SP$SP$Guid;
set_userCreated(value: SP$SP$Guid): void;
getFieldValueAsText(value: Taxonomy$TaxonomyFieldValue): SP$SP$StringResult;
getFieldValueAsTaxonomyFieldValue(value: string): Taxonomy$TaxonomyFieldValue;
getFieldValueAsTaxonomyFieldValueCollection(value: string): Taxonomy$TaxonomyFieldValueCollection;
setFieldValueByTerm<T= any>(listItem: SP$SP$ListItem<T>, term: Taxonomy$Term, lcid: number): void;
setFieldValueByTermCollection<T= any>(
listItem: SP$SP$ListItem<T>,
terms: Taxonomy$TermCollection,
lcid: number): void;
setFieldValueByCollection<T= any>(
listItem: SP$SP$ListItem<T>,
terms: Taxonomy$Term[],
lcid: number): void;
setFieldValueByValue<T= any>(
listItem: SP$SP$ListItem<T>,
taxValue: Taxonomy$TaxonomyFieldValue): void;
setFieldValueByValueCollection<T= any>(
listItem: SP$SP$ListItem<T>,
taxValueCollection: Taxonomy$TaxonomyFieldValueCollection): void;
getFieldValueAsHtml(value: Taxonomy$TaxonomyFieldValue): SP$SP$StringResult;
getValidatedString(value: Taxonomy$TaxonomyFieldValue): SP$SP$StringResult
}

declare class Taxonomy$TaxonomyFieldValueCollection mixins SP$SP$ClientObjectCollection<Taxonomy$TaxonomyFieldValue> {
constructor(context: SP$SP$ClientContext, fieldValue: string, creatingField: SP$SP$Field): this;
itemAt(index: number): Taxonomy$TaxonomyFieldValue;
get_item(index: number): Taxonomy$TaxonomyFieldValue;
populateFromLabelGuidPairs(text: string): void
}

declare class Taxonomy$TaxonomyFieldValue mixins SP$SP$ClientValueObject {
get_label(): string;
set_label(value: string): void;
get_termGuid(): SP$SP$Guid;
set_termGuid(value: SP$SP$Guid): void;
get_wssId(): number;
set_wssId(value: number): void
}

declare class Taxonomy$MobileTaxonomyField mixins SP$SP$ClientObject {
get_readOnly(): boolean
}

declare class DocumentSet$DocumentSet mixins SP$ClientObject {
static create(
context: SP$ClientContext,
parentFolder: SP$Folder,
name: string,
ctid: SP$ContentTypeId): SP$StringResult
}

declare class Video$EmbedCodeConfiguration mixins SP$ClientValueObject {
get_autoPlay(): boolean;
set_autoPlay(value: boolean): boolean;
get_displayTitle(): boolean;
set_displayTitle(value: boolean): boolean;
get_linkToOwnerProfilePage(): boolean;
set_linkToOwnerProfilePage(value: boolean): boolean;
get_linkToVideoHomePage(): boolean;
set_linkToVideoHomePage(value: boolean): boolean;
get_loop(): boolean;
set_loop(value: boolean): boolean;
get_pixelHeight(): number;
set_pixelHeight(value: number): number;
get_pixelWidth(): number;
set_pixelWidth(value: number): number;
get_startTime(): number;
set_startTime(value: number): number;
get_previewImagePath(): string;
set_previewImagePath(value: string): string
}

declare class Video$VideoSet mixins DocumentSet$DocumentSet$DocumentSet {
static createVideo(
context: SP$ClientContext,
parentFolder: SP$Folder,
name: string,
ctid: SP$ContentTypeId): SP$StringResult;
static uploadVideo(
context: SP$ClientContext,
list: SP$List,
fileName: string,
file: any[],
overwriteIfExists: boolean,
parentFolderPath: string): SP$StringResult;
static getEmbedCode(
context: SP$ClientContext,
videoPath: string,
properties: Video$EmbedCodeConfiguration): SP$StringResult;
static migrateVideo<T= any>(context: SP$ClientContext, videoFile: SP$File): SP$SP$ListItem<T>
}

declare interface Controls$INavigationOptions {
assetId?: string,
siteTitle?: string,
siteUrl?: string,
appTitle?: string,
appTitleIconUrl?: string,
rightToLeft?: boolean,
appStartPage?: string,
appIconUrl?: string,
appHelpPageUrl?: string,
appHelpPageOnClick?: string,
settingsLinks?: Controls$ISettingsLink[],
language?: string,
clientTag?: string,
appWebUrl?: string,
onCssLoaded?: string,
bottomHeaderVisible?: boolean,
topHeaderVisible?: boolean
} 

declare class Controls$NavigationOptions mixins Controls$INavigationOptions {}

declare interface Controls$ISettingsLink {
linkUrl: string,
displayName: string
} 

declare class Controls$SettingsLink mixins Controls$ISettingsLink {
linkUrl: string;
displayName: string
}

declare class Controls$Navigation  {
constructor(placeholderDOMElementId: string, options: Controls$INavigationOptions): this;
get_assetId(): string;
get_siteTitle(): string;
get_siteUrl(): string;
get_appTitle(): string;
set_appTitle(value: string): string;
get_appTitleIconUrl(): string;
set_appTitleIconUrl(value: string): string;
get_rightToLeft(): boolean;
set_rightToLeft(value: boolean): boolean;
get_appStartPage(): string;
set_appStartPage(value: string): string;
get_appIconUrl(): string;
set_appIconUrl(value: string): string;
get_appHelpPageUrl(): string;
set_appHelpPageUrl(value: string): string;
get_appHelpPageOnClick(): string;
set_appHelpPageOnClick(value: string): string;
get_settingsLinks(): Controls$ISettingsLink[];
set_settingsLinks(value: Controls$ISettingsLink[]): Controls$ISettingsLink[];
setVisible(value: boolean): void;
setTopHeaderVisible(value: boolean): void;
setBottomHeaderVisible(value: boolean): void;
remove(): void;
static getVersionedLayoutsUrl(pageName: string): string
}

declare class Controls$ControlManager  {
static getControl(placeHolderId: string): any
}


/**
 * Specifies types of changes made in the user profile store.
 */
declare  class UserProfiles$ChangeTypes {
  constructor(...args: empty): mixed;
static +none: Class<UserProfiles$ChangeTypes__none> & UserProfiles$ChangeTypes__none & 0;// 0
static +add: Class<UserProfiles$ChangeTypes__add> & UserProfiles$ChangeTypes__add & 1;// 1
static +modify: Class<UserProfiles$ChangeTypes__modify> & UserProfiles$ChangeTypes__modify & 2;// 2
static +remove: Class<UserProfiles$ChangeTypes__remove> & UserProfiles$ChangeTypes__remove & 3;// 3
static +metadata: Class<UserProfiles$ChangeTypes__metadata> & UserProfiles$ChangeTypes__metadata & 4;// 4
static +all: Class<UserProfiles$ChangeTypes__all> & UserProfiles$ChangeTypes__all & 5;// 5

}

declare class UserProfiles$ChangeTypes__none mixins UserProfiles$ChangeTypes {}
declare class UserProfiles$ChangeTypes__add mixins UserProfiles$ChangeTypes {}
declare class UserProfiles$ChangeTypes__modify mixins UserProfiles$ChangeTypes {}
declare class UserProfiles$ChangeTypes__remove mixins UserProfiles$ChangeTypes {}
declare class UserProfiles$ChangeTypes__metadata mixins UserProfiles$ChangeTypes {}
declare class UserProfiles$ChangeTypes__all mixins UserProfiles$ChangeTypes {}


declare class UserProfiles$HashTag mixins SP$ClientValueObject {
get_name(): string;
get_useCount(): number
}

declare type UserProfiles$HashTagCollection = {
itemAt(index: number): UserProfiles$HashTag,
get_item(index: number): UserProfiles$HashTag
} & SP$SP$ClientObjectCollection<UserProfiles$HashTag>



/**
 * Specifies types of user-related objects that can be changed in the user profile store.
 */
declare  class UserProfiles$ObjectTypes {
  constructor(...args: empty): mixed;
static +none: Class<UserProfiles$ObjectTypes__none> & UserProfiles$ObjectTypes__none & 0;// 0
static +singleValueProperty: Class<UserProfiles$ObjectTypes__singleValueProperty> & UserProfiles$ObjectTypes__singleValueProperty & 1;// 1
static +multiValueProperty: Class<UserProfiles$ObjectTypes__multiValueProperty> & UserProfiles$ObjectTypes__multiValueProperty & 2;// 2
static +anniversary: Class<UserProfiles$ObjectTypes__anniversary> & UserProfiles$ObjectTypes__anniversary & 3;// 3
static +dlMembership: Class<UserProfiles$ObjectTypes__dlMembership> & UserProfiles$ObjectTypes__dlMembership & 4;// 4
static +siteMembership: Class<UserProfiles$ObjectTypes__siteMembership> & UserProfiles$ObjectTypes__siteMembership & 5;// 5
static +quickLink: Class<UserProfiles$ObjectTypes__quickLink> & UserProfiles$ObjectTypes__quickLink & 6;// 6
static +colleague: Class<UserProfiles$ObjectTypes__colleague> & UserProfiles$ObjectTypes__colleague & 7;// 7
static +personalizationSite: Class<UserProfiles$ObjectTypes__personalizationSite> & UserProfiles$ObjectTypes__personalizationSite & 8;// 8
static +userProfile: Class<UserProfiles$ObjectTypes__userProfile> & UserProfiles$ObjectTypes__userProfile & 9;// 9
static +webLog: Class<UserProfiles$ObjectTypes__webLog> & UserProfiles$ObjectTypes__webLog & 10;// 10
static +custom: Class<UserProfiles$ObjectTypes__custom> & UserProfiles$ObjectTypes__custom & 11;// 11
static +organizationProfile: Class<UserProfiles$ObjectTypes__organizationProfile> & UserProfiles$ObjectTypes__organizationProfile & 12;// 12
static +organizationMembership: Class<UserProfiles$ObjectTypes__organizationMembership> & UserProfiles$ObjectTypes__organizationMembership & 13;// 13
static +all: Class<UserProfiles$ObjectTypes__all> & UserProfiles$ObjectTypes__all & 14;// 14

}

declare class UserProfiles$ObjectTypes__none mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__singleValueProperty mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__multiValueProperty mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__anniversary mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__dlMembership mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__siteMembership mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__quickLink mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__colleague mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__personalizationSite mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__userProfile mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__webLog mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__custom mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__organizationProfile mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__organizationMembership mixins UserProfiles$ObjectTypes {}
declare class UserProfiles$ObjectTypes__all mixins UserProfiles$ObjectTypes {}



/**
 * Provides methods for operations related to people.
 * Note: The SocialFollowingManager object is the recommended object for performing Following People and Following Content tasks.
 * However, PeopleManager provides some methods that SocialFollowingManager doesn't.
 */
declare class UserProfiles$PeopleManager mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext): this;
static getTrendingTags(context: SP$SP$ClientRuntimeContext): UserProfiles$HashTagCollection;

/**
 * Checks whether the first user is following the second user.
 */
static isFollowing(
context: SP$SP$ClientRuntimeContext,
possibleFollowerAccountName: string,
possibleFolloweeAccountName: string): SP$SP$BooleanResult;

/**
 * Gets the URL of the edit profile page for the current user.
 */
get_editProfileLink(): string;

/**
 * Gets a Boolean value that indicates whether the current user's People I'm Following list is public.
 */
get_isMyPeopleListPublic(): boolean;

/**
 * Gets tags that the user is following.
 */
getFollowedTags(numberOfTagsToFetch: number): string[];

/**
 * Gets user properties for the current user.
 */
getMyProperties(): UserProfiles$PersonProperties;
getPropertiesFor(accountName: string): UserProfiles$PersonProperties;

/**
 * Gets the specified user profile property for the specified user.
 */
getUserProfilePropertyFor(accountName: string, propertyName: string): string;

/**
 * Gets the specified user profile properties for the specified user.
 */
getUserProfilePropertiesFor(propertiesForUser: UserProfiles$UserProfilePropertiesForUser): any[];

/**
 * Gets suggestions for who the current user might want to follow.
 * Note: The recommended API to use for this task is SocialFollowingManager.getSuggestions.
 * Returns list of PersonProperties objects
 */
getMySuggestions(): SP$SP$ClientObjectList<UserProfiles$PersonProperties>;

/**
 * Removes the specified user from the user's list of suggested people to follow.
 */
hideSuggestion(accountName: string): void;
follow(accountName: string): void;
stopFollowing(accountName: string): void;

/**
 * Add the specified tag to the current user's list of followed tags.
 * @param tagId GUID of the tag to start following.
 */
followTag(tagId: string): void;

/**
 * Remove the specified tag from the current user's list of followed tags.
 * @param tagId GUID of the tag to stop following.
 */
stopFollowingTag(tagId: string): void;
amIFollowing(accountName: string): SP$SP$BooleanResult;
getPeopleFollowedByMe(): SP$SP$ClientObjectList<UserProfiles$PersonProperties>;
getPeopleFollowedBy(accountName: string): SP$SP$ClientObjectList<UserProfiles$PersonProperties>;
getMyFollowers(): SP$SP$ClientObjectList<UserProfiles$PersonProperties>;
getFollowersFor(accountName: string): SP$SP$ClientObjectList<UserProfiles$PersonProperties>;
amIFollowedBy(accountName: string): SP$SP$BooleanResult;

/**
 * Uploads and sets the user profile picture.
 * Pictures in bmp, jpg and png formats and up to 5,000,000 bytes are supported.
 * A user can upload a picture only to the user's own profile.
 * @param data Binary content of an image file
 */
setMyProfilePicture(data: SP$SP$Base64EncodedByteArray): void
}


/**
 * Specifies the capabilities of a personal site.
 */
declare  class UserProfiles$PersonalSiteCapabilities {
  constructor(...args: empty): mixed;
static +none: Class<UserProfiles$PersonalSiteCapabilities__none> & UserProfiles$PersonalSiteCapabilities__none & 0;// 0
static +profile: Class<UserProfiles$PersonalSiteCapabilities__profile> & UserProfiles$PersonalSiteCapabilities__profile & 1;// 1
static +social: Class<UserProfiles$PersonalSiteCapabilities__social> & UserProfiles$PersonalSiteCapabilities__social & 2;// 2
static +storage: Class<UserProfiles$PersonalSiteCapabilities__storage> & UserProfiles$PersonalSiteCapabilities__storage & 3;// 3
static +myTasksDashboard: Class<UserProfiles$PersonalSiteCapabilities__myTasksDashboard> & UserProfiles$PersonalSiteCapabilities__myTasksDashboard & 4;// 4
static +education: Class<UserProfiles$PersonalSiteCapabilities__education> & UserProfiles$PersonalSiteCapabilities__education & 5;// 5
static +guest: Class<UserProfiles$PersonalSiteCapabilities__guest> & UserProfiles$PersonalSiteCapabilities__guest & 6;// 6

}

declare class UserProfiles$PersonalSiteCapabilities__none mixins UserProfiles$PersonalSiteCapabilities {}
declare class UserProfiles$PersonalSiteCapabilities__profile mixins UserProfiles$PersonalSiteCapabilities {}
declare class UserProfiles$PersonalSiteCapabilities__social mixins UserProfiles$PersonalSiteCapabilities {}
declare class UserProfiles$PersonalSiteCapabilities__storage mixins UserProfiles$PersonalSiteCapabilities {}
declare class UserProfiles$PersonalSiteCapabilities__myTasksDashboard mixins UserProfiles$PersonalSiteCapabilities {}
declare class UserProfiles$PersonalSiteCapabilities__education mixins UserProfiles$PersonalSiteCapabilities {}
declare class UserProfiles$PersonalSiteCapabilities__guest mixins UserProfiles$PersonalSiteCapabilities {}



/**
 * Specifies an exception or status code for the state of a personal site instantiation.
 */
declare  class UserProfiles$PersonalSiteInstantiationState {
  constructor(...args: empty): mixed;
static +uninitialized: Class<UserProfiles$PersonalSiteInstantiationState__uninitialized> & UserProfiles$PersonalSiteInstantiationState__uninitialized & 0;// 0
static +enqueued: Class<UserProfiles$PersonalSiteInstantiationState__enqueued> & UserProfiles$PersonalSiteInstantiationState__enqueued & 1;// 1
static +created: Class<UserProfiles$PersonalSiteInstantiationState__created> & UserProfiles$PersonalSiteInstantiationState__created & 2;// 2
static +deleted: Class<UserProfiles$PersonalSiteInstantiationState__deleted> & UserProfiles$PersonalSiteInstantiationState__deleted & 3;// 3
static +permissionsGeneralFailure: Class<UserProfiles$PersonalSiteInstantiationState__permissionsGeneralFailure> & UserProfiles$PersonalSiteInstantiationState__permissionsGeneralFailure & 4;// 4
static +permissionsUPANotGranted: Class<UserProfiles$PersonalSiteInstantiationState__permissionsUPANotGranted> & UserProfiles$PersonalSiteInstantiationState__permissionsUPANotGranted & 5;// 5
static +permissionsUserNotLicensed: Class<UserProfiles$PersonalSiteInstantiationState__permissionsUserNotLicensed> & UserProfiles$PersonalSiteInstantiationState__permissionsUserNotLicensed & 6;// 6
static +permissionsSelfServiceSiteCreationDisabled: Class<UserProfiles$PersonalSiteInstantiationState__permissionsSelfServiceSiteCreationDisabled> & UserProfiles$PersonalSiteInstantiationState__permissionsSelfServiceSiteCreationDisabled & 7;// 7
static +permissionsNoMySitesInPeopleLight: Class<UserProfiles$PersonalSiteInstantiationState__permissionsNoMySitesInPeopleLight> & UserProfiles$PersonalSiteInstantiationState__permissionsNoMySitesInPeopleLight & 8;// 8
static +permissionsEmptyHostUrl: Class<UserProfiles$PersonalSiteInstantiationState__permissionsEmptyHostUrl> & UserProfiles$PersonalSiteInstantiationState__permissionsEmptyHostUrl & 9;// 9
static +permissionsHostFailedToInitializePersonalSiteContext: Class<UserProfiles$PersonalSiteInstantiationState__permissionsHostFailedToInitializePersonalSiteContext> & UserProfiles$PersonalSiteInstantiationState__permissionsHostFailedToInitializePersonalSiteContext & 10;// 10
static +errorGeneralFailure: Class<UserProfiles$PersonalSiteInstantiationState__errorGeneralFailure> & UserProfiles$PersonalSiteInstantiationState__errorGeneralFailure & 11;// 11
static +errorManagedPathDoesNotExist: Class<UserProfiles$PersonalSiteInstantiationState__errorManagedPathDoesNotExist> & UserProfiles$PersonalSiteInstantiationState__errorManagedPathDoesNotExist & 12;// 12
static +errorLanguageNotInstalled: Class<UserProfiles$PersonalSiteInstantiationState__errorLanguageNotInstalled> & UserProfiles$PersonalSiteInstantiationState__errorLanguageNotInstalled & 13;// 13
static +errorPartialCreate: Class<UserProfiles$PersonalSiteInstantiationState__errorPartialCreate> & UserProfiles$PersonalSiteInstantiationState__errorPartialCreate & 14;// 14
static +errorPersonalSiteAlreadyExists: Class<UserProfiles$PersonalSiteInstantiationState__errorPersonalSiteAlreadyExists> & UserProfiles$PersonalSiteInstantiationState__errorPersonalSiteAlreadyExists & 15;// 15
static +errorRootSiteNotPresent: Class<UserProfiles$PersonalSiteInstantiationState__errorRootSiteNotPresent> & UserProfiles$PersonalSiteInstantiationState__errorRootSiteNotPresent & 16;// 16
static +errorSelfServiceSiteCreateCallFailed: Class<UserProfiles$PersonalSiteInstantiationState__errorSelfServiceSiteCreateCallFailed> & UserProfiles$PersonalSiteInstantiationState__errorSelfServiceSiteCreateCallFailed & 17;// 17

}

declare class UserProfiles$PersonalSiteInstantiationState__uninitialized mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__enqueued mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__created mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__deleted mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__permissionsGeneralFailure mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__permissionsUPANotGranted mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__permissionsUserNotLicensed mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__permissionsSelfServiceSiteCreationDisabled mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__permissionsNoMySitesInPeopleLight mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__permissionsEmptyHostUrl mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__permissionsHostFailedToInitializePersonalSiteContext mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__errorGeneralFailure mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__errorManagedPathDoesNotExist mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__errorLanguageNotInstalled mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__errorPartialCreate mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__errorPersonalSiteAlreadyExists mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__errorRootSiteNotPresent mixins UserProfiles$PersonalSiteInstantiationState {}
declare class UserProfiles$PersonalSiteInstantiationState__errorSelfServiceSiteCreateCallFailed mixins UserProfiles$PersonalSiteInstantiationState {}


declare  class UserProfiles$SocialDataStoreExceptionCode {
  constructor(...args: empty): mixed;
static +socialListNotFound: Class<UserProfiles$SocialDataStoreExceptionCode__socialListNotFound> & UserProfiles$SocialDataStoreExceptionCode__socialListNotFound & 0;// 0
static +personalSiteNotFound: Class<UserProfiles$SocialDataStoreExceptionCode__personalSiteNotFound> & UserProfiles$SocialDataStoreExceptionCode__personalSiteNotFound & 1;// 1
static +cannotCreatePersonalSite: Class<UserProfiles$SocialDataStoreExceptionCode__cannotCreatePersonalSite> & UserProfiles$SocialDataStoreExceptionCode__cannotCreatePersonalSite & 2;// 2
static +noSocialFeatures: Class<UserProfiles$SocialDataStoreExceptionCode__noSocialFeatures> & UserProfiles$SocialDataStoreExceptionCode__noSocialFeatures & 3;// 3

}

declare class UserProfiles$SocialDataStoreExceptionCode__socialListNotFound mixins UserProfiles$SocialDataStoreExceptionCode {}
declare class UserProfiles$SocialDataStoreExceptionCode__personalSiteNotFound mixins UserProfiles$SocialDataStoreExceptionCode {}
declare class UserProfiles$SocialDataStoreExceptionCode__cannotCreatePersonalSite mixins UserProfiles$SocialDataStoreExceptionCode {}
declare class UserProfiles$SocialDataStoreExceptionCode__noSocialFeatures mixins UserProfiles$SocialDataStoreExceptionCode {}



/**
 * Represents user properties.
 */
declare class UserProfiles$PersonProperties mixins SP$SP$ClientObject {

/**
 * Specifies the person's account name
 */
get_accountName(): string;

/**
 * Specifies an array of strings containing the account names of a person's direct reports.
 */
get_directReports(): string[];

/**
 * Specifies the person's name.
 */
get_displayName(): string;

/**
 * Specifies the person's email address.
 */
get_email(): string;

/**
 * Specifies an array of strings that specify the account names of a person's managers.
 */
get_extendedManagers(): string[];

/**
 * Specifies an array of strings that specify the account names of person's extended reports.
 */
get_extendedReports(): string[];

/**
 * Represents whether or not the current user is following this person.
 */
get_isFollowed(): boolean;

/**
 * Specifies the person's latest microblog post.
 */
get_latestPost(): string;

/**
 * Specifies an array of strings that specify the account names of person's peers, that is, those who have the same manager.
 */
get_peers(): string[];

/**
 * Specifies the absolute URL of the person's personal page.
 */
get_personalUrl(): string;

/**
 * Specifies the URL for the person's profile picture.
 */
get_pictureUrl(): string;

/**
 * Specifies the person's title.
 */
get_title(): string;

/**
 * Represents all user profile properties including custom.
 * The privacy settings affect which properties can be retrieved.
 * Multiple values are delimited by the vertical bar "|".
 * Null values are specified as empty strings.
 */
get_userProfileProperties(): {
[name: string]: string
};

/**
 * Specifies the URL for the person's profile.
 */
get_userUrl(): string
}


/**
 * Provides an alternate entry point to user profiles rather than calling methods directly.
 */
declare class UserProfiles$ProfileLoader mixins SP$SP$ClientObject {
static getProfileLoader(context: SP$SP$ClientRuntimeContext): UserProfiles$ProfileLoader;
getUserProfile(): UserProfiles$UserProfile
}


/**
 * Represents a client-side user profile for a person.
 * Note: The client-side UserProfile object provides methods you can use to create a personal site for the current user.
 * However, it does not contain the user properties that the server-side UserProfile object contains.
 * To access user properties from client-side code, use PeopleManager
 */
declare class UserProfiles$UserProfile mixins SP$SP$ClientObject {
constructor(): this;

/**
 * Represents the content that the user is following.
 */
get_followedContent(): UserProfiles$FollowedContent;

/**
 * Retrieves SP.Site object that represents the user's personal site.
 */
get_personalSite(): SP$SP$Site;

/**
 * Specifies attributes of the user's personal site.
 */
get_personalSiteCapabilities(): UserProfiles$PersonalSiteCapabilities;

/**
 * Provides the state of the user's personal site
 */
get_personalSiteInstantiationState(): UserProfiles$PersonalSiteInstantiationState;

/**
 * Specifies whether the user can import pictures
 */
get_pictureImportEnabled(): boolean;

/**
 * Specifies the URL to allow the current user to create a personal site.
 */
get_urlToCreatePersonalSite(): string;

/**
 * Specifies whether the current user's social data is to be shared.
 */
shareAllSocialData(shareAll: boolean): void;

/**
 * This member is reserved for internal use and is not intended to be used directly from your code.
 * Use the createPersonalSiteEnque method to create a personal site.
 */
createPersonalSite(lcid: number): void;

/**
 * Enquees creation of a personal site for the current user.
 * @param isInteractive Has a true value if the request is from a web browser and a false value if the request is from a client application.
 */
createPersonalSiteEnque(isInteractive: boolean): void
}


/**
 * Provides access to followed content items.
 */
declare class UserProfiles$FollowedContent mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext): this;
static newObject(context: SP$SP$ClientRuntimeContext): UserProfiles$FollowedContent;

/**
 * Gets the location of the followed sites view
 */
get_followedDocumentsUrl(): string;

/**
 * Gets the location of the followed documents view.
 */
get_followedSitesUrl(): string;

/**
 * The Follow method adds the specified document or site to the list of followed content.
 * @param url URL that identifies the item to follow.
The url parameter can identify an existing document or site using the url property of the original item.
The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
 * @param data Optional parameter that holds application-defined data for the item.
 */
follow(url: string, data?: UserProfiles$FollowedItemData): UserProfiles$FollowResult;

/**
 * The FollowItem method is reserved for server-to-server use only.
 * The server sets the specified item to be followed by the current user.
 * This method cannot be called from the client.
 */
followItem(item: UserProfiles$FollowedItem): UserProfiles$FollowResult;

/**
 * Removes the specified document or site from list of followed content.
 * @param url URL that identifies the item to stop following.
The url parameter can identify an existing document or site using the url property of the original item.
The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
 */
stopFollowing(url: string): void;

/**
 * Determines if the specified document or site is being followed.
 * @param url URL that identifies the item that is supposed to be followed.
The url parameter can identify an existing document or site using the url property of the original item.
The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
 */
isFollowed(url: string): SP$SP$BooleanResult;

/**
 * Retrieves the followed status of the specified document or site.
 * Returns a value of type FollowedStatus, wrapped into a SP.IntResult object.
 * @param url URL that identifies the followed item.
The url parameter can identify an existing document or site using the url property of the original item.
The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
 */
getFollowedStatus(url: string): SP$SP$IntResult;

/**
 * Returns the followed item identified by a given URL or returns null if the item does not exist.
 * @param url URL that identifies the followed item.
The url parameter can identify an existing document or site using the url property of the original item.
The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
 */
getItem(url: string): UserProfiles$FollowedItem;

/**
 * Returns an array of zero or more followed items described by the type and subtype parameters.
 * @param options Describes the type of item to return.
 * @param subType Integer that identifies the sites to return by the web template.
 */
getItems(
options: UserProfiles$FollowedContentQueryOptions,
subtype: number): UserProfiles$FollowedItem[];

/**
 * Updates the properties for followed item with specified URL.
 * @param url URL that identifies the followed item.
The url parameter can identify an existing document or site using the url property of the original item.
The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
 * @param data Application-defined data stored with the followed item.
 */
updateData(url: string, data: UserProfiles$FollowedItemData): void;

/**
 * Returns the refreshed item that is being pointed to in the Social list.
 * @param item The original item as stored in the Followed Content list.
 */
refreshFollowedItem(item: UserProfiles$FollowedItem): UserProfiles$FollowedItem;

/**
 * Finds the original item that is being pointed to in the Followed Content list and updates the Title, Url, and IconUrl fields if they have been changed.
 * @param url The URL of the original item as stored in the Followed Content list.
 */
findAndUpdateFollowedItem(url: string): UserProfiles$FollowedItem
}


/**
 * Represents a followed content resource.
 */
declare class UserProfiles$FollowedItem mixins SP$SP$ClientValueObject {

/**
 * Additional metadata associated with this item
 */
get_data(): {
[name: string]: any
};

/**
 * Additional metadata associated with this item
 */
set_data(value: {
[name: string]: any
}): {
[name: string]: any
};

/**
 * Specifies the type of the file if this item is a file. Otherwise, this property is the empty string.
 */
get_fileType(): string;

/**
 * Specifies the type of the file if this item is a file. Otherwise, this property is the empty string.
 */
set_fileType(value: string): string;

/**
 * Provides information about the application that opens a followed document.
 */
get_fileTypeProgid(): string;

/**
 * Provides information about the application that opens a followed document.
 */
set_fileTypeProgid(value: string): string;

/**
 * Specifies additional information about the followed item.
 * The server stores the data so that it can return it to the client.
 */
get_flags(): string;

/**
 * Specifies additional information about the followed item.
 * The server stores the data so that it can return it to the client.
 */
set_flags(value: string): string;

/**
 * Indicates whether the followed site has a feed.
 */
get_hasFeed(): boolean;

/**
 * Indicates whether the followed site has a feed.
 */
set_hasFeed(value: boolean): boolean;

/**
 * Specifies if the item is hidden from the user. If true this item will not generate activity in the user's feed.
 */
get_hidden(): boolean;

/**
 * Specifies if the item is hidden from the user. If true this item will not generate activity in the user's feed.
 */
set_hidden(value: boolean): boolean;

/**
 * Specifies the URL of an icon to represent this item.
 */
get_iconUrl(): string;

/**
 * Specifies the URL of an icon to represent this item.
 */
set_iconUrl(value: string): string;

/**
 * Specifies the identification for this item in the Content database.
 */
get_itemId(): number;

/**
 * Specifies the identification for this item in the Content database.
 */
set_itemId(value: number): number;

/**
 * Specifies the type of this item.
 */
get_itemType(): UserProfiles$FollowedItemType;

/**
 * Specifies the type of this item.
 */
set_itemType(value: UserProfiles$FollowedItemType): UserProfiles$FollowedItemType;

/**
 * The ListId property specifies the list identification (GUID) for this item in the Content database if this item is a list or the list identification for its parent list.
 * If the ItemType is Document, this property is specified, but if the ItemType is Site, then this property is not specified.
 */
get_listId(): string;

/**
 * The ListId property specifies the list identification (GUID) for this item in the Content database if this item is a list or the list identification for its parent list.
 * If the ItemType is Document, this property is specified, but if the ItemType is Site, then this property is not specified.
 */
set_listId(value: string): string;

/**
 * Specifies the URL of this item's parent list or web.
 */
get_parentUrl(): string;

/**
 * Specifies the URL of this item's parent list or web.
 */
set_parentUrl(value: string): string;

/**
 * Provides information about the followed document to the application that opens it.
 */
get_serverUrlProgid(): string;

/**
 * Provides information about the followed document to the application that opens it.
 */
set_serverUrlProgid(value: string): string;

/**
 * Specifies the site identification (GUID) in the Content database for this item if this item is a site, or for its parent site if this item is not a site.
 */
get_siteId(): string;

/**
 * Specifies the site identification (GUID) in the Content database for this item if this item is a site, or for its parent site if this item is not a site.
 */
set_siteId(value: string): string;

/**
 * Specifies the subtype of this item.
 * If the ItemType is Site, the Subtype specifies the web template identification.
 * If the ItemType is Document, the Subtype has a value of 1.
 */
get_subtype(): number;

/**
 * Specifies the subtype of this item.
 * If the ItemType is Site, the Subtype specifies the web template identification.
 * If the ItemType is Document, the Subtype has a value of 1.
 */
set_subtype(value: number): number;

/**
 * Specifies the item of this item
 */
get_title(): string;

/**
 * Specifies the item of this item
 */
set_title(value: string): string;

/**
 * Specifies the GUID for this item in the Content database.
 */
get_uniqueId(): SP$SP$Guid;

/**
 * Specifies the GUID for this item in the Content database.
 */
set_uniqueId(value: SP$SP$Guid): SP$SP$Guid;

/**
 * Specifies the URL of this item.
 */
get_url(): string;

/**
 * Specifies the URL of this item.
 */
set_url(value: string): string;

/**
 * Specifies the site identification (GUID) in the Content database for this item if it is a site, or the identification of its parent site if this item is a document.
 */
get_webId(): SP$SP$Guid;

/**
 * Specifies the site identification (GUID) in the Content database for this item if it is a site, or the identification of its parent site if this item is a document.
 */
set_webId(value: SP$SP$Guid): any
}

declare  class UserProfiles$FollowedItemType {
  constructor(...args: empty): mixed;
static +unknown: Class<UserProfiles$FollowedItemType__unknown> & UserProfiles$FollowedItemType__unknown & 0;// 0
static +document: Class<UserProfiles$FollowedItemType__document> & UserProfiles$FollowedItemType__document & 1;// 1
static +site: Class<UserProfiles$FollowedItemType__site> & UserProfiles$FollowedItemType__site & 2;// 2
static +all: Class<UserProfiles$FollowedItemType__all> & UserProfiles$FollowedItemType__all & 3;// 3

}

declare class UserProfiles$FollowedItemType__unknown mixins UserProfiles$FollowedItemType {}
declare class UserProfiles$FollowedItemType__document mixins UserProfiles$FollowedItemType {}
declare class UserProfiles$FollowedItemType__site mixins UserProfiles$FollowedItemType {}
declare class UserProfiles$FollowedItemType__all mixins UserProfiles$FollowedItemType {}


declare  class UserProfiles$FollowedContentExceptionType {
  constructor(...args: empty): mixed;
static +itemAlreadyExists: Class<UserProfiles$FollowedContentExceptionType__itemAlreadyExists> & UserProfiles$FollowedContentExceptionType__itemAlreadyExists & 0;// 0
static +itemDoesNotExist: Class<UserProfiles$FollowedContentExceptionType__itemDoesNotExist> & UserProfiles$FollowedContentExceptionType__itemDoesNotExist & 1;// 1
static +invalidQueryString: Class<UserProfiles$FollowedContentExceptionType__invalidQueryString> & UserProfiles$FollowedContentExceptionType__invalidQueryString & 2;// 2
static +invalidSubtypeValue: Class<UserProfiles$FollowedContentExceptionType__invalidSubtypeValue> & UserProfiles$FollowedContentExceptionType__invalidSubtypeValue & 3;// 3
static +unsupportedItemType: Class<UserProfiles$FollowedContentExceptionType__unsupportedItemType> & UserProfiles$FollowedContentExceptionType__unsupportedItemType & 4;// 4
static +followLimitReached: Class<UserProfiles$FollowedContentExceptionType__followLimitReached> & UserProfiles$FollowedContentExceptionType__followLimitReached & 5;// 5
static +untrustedSource: Class<UserProfiles$FollowedContentExceptionType__untrustedSource> & UserProfiles$FollowedContentExceptionType__untrustedSource & 6;// 6
static +unsupportedSite: Class<UserProfiles$FollowedContentExceptionType__unsupportedSite> & UserProfiles$FollowedContentExceptionType__unsupportedSite & 7;// 7
static +internalError: Class<UserProfiles$FollowedContentExceptionType__internalError> & UserProfiles$FollowedContentExceptionType__internalError & 8;// 8

}

declare class UserProfiles$FollowedContentExceptionType__itemAlreadyExists mixins UserProfiles$FollowedContentExceptionType {}
declare class UserProfiles$FollowedContentExceptionType__itemDoesNotExist mixins UserProfiles$FollowedContentExceptionType {}
declare class UserProfiles$FollowedContentExceptionType__invalidQueryString mixins UserProfiles$FollowedContentExceptionType {}
declare class UserProfiles$FollowedContentExceptionType__invalidSubtypeValue mixins UserProfiles$FollowedContentExceptionType {}
declare class UserProfiles$FollowedContentExceptionType__unsupportedItemType mixins UserProfiles$FollowedContentExceptionType {}
declare class UserProfiles$FollowedContentExceptionType__followLimitReached mixins UserProfiles$FollowedContentExceptionType {}
declare class UserProfiles$FollowedContentExceptionType__untrustedSource mixins UserProfiles$FollowedContentExceptionType {}
declare class UserProfiles$FollowedContentExceptionType__unsupportedSite mixins UserProfiles$FollowedContentExceptionType {}
declare class UserProfiles$FollowedContentExceptionType__internalError mixins UserProfiles$FollowedContentExceptionType {}


declare  class UserProfiles$FollowedContentQueryOptions {
  constructor(...args: empty): mixed;
static +unset: Class<UserProfiles$FollowedContentQueryOptions__unset> & UserProfiles$FollowedContentQueryOptions__unset & 0;// 0
static +sites: Class<UserProfiles$FollowedContentQueryOptions__sites> & UserProfiles$FollowedContentQueryOptions__sites & 1;// 1
static +documents: Class<UserProfiles$FollowedContentQueryOptions__documents> & UserProfiles$FollowedContentQueryOptions__documents & 2;// 2
static +hidden: Class<UserProfiles$FollowedContentQueryOptions__hidden> & UserProfiles$FollowedContentQueryOptions__hidden & 3;// 3
static +nonFeed: Class<UserProfiles$FollowedContentQueryOptions__nonFeed> & UserProfiles$FollowedContentQueryOptions__nonFeed & 4;// 4
static +defaultOptions: Class<UserProfiles$FollowedContentQueryOptions__defaultOptions> & UserProfiles$FollowedContentQueryOptions__defaultOptions & 5;// 5
static +all: Class<UserProfiles$FollowedContentQueryOptions__all> & UserProfiles$FollowedContentQueryOptions__all & 6;// 6

}

declare class UserProfiles$FollowedContentQueryOptions__unset mixins UserProfiles$FollowedContentQueryOptions {}
declare class UserProfiles$FollowedContentQueryOptions__sites mixins UserProfiles$FollowedContentQueryOptions {}
declare class UserProfiles$FollowedContentQueryOptions__documents mixins UserProfiles$FollowedContentQueryOptions {}
declare class UserProfiles$FollowedContentQueryOptions__hidden mixins UserProfiles$FollowedContentQueryOptions {}
declare class UserProfiles$FollowedContentQueryOptions__nonFeed mixins UserProfiles$FollowedContentQueryOptions {}
declare class UserProfiles$FollowedContentQueryOptions__defaultOptions mixins UserProfiles$FollowedContentQueryOptions {}
declare class UserProfiles$FollowedContentQueryOptions__all mixins UserProfiles$FollowedContentQueryOptions {}


declare  class UserProfiles$FollowedStatus {
  constructor(...args: empty): mixed;
static +followed: Class<UserProfiles$FollowedStatus__followed> & UserProfiles$FollowedStatus__followed & 0;// 0
static +notFollowed: Class<UserProfiles$FollowedStatus__notFollowed> & UserProfiles$FollowedStatus__notFollowed & 1;// 1
static +notFollowable: Class<UserProfiles$FollowedStatus__notFollowable> & UserProfiles$FollowedStatus__notFollowable & 2;// 2

}

declare class UserProfiles$FollowedStatus__followed mixins UserProfiles$FollowedStatus {}
declare class UserProfiles$FollowedStatus__notFollowed mixins UserProfiles$FollowedStatus {}
declare class UserProfiles$FollowedStatus__notFollowable mixins UserProfiles$FollowedStatus {}



/**
 * Contains additional data that can be attached to a FollowedItem object
 */
declare class UserProfiles$FollowedItemData mixins SP$SP$ClientObject {

/**
 * An unordered collection of key/value pairs for custom properties to be set on the item.
 */
get_properties(): {
[name: string]: any
}
}


/**
 * Returns information about a request to follow an item.
 */
declare class UserProfiles$FollowResult mixins SP$SP$ClientValueObject {

/**
 * Contains the item being followed.
 */
get_item(): UserProfiles$FollowedItem;

/**
 * Provides information about the attempt to follow an item.
 */
get_resultType(): UserProfiles$FollowResultType
}

declare  class UserProfiles$FollowResultType {
  constructor(...args: empty): mixed;
static +unknown: Class<UserProfiles$FollowResultType__unknown> & UserProfiles$FollowResultType__unknown & 0;// 0
static +followed: Class<UserProfiles$FollowResultType__followed> & UserProfiles$FollowResultType__followed & 1;// 1
static +refollowed: Class<UserProfiles$FollowResultType__refollowed> & UserProfiles$FollowResultType__refollowed & 2;// 2
static +hitFollowLimit: Class<UserProfiles$FollowResultType__hitFollowLimit> & UserProfiles$FollowResultType__hitFollowLimit & 3;// 3
static +failed: Class<UserProfiles$FollowResultType__failed> & UserProfiles$FollowResultType__failed & 4;// 4

}

declare class UserProfiles$FollowResultType__unknown mixins UserProfiles$FollowResultType {}
declare class UserProfiles$FollowResultType__followed mixins UserProfiles$FollowResultType {}
declare class UserProfiles$FollowResultType__refollowed mixins UserProfiles$FollowResultType {}
declare class UserProfiles$FollowResultType__hitFollowLimit mixins UserProfiles$FollowResultType {}
declare class UserProfiles$FollowResultType__failed mixins UserProfiles$FollowResultType {}



/**
 * Represents a set of user profile properties for a specified user.
 */
declare class UserProfiles$UserProfilePropertiesForUser mixins SP$SP$ClientObject {

/**
 * Creates new UserProfilePropertiesForUser object
 * @param context Specifies the client context to use.
 * @param accountName Specifies the user by account name.
 * @param propertyNames Specifies an array of strings that specify the properties to retrieve.
 */
constructor(context: SP$SP$ClientContext, accountName: string, propertyNames: string[]): this;

/**
 * Specifies the user account name
 */
get_accountName(): string;

/**
 * Specifies the user account name
 */
set_accountName(value: string): string;

/**
 * Gets an array of strings that specify the user profile property names.
 */
getPropertyNames(): string[]
}

declare class Utilities$Set  {
constructor(items?: {
[item: string]: number
}): this;
constructor(items?: {
[item: number]: number
}): this;

/**
 * Returns true if the set is empty
 */
IsEmpty(): boolean;

/**
 * Returns first item in the set
 */
First(): any;

/**
 * Returns the underlying collection of items as dictionary.
 * Items are the keys, and values are always 1.
 * So the return value may be either { [item: string]: number } or { [item: number]: number }
 */
GetCollection(): any;

/**
 * Returns all items from the set as an array
 */
ToArray(): any[];

/**
 * Adds all items from array to the set, and returns the set
 */
AddArray(array: any[]): SP$SP$Utilities.Utilities$Set;

/**
 * Adds an item to the set
 */
Add(item: any): any;

/**
 * Removes the specified item from the set and returns the removed item
 */
Remove(item: any): any;

/**
 * Clears all the items from set
 */
Clear(): SP$SP$Utilities.Utilities$Set;

/**
 * Returns true if item exists in this set
 */
Contains(item: any): boolean;

/**
 * Returns a copy of this set
 */
Clone(): SP$SP$Utilities.Utilities$Set;

/**
 * Returns a set that contains all the items that exist only in one of the sets (this and other), but not in both
 */
SymmetricDifference(otherSet: SP$SP$Utilities.Utilities$Set): SP$SP$Utilities.Utilities$Set;

/**
 * Returns a set that contains all the items that are in this set but not in the otherSet
 */
Difference(otherSet: SP$SP$Utilities.Utilities$Set): SP$SP$Utilities.Utilities$Set;

/**
 * Returns a new set, that contains items from this set and otherSet
 */
Union(otherSet: SP$SP$Utilities.Utilities$Set): SP$SP$Utilities.Utilities$Set;

/**
 * Adds all items from otherSet to this set, and returns this set
 */
UnionWith(otherSet: SP$SP$Utilities.Utilities$Set): SP$SP$Utilities.Utilities$Set;

/**
 * Returns a new set, that contains only items that exist both in this set and the otherSet
 */
Intersection(otherSet: SP$SP$Utilities.Utilities$Set): SP$SP$Utilities.Utilities$Set
}

declare class DateTimeUtil$SimpleDate  {
constructor(year: number, month: number, day: number, era: number): this;
get_year(): number;
set_year(value: number): void;
get_month(): number;
set_month(value: number): void;
get_day(): number;
set_day(value: number): void;
get_era(): number;
set_era(value: number): void;
static dateEquals(date1: DateTimeUtil$SimpleDate, date2: DateTimeUtil$SimpleDate): boolean;
static dateLessEqual(date1: DateTimeUtil$SimpleDate, date2: DateTimeUtil$SimpleDate): boolean;
static dateGreaterEqual(date1: DateTimeUtil$SimpleDate, date2: DateTimeUtil$SimpleDate): boolean;
static dateLess(date1: DateTimeUtil$SimpleDate, date2: DateTimeUtil$SimpleDate): boolean;
static dateGreater(date1: DateTimeUtil$SimpleDate, date2: DateTimeUtil$SimpleDate): boolean
}

declare class WebParts$LimitedWebPartManager mixins SP$SP$ClientObject {
get_hasPersonalizedParts(): boolean;
get_scope(): SP$SP$WebParts.WebParts$PersonalizationScope;
get_webParts(): SP$SP$WebParts.WebParts$WebPartDefinitionCollection;
addWebPart(
webPart: SP$SP$WebParts.WebParts$WebPart,
zoneId: string,
zoneIndex: number): SP$SP$WebParts.WebParts$WebPartDefinition;
importWebPart(webPartXml: string): SP$SP$WebParts.WebParts$WebPartDefinition
}

declare  class WebParts$PersonalizationScope {
  constructor(...args: empty): mixed;
static +user: Class<WebParts$PersonalizationScope__user> & WebParts$PersonalizationScope__user & 0;// 0
static +shared: Class<WebParts$PersonalizationScope__shared> & WebParts$PersonalizationScope__shared & 1;// 1

}

declare class WebParts$PersonalizationScope__user mixins WebParts$PersonalizationScope {}
declare class WebParts$PersonalizationScope__shared mixins WebParts$PersonalizationScope {}


declare class WebParts$TileData mixins SP$SP$ClientValueObject {
get_backgroundImageLocation(): string;
set_backgroundImageLocation(value: string): void;
get_description(): string;
set_description(value: string): void;
get_iD(): number;
set_iD(value: number): void;
get_linkLocation(): string;
set_linkLocation(value: string): void;
get_tileOrder(): number;
set_tileOrder(value: number): void;
get_title(): string;
set_title(value: string): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class WebParts$WebPart mixins SP$SP$ClientObject {
get_hidden(): boolean;
set_hidden(value: boolean): void;
get_isClosed(): boolean;
get_properties(): SP$SP$PropertyValues;
get_subtitle(): string;
get_title(): string;
set_title(value: string): void;
get_titleUrl(): string;
set_titleUrl(value: string): void;
get_zoneIndex(): number
}

declare class WebParts$WebPartDefinition mixins SP$SP$ClientObject {
get_id(): SP$SP$Guid;
get_webPart(): SP$SP$WebParts.WebParts$WebPart;
saveWebPartChanges(): void;
closeWebPart(): void;
openWebPart(): void;
deleteWebPart(): void;
moveWebPartTo(zoneID: string, zoneIndex: number): void
}

declare type WebParts$WebPartDefinitionCollection = {
itemAt(index: number): SP$SP$WebParts.WebParts$WebPartDefinition,
get_item(index: number): SP$SP$WebParts.WebParts$WebPartDefinition,
getById(id: SP$SP$Guid): SP$SP$WebParts.WebParts$WebPartDefinition,
getByControlId(controlId: string): SP$SP$WebParts.WebParts$WebPartDefinition
} & SP$SP$ClientObjectCollection<WebParts$WebPartDefinition>


declare class Workflow$WorkflowAssociation mixins SP$SP$ClientObject {
get_allowManual(): boolean;
set_allowManual(value: boolean): void;
get_associationData(): string;
set_associationData(value: string): void;
get_autoStartChange(): boolean;
set_autoStartChange(value: boolean): void;
get_autoStartCreate(): boolean;
set_autoStartCreate(value: boolean): void;
get_baseId(): SP$SP$Guid;
get_created(): Date;
get_description(): string;
set_description(value: string): void;
get_enabled(): boolean;
set_enabled(value: boolean): void;
get_historyListTitle(): string;
set_historyListTitle(value: string): void;
get_id(): SP$SP$Guid;
get_instantiationUrl(): string;
get_internalName(): string;
get_isDeclarative(): boolean;
get_listId(): SP$SP$Guid;
get_modified(): Date;
get_name(): string;
set_name(value: string): void;
get_taskListTitle(): string;
set_taskListTitle(value: string): void;
get_webId(): SP$SP$Guid;
update(): void;
deleteObject(): void
}

declare type Workflow$WorkflowAssociationCollection = {
itemAt(index: number): SP$SP$Workflow.Workflow$WorkflowAssociation,
get_item(index: number): SP$SP$Workflow.Workflow$WorkflowAssociation,
getById(associationId: SP$SP$Guid): SP$SP$Workflow.Workflow$WorkflowAssociation,
add(
parameters: SP$SP$Workflow.Workflow$WorkflowAssociationCreationInformation): SP$SP$Workflow.Workflow$WorkflowAssociation,
getByName(name: string): SP$SP$Workflow.Workflow$WorkflowAssociation
} & SP$SP$ClientObjectCollection<Workflow$WorkflowAssociation>


declare class Workflow$WorkflowAssociationCreationInformation mixins SP$SP$ClientValueObject {
get_contentTypeAssociationHistoryListName(): string;
set_contentTypeAssociationHistoryListName(value: string): void;
get_contentTypeAssociationTaskListName(): string;
set_contentTypeAssociationTaskListName(value: string): void;
get_historyList(): SP$SP$List;
set_historyList(value: SP$SP$List): void;
get_name(): string;
set_name(value: string): void;
get_taskList(): SP$SP$List;
set_taskList(value: SP$SP$List): void;
get_template(): SP$SP$Workflow.Workflow$WorkflowTemplate;
set_template(value: SP$SP$Workflow.Workflow$WorkflowTemplate): void;
get_typeId(): string;
writeToXml(
writer: SP$SP$XmlWriter,
serializationContext: SP$SP$SerializationContext): void;
constructor(): this
}

declare class Workflow$WorkflowTemplate mixins SP$SP$ClientObject {
get_allowManual(): boolean;
get_associationUrl(): string;
get_autoStartChange(): boolean;
get_autoStartCreate(): boolean;
get_description(): string;
get_id(): SP$SP$Guid;
get_isDeclarative(): boolean;
get_name(): string;
get_permissionsManual(): SP$SP$BasePermissions
}

declare type Workflow$WorkflowTemplateCollection = {
itemAt(index: number): SP$SP$Workflow.Workflow$WorkflowTemplate,
get_item(index: number): SP$SP$Workflow.Workflow$WorkflowTemplate,
getById(templateId: SP$SP$Guid): SP$SP$Workflow.Workflow$WorkflowTemplate,
getByName(name: string): SP$SP$Workflow.Workflow$WorkflowTemplate
} & SP$SP$ClientObjectCollection<Workflow$WorkflowTemplate>


declare  class WorkflowServices$WorkflowStatus {
  constructor(...args: empty): mixed;
static +notStarted: Class<WorkflowServices$WorkflowStatus__notStarted> & WorkflowServices$WorkflowStatus__notStarted & 0;// 0
static +started: Class<WorkflowServices$WorkflowStatus__started> & WorkflowServices$WorkflowStatus__started & 1;// 1
static +suspended: Class<WorkflowServices$WorkflowStatus__suspended> & WorkflowServices$WorkflowStatus__suspended & 2;// 2
static +canceling: Class<WorkflowServices$WorkflowStatus__canceling> & WorkflowServices$WorkflowStatus__canceling & 3;// 3
static +canceled: Class<WorkflowServices$WorkflowStatus__canceled> & WorkflowServices$WorkflowStatus__canceled & 4;// 4
static +terminated: Class<WorkflowServices$WorkflowStatus__terminated> & WorkflowServices$WorkflowStatus__terminated & 5;// 5
static +completed: Class<WorkflowServices$WorkflowStatus__completed> & WorkflowServices$WorkflowStatus__completed & 6;// 6
static +notSpecified: Class<WorkflowServices$WorkflowStatus__notSpecified> & WorkflowServices$WorkflowStatus__notSpecified & 7;// 7
static +invalid: Class<WorkflowServices$WorkflowStatus__invalid> & WorkflowServices$WorkflowStatus__invalid & 8;// 8

}

declare class WorkflowServices$WorkflowStatus__notStarted mixins WorkflowServices$WorkflowStatus {}
declare class WorkflowServices$WorkflowStatus__started mixins WorkflowServices$WorkflowStatus {}
declare class WorkflowServices$WorkflowStatus__suspended mixins WorkflowServices$WorkflowStatus {}
declare class WorkflowServices$WorkflowStatus__canceling mixins WorkflowServices$WorkflowStatus {}
declare class WorkflowServices$WorkflowStatus__canceled mixins WorkflowServices$WorkflowStatus {}
declare class WorkflowServices$WorkflowStatus__terminated mixins WorkflowServices$WorkflowStatus {}
declare class WorkflowServices$WorkflowStatus__completed mixins WorkflowServices$WorkflowStatus {}
declare class WorkflowServices$WorkflowStatus__notSpecified mixins WorkflowServices$WorkflowStatus {}
declare class WorkflowServices$WorkflowStatus__invalid mixins WorkflowServices$WorkflowStatus {}


declare class WorkflowServices$InteropService mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext, objectPath: SP$SP$ObjectPathStaticProperty): this;
static getCurrent(context: SP$SP$ClientRuntimeContext): WorkflowServices$InteropService;
enableEvents(listId: SP$SP$Guid, itemGuid: SP$SP$Guid): void;
disableEvents(listId: SP$SP$Guid, itemGuid: SP$SP$Guid): void;
startWorkflow(
associationName: string,
correlationId: SP$SP$Guid,
listId: SP$SP$Guid,
itemGuid: SP$SP$Guid,
workflowParameters: any): SP$SP$GuidResult;
cancelWorkflow(instanceId: SP$SP$Guid): void
}


/**
 * Represents a workflow definition and associated properties.
 */
declare class WorkflowServices$WorkflowDefinition mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext): this;

/**
 * Url of the association form
 */
get_associationUrl(): string;

/**
 * Url of the association form
 */
set_associationUrl(value: string): string;
get_description(): string;
set_description(value: string): string;
get_displayName(): string;
set_displayName(value: string): string;

/**
 * Identifier for a draft version of the workflow definition
 */
get_draftVersion(): string;

/**
 * Identifier for a draft version of the workflow definition
 */
set_draftVersion(value: string): string;

/**
 * Defines the fields of the workflow initiation forms and association forms (CAML string)
 */
get_formField(): string;

/**
 * Defines the fields of the workflow initiation forms and association forms (CAML string)
 */
set_formField(value: string): string;
get_id(): string;
set_id(value: string): string;
get_initiationUrl(): string;
set_initiationUrl(value: string): string;

/**
 * Gets custom properties of the workflow definition
 */
get_properties(): {
[propertyName: string]: any
};

/**
 * true if the workflow definition has been published to the external workflow host; false if the workflow definition is only saved on the site
 */
get_published(): boolean;

/**
 * Determines whether to automatically generate an association form for this workflow.
 * If the value is true, and the associationUrl is not already set, a default association form is automatically generated for the workflow when saveDefinition is called.
 */
get_requiresAssociationForm(): boolean;

/**
 * Determines whether to automatically generate an association form for this workflow.
 * If the value is true, and the associationUrl is not already set, a default association form is automatically generated for the workflow when saveDefinition is called.
 */
set_requiresAssociationForm(value: boolean): boolean;

/**
 * Determines whether to automatically generate an initiation form for this workflow.
 * If the value is true, and the initiationUrl is not already set, a default initiation form is automatically generated for the workflow when saveDefinition is called.
 */
get_requiresInitiationForm(): boolean;

/**
 * Determines whether to automatically generate an initiation form for this workflow.
 * If the value is true, and the initiationUrl is not already set, a default initiation form is automatically generated for the workflow when saveDefinition is called.
 */
set_requiresInitiationForm(value: boolean): boolean;

/**
 * RestrictToScope is a GUID value, used in conjunction with the RestrictToType property to further restrict the scope of the definition.
 * For example, if the RestrictToType is "List", then setting the RestrictToScope to a particular list identifier limits the definition to be associable only to the specified list.
 * If the RestrictToType is "List" but the RestrictToScope is null or the empty string, then the definition is associable to any list.
 */
get_restrictToScope(): string;

/**
 * RestrictToScope is a GUID value, used in conjunction with the RestrictToType property to further restrict the scope of the definition.
 * For example, if the RestrictToType is "List", then setting the RestrictToScope to a particular list identifier limits the definition to be associable only to the specified list.
 * If the RestrictToType is "List" but the RestrictToScope is null or the empty string, then the definition is associable to any list.
 */
set_restrictToScope(value: string): string;

/**
 * RestrictToType determines the possible event source type for a workflow subscription that uses this definition.
 * Possible values include "List", "Site", the empty string, or null.
 */
get_restrictToType(): string;

/**
 * RestrictToType determines the possible event source type for a workflow subscription that uses this definition.
 * Possible values include "List", "Site", the empty string, or null.
 */
set_restrictToType(value: string): string;

/**
 * XAML definition of the workflow
 */
get_xaml(): string;

/**
 * XAML definition of the workflow
 */
set_xaml(value: string): string;

/**
 * This method adds a key-value pair (propertyName, value) to the workflow definition object's property bag.
 */
setProperty(propertyName: string, value: string): void;

/**
 * This method is internal and is not intended to be used in your code.
 */
initPropertiesFromJson(parentNode: any): void
}


/**
 * Represents a collection of WorkflowDefinition objects
 */
declare type WorkflowServices$WorkflowDefinitionCollection = {
itemAt(index: number): WorkflowServices$WorkflowDefinition,
get_item(index: number): WorkflowServices$WorkflowDefinition,

/**
 * returns SP.WorkflowDefinition class
 */
get_childItemType(): any
} & SP$SP$ClientObjectCollection<WorkflowServices$WorkflowDefinition>



/**
 * Manages workflow definitions and workflow activity authoring.
 */
declare class WorkflowServices$WorkflowDeploymentService mixins SP$SP$ClientObject {

/**
 * Returns an XML representation of a list of valid Workflow Manager Client 1.0 actions for the specified web (WorkflowInfo element).
 */
getDesignerActions(web: SP$SP$Web): SP$SP$StringResult;

/**
 * Returns an XML representation of a collection of XAML class signatures for workflow definitions.
 * @param lastChanges Date time value representing the latest changes; class signatures older than this time are excluded from the result set.
 */
getActivitySignatures(lastChanged: string): SP$SP$ClientResult<any>;

/**
 * Saves a SharePoint workflow definition to the workflow store.
 */
saveDefinition(definition: WorkflowServices$WorkflowDefinition): SP$SP$GuidResult;

/**
 * Validates the specified activity against workflow definitions in the workflow store.
 */
validateActivity(activityXaml: string): SP$SP$StringResult;

/**
 * Publishes a workflow definition to the workflow store.
 */
publishDefinition(definitionId: string): void;

/**
 * Marks a workflow definition as deprecated. Currently running workflow instances are allowed to complete, but new instances of the workflow definition are prevented from starting.
 */
deprecateDefinition(definitionId: string): void;

/**
 * Deletes a workflow definition.
 * @param definitionId The guid identifier of the workflow definition.
 */
deleteDefinition(definitionId: string): void;

/**
 * Retrieves workflow definitions from the workflow store that match the tags.
 */
enumerateDefinitions(publishedOnly: boolean): WorkflowServices$WorkflowDefinitionCollection;

/**
 * Retrieves a specified workflow definition from the workflow store.
 * @param definitionId The guid identifier of the workflow definition.
 */
getDefinition(definitionId: string): WorkflowServices$WorkflowDefinition;

/**
 * Saves the collateral file of a workflow definition.
 * @param workflowDefinitionId The guid identifier of the workflow definition.
 */
saveCollateral(
workflowDefinitionId: string,
leafFileName: string,
fileContent: SP$Base64EncodedByteArray): void;

/**
 * Deletes the URL of a workflow definition's collateral file.
 * @param workflowDefinitionId The guid identifier of the workflow definition.
 */
deleteCollateral(workflowDefinitionId: string, leafFileName: string): void;

/**
 * Retrieves the URL of the collateral file of the workflow definition.
 * @param workflowDefinitionId The guid identifier of the workflow definition.
 * @param leafFileName The leaf name of the collateral file.
 */
getCollateralUri(workflowDefinitionId: string, leafFileName: string): SP$SP$StringResult;

/**
 * Packages a single workflow definition into a SharePoint solution package (.wsp file) and saves the package to the Site Assets library.
 * Returns the URL of the package file in the Site Asset library.
 * Remarks:
 * 1. This method does not activate the package.
 * 2. If a package with the same name already exists in the Site Assets library, the method adds an integer suffix in braces to the file name, e.g. packageDefaultFilename{2}.wsp
 * @param definitionId The guid identifier of the workflow definition.
 * @param packageDefaultFilename The default filename to choose for the new package.
 * @param packageTitle The title of the package.
 * @param packageDescription The description of the package.
 */
packageDefinition(
definitionId: SP$SP$Guid,
packageDefaultFilename: string,
packageTitle: string,
packageDescription: string): SP$SP$StringResult
}


/**
 * Represents an instance of a workflow association that performs on a list item the process that is defined in a workflow template
 */
declare class WorkflowServices$WorkflowInstance mixins SP$SP$ClientObject {

/**
 * Contains the error string or exception information if the workflow faults.
 */
get_faultInfo(): string;

/**
 * Unique identifier (GUID) for the workflow instance
 */
get_id(): string;

/**
 * Gets the Coordinated Universal Time (UTC) when this workflow instance was created.
 */
get_instanceCreated(): string;

/**
 * Gets the Coordinated Universal Time (UTC) when the workflow instance state was last persisted
 */
get_lastUpdated(): string;

/**
 * Specifies properties of this workflow instance
 */
get_properties(): {
[name: string]: string
};

/**
 * Returns runtime status of the workflow instance
 */
get_status(): WorkflowServices$WorkflowStatus;

/**
 * Specifies the custom status set by workflow authors.
 */
get_userStatus(): string;

/**
 * Specifies the custom status set by workflow authors.
 */
set_userStatus(value: string): string;

/**
 * Gets the unique identifier (GUID) of the subscription that instantiates the WorkflowInstance
 */
get_workflowSubscriptionId(): SP$SP$Guid;

/**
 * This method is internal and is not intended to be used in your code.
 */
initPropertiesFromJson(parentNode: any): void
}


/**
 * Represents a collection of WorkflowInstance objects
 */
declare type WorkflowServices$WorkflowInstanceCollection = {
itemAt(index: number): WorkflowServices$WorkflowInstance,
get_item(index: number): WorkflowServices$WorkflowInstance,

/**
 * returns SP.WorkflowInstance class
 */
get_childItemType(): any
} & SP$SP$ClientObjectCollection<WorkflowServices$WorkflowInstance>



/**
 * Reads the SharePoint workflow instances from the external workflow host and manages the instance execution.
 */
declare class WorkflowServices$WorkflowInstanceService mixins SP$SP$ClientObject {

/**
 * Starts a Workflow Manager Client 1.0 instance specified by the subscription and passes the supplied parameters.
 * Returns GUID of the instance object.
 * @param payload Object that contains name-value pairs of parameter names and values to pass into the workflow instance.
 */
startWorkflow(
subscription: WorkflowServices$WorkflowSubscription,
payload: {
[name: string]: any
}): SP$SP$GuidResult;

/**
 * Starts a Workflow Manager Client 1.0 instance specified by the subscription and passes the supplied parameters.
 * Returns GUID of the instance object.
 * @param subscription The subscription associated with the workflow instance.
 * @param itemId The integer id of the list item on which to start the workflow instance.
 * @param payload Object that contains name-value pairs of parameter names and values to pass into the workflow instance.
 */
startWorkflowOnListItem(
subscription: WorkflowServices$WorkflowSubscription,
itemId: number,
payload: {
[name: string]: any
}): SP$SP$GuidResult;

/**
 * Gets workflow instance specified by the provided instance GUID
 */
getInstance(instanceId: string): WorkflowServices$WorkflowInstance;

/**
 * Gets a workflow instance collection comprising the 100 most recent workflow instances started by a specified subscription.
 */
enumerate(
parentSubscription: WorkflowServices$WorkflowSubscription): WorkflowServices$WorkflowInstanceCollection;

/**
 * Gets a workflow instance collection comprising 100 workflow instances starting at the specified offset.
 */
enumerateWithOffset(
parentSubscription: WorkflowServices$WorkflowSubscription,
offset: number): WorkflowServices$WorkflowInstanceCollection;

/**
 * Gets the list of instances for the specified list item.
 */
enumerateInstancesForListItem(listId: string, itemId: number): WorkflowServices$WorkflowInstanceCollection;

/**
 * Gets the list of instances for the specified list item.
 */
enumerateInstancesForListItemWithOffset(
listId: string,
itemId: number,
offset: number): WorkflowServices$WorkflowInstanceCollection;

/**
 * Gets the list of instances for the current site.
 */
enumerateInstancesForSite(): WorkflowServices$WorkflowInstanceCollection;

/**
 * Gets the list of instances for the current site.
 */
enumerateInstancesForSiteWithOffset(offset: number): WorkflowServices$WorkflowInstanceCollection;

/**
 * Retrieves a count of all the instances of the specified WorkflowSubscription.
 */
countInstances(parentSubscription: WorkflowServices$WorkflowSubscription): SP$SP$IntResult;

/**
 * Retrieves a count of the instances of the specified WorkflowSubscription that have a specified status.
 */
countInstancesWithStatus(
parentSubscription: WorkflowServices$WorkflowSubscription,
status: WorkflowServices$WorkflowStatus): SP$SP$IntResult;

/**
 * Sends a cancel message to the specified workflow instance and permits the instance to execute a cancellation scope.
 */
cancelWorkflow(instance: WorkflowServices$WorkflowInstance): void;

/**
 * Terminate a workflow instance forcefully by deleting it from memory. The instance is not allowed to execute a cancellation scope
 */
terminateWorkflow(instance: WorkflowServices$WorkflowInstance): void;
suspendWorkflow(instance: WorkflowServices$WorkflowInstance): void;
resumeWorkflow(instance: WorkflowServices$WorkflowInstance): void;

/**
 * Sends a custom event to a running workflow with the event payload.
 */
publishCustomEvent(
instance: WorkflowServices$WorkflowInstance,
eventName: string,
payload: string): void;
getDebugInfo(instance: WorkflowServices$WorkflowInstance): SP$SP$StringResult
}


/**
 * Describes the workflow host configuration states and provides service objects that interact with the workflow
 */
declare class WorkflowServices$WorkflowServicesManager mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext, web: SP$SP$Web): this;
static newObject(
context: SP$SP$ClientRuntimeContext,
web: SP$SP$Web): WorkflowServices$WorkflowServicesManager;

/**
 * The current application identifier.
 */
get_appId(): string;

/**
 * Indicates whether this workflow service is actively connected to a workflow host.
 */
get_isConnected(): boolean;

/**
 * Returns the path of the current scope in the workflow host.
 */
get_scopePath(): string;
getWorkflowDeploymentService(): WorkflowServices$WorkflowDeploymentService;
getWorkflowInstanceService(): WorkflowServices$WorkflowInstanceService;
getWorkflowInteropService(): WorkflowServices$InteropService;
getWorkflowSubscriptionService(): WorkflowServices$WorkflowSubscriptionService;

/**
 * This method is internal and is not intended to be used in your code.
 */
initPropertiesFromJson(parentNode: any): void
}


/**
 * Base class representing subscriptions for the external workflow host.
 */
declare class WorkflowServices$WorkflowSubscription mixins SP$SP$ClientObject {

/**
 * Gets the unique ID of the workflow definition to activate.
 */
get_definitionId(): SP$SP$Guid;

/**
 * Sets the unique ID of the workflow definition to activate.
 */
set_definitionId(value: SP$SP$Guid): SP$SP$Guid;

/**
 * Gets a boolean value that specifies if the workflow subscription is enabled.
 * When disabled, new instances of the subscription cannot be started, but existing instances will continue to run.
 */
get_enabled(): boolean;

/**
 * Sets a boolean value that enables or disables the workflow subscription.
 * When disabled, new instances of the subscription cannot be started, but existing instances will continue to run.
 */
set_enabled(value: boolean): boolean;

/**
 * Gets the logical source instance name of the event. (GUID)
 */
get_eventSourceId(): string;

/**
 * Sets the logical source instance name of the event. (GUID)
 */
set_eventSourceId(value: string): string;

/**
 * Gets or sets the list of event types for which the subscription is listening.
 * For SharePoint events, these will map to a value in the SPEventReceiverType enumeration.
 */
get_eventTypes(): string[];

/**
 * Gets or sets the list of event types for which the subscription is listening.
 * For SharePoint events, these will map to a value in the SPEventReceiverType enumeration.
 */
set_eventTypes(value: string[]): string[];

/**
 * Unique identifier (GUID) of the workflow subscription
 */
get_id(): string;

/**
 * Unique identifier (GUID) of the workflow subscription
 */
set_id(value: string): string;

/**
 * Boolean value that specifies whether multiple workflow instances can be started manually on the same list item at the same time. This property can be used for list workflows only.
 */
get_manualStartBypassesActivationLimit(): boolean;

/**
 * Boolean value that specifies whether multiple workflow instances can be started manually on the same list item at the same time. This property can be used for list workflows only.
 */
set_manualStartBypassesActivationLimit(value: boolean): boolean;

/**
 * Gets the name of the workflow subscription for the specified event source.
 */
get_name(): string;

/**
 * Sets the name of the workflow subscription for the specified event source.
 */
set_name(value: string): string;

/**
 * Gets the properties and values to pass to the workflow definition when the subscription is matched.
 */
get_propertyDefinitions(): any;

/**
 * Gets the name of the workflow status field on the specified list.
 */
get_statusFieldName(): string;

/**
 * Gets or sets the name of the workflow status field on the specified list.
 */
set_statusFieldName(value: string): string;

/**
 * Sets the name-value pairs for workflow definition initiation parameters that are stored in the PropertyDefinitions property
 */
setProperty(propertyName: string, value: string): void;

/**
 * This method is internal and is not intended to be used in your code.
 */
initPropertiesFromJson(parentNode: any): void
}


/**
 * Represents a collection of WorkflowSubscription objects
 */
declare type WorkflowServices$WorkflowSubscriptionCollection = {
itemAt(index: number): WorkflowServices$WorkflowSubscription,
get_item(index: number): WorkflowServices$WorkflowSubscription,

/**
 * returns SP.WorkflowInstance class
 */
get_childItemType(): any
} & SP$SP$ClientObjectCollection<WorkflowServices$WorkflowSubscription>


declare class WorkflowServices$WorkflowSubscriptionService mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientRuntimeContext, objectPath: SP$SP$ObjectPathStaticProperty): this;
static getCurrent(
context: SP$SP$ClientRuntimeContext): WorkflowServices$WorkflowSubscriptionService;

/**
 * Creates a workflow subscription for a workflow, and returns the unique identifier of the new subscription.
 */
publishSubscription(subscription: WorkflowServices$WorkflowSubscription): SP$SP$GuidResult;

/**
 * Creates a workflow subscription for a workflow and if necessary an event receiver on the specified list.
 * Also writes an EventSourceId that matches the list as the event source.
 * Returns the unique identifier of the new subscription.
 * @param listId Unique identifier (GUID) for the specified list.
 */
publishSubscriptionForList(
subscription: WorkflowServices$WorkflowSubscription,
listId: string): SP$SP$GuidResult;

/**
 * Ensures that an event receiver will monitor a list for the specified event.
 * @param listId Unique identifier (GUID) for the specified list.
 * @eventName eventName The name of the event to be monitored.
 */
registerInterestInList(listId: string, eventName: string): void;

/**
 * Removes monitoring for an event receiver on the specified list with the specified event.
 * @param listId GUID of the list containing the event receiver to be unregistered.
 * @eventName eventName The name of the event to be removed.
 */
unregisterInterestInList(listId: string, eventName: string): void;
getSubscription(subscriptionId: SP$SP$Guid): WorkflowServices$WorkflowSubscription;
deleteSubscription(subscriptionId: SP$SP$Guid): WorkflowServices$WorkflowSubscription;

/**
 * Retrieves workflow subscriptions that contains all of the workflow subscriptions on the Web
 */
enumerateSubscriptions(): WorkflowServices$WorkflowSubscriptionCollection;

/**
 * Retrieves workflow subscriptions based on workflow definition
 */
enumerateSubscriptionsByDefinition(definitionId: string): WorkflowServices$WorkflowSubscriptionCollection;

/**
 * Retrieves workflow subscriptions based on the specified EventSourceId
 */
enumerateSubscriptionsByEventSource(eventSourceId: string): WorkflowServices$WorkflowSubscriptionCollection;

/**
 * Retrieves workflow subscriptions based on the specified list.
 * @param listId The unique identifier (GUID) of the list on which to filter the subscriptions.
 */
enumerateSubscriptionsByList(listId: string): WorkflowServices$WorkflowSubscriptionCollection
}

declare class Publishing$PublishingWeb mixins SP$ClientObject {
static getPublishingWeb(context: SP$ClientContext, web: SP$Web): Publishing$PublishingWeb;
get_web(): SP$Web;
addPublishingPage(
pageInformation: Publishing$PublishingPageInformation): Publishing$PublishingPage
}

declare class Publishing$PublishingPageInformation mixins SP$ClientValueObject {
get_folder(): SP$Folder;
set_folder(value: SP$Folder): SP$Folder;
get_name(): string;
set_name(value: string): string;
get_pageLayoutListItem(): SP$ListItem;
set_pageLayoutListItem(value: SP$ListItem): SP$ListItem
}

declare class Publishing$PublishingPage mixins Publishing$ScheduledItem {
static getPublishingPage(
context: SP$ClientContext,
sourceListItem: SP$ListItem): Publishing$PublishingPage;
addFriendlyUrl(
friendlyUrlSegment: string,
editableParent: Controls$Navigation.Navigation$NavigationTermSetItem,
doAddToNavigation: boolean): SP$StringResult
}

declare class Publishing$ScheduledItem mixins SP$ClientObject {
get_listItem(): SP$ListItem;
get_startDate(): Date;
set_startDate(value: Date): Date;
get_endDate(): Date;
set_endDate(value: Date): Date;
schedule(approvalComment: string): void
}

declare class Publishing$PublishingSite mixins SP$ClientObject {
static createPageLayout(
context: SP$ClientContext,
parameters: Publishing$PageLayoutCreationInformation): void
}

declare class Publishing$PageLayoutCreationInformation mixins SP$ClientValueObject {
get_web(): SP$Web;
set_web(value: SP$Web): SP$Web;
get_associatedContentTypeId(): string;
set_associatedContentTypeId(value: string): string;
get_masterPageUrl(): string;
set_masterPageUrl(value: string): string;
get_newPageLayoutNameWithoutExtension(): string;
set_newPageLayoutNameWithoutExtension(value: string): string;
get_newPageLayoutEditablePath(): string;
set_newPageLayoutEditablePath(value: string): string
}

declare class Publishing$SiteServicesAddins  {
static getSettings(context: SP$ClientContext, addinId: SP$Guid): Publishing$AddinSettings;
static setSettings(context: SP$ClientContext, addin: Publishing$AddinSettings): void;
static deleteSettings(context: SP$ClientContext, addinId: SP$Guid): void;
static getPlugin(context: SP$ClientContext, pluginName: string): Publishing$AddinPlugin;
static setPlugin(context: SP$ClientContext, addin: Publishing$AddinPlugin): void;
static deletePlugin(context: SP$ClientContext, pluginName: string): void
}

declare class Publishing$AddinSettings mixins SP$ClientObject {
constructor(ctx: SP$ClientContext, id: SP$Guid): this;
get_id(): SP$Guid;
get_title(): string;
set_title(value: string): string;
get_description(): string;
set_description(value: string): string;
get_enabled(): boolean;
set_enabled(value: boolean): boolean;
get_namespace(): boolean;
set_namespace(value: boolean): boolean;
get_headScript(): string;
set_headScript(value: string): string;
get_htmlStartBody(): string;
set_htmlStartBody(value: string): string;
get_htmlEndBody(): string;
set_htmlEndBody(value: string): string;
get_metaTagPagePropertyMappings(): {
[key: string]: string
};
set_metaTagPagePropertyMappings(value: {
[key: string]: string
}): {
[key: string]: string
}
}

declare class Publishing$AddinPlugin mixins SP$ClientObject {
constructor(ctx: SP$ClientContext): this;
get_description(): string;
set_description(value: string): string;
get_markup(): string;
set_markup(value: string): string;
get_title(): string;
set_title(value: string): string
}

declare class Publishing$DesignPackage  {
static install(
context: SP$ClientContext,
site: SP$Site,
info: Publishing$DesignPackageInfo,
path: string): void;
static uninstall(
context: SP$ClientContext,
site: SP$Site,
info: Publishing$DesignPackageInfo): void;
static apply(
context: SP$ClientContext,
site: SP$Site,
info: Publishing$DesignPackageInfo): void;
static exportEnterprise(
context: SP$ClientContext,
site: SP$Site,
includeSearchConfiguration: boolean): SP$ClientResult<Publishing$DesignPackageInfo>;
static exportSmallBusiness(
context: SP$ClientContext,
site: SP$Site,
packageName: string,
includeSearchConfiguration: boolean): SP$ClientResult<Publishing$DesignPackageInfo>
}

declare class Publishing$DesignPackageInfo mixins SP$ClientValueObject {
get_packageName(): string;
set_packageName(value: string): string;
get_packageGuid(): SP$Guid;
set_packageGuid(value: SP$Guid): SP$Guid;
get_majorVersion(): number;
set_majorVersion(value: number): number;
get_minorVersion(): number;
set_minorVersion(value: number): number
}

declare class Publishing$SiteImageRenditions  {
static getRenditions(context: SP$ClientContext): Publishing$ImageRendition[];
static setRenditions(context: SP$ClientContext, renditions: Publishing$ImageRendition[]): void
}

declare class Publishing$ImageRendition mixins SP$ClientValueObject {
get_id(): number;
get_version(): number;
get_name(): string;
set_name(value: string): string;
get_width(): number;
set_width(value: number): number;
get_height(): number;
set_height(value: number): number
}

declare class Publishing$Variations mixins SP$ClientObject {
static getLabels(context: SP$ClientContext): SP$ClientObjectList<Publishing$VariationLabel>;
static getPeerUrl(
context: SP$ClientContext,
currentUrl: string,
labelTitle: string): SP$StringResult;
static updateListItems(context: SP$ClientContext, listId: SP$Guid, itemIds: number[]): void
}

declare class Publishing$VariationLabel mixins SP$ClientObject {
get_displayName(): string;
set_displayName(value: string): string;
get_isSource(): boolean;
set_isSource(value: boolean): boolean;
get_language(): string;
set_language(value: string): string;
get_locale(): string;
set_locale(value: string): string;
get_title(): string;
set_title(value: string): string;
get_topWebUrl(): string;
set_topWebUrl(value: string): string
}

declare class Publishing$CustomizableString mixins SP$ClientObject {
get_defaultValue(): string;
get_value(): string;
set_value(value: string): string;
get_usesDefaultValue(): boolean;
set_usesDefaultValue(value: boolean): boolean
}

declare  class Navigation$NavigationLinkType {
  constructor(...args: empty): mixed;
static +root: Class<Navigation$NavigationLinkType__root> & Navigation$NavigationLinkType__root & 0;// 0
static +friendlyUrl: Class<Navigation$NavigationLinkType__friendlyUrl> & Navigation$NavigationLinkType__friendlyUrl & 1;// 1
static +simpleLink: Class<Navigation$NavigationLinkType__simpleLink> & Navigation$NavigationLinkType__simpleLink & 2;// 2

}

declare class Navigation$NavigationLinkType__root mixins Navigation$NavigationLinkType {}
declare class Navigation$NavigationLinkType__friendlyUrl mixins Navigation$NavigationLinkType {}
declare class Navigation$NavigationLinkType__simpleLink mixins Navigation$NavigationLinkType {}


declare  class Navigation$StandardNavigationSource {
  constructor(...args: empty): mixed;
static +unknown: Class<Navigation$StandardNavigationSource__unknown> & Navigation$StandardNavigationSource__unknown & 0;// 0
static +portalProvider: Class<Navigation$StandardNavigationSource__portalProvider> & Navigation$StandardNavigationSource__portalProvider & 1;// 1
static +taxonomyProvider: Class<Navigation$StandardNavigationSource__taxonomyProvider> & Navigation$StandardNavigationSource__taxonomyProvider & 2;// 2
static +inheritFromParentWeb: Class<Navigation$StandardNavigationSource__inheritFromParentWeb> & Navigation$StandardNavigationSource__inheritFromParentWeb & 3;// 3

}

declare class Navigation$StandardNavigationSource__unknown mixins Navigation$StandardNavigationSource {}
declare class Navigation$StandardNavigationSource__portalProvider mixins Navigation$StandardNavigationSource {}
declare class Navigation$StandardNavigationSource__taxonomyProvider mixins Navigation$StandardNavigationSource {}
declare class Navigation$StandardNavigationSource__inheritFromParentWeb mixins Navigation$StandardNavigationSource {}


declare class Navigation$NavigationTermSetItem mixins SP$ClientObject {
get_id(): SP$Guid;
get_isReadOnly(): boolean;
get_linkType(): Navigation$NavigationLinkType;
set_linkType(value: Navigation$NavigationLinkType): Navigation$NavigationLinkType;
get_targetUrlForChildTerms(): Publishing$CustomizableString;
get_catalogTargetUrlForChildTerms(): Publishing$CustomizableString;
get_taxonomyName(): string;
get_title(): Publishing$CustomizableString;
get_terms(): Navigation$NavigationTermCollection;
get_view(): Navigation$NavigationTermSetView;
createTerm(
termName: string,
linkType: Navigation$NavigationLinkType,
termId: SP$Guid): SP$Taxonomy.Taxonomy$Term;
getTaxonomyTermStore(): SP$Taxonomy.Taxonomy$TermStore;
getResolvedDisplayUrl(browserQueryString: string): SP$StringResult
}

declare type Navigation$NavigationTermCollection = {} & SP$ClientObjectCollection<Navigation$NavigationTerm>


declare class Navigation$NavigationTerm mixins Navigation$NavigationTermSetItem {
get_associatedFolderUrl(): string;
set_associatedFolderUrl(value: string): string;
get_catalogTargetUrl(): Publishing$CustomizableString;
get_categoryImageUrl(): string;
set_categoryImageUrl(value: string): string;
get_excludedProviders(): Navigation$NavigationTermProviderNameCollection;
get_excludeFromCurrentNavigation(): boolean;
set_excludeFromCurrentNavigation(value: boolean): boolean;
get_excludeFromGlobalNavigation(): boolean;
set_excludeFromGlobalNavigation(value: boolean): boolean;
get_friendlyUrlSegment(): Publishing$CustomizableString;
get_hoverText(): string;
set_hoverText(value: string): string;
get_isDeprecated(): boolean;
get_isPinned(): boolean;
get_isPinnedRoot(): boolean;
get_parent(): Navigation$NavigationTerm;
get_simpleLinkUrl(): string;
set_simpleLinkUrl(value: string): string;
get_targetUrl(): Publishing$CustomizableString;
get_termSet(): Navigation$NavigationTermSet;
getAsEditable(
taxonomySession: SP$Taxonomy.Taxonomy$TaxonomySession): Navigation$NavigationTerm;
getWithNewView(newView: Navigation$NavigationTermSetView): Navigation$NavigationTerm;
getResolvedTargetUrl(browserQueryString: string, remainingUrlSegments: string[]): SP$StringResult;
getResolvedTargetUrlWithoutQuery(): SP$StringResult;
getResolvedAssociatedFolderUrl(): SP$StringResult;
getWebRelativeFriendlyUrl(): SP$StringResult;
getAllParentTerms(): Navigation$NavigationTermCollection;
getTaxonomyTerm(): SP$Taxonomy.Taxonomy$Term;
move(newParent: Navigation$NavigationTermSetItem): void;
deleteObject(): void;
static getAsResolvedByWeb(
context: SP$ClientContext,
term: SP$Taxonomy.Taxonomy$Term,
web: SP$Web,
siteMapProviderName: string): Navigation$NavigationTerm;
static getAsResolvedByView(
context: SP$ClientContext,
term: SP$Taxonomy.Taxonomy$Term,
view: Navigation$NavigationTermSetView): Navigation$NavigationTerm
}

declare class Navigation$NavigationTermSet mixins Navigation$NavigationTermSetItem {
get_isNavigationTermSet(): boolean;
set_isNavigationTermSet(value: boolean): boolean;
get_lcid(): number;
get_loadedFromPersistedData(): boolean;
get_termGroupId(): SP$Guid;
get_termStoreId(): SP$Guid;
getAsEditable(
taxonomySession: SP$Taxonomy.Taxonomy$TaxonomySession): Navigation$NavigationTermSet;
getWithNewView(newView: Navigation$NavigationTermSetView): Navigation$NavigationTermSet;
getTaxonomyTermSet(): SP$Taxonomy.Taxonomy$TermSet;
getAllTerms(): Navigation$NavigationTermCollection;
findTermForUrl(url: string): Navigation$NavigationTerm;
static getAsResolvedByWeb(
context: SP$ClientContext,
termSet: SP$Taxonomy.Taxonomy$TermSet,
web: SP$Web,
siteMapProviderName: string): Navigation$NavigationTermSet;
static getAsResolvedByView(
context: SP$ClientContext,
termSet: SP$Taxonomy.Taxonomy$TermSet,
view: Navigation$NavigationTermSetView): Navigation$NavigationTermSet
}

declare type Navigation$NavigationTermProviderNameCollection = {
Add(item: string): void,
Clear(): void,
Remove(item: string): SP$BooleanResult
} & SP$ClientObjectCollection<string>


declare class Navigation$NavigationTermSetView mixins SP$ClientObject {
constructor(context: SP$ClientContext, web: SP$Web, siteMapProviderName: string): this;
get_excludeDeprecatedTerms(): boolean;
set_excludeDeprecatedTerms(value: boolean): boolean;
get_excludeTermsByPermissions(): boolean;
set_excludeTermsByPermissions(value: boolean): boolean;
get_excludeTermsByProvider(): boolean;
set_excludeTermsByProvider(value: boolean): boolean;
get_serverRelativeSiteUrl(): string;
get_serverRelativeWebUrl(): string;
get_siteMapProviderName(): string;
set_siteMapProviderName(value: string): string;
get_webId(): SP$Guid;
get_webTitle(): string;
getCopy(): Navigation$NavigationTermSetView;
static createEmptyInstance(context: SP$ClientContext): Navigation$NavigationTermSetView
}

declare class Navigation$TaxonomyNavigation  {
static getWebNavigationSettings(context: SP$ClientContext, web: SP$Web): Navigation$WebNavigationSettings;
static getTermSetForWeb(
context: SP$ClientContext,
web: SP$Web,
siteMapProviderName: string,
includeInheritedSettings: boolean): Navigation$NavigationTermSet;
static setCrawlAsFriendlyUrlPage(
context: SP$ClientContext,
navigationTerm: SP$Taxonomy.Taxonomy$Term,
crawlAsFriendlyUrlPage: boolean): SP$BooleanResult;
static getNavigationLcidForWeb(context: SP$ClientContext, web: SP$Web): SP$IntResult;
static flushSiteFromCache(context: SP$ClientContext, site: SP$Site): void;
static flushWebFromCache(context: SP$ClientContext, web: SP$Web): void;
static flushTermSetFromCache(
context: SP$ClientContext,
webForPermissions: SP$Web,
termStoreId: SP$Guid,
termSetId: SP$Guid): void
}

declare class Navigation$WebNavigationSettings mixins SP$ClientObject {
constructor(context: SP$ClientContext, web: SP$Web): this;
get_addNewPagesToNavigation(): boolean;
set_addNewPagesToNavigation(value: boolean): boolean;
get_createFriendlyUrlsForNewPages(): boolean;
set_createFriendlyUrlsForNewPages(value: boolean): boolean;
get_currentNavigation(): Navigation$StandardNavigationSettings;
get_globalNavigation(): Navigation$StandardNavigationSettings;
update(taxonomySession: SP$Taxonomy.Taxonomy$TaxonomySession): void;
resetToDefaults(): void
}

declare class Navigation$StandardNavigationSettings mixins SP$ClientObject {
get_termSetId(): SP$Guid;
set_termSetId(value: SP$Guid): SP$Guid;
get_termStoreId(): SP$Guid;
set_termStoreId(value: SP$Guid): SP$Guid;
get_source(): Navigation$StandardNavigationSource;
set_source(
value: Navigation$StandardNavigationSource): Navigation$StandardNavigationSource
}

declare  class CompliancePolicy$SPContainerType {
  constructor(...args: empty): mixed;
static +site: Class<CompliancePolicy$SPContainerType__site> & CompliancePolicy$SPContainerType__site & 0;// 0
static +web: Class<CompliancePolicy$SPContainerType__web> & CompliancePolicy$SPContainerType__web & 1;// 1
static +list: Class<CompliancePolicy$SPContainerType__list> & CompliancePolicy$SPContainerType__list & 2;// 2

}

declare class CompliancePolicy$SPContainerType__site mixins CompliancePolicy$SPContainerType {}
declare class CompliancePolicy$SPContainerType__web mixins CompliancePolicy$SPContainerType {}
declare class CompliancePolicy$SPContainerType__list mixins CompliancePolicy$SPContainerType {}


declare class CompliancePolicy$SPContainerId mixins SP$ClientObject {
static createFromList(
context: SP$ClientRuntimeContext,
list: SP$List): CompliancePolicy$SPContainerId;
static createFromWeb(context: SP$ClientRuntimeContext, web: SP$Web): CompliancePolicy$SPContainerId;
static createFromSite(
context: SP$ClientRuntimeContext,
site: SP$Site): CompliancePolicy$SPContainerId;
static create(
context: SP$ClientRuntimeContext,
containerId: any): CompliancePolicy$SPContainerId;
get_containerType(): SP$ContentType;
set_containerType(value: SP$ContentType): SP$ContentType;
get_listId(): SP$SP$Guid;
set_listId(value: SP$SP$Guid): SP$SP$Guid;
get_siteId(): SP$SP$Guid;
set_siteId(value: SP$SP$Guid): SP$SP$Guid;
get_siteUrl(): string;
set_siteUrl(value: string): string;
get_tenantId(): SP$SP$Guid;
set_tenantId(value: SP$SP$Guid): SP$SP$Guid;
get_title(): string;
set_title(value: string): string;
get_version(): any;
set_version(value: any): any;
get_webId(): SP$SP$Guid;
set_webId(value: SP$SP$Guid): SP$SP$Guid;
serialize(): SP$SP$StringResult
}

declare class CompliancePolicy$SPPolicyAssociation mixins SP$ClientObject {
get_allowOverride(): boolean;
set_allowOverride(value: boolean): boolean;
get_comment(): string;
set_comment(value: string): string;
get_defaultPolicyDefinitionConfigId(): any[];
set_defaultPolicyDefinitionConfigId(value: any[]): any[];
get_description(): string;
set_description(value: string): string;
get_identity(): boolean;
set_identity(value: boolean): boolean;
get_name(): string;
set_name(value: string): string;
get_policyApplyStatus(): any;
set_policyApplyStatus(value: any): any;
get_policyDefinitionConfigIds(): any[];
set_policyDefinitionConfigIds(value: any[]): any[];
get_scope(): any;
set_scope(value: any): any;
get_source(): any;
set_source(value: any): any;
get_version(): any;
set_version(value: any): any;
get_whenAppliedUTC(): Date;
set_whenAppliedUTC(value: Date): Date;
get_whenChangedUTC(): Date;
set_whenChangedUTC(value: Date): Date;
get_whenCreatedUTC(): Date;
set_whenCreatedUTC(value: Date): Date
}

declare class CompliancePolicy$SPPolicyBinding mixins SP$ClientObject {
get_identity(): any;
set_identity(value: any): any;
get_isExempt(): boolean;
set_isExempt(value: boolean): boolean;
get_mode(): any;
set_mode(value: any): any;
get_name(): string;
set_name(value: string): string;
get_policyApplyStatus(): any;
set_policyApplyStatus(value: any): any;
get_policyAssociationConfigId(): any;
set_policyAssociationConfigId(value: any): any;
get_policyDefinitionConfigId(): any;
set_policyDefinitionConfigId(value: any): any;
get_policyRuleConfigId(): any;
set_policyRuleConfigId(value: any): any;
get_scope(): any;
set_scope(value: any): any;
get_source(): any;
set_source(value: any): any;
get_version(): any;
set_version(value: any): any;
get_whenAppliedUTC(): Date;
set_whenAppliedUTC(value: Date): Date;
get_whenChangedUTC(): Date;
set_whenChangedUTC(value: Date): Date;
get_whenCreatedUTC(): Date;
set_whenCreatedUTC(value: Date): Date
}

declare class CompliancePolicy$SPPolicyDefinition mixins SP$ClientObject {
get_comment(): string;
set_comment(value: string): string;
get_createdBy(): any;
set_createdBy(value: any): any;
get_defaultPolicyRuleConfigId(): any;
set_defaultPolicyRuleConfigId(value: any): any;
get_description(): string;
set_description(value: string): string;
get_enabled(): boolean;
set_enabled(value: boolean): boolean;
get_identity(): any;
set_identity(value: any): any;
get_lastModifiedBy(): any;
set_lastModifiedBy(value: any): any;
get_name(): string;
set_name(value: string): string;
get_mode(): any;
set_mode(value: any): any;
get_scenario(): any;
set_scenario(value: any): any;
get_source(): any;
set_source(value: any): any;
get_version(): any;
set_version(value: any): any;
get_whenChangedUTC(): Date;
set_whenChangedUTC(value: Date): Date;
get_whenCreatedUTC(): Date;
set_whenCreatedUTC(value: Date): Date
}

declare class CompliancePolicy$SPPolicyRule mixins SP$ClientObject {
get_comment(): string;
set_comment(value: string): string;
get_createdBy(): any;
set_createdBy(value: any): any;
get_description(): string;
set_description(value: string): string;
get_enabled(): boolean;
set_enabled(value: boolean): boolean;
get_identity(): any;
set_identity(value: any): any;
get_lastModifiedBy(): any;
set_lastModifiedBy(value: any): any;
get_mode(): any;
set_mode(value: any): any;
get_name(): string;
set_name(value: string): string;
get_policyDefinitionConfigId(): any;
set_policyDefinitionConfigId(value: any): any;
get_priority(): any;
set_priority(value: any): any;
get_ruleBlob(): any;
set_ruleBlob(value: any): any;
get_whenChangedUTC(): Date;
set_whenChangedUTC(value: Date): Date;
get_whenCreatedUTC(): Date;
set_whenCreatedUTC(value: Date): Date
}

declare class CompliancePolicy$SPPolicyStore mixins SP$ClientObject {
constructor(context: SP$ClientRuntimeContext, web: SP$Web): this;
static createPolicyDefinition(context: SP$ClientRuntimeContext): CompliancePolicy$SPPolicyDefinition;
static createPolicyBinding(context: SP$ClientRuntimeContext): CompliancePolicy$SPPolicyBinding;
static createPolicyAssociation(context: SP$ClientRuntimeContext): CompliancePolicy$SPPolicyAssociation;
static createPolicyRule(context: SP$ClientRuntimeContext): CompliancePolicy$SPPolicyRule;
updatePolicyRule(policyRule: CompliancePolicy$SPPolicyRule): void;
getPolicyRule(policyRuleId: any, throwIfNull: boolean): CompliancePolicy$SPPolicyRule;
deletePolicyRule(policyRuleId: any): void;
notifyUnifiedPolicySync(
notificationId: any,
syncSvcUrl: string,
changeInfos: any,
syncNow: boolean,
fullSyncForTenant: boolean): void;
updatePolicyDefinition(policyDefinition: CompliancePolicy$SPPolicyDefinition): void;
getPolicyDefinition(policyDefinitionId: any): CompliancePolicy$SPPolicyDefinition;
deletePolicyDefinition(policyDefinitionId: any): void;
getPolicyDefinitions(scenario: any): SP$ClientObjectList<CompliancePolicy$SPPolicyDefinition>;
updatePolicyBinding(policyBinding: CompliancePolicy$SPPolicyBinding): void;
getPolicyBinding(policyBindingId: any): CompliancePolicy$SPPolicyBinding;
deletePolicyBinding(policyBindingId: any): void;
updatePolicyAssociation(policyAssociation: CompliancePolicy$SPPolicyAssociation): void;
getPolicyAssociation(policyAssociationId: any): CompliancePolicy$SPPolicyAssociation;
getPolicyAssociationForContainer(
containerId: CompliancePolicy$SPContainerId): CompliancePolicy$SPPolicyAssociation;
deletePolicyAssociation(policyAssociationId: any): void
}

declare class CompliancePolicy$SPPolicyStoreProxy mixins SP$ClientObject {
constructor(context: SP$ClientRuntimeContext, web: SP$Web): this;
get_policyStoreUrl(): string
}

declare  class Discovery$ExportStatus {
  constructor(...args: empty): mixed;
static +notStarted: Class<Discovery$ExportStatus__notStarted> & Discovery$ExportStatus__notStarted & 0;// 0
static +started: Class<Discovery$ExportStatus__started> & Discovery$ExportStatus__started & 1;// 1
static +complete: Class<Discovery$ExportStatus__complete> & Discovery$ExportStatus__complete & 2;// 2
static +failed: Class<Discovery$ExportStatus__failed> & Discovery$ExportStatus__failed & 3;// 3

}

declare class Discovery$ExportStatus__notStarted mixins Discovery$ExportStatus {}
declare class Discovery$ExportStatus__started mixins Discovery$ExportStatus {}
declare class Discovery$ExportStatus__complete mixins Discovery$ExportStatus {}
declare class Discovery$ExportStatus__failed mixins Discovery$ExportStatus {}


declare class Discovery$Case mixins SP$ClientObject {
constructor(context: SP$ClientRuntimeContext, web: SP$Web): this;
getExportContent(sourceIds: number[]): SP$SP$StringResult
}

declare class Discovery$Export mixins SP$ClientObject {
constructor(context: SP$ClientRuntimeContext, item: SP$ListItem): this;
get_status(): Discovery$ExportStatus;
set_status(value: Discovery$ExportStatus): Discovery$ExportStatus;
update(): void;
getExportContent(): SP$SP$StringResult
}

declare class InformationPolicy$ProjectPolicy mixins SP$SP$ClientObject {
constructor(context: SP$ClientRuntimeContext, objectPath: SP$ObjectPath): this;
get_description(): string;
get_emailBody(): string;
set_emailBody(value: string): string;
get_emailBodyWithTeamMailbox(): string;
set_emailBodyWithTeamMailbox(value: string): string;
get_emailSubject(): string;
set_emailSubject(value: string): string;
get_name(): string;
savePolicy(): void;
static getProjectPolicies(
context: SP$ClientRuntimeContext,
web: SP$Web): SP$ClientObjectList<InformationPolicy$ProjectPolicy>;
static getCurrentlyAppliedProject(context: SP$ClientRuntimeContext, web: SP$Web): InformationPolicy$ProjectPolicy;
static applyProjectPolicy(
context: SP$ClientRuntimeContext,
web: SP$Web,
projectPolicy: InformationPolicy$ProjectPolicy): void;
static openProject(context: SP$ClientRuntimeContext, web: SP$Web): void;
static closeProject(context: SP$ClientRuntimeContext, web: SP$Web): void;
static postponeProject(context: SP$ClientRuntimeContext, web: SP$Web): void;
static doesProjectHavePolicy(context: SP$ClientRuntimeContext, web: SP$Web): SP$SP$BooleanResult;
static isProjectClosed(context: SP$ClientRuntimeContext, web: SP$Web): SP$SP$BooleanResult;
static getProjectCloseDate(context: SP$ClientRuntimeContext, web: SP$Web): SP$SP$DateTimeResult;
static getProjectExpirationDate(context: SP$ClientRuntimeContext, web: SP$Web): SP$SP$DateTimeResult
}

declare  class JsGrid$TextDirection {
  constructor(...args: empty): mixed;
static +Default: Class<JsGrid$TextDirection__Default> & JsGrid$TextDirection__Default & 0;// 0
static +RightToLeft: Class<JsGrid$TextDirection__RightToLeft> & JsGrid$TextDirection__RightToLeft & 1;// 1
static +LeftToRight: Class<JsGrid$TextDirection__LeftToRight> & JsGrid$TextDirection__LeftToRight & 2;// 2

}

declare class JsGrid$TextDirection__Default mixins JsGrid$TextDirection {}
declare class JsGrid$TextDirection__RightToLeft mixins JsGrid$TextDirection {}
declare class JsGrid$TextDirection__LeftToRight mixins JsGrid$TextDirection {}


declare  class JsGrid$PaneId {
  constructor(...args: empty): mixed;
static +MainGrid: Class<JsGrid$PaneId__MainGrid> & JsGrid$PaneId__MainGrid & 0;// 0
static +PivotedGrid: Class<JsGrid$PaneId__PivotedGrid> & JsGrid$PaneId__PivotedGrid & 1;// 1
static +Gantt: Class<JsGrid$PaneId__Gantt> & JsGrid$PaneId__Gantt & 2;// 2

}

declare class JsGrid$PaneId__MainGrid mixins JsGrid$PaneId {}
declare class JsGrid$PaneId__PivotedGrid mixins JsGrid$PaneId {}
declare class JsGrid$PaneId__Gantt mixins JsGrid$PaneId {}


declare  class JsGrid$PaneLayout {
  constructor(...args: empty): mixed;
static +GridOnly: Class<JsGrid$PaneLayout__GridOnly> & JsGrid$PaneLayout__GridOnly & 0;// 0
static +GridAndGantt: Class<JsGrid$PaneLayout__GridAndGantt> & JsGrid$PaneLayout__GridAndGantt & 1;// 1
static +GridAndPivotedGrid: Class<JsGrid$PaneLayout__GridAndPivotedGrid> & JsGrid$PaneLayout__GridAndPivotedGrid & 2;// 2

}

declare class JsGrid$PaneLayout__GridOnly mixins JsGrid$PaneLayout {}
declare class JsGrid$PaneLayout__GridAndGantt mixins JsGrid$PaneLayout {}
declare class JsGrid$PaneLayout__GridAndPivotedGrid mixins JsGrid$PaneLayout {}


declare  class JsGrid$EditMode {
  constructor(...args: empty): mixed;
static +ReadOnly: Class<JsGrid$EditMode__ReadOnly> & JsGrid$EditMode__ReadOnly & 0;// 0
static +ReadWrite: Class<JsGrid$EditMode__ReadWrite> & JsGrid$EditMode__ReadWrite & 1;// 1
static +ReadOnlyDefer: Class<JsGrid$EditMode__ReadOnlyDefer> & JsGrid$EditMode__ReadOnlyDefer & 2;// 2
static +ReadWriteDefer: Class<JsGrid$EditMode__ReadWriteDefer> & JsGrid$EditMode__ReadWriteDefer & 3;// 3
static +Defer: Class<JsGrid$EditMode__Defer> & JsGrid$EditMode__Defer & 4;// 4

}

declare class JsGrid$EditMode__ReadOnly mixins JsGrid$EditMode {}
declare class JsGrid$EditMode__ReadWrite mixins JsGrid$EditMode {}
declare class JsGrid$EditMode__ReadOnlyDefer mixins JsGrid$EditMode {}
declare class JsGrid$EditMode__ReadWriteDefer mixins JsGrid$EditMode {}
declare class JsGrid$EditMode__Defer mixins JsGrid$EditMode {}


declare  class JsGrid$GanttDrawBarFlags {
  constructor(...args: empty): mixed;
static +LeftLink: Class<JsGrid$GanttDrawBarFlags__LeftLink> & JsGrid$GanttDrawBarFlags__LeftLink & 0;// 0
static +RightLink: Class<JsGrid$GanttDrawBarFlags__RightLink> & JsGrid$GanttDrawBarFlags__RightLink & 1;// 1

}

declare class JsGrid$GanttDrawBarFlags__LeftLink mixins JsGrid$GanttDrawBarFlags {}
declare class JsGrid$GanttDrawBarFlags__RightLink mixins JsGrid$GanttDrawBarFlags {}


declare  class JsGrid$GanttBarDateType {
  constructor(...args: empty): mixed;
static +Start: Class<JsGrid$GanttBarDateType__Start> & JsGrid$GanttBarDateType__Start & 0;// 0
static +End: Class<JsGrid$GanttBarDateType__End> & JsGrid$GanttBarDateType__End & 1;// 1

}

declare class JsGrid$GanttBarDateType__Start mixins JsGrid$GanttBarDateType {}
declare class JsGrid$GanttBarDateType__End mixins JsGrid$GanttBarDateType {}


declare  class JsGrid$ValidationState {
  constructor(...args: empty): mixed;
static +Valid: Class<JsGrid$ValidationState__Valid> & JsGrid$ValidationState__Valid & 0;// 0
static +Pending: Class<JsGrid$ValidationState__Pending> & JsGrid$ValidationState__Pending & 1;// 1
static +Invalid: Class<JsGrid$ValidationState__Invalid> & JsGrid$ValidationState__Invalid & 2;// 2

}

declare class JsGrid$ValidationState__Valid mixins JsGrid$ValidationState {}
declare class JsGrid$ValidationState__Pending mixins JsGrid$ValidationState {}
declare class JsGrid$ValidationState__Invalid mixins JsGrid$ValidationState {}


declare  class JsGrid$HierarchyMode {
  constructor(...args: empty): mixed;
static +None: Class<JsGrid$HierarchyMode__None> & JsGrid$HierarchyMode__None & 0;// 0
static +Standard: Class<JsGrid$HierarchyMode__Standard> & JsGrid$HierarchyMode__Standard & 1;// 1
static +Grouping: Class<JsGrid$HierarchyMode__Grouping> & JsGrid$HierarchyMode__Grouping & 2;// 2

}

declare class JsGrid$HierarchyMode__None mixins JsGrid$HierarchyMode {}
declare class JsGrid$HierarchyMode__Standard mixins JsGrid$HierarchyMode {}
declare class JsGrid$HierarchyMode__Grouping mixins JsGrid$HierarchyMode {}


declare  class JsGrid$EditActorWriteType {
  constructor(...args: empty): mixed;
static +Both: Class<JsGrid$EditActorWriteType__Both> & JsGrid$EditActorWriteType__Both & 0;// 0
static +LocalizedOnly: Class<JsGrid$EditActorWriteType__LocalizedOnly> & JsGrid$EditActorWriteType__LocalizedOnly & 1;// 1
static +DataOnly: Class<JsGrid$EditActorWriteType__DataOnly> & JsGrid$EditActorWriteType__DataOnly & 2;// 2
static +Either: Class<JsGrid$EditActorWriteType__Either> & JsGrid$EditActorWriteType__Either & 3;// 3

}

declare class JsGrid$EditActorWriteType__Both mixins JsGrid$EditActorWriteType {}
declare class JsGrid$EditActorWriteType__LocalizedOnly mixins JsGrid$EditActorWriteType {}
declare class JsGrid$EditActorWriteType__DataOnly mixins JsGrid$EditActorWriteType {}
declare class JsGrid$EditActorWriteType__Either mixins JsGrid$EditActorWriteType {}


declare  class JsGrid$EditActorReadType {
  constructor(...args: empty): mixed;
static +Both: Class<JsGrid$EditActorReadType__Both> & JsGrid$EditActorReadType__Both & 0;// 0
static +LocalizedOnly: Class<JsGrid$EditActorReadType__LocalizedOnly> & JsGrid$EditActorReadType__LocalizedOnly & 1;// 1
static +DataOnly: Class<JsGrid$EditActorReadType__DataOnly> & JsGrid$EditActorReadType__DataOnly & 2;// 2

}

declare class JsGrid$EditActorReadType__Both mixins JsGrid$EditActorReadType {}
declare class JsGrid$EditActorReadType__LocalizedOnly mixins JsGrid$EditActorReadType {}
declare class JsGrid$EditActorReadType__DataOnly mixins JsGrid$EditActorReadType {}


declare  class JsGrid$EditActorUpdateType {
  constructor(...args: empty): mixed;
static +Committed: Class<JsGrid$EditActorUpdateType__Committed> & JsGrid$EditActorUpdateType__Committed & 0;// 0
static +Uncommitted: Class<JsGrid$EditActorUpdateType__Uncommitted> & JsGrid$EditActorUpdateType__Uncommitted & 1;// 1

}

declare class JsGrid$EditActorUpdateType__Committed mixins JsGrid$EditActorUpdateType {}
declare class JsGrid$EditActorUpdateType__Uncommitted mixins JsGrid$EditActorUpdateType {}


declare  class JsGrid$SortMode {
  constructor(...args: empty): mixed;
static +Ascending: Class<JsGrid$SortMode__Ascending> & JsGrid$SortMode__Ascending & 0;// 0
static +Descending: Class<JsGrid$SortMode__Descending> & JsGrid$SortMode__Descending & 1;// 1
static +None: Class<JsGrid$SortMode__None> & JsGrid$SortMode__None & 2;// 2

}

declare class JsGrid$SortMode__Ascending mixins JsGrid$SortMode {}
declare class JsGrid$SortMode__Descending mixins JsGrid$SortMode {}
declare class JsGrid$SortMode__None mixins JsGrid$SortMode {}



      declare var npm$namespace$RowHeaderStyleId: {
        
        Transfer: typeof RowHeaderStyleId$Transfer,
Conflict: typeof RowHeaderStyleId$Conflict,
      }
declare var RowHeaderStyleId$Transfer: string;

declare var RowHeaderStyleId$Conflict: string;


      declare var npm$namespace$RowHeaderAutoStyleId: {
        
        Dirty: typeof RowHeaderAutoStyleId$Dirty,
Error: typeof RowHeaderAutoStyleId$Error,
NewRow: typeof RowHeaderAutoStyleId$NewRow,
      }
declare var RowHeaderAutoStyleId$Dirty: string;

declare var RowHeaderAutoStyleId$Error: string;

declare var RowHeaderAutoStyleId$NewRow: string;

declare  class JsGrid$RowHeaderStatePriorities {
  constructor(...args: empty): mixed;
static +Dirty: Class<JsGrid$RowHeaderStatePriorities__Dirty> & JsGrid$RowHeaderStatePriorities__Dirty & 0;// 0
static +Transfer: Class<JsGrid$RowHeaderStatePriorities__Transfer> & JsGrid$RowHeaderStatePriorities__Transfer & 1;// 1
static +CellError: Class<JsGrid$RowHeaderStatePriorities__CellError> & JsGrid$RowHeaderStatePriorities__CellError & 2;// 2
static +Conflict: Class<JsGrid$RowHeaderStatePriorities__Conflict> & JsGrid$RowHeaderStatePriorities__Conflict & 3;// 3
static +RowError: Class<JsGrid$RowHeaderStatePriorities__RowError> & JsGrid$RowHeaderStatePriorities__RowError & 4;// 4
static +NewRow: Class<JsGrid$RowHeaderStatePriorities__NewRow> & JsGrid$RowHeaderStatePriorities__NewRow & 5;// 5

}

declare class JsGrid$RowHeaderStatePriorities__Dirty mixins JsGrid$RowHeaderStatePriorities {}
declare class JsGrid$RowHeaderStatePriorities__Transfer mixins JsGrid$RowHeaderStatePriorities {}
declare class JsGrid$RowHeaderStatePriorities__CellError mixins JsGrid$RowHeaderStatePriorities {}
declare class JsGrid$RowHeaderStatePriorities__Conflict mixins JsGrid$RowHeaderStatePriorities {}
declare class JsGrid$RowHeaderStatePriorities__RowError mixins JsGrid$RowHeaderStatePriorities {}
declare class JsGrid$RowHeaderStatePriorities__NewRow mixins JsGrid$RowHeaderStatePriorities {}


declare  class JsGrid$UpdateSerializeMode {
  constructor(...args: empty): mixed;
static +Cancel: Class<JsGrid$UpdateSerializeMode__Cancel> & JsGrid$UpdateSerializeMode__Cancel & 0;// 0
static +Default: Class<JsGrid$UpdateSerializeMode__Default> & JsGrid$UpdateSerializeMode__Default & 1;// 1
static +PropDataOnly: Class<JsGrid$UpdateSerializeMode__PropDataOnly> & JsGrid$UpdateSerializeMode__PropDataOnly & 2;// 2
static +PropLocalizedOnly: Class<JsGrid$UpdateSerializeMode__PropLocalizedOnly> & JsGrid$UpdateSerializeMode__PropLocalizedOnly & 3;// 3
static +PropBoth: Class<JsGrid$UpdateSerializeMode__PropBoth> & JsGrid$UpdateSerializeMode__PropBoth & 4;// 4

}

declare class JsGrid$UpdateSerializeMode__Cancel mixins JsGrid$UpdateSerializeMode {}
declare class JsGrid$UpdateSerializeMode__Default mixins JsGrid$UpdateSerializeMode {}
declare class JsGrid$UpdateSerializeMode__PropDataOnly mixins JsGrid$UpdateSerializeMode {}
declare class JsGrid$UpdateSerializeMode__PropLocalizedOnly mixins JsGrid$UpdateSerializeMode {}
declare class JsGrid$UpdateSerializeMode__PropBoth mixins JsGrid$UpdateSerializeMode {}


declare  class JsGrid$UpdateTrackingMode {
  constructor(...args: empty): mixed;
static +PropData: Class<JsGrid$UpdateTrackingMode__PropData> & JsGrid$UpdateTrackingMode__PropData & 0;// 0
static +PropLocalized: Class<JsGrid$UpdateTrackingMode__PropLocalized> & JsGrid$UpdateTrackingMode__PropLocalized & 1;// 1
static +PropBoth: Class<JsGrid$UpdateTrackingMode__PropBoth> & JsGrid$UpdateTrackingMode__PropBoth & 2;// 2

}

declare class JsGrid$UpdateTrackingMode__PropData mixins JsGrid$UpdateTrackingMode {}
declare class JsGrid$UpdateTrackingMode__PropLocalized mixins JsGrid$UpdateTrackingMode {}
declare class JsGrid$UpdateTrackingMode__PropBoth mixins JsGrid$UpdateTrackingMode {}



      declare var npm$namespace$UserAction: {
        
        UserEdit: typeof UserAction$UserEdit,
DeleteRecord: typeof UserAction$DeleteRecord,
InsertRecord: typeof UserAction$InsertRecord,
Indent: typeof UserAction$Indent,
Outdent: typeof UserAction$Outdent,
Fill: typeof UserAction$Fill,
Paste: typeof UserAction$Paste,
CutPaste: typeof UserAction$CutPaste,
      }
declare var UserAction$UserEdit: string;

declare var UserAction$DeleteRecord: string;

declare var UserAction$InsertRecord: string;

declare var UserAction$Indent: string;

declare var UserAction$Outdent: string;

declare var UserAction$Fill: string;

declare var UserAction$Paste: string;

declare var UserAction$CutPaste: string;

declare  class JsGrid$ReadOnlyActiveState {
  constructor(...args: empty): mixed;
static +ReadOnlyActive: Class<JsGrid$ReadOnlyActiveState__ReadOnlyActive> & JsGrid$ReadOnlyActiveState__ReadOnlyActive & 0;// 0
static +ReadOnlyDisabled: Class<JsGrid$ReadOnlyActiveState__ReadOnlyDisabled> & JsGrid$ReadOnlyActiveState__ReadOnlyDisabled & 1;// 1

}

declare class JsGrid$ReadOnlyActiveState__ReadOnlyActive mixins JsGrid$ReadOnlyActiveState {}
declare class JsGrid$ReadOnlyActiveState__ReadOnlyDisabled mixins JsGrid$ReadOnlyActiveState {}


declare interface JsGrid$IValue {
data?: any,
localized?: string
} 

declare  class JsGrid$SelectionTypeFlags {
  constructor(...args: empty): mixed;
static +MultipleCellRanges: Class<JsGrid$SelectionTypeFlags__MultipleCellRanges> & JsGrid$SelectionTypeFlags__MultipleCellRanges & 0;// 0
static +MultipleRowRanges: Class<JsGrid$SelectionTypeFlags__MultipleRowRanges> & JsGrid$SelectionTypeFlags__MultipleRowRanges & 1;// 1
static +MultipleColRanges: Class<JsGrid$SelectionTypeFlags__MultipleColRanges> & JsGrid$SelectionTypeFlags__MultipleColRanges & 2;// 2

}

declare class JsGrid$SelectionTypeFlags__MultipleCellRanges mixins JsGrid$SelectionTypeFlags {}
declare class JsGrid$SelectionTypeFlags__MultipleRowRanges mixins JsGrid$SelectionTypeFlags {}
declare class JsGrid$SelectionTypeFlags__MultipleColRanges mixins JsGrid$SelectionTypeFlags {}


declare class JsGrid$JsGridControl  {
constructor(parentNode: HTMLElement, bShowLoadingBanner: boolean): this;

/**
 * Returns true if Init method has been executed successfully
 */
IsInitialized(): boolean;

/**
 * Replaces the control TableCache object with the provided one
 */
ResetData(cache: SP$SP$JsGrid.JsGrid$TableCache): void;

/**
 * Initialize the control
 */
Init(parameters: SP$SP$JsGrid.JsGrid$JsGridControl.JsGridControl$Parameters): void;
Cleanup(): void;

/**
 * Removes all event handlers and markup associated with the control
 */
Dispose(): void;
NotifyDataAvailable(): void;
NotifySave(): void;
NotifyHide(): void;
NotifyResize(): void;
ClearTableView(): void;
HideInitialLoadingBanner(): void;
ShowInitialGridErrorMsg(errorMsg: string): void;
ShowGridErrorMsg(errorMsg: string): void;
LaunchPrintView(
additionalScriptFiles: any,
beforeInitFnName: any,
beforeInitFnArgsObj: any,
title: string,
bEnableGantt: boolean,
optGanttDelegateNames?: any,
optInitTableViewParamsFnName?: any,
optInitTableViewParamsFnArgsObj?: any,
optInitGanttStylesFnName?: any,
optInitGanttStylesFnArgsObj?: any): void;
GetAllDataJson(fnOnFinished: any, optFnGetCellStyleID?: any): void;
SetTableView(tableViewParams: any): void;
SetRowView(rowViewParam: any): void;

/**
 * Enable grid after Disable.
 */
Enable(): void;

/**
 * Covers the grid with the semi-transparent panel, preventing any operations with it.
 * Additionally, displays loading animated gif and optMsg as the message next to it.
 * If optMsg is not specified, displays "Loading..." text.
 */
Disable(optMsg?: string): void;

/**
 * Enables grid editing
 */
EnableEditing(): void;

/**
 * Disables grid editing: all the records become readonly
 */
DisableEditing(): void;

/**
 * Switches the currently selected cell into edit mode: displays edit control and sets focus into it.
 * Returns true if success.
 */
TryBeginEdit(): boolean;
FinalizeEditing(fnContinue: () => void, fnError: () => void): void;

/**
 * Get diff tracker object that tracks changes to the grid data.
 */
GetDiffTracker(): SP$SP$JsGrid.Internal.Internal$DiffTracker;

/**
 * Moves focus to the JsGrid control
 */
Focus(): void;

/**
 * Try saving the new record row (aka entry row) if it was edited.
 */
TryCommitFirstEntryRecords(fnCommitComplete: () => void): void;

/**
 * Removes all new record rows (aka entry rows), including unsaved and even empty ones.
 * The latter seems to be a bug, as I haven't found any easy way to restore the empty entry row.
 */
ClearUncommitedEntryRecords(): void;

/**
 * Returns true if there are any unsaved new record rows (aka entry rows).
 */
AnyUncommitedEntryRecords(): boolean;
AnyUncomittedProvisionalRecords(): boolean;

/**
 * Gets record based on the recordKey
 * @recordKey internal unique id of a row. You can get recordKey from view index via GetRecordKeyByViewIndex method.
 */
GetRecord(recordKey: number): JsGrid$IRecord;

/**
 * Get entry record with the specified key.
 * Entry record is a special type of record because it represents a new record that doesn't exist yet.
 */
GetEntryRecord(key: any): any;

/**
 * Determine if the specified record key identifies valid entry row.
 */
IsEntryRecord(recordKey: number): boolean;

/**
 * Determine whether the specified cell is editable.
 */
IsCellEditable(record: JsGrid$IRecord, fieldKey: string, optPaneId?: any): boolean;

/**
 * Adds one of builtin row state indicator icons into the row header.
 * Please pass one of the values of SP.JsGrid.RowHeaderStyleId
 * Row header is the leftmost gray column of the table.
 */
AddBuiltInRowHeaderState(recordKey: number, rowHeaderStateId: string): void;

/**
 * Adds the specified state into the row header.
 * There can be several row header states for one row. Only one is shown (according to the Priority).
 * Row header is the leftmost gray column of the table.
 */
AddRowHeaderState(recordKey: number, rowHeaderState: SP$SP$JsGrid.JsGrid$RowHeaderState): void;

/**
 * Removes header state with specified id from the row.
 */
RemoveRowHeaderState(recordKey: number, rowHeaderStateId: string): void;
GetCheckSelectionManager(): any;
UpdateProperties(propertyUpdates: any, changeName: any, optChangeKey?: any): any;
GetLastRecordKey(): string;
InsertProvisionalRecordBefore(beforeRecordKey: number, newRecord: any, initialValues: any): any;
InsertProvisionalRecordAfter(afterRecordKey: number, newRecord: any, initialValues: any): any;
IsProvisionalRecordKey(recordKey: number): boolean;
InsertRecordBefore(beforeRecordKey: number, newRecord: any, optChangeKey?: any): any;
InsertRecordAfter(afterRecordKey: number, newRecord: any, optChangeKey?: any): any;
InsertHiddenRecord(recordKey: number, changeKey: any, optAfterRecordKey?: any): any;
DeleteRecords(recordKeys: any, optChangeKey?: any): any;
IndentRecords(recordKeys: any, optChangeKey?: any): any;
OutdentRecords(recordKeys: any, optChangeKey?: any): any;
ReorderRecords(
beginRecordKey: number,
endRecordKey: number,
afterRecordKey: number,
bSelectAfterwards: boolean): any;
GetContiguousRowSelectionWithoutEntryRecords(): {
begin: any,
end: any,
keys: any
};
CanMoveRecordsUpByOne(recordKeys: any): boolean;
CanMoveRecordsDownByOne(recordKeys: any): boolean;
MoveRecordsUpByOne(recordKeys: any): any;
MoveRecordsDownByOne(recordKeys: any): any;
GetReorderRange(recordKeys: any): any;
GetNodeExpandCollapseState(recordKey: number): any;
ToggleExpandCollapse(recordKey: number): void;

/**
 * Attach event handler to a particular event type
 */
AttachEvent(
eventType: SP$JsGrid.Srch$EventType,
fnOnEvent: (args: JsGrid$IEventArgs) => void): void;

/**
 * Detach a previously set event handler
 */
DetachEvent(eventType: SP$JsGrid.Srch$EventType, fnOnEvent: any): void;

/**
 * Set a delegate. Delegates are way to replace default functionality with custom one.
 */
SetDelegate(delegateKey: SP$JsGrid.JsGrid$DelegateType, fn: any): void;

/**
 * Get current delegate.
 */
GetDelegate(delegateKey: SP$JsGrid.JsGrid$DelegateType): any;

/**
 * Re-render the specified row in the view.
 */
RefreshRow(recordKey: number): void;

/**
 * Re-render all rows in the view.
 * It can be used e.g. if you have some custom display controls and they are rendered differently depending on some external settings.
 * In this case, if you update the external settings, obviously you have to then update the view for these settings to take effect.
 */
RefreshAllRows(): void;

/**
 * Clears undo queue, and also differencies tracker state and versions manager state.
 */
ClearChanges(): void;
GetGanttZoomLevel(): any;
SetGanttZoomLevel(level: any): void;
ScrollGanttToDate(date: any): void;

/**
 * Get top record view index.
 * You can then use GetRecordKeyByViewIndex to convert this value into the recordKey.
 */
GetTopRecordIndex(): number;

/**
 * Get number of rows displayed in the current view.
 */
GetViewRecordCount(): number;

/**
 * Get record key for a row that is specified by the viewIdx.
 * viewIdx - index of the row in the view, use GetTopRecordIndex to get the first one.
 * Returns recordKey, which is a unique numeric identifier of a row within a dataset.
 * Main difference between viewIdx and recordKey is that viewIdx is only unique within a view,
 * e.g. if you do paging, it can be same for different records.
 */
GetRecordKeyByViewIndex(viewIdx: number): number;

/**
 * Opposite to GetRecordKeyByViewIndex, resolves the view index of the record based on record key.
 * recordKey - unique numeric identifier of a row in the current dataset.
 * Returns viewIdx - index of the row in the current view
 */
GetViewIndexOfRecord(recordKey: number): number;

/**
 * Get top row index. Usually returns 0.
 * You can then use GetRecordKeyByViewIndex to convert this value into the recordKey.
 */
GetTopRowIndex(): number;
GetOutlineLevel(record: any): any;
GetSplitterPosition(): any;
SetSplitterPosition(pos: any): void;
GetLeftColumnIndex(optPaneId?: any): any;
EnsurePaneWidth(): void;

/**
 * Show a previously hidden column at a specified position.
 * If atIdx is not defined, column will be shown at it's previous position.
 */
ShowColumn(columnKey: string, atIdx?: number): void;

/**
 * Hide the specified column from grid
 */
HideColumn(columnKey: string): void;

/**
 * Update column descriptions
 */
UpdateColumns(columnInfoCollection: JsGrid$ColumnInfoCollection): void;
GetColumns(optPaneId?: string): JsGrid$ColumnInfo[];

/**
 * Get ColumnInfo object by fieldKey
 * @fieldKey when working with SharePoint data sources, fieldKey corresponds to field internal name
 */
GetColumnByFieldKey(fieldKey: string, optPaneId?: any): JsGrid$ColumnInfo;

/**
 * Adds a column, based on the specified grid field
 */
AddColumn(columnInfo: JsGrid$ColumnInfo, gridField: JsGrid$GridField): void;

/**
 * Switches column header in rename mode, showing textbox and thus giving the user possibility to rename this column.
 */
RenameColumn(columnKey: string): void;

/**
 * Shows a dialog where user can reorder columns and change their widths.
 */
ShowColumnConfigurationDialog(): void;

/**
 * Returns true, if there are any errors in the JsGrid
 */
AnyErrors(): boolean;

/**
 * Returns true, if there are any errors in a specified row
 */
AnyErrorsInRecord(recordKey: number): boolean;

/**
 * Set error for the specified by recordKey and fieldKey cell.
 * Returns id of the error, so that later you can clear the error using this id.
 */
SetCellError(recordKey: number, fieldKey: string, errorMessage: string): number;

/**
 * Set error for the specified by recordKey row.
 * In the leftmost column of this row, exclamation mark error indicator will appear.
 * Clicking on this indicator will cause the specified error message appear in form of a reddish tooltip.
 * Returns id of the error, so that later you can clear the error using this id.
 */
SetRowError(recordKey: number, errorMessage: string): number;

/**
 * Clear specified by id error that was previously set on the specified by recordKey and fieldKey cell.
 */
ClearCellError(recordKey: number, fieldKey: string, id: number): void;

/**
 * Clear all errors in the specified cell.
 */
ClearAllErrorsOnCell(recordKey: number, fieldKey: string): void;

/**
 * Clear specified by id error that was previously set on the specified by recordKey row.
 */
ClearRowError(recordKey: number, id: number): void;

/**
 * Clear all errors in the specified row.
 */
ClearAllErrorsOnRow(recordKey: number): void;

/**
 * Get error message for the specified cell.
 * If many errors are set on the cell, only first is returned.
 * If there are no errors in the cell, returns null.
 */
GetCellErrorMessage(recordKey: number, fieldKey: string): string;

/**
 * Get error message for the specified row.
 * If many errors are set on the row, only first is returned.
 * If there are no errors in the row, returns null.
 */
GetRowErrorMessage(recordKey: number): string;

/**
 * This method is used mostly when you have a rather tall JSGrid and you want to ensure that user sees
 * that some error has occured.
 * You can specify the minId or/and filter function.
 * If minId is specified, method searches for an error with first id which is greater than minId.
 * Scrolls to the Returns the id of the found record.
 * If there aren't any errors, that satisfy the conditions, method does nothing and returns null.
 */
ScrollToAndExpandNextError(
minId?: number,
fnFilter?: (recordKey: number, fieldKey: string, id: number) => boolean): any;

/**
 * Same as ScrollToAndExpandNextError, but searches within the specified record.
 * recordKey should be not null, otherwise you'll get an exception.
 * bDontExpand controls whether the error tooltip will be shown (if bDontExpand=true, tooltip will not be shown).
 */
ScrollToAndExpandNextErrorOnRecord(
minId?: number,
recordKey?: number,
fnFilter?: (recordKey: number, fieldKey: string, id: number) => boolean,
bDontExpand?: boolean): any;
GetFocusedItem(): any;
SendKeyDownEvent(eventInfo: Sys.SP$UI.DomEvent): any;

/**
 * Moves cursor to entry record (the row that is used to add new records)
 */
JumpToEntryRecord(): void;
SelectRowRange(rowIdx1: number, rowIdx2: number, bAppend: boolean, optPaneId?: string): void;
SelectColumnRange(colIdx1: number, colIdx2: number, bAppend: boolean, optPaneId?: string): void;
SelectCellRange(
rowIdx1: number,
rowIdx2: number,
colIdx1: number,
colIdx2: number,
bAppend: boolean,
optPaneId?: string): void;
SelectRowRangeByKey(rowKey1: any, rowKey2: any, bAppend: boolean, optPaneId?: string): void;
SelectColumnRangeByKey(colKey1: any, colKey2: any, bAppend: boolean, optPaneId?: string): void;
SelectCellRangeByKey(
recordKey1: string,
recordKey2: string,
colKey1: any,
colKey2: any,
bAppend: boolean,
optPaneId?: string): void;
ChangeKeys(oldKey: any, newKey: any): void;
GetSelectedRowRanges(optPaneId?: any): any;
GetSelectedColumnRanges(optPaneId?: any): any;
GetSelectedRanges(optPaneId?: any): any;
MarkPropUpdateInvalid(recordKey: number, fieldKey: any, changeKey: any, optErrorMsg?: any): any;
GetCurrentChangeKey(): any;
CreateAndSynchronizeToNewChangeKey(): any;
CreateDataUpdateCmd(bUseCustomInitialUpdate: boolean): any;
IsChangeKeyApplied(changeKey: any): any;
GetChangeKeyForVersion(version: any): any;
TryReadPropForChangeKey(recordKey: number, fieldKey: any, changeKey: any): any;
GetUnfilteredHierarchyMap(): any;
GetHierarchyState(bDecompressGuidKeys: boolean): any;
IsGroupingRecordKey(recordKey: number): boolean;
IsGroupingColumnKey(recordKey: number): boolean;
GetSelectedRecordKeys(bDuplicatesAllowed: boolean): any;

/**
 * Cut data from currently selected cells into the clipboard.
 * Will not work if current selection contains entry row or readonly cells.
 */
CutToClipboard(): void;

/**
 * Copy data from currently selected cells into the clipboard.
 */
CopyToClipboard(): void;

/**
 * Paste data from clipboard into currently selected cells.
 */
PasteFromClipboard(): void;
TryRestoreFocusAfterInsertOrDeleteColumns(origFocus: any): void;

/**
 * Get undo manager for performing undo/redo operations programmatically.
 */
GetUndoManager(): SP$SP$JsGrid.JsGrid$CommandManager;

/**
 * Gets number of records visible in the current view, including the entry row.
 */
GetVisibleRecordCount(): number;

/**
 * Returns index of the system RecordIndicatorCheckBoxColumn. If not present in the view, returns null.
 */
GetRecordIndicatorCheckBoxColumnIndex(): number;

/**
 * Determines if the specified record is visible in the current view.
 */
IsRecordVisibleInView(recordKey: number): boolean;
GetHierarchyQueryObject(): any;
GetSpCsrRenderCtx(): any
}

declare interface JsGrid$IChangeKey {
Reserve(): void,
Release(): void,
GetVersionNumber(): number,
CompareTo(changeKey: JsGrid$IChangeKey): number
} 

declare  class JsGrid$EventType {
  constructor(...args: empty): mixed;
static +OnCellFocusChanged: Class<JsGrid$EventType__OnCellFocusChanged> & JsGrid$EventType__OnCellFocusChanged & 0;// 0
static +OnRowFocusChanged: Class<JsGrid$EventType__OnRowFocusChanged> & JsGrid$EventType__OnRowFocusChanged & 1;// 1
static +OnCellEditBegin: Class<JsGrid$EventType__OnCellEditBegin> & JsGrid$EventType__OnCellEditBegin & 2;// 2
static +OnCellEditCompleted: Class<JsGrid$EventType__OnCellEditCompleted> & JsGrid$EventType__OnCellEditCompleted & 3;// 3
static +OnRightClick: Class<JsGrid$EventType__OnRightClick> & JsGrid$EventType__OnRightClick & 4;// 4
static +OnPropertyChanged: Class<JsGrid$EventType__OnPropertyChanged> & JsGrid$EventType__OnPropertyChanged & 5;// 5
static +OnRecordInserted: Class<JsGrid$EventType__OnRecordInserted> & JsGrid$EventType__OnRecordInserted & 6;// 6
static +OnRecordDeleted: Class<JsGrid$EventType__OnRecordDeleted> & JsGrid$EventType__OnRecordDeleted & 7;// 7
static +OnRecordChecked: Class<JsGrid$EventType__OnRecordChecked> & JsGrid$EventType__OnRecordChecked & 8;// 8
static +OnCellErrorStateChanged: Class<JsGrid$EventType__OnCellErrorStateChanged> & JsGrid$EventType__OnCellErrorStateChanged & 9;// 9
static +OnEntryRecordAdded: Class<JsGrid$EventType__OnEntryRecordAdded> & JsGrid$EventType__OnEntryRecordAdded & 10;// 10
static +OnEntryRecordCommitted: Class<JsGrid$EventType__OnEntryRecordCommitted> & JsGrid$EventType__OnEntryRecordCommitted & 11;// 11
static +OnEntryRecordPropertyChanged: Class<JsGrid$EventType__OnEntryRecordPropertyChanged> & JsGrid$EventType__OnEntryRecordPropertyChanged & 12;// 12
static +OnRowErrorStateChanged: Class<JsGrid$EventType__OnRowErrorStateChanged> & JsGrid$EventType__OnRowErrorStateChanged & 13;// 13
static +OnDoubleClick: Class<JsGrid$EventType__OnDoubleClick> & JsGrid$EventType__OnDoubleClick & 14;// 14
static +OnBeforeGridDispose: Class<JsGrid$EventType__OnBeforeGridDispose> & JsGrid$EventType__OnBeforeGridDispose & 15;// 15
static +OnSingleCellClick: Class<JsGrid$EventType__OnSingleCellClick> & JsGrid$EventType__OnSingleCellClick & 16;// 16
static +OnInitialChangesForChangeKeyComplete: Class<JsGrid$EventType__OnInitialChangesForChangeKeyComplete> & JsGrid$EventType__OnInitialChangesForChangeKeyComplete & 17;// 17
static +OnVacateChange: Class<JsGrid$EventType__OnVacateChange> & JsGrid$EventType__OnVacateChange & 18;// 18
static +OnGridErrorStateChanged: Class<JsGrid$EventType__OnGridErrorStateChanged> & JsGrid$EventType__OnGridErrorStateChanged & 19;// 19
static +OnSingleCellKeyDown: Class<JsGrid$EventType__OnSingleCellKeyDown> & JsGrid$EventType__OnSingleCellKeyDown & 20;// 20
static +OnRecordsReordered: Class<JsGrid$EventType__OnRecordsReordered> & JsGrid$EventType__OnRecordsReordered & 21;// 21
static +OnBeforePropertyChanged: Class<JsGrid$EventType__OnBeforePropertyChanged> & JsGrid$EventType__OnBeforePropertyChanged & 22;// 22
static +OnRowEscape: Class<JsGrid$EventType__OnRowEscape> & JsGrid$EventType__OnRowEscape & 23;// 23
static +OnBeginRenameColumn: Class<JsGrid$EventType__OnBeginRenameColumn> & JsGrid$EventType__OnBeginRenameColumn & 24;// 24
static +OnEndRenameColumn: Class<JsGrid$EventType__OnEndRenameColumn> & JsGrid$EventType__OnEndRenameColumn & 25;// 25
static +OnPasteBegin: Class<JsGrid$EventType__OnPasteBegin> & JsGrid$EventType__OnPasteBegin & 26;// 26
static +OnPasteEnd: Class<JsGrid$EventType__OnPasteEnd> & JsGrid$EventType__OnPasteEnd & 27;// 27
static +OnBeginRedoDataUpdateChange: Class<JsGrid$EventType__OnBeginRedoDataUpdateChange> & JsGrid$EventType__OnBeginRedoDataUpdateChange & 28;// 28
static +OnBeginUndoDataUpdateChange: Class<JsGrid$EventType__OnBeginUndoDataUpdateChange> & JsGrid$EventType__OnBeginUndoDataUpdateChange & 29;// 29

}

declare class JsGrid$EventType__OnCellFocusChanged mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnRowFocusChanged mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnCellEditBegin mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnCellEditCompleted mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnRightClick mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnPropertyChanged mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnRecordInserted mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnRecordDeleted mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnRecordChecked mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnCellErrorStateChanged mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnEntryRecordAdded mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnEntryRecordCommitted mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnEntryRecordPropertyChanged mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnRowErrorStateChanged mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnDoubleClick mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnBeforeGridDispose mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnSingleCellClick mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnInitialChangesForChangeKeyComplete mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnVacateChange mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnGridErrorStateChanged mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnSingleCellKeyDown mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnRecordsReordered mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnBeforePropertyChanged mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnRowEscape mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnBeginRenameColumn mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnEndRenameColumn mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnPasteBegin mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnPasteEnd mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnBeginRedoDataUpdateChange mixins JsGrid$EventType {}
declare class JsGrid$EventType__OnBeginUndoDataUpdateChange mixins JsGrid$EventType {}


declare  class JsGrid$DelegateType {
  constructor(...args: empty): mixed;
static +ExpandColumnMenu: Class<JsGrid$DelegateType__ExpandColumnMenu> & JsGrid$DelegateType__ExpandColumnMenu & 0;// 0
static +AddColumnMenuItems: Class<JsGrid$DelegateType__AddColumnMenuItems> & JsGrid$DelegateType__AddColumnMenuItems & 1;// 1
static +Sort: Class<JsGrid$DelegateType__Sort> & JsGrid$DelegateType__Sort & 2;// 2
static +Filter: Class<JsGrid$DelegateType__Filter> & JsGrid$DelegateType__Filter & 3;// 3
static +InsertRecord: Class<JsGrid$DelegateType__InsertRecord> & JsGrid$DelegateType__InsertRecord & 4;// 4
static +DeleteRecords: Class<JsGrid$DelegateType__DeleteRecords> & JsGrid$DelegateType__DeleteRecords & 5;// 5
static +IndentRecords: Class<JsGrid$DelegateType__IndentRecords> & JsGrid$DelegateType__IndentRecords & 6;// 6
static +OutdentRecords: Class<JsGrid$DelegateType__OutdentRecords> & JsGrid$DelegateType__OutdentRecords & 7;// 7
static +IsRecordInsertInView: Class<JsGrid$DelegateType__IsRecordInsertInView> & JsGrid$DelegateType__IsRecordInsertInView & 8;// 8
static +ExpandDelayLoadedHierarchyNode: Class<JsGrid$DelegateType__ExpandDelayLoadedHierarchyNode> & JsGrid$DelegateType__ExpandDelayLoadedHierarchyNode & 9;// 9
static +AutoFilter: Class<JsGrid$DelegateType__AutoFilter> & JsGrid$DelegateType__AutoFilter & 10;// 10
static +ExpandConflictResolution: Class<JsGrid$DelegateType__ExpandConflictResolution> & JsGrid$DelegateType__ExpandConflictResolution & 11;// 11
static +GetAutoFilterEntries: Class<JsGrid$DelegateType__GetAutoFilterEntries> & JsGrid$DelegateType__GetAutoFilterEntries & 12;// 12
static +LaunchFilterDialog: Class<JsGrid$DelegateType__LaunchFilterDialog> & JsGrid$DelegateType__LaunchFilterDialog & 13;// 13
static +ShowColumnConfigurationDialog: Class<JsGrid$DelegateType__ShowColumnConfigurationDialog> & JsGrid$DelegateType__ShowColumnConfigurationDialog & 14;// 14
static +GetRecordEditMode: Class<JsGrid$DelegateType__GetRecordEditMode> & JsGrid$DelegateType__GetRecordEditMode & 15;// 15
static +GetGridRowStyleId: Class<JsGrid$DelegateType__GetGridRowStyleId> & JsGrid$DelegateType__GetGridRowStyleId & 16;// 16
static +CreateEntryRecord: Class<JsGrid$DelegateType__CreateEntryRecord> & JsGrid$DelegateType__CreateEntryRecord & 17;// 17
static +TryInsertEntryRecord: Class<JsGrid$DelegateType__TryInsertEntryRecord> & JsGrid$DelegateType__TryInsertEntryRecord & 18;// 18
static +WillAddColumnMenuItems: Class<JsGrid$DelegateType__WillAddColumnMenuItems> & JsGrid$DelegateType__WillAddColumnMenuItems & 19;// 19
static +NextPage: Class<JsGrid$DelegateType__NextPage> & JsGrid$DelegateType__NextPage & 20;// 20
static +AddNewColumn: Class<JsGrid$DelegateType__AddNewColumn> & JsGrid$DelegateType__AddNewColumn & 21;// 21
static +RemoveColumnFromView: Class<JsGrid$DelegateType__RemoveColumnFromView> & JsGrid$DelegateType__RemoveColumnFromView & 22;// 22
static +ReorderColumnPositionInView: Class<JsGrid$DelegateType__ReorderColumnPositionInView> & JsGrid$DelegateType__ReorderColumnPositionInView & 23;// 23
static +TryCreateProvisionalRecord: Class<JsGrid$DelegateType__TryCreateProvisionalRecord> & JsGrid$DelegateType__TryCreateProvisionalRecord & 24;// 24
static +CanReorderRecords: Class<JsGrid$DelegateType__CanReorderRecords> & JsGrid$DelegateType__CanReorderRecords & 25;// 25
static +AddNewColumnMenuItems: Class<JsGrid$DelegateType__AddNewColumnMenuItems> & JsGrid$DelegateType__AddNewColumnMenuItems & 26;// 26
static +TryBeginPaste: Class<JsGrid$DelegateType__TryBeginPaste> & JsGrid$DelegateType__TryBeginPaste & 27;// 27
static +AllowSelectionChange: Class<JsGrid$DelegateType__AllowSelectionChange> & JsGrid$DelegateType__AllowSelectionChange & 28;// 28
static +GetFieldEditMode: Class<JsGrid$DelegateType__GetFieldEditMode> & JsGrid$DelegateType__GetFieldEditMode & 29;// 29
static +GetFieldReadOnlyActiveState: Class<JsGrid$DelegateType__GetFieldReadOnlyActiveState> & JsGrid$DelegateType__GetFieldReadOnlyActiveState & 30;// 30
static +OnBeforeRecordReordered: Class<JsGrid$DelegateType__OnBeforeRecordReordered> & JsGrid$DelegateType__OnBeforeRecordReordered & 31;// 31

}

declare class JsGrid$DelegateType__ExpandColumnMenu mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__AddColumnMenuItems mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__Sort mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__Filter mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__InsertRecord mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__DeleteRecords mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__IndentRecords mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__OutdentRecords mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__IsRecordInsertInView mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__ExpandDelayLoadedHierarchyNode mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__AutoFilter mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__ExpandConflictResolution mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__GetAutoFilterEntries mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__LaunchFilterDialog mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__ShowColumnConfigurationDialog mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__GetRecordEditMode mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__GetGridRowStyleId mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__CreateEntryRecord mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__TryInsertEntryRecord mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__WillAddColumnMenuItems mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__NextPage mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__AddNewColumn mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__RemoveColumnFromView mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__ReorderColumnPositionInView mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__TryCreateProvisionalRecord mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__CanReorderRecords mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__AddNewColumnMenuItems mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__TryBeginPaste mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__AllowSelectionChange mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__GetFieldEditMode mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__GetFieldReadOnlyActiveState mixins JsGrid$DelegateType {}
declare class JsGrid$DelegateType__OnBeforeRecordReordered mixins JsGrid$DelegateType {}


declare  class JsGrid$ClickContext {
  constructor(...args: empty): mixed;
static +SelectAllSquare: Class<JsGrid$ClickContext__SelectAllSquare> & JsGrid$ClickContext__SelectAllSquare & 0;// 0
static +RowHeader: Class<JsGrid$ClickContext__RowHeader> & JsGrid$ClickContext__RowHeader & 1;// 1
static +ColumnHeader: Class<JsGrid$ClickContext__ColumnHeader> & JsGrid$ClickContext__ColumnHeader & 2;// 2
static +Cell: Class<JsGrid$ClickContext__Cell> & JsGrid$ClickContext__Cell & 3;// 3
static +Gantt: Class<JsGrid$ClickContext__Gantt> & JsGrid$ClickContext__Gantt & 4;// 4
static +Other: Class<JsGrid$ClickContext__Other> & JsGrid$ClickContext__Other & 5;// 5

}

declare class JsGrid$ClickContext__SelectAllSquare mixins JsGrid$ClickContext {}
declare class JsGrid$ClickContext__RowHeader mixins JsGrid$ClickContext {}
declare class JsGrid$ClickContext__ColumnHeader mixins JsGrid$ClickContext {}
declare class JsGrid$ClickContext__Cell mixins JsGrid$ClickContext {}
declare class JsGrid$ClickContext__Gantt mixins JsGrid$ClickContext {}
declare class JsGrid$ClickContext__Other mixins JsGrid$ClickContext {}


declare class JsGrid$RowHeaderState  {
constructor(id: string, img: SP$SP$JsGrid.JsGrid$Image, priority: SP$SP$JsGrid.JsGrid$RowHeaderStatePriorities, tooltip: string, fnOnClick: (eventInfo: Sys.SP$UI.DomEvent, recordKey: number) => void): this;
GetId(): string;
GetImg(): SP$SP$JsGrid.JsGrid$Image;
GetPriority(): SP$SP$JsGrid.JsGrid$RowHeaderStatePriorities;
GetOnClick(): (eventInfo: Sys.SP$UI.DomEvent, recordKey: number) => void;
GetTooltip(): string;
toString(): string
}

declare class JsGrid$Image  {

/**
 * optOuterCssNames and optImgCssNames are strings that contain css class names separated by spaces.
 * optImgCssNames are applied to the img tag.
 * if bIsClustered, image is rendered inside div, and optOuterCssNames are applied to the div.
 */
constructor(imgSrc: string, bIsClustered: boolean, optOuterCssNames: string, optImgCssNames: string, bIsAnimated: boolean): this;
imgSrc: string;
bIsClustered: boolean;
optOuterCssNames: string;
imgCssNames: string;
bIsAnimated: boolean;

/**
 * Renders the image with specified alternative text and on-click handler.
 * If bHideTooltip == false, then alternative text is also shown as the tooltip (title attribute).
 */
Render(
altText: string,
clickFn: (eventInfo: Sys.SP$UI.DomEvent) => void,
bHideTooltip: boolean): HTMLElement
}

declare interface JsGrid$IEventArgs {} 

declare class EventArgs$OnEntryRecordAdded mixins JsGrid$IEventArgs {
constructor(recordKey: number): this;
recordKey: number
}

declare class EventArgs$CellFocusChanged mixins JsGrid$IEventArgs {
constructor(newRecordKey: number, newFieldKey: string, oldRecordKey: number, oldFieldKey: string): this;
newRecordKey: number;
newFieldKey: string;
oldRecordKey: number;
oldFieldKey: string
}

declare class EventArgs$RowFocusChanged mixins JsGrid$IEventArgs {
constructor(newRecordKey: number, oldRecordKey: number): this;
newRecordKey: number;
oldRecordKey: number
}

declare class EventArgs$CellEditBegin mixins JsGrid$IEventArgs {
constructor(recordKey: number, fieldKey: string): this;
recordKey: number;
fieldKey: string
}

declare class EventArgs$CellEditCompleted mixins JsGrid$IEventArgs {
constructor(recordKey: number, fieldKey: string, changeKey: SP$JsGrid.JsGrid$IChangeKey, bCancelled: boolean): this;
recordKey: number;
fieldKey: string;
changeKey: SP$JsGrid.JsGrid$IChangeKey;
bCancelled: boolean
}

declare class EventArgs$Click mixins JsGrid$IEventArgs {
constructor(eventInfo: Sys.SP$UI.DomEvent, context: SP$JsGrid.JsGrid$ClickContext, recordKey: number, fieldKey: string): this;
eventInfo: Sys.SP$UI.DomEvent;
context: SP$JsGrid.JsGrid$ClickContext;
recordKey: number;
fieldKey: string
}

declare class EventArgs$PropertyChanged mixins JsGrid$IEventArgs {
constructor(recordKey: number, fieldKey: string, oldProp: SP$SP$JsGrid.Internal.Internal$PropertyUpdate, newProp: SP$SP$JsGrid.Internal.Internal$PropertyUpdate, propType: SP$SP$JsGrid.JsGrid$IPropertyType, changeKey: SP$SP$JsGrid.JsGrid$IChangeKey, validationState: SP$SP$JsGrid.JsGrid$ValidationState): this;
recordKey: number;
fieldKey: string;
oldProp: SP$SP$JsGrid.Internal.Internal$PropertyUpdate;
newProp: SP$SP$JsGrid.Internal.Internal$PropertyUpdate;
propType: SP$SP$JsGrid.JsGrid$IPropertyType;
changeKey: SP$SP$JsGrid.JsGrid$IChangeKey;
validationState: SP$SP$JsGrid.JsGrid$ValidationState
}

declare class EventArgs$RecordInserted mixins JsGrid$IEventArgs {
constructor(recordKey: number, recordIdx: number, afterRecordKey: number, changeKey: SP$JsGrid.JsGrid$IChangeKey): this;
recordKey: number;
recordIdx: number;
afterRecordKey: number;
changeKey: SP$JsGrid.JsGrid$IChangeKey
}

declare class EventArgs$RecordDeleted mixins JsGrid$IEventArgs {
constructor(recordKey: number, recordIdx: number, changeKey: SP$JsGrid.JsGrid$IChangeKey): this;
recordKey: number;
recordIdx: number;
changeKey: SP$JsGrid.JsGrid$IChangeKey
}

declare class EventArgs$RecordChecked mixins JsGrid$IEventArgs {
constructor(recordKeySet: SP$SP$Utilities.Utilities$Set, bChecked: boolean): this;
recordKeySet: SP$SP$Utilities.Utilities$Set;
bChecked: boolean
}

declare class EventArgs$OnCellErrorStateChanged mixins JsGrid$IEventArgs {
constructor(recordKey: number, fieldKey: string, bAddingError: boolean, bCellCurrentlyHasError: boolean, bCellHadError: boolean, errorId: number): this;
recordKey: number;
fieldKey: string;
bAddingError: boolean;
bCellCurrentlyHasError: boolean;
bCellHadError: boolean;
errorId: number
}

declare class EventArgs$OnRowErrorStateChanged mixins JsGrid$IEventArgs {
constructor(recordKey: number, bAddingError: boolean, bErrorCurrentlyInRow: boolean, bRowHadError: boolean, errorId: number, message: string): this;
recordKey: number;
bAddingError: boolean;
bErrorCurrentlyInRow: boolean;
bRowHadError: boolean;
errorId: number;
message: string
}

declare class EventArgs$OnEntryRecordCommitted mixins JsGrid$IEventArgs {
constructor(origRecKey: string, recordKey: number, changeKey: SP$JsGrid.JsGrid$IChangeKey): this;
originalRecordKey: number;
recordKey: number;
changeKey: SP$JsGrid.JsGrid$IChangeKey
}

declare class EventArgs$SingleCellClick mixins JsGrid$IEventArgs {
constructor(eventInfo: Sys.SP$UI.DomEvent, recordKey: number, fieldKey: string): this;
eventInfo: Sys.SP$UI.DomEvent;
recordKey: number;
fieldKey: string
}

declare class EventArgs$PendingChangeKeyInitiallyComplete mixins JsGrid$IEventArgs {
constructor(changeKey: SP$JsGrid.JsGrid$IChangeKey): this;
changeKey: SP$JsGrid.JsGrid$IChangeKey
}

declare class EventArgs$VacateChange mixins JsGrid$IEventArgs {
constructor(changeKey: SP$JsGrid.JsGrid$IChangeKey): this;
changeKey: SP$JsGrid.JsGrid$IChangeKey
}

declare class EventArgs$GridErrorStateChanged mixins JsGrid$IEventArgs {
constructor(bAnyErrors: boolean): this;
bAnyErrors: boolean
}

declare class EventArgs$SingleCellKeyDown mixins JsGrid$IEventArgs {
constructor(eventInfo: Sys.SP$UI.DomEvent, recordKey: number, fieldKey: string): this;
eventInfo: Sys.SP$UI.DomEvent;
recordKey: number;
fieldKey: string
}

declare class EventArgs$OnRecordsReordered mixins JsGrid$IEventArgs {
constructor(recordKeys: string[], changeKey: SP$JsGrid.JsGrid$IChangeKey): this;
reorderedKeys: string[];
changeKey: SP$JsGrid.JsGrid$IChangeKey
}

declare class EventArgs$OnRowEscape mixins JsGrid$IEventArgs {
constructor(recordKey: number): this;
recordKey: number
}

declare class EventArgs$OnEndRenameColumn mixins JsGrid$IEventArgs {
constructor(columnKey: string, originalColumnTitle: string, newColumnTitle: string): this;
columnKey: string;
originalColumnTitle: string;
newColumnTitle: string
}

declare class EventArgs$OnBeginRedoDataUpdateChange mixins JsGrid$IEventArgs {
constructor(changeKey: SP$JsGrid.JsGrid$IChangeKey): this;
changeKey: SP$JsGrid.JsGrid$IChangeKey
}

declare class EventArgs$OnBeginUndoDataUpdateChange mixins JsGrid$IEventArgs {
constructor(changeKey: SP$JsGrid.JsGrid$IChangeKey): this;
changeKey: SP$JsGrid.JsGrid$IChangeKey
}

declare class JsGridControl$Parameters  {
tableCache: SP$SP$JsGrid.JsGrid$TableCache;
name: any;
bNotificationsEnabled: boolean;
styleManager: JsGrid$IStyleManager;
minHeaderHeight: number;
minRowHeight: number;
commandMgr: SP$SP$JsGrid.JsGrid$CommandManager;
enabledRowHeaderAutoStates: SP$SP$Utilities.Utilities$Set;
tableViewParams: JsGridControl$TableViewParameters;
bEnableDiffTracking: boolean;
isRTL: boolean
}

declare class JsGridControl$TableViewParameters  {
paneLayout: SP$SP$JsGrid.JsGrid$PaneLayout;
defaultEditMode: SP$SP$JsGrid.JsGrid$EditMode;
allowedSelectionTypes: SP$SP$JsGrid.JsGrid$SelectionTypeFlags;
bMovableColumns: boolean;
bResizableColumns: boolean;
bHidableColumns: boolean;
bSortableColumns: boolean;
bAutoFilterableColumns: boolean;
bRowHeadersEnabled: boolean;
bRecordIndicatorCheckboxesEnabled: boolean;
bFillControlEnabled: boolean;
bEditingEnabled: boolean;
bNewRowEnabled: boolean;
checkSelectionCheckboxHiddenRecordKeys: string[];
checkSelectionCheckboxDisabledRecordKeys: string[];
checkSelectionCheckedRecordKeys: string[];
keyFieldName: string;
gridFieldMap: {
[name: string]: JsGrid$GridField
};
columns: JsGrid$ColumnInfoCollection;
messageOverrides: any;
operationalConstantsFieldKeyMap: any;
ganttParams: JsGridControl$GanttParameters;
pivotedGridParams: JsGridControl$PivotedGridParameters;
rowViewParams: JsGridControl$RowViewParameters
}

declare class JsGridControl$PivotedGridParameters  {}

declare class JsGridControl$GanttParameters  {
columns: JsGrid$ColumnInfoCollection
}

declare class JsGridControl$RowViewParameters  {
hierarchyMode: SP$SP$JsGrid.JsGrid$HierarchyMode;
view: any;
topViewIdx: number;
groupingLevel: any;
groupingRecordKeyPrefix: any;
autoFilterState: any;
unfilteredHierarchyMgr: any;
hierarchyDelayLoadKeys: any;
hierarchyState: any;
sortState: any;
filterState: any;
autoFilterEntries: any;
filteredDescCounts: any
}

declare class JsGrid$CommandManager  {}

declare class JsGrid$TableCache  {}

declare interface JsGrid$IStyleManager {
gridPaneStyle: JsGrid$IStyleType.IStyleType$GridPane,
columnHeaderStyleCollection: {
normal: JsGrid$IStyleType.IStyleType$Header,
normalHover: JsGrid$IStyleType.IStyleType$Header,
partSelected: JsGrid$IStyleType.IStyleType$Header,
partSelectedHover: JsGrid$IStyleType.IStyleType$Header,
allSelected: JsGrid$IStyleType.IStyleType$Header,
allSelectedHover: JsGrid$IStyleType.IStyleType$Header
},
rowHeaderStyleCollection: {
normal: JsGrid$IStyleType.IStyleType$Header,
normalHover: JsGrid$IStyleType.IStyleType$Header,
partSelected: JsGrid$IStyleType.IStyleType$Header,
partSelectedHover: JsGrid$IStyleType.IStyleType$Header,
allSelected: JsGrid$IStyleType.IStyleType$Header,
allSelectedHover: JsGrid$IStyleType.IStyleType$Header
},
splitterStyleCollection: {
normal: JsGrid$IStyleType.IStyleType$Splitter,
normalHandle: JsGrid$IStyleType.IStyleType$SplitterHandle,
hover: JsGrid$IStyleType.IStyleType$Splitter,
hoverHandle: JsGrid$IStyleType.IStyleType$SplitterHandle,
dra: JsGrid$IStyleType.IStyleType$Splitter,
dragHandle: JsGrid$IStyleType.IStyleType$SplitterHandle
},
defaultCellStyle: JsGrid$IStyleType.IStyleType$Cell,
readOnlyCellStyle: JsGrid$IStyleType.IStyleType$Cell,
readOnlyFocusedCellStyle: JsGrid$IStyleType.IStyleType$Cell,
timescaleTierStyle: JsGrid$IStyleType.IStyleType$TimescaleTier,
groupingStyles: any[],
widgetDockStyle: JsGrid$IStyleType.IStyleType$Widget,
widgetDockHoverStyle: JsGrid$IStyleType.IStyleType$Widget,
widgetDockPressedStyle: JsGrid$IStyleType.IStyleType$Widget,
RegisterCellStyle(styleId: string, cellStyle: JsGrid$IStyleType.IStyleType$Cell): void,
GetCellStyle(styleId: string): JsGrid$IStyleType.IStyleType$Cell,
UpdateSplitterStyleFromCss(
styleObject: JsGrid$IStyleType.IStyleType$Splitter,
splitterStyleNameCollection: any): void,
UpdateHeaderStyleFromCss(
styleObject: JsGrid$IStyleType.IStyleType$Header,
headerStyleNameCol: any): void,
UpdateGridPaneStyleFromCss(
styleObject: JsGrid$IStyleType.IStyleType$GridPane,
gridStyleNameCollection: any): void,
UpdateDefaultCellStyleFromCss(styleObject: JsGrid$IStyleType.IStyleType$Cell, cssClass: string): void,
UpdateGroupStylesFromCss(styleObject: JsGrid$IStyleType.IStyleType$Cell, prefix: string): void
} 

declare interface JsGrid$IStyleType {} 

declare type IStyleType$Splitter = {
outerBorderColor: any,
leftInnerBorderColor: any,
innerBorderColor: any,
backgroundColor: any
} & JsGrid$IStyleType


declare type IStyleType$SplitterHandle = {
outerBorderColor: any,
leftInnerBorderColor: any,
innerBorderColor: any,
backgroundColor: any,
gripUpperColor: any,
gripLowerColor: any
} & JsGrid$IStyleType


declare interface IStyleType$GridPane {
verticalBorderColor: any,
verticalBorderStyle: any,
horizontalBorderColor: any,
horizontalBorderStyle: any,
backgroundColor: any,
columnDropIndicatorColor: any,
rowDropIndicatorColor: any,
linkColor: any,
visitedLinkColor: any,
copyRectForeBorderColor: any,
copyRectBackBorderColor: any,
focusRectBorderColor: any,
selectionRectBorderColor: any,
selectedCellBgColor: any,
readonlySelectionRectBorderColor: any,
changeHighlightCellBgColor: any,
fillRectBorderColor: any,
errorRectBorderColor: any
} 

declare interface IStyleType$Header {
font: any,
fontSize: any,
fontWeight: any,
textColor: any,
backgroundColor: any,
outerBorderColor: any,
innerBorderColor: any,
eyeBrowBorderColor: any,
eyeBrowColor: any,
menuColor: any,
menuBorderColor: any,
resizeColor: any,
resizeBorderColor: any,
menuHoverColor: any,
menuHoverBorderColor: any,
resizeHoverColor: any,
resizeHoverBorderColor: any,
eyeBrowHoverColor: any,
eyeBrowHoverBorderColor: any,
elementClickColor: any,
elementClickBorderColor: any
} 

declare type IStyleType$Cell = {

/**
 * -> CSS font-family
 */
font: any,

/**
 * -> CSS font-size
 */
fontSize: any,

/**
 * -> CSS font-weight
 */
fontWeight: any,

/**
 * -> CSS font-style
 */
fontStyle: any,

/**
 * -> CSS color
 */
textColor: any,

/**
 * -> CSS background-color
 */
backgroundColor: any,

/**
 * -> CSS text-align
 */
textAlign: any
} & JsGrid$IStyleType


declare interface IStyleType$Widget {
backgroundColor: any,
borderColor: any
} 

declare interface IStyleType$RowHeaderStyle {
backgroundColor: any,
outerBorderColor: any,
innerBorderColor: any
} 

declare interface IStyleType$TimescaleTier {
font: any,
fontSize: any,
fontWeight: any,
textColor: any,
backgroundColor: any,
verticalBorderColor: any,
verticalBorderStyle: any,
horizontalBorderColor: any,
horizontalBorderStyle: any,
outerBorderColor: any,
todayLineColor: any
} 

declare class JsGrid$Style  {
static WidgetControl$Type: {
IStyleType$Splitter: JsGrid$IStyleType.IStyleType$Splitter,
IStyleType$SplitterHandle: JsGrid$IStyleType.IStyleType$SplitterHandle,
IStyleType$GridPane: JsGrid$IStyleType.IStyleType$GridPane,
IStyleType$Header: JsGrid$IStyleType.IStyleType$Header,
IStyleType$RowHeaderStyle: JsGrid$IStyleType.IStyleType$RowHeaderStyle,
IStyleType$TimescaleTier: JsGrid$IStyleType.IStyleType$TimescaleTier,
IStyleType$Cell: JsGrid$IStyleType.IStyleType$Cell,
IStyleType$Widget: JsGrid$IStyleType.IStyleType$Widget
};
static SetRTL: (rtlObject: any) => void;
static MakeJsGridStyleManager: () => JsGrid$IStyleManager;
static CreateStyleFromCss: (
styleType: JsGrid$IStyleType,
cssStyleName: string,
optExistingStyle?: any,
optClassId?: any) => any;
static CreateStyle: (styleType: JsGrid$IStyleType, styleProps: any) => any;
static MergeCellStyles: (majorStyle: any, minorStyle: any) => any;
static ApplyCellStyle: (td: HTMLTableCellElement, style: any) => void;
static ApplyRowHeaderStyle: (
domObj: HTMLElement,
style: any,
fnGetHeaderSibling: (elem: HTMLElement, previousElem: boolean) => void) => void;
static ApplyCornerHeaderBorderStyle: (domObj: HTMLElement, colStyle: any, rowStyle: any) => void;
static ApplyHeaderInnerBorderStyle: (domObj: HTMLElement, bIsRowHeader: any, headerObject: any) => void;
static ApplyColumnContextMenuStyle: (domObj: HTMLElement, style: any) => void;
static ApplySplitterStyle: (domObj: HTMLElement, style: any) => void;
static MakeBorderString: (width: number, style: string, color: string) => string;
static GetCellStyleDefaultBackgroundColor: () => string
}

declare class JsGrid$ColumnInfoCollection  {
constructor(colInfoArray: any[]): this;
GetColumnByKey(key: string): any;
GetColumnArray(bVisibleOnly?: boolean): any[];
GetColumnMap(): {
[key: string]: any
};
AppendColumn(colInfo: any): void;
InsertColumnAt(idx: number, colInfo: any): void;
RemoveColumn(key: string): void;

/**
 * Returns null if the specified column is not found or hidden.
 */
GetColumnPosition(key: string): number
}

declare class JsGrid$ColumnInfo  {
constructor(name: string, imgSrc: string, key: string, width: number): this;

/**
 * Column title
 */
name: string;

/**
 * Column image URL.
 * If not null, the column header cell will show the image instead of title text.
 * If the title is defined at the same time as the imgSrc, the title will be shown as a tooltip.
 */
imgSrc: string;

/**
 * Custom image HTML.
 * If you define this in addition to the imgSrc attribute, then instead of standard img tag
 * the custom HTML defined by this field will be used.
 */
imgRawSrc: string;

/**
 * Column identifier
 */
columnKey: string;

/**
 * Field keys of the fields, that are displayed in this column
 */
fieldKeys: string[];

/**
 * Width of the column
 */
width: number;
bOpenMenuOnContentClick: boolean;

/**
 * always returns 'column'
 */
ColumnType(): string;

/**
 * true by default
 */
isVisible: boolean;

/**
 * true by default
 */
isHidable: boolean;

/**
 * true by default
 */
isResizable: boolean;

/**
 * true by default
 */
isSortable: boolean;

/**
 * true by default
 */
isAutoFilterable: boolean;

/**
 * false by default
 */
isFooter: boolean;

/**
 * determine whether the cells in this column should be clickable
 */
fnShouldLinkSingleValue: (
record: JsGrid$IRecord,
fieldKey: string,
dataValue: any,
localizedValue: any) => boolean;

/**
 * if a particular cell is determined as clickable by fnShouldLinkSingleValue, this function will be called when the cell is clicked
 */
fnSingleValueClicked: (
record: JsGrid$IRecord,
fieldKey: string,
dataValue: any,
localizedValue: any) => void;

/**
 * this is used when you need to make some of the cells in the column readonly, but at the same time keep others editable
 */
fnGetCellEditMode: (record: JsGrid$IRecord, fieldKey: string) => SP$JsGrid.JsGrid$EditMode;

/**
 * this function should return name of the display control for the given cell in the column
 * the name should be previously associated with the display control via SP.JsGrid.PropertyType.Utils.RegisterDisplayControl method
 */
fnGetDisplayControlName: (record: JsGrid$IRecord, fieldKey: string) => string;

/**
 * this function should return name of the edit control for the given cell in the column
 * the name should be previously associated with the edit control via SP.JsGrid.PropertyType.Utils.RegisterEditControl method
 */
fnGetEditControlName: (record: JsGrid$IRecord, fieldKey: string) => string;

/**
 * set widget control names for a particular cell
 * widgets are basically in-cell buttons with associated popup controls, e.g. date selector or address book button
 * standard widget ids are defined in the SP.JsGrid.WidgetControl.Type enumeration
 * it is also possible to create your own widgets
 * usually this function is not used, and instead, widget control names are determined via PropertyType
 */
fnGetWidgetControlNames: (record: JsGrid$IRecord, fieldKey: string) => string[];

/**
 * this function should return id of the style for the given cell in the column
 * styles and their ids are registered for a JsGridControl via jsGridParams.styleManager.RegisterCellStyle method
 */
fnGetCellStyleId: (record: JsGrid$IRecord, fieldKey: string, dataValue: any) => string;

/**
 * set custom tooltip for the given cell in the column. by default, localized value is displayed as the tooltip
 */
fnGetSingleValueTooltip: (
record: JsGrid$IRecord,
fieldKey: string,
dataValue: any,
localizedValue: any) => string
}

declare interface JsGrid$IRecord {

/**
 * True if this is an entry row
 */
bIsNewRow: boolean,

/**
 * Please use SetProp and GetProp
 */
properties: {
[fieldKey: string]: JsGrid$IPropertyBase
},

/**
 * returns recordKey
 */
key(): number,

/**
 * returns raw data value for the specified field
 */
GetDataValue(fieldKey: string): any,

/**
 * returns localized text value for the specified field
 */
GetLocalizedValue(fieldKey: string): string,

/**
 * returns true if data value for the specified field is available
 */
HasDataValue(fieldKey: string): boolean,

/**
 * returns true if localized text value for the specified field is available
 */
HasLocalizedValue(fieldKey: string): boolean,
GetProp(fieldKey: string): JsGrid$IPropertyBase,
SetProp(fieldKey: string, prop: JsGrid$IPropertyBase): void,

/**
 * Update the specified field with the specified value
 */
AddFieldValue(fieldKey: string, value: any): void,

/**
 * Removes value of the specified field.
 * Does not refresh the view.
 */
RemoveFieldValue(fieldKey: string): void
} 

declare class JsGrid$RecordFactory  {
constructor(gridFieldMap: any, keyColumnName: string, fnGetPropType: any): this;
gridFieldMap: any;

/**
 * Create a new record
 */
MakeRecord(dataPropMap: any, localizedPropMap: any, bKeepRawData: boolean): JsGrid$IRecord
}

declare interface JsGrid$IPropertyBase {
HasLocalizedValue(): boolean,
HasDataValue(): boolean,
Clone(): JsGrid$IPropertyBase,

/**
 * dataValue actually is cloned
 */
Update(dataValue: any, localizedValue: string): void,
GetLocalized(): string,
GetData(): any
} 

declare class JsGrid$Property  {
static MakeProperty(
dataValue: any,
localizedValue: string,
bHasDataValue: boolean,
bHasLocalizedValue: boolean,
propType: any): JsGrid$IPropertyBase;
static MakePropertyFromGridField(
gridField: any,
dataValue: any,
localizedVal: string,
optPropType?: any): JsGrid$IPropertyBase
}

declare class JsGrid$GridField  {
constructor(key: string, hasDataValue: boolean, hasLocalizedValue: boolean, textDirection: JsGrid$TextDirection, defaultCellStyleId?: any, editMode?: JsGrid$EditMode, dateOnly?: boolean, csrInfo?: any): this;
key: string;
hasDataValue: boolean;
hasLocalizedValue: boolean;
textDirection: JsGrid$TextDirection;
dateOnly: boolean;
csrInfo: any;
GetEditMode(): JsGrid$EditMode;
SetEditMode(mode: JsGrid$EditMode): void;
GetDefaultCellStyleId(): any;
CompareSingleDataEqual(dataValue1: any, dataValue2: any): boolean;
GetPropType(): any;
GetSingleValuePropType(): any;
GetMultiValuePropType(): any;
SetSingleValuePropType(svPropType: any): void;
SetIsMultiValue(listSeparator: any): void;
GetIsMultiValue(): boolean
}

declare interface JsGrid$IEditActorGridContext {
jsGridObj: JsGrid$JsGridControl,
parentNode: HTMLElement,
styleManager: JsGrid$IStyleManager,
RTL: any,
emptyValue: any,
bLightFocus: boolean,
OnKeyDown(domEvent: Sys.SP$UI.DomEvent): void
} 

declare type JsGrid$IEditControlGridContext = {
OnActivateActor(): void,
OnDeactivateActor(): void
} & JsGrid$IEditActorGridContext


declare interface JsGrid$IPropertyType {
SPAnimation$ID: string,
BeginValidateNormalizeConvert(
recordKey: number,
fieldKey: string,
newValue: any,
bIsLocalized: boolean,
fnCallback: (args: {
isValid: boolean,
dataValue: any,
normalizedLocValue: string
}) => void,
fnError: any): void
} 

declare type JsGrid$ILookupPropertyType = {
GetItems(fnCallback: any): void,
DataToLocalized(dataValue: any): string,
LocalizedToData(localized: string): any,
GetImageSource(record: JsGrid$IRecord, dataValue: any): string,
GetStyleId(dataValue: any): string,
GetIsLimitedToList(): boolean,
GetSerializableLookupPropType(): {
items: any[],
id: string,
bLimitToList: boolean
}
} & JsGrid$IPropertyType


declare type JsGrid$IMultiValuePropertyType = {
bMultiValue: boolean,
separator: string,
singleValuePropType: string,
GetSerializableMultiValuePropType(
): {
singleValuePropTypeID: string,
separatorChar: string,
bDelayInit: boolean
},
InitSingleValuePropType(): void,
LocStrToLocStrArray(locStr: string): string[],
LocStrArrayToLocStr(locStrArray: string[]): string
} & JsGrid$IPropertyType


declare class JsGrid$PropertyType  {

/**
 * Lookup property type factory, based on SP.JsGrid.PropertyType.LookupTable class.
 * displayCtrlName should be one of the following: SP.JsGrid.DisplayControl.Type.Image, SP.JsGrid.DisplayControl.Type.ImageText or SP.JsGrid.DisplayControl.Type.Text
 */
static RegisterNewLookupPropType(id: string, items: any[], displayCtrlName: string, bLimitToList: boolean): void;

/**
 * Register a custom property type.
 */
static RegisterNewCustomPropType(
propType: JsGrid$IPropertyType,
displayCtrlName: string,
editControlName: string,
widgetControlNames: string[]): void;

/**
 * Register a custom property type, where display and edit controls, and also widgets, are derived from the specified parent property type.
 */
static RegisterNewDerivedCustomPropType(propType: JsGrid$IPropertyType, baseTypeName: string): void
}

declare class PropertyType$String mixins JsGrid$IPropertyType {
constructor(): this;
SPAnimation$ID: string;
BeginValidateNormalizeConvert(
recordKey: number,
fieldKey: string,
newValue: any,
bIsLocalized: boolean,
fnCallback: (args: {
isValid: boolean,
dataValue: any,
normalizedLocValue: string
}) => void,
fnError: any): void;
toString(): string
}

declare class PropertyType$LookupTable mixins JsGrid$ILookupPropertyType {
constructor(items: any[], id: string, bLimitToList: boolean): this;
SPAnimation$ID: string;
BeginValidateNormalizeConvert(
recordKey: number,
fieldKey: string,
newValue: any,
bIsLocalized: boolean,
fnCallback: (args: {
isValid: boolean,
dataValue: any,
normalizedLocValue: string
}) => void,
fnError: any): void;
GetItems(fnCallback: any): void;
DataToLocalized(dataValue: any): string;
LocalizedToData(localized: string): any;
GetImageSource(record: JsGrid$IRecord, dataValue: any): string;
GetStyleId(dataValue: any): string;
GetIsLimitedToList(): boolean;
GetSerializableLookupPropType(): {
items: any[],
id: string,
bLimitToList: boolean
}
}

declare class PropertyType$CheckBoxBoolean mixins JsGrid$IPropertyType {
constructor(): this;
SPAnimation$ID: string;
BeginValidateNormalizeConvert(
recordKey: number,
fieldKey: string,
newValue: any,
bIsLocalized: boolean,
fnCallback: (args: {
isValid: boolean,
dataValue: any,
normalizedLocValue: string
}) => void,
fnError: any): void;
DataToLocalized(dataValue: any): string;
GetBool(dataValue: any): boolean;
toString(): string
}

declare class PropertyType$DropDownBoolean mixins JsGrid$IPropertyType {
constructor(): this;
SPAnimation$ID: string;
BeginValidateNormalizeConvert(
recordKey: number,
fieldKey: string,
newValue: any,
bIsLocalized: boolean,
fnCallback: (args: {
isValid: boolean,
dataValue: any,
normalizedLocValue: string
}) => void,
fnError: any): void;
DataToLocalized(dataValue: any): string;
GetBool(dataValue: any): boolean;
toString(): string
}

declare class PropertyType$MultiValuePropType mixins JsGrid$IMultiValuePropertyType {
SPAnimation$ID: string;
BeginValidateNormalizeConvert(
recordKey: number,
fieldKey: string,
newValue: any,
bIsLocalized: boolean,
fnCallback: (args: {
isValid: boolean,
dataValue: any,
normalizedLocValue: string
}) => void,
fnError: any): void;
bMultiValue: boolean;
separator: string;
singleValuePropType: string;
GetSerializableMultiValuePropType(
): {
singleValuePropTypeID: string,
separatorChar: string,
bDelayInit: boolean
};
InitSingleValuePropType(): void;
LocStrToLocStrArray(locStr: string): string[];
LocStrArrayToLocStr(locStrArray: string[]): string
}

declare class PropertyType$HyperLink mixins JsGrid$IPropertyType {
SPAnimation$ID: string;
BeginValidateNormalizeConvert(
recordKey: number,
fieldKey: string,
newValue: any,
bIsLocalized: boolean,
fnCallback: (args: {
isValid: boolean,
dataValue: any,
normalizedLocValue: string
}) => void,
fnError: any): void;
bHyperlink: boolean;
DataToLocalized(dataValue: any): string;
GetAddress(dataValue: any): string;

/**
 * Returns string like this: '"http:// site.com, Site title"'
 */
GetCopyValue(record: JsGrid$IRecord, dataValue: any, locValue: string): string;
toString(): string
}

declare class PropertyType$Utils  {
static RegisterDisplayControl(name: string, singleton: any, requiredFunctionNames: string[]): void;
static RegisterEditControl(
name: string,
factory: (
gridContext: JsGrid$IEditControlGridContext,
gridTextInputElement: HTMLElement) => JsGrid$IEditControl,
requiredFunctionNames: string[]): void;
static RegisterWidgetControl(
name: string,
factory: (ddContext: any) => JsGrid$IPropertyType,
requiredFunctionNames: string[]): void;
static UpdateDisplayControlForPropType(propTypeName: string, displayControlType: string): void
}

declare class WidgetControl$Type  {
static Demo: string;
static Date: string;
static AddressBook: string;
static Hyperlink: string
}

declare class Internal$DiffTracker  {
constructor(objBag: any, fnGetChange: (
version: any,
keys: any[],
synchronized: boolean,
includeInvalidPropUpdates: boolean) => any): this;
ExternalAPI: {
AnyChanges(): boolean,
ChangeKeySliceInfo(): any,
SP$ChangeQuery(): any,
EventSliceInfo(): any,
GetChanges(
optStartEvent: any,
optEndEvent: any,
optRecordKeys: any,
bFirstStartEvent: boolean,
bStartInclusive: boolean,
bEndInclusive: boolean,
bIncludeInvalidPropUpdates: boolean,
bLastEndEvent: boolean): any,
GetChangesAsJson(changeQuery: any, optfnPreProcessUpdateForSerialize?: any): string,
GetUniquePropertyChanges(changeQuery: any, optfnFilter?: any): any,
RegisterEvent(changeKey: JsGrid$IChangeKey, eventObject: any): void,
UnregisterEvent(changeKey: JsGrid$IChangeKey, eventObject: any): void
};
Clear(): void;
NotifySynchronizeToChange(changeKey: JsGrid$IChangeKey): void;
NotifyRollbackChange(changeKey: JsGrid$IChangeKey): void;
NotifyVacateChange(changeKey: JsGrid$IChangeKey): void
}

declare class Internal$PropertyUpdate mixins JsGrid$IValue {
constructor(data: any, localized: string): this;
data: any;
localized: string
}

declare interface JsGrid$IEditActorCellContext {
propType: JsGrid$IPropertyType,
originalValue: JsGrid$IValue,
record: JsGrid$IRecord,
column: JsGrid$ColumnInfo,
field: JsGrid$GridField,
fieldKey: string,
cellExpandSpace: {
left: number,
top: number,
fight: number,
bottom: number
},
SetCurrentValue(value: any): void
} 

declare type JsGrid$IEditControlCellContext = {
cellWidth: number,
cellHeight: number,
cellStyle: any,
cellRect: any,
NotifyExpandControl(): void,
NotifyEditComplete(): void,
Show(element: HTMLElement): void,
Hide(element: HTMLElement): void
} & JsGrid$IEditActorCellContext




declare interface JsGrid$IEditControl {
SupportedWriteMode?: SP$SP$JsGrid.JsGrid$EditActorWriteType,
SupportedReadMode?: SP$SP$JsGrid.JsGrid$EditActorReadType,
GetCellContext?: () => JsGrid$IEditControlCellContext,
GetOriginalValue?: () => JsGrid$IValue,
SetValue?: (value: JsGrid$IValue) => void,
Dispose(): void,
GetInputElement?: () => HTMLElement,
Focus?: (eventInfo: Sys.SP$UI.DomEvent) => void,
BindToCell(cellContext: JsGrid$IEditControlCellContext): void,
OnBeginEdit(eventInfo: Sys.SP$UI.DomEvent): void,
Unbind(): void,
OnEndEdit(): void,
OnCellMove?: () => void,
OnValueChanged?: (newValue: JsGrid$IValue) => void,
IsCurrentlyUsingGridTextInputElement?: () => boolean,
SetSize?: (width: number, height: number) => void
} 

declare class JsGrid$StaticDataSource  {
constructor(jsGridData: JsGrid$IGridData, optFnGetPropType?: (recordKey: string, key: string, dataPropMap: {
[name: string]: any
}) => any): this;
AddColumn(gridField: SP$SP$JsGrid.JsGrid$GridField, values: JsGrid$IValue[]): void;
RemoveColumn(fieldKey: string): void;
InitJsGridParams(
optGridParams?: JsGrid$JsGridControl.JsGridControl$Parameters): JsGrid$JsGridControl.JsGridControl$Parameters
}

declare interface JsGrid$IGridData {
MetaData: JsGrid$IGridMetadata,
Fields: JsGrid$IFieldInfo[],
Columns: JsGrid$IColumnInfo[],
LocalizedTable: any[],
UnlocalizedTable: any[],
ViewInfo: any[],
MultiValueSeparator?: string,
LookupTableInfo?: JsGrid$ILookupTableInfo[],
PivotedColumns?: JsGrid$ColumnInfo[],
JsGrid$PaneLayout?: JsGrid$PaneLayout,
GanttInfo?: any,
AutoFilterableColumns?: boolean,
AutoFilterState?: any,
SortState?: any[],
HierarchyState?: any,
TopRecord?: number,
RecordCount?: number,
AdditionalParams?: any,
CellStyles?: any,
GroupingGridRowStyleIds?: any[],
UnfilteredHierarchy?: any,
AutoFilterEntries?: any,
ViewDepKeys?: any[]
} 

declare interface JsGrid$IColumnInfo {

/**
 * Column title
 */
name: string,

/**
 * Column image URL.
 * If not null, the column header cell will show the image instead of title text.
 * If the title is defined at the same time as the imgSrc, the title will be shown as a tooltip.
 */
imgSrc?: string,

/**
 * Column identifier
 */
columnKey: string,

/**
 * Column identifier
 */
fieldKey: string,

/**
 * Field keys of the fields, that are displayed in this column
 */
fieldKeys: string[],

/**
 * Width of the column
 */
width: number,

/**
 * true by default
 */
isVisible?: boolean,

/**
 * true by default
 */
isHidable?: boolean,

/**
 * true by default
 */
isResizable?: boolean,

/**
 * true by default
 */
isSortable?: boolean,

/**
 * true by default
 */
isAutoFilterable?: boolean,

/**
 * false by default
 */
isFooter?: boolean
} 

declare interface JsGrid$IGridMetadata {
KeyColumnName: string,
IsGanttEnabled?: boolean,
IsHierarchyEnabled?: boolean,
IsSorted?: boolean,
GroupingLevel?: number,
GroupingPrefix?: string,
RecordKeyHash?: string,
RecordKeyOrderChanged?: any,
GridOperationalConstantsFieldKeyMap?: {
[index: number]: string
}
} 

declare interface JsGrid$IFieldInfo {
fieldKey: string,
propertyTypeId: string,
editMode?: JsGrid$EditMode,
hasDataValue?: boolean,
hasLocalizedValue?: boolean,
multiValue?: boolean,
textDirection?: JsGrid$TextDirection,
dateOnly?: boolean,
defaultCellStyleId?: any
} 

declare interface JsGrid$ILookupTableInfo {
id: string,
showImage?: boolean,
showText?: boolean,
limitToList?: boolean,
lookup: JsGrid$ILookupInfo[]
} 

declare interface JsGrid$ILookupInfo {
localString: string,
value: number
} 

declare class SP$GanttControl  {
static WaitForGanttCreation(callack: (control: SP$GanttControl) => void): void;
static Instances: SP$GanttControl[];
static FnGanttCreationCallback: Array<(control: SP$GanttControl) => void>;
get_Columns(): SP$SP$JsGrid.JsGrid$ColumnInfo[]
}
	
/**
 * Register function to rerun on partial update in MDS-enabled site.
 */
declare function RegisterModuleInit(scriptFileName: string, initFunc: () => void): void

	
/**
 * Provides access to url and query string parts.
 */
declare class JSRequest  {

/**
 * Query string parts.
 */
static QueryString: {
[parameter: string]: string
};

/**
 * initializes class.
 */
static EnsureSetup(): void;

/**
 * Current file name (after last '/' in url).
 */
static FileName: string;

/**
 * Current file path (before last '/' in url).
 */
static PathName: string
}
	declare interface _spPageContextInfo {
alertsEnabled: boolean,
allowSilverlightPrompt: string,
blockDownloadsExperienceEnabled: boolean,
canUserCreateMicrosoftForm: boolean,
cdnPrefix: string,
clientServerTimeDelta: number,
CorrelationId: string,
crossDomainPhotosEnabled: boolean,
currentCultureName: string,
currentLanguage: number,
currentUICultureName: string,
disableAppViews: boolean,
disableFlows: boolean,
env: string,
farmLabel: string,
formDigestValue: string,
formDigestTimeoutSeconds: number,
groupColor: string,
groupHasHomepage: boolean,
groupId: string,
guestsEnabled: boolean,
hasManageWebPermissions: boolean,
isAnonymousGuestUser: boolean,
isAppWeb: boolean,
isExternalGuestUser: boolean,
isNoScriptEnabled: boolean,
isSiteAdmin: boolean,
isSPO: boolean,
isTenantDevSite: boolean,
isWebWelcomePage: boolean,
layoutsUrl: string,
listBaseTemplate: number,
listId: string,
listPermsMask: {
High: number,
Low: number
},
listTitle: string,
listUrl: string,
maximumFileSize: number,
openInClient: boolean,
pageListId: string,
pageItemId: number,
pagePermsMask: {
High: number,
Low: number
},
pagePersonalizationScope: string,
PreviewFeaturesEnabled: boolean,
preferUserTimeZone: boolean,
ProfileUrl: string,
PublishingFeatureOn: boolean,
RecycleBinItemCount: number,
serverRedirectedUrl: string,
serverRequestPath: string,
serverTime: string,
siteAbsoluteUrl: string,
siteClassification: string,
siteClientTag: string,
siteColor: string,
siteId: string,
sitePagesEnabled: boolean,
siteServerRelativeUrl: string,
siteSubscriptionId: string,
supportPoundStorePath: boolean,
supportPercentStorePath: boolean,
systemUserKey: string,
tenantAppVersion: string,
themeCacheToken: string,
themedCssFolderUrl: string,
themedImageFileNames: string,
updateFormDigestPageLoaded: string,
userDisplayName: string,
userEmail: string,
userId: number,
userLoginName: string,
viewOnlyExperienceEnabled: boolean,
viewId: string,
webAbsoluteUrl: string,
webDescription: string,
webId: string,
webLanguage: number,
webLogoUrl: string,
webPermMasks: {
High: number,
Low: number
},
webServerRelativeUrl: string,
webTemplate: string,
webTitle: string,
webUIVersion: number
} 
	declare var _spPageContextInfo: _spPageContextInfo;
	declare interface _spFriendlyUrlPageContextInfo {
termId: string,
termSetId: string,
termStoreId: string,
title: string
} 
	declare var _spFriendlyUrlPageContextInfo: _spFriendlyUrlPageContextInfo;
	declare function STSHtmlEncode(value: string): string

	declare function STSHtmlDecode(value: string): string

	declare function AddEvtHandler(element: HTMLElement, event: string, func: EventListener): void

	
/**
 * Gets query string parameter
 */
declare function GetUrlKeyValue(key: string): string

	declare class AjaxNavigate  {
update(
url: string,
updateParts: {
[name: string]: string | number
},
fullNavigate: boolean,
anchorName: string): void;
add_navigate(handler: (obj: any, eventArgs: any) => void): void;
remove_navigate(handler: (obj: any, eventArgs: any) => void): void;
submit(formToSubmit: HTMLFormElement): void;
getParam(paramName: string): string;
getSavedFormAction(): string;
get_href(): string;
get_hash(): string;
get_search(): string;
convertMDSURLtoRegularURL(mdsPath: string): string
}
	declare var ajaxNavigate: AjaxNavigate;
	declare class Browseris  {
firefox: boolean;
firefox36up: boolean;
firefox3up: boolean;
firefox4up: boolean;
ie: boolean;
ie55up: boolean;
ie5up: boolean;
ie7down: boolean;
ie8down: boolean;
ie9down: boolean;
ie8standard: boolean;
ie8standardUp: boolean;
ie9standardUp: boolean;
ipad: boolean;
windowsphone: boolean;
chrome: boolean;
chrome7up: boolean;
chrome8up: boolean;
chrome9up: boolean;
iever: boolean;
mac: boolean;
major: boolean;
msTouch: boolean;
isTouch: boolean;
nav: boolean;
nav6: boolean;
nav6up: boolean;
nav7up: boolean;
osver: boolean;
safari: boolean;
safari125up: boolean;
safari3up: boolean;
verIEFull: boolean;
w3c: boolean;
webKit: boolean;
win: boolean;
win8AppHost: boolean;
win32: boolean;
win64bit: boolean;
winnt: boolean;
armProcessor: boolean
}
	declare var browseris: Browseris;
	declare type ContextInfo = {
AllowGridMode: boolean,
SP$BasePermissions: any,
BaseViewID: any,
CascadeDeleteWarningMessage: string,
ContentTypesEnabled: boolean,
CurrentSelectedItems: boolean,
CurrentUserId: number,
CurrentUserIsSiteAdmin: boolean,
EnableMinorVersions: boolean,
ExternalDataList: boolean,
HasRelatedCascadeLists: boolean,
HttpPath: string,
HttpRoot: string,
LastSelectableRowIdx: number,
LastSelectedItemIID: number,
LastRowIndexSelected: number,
RowFocusTimerID: number,
ListTitle: string,
ListData: any,
SPClientTemplates$ListSchema: SPClientTemplates$SPClientTemplates$ListSchema,
ModerationStatus: number,
PortalUrl: string,
RecycleBinEnabled: number,
SelectAllCbx: HTMLElement,
SendToLocationName: string,
SendToLocationUrl: string,
SiteTitle: string,
StateInitDone: boolean,
TableCbxFocusHandler(instance: any, eventArgs: any): void,
TableMouseoverHandler(instance: any, eventArgs: any): void,
TotalListItems: number,
WorkflowsAssociated: boolean,
clvp: any,
ctxId: number,
ctxType: any,
dictSel: any,
displayFormUrl: string,
editFormUrl: string,
imagesPath: string,
inGridMode: boolean,
inGridFullRender: boolean,
isForceCheckout: boolean,
isModerated: boolean,
isPortalTemplate: boolean,
isVersions: boolean,
isWebEditorPreview: boolean,
leavingGridMode: boolean,
loadingAsyncData: boolean,
listBaseType: number,
listName: string,
listTemplate: string,
listUrlDir: string,
newFormUrl: string,
onRefreshFailed(context: any, requrest: any, response: any): void,
Overrides$overrideDeleteConfirmation: string,
overrideFilterQstring: string,
recursiveView: boolean,
rootFolderForDisplay: string,
serverUrl: string,
verEnabled: boolean,
view: string,
queryString: string,
IsClientRendering: boolean,
wpq: string,
rootFolder: string,
IsAppWeb: boolean,
NewWOPIDocumentEnabled: boolean,
NewWOPIDocumentUrl: string,
AllowCreateFolder: boolean,
CanShareLinkForNewDocument: boolean,
noGroupCollapse: boolean,
SiteTemplateId: number,
ExcludeFromOfflineClient: boolean
} & SPClientTemplates$SPClientTemplates$RenderContext

	declare function GetCurrentCtx(): ContextInfo

	declare function SetFullScreenMode(fullscreen: boolean): void

	declare interface MQuery {
(selector: string, context?: any): MQueryResultSetElements,
(objectOrElement: MQueryResultSetElements | HTMLElement | HTMLElement[]): MQueryResultSetElements,
<T>(object?: MQueryResultSet<T> | T | T[]): MQueryResultSet<T>,
throttle<T: (...args: any[]) => any>(
fn: T,
interval: number,
shouldOverrideThrottle: boolean): T,
extend(target: any, ...objs: any[]): any,
extend(deep: boolean, target: any, ...objs: any[]): any,
makeArray<T>(obj: any): any[],
isDefined(obj: any): boolean,
isNotNull(obj: any): boolean,
isUndefined(obj: any): boolean,
isNull(obj: any): boolean,
isUndefinedOrNull(obj: any): boolean,
isDefinedAndNotNull(obj: any): boolean,
isString(obj: any): boolean,
isBoolean(obj: any): boolean,
isFunction(obj: any): boolean,
isArray(obj: any): boolean,
isNode(obj: any): boolean,
isElement(obj: any): boolean,
isMQueryResultSet(obj: any): boolean,
isNumber(obj: any): boolean,
isObject(obj: any): boolean,
isEmptyObject(obj: any): boolean,
ready(callback: () => void): void,
contains(container: HTMLElement, contained: HTMLElement): boolean,
proxy(
fn: (...args: any[]) => any,
context: any,
...args: any[]): (...args: any[]) => any,
proxy(context: any, name: string, ...args: any[]): any,
every<T>(
obj: T[] | MQueryResultSet<T>,
fn: (elementOfArray: T, indexInArray?: number) => boolean,
context?: any): boolean,
some<T>(
obj: T[] | MQueryResultSet<T>,
fn: (elementOfArray: T, indexInArray?: number) => boolean,
context?: any): boolean,
filter<T>(
obj: T[],
fn: (elementOfArray: T, indexInArray?: number) => boolean,
context?: any): T[],
filter<T>(
obj: MQueryResultSet<T>,
fn: (elementOfArray: T, indexInArray?: number) => boolean,
context?: any): MQueryResultSet<T>,
forEach<T>(
obj: T[] | MQueryResultSet<T>,
fn: (elementOfArray: T, indexInArray?: number) => void,
context?: any): void,
map<T, U>(
array: T[],
callback: (elementOfArray: T, indexInArray?: number) => Srch$U): Srch$U[],
map<T, U>(
array: MQueryResultSet<T>,
callback: (elementOfArray: T, indexInArray?: number) => Srch$U): MQueryResultSet<Srch$U>,
indexOf<T>(obj: T[], object: T, startIndex?: number): number,
lastIndexOf<T>(obj: T[], object: T, startIndex?: number): number,
data(element: HTMLElement, key?: string, value?: any): any,
removeData(element: HTMLElement, name?: string): MQueryResultSetElements,
hasData(element: HTMLElement): boolean
} 
	declare type MQueryResultSetElements = {
append(node: HTMLElement | MQueryResultSetElements | string): MQueryResultSetElements,
bind(
eventType: string,
handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
unbind(
eventType: string,
handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
trigger(eventType: string): MQueryResultSetElements,
one(
eventType: string,
handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
detach(): MQueryResultSetElements,
find(selector: string): MQueryResultSetElements,
closest(selector: string, context?: any): MQueryResultSetElements,
offset(): {
left: number,
top: number
},
offset(coordinates: {
left: any,
top: any
}): MQueryResultSetElements,
filter(selector: string): MQueryResultSetElements,
filter(
fn: (elementOfArray: HTMLElement, indexInArray?: number) => boolean,
context?: any): MQueryResultSetElements,
not(selector: string): MQueryResultSetElements,
parent(selector?: string): MQueryResultSetElements,
offsetParent(selector?: string): MQueryResultSetElements,
parents(selector?: string): MQueryResultSetElements,
parentsUntil(
selectorOrElement?: string | HTMLElement,
filter?: string): MQueryResultSetElements,
position(): {
top: number,
left: number
},
attr(attributeName: string): string,
attr(attributeName: string, valueOrDelegate: any): MQueryResultSetElements,
attr(map: {
[key: string]: any
}): MQueryResultSetElements,
attr(
attributeName: string,
func: (index: number, attr: any) => any): MQueryResultSetElements,
addClass(classNames: string): MQueryResultSetElements,
removeClass(classNames: string): MQueryResultSetElements,
css(propertyName: string | string[]): string,
css(properties: any): MQueryResultSetElements,
css(propertyName: any | string, value: any): MQueryResultSetElements,
remove(selector?: string): MQueryResultSetElements,
children(selector?: string): MQueryResultSetElements,
empty(): MQueryResultSetElements,
first(): MQueryResultSetElements,
data(key: string, value: any): MQueryResultSetElements,
data(obj: {
[key: string]: any
}): MQueryResultSetElements,
data(key: string): any,
removeData(key: string): MQueryResultSetElements,
map(
callback?: (elementOfArray: HTMLElement, indexInArray: number) => any): MQueryResultSetElements,
blur(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
change(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
click(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
dblclick(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
error(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
focus(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
focusin(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
focusout(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
keydown(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
keypress(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
keyup(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
load(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
mousedown(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
mouseenter(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
mouseleave(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
mousemove(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
mouseout(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
mouseover(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
mouseup(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
resize(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
scroll(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
select(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
submit(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
unload(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements
} & MQueryResultSet<HTMLElement>

	declare interface MQueryResultSet<T> {
[index: number]: T,
contains(contained: T): boolean,
filter(
fn: (elementOfArray: T, indexInArray?: number) => boolean,
context?: any): MQueryResultSet<T>,
every(
fn: (elementOfArray: T, indexInArray?: number) => boolean,
context?: any): boolean,
some(
fn: (elementOfArray: T, indexInArray?: number) => boolean,
context?: any): boolean,
map(
callback: (elementOfArray: T, indexInArray?: number) => any): MQueryResultSet<T>,
forEach(fn: (elementOfArray: T, indexInArray?: number) => void, context?: any): void,
indexOf(object: any, startIndex?: number): number,
lastIndexOf(object: any, startIndex?: number): number
} 
	declare type MQueryEvent = {
altKey: boolean,
attrChange: number,
attrName: string,
bubbles: boolean,
button: number,
cancelable: boolean,
ctrlKey: boolean,
defaultPrevented: boolean,
detail: number,
eventPhase: number,
newValue: string,
prevValue: string,
relatedNode: HTMLElement,
screenX: number,
screenY: number,
shiftKey: boolean,
view: any
} & Event

	declare var m$: MQuery;
	declare class CalloutActionOptions  {

/**
 * Text for the action link
 */
text: string;
tooltip: string;
disabledTooltip: string;

/**
 * Callback that is executed when the action link is clicked.
 * @param event Standard javascript event object
 * @param action The action object
 */
onClickCallback: (event: Event, action: CalloutAction) => any;

/**
 * Callback which returns if the action link is enabled
 */
isEnabledCallback: (action: CalloutAction) => boolean;

/**
 * Callback which returns if the action link is visible
 */
isVisibleCallback: (action: CalloutAction) => boolean;

/**
 * Submenu entries for the action. If defined, the action link click will popup the specified menu.
 */
menuEntries: CalloutActionMenuEntry[]
}
	
/**
 * Defines a callout action menu entry
 */
declare class CalloutActionMenuEntry  {

/**
 * Creates a callout action menu entry
 * @param text Text to be displayed as the menu item text
 * @param onClickCallback Callback that will be fired when the item is clicked
 * @param wzISrc Url of the icon
 * @param wzIAlt Alternative text for the icon image
 * @param wzISeq Sequence for the menu item
 * @param wzDesc Description of the menu item
 */
constructor(text: string, onClickCallback: (actionMenuEntry: CalloutActionMenuEntry, actionMenuEntryIndex: number) => void, wzISrc: string, wzIAlt: string, wzISeq: number, wzDesc: string): this
}
	declare class CalloutActionMenu  {
constructor(actionsId: any): this;
addAction(action: CalloutAction): void;
getActions(): CalloutAction[];
render(): void;
refreshActions(): void;
calculateActionWidth(): void
}
	declare class CalloutAction  {
constructor(options: CalloutActionOptions): this;
getText(): string;
getToolTop(): string;
getDisabledToolTip(): string;
getOnClickCallback(event: any, action: CalloutAction): any;
getIsDisabledCallback(action: CalloutAction): boolean;
getIsVisibleCallback(action: CalloutAction): boolean;
getIsMenu(): boolean;
getMenuEntries(): CalloutActionMenuEntry[];
render(): void;
isEnabled(): boolean;
isVisible(): boolean;
set(options: CalloutActionOptions): void
}
	declare class Callout  {

/**
 * Sets options for the callout. Not all options can be changed for the callout after its creation.
 */
set(options: CalloutOptions): any;

/**
 * Adds event handler to the callout.
 * @param eventName one of the following: "opened", "opening", "closing", "closed"
 */
addEventCallback(eventName: string, callback: (callout: Callout) => void): void;

/**
 * Returns the launch point element of the callout.
 */
getLaunchPoint(): HTMLElement;

/**
 * Returns the ID of the callout.
 */
getID(): string;

/**
 * Returns the title of the callout.
 */
getTitle(): string;

/**
 * Returns the contents of the callout.
 */
getContent(): string;

/**
 * Returns the content element of the callout.
 */
getContentElement(): HTMLElement;

/**
 * Returns the bounding element defined for the callout during its creation.
 */
getBoundingBox(): HTMLElement;

/**
 * Returns the content width defined for the callout during its creation.
 */
getContentWidth(): number;

/**
 * Returns the object that represents open behaivor defined for the callout during its creation.
 */
getOpenOptions(): CalloutOpenOptions;

/**
 * Returns the beak orientation defined for the callout during its creation.
 */
getBeakOrientation(): string;

/**
 * Returns the position algorithm function defined for the callout during its creation.
 */
getPositionAlgorithm(): any;

/**
 * Specifies wherever callout is in "Opened" state
 */
isOpen(): boolean;

/**
 * Specifies wherever callout is in "Opening" state
 */
isOpening(): boolean;

/**
 * Specifies wherever callout is in "Opened" or "Opening" state
 */
isOpenOrOpening(): boolean;

/**
 * Specifies wherever callout is in "Closing" state
 */
isClosing(): boolean;

/**
 * Specifies wherever callout is in "Closed" state
 */
isClosed(): boolean;

/**
 * Returns the callout actions menu
 */
getActionMenu(): CalloutActionMenu;

/**
 * Adds a link to the actions panel in the bottom part of the callout window
 */
addAction(action: CalloutAction): void;

/**
 * Re-renders the actions menu. Call after the actions menu is changed.
 */
refreshActions(): void;

/**
 * Display the callout. Animation can be used only for IE9+
 */
open(useAnimation: boolean): void;

/**
 * Hide the callout. Animation can be used only for IE9+
 */
close(useAnimation: boolean): void;

/**
 * Display if hidden, hide if shown.
 */
toggle(): void;

/**
 * Do not call this directly. Instead, use CalloutManager.remove
 */
destroy(): void
}
	declare class CalloutOpenOptions  {

/**
 * HTML event name, e.g. "click"
 */
event: string;

/**
 * Callout will be closed on blur
 */
closeCalloutOnBlur: boolean;

/**
 * Close button will be shown within the callout window
 */
showCloseButton: boolean
}
	declare class CalloutOptions  {

/**
 * Some unique id for the callout.
 */
SPAnimation$ID: string;

/**
 * Element on that the callout is shown.
 */
launchPoint: HTMLElement;

/**
 * One of the following: "topBottom" (default) or "leftRight".
 */
beakOrientation: string;

/**
 * String (HTML allowed) that represents contents of the callout window.
 */
content: string;

/**
 * Title for the callout
 */
title: string;

/**
 * HTML element that represents contents of the callout window.
 */
contentElement: HTMLElement;

/**
 * If defined, callout will be inscribed into the bounding element.
 */
boundingBox: HTMLElement;

/**
 * Content element's width in pixels. By default = 350.
 */
contentWidth: number;

/**
 * Defines opening behavior
 */
openOptions: CalloutOpenOptions;

/**
 * Fires after the callout is rendered but before it is positioned and shown
 */
onOpeningCallback: (callout: Callout) => void;

/**
 * Fires right after the callout is shown
 */
onOpenedCallback: (callout: Callout) => void;

/**
 * Fires right before the callout is closed
 */
onClosingCallback: (callout: Callout) => void;

/**
 * Fires right after the callout is closed
 */
onClosedCallback: (callout: Callout) => void;

/**
 * Sets the position of the callout during its opening phase. For an example of a position algorithm function, please explore defaultPositionAlgorithm function from the callout.debug.js file
 */
positionAlgorithm: (callout: Callout) => void
}
	declare class CalloutManager  {

/**
 * Creates a new callout
 */
static createNew(options: CalloutOptions): Callout;

/**
 * Checks if callout with specified ID already exists. If it doesn't, creates it, otherwise returns the existing one.
 */
static createNewIfNecessary(options: CalloutOptions): Callout;

/**
 * Detaches callout from the launch point and destroys it.
 */
static remove(callout: Callout): void;

/**
 * Searches for a callout associated with the specified launch point. Throws error if not found.
 */
static getFromLaunchPoint(launchPoint: HTMLElement): Callout;

/**
 * Searches for a callout associated with the specified launch point. Returns null if not found.
 */
static getFromLaunchPointIfExists(launchPoint: HTMLElement): Callout;

/**
 * Gets the first launch point within the specified ancestor element, and returns true if the associated with it callout is opened or opening.
 * If the launch point is not found or the callout is hidden, returns false.
 */
static containsOneCalloutOpen(ancestor: HTMLElement): boolean;

/**
 * Finds the closest launch point based on the specified descendant element, and returns callout associated with the launch point.
 */
static getFromCalloutDescendant(descendant: HTMLElement): Callout;

/**
 * Perform some action for each callout on the page.
 */
static forEach(callback: (callout: Callout) => void): void;

/**
 * Closes all callouts on the page
 */
static closeAll(): boolean;

/**
 * Returns true if at least one of the defined on page callouts is opened.
 */
static isAtLeastOneCalloutOpen(): boolean;

/**
 * Returns true if at least one of the defined on page callouts is opened or opening.
 */
static isAtLeastOneCalloutOn(): boolean
}
	declare  class SPClientTemplates$FileSystemObjectType {
  constructor(...args: empty): mixed;
static +Invalid: Class<SPClientTemplates$FileSystemObjectType__Invalid> & SPClientTemplates$FileSystemObjectType__Invalid & 0;// 0
static +File: Class<SPClientTemplates$FileSystemObjectType__File> & SPClientTemplates$FileSystemObjectType__File & 1;// 1
static +Folder: Class<SPClientTemplates$FileSystemObjectType__Folder> & SPClientTemplates$FileSystemObjectType__Folder & 2;// 2
static +Web: Class<SPClientTemplates$FileSystemObjectType__Web> & SPClientTemplates$FileSystemObjectType__Web & 3;// 3

}

declare class SPClientTemplates$FileSystemObjectType__Invalid mixins SPClientTemplates$FileSystemObjectType {}
declare class SPClientTemplates$FileSystemObjectType__File mixins SPClientTemplates$FileSystemObjectType {}
declare class SPClientTemplates$FileSystemObjectType__Folder mixins SPClientTemplates$FileSystemObjectType {}
declare class SPClientTemplates$FileSystemObjectType__Web mixins SPClientTemplates$FileSystemObjectType {}


declare  class SPClientTemplates$ChoiceFormatType {
  constructor(...args: empty): mixed;
static +Dropdown: Class<SPClientTemplates$ChoiceFormatType__Dropdown> & SPClientTemplates$ChoiceFormatType__Dropdown & 0;// 0
static +Radio: Class<SPClientTemplates$ChoiceFormatType__Radio> & SPClientTemplates$ChoiceFormatType__Radio & 1;// 1

}

declare class SPClientTemplates$ChoiceFormatType__Dropdown mixins SPClientTemplates$ChoiceFormatType {}
declare class SPClientTemplates$ChoiceFormatType__Radio mixins SPClientTemplates$ChoiceFormatType {}


declare  class SPClientTemplates$ClientControlMode {
  constructor(...args: empty): mixed;
static +Invalid: Class<SPClientTemplates$ClientControlMode__Invalid> & SPClientTemplates$ClientControlMode__Invalid & 0;// 0
static +DisplayForm: Class<SPClientTemplates$ClientControlMode__DisplayForm> & SPClientTemplates$ClientControlMode__DisplayForm & 1;// 1
static +EditForm: Class<SPClientTemplates$ClientControlMode__EditForm> & SPClientTemplates$ClientControlMode__EditForm & 2;// 2
static +NewForm: Class<SPClientTemplates$ClientControlMode__NewForm> & SPClientTemplates$ClientControlMode__NewForm & 3;// 3
static +View: Class<SPClientTemplates$ClientControlMode__View> & SPClientTemplates$ClientControlMode__View & 4;// 4

}

declare class SPClientTemplates$ClientControlMode__Invalid mixins SPClientTemplates$ClientControlMode {}
declare class SPClientTemplates$ClientControlMode__DisplayForm mixins SPClientTemplates$ClientControlMode {}
declare class SPClientTemplates$ClientControlMode__EditForm mixins SPClientTemplates$ClientControlMode {}
declare class SPClientTemplates$ClientControlMode__NewForm mixins SPClientTemplates$ClientControlMode {}
declare class SPClientTemplates$ClientControlMode__View mixins SPClientTemplates$ClientControlMode {}


declare  class SPClientTemplates$RichTextMode {
  constructor(...args: empty): mixed;
static +Compatible: Class<SPClientTemplates$RichTextMode__Compatible> & SPClientTemplates$RichTextMode__Compatible & 0;// 0
static +FullHtml: Class<SPClientTemplates$RichTextMode__FullHtml> & SPClientTemplates$RichTextMode__FullHtml & 1;// 1
static +HtmlAsXml: Class<SPClientTemplates$RichTextMode__HtmlAsXml> & SPClientTemplates$RichTextMode__HtmlAsXml & 2;// 2
static +ThemeHtml: Class<SPClientTemplates$RichTextMode__ThemeHtml> & SPClientTemplates$RichTextMode__ThemeHtml & 3;// 3

}

declare class SPClientTemplates$RichTextMode__Compatible mixins SPClientTemplates$RichTextMode {}
declare class SPClientTemplates$RichTextMode__FullHtml mixins SPClientTemplates$RichTextMode {}
declare class SPClientTemplates$RichTextMode__HtmlAsXml mixins SPClientTemplates$RichTextMode {}
declare class SPClientTemplates$RichTextMode__ThemeHtml mixins SPClientTemplates$RichTextMode {}


declare  class SPClientTemplates$UrlFormatType {
  constructor(...args: empty): mixed;
static +Hyperlink: Class<SPClientTemplates$UrlFormatType__Hyperlink> & SPClientTemplates$UrlFormatType__Hyperlink & 0;// 0
static +Image: Class<SPClientTemplates$UrlFormatType__Image> & SPClientTemplates$UrlFormatType__Image & 1;// 1

}

declare class SPClientTemplates$UrlFormatType__Hyperlink mixins SPClientTemplates$UrlFormatType {}
declare class SPClientTemplates$UrlFormatType__Image mixins SPClientTemplates$UrlFormatType {}


declare  class SPClientTemplates$DateTimeDisplayFormat {
  constructor(...args: empty): mixed;
static +DateOnly: Class<SPClientTemplates$DateTimeDisplayFormat__DateOnly> & SPClientTemplates$DateTimeDisplayFormat__DateOnly & 0;// 0
static +DateTime: Class<SPClientTemplates$DateTimeDisplayFormat__DateTime> & SPClientTemplates$DateTimeDisplayFormat__DateTime & 1;// 1
static +TimeOnly: Class<SPClientTemplates$DateTimeDisplayFormat__TimeOnly> & SPClientTemplates$DateTimeDisplayFormat__TimeOnly & 2;// 2

}

declare class SPClientTemplates$DateTimeDisplayFormat__DateOnly mixins SPClientTemplates$DateTimeDisplayFormat {}
declare class SPClientTemplates$DateTimeDisplayFormat__DateTime mixins SPClientTemplates$DateTimeDisplayFormat {}
declare class SPClientTemplates$DateTimeDisplayFormat__TimeOnly mixins SPClientTemplates$DateTimeDisplayFormat {}


declare  class SPClientTemplates$DateTimeCalendarType {
  constructor(...args: empty): mixed;
static +None: Class<SPClientTemplates$DateTimeCalendarType__None> & SPClientTemplates$DateTimeCalendarType__None & 0;// 0
static +Gregorian: Class<SPClientTemplates$DateTimeCalendarType__Gregorian> & SPClientTemplates$DateTimeCalendarType__Gregorian & 1;// 1
static +Japan: Class<SPClientTemplates$DateTimeCalendarType__Japan> & SPClientTemplates$DateTimeCalendarType__Japan & 2;// 2
static +Taiwan: Class<SPClientTemplates$DateTimeCalendarType__Taiwan> & SPClientTemplates$DateTimeCalendarType__Taiwan & 3;// 3
static +Korea: Class<SPClientTemplates$DateTimeCalendarType__Korea> & SPClientTemplates$DateTimeCalendarType__Korea & 4;// 4
static +Hijri: Class<SPClientTemplates$DateTimeCalendarType__Hijri> & SPClientTemplates$DateTimeCalendarType__Hijri & 5;// 5
static +Thai: Class<SPClientTemplates$DateTimeCalendarType__Thai> & SPClientTemplates$DateTimeCalendarType__Thai & 6;// 6
static +Hebrew: Class<SPClientTemplates$DateTimeCalendarType__Hebrew> & SPClientTemplates$DateTimeCalendarType__Hebrew & 7;// 7
static +GregorianMEFrench: Class<SPClientTemplates$DateTimeCalendarType__GregorianMEFrench> & SPClientTemplates$DateTimeCalendarType__GregorianMEFrench & 8;// 8
static +GregorianArabic: Class<SPClientTemplates$DateTimeCalendarType__GregorianArabic> & SPClientTemplates$DateTimeCalendarType__GregorianArabic & 9;// 9
static +GregorianXLITEnglish: Class<SPClientTemplates$DateTimeCalendarType__GregorianXLITEnglish> & SPClientTemplates$DateTimeCalendarType__GregorianXLITEnglish & 10;// 10
static +GregorianXLITFrench: Class<SPClientTemplates$DateTimeCalendarType__GregorianXLITFrench> & SPClientTemplates$DateTimeCalendarType__GregorianXLITFrench & 11;// 11
static +KoreaJapanLunar: Class<SPClientTemplates$DateTimeCalendarType__KoreaJapanLunar> & SPClientTemplates$DateTimeCalendarType__KoreaJapanLunar & 12;// 12
static +ChineseLunar: Class<SPClientTemplates$DateTimeCalendarType__ChineseLunar> & SPClientTemplates$DateTimeCalendarType__ChineseLunar & 13;// 13
static +SakaEra: Class<SPClientTemplates$DateTimeCalendarType__SakaEra> & SPClientTemplates$DateTimeCalendarType__SakaEra & 14;// 14
static +UmAlQura: Class<SPClientTemplates$DateTimeCalendarType__UmAlQura> & SPClientTemplates$DateTimeCalendarType__UmAlQura & 15;// 15

}

declare class SPClientTemplates$DateTimeCalendarType__None mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__Gregorian mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__Japan mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__Taiwan mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__Korea mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__Hijri mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__Thai mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__Hebrew mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__GregorianMEFrench mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__GregorianArabic mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__GregorianXLITEnglish mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__GregorianXLITFrench mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__KoreaJapanLunar mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__ChineseLunar mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__SakaEra mixins SPClientTemplates$DateTimeCalendarType {}
declare class SPClientTemplates$DateTimeCalendarType__UmAlQura mixins SPClientTemplates$DateTimeCalendarType {}


declare  class SPClientTemplates$UserSelectionMode {
  constructor(...args: empty): mixed;
static +PeopleOnly: Class<SPClientTemplates$UserSelectionMode__PeopleOnly> & SPClientTemplates$UserSelectionMode__PeopleOnly & 0;// 0
static +PeopleAndGroups: Class<SPClientTemplates$UserSelectionMode__PeopleAndGroups> & SPClientTemplates$UserSelectionMode__PeopleAndGroups & 1;// 1

}

declare class SPClientTemplates$UserSelectionMode__PeopleOnly mixins SPClientTemplates$UserSelectionMode {}
declare class SPClientTemplates$UserSelectionMode__PeopleAndGroups mixins SPClientTemplates$UserSelectionMode {}



/**
 * Represents schema for a Choice field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_Choice = {

/**
 * List of choices for this field.
 */
Choices: string[],

/**
 * Display format for the choice field
 */
FormatType: SPClientTemplates$ChoiceFormatType
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a Lookup field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_Lookup = {

/**
 * Specifies if the field allows multiple values
 */
AllowMultipleValues: boolean,

/**
 * Returns base url for a list display form, e.g. "http:// portal/web/_layouts/15/listform.aspx?PageType=4"
 * You must add "ListId" (Guid of the list) and "ID" (integer Id of the item) parameters in order to use this Url
 */
BaseDisplayFormUrl: string,

/**
 * Indicates if the field is a dependent lookup
 */
DependentLookup: boolean,

/**
 * Indicates wherever the lookup list is throttled (contains more items than value of the "List Throttle Limit" setting).
 */
Throttled: boolean,

/**
 * Returns string representation of a number that represents the current value for the "List Throttle Limit" web application setting.
 * Only appears if Throttled property is true, i.e. the target lookup list is throttled.
 */
MaxQueryResult: string,

/**
 * List of choices for this field.
 */
Choices: Array<{
LookupId: number,
LookupValue: string
}>,

/**
 * Number of choices. Appears only for Lookup field.
 */
ChoiceCount: number,
LookupListId: string
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a DateTime field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_DateTime = {

/**
 * Type of calendar to use
 */
SP$CalendarType: SPClientTemplates$DateTimeCalendarType,

/**
 * Display format for DateTime field.
 */
DisplayFormat: SPClientTemplates$DateTimeDisplayFormat,

/**
 * Indicates wherever current user regional settings specify to display week numbers in day or week views of a calendar.
 * Only appears for DateTime fields.
 */
ShowWeekNumber: boolean,
TimeSeparator: string,
TimeZoneDifference: string,
FirstDayOfWeek: number,
FirstWeekOfYear: number,
HijriAdjustment: number,
WorkWeek: string,
LocaleId: string,
LanguageId: string,
MinJDay: number,
MaxJDay: number,
HoursMode24: boolean,
HoursOptions: string[]
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a DateTime field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_Geolocation = {
BingMapsKey: string,
IsBingMapBlockedInCurrentRegion: boolean
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a Choice field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_MultiChoice = {

/**
 * List of choices for this field.
 */
MultiChoices: string[],

/**
 * Indicates wherever fill-in choice is allowed
 */
FillInChoice: boolean
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a Choice field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_MultiLineText = {

/**
 * Specifies whether rich text formatting can be used in the field
 */
RichText: boolean,

/**
 * Changes are appended to the existing text.
 */
AppendOnly: boolean,

/**
 * Rich text mode for the field
 */
SPClientTemplates$RichTextMode: SPClientTemplates$RichTextMode,

/**
 * Number of lines configured to display
 */
NumberOfLines: number,

/**
 * A boolean value that specifies whether hyperlinks can be used in this fields.
 */
AllowHyperlink: boolean,

/**
 * WebPartAdderId for the ScriptEditorWebPart
 */
ScriptEditorAdderId: string
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a Number field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_Number = {
ShowAsPercentage: boolean
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a Number field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_Text = {
MaxLength: number
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a Number field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_Url = {
DisplayFormat: SPClientTemplates$UrlFormatType
} & SPClientTemplates$FieldSchema_InForm



/**
 * Represents schema for a Number field in list form or in list view in grid mode
 */
declare type SPClientTemplates$FieldSchema_InForm_User = {
Presence: boolean,
WithPicture: boolean,
DefaultRender: boolean,
WithPictureDetail: boolean,

/**
 * Server relative Url for ~site/_layouts/listform.aspx
 */
ListFormUrl: string,

/**
 * Server relative Url for ~site/_layouts/userdisp.aspx
 */
UserDisplayUrl: string,
EntitySeparator: string,
PictureOnly: boolean,
PictureSize: string
} & SPClientTemplates$FieldSchema_InForm


declare interface SPClientTemplates$FieldSchema {

/**
 * Specifies if the field can be edited while list view is in the Grid mode
 */
AllowGridEditing: boolean,

/**
 * String representation of the field type, e.g. "Lookup". Same as SPField.TypeAsString
 */
SP$FieldType: string,

/**
 * Internal name of the field
 */
Name: string,

/**
 * For OOTB fields, returns the type of field. For "UserMulti" returns "User", for "LookupMulti" returns "Lookup".
 * For custom field types, returns base type of the field.
 */
WidgetControl$Type: string
} 


/**
 * Represents field schema in Grid mode and on list forms.
 *     Consider casting objects of this type to more specific field types, e.g. FieldSchemaInForm_Lookup
 */
declare type SPClientTemplates$FieldSchema_InForm = {

/**
 * Description for this field.
 */
Description: string,

/**
 * Direction of the reading order for the field.
 */
Direction: string,

/**
 * Indicates whether the field is hidden
 */
Hidden: boolean,

/**
 * Guid of the field
 */
Id: string,

/**
 * Specifies Input Method Editor (IME) mode bias to use for the field.
 * The IME enables conversion of keystrokes between languages when one writing system has more characters than can be encoded for the given keyboard.
 */
IMEMode: any,

/**
 * Specifies if the field is read only
 */
ReadOnlyField: boolean,

/**
 * Specifies wherever field requires values
 */
Required: boolean,
RestrictedMode: boolean,

/**
 * Title of the field
 */
Title: string,

/**
 * If SPFarm.Local.UseMinWidthForHtmlPicker is true, UseMinWidth will be set to true. Undefined in other cases.
 */
UseMinWidth: boolean
} & SPClientTemplates$FieldSchema


declare interface SPClientTemplates$ListSchema {
SP$Field: SPClientTemplates$FieldSchema[]
} 

declare type SPClientTemplates$ListSchema_InForm = {
SP$Field: SPClientTemplates$FieldSchema_InForm[]
} & SPClientTemplates$ListSchema


declare interface SPClientTemplates$ListData_InForm {
Items: SPClientTemplates$Item[]
} 

declare type SPClientTemplates$RenderContext_FieldInForm = {
CurrentGroupIdx: number,
CurrentGroup: SP$Group,
CurrentItems: SPClientTemplates$Item[],
CurrentFieldSchema: SPClientTemplates$FieldSchema_InForm,
CurrentFieldValue: any
} & SPClientTemplates$RenderContext_Form


declare type SPClientTemplates$RenderContext_Form = {
CurrentItem: SPClientTemplates$Item,
FieldControlModes: {
[fieldInternalName: string]: SPClientTemplates$ClientControlMode
},
FormContext: SPClientTemplates$ClientFormContext,
FormUniqueId: string,
ListData: SPClientTemplates$ListData_InForm,
SPClientTemplates$ListSchema: SPClientTemplates$ListSchema_InForm,
CSRCustomLayout?: boolean
} & SPClientTemplates$RenderContext


declare type SPClientTemplates$FieldSchema_InView_LookupField = {

/**
 * Either "TRUE" or "FALSE"
 */
AllowMultipleValues: string,

/**
 * Target lookup list display form URL, including PageType and List attributes.
 */
DispFormUrl: string,

/**
 * Either "TRUE" or "FALSE"
 */
HasPrefix: string
} & SPClientTemplates$FieldSchema_InView


declare type SPClientTemplates$FieldSchema_InView_UserField = {

/**
 * Either "TRUE" or "FALSE"
 */
AllowMultipleValues: string,

/**
 * Either "TRUE" or "FALSE"
 */
ImnHeader: string,

/**
 * Either "TRUE" or "FALSE"
 */
HasPrefix: string,

/**
 * Either "1" or "0"
 */
HasUserLink: string,

/**
 * Either "1" or "0"
 */
DefaultRender: string
} & SPClientTemplates$FieldSchema_InView



/**
 * Represents field schema in a list view.
 */
declare type SPClientTemplates$FieldSchema_InView = {

/**
 * Either "TRUE" or "FALSE"
 */
CalloutMenu: string,
ClassInfo: string,
css: string,
DisplayName: string,

/**
 * Either "TRUE" or "FALSE"
 */
Explicit: string,
fieldRenderer: any,
FieldTitle: string,

/**
 * Indicates whether the field can be filtered. Either "TRUE" or "FALSE"
 */
Filterable: string,

/**
 * Set to "TRUE" for fields that comply to the following Xpath query:
 * ViewFields/FieldRef[@Explicit='TRUE'] | Query/GroupBy/FieldRef[not(@Name=ViewFields/FieldRef/@Name)]
 */
GroupField: string,

/**
 * Either "TRUE" or "FALSE"
 */
GridActiveAndReadOnly: string,

/**
 * Guid of the field
 */
SPAnimation$ID: string,

/**
 * Specifies if the field contains list item menu.
 * Corresponds to ViewFields/FieldRef/@ListItemMenu attribute. Either "TRUE" or "FALSE" and might be missing.
 */
listItemMenu: string,
RealFieldName: string,

/**
 * Either "TRUE" or "FALSE"
 */
ReadOnly: string,
ResultType: string,

/**
 * Indicates whether the field can be sorted. Either "TRUE" or "FALSE"
 */
Sortable: string
} & SPClientTemplates$FieldSchema


declare type SPClientTemplates$ListSchema_InView = {

/**
 * Key-value object that represents all aggregations defined for the view.
 * Key specifies the field internal name, and value specifies the type of the aggregation.
 */
Aggregate: {
[name: string]: string
},

/**
 * Either "TRUE" or false (for grouping)
 */
Collapse: string,

/**
 * Specifies whether to open items in a client application ("1") or in browser ("0").
 */
DefaultItemOpen: string,
Direction: string,

/**
 * Either "0" or "1"
 */
EffectivePresenceEnabled: string,

/**
 * If in grid mode (context.inGridMode == true), cast to FieldSchema_InForm[], otherwise cast to FieldSchema_InView[]
 */
FieldSortParam: string,
BusinessData$Filter: any,

/**
 * Either "0" or "1"
 */
ForceCheckout: string,

/**
 * Internal name for the first group by field, if any
 */
group1: string,

/**
 * Internal name for the second group by field, if any
 */
group2: string,

/**
 * "1" if the view contains "Title" field, otherwise not defined.
 */
HasTitle: string,
HttpVDir: string,

/**
 * Either "0" or "1"
 */
InplaceSearchEnabled: string,

/**
 * Either "0" or "1"
 */
IsDocLib: string,

/**
 * e.g. "1033"
 */
LCID: string,

/**
 * Either "0" or "1"
 */
ListRight_AddListItems: string,
NoListItem: string,
NoListItemHowTo: string,

/**
 * Server-relative path to the current page
 */
PagePath: string,

/**
 * Internal name of the field inside which the hierarchy buttons are displayed
 */
ParentHierarchyDisplayField: string,
PresenceAlt: string,

/**
 * Represents SPList.RootFolder.Properties. Exists only if SPList.FetchPropertyBagForListView property is set to true.
 */
PropertyBag: {
[key: string]: string
},

/**
 * Either "True" or "False"
 */
RenderSaveAsNewViewButton: string,

/**
 * Either "True" or "False"
 */
RenderViewSelectorPivotMenu: string,

/**
 * Either "True" or "False"
 */
RenderViewSelectorPivotMenuAsync: string,

/**
 * Query string parameters that specify GUID of the current view and the current root folder
 */
RootFolderParam: string,
SelectedID: string,
ShowWebPart: string,

/**
 * Either "1" or undefined.
 */
StrikeThroughOnCompletedEnabled: string,

/**
 * Either "0" or "1"
 */
TabularView: string,
Toolbar: string,
UIVersion: string,
Userid: string,
UserVanilla: any,

/**
 * Server relative path to "/_layouts/userdisp.aspx" in the current web
 */
UserDispUrl: string,

/**
 * Either "1" or ""
 */
UseParentHierarchy: string,

/**
 * Guid of the view
 */
SP$View: string,

/**
 * JSON string
 */
ViewSelectorPivotMenuOptions: string,

/**
 * Query string parameters that specify current root folder (RootFolder) and folder content type id (FolderCTID)
 */
ViewSelector_ViewParameters: string
} & SPClientTemplates$ListSchema


declare interface SPClientTemplates$ListData_InView {
FilterLink: string,
FilterFields: string,
FirstRow: number,

/**
 * Either "0" or "1"
 */
ForceNoHierarchy: string,
HierarchyHasIndention: string,

/**
 * Link to the previous page (not defined if not available)
 */
PrevHref: string,

/**
 * Link to the next page  (not defined if not available)
 */
NextHref: string,
SortField: string,
SortDir: string,
LastRow: number,
Row: SPClientTemplates$Item[]
} 

declare type SPClientTemplates$RenderContext_GroupInView = {
CurrentGroupIdx: number,
CurrentGroup: SP$Group,
CurrentItems: SPClientTemplates$Item[]
} & SPClientTemplates$RenderContext_InView


declare type SPClientTemplates$RenderContext_InView = {
AllowCreateFolder: boolean,
AllowGridMode: boolean,
SP$BasePermissions: {
[PermissionName: string]: boolean
},
bInitialRender: boolean,
CanShareLinkForNewDocument: boolean,
CascadeDeleteWarningMessage: string,
clvp: HTMLElement,
ContentTypesEnabled: boolean,
ctxId: number,
ctxType: any,
CurrentUserId: number,
CurrentUserIsSiteAdmin: boolean,
LastSelectedItemIID: any,
dictSel: any,

/**
 * Absolute path for the list display form
 */
displayFormUrl: string,

/**
 * Absolute path for the list edit form
 */
editFormUrl: string,
EnableMinorVersions: boolean,
ExternalDataList: boolean,
enteringGridMode: boolean,
existingServerFilterHash: any,
HasRelatedCascadeLists: number,
heroId: string,
HttpPath: string,
HttpRoot: string,
imagesPath: string,
inGridFullRender: any,
inGridMode: boolean,
IsAppWeb: boolean,
IsClientRendering: boolean,
isForceCheckout: boolean,
isModerated: boolean,
isPortalTemplate: any,
isWebEditorPreview: number,
isVersions: number,
isXslView: boolean,
LastRowIndexSelected: any,
LastSelectableRowIdx: any,
LastSelectedItemId: any,
leavingGridMode: boolean,
listBaseType: number,
ListData: SPClientTemplates$ListData_InView,
ListDataJSONItemsKey: string,

/**
 * Guid of the list
 */
listName: string,
SPClientTemplates$ListSchema: SPClientTemplates$ListSchema_InView,
listTemplate: string,
ListTitle: string,
listUrlDir: string,
loadingAsyncData: boolean,
ModerationStatus: number,
NavigateForFormsPages: boolean,

/**
 * Absolute path for the list new form
 */
newFormUrl: string,
NewWOPIDocumentEnabled: any,
NewWOPIDocumentUrl: any,
noGroupCollapse: boolean,
OfficialFileName: string,
OfficialFileNames: string,
Overrides$overrideDeleteConfirmation: string,
overrideFilterQstring: string,
PortalUrl: string,
queryString: any,
recursiveView: boolean,

/**
 * either 1 or 0
 */
RecycleBinEnabled: number,
RegionalSettingsTimeZoneBias: string,
rootFolder: string,
rootFolderForDisplay: any,
RowFocusTimerID: any,
SelectAllCbx: any,
SendToLocationName: string,
SendToLocationUrl: string,
serverUrl: any,
SiteTitle: string,
StateInitDone: boolean,
TableCbxFocusHandler: any,
TableMouseOverHandler: any,
TotalListItems: number,
verEnabled: number,

/**
 * Guid of the view.
 */
view: string,
viewTitle: string,
WorkflowAssociated: boolean,
wpq: string,
WriteSecurity: string
} & SPClientTemplates$RenderContext


declare type SPClientTemplates$RenderContext_ItemInView = {
CurrentItem: SPClientTemplates$Item,
CurrentItemIdx: number
} & SPClientTemplates$RenderContext_InView


declare type SPClientTemplates$RenderContext_FieldInView = {

/**
 * If in grid mode (context.inGridMode == true), cast to FieldSchema_InForm, otherwise cast to FieldSchema_InView
 */
CurrentFieldSchema: SPClientTemplates$FieldSchema_InForm | SPClientTemplates$FieldSchema_InView,
CurrentFieldValue: any,
FieldControlsModes: {
[fieldInternalName: string]: SPClientTemplates$ClientControlMode
},
FormContext: SPClientTemplates$ClientFormContext,
FormUniqueId: string
} & SPClientTemplates$RenderContext_ItemInView


declare interface SPClientTemplates$Item {
[fieldInternalName: string]: any
} 

declare interface SPClientTemplates$Group {
Items: SPClientTemplates$Item[]
} 

declare type SPClientTemplates$RenderCallback = (ctx: SPClientTemplates$RenderContext) => void;

declare interface SPClientTemplates$RenderContext {
BaseViewID?: number,
SP$ControlMode?: SPClientTemplates$ClientControlMode,
CurrentCultureName?: string,
CurrentLanguage?: number,
CurrentSelectedItems?: any,
CurrentUICultureName?: string,
SP$ListTemplateType?: number,
OnPostRender?: SPClientTemplates$RenderCallback | SPClientTemplates$RenderCallback[],
OnPreRender?: SPClientTemplates$RenderCallback | SPClientTemplates$RenderCallback[],
onRefreshFailed?: any,
RenderBody?: (renderContext: SPClientTemplates$RenderContext) => string,
RenderFieldByName?: (renderContext: SPClientTemplates$RenderContext, fieldName: string) => string,
RenderFields?: (renderContext: SPClientTemplates$RenderContext) => string,
RenderFooter?: (renderContext: SPClientTemplates$RenderContext) => string,
RenderGroups?: (renderContext: SPClientTemplates$RenderContext) => string,
RenderHeader?: (renderContext: SPClientTemplates$RenderContext) => string,
RenderItems?: (renderContext: SPClientTemplates$RenderContext) => string,
RenderView?: (renderContext: SPClientTemplates$RenderContext) => string,
SiteClientTag?: string,
SPClientTemplates$Templates?: SPClientTemplates$Templates
} 


/**
 * Must return null in order to fall back to a more common template or to a system default template
 */
declare type SPClientTemplates$SingleTemplateCallback = (renderContext: SPClientTemplates$RenderContext_InView) => string;


/**
 * Must return null in order to fall back to a more common template or to a system default template
 */
declare type SPClientTemplates$GroupCallback = (renderContext: SPClientTemplates$RenderContext_GroupInView) => string;


/**
 * Must return null in order to fall back to a more common template or to a system default template
 */
declare type SPClientTemplates$ItemCallback = (renderContext: SPClientTemplates$RenderContext) => string;


/**
 * Must return null in order to fall back to a more common template or to a system default template
 */
declare type SPClientTemplates$FieldCallback = (renderContext: SPClientTemplates$RenderContext) => string;


/**
 * Must return null in order to fall back to a more common template or to a system default template
 */
declare type SPClientTemplates$FieldInFormCallback = (renderContext: SPClientTemplates$RenderContext_FieldInForm) => string;


/**
 * Must return null in order to fall back to a more common template or to a system default template
 */
declare type SPClientTemplates$FieldInViewCallback = (renderContext: SPClientTemplates$RenderContext_FieldInView) => string;

declare interface SPClientTemplates$FieldTemplateOverrides {

/**
 * Defines templates for rendering the field on a display form.
 */
DisplayForm?: SPClientTemplates$FieldInFormCallback,

/**
 * Defines templates for rendering the field on an edit form.
 */
EditForm?: SPClientTemplates$FieldInFormCallback,

/**
 * Defines templates for rendering the field on a new form.
 */
NewForm?: SPClientTemplates$FieldInFormCallback,

/**
 * Defines templates for rendering the field on a list view.
 */
SP$View?: SPClientTemplates$FieldInViewCallback
} 

declare interface SPClientTemplates$FieldTemplates {
[fieldInternalName: string]: SPClientTemplates$FieldCallback
} 

declare interface SPClientTemplates$Templates {
SP$View?: SPClientTemplates$RenderCallback | string,
Body?: SPClientTemplates$RenderCallback | string,

/**
 * Defines templates for rendering groups (aggregations).
 */
SPClientTemplates$Group?: SPClientTemplates$GroupCallback | string,

/**
 * Defines templates for list items rendering.
 */
SPClientTemplates$Item?: SPClientTemplates$ItemCallback | string,

/**
 * Defines template for rendering list view header.
 * Can be either string or SingleTemplateCallback
 */
IStyleType$Header?: SPClientTemplates$SingleTemplateCallback | string,

/**
 * Defines template for rendering list view footer.
 * Can be either string or SingleTemplateCallback
 */
Footer?: SPClientTemplates$SingleTemplateCallback | string,

/**
 * Defines templates for fields rendering. The field is specified by it's internal name.
 */
Fields?: SPClientTemplates$FieldTemplates
} 

declare interface SPClientTemplates$FieldTemplateMap {
[fieldInternalName: string]: SPClientTemplates$FieldTemplateOverrides
} 

declare interface SPClientTemplates$TemplateOverrides {
SP$View?: SPClientTemplates$RenderCallback | string,
Body?: SPClientTemplates$RenderCallback | string,

/**
 * Defines templates for rendering groups (aggregations).
 */
SPClientTemplates$Group?: SPClientTemplates$GroupCallback | string,

/**
 * Defines templates for list items rendering.
 */
SPClientTemplates$Item?: SPClientTemplates$ItemCallback | string,

/**
 * Defines template for rendering list view header.
 * Can be either string or SingleTemplateCallback
 */
IStyleType$Header?: SPClientTemplates$SingleTemplateCallback | string,

/**
 * Defines template for rendering list view footer.
 * Can be either string or SingleTemplateCallback
 */
Footer?: SPClientTemplates$SingleTemplateCallback | string,

/**
 * Defines templates for fields rendering. The field is specified by it's internal name.
 */
Fields?: SPClientTemplates$FieldTemplateMap
} 

declare interface SPClientTemplates$TemplateOverridesOptions {

/**
 * Template overrides
 */
SPClientTemplates$Templates?: SPClientTemplates$TemplateOverrides,

/**
 * Callbacks called before rendering starts. Can be function (ctx: RenderContext) => void or array of functions.
 */
OnPreRender?: SPClientTemplates$RenderCallback | SPClientTemplates$RenderCallback[],

/**
 * Callbacks called after rendered html inserted into DOM. Can be function (ctx: RenderContext) => void or array of functions.
 */
OnPostRender?: SPClientTemplates$RenderCallback | SPClientTemplates$RenderCallback[],

/**
 * View style (SPView.StyleID) for which the templates should be applied.
 * If not defined, the templates will be applied only to default view style.
 */
ViewStyle?: number,

/**
 * List template type (SPList.BaseTemplate) for which the template should be applied.
 * If not defined, the templates will be applied to all lists.
 */
SP$ListTemplateType?: number,

/**
 * Base view ID (SPView.BaseViewID) for which the template should be applied.
 * If not defined, the templates will be applied to all views.
 */
BaseViewID?: number | string
} 

declare class SPClientTemplates$TemplateManager  {
static RegisterTemplateOverrides(renderCtx: SPClientTemplates$TemplateOverridesOptions): void;
static GetTemplates(renderCtx: SPClientTemplates$RenderContext): SPClientTemplates$Templates
}

declare interface SPClientTemplates$ClientUserValue {
lookupId: number,
lookupValue: string,
displayStr: string,
email: string,
sip: string,
title: string,
picture: string,
department: string,
jobTitle: string
} 

declare interface SPClientTemplates$ClientLookupValue {
LookupId: number,
LookupValue: string
} 

declare interface SPClientTemplates$ClientUrlValue {
URL: string,
Description: string
} 

declare class SPClientTemplates$Utility  {
static ComputeRegisterTypeInfo(renderCtx: SPClientTemplates$TemplateOverridesOptions): any;
static ControlModeToString(mode: SPClientTemplates$SPClientTemplates$ClientControlMode): string;
static FileSystemObjectTypeToString(
fileSystemObjectType: SPClientTemplates$SPClientTemplates$FileSystemObjectType): string;
static ChoiceFormatTypeToString(
fileSystemObjectType: SPClientTemplates$SPClientTemplates$ChoiceFormatType): string;
static RichTextModeToString(fileSystemObjectType: SPClientTemplates$SPClientTemplates$RichTextMode): string;
static IsValidControlMode(mode: number): boolean;

/**
 * Removes leading and trailing spaces
 */
static Trim(str: string): string;

/**
 * Creates SP.ClientContext based on the specified Web URL. If the SP.Runtime.js script is not loaded, returns null
 */
static InitContext(webUrl: string): SP$SP$ClientContext;
static GetControlOptions(control: HTMLElement): any;
static TryParseInitialUserValue(userStr: string): SPClientTemplates$ClientUserValue[];

/**
 * Tries to resolve user names from string. Pushes either ClientUserValue (if resolved successfully) or original string (if not) to the resulting array.
 */
static TryParseUserControlValue(userStr: string, separator: string): any[];
static GetPropertiesFromPageContextInfo(context: SPClientTemplates$RenderContext): void;

/**
 * Replaces tokens "~site/", "~sitecollection/", "~sitecollectionmasterpagegallery", "{lcid}", "{locale}" and "{siteclienttag}" with appropriate context values
 */
static ReplaceUrlTokens(tokenUrl: string): string;
static ParseLookupValue(valueStr: string): SPClientTemplates$ClientLookupValue;
static ParseMultiLookupValues(valueStr: string): SPClientTemplates$ClientLookupValue[];

/**
 * Represents lookup values array in some strange format
 */
static BuildLookupValuesAsString(
choiceArray: SPClientTemplates$ClientLookupValue[],
isMultiLookup: boolean,
setGroupDesc: boolean): string;
static ParseURLValue(value: string): SPClientTemplates$ClientUrlValue;
static GetFormContextForCurrentField(
context: SPClientTemplates$RenderContext_Form): SPClientTemplates$ClientFormContext;

/**
 * Returns ";#"
 */
static UserLookupDelimitString: string;

/**
 * Returns ";#"
 */
static UserMultiValueDelimitString: string
}

declare class SPClientTemplates$ClientFormContext  {
fieldValue: any;
fieldSchema: SPClientTemplates$SPClientTemplates$FieldSchema_InForm;
fieldName: string;
controlMode: number;
webAttributes: {
AllowScriptableWebParts: boolean,
CurrentUserId: number,
EffectivePresenceEnabled: boolean,
LCID: string,
PermissionCustomizePages: boolean,
WebUrl: string
};
itemAttributes: {
ExternalListItem: boolean,
FsObjType: number,
Id: number,
Url: string
};
listAttributes: {
SP$BaseType: number,
DefaultItemOpen: number,
Direction: string,
EnableVesioning: boolean,
Id: string
};
registerInitCallback(fieldname: string, callback: () => void): void;
registerFocusCallback(fieldname: string, callback: () => void): void;
registerValidationErrorCallback(fieldname: string, callback: (error: any) => void): void;
registerGetValueCallback(fieldname: string, callback: () => any): void;
updateControlValue(fieldname: string, value: any): void;
registerClientValidator(
fieldname: string,
validator: SPClientForms$ClientValidation.ClientValidation$ValidatorSet): void;
registerHasValueChangedCallback(fieldname: string, callback: (eventArg?: any) => void): void
}
	declare function GenerateIID(
renderCtx: SPClientTemplates$SPClientTemplates$RenderContext_ItemInView): string

	declare function GenerateIIDForListItem(
renderCtx: SPClientTemplates$SPClientTemplates$RenderContext_InView,
listItem: SPClientTemplates$SPClientTemplates$Item): string

	declare function SPFormControl_AppendValidationErrorMessage(nodeId: string, errorResult: any): void

	declare function CoreRender(template: any, context: any): string

	declare class ClientValidation$ValidationResult  {
constructor(hasErrors: boolean, errorMsg: string): this
}

declare class ClientValidation$ValidatorSet  {
RegisterValidator(validator: ClientValidation$IValidator): void
}

declare interface ClientValidation$IValidator {
Validate(value: any): ClientValidation$ValidationResult
} 

declare class ClientValidation$RequiredValidator mixins ClientValidation$IValidator {
Validate(value: any): ClientValidation$ValidationResult
}

declare class ClientValidation$RequiredFileValidator mixins ClientValidation$IValidator {
Validate(value: any): ClientValidation$ValidationResult
}

declare class ClientValidation$RequiredRichTextValidator mixins ClientValidation$IValidator {
Validate(value: any): ClientValidation$ValidationResult
}

declare class ClientValidation$MaxLengthUrlValidator mixins ClientValidation$IValidator {
Validate(value: any): ClientValidation$ValidationResult
}

declare  class SPClientForms$FormManagerEvents {
  constructor(...args: empty): mixed;
static +Event_OnControlValueChanged: Class<SPClientForms$FormManagerEvents__Event_OnControlValueChanged> & SPClientForms$FormManagerEvents__Event_OnControlValueChanged & 0;// 0
static +Event_OnControlInitializedCallback: Class<SPClientForms$FormManagerEvents__Event_OnControlInitializedCallback> & SPClientForms$FormManagerEvents__Event_OnControlInitializedCallback & 1;// 1
static +Event_OnControlFocusSetCallback: Class<SPClientForms$FormManagerEvents__Event_OnControlFocusSetCallback> & SPClientForms$FormManagerEvents__Event_OnControlFocusSetCallback & 2;// 2
static +Event_GetControlValueCallback: Class<SPClientForms$FormManagerEvents__Event_GetControlValueCallback> & SPClientForms$FormManagerEvents__Event_GetControlValueCallback & 3;// 3
static +Event_OnControlValidationError: Class<SPClientForms$FormManagerEvents__Event_OnControlValidationError> & SPClientForms$FormManagerEvents__Event_OnControlValidationError & 4;// 4
static +Event_RegisterControlValidator: Class<SPClientForms$FormManagerEvents__Event_RegisterControlValidator> & SPClientForms$FormManagerEvents__Event_RegisterControlValidator & 5;// 5
static +Event_GetHasValueChangedCallback: Class<SPClientForms$FormManagerEvents__Event_GetHasValueChangedCallback> & SPClientForms$FormManagerEvents__Event_GetHasValueChangedCallback & 6;// 6

}

declare class SPClientForms$FormManagerEvents__Event_OnControlValueChanged mixins SPClientForms$FormManagerEvents {}
declare class SPClientForms$FormManagerEvents__Event_OnControlInitializedCallback mixins SPClientForms$FormManagerEvents {}
declare class SPClientForms$FormManagerEvents__Event_OnControlFocusSetCallback mixins SPClientForms$FormManagerEvents {}
declare class SPClientForms$FormManagerEvents__Event_GetControlValueCallback mixins SPClientForms$FormManagerEvents {}
declare class SPClientForms$FormManagerEvents__Event_OnControlValidationError mixins SPClientForms$FormManagerEvents {}
declare class SPClientForms$FormManagerEvents__Event_RegisterControlValidator mixins SPClientForms$FormManagerEvents {}
declare class SPClientForms$FormManagerEvents__Event_GetHasValueChangedCallback mixins SPClientForms$FormManagerEvents {}


declare class SPClientForms$ClientForm  {
constructor(qualifier: string): this;
RenderClientForm(): void;
SubmitClientForm(): boolean;
NotifyControlEvent(
eventName: SPClientForms$FormManagerEvents,
fldName: string,
eventArg: any): void
}

declare class SPClientForms$ClientFormManager  {
static GetClientForm(qualifier: string): SPClientForms$ClientForm;
static RegisterClientForm(qualifier: string): void;
static SubmitClientForm(qualifier: string): boolean
}
	declare class SPMgr  {
NewGroup(listItem: {
[name: string]: any
}, fieldName: string): boolean;
RenderHeader(
renderCtx: SPClientTemplates$SPClientTemplates$RenderContext,
field: SPClientTemplates$SPClientTemplates$FieldSchema): string;
RenderField(
renderCtx: SPClientTemplates$SPClientTemplates$RenderContext,
field: SPClientTemplates$SPClientTemplates$FieldSchema,
listItem: {
[name: string]: any
},
listSchema: SPClientTemplates$SPClientTemplates$ListSchema): string;
RenderFieldByName(
renderCtx: SPClientTemplates$SPClientTemplates$RenderContext,
fieldName: string,
listItem: {
[name: string]: any
},
listSchema: SPClientTemplates$SPClientTemplates$ListSchema): string
}
	declare var spMgr: SPMgr;
	declare function SPField_FormDisplay_Default(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPField_FormDisplay_DefaultNoEncode(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPField_FormDisplay_Empty(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldText_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldNumber_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldBoolean_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldNote_Display(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldNote_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldFile_Display(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldFile_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldChoice_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldChoice_Dropdown_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldChoice_Radio_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldMultiChoice_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldDateTime_Display(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldDateTime_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldUrl_Display(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldUrl_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldUser_Display(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldUserMulti_Display(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPClientPeoplePickerCSRTemplate(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldLookup_Display(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldLookup_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldLookupMulti_Edit(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare function SPFieldAttachments_Default(ctx: SPClientTemplates$SPClientTemplates$RenderContext_FieldInForm): string

	declare  class SPAnimation$Attribute {
  constructor(...args: empty): mixed;
static +PositionX: Class<SPAnimation$Attribute__PositionX> & SPAnimation$Attribute__PositionX & 0;// 0
static +PositionY: Class<SPAnimation$Attribute__PositionY> & SPAnimation$Attribute__PositionY & 1;// 1
static +Height: Class<SPAnimation$Attribute__Height> & SPAnimation$Attribute__Height & 2;// 2
static +Width: Class<SPAnimation$Attribute__Width> & SPAnimation$Attribute__Width & 3;// 3
static +Opacity: Class<SPAnimation$Attribute__Opacity> & SPAnimation$Attribute__Opacity & 4;// 4

}

declare class SPAnimation$Attribute__PositionX mixins SPAnimation$Attribute {}
declare class SPAnimation$Attribute__PositionY mixins SPAnimation$Attribute {}
declare class SPAnimation$Attribute__Height mixins SPAnimation$Attribute {}
declare class SPAnimation$Attribute__Width mixins SPAnimation$Attribute {}
declare class SPAnimation$Attribute__Opacity mixins SPAnimation$Attribute {}


declare  class SPAnimation$ID {
  constructor(...args: empty): mixed;
static +Basic_Show: Class<SPAnimation$ID__Basic_Show> & SPAnimation$ID__Basic_Show & 0;// 0
static +Basic_SlowShow: Class<SPAnimation$ID__Basic_SlowShow> & SPAnimation$ID__Basic_SlowShow & 1;// 1
static +Basic_Fade: Class<SPAnimation$ID__Basic_Fade> & SPAnimation$ID__Basic_Fade & 2;// 2
static +Basic_Move: Class<SPAnimation$ID__Basic_Move> & SPAnimation$ID__Basic_Move & 3;// 3
static +Basic_Size: Class<SPAnimation$ID__Basic_Size> & SPAnimation$ID__Basic_Size & 4;// 4
static +Content_SlideInFadeInRight: Class<SPAnimation$ID__Content_SlideInFadeInRight> & SPAnimation$ID__Content_SlideInFadeInRight & 5;// 5
static +Content_SlideInFadeInRightInc: Class<SPAnimation$ID__Content_SlideInFadeInRightInc> & SPAnimation$ID__Content_SlideInFadeInRightInc & 6;// 6
static +Content_SlideOutFadeOutRight: Class<SPAnimation$ID__Content_SlideOutFadeOutRight> & SPAnimation$ID__Content_SlideOutFadeOutRight & 7;// 7
static +Content_SlideInFadeInLeft: Class<SPAnimation$ID__Content_SlideInFadeInLeft> & SPAnimation$ID__Content_SlideInFadeInLeft & 8;// 8
static +Content_SlideInFadeInLeftInc: Class<SPAnimation$ID__Content_SlideInFadeInLeftInc> & SPAnimation$ID__Content_SlideInFadeInLeftInc & 9;// 9
static +SmallObject_SlideInFadeInTop: Class<SPAnimation$ID__SmallObject_SlideInFadeInTop> & SPAnimation$ID__SmallObject_SlideInFadeInTop & 10;// 10
static +SmallObject_SlideInFadeInLeft: Class<SPAnimation$ID__SmallObject_SlideInFadeInLeft> & SPAnimation$ID__SmallObject_SlideInFadeInLeft & 11;// 11
static +Test_Instant: Class<SPAnimation$ID__Test_Instant> & SPAnimation$ID__Test_Instant & 12;// 12
static +Test_Hold: Class<SPAnimation$ID__Test_Hold> & SPAnimation$ID__Test_Hold & 13;// 13
static +Basic_Opacity: Class<SPAnimation$ID__Basic_Opacity> & SPAnimation$ID__Basic_Opacity & 14;// 14
static +Basic_QuickShow: Class<SPAnimation$ID__Basic_QuickShow> & SPAnimation$ID__Basic_QuickShow & 15;// 15
static +Basic_QuickFade: Class<SPAnimation$ID__Basic_QuickFade> & SPAnimation$ID__Basic_QuickFade & 16;// 16
static +Content_SlideInFadeInGeneric: Class<SPAnimation$ID__Content_SlideInFadeInGeneric> & SPAnimation$ID__Content_SlideInFadeInGeneric & 17;// 17
static +Basic_StrikeThrough: Class<SPAnimation$ID__Basic_StrikeThrough> & SPAnimation$ID__Basic_StrikeThrough & 18;// 18
static +SmallObject_SlideInFadeInBottom: Class<SPAnimation$ID__SmallObject_SlideInFadeInBottom> & SPAnimation$ID__SmallObject_SlideInFadeInBottom & 19;// 19
static +SmallObject_SlideOutFadeOutBottom: Class<SPAnimation$ID__SmallObject_SlideOutFadeOutBottom> & SPAnimation$ID__SmallObject_SlideOutFadeOutBottom & 20;// 20
static +Basic_QuickSize: Class<SPAnimation$ID__Basic_QuickSize> & SPAnimation$ID__Basic_QuickSize & 21;// 21

}

declare class SPAnimation$ID__Basic_Show mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_SlowShow mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_Fade mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_Move mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_Size mixins SPAnimation$ID {}
declare class SPAnimation$ID__Content_SlideInFadeInRight mixins SPAnimation$ID {}
declare class SPAnimation$ID__Content_SlideInFadeInRightInc mixins SPAnimation$ID {}
declare class SPAnimation$ID__Content_SlideOutFadeOutRight mixins SPAnimation$ID {}
declare class SPAnimation$ID__Content_SlideInFadeInLeft mixins SPAnimation$ID {}
declare class SPAnimation$ID__Content_SlideInFadeInLeftInc mixins SPAnimation$ID {}
declare class SPAnimation$ID__SmallObject_SlideInFadeInTop mixins SPAnimation$ID {}
declare class SPAnimation$ID__SmallObject_SlideInFadeInLeft mixins SPAnimation$ID {}
declare class SPAnimation$ID__Test_Instant mixins SPAnimation$ID {}
declare class SPAnimation$ID__Test_Hold mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_Opacity mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_QuickShow mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_QuickFade mixins SPAnimation$ID {}
declare class SPAnimation$ID__Content_SlideInFadeInGeneric mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_StrikeThrough mixins SPAnimation$ID {}
declare class SPAnimation$ID__SmallObject_SlideInFadeInBottom mixins SPAnimation$ID {}
declare class SPAnimation$ID__SmallObject_SlideOutFadeOutBottom mixins SPAnimation$ID {}
declare class SPAnimation$ID__Basic_QuickSize mixins SPAnimation$ID {}


declare class SPAnimation$Settings  {
static DisableAnimation(): void;
static DisableSessionAnimation(): void;
static IsAnimationEnabled(): boolean
}

declare class SPAnimation$State  {
SetAttribute(attributeId: SPAnimation$Attribute, value: number): void;
GetAttribute(attributeId: SPAnimation$Attribute): number;
GetDataIndex(attributeId: SPAnimation$Attribute): number
}

declare class SPAnimation$Object  {
constructor(animationID: SPAnimation$ID, delay: number, element: HTMLElement | HTMLElement[], finalState: SPAnimation$State, finishFunc?: (data: any) => void, data?: any): this;
RunAnimation(): void
}
	declare class SPAnimationUtility$BasicAnimator  {
static FadeIn(element: HTMLElement, finishFunc?: (data: any) => void, data?: any): void;
static FadeOut(element: HTMLElement, finishFunc?: (data: any) => void, data?: any): void;
static Move(
element: HTMLElement,
posX: number,
posY: number,
finishFunc?: (data: any) => void,
data?: any): void;
static StrikeThrough(
element: HTMLElement,
strikeThroughWidth: number,
finishFunc?: (data: any) => void,
data?: any): void;
static Resize(
element: HTMLElement,
newHeight: number,
newWidth: number,
finishFunc?: (data: any) => void,
data?: any): void;
static CommonResize(
element: HTMLElement,
newHeight: number,
newWidth: number,
finishFunc: (data: any) => void,
data: any,
animationId: SPAnimation$SPAnimation$ID): void;
static QuickResize(
element: HTMLElement,
newHeight: number,
newWidth: number,
finishFunc?: (data: any) => void,
data?: any): void;
static ResizeContainerAndFillContent(
element: HTMLElement,
newHeight: number,
newWidth: number,
finishFunc: () => void,
fAddToEnd: boolean): void;
static GetWindowScrollPosition(): {
x: number,
y: number
};
static GetLeftOffset(element: HTMLElement): number;
static GetTopOffset(element: HTMLElement): number;
static GetRightOffset(element: HTMLElement): number;
static PositionElement(
element: HTMLElement,
topValue: number,
leftValue: number,
heightValue: number,
widthValue: number): void;
static PositionAbsolute(element: HTMLElement): void;
static PositionRelative(element: HTMLElement): void;
static PositionRelativeExact(
element: HTMLElement,
topValue: number,
leftValue: number,
heightValue: number,
widthValue: number): void;
static PositionAbsoluteExact(
element: HTMLElement,
topValue: number,
leftValue: number,
heightValue: number,
widthValue: number): void;
static IsPositioned(element: HTMLElement): boolean
}
	declare interface IEnumerator<T> {
get_current(): T,
moveNext(): boolean,
reset(): void
} 
	declare interface IEnumerable<T> {
getEnumerator(): IEnumerator<T>
} 
	
/**
 * Contains information common to all types of search queries.
 */
declare class Query$Query mixins SP$SP$ClientObject {
get_blockDedupeMode: () => number;
set_blockDedupeMode: (value: number) => void;
get_bypassResultTypes: () => boolean;
set_bypassResultTypes: (value: boolean) => void;
get_clientType: () => string;
set_clientType: (value: string) => void;
get_culture: () => number;
set_culture: (value: number) => void;
get_desiredSnippetLength: () => number;
set_desiredSnippetLength: (value: number) => void;
get_enableInterleaving: () => boolean;
set_enableInterleaving: (value: boolean) => void;
get_enableNicknames: () => boolean;
set_enableNicknames: (value: boolean) => void;
get_enableOrderingHitHighlightedProperty: () => boolean;
set_enableOrderingHitHighlightedProperty: (value: boolean) => void;
get_enablePhonetic: () => boolean;
set_enablePhonetic: (value: boolean) => void;
get_enableQueryRules: () => boolean;
set_enableQueryRules: (value: boolean) => void;
get_enableStemming: () => boolean;
set_enableStemming: (value: boolean) => void;
get_generateBlockRankLog: () => boolean;
set_generateBlockRankLog: (value: boolean) => void;
get_hitHighlightedMultivaluePropertyLimit: () => number;
set_hitHighlightedMultivaluePropertyLimit: (value: number) => void;
get_hitHighlightedProperties: () => Query$StringCollection;
get_ignoreSafeQueryPropertiesTemplateUrl: () => boolean;
set_ignoreSafeQueryPropertiesTemplateUrl: (value: boolean) => void;
get_impressionID: () => string;
set_impressionID: (value: string) => void;
get_maxSnippetLength: () => number;
set_maxSnippetLength: (value: number) => void;
get_personalizationData: () => Query$QueryPersonalizationData;
set_personalizationData: (value: Query$QueryPersonalizationData) => void;
get_processBestBets: () => boolean;
set_processBestBets: (value: boolean) => void;
get_processPersonalFavorites: () => boolean;
set_processPersonalFavorites: (value: boolean) => void;
get_queryTag: () => string;
set_queryTag: (value: string) => void;
get_queryTemplate: () => string;
set_queryTemplate: (value: string) => void;
get_queryTemplateParameters: () => {
[key: string]: boolean
};
get_queryText: () => string;
set_queryText: (value: string) => void;
get_rankingModelId: () => string;
set_rankingModelId: (value: string) => void;
get_resultsUrl: () => string;
set_resultsUrl: (value: string) => void;
get_rowLimit: () => number;
set_rowLimit: (value: number) => void;
get_rowsPerPage: () => number;
set_rowsPerPage: (value: number) => void;
get_safeQueryPropertiesTemplateUrl: () => string;
set_safeQueryPropertiesTemplateUrl: (value: string) => void;
get_showPeopleNameSuggestions: () => boolean;
set_showPeopleNameSuggestions: (value: boolean) => void;
get_sourceId: () => SP$SP$Guid;
set_sourceId: (value: SP$SP$Guid) => void;
get_startRow: () => number;
set_startRow: (value: number) => void;
get_summaryLength: () => number;
set_summaryLength: (value: number) => void;
get_timeout: () => number;
set_timeout: (value: number) => void;
get_totalRowsExactMinimum: () => number;
set_totalRowsExactMinimum: (value: number) => void;
get_trimDuplicates: () => boolean;
set_trimDuplicates: (value: boolean) => void;
get_uiLanguage: () => number;
set_uiLanguage: (value: number) => void;
getQuerySuggestionsWithResults: (
iNumberOfQuerySuggestions: number,
iNumberOfResultSuggestions: number,
fPreQuerySuggestions: boolean,
fHitHighlighting: boolean,
fCapitalizeFirstLetters: boolean,
fPrefixMatchAllTerms: boolean) => Query$QuerySuggestionResults
}


/**
 * Contains information about a keyword based search query.
 */
declare class Query$KeywordQuery mixins Query$Query {
constructor(context: SP$SP$ClientContext): this;
get_collapseSpecification: () => string;
set_collapseSpecification: (value: string) => void;
get_enableSorting: () => boolean;
set_enableSorting: (value: boolean) => void;
get_hiddenConstraints: () => string;
set_hiddenConstraints: (value: string) => void;
get_properties: () => Query$KeywordQueryProperties;
get_refinementFilters: () => Query$StringCollection;
set_refinementFilters: (value: Query$StringCollection) => void;
get_refiners: () => string;
set_refiners: (value: string) => void;
get_reorderingRules: () => Query$ReorderingRuleCollection;
set_reorderingRules: (value: Query$ReorderingRuleCollection) => void;

/**
 * Specifies the list of managed properties to be returned for each search result.
 */
get_selectProperties: () => Query$StringCollection;
get_sortList: () => Query$SortCollection;
get_trimDuplicatesIncludeId: () => number;
set_trimDuplicatesIncludeId: (value: number) => void
}


/**
 * Executes queries against a search server.
 */
declare class Query$SearchExecutor mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientContext): this;

/**
 * Runs a query.
 */
executeQuery: (query: Query$Query) => SP$SP$JsonObjectResult;
executeQueries: (
queryIds: string[],
queries: Query$Query[],
handleExceptions: boolean) => SP$SP$JsonObjectResult;
recordPageClick: (
pageInfo: string,
clickType: string,
blockType: number,
clickedResultId: string,
subResultIndex: number,
immediacySourceId: string,
immediacyQueryString: string,
immediacyTitle: string,
immediacyUrl: string) => void;
exportPopularQueries: (web: SP$SP$Web, sourceId: SP$SP$Guid) => SP$SP$JsonObjectResult
}

declare class Query$StringCollection mixins SP$SP$ClientObjectCollection<string> {
constructor(context: SP$SP$ClientContext): this;
itemAt(index: number): string;
get_item(index: number): string;
get_childItemType(): typeof String;
add(property: string): void;
clear(): void
}

declare class Query$QueryPersonalizationData mixins SP$SP$ClientObject {}

declare class Query$QuerySuggestionResults mixins SP$SP$ClientValueObject {
get_peopleNames: () => string[];
set_peopleNames: (value: string[]) => void;
get_personalResults: () => Query$PersonalResultSuggestion[];
set_personalResults: (value: Query$PersonalResultSuggestion[]) => void;
get_queries: () => Query$QuerySuggestionQuery[];
set_queries: (value: Query$QuerySuggestionQuery[]) => void
}

declare class Query$PersonalResultSuggestion mixins SP$SP$ClientValueObject {
get_highlightedTitle: () => string;
set_highlightedTitle: (value: string) => void;
get_isBestBet: () => boolean;
set_isBestBet: (value: boolean) => void;
get_title: () => string;
set_title: (value: string) => void;
get_url: () => string;
set_url: (value: string) => void
}

declare class Query$QuerySuggestionQuery mixins SP$SP$ClientValueObject {
get_isPersonal: () => boolean;
set_isPersonal: (value: boolean) => void;
get_query: () => string;
set_query: (value: string) => void
}

declare class Query$KeywordQueryProperties mixins SP$SP$ClientObject {
get_item: (key: string) => any;
set_item: (key: string, value: any) => void;
setQueryPropertyValue: (name: string) => Query$QueryPropertyValue;
getQueryPropertyValue: (name: string, value: Query$QueryPropertyValue) => void
}

declare  class Query$QueryPropertyValueType {
  constructor(...args: empty): mixed;
static +none: Class<Query$QueryPropertyValueType__none> & Query$QueryPropertyValueType__none & 0;// 0
static +stringType: Class<Query$QueryPropertyValueType__stringType> & Query$QueryPropertyValueType__stringType & 1;// 1
static +int32TYpe: Class<Query$QueryPropertyValueType__int32TYpe> & Query$QueryPropertyValueType__int32TYpe & 2;// 2
static +booleanType: Class<Query$QueryPropertyValueType__booleanType> & Query$QueryPropertyValueType__booleanType & 3;// 3
static +stringArrayType: Class<Query$QueryPropertyValueType__stringArrayType> & Query$QueryPropertyValueType__stringArrayType & 4;// 4
static +unSupportedType: Class<Query$QueryPropertyValueType__unSupportedType> & Query$QueryPropertyValueType__unSupportedType & 5;// 5

}

declare class Query$QueryPropertyValueType__none mixins Query$QueryPropertyValueType {}
declare class Query$QueryPropertyValueType__stringType mixins Query$QueryPropertyValueType {}
declare class Query$QueryPropertyValueType__int32TYpe mixins Query$QueryPropertyValueType {}
declare class Query$QueryPropertyValueType__booleanType mixins Query$QueryPropertyValueType {}
declare class Query$QueryPropertyValueType__stringArrayType mixins Query$QueryPropertyValueType {}
declare class Query$QueryPropertyValueType__unSupportedType mixins Query$QueryPropertyValueType {}


declare class Query$QueryPropertyValue mixins SP$SP$ClientValueObject {
get_boolVal: () => boolean;
set_boolVal: (value: boolean) => boolean;
get_intVal: () => number;
set_intVal: (value: number) => number;
get_queryPropertyValueTypeIndex: () => number;
set_queryPropertyValueTypeIndex: (value: number) => void;
get_strArray: () => string[];
set_strArray: (value: string[]) => string[];
get_strVal: () => string;
set_strVal: (value: string) => string
}

declare class Query$QueryUtility  {
static create: (name: string, val: any) => Query$QueryPropertyValue;
static getQueryPropertyValueType: (val: Query$QueryPropertyValue) => Query$QueryPropertyValueType;
static queryPropertyValueToObject: (val: Query$QueryPropertyValue) => any
}

declare type Query$ReorderingRuleCollection = {
itemAt(index: number): Query$ReorderingRule,
get_item(index: number): Query$ReorderingRule,
get_childItemType(): typeof ReorderingRule,
add(property: Query$ReorderingRule): void,
clear(): void
} & SP$SP$ClientObjectCollection<Query$ReorderingRule>


declare  class Query$ReorderingRuleMatchType {
  constructor(...args: empty): mixed;
static +resultContainsKeyword: Class<Query$ReorderingRuleMatchType__resultContainsKeyword> & Query$ReorderingRuleMatchType__resultContainsKeyword & 0;// 0
static +titleContainsKeyword: Class<Query$ReorderingRuleMatchType__titleContainsKeyword> & Query$ReorderingRuleMatchType__titleContainsKeyword & 1;// 1
static +titleMatchesKeyword: Class<Query$ReorderingRuleMatchType__titleMatchesKeyword> & Query$ReorderingRuleMatchType__titleMatchesKeyword & 2;// 2
static +urlStartsWith: Class<Query$ReorderingRuleMatchType__urlStartsWith> & Query$ReorderingRuleMatchType__urlStartsWith & 3;// 3
static +urlExactlyMatches: Class<Query$ReorderingRuleMatchType__urlExactlyMatches> & Query$ReorderingRuleMatchType__urlExactlyMatches & 4;// 4
static +contentTypeIs: Class<Query$ReorderingRuleMatchType__contentTypeIs> & Query$ReorderingRuleMatchType__contentTypeIs & 5;// 5
static +fileExtensionMatches: Class<Query$ReorderingRuleMatchType__fileExtensionMatches> & Query$ReorderingRuleMatchType__fileExtensionMatches & 6;// 6
static +resultHasTag: Class<Query$ReorderingRuleMatchType__resultHasTag> & Query$ReorderingRuleMatchType__resultHasTag & 7;// 7
static +manualCondition: Class<Query$ReorderingRuleMatchType__manualCondition> & Query$ReorderingRuleMatchType__manualCondition & 8;// 8

}

declare class Query$ReorderingRuleMatchType__resultContainsKeyword mixins Query$ReorderingRuleMatchType {}
declare class Query$ReorderingRuleMatchType__titleContainsKeyword mixins Query$ReorderingRuleMatchType {}
declare class Query$ReorderingRuleMatchType__titleMatchesKeyword mixins Query$ReorderingRuleMatchType {}
declare class Query$ReorderingRuleMatchType__urlStartsWith mixins Query$ReorderingRuleMatchType {}
declare class Query$ReorderingRuleMatchType__urlExactlyMatches mixins Query$ReorderingRuleMatchType {}
declare class Query$ReorderingRuleMatchType__contentTypeIs mixins Query$ReorderingRuleMatchType {}
declare class Query$ReorderingRuleMatchType__fileExtensionMatches mixins Query$ReorderingRuleMatchType {}
declare class Query$ReorderingRuleMatchType__resultHasTag mixins Query$ReorderingRuleMatchType {}
declare class Query$ReorderingRuleMatchType__manualCondition mixins Query$ReorderingRuleMatchType {}


declare class Query$ReorderingRule mixins SP$SP$ClientValueObject {
get_boost: () => number;
set_boost: (value: number) => void;
get_matchType: () => Query$ReorderingRuleMatchType;
set_matchType: (value: Query$ReorderingRuleMatchType) => void;
get_matchValue: () => string;
set_matchValue: (value: string) => void
}

declare type Query$SortCollection = {
itemAt(index: number): Query$Sort,
get_item(index: number): Query$Sort,
get_childItemType(): typeof Sort,
add(strProperty: string, sortDirection: Query$SortDirection): void,
clear(): void
} & SP$SP$ClientObjectCollection<Query$Sort>


declare  class Query$SortDirection {
  constructor(...args: empty): mixed;
static +ascending: Class<Query$SortDirection__ascending> & Query$SortDirection__ascending & 0;// 0
static +descending: Class<Query$SortDirection__descending> & Query$SortDirection__descending & 1;// 1
static +fqlFormula: Class<Query$SortDirection__fqlFormula> & Query$SortDirection__fqlFormula & 2;// 2

}

declare class Query$SortDirection__ascending mixins Query$SortDirection {}
declare class Query$SortDirection__descending mixins Query$SortDirection {}
declare class Query$SortDirection__fqlFormula mixins Query$SortDirection {}


declare class Query$Sort mixins SP$SP$ClientValueObject {
get_direction: () => Query$SortDirection;
set_direction: (value: Query$SortDirection) => void;
get_property: () => string;
set_property: (value: string) => void
}

declare class Query$ResultTableCollection mixins SP$SP$ClientValueObjectCollection<Query$ResultTable> {
get_item: (index: number) => Query$ResultTable;
get_elapsedTime: () => number;
set_elapsedTime: (value: number) => void;
get_properties: () => {
[key: string]: any
};
get_queryErrors: () => {
[key: string]: WebControls$WebControls$ControlMessage
};
get_queryId: () => string;
get_spellingSuggestion: () => string;
get_triggeredRules: () => SP$SP$Guid[];
initPropertiesFromJson: (parentNode: any) => void
}

declare class Query$ResultTable mixins SP$SP$ClientValueObject {
get_groupTemplateId: () => string;
get_itemTemplateId: () => string;
get_properties: () => {
[key: string]: any
};
get_queryId: () => string;
get_queryRuleId: () => string;
get_resultRows: () => Array<{
[key: string]: any
}>;
get_resultTitle: () => string;
get_resultTitleUrl: () => string;
get_rowCount: () => number;
get_tableType: () => string;
get_totalRows: () => number;
get_totalRowsIncludingDuplicates: () => number;
initPropertiesFromJson: (parentNode: any) => void
}

declare class Query$RankingLabeling mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientContext): this;
getJudgementsForQuery: (query: string) => SP$SP$JsonObjectResult;
addJudgment: (userQuery: string, url: string, labelId: number) => void;
normalizeResultUrl: (url: string) => SP$SP$JsonObjectResult
}

declare class Query$PopularQuery mixins SP$SP$ClientValueObject {
get_clickCount: () => number;
set_clickCount: (value: number) => void;
get_LCID: () => number;
set_LCID: (value: number) => void;
get_queryCount: () => number;
set_queryCount: (value: number) => void;
get_queryText: () => string;
set_queryText: (value: string) => void
}

declare class Query$QueryPropertyNames  {
static blockDedupeMode: string;
static bypassResultTypes: string;
static clientType: string;
static culture: string;
static desiredSnippetLength: string;
static enableInterleaving: string;
static enableNicknames: string;
static enableOrderingHitHighlightedProperty: string;
static enablePhonetic: string;
static enableQueryRules: string;
static enableStemming: string;
static generateBlockRankLog: string;
static hitHighlightedMultivaluePropertyLimit: string;
static ignoreSafeQueryPropertiesTemplateUrl: string;
static impressionID: string;
static maxSnippetLength: string;
static processBestBets: string;
static processPersonalFavorites: string;
static queryTag: string;
static queryTemplate: string;
static queryTemplateParameters: string;
static queryText: string;
static rankingModelId: string;
static resultsUrl: string;
static rowLimit: string;
static rowsPerPage: string;
static safeQueryPropertiesTemplateUrl: string;
static showPeopleNameSuggestions: string;
static sourceId: string;
static startRow: string;
static summaryLength: string;
static timeout: string;
static totalRowsExactMinimum: string;
static trimDuplicates: string;
static uiLanguage: string
}

declare class Query$QueryObjectPropertyNames  {
static hitHighlightedProperties: string;
static personalizationData: string
}

declare class Query$KeywordQueryPropertyNames  {
static collapseSpecification: string;
static enableSorting: string;
static hiddenConstraints: string;
static refiners: string;
static trimDuplicatesIncludeId: string
}

declare class Query$KeywordQueryObjectPropertyNames  {
static properties: string;
static refinementFilters: string;
static reorderingRules: string;
static selectProperties: string;
static sortList: string
}

declare class WebControls$ControlMessage mixins SP$SP$ClientValueObject {
get_code: () => number;
get_correlationID: () => string;
get_encodeDetails: () => boolean;
get_header: () => string;
get_level: () => Srch$MessageLevel;
get_messageDetails: () => string;
get_messageDetailsForViewers: () => string;
get_serverTypeId: () => string;
get_showForViewerUsers: () => boolean;
get_showInEditModeOnly: () => boolean;
get_stackTrace: () => string;
get_type: () => string
}

declare  class WebControls$MessageLevel {
  constructor(...args: empty): mixed;
static +information: Class<WebControls$MessageLevel__information> & WebControls$MessageLevel__information & 0;// 0
static +warning: Class<WebControls$MessageLevel__warning> & WebControls$MessageLevel__warning & 1;// 1
static +error: Class<WebControls$MessageLevel__error> & WebControls$MessageLevel__error & 2;// 2

}

declare class WebControls$MessageLevel__information mixins WebControls$MessageLevel {}
declare class WebControls$MessageLevel__warning mixins WebControls$MessageLevel {}
declare class WebControls$MessageLevel__error mixins WebControls$MessageLevel {}


declare class Administration$DocumentCrawlLog mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientContext, site: SP$SP$Site): this;
getCrawledUrls: (
getCountOnly: boolean,
maxRows: {
High: number,
Low: number
},
queryString: string,
isLike: boolean,
contentSourceID: number,
errorLevel: number,
errorID: number,
startDateTime: Date,
endDateTime: Date) => SP$SP$JsonObjectResult
}

declare class Administration$SearchObjectOwner mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientContext, lowestCurrentLevelToUse: Administration$SearchObjectLevel): this
}

declare  class Administration$SearchObjectLevel {
  constructor(...args: empty): mixed;
static +spWeb: Class<Administration$SearchObjectLevel__spWeb> & Administration$SearchObjectLevel__spWeb & 0;// 0
static +spSite: Class<Administration$SearchObjectLevel__spSite> & Administration$SearchObjectLevel__spSite & 1;// 1
static +spSiteSubscription: Class<Administration$SearchObjectLevel__spSiteSubscription> & Administration$SearchObjectLevel__spSiteSubscription & 2;// 2
static +ssa: Class<Administration$SearchObjectLevel__ssa> & Administration$SearchObjectLevel__ssa & 3;// 3

}

declare class Administration$SearchObjectLevel__spWeb mixins Administration$SearchObjectLevel {}
declare class Administration$SearchObjectLevel__spSite mixins Administration$SearchObjectLevel {}
declare class Administration$SearchObjectLevel__spSiteSubscription mixins Administration$SearchObjectLevel {}
declare class Administration$SearchObjectLevel__ssa mixins Administration$SearchObjectLevel {}


declare class Portability$SearchConfigurationPortability mixins SP$SP$ClientObject {
constructor(context: SP$SP$ClientContext): this;
get_importWarnings: () => string;
exportSearchConfiguration: (
owningScope: Administration$Administration$SearchObjectOwner) => SP$SP$JsonObjectResult;
importSearchConfiguration: (
owningScope: Administration$Administration$SearchObjectOwner,
searchConfiguration: string) => void;
deleteSearchConfiguration: (
owningScope: Administration$Administration$SearchObjectOwner,
searchConfiguration: string) => void
}

declare class Portability$SearchConfigurationPortabilityPropertyNames  {
static importWarnings: string
}

declare class Analytics$AnalyticsItemData mixins SP$SP$ClientObject {
get_lastProcessingTime: () => Date;
get_totalHits: () => number;
get_totalUniqueUsers: () => number;
getHitCountForDay: (day: Date) => number;
getUniqueUsersCountForDay: (day: Date) => number;
getHitCountForMonth: (day: Date) => number;
getUniqueUsersCountForMonth: (day: Date) => number
}

declare class Analytics$UsageAnalytics mixins SP$SP$ClientObject {
getAnalyticsItemData: <T= any>(
eventType: number,
listItem: SP$SP$ListItem<T>) => Analytics$AnalyticsItemData;
getAnalyticsItemDataForApplicationEventType: <T= any>(
appEventType: SP$SP$Guid,
listItem: SP$SP$ListItem<T>) => Analytics$AnalyticsItemData;
deleteStandardEventUsageData: (eventType: number) => void;
deleteCustomEventUsageData: (appEventTypeId: SP$SP$Guid) => void
}

declare class ReputationModel$Reputation  {
constructor(): this;
static setLike(
context: SP$SP$ClientContext,
listId: string,
itemId: number,
like: boolean): void;
static setRating(
context: SP$SP$ClientContext,
listId: string,
itemId: number,
rating: number): void
}
	declare  class SPNotifications$ContainerID {
  constructor(...args: empty): mixed;
static +Basic: Class<SPNotifications$ContainerID__Basic> & SPNotifications$ContainerID__Basic & 0;// 0
static +Status: Class<SPNotifications$ContainerID__Status> & SPNotifications$ContainerID__Status & 1;// 1

}

declare class SPNotifications$ContainerID__Basic mixins SPNotifications$ContainerID {}
declare class SPNotifications$ContainerID__Status mixins SPNotifications$ContainerID {}


declare  class SPNotifications$EventID {
  constructor(...args: empty): mixed;
static +OnShow: Class<SPNotifications$EventID__OnShow> & SPNotifications$EventID__OnShow & 0;// 0
static +OnHide: Class<SPNotifications$EventID__OnHide> & SPNotifications$EventID__OnHide & 1;// 1
static +OnDisplayNotification: Class<SPNotifications$EventID__OnDisplayNotification> & SPNotifications$EventID__OnDisplayNotification & 2;// 2
static +OnRemoveNotification: Class<SPNotifications$EventID__OnRemoveNotification> & SPNotifications$EventID__OnRemoveNotification & 3;// 3
static +OnNotificationCountChanged: Class<SPNotifications$EventID__OnNotificationCountChanged> & SPNotifications$EventID__OnNotificationCountChanged & 4;// 4

}

declare class SPNotifications$EventID__OnShow mixins SPNotifications$EventID {}
declare class SPNotifications$EventID__OnHide mixins SPNotifications$EventID {}
declare class SPNotifications$EventID__OnDisplayNotification mixins SPNotifications$EventID {}
declare class SPNotifications$EventID__OnRemoveNotification mixins SPNotifications$EventID {}
declare class SPNotifications$EventID__OnNotificationCountChanged mixins SPNotifications$EventID {}

	declare class SPStatusNotificationData  {
constructor(text: string, subText: string, imageUrl: string, sip: string): this
}
	declare function RefreshCommandUI(): void

	declare class SPClientAutoFill  {
static MenuOptionType: {
Option: number,
Footer: number,
Separator: number,
Loading: number
};
static KeyProperty: string;
static DisplayTextProperty: string;
static SubDisplayTextProperty: string;
static TitleTextProperty: string;
static MenuOptionTypeProperty: string;
static GetAutoFillObjFromInput(elmText: HTMLInputElement): SPClientAutoFill;
static GetAutoFillObjFromContainer(elmChild: HTMLElement): SPClientAutoFill;
static GetAutoFillMenuItemFromOption(elmChild: HTMLElement): HTMLElement;
constructor(elmTextId: string, elmContainerId: string, fnPopulateAutoFill: (targetElement: HTMLInputElement) => void): this;
TextElementId: string;
AutoFillContainerId: string;
AutoFillMenuId: string;
VisibleItemCount: number;
CurrentFocusOption: number;
AutoFillMinTextLength: number;
AutoFillTimeout: number;
AutoFillCallbackTimeoutID: string;
FuncOnAutoFillClose: (elmTextId: string, ojData: ISPClientAutoFillData) => void;
FuncPopulateAutoFill: (targetElement: HTMLElement) => void;
AllOptionData: {
[key: string]: ISPClientAutoFillData
};
PopulateAutoFill(
jsonObjSuggestions: ISPClientAutoFillData[],
fnOnAutoFillCloseFuncName: (elmTextId: string, objData: ISPClientAutoFillData) => void): void;
IsAutoFillOpen(): boolean;
SetAutoFillHeight(): void;
SelectAutoFillOption(elemOption: HTMLElement): void;
FocusAutoFill(): void;
BlurAutoFill(): void;
CloseAutoFill(ojData: ISPClientAutoFillData): void;
UpdateAutoFillMenuFocus(bMoveNextLink: boolean): void;
UpdateAutoFillPosition(): void
}
	declare interface ISPClientAutoFillData {
AutoFillKey?: any,
AutoFillDisplayText?: string,
AutoFillSubDisplayText?: string,
AutoFillTitleText?: string,
AutoFillMenuOptionType?: number
} 
	declare class SPClientPeoplePicker  {
static ValueName: string;
static DisplayTextName: string;
static SubDisplayTextName: string;
static DescriptionName: string;
static SIPAddressName: string;
static SuggestionsName: string;
static UnvalidatedEmailAddressKey: string;
static KeyProperty: string;
static DisplayTextProperty: string;
static SubDisplayTextProperty: string;
static TitleTextProperty: string;
static DomainProperty: string;
static SPClientPeoplePickerDict: {
[pickerIelementId: string]: SPClientPeoplePicker
};
static InitializeStandalonePeoplePicker(
clientId: string,
value: ISPClientPeoplePickerEntity[],
schema: ISPClientPeoplePickerSchema): void;
static ParseUserKeyPaste(userKey: string): string;
static GetTopLevelControl(elmChild: HTMLElement): HTMLElement;
static AugmentEntity(entity: ISPClientPeoplePickerEntity): ISPClientPeoplePickerEntity;
static AugmentEntitySuggestions(
pickerObj: SPClientPeoplePicker,
allEntities: ISPClientPeoplePickerEntity[],
mergeLocal?: boolean): ISPClientPeoplePickerEntity[];
static PickerObjectFromSubElement(elmSubElement: HTMLElement): SPClientPeoplePicker;
static TestLocalMatch(strSearchLower: string, dataEntity: ISPClientPeoplePickerEntity): boolean;
static BuildUnresolvedEntity(key: string, dispText: string): ISPClientPeoplePickerEntity;
static AddAutoFillMetaData(
pickerObj: SPClientPeoplePicker,
options: ISPClientPeoplePickerEntity[],
numOpts: number): ISPClientPeoplePickerEntity[];
static BuildAutoFillMenuItems(
pickerObj: SPClientPeoplePicker,
options: ISPClientPeoplePickerEntity[]): ISPClientPeoplePickerEntity[];
static IsUserEntity(entity: ISPClientPeoplePickerEntity): boolean;
static CreateSPPrincipalType(acctStr: string): number;
TopLevelElementId: string;
EditorElementId: string;
AutoFillElementId: string;
ResolvedListElementId: string;
InitialHelpTextElementId: string;
WaitImageId: string;
HiddenInputId: string;
AllowEmpty: boolean;
ForceClaims: boolean;
AutoFillEnabled: boolean;
AllowMultipleUsers: boolean;
OnValueChangedClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
OnUserResolvedClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
OnControlValidateClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
SP$UrlZone: SP$SP$UrlZone;
AllUrlZones: boolean;
SharePointGroupID: number;
AllowEmailAddresses: boolean;
PPMRU: SPClientPeoplePickerMRU;
UseLocalSuggestionCache: boolean;
CurrentQueryStr: string;
LatestSearchQueryStr: string;
InitialSuggestions: ISPClientPeoplePickerEntity[];
CurrentLocalSuggestions: ISPClientPeoplePickerEntity[];
CurrentLocalSuggestionsDict: ISPClientPeoplePickerEntity;
VisibleSuggestions: number;
PrincipalAccountType: string;
PrincipalAccountTypeEnum: SP$SP$Utilities.Utilities$PrincipalType;
EnabledClaimProviders: string;
SearchPrincipalSource: SP$SP$Utilities.Utilities$PrincipalSource;
ResolvePrincipalSource: SP$SP$Utilities.Utilities$PrincipalSource;
MaximumEntitySuggestions: number;
EditorWidthSet: boolean;
QueryScriptInit: boolean;
AutoFillControl: SPClientAutoFill;
TotalUserCount: number;
UnresolvedUserCount: number;
UserQueryDict: {
[index: string]: SP$SP$StringResult
};
ProcessedUserList: {
[index: string]: SPClientPeoplePickerProcessedUser
};
HasInputError: boolean;
HasServerError: boolean;
ShowUserPresence: boolean;
TerminatingCharacter: string;
UnresolvedUserElmIdToReplace: string;
WebApplicationID: SP$SP$Guid;
GetAllUserInfo(): ISPClientPeoplePickerEntity[];
SetInitialValue(entities: ISPClientPeoplePickerEntity[], initialErrorMsg?: string): void;
AddUserKeys(userKeys: string, bSearch: boolean): void;
BatchAddUserKeysOperation(allKeys: string[], numProcessed: number): void;
ResolveAllUsers(fnContinuation: () => void): void;
ExecutePickerQuery(
queryIds: string,
onSuccess: (queryId: string, result: SP$SP$StringResult) => void,
onFailure: (queryId: string, result: SP$SP$StringResult) => void,
fnContinuation: () => void): void;
AddUnresolvedUserFromEditor(bRunQuery?: boolean): void;
AddUnresolvedUser(unresolvedUserObj: ISPClientPeoplePickerEntity, bRunQuery?: boolean): void;
UpdateUnresolvedUser(results: SP$SP$StringResult, user: ISPClientPeoplePickerEntity): void;
AddPickerSearchQuery(queryStr: string): string;
AddPickerResolveQuery(queryStr: string): string;
GetPeoplePickerQueryParameters(): SP$SP$UI.ApplicationPages.ApplicationPages$ClientPeoplePickerQueryParameters;
AddProcessedUser(userObject: ISPClientPeoplePickerEntity, fResolved?: boolean): string;
DeleteProcessedUser(elmToRemove: HTMLElement): void;
OnControlValueChanged(): void;
OnControlResolvedUserChanged(): void;
EnsureAutoFillControl(): void;
ShowAutoFill(resultsTable: ISPClientAutoFillData[]): void;
FocusAutoFill(): void;
BlurAutoFill(): void;
IsAutoFillOpen(): boolean;
EnsureEditorWidth(): void;
SetFocusOnEditorEnd(): void;
ToggleWaitImageDisplay(bShowImage?: boolean): void;
SaveAllUserKeysToHiddenInput(): void;
GetCurrentEditorValue(): string;
GetControlValueAsJSObject(): ISPClientPeoplePickerEntity[];
GetAllUserKeys(): string;
GetControlValueAsText(): string;
IsEmpty(): boolean;
IterateEachProcessedUser(
fnCallback: (index: number, user: SPClientPeoplePickerProcessedUser) => void): void;
HasResolvedUsers(): boolean;
Validate(): void;
ValidateCurrentState(): void;
GetUnresolvedEntityErrorMessage(): string;
ShowErrorMessage(msg: string): void;
ClearServerError(): void;
SetServerError(): void;
OnControlValidate(): void;
SetEnabledState(bEnabled: boolean): void;
DisplayLocalSuggestions(): void;
CompileLocalSuggestions(input: string): void;
PlanningGlobalSearch(): boolean;
AddLoadingSuggestionMenuOption(): void;
ShowingLocalSuggestions(): boolean;
ShouldUsePPMRU(): boolean;
AddResolvedUserToLocalCache(resolvedEntity: ISPClientPeoplePickerEntity, resolveText: string): void
}
	declare interface ISPClientPeoplePickerSchema {
TopLevelElementId?: string,
EditorElementId?: string,
AutoFillElementId?: string,
ResolvedListElementId?: string,
InitialHelpTextElementId?: string,
WaitImageId?: string,
HiddenInputId?: string,
AllowMultipleValues?: boolean,
Required?: boolean,
AutoFillEnabled?: boolean,
ForceClaims?: boolean,
AllowEmailAddresses?: boolean,
AllUrlZones?: boolean,
UseLocalSuggestionCache?: boolean,
UserNoQueryPermission?: boolean,
VisibleSuggestions?: number,
MaximumEntitySuggestions?: number,
ErrorMessage?: string,
InitialHelpText?: string,
InitialSuggestions?: ISPClientPeoplePickerEntity[],
SP$UrlZone?: SP$SP$UrlZone,
WebApplicationID?: SP$SP$Guid,
SharePointGroupID?: number,

/**
 * Specify User, DL, SecGroup or SPGroup
 */
PrincipalAccountType?: string,
EnabledClaimProvider?: string,
ResolvePrincipalSource?: SP$SP$Utilities.Utilities$PrincipalSource,
SearchPrincipalSource?: SP$SP$Utilities.Utilities$PrincipalSource,
OnUserResolvedClientScript?: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void,
OnValueChangedClientScript?: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void,

/**
 * Number or '100%'
 */
Width?: any,
Rows?: number
} 
	declare class SPClientPeoplePickerMRU  {
static PPMRUVersion: number;
static MaxPPMRUItems: number;
static PPMRUDomLocalStoreKey: string;
static GetSPClientPeoplePickerMRU(): SPClientPeoplePickerMRU;
GetItems(strKey: string): {
Key: string,
[name: string]: any
};
SetItem<T: {
Key: string
}>(strSearchTerm: string, objEntity: T): void;
ResetCache(): void
}
	declare interface ISPClientPeoplePickerEntity {
Key?: string,
Description?: string,
DisplayText?: string,
EntityType?: string,
ProviderDisplayName?: string,
ProviderName?: string,
IsResolved?: boolean,
EntityData?: {
Title: string,
MobilePhone: string,
Department: string,
Email: string
},
MultipleMatches: ISPClientPeoplePickerEntity[],
DomainText?: string,
[key: string]: any
} 
	declare class SPClientPeoplePickerProcessedUser  {
UserContainerElementId: string;
DisplayElementId: string;
PresenceElementId: string;
DeleteUserElementId: string;
SID: string;
DisplayName: string;
SIPAddress: string;
UserInfo: ISPClientPeoplePickerEntity;
ResolvedUser: boolean;
Suggestions: ISPClientAutoFillData[];
ErrorDescription: string;
ResolveText: string;
UpdateResolvedUser(newUserInfo: ISPClientPeoplePickerEntity, strNewElementId: string): void;
UpdateSuggestions(entity: ISPClientPeoplePickerEntity): void;
BuildUserHTML(): string;
UpdateUserMaxWidth(): void;
ResolvedAsUnverifiedEmail(): string;
static BuildUserPresenceHtml(elmId: string, strSip: string, bResolved?: boolean): string;
static GetUserContainerElement(elmChild: HTMLElement): HTMLElement;
static HandleProcessedUserClick(ndClicked: HTMLElement): void;
static DeleteProcessedUser(elmToRemove: HTMLElement): void;
static HandleDeleteProcessedUserKey(e: Event): void;
static HandleResolveProcessedUserKey(e: Event): void
}
	
      declare var npm$namespace$Define: {
        loadScript: typeof Define$loadScript,
require: typeof Define$require,
define: typeof Define$define,
        
      }
declare function Define$loadScript(url: string, successCallback: () => void, errCallback: () => void): void



/**
 * Loads script from _layouts/15/[req].js
 */
declare function Define$require(req: string, callback: (arg: any[]) => void): void



/**
 * Loads script from _layouts/15/[req].js
 */
declare function Define$require(req: string[], callback: (...args: any[]) => void): void


declare function Define$define(name: string, deps: string[], def: (...args: any[]) => any): void

	
      declare var npm$namespace$Verify: {
        ArgumentType: typeof Verify$ArgumentType,
        
      }
declare function Verify$ArgumentType(arg: string, expected: any): void

	
      declare var npm$namespace$BrowserStorage: {
        
        local: typeof BrowserStorage$local,
session: typeof BrowserStorage$session,
      }
declare var BrowserStorage$local: BrowserStorage$CachedStorage;

declare var BrowserStorage$session: BrowserStorage$CachedStorage;


/**
 * Available only in SharePoint Online
 */
declare interface BrowserStorage$CachedStorage {
getItem(key: string): string,
setItem(key: string, value: string): void,
removeItem(key: string): void,
clead(): void,
length: number
} 
	
      declare var npm$namespace$BrowserDetection: {
        
        browseris: typeof BrowserDetection$browseris,
      }
declare var BrowserDetection$browseris: Browseris;
	
      declare var npm$namespace$CSSUtil: {
        HasClass: typeof CSSUtil$HasClass,
AddClass: typeof CSSUtil$AddClass,
RemoveClass: typeof CSSUtil$RemoveClass,
pxToFloat: typeof CSSUtil$pxToFloat,
pxToNum: typeof CSSUtil$pxToNum,
numToPx: typeof CSSUtil$numToPx,
getCurrentEltStyleByNames: typeof CSSUtil$getCurrentEltStyleByNames,
getCurrentStyle: typeof CSSUtil$getCurrentStyle,
getCurrentStyleCorrect: typeof CSSUtil$getCurrentStyleCorrect,
getOpacity: typeof CSSUtil$getOpacity,
setOpacity: typeof CSSUtil$setOpacity,
        
      }
declare function CSSUtil$HasClass(elem: HTMLElement, className: string): boolean


declare function CSSUtil$AddClass(elem: HTMLElement, className: string): void


declare function CSSUtil$RemoveClass(elem: HTMLElement, className: string): void


declare function CSSUtil$pxToFloat(pxString: string): number


declare function CSSUtil$pxToNum(px: string): number


declare function CSSUtil$numToPx(n: number): string


declare function CSSUtil$getCurrentEltStyleByNames(elem: HTMLElement, styleNames: string[]): string


declare function CSSUtil$getCurrentStyle(elem: HTMLElement, cssStyle: string): string


declare function CSSUtil$getCurrentStyleCorrect(element: HTMLElement, camelStyleName: string, dashStyleName: string): string


declare function CSSUtil$getOpacity(element: HTMLElement): number


declare function CSSUtil$setOpacity(element: HTMLElement, value: number): void

	
      declare var npm$namespace$DOM: {
        cancelDefault: typeof DOM$cancelDefault,
AbsLeft: typeof DOM$AbsLeft,
AbsTop: typeof DOM$AbsTop,
CancelEvent: typeof DOM$CancelEvent,
GetElementsByName: typeof DOM$GetElementsByName,
GetEventCoords: typeof DOM$GetEventCoords,
GetEventSrcElement: typeof DOM$GetEventSrcElement,
GetInnerText: typeof DOM$GetInnerText,
PreventDefaultNavigation: typeof DOM$PreventDefaultNavigation,
SetEvent: typeof DOM$SetEvent,
        rightToLeft: typeof DOM$rightToLeft,
      }
declare var DOM$rightToLeft: boolean;

declare function DOM$cancelDefault(evt: Event): void


declare function DOM$AbsLeft(el: HTMLElement): number


declare function DOM$AbsTop(el: HTMLElement): number


declare function DOM$CancelEvent(evt: Event): void


declare function DOM$GetElementsByName(nae: string): NodeList


declare function DOM$GetEventCoords(evt: Event): {
x: number,
y: number
}


declare function DOM$GetEventSrcElement(evt: Event): HTMLElement


declare function DOM$GetInnerText(el: HTMLElement): string


declare function DOM$PreventDefaultNavigation(evt: Event): void


declare function DOM$SetEvent(
eventName: string,
eventFunc: (eventName: string, fnContent: (evt: Event) => void, window?: Window) => void,
el: HTMLElement): void

	
      declare var npm$namespace$Encoding: {
        EncodeScriptQuote: typeof Encoding$EncodeScriptQuote,
HtmlEncode: typeof Encoding$HtmlEncode,
HtmlDecode: typeof Encoding$HtmlDecode,
AttrQuote: typeof Encoding$AttrQuote,
ScriptEncode: typeof Encoding$ScriptEncode,
ScriptEncodeWithQuote: typeof Encoding$ScriptEncodeWithQuote,
CanonicalizeUrlEncodingCase: typeof Encoding$CanonicalizeUrlEncodingCase,
        
      }
declare function Encoding$EncodeScriptQuote(str: string): string


declare function Encoding$HtmlEncode(str: string): string


declare function Encoding$HtmlDecode(str: string): string


declare function Encoding$AttrQuote(str: string): string


declare function Encoding$ScriptEncode(str: string): string


declare function Encoding$ScriptEncodeWithQuote(str: string): string


declare function Encoding$CanonicalizeUrlEncodingCase(str: string): string

	
      declare var npm$namespace$IE8Support: {
        arrayIndexOf: typeof IE8Support$arrayIndexOf,
attachDOMContentLoaded: typeof IE8Support$attachDOMContentLoaded,
getComputedStyle: typeof IE8Support$getComputedStyle,
stopPropagation: typeof IE8Support$stopPropagation,
        
      }
declare function IE8Support$arrayIndexOf<T>(array: T[], item: T, startIdx?: number): number


declare function IE8Support$attachDOMContentLoaded(handler: () => void): void


declare function IE8Support$getComputedStyle(domObj: HTMLElement, camelStyleName: string, dashStyleName: string): string


declare function IE8Support$stopPropagation(evt: Event): void

	
      declare var npm$namespace$StringUtil: {
        BuildParam: typeof StringUtil$BuildParam,
ApplyStringTemplate: typeof StringUtil$ApplyStringTemplate,
        
      }
declare function StringUtil$BuildParam(stPattern: string, ...params: any[]): string


declare function StringUtil$ApplyStringTemplate(str: string, ...params: any[]): string

	
      declare var npm$namespace$TypeUtil: {
        IsArray: typeof TypeUtil$IsArray,
IsNullOrUndefined: typeof TypeUtil$IsNullOrUndefined,
        
      }
declare function TypeUtil$IsArray(value: any): boolean


declare function TypeUtil$IsNullOrUndefined(value: any): boolean

	
      declare var npm$namespace$Nav: {
        convertRegularURLtoMDSURL: typeof Nav$convertRegularURLtoMDSURL,
isMDSUrl: typeof Nav$isMDSUrl,
isPageUrlValid: typeof Nav$isPageUrlValid,
isPortalTemplatePage: typeof Nav$isPortalTemplatePage,
getAjaxLocationWindow: typeof Nav$getAjaxLocationWindow,
getSource: typeof Nav$getSource,
getUrlKeyValue: typeof Nav$getUrlKeyValue,
getWindowLocationNoHash: typeof Nav$getWindowLocationNoHash,
goToHistoryLink: typeof Nav$goToHistoryLink,
getGoToLinkUrl: typeof Nav$getGoToLinkUrl,
goToLink: typeof Nav$goToLink,
goToLinkOrDialogNewWindow: typeof Nav$goToLinkOrDialogNewWindow,
goToDiscussion: typeof Nav$goToDiscussion,
onClickHook: typeof Nav$onClickHook,
pageUrlValidation: typeof Nav$pageUrlValidation,
parseHash: typeof Nav$parseHash,
navigate: typeof Nav$navigate,
removeMDSQueryParametersFromUrl: typeof Nav$removeMDSQueryParametersFromUrl,
urlFromHashBag: typeof Nav$urlFromHashBag,
wantsNewTab: typeof Nav$wantsNewTab,
        ajaxNavigate: typeof Nav$ajaxNavigate,
      }
declare var Nav$ajaxNavigate: AjaxNavigate;

declare function Nav$convertRegularURLtoMDSURL(webUrl: string, fullPath: string): string


declare function Nav$isMDSUrl(url: string): boolean


declare function Nav$isPageUrlValid(url: string): boolean


declare function Nav$isPortalTemplatePage(url: string): boolean


declare function Nav$getAjaxLocationWindow(): string


declare function Nav$getSource(defaultSource?: string): string


declare function Nav$getUrlKeyValue(
keyName: string,
bNoDecode: boolean,
url: string,
bCaseInsensitive: boolean): string


declare function Nav$getWindowLocationNoHash(hre: string): string


declare function Nav$goToHistoryLink(el: HTMLAnchorElement, strVersion: string): void


declare function Nav$getGoToLinkUrl(el: HTMLAnchorElement): string


declare function Nav$goToLink(el: HTMLAnchorElement): void


declare function Nav$goToLinkOrDialogNewWindow(el: HTMLAnchorElement): void


declare function Nav$goToDiscussion(url: string): void


declare function Nav$onClickHook(evt: Event, topElm: HTMLElement): void


declare function Nav$pageUrlValidation(url: string, alertString: string): string


declare function Nav$parseHash(hash: string): {
[name: string]: string
}


declare function Nav$navigate(url: string): void


declare function Nav$removeMDSQueryParametersFromUrl(url: string): string


declare function Nav$urlFromHashBag(hashObject: {
[name: string]: string
}): string


declare function Nav$wantsNewTab(evt: Event): boolean

	
      declare var npm$namespace$URI_Encoding: {
        encodeURIComponent: typeof URI_Encoding$encodeURIComponent,
escapeUrlForCallback: typeof URI_Encoding$escapeUrlForCallback,
        
      }
declare function URI_Encoding$encodeURIComponent(
str: string,
bAsUrl?: boolean,
bForFilterQuery?: boolean,
bForCallback?: boolean): string


declare function URI_Encoding$escapeUrlForCallback(str: string): string

	declare interface ListItem {
SPAnimation$ID: number,
SP$ContentTypeId: string
} 
	
      declare var npm$namespace$Util: {
        createViewEditUrl: typeof Util$createViewEditUrl,
createItemPropertiesTitle: typeof Util$createItemPropertiesTitle,
clearSelectedItemsDict: typeof Util$clearSelectedItemsDict,
ctxInitItemState: typeof Util$ctxInitItemState,
getAttributeFromItemTable: typeof Util$getAttributeFromItemTable,
getSelectedItemsDict: typeof Util$getSelectedItemsDict,
removeOnlyPagingArgs: typeof Util$removeOnlyPagingArgs,
removePagingArgs: typeof Util$removePagingArgs,
showAttachmentRows: typeof Util$showAttachmentRows,
        
      }
declare function Util$createViewEditUrl(
renderCtx: SPClientTemplates$SPClientTemplates$RenderContext,
listItem: SP$ListItem,
useEditFormUrl?: boolean,
appendSource?: boolean): string


declare function Util$createItemPropertiesTitle(
renderCtx: SPClientTemplates$SPClientTemplates$RenderContext,
listItem: SP$ListItem): string


declare function Util$clearSelectedItemsDict(context: any): void


declare function Util$ctxInitItemState(context: any): void


declare function Util$getAttributeFromItemTable(
itemTableParam: HTMLElement,
strAttributeName: string,
strAttributeOldName: string): string


declare function Util$getSelectedItemsDict(context: any): any


declare function Util$removeOnlyPagingArgs(url: string): string


declare function Util$removePagingArgs(url: string): string


declare function Util$showAttachmentRows(): void

	
      declare var npm$namespace$SPThemeUtils: {
        ApplyCurrentTheme: typeof SPThemeUtils$ApplyCurrentTheme,
WithCurrentTheme: typeof SPThemeUtils$WithCurrentTheme,
UseClientSideTheming: typeof SPThemeUtils$UseClientSideTheming,
Suspend: typeof SPThemeUtils$Suspend,
        
      }
declare function SPThemeUtils$ApplyCurrentTheme(): void


declare function SPThemeUtils$WithCurrentTheme(resultCallback: (themesCache: any) => void): void


declare function SPThemeUtils$UseClientSideTheming(): boolean


declare function SPThemeUtils$Suspend(): void

	declare  class Srch$EventType {
  constructor(...args: empty): mixed;
static +none: Class<Srch$EventType__none> & Srch$EventType__none & 0;// 0
static +queryReady: Class<Srch$EventType__queryReady> & Srch$EventType__queryReady & 1;// 1
static +queryIssuing: Class<Srch$EventType__queryIssuing> & Srch$EventType__queryIssuing & 2;// 2
static +batchQueryIssuing: Class<Srch$EventType__batchQueryIssuing> & Srch$EventType__batchQueryIssuing & 3;// 3
static +resultReady: Class<Srch$EventType__resultReady> & Srch$EventType__resultReady & 4;// 4
static +batchResultReady: Class<Srch$EventType__batchResultReady> & Srch$EventType__batchResultReady & 5;// 5
static +queryStateChanged: Class<Srch$EventType__queryStateChanged> & Srch$EventType__queryStateChanged & 6;// 6
static +resultRendered: Class<Srch$EventType__resultRendered> & Srch$EventType__resultRendered & 7;// 7
static +preLoad: Class<Srch$EventType__preLoad> & Srch$EventType__preLoad & 8;// 8
static +load: Class<Srch$EventType__load> & Srch$EventType__load & 9;// 9
static +postLoad: Class<Srch$EventType__postLoad> & Srch$EventType__postLoad & 10;// 10

}

declare class Srch$EventType__none mixins Srch$EventType {}
declare class Srch$EventType__queryReady mixins Srch$EventType {}
declare class Srch$EventType__queryIssuing mixins Srch$EventType {}
declare class Srch$EventType__batchQueryIssuing mixins Srch$EventType {}
declare class Srch$EventType__resultReady mixins Srch$EventType {}
declare class Srch$EventType__batchResultReady mixins Srch$EventType {}
declare class Srch$EventType__queryStateChanged mixins Srch$EventType {}
declare class Srch$EventType__resultRendered mixins Srch$EventType {}
declare class Srch$EventType__preLoad mixins Srch$EventType {}
declare class Srch$EventType__load mixins Srch$EventType {}
declare class Srch$EventType__postLoad mixins Srch$EventType {}


declare  class Srch$MessageLevel {
  constructor(...args: empty): mixed;
static +information: Class<Srch$MessageLevel__information> & Srch$MessageLevel__information & 0;// 0
static +warning: Class<Srch$MessageLevel__warning> & Srch$MessageLevel__warning & 1;// 1
static +error: Class<Srch$MessageLevel__error> & Srch$MessageLevel__error & 2;// 2

}

declare class Srch$MessageLevel__information mixins Srch$MessageLevel {}
declare class Srch$MessageLevel__warning mixins Srch$MessageLevel {}
declare class Srch$MessageLevel__error mixins Srch$MessageLevel {}


declare  class Srch$UserActionType {
  constructor(...args: empty): mixed;
static +search: Class<Srch$UserActionType__search> & Srch$UserActionType__search & 0;// 0
static +pageNext: Class<Srch$UserActionType__pageNext> & Srch$UserActionType__pageNext & 1;// 1
static +pagePrev: Class<Srch$UserActionType__pagePrev> & Srch$UserActionType__pagePrev & 2;// 2
static +refine: Class<Srch$UserActionType__refine> & Srch$UserActionType__refine & 3;// 3
static +sort: Class<Srch$UserActionType__sort> & Srch$UserActionType__sort & 4;// 4
static +filterLanguage: Class<Srch$UserActionType__filterLanguage> & Srch$UserActionType__filterLanguage & 5;// 5

}

declare class Srch$UserActionType__search mixins Srch$UserActionType {}
declare class Srch$UserActionType__pageNext mixins Srch$UserActionType {}
declare class Srch$UserActionType__pagePrev mixins Srch$UserActionType {}
declare class Srch$UserActionType__refine mixins Srch$UserActionType {}
declare class Srch$UserActionType__sort mixins Srch$UserActionType {}
declare class Srch$UserActionType__filterLanguage mixins Srch$UserActionType {}


declare  class Srch$DateTimeKind {
  constructor(...args: empty): mixed;
static +unspecified: Class<Srch$DateTimeKind__unspecified> & Srch$DateTimeKind__unspecified & 0;// 0
static +utc: Class<Srch$DateTimeKind__utc> & Srch$DateTimeKind__utc & 1;// 1
static +local: Class<Srch$DateTimeKind__local> & Srch$DateTimeKind__local & 2;// 2

}

declare class Srch$DateTimeKind__unspecified mixins Srch$DateTimeKind {}
declare class Srch$DateTimeKind__utc mixins Srch$DateTimeKind {}
declare class Srch$DateTimeKind__local mixins Srch$DateTimeKind {}


declare class Srch$ClientControl mixins undefined.Control {
constructor(elem: Element): this;

/**
 * toggles visibility of children controls of the messageContainer
 */
static toggleMessageDetails(messageContainer: Element): void;
alternateRenderer: any;
alternateRenderContext: any;
loaded: boolean;

/**
 * returns next unique identifier for nested controls
 */
get_nextUniqueId(): string;

/**
 * Gets the id of View display template that is used to render this control.
 * Example: '~sitecollection/_catalogs/masterpage/Display Templates/Search/Control_SearchResults.js'
 */
get_renderTemplateId(): string;
set_renderTemplateId(value: string): string;

/**
 * Returns true if control will load scripts defined by the serverTemplateScriptsToLoad field after control load. True by default.
 */
get_delayLoadTemplateScripts(): boolean;

/**
 * If set to true, control will load scripts defined by the serverTemplateScriptsToLoad field after control load. True by default.
 */
set_delayLoadTemplateScripts(value: boolean): boolean;
get_states(): any;
set_states(value: any): any;
get_messages(): any[];
set_messages(value: any[]): any[];
get_showDataErrors(): boolean;

/**
 * False by default.
 */
set_showDataErrors(value: boolean): boolean;
get_alternateErrorMessage(): string;
set_alternateErrorMessage(value: string): string;

/**
 * returns true if control has already been loaded at least once
 */
get_isInitialLoad(): boolean;
initialize(): void;
dispose(): void;
renderControl(listData: any, dataProvider: any): void;
processDataProviderErrors(dataProviderToProcess: any): void;
scriptApplication_PreLoad(sender: any, e: any): void;
scriptApplication_Load(sender: any, e: any): void;
scriptApplication_PostLoad(sender: any, e: any): void;
loadServerTemplateScripts(): void;
serverTemplateScriptsToLoad: any[];
serverTemplateScriptsCallback(): void;
loadRenderTemplateScripts(
scriptReferences: any,
success: any,
failure: any,
timeout: any,
loadStandAloneCustomScripts: any): boolean;
invokeAlternateRender(callback: any, container: any, ctx: any): any;
invokeClientRenderer(node: any, ctx: any): any;
processDataErrorMessages(dataErrorsList: any): any;
processRenderingErrorMessages(ctx: any): any;
hasMessages(): any;
updateDisplayControlWithNewMessages(): any;

/**
 * show/hide the DOM element associated with control
 */
setControlElementVisibility(UIUtility$showElement: boolean): any;
clickHandler(e: Event): any
}

declare class Srch$DataProvider mixins Srch$ClientControl {
constructor(elem: Element): this;
get_currentQueryState(): any;
get_sourceID(): string;
set_sourceID(value: string): string;
get_sourceName(): string;
set_sourceName(value: string): string;
get_sourceLevel(): string;
set_sourceLevel(value: string): string;
get_collapseSpecification(): string;
set_collapseSpecification(value: string): string;
get_queryGroupName(): string;
set_queryGroupName(value: string): string;
get_queryPropertiesTemplateUrl(): string;
set_queryPropertiesTemplateUrl(value: string): string;
get_queryTemplate(): any;
set_queryTemplate(value: any): any;
get_fallbackSort(): any;
set_fallbackSort(value: any): any;
get_rankRules(): any;
set_rankRules(value: any): any;
get_initialQueryState(): any;
set_initialQueryState(value: any): any;
get_initialResult(): string;
set_initialResult(value: string): string;
get_initialResultRef(): any;
set_initialResultRef(value: any): any;
get_initialResultObject(): any;
get_batched(): boolean;
set_batched(value: boolean): boolean;
get_active(): boolean;
set_active(value: boolean): boolean;
get_bypassResultTypes(): boolean;
set_bypassResultTypes(value: boolean): boolean;
get_processBestBets(): boolean;
set_processBestBets(value: boolean): boolean;
get_processPersonalFavorites(): boolean;
set_processPersonalFavorites(value: boolean): boolean;

/**
 * Number of results displayed per page. 10 by default
 */
get_resultsPerPage(): number;

/**
 * Number of results displayed per page. 10 by default
 */
set_resultsPerPage(value: number): number;
get_selectedRefiners(): any;
set_selectedRefiners(value: any): any;
get_selectedProperties(): any;
set_selectedProperties(value: any): any;
get_hitHighlightedProperties(): any;
set_hitHighlightedProperties(value: any): any;
get_fallbackLanguage(): any;
set_fallbackLanguage(value: any): any;
get_fallbackRankingModelID(): string;
set_fallbackRankingModelID(value: string): string;
get_fallbackRefinementFilters(): any;
set_fallbackRefinementFilters(value: any): any;
get_availableSorts(): any;
set_availableSorts(value: any): any;
get_contextualScopeUrl(): string;
set_contextualScopeUrl(value: string): string;
get_totalRows(): number;
set_totalRows(value: number): number;
get_rowCount(): number;
set_rowCount(value: number): number;
get_refinementInfo(): any;
get_entityInfo(): any;
get_enableStemming(): boolean;
set_enableStemming(value: boolean): boolean;
get_enablePhonetic(): boolean;
set_enablePhonetic(value: boolean): boolean;
get_enableNicknames(): boolean;
set_enableNicknames(value: boolean): boolean;
get_trimDuplicates(): boolean;
set_trimDuplicates(value: boolean): boolean;
get_enableInterleaving(): boolean;
set_enableInterleaving(value: boolean): boolean;
get_enableQueryRules(): boolean;
set_enableQueryRules(value: boolean): boolean;
get_enableOrderingHitHighlightedProperty(): boolean;
set_enableOrderingHitHighlightedProperty(value: boolean): boolean;
get_hitHighlightedMultivaluePropertyLimit(): number;
set_hitHighlightedMultivaluePropertyLimit(value: number): number;
get_properties(): any;
set_properties(value: any): any;
get_clientType(): string;
set_clientType(value: string): string;
get_maxPagesAfterCurrent(): number;
set_maxPagesAfterCurrent(value: number): number;
get_userAction(): any;
set_userAction(value: any): any;
get_queryCount(): number;
set_queryCount(value: number): number;
get_resultsUrl(): any;
set_resultsUrl(value: any): any;
get_upScopeUrl(): any;
get_effectiveQueryLanguage(): any;
get_parentImpressionID(): any;
set_parentImpressionID(value: any): any;
get_updateAjaxNavigate(): boolean;
set_updateAjaxNavigate(value: boolean): boolean;
get_summaryLength(): number;
set_summaryLength(value: number): number;
get_desiredSnippetLength(): number;
set_desiredSnippetLength(value: number): number;
get_personalizedQuery(): boolean;
set_personalizedQuery(value: boolean): boolean;
initialize(): void;
dispose(): void;
scriptApplication_PreLoad(sender: any, e: any): void;
scriptApplication_Load(sender: any, e: any): void;
scriptApplication_PostLoad(sender: any, e: any): void;
serverTemplateScriptsCallback(): void;
add_queryIssuing(value: any): void;
remove_queryIssuing(value: any): void;
raiseQueryIssuingEvent(arg: any): void;
add_resultReady(value: any): void;
remove_resultReady(value: any): void;
raiseResultReadyEvent(arg: any): void;
add_queryStateChanged(value: any): void;
raiseQueryStateChangedEvent(arg: any): void;
displayControl_QueryReady(sender: any, e: any): void;
searchBox_QueryReady(sender: any, e: any): void;
searchBox_BatchQueryIssuing(sender: any, e: any): void;
searchBox_BatchResultReady(sender: any, e: any): void;
processInitial(): void;
issueQuery(): void;
displayControlMessages(): void;
raiseEmptyResultReadyEvent(): void;
getSortRankName(): string;
getSortName(): string
}

declare class Srch$DisplayControl mixins Srch$ClientControl {
get_queryGroupName(): string;
set_queryGroupName(value: string): string;
get_dataProvider(): Srch$DataProvider;
get_renderedResult(): boolean;
set_renderedResult(value: boolean): boolean;
get_shouldShowNoResultMessage(): boolean;
set_shouldShowNoResultMessage(value: boolean): boolean;
get_currentResultTableCollection(): any;
set_currentResultTableCollection(value: any): any;
get_emptyMessage(): string;
set_emptyMessage(value: string): string;
scriptApplication_PreLoad(sender: any, e: any): void;
scriptApplication_PostLoad(sender: any, e: any): void;
serverTemplateScriptsCallback(): void;
add_queryReady(value: any): void;
remove_queryReady(value: any): void;
raiseQueryReadyEvent(arg: any): void;
add_resultRendered(value: any): void;
remove_resultRendered(value: any): void;
raiseResultRenderedEvent(arg: any): void;
add_oneTimeResultRendered(value: any): void;
remove_oneTimeResultRendered(value: any): void;
raiseOneTimeResultRenderedEvent(arg: any): void;
refresh(queryState: any): void;
dataProvider_QueryIssuing(sender: any, e: any): void;
dataProvider_ResultReady(sender: any, e: any): void;
processQueryIssuing(queryState: any): void;
processResultReady(resultTableCollection: any): void;
render(): void
}

declare class Srch$Refinement mixins Srch$DisplayControl {
static createRefinementTextbox(name: string): Element;
static submitMultiRefinement(
name: string,
control: Srch$Refinement,
useContains: boolean,
useKQL: boolean): void;
static ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes(inputText: string): string;
static getRefinementLocalizedTitle(propertyName: string): string;
static getRefinementTitle(currentRefinemntControl: Srch$Refinement): string;

/**
 * Gets expanded state of the specified filter from cookie
 */
static getExpanded(filterName: string): string;

/**
 * Save expanded state of the specified filter to cookie
 */
static setExpanded(filterName: string, value: string): void;
static multiRefinerSpecifyOtherFilterValue(
refinerName: string,
clientControl: Srch$Refinement,
useContains: boolean,
useKQL: boolean): void;
constructor(elem: Element): this;
get_selectedRefinementControls(): Srch$RefinementControl[];
set_selectedRefinementControls(value: Srch$RefinementControl[]): Srch$RefinementControl[];
get_useManagedNavigationRefiners(): boolean;
set_useManagedNavigationRefiners(value: boolean): boolean;
get_emptyRefinementMessageId(): string;
set_emptyRefinementMessageId(value: string): string;
scriptApplication_PreLoad(sender: any, e: any): void;
render(): void;
addRefinementFilter(filterName: string, filterToken: any): void;
addRefinementFiltersJSON(refinersJSON: string): void;
addRefinementFiltersJSONWithOr(refinersJSON: string): void;
addRefinementFilters(refiners: any[]): void;
addRefinementFiltersWithOp(refiners: any[], op: string): void;
removeRefinementFilter(filterName: string, filterToken: string): void;
removeRefinementFiltersJSON(refinersJSON: string): void;
updateRefinementFilters(
filterName: string,
filterTokens: string[],
op: string,
useKQL: boolean,
tokenToDisplayValueMap: any): void;
updateRefinersJSON(refinersJSON: string): void;
updateRefiners(
refiners: any[],
op: string,
useKQL: boolean,
tokenToDisplayValueMap: any): void;
removeRefinementCategory(rcs: any, filterName: string): void;
replaceRefinementFilter(oldRefinementFilter: any, newRefinementFilter: any): void;
hasRefinementFilter(filterName: string, filterToken: string): boolean;
hasAllRefinementFilters(filterName: string, filterTokens: string[]): boolean;
hasRefinementCategory(refinementName: string): boolean;
getCurrentRefinementCategory(refinementName: string): any;

/**
 * Gets refinement control with the specified propertyName
 */
getRefinementControl(refinerName: string): Srch$RefinementControl;

/**
 * Returns true if selected refinement controls collection contains a control with the specified propertyName
 */
hasRefiner(refinerName: string): boolean;

/**
 * Replaces the refinement controls
 */
updateRefinementControls(newControls: Srch$RefinementControl[]): void
}

declare class Srch$RefinementControl  {
constructor(propertyName: string, spec: string, renderTemplateId: string): this;
propertyName: string;
spec: string;
renderTemplateId: string;
overrideDisplayName: string;
useDefaultDateIntervals: boolean;
containerId: string;
alternateRenderer: any;
alternateRenderContext: any;
countDisplay: string;
deepHits: number
}

declare class Srch$Result mixins Srch$DisplayControl {
static parsePropertyMappingWithSlotDisplayNames(mappings: any): {
[key: string]: any
};
static parsePropertyMappingsString(mappings: any): {
[key: string]: any
};
static getSelectedPropertiesFromMappingDictionary(propMappings: any): any[];
constructor(elem: Element): this;
get_itemTemplateId(): string;
set_itemTemplateId(value: string): string;
get_groupTemplateId(): string;
set_groupTemplateId(value: string): string;
get_itemBodyTemplateId(): string;
set_itemBodyTemplateId(value: string): string;
get_maxPagesBeforeCurrent(): number;
set_maxPagesBeforeCurrent(value: number): number;
get_maxPagesAfterCurrent(): number;
set_maxPagesAfterCurrent(value: number): number;
get_currentPageNumber(): number;
set_currentPageNumber(value: number): number;
get_showSortOptions(): boolean;
set_showSortOptions(value: boolean): boolean;
get_showLanguageOptions(): boolean;
set_showLanguageOptions(value: boolean): boolean;
get_repositionLanguageDropDown(): boolean;
set_repositionLanguageDropDown(value: boolean): boolean;
get_showPaging(): boolean;
set_showPaging(value: boolean): boolean;
get_showResults(): boolean;
set_showResults(value: boolean): boolean;
get_showBestBets(): boolean;
set_showBestBets(value: boolean): boolean;
get_showPersonalFavorites(): boolean;
set_showPersonalFavorites(value: boolean): boolean;
get_showDefinitions(): boolean;
set_showDefinitions(value: boolean): boolean;
get_showDidYouMean(): boolean;
set_showDidYouMean(value: boolean): boolean;
get_showAdvancedLink(): boolean;
set_showAdvancedLink(value: boolean): boolean;
get_showPreferencesLink(): boolean;
set_showPreferencesLink(value: boolean): boolean;
get_showResultCount(): boolean;
set_showResultCount(value: boolean): boolean;
get_showAlertMe(): boolean;
set_showAlertMe(value: boolean): boolean;
get_showViewDuplicates(): boolean;
set_showViewDuplicates(value: boolean): boolean;
get_pagingInfo(): any;
get_shouldShowNoResultMessage(): boolean;
get_advancedUrl(): string;
set_advancedUrl(value: string): string;
get_showUpScopeMessage(): boolean;
set_showUpScopeMessage(value: boolean): boolean;
get_scrollToTopOnRedraw(): boolean;
set_scrollToTopOnRedraw(value: boolean): boolean;
get_useSimplifiedQueryBuilder(): boolean;
set_useSimplifiedQueryBuilder(value: boolean): boolean;
get_preloadedItemTemplateIds(): string[];
set_preloadedItemTemplateIds(value: string[]): string[];
processResultReady(
resultTableCollection: Microsoft$SharePoint.Client.Search.Query$Query.Query$ResultTableCollection): void;
render(): void;
scriptApplication_PreLoad(sender: any, e: any): void;
sortOrRank(sortRankName: string): void;
sort(sortName: string): void;
changeQueryLanguage(queryLanguage: number): void;
page(startAt: number): void;
changeQueryTerm(queryTerm: any): void;
viewDuplicates(docId: number): void;

/**
 * Returns true if the specified table has results and is enabled to be shown by this control
 */
shouldShowTable(
resultTable: Microsoft$SharePoint.Client.Search.Query$Query.Query$ResultTable): boolean
}


/**
 * Represents the search box control
 */
declare class Srch$SearchBox mixins Srch$ClientControl {
constructor(elem: Element): this;

/**
 * Returns the current search term
 */
get_currentTerm(): string;

/**
 * Sets the current search term.
 * Does not update results or even re-render control automatically, only sets the value.
 * You can call .renderControl() method to re-render control.
 */
set_currentTerm(value: string): string;
get_queryGroupNames(): string[];
set_queryGroupNames(value: any): string[];

/**
 * Gets the results page address, e.g. '~site/_layouts/15/osssearchresults.aspx?u={contexturl}'
 */
get_resultsPageAddress(): string;

/**
 * Sets the results page address, e.g. '~site/_layouts/15/osssearchresults.aspx?u={contexturl}'
 * Parameter u is used for setting the url filter for the search, so that only results within
 * e.g. specified site are returned. Omit this parameter if you want to search everywhere.
 */
set_resultsPageAddress(value: string): string;
get_showAdvancedLink(): boolean;
set_showAdvancedLink(value: boolean): boolean;
get_showQuerySuggestions(): boolean;
set_showQuerySuggestions(value: boolean): boolean;
get_showNavigation(): boolean;
set_showNavigation(value: boolean): boolean;
get_showPeopleNameSuggestions(): boolean;
set_showPeopleNameSuggestions(value: boolean): boolean;

/**
 * Gets the interval in milliseconds, if user is idle during this interval, suggestions retrieval will be initiated.
 * Default value is 250.
 */
get_querySuggestionCompletionInterval(): number;

/**
 * Sets the interval in milliseconds, if user is idle during this interval, suggestions retrieval will be initiated.
 * Default value is 250.
 */
set_querySuggestionCompletionInterval(value: number): number;

/**
 * Gets minimum length of the search term for suggestions to be retrieved. Default is 2 letters.
 */
get_querySuggestionMinimumPrefixLength(): number;

/**
 * Sets minimum length of the search term for suggestions to be retrieved. Default is 2 letters.
 */
set_querySuggestionMinimumPrefixLength(value: number): number;

/**
 * Gets number of suggestions to display. Default is 5.
 */
get_querySuggestionCount(): number;

/**
 * Sets number of suggestions to display. Default is 5.
 */
set_querySuggestionCount(value: number): number;
get_personalResultCount(): number;
set_personalResultCount(value: number): number;
get_advancedSearchPageAddress(): string;
set_advancedSearchPageAddress(value: string): string;
get_showPreferencesLink(): boolean;
set_showPreferencesLink(value: boolean): boolean;
get_serverInitialRender(): boolean;
set_serverInitialRender(value: boolean): boolean;
get_setFocusOnPageLoad(): boolean;
set_setFocusOnPageLoad(value: boolean): boolean;
get_allowEmptySearch(): boolean;
set_allowEmptySearch(value: boolean): boolean;
get_updatePageTitle(): boolean;
set_updatePageTitle(value: boolean): boolean;
get_pageTitlePrefix(): string;
set_pageTitlePrefix(value: string): string;

/**
 * Gets the search input placeholder text
 */
get_currentPrompt(): string;

/**
 * Sets the search input placeholder text
 */
set_currentPrompt(value: string): string;
get_initialPrompt(): string;
set_initialPrompt(value: string): string;

/**
 * Gets the css class/classes of the placeholder text. Default is 'ms-srch-sb-prompt ms-helperText'
 */
get_promptCssClass(): string;

/**
 * Sets the css class/classes of the placeholder text. Default is 'ms-srch-sb-prompt ms-helperText'
 */
set_promptCssClass(value: string): string;
get_tryInplaceQuery(): boolean;
set_tryInplaceQuery(value: boolean): boolean;

/**
 * Gets the id of the search box input element
 */
get_searchBoxInputId(): string;

/**
 * Sets the id of the search box input element
 */
set_searchBoxInputId(value: string): string;
get_searchBoxContainerId(): string;
set_searchBoxContainerId(value: string): string;
get_navigationButtonId(): string;
set_navigationButtonId(value: string): string;
get_suggestionsListId(): string;
set_suggestionsListId(value: string): string;
get_navigationListId(): string;
set_navigationListId(value: string): string;
get_searchBoxInputElement(): Element;
get_searchBoxProgressClass(): string;
set_searchBoxProgressClass(value: string): string;
get_searchBoxContainerElement(): Element;
get_searchBoxLinkId(): string;
set_searchBoxLinkId(value: string): string;
get_searchBoxLinkElement(): Element;
get_navigationNodes(): any;
set_navigationNodes(value: any): any;
get_msBeforeShowingProgress(): number;
set_msBeforeShowingProgress(value: number): number;
get_maintainQueryState(): boolean;
set_maintainQueryState(value: boolean): boolean;
get_querySuggestionsSourceID(): string;
set_querySuggestionsSourceID(value: string): string;
scriptApplication_PreLoad(sender: any, e: any): void;
scriptApplication_PostLoad(sender: any, e: any): void;
serverTemplateScriptsCallback(): any;
add_queryReady(value: any): void;
remove_queryReady(value: any): void;
raiseQueryReadyEvent(arg: any): void;
add_batchQueryIssuing(value: any): void;
remove_batchQueryIssuing(value: any): void;
raiseBatchQueryIssuingEvent(arg: any): void;
add_batchResultReady(value: any): void;
remove_batchResultReady(value: any): void;
raiseBatchResultReadyEvent(arg: any): void;
dataProvider_QueryStateChanged(sender: any, e: any): void;
dataProvider_QueryIssuing(sender: any, e: any): void;
dataProvider_ResultReady(sender: any, e: any): void;
search(term: string): void;
hidePrompt(): void;
showPrompt(): void;
focus(): void;
setBorder(focused: boolean): void;
activate(
prompt: string,
searchBoxInputId: string,
searchBoxContainerId: string,
navigationButtonId: string,
suggestionsListId: string,
navigationListId: string,
searchBoxLinkId: string,
searchBoxProgressClass: string,
searchBoxPromptClass: string): void;
activateDefaultNavigationBehavior(): void;
activateDefaultQuerySuggestionBehavior(): void
}

declare type Srch$RenderFunction = (ctx: any) => string;

declare class Srch$U  {

/**
 * Returns true if the value parameter is null or empty string
 */
static e(value: string): boolean;

/**
 * Returns true if the value parameter is empty string
 */
static w(value: any): boolean;

/**
 * Returns true if the value parameter is null or undefined
 */
static n(value: any): boolean;

/**
 * Returns true if current page is in edit mode
 */
static isPageInEditMode(): boolean;

/**
 * Returns true if current page is displayed in the Minimal Download Strategy (MDS) mode
 */
static isPageInMdsMode(): boolean;
static isPagePartialLoad(): boolean;

/**
 * Returns true if the current page uses right-to-left mode (RTL)
 */
static isRTL(): boolean;

/**
 * Ensures that the given value is not null or undefined; throws an exception otherwise.
 */
static ensureNotNullOrUndefined(value: any, context: any, methodName: string, paraName: string): void;

/**
 * Ensures that the given value is not null, undefined or empty; throws an exception otherwise.
 */
static ensureNotNullOrEmptyString(value: string, context: any, methodName: string, paraName: string): void;

/**
 * Returns copy of the passed source dictionary
 */
static copyDictionary(source: {
[key: string]: any
}): {
[key: string]: any
};

/**
 * Returns true if the obj parameter is null, undefined, number or string
 */
static isPrimitive(obj: any): boolean;

/**
 * Returns true if the obj parameter is array
 */
static isArray(obj: any): boolean;

/**
 * Safely pushes item to array (does nothing if the array is null or undefined)
 */
static appendArray(array: any[], item: any): void;

/**
 * Safely sets field of an object (does nothing if either object or fieldName is null/empty); returns true if value was set
 */
static setFieldOnObject(targetObject: any, fieldName: string, fieldValue: any): boolean;

/**
 * Safely gets field of an object (returns null if object is null or undefined)
 */
static getFieldOnObject(targetObject: any, fieldName: string): any;

/**
 * Safely gets field of an object or creates it if it is null or undefined
 */
static getOrCreateFieldOnObject(targetObject: any, fieldName: string, defaultValue: any): any;

/**
 * Safely gets field of an object (returns empty string instead of null as "getFieldOnObject")
 */
static getStringFieldOnObject(targetObject: any, fieldName: string): string;

/**
 * Returns true if the specified item is found in the specified array (uses '===' for comparing)
 */
static isInArray(array: any[], item: any): boolean;

/**
 * Removes the specified item from the specified array and returns array that has the deleted item
 */
static removeArray(array: any[], item: any): any[];

/**
 * Removes trailing spaces and also replaces double spaces inside string to single spaces
 */
static trimExtraSpaces(value: string): string;

/**
 * Adds the specified CSS class to element (if not there already)
 */
static ensureCSSClassNameExist(e: Element, className: string): void;

/**
 * Removes the specified CSS class from the element
 */
static ensureCSSClassNameNotExist(e: Element, className: string): void;

/**
 * Adds cookie with specified parameters
 */
static setCookie(
name: string,
value: string,
expires?: Date,
domain?: string,
path?: string): void;

/**
 * Gets cookie by name
 */
static getCookie(name: string): string;

/**
 * Returns true if the specified URL belongs to the specified host name
 */
static isSameHost(url: string, hostName: string): boolean;

/**
 * Returns the hostname of current page
 */
static getHostName(): string;
static trace(c: Srch$Srch$ClientControl, method: string, message: string): void;
static traceFormatted(
c: Srch$Srch$ClientControl,
method: string,
format: string,
...values: string[]): void;

/**
 * Same as $addHandler with safety checks
 */
static addHandler(
element: Element,
eventName: string,
handler: (instance: any, eventArgs: any) => void): void;

/**
 * Same as $removeHandler with safety checks
 */
static removeHandler(
element: Element,
eventName: string,
handler: (instance: any, eventArgs: any) => void): void;

/**
 * Returns true if the specified element is a descendant of the container element
 */
static isDescendant(element: Element, container: Element): boolean;

/**
 * Returns the closest to startingElement parent of the specified tag name
 */
static getParentElementByName(startingElement: Element, tagName: string): Element;

/**
 * Returns the #s4-workspace element or if not found, then the fallback element
 */
static getWorkspace(fallback: Element): Element;

/**
 * Returns specified by attributeName attribute of startingElement or of it's closest parent who has it
 */
static getParentAttributeByName(startingElement: Element, attributeName: string): string;

/**
 * Returns the ClientControl associated with specified DOM element
 */
static getClientComponent(e: Element): Srch$ClientControl;
static getResultObject(id: string): any;
static setResultObject(id: string, resultObject: any): any;
static findResultObjectFromDOM(e: Element, type: string): any;

/**
 * Appends specified parameter key and value string to the specified URL
 */
static appendUrlParameter(url: string, keyAndValue: string): string;

/**
 * Ensures that the given URL protocol value is allowed. Returns the specified URL value if the protocol is allowed; empty string otherwise.
 */
static ensureAllowedProtocol(value: string): string;

/**
 * Indicates whether the specified protocol is allowed.
 */
static isProtocolAllowed(value: string, allowRelativeUrl: boolean): boolean;

/**
 * Returns true if the URL is a relative URL
 */
static isUrlRelative(url: string): boolean;

/**
 * Returns true if the URL is a server-relative URL (i.e. starts with '/')
 */
static isUrlServerRelative(url: string): boolean;

/**
 * Returns true if the URL is a relative URL, but not a server-relative URL
 */
static isUrlPagelRelative(url: string): boolean;
static logClick(e: any, clickType: any): void;
static fillKeywordQuery(query: any, dp: any): void;

/**
 * Parses username out from SharePoint user field value
 */
static getUsernameFromAuthorField(authorField: string): string;

/**
 * Parses user display name out from SharePoint user field value
 */
static getDisplayNameFromAuthorField(authorField: string): string;

/**
 * Parses SharePoint array field value and returns array of strings
 */
static getArray(value: string): string[];

/**
 * Converts file extension to a more friendly representation, e.g. 'doc' => 'file_Word'
 */
static getFriendlyNameForFileExtension(fileExtension: string): string;

/**
 * Returns true if the fileExtension belongs to a webpage, e.g. 'ascx', 'aspx', 'html', 'php', etc.
 */
static isWebPage(fileExtension: string): boolean;

/**
 * Truncates the string to specified maximum allowed amount of characters (if max amount is not exceeded - does nothing)
 */
static truncateEnd(original: string, maxChars: number): string;

/**
 * Returns true if specified by logoUrl image is one of default site logos
 */
static isDefaultSiteLogo(logoUrl: string): boolean;

/**
 * Returns formatted date
 */
static toFormattedDate(dateValue: Date, dateTimeFormatId?: string): string;

/**
 * Returns formatted number
 */
static toFormattedNumber(num: number, defaultDecimalPlacesIfNotInt: number): string;

/**
 * If number is more than 1000, rounds up three last digits, e.g. 72389 => '72,000+'. If number is more than 100000, returns '100,000+'
 */
static toFriendlyNumber(num: number): string;

/**
 * Returns human-readable size in kilobytes/megabytes etc. (the captions are localized)
 */
static toFileSizeDisplay(numberOfBytes: number, showDecimalPart: boolean): string;
static getVideoImageWithFallbackSource(valueObject: any, width: number, height: number): string;
static getImageSourceWithRendition(imageInfo: any, width: number, height: number): string;
static parseTypedRangeToken(rangeFilterToken: string, objToStoreFilterTokenType: any): any;
static modifyMediaDurationRefinementName(resultRow: any): void;
static getDeepLinks(deeplinks: string, maxRows: number): string;
static truncateUrl(url: string, maxChars: number): string;
static truncateHighlightedUrl(url: string, maxChars: number): string;

/**
 * Copies the specified string to clipboard, if possible
 */
static copyLink(link: string): void;

/**
 * Registers display template function in the system.
 * @param name Identifier of the template. Usually template is registered twice: by URL and by name.
 * @param template The display template. It can be either string, or function, that gets the CSR context object and returns HTML string
 */
static registerRenderTemplateByName(name: string, templateFunction: string | Srch$RenderFunction): void;

/**
 * Returns display template registered (can be either string or function)
 */
static getRenderTemplateByName(name: string, renderCtx: any): string | Srch$RenderFunction;
static addRenderContextCallback(
renderCtx: any,
callbackType: any,
callbackFunction: any,
enforceUnique: any,
templateFunction: any): void;
static setItemRenderWrapper(renderCtx: any, itemRenderWrapperFunction: any, templateFunction: any): any;
static logRenderingErrorMessageToContext(renderCtx: any, messageText: any, operationName: any): void;

/**
 * Gets the URL of template based on display template function or the rendering context
 */
static getTemplateUrlFromFunctionOrRenderCtx(templateFunctionOrRenderCtx: any): string;
static createErrorObjectWithExecContext(messageText: any, operationName: any, templateFuncOrRenderCtx: any): any;

/**
 * Returns the CSR template that was previously registered using 'registerRenderTemplateByName' based on CSR template level
 */
static resolveRenderTemplate(
renderCtx: any,
component: Srch$ClientControl,
level: "Item" | "Group" | "View" | "Body"): string | Srch$RenderFunction;

/**
 * Returns formatted time string from seconds string, which contains a number that represents amount of seconds passed since 00:00:00 today
 */
static getFormattedTimeFromSeconds(secondsStr: string): string;

/**
 * Returns true if the keyCode is \n or \r
 */
static isEnterKey(keyCode: any): boolean;

/**
 * Prevents default event action and stops further propagation of the event in the DOM
 */
static cancelEvent(e: Event): void;

/**
 * Prevents default event action or/and stops further propagation of the event in the DOM
 */
static cancelEventEx(e: Event, preventDefault: boolean, IE8Support$stopPropagation: boolean): void;

/**
 * Gets a value from 'Properties' field object of the specified parent object
 */
static getTableProperty(parent: any, propName: string): any;

/**
 * Concatenates two URL fragments and returns resulting URL
 */
static concatUrl(firstPart: string, secondPart: string): string;

/**
 * Returns URL to the html16.png image
 */
static getIconUrl(): string;

/**
 * Returns URL to the folder.gif image
 */
static getFolderIconUrl(): string;

/**
 * Returns URL of the appropriate file image based on the file type identifier (see getFriendlyNameForFileExtension)
 */
static getIconUrlByFileExtension(item: string, defaultIconPath?: string): string;

/**
 * Returns string that contains safe call to HP.Show, passing over the itemId, hpContainerId and templateUrl parameters, and supplying true for wide parameter.
 */
static getShowHoverPanelCallbackWide(itemId: string, hpContainerId: string, templateUrl: string): string;

/**
 * Returns string that contains safe call to HP.Show, passing over the itemId, hpContainerId and templateUrl parameters, and supplying false for wide parameter.
 */
static getShowHoverPanelCallback(itemId: string, hpContainerId: string, templateUrl: string): string;

/**
 * Returns string that contains safe call to HP.Hide
 */
static getHideHoverPanelCallback(): string;
static getHighlightedProperty(key: string, result: any, property: string): any;
static processHHXML(pre: string): string;
static createXMLDocument(xml: string): XMLDocument;
static getUnEncodedMultiValuedResults(multiValue: string, maxItems: number, rawDelimiter: string): string;
static getTrimmedString(value: string, cutOff: number): string;
static trimTitle(
title: string,
maximumLengthInChars: number,
numberOfTermsToUse: number): string;
static extractReplyTitleFromSummary(hitHighlightedSummary: string, titleLength: number): string;
static getTrimmedProcessedHHXMLString(value: string, cutOff: number): string;
static getMultipleHHXMLNodeValues(
xmlDoc: XMLDocument,
nodeName: string,
numItems: number,
rawDelimiter: string): string;
static getSingleHHXMLNodeValue(xmlDoc: XMLDocument, nodeName: string): string;
static isTableTypeof(resultTable: any, tableTypeName: string): boolean;
static isSubstrateTable(resultTable: any): boolean;
static getTableOfType(
tableCollection: Microsoft$SharePoint.Client.Search.Query$Query.Query$ResultTableCollection,
tableTypeName: string): Microsoft$SharePoint.Client.Search.Query$Query.Query$ResultTable;
static isFirstPromotedBlock(
resultTable: Microsoft$SharePoint.Client.Search.Query$Query.Query$ResultTable): boolean;
static isFirstRankedBlock(
resultTable: Microsoft$SharePoint.Client.Search.Query$Query.Query$ResultTable): boolean;
static isIntentTable(
resultTable: Microsoft$SharePoint.Client.Search.Query$Query.Query$ResultTable): boolean;
static createBehavior(id: string, type: any, properties: any, targetElementId: string): any;

/**
 * Uses SPAnimation to animate an element
 */
static animate(element: Element, animationID: any, finishFunc: any): void;
static hideElement(element: Element): void;
static showElement(element: Element): void;
static positionElement(element: Element, offset: string): void;
static resetElement(element: Element): void;
static shouldAnimate(dp: any): boolean;
static animateResults(result: Srch$Result, userAction: any): void;
static loadScripts(scriptReferences: string[], success: any, failure: any, timeout: number): void;
static appendScriptsToLoad(scripts: string[], script: string): void;
static registerLoadedScripts(scripts: string[]): void;

/**
 * Returns HTML for collapsible refiner title
 */
static collapsibleRefinerTitle(
propertyName: string,
idPrefix: string,
title: string,
iconClass: string,
customOnClick: string): string;

/**
 * Returns true if current page is osssearchresults.aspx
 */
static isDefaultSiteSearchPage(): boolean;

/**
 * Replaces tokens {searchcenterurl}, {contexturl}, {resultsurl}, {defaultpageslistname}, {Locale} and others, and converts URL to server-relative
 */
static replaceUrlTokens(url: string): string;

/**
 * Adds ctag parameter to the URL and replaces URL tokens
 */
static urlTokenExpansion(jsLink: string): string;
static includeCSS(templateLink: string, relativeLink: string): void;
static includeScript(templateLink: string, scriptLink: string): void;
static includeLanguageScript(templateLink: string, scriptLink: string): void;
static isSPFSKU(): boolean;

/**
 * Retrieves localized string with the specified id
 */
static loadResource(id: string): string;

/**
 * Retrieves localized string with the specified id
 */
static loadResourceForTemplate(id: string, templateFunc: (ctx: any) => string): string;

/**
 * Registers in system resources defined by the dictionary object
 */
static registerResourceDictionary(locale: string, dict: {
[key: string]: string
}): void;
static restorePath(el: Element, originalText: string, selectText: string): void;
static selectPath(text: string, el: Element): void;
static setPath(e: Event, el: Element, text: string, originalText: string): void;
static restoreText(el: Element, originalText: string, selectText: string): void;
static selectText(text: string, el: Element): void;

/**
 * Renders datetime value in friendly format into element specified by targetElementID
 */
static renderFriendlyTimeIntervalString(dateTimeSinceUTC: Date, targetElementID: string, calendarType?: number): void;

/**
 * Returns human-friendly representation of the datetime value, e.g. "A few seconds ago""
 */
static getFriendlyTimeInterval(dateTimeSince: Date, calendarType: number): string;

/**
 * Gets calendar type according to the current regional settings
 */
static getCalendarType(): any;
static htmlEncodeNonBase64ImageUrl(url: string): string;
static hitHighlightingOpenTag: string;
static hitHighlightingCloseTag: string;
static titleTruncationLength: number;
static titleTruncationLengthWithMetadata: number;
static titleTruncationLengthWithPreview: number;
static summaryTruncationLength: number;
static summaryTruncationLengthWithPreview: number;
static pathTruncationLength: number;
static pathTruncationLengthWithPreview: number;
static pathTruncationLengthWithMetadata: number;
static personaControlRenderedThreshold: number;
static maximumSocialMetadataValue: number;
static contentFixedWidthLength: number
}

declare class U$PropNames  {
static renderTemplates: "RenderTemplates";
static renderTemplateId: "RenderTemplateId";
static tableType: "TableType";
static queryErrors: "QueryErrors";
static resultTables: "ResultTables";
static resultRows: "ResultRows";
static queryId: "QueryId";
static properties: "Properties";
static rowCount: "RowCount";
static totalRows: "TotalRows";
static totalRowsIncludingDuplicates: "TotalRowsIncludingDuplicates";
static queryRuleId: "QueryRuleId";
static parentTableReference: "ParentTableReference";
static isFirstPinnedBlock: "IsFirstPinnedResultBlock";
static isFirstRankedBlock: "IsFirstRankedResultBlock"
}

declare class U$Ids  {
static group: "_group";
static groupTitle: "_groupTitle";
static groupLink: "_groupLink";
static groupContent: "_groupContent";
static item: "_item";
static body: "_itemBody";
static title: "_itemTitle";
static icon: "_itemIcon";
static titleLink: "_itemTitleLink";
static summary: "_itemSummary";
static path: "_itemPath";
static hover: "_hover";
static visualBestBet: "_visualBestBet";
static preview: "_itemPreview";
static deepLinks: "_deepLinks";
static members: "_members";
static replies: "_replies";
static discussions: "_discussions";
static likes: "_likes";
static postInfo: "_postInfo"
}

declare class U$LoadScriptsState  {
scriptsToLoad: any;
progress: number;
timeoutHandle: any
}

declare  class U$LoadScriptsProgress {
  constructor(...args: empty): mixed;
static +loading: Class<U$LoadScriptsProgress__loading> & U$LoadScriptsProgress__loading & 0;// 0
static +success: Class<U$LoadScriptsProgress__success> & U$LoadScriptsProgress__success & 1;// 1
static +failure: Class<U$LoadScriptsProgress__failure> & U$LoadScriptsProgress__failure & 2;// 2

}

declare class U$LoadScriptsProgress__loading mixins U$LoadScriptsProgress {}
declare class U$LoadScriptsProgress__success mixins U$LoadScriptsProgress {}
declare class U$LoadScriptsProgress__failure mixins U$LoadScriptsProgress {}


declare class Srch$ScriptApplicationManager  {
static get_current(): Srch$ScriptApplicationManager;
static get_clientRuntimeContext(): SP$SP$ClientRuntimeContext;

/**
 * Returns server-relative link to _layouts/EditUserPref.aspx
 */
get_preferencesUrl(): string;

/**
 * Returns server-relative link to _layouts/manageresulttypes.aspx
 */
get_resultTypesUrl(): string;

/**
 * Returns server-relative link to _layouts/DesignDisplayTemplates.aspx
 */
get_displayTemplatesUrl(): string;

/**
 * Returns server-relative link to _layouts/listqueryrules.aspx
 */
get_queryRulesUrl(): string;

/**
 * Returns server-relative link to _layouts/manageresultsources.aspx
 */
get_resultSourcesUrl(): string;

/**
 * Returns absolute URL of the current page (without ? and # parts)
 */
get_pagePath(): string;

/**
 * Adds handler for the preload event
 */
add_preLoad(handlerFunction: (instance: any, eventArgs: any) => void): void;

/**
 * Removes handler for the preload event
 */
remove_preLoad(handlerFunction: (instance: any, eventArgs: any) => void): void;

/**
 * Raises the preload event
 */
raisePreLoadEvent(): void;

/**
 * Adds handler for the load event
 */
add_load(handlerFunction: (instance: any, eventArgs: any) => void): void;

/**
 * Removes handler for the load event
 */
remove_load(handlerFunction: (instance: any, eventArgs: any) => void): void;

/**
 * Raises the load event
 */
raiseLoadEvent(): void;

/**
 * Adds handler for the postload event
 */
add_postLoad(handlerFunction: (instance: any, eventArgs: any) => void): void;

/**
 * Removes handler for the postload event
 */
remove_postLoad(handlerFunction: (instance: any, eventArgs: any) => void): void;

/**
 * Raises the postload event
 */
raisePostLoadEvent(): void;
initialize(): void;
dispose(): void;

/**
 * Registers DisplayControl, DataProvider or SearchBox in the system.
 * After registration the controls will be correctly processed in the page search context.
 */
registerClientControl(clientControl: Srch$DisplayControl | Srch$DataProvider | Srch$SearchBox): void;

/**
 * Puts specified hash-key address into the current page location.
 * @param url The hash-key, e.g. '#k=test'
 */
navigateTo(url: string): void;

/**
 * Gets the current search session ID from the cookies (if session ID does not exist in the cookies yet - it will be added)
 */
get_searchSessionID(): void
}

declare class Srch$Res  {
static sb_ResultsPageTitle: string;
static sb_EmptyQueryWarning: string;
static sb_InvalidResultPageURL: string;
static sb_SitePrompt: string;
static sb_Prompt: string;
static sb_Prompt_NavNode: string;
static sb_GoSearch: string;
static sb_GoNav: string;
static sb_AdvancedLink: string;
static sb_PreferencesLink: string;
static sb_AccessKey: string;
static sb_SearchInProgress: string;
static qs_PersonalResultTitleSingular: string;
static qs_PersonalResultTitlePlural: string;
static qs_NameSuggestionsTitle: string;
static dp_ScriptLoadFailed: string;
static rf_EmptyRefinement: string;
static rf_RefinementTitle: string;
static rf_RefineBy: string;
static rf_All: string;
static rf_RefineByAuthorGoButton: string;
static rf_Apply: string;
static rf_AddProperty: string;
static rs_ResultsTitle: string;
static rs_MoveToPage: string;
static rs_MoveToPrevPage: string;
static rs_MoveToNextPage: string;
static rs_GroupMoreLink: string;
static rs_Hide_Results: string;
static qb_GetRecItems: string;
static qb_ScopeRecItems: string;
static qb_GetFillIn: string;
static qb_ShowRecsOnly: string;
static qb_FillInPopular: string;
static qb_FillInPopularScope: string;
static qb_FillInKeywords: string;
static qb_NoCollapseString: string;
static qb_ShowAllCollapseString: string;
static qb_ShowRefinersOnly: string;
static qb_RecsFromURLToken: string;
static qb_Remove: string;
static qb_FallbackResultTitle: string;
static rf_DefaultNumberLabels_min: string;
static rf_DefaultNumberLabels_max: string;
static rf_DefaultNumberLabels_range: string;
static rf_DefaultNumberLabels_value: string;
static rf_DefaultDateRangeLabels_min: string;
static rf_DefaultDateRangeLabels_max: string;
static rf_DefaultDateRangeLabels_range: string;
static rf_DefaultDateRangeLabels_value: string;
static rf_DefaultDateBoundaryLabels_0: string;
static rf_DefaultDateBoundaryLabels_1: string;
static rf_DefaultDateBoundaryLabels_2: string;
static rf_DefaultDateBoundaryLabels_3: string;
static rf_RangeBoundariesAnyValue: string;
static rf_RefinementTitle_Author: string;
static rf_RefinementTitle_AuthorOWSUSER: string;
static rf_RefinementTitle_Write: string;
static rf_RefinementTitle_LastModifiedTime: string;
static rf_RefinementTitle_owstaxidmetadataalltagsinfo: string;
static rf_RefinementTitle_owsmetadatafacetinfo: string;
static rf_RefinementTitle_languages: string;
static rf_RefinementTitle_ContentType: string;
static rf_RefinementTitle_Size: string;
static rf_RefinementTitle_UrlDepth: string;
static rf_RefinementTitle_People: string;
static rf_RefinementTitle_FileType: string;
static rf_RefinementTitle_FileExtension: string;
static rf_RefinementLabel_More: string;
static rf_ShowMoreResults_Tooltip: string;
static rf_RefinementLabel_Less: string;
static rf_RefinementLabel_EnterName: string;
static rf_RefinementTitle_CreatedBy: string;
static rf_RefinementTitle_from: string;
static rf_RefinementTitle_recipients: string;
static rf_RefinementTitle_subject: string;
static rf_RefinementTitle_Kind: string;
static rf_RefinementTitle_ContentClass: string;
static rf_RefinementTitle_WebTemplate: string;
static rf_RefinementTitle_participants: string;
static rf_RefinementTitle_AttachmentType: string;
static rf_RefinementTitle_BaseOfficeLocation: string;
static rf_RefinementTitle_companies: string;
static rf_RefinementTitle_ContentTypeId: string;
static rf_RefinementTitle_Created: string;
static rf_RefinementTitle_Department: string;
static rf_RefinementTitle_PeopleKeywords: string;
static rf_RefinementTitle_DisplayAuthor: string;
static rf_RefinementTitle_format: string;
static rf_RefinementTitle_ImageDateCreated: string;
static rf_RefinementTitle_JobTitle: string;
static rf_RefinementTitle_Location: string;
static rf_RefinementTitle_locations: string;
static rf_RefinementTitle_ManagedProperties: string;
static rf_RefinementTitle_MediaDuration: string;
static rf_RefinementTitle_PeopleInMedia: string;
static rf_RefinementTitle_personnames: string;
static rf_RefinementTitle_PictureHeight: string;
static rf_RefinementTitle_PictureWidth: string;
static rf_RefinementTitle_PostAuthor: string;
static rf_RefinementTitle_recommendedfor: string;
static rf_RefinementTitle_Responsibilities: string;
static rf_RefinementTitle_SharedWithInternal: string;
static rf_RefinementTitle_Site: string;
static rf_RefinementTitle_sitename: string;
static rf_RefinementTitle_Tags: string;
static rf_RefinementTitle_Title: string;
static rf_ResultTypeRefinerValue_MSAccess: string;
static rf_ResultTypeRefinerValue_AdobePDF: string;
static rf_ResultTypeRefinerValue_Assignment: string;
static rf_ResultTypeRefinerValue_Archive: string;
static rf_ResultTypeRefinerValue_Blog: string;
static rf_ResultTypeRefinerValue_Book: string;
static rf_ResultTypeRefinerValue_Community: string;
static rf_ResultTypeRefinerValue_Course: string;
static rf_ResultTypeRefinerValue_Discussion: string;
static rf_ResultTypeRefinerValue_Email: string;
static rf_ResultTypeRefinerValue_MSExcel: string;
static rf_ResultTypeRefinerValue_Image: string;
static rf_ResultTypeRefinerValue_Lesson: string;
static rf_ResultTypeRefinerValue_LotusNotes: string;
static rf_ResultTypeRefinerValue_NewsfeedPost: string;
static rf_ResultTypeRefinerValue_MSOneNote: string;
static rf_ResultTypeRefinerValue_MSPowerPoint: string;
static rf_ResultTypeRefinerValue_MSProject: string;
static rf_ResultTypeRefinerValue_MSPublisher: string;
static rf_ResultTypeRefinerValue_SharePointSite: string;
static rf_ResultTypeRefinerValue_Task: string;
static rf_ResultTypeRefinerValue_TeamSite: string;
static rf_ResultTypeRefinerValue_Text: string;
static rf_ResultTypeRefinerValue_Video: string;
static rf_ResultTypeRefinerValue_Visio: string;
static rf_ResultTypeRefinerValue_Wiki: string;
static rf_ResultTypeRefinerValue_Webpage: string;
static rf_ResultTypeRefinerValue_MSWord: string;
static rf_ResultTypeRefinerValue_XML: string;
static rf_OtherValue: string;
static rf_ClearAll: string;
static cc_err_WebPartErrorMessageDisplayHeader: string;
static cc_err_DataErrorMessageDisplayHeader: string;
static cc_err_RenderingErrorMessageDisplayHeader: string;
static cc_err_TemplateNotFoundMessage: string;
static cc_err_HiddenWithNoResultsWarningMessage: string;
static cc_err_ShowMessageDetails: string;
static cc_err_HideMessageDetails: string;
static cc_err_CorrelationIdMessage: string;
static cc_err_CustomLocStringWarningDisplayHeaderFormat: string;
static cc_err_NoCustomLoadedLocStringWarningDisplayHeaderFormat: string;
static cc_err_MalformedHeader: string;
static cc_err_QueryThrottledDetailsHeader: string;
static cc_ValueRenderer_FileSizeKilobyte: string;
static cc_ValueRenderer_FileSizeMegabyte: string;
static cc_ValueRenderer_FileSizeGigabyte: string;
static cc_ValueRenderer_BooleanYes: string;
static cc_ValueRenderer_BooleanNo: string;
static qb_SortTab_ThenBy: string;
static qb_SortTab_ChangeRankingWhen: string;
static qb_SortTab_OrWhen: string;
static qb_TestQueryTab_ShowAdvanced: string;
static qb_TestQueryTab_HideAdvanced: string;
static recs_ControlTitle: string;
static recs_ShowDetails: string;
static recs_SaveLink: string;
static recs_Open: string;
static recs_Recommended: string;
static recs_Fillin: string;
static recs_LastEditedBy: string;
static recs_Location: string;
static recs_AltIcon: string;
static pkr_CatalogPickerMoreLink: string;
static pkr_CatalogPickerMoreLinkToolTip: string;
static pkr_CatalogPickerSelectLinkToolTip: string;
static item_CopyLink: string;
static item_Tooltip_CopyLink: string;
static item_Alt_Preview: string;
static hp_Tooltip_Close: string;
static hp_Size: string;
static hp_Views_Singular: string;
static hp_Views_Plural: string;
static hp_ViewsLifeTime: string;
static hp_Popularity: string;
static hp_PopularityLifeTimePlural: string;
static hp_PopularityLifeTimePluralAndRecentPlural: string;
static hp_PopularityLifeTimeSingular: string;
static hp_PopularityLifeTimeSingularAndRecentSingular: string;
static hp_PopularityLifeTimePluralAndRecentSingular: string;
static hp_Tooltip_ViewsLifeTime: string;
static hp_Tooltip_ViewsRecent: string;
static hp_ChangedByAuthorDate: string;
static hp_Tooltip_Views: string;
static hp_LastModified: string;
static hp_Tooltip_LastModified: string;
static hp_RecentlyEdited: string;
static hp_Tooltip_Contributors: string;
static hp_Authors2: string;
static hp_Authors3: string;
static hp_Authors4: string;
static hp_Authors5Singular: string;
static hp_Authors5Plural: string;
static hp_RecentlyEdited_eDiscovery: string;
static hp_Tooltip_RecentlyEdited_More: string;
static hp_RecentlyEdited_More: string;
static hp_ViewDuplicates: string;
static hp_Tooltip_ViewDuplicates: string;
static hp_ViewLibrary: string;
static hp_Tooltip_ViewLibrary: string;
static hp_Send_Title: string;
static hp_Send_Open: string;
static hp_Send_OpenInClient: string;
static hp_Send_OpenInWeb: string;
static hp_Send_ViewRelated: string;
static hp_Send: string;
static hp_Tooltip_Send: string;
static hp_OpenInClient: string;
static hp_Edit: string;
static hp_Follow: string;
static hp_NoData: string;
static hp_Tooltip_OpenInClient: string;
static hp_Alt_ImagePreview: string;
static hp_PictureDimensions: string;
static hp_PictureHeightWidth: string;
static hp_DateTaken: string;
static hp_SectionHeadings: string;
static hp_Alt_SiteLogo: string;
static hp_SiteDescription: string;
static hp_Open: string;
static hp_Tooltip_Open: string;
static hp_Tooltip_Follow: string;
static hp_Tooltip_StopFollowing: string;
static tprprt_Recent: string;
static tprprt_Lifetime: string;
static tprprt_excel_report_entrypoint: string;
static qb_token_Equals: string;
static qb_token_NotEquals: string;
static qb_token_GreaterThan: string;
static qb_token_LessThan: string;
static qb_token_Contains: string;
static qb_token_NotContains: string;
static qb_token_ContainsStartsWith: string;
static qb_token_StartsWith: string;
static qb_token_NotStartsWith: string;
static qb_token_SiteColletion: string;
static qb_token_Site: string;
static qb_token_Page: string;
static qb_token_Topic: string;
static qb_token_TopicIdWithChildren: string;
static qb_token_UserName: string;
static qb_token_PreferredContentLanguage: string;
static qb_token_Date: string;
static qb_token_SearchBoxQuery: string;
static qb_token_SearchTerms: string;
static qb_token_QueryString: string;
static qb_token_URLToken: string;
static qb_token_PageField: string;
static qb_token_SiteLocale: string;
static qb_token_DisplayLanguage: string;
static qb_token_OnlySites: string;
static qb_token_OnlyLists: string;
static qb_token_OnlyListItems: string;
static qb_path_SiteCollection: string;
static qb_path_Site: string;
static qb_path_Page: string;
static qb_path_List: string;
static qb_path_Catalog: string;
static qb_path_QueryString: string;
static qb_path_URL_token: string;
static qb_path_URL: string;
static qb_path_None: string;
static qb_ContentType_Article: string;
static qb_ContentType_Audio: string;
static qb_ContentType_DocSet: string;
static qb_ContentType_Page: string;
static qb_ContentType_Picture: string;
static qb_ContentType_Report: string;
static qb_ContentType_Task: string;
static qb_ContentType_Video: string;
static qb_ContentType_WikiPage: string;
static qb_PathControl_ChooseQueryString: string;
static qb_PathControl_ChooseURL: string;
static qb_PathControl_ChooseTag: string;
static qb_PathControl_ChooseTag_None: string;
static qb_PathControl_ChooseTag_ThisTag: string;
static qb_PathControl_ChooseTag_Topic: string;
static qb_PathControl_ChooseTag_SubTopic: string;
static qb_UserQuery_TypeQuery: string;
static qb_UserQuery_Properties: string;
static qb_UserQuery_AddToken: string;
static qb_UserQuery_ChooseContentType: string;
static qb_UserQuery_AddAdditionalFilter: string;
static qb_UserQuery_ChooseSort: string;
static qb_UserQuery_PickCatalog2: string;
static qb_UserQuery_ConfigureCatalog: string;
static qb_UserQuery_ManualValue: string;
static qb_UserQuery_SelectProperty: string;
static qb_UserQuery_SelectValue: string;
static qb_UserQuery_ShowAllProperties: string;
static qb_QueryType_UserQuery: string;
static qb_QueryType_Latest: string;
static qb_QueryType_ContentType: string;
static qb_QueryType_RecommendedItems: string;
static qb_QueryType_Popular: string;
static qb_QueryType_Video: string;
static qb_QueryType_Catalog: string;
static qb_Error_SourceIdInvalid: string;
static qb_Tab_FilterBy: string;
static qb_Tab_QueryHelper: string;
static qb_Tab_SortBy: string;
static qb_Tab_TestQuery: string;
static qb_Tab_Settings: string;
static qb_NotApplicable: string;
static qb_ComplexObject: string;
static qb_PreviewResult_NoTemplateVariables: string;
static qb_PreviewResult_CouldNotResolveTemplateVariables: string;
static qb_PreviewResult_ErrorExpandTokens: string;
static qb_PreviewResult_EmptyQuery: string;
static searchResult_NoResult: string;
static qb_CatalogPicker_Title: string;
static qb_UseDefinedSort: string;
static hp_Duration: string;
static hp_PeopleInVideo: string;
static hp_PostedBy: string;
static hp_VideoDescription: string;
static hp_GoToVideoPage: string;
static item_Community_Member: string;
static item_Community_Members: string;
static item_Community_MemberLabel: string;
static item_Community_MembersLabel: string;
static item_Reply: string;
static item_Replies: string;
static item_ReplyLabel: string;
static item_RepliesLabel: string;
static item_NoReplies: string;
static item_Like: string;
static item_Likes: string;
static item_NoLikes: string;
static item_RepliesAndLikes: string;
static item_MoreThan: string;
static item_DefaultTitle: string;
static item_BestReply: string;
static item_postDate: string;
static item_postAuthor: string;
static item_postAuthorDate: string;
static item_replyDate: string;
static item_replyAuthor: string;
static item_replyAuthorDate: string;
static item_Community_Discussion: string;
static item_Community_Discussions: string;
static item_Community_DiscussionLabel: string;
static item_Community_DiscussionsLabel: string;
static hp_Discussion: string;
static hp_DiscussionCategory: string;
static hp_Reply: string;
static hp_ReplyCategory: string;
static hp_PopularDiscussions: string;
static hp_OriginalPost: string;
static hp_RecentReplies: string;
static hp_ViewDiscussion: string;
static hp_ViewConversation: string;
static hp_Community: string;
static hp_VisitCommunity: string;
static hp_MicroBlog: string;
static item_MicroBlog_Reply: string;
static item_MicroBlog_Replies: string;
static item_MicroBlog_Like: string;
static item_MicroBlog_Likes: string;
static item_MicroBlog_NoReplies: string;
static item_MicroBlog_SeeFullConversation: string;
static item_MicroBlog_RootPostTitle: string;
static item_People_Responsibilities: string;
static item_People_Skills: string;
static item_People_PastProjects: string;
static item_People_Interests: string;
static item_People_Schools: string;
static item_People_Memberships: string;
static item_People_EditProfileLink: string;
static item_People_SelfSearchFrequency: string;
static item_People_SelfSearchFrequency_ViewsMonths_Singular: string;
static item_People_SelfSearchFrequency_ViewsMonths_Plural: string;
static item_People_SelfSearchFrequency_ViewsWeeks_Singular: string;
static item_People_SelfSearchFrequency_ViewsWeeks_Plural: string;
static item_People_SelfSearchKeywords: string;
static item_People_LastModified: string;
static item_People_NoPresenceAvailable: string;
static hp_PeopleItem_Skills: string;
static hp_PeopleItem_PastProjects: string;
static hp_PeopleItem_Interests: string;
static hp_PeopleItem_Schools: string;
static hp_PeopleItem_Summary: string;
static hp_PeopleItem_Memberships: string;
static hp_PeopleItem_Authorship: string;
static hp_PeopleItem_RelatedThrough: string;
static hp_PeopleItem_MoreItems: string;
static hp_PeopleItem_Related: string;
static hp_PeopleItem_NoInformationAvailable: string;
static hp_PeopleItem_ViewProfile: string;
static hp_WebPageItem_Results: string;
static hp_WebPageItem_MoreResults_Label: string;
static rs_Preferences: string;
static rs_Advanced: string;
static rs_NoResult: string;
static rs_SingleResultCount: string;
static rs_ResultCount: string;
static rs_ApproximateResultCount: string;
static rs_EdiscoveryTopResultCount: string;
static rs_UpscopeTitle: string;
static rs_Upscope: string;
static rs_DidYouMean: string;
static rs_Edit_ResultSourcesTitle: string;
static rs_Edit_ResultTypesTitle: string;
static rs_Edit_QueryRulesTitle: string;
static rs_Edit_ResultSourcesDescription: string;
static rs_Edit_ResultSources: string;
static rs_Edit_ResultTypesDescription: string;
static rs_Edit_ResultType: string;
static rs_Edit_DisplayTemplate: string;
static rs_Edit_QueryRulesDescription: string;
static rs_Edit_QueryRules: string;
static rs_Edit_PromotedTitle: string;
static rs_Edit_RankedTitle: string;
static rs_Edit_PromotedDescription: string;
static rs_Edit_RankedDescription: string;
static rs_Edit_ConfigureSearchResults: string;
static rs_Edit_ConfigureSearchResults_Link: string;
static rs_NoResultsTitle: string;
static rs_NoResultsMessageWhenSearchSkipped: string;
static rs_NoResultsSuggestions: string;
static rs_NoResultsSpelling: string;
static rs_NoResultsDifferentTerms: string;
static rs_NoResultsGeneralTerms: string;
static rs_NoResultsFewerTerms: string;
static rs_NoResultsRefiners: string;
static rs_NoResultsTips: string;
static rs_NoResultsTips_Link: string;
static us_NoTerm_Error: string;
static u_ScriptLoadFail: string;
static u_ScriptLoadFailForViewer: string;
static item_NoImageMessage: string;
static control_NoResultsDisplayMode: string;
static control_NoResultsEditMode: string;
static file_CSS: string;
static file_Help: string;
static file_Installer: string;
static file_JavaScript: string;
static file_Log: string;
static file_Mail: string;
static file_Access: string;
static file_Excel: string;
static file_InfoPath: string;
static file_OneNote: string;
static file_PowerPoint: string;
static file_Project: string;
static file_Publisher: string;
static file_SPDesigner: string;
static file_Visio: string;
static file_Word: string;
static file_XPS: string;
static file_Audio: string;
static file_RTF: string;
static file_Text: string;
static file_WebPage: string;
static file_XML: string;
static file_XSL: string;
static file_Zip: string;
static ct_Folder: string;
static ct_Image: string;
static file_Document: string;
static cc_sts_list_announcements: string;
static cc_sts_list_events: string;
static cc_sts_list_contacts: string;
static cc_sts_list_discussionboard: string;
static cc_sts_list_documentlibrary: string;
static cc_sts_listitem_documentlibrary: string;
static cc_sts_list_links: string;
static cc_sts_list: string;
static cc_sts_listitem: string;
static cc_sts_list_picturelibrary: string;
static cc_sts_listitem_picturelibrary: string;
static cc_sts_web: string;
static cc_sts_site: string;
static cc_sts_list_survey: string;
static cc_sts_list_tasks: string;
static cc_sts_list_xmlform: string;
static rs_SortDescription: string;
static rs_SocialDistanceSort: string;
static rs_LanguageDescription: string;
static rs_LanguagePreferences: string;
static rs_PreferredSearchLanguage: string;
static rs_MoreLanguages: string;
static rs_SearchScope: string;
static rs_SearchScopeTooltip: string;
static rs_SelectPreferredSearchLanguage: string;
static rs_SelectPreferredSearchLanguage_Language: string;
static edu_BookAuthor: string;
static edu_BookCategory: string;
static edu_BookRights: string;
static edu_BookReleaseDate: string;
static edu_BookHomePageLink: string;
static edu_Class: string;
static edu_AssignmentCategory: string;
static edu_AssignmentFormat: string;
static edu_AssignmentFormatNone: string;
static edu_AssignmentFormatOnlineFile: string;
static edu_AssignmentFormatOnlineQuiz: string;
static edu_AssignmentFormatInClass: string;
static edu_AssignmentFormatUnknown: string;
static edu_AssignmentMaxPoints: string;
static edu_DueDate: string;
static edu_ReadPermission: string;
static edu_PrintPermission: string;
static edu_WritePermission: string;
static edu_EnableScriptPermission: string;
static edu_AssignmentLabel: string;
static edu_LessonLabel: string;
static edu_BookLabel: string;
static rf_RefinementTitle_DMSDocAuthor: string;
static rf_RefinementTitle_DMSCategory: string;
static rf_RefinementTitle_EDiscSpecifyProperty: string;
static refconf_NoSampleValues: string;
static refconf_SortBy_Name: string;
static refconf_SortBy_Number: string;
static refconf_SortBy_Count: string;
static refconf_SortDirection_Ascending: string;
static refconf_SortDirection_Descending: string;
static refconf_Error_FailedToRestoreConfiguration: string;
static refconf_Section_SuggestedRefiners: string;
static refconf_Section_OtherRefiners: string;
static refconf_Section_Separator: string;
static refconf_SampleValuesDialog_Title: string;
static refconf_ResultsWithValues: string;
static refconf_TotalResults: string;
static refconf_FNT_ConfigurationLoadFailure: string;
static refconf_FNT_ConfigurationLoadWarning: string;
static refconf_FNT_ConfigurationLoadWarningNullResponse: string;
static refconf_FNT_InheritModeTermInfoSingularFormatString: string;
static refconf_FNT_DCR_InheritModeAnotherTermset: string;
static refconf_FNT_DCR_CustomRefiners: string;
static refconf_FNT_DCR_DescendantInfo_ChildTermsTotal: string;
static refconf_FNT_DCR_DescendantInfo_ChildTermsNotInheriting: string;
static refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheriting: string;
static refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheritingLinkAnchor: string;
static refconf_FNT_DCR_StopInheritingPopupTitle: string;
static refconf_FNT_DCR_InheritPopupTitle: string;
static refconf_FNT_DCR_RefinementConfigurationDialogTitle: string;
static refconf_FNT_DCR_LoadingConfiguration: string;
static refconf_FNT_DCR_DescendantStoppingInheritancePopupTitle: string;
static refconf_FNT_DCR_UseManualIntervals: string;
static refconf_FNT_DCR_RefinementPreviewPopupTitle: string;
static refconf_FNT_DCR_PropertiesForFriendly: string;
static refconf_FNT_DCR_PropertiesFor: string;
static refconf_FNT_DCR_TotalResultsTooltip: string;
static refconf_FNT_DCR_GeneratingPreview: string;
static refconf_DCR_Yes: string;
static refconf_DCR_No: string;
static refconf_DCR_FacetedNavigationProgressTitle: string;
static refconf_DCR_RefinementConfigurationDialogProgressTitle: string;
static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltip: string;
static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipNoAliases: string;
static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipSeparator: string;
static refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Warning: string;
static refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Error: string;
static refconf_DCR_RefinementConfigurationDialog_NoSuggestedRefiners_Warning: string;
static refconf_DCR_RefinementConfigurationDialog_InvalidSelectedRefiner_Warning: string;
static edisc_MultiValueFormat: string;
static edisc_NoSubject: string;
static edisc_ControlPagingFormat: string;
static hp_Summary: string;
static rf_DefaultMinutesLabels_min: string;
static rf_DefaultMinutesLabels_max: string;
static rf_DefaultMinutesLabels_range: string;
static rf_DefaultMinutesLabels_value: string;
static hp_NowDateTime_Today: string;
static hp_NowDateTime_Yesterday: string;
static hp_NowDateTime_MonthAgo: string;
static hp_NowDateTime_YearAgo: string;
static hp_NowDateTime_DaysAgo: string;
static hp_NowDateTime_MonthsAgo: string;
static hp_NowDateTime_YearsAgo: string;
static rs_UpScopeActionPhrase: string;
static control_Content_NoResultsDisplayMode: string;
static control_RollupPage_NoResultsDisplayMode: string;
static control_Content_NoResultsEditMode: string;
static item_Diagnostic_PictureSlot: string;
static item_Diagnostic_PathSlot: string;
static item_Diagnostic_Preview: string;
static item_Diagnostic_Value: string;
static item_Diagnostic_MappedManagedProperty: string;
static item_Diagnostic_PropertyMappings: string;
static item_Diagnostic_SlotNameFormat: string;
static item_Diagnostic_ItemTitleFormat: string;
static hp_Preview_LoadingImgAlt: string;
static rf_EDiscExTypeRefinerValue_Email: string;
static rf_EDiscExTypeRefinerValue_Contacts: string;
static rf_EDiscExTypeRefinerValue_Meetings: string;
static rf_EDiscExTypeRefinerValue_Tasks: string;
static rf_EDiscExTypeRefinerValue_Notes: string;
static rf_EDiscExTypeRefinerValue_Documents: string;
static rf_EDiscExTypeRefinerValue_Journal: string;
static rf_EDiscExTypeRefinerValue_IM: string;
static control_EDisc_Subject: string;
static control_EDisc_Recipients: string;
static control_EDisc_Sender: string;
static control_EDisc_DateSent: string;
static control_EDisc_Title: string;
static control_EDisc_Author: string;
static control_EDisc_DateModified: string;
static hp_EDisc_Cc: string;
static hp_EDisc_Bcc: string;
static item_Content_GenericNoImageSymbol: string;
static hp_EDisc_From: string;
static hp_EDisc_To: string;
static hp_EDisc_AttachmentsTooltip: string;
static control_EDisc_DateSentTooltip: string;
static rs_AlertMe: string;
static item_Generic_OpenCalloutTooltip: string;
static item_CommunityPortal_DetailsIntervals: string;
static item_CommunityPortal_DetailsMembers: string;
static item_CommunityPortal_DetailsDiscussions: string;
static item_CommunityPortal_DetailsReplies: string;
static item_CommunityPortal_Date: string;
static item_CommunityPortal_MoreDetails: string;
static ar_htv_Follow: string;
static ar_htv_StartFollowing: string;
static ar_htv_StopFollowing: string;
static ar_rec_NoResults: string;
static ar_Explanation: string;
static ar_htv_IsFollowed: string;
static ar_htv_IsNotFollowed: string;
static hp_Post: string;
static hp_Tooltip_Post: string;
static rs_PartialResultWarning_Line1: string;
static rs_PartialResultWarning_Line2: string;
static rs_HasParseExceptionWarning_Line1: string;
static rs_HasParseExceptionWarning_Line2: string
}
	
/**
 * Returns true if the value parameter is null or empty string
 */
declare function $isEmptyString(value: string): boolean

	
/**
 * Returns true if the value parameter is null or undefined
 */
declare function $isNull(value: any): boolean

	
/**
 * Returns true if the specified item is found in the specified array (uses '===' for comparing)
 */
declare function $isInArray(array: any[], item: any): boolean

	
/**
 * Returns true if the specified array is null or empty
 */
declare function $isEmptyArray(array: any[]): boolean

	
/**
 * (alias for SP.Utilities.HttpUtility.htmlEncode)
 */
declare function $htmlEncode(s: string): string

	
/**
 * (alias for SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode)
 */
declare function $scriptEncode(s: string): string

	
/**
 * (alias for SP.Utilities.HttpUtility.urlKeyValueEncode)
 */
declare function $urlKeyValueEncode(s: string): string

	
/**
 * (alias for SP.Utilities.HttpUtility.urlPathEncode)
 */
declare function $urlPathEncode(s: string): string

	
/**
 * Ensures that url has correct protocol or is a relative URL, and html-encodes it.
 * If URL is incorrect, returns empty string.
 */
declare function $urlHtmlEncode(s: string): string

	declare function $imgSrcUrl(p: any): string

	declare function $contentLineText(p: any): any

	
/**
 * Returns the ClientControl associated with specified DOM element (alias for Srch.U.getClientComponent)
 */
declare function $getClientControl(e: Element): Srch$Srch$ClientControl

	
/**
 * (alias for Srch.U.getResultObject)
 */
declare function $getResultItem(id: string): any

	
/**
 * (alias for Srch.U.setResultObject)
 */
declare function $setResultItem(id: string, resultObject: any): void

	
/**
 * (alias for Srch.U.getResultObject)
 */
declare function $getResultObject(id: string): any

	
/**
 * (alias for Srch.U.setResultObject)
 */
declare function $setResultObject(id: string, resultObject: any): void

	
/**
 * (alias for Srch.U.findResultObjectFromDOM)
 */
declare function $findResultObjectFromDOM(e: Element, type: string): void

	declare function $getItemValue(ctx: any, nameToLookup: string): any

	declare function $getCachedItemValue(ctx: any, nameToLookup: string): any

	declare function $includeScript(templateLink: string, relativeLink: string): void

	declare function $includeCSS(templateLink: string, scriptLink: string): void

	declare function $includeLanguageScript(templateLink: string, scriptLink: string): any

	
/**
 * Registers in system resources defined by the dictionary object (alias for Srch.U.registerResourceDictionary)
 */
declare function $registerResourceDictionary(locale: string, dict: {
[key: string]: string
}): void

	
/**
 * Retrieves localized string with the specified id
 */
declare function $resource(id: string): string

	
/**
 * (calls Srch.U.setItemRenderWrapper)
 */
declare function $setItemWrapperCallback(renderCtx: any, itemWrapperFunction: any): void

	
/**
 * (calls Srch.U.addRenderContextCallback)
 */
declare function $addRenderContextCallback(renderCtx: any, itemWrapperFunction: any): void

    }
