declare module "sharepoint" {
  declare var _spBodyOnLoadFunctions: Array<() => void>;
  declare var _spBodyOnLoadFunctionNames: string[];
  declare var _spBodyOnLoadCalled: boolean;
  declare function ExecuteOrDelayUntilBodyLoaded(initFunc: () => void): void;

  declare function ExecuteOrDelayUntilScriptLoaded(
    func: () => void,
    depScriptFileName: string
  ): boolean;

  declare function ExecuteOrDelayUntilEventNotified(
    func: (...args: any[]) => void,
    eventName: string
  ): boolean;

  declare var Strings: any;

  declare var Sods: {|
    +missing: 1, // 1
    +loading: 2, // 2
    +pending: 3, // 3
    +loaded: 4, // 4
    +error: 5 // 5
  |};

  declare interface Sod {
    url: string;
    key: string;
    loaded: boolean;
    depkeys?: string[];
    state: $Values<typeof Sods>;
    qfn?: any[];
    reset?: boolean;
  }
  declare var _v_dictSod: {
    [address: string]: Sod
  };

  declare var npm$namespace$SP: {
    SOD: typeof SP$SOD,
    ListLevelPermissionMask: typeof SP$ListLevelPermissionMask,
    RequestExecutorErrors: typeof SP$RequestExecutorErrors,
    PermissionKind: typeof SP$PermissionKind,
    ClientRequestStatus: typeof SP$ClientRequestStatus,
    DateTimeKind: typeof SP$DateTimeKind,
    ULSTraceLevel: typeof SP$ULSTraceLevel,
    AddFieldOptions: typeof SP$AddFieldOptions,
    AppInstanceErrorSource: typeof SP$AppInstanceErrorSource,
    AppInstanceErrorType: typeof SP$AppInstanceErrorType,
    AppInstanceStatus: typeof SP$AppInstanceStatus,
    AppLicenseType: typeof SP$AppLicenseType,
    BaseType: typeof SP$BaseType,
    BrowserFileHandling: typeof SP$BrowserFileHandling,
    CalendarType: typeof SP$CalendarType,
    ChangeType: typeof SP$ChangeType,
    CheckinType: typeof SP$CheckinType,
    CheckOutType: typeof SP$CheckOutType,
    ChoiceFormatType: typeof SP$ChoiceFormatType,
    CustomizedPageStatus: typeof SP$CustomizedPageStatus,
    DateTimeFieldFormatType: typeof SP$DateTimeFieldFormatType,
    DateTimeFieldFriendlyFormatType: typeof SP$DateTimeFieldFriendlyFormatType,
    DraftVisibilityType: typeof SP$DraftVisibilityType,
    EventReceiverSynchronization: typeof SP$EventReceiverSynchronization,
    EventReceiverType: typeof SP$EventReceiverType,
    FeatureDefinitionScope: typeof SP$FeatureDefinitionScope,
    FieldType: typeof SP$FieldType,
    FieldUserSelectionMode: typeof SP$FieldUserSelectionMode,
    FileLevel: typeof SP$FileLevel,
    FileSystemObjectType: typeof SP$FileSystemObjectType,
    ControlMode: typeof SP$ControlMode,
    ListDataValidationFailureReason: typeof SP$ListDataValidationFailureReason,
    ListDataValidationType: typeof SP$ListDataValidationType,
    ListTemplateType: typeof SP$ListTemplateType,
    MoveOperations: typeof SP$MoveOperations,
    OpenWebOptions: typeof SP$OpenWebOptions,
    PageType: typeof SP$PageType,
    QuickLaunchOptions: typeof SP$QuickLaunchOptions,
    RecycleBinItemState: typeof SP$RecycleBinItemState,
    RecycleBinItemType: typeof SP$RecycleBinItemType,
    RelationshipDeleteBehaviorType: typeof SP$RelationshipDeleteBehaviorType,
    RoleType: typeof SP$RoleType,
    TemplateFileType: typeof SP$TemplateFileType,
    UpgradeStatus: typeof SP$UpgradeStatus,
    UpgradeType: typeof SP$UpgradeType,
    UrlFieldFormatType: typeof SP$UrlFieldFormatType,
    UrlZone: typeof SP$UrlZone,
    UserCustomActionRegistrationType: typeof SP$UserCustomActionRegistrationType,
    UserCustomActionScope: typeof SP$UserCustomActionScope,
    ViewScope: typeof SP$ViewScope,
    ViewType: typeof SP$ViewType,
    HtmlBuilder: typeof SP$HtmlBuilder,
    ScriptHelpers: typeof SP$ScriptHelpers,
    PageContextInfo: typeof SP$PageContextInfo,
    ContextPermissions: typeof SP$ContextPermissions,
    RequestExecutor: typeof SP$RequestExecutor,
    ProxyWebRequestExecutor: typeof SP$ProxyWebRequestExecutor,
    ProxyWebRequestExecutorFactory: typeof SP$ProxyWebRequestExecutorFactory,
    ScriptUtility: typeof SP$ScriptUtility,
    Guid: typeof SP$Guid,
    BaseCollection: typeof SP$BaseCollection,
    Base64EncodedByteArray: typeof SP$Base64EncodedByteArray,
    ConditionalScopeBase: typeof SP$ConditionalScopeBase,
    ClientObjectPropertyConditionalScope: typeof SP$ClientObjectPropertyConditionalScope,
    ClientResult: typeof SP$ClientResult,
    BooleanResult: typeof SP$BooleanResult,
    CharResult: typeof SP$CharResult,
    IntResult: typeof SP$IntResult,
    DoubleResult: typeof SP$DoubleResult,
    StringResult: typeof SP$StringResult,
    DateTimeResult: typeof SP$DateTimeResult,
    GuidResult: typeof SP$GuidResult,
    JsonObjectResult: typeof SP$JsonObjectResult,
    ClientDictionaryResultHandler: typeof SP$ClientDictionaryResultHandler,
    ClientUtility: typeof SP$ClientUtility,
    XElement: typeof SP$XElement,
    ClientXElement: typeof SP$ClientXElement,
    ClientXDocument: typeof SP$ClientXDocument,
    DataConvert: typeof SP$DataConvert,
    PageRequestFailedEventArgs: typeof SP$PageRequestFailedEventArgs,
    PageRequestSucceededEventArgs: typeof SP$PageRequestSucceededEventArgs,
    PageRequest: typeof SP$PageRequest,
    ResResources: typeof SP$ResResources,
    XmlWriter: typeof SP$XmlWriter,
    ClientConstants: typeof SP$ClientConstants,
    ClientSchemaVersions: typeof SP$ClientSchemaVersions,
    ClientErrorCodes: typeof SP$ClientErrorCodes,
    ClientAction: typeof SP$ClientAction,
    ClientActionSetProperty: typeof SP$ClientActionSetProperty,
    ClientActionSetStaticProperty: typeof SP$ClientActionSetStaticProperty,
    ClientActionInvokeMethod: typeof SP$ClientActionInvokeMethod,
    ClientActionInvokeStaticMethod: typeof SP$ClientActionInvokeStaticMethod,
    ClientObject: typeof SP$ClientObject,
    ClientObjectData: typeof SP$ClientObjectData,
    ClientObjectCollection: typeof SP$ClientObjectCollection,
    ClientObjectList: typeof SP$ClientObjectList,
    ClientObjectPrototype: typeof SP$ClientObjectPrototype,
    ClientObjectCollectionPrototype: typeof SP$ClientObjectCollectionPrototype,
    WebRequestEventArgs: typeof SP$WebRequestEventArgs,
    ClientRequest: typeof SP$ClientRequest,
    ClientRequestEventArgs: typeof SP$ClientRequestEventArgs,
    ClientRequestFailedEventArgs: typeof SP$ClientRequestFailedEventArgs,
    ClientRequestSucceededEventArgs: typeof SP$ClientRequestSucceededEventArgs,
    ClientRuntimeContext: typeof SP$ClientRuntimeContext,
    SimpleDataTable: typeof SP$SimpleDataTable,
    ClientValueObject: typeof SP$ClientValueObject,
    ClientValueObjectCollection: typeof SP$ClientValueObjectCollection,
    ExceptionHandlingScope: typeof SP$ExceptionHandlingScope,
    ObjectIdentityQuery: typeof SP$ObjectIdentityQuery,
    ObjectPath: typeof SP$ObjectPath,
    ObjectPathProperty: typeof SP$ObjectPathProperty,
    ObjectPathStaticProperty: typeof SP$ObjectPathStaticProperty,
    ObjectPathMethod: typeof SP$ObjectPathMethod,
    ObjectPathStaticMethod: typeof SP$ObjectPathStaticMethod,
    ObjectPathConstructor: typeof SP$ObjectPathConstructor,
    SerializationContext: typeof SP$SerializationContext,
    ResourceStrings: typeof SP$ResourceStrings,
    RuntimeRes: typeof SP$RuntimeRes,
    ParseJSONUtil: typeof SP$ParseJSONUtil,
    OfficeVersion: typeof SP$OfficeVersion,
    ClientContext: typeof SP$ClientContext,
    ULS: typeof SP$ULS,
    AccessRequests: typeof SP$AccessRequests,
    AlternateUrl: typeof SP$AlternateUrl,
    App: typeof SP$App,
    AppCatalog: typeof SP$AppCatalog,
    AppContextSite: typeof SP$AppContextSite,
    AppInstance: typeof SP$AppInstance,
    AppInstanceErrorDetails: typeof SP$AppInstanceErrorDetails,
    AppLicense: typeof SP$AppLicense,
    AppLicenseCollection: typeof SP$AppLicenseCollection,
    Attachment: typeof SP$Attachment,
    AttachmentCreationInformation: typeof SP$AttachmentCreationInformation,
    BasePermissions: typeof SP$BasePermissions,
    CamlQuery: typeof SP$CamlQuery,
    Change: typeof SP$Change,
    ChangeAlert: typeof SP$ChangeAlert,
    ChangeContentType: typeof SP$ChangeContentType,
    ChangeField: typeof SP$ChangeField,
    ChangeFile: typeof SP$ChangeFile,
    ChangeFolder: typeof SP$ChangeFolder,
    ChangeGroup: typeof SP$ChangeGroup,
    ChangeItem: typeof SP$ChangeItem,
    ChangeList: typeof SP$ChangeList,
    ChangeLogItemQuery: typeof SP$ChangeLogItemQuery,
    ChangeQuery: typeof SP$ChangeQuery,
    ChangeSite: typeof SP$ChangeSite,
    ChangeToken: typeof SP$ChangeToken,
    ChangeUser: typeof SP$ChangeUser,
    ChangeView: typeof SP$ChangeView,
    ChangeWeb: typeof SP$ChangeWeb,
    CompatibilityRange: typeof SP$CompatibilityRange,
    ContentType: typeof SP$ContentType,
    ContentTypeCreationInformation: typeof SP$ContentTypeCreationInformation,
    ContentTypeId: typeof SP$ContentTypeId,
    EventReceiverDefinition: typeof SP$EventReceiverDefinition,
    EventReceiverDefinitionCreationInformation: typeof SP$EventReceiverDefinitionCreationInformation,
    Feature: typeof SP$Feature,
    Field: typeof SP$Field,
    FieldCalculated: typeof SP$FieldCalculated,
    FieldCalculatedErrorValue: typeof SP$FieldCalculatedErrorValue,
    FieldMultiChoice: typeof SP$FieldMultiChoice,
    FieldChoice: typeof SP$FieldChoice,
    FieldComputed: typeof SP$FieldComputed,
    FieldNumber: typeof SP$FieldNumber,
    FieldCurrency: typeof SP$FieldCurrency,
    FieldDateTime: typeof SP$FieldDateTime,
    FieldGeolocation: typeof SP$FieldGeolocation,
    FieldGeolocationValue: typeof SP$FieldGeolocationValue,
    FieldGuid: typeof SP$FieldGuid,
    FieldLink: typeof SP$FieldLink,
    FieldLinkCreationInformation: typeof SP$FieldLinkCreationInformation,
    FieldLookup: typeof SP$FieldLookup,
    FieldLookupValue: typeof SP$FieldLookupValue,
    FieldMultiLineText: typeof SP$FieldMultiLineText,
    FieldRatingScale: typeof SP$FieldRatingScale,
    FieldRatingScaleQuestionAnswer: typeof SP$FieldRatingScaleQuestionAnswer,
    FieldStringValues: typeof SP$FieldStringValues,
    FieldText: typeof SP$FieldText,
    FieldUrl: typeof SP$FieldUrl,
    FieldUrlValue: typeof SP$FieldUrlValue,
    FieldUser: typeof SP$FieldUser,
    FieldUserValue: typeof SP$FieldUserValue,
    File: typeof SP$File,
    FileCreationInformation: typeof SP$FileCreationInformation,
    FileSaveBinaryInformation: typeof SP$FileSaveBinaryInformation,
    FileVersion: typeof SP$FileVersion,
    Folder: typeof SP$Folder,
    Form: typeof SP$Form,
    Principal: typeof SP$Principal,
    Group: typeof SP$Group,
    GroupCreationInformation: typeof SP$GroupCreationInformation,
    InformationRightsManagementSettings: typeof SP$InformationRightsManagementSettings,
    Language: typeof SP$Language,
    SecurableObject: typeof SP$SecurableObject,
    List: typeof SP$List,
    ListCreationInformation: typeof SP$ListCreationInformation,
    ListDataSource: typeof SP$ListDataSource,
    ListDataValidationExceptionValue: typeof SP$ListDataValidationExceptionValue,
    ListDataValidationFailure: typeof SP$ListDataValidationFailure,
    ListItem: typeof SP$ListItem,
    ListItemCollectionPosition: typeof SP$ListItemCollectionPosition,
    ListItemCreationInformation: typeof SP$ListItemCreationInformation,
    ListItemFormUpdateValue: typeof SP$ListItemFormUpdateValue,
    ListTemplate: typeof SP$ListTemplate,
    Navigation: typeof SP$Navigation,
    NavigationNode: typeof SP$NavigationNode,
    NavigationNodeCreationInformation: typeof SP$NavigationNodeCreationInformation,
    ObjectSharingInformation: typeof SP$ObjectSharingInformation,
    ObjectSharingInformationUser: typeof SP$ObjectSharingInformationUser,
    PropertyValues: typeof SP$PropertyValues,
    PushNotificationSubscriber: typeof SP$PushNotificationSubscriber,
    RecycleBinItem: typeof SP$RecycleBinItem,
    RegionalSettings: typeof SP$RegionalSettings,
    RelatedField: typeof SP$RelatedField,
    RelatedFieldExtendedData: typeof SP$RelatedFieldExtendedData,
    RelatedItem: typeof SP$RelatedItem,
    RelatedItemManager: typeof SP$RelatedItemManager,
    RequestVariable: typeof SP$RequestVariable,
    RoleAssignment: typeof SP$RoleAssignment,
    RoleDefinition: typeof SP$RoleDefinition,
    RoleDefinitionBindingCollection: typeof SP$RoleDefinitionBindingCollection,
    RoleDefinitionCreationInformation: typeof SP$RoleDefinitionCreationInformation,
    ServerSettings: typeof SP$ServerSettings,
    Site: typeof SP$Site,
    SiteUrl: typeof SP$SiteUrl,
    SubwebQuery: typeof SP$SubwebQuery,
    ThemeInfo: typeof SP$ThemeInfo,
    TimeZone: typeof SP$TimeZone,
    TimeZoneInformation: typeof SP$TimeZoneInformation,
    UpgradeInfo: typeof SP$UpgradeInfo,
    UsageInfo: typeof SP$UsageInfo,
    User: typeof SP$User,
    UserCreationInformation: typeof SP$UserCreationInformation,
    UserCustomAction: typeof SP$UserCustomAction,
    UserIdInfo: typeof SP$UserIdInfo,
    View: typeof SP$View,
    ViewCreationInformation: typeof SP$ViewCreationInformation,
    Web: typeof SP$Web,
    WebCreationInformation: typeof SP$WebCreationInformation,
    WebInformation: typeof SP$WebInformation,
    WebProxy: typeof SP$WebProxy,
    WebRequestInfo: typeof SP$WebRequestInfo,
    WebResponseInfo: typeof SP$WebResponseInfo,
    WebTemplate: typeof SP$WebTemplate,
    GanttControl: typeof SP$GanttControl,
    ListOperation: typeof npm$namespace$SP$ListOperation,
    Application: typeof npm$namespace$SP$Application,
    Analytics: typeof npm$namespace$SP$Analytics,
    SiteHealth: typeof npm$namespace$SP$SiteHealth,
    BusinessData: typeof npm$namespace$SP$BusinessData,
    Sharing: typeof npm$namespace$SP$Sharing,
    Social: typeof npm$namespace$SP$Social,
    Taxonomy: typeof npm$namespace$SP$Taxonomy,
    DocumentSet: typeof npm$namespace$SP$DocumentSet,
    Video: typeof npm$namespace$SP$Video,
    UI: typeof npm$namespace$SP$UI,
    UserProfiles: typeof npm$namespace$SP$UserProfiles,
    Utilities: typeof npm$namespace$SP$Utilities,
    DateTimeUtil: typeof npm$namespace$SP$DateTimeUtil,
    WebParts: typeof npm$namespace$SP$WebParts,
    Workflow: typeof npm$namespace$SP$Workflow,
    WorkflowServices: typeof npm$namespace$SP$WorkflowServices,
    Publishing: typeof npm$namespace$SP$Publishing,
    CompliancePolicy: typeof npm$namespace$SP$CompliancePolicy,
    Discovery: typeof npm$namespace$SP$Discovery,
    InformationPolicy: typeof npm$namespace$SP$InformationPolicy,
    JsGrid: typeof npm$namespace$SP$JsGrid
  };
  declare interface SP$SOD {
    execute(fileName: string, functionName: string, ...args: any[]): void;
    executeFunc(fileName: string, typeName: string, fn: () => void): void;
    executeOrDelayUntilEventNotified(
      func: (...args: any[]) => void,
      eventName: string
    ): boolean;
    executeOrDelayUntilScriptLoaded(
      func: () => void,
      depScriptFileName: string
    ): boolean;
    notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName: string): void;
    notifyEventAndExecuteWaitingJobs(eventName: string, args?: any[]): void;
    registerSod(fileName: string, url: string): void;
    registerSodDep(fileName: string, dependentFileName: string): void;
    loadMultiple(keys: string[], fn: () => void, bSync?: boolean): void;
    delayUntilEventNotified(
      func: (...args: any[]) => void,
      eventName: string
    ): void;
    get_prefetch(): boolean;
    set_prefetch(value: boolean): void;
    get_ribbonImagePrefetchEnabled(): boolean;
    set_ribbonImagePrefetchEnabled(value: boolean): void;
  }

  declare var SP$SOD: SP$SOD;

  declare var SP$ListLevelPermissionMask: {|
    +viewListItems: 0, // 0
    +insertListItems: 1, // 1
    +editListItems: 2, // 2
    +deleteListItems: 3, // 3
    +approveItems: 4, // 4
    +openItems: 5, // 5
    +viewVersions: 6, // 6
    +deleteVersions: 7, // 7
    +breakCheckout: 8, // 8
    +managePersonalViews: 9, // 9
    +manageLists: 10 // 10
  |};

  declare class SP$HtmlBuilder {
    constructor(): this;
    addAttribute(name: string, value: string): void;
    addCssClass(cssClassName: string): void;
    addCommunitiesCssClass(cssClassName: string): void;
    renderBeginTag(tagName: string): void;
    renderEndTag(): void;
    write(s: string): void;
    writeEncoded(s: string): void;
    toString(): string;
  }

  declare class SP$ScriptHelpers {
    static disableWebpartSelection(
      context: SPClientTemplates$RenderContext
    ): void;
    static getDocumentQueryPairs(): {
      [index: string]: string
    };
    static getFieldFromSchema(
      schema: SPClientTemplates$ListSchema,
      fieldName: string
    ): SPClientTemplates$FieldSchema;
    static getLayoutsPageUrl(
      pageName: string,
      webServerRelativeUrl: string
    ): string;
    static getListLevelPermissionMask(jsonItem: string): number;
    static getTextAreaElementValue(
      textAreaElement: HTMLTextAreaElement
    ): string;
    static getUrlQueryPairs(
      docUrl: string
    ): {
      [index: string]: string
    };
    static getUserFieldProperty(
      item: SP$ListItem,
      fieldName: string,
      propertyName: string
    ): any;
    static hasPermission(
      listPermissionMask: number,
      listPermission: $Values<typeof SP$ListLevelPermissionMask>
    ): boolean;
    static newGuid(): SP$Guid;
    static isNullOrEmptyString(str: string): boolean;
    static isNullOrUndefined(obj: any): boolean;
    static isNullOrUndefinedOrEmpty(str: string): boolean;
    static isUndefined(obj: any): boolean;
    static replaceOrAddQueryString(
      url: string,
      key: string,
      value: string
    ): string;
    static removeHtml(str: string): string;
    static removeStyleChildren(element: HTMLElement): void;
    static removeHtmlAndTrimStringWithEllipsis(
      str: string,
      maxLength: number
    ): string;
    static setTextAreaElementValue(
      textAreaElement: HTMLTextAreaElement,
      newValue: string
    ): void;
    static truncateToInt(n: number): number;
    static urlCombine(path1: string, path2: string): string;
    static resizeImageToSquareLength(
      imgElement: HTMLImageElement,
      squareLength: number
    ): void;
  }

  declare class SP$PageContextInfo {
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
    static get_pagePersonalizationScope(): string;
  }

  declare class SP$ContextPermissions {
    has(perm: number): boolean;
    hasPermissions(high: number, low: number): boolean;
    fromJson(json: {
      High: number,
      Low: number
    }): void;
  }

  declare var npm$namespace$SP$ListOperation: {
    ViewOperation: typeof npm$namespace$SP$ListOperation$ViewOperation,
    Selection: typeof npm$namespace$SP$ListOperation$Selection,
    Overrides: typeof npm$namespace$SP$ListOperation$Overrides
  };

  declare var npm$namespace$SP$ListOperation$ViewOperation: {
    getSelectedView: typeof SP$ListOperation$ViewOperation$getSelectedView,
    navigateUp: typeof SP$ListOperation$ViewOperation$navigateUp,
    refreshView: typeof SP$ListOperation$ViewOperation$refreshView
  };
  declare function SP$ListOperation$ViewOperation$getSelectedView(): string;

  declare function SP$ListOperation$ViewOperation$navigateUp(
    viewId: string
  ): void;

  declare function SP$ListOperation$ViewOperation$refreshView(
    viewId: string
  ): void;

  declare var npm$namespace$SP$ListOperation$Selection: {
    selectListItem: typeof SP$ListOperation$Selection$selectListItem,
    getSelectedItems: typeof SP$ListOperation$Selection$getSelectedItems,
    getSelectedList: typeof SP$ListOperation$Selection$getSelectedList,
    getSelectedView: typeof SP$ListOperation$Selection$getSelectedView,
    navigateUp: typeof SP$ListOperation$Selection$navigateUp,
    deselectAllListItems: typeof SP$ListOperation$Selection$deselectAllListItems
  };
  declare function SP$ListOperation$Selection$selectListItem(
    iid: string,
    bSelect: boolean
  ): void;

  declare function SP$ListOperation$Selection$getSelectedItems(): Array<{
    id: number,
    fsObjType: $Values<typeof SP$FileSystemObjectType>
  }>;

  declare function SP$ListOperation$Selection$getSelectedList(): string;

  declare function SP$ListOperation$Selection$getSelectedView(): string;

  declare function SP$ListOperation$Selection$navigateUp(viewId: string): void;

  declare function SP$ListOperation$Selection$deselectAllListItems(
    iid: string
  ): void;

  declare var npm$namespace$SP$ListOperation$Overrides: {
    overrideDeleteConfirmation: typeof SP$ListOperation$Overrides$overrideDeleteConfirmation
  };
  declare function SP$ListOperation$Overrides$overrideDeleteConfirmation(
    listId: string,
    overrideText: string
  ): void;

  declare var SP$RequestExecutorErrors: {|
    +requestAbortedOrTimedout: 0, // 0
    +unexpectedResponse: 1, // 1
    +httpError: 2, // 2
    +noAppWeb: 3, // 3
    +domainDoesNotMatch: 4, // 4
    +noTrustedOrigins: 5, // 5
    +iFrameLoadError: 6 // 6
  |};

  declare class SP$RequestExecutor {
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
        error: $Values<typeof SP$RequestExecutorErrors>,
        statusText: string
      ) => void
    ): void;
  }

  declare interface SP$RequestInfo {
    url: string;
    method?: string;
    headers?: {
      [key: string]: string
    };

    /**
     * Can be string or bytearray depending on binaryStringRequestBody field
     */
    body?: string | Uint8Array;
    binaryStringRequestBody?: boolean;

    /**
     * Currently need fix to get ginary response. Details: http:// techmikael.blogspot.ru/2013/07/how-to-copy-files-between-sites-using.html
     */
    binaryStringResponseBody?: boolean;
    timeout?: number;
    success?: (response: SP$ResponseInfo) => void;
    error?: (
      response: SP$ResponseInfo,
      error: $Values<typeof SP$RequestExecutorErrors>,
      statusText: string
    ) => void;
    state?: any;
  }

  declare interface SP$ResponseInfo {
    statusCode?: number;
    statusText?: string;
    responseAvailable: boolean;
    allResponseHeaders?: string;
    headers?: {
      [key: string]: string
    };
    contentType?: string;

    /**
     * Can be string or bytearray depending on request.binaryStringResponseBody field
     */
    body?: string | Uint8Array;
    state?: any;
  }

  declare class SP$ProxyWebRequestExecutor mixins Sys.Net.WebRequestExecutor {
    constructor(url: string, options?: any): this;
  }

  declare class SP$ProxyWebRequestExecutorFactory
    mixins SP$IWebRequestExecutorFactory {
    constructor(url: string, options?: any): this;
    createWebRequestExecutor(): SP$ProxyWebRequestExecutor;
  }

  declare class SP$ScriptUtility {
    static isNullOrEmptyString(str: string): boolean;
    static isNullOrUndefined(obj: any): boolean;
    static isUndefined(obj: any): boolean;
    static truncateToInt(n: number): number;
  }

  declare class SP$Guid {
    constructor(guidText: string): this;
    static get_empty(): SP$Guid;
    static newGuid(): SP$Guid;
    static isValid(uuid: string): boolean;
    toString(format?: string): string;
    equals(uuid: SP$Guid): boolean;
    ToSerialized(): string;
  }

  /**
   * Specifies permissions that are used to define user roles. Represents SPBasePermissions class.
   */

  declare var SP$PermissionKind: {|
    +emptyMask: 0, // 0
    +viewListItems: 1, // 1
    +addListItems: 2, // 2
    +editListItems: 3, // 3
    +deleteListItems: 4, // 4
    +approveItems: 5, // 5
    +openItems: 6, // 6
    +viewVersions: 7, // 7
    +deleteVersions: 8, // 8
    +cancelCheckout: 9, // 9
    +managePersonalViews: 10, // 10
    +manageLists: 11, // 11
    +viewFormPages: 12, // 12
    +anonymousSearchAccessList: 13, // 13
    +open: 14, // 14
    +viewPages: 15, // 15
    +addAndCustomizePages: 16, // 16
    +applyThemeAndBorder: 17, // 17
    +applyStyleSheets: 18, // 18
    +viewUsageData: 19, // 19
    +createSSCSite: 20, // 20
    +manageSubwebs: 21, // 21
    +createGroups: 22, // 22
    +managePermissions: 23, // 23
    +browseDirectories: 24, // 24
    +browseUserInfo: 25, // 25
    +addDelPrivateWebParts: 26, // 26
    +updatePersonalWebParts: 27, // 27
    +manageWeb: 28, // 28
    +anonymousSearchAccessWebLists: 29, // 29
    +useClientIntegration: 30, // 30
    +useRemoteAPIs: 31, // 31
    +manageAlerts: 32, // 32
    +createAlerts: 33, // 33
    +editMyUserInfo: 34, // 34
    +enumeratePermissions: 35, // 35
    +fullMask: 36 // 36
  |};

  declare class SP$BaseCollection<T> mixins IEnumerable<T> {
    getEnumerator(): IEnumerator<T>;
    get_count(): number;
    itemAtIndex(index: number): T;
    constructor(): this;
  }

  declare interface SP$IFromJson {
    fromJson(initValue: any): void;
    customFromJson(initValue: any): boolean;
  }

  declare class SP$Base64EncodedByteArray {
    constructor(base64Str?: string): this;
    get_length(): number;
    toBase64String(): string;
    append(b: any): void;
    getByteAt(index: number): any;
    setByteAt(index: number, b: any): void;
  }

  declare class SP$ConditionalScopeBase {
    startScope(): any;
    startIfTrue(): any;
    startIfFalse(): any;
    get_testResult(): boolean;
    fromJson(initValue: any): void;
    customFromJson(initValue: any): boolean;
  }

  declare class SP$ClientObjectPropertyConditionalScope
    mixins SP$ConditionalScopeBase {
    constructor(
      clientObject: SP$ClientObject,
      propertyName: string,
      comparisonOperator: string,
      valueToCompare: any,
      allowAllActions?: boolean
    ): this;
  }

  declare class SP$ClientResult<T> {
    get_value(): T;
    setValue(value: T): void;
    constructor(): this;
  }

  declare class SP$BooleanResult {
    get_value(): boolean;
    constructor(): this;
  }

  declare class SP$CharResult {
    get_value(): any;
    constructor(): this;
  }

  declare class SP$IntResult {
    get_value(): number;
    constructor(): this;
  }

  declare class SP$DoubleResult {
    get_value(): number;
    constructor(): this;
  }

  declare class SP$StringResult {
    get_value(): string;
    constructor(): this;
  }

  declare class SP$DateTimeResult {
    get_value(): Date;
    constructor(): this;
  }

  declare class SP$GuidResult {
    get_value(): SP$Guid;
    constructor(): this;
  }

  declare class SP$JsonObjectResult {
    get_value(): any;
    constructor(): this;
  }

  declare class SP$ClientDictionaryResultHandler<T> {
    constructor(dict: SP$ClientResult<T>): this;
  }

  declare class SP$ClientUtility {
    static urlPathEncodeForXmlHttpRequest(url: string): string;
    static getOrCreateObjectPathForConstructor(
      context: SP$ClientRuntimeContext,
      typeId: string,
      args: any[]
    ): SP$ObjectPath;
  }

  declare class SP$XElement {
    get_name(): string;
    set_name(value: string): void;
    get_attributes(): any;
    set_attributes(value: any): void;
    get_children(): any;
    set_children(value: any): void;
    constructor(): this;
  }

  declare class SP$ClientXElement {
    get_element(): SP$XElement;
    set_element(value: SP$XElement): void;
    constructor(): this;
  }

  declare class SP$ClientXDocument {
    get_root(): SP$XElement;
    set_root(value: SP$XElement): void;
    constructor(): this;
  }

  declare class SP$DataConvert {
    static writePropertiesToXml(
      writer: SP$XmlWriter,
      obj: any,
      propNames: string[],
      serializationContext: SP$SerializationContext
    ): void;
    static populateDictionaryFromObject(dict: any, parentNode: any): void;
    static fixupTypes(context: SP$ClientRuntimeContext, dict: any): void;
    static populateArray(
      context: SP$ClientRuntimeContext,
      dest: any,
      jsonArrayFromServer: any
    ): void;
    static fixupType(context: SP$ClientRuntimeContext, obj: any): any;
    static writeDictionaryToXml(
      writer: SP$XmlWriter,
      dict: any,
      topLevelElementTagName: string,
      keys: any,
      serializationContext: SP$SerializationContext
    ): void;
    static writeValueToXmlElement(
      writer: SP$XmlWriter,
      objValue: any,
      serializationContext: SP$SerializationContext
    ): void;
    static invokeSetProperty(obj: any, propName: string, propValue: any): void;
    static invokeGetProperty(obj: any, propName: string): any;
    static specifyDateTimeKind(
      datetime: Date,
      kind: $Values<typeof SP$DateTimeKind>
    ): void;
    static getDateTimeKind(datetime: Date): $Values<typeof SP$DateTimeKind>;
    static createUnspecifiedDateTime(
      year: number,
      month: number,
      day: number,
      hour: number,
      minute: number,
      second: number,
      milliseconds: number
    ): Date;
    static createUtcDateTime(milliseconds: number): Date;
    static createLocalDateTime(milliseconds: number): Date;
  }

  declare interface SP$IWebRequestExecutorFactory {
    createWebRequestExecutor(): Sys.Net.WebRequestExecutor;
  }

  declare class SP$PageRequestFailedEventArgs mixins Sys.EventArgs {
    get_executor(): Sys.Net.WebRequestExecutor;
    get_errorMessage(): string;
    get_isErrorPage(): boolean;
  }

  declare class SP$PageRequestSucceededEventArgs mixins Sys.EventArgs {
    get_executor(): Sys.Net.WebRequestExecutor;
  }

  declare class SP$PageRequest {
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
      succeededHandler: (
        sender: any,
        args: SP$PageRequestSucceededEventArgs
      ) => void,
      failedHandler: (sender: any, args: SP$PageRequestFailedEventArgs) => void
    ): void;
    static doGet(
      url: string,
      expectedContentType: string,
      succeededHandler: (
        sender: any,
        args: SP$PageRequestSucceededEventArgs
      ) => void,
      failedHandler: (sender: any, args: SP$PageRequestFailedEventArgs) => void
    ): void;
    add_succeeded(
      value: (sender: any, args: SP$PageRequestSucceededEventArgs) => void
    ): void;
    remove_succeeded(
      value: (sender: any, args: SP$PageRequestSucceededEventArgs) => void
    ): void;
    add_failed(
      value: (sender: any, args: SP$PageRequestFailedEventArgs) => void
    ): void;
    remove_failed(
      value: (sender: any, args: SP$PageRequestFailedEventArgs) => void
    ): void;
    constructor(): this;
  }

  declare class SP$ResResources {
    static getString(resourceId: string, args: any[]): string;
  }

  /**
   * Defines a writer that provides a set of methods to append text in XML format. Use the static SP.XmlWriter.create(sb) Method to create an SP.XmlWriter object with the Sys.StringBuilder object you pass in.
   */
  declare class SP$XmlWriter {
    /**
     * Creates a new instance of the XmlWriter class with the specified string builder.
     */
    static create(sb: Sys.StringBuilder): SP$XmlWriter;

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
    close(): void;
  }

  declare class SP$ClientConstants {
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
    Search$Query: string;
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
    fluidApplicationInitParamFormDigest: string;
  }

  declare class SP$ClientSchemaVersions {
    version14: string;
    version15: string;
    currentVersion: string;
  }

  declare class SP$ClientErrorCodes {
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
    itemValueFailedValidation: number;
  }

  declare class SP$ClientAction {
    get_id(): number;
    get_path(): SP$ObjectPath;
    get_name(): string;
  }

  declare class SP$ClientActionSetProperty mixins SP$ClientAction {
    constructor(obj: SP$ClientObject, propName: string, propValue: any): this;
  }

  declare class SP$ClientActionSetStaticProperty mixins SP$ClientAction {
    constructor(
      context: SP$ClientRuntimeContext,
      typeId: string,
      propName: string,
      propValue: any
    ): this;
  }

  declare class SP$ClientActionInvokeMethod mixins SP$ClientAction {
    constructor(
      obj: SP$ClientObject,
      methodName: string,
      parameters: any[]
    ): this;
  }

  declare class SP$ClientActionInvokeStaticMethod mixins SP$ClientAction {
    constructor(
      context: SP$ClientRuntimeContext,
      typeId: string,
      methodName: string,
      parameters: any[]
    ): this;
  }

  declare class SP$ClientObject {
    constructor(
      context: SP$ClientRuntimeContext,
      objectPath: SP$ObjectPath
    ): this;
    get_context(): SP$ClientRuntimeContext;
    get_path(): SP$ObjectPath;
    get_objectVersion(): string;
    set_objectVersion(value: string): void;
    fromJson(initValue: any): void;
    customFromJson(initValue: any): boolean;
    refreshLoad(): void;
    retrieve(propertyNames?: string[]): void;
    isPropertyAvailable(propertyName: string): boolean;
    isObjectPropertyInstantiated(propertyName: string): boolean;
    get_serverObjectIsNull(): boolean;
    get_typedObject(): SP$ClientObject;
    initPropertiesFromJson(initValue: any): void;
    checkUninitializedProperty(propName: string): void;
  }

  declare class SP$ClientObjectData {
    get_properties(): any;
    get_clientObjectProperties(): any;
    get_methodReturnObjects(): any;
    constructor(): this;
  }

  /**
   * Provides a base class for a collection of objects on a remote client.
   */
  declare class SP$ClientObjectCollection<T>
    mixins SP$ClientObject, IEnumerable<T> {
    constructor(): this;
    get_areItemsAvailable(): boolean;

    /**
     * Gets the data for all of the items in the collection.
     */
    retrieveItems(): SP$ClientObjectPrototype;

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
    fromJson(obj: any): void;
  }

  declare class SP$ClientObjectList<T> mixins SP$ClientObjectCollection<T> {
    constructor(
      context: SP$ClientRuntimeContext,
      objectPath: SP$ObjectPath,
      childItemType: any
    ): this;
    fromJson(initValue: any): void;
    customFromJson(initValue: any): boolean;
  }

  declare class SP$ClientObjectPrototype {
    retrieve(propertyNames?: string[]): void;
    retrieveObject(propertyName: string): SP$ClientObjectPrototype;
    retrieveCollectionObject(
      propertyName: string
    ): SP$ClientObjectCollectionPrototype;
  }

  declare class SP$ClientObjectCollectionPrototype
    mixins SP$ClientObjectPrototype {
    retrieveItems(): SP$ClientObjectPrototype;
  }

  declare var SP$ClientRequestStatus: {|
    +active: 0, // 0
    +inProgress: 1, // 1
    +completedSuccess: 2, // 2
    +completedException: 3 // 3
  |};

  declare class SP$WebRequestEventArgs mixins Sys.EventArgs {
    constructor(webRequest: Sys.Net.WebRequest): this;
    get_webRequest(): Sys.Net.WebRequest;
  }

  declare class SP$ClientRequest {
    static get_nextSequenceId(): number;
    get_webRequest(): Sys.Net.WebRequest;
    add_requestSucceeded(
      value: (sender: any, args: SP$ClientRequestSucceededEventArgs) => void
    ): void;
    remove_requestSucceeded(
      value: (sender: any, args: SP$ClientRequestSucceededEventArgs) => void
    ): void;
    add_requestFailed(
      value: (sender: any, args: SP$ClientRequestFailedEventArgs) => void
    ): void;
    remove_requestFailed(
      value: (sender: any, args: SP$ClientRequestFailedEventArgs) => void
    ): void;
    get_navigateWhenServerRedirect(): boolean;
    set_navigateWhenServerRedirect(value: boolean): void;
  }

  declare class SP$ClientRequestEventArgs mixins Sys.EventArgs {
    get_request(): SP$ClientRequest;
  }

  declare class SP$ClientRequestFailedEventArgs
    mixins SP$ClientRequestEventArgs {
    constructor(
      request: SP$ClientRequest,
      message: string,
      stackTrace: string,
      errorCode: number,
      errorValue: string,
      errorTypeName: string,
      errorDetails: any,
      errorTraceCorrelationId?: string
    ): this;
    get_message(): string;
    get_stackTrace(): string;
    get_errorCode(): number;
    get_errorValue(): string;
    get_errorTypeName(): string;
    get_errorDetails(): any;
    get_errorTraceCorrelationId(): string;
  }

  declare class SP$ClientRequestSucceededEventArgs
    mixins SP$ClientRequestEventArgs {}

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
    get_webRequestExecutorFactory(): SP$IWebRequestExecutorFactory;
    set_webRequestExecutorFactory(value: SP$IWebRequestExecutorFactory): void;
    get_pendingRequest(): SP$ClientRequest;
    get_hasPendingRequest(): boolean;
    add_executingWebRequest(
      value: (sender: any, args: SP$WebRequestEventArgs) => void
    ): void;
    remove_executingWebRequest(
      value: (sender: any, args: SP$WebRequestEventArgs) => void
    ): void;
    add_requestSucceeded(
      value: (sender: any, args: SP$ClientRequestSucceededEventArgs) => void
    ): void;
    remove_requestSucceeded(
      value: (sender: any, args: SP$ClientRequestSucceededEventArgs) => void
    ): void;
    add_requestFailed(
      value: (sender: any, args: SP$ClientRequestFailedEventArgs) => void
    ): void;
    remove_requestFailed(
      value: (sender: any, args: SP$ClientRequestFailedEventArgs) => void
    ): void;
    add_beginningRequest(
      value: (sender: any, args: SP$ClientRequestEventArgs) => void
    ): void;
    remove_beginningRequest(
      value: (sender: any, args: SP$ClientRequestEventArgs) => void
    ): void;
    get_requestTimeout(): number;
    set_requestTimeout(value: number): void;
    executeQueryAsync(
      succeededCallback?: (
        sender: any,
        args: SP$ClientRequestSucceededEventArgs
      ) => void,
      failedCallback?: (
        sender: any,
        args: SP$ClientRequestFailedEventArgs
      ) => void
    ): void;
    get_staticObjects(): any;
    castTo(obj: SP$ClientObject, type: any): SP$ClientObject;
    addQuery(query: SP$ClientAction): void;
    addQueryIdAndResultObject(id: number, obj: any): void;
    parseObjectFromJsonString(json: string, skipTypeFixup?: boolean): any;
    load(clientObject: SP$ClientObject, ...exps: string[]): void;
    loadQuery<T>(
      clientObjectCollection: SP$ClientObjectCollection<T>,
      exp?: string
    ): any;
    get_serverSchemaVersion(): string;
    get_serverLibraryVersion(): string;
    get_traceCorrelationId(): string;
    set_traceCorrelationId(value: string): void;
    dispose(): void;
  }

  declare class SP$SimpleDataTable {
    get_rows(): any[];
    constructor(): this;
  }

  declare class SP$ClientValueObject {
    fromJson(obj: any): void;
    customFromJson(obj: any): boolean;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    customWriteToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): boolean;
    get_typeId(): string;
  }

  declare class SP$ClientValueObjectCollection<T>
    mixins SP$ClientValueObject, IEnumerable<T> {
    get_count(): number;
    getEnumerator(): IEnumerator<T>;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
  }

  declare class SP$ExceptionHandlingScope {
    constructor(context: SP$ClientRuntimeContext): this;
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
    get_serverErrorDetails(): any;
  }

  declare class SP$ObjectIdentityQuery mixins SP$ClientAction {
    constructor(objectPath: SP$ObjectPath): this;
  }

  declare class SP$ObjectPath {
    setPendingReplace(): void;
  }

  declare class SP$ObjectPathProperty mixins SP$ObjectPath {
    constructor(
      context: SP$ClientRuntimeContext,
      parent: SP$ObjectPath,
      propertyName: string
    ): this;
  }

  declare class SP$ObjectPathStaticProperty mixins SP$ObjectPath {
    constructor(
      context: SP$ClientRuntimeContext,
      typeId: string,
      propertyName: string
    ): this;
  }

  declare class SP$ObjectPathMethod mixins SP$ObjectPath {
    constructor(
      context: SP$ClientRuntimeContext,
      parent: SP$ObjectPath,
      methodName: string,
      parameters: any[]
    ): this;
  }

  declare class SP$ObjectPathStaticMethod mixins SP$ObjectPath {
    constructor(
      context: SP$ClientRuntimeContext,
      typeId: string,
      methodName: string,
      parameters: any[]
    ): this;
  }

  declare class SP$ObjectPathConstructor mixins SP$ObjectPath {
    constructor(
      context: SP$ClientRuntimeContext,
      typeId: string,
      parameters: any[]
    ): this;
  }

  declare class SP$SerializationContext {
    addClientObject(obj: SP$ClientObject): void;
    addObjectPath(path: SP$ObjectPath): void;
  }

  declare class SP$ResourceStrings {
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
    unknownResponseData: string;
  }

  declare class SP$RuntimeRes {
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
    objectNameMethod: string;
  }

  declare class SP$ParseJSONUtil {
    static parseObjectFromJsonString(json: string): any;
    static validateJson(text: string): boolean;
  }

  declare var SP$DateTimeKind: {|
    +unspecified: 0, // 0
    +utc: 1, // 1
    +local: 2 // 2
  |};

  declare class SP$OfficeVersion {
    majorBuildVersion: number;
    previousMajorBuildVersion: number;
    majorVersion: string;
    previousVersion: string;
    majorVersionDotZero: string;
    previousVersionDotZero: string;
    assemblyVersion: string;
    wssMajorVersion: string;
  }

  declare class SP$ClientContext mixins SP$ClientRuntimeContext {
    constructor(serverRelativeUrlOrFullUrl?: string): this;
    get_web(): SP$Web;
    get_site(): SP$Site;
    get_serverVersion(): string;
    static get_current(): SP$ClientContext;
  }

  declare var SP$ULSTraceLevel: {|
    +verbose: 0 // 0
  |};

  /**
   * Provides a Unified Logging Service (ULS) that monitors log messages.
   */
  declare class SP$ULS {
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
    static traceApiLeave(): void;
  }

  declare class SP$AccessRequests {
    static changeRequestStatus(
      context: SP$ClientRuntimeContext,
      itemId: number,
      newStatus: number,
      convStr: string,
      permType: string,
      permissionLevel: number
    ): void;
    static changeRequestStatusBulk(
      context: SP$ClientRuntimeContext,
      requestIds: number[],
      newStatus: number
    ): void;
  }

  declare var SP$AddFieldOptions: {|
    +defaultValue: 0, // 0
    +addToDefaultContentType: 1, // 1
    +addToNoContentType: 2, // 2
    +addToAllContentTypes: 3, // 3
    +addFieldInternalNameHint: 4, // 4
    +addFieldToDefaultView: 5, // 5
    +addFieldCheckDisplayName: 6 // 6
  |};

  declare class SP$AlternateUrl mixins SP$ClientObject {
    get_uri(): string;
    get_urlZone(): $Values<typeof SP$UrlZone>;
  }

  declare class SP$App mixins SP$ClientObject {
    get_assetId(): string;
    get_contentMarket(): string;
    get_versionString(): string;
  }

  declare class SP$AppCatalog {
    static getAppInstances(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$ClientObjectList<SP$AppInstance>;
    static getDeveloperSiteAppInstancesByIds(
      context: SP$ClientRuntimeContext,
      site: SP$Site,
      appInstanceIds: SP$Guid[]
    ): SP$ClientObjectList<SP$AppInstance>;
    static isAppSideloadingEnabled(
      context: SP$ClientRuntimeContext
    ): SP$BooleanResult;
  }

  declare class SP$AppContextSite mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext, siteUrl: string): this;
    get_site(): SP$Site;
    get_web(): SP$Web;
    static newObject(
      context: SP$ClientRuntimeContext,
      siteUrl: string
    ): SP$AppContextSite;
  }

  declare class SP$AppInstance mixins SP$ClientObject {
    get_appPrincipalId(): string;
    get_appWebFullUrl(): string;
    get_id(): SP$Guid;
    get_inError(): boolean;
    get_startPage(): string;
    get_remoteAppUrl(): string;
    get_settingsPageUrl(): string;
    get_siteId(): SP$Guid;
    get_status(): $Values<typeof SP$AppInstanceStatus>;
    get_title(): string;
    get_webId(): SP$Guid;
    getErrorDetails(): SP$ClientObjectList<SP$AppInstanceErrorDetails>;
    uninstall(): SP$GuidResult;
    upgrade(appPackageStream: SP$Base64EncodedByteArray): void;
    cancelAllJobs(): SP$BooleanResult;
    install(): SP$GuidResult;
    getPreviousAppVersion(): SP$App;
    retryAllJobs(): void;
  }

  declare class SP$AppInstanceErrorDetails mixins SP$ClientObject {
    get_correlationId(): SP$Guid;
    set_correlationId(value: SP$Guid): void;
    get_errorDetail(): string;
    get_errorType(): $Values<typeof SP$AppInstanceErrorType>;
    set_errorType(value: $Values<typeof SP$AppInstanceErrorType>): void;
    get_errorTypeName(): string;
    get_exceptionMessage(): string;
    get_source(): $Values<typeof SP$AppInstanceErrorSource>;
    set_source(value: $Values<typeof SP$AppInstanceErrorSource>): void;
    get_sourceName(): string;
  }

  declare var SP$AppInstanceErrorSource: {|
    +common: 0, // 0
    +appWeb: 1, // 1
    +parentWeb: 2, // 2
    +remoteWebSite: 3, // 3
    +database: 4, // 4
    +officeExtension: 5, // 5
    +eventCallouts: 6, // 6
    +finalization: 7 // 7
  |};

  declare var SP$AppInstanceErrorType: {|
    +transient: 0, // 0
    +configuration: 1, // 1
    +app: 2 // 2
  |};

  declare var SP$AppInstanceStatus: {|
    +invalidStatus: 0, // 0
    +installing: 1, // 1
    +canceling: 2, // 2
    +uninstalling: 3, // 3
    +installed: 4, // 4
    +upgrading: 5, // 5
    +initialized: 6, // 6
    +upgradeCanceling: 7, // 7
    +disabling: 8, // 8
    +disabled: 9 // 9
  |};

  declare class SP$AppLicense mixins SP$ClientValueObject {
    get_rawXMLLicenseToken(): string;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$AppLicenseCollection
    mixins SP$ClientValueObjectCollection<SP$AppLicense> {
    add(item: SP$AppLicense): void;
    get_item(index: number): SP$AppLicense;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$AppLicenseType: {|
    +perpetualMultiUser: 0, // 0
    +perpetualAllUsers: 1, // 1
    +trialMultiUser: 2, // 2
    +trialAllUsers: 3 // 3
  |};

  declare class SP$Attachment mixins SP$ClientObject {
    get_fileName(): string;
    get_serverRelativeUrl(): string;
    deleteObject(): void;
  }

  declare type SP$AttachmentCollection = {
    itemAt(index: number): SP$Attachment,
    get_item(index: number): SP$Attachment,
    getByFileName(fileName: string): SP$Attachment
  } & SP$ClientObjectCollection<SP$Attachment>;

  declare class SP$AttachmentCreationInformation mixins SP$ClientValueObject {
    get_contentStream(): SP$Base64EncodedByteArray;
    set_contentStream(value: SP$Base64EncodedByteArray): void;
    get_fileName(): string;
    set_fileName(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$BasePermissions mixins SP$ClientValueObject {
    set(perm: $Values<typeof SP$PermissionKind>): void;
    clear(perm: $Values<typeof SP$PermissionKind>): void;
    clearAll(): void;
    has(perm: $Values<typeof SP$PermissionKind>): boolean;
    equals(perm: SP$BasePermissions): boolean;
    hasPermissions(high: number, low: number): boolean;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  /**
   * Specifies the base type for a list.
   */

  declare var SP$BaseType: {|
    +none: 0, // 0
    +genericList: 1, // 1
    +documentLibrary: 2, // 2
    +unused: 3, // 3
    +discussionBoard: 4, // 4
    +survey: 5, // 5
    +issue: 6 // 6
  |};

  declare var SP$BrowserFileHandling: {|
    +permissive: 0, // 0
    +strict: 1 // 1
  |};

  declare var SP$CalendarType: {|
    +none: 0, // 0
    +gregorian: 1, // 1
    +japan: 2, // 2
    +taiwan: 3, // 3
    +korea: 4, // 4
    +hijri: 5, // 5
    +thai: 6, // 6
    +hebrew: 7, // 7
    +gregorianMEFrench: 8, // 8
    +gregorianArabic: 9, // 9
    +gregorianXLITEnglish: 10, // 10
    +gregorianXLITFrench: 11, // 11
    +koreaJapanLunar: 12, // 12
    +chineseLunar: 13, // 13
    +sakaEra: 14, // 14
    +umAlQura: 15 // 15
  |};

  /**
   * Specifies a Collaborative Application Markup Language (CAML) query on a list.
   */
  declare class SP$CamlQuery mixins SP$ClientValueObject {
    constructor(): this;

    /**
     * This method creates a Collaborative Application Markup Language (CAML) string
     * that can be used to recursively get all of the items in a list, including
     * the items in the subfolders.
     */
    static createAllItemsQuery(): SP$CamlQuery;

    /**
     * This method creates a Collaborative Application Markup Language (CAML) string
     * that can be used to recursively get all of the folders in a list, including
     * the subfolders.
     */
    static createAllFoldersQuery(): SP$CamlQuery;

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
    get_listItemCollectionPosition(): SP$ListItemCollectionPosition;

    /**
     * Sets a value that specifies the information required to get the next page of data for the list view.
     */
    set_listItemCollectionPosition(value: SP$ListItemCollectionPosition): void;

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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
  }

  declare class SP$Change mixins SP$ClientObject {
    get_changeToken(): SP$ChangeToken;
    get_changeType(): $Values<typeof SP$ChangeType>;
    get_siteId(): SP$Guid;
    get_time(): Date;
  }

  declare class SP$ChangeAlert mixins SP$Change {
    get_alertId(): SP$Guid;
    get_webId(): SP$Guid;
  }

  declare type SP$ChangeCollection = {
    itemAt(index: number): SP$Change,
    get_item(index: number): SP$Change
  } & SP$ClientObjectCollection<SP$Change>;

  declare class SP$ChangeContentType mixins SP$Change {
    get_contentTypeId(): SP$ContentTypeId;
    get_webId(): SP$Guid;
  }

  declare class SP$ChangeField mixins SP$Change {
    get_fieldId(): SP$Guid;
    get_webId(): SP$Guid;
  }

  declare class SP$ChangeFile mixins SP$Change {
    get_uniqueId(): SP$Guid;
    get_webId(): SP$Guid;
  }

  declare class SP$ChangeFolder mixins SP$Change {
    get_uniqueId(): SP$Guid;
    get_webId(): SP$Guid;
  }

  declare class SP$ChangeGroup mixins SP$Change {
    get_groupId(): number;
  }

  declare class SP$ChangeItem mixins SP$Change {
    get_itemId(): number;
    get_listId(): SP$Guid;
    get_webId(): SP$Guid;
  }

  declare class SP$ChangeList mixins SP$Change {
    get_listId(): SP$Guid;
    get_webId(): SP$Guid;
  }

  declare class SP$ChangeLogItemQuery mixins SP$ClientValueObject {
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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$ChangeQuery mixins SP$ClientValueObject {
    constructor(): this;
    constructor(allChangeObjectTypes: boolean, allChangeTypes: boolean): this;
    get_add(): boolean;
    set_add(value: boolean): void;
    get_alert(): boolean;
    set_alert(value: boolean): void;
    get_changeTokenEnd(): SP$ChangeToken;
    set_changeTokenEnd(value: SP$ChangeToken): void;
    get_changeTokenStart(): SP$ChangeToken;
    set_changeTokenStart(value: SP$ChangeToken): void;
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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
  }

  declare class SP$ChangeSite mixins SP$Change {}

  declare class SP$ChangeToken mixins SP$ClientValueObject {
    get_stringValue(): string;
    set_stringValue(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$ChangeType: {|
    +noChange: 0, // 0
    +add: 1, // 1
    +update: 2, // 2
    +deleteObject: 3, // 3
    +rename: 4, // 4
    +moveAway: 5, // 5
    +moveInto: 6, // 6
    +restore: 7, // 7
    +roleAdd: 8, // 8
    +roleDelete: 9, // 9
    +roleUpdate: 10, // 10
    +assignmentAdd: 11, // 11
    +assignmentDelete: 12, // 12
    +memberAdd: 13, // 13
    +memberDelete: 14, // 14
    +systemUpdate: 15, // 15
    +navigation: 16, // 16
    +scopeAdd: 17, // 17
    +scopeDelete: 18, // 18
    +listContentTypeAdd: 19, // 19
    +listContentTypeDelete: 20 // 20
  |};

  declare class SP$ChangeUser mixins SP$Change {
    get_activate(): boolean;
    get_userId(): number;
  }

  declare class SP$ChangeView mixins SP$Change {
    get_viewId(): SP$Guid;
    get_listId(): SP$Guid;
    get_webId(): SP$Guid;
  }

  declare class SP$ChangeWeb mixins SP$Change {
    get_webId(): SP$Guid;
  }

  declare var SP$CheckinType: {|
    +minorCheckIn: 0, // 0
    +majorCheckIn: 1, // 1
    +overwriteCheckIn: 2 // 2
  |};

  declare var SP$CheckOutType: {|
    +online: 0, // 0
    +offline: 1, // 1
    +none: 2 // 2
  |};

  declare var SP$ChoiceFormatType: {|
    +dropdown: 0, // 0
    +radioButtons: 1 // 1
  |};

  declare class SP$CompatibilityRange mixins SP$ClientObject {}

  declare class SP$ContentType mixins SP$ClientObject {
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
    get_fieldLinks(): SP$FieldLinkCollection;
    get_fields(): SP$FieldCollection;
    get_group(): string;
    set_group(value: string): void;
    get_hidden(): boolean;
    set_hidden(value: boolean): void;
    get_id(): SP$ContentTypeId;
    get_jsLink(): string;
    set_jsLink(value: string): void;
    get_name(): string;
    set_name(value: string): void;
    get_newFormTemplateName(): string;
    set_newFormTemplateName(value: string): void;
    get_newFormUrl(): string;
    set_newFormUrl(value: string): void;
    get_parent(): SP$ContentType;
    get_readOnly(): boolean;
    set_readOnly(value: boolean): void;
    get_schemaXml(): string;
    get_schemaXmlWithResourceTokens(): string;
    set_schemaXmlWithResourceTokens(value: string): void;
    get_scope(): string;
    get_sealed(): boolean;
    set_sealed(value: boolean): void;
    get_stringId(): string;
    get_workflowAssociations(): SP$Workflow$WorkflowAssociationCollection;
    update(updateChildren: boolean): void;
    deleteObject(): void;
  }

  declare type SP$ContentTypeCollection = {
    itemAt(index: number): SP$ContentType,
    get_item(index: number): SP$ContentType,
    getById(contentTypeId: string): SP$ContentType,
    addExistingContentType(contentType: SP$ContentType): SP$ContentType,
    add(parameters: SP$ContentTypeCreationInformation): SP$ContentType
  } & SP$ClientObjectCollection<SP$ContentType>;

  declare class SP$ContentTypeCreationInformation mixins SP$ClientValueObject {
    get_description(): string;
    set_description(value: string): void;
    get_group(): string;
    set_group(value: string): void;
    get_name(): string;
    set_name(value: string): void;
    get_parentContentType(): SP$ContentType;
    set_parentContentType(value: SP$ContentType): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$ContentTypeId mixins SP$ClientValueObject {
    toString(): string;
    get_stringValue(): string;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$CustomizedPageStatus: {|
    +none: 0, // 0
    +uncustomized: 1, // 1
    +customized: 2 // 2
  |};

  declare var SP$DateTimeFieldFormatType: {|
    +dateOnly: 0, // 0
    +dateTime: 1 // 1
  |};

  declare var SP$DateTimeFieldFriendlyFormatType: {|
    +unspecified: 0, // 0
    +disabled: 1, // 1
    +relative: 2 // 2
  |};

  declare var SP$DraftVisibilityType: {|
    +reader: 0, // 0
    +author: 1, // 1
    +approver: 2 // 2
  |};

  declare class SP$EventReceiverDefinition mixins SP$ClientObject {
    get_receiverAssembly(): string;
    get_receiverClass(): string;
    get_receiverId(): SP$Guid;
    get_receiverName(): string;
    get_sequenceNumber(): number;
    get_synchronization(): $Values<typeof SP$EventReceiverSynchronization>;
    get_eventType(): $Values<typeof SP$EventReceiverType>;
    get_receiverUrl(): string;
    update(): void;
    deleteObject(): void;
  }

  declare type SP$EventReceiverDefinitionCollection = {
    itemAt(index: number): SP$EventReceiverDefinition,
    get_item(index: number): SP$EventReceiverDefinition,
    getById(eventReceiverId: SP$Guid): SP$EventReceiverDefinition,
    add(
      eventReceiverCreationInformation: SP$EventReceiverDefinitionCreationInformation
    ): SP$EventReceiverDefinition
  } & SP$ClientObjectCollection<SP$EventReceiverDefinition>;

  declare class SP$EventReceiverDefinitionCreationInformation
    mixins SP$ClientValueObject {
    get_receiverAssembly(): string;
    set_receiverAssembly(value: string): void;
    get_receiverClass(): string;
    set_receiverClass(value: string): void;
    get_receiverName(): string;
    set_receiverName(value: string): void;
    get_sequenceNumber(): number;
    set_sequenceNumber(value: number): void;
    get_synchronization(): $Values<typeof SP$EventReceiverSynchronization>;
    set_synchronization(
      value: $Values<typeof SP$EventReceiverSynchronization>
    ): void;
    get_eventType(): $Values<typeof SP$EventReceiverType>;
    set_eventType(value: $Values<typeof SP$EventReceiverType>): void;
    get_receiverUrl(): string;
    set_receiverUrl(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$EventReceiverSynchronization: {|
    +defaultSynchronization: 0, // 0
    +synchronous: 1, // 1
    +asynchronous: 2 // 2
  |};

  declare var SP$EventReceiverType: {|
    +invalidReceiver: 0, // 0
    +itemAdding: 1, // 1
    +itemUpdating: 2, // 2
    +itemDeleting: 3, // 3
    +itemCheckingIn: 4, // 4
    +itemCheckingOut: 5, // 5
    +itemUncheckingOut: 6, // 6
    +itemAttachmentAdding: 7, // 7
    +itemAttachmentDeleting: 8, // 8
    +itemFileMoving: 9, // 9
    +itemVersionDeleting: 10, // 10
    +fieldAdding: 11, // 11
    +fieldUpdating: 12, // 12
    +fieldDeleting: 13, // 13
    +listAdding: 14, // 14
    +listDeleting: 15, // 15
    +siteDeleting: 16, // 16
    +webDeleting: 17, // 17
    +webMoving: 18, // 18
    +webAdding: 19, // 19
    +groupAdding: 20, // 20
    +groupUpdating: 21, // 21
    +groupDeleting: 22, // 22
    +groupUserAdding: 23, // 23
    +groupUserDeleting: 24, // 24
    +roleDefinitionAdding: 25, // 25
    +roleDefinitionUpdating: 26, // 26
    +roleDefinitionDeleting: 27, // 27
    +roleAssignmentAdding: 28, // 28
    +roleAssignmentDeleting: 29, // 29
    +inheritanceBreaking: 30, // 30
    +inheritanceResetting: 31, // 31
    +workflowStarting: 32, // 32
    +itemAdded: 33, // 33
    +itemUpdated: 34, // 34
    +itemDeleted: 35, // 35
    +itemCheckedIn: 36, // 36
    +itemCheckedOut: 37, // 37
    +itemUncheckedOut: 38, // 38
    +itemAttachmentAdded: 39, // 39
    +itemAttachmentDeleted: 40, // 40
    +itemFileMoved: 41, // 41
    +itemFileConverted: 42, // 42
    +itemVersionDeleted: 43, // 43
    +fieldAdded: 44, // 44
    +fieldUpdated: 45, // 45
    +fieldDeleted: 46, // 46
    +listAdded: 47, // 47
    +listDeleted: 48, // 48
    +siteDeleted: 49, // 49
    +webDeleted: 50, // 50
    +webMoved: 51, // 51
    +webProvisioned: 52, // 52
    +groupAdded: 53, // 53
    +groupUpdated: 54, // 54
    +groupDeleted: 55, // 55
    +groupUserAdded: 56, // 56
    +groupUserDeleted: 57, // 57
    +roleDefinitionAdded: 58, // 58
    +roleDefinitionUpdated: 59, // 59
    +roleDefinitionDeleted: 60, // 60
    +roleAssignmentAdded: 61, // 61
    +roleAssignmentDeleted: 62, // 62
    +inheritanceBroken: 63, // 63
    +inheritanceReset: 64, // 64
    +workflowStarted: 65, // 65
    +workflowPostponed: 66, // 66
    +workflowCompleted: 67, // 67
    +entityInstanceAdded: 68, // 68
    +entityInstanceUpdated: 69, // 69
    +entityInstanceDeleted: 70, // 70
    +appInstalled: 71, // 71
    +appUpgraded: 72, // 72
    +appUninstalling: 73, // 73
    +emailReceived: 74, // 74
    +contextEvent: 75 // 75
  |};

  declare class SP$Feature mixins SP$ClientObject {
    get_definitionId(): SP$Guid;
  }

  declare type SP$FeatureCollection = {
    itemAt(index: number): SP$Feature,
    get_item(index: number): SP$Feature,
    getById(featureId: SP$Guid): SP$Feature,
    add(
      featureId: SP$Guid,
      force: boolean,
      featdefScope: $Values<typeof SP$FeatureDefinitionScope>
    ): SP$Feature,
    remove(featureId: SP$Guid, force: boolean): void
  } & SP$ClientObjectCollection<SP$Feature>;

  declare var SP$FeatureDefinitionScope: {|
    +none: 0, // 0
    +farm: 1, // 1
    +site: 2, // 2
    +web: 3 // 3
  |};

  declare class SP$Field mixins SP$ClientObject {
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
    get_id(): SP$Guid;
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
    get_fieldTypeKind(): $Values<typeof SP$FieldType>;
    set_fieldTypeKind(value: $Values<typeof SP$FieldType>): void;
    get_typeAsString(): string;
    set_typeAsString(value: string): void;
    get_typeDisplayName(): string;
    get_typeShortDescription(): string;
    get_validationFormula(): string;
    set_validationFormula(value: string): void;
    get_validationMessage(): string;
    set_validationMessage(value: string): void;
    validateSetValue<T>(item: SP$ListItem<T>, value: string): void;
    updateAndPushChanges(pushChangesToLists: boolean): void;
    update(): void;
    deleteObject(): void;
    setShowInDisplayForm(value: boolean): void;
    setShowInEditForm(value: boolean): void;
    setShowInNewForm(value: boolean): void;
  }

  declare class SP$FieldCalculated mixins SP$Field {
    get_dateFormat(): $Values<typeof SP$DateTimeFieldFormatType>;
    set_dateFormat(value: $Values<typeof SP$DateTimeFieldFormatType>): void;
    get_formula(): string;
    set_formula(value: string): void;
    get_outputType(): $Values<typeof SP$FieldType>;
    set_outputType(value: $Values<typeof SP$FieldType>): void;
  }

  declare class SP$FieldCalculatedErrorValue mixins SP$ClientValueObject {
    get_errorMessage(): string;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$FieldMultiChoice mixins SP$Field {
    get_fillInChoice(): boolean;
    set_fillInChoice(value: boolean): void;
    get_mappings(): string;
    get_choices(): string[];
    set_choices(value: string[]): void;
  }

  declare class SP$FieldChoice mixins SP$FieldMultiChoice {
    get_editFormat(): $Values<typeof SP$ChoiceFormatType>;
    set_editFormat(value: $Values<typeof SP$ChoiceFormatType>): void;
  }

  declare type SP$FieldCollection = {
    itemAt(index: number): SP$Field,
    get_item(index: number): SP$Field,
    get_schemaXml(): string,
    getByTitle(title: string): SP$Field,
    getById(id: SP$Guid): SP$Field,
    add(field: SP$Field): SP$Field,
    addDependentLookup(
      displayName: string,
      primaryLookupField: SP$Field,
      lookupField: string
    ): SP$Field,
    addFieldAsXml(
      schemaXml: string,
      addToDefaultView: boolean,
      options: $Values<typeof SP$AddFieldOptions>
    ): SP$Field,
    getByInternalNameOrTitle(strName: string): SP$Field
  } & SP$ClientObjectCollection<SP$Field>;

  declare class SP$FieldComputed mixins SP$Field {
    get_enableLookup(): boolean;
    set_enableLookup(value: boolean): void;
  }

  declare class SP$FieldNumber mixins SP$Field {
    get_maximumValue(): number;
    set_maximumValue(value: number): void;
    get_minimumValue(): number;
    set_minimumValue(value: number): void;
  }

  declare class SP$FieldCurrency mixins SP$FieldNumber {
    get_currencyLocaleId(): number;
    set_currencyLocaleId(value: number): void;
  }

  declare class SP$FieldDateTime mixins SP$Field {
    get_dateTimeCalendarType(): $Values<typeof SP$CalendarType>;
    set_dateTimeCalendarType(value: $Values<typeof SP$CalendarType>): void;
    get_displayFormat(): $Values<typeof SP$DateTimeFieldFormatType>;
    set_displayFormat(value: $Values<typeof SP$DateTimeFieldFormatType>): void;
    get_friendlyDisplayFormat(): $Values<
      typeof SP$DateTimeFieldFriendlyFormatType
    >;
    set_friendlyDisplayFormat(
      value: $Values<typeof SP$DateTimeFieldFriendlyFormatType>
    ): void;
  }

  declare class SP$FieldGeolocation mixins SP$Field {}

  declare class SP$FieldGeolocationValue mixins SP$ClientValueObject {
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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$FieldGuid mixins SP$Field {}

  declare class SP$FieldLink mixins SP$ClientObject {
    get_hidden(): boolean;
    set_hidden(value: boolean): void;
    get_id(): SP$Guid;
    get_name(): string;
    get_required(): boolean;
    set_required(value: boolean): void;
    deleteObject(): void;
  }

  declare type SP$FieldLinkCollection = {
    itemAt(index: number): SP$FieldLink,
    get_item(index: number): SP$FieldLink,
    getById(id: SP$Guid): SP$FieldLink,
    add(parameters: SP$FieldLinkCreationInformation): SP$FieldLink,
    reorder(internalNames: string[]): void
  } & SP$ClientObjectCollection<SP$FieldLink>;

  declare class SP$FieldLinkCreationInformation mixins SP$ClientValueObject {
    get_field(): SP$Field;
    set_field(value: SP$Field): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$FieldLookup mixins SP$Field {
    get_allowMultipleValues(): boolean;
    set_allowMultipleValues(value: boolean): void;
    get_isRelationship(): boolean;
    set_isRelationship(value: boolean): void;
    get_lookupField(): string;
    set_lookupField(value: string): void;
    get_lookupList(): string;
    set_lookupList(value: string): void;
    get_lookupWebId(): SP$Guid;
    set_lookupWebId(value: SP$Guid): void;
    get_primaryFieldId(): string;
    set_primaryFieldId(value: string): void;
    get_relationshipDeleteBehavior(): $Values<
      typeof SP$RelationshipDeleteBehaviorType
    >;
    set_relationshipDeleteBehavior(
      value: $Values<typeof SP$RelationshipDeleteBehaviorType>
    ): void;
  }

  declare class SP$FieldLookupValue mixins SP$ClientValueObject {
    get_lookupId(): number;
    set_lookupId(value: number): void;
    get_lookupValue(): string;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$FieldMultiLineText mixins SP$Field {
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
    get_wikiLinking(): boolean;
  }

  declare class SP$FieldRatingScale mixins SP$FieldMultiChoice {
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
    get_rangeCount(): number;
  }

  declare class SP$FieldRatingScaleQuestionAnswer mixins SP$ClientValueObject {
    get_answer(): number;
    set_answer(value: number): void;
    get_question(): string;
    set_question(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$FieldStringValues mixins SP$ClientObject {
    get_fieldValues(): any;
    get_item(fieldName: string): string;
    refreshLoad(): void;
  }

  declare class SP$FieldText mixins SP$Field {
    get_maxLength(): number;
    set_maxLength(value: number): void;
  }

  declare var SP$FieldType: {|
    +invalid: 0, // 0
    +integer: 1, // 1
    +text: 2, // 2
    +note: 3, // 3
    +dateTime: 4, // 4
    +counter: 5, // 5
    +choice: 6, // 6
    +lookup: 7, // 7
    +boolean: 8, // 8
    +number: 9, // 9
    +currency: 10, // 10
    +URL: 11, // 11
    +computed: 12, // 12
    +threading: 13, // 13
    +guid: 14, // 14
    +multiChoice: 15, // 15
    +gridChoice: 16, // 16
    +calculated: 17, // 17
    +file: 18, // 18
    +attachments: 19, // 19
    +user: 20, // 20
    +recurrence: 21, // 21
    +crossProjectLink: 22, // 22
    +modStat: 23, // 23
    +error: 24, // 24
    +contentTypeId: 25, // 25
    +pageSeparator: 26, // 26
    +threadIndex: 27, // 27
    +workflowStatus: 28, // 28
    +allDayEvent: 29, // 29
    +workflowEventType: 30, // 30
    +geolocation: 31, // 31
    +outcomeChoice: 32, // 32
    +maxItems: 33 // 33
  |};

  declare class SP$FieldUrl mixins SP$Field {
    get_displayFormat(): $Values<typeof SP$UrlFieldFormatType>;
    set_displayFormat(value: $Values<typeof SP$UrlFieldFormatType>): void;
  }

  declare class SP$FieldUrlValue mixins SP$ClientValueObject {
    get_description(): string;
    set_description(value: string): void;
    get_url(): string;
    set_url(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$FieldUser mixins SP$FieldLookup {
    get_allowDisplay(): boolean;
    set_allowDisplay(value: boolean): void;
    get_presence(): boolean;
    set_presence(value: boolean): void;
    get_selectionGroup(): number;
    set_selectionGroup(value: number): void;
    get_selectionMode(): $Values<typeof SP$FieldUserSelectionMode>;
    set_selectionMode(value: $Values<typeof SP$FieldUserSelectionMode>): void;
  }

  declare var SP$FieldUserSelectionMode: {|
    +peopleOnly: 0, // 0
    +peopleAndGroups: 1 // 1
  |};

  declare class SP$FieldUserValue mixins SP$FieldLookupValue {
    static fromUser(userName: string): SP$FieldUserValue;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  /**
   * Represents a file in a SharePoint Web site that can be a Web Part Page, an item in a document library, or a file in a folder.
   */
  declare class SP$File mixins SP$ClientObject {
    get_author(): SP$User;

    /**
     * Returns the user who has checked out the file.
     */
    get_checkedOutByUser(): SP$User;

    /**
     * Returns the comment that was specified when the document was checked into the document library.
     */
    get_checkInComment(): string;

    /**
     * The type of checkout that exists on the document.
     */
    get_checkOutType(): $Values<typeof SP$CheckOutType>;
    get_contentTag(): string;

    /**
     * Gets the customization(ghost) status of the SPFile.
     */
    get_customizedPageStatus(): $Values<typeof SP$CustomizedPageStatus>;

    /**
     * Gets the ETag of the file
     */
    get_eTag(): string;

    /**
     * Specifies whether the file exists
     */
    get_exists(): boolean;
    get_length(): number;
    get_level(): $Values<typeof SP$FileLevel>;

    /**
     * Specifies the SPListItem corresponding to this file if this file belongs to a doclib. Values for all fields are returned also.
     */
    get_listItemAllFields<T>(): SP$ListItem<T>;

    /**
     * Returns the user that owns the current lock on the file. MUST return null if there is no lock.
     */
    get_lockedByUser(): SP$User;

    /**
     * Specifies the major version of the file.
     */
    get_majorVersion(): number;

    /**
     * Specifies the minor version of the file.
     */
    get_minorVersion(): number;
    get_modifiedBy(): SP$User;
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
    get_versions(): SP$FileVersionCollection;

    /**
     * Reverts an existing online or offline checkout for the file.
     */
    undoCheckOut(): void;
    checkIn(comment: string, checkInType: $Values<typeof SP$CheckinType>): void;
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
    static getContentVerFromTag(
      context: SP$ClientRuntimeContext,
      contentTag: string
    ): SP$IntResult;
    getLimitedWebPartManager(
      scope: $Values<typeof SP$WebParts$PersonalizationScope>
    ): SP$WebParts$LimitedWebPartManager;
    moveTo(newUrl: string, flags: $Values<typeof SP$MoveOperations>): void;
    copyTo(strNewUrl: string, bOverWrite: boolean): void;
    saveBinary(parameters: SP$FileSaveBinaryInformation): void;
    deleteObject(): void;

    /**
     * Moves the file to the recycle bin. MUST return the identifier of the new Recycle Bin item
     */
    recycle(): SP$GuidResult;
    checkOut(): void;
  }

  declare type SP$FileCollection = {
    itemAt(index: number): SP$File,
    get_item(index: number): SP$File,
    getByUrl(url: string): SP$File,
    add(parameters: SP$FileCreationInformation): SP$File,
    addTemplateFile(
      urlOfFile: string,
      templateFileType: $Values<typeof SP$TemplateFileType>
    ): SP$File
  } & SP$ClientObjectCollection<SP$File>;

  declare class SP$FileCreationInformation mixins SP$ClientValueObject {
    get_content(): SP$Base64EncodedByteArray;
    set_content(value: SP$Base64EncodedByteArray): void;
    get_overwrite(): boolean;
    set_overwrite(value: boolean): void;
    get_url(): string;
    set_url(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$FileLevel: {|
    +published: 0, // 0
    +draft: 1, // 1
    +checkout: 2 // 2
  |};

  declare class SP$FileSaveBinaryInformation mixins SP$ClientValueObject {
    get_checkRequiredFields(): boolean;
    set_checkRequiredFields(value: boolean): void;
    get_content(): SP$Base64EncodedByteArray;
    set_content(value: SP$Base64EncodedByteArray): void;
    get_eTag(): string;
    set_eTag(value: string): void;
    get_fieldValues(): any;
    set_fieldValues(value: any): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$FileSystemObjectType: {|
    +invalid: 0, // 0
    +file: 1, // 1
    +folder: 2, // 2
    +web: 3 // 3
  |};

  declare class SP$FileVersion mixins SP$ClientObject {
    get_checkInComment(): string;
    get_created(): Date;
    get_createdBy(): SP$User;
    get_iD(): number;
    get_isCurrentVersion(): boolean;
    get_size(): number;
    get_url(): string;
    get_versionLabel(): string;
    deleteObject(): void;
  }

  declare type SP$FileVersionCollection = {
    itemAt(index: number): SP$FileVersion,
    get_item(index: number): SP$FileVersion,
    getById(versionid: number): SP$FileVersion,
    deleteByID(vid: number): void,
    deleteByLabel(versionlabel: string): void,
    deleteAll(): void,
    restoreByLabel(versionlabel: string): void
  } & SP$ClientObjectCollection<SP$FileVersion>;

  declare class SP$Folder mixins SP$ClientObject {
    get_contentTypeOrder(): SP$ContentTypeId[];
    get_files(): SP$FileCollection;
    get_listItemAllFields<T>(): SP$ListItem<T>;
    get_itemCount(): number;
    get_name(): string;
    get_parentFolder(): SP$Folder;
    get_properties(): SP$PropertyValues;
    get_serverRelativeUrl(): string;
    get_folders(): SP$FolderCollection;
    get_uniqueContentTypeOrder(): SP$ContentTypeId[];
    set_uniqueContentTypeOrder(value: SP$ContentTypeId[]): void;
    get_welcomePage(): string;
    set_welcomePage(value: string): void;
    update(): void;
    deleteObject(): void;
    recycle(): SP$GuidResult;
  }

  declare type SP$FolderCollection = {
    itemAt(index: number): SP$Folder,
    get_item(index: number): SP$Folder,
    getByUrl(url: string): SP$Folder,
    add(url: string): SP$Folder
  } & SP$ClientObjectCollection<SP$Folder>;

  declare class SP$Form mixins SP$ClientObject {
    get_id(): SP$Guid;
    get_serverRelativeUrl(): string;
    get_formType(): $Values<typeof SP$PageType>;
  }

  declare type SP$FormCollection = {
    itemAt(index: number): SP$Form,
    get_item(index: number): SP$Form,
    getByPageType(formType: $Values<typeof SP$PageType>): SP$Form,
    getById(id: SP$Guid): SP$Form
  } & SP$ClientObjectCollection<SP$Form>;

  declare class SP$Principal mixins SP$ClientObject {
    get_id(): number;
    get_isHiddenInUI(): boolean;
    get_loginName(): string;
    get_title(): string;
    set_title(value: string): void;
    get_principalType(): $Values<typeof SP$Utilities$PrincipalType>;
  }

  declare class SP$Group mixins SP$Principal {
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
    get_owner(): SP$Principal;
    set_owner(value: SP$Principal): void;
    get_ownerTitle(): string;
    get_requestToJoinLeaveEmailSetting(): string;
    set_requestToJoinLeaveEmailSetting(value: string): void;
    get_users(): SP$UserCollection;
    update(): void;
  }

  declare type SP$GroupCollection = {
    itemAt(index: number): SP$Group,
    get_item(index: number): SP$Group,
    getByName(name: string): SP$Group,
    getById(id: number): SP$Group,
    add(parameters: SP$GroupCreationInformation): SP$Group,
    removeByLoginName(loginName: string): void,
    removeById(id: number): void,
    remove(group: SP$Group): void
  } & SP$ClientObjectCollection<SP$Group>;

  declare class SP$GroupCreationInformation mixins SP$ClientValueObject {
    get_description(): string;
    set_description(value: string): void;
    get_title(): string;
    set_title(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$InformationRightsManagementSettings mixins SP$ClientObject {
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
    update(): void;
  }

  declare class SP$Language mixins SP$ClientValueObject {
    get_displayName(): string;
    get_languageTag(): string;
    get_lcid(): number;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$SecurableObject mixins SP$ClientObject {
    get_firstUniqueAncestorSecurableObject(): SP$SecurableObject;
    get_hasUniqueRoleAssignments(): boolean;
    get_roleAssignments(): SP$RoleAssignmentCollection;
    resetRoleInheritance(): void;
    breakRoleInheritance(
      copyRoleAssignments: boolean,
      clearSubscopes: boolean
    ): void;
  }

  /**
   * Represents display mode for a control or form
   */

  declare var SP$ControlMode: {|
    +invalid: 0, // 0
    +displayMode: 1, // 1
    +editMode: 2, // 2
    +newMode: 3 // 3
  |};

  /**
   * Represents a list on a SharePoint Web site.
   */
  declare class SP$List<T = any> mixins SP$SecurableObject {
    /**
     * Gets item by id.
     */
    getItemById(id: number): SP$ListItem<T>;

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
    get_baseType(): $Values<typeof SP$BaseType>;

    /**
     * Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level.
     */
    get_browserFileHandling(): $Values<typeof SP$BrowserFileHandling>;

    /**
     * Gets the content types that are associated with the list.
     */
    get_contentTypes(): SP$ContentTypeCollection;

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
    get_dataSource(): SP$ListDataSource;

    /**
     * Gets a value that specifies the default workflow identifier for content approval on the list.
     */
    get_defaultContentApprovalWorkflowId(): SP$Guid;

    /**
     * Sets a value that specifies the default workflow identifier for content approval on the list.
     */
    set_defaultContentApprovalWorkflowId(value: SP$Guid): void;

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
    get_defaultView(): SP$View;

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
    get_draftVersionVisibility(): $Values<typeof SP$DraftVisibilityType>;

    /**
     * Sets a value that specifies the minimum permission required to view minor versions and drafts within the list.
     */
    set_draftVersionVisibility(
      value: $Values<typeof SP$DraftVisibilityType>
    ): void;

    /**
     * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
     */
    get_effectiveBasePermissions(): SP$BasePermissions;

    /**
     * Gets the effective base permissions for the current user, as they should be displayed in UI. This will only differ from EffectiveBasePermissions if ReadOnlyUI is set to true, and in all cases will be a subset of EffectiveBasePermissions. To put it another way, EffectiveBasePermissionsForUI will always be as or more restrictive than EffectiveBasePermissions.
     */
    get_effectiveBasePermissionsForUI(): SP$BasePermissions;

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
    get_eventReceivers(): SP$EventReceiverDefinitionCollection;

    /**
     * Gets a value that specifies the collection of all fields in the list.
     */
    get_fields(): SP$FieldCollection;

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
    get_forms(): SP$FormCollection;

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
    get_id(): SP$Guid;

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
    get_informationRightsManagementSettings(): SP$InformationRightsManagementSettings;

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
    get_parentWeb(): SP$Web;

    /**
     * Gets a value that specifies the server-relative URL of the site that contains the list.
     */
    get_parentWebUrl(): string;

    /**
     * Gets the root folder that contains the files in the list and any related files.
     */
    get_rootFolder(): SP$Folder;

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
    get_templateFeatureId(): SP$Guid;

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
    get_userCustomActions(): SP$UserCustomActionCollection;

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
    get_views(): SP$ViewCollection;

    /**
     * Gets the collection of workflow association objects that represents all the workflows that are associated with the list.
     */
    get_workflowAssociations(): SP$Workflow$WorkflowAssociationCollection;

    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     */
    getChanges(query: SP$ChangeQuery): SP$ChangeCollection;

    /**
     * Returns array of items describing changes since time specified in the query
     */
    getListItemChangesSinceToken(query: SP$ChangeLogItemQuery): any[];

    /**
     * Gets the effective permissions that a specified user has on the list.
     */
    getUserEffectivePermissions(userName: string): SP$BasePermissions;

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
      uri: string
    ): SP$StringResult;

    /**
     * Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
     */
    getRelatedFields(): SP$RelatedFieldCollection;

    /**
     * This member is reserved for internal use and is not intended to be used directly from your code.
     */
    getRelatedFieldsExtendedData(): SP$RelatedFieldExtendedDataCollection;

    /**
     * Returns json string which contains all information necessary for rendering the specified list form for the specified itemId. Mode is SP.ControlMode
     */
    renderListFormData(
      itemId: number,
      formId: string,
      mode: $Values<typeof SP$ControlMode>
    ): SP$StringResult;

    /**
     * Returns the data for the specified query view.
     */
    renderListData(viewXml: string): SP$StringResult;

    /**
     * This member is reserved for internal use and is not intended to be used directly from your code.
     */
    reserveListItemId(): SP$IntResult;

    /**
     * Updates the database with changes that are made to the list object.
     */
    update(): void;

    /**
     * Returns the list view with the specified view identifier.
     */
    getView(viewGuid: SP$Guid): SP$View;

    /**
     * Deletes the list.
     */
    deleteObject(): void;

    /**
     * Sends the list to the site recycle bin.
     */
    recycle(): SP$GuidResult;

    /**
     * Returns collection of list items based on the specified CAML query.
     */
    getItems(query: SP$CamlQuery): SP$ListItemCollection<T>;

    /**
     * Creates a new list item in the list.
     */
    addItem(parameters: SP$ListItemCreationInformation): SP$ListItem<T>;
  }

  /**
   * Represents a collection of SP.List objects
   */
  declare type SP$ListCollection = {
    /**
     * Gets the list at the specified index in the collection.
     */
    itemAt<T>(index: number): SP$List<T>,

    /**
     * Gets the list at the specified index in the collection.
     */
    get_item<T>(index: number): SP$List<T>,

    /**
     * Returns the list with the specified title from the collection.
     */
    getByTitle<T>(title: string): SP$List<T>,

    /**
     * Returns the list with the specified list identifier.
     */
    getById<T>(id: string | SP$Guid): SP$List<T>,

    /**
     * Creates a new list or a document library.
     */
    add(parameters: SP$ListCreationInformation): SP$List,

    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary(): SP$List,

    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary(): SP$List
  } & SP$ClientObjectCollection<SP$List>;

  declare class SP$ListCreationInformation mixins SP$ClientValueObject {
    get_customSchemaXml(): string;
    set_customSchemaXml(value: string): void;
    get_dataSourceProperties(): any;
    set_dataSourceProperties(value: any): void;
    get_description(): string;
    set_description(value: string): void;
    get_documentTemplateType(): number;
    set_documentTemplateType(value: number): void;
    get_quickLaunchOption(): $Values<typeof SP$QuickLaunchOptions>;
    set_quickLaunchOption(value: $Values<typeof SP$QuickLaunchOptions>): void;
    get_templateFeatureId(): SP$Guid;
    set_templateFeatureId(value: SP$Guid): void;
    get_templateType(): number;
    set_templateType(value: number): void;
    get_title(): string;
    set_title(value: string): void;
    get_url(): string;
    set_url(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$ListDataSource mixins SP$ClientValueObject {
    get_properties(): any;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$ListDataValidationExceptionValue
    mixins SP$ClientValueObject {
    get_fieldFailures(): SP$ListDataValidationFailure[];
    get_itemFailure(): SP$ListDataValidationFailure;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$ListDataValidationFailure mixins SP$ClientValueObject {
    get_displayName(): string;
    get_message(): string;
    get_name(): string;
    get_reason(): $Values<typeof SP$ListDataValidationFailureReason>;
    get_validationType(): $Values<typeof SP$ListDataValidationType>;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$ListDataValidationFailureReason: {|
    +dataFailure: 0, // 0
    +formulaError: 1 // 1
  |};

  declare var SP$ListDataValidationType: {|
    +userFormulaField: 0, // 0
    +userFormulaItem: 1, // 1
    +requiredField: 2, // 2
    +choiceField: 3, // 3
    +minMaxField: 4, // 4
    +textField: 5 // 5
  |};

  /**
   * Represents an item or row in a list.
   */
  declare class SP$ListItem<T = any> mixins SP$SecurableObject {
    get_fieldValues(): T;

    /**
     * Gets the specified field value for the list item. Field value is returned as string, but it can be casted to a specific field value type, e.g. SP.LookupFieldValue, etc.
     */
    get_item<K: $Keys<T>>(fieldInternalName: K): $ElementType<T, K>;

    /**
     * Sets the specified field value for the list item. Consider using parseAndSetFieldValue instead.
     */
    set_item<K: $Keys<T>>(
      fieldInternalName: K,
      value: $ElementType<T, K>
    ): void;

    /**
     * Gets collection of objects that represent attachments for the list item.
     */
    get_attachmentFiles(): SP$AttachmentCollection;

    /**
     * Gets the content type of the item.
     */
    get_contentType(): SP$ContentType;

    /**
     * Gets a value that specifies the display name of the list item.
     * This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string.
     */
    get_displayName(): string;

    /**
     * Gets a value that specifies the effective permissions on the list item that are assigned to the current user.
     * This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string.
     */
    get_effectiveBasePermissions(): SP$BasePermissions;

    /**
     * Gets the effective base permissions for the current user, as they should be displayed in UI.
     * This will only differ from EffectiveBasePermissions if ReadOnlyUI is set to true on the item's parent list, and in all cases will be a subset of EffectiveBasePermissions. To put it another way, EffectiveBasePermissionsForUI will always be as or more restrictive than EffectiveBasePermissions.
     * This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string.
     */
    get_effectiveBasePermissionsForUI(): SP$BasePermissions;
    get_fieldValuesAsHtml(): SP$FieldStringValues;
    get_fieldValuesAsText(): SP$FieldStringValues;
    get_fieldValuesForEdit(): SP$FieldStringValues;

    /**
     * Gets the file that is represented by the item from a document library. Only for document libraries.
     */
    get_file(): SP$File;

    /**
     * Gets or sets the file system object type for the item (file, folder or invalid).
     */
    get_fileSystemObjectType(): $Values<typeof SP$FileSystemObjectType>;

    /**
     * Gets the parent folder for the list item
     */
    get_folder(): SP$Folder;

    /**
     * Gets id of the item
     */
    get_id(): number;

    /**
     * Get the list in which the item resides.
     */
    get_parentList(): SP$List;
    refreshLoad(): void;
    getWOPIFrameUrl(
      action: $Values<typeof SP$Utilities$SPWOPIFrameAction>
    ): SP$StringResult;

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
    recycle(): SP$GuidResult;

    /**
     * Gets effective permissions for the specified user.
     */
    getUserEffectivePermissions(userName: string): SP$BasePermissions;

    /**
     * Sets the value of the field for the list item based on an implementation specific transformation of the value.
     */
    parseAndSetFieldValue(fieldInternalName: string, value: string): void;

    /**
     * Validates form values specified for the list item. Errors are returned through hasException and errorMessage properties of the ListItemFormUpdateValue objects
     */
    validateUpdateListItem(
      formValues: SP$ListItemFormUpdateValue[],
      bNewDocumentUpdate: boolean
    ): SP$ListItemFormUpdateValue[];
  }

  declare type SP$ListItemCollection<T = any> = {
    itemAt(index: number): SP$ListItem<T>,
    get_item(index: number): SP$ListItem<T>,
    getById(id: number | string): SP$ListItem<T>,
    get_listItemCollectionPosition(): SP$ListItemCollectionPosition
  } & SP$ClientObjectCollection<SP$ListItem<T>>;

  declare class SP$ListItemCollectionPosition mixins SP$ClientValueObject {
    get_pagingInfo(): string;
    set_pagingInfo(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  /**
   * Specifies the properties of the new list item.
   */
  declare class SP$ListItemCreationInformation mixins SP$ClientValueObject {
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
    get_underlyingObjectType(): $Values<typeof SP$FileSystemObjectType>;

    /**
     * Sets a value that specifies whether the new list item is a file or a folder.
     */
    set_underlyingObjectType(
      value: $Values<typeof SP$FileSystemObjectType>
    ): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare type SP$ListItemEntityCollection<T> = {
    itemAt(index: number): SP$ListItem<T>,
    get_item(index: number): SP$ListItem<T>
  } & SP$ClientObjectCollection<SP$ListItem<T>>;

  declare class SP$ListItemFormUpdateValue mixins SP$ClientValueObject {
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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$ListTemplate mixins SP$ClientObject {
    get_allowsFolderCreation(): boolean;
    get_baseType(): $Values<typeof SP$BaseType>;
    get_description(): string;
    get_featureId(): SP$Guid;
    get_hidden(): boolean;
    get_imageUrl(): string;
    get_internalName(): string;
    get_isCustomTemplate(): boolean;
    get_name(): string;
    get_onQuickLaunch(): boolean;
    get_listTemplateTypeKind(): number;
    get_unique(): boolean;
  }

  declare type SP$ListTemplateCollection = {
    itemAt(index: number): SP$ListTemplate,
    get_item(index: number): SP$ListTemplate,
    getByName(name: string): SP$ListTemplate
  } & SP$ClientObjectCollection<SP$ListTemplate>;

  declare var SP$ListTemplateType: {|
    +invalidType: 0, // 0
    +noListTemplate: 1, // 1
    +genericList: 2, // 2
    +documentLibrary: 3, // 3
    +survey: 4, // 4
    +links: 5, // 5
    +announcements: 6, // 6
    +contacts: 7, // 7
    +events: 8, // 8
    +tasks: 9, // 9
    +discussionBoard: 10, // 10
    +pictureLibrary: 11, // 11
    +dataSources: 12, // 12
    +webTemplateCatalog: 13, // 13
    +userInformation: 14, // 14
    +webPartCatalog: 15, // 15
    +listTemplateCatalog: 16, // 16
    +xMLForm: 17, // 17
    +masterPageCatalog: 18, // 18
    +noCodeWorkflows: 19, // 19
    +workflowProcess: 20, // 20
    +webPageLibrary: 21, // 21
    +customGrid: 22, // 22
    +solutionCatalog: 23, // 23
    +noCodePublic: 24, // 24
    +themeCatalog: 25, // 25
    +designCatalog: 26, // 26
    +appDataCatalog: 27, // 27
    +dataConnectionLibrary: 28, // 28
    +workflowHistory: 29, // 29
    +ganttTasks: 30, // 30
    +helpLibrary: 31, // 31
    +accessRequest: 32, // 32
    +tasksWithTimelineAndHierarchy: 33, // 33
    +maintenanceLogs: 34, // 34
    +meetings: 35, // 35
    +agenda: 36, // 36
    +meetingUser: 37, // 37
    +decision: 38, // 38
    +meetingObjective: 39, // 39
    +textBox: 40, // 40
    +thingsToBring: 41, // 41
    +homePageLibrary: 42, // 42
    +posts: 43, // 43
    +comments: 44, // 44
    +categories: 45, // 45
    +facility: 46, // 46
    +whereabouts: 47, // 47
    +callTrack: 48, // 48
    +circulation: 49, // 49
    +timecard: 50, // 50
    +holidays: 51, // 51
    +iMEDic: 52, // 52
    +externalList: 53, // 53
    +mySiteDocumentLibrary: 54, // 54
    +issueTracking: 55, // 55
    +adminTasks: 56, // 56
    +healthRules: 57, // 57
    +healthReports: 58, // 58
    +developerSiteDraftApps: 59 // 59
  |};

  declare var SP$MoveOperations: {|
    +none: 0, // 0
    +overwrite: 1, // 1
    +allowBrokenThickets: 2, // 2
    +bypassApprovePermission: 3 // 3
  |};

  declare class SP$Navigation mixins SP$ClientObject {
    get_quickLaunch(): SP$NavigationNodeCollection;
    get_topNavigationBar(): SP$NavigationNodeCollection;
    get_useShared(): boolean;
    set_useShared(value: boolean): void;
    getNodeById(id: number): SP$NavigationNode;
  }

  declare class SP$NavigationNode mixins SP$ClientObject {
    get_children(): SP$NavigationNodeCollection;
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
    deleteObject(): void;
  }

  declare type SP$NavigationNodeCollection = {
    itemAt(index: number): SP$NavigationNode,
    get_item(index: number): SP$NavigationNode,
    add(parameters: SP$NavigationNodeCreationInformation): SP$NavigationNode
  } & SP$ClientObjectCollection<SP$NavigationNode>;

  declare class SP$NavigationNodeCreationInformation
    mixins SP$ClientValueObject {
    get_asLastNode(): boolean;
    set_asLastNode(value: boolean): void;
    get_isExternal(): boolean;
    set_isExternal(value: boolean): void;
    get_previousNode(): SP$NavigationNode;
    set_previousNode(value: SP$NavigationNode): void;
    get_title(): string;
    set_title(value: string): void;
    get_url(): string;
    set_url(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$ObjectSharingInformation mixins SP$ClientObject {
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
    getSharedWithUsers(): SP$ClientObjectList<SP$ObjectSharingInformationUser>;
    static getListItemSharingInformation(
      context: SP$ClientRuntimeContext,
      listID: SP$Guid,
      itemID: number,
      excludeCurrentUser: boolean,
      excludeSiteAdmin: boolean,
      excludeSecurityGroups: boolean,
      retrieveAnonymousLinks: boolean,
      retrieveUserInfoDetails: boolean,
      checkForAccessRequests: boolean
    ): SP$ObjectSharingInformation;
    static getWebSharingInformation(
      context: SP$ClientRuntimeContext,
      excludeCurrentUser: boolean,
      excludeSiteAdmin: boolean,
      excludeSecurityGroups: boolean,
      retrieveAnonymousLinks: boolean,
      retrieveUserInfoDetails: boolean,
      checkForAccessRequests: boolean
    ): SP$ObjectSharingInformation;
    static getObjectSharingInformation(
      context: SP$ClientRuntimeContext,
      securableObject: SP$SecurableObject,
      excludeCurrentUser: boolean,
      excludeSiteAdmin: boolean,
      excludeSecurityGroups: boolean,
      retrieveAnonymousLinks: boolean,
      retrieveUserInfoDetails: boolean,
      checkForAccessRequests: boolean,
      retrievePermissionLevels: boolean
    ): SP$ObjectSharingInformation;
  }

  declare class SP$ObjectSharingInformationUser mixins SP$ClientObject {
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
    get_principal(): SP$Principal;
    get_sipAddress(): string;
    get_user(): SP$User;
  }

  declare var SP$OpenWebOptions: {|
    +none: 0, // 0
    +initNavigationCache: 1 // 1
  |};

  declare var SP$PageType: {|
    +invalid: 0, // 0
    +defaultView: 1, // 1
    +normalView: 2, // 2
    +dialogView: 3, // 3
    +view: 4, // 4
    +displayForm: 5, // 5
    +displayFormDialog: 6, // 6
    +editForm: 7, // 7
    +editFormDialog: 8, // 8
    +newForm: 9, // 9
    +newFormDialog: 10, // 10
    +solutionForm: 11, // 11
    +pAGE_MAXITEMS: 12 // 12
  |};

  declare class SP$PropertyValues mixins SP$ClientObject {
    get_fieldValues(): any;
    get_item(fieldName: string): any;
    set_item(fieldName: string, value: any): void;
    refreshLoad(): void;
  }

  declare class SP$PushNotificationSubscriber mixins SP$ClientObject {
    get_customArgs(): string;
    set_customArgs(value: string): void;
    get_deviceAppInstanceId(): SP$Guid;
    get_lastModifiedTimeStamp(): Date;
    get_registrationTimeStamp(): Date;
    get_serviceToken(): string;
    set_serviceToken(value: string): void;
    get_subscriberType(): string;
    set_subscriberType(value: string): void;
    get_user(): SP$User;
    update(): void;
  }

  declare type SP$PushNotificationSubscriberCollection = {
    itemAt(index: number): SP$PushNotificationSubscriber,
    get_item(index: number): SP$PushNotificationSubscriber,
    getByStoreId(id: string): SP$PushNotificationSubscriber
  } & SP$ClientObjectCollection<SP$PushNotificationSubscriber>;

  declare var SP$QuickLaunchOptions: {|
    +off: 0, // 0
    +on: 1, // 1
    +defaultValue: 2 // 2
  |};

  declare class SP$RecycleBinItem mixins SP$ClientObject {
    get_author(): SP$User;
    get_deletedBy(): SP$User;
    get_deletedDate(): Date;
    get_dirName(): string;
    get_id(): SP$Guid;
    get_itemState(): $Values<typeof SP$RecycleBinItemState>;
    get_itemType(): $Values<typeof SP$RecycleBinItemType>;
    get_leafName(): string;
    get_size(): number;
    get_title(): string;
    deleteObject(): void;
    restore(): void;
  }

  declare type SP$RecycleBinItemCollection = {
    itemAt(index: number): SP$RecycleBinItem,
    get_item(index: number): SP$RecycleBinItem,
    getById(id: SP$Guid): SP$RecycleBinItem,
    deleteAll(): void,
    restoreAll(): void
  } & SP$ClientObjectCollection<SP$RecycleBinItem>;

  declare var SP$RecycleBinItemState: {|
    +none: 0, // 0
    +firstStageRecycleBin: 1, // 1
    +secondStageRecycleBin: 2 // 2
  |};

  declare var SP$RecycleBinItemType: {|
    +none: 0, // 0
    +file: 1, // 1
    +fileVersion: 2, // 2
    +listItem: 3, // 3
    +list: 4, // 4
    +folder: 5, // 5
    +folderWithLists: 6, // 6
    +attachment: 7, // 7
    +listItemVersion: 8, // 8
    +cascadeParent: 9, // 9
    +web: 10 // 10
  |};

  declare class SP$RegionalSettings mixins SP$ClientObject {
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
    get_timeZone(): SP$TimeZone;
    get_timeZones(): SP$TimeZoneCollection;
    get_workDayEndHour(): number;
    get_workDays(): number;
    get_workDayStartHour(): number;
  }

  declare class SP$RelatedField mixins SP$ClientObject {
    get_fieldId(): SP$Guid;
    get_listId(): SP$Guid;
    get_lookupList(): SP$List;
    get_relationshipDeleteBehavior(): $Values<
      typeof SP$RelationshipDeleteBehaviorType
    >;
    get_webId(): SP$Guid;
  }

  declare type SP$RelatedFieldCollection = {
    itemAt(index: number): SP$RelatedField,
    get_item(index: number): SP$RelatedField
  } & SP$ClientObjectCollection<SP$RelatedField>;

  declare class SP$RelatedFieldExtendedData mixins SP$ClientObject {
    get_fieldId(): SP$Guid;
    get_listId(): SP$Guid;
    get_listImageUrl(): string;
    get_resolvedListTitle(): string;
    get_toolTipDescription(): string;
    get_webId(): SP$Guid;
  }

  declare type SP$RelatedFieldExtendedDataCollection = {
    itemAt(index: number): SP$RelatedFieldExtendedData,
    get_item(index: number): SP$RelatedFieldExtendedData
  } & SP$ClientObjectCollection<SP$RelatedFieldExtendedData>;

  declare class SP$RelatedItem mixins SP$ClientValueObject {
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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$RelatedItemManager mixins SP$ClientObject {
    static getRelatedItems(
      context: SP$ClientRuntimeContext,
      SourceListName: string,
      SourceItemID: number
    ): SP$RelatedItem[];
    static getPageOneRelatedItems(
      context: SP$ClientRuntimeContext,
      SourceListName: string,
      SourceItemID: number
    ): SP$RelatedItem[];
    static addSingleLink(
      context: SP$ClientRuntimeContext,
      SourceListName: string,
      SourceItemID: number,
      SourceWebUrl: string,
      TargetListName: string,
      TargetItemID: number,
      TargetWebUrl: string,
      TryAddReverseLink: boolean
    ): void;
    static addSingleLinkToUrl(
      context: SP$ClientRuntimeContext,
      SourceListName: string,
      SourceItemID: number,
      TargetItemUrl: string,
      TryAddReverseLink: boolean
    ): void;
    static addSingleLinkFromUrl(
      context: SP$ClientRuntimeContext,
      SourceItemUrl: string,
      TargetListName: string,
      TargetItemID: number,
      TryAddReverseLink: boolean
    ): void;
    static deleteSingleLink(
      context: SP$ClientRuntimeContext,
      SourceListName: string,
      SourceItemID: number,
      SourceWebUrl: string,
      TargetListName: string,
      TargetItemID: number,
      TargetWebUrl: string,
      TryDeleteReverseLink: boolean
    ): void;
  }

  declare var SP$RelationshipDeleteBehaviorType: {|
    +none: 0, // 0
    +cascade: 1, // 1
    +restrict: 2 // 2
  |};

  declare class SP$RequestVariable mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext): this;
    get_value(): string;
    static newObject(context: SP$ClientRuntimeContext): SP$RequestVariable;
    append(value: string): void;
    set(value: string): void;
  }

  declare class SP$RoleAssignment mixins SP$ClientObject {
    get_member(): SP$Principal;
    get_principalId(): number;
    get_roleDefinitionBindings(): SP$RoleDefinitionBindingCollection;
    importRoleDefinitionBindings(
      roleDefinitionBindings: SP$RoleDefinitionBindingCollection
    ): void;
    update(): void;
    deleteObject(): void;
  }

  declare type SP$RoleAssignmentCollection = {
    itemAt(index: number): SP$RoleAssignment,
    get_item(index: number): SP$RoleAssignment,
    get_groups(): SP$GroupCollection,
    getByPrincipal(principalToFind: SP$Principal): SP$RoleAssignment,
    getByPrincipalId(principalId: number): SP$RoleAssignment,
    add(
      principal: SP$Principal,
      roleBindings: SP$RoleDefinitionBindingCollection
    ): SP$RoleAssignment
  } & SP$ClientObjectCollection<SP$RoleAssignment>;

  declare class SP$RoleDefinition mixins SP$ClientObject {
    get_basePermissions(): SP$BasePermissions;
    set_basePermissions(value: SP$BasePermissions): void;
    get_description(): string;
    set_description(value: string): void;
    get_hidden(): boolean;
    get_id(): number;
    get_name(): string;
    set_name(value: string): void;
    get_order(): number;
    set_order(value: number): void;
    get_roleTypeKind(): $Values<typeof SP$RoleType>;
    update(): void;
    deleteObject(): void;
  }

  declare class SP$RoleDefinitionBindingCollection
    mixins SP$ClientObjectCollection<SP$RoleDefinition> {
    constructor(context: SP$ClientRuntimeContext): this;
    itemAt(index: number): SP$RoleDefinition;
    get_item(index: number): SP$RoleDefinition;
    add(roleDefinition: SP$RoleDefinition): void;
    remove(roleDefinition: SP$RoleDefinition): void;
    removeAll(): void;
    static newObject(
      context: SP$ClientRuntimeContext
    ): SP$RoleDefinitionBindingCollection;
  }

  declare type SP$RoleDefinitionCollection = {
    itemAt(index: number): SP$RoleDefinition,
    get_item(index: number): SP$RoleDefinition,
    getByName(name: string): SP$RoleDefinition,
    add(parameters: SP$RoleDefinitionCreationInformation): SP$RoleDefinition,
    getById(id: number): SP$RoleDefinition,
    getByType(roleType: $Values<typeof SP$RoleType>): SP$RoleDefinition
  } & SP$ClientObjectCollection<SP$RoleDefinition>;

  declare class SP$RoleDefinitionCreationInformation
    mixins SP$ClientValueObject {
    get_basePermissions(): SP$BasePermissions;
    set_basePermissions(value: SP$BasePermissions): void;
    get_description(): string;
    set_description(value: string): void;
    get_name(): string;
    set_name(value: string): void;
    get_order(): number;
    set_order(value: number): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$RoleType: {|
    +none: 0, // 0
    +guest: 1, // 1
    +reader: 2, // 2
    +contributor: 3, // 3
    +webDesigner: 4, // 4
    +administrator: 5, // 5
    +editor: 6 // 6
  |};

  declare class SP$ServerSettings {
    static getAlternateUrls(
      context: SP$ClientRuntimeContext
    ): SP$ClientObjectList<SP$AlternateUrl>;
    static getGlobalInstalledLanguages(
      context: SP$ClientRuntimeContext,
      compatibilityLevel: number
    ): SP$Language[];
  }

  declare class SP$Site mixins SP$ClientObject {
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
    get_eventReceivers(): SP$EventReceiverDefinitionCollection;
    get_features(): SP$FeatureCollection;
    get_id(): SP$Guid;
    get_lockIssue(): string;
    get_maxItemsPerThrottledOperation(): number;
    get_owner(): SP$User;
    set_owner(value: SP$User): void;
    get_primaryUri(): string;
    get_readOnly(): boolean;
    get_recycleBin(): SP$RecycleBinItemCollection;
    get_rootWeb(): SP$Web;
    get_serverRelativeUrl(): string;
    get_shareByLinkEnabled(): boolean;
    get_showUrlStructure(): boolean;
    set_showUrlStructure(value: boolean): void;
    get_uIVersionConfigurationEnabled(): boolean;
    set_uIVersionConfigurationEnabled(value: boolean): void;
    get_upgradeInfo(): SP$UpgradeInfo;
    get_upgradeReminderDate(): Date;
    get_upgrading(): boolean;
    get_url(): string;
    get_usage(): SP$UsageInfo;
    get_userCustomActions(): SP$UserCustomActionCollection;
    updateClientObjectModelUseRemoteAPIsPermissionSetting(
      requireUseRemoteAPIs: boolean
    ): void;
    needsUpgradeByType(
      versionUpgrade: boolean,
      recursive: boolean
    ): SP$BooleanResult;
    runHealthCheck(
      ruleId: SP$Guid,
      bRepair: boolean,
      bRunAlways: boolean
    ): SP$SiteHealth$SiteHealthSummary;
    createPreviewSPSite(upgrade: boolean, sendemail: boolean): void;
    runUpgradeSiteSession(
      versionUpgrade: boolean,
      queueOnly: boolean,
      sendEmail: boolean
    ): void;
    getChanges(query: SP$ChangeQuery): SP$ChangeCollection;
    openWeb(strUrl: string): SP$Web;
    openWebById(gWebId: SP$Guid): SP$Web;
    getWebTemplates(
      LCID: number,
      overrideCompatLevel: number
    ): SP$WebTemplateCollection;
    getCustomListTemplates(web: SP$Web): SP$ListTemplateCollection;
    getCatalog(typeCatalog: number): SP$List;
    extendUpgradeReminderDate(): void;
    invalidate(): void;
  }

  declare class SP$SiteUrl mixins SP$ClientObject {}

  declare class SP$SubwebQuery mixins SP$ClientValueObject {
    get_configurationFilter(): number;
    set_configurationFilter(value: number): void;
    get_webTemplateFilter(): number;
    set_webTemplateFilter(value: number): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$TemplateFileType: {|
    +standardPage: 0, // 0
    +wikiPage: 1, // 1
    +formPage: 2 // 2
  |};

  declare class SP$ThemeInfo mixins SP$ClientObject {
    get_accessibleDescription(): string;
    get_themeBackgroundImageUri(): string;
    getThemeShadeByName(name: string): SP$StringResult;
    getThemeFontByName(name: string, lcid: number): SP$StringResult;
  }

  declare class SP$TimeZone mixins SP$ClientObject {
    get_description(): string;
    get_id(): number;
    get_information(): SP$TimeZoneInformation;
    localTimeToUTC(date: Date): SP$DateTimeResult;
    utcToLocalTime(date: Date): SP$DateTimeResult;
  }

  declare type SP$TimeZoneCollection = {
    itemAt(index: number): SP$TimeZone,
    get_item(index: number): SP$TimeZone,
    getById(id: number): SP$TimeZone
  } & SP$ClientObjectCollection<SP$TimeZone>;

  declare class SP$TimeZoneInformation mixins SP$ClientValueObject {
    get_bias(): number;
    get_daylightBias(): number;
    get_standardBias(): number;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$UpgradeInfo mixins SP$ClientValueObject {
    get_errorFile(): string;
    get_errors(): number;
    get_lastUpdated(): Date;
    get_logFile(): string;
    get_requestDate(): Date;
    get_retryCount(): number;
    get_startTime(): Date;
    get_status(): $Values<typeof SP$UpgradeStatus>;
    get_upgradeType(): $Values<typeof SP$UpgradeType>;
    get_warnings(): number;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$UpgradeStatus: {|
    +none: 0, // 0
    +inProgress: 1, // 1
    +failed: 2, // 2
    +completed: 3 // 3
  |};

  declare var SP$UpgradeType: {|
    +buildUpgrade: 0, // 0
    +versionUpgrade: 1 // 1
  |};

  declare var SP$UrlFieldFormatType: {|
    +hyperlink: 0, // 0
    +image: 1 // 1
  |};

  declare var SP$UrlZone: {|
    +defaultZone: 0, // 0
    +intranet: 1, // 1
    +internet: 2, // 2
    +custom: 3, // 3
    +extranet: 4 // 4
  |};

  declare class SP$UsageInfo mixins SP$ClientValueObject {
    get_bandwidth(): number;
    get_discussionStorage(): number;
    get_hits(): number;
    get_storage(): number;
    get_storagePercentageUsed(): number;
    get_visits(): number;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$User mixins SP$Principal {
    get_email(): string;
    set_email(value: string): void;
    get_groups(): SP$GroupCollection;
    get_isSiteAdmin(): boolean;
    set_isSiteAdmin(value: boolean): void;
    get_userId(): SP$UserIdInfo;
    update(): void;
  }

  declare type SP$UserCollection = {
    itemAt(index: number): SP$User,
    get_item(index: number): SP$User,
    getByLoginName(loginName: string): SP$User,
    getById(id: number): SP$User,
    getByEmail(emailAddress: string): SP$User,
    removeByLoginName(loginName: string): void,
    removeById(id: number): void,
    remove(user: SP$User): void,
    add(parameters: SP$UserCreationInformation): SP$User,
    addUser(user: SP$User): SP$User
  } & SP$ClientObjectCollection<SP$User>;

  declare class SP$UserCreationInformation mixins SP$ClientValueObject {
    get_email(): string;
    set_email(value: string): void;
    get_loginName(): string;
    set_loginName(value: string): void;
    get_title(): string;
    set_title(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$UserCustomAction mixins SP$ClientObject {
    get_commandUIExtension(): string;
    set_commandUIExtension(value: string): void;
    get_description(): string;
    set_description(value: string): void;
    get_group(): string;
    set_group(value: string): void;
    get_id(): SP$Guid;
    get_imageUrl(): string;
    set_imageUrl(value: string): void;
    get_location(): string;
    set_location(value: string): void;
    get_name(): string;
    set_name(value: string): void;
    get_registrationId(): string;
    set_registrationId(value: string): void;
    get_registrationType(): $Values<typeof SP$UserCustomActionRegistrationType>;
    set_registrationType(
      value: $Values<typeof SP$UserCustomActionRegistrationType>
    ): void;
    get_rights(): SP$BasePermissions;
    set_rights(value: SP$BasePermissions): void;
    get_scope(): $Values<typeof SP$UserCustomActionScope>;
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
    deleteObject(): void;
  }

  declare type SP$UserCustomActionCollection = {
    itemAt(index: number): SP$UserCustomAction,
    get_item(index: number): SP$UserCustomAction,
    getById(id: SP$Guid): SP$UserCustomAction,
    clear(): void,
    add(): SP$UserCustomAction
  } & SP$ClientObjectCollection<SP$UserCustomAction>;

  declare var SP$UserCustomActionRegistrationType: {|
    +none: 0, // 0
    +list: 1, // 1
    +contentType: 2, // 2
    +progId: 3, // 3
    +fileType: 4 // 4
  |};

  declare var SP$UserCustomActionScope: {|
    +unknown: 0, // 0
    +site: 1, // 1
    +web: 2, // 2
    +list: 3 // 3
  |};

  declare class SP$UserIdInfo mixins SP$ClientValueObject {
    get_nameId(): string;
    get_nameIdIssuer(): string;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$View mixins SP$ClientObject {
    get_aggregations(): string;
    set_aggregations(value: string): void;
    get_aggregationsStatus(): string;
    set_aggregationsStatus(value: string): void;
    get_baseViewId(): string;
    get_contentTypeId(): SP$ContentTypeId;
    set_contentTypeId(value: SP$ContentTypeId): void;
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
    get_id(): SP$Guid;
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
    get_scope(): $Values<typeof SP$ViewScope>;
    set_scope(value: $Values<typeof SP$ViewScope>): void;
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
    get_viewFields(): SP$ViewFieldCollection;
    deleteObject(): void;
    renderAsHtml(): SP$StringResult;
    update(): void;
  }

  declare type SP$ViewCollection = {
    itemAt(index: number): SP$View,
    get_item(index: number): SP$View,
    getByTitle(strTitle: string): SP$View,
    getById(guidId: SP$Guid): SP$View,
    add(parameters: SP$ViewCreationInformation): SP$View
  } & SP$ClientObjectCollection<SP$View>;

  declare class SP$ViewCreationInformation mixins SP$ClientValueObject {
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
    get_viewTypeKind(): $Values<typeof SP$ViewType>;
    set_viewTypeKind(value: $Values<typeof SP$ViewType>): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare type SP$ViewFieldCollection = {
    itemAt(index: number): string,
    get_item(index: number): string,
    get_schemaXml(): string,
    moveFieldTo(field: string, index: number): void,
    add(strField: string): void,
    remove(strField: string): void,
    removeAll(): void
  } & SP$ClientObjectCollection<string>;

  declare var SP$ViewScope: {|
    +defaultValue: 0, // 0
    +recursive: 1, // 1
    +recursiveAll: 2, // 2
    +filesOnly: 3 // 3
  |};

  declare var SP$ViewType: {|
    +none: 0, // 0
    +html: 1, // 1
    +grid: 2, // 2
    +calendar: 3, // 3
    +recurrence: 4, // 4
    +chart: 5, // 5
    +gantt: 6 // 6
  |};

  declare class SP$Web mixins SP$SecurableObject {
    get_allowDesignerForCurrentUser(): boolean;
    get_allowMasterPageEditingForCurrentUser(): boolean;
    get_allowRevertFromTemplateForCurrentUser(): boolean;
    get_allowRssFeeds(): boolean;
    get_allProperties(): SP$PropertyValues;
    get_appInstanceId(): SP$Guid;
    get_associatedMemberGroup(): SP$Group;
    set_associatedMemberGroup(value: SP$Group): void;
    get_associatedOwnerGroup(): SP$Group;
    set_associatedOwnerGroup(value: SP$Group): void;
    get_associatedVisitorGroup(): SP$Group;
    set_associatedVisitorGroup(value: SP$Group): void;
    get_availableContentTypes(): SP$ContentTypeCollection;
    get_availableFields(): SP$FieldCollection;
    get_configuration(): number;
    get_contentTypes(): SP$ContentTypeCollection;
    get_created(): Date;
    get_currentUser(): SP$User;
    get_customMasterUrl(): string;
    set_customMasterUrl(value: string): void;
    get_description(): string;
    set_description(value: string): void;
    get_documentLibraryCalloutOfficeWebAppPreviewersDisabled(): boolean;
    get_effectiveBasePermissions(): SP$BasePermissions;
    get_enableMinimalDownload(): boolean;
    set_enableMinimalDownload(value: boolean): void;
    get_eventReceivers(): SP$EventReceiverDefinitionCollection;
    get_features(): SP$FeatureCollection;
    get_fields(): SP$FieldCollection;
    get_folders(): SP$FolderCollection;
    get_id(): SP$Guid;
    get_language(): number;
    get_lastItemModifiedDate(): Date;
    get_lists(): SP$ListCollection;
    get_listTemplates(): SP$ListTemplateCollection;
    get_masterUrl(): string;
    set_masterUrl(value: string): void;
    get_navigation(): SP$Navigation;
    get_parentWeb(): SP$WebInformation;
    get_pushNotificationSubscribers(): SP$PushNotificationSubscriberCollection;
    get_quickLaunchEnabled(): boolean;
    set_quickLaunchEnabled(value: boolean): void;
    get_recycleBin(): SP$RecycleBinItemCollection;
    get_recycleBinEnabled(): boolean;
    get_regionalSettings(): SP$RegionalSettings;
    get_roleDefinitions(): SP$RoleDefinitionCollection;
    get_rootFolder(): SP$Folder;
    get_saveSiteAsTemplateEnabled(): boolean;
    set_saveSiteAsTemplateEnabled(value: boolean): void;
    get_serverRelativeUrl(): string;
    set_serverRelativeUrl(value: string): void;
    get_showUrlStructureForCurrentUser(): boolean;
    get_siteLogoUrl(): string;
    get_siteGroups(): SP$GroupCollection;
    get_siteUserInfoList(): SP$List;
    get_siteUsers(): SP$UserCollection;
    get_supportedUILanguageIds(): number[];
    get_syndicationEnabled(): boolean;
    set_syndicationEnabled(value: boolean): void;
    get_themeInfo(): SP$ThemeInfo;
    get_title(): string;
    set_title(value: string): void;
    get_treeViewEnabled(): boolean;
    set_treeViewEnabled(value: boolean): void;
    get_uIVersion(): number;
    set_uIVersion(value: number): void;
    get_uIVersionConfigurationEnabled(): boolean;
    set_uIVersionConfigurationEnabled(value: boolean): void;
    get_url(): string;
    get_userCustomActions(): SP$UserCustomActionCollection;
    get_webs(): SP$WebCollection;
    get_webTemplate(): string;
    get_workflowAssociations(): SP$Workflow$WorkflowAssociationCollection;
    get_workflowTemplates(): SP$Workflow$WorkflowTemplateCollection;
    doesUserHavePermissions(
      permissionMask: SP$BasePermissions
    ): SP$BooleanResult;
    getUserEffectivePermissions(userName: string): SP$BasePermissions;
    mapToIcon(
      fileName: string,
      progId: string,
      size: $Values<typeof SP$Utilities$IconSize>
    ): SP$StringResult;
    registerPushNotificationSubscriber(
      deviceAppInstanceId: SP$Guid,
      serviceToken: string
    ): SP$PushNotificationSubscriber;
    unregisterPushNotificationSubscriber(deviceAppInstanceId: SP$Guid): void;
    getPushNotificationSubscribersByArgs(
      customArgs: string
    ): SP$PushNotificationSubscriberCollection;
    getPushNotificationSubscribersByUser(
      userName: string
    ): SP$PushNotificationSubscriberCollection;
    doesPushNotificationSubscriberExist(
      deviceAppInstanceId: SP$Guid
    ): SP$BooleanResult;
    getPushNotificationSubscriber(
      deviceAppInstanceId: SP$Guid
    ): SP$PushNotificationSubscriber;
    getUserById(userId: number): SP$User;
    getAvailableWebTemplates(
      lcid: number,
      doIncludeCrossLanguage: boolean
    ): SP$WebTemplateCollection;
    getCatalog(typeCatalog: number): SP$List;
    getChanges(query: SP$ChangeQuery): SP$ChangeCollection;
    applyWebTemplate(webTemplate: string): void;
    deleteObject(): void;
    update(): void;
    getFileByServerRelativeUrl(serverRelativeUrl: string): SP$File;
    getFolderByServerRelativeUrl(serverRelativeUrl: string): SP$Folder;
    getEntity(namespace: string, name: string): SP$BusinessData$Entity;
    getAppBdcCatalogForAppInstance(
      appInstanceId: SP$Guid
    ): SP$BusinessData$AppBdcCatalog;
    getAppBdcCatalog(): SP$BusinessData$AppBdcCatalog;
    getSubwebsForCurrentUser(query: SP$SubwebQuery): SP$WebCollection;
    getAppInstanceById(appInstanceId: SP$Guid): SP$AppInstance;
    getAppInstancesByProductId(
      productId: SP$Guid
    ): SP$ClientObjectList<SP$AppInstance>;
    loadAndInstallAppInSpecifiedLocale(
      appPackageStream: SP$Base64EncodedByteArray,
      installationLocaleLCID: number
    ): SP$AppInstance;
    loadApp(
      appPackageStream: SP$Base64EncodedByteArray,
      installationLocaleLCID: number
    ): SP$AppInstance;
    loadAndInstallApp(
      appPackageStream: SP$Base64EncodedByteArray
    ): SP$AppInstance;
    ensureUser(logonName: string): SP$User;
    applyTheme(
      colorPaletteUrl: string,
      fontSchemeUrl: string,
      backgroundImageUrl: string,
      shareGenerated: boolean
    ): void;

    /**
     * Available after March 2015 CU for SharePoint 2013
     */
    getList(url: string): SP$List;
  }

  declare type SP$WebCollection = {
    itemAt(index: number): SP$Web,
    get_item(index: number): SP$Web,
    add(parameters: SP$WebCreationInformation): SP$Web
  } & SP$ClientObjectCollection<SP$Web>;

  declare class SP$WebCreationInformation mixins SP$ClientValueObject {
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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$WebInformation mixins SP$ClientObject {
    get_configuration(): number;
    get_created(): Date;
    get_description(): string;
    get_id(): SP$Guid;
    get_language(): number;
    get_lastItemModifiedDate(): Date;
    get_serverRelativeUrl(): string;
    get_title(): string;
    get_webTemplate(): string;
    get_webTemplateId(): number;
  }

  declare class SP$WebProxy {
    static invoke(
      context: SP$ClientRuntimeContext,
      requestInfo: SP$WebRequestInfo
    ): SP$WebResponseInfo;
  }

  declare class SP$WebRequestInfo mixins SP$ClientValueObject {
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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$WebResponseInfo mixins SP$ClientValueObject {
    get_body(): string;
    set_body(value: string): void;
    get_headers(): any;
    set_headers(value: any): void;
    get_statusCode(): number;
    set_statusCode(value: number): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$WebTemplate mixins SP$ClientObject {
    get_description(): string;
    get_displayCategory(): string;
    get_id(): number;
    get_imageUrl(): string;
    get_isHidden(): boolean;
    get_isRootWebOnly(): boolean;
    get_isSubWebOnly(): boolean;
    get_lcid(): number;
    get_name(): string;
    get_title(): string;
  }

  declare type SP$WebTemplateCollection = {
    itemAt(index: number): SP$WebTemplate,
    get_item(index: number): SP$WebTemplate,
    getByName(name: string): SP$WebTemplate
  } & SP$ClientObjectCollection<SP$WebTemplate>;

  declare var npm$namespace$SP$Application: {
    UI: typeof npm$namespace$SP$Application$UI
  };

  declare var npm$namespace$SP$Application$UI: {
    FormsInfo: typeof SP$Application$UI$FormsInfo,
    DefaultFormsInformation: typeof SP$Application$UI$DefaultFormsInformation,
    DefaultFormsMenuBuilder: typeof SP$Application$UI$DefaultFormsMenuBuilder,
    ViewSelectorMenuOptions: typeof SP$Application$UI$ViewSelectorMenuOptions,
    ViewSelectorGroups: typeof SP$Application$UI$ViewSelectorGroups,
    ViewSelectorMenuItem: typeof SP$Application$UI$ViewSelectorMenuItem,
    ViewSelectorSubMenu: typeof SP$Application$UI$ViewSelectorSubMenu,
    ViewSelectorMenuBuilder: typeof SP$Application$UI$ViewSelectorMenuBuilder,
    MoreColorsPicker: typeof SP$Application$UI$MoreColorsPicker,
    MoreColorsPage: typeof SP$Application$UI$MoreColorsPage,
    ThemeWebPage: typeof SP$Application$UI$ThemeWebPage,
    WikiPageNameInPlaceEditor: typeof SP$Application$UI$WikiPageNameInPlaceEditor
  };
  declare interface SP$Application$UI$DefaultFormsInformationRequestor {
    onDefaultFormsInformationRetrieveSuccess(
      defaultForms: SP$Application$UI$DefaultFormsInformation
    ): void;
    onDefaultFormsInformationRetrieveFailure(): void;
  }

  declare class SP$Application$UI$FormsInfo {
    ContentTypeName: string;
    NewFormUrl: string;
    DisplayFormUrl: string;
    EditFormUrl: string;
    constructor(): this;
  }

  declare class SP$Application$UI$DefaultFormsInformation {
    DefaultForms: SP$Application$UI$FormsInfo;
    OtherForms: any;
    constructor(): this;
  }

  declare class SP$Application$UI$DefaultFormsMenuBuilder {
    static getDefaultFormsInformation(
      requestor: SP$Application$UI$DefaultFormsInformationRequestor,
      listId: SP$Guid
    ): void;
  }

  declare class SP$Application$UI$ViewSelectorMenuOptions {
    showRepairView: boolean;
    showMergeView: boolean;
    showEditView: boolean;
    showCreateView: boolean;
    showApproverView: boolean;
    listId: string;
    viewId: string;
    viewParameters: string;
    constructor(): this;
  }

  declare interface SP$Application$UI$ViewInformationRequestor {
    onViewInformationReturned(
      viewGroups: SP$Application$UI$ViewSelectorGroups
    ): void;
  }

  declare class SP$Application$UI$ViewSelectorGroups {
    ModeratedViews: any;
    PublicViews: any;
    PersonalViews: any;
    OtherViews: any;
    DefaultView: SP$Application$UI$ViewSelectorMenuItem;
    ViewCreation: any;
    constructor(): this;
  }

  declare class SP$Application$UI$ViewSelectorMenuItem {
    Text: string;
    ActionScriptText: string;
    NavigateUrl: string;
    ImageSourceUrl: string;
    Description: string;
    Id: string;
    Sequence: number;
    ItemType: string;
    GroupId: number;
    constructor(): this;
  }

  declare class SP$Application$UI$ViewSelectorSubMenu {
    Text: string;
    ImageSourceUrl: string;
    SubMenuItems: any;
    constructor(): this;
  }

  declare class SP$Application$UI$ViewSelectorMenuBuilder {
    static get_filterMenuItemsCallback(): (menuItems: any) => any;
    static set_filterMenuItemsCallback(value: (menuItems: any) => any): void;
    static showMenu(
      elem: HTMLElement,
      options: SP$Application$UI$ViewSelectorMenuOptions
    ): void;
    static getViewInformation(
      requestor: SP$Application$UI$ViewInformationRequestor,
      options: SP$Application$UI$ViewSelectorMenuOptions
    ): void;
  }

  declare class SP$Application$UI$MoreColorsPicker mixins Sys.UI.Control {
    constructor(e: HTMLElement): this;
    initialize(): void;
    dispose(): void;
    get_colorValue(): string;
    set_colorValue(value: string): void;
  }

  declare class SP$Application$UI$MoreColorsPage mixins Sys.UI.Control {
    constructor(e: HTMLElement): this;
    initialize(): void;
    dispose(): void;
    get_moreColorsPicker(): SP$Application$UI$MoreColorsPicker;
    set_moreColorsPicker(value: SP$Application$UI$MoreColorsPicker): void;
  }

  declare class SP$Application$UI$ThemeWebPage mixins Sys.UI.Control {
    add_themeDisplayUpdated(
      value: (sender: any, e: Sys.EventArgs) => void
    ): void;
    remove_themeDisplayUpdated(
      value: (sender: any, e: Sys.EventArgs) => void
    ): void;
    constructor(e: HTMLElement): this;
    initialize(): void;
    dispose(): void;
    onThemeSelectionChanged(evt: Sys.UI.DomEvent): void;
    updateThemeDisplay(): void;
    get_thmxThemes(): any;
    set_thmxThemes(value: any): void;
  }

  declare class SP$Application$UI$WikiPageNameInPlaceEditor {
    constructor(
      ownerDoc: any,
      displayElemId: string,
      editElemId: string,
      editTextBoxId: string
    ): this;
    editingPageCallback(): void;
    savingPageCallback(): void;
  }

  declare var npm$namespace$SP$Analytics: {
    EventTypeId: typeof SP$Analytics$EventTypeId,
    AnalyticsUsageEntry: typeof SP$Analytics$AnalyticsUsageEntry
  };
  declare class SP$Analytics$AnalyticsUsageEntry mixins SP$ClientObject {
    static logAnalyticsEvent(
      context: SP$ClientRuntimeContext,
      eventTypeId: number,
      itemId: string
    ): void;
    static logAnalyticsEvent2(
      context: SP$ClientRuntimeContext,
      eventTypeId: number,
      itemId: string,
      rollupScopeId: SP$Guid,
      siteId: SP$Guid,
      userId: string
    ): void;
    static logAnalyticsAppEvent(
      context: SP$ClientRuntimeContext,
      appEventTypeId: SP$Guid,
      itemId: string
    ): void;
    static logAnalyticsAppEvent2(
      context: SP$ClientRuntimeContext,
      appEventTypeId: SP$Guid,
      itemId: string,
      rollupScopeId: SP$Guid,
      siteId: SP$Guid,
      userId: string
    ): void;
  }

  declare var SP$Analytics$EventTypeId: {|
    +none: 0, // 0
    +first: 1, // 1
    +view: 2, // 2
    +recommendationView: 3, // 3
    +recommendationClick: 4, // 4
    +last: 5 // 5
  |};

  declare var npm$namespace$SP$SiteHealth: {
    SiteHealthStatusType: typeof SP$SiteHealth$SiteHealthStatusType,
    SiteHealthResult: typeof SP$SiteHealth$SiteHealthResult,
    SiteHealthSummary: typeof SP$SiteHealth$SiteHealthSummary
  };
  declare class SP$SiteHealth$SiteHealthResult mixins SP$ClientValueObject {
    get_messageAsText(): string;
    get_ruleHelpLink(): string;
    get_ruleId(): SP$Guid;
    get_ruleIsRepairable(): boolean;
    get_ruleName(): string;
    get_status(): $Values<typeof SP$SiteHealth$SiteHealthStatusType>;
    set_status(value: $Values<typeof SP$SiteHealth$SiteHealthStatusType>): void;
    get_timeStamp(): Date;
    set_timeStamp(value: Date): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$SiteHealth$SiteHealthStatusType: {|
    +passed: 0, // 0
    +failedWarning: 1, // 1
    +failedError: 2 // 2
  |};

  declare class SP$SiteHealth$SiteHealthSummary mixins SP$ClientObject {
    get_failedErrorCount(): number;
    get_failedWarningCount(): number;
    get_passedCount(): number;
    get_results(): SP$SiteHealth$SiteHealthResult[];
  }

  declare var npm$namespace$SP$BusinessData: {
    AppBdcCatalog: typeof SP$BusinessData$AppBdcCatalog,
    Entity: typeof SP$BusinessData$Entity,
    EntityField: typeof SP$BusinessData$EntityField,
    EntityIdentifier: typeof SP$BusinessData$EntityIdentifier,
    EntityView: typeof SP$BusinessData$EntityView,
    Filter: typeof SP$BusinessData$Filter,
    LobSystem: typeof SP$BusinessData$LobSystem,
    LobSystemInstance: typeof SP$BusinessData$LobSystemInstance,
    MethodExecutionResult: typeof SP$BusinessData$MethodExecutionResult,
    TypeDescriptor: typeof SP$BusinessData$TypeDescriptor,
    Infrastructure: typeof npm$namespace$SP$BusinessData$Infrastructure,
    Runtime: typeof npm$namespace$SP$BusinessData$Runtime
  };
  declare class SP$BusinessData$AppBdcCatalog mixins SP$ClientObject {
    getEntity(namespace: string, name: string): SP$BusinessData$Entity;
    getLobSystemProperty(
      lobSystemName: string,
      propertyName: string
    ): SP$StringResult;
    setLobSystemProperty(
      lobSystemName: string,
      propertyName: string,
      propertyValue: string
    ): void;
    getLobSystemInstanceProperty(
      lobSystemName: string,
      lobSystemInstanceName: string,
      propertyName: string
    ): SP$StringResult;
    setLobSystemInstanceProperty(
      lobSystemName: string,
      lobSystemInstanceName: string,
      propertyName: string,
      propertyValue: string
    ): void;
    getConnectionId(
      lobSystemName: string,
      lobSystemInstanceName: string
    ): SP$StringResult;
    setConnectionId(
      lobSystemName: string,
      lobSystemInstanceName: string,
      connectionId: string
    ): void;
    getPermissibleConnections(): string[];
  }

  declare class SP$BusinessData$Entity mixins SP$ClientObject {
    get_estimatedInstanceCount(): number;
    get_name(): string;
    get_namespace(): string;
    getIdentifiers(): SP$BusinessData$Collections$EntityIdentifierCollection;
    getIdentifierCount(): SP$IntResult;
    getLobSystem(): SP$BusinessData$LobSystem;
    getCreatorView(methodInstanceName: string): SP$BusinessData$EntityView;
    getUpdaterView(updaterName: string): SP$BusinessData$EntityView;
    getFinderView(methodInstanceName: string): SP$BusinessData$EntityView;
    getSpecificFinderView(
      specificFinderName: string
    ): SP$BusinessData$EntityView;
    getDefaultSpecificFinderView(): SP$BusinessData$EntityView;
    findSpecificDefault(
      identity: SP$BusinessData$Runtime$EntityIdentity,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): SP$BusinessData$Runtime$EntityInstance;
    findSpecific(
      identity: SP$BusinessData$Runtime$EntityIdentity,
      specificFinderName: string,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): SP$BusinessData$Runtime$EntityInstance;
    findSpecificDefaultByBdcId(
      bdcIdentity: string,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): SP$BusinessData$Runtime$EntityInstance;
    findSpecificByBdcId(
      bdcIdentity: string,
      specificFinderName: string,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): SP$BusinessData$Runtime$EntityInstance;
    findFiltered(
      filterList: SP$BusinessData$Collections$FilterCollection,
      nameOfFinder: string,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): SP$BusinessData$Collections$EntityInstanceCollection;
    findAssociated(
      entityInstance: SP$BusinessData$Runtime$EntityInstance,
      associationName: string,
      filterList: SP$BusinessData$Collections$FilterCollection,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): SP$BusinessData$Collections$EntityInstanceCollection;
    getFilters(
      methodInstanceName: string
    ): SP$BusinessData$Collections$FilterCollection;
    execute(
      methodInstanceName: string,
      lobSystemInstance: SP$BusinessData$LobSystemInstance,
      inputParams: any[]
    ): SP$BusinessData$MethodExecutionResult;
    getAssociationView(associationName: string): SP$BusinessData$EntityView;
    create(
      fieldValues: SP$BusinessData$Runtime$EntityFieldValueDictionary,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): SP$BusinessData$Runtime$EntityIdentity;
    subscribe(
      eventType: $Values<typeof SP$BusinessData$Runtime$EntityEventType>,
      notificationCallback: SP$BusinessData$Runtime$NotificationCallback,
      onBehalfOfUser: string,
      subscriberName: string,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): SP$BusinessData$Runtime$Subscription;
    unsubscribe(
      subscription: SP$BusinessData$Runtime$Subscription,
      onBehalfOfUser: string,
      unsubscriberName: string,
      lobSystemInstance: SP$BusinessData$LobSystemInstance
    ): void;
  }

  declare class SP$BusinessData$EntityField mixins SP$ClientObject {
    get_containsLocalizedDisplayName(): boolean;
    get_defaultDisplayName(): string;
    get_localizedDisplayName(): string;
    get_name(): string;
  }

  declare class SP$BusinessData$EntityIdentifier mixins SP$ClientObject {
    get_identifierType(): string;
    get_name(): string;
    getDefaultDisplayName(): SP$StringResult;
    containsLocalizedDisplayName(): SP$BooleanResult;
    getLocalizedDisplayName(): SP$StringResult;
  }

  declare class SP$BusinessData$EntityView mixins SP$ClientObject {
    get_fields(): SP$BusinessData$Collections$EntityFieldCollection;
    get_name(): string;
    get_relatedSpecificFinderName(): string;
    getDefaultValues(): SP$BusinessData$Runtime$EntityFieldValueDictionary;
    getXmlSchema(): SP$StringResult;
    getTypeDescriptor(fieldDotNotation: string): SP$BusinessData$TypeDescriptor;
    getType(fieldDotNotation: string): SP$StringResult;
  }

  declare class SP$BusinessData$Filter mixins SP$ClientObject {
    get_defaultDisplayName(): string;
    get_filterField(): string;
    get_filterType(): string;
    get_localizedDisplayName(): string;
    get_name(): string;
    get_valueCount(): number;
  }

  declare class SP$BusinessData$LobSystem mixins SP$ClientObject {
    get_name(): string;
    getLobSystemInstances(): SP$BusinessData$Collections$LobSystemInstanceCollection;
  }

  declare class SP$BusinessData$LobSystemInstance mixins SP$ClientObject {
    get_name(): string;
  }

  declare class SP$BusinessData$MethodExecutionResult mixins SP$ClientObject {
    get_returnParameterCollection(): SP$BusinessData$ReturnParameterCollection;
  }

  declare type SP$BusinessData$ReturnParameterCollection = {
    itemAt(index: number): SP$BusinessData$Runtime$EntityFieldValueDictionary,
    get_item(index: number): SP$BusinessData$Runtime$EntityFieldValueDictionary
  } & SP$ClientObjectCollection<SP$BusinessData$Runtime$EntityFieldValueDictionary>;

  declare class SP$BusinessData$TypeDescriptor mixins SP$ClientObject {
    get_containsReadOnly(): boolean;
    get_isCollection(): boolean;
    get_isReadOnly(): boolean;
    get_name(): string;
    get_typeName(): string;
    containsLocalizedDisplayName(): SP$BooleanResult;
    getLocalizedDisplayName(): SP$StringResult;
    getDefaultDisplayName(): SP$StringResult;
    isRoot(): SP$BooleanResult;
    isLeaf(): SP$BooleanResult;
    getChildTypeDescriptors(): SP$BusinessData$Collections$TypeDescriptorCollection;
    getParentTypeDescriptor(): SP$BusinessData$TypeDescriptor;
  }

  declare type SP$BusinessData$Collections$EntityFieldCollection = {
    itemAt(index: number): SP$BusinessData$EntityField,
    get_item(index: number): SP$BusinessData$EntityField
  } & SP$ClientObjectCollection<SP$BusinessData$EntityField>;

  declare type SP$BusinessData$Collections$EntityIdentifierCollection = {
    itemAt(index: number): SP$BusinessData$EntityIdentifier,
    get_item(index: number): SP$BusinessData$EntityIdentifier
  } & SP$ClientObjectCollection<SP$BusinessData$EntityIdentifier>;

  declare type SP$BusinessData$Collections$EntityInstanceCollection = {
    itemAt(index: number): SP$BusinessData$Runtime$EntityInstance,
    get_item(index: number): SP$BusinessData$Runtime$EntityInstance
  } & SP$ClientObjectCollection<SP$BusinessData$Runtime$EntityInstance>;

  declare type SP$BusinessData$Collections$FilterCollection = {
    itemAt(index: number): SP$BusinessData$Filter,
    get_item(index: number): SP$BusinessData$Filter,
    setFilterValue(
      inputFilterName: string,
      valueIndex: number,
      value: any
    ): void
  } & SP$ClientObjectCollection<SP$BusinessData$Filter>;

  declare type SP$BusinessData$Collections$LobSystemInstanceCollection = {
    itemAt(index: number): SP$BusinessData$LobSystemInstance,
    get_item(index: number): SP$BusinessData$LobSystemInstance
  } & SP$ClientObjectCollection<SP$BusinessData$LobSystemInstance>;

  declare type SP$BusinessData$Collections$TypeDescriptorCollection = {
    itemAt(index: number): SP$BusinessData$TypeDescriptor,
    get_item(index: number): SP$BusinessData$TypeDescriptor
  } & SP$ClientObjectCollection<SP$BusinessData$TypeDescriptor>;

  declare var npm$namespace$SP$BusinessData$Infrastructure: {
    ExternalSubscriptionStore: typeof SP$BusinessData$Infrastructure$ExternalSubscriptionStore
  };
  declare class SP$BusinessData$Infrastructure$ExternalSubscriptionStore
    mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext, web: SP$Web): this;
    static newObject(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$BusinessData$Infrastructure$ExternalSubscriptionStore;
    indexStore(): void;
  }

  declare var npm$namespace$SP$BusinessData$Runtime: {
    EntityEventType: typeof SP$BusinessData$Runtime$EntityEventType,
    EntityFieldValueDictionary: typeof SP$BusinessData$Runtime$EntityFieldValueDictionary,
    EntityIdentity: typeof SP$BusinessData$Runtime$EntityIdentity,
    EntityInstance: typeof SP$BusinessData$Runtime$EntityInstance,
    NotificationCallback: typeof SP$BusinessData$Runtime$NotificationCallback,
    Subscription: typeof SP$BusinessData$Runtime$Subscription
  };

  declare var SP$BusinessData$Runtime$EntityEventType: {|
    +none: 0, // 0
    +itemAdded: 1, // 1
    +itemUpdated: 2, // 2
    +itemDeleted: 3 // 3
  |};

  declare class SP$BusinessData$Runtime$EntityFieldValueDictionary
    mixins SP$ClientObject {
    get_fieldValues(): any;
    get_item(fieldName: string): any;
    set_item(fieldName: string, value: any): void;
    refreshLoad(): void;
    fromXml(xml: string): void;
    toXml(): SP$StringResult;
    createInstance(
      fieldInstanceDotNotation: string,
      fieldDotNotation: string
    ): void;
    createCollectionInstance(fieldDotNotation: string, size: number): void;
    getCollectionSize(fieldDotNotation: string): SP$IntResult;
  }

  declare class SP$BusinessData$Runtime$EntityIdentity mixins SP$ClientObject {
    get_fieldValues(): any;
    get_item(fieldName: string): any;
    constructor(
      context: SP$ClientRuntimeContext,
      identifierValues: any[]
    ): this;
    get_identifierCount(): number;
    static newObject(
      context: SP$ClientRuntimeContext,
      identifierValues: any[]
    ): SP$BusinessData$Runtime$EntityIdentity;
    refreshLoad(): void;
  }

  declare class SP$BusinessData$Runtime$EntityInstance mixins SP$ClientObject {
    get_fieldValues(): any;
    get_item(fieldName: string): any;
    set_item(fieldName: string, value: any): void;
    refreshLoad(): void;
    createInstance(
      fieldInstanceDotNotation: string,
      fieldDotNotation: string
    ): void;
    createCollectionInstance(fieldDotNotation: string, size: number): void;
    getIdentity(): SP$BusinessData$Runtime$EntityIdentity;
    deleteObject(): void;
    update(): void;
    fromXml(xml: string): void;
    toXml(): SP$StringResult;
  }

  declare class SP$BusinessData$Runtime$NotificationCallback
    mixins SP$ClientObject {
    constructor(
      context: SP$ClientRuntimeContext,
      notificationEndpoint: string
    ): this;
    get_notificationContext(): string;
    set_notificationContext(value: string): void;
    get_notificationEndpoint(): string;
    get_notificationForwarderType(): string;
    set_notificationForwarderType(value: string): void;
    static newObject(
      context: SP$ClientRuntimeContext,
      notificationEndpoint: string
    ): SP$BusinessData$Runtime$NotificationCallback;
  }

  declare class SP$BusinessData$Runtime$Subscription mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext, id: any, hash: string): this;
    get_hash(): string;
    get_iD(): any;
    static newObject(
      context: SP$ClientRuntimeContext,
      id: any,
      hash: string
    ): SP$BusinessData$Runtime$Subscription;
  }

  declare var npm$namespace$SP$Sharing: {
    Role: typeof SP$Sharing$Role,
    DocumentSharingManager: typeof SP$Sharing$DocumentSharingManager,
    UserRoleAssignment: typeof SP$Sharing$UserRoleAssignment,
    UserSharingResult: typeof SP$Sharing$UserSharingResult
  };
  declare class SP$Sharing$DocumentSharingManager {
    static getRoleDefinition(
      context: SP$ClientRuntimeContext,
      role: $Values<typeof SP$Sharing$Role>
    ): SP$RoleDefinition;
    static isDocumentSharingEnabled(
      context: SP$ClientRuntimeContext,
      list: SP$List
    ): SP$BooleanResult;
    static updateDocumentSharingInfo(
      context: SP$ClientRuntimeContext,
      resourceAddress: string,
      userRoleAssignments: SP$Sharing$UserRoleAssignment[],
      validateExistingPermissions: boolean,
      additiveMode: boolean,
      sendServerManagedNotification: boolean,
      customMessage: string,
      includeAnonymousLinksInNotification: boolean
    ): SP$Sharing$UserSharingResult[];
  }

  declare var SP$Sharing$Role: {|
    +none: 0, // 0
    +view: 1, // 1
    +edit: 2, // 2
    +owner: 3 // 3
  |};

  declare class SP$Sharing$UserRoleAssignment mixins SP$ClientValueObject {
    get_role(): $Values<typeof SP$Sharing$Role>;
    set_role(value: $Values<typeof SP$Sharing$Role>): void;
    get_userId(): string;
    set_userId(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$Sharing$UserSharingResult mixins SP$ClientValueObject {
    get_allowedRoles(): $Values<typeof SP$Sharing$Role>[];
    get_currentRole(): $Values<typeof SP$Sharing$Role>;
    get_isUserKnown(): boolean;
    get_message(): string;
    get_status(): boolean;
    get_user(): string;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var npm$namespace$SP$Social: {
    SocialActorType: typeof SP$Social$SocialActorType,
    SocialActorTypes: typeof SP$Social$SocialActorTypes,
    SocialAttachmentActionKind: typeof SP$Social$SocialAttachmentActionKind,
    SocialAttachmentKind: typeof SP$Social$SocialAttachmentKind,
    SocialDataItemType: typeof SP$Social$SocialDataItemType,
    SocialDataOverlayType: typeof SP$Social$SocialDataOverlayType,
    SocialFeedSortOrder: typeof SP$Social$SocialFeedSortOrder,
    SocialFeedType: typeof SP$Social$SocialFeedType,
    SocialFeedAttributes: typeof SP$Social$SocialFeedAttributes,
    SocialPostAttributes: typeof SP$Social$SocialPostAttributes,
    SocialPostDefinitionDataItemType: typeof SP$Social$SocialPostDefinitionDataItemType,
    SocialPostType: typeof SP$Social$SocialPostType,
    SocialStatusCode: typeof SP$Social$SocialStatusCode,
    SocialThreadAttributes: typeof SP$Social$SocialThreadAttributes,
    SocialThreadType: typeof SP$Social$SocialThreadType,
    SocialActor: typeof SP$Social$SocialActor,
    SocialActorInfo: typeof SP$Social$SocialActorInfo,
    SocialAttachment: typeof SP$Social$SocialAttachment,
    SocialAttachmentAction: typeof SP$Social$SocialAttachmentAction,
    SocialDataItem: typeof SP$Social$SocialDataItem,
    SocialDataOverlay: typeof SP$Social$SocialDataOverlay,
    SocialExceptionDetails: typeof SP$Social$SocialExceptionDetails,
    SocialFeed: typeof SP$Social$SocialFeed,
    SocialFeedManager: typeof SP$Social$SocialFeedManager,
    SocialFeedOptions: typeof SP$Social$SocialFeedOptions,
    SocialFollowingManager: typeof SP$Social$SocialFollowingManager,
    SocialLink: typeof SP$Social$SocialLink,
    SocialPost: typeof SP$Social$SocialPost,
    SocialPostActorInfo: typeof SP$Social$SocialPostActorInfo,
    SocialPostCreationData: typeof SP$Social$SocialPostCreationData,
    SocialPostDefinitionData: typeof SP$Social$SocialPostDefinitionData,
    SocialPostDefinitionDataItem: typeof SP$Social$SocialPostDefinitionDataItem,
    SocialPostReference: typeof SP$Social$SocialPostReference,
    SocialThread: typeof SP$Social$SocialThread
  };

  /**
   * Identifies an actor as a user, document, site, or tag.
   */

  declare var SP$Social$SocialActorType: {|
    +user: 0, // 0
    +document: 1, // 1
    +site: 2, // 2
    +tag: 3 // 3
  |};

  /**
   * Specifies one or more actor types in a query to the server.
   */

  declare var SP$Social$SocialActorTypes: {|
    +none: 0, // 0
    +users: 1, // 1
    +documents: 2, // 2
    +sites: 3, // 3
    +tags: 4, // 4
    +excludeContentWithoutFeeds: 5, // 5
    +all: 6 // 6
  |};

  /**
   * Specifies whether the action is to navigate to the attachment or to perform some action dependent on the context in which the attachment is presented to the user.
   */

  declare var SP$Social$SocialAttachmentActionKind: {|
    +navigate: 0, // 0
    +adHocAction: 1 // 1
  |};

  declare var SP$Social$SocialAttachmentKind: {|
    +image: 0, // 0
    +video: 1, // 1
    +document: 2 // 2
  |};

  /**
   * Specifies whether the item being inserted is a user, document, site, tag, or link.
   */

  declare var SP$Social$SocialDataItemType: {|
    +user: 0, // 0
    +document: 1, // 1
    +site: 2, // 2
    +tag: 3, // 3
    +link: 4 // 4
  |};

  /**
   * Specifies whether the overlay is a link or one or more actors.
   */

  declare var SP$Social$SocialDataOverlayType: {|
    +link: 0, // 0
    +actors: 1 // 1
  |};

  /**
   * Specifies whether the sort order is by creation time or modification time.
   */

  declare var SP$Social$SocialFeedSortOrder: {|
    +byModifiedTime: 0, // 0
    +byCreatedTime: 1 // 1
  |};

  /**
   * Identifies the kind of post to be retrieved.
   */

  declare var SP$Social$SocialFeedType: {|
    +personal: 0, // 0
    +news: 1, // 1
    +timeline: 2, // 2
    +likes: 3, // 3
    +everyone: 4 // 4
  |};

  /**
   * Provides information about the feed.
   * This type provides information about whether the feed on the server contains additional threads that were not returned.
   */

  declare var SP$Social$SocialFeedAttributes: {|
    +none: 0, // 0
    +moreThreadsAvailable: 1 // 1
  |};

  /**
   * Specifies attributes of the post, such as whether the current user can like or delete the post.
   */

  declare var SP$Social$SocialPostAttributes: {|
    +none: 0, // 0
    +canLike: 1, // 1
    +canDelete: 2, // 2
    +useAuthorImage: 3, // 3
    +useSmallImage: 4, // 4
    +canFollowUp: 5 // 5
  |};

  /**
   * Defines the type of item being specified in the SocialPostDefinitionDataItem.
   * This type is only available in server-to-server calls.
   */

  declare var SP$Social$SocialPostDefinitionDataItemType: {|
    +text: 0, // 0
    +user: 1, // 1
    +document: 2, // 2
    +site: 3, // 3
    +tag: 4, // 4
    +link: 5 // 5
  |};

  declare var SP$Social$SocialPostType: {|
    +root: 0, // 0
    +reply: 1 // 1
  |};

  /**
   * Specifies a status or error code.
   */

  declare var SP$Social$SocialStatusCode: {|
    +OK: 0, // 0
    +invalidRequest: 1, // 1
    +accessDenied: 2, // 2
    +itemNotFound: 3, // 3
    +invalidOperation: 4, // 4
    +itemNotModified: 5, // 5
    +internalError: 6, // 6
    +cacheReadError: 7, // 7
    +cacheUpdateError: 8, // 8
    +personalSiteNotFound: 9, // 9
    +failedToCreatePersonalSite: 10, // 10
    +notAuthorizedToCreatePersonalSite: 11, // 11
    +cannotCreatePersonalSite: 12, // 12
    +limitReached: 13, // 13
    +attachmentError: 14, // 14
    +partialData: 15, // 15
    +featureDisabled: 16 // 16
  |};

  /**
   * Specifies properties of the thread.
   */

  declare var SP$Social$SocialThreadAttributes: {|
    +none: 0, // 0
    +isDigest: 1, // 1
    +canReply: 2, // 2
    +canLock: 3, // 3
    +isLocked: 4, // 4
    +replyLimitReached: 5 // 5
  |};

  declare var SP$Social$SocialThreadType: {|
    +normal: 0, // 0
    +likeReference: 1, // 1
    +replyReference: 2, // 2
    +mentionReference: 3, // 3
    +tagReference: 4 // 4
  |};

  /**
   * Contains information about an actor retrieved from server. An actor is a user, document, site, or tag.
   */
  declare class SP$Social$SocialActor mixins SP$ClientValueObject {
    /**
     * The AccountName property returns the user account name.
     * This property is only available for social actors of type "user".
     */
    get_accountName(): string;

    /**
     * Identifies whether the actor is a user, document, site, or tag.
     */
    get_actorType(): $Values<typeof SP$Social$SocialActorType>;

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
    get_status(): $Values<typeof SP$Social$SocialStatusCode>;

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
    get_uri(): string;
  }

  /**
   * Identifies an actor to the server. An actor can be a user, document, site, or tag.
   */
  declare class SP$Social$SocialActorInfo mixins SP$ClientValueObject {
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
    get_actorType(): $Values<typeof SP$Social$SocialActorType>;

    /**
     * Identifies whether the actor is a user, document, site, or tag.
     */
    set_actorType(
      value: $Values<typeof SP$Social$SocialActorType>
    ): $Values<typeof SP$Social$SocialActorType>;

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
    set_tagGuid(value: string): string;
  }

  /**
   * Represents an image, document preview, or video preview attachment.
   */
  declare class SP$Social$SocialAttachment mixins SP$ClientValueObject {
    /**
     * Specifies the type of object that the attachment contains.
     */
    get_attachmentKind(): $Values<typeof SP$Social$SocialAttachmentKind>;

    /**
     * Specifies the type of object that the attachment contains.
     */
    set_attachmentKind(
      value: $Values<typeof SP$Social$SocialAttachmentKind>
    ): $Values<typeof SP$Social$SocialAttachmentKind>;

    /**
     * Specifies the action to take when the user selects the attachment.
     * This property is only present if the AttachmentKind is Video.
     */
    get_clickAction(): Social$SocialAttachmentAction;

    /**
     * Specifies the action to take when the user selects the attachment.
     * This property is only present if the AttachmentKind is Video.
     */
    set_clickAction(
      value: Social$SocialAttachmentAction
    ): Social$SocialAttachmentAction;

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
    set_width(value: number): number;
  }

  /**
   * Specifies the user actions that are allowed for the attachment object.
   */
  declare class SP$Social$SocialAttachmentAction mixins SP$ClientValueObject {
    /**
     * Specifies whether the action is to navigate to a URI or an action that is dependent on the context in which the object is presented to the user.
     */
    get_actionKind(): $Values<typeof SP$Social$SocialAttachmentActionKind>;

    /**
     * Specifies whether the action is to navigate to a URI or an action that is dependent on the context in which the object is presented to the user.
     */
    set_actionKind(
      value: $Values<typeof SP$Social$SocialAttachmentActionKind>
    ): $Values<typeof SP$Social$SocialAttachmentActionKind>;

    /**
     * Specifies the URI associated with the action.
     */
    get_actionUri(): string;

    /**
     * Specifies the URI associated with the action.
     */
    set_actionUri(value: string): string;
  }

  /**
   * Defines a user, document, site, tag, or link to be inserted in a new post.
   * The SocialPostCreationData class defines the content text that contains substitution strings.
   * Each substitution string is replaced by a SocialDataItem value.
   */
  declare class SP$Social$SocialDataItem mixins SP$ClientValueObject {
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
    get_itemType(): $Values<typeof SP$Social$SocialDataItemType>;

    /**
     * Specifies whether the item being inserted is a user, document, site, tag, or link.
     */
    set_itemType(
      value: $Values<typeof SP$Social$SocialDataItemType>
    ): $Values<typeof SP$Social$SocialDataItemType>;

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
    set_uri(value: string): string;
  }

  /**
   * Provides information about an overlay.
   * An overlay is a substring in a post that represents a user, document, site, tag, or link.
   * The SocialPost class contains an array of SocialDataOverlay objects.
   * Each of the SocialDataOverlay objects specifies a link or one or more actors.
   */
  declare class SP$Social$SocialDataOverlay mixins SP$ClientValueObject {
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
    get_overlayType(): $Values<typeof SP$Social$SocialDataOverlayType>;
  }

  /**
   * Specifies information about errors that the server has encountered.
   */
  declare class SP$Social$SocialExceptionDetails mixins SP$ClientValueObject {
    get_internalErrorCode(): number;
    get_internalMessage(): string;
    get_internalStackTrace(): string;

    /**
     * Specifies a type name associated with the internal error if a type name is available.
     */
    get_internalTypeName(): string;
    get_status(): $Values<typeof SP$Social$SocialStatusCode>;
  }

  /**
   * Specifies a feed, which contains an array of SocialThreads, each of which specifies a root SocialPost object and an array of response SocialPost objects.
   */
  declare class SP$Social$SocialFeed mixins SP$ClientValueObject {
    /**
     * Specifies attributes of the returned feed.
     * The attributes specify if the requested feed has additional threads that were not included in the returned thread.
     */
    get_attributes(): $Values<typeof SP$Social$SocialFeedAttributes>;

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
    get_unreadMentionCount(): number;
  }

  /**
   * Provides access to social feeds.
   * It provides methods to create posts, delete posts, read posts, and perform other operations on posts.
   */
  declare class SP$Social$SocialFeedManager mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext): this;

    /**
     * Returns the current user
     */
    get_owner(): SP$Social$SocialActor;

    /**
     * Specifies the URI of the personal site portal.
     */
    get_personalSitePortalUri(): string;

    /**
     * Creates a post in the current user's newsfeed, in the specified user's feed, or in the specified thread.
     * This method returns a new or a modified thread.
     * @param targetId Optional, specifies the target of the post.
     * If this parameter is null, the post is created as a root post in the current user's feed.
     * If this parameter is set to a site URL or a site actor identification, the post is created as a root post in the specified site feed.
     * If this parameter is set to a thread identification, the post is created as a reply post in the specified thread.
     * @param creationData Specifies the format and content of the post.
     */
    createPost(
      targetId: string,
      creationData: Social$SocialPostCreationData
    ): Social$SocialThread;

    /**
     * Deletes the specified post.
     * This method returns a digest of the modified thread.
     * If the entire thread is deleted, this method returns null.
     * If the post being deleted is the root post of a thread, all reply posts are also deleted.
     * @param postId Specifies the post to be deleted.
     * Corresponds the value returned from SocialPost.get_id().
     */
    deletePost(postId: string): Social$SocialThread;

    /**
     * Returns the set of users who have liked the specified post.
     * @param postId Specifies the post being queried for information about users that like the post.
     * Corresponds the value returned from SocialPost.get_id().
     */
    getAllLikers(postId: string): SP$Social$SocialActor[];

    /**
     * Returns a feed for the current user.
     * The feed consists of an array of message threads.
     * Each thread consists of a root post and an array of reply posts.
     */
    getFeed(
      type: $Values<typeof SP$Social$SocialFeedType>,
      options: Social$SocialFeedOptions
    ): SP$Social$SocialFeed;

    /**
     * Returns the public feed for a user or for a site.
     * The feed lists activity by the user and posts created by the server for that user.
     * For example, the feed can include posts indicating the user's birthday or indicating that the user liked a post.
     * @param actorId Corresponds to the value returned by SocialActor.get_id().
     * If the actorId specifies the current user, this method returns the public feed for the current user.
     */
    getFeedFor(
      actorId: string,
      options: Social$SocialFeedOptions
    ): SP$Social$SocialFeed;

    /**
     * Returns the root post and all reply posts in the thread.
     */
    getFullThread(threadId: string): Social$SocialThread;

    /**
     * Returns a feed containing mention reference threads from the current user's personal feed.
     */
    getMentions(
      clearUnreadMentions: boolean,
      options: Social$SocialFeedOptions
    ): SP$Social$SocialFeed;

    /**
     * Returns the server's count of unread mentions of the current user.
     * The server maintains a count of unread mentions in posts, but does not track which mentions have been read.
     * When a new mention is stored on the server, it increments the unread mention for the user specified by the mention.
     * The unread mention count is cleared by the GetMentions method.
     */
    getUnreadMentionCount(): SP$IntResult;

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
    createImageAttachment(
      name: string,
      description: string,
      imageData: any
    ): SP$Social$SocialAttachment;

    /**
     * Generates a preview for the content specified by the URL.
     */
    getPreview(itemUrl: string): SP$Social$SocialAttachment;

    /**
     * Returns the preview image data for an image attachment.
     * @param url Specifies the URL of the preview image relative to the personal site portal.
     * @param key Specifies the URL-encoded key to decrypt the image.
     * @param iv Specifies the URL-encoded initialization vector for decrypting the image.
     */
    getPreviewImage(url: string, key: string, iv: string): any;
  }

  declare class SP$Social$SocialFeedOptions mixins SP$ClientObject {
    get_maxThreadCount(): number;
    set_maxThreadCount(value: number): number;
    get_newerThan(): string;
    set_newerThan(value: string): string;
    get_olderThan(): string;
    set_olderThan(value: string): string;
    get_sortOrder(): $Values<typeof SP$Social$SocialFeedSortOrder>;
    set_sortOrder(
      value: $Values<typeof SP$Social$SocialFeedSortOrder>
    ): $Values<typeof SP$Social$SocialFeedSortOrder>;
  }

  /**
   * Provides properties and methods for managing a user's list of followed actors.
   * Actors can be users, documents, sites, and tags.
   */
  declare class SP$Social$SocialFollowingManager mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext): this;

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
    follow(actor: SP$Social$SocialActorInfo): SP$IntResult;
    stopFollowing(actor: SP$Social$SocialActorInfo): SP$BooleanResult;
    isFollowed(actor: SP$Social$SocialActorInfo): SP$BooleanResult;
    getFollowed(
      types: $Values<typeof SP$Social$SocialActorTypes>
    ): SP$Social$SocialActor[];
    getFollowedCount(
      types: $Values<typeof SP$Social$SocialActorTypes>
    ): SP$IntResult;

    /**
     * Returns the users who are followers of the current user.
     */
    getFollowers(): SP$Social$SocialActor[];
    getSuggestions(): SP$Social$SocialActor[];
  }

  /**
   * Defines a link that includes a URI and text representation.
   * This class is used to represent the location of a web site.
   */
  declare class SP$Social$SocialLink mixins SP$ClientValueObject {
    get_text(): string;
    set_text(value: string): string;
    get_uri(): string;
    set_uri(value: string): string;
  }

  /**
   * Specifies a post read from the server.
   */
  declare class SP$Social$SocialPost mixins SP$ClientValueObject {
    /**
     * Specifies an image, document preview, or video preview attachment
     */
    get_attachment(): SP$Social$SocialAttachment;

    /**
     * Describes attributes about the post, such as whether the current user can delete or like the post.
     */
    get_attributes(): $Values<typeof SP$Social$SocialPostAttributes>;

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
    get_overlays(): SP$Social$SocialDataOverlay[];

    /**
     * Specifies whether a post is the root post or a reply post in a thread
     */
    get_postType(): $Values<typeof SP$Social$SocialPostType>;

    /**
     * Specifies the URI of the image to be displayed with the post.
     */
    get_preferredImageUri(): string;

    /**
     * Specifies the link to a web site associated with the application that created the post.
     */
    get_source(): SP$Social$SocialLink;

    /**
     * Specifies the text of the post.
     */
    get_text(): string;
  }

  /**
   * Specifies a set of users, documents, sites, and tags by an index into the SocialThreadActors array
   */
  declare class SP$Social$SocialPostActorInfo mixins SP$ClientValueObject {
    get_includesCurrentUser(): boolean;

    /**
     * Specifies an array of indexes into the SocialThreadActors array.
     * The server can choose to return a limited set of actors. For example, the server can choose to return a subset of the users that like a post.
     */
    get_indexes(): number[];
    get_totalCount(): number;
  }

  /**
   * Specifies the content of a post in the SocialFeedManager.createPost method.
   * The post consists of a text message, which can optionally include social tags, mentions of users, and links.
   */
  declare class SP$Social$SocialPostCreationData mixins SP$ClientValueObject {
    /**
     * Specifies an image, document preview, or video preview to be used in the post.
     */
    get_attachment(): SP$Social$SocialAttachment;

    /**
     * Specifies an image, document preview, or video preview to be used in the post.
     */
    set_attachment(
      value: SP$Social$SocialAttachment
    ): SP$Social$SocialAttachment;

    /**
     * Specifies an array consisting of social tags, user mentions, links to documents, links to sites, and generic links.
     * Each element in the array is inserted into the ContentText string if there is a substitution reference to the array element in the string.
     */
    get_contentItems(): SP$Social$SocialDataItem[];

    /**
     * Specifies an array consisting of social tags, user mentions, links to documents, links to sites, and generic links.
     * Each element in the array is inserted into the ContentText string if there is a substitution reference to the array element in the string.
     */
    set_contentItems(
      value: SP$Social$SocialDataItem[]
    ): SP$Social$SocialDataItem[];

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
    set_definitionData(
      value: Social$SocialPostDefinitionData
    ): Social$SocialPostDefinitionData;

    /**
     * Specifies the link to a web site associated with the application that created the post
     */
    get_source(): SP$Social$SocialLink;

    /**
     * Specifies the link to a web site associated with the application that created the post
     */
    set_source(value: SP$Social$SocialLink): SP$Social$SocialLink;

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
    set_updateStatusText(value: boolean): boolean;
  }

  /**
   * Provides additional information about server-generated posts.
   * This type can only be specified in a server-to-server call.
   */
  declare class SP$Social$SocialPostDefinitionData mixins SP$ClientValueObject {
    get_items(): Social$SocialPostDefinitionDataItem[];
    set_items(
      value: Social$SocialPostDefinitionDataItem[]
    ): Social$SocialPostDefinitionDataItem[];
    get_name(): string;
    set_name(value: string): string;
  }

  /**
   * Specifies an item to be inserted in a post by replacing a token in the post definition.
   * This type can only be specified in a server-to-server call.
   */
  declare class SP$Social$SocialPostDefinitionDataItem
    mixins SP$ClientValueObject {
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
    get_itemType(): $Values<typeof SP$Social$SocialPostDefinitionDataItemType>;

    /**
     * Specifies whether the item being formatted is a text element, a user, a document, a site, a tag, or a link.
     */
    set_itemType(
      value: $Values<typeof SP$Social$SocialPostDefinitionDataItemType>
    ): $Values<typeof SP$Social$SocialPostDefinitionDataItemType>;

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
    set_uri(value: string): string;
  }

  /**
   * Specifies a reference to a post in another thread.
   * The referenced post can be a post with a tag, a post that is liked, a post that mentions a user, or a post that is a reply.
   */
  declare class SP$Social$SocialPostReference mixins SP$ClientValueObject {
    /**
     * Provides a digest of the thread containing the referenced post
     */
    get_digest(): Social$SocialThread;
    get_post(): SP$Social$SocialPost;

    /**
     * Specifies the unique identifier of the thread containing the referenced post.
     */
    get_threadId(): string;

    /**
     * Specifies the current owner of the thread as an index into the SocialThreadActors array.
     */
    get_threadOwnerIndex(): number;
  }

  /**
   * Specifies a thread that is stored on the server.
   * The thread contains a root post and zero or more reply posts.
   */
  declare class SP$Social$SocialThread mixins SP$ClientValueObject {
    /**
     * Specifies the users who have created a post in the returned thread and also contains any users, documents, sites, and tags that are referenced in any of the posts in the returned thread.
     */
    get_actors(): SP$Social$SocialActor[];

    /**
     * Specifies attributes of the thread, such as whether the current user can reply or lock the thread and whether the thread is a digest of a thread on the server, whether the number of replies has reached the maximum, and whether the thread is locked.
     */
    get_attributes(): $Values<typeof SP$Social$SocialThreadAttributes>;

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
    get_postReference(): SP$Social$SocialPostReference;

    /**
     * Returns an array of zero or more reply posts.
     * The server can return a subset of the reply posts that are stored on the server.
     */
    get_replies(): SP$Social$SocialPost[];
    get_rootPost(): SP$Social$SocialPost;

    /**
     * Provides information about conditions that were encountered retrieving the thread that did not prevent the operation from completing.
     */
    get_status(): $Values<typeof SP$Social$SocialStatusCode>;

    /**
     * Specifies if the thread is a normal thread created by one or more CreatePost calls or a reference post generated by the server when a user replies to a post, likes a post, or creates a post with a tag or mention
     */
    get_threadType(): $Values<typeof SP$Social$SocialThreadType>;
    get_totalReplyCount(): number;
  }

  declare var npm$namespace$SP$Taxonomy: {
    StringMatchOption: typeof SP$Taxonomy$StringMatchOption,
    ChangeItemType: typeof SP$Taxonomy$ChangeItemType,
    ChangeOperationType: typeof SP$Taxonomy$ChangeOperationType,
    TaxonomySession: typeof SP$Taxonomy$TaxonomySession,
    TermStore: typeof SP$Taxonomy$TermStore,
    TaxonomyItem: typeof SP$Taxonomy$TaxonomyItem,
    TermGroup: typeof SP$Taxonomy$TermGroup,
    TermSetItem: typeof SP$Taxonomy$TermSetItem,
    TermSet: typeof SP$Taxonomy$TermSet,
    Term: typeof SP$Taxonomy$Term,
    Label: typeof SP$Taxonomy$Label,
    LabelMatchInformation: typeof SP$Taxonomy$LabelMatchInformation,
    CustomPropertyMatchInformation: typeof SP$Taxonomy$CustomPropertyMatchInformation,
    ChangeInformation: typeof SP$Taxonomy$ChangeInformation,
    ChangedItem: typeof SP$Taxonomy$ChangedItem,
    ChangedSite: typeof SP$Taxonomy$ChangedSite,
    ChangedGroup: typeof SP$Taxonomy$ChangedGroup,
    ChangedTerm: typeof SP$Taxonomy$ChangedTerm,
    ChangedTermSet: typeof SP$Taxonomy$ChangedTermSet,
    ChangedTermStore: typeof SP$Taxonomy$ChangedTermStore,
    TaxonomyField: typeof SP$Taxonomy$TaxonomyField,
    TaxonomyFieldValueCollection: typeof SP$Taxonomy$TaxonomyFieldValueCollection,
    TaxonomyFieldValue: typeof SP$Taxonomy$TaxonomyFieldValue,
    MobileTaxonomyField: typeof SP$Taxonomy$MobileTaxonomyField
  };

  declare var SP$Taxonomy$StringMatchOption: {|
    +startsWith: 0, // 0
    +exactMatch: 1 // 1
  |};

  declare var SP$Taxonomy$ChangeItemType: {|
    +unknown: 0, // 0
    +term: 1, // 1
    +termSet: 2, // 2
    +group: 3, // 3
    +termStore: 4, // 4
    +site: 5 // 5
  |};

  declare var SP$Taxonomy$ChangeOperationType: {|
    +unknown: 0, // 0
    +add: 1, // 1
    +edit: 2, // 2
    +deleteObject: 3, // 3
    +move: 4, // 4
    +copy: 5, // 5
    +pathChange: 6, // 6
    +merge: 7, // 7
    +importObject: 8, // 8
    +restore: 9 // 9
  |};

  declare class SP$Taxonomy$TaxonomySession mixins SP$ClientObject {
    static getTaxonomySession(
      context: SP$ClientContext
    ): SP$Taxonomy$TaxonomySession;
    get_offlineTermStoreNames(): string[];
    get_termStores(): Taxonomy$TermStoreCollection;
    getTerms(
      labelMatchInformation: Taxonomy$LabelMatchInformation
    ): Taxonomy$TermCollection;
    updateCache(): void;
    getTerm(guid: SP$Guid): Taxonomy$Term;
    getTermsById(termIds: SP$Guid[]): Taxonomy$TermCollection;
    getTermsInDefaultLanguage(
      termLabel: string,
      defaultLabelOnly: boolean,
      stringMatchOption: $Values<typeof SP$Taxonomy$StringMatchOption>,
      resultCollectionSize: number,
      trimUnavailable: boolean,
      trimDeprecated: boolean
    ): Taxonomy$TermCollection;
    getTermsInWorkingLocale(
      termLabel: string,
      defaultLabelOnly: boolean,
      stringMatchOption: $Values<typeof SP$Taxonomy$StringMatchOption>,
      resultCollectionSize: number,
      trimUnavailable: boolean,
      trimDeprecated: boolean
    ): Taxonomy$TermCollection;
    getTermsWithCustomProperty(
      customPropertyName: string,
      trimUnavailable: boolean
    ): Taxonomy$TermCollection;
    getTermsWithCustomProperty(
      customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation
    ): Taxonomy$TermCollection;
    getTermSetsByName(
      termSetName: string,
      lcid: number
    ): Taxonomy$TermSetCollection;
    getTermSetsByTermLabel(
      requiredTermLabels: string[],
      lcid: number
    ): Taxonomy$TermSetCollection;
    getDefaultKeywordsTermStore(): Taxonomy$TermStore;
    getDefaultSiteCollectionTermStore(): Taxonomy$TermStore;
  }

  declare type SP$Taxonomy$TermStoreCollection = {
    itemAt(index: number): Taxonomy$TermStore,
    get_item(index: number): Taxonomy$TermStore,
    getById(id: SP$Guid): Taxonomy$TermStore,
    getByName(name: string): Taxonomy$TermStore
  } & SP$ClientObjectCollection<Taxonomy$TermStore>;

  declare class SP$Taxonomy$TermStore mixins SP$ClientObject {
    get_contentTypePublishingHub(): string;
    get_defaultLanguage(): number;
    set_defaultLanguage(value: number): void;
    get_groups(): Taxonomy$TermGroupCollection;
    get_hashTagsTermSet(): Taxonomy$TermSet;
    get_id(): SP$Guid;
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
    createGroup(name: string, groupId?: SP$Guid): Taxonomy$TermGroup;
    deleteLanguage(lcid: number): void;
    getChanges(
      changeInformation: Taxonomy$ChangeInformation
    ): Taxonomy$ChangedItemCollection;
    getGroup(id: SP$Guid): Taxonomy$TermGroup;
    getTerm(termId: SP$Guid): Taxonomy$Term;
    getTermInTermSet(termSetId: SP$Guid, termId: SP$Guid): Taxonomy$Term;
    getTermsById(termIds: SP$Guid[]): Taxonomy$TermCollection;
    getTerms(
      termLabel: string,
      trimUnavailable: boolean
    ): Taxonomy$TermCollection;
    getTerms(
      labelMatchInformation: Taxonomy$LabelMatchInformation
    ): Taxonomy$TermCollection;
    getTermSetsByName(
      termSetName: string,
      lcid: number
    ): Taxonomy$TermSetCollection;
    getTermSetsByTermLabel(
      requiredTermLabels: string[],
      lcid: number
    ): Taxonomy$TermSetCollection;
    getTermsWithCustomProperty(
      customPropertyName: string,
      trimUnavailable: boolean
    ): Taxonomy$TermCollection;
    getTermsWithCustomProperty(
      customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation
    ): Taxonomy$TermCollection;
    getTermSet(termSetId: SP$Guid): Taxonomy$TermSet;
    getTermSetsWithCustomProperty(
      customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation
    ): Taxonomy$TermSetCollection;
    rollbackAll(): void;
    updateCache(): void;
    getSiteCollectionGroup(
      currentSite: SP$Site,
      createIfMissing: boolean
    ): Taxonomy$TermGroup;
    updateUsedTermsOnSite(currentSite: SP$Site): void;
  }

  declare class SP$Taxonomy$TaxonomyItem mixins SP$ClientObject {
    static normalizeName(
      context: SP$ClientContext,
      name: string
    ): SP$StringResult;
    get_createdDate(): Date;
    get_id(): SP$Guid;
    get_lastModifiedDate(): Date;
    get_name(): string;
    set_name(value: string): void;
    get_termStore(): SP$Taxonomy$TermStore;
    deleteObject(): void;
  }

  declare type SP$Taxonomy$TermGroupCollection = {
    itemAt(index: number): Taxonomy$TermGroup,
    get_item(index: number): Taxonomy$TermGroup,
    getById(id: SP$Guid): Taxonomy$TermGroup,
    getByName(name: string): Taxonomy$TermGroup
  } & SP$ClientObjectCollection<Taxonomy$TermGroup>;

  declare class SP$Taxonomy$TermGroup mixins SP$Taxonomy$TaxonomyItem {
    get_description(): string;
    set_description(value: string): void;
    get_isSiteCollectionGroup(): boolean;
    get_isSystemGroup(): boolean;
    get_termSets(): Taxonomy$TermSetCollection;
    createTermSet(
      name: string,
      newTermSetId: SP$Guid,
      lcid: number
    ): Taxonomy$TermSet;
    exportObject(): SP$StringResult;
    getChanges(
      changeInformation: Taxonomy$ChangeInformation
    ): Taxonomy$ChangedItemCollection;
    getTermSetsWithCustomProperty(
      customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation
    ): Taxonomy$TermSetCollection;
  }

  declare class SP$Taxonomy$TermSetItem mixins SP$Taxonomy$TaxonomyItem {
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
    createTerm(name: string, lcid: number, newTermId: SP$Guid): Taxonomy$Term;
    reuseTerm(sourceTerm: Taxonomy$Term, reuseBranch: boolean): Taxonomy$Term;
    reuseTermWithPinning(sourceTerm: Taxonomy$Term): Taxonomy$Term;
    deleteCustomProperty(name: string): void;
    deleteAllCustomProperties(): void;
    setCustomProperty(name: string, value: string): void;
  }

  declare type SP$Taxonomy$TermSetCollection = {
    itemAt(index: number): Taxonomy$TermSet,
    get_item(index: number): Taxonomy$TermSet,
    getById(id: SP$Guid): Taxonomy$TermSet,
    getByName(name: string): Taxonomy$TermSet
  } & SP$ClientObjectCollection<Taxonomy$TermSet>;

  declare class SP$Taxonomy$TermSet mixins SP$Taxonomy$TermSetItem {
    get_contact(): string;
    set_contact(value: string): void;
    get_description(): string;
    set_description(value: string): void;
    get_group(): SP$Taxonomy$TermGroup;
    get_isOpenForTermCreation(): boolean;
    set_isOpenForTermCreation(value: boolean): void;
    get_stakeholders(): string[];
    addStakeholder(stakeholderName: string): void;
    copy(): SP$Taxonomy$TermSet;
    deleteStakeholder(stakeholderName: string): void;
    exportObject(): SP$StringResult;
    getAllTerms(): Taxonomy$TermCollection;
    getChanges(
      changeInformation: Taxonomy$ChangeInformation
    ): Taxonomy$ChangedItemCollection;
    getTerm(termId: SP$Guid): Taxonomy$Term;
    getTerms(
      pagingLimit: number | Taxonomy$LabelMatchInformation
    ): Taxonomy$TermCollection;
    getTerms(
      termLabel: string,
      trimUnavailable: boolean
    ): Taxonomy$TermCollection;
    getTermsWithCustomProperty(
      customPropertyName: string,
      trimUnavailable: boolean
    ): Taxonomy$TermCollection;
    getTermsWithCustomProperty(
      customPropertyMatchInformation: Taxonomy$CustomPropertyMatchInformation
    ): Taxonomy$TermCollection;
    move(targetGroup: SP$Taxonomy$TermGroup): void;
  }

  declare type SP$Taxonomy$TermCollection = {
    itemAt(index: number): Taxonomy$Term,
    get_item(index: number): Taxonomy$Term,
    getById(id: SP$Guid): Taxonomy$Term,
    getByName(name: string): Taxonomy$Term
  } & SP$ClientObjectCollection<Taxonomy$Term>;

  declare class SP$Taxonomy$Term mixins SP$Taxonomy$TermSetItem {
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
    get_mergedTermIds(): SP$Guid[];
    get_parent(): SP$Taxonomy$Term;
    get_pathOfTerm(): string;
    get_pinSourceTermSet(): SP$Taxonomy$TermSet;
    get_reusedTerms(): SP$Taxonomy$TermCollection;
    get_sourceTerm(): SP$Taxonomy$Term;
    get_termsCount(): number;
    get_termSet(): SP$Taxonomy$TermSet;
    get_termSets(): SP$Taxonomy$TermSetCollection;
    copy(doCopyChildren: boolean): SP$Taxonomy$Term;
    createLabel(
      labelName: string,
      lcid: number,
      isDefault: boolean
    ): Taxonomy$Label;
    deleteLocalCustomProperty(name: string): void;
    deleteAllLocalCustomProperties(): void;
    deprecate(doDepricate: boolean): void;
    getAllLabels(lcid: number): Taxonomy$LabelCollection;
    getDefaultLabel(lcid: number): Taxonomy$Label;
    getDescription(lcid: number): SP$StringResult;
    getTerms(pagingLimit: number): SP$Taxonomy$TermCollection;
    getTerms(
      termLabel: string,
      lcid: number,
      defaultLabelOnly: boolean,
      stringMatchOption: $Values<typeof SP$Taxonomy$StringMatchOption>,
      resultCollectionSize: number,
      trimUnavailable: boolean
    ): SP$Taxonomy$TermCollection;
    merge(termToMerge: SP$Taxonomy$Term): void;
    move(newParnt: SP$Taxonomy$TermSetItem): void;
    reassignSourceTerm(reusedTerm: SP$Taxonomy$Term): void;
    setDescription(description: string, lcid: number): void;
    setLocalCustomProperty(name: string, value: string): void;
    getIsDescendantOf(ancestorTerm: SP$Taxonomy$Term): SP$BooleanResult;
    getPath(lcid: number): SP$StringResult;
  }

  declare type SP$Taxonomy$LabelCollection = {
    itemAt(index: number): Taxonomy$Label,
    get_item(index: number): Taxonomy$Label,
    getByValue(name: string): Taxonomy$Label
  } & SP$ClientObjectCollection<Taxonomy$Label>;

  declare class SP$Taxonomy$Label mixins SP$ClientObject {
    get_isDefaultForLanguage(): boolean;
    get_language(): number;
    set_language(value: number): void;
    get_term(): SP$Taxonomy$Term;
    get_value(): string;
    set_value(value: string): void;
    deleteObject(): void;
    setAsDefaultForLanguage(): void;
  }

  declare class SP$Taxonomy$LabelMatchInformation mixins SP$ClientObject {
    constructor(context: SP$ClientContext): this;
    get_defaultLabelOnly(): boolean;
    set_defaultLabelOnly(value: boolean): void;
    get_excludeKeyword(): boolean;
    set_excludeKeyword(value: boolean): void;
    get_lcid(): number;
    set_lcid(value: number): void;
    get_resultCollectionSize(): number;
    set_resultCollectionSize(value: number): void;
    get_stringMatchOption(): $Values<typeof SP$Taxonomy$StringMatchOption>;
    set_stringMatchOption(
      value: $Values<typeof SP$Taxonomy$StringMatchOption>
    ): void;
    get_termLabel(): string;
    set_termLabel(value: string): void;
    get_trimDeprecated(): boolean;
    set_trimDeprecated(value: boolean): void;
    get_trimUnavailable(): boolean;
    set_trimUnavailable(value: boolean): void;
  }

  declare class SP$Taxonomy$CustomPropertyMatchInformation
    mixins SP$ClientObject {
    constructor(context: SP$ClientContext): this;
    get_customPropertyName(): string;
    set_customPropertyName(value: string): void;
    get_customPropertyValue(): string;
    set_customPropertyValue(value: string): void;
    get_resultCollectionSize(): number;
    set_resultCollectionSize(value: number): void;
    get_stringMatchOption(): $Values<typeof SP$Taxonomy$StringMatchOption>;
    set_stringMatchOption(
      value: $Values<typeof SP$Taxonomy$StringMatchOption>
    ): void;
    get_trimUnavailable(): boolean;
    set_trimUnavailable(value: boolean): void;
  }

  declare class SP$Taxonomy$ChangeInformation mixins SP$ClientObject {
    constructor(context: SP$ClientContext): this;
    get_itemType(): $Values<typeof SP$Taxonomy$ChangeItemType>;
    set_itemType(value: $Values<typeof SP$Taxonomy$ChangeItemType>): void;
    get_operationType(): $Values<typeof SP$Taxonomy$ChangeOperationType>;
    set_operationType(
      value: $Values<typeof SP$Taxonomy$ChangeOperationType>
    ): void;
    get_startTime(): Date;
    set_startTime(value: Date): void;
    get_withinTimeSpan(): number;
    set_withinTimeSpan(value: number): void;
  }

  declare type SP$Taxonomy$ChangedItemCollection = {
    itemAt(index: number): Taxonomy$ChangedItem,
    get_item(index: number): Taxonomy$ChangedItem
  } & SP$ClientObjectCollection<Taxonomy$ChangedItem>;

  declare class SP$Taxonomy$ChangedItem mixins SP$ClientObject {
    get_changedBy(): string;
    get_changedTime(): Date;
    get_id(): SP$Guid;
    get_itemType(): $Values<typeof SP$Taxonomy$ChangeItemType>;
    get_operation(): $Values<typeof SP$Taxonomy$ChangeOperationType>;
  }

  declare class SP$Taxonomy$ChangedSite mixins SP$Taxonomy$ChangedItem {
    get_siteId(): SP$Guid;
    get_termId(): SP$Guid;
    get_termSetId(): SP$Guid;
  }

  declare class SP$Taxonomy$ChangedGroup mixins SP$Taxonomy$ChangedItem {}

  declare class SP$Taxonomy$ChangedTerm mixins SP$Taxonomy$ChangedItem {
    get_changedCustomProperties(): string[];
    get_changedLocalCustomProperties(): string[];
    get_groupId(): SP$Guid;
    get_lcidsForChangedDescriptions(): number[];
    get_lcidsForChangedLabels(): number[];
    get_termSetId(): SP$Guid;
  }

  declare class SP$Taxonomy$ChangedTermSet mixins SP$Taxonomy$ChangedItem {
    get_fromGroupId(): SP$Guid;
    get_groupId(): SP$Guid;
  }

  declare class SP$Taxonomy$ChangedTermStore mixins SP$Taxonomy$ChangedItem {
    get_changedLanguage(): number;
    get_isDefaultLanguageChanged(): boolean;
    get_isFullFarmRestore(): boolean;
  }

  declare class SP$Taxonomy$TaxonomyField mixins SP$FieldLookup {
    constructor(
      context: SP$ClientContext,
      fields: SP$FieldCollection,
      filedName: string
    ): this;
    get_anchorId(): SP$Guid;
    set_anchorId(value: SP$Guid): void;
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
    get_sspId(): SP$Guid;
    set_sspId(value: SP$Guid): void;
    get_targetTemplate(): string;
    set_targetTemplate(value: string): void;
    get_termSetId(): SP$Guid;
    set_termSetId(value: SP$Guid): void;
    get_textField(): SP$Guid;
    get_userCreated(): SP$Guid;
    set_userCreated(value: SP$Guid): void;
    getFieldValueAsText(value: Taxonomy$TaxonomyFieldValue): SP$StringResult;
    getFieldValueAsTaxonomyFieldValue(
      value: string
    ): Taxonomy$TaxonomyFieldValue;
    getFieldValueAsTaxonomyFieldValueCollection(
      value: string
    ): Taxonomy$TaxonomyFieldValueCollection;
    setFieldValueByTerm<T>(
      listItem: SP$ListItem<T>,
      term: SP$Taxonomy$Term,
      lcid: number
    ): void;
    setFieldValueByTermCollection<T>(
      listItem: SP$ListItem<T>,
      terms: SP$Taxonomy$TermCollection,
      lcid: number
    ): void;
    setFieldValueByCollection<T>(
      listItem: SP$ListItem<T>,
      terms: SP$Taxonomy$Term[],
      lcid: number
    ): void;
    setFieldValueByValue<T>(
      listItem: SP$ListItem<T>,
      taxValue: Taxonomy$TaxonomyFieldValue
    ): void;
    setFieldValueByValueCollection<T>(
      listItem: SP$ListItem<T>,
      taxValueCollection: Taxonomy$TaxonomyFieldValueCollection
    ): void;
    getFieldValueAsHtml(value: Taxonomy$TaxonomyFieldValue): SP$StringResult;
    getValidatedString(value: Taxonomy$TaxonomyFieldValue): SP$StringResult;
  }

  declare class SP$Taxonomy$TaxonomyFieldValueCollection
    mixins SP$ClientObjectCollection<Taxonomy$TaxonomyFieldValue> {
    constructor(
      context: SP$ClientContext,
      fieldValue: string,
      creatingField: SP$Field
    ): this;
    itemAt(index: number): Taxonomy$TaxonomyFieldValue;
    get_item(index: number): Taxonomy$TaxonomyFieldValue;
    populateFromLabelGuidPairs(text: string): void;
  }

  declare class SP$Taxonomy$TaxonomyFieldValue mixins SP$ClientValueObject {
    get_label(): string;
    set_label(value: string): void;
    get_termGuid(): SP$Guid;
    set_termGuid(value: SP$Guid): void;
    get_wssId(): number;
    set_wssId(value: number): void;
  }

  declare class SP$Taxonomy$MobileTaxonomyField mixins SP$ClientObject {
    get_readOnly(): boolean;
  }

  declare var npm$namespace$SP$DocumentSet: {
    DocumentSet: typeof SP$DocumentSet$DocumentSet
  };
  declare class SP$DocumentSet$DocumentSet mixins SP$ClientObject {
    static create(
      context: SP$ClientContext,
      parentFolder: SP$Folder,
      name: string,
      ctid: SP$ContentTypeId
    ): SP$StringResult;
  }

  declare var npm$namespace$SP$Video: {
    EmbedCodeConfiguration: typeof SP$Video$EmbedCodeConfiguration,
    VideoSet: typeof SP$Video$VideoSet
  };
  declare class SP$Video$EmbedCodeConfiguration mixins SP$ClientValueObject {
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
    set_previewImagePath(value: string): string;
  }

  declare class SP$Video$VideoSet mixins SP$DocumentSet$DocumentSet {
    static createVideo(
      context: SP$ClientContext,
      parentFolder: SP$Folder,
      name: string,
      ctid: SP$ContentTypeId
    ): SP$StringResult;
    static uploadVideo(
      context: SP$ClientContext,
      list: SP$List,
      fileName: string,
      file: any[],
      overwriteIfExists: boolean,
      parentFolderPath: string
    ): SP$StringResult;
    static getEmbedCode(
      context: SP$ClientContext,
      videoPath: string,
      properties: SP$Video$EmbedCodeConfiguration
    ): SP$StringResult;
    static migrateVideo<T>(
      context: SP$ClientContext,
      videoFile: SP$File
    ): SP$ListItem<T>;
  }

  declare var npm$namespace$SP$UI: {
    $create_DialogOptions: typeof SP$UI$$create_DialogOptions,

    DialogResult: typeof SP$UI$DialogResult,
    PopoutMenu: typeof SP$UI$PopoutMenu,
    AttractModeControl: typeof SP$UI$AttractModeControl,
    Status: typeof SP$UI$Status,
    Menu: typeof SP$UI$Menu,
    MenuTest: typeof SP$UI$MenuTest,
    DialogOptions: typeof SP$UI$DialogOptions,
    Dialog: typeof SP$UI$Dialog,
    ModalDialog: typeof SP$UI$ModalDialog,
    Command: typeof SP$UI$Command,
    CommandBar: typeof SP$UI$CommandBar,
    PagingControl: typeof SP$UI$PagingControl,
    ApplicationPages: typeof npm$namespace$SP$UI$ApplicationPages,
    Notify: typeof npm$namespace$SP$UI$Notify,
    Workspace: typeof npm$namespace$SP$UI$Workspace,
    Workplace: typeof npm$namespace$SP$UI$Workplace,
    UIUtility: typeof npm$namespace$SP$UI$UIUtility,
    Controls: typeof npm$namespace$SP$UI$Controls
  };

  declare var npm$namespace$SP$UI$ApplicationPages: {
    SelectorType: typeof SP$UI$ApplicationPages$SelectorType,
    CalendarScope: typeof SP$UI$ApplicationPages$CalendarScope,
    SelectorSelectionEventArgs: typeof SP$UI$ApplicationPages$SelectorSelectionEventArgs,
    CalendarSelector: typeof SP$UI$ApplicationPages$CalendarSelector,
    BaseSelectorComponent: typeof SP$UI$ApplicationPages$BaseSelectorComponent,
    CalendarInstanceRepository: typeof SP$UI$ApplicationPages$CalendarInstanceRepository,
    ResolveEntity: typeof SP$UI$ApplicationPages$ResolveEntity,
    ClientPeoplePickerQueryParameters: typeof SP$UI$ApplicationPages$ClientPeoplePickerQueryParameters,
    ClientPeoplePickerWebServiceInterface: typeof SP$UI$ApplicationPages$ClientPeoplePickerWebServiceInterface,
    PeoplePickerWebServiceInterface: typeof SP$UI$ApplicationPages$PeoplePickerWebServiceInterface
  };
  declare class SP$UI$ApplicationPages$SelectorSelectionEventArgs
    mixins Sys.EventArgs {
    constructor(entities: any): this;
    get_entities(): any;
  }

  declare interface SP$UI$ApplicationPages$ISelectorComponent {
    get_selectedEntities(): any;
    set_selectedEntities(value: any): void;
    get_callback(): (sender: any, e: Sys.EventArgs) => void;
    set_callback(value: (sender: any, e: Sys.EventArgs) => void): void;
    get_scopeKey(): string;
    get_componentType(): $Values<typeof SP$UI$ApplicationPages$SelectorType>;
    revertTo(ent: SP$UI$ApplicationPages$ResolveEntity): void;
    removeEntity(ent: SP$UI$ApplicationPages$ResolveEntity): void;
    setEntity(ent: SP$UI$ApplicationPages$ResolveEntity): void;
  }

  declare var SP$UI$ApplicationPages$SelectorType: {|
    +none: 0, // 0
    +resource: 1, // 1
    +people: 2, // 2
    +people_And_Resource: 3, // 3
    +event: 4 // 4
  |};

  declare class SP$UI$ApplicationPages$CalendarSelector mixins Sys.Component {
    static instance(): SP$UI$ApplicationPages$CalendarSelector;
    registerSelector(selector: SP$UI$ApplicationPages$ISelectorComponent): void;
    getSelector(
      type: $Values<typeof SP$UI$ApplicationPages$SelectorType>,
      scopeKey: string
    ): SP$UI$ApplicationPages$ISelectorComponent;
    addHandler(
      scopeKey: string,
      people: boolean,
      resource: boolean,
      handler: (
        sender: any,
        selection: SP$UI$ApplicationPages$SelectorSelectionEventArgs
      ) => void
    ): void;
    revertTo(scopeKey: string, ent: SP$UI$ApplicationPages$ResolveEntity): void;
    removeEntity(
      scopeKey: string,
      ent: SP$UI$ApplicationPages$ResolveEntity
    ): void;
    constructor(): this;
  }

  declare class SP$UI$ApplicationPages$BaseSelectorComponent
    mixins SP$UI$ApplicationPages$ISelectorComponent {
    constructor(
      key: string,
      type: $Values<typeof SP$UI$ApplicationPages$SelectorType>
    ): this;
    get_scopeKey(): string;
    get_componentType(): $Values<typeof SP$UI$ApplicationPages$SelectorType>;
    get_selectedEntities(): any;
    set_selectedEntities(value: any): void;
    get_callback(): (sender: any, e: Sys.EventArgs) => void;
    set_callback(value: (sender: any, e: Sys.EventArgs) => void): void;
    revertTo(ent: SP$UI$ApplicationPages$ResolveEntity): void;
    removeEntity(ent: SP$UI$ApplicationPages$ResolveEntity): void;
    setEntity(ent: SP$UI$ApplicationPages$ResolveEntity): void;
  }

  declare interface SP$UI$ApplicationPages$ICalendarController {
    moveToDate(date: string): void;
    moveToViewType(viewType: string): void;
    moveToViewDate(
      scope: $Values<typeof SP$UI$ApplicationPages$CalendarScope>,
      date: string
    ): void;
    moveToView(
      scope: $Values<typeof SP$UI$ApplicationPages$CalendarScope>
    ): void;
    expandAll(): void;
    collapseAll(): void;
    refreshItems(): void;
    getActiveScope(): $Values<typeof SP$UI$ApplicationPages$CalendarScope>;
    newItemDialog(contentTypeId: string): void;
    deleteItem(itemId: string): void;
  }

  declare var SP$UI$ApplicationPages$CalendarScope: {|
    +nothing: 0, // 0
    +monthly: 1, // 1
    +weeklyGroup: 2, // 2
    +daily: 3, // 3
    +weekly: 4, // 4
    +dailyGroup: 5 // 5
  |};

  declare class SP$UI$ApplicationPages$CalendarInstanceRepository {
    static registerInstance(
      instanceId: string,
      contoller: SP$UI$ApplicationPages$ICalendarController
    ): void;
    static lookupInstance(
      instanceId: string
    ): SP$UI$ApplicationPages$ICalendarController;
    static firstInstance(): SP$UI$ApplicationPages$ICalendarController;
  }

  declare class SP$UI$ApplicationPages$ResolveEntity {
    tYPE_EVENT: string;
    tYPE_USER: string;
    tYPE_RESOURCE: string;
    tYPE_EXCHANGE: string;
    entityType: string;
    displayName: string;
    email: string;
    accountName: string;
    id: string;
    members: SP$UI$ApplicationPages$ResolveEntity[];
    needResolve: boolean;
    isGroup: boolean;
    get_key(): string;
    constructor(): this;
  }

  declare class SP$UI$ApplicationPages$ClientPeoplePickerQueryParameters
    mixins SP$ClientValueObject {
    get_allowEmailAddresses(): boolean;
    set_allowEmailAddresses(value: boolean): void;
    get_allowMultipleEntities(): boolean;
    set_allowMultipleEntities(value: boolean): void;
    get_allUrlZones(): boolean;
    set_allUrlZones(value: boolean): void;
    get_enabledClaimProviders(): string;
    set_enabledClaimProviders(value: string): void;
    get_forceClaims(): boolean;
    set_forceClaims(value: boolean): void;
    get_maximumEntitySuggestions(): number;
    set_maximumEntitySuggestions(value: number): void;
    get_principalSource(): $Values<typeof SP$Utilities$PrincipalSource>;
    set_principalSource(
      value: $Values<typeof SP$Utilities$PrincipalSource>
    ): void;
    get_principalType(): $Values<typeof SP$Utilities$PrincipalType>;
    set_principalType(value: $Values<typeof SP$Utilities$PrincipalType>): void;
    get_queryString(): string;
    set_queryString(value: string): void;
    get_required(): boolean;
    set_required(value: boolean): void;
    get_sharePointGroupID(): number;
    set_sharePointGroupID(value: number): void;
    get_urlZone(): $Values<typeof SP$UrlZone>;
    set_urlZone(value: $Values<typeof SP$UrlZone>): void;
    get_urlZoneSpecified(): boolean;
    set_urlZoneSpecified(value: boolean): void;
    get_web(): SP$Web;
    set_web(value: SP$Web): void;
    get_webApplicationID(): SP$Guid;
    set_webApplicationID(value: SP$Guid): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$UI$ApplicationPages$ClientPeoplePickerWebServiceInterface {
    static clientPeoplePickerSearchUser(
      context: SP$ClientRuntimeContext,
      queryParams: SP$UI$ApplicationPages$ClientPeoplePickerQueryParameters
    ): SP$StringResult;
    static clientPeoplePickerResolveUser(
      context: SP$ClientRuntimeContext,
      queryParams: SP$UI$ApplicationPages$ClientPeoplePickerQueryParameters
    ): SP$StringResult;
  }

  declare class SP$UI$ApplicationPages$PeoplePickerWebServiceInterface {
    static getSearchResultsByHierarchy(
      context: SP$ClientRuntimeContext,
      providerID: string,
      hierarchyNodeID: string,
      entityTypes: string,
      contextUrl: string
    ): SP$StringResult;
    static getSearchResults(
      context: SP$ClientRuntimeContext,
      searchPattern: string,
      providerID: string,
      hierarchyNodeID: string,
      entityTypes: string
    ): SP$StringResult;
  }

  declare class SP$UI$PopoutMenu mixins Sys.IDisposable {
    constructor(
      launcherId: string,
      menuId: string,
      iconId: string,
      launcherOpenCssClass: string,
      textDirection: string,
      closeIconUrl: string,
      isClustered: boolean,
      closeIconOffsetLeft: number,
      closeIconOffsetTop: number,
      closeIconHeight: number,
      closeIconWidth: number
    ): this;
    launchMenu(): void;
    closeMenu(): void;
    static createPopoutMenuInstanceAndLaunch(
      anchorId: string,
      menuId: string,
      iconId: string,
      anchorOpenCss: string,
      textDirection: string,
      closeIconUrl: string,
      isClustered: boolean,
      x: number,
      y: number,
      height: number,
      width: number
    ): void;
    static closeActivePopoutMenuInstance(): void;
    dispose(): void;
  }

  declare class SP$UI$AttractModeControl mixins Sys.UI.Control {
    defaultAttractModeIcon: string;
    cssAttractMode: string;
    cssAttractModeBackground: string;
    cssAttractModeCell: string;
    cssAttractModeWrapper: string;
    cssAttractModeIcon: string;
    cssAttractModeText: string;
    get_imageElement(): any;
    get_textElement(): HTMLElement;
    constructor(): this;
  }

  declare var npm$namespace$SP$UI$Notify: {
    addNotification: typeof SP$UI$Notify$addNotification,
    removeNotification: typeof SP$UI$Notify$removeNotification,
    showLoadingNotification: typeof SP$UI$Notify$showLoadingNotification,

    Notification: typeof SP$UI$Notify$Notification,
    NotificationContainer: typeof SP$UI$Notify$NotificationContainer
  };
  declare function SP$UI$Notify$addNotification(
    strHtml: string,
    bSticky: boolean
  ): string;

  declare function SP$UI$Notify$removeNotification(nid: string): void;

  declare function SP$UI$Notify$showLoadingNotification(
    bSticky: boolean
  ): string;

  declare class SP$UI$Notify$Notification {
    constructor(
      containerId: $Values<typeof SPNotifications$ContainerID>,
      strHtml: string,
      bSticky?: boolean,
      strTooltip?: string,
      onclickHandler?: () => void,
      extraData?: SPStatusNotificationData
    ): this;
    get_id(): string;
    Show(bNoAnimate: boolean): void;
    Hide(bNoAnimate: boolean): void;
  }

  declare class SP$UI$Notify$NotificationContainer {
    constructor(
      id: number,
      element: any,
      layer: number,
      notificationLimit?: number
    ): this;
    Clear(): void;
    GetCount(): number;
    SetEventHandler(
      eventId: $Values<typeof SPNotifications$EventID>,
      eventHandler: any
    ): void;
  }

  declare class SP$UI$Status {
    static addStatus(
      strTitle: string,
      strHtml?: string,
      atBegining?: boolean
    ): string;
    static appendStatus(sid: string, strTitle: string, strHtml: string): string;
    static updateStatus(sid: string, strHtml: string): void;
    static setStatusPriColor(sid: string, strColor: string): void;
    static removeStatus(sid: string): void;
    static removeAllStatus(hide: boolean): void;
    constructor(): this;
  }

  declare var npm$namespace$SP$UI$Workspace: {
    add_resized: typeof SP$UI$Workspace$add_resized,
    remove_resized: typeof SP$UI$Workspace$remove_resized
  };
  declare function SP$UI$Workspace$add_resized(handler: () => void): void;

  declare function SP$UI$Workspace$remove_resized(handler: () => void): void;

  declare class SP$UI$Menu {
    static create(id: string): SP$UI$Menu;
    addMenuItem(
      text: string,
      actionScriptText: string,
      imageSourceUrl: string,
      imageAlternateText: string,
      sequenceNumber: number,
      description: string,
      id: string
    ): HTMLElement;
    addSeparator(): void;
    addSubMenu(
      text: string,
      imageSourceUrl: string,
      imageAlternateText: string,
      sequenceNumber: number,
      description: string,
      id: string
    ): SP$UI$Menu;
    show(
      relativeElement: HTMLElement,
      forceRefresh: boolean,
      flipTopLevelMenu: boolean,
      yOffset: number
    ): void;
    showFilterMenu(
      relativeElement: HTMLElement,
      forceRefresh: boolean,
      flipTopLevelMenu: boolean,
      yOffset: number,
      fShowClose: boolean,
      fShowCheckBoxes: boolean
    ): void;
    hideIcons(): void;
    showIcons(): void;
  }

  declare class SP$UI$MenuTest {
    static setup(relativeElement: HTMLElement): void;
    constructor(): this;
  }

  declare function SP$UI$$create_DialogOptions(): UI$DialogOptions;

  /**
   * Result of a modal dialog execution
   */

  declare var SP$UI$DialogResult: {|
    +invalid: 0, // 0
    +cancel: 1, // 1
    +OK: 2 // 2
  |};

  /**
   * Callback which processes dialog result value after dialog is closed
   */
  declare type SP$UI$DialogReturnValueCallback = (
    dialogResult: $Values<typeof SP$UI$DialogResult>,
    returnValue: any
  ) => void;

  /**
   * Options for dialog creation
   */
  declare interface SP$UI$IDialogOptions {
    /**
     * Text displayed in the title bar of the dialog box. If not defined, it will default to the title of the page defined by url property.
     */
    title?: string;

    /**
     * X coordinate of the dialog box.
     */
    x?: number;

    /**
     * Y coordinate of the dialog box.
     */
    y?: number;

    /**
     * The dialog will be maximized when shown.
     */
    showMaximized?: boolean;

    /**
     * url of the page which is shown in the modal dialog. You should use either html or url attribute, but not both.
     */
    url?: string;

    /**
     * specifies if close button should be shown on the dialog
     */
    showClose?: boolean;

    /**
     * specifies if maximize button should be shown on the dialog
     */
    allowMaximize?: boolean;

    /**
     * callback that is called after dialog is closed
     */
    dialogReturnValueCallback?: SP$UI$DialogReturnValueCallback;

    /**
     * automatically determine size of the dialog based on its contents.
     */
    autoSize?: boolean;

    /**
     * minimum width of the dialog when using autoSize option
     */
    autoSizeStartWidth?: number;

    /**
     * include padding for adding a scrollbar
     */
    includeScrollBarPadding?: boolean;

    /**
     * width of the dialog. if not specified, will be determined automatically based on the contents of the dialog
     */
    width?: number;

    /**
     * height of the dialog. if not specified, will be determined automatically based on the contents of the dialog
     */
    height?: number;

    /**
     * html element which will be used as contents of the dialog. You should use either html or url attribute, but not both.
     */
    html?: HTMLElement;

    /**
     * custom arguments to be passed to the dialog
     */
    args?: any;
  }

  declare class SP$UI$DialogOptions mixins SP$UI$IDialogOptions {
    /**
     * Text displayed in the title bar of the dialog box. If not defined, it will default to the title of the page defined by url property.
     */
    title: string;

    /**
     * X coordinate of the dialog box.
     */
    x: number;

    /**
     * Y coordinate of the dialog box.
     */
    y: number;

    /**
     * The dialog will be maximized when shown.
     */
    showMaximized: boolean;

    /**
     * url of the page which is shown in the modal dialog. You should use either html or url attribute, but not both.
     */
    url: string;

    /**
     * specifies if close button should be shown on the dialog
     */
    showClose: boolean;

    /**
     * specifies if maximize button should be shown on the dialog
     */
    allowMaximize: boolean;

    /**
     * callback that is called after dialog is closed
     */
    dialogReturnValueCallback: SP$UI$DialogReturnValueCallback;

    /**
     * automatically determine size of the dialog based on its contents.
     */
    autoSize: boolean;

    /**
     * minimum width of the dialog when using autoSize option
     */
    autoSizeStartWidth: number;

    /**
     * include padding for adding a scrollbar
     */
    includeScrollBarPadding: boolean;

    /**
     * width of the dialog. if not specified, will be determined automatically based on the contents of the dialog
     */
    width: number;

    /**
     * height of the dialog. if not specified, will be determined automatically based on the contents of the dialog
     */
    height: number;

    /**
     * html element which will be used as contents of the dialog. You should use either html or url attribute, but not both.
     */
    html: HTMLElement;

    /**
     * custom arguments to be passed to the dialog
     */
    args: any;
  }

  /**
   * Represents a dialog. Do not use this class directly from your code.
   */
  declare class SP$UI$Dialog {
    get_firstTabStop(): HTMLElement;
    get_lastTabStop(): HTMLElement;
    get_url(): string;
    get_html(): string;
    get_title(): string;
    get_args(): any;
    get_allowMaximize(): boolean;
    get_showClose(): boolean;
    get_returnValue(): any;
    set_returnValue(value: any): void;
    get_frameElement(): HTMLFrameElement;
    get_dialogElement(): HTMLElement;
    get_isMaximized(): boolean;
    get_closed(): boolean;
    autoSizeSuppressScrollbar(resizePageCallBack: any): void;
    autoSize(): void;
  }

  /**
   * Represents a modal dialog
   */
  declare class SP$UI$ModalDialog mixins SP$UI$Dialog {
    /**
     * Displays a modal dialog defined by the specified options.
     */
    static showModalDialog(options: SP$UI$IDialogOptions): SP$UI$ModalDialog;

    /**
     * Should be called from an existing dialog.
     */
    static commonModalDialogClose(
      dialogResult: $Values<typeof SP$UI$DialogResult>,
      returnValue: any
    ): void;

    /**
     * Shows a modal dialog, specified by url, callback, args, and options. Internally, uses SP.UI.ModalDialog.showModalDialog.
     * @param url overrides options.url
     * @param callback overrides options.dialogResultValueCallback
     * @param args overrides options.args
     */
    static commonModalDialogOpen(
      url: string,
      options: SP$UI$IDialogOptions,
      callback?: SP$UI$DialogReturnValueCallback,
      args?: any
    ): void;

    /**
     * Refresh the page if specified dialogResult equals to SP.UI.DialogResult.OK
     */
    static RefreshPage(dialogResult: $Values<typeof SP$UI$DialogResult>): void;

    /**
     * Show page specified by the url in a modal dialog. If the dialog returns SP.UI.DialogResult.OK, the page is refreshed.
     */
    static ShowPopupDialog(url: string): void;

    /**
     * Show modal dialog specified by url, callback, height and width.
     */
    static OpenPopUpPage(
      url: string,
      callback: SP$UI$DialogReturnValueCallback,
      width?: number,
      height?: number
    ): void;

    /**
     * Displays a wait/loading modal dialog with the specified title, message, height and width. Height and width are defined in pixels. Cancel/close button is not shown.
     */
    static showWaitScreenWithNoClose(
      title: string,
      message?: string,
      height?: number,
      width?: number
    ): SP$UI$ModalDialog;

    /**
     * Displays a wait/loading modal dialog with the specified title, message, height and width. Height and width are defined in pixels. Cancel button is shown. If user clicks it, the callbackFunc is called.
     */
    static showWaitScreenSize(
      title: string,
      message?: string,
      callbackFunc?: SP$UI$DialogReturnValueCallback,
      height?: number,
      width?: number
    ): SP$UI$ModalDialog;
    static showPlatformFirstRunDialog(
      url: string,
      callbackFunc: SP$UI$DialogReturnValueCallback
    ): SP$UI$ModalDialog;
    static get_childDialog(): SP$UI$ModalDialog;

    /**
     * Closes the dialog using the specified dialog result.
     */
    close(dialogResult: $Values<typeof SP$UI$DialogResult>): void;
  }

  declare class SP$UI$Command {
    constructor(name: string, displayName: string): this;
    get_displayName(): string;
    set_displayName(value: string): string;
    get_tooltip(): string;
    set_tooltip(value: string): string;
    get_isEnabled(): boolean;
    set_isEnabled(value: boolean): boolean;
    get_href(): string;
    get_name(): string;
    get_elementIDPrefix(): string;
    set_elementIDPrefix(value: string): string;
    get_linkElement(): HTMLAnchorElement;
    get_isDropDownCommand(): boolean;
    set_isDropDownCommand(value: boolean): boolean;
    attachEvents(): void;
    render(builder: SP$HtmlBuilder): void;

    /**
     * Should override
     */
    onClick(): void;
  }

  declare class SP$UI$CommandBar {
    constructor(): this;
    get_commands(): SP$UI$Command[];
    get_dropDownThreshold(): number;
    set_dropDownThreshold(value: number): number;
    get_elementID(): string;
    get_overrideClass(): string;
    set_overrideClass(value: string): string;
    addCommand(action: SP$UI$Command): void;
    insertCommand(action: SP$UI$Command, position: number): void;
    render(builder: SP$HtmlBuilder): void;
    attachEvents(): void;
    findCommandByName(name: string): SP$UI$Command;
  }

  declare class SP$UI$PagingControl {
    constructor(id: string): this;
    render(innerContent: string): string;
    postRender(): void;
    get_innerContent(): HTMLSpanElement;
    get_innerContentClass(): string;
    setButtonState(buttonId: number, state: number): void;
    getButtonState(buttonId: number): number;
    onWindowResized(): void;

    /**
     * Should override
     */
    onPrev(): void;
    onNext(): void;
    static ButtonIDs: {
      prev: number,
      next: number
    };
    static ButtonState: {
      hidden: number,
      disabled: number,
      enabled: number
    };
  }

  declare var npm$namespace$SP$UI$Workplace: {
    add_resized: typeof SP$UI$Workplace$add_resized,
    remove_resized: typeof SP$UI$Workplace$remove_resized
  };
  declare function SP$UI$Workplace$add_resized(
    handler: (obj: any, args: any) => void
  ): void;

  declare function SP$UI$Workplace$remove_resized(
    handler: (obj: any, args: any) => void
  ): void;

  declare var npm$namespace$SP$UI$UIUtility: {
    generateRandomElementId: typeof SP$UI$UIUtility$generateRandomElementId,
    cancelEvent: typeof SP$UI$UIUtility$cancelEvent,
    clearChildNodes: typeof SP$UI$UIUtility$clearChildNodes,
    hideElement: typeof SP$UI$UIUtility$hideElement,
    showElement: typeof SP$UI$UIUtility$showElement,
    insertBefore: typeof SP$UI$UIUtility$insertBefore,
    insertAfter: typeof SP$UI$UIUtility$insertAfter,
    removeNode: typeof SP$UI$UIUtility$removeNode,
    calculateOffsetLeft: typeof SP$UI$UIUtility$calculateOffsetLeft,
    calculateOffsetTop: typeof SP$UI$UIUtility$calculateOffsetTop,
    createHtmlInputText: typeof SP$UI$UIUtility$createHtmlInputText,
    createHtmlInputCheck: typeof SP$UI$UIUtility$createHtmlInputCheck,
    setInnerText: typeof SP$UI$UIUtility$setInnerText,
    getInnerText: typeof SP$UI$UIUtility$getInnerText,
    isTextNode: typeof SP$UI$UIUtility$isTextNode,
    isSvgNode: typeof SP$UI$UIUtility$isSvgNode,
    isNodeOfType: typeof SP$UI$UIUtility$isNodeOfType,
    focusValidOnThisNode: typeof SP$UI$UIUtility$focusValidOnThisNode
  };
  declare function SP$UI$UIUtility$generateRandomElementId(): string;

  declare function SP$UI$UIUtility$cancelEvent(evt: Event): void;

  declare function SP$UI$UIUtility$clearChildNodes(elem: HTMLElement): void;

  declare function SP$UI$UIUtility$hideElement(elem: HTMLElement): void;

  declare function SP$UI$UIUtility$showElement(elem: HTMLElement): void;

  declare function SP$UI$UIUtility$insertBefore(
    elem: HTMLElement,
    targetElement: HTMLElement
  ): void;

  declare function SP$UI$UIUtility$insertAfter(
    elem: HTMLElement,
    targetElement: HTMLElement
  ): void;

  declare function SP$UI$UIUtility$removeNode(elem: HTMLElement): void;

  declare function SP$UI$UIUtility$calculateOffsetLeft(
    elem: HTMLElement
  ): number;

  declare function SP$UI$UIUtility$calculateOffsetTop(
    elem: HTMLElement
  ): number;

  declare function SP$UI$UIUtility$createHtmlInputText(
    text: string
  ): HTMLInputElement;

  declare function SP$UI$UIUtility$createHtmlInputCheck(
    isChecked: boolean
  ): HTMLInputElement;

  declare function SP$UI$UIUtility$setInnerText(
    elem: HTMLElement,
    value: string
  ): void;

  declare function SP$UI$UIUtility$getInnerText(elem: HTMLElement): string;

  declare function SP$UI$UIUtility$isTextNode(elem: HTMLElement): boolean;

  declare function SP$UI$UIUtility$isSvgNode(elem: HTMLElement): boolean;

  declare function SP$UI$UIUtility$isNodeOfType(
    elem: HTMLElement,
    tagNames: string[]
  ): boolean;

  declare function SP$UI$UIUtility$focusValidOnThisNode(
    elem: HTMLElement
  ): boolean;

  declare var npm$namespace$SP$UI$Controls: {
    NavigationOptions: typeof SP$UI$Controls$NavigationOptions,
    SettingsLink: typeof SP$UI$Controls$SettingsLink,
    Navigation: typeof SP$UI$Controls$Navigation,
    ControlManager: typeof SP$UI$Controls$ControlManager
  };
  declare interface SP$UI$Controls$INavigationOptions {
    assetId?: string;
    siteTitle?: string;
    siteUrl?: string;
    appTitle?: string;
    appTitleIconUrl?: string;
    rightToLeft?: boolean;
    appStartPage?: string;
    appIconUrl?: string;
    appHelpPageUrl?: string;
    appHelpPageOnClick?: string;
    settingsLinks?: Controls$ISettingsLink[];
    language?: string;
    clientTag?: string;
    appWebUrl?: string;
    onCssLoaded?: string;
    bottomHeaderVisible?: boolean;
    topHeaderVisible?: boolean;
  }

  declare class SP$UI$Controls$NavigationOptions
    mixins SP$UI$Controls$INavigationOptions {}

  declare interface SP$UI$Controls$ISettingsLink {
    linkUrl: string;
    displayName: string;
  }

  declare class SP$UI$Controls$SettingsLink
    mixins SP$UI$Controls$ISettingsLink {
    linkUrl: string;
    displayName: string;
  }

  declare class SP$UI$Controls$Navigation {
    constructor(
      placeholderDOMElementId: string,
      options: SP$UI$Controls$INavigationOptions
    ): this;
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
    get_settingsLinks(): SP$UI$Controls$ISettingsLink[];
    set_settingsLinks(
      value: SP$UI$Controls$ISettingsLink[]
    ): SP$UI$Controls$ISettingsLink[];
    setVisible(value: boolean): void;
    setTopHeaderVisible(value: boolean): void;
    setBottomHeaderVisible(value: boolean): void;
    remove(): void;
    static getVersionedLayoutsUrl(pageName: string): string;
  }

  declare class SP$UI$Controls$ControlManager {
    static getControl(placeHolderId: string): any;
  }

  declare var npm$namespace$SP$UserProfiles: {
    ChangeTypes: typeof SP$UserProfiles$ChangeTypes,
    ObjectTypes: typeof SP$UserProfiles$ObjectTypes,
    PersonalSiteCapabilities: typeof SP$UserProfiles$PersonalSiteCapabilities,
    PersonalSiteInstantiationState: typeof SP$UserProfiles$PersonalSiteInstantiationState,
    SocialDataStoreExceptionCode: typeof SP$UserProfiles$SocialDataStoreExceptionCode,
    FollowedItemType: typeof SP$UserProfiles$FollowedItemType,
    FollowedContentExceptionType: typeof SP$UserProfiles$FollowedContentExceptionType,
    FollowedContentQueryOptions: typeof SP$UserProfiles$FollowedContentQueryOptions,
    FollowedStatus: typeof SP$UserProfiles$FollowedStatus,
    FollowResultType: typeof SP$UserProfiles$FollowResultType,
    HashTag: typeof SP$UserProfiles$HashTag,
    PeopleManager: typeof SP$UserProfiles$PeopleManager,
    PersonProperties: typeof SP$UserProfiles$PersonProperties,
    ProfileLoader: typeof SP$UserProfiles$ProfileLoader,
    UserProfile: typeof SP$UserProfiles$UserProfile,
    FollowedContent: typeof SP$UserProfiles$FollowedContent,
    FollowedItem: typeof SP$UserProfiles$FollowedItem,
    FollowedItemData: typeof SP$UserProfiles$FollowedItemData,
    FollowResult: typeof SP$UserProfiles$FollowResult,
    UserProfilePropertiesForUser: typeof SP$UserProfiles$UserProfilePropertiesForUser
  };

  /**
   * Specifies types of changes made in the user profile store.
   */

  declare var SP$UserProfiles$ChangeTypes: {|
    +none: 0, // 0
    +add: 1, // 1
    +modify: 2, // 2
    +remove: 3, // 3
    +metadata: 4, // 4
    +all: 5 // 5
  |};

  declare class SP$UserProfiles$HashTag mixins SP$ClientValueObject {
    get_name(): string;
    get_useCount(): number;
  }

  declare type SP$UserProfiles$HashTagCollection = {
    itemAt(index: number): SP$UserProfiles$HashTag,
    get_item(index: number): SP$UserProfiles$HashTag
  } & SP$ClientObjectCollection<SP$UserProfiles$HashTag>;

  /**
   * Specifies types of user-related objects that can be changed in the user profile store.
   */

  declare var SP$UserProfiles$ObjectTypes: {|
    +none: 0, // 0
    +singleValueProperty: 1, // 1
    +multiValueProperty: 2, // 2
    +anniversary: 3, // 3
    +dlMembership: 4, // 4
    +siteMembership: 5, // 5
    +quickLink: 6, // 6
    +colleague: 7, // 7
    +personalizationSite: 8, // 8
    +userProfile: 9, // 9
    +webLog: 10, // 10
    +custom: 11, // 11
    +organizationProfile: 12, // 12
    +organizationMembership: 13, // 13
    +all: 14 // 14
  |};

  /**
   * Provides methods for operations related to people.
   * Note: The SocialFollowingManager object is the recommended object for performing Following People and Following Content tasks.
   * However, PeopleManager provides some methods that SocialFollowingManager doesn't.
   */
  declare class SP$UserProfiles$PeopleManager mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext): this;
    static getTrendingTags(
      context: SP$ClientRuntimeContext
    ): SP$UserProfiles$HashTagCollection;

    /**
     * Checks whether the first user is following the second user.
     */
    static isFollowing(
      context: SP$ClientRuntimeContext,
      possibleFollowerAccountName: string,
      possibleFolloweeAccountName: string
    ): SP$BooleanResult;

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
    getUserProfilePropertyFor(
      accountName: string,
      propertyName: string
    ): string;

    /**
     * Gets the specified user profile properties for the specified user.
     */
    getUserProfilePropertiesFor(
      propertiesForUser: UserProfiles$UserProfilePropertiesForUser
    ): any[];

    /**
     * Gets suggestions for who the current user might want to follow.
     * Note: The recommended API to use for this task is SocialFollowingManager.getSuggestions.
     * Returns list of PersonProperties objects
     */
    getMySuggestions(): SP$ClientObjectList<UserProfiles$PersonProperties>;

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
    amIFollowing(accountName: string): SP$BooleanResult;
    getPeopleFollowedByMe(): SP$ClientObjectList<UserProfiles$PersonProperties>;
    getPeopleFollowedBy(
      accountName: string
    ): SP$ClientObjectList<UserProfiles$PersonProperties>;
    getMyFollowers(): SP$ClientObjectList<UserProfiles$PersonProperties>;
    getFollowersFor(
      accountName: string
    ): SP$ClientObjectList<UserProfiles$PersonProperties>;
    amIFollowedBy(accountName: string): SP$BooleanResult;

    /**
     * Uploads and sets the user profile picture.
     * Pictures in bmp, jpg and png formats and up to 5,000,000 bytes are supported.
     * A user can upload a picture only to the user's own profile.
     * @param data Binary content of an image file
     */
    setMyProfilePicture(data: SP$Base64EncodedByteArray): void;
  }

  /**
   * Specifies the capabilities of a personal site.
   */

  declare var SP$UserProfiles$PersonalSiteCapabilities: {|
    +none: 0, // 0
    +profile: 1, // 1
    +social: 2, // 2
    +storage: 3, // 3
    +myTasksDashboard: 4, // 4
    +education: 5, // 5
    +guest: 6 // 6
  |};

  /**
   * Specifies an exception or status code for the state of a personal site instantiation.
   */

  declare var SP$UserProfiles$PersonalSiteInstantiationState: {|
    +uninitialized: 0, // 0
    +enqueued: 1, // 1
    +created: 2, // 2
    +deleted: 3, // 3
    +permissionsGeneralFailure: 4, // 4
    +permissionsUPANotGranted: 5, // 5
    +permissionsUserNotLicensed: 6, // 6
    +permissionsSelfServiceSiteCreationDisabled: 7, // 7
    +permissionsNoMySitesInPeopleLight: 8, // 8
    +permissionsEmptyHostUrl: 9, // 9
    +permissionsHostFailedToInitializePersonalSiteContext: 10, // 10
    +errorGeneralFailure: 11, // 11
    +errorManagedPathDoesNotExist: 12, // 12
    +errorLanguageNotInstalled: 13, // 13
    +errorPartialCreate: 14, // 14
    +errorPersonalSiteAlreadyExists: 15, // 15
    +errorRootSiteNotPresent: 16, // 16
    +errorSelfServiceSiteCreateCallFailed: 17 // 17
  |};

  declare var SP$UserProfiles$SocialDataStoreExceptionCode: {|
    +socialListNotFound: 0, // 0
    +personalSiteNotFound: 1, // 1
    +cannotCreatePersonalSite: 2, // 2
    +noSocialFeatures: 3 // 3
  |};

  /**
   * Represents user properties.
   */
  declare class SP$UserProfiles$PersonProperties mixins SP$ClientObject {
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
    get_userUrl(): string;
  }

  /**
   * Provides an alternate entry point to user profiles rather than calling methods directly.
   */
  declare class SP$UserProfiles$ProfileLoader mixins SP$ClientObject {
    static getProfileLoader(
      context: SP$ClientRuntimeContext
    ): SP$UserProfiles$ProfileLoader;
    getUserProfile(): UserProfiles$UserProfile;
  }

  /**
   * Represents a client-side user profile for a person.
   * Note: The client-side UserProfile object provides methods you can use to create a personal site for the current user.
   * However, it does not contain the user properties that the server-side UserProfile object contains.
   * To access user properties from client-side code, use PeopleManager
   */
  declare class SP$UserProfiles$UserProfile mixins SP$ClientObject {
    constructor(): this;

    /**
     * Represents the content that the user is following.
     */
    get_followedContent(): UserProfiles$FollowedContent;

    /**
     * Retrieves SP.Site object that represents the user's personal site.
     */
    get_personalSite(): SP$Site;

    /**
     * Specifies attributes of the user's personal site.
     */
    get_personalSiteCapabilities(): $Values<
      typeof SP$UserProfiles$PersonalSiteCapabilities
    >;

    /**
     * Provides the state of the user's personal site
     */
    get_personalSiteInstantiationState(): $Values<
      typeof SP$UserProfiles$PersonalSiteInstantiationState
    >;

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
    createPersonalSiteEnque(isInteractive: boolean): void;
  }

  /**
   * Provides access to followed content items.
   */
  declare class SP$UserProfiles$FollowedContent mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext): this;
    static newObject(
      context: SP$ClientRuntimeContext
    ): SP$UserProfiles$FollowedContent;

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
     * The url parameter can identify an existing document or site using the url property of the original item.
     * The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
     * @param data Optional parameter that holds application-defined data for the item.
     */
    follow(
      url: string,
      data?: UserProfiles$FollowedItemData
    ): UserProfiles$FollowResult;

    /**
     * The FollowItem method is reserved for server-to-server use only.
     * The server sets the specified item to be followed by the current user.
     * This method cannot be called from the client.
     */
    followItem(item: UserProfiles$FollowedItem): UserProfiles$FollowResult;

    /**
     * Removes the specified document or site from list of followed content.
     * @param url URL that identifies the item to stop following.
     * The url parameter can identify an existing document or site using the url property of the original item.
     * The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
     */
    stopFollowing(url: string): void;

    /**
     * Determines if the specified document or site is being followed.
     * @param url URL that identifies the item that is supposed to be followed.
     * The url parameter can identify an existing document or site using the url property of the original item.
     * The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
     */
    isFollowed(url: string): SP$BooleanResult;

    /**
     * Retrieves the followed status of the specified document or site.
     * Returns a value of type FollowedStatus, wrapped into a SP.IntResult object.
     * @param url URL that identifies the followed item.
     * The url parameter can identify an existing document or site using the url property of the original item.
     * The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
     */
    getFollowedStatus(url: string): SP$IntResult;

    /**
     * Returns the followed item identified by a given URL or returns null if the item does not exist.
     * @param url URL that identifies the followed item.
     * The url parameter can identify an existing document or site using the url property of the original item.
     * The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
     */
    getItem(url: string): UserProfiles$FollowedItem;

    /**
     * Returns an array of zero or more followed items described by the type and subtype parameters.
     * @param options Describes the type of item to return.
     * @param subType Integer that identifies the sites to return by the web template.
     */
    getItems(
      options: $Values<typeof SP$UserProfiles$FollowedContentQueryOptions>,
      subtype: number
    ): UserProfiles$FollowedItem[];

    /**
     * Updates the properties for followed item with specified URL.
     * @param url URL that identifies the followed item.
     * The url parameter can identify an existing document or site using the url property of the original item.
     * The url parameter can also identify a document with the following format: http:// host/site?listId=<listGuid>&itemId=<itemId>
     * @param data Application-defined data stored with the followed item.
     */
    updateData(url: string, data: UserProfiles$FollowedItemData): void;

    /**
     * Returns the refreshed item that is being pointed to in the Social list.
     * @param item The original item as stored in the Followed Content list.
     */
    refreshFollowedItem(
      item: UserProfiles$FollowedItem
    ): UserProfiles$FollowedItem;

    /**
     * Finds the original item that is being pointed to in the Followed Content list and updates the Title, Url, and IconUrl fields if they have been changed.
     * @param url The URL of the original item as stored in the Followed Content list.
     */
    findAndUpdateFollowedItem(url: string): UserProfiles$FollowedItem;
  }

  /**
   * Represents a followed content resource.
   */
  declare class SP$UserProfiles$FollowedItem mixins SP$ClientValueObject {
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
    get_itemType(): $Values<typeof SP$UserProfiles$FollowedItemType>;

    /**
     * Specifies the type of this item.
     */
    set_itemType(
      value: $Values<typeof SP$UserProfiles$FollowedItemType>
    ): $Values<typeof SP$UserProfiles$FollowedItemType>;

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
    get_uniqueId(): SP$Guid;

    /**
     * Specifies the GUID for this item in the Content database.
     */
    set_uniqueId(value: SP$Guid): SP$Guid;

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
    get_webId(): SP$Guid;

    /**
     * Specifies the site identification (GUID) in the Content database for this item if it is a site, or the identification of its parent site if this item is a document.
     */
    set_webId(value: SP$Guid): any;
  }

  declare var SP$UserProfiles$FollowedItemType: {|
    +unknown: 0, // 0
    +document: 1, // 1
    +site: 2, // 2
    +all: 3 // 3
  |};

  declare var SP$UserProfiles$FollowedContentExceptionType: {|
    +itemAlreadyExists: 0, // 0
    +itemDoesNotExist: 1, // 1
    +invalidQueryString: 2, // 2
    +invalidSubtypeValue: 3, // 3
    +unsupportedItemType: 4, // 4
    +followLimitReached: 5, // 5
    +untrustedSource: 6, // 6
    +unsupportedSite: 7, // 7
    +internalError: 8 // 8
  |};

  declare var SP$UserProfiles$FollowedContentQueryOptions: {|
    +unset: 0, // 0
    +sites: 1, // 1
    +documents: 2, // 2
    +hidden: 3, // 3
    +nonFeed: 4, // 4
    +defaultOptions: 5, // 5
    +all: 6 // 6
  |};

  declare var SP$UserProfiles$FollowedStatus: {|
    +followed: 0, // 0
    +notFollowed: 1, // 1
    +notFollowable: 2 // 2
  |};

  /**
   * Contains additional data that can be attached to a FollowedItem object
   */
  declare class SP$UserProfiles$FollowedItemData mixins SP$ClientObject {
    /**
     * An unordered collection of key/value pairs for custom properties to be set on the item.
     */
    get_properties(): {
      [name: string]: any
    };
  }

  /**
   * Returns information about a request to follow an item.
   */
  declare class SP$UserProfiles$FollowResult mixins SP$ClientValueObject {
    /**
     * Contains the item being followed.
     */
    get_item(): SP$UserProfiles$FollowedItem;

    /**
     * Provides information about the attempt to follow an item.
     */
    get_resultType(): $Values<typeof SP$UserProfiles$FollowResultType>;
  }

  declare var SP$UserProfiles$FollowResultType: {|
    +unknown: 0, // 0
    +followed: 1, // 1
    +refollowed: 2, // 2
    +hitFollowLimit: 3, // 3
    +failed: 4 // 4
  |};

  /**
   * Represents a set of user profile properties for a specified user.
   */
  declare class SP$UserProfiles$UserProfilePropertiesForUser
    mixins SP$ClientObject {
    /**
     * Creates new UserProfilePropertiesForUser object
     * @param context Specifies the client context to use.
     * @param accountName Specifies the user by account name.
     * @param propertyNames Specifies an array of strings that specify the properties to retrieve.
     */
    constructor(
      context: SP$ClientContext,
      accountName: string,
      propertyNames: string[]
    ): this;

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
    getPropertyNames(): string[];
  }

  declare var npm$namespace$SP$Utilities: {
    DateTimeFormat: typeof SP$Utilities$DateTimeFormat,
    IconSize: typeof SP$Utilities$IconSize,
    LogAppErrorResult: typeof SP$Utilities$LogAppErrorResult,
    PrincipalSource: typeof SP$Utilities$PrincipalSource,
    PrincipalType: typeof SP$Utilities$PrincipalType,
    SPWOPIFrameAction: typeof SP$Utilities$SPWOPIFrameAction,
    Utility: typeof SP$Utilities$Utility,
    EmailProperties: typeof SP$Utilities$EmailProperties,
    PrincipalInfo: typeof SP$Utilities$PrincipalInfo,
    WikiPageCreationInformation: typeof SP$Utilities$WikiPageCreationInformation,
    DateUtility: typeof SP$Utilities$DateUtility,
    HttpUtility: typeof SP$Utilities$HttpUtility,
    UrlBuilder: typeof SP$Utilities$UrlBuilder,
    LocUtility: typeof SP$Utilities$LocUtility,
    VersionUtility: typeof SP$Utilities$VersionUtility,
    Set: typeof SP$Utilities$Set
  };
  declare class SP$Utilities$Utility {
    lAYOUTS_LATESTVERSION_RELATIVE_URL: string;
    lAYOUTS_LATESTVERSION_URL: string;
    static get_layoutsLatestVersionRelativeUrl(): string;
    static get_layoutsLatestVersionUrl(): string;
    static getLayoutsPageUrl(pageName: string): string;
    static getImageUrl(imageName: string): string;
    static createWikiPageInContextWeb(
      context: SP$ClientRuntimeContext,
      parameters: SP$Utilities$WikiPageCreationInformation
    ): SP$File;
    static localizeWebPartGallery(
      context: SP$ClientRuntimeContext,
      items: SP$ListItemCollection
    ): SP$ClientObjectList<SP$ListItem>;
    static getAppLicenseInformation(
      context: SP$ClientRuntimeContext,
      productId: SP$Guid
    ): SP$AppLicenseCollection;
    static importAppLicense(
      context: SP$ClientRuntimeContext,
      licenseTokenToImport: string,
      contentMarket: string,
      billingMarket: string,
      appName: string,
      iconUrl: string,
      providerName: string,
      appSubtype: number
    ): void;
    static getAppLicenseDeploymentId(
      context: SP$ClientRuntimeContext
    ): SP$GuidResult;
    static logCustomAppError(
      context: SP$ClientRuntimeContext,
      error: string
    ): SP$IntResult;
    static logCustomRemoteAppError(
      context: SP$ClientRuntimeContext,
      productId: SP$Guid,
      error: string
    ): SP$IntResult;
    static getLocalizedString(
      context: SP$ClientRuntimeContext,
      source: string,
      defaultResourceFile: string,
      language: number
    ): SP$StringResult;
    static createNewDiscussion<T>(
      context: SP$ClientRuntimeContext,
      list: SP$List,
      title: string
    ): SP$ListItem<T>;
    static createNewDiscussionReply<T>(
      context: SP$ClientRuntimeContext,
      parent: SP$ListItem<T>
    ): SP$ListItem<T>;
    static markDiscussionAsFeatured(
      context: SP$ClientRuntimeContext,
      listID: string,
      topicIDs: string
    ): void;
    static unmarkDiscussionAsFeatured(
      context: SP$ClientRuntimeContext,
      listID: string,
      topicIDs: string
    ): void;
    static searchPrincipals(
      context: SP$ClientRuntimeContext,
      web: SP$Web,
      input: string,
      scopes: $Values<typeof SP$Utilities$PrincipalType>,
      sources: $Values<typeof SP$Utilities$PrincipalSource>,
      usersContainer: SP$UserCollection,
      maxCount: number
    ): SP$Utilities$PrincipalInfo[];
    static getCurrentUserEmailAddresses(
      context: SP$ClientRuntimeContext
    ): SP$StringResult;
    static createEmailBodyForInvitation(
      context: SP$ClientRuntimeContext,
      pageAddress: string
    ): SP$StringResult;
    static getPeoplePickerURL(
      context: SP$ClientRuntimeContext,
      web: SP$Web,
      fieldUser: SP$FieldUser
    ): SP$StringResult;
    static resolvePrincipal(
      context: SP$ClientRuntimeContext,
      web: SP$Web,
      input: string,
      scopes: $Values<typeof SP$Utilities$PrincipalType>,
      sources: $Values<typeof SP$Utilities$PrincipalSource>,
      usersContainer: SP$UserCollection,
      inputIsEmailOnly: boolean
    ): SP$Utilities$PrincipalInfo;
    static getLowerCaseString(
      context: SP$ClientRuntimeContext,
      sourceValue: string,
      lcid: number
    ): SP$StringResult;
    static formatDateTime(
      context: SP$ClientRuntimeContext,
      web: SP$Web,
      datetime: Date,
      format: $Values<typeof SP$Utilities$DateTimeFormat>
    ): SP$StringResult;
    static isUserLicensedForEntityInContext(
      context: SP$ClientRuntimeContext,
      licensableEntity: string
    ): SP$BooleanResult;
  }

  declare var SP$Utilities$DateTimeFormat: {|
    +dateTime: 0, // 0
    +dateOnly: 1, // 1
    +timeOnly: 2, // 2
    +iSO8601: 3, // 3
    +monthDayOnly: 4, // 4
    +monthYearOnly: 5, // 5
    +longDate: 6, // 6
    +unknownFormat: 7 // 7
  |};

  declare class SP$Utilities$EmailProperties mixins SP$ClientValueObject {
    get_additionalHeaders(): any;
    set_additionalHeaders(value: any): void;
    get_bCC(): string[];
    set_bCC(value: string[]): void;
    get_body(): string;
    set_body(value: string): void;
    get_cC(): string[];
    set_cC(value: string[]): void;
    get_from(): string;
    set_from(value: string): void;
    get_subject(): string;
    set_subject(value: string): void;
    get_to(): string[];
    set_to(value: string[]): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$Utilities$IconSize: {|
    +size16: 0, // 0
    +size32: 1, // 1
    +size256: 2 // 2
  |};

  declare var SP$Utilities$LogAppErrorResult: {|
    +success: 0, // 0
    +errorsThrottled: 1, // 1
    +accessDenied: 2 // 2
  |};

  declare class SP$Utilities$PrincipalInfo mixins SP$ClientValueObject {
    get_department(): string;
    get_displayName(): string;
    get_email(): string;
    get_jobTitle(): string;
    get_loginName(): string;
    get_mobile(): string;
    get_principalId(): number;
    get_principalType(): $Values<typeof SP$Utilities$PrincipalType>;
    get_sIPAddress(): string;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare var SP$Utilities$PrincipalSource: {|
    +none: 0, // 0
    +userInfoList: 1, // 1
    +windows: 2, // 2
    +membershipProvider: 3, // 3
    +roleProvider: 4, // 4
    +all: 5 // 5
  |};

  declare var SP$Utilities$PrincipalType: {|
    +none: 0, // 0
    +user: 1, // 1
    +distributionList: 2, // 2
    +securityGroup: 3, // 3
    +sharePointGroup: 4, // 4
    +all: 5 // 5
  |};

  declare var SP$Utilities$SPWOPIFrameAction: {|
    +view: 0, // 0
    +edit: 1, // 1
    +mobileView: 2, // 2
    +interactivePreview: 3 // 3
  |};

  declare class SP$Utilities$WikiPageCreationInformation
    mixins SP$ClientValueObject {
    get_serverRelativeUrl(): string;
    set_serverRelativeUrl(value: string): void;
    get_wikiHtmlContent(): string;
    set_wikiHtmlContent(value: string): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$Utilities$DateUtility {
    static isLeapYear(year: number): boolean;
    static dateToJulianDay(year: number, month: number, day: number): number;
    static julianDayToDate(julianDay: number): SP$DateTimeUtil$SimpleDate;
    static daysInMonth(year: number, month: number): number;
  }

  declare class SP$Utilities$HttpUtility {
    /**
     * Official version of STSHtmlEncode. Calls it internally.
     */
    static htmlEncode(stringToEncode: string): string;
    static urlPathEncode(stringToEncode: string): string;
    static urlKeyValueEncode(keyOrValueToEncode: string): string;
    static ecmaScriptStringLiteralEncode(scriptLiteralToEncode: string): string;
    static navigateTo(url: string): void;

    /**
     * Appends correct "Source" parameter to the specified url, and then navigates to this url.
     * "Source" parameter is recognized in many places in SharePoint, usually to determine "Cancel" behavior.
     */
    static appendSourceAndNavigateTo(url: string): void;
    static escapeXmlText(stringToEscape: string): string;
    static navigateHttpFolder(urlSrc: string, frameTarget: string): void;
  }

  declare class SP$Utilities$UrlBuilder {
    constructor(path: string): this;
    static urlCombine(path1: string, path2: string): string;
    static replaceOrAddQueryString(
      url: string,
      key: string,
      value: string
    ): string;
    static removeQueryString(url: string, key: string): string;
    combinePath(path: string): void;
    addKeyValueQueryString(key: string, value: string): void;

    /**
     * Returns the resulting url
     */
    get_url(): string;

    /**
     * Same as get_url()
     */
    toString(): string;
  }

  declare class SP$Utilities$LocUtility {
    static getLocalizedCountValue(
      locText: string,
      intervals: string,
      count: number
    ): string;
  }

  declare class SP$Utilities$VersionUtility {
    static get_layoutsLatestVersionRelativeUrl(): string;
    static get_layoutsLatestVersionUrl(): string;
    static getLayoutsPageUrl(pageName: string): string;
    static getImageUrl(imageName: string): string;
  }

  declare class SP$Utilities$Set {
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
    AddArray(array: any[]): SP$Utilities$Set;

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
    Clear(): SP$Utilities$Set;

    /**
     * Returns true if item exists in this set
     */
    Contains(item: any): boolean;

    /**
     * Returns a copy of this set
     */
    Clone(): SP$Utilities$Set;

    /**
     * Returns a set that contains all the items that exist only in one of the sets (this and other), but not in both
     */
    SymmetricDifference(otherSet: SP$Utilities$Set): SP$Utilities$Set;

    /**
     * Returns a set that contains all the items that are in this set but not in the otherSet
     */
    Difference(otherSet: SP$Utilities$Set): SP$Utilities$Set;

    /**
     * Returns a new set, that contains items from this set and otherSet
     */
    Union(otherSet: SP$Utilities$Set): SP$Utilities$Set;

    /**
     * Adds all items from otherSet to this set, and returns this set
     */
    UnionWith(otherSet: SP$Utilities$Set): SP$Utilities$Set;

    /**
     * Returns a new set, that contains only items that exist both in this set and the otherSet
     */
    Intersection(otherSet: SP$Utilities$Set): SP$Utilities$Set;
  }

  declare var npm$namespace$SP$DateTimeUtil: {
    SimpleDate: typeof SP$DateTimeUtil$SimpleDate
  };
  declare class SP$DateTimeUtil$SimpleDate {
    constructor(year: number, month: number, day: number, era: number): this;
    get_year(): number;
    set_year(value: number): void;
    get_month(): number;
    set_month(value: number): void;
    get_day(): number;
    set_day(value: number): void;
    get_era(): number;
    set_era(value: number): void;
    static dateEquals(
      date1: SP$DateTimeUtil$SimpleDate,
      date2: SP$DateTimeUtil$SimpleDate
    ): boolean;
    static dateLessEqual(
      date1: SP$DateTimeUtil$SimpleDate,
      date2: SP$DateTimeUtil$SimpleDate
    ): boolean;
    static dateGreaterEqual(
      date1: SP$DateTimeUtil$SimpleDate,
      date2: SP$DateTimeUtil$SimpleDate
    ): boolean;
    static dateLess(
      date1: SP$DateTimeUtil$SimpleDate,
      date2: SP$DateTimeUtil$SimpleDate
    ): boolean;
    static dateGreater(
      date1: SP$DateTimeUtil$SimpleDate,
      date2: SP$DateTimeUtil$SimpleDate
    ): boolean;
  }

  declare var npm$namespace$SP$WebParts: {
    PersonalizationScope: typeof SP$WebParts$PersonalizationScope,
    LimitedWebPartManager: typeof SP$WebParts$LimitedWebPartManager,
    TileData: typeof SP$WebParts$TileData,
    WebPart: typeof SP$WebParts$WebPart,
    WebPartDefinition: typeof SP$WebParts$WebPartDefinition
  };
  declare class SP$WebParts$LimitedWebPartManager mixins SP$ClientObject {
    get_hasPersonalizedParts(): boolean;
    get_scope(): $Values<typeof SP$WebParts$PersonalizationScope>;
    get_webParts(): SP$WebParts$WebPartDefinitionCollection;
    addWebPart(
      webPart: SP$WebParts$WebPart,
      zoneId: string,
      zoneIndex: number
    ): SP$WebParts$WebPartDefinition;
    importWebPart(webPartXml: string): SP$WebParts$WebPartDefinition;
  }

  declare var SP$WebParts$PersonalizationScope: {|
    +user: 0, // 0
    +shared: 1 // 1
  |};

  declare class SP$WebParts$TileData mixins SP$ClientValueObject {
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
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$WebParts$WebPart mixins SP$ClientObject {
    get_hidden(): boolean;
    set_hidden(value: boolean): void;
    get_isClosed(): boolean;
    get_properties(): SP$PropertyValues;
    get_subtitle(): string;
    get_title(): string;
    set_title(value: string): void;
    get_titleUrl(): string;
    set_titleUrl(value: string): void;
    get_zoneIndex(): number;
  }

  declare class SP$WebParts$WebPartDefinition mixins SP$ClientObject {
    get_id(): SP$Guid;
    get_webPart(): SP$WebParts$WebPart;
    saveWebPartChanges(): void;
    closeWebPart(): void;
    openWebPart(): void;
    deleteWebPart(): void;
    moveWebPartTo(zoneID: string, zoneIndex: number): void;
  }

  declare type SP$WebParts$WebPartDefinitionCollection = {
    itemAt(index: number): SP$WebParts$WebPartDefinition,
    get_item(index: number): SP$WebParts$WebPartDefinition,
    getById(id: SP$Guid): SP$WebParts$WebPartDefinition,
    getByControlId(controlId: string): SP$WebParts$WebPartDefinition
  } & SP$ClientObjectCollection<SP$WebParts$WebPartDefinition>;

  declare var npm$namespace$SP$Workflow: {
    WorkflowAssociation: typeof SP$Workflow$WorkflowAssociation,
    WorkflowAssociationCreationInformation: typeof SP$Workflow$WorkflowAssociationCreationInformation,
    WorkflowTemplate: typeof SP$Workflow$WorkflowTemplate
  };
  declare class SP$Workflow$WorkflowAssociation mixins SP$ClientObject {
    get_allowManual(): boolean;
    set_allowManual(value: boolean): void;
    get_associationData(): string;
    set_associationData(value: string): void;
    get_autoStartChange(): boolean;
    set_autoStartChange(value: boolean): void;
    get_autoStartCreate(): boolean;
    set_autoStartCreate(value: boolean): void;
    get_baseId(): SP$Guid;
    get_created(): Date;
    get_description(): string;
    set_description(value: string): void;
    get_enabled(): boolean;
    set_enabled(value: boolean): void;
    get_historyListTitle(): string;
    set_historyListTitle(value: string): void;
    get_id(): SP$Guid;
    get_instantiationUrl(): string;
    get_internalName(): string;
    get_isDeclarative(): boolean;
    get_listId(): SP$Guid;
    get_modified(): Date;
    get_name(): string;
    set_name(value: string): void;
    get_taskListTitle(): string;
    set_taskListTitle(value: string): void;
    get_webId(): SP$Guid;
    update(): void;
    deleteObject(): void;
  }

  declare type SP$Workflow$WorkflowAssociationCollection = {
    itemAt(index: number): SP$Workflow$WorkflowAssociation,
    get_item(index: number): SP$Workflow$WorkflowAssociation,
    getById(associationId: SP$Guid): SP$Workflow$WorkflowAssociation,
    add(
      parameters: SP$Workflow$WorkflowAssociationCreationInformation
    ): SP$Workflow$WorkflowAssociation,
    getByName(name: string): SP$Workflow$WorkflowAssociation
  } & SP$ClientObjectCollection<SP$Workflow$WorkflowAssociation>;

  declare class SP$Workflow$WorkflowAssociationCreationInformation
    mixins SP$ClientValueObject {
    get_contentTypeAssociationHistoryListName(): string;
    set_contentTypeAssociationHistoryListName(value: string): void;
    get_contentTypeAssociationTaskListName(): string;
    set_contentTypeAssociationTaskListName(value: string): void;
    get_historyList(): SP$List;
    set_historyList(value: SP$List): void;
    get_name(): string;
    set_name(value: string): void;
    get_taskList(): SP$List;
    set_taskList(value: SP$List): void;
    get_template(): SP$Workflow$WorkflowTemplate;
    set_template(value: SP$Workflow$WorkflowTemplate): void;
    get_typeId(): string;
    writeToXml(
      writer: SP$XmlWriter,
      serializationContext: SP$SerializationContext
    ): void;
    constructor(): this;
  }

  declare class SP$Workflow$WorkflowTemplate mixins SP$ClientObject {
    get_allowManual(): boolean;
    get_associationUrl(): string;
    get_autoStartChange(): boolean;
    get_autoStartCreate(): boolean;
    get_description(): string;
    get_id(): SP$Guid;
    get_isDeclarative(): boolean;
    get_name(): string;
    get_permissionsManual(): SP$BasePermissions;
  }

  declare type SP$Workflow$WorkflowTemplateCollection = {
    itemAt(index: number): SP$Workflow$WorkflowTemplate,
    get_item(index: number): SP$Workflow$WorkflowTemplate,
    getById(templateId: SP$Guid): SP$Workflow$WorkflowTemplate,
    getByName(name: string): SP$Workflow$WorkflowTemplate
  } & SP$ClientObjectCollection<SP$Workflow$WorkflowTemplate>;

  declare var npm$namespace$SP$WorkflowServices: {
    WorkflowStatus: typeof SP$WorkflowServices$WorkflowStatus,
    InteropService: typeof SP$WorkflowServices$InteropService,
    WorkflowDefinition: typeof SP$WorkflowServices$WorkflowDefinition,
    WorkflowDeploymentService: typeof SP$WorkflowServices$WorkflowDeploymentService,
    WorkflowInstance: typeof SP$WorkflowServices$WorkflowInstance,
    WorkflowInstanceService: typeof SP$WorkflowServices$WorkflowInstanceService,
    WorkflowServicesManager: typeof SP$WorkflowServices$WorkflowServicesManager,
    WorkflowSubscription: typeof SP$WorkflowServices$WorkflowSubscription,
    WorkflowSubscriptionService: typeof SP$WorkflowServices$WorkflowSubscriptionService
  };

  declare var SP$WorkflowServices$WorkflowStatus: {|
    +notStarted: 0, // 0
    +started: 1, // 1
    +suspended: 2, // 2
    +canceling: 3, // 3
    +canceled: 4, // 4
    +terminated: 5, // 5
    +completed: 6, // 6
    +notSpecified: 7, // 7
    +invalid: 8 // 8
  |};

  declare class SP$WorkflowServices$InteropService mixins SP$ClientObject {
    constructor(
      context: SP$ClientRuntimeContext,
      objectPath: SP$ObjectPathStaticProperty
    ): this;
    static getCurrent(
      context: SP$ClientRuntimeContext
    ): SP$WorkflowServices$InteropService;
    enableEvents(listId: SP$Guid, itemGuid: SP$Guid): void;
    disableEvents(listId: SP$Guid, itemGuid: SP$Guid): void;
    startWorkflow(
      associationName: string,
      correlationId: SP$Guid,
      listId: SP$Guid,
      itemGuid: SP$Guid,
      workflowParameters: any
    ): SP$GuidResult;
    cancelWorkflow(instanceId: SP$Guid): void;
  }

  /**
   * Represents a workflow definition and associated properties.
   */
  declare class SP$WorkflowServices$WorkflowDefinition mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext): this;

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
    initPropertiesFromJson(parentNode: any): void;
  }

  /**
   * Represents a collection of WorkflowDefinition objects
   */
  declare type SP$WorkflowServices$WorkflowDefinitionCollection = {
    itemAt(index: number): SP$WorkflowServices$WorkflowDefinition,
    get_item(index: number): SP$WorkflowServices$WorkflowDefinition,

    /**
     * returns SP.WorkflowDefinition class
     */
    get_childItemType(): any
  } & SP$ClientObjectCollection<SP$WorkflowServices$WorkflowDefinition>;

  /**
   * Manages workflow definitions and workflow activity authoring.
   */
  declare class SP$WorkflowServices$WorkflowDeploymentService
    mixins SP$ClientObject {
    /**
     * Returns an XML representation of a list of valid Workflow Manager Client 1.0 actions for the specified web (WorkflowInfo element).
     */
    getDesignerActions(web: SP$Web): SP$StringResult;

    /**
     * Returns an XML representation of a collection of XAML class signatures for workflow definitions.
     * @param lastChanges Date time value representing the latest changes; class signatures older than this time are excluded from the result set.
     */
    getActivitySignatures(lastChanged: string): SP$ClientResult<any>;

    /**
     * Saves a SharePoint workflow definition to the workflow store.
     */
    saveDefinition(
      definition: SP$WorkflowServices$WorkflowDefinition
    ): SP$GuidResult;

    /**
     * Validates the specified activity against workflow definitions in the workflow store.
     */
    validateActivity(activityXaml: string): SP$StringResult;

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
    enumerateDefinitions(
      publishedOnly: boolean
    ): SP$WorkflowServices$WorkflowDefinitionCollection;

    /**
     * Retrieves a specified workflow definition from the workflow store.
     * @param definitionId The guid identifier of the workflow definition.
     */
    getDefinition(definitionId: string): SP$WorkflowServices$WorkflowDefinition;

    /**
     * Saves the collateral file of a workflow definition.
     * @param workflowDefinitionId The guid identifier of the workflow definition.
     */
    saveCollateral(
      workflowDefinitionId: string,
      leafFileName: string,
      fileContent: SP$Base64EncodedByteArray
    ): void;

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
    getCollateralUri(
      workflowDefinitionId: string,
      leafFileName: string
    ): SP$StringResult;

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
      definitionId: SP$Guid,
      packageDefaultFilename: string,
      packageTitle: string,
      packageDescription: string
    ): SP$StringResult;
  }

  /**
   * Represents an instance of a workflow association that performs on a list item the process that is defined in a workflow template
   */
  declare class SP$WorkflowServices$WorkflowInstance mixins SP$ClientObject {
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
    get_status(): $Values<typeof SP$WorkflowServices$WorkflowStatus>;

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
    get_workflowSubscriptionId(): SP$Guid;

    /**
     * This method is internal and is not intended to be used in your code.
     */
    initPropertiesFromJson(parentNode: any): void;
  }

  /**
   * Represents a collection of WorkflowInstance objects
   */
  declare type SP$WorkflowServices$WorkflowInstanceCollection = {
    itemAt(index: number): SP$WorkflowServices$WorkflowInstance,
    get_item(index: number): SP$WorkflowServices$WorkflowInstance,

    /**
     * returns SP.WorkflowInstance class
     */
    get_childItemType(): any
  } & SP$ClientObjectCollection<SP$WorkflowServices$WorkflowInstance>;

  /**
   * Reads the SharePoint workflow instances from the external workflow host and manages the instance execution.
   */
  declare class SP$WorkflowServices$WorkflowInstanceService
    mixins SP$ClientObject {
    /**
     * Starts a Workflow Manager Client 1.0 instance specified by the subscription and passes the supplied parameters.
     * Returns GUID of the instance object.
     * @param payload Object that contains name-value pairs of parameter names and values to pass into the workflow instance.
     */
    startWorkflow(
      subscription: WorkflowServices$WorkflowSubscription,
      payload: {
        [name: string]: any
      }
    ): SP$GuidResult;

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
      }
    ): SP$GuidResult;

    /**
     * Gets workflow instance specified by the provided instance GUID
     */
    getInstance(instanceId: string): SP$WorkflowServices$WorkflowInstance;

    /**
     * Gets a workflow instance collection comprising the 100 most recent workflow instances started by a specified subscription.
     */
    enumerate(
      parentSubscription: WorkflowServices$WorkflowSubscription
    ): SP$WorkflowServices$WorkflowInstanceCollection;

    /**
     * Gets a workflow instance collection comprising 100 workflow instances starting at the specified offset.
     */
    enumerateWithOffset(
      parentSubscription: WorkflowServices$WorkflowSubscription,
      offset: number
    ): SP$WorkflowServices$WorkflowInstanceCollection;

    /**
     * Gets the list of instances for the specified list item.
     */
    enumerateInstancesForListItem(
      listId: string,
      itemId: number
    ): SP$WorkflowServices$WorkflowInstanceCollection;

    /**
     * Gets the list of instances for the specified list item.
     */
    enumerateInstancesForListItemWithOffset(
      listId: string,
      itemId: number,
      offset: number
    ): SP$WorkflowServices$WorkflowInstanceCollection;

    /**
     * Gets the list of instances for the current site.
     */
    enumerateInstancesForSite(): SP$WorkflowServices$WorkflowInstanceCollection;

    /**
     * Gets the list of instances for the current site.
     */
    enumerateInstancesForSiteWithOffset(
      offset: number
    ): SP$WorkflowServices$WorkflowInstanceCollection;

    /**
     * Retrieves a count of all the instances of the specified WorkflowSubscription.
     */
    countInstances(
      parentSubscription: WorkflowServices$WorkflowSubscription
    ): SP$IntResult;

    /**
     * Retrieves a count of the instances of the specified WorkflowSubscription that have a specified status.
     */
    countInstancesWithStatus(
      parentSubscription: WorkflowServices$WorkflowSubscription,
      status: $Values<typeof SP$WorkflowServices$WorkflowStatus>
    ): SP$IntResult;

    /**
     * Sends a cancel message to the specified workflow instance and permits the instance to execute a cancellation scope.
     */
    cancelWorkflow(instance: SP$WorkflowServices$WorkflowInstance): void;

    /**
     * Terminate a workflow instance forcefully by deleting it from memory. The instance is not allowed to execute a cancellation scope
     */
    terminateWorkflow(instance: SP$WorkflowServices$WorkflowInstance): void;
    suspendWorkflow(instance: SP$WorkflowServices$WorkflowInstance): void;
    resumeWorkflow(instance: SP$WorkflowServices$WorkflowInstance): void;

    /**
     * Sends a custom event to a running workflow with the event payload.
     */
    publishCustomEvent(
      instance: SP$WorkflowServices$WorkflowInstance,
      eventName: string,
      payload: string
    ): void;
    getDebugInfo(
      instance: SP$WorkflowServices$WorkflowInstance
    ): SP$StringResult;
  }

  /**
   * Describes the workflow host configuration states and provides service objects that interact with the workflow
   */
  declare class SP$WorkflowServices$WorkflowServicesManager
    mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext, web: SP$Web): this;
    static newObject(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$WorkflowServices$WorkflowServicesManager;

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
    getWorkflowDeploymentService(): SP$WorkflowServices$WorkflowDeploymentService;
    getWorkflowInstanceService(): SP$WorkflowServices$WorkflowInstanceService;
    getWorkflowInteropService(): SP$WorkflowServices$InteropService;
    getWorkflowSubscriptionService(): WorkflowServices$WorkflowSubscriptionService;

    /**
     * This method is internal and is not intended to be used in your code.
     */
    initPropertiesFromJson(parentNode: any): void;
  }

  /**
   * Base class representing subscriptions for the external workflow host.
   */
  declare class SP$WorkflowServices$WorkflowSubscription
    mixins SP$ClientObject {
    /**
     * Gets the unique ID of the workflow definition to activate.
     */
    get_definitionId(): SP$Guid;

    /**
     * Sets the unique ID of the workflow definition to activate.
     */
    set_definitionId(value: SP$Guid): SP$Guid;

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
    initPropertiesFromJson(parentNode: any): void;
  }

  /**
   * Represents a collection of WorkflowSubscription objects
   */
  declare type SP$WorkflowServices$WorkflowSubscriptionCollection = {
    itemAt(index: number): SP$WorkflowServices$WorkflowSubscription,
    get_item(index: number): SP$WorkflowServices$WorkflowSubscription,

    /**
     * returns SP.WorkflowInstance class
     */
    get_childItemType(): any
  } & SP$ClientObjectCollection<SP$WorkflowServices$WorkflowSubscription>;

  declare class SP$WorkflowServices$WorkflowSubscriptionService
    mixins SP$ClientObject {
    constructor(
      context: SP$ClientRuntimeContext,
      objectPath: SP$ObjectPathStaticProperty
    ): this;
    static getCurrent(
      context: SP$ClientRuntimeContext
    ): SP$WorkflowServices$WorkflowSubscriptionService;

    /**
     * Creates a workflow subscription for a workflow, and returns the unique identifier of the new subscription.
     */
    publishSubscription(
      subscription: SP$WorkflowServices$WorkflowSubscription
    ): SP$GuidResult;

    /**
     * Creates a workflow subscription for a workflow and if necessary an event receiver on the specified list.
     * Also writes an EventSourceId that matches the list as the event source.
     * Returns the unique identifier of the new subscription.
     * @param listId Unique identifier (GUID) for the specified list.
     */
    publishSubscriptionForList(
      subscription: SP$WorkflowServices$WorkflowSubscription,
      listId: string
    ): SP$GuidResult;

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
    getSubscription(
      subscriptionId: SP$Guid
    ): SP$WorkflowServices$WorkflowSubscription;
    deleteSubscription(
      subscriptionId: SP$Guid
    ): SP$WorkflowServices$WorkflowSubscription;

    /**
     * Retrieves workflow subscriptions that contains all of the workflow subscriptions on the Web
     */
    enumerateSubscriptions(): SP$WorkflowServices$WorkflowSubscriptionCollection;

    /**
     * Retrieves workflow subscriptions based on workflow definition
     */
    enumerateSubscriptionsByDefinition(
      definitionId: string
    ): SP$WorkflowServices$WorkflowSubscriptionCollection;

    /**
     * Retrieves workflow subscriptions based on the specified EventSourceId
     */
    enumerateSubscriptionsByEventSource(
      eventSourceId: string
    ): SP$WorkflowServices$WorkflowSubscriptionCollection;

    /**
     * Retrieves workflow subscriptions based on the specified list.
     * @param listId The unique identifier (GUID) of the list on which to filter the subscriptions.
     */
    enumerateSubscriptionsByList(
      listId: string
    ): SP$WorkflowServices$WorkflowSubscriptionCollection;
  }

  declare var npm$namespace$SP$Publishing: {
    PublishingWeb: typeof SP$Publishing$PublishingWeb,
    PublishingPageInformation: typeof SP$Publishing$PublishingPageInformation,
    PublishingPage: typeof SP$Publishing$PublishingPage,
    ScheduledItem: typeof SP$Publishing$ScheduledItem,
    PublishingSite: typeof SP$Publishing$PublishingSite,
    PageLayoutCreationInformation: typeof SP$Publishing$PageLayoutCreationInformation,
    SiteServicesAddins: typeof SP$Publishing$SiteServicesAddins,
    AddinSettings: typeof SP$Publishing$AddinSettings,
    AddinPlugin: typeof SP$Publishing$AddinPlugin,
    DesignPackage: typeof SP$Publishing$DesignPackage,
    DesignPackageInfo: typeof SP$Publishing$DesignPackageInfo,
    SiteImageRenditions: typeof SP$Publishing$SiteImageRenditions,
    ImageRendition: typeof SP$Publishing$ImageRendition,
    Variations: typeof SP$Publishing$Variations,
    VariationLabel: typeof SP$Publishing$VariationLabel,
    CustomizableString: typeof SP$Publishing$CustomizableString,
    Navigation: typeof npm$namespace$SP$Publishing$Navigation
  };
  declare class SP$Publishing$PublishingWeb mixins SP$ClientObject {
    static getPublishingWeb(
      context: SP$ClientContext,
      web: SP$Web
    ): SP$Publishing$PublishingWeb;
    get_web(): SP$Web;
    addPublishingPage(
      pageInformation: Publishing$PublishingPageInformation
    ): Publishing$PublishingPage;
  }

  declare class SP$Publishing$PublishingPageInformation
    mixins SP$ClientValueObject {
    get_folder(): SP$Folder;
    set_folder(value: SP$Folder): SP$Folder;
    get_name(): string;
    set_name(value: string): string;
    get_pageLayoutListItem(): SP$ListItem;
    set_pageLayoutListItem(value: SP$ListItem): SP$ListItem;
  }

  declare class SP$Publishing$PublishingPage
    mixins SP$Publishing$ScheduledItem {
    static getPublishingPage(
      context: SP$ClientContext,
      sourceListItem: SP$ListItem
    ): SP$Publishing$PublishingPage;
    addFriendlyUrl(
      friendlyUrlSegment: string,
      editableParent: SP$Publishing$Navigation$NavigationTermSetItem,
      doAddToNavigation: boolean
    ): SP$StringResult;
  }

  declare class SP$Publishing$ScheduledItem mixins SP$ClientObject {
    get_listItem(): SP$ListItem;
    get_startDate(): Date;
    set_startDate(value: Date): Date;
    get_endDate(): Date;
    set_endDate(value: Date): Date;
    schedule(approvalComment: string): void;
  }

  declare class SP$Publishing$PublishingSite mixins SP$ClientObject {
    static createPageLayout(
      context: SP$ClientContext,
      parameters: Publishing$PageLayoutCreationInformation
    ): void;
  }

  declare class SP$Publishing$PageLayoutCreationInformation
    mixins SP$ClientValueObject {
    get_web(): SP$Web;
    set_web(value: SP$Web): SP$Web;
    get_associatedContentTypeId(): string;
    set_associatedContentTypeId(value: string): string;
    get_masterPageUrl(): string;
    set_masterPageUrl(value: string): string;
    get_newPageLayoutNameWithoutExtension(): string;
    set_newPageLayoutNameWithoutExtension(value: string): string;
    get_newPageLayoutEditablePath(): string;
    set_newPageLayoutEditablePath(value: string): string;
  }

  declare class SP$Publishing$SiteServicesAddins {
    static getSettings(
      context: SP$ClientContext,
      addinId: SP$Guid
    ): Publishing$AddinSettings;
    static setSettings(
      context: SP$ClientContext,
      addin: Publishing$AddinSettings
    ): void;
    static deleteSettings(context: SP$ClientContext, addinId: SP$Guid): void;
    static getPlugin(
      context: SP$ClientContext,
      pluginName: string
    ): Publishing$AddinPlugin;
    static setPlugin(
      context: SP$ClientContext,
      addin: Publishing$AddinPlugin
    ): void;
    static deletePlugin(context: SP$ClientContext, pluginName: string): void;
  }

  declare class SP$Publishing$AddinSettings mixins SP$ClientObject {
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
    };
  }

  declare class SP$Publishing$AddinPlugin mixins SP$ClientObject {
    constructor(ctx: SP$ClientContext): this;
    get_description(): string;
    set_description(value: string): string;
    get_markup(): string;
    set_markup(value: string): string;
    get_title(): string;
    set_title(value: string): string;
  }

  declare class SP$Publishing$DesignPackage {
    static install(
      context: SP$ClientContext,
      site: SP$Site,
      info: Publishing$DesignPackageInfo,
      path: string
    ): void;
    static uninstall(
      context: SP$ClientContext,
      site: SP$Site,
      info: Publishing$DesignPackageInfo
    ): void;
    static apply(
      context: SP$ClientContext,
      site: SP$Site,
      info: Publishing$DesignPackageInfo
    ): void;
    static exportEnterprise(
      context: SP$ClientContext,
      site: SP$Site,
      includeSearchConfiguration: boolean
    ): SP$ClientResult<Publishing$DesignPackageInfo>;
    static exportSmallBusiness(
      context: SP$ClientContext,
      site: SP$Site,
      packageName: string,
      includeSearchConfiguration: boolean
    ): SP$ClientResult<Publishing$DesignPackageInfo>;
  }

  declare class SP$Publishing$DesignPackageInfo mixins SP$ClientValueObject {
    get_packageName(): string;
    set_packageName(value: string): string;
    get_packageGuid(): SP$Guid;
    set_packageGuid(value: SP$Guid): SP$Guid;
    get_majorVersion(): number;
    set_majorVersion(value: number): number;
    get_minorVersion(): number;
    set_minorVersion(value: number): number;
  }

  declare class SP$Publishing$SiteImageRenditions {
    static getRenditions(
      context: SP$ClientContext
    ): Publishing$ImageRendition[];
    static setRenditions(
      context: SP$ClientContext,
      renditions: Publishing$ImageRendition[]
    ): void;
  }

  declare class SP$Publishing$ImageRendition mixins SP$ClientValueObject {
    get_id(): number;
    get_version(): number;
    get_name(): string;
    set_name(value: string): string;
    get_width(): number;
    set_width(value: number): number;
    get_height(): number;
    set_height(value: number): number;
  }

  declare class SP$Publishing$Variations mixins SP$ClientObject {
    static getLabels(
      context: SP$ClientContext
    ): SP$ClientObjectList<Publishing$VariationLabel>;
    static getPeerUrl(
      context: SP$ClientContext,
      currentUrl: string,
      labelTitle: string
    ): SP$StringResult;
    static updateListItems(
      context: SP$ClientContext,
      listId: SP$Guid,
      itemIds: number[]
    ): void;
  }

  declare class SP$Publishing$VariationLabel mixins SP$ClientObject {
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
    set_topWebUrl(value: string): string;
  }

  declare class SP$Publishing$CustomizableString mixins SP$ClientObject {
    get_defaultValue(): string;
    get_value(): string;
    set_value(value: string): string;
    get_usesDefaultValue(): boolean;
    set_usesDefaultValue(value: boolean): boolean;
  }

  declare var npm$namespace$SP$Publishing$Navigation: {
    NavigationLinkType: typeof SP$Publishing$Navigation$NavigationLinkType,
    StandardNavigationSource: typeof SP$Publishing$Navigation$StandardNavigationSource,
    NavigationTermSetItem: typeof SP$Publishing$Navigation$NavigationTermSetItem,
    NavigationTerm: typeof SP$Publishing$Navigation$NavigationTerm,
    NavigationTermSet: typeof SP$Publishing$Navigation$NavigationTermSet,
    NavigationTermSetView: typeof SP$Publishing$Navigation$NavigationTermSetView,
    TaxonomyNavigation: typeof SP$Publishing$Navigation$TaxonomyNavigation,
    WebNavigationSettings: typeof SP$Publishing$Navigation$WebNavigationSettings,
    StandardNavigationSettings: typeof SP$Publishing$Navigation$StandardNavigationSettings
  };

  declare var SP$Publishing$Navigation$NavigationLinkType: {|
    +root: 0, // 0
    +friendlyUrl: 1, // 1
    +simpleLink: 2 // 2
  |};

  declare var SP$Publishing$Navigation$StandardNavigationSource: {|
    +unknown: 0, // 0
    +portalProvider: 1, // 1
    +taxonomyProvider: 2, // 2
    +inheritFromParentWeb: 3 // 3
  |};

  declare class SP$Publishing$Navigation$NavigationTermSetItem
    mixins SP$ClientObject {
    get_id(): SP$Guid;
    get_isReadOnly(): boolean;
    get_linkType(): $Values<typeof SP$Publishing$Navigation$NavigationLinkType>;
    set_linkType(
      value: $Values<typeof SP$Publishing$Navigation$NavigationLinkType>
    ): $Values<typeof SP$Publishing$Navigation$NavigationLinkType>;
    get_targetUrlForChildTerms(): SP$Publishing$CustomizableString;
    get_catalogTargetUrlForChildTerms(): SP$Publishing$CustomizableString;
    get_taxonomyName(): string;
    get_title(): SP$Publishing$CustomizableString;
    get_terms(): Navigation$NavigationTermCollection;
    get_view(): Navigation$NavigationTermSetView;
    createTerm(
      termName: string,
      linkType: $Values<typeof SP$Publishing$Navigation$NavigationLinkType>,
      termId: SP$Guid
    ): SP$Taxonomy$Term;
    getTaxonomyTermStore(): SP$Taxonomy$TermStore;
    getResolvedDisplayUrl(browserQueryString: string): SP$StringResult;
  }

  declare type SP$Publishing$Navigation$NavigationTermCollection = {} & SP$ClientObjectCollection<Navigation$NavigationTerm>;

  declare class SP$Publishing$Navigation$NavigationTerm
    mixins SP$Publishing$Navigation$NavigationTermSetItem {
    get_associatedFolderUrl(): string;
    set_associatedFolderUrl(value: string): string;
    get_catalogTargetUrl(): SP$Publishing$CustomizableString;
    get_categoryImageUrl(): string;
    set_categoryImageUrl(value: string): string;
    get_excludedProviders(): Navigation$NavigationTermProviderNameCollection;
    get_excludeFromCurrentNavigation(): boolean;
    set_excludeFromCurrentNavigation(value: boolean): boolean;
    get_excludeFromGlobalNavigation(): boolean;
    set_excludeFromGlobalNavigation(value: boolean): boolean;
    get_friendlyUrlSegment(): SP$Publishing$CustomizableString;
    get_hoverText(): string;
    set_hoverText(value: string): string;
    get_isDeprecated(): boolean;
    get_isPinned(): boolean;
    get_isPinnedRoot(): boolean;
    get_parent(): SP$Publishing$Navigation$NavigationTerm;
    get_simpleLinkUrl(): string;
    set_simpleLinkUrl(value: string): string;
    get_targetUrl(): SP$Publishing$CustomizableString;
    get_termSet(): Navigation$NavigationTermSet;
    getAsEditable(
      taxonomySession: SP$Taxonomy$TaxonomySession
    ): SP$Publishing$Navigation$NavigationTerm;
    getWithNewView(
      newView: Navigation$NavigationTermSetView
    ): SP$Publishing$Navigation$NavigationTerm;
    getResolvedTargetUrl(
      browserQueryString: string,
      remainingUrlSegments: string[]
    ): SP$StringResult;
    getResolvedTargetUrlWithoutQuery(): SP$StringResult;
    getResolvedAssociatedFolderUrl(): SP$StringResult;
    getWebRelativeFriendlyUrl(): SP$StringResult;
    getAllParentTerms(): SP$Publishing$Navigation$NavigationTermCollection;
    getTaxonomyTerm(): SP$Taxonomy$Term;
    move(newParent: SP$Publishing$Navigation$NavigationTermSetItem): void;
    deleteObject(): void;
    static getAsResolvedByWeb(
      context: SP$ClientContext,
      term: SP$Taxonomy$Term,
      web: SP$Web,
      siteMapProviderName: string
    ): SP$Publishing$Navigation$NavigationTerm;
    static getAsResolvedByView(
      context: SP$ClientContext,
      term: SP$Taxonomy$Term,
      view: Navigation$NavigationTermSetView
    ): SP$Publishing$Navigation$NavigationTerm;
  }

  declare class SP$Publishing$Navigation$NavigationTermSet
    mixins SP$Publishing$Navigation$NavigationTermSetItem {
    get_isNavigationTermSet(): boolean;
    set_isNavigationTermSet(value: boolean): boolean;
    get_lcid(): number;
    get_loadedFromPersistedData(): boolean;
    get_termGroupId(): SP$Guid;
    get_termStoreId(): SP$Guid;
    getAsEditable(
      taxonomySession: SP$Taxonomy$TaxonomySession
    ): SP$Publishing$Navigation$NavigationTermSet;
    getWithNewView(
      newView: Navigation$NavigationTermSetView
    ): SP$Publishing$Navigation$NavigationTermSet;
    getTaxonomyTermSet(): SP$Taxonomy$TermSet;
    getAllTerms(): SP$Publishing$Navigation$NavigationTermCollection;
    findTermForUrl(url: string): SP$Publishing$Navigation$NavigationTerm;
    static getAsResolvedByWeb(
      context: SP$ClientContext,
      termSet: SP$Taxonomy$TermSet,
      web: SP$Web,
      siteMapProviderName: string
    ): SP$Publishing$Navigation$NavigationTermSet;
    static getAsResolvedByView(
      context: SP$ClientContext,
      termSet: SP$Taxonomy$TermSet,
      view: Navigation$NavigationTermSetView
    ): SP$Publishing$Navigation$NavigationTermSet;
  }

  declare type SP$Publishing$Navigation$NavigationTermProviderNameCollection = {
    Add(item: string): void,
    Clear(): void,
    Remove(item: string): SP$BooleanResult
  } & SP$ClientObjectCollection<string>;

  declare class SP$Publishing$Navigation$NavigationTermSetView
    mixins SP$ClientObject {
    constructor(
      context: SP$ClientContext,
      web: SP$Web,
      siteMapProviderName: string
    ): this;
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
    getCopy(): SP$Publishing$Navigation$NavigationTermSetView;
    static createEmptyInstance(
      context: SP$ClientContext
    ): SP$Publishing$Navigation$NavigationTermSetView;
  }

  declare class SP$Publishing$Navigation$TaxonomyNavigation {
    static getWebNavigationSettings(
      context: SP$ClientContext,
      web: SP$Web
    ): Navigation$WebNavigationSettings;
    static getTermSetForWeb(
      context: SP$ClientContext,
      web: SP$Web,
      siteMapProviderName: string,
      includeInheritedSettings: boolean
    ): SP$Publishing$Navigation$NavigationTermSet;
    static setCrawlAsFriendlyUrlPage(
      context: SP$ClientContext,
      navigationTerm: SP$Taxonomy$Term,
      crawlAsFriendlyUrlPage: boolean
    ): SP$BooleanResult;
    static getNavigationLcidForWeb(
      context: SP$ClientContext,
      web: SP$Web
    ): SP$IntResult;
    static flushSiteFromCache(context: SP$ClientContext, site: SP$Site): void;
    static flushWebFromCache(context: SP$ClientContext, web: SP$Web): void;
    static flushTermSetFromCache(
      context: SP$ClientContext,
      webForPermissions: SP$Web,
      termStoreId: SP$Guid,
      termSetId: SP$Guid
    ): void;
  }

  declare class SP$Publishing$Navigation$WebNavigationSettings
    mixins SP$ClientObject {
    constructor(context: SP$ClientContext, web: SP$Web): this;
    get_addNewPagesToNavigation(): boolean;
    set_addNewPagesToNavigation(value: boolean): boolean;
    get_createFriendlyUrlsForNewPages(): boolean;
    set_createFriendlyUrlsForNewPages(value: boolean): boolean;
    get_currentNavigation(): Navigation$StandardNavigationSettings;
    get_globalNavigation(): Navigation$StandardNavigationSettings;
    update(taxonomySession: SP$Taxonomy$TaxonomySession): void;
    resetToDefaults(): void;
  }

  declare class SP$Publishing$Navigation$StandardNavigationSettings
    mixins SP$ClientObject {
    get_termSetId(): SP$Guid;
    set_termSetId(value: SP$Guid): SP$Guid;
    get_termStoreId(): SP$Guid;
    set_termStoreId(value: SP$Guid): SP$Guid;
    get_source(): $Values<
      typeof SP$Publishing$Navigation$StandardNavigationSource
    >;
    set_source(
      value: $Values<typeof SP$Publishing$Navigation$StandardNavigationSource>
    ): $Values<typeof SP$Publishing$Navigation$StandardNavigationSource>;
  }

  declare var npm$namespace$SP$CompliancePolicy: {
    SPContainerType: typeof SP$CompliancePolicy$SPContainerType,
    SPContainerId: typeof SP$CompliancePolicy$SPContainerId,
    SPPolicyAssociation: typeof SP$CompliancePolicy$SPPolicyAssociation,
    SPPolicyBinding: typeof SP$CompliancePolicy$SPPolicyBinding,
    SPPolicyDefinition: typeof SP$CompliancePolicy$SPPolicyDefinition,
    SPPolicyRule: typeof SP$CompliancePolicy$SPPolicyRule,
    SPPolicyStore: typeof SP$CompliancePolicy$SPPolicyStore,
    SPPolicyStoreProxy: typeof SP$CompliancePolicy$SPPolicyStoreProxy
  };

  declare var SP$CompliancePolicy$SPContainerType: {|
    +site: 0, // 0
    +web: 1, // 1
    +list: 2 // 2
  |};

  declare class SP$CompliancePolicy$SPContainerId mixins SP$ClientObject {
    static createFromList(
      context: SP$ClientRuntimeContext,
      list: SP$List
    ): SP$CompliancePolicy$SPContainerId;
    static createFromWeb(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$CompliancePolicy$SPContainerId;
    static createFromSite(
      context: SP$ClientRuntimeContext,
      site: SP$Site
    ): SP$CompliancePolicy$SPContainerId;
    static create(
      context: SP$ClientRuntimeContext,
      containerId: any
    ): SP$CompliancePolicy$SPContainerId;
    get_containerType(): SP$ContentType;
    set_containerType(value: SP$ContentType): SP$ContentType;
    get_listId(): SP$Guid;
    set_listId(value: SP$Guid): SP$Guid;
    get_siteId(): SP$Guid;
    set_siteId(value: SP$Guid): SP$Guid;
    get_siteUrl(): string;
    set_siteUrl(value: string): string;
    get_tenantId(): SP$Guid;
    set_tenantId(value: SP$Guid): SP$Guid;
    get_title(): string;
    set_title(value: string): string;
    get_version(): any;
    set_version(value: any): any;
    get_webId(): SP$Guid;
    set_webId(value: SP$Guid): SP$Guid;
    serialize(): SP$StringResult;
  }

  declare class SP$CompliancePolicy$SPPolicyAssociation mixins SP$ClientObject {
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
    set_whenCreatedUTC(value: Date): Date;
  }

  declare class SP$CompliancePolicy$SPPolicyBinding mixins SP$ClientObject {
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
    set_whenCreatedUTC(value: Date): Date;
  }

  declare class SP$CompliancePolicy$SPPolicyDefinition mixins SP$ClientObject {
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
    set_whenCreatedUTC(value: Date): Date;
  }

  declare class SP$CompliancePolicy$SPPolicyRule mixins SP$ClientObject {
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
    set_whenCreatedUTC(value: Date): Date;
  }

  declare class SP$CompliancePolicy$SPPolicyStore mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext, web: SP$Web): this;
    static createPolicyDefinition(
      context: SP$ClientRuntimeContext
    ): SP$CompliancePolicy$SPPolicyDefinition;
    static createPolicyBinding(
      context: SP$ClientRuntimeContext
    ): SP$CompliancePolicy$SPPolicyBinding;
    static createPolicyAssociation(
      context: SP$ClientRuntimeContext
    ): SP$CompliancePolicy$SPPolicyAssociation;
    static createPolicyRule(
      context: SP$ClientRuntimeContext
    ): SP$CompliancePolicy$SPPolicyRule;
    updatePolicyRule(policyRule: SP$CompliancePolicy$SPPolicyRule): void;
    getPolicyRule(
      policyRuleId: any,
      throwIfNull: boolean
    ): SP$CompliancePolicy$SPPolicyRule;
    deletePolicyRule(policyRuleId: any): void;
    notifyUnifiedPolicySync(
      notificationId: any,
      syncSvcUrl: string,
      changeInfos: any,
      syncNow: boolean,
      fullSyncForTenant: boolean
    ): void;
    updatePolicyDefinition(
      policyDefinition: SP$CompliancePolicy$SPPolicyDefinition
    ): void;
    getPolicyDefinition(
      policyDefinitionId: any
    ): SP$CompliancePolicy$SPPolicyDefinition;
    deletePolicyDefinition(policyDefinitionId: any): void;
    getPolicyDefinitions(
      scenario: any
    ): SP$ClientObjectList<SP$CompliancePolicy$SPPolicyDefinition>;
    updatePolicyBinding(
      policyBinding: SP$CompliancePolicy$SPPolicyBinding
    ): void;
    getPolicyBinding(policyBindingId: any): SP$CompliancePolicy$SPPolicyBinding;
    deletePolicyBinding(policyBindingId: any): void;
    updatePolicyAssociation(
      policyAssociation: SP$CompliancePolicy$SPPolicyAssociation
    ): void;
    getPolicyAssociation(
      policyAssociationId: any
    ): SP$CompliancePolicy$SPPolicyAssociation;
    getPolicyAssociationForContainer(
      containerId: SP$CompliancePolicy$SPContainerId
    ): SP$CompliancePolicy$SPPolicyAssociation;
    deletePolicyAssociation(policyAssociationId: any): void;
  }

  declare class SP$CompliancePolicy$SPPolicyStoreProxy mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext, web: SP$Web): this;
    get_policyStoreUrl(): string;
  }

  declare var npm$namespace$SP$Discovery: {
    ExportStatus: typeof SP$Discovery$ExportStatus,
    Case: typeof SP$Discovery$Case,
    Export: typeof SP$Discovery$Export
  };

  declare var SP$Discovery$ExportStatus: {|
    +notStarted: 0, // 0
    +started: 1, // 1
    +complete: 2, // 2
    +failed: 3 // 3
  |};

  declare class SP$Discovery$Case mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext, web: SP$Web): this;
    getExportContent(sourceIds: number[]): SP$StringResult;
  }

  declare class SP$Discovery$Export mixins SP$ClientObject {
    constructor(context: SP$ClientRuntimeContext, item: SP$ListItem): this;
    get_status(): $Values<typeof SP$Discovery$ExportStatus>;
    set_status(
      value: $Values<typeof SP$Discovery$ExportStatus>
    ): $Values<typeof SP$Discovery$ExportStatus>;
    update(): void;
    getExportContent(): SP$StringResult;
  }

  declare var npm$namespace$SP$InformationPolicy: {
    ProjectPolicy: typeof SP$InformationPolicy$ProjectPolicy
  };
  declare class SP$InformationPolicy$ProjectPolicy mixins SP$ClientObject {
    constructor(
      context: SP$ClientRuntimeContext,
      objectPath: SP$ObjectPath
    ): this;
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
      web: SP$Web
    ): SP$ClientObjectList<SP$InformationPolicy$ProjectPolicy>;
    static getCurrentlyAppliedProject(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$InformationPolicy$ProjectPolicy;
    static applyProjectPolicy(
      context: SP$ClientRuntimeContext,
      web: SP$Web,
      projectPolicy: SP$InformationPolicy$ProjectPolicy
    ): void;
    static openProject(context: SP$ClientRuntimeContext, web: SP$Web): void;
    static closeProject(context: SP$ClientRuntimeContext, web: SP$Web): void;
    static postponeProject(context: SP$ClientRuntimeContext, web: SP$Web): void;
    static doesProjectHavePolicy(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$BooleanResult;
    static isProjectClosed(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$BooleanResult;
    static getProjectCloseDate(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$DateTimeResult;
    static getProjectExpirationDate(
      context: SP$ClientRuntimeContext,
      web: SP$Web
    ): SP$DateTimeResult;
  }

  declare var npm$namespace$SP$JsGrid: {
    TextDirection: typeof SP$JsGrid$TextDirection,
    PaneId: typeof SP$JsGrid$PaneId,
    PaneLayout: typeof SP$JsGrid$PaneLayout,
    EditMode: typeof SP$JsGrid$EditMode,
    GanttDrawBarFlags: typeof SP$JsGrid$GanttDrawBarFlags,
    GanttBarDateType: typeof SP$JsGrid$GanttBarDateType,
    ValidationState: typeof SP$JsGrid$ValidationState,
    HierarchyMode: typeof SP$JsGrid$HierarchyMode,
    EditActorWriteType: typeof SP$JsGrid$EditActorWriteType,
    EditActorReadType: typeof SP$JsGrid$EditActorReadType,
    EditActorUpdateType: typeof SP$JsGrid$EditActorUpdateType,
    SortMode: typeof SP$JsGrid$SortMode,
    RowHeaderStatePriorities: typeof SP$JsGrid$RowHeaderStatePriorities,
    UpdateSerializeMode: typeof SP$JsGrid$UpdateSerializeMode,
    UpdateTrackingMode: typeof SP$JsGrid$UpdateTrackingMode,
    ReadOnlyActiveState: typeof SP$JsGrid$ReadOnlyActiveState,
    SelectionTypeFlags: typeof SP$JsGrid$SelectionTypeFlags,
    EventType: typeof SP$JsGrid$EventType,
    DelegateType: typeof SP$JsGrid$DelegateType,
    ClickContext: typeof SP$JsGrid$ClickContext,
    JsGridControl: typeof SP$JsGrid$JsGridControl,
    RowHeaderState: typeof SP$JsGrid$RowHeaderState,
    Image: typeof SP$JsGrid$Image,
    CommandManager: typeof SP$JsGrid$CommandManager,
    TableCache: typeof SP$JsGrid$TableCache,
    Style: typeof SP$JsGrid$Style,
    ColumnInfoCollection: typeof SP$JsGrid$ColumnInfoCollection,
    ColumnInfo: typeof SP$JsGrid$ColumnInfo,
    RecordFactory: typeof SP$JsGrid$RecordFactory,
    Property: typeof SP$JsGrid$Property,
    GridField: typeof SP$JsGrid$GridField,
    PropertyType: typeof SP$JsGrid$PropertyType,
    StaticDataSource: typeof SP$JsGrid$StaticDataSource,
    RowHeaderStyleId: typeof npm$namespace$SP$JsGrid$RowHeaderStyleId,
    RowHeaderAutoStyleId: typeof npm$namespace$SP$JsGrid$RowHeaderAutoStyleId,
    UserAction: typeof npm$namespace$SP$JsGrid$UserAction,
    EventArgs: typeof npm$namespace$SP$JsGrid$EventArgs,
    JsGridControl: typeof npm$namespace$SP$JsGrid$JsGridControl,
    PropertyType: typeof npm$namespace$SP$JsGrid$PropertyType,
    WidgetControl: typeof npm$namespace$SP$JsGrid$WidgetControl,
    Internal: typeof npm$namespace$SP$JsGrid$Internal
  };

  declare var SP$JsGrid$TextDirection: {|
    +Default: 0, // 0
    +RightToLeft: 1, // 1
    +LeftToRight: 2 // 2
  |};

  declare var SP$JsGrid$PaneId: {|
    +MainGrid: 0, // 0
    +PivotedGrid: 1, // 1
    +Gantt: 2 // 2
  |};

  declare var SP$JsGrid$PaneLayout: {|
    +GridOnly: 0, // 0
    +GridAndGantt: 1, // 1
    +GridAndPivotedGrid: 2 // 2
  |};

  declare var SP$JsGrid$EditMode: {|
    +ReadOnly: 0, // 0
    +ReadWrite: 1, // 1
    +ReadOnlyDefer: 2, // 2
    +ReadWriteDefer: 3, // 3
    +Defer: 4 // 4
  |};

  declare var SP$JsGrid$GanttDrawBarFlags: {|
    +LeftLink: 0, // 0
    +RightLink: 1 // 1
  |};

  declare var SP$JsGrid$GanttBarDateType: {|
    +Start: 0, // 0
    +End: 1 // 1
  |};

  declare var SP$JsGrid$ValidationState: {|
    +Valid: 0, // 0
    +Pending: 1, // 1
    +Invalid: 2 // 2
  |};

  declare var SP$JsGrid$HierarchyMode: {|
    +None: 0, // 0
    +Standard: 1, // 1
    +Grouping: 2 // 2
  |};

  declare var SP$JsGrid$EditActorWriteType: {|
    +Both: 0, // 0
    +LocalizedOnly: 1, // 1
    +DataOnly: 2, // 2
    +Either: 3 // 3
  |};

  declare var SP$JsGrid$EditActorReadType: {|
    +Both: 0, // 0
    +LocalizedOnly: 1, // 1
    +DataOnly: 2 // 2
  |};

  declare var SP$JsGrid$EditActorUpdateType: {|
    +Committed: 0, // 0
    +Uncommitted: 1 // 1
  |};

  declare var SP$JsGrid$SortMode: {|
    +Ascending: 0, // 0
    +Descending: 1, // 1
    +None: 2 // 2
  |};

  declare var npm$namespace$SP$JsGrid$RowHeaderStyleId: {
    Transfer: typeof SP$JsGrid$RowHeaderStyleId$Transfer,
    Conflict: typeof SP$JsGrid$RowHeaderStyleId$Conflict
  };
  declare var SP$JsGrid$RowHeaderStyleId$Transfer: string;

  declare var SP$JsGrid$RowHeaderStyleId$Conflict: string;

  declare var npm$namespace$SP$JsGrid$RowHeaderAutoStyleId: {
    Dirty: typeof SP$JsGrid$RowHeaderAutoStyleId$Dirty,
    Error: typeof SP$JsGrid$RowHeaderAutoStyleId$Error,
    NewRow: typeof SP$JsGrid$RowHeaderAutoStyleId$NewRow
  };
  declare var SP$JsGrid$RowHeaderAutoStyleId$Dirty: string;

  declare var SP$JsGrid$RowHeaderAutoStyleId$Error: string;

  declare var SP$JsGrid$RowHeaderAutoStyleId$NewRow: string;

  declare var SP$JsGrid$RowHeaderStatePriorities: {|
    +Dirty: 0, // 0
    +Transfer: 1, // 1
    +CellError: 2, // 2
    +Conflict: 3, // 3
    +RowError: 4, // 4
    +NewRow: 5 // 5
  |};

  declare var SP$JsGrid$UpdateSerializeMode: {|
    +Cancel: 0, // 0
    +Default: 1, // 1
    +PropDataOnly: 2, // 2
    +PropLocalizedOnly: 3, // 3
    +PropBoth: 4 // 4
  |};

  declare var SP$JsGrid$UpdateTrackingMode: {|
    +PropData: 0, // 0
    +PropLocalized: 1, // 1
    +PropBoth: 2 // 2
  |};

  declare var npm$namespace$SP$JsGrid$UserAction: {
    UserEdit: typeof SP$JsGrid$UserAction$UserEdit,
    DeleteRecord: typeof SP$JsGrid$UserAction$DeleteRecord,
    InsertRecord: typeof SP$JsGrid$UserAction$InsertRecord,
    Indent: typeof SP$JsGrid$UserAction$Indent,
    Outdent: typeof SP$JsGrid$UserAction$Outdent,
    Fill: typeof SP$JsGrid$UserAction$Fill,
    Paste: typeof SP$JsGrid$UserAction$Paste,
    CutPaste: typeof SP$JsGrid$UserAction$CutPaste
  };
  declare var SP$JsGrid$UserAction$UserEdit: string;

  declare var SP$JsGrid$UserAction$DeleteRecord: string;

  declare var SP$JsGrid$UserAction$InsertRecord: string;

  declare var SP$JsGrid$UserAction$Indent: string;

  declare var SP$JsGrid$UserAction$Outdent: string;

  declare var SP$JsGrid$UserAction$Fill: string;

  declare var SP$JsGrid$UserAction$Paste: string;

  declare var SP$JsGrid$UserAction$CutPaste: string;

  declare var SP$JsGrid$ReadOnlyActiveState: {|
    +ReadOnlyActive: 0, // 0
    +ReadOnlyDisabled: 1 // 1
  |};

  declare interface SP$JsGrid$IValue {
    data?: any;
    localized?: string;
  }

  declare var SP$JsGrid$SelectionTypeFlags: {|
    +MultipleCellRanges: 0, // 0
    +MultipleRowRanges: 1, // 1
    +MultipleColRanges: 2 // 2
  |};

  declare class SP$JsGrid$JsGridControl {
    constructor(parentNode: HTMLElement, bShowLoadingBanner: boolean): this;

    /**
     * Returns true if Init method has been executed successfully
     */
    IsInitialized(): boolean;

    /**
     * Replaces the control TableCache object with the provided one
     */
    ResetData(cache: SP$JsGrid$TableCache): void;

    /**
     * Initialize the control
     */
    Init(parameters: SP$JsGrid$JsGridControl$Parameters): void;
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
      optInitGanttStylesFnArgsObj?: any
    ): void;
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
    GetDiffTracker(): SP$JsGrid$Internal$DiffTracker;

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
    IsCellEditable(
      record: JsGrid$IRecord,
      fieldKey: string,
      optPaneId?: any
    ): boolean;

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
    AddRowHeaderState(
      recordKey: number,
      rowHeaderState: SP$JsGrid$RowHeaderState
    ): void;

    /**
     * Removes header state with specified id from the row.
     */
    RemoveRowHeaderState(recordKey: number, rowHeaderStateId: string): void;
    GetCheckSelectionManager(): any;
    UpdateProperties(
      propertyUpdates: any,
      changeName: any,
      optChangeKey?: any
    ): any;
    GetLastRecordKey(): string;
    InsertProvisionalRecordBefore(
      beforeRecordKey: number,
      newRecord: any,
      initialValues: any
    ): any;
    InsertProvisionalRecordAfter(
      afterRecordKey: number,
      newRecord: any,
      initialValues: any
    ): any;
    IsProvisionalRecordKey(recordKey: number): boolean;
    InsertRecordBefore(
      beforeRecordKey: number,
      newRecord: any,
      optChangeKey?: any
    ): any;
    InsertRecordAfter(
      afterRecordKey: number,
      newRecord: any,
      optChangeKey?: any
    ): any;
    InsertHiddenRecord(
      recordKey: number,
      changeKey: any,
      optAfterRecordKey?: any
    ): any;
    DeleteRecords(recordKeys: any, optChangeKey?: any): any;
    IndentRecords(recordKeys: any, optChangeKey?: any): any;
    OutdentRecords(recordKeys: any, optChangeKey?: any): any;
    ReorderRecords(
      beginRecordKey: number,
      endRecordKey: number,
      afterRecordKey: number,
      bSelectAfterwards: boolean
    ): any;
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
      eventType: $Values<typeof SP$JsGrid$EventType>,
      fnOnEvent: (args: JsGrid$IEventArgs) => void
    ): void;

    /**
     * Detach a previously set event handler
     */
    DetachEvent(
      eventType: $Values<typeof SP$JsGrid$EventType>,
      fnOnEvent: any
    ): void;

    /**
     * Set a delegate. Delegates are way to replace default functionality with custom one.
     */
    SetDelegate(
      delegateKey: $Values<typeof SP$JsGrid$DelegateType>,
      fn: any
    ): void;

    /**
     * Get current delegate.
     */
    GetDelegate(delegateKey: $Values<typeof SP$JsGrid$DelegateType>): any;

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
    SetCellError(
      recordKey: number,
      fieldKey: string,
      errorMessage: string
    ): number;

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
      fnFilter?: (recordKey: number, fieldKey: string, id: number) => boolean
    ): any;

    /**
     * Same as ScrollToAndExpandNextError, but searches within the specified record.
     * recordKey should be not null, otherwise you'll get an exception.
     * bDontExpand controls whether the error tooltip will be shown (if bDontExpand=true, tooltip will not be shown).
     */
    ScrollToAndExpandNextErrorOnRecord(
      minId?: number,
      recordKey?: number,
      fnFilter?: (recordKey: number, fieldKey: string, id: number) => boolean,
      bDontExpand?: boolean
    ): any;
    GetFocusedItem(): any;
    SendKeyDownEvent(eventInfo: Sys.UI.DomEvent): any;

    /**
     * Moves cursor to entry record (the row that is used to add new records)
     */
    JumpToEntryRecord(): void;
    SelectRowRange(
      rowIdx1: number,
      rowIdx2: number,
      bAppend: boolean,
      optPaneId?: string
    ): void;
    SelectColumnRange(
      colIdx1: number,
      colIdx2: number,
      bAppend: boolean,
      optPaneId?: string
    ): void;
    SelectCellRange(
      rowIdx1: number,
      rowIdx2: number,
      colIdx1: number,
      colIdx2: number,
      bAppend: boolean,
      optPaneId?: string
    ): void;
    SelectRowRangeByKey(
      rowKey1: any,
      rowKey2: any,
      bAppend: boolean,
      optPaneId?: string
    ): void;
    SelectColumnRangeByKey(
      colKey1: any,
      colKey2: any,
      bAppend: boolean,
      optPaneId?: string
    ): void;
    SelectCellRangeByKey(
      recordKey1: string,
      recordKey2: string,
      colKey1: any,
      colKey2: any,
      bAppend: boolean,
      optPaneId?: string
    ): void;
    ChangeKeys(oldKey: any, newKey: any): void;
    GetSelectedRowRanges(optPaneId?: any): any;
    GetSelectedColumnRanges(optPaneId?: any): any;
    GetSelectedRanges(optPaneId?: any): any;
    MarkPropUpdateInvalid(
      recordKey: number,
      fieldKey: any,
      changeKey: any,
      optErrorMsg?: any
    ): any;
    GetCurrentChangeKey(): any;
    CreateAndSynchronizeToNewChangeKey(): any;
    CreateDataUpdateCmd(bUseCustomInitialUpdate: boolean): any;
    IsChangeKeyApplied(changeKey: any): any;
    GetChangeKeyForVersion(version: any): any;
    TryReadPropForChangeKey(
      recordKey: number,
      fieldKey: any,
      changeKey: any
    ): any;
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
    GetUndoManager(): SP$JsGrid$CommandManager;

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
    GetSpCsrRenderCtx(): any;
  }

  declare interface SP$JsGrid$IChangeKey {
    Reserve(): void;
    Release(): void;
    GetVersionNumber(): number;
    CompareTo(changeKey: SP$JsGrid$IChangeKey): number;
  }

  declare var SP$JsGrid$EventType: {|
    +OnCellFocusChanged: 0, // 0
    +OnRowFocusChanged: 1, // 1
    +OnCellEditBegin: 2, // 2
    +OnCellEditCompleted: 3, // 3
    +OnRightClick: 4, // 4
    +OnPropertyChanged: 5, // 5
    +OnRecordInserted: 6, // 6
    +OnRecordDeleted: 7, // 7
    +OnRecordChecked: 8, // 8
    +OnCellErrorStateChanged: 9, // 9
    +OnEntryRecordAdded: 10, // 10
    +OnEntryRecordCommitted: 11, // 11
    +OnEntryRecordPropertyChanged: 12, // 12
    +OnRowErrorStateChanged: 13, // 13
    +OnDoubleClick: 14, // 14
    +OnBeforeGridDispose: 15, // 15
    +OnSingleCellClick: 16, // 16
    +OnInitialChangesForChangeKeyComplete: 17, // 17
    +OnVacateChange: 18, // 18
    +OnGridErrorStateChanged: 19, // 19
    +OnSingleCellKeyDown: 20, // 20
    +OnRecordsReordered: 21, // 21
    +OnBeforePropertyChanged: 22, // 22
    +OnRowEscape: 23, // 23
    +OnBeginRenameColumn: 24, // 24
    +OnEndRenameColumn: 25, // 25
    +OnPasteBegin: 26, // 26
    +OnPasteEnd: 27, // 27
    +OnBeginRedoDataUpdateChange: 28, // 28
    +OnBeginUndoDataUpdateChange: 29 // 29
  |};

  declare var SP$JsGrid$DelegateType: {|
    +ExpandColumnMenu: 0, // 0
    +AddColumnMenuItems: 1, // 1
    +Sort: 2, // 2
    +Filter: 3, // 3
    +InsertRecord: 4, // 4
    +DeleteRecords: 5, // 5
    +IndentRecords: 6, // 6
    +OutdentRecords: 7, // 7
    +IsRecordInsertInView: 8, // 8
    +ExpandDelayLoadedHierarchyNode: 9, // 9
    +AutoFilter: 10, // 10
    +ExpandConflictResolution: 11, // 11
    +GetAutoFilterEntries: 12, // 12
    +LaunchFilterDialog: 13, // 13
    +ShowColumnConfigurationDialog: 14, // 14
    +GetRecordEditMode: 15, // 15
    +GetGridRowStyleId: 16, // 16
    +CreateEntryRecord: 17, // 17
    +TryInsertEntryRecord: 18, // 18
    +WillAddColumnMenuItems: 19, // 19
    +NextPage: 20, // 20
    +AddNewColumn: 21, // 21
    +RemoveColumnFromView: 22, // 22
    +ReorderColumnPositionInView: 23, // 23
    +TryCreateProvisionalRecord: 24, // 24
    +CanReorderRecords: 25, // 25
    +AddNewColumnMenuItems: 26, // 26
    +TryBeginPaste: 27, // 27
    +AllowSelectionChange: 28, // 28
    +GetFieldEditMode: 29, // 29
    +GetFieldReadOnlyActiveState: 30, // 30
    +OnBeforeRecordReordered: 31 // 31
  |};

  declare var SP$JsGrid$ClickContext: {|
    +SelectAllSquare: 0, // 0
    +RowHeader: 1, // 1
    +ColumnHeader: 2, // 2
    +Cell: 3, // 3
    +Gantt: 4, // 4
    +Other: 5 // 5
  |};

  declare class SP$JsGrid$RowHeaderState {
    constructor(
      id: string,
      img: SP$JsGrid$Image,
      priority: $Values<typeof SP$JsGrid$RowHeaderStatePriorities>,
      tooltip: string,
      fnOnClick: (eventInfo: Sys.UI.DomEvent, recordKey: number) => void
    ): this;
    GetId(): string;
    GetImg(): SP$JsGrid$Image;
    GetPriority(): $Values<typeof SP$JsGrid$RowHeaderStatePriorities>;
    GetOnClick(): (eventInfo: Sys.UI.DomEvent, recordKey: number) => void;
    GetTooltip(): string;
    toString(): string;
  }

  declare class SP$JsGrid$Image {
    /**
     * optOuterCssNames and optImgCssNames are strings that contain css class names separated by spaces.
     * optImgCssNames are applied to the img tag.
     * if bIsClustered, image is rendered inside div, and optOuterCssNames are applied to the div.
     */
    constructor(
      imgSrc: string,
      bIsClustered: boolean,
      optOuterCssNames: string,
      optImgCssNames: string,
      bIsAnimated: boolean
    ): this;
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
      clickFn: (eventInfo: Sys.UI.DomEvent) => void,
      bHideTooltip: boolean
    ): HTMLElement;
  }

  declare interface SP$JsGrid$IEventArgs {}

  declare var npm$namespace$SP$JsGrid$EventArgs: {
    OnEntryRecordAdded: typeof SP$JsGrid$EventArgs$OnEntryRecordAdded,
    CellFocusChanged: typeof SP$JsGrid$EventArgs$CellFocusChanged,
    RowFocusChanged: typeof SP$JsGrid$EventArgs$RowFocusChanged,
    CellEditBegin: typeof SP$JsGrid$EventArgs$CellEditBegin,
    CellEditCompleted: typeof SP$JsGrid$EventArgs$CellEditCompleted,
    Click: typeof SP$JsGrid$EventArgs$Click,
    PropertyChanged: typeof SP$JsGrid$EventArgs$PropertyChanged,
    RecordInserted: typeof SP$JsGrid$EventArgs$RecordInserted,
    RecordDeleted: typeof SP$JsGrid$EventArgs$RecordDeleted,
    RecordChecked: typeof SP$JsGrid$EventArgs$RecordChecked,
    OnCellErrorStateChanged: typeof SP$JsGrid$EventArgs$OnCellErrorStateChanged,
    OnRowErrorStateChanged: typeof SP$JsGrid$EventArgs$OnRowErrorStateChanged,
    OnEntryRecordCommitted: typeof SP$JsGrid$EventArgs$OnEntryRecordCommitted,
    SingleCellClick: typeof SP$JsGrid$EventArgs$SingleCellClick,
    PendingChangeKeyInitiallyComplete: typeof SP$JsGrid$EventArgs$PendingChangeKeyInitiallyComplete,
    VacateChange: typeof SP$JsGrid$EventArgs$VacateChange,
    GridErrorStateChanged: typeof SP$JsGrid$EventArgs$GridErrorStateChanged,
    SingleCellKeyDown: typeof SP$JsGrid$EventArgs$SingleCellKeyDown,
    OnRecordsReordered: typeof SP$JsGrid$EventArgs$OnRecordsReordered,
    OnRowEscape: typeof SP$JsGrid$EventArgs$OnRowEscape,
    OnEndRenameColumn: typeof SP$JsGrid$EventArgs$OnEndRenameColumn,
    OnBeginRedoDataUpdateChange: typeof SP$JsGrid$EventArgs$OnBeginRedoDataUpdateChange,
    OnBeginUndoDataUpdateChange: typeof SP$JsGrid$EventArgs$OnBeginUndoDataUpdateChange
  };
  declare class SP$JsGrid$EventArgs$OnEntryRecordAdded
    mixins SP$JsGrid$IEventArgs {
    constructor(recordKey: number): this;
    recordKey: number;
  }

  declare class SP$JsGrid$EventArgs$CellFocusChanged
    mixins SP$JsGrid$IEventArgs {
    constructor(
      newRecordKey: number,
      newFieldKey: string,
      oldRecordKey: number,
      oldFieldKey: string
    ): this;
    newRecordKey: number;
    newFieldKey: string;
    oldRecordKey: number;
    oldFieldKey: string;
  }

  declare class SP$JsGrid$EventArgs$RowFocusChanged
    mixins SP$JsGrid$IEventArgs {
    constructor(newRecordKey: number, oldRecordKey: number): this;
    newRecordKey: number;
    oldRecordKey: number;
  }

  declare class SP$JsGrid$EventArgs$CellEditBegin mixins SP$JsGrid$IEventArgs {
    constructor(recordKey: number, fieldKey: string): this;
    recordKey: number;
    fieldKey: string;
  }

  declare class SP$JsGrid$EventArgs$CellEditCompleted
    mixins SP$JsGrid$IEventArgs {
    constructor(
      recordKey: number,
      fieldKey: string,
      changeKey: SP$JsGrid$IChangeKey,
      bCancelled: boolean
    ): this;
    recordKey: number;
    fieldKey: string;
    changeKey: SP$JsGrid$IChangeKey;
    bCancelled: boolean;
  }

  declare class SP$JsGrid$EventArgs$Click mixins SP$JsGrid$IEventArgs {
    constructor(
      eventInfo: Sys.UI.DomEvent,
      context: $Values<typeof SP$JsGrid$ClickContext>,
      recordKey: number,
      fieldKey: string
    ): this;
    eventInfo: Sys.UI.DomEvent;
    context: $Values<typeof SP$JsGrid$ClickContext>;
    recordKey: number;
    fieldKey: string;
  }

  declare class SP$JsGrid$EventArgs$PropertyChanged
    mixins SP$JsGrid$IEventArgs {
    constructor(
      recordKey: number,
      fieldKey: string,
      oldProp: SP$JsGrid$Internal$PropertyUpdate,
      newProp: SP$JsGrid$Internal$PropertyUpdate,
      propType: SP$JsGrid$IPropertyType,
      changeKey: SP$JsGrid$IChangeKey,
      validationState: $Values<typeof SP$JsGrid$ValidationState>
    ): this;
    recordKey: number;
    fieldKey: string;
    oldProp: SP$JsGrid$Internal$PropertyUpdate;
    newProp: SP$JsGrid$Internal$PropertyUpdate;
    propType: SP$JsGrid$IPropertyType;
    changeKey: SP$JsGrid$IChangeKey;
    validationState: $Values<typeof SP$JsGrid$ValidationState>;
  }

  declare class SP$JsGrid$EventArgs$RecordInserted mixins SP$JsGrid$IEventArgs {
    constructor(
      recordKey: number,
      recordIdx: number,
      afterRecordKey: number,
      changeKey: SP$JsGrid$IChangeKey
    ): this;
    recordKey: number;
    recordIdx: number;
    afterRecordKey: number;
    changeKey: SP$JsGrid$IChangeKey;
  }

  declare class SP$JsGrid$EventArgs$RecordDeleted mixins SP$JsGrid$IEventArgs {
    constructor(
      recordKey: number,
      recordIdx: number,
      changeKey: SP$JsGrid$IChangeKey
    ): this;
    recordKey: number;
    recordIdx: number;
    changeKey: SP$JsGrid$IChangeKey;
  }

  declare class SP$JsGrid$EventArgs$RecordChecked mixins SP$JsGrid$IEventArgs {
    constructor(recordKeySet: SP$Utilities$Set, bChecked: boolean): this;
    recordKeySet: SP$Utilities$Set;
    bChecked: boolean;
  }

  declare class SP$JsGrid$EventArgs$OnCellErrorStateChanged
    mixins SP$JsGrid$IEventArgs {
    constructor(
      recordKey: number,
      fieldKey: string,
      bAddingError: boolean,
      bCellCurrentlyHasError: boolean,
      bCellHadError: boolean,
      errorId: number
    ): this;
    recordKey: number;
    fieldKey: string;
    bAddingError: boolean;
    bCellCurrentlyHasError: boolean;
    bCellHadError: boolean;
    errorId: number;
  }

  declare class SP$JsGrid$EventArgs$OnRowErrorStateChanged
    mixins SP$JsGrid$IEventArgs {
    constructor(
      recordKey: number,
      bAddingError: boolean,
      bErrorCurrentlyInRow: boolean,
      bRowHadError: boolean,
      errorId: number,
      message: string
    ): this;
    recordKey: number;
    bAddingError: boolean;
    bErrorCurrentlyInRow: boolean;
    bRowHadError: boolean;
    errorId: number;
    message: string;
  }

  declare class SP$JsGrid$EventArgs$OnEntryRecordCommitted
    mixins SP$JsGrid$IEventArgs {
    constructor(
      origRecKey: string,
      recordKey: number,
      changeKey: SP$JsGrid$IChangeKey
    ): this;
    originalRecordKey: number;
    recordKey: number;
    changeKey: SP$JsGrid$IChangeKey;
  }

  declare class SP$JsGrid$EventArgs$SingleCellClick
    mixins SP$JsGrid$IEventArgs {
    constructor(
      eventInfo: Sys.UI.DomEvent,
      recordKey: number,
      fieldKey: string
    ): this;
    eventInfo: Sys.UI.DomEvent;
    recordKey: number;
    fieldKey: string;
  }

  declare class SP$JsGrid$EventArgs$PendingChangeKeyInitiallyComplete
    mixins SP$JsGrid$IEventArgs {
    constructor(changeKey: SP$JsGrid$IChangeKey): this;
    changeKey: SP$JsGrid$IChangeKey;
  }

  declare class SP$JsGrid$EventArgs$VacateChange mixins SP$JsGrid$IEventArgs {
    constructor(changeKey: SP$JsGrid$IChangeKey): this;
    changeKey: SP$JsGrid$IChangeKey;
  }

  declare class SP$JsGrid$EventArgs$GridErrorStateChanged
    mixins SP$JsGrid$IEventArgs {
    constructor(bAnyErrors: boolean): this;
    bAnyErrors: boolean;
  }

  declare class SP$JsGrid$EventArgs$SingleCellKeyDown
    mixins SP$JsGrid$IEventArgs {
    constructor(
      eventInfo: Sys.UI.DomEvent,
      recordKey: number,
      fieldKey: string
    ): this;
    eventInfo: Sys.UI.DomEvent;
    recordKey: number;
    fieldKey: string;
  }

  declare class SP$JsGrid$EventArgs$OnRecordsReordered
    mixins SP$JsGrid$IEventArgs {
    constructor(recordKeys: string[], changeKey: SP$JsGrid$IChangeKey): this;
    reorderedKeys: string[];
    changeKey: SP$JsGrid$IChangeKey;
  }

  declare class SP$JsGrid$EventArgs$OnRowEscape mixins SP$JsGrid$IEventArgs {
    constructor(recordKey: number): this;
    recordKey: number;
  }

  declare class SP$JsGrid$EventArgs$OnEndRenameColumn
    mixins SP$JsGrid$IEventArgs {
    constructor(
      columnKey: string,
      originalColumnTitle: string,
      newColumnTitle: string
    ): this;
    columnKey: string;
    originalColumnTitle: string;
    newColumnTitle: string;
  }

  declare class SP$JsGrid$EventArgs$OnBeginRedoDataUpdateChange
    mixins SP$JsGrid$IEventArgs {
    constructor(changeKey: SP$JsGrid$IChangeKey): this;
    changeKey: SP$JsGrid$IChangeKey;
  }

  declare class SP$JsGrid$EventArgs$OnBeginUndoDataUpdateChange
    mixins SP$JsGrid$IEventArgs {
    constructor(changeKey: SP$JsGrid$IChangeKey): this;
    changeKey: SP$JsGrid$IChangeKey;
  }

  declare var npm$namespace$SP$JsGrid$JsGridControl: {
    Parameters: typeof SP$JsGrid$JsGridControl$Parameters,
    TableViewParameters: typeof SP$JsGrid$JsGridControl$TableViewParameters,
    PivotedGridParameters: typeof SP$JsGrid$JsGridControl$PivotedGridParameters,
    GanttParameters: typeof SP$JsGrid$JsGridControl$GanttParameters,
    RowViewParameters: typeof SP$JsGrid$JsGridControl$RowViewParameters
  };
  declare class SP$JsGrid$JsGridControl$Parameters {
    tableCache: SP$JsGrid$TableCache;
    name: any;
    bNotificationsEnabled: boolean;
    styleManager: JsGrid$IStyleManager;
    minHeaderHeight: number;
    minRowHeight: number;
    commandMgr: SP$JsGrid$CommandManager;
    enabledRowHeaderAutoStates: SP$Utilities$Set;
    tableViewParams: JsGridControl$TableViewParameters;
    bEnableDiffTracking: boolean;
    isRTL: boolean;
  }

  declare class SP$JsGrid$JsGridControl$TableViewParameters {
    paneLayout: $Values<typeof SP$JsGrid$PaneLayout>;
    defaultEditMode: $Values<typeof SP$JsGrid$EditMode>;
    allowedSelectionTypes: $Values<typeof SP$JsGrid$SelectionTypeFlags>;
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
    rowViewParams: JsGridControl$RowViewParameters;
  }

  declare class SP$JsGrid$JsGridControl$PivotedGridParameters {}

  declare class SP$JsGrid$JsGridControl$GanttParameters {
    columns: JsGrid$ColumnInfoCollection;
  }

  declare class SP$JsGrid$JsGridControl$RowViewParameters {
    hierarchyMode: $Values<typeof SP$JsGrid$HierarchyMode>;
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
    filteredDescCounts: any;
  }

  declare class SP$JsGrid$CommandManager {}

  declare class SP$JsGrid$TableCache {}

  declare interface SP$JsGrid$IStyleManager {
    gridPaneStyle: SP$JsGrid$IStyleType$GridPane;
    columnHeaderStyleCollection: {
      normal: SP$JsGrid$IStyleType$Header,
      normalHover: SP$JsGrid$IStyleType$Header,
      partSelected: SP$JsGrid$IStyleType$Header,
      partSelectedHover: SP$JsGrid$IStyleType$Header,
      allSelected: SP$JsGrid$IStyleType$Header,
      allSelectedHover: SP$JsGrid$IStyleType$Header
    };
    rowHeaderStyleCollection: {
      normal: SP$JsGrid$IStyleType$Header,
      normalHover: SP$JsGrid$IStyleType$Header,
      partSelected: SP$JsGrid$IStyleType$Header,
      partSelectedHover: SP$JsGrid$IStyleType$Header,
      allSelected: SP$JsGrid$IStyleType$Header,
      allSelectedHover: SP$JsGrid$IStyleType$Header
    };
    splitterStyleCollection: {
      normal: SP$JsGrid$IStyleType$Splitter,
      normalHandle: SP$JsGrid$IStyleType$SplitterHandle,
      hover: SP$JsGrid$IStyleType$Splitter,
      hoverHandle: SP$JsGrid$IStyleType$SplitterHandle,
      dra: SP$JsGrid$IStyleType$Splitter,
      dragHandle: SP$JsGrid$IStyleType$SplitterHandle
    };
    defaultCellStyle: SP$JsGrid$IStyleType$Cell;
    readOnlyCellStyle: SP$JsGrid$IStyleType$Cell;
    readOnlyFocusedCellStyle: SP$JsGrid$IStyleType$Cell;
    timescaleTierStyle: SP$JsGrid$IStyleType$TimescaleTier;
    groupingStyles: any[];
    widgetDockStyle: SP$JsGrid$IStyleType$Widget;
    widgetDockHoverStyle: SP$JsGrid$IStyleType$Widget;
    widgetDockPressedStyle: SP$JsGrid$IStyleType$Widget;
    RegisterCellStyle(
      styleId: string,
      cellStyle: SP$JsGrid$IStyleType$Cell
    ): void;
    GetCellStyle(styleId: string): SP$JsGrid$IStyleType$Cell;
    UpdateSplitterStyleFromCss(
      styleObject: SP$JsGrid$IStyleType$Splitter,
      splitterStyleNameCollection: any
    ): void;
    UpdateHeaderStyleFromCss(
      styleObject: SP$JsGrid$IStyleType$Header,
      headerStyleNameCol: any
    ): void;
    UpdateGridPaneStyleFromCss(
      styleObject: SP$JsGrid$IStyleType$GridPane,
      gridStyleNameCollection: any
    ): void;
    UpdateDefaultCellStyleFromCss(
      styleObject: SP$JsGrid$IStyleType$Cell,
      cssClass: string
    ): void;
    UpdateGroupStylesFromCss(
      styleObject: SP$JsGrid$IStyleType$Cell,
      prefix: string
    ): void;
  }

  declare interface SP$JsGrid$IStyleType {}

  declare type SP$JsGrid$IStyleType$Splitter = {
    outerBorderColor: any,
    leftInnerBorderColor: any,
    innerBorderColor: any,
    backgroundColor: any
  } & SP$JsGrid$IStyleType;

  declare type SP$JsGrid$IStyleType$SplitterHandle = {
    outerBorderColor: any,
    leftInnerBorderColor: any,
    innerBorderColor: any,
    backgroundColor: any,
    gripUpperColor: any,
    gripLowerColor: any
  } & SP$JsGrid$IStyleType;

  declare interface SP$JsGrid$IStyleType$GridPane {
    verticalBorderColor: any;
    verticalBorderStyle: any;
    horizontalBorderColor: any;
    horizontalBorderStyle: any;
    backgroundColor: any;
    columnDropIndicatorColor: any;
    rowDropIndicatorColor: any;
    linkColor: any;
    visitedLinkColor: any;
    copyRectForeBorderColor: any;
    copyRectBackBorderColor: any;
    focusRectBorderColor: any;
    selectionRectBorderColor: any;
    selectedCellBgColor: any;
    readonlySelectionRectBorderColor: any;
    changeHighlightCellBgColor: any;
    fillRectBorderColor: any;
    errorRectBorderColor: any;
  }

  declare interface SP$JsGrid$IStyleType$Header {
    font: any;
    fontSize: any;
    fontWeight: any;
    textColor: any;
    backgroundColor: any;
    outerBorderColor: any;
    innerBorderColor: any;
    eyeBrowBorderColor: any;
    eyeBrowColor: any;
    menuColor: any;
    menuBorderColor: any;
    resizeColor: any;
    resizeBorderColor: any;
    menuHoverColor: any;
    menuHoverBorderColor: any;
    resizeHoverColor: any;
    resizeHoverBorderColor: any;
    eyeBrowHoverColor: any;
    eyeBrowHoverBorderColor: any;
    elementClickColor: any;
    elementClickBorderColor: any;
  }

  declare type SP$JsGrid$IStyleType$Cell = {
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
  } & SP$JsGrid$IStyleType;

  declare interface SP$JsGrid$IStyleType$Widget {
    backgroundColor: any;
    borderColor: any;
  }

  declare interface SP$JsGrid$IStyleType$RowHeaderStyle {
    backgroundColor: any;
    outerBorderColor: any;
    innerBorderColor: any;
  }

  declare interface SP$JsGrid$IStyleType$TimescaleTier {
    font: any;
    fontSize: any;
    fontWeight: any;
    textColor: any;
    backgroundColor: any;
    verticalBorderColor: any;
    verticalBorderStyle: any;
    horizontalBorderColor: any;
    horizontalBorderStyle: any;
    outerBorderColor: any;
    todayLineColor: any;
  }

  declare class SP$JsGrid$Style {
    static WidgetControl$Type: {
      Splitter: SP$JsGrid$IStyleType$Splitter,
      SplitterHandle: SP$JsGrid$IStyleType$SplitterHandle,
      GridPane: SP$JsGrid$IStyleType$GridPane,
      Header: SP$JsGrid$IStyleType$Header,
      RowHeaderStyle: SP$JsGrid$IStyleType$RowHeaderStyle,
      TimescaleTier: SP$JsGrid$IStyleType$TimescaleTier,
      Cell: SP$JsGrid$IStyleType$Cell,
      Widget: SP$JsGrid$IStyleType$Widget
    };
    static SetRTL: (rtlObject: any) => void;
    static MakeJsGridStyleManager: () => SP$JsGrid$IStyleManager;
    static CreateStyleFromCss: (
      styleType: SP$JsGrid$IStyleType,
      cssStyleName: string,
      optExistingStyle?: any,
      optClassId?: any
    ) => any;
    static CreateStyle: (
      styleType: SP$JsGrid$IStyleType,
      styleProps: any
    ) => any;
    static MergeCellStyles: (majorStyle: any, minorStyle: any) => any;
    static ApplyCellStyle: (td: HTMLTableCellElement, style: any) => void;
    static ApplyRowHeaderStyle: (
      domObj: HTMLElement,
      style: any,
      fnGetHeaderSibling: (elem: HTMLElement, previousElem: boolean) => void
    ) => void;
    static ApplyCornerHeaderBorderStyle: (
      domObj: HTMLElement,
      colStyle: any,
      rowStyle: any
    ) => void;
    static ApplyHeaderInnerBorderStyle: (
      domObj: HTMLElement,
      bIsRowHeader: any,
      headerObject: any
    ) => void;
    static ApplyColumnContextMenuStyle: (
      domObj: HTMLElement,
      style: any
    ) => void;
    static ApplySplitterStyle: (domObj: HTMLElement, style: any) => void;
    static MakeBorderString: (
      width: number,
      style: string,
      color: string
    ) => string;
    static GetCellStyleDefaultBackgroundColor: () => string;
  }

  declare class SP$JsGrid$ColumnInfoCollection {
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
    GetColumnPosition(key: string): number;
  }

  declare class SP$JsGrid$ColumnInfo {
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
      localizedValue: any
    ) => boolean;

    /**
     * if a particular cell is determined as clickable by fnShouldLinkSingleValue, this function will be called when the cell is clicked
     */
    fnSingleValueClicked: (
      record: JsGrid$IRecord,
      fieldKey: string,
      dataValue: any,
      localizedValue: any
    ) => void;

    /**
     * this is used when you need to make some of the cells in the column readonly, but at the same time keep others editable
     */
    fnGetCellEditMode: (
      record: JsGrid$IRecord,
      fieldKey: string
    ) => $Values<typeof SP$JsGrid$EditMode>;

    /**
     * this function should return name of the display control for the given cell in the column
     * the name should be previously associated with the display control via SP.JsGrid.PropertyType.Utils.RegisterDisplayControl method
     */
    fnGetDisplayControlName: (
      record: JsGrid$IRecord,
      fieldKey: string
    ) => string;

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
    fnGetWidgetControlNames: (
      record: JsGrid$IRecord,
      fieldKey: string
    ) => string[];

    /**
     * this function should return id of the style for the given cell in the column
     * styles and their ids are registered for a JsGridControl via jsGridParams.styleManager.RegisterCellStyle method
     */
    fnGetCellStyleId: (
      record: JsGrid$IRecord,
      fieldKey: string,
      dataValue: any
    ) => string;

    /**
     * set custom tooltip for the given cell in the column. by default, localized value is displayed as the tooltip
     */
    fnGetSingleValueTooltip: (
      record: JsGrid$IRecord,
      fieldKey: string,
      dataValue: any,
      localizedValue: any
    ) => string;
  }

  declare interface SP$JsGrid$IRecord {
    /**
     * True if this is an entry row
     */
    bIsNewRow: boolean;

    /**
     * Please use SetProp and GetProp
     */
    properties: {
      [fieldKey: string]: JsGrid$IPropertyBase
    };

    /**
     * returns recordKey
     */
    key(): number;

    /**
     * returns raw data value for the specified field
     */
    GetDataValue(fieldKey: string): any;

    /**
     * returns localized text value for the specified field
     */
    GetLocalizedValue(fieldKey: string): string;

    /**
     * returns true if data value for the specified field is available
     */
    HasDataValue(fieldKey: string): boolean;

    /**
     * returns true if localized text value for the specified field is available
     */
    HasLocalizedValue(fieldKey: string): boolean;
    GetProp(fieldKey: string): JsGrid$IPropertyBase;
    SetProp(fieldKey: string, prop: JsGrid$IPropertyBase): void;

    /**
     * Update the specified field with the specified value
     */
    AddFieldValue(fieldKey: string, value: any): void;

    /**
     * Removes value of the specified field.
     * Does not refresh the view.
     */
    RemoveFieldValue(fieldKey: string): void;
  }

  declare class SP$JsGrid$RecordFactory {
    constructor(
      gridFieldMap: any,
      keyColumnName: string,
      fnGetPropType: any
    ): this;
    gridFieldMap: any;

    /**
     * Create a new record
     */
    MakeRecord(
      dataPropMap: any,
      localizedPropMap: any,
      bKeepRawData: boolean
    ): SP$JsGrid$IRecord;
  }

  declare interface SP$JsGrid$IPropertyBase {
    HasLocalizedValue(): boolean;
    HasDataValue(): boolean;
    Clone(): SP$JsGrid$IPropertyBase;

    /**
     * dataValue actually is cloned
     */
    Update(dataValue: any, localizedValue: string): void;
    GetLocalized(): string;
    GetData(): any;
  }

  declare class SP$JsGrid$Property {
    static MakeProperty(
      dataValue: any,
      localizedValue: string,
      bHasDataValue: boolean,
      bHasLocalizedValue: boolean,
      propType: any
    ): SP$JsGrid$IPropertyBase;
    static MakePropertyFromGridField(
      gridField: any,
      dataValue: any,
      localizedVal: string,
      optPropType?: any
    ): SP$JsGrid$IPropertyBase;
  }

  declare class SP$JsGrid$GridField {
    constructor(
      key: string,
      hasDataValue: boolean,
      hasLocalizedValue: boolean,
      textDirection: $Values<typeof SP$JsGrid$TextDirection>,
      defaultCellStyleId?: any,
      editMode?: $Values<typeof SP$JsGrid$EditMode>,
      dateOnly?: boolean,
      csrInfo?: any
    ): this;
    key: string;
    hasDataValue: boolean;
    hasLocalizedValue: boolean;
    textDirection: $Values<typeof SP$JsGrid$TextDirection>;
    dateOnly: boolean;
    csrInfo: any;
    GetEditMode(): $Values<typeof SP$JsGrid$EditMode>;
    SetEditMode(mode: $Values<typeof SP$JsGrid$EditMode>): void;
    GetDefaultCellStyleId(): any;
    CompareSingleDataEqual(dataValue1: any, dataValue2: any): boolean;
    GetPropType(): any;
    GetSingleValuePropType(): any;
    GetMultiValuePropType(): any;
    SetSingleValuePropType(svPropType: any): void;
    SetIsMultiValue(listSeparator: any): void;
    GetIsMultiValue(): boolean;
  }

  declare interface SP$JsGrid$IEditActorGridContext {
    jsGridObj: SP$JsGrid$JsGridControl;
    parentNode: HTMLElement;
    styleManager: SP$JsGrid$IStyleManager;
    RTL: any;
    emptyValue: any;
    bLightFocus: boolean;
    OnKeyDown(domEvent: Sys.UI.DomEvent): void;
  }

  declare type SP$JsGrid$IEditControlGridContext = {
    OnActivateActor(): void,
    OnDeactivateActor(): void
  } & SP$JsGrid$IEditActorGridContext;

  declare interface SP$JsGrid$IPropertyType {
    ID: string;
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
      fnError: any
    ): void;
  }

  declare type SP$JsGrid$ILookupPropertyType = {
    GetItems(fnCallback: any): void,
    DataToLocalized(dataValue: any): string,
    LocalizedToData(localized: string): any,
    GetImageSource(record: SP$JsGrid$IRecord, dataValue: any): string,
    GetStyleId(dataValue: any): string,
    GetIsLimitedToList(): boolean,
    GetSerializableLookupPropType(): {
      items: any[],
      id: string,
      bLimitToList: boolean
    }
  } & SP$JsGrid$IPropertyType;

  declare type SP$JsGrid$IMultiValuePropertyType = {
    bMultiValue: boolean,
    separator: string,
    singleValuePropType: string,
    GetSerializableMultiValuePropType(): {
      singleValuePropTypeID: string,
      separatorChar: string,
      bDelayInit: boolean
    },
    InitSingleValuePropType(): void,
    LocStrToLocStrArray(locStr: string): string[],
    LocStrArrayToLocStr(locStrArray: string[]): string
  } & SP$JsGrid$IPropertyType;

  declare class SP$JsGrid$PropertyType {
    /**
     * Lookup property type factory, based on SP.JsGrid.PropertyType.LookupTable class.
     * displayCtrlName should be one of the following: SP.JsGrid.DisplayControl.Type.Image, SP.JsGrid.DisplayControl.Type.ImageText or SP.JsGrid.DisplayControl.Type.Text
     */
    static RegisterNewLookupPropType(
      id: string,
      items: any[],
      displayCtrlName: string,
      bLimitToList: boolean
    ): void;

    /**
     * Register a custom property type.
     */
    static RegisterNewCustomPropType(
      propType: SP$JsGrid$IPropertyType,
      displayCtrlName: string,
      editControlName: string,
      widgetControlNames: string[]
    ): void;

    /**
     * Register a custom property type, where display and edit controls, and also widgets, are derived from the specified parent property type.
     */
    static RegisterNewDerivedCustomPropType(
      propType: SP$JsGrid$IPropertyType,
      baseTypeName: string
    ): void;
  }

  declare var npm$namespace$SP$JsGrid$PropertyType: {
    String: typeof SP$JsGrid$PropertyType$String,
    LookupTable: typeof SP$JsGrid$PropertyType$LookupTable,
    CheckBoxBoolean: typeof SP$JsGrid$PropertyType$CheckBoxBoolean,
    DropDownBoolean: typeof SP$JsGrid$PropertyType$DropDownBoolean,
    MultiValuePropType: typeof SP$JsGrid$PropertyType$MultiValuePropType,
    HyperLink: typeof SP$JsGrid$PropertyType$HyperLink,
    Utils: typeof SP$JsGrid$PropertyType$Utils
  };
  declare class SP$JsGrid$PropertyType$String mixins SP$JsGrid$IPropertyType {
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
      fnError: any
    ): void;
    toString(): string;
  }

  declare class SP$JsGrid$PropertyType$LookupTable
    mixins SP$JsGrid$ILookupPropertyType {
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
      fnError: any
    ): void;
    GetItems(fnCallback: any): void;
    DataToLocalized(dataValue: any): string;
    LocalizedToData(localized: string): any;
    GetImageSource(record: SP$JsGrid$IRecord, dataValue: any): string;
    GetStyleId(dataValue: any): string;
    GetIsLimitedToList(): boolean;
    GetSerializableLookupPropType(): {
      items: any[],
      id: string,
      bLimitToList: boolean
    };
  }

  declare class SP$JsGrid$PropertyType$CheckBoxBoolean
    mixins SP$JsGrid$IPropertyType {
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
      fnError: any
    ): void;
    DataToLocalized(dataValue: any): string;
    GetBool(dataValue: any): boolean;
    toString(): string;
  }

  declare class SP$JsGrid$PropertyType$DropDownBoolean
    mixins SP$JsGrid$IPropertyType {
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
      fnError: any
    ): void;
    DataToLocalized(dataValue: any): string;
    GetBool(dataValue: any): boolean;
    toString(): string;
  }

  declare class SP$JsGrid$PropertyType$MultiValuePropType
    mixins SP$JsGrid$IMultiValuePropertyType {
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
      fnError: any
    ): void;
    bMultiValue: boolean;
    separator: string;
    singleValuePropType: string;
    GetSerializableMultiValuePropType(): {
      singleValuePropTypeID: string,
      separatorChar: string,
      bDelayInit: boolean
    };
    InitSingleValuePropType(): void;
    LocStrToLocStrArray(locStr: string): string[];
    LocStrArrayToLocStr(locStrArray: string[]): string;
  }

  declare class SP$JsGrid$PropertyType$HyperLink
    mixins SP$JsGrid$IPropertyType {
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
      fnError: any
    ): void;
    bHyperlink: boolean;
    DataToLocalized(dataValue: any): string;
    GetAddress(dataValue: any): string;

    /**
     * Returns string like this: '"http:// site.com, Site title"'
     */
    GetCopyValue(
      record: SP$JsGrid$IRecord,
      dataValue: any,
      locValue: string
    ): string;
    toString(): string;
  }

  declare class SP$JsGrid$PropertyType$Utils {
    static RegisterDisplayControl(
      name: string,
      singleton: any,
      requiredFunctionNames: string[]
    ): void;
    static RegisterEditControl(
      name: string,
      factory: (
        gridContext: SP$JsGrid$IEditControlGridContext,
        gridTextInputElement: HTMLElement
      ) => JsGrid$IEditControl,
      requiredFunctionNames: string[]
    ): void;
    static RegisterWidgetControl(
      name: string,
      factory: (ddContext: any) => SP$JsGrid$IPropertyType,
      requiredFunctionNames: string[]
    ): void;
    static UpdateDisplayControlForPropType(
      propTypeName: string,
      displayControlType: string
    ): void;
  }

  declare var npm$namespace$SP$JsGrid$WidgetControl: {
    Type: typeof SP$JsGrid$WidgetControl$Type
  };
  declare class SP$JsGrid$WidgetControl$Type {
    static Demo: string;
    static Date: string;
    static AddressBook: string;
    static Hyperlink: string;
  }

  declare var npm$namespace$SP$JsGrid$Internal: {
    DiffTracker: typeof SP$JsGrid$Internal$DiffTracker,
    PropertyUpdate: typeof SP$JsGrid$Internal$PropertyUpdate
  };
  declare class SP$JsGrid$Internal$DiffTracker {
    constructor(
      objBag: any,
      fnGetChange: (
        version: any,
        keys: any[],
        synchronized: boolean,
        includeInvalidPropUpdates: boolean
      ) => any
    ): this;
    ExternalAPI: {
      AnyChanges(): boolean,
      ChangeKeySliceInfo(): any,
      ChangeQuery(): any,
      EventSliceInfo(): any,
      GetChanges(
        optStartEvent: any,
        optEndEvent: any,
        optRecordKeys: any,
        bFirstStartEvent: boolean,
        bStartInclusive: boolean,
        bEndInclusive: boolean,
        bIncludeInvalidPropUpdates: boolean,
        bLastEndEvent: boolean
      ): any,
      GetChangesAsJson(
        changeQuery: any,
        optfnPreProcessUpdateForSerialize?: any
      ): string,
      GetUniquePropertyChanges(changeQuery: any, optfnFilter?: any): any,
      RegisterEvent(changeKey: SP$JsGrid$IChangeKey, eventObject: any): void,
      UnregisterEvent(changeKey: SP$JsGrid$IChangeKey, eventObject: any): void
    };
    Clear(): void;
    NotifySynchronizeToChange(changeKey: SP$JsGrid$IChangeKey): void;
    NotifyRollbackChange(changeKey: SP$JsGrid$IChangeKey): void;
    NotifyVacateChange(changeKey: SP$JsGrid$IChangeKey): void;
  }

  declare class SP$JsGrid$Internal$PropertyUpdate mixins SP$JsGrid$IValue {
    constructor(data: any, localized: string): this;
    data: any;
    localized: string;
  }

  declare interface SP$JsGrid$IEditActorCellContext {
    propType: SP$JsGrid$IPropertyType;
    originalValue: SP$JsGrid$IValue;
    record: SP$JsGrid$IRecord;
    column: SP$JsGrid$ColumnInfo;
    field: SP$JsGrid$GridField;
    fieldKey: string;
    cellExpandSpace: {
      left: number,
      top: number,
      fight: number,
      bottom: number
    };
    SetCurrentValue(value: any): void;
  }

  declare type SP$JsGrid$IEditControlCellContext = {
    cellWidth: number,
    cellHeight: number,
    cellStyle: any,
    cellRect: any,
    NotifyExpandControl(): void,
    NotifyEditComplete(): void,
    Show(element: HTMLElement): void,
    Hide(element: HTMLElement): void
  } & SP$JsGrid$IEditActorCellContext;

  declare interface SP$JsGrid$IEditControl {
    SupportedWriteMode?: $Values<typeof SP$JsGrid$EditActorWriteType>;
    SupportedReadMode?: $Values<typeof SP$JsGrid$EditActorReadType>;
    GetCellContext?: () => SP$JsGrid$IEditControlCellContext;
    GetOriginalValue?: () => SP$JsGrid$IValue;
    SetValue?: (value: SP$JsGrid$IValue) => void;
    Dispose(): void;
    GetInputElement?: () => HTMLElement;
    Focus?: (eventInfo: Sys.UI.DomEvent) => void;
    BindToCell(cellContext: SP$JsGrid$IEditControlCellContext): void;
    OnBeginEdit(eventInfo: Sys.UI.DomEvent): void;
    Unbind(): void;
    OnEndEdit(): void;
    OnCellMove?: () => void;
    OnValueChanged?: (newValue: SP$JsGrid$IValue) => void;
    IsCurrentlyUsingGridTextInputElement?: () => boolean;
    SetSize?: (width: number, height: number) => void;
  }

  declare class SP$JsGrid$StaticDataSource {
    constructor(
      jsGridData: JsGrid$IGridData,
      optFnGetPropType?: (
        recordKey: string,
        key: string,
        dataPropMap: {
          [name: string]: any
        }
      ) => any
    ): this;
    AddColumn(gridField: SP$JsGrid$GridField, values: SP$JsGrid$IValue[]): void;
    RemoveColumn(fieldKey: string): void;
    InitJsGridParams(
      optGridParams?: SP$JsGrid$JsGridControl$Parameters
    ): SP$JsGrid$JsGridControl$Parameters;
  }

  declare interface SP$JsGrid$IGridData {
    MetaData: JsGrid$IGridMetadata;
    Fields: JsGrid$IFieldInfo[];
    Columns: JsGrid$IColumnInfo[];
    LocalizedTable: any[];
    UnlocalizedTable: any[];
    ViewInfo: any[];
    MultiValueSeparator?: string;
    LookupTableInfo?: JsGrid$ILookupTableInfo[];
    PivotedColumns?: SP$JsGrid$ColumnInfo[];
    PaneLayout?: $Values<typeof SP$JsGrid$PaneLayout>;
    GanttInfo?: any;
    AutoFilterableColumns?: boolean;
    AutoFilterState?: any;
    SortState?: any[];
    HierarchyState?: any;
    TopRecord?: number;
    RecordCount?: number;
    AdditionalParams?: any;
    CellStyles?: any;
    GroupingGridRowStyleIds?: any[];
    UnfilteredHierarchy?: any;
    AutoFilterEntries?: any;
    ViewDepKeys?: any[];
  }

  declare interface SP$JsGrid$IColumnInfo {
    /**
     * Column title
     */
    name: string;

    /**
     * Column image URL.
     * If not null, the column header cell will show the image instead of title text.
     * If the title is defined at the same time as the imgSrc, the title will be shown as a tooltip.
     */
    imgSrc?: string;

    /**
     * Column identifier
     */
    columnKey: string;

    /**
     * Column identifier
     */
    fieldKey: string;

    /**
     * Field keys of the fields, that are displayed in this column
     */
    fieldKeys: string[];

    /**
     * Width of the column
     */
    width: number;

    /**
     * true by default
     */
    isVisible?: boolean;

    /**
     * true by default
     */
    isHidable?: boolean;

    /**
     * true by default
     */
    isResizable?: boolean;

    /**
     * true by default
     */
    isSortable?: boolean;

    /**
     * true by default
     */
    isAutoFilterable?: boolean;

    /**
     * false by default
     */
    isFooter?: boolean;
  }

  declare interface SP$JsGrid$IGridMetadata {
    KeyColumnName: string;
    IsGanttEnabled?: boolean;
    IsHierarchyEnabled?: boolean;
    IsSorted?: boolean;
    GroupingLevel?: number;
    GroupingPrefix?: string;
    RecordKeyHash?: string;
    RecordKeyOrderChanged?: any;
    GridOperationalConstantsFieldKeyMap?: {
      [index: number]: string
    };
  }

  declare interface SP$JsGrid$IFieldInfo {
    fieldKey: string;
    propertyTypeId: string;
    editMode?: $Values<typeof SP$JsGrid$EditMode>;
    hasDataValue?: boolean;
    hasLocalizedValue?: boolean;
    multiValue?: boolean;
    textDirection?: $Values<typeof SP$JsGrid$TextDirection>;
    dateOnly?: boolean;
    defaultCellStyleId?: any;
  }

  declare interface SP$JsGrid$ILookupTableInfo {
    id: string;
    showImage?: boolean;
    showText?: boolean;
    limitToList?: boolean;
    lookup: JsGrid$ILookupInfo[];
  }

  declare interface SP$JsGrid$ILookupInfo {
    localString: string;
    value: number;
  }

  declare class SP$GanttControl {
    static WaitForGanttCreation(
      callack: (control: SP$GanttControl) => void
    ): void;
    static Instances: SP$GanttControl[];
    static FnGanttCreationCallback: Array<(control: SP$GanttControl) => void>;
    get_Columns(): SP$JsGrid$ColumnInfo[];
  }

  /**
   * Register function to rerun on partial update in MDS-enabled site.
   */
  declare function RegisterModuleInit(
    scriptFileName: string,
    initFunc: () => void
  ): void;

  /**
   * Provides access to url and query string parts.
   */
  declare class JSRequest {
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
    static PathName: string;
  }
  declare interface _spPageContextInfo {
    alertsEnabled: boolean;
    allowSilverlightPrompt: string;
    blockDownloadsExperienceEnabled: boolean;
    canUserCreateMicrosoftForm: boolean;
    cdnPrefix: string;
    clientServerTimeDelta: number;
    CorrelationId: string;
    crossDomainPhotosEnabled: boolean;
    currentCultureName: string;
    currentLanguage: number;
    currentUICultureName: string;
    disableAppViews: boolean;
    disableFlows: boolean;
    env: string;
    farmLabel: string;
    formDigestValue: string;
    formDigestTimeoutSeconds: number;
    groupColor: string;
    groupHasHomepage: boolean;
    groupId: string;
    guestsEnabled: boolean;
    hasManageWebPermissions: boolean;
    isAnonymousGuestUser: boolean;
    isAppWeb: boolean;
    isExternalGuestUser: boolean;
    isNoScriptEnabled: boolean;
    isSiteAdmin: boolean;
    isSPO: boolean;
    isTenantDevSite: boolean;
    isWebWelcomePage: boolean;
    layoutsUrl: string;
    listBaseTemplate: number;
    listId: string;
    listPermsMask: {
      High: number,
      Low: number
    };
    listTitle: string;
    listUrl: string;
    maximumFileSize: number;
    openInClient: boolean;
    pageListId: string;
    pageItemId: number;
    pagePermsMask: {
      High: number,
      Low: number
    };
    pagePersonalizationScope: string;
    PreviewFeaturesEnabled: boolean;
    preferUserTimeZone: boolean;
    ProfileUrl: string;
    PublishingFeatureOn: boolean;
    RecycleBinItemCount: number;
    serverRedirectedUrl: string;
    serverRequestPath: string;
    serverTime: string;
    siteAbsoluteUrl: string;
    siteClassification: string;
    siteClientTag: string;
    siteColor: string;
    siteId: string;
    sitePagesEnabled: boolean;
    siteServerRelativeUrl: string;
    siteSubscriptionId: string;
    supportPoundStorePath: boolean;
    supportPercentStorePath: boolean;
    systemUserKey: string;
    tenantAppVersion: string;
    themeCacheToken: string;
    themedCssFolderUrl: string;
    themedImageFileNames: string;
    updateFormDigestPageLoaded: string;
    userDisplayName: string;
    userEmail: string;
    userId: number;
    userLoginName: string;
    viewOnlyExperienceEnabled: boolean;
    viewId: string;
    webAbsoluteUrl: string;
    webDescription: string;
    webId: string;
    webLanguage: number;
    webLogoUrl: string;
    webPermMasks: {
      High: number,
      Low: number
    };
    webServerRelativeUrl: string;
    webTemplate: string;
    webTitle: string;
    webUIVersion: number;
  }
  declare var _spPageContextInfo: _spPageContextInfo;
  declare interface _spFriendlyUrlPageContextInfo {
    termId: string;
    termSetId: string;
    termStoreId: string;
    title: string;
  }
  declare var _spFriendlyUrlPageContextInfo: _spFriendlyUrlPageContextInfo;
  declare function STSHtmlEncode(value: string): string;

  declare function STSHtmlDecode(value: string): string;

  declare function AddEvtHandler(
    element: HTMLElement,
    event: string,
    func: EventListener
  ): void;

  /**
   * Gets query string parameter
   */
  declare function GetUrlKeyValue(key: string): string;

  declare class AjaxNavigate {
    update(
      url: string,
      updateParts: {
        [name: string]: string | number
      },
      fullNavigate: boolean,
      anchorName: string
    ): void;
    add_navigate(handler: (obj: any, eventArgs: any) => void): void;
    remove_navigate(handler: (obj: any, eventArgs: any) => void): void;
    submit(formToSubmit: HTMLFormElement): void;
    getParam(paramName: string): string;
    getSavedFormAction(): string;
    get_href(): string;
    get_hash(): string;
    get_search(): string;
    convertMDSURLtoRegularURL(mdsPath: string): string;
  }
  declare var ajaxNavigate: AjaxNavigate;
  declare class Browseris {
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
    armProcessor: boolean;
  }
  declare var browseris: Browseris;
  declare type ContextInfo = {
    AllowGridMode: boolean,
    BasePermissions: any,
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
    ListSchema: SPClientTemplates$ListSchema,
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
    overrideDeleteConfirmation: string,
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
  } & SPClientTemplates$RenderContext;

  declare function GetCurrentCtx(): ContextInfo;

  declare function SetFullScreenMode(fullscreen: boolean): void;

  declare interface MQuery {
    (selector: string, context?: any): MQueryResultSetElements;
    (
      objectOrElement: MQueryResultSetElements | HTMLElement | HTMLElement[]
    ): MQueryResultSetElements;
    <T>(object?: MQueryResultSet<T> | T | T[]): MQueryResultSet<T>;
    throttle<T: (...args: any[]) => any>(
      fn: T,
      interval: number,
      shouldOverrideThrottle: boolean
    ): T;
    extend(target: any, ...objs: any[]): any;
    extend(deep: boolean, target: any, ...objs: any[]): any;
    makeArray<T>(obj: any): any[];
    isDefined(obj: any): boolean;
    isNotNull(obj: any): boolean;
    isUndefined(obj: any): boolean;
    isNull(obj: any): boolean;
    isUndefinedOrNull(obj: any): boolean;
    isDefinedAndNotNull(obj: any): boolean;
    isString(obj: any): boolean;
    isBoolean(obj: any): boolean;
    isFunction(obj: any): boolean;
    isArray(obj: any): boolean;
    isNode(obj: any): boolean;
    isElement(obj: any): boolean;
    isMQueryResultSet(obj: any): boolean;
    isNumber(obj: any): boolean;
    isObject(obj: any): boolean;
    isEmptyObject(obj: any): boolean;
    ready(callback: () => void): void;
    contains(container: HTMLElement, contained: HTMLElement): boolean;
    proxy(
      fn: (...args: any[]) => any,
      context: any,
      ...args: any[]
    ): (...args: any[]) => any;
    proxy(context: any, name: string, ...args: any[]): any;
    every<T>(
      obj: T[] | MQueryResultSet<T>,
      fn: (elementOfArray: T, indexInArray?: number) => boolean,
      context?: any
    ): boolean;
    some<T>(
      obj: T[] | MQueryResultSet<T>,
      fn: (elementOfArray: T, indexInArray?: number) => boolean,
      context?: any
    ): boolean;
    filter<T>(
      obj: T[],
      fn: (elementOfArray: T, indexInArray?: number) => boolean,
      context?: any
    ): T[];
    filter<T>(
      obj: MQueryResultSet<T>,
      fn: (elementOfArray: T, indexInArray?: number) => boolean,
      context?: any
    ): MQueryResultSet<T>;
    forEach<T>(
      obj: T[] | MQueryResultSet<T>,
      fn: (elementOfArray: T, indexInArray?: number) => void,
      context?: any
    ): void;
    map<T, U>(
      array: T[],
      callback: (elementOfArray: T, indexInArray?: number) => Srch$U
    ): Srch$U[];
    map<T, U>(
      array: MQueryResultSet<T>,
      callback: (elementOfArray: T, indexInArray?: number) => Srch$U
    ): MQueryResultSet<Srch$U>;
    indexOf<T>(obj: T[], object: T, startIndex?: number): number;
    lastIndexOf<T>(obj: T[], object: T, startIndex?: number): number;
    data(element: HTMLElement, key?: string, value?: any): any;
    removeData(element: HTMLElement, name?: string): MQueryResultSetElements;
    hasData(element: HTMLElement): boolean;
  }
  declare type MQueryResultSetElements = {
    append(
      node: HTMLElement | MQueryResultSetElements | string
    ): MQueryResultSetElements,
    bind(
      eventType: string,
      handler: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    unbind(
      eventType: string,
      handler: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    trigger(eventType: string): MQueryResultSetElements,
    one(
      eventType: string,
      handler: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
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
      context?: any
    ): MQueryResultSetElements,
    not(selector: string): MQueryResultSetElements,
    parent(selector?: string): MQueryResultSetElements,
    offsetParent(selector?: string): MQueryResultSetElements,
    parents(selector?: string): MQueryResultSetElements,
    parentsUntil(
      selectorOrElement?: string | HTMLElement,
      filter?: string
    ): MQueryResultSetElements,
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
      func: (index: number, attr: any) => any
    ): MQueryResultSetElements,
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
      callback?: (elementOfArray: HTMLElement, indexInArray: number) => any
    ): MQueryResultSetElements,
    blur(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
    change(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    click(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
    dblclick(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    error(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
    focus(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
    focusin(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    focusout(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    keydown(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    keypress(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    keyup(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
    load(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
    mousedown(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    mouseenter(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    mouseleave(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    mousemove(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    mouseout(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    mouseover(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    mouseup(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    resize(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    scroll(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    select(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    submit(
      handler?: (eventObject: MQueryEvent) => any
    ): MQueryResultSetElements,
    unload(handler?: (eventObject: MQueryEvent) => any): MQueryResultSetElements
  } & MQueryResultSet<HTMLElement>;

  declare interface MQueryResultSet<T> {
    [index: number]: T;
    contains(contained: T): boolean;
    filter(
      fn: (elementOfArray: T, indexInArray?: number) => boolean,
      context?: any
    ): MQueryResultSet<T>;
    every(
      fn: (elementOfArray: T, indexInArray?: number) => boolean,
      context?: any
    ): boolean;
    some(
      fn: (elementOfArray: T, indexInArray?: number) => boolean,
      context?: any
    ): boolean;
    map(
      callback: (elementOfArray: T, indexInArray?: number) => any
    ): MQueryResultSet<T>;
    forEach(
      fn: (elementOfArray: T, indexInArray?: number) => void,
      context?: any
    ): void;
    indexOf(object: any, startIndex?: number): number;
    lastIndexOf(object: any, startIndex?: number): number;
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
  } & Event;

  declare var m$: MQuery;
  declare class CalloutActionOptions {
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
    menuEntries: CalloutActionMenuEntry[];
  }

  /**
   * Defines a callout action menu entry
   */
  declare class CalloutActionMenuEntry {
    /**
     * Creates a callout action menu entry
     * @param text Text to be displayed as the menu item text
     * @param onClickCallback Callback that will be fired when the item is clicked
     * @param wzISrc Url of the icon
     * @param wzIAlt Alternative text for the icon image
     * @param wzISeq Sequence for the menu item
     * @param wzDesc Description of the menu item
     */
    constructor(
      text: string,
      onClickCallback: (
        actionMenuEntry: CalloutActionMenuEntry,
        actionMenuEntryIndex: number
      ) => void,
      wzISrc: string,
      wzIAlt: string,
      wzISeq: number,
      wzDesc: string
    ): this;
  }
  declare class CalloutActionMenu {
    constructor(actionsId: any): this;
    addAction(action: CalloutAction): void;
    getActions(): CalloutAction[];
    render(): void;
    refreshActions(): void;
    calculateActionWidth(): void;
  }
  declare class CalloutAction {
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
    set(options: CalloutActionOptions): void;
  }
  declare class Callout {
    /**
     * Sets options for the callout. Not all options can be changed for the callout after its creation.
     */
    set(options: CalloutOptions): any;

    /**
     * Adds event handler to the callout.
     * @param eventName one of the following: "opened", "opening", "closing", "closed"
     */
    addEventCallback(
      eventName: string,
      callback: (callout: Callout) => void
    ): void;

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
    destroy(): void;
  }
  declare class CalloutOpenOptions {
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
    showCloseButton: boolean;
  }
  declare class CalloutOptions {
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
    positionAlgorithm: (callout: Callout) => void;
  }
  declare class CalloutManager {
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
    static isAtLeastOneCalloutOn(): boolean;
  }

  declare var npm$namespace$SPClientTemplates: {
    FileSystemObjectType: typeof SPClientTemplates$FileSystemObjectType,
    ChoiceFormatType: typeof SPClientTemplates$ChoiceFormatType,
    ClientControlMode: typeof SPClientTemplates$ClientControlMode,
    RichTextMode: typeof SPClientTemplates$RichTextMode,
    UrlFormatType: typeof SPClientTemplates$UrlFormatType,
    DateTimeDisplayFormat: typeof SPClientTemplates$DateTimeDisplayFormat,
    DateTimeCalendarType: typeof SPClientTemplates$DateTimeCalendarType,
    UserSelectionMode: typeof SPClientTemplates$UserSelectionMode,
    TemplateManager: typeof SPClientTemplates$TemplateManager,
    Utility: typeof SPClientTemplates$Utility,
    ClientFormContext: typeof SPClientTemplates$ClientFormContext
  };

  declare var SPClientTemplates$FileSystemObjectType: {|
    +Invalid: 0, // 0
    +File: 1, // 1
    +Folder: 2, // 2
    +Web: 3 // 3
  |};

  declare var SPClientTemplates$ChoiceFormatType: {|
    +Dropdown: 0, // 0
    +Radio: 1 // 1
  |};

  declare var SPClientTemplates$ClientControlMode: {|
    +Invalid: 0, // 0
    +DisplayForm: 1, // 1
    +EditForm: 2, // 2
    +NewForm: 3, // 3
    +View: 4 // 4
  |};

  declare var SPClientTemplates$RichTextMode: {|
    +Compatible: 0, // 0
    +FullHtml: 1, // 1
    +HtmlAsXml: 2, // 2
    +ThemeHtml: 3 // 3
  |};

  declare var SPClientTemplates$UrlFormatType: {|
    +Hyperlink: 0, // 0
    +Image: 1 // 1
  |};

  declare var SPClientTemplates$DateTimeDisplayFormat: {|
    +DateOnly: 0, // 0
    +DateTime: 1, // 1
    +TimeOnly: 2 // 2
  |};

  declare var SPClientTemplates$DateTimeCalendarType: {|
    +None: 0, // 0
    +Gregorian: 1, // 1
    +Japan: 2, // 2
    +Taiwan: 3, // 3
    +Korea: 4, // 4
    +Hijri: 5, // 5
    +Thai: 6, // 6
    +Hebrew: 7, // 7
    +GregorianMEFrench: 8, // 8
    +GregorianArabic: 9, // 9
    +GregorianXLITEnglish: 10, // 10
    +GregorianXLITFrench: 11, // 11
    +KoreaJapanLunar: 12, // 12
    +ChineseLunar: 13, // 13
    +SakaEra: 14, // 14
    +UmAlQura: 15 // 15
  |};

  declare var SPClientTemplates$UserSelectionMode: {|
    +PeopleOnly: 0, // 0
    +PeopleAndGroups: 1 // 1
  |};

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
    FormatType: $Values<typeof SPClientTemplates$ChoiceFormatType>
  } & SPClientTemplates$FieldSchema_InForm;

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
  } & SPClientTemplates$FieldSchema_InForm;

  /**
   * Represents schema for a DateTime field in list form or in list view in grid mode
   */
  declare type SPClientTemplates$FieldSchema_InForm_DateTime = {
    /**
     * Type of calendar to use
     */
    CalendarType: $Values<typeof SPClientTemplates$DateTimeCalendarType>,

    /**
     * Display format for DateTime field.
     */
    DisplayFormat: $Values<typeof SPClientTemplates$DateTimeDisplayFormat>,

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
  } & SPClientTemplates$FieldSchema_InForm;

  /**
   * Represents schema for a DateTime field in list form or in list view in grid mode
   */
  declare type SPClientTemplates$FieldSchema_InForm_Geolocation = {
    BingMapsKey: string,
    IsBingMapBlockedInCurrentRegion: boolean
  } & SPClientTemplates$FieldSchema_InForm;

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
  } & SPClientTemplates$FieldSchema_InForm;

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
    RichTextMode: $Values<typeof SPClientTemplates$RichTextMode>,

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
  } & SPClientTemplates$FieldSchema_InForm;

  /**
   * Represents schema for a Number field in list form or in list view in grid mode
   */
  declare type SPClientTemplates$FieldSchema_InForm_Number = {
    ShowAsPercentage: boolean
  } & SPClientTemplates$FieldSchema_InForm;

  /**
   * Represents schema for a Number field in list form or in list view in grid mode
   */
  declare type SPClientTemplates$FieldSchema_InForm_Text = {
    MaxLength: number
  } & SPClientTemplates$FieldSchema_InForm;

  /**
   * Represents schema for a Number field in list form or in list view in grid mode
   */
  declare type SPClientTemplates$FieldSchema_InForm_Url = {
    DisplayFormat: $Values<typeof SPClientTemplates$UrlFormatType>
  } & SPClientTemplates$FieldSchema_InForm;

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
  } & SPClientTemplates$FieldSchema_InForm;

  declare interface SPClientTemplates$FieldSchema {
    /**
     * Specifies if the field can be edited while list view is in the Grid mode
     */
    AllowGridEditing: boolean;

    /**
     * String representation of the field type, e.g. "Lookup". Same as SPField.TypeAsString
     */
    FieldType: string;

    /**
     * Internal name of the field
     */
    Name: string;

    /**
     * For OOTB fields, returns the type of field. For "UserMulti" returns "User", for "LookupMulti" returns "Lookup".
     * For custom field types, returns base type of the field.
     */
    Type: string;
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
  } & SPClientTemplates$FieldSchema;

  declare interface SPClientTemplates$ListSchema {
    Field: SPClientTemplates$FieldSchema[];
  }

  declare type SPClientTemplates$ListSchema_InForm = {
    Field: SPClientTemplates$FieldSchema_InForm[]
  } & SPClientTemplates$ListSchema;

  declare interface SPClientTemplates$ListData_InForm {
    Items: SPClientTemplates$Item[];
  }

  declare type SPClientTemplates$RenderContext_FieldInForm = {
    CurrentGroupIdx: number,
    CurrentGroup: SP$Group,
    CurrentItems: SPClientTemplates$Item[],
    CurrentFieldSchema: SPClientTemplates$FieldSchema_InForm,
    CurrentFieldValue: any
  } & SPClientTemplates$RenderContext_Form;

  declare type SPClientTemplates$RenderContext_Form = {
    CurrentItem: SPClientTemplates$Item,
    FieldControlModes: {
      [fieldInternalName: string]: $Values<
        typeof SPClientTemplates$ClientControlMode
      >
    },
    FormContext: SPClientTemplates$ClientFormContext,
    FormUniqueId: string,
    ListData: SPClientTemplates$ListData_InForm,
    ListSchema: SPClientTemplates$ListSchema_InForm,
    CSRCustomLayout?: boolean
  } & SPClientTemplates$RenderContext;

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
  } & SPClientTemplates$FieldSchema_InView;

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
  } & SPClientTemplates$FieldSchema_InView;

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
    ID: string,

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
  } & SPClientTemplates$FieldSchema;

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
    Filter: any,

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
    View: string,

    /**
     * JSON string
     */
    ViewSelectorPivotMenuOptions: string,

    /**
     * Query string parameters that specify current root folder (RootFolder) and folder content type id (FolderCTID)
     */
    ViewSelector_ViewParameters: string
  } & SPClientTemplates$ListSchema;

  declare interface SPClientTemplates$ListData_InView {
    FilterLink: string;
    FilterFields: string;
    FirstRow: number;

    /**
     * Either "0" or "1"
     */
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;

    /**
     * Link to the previous page (not defined if not available)
     */
    PrevHref: string;

    /**
     * Link to the next page  (not defined if not available)
     */
    NextHref: string;
    SortField: string;
    SortDir: string;
    LastRow: number;
    Row: SPClientTemplates$Item[];
  }

  declare type SPClientTemplates$RenderContext_GroupInView = {
    CurrentGroupIdx: number,
    CurrentGroup: SP$Group,
    CurrentItems: SPClientTemplates$Item[]
  } & SPClientTemplates$RenderContext_InView;

  declare type SPClientTemplates$RenderContext_InView = {
    AllowCreateFolder: boolean,
    AllowGridMode: boolean,
    BasePermissions: {
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
    ListSchema: SPClientTemplates$ListSchema_InView,
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
    overrideDeleteConfirmation: string,
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
  } & SPClientTemplates$RenderContext;

  declare type SPClientTemplates$RenderContext_ItemInView = {
    CurrentItem: SPClientTemplates$Item,
    CurrentItemIdx: number
  } & SPClientTemplates$RenderContext_InView;

  declare type SPClientTemplates$RenderContext_FieldInView = {
    /**
     * If in grid mode (context.inGridMode == true), cast to FieldSchema_InForm, otherwise cast to FieldSchema_InView
     */
    CurrentFieldSchema:
      | SPClientTemplates$FieldSchema_InForm
      | SPClientTemplates$FieldSchema_InView,
    CurrentFieldValue: any,
    FieldControlsModes: {
      [fieldInternalName: string]: $Values<
        typeof SPClientTemplates$ClientControlMode
      >
    },
    FormContext: SPClientTemplates$ClientFormContext,
    FormUniqueId: string
  } & SPClientTemplates$RenderContext_ItemInView;

  declare interface SPClientTemplates$Item {
    [fieldInternalName: string]: any;
  }

  declare interface SPClientTemplates$Group {
    Items: SPClientTemplates$Item[];
  }

  declare type SPClientTemplates$RenderCallback = (
    ctx: SPClientTemplates$RenderContext
  ) => void;

  declare interface SPClientTemplates$RenderContext {
    BaseViewID?: number;
    ControlMode?: $Values<typeof SPClientTemplates$ClientControlMode>;
    CurrentCultureName?: string;
    CurrentLanguage?: number;
    CurrentSelectedItems?: any;
    CurrentUICultureName?: string;
    ListTemplateType?: number;
    OnPostRender?:
      | SPClientTemplates$RenderCallback
      | SPClientTemplates$RenderCallback[];
    OnPreRender?:
      | SPClientTemplates$RenderCallback
      | SPClientTemplates$RenderCallback[];
    onRefreshFailed?: any;
    RenderBody?: (renderContext: SPClientTemplates$RenderContext) => string;
    RenderFieldByName?: (
      renderContext: SPClientTemplates$RenderContext,
      fieldName: string
    ) => string;
    RenderFields?: (renderContext: SPClientTemplates$RenderContext) => string;
    RenderFooter?: (renderContext: SPClientTemplates$RenderContext) => string;
    RenderGroups?: (renderContext: SPClientTemplates$RenderContext) => string;
    RenderHeader?: (renderContext: SPClientTemplates$RenderContext) => string;
    RenderItems?: (renderContext: SPClientTemplates$RenderContext) => string;
    RenderView?: (renderContext: SPClientTemplates$RenderContext) => string;
    SiteClientTag?: string;
    Templates?: SPClientTemplates$Templates;
  }

  /**
   * Must return null in order to fall back to a more common template or to a system default template
   */
  declare type SPClientTemplates$SingleTemplateCallback = (
    renderContext: SPClientTemplates$RenderContext_InView
  ) => string;

  /**
   * Must return null in order to fall back to a more common template or to a system default template
   */
  declare type SPClientTemplates$GroupCallback = (
    renderContext: SPClientTemplates$RenderContext_GroupInView
  ) => string;

  /**
   * Must return null in order to fall back to a more common template or to a system default template
   */
  declare type SPClientTemplates$ItemCallback = (
    renderContext: SPClientTemplates$RenderContext
  ) => string;

  /**
   * Must return null in order to fall back to a more common template or to a system default template
   */
  declare type SPClientTemplates$FieldCallback = (
    renderContext: SPClientTemplates$RenderContext
  ) => string;

  /**
   * Must return null in order to fall back to a more common template or to a system default template
   */
  declare type SPClientTemplates$FieldInFormCallback = (
    renderContext: SPClientTemplates$RenderContext_FieldInForm
  ) => string;

  /**
   * Must return null in order to fall back to a more common template or to a system default template
   */
  declare type SPClientTemplates$FieldInViewCallback = (
    renderContext: SPClientTemplates$RenderContext_FieldInView
  ) => string;

  declare interface SPClientTemplates$FieldTemplateOverrides {
    /**
     * Defines templates for rendering the field on a display form.
     */
    DisplayForm?: SPClientTemplates$FieldInFormCallback;

    /**
     * Defines templates for rendering the field on an edit form.
     */
    EditForm?: SPClientTemplates$FieldInFormCallback;

    /**
     * Defines templates for rendering the field on a new form.
     */
    NewForm?: SPClientTemplates$FieldInFormCallback;

    /**
     * Defines templates for rendering the field on a list view.
     */
    View?: SPClientTemplates$FieldInViewCallback;
  }

  declare interface SPClientTemplates$FieldTemplates {
    [fieldInternalName: string]: SPClientTemplates$FieldCallback;
  }

  declare interface SPClientTemplates$Templates {
    View?: SPClientTemplates$RenderCallback | string;
    Body?: SPClientTemplates$RenderCallback | string;

    /**
     * Defines templates for rendering groups (aggregations).
     */
    Group?: SPClientTemplates$GroupCallback | string;

    /**
     * Defines templates for list items rendering.
     */
    Item?: SPClientTemplates$ItemCallback | string;

    /**
     * Defines template for rendering list view header.
     * Can be either string or SingleTemplateCallback
     */
    Header?: SPClientTemplates$SingleTemplateCallback | string;

    /**
     * Defines template for rendering list view footer.
     * Can be either string or SingleTemplateCallback
     */
    Footer?: SPClientTemplates$SingleTemplateCallback | string;

    /**
     * Defines templates for fields rendering. The field is specified by it's internal name.
     */
    Fields?: SPClientTemplates$FieldTemplates;
  }

  declare interface SPClientTemplates$FieldTemplateMap {
    [fieldInternalName: string]: SPClientTemplates$FieldTemplateOverrides;
  }

  declare interface SPClientTemplates$TemplateOverrides {
    View?: SPClientTemplates$RenderCallback | string;
    Body?: SPClientTemplates$RenderCallback | string;

    /**
     * Defines templates for rendering groups (aggregations).
     */
    Group?: SPClientTemplates$GroupCallback | string;

    /**
     * Defines templates for list items rendering.
     */
    Item?: SPClientTemplates$ItemCallback | string;

    /**
     * Defines template for rendering list view header.
     * Can be either string or SingleTemplateCallback
     */
    Header?: SPClientTemplates$SingleTemplateCallback | string;

    /**
     * Defines template for rendering list view footer.
     * Can be either string or SingleTemplateCallback
     */
    Footer?: SPClientTemplates$SingleTemplateCallback | string;

    /**
     * Defines templates for fields rendering. The field is specified by it's internal name.
     */
    Fields?: SPClientTemplates$FieldTemplateMap;
  }

  declare interface SPClientTemplates$TemplateOverridesOptions {
    /**
     * Template overrides
     */
    Templates?: SPClientTemplates$TemplateOverrides;

    /**
     * Callbacks called before rendering starts. Can be function (ctx: RenderContext) => void or array of functions.
     */
    OnPreRender?:
      | SPClientTemplates$RenderCallback
      | SPClientTemplates$RenderCallback[];

    /**
     * Callbacks called after rendered html inserted into DOM. Can be function (ctx: RenderContext) => void or array of functions.
     */
    OnPostRender?:
      | SPClientTemplates$RenderCallback
      | SPClientTemplates$RenderCallback[];

    /**
     * View style (SPView.StyleID) for which the templates should be applied.
     * If not defined, the templates will be applied only to default view style.
     */
    ViewStyle?: number;

    /**
     * List template type (SPList.BaseTemplate) for which the template should be applied.
     * If not defined, the templates will be applied to all lists.
     */
    ListTemplateType?: number;

    /**
     * Base view ID (SPView.BaseViewID) for which the template should be applied.
     * If not defined, the templates will be applied to all views.
     */
    BaseViewID?: number | string;
  }

  declare class SPClientTemplates$TemplateManager {
    static RegisterTemplateOverrides(
      renderCtx: SPClientTemplates$TemplateOverridesOptions
    ): void;
    static GetTemplates(
      renderCtx: SPClientTemplates$RenderContext
    ): SPClientTemplates$Templates;
  }

  declare interface SPClientTemplates$ClientUserValue {
    lookupId: number;
    lookupValue: string;
    displayStr: string;
    email: string;
    sip: string;
    title: string;
    picture: string;
    department: string;
    jobTitle: string;
  }

  declare interface SPClientTemplates$ClientLookupValue {
    LookupId: number;
    LookupValue: string;
  }

  declare interface SPClientTemplates$ClientUrlValue {
    URL: string;
    Description: string;
  }

  declare class SPClientTemplates$Utility {
    static ComputeRegisterTypeInfo(
      renderCtx: SPClientTemplates$TemplateOverridesOptions
    ): any;
    static ControlModeToString(
      mode: $Values<typeof SPClientTemplates$ClientControlMode>
    ): string;
    static FileSystemObjectTypeToString(
      fileSystemObjectType: $Values<
        typeof SPClientTemplates$FileSystemObjectType
      >
    ): string;
    static ChoiceFormatTypeToString(
      fileSystemObjectType: $Values<typeof SPClientTemplates$ChoiceFormatType>
    ): string;
    static RichTextModeToString(
      fileSystemObjectType: $Values<typeof SPClientTemplates$RichTextMode>
    ): string;
    static IsValidControlMode(mode: number): boolean;

    /**
     * Removes leading and trailing spaces
     */
    static Trim(str: string): string;

    /**
     * Creates SP.ClientContext based on the specified Web URL. If the SP.Runtime.js script is not loaded, returns null
     */
    static InitContext(webUrl: string): SP$ClientContext;
    static GetControlOptions(control: HTMLElement): any;
    static TryParseInitialUserValue(
      userStr: string
    ): SPClientTemplates$ClientUserValue[];

    /**
     * Tries to resolve user names from string. Pushes either ClientUserValue (if resolved successfully) or original string (if not) to the resulting array.
     */
    static TryParseUserControlValue(userStr: string, separator: string): any[];
    static GetPropertiesFromPageContextInfo(
      context: SPClientTemplates$RenderContext
    ): void;

    /**
     * Replaces tokens "~site/", "~sitecollection/", "~sitecollectionmasterpagegallery", "{lcid}", "{locale}" and "{siteclienttag}" with appropriate context values
     */
    static ReplaceUrlTokens(tokenUrl: string): string;
    static ParseLookupValue(
      valueStr: string
    ): SPClientTemplates$ClientLookupValue;
    static ParseMultiLookupValues(
      valueStr: string
    ): SPClientTemplates$ClientLookupValue[];

    /**
     * Represents lookup values array in some strange format
     */
    static BuildLookupValuesAsString(
      choiceArray: SPClientTemplates$ClientLookupValue[],
      isMultiLookup: boolean,
      setGroupDesc: boolean
    ): string;
    static ParseURLValue(value: string): SPClientTemplates$ClientUrlValue;
    static GetFormContextForCurrentField(
      context: SPClientTemplates$RenderContext_Form
    ): SPClientTemplates$ClientFormContext;

    /**
     * Returns ";#"
     */
    static UserLookupDelimitString: string;

    /**
     * Returns ";#"
     */
    static UserMultiValueDelimitString: string;
  }

  declare class SPClientTemplates$ClientFormContext {
    fieldValue: any;
    fieldSchema: SPClientTemplates$FieldSchema_InForm;
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
      BaseType: number,
      DefaultItemOpen: number,
      Direction: string,
      EnableVesioning: boolean,
      Id: string
    };
    registerInitCallback(fieldname: string, callback: () => void): void;
    registerFocusCallback(fieldname: string, callback: () => void): void;
    registerValidationErrorCallback(
      fieldname: string,
      callback: (error: any) => void
    ): void;
    registerGetValueCallback(fieldname: string, callback: () => any): void;
    updateControlValue(fieldname: string, value: any): void;
    registerClientValidator(
      fieldname: string,
      validator: SPClientForms$ClientValidation$ValidatorSet
    ): void;
    registerHasValueChangedCallback(
      fieldname: string,
      callback: (eventArg?: any) => void
    ): void;
  }
  declare function GenerateIID(
    renderCtx: SPClientTemplates$RenderContext_ItemInView
  ): string;

  declare function GenerateIIDForListItem(
    renderCtx: SPClientTemplates$RenderContext_InView,
    listItem: SPClientTemplates$Item
  ): string;

  declare function SPFormControl_AppendValidationErrorMessage(
    nodeId: string,
    errorResult: any
  ): void;

  declare function CoreRender(template: any, context: any): string;

  declare var npm$namespace$SPClientForms: {
    FormManagerEvents: typeof SPClientForms$FormManagerEvents,
    ClientForm: typeof SPClientForms$ClientForm,
    ClientFormManager: typeof SPClientForms$ClientFormManager,
    ClientValidation: typeof npm$namespace$SPClientForms$ClientValidation
  };

  declare var npm$namespace$SPClientForms$ClientValidation: {
    ValidationResult: typeof SPClientForms$ClientValidation$ValidationResult,
    ValidatorSet: typeof SPClientForms$ClientValidation$ValidatorSet,
    RequiredValidator: typeof SPClientForms$ClientValidation$RequiredValidator,
    RequiredFileValidator: typeof SPClientForms$ClientValidation$RequiredFileValidator,
    RequiredRichTextValidator: typeof SPClientForms$ClientValidation$RequiredRichTextValidator,
    MaxLengthUrlValidator: typeof SPClientForms$ClientValidation$MaxLengthUrlValidator
  };
  declare class SPClientForms$ClientValidation$ValidationResult {
    constructor(hasErrors: boolean, errorMsg: string): this;
  }

  declare class SPClientForms$ClientValidation$ValidatorSet {
    RegisterValidator(validator: ClientValidation$IValidator): void;
  }

  declare interface SPClientForms$ClientValidation$IValidator {
    Validate(value: any): SPClientForms$ClientValidation$ValidationResult;
  }

  declare class SPClientForms$ClientValidation$RequiredValidator
    mixins SPClientForms$ClientValidation$IValidator {
    Validate(value: any): SPClientForms$ClientValidation$ValidationResult;
  }

  declare class SPClientForms$ClientValidation$RequiredFileValidator
    mixins SPClientForms$ClientValidation$IValidator {
    Validate(value: any): SPClientForms$ClientValidation$ValidationResult;
  }

  declare class SPClientForms$ClientValidation$RequiredRichTextValidator
    mixins SPClientForms$ClientValidation$IValidator {
    Validate(value: any): SPClientForms$ClientValidation$ValidationResult;
  }

  declare class SPClientForms$ClientValidation$MaxLengthUrlValidator
    mixins SPClientForms$ClientValidation$IValidator {
    Validate(value: any): SPClientForms$ClientValidation$ValidationResult;
  }

  declare var SPClientForms$FormManagerEvents: {|
    +Event_OnControlValueChanged: 0, // 0
    +Event_OnControlInitializedCallback: 1, // 1
    +Event_OnControlFocusSetCallback: 2, // 2
    +Event_GetControlValueCallback: 3, // 3
    +Event_OnControlValidationError: 4, // 4
    +Event_RegisterControlValidator: 5, // 5
    +Event_GetHasValueChangedCallback: 6 // 6
  |};

  declare class SPClientForms$ClientForm {
    constructor(qualifier: string): this;
    RenderClientForm(): void;
    SubmitClientForm(): boolean;
    NotifyControlEvent(
      eventName: $Values<typeof SPClientForms$FormManagerEvents>,
      fldName: string,
      eventArg: any
    ): void;
  }

  declare class SPClientForms$ClientFormManager {
    static GetClientForm(qualifier: string): SPClientForms$ClientForm;
    static RegisterClientForm(qualifier: string): void;
    static SubmitClientForm(qualifier: string): boolean;
  }
  declare class SPMgr {
    NewGroup(
      listItem: {
        [name: string]: any
      },
      fieldName: string
    ): boolean;
    RenderHeader(
      renderCtx: SPClientTemplates$RenderContext,
      field: SPClientTemplates$FieldSchema
    ): string;
    RenderField(
      renderCtx: SPClientTemplates$RenderContext,
      field: SPClientTemplates$FieldSchema,
      listItem: {
        [name: string]: any
      },
      listSchema: SPClientTemplates$ListSchema
    ): string;
    RenderFieldByName(
      renderCtx: SPClientTemplates$RenderContext,
      fieldName: string,
      listItem: {
        [name: string]: any
      },
      listSchema: SPClientTemplates$ListSchema
    ): string;
  }
  declare var spMgr: SPMgr;
  declare function SPField_FormDisplay_Default(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPField_FormDisplay_DefaultNoEncode(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPField_FormDisplay_Empty(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldText_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldNumber_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldBoolean_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldNote_Display(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldNote_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldFile_Display(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldFile_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldChoice_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldChoice_Dropdown_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldChoice_Radio_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldMultiChoice_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldDateTime_Display(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldDateTime_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldUrl_Display(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldUrl_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldUser_Display(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldUserMulti_Display(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPClientPeoplePickerCSRTemplate(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldLookup_Display(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldLookup_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldLookupMulti_Edit(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare function SPFieldAttachments_Default(
    ctx: SPClientTemplates$RenderContext_FieldInForm
  ): string;

  declare var npm$namespace$SPAnimation: {
    Attribute: typeof SPAnimation$Attribute,
    ID: typeof SPAnimation$ID,
    Settings: typeof SPAnimation$Settings,
    State: typeof SPAnimation$State,
    Object: typeof SPAnimation$Object
  };

  declare var SPAnimation$Attribute: {|
    +PositionX: 0, // 0
    +PositionY: 1, // 1
    +Height: 2, // 2
    +Width: 3, // 3
    +Opacity: 4 // 4
  |};

  declare var SPAnimation$ID: {|
    +Basic_Show: 0, // 0
    +Basic_SlowShow: 1, // 1
    +Basic_Fade: 2, // 2
    +Basic_Move: 3, // 3
    +Basic_Size: 4, // 4
    +Content_SlideInFadeInRight: 5, // 5
    +Content_SlideInFadeInRightInc: 6, // 6
    +Content_SlideOutFadeOutRight: 7, // 7
    +Content_SlideInFadeInLeft: 8, // 8
    +Content_SlideInFadeInLeftInc: 9, // 9
    +SmallObject_SlideInFadeInTop: 10, // 10
    +SmallObject_SlideInFadeInLeft: 11, // 11
    +Test_Instant: 12, // 12
    +Test_Hold: 13, // 13
    +Basic_Opacity: 14, // 14
    +Basic_QuickShow: 15, // 15
    +Basic_QuickFade: 16, // 16
    +Content_SlideInFadeInGeneric: 17, // 17
    +Basic_StrikeThrough: 18, // 18
    +SmallObject_SlideInFadeInBottom: 19, // 19
    +SmallObject_SlideOutFadeOutBottom: 20, // 20
    +Basic_QuickSize: 21 // 21
  |};

  declare class SPAnimation$Settings {
    static DisableAnimation(): void;
    static DisableSessionAnimation(): void;
    static IsAnimationEnabled(): boolean;
  }

  declare class SPAnimation$State {
    SetAttribute(
      attributeId: $Values<typeof SPAnimation$Attribute>,
      value: number
    ): void;
    GetAttribute(attributeId: $Values<typeof SPAnimation$Attribute>): number;
    GetDataIndex(attributeId: $Values<typeof SPAnimation$Attribute>): number;
  }

  declare class SPAnimation$Object {
    constructor(
      animationID: $Values<typeof SPAnimation$ID>,
      delay: number,
      element: HTMLElement | HTMLElement[],
      finalState: SPAnimation$State,
      finishFunc?: (data: any) => void,
      data?: any
    ): this;
    RunAnimation(): void;
  }

  declare var npm$namespace$SPAnimationUtility: {
    BasicAnimator: typeof SPAnimationUtility$BasicAnimator
  };
  declare class SPAnimationUtility$BasicAnimator {
    static FadeIn(
      element: HTMLElement,
      finishFunc?: (data: any) => void,
      data?: any
    ): void;
    static FadeOut(
      element: HTMLElement,
      finishFunc?: (data: any) => void,
      data?: any
    ): void;
    static Move(
      element: HTMLElement,
      posX: number,
      posY: number,
      finishFunc?: (data: any) => void,
      data?: any
    ): void;
    static StrikeThrough(
      element: HTMLElement,
      strikeThroughWidth: number,
      finishFunc?: (data: any) => void,
      data?: any
    ): void;
    static Resize(
      element: HTMLElement,
      newHeight: number,
      newWidth: number,
      finishFunc?: (data: any) => void,
      data?: any
    ): void;
    static CommonResize(
      element: HTMLElement,
      newHeight: number,
      newWidth: number,
      finishFunc: (data: any) => void,
      data: any,
      animationId: $Values<typeof SPAnimation$ID>
    ): void;
    static QuickResize(
      element: HTMLElement,
      newHeight: number,
      newWidth: number,
      finishFunc?: (data: any) => void,
      data?: any
    ): void;
    static ResizeContainerAndFillContent(
      element: HTMLElement,
      newHeight: number,
      newWidth: number,
      finishFunc: () => void,
      fAddToEnd: boolean
    ): void;
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
      widthValue: number
    ): void;
    static PositionAbsolute(element: HTMLElement): void;
    static PositionRelative(element: HTMLElement): void;
    static PositionRelativeExact(
      element: HTMLElement,
      topValue: number,
      leftValue: number,
      heightValue: number,
      widthValue: number
    ): void;
    static PositionAbsoluteExact(
      element: HTMLElement,
      topValue: number,
      leftValue: number,
      heightValue: number,
      widthValue: number
    ): void;
    static IsPositioned(element: HTMLElement): boolean;
  }
  declare interface IEnumerator<T> {
    get_current(): T;
    moveNext(): boolean;
    reset(): void;
  }
  declare interface IEnumerable<T> {
    getEnumerator(): IEnumerator<T>;
  }

  declare var npm$namespace$Microsoft: {
    SharePoint: typeof npm$namespace$Microsoft$SharePoint,
    Office: typeof npm$namespace$Microsoft$Office
  };

  declare var npm$namespace$Microsoft$SharePoint: {
    Client: typeof npm$namespace$Microsoft$SharePoint$Client
  };

  declare var npm$namespace$Microsoft$SharePoint$Client: {
    Search: typeof npm$namespace$Microsoft$SharePoint$Client$Search
  };

  declare var npm$namespace$Microsoft$SharePoint$Client$Search: {
    Query: typeof npm$namespace$Microsoft$SharePoint$Client$Search$Query,
    WebControls: typeof npm$namespace$Microsoft$SharePoint$Client$Search$WebControls,
    Administration: typeof npm$namespace$Microsoft$SharePoint$Client$Search$Administration,
    Portability: typeof npm$namespace$Microsoft$SharePoint$Client$Search$Portability,
    Analytics: typeof npm$namespace$Microsoft$SharePoint$Client$Search$Analytics
  };

  declare var npm$namespace$Microsoft$SharePoint$Client$Search$Query: {
    QueryPropertyValueType: typeof Microsoft$SharePoint$Client$Search$Query$QueryPropertyValueType,
    ReorderingRuleMatchType: typeof Microsoft$SharePoint$Client$Search$Query$ReorderingRuleMatchType,
    SortDirection: typeof Microsoft$SharePoint$Client$Search$Query$SortDirection,
    Query: typeof Microsoft$SharePoint$Client$Search$Query$Query,
    KeywordQuery: typeof Microsoft$SharePoint$Client$Search$Query$KeywordQuery,
    SearchExecutor: typeof Microsoft$SharePoint$Client$Search$Query$SearchExecutor,
    StringCollection: typeof Microsoft$SharePoint$Client$Search$Query$StringCollection,
    QueryPersonalizationData: typeof Microsoft$SharePoint$Client$Search$Query$QueryPersonalizationData,
    QuerySuggestionResults: typeof Microsoft$SharePoint$Client$Search$Query$QuerySuggestionResults,
    PersonalResultSuggestion: typeof Microsoft$SharePoint$Client$Search$Query$PersonalResultSuggestion,
    QuerySuggestionQuery: typeof Microsoft$SharePoint$Client$Search$Query$QuerySuggestionQuery,
    KeywordQueryProperties: typeof Microsoft$SharePoint$Client$Search$Query$KeywordQueryProperties,
    QueryPropertyValue: typeof Microsoft$SharePoint$Client$Search$Query$QueryPropertyValue,
    QueryUtility: typeof Microsoft$SharePoint$Client$Search$Query$QueryUtility,
    ReorderingRule: typeof Microsoft$SharePoint$Client$Search$Query$ReorderingRule,
    Sort: typeof Microsoft$SharePoint$Client$Search$Query$Sort,
    ResultTableCollection: typeof Microsoft$SharePoint$Client$Search$Query$ResultTableCollection,
    ResultTable: typeof Microsoft$SharePoint$Client$Search$Query$ResultTable,
    RankingLabeling: typeof Microsoft$SharePoint$Client$Search$Query$RankingLabeling,
    PopularQuery: typeof Microsoft$SharePoint$Client$Search$Query$PopularQuery,
    QueryPropertyNames: typeof Microsoft$SharePoint$Client$Search$Query$QueryPropertyNames,
    QueryObjectPropertyNames: typeof Microsoft$SharePoint$Client$Search$Query$QueryObjectPropertyNames,
    KeywordQueryPropertyNames: typeof Microsoft$SharePoint$Client$Search$Query$KeywordQueryPropertyNames,
    KeywordQueryObjectPropertyNames: typeof Microsoft$SharePoint$Client$Search$Query$KeywordQueryObjectPropertyNames
  };

  /**
   * Contains information common to all types of search queries.
   */
  declare class Microsoft$SharePoint$Client$Search$Query$Query
    mixins SP$ClientObject {
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
    get_sourceId: () => SP$Guid;
    set_sourceId: (value: SP$Guid) => void;
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
      fPrefixMatchAllTerms: boolean
    ) => Query$QuerySuggestionResults;
  }

  /**
   * Contains information about a keyword based search query.
   */
  declare class Microsoft$SharePoint$Client$Search$Query$KeywordQuery
    mixins Microsoft$SharePoint$Client$Search$Query$Query {
    constructor(context: SP$ClientContext): this;
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
    set_trimDuplicatesIncludeId: (value: number) => void;
  }

  /**
   * Executes queries against a search server.
   */
  declare class Microsoft$SharePoint$Client$Search$Query$SearchExecutor
    mixins SP$ClientObject {
    constructor(context: SP$ClientContext): this;

    /**
     * Runs a query.
     */
    executeQuery: (
      query: Microsoft$SharePoint$Client$Search$Query$Query
    ) => SP$JsonObjectResult;
    executeQueries: (
      queryIds: string[],
      queries: Microsoft$SharePoint$Client$Search$Query$Query[],
      handleExceptions: boolean
    ) => SP$JsonObjectResult;
    recordPageClick: (
      pageInfo: string,
      clickType: string,
      blockType: number,
      clickedResultId: string,
      subResultIndex: number,
      immediacySourceId: string,
      immediacyQueryString: string,
      immediacyTitle: string,
      immediacyUrl: string
    ) => void;
    exportPopularQueries: (
      web: SP$Web,
      sourceId: SP$Guid
    ) => SP$JsonObjectResult;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$StringCollection
    mixins SP$ClientObjectCollection<string> {
    constructor(context: SP$ClientContext): this;
    itemAt(index: number): string;
    get_item(index: number): string;
    get_childItemType(): typeof String;
    add(property: string): void;
    clear(): void;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$QueryPersonalizationData
    mixins SP$ClientObject {}

  declare class Microsoft$SharePoint$Client$Search$Query$QuerySuggestionResults
    mixins SP$ClientValueObject {
    get_peopleNames: () => string[];
    set_peopleNames: (value: string[]) => void;
    get_personalResults: () => Query$PersonalResultSuggestion[];
    set_personalResults: (value: Query$PersonalResultSuggestion[]) => void;
    get_queries: () => Query$QuerySuggestionQuery[];
    set_queries: (value: Query$QuerySuggestionQuery[]) => void;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$PersonalResultSuggestion
    mixins SP$ClientValueObject {
    get_highlightedTitle: () => string;
    set_highlightedTitle: (value: string) => void;
    get_isBestBet: () => boolean;
    set_isBestBet: (value: boolean) => void;
    get_title: () => string;
    set_title: (value: string) => void;
    get_url: () => string;
    set_url: (value: string) => void;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$QuerySuggestionQuery
    mixins SP$ClientValueObject {
    get_isPersonal: () => boolean;
    set_isPersonal: (value: boolean) => void;
    get_query: () => string;
    set_query: (value: string) => void;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$KeywordQueryProperties
    mixins SP$ClientObject {
    get_item: (key: string) => any;
    set_item: (key: string, value: any) => void;
    setQueryPropertyValue: (name: string) => Query$QueryPropertyValue;
    getQueryPropertyValue: (
      name: string,
      value: Query$QueryPropertyValue
    ) => void;
  }

  declare var Microsoft$SharePoint$Client$Search$Query$QueryPropertyValueType: {|
    +none: 0, // 0
    +stringType: 1, // 1
    +int32TYpe: 2, // 2
    +booleanType: 3, // 3
    +stringArrayType: 4, // 4
    +unSupportedType: 5 // 5
  |};

  declare class Microsoft$SharePoint$Client$Search$Query$QueryPropertyValue
    mixins SP$ClientValueObject {
    get_boolVal: () => boolean;
    set_boolVal: (value: boolean) => boolean;
    get_intVal: () => number;
    set_intVal: (value: number) => number;
    get_queryPropertyValueTypeIndex: () => number;
    set_queryPropertyValueTypeIndex: (value: number) => void;
    get_strArray: () => string[];
    set_strArray: (value: string[]) => string[];
    get_strVal: () => string;
    set_strVal: (value: string) => string;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$QueryUtility {
    static create: (
      name: string,
      val: any
    ) => Microsoft$SharePoint$Client$Search$Query$QueryPropertyValue;
    static getQueryPropertyValueType: (
      val: Microsoft$SharePoint$Client$Search$Query$QueryPropertyValue
    ) => $Values<
      typeof Microsoft$SharePoint$Client$Search$Query$QueryPropertyValueType
    >;
    static queryPropertyValueToObject: (
      val: Microsoft$SharePoint$Client$Search$Query$QueryPropertyValue
    ) => any;
  }

  declare type Microsoft$SharePoint$Client$Search$Query$ReorderingRuleCollection = {
    itemAt(index: number): Query$ReorderingRule,
    get_item(index: number): Query$ReorderingRule,
    get_childItemType(): typeof Microsoft$SharePoint$Client$Search$Query$ReorderingRule,
    add(property: Query$ReorderingRule): void,
    clear(): void
  } & SP$ClientObjectCollection<Query$ReorderingRule>;

  declare var Microsoft$SharePoint$Client$Search$Query$ReorderingRuleMatchType: {|
    +resultContainsKeyword: 0, // 0
    +titleContainsKeyword: 1, // 1
    +titleMatchesKeyword: 2, // 2
    +urlStartsWith: 3, // 3
    +urlExactlyMatches: 4, // 4
    +contentTypeIs: 5, // 5
    +fileExtensionMatches: 6, // 6
    +resultHasTag: 7, // 7
    +manualCondition: 8 // 8
  |};

  declare class Microsoft$SharePoint$Client$Search$Query$ReorderingRule
    mixins SP$ClientValueObject {
    get_boost: () => number;
    set_boost: (value: number) => void;
    get_matchType: () => $Values<
      typeof Microsoft$SharePoint$Client$Search$Query$ReorderingRuleMatchType
    >;
    set_matchType: (
      value: $Values<
        typeof Microsoft$SharePoint$Client$Search$Query$ReorderingRuleMatchType
      >
    ) => void;
    get_matchValue: () => string;
    set_matchValue: (value: string) => void;
  }

  declare type Microsoft$SharePoint$Client$Search$Query$SortCollection = {
    itemAt(index: number): Query$Sort,
    get_item(index: number): Query$Sort,
    get_childItemType(): typeof Microsoft$SharePoint$Client$Search$Query$Sort,
    add(
      strProperty: string,
      sortDirection: $Values<
        typeof Microsoft$SharePoint$Client$Search$Query$SortDirection
      >
    ): void,
    clear(): void
  } & SP$ClientObjectCollection<Query$Sort>;

  declare var Microsoft$SharePoint$Client$Search$Query$SortDirection: {|
    +ascending: 0, // 0
    +descending: 1, // 1
    +fqlFormula: 2 // 2
  |};

  declare class Microsoft$SharePoint$Client$Search$Query$Sort
    mixins SP$ClientValueObject {
    get_direction: () => $Values<
      typeof Microsoft$SharePoint$Client$Search$Query$SortDirection
    >;
    set_direction: (
      value: $Values<
        typeof Microsoft$SharePoint$Client$Search$Query$SortDirection
      >
    ) => void;
    get_property: () => string;
    set_property: (value: string) => void;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$ResultTableCollection
    mixins SP$ClientValueObjectCollection<Query$ResultTable> {
    get_item: (index: number) => Query$ResultTable;
    get_elapsedTime: () => number;
    set_elapsedTime: (value: number) => void;
    get_properties: () => {
      [key: string]: any
    };
    get_queryErrors: () => {
      [key: string]: Microsoft$SharePoint$Client$Search$WebControls$ControlMessage
    };
    get_queryId: () => string;
    get_spellingSuggestion: () => string;
    get_triggeredRules: () => SP$Guid[];
    initPropertiesFromJson: (parentNode: any) => void;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$ResultTable
    mixins SP$ClientValueObject {
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
    initPropertiesFromJson: (parentNode: any) => void;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$RankingLabeling
    mixins SP$ClientObject {
    constructor(context: SP$ClientContext): this;
    getJudgementsForQuery: (query: string) => SP$JsonObjectResult;
    addJudgment: (userQuery: string, url: string, labelId: number) => void;
    normalizeResultUrl: (url: string) => SP$JsonObjectResult;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$PopularQuery
    mixins SP$ClientValueObject {
    get_clickCount: () => number;
    set_clickCount: (value: number) => void;
    get_LCID: () => number;
    set_LCID: (value: number) => void;
    get_queryCount: () => number;
    set_queryCount: (value: number) => void;
    get_queryText: () => string;
    set_queryText: (value: string) => void;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$QueryPropertyNames {
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
    static uiLanguage: string;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$QueryObjectPropertyNames {
    static hitHighlightedProperties: string;
    static personalizationData: string;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$KeywordQueryPropertyNames {
    static collapseSpecification: string;
    static enableSorting: string;
    static hiddenConstraints: string;
    static refiners: string;
    static trimDuplicatesIncludeId: string;
  }

  declare class Microsoft$SharePoint$Client$Search$Query$KeywordQueryObjectPropertyNames {
    static properties: string;
    static refinementFilters: string;
    static reorderingRules: string;
    static selectProperties: string;
    static sortList: string;
  }

  declare var npm$namespace$Microsoft$SharePoint$Client$Search$WebControls: {
    MessageLevel: typeof Microsoft$SharePoint$Client$Search$WebControls$MessageLevel,
    ControlMessage: typeof Microsoft$SharePoint$Client$Search$WebControls$ControlMessage
  };
  declare class Microsoft$SharePoint$Client$Search$WebControls$ControlMessage
    mixins SP$ClientValueObject {
    get_code: () => number;
    get_correlationID: () => string;
    get_encodeDetails: () => boolean;
    get_header: () => string;
    get_level: () => $Values<
      typeof Microsoft$SharePoint$Client$Search$WebControls$MessageLevel
    >;
    get_messageDetails: () => string;
    get_messageDetailsForViewers: () => string;
    get_serverTypeId: () => string;
    get_showForViewerUsers: () => boolean;
    get_showInEditModeOnly: () => boolean;
    get_stackTrace: () => string;
    get_type: () => string;
  }

  declare var Microsoft$SharePoint$Client$Search$WebControls$MessageLevel: {|
    +information: 0, // 0
    +warning: 1, // 1
    +error: 2 // 2
  |};

  declare var npm$namespace$Microsoft$SharePoint$Client$Search$Administration: {
    SearchObjectLevel: typeof Microsoft$SharePoint$Client$Search$Administration$SearchObjectLevel,
    DocumentCrawlLog: typeof Microsoft$SharePoint$Client$Search$Administration$DocumentCrawlLog,
    SearchObjectOwner: typeof Microsoft$SharePoint$Client$Search$Administration$SearchObjectOwner
  };
  declare class Microsoft$SharePoint$Client$Search$Administration$DocumentCrawlLog
    mixins SP$ClientObject {
    constructor(context: SP$ClientContext, site: SP$Site): this;
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
      endDateTime: Date
    ) => SP$JsonObjectResult;
  }

  declare class Microsoft$SharePoint$Client$Search$Administration$SearchObjectOwner
    mixins SP$ClientObject {
    constructor(
      context: SP$ClientContext,
      lowestCurrentLevelToUse: $Values<
        typeof Microsoft$SharePoint$Client$Search$Administration$SearchObjectLevel
      >
    ): this;
  }

  declare var Microsoft$SharePoint$Client$Search$Administration$SearchObjectLevel: {|
    +spWeb: 0, // 0
    +spSite: 1, // 1
    +spSiteSubscription: 2, // 2
    +ssa: 3 // 3
  |};

  declare var npm$namespace$Microsoft$SharePoint$Client$Search$Portability: {
    SearchConfigurationPortability: typeof Microsoft$SharePoint$Client$Search$Portability$SearchConfigurationPortability,
    SearchConfigurationPortabilityPropertyNames: typeof Microsoft$SharePoint$Client$Search$Portability$SearchConfigurationPortabilityPropertyNames
  };
  declare class Microsoft$SharePoint$Client$Search$Portability$SearchConfigurationPortability
    mixins SP$ClientObject {
    constructor(context: SP$ClientContext): this;
    get_importWarnings: () => string;
    exportSearchConfiguration: (
      owningScope: Microsoft$SharePoint$Client$Search$Administration$SearchObjectOwner
    ) => SP$JsonObjectResult;
    importSearchConfiguration: (
      owningScope: Microsoft$SharePoint$Client$Search$Administration$SearchObjectOwner,
      searchConfiguration: string
    ) => void;
    deleteSearchConfiguration: (
      owningScope: Microsoft$SharePoint$Client$Search$Administration$SearchObjectOwner,
      searchConfiguration: string
    ) => void;
  }

  declare class Microsoft$SharePoint$Client$Search$Portability$SearchConfigurationPortabilityPropertyNames {
    static importWarnings: string;
  }

  declare var npm$namespace$Microsoft$SharePoint$Client$Search$Analytics: {
    AnalyticsItemData: typeof Microsoft$SharePoint$Client$Search$Analytics$AnalyticsItemData,
    UsageAnalytics: typeof Microsoft$SharePoint$Client$Search$Analytics$UsageAnalytics
  };
  declare class Microsoft$SharePoint$Client$Search$Analytics$AnalyticsItemData
    mixins SP$ClientObject {
    get_lastProcessingTime: () => Date;
    get_totalHits: () => number;
    get_totalUniqueUsers: () => number;
    getHitCountForDay: (day: Date) => number;
    getUniqueUsersCountForDay: (day: Date) => number;
    getHitCountForMonth: (day: Date) => number;
    getUniqueUsersCountForMonth: (day: Date) => number;
  }

  declare class Microsoft$SharePoint$Client$Search$Analytics$UsageAnalytics
    mixins SP$ClientObject {
    getAnalyticsItemData: <T>(
      eventType: number,
      listItem: SP$ListItem<T>
    ) => Microsoft$SharePoint$Client$Search$Analytics$AnalyticsItemData;
    getAnalyticsItemDataForApplicationEventType: <T>(
      appEventType: SP$Guid,
      listItem: SP$ListItem<T>
    ) => Microsoft$SharePoint$Client$Search$Analytics$AnalyticsItemData;
    deleteStandardEventUsageData: (eventType: number) => void;
    deleteCustomEventUsageData: (appEventTypeId: SP$Guid) => void;
  }

  declare var npm$namespace$Microsoft$Office: {
    Server: typeof npm$namespace$Microsoft$Office$Server
  };

  declare var npm$namespace$Microsoft$Office$Server: {
    ReputationModel: typeof npm$namespace$Microsoft$Office$Server$ReputationModel
  };

  declare var npm$namespace$Microsoft$Office$Server$ReputationModel: {
    Reputation: typeof Microsoft$Office$Server$ReputationModel$Reputation
  };
  declare class Microsoft$Office$Server$ReputationModel$Reputation {
    constructor(): this;
    static setLike(
      context: SP$ClientContext,
      listId: string,
      itemId: number,
      like: boolean
    ): void;
    static setRating(
      context: SP$ClientContext,
      listId: string,
      itemId: number,
      rating: number
    ): void;
  }

  declare var npm$namespace$SPNotifications: {
    ContainerID: typeof SPNotifications$ContainerID,
    EventID: typeof SPNotifications$EventID
  };

  declare var SPNotifications$ContainerID: {|
    +Basic: 0, // 0
    +Status: 1 // 1
  |};

  declare var SPNotifications$EventID: {|
    +OnShow: 0, // 0
    +OnHide: 1, // 1
    +OnDisplayNotification: 2, // 2
    +OnRemoveNotification: 3, // 3
    +OnNotificationCountChanged: 4 // 4
  |};

  declare class SPStatusNotificationData {
    constructor(
      text: string,
      subText: string,
      imageUrl: string,
      sip: string
    ): this;
  }
  declare function RefreshCommandUI(): void;

  declare class SPClientAutoFill {
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
    constructor(
      elmTextId: string,
      elmContainerId: string,
      fnPopulateAutoFill: (targetElement: HTMLInputElement) => void
    ): this;
    TextElementId: string;
    AutoFillContainerId: string;
    AutoFillMenuId: string;
    VisibleItemCount: number;
    CurrentFocusOption: number;
    AutoFillMinTextLength: number;
    AutoFillTimeout: number;
    AutoFillCallbackTimeoutID: string;
    FuncOnAutoFillClose: (
      elmTextId: string,
      ojData: ISPClientAutoFillData
    ) => void;
    FuncPopulateAutoFill: (targetElement: HTMLElement) => void;
    AllOptionData: {
      [key: string]: ISPClientAutoFillData
    };
    PopulateAutoFill(
      jsonObjSuggestions: ISPClientAutoFillData[],
      fnOnAutoFillCloseFuncName: (
        elmTextId: string,
        objData: ISPClientAutoFillData
      ) => void
    ): void;
    IsAutoFillOpen(): boolean;
    SetAutoFillHeight(): void;
    SelectAutoFillOption(elemOption: HTMLElement): void;
    FocusAutoFill(): void;
    BlurAutoFill(): void;
    CloseAutoFill(ojData: ISPClientAutoFillData): void;
    UpdateAutoFillMenuFocus(bMoveNextLink: boolean): void;
    UpdateAutoFillPosition(): void;
  }
  declare interface ISPClientAutoFillData {
    AutoFillKey?: any;
    AutoFillDisplayText?: string;
    AutoFillSubDisplayText?: string;
    AutoFillTitleText?: string;
    AutoFillMenuOptionType?: number;
  }
  declare class SPClientPeoplePicker {
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
      schema: ISPClientPeoplePickerSchema
    ): void;
    static ParseUserKeyPaste(userKey: string): string;
    static GetTopLevelControl(elmChild: HTMLElement): HTMLElement;
    static AugmentEntity(
      entity: ISPClientPeoplePickerEntity
    ): ISPClientPeoplePickerEntity;
    static AugmentEntitySuggestions(
      pickerObj: SPClientPeoplePicker,
      allEntities: ISPClientPeoplePickerEntity[],
      mergeLocal?: boolean
    ): ISPClientPeoplePickerEntity[];
    static PickerObjectFromSubElement(
      elmSubElement: HTMLElement
    ): SPClientPeoplePicker;
    static TestLocalMatch(
      strSearchLower: string,
      dataEntity: ISPClientPeoplePickerEntity
    ): boolean;
    static BuildUnresolvedEntity(
      key: string,
      dispText: string
    ): ISPClientPeoplePickerEntity;
    static AddAutoFillMetaData(
      pickerObj: SPClientPeoplePicker,
      options: ISPClientPeoplePickerEntity[],
      numOpts: number
    ): ISPClientPeoplePickerEntity[];
    static BuildAutoFillMenuItems(
      pickerObj: SPClientPeoplePicker,
      options: ISPClientPeoplePickerEntity[]
    ): ISPClientPeoplePickerEntity[];
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
    OnValueChangedClientScript: (
      pickerElementId: string,
      users: ISPClientPeoplePickerEntity[]
    ) => void;
    OnUserResolvedClientScript: (
      pickerElementId: string,
      users: ISPClientPeoplePickerEntity[]
    ) => void;
    OnControlValidateClientScript: (
      pickerElementId: string,
      users: ISPClientPeoplePickerEntity[]
    ) => void;
    SP$UrlZone: $Values<typeof SP$UrlZone>;
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
    PrincipalAccountTypeEnum: $Values<typeof SP$Utilities$PrincipalType>;
    EnabledClaimProviders: string;
    SearchPrincipalSource: $Values<typeof SP$Utilities$PrincipalSource>;
    ResolvePrincipalSource: $Values<typeof SP$Utilities$PrincipalSource>;
    MaximumEntitySuggestions: number;
    EditorWidthSet: boolean;
    QueryScriptInit: boolean;
    AutoFillControl: SPClientAutoFill;
    TotalUserCount: number;
    UnresolvedUserCount: number;
    UserQueryDict: {
      [index: string]: SP$StringResult
    };
    ProcessedUserList: {
      [index: string]: SPClientPeoplePickerProcessedUser
    };
    HasInputError: boolean;
    HasServerError: boolean;
    ShowUserPresence: boolean;
    TerminatingCharacter: string;
    UnresolvedUserElmIdToReplace: string;
    WebApplicationID: SP$Guid;
    GetAllUserInfo(): ISPClientPeoplePickerEntity[];
    SetInitialValue(
      entities: ISPClientPeoplePickerEntity[],
      initialErrorMsg?: string
    ): void;
    AddUserKeys(userKeys: string, bSearch: boolean): void;
    BatchAddUserKeysOperation(allKeys: string[], numProcessed: number): void;
    ResolveAllUsers(fnContinuation: () => void): void;
    ExecutePickerQuery(
      queryIds: string,
      onSuccess: (queryId: string, result: SP$StringResult) => void,
      onFailure: (queryId: string, result: SP$StringResult) => void,
      fnContinuation: () => void
    ): void;
    AddUnresolvedUserFromEditor(bRunQuery?: boolean): void;
    AddUnresolvedUser(
      unresolvedUserObj: ISPClientPeoplePickerEntity,
      bRunQuery?: boolean
    ): void;
    UpdateUnresolvedUser(
      results: SP$StringResult,
      user: ISPClientPeoplePickerEntity
    ): void;
    AddPickerSearchQuery(queryStr: string): string;
    AddPickerResolveQuery(queryStr: string): string;
    GetPeoplePickerQueryParameters(): SP$UI$ApplicationPages$ClientPeoplePickerQueryParameters;
    AddProcessedUser(
      userObject: ISPClientPeoplePickerEntity,
      fResolved?: boolean
    ): string;
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
      fnCallback: (
        index: number,
        user: SPClientPeoplePickerProcessedUser
      ) => void
    ): void;
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
    AddResolvedUserToLocalCache(
      resolvedEntity: ISPClientPeoplePickerEntity,
      resolveText: string
    ): void;
  }
  declare interface ISPClientPeoplePickerSchema {
    TopLevelElementId?: string;
    EditorElementId?: string;
    AutoFillElementId?: string;
    ResolvedListElementId?: string;
    InitialHelpTextElementId?: string;
    WaitImageId?: string;
    HiddenInputId?: string;
    AllowMultipleValues?: boolean;
    Required?: boolean;
    AutoFillEnabled?: boolean;
    ForceClaims?: boolean;
    AllowEmailAddresses?: boolean;
    AllUrlZones?: boolean;
    UseLocalSuggestionCache?: boolean;
    UserNoQueryPermission?: boolean;
    VisibleSuggestions?: number;
    MaximumEntitySuggestions?: number;
    ErrorMessage?: string;
    InitialHelpText?: string;
    InitialSuggestions?: ISPClientPeoplePickerEntity[];
    UrlZone?: $Values<typeof SP$UrlZone>;
    WebApplicationID?: SP$Guid;
    SharePointGroupID?: number;

    /**
     * Specify User, DL, SecGroup or SPGroup
     */
    PrincipalAccountType?: string;
    EnabledClaimProvider?: string;
    ResolvePrincipalSource?: $Values<typeof SP$Utilities$PrincipalSource>;
    SearchPrincipalSource?: $Values<typeof SP$Utilities$PrincipalSource>;
    OnUserResolvedClientScript?: (
      pickerElementId: string,
      users: ISPClientPeoplePickerEntity[]
    ) => void;
    OnValueChangedClientScript?: (
      pickerElementId: string,
      users: ISPClientPeoplePickerEntity[]
    ) => void;

    /**
     * Number or '100%'
     */
    Width?: any;
    Rows?: number;
  }
  declare class SPClientPeoplePickerMRU {
    static PPMRUVersion: number;
    static MaxPPMRUItems: number;
    static PPMRUDomLocalStoreKey: string;
    static GetSPClientPeoplePickerMRU(): SPClientPeoplePickerMRU;
    GetItems(
      strKey: string
    ): {
      Key: string,
      [name: string]: any
    };
    SetItem<
      T: {
        Key: string
      }
    >(
      strSearchTerm: string,
      objEntity: T
    ): void;
    ResetCache(): void;
  }
  declare interface ISPClientPeoplePickerEntity {
    Key?: string;
    Description?: string;
    DisplayText?: string;
    EntityType?: string;
    ProviderDisplayName?: string;
    ProviderName?: string;
    IsResolved?: boolean;
    EntityData?: {
      Title: string,
      MobilePhone: string,
      Department: string,
      Email: string
    };
    MultipleMatches: ISPClientPeoplePickerEntity[];
    DomainText?: string;
    [key: string]: any;
  }
  declare class SPClientPeoplePickerProcessedUser {
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
    UpdateResolvedUser(
      newUserInfo: ISPClientPeoplePickerEntity,
      strNewElementId: string
    ): void;
    UpdateSuggestions(entity: ISPClientPeoplePickerEntity): void;
    BuildUserHTML(): string;
    UpdateUserMaxWidth(): void;
    ResolvedAsUnverifiedEmail(): string;
    static BuildUserPresenceHtml(
      elmId: string,
      strSip: string,
      bResolved?: boolean
    ): string;
    static GetUserContainerElement(elmChild: HTMLElement): HTMLElement;
    static HandleProcessedUserClick(ndClicked: HTMLElement): void;
    static DeleteProcessedUser(elmToRemove: HTMLElement): void;
    static HandleDeleteProcessedUserKey(e: Event): void;
    static HandleResolveProcessedUserKey(e: Event): void;
  }

  declare var npm$namespace$Define: {
    loadScript: typeof Define$loadScript,
    require: typeof Define$require,
    define: typeof Define$define
  };
  declare function Define$loadScript(
    url: string,
    successCallback: () => void,
    errCallback: () => void
  ): void;

  /**
   * Loads script from _layouts/15/[req].js
   */
  declare function Define$require(
    req: string,
    callback: (arg: any[]) => void
  ): void;

  /**
   * Loads script from _layouts/15/[req].js
   */
  declare function Define$require(
    req: string[],
    callback: (...args: any[]) => void
  ): void;

  declare function Define$define(
    name: string,
    deps: string[],
    def: (...args: any[]) => any
  ): void;

  declare var npm$namespace$Verify: {
    ArgumentType: typeof Verify$ArgumentType
  };
  declare function Verify$ArgumentType(arg: string, expected: any): void;

  declare var npm$namespace$BrowserStorage: {
    local: typeof BrowserStorage$local,
    session: typeof BrowserStorage$session
  };
  declare var BrowserStorage$local: BrowserStorage$CachedStorage;

  declare var BrowserStorage$session: BrowserStorage$CachedStorage;

  /**
   * Available only in SharePoint Online
   */
  declare interface BrowserStorage$CachedStorage {
    getItem(key: string): string;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clead(): void;
    length: number;
  }

  declare var npm$namespace$BrowserDetection: {
    browseris: typeof BrowserDetection$browseris
  };
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
    setOpacity: typeof CSSUtil$setOpacity
  };
  declare function CSSUtil$HasClass(
    elem: HTMLElement,
    className: string
  ): boolean;

  declare function CSSUtil$AddClass(elem: HTMLElement, className: string): void;

  declare function CSSUtil$RemoveClass(
    elem: HTMLElement,
    className: string
  ): void;

  declare function CSSUtil$pxToFloat(pxString: string): number;

  declare function CSSUtil$pxToNum(px: string): number;

  declare function CSSUtil$numToPx(n: number): string;

  declare function CSSUtil$getCurrentEltStyleByNames(
    elem: HTMLElement,
    styleNames: string[]
  ): string;

  declare function CSSUtil$getCurrentStyle(
    elem: HTMLElement,
    cssStyle: string
  ): string;

  declare function CSSUtil$getCurrentStyleCorrect(
    element: HTMLElement,
    camelStyleName: string,
    dashStyleName: string
  ): string;

  declare function CSSUtil$getOpacity(element: HTMLElement): number;

  declare function CSSUtil$setOpacity(
    element: HTMLElement,
    value: number
  ): void;

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
    rightToLeft: typeof DOM$rightToLeft
  };
  declare var DOM$rightToLeft: boolean;

  declare function DOM$cancelDefault(evt: Event): void;

  declare function DOM$AbsLeft(el: HTMLElement): number;

  declare function DOM$AbsTop(el: HTMLElement): number;

  declare function DOM$CancelEvent(evt: Event): void;

  declare function DOM$GetElementsByName(nae: string): NodeList;

  declare function DOM$GetEventCoords(
    evt: Event
  ): {
    x: number,
    y: number
  };

  declare function DOM$GetEventSrcElement(evt: Event): HTMLElement;

  declare function DOM$GetInnerText(el: HTMLElement): string;

  declare function DOM$PreventDefaultNavigation(evt: Event): void;

  declare function DOM$SetEvent(
    eventName: string,
    eventFunc: (
      eventName: string,
      fnContent: (evt: Event) => void,
      window?: Window
    ) => void,
    el: HTMLElement
  ): void;

  declare var npm$namespace$Encoding: {
    EncodeScriptQuote: typeof Encoding$EncodeScriptQuote,
    HtmlEncode: typeof Encoding$HtmlEncode,
    HtmlDecode: typeof Encoding$HtmlDecode,
    AttrQuote: typeof Encoding$AttrQuote,
    ScriptEncode: typeof Encoding$ScriptEncode,
    ScriptEncodeWithQuote: typeof Encoding$ScriptEncodeWithQuote,
    CanonicalizeUrlEncodingCase: typeof Encoding$CanonicalizeUrlEncodingCase
  };
  declare function Encoding$EncodeScriptQuote(str: string): string;

  declare function Encoding$HtmlEncode(str: string): string;

  declare function Encoding$HtmlDecode(str: string): string;

  declare function Encoding$AttrQuote(str: string): string;

  declare function Encoding$ScriptEncode(str: string): string;

  declare function Encoding$ScriptEncodeWithQuote(str: string): string;

  declare function Encoding$CanonicalizeUrlEncodingCase(str: string): string;

  declare var npm$namespace$IE8Support: {
    arrayIndexOf: typeof IE8Support$arrayIndexOf,
    attachDOMContentLoaded: typeof IE8Support$attachDOMContentLoaded,
    getComputedStyle: typeof IE8Support$getComputedStyle,
    stopPropagation: typeof IE8Support$stopPropagation
  };
  declare function IE8Support$arrayIndexOf<T>(
    array: T[],
    item: T,
    startIdx?: number
  ): number;

  declare function IE8Support$attachDOMContentLoaded(handler: () => void): void;

  declare function IE8Support$getComputedStyle(
    domObj: HTMLElement,
    camelStyleName: string,
    dashStyleName: string
  ): string;

  declare function IE8Support$stopPropagation(evt: Event): void;

  declare var npm$namespace$StringUtil: {
    BuildParam: typeof StringUtil$BuildParam,
    ApplyStringTemplate: typeof StringUtil$ApplyStringTemplate
  };
  declare function StringUtil$BuildParam(
    stPattern: string,
    ...params: any[]
  ): string;

  declare function StringUtil$ApplyStringTemplate(
    str: string,
    ...params: any[]
  ): string;

  declare var npm$namespace$TypeUtil: {
    IsArray: typeof TypeUtil$IsArray,
    IsNullOrUndefined: typeof TypeUtil$IsNullOrUndefined
  };
  declare function TypeUtil$IsArray(value: any): boolean;

  declare function TypeUtil$IsNullOrUndefined(value: any): boolean;

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
    ajaxNavigate: typeof Nav$ajaxNavigate
  };
  declare var Nav$ajaxNavigate: AjaxNavigate;

  declare function Nav$convertRegularURLtoMDSURL(
    webUrl: string,
    fullPath: string
  ): string;

  declare function Nav$isMDSUrl(url: string): boolean;

  declare function Nav$isPageUrlValid(url: string): boolean;

  declare function Nav$isPortalTemplatePage(url: string): boolean;

  declare function Nav$getAjaxLocationWindow(): string;

  declare function Nav$getSource(defaultSource?: string): string;

  declare function Nav$getUrlKeyValue(
    keyName: string,
    bNoDecode: boolean,
    url: string,
    bCaseInsensitive: boolean
  ): string;

  declare function Nav$getWindowLocationNoHash(hre: string): string;

  declare function Nav$goToHistoryLink(
    el: HTMLAnchorElement,
    strVersion: string
  ): void;

  declare function Nav$getGoToLinkUrl(el: HTMLAnchorElement): string;

  declare function Nav$goToLink(el: HTMLAnchorElement): void;

  declare function Nav$goToLinkOrDialogNewWindow(el: HTMLAnchorElement): void;

  declare function Nav$goToDiscussion(url: string): void;

  declare function Nav$onClickHook(evt: Event, topElm: HTMLElement): void;

  declare function Nav$pageUrlValidation(
    url: string,
    alertString: string
  ): string;

  declare function Nav$parseHash(
    hash: string
  ): {
    [name: string]: string
  };

  declare function Nav$navigate(url: string): void;

  declare function Nav$removeMDSQueryParametersFromUrl(url: string): string;

  declare function Nav$urlFromHashBag(hashObject: {
    [name: string]: string
  }): string;

  declare function Nav$wantsNewTab(evt: Event): boolean;

  declare var npm$namespace$URI_Encoding: {
    encodeURIComponent: typeof URI_Encoding$encodeURIComponent,
    escapeUrlForCallback: typeof URI_Encoding$escapeUrlForCallback
  };
  declare function URI_Encoding$encodeURIComponent(
    str: string,
    bAsUrl?: boolean,
    bForFilterQuery?: boolean,
    bForCallback?: boolean
  ): string;

  declare function URI_Encoding$escapeUrlForCallback(str: string): string;

  declare interface ListItem {
    ID: number;
    ContentTypeId: string;
  }

  declare var npm$namespace$ListModule: {
    Util: typeof npm$namespace$ListModule$Util
  };

  declare var npm$namespace$ListModule$Util: {
    createViewEditUrl: typeof ListModule$Util$createViewEditUrl,
    createItemPropertiesTitle: typeof ListModule$Util$createItemPropertiesTitle,
    clearSelectedItemsDict: typeof ListModule$Util$clearSelectedItemsDict,
    ctxInitItemState: typeof ListModule$Util$ctxInitItemState,
    getAttributeFromItemTable: typeof ListModule$Util$getAttributeFromItemTable,
    getSelectedItemsDict: typeof ListModule$Util$getSelectedItemsDict,
    removeOnlyPagingArgs: typeof ListModule$Util$removeOnlyPagingArgs,
    removePagingArgs: typeof ListModule$Util$removePagingArgs,
    showAttachmentRows: typeof ListModule$Util$showAttachmentRows
  };
  declare function ListModule$Util$createViewEditUrl(
    renderCtx: SPClientTemplates$RenderContext,
    listItem: SP$ListItem,
    useEditFormUrl?: boolean,
    appendSource?: boolean
  ): string;

  declare function ListModule$Util$createItemPropertiesTitle(
    renderCtx: SPClientTemplates$RenderContext,
    listItem: SP$ListItem
  ): string;

  declare function ListModule$Util$clearSelectedItemsDict(context: any): void;

  declare function ListModule$Util$ctxInitItemState(context: any): void;

  declare function ListModule$Util$getAttributeFromItemTable(
    itemTableParam: HTMLElement,
    strAttributeName: string,
    strAttributeOldName: string
  ): string;

  declare function ListModule$Util$getSelectedItemsDict(context: any): any;

  declare function ListModule$Util$removeOnlyPagingArgs(url: string): string;

  declare function ListModule$Util$removePagingArgs(url: string): string;

  declare function ListModule$Util$showAttachmentRows(): void;

  declare var npm$namespace$SPThemeUtils: {
    ApplyCurrentTheme: typeof SPThemeUtils$ApplyCurrentTheme,
    WithCurrentTheme: typeof SPThemeUtils$WithCurrentTheme,
    UseClientSideTheming: typeof SPThemeUtils$UseClientSideTheming,
    Suspend: typeof SPThemeUtils$Suspend
  };
  declare function SPThemeUtils$ApplyCurrentTheme(): void;

  declare function SPThemeUtils$WithCurrentTheme(
    resultCallback: (themesCache: any) => void
  ): void;

  declare function SPThemeUtils$UseClientSideTheming(): boolean;

  declare function SPThemeUtils$Suspend(): void;

  declare var npm$namespace$Srch: {
    EventType: typeof Srch$EventType,
    MessageLevel: typeof Srch$MessageLevel,
    UserActionType: typeof Srch$UserActionType,
    DateTimeKind: typeof Srch$DateTimeKind,
    ClientControl: typeof Srch$ClientControl,
    DataProvider: typeof Srch$DataProvider,
    DisplayControl: typeof Srch$DisplayControl,
    Refinement: typeof Srch$Refinement,
    RefinementControl: typeof Srch$RefinementControl,
    Result: typeof Srch$Result,
    SearchBox: typeof Srch$SearchBox,
    U: typeof Srch$U,
    ScriptApplicationManager: typeof Srch$ScriptApplicationManager,
    Res: typeof Srch$Res,
    U: typeof npm$namespace$Srch$U
  };

  declare var Srch$EventType: {|
    +none: 0, // 0
    +queryReady: 1, // 1
    +queryIssuing: 2, // 2
    +batchQueryIssuing: 3, // 3
    +resultReady: 4, // 4
    +batchResultReady: 5, // 5
    +queryStateChanged: 6, // 6
    +resultRendered: 7, // 7
    +preLoad: 8, // 8
    +load: 9, // 9
    +postLoad: 10 // 10
  |};

  declare var Srch$MessageLevel: {|
    +information: 0, // 0
    +warning: 1, // 1
    +error: 2 // 2
  |};

  declare var Srch$UserActionType: {|
    +search: 0, // 0
    +pageNext: 1, // 1
    +pagePrev: 2, // 2
    +refine: 3, // 3
    +sort: 4, // 4
    +filterLanguage: 5 // 5
  |};

  declare var Srch$DateTimeKind: {|
    +unspecified: 0, // 0
    +utc: 1, // 1
    +local: 2 // 2
  |};

  declare class Srch$ClientControl mixins Sys.UI.Control {
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
      loadStandAloneCustomScripts: any
    ): boolean;
    invokeAlternateRender(callback: any, container: any, ctx: any): any;
    invokeClientRenderer(node: any, ctx: any): any;
    processDataErrorMessages(dataErrorsList: any): any;
    processRenderingErrorMessages(ctx: any): any;
    hasMessages(): any;
    updateDisplayControlWithNewMessages(): any;

    /**
     * show/hide the DOM element associated with control
     */
    setControlElementVisibility(showElement: boolean): any;
    clickHandler(e: Event): any;
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
    getSortName(): string;
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
    render(): void;
  }

  declare class Srch$Refinement mixins Srch$DisplayControl {
    static createRefinementTextbox(name: string): Element;
    static submitMultiRefinement(
      name: string,
      control: Srch$Refinement,
      useContains: boolean,
      useKQL: boolean
    ): void;
    static ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes(
      inputText: string
    ): string;
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
      useKQL: boolean
    ): void;
    constructor(elem: Element): this;
    get_selectedRefinementControls(): Srch$RefinementControl[];
    set_selectedRefinementControls(
      value: Srch$RefinementControl[]
    ): Srch$RefinementControl[];
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
      tokenToDisplayValueMap: any
    ): void;
    updateRefinersJSON(refinersJSON: string): void;
    updateRefiners(
      refiners: any[],
      op: string,
      useKQL: boolean,
      tokenToDisplayValueMap: any
    ): void;
    removeRefinementCategory(rcs: any, filterName: string): void;
    replaceRefinementFilter(
      oldRefinementFilter: any,
      newRefinementFilter: any
    ): void;
    hasRefinementFilter(filterName: string, filterToken: string): boolean;
    hasAllRefinementFilters(
      filterName: string,
      filterTokens: string[]
    ): boolean;
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
    updateRefinementControls(newControls: Srch$RefinementControl[]): void;
  }

  declare class Srch$RefinementControl {
    constructor(
      propertyName: string,
      spec: string,
      renderTemplateId: string
    ): this;
    propertyName: string;
    spec: string;
    renderTemplateId: string;
    overrideDisplayName: string;
    useDefaultDateIntervals: boolean;
    containerId: string;
    alternateRenderer: any;
    alternateRenderContext: any;
    countDisplay: string;
    deepHits: number;
  }

  declare class Srch$Result mixins Srch$DisplayControl {
    static parsePropertyMappingWithSlotDisplayNames(
      mappings: any
    ): {
      [key: string]: any
    };
    static parsePropertyMappingsString(
      mappings: any
    ): {
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
      resultTableCollection: Microsoft$SharePoint$Client$Search$Query$ResultTableCollection
    ): void;
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
      resultTable: Microsoft$SharePoint$Client$Search$Query$ResultTable
    ): boolean;
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
      searchBoxPromptClass: string
    ): void;
    activateDefaultNavigationBehavior(): void;
    activateDefaultQuerySuggestionBehavior(): void;
  }

  declare type Srch$RenderFunction = (ctx: any) => string;

  declare class Srch$U {
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
    static ensureNotNullOrUndefined(
      value: any,
      context: any,
      methodName: string,
      paraName: string
    ): void;

    /**
     * Ensures that the given value is not null, undefined or empty; throws an exception otherwise.
     */
    static ensureNotNullOrEmptyString(
      value: string,
      context: any,
      methodName: string,
      paraName: string
    ): void;

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
    static setFieldOnObject(
      targetObject: any,
      fieldName: string,
      fieldValue: any
    ): boolean;

    /**
     * Safely gets field of an object (returns null if object is null or undefined)
     */
    static getFieldOnObject(targetObject: any, fieldName: string): any;

    /**
     * Safely gets field of an object or creates it if it is null or undefined
     */
    static getOrCreateFieldOnObject(
      targetObject: any,
      fieldName: string,
      defaultValue: any
    ): any;

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
      path?: string
    ): void;

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
    static trace(c: Srch$ClientControl, method: string, message: string): void;
    static traceFormatted(
      c: Srch$ClientControl,
      method: string,
      format: string,
      ...values: string[]
    ): void;

    /**
     * Same as $addHandler with safety checks
     */
    static addHandler(
      element: Element,
      eventName: string,
      handler: (instance: any, eventArgs: any) => void
    ): void;

    /**
     * Same as $removeHandler with safety checks
     */
    static removeHandler(
      element: Element,
      eventName: string,
      handler: (instance: any, eventArgs: any) => void
    ): void;

    /**
     * Returns true if the specified element is a descendant of the container element
     */
    static isDescendant(element: Element, container: Element): boolean;

    /**
     * Returns the closest to startingElement parent of the specified tag name
     */
    static getParentElementByName(
      startingElement: Element,
      tagName: string
    ): Element;

    /**
     * Returns the #s4-workspace element or if not found, then the fallback element
     */
    static getWorkspace(fallback: Element): Element;

    /**
     * Returns specified by attributeName attribute of startingElement or of it's closest parent who has it
     */
    static getParentAttributeByName(
      startingElement: Element,
      attributeName: string
    ): string;

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
    static toFormattedNumber(
      num: number,
      defaultDecimalPlacesIfNotInt: number
    ): string;

    /**
     * If number is more than 1000, rounds up three last digits, e.g. 72389 => '72,000+'. If number is more than 100000, returns '100,000+'
     */
    static toFriendlyNumber(num: number): string;

    /**
     * Returns human-readable size in kilobytes/megabytes etc. (the captions are localized)
     */
    static toFileSizeDisplay(
      numberOfBytes: number,
      showDecimalPart: boolean
    ): string;
    static getVideoImageWithFallbackSource(
      valueObject: any,
      width: number,
      height: number
    ): string;
    static getImageSourceWithRendition(
      imageInfo: any,
      width: number,
      height: number
    ): string;
    static parseTypedRangeToken(
      rangeFilterToken: string,
      objToStoreFilterTokenType: any
    ): any;
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
    static registerRenderTemplateByName(
      name: string,
      templateFunction: string | Srch$RenderFunction
    ): void;

    /**
     * Returns display template registered (can be either string or function)
     */
    static getRenderTemplateByName(
      name: string,
      renderCtx: any
    ): string | Srch$RenderFunction;
    static addRenderContextCallback(
      renderCtx: any,
      callbackType: any,
      callbackFunction: any,
      enforceUnique: any,
      templateFunction: any
    ): void;
    static setItemRenderWrapper(
      renderCtx: any,
      itemRenderWrapperFunction: any,
      templateFunction: any
    ): any;
    static logRenderingErrorMessageToContext(
      renderCtx: any,
      messageText: any,
      operationName: any
    ): void;

    /**
     * Gets the URL of template based on display template function or the rendering context
     */
    static getTemplateUrlFromFunctionOrRenderCtx(
      templateFunctionOrRenderCtx: any
    ): string;
    static createErrorObjectWithExecContext(
      messageText: any,
      operationName: any,
      templateFuncOrRenderCtx: any
    ): any;

    /**
     * Returns the CSR template that was previously registered using 'registerRenderTemplateByName' based on CSR template level
     */
    static resolveRenderTemplate(
      renderCtx: any,
      component: Srch$ClientControl,
      level: "Item" | "Group" | "View" | "Body"
    ): string | Srch$RenderFunction;

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
    static cancelEventEx(
      e: Event,
      preventDefault: boolean,
      stopPropagation: boolean
    ): void;

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
    static getIconUrlByFileExtension(
      item: string,
      defaultIconPath?: string
    ): string;

    /**
     * Returns string that contains safe call to HP.Show, passing over the itemId, hpContainerId and templateUrl parameters, and supplying true for wide parameter.
     */
    static getShowHoverPanelCallbackWide(
      itemId: string,
      hpContainerId: string,
      templateUrl: string
    ): string;

    /**
     * Returns string that contains safe call to HP.Show, passing over the itemId, hpContainerId and templateUrl parameters, and supplying false for wide parameter.
     */
    static getShowHoverPanelCallback(
      itemId: string,
      hpContainerId: string,
      templateUrl: string
    ): string;

    /**
     * Returns string that contains safe call to HP.Hide
     */
    static getHideHoverPanelCallback(): string;
    static getHighlightedProperty(
      key: string,
      result: any,
      property: string
    ): any;
    static processHHXML(pre: string): string;
    static createXMLDocument(xml: string): XMLDocument;
    static getUnEncodedMultiValuedResults(
      multiValue: string,
      maxItems: number,
      rawDelimiter: string
    ): string;
    static getTrimmedString(value: string, cutOff: number): string;
    static trimTitle(
      title: string,
      maximumLengthInChars: number,
      numberOfTermsToUse: number
    ): string;
    static extractReplyTitleFromSummary(
      hitHighlightedSummary: string,
      titleLength: number
    ): string;
    static getTrimmedProcessedHHXMLString(
      value: string,
      cutOff: number
    ): string;
    static getMultipleHHXMLNodeValues(
      xmlDoc: XMLDocument,
      nodeName: string,
      numItems: number,
      rawDelimiter: string
    ): string;
    static getSingleHHXMLNodeValue(
      xmlDoc: XMLDocument,
      nodeName: string
    ): string;
    static isTableTypeof(resultTable: any, tableTypeName: string): boolean;
    static isSubstrateTable(resultTable: any): boolean;
    static getTableOfType(
      tableCollection: Microsoft$SharePoint$Client$Search$Query$ResultTableCollection,
      tableTypeName: string
    ): Microsoft$SharePoint$Client$Search$Query$ResultTable;
    static isFirstPromotedBlock(
      resultTable: Microsoft$SharePoint$Client$Search$Query$ResultTable
    ): boolean;
    static isFirstRankedBlock(
      resultTable: Microsoft$SharePoint$Client$Search$Query$ResultTable
    ): boolean;
    static isIntentTable(
      resultTable: Microsoft$SharePoint$Client$Search$Query$ResultTable
    ): boolean;
    static createBehavior(
      id: string,
      type: any,
      properties: any,
      targetElementId: string
    ): any;

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
    static loadScripts(
      scriptReferences: string[],
      success: any,
      failure: any,
      timeout: number
    ): void;
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
      customOnClick: string
    ): string;

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
    static includeLanguageScript(
      templateLink: string,
      scriptLink: string
    ): void;
    static isSPFSKU(): boolean;

    /**
     * Retrieves localized string with the specified id
     */
    static loadResource(id: string): string;

    /**
     * Retrieves localized string with the specified id
     */
    static loadResourceForTemplate(
      id: string,
      templateFunc: (ctx: any) => string
    ): string;

    /**
     * Registers in system resources defined by the dictionary object
     */
    static registerResourceDictionary(
      locale: string,
      dict: {
        [key: string]: string
      }
    ): void;
    static restorePath(
      el: Element,
      originalText: string,
      selectText: string
    ): void;
    static selectPath(text: string, el: Element): void;
    static setPath(
      e: Event,
      el: Element,
      text: string,
      originalText: string
    ): void;
    static restoreText(
      el: Element,
      originalText: string,
      selectText: string
    ): void;
    static selectText(text: string, el: Element): void;

    /**
     * Renders datetime value in friendly format into element specified by targetElementID
     */
    static renderFriendlyTimeIntervalString(
      dateTimeSinceUTC: Date,
      targetElementID: string,
      calendarType?: number
    ): void;

    /**
     * Returns human-friendly representation of the datetime value, e.g. "A few seconds ago""
     */
    static getFriendlyTimeInterval(
      dateTimeSince: Date,
      calendarType: number
    ): string;

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
    static contentFixedWidthLength: number;
  }

  declare var npm$namespace$Srch$U: {
    LoadScriptsProgress: typeof Srch$U$LoadScriptsProgress,
    PropNames: typeof Srch$U$PropNames,
    Ids: typeof Srch$U$Ids,
    LoadScriptsState: typeof Srch$U$LoadScriptsState
  };
  declare class Srch$U$PropNames {
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
    static isFirstRankedBlock: "IsFirstRankedResultBlock";
  }

  declare class Srch$U$Ids {
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
    static postInfo: "_postInfo";
  }

  declare class Srch$U$LoadScriptsState {
    scriptsToLoad: any;
    progress: number;
    timeoutHandle: any;
  }

  declare var Srch$U$LoadScriptsProgress: {|
    +loading: 0, // 0
    +success: 1, // 1
    +failure: 2 // 2
  |};

  declare class Srch$ScriptApplicationManager {
    static get_current(): Srch$ScriptApplicationManager;
    static get_clientRuntimeContext(): SP$ClientRuntimeContext;

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
    remove_preLoad(
      handlerFunction: (instance: any, eventArgs: any) => void
    ): void;

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
    add_postLoad(
      handlerFunction: (instance: any, eventArgs: any) => void
    ): void;

    /**
     * Removes handler for the postload event
     */
    remove_postLoad(
      handlerFunction: (instance: any, eventArgs: any) => void
    ): void;

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
    registerClientControl(
      clientControl: Srch$DisplayControl | Srch$DataProvider | Srch$SearchBox
    ): void;

    /**
     * Puts specified hash-key address into the current page location.
     * @param url The hash-key, e.g. '#k=test'
     */
    navigateTo(url: string): void;

    /**
     * Gets the current search session ID from the cookies (if session ID does not exist in the cookies yet - it will be added)
     */
    get_searchSessionID(): void;
  }

  declare class Srch$Res {
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
    static rs_HasParseExceptionWarning_Line2: string;
  }

  /**
   * Returns true if the value parameter is null or empty string
   */
  declare function $isEmptyString(value: string): boolean;

  /**
   * Returns true if the value parameter is null or undefined
   */
  declare function $isNull(value: any): boolean;

  /**
   * Returns true if the specified item is found in the specified array (uses '===' for comparing)
   */
  declare function $isInArray(array: any[], item: any): boolean;

  /**
   * Returns true if the specified array is null or empty
   */
  declare function $isEmptyArray(array: any[]): boolean;

  /**
   * (alias for SP.Utilities.HttpUtility.htmlEncode)
   */
  declare function $htmlEncode(s: string): string;

  /**
   * (alias for SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode)
   */
  declare function $scriptEncode(s: string): string;

  /**
   * (alias for SP.Utilities.HttpUtility.urlKeyValueEncode)
   */
  declare function $urlKeyValueEncode(s: string): string;

  /**
   * (alias for SP.Utilities.HttpUtility.urlPathEncode)
   */
  declare function $urlPathEncode(s: string): string;

  /**
   * Ensures that url has correct protocol or is a relative URL, and html-encodes it.
   * If URL is incorrect, returns empty string.
   */
  declare function $urlHtmlEncode(s: string): string;

  declare function $imgSrcUrl(p: any): string;

  declare function $contentLineText(p: any): any;

  /**
   * Returns the ClientControl associated with specified DOM element (alias for Srch.U.getClientComponent)
   */
  declare function $getClientControl(e: Element): Srch$ClientControl;

  /**
   * (alias for Srch.U.getResultObject)
   */
  declare function $getResultItem(id: string): any;

  /**
   * (alias for Srch.U.setResultObject)
   */
  declare function $setResultItem(id: string, resultObject: any): void;

  /**
   * (alias for Srch.U.getResultObject)
   */
  declare function $getResultObject(id: string): any;

  /**
   * (alias for Srch.U.setResultObject)
   */
  declare function $setResultObject(id: string, resultObject: any): void;

  /**
   * (alias for Srch.U.findResultObjectFromDOM)
   */
  declare function $findResultObjectFromDOM(e: Element, type: string): void;

  declare function $getItemValue(ctx: any, nameToLookup: string): any;

  declare function $getCachedItemValue(ctx: any, nameToLookup: string): any;

  declare function $includeScript(
    templateLink: string,
    relativeLink: string
  ): void;

  declare function $includeCSS(templateLink: string, scriptLink: string): void;

  declare function $includeLanguageScript(
    templateLink: string,
    scriptLink: string
  ): any;

  /**
   * Registers in system resources defined by the dictionary object (alias for Srch.U.registerResourceDictionary)
   */
  declare function $registerResourceDictionary(
    locale: string,
    dict: {
      [key: string]: string
    }
  ): void;

  /**
   * Retrieves localized string with the specified id
   */
  declare function $resource(id: string): string;

  /**
   * (calls Srch.U.setItemRenderWrapper)
   */
  declare function $setItemWrapperCallback(
    renderCtx: any,
    itemWrapperFunction: any
  ): void;

  /**
   * (calls Srch.U.addRenderContextCallback)
   */
  declare function $addRenderContextCallback(
    renderCtx: any,
    itemWrapperFunction: any
  ): void;
}
