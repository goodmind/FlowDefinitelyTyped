declare module "mfiles" {
  declare var MFExtApplicationPlatformWeb: any;
  declare interface IAccessControlEntry {
    ChangePermissionsPermission: MFiles$MFPermission;
    EditPermission: MFiles$MFPermission;
    IsGroup: boolean;
    ReadPermission: MFiles$MFPermission;
    UserOrGroupID: number;
    Clone(): IAccessControlEntry;
  }
  declare interface IAccessControlEntryContainer {
    +IsEmpty: boolean;
    Add(
      AccessControlEntryKey: IAccessControlEntryKey,
      AccessControlEntryData: IAccessControlEntryData
    ): void;
    At(AccessControlEntryKey: IAccessControlEntryKey): IAccessControlEntryData;
    Clear(): void;
    Clone(): IAccessControlEntryContainer;
    GetKeys(): IAccessControlEntryKeys;
    GetKeysWithPseudoUserDefinitions(): IAccessControlEntryKeys;
    HasKey(AccessControlEntryKey: IAccessControlEntryKey): boolean;
    Remove(AccessControlEntryKey: IAccessControlEntryKey): void;
  }
  declare interface IAccessControlEntryData {
    AttachObjectsPermission: MFiles$MFPermission;
    ChangePermissionsPermission: MFiles$MFPermission;
    DeletePermission: MFiles$MFPermission;
    EditPermission: MFiles$MFPermission;
    ReadPermission: MFiles$MFPermission;
    Clone(): IAccessControlEntryData;
    SetAllPermissions(Permission: MFiles$MFPermission): void;
  }
  declare interface IAccessControlEntryKey {
    +HasConcreteUserOrGroupID: boolean;
    +IsGroup: boolean;
    +IsPseudoUser: boolean;
    PseudoUserID: IIndirectPropertyID;
    +UserOrGroupID: number;
    Clone(): IAccessControlEntryKey;
    GetResolvedPseudoUserOrGroupIDs(): IUserOrUserGroupIDs;
    ResetResolvedPseudoUserOrGroupIDs(): void;
    SetUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): void;
  }
  declare interface IAccessControlEntryKeys {
    +Count: number;
    Clone(): IAccessControlEntryKeys;
    Item(Index: number): IAccessControlEntryKey;
  }
  declare interface IAccessControlList {
    +AutomaticComponents: IAccessControlListComponentContainer;
    +CheckedOutToUserID: number;
    CustomComponent: IAccessControlListComponent;
    +HasCheckedOutToUserID: boolean;
    IsFullyAuthoritative: boolean;
    Clone(): IAccessControlList;
    CloneFrom(AccessControlList: IAccessControlList): void;
    EqualTo(AccessControlList: IAccessControlList): boolean;
    HasIdenticalPermissions(AccessControlList: IAccessControlList): boolean;
  }
  declare interface IAccessControlListComponent {
    AccessControlEntries: IAccessControlEntryContainer;
    CanDeactivate: boolean;
    +CurrentUserBinding: number;
    +HasCurrentUser: boolean;
    +HasCurrentUserBinding: boolean;
    +HasNamedACLLink: boolean;
    +HasPseudoUsers: boolean;
    IsActive: boolean;
    +NamedACLLink: number;
    Clone(): IAccessControlListComponent;
    GetACEByUserOrGroupID(
      UserOrGroupID: number,
      IsGroup: boolean
    ): IAccessControlEntryData;
    GetACEKeyByUserOrGroupID(
      UserOrGroupID: number,
      IsGroup: boolean
    ): IAccessControlEntryKey;
    ResetCurrentUserBinding(): void;
    ResetNamedACLLink(): void;
  }
  declare interface IAccessControlListComponentContainer {
    +Count: number;
    At(
      AccessControlListComponentKey: IAccessControlListComponentKey
    ): IAccessControlListComponent;
    GetKeys(): IAccessControlListComponentKeys;
    HasKey(
      AccessControlListComponentKey: IAccessControlListComponentKey
    ): boolean;
  }
  declare interface IAccessControlListComponentKey {
    ItemID: number;
    PropertyDefID: MFiles$MFBuiltInPropertyDef | number;
    Clone(): IAccessControlListComponentKey;
  }
  declare interface IAccessControlListComponentKeys {
    +Count: number;
    Clone(): IAccessControlListComponentKeys;
    Item(Index: number): IAccessControlListComponentKey;
  }
  declare interface IAccessControlLists {
    +Count: number;
    Item(Index: number): IAccessControlList;
  }
  declare interface IActionConvertToPDF {
    FailOnUnsupportedSourceFiles: boolean;
    OverwriteExistingFile: boolean;
    PDFA1b: boolean;
    StoreAsSeparateFile: boolean;
    Clone(): IActionConvertToPDF;
  }
  declare interface IActionCreateAssignment {
    AssignedTo: IUserOrUserGroupIDExs;
    Deadline: boolean;
    DeadlineInDays: number;
    Description: string;
    MonitoredBy: IUserOrUserGroupIDExs;
    Title: string;
    Clone(): IActionCreateAssignment;
  }
  declare interface IActionDefinition {
    ActionCreateSeparateAssignment: IActionCreateAssignment;
    +ActionType: MFiles$MFActionType;
    Clear(): void;
    Clone(): IActionDefinition;
  }
  declare interface IActionDefinitions {
    +Count: number;
    Add(Index: number, ActionDefinition: IActionDefinition): void;
    Clone(): IActionDefinitions;
    Item(Index: number): IActionDefinition;
    Item(Index: number, value: IActionDefinition): void;
    Remove(Index: number): void;
  }
  declare interface IActionSendNotification {
    Message: string;
    RecipientsEx: IUserOrUserGroupIDExs;
    Subject: string;
    Clone(): IActionSendNotification;
  }
  declare interface IActionSetPermissions {
    DiscardsAutomaticPermissions: boolean;
    Permissions: IAccessControlList;
    Clone(): IActionSetPermissions;
  }
  declare interface IActionSetProperties {
    Properties: IDefaultProperties;
    Clone(): IActionSetProperties;
  }
  declare interface IAdditionalClassInfo {
    AssignmentClassInfo: IAssignmentClassInfo;
    +InfoType: MFiles$MFAdditionalClassInfoType;
    Clear(): void;
    Clone(): IAdditionalClassInfo;
  }
  declare interface IAdditionalFolder {
    Folder: string;
    Impersonation: IImpersonation;
    LimitInMB: number;
    Clone(): IAdditionalFolder;
  }
  declare interface IAdditionalFolders {
    +Count: number;
    Add(Index: number, AdditionalFolder: IAdditionalFolder): void;
    Clone(): IAdditionalFolders;
    Item(Index: number): IAdditionalFolder;
    Remove(Index: number): void;
  }
  declare interface IApprovalAssignmentClassInfo {
    AnyAssigneeApproves: boolean;
    SignatureForApproval: ISignatureSettings;
    SignatureForRejection: ISignatureSettings;
    Clone(): IApprovalAssignmentClassInfo;
  }
  declare interface IArchiveOldVersionsJob {
    AtLeastNDaysOlder: number;
    AtLeastNVersionsOlder: number;
    CheckedInBefore: ITimestamp;
    Flags: MFiles$MFExportContentFlag;
    Impersonation: IImpersonation;
    MarkedForArchiving: boolean;
    NoVersionTag: boolean;
    TargetLocation: string;
    UseAtLeastNDaysOlder: boolean;
    UseAtLeastNVersionsOlder: boolean;
    UseCheckedInBefore: boolean;
    Clone(): IArchiveOldVersionsJob;
  }
  declare interface IAssignmentClassInfo {
    ApprovalAssignmentClassInfo: IApprovalAssignmentClassInfo;
    +AssignmentType: MFiles$MFAssignmentType;
    TaskAssignmentClassInfo: ITaskAssignmentClassInfo;
    Clone(): IAssignmentClassInfo;
  }
  declare interface IAssociatedPropertyDef {
    PropertyDef: MFiles$MFBuiltInPropertyDef | number;
    Required: boolean;
    Clone(): IAssociatedPropertyDef;
  }
  declare interface IAssociatedPropertyDefs {
    +Count: number;
    Add(Index: number, AssociatedPropertyDef: IAssociatedPropertyDef): void;
    Clone(): IAssociatedPropertyDefs;
    Item(Index: number): IAssociatedPropertyDef;
    Remove(Index: number): void;
  }
  declare interface IAttachVaultOptions {
    DisableEventHandlers: boolean;
    DisableExportedDataSets: boolean;
    DisableExportImportJobs: boolean;
    DisableExternalObjectTypes: boolean;
    DisableExternalSources: boolean;
    DisableExternalUserGroups: boolean;
    Flags: MFiles$MFAttachVaultOptionsFlag;
    UpdateAttachmentGUID: boolean;
    Clone(): IAttachVaultOptions;
    DisableAll(): void;
  }
  declare interface IAuthenticationResult {
    +Intermediate: IAuthenticationResultIntermediate;
    +ServerFinal: IAuthenticationResultServerFinal;
    +VaultFinal: IAuthenticationResultVaultFinal;
  }
  declare interface IAuthenticationResultIntermediate {
    +AttemptIdentifier: string;
    +AuthenticationData: INamedValues;
  }
  declare interface IAuthenticationResultServerFinal {
    +ServerConnection: MFiles$MFServerConnection;
  }
  declare interface IAuthenticationResultVaultFinal {
    +Vault: IVault;
  }
  declare interface IAutomaticMetadataResult {
    +PropertyValueSuggestions: IPropertyValueSuggestions;
    Clone(): IAutomaticMetadataResult;
  }
  declare interface IAutomaticPermissions {
    CanDeactivate: boolean;
    +IsBasedOnObjectACL: boolean;
    +IsDefault: boolean;
    +NamedACL: INamedACL;
    Clone(): IAutomaticPermissions;
    SetBasedOnObjectACL(): void;
    SetNamedACL(NamedACL: INamedACL): void;
  }
  declare interface IAutomaticValue {
    ANSIncrement: number;
    ANVCode: string;
    CalculationOrderNumber: number;
    CVSExpression: string;
    CVVCode: string;
    Clone(): IAutomaticValue;
  }
  declare interface IBackupJob {
    BackupType: MFiles$MFBackupType;
    FileSizeLimitInMB: number;
    Impersonation: IImpersonation;
    OverwriteExistingFiles: boolean;
    TargetFile: string;
    VaultGUID: string;
    Clone(): IBackupJob;
  }
  declare interface IBooleanValue {
    Value: boolean;
    Clone(): IBooleanValue;
  }
  declare interface IClassGroup {
    ID: number;
    Members: IIDs;
    Name: string;
    ObjectType: MFiles$MFBuiltInObjectType | number;
    AddMember(Member: number): void;
    Clone(): IClassGroup;
    RemoveMember(Member: number): void;
  }
  declare interface IClassGroups {
    +Count: number;
    Clone(): IClassGroups;
    Item(Index: number): IClassGroup;
  }
  declare interface ICLSIDs {
    +PreviewerCtrl: string;
    +ShellListingCtrl: string;
  }
  declare interface ICollection {
    +Count: number;
    +Events: IEvents;
    Clear(): void;
    Find(item: any): number;
    GetAt(pos: number): any;
    MoveTo(pos: number, newPos: number): void;
    NewTo(pos: number, replace: boolean): any;
    PutTo(pos: number, replace: boolean, item: any): void;
    RemoveAt(pos: number): void;
  }
  declare interface ICommands {
    +Events: ICommandsEvents;
    AddCustomCommandToMenu(
      customCommand: number,
      location: MFiles$MenuLocation,
      orderPriority: number
    ): void;
    CreateCustomCommand(commandName: string): number;
    DeleteCustomCommand(customCommand: number): void;
    ExecuteCommand(
      command: MFiles$BuiltinCommand | number,
      arguments: any
    ): void;
    GetCommandName(command: MFiles$BuiltinCommand | number): string;
    GetCommandState(
      command: MFiles$BuiltinCommand | number,
      location: MFiles$CommandLocation,
      includeBuiltInState: boolean,
      includeScriptSpecifiedState: boolean
    ): MFiles$CommandState;
    RemoveCustomCommandFromMenu(
      customCommand: number,
      location: MFiles$MenuLocation
    ): void;
    SetCommandState(
      command: MFiles$BuiltinCommand | number,
      location: MFiles$CommandLocation,
      state: MFiles$CommandState
    ): void;
    SetIcon(customCommand: number, icon: MFiles$DefaultIcon): void;
    SetIconFromPath(customCommand: number, iconPath: string): void;
  }
  declare type ICommandsEvents = {
    OnCustomCommand?: (commandID: number) => void
  } & IEvents;

  declare interface ICopyVaultJob {
    CopyflagAllData: boolean;
    CopyflagAllExceptData: boolean;
    CopyflagApplications: boolean;
    CopyflagDataSets: boolean;
    CopyflagDocumentProfiles: boolean;
    CopyflagDocuments: boolean;
    CopyflagEventLog: boolean;
    CopyflagExternalLocations: boolean;
    CopyflagFiles: boolean;
    CopyflagInternalEventHandlers: boolean;
    CopyflagLanguagesAndTranslations: boolean;
    CopyflagPropertyDefinitions: boolean;
    CopyflagScheduledExportAndImportJobs: boolean;
    CopyflagUserAccounts: boolean;
    CopyflagUseTargetGUID: boolean;
    CopyflagValueListContent: boolean;
    CopyflagValueLists: boolean;
    CopyflagViews: boolean;
    CopyflagWorkflows: boolean;
    VaultGUID: string;
    VaultProperties: IVaultProperties;
    Clone(): ICopyVaultJob;
  }
  declare interface ICopyVaultJobOutputInfo {
    +VaultProperties: IVaultProperties;
  }
  declare interface ICustomApplication {
    +ApplicationType: MFiles$MFCustomApplicationType;
    +ChecksumHash: string;
    +Description: string;
    +Enabled: boolean;
    +ID: string;
    +MasterApplication: string;
    +Name: string;
    +Optional: boolean;
    +Publisher: string;
    +RequireSystemAccess: boolean;
    +Version: string;
    Clone(): ICustomApplication;
  }
  declare interface ICustomApplications {
    +Count: number;
    Clone(): ICustomApplications;
    Item(Index: number): ICustomApplication;
  }
  declare interface IDailyTrigger {
    DaysInterval: number;
  }
  declare interface IDashboard<T> {
    AutoStopWithParent: boolean;
    +CustomData: T;
    +Events: IDashboardEvents;
    +IsPopupDashboard: boolean;
    +Parent: IShellPaneContainer | IShellFrame | IVaultUI | IShellUI;
    +UseRightToLeftLayout: boolean;
    +Vault: IVault;
    +Window: IWindow;
    ShowMessage(message: string | IMessage): number;
    ShowPopupDashboard(
      dashboardID: string,
      waitUntilClosed: boolean,
      data: any
    ): void;
  }
  declare type IDashboardEvents = {
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare interface IDataFunctionCall {
    +DataFunction: MFiles$MFDataFunction;
    SetDataDate(): void;
    SetDataDaysFrom(): void;
    SetDataDaysTo(): void;
    SetDataInitialCharGroup(Locale: number): void;
    SetDataIntegerSegment(SegmentSize: number): void;
    SetDataLeftChars(Characters: number): void;
    SetDataMonth(): void;
    SetDataNoOp(): void;
    SetDataYear(): void;
    SetDataYearAndMonth(): void;
  }
  declare interface IDataSet {
    +ID: number;
    +Name: string;
    Clone(): IDataSet;
  }
  declare interface IDataSetExportingStatus {
    +CurrentServerTime: ITimestamp;
    +IsExporting: boolean;
    +LatestActivity: ITimestamp;
  }
  declare interface IDataSets {
    +Count: number;
    Clone(): IDataSets;
    Item(Index: number): IDataSet;
  }
  declare interface IDefaultProperties {
    +Count: number;
    Add(Index: number, DefaultProperty: IDefaultProperty): void;
    Item(Index: number): IDefaultProperty;
    Remove(Index: number): void;
  }
  declare interface IDefaultProperty {
    DataFixedValueValue: ITypedValue;
    DataFromEmailAddVLItemIfNotFound: boolean;
    DataFromEmailField: MFiles$MFEmailField;
    DataFromEmailHeaderAddVLItemIfNotFound: boolean;
    DataFromEmailHeaderField: string;
    DataFromEmailHeaderTreatLookupAsID: boolean;
    DataFromEmailTreatLookupAsID: boolean;
    DataFromHPDSSXMLAddVLItemIfNotFound: boolean;
    DataFromHPDSSXMLPromptName: string;
    DataFromHPDSSXMLTreatLookupAsID: boolean;
    DataFromOCRAddVLItemIfNotFound: boolean;
    DataFromOCRTreatLookupAsID: boolean;
    DataFromOCRZone: IOCRZone;
    DataFromXMLAddVLItemIfNotFound: boolean;
    DataFromXMLTreatLookupAsID: boolean;
    DataFromXMLXPathExpression: string;
    PropertyDefID: MFiles$MFBuiltInPropertyDef | number;
    +Type: MFiles$MFDefaultPropertyType;
    Clone(): IDefaultProperty;
    SetFixedValue(TypedValue: ITypedValue): void;
    SetFromEmail(
      EmailField: MFiles$MFEmailField,
      TreatLookupAsID: boolean,
      AddVLItemIfNotFound: boolean
    ): void;
    SetFromEmailHeader(
      Field: string,
      TreatLookupAsID: boolean,
      AddVLItemIfNotFound: boolean
    ): void;
    SetFromHPDSSXML(
      PromptName: string,
      TreatLookupAsID: boolean,
      AddVLItemIfNotFound: boolean
    ): void;
    SetFromOCR(
      OCRZone: IOCRZone,
      TreatLookupAsID: boolean,
      AddVLItemIfNotFound: boolean
    ): void;
    SetFromXML(
      XPathExpression: string,
      TreatLookupAsID: boolean,
      AddVLItemIfNotFound: boolean
    ): void;
  }
  declare interface IEmailMessageInformation {
    Cc: IStrings;
    From: string;
    Importance: MFiles$MFEmailImportance;
    InReplyTo: string;
    MessageID: string;
    Received: ITimestamp;
    Sensitivity: MFiles$MFEmailSensitivity;
    Sent: ITimestamp;
    Subject: string;
    To: IStrings;
    Clone(): IEmailMessageInformation;
    CloneFrom(EmailMessageInformation: IEmailMessageInformation): void;
  }
  declare interface IEventHandler {
    Active: boolean;
    Description: string;
    EventType: MFiles$MFEventHandlerType;
    +GUID: string;
    VBScript: string;
    Clone(): IEventHandler;
    GetID(): number;
  }
  declare interface IEventHandlers {
    +Count: number;
    Add(Index: number, EventHandler: IEventHandler): void;
    Clone(): IEventHandlers;
    GetIndexByGUID(EventHandlerGUID: string): number;
    Item(Index: number): IEventHandler;
    Remove(Index: number): void;
  }
  declare interface IEvents {
    Register(eventToListen: MFiles$Event, eventSink: Function): number;
    Unregister(sinkHandle: number): void;
  }
  declare interface IExportContentJob {
    ExportContent: boolean;
    ExportStructureItems: boolean;
    Flags: MFiles$MFExportContentFlag;
    IgnoreChangesBefore: ITimestamp;
    Impersonation: IImpersonation;
    IncludePrivateUISettingsWithStructure: boolean;
    IncludeValueListItemsWithStructure: boolean;
    SearchConditions: ISearchConditions;
    StructureItems: IExportStructureItems;
    TargetLocation: string;
    UseIgnoreChangesBefore: boolean;
    UseSearchConditions: boolean;
    Clone(): IExportContentJob;
    SetExportAllStructureItems(IncludeValueListItems: boolean): void;
  }
  declare interface IExportStructureItem {
    StructureItemGUID: string;
    StructureItemID: number;
    StructureItemType: MFiles$MFMetadataStructureItem;
    Clone(): IExportStructureItem;
  }
  declare interface IExportStructureItems {
    +Count: number;
    Add(Index: number, ExportStructureItem: IExportStructureItem): void;
    Clone(): IExportStructureItems;
    Item(Index: number): IExportStructureItem;
    Item(Index: number, value: IExportStructureItem): void;
    Remove(Index: number): void;
  }
  declare interface IExpression {
    DataAnyFieldFTSFlags: MFiles$MFFullTextSearchFlags;
    DataFileValueType: MFiles$MFFileValueType;
    DataObjectIDSegmentSegmentSize: number;
    DataPermissionsType: MFiles$MFPermissionsExpressionType;
    DataPropertyValueDataFunction: MFiles$MFDataFunction;
    DataPropertyValueParentChildBehavior: MFiles$MFParentChildBehavior;
    DataPropertyValuePropertyDef: number;
    DataStatusValueDataFunction: MFiles$MFDataFunction;
    DataStatusValueType: MFiles$MFStatusType;
    DataTypedValueDataFunction: MFiles$MFDataFunction;
    DataTypedValueDatatype: MFiles$MFDataType;
    DataTypedValueParentChildBehavior: MFiles$MFParentChildBehavior;
    DataTypedValueValueList: number;
    IndirectionLevels: IPropertyDefOrObjectTypes;
    +Type: MFiles$MFExpressionType;
    Clone(): IExpression;
    GetExpressionAsText(
      PropertyDefinitions: IPropertyDefs,
      ObjectTypes: IObjectTypes
    ): string;
    GetWholeExpressionAsIndirectionLevels(): IPropertyDefOrObjectTypes;
    SetAnyFieldExpression(
      FullTextSearchFlags: MFiles$MFFullTextSearchFlags
    ): void;
    SetFileValueExpression(FileValueType: MFiles$MFFileValueType): void;
    SetObjectIDSegmentExpression(Segment: number): void;
    SetPermissionExpression(
      PermissionsExpressionType: MFiles$MFPermissionsExpressionType
    ): void;
    SetPropertyValueExpression(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      PCBehavior: MFiles$MFParentChildBehavior,
      DataFunctionCall: IDataFunctionCall
    ): void;
    SetStatusValueExpression(
      StatusType: MFiles$MFStatusType,
      DataFunctionCall: IDataFunctionCall
    ): void;
    SetTypedValueExpression(
      DataType: MFiles$MFDataType,
      ValueList: MFiles$MFBuiltInValueList | number,
      PCBehavior: MFiles$MFParentChildBehavior,
      DataFunctionCall: IDataFunctionCall
    ): void;
    SetValueListItemExpression(
      PseudoPropertyDef: MFiles$MFValueListItemPropertyDef,
      PCBehavior: MFiles$MFParentChildBehavior,
      DataFunctionCall: IDataFunctionCall
    ): void;
  }
  declare interface IExpressionEx {
    Conditions: ISearchConditions;
    Expression: IExpression;
    FolderListingAlgorithm: MFiles$MFFolderListingAlgorithm;
    NULLFolderName: string;
    ShowContentsAsJITFolders: boolean;
    ShowEmptyFolders: boolean;
    ShowMatchingObjectsOnThisLevel: boolean;
    ShowNULLFolder: boolean;
    ShowNULLFolderContentsOnThisLevel: boolean;
    Clone(): IExpressionEx;
  }
  declare interface IExpressionExs {
    +Count: number;
    Add(Index: number, ExpressionEx: IExpressionEx): void;
    Clone(): IExpressionExs;
    Item(Index: number): IExpressionEx;
    Item(Index: number, value: IExpressionEx): void;
    Remove(Index: number): void;
  }
  declare interface IExpressions {
    +Count: number;
    Add(Index: number, Expression: IExpression): void;
    Clone(): IExpressions;
    Item(Index: number): IExpression;
    Item(Index: number, value: IExpression): void;
    Remove(Index: number): void;
  }
  declare interface IFileClass {
    DisplayName: string;
    +DotAndExtension: string;
    +Extension: string;
    +FileClass: string;
    Clone(): IFileClass;
    LoadByExtension(Extension: string): void;
    LoadByFileClass(Extension: string, FileClass: string): void;
    SetFileClassInfo(
      DotAndFileExtension: string,
      FileClass: string,
      FileClassDisplayName: string
    ): void;
  }
  declare interface IFileClasses {
    +Count: number;
    Add(Index: number, FileClass: IFileClass): void;
    Clone(): IFileClasses;
    Item(Index: number): IFileClass;
    Remove(Index: number): void;
  }
  declare interface IFileDownloadSession {
    +DownloadID: number;
    +FileSize: number;
    +FileSize32: number;
  }
  declare interface IFileInformation {
    EmailMessage: IEmailMessageInformation;
    FileType: MFiles$MFFileInformationType;
    Clear(): void;
    ExtractFromFile(PathToFile: string): void;
  }
  declare interface IFileVer {
    ID: number;
    Version: number;
    Clone(): IFileVer;
    CloneFrom(FileVer: IFileVer): void;
  }
  declare interface IFileVers {
    +Count: number;
    Add(Index: number, FileVer: IFileVer): void;
    Clone(): IFileVers;
    Item(Index: number): IFileVer;
    Remove(Index: number): void;
  }
  declare interface IFolderContentItem {
    +FolderContentItemType: MFiles$MFFolderContentItemType;
    +ObjectVersion: IObjectVersion;
    +PropertyFolder: ITypedValue;
    +TraditionalFolder: ILookup;
    +View: IView;
  }
  declare interface IFolderContentItems {
    +Count: number;
    +MoreResults: boolean;
    Item(Index: number): IFolderContentItem;
  }
  declare interface IFolderDef {
    +FolderDefType: MFiles$MFFolderDefType;
    +PropertyFolder: ITypedValue;
    +SearchDef: ISearchDef;
    +TraditionalFolder: number;
    +View: MFiles$MFBuiltInView | number;
    Clone(): IFolderDef;
    SetPropertyFolder(TypedValue: ITypedValue): void;
    SetSearchDef(SearchDef: ISearchDef): void;
    SetTraditionalFolder(TraditionalFolder: number): void;
    SetView(View: MFiles$MFBuiltInView | number): void;
  }
  declare interface IFolderDefs {
    +Count: number;
    Add(Index: number, FolderDef: IFolderDef): void;
    Clone(): IFolderDefs;
    Item(Index: number): IFolderDef;
    Remove(Index: number): void;
  }
  declare interface IFolderListingColumn {
    Flags: MFiles$MFFolderListingColumnFlags;
    +ID: number;
    +Name: string;
    Position: number;
    Visible: boolean;
    Width: number;
    Clone(): IFolderListingColumn;
  }
  declare interface IFolderListingColumns {
    +Count: number;
    Add(Index: number, FolderListingColumn: IFolderListingColumn): void;
    Item(Index: number): IFolderListingColumn;
    Item(Index: number, value: IFolderListingColumn): void;
    Remove(Index: number): void;
  }
  declare interface IFolderListingColumnSorting {
    ID: number;
    Index: number;
    SortAscending: boolean;
    Clone(): IFolderListingColumnSorting;
  }
  declare interface IFolderListingColumnSortings {
    +Count: number;
    Add(
      Index: number,
      FolderListingColumnSorting: IFolderListingColumnSorting
    ): void;
    Item(Index: number): IFolderListingColumnSorting;
    Item(Index: number, value: IFolderListingColumnSorting): void;
    Remove(Index: number): void;
  }
  declare interface IFolderListingUIState {
    Columns: IFolderListingColumns;
    ColumnSortings: IFolderListingColumnSortings;
    GroupingMode: MFiles$MFFolderListingItemGroupingMode;
    IconSize: number;
    ViewMode: MFiles$MFFolderListingViewMode;
  }
  declare interface IFolderNameListing {
    +Count: number;
    +MoreValues: boolean;
    Item(Index: number): ITypedValue;
    SortWithExpression(Expression: IExpression, Locale: number): void;
  }
  declare interface IFolderUIState {
    BottomPaneBarMinimized: boolean;
    HitHighlightingEnabled: boolean;
    +ListingUIState: IFolderListingUIState;
    MetadataEditorInRightPane: boolean;
    RelativeBottomPaneHeight: number;
    RelativeRightPaneWidth: number;
    RightPaneBarMinimized: boolean;
    ShowBottomPaneBar: boolean;
    ShowRightPaneBar: boolean;
  }
  declare interface IIDRange {
    MaxID: number;
    MaxID_32bit: string;
    MinID: number;
    MinID_32bit: string;
    Clone(): IIDRange;
    SetIDs(MinID: number, MaxID: number): void;
    SetIDs_32bit(MinID: string, MaxID: string): void;
  }
  declare interface IIDs {
    +Count: number;
    Add(Index: number, ID: number): void;
    Clone(): IIDs;
    IndexOf(ID: number): number;
    Item(Index: number): number;
    Remove(Index: number): void;
    RemoveAll(ID: number): number;
  }
  declare interface IImpersonation {
    Account: string;
    ImpersonationType: MFiles$MFImpersonationType;
    Password: string;
    Clone(): IImpersonation;
  }
  declare interface IImportContentJob {
    ActivateAutomaticPermissionsForNewOrChangedDefinitions: boolean;
    DisableImportedExternalObjectTypeConnections: boolean;
    DisableImportedExternalUserGroups: boolean;
    DisableImportedVaultEventHandlers: boolean;
    Flags: MFiles$MFImportContentFlag;
    IgnoreAutomaticPermissionsDefinedByObjects: boolean;
    Impersonation: IImpersonation;
    MetadataStructureSelectors: IMetadataStructureSelectors;
    Permissions: IAccessControlList;
    ResetExportTimestamps: boolean;
    SourceLocation: string;
    UseDefaultObjectTypePermissions: boolean;
    UseNamesAsAliases: boolean;
    UsePermissions: boolean;
    Clone(): IImportContentJob;
  }
  declare interface IIndirectPropertyID {
    +Count: number;
    Add(Index: number, IndirectPropertyIDLevel: IIndirectPropertyIDLevel): void;
    Clone(): IIndirectPropertyID;
    EqualTo(IndirectPropertyID: IIndirectPropertyID): boolean;
    Item(Index: number): IIndirectPropertyIDLevel;
    Remove(Index: number): void;
    ToJSON(): string;
  }
  declare interface IIndirectPropertyIDLevel {
    ID: number;
    LevelType: MFiles$MFIndirectPropertyIDLevelType;
    Clone(): IIndirectPropertyIDLevel;
    ToJSON(): string;
  }
  declare interface IKeyNamePair {
    +Key: number;
    +Name: string;
    Clone(): IKeyNamePair;
  }
  declare interface IKeyNamePairs {
    +Count: number;
    Item(Index: number): IKeyNamePair;
  }
  declare interface ILanguage {
    +ID: number;
    LanguageCode: string;
    Name: string;
  }
  declare interface ILanguages {
    +Count: number;
    Item(Index: number): ILanguage;
  }
  declare interface ILicenseStatus {
    +EvaluationDaysLeft: number;
    +EvaluationMode: boolean;
    +Expired: boolean;
    +LicenseCode: string;
    +NumOfConcurrentUserLicenses: number;
    +NumOfNamedUserLicenses: number;
    +NumOfReadonlyLicenses: number;
    +SerialNumber: string;
    ClearLicenseCode(): void;
  }
  declare interface ILoginAccount {
    +AccountName: string;
    AccountType: MFiles$MFLoginAccountType;
    DomainName: string;
    EmailAddress: string;
    Enabled: boolean;
    FullName: string;
    LicenseType: MFiles$MFLicenseType;
    ServerRoles: MFiles$MFLoginServerRole;
    UserName: string;
    Clone(): ILoginAccount;
    CloneFrom(LoginAccount: ILoginAccount): void;
    Set(
      LoginAccountType: MFiles$MFLoginAccountType,
      DomainName: string,
      UserName: string,
      ServerRoles: MFiles$MFLoginServerRole,
      FullName: string,
      EmailAddress: string,
      LicenseType: MFiles$MFLicenseType
    ): void;
  }
  declare interface ILoginAccountPersonalInformation {
    +AccountName: string;
    +Email: string;
    +FullName: string;
  }
  declare interface ILoginAccounts {
    +Count: number;
    Item(Index: number): ILoginAccount;
  }
  declare interface ILookup {
    Deleted: boolean;
    +DisplayID: string;
    +DisplayIDAvailable: boolean;
    DisplayValue: string;
    +Hidden: boolean;
    Item: number;
    ItemGUID: string;
    +ObjectFlags: MFiles$MFSpecialObjectFlag;
    ObjectType: MFiles$MFBuiltInObjectType | number;
    Version: number;
    Clone(): ILookup;
    CloneFrom(Lookup: ILookup): void;
    GetFormattedDisplayValue(
      Localized: boolean,
      EmptyLookupDispValuesAsHidden: boolean,
      AddDeletedSuffixIfDeleted: boolean
    ): string;
  }
  declare interface ILookups {
    +Count: number;
    Add(Index: number, Lookup: ILookup): void;
    Clone(): ILookups;
    CloneFrom(Lookups: ILookups): void;
    GetLookupByItem(Item: number): ILookup;
    GetLookupIndexByItem(Item: number): number;
    Item(Index: number): ILookup;
    Remove(Index: number): void;
  }
  declare interface IMessage {
    button1_enabled?: boolean;
    button1_title?: string;
    button2_enabled?: boolean;
    button2_title?: string;
    button3_enabled?: boolean;
    button3_title?: string;
    button4_enabled?: boolean;
    button4_title?: string;
    cancelButton?: 1 | 2 | 3 | 4;
    caption?: string;
    checkbox_checked?: boolean;
    checkbox_enabled?: boolean;
    checkbox_title?: string;
    defaultButton?: 1 | 2 | 3 | 4;
    icon?: string;
    message?: string;
    timeOut?: number;
    timeout_deactivateOnFocusChange?: boolean;
    timeOutButton?: 1 | 2 | 3 | 4;
  }
  declare interface IMetadataCard {
    +ActiveView: string;
    +DataModel: IMetadataCardModel;
    +Events: IEvents;
    +HitHighlightingActive: boolean;
    +Location: string;
    +Minimized: boolean;
    +Parent: any;
    +PreviewerVisible: boolean;
    +PreviewerWidth: number;
    +SearchHits: string;
    +Vault: IVault;
    +Views: ICollection;
    GetApplyAction(): IMetadataCardAction;
    GetApplyAllAction(): IMetadataCardAction;
    GetCheckInImmediatelyOption(): IMetadataCardOption;
    GetDiscardAction(): IMetadataCardAction;
    GetFavoriteObjectOption(): IMetadataCardOption;
    GetFollowThisObjectOption(): IMetadataCardOption;
    GetHeight(): number;
    GetOpenForEditOption(): IMetadataCardOption;
    GetPopOutAction(): IMetadataCardAction;
    GetSkipAction(): IMetadataCardAction;
    GetUIData(key: string, defaultData: any): any;
    GetUseAsDefaultsOption(): IMetadataCardOption;
    GetWidth(): number;
    IsModified(): boolean;
    IsOnMultiItemSequence(): boolean;
    IsPoppedOut(): boolean;
    PromptForValue(dialog: any): boolean;
    ResumeAsyncOp(): void;
    SetEditStateDirty(dirty: boolean): void;
    SetHeight(Height: number): void;
    SetLocation(location: string): void;
    SetMinimized(Minimized: boolean): void;
    SetWidth(Width: number): void;
    ShowMessage(message: string | IMessage): number;
    ShowNewObjectDialog(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      defaultName: string
    ): any;
    ShowPermissionsDialog(): void;
    StorePreviewerState(
      previewerVisible: boolean,
      previewerWidth: number
    ): void;
    StoreUIData(
      key: string,
      data: any,
      dataIsModeSpecific: boolean,
      dataIsLayoutSpecific: boolean,
      dataIsPermanent: boolean
    ): void;
    SuspendAsyncOp(): void;
  }
  declare interface IMetadataCardAction {
    +Events: IEvents;
    Activate(): void;
    GetExplanation(): string;
    GetName(): string;
    IsEnabled(): boolean;
    IsVisible(): boolean;
  }
  declare interface IMetadataCardCommentHistoryItem {
    GetCommentAuthor(): string;
    GetCommentText(): string;
    GetCommentTimestamp(): any;
    GetCommentVersion(): number;
  }
  declare interface IMetadataCardControl {
    +AllowAdding: boolean;
    +Events: IEvents;
    +Hierarchical: boolean;
    +ID: string;
    Label: string;
    +Linked: boolean;
    Modified: boolean;
    MustExist: boolean;
    +PropertyDef: MFiles$MFBuiltInPropertyDef | number;
    ReadOnly: boolean;
    +RealObjectType: boolean;
    +Type: string;
    Value: any;
    +Valuelist: MFiles$MFBuiltInValueList | number;
    ValueRequired: boolean;
    Visible: boolean;
    ActivateLink(valuePart: any): void;
    AddNewItem(name: string): any;
    AddNewSubItem(name: string, valueParent: any): any;
    AllowHitHighlighting(): boolean;
    CanActivateLink(valuePart: any): boolean;
    CanAddNewSubItem(name: string, valueParent: any): boolean;
    CanEditItem(value: any): boolean;
    CreateSelectionList(): IMetadataCardSelectionList;
    CreateUnvalidatedValue(valueString: string): IMetadataCardUnvalidatedValue;
    EditItem(value: any): any;
    FindItem(name: string): any;
    FindItemByID(itemID: number): any;
    GetSelectableValueItemStates(): any;
    GetValueSuggestions(): any;
    HasAutomaticValue(): boolean;
    HasInitialValue(): boolean;
    HasUncalculatedAutomaticValue(): boolean;
    IsExternal(): boolean;
    RefreshList(): void;
    Remove(): void;
    RevertToInitialValue(): void;
    SetValueItemState(itemID: string, state: any): void;
  }
  declare interface IMetadataCardModel {
    +CheckedOutTo: IMetadataCardControl;
    +ClassSelector: IMetadataCardControl;
    +Comment: IMetadataCardControl;
    +DataModels: ICollection;
    +Events: IEvents;
    +IconURL: string;
    +ID: string;
    +IsFileAvailableForPreview: boolean;
    +IsUpdating: boolean;
    +ObjectId: IMetadataCardControl;
    +ObjectType: IMetadataCardControl;
    +ObjectTypeId: IMetadataCardControl;
    +ObjectVersion: IMetadataCardControl;
    +ObjVers: IObjVers;
    +PermissionsDescription: string;
    +PropertyControls: ICollection;
    +PropertySelector: IMetadataCardControl;
    +SaveAsTypeSelector: IMetadataCardControl;
    +Title: IMetadataCardControl;
    +UncreatedObject: boolean;
    AddProperty(propertyDefId: MFiles$MFBuiltInPropertyDef | number): void;
    GetCommentVersionHistory(): any;
    GetError(): any;
    GetIconOverlayHint(): string;
    GetObjectSourceFiles(): any;
    GetObjectTemplateDescription(): string;
    GetRemoteVaultAction(): IMetadataCardAction;
    GetSubObjectsAction(): IMetadataCardAction;
    GetValueListItemIdByGUID(
      propertyDefId: MFiles$MFBuiltInPropertyDef | number,
      guidToLookFor: string
    ): number;
    IsModified(): boolean;
    Rebuild(
      iterationCounter: number,
      classChanged: boolean,
      addedPropertyDef: number
    ): boolean;
    SetAdditionalPropertyDefs(additionalPropertyDefs: any): void;
    SetCustomPlaceholders(customPlaceholders: any): void;
    SetRequiredPropertyDefs(requiredPropertyDefs: any): void;
    SetUnevaluatedPropertyValues(unevaluatedValues: any): void;
    ShowFilePreview(previewer: any): void;
  }
  declare interface IMetadataCardMultiValue {
    +ID: string;
    +IsMultiValue: boolean;
    +State: any;
    +ValueParts: any;
  }
  declare interface IMetadataCardMultiValuePart {
    +ID: any;
    +Value: any;
  }
  declare interface IMetadataCardOption {
    +Events: IEvents;
    GetExplanation(): string;
    GetName(): string;
    GetOptionValue(): any;
    IsEnabled(): boolean;
    IsVisible(): boolean;
    SetOptionValue(value: any): void;
  }
  declare interface IMetadataCardSelectionList {
    +Events: IEvents;
    +Filter: string;
    +FilteringValue: string;
    +Items: any;
    +MoreResults: boolean;
    AutoSelect(identifier: string): void;
    SetFilter(Filter: string, token: number, maxResults: number): void;
  }
  declare interface IMetadataCardSelectionListItem {
    +ChildItems: any;
    +HasParent: boolean;
    +ParentID: number;
    +Selectable: boolean;
    +Value: any;
  }
  declare interface IMetadataCardUnvalidatedValue {
    +ID: string;
    +IsMultiValue: boolean;
    +IsUnvalidated: boolean;
    +Name: string;
  }
  declare interface IMetadataCardValue {
    +HasIcon: boolean;
    +IconURL: string;
    +ID: string;
    +IsMultiValue: boolean;
    +Item: number;
    +Name: string;
    +State: any;
    +Version: number;
    IsDeleted(): boolean;
    IsHidden(): boolean;
  }
  declare interface IMetadataCardValueSuggestion {
    +IsNewValue: boolean;
    +Name: string;
    +Value: any;
  }
  declare interface IMetadataCardView {
    DashboardID: string;
    +Events: IEvents;
    Name: string;
  }
  declare interface IMetadataStructureSelector {
    Flags: MFiles$MFMetadataStructureSelectorFlags;
    ID: string;
    Name: string;
    StructureItemGUID: string;
    StructureItemID: number;
    StructureItemSemanticAlias: string;
    StructureItemType: MFiles$MFMetadataStructureItem;
    Clone(): IMetadataStructureSelector;
  }
  declare interface IMetadataStructureSelectors {
    +Count: number;
    Add(
      Index: number,
      MetadataStructureSelector: IMetadataStructureSelector
    ): void;
    Clone(): IMetadataStructureSelectors;
    Item(Index: number): IMetadataStructureSelector;
    Item(Index: number, value: IMetadataStructureSelector): void;
    Remove(Index: number): void;
  }
  declare interface IMFDocListCtrl {
    AttachToListingWindow(shellListing: any): void;
  }
  declare interface IMFilesClientApplication {
    AddVaultConnection(VaultConnection: IVaultConnection): void;
    BindToVault(
      VaultConnection: string,
      ParentWindow: number,
      CanLogIn: boolean,
      ReturnNULLIfCancelledByUser: boolean
    ): IVault;
    FindFile(Path: string, UpdateFromServer: boolean): IObjectFileAndVersion;
    FindObjectVersionAndProperties(
      Path: string,
      UpdateFromServer: boolean
    ): IObjectVersionAndProperties;
    GetAPIVersion(): IMFilesVersion;
    GetClientLanguage(): string;
    GetClientVersion(): IMFilesVersion;
    GetDriveLetter(): string;
    GetVaultConnection(VaultConnection: string): IVaultConnection;
    GetVaultConnections(): IVaultConnections;
    GetVaultConnectionsWithGUID(GUID: string): IVaultConnections;
    IsObjectPathInMFiles(Path: string): boolean;
    LogInAs(
      VaultConnection: string,
      ParentWindow: number,
      DefaultAuthType: MFiles$MFAuthType,
      ReturnNULLIfCancelledByUser: boolean
    ): IVault;
    LogInAsUser(
      VaultConnection: string,
      AuthType: MFiles$MFAuthType,
      UserName: string,
      Password: string,
      Domain: string | null,
      SPN: string | null
    ): IVault;
    RemoveVaultConnection(
      VaultConnectionName: string,
      UserSpecific: boolean
    ): void;
    ShowBalloonTip(
      Msg: string,
      Title: string,
      Timeout: number,
      InfoFlags: number,
      RemovePrevious: boolean
    ): void;
    TestConnectionToServerEx(
      Server: string,
      Port: string,
      ProtocolSequence: string,
      EncryptedConnection: boolean
    ): number;
  }
  declare interface IMFilesServerApplication {
    +LicenseManagementOperations: IServerLicenseManagementOperations;
    +LoginAccountOperations: IServerLoginAccountOperations;
    +ScheduledJobManagementOperations: IServerScheduledJobManagementOperations;
    +ServerManagementOperations: IServerManagementOperations;
    +SharedLinkPublicOperations: ISharedLinkPublicOperations;
    +VaultManagementOperations: IServerVaultManagementOperations;
    Connect(
      AuthType: MFiles$MFAuthType,
      UserName: string | null,
      Password: string | null,
      Domain: string | null,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      LocalComputerName: string,
      AllowAnonymousConnection: boolean
    ): MFiles$MFServerConnection;
    ConnectAdministrativeEx(
      TimeZone: ITimeZoneInformation,
      AuthType: MFiles$MFAuthType,
      UserName: string | null,
      Password: string | null,
      Domain: string | null,
      SPN: string | null,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      EncryptedConnection: boolean,
      LocalComputerName: string
    ): MFiles$MFServerConnection;
    ConnectEx3(
      TimeZone: ITimeZoneInformation,
      AuthType: MFiles$MFAuthType,
      UserName: string | null,
      Password: string | null,
      Domain: string | null,
      SPN: string | null,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      EncryptedConnection: boolean,
      LocalComputerName: string,
      AllowAnonymousConnection: boolean,
      AllowUsingAuthenticationPlugins: boolean,
      LogicalTargetServer: string
    ): MFiles$MFServerConnection;
    ConnectEx4(
      TimeZone: ITimeZoneInformation,
      AuthType: MFiles$MFAuthType,
      UserName: string | null,
      Password: string | null,
      Domain: string | null,
      SPN: string | null,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      EncryptedConnection: boolean,
      LocalComputerName: string,
      AllowAnonymousConnection: boolean,
      AllowUsingAuthenticationPlugins: boolean,
      LogicalTargetServer: string,
      ClientCulture: string
    ): MFiles$MFServerConnection;
    ConnectWithAuthenticationDataEx2(
      PluginInfo: IPluginInfo,
      AuthenticationData: INamedValues,
      AttemptIdentifier: string,
      TimeZone: ITimeZoneInformation,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      EncryptedConnection: boolean,
      LocalComputerName: string,
      AllowAnonymousConnection: boolean,
      LogicalTargetServer: string
    ): IAuthenticationResult;
    ConnectWithAuthenticationDataEx3(
      PluginInfo: IPluginInfo,
      AuthenticationData: INamedValues,
      AttemptIdentifier: string,
      TimeZone: ITimeZoneInformation,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      EncryptedConnection: boolean,
      LocalComputerName: string,
      AllowAnonymousConnection: boolean,
      LogicalTargetServer: string,
      ClientCulture: string
    ): IAuthenticationResult;
    ConnectWithoutLogin(
      TimeZone: ITimeZoneInformation,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      LocalComputerName: string,
      LogicalTargetServer: string,
      ClientCulture: string
    ): MFiles$MFServerConnection;
    Disconnect(): void;
    GetAPIVersion(): IMFilesVersion;
    GetAuthenticationPluginInformationEx(
      UserName: string,
      Domain: string,
      VaultGUID: string,
      HostName: string,
      AccountType: MFiles$MFLoginAccountType,
      TargetPluginName: string,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      EncryptedConnection: boolean
    ): IPluginInfos;
    GetAuthenticationPluginsEx(
      ScopeIndependentOnly: boolean,
      ProtocolSequence: string,
      NetworkAddress: string,
      Endpoint: string,
      EncryptedConnection: boolean
    ): IPluginInfos;
    GetOnlineVaults(): IVaultsOnServer;
    GetServerVersion(): IMFilesVersion;
    GetTokenAsAuthenticationData(Token: string): INamedValues;
    GetVaults(): IVaultsOnServer;
    LogInAsUserToVault(
      VaultGUID: string,
      TimeZone: ITimeZoneInformation,
      AuthType: MFiles$MFAuthType,
      UserName: string | null,
      Password: string | null,
      Domain: string | null
    ): IVault;
    LogInAsUserToVaultWithSPN(
      VaultGUID: string,
      TimeZone: ITimeZoneInformation,
      AuthType: MFiles$MFAuthType,
      UserName: string | null,
      Password: string | null,
      Domain: string | null,
      SPN: string | null
    ): IVault;
    LogInToVault(VaultGUID: string): IVault;
    LogInToVaultAdministrative(VaultGUID: string): IVault;
    LogInToVaultAdministrativeWithExistingSession(VaultGUID: string): IVault;
    LogInToVaultEx(
      VaultGUID: string,
      AllowUsingAuthenticationPlugins: boolean
    ): IVault;
    LogInToVaultWithExistingSession(VaultGUID: string): IVault;
    TestConnectionToServerEx(
      Server: string,
      Port: string,
      ProtocolSequence: string,
      EncryptedConnection: boolean
    ): number;
  }
  declare interface IMFilesVersion {
    Build: number;
    +Display: string;
    Major: number;
    Minor: number;
    Patch: number;
    SoftwarePlatform: MFiles$MFSoftwarePlatformType;
    Clone(): IMFilesVersion;
    CompareTo(RightSide: IMFilesVersion): number;
  }
  declare interface IMFResourceManager {
    GetLocaleSpecificDateFormat(): string;
    GetUICultures(): IStrings;
    LoadResourceString(LanguageID: number, ResourceID: number): string;
  }
  declare interface IMonthlyDateTrigger {
    Days: number;
    Months: MFiles$MFTriggerMonth;
  }
  declare interface IMonthlyDOWTrigger {
    DaysOfTheWeek: MFiles$MFTriggerWeekDay;
    Months: MFiles$MFTriggerMonth;
    WhichWeek: MFiles$MFTriggerWeekOfMonth;
  }
  declare interface INamedACL {
    AccessControlList: IAccessControlList;
    +GUID: string;
    ID: number;
    Name: string;
    +NamedACLType: MFiles$MFNamedACLType;
    Clone(): INamedACL;
  }
  declare interface INamedACLAdmin {
    AccessControlListForNamedACL: IAccessControlList;
    NamedACL: INamedACL;
    SemanticAliases: ISemanticAliases;
    Clone(): INamedACLAdmin;
  }
  declare interface INamedACLs {
    +Count: number;
    Item(Index: number): INamedACL;
  }
  declare interface INamedACLsAdmin {
    +Count: number;
    Item(Index: number): INamedACLAdmin;
  }
  declare interface INamedValueNamespace {
    NamedValues: INamedValues;
    NamespaceName: string;
    Clone(): INamedValueNamespace;
  }
  declare interface INamedValueNamespaces {
    +Count: number;
    Add(Index: number, NamedValueNamespace: INamedValueNamespace): void;
    Clone(): INamedValueNamespaces;
    Item(Index: number): INamedValueNamespace;
    Item(Index: number, value: INamedValueNamespace): void;
    Remove(Index: number): void;
  }
  declare interface INamedValues {
    Modified: boolean;
    +Names: IStrings;
    Clone(): INamedValues;
    Contains(Name: string): boolean;
    Value(ValueName: string): any;
    Value(ValueName: string, value: any): void;
  }
  declare interface INumber {
    Value: number;
    Clone(): INumber;
  }
  declare interface IObjectClass {
    AccessControlList: IAccessControlList;
    +AdditionalClassInfo: IAdditionalClassInfo;
    AssociatedPropertyDefs: IAssociatedPropertyDefs;
    AutomaticPermissionsForObjects: IAutomaticPermissions;
    ForceWorkflow: boolean;
    ID: number;
    Name: string;
    NamePropertyDef: number;
    ObjectType: MFiles$MFBuiltInObjectType | number;
    Workflow: number;
    Clone(): IObjectClass;
  }
  declare interface IObjectClassAdmin {
    +AdditionalClassInfo: IAdditionalClassInfo;
    AssociatedPropertyDefs: IAssociatedPropertyDefs;
    AutomaticPermissionsForObjects: IAutomaticPermissions;
    ForceWorkflow: boolean;
    ID: number;
    Name: string;
    NamePropertyDef: number;
    ObjectType: MFiles$MFBuiltInObjectType | number;
    Predefined: boolean;
    SemanticAliases: ISemanticAliases;
    Workflow: number;
    Clone(): IObjectClassAdmin;
  }
  declare interface IObjectClasses {
    +Count: number;
    Add(Index: number, ObjectClass: IObjectClass): void;
    Clone(): IObjectClasses;
    Item(Index: number): IObjectClass;
    Remove(Index: number): void;
  }
  declare interface IObjectClassesAdmin {
    +Count: number;
    Add(Index: number, ObjectClassAdmin: IObjectClassAdmin): void;
    Item(Index: number): IObjectClassAdmin;
    Remove(Index: number): void;
  }
  declare interface IObjectComparer {
    Compare(
      ObjectVersionDataLeft: IObjectVersion,
      ObjectVersionDataRight: IObjectVersion
    ): number;
  }
  declare interface IObjectCreationInfo {
    DisallowTemplateSelection: boolean;
    ExplicitObjectID: number;
    IsObjectShortcut: boolean;
    ObjectGUID: string;
    OkToAllButtonVisible: boolean;
    SkipThisButtonVisible: boolean;
    GetDisableObjectCreation(): boolean;
    GetExtension(): string;
    GetMetadataCardTitle(): string;
    GetObjectType(): number;
    GetSelectableFileClasses(): IFileClasses;
    GetSelectedFileClass(): IFileClass;
    GetSingleFileDocument(): boolean;
    GetSourceFiles(): ISourceObjectFiles;
    GetTemplate(): IObjVer;
    GetTitle(): ITypedValue;
    GetTitleAsText(): string;
    GetUseAsDefaults(): boolean;
    SetDisableObjectCreation(Disable: boolean): void;
    SetExtension(Extension: string, Editable: boolean): void;
    SetMetadataCardTitle(MetadataCardTitle: string): void;
    SetObjectType(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Editable: boolean
    ): void;
    SetSelectableFileClasses(FileClasses: IFileClasses): void;
    SetSelectedFileClass(FileClass: IFileClass, Editable: boolean): void;
    SetSingleFileDocument(SingleFile: boolean, Editable: boolean): void;
    SetSourceFiles(SourceFiles: ISourceObjectFiles): void;
    SetTemplate(Template: IObjVer): void;
    SetTitle(Title: ITypedValue, Editable: boolean): void;
    SetTitleAsDatatypeText(Title: string, Editable: boolean): void;
    SetUseAsDefaults(UseAsDefaults: boolean, Editable: boolean): void;
  }
  declare interface IObjectFile {
    +ChangeTimeUtc: Date;
    +CreationTimeUtc: Date;
    +Extension: string;
    +FileGUID: string;
    +FileVer: IFileVer;
    +ID: number;
    +LastAccessTimeUtc: Date;
    +LastWriteTimeUtc: Date;
    +LogicalSize: number;
    +LogicalSize_32bit: number;
    +Title: string;
    +Version: number;
    GetNameForFileSystem(): string;
    ToJSON(): string;
  }
  declare interface IObjectFileAndObjVer {
    +ObjectFile: IObjectFile;
    +ObjVer: IObjVer;
    Clone(): IObjectFileAndObjVer;
    ToJSON(): string;
  }
  declare interface IObjectFileAndObjVerOfMultipleFiles {
    +Count: number;
    Add(Index: number, ObjectFileAndObjVer: IObjectFileAndObjVer): void;
    Clone(): IObjectFileAndObjVerOfMultipleFiles;
    Item(Index: number): IObjectFileAndObjVer;
    Remove(Index: number): void;
  }
  declare interface IObjectFileAndVersion {
    +ObjectFile: IObjectFile;
    +ObjectVersion: IObjectVersionAndProperties;
  }
  declare interface IObjectFileComparer {
    Compare(FileLeft: IObjectFile, FileRight: IObjectFile): number;
  }
  declare interface IObjectFiles {
    +Count: number;
    GetObjectFileByNameForFileSystem(NameForFileSystem: string): IObjectFile;
    GetObjectFileIndexByNameForFileSystem(NameForFileSystem: string): number;
    Item(Index: number): IObjectFile;
    Sort(ObjectFileComparer: IObjectFileComparer): void;
    ToJSON(): string;
  }
  declare interface IObjectSearchResults {
    +Count: number;
    +MoreResults: boolean;
    Clone(): IObjectSearchResults;
    GetAsObjectVersions(): IObjectVersions;
    GetScoreOfObject(ObjVer: IObjVer): number;
    Item(Index: number): IObjectVersion;
    ScoreAt(Index: number): number;
    Sort(ObjectComparer: IObjectComparer): void;
    SortByScore(Ascending: boolean): void;
  }
  declare interface IObjectTemplateSelector {
    +ClassSelector: IMetadataCardControl;
    +Events: IEvents;
    GetObjectTypeIconURL(): string;
    GetObjectTypeId(): number;
    GetObjectTypeName(): string;
    GetTemplateItems(): any;
    SelectItem(itemID: string): void;
  }
  declare interface IObjectTemplateSelectorItem {
    GetClassID(): number;
    GetClassName(): string;
    GetGroupID(): number;
    GetGroupName(): string;
    GetIconURL(): string;
    GetID(): string;
    GetName(): string;
    GetTemplateID(): number;
    IsBlankItem(): boolean;
    IsDefaultTemplateForClass(): boolean;
  }
  declare interface IObjectType {
    AccessControlList: IAccessControlList;
    AllowAdding: boolean;
    AllowedAsGroupingLevel: boolean;
    CanHaveFiles: boolean;
    DefaultAccessControlList: IAccessControlList;
    DefaultPropertyDef: number;
    External: boolean;
    +GUID: string;
    HasOwnerType: boolean;
    Hierarchical: boolean;
    Icon: $ReadOnlyArray<number>;
    ID: number;
    NamePlural: string;
    NameSingular: string;
    ObjectTypeTargetsForBrowsing: IObjectTypeTargetsForBrowsing;
    OwnerPropertyDef: number;
    OwnerType: number;
    +ReadOnlyPropertiesDuringInsert: IIDs;
    +ReadOnlyPropertiesDuringUpdate: IIDs;
    RealObjectType: boolean;
    ShowCreationCommandInTaskPane: boolean;
    Translatable: boolean;
    CanHaveItemIcons(): boolean;
    Clone(): IObjectType;
    GetIconAsPNG(Width: number, Height: number): $ReadOnlyArray<number>;
    IsAddingAllowedForUser(SessionInfo: ISessionInfo): boolean;
  }
  declare interface IObjectTypeAdmin {
    ColumnMappings: IObjectTypeColumnMappings;
    ConnectionString: string;
    DefaultForAutomaticPermissions: IAutomaticPermissions;
    DeleteStatement: string;
    InsertIntoStatement: string;
    NamedValueNamespaces: INamedValueNamespaces;
    ObjectType: IObjectType;
    SelectExtIDStatement: string;
    SelectStatement: string;
    SelectStatementOneRecord: string;
    SemanticAliases: ISemanticAliases;
    Translatable: boolean;
    UpdateStatement: string;
    Clone(): IObjectTypeAdmin;
  }
  declare interface IObjectTypeColumnMapping {
    ObjectType: MFiles$MFBuiltInObjectType | number;
    Ordinal: number;
    PartOfInsert: boolean;
    PartOfUpdate: boolean;
    SourceField: string;
    TargetPropertyDef: number;
    Type: number;
    Clone(): IObjectTypeColumnMapping;
  }
  declare interface IObjectTypeColumnMappings {
    +Count: number;
    Add(Index: number, ObjectTypeColumnMapping: IObjectTypeColumnMapping): void;
    Clone(): IObjectTypeColumnMappings;
    Item(Index: number): IObjectTypeColumnMapping;
    Remove(Index: number): void;
  }
  declare interface IObjectTypes {
    +Count: number;
    Clone(): IObjectTypes;
    Item(Index: number): IObjectType;
  }
  declare interface IObjectTypesAdmin {
    +Count: number;
    Item(Index: number): IObjectTypeAdmin;
  }
  declare interface IObjectTypeTargetForBrowsing {
    TargetObjectType: number;
    ViewCollection: number;
    Clone(): IObjectTypeTargetForBrowsing;
  }
  declare interface IObjectTypeTargetsForBrowsing {
    +Count: number;
    Add(
      Index: number,
      ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing
    ): void;
    Clone(): IObjectTypeTargetsForBrowsing;
    Item(Index: number): IObjectTypeTargetForBrowsing;
    Remove(Index: number): void;
  }
  declare interface IObjectVersion {
    +AccessedByMeUtc: Date;
    +CheckedOutAtUtc: Date;
    +CheckedOutTo: number;
    +CheckedOutToHostName: string;
    +CheckedOutToUserName: string;
    +CheckedOutVersion: number;
    +Class:
      | MFiles$MFBuiltInDocumentClass
      | MFiles$MFBuiltInObjectClass
      | number;
    +CreatedUtc: Date;
    +Deleted: boolean;
    +DisplayID: string;
    +DisplayIDAvailable: boolean;
    +Files: IObjectFiles;
    +FilesCount: number;
    +HasAssignments: boolean;
    +HasSharedFiles: boolean;
    +IsAccessedByMeValid: boolean;
    +IsObjectConflict: boolean;
    +IsObjectShortcut: boolean;
    +LastModifiedUtc: Date;
    +LatestCheckedInVersion: number;
    +LatestCheckedInVersionOrCheckedOutVersion: boolean;
    +ObjectCheckedOut: boolean;
    +ObjectCheckedOutToThisUserOnAnyComputer: boolean;
    +ObjectCheckedOutToThisUserOnThisComputer: boolean;
    +ObjectFlags: MFiles$MFSpecialObjectFlag;
    +ObjectGUID: string;
    +ObjectVersionFlags: MFiles$MFObjectVersionFlag;
    +ObjVer: IObjVer;
    +OriginalObjID: IObjID;
    +OriginalVaultGUID: string;
    +SingleFile: boolean;
    +ThisVersionCheckedOut: boolean;
    +ThisVersionLatestToThisUser: boolean;
    +Title: string;
    +VersionGUID: string;
    +VisibleAfterOperation: boolean;
    Clone(): IObjectVersion;
    GetNameForFileSystem(IncludeID: boolean): string;
    GetNameForFileSystemEx(IncludeID: boolean, UseOriginalID: boolean): string;
  }
  declare interface IObjectVersionAndProperties {
    +ObjVer: IObjVer;
    +Properties: IPropertyValues;
    +Vault: IVault;
    +VersionData: IObjectVersion;
    Clone(): IObjectVersionAndProperties;
  }
  declare interface IObjectVersionAndPropertiesOfMultipleObjects {
    +Count: number;
    Add(
      Index: number,
      ObjectVersionAndProperties: IObjectVersionAndProperties
    ): void;
    Clone(): IObjectVersionAndPropertiesOfMultipleObjects;
    Item(Index: number): IObjectVersionAndProperties;
    Remove(Index: number): void;
  }
  declare interface IObjectVersionPermissions {
    +AccessControlList: IAccessControlList;
    +CustomACL: boolean;
    +NamedACL: INamedACL;
    +ObjVer: IObjVer;
  }
  declare interface IObjectVersions {
    +Count: number;
    Add(Index: number, ObjectVersionData: IObjectVersion): void;
    GetAsObjVers(): IObjVers;
    Item(Index: number): IObjectVersion;
    Item(Index: number, value: IObjectVersion): void;
    Remove(Index: number): void;
    Sort(ObjectComparer: IObjectComparer): void;
  }
  declare interface IObjectVersionWorkflowState {
    State: IPropertyValue;
    VersionComment: IPropertyValue;
    Workflow: IPropertyValue;
  }
  declare interface IObjectWindowResult {
    +AccessControlList: IAccessControlList;
    +ObjVer: IObjVer;
    +Properties: IPropertyValues;
    +Result: MFiles$MFObjectWindowResultCode;
    +SelectedFileClass: IFileClass;
    +UseAsDefaults: boolean;
    +Visible: boolean;
  }
  declare interface IObjID {
    ID: number;
    Type: number;
    Clone(): IObjID;
    CloneFrom(ObjID: IObjID): void;
    Serialize(): $ReadOnlyArray<number>;
    SetIDs(ObjType: number, ID: number): void;
    ToJSON(): string;
    Unserialize(Bytes: $ReadOnlyArray<number>): void;
  }
  declare interface IObjIDs {
    +Count: number;
    Add(Index: number, ObjID: IObjID): void;
    Item(Index: number): IObjID;
    Item(Index: number, value: IObjID): void;
    Remove(Index: number): void;
    ToJSON(): string;
  }
  declare interface IObjOrFileVer {
    FileVer: IFileVer;
    ObjVer: IObjVer;
    Clone(): IObjOrFileVer;
    IsFile(): boolean;
  }
  declare interface IObjOrFileVers {
    +Count: number;
    Add(Index: number, ObjOrFileVer: IObjOrFileVer): void;
    Clone(): IObjOrFileVers;
    Item(Index: number): IObjOrFileVer;
    Remove(Index: number): void;
  }
  declare interface IObjVer {
    ID: number;
    ObjID: IObjID;
    Type: number;
    Version: number;
    Clone(): IObjVer;
    CloneFrom(ObjVer: IObjVer): void;
    Serialize(): $ReadOnlyArray<number>;
    SetIDs(ObjType: number, ID: number, Version: number): void;
    SetObjIDAndVersion(ObjID: IObjID, Version: number): void;
    ToJSON(): string;
    Unserialize(Bytes: $ReadOnlyArray<number>): void;
  }
  declare interface IObjVers {
    +Count: number;
    Add(Index: number, ObjVer: IObjVer): void;
    Clone(): IObjVers;
    GetAllDistinctObjIDs(): IObjIDs;
    Item(Index: number): IObjVer;
    Remove(Index: number): void;
    ToJSON(): string;
  }
  declare interface IOCROptions {
    PrimaryLanguage: MFiles$MFOCRLanguage;
    SecondaryLanguage: MFiles$MFOCRLanguage;
    Clone(): IOCROptions;
  }
  declare interface IOCRPage {
    OCRZones: IOCRZones;
    PageNum: number;
    Clone(): IOCRPage;
  }
  declare interface IOCRPageResult {
    +OCRZoneResults: IOCRZoneResults;
    +PageNum: number;
  }
  declare interface IOCRPageResults {
    +Count: number;
    Item(Index: number): IOCRPageResult;
  }
  declare interface IOCRPages {
    +Count: number;
    Add(Index: number, OCRPage: IOCRPage): void;
    Clone(): IOCRPages;
    Item(Index: number): IOCRPage;
    Remove(Index: number): void;
  }
  declare interface IOCRZone {
    Barcode: boolean;
    DataType: MFiles$MFDataType;
    DimensionUnit: MFiles$MFOCRDimensionUnit;
    +HasOCROptions: boolean;
    Height: number;
    ID: number;
    Left: number;
    Name: string;
    OCROptions: IOCROptions;
    Top: number;
    Width: number;
    ClearOCROptions(): void;
    Clone(): IOCRZone;
    SetOCROptions(OCROptions: IOCROptions): void;
  }
  declare interface IOCRZoneResult {
    +Confidence: number;
    +DimensionUnit: MFiles$MFOCRDimensionUnit;
    +Height: number;
    +ID: number;
    +Left: number;
    +RecognizedOnPage: number;
    +ResultValue: ITypedValue;
    +Top: number;
    +Width: number;
  }
  declare interface IOCRZoneResults {
    +Count: number;
    Item(Index: number): IOCRZoneResult;
  }
  declare interface IOCRZones {
    +Count: number;
    Add(Index: number, OCRZone: IOCRZone): void;
    Clone(): IOCRZones;
    Item(Index: number): IOCRZone;
    Remove(Index: number): void;
  }
  declare interface IOptimizeVaultJob {
    GarbageCollectFiles: boolean;
    +Thorough: boolean;
    +VaultGUID: string;
    GetNumberOfSteps(): number;
    GetOneBasedIndexOfStep(CurrentStep: number): number;
    GetStepProgressText(CurrentStep: number): string;
    Set(GuidVault: string, Thorough: boolean): void;
  }
  declare interface IOwnerPropertyDef {
    DependencyRelation: MFiles$MFDependencyRelation;
    ID: number;
    IndexForAutomaticFilling: number;
    +IsRelationFiltering: boolean;
  }
  declare interface IPluginInfo {
    AssemblyName: string;
    BridgeClassName: string;
    Configuration: INamedValues;
    ConfigurationScope: string;
    ConfigurationSource: INamedValues;
    ConfigurationVaultGUID: string;
    IsDefault: boolean;
    IsScopeIndependent: boolean;
    Name: string;
    Clone(): IPluginInfo;
  }
  declare interface IPluginInfos {
    +Count: number;
    Add(Index: number, PluginInfo: IPluginInfo): void;
    Clone(): IPluginInfos;
    Item(Index: number): IPluginInfo;
    Item(Index: number, value: IPluginInfo): void;
    Remove(Index: number): void;
  }
  declare interface IPreviewerActiveXCtrl {
    ClearPreview(): number;
    ShowFilePreview(bstrFilename: string): number;
    ShowHitHighlightedFilePreview(
      bstrFilename: string,
      lObjType: number,
      lObjID: number,
      lObjVersion: number,
      lFile: number,
      lFileVersion: number,
      pIHitHighlightingInfo: any,
      bstrSearchConditions: string
    ): number;
  }
  declare interface IPropertyDef {
    AccessControlList: IAccessControlList;
    AllObjectTypes: boolean;
    AllowedAsGroupingLevel: boolean;
    AutomaticValueDefinition: ITypedValue;
    AutomaticValueType: MFiles$MFAutomaticValueType;
    BasedOnValueList: boolean;
    ContentType: MFiles$MFContentType;
    DataType: MFiles$MFDataType;
    DependencyPD: number;
    DependencyRelation: MFiles$MFDependencyRelation;
    FormattingType: MFiles$MFFormattingType;
    +GUID: string;
    ID: number;
    Name: string;
    ObjectType: MFiles$MFBuiltInObjectType | number;
    OwnerPropertyDef: IOwnerPropertyDef;
    Predefined: boolean;
    SortAscending: boolean;
    StaticFilter: ISearchConditions;
    +ThisIsConflictPD: boolean;
    +ThisIsDefaultPD: boolean;
    +ThisIsOwnerPD: boolean;
    UpdateType: MFiles$MFUpdateType;
    ValidationType: MFiles$MFValidationType;
    ValueList: MFiles$MFBuiltInValueList | number;
    ValueListSortingType: MFiles$MFValueListSortingType;
    Clone(): IPropertyDef;
  }
  declare interface IPropertyDefAdmin {
    AllowAutomaticPermissions: boolean;
    AutomaticValue: IAutomaticValue;
    NamedValueNamespaces: INamedValueNamespaces;
    PropertyDef: IPropertyDef;
    SemanticAliases: ISemanticAliases;
    Validation: IValidation;
    Clone(): IPropertyDefAdmin;
  }
  declare interface IPropertyDefOrObjectType {
    ID: number;
    PropertyDef: boolean;
    Clone(): IPropertyDefOrObjectType;
    GetAsExpression(): IExpression;
  }
  declare interface IPropertyDefOrObjectTypes {
    +Count: number;
    Add(Index: number, PropertyDefOrObjectType: IPropertyDefOrObjectType): void;
    Clone(): IPropertyDefOrObjectTypes;
    Item(Index: number): IPropertyDefOrObjectType;
    Item(Index: number, value: IPropertyDefOrObjectType): void;
    Remove(Index: number): void;
  }
  declare interface IPropertyDefs {
    +Count: number;
    Clone(): IPropertyDefs;
    Item(Index: number): IPropertyDef;
  }
  declare interface IPropertyDefsAdmin {
    +Count: number;
    Item(Index: number): IPropertyDefAdmin;
  }
  declare interface IPropertyValue {
    PropertyDef: MFiles$MFBuiltInPropertyDef | number;
    TypedValue: ITypedValue;
    Value: ITypedValue;
    Clone(): IPropertyValue;
    CloneFrom(PropertyValue: IPropertyValue): void;
    GetValueAsLocalizedText(): string;
    GetValueAsText(
      Localized: boolean,
      NULLAsEmptyString: boolean,
      EmptyLookupDisplayValuesAsHidden: boolean,
      LongDateFormat: boolean,
      NoSeconds: boolean,
      NumericValueAsKilobytes: boolean
    ): string;
    GetValueAsUnlocalizedText(): string;
  }
  declare interface IPropertyValueForDisplay {
    +ContentType: MFiles$MFContentType;
    +DataType: MFiles$MFDataType;
    +DisplayValue: string;
    +PropertyDef: MFiles$MFBuiltInPropertyDef | number;
    +PropertyDefName: string;
    +PropertyValue: IPropertyValue;
    +ReadOnly: boolean;
    Clone(): IPropertyValueForDisplay;
  }
  declare interface IPropertyValueIconClue {
    +PropertyDef: MFiles$MFBuiltInPropertyDef | number;
    +ValueListItem: number;
    Clone(): IPropertyValueIconClue;
  }
  declare interface IPropertyValueIconClues {
    +Count: number;
    Clone(): IPropertyValueIconClues;
    Item(Index: number): IPropertyValueIconClue;
  }
  declare interface IPropertyValues {
    +Count: number;
    Add(Index: number, PropertyValue: IPropertyValue): void;
    Clone(): IPropertyValues;
    CloneFrom(PropertyValues: IPropertyValues): void;
    IndexOf(PropertyDef: MFiles$MFBuiltInPropertyDef | number): number;
    IndexOfByAlias(Vault: IVault, PropertyDefAlias: string): number;
    Item(Index: number): IPropertyValue;
    Item(Index: number, value: IPropertyValue): void;
    Remove(Index: number): void;
    SearchForProperty(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number
    ): IPropertyValue;
    SearchForPropertyByAlias(
      Vault: IVault,
      PropertyDefAlias: string,
      ReturnNULLIfNotFound: boolean
    ): IPropertyValue;
    SearchForPropertyEx(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      ReturnNULLIfNotFound: boolean
    ): IPropertyValue;
  }
  declare interface IPropertyValuesForDisplay {
    +Count: number;
    Item(Index: number): IPropertyValueForDisplay;
  }
  declare interface IPropertyValuesOfMultipleObjects {
    +Count: number;
    Clone(): IPropertyValuesOfMultipleObjects;
    Item(Index: number): IPropertyValues;
  }
  declare interface IPropertyValueSuggestion {
    +IsFact: boolean;
    +Quality: number;
    +TypedValue: ITypedValue;
    Clone(): IPropertyValueSuggestion;
  }
  declare interface IPropertyValueSuggestions {
    +Count: number;
    Add(
      Index: number,
      IPropertyValueSuggestion: IPropertyValueSuggestion
    ): void;
    Clone(): IPropertyValueSuggestions;
    Item(Index: number): IPropertyValueSuggestion;
    Item(Index: number, value: IPropertyValueSuggestion): void;
    Remove(Index: number): void;
  }
  declare interface IPropertyValuesWithIconClues {
    +IconClues: IPropertyValueIconClues;
    +ObjVer: IObjVer;
    +PropertyValues: IPropertyValues;
    Clone(): IPropertyValuesWithIconClues;
  }
  declare interface IPropertyValuesWithIconCluesOfMultipleObjects {
    +Count: number;
    Clone(): IPropertyValuesWithIconCluesOfMultipleObjects;
    Item(Index: number): IPropertyValuesWithIconClues;
  }
  declare interface IReportAccessCredentials {
    +Domain: string;
    +ExtAccount: boolean;
    +Password: string;
    +UserName: string;
  }
  declare interface IRestoreJob {
    BackupFileDifferential: string;
    BackupFileFull: string;
    Impersonation: IImpersonation;
    OverwriteExistingFiles: boolean;
    VaultProperties: IVaultProperties;
  }
  declare interface IScheduledJob {
    +BackupVaultJob: IBackupJob;
    Enabled: boolean;
    +ExportContentJob: IExportContentJob;
    ID: number;
    +ImportContentJob: IImportContentJob;
    JobName: string;
    JobType: MFiles$MFScheduledJobType;
    +OptimizeVaultJob: IOptimizeVaultJob;
    Temporary: boolean;
    Triggers: IScheduledJobTriggers;
    SetBackupVaultJob(BackupVaultJob: IBackupJob): void;
    SetExportContentJob(ExportContentJob: IExportContentJob): void;
    SetImportContentJob(ImportContentJob: IImportContentJob): void;
    SetOptimizeVaultJob(OptimizeVaultJob: IOptimizeVaultJob): void;
  }
  declare interface IScheduledJobOutputInfo {
    ID: number;
    JobType: MFiles$MFScheduledJobType;
    Message: string;
  }
  declare interface IScheduledJobRunInfo {
    +Cancelled: boolean;
    +CurrentStep: number;
    +LastRun: ITimestamp;
    +LastRunErrors: string;
    +LastRunSucceeded: boolean;
    +NextRun: ITimestamp;
    +Running: boolean;
    +ScheduledJobOutputInfo: IScheduledJobOutputInfo;
    +StepCompletionPercent: number;
  }
  declare interface IScheduledJobs {
    +Count: number;
    Item(Index: number): IScheduledJob;
  }
  declare interface IScheduledJobTrigger {
    BeginDay: number;
    BeginMonth: number;
    BeginYear: number;
    EndDay: number;
    EndMonth: number;
    EndYear: number;
    StartHour: number;
    StartMinute: number;
    Type: ITriggerType;
    ValidEndDate: boolean;
    Clone(): IScheduledJobTrigger;
  }
  declare interface IScheduledJobTriggers {
    +Count: number;
    Add(Index: number, ScheduledJobTrigger: IScheduledJobTrigger): void;
    Clone(): IScheduledJobTriggers;
    Item(Index: number): IScheduledJobTrigger;
    Remove(Index: number): void;
  }
  declare interface ISearchCondition {
    ConditionType: MFiles$MFConditionType;
    Expression: IExpression;
    TypedValue: ITypedValue;
    Clone(): ISearchCondition;
    Set(
      Expression: IExpression,
      ConditionType: MFiles$MFConditionType,
      TypedValue: ITypedValue
    ): void;
  }
  declare interface ISearchConditionEx {
    Enabled: boolean;
    Ignored: boolean;
    SearchCondition: ISearchCondition;
    SpecialNULL: boolean;
    Clone(): ISearchConditionEx;
    Set(
      SearchCondition: ISearchCondition,
      Enabled: boolean,
      SpecialNULL: boolean,
      Ignored: boolean
    ): void;
  }
  declare interface ISearchConditionExs {
    +Count: number;
    Add(Index: number, SearchConditionEx: ISearchConditionEx): void;
    Clone(): ISearchConditionExs;
    Item(Index: number): ISearchConditionEx;
    Item(Index: number, value: ISearchConditionEx): void;
    Remove(Index: number): void;
  }
  declare interface ISearchConditions {
    +Count: number;
    Add(Index: number, SearchCondition: ISearchCondition): void;
    AppendFromExportedSearchString(ExportedSearchString: string): void;
    Clone(): ISearchConditions;
    GetAsExportedSearchString(SearchFlags: MFiles$MFSearchFlags): string;
    Item(Index: number): ISearchCondition;
    Item(Index: number, value: ISearchCondition): void;
    Remove(Index: number): void;
  }
  declare interface ISearchCriteria {
    AdditionalConditions: ISearchConditionExs;
    ExpandUI: boolean;
    FacetFilterAsJSON: string;
    FacetFilterStatusFlags: MFiles$MFFacetFilterStatusFlags;
    FirstCondition: ISearchConditionEx;
    FullTextSearchFlags: MFiles$MFFullTextSearchFlags;
    FullTextSearchString: string;
    ObjectTypeCondition: ISearchConditionEx;
    PredefinedSearchFilter: MFiles$MFPredefinedSearchFilterType;
    PreviousBaseConditions: ISearchConditions;
    SearchFlags: MFiles$MFSearchFlags;
    SearchRefinement: ISearchConditions;
    SearchWithinThisFolder: boolean;
    SecondCondition: ISearchConditionEx;
    Clone(): ISearchCriteria;
    GetAsSearchConditions(
      ForceGettingExpandedConds: boolean,
      IncludeSearchRefinementConditions: boolean,
      IncludePreviousBaseConditions: boolean
    ): ISearchConditions;
  }
  declare interface ISearchDef {
    Conditions: ISearchConditions;
    Levels: IExpressionExs;
    LookInAllVersions: boolean;
    ReturnLatestVisibleVersion: boolean;
    SearchFlags: MFiles$MFSearchFlags;
    Clone(): ISearchDef;
    IsIndirectionUsed(): boolean;
  }
  declare interface ISearchPane {
    +Available: boolean;
    +Events: ISearchPaneEvents;
    Visible: boolean;
    SetTheme(theme: ITheme): void;
  }
  declare type ISearchPaneEvents = {
    OnHidePane?: () => void,
    OnShowPane?: () => void,
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare interface ISemanticAliases {
    Value: string;
    Clone(): ISemanticAliases;
  }
  declare interface IServerDataPushSink {
    OnServerDataPush(RequestID: number, JsonDataContent: string): void;
  }
  declare interface IServerLicenseManagementOperations {
    GetLicenseStatus(): ILicenseStatus;
    SetLicenseCodeAndSerialNumber(
      SerialNumber: string,
      LicenseCode: string
    ): void;
  }
  declare interface IServerLoginAccountOperations {
    AddLoginAccount(LoginAccount: ILoginAccount, Password: string): void;
    ForceLogout(AccountNames: IStrings): void;
    GetLoginAccount(AccountName: string): ILoginAccount;
    GetLoginAccounts(): ILoginAccounts;
    GetLoginAccountsWithSessions(): ILoginAccounts;
    GetPersonalInformationFromDomain(
      AccountName: string
    ): ILoginAccountPersonalInformation;
    ModifyLoginAccount(LoginAccount: ILoginAccount): void;
    RemoveLoginAccount(AccountName: string): void;
    UpdateLoginPassword(AccountName: string, NewPassword: string): void;
  }
  declare interface IServerManagementOperations {
    BackupMasterDB(
      BackupFile: string,
      OverwriteExistingFiles: boolean,
      FileSizeLimitInMB: number,
      Impersonation: IImpersonation
    ): void;
    ConfigureWebAccessToDefaultWebSite(): void;
    ConfigureWebAccessToExistingWebSite(WebSite: string): void;
    ConfigureWebAccessToNewVirtualDirectory(
      WebSite: string,
      VirtualDirectory: string
    ): void;
    ConfigureWebAccessToNewWebSite(WebSite: string, Port: string): void;
    GetEventHandlers(): IEventHandlers;
    RestoreMasterDB(BackupFile: string, Impersonation: IImpersonation): void;
    SetEventHandlers(EventHandlers: IEventHandlers): void;
  }
  declare interface IServerScheduledJobManagementOperations {
    AddScheduledJob(ScheduledJob: IScheduledJob): number;
    CancelScheduledJob(ID: number): void;
    GetScheduledJob(ID: number): IScheduledJob;
    GetScheduledJobRunInfo(ID: number): IScheduledJobRunInfo;
    GetScheduledJobs(): IScheduledJobs;
    ModifyScheduledJob(ScheduledJob: IScheduledJob): void;
    RemoveScheduledJob(ID: number): void;
    StartScheduledJob(ID: number): void;
  }
  declare interface IServerVaultManagementOperations {
    AttachVault(
      VaultProperties: IVaultProperties,
      UpdateAttachmentGUID: boolean
    ): IVaultProperties;
    AttachVaultWithOptions(
      VaultProperties: IVaultProperties,
      Options: IAttachVaultOptions
    ): IVaultProperties;
    BackupVault(BackupJob: IBackupJob): void;
    BringVaultOnline(VaultGUID: string): void;
    CopyVault(CopyVaultJob: ICopyVaultJob): ICopyVaultJobOutputInfo;
    CreateNewVault(VaultProperties: IVaultProperties): string;
    DestroyVault(VaultGUID: string): void;
    DetachVault(VaultGUID: string): void;
    GetBackupFileContents(
      BackupFileFull: string,
      BackupFileDifferential: string,
      Impersonation: IImpersonation
    ): IVaultProperties;
    GetVaultProperties(VaultGUID: string): IVaultProperties;
    OptimizeVault(OptimizeVaultJob: IOptimizeVaultJob): void;
    RestoreVault(RestoreJob: IRestoreJob): void;
    TakeVaultOffline(VaultGUID: string, DisconnectUsers: boolean): void;
  }
  declare interface ISessionInfo {
    +AccountName: string;
    +ACLMode: MFiles$MFACLMode;
    +AuthenticationType: MFiles$MFAuthType;
    +CanCreateObjects: boolean;
    +CanForceUndoCheckout: boolean;
    +CanManageCommonUISettings: boolean;
    +CanManageCommonViews: boolean;
    +CanManageTraditionalFolders: boolean;
    +CanMaterializeViews: boolean;
    +CanSeeAllObjects: boolean;
    +CanSeeDeletedObjects: boolean;
    +ClientCulture: string;
    +InternalUser: boolean;
    +IsSharingPublicLinksAllowed: boolean;
    +IsSharingPublicLinksToLatestVersionAllowed: boolean;
    +KeepAliveIntervalInSeconds: number;
    +Language: number;
    +LicenseAllowsModifications: boolean;
    +LocalComputerName: string;
    +ProductMode: MFiles$MFProductMode;
    +ServerVersion: number;
    +TimeZoneInfo: ITimeZoneInformation;
    +UserAndGroupMemberships: IUserOrUserGroupIDs;
    +UserAndSubstitutedByMe: IUserOrUserGroupIDs;
    +UserID: number;
    +VaultGUID: string;
    CheckObjectAccess(
      ObjectAccessControlList: IAccessControlList,
      DesiredObjectAccess: MFiles$MFObjectAccess
    ): boolean;
    CheckObjectTypeAccess(
      ObjectTypeAccessControlList: IAccessControlList,
      DesiredObjectTypeAccess: MFiles$MFObjectTypeAccess
    ): boolean;
    CheckPropertyDefAccess(
      PropertyDefAccessControlList: IAccessControlList,
      DesiredPropertyDefAccess: MFiles$MFPropertyDefAccess
    ): boolean;
    CheckVaultAccess(DesiredVaultAccess: MFiles$MFVaultAccess): boolean;
    CloneFrom(SessionInfo: ISessionInfo): void;
    IsLoggedOnUserSubstituteOfUser(UserID: number): boolean;
  }
  declare interface ISetPropertiesParams {
    AccessControlListEnforcingMode: MFiles$MFACLEnforcingMode;
    AccessControlListProvidedForEnforcing: IAccessControlList;
    AllowModifyingCheckedInObject: boolean;
    FailIfNotLatestCheckedInVersion: boolean;
    FullSet: boolean;
    ObjVer: IObjVer;
    PropertyValuesToRemove: IIDs;
    PropertyValuesToSet: IPropertyValues;
    Clone(): ISetPropertiesParams;
    SetWithPermissions(
      ObjVer: IObjVer,
      AllowModifyingCheckedInObject: boolean,
      FailIfNotLatestCheckedInVersion: boolean,
      PropertyValuesToSet: IPropertyValues,
      FullSet: boolean,
      PropertyValuesToRemove: IIDs,
      ObjectOperationFlags: MFiles$MFObjectOperationFlags,
      AccessControlListEnforcingMode: MFiles$MFACLEnforcingMode,
      AccessControlListProvidedForEnforcing: IAccessControlList
    ): void;
  }
  declare interface ISetPropertiesParamsOfMultipleObjects {
    +Count: number;
    Add(Index: number, SetPropertiesParams: ISetPropertiesParams): void;
    Clone(): ISetPropertiesParamsOfMultipleObjects;
    Item(Index: number): ISetPropertiesParams;
    Remove(Index: number): void;
  }
  declare interface ISharedFileInfo {
    +ChangeTimeUtc: Date;
    +Extension: string;
    +LogicalSize: number;
    +LogicalSize_32bit: number;
    +Title: string;
    Clone(): ISharedFileInfo;
  }
  declare interface ISharedLinkInfo {
    +AccessKey: string;
    +CreatedByUser: number;
    +CreationTime: ITimestamp;
    Description: string;
    ExpirationTime: ITimestamp;
    FileVer: IFileVer;
    ObjVer: IObjVer;
    Clone(): ISharedLinkInfo;
    Set(ObjVer: IObjVer, FileVer: IFileVer): void;
  }
  declare interface ISharedLinkInfos {
    +Count: number;
    Add(Index: number, SharedLink: ISharedLinkInfo): void;
    Clone(): ISharedLinkInfos;
    Item(Index: number): ISharedLinkInfo;
    Item(Index: number, value: ISharedLinkInfo): void;
    Remove(Index: number): void;
  }
  declare interface ISharedLinkPublicOperations {
    DownloadSharedFileInBlocks_Begin(
      VaultGUID: string,
      AccessKey: string,
      AdditionalData: INamedValues
    ): IFileDownloadSession;
    DownloadSharedFileInBlocks_Begin_32bit(
      VaultGUID: string,
      AccessKey: string,
      AdditionalData: INamedValues
    ): IFileDownloadSession;
    DownloadSharedFileInBlocks_ReadBlock(
      VaultGUID: string,
      AccessKey: string,
      DownloadID: number,
      BlockSize: number,
      Offset: number
    ): $ReadOnlyArray<number>;
    DownloadSharedFileInBlocks_ReadBlock_32bit(
      VaultGUID: string,
      AccessKey: string,
      DownloadID: number,
      BlockSize: number,
      Offset: number
    ): $ReadOnlyArray<number>;
    GetSharedLinkInfo(
      VaultGUID: string,
      AccessKey: string,
      AdditionalData: INamedValues
    ): ISharedFileInfo;
  }
  declare interface IShellFrame {
    +ActiveListing: IShellListing;
    +BottomPane: IShellPaneContainer;
    +Commands: ICommands;
    +CurrentFolder: IFolderDefs;
    +CurrentObjectVersion: IObjectVersion;
    CurrentPath: string;
    +Events: IShellFrameEvents;
    +Listing: IShellListing;
    +OuterWindow: IWindow;
    +ParentFolder: IFolderDefs;
    +RightPane: IShellPaneContainer;
    +SearchPane: ISearchPane;
    +ShellUI: IShellUI;
    +TaskPane: ITaskPane;
    +UseCompactLayout: boolean;
    CreateAdditionalListingForPath(path: string): IShellListing;
    CreateAdditionalListingForView(
      viewID: MFiles$MFBuiltInView | number
    ): IShellListing;
    GetListing(listingIndex: number): IShellListing;
    IsFolderLocation(): boolean;
    IsObjectLocation(): boolean;
    NavigateToParent(): void;
    SetTheme(theme: ITheme): void;
    ShowDashboard(dashboardID: string, data: any): void;
    ShowDefaultContent(): void;
    ShowMessage(message: string | IMessage): number;
    ShowPopupDashboard(
      dashboardID: string,
      waitUntilClosed: boolean,
      data: any
    ): void;
    ShowPopupSSRSReport(reportWindowTitle: string, reportURL: string): void;
    ShowSSRSReport(reportURL: string): void;
  }
  declare type IShellFrameEvent = {
    OnActiveListingChanged?: (
      oldListing: null | IShellListing,
      newListing: IShellListing
    ) => void,
    OnNewBottomPane?: (
      bottomPane: IShellPaneContainer
    ) => void | IShellPaneContainerEvents,
    OnNewCommands?: (commands: ICommands) => void | ICommandsEvents,
    OnNewRightPane?: (
      rightPane: IShellPaneContainer
    ) => void | IShellPaneContainerEvents,
    OnNewSearchPane?: (searchPane: ISearchPane) => void | ISearchPaneEvents,
    OnNewShellListing?: (
      shellListing: IShellListing
    ) => void | IShellListingEvents,
    OnNewTaskPane?: (taskPane: ITaskPane) => void | ITaskPaneEvents,
    OnShowMainMenu?: () => void,
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare type IShellFrameEvents = {
    OnActiveListingChanged?: (
      oldListing: null | IShellListing,
      newListing: IShellListing
    ) => void,
    OnNewBottomPane?: (
      bottomPane: IShellPaneContainer
    ) => void | IShellPaneContainerEvents,
    OnNewCommands?: (commands: ICommands) => void | ICommandsEvents,
    OnNewRightPane?: (
      rightPane: IShellPaneContainer
    ) => void | IShellPaneContainerEvents,
    OnNewSearchPane?: (searchPane: ISearchPane) => void | ISearchPaneEvents,
    OnNewShellListing?: (
      shellListing: IShellListing
    ) => void | IShellListingEvents,
    OnNewTaskPane?: (taskPane: ITaskPane) => void | ITaskPaneEvents,
    OnShowMainMenu?: () => void,
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare interface IShellItems {
    +Count: number;
    +Folders: IFolderDefs;
    +ObjectFiles: IObjectFileAndObjVerOfMultipleFiles;
    +ObjectVersions: IObjectVersions;
    +ObjectVersionsAndProperties: IObjectVersionAndPropertiesOfMultipleObjects;
    GetObjectVersionsCount(): number;
  }
  declare interface IShellListing {
    AutoFitAllColumns: boolean;
    AutoFitFirstColumn: boolean;
    ColumnHeadersVisible: boolean;
    +CurrentPath: string;
    +CurrentSelection: IShellItems;
    +Events: IShellListingEvents;
    GroupObjectsByObjectType: boolean;
    GroupViewsAndFolders: boolean;
    +IsActive: boolean;
    +Items: IShellItems;
    +SumOfResultCounts: number;
    ActivateListing(): void;
    ActivateSelected(): void;
    RefreshListing(
      smartUpdate: boolean,
      refreshFromServer: boolean,
      forceFullRefreshFromServer: boolean
    ): void;
    RefreshListingAsync(): void;
    RefreshObject(
      objID: IObjID,
      refreshFromServer: boolean,
      updateRelatedObjects: boolean
    ): void;
    RefreshSelectedObjects(
      refreshFromServer: boolean,
      updateRelatedObjects: boolean
    ): void;
    SelectFolder(folderDef: IFolderDef): void;
    SelectNextFolder(folderDefType: MFiles$MFFolderDefType): boolean;
    SelectNextObject(): boolean;
    SelectNextObjectFile(allowMoveToNextObject: boolean): boolean;
    SelectObjectFile(objVer: IObjVer, fileVer: IFileVer): void;
    SelectObjectOrObjectFileVersion(objOrFileVer: IObjOrFileVer): void;
    SelectObjectVersion(objVer: IObjVer): void;
    SelectPrevFolder(folderDefType: MFiles$MFFolderDefType): boolean;
    SelectPrevObject(): boolean;
    SelectPrevObjectFile(allowMoveToPrevObject: boolean): boolean;
    SetFolderSelectionStates(folderDefs: IFolderDefs, select: boolean): void;
    SetObjectOrObjectFileVersionSelectionStates(
      objOrFileVers: IObjOrFileVers,
      select: boolean
    ): void;
    SetObjectVersionSelectionStates(objVers: IObjVers, select: boolean): void;
    SetTheme(theme: ITheme): void;
    SetVirtualSelection(objOrFileVers: IObjOrFileVers): void;
    UnselectAll(): void;
  }
  declare type IShellListingEvents = {
    OnContentChanged?: (items: IShellItems) => void,
    OnListingActivated?: (oldListing: null | IShellListing) => void,
    OnListingDeactivated?: (newListing: null | IShellListing) => void,
    OnSelectedItemsChanged?: (selectedItems: IShellItems) => void,
    OnSelectionChanged?: (selectedItems: IShellItems) => void,
    OnShowContextMenu?: (selectedItems: IShellItems) => void,
    OnShowMainMenu?: (selectedItems: IShellItems) => void,
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare interface IShellPaneContainer {
    +Content: any;
    +Events: IShellPaneContainerEvents;
    +IsFocused: boolean;
    Minimized: boolean;
    +ShellFrame: IShellFrame;
    Size: number;
    +TabTitleSize: number;
    Visible: boolean;
    AddTab(
      TabId: string,
      tabTitle: string,
      insertBeforeTabId: string
    ): IShellPaneTab;
    Focus(): void;
    GetSelectedTab(): IShellPaneTab;
    GetTab(TabId: string): IShellPaneTab;
    SetDefaultSize(defaultSize: number, resizeToDefault: boolean): void;
    SetDefaultVisibility(Visible: boolean, resetToDefault: boolean): void;
  }
  declare type IShellPaneContainerEvents = {
    OnHidePane?: () => void,
    OnMinimizedStateChanged?: () => void,
    OnNewTab?: (tab: IShellPaneTab) => void,
    OnPaneResized?: () => void,
    OnShowPane?: () => void,
    OnStarted?: () => void,
    OnStop?: () => void,
    OnTabSelected?: () => void,
    OnTabUnselected?: () => void
  } & IEvents;

  declare interface IShellPaneTab {
    +Events: IShellPaneTabEvents;
    +IsBuiltIn: boolean;
    +Selected: boolean;
    +TabId: string;
    Title: string;
    Visible: boolean;
    Remove(): void;
    Select(): void;
    ShowDashboard(dashboardID: string, data: any): void;
    ShowEmptyContent(): void;
    ShowFilePreview(file: string): void;
    ShowObjectVersionProperties(
      propertyValuesWithIcons: IPropertyValuesWithIconClues
    ): void;
    ShowPersistentContent(sessionHandle: number): void;
    ShowSSRSReport(reportURL: string): void;
    Unselect(): void;
  }
  declare type IShellPaneTabEvents = {
    OnHideTab?: () => void,
    OnShowTab?: () => void,
    OnStarted?: () => void,
    OnStop?: () => void,
    OnTabSelected?: () => void,
    OnTabUnselected?: () => void
  } & IEvents;

  declare interface IShellUI {
    +Events: IShellUIEvents;
    +ServerVault: IVault;
    +Vault: IVault;
    +Window: IWindow;
    CreatePersistentBrowserContent(url: string, parameters: any): number;
    DestroyPersistentContent(sessionHandle: number): void;
    GetObjectTypeIconURL(objtype: number): string;
    NotifyVaultEntry(ID: string, data1: any, data2: any): any;
    SetPersistentBrowserContent(url: string, sessionHandle: number): void;
    ShowMessage(message: string | IMessage): number;
    ShowPopupDashboard(
      dashboardID: string,
      waitUntilClosed: boolean,
      data: any
    ): void;
  }
  declare type IShellUIEvents = {
    OnNewCommonDialogShellFrame?: (
      shellFrame: IShellFrame
    ) => void | IShellFrameEvents,
    OnNewEmbeddedShellFrame?: (
      shellFrame: IShellFrame
    ) => void | IShellFrameEvents,
    OnNewNormalShellFrame?: (
      shellFrame: IShellFrame
    ) => void | IShellFrameEvents,
    OnNewShellFrame?: (shellFrame: IShellFrame) => void | IShellFrameEvents,
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare interface IShortcutMappingInfo {
    ObjectTypeGUID: string;
    ObjectTypeID: number;
    ObjectTypeName: string;
    ObjectTypeSemanticAliases: ISemanticAliases;
  }
  declare interface ISignaturePromptInfo {
    Meaning: string;
    Reason: string;
    Clone(): ISignaturePromptInfo;
  }
  declare interface ISignaturePromptInfoMetadataBased {
    IsReferencedBySignatureObject: boolean;
    MeaningPropertyID: number;
    PromptInfoLookupPropertyID: number;
    ReasonPropertyID: number;
    Clone(): ISignaturePromptInfoMetadataBased;
  }
  declare interface ISignaturePromptInfos {
    +Count: number;
    Add(Index: number, SignaturePromptInfo: ISignaturePromptInfo): void;
    Clone(): ISignaturePromptInfos;
    Item(Index: number): ISignaturePromptInfo;
    Item(Index: number, value: ISignaturePromptInfo): void;
    Remove(Index: number): void;
  }
  declare interface ISignaturePromptInfoSelectable {
    PromptInfos: ISignaturePromptInfos;
    Clone(): ISignaturePromptInfoSelectable;
  }
  declare interface ISignatureSettings {
    AdditionalInfo: string;
    FreeFormTextPropertyID: number;
    IsFreeFormTextPrompted: boolean;
    IsRequired: boolean;
    IsSeparateSignatureObject: boolean;
    ManifestationPropertyID: number;
    +PromptInfoType: MFiles$MFSignaturePromptInfoType;
    SignatureIdentifier: string;
    SignaturePromptInfoFixed: ISignaturePromptInfo;
    SignaturePromptInfoMetadataBased: ISignaturePromptInfoMetadataBased;
    SignaturePromptInfoSelectable: ISignaturePromptInfoSelectable;
    Clone(): ISignatureSettings;
  }
  declare interface ISourceObjectFile {
    Extension: string;
    SourceFilePath: string;
    Title: string;
    Clone(): ISourceObjectFile;
  }
  declare interface ISourceObjectFiles {
    +Count: number;
    Add(Index: number, SourceObjectFile: ISourceObjectFile): void;
    AddEmptyFile(Title: string, Extension: string): ISourceObjectFile;
    AddFile(
      Title: string,
      Extension: string,
      SourcePath: string
    ): ISourceObjectFile;
    Item(Index: number): ISourceObjectFile;
    Remove(Index: number): void;
  }
  declare interface ISQLDatabase {
    AdminUser: IImpersonation;
    BasicUser: IImpersonation;
    Engine: MFiles$MFDBEngine;
    Name: string;
    Server: string;
    Clone(): ISQLDatabase;
  }
  declare interface IState {
    +ID: number;
    Name: string;
    Selectable: boolean;
    SelectableFlagAffectedByPseudoUsers: boolean;
    GetAsLookup(): ILookup;
    GetAsTypedValue(): ITypedValue;
  }
  declare interface IStateAdmin {
    ActionAssignToUser: boolean;
    ActionAssignToUserDefinition: IActionCreateAssignment;
    ActionConvertToPDF: boolean;
    ActionConvertToPDFDefinition: IActionConvertToPDF;
    ActionCreateSeparateAssignment: boolean;
    ActionDefinitions: IActionDefinitions;
    ActionDelete: boolean;
    ActionMarkForArchiving: boolean;
    ActionRunVBScript: boolean;
    ActionRunVBScriptDefinition: string;
    ActionSendNotification: boolean;
    ActionSendNotificationDefinition: IActionSendNotification;
    ActionSetPermissions: boolean;
    ActionSetPermissionsDetailedDefinition: IActionSetPermissions;
    ActionSetProperties: boolean;
    ActionSetPropertiesDefinition: IActionSetProperties;
    CheckInOutPermissions: boolean;
    Description: string;
    ID: number;
    InOutPermissions: IAccessControlList;
    Name: string;
    Postconditions: IStateConditions;
    Preconditions: IStateConditions;
    SemanticAliases: ISemanticAliases;
    TransitionsRequireEditAccessToObject: boolean;
    Clone(): IStateAdmin;
  }
  declare interface IStateConditions {
    PropertyConditions: boolean;
    PropertyConditionsDefinition: ISearchConditions;
    VBScript: boolean;
    VBScriptDefinition: string;
    Clone(): IStateConditions;
  }
  declare interface IStates {
    +Count: number;
    Item(Index: number): IState;
  }
  declare interface IStatesAdmin {
    +Count: number;
    Add(Index: number, StateAdmin: IStateAdmin): void;
    Item(Index: number): IStateAdmin;
    Remove(Index: number): void;
  }
  declare interface IStateTransition {
    AccessControlList: IAccessControlList;
    Description: string;
    EvaluationOrderNumber: number;
    FromState: number;
    ID: number;
    Name: string;
    SemanticAliases: ISemanticAliases;
    SignatureSettings: ISignatureSettings;
    ToState: number;
    TriggerAllowedByVBScript: string;
    TriggerCriteria: ISearchConditions;
    TriggerInDays: number;
    TriggerMode: MFiles$MFAutoStateTransitionMode;
    Clone(): IStateTransition;
  }
  declare interface IStateTransitionForClient {
    FromState: number;
    +ID: number;
    Name: string;
    Selectable: boolean;
    SelectableFlagAffectedByPseudoUsers: boolean;
    ToState: number;
    Clone(): IStateTransitionForClient;
    GetAsLookup(): ILookup;
    GetAsTypedValue(): ITypedValue;
  }
  declare interface IStateTransitions {
    +Count: number;
    Add(Index: number, StateTransition: IStateTransition): void;
    Item(Index: number): IStateTransition;
    Remove(Index: number): void;
  }
  declare interface IStateTransitionsForClient {
    +Count: number;
    Add(
      Index: number,
      StateTransitionForClient: IStateTransitionForClient
    ): void;
    Clone(): IStateTransitionsForClient;
    Item(Index: number): IStateTransitionForClient;
    Item(Index: number, value: IStateTransitionForClient): void;
    Remove(Index: number): void;
  }
  declare interface IStringData {
    AsString: string;
    +StringDataType: MFiles$MFStringDataType;
    Clone(): IStringData;
  }
  declare interface IStrings {
    +Count: number;
    Add(Index: number, Item: string): void;
    Clone(): IStrings;
    CloneFrom(Strings: IStrings): void;
    Item(Index: number): string;
    Join(Separator: string): string;
    Remove(Index: number): void;
  }
  declare interface ITaskAssignmentClassInfo {
    AnyAssigneeCompletes: boolean;
    SignatureForCompletion: ISignatureSettings;
    Clone(): ITaskAssignmentClassInfo;
  }
  declare interface ITaskPane {
    +Available: boolean;
    +Events: ITaskPaneEvents;
    Visible: boolean;
    AddCustomCommandToGroup(
      customCommand: number,
      group: number,
      orderPriority: number
    ): void;
    CreateGroup(groupName: string, priority: number): number;
    DeleteGroup(groupID: number): void;
    RemoveCustomCommandFromGroup(customCommand: number, group: number): void;
    SetLogo(filename: string): void;
    SetTheme(theme: ITheme): void;
  }
  declare type ITaskPaneEvents = {
    OnHidePane?: () => void,
    OnShowPane?: () => void,
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare interface ITemporarySearchView {
    +BaseSearchConditions: ISearchConditions;
    SearchCriteria: ISearchCriteria;
    +View: IView;
  }
  declare interface ITheme {
    [key: string]: string | boolean | number;
    last: 0;
  }
  declare interface ITimestamp {
    Day: number;
    Fraction: number;
    Hour: number;
    Minute: number;
    Month: number;
    Second: number;
    Year: number;
    Clone(): ITimestamp;
    GetValue(): any;
    LocalTimeToUtc(): ITimestamp;
    SetValue(Value: any): void;
    UtcToLocalTime(): ITimestamp;
  }
  declare interface ITimeZoneInformation {
    +StandardName: string;
    LoadTimeZoneByName(TimeZoneName: string): void;
    LoadWithCurrentTimeZone(): void;
  }
  declare interface ITraditionalFolder {
    +ID: number;
    +Name: string;
  }
  declare interface ITraditionalFolderContents {
    +ID: number;
    +ObjectVersions: IObjectVersions;
    +TraditionalFolders: ITraditionalFolders;
  }
  declare interface ITraditionalFolders {
    +Count: number;
    Item(Index: number): ITraditionalFolder;
  }
  declare interface ITriggerType {
    +Daily: IDailyTrigger;
    +MonthlyDate: IMonthlyDateTrigger;
    +MonthlyDOW: IMonthlyDOWTrigger;
    Type: MFiles$MFTriggerType;
    +Weekly: IWeeklyTrigger;
    Clone(): ITriggerType;
    SetDailyTrigger(DailyTrigger: IDailyTrigger): void;
    SetMonthlyDate(MonthlyDateTrigger: IMonthlyDateTrigger): void;
    SetMonthlyDOW(MonthlyDOWTrigger: IMonthlyDOWTrigger): void;
    SetWeekly(WeeklyTrigger: IWeeklyTrigger): void;
  }
  declare interface ITypedValue {
    +DataType: MFiles$MFDataType;
    +DisplayValue: string;
    Value: any;
    Clone(): ITypedValue;
    CloneFrom(TypedValue: ITypedValue): void;
    CompareTo(TypedValue: ITypedValue): number;
    GetLookupID(): number;
    GetValueAsLocalizedText(): string;
    GetValueAsLookup(): ILookup;
    GetValueAsLookups(): ILookups;
    GetValueAsText(
      Localized: boolean,
      NULLAsEmptyString: boolean,
      EmptyLookupDisplayValuesAsHidden: boolean,
      LongDateFormat: boolean,
      NoSeconds: boolean,
      NumericValueAsKilobytes: boolean
    ): string;
    GetValueAsTextWithExpression(
      Expression: IExpression,
      Locale: number
    ): string;
    GetValueAsTimestamp(): ITimestamp;
    GetValueAsUnlocalizedText(): string;
    IsNULL(): boolean;
    IsUninitialized(): boolean;
    Serialize(): $ReadOnlyArray<number>;
    SetValue(DataType: MFiles$MFDataType, Value: any): void;
    SetValueToLookup(Lookup: ILookup): void;
    SetValueToMultiSelectLookup(MultiSelectLookup: ILookups): void;
    SetValueToNULL(DataType: MFiles$MFDataType): void;
    Unserialize(
      Bytes: $ReadOnlyArray<number>,
      ReadFromOldSerializingFormat: boolean
    ): void;
  }
  declare interface ITypedValues {
    +Count: number;
    Add(Index: number, TypedValue: ITypedValue): void;
    Item(Index: number): ITypedValue;
    Remove(Index: number): void;
  }
  declare interface IUserAccount {
    AccessControlList: IAccessControlList;
    Enabled: boolean;
    ID: number;
    InternalUser: boolean;
    LoginName: string;
    VaultLanguage: number;
    VaultRoles: MFiles$MFUserAccountVaultRole;
    AddVaultRoles(VaultRolesToAdd: MFiles$MFUserAccountVaultRole): void;
    Clone(): IUserAccount;
    CloneFrom(UserAccount: IUserAccount): void;
    RemoveVaultRoles(VaultRolesToRemove: MFiles$MFUserAccountVaultRole): void;
  }
  declare interface IUserAccounts {
    +Count: number;
    Item(Index: number): IUserAccount;
  }
  declare interface IUserGroup {
    ID: number;
    Members: IIDs;
    Name: string;
    +Predefined: boolean;
    AddMember(ID: number): void;
    Clone(): IUserGroup;
    CloneFrom(UserGroup: IUserGroup): void;
    RemoveMember(ID: number): void;
  }
  declare interface IUserGroupAdmin {
    AccessControlList: IAccessControlList;
    SemanticAliases: ISemanticAliases;
    UserGroup: IUserGroup;
    Clone(): IUserGroupAdmin;
    CloneFrom(UserGroupAdmin: IUserGroupAdmin): void;
  }
  declare interface IUserGroups {
    +Count: number;
    Item(Index: number): IUserGroup;
  }
  declare interface IUserGroupsAdmin {
    +Count: number;
    Item(Index: number): IUserGroupAdmin;
  }
  declare interface IUserOrUserGroupID {
    UserOrGroupID: number;
    UserOrGroupType: MFiles$MFUserOrUserGroupType;
    Clone(): IUserOrUserGroupID;
  }
  declare interface IUserOrUserGroupIDEx {
    +IndirectProperty: IIndirectPropertyID;
    +UserOrGroupID: number;
    +UserOrGroupType: MFiles$MFUserOrUserGroupType;
    +WorkflowState: number;
    Clone(): IUserOrUserGroupIDEx;
    SetIndirectPropertyPseudoUser(PseudoUserID: IIndirectPropertyID): void;
    SetUserAccount(UserAccount: number): void;
    SetUserGroup(UserGroup: number): void;
    SetWorkflowStatePseudoUser(WorkflowState: number): void;
  }
  declare interface IUserOrUserGroupIDExs {
    +Count: number;
    Add(Index: number, UserOrUserGroupIDEx: IUserOrUserGroupIDEx): void;
    Clone(): IUserOrUserGroupIDExs;
    GetUserOrUserGroupIDEx(
      UserOrGroupID: number,
      UserOrGroupType: MFiles$MFUserOrUserGroupType
    ): IUserOrUserGroupIDEx;
    GetUserOrUserGroupIDExIndex(
      UserOrGroupID: number,
      UserOrGroupType: MFiles$MFUserOrUserGroupType
    ): number;
    Item(Index: number): IUserOrUserGroupIDEx;
    Remove(Index: number): void;
  }
  declare interface IUserOrUserGroupIDs {
    +Count: number;
    Add(Index: number, UserOrUserGroupID: IUserOrUserGroupID): void;
    Clone(): IUserOrUserGroupIDs;
    GetUserOrUserGroupID(
      UserOrGroupID: number,
      UserOrGroupType: MFiles$MFUserOrUserGroupType
    ): IUserOrUserGroupID;
    GetUserOrUserGroupIDIndex(
      UserOrGroupID: number,
      UserOrGroupType: MFiles$MFUserOrUserGroupType
    ): number;
    Item(Index: number): IUserOrUserGroupID;
    Remove(Index: number): void;
  }
  declare interface IValidation {
    RegularExpression: string;
    VBScript: string;
    Clone(): IValidation;
  }
  declare interface IValueListItem {
    AutomaticPermissionsForObjects: IAutomaticPermissions;
    +Deleted: boolean;
    +DisplayID: string;
    +DisplayIDAvailable: boolean;
    HasOwner: boolean;
    HasParent: boolean;
    Icon: $ReadOnlyArray<number>;
    ID: number;
    +ItemGUID: string;
    Name: string;
    OwnerID: number;
    ParentID: number;
    ValueListID: MFiles$MFBuiltInValueList | number;
    Clone(): IValueListItem;
    CloneFrom(ValueListItem: IValueListItem): void;
    GetIconAsPNG(Width: number, Height: number): $ReadOnlyArray<number>;
  }
  declare interface IValueListItems {
    +Count: number;
    Item(Index: number): IValueListItem;
  }
  declare interface IValueListItemSearchResults {
    +Count: number;
    MoreResults: boolean;
    Add(Index: number, ValueListItem: IValueListItem): void;
    Clone(): IValueListItemSearchResults;
    Item(Index: number): IValueListItem;
    Remove(Index: number): void;
  }
  declare interface IValueListItemSearchResultsWithPermissions {
    +Permissions: IAccessControlLists;
    +ValueListItemSearchResults: IValueListItemSearchResults;
  }
  declare interface IValueListItemsWithPermissions {
    +Permissions: IAccessControlLists;
    +ValueListItems: IValueListItems;
  }
  declare interface IVault {
    +Async: IVaultAsync;
    +ClassGroupOperations: IVaultClassGroupOperations;
    +ClassOperations: IVaultClassOperations;
    +ClientOperations: IVaultClientOperations;
    +CurrentLoggedInUserID: number;
    +CustomApplicationManagementOperations: IVaultCustomApplicationManagementOperations;
    +DataSetOperations: IVaultDataSetOperations;
    +ElectronicSignatureOperations: IVaultElectronicSignatureOperations;
    +EventLogOperations: IVaultEventLogOperations;
    +ExtensionMethodOperations: IVaultExtensionMethodOperations;
    +ExternalObjectOperations: IVaultExternalObjectOperations;
    +LoggedIn: boolean;
    +LoginAccountOperations: IVaultLoginAccountOperations;
    +LoginSessionID: string;
    +ManagementOperations: IVaultManagementOperations;
    +Name: string;
    +NamedACLOperations: IVaultNamedACLOperations;
    +NamedValueStorageOperations: IVaultNamedValueStorageOperations;
    +NotificationOperations: IVaultNotificationOperations;
    +ObjectFileOperations: IVaultObjectFileOperations;
    +ObjectOperations: IVaultObjectOperations;
    +ObjectPropertyOperations: IVaultObjectPropertyOperations;
    +ObjectSearchOperations: IVaultObjectSearchOperations;
    +ObjectTypeOperations: IVaultObjectTypeOperations;
    +PropertyDefOperations: IVaultPropertyDefOperations;
    +ReadOnlyAccess: boolean;
    +ScheduledJobManagementOperations: IVaultScheduledJobManagementOperations;
    +ServerDataPushOperations: IVaultServerDataPushOperations;
    +SessionInfo: ISessionInfo;
    +SharedLinkOperations: IVaultSharedLinkOperations;
    +TraditionalFolderOperations: IVaultTraditionalFolderOperations;
    +UserGroupOperations: IVaultUserGroupOperations;
    +UserOperations: IVaultUserOperations;
    +UserSettingOperations: IVaultUserSettingOperations;
    +ValueListItemOperations: IVaultValueListItemOperations;
    +ValueListOperations: IVaultValueListOperations;
    +VaultLanguages: ILanguages;
    +ViewOperations: IVaultViewOperations;
    +WorkflowOperations: IVaultWorkflowOperations;
    ChangePassword(OldPassword: string, NewPassword: string): void;
    GetAllTranslations(): string;
    GetGUID(): string;
    GetMetadataStructureItemIDByAlias(
      MetadataStructureItemType: MFiles$MFMetadataStructureItem,
      Alias: string,
      Unused: boolean
    ): number;
    GetMetadataStructureVersionID(): number;
    GetMFilesURLForVaultRoot(): string;
    GetServerLicenseStatus(): ILicenseStatus;
    GetServerVersionOfVault(): IMFilesVersion;
    LogOutSilent(): void;
    LogOutWithDialogs(ParentWindow: number): boolean;
    TestConnectionToServer(): void;
    TestConnectionToVault(): void;
    TestConnectionToVaultWithTimeout(TimeoutInMilliseconds: number): void;
  }
  declare interface IVaultAsync {
    +ClassGroupOperations: IVaultClassGroupOperationsAsync;
    +ClassOperations: IVaultClassOperationsAsync;
    +ClientOperations: IVaultClientOperationsAsync;
    +CustomApplicationManagementOperations: IVaultCustomApplicationManagementOperationsAsync;
    +DataSetOperations: IVaultDataSetOperationsAsync;
    +ElectronicSignatureOperations: IVaultElectronicSignatureOperationsAsync;
    +EventLogOperations: IVaultEventLogOperationsAsync;
    +ExtensionMethodOperations: IVaultExtensionMethodOperationsAsync;
    +ExternalObjectOperations: IVaultExternalObjectOperationsAsync;
    +LoginAccountOperations: IVaultLoginAccountOperationsAsync;
    +ManagementOperations: IVaultManagementOperationsAsync;
    +NamedACLOperations: IVaultNamedACLOperationsAsync;
    +NamedValueStorageOperations: IVaultNamedValueStorageOperationsAsync;
    +NotificationOperations: IVaultNotificationOperationsAsync;
    +ObjectFileOperations: IVaultObjectFileOperationsAsync;
    +ObjectOperations: IVaultObjectOperationsAsync;
    +ObjectPropertyOperations: IVaultObjectPropertyOperationsAsync;
    +ObjectSearchOperations: IVaultObjectSearchOperationsAsync;
    +ObjectTypeOperations: IVaultObjectTypeOperationsAsync;
    +PropertyDefOperations: IVaultPropertyDefOperationsAsync;
    +ScheduledJobManagementOperations: IVaultScheduledJobManagementOperationsAsync;
    +ServerDataPushOperations: IVaultServerDataPushOperationsAsync;
    +SharedLinkOperations: IVaultSharedLinkOperationsAsync;
    +TraditionalFolderOperations: IVaultTraditionalFolderOperationsAsync;
    +UserGroupOperations: IVaultUserGroupOperationsAsync;
    +UserOperations: IVaultUserOperationsAsync;
    +UserSettingOperations: IVaultUserSettingOperationsAsync;
    +ValueListItemOperations: IVaultValueListItemOperationsAsync;
    +ValueListOperations: IVaultValueListOperationsAsync;
    +ViewOperations: IVaultViewOperationsAsync;
    +WorkflowOperations: IVaultWorkflowOperationsAsync;
  }
  declare interface IVaultAutomaticMetadataOperations {
    GetAutomaticMetadataForObject(ObjVer: IObjVer): IAutomaticMetadataResult;
    GetAutomaticMetadataForTemporaryFile(
      UploadSessionID: number
    ): IAutomaticMetadataResult;
    GetAutomaticMetadataForTemporaryFiles(IIDs: IIDs): IAutomaticMetadataResult;
  }
  declare interface IVaultClassGroupOperations {
    AddClassGroup(ClassGroup: IClassGroup): IClassGroup;
    GetClassGroup(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      ClassGroupID: number
    ): IClassGroup;
    GetClassGroupIDByGUID(ClassGroupGUID: string): number;
    GetClassGroups(
      ObjectType: MFiles$MFBuiltInObjectType | number
    ): IClassGroups;
    RemoveClassGroup(ClassGroupID: number): void;
    UpdateClassGroup(ClassGroup: IClassGroup): void;
  }
  declare interface IVaultClassGroupOperationsAsync {
    AddClassGroup(
      ClassGroup: IClassGroup,
      successCallback?: (result: IClassGroup) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetClassGroup(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      ClassGroupID: number,
      successCallback?: (result: IClassGroup) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetClassGroupIDByGUID(
      ClassGroupGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetClassGroups(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      successCallback?: (result: IClassGroups) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveClassGroup(
      ClassGroupID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateClassGroup(
      ClassGroup: IClassGroup,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultClassOperations {
    AddObjectClassAdmin(ObjectClassAdmin: IObjectClassAdmin): IObjectClassAdmin;
    GetAllObjectClasses(): IObjectClasses;
    GetAllObjectClassesAdmin(): IObjectClassesAdmin;
    GetObjectClass(
      ObjectClass:
        | MFiles$MFBuiltInDocumentClass
        | MFiles$MFBuiltInObjectClass
        | number
    ): IObjectClass;
    GetObjectClassAdmin(
      Class:
        | MFiles$MFBuiltInDocumentClass
        | MFiles$MFBuiltInObjectClass
        | number
    ): IObjectClassAdmin;
    GetObjectClasses(
      ObjectType: MFiles$MFBuiltInObjectType | number
    ): IObjectClasses;
    GetObjectClassesAdmin(
      ObjectType: MFiles$MFBuiltInObjectType | number
    ): IObjectClassesAdmin;
    GetObjectClassIDByAlias(Alias: string): number;
    GetObjectClassIDByGUID(ObjectClassGUID: string): number;
    RemoveObjectClassAdmin(ObjectClassID: number): void;
    UpdateObjectClassAdmin(ObjectClass: IObjectClassAdmin): void;
    UpdateObjectNames(ObjectClassID: number): void;
  }
  declare interface IVaultClassOperationsAsync {
    AddObjectClassAdmin(
      ObjectClassAdmin: IObjectClassAdmin,
      successCallback?: (result: IObjectClassAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetAllObjectClasses(
      successCallback?: (result: IObjectClasses) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetAllObjectClassesAdmin(
      successCallback?: (result: IObjectClassesAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectClass(
      ObjectClass:
        | MFiles$MFBuiltInDocumentClass
        | MFiles$MFBuiltInObjectClass
        | number,
      successCallback?: (result: IObjectClass) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectClassAdmin(
      Class:
        | MFiles$MFBuiltInDocumentClass
        | MFiles$MFBuiltInObjectClass
        | number,
      successCallback?: (result: IObjectClassAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectClasses(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      successCallback?: (result: IObjectClasses) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectClassesAdmin(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      successCallback?: (result: IObjectClassesAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectClassIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectClassIDByGUID(
      ObjectClassGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveObjectClassAdmin(
      ObjectClassID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateObjectClassAdmin(
      ObjectClass: IObjectClassAdmin,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateObjectNames(
      ObjectClassID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultClientOperations {
    DisableCheckInReminderForCallingProcess(): void;
    EnableCheckInReminderForCallingProcess(): void;
    IsOffline(): boolean;
    IsOnline(): boolean;
    SetVaultToOffline(
      ParentWindow: number
    ): MFiles$MFOfflineTransitionResultFlags;
    SetVaultToOnline(
      ParentWindow: number
    ): MFiles$MFOnlineTransitionResultFlags;
  }
  declare interface IVaultClientOperationsAsync {
    DisableCheckInReminderForCallingProcess(
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    EnableCheckInReminderForCallingProcess(
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsOffline(
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsOnline(
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetVaultToOffline(
      ParentWindow: number,
      successCallback?: (result: MFiles$MFOfflineTransitionResultFlags) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetVaultToOnline(
      ParentWindow: number,
      successCallback?: (result: MFiles$MFOnlineTransitionResultFlags) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultConnection {
    AuthType: MFiles$MFAuthType;
    AutoLogin: boolean;
    EncryptedConnection: boolean;
    Endpoint: string;
    Icon: $ReadOnlyArray<number>;
    Name: string;
    NetworkAddress: string;
    ProtocolSequence: string;
    ServerVaultGUID: string;
    ServerVaultName: string;
    UserSpecific: boolean;
    BindToVault(
      ParentWindow: number,
      CanLogIn: boolean,
      ReturnNULLIfCancelledByUser: boolean
    ): IVault;
    Clone(): IVaultConnection;
    GetGUID(): string;
    IsLoggedIn(): boolean;
    LogInAs(
      ParentWindow: number,
      DefaultAuthType: MFiles$MFAuthType,
      ReturnNULLIfCancelledByUser: boolean
    ): IVault;
    LogInAsUser(
      AuthType: MFiles$MFAuthType,
      UserName: string,
      Password: string,
      Domain: string | null,
      SPN: string | null
    ): IVault;
    TestConnectionToVault(
      ParentWindow: number
    ): MFiles$MFVaultConnectionTestResult;
  }
  declare interface IVaultConnections {
    +Count: number;
    Add(Index: number, VaultConnection: IVaultConnection): void;
    GetVaultConnectionByName(VaultConnectionName: string): IVaultConnection;
    GetVaultConnectionIndexByName(VaultConnectionName: string): number;
    Item(Index: number): IVaultConnection;
    Remove(Index: number): void;
  }
  declare interface IVaultCore {
    +Events: IVaultCoreEvents;
    +ServerVault: IVault;
  }
  declare type IVaultCoreEvents = {
    OnNewVaultEntry?: (vaultEntry: IVaultEntry) => void | IVaultEntryEvents,
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare interface IVaultCustomApplicationManagementOperations {
    DownloadCustomApplicationBlock(
      DownloadID: number,
      BlockSize: number,
      Offset: number
    ): $ReadOnlyArray<number>;
    DownloadCustomApplicationBlock_32bit(
      DownloadID: number,
      BlockSize: number,
      Offset: number
    ): $ReadOnlyArray<number>;
    DownloadCustomApplicationBlockBegin(
      ApplicationID: string
    ): IFileDownloadSession;
    DownloadCustomApplicationBlockBegin_32bit(
      ApplicationID: string
    ): IFileDownloadSession;
    EnableCustomApplication(ApplicationID: string, Enabled: boolean): void;
    GetCustomApplication(ApplicationID: string): ICustomApplication;
    GetCustomApplications(): ICustomApplications;
    GetCustomApplicationsEx(
      Platform: MFiles$MFExtApplicationPlatform
    ): ICustomApplications;
    InstallCustomApplication(File: string): void;
    UninstallCustomApplication(ApplicationID: string): void;
  }
  declare interface IVaultCustomApplicationManagementOperationsAsync {
    DownloadCustomApplicationBlock(
      DownloadID: number,
      BlockSize: number,
      Offset: number,
      successCallback?: (result: $ReadOnlyArray<number>) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadCustomApplicationBlock_32bit(
      DownloadID: number,
      BlockSize: number,
      Offset: number,
      successCallback?: (result: $ReadOnlyArray<number>) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadCustomApplicationBlockBegin(
      ApplicationID: string,
      successCallback?: (result: IFileDownloadSession) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadCustomApplicationBlockBegin_32bit(
      ApplicationID: string,
      successCallback?: (result: IFileDownloadSession) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    EnableCustomApplication(
      ApplicationID: string,
      Enabled: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetCustomApplication(
      ApplicationID: string,
      successCallback?: (result: ICustomApplication) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetCustomApplications(
      successCallback?: (result: ICustomApplications) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetCustomApplicationsEx(
      Platform: MFiles$MFExtApplicationPlatform,
      successCallback?: (result: ICustomApplications) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    InstallCustomApplication(
      File: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UninstallCustomApplication(
      ApplicationID: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultDataSetOperations {
    GetDataSetExportingStatus(ID: number): IDataSetExportingStatus;
    GetDataSets(): IDataSets;
    GetReportAccessCredentials(): IReportAccessCredentials;
    StartDataSetExport(ID: number): void;
  }
  declare interface IVaultDataSetOperationsAsync {
    GetDataSetExportingStatus(
      ID: number,
      successCallback?: (result: IDataSetExportingStatus) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetDataSets(
      successCallback?: (result: IDataSets) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetReportAccessCredentials(
      successCallback?: (result: IReportAccessCredentials) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    StartDataSetExport(
      ID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultElectronicSignatureOperations {
    AddEmptySignature(
      ObjVer: IObjVer,
      SignatureIdentifier: string
    ): IObjectVersionAndProperties;
    AddEmptySignatures(ObjVer: IObjVer): IObjectVersionAndProperties;
    DisconnectSignature(
      ObjVer: IObjVer,
      SignatureIdentifier: string
    ): IObjectVersionAndProperties;
    DisconnectSignatureEx(
      ObjVer: IObjVer,
      SignatureIdentifier: string,
      InvalidateDisconnectedSignatures: boolean
    ): IObjectVersionAndProperties;
    DisconnectSignatures(ObjVer: IObjVer): IObjectVersionAndProperties;
    DisconnectSignaturesEx(
      ObjVer: IObjVer,
      InvalidateDisconnectedSignatures: boolean
    ): IObjectVersionAndProperties;
  }
  declare interface IVaultElectronicSignatureOperationsAsync {
    AddEmptySignature(
      ObjVer: IObjVer,
      SignatureIdentifier: string,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    AddEmptySignatures(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DisconnectSignature(
      ObjVer: IObjVer,
      SignatureIdentifier: string,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DisconnectSignatureEx(
      ObjVer: IObjVer,
      SignatureIdentifier: string,
      InvalidateDisconnectedSignatures: boolean,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DisconnectSignatures(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DisconnectSignaturesEx(
      ObjVer: IObjVer,
      InvalidateDisconnectedSignatures: boolean,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultEntry {
    +Events: IVaultEntryEvents;
    +Vault: IVault;
    +VaultCore: IVaultCore;
    +VaultUI: IVaultUI;
    NotifyVaultEntry(ID: string, data1: any, data2: any): any;
  }
  declare type IVaultEntryEvents = {
    OnAddObjectFile?: (
      objVer: IObjVer,
      sourceObjectFile: ISourceObjectFile
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (
            objectVersion: IObjectVersion,
            objectFile: IObjectFile
          ) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnAddObjectsToFavorites?: (
      objIDs: IObjIDs
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnAddObjectToFavorites?: (
      objID: IObjID
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnChangeVaultLanguage?: (
      languageID: number
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnCheckInObject?: (
      objVer: IObjVer,
      propertyValues: IPropertyValues
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnCheckInObjects?: (
      objVers: IObjVers,
      propertyValues: IPropertyValues
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersions: IObjectVersions) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnCheckOutObject?: (
      objID: IObjID
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnCheckOutObjects?: (
      objIDs: IObjIDs
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersions: IObjectVersions) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnCreateObject?: (
      objectType: number,
      propertyValues: IPropertyValues,
      sourceObjectFiles: ISourceObjectFiles,
      accessControlList: IAccessControlList,
      checkInRequested: boolean,
      singleFileRequested: boolean
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnDestroyObject?: (
      objID: IObjID
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnDestroyObjects?: (
      objIDs: IObjIDs
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnDestroyObjectVersion?: (
      objVer: IObjVer
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnDestroyObjectVersions?: (
      objVers: IObjVers
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnLoggedIn?: () => void,
    OnLogOut?: () =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnModifyObjectVersionLabels?: (
      objVer: IObjVer,
      clearFromOtherVersions: boolean,
      append: boolean,
      labelIDs: IIDs,
      singleLabelRequired: boolean
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnNotification?: (id: string, data1: any, data2: any) => any,
    OnObjectAddedToFavorites?: (objID: IObjID) => void,
    OnObjectCheckedIn?: (objectVersion: IObjectVersion) => void,
    OnObjectCheckedOut?: (objectVersion: IObjectVersion) => void,
    OnObjectCheckoutsUndone?: (objectVersions: IObjectVersions) => void,
    OnObjectCheckoutUndone?: (objectVersion: IObjectVersion) => void,
    OnObjectCreated?: (objectVersion: IObjectVersion) => void,
    OnObjectDestroyed?: (objID: IObjID) => void,
    OnObjectFileAdded?: (
      objectVersion: IObjectVersion,
      objectFile: IObjectFile
    ) => void,
    OnObjectFileRemoved?: (
      objectVersion: IObjectVersion,
      fileVer: IFileVer
    ) => void,
    OnObjectFileRenamed?: (
      objectVersion: IObjectVersion,
      objectFile: IObjectFile
    ) => void,
    OnObjectLevelPropertySet?: (
      objID: IObjID,
      propertyValue: IPropertyValue
    ) => void,
    OnObjectOfflineAvailabilityRemoved?: (objID: IObjID) => void,
    OnObjectOfflineAvailabilitySet?: (objID: IObjID) => void,
    OnObjectRemoved?: (objectVersion: IObjectVersion) => void,
    OnObjectRemovedFromFavorites?: (objID: IObjID) => void,
    OnObjectsAddedToFavorites?: (objIDs: IObjIDs) => void,
    OnObjectsCheckedIn?: (objectVersions: IObjectVersions) => void,
    OnObjectsCheckedOut?: (objectVersions: IObjectVersions) => void,
    OnObjectsDestroyed?: (objIDs: IObjIDs) => void,
    OnObjectsRemoved?: (objectVersions: IObjectVersions) => void,
    OnObjectsRemovedFromFavorites?: (objIDs: IObjIDs) => void,
    OnObjectUndeleted?: (objectVersion: IObjectVersion) => void,
    OnObjectVersionDestroyed?: (objVer: IObjVer) => void,
    OnObjectVersionLabelsModified?: (
      objVer: IObjVer,
      clearFromOtherVersions: boolean,
      append: boolean,
      labelIDs: IIDs
    ) => void,
    OnObjectVersionPermissionsSet?: (objectVersion: IObjectVersion) => void,
    OnObjectVersionRolledBack?: (objectVersion: IObjectVersion) => void,
    OnObjectVersionsDestroyed?: (objVers: IObjVers) => void,
    OnPropertiesOfObjectVersionSet?: (objectVersion: IObjectVersion) => void,
    OnPropertiesOfObjectVersionsSet?: (objectVersions: IObjectVersions) => void,
    OnRemoveObject?: (
      objID: IObjID
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnRemoveObjectFile?: (
      objVer: IObjVer,
      fileVer: IFileVer
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnRemoveObjectFromFavorites?: (
      objID: IObjID
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnRemoveObjectOfflineAvailability?: (
      objID: IObjID
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnRemoveObjects?: (
      objIDs: IObjIDs
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersions: IObjectVersions) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnRemoveObjectsFromFavorites?: (
      objIDs: IObjIDs
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnRenameObjectFile?: (
      objVer: IObjVer,
      fileVer: IFileVer,
      newName: null | ITypedValue,
      newExtension: null | ITypedValue
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (
            objectVersion: IObjectVersion,
            objectFile: IObjectFile
          ) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnRollBackObjectVersion?: (
      objVer: IObjVer
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnSetObjectLevelProperty?: (
      objID: IObjID,
      propertyValue: IPropertyValue
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnSetObjectOfflineAvailability?: (
      objID: IObjID
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnSetObjectVersionPermissions?: (
      objVer: IObjVer,
      changeAllVersions: boolean,
      accessControlList: IAccessControlList
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnSetPropertiesOfObjectVersion?: (
      setPropertiesParams: ISetPropertiesParams,
      singlePropertyUpdate: boolean,
      singlePropertyRemove: boolean
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnSetPropertiesOfObjectVersions?: (
      setPropertiesParamsOfMultipleObjects: ISetPropertiesParamsOfMultipleObjects,
      singlePropertyUpdate: boolean,
      singlePropertyRemove: boolean
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersions: IObjectVersions) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnStarted?: () => void,
    OnStop?: () => void,
    OnSwitchedToOfflineMode?: () => void,
    OnSwitchedToOnlineMode?: () => void,
    OnSwitchToOfflineMode?: () =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnSwitchToOnlineMode?: () =>
      | null
      | boolean
      | {
          OnSuccess?: () => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnUndeleteObject?: (
      objID: IObjID
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnUndeleteObjects?: (
      objIDs: IObjIDs
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersions: IObjectVersions) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnUndoObjectCheckout?: (
      objVer: IObjVer
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersion: IObjectVersion) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnUndoObjectCheckouts?: (
      objVers: IObjVers
    ) =>
      | null
      | boolean
      | {
          OnSuccess?: (objectVersions: IObjectVersions) => void,
          OnError?: (
            errorCode: number,
            errorMessage: string,
            errorStack: string
          ) => void,
          Finally?: () => void
        },
    OnVaultLanguageChanged?: (languageID: number) => void
  } & IEvents;

  declare interface IVaultEventLogOperations {
    Clear(): void;
    ClearRange(FirstEventID: number, LastEventID: number): void;
    ClearRange_32bit(FirstEventID: string, LastEventID: string): void;
    ExportAll(): string;
    ExportRange(
      FirstEventID: number,
      LastEventID: number,
      DeleteEventsAfterExporting: boolean
    ): string;
    ExportRange_32bit(
      FirstEventID: string,
      LastEventID: string,
      DeleteEventsAfterExporting: boolean
    ): string;
    GetIDRange(): IIDRange;
    IsLoggingEnabled(): boolean;
    SetLoggingEnabled(Enabled: boolean): void;
  }
  declare interface IVaultEventLogOperationsAsync {
    Clear(
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ClearRange(
      FirstEventID: number,
      LastEventID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ClearRange_32bit(
      FirstEventID: string,
      LastEventID: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ExportAll(
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ExportRange(
      FirstEventID: number,
      LastEventID: number,
      DeleteEventsAfterExporting: boolean,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ExportRange_32bit(
      FirstEventID: string,
      LastEventID: string,
      DeleteEventsAfterExporting: boolean,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetIDRange(
      successCallback?: (result: IIDRange) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsLoggingEnabled(
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetLoggingEnabled(
      Enabled: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultExtensionMethodOperations {
    DoesActiveVaultExtensionMethodExist(MethodIdentifier: string): boolean;
    ExecuteVaultExtensionMethod(
      MethodIdentifier: string,
      Input: string
    ): string;
  }
  declare interface IVaultExtensionMethodOperationsAsync {
    DoesActiveVaultExtensionMethodExist(
      MethodIdentifier: string,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ExecuteVaultExtensionMethod(
      MethodIdentifier: string,
      Input: string,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultExternalObjectOperations {
    PromoteObject(
      ObjVer: IObjVer,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      pACLProvidedCBN: IAccessControlList
    ): IObjectVersionAndProperties;
  }
  declare interface IVaultExternalObjectOperationsAsync {
    PromoteObject(
      ObjVer: IObjVer,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      pACLProvidedCBN: IAccessControlList,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultLoginAccountOperations {
    AddLoginAccount(LoginAccount: ILoginAccount, Password: string): void;
    ForceLogout(AccountNames: IStrings): void;
    GetLoginAccount(AccountName: string): ILoginAccount;
    GetLoginAccounts(): ILoginAccounts;
    GetLoginAccountsWithSessions(): ILoginAccounts;
    GetPersonalInformationFromDomain(
      AccountName: string
    ): ILoginAccountPersonalInformation;
    ModifyLoginAccount(LoginAccount: ILoginAccount): void;
    RemoveLoginAccount(AccountName: string): void;
    UpdateLoginPassword(AccountName: string, NewPassword: string): void;
  }
  declare interface IVaultLoginAccountOperationsAsync {
    AddLoginAccount(
      LoginAccount: ILoginAccount,
      Password: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ForceLogout(
      AccountNames: IStrings,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLoginAccount(
      AccountName: string,
      successCallback?: (result: ILoginAccount) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLoginAccounts(
      successCallback?: (result: ILoginAccounts) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLoginAccountsWithSessions(
      successCallback?: (result: ILoginAccounts) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPersonalInformationFromDomain(
      AccountName: string,
      successCallback?: (result: ILoginAccountPersonalInformation) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ModifyLoginAccount(
      LoginAccount: ILoginAccount,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveLoginAccount(
      AccountName: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateLoginPassword(
      AccountName: string,
      NewPassword: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultManagementOperations {
    ArchiveOldVersions(ArchiveOldVersionsJob: IArchiveOldVersionsJob): void;
    ExportContent(ExportContentJob: IExportContentJob): void;
    GetEventHandlers(): IEventHandlers;
    GetVaultProperties(): IVaultProperties;
    ImportContent(ImportContentJob: IImportContentJob): void;
    ImportContentAsync(ImportContentJob: IImportContentJob): number;
    IsAsyncJobRunning(JobID: number): boolean;
    PreviewImportContent(
      ImportContentJob: IImportContentJob,
      SummaryFile: string
    ): void;
    RebuildFullTextSearchIndex(Metadata: boolean, FileContents: boolean): void;
    SetEventHandlers(EventHandlers: IEventHandlers): void;
    UpdateVaultProperties(
      VaultProperties: IVaultProperties,
      RegistrationDataOnly: boolean
    ): void;
    VerifyVault(VerifyVaultJob: IVerifyVaultJob): IVerifyVaultJobOutput;
    WaitAsyncJob(JobID: number): void;
  }
  declare interface IVaultManagementOperationsAsync {
    ArchiveOldVersions(
      ArchiveOldVersionsJob: IArchiveOldVersionsJob,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ExportContent(
      ExportContentJob: IExportContentJob,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetEventHandlers(
      successCallback?: (result: IEventHandlers) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetVaultProperties(
      successCallback?: (result: IVaultProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ImportContent(
      ImportContentJob: IImportContentJob,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ImportContentAsync(
      ImportContentJob: IImportContentJob,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsAsyncJobRunning(
      JobID: number,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    PreviewImportContent(
      ImportContentJob: IImportContentJob,
      SummaryFile: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RebuildFullTextSearchIndex(
      Metadata: boolean,
      FileContents: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetEventHandlers(
      EventHandlers: IEventHandlers,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateVaultProperties(
      VaultProperties: IVaultProperties,
      RegistrationDataOnly: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    VerifyVault(
      VerifyVaultJob: IVerifyVaultJob,
      successCallback?: (result: IVerifyVaultJobOutput) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    WaitAsyncJob(
      JobID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultNamedACLOperations {
    AddNamedACLAdmin(NamedACLAdmin: INamedACLAdmin): INamedACLAdmin;
    GetMatchingNamedACLForAccessControlList(
      AccessControlList: IAccessControlList,
      ExplicitLinkOnly: boolean,
      ActiveAccessControlComponentsOnly: boolean,
      RefreshFromServer: boolean
    ): INamedACL;
    GetMatchingNamedACLForAccessControlListComponent(
      AccessControlListComponent: IAccessControlListComponent,
      ExplicitLinkOnly: boolean,
      RefreshFromServer: boolean
    ): INamedACL;
    GetNamedACL(NamedACLID: number): INamedACL;
    GetNamedACLAdmin(NamedACLID: number): INamedACLAdmin;
    GetNamedACLIDByAlias(Alias: string): number;
    GetNamedACLIDByGUID(NamedACLGUID: string): number;
    GetNamedACLs(): INamedACLs;
    GetNamedACLsByTypeAdmin(Type: MFiles$MFNamedACLType): INamedACLsAdmin;
    GetNamedACLsWithRefresh(RefreshFromServer: boolean): INamedACLs;
    GetNamedACLWithRefresh(
      NamedACLID: number,
      RefreshFromServer: boolean
    ): INamedACL;
    IsNamedACLUsedInAutomaticPermissionsAdmin(NamedACLID: number): boolean;
    RemoveNamedACLWithPropagationAdmin(
      NamedACLID: number,
      AllowPropagation: boolean
    ): void;
    UpdateNamedACLAdmin(NamedACLAdmin: INamedACLAdmin): void;
    UpdateNamedACLWithPropagationAdmin(
      NamedACLAdmin: INamedACLAdmin,
      MaintainLinks: boolean,
      AllowPropagation: boolean
    ): void;
  }
  declare interface IVaultNamedACLOperationsAsync {
    AddNamedACLAdmin(
      NamedACLAdmin: INamedACLAdmin,
      successCallback?: (result: INamedACLAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetMatchingNamedACLForAccessControlList(
      AccessControlList: IAccessControlList,
      ExplicitLinkOnly: boolean,
      ActiveAccessControlComponentsOnly: boolean,
      RefreshFromServer: boolean,
      successCallback?: (result: INamedACL) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetMatchingNamedACLForAccessControlListComponent(
      AccessControlListComponent: IAccessControlListComponent,
      ExplicitLinkOnly: boolean,
      RefreshFromServer: boolean,
      successCallback?: (result: INamedACL) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetNamedACL(
      NamedACLID: number,
      successCallback?: (result: INamedACL) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetNamedACLAdmin(
      NamedACLID: number,
      successCallback?: (result: INamedACLAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetNamedACLIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetNamedACLIDByGUID(
      NamedACLGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetNamedACLs(
      successCallback?: (result: INamedACLs) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetNamedACLsByTypeAdmin(
      Type: MFiles$MFNamedACLType,
      successCallback?: (result: INamedACLsAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetNamedACLsWithRefresh(
      RefreshFromServer: boolean,
      successCallback?: (result: INamedACLs) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetNamedACLWithRefresh(
      NamedACLID: number,
      RefreshFromServer: boolean,
      successCallback?: (result: INamedACL) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsNamedACLUsedInAutomaticPermissionsAdmin(
      NamedACLID: number,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveNamedACLWithPropagationAdmin(
      NamedACLID: number,
      AllowPropagation: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateNamedACLAdmin(
      NamedACLAdmin: INamedACLAdmin,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateNamedACLWithPropagationAdmin(
      NamedACLAdmin: INamedACLAdmin,
      MaintainLinks: boolean,
      AllowPropagation: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultNamedValueStorageOperations {
    GetNamedValues(
      NamedValueType: MFiles$MFNamedValueType,
      Namespace: string
    ): INamedValues;
    RemoveNamedValues(
      NamedValueType: MFiles$MFNamedValueType,
      Namespace: string,
      NamedValueNames: IStrings
    ): void;
    SetNamedValues(
      NamedValueType: MFiles$MFNamedValueType,
      Namespace: string,
      NamedValues: INamedValues
    ): void;
  }
  declare interface IVaultNamedValueStorageOperationsAsync {
    GetNamedValues(
      NamedValueType: MFiles$MFNamedValueType,
      Namespace: string,
      successCallback?: (result: INamedValues) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveNamedValues(
      NamedValueType: MFiles$MFNamedValueType,
      Namespace: string,
      NamedValueNames: IStrings,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetNamedValues(
      NamedValueType: MFiles$MFNamedValueType,
      Namespace: string,
      NamedValues: INamedValues,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultNotificationOperations {
    SendCustomNotification(
      UserOrUserGroupIDs: IUserOrUserGroupIDs,
      IncludeSubstituteUsers: boolean,
      ExternalRecipients: IStrings,
      SendWithServerEmailIdentity: boolean,
      Subject: string,
      Body: string
    ): void;
  }
  declare interface IVaultNotificationOperationsAsync {
    SendCustomNotification(
      UserOrUserGroupIDs: IUserOrUserGroupIDs,
      IncludeSubstituteUsers: boolean,
      ExternalRecipients: IStrings,
      SendWithServerEmailIdentity: boolean,
      Subject: string,
      Body: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultObjectFileOperations {
    AddEmptyFile(ObjVer: IObjVer, Title: string, Extension: string): IFileVer;
    AddFile(
      ObjVer: IObjVer,
      Title: string,
      Extension: string,
      SourcePath: string
    ): IFileVer;
    CloseUploadSession(UploadID: number): void;
    ConvertToPDF(
      ObjVer: IObjVer,
      FileID: number,
      StoreAsSeparateFile: boolean,
      OverwriteExistingFile: boolean,
      PDFA1b: boolean,
      FailOnUnsupportedSourceFiles: boolean
    ): IObjectVersion;
    DownloadFile(File: number, FileVersion: number, FilePath: string): void;
    DownloadFileAsDataURI(
      ObjVer: IObjVer,
      File: number,
      FileVersion: number
    ): string;
    DownloadFileEx(
      File: number,
      FileVersion: number,
      FilePath: string,
      FileFormat: MFiles$MFFileFormat
    ): void;
    DownloadFileInBlocks_Begin(
      File: number,
      FileVersion: number
    ): IFileDownloadSession;
    DownloadFileInBlocks_Begin_32bit(
      File: number,
      FileVersion: number
    ): IFileDownloadSession;
    DownloadFileInBlocks_BeginEx(
      File: number,
      FileVersion: number,
      FileFormat: MFiles$MFFileFormat
    ): IFileDownloadSession;
    DownloadFileInBlocks_BeginEx_32bit(
      File: number,
      FileVersion: number,
      FileFormat: MFiles$MFFileFormat
    ): IFileDownloadSession;
    DownloadFileInBlocks_ReadBlock(
      DownloadID: number,
      BlockSize: number,
      Offset: number
    ): $ReadOnlyArray<number>;
    DownloadFileInBlocks_ReadBlock_32bit(
      DownloadID: number,
      BlockSize: number,
      Offset: number
    ): $ReadOnlyArray<number>;
    GetFiles(ObjVer: IObjVer): IObjectFiles;
    GetFilesForModificationInEventHandler(ObjVer: IObjVer): IObjectFiles;
    GetFileSize(FileVer: IFileVer): number;
    GetFileSize_32bit(FileVer: IFileVer): number;
    GetLatestFileVersion(FileID: number, AllowCheckedOut: boolean): IFileVer;
    GetObjIDOfFile(FileID: number): IObjID;
    GetPathInDefaultView(
      ObjID: IObjID,
      ObjectVersion: number,
      FileID: number,
      FileVersion: number,
      LatestSpecificBehavior: MFiles$MFLatestSpecificBehavior,
      UpdateFromServer: boolean
    ): string;
    GetPathInDefaultViewEx(
      ObjID: IObjID,
      ObjectVersion: number,
      FileID: number,
      FileVersion: number,
      LatestSpecificBehavior: MFiles$MFLatestSpecificBehavior,
      PreferTraditionalFolderLocation: boolean,
      UpdateFromServer: boolean
    ): string;
    OpenFileInDefaultApplication(
      ParentWindow: number,
      ObjVer: IObjVer,
      FileVer: IFileVer,
      FileOpenMethod: MFiles$MFFileOpenMethod
    ): void;
    PerformOCROperation(
      ObjVer: IObjVer,
      FileVer: IFileVer,
      OCROptions: IOCROptions,
      ZoneRecognitionMode: MFiles$MFOCRZoneRecognitionMode,
      ZoneRecognitionPages: IOCRPages,
      ConvertToSearchablePDF: boolean
    ): IOCRPageResults;
    RemoveFile(ObjVer: IObjVer, FileVer: IFileVer): IObjectVersion;
    RenameFile(
      ObjVer: IObjVer,
      FileVer: IFileVer,
      Title: string,
      Extension: string,
      UpdateSingleFileDocumentTitle: boolean
    ): IObjectVersion;
    UpdateMetadataInFile(
      ObjVer: IObjVer,
      File: number,
      FailOnUnsupportedFiles: boolean
    ): IObjectVersion;
    UploadFile(File: number, FileVersion: number, FilePath: string): void;
    UploadFileBlock(
      UploadID: number,
      TotalSizeInBytes: number,
      Offset: number,
      Block: $ReadOnlyArray<number>
    ): void;
    UploadFileBlock_32bit(
      UploadID: number,
      TotalSizeInBytes: number,
      Offset: number,
      Block: $ReadOnlyArray<number>
    ): void;
    UploadFileBlockBegin(): number;
    UploadFileBlockBegin_32bit(): number;
    UploadFileCommit(
      UploadID: number,
      File: number,
      FileVersion: number,
      LogicalSize: number
    ): void;
    UploadFileCommit_32bit(
      UploadID: number,
      File: number,
      FileVersion: number,
      LogicalSize: number
    ): void;
    UploadFromDataURI(
      ObjVer: IObjVer,
      File: number,
      FileVersion: number,
      DataURI: string
    ): void;
    UploadTemporaryFile(FilePath: string): number;
    UploadTemporaryFileBlock(
      UploadID: number,
      TotalSizeInBytes: number,
      Offset: number,
      Block: $ReadOnlyArray<number>
    ): void;
    UploadTemporaryFileBlock_32bit(
      UploadID: number,
      TotalSizeInBytes: number,
      Offset: number,
      Block: $ReadOnlyArray<number>
    ): void;
    UploadTemporaryFileBlockBegin(FileExtension: string): number;
    UploadTemporaryFileBlockBegin_32bit(FileExtension: string): number;
    UploadTemporaryFileCommit(UploadID: number, LogicalSize: number): void;
    UploadTemporaryFileCommit_32bit(
      UploadID: number,
      LogicalSize: number
    ): void;
  }
  declare interface IVaultObjectFileOperationsAsync {
    AddEmptyFile(
      ObjVer: IObjVer,
      Title: string,
      Extension: string,
      successCallback?: (result: IFileVer) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    AddFile(
      ObjVer: IObjVer,
      Title: string,
      Extension: string,
      SourcePath: string,
      successCallback?: (result: IFileVer) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CloseUploadSession(
      UploadID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ConvertToPDF(
      ObjVer: IObjVer,
      FileID: number,
      StoreAsSeparateFile: boolean,
      OverwriteExistingFile: boolean,
      PDFA1b: boolean,
      FailOnUnsupportedSourceFiles: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFile(
      File: number,
      FileVersion: number,
      FilePath: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFileAsDataURI(
      ObjVer: IObjVer,
      File: number,
      FileVersion: number,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFileEx(
      File: number,
      FileVersion: number,
      FilePath: string,
      FileFormat: MFiles$MFFileFormat,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFileInBlocks_Begin(
      File: number,
      FileVersion: number,
      successCallback?: (result: IFileDownloadSession) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFileInBlocks_Begin_32bit(
      File: number,
      FileVersion: number,
      successCallback?: (result: IFileDownloadSession) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFileInBlocks_BeginEx(
      File: number,
      FileVersion: number,
      FileFormat: MFiles$MFFileFormat,
      successCallback?: (result: IFileDownloadSession) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFileInBlocks_BeginEx_32bit(
      File: number,
      FileVersion: number,
      FileFormat: MFiles$MFFileFormat,
      successCallback?: (result: IFileDownloadSession) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFileInBlocks_ReadBlock(
      DownloadID: number,
      BlockSize: number,
      Offset: number,
      successCallback?: (result: $ReadOnlyArray<number>) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DownloadFileInBlocks_ReadBlock_32bit(
      DownloadID: number,
      BlockSize: number,
      Offset: number,
      successCallback?: (result: $ReadOnlyArray<number>) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFiles(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectFiles) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFilesForModificationInEventHandler(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectFiles) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFileSize(
      FileVer: IFileVer,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFileSize_32bit(
      FileVer: IFileVer,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLatestFileVersion(
      FileID: number,
      AllowCheckedOut: boolean,
      successCallback?: (result: IFileVer) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjIDOfFile(
      FileID: number,
      successCallback?: (result: IObjID) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPathInDefaultView(
      ObjID: IObjID,
      ObjectVersion: number,
      FileID: number,
      FileVersion: number,
      LatestSpecificBehavior: MFiles$MFLatestSpecificBehavior,
      UpdateFromServer: boolean,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPathInDefaultViewEx(
      ObjID: IObjID,
      ObjectVersion: number,
      FileID: number,
      FileVersion: number,
      LatestSpecificBehavior: MFiles$MFLatestSpecificBehavior,
      PreferTraditionalFolderLocation: boolean,
      UpdateFromServer: boolean,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    OpenFileInDefaultApplication(
      ParentWindow: number,
      ObjVer: IObjVer,
      FileVer: IFileVer,
      FileOpenMethod: MFiles$MFFileOpenMethod,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    PerformOCROperation(
      ObjVer: IObjVer,
      FileVer: IFileVer,
      OCROptions: IOCROptions,
      ZoneRecognitionMode: MFiles$MFOCRZoneRecognitionMode,
      ZoneRecognitionPages: IOCRPages,
      ConvertToSearchablePDF: boolean,
      successCallback?: (result: IOCRPageResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveFile(
      ObjVer: IObjVer,
      FileVer: IFileVer,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RenameFile(
      ObjVer: IObjVer,
      FileVer: IFileVer,
      Title: string,
      Extension: string,
      UpdateSingleFileDocumentTitle: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateMetadataInFile(
      ObjVer: IObjVer,
      File: number,
      FailOnUnsupportedFiles: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadFile(
      File: number,
      FileVersion: number,
      FilePath: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadFileBlock(
      UploadID: number,
      TotalSizeInBytes: number,
      Offset: number,
      Block: $ReadOnlyArray<number>,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadFileBlock_32bit(
      UploadID: number,
      TotalSizeInBytes: number,
      Offset: number,
      Block: $ReadOnlyArray<number>,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadFileBlockBegin(
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadFileBlockBegin_32bit(
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadFileCommit(
      UploadID: number,
      File: number,
      FileVersion: number,
      LogicalSize: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadFileCommit_32bit(
      UploadID: number,
      File: number,
      FileVersion: number,
      LogicalSize: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadFromDataURI(
      ObjVer: IObjVer,
      File: number,
      FileVersion: number,
      DataURI: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadTemporaryFile(
      FilePath: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadTemporaryFileBlock(
      UploadID: number,
      TotalSizeInBytes: number,
      Offset: number,
      Block: $ReadOnlyArray<number>,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadTemporaryFileBlock_32bit(
      UploadID: number,
      TotalSizeInBytes: number,
      Offset: number,
      Block: $ReadOnlyArray<number>,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadTemporaryFileBlockBegin(
      FileExtension: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadTemporaryFileBlockBegin_32bit(
      FileExtension: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadTemporaryFileCommit(
      UploadID: number,
      LogicalSize: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UploadTemporaryFileCommit_32bit(
      UploadID: number,
      LogicalSize: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultObjectOperations {
    AddFavorite(ObjID: IObjID): IObjectVersionAndProperties;
    AddFavorites(ObjIDs: IObjIDs): IObjectVersionAndPropertiesOfMultipleObjects;
    ChangePermissionsToACL(
      ObjVer: IObjVer,
      AccessControlList: IAccessControlList,
      ChangeAllVersions: boolean
    ): IObjectVersion;
    ChangePermissionsToNamedACL(
      ObjVer: IObjVer,
      NamedACL: number,
      ChangeAllVersions: boolean
    ): IObjectVersion;
    CheckIn(ObjVer: IObjVer): IObjectVersion;
    CheckInMultipleObjects(ObjVers: IObjVers): IObjectVersions;
    CheckOut(ObjID: IObjID): IObjectVersion;
    CheckOutMultipleObjects(ObjIDs: IObjIDs): IObjectVersions;
    CreateNewAssignment(
      AssignmentName: string,
      AssignmentDescription: string,
      AssignedToUser: ITypedValue,
      Deadline: ITypedValue,
      AccessControlList: IAccessControlList
    ): IObjectVersionAndProperties;
    CreateNewEmptySingleFileDocument(
      PropertyValues: IPropertyValues,
      Title: string,
      Extension: string,
      AccessControlList: IAccessControlList
    ): IObjectVersionAndProperties;
    CreateNewObject(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      PropertyValues: IPropertyValues,
      SourceObjectFiles: ISourceObjectFiles,
      AccessControlList: IAccessControlList
    ): IObjectVersionAndProperties;
    CreateNewObjectEx(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Properties: IPropertyValues,
      SourceFiles: ISourceObjectFiles,
      SFD: boolean,
      CheckIn: boolean,
      AccessControlList: IAccessControlList
    ): IObjectVersionAndProperties;
    CreateNewObjectExQuick(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Properties: IPropertyValues,
      SourceFiles: ISourceObjectFiles,
      SFD: boolean,
      CheckIn: boolean,
      AccessControlList: IAccessControlList
    ): number;
    CreateNewSFDObject(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Properties: IPropertyValues,
      SourceFile: ISourceObjectFile,
      CheckIn: boolean,
      AccessControlList: IAccessControlList
    ): IObjectVersionAndProperties;
    CreateNewSFDObjectQuick(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Properties: IPropertyValues,
      SourceFile: ISourceObjectFile,
      CheckIn: boolean,
      AccessControlList: IAccessControlList
    ): number;
    DelayedCheckIn(ObjVer: IObjVer): void;
    DeleteObject(ObjID: IObjID): IObjectVersion;
    DestroyObject(
      ObjID: IObjID,
      DestroyAllVersions: boolean,
      ObjectVersion: number
    ): void;
    DestroyObjects(ObjIDs: IObjIDs): void;
    FollowObject(ObjID: IObjID, Follow: boolean): void;
    ForceUndoCheckout(ObjVer: IObjVer): IObjectVersion;
    GetCollectionMembers(ObjVer: IObjVer): IObjectVersions;
    GetHistory(ObjID: IObjID): IObjectVersions;
    GetLatestObjectVersionAndProperties(
      ObjID: IObjID,
      AllowCheckedOut: boolean,
      UpdateFromServer: boolean
    ): IObjectVersionAndProperties;
    GetLatestObjVer(
      ObjID: IObjID,
      AllowCheckedOut: boolean,
      UpdateFromServer: boolean
    ): IObjVer;
    GetLatestObjVerEx(
      ObjID: IObjID,
      AllowCheckedOut: boolean,
      UpdateFromServer: boolean,
      NotifyViews: boolean
    ): IObjVer;
    GetMFilesURLForObject(
      ObjID: IObjID,
      TargetVersion: number,
      SpecificVersion: boolean,
      URLType: MFiles$MFilesURLType
    ): string;
    GetMFilesURLForObjectOrFile(
      ObjID: IObjID,
      TargetVersion: number,
      SpecificVersion: boolean,
      File: number,
      URLType: MFiles$MFilesURLType
    ): string;
    GetObjectGUID(ObjID: IObjID): string;
    GetObjectInfo(
      ObjVer: IObjVer,
      LatestVersion: boolean,
      UpdateFromServer: boolean
    ): IObjectVersion;
    GetObjectInfoEx(
      ObjVer: IObjVer,
      LatestVersion: boolean,
      UpdateFromServer: boolean,
      NotifyViews: boolean
    ): IObjectVersion;
    GetObjectLocationsInView(
      View: MFiles$MFBuiltInView | number,
      LatestSpecificBehavior: MFiles$MFLatestSpecificBehavior,
      ObjectVersion: IObjVer
    ): IStrings;
    GetObjectPermissions(ObjVer: IObjVer): IObjectVersionPermissions;
    GetObjectVersionAndProperties(
      ObjVer: IObjVer,
      UpdateFromServer: boolean
    ): IObjectVersionAndProperties;
    GetObjectVersionAndPropertiesOfMultipleObjects(
      ObjVers: IObjVers,
      LatestVersions: boolean,
      AllowCheckedOut: boolean,
      AllowMissingObjectVersions: boolean,
      UpdateFromServer: boolean
    ): IObjectVersionAndPropertiesOfMultipleObjects;
    GetObjIDByGUID(ObjectGUID: string): IObjID;
    GetObjIDByOriginalObjID(
      OriginalVaultGUID: string,
      OriginalObjID: IObjID
    ): IObjID;
    GetOfflineAvailability(ObjID: IObjID): boolean;
    GetOfflineObjIDs(): IObjIDs;
    GetRelationships(
      ObjVer: IObjVer,
      Mode: MFiles$MFRelationshipsMode
    ): IObjectVersions;
    GetThumbnailAsBytes(
      ObjVer: IObjVer,
      FileVer: IFileVer,
      Width: number,
      Height: number,
      GetFileIconThumbnailIfRealThumbnailNotAvailable: boolean
    ): $ReadOnlyArray<number>;
    IsObjectCheckedOut(ObjID: IObjID, UpdateFromServer: boolean): boolean;
    IsObjectCheckedOutToThisUserOnThisComputer(
      ObjID: IObjID,
      UpdateFromServer: boolean
    ): boolean;
    IsObjectFollowed(ObjID: IObjID): boolean;
    IsSingleFileObject(ObjVer: IObjVer): boolean;
    MatchesSearchConditions(
      pIObjVer: IObjVer,
      pISearchConditions: ISearchConditions
    ): boolean;
    MatchesSearchConditionsEx(
      pIObjectVersion: IObjectVersion,
      pISearchConditions: ISearchConditions,
      pIPropertyValues: IPropertyValues,
      pIObjectVersionAndPropertiesOfMultipleObjects: IObjectVersionAndPropertiesOfMultipleObjects
    ): boolean;
    NotifyObjectAccess(ObjID: IObjID): IObjectVersionAndProperties;
    ProposeCheckOutForFile(
      ParentWindow: number,
      ObjVersionFile: IObjectFileAndVersion,
      CanCancel: boolean
    ): boolean;
    RejectCheckInReminder(ObjVer: IObjVer): void;
    RemoveFavorite(ObjID: IObjID): IObjectVersionAndProperties;
    RemoveFavorites(
      ObjIDs: IObjIDs
    ): IObjectVersionAndPropertiesOfMultipleObjects;
    ResolveConflict(
      ParticipantObjID: IObjID,
      KeepThis: boolean
    ): IObjectVersions;
    Rollback(ObjID: IObjID, RollbackToVersion: number): IObjectVersion;
    SetExternalID(ObjID: IObjID, ExtID: string): void;
    SetObjectGUID(ObjID: IObjID, ObjectGUID: string): void;
    SetOfflineAvailability(
      ObjID: IObjID,
      AvailableInOfflineMode: boolean
    ): void;
    SetSingleFileObject(ObjVer: IObjVer, SingleFile: boolean): void;
    ShowBasicEditObjectWindow(
      ParentWindow: number,
      ObjVer: IObjVer
    ): IObjectWindowResult;
    ShowBasicNewObjectWindow(
      ParentWindow: number,
      ObjectType: IObjectType
    ): IObjectWindowResult;
    ShowChangeStateDialogModal(ParentWindow: number, ObjectID: IObjID): void;
    ShowCheckInReminder(
      ParentWindow: number,
      ObjVer: IObjVer,
      Asynchronous: boolean
    ): IObjectVersion;
    ShowCheckInReminderDialogModal(
      ParentWindow: number,
      ObjVer: IObjVer,
      ApplyEnvironmentConditions: boolean
    ): boolean;
    ShowCheckoutPrompt(
      ParentWindow: number,
      Message: string,
      ObjID: IObjID,
      ShowCancel: boolean,
      AutoRejectConsequentPrompts: boolean
    ): IObjectVersion;
    ShowCollectionMembersDialog(
      ParentWindow: number,
      ObjectVersion: IObjVer,
      Modeless: boolean
    ): void;
    ShowCommentsDialogModal(ParentWindow: number, ObjectID: IObjID): void;
    ShowEditObjectWindow(
      ParentWindow: number,
      Mode: MFiles$MFObjectWindowMode,
      ObjVer: IObjVer
    ): IObjectWindowResult;
    ShowHistoryDialogModal(ParentWindow: number, ObjectID: IObjID): void;
    ShowNewObjectWindow(
      ParentWindow: number,
      Mode: MFiles$MFObjectWindowMode,
      ObjectCreationInfo: IObjectCreationInfo
    ): IObjectWindowResult;
    ShowPrefilledNewObjectWindow(
      ParentWindow: number,
      Mode: MFiles$MFObjectWindowMode,
      ObjectCreationInfo: IObjectCreationInfo,
      PrefilledPropertyValues: IPropertyValues,
      AccessControlList: IAccessControlList
    ): IObjectWindowResult;
    ShowRelatedObjects(
      ParentWindow: number,
      SourceObject: IObjID,
      ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing,
      ViewSelectionDialogInfoText: string
    ): void;
    ShowRelationshipsDialog(
      ParentWindow: number,
      ObjectVersion: IObjVer,
      Modeless: boolean
    ): void;
    ShowSelectObjectHistoryDialogModal(
      ParentWindow: number,
      ObjectID: IObjID,
      WindowTitle: string
    ): IObjOrFileVer;
    ShowSubObjectsDialogModal(
      ParentWindow: number,
      ObjectVersion: IObjVer
    ): void;
    UndeleteObject(ObjID: IObjID): IObjectVersion;
    UndoCheckout(ObjVer: IObjVer): IObjectVersion;
    UndoCheckoutMultipleObjects(ObjVers: IObjVers): IObjectVersions;
  }
  declare interface IVaultObjectOperationsAsync {
    AddFavorite(
      ObjID: IObjID,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    AddFavorites(
      ObjIDs: IObjIDs,
      successCallback?: (
        result: IObjectVersionAndPropertiesOfMultipleObjects
      ) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ChangePermissionsToACL(
      ObjVer: IObjVer,
      AccessControlList: IAccessControlList,
      ChangeAllVersions: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ChangePermissionsToNamedACL(
      ObjVer: IObjVer,
      NamedACL: number,
      ChangeAllVersions: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CheckIn(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CheckInMultipleObjects(
      ObjVers: IObjVers,
      successCallback?: (result: IObjectVersions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CheckOut(
      ObjID: IObjID,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CheckOutMultipleObjects(
      ObjIDs: IObjIDs,
      successCallback?: (result: IObjectVersions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CreateNewAssignment(
      AssignmentName: string,
      AssignmentDescription: string,
      AssignedToUser: ITypedValue,
      Deadline: ITypedValue,
      AccessControlList: IAccessControlList,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CreateNewEmptySingleFileDocument(
      PropertyValues: IPropertyValues,
      Title: string,
      Extension: string,
      AccessControlList: IAccessControlList,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CreateNewObject(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      PropertyValues: IPropertyValues,
      SourceObjectFiles: ISourceObjectFiles,
      AccessControlList: IAccessControlList,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CreateNewObjectEx(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Properties: IPropertyValues,
      SourceFiles: ISourceObjectFiles,
      SFD: boolean,
      CheckIn: boolean,
      AccessControlList: IAccessControlList,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CreateNewObjectExQuick(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Properties: IPropertyValues,
      SourceFiles: ISourceObjectFiles,
      SFD: boolean,
      CheckIn: boolean,
      AccessControlList: IAccessControlList,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CreateNewSFDObject(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Properties: IPropertyValues,
      SourceFile: ISourceObjectFile,
      CheckIn: boolean,
      AccessControlList: IAccessControlList,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CreateNewSFDObjectQuick(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      Properties: IPropertyValues,
      SourceFile: ISourceObjectFile,
      CheckIn: boolean,
      AccessControlList: IAccessControlList,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DelayedCheckIn(
      ObjVer: IObjVer,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DeleteObject(
      ObjID: IObjID,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DestroyObject(
      ObjID: IObjID,
      DestroyAllVersions: boolean,
      ObjectVersion: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DestroyObjects(
      ObjIDs: IObjIDs,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    FollowObject(
      ObjID: IObjID,
      Follow: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ForceUndoCheckout(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetCollectionMembers(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectVersions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetHistory(
      ObjID: IObjID,
      successCallback?: (result: IObjectVersions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLatestObjectVersionAndProperties(
      ObjID: IObjID,
      AllowCheckedOut: boolean,
      UpdateFromServer: boolean,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLatestObjVer(
      ObjID: IObjID,
      AllowCheckedOut: boolean,
      UpdateFromServer: boolean,
      successCallback?: (result: IObjVer) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLatestObjVerEx(
      ObjID: IObjID,
      AllowCheckedOut: boolean,
      UpdateFromServer: boolean,
      NotifyViews: boolean,
      successCallback?: (result: IObjVer) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetMFilesURLForObject(
      ObjID: IObjID,
      TargetVersion: number,
      SpecificVersion: boolean,
      URLType: MFiles$MFilesURLType,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetMFilesURLForObjectOrFile(
      ObjID: IObjID,
      TargetVersion: number,
      SpecificVersion: boolean,
      File: number,
      URLType: MFiles$MFilesURLType,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectGUID(
      ObjID: IObjID,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectInfo(
      ObjVer: IObjVer,
      LatestVersion: boolean,
      UpdateFromServer: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectInfoEx(
      ObjVer: IObjVer,
      LatestVersion: boolean,
      UpdateFromServer: boolean,
      NotifyViews: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectLocationsInView(
      View: MFiles$MFBuiltInView | number,
      LatestSpecificBehavior: MFiles$MFLatestSpecificBehavior,
      ObjectVersion: IObjVer,
      successCallback?: (result: IStrings) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectPermissions(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectVersionPermissions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectVersionAndProperties(
      ObjVer: IObjVer,
      UpdateFromServer: boolean,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectVersionAndPropertiesOfMultipleObjects(
      ObjVers: IObjVers,
      LatestVersions: boolean,
      AllowCheckedOut: boolean,
      AllowMissingObjectVersions: boolean,
      UpdateFromServer: boolean,
      successCallback?: (
        result: IObjectVersionAndPropertiesOfMultipleObjects
      ) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjIDByGUID(
      ObjectGUID: string,
      successCallback?: (result: IObjID) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjIDByOriginalObjID(
      OriginalVaultGUID: string,
      OriginalObjID: IObjID,
      successCallback?: (result: IObjID) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetOfflineAvailability(
      ObjID: IObjID,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetOfflineObjIDs(
      successCallback?: (result: IObjIDs) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetRelationships(
      ObjVer: IObjVer,
      Mode: MFiles$MFRelationshipsMode,
      successCallback?: (result: IObjectVersions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetThumbnailAsBytes(
      ObjVer: IObjVer,
      FileVer: IFileVer,
      Width: number,
      Height: number,
      GetFileIconThumbnailIfRealThumbnailNotAvailable: boolean,
      successCallback?: (result: $ReadOnlyArray<number>) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsObjectCheckedOut(
      ObjID: IObjID,
      UpdateFromServer: boolean,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsObjectCheckedOutToThisUserOnThisComputer(
      ObjID: IObjID,
      UpdateFromServer: boolean,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsObjectFollowed(
      ObjID: IObjID,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsSingleFileObject(
      ObjVer: IObjVer,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    MatchesSearchConditions(
      pIObjVer: IObjVer,
      pISearchConditions: ISearchConditions,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    MatchesSearchConditionsEx(
      pIObjectVersion: IObjectVersion,
      pISearchConditions: ISearchConditions,
      pIPropertyValues: IPropertyValues,
      pIObjectVersionAndPropertiesOfMultipleObjects: IObjectVersionAndPropertiesOfMultipleObjects,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    NotifyObjectAccess(
      ObjID: IObjID,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ProposeCheckOutForFile(
      ParentWindow: number,
      ObjVersionFile: IObjectFileAndVersion,
      CanCancel: boolean,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RejectCheckInReminder(
      ObjVer: IObjVer,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveFavorite(
      ObjID: IObjID,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveFavorites(
      ObjIDs: IObjIDs,
      successCallback?: (
        result: IObjectVersionAndPropertiesOfMultipleObjects
      ) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ResolveConflict(
      ParticipantObjID: IObjID,
      KeepThis: boolean,
      successCallback?: (result: IObjectVersions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    Rollback(
      ObjID: IObjID,
      RollbackToVersion: number,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetExternalID(
      ObjID: IObjID,
      ExtID: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetObjectGUID(
      ObjID: IObjID,
      ObjectGUID: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetOfflineAvailability(
      ObjID: IObjID,
      AvailableInOfflineMode: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetSingleFileObject(
      ObjVer: IObjVer,
      SingleFile: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowBasicEditObjectWindow(
      ParentWindow: number,
      ObjVer: IObjVer,
      successCallback?: (result: IObjectWindowResult) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowBasicNewObjectWindow(
      ParentWindow: number,
      ObjectType: IObjectType,
      successCallback?: (result: IObjectWindowResult) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowChangeStateDialogModal(
      ParentWindow: number,
      ObjectID: IObjID,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowCheckInReminder(
      ParentWindow: number,
      ObjVer: IObjVer,
      Asynchronous: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowCheckInReminderDialogModal(
      ParentWindow: number,
      ObjVer: IObjVer,
      ApplyEnvironmentConditions: boolean,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowCheckoutPrompt(
      ParentWindow: number,
      Message: string,
      ObjID: IObjID,
      ShowCancel: boolean,
      AutoRejectConsequentPrompts: boolean,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowCollectionMembersDialog(
      ParentWindow: number,
      ObjectVersion: IObjVer,
      Modeless: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowCommentsDialogModal(
      ParentWindow: number,
      ObjectID: IObjID,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowEditObjectWindow(
      ParentWindow: number,
      Mode: MFiles$MFObjectWindowMode,
      ObjVer: IObjVer,
      successCallback?: (result: IObjectWindowResult) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowHistoryDialogModal(
      ParentWindow: number,
      ObjectID: IObjID,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowNewObjectWindow(
      ParentWindow: number,
      Mode: MFiles$MFObjectWindowMode,
      ObjectCreationInfo: IObjectCreationInfo,
      successCallback?: (result: IObjectWindowResult) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowPrefilledNewObjectWindow(
      ParentWindow: number,
      Mode: MFiles$MFObjectWindowMode,
      ObjectCreationInfo: IObjectCreationInfo,
      PrefilledPropertyValues: IPropertyValues,
      AccessControlList: IAccessControlList,
      successCallback?: (result: IObjectWindowResult) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowRelatedObjects(
      ParentWindow: number,
      SourceObject: IObjID,
      ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing,
      ViewSelectionDialogInfoText: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowRelationshipsDialog(
      ParentWindow: number,
      ObjectVersion: IObjVer,
      Modeless: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowSelectObjectHistoryDialogModal(
      ParentWindow: number,
      ObjectID: IObjID,
      WindowTitle: string,
      successCallback?: (result: IObjOrFileVer) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowSubObjectsDialogModal(
      ParentWindow: number,
      ObjectVersion: IObjVer,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UndeleteObject(
      ObjID: IObjID,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UndoCheckout(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UndoCheckoutMultipleObjects(
      ObjVers: IObjVers,
      successCallback?: (result: IObjectVersions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultObjectPropertyOperations {
    ApproveOrRejectAssignment(
      ObjVer: IObjVer,
      Approve: boolean
    ): IObjectVersionAndProperties;
    ApproveOrRejectAssignmentByUser(
      ObjVer: IObjVer,
      Approve: boolean,
      UserID: number
    ): IObjectVersionAndProperties;
    CreatePropertiesFromFileInformation(
      FileInformation: IFileInformation
    ): IPropertyValues;
    GenerateAutomaticPermissionsFromPropertyValues(
      PropertyValues: IPropertyValues
    ): IAccessControlList;
    GetProperties(ObjVer: IObjVer, UpdateFromServer: boolean): IPropertyValues;
    GetPropertiesAsXML(ObjVer: IObjVer, UpdateFromServer: boolean): string;
    GetPropertiesForDisplay(
      ObjVer: IObjVer,
      UpdateFromServer: boolean
    ): IPropertyValuesForDisplay;
    GetPropertiesForMetadataSync(
      ObjVer: IObjVer,
      Format: MFiles$MFMetadataSyncFormat
    ): INamedValues;
    GetPropertiesOfMultipleObjects(
      ObjectVersions: IObjVers
    ): IPropertyValuesOfMultipleObjects;
    GetPropertiesWithIconClues(
      ObjVer: IObjVer,
      UpdateFromServer: boolean
    ): IPropertyValuesWithIconClues;
    GetPropertiesWithIconCluesOfMultipleObjects(
      ObjectVersions: IObjVers
    ): IPropertyValuesWithIconCluesOfMultipleObjects;
    GetProperty(ObjVer: IObjVer, Property: number): IPropertyValue;
    GetVersionComment(ObjVer: IObjVer): IVersionComment;
    GetVersionCommentHistory(ObjVer: IObjVer): IVersionComments;
    GetWorkflowState(
      ObjVer: IObjVer,
      UpdateFromServer: boolean
    ): IObjectVersionWorkflowState;
    MarkAssignmentComplete(ObjVer: IObjVer): IObjectVersionAndProperties;
    MarkAssignmentCompleteByUser(
      ObjVer: IObjVer,
      UserID: number
    ): IObjectVersionAndProperties;
    RemoveProperty(
      ObjVer: IObjVer,
      Property: number
    ): IObjectVersionAndProperties;
    SetAllProperties(
      ObjVer: IObjVer,
      AllowModifyingCheckedInObject: boolean,
      PropertyValues: IPropertyValues
    ): IObjectVersionAndProperties;
    SetAllPropertiesWithPermissions(
      ObjVer: IObjVer,
      AllowModifyingCheckedInObject: boolean,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      ACLProvided: IAccessControlList
    ): IObjectVersionAndProperties;
    SetAllPropertiesWithPermissionsEx(
      ObjVer: IObjVer,
      AllowModifyingCheckedInObject: boolean,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      ACLProvided: IAccessControlList,
      ElectronicSignature: any
    ): IObjectVersionAndProperties;
    SetCreationInfoAdmin(
      ObjVer: IObjVer,
      UpdateCreatedBy: boolean,
      CreatedBy: ITypedValue,
      UpdateCreated: boolean,
      CreatedUtc: ITypedValue
    ): IObjectVersionAndProperties;
    SetLastModificationInfoAdmin(
      ObjVer: IObjVer,
      UpdateLastModifiedBy: boolean,
      LastModifiedBy: ITypedValue,
      UpdateLastModified: boolean,
      LastModifiedUtc: ITypedValue
    ): IObjectVersionAndProperties;
    SetProperties(
      ObjVer: IObjVer,
      PropertyValues: IPropertyValues
    ): IObjectVersionAndProperties;
    SetPropertiesOfMultipleObjects(
      SetPropertiesParamsOfObjects: ISetPropertiesParamsOfMultipleObjects
    ): IObjectVersionAndPropertiesOfMultipleObjects;
    SetPropertiesWithPermissions(
      ObjVer: IObjVer,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      ACLProvided: IAccessControlList
    ): IObjectVersionAndProperties;
    SetPropertiesWithPermissionsEx(
      ObjVer: IObjVer,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      ACLProvided: IAccessControlList,
      ElectronicSignature: any
    ): IObjectVersionAndProperties;
    SetProperty(
      ObjVer: IObjVer,
      PropertyValue: IPropertyValue
    ): IObjectVersionAndProperties;
    SetVersionComment(
      ObjVer: IObjVer,
      VersionComment: IPropertyValue
    ): IObjectVersionAndProperties;
    SetWorkflowState(
      ObjVer: IObjVer,
      WorkflowState: IObjectVersionWorkflowState
    ): IObjectVersionAndProperties;
    SetWorkflowStateEx(
      ObjVer: IObjVer,
      WorkflowState: IObjectVersionWorkflowState,
      ElectronicSignature: any
    ): IObjectVersionAndProperties;
    SetWorkflowStateTransition(
      ObjVer: IObjVer,
      Workflow: number,
      lStateTransition: number,
      lVersionComment: string
    ): IObjectVersionAndProperties;
    SetWorkflowStateTransitionEx(
      ObjVer: IObjVer,
      Workflow: number,
      StateTransition: number,
      VersionComment: string,
      ElectronicSignature: any
    ): IObjectVersionAndProperties;
  }
  declare interface IVaultObjectPropertyOperationsAsync {
    ApproveOrRejectAssignment(
      ObjVer: IObjVer,
      Approve: boolean,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ApproveOrRejectAssignmentByUser(
      ObjVer: IObjVer,
      Approve: boolean,
      UserID: number,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CreatePropertiesFromFileInformation(
      FileInformation: IFileInformation,
      successCallback?: (result: IPropertyValues) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GenerateAutomaticPermissionsFromPropertyValues(
      PropertyValues: IPropertyValues,
      successCallback?: (result: IAccessControlList) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetProperties(
      ObjVer: IObjVer,
      UpdateFromServer: boolean,
      successCallback?: (result: IPropertyValues) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertiesAsXML(
      ObjVer: IObjVer,
      UpdateFromServer: boolean,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertiesForDisplay(
      ObjVer: IObjVer,
      UpdateFromServer: boolean,
      successCallback?: (result: IPropertyValuesForDisplay) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertiesForMetadataSync(
      ObjVer: IObjVer,
      Format: MFiles$MFMetadataSyncFormat,
      successCallback?: (result: INamedValues) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertiesOfMultipleObjects(
      ObjectVersions: IObjVers,
      successCallback?: (result: IPropertyValuesOfMultipleObjects) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertiesWithIconClues(
      ObjVer: IObjVer,
      UpdateFromServer: boolean,
      successCallback?: (result: IPropertyValuesWithIconClues) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertiesWithIconCluesOfMultipleObjects(
      ObjectVersions: IObjVers,
      successCallback?: (
        result: IPropertyValuesWithIconCluesOfMultipleObjects
      ) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetProperty(
      ObjVer: IObjVer,
      Property: number,
      successCallback?: (result: IPropertyValue) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetVersionComment(
      ObjVer: IObjVer,
      successCallback?: (result: IVersionComment) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetVersionCommentHistory(
      ObjVer: IObjVer,
      successCallback?: (result: IVersionComments) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowState(
      ObjVer: IObjVer,
      UpdateFromServer: boolean,
      successCallback?: (result: IObjectVersionWorkflowState) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    MarkAssignmentComplete(
      ObjVer: IObjVer,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    MarkAssignmentCompleteByUser(
      ObjVer: IObjVer,
      UserID: number,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveProperty(
      ObjVer: IObjVer,
      Property: number,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetAllProperties(
      ObjVer: IObjVer,
      AllowModifyingCheckedInObject: boolean,
      PropertyValues: IPropertyValues,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetAllPropertiesWithPermissions(
      ObjVer: IObjVer,
      AllowModifyingCheckedInObject: boolean,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      ACLProvided: IAccessControlList,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetAllPropertiesWithPermissionsEx(
      ObjVer: IObjVer,
      AllowModifyingCheckedInObject: boolean,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      ACLProvided: IAccessControlList,
      ElectronicSignature: any,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetCreationInfoAdmin(
      ObjVer: IObjVer,
      UpdateCreatedBy: boolean,
      CreatedBy: ITypedValue,
      UpdateCreated: boolean,
      CreatedUtc: ITypedValue,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetLastModificationInfoAdmin(
      ObjVer: IObjVer,
      UpdateLastModifiedBy: boolean,
      LastModifiedBy: ITypedValue,
      UpdateLastModified: boolean,
      LastModifiedUtc: ITypedValue,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetProperties(
      ObjVer: IObjVer,
      PropertyValues: IPropertyValues,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetPropertiesOfMultipleObjects(
      SetPropertiesParamsOfObjects: ISetPropertiesParamsOfMultipleObjects,
      successCallback?: (
        result: IObjectVersionAndPropertiesOfMultipleObjects
      ) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetPropertiesWithPermissions(
      ObjVer: IObjVer,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      ACLProvided: IAccessControlList,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetPropertiesWithPermissionsEx(
      ObjVer: IObjVer,
      PropertyValues: IPropertyValues,
      ACLEnforcingMode: MFiles$MFACLEnforcingMode,
      ACLProvided: IAccessControlList,
      ElectronicSignature: any,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetProperty(
      ObjVer: IObjVer,
      PropertyValue: IPropertyValue,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetVersionComment(
      ObjVer: IObjVer,
      VersionComment: IPropertyValue,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetWorkflowState(
      ObjVer: IObjVer,
      WorkflowState: IObjectVersionWorkflowState,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetWorkflowStateEx(
      ObjVer: IObjVer,
      WorkflowState: IObjectVersionWorkflowState,
      ElectronicSignature: any,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetWorkflowStateTransition(
      ObjVer: IObjVer,
      Workflow: number,
      lStateTransition: number,
      lVersionComment: string,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetWorkflowStateTransitionEx(
      ObjVer: IObjVer,
      Workflow: number,
      StateTransition: number,
      VersionComment: string,
      ElectronicSignature: any,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultObjectSearchOperations {
    FindFile(
      RelativePath: string,
      UpdateFromServer: boolean
    ): IObjectFileAndVersion;
    FindObjectVersionAndProperties(
      RelativePath: string,
      UpdateFromServer: boolean
    ): IObjectVersionAndProperties;
    GetFacetValues(
      SearchConditions: ISearchConditions,
      Facets: IExpressions,
      FacetValuesMaxCount: number,
      Flags: MFiles$MFFacetSearchFlags
    ): IStringData;
    GetFacetValuesByPath(
      RelativePath: string,
      Facets: IExpressions,
      FacetValuesMaxCount: number,
      Flags: MFiles$MFFacetSearchFlags
    ): IStringData;
    GetObjectCountInSearch(
      SearchConditions: ISearchConditions,
      SearchFlags: MFiles$MFSearchFlags
    ): number;
    GetObjectsInPath(
      RelativePath: string,
      SortResults: boolean,
      UpdateFromServer: boolean
    ): IObjectSearchResults;
    GetSearchHits(Input: string, SearchCondition: ISearchCondition): IStrings;
    IsObjectPathInMFiles(RelativePath: string): boolean;
    SearchForObjectsByCondition(
      SearchCondition: ISearchCondition,
      SortResults: boolean
    ): IObjectSearchResults;
    SearchForObjectsByConditions(
      SearchConditions: ISearchConditions,
      SearchFlags: MFiles$MFSearchFlags,
      SortResults: boolean
    ): IObjectSearchResults;
    SearchForObjectsByConditionsEx(
      SearchConditions: ISearchConditions,
      SearchFlags: MFiles$MFSearchFlags,
      SortResults: boolean,
      MaxResultCount: number,
      SearchTimeoutInSeconds: number
    ): IObjectSearchResults;
    SearchForObjectsByConditionsXML(
      SearchConditions: ISearchConditions,
      SortResults: boolean
    ): IXMLSearchResult;
    SearchForObjectsByExportedSearchConditions(
      ExportedSearchString: string,
      SortResults: boolean
    ): IObjectSearchResults;
    SearchForObjectsByExportedSearchConditionsXML(
      SearchString: string,
      SortResults: boolean
    ): IXMLSearchResult;
    SearchForObjectsByString(
      SearchString: string,
      SortResults: boolean,
      FullTextSearchFlags: MFiles$MFFullTextSearchFlags
    ): IObjectSearchResults;
  }
  declare interface IVaultObjectSearchOperationsAsync {
    FindFile(
      RelativePath: string,
      UpdateFromServer: boolean,
      successCallback?: (result: IObjectFileAndVersion) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    FindObjectVersionAndProperties(
      RelativePath: string,
      UpdateFromServer: boolean,
      successCallback?: (result: IObjectVersionAndProperties) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFacetValues(
      SearchConditions: ISearchConditions,
      Facets: IExpressions,
      FacetValuesMaxCount: number,
      Flags: MFiles$MFFacetSearchFlags,
      successCallback?: (result: IStringData) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFacetValuesByPath(
      RelativePath: string,
      Facets: IExpressions,
      FacetValuesMaxCount: number,
      Flags: MFiles$MFFacetSearchFlags,
      successCallback?: (result: IStringData) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectCountInSearch(
      SearchConditions: ISearchConditions,
      SearchFlags: MFiles$MFSearchFlags,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectsInPath(
      RelativePath: string,
      SortResults: boolean,
      UpdateFromServer: boolean,
      successCallback?: (result: IObjectSearchResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetSearchHits(
      Input: string,
      SearchCondition: ISearchCondition,
      successCallback?: (result: IStrings) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    IsObjectPathInMFiles(
      RelativePath: string,
      successCallback?: (result: boolean) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForObjectsByCondition(
      SearchCondition: ISearchCondition,
      SortResults: boolean,
      successCallback?: (result: IObjectSearchResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForObjectsByConditions(
      SearchConditions: ISearchConditions,
      SearchFlags: MFiles$MFSearchFlags,
      SortResults: boolean,
      successCallback?: (result: IObjectSearchResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForObjectsByConditionsEx(
      SearchConditions: ISearchConditions,
      SearchFlags: MFiles$MFSearchFlags,
      SortResults: boolean,
      MaxResultCount: number,
      SearchTimeoutInSeconds: number,
      successCallback?: (result: IObjectSearchResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForObjectsByConditionsXML(
      SearchConditions: ISearchConditions,
      SortResults: boolean,
      successCallback?: (result: IXMLSearchResult) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForObjectsByExportedSearchConditions(
      ExportedSearchString: string,
      SortResults: boolean,
      successCallback?: (result: IObjectSearchResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForObjectsByExportedSearchConditionsXML(
      SearchString: string,
      SortResults: boolean,
      successCallback?: (result: IXMLSearchResult) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForObjectsByString(
      SearchString: string,
      SortResults: boolean,
      FullTextSearchFlags: MFiles$MFFullTextSearchFlags,
      successCallback?: (result: IObjectSearchResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultObjectTypeOperations {
    AddObjectTypeAdmin(ObjectType: IObjectTypeAdmin): IObjectTypeAdmin;
    GetBuiltInObjectType(ObjectType: MFiles$MFBuiltInObjectType): IObjectType;
    GetObjectType(ObjectType: MFiles$MFBuiltInObjectType | number): IObjectType;
    GetObjectTypeAdmin(
      ObjectType: MFiles$MFBuiltInObjectType | number
    ): IObjectTypeAdmin;
    GetObjectTypeIDByAlias(Alias: string): number;
    GetObjectTypeIDByGUID(ObjectTypeGUID: string): number;
    GetObjectTypes(): IObjectTypes;
    GetObjectTypesAdmin(): IObjectTypesAdmin;
    RefreshExternalObjectType(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      RefreshType: MFiles$MFExternalDBRefreshType
    ): void;
    RemoveObjectTypeAdmin(ObjectTypeID: number): void;
    UpdateObjectTypeAdmin(ObjectType: IObjectTypeAdmin): IObjectTypeAdmin;
    UpdateObjectTypeWithAutomaticPermissionsAdmin(
      ObjectType: IObjectTypeAdmin,
      AutomaticPermissionsForcedActive: boolean
    ): IObjectTypeAdmin;
  }
  declare interface IVaultObjectTypeOperationsAsync {
    AddObjectTypeAdmin(
      ObjectType: IObjectTypeAdmin,
      successCallback?: (result: IObjectTypeAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetBuiltInObjectType(
      ObjectType: MFiles$MFBuiltInObjectType,
      successCallback?: (result: IObjectType) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectType(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      successCallback?: (result: IObjectType) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectTypeAdmin(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      successCallback?: (result: IObjectTypeAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectTypeIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectTypeIDByGUID(
      ObjectTypeGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectTypes(
      successCallback?: (result: IObjectTypes) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetObjectTypesAdmin(
      successCallback?: (result: IObjectTypesAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RefreshExternalObjectType(
      ObjectType: MFiles$MFBuiltInObjectType | number,
      RefreshType: MFiles$MFExternalDBRefreshType,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveObjectTypeAdmin(
      ObjectTypeID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateObjectTypeAdmin(
      ObjectType: IObjectTypeAdmin,
      successCallback?: (result: IObjectTypeAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateObjectTypeWithAutomaticPermissionsAdmin(
      ObjectType: IObjectTypeAdmin,
      AutomaticPermissionsForcedActive: boolean,
      successCallback?: (result: IObjectTypeAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultOnServer {
    +GUID: string;
    +Name: string;
    LogIn(): IVault;
    LogInAsUser(
      AuthType: MFiles$MFAuthType,
      UserName: string | null,
      Password: string | null,
      Domain: string | null,
      TimeZone: ITimeZoneInformation
    ): IVault;
    LogInAsUserWithAuthenticationData(
      PluginInfo: IPluginInfo,
      AuthenticationData: INamedValues,
      AttemptIdentifier: string,
      TimeZone: ITimeZoneInformation
    ): IAuthenticationResult;
    LogInAsUserWithSPN(
      AuthType: MFiles$MFAuthType,
      UserName: string | null,
      Password: string | null,
      Domain: string | null,
      SPN: string | null,
      TimeZone: ITimeZoneInformation
    ): IVault;
  }
  declare interface IVaultProperties {
    DisplayName: string;
    EncryptionOfFileDataAtRest: boolean;
    ExtendedMetadataDrivenPermissions: boolean;
    FileDataConnectionString: string;
    FileDataStorageType: MFiles$MFFileDataStorage;
    FullTextSearchLanguage: string;
    Icon: $ReadOnlyArray<number>;
    MainDataFolder: string;
    SeparateLocationForFileData: IAdditionalFolders;
    SQLDatabase: ISQLDatabase;
    VaultGUID: string;
    Clone(): IVaultProperties;
  }
  declare interface IVaultPropertyDefOperations {
    AddPropertyDefAdmin(
      PropertyDefAdmin: IPropertyDefAdmin,
      ResetLastUsedValue: ITypedValue
    ): IPropertyDefAdmin;
    GetBuiltInPropertyDef(
      PropertyDefType: MFiles$MFBuiltInPropertyDef
    ): IPropertyDef;
    GetPropertyDef(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number
    ): IPropertyDef;
    GetPropertyDefAdmin(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number
    ): IPropertyDefAdmin;
    GetPropertyDefIDByAlias(Alias: string): number;
    GetPropertyDefIDByGUID(PropertyDefGUID: string): number;
    GetPropertyDefs(): IPropertyDefs;
    GetPropertyDefsAdmin(): IPropertyDefsAdmin;
    Recalculate(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      RecalculateCurrentlyEmptyValuesOnly: boolean
    ): void;
    RemovePropertyDefAdmin(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      CopyToAnotherPropertyDef: boolean,
      TargetPropertyDef: number,
      Append: boolean,
      DeleteFromClassesIfNecessary: boolean
    ): void;
    UpdatePropertyDefAdmin(
      PropertyDefAdmin: IPropertyDefAdmin,
      ResetLastUsedValue: ITypedValue
    ): void;
    UpdatePropertyDefWithAutomaticPermissionsAdmin(
      PropertyDefAdmin: IPropertyDefAdmin,
      ResetLastUsedValue: ITypedValue,
      AutomaticPermissionsForcedActive: boolean
    ): void;
  }
  declare interface IVaultPropertyDefOperationsAsync {
    AddPropertyDefAdmin(
      PropertyDefAdmin: IPropertyDefAdmin,
      ResetLastUsedValue: ITypedValue,
      successCallback?: (result: IPropertyDefAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetBuiltInPropertyDef(
      PropertyDefType: MFiles$MFBuiltInPropertyDef,
      successCallback?: (result: IPropertyDef) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertyDef(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      successCallback?: (result: IPropertyDef) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertyDefAdmin(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      successCallback?: (result: IPropertyDefAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertyDefIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertyDefIDByGUID(
      PropertyDefGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertyDefs(
      successCallback?: (result: IPropertyDefs) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertyDefsAdmin(
      successCallback?: (result: IPropertyDefsAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    Recalculate(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      RecalculateCurrentlyEmptyValuesOnly: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemovePropertyDefAdmin(
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      CopyToAnotherPropertyDef: boolean,
      TargetPropertyDef: number,
      Append: boolean,
      DeleteFromClassesIfNecessary: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdatePropertyDefAdmin(
      PropertyDefAdmin: IPropertyDefAdmin,
      ResetLastUsedValue: ITypedValue,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdatePropertyDefWithAutomaticPermissionsAdmin(
      PropertyDefAdmin: IPropertyDefAdmin,
      ResetLastUsedValue: ITypedValue,
      AutomaticPermissionsForcedActive: boolean,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultScheduledJobManagementOperations {
    AddScheduledJob(ScheduledJob: IScheduledJob): number;
    CancelScheduledJob(ID: number): void;
    GetScheduledJob(ID: number): IScheduledJob;
    GetScheduledJobRunInfo(ID: number): IScheduledJobRunInfo;
    GetScheduledJobs(): IScheduledJobs;
    ModifyScheduledJob(ScheduledJob: IScheduledJob): void;
    RemoveScheduledJob(ID: number): void;
    StartScheduledJob(ID: number): void;
  }
  declare interface IVaultScheduledJobManagementOperationsAsync {
    AddScheduledJob(
      ScheduledJob: IScheduledJob,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    CancelScheduledJob(
      ID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetScheduledJob(
      ID: number,
      successCallback?: (result: IScheduledJob) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetScheduledJobRunInfo(
      ID: number,
      successCallback?: (result: IScheduledJobRunInfo) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetScheduledJobs(
      successCallback?: (result: IScheduledJobs) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ModifyScheduledJob(
      ScheduledJob: IScheduledJob,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveScheduledJob(
      ID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    StartScheduledJob(
      ID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultServerDataPushOperations {
    CloneVaultForServerDataPush(
      ServerDataPushSink: IServerDataPushSink
    ): IVault;
    SendCancel(RequestID: number): void;
    SendError(RequestID: number, Error: string): void;
    SendHeartbeat(RequestID: number): void;
    SendResponse(RequestID: number, JsonResponseContent: string): void;
    SetServerDataPushSink(ServerDataPushSink: IServerDataPushSink): void;
  }
  declare interface IVaultServerDataPushOperationsAsync {
    CloneVaultForServerDataPush(
      ServerDataPushSink: IServerDataPushSink,
      successCallback?: (result: IVault) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SendCancel(
      RequestID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SendError(
      RequestID: number,
      Error: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SendHeartbeat(
      RequestID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SendResponse(
      RequestID: number,
      JsonResponseContent: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetServerDataPushSink(
      ServerDataPushSink: IServerDataPushSink,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultSharedLinkOperations {
    CreateSharedLink(SharedLinkCreationInfo: ISharedLinkInfo): ISharedLinkInfo;
    DeleteSharedLink(AccessKey: string): void;
    GetSharedLink(AccessKey: string): ISharedLinkInfo;
    GetSharedLinks(CreatedByUser: number): ISharedLinkInfos;
    GetSharedLinksByObject(ObjID: IObjID): ISharedLinkInfos;
  }
  declare interface IVaultSharedLinkOperationsAsync {
    CreateSharedLink(
      SharedLinkCreationInfo: ISharedLinkInfo,
      successCallback?: (result: ISharedLinkInfo) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    DeleteSharedLink(
      AccessKey: string,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetSharedLink(
      AccessKey: string,
      successCallback?: (result: ISharedLinkInfo) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetSharedLinks(
      CreatedByUser: number,
      successCallback?: (result: ISharedLinkInfos) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetSharedLinksByObject(
      ObjID: IObjID,
      successCallback?: (result: ISharedLinkInfos) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultsOnServer {
    +Count: number;
    GetVaultByGUID(GUID: string): IVaultOnServer;
    GetVaultByName(Name: string): IVaultOnServer;
    GetVaultIndexByGUID(GUID: string): number;
    GetVaultIndexByName(Name: string): number;
    Item(Index: number): IVaultOnServer;
  }
  declare interface IVaultTraditionalFolderOperations {
    GetTraditionalFolderContents(Folder: number): ITraditionalFolderContents;
  }
  declare interface IVaultTraditionalFolderOperationsAsync {
    GetTraditionalFolderContents(
      Folder: number,
      successCallback?: (result: ITraditionalFolderContents) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultUI {
    +Events: IVaultUIEvents;
    +Vault: IVault;
    +VaultEntry: IVaultEntry;
    ShowMessage(message: string | IMessage): number;
    ShowPopupDashboard(
      dashboardID: string,
      waitUntilClosed: boolean,
      data: any
    ): void;
  }
  declare type IVaultUIEvents = {
    OnNewVaultEntry?: (vaultEntry: IVaultEntry) => void | IVaultEntryEvents,
    OnStarted?: () => void,
    OnStop?: () => void
  } & IEvents;

  declare interface IVaultUserGroupOperations {
    AddOrUndeleteUserGroup(UserGroup: IUserGroupAdmin): IUserGroupAdmin;
    AddUserGroupAdmin(UserGroup: IUserGroupAdmin): IUserGroupAdmin;
    GetGroupsOfUserOrGroup(
      UserOrGroupID: number,
      IsGroup: boolean
    ): IUserGroups;
    GetUserGroup(UserGroupID: MFiles$MFBuiltInUserGroup | number): IUserGroup;
    GetUserGroupAdmin(
      UserGroupID: MFiles$MFBuiltInUserGroup | number
    ): IUserGroupAdmin;
    GetUserGroupIDByAlias(Alias: string): number;
    GetUserGroupIDByGUID(UserGroupGUID: string): number;
    GetUserGroupList(): IKeyNamePairs;
    GetUserGroups(): IUserGroups;
    GetUserGroupsAdmin(): IUserGroupsAdmin;
    RemoveUserGroupAdmin(UserGroupID: MFiles$MFBuiltInUserGroup | number): void;
    UpdateUserGroupAdmin(UserGroup: IUserGroupAdmin): void;
  }
  declare interface IVaultUserGroupOperationsAsync {
    AddOrUndeleteUserGroup(
      UserGroup: IUserGroupAdmin,
      successCallback?: (result: IUserGroupAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    AddUserGroupAdmin(
      UserGroup: IUserGroupAdmin,
      successCallback?: (result: IUserGroupAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetGroupsOfUserOrGroup(
      UserOrGroupID: number,
      IsGroup: boolean,
      successCallback?: (result: IUserGroups) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserGroup(
      UserGroupID: MFiles$MFBuiltInUserGroup | number,
      successCallback?: (result: IUserGroup) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserGroupAdmin(
      UserGroupID: MFiles$MFBuiltInUserGroup | number,
      successCallback?: (result: IUserGroupAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserGroupIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserGroupIDByGUID(
      UserGroupGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserGroupList(
      successCallback?: (result: IKeyNamePairs) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserGroups(
      successCallback?: (result: IUserGroups) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserGroupsAdmin(
      successCallback?: (result: IUserGroupsAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveUserGroupAdmin(
      UserGroupID: MFiles$MFBuiltInUserGroup | number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateUserGroupAdmin(
      UserGroup: IUserGroupAdmin,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultUserOperations {
    AddOrUndeleteUserAccount(User: IUserAccount): IUserAccount;
    AddUserAccount(User: IUserAccount): IUserAccount;
    GetLoginAccountOfUser(UserID: number): ILoginAccount;
    GetLoginAccounts(): ILoginAccounts;
    GetUserAccount(UserID: number): IUserAccount;
    GetUserAccounts(): IUserAccounts;
    GetUserIDByGUID(UserGUID: string): number;
    GetUserList(): IKeyNamePairs;
    ModifyUserAccount(User: IUserAccount): void;
    RemoveUserAccount(UserID: number): void;
  }
  declare interface IVaultUserOperationsAsync {
    AddOrUndeleteUserAccount(
      User: IUserAccount,
      successCallback?: (result: IUserAccount) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    AddUserAccount(
      User: IUserAccount,
      successCallback?: (result: IUserAccount) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLoginAccountOfUser(
      UserID: number,
      successCallback?: (result: ILoginAccount) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetLoginAccounts(
      successCallback?: (result: ILoginAccounts) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserAccount(
      UserID: number,
      successCallback?: (result: IUserAccount) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserAccounts(
      successCallback?: (result: IUserAccounts) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserIDByGUID(
      UserGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetUserList(
      successCallback?: (result: IKeyNamePairs) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ModifyUserAccount(
      User: IUserAccount,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveUserAccount(
      UserID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultUserSettingOperations {
    ChangeVaultLanguage(Language: number): void;
    GetSubstituteUsers(): IUserOrUserGroupIDs;
    GetVaultLanguage(): number;
    GetVaultLanguageCode(): string;
    SetSubstituteUsers(UserOrUserGroupIDs: IUserOrUserGroupIDs): void;
  }
  declare interface IVaultUserSettingOperationsAsync {
    ChangeVaultLanguage(
      Language: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetSubstituteUsers(
      successCallback?: (result: IUserOrUserGroupIDs) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetVaultLanguage(
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetVaultLanguageCode(
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SetSubstituteUsers(
      UserOrUserGroupIDs: IUserOrUserGroupIDs,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultValueListItemOperations {
    AddValueListItem(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItem: IValueListItem,
      AdministrativeOperation: boolean
    ): IValueListItem;
    ChangeAutomaticPermissionsToACL(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      AccessControlList: IAccessControlList,
      NameForAutomaticPermissions: string,
      CanDeactivate: boolean,
      AutomaticPermissionsOperationOptions: MFiles$MFAutomaticPermissionsOperationOptions
    ): void;
    ChangeAutomaticPermissionsToItemsOwnPermissions(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      CanDeactivate: boolean,
      AutomaticPermissionsOperationOptions: MFiles$MFAutomaticPermissionsOperationOptions
    ): void;
    ChangeAutomaticPermissionsToNamedACL(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      NamedACL: number,
      CanDeactivate: boolean,
      AutomaticPermissionsOperationOptions: MFiles$MFAutomaticPermissionsOperationOptions
    ): void;
    ChangePermissionsToACL(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      AccessControlList: IAccessControlList
    ): void;
    ChangePermissionsToNamedACL(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      NamedACL: number
    ): void;
    ClearAutomaticPermissions(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number
    ): void;
    GetValueListItemByDisplayID(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemDisplayID: string
    ): IValueListItem;
    GetValueListItemByDisplayIDEx(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemDisplayID: string,
      ReplaceCurrentUserWithCallersIdentity: boolean
    ): IValueListItem;
    GetValueListItemByGUID(
      ValueList: MFiles$MFBuiltInValueList | number,
      ItemGUID: string,
      AllowDeletedItems: boolean,
      ReplaceCurrentUserWithCallersIdentity: boolean
    ): IValueListItem;
    GetValueListItemByID(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number
    ): IValueListItem;
    GetValueListItemByIDEx(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      ReplaceCurrentUserWithCallersIdentity: boolean
    ): IValueListItem;
    GetValueListItemIDByGUID(
      ValueList: MFiles$MFBuiltInValueList | number,
      ItemGUID: string,
      AllowDeletedItems: boolean
    ): number;
    GetValueListItems(
      ValueList: MFiles$MFBuiltInValueList | number,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType
    ): IValueListItems;
    GetValueListItemsEx(
      ValueList: MFiles$MFBuiltInValueList | number,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean
    ): IValueListItems;
    GetValueListItemsEx2(
      ValueList: MFiles$MFBuiltInValueList | number,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      PropertyDef: MFiles$MFBuiltInPropertyDef | number
    ): IValueListItems;
    GetValueListItemsWithPermissions(
      ValueList: MFiles$MFBuiltInValueList | number,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      PropertyDef: MFiles$MFBuiltInPropertyDef | number
    ): IValueListItemsWithPermissions;
    RemoveValueListItem(
      ValueList: MFiles$MFBuiltInValueList | number,
      Item: number
    ): void;
    SearchForValueListItemsEx(
      ValueList: MFiles$MFBuiltInValueList | number,
      SearchConditions: ISearchConditions,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean
    ): IValueListItemSearchResults;
    SearchForValueListItemsEx2(
      ValueList: MFiles$MFBuiltInValueList | number,
      SearchConditions: ISearchConditions,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      MaxResults: number
    ): IValueListItemSearchResults;
    SearchForValueListItemsWithPermissions(
      ValueList: MFiles$MFBuiltInValueList | number,
      SearchConditions: ISearchConditions,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      MaxResults: number
    ): IValueListItemSearchResultsWithPermissions;
    UndeleteValueListItem(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number
    ): void;
    UpdateValueListItem(ValueListItem: IValueListItem): void;
  }
  declare interface IVaultValueListItemOperationsAsync {
    AddValueListItem(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItem: IValueListItem,
      AdministrativeOperation: boolean,
      successCallback?: (result: IValueListItem) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ChangeAutomaticPermissionsToACL(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      AccessControlList: IAccessControlList,
      NameForAutomaticPermissions: string,
      CanDeactivate: boolean,
      AutomaticPermissionsOperationOptions: MFiles$MFAutomaticPermissionsOperationOptions,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ChangeAutomaticPermissionsToItemsOwnPermissions(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      CanDeactivate: boolean,
      AutomaticPermissionsOperationOptions: MFiles$MFAutomaticPermissionsOperationOptions,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ChangeAutomaticPermissionsToNamedACL(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      NamedACL: number,
      CanDeactivate: boolean,
      AutomaticPermissionsOperationOptions: MFiles$MFAutomaticPermissionsOperationOptions,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ChangePermissionsToACL(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      AccessControlList: IAccessControlList,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ChangePermissionsToNamedACL(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      NamedACL: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ClearAutomaticPermissions(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemByDisplayID(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemDisplayID: string,
      successCallback?: (result: IValueListItem) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemByDisplayIDEx(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemDisplayID: string,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      successCallback?: (result: IValueListItem) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemByGUID(
      ValueList: MFiles$MFBuiltInValueList | number,
      ItemGUID: string,
      AllowDeletedItems: boolean,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      successCallback?: (result: IValueListItem) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemByID(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      successCallback?: (result: IValueListItem) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemByIDEx(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      successCallback?: (result: IValueListItem) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemIDByGUID(
      ValueList: MFiles$MFBuiltInValueList | number,
      ItemGUID: string,
      AllowDeletedItems: boolean,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItems(
      ValueList: MFiles$MFBuiltInValueList | number,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      successCallback?: (result: IValueListItems) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemsEx(
      ValueList: MFiles$MFBuiltInValueList | number,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      successCallback?: (result: IValueListItems) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemsEx2(
      ValueList: MFiles$MFBuiltInValueList | number,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      successCallback?: (result: IValueListItems) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListItemsWithPermissions(
      ValueList: MFiles$MFBuiltInValueList | number,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      successCallback?: (result: IValueListItemsWithPermissions) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveValueListItem(
      ValueList: MFiles$MFBuiltInValueList | number,
      Item: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForValueListItemsEx(
      ValueList: MFiles$MFBuiltInValueList | number,
      SearchConditions: ISearchConditions,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      successCallback?: (result: IValueListItemSearchResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForValueListItemsEx2(
      ValueList: MFiles$MFBuiltInValueList | number,
      SearchConditions: ISearchConditions,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      MaxResults: number,
      successCallback?: (result: IValueListItemSearchResults) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SearchForValueListItemsWithPermissions(
      ValueList: MFiles$MFBuiltInValueList | number,
      SearchConditions: ISearchConditions,
      UpdateFromServer: boolean,
      RefreshTypeIfExternalValueList: MFiles$MFExternalDBRefreshType,
      ReplaceCurrentUserWithCallersIdentity: boolean,
      PropertyDef: MFiles$MFBuiltInPropertyDef | number,
      MaxResults: number,
      successCallback?: (
        result: IValueListItemSearchResultsWithPermissions
      ) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UndeleteValueListItem(
      ValueList: MFiles$MFBuiltInValueList | number,
      ValueListItemID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateValueListItem(
      ValueListItem: IValueListItem,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultValueListOperations {
    AddValueListAdmin(ValueList: IObjectTypeAdmin): IObjectTypeAdmin;
    GetBuiltInValueList(
      BuiltInValueList: MFiles$MFBuiltInValueList
    ): IObjectType;
    GetValueList(ValueList: MFiles$MFBuiltInValueList | number): IObjectType;
    GetValueListAdmin(
      ValueListID: MFiles$MFBuiltInValueList | number
    ): IObjectTypeAdmin;
    GetValueListIDByAlias(Alias: string): number;
    GetValueListIDByGUID(ValueListGUID: string): number;
    GetValueLists(): IObjectTypes;
    GetValueListsAdmin(): IObjectTypesAdmin;
    RefreshExternalValueList(
      ValueList: MFiles$MFBuiltInValueList | number,
      RefreshType: MFiles$MFExternalDBRefreshType
    ): void;
    RemoveValueListAdmin(ValueListID: MFiles$MFBuiltInValueList | number): void;
    UpdateValueListAdmin(ValueList: IObjectTypeAdmin): IObjectTypeAdmin;
    UpdateValueListWithAutomaticPermissionsAdmin(
      ObjectType: IObjectTypeAdmin,
      AutomaticPermissionsForcedActive: boolean
    ): IObjectTypeAdmin;
  }
  declare interface IVaultValueListOperationsAsync {
    AddValueListAdmin(
      ValueList: IObjectTypeAdmin,
      successCallback?: (result: IObjectTypeAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetBuiltInValueList(
      BuiltInValueList: MFiles$MFBuiltInValueList,
      successCallback?: (result: IObjectType) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueList(
      ValueList: MFiles$MFBuiltInValueList | number,
      successCallback?: (result: IObjectType) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListAdmin(
      ValueListID: MFiles$MFBuiltInValueList | number,
      successCallback?: (result: IObjectTypeAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListIDByGUID(
      ValueListGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueLists(
      successCallback?: (result: IObjectTypes) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetValueListsAdmin(
      successCallback?: (result: IObjectTypesAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RefreshExternalValueList(
      ValueList: MFiles$MFBuiltInValueList | number,
      RefreshType: MFiles$MFExternalDBRefreshType,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveValueListAdmin(
      ValueListID: MFiles$MFBuiltInValueList | number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateValueListAdmin(
      ValueList: IObjectTypeAdmin,
      successCallback?: (result: IObjectTypeAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateValueListWithAutomaticPermissionsAdmin(
      ObjectType: IObjectTypeAdmin,
      AutomaticPermissionsForcedActive: boolean,
      successCallback?: (result: IObjectTypeAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultViewOperations {
    AddOfflineFilter(OfflineFilter: IView): IView;
    AddTemporarySearchView(
      View: IView,
      SearchCriteria: ISearchCriteria,
      BaseSearchConditions: ISearchConditions
    ): IView;
    AddView(View: IView): IView;
    FindPropertyFolderLocationInView(
      View: MFiles$MFBuiltInView | number,
      PropertyFolders: ITypedValues
    ): string;
    GetBuiltInView(BuiltInView: MFiles$MFBuiltInView): IView;
    GetFolderContents(FolderLocation: IFolderDefs): IFolderContentItems;
    GetFolderNameListing(
      ExpressionEx: IExpressionEx,
      SearchConditions: ISearchConditions,
      SearchFlags: MFiles$MFSearchFlags,
      SortResults: boolean
    ): IFolderNameListing;
    GetFolderUIStateForFolder(
      CommonState: boolean,
      FolderLocation: IFolderDefs,
      ObjectFolder: boolean
    ): IFolderUIState;
    GetFolderUIStateForSpecialLocation(
      CommonState: boolean,
      LocationType: MFiles$MFFolderUIStateLocationType
    ): IFolderUIState;
    GetMFilesURLForView(
      ViewID: MFiles$MFBuiltInView | number,
      PropertyFolders: ITypedValues,
      SimpleURL: boolean
    ): string;
    GetPropertyValuesOfFolder(
      FolderLocation: IFolderDefs,
      ObjectType: MFiles$MFBuiltInObjectType | number
    ): IPropertyValues;
    GetPropertyValuesOfPath(
      Path: string,
      ObjectType: MFiles$MFBuiltInObjectType | number
    ): IPropertyValues;
    GetTemporarySearchByPath(RelativePath: string): ITemporarySearchView;
    GetTemporarySearchView(
      ViewID: MFiles$MFBuiltInView | number
    ): ITemporarySearchView;
    GetView(View: MFiles$MFBuiltInView | number): IView;
    GetViewIDByGUID(ViewGUID: string): number;
    GetViewLocationInClient(
      View: MFiles$MFBuiltInView | number,
      IncludeViewNameInPath: boolean
    ): string;
    GetViews(
      ViewCategory: MFiles$MFViewCategory,
      AllViews: boolean,
      ParentView: number
    ): IViews;
    GetViewsAdmin(IncludeCommonViews: boolean, UserID: number): IViews;
    ModifyTemporarySearch(TemporarySearchView: ITemporarySearchView): void;
    RemoveView(View: MFiles$MFBuiltInView | number): void;
    ResetFolderUIStateForFolder(
      ResetToProgramDefaults: boolean,
      ResetToCommonDefaults: boolean,
      FolderLocation: IFolderDefs,
      ObjectFolder: boolean
    ): IFolderUIState;
    ResetFolderUIStateForSpecialLocation(
      ResetToProgramDefaults: boolean,
      ResetToCommonDefaults: boolean,
      LocationType: MFiles$MFFolderUIStateLocationType
    ): IFolderUIState;
    SaveFolderUIStateForFolder(
      SaveAsCommonSettings: boolean,
      ResetCommonSettingsToAllUsers: boolean,
      FolderLocation: IFolderDefs,
      ObjectFolder: boolean,
      State: IFolderUIState
    ): void;
    SaveFolderUIStateForSpecialLocation(
      SaveAsCommonSettings: boolean,
      ResetCommonSettingsToAllUsers: boolean,
      LocationType: MFiles$MFFolderUIStateLocationType,
      State: IFolderUIState
    ): void;
    ShowViewOrPropertyFolder(
      ParentWindow: number,
      View: MFiles$MFBuiltInView | number,
      PropertyFolders: ITypedValues
    ): void;
    UpdateView(View: IView): IView;
  }
  declare interface IVaultViewOperationsAsync {
    AddOfflineFilter(
      OfflineFilter: IView,
      successCallback?: (result: IView) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    AddTemporarySearchView(
      View: IView,
      SearchCriteria: ISearchCriteria,
      BaseSearchConditions: ISearchConditions,
      successCallback?: (result: IView) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    AddView(
      View: IView,
      successCallback?: (result: IView) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    FindPropertyFolderLocationInView(
      View: MFiles$MFBuiltInView | number,
      PropertyFolders: ITypedValues,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetBuiltInView(
      BuiltInView: MFiles$MFBuiltInView,
      successCallback?: (result: IView) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFolderContents(
      FolderLocation: IFolderDefs,
      successCallback?: (result: IFolderContentItems) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFolderNameListing(
      ExpressionEx: IExpressionEx,
      SearchConditions: ISearchConditions,
      SearchFlags: MFiles$MFSearchFlags,
      SortResults: boolean,
      successCallback?: (result: IFolderNameListing) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFolderUIStateForFolder(
      CommonState: boolean,
      FolderLocation: IFolderDefs,
      ObjectFolder: boolean,
      successCallback?: (result: IFolderUIState) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetFolderUIStateForSpecialLocation(
      CommonState: boolean,
      LocationType: MFiles$MFFolderUIStateLocationType,
      successCallback?: (result: IFolderUIState) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetMFilesURLForView(
      ViewID: MFiles$MFBuiltInView | number,
      PropertyFolders: ITypedValues,
      SimpleURL: boolean,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertyValuesOfFolder(
      FolderLocation: IFolderDefs,
      ObjectType: MFiles$MFBuiltInObjectType | number,
      successCallback?: (result: IPropertyValues) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetPropertyValuesOfPath(
      Path: string,
      ObjectType: MFiles$MFBuiltInObjectType | number,
      successCallback?: (result: IPropertyValues) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetTemporarySearchByPath(
      RelativePath: string,
      successCallback?: (result: ITemporarySearchView) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetTemporarySearchView(
      ViewID: MFiles$MFBuiltInView | number,
      successCallback?: (result: ITemporarySearchView) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetView(
      View: MFiles$MFBuiltInView | number,
      successCallback?: (result: IView) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetViewIDByGUID(
      ViewGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetViewLocationInClient(
      View: MFiles$MFBuiltInView | number,
      IncludeViewNameInPath: boolean,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetViews(
      ViewCategory: MFiles$MFViewCategory,
      AllViews: boolean,
      ParentView: number,
      successCallback?: (result: IViews) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetViewsAdmin(
      IncludeCommonViews: boolean,
      UserID: number,
      successCallback?: (result: IViews) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ModifyTemporarySearch(
      TemporarySearchView: ITemporarySearchView,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveView(
      View: MFiles$MFBuiltInView | number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ResetFolderUIStateForFolder(
      ResetToProgramDefaults: boolean,
      ResetToCommonDefaults: boolean,
      FolderLocation: IFolderDefs,
      ObjectFolder: boolean,
      successCallback?: (result: IFolderUIState) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ResetFolderUIStateForSpecialLocation(
      ResetToProgramDefaults: boolean,
      ResetToCommonDefaults: boolean,
      LocationType: MFiles$MFFolderUIStateLocationType,
      successCallback?: (result: IFolderUIState) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SaveFolderUIStateForFolder(
      SaveAsCommonSettings: boolean,
      ResetCommonSettingsToAllUsers: boolean,
      FolderLocation: IFolderDefs,
      ObjectFolder: boolean,
      State: IFolderUIState,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    SaveFolderUIStateForSpecialLocation(
      SaveAsCommonSettings: boolean,
      ResetCommonSettingsToAllUsers: boolean,
      LocationType: MFiles$MFFolderUIStateLocationType,
      State: IFolderUIState,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    ShowViewOrPropertyFolder(
      ParentWindow: number,
      View: MFiles$MFBuiltInView | number,
      PropertyFolders: ITypedValues,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateView(
      View: IView,
      successCallback?: (result: IView) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVaultWorkflowOperations {
    AddWorkflowAdmin(Workflow: IWorkflowAdmin): IWorkflowAdmin;
    GetStateTransitionSignatureSettings(
      FromState: number,
      ToState: number
    ): ISignatureSettings;
    GetStateTransitionSignatureSettingsByID(
      StateTransitionID: number
    ): ISignatureSettings;
    GetWorkflowAdmin(WorkflowID: number): IWorkflowAdmin;
    GetWorkflowForClient(
      WorkflowID: number,
      UpdateFromServer: boolean
    ): IWorkflow;
    GetWorkflowIDByAlias(Alias: string): number;
    GetWorkflowIDByGUID(WorkflowGUID: string): number;
    GetWorkflowsAdmin(): IWorkflowsAdmin;
    GetWorkflowsAsValueListItems(UpdateFromServer: boolean): IValueListItems;
    GetWorkflowsForClient(UpdateFromServer: boolean): IWorkflows;
    GetWorkflowStateIDByAlias(Alias: string): number;
    GetWorkflowStateIDByGUID(StateGUID: string): number;
    GetWorkflowStates(Workflow: number, CurrentState: ITypedValue): IStates;
    GetWorkflowStatesEx(
      Workflow: number,
      CurrentState: ITypedValue,
      ObjVer: IObjVer
    ): IStates;
    GetWorkflowStateTransitionIDByAlias(Alias: string): number;
    GetWorkflowStateTransitionIDByGUID(StateTransitionGUID: string): number;
    GetWorkflowStateTransitions(
      Workflow: number,
      CurrentState: ITypedValue
    ): IStateTransitionsForClient;
    GetWorkflowStateTransitionsAsJSON(
      Workflow: number,
      CurrentState: ITypedValue,
      ObjVer: IObjVer
    ): string;
    GetWorkflowStateTransitionsEx(
      Workflow: number,
      CurrentState: ITypedValue,
      ObjVer: IObjVer
    ): IStateTransitionsForClient;
    RemoveWorkflowAdmin(WorkflowID: number): void;
    UpdateWorkflowAdmin(Workflow: IWorkflowAdmin): IWorkflowAdmin;
  }
  declare interface IVaultWorkflowOperationsAsync {
    AddWorkflowAdmin(
      Workflow: IWorkflowAdmin,
      successCallback?: (result: IWorkflowAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetStateTransitionSignatureSettings(
      FromState: number,
      ToState: number,
      successCallback?: (result: ISignatureSettings) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetStateTransitionSignatureSettingsByID(
      StateTransitionID: number,
      successCallback?: (result: ISignatureSettings) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowAdmin(
      WorkflowID: number,
      successCallback?: (result: IWorkflowAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowForClient(
      WorkflowID: number,
      UpdateFromServer: boolean,
      successCallback?: (result: IWorkflow) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowIDByGUID(
      WorkflowGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowsAdmin(
      successCallback?: (result: IWorkflowsAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowsAsValueListItems(
      UpdateFromServer: boolean,
      successCallback?: (result: IValueListItems) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowsForClient(
      UpdateFromServer: boolean,
      successCallback?: (result: IWorkflows) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStateIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStateIDByGUID(
      StateGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStates(
      Workflow: number,
      CurrentState: ITypedValue,
      successCallback?: (result: IStates) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStatesEx(
      Workflow: number,
      CurrentState: ITypedValue,
      ObjVer: IObjVer,
      successCallback?: (result: IStates) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStateTransitionIDByAlias(
      Alias: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStateTransitionIDByGUID(
      StateTransitionGUID: string,
      successCallback?: (result: number) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStateTransitions(
      Workflow: number,
      CurrentState: ITypedValue,
      successCallback?: (result: IStateTransitionsForClient) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStateTransitionsAsJSON(
      Workflow: number,
      CurrentState: ITypedValue,
      ObjVer: IObjVer,
      successCallback?: (result: string) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    GetWorkflowStateTransitionsEx(
      Workflow: number,
      CurrentState: ITypedValue,
      ObjVer: IObjVer,
      successCallback?: (result: IStateTransitionsForClient) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    RemoveWorkflowAdmin(
      WorkflowID: number,
      successCallback?: () => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
    UpdateWorkflowAdmin(
      Workflow: IWorkflowAdmin,
      successCallback?: (result: IWorkflowAdmin) => void,
      errorCallback?: (
        shorterror: string,
        longerror: string,
        errorobj: any
      ) => void,
      finallyCallback?: () => void
    ): void;
  }
  declare interface IVerifyVaultJob {
    +FixErrors: boolean;
    +VaultGUID: string;
    +VerifyFileContents: boolean;
    Clone(): IVerifyVaultJob;
    GetNumberOfSteps(): number;
    GetOneBasedIndexOfStep(CurrentStep: number): number;
    GetStepProgressText(CurrentStep: number): string;
    Set(
      GuidVault: string,
      FixErrors: boolean,
      VerifyFileContents: boolean
    ): void;
  }
  declare interface IVerifyVaultJobOutput {
    +Errors: IStrings;
  }
  declare interface IVersionComment {
    +LastModifiedBy: IPropertyValue;
    +ObjVer: IObjVer;
    +StatusChanged: IPropertyValue;
    +VersionComment: IPropertyValue;
  }
  declare interface IVersionComments {
    +Count: number;
    Item(Index: number): IVersionComment;
  }
  declare interface IView {
    AccessControlList: IAccessControlList;
    Common: boolean;
    +GUID: string;
    HasParent: boolean;
    ID: number;
    Levels: IExpressionExs;
    LookInAllVersions: boolean;
    Name: string;
    Parent: number;
    ReturnLatestVisibleVersion: boolean;
    SearchConditions: ISearchConditions;
    SearchDef: ISearchDef;
    SearchFlags: MFiles$MFSearchFlags;
    ViewFlags: MFiles$MFViewFlag;
    ViewLocation: IViewLocation;
    ViewType: MFiles$MFViewType;
    Visible: boolean;
    Clone(): IView;
    CloneFrom(View: IView): void;
  }
  declare interface IViewLocation {
    OverlappedFolder: ITypedValue;
    Overlapping: boolean;
    ParentFolder: IFolderDefs;
    Clone(): IViewLocation;
  }
  declare interface IViews {
    +Count: number;
    Item(Index: number): IView;
  }
  declare interface IWeeklyTrigger {
    DaysOfTheWeek: MFiles$MFTriggerWeekDay;
    WeeksInterval: number;
  }
  declare interface IWindow {
    +Events: IWindowEvents;
    +Handle: number;
    Height: number;
    +IsFocused: boolean;
    Maximizable: boolean;
    Minimizable: boolean;
    Resizable: boolean;
    Title: string;
    Width: number;
    Close(): void;
    Focus(): void;
    Maximize(): void;
    Minimize(): void;
    Restore(): void;
    SetDefaultSize(
      defaultWidth: number,
      defaultHeight: number,
      resizeToDefault: boolean
    ): void;
  }
  declare type IWindowEvents = {
    OnCloseWindow?: () => boolean
  } & IEvents;

  declare interface IWorkflow {
    ID: number;
    Name: string;
    ObjectClass:
      | MFiles$MFBuiltInDocumentClass
      | MFiles$MFBuiltInObjectClass
      | number;
    Clone(): IWorkflow;
    GetAsLookup(): ILookup;
    GetAsTypedValue(): ITypedValue;
  }
  declare interface IWorkflowAdmin {
    Description: string;
    Permissions: IAccessControlList;
    SemanticAliases: ISemanticAliases;
    States: IStatesAdmin;
    StateTransitions: IStateTransitions;
    Workflow: IWorkflow;
    Clone(): IWorkflowAdmin;
  }
  declare interface IWorkflowAssignment {
    AssignedTo_DEPRECATED: IPropertyValue;
    CompletedBy_DEPRECATED: IPropertyValue;
    Deadline_DEPRECATED: IPropertyValue;
    Description_DEPRECATED: IPropertyValue;
    MonitoredBy_DEPRECATED: IPropertyValue;
    Clone_DEPRECATED(): IWorkflowAssignment;
  }
  declare interface IWorkflows {
    +Count: number;
    Item(Index: number): IWorkflow;
  }
  declare interface IWorkflowsAdmin {
    +Count: number;
    Add(Index: number, WorkflowAdmin: IWorkflowAdmin): void;
    Item(Index: number): IWorkflowAdmin;
    Remove(Index: number): void;
  }
  declare interface IXMLSearchResult {
    +MoreResults: boolean;
    +SearchResult: string;
  }

  declare var npm$namespace$MFiles: {
    CreateInstance: typeof MFiles$CreateInstance,
    CreateObjectCLR: typeof MFiles$CreateObjectCLR,
    DeleteRegistryKey: typeof MFiles$DeleteRegistryKey,
    DeleteRegistryValue: typeof MFiles$DeleteRegistryValue,
    EnableExceptionPropagation: typeof MFiles$EnableExceptionPropagation,
    ExecuteURL: typeof MFiles$ExecuteURL,
    GetErrorDescription: typeof MFiles$GetErrorDescription,
    GetLongErrorDescription: typeof MFiles$GetLongErrorDescription,
    GetStringResource: typeof MFiles$GetStringResource,
    KillTimer: typeof MFiles$KillTimer,
    LaunchHelp: typeof MFiles$LaunchHelp,
    PersistStringData: typeof MFiles$PersistStringData,
    ReadFromRegistry: typeof MFiles$ReadFromRegistry,
    ReadTextFile: typeof MFiles$ReadTextFile,
    ReportException: typeof MFiles$ReportException,
    RetrieveStringData: typeof MFiles$RetrieveStringData,
    SetTimer: typeof MFiles$SetTimer,
    ThrowError: typeof MFiles$ThrowError,
    WriteToRegistry: typeof MFiles$WriteToRegistry,
    AccessControlEntry: typeof MFiles$AccessControlEntry,
    AccessControlEntryContainer: typeof MFiles$AccessControlEntryContainer,
    AccessControlEntryData: typeof MFiles$AccessControlEntryData,
    AccessControlEntryKey: typeof MFiles$AccessControlEntryKey,
    AccessControlEntryKeys: typeof MFiles$AccessControlEntryKeys,
    AccessControlList: typeof MFiles$AccessControlList,
    AccessControlListComponent: typeof MFiles$AccessControlListComponent,
    AccessControlListComponentContainer: typeof MFiles$AccessControlListComponentContainer,
    AccessControlListComponentKey: typeof MFiles$AccessControlListComponentKey,
    AccessControlListComponentKeys: typeof MFiles$AccessControlListComponentKeys,
    AccessControlLists: typeof MFiles$AccessControlLists,
    ActionConvertToPDF: typeof MFiles$ActionConvertToPDF,
    ActionCreateAssignment: typeof MFiles$ActionCreateAssignment,
    ActionDefinition: typeof MFiles$ActionDefinition,
    ActionDefinitions: typeof MFiles$ActionDefinitions,
    ActionSendNotification: typeof MFiles$ActionSendNotification,
    ActionSetPermissions: typeof MFiles$ActionSetPermissions,
    ActionSetProperties: typeof MFiles$ActionSetProperties,
    AdditionalClassInfo: typeof MFiles$AdditionalClassInfo,
    AdditionalFolder: typeof MFiles$AdditionalFolder,
    AdditionalFolders: typeof MFiles$AdditionalFolders,
    ApprovalAssignmentClassInfo: typeof MFiles$ApprovalAssignmentClassInfo,
    ArchiveOldVersionsJob: typeof MFiles$ArchiveOldVersionsJob,
    AssignmentClassInfo: typeof MFiles$AssignmentClassInfo,
    AssociatedPropertyDef: typeof MFiles$AssociatedPropertyDef,
    AssociatedPropertyDefs: typeof MFiles$AssociatedPropertyDefs,
    AttachVaultOptions: typeof MFiles$AttachVaultOptions,
    AuthenticationResult: typeof MFiles$AuthenticationResult,
    AuthenticationResultIntermediate: typeof MFiles$AuthenticationResultIntermediate,
    AuthenticationResultServerFinal: typeof MFiles$AuthenticationResultServerFinal,
    AuthenticationResultVaultFinal: typeof MFiles$AuthenticationResultVaultFinal,
    AutomaticMetadataResult: typeof MFiles$AutomaticMetadataResult,
    AutomaticPermissions: typeof MFiles$AutomaticPermissions,
    AutomaticValue: typeof MFiles$AutomaticValue,
    BackupJob: typeof MFiles$BackupJob,
    BooleanValue: typeof MFiles$BooleanValue,
    ClassGroup: typeof MFiles$ClassGroup,
    ClassGroups: typeof MFiles$ClassGroups,
    CopyVaultJob: typeof MFiles$CopyVaultJob,
    CopyVaultJobOutputInfo: typeof MFiles$CopyVaultJobOutputInfo,
    CustomApplication: typeof MFiles$CustomApplication,
    CustomApplications: typeof MFiles$CustomApplications,
    DailyTrigger: typeof MFiles$DailyTrigger,
    DataFunctionCall: typeof MFiles$DataFunctionCall,
    DataSet: typeof MFiles$DataSet,
    DataSetExportingStatus: typeof MFiles$DataSetExportingStatus,
    DataSets: typeof MFiles$DataSets,
    DefaultProperties: typeof MFiles$DefaultProperties,
    DefaultProperty: typeof MFiles$DefaultProperty,
    EmailMessageInformation: typeof MFiles$EmailMessageInformation,
    EventHandler: typeof MFiles$EventHandler,
    EventHandlers: typeof MFiles$EventHandlers,
    ExportContentJob: typeof MFiles$ExportContentJob,
    ExportStructureItem: typeof MFiles$ExportStructureItem,
    ExportStructureItems: typeof MFiles$ExportStructureItems,
    Expression: typeof MFiles$Expression,
    ExpressionEx: typeof MFiles$ExpressionEx,
    ExpressionExs: typeof MFiles$ExpressionExs,
    Expressions: typeof MFiles$Expressions,
    FileClass: typeof MFiles$FileClass,
    FileClasses: typeof MFiles$FileClasses,
    FileDownloadSession: typeof MFiles$FileDownloadSession,
    FileInformation: typeof MFiles$FileInformation,
    FileVer: typeof MFiles$FileVer,
    FileVers: typeof MFiles$FileVers,
    FolderContentItem: typeof MFiles$FolderContentItem,
    FolderContentItems: typeof MFiles$FolderContentItems,
    FolderDef: typeof MFiles$FolderDef,
    FolderDefs: typeof MFiles$FolderDefs,
    FolderListingColumn: typeof MFiles$FolderListingColumn,
    FolderListingColumns: typeof MFiles$FolderListingColumns,
    FolderListingColumnSorting: typeof MFiles$FolderListingColumnSorting,
    FolderListingColumnSortings: typeof MFiles$FolderListingColumnSortings,
    FolderListingUIState: typeof MFiles$FolderListingUIState,
    FolderNameListing: typeof MFiles$FolderNameListing,
    FolderUIState: typeof MFiles$FolderUIState,
    IDRange: typeof MFiles$IDRange,
    IDs: typeof MFiles$IDs,
    Impersonation: typeof MFiles$Impersonation,
    ImportContentJob: typeof MFiles$ImportContentJob,
    IndirectPropertyID: typeof MFiles$IndirectPropertyID,
    IndirectPropertyIDLevel: typeof MFiles$IndirectPropertyIDLevel,
    KeyNamePair: typeof MFiles$KeyNamePair,
    KeyNamePairs: typeof MFiles$KeyNamePairs,
    Language: typeof MFiles$Language,
    Languages: typeof MFiles$Languages,
    LicenseStatus: typeof MFiles$LicenseStatus,
    LoginAccount: typeof MFiles$LoginAccount,
    LoginAccountPersonalInformation: typeof MFiles$LoginAccountPersonalInformation,
    LoginAccounts: typeof MFiles$LoginAccounts,
    Lookup: typeof MFiles$Lookup,
    Lookups: typeof MFiles$Lookups,
    MetadataStructureSelector: typeof MFiles$MetadataStructureSelector,
    MetadataStructureSelectors: typeof MFiles$MetadataStructureSelectors,
    MFilesClientApplication: typeof MFiles$MFilesClientApplication,
    MFilesServerApplication: typeof MFiles$MFilesServerApplication,
    MFilesVersion: typeof MFiles$MFilesVersion,
    MFResourceManager: typeof MFiles$MFResourceManager,
    MFShellDocListCtrl: typeof MFiles$MFShellDocListCtrl,
    MonthlyDateTrigger: typeof MFiles$MonthlyDateTrigger,
    MonthlyDOWTrigger: typeof MFiles$MonthlyDOWTrigger,
    NamedACL: typeof MFiles$NamedACL,
    NamedACLAdmin: typeof MFiles$NamedACLAdmin,
    NamedACLs: typeof MFiles$NamedACLs,
    NamedACLsAdmin: typeof MFiles$NamedACLsAdmin,
    NamedValueNamespace: typeof MFiles$NamedValueNamespace,
    NamedValueNamespaces: typeof MFiles$NamedValueNamespaces,
    NamedValues: typeof MFiles$NamedValues,
    Number: typeof MFiles$Number,
    ObjectClass: typeof MFiles$ObjectClass,
    ObjectClassAdmin: typeof MFiles$ObjectClassAdmin,
    ObjectClasses: typeof MFiles$ObjectClasses,
    ObjectClassesAdmin: typeof MFiles$ObjectClassesAdmin,
    ObjectCreationInfo: typeof MFiles$ObjectCreationInfo,
    ObjectFile: typeof MFiles$ObjectFile,
    ObjectFileAndObjVer: typeof MFiles$ObjectFileAndObjVer,
    ObjectFileAndObjVerOfMultipleFiles: typeof MFiles$ObjectFileAndObjVerOfMultipleFiles,
    ObjectFiles: typeof MFiles$ObjectFiles,
    ObjectSearchResults: typeof MFiles$ObjectSearchResults,
    ObjectTypeTargetForBrowsing: typeof MFiles$ObjectTypeTargetForBrowsing,
    ObjectTypeTargetsForBrowsing: typeof MFiles$ObjectTypeTargetsForBrowsing,
    ObjectVersion: typeof MFiles$ObjectVersion,
    ObjectVersionAndProperties: typeof MFiles$ObjectVersionAndProperties,
    ObjectVersionAndPropertiesOfMultipleObjects: typeof MFiles$ObjectVersionAndPropertiesOfMultipleObjects,
    ObjectVersionFile: typeof MFiles$ObjectVersionFile,
    ObjectVersionPermissions: typeof MFiles$ObjectVersionPermissions,
    ObjectVersions: typeof MFiles$ObjectVersions,
    ObjectVersionWorkflowState: typeof MFiles$ObjectVersionWorkflowState,
    ObjectWindowResult: typeof MFiles$ObjectWindowResult,
    ObjID: typeof MFiles$ObjID,
    ObjIDs: typeof MFiles$ObjIDs,
    ObjOrFileVer: typeof MFiles$ObjOrFileVer,
    ObjOrFileVers: typeof MFiles$ObjOrFileVers,
    ObjType: typeof MFiles$ObjType,
    ObjTypeAdmin: typeof MFiles$ObjTypeAdmin,
    ObjTypeColumnMapping: typeof MFiles$ObjTypeColumnMapping,
    ObjTypeColumnMappings: typeof MFiles$ObjTypeColumnMappings,
    ObjTypes: typeof MFiles$ObjTypes,
    ObjTypesAdmin: typeof MFiles$ObjTypesAdmin,
    ObjVer: typeof MFiles$ObjVer,
    ObjVers: typeof MFiles$ObjVers,
    OCROptions: typeof MFiles$OCROptions,
    OCRPage: typeof MFiles$OCRPage,
    OCRPageResult: typeof MFiles$OCRPageResult,
    OCRPageResults: typeof MFiles$OCRPageResults,
    OCRPages: typeof MFiles$OCRPages,
    OCRZone: typeof MFiles$OCRZone,
    OCRZoneResult: typeof MFiles$OCRZoneResult,
    OCRZoneResults: typeof MFiles$OCRZoneResults,
    OCRZones: typeof MFiles$OCRZones,
    OptimizeVaultJob: typeof MFiles$OptimizeVaultJob,
    OwnerPropertyDef: typeof MFiles$OwnerPropertyDef,
    PluginInfo: typeof MFiles$PluginInfo,
    PluginInfos: typeof MFiles$PluginInfos,
    PreviewerActiveXCtrl: typeof MFiles$PreviewerActiveXCtrl,
    PropertyDef: typeof MFiles$PropertyDef,
    PropertyDefAdmin: typeof MFiles$PropertyDefAdmin,
    PropertyDefOrObjectType: typeof MFiles$PropertyDefOrObjectType,
    PropertyDefOrObjectTypes: typeof MFiles$PropertyDefOrObjectTypes,
    PropertyDefs: typeof MFiles$PropertyDefs,
    PropertyDefsAdmin: typeof MFiles$PropertyDefsAdmin,
    PropertyValue: typeof MFiles$PropertyValue,
    PropertyValueForDisplay: typeof MFiles$PropertyValueForDisplay,
    PropertyValueIconClue: typeof MFiles$PropertyValueIconClue,
    PropertyValueIconClues: typeof MFiles$PropertyValueIconClues,
    PropertyValues: typeof MFiles$PropertyValues,
    PropertyValuesForDisplay: typeof MFiles$PropertyValuesForDisplay,
    PropertyValuesOfMultipleObjects: typeof MFiles$PropertyValuesOfMultipleObjects,
    PropertyValueSuggestion: typeof MFiles$PropertyValueSuggestion,
    PropertyValueSuggestions: typeof MFiles$PropertyValueSuggestions,
    PropertyValuesWithIconClues: typeof MFiles$PropertyValuesWithIconClues,
    PropertyValuesWithIconCluesOfMultipleObjects: typeof MFiles$PropertyValuesWithIconCluesOfMultipleObjects,
    ReportAccessCredentials: typeof MFiles$ReportAccessCredentials,
    RestoreJob: typeof MFiles$RestoreJob,
    ScheduledJob: typeof MFiles$ScheduledJob,
    ScheduledJobOutputInfo: typeof MFiles$ScheduledJobOutputInfo,
    ScheduledJobRunInfo: typeof MFiles$ScheduledJobRunInfo,
    ScheduledJobs: typeof MFiles$ScheduledJobs,
    ScheduledJobTrigger: typeof MFiles$ScheduledJobTrigger,
    ScheduledJobTriggers: typeof MFiles$ScheduledJobTriggers,
    SearchCondition: typeof MFiles$SearchCondition,
    SearchConditionEx: typeof MFiles$SearchConditionEx,
    SearchConditionExs: typeof MFiles$SearchConditionExs,
    SearchConditions: typeof MFiles$SearchConditions,
    SearchCriteria: typeof MFiles$SearchCriteria,
    SearchDef: typeof MFiles$SearchDef,
    SemanticAliases: typeof MFiles$SemanticAliases,
    ServerLicenseManagementOperations: typeof MFiles$ServerLicenseManagementOperations,
    ServerLoginAccountOperations: typeof MFiles$ServerLoginAccountOperations,
    ServerManagementOperations: typeof MFiles$ServerManagementOperations,
    ServerScheduledJobManagementOperations: typeof MFiles$ServerScheduledJobManagementOperations,
    ServerVaultManagementOperations: typeof MFiles$ServerVaultManagementOperations,
    SessionInfo: typeof MFiles$SessionInfo,
    SetPropertiesParams: typeof MFiles$SetPropertiesParams,
    SetPropertiesParamsOfMultipleObjects: typeof MFiles$SetPropertiesParamsOfMultipleObjects,
    SharedFileInfo: typeof MFiles$SharedFileInfo,
    SharedLinkInfo: typeof MFiles$SharedLinkInfo,
    SharedLinkInfos: typeof MFiles$SharedLinkInfos,
    SharedLinkPublicOperations: typeof MFiles$SharedLinkPublicOperations,
    ShortcutMappingInfo: typeof MFiles$ShortcutMappingInfo,
    SignaturePromptInfo: typeof MFiles$SignaturePromptInfo,
    SignaturePromptInfoMetadataBased: typeof MFiles$SignaturePromptInfoMetadataBased,
    SignaturePromptInfos: typeof MFiles$SignaturePromptInfos,
    SignaturePromptInfoSelectable: typeof MFiles$SignaturePromptInfoSelectable,
    SignatureSettings: typeof MFiles$SignatureSettings,
    SourceObjectFile: typeof MFiles$SourceObjectFile,
    SourceObjectFiles: typeof MFiles$SourceObjectFiles,
    SQLDatabase: typeof MFiles$SQLDatabase,
    State: typeof MFiles$State,
    StateAdmin: typeof MFiles$StateAdmin,
    StateConditions: typeof MFiles$StateConditions,
    States: typeof MFiles$States,
    StatesAdmin: typeof MFiles$StatesAdmin,
    StateTransition: typeof MFiles$StateTransition,
    StateTransitionForClient: typeof MFiles$StateTransitionForClient,
    StateTransitions: typeof MFiles$StateTransitions,
    StateTransitionsForClient: typeof MFiles$StateTransitionsForClient,
    StringData: typeof MFiles$StringData,
    Strings: typeof MFiles$Strings,
    TaskAssignmentClassInfo: typeof MFiles$TaskAssignmentClassInfo,
    TemporarySearchView: typeof MFiles$TemporarySearchView,
    Timestamp: typeof MFiles$Timestamp,
    TimeZoneInformation: typeof MFiles$TimeZoneInformation,
    TraditionalFolder: typeof MFiles$TraditionalFolder,
    TraditionalFolderContents: typeof MFiles$TraditionalFolderContents,
    TraditionalFolders: typeof MFiles$TraditionalFolders,
    TriggerType: typeof MFiles$TriggerType,
    TypedValue: typeof MFiles$TypedValue,
    TypedValues: typeof MFiles$TypedValues,
    UserAccount: typeof MFiles$UserAccount,
    UserAccounts: typeof MFiles$UserAccounts,
    UserGroup: typeof MFiles$UserGroup,
    UserGroupAdmin: typeof MFiles$UserGroupAdmin,
    UserGroups: typeof MFiles$UserGroups,
    UserGroupsAdmin: typeof MFiles$UserGroupsAdmin,
    UserOrUserGroupID: typeof MFiles$UserOrUserGroupID,
    UserOrUserGroupIDEx: typeof MFiles$UserOrUserGroupIDEx,
    UserOrUserGroupIDExs: typeof MFiles$UserOrUserGroupIDExs,
    UserOrUserGroupIDs: typeof MFiles$UserOrUserGroupIDs,
    Validation: typeof MFiles$Validation,
    ValueListItem: typeof MFiles$ValueListItem,
    ValueListItems: typeof MFiles$ValueListItems,
    ValueListItemSearchResults: typeof MFiles$ValueListItemSearchResults,
    ValueListItemSearchResultsWithPermissions: typeof MFiles$ValueListItemSearchResultsWithPermissions,
    ValueListItemsWithPermissions: typeof MFiles$ValueListItemsWithPermissions,
    Vault: typeof MFiles$Vault,
    VaultAutomaticMetadataOperations: typeof MFiles$VaultAutomaticMetadataOperations,
    VaultClassGroupOperations: typeof MFiles$VaultClassGroupOperations,
    VaultClassOperations: typeof MFiles$VaultClassOperations,
    VaultClientOperations: typeof MFiles$VaultClientOperations,
    VaultConnection: typeof MFiles$VaultConnection,
    VaultConnections: typeof MFiles$VaultConnections,
    VaultCustomApplicationManagementOperations: typeof MFiles$VaultCustomApplicationManagementOperations,
    VaultDataSetOperations: typeof MFiles$VaultDataSetOperations,
    VaultElectronicSignatureOperations: typeof MFiles$VaultElectronicSignatureOperations,
    VaultEventLogOperations: typeof MFiles$VaultEventLogOperations,
    VaultExtensionMethodOperations: typeof MFiles$VaultExtensionMethodOperations,
    VaultExternalObjectOperations: typeof MFiles$VaultExternalObjectOperations,
    VaultLoginAccountOperations: typeof MFiles$VaultLoginAccountOperations,
    VaultManagementOperations: typeof MFiles$VaultManagementOperations,
    VaultNamedACLOperations: typeof MFiles$VaultNamedACLOperations,
    VaultNamedValueStorageOperations: typeof MFiles$VaultNamedValueStorageOperations,
    VaultNotificationOperations: typeof MFiles$VaultNotificationOperations,
    VaultObjectFileOperations: typeof MFiles$VaultObjectFileOperations,
    VaultObjectOperations: typeof MFiles$VaultObjectOperations,
    VaultObjectPropertyOperations: typeof MFiles$VaultObjectPropertyOperations,
    VaultObjectSearchOperations: typeof MFiles$VaultObjectSearchOperations,
    VaultObjectTypeOperations: typeof MFiles$VaultObjectTypeOperations,
    VaultOnServer: typeof MFiles$VaultOnServer,
    VaultProperties: typeof MFiles$VaultProperties,
    VaultPropertyDefOperations: typeof MFiles$VaultPropertyDefOperations,
    VaultScheduledJobManagementOperations: typeof MFiles$VaultScheduledJobManagementOperations,
    VaultServerDataPushOperations: typeof MFiles$VaultServerDataPushOperations,
    VaultSharedLinkOperations: typeof MFiles$VaultSharedLinkOperations,
    VaultsOnServer: typeof MFiles$VaultsOnServer,
    VaultTraditionalFolderOperations: typeof MFiles$VaultTraditionalFolderOperations,
    VaultUserGroupOperations: typeof MFiles$VaultUserGroupOperations,
    VaultUserOperations: typeof MFiles$VaultUserOperations,
    VaultUserSettingOperations: typeof MFiles$VaultUserSettingOperations,
    VaultValueListItemOperations: typeof MFiles$VaultValueListItemOperations,
    VaultValueListOperations: typeof MFiles$VaultValueListOperations,
    VaultViewOperations: typeof MFiles$VaultViewOperations,
    VaultWorkflowOperations: typeof MFiles$VaultWorkflowOperations,
    VerifyVaultJob: typeof MFiles$VerifyVaultJob,
    VerifyVaultJobOutput: typeof MFiles$VerifyVaultJobOutput,
    VersionComment: typeof MFiles$VersionComment,
    VersionComments: typeof MFiles$VersionComments,
    View: typeof MFiles$View,
    ViewLocation: typeof MFiles$ViewLocation,
    Views: typeof MFiles$Views,
    WeeklyTrigger: typeof MFiles$WeeklyTrigger,
    Workflow: typeof MFiles$Workflow,
    WorkflowAdmin: typeof MFiles$WorkflowAdmin,
    WorkflowAssignment: typeof MFiles$WorkflowAssignment,
    Workflows: typeof MFiles$Workflows,
    WorkflowsAdmin: typeof MFiles$WorkflowsAdmin,
    XMLSearchResult: typeof MFiles$XMLSearchResult,
    ApplicationPath: typeof MFiles$ApplicationPath,
    CLSID: typeof MFiles$CLSID,
    CurrentApplicationPlatform: typeof MFiles$CurrentApplicationPlatform,
    BuiltinCommand: typeof MFiles$BuiltinCommand,
    CommandLocation: typeof MFiles$CommandLocation,
    CommandState: typeof MFiles$CommandState,
    DefaultIcon: typeof MFiles$DefaultIcon,
    Event: typeof MFiles$Event,
    ListingEmptinessState: typeof MFiles$ListingEmptinessState,
    MenuLocation: typeof MFiles$MenuLocation,
    MFACLComponentOverrideAccess: typeof MFiles$MFACLComponentOverrideAccess,
    MFACLEnforcingMode: typeof MFiles$MFACLEnforcingMode,
    MFACLMode: typeof MFiles$MFACLMode,
    MFActionType: typeof MFiles$MFActionType,
    MFAdditionalClassInfoType: typeof MFiles$MFAdditionalClassInfoType,
    MFApplicationLicenseStatus: typeof MFiles$MFApplicationLicenseStatus,
    MFAssignmentType: typeof MFiles$MFAssignmentType,
    MFAttachVaultOptionsFlag: typeof MFiles$MFAttachVaultOptionsFlag,
    MFAuthType: typeof MFiles$MFAuthType,
    MFAutomaticPermissionsOperationOptions: typeof MFiles$MFAutomaticPermissionsOperationOptions,
    MFAutomaticValueType: typeof MFiles$MFAutomaticValueType,
    MFAutoStateTransitionMode: typeof MFiles$MFAutoStateTransitionMode,
    MFBackupType: typeof MFiles$MFBackupType,
    MFBuiltInDocumentClass: typeof MFiles$MFBuiltInDocumentClass,
    MFBuiltInMetadataStructureItemID: typeof MFiles$MFBuiltInMetadataStructureItemID,
    MFBuiltInObjectClass: typeof MFiles$MFBuiltInObjectClass,
    MFBuiltInObjectType: typeof MFiles$MFBuiltInObjectType,
    MFBuiltInPropertyDef: typeof MFiles$MFBuiltInPropertyDef,
    MFBuiltInUserGroup: typeof MFiles$MFBuiltInUserGroup,
    MFBuiltInValueList: typeof MFiles$MFBuiltInValueList,
    MFBuiltInView: typeof MFiles$MFBuiltInView,
    MFConditionType: typeof MFiles$MFConditionType,
    MFContentType: typeof MFiles$MFContentType,
    MFCustomApplicationType: typeof MFiles$MFCustomApplicationType,
    MFDataFunction: typeof MFiles$MFDataFunction,
    MFDataType: typeof MFiles$MFDataType,
    MFDBEngine: typeof MFiles$MFDBEngine,
    MFDefaultPropertyType: typeof MFiles$MFDefaultPropertyType,
    MFDependencyRelation: typeof MFiles$MFDependencyRelation,
    MFEmailField: typeof MFiles$MFEmailField,
    MFEmailImportance: typeof MFiles$MFEmailImportance,
    MFEmailSensitivity: typeof MFiles$MFEmailSensitivity,
    MFEventHandlerType: typeof MFiles$MFEventHandlerType,
    MFExportContentFlag: typeof MFiles$MFExportContentFlag,
    MFExpressionType: typeof MFiles$MFExpressionType,
    MFExtApplicationPlatform: typeof MFiles$MFExtApplicationPlatform,
    MFExternalDBRefreshType: typeof MFiles$MFExternalDBRefreshType,
    MFFacetFilterStatusFlags: typeof MFiles$MFFacetFilterStatusFlags,
    MFFacetSearchFlags: typeof MFiles$MFFacetSearchFlags,
    MFFileDataStorage: typeof MFiles$MFFileDataStorage,
    MFFileFormat: typeof MFiles$MFFileFormat,
    MFFileInformationType: typeof MFiles$MFFileInformationType,
    MFFileOpenMethod: typeof MFiles$MFFileOpenMethod,
    MFFileValueType: typeof MFiles$MFFileValueType,
    MFFolderColumnId: typeof MFiles$MFFolderColumnId,
    MFFolderContentItemType: typeof MFiles$MFFolderContentItemType,
    MFFolderDefType: typeof MFiles$MFFolderDefType,
    MFFolderListingAlgorithm: typeof MFiles$MFFolderListingAlgorithm,
    MFFolderListingColumnFlags: typeof MFiles$MFFolderListingColumnFlags,
    MFFolderListingItemGroupingMode: typeof MFiles$MFFolderListingItemGroupingMode,
    MFFolderListingViewMode: typeof MFiles$MFFolderListingViewMode,
    MFFolderUIStateLocationType: typeof MFiles$MFFolderUIStateLocationType,
    MFFormattingType: typeof MFiles$MFFormattingType,
    MFFullTextSearchFlags: typeof MFiles$MFFullTextSearchFlags,
    MFilesURLType: typeof MFiles$MFilesURLType,
    MFImpersonationType: typeof MFiles$MFImpersonationType,
    MFImportContentFlag: typeof MFiles$MFImportContentFlag,
    MFIndirectPropertyIDLevelType: typeof MFiles$MFIndirectPropertyIDLevelType,
    MFLatestSpecificBehavior: typeof MFiles$MFLatestSpecificBehavior,
    MFLicenseType: typeof MFiles$MFLicenseType,
    MFLoginAccountType: typeof MFiles$MFLoginAccountType,
    MFLoginServerRole: typeof MFiles$MFLoginServerRole,
    MFMetadataStructureItem: typeof MFiles$MFMetadataStructureItem,
    MFMetadataStructureSelectorFlags: typeof MFiles$MFMetadataStructureSelectorFlags,
    MFMetadataSyncFormat: typeof MFiles$MFMetadataSyncFormat,
    MFNamedACLType: typeof MFiles$MFNamedACLType,
    MFNamedValueType: typeof MFiles$MFNamedValueType,
    MFObjectAccess: typeof MFiles$MFObjectAccess,
    MFObjectOperationFlags: typeof MFiles$MFObjectOperationFlags,
    MFObjectTypeAccess: typeof MFiles$MFObjectTypeAccess,
    MFObjectVersionFlag: typeof MFiles$MFObjectVersionFlag,
    MFObjectWindowMode: typeof MFiles$MFObjectWindowMode,
    MFObjectWindowResultCode: typeof MFiles$MFObjectWindowResultCode,
    MFOCRDimensionUnit: typeof MFiles$MFOCRDimensionUnit,
    MFOCRLanguage: typeof MFiles$MFOCRLanguage,
    MFOCRZoneRecognitionMode: typeof MFiles$MFOCRZoneRecognitionMode,
    MFOfflineTransitionResultFlags: typeof MFiles$MFOfflineTransitionResultFlags,
    MFOnlineTransitionResultFlags: typeof MFiles$MFOnlineTransitionResultFlags,
    MFParentChildBehavior: typeof MFiles$MFParentChildBehavior,
    MFPermission: typeof MFiles$MFPermission,
    MFPermissionsExpressionType: typeof MFiles$MFPermissionsExpressionType,
    MFPredefinedSearchFilterType: typeof MFiles$MFPredefinedSearchFilterType,
    MFProductMode: typeof MFiles$MFProductMode,
    MFPropertyDefAccess: typeof MFiles$MFPropertyDefAccess,
    MFRelationshipsMode: typeof MFiles$MFRelationshipsMode,
    MFScheduledJobType: typeof MFiles$MFScheduledJobType,
    MFSearchFlags: typeof MFiles$MFSearchFlags,
    MFServerConnection: typeof MFiles$MFServerConnection,
    MFSignaturePromptInfoType: typeof MFiles$MFSignaturePromptInfoType,
    MFSoftwarePlatformType: typeof MFiles$MFSoftwarePlatformType,
    MFSpecialObjectFlag: typeof MFiles$MFSpecialObjectFlag,
    MFStatusType: typeof MFiles$MFStatusType,
    MFStringDataType: typeof MFiles$MFStringDataType,
    MFTriggerMonth: typeof MFiles$MFTriggerMonth,
    MFTriggerType: typeof MFiles$MFTriggerType,
    MFTriggerWeekDay: typeof MFiles$MFTriggerWeekDay,
    MFTriggerWeekOfMonth: typeof MFiles$MFTriggerWeekOfMonth,
    MFUpdateType: typeof MFiles$MFUpdateType,
    MFUserAccountVaultRole: typeof MFiles$MFUserAccountVaultRole,
    MFUserOrUserGroupType: typeof MFiles$MFUserOrUserGroupType,
    MFValidationType: typeof MFiles$MFValidationType,
    MFValueListItemPropertyDef: typeof MFiles$MFValueListItemPropertyDef,
    MFValueListSortingType: typeof MFiles$MFValueListSortingType,
    MFVaultAccess: typeof MFiles$MFVaultAccess,
    MFVaultConnectionTestResult: typeof MFiles$MFVaultConnectionTestResult,
    MFViewCategory: typeof MFiles$MFViewCategory,
    MFViewFlag: typeof MFiles$MFViewFlag,
    MFViewType: typeof MFiles$MFViewType,
    SearchFeature: typeof MFiles$SearchFeature,
    TaskPaneGroup: typeof MFiles$TaskPaneGroup
  };

  declare var MFiles$BuiltinCommand: {|
    +Undefined: 0, // 0
    +FIRST: 1, // 1
    +NewView: 2, // 2
    +NewOfflineFilter: 3, // 3
    +NewTraditionalFolder: 4, // 4
    +NewPropertyFolder: 5, // 5
    +ConvertToDocument: 6, // 6
    +ConvertToDocumentFiles: 7, // 7
    +ImportFilesAndFolders: 8, // 8
    +MakeCopy: 9, // 9
    +CheckOut: 10, // 10
    +CheckIn: 11, // 11
    +CheckInWithComments: 12, // 12
    +UndoCheckOut: 13, // 13
    +Properties: 14, // 14
    +MarkFolderForOfflineAvailability: 15, // 15
    +MarkForOfflineAvailability: 16, // 16
    +RemoveOfflineAvailability: 17, // 17
    +ShowHistory: 18, // 18
    +ShowRelationships: 19, // 19
    +ShowCollectionMembers: 20, // 20
    +ViewEditSubobjects: 21, // 21
    +ShowComments: 22, // 22
    +NewAssignment: 23, // 23
    +ShowAssignments: 24, // 24
    +CompleteAssignment: 25, // 25
    +ChangeState: 26, // 26
    +Workflow: 27, // 27
    +MarkForArchiving: 28, // 28
    +ClearArchiveMarker: 29, // 29
    +Undelete: 30, // 30
    +ConvertToSingleFileDocument: 31, // 31
    +ConvertToOneMultiFileDocument: 32, // 32
    +ReplaceWithFile: 33, // 33
    +GoOnline: 34, // 34
    +GoOffline: 35, // 35
    +LogOut: 36, // 36
    +ClientSettings: 37, // 37
    +ServerAdmin: 38, // 38
    +NotificationSettings: 39, // 39
    +ClearLocalCache: 40, // 40
    +ChangePassword: 41, // 41
    +ChangeLanguage: 42, // 42
    +AddDocumentFromScanner: 43, // 43
    +AddFileFromScanner: 44, // 44
    +ReplaceWithFileFromScanner: 45, // 45
    +ConvertToSearchablePDF: 46, // 46
    +SendLinkByEmail: 47, // 47
    +SendCopyByEmail: 48, // 48
    +SendPDFByEmail: 49, // 49
    +SaveAsPDF: 50, // 50
    +SubstituteUsers: 51, // 51
    +ShowBottomPane: 52, // 52
    +ShowPropertiesPane: 52, // 52
    +ShowRightPane: 53, // 53
    +ShowPreviewPane: 53, // 53
    +GroupObjectsByObjectType: 54, // 54
    +GroupViewsAndFolders: 55, // 55
    +HideView: 56, // 56
    +UnhideView: 57, // 57
    +CleanView: 58, // 58
    +UnhideViews: 59, // 59
    +ResetUISettingsToDefaults: 60, // 60
    +SaveAsCommonUISettings: 61, // 61
    +AddToFavorites: 62, // 62
    +RemoveFromFavorites: 63, // 63
    +CreateOrGetShortcut: 64, // 64
    +CreateShortcut: 65, // 65
    +AddShortcutToTaskPane: 66, // 66
    +AddDashboardToViewLocMain: 67, // 67
    +AddReportToViewLocMain: 67, // 67
    +AddDashboardToViewLocRight: 68, // 68
    +AddReportToViewLocRight: 68, // 68
    +AddDashboardToViewLocBottom: 69, // 69
    +AddReportToViewLocBottom: 69, // 69
    +RemoveDashboardFromViewLocMain: 70, // 70
    +RemoveReportFromViewLocMain: 70, // 70
    +RemoveDashboardFromViewLocRight: 71, // 71
    +RemoveReportFromViewLocRight: 71, // 71
    +RemoveDashboardFromViewLocBottom: 72, // 72
    +RemoveReportFromViewLocBottom: 72, // 72
    +Copy: 73, // 73
    +Cut: 74, // 74
    +Paste: 75, // 75
    +Delete: 76, // 76
    +Rename: 77, // 77
    +NewWindow: 78, // 78
    +ExportObjects: 79, // 79
    +ExportSearchBarConditions: 80, // 80
    +ConvertToSingleFilePDF: 81, // 81
    +ConvertToMultiFilePDF: 82, // 82
    +ChooseColumns: 83, // 83
    +PasteAsMultiFileDocument: 84, // 84
    +SelectAll: 85, // 85
    +InvertSelection: 86, // 86
    +NewObject: 87, // 87
    +Refresh: 88, // 88
    +RollBack: 89, // 89
    +DeleteAll: 90, // 90
    +Destroy: 91, // 91
    +ModifyVersionDetails: 92, // 92
    +LabelThisVersion: 93, // 93
    +NewSubobject: 94, // 94
    +AddCollectionMember: 95, // 95
    +EditCollectionMembership: 96, // 96
    +RemoveCollectionMembership: 97, // 97
    +AddRelationship: 98, // 98
    +EditRelationship: 99, // 99
    +RemoveRelationship: 100, // 100
    +SubMenu_NewObject: 101, // 101
    +SubMenu_NewFile: 102, // 102
    +SubMenu_WindowsCommands: 103, // 103
    +SubMenu_Send: 104, // 104
    +SubMenu_DisplayMode: 105, // 105
    +ChangeViewMode: 106, // 106
    +SubMenu_OfflineAvailability: 107, // 107
    +SubMenu_BrowseRelatedObjects: 108, // 108
    +SubMenu_Archiving: 109, // 109
    +SubMenu_Workflow: 110, // 110
    +SubMenu_ScanningAndOCR: 111, // 111
    +SubMenu_RefreshExtObjects: 112, // 112
    +SubMenu_Dashboards: 113, // 113
    +SubMenu_Reports: 113, // 113
    +GroupObjectsByFirstLetters: 114, // 114
    +GroupFoldersByFirstLetters: 115, // 115
    +AddGroupingLevel: 116, // 116
    +CurrentGroupingLevel: 117, // 117
    +RemoveCurrentGroupingLevel: 118, // 118
    +HideOrShowEmptyFolders: 119, // 119
    +BrowseInThisWindow: 120, // 120
    +GroupBy: 121, // 121
    +GroupFoldersBy: 122, // 122
    +MarkComplete: 123, // 123
    +GoToCustomView: 124, // 124
    +Submenu_VaultX: 125, // 125
    +Submenu_ViewX: 126, // 126
    +Submenu_DocumentX: 127, // 127
    +HitHighlighting: 128, // 128
    +CheckOutForCoauthoring: 129, // 129
    +BeginCoauthoring: 130, // 130
    +EndCoauthoring: 131, // 131
    +ShowOriginalObject: 132, // 132
    +SendCoauthoringLink: 133, // 133
    +ResolveConflictKeepThis: 134, // 134
    +ResolveConflictDiscardThis: 135, // 135
    +Applications: 136, // 136
    +ShareViaSkyDrive: 137, // 137
    +ShareViaSkyDriveAsPDF: 138, // 138
    +ShowMetadataInRightPane: 139, // 139
    +ShowMetadataInBottomPane: 140, // 140
    +MFilesHelp: 141, // 141
    +MFilesGuidedTour: 142, // 142
    +ShowNavigationPane: 143, // 143
    +CustomizePropertyFolder: 144, // 144
    +UncustomizePropertyFolder: 145, // 145
    +UseNormalLayout: 146, // 146
    +UseCompactLayout: 147, // 147
    +RightPane_Normal: 148, // 148
    +RightPane_Minimized: 149, // 149
    +RightPane_Off: 150, // 150
    +BottomPane_Normal: 151, // 151
    +BottomPane_Minimized: 152, // 152
    +BottomPane_Off: 153, // 153
    +NavigationPane_On: 154, // 154
    +NavigationPane_Off: 155, // 155
    +ShowVisualAnnotations: 156, // 156
    +ShowAllVisualAnnotations: 157, // 157
    +HideAllVisualAnnotations: 158, // 158
    +EditOneAnnotation: 159, // 159
    +SaveAnnotation: 160, // 160
    +NewAnnotation: 161, // 161
    +AboutMFiles: 162, // 162
    +MarkApproved: 163, // 163
    +MarkRejected: 164, // 164
    +ApproveAssignment: 165, // 165
    +RejectAssignment: 166, // 166
    +ChangeStateAdmin: 167, // 167
    +SharePublicLink: 168, // 168
    +SharedByMe: 169, // 169
    +UploadFiles: 170, // 170
    +DiscardFileModifications: 171, // 171
    +ShowSearchResultsFromMultipleVaults: 172, // 172
    +ShowSearchRefinementOptions: 173, // 173
    +LAST: 174, // 174
    +ALL: 268435455 // 268435455
  |};

  declare var MFiles$CommandLocation: {|
    +Undefined: 0, // 0
    +MainMenu: 1, // 1
    +ContextMenu: 2, // 2
    +TaskPane: 4, // 4
    +All: 268435455 // 268435455
  |};

  declare var MFiles$CommandState: {|
    +Undefined: 0, // 0
    +Active: 1, // 1
    +Inactive: 2, // 2
    +Hidden: 3 // 3
  |};

  declare var MFiles$DefaultIcon: {|
    +CheckOut: 0, // 0
    +CheckIn: 1, // 1
    +UndoCheckOut: 2, // 2
    +History: 4, // 4
    +Properties: 5, // 5
    +MakeCopy: 6, // 6
    +View: 8, // 8
    +Root: 9, // 9
    +Workflow: 11, // 11
    +LogOut: 12, // 12
    +GoOnline: 13, // 13
    +GoOffline: 14, // 14
    +Assignment: 15, // 15
    +MarkComplete: 16, // 16
    +TraditionalFolder: 17, // 17
    +PropertyFolder: 18, // 18
    +File: 19, // 19
    +MFD: 20, // 20
    +PrivateView: 21, // 21
    +Collection: 22, // 22
    +ChangeState: 24, // 24
    +RelationShips: 25, // 25
    +SelectedState: 26 // 26
  |};

  declare var MFiles$Event: {|
    +Undefined: 0, // 0
    +Notification: 1, // 1
    +Started: 2, // 2
    +Stop: 3, // 3
    +ShowPane: 4, // 4
    +HidePane: 5, // 5
    +PaneResized: 6, // 6
    +NewShellFrame: 7, // 7
    +NewNormalShellFrame: 8, // 8
    +NewCommonDialogShellFrame: 9, // 9
    +NewEmbeddedShellFrame: 10, // 10
    +NewTaskPane: 11, // 11
    +NewBottomPane: 12, // 12
    +NewSearchPane: 13, // 13
    +NewRightPane: 14, // 14
    +NewShellListing: 15, // 15
    +NewCommands: 16, // 16
    +ActiveListingChanged: 17, // 17
    +NewTab: 18, // 18
    +TabSelected: 19, // 19
    +TabUnselected: 20, // 20
    +MinimizedStateChanged: 21, // 21
    +BuiltinCommand: 22, // 22
    +CustomCommand: 23, // 23
    +SelectionChanged: 24, // 24
    +SelectedItemsChanged: 25, // 25
    +ContentChanged: 26, // 26
    +ShowContextMenu: 27, // 27
    +ShowMainMenu: 28, // 28
    +ListingActivated: 29, // 29
    +ListingDeactivated: 30, // 30
    +SearchInitiated: 31, // 31
    +SearchReady: 32, // 32
    +CloseWindow: 33, // 33
    +NewVaultEntry: 34, // 34
    +CreateObject: 35, // 35
    +ObjectCreated: 36, // 36
    +DestroyObject: 37, // 37
    +ObjectDestroyed: 38, // 38
    +DestroyObjects: 39, // 39
    +ObjectsDestroyed: 40, // 40
    +DestroyObjectVersion: 41, // 41
    +ObjectVersionDestroyed: 42, // 42
    +DestroyObjectVersions: 43, // 43
    +ObjectVersionsDestroyed: 44, // 44
    +RemoveObject: 45, // 45
    +ObjectRemoved: 46, // 46
    +RemoveObjects: 47, // 47
    +ObjectsRemoved: 48, // 48
    +UndeleteObject: 49, // 49
    +ObjectUndeleted: 50, // 50
    +UndeleteObjects: 51, // 51
    +ObjectsUndeleted: 52, // 52
    +AddObjectFile: 53, // 53
    +ObjectFileAdded: 54, // 54
    +RemoveObjectFile: 55, // 55
    +ObjectFileRemoved: 56, // 56
    +RenameObjectFile: 57, // 57
    +ObjectFileRenamed: 58, // 58
    +CheckInObject: 59, // 59
    +ObjectCheckedIn: 60, // 60
    +CheckInObjects: 61, // 61
    +ObjectsCheckedIn: 62, // 62
    +CheckOutObject: 63, // 63
    +ObjectCheckedOut: 64, // 64
    +CheckOutObjects: 65, // 65
    +ObjectsCheckedOut: 66, // 66
    +UndoObjectCheckout: 67, // 67
    +ObjectCheckoutUndone: 68, // 68
    +UndoObjectCheckouts: 69, // 69
    +ObjectCheckoutsUndone: 70, // 70
    +RollBackObjectVersion: 71, // 71
    +ObjectVersionRolledBack: 72, // 72
    +SetPropertiesOfObjectVersion: 73, // 73
    +PropertiesOfObjectVersionSet: 74, // 74
    +SetPropertiesOfObjectVersions: 75, // 75
    +PropertiesOfObjectVersionsSet: 76, // 76
    +SetObjectVersionPermissions: 77, // 77
    +ObjectVersionPermissionsSet: 78, // 78
    +AddObjectToFavorites: 79, // 79
    +ObjectAddedToFavorites: 80, // 80
    +AddObjectsToFavorites: 81, // 81
    +ObjectsAddedToFavorites: 82, // 82
    +RemoveObjectFromFavorites: 83, // 83
    +ObjectRemovedFromFavorites: 84, // 84
    +RemoveObjectsFromFavorites: 85, // 85
    +ObjectsRemovedFromFavorites: 86, // 86
    +ModifyObjectVersionLabels: 87, // 87
    +ObjectVersionLabelsModified: 88, // 88
    +SetObjectLevelProperty: 89, // 89
    +ObjectLevelPropertySet: 90, // 90
    +SetObjectOfflineAvailability: 91, // 91
    +RemoveObjectOfflineAvailability: 92, // 92
    +ObjectOfflineAvailabilitySet: 93, // 93
    +ObjectOfflineAvailabilityRemoved: 94, // 94
    +SwitchToOfflineMode: 95, // 95
    +SwitchedToOfflineMode: 96, // 96
    +SwitchToOnlineMode: 97, // 97
    +SwitchedToOnlineMode: 98, // 98
    +LogOut: 99, // 99
    +ChangeVaultLanguage: 100, // 100
    +VaultLanguageChanged: 101, // 101
    +LoggedIn: 102, // 102
    +QueryCanHandleFocusChangeKey: 103, // 103
    +ItemAdded: 104, // 104
    +ItemRemoved: 105, // 105
    +ItemReplaced: 106, // 106
    +ItemMoved: 107, // 107
    +AllItemsCleared: 108, // 108
    +ItemsChanged: 109, // 109
    +ChangeValue: 110, // 110
    +ValueChanged: 111, // 111
    +ChangeValueRequiredStatus: 112, // 112
    +ValueRequiredStatusChanged: 113, // 113
    +ChangeMustExistStatus: 114, // 114
    +MustExistStatusChanged: 115, // 115
    +ChangeReadOnlyStatus: 116, // 116
    +ReadOnlyStatusChanged: 117, // 117
    +AutomaticValueStatusChanged: 118, // 118
    +ChangeVisibility: 119, // 119
    +VisibilityChanged: 120, // 120
    +ChangeLabel: 121, // 121
    +LabelChanged: 122, // 122
    +SetModifyFlag: 123, // 123
    +ModifyFlagChanged: 124, // 124
    +DataError: 125, // 125
    +ValueValidationError: 126, // 126
    +SelectionListItemsUpdated: 127, // 127
    +UpdatingContent: 128, // 128
    +ContentUpdated: 129, // 129
    +InitializingContent: 130, // 130
    +ContentInitialized: 131, // 131
    +PermissionsChanged: 132, // 132
    +IconChanged: 133, // 133
    +FilePreviewInfoUpdated: 134, // 134
    +PopOutMetadataCard: 135, // 135
    +MetadataCardPoppedOut: 136, // 136
    +EnabledStateChanged: 137, // 137
    +HitHighlightingUpdated: 138, // 138
    +RequestActivateView: 139, // 139
    +QueryUIModifiedState: 140, // 140
    +CommitUIModifiedState: 141, // 141
    +OptionValueChanged: 142, // 142
    +NameChanged: 143, // 143
    +ExplanationChanged: 144, // 144
    +ShowTab: 145, // 145
    +HideTab: 146, // 146
    +FocusReceived: 147, // 147
    +FocusLost: 148, // 148
    +MetadataCardLocationChanging: 149, // 149
    +MetadataCardLocationChanged: 150, // 150
    +ValueSuggestionsChanged: 151 // 151
  |};

  declare var MFiles$ListingEmptinessState: {|
    +NotYetKnown: 1, // 1
    +NotEmpty: 2, // 2
    +Empty: 3 // 3
  |};

  declare var MFiles$MenuLocation: {|
    +DefaultCommand: 20, // 20
    +Top: 21, // 21
    +BeforeWindowsCommands: 22, // 22
    +AfterWindowsCommands: 23, // 23
    +ObjectCreation: 24, // 24
    +FileCreation: 25, // 25
    +ObjectOperations: 26, // 26
    +FolderSpecific: 27, // 27
    +SingleFolderSpecific: 28, // 28
    +ViewVisibility: 29, // 29
    +Misc1_Top: 30, // 30
    +Misc1_Middle: 31, // 31
    +Misc1_Bottom: 32, // 32
    +HistorySpecific: 33, // 33
    +RelationshipsSpecific: 34, // 34
    +CollectionMembersSpecific: 35, // 35
    +Deletion: 36, // 36
    +Edit: 37, // 37
    +Misc2_Top: 38, // 38
    +Misc2_Middle: 39, // 39
    +Misc2_Bottom: 40, // 40
    +DocumentConversions: 41, // 41
    +BeforeProperties: 42, // 42
    +Bottom: 43, // 43
    +PropertyFolder: 44 // 44
  |};

  declare var MFiles$MFACLComponentOverrideAccess: {|
    +None: 0, // 0
    +Granted: 1 // 1
  |};

  declare var MFiles$MFACLEnforcingMode: {|
    +Automatic: 0, // 0
    +Provided: 1, // 1
    +ResetToDefault: 2, // 2
    +None: 3 // 3
  |};

  declare var MFiles$MFACLMode: {|
    +Simple: 0, // 0
    +AutomaticPermissionsWithComponents: 1 // 1
  |};

  declare var MFiles$MFActionType: {|
    +Unknown: 0, // 0
    +CreateAssignment: 1 // 1
  |};

  declare var MFiles$MFAdditionalClassInfoType: {|
    +Unknown: 0, // 0
    +Assignment: 1 // 1
  |};

  declare var MFiles$MFApplicationLicenseStatus: {|
    +Unknown: 0, // 0
    +NotNeeded: 1, // 1
    +NotInstalled: 2, // 2
    +Installed: 3, // 3
    +Valid: 4, // 4
    +Invalid: 5, // 5
    +FormatError: 6, // 6
    +Trial: 7, // 7
    +GracePeriod: 8 // 8
  |};

  declare var MFiles$MFAssignmentType: {|
    +Task: 0, // 0
    +Approval: 1 // 1
  |};

  declare var MFiles$MFAttachVaultOptionsFlag: {|
    +None: 0, // 0
    +ExternalObjectTypes: 1, // 1
    +ExternalSources: 2, // 2
    +ExportedDataSets: 4, // 4
    +ExportImportJobs: 8, // 8
    +ExternalUserGroups: 16, // 16
    +EventHandlers: 32 // 32
  |};

  declare var MFiles$MFAuthType: {|
    +Unknown: 0, // 0
    +LoggedOnWindowsUser: 1, // 1
    +SpecificWindowsUser: 2, // 2
    +SpecificMFilesUser: 3 // 3
  |};

  declare var MFiles$MFAutomaticPermissionsOperationOptions: {|
    +None: 0, // 0
    +ForceActive: 1 // 1
  |};

  declare var MFiles$MFAutomaticValueType: {|
    +None: 0, // 0
    +CalculatedWithPlaceholders: 1, // 1
    +CalculatedWithVBScript: 2, // 2
    +AutoNumberSimple: 3, // 3
    +WithVBScript: 4 // 4
  |};

  declare var MFiles$MFAutoStateTransitionMode: {|
    +None: 0, // 0
    +RelativeTime: 1, // 1
    +AssignmentCompleteOne: 2, // 2
    +AssignmentCompleteAll: 3, // 3
    +CriteriaFulfilled: 4, // 4
    +AllowedByScript: 5, // 5
    +AssignmentComplete: 6, // 6
    +AssignmentRejected: 7 // 7
  |};

  declare var MFiles$MFBackupType: {|
    +Full: 0, // 0
    +Differential: 1 // 1
  |};

  declare var MFiles$MFBuiltInDocumentClass: {|
    +UnclassifiedDocument: 0, // 0
    +OtherDocument: 1 // 1
  |};

  declare var MFiles$MFBuiltInMetadataStructureItemID: {|
    +All: -1000000 // -1000000
  |};

  declare var MFiles$MFBuiltInObjectClass: {|
    +Any: -3, // -3
    +NotSet: -2, // -2
    +GenericAssignment: -100 // -100
  |};

  declare var MFiles$MFBuiltInObjectType: {|
    +Document: 0, // 0
    +DocumentCollection: 9, // 9
    +Assignment: 10, // 10
    +DocumentOrDocumentCollection: -102 // -102
  |};

  declare var MFiles$MFBuiltInPropertyDef: {|
    +NameOrTitle: 0, // 0
    +Created: 20, // 20
    +LastModified: 21, // 21
    +SingleFileObject: 22, // 22
    +LastModifiedBy: 23, // 23
    +StatusChanged: 24, // 24
    +CreatedBy: 25, // 25
    +Keywords: 26, // 26
    +Deleted: 27, // 27
    +DeletedBy: 28, // 28
    +VersionLabel: 29, // 29
    +SizeOnServerThisVersion: 30, // 30
    +SizeOnServerAllVersions: 31, // 31
    +MarkedForArchiving: 32, // 32
    +VersionComment: 33, // 33
    +Comment: 33, // 33
    +TraditionalFolder: 34, // 34
    +CreatedFromExternalLocation: 35, // 35
    +AdditionalClasses: 36, // 36
    +IsTemplate: 37, // 37
    +Workflow: 38, // 38
    +State: 39, // 39
    +StateEntered: 40, // 40
    +AssignmentDescription: 41, // 41
    +Deadline: 42, // 42
    +MonitoredBy: 43, // 43
    +AssignedTo: 44, // 44
    +CompletedBy: 45, // 45
    +CollectionMemberDocuments: 46, // 46
    +CollectionMemberCollections: 47, // 47
    +Constituent: 48, // 48
    +OriginalPath: 75, // 75
    +Reference: 76, // 76
    +OriginalPath2: 77, // 77
    +OriginalPath3: 78, // 78
    +WorkflowAssignment: 79, // 79
    +AccessedByMe: 81, // 81
    +FavoriteView: 82, // 82
    +MessageID: 83, // 83
    +InReplyTo: 84, // 84
    +InReplyToReference: 85, // 85
    +SignatureManifestation: 86, // 86
    +ReportURL: 87, // 87
    +ReportPlacement: 88, // 88
    +ObjectChanged: 89, // 89
    +ACLChanged: 90, // 90
    +VersionLabelChanged: 91, // 91
    +VersionCommentChanged: 92, // 92
    +DeletionStatusChanged: 93, // 93
    +VaultGUID: 94, // 94
    +SharedFiles: 95, // 95
    +ConflictResolved: 96, // 96
    +RejectedBy: 97, // 97
    +Completed: 98, // 98
    +StateTransition: 99, // 99
    +Class: 100, // 100
    +ClassGroups: 101, // 101
    +ObjectID: -102 // -102
  |};

  declare var MFiles$MFBuiltInUserGroup: {|
    +Users: 1, // 1
    +AndExternalUsers: 2 // 2
  |};

  declare var MFiles$MFBuiltInValueList: {|
    +Documents: 0, // 0
    +Classes: 1, // 1
    +ClassGroups: 2, // 2
    +VersionLabels: 3, // 3
    +TraditionalFolders: 4, // 4
    +ExternalLocations: 5, // 5
    +Users: 6, // 6
    +Workflows: 7, // 7
    +States: 8, // 8
    +Collections: 9, // 9
    +Assignments: 10, // 10
    +UserGroups: 16, // 16
    +StateTransitions: 17 // 17
  |};

  declare var MFiles$MFBuiltInView: {|
    +CheckedOutToCurrentUser: 5, // 5
    +Offline: 6, // 6
    +RecentlyModifiedByMe: 7, // 7
    +Templates: 8, // 8
    +AssignedToMe: 9, // 9
    +LatestSearches: 11, // 11
    +ByID: 12, // 12
    +BuiltIn: 13, // 13
    +RecentlyAccessedByMe: 14, // 14
    +Favorites: 15, // 15
    +AnyView: -1, // -1
    +OfflineCheckedOut: -9000, // -9000
    +OfflineMarkedForOfflineAvailability: -9001 // -9001
  |};

  declare var MFiles$MFConditionType: {|
    +Equal: 1, // 1
    +NotEqual: 2, // 2
    +GreaterThan: 3, // 3
    +LessThan: 4, // 4
    +GreaterThanOrEqual: 5, // 5
    +LessThanOrEqual: 6, // 6
    +Contains: 7, // 7
    +DoesNotContain: 8, // 8
    +StartsWith: 9, // 9
    +DoesNotStartWith: 10, // 10
    +MatchesWildcardPattern: 11, // 11
    +DoesNotMatchWildcardPattern: 12, // 12
    +IsMissing: 13, // 13
    +IsNotMissing: 14, // 14
    +StartsWithAtWordBoundary: 15, // 15
    +ContainsAnyBitwise: 16, // 16
    +DoesNotContainAnyBitwise: 17 // 17
  |};

  declare var MFiles$MFContentType: {|
    +Generic: 0, // 0
    +EmailAddress: 1, // 1
    +URL: 2, // 2
    +RTF: 3, // 3
    +HTML: 4 // 4
  |};

  declare var MFiles$MFCustomApplicationType: {|
    +Unspecified: 0, // 0
    +Client: 1, // 1
    +Server: 2 // 2
  |};

  declare var MFiles$MFDataFunction: {|
    +NoOp: 0, // 0
    +Year: 1, // 1
    +Month: 2, // 2
    +YearAndMonth: 3, // 3
    +Date: 4, // 4
    +DaysFrom: 5, // 5
    +DaysTo: 6, // 6
    +IntegerSegment: 7, // 7
    +LeftChars: 8, // 8
    +InitialCharGroup: 9 // 9
  |};

  declare var MFiles$MFDataType: {|
    +Uninitialized: 0, // 0
    +Text: 1, // 1
    +Integer: 2, // 2
    +Floating: 3, // 3
    +Date: 5, // 5
    +Time: 6, // 6
    +Timestamp: 7, // 7
    +Boolean: 8, // 8
    +Lookup: 9, // 9
    +MultiSelectLookup: 10, // 10
    +Integer64: 11, // 11
    +FILETIME: 12, // 12
    +MultiLineText: 13, // 13
    +ACL: 14 // 14
  |};

  declare var MFiles$MFDBEngine: {|
    +None: 0, // 0
    +Firebird: 1, // 1
    +MSSQLServer: 2 // 2
  |};

  declare var MFiles$MFDefaultPropertyType: {|
    +Undefined: 0, // 0
    +FixedValue: 1, // 1
    +FromHPDSSXML: 2, // 2
    +FromXML: 3, // 3
    +FromEmail: 4, // 4
    +FromEmailHeader: 5, // 5
    +FromOCR: 6 // 6
  |};

  declare var MFiles$MFDependencyRelation: {|
    +Nothing: 0, // 0
    +AutomaticFilling: 1, // 1
    +Filtering: 2 // 2
  |};

  declare var MFiles$MFEmailField: {|
    +Undefined: 0, // 0
    +From: 1, // 1
    +To: 2, // 2
    +Cc: 3, // 3
    +Subject: 4, // 4
    +Body: 5, // 5
    +Date: 6, // 6
    +Importance: 7, // 7
    +Sensitivity: 8 // 8
  |};

  declare var MFiles$MFEmailImportance: {|
    +Low: 0, // 0
    +Normal: 1, // 1
    +High: 2 // 2
  |};

  declare var MFiles$MFEmailSensitivity: {|
    +None: 0, // 0
    +Normal: 1, // 1
    +Personal: 2, // 2
    +Private: 3, // 3
    +Confidential: 4 // 4
  |};

  declare var MFiles$MFEventHandlerType: {|
    +TypeUndefined: 0, // 0
    +BeforeSetProperties: 1, // 1
    +AfterSetProperties: 2, // 2
    +AfterCreateNewObjectFinalize: 3, // 3
    +BeforeCheckInChanges: 4, // 4
    +AfterCheckInChanges: 5, // 5
    +BeforeCheckOut: 6, // 6
    +AfterCheckOut: 7, // 7
    +BeforeCancelCheckout: 8, // 8
    +AfterCancelCheckout: 9, // 9
    +BeforeDeleteObject: 10, // 10
    +AfterDeleteObject: 11, // 11
    +BeforeDestroyObject: 12, // 12
    +AfterDestroyObject: 13, // 13
    +BeforeSetObjectPermissions: 14, // 14
    +AfterSetObjectPermissions: 15, // 15
    +BeforeFileUpload: 16, // 16
    +AfterFileUpload: 17, // 17
    +BeforeFileDownload: 18, // 18
    +AfterFileDownload: 19, // 19
    +BeforeCreateNewValueListItem: 20, // 20
    +AfterCreateNewValueListItem: 21, // 21
    +BeforeLoginToVault: 22, // 22
    +AfterLoginToVault: 23, // 23
    +BeforeLogoutFromVault: 24, // 24
    +AfterLogoutFromVault: 25, // 25
    +BeforeRunScheduledJob: 26, // 26
    +AfterRunScheduledJob: 27, // 27
    +BeforeCreateNewObjectFinalize: 28, // 28
    +BeforeCancelCreateObject: 29, // 29
    +AfterCancelCreateObject: 30, // 30
    +BeforeDestroyObjectVersion: 31, // 31
    +AfterDestroyObjectVersion: 32, // 32
    +Replication_AfterCreateNewObjectFinalize: 33, // 33
    +Replication_AfterCheckInChanges: 34, // 34
    +VaultExtensionMethod: 35, // 35
    +BeforeCreateLoginAccount: 36, // 36
    +AfterCreateLoginAccount: 37, // 37
    +BeforeModifyLoginAccount: 38, // 38
    +AfterModifyLoginAccount: 39, // 39
    +BeforeRemoveLoginAccount: 40, // 40
    +AfterRemoveLoginAccount: 41, // 41
    +BeforeCreateUserAccount: 42, // 42
    +AfterCreateUserAccount: 43, // 43
    +BeforeModifyUserAccount: 44, // 44
    +AfterModifyUserAccount: 45, // 45
    +BeforeRemoveUserAccount: 46, // 46
    +AfterRemoveUserAccount: 47, // 47
    +BeforeCreateUserGroup: 48, // 48
    +AfterCreateUserGroup: 49, // 49
    +BeforeModifyUserGroup: 50, // 50
    +AfterModifyUserGroup: 51, // 51
    +BeforeRemoveUserGroup: 52, // 52
    +AfterRemoveUserGroup: 53, // 53
    +AfterBringOnline: 54, // 54
    +BeforeTakeOffline: 55, // 55
    +AfterCheckInChangesFinalize: 56, // 56
    +AfterBeginTransaction: 57, // 57
    +BeforeCommitTransaction: 58, // 58
    +BeforeRollbackTransaction: 59, // 59
    +AfterCancelCheckoutFinalize: 60, // 60
    +BeforeUndeleteObject: 61, // 61
    +AfterUndeleteObject: 62, // 62
    +AfterUndeleteObjectFinalize: 63, // 63
    +BeforeModifyMFilesCredentials: 64, // 64
    +AfterModifyMFilesCredentials: 65, // 65
    +BeforeReturnView: 66, // 66
    +BeforeCheckInChangesFinalize: 67, // 67
    +BeforeCreateView: 68, // 68
    +AfterCreateView: 69, // 69
    +BeforeModifyView: 70, // 70
    +AfterModifyView: 71, // 71
    +BeforeDeleteView: 72, // 72
    +AfterDeleteView: 73 // 73
  |};

  declare var MFiles$MFExportContentFlag: {|
    +None: 0, // 0
    +LatestVersionsOnly: 2, // 2
    +DestroyAfterExport: 4, // 4
    +ClearArchivalMarker: 8, // 8
    +SaveFilesAlsoAsPDFA: 32, // 32
    +ExportInformationOnDestroyedData: 64, // 64
    +UseMultipleContentPackages: 128, // 128
    +IndicateDropouts: 1024 // 1024
  |};

  declare var MFiles$MFExpressionType: {|
    +Uninitialized: 0, // 0
    +PropertyValue: 1, // 1
    +ObjectIDSegment: 2, // 2
    +StatusValue: 3, // 3
    +FileValue: 4, // 4
    +TypedValue: 5, // 5
    +AnyField: 6, // 6
    +Permissions: 7 // 7
  |};

  declare var MFiles$MFExtApplicationPlatform: {|
    +None: 0, // 0
    +Desktop: 1, // 1
    +Web: 2 // 2
  |};

  declare var MFiles$MFExternalDBRefreshType: {|
    +None: 0, // 0
    +Quick: 1, // 1
    +Full: 2 // 2
  |};

  declare var MFiles$MFFacetFilterStatusFlags: {|
    +None: 0, // 0
    +Available: 1, // 1
    +Applied: 2 // 2
  |};

  declare var MFiles$MFFacetSearchFlags: {|
    +None: 0, // 0
    +IgnoreSearchPermissions: 2, // 2
    +IgnoreFacetGroupPermissions: 4, // 4
    +IgnoreFacetValuePermissions: 8, // 8
    +SortFacetValues: 16, // 16
    +AscendingOrder: 32, // 32
    +OverrideByConfiguration: 64 // 64
  |};

  declare var MFiles$MFFileDataStorage: {|
    +Default: 0, // 0
    +Disk: 1, // 1
    +DB: 2, // 2
    +External: 3 // 3
  |};

  declare var MFiles$MFFileFormat: {|
    +Native: 0, // 0
    +PDF: 1, // 1
    +DisplayOnlyPDF: 2 // 2
  |};

  declare var MFiles$MFFileInformationType: {|
    +Unknown: 0, // 0
    +EmailMessage: 1 // 1
  |};

  declare var MFiles$MFFileOpenMethod: {|
    +ShowInShell: 0, // 0
    +Open: 1, // 1
    +View: 2, // 2
    +Edit: 3 // 3
  |};

  declare var MFiles$MFFileValueType: {|
    +HasFiles: 0, // 0
    +FileName: 1, // 1
    +FileSize: 2, // 2
    +FileID: 3, // 3
    +CreationTime: 4, // 4
    +ChangeTime: 5, // 5
    +LinkedToExtLoc: 6, // 6
    +LinkedToExtLocID: 7 // 7
  |};

  declare var MFiles$MFFolderColumnId: {|
    +Name: -1, // -1
    +Type: -2, // -2
    +Size: -3, // -3
    +Status: -4, // -4
    +CheckoutTo: -5, // -5
    +CheckOutAt: -6, // -6
    +ObjectDispId: -7, // -7
    +ObjectVersion: -8, // -8
    +ShStatusChanged: -9, // -9
    +ShLastModifiedBy: -10, // -10
    +Location: -11, // -11
    +RelLocation: -12, // -12
    +DateCreated: -13, // -13
    +DateModified: -14, // -14
    +Score: -15, // -15
    +RelationshipDesc: -16, // -16
    +HasRelationships: -17, // -17
    +RelationshipTargetVer: -18, // -18
    +ObjectType: -19, // -19
    +ObjectPermissions: -20, // -20
    +TypeEx: -21, // -21
    +HasAssignments: -22, // -22
    +ExportedFile: -1000000, // -1000000
    +IdSegment: -1000001 // -1000001
  |};

  declare var MFiles$MFFolderContentItemType: {|
    +Unknown: 0, // 0
    +ViewFolder: 1, // 1
    +PropertyFolder: 2, // 2
    +TraditionalFolder: 3, // 3
    +ObjectVersion: 4 // 4
  |};

  declare var MFiles$MFFolderDefType: {|
    +Unknown: 0, // 0
    +AnyFolder: 1, // 1
    +ViewFolder: 2, // 2
    +PropertyFolder: 3, // 3
    +TraditionalFolder: 4, // 4
    +SearchFolder: 5 // 5
  |};

  declare var MFiles$MFFolderListingAlgorithm: {|
    +None: 0, // 0
    +TestEachValue: 1, // 1
    +GetValuesByDistinctUse: 2, // 2
    +TestEachValueWithSeparateQueries: 3 // 3
  |};

  declare var MFiles$MFFolderListingColumnFlags: {|
    +SelectIfLeftOfSelectedMainColumn: 1, // 1
    +HideColumnText: 2 // 2
  |};

  declare var MFiles$MFFolderListingItemGroupingMode: {|
    +Unspecified: -1, // -1
    +NoGrouping: 0, // 0
    +GroupObjectsByObjectType: 1, // 1
    +GroupViewsAndFoldersByType: 1024 // 1024
  |};

  declare var MFiles$MFFolderListingViewMode: {|
    +Icon: 1, // 1
    +SmallIcon: 2, // 2
    +List: 3, // 3
    +Details: 4, // 4
    +Thumbnail: 5, // 5
    +Tile: 6, // 6
    +Thumbstrip: 7, // 7
    +Content: 8 // 8
  |};

  declare var MFiles$MFFolderUIStateLocationType: {|
    +Unknown: 0, // 0
    +RootFolder: 1, // 1
    +ViewFoldersContainer: 2, // 2
    +PropertyFoldersContainer: 3, // 3
    +ObjectsContainer: 4, // 4
    +ObjectFilesContainer: 5, // 5
    +TraditionalFolder: 6, // 6
    +SearchResultsContainer: 7, // 7
    +HistoryUI: 8, // 8
    +RelationshipsUIFromTab: 9, // 9
    +CollectionMembersUI: 10, // 10
    +SubobjectsUI: 11, // 11
    +ClearLocalCacheUI: 12, // 12
    +RelationshipsUIToTab: 13, // 13
    +RelationshipsUIAllTab: 14, // 14
    +LocalTemporaryItemsContainer: 15 // 15
  |};

  declare var MFiles$MFFormattingType: {|
    +None: 0 // 0
  |};

  declare var MFiles$MFFullTextSearchFlags: {|
    +None: 0, // 0
    +Stemming: 4, // 4
    +TypeAllWords: 131072, // 131072
    +TypeAnyWords: 262144, // 262144
    +LookInMetaData: 268435456, // 268435456
    +LookInFileData: 536870912 // 536870912
  |};

  declare var MFiles$MFilesURLType: {|
    +Show: 0, // 0
    +Open: 1, // 1
    +View: 2, // 2
    +Edit: 3, // 3
    +ShowMetadata: 6 // 6
  |};

  declare var MFiles$MFImpersonationType: {|
    +LocalSystem: 0, // 0
    +SpecificAccount: 1, // 1
    +ExtAccount: 2 // 2
  |};

  declare var MFiles$MFImportContentFlag: {|
    +None: 0, // 0
    +UseMultipleContentPackages: 1, // 1
    +DeleteContentPackage: 4, // 4
    +ImportCheckoutStates: 16, // 16
    +ResetExportTimestamps: 32, // 32
    +DoNotImportObjectDestructions: 64, // 64
    +UseNamesAsAliases: 128, // 128
    +ForceNoStructureIdUpdate: 16384, // 16384
    +OmitDoneFile: 32768 // 32768
  |};

  declare var MFiles$MFIndirectPropertyIDLevelType: {|
    +PropertyDef: 0, // 0
    +ObjectType: 1, // 1
    +StateChanger: 2 // 2
  |};

  declare var MFiles$MFLatestSpecificBehavior: {|
    +Normal: 0, // 0
    +Specific: 1, // 1
    +Latest: 2, // 2
    +Automatic: 3 // 3
  |};

  declare var MFiles$MFLicenseType: {|
    +None: 0, // 0
    +NamedUserLicense: 1, // 1
    +ConcurrentUserLicense: 2, // 2
    +ReadOnlyLicense: 3 // 3
  |};

  declare var MFiles$MFLoginAccountType: {|
    +MFiles: 1, // 1
    +Windows: 2 // 2
  |};

  declare var MFiles$MFLoginServerRole: {|
    +None: 0, // 0
    +SystemAdministrator: 1, // 1
    +VaultCreator: 2, // 2
    +BackupOperator: 4, // 4
    +LogIn: 8 // 8
  |};

  declare var MFiles$MFMetadataStructureItem: {|
    +None: 0, // 0
    +ObjectType: 1, // 1
    +PropertyDef: 2, // 2
    +Class: 3, // 3
    +Workflow: 4, // 4
    +State: 5, // 5
    +NamedACL: 6, // 6
    +User: 7, // 7
    +UserGroup: 8, // 8
    +ClassGroup: 9, // 9
    +ViewDef: 10, // 10
    +ValueListItem: 13, // 13
    +ValueList: 14, // 14
    +VaultEventHandler: 15, // 15
    +StateTransition: 16, // 16
    +All: 10000 // 10000
  |};

  declare var MFiles$MFMetadataStructureSelectorFlags: {|
    +None: 0, // 0
    +SelectNew: 1, // 1
    +SelectExisting: 2, // 2
    +IncludeNewDependencies: 4, // 4
    +IncludeExistingDependencies: 8 // 8
  |};

  declare var MFiles$MFMetadataSyncFormat: {|
    +Word: 0, // 0
    +Excel: 1, // 1
    +PowerPoint: 2 // 2
  |};

  declare var MFiles$MFNamedACLType: {|
    +None: 0, // 0
    +Normal: 1, // 1
    +Internal: 2 // 2
  |};

  declare var MFiles$MFNamedValueType: {|
    +ConfigurationValue: 3, // 3
    +UserDefinedValue: 4, // 4
    +RegistryValue: 5, // 5
    +FolderConfiguration: 6, // 6
    +AdminConfiguration: 7, // 7
    +SystemAdminConfiguration: 8 // 8
  |};

  declare var MFiles$MFObjectAccess: {|
    +None: 0, // 0
    +Read: 1, // 1
    +Edit: 2, // 2
    +ChangePermissions: 4, // 4
    +Delete: 8, // 8
    +AttachObjects: 16 // 16
  |};

  declare var MFiles$MFObjectOperationFlags: {|
    +None: 0, // 0
    +RequireReadAccess: 1, // 1
    +RequireEditAccess: 2, // 2
    +DisallowNameChange: 4, // 4
    +RequireChangeSecurityAccess: 8, // 8
    +RequireFullAccess: 16, // 16
    +ChangeACLInAllVersions: 32, // 32
    +RequireSomeAccess: 64 // 64
  |};

  declare var MFiles$MFObjectTypeAccess: {|
    +None: 0, // 0
    +SeeName: 1, // 1
    +AddNewItems: 2 // 2
  |};

  declare var MFiles$MFObjectVersionFlag: {|
    +None: 0, // 0
    +Completed: 1, // 1
    +HasRelatedObjects: 2 // 2
  |};

  declare var MFiles$MFObjectWindowMode: {|
    +Insert: 0, // 0
    +InsertSourceFiles: 1, // 1
    +InsertSaveAsType: 2, // 2
    +Edit: 3, // 3
    +EditApplicationModal: 4 // 4
  |};

  declare var MFiles$MFObjectWindowResultCode: {|
    +Ok: 0, // 0
    +Cancel: 1, // 1
    +OkToAll: 2, // 2
    +SkipThis: 3 // 3
  |};

  declare var MFiles$MFOCRDimensionUnit: {|
    +Pixel: 0, // 0
    +MillimeterX10: 1, // 1
    +InchX100: 2 // 2
  |};

  declare var MFiles$MFOCRLanguage: {|
    +None: 0, // 0
    +Neutral: 1, // 1
    +NumbersOnly: 2, // 2
    +EnglishUS: 3, // 3
    +EnglishBr: 4, // 4
    +German: 5, // 5
    +French: 6, // 6
    +Spanish: 7, // 7
    +Italian: 8, // 8
    +Finnish: 9, // 9
    +Swedish: 10, // 10
    +Danish: 11, // 11
    +Norwegian: 12, // 12
    +Nynorsk: 13, // 13
    +Estonian: 14, // 14
    +Latvian: 15, // 15
    +Lithuanian: 16, // 16
    +Dutch: 17, // 17
    +Portuguese: 18, // 18
    +Brazilian: 19, // 19
    +Galician: 20, // 20
    +Icelandic: 21, // 21
    +Greek: 22, // 22
    +Czech: 23, // 23
    +Hungarian: 24, // 24
    +Polish: 25, // 25
    +Romanian: 26, // 26
    +Slovak: 27, // 27
    +Croatian: 28, // 28
    +Serbian: 29, // 29
    +Slovenian: 30, // 30
    +Luxembourgish: 31, // 31
    +SwissGerman: 32, // 32
    +Turkish: 33, // 33
    +Russian: 34, // 34
    +ByeloRussian: 35, // 35
    +Ukrainian: 36, // 36
    +Macedonian: 37, // 37
    +Bulgarian: 38, // 38
    +Afrikaans: 39, // 39
    +Albanian: 40, // 40
    +Catalan: 41, // 41
    +IrishGaelic: 42, // 42
    +ScottishGaelic: 43, // 43
    +Welsh: 44, // 44
    +Basque: 45, // 45
    +Mexican: 46 // 46
  |};

  declare var MFiles$MFOCRZoneRecognitionMode: {|
    +NoZoneRecognition: 0, // 0
    +RecognizeSpecifiedZones: 1, // 1
    +AutoDetectZones: 2 // 2
  |};

  declare var MFiles$MFOfflineTransitionResultFlags: {|
    +None: 0, // 0
    +StatusChanged: 1, // 1
    +LoggedOut: 2 // 2
  |};

  declare var MFiles$MFOnlineTransitionResultFlags: {|
    +None: 0, // 0
    +StatusChanged: 1 // 1
  |};

  declare var MFiles$MFParentChildBehavior: {|
    +None: 0, // 0
    +IncludeChildValues: 1, // 1
    +IncludeParentValues: 2 // 2
  |};

  declare var MFiles$MFPermission: {|
    +Deny: 0, // 0
    +Allow: 1, // 1
    +NotSet: 2 // 2
  |};

  declare var MFiles$MFPermissionsExpressionType: {|
    +ACL: 0, // 0
    +VisibleTo: 1, // 1
    +EditableBy: 2, // 2
    +PermissionsChangeableBy: 3, // 3
    +FullControlBy: 4, // 4
    +DeletableBy: 5, // 5
    +ObjectsAttachableToThisItemBy: 6 // 6
  |};

  declare var MFiles$MFPredefinedSearchFilterType: {|
    +Unspecified: 0, // 0
    +ObjectType: 1, // 1
    +DocumentsModifiedToday: 30000, // 30000
    +DocumentsModifiedLastWeek: 30001, // 30001
    +DocumentsModifiedLastMonth: 30002, // 30002
    +DocumentsModifiedLastYear: 30003, // 30003
    +DocumentsAccessedByMeToday: 30004, // 30004
    +DocumentsAccessedByMeLastWeek: 30005, // 30005
    +DocumentsAccessedByMeLastMonth: 30006, // 30006
    +DocumentsAccessedByMeLastYear: 30007 // 30007
  |};

  declare var MFiles$MFProductMode: {|
    +Full: 0, // 0
    +Express: 1, // 1
    +Business: 2 // 2
  |};

  declare var MFiles$MFPropertyDefAccess: {|
    +None: 0, // 0
    +See: 1, // 1
    +Edit: 2 // 2
  |};

  declare var MFiles$MFRelationshipsMode: {|
    +FromThisObject: 1, // 1
    +ToThisObject: 2, // 2
    +All: 3 // 3
  |};

  declare var MFiles$MFScheduledJobType: {|
    +Uninitialized: 0, // 0
    +Backup: 1, // 1
    +Restore: 2, // 2
    +CopyVault: 3, // 3
    +VerifyVault: 4, // 4
    +ExportContent: 5, // 5
    +ArchiveOldVersions: 6, // 6
    +ImportContent: 7, // 7
    +OptimizeVault: 8, // 8
    +Recalculate: 9, // 9
    +MigrateVault: 10 // 10
  |};

  declare var MFiles$MFSearchFlags: {|
    +None: 0, // 0
    +LookInAllVersions: 1, // 1
    +ReturnLatestVisibleVersion: 2, // 2
    +LookAllObjectTypes: 4, // 4
    +DisableRelevancyRanking: 16 // 16
  |};

  declare var MFiles$MFServerConnection: {|
    +uthenticated: 1, // 1
    +nonymous: 2 // 2
  |};

  declare var MFiles$MFSignaturePromptInfoType: {|
    +Fixed: 0, // 0
    +Selectable: 1, // 1
    +MetadataBased: 2 // 2
  |};

  declare var MFiles$MFSoftwarePlatformType: {|
    +Win32: 0, // 0
    +X64: 1 // 1
  |};

  declare var MFiles$MFSpecialObjectFlag: {|
    +None: 0, // 0
    +Shortcut: 1, // 1
    +Deleted: 2, // 2
    +RecentlyAccessedByValid: 4, // 4
    +HasSharedFiles: 8, // 8
    +Conflict: 16, // 16
    +Normal: 64 // 64
  |};

  declare var MFiles$MFStatusType: {|
    +CheckedOut: 0, // 0
    +CheckedOutTo: 1, // 1
    +CheckedOutAt: 2, // 2
    +ObjectID: 3, // 3
    +ObjectVersionID: 4, // 4
    +Deleted: 5, // 5
    +ObjectTypeID: 6, // 6
    +IsLatestCheckedInVersion: 7, // 7
    +ExtID: 8, // 8
    +LatestOrSpecific: 9, // 9
    +ObjectTypeAndID: 10, // 10
    +ObjectFlags: 11, // 11
    +OriginalVaultGUID: 12, // 12
    +OriginalObjectType: 13, // 13
    +OriginalObjectID: 14, // 14
    +OriginalObjectIDSegment: 15 // 15
  |};

  declare var MFiles$MFStringDataType: {|
    +JSON: 0, // 0
    +XML: 1 // 1
  |};

  declare var MFiles$MFTriggerMonth: {|
    +January: 1, // 1
    +February: 2, // 2
    +March: 4, // 4
    +April: 8, // 8
    +May: 16, // 16
    +June: 32, // 32
    +July: 64, // 64
    +August: 128, // 128
    +September: 256, // 256
    +October: 512, // 512
    +November: 1024, // 1024
    +December: 2048, // 2048
    +EveryMonth: 4095 // 4095
  |};

  declare var MFiles$MFTriggerType: {|
    +Once: 0, // 0
    +Daily: 1, // 1
    +Weekly: 2, // 2
    +MonthlyDate: 3, // 3
    +MonthlyDOW: 4 // 4
  |};

  declare var MFiles$MFTriggerWeekDay: {|
    +Sunday: 1, // 1
    +Monday: 2, // 2
    +Tuesday: 4, // 4
    +Wednesday: 8, // 8
    +Thursday: 16, // 16
    +Friday: 32, // 32
    +Saturday: 64, // 64
    +EveryDay: 125 // 125
  |};

  declare var MFiles$MFTriggerWeekOfMonth: {|
    +FirstWeek: 1, // 1
    +SecondWeek: 2, // 2
    +ThirdWeek: 3, // 3
    +FourthWeek: 4, // 4
    +LastWeek: 5 // 5
  |};

  declare var MFiles$MFUpdateType: {|
    +Normal: 0, // 0
    +ServerAuto: 1, // 1
    +ClientAuto: 2 // 2
  |};

  declare var MFiles$MFUserAccountVaultRole: {|
    +None: 0, // 0
    +FullControl: 1, // 1
    +LogIn: 2, // 2
    +CreateObjects: 4, // 4
    +SeeAllObjects: 8, // 8
    +UndeleteObjects: 16, // 16
    +DestroyObjects: 32, // 32
    +ForceUndoCheckout: 64, // 64
    +ChangeObjectSecurity: 128, // 128
    +ChangeMetadataStructure: 256, // 256
    +ManageUserAccounts: 512, // 512
    +InternalUser: 1024, // 1024
    +ManageTraditionalFolders: 2048, // 2048
    +DefineTemplates: 4096, // 4096
    +ManageCommonViews: 8192, // 8192
    +ManageWorkflows: 16384, // 16384
    +DefaultRoles: 3078 // 3078
  |};

  declare var MFiles$MFUserOrUserGroupType: {|
    +Unknown: 0, // 0
    +UserAccount: 1, // 1
    +UserGroup: 2, // 2
    +PseudoUser: 3, // 3
    +PropertyBasedPseudoUser: 4 // 4
  |};

  declare var MFiles$MFValidationType: {|
    +None: 0, // 0
    +RegularExpression: 1, // 1
    +VBScript: 2 // 2
  |};

  declare var MFiles$MFValueListItemPropertyDef: {|
    +ID: 1, // 1
    +Name: 2, // 2
    +Owner: 3, // 3
    +Parent: 4, // 4
    +Deleted: 5, // 5
    +ObjectType: 6, // 6
    +ExtID: 7 // 7
  |};

  declare var MFiles$MFValueListSortingType: {|
    +Name: 0, // 0
    +ExtID: 1 // 1
  |};

  declare var MFiles$MFVaultAccess: {|
    +None: 0, // 0
    +CreateDocs: 1, // 1
    +SeeAllDocs: 2, // 2
    +UndeleteDocs: 4, // 4
    +DestroyDocs: 8, // 8
    +ForceUndoCheckout: 16, // 16
    +ChangeDocSecurity: 32, // 32
    +ChangeMetaDataStructure: 64, // 64
    +ManageUserAccounts: 128, // 128
    +ChangeFullControlRole: 256, // 256
    +VerifyVault: 1024, // 1024
    +EditAllDocs: 2048, // 2048
    +ExportContent: 8192, // 8192
    +ImportContent: 16384, // 16384
    +ManageVLItemsFromClient: 65536, // 65536
    +ManageExternalLocations: 131072, // 131072
    +LicenseAllowsModifications: 262144, // 262144
    +ManageEvents: 524288, // 524288
    +ManageTraditionalFolders: 1048576, // 1048576
    +ChangeObjectStates: 4194304, // 4194304
    +ChangeAssignments: 8388608, // 8388608
    +ManageCommonViews: 16777216, // 16777216
    +ManageCommonUISettings: 33554432, // 33554432
    +ManageCommonNotificationRules: 134217728, // 134217728
    +SeeDeletedDocs: 268435456, // 268435456
    +MateriakizeViews: 536870912, // 536870912
    +MaterializeViews: 536870912 // 536870912
  |};

  declare var MFiles$MFVaultConnectionTestResult: {|
    +OK: 0, // 0
    +UserCancelledLoginAttempt: 1 // 1
  |};

  declare var MFiles$MFViewCategory: {|
    +Normal: 0, // 0
    +OfflineFilter: 1, // 1
    +TemporarySearch: 2 // 2
  |};

  declare var MFiles$MFViewFlag: {|
    +sNone: 0, // 0
    +Materialized: 1 // 1
  |};

  declare var MFiles$MFViewType: {|
    +Normal: 0, // 0
    +FilterOnly: 1 // 1
  |};

  declare var MFiles$SearchFeature: {|
    +Undefined: 0, // 0
    +FacetSearch: 1, // 1
    +MultiVaultSearch: 2 // 2
  |};

  declare var MFiles$TaskPaneGroup: {|
    +New: 1, // 1
    +ViewAndModify: 2, // 2
    +GoTo: 3, // 3
    +Main: 4 // 4
  |};

  declare var MFiles$AccessControlEntry: {
    new(): IAccessControlEntry
  };

  declare var MFiles$AccessControlEntryContainer: {
    new(): IAccessControlEntryContainer
  };

  declare var MFiles$AccessControlEntryData: {
    new(): IAccessControlEntryData
  };

  declare var MFiles$AccessControlEntryKey: {
    new(): IAccessControlEntryKey
  };

  declare var MFiles$AccessControlEntryKeys: {
    new(): IAccessControlEntryKeys
  };

  declare var MFiles$AccessControlList: {
    new(): IAccessControlList
  };

  declare var MFiles$AccessControlListComponent: {
    new(): IAccessControlListComponent
  };

  declare var MFiles$AccessControlListComponentContainer: {
    new(): IAccessControlListComponentContainer
  };

  declare var MFiles$AccessControlListComponentKey: {
    new(): IAccessControlListComponentKey
  };

  declare var MFiles$AccessControlListComponentKeys: {
    new(): IAccessControlListComponentKeys
  };

  declare var MFiles$AccessControlLists: {
    new(): IAccessControlLists
  };

  declare var MFiles$ActionConvertToPDF: {
    new(): IActionConvertToPDF
  };

  declare var MFiles$ActionCreateAssignment: {
    new(): IActionCreateAssignment
  };

  declare var MFiles$ActionDefinition: {
    new(): IActionDefinition
  };

  declare var MFiles$ActionDefinitions: {
    new(): IActionDefinitions
  };

  declare var MFiles$ActionSendNotification: {
    new(): IActionSendNotification
  };

  declare var MFiles$ActionSetPermissions: {
    new(): IActionSetPermissions
  };

  declare var MFiles$ActionSetProperties: {
    new(): IActionSetProperties
  };

  declare var MFiles$AdditionalClassInfo: {
    new(): IAdditionalClassInfo
  };

  declare var MFiles$AdditionalFolder: {
    new(): IAdditionalFolder
  };

  declare var MFiles$AdditionalFolders: {
    new(): IAdditionalFolders
  };

  declare var MFiles$ApprovalAssignmentClassInfo: {
    new(): IApprovalAssignmentClassInfo
  };

  declare var MFiles$ArchiveOldVersionsJob: {
    new(): IArchiveOldVersionsJob
  };

  declare var MFiles$AssignmentClassInfo: {
    new(): IAssignmentClassInfo
  };

  declare var MFiles$AssociatedPropertyDef: {
    new(): IAssociatedPropertyDef
  };

  declare var MFiles$AssociatedPropertyDefs: {
    new(): IAssociatedPropertyDefs
  };

  declare var MFiles$AttachVaultOptions: {
    new(): IAttachVaultOptions
  };

  declare var MFiles$AuthenticationResult: {
    new(): IAuthenticationResult
  };

  declare var MFiles$AuthenticationResultIntermediate: {
    new(): IAuthenticationResultIntermediate
  };

  declare var MFiles$AuthenticationResultServerFinal: {
    new(): IAuthenticationResultServerFinal
  };

  declare var MFiles$AuthenticationResultVaultFinal: {
    new(): IAuthenticationResultVaultFinal
  };

  declare var MFiles$AutomaticMetadataResult: {
    new(): IAutomaticMetadataResult
  };

  declare var MFiles$AutomaticPermissions: {
    new(): IAutomaticPermissions
  };

  declare var MFiles$AutomaticValue: {
    new(): IAutomaticValue
  };

  declare var MFiles$BackupJob: {
    new(): IBackupJob
  };

  declare var MFiles$BooleanValue: {
    new(): IBooleanValue
  };

  declare var MFiles$ClassGroup: {
    new(): IClassGroup
  };

  declare var MFiles$ClassGroups: {
    new(): IClassGroups
  };

  declare var MFiles$CopyVaultJob: {
    new(): ICopyVaultJob
  };

  declare var MFiles$CopyVaultJobOutputInfo: {
    new(): ICopyVaultJobOutputInfo
  };

  declare var MFiles$CustomApplication: {
    new(): ICustomApplication
  };

  declare var MFiles$CustomApplications: {
    new(): ICustomApplications
  };

  declare var MFiles$DailyTrigger: {
    new(): IDailyTrigger
  };

  declare var MFiles$DataFunctionCall: {
    new(): IDataFunctionCall
  };

  declare var MFiles$DataSet: {
    new(): IDataSet
  };

  declare var MFiles$DataSetExportingStatus: {
    new(): IDataSetExportingStatus
  };

  declare var MFiles$DataSets: {
    new(): IDataSets
  };

  declare var MFiles$DefaultProperties: {
    new(): IDefaultProperties
  };

  declare var MFiles$DefaultProperty: {
    new(): IDefaultProperty
  };

  declare var MFiles$EmailMessageInformation: {
    new(): IEmailMessageInformation
  };

  declare var MFiles$EventHandler: {
    new(): IEventHandler
  };

  declare var MFiles$EventHandlers: {
    new(): IEventHandlers
  };

  declare var MFiles$ExportContentJob: {
    new(): IExportContentJob
  };

  declare var MFiles$ExportStructureItem: {
    new(): IExportStructureItem
  };

  declare var MFiles$ExportStructureItems: {
    new(): IExportStructureItems
  };

  declare var MFiles$Expression: {
    new(): IExpression
  };

  declare var MFiles$ExpressionEx: {
    new(): IExpressionEx
  };

  declare var MFiles$ExpressionExs: {
    new(): IExpressionExs
  };

  declare var MFiles$Expressions: {
    new(): IExpressions
  };

  declare var MFiles$FileClass: {
    new(): IFileClass
  };

  declare var MFiles$FileClasses: {
    new(): IFileClasses
  };

  declare var MFiles$FileDownloadSession: {
    new(): IFileDownloadSession
  };

  declare var MFiles$FileInformation: {
    new(): IFileInformation
  };

  declare var MFiles$FileVer: {
    new(): IFileVer
  };

  declare var MFiles$FileVers: {
    new(): IFileVers
  };

  declare var MFiles$FolderContentItem: {
    new(): IFolderContentItem
  };

  declare var MFiles$FolderContentItems: {
    new(): IFolderContentItems
  };

  declare var MFiles$FolderDef: {
    new(): IFolderDef
  };

  declare var MFiles$FolderDefs: {
    new(): IFolderDefs
  };

  declare var MFiles$FolderListingColumn: {
    new(): IFolderListingColumn
  };

  declare var MFiles$FolderListingColumns: {
    new(): IFolderListingColumns
  };

  declare var MFiles$FolderListingColumnSorting: {
    new(): IFolderListingColumnSorting
  };

  declare var MFiles$FolderListingColumnSortings: {
    new(): IFolderListingColumnSortings
  };

  declare var MFiles$FolderListingUIState: {
    new(): IFolderListingUIState
  };

  declare var MFiles$FolderNameListing: {
    new(): IFolderNameListing
  };

  declare var MFiles$FolderUIState: {
    new(): IFolderUIState
  };

  declare var MFiles$IDRange: {
    new(): IIDRange
  };

  declare var MFiles$IDs: {
    new(): IIDs
  };

  declare var MFiles$Impersonation: {
    new(): IImpersonation
  };

  declare var MFiles$ImportContentJob: {
    new(): IImportContentJob
  };

  declare var MFiles$IndirectPropertyID: {
    new(): IIndirectPropertyID
  };

  declare var MFiles$IndirectPropertyIDLevel: {
    new(): IIndirectPropertyIDLevel
  };

  declare var MFiles$KeyNamePair: {
    new(): IKeyNamePair
  };

  declare var MFiles$KeyNamePairs: {
    new(): IKeyNamePairs
  };

  declare var MFiles$Language: {
    new(): ILanguage
  };

  declare var MFiles$Languages: {
    new(): ILanguages
  };

  declare var MFiles$LicenseStatus: {
    new(): ILicenseStatus
  };

  declare var MFiles$LoginAccount: {
    new(): ILoginAccount
  };

  declare var MFiles$LoginAccountPersonalInformation: {
    new(): ILoginAccountPersonalInformation
  };

  declare var MFiles$LoginAccounts: {
    new(): ILoginAccounts
  };

  declare var MFiles$Lookup: {
    new(): ILookup
  };

  declare var MFiles$Lookups: {
    new(): ILookups
  };

  declare var MFiles$MetadataStructureSelector: {
    new(): IMetadataStructureSelector
  };

  declare var MFiles$MetadataStructureSelectors: {
    new(): IMetadataStructureSelectors
  };

  declare var MFiles$MFilesClientApplication: {
    new(): IMFilesClientApplication
  };

  declare var MFiles$MFilesServerApplication: {
    new(): IMFilesServerApplication
  };

  declare var MFiles$MFilesVersion: {
    new(): IMFilesVersion
  };

  declare var MFiles$MFResourceManager: {
    new(): IMFResourceManager
  };

  declare var MFiles$MFShellDocListCtrl: {
    new(): IMFDocListCtrl
  };

  declare var MFiles$MonthlyDateTrigger: {
    new(): IMonthlyDateTrigger
  };

  declare var MFiles$MonthlyDOWTrigger: {
    new(): IMonthlyDOWTrigger
  };

  declare var MFiles$NamedACL: {
    new(): INamedACL
  };

  declare var MFiles$NamedACLAdmin: {
    new(): INamedACLAdmin
  };

  declare var MFiles$NamedACLs: {
    new(): INamedACLs
  };

  declare var MFiles$NamedACLsAdmin: {
    new(): INamedACLsAdmin
  };

  declare var MFiles$NamedValueNamespace: {
    new(): INamedValueNamespace
  };

  declare var MFiles$NamedValueNamespaces: {
    new(): INamedValueNamespaces
  };

  declare var MFiles$NamedValues: {
    new(): INamedValues
  };

  declare var MFiles$Number: {
    new(): INumber
  };

  declare var MFiles$ObjectClass: {
    new(): IObjectClass
  };

  declare var MFiles$ObjectClassAdmin: {
    new(): IObjectClassAdmin
  };

  declare var MFiles$ObjectClasses: {
    new(): IObjectClasses
  };

  declare var MFiles$ObjectClassesAdmin: {
    new(): IObjectClassesAdmin
  };

  declare var MFiles$ObjectCreationInfo: {
    new(): IObjectCreationInfo
  };

  declare var MFiles$ObjectFile: {
    new(): IObjectFile
  };

  declare var MFiles$ObjectFileAndObjVer: {
    new(): IObjectFileAndObjVer
  };

  declare var MFiles$ObjectFileAndObjVerOfMultipleFiles: {
    new(): IObjectFileAndObjVerOfMultipleFiles
  };

  declare var MFiles$ObjectFiles: {
    new(): IObjectFiles
  };

  declare var MFiles$ObjectSearchResults: {
    new(): IObjectSearchResults
  };

  declare var MFiles$ObjectTypeTargetForBrowsing: {
    new(): IObjectTypeTargetForBrowsing
  };

  declare var MFiles$ObjectTypeTargetsForBrowsing: {
    new(): IObjectTypeTargetsForBrowsing
  };

  declare var MFiles$ObjectVersion: {
    new(): IObjectVersion
  };

  declare var MFiles$ObjectVersionAndProperties: {
    new(): IObjectVersionAndProperties
  };

  declare var MFiles$ObjectVersionAndPropertiesOfMultipleObjects: {
    new(): IObjectVersionAndPropertiesOfMultipleObjects
  };

  declare var MFiles$ObjectVersionFile: {
    new(): IObjectFileAndVersion
  };

  declare var MFiles$ObjectVersionPermissions: {
    new(): IObjectVersionPermissions
  };

  declare var MFiles$ObjectVersions: {
    new(): IObjectVersions
  };

  declare var MFiles$ObjectVersionWorkflowState: {
    new(): IObjectVersionWorkflowState
  };

  declare var MFiles$ObjectWindowResult: {
    new(): IObjectWindowResult
  };

  declare var MFiles$ObjID: {
    new(): IObjID
  };

  declare var MFiles$ObjIDs: {
    new(): IObjIDs
  };

  declare var MFiles$ObjOrFileVer: {
    new(): IObjOrFileVer
  };

  declare var MFiles$ObjOrFileVers: {
    new(): IObjOrFileVers
  };

  declare var MFiles$ObjType: {
    new(): IObjectType
  };

  declare var MFiles$ObjTypeAdmin: {
    new(): IObjectTypeAdmin
  };

  declare var MFiles$ObjTypeColumnMapping: {
    new(): IObjectTypeColumnMapping
  };

  declare var MFiles$ObjTypeColumnMappings: {
    new(): IObjectTypeColumnMappings
  };

  declare var MFiles$ObjTypes: {
    new(): IObjectTypes
  };

  declare var MFiles$ObjTypesAdmin: {
    new(): IObjectTypesAdmin
  };

  declare var MFiles$ObjVer: {
    new(): IObjVer
  };

  declare var MFiles$ObjVers: {
    new(): IObjVers
  };

  declare var MFiles$OCROptions: {
    new(): IOCROptions
  };

  declare var MFiles$OCRPage: {
    new(): IOCRPage
  };

  declare var MFiles$OCRPageResult: {
    new(): IOCRPageResult
  };

  declare var MFiles$OCRPageResults: {
    new(): IOCRPageResults
  };

  declare var MFiles$OCRPages: {
    new(): IOCRPages
  };

  declare var MFiles$OCRZone: {
    new(): IOCRZone
  };

  declare var MFiles$OCRZoneResult: {
    new(): IOCRZoneResult
  };

  declare var MFiles$OCRZoneResults: {
    new(): IOCRZoneResults
  };

  declare var MFiles$OCRZones: {
    new(): IOCRZones
  };

  declare var MFiles$OptimizeVaultJob: {
    new(): IOptimizeVaultJob
  };

  declare var MFiles$OwnerPropertyDef: {
    new(): IOwnerPropertyDef
  };

  declare var MFiles$PluginInfo: {
    new(): IPluginInfo
  };

  declare var MFiles$PluginInfos: {
    new(): IPluginInfos
  };

  declare var MFiles$PreviewerActiveXCtrl: {
    new(): IPreviewerActiveXCtrl
  };

  declare var MFiles$PropertyDef: {
    new(): IPropertyDef
  };

  declare var MFiles$PropertyDefAdmin: {
    new(): IPropertyDefAdmin
  };

  declare var MFiles$PropertyDefOrObjectType: {
    new(): IPropertyDefOrObjectType
  };

  declare var MFiles$PropertyDefOrObjectTypes: {
    new(): IPropertyDefOrObjectTypes
  };

  declare var MFiles$PropertyDefs: {
    new(): IPropertyDefs
  };

  declare var MFiles$PropertyDefsAdmin: {
    new(): IPropertyDefsAdmin
  };

  declare var MFiles$PropertyValue: {
    new(): IPropertyValue
  };

  declare var MFiles$PropertyValueForDisplay: {
    new(): IPropertyValueForDisplay
  };

  declare var MFiles$PropertyValueIconClue: {
    new(): IPropertyValueIconClue
  };

  declare var MFiles$PropertyValueIconClues: {
    new(): IPropertyValueIconClues
  };

  declare var MFiles$PropertyValues: {
    new(): IPropertyValues
  };

  declare var MFiles$PropertyValuesForDisplay: {
    new(): IPropertyValuesForDisplay
  };

  declare var MFiles$PropertyValuesOfMultipleObjects: {
    new(): IPropertyValuesOfMultipleObjects
  };

  declare var MFiles$PropertyValueSuggestion: {
    new(): IPropertyValueSuggestion
  };

  declare var MFiles$PropertyValueSuggestions: {
    new(): IPropertyValueSuggestions
  };

  declare var MFiles$PropertyValuesWithIconClues: {
    new(): IPropertyValuesWithIconClues
  };

  declare var MFiles$PropertyValuesWithIconCluesOfMultipleObjects: {
    new(): IPropertyValuesWithIconCluesOfMultipleObjects
  };

  declare var MFiles$ReportAccessCredentials: {
    new(): IReportAccessCredentials
  };

  declare var MFiles$RestoreJob: {
    new(): IRestoreJob
  };

  declare var MFiles$ScheduledJob: {
    new(): IScheduledJob
  };

  declare var MFiles$ScheduledJobOutputInfo: {
    new(): IScheduledJobOutputInfo
  };

  declare var MFiles$ScheduledJobRunInfo: {
    new(): IScheduledJobRunInfo
  };

  declare var MFiles$ScheduledJobs: {
    new(): IScheduledJobs
  };

  declare var MFiles$ScheduledJobTrigger: {
    new(): IScheduledJobTrigger
  };

  declare var MFiles$ScheduledJobTriggers: {
    new(): IScheduledJobTriggers
  };

  declare var MFiles$SearchCondition: {
    new(): ISearchCondition
  };

  declare var MFiles$SearchConditionEx: {
    new(): ISearchConditionEx
  };

  declare var MFiles$SearchConditionExs: {
    new(): ISearchConditionExs
  };

  declare var MFiles$SearchConditions: {
    new(): ISearchConditions
  };

  declare var MFiles$SearchCriteria: {
    new(): ISearchCriteria
  };

  declare var MFiles$SearchDef: {
    new(): ISearchDef
  };

  declare var MFiles$SemanticAliases: {
    new(): ISemanticAliases
  };

  declare var MFiles$ServerLicenseManagementOperations: {
    new(): IServerLicenseManagementOperations
  };

  declare var MFiles$ServerLoginAccountOperations: {
    new(): IServerLoginAccountOperations
  };

  declare var MFiles$ServerManagementOperations: {
    new(): IServerManagementOperations
  };

  declare var MFiles$ServerScheduledJobManagementOperations: {
    new(): IServerScheduledJobManagementOperations
  };

  declare var MFiles$ServerVaultManagementOperations: {
    new(): IServerVaultManagementOperations
  };

  declare var MFiles$SessionInfo: {
    new(): ISessionInfo
  };

  declare var MFiles$SetPropertiesParams: {
    new(): ISetPropertiesParams
  };

  declare var MFiles$SetPropertiesParamsOfMultipleObjects: {
    new(): ISetPropertiesParamsOfMultipleObjects
  };

  declare var MFiles$SharedFileInfo: {
    new(): ISharedFileInfo
  };

  declare var MFiles$SharedLinkInfo: {
    new(): ISharedLinkInfo
  };

  declare var MFiles$SharedLinkInfos: {
    new(): ISharedLinkInfos
  };

  declare var MFiles$SharedLinkPublicOperations: {
    new(): ISharedLinkPublicOperations
  };

  declare var MFiles$ShortcutMappingInfo: {
    new(): IShortcutMappingInfo
  };

  declare var MFiles$SignaturePromptInfo: {
    new(): ISignaturePromptInfo
  };

  declare var MFiles$SignaturePromptInfoMetadataBased: {
    new(): ISignaturePromptInfoMetadataBased
  };

  declare var MFiles$SignaturePromptInfos: {
    new(): ISignaturePromptInfos
  };

  declare var MFiles$SignaturePromptInfoSelectable: {
    new(): ISignaturePromptInfoSelectable
  };

  declare var MFiles$SignatureSettings: {
    new(): ISignatureSettings
  };

  declare var MFiles$SourceObjectFile: {
    new(): ISourceObjectFile
  };

  declare var MFiles$SourceObjectFiles: {
    new(): ISourceObjectFiles
  };

  declare var MFiles$SQLDatabase: {
    new(): ISQLDatabase
  };

  declare var MFiles$State: {
    new(): IState
  };

  declare var MFiles$StateAdmin: {
    new(): IStateAdmin
  };

  declare var MFiles$StateConditions: {
    new(): IStateConditions
  };

  declare var MFiles$States: {
    new(): IStates
  };

  declare var MFiles$StatesAdmin: {
    new(): IStatesAdmin
  };

  declare var MFiles$StateTransition: {
    new(): IStateTransition
  };

  declare var MFiles$StateTransitionForClient: {
    new(): IStateTransitionForClient
  };

  declare var MFiles$StateTransitions: {
    new(): IStateTransitions
  };

  declare var MFiles$StateTransitionsForClient: {
    new(): IStateTransitionsForClient
  };

  declare var MFiles$StringData: {
    new(): IStringData
  };

  declare var MFiles$Strings: {
    new(): IStrings
  };

  declare var MFiles$TaskAssignmentClassInfo: {
    new(): ITaskAssignmentClassInfo
  };

  declare var MFiles$TemporarySearchView: {
    new(): ITemporarySearchView
  };

  declare var MFiles$Timestamp: {
    new(): ITimestamp
  };

  declare var MFiles$TimeZoneInformation: {
    new(): ITimeZoneInformation
  };

  declare var MFiles$TraditionalFolder: {
    new(): ITraditionalFolder
  };

  declare var MFiles$TraditionalFolderContents: {
    new(): ITraditionalFolderContents
  };

  declare var MFiles$TraditionalFolders: {
    new(): ITraditionalFolders
  };

  declare var MFiles$TriggerType: {
    new(): ITriggerType
  };

  declare var MFiles$TypedValue: {
    new(): ITypedValue
  };

  declare var MFiles$TypedValues: {
    new(): ITypedValues
  };

  declare var MFiles$UserAccount: {
    new(): IUserAccount
  };

  declare var MFiles$UserAccounts: {
    new(): IUserAccounts
  };

  declare var MFiles$UserGroup: {
    new(): IUserGroup
  };

  declare var MFiles$UserGroupAdmin: {
    new(): IUserGroupAdmin
  };

  declare var MFiles$UserGroups: {
    new(): IUserGroups
  };

  declare var MFiles$UserGroupsAdmin: {
    new(): IUserGroupsAdmin
  };

  declare var MFiles$UserOrUserGroupID: {
    new(): IUserOrUserGroupID
  };

  declare var MFiles$UserOrUserGroupIDEx: {
    new(): IUserOrUserGroupIDEx
  };

  declare var MFiles$UserOrUserGroupIDExs: {
    new(): IUserOrUserGroupIDExs
  };

  declare var MFiles$UserOrUserGroupIDs: {
    new(): IUserOrUserGroupIDs
  };

  declare var MFiles$Validation: {
    new(): IValidation
  };

  declare var MFiles$ValueListItem: {
    new(): IValueListItem
  };

  declare var MFiles$ValueListItems: {
    new(): IValueListItems
  };

  declare var MFiles$ValueListItemSearchResults: {
    new(): IValueListItemSearchResults
  };

  declare var MFiles$ValueListItemSearchResultsWithPermissions: {
    new(): IValueListItemSearchResultsWithPermissions
  };

  declare var MFiles$ValueListItemsWithPermissions: {
    new(): IValueListItemsWithPermissions
  };

  declare var MFiles$Vault: {
    new(): IVault
  };

  declare var MFiles$VaultAutomaticMetadataOperations: {
    new(): IVaultAutomaticMetadataOperations
  };

  declare var MFiles$VaultClassGroupOperations: {
    new(): IVaultClassGroupOperations
  };

  declare var MFiles$VaultClassOperations: {
    new(): IVaultClassOperations
  };

  declare var MFiles$VaultClientOperations: {
    new(): IVaultClientOperations
  };

  declare var MFiles$VaultConnection: {
    new(): IVaultConnection
  };

  declare var MFiles$VaultConnections: {
    new(): IVaultConnections
  };

  declare var MFiles$VaultCustomApplicationManagementOperations: {
    new(): IVaultCustomApplicationManagementOperations
  };

  declare var MFiles$VaultDataSetOperations: {
    new(): IVaultDataSetOperations
  };

  declare var MFiles$VaultElectronicSignatureOperations: {
    new(): IVaultElectronicSignatureOperations
  };

  declare var MFiles$VaultEventLogOperations: {
    new(): IVaultEventLogOperations
  };

  declare var MFiles$VaultExtensionMethodOperations: {
    new(): IVaultExtensionMethodOperations
  };

  declare var MFiles$VaultExternalObjectOperations: {
    new(): IVaultExternalObjectOperations
  };

  declare var MFiles$VaultLoginAccountOperations: {
    new(): IVaultLoginAccountOperations
  };

  declare var MFiles$VaultManagementOperations: {
    new(): IVaultManagementOperations
  };

  declare var MFiles$VaultNamedACLOperations: {
    new(): IVaultNamedACLOperations
  };

  declare var MFiles$VaultNamedValueStorageOperations: {
    new(): IVaultNamedValueStorageOperations
  };

  declare var MFiles$VaultNotificationOperations: {
    new(): IVaultNotificationOperations
  };

  declare var MFiles$VaultObjectFileOperations: {
    new(): IVaultObjectFileOperations
  };

  declare var MFiles$VaultObjectOperations: {
    new(): IVaultObjectOperations
  };

  declare var MFiles$VaultObjectPropertyOperations: {
    new(): IVaultObjectPropertyOperations
  };

  declare var MFiles$VaultObjectSearchOperations: {
    new(): IVaultObjectSearchOperations
  };

  declare var MFiles$VaultObjectTypeOperations: {
    new(): IVaultObjectTypeOperations
  };

  declare var MFiles$VaultOnServer: {
    new(): IVaultOnServer
  };

  declare var MFiles$VaultProperties: {
    new(): IVaultProperties
  };

  declare var MFiles$VaultPropertyDefOperations: {
    new(): IVaultPropertyDefOperations
  };

  declare var MFiles$VaultScheduledJobManagementOperations: {
    new(): IVaultScheduledJobManagementOperations
  };

  declare var MFiles$VaultServerDataPushOperations: {
    new(): IVaultServerDataPushOperations
  };

  declare var MFiles$VaultSharedLinkOperations: {
    new(): IVaultSharedLinkOperations
  };

  declare var MFiles$VaultsOnServer: {
    new(): IVaultsOnServer
  };

  declare var MFiles$VaultTraditionalFolderOperations: {
    new(): IVaultTraditionalFolderOperations
  };

  declare var MFiles$VaultUserGroupOperations: {
    new(): IVaultUserGroupOperations
  };

  declare var MFiles$VaultUserOperations: {
    new(): IVaultUserOperations
  };

  declare var MFiles$VaultUserSettingOperations: {
    new(): IVaultUserSettingOperations
  };

  declare var MFiles$VaultValueListItemOperations: {
    new(): IVaultValueListItemOperations
  };

  declare var MFiles$VaultValueListOperations: {
    new(): IVaultValueListOperations
  };

  declare var MFiles$VaultViewOperations: {
    new(): IVaultViewOperations
  };

  declare var MFiles$VaultWorkflowOperations: {
    new(): IVaultWorkflowOperations
  };

  declare var MFiles$VerifyVaultJob: {
    new(): IVerifyVaultJob
  };

  declare var MFiles$VerifyVaultJobOutput: {
    new(): IVerifyVaultJobOutput
  };

  declare var MFiles$VersionComment: {
    new(): IVersionComment
  };

  declare var MFiles$VersionComments: {
    new(): IVersionComments
  };

  declare var MFiles$View: {
    new(): IView
  };

  declare var MFiles$ViewLocation: {
    new(): IViewLocation
  };

  declare var MFiles$Views: {
    new(): IViews
  };

  declare var MFiles$WeeklyTrigger: {
    new(): IWeeklyTrigger
  };

  declare var MFiles$Workflow: {
    new(): IWorkflow
  };

  declare var MFiles$WorkflowAdmin: {
    new(): IWorkflowAdmin
  };

  declare var MFiles$WorkflowAssignment: {
    new(): IWorkflowAssignment
  };

  declare var MFiles$Workflows: {
    new(): IWorkflows
  };

  declare var MFiles$WorkflowsAdmin: {
    new(): IWorkflowsAdmin
  };

  declare var MFiles$XMLSearchResult: {
    new(): IXMLSearchResult
  };

  declare var MFiles$ApplicationPath: string;

  declare var MFiles$CLSID: ICLSIDs;

  declare var MFiles$CurrentApplicationPlatform: any;

  declare function MFiles$CreateInstance(name: string): any;

  declare function MFiles$CreateObjectCLR(
    assemblyFile: string,
    className: string
  ): any;

  declare function MFiles$DeleteRegistryKey(
    userSpecific: boolean,
    key: string
  ): void;

  declare function MFiles$DeleteRegistryValue(
    userSpecific: boolean,
    key: string,
    valueName: string
  ): void;

  declare function MFiles$EnableExceptionPropagation(exception: any): void;

  declare function MFiles$ExecuteURL(url: string): void;

  declare function MFiles$GetErrorDescription(exception: any): string;

  declare function MFiles$GetLongErrorDescription(exception: any): string;

  declare function MFiles$GetStringResource(resource: number): string;

  declare function MFiles$KillTimer(timerId: number): void;

  declare function MFiles$LaunchHelp(helpID: string): void;

  declare function MFiles$PersistStringData(
    name: string,
    privateData: boolean,
    data: string
  ): void;

  declare function MFiles$ReadFromRegistry(
    userSpecific: boolean,
    key: string,
    valueName: string
  ): any;

  declare function MFiles$ReadTextFile(filename: string): string;

  declare function MFiles$ReportException(exception: any): void;

  declare function MFiles$RetrieveStringData(
    name: string,
    privateData: boolean
  ): string;

  declare function MFiles$SetTimer(
    timeoutInMs: number,
    callbackMethod: () => void
  ): number;

  declare function MFiles$ThrowError(description: string): void;

  declare function MFiles$WriteToRegistry(
    userSpecific: boolean,
    key: string,
    valueName: string,
    value: any,
    valueType: string
  ): void;
}
