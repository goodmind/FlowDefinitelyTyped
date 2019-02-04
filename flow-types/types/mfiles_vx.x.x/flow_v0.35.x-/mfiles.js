declare module 'mfiles' {
        declare var MFExtApplicationPlatformWeb: any;
	declare interface IAccessControlEntry {
ChangePermissionsPermission: MFiles$MFiles$MFPermission,
EditPermission: MFiles$MFiles$MFPermission,
IsGroup: boolean,
ReadPermission: MFiles$MFiles$MFPermission,
UserOrGroupID: number,
Clone(): IAccessControlEntry
} 
	declare interface IAccessControlEntryContainer {
+IsEmpty: boolean,
Add(
AccessControlEntryKey: IAccessControlEntryKey,
AccessControlEntryData: IAccessControlEntryData): void,
At(AccessControlEntryKey: IAccessControlEntryKey): IAccessControlEntryData,
Clear(): void,
Clone(): IAccessControlEntryContainer,
GetKeys(): IAccessControlEntryKeys,
GetKeysWithPseudoUserDefinitions(): IAccessControlEntryKeys,
HasKey(AccessControlEntryKey: IAccessControlEntryKey): boolean,
Remove(AccessControlEntryKey: IAccessControlEntryKey): void
} 
	declare interface IAccessControlEntryData {
AttachObjectsPermission: MFiles$MFiles$MFPermission,
ChangePermissionsPermission: MFiles$MFiles$MFPermission,
DeletePermission: MFiles$MFiles$MFPermission,
EditPermission: MFiles$MFiles$MFPermission,
ReadPermission: MFiles$MFiles$MFPermission,
Clone(): IAccessControlEntryData,
SetAllPermissions(Permission: MFiles$MFiles$MFPermission): void
} 
	declare interface IAccessControlEntryKey {
+HasConcreteUserOrGroupID: boolean,
+IsGroup: boolean,
+IsPseudoUser: boolean,
PseudoUserID: IIndirectPropertyID,
+UserOrGroupID: number,
Clone(): IAccessControlEntryKey,
GetResolvedPseudoUserOrGroupIDs(): IUserOrUserGroupIDs,
ResetResolvedPseudoUserOrGroupIDs(): void,
SetUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): void
} 
	declare interface IAccessControlEntryKeys {
+Count: number,
Clone(): IAccessControlEntryKeys,
Item(Index: number): IAccessControlEntryKey
} 
	declare interface IAccessControlList {
+AutomaticComponents: IAccessControlListComponentContainer,
+CheckedOutToUserID: number,
CustomComponent: IAccessControlListComponent,
+HasCheckedOutToUserID: boolean,
IsFullyAuthoritative: boolean,
Clone(): IAccessControlList,
CloneFrom(AccessControlList: IAccessControlList): void,
EqualTo(AccessControlList: IAccessControlList): boolean,
HasIdenticalPermissions(AccessControlList: IAccessControlList): boolean
} 
	declare interface IAccessControlListComponent {
AccessControlEntries: IAccessControlEntryContainer,
CanDeactivate: boolean,
+CurrentUserBinding: number,
+HasCurrentUser: boolean,
+HasCurrentUserBinding: boolean,
+HasNamedACLLink: boolean,
+HasPseudoUsers: boolean,
IsActive: boolean,
+NamedACLLink: number,
Clone(): IAccessControlListComponent,
GetACEByUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): IAccessControlEntryData,
GetACEKeyByUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): IAccessControlEntryKey,
ResetCurrentUserBinding(): void,
ResetNamedACLLink(): void
} 
	declare interface IAccessControlListComponentContainer {
+Count: number,
At(
AccessControlListComponentKey: IAccessControlListComponentKey): IAccessControlListComponent,
GetKeys(): IAccessControlListComponentKeys,
HasKey(AccessControlListComponentKey: IAccessControlListComponentKey): boolean
} 
	declare interface IAccessControlListComponentKey {
ItemID: number,
PropertyDefID: (MFiles$MFiles$MFBuiltInPropertyDef | number),
Clone(): IAccessControlListComponentKey
} 
	declare interface IAccessControlListComponentKeys {
+Count: number,
Clone(): IAccessControlListComponentKeys,
Item(Index: number): IAccessControlListComponentKey
} 
	declare interface IAccessControlLists {
+Count: number,
Item(Index: number): IAccessControlList
} 
	declare interface IActionConvertToPDF {
FailOnUnsupportedSourceFiles: boolean,
OverwriteExistingFile: boolean,
PDFA1b: boolean,
StoreAsSeparateFile: boolean,
Clone(): IActionConvertToPDF
} 
	declare interface IActionCreateAssignment {
AssignedTo: IUserOrUserGroupIDExs,
Deadline: boolean,
DeadlineInDays: number,
Description: string,
MonitoredBy: IUserOrUserGroupIDExs,
Title: string,
Clone(): IActionCreateAssignment
} 
	declare interface IActionDefinition {
ActionCreateSeparateAssignment: IActionCreateAssignment,
+ActionType: MFiles$MFiles$MFActionType,
Clear(): void,
Clone(): IActionDefinition
} 
	declare interface IActionDefinitions {
+Count: number,
Add(Index: number, ActionDefinition: IActionDefinition): void,
Clone(): IActionDefinitions,
Item(Index: number): IActionDefinition,
Item(Index: number, value: IActionDefinition): void,
Remove(Index: number): void
} 
	declare interface IActionSendNotification {
Message: string,
RecipientsEx: IUserOrUserGroupIDExs,
Subject: string,
Clone(): IActionSendNotification
} 
	declare interface IActionSetPermissions {
DiscardsAutomaticPermissions: boolean,
Permissions: IAccessControlList,
Clone(): IActionSetPermissions
} 
	declare interface IActionSetProperties {
Properties: IDefaultProperties,
Clone(): IActionSetProperties
} 
	declare interface IAdditionalClassInfo {
AssignmentClassInfo: IAssignmentClassInfo,
+InfoType: MFiles$MFiles$MFAdditionalClassInfoType,
Clear(): void,
Clone(): IAdditionalClassInfo
} 
	declare interface IAdditionalFolder {
Folder: string,
Impersonation: IImpersonation,
LimitInMB: number,
Clone(): IAdditionalFolder
} 
	declare interface IAdditionalFolders {
+Count: number,
Add(Index: number, AdditionalFolder: IAdditionalFolder): void,
Clone(): IAdditionalFolders,
Item(Index: number): IAdditionalFolder,
Remove(Index: number): void
} 
	declare interface IApprovalAssignmentClassInfo {
AnyAssigneeApproves: boolean,
SignatureForApproval: ISignatureSettings,
SignatureForRejection: ISignatureSettings,
Clone(): IApprovalAssignmentClassInfo
} 
	declare interface IArchiveOldVersionsJob {
AtLeastNDaysOlder: number,
AtLeastNVersionsOlder: number,
CheckedInBefore: ITimestamp,
Flags: MFiles$MFiles$MFExportContentFlag,
Impersonation: IImpersonation,
MarkedForArchiving: boolean,
NoVersionTag: boolean,
TargetLocation: string,
UseAtLeastNDaysOlder: boolean,
UseAtLeastNVersionsOlder: boolean,
UseCheckedInBefore: boolean,
Clone(): IArchiveOldVersionsJob
} 
	declare interface IAssignmentClassInfo {
ApprovalAssignmentClassInfo: IApprovalAssignmentClassInfo,
+AssignmentType: MFiles$MFiles$MFAssignmentType,
TaskAssignmentClassInfo: ITaskAssignmentClassInfo,
Clone(): IAssignmentClassInfo
} 
	declare interface IAssociatedPropertyDef {
PropertyDef: (MFiles$MFiles$MFBuiltInPropertyDef | number),
Required: boolean,
Clone(): IAssociatedPropertyDef
} 
	declare interface IAssociatedPropertyDefs {
+Count: number,
Add(Index: number, AssociatedPropertyDef: IAssociatedPropertyDef): void,
Clone(): IAssociatedPropertyDefs,
Item(Index: number): IAssociatedPropertyDef,
Remove(Index: number): void
} 
	declare interface IAttachVaultOptions {
DisableEventHandlers: boolean,
DisableExportedDataSets: boolean,
DisableExportImportJobs: boolean,
DisableExternalObjectTypes: boolean,
DisableExternalSources: boolean,
DisableExternalUserGroups: boolean,
Flags: MFiles$MFiles$MFAttachVaultOptionsFlag,
UpdateAttachmentGUID: boolean,
Clone(): IAttachVaultOptions,
DisableAll(): void
} 
	declare interface IAuthenticationResult {
+Intermediate: IAuthenticationResultIntermediate,
+ServerFinal: IAuthenticationResultServerFinal,
+VaultFinal: IAuthenticationResultVaultFinal
} 
	declare interface IAuthenticationResultIntermediate {
+AttemptIdentifier: string,
+AuthenticationData: INamedValues
} 
	declare interface IAuthenticationResultServerFinal {
+ServerConnection: MFiles$MFiles$MFServerConnection
} 
	declare interface IAuthenticationResultVaultFinal {
+Vault: IVault
} 
	declare interface IAutomaticMetadataResult {
+PropertyValueSuggestions: IPropertyValueSuggestions,
Clone(): IAutomaticMetadataResult
} 
	declare interface IAutomaticPermissions {
CanDeactivate: boolean,
+IsBasedOnObjectACL: boolean,
+IsDefault: boolean,
+NamedACL: INamedACL,
Clone(): IAutomaticPermissions,
SetBasedOnObjectACL(): void,
SetNamedACL(NamedACL: INamedACL): void
} 
	declare interface IAutomaticValue {
ANSIncrement: number,
ANVCode: string,
CalculationOrderNumber: number,
CVSExpression: string,
CVVCode: string,
Clone(): IAutomaticValue
} 
	declare interface IBackupJob {
BackupType: MFiles$MFiles$MFBackupType,
FileSizeLimitInMB: number,
Impersonation: IImpersonation,
OverwriteExistingFiles: boolean,
TargetFile: string,
VaultGUID: string,
Clone(): IBackupJob
} 
	declare interface IBooleanValue {
Value: boolean,
Clone(): IBooleanValue
} 
	declare interface IClassGroup {
ID: number,
Members: IIDs,
Name: string,
ObjectType: (MFiles$MFiles$MFBuiltInObjectType | number),
AddMember(Member: number): void,
Clone(): IClassGroup,
RemoveMember(Member: number): void
} 
	declare interface IClassGroups {
+Count: number,
Clone(): IClassGroups,
Item(Index: number): IClassGroup
} 
	declare interface ICLSIDs {
+PreviewerCtrl: string,
+ShellListingCtrl: string
} 
	declare interface ICollection {
+Count: number,
+Events: IEvents,
Clear(): void,
Find(item: any): number,
GetAt(pos: number): any,
MoveTo(pos: number, newPos: number): void,
NewTo(pos: number, replace: boolean): any,
PutTo(pos: number, replace: boolean, item: any): void,
RemoveAt(pos: number): void
} 
	declare interface ICommands {
+Events: ICommandsEvents,
AddCustomCommandToMenu(
customCommand: number,
location: MFiles$MFiles$MenuLocation,
orderPriority: number): void,
CreateCustomCommand(commandName: string): number,
DeleteCustomCommand(customCommand: number): void,
ExecuteCommand(command: MFiles$MFiles$BuiltinCommand | number, arguments: any): void,
GetCommandName(command: MFiles$MFiles$BuiltinCommand | number): string,
GetCommandState(
command: MFiles$MFiles$BuiltinCommand | number,
location: MFiles$MFiles$CommandLocation,
includeBuiltInState: boolean,
includeScriptSpecifiedState: boolean): MFiles$MFiles$CommandState,
RemoveCustomCommandFromMenu(customCommand: number, location: MFiles$MFiles$MenuLocation): void,
SetCommandState(
command: MFiles$MFiles$BuiltinCommand | number,
location: MFiles$MFiles$CommandLocation,
state: MFiles$MFiles$CommandState): void,
SetIcon(customCommand: number, icon: MFiles$MFiles$DefaultIcon): void,
SetIconFromPath(customCommand: number, iconPath: string): void
} 
	declare type ICommandsEvents = {
OnCustomCommand(commandID: number): void
} & IEvents

	declare interface ICopyVaultJob {
CopyflagAllData: boolean,
CopyflagAllExceptData: boolean,
CopyflagApplications: boolean,
CopyflagDataSets: boolean,
CopyflagDocumentProfiles: boolean,
CopyflagDocuments: boolean,
CopyflagEventLog: boolean,
CopyflagExternalLocations: boolean,
CopyflagFiles: boolean,
CopyflagInternalEventHandlers: boolean,
CopyflagLanguagesAndTranslations: boolean,
CopyflagPropertyDefinitions: boolean,
CopyflagScheduledExportAndImportJobs: boolean,
CopyflagUserAccounts: boolean,
CopyflagUseTargetGUID: boolean,
CopyflagValueListContent: boolean,
CopyflagValueLists: boolean,
CopyflagViews: boolean,
CopyflagWorkflows: boolean,
VaultGUID: string,
VaultProperties: IVaultProperties,
Clone(): ICopyVaultJob
} 
	declare interface ICopyVaultJobOutputInfo {
+VaultProperties: IVaultProperties
} 
	declare interface ICustomApplication {
+ApplicationType: MFiles$MFiles$MFCustomApplicationType,
+ChecksumHash: string,
+Description: string,
+Enabled: boolean,
+ID: string,
+MasterApplication: string,
+Name: string,
+Optional: boolean,
+Publisher: string,
+RequireSystemAccess: boolean,
+Version: string,
Clone(): ICustomApplication
} 
	declare interface ICustomApplications {
+Count: number,
Clone(): ICustomApplications,
Item(Index: number): ICustomApplication
} 
	declare interface IDailyTrigger {
DaysInterval: number
} 
	declare interface IDashboard<T> {
AutoStopWithParent: boolean,
+CustomData: T,
+Events: IDashboardEvents,
+IsPopupDashboard: boolean,
+Parent: (IShellPaneContainer | IShellFrame | IVaultUI | IShellUI),
+UseRightToLeftLayout: boolean,
+Vault: IVault,
+Window: IWindow,
ShowMessage(message: string | IMessage): number,
ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: any): void
} 
	declare type IDashboardEvents = {
OnStarted(): void,
OnStop(): void
} & IEvents

	declare interface IDataFunctionCall {
+DataFunction: MFiles$MFiles$MFDataFunction,
SetDataDate(): void,
SetDataDaysFrom(): void,
SetDataDaysTo(): void,
SetDataInitialCharGroup(Locale: number): void,
SetDataIntegerSegment(SegmentSize: number): void,
SetDataLeftChars(Characters: number): void,
SetDataMonth(): void,
SetDataNoOp(): void,
SetDataYear(): void,
SetDataYearAndMonth(): void
} 
	declare interface IDataSet {
+ID: number,
+Name: string,
Clone(): IDataSet
} 
	declare interface IDataSetExportingStatus {
+CurrentServerTime: ITimestamp,
+IsExporting: boolean,
+LatestActivity: ITimestamp
} 
	declare interface IDataSets {
+Count: number,
Clone(): IDataSets,
Item(Index: number): IDataSet
} 
	declare interface IDefaultProperties {
+Count: number,
Add(Index: number, DefaultProperty: IDefaultProperty): void,
Item(Index: number): IDefaultProperty,
Remove(Index: number): void
} 
	declare interface IDefaultProperty {
DataFixedValueValue: ITypedValue,
DataFromEmailAddVLItemIfNotFound: boolean,
DataFromEmailField: MFiles$MFiles$MFEmailField,
DataFromEmailHeaderAddVLItemIfNotFound: boolean,
DataFromEmailHeaderField: string,
DataFromEmailHeaderTreatLookupAsID: boolean,
DataFromEmailTreatLookupAsID: boolean,
DataFromHPDSSXMLAddVLItemIfNotFound: boolean,
DataFromHPDSSXMLPromptName: string,
DataFromHPDSSXMLTreatLookupAsID: boolean,
DataFromOCRAddVLItemIfNotFound: boolean,
DataFromOCRTreatLookupAsID: boolean,
DataFromOCRZone: IOCRZone,
DataFromXMLAddVLItemIfNotFound: boolean,
DataFromXMLTreatLookupAsID: boolean,
DataFromXMLXPathExpression: string,
PropertyDefID: (MFiles$MFiles$MFBuiltInPropertyDef | number),
+Type: MFiles$MFiles$MFDefaultPropertyType,
Clone(): IDefaultProperty,
SetFixedValue(TypedValue: ITypedValue): void,
SetFromEmail(
EmailField: MFiles$MFiles$MFEmailField,
TreatLookupAsID: boolean,
AddVLItemIfNotFound: boolean): void,
SetFromEmailHeader(Field: string, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void,
SetFromHPDSSXML(
PromptName: string,
TreatLookupAsID: boolean,
AddVLItemIfNotFound: boolean): void,
SetFromOCR(
OCRZone: IOCRZone,
TreatLookupAsID: boolean,
AddVLItemIfNotFound: boolean): void,
SetFromXML(
XPathExpression: string,
TreatLookupAsID: boolean,
AddVLItemIfNotFound: boolean): void
} 
	declare interface IEmailMessageInformation {
Cc: IStrings,
From: string,
Importance: MFiles$MFiles$MFEmailImportance,
InReplyTo: string,
MessageID: string,
Received: ITimestamp,
Sensitivity: MFiles$MFiles$MFEmailSensitivity,
Sent: ITimestamp,
Subject: string,
To: IStrings,
Clone(): IEmailMessageInformation,
CloneFrom(EmailMessageInformation: IEmailMessageInformation): void
} 
	declare interface IEventHandler {
Active: boolean,
Description: string,
EventType: MFiles$MFiles$MFEventHandlerType,
+GUID: string,
VBScript: string,
Clone(): IEventHandler,
GetID(): number
} 
	declare interface IEventHandlers {
+Count: number,
Add(Index: number, EventHandler: IEventHandler): void,
Clone(): IEventHandlers,
GetIndexByGUID(EventHandlerGUID: string): number,
Item(Index: number): IEventHandler,
Remove(Index: number): void
} 
	declare interface IEvents {
Register(eventToListen: MFiles$MFiles$Event, eventSink: Function): number,
Unregister(sinkHandle: number): void
} 
	declare interface IExportContentJob {
ExportContent: boolean,
ExportStructureItems: boolean,
Flags: MFiles$MFiles$MFExportContentFlag,
IgnoreChangesBefore: ITimestamp,
Impersonation: IImpersonation,
IncludePrivateUISettingsWithStructure: boolean,
IncludeValueListItemsWithStructure: boolean,
SearchConditions: ISearchConditions,
StructureItems: IExportStructureItems,
TargetLocation: string,
UseIgnoreChangesBefore: boolean,
UseSearchConditions: boolean,
Clone(): IExportContentJob,
SetExportAllStructureItems(IncludeValueListItems: boolean): void
} 
	declare interface IExportStructureItem {
StructureItemGUID: string,
StructureItemID: number,
StructureItemType: MFiles$MFiles$MFMetadataStructureItem,
Clone(): IExportStructureItem
} 
	declare interface IExportStructureItems {
+Count: number,
Add(Index: number, ExportStructureItem: IExportStructureItem): void,
Clone(): IExportStructureItems,
Item(Index: number): IExportStructureItem,
Item(Index: number, value: IExportStructureItem): void,
Remove(Index: number): void
} 
	declare interface IExpression {
DataAnyFieldFTSFlags: MFiles$MFiles$MFFullTextSearchFlags,
DataFileValueType: MFiles$MFiles$MFFileValueType,
DataObjectIDSegmentSegmentSize: number,
DataPermissionsType: MFiles$MFiles$MFPermissionsExpressionType,
DataPropertyValueDataFunction: MFiles$MFiles$MFDataFunction,
DataPropertyValueParentChildBehavior: MFiles$MFiles$MFParentChildBehavior,
DataPropertyValuePropertyDef: number,
DataStatusValueDataFunction: MFiles$MFiles$MFDataFunction,
DataStatusValueType: MFiles$MFiles$MFStatusType,
DataTypedValueDataFunction: MFiles$MFiles$MFDataFunction,
DataTypedValueDatatype: MFiles$MFiles$MFDataType,
DataTypedValueParentChildBehavior: MFiles$MFiles$MFParentChildBehavior,
DataTypedValueValueList: number,
IndirectionLevels: IPropertyDefOrObjectTypes,
+Type: MFiles$MFiles$MFExpressionType,
Clone(): IExpression,
GetExpressionAsText(PropertyDefinitions: IPropertyDefs, ObjectTypes: IObjectTypes): string,
GetWholeExpressionAsIndirectionLevels(): IPropertyDefOrObjectTypes,
SetAnyFieldExpression(FullTextSearchFlags: MFiles$MFiles$MFFullTextSearchFlags): void,
SetFileValueExpression(FileValueType: MFiles$MFiles$MFFileValueType): void,
SetObjectIDSegmentExpression(Segment: number): void,
SetPermissionExpression(PermissionsExpressionType: MFiles$MFiles$MFPermissionsExpressionType): void,
SetPropertyValueExpression(
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
PCBehavior: MFiles$MFiles$MFParentChildBehavior,
DataFunctionCall: IDataFunctionCall): void,
SetStatusValueExpression(
StatusType: MFiles$MFiles$MFStatusType,
DataFunctionCall: IDataFunctionCall): void,
SetTypedValueExpression(
DataType: MFiles$MFiles$MFDataType,
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
PCBehavior: MFiles$MFiles$MFParentChildBehavior,
DataFunctionCall: IDataFunctionCall): void,
SetValueListItemExpression(
PseudoPropertyDef: MFiles$MFiles$MFValueListItemPropertyDef,
PCBehavior: MFiles$MFiles$MFParentChildBehavior,
DataFunctionCall: IDataFunctionCall): void
} 
	declare interface IExpressionEx {
Conditions: ISearchConditions,
Expression: IExpression,
FolderListingAlgorithm: MFiles$MFiles$MFFolderListingAlgorithm,
NULLFolderName: string,
ShowContentsAsJITFolders: boolean,
ShowEmptyFolders: boolean,
ShowMatchingObjectsOnThisLevel: boolean,
ShowNULLFolder: boolean,
ShowNULLFolderContentsOnThisLevel: boolean,
Clone(): IExpressionEx
} 
	declare interface IExpressionExs {
+Count: number,
Add(Index: number, ExpressionEx: IExpressionEx): void,
Clone(): IExpressionExs,
Item(Index: number): IExpressionEx,
Item(Index: number, value: IExpressionEx): void,
Remove(Index: number): void
} 
	declare interface IExpressions {
+Count: number,
Add(Index: number, Expression: IExpression): void,
Clone(): IExpressions,
Item(Index: number): IExpression,
Item(Index: number, value: IExpression): void,
Remove(Index: number): void
} 
	declare interface IFileClass {
DisplayName: string,
+DotAndExtension: string,
+Extension: string,
+FileClass: string,
Clone(): IFileClass,
LoadByExtension(Extension: string): void,
LoadByFileClass(Extension: string, FileClass: string): void,
SetFileClassInfo(
DotAndFileExtension: string,
FileClass: string,
FileClassDisplayName: string): void
} 
	declare interface IFileClasses {
+Count: number,
Add(Index: number, FileClass: IFileClass): void,
Clone(): IFileClasses,
Item(Index: number): IFileClass,
Remove(Index: number): void
} 
	declare interface IFileDownloadSession {
+DownloadID: number,
+FileSize: number,
+FileSize32: number
} 
	declare interface IFileInformation {
EmailMessage: IEmailMessageInformation,
FileType: MFiles$MFiles$MFFileInformationType,
Clear(): void,
ExtractFromFile(PathToFile: string): void
} 
	declare interface IFileVer {
ID: number,
Version: number,
Clone(): IFileVer,
CloneFrom(FileVer: IFileVer): void
} 
	declare interface IFileVers {
+Count: number,
Add(Index: number, FileVer: IFileVer): void,
Clone(): IFileVers,
Item(Index: number): IFileVer,
Remove(Index: number): void
} 
	declare interface IFolderContentItem {
+FolderContentItemType: MFiles$MFiles$MFFolderContentItemType,
+ObjectVersion: IObjectVersion,
+PropertyFolder: ITypedValue,
+TraditionalFolder: ILookup,
+View: IView
} 
	declare interface IFolderContentItems {
+Count: number,
+MoreResults: boolean,
Item(Index: number): IFolderContentItem
} 
	declare interface IFolderDef {
+FolderDefType: MFiles$MFiles$MFFolderDefType,
+PropertyFolder: ITypedValue,
+SearchDef: ISearchDef,
+TraditionalFolder: number,
+View: (MFiles$MFiles$MFBuiltInView | number),
Clone(): IFolderDef,
SetPropertyFolder(TypedValue: ITypedValue): void,
SetSearchDef(SearchDef: ISearchDef): void,
SetTraditionalFolder(TraditionalFolder: number): void,
SetView(View: MFiles$MFiles$MFBuiltInView | number): void
} 
	declare interface IFolderDefs {
+Count: number,
Add(Index: number, FolderDef: IFolderDef): void,
Clone(): IFolderDefs,
Item(Index: number): IFolderDef,
Remove(Index: number): void
} 
	declare interface IFolderListingColumn {
Flags: MFiles$MFiles$MFFolderListingColumnFlags,
+ID: number,
+Name: string,
Position: number,
Visible: boolean,
Width: number,
Clone(): IFolderListingColumn
} 
	declare interface IFolderListingColumns {
+Count: number,
Add(Index: number, FolderListingColumn: IFolderListingColumn): void,
Item(Index: number): IFolderListingColumn,
Item(Index: number, value: IFolderListingColumn): void,
Remove(Index: number): void
} 
	declare interface IFolderListingColumnSorting {
ID: number,
Index: number,
SortAscending: boolean,
Clone(): IFolderListingColumnSorting
} 
	declare interface IFolderListingColumnSortings {
+Count: number,
Add(Index: number, FolderListingColumnSorting: IFolderListingColumnSorting): void,
Item(Index: number): IFolderListingColumnSorting,
Item(Index: number, value: IFolderListingColumnSorting): void,
Remove(Index: number): void
} 
	declare interface IFolderListingUIState {
Columns: IFolderListingColumns,
ColumnSortings: IFolderListingColumnSortings,
GroupingMode: MFiles$MFiles$MFFolderListingItemGroupingMode,
IconSize: number,
ViewMode: MFiles$MFiles$MFFolderListingViewMode
} 
	declare interface IFolderNameListing {
+Count: number,
+MoreValues: boolean,
Item(Index: number): ITypedValue,
SortWithExpression(Expression: IExpression, Locale: number): void
} 
	declare interface IFolderUIState {
BottomPaneBarMinimized: boolean,
HitHighlightingEnabled: boolean,
+ListingUIState: IFolderListingUIState,
MetadataEditorInRightPane: boolean,
RelativeBottomPaneHeight: number,
RelativeRightPaneWidth: number,
RightPaneBarMinimized: boolean,
ShowBottomPaneBar: boolean,
ShowRightPaneBar: boolean
} 
	declare interface IIDRange {
MaxID: number,
MaxID_32bit: string,
MinID: number,
MinID_32bit: string,
Clone(): IIDRange,
SetIDs(MinID: number, MaxID: number): void,
SetIDs_32bit(MinID: string, MaxID: string): void
} 
	declare interface IIDs {
+Count: number,
Add(Index: number, ID: number): void,
Clone(): IIDs,
IndexOf(ID: number): number,
Item(Index: number): number,
Remove(Index: number): void,
RemoveAll(ID: number): number
} 
	declare interface IImpersonation {
Account: string,
ImpersonationType: MFiles$MFiles$MFImpersonationType,
Password: string,
Clone(): IImpersonation
} 
	declare interface IImportContentJob {
ActivateAutomaticPermissionsForNewOrChangedDefinitions: boolean,
DisableImportedExternalObjectTypeConnections: boolean,
DisableImportedExternalUserGroups: boolean,
DisableImportedVaultEventHandlers: boolean,
Flags: MFiles$MFiles$MFImportContentFlag,
IgnoreAutomaticPermissionsDefinedByObjects: boolean,
Impersonation: IImpersonation,
MetadataStructureSelectors: IMetadataStructureSelectors,
Permissions: IAccessControlList,
ResetExportTimestamps: boolean,
SourceLocation: string,
UseDefaultObjectTypePermissions: boolean,
UseNamesAsAliases: boolean,
UsePermissions: boolean,
Clone(): IImportContentJob
} 
	declare interface IIndirectPropertyID {
+Count: number,
Add(Index: number, IndirectPropertyIDLevel: IIndirectPropertyIDLevel): void,
Clone(): IIndirectPropertyID,
EqualTo(IndirectPropertyID: IIndirectPropertyID): boolean,
Item(Index: number): IIndirectPropertyIDLevel,
Remove(Index: number): void,
ToJSON(): string
} 
	declare interface IIndirectPropertyIDLevel {
ID: number,
LevelType: MFiles$MFiles$MFIndirectPropertyIDLevelType,
Clone(): IIndirectPropertyIDLevel,
ToJSON(): string
} 
	declare interface IKeyNamePair {
+Key: number,
+Name: string,
Clone(): IKeyNamePair
} 
	declare interface IKeyNamePairs {
+Count: number,
Item(Index: number): IKeyNamePair
} 
	declare interface ILanguage {
+ID: number,
LanguageCode: string,
Name: string
} 
	declare interface ILanguages {
+Count: number,
Item(Index: number): ILanguage
} 
	declare interface ILicenseStatus {
+EvaluationDaysLeft: number,
+EvaluationMode: boolean,
+Expired: boolean,
+LicenseCode: string,
+NumOfConcurrentUserLicenses: number,
+NumOfNamedUserLicenses: number,
+NumOfReadonlyLicenses: number,
+SerialNumber: string,
ClearLicenseCode(): void
} 
	declare interface ILoginAccount {
+AccountName: string,
AccountType: MFiles$MFiles$MFLoginAccountType,
DomainName: string,
EmailAddress: string,
Enabled: boolean,
FullName: string,
LicenseType: MFiles$MFiles$MFLicenseType,
ServerRoles: MFiles$MFiles$MFLoginServerRole,
UserName: string,
Clone(): ILoginAccount,
CloneFrom(LoginAccount: ILoginAccount): void,
Set(
LoginAccountType: MFiles$MFiles$MFLoginAccountType,
DomainName: string,
UserName: string,
ServerRoles: MFiles$MFiles$MFLoginServerRole,
FullName: string,
EmailAddress: string,
LicenseType: MFiles$MFiles$MFLicenseType): void
} 
	declare interface ILoginAccountPersonalInformation {
+AccountName: string,
+Email: string,
+FullName: string
} 
	declare interface ILoginAccounts {
+Count: number,
Item(Index: number): ILoginAccount
} 
	declare interface ILookup {
Deleted: boolean,
+DisplayID: string,
+DisplayIDAvailable: boolean,
DisplayValue: string,
+Hidden: boolean,
Item: number,
ItemGUID: string,
+ObjectFlags: MFiles$MFiles$MFSpecialObjectFlag,
ObjectType: (MFiles$MFiles$MFBuiltInObjectType | number),
Version: number,
Clone(): ILookup,
CloneFrom(Lookup: ILookup): void,
GetFormattedDisplayValue(
Localized: boolean,
EmptyLookupDispValuesAsHidden: boolean,
AddDeletedSuffixIfDeleted: boolean): string
} 
	declare interface ILookups {
+Count: number,
Add(Index: number, Lookup: ILookup): void,
Clone(): ILookups,
CloneFrom(Lookups: ILookups): void,
GetLookupByItem(Item: number): ILookup,
GetLookupIndexByItem(Item: number): number,
Item(Index: number): ILookup,
Remove(Index: number): void
} 
	declare interface IMessage {
button1_enabled?: boolean,
button1_title?: string,
button2_enabled?: boolean,
button2_title?: string,
button3_enabled?: boolean,
button3_title?: string,
button4_enabled?: boolean,
button4_title?: string,
cancelButton?: (1 | 2 | 3 | 4),
caption?: string,
checkbox_checked?: boolean,
checkbox_enabled?: boolean,
checkbox_title?: string,
defaultButton?: (1 | 2 | 3 | 4),
icon?: string,
message?: string,
timeOut?: number,
timeout_deactivateOnFocusChange?: boolean,
timeOutButton?: (1 | 2 | 3 | 4)
} 
	declare interface IMetadataCard {
+ActiveView: string,
+DataModel: IMetadataCardModel,
+Events: IEvents,
+HitHighlightingActive: boolean,
+Location: string,
+Minimized: boolean,
+Parent: any,
+PreviewerVisible: boolean,
+PreviewerWidth: number,
+SearchHits: string,
+Vault: IVault,
+Views: ICollection,
GetApplyAction(): IMetadataCardAction,
GetApplyAllAction(): IMetadataCardAction,
GetCheckInImmediatelyOption(): IMetadataCardOption,
GetDiscardAction(): IMetadataCardAction,
GetFavoriteObjectOption(): IMetadataCardOption,
GetFollowThisObjectOption(): IMetadataCardOption,
GetHeight(): number,
GetOpenForEditOption(): IMetadataCardOption,
GetPopOutAction(): IMetadataCardAction,
GetSkipAction(): IMetadataCardAction,
GetUIData(key: string, defaultData: any): any,
GetUseAsDefaultsOption(): IMetadataCardOption,
GetWidth(): number,
IsModified(): boolean,
IsOnMultiItemSequence(): boolean,
IsPoppedOut(): boolean,
PromptForValue(dialog: any): boolean,
ResumeAsyncOp(): void,
SetEditStateDirty(dirty: boolean): void,
SetHeight(Height: number): void,
SetLocation(location: string): void,
SetMinimized(Minimized: boolean): void,
SetWidth(Width: number): void,
ShowMessage(message: string | IMessage): number,
ShowNewObjectDialog(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
defaultName: string): any,
ShowPermissionsDialog(): void,
StorePreviewerState(previewerVisible: boolean, previewerWidth: number): void,
StoreUIData(
key: string,
data: any,
dataIsModeSpecific: boolean,
dataIsLayoutSpecific: boolean,
dataIsPermanent: boolean): void,
SuspendAsyncOp(): void
} 
	declare interface IMetadataCardAction {
+Events: IEvents,
Activate(): void,
GetExplanation(): string,
GetName(): string,
IsEnabled(): boolean,
IsVisible(): boolean
} 
	declare interface IMetadataCardCommentHistoryItem {
GetCommentAuthor(): string,
GetCommentText(): string,
GetCommentTimestamp(): any,
GetCommentVersion(): number
} 
	declare interface IMetadataCardControl {
+AllowAdding: boolean,
+Events: IEvents,
+Hierarchical: boolean,
+ID: string,
Label: string,
+Linked: boolean,
Modified: boolean,
MustExist: boolean,
+PropertyDef: (MFiles$MFiles$MFBuiltInPropertyDef | number),
ReadOnly: boolean,
+RealObjectType: boolean,
+Type: string,
Value: any,
+Valuelist: (MFiles$MFiles$MFBuiltInValueList | number),
ValueRequired: boolean,
Visible: boolean,
ActivateLink(valuePart: any): void,
AddNewItem(name: string): any,
AddNewSubItem(name: string, valueParent: any): any,
AllowHitHighlighting(): boolean,
CanActivateLink(valuePart: any): boolean,
CanAddNewSubItem(name: string, valueParent: any): boolean,
CanEditItem(value: any): boolean,
CreateSelectionList(): IMetadataCardSelectionList,
CreateUnvalidatedValue(valueString: string): IMetadataCardUnvalidatedValue,
EditItem(value: any): any,
FindItem(name: string): any,
FindItemByID(itemID: number): any,
GetSelectableValueItemStates(): any,
GetValueSuggestions(): any,
HasAutomaticValue(): boolean,
HasInitialValue(): boolean,
HasUncalculatedAutomaticValue(): boolean,
IsExternal(): boolean,
RefreshList(): void,
Remove(): void,
RevertToInitialValue(): void,
SetValueItemState(itemID: string, state: any): void
} 
	declare interface IMetadataCardModel {
+CheckedOutTo: IMetadataCardControl,
+ClassSelector: IMetadataCardControl,
+Comment: IMetadataCardControl,
+DataModels: ICollection,
+Events: IEvents,
+IconURL: string,
+ID: string,
+IsFileAvailableForPreview: boolean,
+IsUpdating: boolean,
+ObjectId: IMetadataCardControl,
+ObjectType: IMetadataCardControl,
+ObjectTypeId: IMetadataCardControl,
+ObjectVersion: IMetadataCardControl,
+ObjVers: IObjVers,
+PermissionsDescription: string,
+PropertyControls: ICollection,
+PropertySelector: IMetadataCardControl,
+SaveAsTypeSelector: IMetadataCardControl,
+Title: IMetadataCardControl,
+UncreatedObject: boolean,
AddProperty(propertyDefId: MFiles$MFiles$MFBuiltInPropertyDef | number): void,
GetCommentVersionHistory(): any,
GetError(): any,
GetIconOverlayHint(): string,
GetObjectSourceFiles(): any,
GetObjectTemplateDescription(): string,
GetRemoteVaultAction(): IMetadataCardAction,
GetSubObjectsAction(): IMetadataCardAction,
GetValueListItemIdByGUID(
propertyDefId: MFiles$MFiles$MFBuiltInPropertyDef | number,
guidToLookFor: string): number,
IsModified(): boolean,
Rebuild(
iterationCounter: number,
classChanged: boolean,
addedPropertyDef: number): boolean,
SetAdditionalPropertyDefs(additionalPropertyDefs: any): void,
SetCustomPlaceholders(customPlaceholders: any): void,
SetRequiredPropertyDefs(requiredPropertyDefs: any): void,
SetUnevaluatedPropertyValues(unevaluatedValues: any): void,
ShowFilePreview(previewer: any): void
} 
	declare interface IMetadataCardMultiValue {
+ID: string,
+IsMultiValue: boolean,
+State: any,
+ValueParts: any
} 
	declare interface IMetadataCardMultiValuePart {
+ID: any,
+Value: any
} 
	declare interface IMetadataCardOption {
+Events: IEvents,
GetExplanation(): string,
GetName(): string,
GetOptionValue(): any,
IsEnabled(): boolean,
IsVisible(): boolean,
SetOptionValue(value: any): void
} 
	declare interface IMetadataCardSelectionList {
+Events: IEvents,
+Filter: string,
+FilteringValue: string,
+Items: any,
+MoreResults: boolean,
AutoSelect(identifier: string): void,
SetFilter(Filter: string, token: number, maxResults: number): void
} 
	declare interface IMetadataCardSelectionListItem {
+ChildItems: any,
+HasParent: boolean,
+ParentID: number,
+Selectable: boolean,
+Value: any
} 
	declare interface IMetadataCardUnvalidatedValue {
+ID: string,
+IsMultiValue: boolean,
+IsUnvalidated: boolean,
+Name: string
} 
	declare interface IMetadataCardValue {
+HasIcon: boolean,
+IconURL: string,
+ID: string,
+IsMultiValue: boolean,
+Item: number,
+Name: string,
+State: any,
+Version: number,
IsDeleted(): boolean,
IsHidden(): boolean
} 
	declare interface IMetadataCardValueSuggestion {
+IsNewValue: boolean,
+Name: string,
+Value: any
} 
	declare interface IMetadataCardView {
DashboardID: string,
+Events: IEvents,
Name: string
} 
	declare interface IMetadataStructureSelector {
Flags: MFiles$MFiles$MFMetadataStructureSelectorFlags,
ID: string,
Name: string,
StructureItemGUID: string,
StructureItemID: number,
StructureItemSemanticAlias: string,
StructureItemType: MFiles$MFiles$MFMetadataStructureItem,
Clone(): IMetadataStructureSelector
} 
	declare interface IMetadataStructureSelectors {
+Count: number,
Add(Index: number, MetadataStructureSelector: IMetadataStructureSelector): void,
Clone(): IMetadataStructureSelectors,
Item(Index: number): IMetadataStructureSelector,
Item(Index: number, value: IMetadataStructureSelector): void,
Remove(Index: number): void
} 
	declare interface IMFDocListCtrl {
AttachToListingWindow(shellListing: any): void
} 
	declare interface IMFilesClientApplication {
AddVaultConnection(VaultConnection: IVaultConnection): void,
BindToVault(
VaultConnection: string,
ParentWindow: number,
CanLogIn: boolean,
ReturnNULLIfCancelledByUser: boolean): IVault,
FindFile(Path: string, UpdateFromServer: boolean): IObjectFileAndVersion,
FindObjectVersionAndProperties(Path: string, UpdateFromServer: boolean): IObjectVersionAndProperties,
GetAPIVersion(): IMFilesVersion,
GetClientLanguage(): string,
GetClientVersion(): IMFilesVersion,
GetDriveLetter(): string,
GetVaultConnection(VaultConnection: string): IVaultConnection,
GetVaultConnections(): IVaultConnections,
GetVaultConnectionsWithGUID(GUID: string): IVaultConnections,
IsObjectPathInMFiles(Path: string): boolean,
LogInAs(
VaultConnection: string,
ParentWindow: number,
DefaultAuthType: MFiles$MFiles$MFAuthType,
ReturnNULLIfCancelledByUser: boolean): IVault,
LogInAsUser(
VaultConnection: string,
AuthType: MFiles$MFiles$MFAuthType,
UserName: string,
Password: string,
Domain: string | null,
SPN: string | null): IVault,
RemoveVaultConnection(VaultConnectionName: string, UserSpecific: boolean): void,
ShowBalloonTip(
Msg: string,
Title: string,
Timeout: number,
InfoFlags: number,
RemovePrevious: boolean): void,
TestConnectionToServerEx(
Server: string,
Port: string,
ProtocolSequence: string,
EncryptedConnection: boolean): number
} 
	declare interface IMFilesServerApplication {
+LicenseManagementOperations: IServerLicenseManagementOperations,
+LoginAccountOperations: IServerLoginAccountOperations,
+ScheduledJobManagementOperations: IServerScheduledJobManagementOperations,
+ServerManagementOperations: IServerManagementOperations,
+SharedLinkPublicOperations: ISharedLinkPublicOperations,
+VaultManagementOperations: IServerVaultManagementOperations,
Connect(
AuthType: MFiles$MFiles$MFAuthType,
UserName: string | null,
Password: string | null,
Domain: string | null,
ProtocolSequence: string,
NetworkAddress: string,
Endpoint: string,
LocalComputerName: string,
AllowAnonymousConnection: boolean): MFiles$MFiles$MFServerConnection,
ConnectAdministrativeEx(
TimeZone: ITimeZoneInformation,
AuthType: MFiles$MFiles$MFAuthType,
UserName: string | null,
Password: string | null,
Domain: string | null,
SPN: string | null,
ProtocolSequence: string,
NetworkAddress: string,
Endpoint: string,
EncryptedConnection: boolean,
LocalComputerName: string): MFiles$MFiles$MFServerConnection,
ConnectEx3(
TimeZone: ITimeZoneInformation,
AuthType: MFiles$MFiles$MFAuthType,
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
LogicalTargetServer: string): MFiles$MFiles$MFServerConnection,
ConnectEx4(
TimeZone: ITimeZoneInformation,
AuthType: MFiles$MFiles$MFAuthType,
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
ClientCulture: string): MFiles$MFiles$MFServerConnection,
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
LogicalTargetServer: string): IAuthenticationResult,
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
ClientCulture: string): IAuthenticationResult,
ConnectWithoutLogin(
TimeZone: ITimeZoneInformation,
ProtocolSequence: string,
NetworkAddress: string,
Endpoint: string,
LocalComputerName: string,
LogicalTargetServer: string,
ClientCulture: string): MFiles$MFiles$MFServerConnection,
Disconnect(): void,
GetAPIVersion(): IMFilesVersion,
GetAuthenticationPluginInformationEx(
UserName: string,
Domain: string,
VaultGUID: string,
HostName: string,
AccountType: MFiles$MFiles$MFLoginAccountType,
TargetPluginName: string,
ProtocolSequence: string,
NetworkAddress: string,
Endpoint: string,
EncryptedConnection: boolean): IPluginInfos,
GetAuthenticationPluginsEx(
ScopeIndependentOnly: boolean,
ProtocolSequence: string,
NetworkAddress: string,
Endpoint: string,
EncryptedConnection: boolean): IPluginInfos,
GetOnlineVaults(): IVaultsOnServer,
GetServerVersion(): IMFilesVersion,
GetTokenAsAuthenticationData(Token: string): INamedValues,
GetVaults(): IVaultsOnServer,
LogInAsUserToVault(
VaultGUID: string,
TimeZone: ITimeZoneInformation,
AuthType: MFiles$MFiles$MFAuthType,
UserName: string | null,
Password: string | null,
Domain: string | null): IVault,
LogInAsUserToVaultWithSPN(
VaultGUID: string,
TimeZone: ITimeZoneInformation,
AuthType: MFiles$MFiles$MFAuthType,
UserName: string | null,
Password: string | null,
Domain: string | null,
SPN: string | null): IVault,
LogInToVault(VaultGUID: string): IVault,
LogInToVaultAdministrative(VaultGUID: string): IVault,
LogInToVaultAdministrativeWithExistingSession(VaultGUID: string): IVault,
LogInToVaultEx(VaultGUID: string, AllowUsingAuthenticationPlugins: boolean): IVault,
LogInToVaultWithExistingSession(VaultGUID: string): IVault,
TestConnectionToServerEx(
Server: string,
Port: string,
ProtocolSequence: string,
EncryptedConnection: boolean): number
} 
	declare interface IMFilesVersion {
Build: number,
+Display: string,
Major: number,
Minor: number,
Patch: number,
SoftwarePlatform: MFiles$MFiles$MFSoftwarePlatformType,
Clone(): IMFilesVersion,
CompareTo(RightSide: IMFilesVersion): number
} 
	declare interface IMFResourceManager {
GetLocaleSpecificDateFormat(): string,
GetUICultures(): IStrings,
LoadResourceString(LanguageID: number, ResourceID: number): string
} 
	declare interface IMonthlyDateTrigger {
Days: number,
Months: MFiles$MFiles$MFTriggerMonth
} 
	declare interface IMonthlyDOWTrigger {
DaysOfTheWeek: MFiles$MFiles$MFTriggerWeekDay,
Months: MFiles$MFiles$MFTriggerMonth,
WhichWeek: MFiles$MFiles$MFTriggerWeekOfMonth
} 
	declare interface INamedACL {
AccessControlList: IAccessControlList,
+GUID: string,
ID: number,
Name: string,
+NamedACLType: MFiles$MFiles$MFNamedACLType,
Clone(): INamedACL
} 
	declare interface INamedACLAdmin {
AccessControlListForNamedACL: IAccessControlList,
NamedACL: INamedACL,
SemanticAliases: ISemanticAliases,
Clone(): INamedACLAdmin
} 
	declare interface INamedACLs {
+Count: number,
Item(Index: number): INamedACL
} 
	declare interface INamedACLsAdmin {
+Count: number,
Item(Index: number): INamedACLAdmin
} 
	declare interface INamedValueNamespace {
NamedValues: INamedValues,
NamespaceName: string,
Clone(): INamedValueNamespace
} 
	declare interface INamedValueNamespaces {
+Count: number,
Add(Index: number, NamedValueNamespace: INamedValueNamespace): void,
Clone(): INamedValueNamespaces,
Item(Index: number): INamedValueNamespace,
Item(Index: number, value: INamedValueNamespace): void,
Remove(Index: number): void
} 
	declare interface INamedValues {
Modified: boolean,
+Names: IStrings,
Clone(): INamedValues,
Contains(Name: string): boolean,
Value(ValueName: string): any,
Value(ValueName: string, value: any): void
} 
	declare interface INumber {
Value: number,
Clone(): INumber
} 
	declare interface IObjectClass {
AccessControlList: IAccessControlList,
+AdditionalClassInfo: IAdditionalClassInfo,
AssociatedPropertyDefs: IAssociatedPropertyDefs,
AutomaticPermissionsForObjects: IAutomaticPermissions,
ForceWorkflow: boolean,
ID: number,
Name: string,
NamePropertyDef: number,
ObjectType: (MFiles$MFiles$MFBuiltInObjectType | number),
Workflow: number,
Clone(): IObjectClass
} 
	declare interface IObjectClassAdmin {
+AdditionalClassInfo: IAdditionalClassInfo,
AssociatedPropertyDefs: IAssociatedPropertyDefs,
AutomaticPermissionsForObjects: IAutomaticPermissions,
ForceWorkflow: boolean,
ID: number,
Name: string,
NamePropertyDef: number,
ObjectType: (MFiles$MFiles$MFBuiltInObjectType | number),
Predefined: boolean,
SemanticAliases: ISemanticAliases,
Workflow: number,
Clone(): IObjectClassAdmin
} 
	declare interface IObjectClasses {
+Count: number,
Add(Index: number, ObjectClass: IObjectClass): void,
Clone(): IObjectClasses,
Item(Index: number): IObjectClass,
Remove(Index: number): void
} 
	declare interface IObjectClassesAdmin {
+Count: number,
Add(Index: number, ObjectClassAdmin: IObjectClassAdmin): void,
Item(Index: number): IObjectClassAdmin,
Remove(Index: number): void
} 
	declare interface IObjectComparer {
Compare(
ObjectVersionDataLeft: IObjectVersion,
ObjectVersionDataRight: IObjectVersion): number
} 
	declare interface IObjectCreationInfo {
DisallowTemplateSelection: boolean,
ExplicitObjectID: number,
IsObjectShortcut: boolean,
ObjectGUID: string,
OkToAllButtonVisible: boolean,
SkipThisButtonVisible: boolean,
GetDisableObjectCreation(): boolean,
GetExtension(): string,
GetMetadataCardTitle(): string,
GetObjectType(): number,
GetSelectableFileClasses(): IFileClasses,
GetSelectedFileClass(): IFileClass,
GetSingleFileDocument(): boolean,
GetSourceFiles(): ISourceObjectFiles,
GetTemplate(): IObjVer,
GetTitle(): ITypedValue,
GetTitleAsText(): string,
GetUseAsDefaults(): boolean,
SetDisableObjectCreation(Disable: boolean): void,
SetExtension(Extension: string, Editable: boolean): void,
SetMetadataCardTitle(MetadataCardTitle: string): void,
SetObjectType(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Editable: boolean): void,
SetSelectableFileClasses(FileClasses: IFileClasses): void,
SetSelectedFileClass(FileClass: IFileClass, Editable: boolean): void,
SetSingleFileDocument(SingleFile: boolean, Editable: boolean): void,
SetSourceFiles(SourceFiles: ISourceObjectFiles): void,
SetTemplate(Template: IObjVer): void,
SetTitle(Title: ITypedValue, Editable: boolean): void,
SetTitleAsDatatypeText(Title: string, Editable: boolean): void,
SetUseAsDefaults(UseAsDefaults: boolean, Editable: boolean): void
} 
	declare interface IObjectFile {
+ChangeTimeUtc: Date,
+CreationTimeUtc: Date,
+Extension: string,
+FileGUID: string,
+FileVer: IFileVer,
+ID: number,
+LastAccessTimeUtc: Date,
+LastWriteTimeUtc: Date,
+LogicalSize: number,
+LogicalSize_32bit: number,
+Title: string,
+Version: number,
GetNameForFileSystem(): string,
ToJSON(): string
} 
	declare interface IObjectFileAndObjVer {
+ObjectFile: IObjectFile,
+ObjVer: IObjVer,
Clone(): IObjectFileAndObjVer,
ToJSON(): string
} 
	declare interface IObjectFileAndObjVerOfMultipleFiles {
+Count: number,
Add(Index: number, ObjectFileAndObjVer: IObjectFileAndObjVer): void,
Clone(): IObjectFileAndObjVerOfMultipleFiles,
Item(Index: number): IObjectFileAndObjVer,
Remove(Index: number): void
} 
	declare interface IObjectFileAndVersion {
+ObjectFile: IObjectFile,
+ObjectVersion: IObjectVersionAndProperties
} 
	declare interface IObjectFileComparer {
Compare(FileLeft: IObjectFile, FileRight: IObjectFile): number
} 
	declare interface IObjectFiles {
+Count: number,
GetObjectFileByNameForFileSystem(NameForFileSystem: string): IObjectFile,
GetObjectFileIndexByNameForFileSystem(NameForFileSystem: string): number,
Item(Index: number): IObjectFile,
Sort(ObjectFileComparer: IObjectFileComparer): void,
ToJSON(): string
} 
	declare interface IObjectSearchResults {
+Count: number,
+MoreResults: boolean,
Clone(): IObjectSearchResults,
GetAsObjectVersions(): IObjectVersions,
GetScoreOfObject(ObjVer: IObjVer): number,
Item(Index: number): IObjectVersion,
ScoreAt(Index: number): number,
Sort(ObjectComparer: IObjectComparer): void,
SortByScore(Ascending: boolean): void
} 
	declare interface IObjectTemplateSelector {
+ClassSelector: IMetadataCardControl,
+Events: IEvents,
GetObjectTypeIconURL(): string,
GetObjectTypeId(): number,
GetObjectTypeName(): string,
GetTemplateItems(): any,
SelectItem(itemID: string): void
} 
	declare interface IObjectTemplateSelectorItem {
GetClassID(): number,
GetClassName(): string,
GetGroupID(): number,
GetGroupName(): string,
GetIconURL(): string,
GetID(): string,
GetName(): string,
GetTemplateID(): number,
IsBlankItem(): boolean,
IsDefaultTemplateForClass(): boolean
} 
	declare interface IObjectType {
AccessControlList: IAccessControlList,
AllowAdding: boolean,
AllowedAsGroupingLevel: boolean,
CanHaveFiles: boolean,
DefaultAccessControlList: IAccessControlList,
DefaultPropertyDef: number,
External: boolean,
+GUID: string,
HasOwnerType: boolean,
Hierarchical: boolean,
Icon: $ReadOnlyArray<number>,
ID: number,
NamePlural: string,
NameSingular: string,
ObjectTypeTargetsForBrowsing: IObjectTypeTargetsForBrowsing,
OwnerPropertyDef: number,
OwnerType: number,
+ReadOnlyPropertiesDuringInsert: IIDs,
+ReadOnlyPropertiesDuringUpdate: IIDs,
RealObjectType: boolean,
ShowCreationCommandInTaskPane: boolean,
Translatable: boolean,
CanHaveItemIcons(): boolean,
Clone(): IObjectType,
GetIconAsPNG(Width: number, Height: number): $ReadOnlyArray<number>,
IsAddingAllowedForUser(SessionInfo: ISessionInfo): boolean
} 
	declare interface IObjectTypeAdmin {
ColumnMappings: IObjectTypeColumnMappings,
ConnectionString: string,
DefaultForAutomaticPermissions: IAutomaticPermissions,
DeleteStatement: string,
InsertIntoStatement: string,
NamedValueNamespaces: INamedValueNamespaces,
ObjectType: IObjectType,
SelectExtIDStatement: string,
SelectStatement: string,
SelectStatementOneRecord: string,
SemanticAliases: ISemanticAliases,
Translatable: boolean,
UpdateStatement: string,
Clone(): IObjectTypeAdmin
} 
	declare interface IObjectTypeColumnMapping {
ObjectType: (MFiles$MFiles$MFBuiltInObjectType | number),
Ordinal: number,
PartOfInsert: boolean,
PartOfUpdate: boolean,
SourceField: string,
TargetPropertyDef: number,
Type: number,
Clone(): IObjectTypeColumnMapping
} 
	declare interface IObjectTypeColumnMappings {
+Count: number,
Add(Index: number, ObjectTypeColumnMapping: IObjectTypeColumnMapping): void,
Clone(): IObjectTypeColumnMappings,
Item(Index: number): IObjectTypeColumnMapping,
Remove(Index: number): void
} 
	declare interface IObjectTypes {
+Count: number,
Clone(): IObjectTypes,
Item(Index: number): IObjectType
} 
	declare interface IObjectTypesAdmin {
+Count: number,
Item(Index: number): IObjectTypeAdmin
} 
	declare interface IObjectTypeTargetForBrowsing {
TargetObjectType: number,
ViewCollection: number,
Clone(): IObjectTypeTargetForBrowsing
} 
	declare interface IObjectTypeTargetsForBrowsing {
+Count: number,
Add(Index: number, ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing): void,
Clone(): IObjectTypeTargetsForBrowsing,
Item(Index: number): IObjectTypeTargetForBrowsing,
Remove(Index: number): void
} 
	declare interface IObjectVersion {
+AccessedByMeUtc: Date,
+CheckedOutAtUtc: Date,
+CheckedOutTo: number,
+CheckedOutToHostName: string,
+CheckedOutToUserName: string,
+CheckedOutVersion: number,
+Class: (MFiles$MFiles$MFBuiltInDocumentClass | MFiles$MFiles$MFBuiltInObjectClass | number),
+CreatedUtc: Date,
+Deleted: boolean,
+DisplayID: string,
+DisplayIDAvailable: boolean,
+Files: IObjectFiles,
+FilesCount: number,
+HasAssignments: boolean,
+HasSharedFiles: boolean,
+IsAccessedByMeValid: boolean,
+IsObjectConflict: boolean,
+IsObjectShortcut: boolean,
+LastModifiedUtc: Date,
+LatestCheckedInVersion: number,
+LatestCheckedInVersionOrCheckedOutVersion: boolean,
+ObjectCheckedOut: boolean,
+ObjectCheckedOutToThisUserOnAnyComputer: boolean,
+ObjectCheckedOutToThisUserOnThisComputer: boolean,
+ObjectFlags: MFiles$MFiles$MFSpecialObjectFlag,
+ObjectGUID: string,
+ObjectVersionFlags: MFiles$MFiles$MFObjectVersionFlag,
+ObjVer: IObjVer,
+OriginalObjID: IObjID,
+OriginalVaultGUID: string,
+SingleFile: boolean,
+ThisVersionCheckedOut: boolean,
+ThisVersionLatestToThisUser: boolean,
+Title: string,
+VersionGUID: string,
+VisibleAfterOperation: boolean,
Clone(): IObjectVersion,
GetNameForFileSystem(IncludeID: boolean): string,
GetNameForFileSystemEx(IncludeID: boolean, UseOriginalID: boolean): string
} 
	declare interface IObjectVersionAndProperties {
+ObjVer: IObjVer,
+Properties: IPropertyValues,
+Vault: IVault,
+VersionData: IObjectVersion,
Clone(): IObjectVersionAndProperties
} 
	declare interface IObjectVersionAndPropertiesOfMultipleObjects {
+Count: number,
Add(Index: number, ObjectVersionAndProperties: IObjectVersionAndProperties): void,
Clone(): IObjectVersionAndPropertiesOfMultipleObjects,
Item(Index: number): IObjectVersionAndProperties,
Remove(Index: number): void
} 
	declare interface IObjectVersionPermissions {
+AccessControlList: IAccessControlList,
+CustomACL: boolean,
+NamedACL: INamedACL,
+ObjVer: IObjVer
} 
	declare interface IObjectVersions {
+Count: number,
Add(Index: number, ObjectVersionData: IObjectVersion): void,
GetAsObjVers(): IObjVers,
Item(Index: number): IObjectVersion,
Item(Index: number, value: IObjectVersion): void,
Remove(Index: number): void,
Sort(ObjectComparer: IObjectComparer): void
} 
	declare interface IObjectVersionWorkflowState {
State: IPropertyValue,
VersionComment: IPropertyValue,
Workflow: IPropertyValue
} 
	declare interface IObjectWindowResult {
+AccessControlList: IAccessControlList,
+ObjVer: IObjVer,
+Properties: IPropertyValues,
+Result: MFiles$MFiles$MFObjectWindowResultCode,
+SelectedFileClass: IFileClass,
+UseAsDefaults: boolean,
+Visible: boolean
} 
	declare interface IObjID {
ID: number,
Type: number,
Clone(): IObjID,
CloneFrom(ObjID: IObjID): void,
Serialize(): $ReadOnlyArray<number>,
SetIDs(ObjType: number, ID: number): void,
ToJSON(): string,
Unserialize(Bytes: $ReadOnlyArray<number>): void
} 
	declare interface IObjIDs {
+Count: number,
Add(Index: number, ObjID: IObjID): void,
Item(Index: number): IObjID,
Item(Index: number, value: IObjID): void,
Remove(Index: number): void,
ToJSON(): string
} 
	declare interface IObjOrFileVer {
FileVer: IFileVer,
ObjVer: IObjVer,
Clone(): IObjOrFileVer,
IsFile(): boolean
} 
	declare interface IObjOrFileVers {
+Count: number,
Add(Index: number, ObjOrFileVer: IObjOrFileVer): void,
Clone(): IObjOrFileVers,
Item(Index: number): IObjOrFileVer,
Remove(Index: number): void
} 
	declare interface IObjVer {
ID: number,
ObjID: IObjID,
Type: number,
Version: number,
Clone(): IObjVer,
CloneFrom(ObjVer: IObjVer): void,
Serialize(): $ReadOnlyArray<number>,
SetIDs(ObjType: number, ID: number, Version: number): void,
SetObjIDAndVersion(ObjID: IObjID, Version: number): void,
ToJSON(): string,
Unserialize(Bytes: $ReadOnlyArray<number>): void
} 
	declare interface IObjVers {
+Count: number,
Add(Index: number, ObjVer: IObjVer): void,
Clone(): IObjVers,
GetAllDistinctObjIDs(): IObjIDs,
Item(Index: number): IObjVer,
Remove(Index: number): void,
ToJSON(): string
} 
	declare interface IOCROptions {
PrimaryLanguage: MFiles$MFiles$MFOCRLanguage,
SecondaryLanguage: MFiles$MFiles$MFOCRLanguage,
Clone(): IOCROptions
} 
	declare interface IOCRPage {
OCRZones: IOCRZones,
PageNum: number,
Clone(): IOCRPage
} 
	declare interface IOCRPageResult {
+OCRZoneResults: IOCRZoneResults,
+PageNum: number
} 
	declare interface IOCRPageResults {
+Count: number,
Item(Index: number): IOCRPageResult
} 
	declare interface IOCRPages {
+Count: number,
Add(Index: number, OCRPage: IOCRPage): void,
Clone(): IOCRPages,
Item(Index: number): IOCRPage,
Remove(Index: number): void
} 
	declare interface IOCRZone {
Barcode: boolean,
DataType: MFiles$MFiles$MFDataType,
DimensionUnit: MFiles$MFiles$MFOCRDimensionUnit,
+HasOCROptions: boolean,
Height: number,
ID: number,
Left: number,
Name: string,
OCROptions: IOCROptions,
Top: number,
Width: number,
ClearOCROptions(): void,
Clone(): IOCRZone,
SetOCROptions(OCROptions: IOCROptions): void
} 
	declare interface IOCRZoneResult {
+Confidence: number,
+DimensionUnit: MFiles$MFiles$MFOCRDimensionUnit,
+Height: number,
+ID: number,
+Left: number,
+RecognizedOnPage: number,
+ResultValue: ITypedValue,
+Top: number,
+Width: number
} 
	declare interface IOCRZoneResults {
+Count: number,
Item(Index: number): IOCRZoneResult
} 
	declare interface IOCRZones {
+Count: number,
Add(Index: number, OCRZone: IOCRZone): void,
Clone(): IOCRZones,
Item(Index: number): IOCRZone,
Remove(Index: number): void
} 
	declare interface IOptimizeVaultJob {
GarbageCollectFiles: boolean,
+Thorough: boolean,
+VaultGUID: string,
GetNumberOfSteps(): number,
GetOneBasedIndexOfStep(CurrentStep: number): number,
GetStepProgressText(CurrentStep: number): string,
Set(GuidVault: string, Thorough: boolean): void
} 
	declare interface IOwnerPropertyDef {
DependencyRelation: MFiles$MFiles$MFDependencyRelation,
ID: number,
IndexForAutomaticFilling: number,
+IsRelationFiltering: boolean
} 
	declare interface IPluginInfo {
AssemblyName: string,
BridgeClassName: string,
Configuration: INamedValues,
ConfigurationScope: string,
ConfigurationSource: INamedValues,
ConfigurationVaultGUID: string,
IsDefault: boolean,
IsScopeIndependent: boolean,
Name: string,
Clone(): IPluginInfo
} 
	declare interface IPluginInfos {
+Count: number,
Add(Index: number, PluginInfo: IPluginInfo): void,
Clone(): IPluginInfos,
Item(Index: number): IPluginInfo,
Item(Index: number, value: IPluginInfo): void,
Remove(Index: number): void
} 
	declare interface IPreviewerActiveXCtrl {
ClearPreview(): number,
ShowFilePreview(bstrFilename: string): number,
ShowHitHighlightedFilePreview(
bstrFilename: string,
lObjType: number,
lObjID: number,
lObjVersion: number,
lFile: number,
lFileVersion: number,
pIHitHighlightingInfo: any,
bstrSearchConditions: string): number
} 
	declare interface IPropertyDef {
AccessControlList: IAccessControlList,
AllObjectTypes: boolean,
AllowedAsGroupingLevel: boolean,
AutomaticValueDefinition: ITypedValue,
AutomaticValueType: MFiles$MFiles$MFAutomaticValueType,
BasedOnValueList: boolean,
ContentType: MFiles$MFiles$MFContentType,
DataType: MFiles$MFiles$MFDataType,
DependencyPD: number,
DependencyRelation: MFiles$MFiles$MFDependencyRelation,
FormattingType: MFiles$MFiles$MFFormattingType,
+GUID: string,
ID: number,
Name: string,
ObjectType: (MFiles$MFiles$MFBuiltInObjectType | number),
OwnerPropertyDef: IOwnerPropertyDef,
Predefined: boolean,
SortAscending: boolean,
StaticFilter: ISearchConditions,
+ThisIsConflictPD: boolean,
+ThisIsDefaultPD: boolean,
+ThisIsOwnerPD: boolean,
UpdateType: MFiles$MFiles$MFUpdateType,
ValidationType: MFiles$MFiles$MFValidationType,
ValueList: (MFiles$MFiles$MFBuiltInValueList | number),
ValueListSortingType: MFiles$MFiles$MFValueListSortingType,
Clone(): IPropertyDef
} 
	declare interface IPropertyDefAdmin {
AllowAutomaticPermissions: boolean,
AutomaticValue: IAutomaticValue,
NamedValueNamespaces: INamedValueNamespaces,
PropertyDef: IPropertyDef,
SemanticAliases: ISemanticAliases,
Validation: IValidation,
Clone(): IPropertyDefAdmin
} 
	declare interface IPropertyDefOrObjectType {
ID: number,
PropertyDef: boolean,
Clone(): IPropertyDefOrObjectType,
GetAsExpression(): IExpression
} 
	declare interface IPropertyDefOrObjectTypes {
+Count: number,
Add(Index: number, PropertyDefOrObjectType: IPropertyDefOrObjectType): void,
Clone(): IPropertyDefOrObjectTypes,
Item(Index: number): IPropertyDefOrObjectType,
Item(Index: number, value: IPropertyDefOrObjectType): void,
Remove(Index: number): void
} 
	declare interface IPropertyDefs {
+Count: number,
Clone(): IPropertyDefs,
Item(Index: number): IPropertyDef
} 
	declare interface IPropertyDefsAdmin {
+Count: number,
Item(Index: number): IPropertyDefAdmin
} 
	declare interface IPropertyValue {
PropertyDef: (MFiles$MFiles$MFBuiltInPropertyDef | number),
TypedValue: ITypedValue,
Value: ITypedValue,
Clone(): IPropertyValue,
CloneFrom(PropertyValue: IPropertyValue): void,
GetValueAsLocalizedText(): string,
GetValueAsText(
Localized: boolean,
NULLAsEmptyString: boolean,
EmptyLookupDisplayValuesAsHidden: boolean,
LongDateFormat: boolean,
NoSeconds: boolean,
NumericValueAsKilobytes: boolean): string,
GetValueAsUnlocalizedText(): string
} 
	declare interface IPropertyValueForDisplay {
+ContentType: MFiles$MFiles$MFContentType,
+DataType: MFiles$MFiles$MFDataType,
+DisplayValue: string,
+PropertyDef: (MFiles$MFiles$MFBuiltInPropertyDef | number),
+PropertyDefName: string,
+PropertyValue: IPropertyValue,
+ReadOnly: boolean,
Clone(): IPropertyValueForDisplay
} 
	declare interface IPropertyValueIconClue {
+PropertyDef: (MFiles$MFiles$MFBuiltInPropertyDef | number),
+ValueListItem: number,
Clone(): IPropertyValueIconClue
} 
	declare interface IPropertyValueIconClues {
+Count: number,
Clone(): IPropertyValueIconClues,
Item(Index: number): IPropertyValueIconClue
} 
	declare interface IPropertyValues {
+Count: number,
Add(Index: number, PropertyValue: IPropertyValue): void,
Clone(): IPropertyValues,
CloneFrom(PropertyValues: IPropertyValues): void,
IndexOf(PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number): number,
IndexOfByAlias(Vault: IVault, PropertyDefAlias: string): number,
Item(Index: number): IPropertyValue,
Item(Index: number, value: IPropertyValue): void,
Remove(Index: number): void,
SearchForProperty(PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number): IPropertyValue,
SearchForPropertyByAlias(
Vault: IVault,
PropertyDefAlias: string,
ReturnNULLIfNotFound: boolean): IPropertyValue,
SearchForPropertyEx(
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
ReturnNULLIfNotFound: boolean): IPropertyValue
} 
	declare interface IPropertyValuesForDisplay {
+Count: number,
Item(Index: number): IPropertyValueForDisplay
} 
	declare interface IPropertyValuesOfMultipleObjects {
+Count: number,
Clone(): IPropertyValuesOfMultipleObjects,
Item(Index: number): IPropertyValues
} 
	declare interface IPropertyValueSuggestion {
+IsFact: boolean,
+Quality: number,
+TypedValue: ITypedValue,
Clone(): IPropertyValueSuggestion
} 
	declare interface IPropertyValueSuggestions {
+Count: number,
Add(Index: number, IPropertyValueSuggestion: IPropertyValueSuggestion): void,
Clone(): IPropertyValueSuggestions,
Item(Index: number): IPropertyValueSuggestion,
Item(Index: number, value: IPropertyValueSuggestion): void,
Remove(Index: number): void
} 
	declare interface IPropertyValuesWithIconClues {
+IconClues: IPropertyValueIconClues,
+ObjVer: IObjVer,
+PropertyValues: IPropertyValues,
Clone(): IPropertyValuesWithIconClues
} 
	declare interface IPropertyValuesWithIconCluesOfMultipleObjects {
+Count: number,
Clone(): IPropertyValuesWithIconCluesOfMultipleObjects,
Item(Index: number): IPropertyValuesWithIconClues
} 
	declare interface IReportAccessCredentials {
+Domain: string,
+ExtAccount: boolean,
+Password: string,
+UserName: string
} 
	declare interface IRestoreJob {
BackupFileDifferential: string,
BackupFileFull: string,
Impersonation: IImpersonation,
OverwriteExistingFiles: boolean,
VaultProperties: IVaultProperties
} 
	declare interface IScheduledJob {
+BackupVaultJob: IBackupJob,
Enabled: boolean,
+ExportContentJob: IExportContentJob,
ID: number,
+ImportContentJob: IImportContentJob,
JobName: string,
JobType: MFiles$MFiles$MFScheduledJobType,
+OptimizeVaultJob: IOptimizeVaultJob,
Temporary: boolean,
Triggers: IScheduledJobTriggers,
SetBackupVaultJob(BackupVaultJob: IBackupJob): void,
SetExportContentJob(ExportContentJob: IExportContentJob): void,
SetImportContentJob(ImportContentJob: IImportContentJob): void,
SetOptimizeVaultJob(OptimizeVaultJob: IOptimizeVaultJob): void
} 
	declare interface IScheduledJobOutputInfo {
ID: number,
JobType: MFiles$MFiles$MFScheduledJobType,
Message: string
} 
	declare interface IScheduledJobRunInfo {
+Cancelled: boolean,
+CurrentStep: number,
+LastRun: ITimestamp,
+LastRunErrors: string,
+LastRunSucceeded: boolean,
+NextRun: ITimestamp,
+Running: boolean,
+ScheduledJobOutputInfo: IScheduledJobOutputInfo,
+StepCompletionPercent: number
} 
	declare interface IScheduledJobs {
+Count: number,
Item(Index: number): IScheduledJob
} 
	declare interface IScheduledJobTrigger {
BeginDay: number,
BeginMonth: number,
BeginYear: number,
EndDay: number,
EndMonth: number,
EndYear: number,
StartHour: number,
StartMinute: number,
Type: ITriggerType,
ValidEndDate: boolean,
Clone(): IScheduledJobTrigger
} 
	declare interface IScheduledJobTriggers {
+Count: number,
Add(Index: number, ScheduledJobTrigger: IScheduledJobTrigger): void,
Clone(): IScheduledJobTriggers,
Item(Index: number): IScheduledJobTrigger,
Remove(Index: number): void
} 
	declare interface ISearchCondition {
ConditionType: MFiles$MFiles$MFConditionType,
Expression: IExpression,
TypedValue: ITypedValue,
Clone(): ISearchCondition,
Set(
Expression: IExpression,
ConditionType: MFiles$MFiles$MFConditionType,
TypedValue: ITypedValue): void
} 
	declare interface ISearchConditionEx {
Enabled: boolean,
Ignored: boolean,
SearchCondition: ISearchCondition,
SpecialNULL: boolean,
Clone(): ISearchConditionEx,
Set(
SearchCondition: ISearchCondition,
Enabled: boolean,
SpecialNULL: boolean,
Ignored: boolean): void
} 
	declare interface ISearchConditionExs {
+Count: number,
Add(Index: number, SearchConditionEx: ISearchConditionEx): void,
Clone(): ISearchConditionExs,
Item(Index: number): ISearchConditionEx,
Item(Index: number, value: ISearchConditionEx): void,
Remove(Index: number): void
} 
	declare interface ISearchConditions {
+Count: number,
Add(Index: number, SearchCondition: ISearchCondition): void,
AppendFromExportedSearchString(ExportedSearchString: string): void,
Clone(): ISearchConditions,
GetAsExportedSearchString(SearchFlags: MFiles$MFiles$MFSearchFlags): string,
Item(Index: number): ISearchCondition,
Item(Index: number, value: ISearchCondition): void,
Remove(Index: number): void
} 
	declare interface ISearchCriteria {
AdditionalConditions: ISearchConditionExs,
ExpandUI: boolean,
FacetFilterAsJSON: string,
FacetFilterStatusFlags: MFiles$MFiles$MFFacetFilterStatusFlags,
FirstCondition: ISearchConditionEx,
FullTextSearchFlags: MFiles$MFiles$MFFullTextSearchFlags,
FullTextSearchString: string,
ObjectTypeCondition: ISearchConditionEx,
PredefinedSearchFilter: MFiles$MFiles$MFPredefinedSearchFilterType,
PreviousBaseConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags,
SearchRefinement: ISearchConditions,
SearchWithinThisFolder: boolean,
SecondCondition: ISearchConditionEx,
Clone(): ISearchCriteria,
GetAsSearchConditions(
ForceGettingExpandedConds: boolean,
IncludeSearchRefinementConditions: boolean,
IncludePreviousBaseConditions: boolean): ISearchConditions
} 
	declare interface ISearchDef {
Conditions: ISearchConditions,
Levels: IExpressionExs,
LookInAllVersions: boolean,
ReturnLatestVisibleVersion: boolean,
SearchFlags: MFiles$MFiles$MFSearchFlags,
Clone(): ISearchDef,
IsIndirectionUsed(): boolean
} 
	declare interface ISearchPane {
+Available: boolean,
+Events: ISearchPaneEvents,
Visible: boolean,
SetTheme(theme: ITheme): void
} 
	declare type ISearchPaneEvents = {
OnHidePane(): void,
OnShowPane(): void,
OnStarted(): void,
OnStop(): void
} & IEvents

	declare interface ISemanticAliases {
Value: string,
Clone(): ISemanticAliases
} 
	declare interface IServerDataPushSink {
OnServerDataPush(RequestID: number, JsonDataContent: string): void
} 
	declare interface IServerLicenseManagementOperations {
GetLicenseStatus(): ILicenseStatus,
SetLicenseCodeAndSerialNumber(SerialNumber: string, LicenseCode: string): void
} 
	declare interface IServerLoginAccountOperations {
AddLoginAccount(LoginAccount: ILoginAccount, Password: string): void,
ForceLogout(AccountNames: IStrings): void,
GetLoginAccount(AccountName: string): ILoginAccount,
GetLoginAccounts(): ILoginAccounts,
GetLoginAccountsWithSessions(): ILoginAccounts,
GetPersonalInformationFromDomain(AccountName: string): ILoginAccountPersonalInformation,
ModifyLoginAccount(LoginAccount: ILoginAccount): void,
RemoveLoginAccount(AccountName: string): void,
UpdateLoginPassword(AccountName: string, NewPassword: string): void
} 
	declare interface IServerManagementOperations {
BackupMasterDB(
BackupFile: string,
OverwriteExistingFiles: boolean,
FileSizeLimitInMB: number,
Impersonation: IImpersonation): void,
ConfigureWebAccessToDefaultWebSite(): void,
ConfigureWebAccessToExistingWebSite(WebSite: string): void,
ConfigureWebAccessToNewVirtualDirectory(WebSite: string, VirtualDirectory: string): void,
ConfigureWebAccessToNewWebSite(WebSite: string, Port: string): void,
GetEventHandlers(): IEventHandlers,
RestoreMasterDB(BackupFile: string, Impersonation: IImpersonation): void,
SetEventHandlers(EventHandlers: IEventHandlers): void
} 
	declare interface IServerScheduledJobManagementOperations {
AddScheduledJob(ScheduledJob: IScheduledJob): number,
CancelScheduledJob(ID: number): void,
GetScheduledJob(ID: number): IScheduledJob,
GetScheduledJobRunInfo(ID: number): IScheduledJobRunInfo,
GetScheduledJobs(): IScheduledJobs,
ModifyScheduledJob(ScheduledJob: IScheduledJob): void,
RemoveScheduledJob(ID: number): void,
StartScheduledJob(ID: number): void
} 
	declare interface IServerVaultManagementOperations {
AttachVault(
VaultProperties: IVaultProperties,
UpdateAttachmentGUID: boolean): IVaultProperties,
AttachVaultWithOptions(
VaultProperties: IVaultProperties,
Options: IAttachVaultOptions): IVaultProperties,
BackupVault(BackupJob: IBackupJob): void,
BringVaultOnline(VaultGUID: string): void,
CopyVault(CopyVaultJob: ICopyVaultJob): ICopyVaultJobOutputInfo,
CreateNewVault(VaultProperties: IVaultProperties): string,
DestroyVault(VaultGUID: string): void,
DetachVault(VaultGUID: string): void,
GetBackupFileContents(
BackupFileFull: string,
BackupFileDifferential: string,
Impersonation: IImpersonation): IVaultProperties,
GetVaultProperties(VaultGUID: string): IVaultProperties,
OptimizeVault(OptimizeVaultJob: IOptimizeVaultJob): void,
RestoreVault(RestoreJob: IRestoreJob): void,
TakeVaultOffline(VaultGUID: string, DisconnectUsers: boolean): void
} 
	declare interface ISessionInfo {
+AccountName: string,
+ACLMode: MFiles$MFiles$MFACLMode,
+AuthenticationType: MFiles$MFiles$MFAuthType,
+CanCreateObjects: boolean,
+CanForceUndoCheckout: boolean,
+CanManageCommonUISettings: boolean,
+CanManageCommonViews: boolean,
+CanManageTraditionalFolders: boolean,
+CanMaterializeViews: boolean,
+CanSeeAllObjects: boolean,
+CanSeeDeletedObjects: boolean,
+ClientCulture: string,
+InternalUser: boolean,
+IsSharingPublicLinksAllowed: boolean,
+IsSharingPublicLinksToLatestVersionAllowed: boolean,
+KeepAliveIntervalInSeconds: number,
+Language: number,
+LicenseAllowsModifications: boolean,
+LocalComputerName: string,
+ProductMode: MFiles$MFiles$MFProductMode,
+ServerVersion: number,
+TimeZoneInfo: ITimeZoneInformation,
+UserAndGroupMemberships: IUserOrUserGroupIDs,
+UserAndSubstitutedByMe: IUserOrUserGroupIDs,
+UserID: number,
+VaultGUID: string,
CheckObjectAccess(
ObjectAccessControlList: IAccessControlList,
DesiredObjectAccess: MFiles$MFiles$MFObjectAccess): boolean,
CheckObjectTypeAccess(
ObjectTypeAccessControlList: IAccessControlList,
DesiredObjectTypeAccess: MFiles$MFiles$MFObjectTypeAccess): boolean,
CheckPropertyDefAccess(
PropertyDefAccessControlList: IAccessControlList,
DesiredPropertyDefAccess: MFiles$MFiles$MFPropertyDefAccess): boolean,
CheckVaultAccess(DesiredVaultAccess: MFiles$MFiles$MFVaultAccess): boolean,
CloneFrom(SessionInfo: ISessionInfo): void,
IsLoggedOnUserSubstituteOfUser(UserID: number): boolean
} 
	declare interface ISetPropertiesParams {
AccessControlListEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
AccessControlListProvidedForEnforcing: IAccessControlList,
AllowModifyingCheckedInObject: boolean,
FailIfNotLatestCheckedInVersion: boolean,
FullSet: boolean,
ObjVer: IObjVer,
PropertyValuesToRemove: IIDs,
PropertyValuesToSet: IPropertyValues,
Clone(): ISetPropertiesParams,
SetWithPermissions(
ObjVer: IObjVer,
AllowModifyingCheckedInObject: boolean,
FailIfNotLatestCheckedInVersion: boolean,
PropertyValuesToSet: IPropertyValues,
FullSet: boolean,
PropertyValuesToRemove: IIDs,
ObjectOperationFlags: MFiles$MFiles$MFObjectOperationFlags,
AccessControlListEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
AccessControlListProvidedForEnforcing: IAccessControlList): void
} 
	declare interface ISetPropertiesParamsOfMultipleObjects {
+Count: number,
Add(Index: number, SetPropertiesParams: ISetPropertiesParams): void,
Clone(): ISetPropertiesParamsOfMultipleObjects,
Item(Index: number): ISetPropertiesParams,
Remove(Index: number): void
} 
	declare interface ISharedFileInfo {
+ChangeTimeUtc: Date,
+Extension: string,
+LogicalSize: number,
+LogicalSize_32bit: number,
+Title: string,
Clone(): ISharedFileInfo
} 
	declare interface ISharedLinkInfo {
+AccessKey: string,
+CreatedByUser: number,
+CreationTime: ITimestamp,
Description: string,
ExpirationTime: ITimestamp,
FileVer: IFileVer,
ObjVer: IObjVer,
Clone(): ISharedLinkInfo,
Set(ObjVer: IObjVer, FileVer: IFileVer): void
} 
	declare interface ISharedLinkInfos {
+Count: number,
Add(Index: number, SharedLink: ISharedLinkInfo): void,
Clone(): ISharedLinkInfos,
Item(Index: number): ISharedLinkInfo,
Item(Index: number, value: ISharedLinkInfo): void,
Remove(Index: number): void
} 
	declare interface ISharedLinkPublicOperations {
DownloadSharedFileInBlocks_Begin(
VaultGUID: string,
AccessKey: string,
AdditionalData: INamedValues): IFileDownloadSession,
DownloadSharedFileInBlocks_Begin_32bit(
VaultGUID: string,
AccessKey: string,
AdditionalData: INamedValues): IFileDownloadSession,
DownloadSharedFileInBlocks_ReadBlock(
VaultGUID: string,
AccessKey: string,
DownloadID: number,
BlockSize: number,
Offset: number): $ReadOnlyArray<number>,
DownloadSharedFileInBlocks_ReadBlock_32bit(
VaultGUID: string,
AccessKey: string,
DownloadID: number,
BlockSize: number,
Offset: number): $ReadOnlyArray<number>,
GetSharedLinkInfo(
VaultGUID: string,
AccessKey: string,
AdditionalData: INamedValues): ISharedFileInfo
} 
	declare interface IShellFrame {
+ActiveListing: IShellListing,
+BottomPane: IShellPaneContainer,
+Commands: ICommands,
+CurrentFolder: IFolderDefs,
+CurrentObjectVersion: IObjectVersion,
CurrentPath: string,
+Events: IShellFrameEvents,
+Listing: IShellListing,
+OuterWindow: IWindow,
+ParentFolder: IFolderDefs,
+RightPane: IShellPaneContainer,
+SearchPane: ISearchPane,
+ShellUI: IShellUI,
+TaskPane: ITaskPane,
+UseCompactLayout: boolean,
CreateAdditionalListingForPath(path: string): IShellListing,
CreateAdditionalListingForView(viewID: MFiles$MFiles$MFBuiltInView | number): IShellListing,
GetListing(listingIndex: number): IShellListing,
IsFolderLocation(): boolean,
IsObjectLocation(): boolean,
NavigateToParent(): void,
SetTheme(theme: ITheme): void,
ShowDashboard(dashboardID: string, data: any): void,
ShowDefaultContent(): void,
ShowMessage(message: string | IMessage): number,
ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: any): void,
ShowPopupSSRSReport(reportWindowTitle: string, reportURL: string): void,
ShowSSRSReport(reportURL: string): void
} 
	declare type IShellFrameEvent = {
OnActiveListingChanged(oldListing: null | IShellListing, newListing: IShellListing): void,
OnNewBottomPane(bottomPane: IShellPaneContainer): void | IShellPaneContainerEvents,
OnNewCommands(commands: ICommands): void | ICommandsEvents,
OnNewRightPane(rightPane: IShellPaneContainer): void | IShellPaneContainerEvents,
OnNewSearchPane(searchPane: ISearchPane): void | ISearchPaneEvents,
OnNewShellListing(shellListing: IShellListing): void | IShellListingEvents,
OnNewTaskPane(taskPane: ITaskPane): void | ITaskPaneEvents,
OnShowMainMenu(): void,
OnStarted(): void,
OnStop(): void
} & IEvents

	declare type IShellFrameEvents = {
OnActiveListingChanged(oldListing: null | IShellListing, newListing: IShellListing): void,
OnNewBottomPane(bottomPane: IShellPaneContainer): void | IShellPaneContainerEvents,
OnNewCommands(commands: ICommands): void | ICommandsEvents,
OnNewRightPane(rightPane: IShellPaneContainer): void | IShellPaneContainerEvents,
OnNewSearchPane(searchPane: ISearchPane): void | ISearchPaneEvents,
OnNewShellListing(shellListing: IShellListing): void | IShellListingEvents,
OnNewTaskPane(taskPane: ITaskPane): void | ITaskPaneEvents,
OnShowMainMenu(): void,
OnStarted(): void,
OnStop(): void
} & IEvents

	declare interface IShellItems {
+Count: number,
+Folders: IFolderDefs,
+ObjectFiles: IObjectFileAndObjVerOfMultipleFiles,
+ObjectVersions: IObjectVersions,
+ObjectVersionsAndProperties: IObjectVersionAndPropertiesOfMultipleObjects,
GetObjectVersionsCount(): number
} 
	declare interface IShellListing {
AutoFitAllColumns: boolean,
AutoFitFirstColumn: boolean,
ColumnHeadersVisible: boolean,
+CurrentPath: string,
+CurrentSelection: IShellItems,
+Events: IShellListingEvents,
GroupObjectsByObjectType: boolean,
GroupViewsAndFolders: boolean,
+IsActive: boolean,
+Items: IShellItems,
+SumOfResultCounts: number,
ActivateListing(): void,
ActivateSelected(): void,
RefreshListing(
smartUpdate: boolean,
refreshFromServer: boolean,
forceFullRefreshFromServer: boolean): void,
RefreshListingAsync(): void,
RefreshObject(objID: IObjID, refreshFromServer: boolean, updateRelatedObjects: boolean): void,
RefreshSelectedObjects(refreshFromServer: boolean, updateRelatedObjects: boolean): void,
SelectFolder(folderDef: IFolderDef): void,
SelectNextFolder(folderDefType: MFiles$MFiles$MFFolderDefType): boolean,
SelectNextObject(): boolean,
SelectNextObjectFile(allowMoveToNextObject: boolean): boolean,
SelectObjectFile(objVer: IObjVer, fileVer: IFileVer): void,
SelectObjectOrObjectFileVersion(objOrFileVer: IObjOrFileVer): void,
SelectObjectVersion(objVer: IObjVer): void,
SelectPrevFolder(folderDefType: MFiles$MFiles$MFFolderDefType): boolean,
SelectPrevObject(): boolean,
SelectPrevObjectFile(allowMoveToPrevObject: boolean): boolean,
SetFolderSelectionStates(folderDefs: IFolderDefs, select: boolean): void,
SetObjectOrObjectFileVersionSelectionStates(objOrFileVers: IObjOrFileVers, select: boolean): void,
SetObjectVersionSelectionStates(objVers: IObjVers, select: boolean): void,
SetTheme(theme: ITheme): void,
SetVirtualSelection(objOrFileVers: IObjOrFileVers): void,
UnselectAll(): void
} 
	declare type IShellListingEvents = {
OnContentChanged(items: IShellItems): void,
OnListingActivated(oldListing: null | IShellListing): void,
OnListingDeactivated(newListing: null | IShellListing): void,
OnSelectedItemsChanged(selectedItems: IShellItems): void,
OnSelectionChanged(selectedItems: IShellItems): void,
OnShowContextMenu(selectedItems: IShellItems): void,
OnShowMainMenu(selectedItems: IShellItems): void,
OnStarted(): void,
OnStop(): void
} & IEvents

	declare interface IShellPaneContainer {
+Content: any,
+Events: IShellPaneContainerEvents,
+IsFocused: boolean,
Minimized: boolean,
+ShellFrame: IShellFrame,
Size: number,
+TabTitleSize: number,
Visible: boolean,
AddTab(TabId: string, tabTitle: string, insertBeforeTabId: string): IShellPaneTab,
Focus(): void,
GetSelectedTab(): IShellPaneTab,
GetTab(TabId: string): IShellPaneTab,
SetDefaultSize(defaultSize: number, resizeToDefault: boolean): void,
SetDefaultVisibility(Visible: boolean, resetToDefault: boolean): void
} 
	declare type IShellPaneContainerEvents = {
OnHidePane(): void,
OnMinimizedStateChanged(): void,
OnNewTab(tab: IShellPaneTab): void,
OnPaneResized(): void,
OnShowPane(): void,
OnStarted(): void,
OnStop(): void,
OnTabSelected(): void,
OnTabUnselected(): void
} & IEvents

	declare interface IShellPaneTab {
+Events: IShellPaneTabEvents,
+IsBuiltIn: boolean,
+Selected: boolean,
+TabId: string,
Title: string,
Visible: boolean,
Remove(): void,
Select(): void,
ShowDashboard(dashboardID: string, data: any): void,
ShowEmptyContent(): void,
ShowFilePreview(file: string): void,
ShowObjectVersionProperties(propertyValuesWithIcons: IPropertyValuesWithIconClues): void,
ShowPersistentContent(sessionHandle: number): void,
ShowSSRSReport(reportURL: string): void,
Unselect(): void
} 
	declare type IShellPaneTabEvents = {
OnHideTab(): void,
OnShowTab(): void,
OnStarted(): void,
OnStop(): void,
OnTabSelected(): void,
OnTabUnselected(): void
} & IEvents

	declare interface IShellUI {
+Events: IShellUIEvents,
+ServerVault: IVault,
+Vault: IVault,
+Window: IWindow,
CreatePersistentBrowserContent(url: string, parameters: any): number,
DestroyPersistentContent(sessionHandle: number): void,
GetObjectTypeIconURL(objtype: number): string,
NotifyVaultEntry(ID: string, data1: any, data2: any): any,
SetPersistentBrowserContent(url: string, sessionHandle: number): void,
ShowMessage(message: string | IMessage): number,
ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: any): void
} 
	declare type IShellUIEvents = {
OnNewCommonDialogShellFrame(shellFrame: IShellFrame): void | IShellFrameEvents,
OnNewEmbeddedShellFrame(shellFrame: IShellFrame): void | IShellFrameEvents,
OnNewNormalShellFrame(shellFrame: IShellFrame): void | IShellFrameEvents,
OnNewShellFrame(shellFrame: IShellFrame): void | IShellFrameEvents,
OnStarted(): void,
OnStop(): void
} & IEvents

	declare interface IShortcutMappingInfo {
ObjectTypeGUID: string,
ObjectTypeID: number,
ObjectTypeName: string,
ObjectTypeSemanticAliases: ISemanticAliases
} 
	declare interface ISignaturePromptInfo {
Meaning: string,
Reason: string,
Clone(): ISignaturePromptInfo
} 
	declare interface ISignaturePromptInfoMetadataBased {
IsReferencedBySignatureObject: boolean,
MeaningPropertyID: number,
PromptInfoLookupPropertyID: number,
ReasonPropertyID: number,
Clone(): ISignaturePromptInfoMetadataBased
} 
	declare interface ISignaturePromptInfos {
+Count: number,
Add(Index: number, SignaturePromptInfo: ISignaturePromptInfo): void,
Clone(): ISignaturePromptInfos,
Item(Index: number): ISignaturePromptInfo,
Item(Index: number, value: ISignaturePromptInfo): void,
Remove(Index: number): void
} 
	declare interface ISignaturePromptInfoSelectable {
PromptInfos: ISignaturePromptInfos,
Clone(): ISignaturePromptInfoSelectable
} 
	declare interface ISignatureSettings {
AdditionalInfo: string,
FreeFormTextPropertyID: number,
IsFreeFormTextPrompted: boolean,
IsRequired: boolean,
IsSeparateSignatureObject: boolean,
ManifestationPropertyID: number,
+PromptInfoType: MFiles$MFiles$MFSignaturePromptInfoType,
SignatureIdentifier: string,
SignaturePromptInfoFixed: ISignaturePromptInfo,
SignaturePromptInfoMetadataBased: ISignaturePromptInfoMetadataBased,
SignaturePromptInfoSelectable: ISignaturePromptInfoSelectable,
Clone(): ISignatureSettings
} 
	declare interface ISourceObjectFile {
Extension: string,
SourceFilePath: string,
Title: string,
Clone(): ISourceObjectFile
} 
	declare interface ISourceObjectFiles {
+Count: number,
Add(Index: number, SourceObjectFile: ISourceObjectFile): void,
AddEmptyFile(Title: string, Extension: string): ISourceObjectFile,
AddFile(Title: string, Extension: string, SourcePath: string): ISourceObjectFile,
Item(Index: number): ISourceObjectFile,
Remove(Index: number): void
} 
	declare interface ISQLDatabase {
AdminUser: IImpersonation,
BasicUser: IImpersonation,
Engine: MFiles$MFiles$MFDBEngine,
Name: string,
Server: string,
Clone(): ISQLDatabase
} 
	declare interface IState {
+ID: number,
Name: string,
Selectable: boolean,
SelectableFlagAffectedByPseudoUsers: boolean,
GetAsLookup(): ILookup,
GetAsTypedValue(): ITypedValue
} 
	declare interface IStateAdmin {
ActionAssignToUser: boolean,
ActionAssignToUserDefinition: IActionCreateAssignment,
ActionConvertToPDF: boolean,
ActionConvertToPDFDefinition: IActionConvertToPDF,
ActionCreateSeparateAssignment: boolean,
ActionDefinitions: IActionDefinitions,
ActionDelete: boolean,
ActionMarkForArchiving: boolean,
ActionRunVBScript: boolean,
ActionRunVBScriptDefinition: string,
ActionSendNotification: boolean,
ActionSendNotificationDefinition: IActionSendNotification,
ActionSetPermissions: boolean,
ActionSetPermissionsDetailedDefinition: IActionSetPermissions,
ActionSetProperties: boolean,
ActionSetPropertiesDefinition: IActionSetProperties,
CheckInOutPermissions: boolean,
Description: string,
ID: number,
InOutPermissions: IAccessControlList,
Name: string,
Postconditions: IStateConditions,
Preconditions: IStateConditions,
SemanticAliases: ISemanticAliases,
TransitionsRequireEditAccessToObject: boolean,
Clone(): IStateAdmin
} 
	declare interface IStateConditions {
PropertyConditions: boolean,
PropertyConditionsDefinition: ISearchConditions,
VBScript: boolean,
VBScriptDefinition: string,
Clone(): IStateConditions
} 
	declare interface IStates {
+Count: number,
Item(Index: number): IState
} 
	declare interface IStatesAdmin {
+Count: number,
Add(Index: number, StateAdmin: IStateAdmin): void,
Item(Index: number): IStateAdmin,
Remove(Index: number): void
} 
	declare interface IStateTransition {
AccessControlList: IAccessControlList,
Description: string,
EvaluationOrderNumber: number,
FromState: number,
ID: number,
Name: string,
SemanticAliases: ISemanticAliases,
SignatureSettings: ISignatureSettings,
ToState: number,
TriggerAllowedByVBScript: string,
TriggerCriteria: ISearchConditions,
TriggerInDays: number,
TriggerMode: MFiles$MFiles$MFAutoStateTransitionMode,
Clone(): IStateTransition
} 
	declare interface IStateTransitionForClient {
FromState: number,
+ID: number,
Name: string,
Selectable: boolean,
SelectableFlagAffectedByPseudoUsers: boolean,
ToState: number,
Clone(): IStateTransitionForClient,
GetAsLookup(): ILookup,
GetAsTypedValue(): ITypedValue
} 
	declare interface IStateTransitions {
+Count: number,
Add(Index: number, StateTransition: IStateTransition): void,
Item(Index: number): IStateTransition,
Remove(Index: number): void
} 
	declare interface IStateTransitionsForClient {
+Count: number,
Add(Index: number, StateTransitionForClient: IStateTransitionForClient): void,
Clone(): IStateTransitionsForClient,
Item(Index: number): IStateTransitionForClient,
Item(Index: number, value: IStateTransitionForClient): void,
Remove(Index: number): void
} 
	declare interface IStringData {
AsString: string,
+StringDataType: MFiles$MFiles$MFStringDataType,
Clone(): IStringData
} 
	declare interface IStrings {
+Count: number,
Add(Index: number, Item: string): void,
Clone(): IStrings,
CloneFrom(Strings: IStrings): void,
Item(Index: number): string,
Join(Separator: string): string,
Remove(Index: number): void
} 
	declare interface ITaskAssignmentClassInfo {
AnyAssigneeCompletes: boolean,
SignatureForCompletion: ISignatureSettings,
Clone(): ITaskAssignmentClassInfo
} 
	declare interface ITaskPane {
+Available: boolean,
+Events: ITaskPaneEvents,
Visible: boolean,
AddCustomCommandToGroup(customCommand: number, group: number, orderPriority: number): void,
CreateGroup(groupName: string, priority: number): number,
DeleteGroup(groupID: number): void,
RemoveCustomCommandFromGroup(customCommand: number, group: number): void,
SetLogo(filename: string): void,
SetTheme(theme: ITheme): void
} 
	declare type ITaskPaneEvents = {
OnHidePane(): void,
OnShowPane(): void,
OnStarted(): void,
OnStop(): void
} & IEvents

	declare interface ITemporarySearchView {
+BaseSearchConditions: ISearchConditions,
SearchCriteria: ISearchCriteria,
+View: IView
} 
	declare interface ITheme {
[key: string]: (string | boolean | number),
last: 0
} 
	declare interface ITimestamp {
Day: number,
Fraction: number,
Hour: number,
Minute: number,
Month: number,
Second: number,
Year: number,
Clone(): ITimestamp,
GetValue(): any,
LocalTimeToUtc(): ITimestamp,
SetValue(Value: any): void,
UtcToLocalTime(): ITimestamp
} 
	declare interface ITimeZoneInformation {
+StandardName: string,
LoadTimeZoneByName(TimeZoneName: string): void,
LoadWithCurrentTimeZone(): void
} 
	declare interface ITraditionalFolder {
+ID: number,
+Name: string
} 
	declare interface ITraditionalFolderContents {
+ID: number,
+ObjectVersions: IObjectVersions,
+TraditionalFolders: ITraditionalFolders
} 
	declare interface ITraditionalFolders {
+Count: number,
Item(Index: number): ITraditionalFolder
} 
	declare interface ITriggerType {
+Daily: IDailyTrigger,
+MonthlyDate: IMonthlyDateTrigger,
+MonthlyDOW: IMonthlyDOWTrigger,
Type: MFiles$MFiles$MFTriggerType,
+Weekly: IWeeklyTrigger,
Clone(): ITriggerType,
SetDailyTrigger(DailyTrigger: IDailyTrigger): void,
SetMonthlyDate(MonthlyDateTrigger: IMonthlyDateTrigger): void,
SetMonthlyDOW(MonthlyDOWTrigger: IMonthlyDOWTrigger): void,
SetWeekly(WeeklyTrigger: IWeeklyTrigger): void
} 
	declare interface ITypedValue {
+DataType: MFiles$MFiles$MFDataType,
+DisplayValue: string,
Value: any,
Clone(): ITypedValue,
CloneFrom(TypedValue: ITypedValue): void,
CompareTo(TypedValue: ITypedValue): number,
GetLookupID(): number,
GetValueAsLocalizedText(): string,
GetValueAsLookup(): ILookup,
GetValueAsLookups(): ILookups,
GetValueAsText(
Localized: boolean,
NULLAsEmptyString: boolean,
EmptyLookupDisplayValuesAsHidden: boolean,
LongDateFormat: boolean,
NoSeconds: boolean,
NumericValueAsKilobytes: boolean): string,
GetValueAsTextWithExpression(Expression: IExpression, Locale: number): string,
GetValueAsTimestamp(): ITimestamp,
GetValueAsUnlocalizedText(): string,
IsNULL(): boolean,
IsUninitialized(): boolean,
Serialize(): $ReadOnlyArray<number>,
SetValue(DataType: MFiles$MFiles$MFDataType, Value: any): void,
SetValueToLookup(Lookup: ILookup): void,
SetValueToMultiSelectLookup(MultiSelectLookup: ILookups): void,
SetValueToNULL(DataType: MFiles$MFiles$MFDataType): void,
Unserialize(Bytes: $ReadOnlyArray<number>, ReadFromOldSerializingFormat: boolean): void
} 
	declare interface ITypedValues {
+Count: number,
Add(Index: number, TypedValue: ITypedValue): void,
Item(Index: number): ITypedValue,
Remove(Index: number): void
} 
	declare interface IUserAccount {
AccessControlList: IAccessControlList,
Enabled: boolean,
ID: number,
InternalUser: boolean,
LoginName: string,
VaultLanguage: number,
VaultRoles: MFiles$MFiles$MFUserAccountVaultRole,
AddVaultRoles(VaultRolesToAdd: MFiles$MFiles$MFUserAccountVaultRole): void,
Clone(): IUserAccount,
CloneFrom(UserAccount: IUserAccount): void,
RemoveVaultRoles(VaultRolesToRemove: MFiles$MFiles$MFUserAccountVaultRole): void
} 
	declare interface IUserAccounts {
+Count: number,
Item(Index: number): IUserAccount
} 
	declare interface IUserGroup {
ID: number,
Members: IIDs,
Name: string,
+Predefined: boolean,
AddMember(ID: number): void,
Clone(): IUserGroup,
CloneFrom(UserGroup: IUserGroup): void,
RemoveMember(ID: number): void
} 
	declare interface IUserGroupAdmin {
AccessControlList: IAccessControlList,
SemanticAliases: ISemanticAliases,
UserGroup: IUserGroup,
Clone(): IUserGroupAdmin,
CloneFrom(UserGroupAdmin: IUserGroupAdmin): void
} 
	declare interface IUserGroups {
+Count: number,
Item(Index: number): IUserGroup
} 
	declare interface IUserGroupsAdmin {
+Count: number,
Item(Index: number): IUserGroupAdmin
} 
	declare interface IUserOrUserGroupID {
UserOrGroupID: number,
UserOrGroupType: MFiles$MFiles$MFUserOrUserGroupType,
Clone(): IUserOrUserGroupID
} 
	declare interface IUserOrUserGroupIDEx {
+IndirectProperty: IIndirectPropertyID,
+UserOrGroupID: number,
+UserOrGroupType: MFiles$MFiles$MFUserOrUserGroupType,
+WorkflowState: number,
Clone(): IUserOrUserGroupIDEx,
SetIndirectPropertyPseudoUser(PseudoUserID: IIndirectPropertyID): void,
SetUserAccount(UserAccount: number): void,
SetUserGroup(UserGroup: number): void,
SetWorkflowStatePseudoUser(WorkflowState: number): void
} 
	declare interface IUserOrUserGroupIDExs {
+Count: number,
Add(Index: number, UserOrUserGroupIDEx: IUserOrUserGroupIDEx): void,
Clone(): IUserOrUserGroupIDExs,
GetUserOrUserGroupIDEx(
UserOrGroupID: number,
UserOrGroupType: MFiles$MFiles$MFUserOrUserGroupType): IUserOrUserGroupIDEx,
GetUserOrUserGroupIDExIndex(
UserOrGroupID: number,
UserOrGroupType: MFiles$MFiles$MFUserOrUserGroupType): number,
Item(Index: number): IUserOrUserGroupIDEx,
Remove(Index: number): void
} 
	declare interface IUserOrUserGroupIDs {
+Count: number,
Add(Index: number, UserOrUserGroupID: IUserOrUserGroupID): void,
Clone(): IUserOrUserGroupIDs,
GetUserOrUserGroupID(
UserOrGroupID: number,
UserOrGroupType: MFiles$MFiles$MFUserOrUserGroupType): IUserOrUserGroupID,
GetUserOrUserGroupIDIndex(
UserOrGroupID: number,
UserOrGroupType: MFiles$MFiles$MFUserOrUserGroupType): number,
Item(Index: number): IUserOrUserGroupID,
Remove(Index: number): void
} 
	declare interface IValidation {
RegularExpression: string,
VBScript: string,
Clone(): IValidation
} 
	declare interface IValueListItem {
AutomaticPermissionsForObjects: IAutomaticPermissions,
+Deleted: boolean,
+DisplayID: string,
+DisplayIDAvailable: boolean,
HasOwner: boolean,
HasParent: boolean,
Icon: $ReadOnlyArray<number>,
ID: number,
+ItemGUID: string,
Name: string,
OwnerID: number,
ParentID: number,
ValueListID: (MFiles$MFiles$MFBuiltInValueList | number),
Clone(): IValueListItem,
CloneFrom(ValueListItem: IValueListItem): void,
GetIconAsPNG(Width: number, Height: number): $ReadOnlyArray<number>
} 
	declare interface IValueListItems {
+Count: number,
Item(Index: number): IValueListItem
} 
	declare interface IValueListItemSearchResults {
+Count: number,
MoreResults: boolean,
Add(Index: number, ValueListItem: IValueListItem): void,
Clone(): IValueListItemSearchResults,
Item(Index: number): IValueListItem,
Remove(Index: number): void
} 
	declare interface IValueListItemSearchResultsWithPermissions {
+Permissions: IAccessControlLists,
+ValueListItemSearchResults: IValueListItemSearchResults
} 
	declare interface IValueListItemsWithPermissions {
+Permissions: IAccessControlLists,
+ValueListItems: IValueListItems
} 
	declare interface IVault {
+Async: IVaultAsync,
+ClassGroupOperations: IVaultClassGroupOperations,
+ClassOperations: IVaultClassOperations,
+ClientOperations: IVaultClientOperations,
+CurrentLoggedInUserID: number,
+CustomApplicationManagementOperations: IVaultCustomApplicationManagementOperations,
+DataSetOperations: IVaultDataSetOperations,
+ElectronicSignatureOperations: IVaultElectronicSignatureOperations,
+EventLogOperations: IVaultEventLogOperations,
+ExtensionMethodOperations: IVaultExtensionMethodOperations,
+ExternalObjectOperations: IVaultExternalObjectOperations,
+LoggedIn: boolean,
+LoginAccountOperations: IVaultLoginAccountOperations,
+LoginSessionID: string,
+ManagementOperations: IVaultManagementOperations,
+Name: string,
+NamedACLOperations: IVaultNamedACLOperations,
+NamedValueStorageOperations: IVaultNamedValueStorageOperations,
+NotificationOperations: IVaultNotificationOperations,
+ObjectFileOperations: IVaultObjectFileOperations,
+ObjectOperations: IVaultObjectOperations,
+ObjectPropertyOperations: IVaultObjectPropertyOperations,
+ObjectSearchOperations: IVaultObjectSearchOperations,
+ObjectTypeOperations: IVaultObjectTypeOperations,
+PropertyDefOperations: IVaultPropertyDefOperations,
+ReadOnlyAccess: boolean,
+ScheduledJobManagementOperations: IVaultScheduledJobManagementOperations,
+ServerDataPushOperations: IVaultServerDataPushOperations,
+SessionInfo: ISessionInfo,
+SharedLinkOperations: IVaultSharedLinkOperations,
+TraditionalFolderOperations: IVaultTraditionalFolderOperations,
+UserGroupOperations: IVaultUserGroupOperations,
+UserOperations: IVaultUserOperations,
+UserSettingOperations: IVaultUserSettingOperations,
+ValueListItemOperations: IVaultValueListItemOperations,
+ValueListOperations: IVaultValueListOperations,
+VaultLanguages: ILanguages,
+ViewOperations: IVaultViewOperations,
+WorkflowOperations: IVaultWorkflowOperations,
ChangePassword(OldPassword: string, NewPassword: string): void,
GetAllTranslations(): string,
GetGUID(): string,
GetMetadataStructureItemIDByAlias(
MetadataStructureItemType: MFiles$MFiles$MFMetadataStructureItem,
Alias: string,
Unused: boolean): number,
GetMetadataStructureVersionID(): number,
GetMFilesURLForVaultRoot(): string,
GetServerLicenseStatus(): ILicenseStatus,
GetServerVersionOfVault(): IMFilesVersion,
LogOutSilent(): void,
LogOutWithDialogs(ParentWindow: number): boolean,
TestConnectionToServer(): void,
TestConnectionToVault(): void,
TestConnectionToVaultWithTimeout(TimeoutInMilliseconds: number): void
} 
	declare interface IVaultAsync {
+ClassGroupOperations: IVaultClassGroupOperationsAsync,
+ClassOperations: IVaultClassOperationsAsync,
+ClientOperations: IVaultClientOperationsAsync,
+CustomApplicationManagementOperations: IVaultCustomApplicationManagementOperationsAsync,
+DataSetOperations: IVaultDataSetOperationsAsync,
+ElectronicSignatureOperations: IVaultElectronicSignatureOperationsAsync,
+EventLogOperations: IVaultEventLogOperationsAsync,
+ExtensionMethodOperations: IVaultExtensionMethodOperationsAsync,
+ExternalObjectOperations: IVaultExternalObjectOperationsAsync,
+LoginAccountOperations: IVaultLoginAccountOperationsAsync,
+ManagementOperations: IVaultManagementOperationsAsync,
+NamedACLOperations: IVaultNamedACLOperationsAsync,
+NamedValueStorageOperations: IVaultNamedValueStorageOperationsAsync,
+NotificationOperations: IVaultNotificationOperationsAsync,
+ObjectFileOperations: IVaultObjectFileOperationsAsync,
+ObjectOperations: IVaultObjectOperationsAsync,
+ObjectPropertyOperations: IVaultObjectPropertyOperationsAsync,
+ObjectSearchOperations: IVaultObjectSearchOperationsAsync,
+ObjectTypeOperations: IVaultObjectTypeOperationsAsync,
+PropertyDefOperations: IVaultPropertyDefOperationsAsync,
+ScheduledJobManagementOperations: IVaultScheduledJobManagementOperationsAsync,
+ServerDataPushOperations: IVaultServerDataPushOperationsAsync,
+SharedLinkOperations: IVaultSharedLinkOperationsAsync,
+TraditionalFolderOperations: IVaultTraditionalFolderOperationsAsync,
+UserGroupOperations: IVaultUserGroupOperationsAsync,
+UserOperations: IVaultUserOperationsAsync,
+UserSettingOperations: IVaultUserSettingOperationsAsync,
+ValueListItemOperations: IVaultValueListItemOperationsAsync,
+ValueListOperations: IVaultValueListOperationsAsync,
+ViewOperations: IVaultViewOperationsAsync,
+WorkflowOperations: IVaultWorkflowOperationsAsync
} 
	declare interface IVaultAutomaticMetadataOperations {
GetAutomaticMetadataForObject(ObjVer: IObjVer): IAutomaticMetadataResult,
GetAutomaticMetadataForTemporaryFile(UploadSessionID: number): IAutomaticMetadataResult,
GetAutomaticMetadataForTemporaryFiles(IIDs: IIDs): IAutomaticMetadataResult
} 
	declare interface IVaultClassGroupOperations {
AddClassGroup(ClassGroup: IClassGroup): IClassGroup,
GetClassGroup(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
ClassGroupID: number): IClassGroup,
GetClassGroupIDByGUID(ClassGroupGUID: string): number,
GetClassGroups(ObjectType: MFiles$MFiles$MFBuiltInObjectType | number): IClassGroups,
RemoveClassGroup(ClassGroupID: number): void,
UpdateClassGroup(ClassGroup: IClassGroup): void
} 
	declare interface IVaultClassGroupOperationsAsync {
AddClassGroup(
ClassGroup: IClassGroup,
successCallback?: (result: IClassGroup) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetClassGroup(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
ClassGroupID: number,
successCallback?: (result: IClassGroup) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetClassGroupIDByGUID(
ClassGroupGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetClassGroups(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
successCallback?: (result: IClassGroups) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveClassGroup(
ClassGroupID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateClassGroup(
ClassGroup: IClassGroup,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultClassOperations {
AddObjectClassAdmin(ObjectClassAdmin: IObjectClassAdmin): IObjectClassAdmin,
GetAllObjectClasses(): IObjectClasses,
GetAllObjectClassesAdmin(): IObjectClassesAdmin,
GetObjectClass(
ObjectClass: MFiles$MFiles$MFBuiltInDocumentClass | MFiles$MFiles$MFBuiltInObjectClass | number): IObjectClass,
GetObjectClassAdmin(
Class: MFiles$MFiles$MFBuiltInDocumentClass | MFiles$MFiles$MFBuiltInObjectClass | number): IObjectClassAdmin,
GetObjectClasses(ObjectType: MFiles$MFiles$MFBuiltInObjectType | number): IObjectClasses,
GetObjectClassesAdmin(ObjectType: MFiles$MFiles$MFBuiltInObjectType | number): IObjectClassesAdmin,
GetObjectClassIDByAlias(Alias: string): number,
GetObjectClassIDByGUID(ObjectClassGUID: string): number,
RemoveObjectClassAdmin(ObjectClassID: number): void,
UpdateObjectClassAdmin(ObjectClass: IObjectClassAdmin): void,
UpdateObjectNames(ObjectClassID: number): void
} 
	declare interface IVaultClassOperationsAsync {
AddObjectClassAdmin(
ObjectClassAdmin: IObjectClassAdmin,
successCallback?: (result: IObjectClassAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetAllObjectClasses(
successCallback?: (result: IObjectClasses) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetAllObjectClassesAdmin(
successCallback?: (result: IObjectClassesAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectClass(
ObjectClass: MFiles$MFiles$MFBuiltInDocumentClass | MFiles$MFiles$MFBuiltInObjectClass | number,
successCallback?: (result: IObjectClass) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectClassAdmin(
Class: MFiles$MFiles$MFBuiltInDocumentClass | MFiles$MFiles$MFBuiltInObjectClass | number,
successCallback?: (result: IObjectClassAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectClasses(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
successCallback?: (result: IObjectClasses) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectClassesAdmin(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
successCallback?: (result: IObjectClassesAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectClassIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectClassIDByGUID(
ObjectClassGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveObjectClassAdmin(
ObjectClassID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateObjectClassAdmin(
ObjectClass: IObjectClassAdmin,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateObjectNames(
ObjectClassID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultClientOperations {
DisableCheckInReminderForCallingProcess(): void,
EnableCheckInReminderForCallingProcess(): void,
IsOffline(): boolean,
IsOnline(): boolean,
SetVaultToOffline(ParentWindow: number): MFiles$MFiles$MFOfflineTransitionResultFlags,
SetVaultToOnline(ParentWindow: number): MFiles$MFiles$MFOnlineTransitionResultFlags
} 
	declare interface IVaultClientOperationsAsync {
DisableCheckInReminderForCallingProcess(
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
EnableCheckInReminderForCallingProcess(
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsOffline(
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsOnline(
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetVaultToOffline(
ParentWindow: number,
successCallback?: (result: MFiles$MFiles$MFOfflineTransitionResultFlags) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetVaultToOnline(
ParentWindow: number,
successCallback?: (result: MFiles$MFiles$MFOnlineTransitionResultFlags) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultConnection {
AuthType: MFiles$MFiles$MFAuthType,
AutoLogin: boolean,
EncryptedConnection: boolean,
Endpoint: string,
Icon: $ReadOnlyArray<number>,
Name: string,
NetworkAddress: string,
ProtocolSequence: string,
ServerVaultGUID: string,
ServerVaultName: string,
UserSpecific: boolean,
BindToVault(
ParentWindow: number,
CanLogIn: boolean,
ReturnNULLIfCancelledByUser: boolean): IVault,
Clone(): IVaultConnection,
GetGUID(): string,
IsLoggedIn(): boolean,
LogInAs(
ParentWindow: number,
DefaultAuthType: MFiles$MFiles$MFAuthType,
ReturnNULLIfCancelledByUser: boolean): IVault,
LogInAsUser(
AuthType: MFiles$MFiles$MFAuthType,
UserName: string,
Password: string,
Domain: string | null,
SPN: string | null): IVault,
TestConnectionToVault(ParentWindow: number): MFiles$MFiles$MFVaultConnectionTestResult
} 
	declare interface IVaultConnections {
+Count: number,
Add(Index: number, VaultConnection: IVaultConnection): void,
GetVaultConnectionByName(VaultConnectionName: string): IVaultConnection,
GetVaultConnectionIndexByName(VaultConnectionName: string): number,
Item(Index: number): IVaultConnection,
Remove(Index: number): void
} 
	declare interface IVaultCore {
+Events: IVaultCoreEvents,
+ServerVault: IVault
} 
	declare type IVaultCoreEvents = {
OnNewVaultEntry(vaultEntry: IVaultEntry): void | IVaultEntryEvents,
OnStarted(): void,
OnStop(): void
} & IEvents

	declare interface IVaultCustomApplicationManagementOperations {
DownloadCustomApplicationBlock(DownloadID: number, BlockSize: number, Offset: number): $ReadOnlyArray<number>,
DownloadCustomApplicationBlock_32bit(DownloadID: number, BlockSize: number, Offset: number): $ReadOnlyArray<number>,
DownloadCustomApplicationBlockBegin(ApplicationID: string): IFileDownloadSession,
DownloadCustomApplicationBlockBegin_32bit(ApplicationID: string): IFileDownloadSession,
EnableCustomApplication(ApplicationID: string, Enabled: boolean): void,
GetCustomApplication(ApplicationID: string): ICustomApplication,
GetCustomApplications(): ICustomApplications,
GetCustomApplicationsEx(Platform: MFiles$MFiles$MFExtApplicationPlatform): ICustomApplications,
InstallCustomApplication(File: string): void,
UninstallCustomApplication(ApplicationID: string): void
} 
	declare interface IVaultCustomApplicationManagementOperationsAsync {
DownloadCustomApplicationBlock(
DownloadID: number,
BlockSize: number,
Offset: number,
successCallback?: (result: $ReadOnlyArray<number>) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadCustomApplicationBlock_32bit(
DownloadID: number,
BlockSize: number,
Offset: number,
successCallback?: (result: $ReadOnlyArray<number>) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadCustomApplicationBlockBegin(
ApplicationID: string,
successCallback?: (result: IFileDownloadSession) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadCustomApplicationBlockBegin_32bit(
ApplicationID: string,
successCallback?: (result: IFileDownloadSession) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
EnableCustomApplication(
ApplicationID: string,
Enabled: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetCustomApplication(
ApplicationID: string,
successCallback?: (result: ICustomApplication) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetCustomApplications(
successCallback?: (result: ICustomApplications) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetCustomApplicationsEx(
Platform: MFiles$MFiles$MFExtApplicationPlatform,
successCallback?: (result: ICustomApplications) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
InstallCustomApplication(
File: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UninstallCustomApplication(
ApplicationID: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultDataSetOperations {
GetDataSetExportingStatus(ID: number): IDataSetExportingStatus,
GetDataSets(): IDataSets,
GetReportAccessCredentials(): IReportAccessCredentials,
StartDataSetExport(ID: number): void
} 
	declare interface IVaultDataSetOperationsAsync {
GetDataSetExportingStatus(
ID: number,
successCallback?: (result: IDataSetExportingStatus) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetDataSets(
successCallback?: (result: IDataSets) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetReportAccessCredentials(
successCallback?: (result: IReportAccessCredentials) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
StartDataSetExport(
ID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultElectronicSignatureOperations {
AddEmptySignature(ObjVer: IObjVer, SignatureIdentifier: string): IObjectVersionAndProperties,
AddEmptySignatures(ObjVer: IObjVer): IObjectVersionAndProperties,
DisconnectSignature(ObjVer: IObjVer, SignatureIdentifier: string): IObjectVersionAndProperties,
DisconnectSignatureEx(
ObjVer: IObjVer,
SignatureIdentifier: string,
InvalidateDisconnectedSignatures: boolean): IObjectVersionAndProperties,
DisconnectSignatures(ObjVer: IObjVer): IObjectVersionAndProperties,
DisconnectSignaturesEx(
ObjVer: IObjVer,
InvalidateDisconnectedSignatures: boolean): IObjectVersionAndProperties
} 
	declare interface IVaultElectronicSignatureOperationsAsync {
AddEmptySignature(
ObjVer: IObjVer,
SignatureIdentifier: string,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
AddEmptySignatures(
ObjVer: IObjVer,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DisconnectSignature(
ObjVer: IObjVer,
SignatureIdentifier: string,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DisconnectSignatureEx(
ObjVer: IObjVer,
SignatureIdentifier: string,
InvalidateDisconnectedSignatures: boolean,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DisconnectSignatures(
ObjVer: IObjVer,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DisconnectSignaturesEx(
ObjVer: IObjVer,
InvalidateDisconnectedSignatures: boolean,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultEntry {
+Events: IVaultEntryEvents,
+Vault: IVault,
+VaultCore: IVaultCore,
+VaultUI: IVaultUI,
NotifyVaultEntry(ID: string, data1: any, data2: any): any
} 
	declare type IVaultEntryEvents = {
OnAddObjectFile(
objVer: IObjVer,
sourceObjectFile: ISourceObjectFile): null | boolean | {
OnSuccess(objectVersion: IObjectVersion, objectFile: IObjectFile): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnAddObjectsToFavorites(
objIDs: IObjIDs): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnAddObjectToFavorites(
objID: IObjID): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnChangeVaultLanguage(
languageID: number): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnCheckInObject(
objVer: IObjVer,
propertyValues: IPropertyValues): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnCheckInObjects(
objVers: IObjVers,
propertyValues: IPropertyValues): null | boolean | {
OnSuccess(objectVersions: IObjectVersions): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnCheckOutObject(
objID: IObjID): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnCheckOutObjects(
objIDs: IObjIDs): null | boolean | {
OnSuccess(objectVersions: IObjectVersions): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnCreateObject(
objectType: number,
propertyValues: IPropertyValues,
sourceObjectFiles: ISourceObjectFiles,
accessControlList: IAccessControlList,
checkInRequested: boolean,
singleFileRequested: boolean): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnDestroyObject(
objID: IObjID): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnDestroyObjects(
objIDs: IObjIDs): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnDestroyObjectVersion(
objVer: IObjVer): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnDestroyObjectVersions(
objVers: IObjVers): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnLoggedIn(): void,
OnLogOut(
): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnModifyObjectVersionLabels(
objVer: IObjVer,
clearFromOtherVersions: boolean,
append: boolean,
labelIDs: IIDs,
singleLabelRequired: boolean): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnNotification(id: string, data1: any, data2: any): any,
OnObjectAddedToFavorites(objID: IObjID): void,
OnObjectCheckedIn(objectVersion: IObjectVersion): void,
OnObjectCheckedOut(objectVersion: IObjectVersion): void,
OnObjectCheckoutsUndone(objectVersions: IObjectVersions): void,
OnObjectCheckoutUndone(objectVersion: IObjectVersion): void,
OnObjectCreated(objectVersion: IObjectVersion): void,
OnObjectDestroyed(objID: IObjID): void,
OnObjectFileAdded(objectVersion: IObjectVersion, objectFile: IObjectFile): void,
OnObjectFileRemoved(objectVersion: IObjectVersion, fileVer: IFileVer): void,
OnObjectFileRenamed(objectVersion: IObjectVersion, objectFile: IObjectFile): void,
OnObjectLevelPropertySet(objID: IObjID, propertyValue: IPropertyValue): void,
OnObjectOfflineAvailabilityRemoved(objID: IObjID): void,
OnObjectOfflineAvailabilitySet(objID: IObjID): void,
OnObjectRemoved(objectVersion: IObjectVersion): void,
OnObjectRemovedFromFavorites(objID: IObjID): void,
OnObjectsAddedToFavorites(objIDs: IObjIDs): void,
OnObjectsCheckedIn(objectVersions: IObjectVersions): void,
OnObjectsCheckedOut(objectVersions: IObjectVersions): void,
OnObjectsDestroyed(objIDs: IObjIDs): void,
OnObjectsRemoved(objectVersions: IObjectVersions): void,
OnObjectsRemovedFromFavorites(objIDs: IObjIDs): void,
OnObjectUndeleted(objectVersion: IObjectVersion): void,
OnObjectVersionDestroyed(objVer: IObjVer): void,
OnObjectVersionLabelsModified(
objVer: IObjVer,
clearFromOtherVersions: boolean,
append: boolean,
labelIDs: IIDs): void,
OnObjectVersionPermissionsSet(objectVersion: IObjectVersion): void,
OnObjectVersionRolledBack(objectVersion: IObjectVersion): void,
OnObjectVersionsDestroyed(objVers: IObjVers): void,
OnPropertiesOfObjectVersionSet(objectVersion: IObjectVersion): void,
OnPropertiesOfObjectVersionsSet(objectVersions: IObjectVersions): void,
OnRemoveObject(
objID: IObjID): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnRemoveObjectFile(
objVer: IObjVer,
fileVer: IFileVer): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnRemoveObjectFromFavorites(
objID: IObjID): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnRemoveObjectOfflineAvailability(
objID: IObjID): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnRemoveObjects(
objIDs: IObjIDs): null | boolean | {
OnSuccess(objectVersions: IObjectVersions): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnRemoveObjectsFromFavorites(
objIDs: IObjIDs): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnRenameObjectFile(
objVer: IObjVer,
fileVer: IFileVer,
newName: null | ITypedValue,
newExtension: null | ITypedValue): null | boolean | {
OnSuccess(objectVersion: IObjectVersion, objectFile: IObjectFile): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnRollBackObjectVersion(
objVer: IObjVer): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnSetObjectLevelProperty(
objID: IObjID,
propertyValue: IPropertyValue): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnSetObjectOfflineAvailability(
objID: IObjID): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnSetObjectVersionPermissions(
objVer: IObjVer,
changeAllVersions: boolean,
accessControlList: IAccessControlList): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnSetPropertiesOfObjectVersion(
setPropertiesParams: ISetPropertiesParams,
singlePropertyUpdate: boolean,
singlePropertyRemove: boolean): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnSetPropertiesOfObjectVersions(
setPropertiesParamsOfMultipleObjects: ISetPropertiesParamsOfMultipleObjects,
singlePropertyUpdate: boolean,
singlePropertyRemove: boolean): null | boolean | {
OnSuccess(objectVersions: IObjectVersions): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnStarted(): void,
OnStop(): void,
OnSwitchedToOfflineMode(): void,
OnSwitchedToOnlineMode(): void,
OnSwitchToOfflineMode(
): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnSwitchToOnlineMode(
): null | boolean | {
OnSuccess(): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnUndeleteObject(
objID: IObjID): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnUndeleteObjects(
objIDs: IObjIDs): null | boolean | {
OnSuccess(objectVersions: IObjectVersions): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnUndoObjectCheckout(
objVer: IObjVer): null | boolean | {
OnSuccess(objectVersion: IObjectVersion): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnUndoObjectCheckouts(
objVers: IObjVers): null | boolean | {
OnSuccess(objectVersions: IObjectVersions): void,
OnError(errorCode: number, errorMessage: string, errorStack: string): void,
Finally(): void
},
OnVaultLanguageChanged(languageID: number): void
} & IEvents

	declare interface IVaultEventLogOperations {
Clear(): void,
ClearRange(FirstEventID: number, LastEventID: number): void,
ClearRange_32bit(FirstEventID: string, LastEventID: string): void,
ExportAll(): string,
ExportRange(
FirstEventID: number,
LastEventID: number,
DeleteEventsAfterExporting: boolean): string,
ExportRange_32bit(
FirstEventID: string,
LastEventID: string,
DeleteEventsAfterExporting: boolean): string,
GetIDRange(): IIDRange,
IsLoggingEnabled(): boolean,
SetLoggingEnabled(Enabled: boolean): void
} 
	declare interface IVaultEventLogOperationsAsync {
Clear(
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ClearRange(
FirstEventID: number,
LastEventID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ClearRange_32bit(
FirstEventID: string,
LastEventID: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ExportAll(
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ExportRange(
FirstEventID: number,
LastEventID: number,
DeleteEventsAfterExporting: boolean,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ExportRange_32bit(
FirstEventID: string,
LastEventID: string,
DeleteEventsAfterExporting: boolean,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetIDRange(
successCallback?: (result: IIDRange) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsLoggingEnabled(
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetLoggingEnabled(
Enabled: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultExtensionMethodOperations {
DoesActiveVaultExtensionMethodExist(MethodIdentifier: string): boolean,
ExecuteVaultExtensionMethod(MethodIdentifier: string, Input: string): string
} 
	declare interface IVaultExtensionMethodOperationsAsync {
DoesActiveVaultExtensionMethodExist(
MethodIdentifier: string,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ExecuteVaultExtensionMethod(
MethodIdentifier: string,
Input: string,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultExternalObjectOperations {
PromoteObject(
ObjVer: IObjVer,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
pACLProvidedCBN: IAccessControlList): IObjectVersionAndProperties
} 
	declare interface IVaultExternalObjectOperationsAsync {
PromoteObject(
ObjVer: IObjVer,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
pACLProvidedCBN: IAccessControlList,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultLoginAccountOperations {
AddLoginAccount(LoginAccount: ILoginAccount, Password: string): void,
ForceLogout(AccountNames: IStrings): void,
GetLoginAccount(AccountName: string): ILoginAccount,
GetLoginAccounts(): ILoginAccounts,
GetLoginAccountsWithSessions(): ILoginAccounts,
GetPersonalInformationFromDomain(AccountName: string): ILoginAccountPersonalInformation,
ModifyLoginAccount(LoginAccount: ILoginAccount): void,
RemoveLoginAccount(AccountName: string): void,
UpdateLoginPassword(AccountName: string, NewPassword: string): void
} 
	declare interface IVaultLoginAccountOperationsAsync {
AddLoginAccount(
LoginAccount: ILoginAccount,
Password: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ForceLogout(
AccountNames: IStrings,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLoginAccount(
AccountName: string,
successCallback?: (result: ILoginAccount) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLoginAccounts(
successCallback?: (result: ILoginAccounts) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLoginAccountsWithSessions(
successCallback?: (result: ILoginAccounts) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPersonalInformationFromDomain(
AccountName: string,
successCallback?: (result: ILoginAccountPersonalInformation) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ModifyLoginAccount(
LoginAccount: ILoginAccount,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveLoginAccount(
AccountName: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateLoginPassword(
AccountName: string,
NewPassword: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultManagementOperations {
ArchiveOldVersions(ArchiveOldVersionsJob: IArchiveOldVersionsJob): void,
ExportContent(ExportContentJob: IExportContentJob): void,
GetEventHandlers(): IEventHandlers,
GetVaultProperties(): IVaultProperties,
ImportContent(ImportContentJob: IImportContentJob): void,
ImportContentAsync(ImportContentJob: IImportContentJob): number,
IsAsyncJobRunning(JobID: number): boolean,
PreviewImportContent(ImportContentJob: IImportContentJob, SummaryFile: string): void,
RebuildFullTextSearchIndex(Metadata: boolean, FileContents: boolean): void,
SetEventHandlers(EventHandlers: IEventHandlers): void,
UpdateVaultProperties(VaultProperties: IVaultProperties, RegistrationDataOnly: boolean): void,
VerifyVault(VerifyVaultJob: IVerifyVaultJob): IVerifyVaultJobOutput,
WaitAsyncJob(JobID: number): void
} 
	declare interface IVaultManagementOperationsAsync {
ArchiveOldVersions(
ArchiveOldVersionsJob: IArchiveOldVersionsJob,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ExportContent(
ExportContentJob: IExportContentJob,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetEventHandlers(
successCallback?: (result: IEventHandlers) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetVaultProperties(
successCallback?: (result: IVaultProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ImportContent(
ImportContentJob: IImportContentJob,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ImportContentAsync(
ImportContentJob: IImportContentJob,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsAsyncJobRunning(
JobID: number,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
PreviewImportContent(
ImportContentJob: IImportContentJob,
SummaryFile: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RebuildFullTextSearchIndex(
Metadata: boolean,
FileContents: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetEventHandlers(
EventHandlers: IEventHandlers,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateVaultProperties(
VaultProperties: IVaultProperties,
RegistrationDataOnly: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
VerifyVault(
VerifyVaultJob: IVerifyVaultJob,
successCallback?: (result: IVerifyVaultJobOutput) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
WaitAsyncJob(
JobID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultNamedACLOperations {
AddNamedACLAdmin(NamedACLAdmin: INamedACLAdmin): INamedACLAdmin,
GetMatchingNamedACLForAccessControlList(
AccessControlList: IAccessControlList,
ExplicitLinkOnly: boolean,
ActiveAccessControlComponentsOnly: boolean,
RefreshFromServer: boolean): INamedACL,
GetMatchingNamedACLForAccessControlListComponent(
AccessControlListComponent: IAccessControlListComponent,
ExplicitLinkOnly: boolean,
RefreshFromServer: boolean): INamedACL,
GetNamedACL(NamedACLID: number): INamedACL,
GetNamedACLAdmin(NamedACLID: number): INamedACLAdmin,
GetNamedACLIDByAlias(Alias: string): number,
GetNamedACLIDByGUID(NamedACLGUID: string): number,
GetNamedACLs(): INamedACLs,
GetNamedACLsByTypeAdmin(Type: MFiles$MFiles$MFNamedACLType): INamedACLsAdmin,
GetNamedACLsWithRefresh(RefreshFromServer: boolean): INamedACLs,
GetNamedACLWithRefresh(NamedACLID: number, RefreshFromServer: boolean): INamedACL,
IsNamedACLUsedInAutomaticPermissionsAdmin(NamedACLID: number): boolean,
RemoveNamedACLWithPropagationAdmin(NamedACLID: number, AllowPropagation: boolean): void,
UpdateNamedACLAdmin(NamedACLAdmin: INamedACLAdmin): void,
UpdateNamedACLWithPropagationAdmin(
NamedACLAdmin: INamedACLAdmin,
MaintainLinks: boolean,
AllowPropagation: boolean): void
} 
	declare interface IVaultNamedACLOperationsAsync {
AddNamedACLAdmin(
NamedACLAdmin: INamedACLAdmin,
successCallback?: (result: INamedACLAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetMatchingNamedACLForAccessControlList(
AccessControlList: IAccessControlList,
ExplicitLinkOnly: boolean,
ActiveAccessControlComponentsOnly: boolean,
RefreshFromServer: boolean,
successCallback?: (result: INamedACL) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetMatchingNamedACLForAccessControlListComponent(
AccessControlListComponent: IAccessControlListComponent,
ExplicitLinkOnly: boolean,
RefreshFromServer: boolean,
successCallback?: (result: INamedACL) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetNamedACL(
NamedACLID: number,
successCallback?: (result: INamedACL) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetNamedACLAdmin(
NamedACLID: number,
successCallback?: (result: INamedACLAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetNamedACLIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetNamedACLIDByGUID(
NamedACLGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetNamedACLs(
successCallback?: (result: INamedACLs) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetNamedACLsByTypeAdmin(
Type: MFiles$MFiles$MFNamedACLType,
successCallback?: (result: INamedACLsAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetNamedACLsWithRefresh(
RefreshFromServer: boolean,
successCallback?: (result: INamedACLs) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetNamedACLWithRefresh(
NamedACLID: number,
RefreshFromServer: boolean,
successCallback?: (result: INamedACL) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsNamedACLUsedInAutomaticPermissionsAdmin(
NamedACLID: number,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveNamedACLWithPropagationAdmin(
NamedACLID: number,
AllowPropagation: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateNamedACLAdmin(
NamedACLAdmin: INamedACLAdmin,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateNamedACLWithPropagationAdmin(
NamedACLAdmin: INamedACLAdmin,
MaintainLinks: boolean,
AllowPropagation: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultNamedValueStorageOperations {
GetNamedValues(
NamedValueType: MFiles$MFiles$MFNamedValueType,
Namespace: string): INamedValues,
RemoveNamedValues(
NamedValueType: MFiles$MFiles$MFNamedValueType,
Namespace: string,
NamedValueNames: IStrings): void,
SetNamedValues(
NamedValueType: MFiles$MFiles$MFNamedValueType,
Namespace: string,
NamedValues: INamedValues): void
} 
	declare interface IVaultNamedValueStorageOperationsAsync {
GetNamedValues(
NamedValueType: MFiles$MFiles$MFNamedValueType,
Namespace: string,
successCallback?: (result: INamedValues) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveNamedValues(
NamedValueType: MFiles$MFiles$MFNamedValueType,
Namespace: string,
NamedValueNames: IStrings,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetNamedValues(
NamedValueType: MFiles$MFiles$MFNamedValueType,
Namespace: string,
NamedValues: INamedValues,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultNotificationOperations {
SendCustomNotification(
UserOrUserGroupIDs: IUserOrUserGroupIDs,
IncludeSubstituteUsers: boolean,
ExternalRecipients: IStrings,
SendWithServerEmailIdentity: boolean,
Subject: string,
Body: string): void
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
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultObjectFileOperations {
AddEmptyFile(ObjVer: IObjVer, Title: string, Extension: string): IFileVer,
AddFile(
ObjVer: IObjVer,
Title: string,
Extension: string,
SourcePath: string): IFileVer,
CloseUploadSession(UploadID: number): void,
ConvertToPDF(
ObjVer: IObjVer,
FileID: number,
StoreAsSeparateFile: boolean,
OverwriteExistingFile: boolean,
PDFA1b: boolean,
FailOnUnsupportedSourceFiles: boolean): IObjectVersion,
DownloadFile(File: number, FileVersion: number, FilePath: string): void,
DownloadFileAsDataURI(ObjVer: IObjVer, File: number, FileVersion: number): string,
DownloadFileEx(
File: number,
FileVersion: number,
FilePath: string,
FileFormat: MFiles$MFiles$MFFileFormat): void,
DownloadFileInBlocks_Begin(File: number, FileVersion: number): IFileDownloadSession,
DownloadFileInBlocks_Begin_32bit(File: number, FileVersion: number): IFileDownloadSession,
DownloadFileInBlocks_BeginEx(
File: number,
FileVersion: number,
FileFormat: MFiles$MFiles$MFFileFormat): IFileDownloadSession,
DownloadFileInBlocks_BeginEx_32bit(
File: number,
FileVersion: number,
FileFormat: MFiles$MFiles$MFFileFormat): IFileDownloadSession,
DownloadFileInBlocks_ReadBlock(DownloadID: number, BlockSize: number, Offset: number): $ReadOnlyArray<number>,
DownloadFileInBlocks_ReadBlock_32bit(DownloadID: number, BlockSize: number, Offset: number): $ReadOnlyArray<number>,
GetFiles(ObjVer: IObjVer): IObjectFiles,
GetFilesForModificationInEventHandler(ObjVer: IObjVer): IObjectFiles,
GetFileSize(FileVer: IFileVer): number,
GetFileSize_32bit(FileVer: IFileVer): number,
GetLatestFileVersion(FileID: number, AllowCheckedOut: boolean): IFileVer,
GetObjIDOfFile(FileID: number): IObjID,
GetPathInDefaultView(
ObjID: IObjID,
ObjectVersion: number,
FileID: number,
FileVersion: number,
LatestSpecificBehavior: MFiles$MFiles$MFLatestSpecificBehavior,
UpdateFromServer: boolean): string,
GetPathInDefaultViewEx(
ObjID: IObjID,
ObjectVersion: number,
FileID: number,
FileVersion: number,
LatestSpecificBehavior: MFiles$MFiles$MFLatestSpecificBehavior,
PreferTraditionalFolderLocation: boolean,
UpdateFromServer: boolean): string,
OpenFileInDefaultApplication(
ParentWindow: number,
ObjVer: IObjVer,
FileVer: IFileVer,
FileOpenMethod: MFiles$MFiles$MFFileOpenMethod): void,
PerformOCROperation(
ObjVer: IObjVer,
FileVer: IFileVer,
OCROptions: IOCROptions,
ZoneRecognitionMode: MFiles$MFiles$MFOCRZoneRecognitionMode,
ZoneRecognitionPages: IOCRPages,
ConvertToSearchablePDF: boolean): IOCRPageResults,
RemoveFile(ObjVer: IObjVer, FileVer: IFileVer): IObjectVersion,
RenameFile(
ObjVer: IObjVer,
FileVer: IFileVer,
Title: string,
Extension: string,
UpdateSingleFileDocumentTitle: boolean): IObjectVersion,
UpdateMetadataInFile(ObjVer: IObjVer, File: number, FailOnUnsupportedFiles: boolean): IObjectVersion,
UploadFile(File: number, FileVersion: number, FilePath: string): void,
UploadFileBlock(
UploadID: number,
TotalSizeInBytes: number,
Offset: number,
Block: $ReadOnlyArray<number>): void,
UploadFileBlock_32bit(
UploadID: number,
TotalSizeInBytes: number,
Offset: number,
Block: $ReadOnlyArray<number>): void,
UploadFileBlockBegin(): number,
UploadFileBlockBegin_32bit(): number,
UploadFileCommit(UploadID: number, File: number, FileVersion: number, LogicalSize: number): void,
UploadFileCommit_32bit(UploadID: number, File: number, FileVersion: number, LogicalSize: number): void,
UploadFromDataURI(ObjVer: IObjVer, File: number, FileVersion: number, DataURI: string): void,
UploadTemporaryFile(FilePath: string): number,
UploadTemporaryFileBlock(
UploadID: number,
TotalSizeInBytes: number,
Offset: number,
Block: $ReadOnlyArray<number>): void,
UploadTemporaryFileBlock_32bit(
UploadID: number,
TotalSizeInBytes: number,
Offset: number,
Block: $ReadOnlyArray<number>): void,
UploadTemporaryFileBlockBegin(FileExtension: string): number,
UploadTemporaryFileBlockBegin_32bit(FileExtension: string): number,
UploadTemporaryFileCommit(UploadID: number, LogicalSize: number): void,
UploadTemporaryFileCommit_32bit(UploadID: number, LogicalSize: number): void
} 
	declare interface IVaultObjectFileOperationsAsync {
AddEmptyFile(
ObjVer: IObjVer,
Title: string,
Extension: string,
successCallback?: (result: IFileVer) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
AddFile(
ObjVer: IObjVer,
Title: string,
Extension: string,
SourcePath: string,
successCallback?: (result: IFileVer) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CloseUploadSession(
UploadID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ConvertToPDF(
ObjVer: IObjVer,
FileID: number,
StoreAsSeparateFile: boolean,
OverwriteExistingFile: boolean,
PDFA1b: boolean,
FailOnUnsupportedSourceFiles: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFile(
File: number,
FileVersion: number,
FilePath: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFileAsDataURI(
ObjVer: IObjVer,
File: number,
FileVersion: number,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFileEx(
File: number,
FileVersion: number,
FilePath: string,
FileFormat: MFiles$MFiles$MFFileFormat,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFileInBlocks_Begin(
File: number,
FileVersion: number,
successCallback?: (result: IFileDownloadSession) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFileInBlocks_Begin_32bit(
File: number,
FileVersion: number,
successCallback?: (result: IFileDownloadSession) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFileInBlocks_BeginEx(
File: number,
FileVersion: number,
FileFormat: MFiles$MFiles$MFFileFormat,
successCallback?: (result: IFileDownloadSession) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFileInBlocks_BeginEx_32bit(
File: number,
FileVersion: number,
FileFormat: MFiles$MFiles$MFFileFormat,
successCallback?: (result: IFileDownloadSession) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFileInBlocks_ReadBlock(
DownloadID: number,
BlockSize: number,
Offset: number,
successCallback?: (result: $ReadOnlyArray<number>) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DownloadFileInBlocks_ReadBlock_32bit(
DownloadID: number,
BlockSize: number,
Offset: number,
successCallback?: (result: $ReadOnlyArray<number>) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFiles(
ObjVer: IObjVer,
successCallback?: (result: IObjectFiles) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFilesForModificationInEventHandler(
ObjVer: IObjVer,
successCallback?: (result: IObjectFiles) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFileSize(
FileVer: IFileVer,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFileSize_32bit(
FileVer: IFileVer,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLatestFileVersion(
FileID: number,
AllowCheckedOut: boolean,
successCallback?: (result: IFileVer) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjIDOfFile(
FileID: number,
successCallback?: (result: IObjID) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPathInDefaultView(
ObjID: IObjID,
ObjectVersion: number,
FileID: number,
FileVersion: number,
LatestSpecificBehavior: MFiles$MFiles$MFLatestSpecificBehavior,
UpdateFromServer: boolean,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPathInDefaultViewEx(
ObjID: IObjID,
ObjectVersion: number,
FileID: number,
FileVersion: number,
LatestSpecificBehavior: MFiles$MFiles$MFLatestSpecificBehavior,
PreferTraditionalFolderLocation: boolean,
UpdateFromServer: boolean,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
OpenFileInDefaultApplication(
ParentWindow: number,
ObjVer: IObjVer,
FileVer: IFileVer,
FileOpenMethod: MFiles$MFiles$MFFileOpenMethod,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
PerformOCROperation(
ObjVer: IObjVer,
FileVer: IFileVer,
OCROptions: IOCROptions,
ZoneRecognitionMode: MFiles$MFiles$MFOCRZoneRecognitionMode,
ZoneRecognitionPages: IOCRPages,
ConvertToSearchablePDF: boolean,
successCallback?: (result: IOCRPageResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveFile(
ObjVer: IObjVer,
FileVer: IFileVer,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RenameFile(
ObjVer: IObjVer,
FileVer: IFileVer,
Title: string,
Extension: string,
UpdateSingleFileDocumentTitle: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateMetadataInFile(
ObjVer: IObjVer,
File: number,
FailOnUnsupportedFiles: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadFile(
File: number,
FileVersion: number,
FilePath: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadFileBlock(
UploadID: number,
TotalSizeInBytes: number,
Offset: number,
Block: $ReadOnlyArray<number>,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadFileBlock_32bit(
UploadID: number,
TotalSizeInBytes: number,
Offset: number,
Block: $ReadOnlyArray<number>,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadFileBlockBegin(
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadFileBlockBegin_32bit(
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadFileCommit(
UploadID: number,
File: number,
FileVersion: number,
LogicalSize: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadFileCommit_32bit(
UploadID: number,
File: number,
FileVersion: number,
LogicalSize: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadFromDataURI(
ObjVer: IObjVer,
File: number,
FileVersion: number,
DataURI: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadTemporaryFile(
FilePath: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadTemporaryFileBlock(
UploadID: number,
TotalSizeInBytes: number,
Offset: number,
Block: $ReadOnlyArray<number>,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadTemporaryFileBlock_32bit(
UploadID: number,
TotalSizeInBytes: number,
Offset: number,
Block: $ReadOnlyArray<number>,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadTemporaryFileBlockBegin(
FileExtension: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadTemporaryFileBlockBegin_32bit(
FileExtension: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadTemporaryFileCommit(
UploadID: number,
LogicalSize: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UploadTemporaryFileCommit_32bit(
UploadID: number,
LogicalSize: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultObjectOperations {
AddFavorite(ObjID: IObjID): IObjectVersionAndProperties,
AddFavorites(ObjIDs: IObjIDs): IObjectVersionAndPropertiesOfMultipleObjects,
ChangePermissionsToACL(
ObjVer: IObjVer,
AccessControlList: IAccessControlList,
ChangeAllVersions: boolean): IObjectVersion,
ChangePermissionsToNamedACL(ObjVer: IObjVer, NamedACL: number, ChangeAllVersions: boolean): IObjectVersion,
CheckIn(ObjVer: IObjVer): IObjectVersion,
CheckInMultipleObjects(ObjVers: IObjVers): IObjectVersions,
CheckOut(ObjID: IObjID): IObjectVersion,
CheckOutMultipleObjects(ObjIDs: IObjIDs): IObjectVersions,
CreateNewAssignment(
AssignmentName: string,
AssignmentDescription: string,
AssignedToUser: ITypedValue,
Deadline: ITypedValue,
AccessControlList: IAccessControlList): IObjectVersionAndProperties,
CreateNewEmptySingleFileDocument(
PropertyValues: IPropertyValues,
Title: string,
Extension: string,
AccessControlList: IAccessControlList): IObjectVersionAndProperties,
CreateNewObject(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
PropertyValues: IPropertyValues,
SourceObjectFiles: ISourceObjectFiles,
AccessControlList: IAccessControlList): IObjectVersionAndProperties,
CreateNewObjectEx(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Properties: IPropertyValues,
SourceFiles: ISourceObjectFiles,
SFD: boolean,
CheckIn: boolean,
AccessControlList: IAccessControlList): IObjectVersionAndProperties,
CreateNewObjectExQuick(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Properties: IPropertyValues,
SourceFiles: ISourceObjectFiles,
SFD: boolean,
CheckIn: boolean,
AccessControlList: IAccessControlList): number,
CreateNewSFDObject(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Properties: IPropertyValues,
SourceFile: ISourceObjectFile,
CheckIn: boolean,
AccessControlList: IAccessControlList): IObjectVersionAndProperties,
CreateNewSFDObjectQuick(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Properties: IPropertyValues,
SourceFile: ISourceObjectFile,
CheckIn: boolean,
AccessControlList: IAccessControlList): number,
DelayedCheckIn(ObjVer: IObjVer): void,
DeleteObject(ObjID: IObjID): IObjectVersion,
DestroyObject(ObjID: IObjID, DestroyAllVersions: boolean, ObjectVersion: number): void,
DestroyObjects(ObjIDs: IObjIDs): void,
FollowObject(ObjID: IObjID, Follow: boolean): void,
ForceUndoCheckout(ObjVer: IObjVer): IObjectVersion,
GetCollectionMembers(ObjVer: IObjVer): IObjectVersions,
GetHistory(ObjID: IObjID): IObjectVersions,
GetLatestObjectVersionAndProperties(
ObjID: IObjID,
AllowCheckedOut: boolean,
UpdateFromServer: boolean): IObjectVersionAndProperties,
GetLatestObjVer(ObjID: IObjID, AllowCheckedOut: boolean, UpdateFromServer: boolean): IObjVer,
GetLatestObjVerEx(
ObjID: IObjID,
AllowCheckedOut: boolean,
UpdateFromServer: boolean,
NotifyViews: boolean): IObjVer,
GetMFilesURLForObject(
ObjID: IObjID,
TargetVersion: number,
SpecificVersion: boolean,
URLType: MFiles$MFiles$MFilesURLType): string,
GetMFilesURLForObjectOrFile(
ObjID: IObjID,
TargetVersion: number,
SpecificVersion: boolean,
File: number,
URLType: MFiles$MFiles$MFilesURLType): string,
GetObjectGUID(ObjID: IObjID): string,
GetObjectInfo(
ObjVer: IObjVer,
LatestVersion: boolean,
UpdateFromServer: boolean): IObjectVersion,
GetObjectInfoEx(
ObjVer: IObjVer,
LatestVersion: boolean,
UpdateFromServer: boolean,
NotifyViews: boolean): IObjectVersion,
GetObjectLocationsInView(
View: MFiles$MFiles$MFBuiltInView | number,
LatestSpecificBehavior: MFiles$MFiles$MFLatestSpecificBehavior,
ObjectVersion: IObjVer): IStrings,
GetObjectPermissions(ObjVer: IObjVer): IObjectVersionPermissions,
GetObjectVersionAndProperties(ObjVer: IObjVer, UpdateFromServer: boolean): IObjectVersionAndProperties,
GetObjectVersionAndPropertiesOfMultipleObjects(
ObjVers: IObjVers,
LatestVersions: boolean,
AllowCheckedOut: boolean,
AllowMissingObjectVersions: boolean,
UpdateFromServer: boolean): IObjectVersionAndPropertiesOfMultipleObjects,
GetObjIDByGUID(ObjectGUID: string): IObjID,
GetObjIDByOriginalObjID(OriginalVaultGUID: string, OriginalObjID: IObjID): IObjID,
GetOfflineAvailability(ObjID: IObjID): boolean,
GetOfflineObjIDs(): IObjIDs,
GetRelationships(ObjVer: IObjVer, Mode: MFiles$MFiles$MFRelationshipsMode): IObjectVersions,
GetThumbnailAsBytes(
ObjVer: IObjVer,
FileVer: IFileVer,
Width: number,
Height: number,
GetFileIconThumbnailIfRealThumbnailNotAvailable: boolean): $ReadOnlyArray<number>,
IsObjectCheckedOut(ObjID: IObjID, UpdateFromServer: boolean): boolean,
IsObjectCheckedOutToThisUserOnThisComputer(ObjID: IObjID, UpdateFromServer: boolean): boolean,
IsObjectFollowed(ObjID: IObjID): boolean,
IsSingleFileObject(ObjVer: IObjVer): boolean,
MatchesSearchConditions(pIObjVer: IObjVer, pISearchConditions: ISearchConditions): boolean,
MatchesSearchConditionsEx(
pIObjectVersion: IObjectVersion,
pISearchConditions: ISearchConditions,
pIPropertyValues: IPropertyValues,
pIObjectVersionAndPropertiesOfMultipleObjects: IObjectVersionAndPropertiesOfMultipleObjects): boolean,
NotifyObjectAccess(ObjID: IObjID): IObjectVersionAndProperties,
ProposeCheckOutForFile(
ParentWindow: number,
ObjVersionFile: IObjectFileAndVersion,
CanCancel: boolean): boolean,
RejectCheckInReminder(ObjVer: IObjVer): void,
RemoveFavorite(ObjID: IObjID): IObjectVersionAndProperties,
RemoveFavorites(ObjIDs: IObjIDs): IObjectVersionAndPropertiesOfMultipleObjects,
ResolveConflict(ParticipantObjID: IObjID, KeepThis: boolean): IObjectVersions,
Rollback(ObjID: IObjID, RollbackToVersion: number): IObjectVersion,
SetExternalID(ObjID: IObjID, ExtID: string): void,
SetObjectGUID(ObjID: IObjID, ObjectGUID: string): void,
SetOfflineAvailability(ObjID: IObjID, AvailableInOfflineMode: boolean): void,
SetSingleFileObject(ObjVer: IObjVer, SingleFile: boolean): void,
ShowBasicEditObjectWindow(ParentWindow: number, ObjVer: IObjVer): IObjectWindowResult,
ShowBasicNewObjectWindow(ParentWindow: number, ObjectType: IObjectType): IObjectWindowResult,
ShowChangeStateDialogModal(ParentWindow: number, ObjectID: IObjID): void,
ShowCheckInReminder(ParentWindow: number, ObjVer: IObjVer, Asynchronous: boolean): IObjectVersion,
ShowCheckInReminderDialogModal(
ParentWindow: number,
ObjVer: IObjVer,
ApplyEnvironmentConditions: boolean): boolean,
ShowCheckoutPrompt(
ParentWindow: number,
Message: string,
ObjID: IObjID,
ShowCancel: boolean,
AutoRejectConsequentPrompts: boolean): IObjectVersion,
ShowCollectionMembersDialog(ParentWindow: number, ObjectVersion: IObjVer, Modeless: boolean): void,
ShowCommentsDialogModal(ParentWindow: number, ObjectID: IObjID): void,
ShowEditObjectWindow(
ParentWindow: number,
Mode: MFiles$MFiles$MFObjectWindowMode,
ObjVer: IObjVer): IObjectWindowResult,
ShowHistoryDialogModal(ParentWindow: number, ObjectID: IObjID): void,
ShowNewObjectWindow(
ParentWindow: number,
Mode: MFiles$MFiles$MFObjectWindowMode,
ObjectCreationInfo: IObjectCreationInfo): IObjectWindowResult,
ShowPrefilledNewObjectWindow(
ParentWindow: number,
Mode: MFiles$MFiles$MFObjectWindowMode,
ObjectCreationInfo: IObjectCreationInfo,
PrefilledPropertyValues: IPropertyValues,
AccessControlList: IAccessControlList): IObjectWindowResult,
ShowRelatedObjects(
ParentWindow: number,
SourceObject: IObjID,
ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing,
ViewSelectionDialogInfoText: string): void,
ShowRelationshipsDialog(ParentWindow: number, ObjectVersion: IObjVer, Modeless: boolean): void,
ShowSelectObjectHistoryDialogModal(ParentWindow: number, ObjectID: IObjID, WindowTitle: string): IObjOrFileVer,
ShowSubObjectsDialogModal(ParentWindow: number, ObjectVersion: IObjVer): void,
UndeleteObject(ObjID: IObjID): IObjectVersion,
UndoCheckout(ObjVer: IObjVer): IObjectVersion,
UndoCheckoutMultipleObjects(ObjVers: IObjVers): IObjectVersions
} 
	declare interface IVaultObjectOperationsAsync {
AddFavorite(
ObjID: IObjID,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
AddFavorites(
ObjIDs: IObjIDs,
successCallback?: (result: IObjectVersionAndPropertiesOfMultipleObjects) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ChangePermissionsToACL(
ObjVer: IObjVer,
AccessControlList: IAccessControlList,
ChangeAllVersions: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ChangePermissionsToNamedACL(
ObjVer: IObjVer,
NamedACL: number,
ChangeAllVersions: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CheckIn(
ObjVer: IObjVer,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CheckInMultipleObjects(
ObjVers: IObjVers,
successCallback?: (result: IObjectVersions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CheckOut(
ObjID: IObjID,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CheckOutMultipleObjects(
ObjIDs: IObjIDs,
successCallback?: (result: IObjectVersions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CreateNewAssignment(
AssignmentName: string,
AssignmentDescription: string,
AssignedToUser: ITypedValue,
Deadline: ITypedValue,
AccessControlList: IAccessControlList,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CreateNewEmptySingleFileDocument(
PropertyValues: IPropertyValues,
Title: string,
Extension: string,
AccessControlList: IAccessControlList,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CreateNewObject(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
PropertyValues: IPropertyValues,
SourceObjectFiles: ISourceObjectFiles,
AccessControlList: IAccessControlList,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CreateNewObjectEx(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Properties: IPropertyValues,
SourceFiles: ISourceObjectFiles,
SFD: boolean,
CheckIn: boolean,
AccessControlList: IAccessControlList,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CreateNewObjectExQuick(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Properties: IPropertyValues,
SourceFiles: ISourceObjectFiles,
SFD: boolean,
CheckIn: boolean,
AccessControlList: IAccessControlList,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CreateNewSFDObject(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Properties: IPropertyValues,
SourceFile: ISourceObjectFile,
CheckIn: boolean,
AccessControlList: IAccessControlList,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CreateNewSFDObjectQuick(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
Properties: IPropertyValues,
SourceFile: ISourceObjectFile,
CheckIn: boolean,
AccessControlList: IAccessControlList,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DelayedCheckIn(
ObjVer: IObjVer,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DeleteObject(
ObjID: IObjID,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DestroyObject(
ObjID: IObjID,
DestroyAllVersions: boolean,
ObjectVersion: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DestroyObjects(
ObjIDs: IObjIDs,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
FollowObject(
ObjID: IObjID,
Follow: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ForceUndoCheckout(
ObjVer: IObjVer,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetCollectionMembers(
ObjVer: IObjVer,
successCallback?: (result: IObjectVersions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetHistory(
ObjID: IObjID,
successCallback?: (result: IObjectVersions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLatestObjectVersionAndProperties(
ObjID: IObjID,
AllowCheckedOut: boolean,
UpdateFromServer: boolean,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLatestObjVer(
ObjID: IObjID,
AllowCheckedOut: boolean,
UpdateFromServer: boolean,
successCallback?: (result: IObjVer) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLatestObjVerEx(
ObjID: IObjID,
AllowCheckedOut: boolean,
UpdateFromServer: boolean,
NotifyViews: boolean,
successCallback?: (result: IObjVer) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetMFilesURLForObject(
ObjID: IObjID,
TargetVersion: number,
SpecificVersion: boolean,
URLType: MFiles$MFiles$MFilesURLType,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetMFilesURLForObjectOrFile(
ObjID: IObjID,
TargetVersion: number,
SpecificVersion: boolean,
File: number,
URLType: MFiles$MFiles$MFilesURLType,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectGUID(
ObjID: IObjID,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectInfo(
ObjVer: IObjVer,
LatestVersion: boolean,
UpdateFromServer: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectInfoEx(
ObjVer: IObjVer,
LatestVersion: boolean,
UpdateFromServer: boolean,
NotifyViews: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectLocationsInView(
View: MFiles$MFiles$MFBuiltInView | number,
LatestSpecificBehavior: MFiles$MFiles$MFLatestSpecificBehavior,
ObjectVersion: IObjVer,
successCallback?: (result: IStrings) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectPermissions(
ObjVer: IObjVer,
successCallback?: (result: IObjectVersionPermissions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectVersionAndProperties(
ObjVer: IObjVer,
UpdateFromServer: boolean,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectVersionAndPropertiesOfMultipleObjects(
ObjVers: IObjVers,
LatestVersions: boolean,
AllowCheckedOut: boolean,
AllowMissingObjectVersions: boolean,
UpdateFromServer: boolean,
successCallback?: (result: IObjectVersionAndPropertiesOfMultipleObjects) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjIDByGUID(
ObjectGUID: string,
successCallback?: (result: IObjID) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjIDByOriginalObjID(
OriginalVaultGUID: string,
OriginalObjID: IObjID,
successCallback?: (result: IObjID) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetOfflineAvailability(
ObjID: IObjID,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetOfflineObjIDs(
successCallback?: (result: IObjIDs) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetRelationships(
ObjVer: IObjVer,
Mode: MFiles$MFiles$MFRelationshipsMode,
successCallback?: (result: IObjectVersions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetThumbnailAsBytes(
ObjVer: IObjVer,
FileVer: IFileVer,
Width: number,
Height: number,
GetFileIconThumbnailIfRealThumbnailNotAvailable: boolean,
successCallback?: (result: $ReadOnlyArray<number>) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsObjectCheckedOut(
ObjID: IObjID,
UpdateFromServer: boolean,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsObjectCheckedOutToThisUserOnThisComputer(
ObjID: IObjID,
UpdateFromServer: boolean,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsObjectFollowed(
ObjID: IObjID,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsSingleFileObject(
ObjVer: IObjVer,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
MatchesSearchConditions(
pIObjVer: IObjVer,
pISearchConditions: ISearchConditions,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
MatchesSearchConditionsEx(
pIObjectVersion: IObjectVersion,
pISearchConditions: ISearchConditions,
pIPropertyValues: IPropertyValues,
pIObjectVersionAndPropertiesOfMultipleObjects: IObjectVersionAndPropertiesOfMultipleObjects,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
NotifyObjectAccess(
ObjID: IObjID,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ProposeCheckOutForFile(
ParentWindow: number,
ObjVersionFile: IObjectFileAndVersion,
CanCancel: boolean,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RejectCheckInReminder(
ObjVer: IObjVer,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveFavorite(
ObjID: IObjID,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveFavorites(
ObjIDs: IObjIDs,
successCallback?: (result: IObjectVersionAndPropertiesOfMultipleObjects) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ResolveConflict(
ParticipantObjID: IObjID,
KeepThis: boolean,
successCallback?: (result: IObjectVersions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
Rollback(
ObjID: IObjID,
RollbackToVersion: number,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetExternalID(
ObjID: IObjID,
ExtID: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetObjectGUID(
ObjID: IObjID,
ObjectGUID: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetOfflineAvailability(
ObjID: IObjID,
AvailableInOfflineMode: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetSingleFileObject(
ObjVer: IObjVer,
SingleFile: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowBasicEditObjectWindow(
ParentWindow: number,
ObjVer: IObjVer,
successCallback?: (result: IObjectWindowResult) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowBasicNewObjectWindow(
ParentWindow: number,
ObjectType: IObjectType,
successCallback?: (result: IObjectWindowResult) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowChangeStateDialogModal(
ParentWindow: number,
ObjectID: IObjID,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowCheckInReminder(
ParentWindow: number,
ObjVer: IObjVer,
Asynchronous: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowCheckInReminderDialogModal(
ParentWindow: number,
ObjVer: IObjVer,
ApplyEnvironmentConditions: boolean,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowCheckoutPrompt(
ParentWindow: number,
Message: string,
ObjID: IObjID,
ShowCancel: boolean,
AutoRejectConsequentPrompts: boolean,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowCollectionMembersDialog(
ParentWindow: number,
ObjectVersion: IObjVer,
Modeless: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowCommentsDialogModal(
ParentWindow: number,
ObjectID: IObjID,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowEditObjectWindow(
ParentWindow: number,
Mode: MFiles$MFiles$MFObjectWindowMode,
ObjVer: IObjVer,
successCallback?: (result: IObjectWindowResult) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowHistoryDialogModal(
ParentWindow: number,
ObjectID: IObjID,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowNewObjectWindow(
ParentWindow: number,
Mode: MFiles$MFiles$MFObjectWindowMode,
ObjectCreationInfo: IObjectCreationInfo,
successCallback?: (result: IObjectWindowResult) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowPrefilledNewObjectWindow(
ParentWindow: number,
Mode: MFiles$MFiles$MFObjectWindowMode,
ObjectCreationInfo: IObjectCreationInfo,
PrefilledPropertyValues: IPropertyValues,
AccessControlList: IAccessControlList,
successCallback?: (result: IObjectWindowResult) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowRelatedObjects(
ParentWindow: number,
SourceObject: IObjID,
ObjectTypeTargetForBrowsing: IObjectTypeTargetForBrowsing,
ViewSelectionDialogInfoText: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowRelationshipsDialog(
ParentWindow: number,
ObjectVersion: IObjVer,
Modeless: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowSelectObjectHistoryDialogModal(
ParentWindow: number,
ObjectID: IObjID,
WindowTitle: string,
successCallback?: (result: IObjOrFileVer) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowSubObjectsDialogModal(
ParentWindow: number,
ObjectVersion: IObjVer,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UndeleteObject(
ObjID: IObjID,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UndoCheckout(
ObjVer: IObjVer,
successCallback?: (result: IObjectVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UndoCheckoutMultipleObjects(
ObjVers: IObjVers,
successCallback?: (result: IObjectVersions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultObjectPropertyOperations {
ApproveOrRejectAssignment(ObjVer: IObjVer, Approve: boolean): IObjectVersionAndProperties,
ApproveOrRejectAssignmentByUser(ObjVer: IObjVer, Approve: boolean, UserID: number): IObjectVersionAndProperties,
CreatePropertiesFromFileInformation(FileInformation: IFileInformation): IPropertyValues,
GenerateAutomaticPermissionsFromPropertyValues(PropertyValues: IPropertyValues): IAccessControlList,
GetProperties(ObjVer: IObjVer, UpdateFromServer: boolean): IPropertyValues,
GetPropertiesAsXML(ObjVer: IObjVer, UpdateFromServer: boolean): string,
GetPropertiesForDisplay(ObjVer: IObjVer, UpdateFromServer: boolean): IPropertyValuesForDisplay,
GetPropertiesForMetadataSync(ObjVer: IObjVer, Format: MFiles$MFiles$MFMetadataSyncFormat): INamedValues,
GetPropertiesOfMultipleObjects(ObjectVersions: IObjVers): IPropertyValuesOfMultipleObjects,
GetPropertiesWithIconClues(ObjVer: IObjVer, UpdateFromServer: boolean): IPropertyValuesWithIconClues,
GetPropertiesWithIconCluesOfMultipleObjects(ObjectVersions: IObjVers): IPropertyValuesWithIconCluesOfMultipleObjects,
GetProperty(ObjVer: IObjVer, Property: number): IPropertyValue,
GetVersionComment(ObjVer: IObjVer): IVersionComment,
GetVersionCommentHistory(ObjVer: IObjVer): IVersionComments,
GetWorkflowState(ObjVer: IObjVer, UpdateFromServer: boolean): IObjectVersionWorkflowState,
MarkAssignmentComplete(ObjVer: IObjVer): IObjectVersionAndProperties,
MarkAssignmentCompleteByUser(ObjVer: IObjVer, UserID: number): IObjectVersionAndProperties,
RemoveProperty(ObjVer: IObjVer, Property: number): IObjectVersionAndProperties,
SetAllProperties(
ObjVer: IObjVer,
AllowModifyingCheckedInObject: boolean,
PropertyValues: IPropertyValues): IObjectVersionAndProperties,
SetAllPropertiesWithPermissions(
ObjVer: IObjVer,
AllowModifyingCheckedInObject: boolean,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
ACLProvided: IAccessControlList): IObjectVersionAndProperties,
SetAllPropertiesWithPermissionsEx(
ObjVer: IObjVer,
AllowModifyingCheckedInObject: boolean,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
ACLProvided: IAccessControlList,
ElectronicSignature: any): IObjectVersionAndProperties,
SetCreationInfoAdmin(
ObjVer: IObjVer,
UpdateCreatedBy: boolean,
CreatedBy: ITypedValue,
UpdateCreated: boolean,
CreatedUtc: ITypedValue): IObjectVersionAndProperties,
SetLastModificationInfoAdmin(
ObjVer: IObjVer,
UpdateLastModifiedBy: boolean,
LastModifiedBy: ITypedValue,
UpdateLastModified: boolean,
LastModifiedUtc: ITypedValue): IObjectVersionAndProperties,
SetProperties(ObjVer: IObjVer, PropertyValues: IPropertyValues): IObjectVersionAndProperties,
SetPropertiesOfMultipleObjects(
SetPropertiesParamsOfObjects: ISetPropertiesParamsOfMultipleObjects): IObjectVersionAndPropertiesOfMultipleObjects,
SetPropertiesWithPermissions(
ObjVer: IObjVer,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
ACLProvided: IAccessControlList): IObjectVersionAndProperties,
SetPropertiesWithPermissionsEx(
ObjVer: IObjVer,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
ACLProvided: IAccessControlList,
ElectronicSignature: any): IObjectVersionAndProperties,
SetProperty(ObjVer: IObjVer, PropertyValue: IPropertyValue): IObjectVersionAndProperties,
SetVersionComment(ObjVer: IObjVer, VersionComment: IPropertyValue): IObjectVersionAndProperties,
SetWorkflowState(
ObjVer: IObjVer,
WorkflowState: IObjectVersionWorkflowState): IObjectVersionAndProperties,
SetWorkflowStateEx(
ObjVer: IObjVer,
WorkflowState: IObjectVersionWorkflowState,
ElectronicSignature: any): IObjectVersionAndProperties,
SetWorkflowStateTransition(
ObjVer: IObjVer,
Workflow: number,
lStateTransition: number,
lVersionComment: string): IObjectVersionAndProperties,
SetWorkflowStateTransitionEx(
ObjVer: IObjVer,
Workflow: number,
StateTransition: number,
VersionComment: string,
ElectronicSignature: any): IObjectVersionAndProperties
} 
	declare interface IVaultObjectPropertyOperationsAsync {
ApproveOrRejectAssignment(
ObjVer: IObjVer,
Approve: boolean,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ApproveOrRejectAssignmentByUser(
ObjVer: IObjVer,
Approve: boolean,
UserID: number,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CreatePropertiesFromFileInformation(
FileInformation: IFileInformation,
successCallback?: (result: IPropertyValues) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GenerateAutomaticPermissionsFromPropertyValues(
PropertyValues: IPropertyValues,
successCallback?: (result: IAccessControlList) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetProperties(
ObjVer: IObjVer,
UpdateFromServer: boolean,
successCallback?: (result: IPropertyValues) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertiesAsXML(
ObjVer: IObjVer,
UpdateFromServer: boolean,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertiesForDisplay(
ObjVer: IObjVer,
UpdateFromServer: boolean,
successCallback?: (result: IPropertyValuesForDisplay) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertiesForMetadataSync(
ObjVer: IObjVer,
Format: MFiles$MFiles$MFMetadataSyncFormat,
successCallback?: (result: INamedValues) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertiesOfMultipleObjects(
ObjectVersions: IObjVers,
successCallback?: (result: IPropertyValuesOfMultipleObjects) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertiesWithIconClues(
ObjVer: IObjVer,
UpdateFromServer: boolean,
successCallback?: (result: IPropertyValuesWithIconClues) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertiesWithIconCluesOfMultipleObjects(
ObjectVersions: IObjVers,
successCallback?: (result: IPropertyValuesWithIconCluesOfMultipleObjects) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetProperty(
ObjVer: IObjVer,
Property: number,
successCallback?: (result: IPropertyValue) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetVersionComment(
ObjVer: IObjVer,
successCallback?: (result: IVersionComment) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetVersionCommentHistory(
ObjVer: IObjVer,
successCallback?: (result: IVersionComments) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowState(
ObjVer: IObjVer,
UpdateFromServer: boolean,
successCallback?: (result: IObjectVersionWorkflowState) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
MarkAssignmentComplete(
ObjVer: IObjVer,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
MarkAssignmentCompleteByUser(
ObjVer: IObjVer,
UserID: number,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveProperty(
ObjVer: IObjVer,
Property: number,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetAllProperties(
ObjVer: IObjVer,
AllowModifyingCheckedInObject: boolean,
PropertyValues: IPropertyValues,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetAllPropertiesWithPermissions(
ObjVer: IObjVer,
AllowModifyingCheckedInObject: boolean,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
ACLProvided: IAccessControlList,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetAllPropertiesWithPermissionsEx(
ObjVer: IObjVer,
AllowModifyingCheckedInObject: boolean,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
ACLProvided: IAccessControlList,
ElectronicSignature: any,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetCreationInfoAdmin(
ObjVer: IObjVer,
UpdateCreatedBy: boolean,
CreatedBy: ITypedValue,
UpdateCreated: boolean,
CreatedUtc: ITypedValue,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetLastModificationInfoAdmin(
ObjVer: IObjVer,
UpdateLastModifiedBy: boolean,
LastModifiedBy: ITypedValue,
UpdateLastModified: boolean,
LastModifiedUtc: ITypedValue,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetProperties(
ObjVer: IObjVer,
PropertyValues: IPropertyValues,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetPropertiesOfMultipleObjects(
SetPropertiesParamsOfObjects: ISetPropertiesParamsOfMultipleObjects,
successCallback?: (result: IObjectVersionAndPropertiesOfMultipleObjects) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetPropertiesWithPermissions(
ObjVer: IObjVer,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
ACLProvided: IAccessControlList,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetPropertiesWithPermissionsEx(
ObjVer: IObjVer,
PropertyValues: IPropertyValues,
ACLEnforcingMode: MFiles$MFiles$MFACLEnforcingMode,
ACLProvided: IAccessControlList,
ElectronicSignature: any,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetProperty(
ObjVer: IObjVer,
PropertyValue: IPropertyValue,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetVersionComment(
ObjVer: IObjVer,
VersionComment: IPropertyValue,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetWorkflowState(
ObjVer: IObjVer,
WorkflowState: IObjectVersionWorkflowState,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetWorkflowStateEx(
ObjVer: IObjVer,
WorkflowState: IObjectVersionWorkflowState,
ElectronicSignature: any,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetWorkflowStateTransition(
ObjVer: IObjVer,
Workflow: number,
lStateTransition: number,
lVersionComment: string,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetWorkflowStateTransitionEx(
ObjVer: IObjVer,
Workflow: number,
StateTransition: number,
VersionComment: string,
ElectronicSignature: any,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultObjectSearchOperations {
FindFile(RelativePath: string, UpdateFromServer: boolean): IObjectFileAndVersion,
FindObjectVersionAndProperties(RelativePath: string, UpdateFromServer: boolean): IObjectVersionAndProperties,
GetFacetValues(
SearchConditions: ISearchConditions,
Facets: IExpressions,
FacetValuesMaxCount: number,
Flags: MFiles$MFiles$MFFacetSearchFlags): IStringData,
GetFacetValuesByPath(
RelativePath: string,
Facets: IExpressions,
FacetValuesMaxCount: number,
Flags: MFiles$MFiles$MFFacetSearchFlags): IStringData,
GetObjectCountInSearch(
SearchConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags): number,
GetObjectsInPath(
RelativePath: string,
SortResults: boolean,
UpdateFromServer: boolean): IObjectSearchResults,
GetSearchHits(Input: string, SearchCondition: ISearchCondition): IStrings,
IsObjectPathInMFiles(RelativePath: string): boolean,
SearchForObjectsByCondition(SearchCondition: ISearchCondition, SortResults: boolean): IObjectSearchResults,
SearchForObjectsByConditions(
SearchConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags,
SortResults: boolean): IObjectSearchResults,
SearchForObjectsByConditionsEx(
SearchConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags,
SortResults: boolean,
MaxResultCount: number,
SearchTimeoutInSeconds: number): IObjectSearchResults,
SearchForObjectsByConditionsXML(SearchConditions: ISearchConditions, SortResults: boolean): IXMLSearchResult,
SearchForObjectsByExportedSearchConditions(ExportedSearchString: string, SortResults: boolean): IObjectSearchResults,
SearchForObjectsByExportedSearchConditionsXML(SearchString: string, SortResults: boolean): IXMLSearchResult,
SearchForObjectsByString(
SearchString: string,
SortResults: boolean,
FullTextSearchFlags: MFiles$MFiles$MFFullTextSearchFlags): IObjectSearchResults
} 
	declare interface IVaultObjectSearchOperationsAsync {
FindFile(
RelativePath: string,
UpdateFromServer: boolean,
successCallback?: (result: IObjectFileAndVersion) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
FindObjectVersionAndProperties(
RelativePath: string,
UpdateFromServer: boolean,
successCallback?: (result: IObjectVersionAndProperties) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFacetValues(
SearchConditions: ISearchConditions,
Facets: IExpressions,
FacetValuesMaxCount: number,
Flags: MFiles$MFiles$MFFacetSearchFlags,
successCallback?: (result: IStringData) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFacetValuesByPath(
RelativePath: string,
Facets: IExpressions,
FacetValuesMaxCount: number,
Flags: MFiles$MFiles$MFFacetSearchFlags,
successCallback?: (result: IStringData) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectCountInSearch(
SearchConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectsInPath(
RelativePath: string,
SortResults: boolean,
UpdateFromServer: boolean,
successCallback?: (result: IObjectSearchResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetSearchHits(
Input: string,
SearchCondition: ISearchCondition,
successCallback?: (result: IStrings) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
IsObjectPathInMFiles(
RelativePath: string,
successCallback?: (result: boolean) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForObjectsByCondition(
SearchCondition: ISearchCondition,
SortResults: boolean,
successCallback?: (result: IObjectSearchResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForObjectsByConditions(
SearchConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags,
SortResults: boolean,
successCallback?: (result: IObjectSearchResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForObjectsByConditionsEx(
SearchConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags,
SortResults: boolean,
MaxResultCount: number,
SearchTimeoutInSeconds: number,
successCallback?: (result: IObjectSearchResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForObjectsByConditionsXML(
SearchConditions: ISearchConditions,
SortResults: boolean,
successCallback?: (result: IXMLSearchResult) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForObjectsByExportedSearchConditions(
ExportedSearchString: string,
SortResults: boolean,
successCallback?: (result: IObjectSearchResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForObjectsByExportedSearchConditionsXML(
SearchString: string,
SortResults: boolean,
successCallback?: (result: IXMLSearchResult) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForObjectsByString(
SearchString: string,
SortResults: boolean,
FullTextSearchFlags: MFiles$MFiles$MFFullTextSearchFlags,
successCallback?: (result: IObjectSearchResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultObjectTypeOperations {
AddObjectTypeAdmin(ObjectType: IObjectTypeAdmin): IObjectTypeAdmin,
GetBuiltInObjectType(ObjectType: MFiles$MFiles$MFBuiltInObjectType): IObjectType,
GetObjectType(ObjectType: MFiles$MFiles$MFBuiltInObjectType | number): IObjectType,
GetObjectTypeAdmin(ObjectType: MFiles$MFiles$MFBuiltInObjectType | number): IObjectTypeAdmin,
GetObjectTypeIDByAlias(Alias: string): number,
GetObjectTypeIDByGUID(ObjectTypeGUID: string): number,
GetObjectTypes(): IObjectTypes,
GetObjectTypesAdmin(): IObjectTypesAdmin,
RefreshExternalObjectType(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
RefreshType: MFiles$MFiles$MFExternalDBRefreshType): void,
RemoveObjectTypeAdmin(ObjectTypeID: number): void,
UpdateObjectTypeAdmin(ObjectType: IObjectTypeAdmin): IObjectTypeAdmin,
UpdateObjectTypeWithAutomaticPermissionsAdmin(
ObjectType: IObjectTypeAdmin,
AutomaticPermissionsForcedActive: boolean): IObjectTypeAdmin
} 
	declare interface IVaultObjectTypeOperationsAsync {
AddObjectTypeAdmin(
ObjectType: IObjectTypeAdmin,
successCallback?: (result: IObjectTypeAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetBuiltInObjectType(
ObjectType: MFiles$MFiles$MFBuiltInObjectType,
successCallback?: (result: IObjectType) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectType(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
successCallback?: (result: IObjectType) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectTypeAdmin(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
successCallback?: (result: IObjectTypeAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectTypeIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectTypeIDByGUID(
ObjectTypeGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectTypes(
successCallback?: (result: IObjectTypes) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetObjectTypesAdmin(
successCallback?: (result: IObjectTypesAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RefreshExternalObjectType(
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
RefreshType: MFiles$MFiles$MFExternalDBRefreshType,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveObjectTypeAdmin(
ObjectTypeID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateObjectTypeAdmin(
ObjectType: IObjectTypeAdmin,
successCallback?: (result: IObjectTypeAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateObjectTypeWithAutomaticPermissionsAdmin(
ObjectType: IObjectTypeAdmin,
AutomaticPermissionsForcedActive: boolean,
successCallback?: (result: IObjectTypeAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultOnServer {
+GUID: string,
+Name: string,
LogIn(): IVault,
LogInAsUser(
AuthType: MFiles$MFiles$MFAuthType,
UserName: string | null,
Password: string | null,
Domain: string | null,
TimeZone: ITimeZoneInformation): IVault,
LogInAsUserWithAuthenticationData(
PluginInfo: IPluginInfo,
AuthenticationData: INamedValues,
AttemptIdentifier: string,
TimeZone: ITimeZoneInformation): IAuthenticationResult,
LogInAsUserWithSPN(
AuthType: MFiles$MFiles$MFAuthType,
UserName: string | null,
Password: string | null,
Domain: string | null,
SPN: string | null,
TimeZone: ITimeZoneInformation): IVault
} 
	declare interface IVaultProperties {
DisplayName: string,
EncryptionOfFileDataAtRest: boolean,
ExtendedMetadataDrivenPermissions: boolean,
FileDataConnectionString: string,
FileDataStorageType: MFiles$MFiles$MFFileDataStorage,
FullTextSearchLanguage: string,
Icon: $ReadOnlyArray<number>,
MainDataFolder: string,
SeparateLocationForFileData: IAdditionalFolders,
SQLDatabase: ISQLDatabase,
VaultGUID: string,
Clone(): IVaultProperties
} 
	declare interface IVaultPropertyDefOperations {
AddPropertyDefAdmin(
PropertyDefAdmin: IPropertyDefAdmin,
ResetLastUsedValue: ITypedValue): IPropertyDefAdmin,
GetBuiltInPropertyDef(PropertyDefType: MFiles$MFiles$MFBuiltInPropertyDef): IPropertyDef,
GetPropertyDef(PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number): IPropertyDef,
GetPropertyDefAdmin(PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number): IPropertyDefAdmin,
GetPropertyDefIDByAlias(Alias: string): number,
GetPropertyDefIDByGUID(PropertyDefGUID: string): number,
GetPropertyDefs(): IPropertyDefs,
GetPropertyDefsAdmin(): IPropertyDefsAdmin,
Recalculate(
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
RecalculateCurrentlyEmptyValuesOnly: boolean): void,
RemovePropertyDefAdmin(
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
CopyToAnotherPropertyDef: boolean,
TargetPropertyDef: number,
Append: boolean,
DeleteFromClassesIfNecessary: boolean): void,
UpdatePropertyDefAdmin(PropertyDefAdmin: IPropertyDefAdmin, ResetLastUsedValue: ITypedValue): void,
UpdatePropertyDefWithAutomaticPermissionsAdmin(
PropertyDefAdmin: IPropertyDefAdmin,
ResetLastUsedValue: ITypedValue,
AutomaticPermissionsForcedActive: boolean): void
} 
	declare interface IVaultPropertyDefOperationsAsync {
AddPropertyDefAdmin(
PropertyDefAdmin: IPropertyDefAdmin,
ResetLastUsedValue: ITypedValue,
successCallback?: (result: IPropertyDefAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetBuiltInPropertyDef(
PropertyDefType: MFiles$MFiles$MFBuiltInPropertyDef,
successCallback?: (result: IPropertyDef) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertyDef(
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
successCallback?: (result: IPropertyDef) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertyDefAdmin(
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
successCallback?: (result: IPropertyDefAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertyDefIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertyDefIDByGUID(
PropertyDefGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertyDefs(
successCallback?: (result: IPropertyDefs) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertyDefsAdmin(
successCallback?: (result: IPropertyDefsAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
Recalculate(
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
RecalculateCurrentlyEmptyValuesOnly: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemovePropertyDefAdmin(
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
CopyToAnotherPropertyDef: boolean,
TargetPropertyDef: number,
Append: boolean,
DeleteFromClassesIfNecessary: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdatePropertyDefAdmin(
PropertyDefAdmin: IPropertyDefAdmin,
ResetLastUsedValue: ITypedValue,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdatePropertyDefWithAutomaticPermissionsAdmin(
PropertyDefAdmin: IPropertyDefAdmin,
ResetLastUsedValue: ITypedValue,
AutomaticPermissionsForcedActive: boolean,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultScheduledJobManagementOperations {
AddScheduledJob(ScheduledJob: IScheduledJob): number,
CancelScheduledJob(ID: number): void,
GetScheduledJob(ID: number): IScheduledJob,
GetScheduledJobRunInfo(ID: number): IScheduledJobRunInfo,
GetScheduledJobs(): IScheduledJobs,
ModifyScheduledJob(ScheduledJob: IScheduledJob): void,
RemoveScheduledJob(ID: number): void,
StartScheduledJob(ID: number): void
} 
	declare interface IVaultScheduledJobManagementOperationsAsync {
AddScheduledJob(
ScheduledJob: IScheduledJob,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
CancelScheduledJob(
ID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetScheduledJob(
ID: number,
successCallback?: (result: IScheduledJob) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetScheduledJobRunInfo(
ID: number,
successCallback?: (result: IScheduledJobRunInfo) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetScheduledJobs(
successCallback?: (result: IScheduledJobs) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ModifyScheduledJob(
ScheduledJob: IScheduledJob,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveScheduledJob(
ID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
StartScheduledJob(
ID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultServerDataPushOperations {
CloneVaultForServerDataPush(ServerDataPushSink: IServerDataPushSink): IVault,
SendCancel(RequestID: number): void,
SendError(RequestID: number, Error: string): void,
SendHeartbeat(RequestID: number): void,
SendResponse(RequestID: number, JsonResponseContent: string): void,
SetServerDataPushSink(ServerDataPushSink: IServerDataPushSink): void
} 
	declare interface IVaultServerDataPushOperationsAsync {
CloneVaultForServerDataPush(
ServerDataPushSink: IServerDataPushSink,
successCallback?: (result: IVault) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SendCancel(
RequestID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SendError(
RequestID: number,
Error: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SendHeartbeat(
RequestID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SendResponse(
RequestID: number,
JsonResponseContent: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetServerDataPushSink(
ServerDataPushSink: IServerDataPushSink,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultSharedLinkOperations {
CreateSharedLink(SharedLinkCreationInfo: ISharedLinkInfo): ISharedLinkInfo,
DeleteSharedLink(AccessKey: string): void,
GetSharedLink(AccessKey: string): ISharedLinkInfo,
GetSharedLinks(CreatedByUser: number): ISharedLinkInfos,
GetSharedLinksByObject(ObjID: IObjID): ISharedLinkInfos
} 
	declare interface IVaultSharedLinkOperationsAsync {
CreateSharedLink(
SharedLinkCreationInfo: ISharedLinkInfo,
successCallback?: (result: ISharedLinkInfo) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
DeleteSharedLink(
AccessKey: string,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetSharedLink(
AccessKey: string,
successCallback?: (result: ISharedLinkInfo) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetSharedLinks(
CreatedByUser: number,
successCallback?: (result: ISharedLinkInfos) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetSharedLinksByObject(
ObjID: IObjID,
successCallback?: (result: ISharedLinkInfos) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultsOnServer {
+Count: number,
GetVaultByGUID(GUID: string): IVaultOnServer,
GetVaultByName(Name: string): IVaultOnServer,
GetVaultIndexByGUID(GUID: string): number,
GetVaultIndexByName(Name: string): number,
Item(Index: number): IVaultOnServer
} 
	declare interface IVaultTraditionalFolderOperations {
GetTraditionalFolderContents(Folder: number): ITraditionalFolderContents
} 
	declare interface IVaultTraditionalFolderOperationsAsync {
GetTraditionalFolderContents(
Folder: number,
successCallback?: (result: ITraditionalFolderContents) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultUI {
+Events: IVaultUIEvents,
+Vault: IVault,
+VaultEntry: IVaultEntry,
ShowMessage(message: string | IMessage): number,
ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: any): void
} 
	declare type IVaultUIEvents = {
OnNewVaultEntry(vaultEntry: IVaultEntry): void | IVaultEntryEvents,
OnStarted(): void,
OnStop(): void
} & IEvents

	declare interface IVaultUserGroupOperations {
AddOrUndeleteUserGroup(UserGroup: IUserGroupAdmin): IUserGroupAdmin,
AddUserGroupAdmin(UserGroup: IUserGroupAdmin): IUserGroupAdmin,
GetGroupsOfUserOrGroup(UserOrGroupID: number, IsGroup: boolean): IUserGroups,
GetUserGroup(UserGroupID: MFiles$MFiles$MFBuiltInUserGroup | number): IUserGroup,
GetUserGroupAdmin(UserGroupID: MFiles$MFiles$MFBuiltInUserGroup | number): IUserGroupAdmin,
GetUserGroupIDByAlias(Alias: string): number,
GetUserGroupIDByGUID(UserGroupGUID: string): number,
GetUserGroupList(): IKeyNamePairs,
GetUserGroups(): IUserGroups,
GetUserGroupsAdmin(): IUserGroupsAdmin,
RemoveUserGroupAdmin(UserGroupID: MFiles$MFiles$MFBuiltInUserGroup | number): void,
UpdateUserGroupAdmin(UserGroup: IUserGroupAdmin): void
} 
	declare interface IVaultUserGroupOperationsAsync {
AddOrUndeleteUserGroup(
UserGroup: IUserGroupAdmin,
successCallback?: (result: IUserGroupAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
AddUserGroupAdmin(
UserGroup: IUserGroupAdmin,
successCallback?: (result: IUserGroupAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetGroupsOfUserOrGroup(
UserOrGroupID: number,
IsGroup: boolean,
successCallback?: (result: IUserGroups) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserGroup(
UserGroupID: MFiles$MFiles$MFBuiltInUserGroup | number,
successCallback?: (result: IUserGroup) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserGroupAdmin(
UserGroupID: MFiles$MFiles$MFBuiltInUserGroup | number,
successCallback?: (result: IUserGroupAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserGroupIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserGroupIDByGUID(
UserGroupGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserGroupList(
successCallback?: (result: IKeyNamePairs) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserGroups(
successCallback?: (result: IUserGroups) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserGroupsAdmin(
successCallback?: (result: IUserGroupsAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveUserGroupAdmin(
UserGroupID: MFiles$MFiles$MFBuiltInUserGroup | number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateUserGroupAdmin(
UserGroup: IUserGroupAdmin,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultUserOperations {
AddOrUndeleteUserAccount(User: IUserAccount): IUserAccount,
AddUserAccount(User: IUserAccount): IUserAccount,
GetLoginAccountOfUser(UserID: number): ILoginAccount,
GetLoginAccounts(): ILoginAccounts,
GetUserAccount(UserID: number): IUserAccount,
GetUserAccounts(): IUserAccounts,
GetUserIDByGUID(UserGUID: string): number,
GetUserList(): IKeyNamePairs,
ModifyUserAccount(User: IUserAccount): void,
RemoveUserAccount(UserID: number): void
} 
	declare interface IVaultUserOperationsAsync {
AddOrUndeleteUserAccount(
User: IUserAccount,
successCallback?: (result: IUserAccount) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
AddUserAccount(
User: IUserAccount,
successCallback?: (result: IUserAccount) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLoginAccountOfUser(
UserID: number,
successCallback?: (result: ILoginAccount) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetLoginAccounts(
successCallback?: (result: ILoginAccounts) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserAccount(
UserID: number,
successCallback?: (result: IUserAccount) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserAccounts(
successCallback?: (result: IUserAccounts) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserIDByGUID(
UserGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetUserList(
successCallback?: (result: IKeyNamePairs) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ModifyUserAccount(
User: IUserAccount,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveUserAccount(
UserID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultUserSettingOperations {
ChangeVaultLanguage(Language: number): void,
GetSubstituteUsers(): IUserOrUserGroupIDs,
GetVaultLanguage(): number,
GetVaultLanguageCode(): string,
SetSubstituteUsers(UserOrUserGroupIDs: IUserOrUserGroupIDs): void
} 
	declare interface IVaultUserSettingOperationsAsync {
ChangeVaultLanguage(
Language: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetSubstituteUsers(
successCallback?: (result: IUserOrUserGroupIDs) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetVaultLanguage(
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetVaultLanguageCode(
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SetSubstituteUsers(
UserOrUserGroupIDs: IUserOrUserGroupIDs,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultValueListItemOperations {
AddValueListItem(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItem: IValueListItem,
AdministrativeOperation: boolean): IValueListItem,
ChangeAutomaticPermissionsToACL(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
AccessControlList: IAccessControlList,
NameForAutomaticPermissions: string,
CanDeactivate: boolean,
AutomaticPermissionsOperationOptions: MFiles$MFiles$MFAutomaticPermissionsOperationOptions): void,
ChangeAutomaticPermissionsToItemsOwnPermissions(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
CanDeactivate: boolean,
AutomaticPermissionsOperationOptions: MFiles$MFiles$MFAutomaticPermissionsOperationOptions): void,
ChangeAutomaticPermissionsToNamedACL(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
NamedACL: number,
CanDeactivate: boolean,
AutomaticPermissionsOperationOptions: MFiles$MFiles$MFAutomaticPermissionsOperationOptions): void,
ChangePermissionsToACL(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
AccessControlList: IAccessControlList): void,
ChangePermissionsToNamedACL(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
NamedACL: number): void,
ClearAutomaticPermissions(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number): void,
GetValueListItemByDisplayID(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemDisplayID: string): IValueListItem,
GetValueListItemByDisplayIDEx(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemDisplayID: string,
ReplaceCurrentUserWithCallersIdentity: boolean): IValueListItem,
GetValueListItemByGUID(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ItemGUID: string,
AllowDeletedItems: boolean,
ReplaceCurrentUserWithCallersIdentity: boolean): IValueListItem,
GetValueListItemByID(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number): IValueListItem,
GetValueListItemByIDEx(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
ReplaceCurrentUserWithCallersIdentity: boolean): IValueListItem,
GetValueListItemIDByGUID(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ItemGUID: string,
AllowDeletedItems: boolean): number,
GetValueListItems(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType): IValueListItems,
GetValueListItemsEx(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean): IValueListItems,
GetValueListItemsEx2(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number): IValueListItems,
GetValueListItemsWithPermissions(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number): IValueListItemsWithPermissions,
RemoveValueListItem(ValueList: MFiles$MFiles$MFBuiltInValueList | number, Item: number): void,
SearchForValueListItemsEx(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
SearchConditions: ISearchConditions,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean): IValueListItemSearchResults,
SearchForValueListItemsEx2(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
SearchConditions: ISearchConditions,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
MaxResults: number): IValueListItemSearchResults,
SearchForValueListItemsWithPermissions(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
SearchConditions: ISearchConditions,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
MaxResults: number): IValueListItemSearchResultsWithPermissions,
UndeleteValueListItem(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number): void,
UpdateValueListItem(ValueListItem: IValueListItem): void
} 
	declare interface IVaultValueListItemOperationsAsync {
AddValueListItem(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItem: IValueListItem,
AdministrativeOperation: boolean,
successCallback?: (result: IValueListItem) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ChangeAutomaticPermissionsToACL(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
AccessControlList: IAccessControlList,
NameForAutomaticPermissions: string,
CanDeactivate: boolean,
AutomaticPermissionsOperationOptions: MFiles$MFiles$MFAutomaticPermissionsOperationOptions,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ChangeAutomaticPermissionsToItemsOwnPermissions(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
CanDeactivate: boolean,
AutomaticPermissionsOperationOptions: MFiles$MFiles$MFAutomaticPermissionsOperationOptions,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ChangeAutomaticPermissionsToNamedACL(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
NamedACL: number,
CanDeactivate: boolean,
AutomaticPermissionsOperationOptions: MFiles$MFiles$MFAutomaticPermissionsOperationOptions,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ChangePermissionsToACL(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
AccessControlList: IAccessControlList,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ChangePermissionsToNamedACL(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
NamedACL: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ClearAutomaticPermissions(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemByDisplayID(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemDisplayID: string,
successCallback?: (result: IValueListItem) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemByDisplayIDEx(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemDisplayID: string,
ReplaceCurrentUserWithCallersIdentity: boolean,
successCallback?: (result: IValueListItem) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemByGUID(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ItemGUID: string,
AllowDeletedItems: boolean,
ReplaceCurrentUserWithCallersIdentity: boolean,
successCallback?: (result: IValueListItem) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemByID(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
successCallback?: (result: IValueListItem) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemByIDEx(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
ReplaceCurrentUserWithCallersIdentity: boolean,
successCallback?: (result: IValueListItem) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemIDByGUID(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ItemGUID: string,
AllowDeletedItems: boolean,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItems(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
successCallback?: (result: IValueListItems) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemsEx(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
successCallback?: (result: IValueListItems) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemsEx2(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
successCallback?: (result: IValueListItems) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListItemsWithPermissions(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
successCallback?: (result: IValueListItemsWithPermissions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveValueListItem(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
Item: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForValueListItemsEx(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
SearchConditions: ISearchConditions,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
successCallback?: (result: IValueListItemSearchResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForValueListItemsEx2(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
SearchConditions: ISearchConditions,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
MaxResults: number,
successCallback?: (result: IValueListItemSearchResults) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SearchForValueListItemsWithPermissions(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
SearchConditions: ISearchConditions,
UpdateFromServer: boolean,
RefreshTypeIfExternalValueList: MFiles$MFiles$MFExternalDBRefreshType,
ReplaceCurrentUserWithCallersIdentity: boolean,
PropertyDef: MFiles$MFiles$MFBuiltInPropertyDef | number,
MaxResults: number,
successCallback?: (result: IValueListItemSearchResultsWithPermissions) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UndeleteValueListItem(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
ValueListItemID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateValueListItem(
ValueListItem: IValueListItem,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultValueListOperations {
AddValueListAdmin(ValueList: IObjectTypeAdmin): IObjectTypeAdmin,
GetBuiltInValueList(BuiltInValueList: MFiles$MFiles$MFBuiltInValueList): IObjectType,
GetValueList(ValueList: MFiles$MFiles$MFBuiltInValueList | number): IObjectType,
GetValueListAdmin(ValueListID: MFiles$MFiles$MFBuiltInValueList | number): IObjectTypeAdmin,
GetValueListIDByAlias(Alias: string): number,
GetValueListIDByGUID(ValueListGUID: string): number,
GetValueLists(): IObjectTypes,
GetValueListsAdmin(): IObjectTypesAdmin,
RefreshExternalValueList(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
RefreshType: MFiles$MFiles$MFExternalDBRefreshType): void,
RemoveValueListAdmin(ValueListID: MFiles$MFiles$MFBuiltInValueList | number): void,
UpdateValueListAdmin(ValueList: IObjectTypeAdmin): IObjectTypeAdmin,
UpdateValueListWithAutomaticPermissionsAdmin(
ObjectType: IObjectTypeAdmin,
AutomaticPermissionsForcedActive: boolean): IObjectTypeAdmin
} 
	declare interface IVaultValueListOperationsAsync {
AddValueListAdmin(
ValueList: IObjectTypeAdmin,
successCallback?: (result: IObjectTypeAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetBuiltInValueList(
BuiltInValueList: MFiles$MFiles$MFBuiltInValueList,
successCallback?: (result: IObjectType) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueList(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
successCallback?: (result: IObjectType) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListAdmin(
ValueListID: MFiles$MFiles$MFBuiltInValueList | number,
successCallback?: (result: IObjectTypeAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListIDByGUID(
ValueListGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueLists(
successCallback?: (result: IObjectTypes) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetValueListsAdmin(
successCallback?: (result: IObjectTypesAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RefreshExternalValueList(
ValueList: MFiles$MFiles$MFBuiltInValueList | number,
RefreshType: MFiles$MFiles$MFExternalDBRefreshType,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveValueListAdmin(
ValueListID: MFiles$MFiles$MFBuiltInValueList | number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateValueListAdmin(
ValueList: IObjectTypeAdmin,
successCallback?: (result: IObjectTypeAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateValueListWithAutomaticPermissionsAdmin(
ObjectType: IObjectTypeAdmin,
AutomaticPermissionsForcedActive: boolean,
successCallback?: (result: IObjectTypeAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultViewOperations {
AddOfflineFilter(OfflineFilter: IView): IView,
AddTemporarySearchView(
View: IView,
SearchCriteria: ISearchCriteria,
BaseSearchConditions: ISearchConditions): IView,
AddView(View: IView): IView,
FindPropertyFolderLocationInView(
View: MFiles$MFiles$MFBuiltInView | number,
PropertyFolders: ITypedValues): string,
GetBuiltInView(BuiltInView: MFiles$MFiles$MFBuiltInView): IView,
GetFolderContents(FolderLocation: IFolderDefs): IFolderContentItems,
GetFolderNameListing(
ExpressionEx: IExpressionEx,
SearchConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags,
SortResults: boolean): IFolderNameListing,
GetFolderUIStateForFolder(
CommonState: boolean,
FolderLocation: IFolderDefs,
ObjectFolder: boolean): IFolderUIState,
GetFolderUIStateForSpecialLocation(
CommonState: boolean,
LocationType: MFiles$MFiles$MFFolderUIStateLocationType): IFolderUIState,
GetMFilesURLForView(
ViewID: MFiles$MFiles$MFBuiltInView | number,
PropertyFolders: ITypedValues,
SimpleURL: boolean): string,
GetPropertyValuesOfFolder(
FolderLocation: IFolderDefs,
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number): IPropertyValues,
GetPropertyValuesOfPath(
Path: string,
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number): IPropertyValues,
GetTemporarySearchByPath(RelativePath: string): ITemporarySearchView,
GetTemporarySearchView(ViewID: MFiles$MFiles$MFBuiltInView | number): ITemporarySearchView,
GetView(View: MFiles$MFiles$MFBuiltInView | number): IView,
GetViewIDByGUID(ViewGUID: string): number,
GetViewLocationInClient(
View: MFiles$MFiles$MFBuiltInView | number,
IncludeViewNameInPath: boolean): string,
GetViews(
ViewCategory: MFiles$MFiles$MFViewCategory,
AllViews: boolean,
ParentView: number): IViews,
GetViewsAdmin(IncludeCommonViews: boolean, UserID: number): IViews,
ModifyTemporarySearch(TemporarySearchView: ITemporarySearchView): void,
RemoveView(View: MFiles$MFiles$MFBuiltInView | number): void,
ResetFolderUIStateForFolder(
ResetToProgramDefaults: boolean,
ResetToCommonDefaults: boolean,
FolderLocation: IFolderDefs,
ObjectFolder: boolean): IFolderUIState,
ResetFolderUIStateForSpecialLocation(
ResetToProgramDefaults: boolean,
ResetToCommonDefaults: boolean,
LocationType: MFiles$MFiles$MFFolderUIStateLocationType): IFolderUIState,
SaveFolderUIStateForFolder(
SaveAsCommonSettings: boolean,
ResetCommonSettingsToAllUsers: boolean,
FolderLocation: IFolderDefs,
ObjectFolder: boolean,
State: IFolderUIState): void,
SaveFolderUIStateForSpecialLocation(
SaveAsCommonSettings: boolean,
ResetCommonSettingsToAllUsers: boolean,
LocationType: MFiles$MFiles$MFFolderUIStateLocationType,
State: IFolderUIState): void,
ShowViewOrPropertyFolder(
ParentWindow: number,
View: MFiles$MFiles$MFBuiltInView | number,
PropertyFolders: ITypedValues): void,
UpdateView(View: IView): IView
} 
	declare interface IVaultViewOperationsAsync {
AddOfflineFilter(
OfflineFilter: IView,
successCallback?: (result: IView) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
AddTemporarySearchView(
View: IView,
SearchCriteria: ISearchCriteria,
BaseSearchConditions: ISearchConditions,
successCallback?: (result: IView) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
AddView(
View: IView,
successCallback?: (result: IView) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
FindPropertyFolderLocationInView(
View: MFiles$MFiles$MFBuiltInView | number,
PropertyFolders: ITypedValues,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetBuiltInView(
BuiltInView: MFiles$MFiles$MFBuiltInView,
successCallback?: (result: IView) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFolderContents(
FolderLocation: IFolderDefs,
successCallback?: (result: IFolderContentItems) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFolderNameListing(
ExpressionEx: IExpressionEx,
SearchConditions: ISearchConditions,
SearchFlags: MFiles$MFiles$MFSearchFlags,
SortResults: boolean,
successCallback?: (result: IFolderNameListing) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFolderUIStateForFolder(
CommonState: boolean,
FolderLocation: IFolderDefs,
ObjectFolder: boolean,
successCallback?: (result: IFolderUIState) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetFolderUIStateForSpecialLocation(
CommonState: boolean,
LocationType: MFiles$MFiles$MFFolderUIStateLocationType,
successCallback?: (result: IFolderUIState) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetMFilesURLForView(
ViewID: MFiles$MFiles$MFBuiltInView | number,
PropertyFolders: ITypedValues,
SimpleURL: boolean,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertyValuesOfFolder(
FolderLocation: IFolderDefs,
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
successCallback?: (result: IPropertyValues) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetPropertyValuesOfPath(
Path: string,
ObjectType: MFiles$MFiles$MFBuiltInObjectType | number,
successCallback?: (result: IPropertyValues) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetTemporarySearchByPath(
RelativePath: string,
successCallback?: (result: ITemporarySearchView) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetTemporarySearchView(
ViewID: MFiles$MFiles$MFBuiltInView | number,
successCallback?: (result: ITemporarySearchView) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetView(
View: MFiles$MFiles$MFBuiltInView | number,
successCallback?: (result: IView) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetViewIDByGUID(
ViewGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetViewLocationInClient(
View: MFiles$MFiles$MFBuiltInView | number,
IncludeViewNameInPath: boolean,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetViews(
ViewCategory: MFiles$MFiles$MFViewCategory,
AllViews: boolean,
ParentView: number,
successCallback?: (result: IViews) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetViewsAdmin(
IncludeCommonViews: boolean,
UserID: number,
successCallback?: (result: IViews) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ModifyTemporarySearch(
TemporarySearchView: ITemporarySearchView,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveView(
View: MFiles$MFiles$MFBuiltInView | number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ResetFolderUIStateForFolder(
ResetToProgramDefaults: boolean,
ResetToCommonDefaults: boolean,
FolderLocation: IFolderDefs,
ObjectFolder: boolean,
successCallback?: (result: IFolderUIState) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ResetFolderUIStateForSpecialLocation(
ResetToProgramDefaults: boolean,
ResetToCommonDefaults: boolean,
LocationType: MFiles$MFiles$MFFolderUIStateLocationType,
successCallback?: (result: IFolderUIState) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SaveFolderUIStateForFolder(
SaveAsCommonSettings: boolean,
ResetCommonSettingsToAllUsers: boolean,
FolderLocation: IFolderDefs,
ObjectFolder: boolean,
State: IFolderUIState,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
SaveFolderUIStateForSpecialLocation(
SaveAsCommonSettings: boolean,
ResetCommonSettingsToAllUsers: boolean,
LocationType: MFiles$MFiles$MFFolderUIStateLocationType,
State: IFolderUIState,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
ShowViewOrPropertyFolder(
ParentWindow: number,
View: MFiles$MFiles$MFBuiltInView | number,
PropertyFolders: ITypedValues,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateView(
View: IView,
successCallback?: (result: IView) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVaultWorkflowOperations {
AddWorkflowAdmin(Workflow: IWorkflowAdmin): IWorkflowAdmin,
GetStateTransitionSignatureSettings(FromState: number, ToState: number): ISignatureSettings,
GetStateTransitionSignatureSettingsByID(StateTransitionID: number): ISignatureSettings,
GetWorkflowAdmin(WorkflowID: number): IWorkflowAdmin,
GetWorkflowForClient(WorkflowID: number, UpdateFromServer: boolean): IWorkflow,
GetWorkflowIDByAlias(Alias: string): number,
GetWorkflowIDByGUID(WorkflowGUID: string): number,
GetWorkflowsAdmin(): IWorkflowsAdmin,
GetWorkflowsAsValueListItems(UpdateFromServer: boolean): IValueListItems,
GetWorkflowsForClient(UpdateFromServer: boolean): IWorkflows,
GetWorkflowStateIDByAlias(Alias: string): number,
GetWorkflowStateIDByGUID(StateGUID: string): number,
GetWorkflowStates(Workflow: number, CurrentState: ITypedValue): IStates,
GetWorkflowStatesEx(Workflow: number, CurrentState: ITypedValue, ObjVer: IObjVer): IStates,
GetWorkflowStateTransitionIDByAlias(Alias: string): number,
GetWorkflowStateTransitionIDByGUID(StateTransitionGUID: string): number,
GetWorkflowStateTransitions(Workflow: number, CurrentState: ITypedValue): IStateTransitionsForClient,
GetWorkflowStateTransitionsAsJSON(Workflow: number, CurrentState: ITypedValue, ObjVer: IObjVer): string,
GetWorkflowStateTransitionsEx(
Workflow: number,
CurrentState: ITypedValue,
ObjVer: IObjVer): IStateTransitionsForClient,
RemoveWorkflowAdmin(WorkflowID: number): void,
UpdateWorkflowAdmin(Workflow: IWorkflowAdmin): IWorkflowAdmin
} 
	declare interface IVaultWorkflowOperationsAsync {
AddWorkflowAdmin(
Workflow: IWorkflowAdmin,
successCallback?: (result: IWorkflowAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetStateTransitionSignatureSettings(
FromState: number,
ToState: number,
successCallback?: (result: ISignatureSettings) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetStateTransitionSignatureSettingsByID(
StateTransitionID: number,
successCallback?: (result: ISignatureSettings) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowAdmin(
WorkflowID: number,
successCallback?: (result: IWorkflowAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowForClient(
WorkflowID: number,
UpdateFromServer: boolean,
successCallback?: (result: IWorkflow) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowIDByGUID(
WorkflowGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowsAdmin(
successCallback?: (result: IWorkflowsAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowsAsValueListItems(
UpdateFromServer: boolean,
successCallback?: (result: IValueListItems) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowsForClient(
UpdateFromServer: boolean,
successCallback?: (result: IWorkflows) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStateIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStateIDByGUID(
StateGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStates(
Workflow: number,
CurrentState: ITypedValue,
successCallback?: (result: IStates) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStatesEx(
Workflow: number,
CurrentState: ITypedValue,
ObjVer: IObjVer,
successCallback?: (result: IStates) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStateTransitionIDByAlias(
Alias: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStateTransitionIDByGUID(
StateTransitionGUID: string,
successCallback?: (result: number) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStateTransitions(
Workflow: number,
CurrentState: ITypedValue,
successCallback?: (result: IStateTransitionsForClient) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStateTransitionsAsJSON(
Workflow: number,
CurrentState: ITypedValue,
ObjVer: IObjVer,
successCallback?: (result: string) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
GetWorkflowStateTransitionsEx(
Workflow: number,
CurrentState: ITypedValue,
ObjVer: IObjVer,
successCallback?: (result: IStateTransitionsForClient) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
RemoveWorkflowAdmin(
WorkflowID: number,
successCallback?: () => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void,
UpdateWorkflowAdmin(
Workflow: IWorkflowAdmin,
successCallback?: (result: IWorkflowAdmin) => void,
errorCallback?: (shorterror: string, longerror: string, errorobj: any) => void,
finallyCallback?: () => void): void
} 
	declare interface IVerifyVaultJob {
+FixErrors: boolean,
+VaultGUID: string,
+VerifyFileContents: boolean,
Clone(): IVerifyVaultJob,
GetNumberOfSteps(): number,
GetOneBasedIndexOfStep(CurrentStep: number): number,
GetStepProgressText(CurrentStep: number): string,
Set(GuidVault: string, FixErrors: boolean, VerifyFileContents: boolean): void
} 
	declare interface IVerifyVaultJobOutput {
+Errors: IStrings
} 
	declare interface IVersionComment {
+LastModifiedBy: IPropertyValue,
+ObjVer: IObjVer,
+StatusChanged: IPropertyValue,
+VersionComment: IPropertyValue
} 
	declare interface IVersionComments {
+Count: number,
Item(Index: number): IVersionComment
} 
	declare interface IView {
AccessControlList: IAccessControlList,
Common: boolean,
+GUID: string,
HasParent: boolean,
ID: number,
Levels: IExpressionExs,
LookInAllVersions: boolean,
Name: string,
Parent: number,
ReturnLatestVisibleVersion: boolean,
SearchConditions: ISearchConditions,
SearchDef: ISearchDef,
SearchFlags: MFiles$MFiles$MFSearchFlags,
ViewFlags: MFiles$MFiles$MFViewFlag,
ViewLocation: IViewLocation,
ViewType: MFiles$MFiles$MFViewType,
Visible: boolean,
Clone(): IView,
CloneFrom(View: IView): void
} 
	declare interface IViewLocation {
OverlappedFolder: ITypedValue,
Overlapping: boolean,
ParentFolder: IFolderDefs,
Clone(): IViewLocation
} 
	declare interface IViews {
+Count: number,
Item(Index: number): IView
} 
	declare interface IWeeklyTrigger {
DaysOfTheWeek: MFiles$MFiles$MFTriggerWeekDay,
WeeksInterval: number
} 
	declare interface IWindow {
+Events: IWindowEvents,
+Handle: number,
Height: number,
+IsFocused: boolean,
Maximizable: boolean,
Minimizable: boolean,
Resizable: boolean,
Title: string,
Width: number,
Close(): void,
Focus(): void,
Maximize(): void,
Minimize(): void,
Restore(): void,
SetDefaultSize(defaultWidth: number, defaultHeight: number, resizeToDefault: boolean): void
} 
	declare type IWindowEvents = {
OnCloseWindow(): boolean
} & IEvents

	declare interface IWorkflow {
ID: number,
Name: string,
ObjectClass: (MFiles$MFiles$MFBuiltInDocumentClass | MFiles$MFiles$MFBuiltInObjectClass | number),
Clone(): IWorkflow,
GetAsLookup(): ILookup,
GetAsTypedValue(): ITypedValue
} 
	declare interface IWorkflowAdmin {
Description: string,
Permissions: IAccessControlList,
SemanticAliases: ISemanticAliases,
States: IStatesAdmin,
StateTransitions: IStateTransitions,
Workflow: IWorkflow,
Clone(): IWorkflowAdmin
} 
	declare interface IWorkflowAssignment {
AssignedTo_DEPRECATED: IPropertyValue,
CompletedBy_DEPRECATED: IPropertyValue,
Deadline_DEPRECATED: IPropertyValue,
Description_DEPRECATED: IPropertyValue,
MonitoredBy_DEPRECATED: IPropertyValue,
Clone_DEPRECATED(): IWorkflowAssignment
} 
	declare interface IWorkflows {
+Count: number,
Item(Index: number): IWorkflow
} 
	declare interface IWorkflowsAdmin {
+Count: number,
Add(Index: number, WorkflowAdmin: IWorkflowAdmin): void,
Item(Index: number): IWorkflowAdmin,
Remove(Index: number): void
} 
	declare interface IXMLSearchResult {
+MoreResults: boolean,
+SearchResult: string
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
      }
declare  class MFiles$BuiltinCommand {
  constructor(...args: empty): mixed;
static +Undefined: Class<MFiles$BuiltinCommand__Undefined> & MFiles$BuiltinCommand__Undefined & 0;// 0
static +FIRST: Class<MFiles$BuiltinCommand__FIRST> & MFiles$BuiltinCommand__FIRST & 1;// 1
static +NewView: Class<MFiles$BuiltinCommand__NewView> & MFiles$BuiltinCommand__NewView & 2;// 2
static +NewOfflineFilter: Class<MFiles$BuiltinCommand__NewOfflineFilter> & MFiles$BuiltinCommand__NewOfflineFilter & 3;// 3
static +NewTraditionalFolder: Class<MFiles$BuiltinCommand__NewTraditionalFolder> & MFiles$BuiltinCommand__NewTraditionalFolder & 4;// 4
static +NewPropertyFolder: Class<MFiles$BuiltinCommand__NewPropertyFolder> & MFiles$BuiltinCommand__NewPropertyFolder & 5;// 5
static +ConvertToDocument: Class<MFiles$BuiltinCommand__ConvertToDocument> & MFiles$BuiltinCommand__ConvertToDocument & 6;// 6
static +ConvertToDocumentFiles: Class<MFiles$BuiltinCommand__ConvertToDocumentFiles> & MFiles$BuiltinCommand__ConvertToDocumentFiles & 7;// 7
static +ImportFilesAndFolders: Class<MFiles$BuiltinCommand__ImportFilesAndFolders> & MFiles$BuiltinCommand__ImportFilesAndFolders & 8;// 8
static +MakeCopy: Class<MFiles$BuiltinCommand__MakeCopy> & MFiles$BuiltinCommand__MakeCopy & 9;// 9
static +CheckOut: Class<MFiles$BuiltinCommand__CheckOut> & MFiles$BuiltinCommand__CheckOut & 10;// 10
static +CheckIn: Class<MFiles$BuiltinCommand__CheckIn> & MFiles$BuiltinCommand__CheckIn & 11;// 11
static +CheckInWithComments: Class<MFiles$BuiltinCommand__CheckInWithComments> & MFiles$BuiltinCommand__CheckInWithComments & 12;// 12
static +UndoCheckOut: Class<MFiles$BuiltinCommand__UndoCheckOut> & MFiles$BuiltinCommand__UndoCheckOut & 13;// 13
static +Properties: Class<MFiles$BuiltinCommand__Properties> & MFiles$BuiltinCommand__Properties & 14;// 14
static +MarkFolderForOfflineAvailability: Class<MFiles$BuiltinCommand__MarkFolderForOfflineAvailability> & MFiles$BuiltinCommand__MarkFolderForOfflineAvailability & 15;// 15
static +MarkForOfflineAvailability: Class<MFiles$BuiltinCommand__MarkForOfflineAvailability> & MFiles$BuiltinCommand__MarkForOfflineAvailability & 16;// 16
static +RemoveOfflineAvailability: Class<MFiles$BuiltinCommand__RemoveOfflineAvailability> & MFiles$BuiltinCommand__RemoveOfflineAvailability & 17;// 17
static +ShowHistory: Class<MFiles$BuiltinCommand__ShowHistory> & MFiles$BuiltinCommand__ShowHistory & 18;// 18
static +ShowRelationships: Class<MFiles$BuiltinCommand__ShowRelationships> & MFiles$BuiltinCommand__ShowRelationships & 19;// 19
static +ShowCollectionMembers: Class<MFiles$BuiltinCommand__ShowCollectionMembers> & MFiles$BuiltinCommand__ShowCollectionMembers & 20;// 20
static +ViewEditSubobjects: Class<MFiles$BuiltinCommand__ViewEditSubobjects> & MFiles$BuiltinCommand__ViewEditSubobjects & 21;// 21
static +ShowComments: Class<MFiles$BuiltinCommand__ShowComments> & MFiles$BuiltinCommand__ShowComments & 22;// 22
static +NewAssignment: Class<MFiles$BuiltinCommand__NewAssignment> & MFiles$BuiltinCommand__NewAssignment & 23;// 23
static +ShowAssignments: Class<MFiles$BuiltinCommand__ShowAssignments> & MFiles$BuiltinCommand__ShowAssignments & 24;// 24
static +CompleteAssignment: Class<MFiles$BuiltinCommand__CompleteAssignment> & MFiles$BuiltinCommand__CompleteAssignment & 25;// 25
static +ChangeState: Class<MFiles$BuiltinCommand__ChangeState> & MFiles$BuiltinCommand__ChangeState & 26;// 26
static +Workflow: Class<MFiles$BuiltinCommand__Workflow> & MFiles$BuiltinCommand__Workflow & 27;// 27
static +MarkForArchiving: Class<MFiles$BuiltinCommand__MarkForArchiving> & MFiles$BuiltinCommand__MarkForArchiving & 28;// 28
static +ClearArchiveMarker: Class<MFiles$BuiltinCommand__ClearArchiveMarker> & MFiles$BuiltinCommand__ClearArchiveMarker & 29;// 29
static +Undelete: Class<MFiles$BuiltinCommand__Undelete> & MFiles$BuiltinCommand__Undelete & 30;// 30
static +ConvertToSingleFileDocument: Class<MFiles$BuiltinCommand__ConvertToSingleFileDocument> & MFiles$BuiltinCommand__ConvertToSingleFileDocument & 31;// 31
static +ConvertToOneMultiFileDocument: Class<MFiles$BuiltinCommand__ConvertToOneMultiFileDocument> & MFiles$BuiltinCommand__ConvertToOneMultiFileDocument & 32;// 32
static +ReplaceWithFile: Class<MFiles$BuiltinCommand__ReplaceWithFile> & MFiles$BuiltinCommand__ReplaceWithFile & 33;// 33
static +GoOnline: Class<MFiles$BuiltinCommand__GoOnline> & MFiles$BuiltinCommand__GoOnline & 34;// 34
static +GoOffline: Class<MFiles$BuiltinCommand__GoOffline> & MFiles$BuiltinCommand__GoOffline & 35;// 35
static +LogOut: Class<MFiles$BuiltinCommand__LogOut> & MFiles$BuiltinCommand__LogOut & 36;// 36
static +ClientSettings: Class<MFiles$BuiltinCommand__ClientSettings> & MFiles$BuiltinCommand__ClientSettings & 37;// 37
static +ServerAdmin: Class<MFiles$BuiltinCommand__ServerAdmin> & MFiles$BuiltinCommand__ServerAdmin & 38;// 38
static +NotificationSettings: Class<MFiles$BuiltinCommand__NotificationSettings> & MFiles$BuiltinCommand__NotificationSettings & 39;// 39
static +ClearLocalCache: Class<MFiles$BuiltinCommand__ClearLocalCache> & MFiles$BuiltinCommand__ClearLocalCache & 40;// 40
static +ChangePassword: Class<MFiles$BuiltinCommand__ChangePassword> & MFiles$BuiltinCommand__ChangePassword & 41;// 41
static +ChangeLanguage: Class<MFiles$BuiltinCommand__ChangeLanguage> & MFiles$BuiltinCommand__ChangeLanguage & 42;// 42
static +AddDocumentFromScanner: Class<MFiles$BuiltinCommand__AddDocumentFromScanner> & MFiles$BuiltinCommand__AddDocumentFromScanner & 43;// 43
static +AddFileFromScanner: Class<MFiles$BuiltinCommand__AddFileFromScanner> & MFiles$BuiltinCommand__AddFileFromScanner & 44;// 44
static +ReplaceWithFileFromScanner: Class<MFiles$BuiltinCommand__ReplaceWithFileFromScanner> & MFiles$BuiltinCommand__ReplaceWithFileFromScanner & 45;// 45
static +ConvertToSearchablePDF: Class<MFiles$BuiltinCommand__ConvertToSearchablePDF> & MFiles$BuiltinCommand__ConvertToSearchablePDF & 46;// 46
static +SendLinkByEmail: Class<MFiles$BuiltinCommand__SendLinkByEmail> & MFiles$BuiltinCommand__SendLinkByEmail & 47;// 47
static +SendCopyByEmail: Class<MFiles$BuiltinCommand__SendCopyByEmail> & MFiles$BuiltinCommand__SendCopyByEmail & 48;// 48
static +SendPDFByEmail: Class<MFiles$BuiltinCommand__SendPDFByEmail> & MFiles$BuiltinCommand__SendPDFByEmail & 49;// 49
static +SaveAsPDF: Class<MFiles$BuiltinCommand__SaveAsPDF> & MFiles$BuiltinCommand__SaveAsPDF & 50;// 50
static +SubstituteUsers: Class<MFiles$BuiltinCommand__SubstituteUsers> & MFiles$BuiltinCommand__SubstituteUsers & 51;// 51
static +ShowBottomPane: Class<MFiles$BuiltinCommand__ShowBottomPane> & MFiles$BuiltinCommand__ShowBottomPane & 52;// 52
static +ShowPropertiesPane: Class<MFiles$BuiltinCommand__ShowPropertiesPane> & MFiles$BuiltinCommand__ShowPropertiesPane & 52;// 52
static +ShowRightPane: Class<MFiles$BuiltinCommand__ShowRightPane> & MFiles$BuiltinCommand__ShowRightPane & 53;// 53
static +ShowPreviewPane: Class<MFiles$BuiltinCommand__ShowPreviewPane> & MFiles$BuiltinCommand__ShowPreviewPane & 53;// 53
static +GroupObjectsByObjectType: Class<MFiles$BuiltinCommand__GroupObjectsByObjectType> & MFiles$BuiltinCommand__GroupObjectsByObjectType & 54;// 54
static +GroupViewsAndFolders: Class<MFiles$BuiltinCommand__GroupViewsAndFolders> & MFiles$BuiltinCommand__GroupViewsAndFolders & 55;// 55
static +HideView: Class<MFiles$BuiltinCommand__HideView> & MFiles$BuiltinCommand__HideView & 56;// 56
static +UnhideView: Class<MFiles$BuiltinCommand__UnhideView> & MFiles$BuiltinCommand__UnhideView & 57;// 57
static +CleanView: Class<MFiles$BuiltinCommand__CleanView> & MFiles$BuiltinCommand__CleanView & 58;// 58
static +UnhideViews: Class<MFiles$BuiltinCommand__UnhideViews> & MFiles$BuiltinCommand__UnhideViews & 59;// 59
static +ResetUISettingsToDefaults: Class<MFiles$BuiltinCommand__ResetUISettingsToDefaults> & MFiles$BuiltinCommand__ResetUISettingsToDefaults & 60;// 60
static +SaveAsCommonUISettings: Class<MFiles$BuiltinCommand__SaveAsCommonUISettings> & MFiles$BuiltinCommand__SaveAsCommonUISettings & 61;// 61
static +AddToFavorites: Class<MFiles$BuiltinCommand__AddToFavorites> & MFiles$BuiltinCommand__AddToFavorites & 62;// 62
static +RemoveFromFavorites: Class<MFiles$BuiltinCommand__RemoveFromFavorites> & MFiles$BuiltinCommand__RemoveFromFavorites & 63;// 63
static +CreateOrGetShortcut: Class<MFiles$BuiltinCommand__CreateOrGetShortcut> & MFiles$BuiltinCommand__CreateOrGetShortcut & 64;// 64
static +CreateShortcut: Class<MFiles$BuiltinCommand__CreateShortcut> & MFiles$BuiltinCommand__CreateShortcut & 65;// 65
static +AddShortcutToTaskPane: Class<MFiles$BuiltinCommand__AddShortcutToTaskPane> & MFiles$BuiltinCommand__AddShortcutToTaskPane & 66;// 66
static +AddDashboardToViewLocMain: Class<MFiles$BuiltinCommand__AddDashboardToViewLocMain> & MFiles$BuiltinCommand__AddDashboardToViewLocMain & 67;// 67
static +AddReportToViewLocMain: Class<MFiles$BuiltinCommand__AddReportToViewLocMain> & MFiles$BuiltinCommand__AddReportToViewLocMain & 67;// 67
static +AddDashboardToViewLocRight: Class<MFiles$BuiltinCommand__AddDashboardToViewLocRight> & MFiles$BuiltinCommand__AddDashboardToViewLocRight & 68;// 68
static +AddReportToViewLocRight: Class<MFiles$BuiltinCommand__AddReportToViewLocRight> & MFiles$BuiltinCommand__AddReportToViewLocRight & 68;// 68
static +AddDashboardToViewLocBottom: Class<MFiles$BuiltinCommand__AddDashboardToViewLocBottom> & MFiles$BuiltinCommand__AddDashboardToViewLocBottom & 69;// 69
static +AddReportToViewLocBottom: Class<MFiles$BuiltinCommand__AddReportToViewLocBottom> & MFiles$BuiltinCommand__AddReportToViewLocBottom & 69;// 69
static +RemoveDashboardFromViewLocMain: Class<MFiles$BuiltinCommand__RemoveDashboardFromViewLocMain> & MFiles$BuiltinCommand__RemoveDashboardFromViewLocMain & 70;// 70
static +RemoveReportFromViewLocMain: Class<MFiles$BuiltinCommand__RemoveReportFromViewLocMain> & MFiles$BuiltinCommand__RemoveReportFromViewLocMain & 70;// 70
static +RemoveDashboardFromViewLocRight: Class<MFiles$BuiltinCommand__RemoveDashboardFromViewLocRight> & MFiles$BuiltinCommand__RemoveDashboardFromViewLocRight & 71;// 71
static +RemoveReportFromViewLocRight: Class<MFiles$BuiltinCommand__RemoveReportFromViewLocRight> & MFiles$BuiltinCommand__RemoveReportFromViewLocRight & 71;// 71
static +RemoveDashboardFromViewLocBottom: Class<MFiles$BuiltinCommand__RemoveDashboardFromViewLocBottom> & MFiles$BuiltinCommand__RemoveDashboardFromViewLocBottom & 72;// 72
static +RemoveReportFromViewLocBottom: Class<MFiles$BuiltinCommand__RemoveReportFromViewLocBottom> & MFiles$BuiltinCommand__RemoveReportFromViewLocBottom & 72;// 72
static +Copy: Class<MFiles$BuiltinCommand__Copy> & MFiles$BuiltinCommand__Copy & 73;// 73
static +Cut: Class<MFiles$BuiltinCommand__Cut> & MFiles$BuiltinCommand__Cut & 74;// 74
static +Paste: Class<MFiles$BuiltinCommand__Paste> & MFiles$BuiltinCommand__Paste & 75;// 75
static +Delete: Class<MFiles$BuiltinCommand__Delete> & MFiles$BuiltinCommand__Delete & 76;// 76
static +Rename: Class<MFiles$BuiltinCommand__Rename> & MFiles$BuiltinCommand__Rename & 77;// 77
static +NewWindow: Class<MFiles$BuiltinCommand__NewWindow> & MFiles$BuiltinCommand__NewWindow & 78;// 78
static +ExportObjects: Class<MFiles$BuiltinCommand__ExportObjects> & MFiles$BuiltinCommand__ExportObjects & 79;// 79
static +ExportSearchBarConditions: Class<MFiles$BuiltinCommand__ExportSearchBarConditions> & MFiles$BuiltinCommand__ExportSearchBarConditions & 80;// 80
static +ConvertToSingleFilePDF: Class<MFiles$BuiltinCommand__ConvertToSingleFilePDF> & MFiles$BuiltinCommand__ConvertToSingleFilePDF & 81;// 81
static +ConvertToMultiFilePDF: Class<MFiles$BuiltinCommand__ConvertToMultiFilePDF> & MFiles$BuiltinCommand__ConvertToMultiFilePDF & 82;// 82
static +ChooseColumns: Class<MFiles$BuiltinCommand__ChooseColumns> & MFiles$BuiltinCommand__ChooseColumns & 83;// 83
static +PasteAsMultiFileDocument: Class<MFiles$BuiltinCommand__PasteAsMultiFileDocument> & MFiles$BuiltinCommand__PasteAsMultiFileDocument & 84;// 84
static +SelectAll: Class<MFiles$BuiltinCommand__SelectAll> & MFiles$BuiltinCommand__SelectAll & 85;// 85
static +InvertSelection: Class<MFiles$BuiltinCommand__InvertSelection> & MFiles$BuiltinCommand__InvertSelection & 86;// 86
static +NewObject: Class<MFiles$BuiltinCommand__NewObject> & MFiles$BuiltinCommand__NewObject & 87;// 87
static +Refresh: Class<MFiles$BuiltinCommand__Refresh> & MFiles$BuiltinCommand__Refresh & 88;// 88
static +RollBack: Class<MFiles$BuiltinCommand__RollBack> & MFiles$BuiltinCommand__RollBack & 89;// 89
static +DeleteAll: Class<MFiles$BuiltinCommand__DeleteAll> & MFiles$BuiltinCommand__DeleteAll & 90;// 90
static +Destroy: Class<MFiles$BuiltinCommand__Destroy> & MFiles$BuiltinCommand__Destroy & 91;// 91
static +ModifyVersionDetails: Class<MFiles$BuiltinCommand__ModifyVersionDetails> & MFiles$BuiltinCommand__ModifyVersionDetails & 92;// 92
static +LabelThisVersion: Class<MFiles$BuiltinCommand__LabelThisVersion> & MFiles$BuiltinCommand__LabelThisVersion & 93;// 93
static +NewSubobject: Class<MFiles$BuiltinCommand__NewSubobject> & MFiles$BuiltinCommand__NewSubobject & 94;// 94
static +AddCollectionMember: Class<MFiles$BuiltinCommand__AddCollectionMember> & MFiles$BuiltinCommand__AddCollectionMember & 95;// 95
static +EditCollectionMembership: Class<MFiles$BuiltinCommand__EditCollectionMembership> & MFiles$BuiltinCommand__EditCollectionMembership & 96;// 96
static +RemoveCollectionMembership: Class<MFiles$BuiltinCommand__RemoveCollectionMembership> & MFiles$BuiltinCommand__RemoveCollectionMembership & 97;// 97
static +AddRelationship: Class<MFiles$BuiltinCommand__AddRelationship> & MFiles$BuiltinCommand__AddRelationship & 98;// 98
static +EditRelationship: Class<MFiles$BuiltinCommand__EditRelationship> & MFiles$BuiltinCommand__EditRelationship & 99;// 99
static +RemoveRelationship: Class<MFiles$BuiltinCommand__RemoveRelationship> & MFiles$BuiltinCommand__RemoveRelationship & 100;// 100
static +SubMenu_NewObject: Class<MFiles$BuiltinCommand__SubMenu_NewObject> & MFiles$BuiltinCommand__SubMenu_NewObject & 101;// 101
static +SubMenu_NewFile: Class<MFiles$BuiltinCommand__SubMenu_NewFile> & MFiles$BuiltinCommand__SubMenu_NewFile & 102;// 102
static +SubMenu_WindowsCommands: Class<MFiles$BuiltinCommand__SubMenu_WindowsCommands> & MFiles$BuiltinCommand__SubMenu_WindowsCommands & 103;// 103
static +SubMenu_Send: Class<MFiles$BuiltinCommand__SubMenu_Send> & MFiles$BuiltinCommand__SubMenu_Send & 104;// 104
static +SubMenu_DisplayMode: Class<MFiles$BuiltinCommand__SubMenu_DisplayMode> & MFiles$BuiltinCommand__SubMenu_DisplayMode & 105;// 105
static +ChangeViewMode: Class<MFiles$BuiltinCommand__ChangeViewMode> & MFiles$BuiltinCommand__ChangeViewMode & 106;// 106
static +SubMenu_OfflineAvailability: Class<MFiles$BuiltinCommand__SubMenu_OfflineAvailability> & MFiles$BuiltinCommand__SubMenu_OfflineAvailability & 107;// 107
static +SubMenu_BrowseRelatedObjects: Class<MFiles$BuiltinCommand__SubMenu_BrowseRelatedObjects> & MFiles$BuiltinCommand__SubMenu_BrowseRelatedObjects & 108;// 108
static +SubMenu_Archiving: Class<MFiles$BuiltinCommand__SubMenu_Archiving> & MFiles$BuiltinCommand__SubMenu_Archiving & 109;// 109
static +SubMenu_Workflow: Class<MFiles$BuiltinCommand__SubMenu_Workflow> & MFiles$BuiltinCommand__SubMenu_Workflow & 110;// 110
static +SubMenu_ScanningAndOCR: Class<MFiles$BuiltinCommand__SubMenu_ScanningAndOCR> & MFiles$BuiltinCommand__SubMenu_ScanningAndOCR & 111;// 111
static +SubMenu_RefreshExtObjects: Class<MFiles$BuiltinCommand__SubMenu_RefreshExtObjects> & MFiles$BuiltinCommand__SubMenu_RefreshExtObjects & 112;// 112
static +SubMenu_Dashboards: Class<MFiles$BuiltinCommand__SubMenu_Dashboards> & MFiles$BuiltinCommand__SubMenu_Dashboards & 113;// 113
static +SubMenu_Reports: Class<MFiles$BuiltinCommand__SubMenu_Reports> & MFiles$BuiltinCommand__SubMenu_Reports & 113;// 113
static +GroupObjectsByFirstLetters: Class<MFiles$BuiltinCommand__GroupObjectsByFirstLetters> & MFiles$BuiltinCommand__GroupObjectsByFirstLetters & 114;// 114
static +GroupFoldersByFirstLetters: Class<MFiles$BuiltinCommand__GroupFoldersByFirstLetters> & MFiles$BuiltinCommand__GroupFoldersByFirstLetters & 115;// 115
static +AddGroupingLevel: Class<MFiles$BuiltinCommand__AddGroupingLevel> & MFiles$BuiltinCommand__AddGroupingLevel & 116;// 116
static +CurrentGroupingLevel: Class<MFiles$BuiltinCommand__CurrentGroupingLevel> & MFiles$BuiltinCommand__CurrentGroupingLevel & 117;// 117
static +RemoveCurrentGroupingLevel: Class<MFiles$BuiltinCommand__RemoveCurrentGroupingLevel> & MFiles$BuiltinCommand__RemoveCurrentGroupingLevel & 118;// 118
static +HideOrShowEmptyFolders: Class<MFiles$BuiltinCommand__HideOrShowEmptyFolders> & MFiles$BuiltinCommand__HideOrShowEmptyFolders & 119;// 119
static +BrowseInThisWindow: Class<MFiles$BuiltinCommand__BrowseInThisWindow> & MFiles$BuiltinCommand__BrowseInThisWindow & 120;// 120
static +GroupBy: Class<MFiles$BuiltinCommand__GroupBy> & MFiles$BuiltinCommand__GroupBy & 121;// 121
static +GroupFoldersBy: Class<MFiles$BuiltinCommand__GroupFoldersBy> & MFiles$BuiltinCommand__GroupFoldersBy & 122;// 122
static +MarkComplete: Class<MFiles$BuiltinCommand__MarkComplete> & MFiles$BuiltinCommand__MarkComplete & 123;// 123
static +GoToCustomView: Class<MFiles$BuiltinCommand__GoToCustomView> & MFiles$BuiltinCommand__GoToCustomView & 124;// 124
static +Submenu_VaultX: Class<MFiles$BuiltinCommand__Submenu_VaultX> & MFiles$BuiltinCommand__Submenu_VaultX & 125;// 125
static +Submenu_ViewX: Class<MFiles$BuiltinCommand__Submenu_ViewX> & MFiles$BuiltinCommand__Submenu_ViewX & 126;// 126
static +Submenu_DocumentX: Class<MFiles$BuiltinCommand__Submenu_DocumentX> & MFiles$BuiltinCommand__Submenu_DocumentX & 127;// 127
static +HitHighlighting: Class<MFiles$BuiltinCommand__HitHighlighting> & MFiles$BuiltinCommand__HitHighlighting & 128;// 128
static +CheckOutForCoauthoring: Class<MFiles$BuiltinCommand__CheckOutForCoauthoring> & MFiles$BuiltinCommand__CheckOutForCoauthoring & 129;// 129
static +BeginCoauthoring: Class<MFiles$BuiltinCommand__BeginCoauthoring> & MFiles$BuiltinCommand__BeginCoauthoring & 130;// 130
static +EndCoauthoring: Class<MFiles$BuiltinCommand__EndCoauthoring> & MFiles$BuiltinCommand__EndCoauthoring & 131;// 131
static +ShowOriginalObject: Class<MFiles$BuiltinCommand__ShowOriginalObject> & MFiles$BuiltinCommand__ShowOriginalObject & 132;// 132
static +SendCoauthoringLink: Class<MFiles$BuiltinCommand__SendCoauthoringLink> & MFiles$BuiltinCommand__SendCoauthoringLink & 133;// 133
static +ResolveConflictKeepThis: Class<MFiles$BuiltinCommand__ResolveConflictKeepThis> & MFiles$BuiltinCommand__ResolveConflictKeepThis & 134;// 134
static +ResolveConflictDiscardThis: Class<MFiles$BuiltinCommand__ResolveConflictDiscardThis> & MFiles$BuiltinCommand__ResolveConflictDiscardThis & 135;// 135
static +Applications: Class<MFiles$BuiltinCommand__Applications> & MFiles$BuiltinCommand__Applications & 136;// 136
static +ShareViaSkyDrive: Class<MFiles$BuiltinCommand__ShareViaSkyDrive> & MFiles$BuiltinCommand__ShareViaSkyDrive & 137;// 137
static +ShareViaSkyDriveAsPDF: Class<MFiles$BuiltinCommand__ShareViaSkyDriveAsPDF> & MFiles$BuiltinCommand__ShareViaSkyDriveAsPDF & 138;// 138
static +ShowMetadataInRightPane: Class<MFiles$BuiltinCommand__ShowMetadataInRightPane> & MFiles$BuiltinCommand__ShowMetadataInRightPane & 139;// 139
static +ShowMetadataInBottomPane: Class<MFiles$BuiltinCommand__ShowMetadataInBottomPane> & MFiles$BuiltinCommand__ShowMetadataInBottomPane & 140;// 140
static +MFilesHelp: Class<MFiles$BuiltinCommand__MFilesHelp> & MFiles$BuiltinCommand__MFilesHelp & 141;// 141
static +MFilesGuidedTour: Class<MFiles$BuiltinCommand__MFilesGuidedTour> & MFiles$BuiltinCommand__MFilesGuidedTour & 142;// 142
static +ShowNavigationPane: Class<MFiles$BuiltinCommand__ShowNavigationPane> & MFiles$BuiltinCommand__ShowNavigationPane & 143;// 143
static +CustomizePropertyFolder: Class<MFiles$BuiltinCommand__CustomizePropertyFolder> & MFiles$BuiltinCommand__CustomizePropertyFolder & 144;// 144
static +UncustomizePropertyFolder: Class<MFiles$BuiltinCommand__UncustomizePropertyFolder> & MFiles$BuiltinCommand__UncustomizePropertyFolder & 145;// 145
static +UseNormalLayout: Class<MFiles$BuiltinCommand__UseNormalLayout> & MFiles$BuiltinCommand__UseNormalLayout & 146;// 146
static +UseCompactLayout: Class<MFiles$BuiltinCommand__UseCompactLayout> & MFiles$BuiltinCommand__UseCompactLayout & 147;// 147
static +RightPane_Normal: Class<MFiles$BuiltinCommand__RightPane_Normal> & MFiles$BuiltinCommand__RightPane_Normal & 148;// 148
static +RightPane_Minimized: Class<MFiles$BuiltinCommand__RightPane_Minimized> & MFiles$BuiltinCommand__RightPane_Minimized & 149;// 149
static +RightPane_Off: Class<MFiles$BuiltinCommand__RightPane_Off> & MFiles$BuiltinCommand__RightPane_Off & 150;// 150
static +BottomPane_Normal: Class<MFiles$BuiltinCommand__BottomPane_Normal> & MFiles$BuiltinCommand__BottomPane_Normal & 151;// 151
static +BottomPane_Minimized: Class<MFiles$BuiltinCommand__BottomPane_Minimized> & MFiles$BuiltinCommand__BottomPane_Minimized & 152;// 152
static +BottomPane_Off: Class<MFiles$BuiltinCommand__BottomPane_Off> & MFiles$BuiltinCommand__BottomPane_Off & 153;// 153
static +NavigationPane_On: Class<MFiles$BuiltinCommand__NavigationPane_On> & MFiles$BuiltinCommand__NavigationPane_On & 154;// 154
static +NavigationPane_Off: Class<MFiles$BuiltinCommand__NavigationPane_Off> & MFiles$BuiltinCommand__NavigationPane_Off & 155;// 155
static +ShowVisualAnnotations: Class<MFiles$BuiltinCommand__ShowVisualAnnotations> & MFiles$BuiltinCommand__ShowVisualAnnotations & 156;// 156
static +ShowAllVisualAnnotations: Class<MFiles$BuiltinCommand__ShowAllVisualAnnotations> & MFiles$BuiltinCommand__ShowAllVisualAnnotations & 157;// 157
static +HideAllVisualAnnotations: Class<MFiles$BuiltinCommand__HideAllVisualAnnotations> & MFiles$BuiltinCommand__HideAllVisualAnnotations & 158;// 158
static +EditOneAnnotation: Class<MFiles$BuiltinCommand__EditOneAnnotation> & MFiles$BuiltinCommand__EditOneAnnotation & 159;// 159
static +SaveAnnotation: Class<MFiles$BuiltinCommand__SaveAnnotation> & MFiles$BuiltinCommand__SaveAnnotation & 160;// 160
static +NewAnnotation: Class<MFiles$BuiltinCommand__NewAnnotation> & MFiles$BuiltinCommand__NewAnnotation & 161;// 161
static +AboutMFiles: Class<MFiles$BuiltinCommand__AboutMFiles> & MFiles$BuiltinCommand__AboutMFiles & 162;// 162
static +MarkApproved: Class<MFiles$BuiltinCommand__MarkApproved> & MFiles$BuiltinCommand__MarkApproved & 163;// 163
static +MarkRejected: Class<MFiles$BuiltinCommand__MarkRejected> & MFiles$BuiltinCommand__MarkRejected & 164;// 164
static +ApproveAssignment: Class<MFiles$BuiltinCommand__ApproveAssignment> & MFiles$BuiltinCommand__ApproveAssignment & 165;// 165
static +RejectAssignment: Class<MFiles$BuiltinCommand__RejectAssignment> & MFiles$BuiltinCommand__RejectAssignment & 166;// 166
static +ChangeStateAdmin: Class<MFiles$BuiltinCommand__ChangeStateAdmin> & MFiles$BuiltinCommand__ChangeStateAdmin & 167;// 167
static +SharePublicLink: Class<MFiles$BuiltinCommand__SharePublicLink> & MFiles$BuiltinCommand__SharePublicLink & 168;// 168
static +SharedByMe: Class<MFiles$BuiltinCommand__SharedByMe> & MFiles$BuiltinCommand__SharedByMe & 169;// 169
static +UploadFiles: Class<MFiles$BuiltinCommand__UploadFiles> & MFiles$BuiltinCommand__UploadFiles & 170;// 170
static +DiscardFileModifications: Class<MFiles$BuiltinCommand__DiscardFileModifications> & MFiles$BuiltinCommand__DiscardFileModifications & 171;// 171
static +ShowSearchResultsFromMultipleVaults: Class<MFiles$BuiltinCommand__ShowSearchResultsFromMultipleVaults> & MFiles$BuiltinCommand__ShowSearchResultsFromMultipleVaults & 172;// 172
static +ShowSearchRefinementOptions: Class<MFiles$BuiltinCommand__ShowSearchRefinementOptions> & MFiles$BuiltinCommand__ShowSearchRefinementOptions & 173;// 173
static +LAST: Class<MFiles$BuiltinCommand__LAST> & MFiles$BuiltinCommand__LAST & 174;// 174
static +ALL: Class<MFiles$BuiltinCommand__ALL> & MFiles$BuiltinCommand__ALL & 268435455;// 268435455

}

declare class MFiles$BuiltinCommand__Undefined mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__FIRST mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewView mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewOfflineFilter mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewTraditionalFolder mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewPropertyFolder mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ConvertToDocument mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ConvertToDocumentFiles mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ImportFilesAndFolders mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MakeCopy mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CheckOut mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CheckIn mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CheckInWithComments mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__UndoCheckOut mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Properties mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MarkFolderForOfflineAvailability mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MarkForOfflineAvailability mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveOfflineAvailability mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowHistory mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowRelationships mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowCollectionMembers mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ViewEditSubobjects mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowComments mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewAssignment mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowAssignments mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CompleteAssignment mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ChangeState mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Workflow mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MarkForArchiving mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ClearArchiveMarker mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Undelete mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ConvertToSingleFileDocument mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ConvertToOneMultiFileDocument mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ReplaceWithFile mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GoOnline mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GoOffline mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__LogOut mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ClientSettings mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ServerAdmin mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NotificationSettings mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ClearLocalCache mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ChangePassword mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ChangeLanguage mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddDocumentFromScanner mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddFileFromScanner mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ReplaceWithFileFromScanner mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ConvertToSearchablePDF mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SendLinkByEmail mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SendCopyByEmail mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SendPDFByEmail mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SaveAsPDF mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubstituteUsers mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowBottomPane mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowPropertiesPane mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowRightPane mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowPreviewPane mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GroupObjectsByObjectType mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GroupViewsAndFolders mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__HideView mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__UnhideView mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CleanView mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__UnhideViews mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ResetUISettingsToDefaults mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SaveAsCommonUISettings mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddToFavorites mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveFromFavorites mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CreateOrGetShortcut mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CreateShortcut mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddShortcutToTaskPane mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddDashboardToViewLocMain mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddReportToViewLocMain mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddDashboardToViewLocRight mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddReportToViewLocRight mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddDashboardToViewLocBottom mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddReportToViewLocBottom mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveDashboardFromViewLocMain mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveReportFromViewLocMain mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveDashboardFromViewLocRight mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveReportFromViewLocRight mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveDashboardFromViewLocBottom mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveReportFromViewLocBottom mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Copy mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Cut mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Paste mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Delete mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Rename mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewWindow mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ExportObjects mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ExportSearchBarConditions mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ConvertToSingleFilePDF mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ConvertToMultiFilePDF mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ChooseColumns mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__PasteAsMultiFileDocument mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SelectAll mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__InvertSelection mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewObject mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Refresh mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RollBack mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__DeleteAll mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Destroy mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ModifyVersionDetails mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__LabelThisVersion mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewSubobject mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddCollectionMember mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__EditCollectionMembership mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveCollectionMembership mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddRelationship mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__EditRelationship mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveRelationship mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_NewObject mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_NewFile mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_WindowsCommands mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_Send mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_DisplayMode mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ChangeViewMode mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_OfflineAvailability mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_BrowseRelatedObjects mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_Archiving mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_Workflow mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_ScanningAndOCR mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_RefreshExtObjects mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_Dashboards mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SubMenu_Reports mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GroupObjectsByFirstLetters mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GroupFoldersByFirstLetters mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AddGroupingLevel mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CurrentGroupingLevel mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RemoveCurrentGroupingLevel mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__HideOrShowEmptyFolders mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__BrowseInThisWindow mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GroupBy mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GroupFoldersBy mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MarkComplete mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__GoToCustomView mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Submenu_VaultX mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Submenu_ViewX mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Submenu_DocumentX mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__HitHighlighting mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CheckOutForCoauthoring mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__BeginCoauthoring mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__EndCoauthoring mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowOriginalObject mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SendCoauthoringLink mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ResolveConflictKeepThis mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ResolveConflictDiscardThis mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__Applications mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShareViaSkyDrive mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShareViaSkyDriveAsPDF mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowMetadataInRightPane mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowMetadataInBottomPane mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MFilesHelp mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MFilesGuidedTour mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowNavigationPane mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__CustomizePropertyFolder mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__UncustomizePropertyFolder mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__UseNormalLayout mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__UseCompactLayout mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RightPane_Normal mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RightPane_Minimized mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RightPane_Off mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__BottomPane_Normal mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__BottomPane_Minimized mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__BottomPane_Off mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NavigationPane_On mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NavigationPane_Off mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowVisualAnnotations mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowAllVisualAnnotations mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__HideAllVisualAnnotations mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__EditOneAnnotation mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SaveAnnotation mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__NewAnnotation mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__AboutMFiles mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MarkApproved mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__MarkRejected mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ApproveAssignment mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__RejectAssignment mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ChangeStateAdmin mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SharePublicLink mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__SharedByMe mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__UploadFiles mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__DiscardFileModifications mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowSearchResultsFromMultipleVaults mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ShowSearchRefinementOptions mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__LAST mixins MFiles$BuiltinCommand {}
declare class MFiles$BuiltinCommand__ALL mixins MFiles$BuiltinCommand {}


declare  class MFiles$CommandLocation {
  constructor(...args: empty): mixed;
static +Undefined: Class<MFiles$CommandLocation__Undefined> & MFiles$CommandLocation__Undefined & 0;// 0
static +MainMenu: Class<MFiles$CommandLocation__MainMenu> & MFiles$CommandLocation__MainMenu & 1;// 1
static +ContextMenu: Class<MFiles$CommandLocation__ContextMenu> & MFiles$CommandLocation__ContextMenu & 2;// 2
static +TaskPane: Class<MFiles$CommandLocation__TaskPane> & MFiles$CommandLocation__TaskPane & 4;// 4
static +All: Class<MFiles$CommandLocation__All> & MFiles$CommandLocation__All & 268435455;// 268435455

}

declare class MFiles$CommandLocation__Undefined mixins MFiles$CommandLocation {}
declare class MFiles$CommandLocation__MainMenu mixins MFiles$CommandLocation {}
declare class MFiles$CommandLocation__ContextMenu mixins MFiles$CommandLocation {}
declare class MFiles$CommandLocation__TaskPane mixins MFiles$CommandLocation {}
declare class MFiles$CommandLocation__All mixins MFiles$CommandLocation {}


declare  class MFiles$CommandState {
  constructor(...args: empty): mixed;
static +Undefined: Class<MFiles$CommandState__Undefined> & MFiles$CommandState__Undefined & 0;// 0
static +Active: Class<MFiles$CommandState__Active> & MFiles$CommandState__Active & 1;// 1
static +Inactive: Class<MFiles$CommandState__Inactive> & MFiles$CommandState__Inactive & 2;// 2
static +Hidden: Class<MFiles$CommandState__Hidden> & MFiles$CommandState__Hidden & 3;// 3

}

declare class MFiles$CommandState__Undefined mixins MFiles$CommandState {}
declare class MFiles$CommandState__Active mixins MFiles$CommandState {}
declare class MFiles$CommandState__Inactive mixins MFiles$CommandState {}
declare class MFiles$CommandState__Hidden mixins MFiles$CommandState {}


declare  class MFiles$DefaultIcon {
  constructor(...args: empty): mixed;
static +CheckOut: Class<MFiles$DefaultIcon__CheckOut> & MFiles$DefaultIcon__CheckOut & 0;// 0
static +CheckIn: Class<MFiles$DefaultIcon__CheckIn> & MFiles$DefaultIcon__CheckIn & 1;// 1
static +UndoCheckOut: Class<MFiles$DefaultIcon__UndoCheckOut> & MFiles$DefaultIcon__UndoCheckOut & 2;// 2
static +History: Class<MFiles$DefaultIcon__History> & MFiles$DefaultIcon__History & 4;// 4
static +Properties: Class<MFiles$DefaultIcon__Properties> & MFiles$DefaultIcon__Properties & 5;// 5
static +MakeCopy: Class<MFiles$DefaultIcon__MakeCopy> & MFiles$DefaultIcon__MakeCopy & 6;// 6
static +View: Class<MFiles$DefaultIcon__View> & MFiles$DefaultIcon__View & 8;// 8
static +Root: Class<MFiles$DefaultIcon__Root> & MFiles$DefaultIcon__Root & 9;// 9
static +Workflow: Class<MFiles$DefaultIcon__Workflow> & MFiles$DefaultIcon__Workflow & 11;// 11
static +LogOut: Class<MFiles$DefaultIcon__LogOut> & MFiles$DefaultIcon__LogOut & 12;// 12
static +GoOnline: Class<MFiles$DefaultIcon__GoOnline> & MFiles$DefaultIcon__GoOnline & 13;// 13
static +GoOffline: Class<MFiles$DefaultIcon__GoOffline> & MFiles$DefaultIcon__GoOffline & 14;// 14
static +Assignment: Class<MFiles$DefaultIcon__Assignment> & MFiles$DefaultIcon__Assignment & 15;// 15
static +MarkComplete: Class<MFiles$DefaultIcon__MarkComplete> & MFiles$DefaultIcon__MarkComplete & 16;// 16
static +TraditionalFolder: Class<MFiles$DefaultIcon__TraditionalFolder> & MFiles$DefaultIcon__TraditionalFolder & 17;// 17
static +PropertyFolder: Class<MFiles$DefaultIcon__PropertyFolder> & MFiles$DefaultIcon__PropertyFolder & 18;// 18
static +File: Class<MFiles$DefaultIcon__File> & MFiles$DefaultIcon__File & 19;// 19
static +MFD: Class<MFiles$DefaultIcon__MFD> & MFiles$DefaultIcon__MFD & 20;// 20
static +PrivateView: Class<MFiles$DefaultIcon__PrivateView> & MFiles$DefaultIcon__PrivateView & 21;// 21
static +Collection: Class<MFiles$DefaultIcon__Collection> & MFiles$DefaultIcon__Collection & 22;// 22
static +ChangeState: Class<MFiles$DefaultIcon__ChangeState> & MFiles$DefaultIcon__ChangeState & 24;// 24
static +RelationShips: Class<MFiles$DefaultIcon__RelationShips> & MFiles$DefaultIcon__RelationShips & 25;// 25
static +SelectedState: Class<MFiles$DefaultIcon__SelectedState> & MFiles$DefaultIcon__SelectedState & 26;// 26

}

declare class MFiles$DefaultIcon__CheckOut mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__CheckIn mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__UndoCheckOut mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__History mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__Properties mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__MakeCopy mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__View mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__Root mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__Workflow mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__LogOut mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__GoOnline mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__GoOffline mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__Assignment mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__MarkComplete mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__TraditionalFolder mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__PropertyFolder mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__File mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__MFD mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__PrivateView mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__Collection mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__ChangeState mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__RelationShips mixins MFiles$DefaultIcon {}
declare class MFiles$DefaultIcon__SelectedState mixins MFiles$DefaultIcon {}


declare  class MFiles$Event {
  constructor(...args: empty): mixed;
static +Undefined: Class<MFiles$Event__Undefined> & MFiles$Event__Undefined & 0;// 0
static +Notification: Class<MFiles$Event__Notification> & MFiles$Event__Notification & 1;// 1
static +Started: Class<MFiles$Event__Started> & MFiles$Event__Started & 2;// 2
static +Stop: Class<MFiles$Event__Stop> & MFiles$Event__Stop & 3;// 3
static +ShowPane: Class<MFiles$Event__ShowPane> & MFiles$Event__ShowPane & 4;// 4
static +HidePane: Class<MFiles$Event__HidePane> & MFiles$Event__HidePane & 5;// 5
static +PaneResized: Class<MFiles$Event__PaneResized> & MFiles$Event__PaneResized & 6;// 6
static +NewShellFrame: Class<MFiles$Event__NewShellFrame> & MFiles$Event__NewShellFrame & 7;// 7
static +NewNormalShellFrame: Class<MFiles$Event__NewNormalShellFrame> & MFiles$Event__NewNormalShellFrame & 8;// 8
static +NewCommonDialogShellFrame: Class<MFiles$Event__NewCommonDialogShellFrame> & MFiles$Event__NewCommonDialogShellFrame & 9;// 9
static +NewEmbeddedShellFrame: Class<MFiles$Event__NewEmbeddedShellFrame> & MFiles$Event__NewEmbeddedShellFrame & 10;// 10
static +NewTaskPane: Class<MFiles$Event__NewTaskPane> & MFiles$Event__NewTaskPane & 11;// 11
static +NewBottomPane: Class<MFiles$Event__NewBottomPane> & MFiles$Event__NewBottomPane & 12;// 12
static +NewSearchPane: Class<MFiles$Event__NewSearchPane> & MFiles$Event__NewSearchPane & 13;// 13
static +NewRightPane: Class<MFiles$Event__NewRightPane> & MFiles$Event__NewRightPane & 14;// 14
static +NewShellListing: Class<MFiles$Event__NewShellListing> & MFiles$Event__NewShellListing & 15;// 15
static +NewCommands: Class<MFiles$Event__NewCommands> & MFiles$Event__NewCommands & 16;// 16
static +ActiveListingChanged: Class<MFiles$Event__ActiveListingChanged> & MFiles$Event__ActiveListingChanged & 17;// 17
static +NewTab: Class<MFiles$Event__NewTab> & MFiles$Event__NewTab & 18;// 18
static +TabSelected: Class<MFiles$Event__TabSelected> & MFiles$Event__TabSelected & 19;// 19
static +TabUnselected: Class<MFiles$Event__TabUnselected> & MFiles$Event__TabUnselected & 20;// 20
static +MinimizedStateChanged: Class<MFiles$Event__MinimizedStateChanged> & MFiles$Event__MinimizedStateChanged & 21;// 21
static +BuiltinCommand: Class<MFiles$Event__BuiltinCommand> & MFiles$Event__BuiltinCommand & 22;// 22
static +CustomCommand: Class<MFiles$Event__CustomCommand> & MFiles$Event__CustomCommand & 23;// 23
static +SelectionChanged: Class<MFiles$Event__SelectionChanged> & MFiles$Event__SelectionChanged & 24;// 24
static +SelectedItemsChanged: Class<MFiles$Event__SelectedItemsChanged> & MFiles$Event__SelectedItemsChanged & 25;// 25
static +ContentChanged: Class<MFiles$Event__ContentChanged> & MFiles$Event__ContentChanged & 26;// 26
static +ShowContextMenu: Class<MFiles$Event__ShowContextMenu> & MFiles$Event__ShowContextMenu & 27;// 27
static +ShowMainMenu: Class<MFiles$Event__ShowMainMenu> & MFiles$Event__ShowMainMenu & 28;// 28
static +ListingActivated: Class<MFiles$Event__ListingActivated> & MFiles$Event__ListingActivated & 29;// 29
static +ListingDeactivated: Class<MFiles$Event__ListingDeactivated> & MFiles$Event__ListingDeactivated & 30;// 30
static +SearchInitiated: Class<MFiles$Event__SearchInitiated> & MFiles$Event__SearchInitiated & 31;// 31
static +SearchReady: Class<MFiles$Event__SearchReady> & MFiles$Event__SearchReady & 32;// 32
static +CloseWindow: Class<MFiles$Event__CloseWindow> & MFiles$Event__CloseWindow & 33;// 33
static +NewVaultEntry: Class<MFiles$Event__NewVaultEntry> & MFiles$Event__NewVaultEntry & 34;// 34
static +CreateObject: Class<MFiles$Event__CreateObject> & MFiles$Event__CreateObject & 35;// 35
static +ObjectCreated: Class<MFiles$Event__ObjectCreated> & MFiles$Event__ObjectCreated & 36;// 36
static +DestroyObject: Class<MFiles$Event__DestroyObject> & MFiles$Event__DestroyObject & 37;// 37
static +ObjectDestroyed: Class<MFiles$Event__ObjectDestroyed> & MFiles$Event__ObjectDestroyed & 38;// 38
static +DestroyObjects: Class<MFiles$Event__DestroyObjects> & MFiles$Event__DestroyObjects & 39;// 39
static +ObjectsDestroyed: Class<MFiles$Event__ObjectsDestroyed> & MFiles$Event__ObjectsDestroyed & 40;// 40
static +DestroyObjectVersion: Class<MFiles$Event__DestroyObjectVersion> & MFiles$Event__DestroyObjectVersion & 41;// 41
static +ObjectVersionDestroyed: Class<MFiles$Event__ObjectVersionDestroyed> & MFiles$Event__ObjectVersionDestroyed & 42;// 42
static +DestroyObjectVersions: Class<MFiles$Event__DestroyObjectVersions> & MFiles$Event__DestroyObjectVersions & 43;// 43
static +ObjectVersionsDestroyed: Class<MFiles$Event__ObjectVersionsDestroyed> & MFiles$Event__ObjectVersionsDestroyed & 44;// 44
static +RemoveObject: Class<MFiles$Event__RemoveObject> & MFiles$Event__RemoveObject & 45;// 45
static +ObjectRemoved: Class<MFiles$Event__ObjectRemoved> & MFiles$Event__ObjectRemoved & 46;// 46
static +RemoveObjects: Class<MFiles$Event__RemoveObjects> & MFiles$Event__RemoveObjects & 47;// 47
static +ObjectsRemoved: Class<MFiles$Event__ObjectsRemoved> & MFiles$Event__ObjectsRemoved & 48;// 48
static +UndeleteObject: Class<MFiles$Event__UndeleteObject> & MFiles$Event__UndeleteObject & 49;// 49
static +ObjectUndeleted: Class<MFiles$Event__ObjectUndeleted> & MFiles$Event__ObjectUndeleted & 50;// 50
static +UndeleteObjects: Class<MFiles$Event__UndeleteObjects> & MFiles$Event__UndeleteObjects & 51;// 51
static +ObjectsUndeleted: Class<MFiles$Event__ObjectsUndeleted> & MFiles$Event__ObjectsUndeleted & 52;// 52
static +AddObjectFile: Class<MFiles$Event__AddObjectFile> & MFiles$Event__AddObjectFile & 53;// 53
static +ObjectFileAdded: Class<MFiles$Event__ObjectFileAdded> & MFiles$Event__ObjectFileAdded & 54;// 54
static +RemoveObjectFile: Class<MFiles$Event__RemoveObjectFile> & MFiles$Event__RemoveObjectFile & 55;// 55
static +ObjectFileRemoved: Class<MFiles$Event__ObjectFileRemoved> & MFiles$Event__ObjectFileRemoved & 56;// 56
static +RenameObjectFile: Class<MFiles$Event__RenameObjectFile> & MFiles$Event__RenameObjectFile & 57;// 57
static +ObjectFileRenamed: Class<MFiles$Event__ObjectFileRenamed> & MFiles$Event__ObjectFileRenamed & 58;// 58
static +CheckInObject: Class<MFiles$Event__CheckInObject> & MFiles$Event__CheckInObject & 59;// 59
static +ObjectCheckedIn: Class<MFiles$Event__ObjectCheckedIn> & MFiles$Event__ObjectCheckedIn & 60;// 60
static +CheckInObjects: Class<MFiles$Event__CheckInObjects> & MFiles$Event__CheckInObjects & 61;// 61
static +ObjectsCheckedIn: Class<MFiles$Event__ObjectsCheckedIn> & MFiles$Event__ObjectsCheckedIn & 62;// 62
static +CheckOutObject: Class<MFiles$Event__CheckOutObject> & MFiles$Event__CheckOutObject & 63;// 63
static +ObjectCheckedOut: Class<MFiles$Event__ObjectCheckedOut> & MFiles$Event__ObjectCheckedOut & 64;// 64
static +CheckOutObjects: Class<MFiles$Event__CheckOutObjects> & MFiles$Event__CheckOutObjects & 65;// 65
static +ObjectsCheckedOut: Class<MFiles$Event__ObjectsCheckedOut> & MFiles$Event__ObjectsCheckedOut & 66;// 66
static +UndoObjectCheckout: Class<MFiles$Event__UndoObjectCheckout> & MFiles$Event__UndoObjectCheckout & 67;// 67
static +ObjectCheckoutUndone: Class<MFiles$Event__ObjectCheckoutUndone> & MFiles$Event__ObjectCheckoutUndone & 68;// 68
static +UndoObjectCheckouts: Class<MFiles$Event__UndoObjectCheckouts> & MFiles$Event__UndoObjectCheckouts & 69;// 69
static +ObjectCheckoutsUndone: Class<MFiles$Event__ObjectCheckoutsUndone> & MFiles$Event__ObjectCheckoutsUndone & 70;// 70
static +RollBackObjectVersion: Class<MFiles$Event__RollBackObjectVersion> & MFiles$Event__RollBackObjectVersion & 71;// 71
static +ObjectVersionRolledBack: Class<MFiles$Event__ObjectVersionRolledBack> & MFiles$Event__ObjectVersionRolledBack & 72;// 72
static +SetPropertiesOfObjectVersion: Class<MFiles$Event__SetPropertiesOfObjectVersion> & MFiles$Event__SetPropertiesOfObjectVersion & 73;// 73
static +PropertiesOfObjectVersionSet: Class<MFiles$Event__PropertiesOfObjectVersionSet> & MFiles$Event__PropertiesOfObjectVersionSet & 74;// 74
static +SetPropertiesOfObjectVersions: Class<MFiles$Event__SetPropertiesOfObjectVersions> & MFiles$Event__SetPropertiesOfObjectVersions & 75;// 75
static +PropertiesOfObjectVersionsSet: Class<MFiles$Event__PropertiesOfObjectVersionsSet> & MFiles$Event__PropertiesOfObjectVersionsSet & 76;// 76
static +SetObjectVersionPermissions: Class<MFiles$Event__SetObjectVersionPermissions> & MFiles$Event__SetObjectVersionPermissions & 77;// 77
static +ObjectVersionPermissionsSet: Class<MFiles$Event__ObjectVersionPermissionsSet> & MFiles$Event__ObjectVersionPermissionsSet & 78;// 78
static +AddObjectToFavorites: Class<MFiles$Event__AddObjectToFavorites> & MFiles$Event__AddObjectToFavorites & 79;// 79
static +ObjectAddedToFavorites: Class<MFiles$Event__ObjectAddedToFavorites> & MFiles$Event__ObjectAddedToFavorites & 80;// 80
static +AddObjectsToFavorites: Class<MFiles$Event__AddObjectsToFavorites> & MFiles$Event__AddObjectsToFavorites & 81;// 81
static +ObjectsAddedToFavorites: Class<MFiles$Event__ObjectsAddedToFavorites> & MFiles$Event__ObjectsAddedToFavorites & 82;// 82
static +RemoveObjectFromFavorites: Class<MFiles$Event__RemoveObjectFromFavorites> & MFiles$Event__RemoveObjectFromFavorites & 83;// 83
static +ObjectRemovedFromFavorites: Class<MFiles$Event__ObjectRemovedFromFavorites> & MFiles$Event__ObjectRemovedFromFavorites & 84;// 84
static +RemoveObjectsFromFavorites: Class<MFiles$Event__RemoveObjectsFromFavorites> & MFiles$Event__RemoveObjectsFromFavorites & 85;// 85
static +ObjectsRemovedFromFavorites: Class<MFiles$Event__ObjectsRemovedFromFavorites> & MFiles$Event__ObjectsRemovedFromFavorites & 86;// 86
static +ModifyObjectVersionLabels: Class<MFiles$Event__ModifyObjectVersionLabels> & MFiles$Event__ModifyObjectVersionLabels & 87;// 87
static +ObjectVersionLabelsModified: Class<MFiles$Event__ObjectVersionLabelsModified> & MFiles$Event__ObjectVersionLabelsModified & 88;// 88
static +SetObjectLevelProperty: Class<MFiles$Event__SetObjectLevelProperty> & MFiles$Event__SetObjectLevelProperty & 89;// 89
static +ObjectLevelPropertySet: Class<MFiles$Event__ObjectLevelPropertySet> & MFiles$Event__ObjectLevelPropertySet & 90;// 90
static +SetObjectOfflineAvailability: Class<MFiles$Event__SetObjectOfflineAvailability> & MFiles$Event__SetObjectOfflineAvailability & 91;// 91
static +RemoveObjectOfflineAvailability: Class<MFiles$Event__RemoveObjectOfflineAvailability> & MFiles$Event__RemoveObjectOfflineAvailability & 92;// 92
static +ObjectOfflineAvailabilitySet: Class<MFiles$Event__ObjectOfflineAvailabilitySet> & MFiles$Event__ObjectOfflineAvailabilitySet & 93;// 93
static +ObjectOfflineAvailabilityRemoved: Class<MFiles$Event__ObjectOfflineAvailabilityRemoved> & MFiles$Event__ObjectOfflineAvailabilityRemoved & 94;// 94
static +SwitchToOfflineMode: Class<MFiles$Event__SwitchToOfflineMode> & MFiles$Event__SwitchToOfflineMode & 95;// 95
static +SwitchedToOfflineMode: Class<MFiles$Event__SwitchedToOfflineMode> & MFiles$Event__SwitchedToOfflineMode & 96;// 96
static +SwitchToOnlineMode: Class<MFiles$Event__SwitchToOnlineMode> & MFiles$Event__SwitchToOnlineMode & 97;// 97
static +SwitchedToOnlineMode: Class<MFiles$Event__SwitchedToOnlineMode> & MFiles$Event__SwitchedToOnlineMode & 98;// 98
static +LogOut: Class<MFiles$Event__LogOut> & MFiles$Event__LogOut & 99;// 99
static +ChangeVaultLanguage: Class<MFiles$Event__ChangeVaultLanguage> & MFiles$Event__ChangeVaultLanguage & 100;// 100
static +VaultLanguageChanged: Class<MFiles$Event__VaultLanguageChanged> & MFiles$Event__VaultLanguageChanged & 101;// 101
static +LoggedIn: Class<MFiles$Event__LoggedIn> & MFiles$Event__LoggedIn & 102;// 102
static +QueryCanHandleFocusChangeKey: Class<MFiles$Event__QueryCanHandleFocusChangeKey> & MFiles$Event__QueryCanHandleFocusChangeKey & 103;// 103
static +ItemAdded: Class<MFiles$Event__ItemAdded> & MFiles$Event__ItemAdded & 104;// 104
static +ItemRemoved: Class<MFiles$Event__ItemRemoved> & MFiles$Event__ItemRemoved & 105;// 105
static +ItemReplaced: Class<MFiles$Event__ItemReplaced> & MFiles$Event__ItemReplaced & 106;// 106
static +ItemMoved: Class<MFiles$Event__ItemMoved> & MFiles$Event__ItemMoved & 107;// 107
static +AllItemsCleared: Class<MFiles$Event__AllItemsCleared> & MFiles$Event__AllItemsCleared & 108;// 108
static +ItemsChanged: Class<MFiles$Event__ItemsChanged> & MFiles$Event__ItemsChanged & 109;// 109
static +ChangeValue: Class<MFiles$Event__ChangeValue> & MFiles$Event__ChangeValue & 110;// 110
static +ValueChanged: Class<MFiles$Event__ValueChanged> & MFiles$Event__ValueChanged & 111;// 111
static +ChangeValueRequiredStatus: Class<MFiles$Event__ChangeValueRequiredStatus> & MFiles$Event__ChangeValueRequiredStatus & 112;// 112
static +ValueRequiredStatusChanged: Class<MFiles$Event__ValueRequiredStatusChanged> & MFiles$Event__ValueRequiredStatusChanged & 113;// 113
static +ChangeMustExistStatus: Class<MFiles$Event__ChangeMustExistStatus> & MFiles$Event__ChangeMustExistStatus & 114;// 114
static +MustExistStatusChanged: Class<MFiles$Event__MustExistStatusChanged> & MFiles$Event__MustExistStatusChanged & 115;// 115
static +ChangeReadOnlyStatus: Class<MFiles$Event__ChangeReadOnlyStatus> & MFiles$Event__ChangeReadOnlyStatus & 116;// 116
static +ReadOnlyStatusChanged: Class<MFiles$Event__ReadOnlyStatusChanged> & MFiles$Event__ReadOnlyStatusChanged & 117;// 117
static +AutomaticValueStatusChanged: Class<MFiles$Event__AutomaticValueStatusChanged> & MFiles$Event__AutomaticValueStatusChanged & 118;// 118
static +ChangeVisibility: Class<MFiles$Event__ChangeVisibility> & MFiles$Event__ChangeVisibility & 119;// 119
static +VisibilityChanged: Class<MFiles$Event__VisibilityChanged> & MFiles$Event__VisibilityChanged & 120;// 120
static +ChangeLabel: Class<MFiles$Event__ChangeLabel> & MFiles$Event__ChangeLabel & 121;// 121
static +LabelChanged: Class<MFiles$Event__LabelChanged> & MFiles$Event__LabelChanged & 122;// 122
static +SetModifyFlag: Class<MFiles$Event__SetModifyFlag> & MFiles$Event__SetModifyFlag & 123;// 123
static +ModifyFlagChanged: Class<MFiles$Event__ModifyFlagChanged> & MFiles$Event__ModifyFlagChanged & 124;// 124
static +DataError: Class<MFiles$Event__DataError> & MFiles$Event__DataError & 125;// 125
static +ValueValidationError: Class<MFiles$Event__ValueValidationError> & MFiles$Event__ValueValidationError & 126;// 126
static +SelectionListItemsUpdated: Class<MFiles$Event__SelectionListItemsUpdated> & MFiles$Event__SelectionListItemsUpdated & 127;// 127
static +UpdatingContent: Class<MFiles$Event__UpdatingContent> & MFiles$Event__UpdatingContent & 128;// 128
static +ContentUpdated: Class<MFiles$Event__ContentUpdated> & MFiles$Event__ContentUpdated & 129;// 129
static +InitializingContent: Class<MFiles$Event__InitializingContent> & MFiles$Event__InitializingContent & 130;// 130
static +ContentInitialized: Class<MFiles$Event__ContentInitialized> & MFiles$Event__ContentInitialized & 131;// 131
static +PermissionsChanged: Class<MFiles$Event__PermissionsChanged> & MFiles$Event__PermissionsChanged & 132;// 132
static +IconChanged: Class<MFiles$Event__IconChanged> & MFiles$Event__IconChanged & 133;// 133
static +FilePreviewInfoUpdated: Class<MFiles$Event__FilePreviewInfoUpdated> & MFiles$Event__FilePreviewInfoUpdated & 134;// 134
static +PopOutMetadataCard: Class<MFiles$Event__PopOutMetadataCard> & MFiles$Event__PopOutMetadataCard & 135;// 135
static +MetadataCardPoppedOut: Class<MFiles$Event__MetadataCardPoppedOut> & MFiles$Event__MetadataCardPoppedOut & 136;// 136
static +EnabledStateChanged: Class<MFiles$Event__EnabledStateChanged> & MFiles$Event__EnabledStateChanged & 137;// 137
static +HitHighlightingUpdated: Class<MFiles$Event__HitHighlightingUpdated> & MFiles$Event__HitHighlightingUpdated & 138;// 138
static +RequestActivateView: Class<MFiles$Event__RequestActivateView> & MFiles$Event__RequestActivateView & 139;// 139
static +QueryUIModifiedState: Class<MFiles$Event__QueryUIModifiedState> & MFiles$Event__QueryUIModifiedState & 140;// 140
static +CommitUIModifiedState: Class<MFiles$Event__CommitUIModifiedState> & MFiles$Event__CommitUIModifiedState & 141;// 141
static +OptionValueChanged: Class<MFiles$Event__OptionValueChanged> & MFiles$Event__OptionValueChanged & 142;// 142
static +NameChanged: Class<MFiles$Event__NameChanged> & MFiles$Event__NameChanged & 143;// 143
static +ExplanationChanged: Class<MFiles$Event__ExplanationChanged> & MFiles$Event__ExplanationChanged & 144;// 144
static +ShowTab: Class<MFiles$Event__ShowTab> & MFiles$Event__ShowTab & 145;// 145
static +HideTab: Class<MFiles$Event__HideTab> & MFiles$Event__HideTab & 146;// 146
static +FocusReceived: Class<MFiles$Event__FocusReceived> & MFiles$Event__FocusReceived & 147;// 147
static +FocusLost: Class<MFiles$Event__FocusLost> & MFiles$Event__FocusLost & 148;// 148
static +MetadataCardLocationChanging: Class<MFiles$Event__MetadataCardLocationChanging> & MFiles$Event__MetadataCardLocationChanging & 149;// 149
static +MetadataCardLocationChanged: Class<MFiles$Event__MetadataCardLocationChanged> & MFiles$Event__MetadataCardLocationChanged & 150;// 150
static +ValueSuggestionsChanged: Class<MFiles$Event__ValueSuggestionsChanged> & MFiles$Event__ValueSuggestionsChanged & 151;// 151

}

declare class MFiles$Event__Undefined mixins MFiles$Event {}
declare class MFiles$Event__Notification mixins MFiles$Event {}
declare class MFiles$Event__Started mixins MFiles$Event {}
declare class MFiles$Event__Stop mixins MFiles$Event {}
declare class MFiles$Event__ShowPane mixins MFiles$Event {}
declare class MFiles$Event__HidePane mixins MFiles$Event {}
declare class MFiles$Event__PaneResized mixins MFiles$Event {}
declare class MFiles$Event__NewShellFrame mixins MFiles$Event {}
declare class MFiles$Event__NewNormalShellFrame mixins MFiles$Event {}
declare class MFiles$Event__NewCommonDialogShellFrame mixins MFiles$Event {}
declare class MFiles$Event__NewEmbeddedShellFrame mixins MFiles$Event {}
declare class MFiles$Event__NewTaskPane mixins MFiles$Event {}
declare class MFiles$Event__NewBottomPane mixins MFiles$Event {}
declare class MFiles$Event__NewSearchPane mixins MFiles$Event {}
declare class MFiles$Event__NewRightPane mixins MFiles$Event {}
declare class MFiles$Event__NewShellListing mixins MFiles$Event {}
declare class MFiles$Event__NewCommands mixins MFiles$Event {}
declare class MFiles$Event__ActiveListingChanged mixins MFiles$Event {}
declare class MFiles$Event__NewTab mixins MFiles$Event {}
declare class MFiles$Event__TabSelected mixins MFiles$Event {}
declare class MFiles$Event__TabUnselected mixins MFiles$Event {}
declare class MFiles$Event__MinimizedStateChanged mixins MFiles$Event {}
declare class MFiles$Event__BuiltinCommand mixins MFiles$Event {}
declare class MFiles$Event__CustomCommand mixins MFiles$Event {}
declare class MFiles$Event__SelectionChanged mixins MFiles$Event {}
declare class MFiles$Event__SelectedItemsChanged mixins MFiles$Event {}
declare class MFiles$Event__ContentChanged mixins MFiles$Event {}
declare class MFiles$Event__ShowContextMenu mixins MFiles$Event {}
declare class MFiles$Event__ShowMainMenu mixins MFiles$Event {}
declare class MFiles$Event__ListingActivated mixins MFiles$Event {}
declare class MFiles$Event__ListingDeactivated mixins MFiles$Event {}
declare class MFiles$Event__SearchInitiated mixins MFiles$Event {}
declare class MFiles$Event__SearchReady mixins MFiles$Event {}
declare class MFiles$Event__CloseWindow mixins MFiles$Event {}
declare class MFiles$Event__NewVaultEntry mixins MFiles$Event {}
declare class MFiles$Event__CreateObject mixins MFiles$Event {}
declare class MFiles$Event__ObjectCreated mixins MFiles$Event {}
declare class MFiles$Event__DestroyObject mixins MFiles$Event {}
declare class MFiles$Event__ObjectDestroyed mixins MFiles$Event {}
declare class MFiles$Event__DestroyObjects mixins MFiles$Event {}
declare class MFiles$Event__ObjectsDestroyed mixins MFiles$Event {}
declare class MFiles$Event__DestroyObjectVersion mixins MFiles$Event {}
declare class MFiles$Event__ObjectVersionDestroyed mixins MFiles$Event {}
declare class MFiles$Event__DestroyObjectVersions mixins MFiles$Event {}
declare class MFiles$Event__ObjectVersionsDestroyed mixins MFiles$Event {}
declare class MFiles$Event__RemoveObject mixins MFiles$Event {}
declare class MFiles$Event__ObjectRemoved mixins MFiles$Event {}
declare class MFiles$Event__RemoveObjects mixins MFiles$Event {}
declare class MFiles$Event__ObjectsRemoved mixins MFiles$Event {}
declare class MFiles$Event__UndeleteObject mixins MFiles$Event {}
declare class MFiles$Event__ObjectUndeleted mixins MFiles$Event {}
declare class MFiles$Event__UndeleteObjects mixins MFiles$Event {}
declare class MFiles$Event__ObjectsUndeleted mixins MFiles$Event {}
declare class MFiles$Event__AddObjectFile mixins MFiles$Event {}
declare class MFiles$Event__ObjectFileAdded mixins MFiles$Event {}
declare class MFiles$Event__RemoveObjectFile mixins MFiles$Event {}
declare class MFiles$Event__ObjectFileRemoved mixins MFiles$Event {}
declare class MFiles$Event__RenameObjectFile mixins MFiles$Event {}
declare class MFiles$Event__ObjectFileRenamed mixins MFiles$Event {}
declare class MFiles$Event__CheckInObject mixins MFiles$Event {}
declare class MFiles$Event__ObjectCheckedIn mixins MFiles$Event {}
declare class MFiles$Event__CheckInObjects mixins MFiles$Event {}
declare class MFiles$Event__ObjectsCheckedIn mixins MFiles$Event {}
declare class MFiles$Event__CheckOutObject mixins MFiles$Event {}
declare class MFiles$Event__ObjectCheckedOut mixins MFiles$Event {}
declare class MFiles$Event__CheckOutObjects mixins MFiles$Event {}
declare class MFiles$Event__ObjectsCheckedOut mixins MFiles$Event {}
declare class MFiles$Event__UndoObjectCheckout mixins MFiles$Event {}
declare class MFiles$Event__ObjectCheckoutUndone mixins MFiles$Event {}
declare class MFiles$Event__UndoObjectCheckouts mixins MFiles$Event {}
declare class MFiles$Event__ObjectCheckoutsUndone mixins MFiles$Event {}
declare class MFiles$Event__RollBackObjectVersion mixins MFiles$Event {}
declare class MFiles$Event__ObjectVersionRolledBack mixins MFiles$Event {}
declare class MFiles$Event__SetPropertiesOfObjectVersion mixins MFiles$Event {}
declare class MFiles$Event__PropertiesOfObjectVersionSet mixins MFiles$Event {}
declare class MFiles$Event__SetPropertiesOfObjectVersions mixins MFiles$Event {}
declare class MFiles$Event__PropertiesOfObjectVersionsSet mixins MFiles$Event {}
declare class MFiles$Event__SetObjectVersionPermissions mixins MFiles$Event {}
declare class MFiles$Event__ObjectVersionPermissionsSet mixins MFiles$Event {}
declare class MFiles$Event__AddObjectToFavorites mixins MFiles$Event {}
declare class MFiles$Event__ObjectAddedToFavorites mixins MFiles$Event {}
declare class MFiles$Event__AddObjectsToFavorites mixins MFiles$Event {}
declare class MFiles$Event__ObjectsAddedToFavorites mixins MFiles$Event {}
declare class MFiles$Event__RemoveObjectFromFavorites mixins MFiles$Event {}
declare class MFiles$Event__ObjectRemovedFromFavorites mixins MFiles$Event {}
declare class MFiles$Event__RemoveObjectsFromFavorites mixins MFiles$Event {}
declare class MFiles$Event__ObjectsRemovedFromFavorites mixins MFiles$Event {}
declare class MFiles$Event__ModifyObjectVersionLabels mixins MFiles$Event {}
declare class MFiles$Event__ObjectVersionLabelsModified mixins MFiles$Event {}
declare class MFiles$Event__SetObjectLevelProperty mixins MFiles$Event {}
declare class MFiles$Event__ObjectLevelPropertySet mixins MFiles$Event {}
declare class MFiles$Event__SetObjectOfflineAvailability mixins MFiles$Event {}
declare class MFiles$Event__RemoveObjectOfflineAvailability mixins MFiles$Event {}
declare class MFiles$Event__ObjectOfflineAvailabilitySet mixins MFiles$Event {}
declare class MFiles$Event__ObjectOfflineAvailabilityRemoved mixins MFiles$Event {}
declare class MFiles$Event__SwitchToOfflineMode mixins MFiles$Event {}
declare class MFiles$Event__SwitchedToOfflineMode mixins MFiles$Event {}
declare class MFiles$Event__SwitchToOnlineMode mixins MFiles$Event {}
declare class MFiles$Event__SwitchedToOnlineMode mixins MFiles$Event {}
declare class MFiles$Event__LogOut mixins MFiles$Event {}
declare class MFiles$Event__ChangeVaultLanguage mixins MFiles$Event {}
declare class MFiles$Event__VaultLanguageChanged mixins MFiles$Event {}
declare class MFiles$Event__LoggedIn mixins MFiles$Event {}
declare class MFiles$Event__QueryCanHandleFocusChangeKey mixins MFiles$Event {}
declare class MFiles$Event__ItemAdded mixins MFiles$Event {}
declare class MFiles$Event__ItemRemoved mixins MFiles$Event {}
declare class MFiles$Event__ItemReplaced mixins MFiles$Event {}
declare class MFiles$Event__ItemMoved mixins MFiles$Event {}
declare class MFiles$Event__AllItemsCleared mixins MFiles$Event {}
declare class MFiles$Event__ItemsChanged mixins MFiles$Event {}
declare class MFiles$Event__ChangeValue mixins MFiles$Event {}
declare class MFiles$Event__ValueChanged mixins MFiles$Event {}
declare class MFiles$Event__ChangeValueRequiredStatus mixins MFiles$Event {}
declare class MFiles$Event__ValueRequiredStatusChanged mixins MFiles$Event {}
declare class MFiles$Event__ChangeMustExistStatus mixins MFiles$Event {}
declare class MFiles$Event__MustExistStatusChanged mixins MFiles$Event {}
declare class MFiles$Event__ChangeReadOnlyStatus mixins MFiles$Event {}
declare class MFiles$Event__ReadOnlyStatusChanged mixins MFiles$Event {}
declare class MFiles$Event__AutomaticValueStatusChanged mixins MFiles$Event {}
declare class MFiles$Event__ChangeVisibility mixins MFiles$Event {}
declare class MFiles$Event__VisibilityChanged mixins MFiles$Event {}
declare class MFiles$Event__ChangeLabel mixins MFiles$Event {}
declare class MFiles$Event__LabelChanged mixins MFiles$Event {}
declare class MFiles$Event__SetModifyFlag mixins MFiles$Event {}
declare class MFiles$Event__ModifyFlagChanged mixins MFiles$Event {}
declare class MFiles$Event__DataError mixins MFiles$Event {}
declare class MFiles$Event__ValueValidationError mixins MFiles$Event {}
declare class MFiles$Event__SelectionListItemsUpdated mixins MFiles$Event {}
declare class MFiles$Event__UpdatingContent mixins MFiles$Event {}
declare class MFiles$Event__ContentUpdated mixins MFiles$Event {}
declare class MFiles$Event__InitializingContent mixins MFiles$Event {}
declare class MFiles$Event__ContentInitialized mixins MFiles$Event {}
declare class MFiles$Event__PermissionsChanged mixins MFiles$Event {}
declare class MFiles$Event__IconChanged mixins MFiles$Event {}
declare class MFiles$Event__FilePreviewInfoUpdated mixins MFiles$Event {}
declare class MFiles$Event__PopOutMetadataCard mixins MFiles$Event {}
declare class MFiles$Event__MetadataCardPoppedOut mixins MFiles$Event {}
declare class MFiles$Event__EnabledStateChanged mixins MFiles$Event {}
declare class MFiles$Event__HitHighlightingUpdated mixins MFiles$Event {}
declare class MFiles$Event__RequestActivateView mixins MFiles$Event {}
declare class MFiles$Event__QueryUIModifiedState mixins MFiles$Event {}
declare class MFiles$Event__CommitUIModifiedState mixins MFiles$Event {}
declare class MFiles$Event__OptionValueChanged mixins MFiles$Event {}
declare class MFiles$Event__NameChanged mixins MFiles$Event {}
declare class MFiles$Event__ExplanationChanged mixins MFiles$Event {}
declare class MFiles$Event__ShowTab mixins MFiles$Event {}
declare class MFiles$Event__HideTab mixins MFiles$Event {}
declare class MFiles$Event__FocusReceived mixins MFiles$Event {}
declare class MFiles$Event__FocusLost mixins MFiles$Event {}
declare class MFiles$Event__MetadataCardLocationChanging mixins MFiles$Event {}
declare class MFiles$Event__MetadataCardLocationChanged mixins MFiles$Event {}
declare class MFiles$Event__ValueSuggestionsChanged mixins MFiles$Event {}


declare  class MFiles$ListingEmptinessState {
  constructor(...args: empty): mixed;
static +NotYetKnown: Class<MFiles$ListingEmptinessState__NotYetKnown> & MFiles$ListingEmptinessState__NotYetKnown & 1;// 1
static +NotEmpty: Class<MFiles$ListingEmptinessState__NotEmpty> & MFiles$ListingEmptinessState__NotEmpty & 2;// 2
static +Empty: Class<MFiles$ListingEmptinessState__Empty> & MFiles$ListingEmptinessState__Empty & 3;// 3

}

declare class MFiles$ListingEmptinessState__NotYetKnown mixins MFiles$ListingEmptinessState {}
declare class MFiles$ListingEmptinessState__NotEmpty mixins MFiles$ListingEmptinessState {}
declare class MFiles$ListingEmptinessState__Empty mixins MFiles$ListingEmptinessState {}


declare  class MFiles$MenuLocation {
  constructor(...args: empty): mixed;
static +DefaultCommand: Class<MFiles$MenuLocation__DefaultCommand> & MFiles$MenuLocation__DefaultCommand & 20;// 20
static +Top: Class<MFiles$MenuLocation__Top> & MFiles$MenuLocation__Top & 21;// 21
static +BeforeWindowsCommands: Class<MFiles$MenuLocation__BeforeWindowsCommands> & MFiles$MenuLocation__BeforeWindowsCommands & 22;// 22
static +AfterWindowsCommands: Class<MFiles$MenuLocation__AfterWindowsCommands> & MFiles$MenuLocation__AfterWindowsCommands & 23;// 23
static +ObjectCreation: Class<MFiles$MenuLocation__ObjectCreation> & MFiles$MenuLocation__ObjectCreation & 24;// 24
static +FileCreation: Class<MFiles$MenuLocation__FileCreation> & MFiles$MenuLocation__FileCreation & 25;// 25
static +ObjectOperations: Class<MFiles$MenuLocation__ObjectOperations> & MFiles$MenuLocation__ObjectOperations & 26;// 26
static +FolderSpecific: Class<MFiles$MenuLocation__FolderSpecific> & MFiles$MenuLocation__FolderSpecific & 27;// 27
static +SingleFolderSpecific: Class<MFiles$MenuLocation__SingleFolderSpecific> & MFiles$MenuLocation__SingleFolderSpecific & 28;// 28
static +ViewVisibility: Class<MFiles$MenuLocation__ViewVisibility> & MFiles$MenuLocation__ViewVisibility & 29;// 29
static +Misc1_Top: Class<MFiles$MenuLocation__Misc1_Top> & MFiles$MenuLocation__Misc1_Top & 30;// 30
static +Misc1_Middle: Class<MFiles$MenuLocation__Misc1_Middle> & MFiles$MenuLocation__Misc1_Middle & 31;// 31
static +Misc1_Bottom: Class<MFiles$MenuLocation__Misc1_Bottom> & MFiles$MenuLocation__Misc1_Bottom & 32;// 32
static +HistorySpecific: Class<MFiles$MenuLocation__HistorySpecific> & MFiles$MenuLocation__HistorySpecific & 33;// 33
static +RelationshipsSpecific: Class<MFiles$MenuLocation__RelationshipsSpecific> & MFiles$MenuLocation__RelationshipsSpecific & 34;// 34
static +CollectionMembersSpecific: Class<MFiles$MenuLocation__CollectionMembersSpecific> & MFiles$MenuLocation__CollectionMembersSpecific & 35;// 35
static +Deletion: Class<MFiles$MenuLocation__Deletion> & MFiles$MenuLocation__Deletion & 36;// 36
static +Edit: Class<MFiles$MenuLocation__Edit> & MFiles$MenuLocation__Edit & 37;// 37
static +Misc2_Top: Class<MFiles$MenuLocation__Misc2_Top> & MFiles$MenuLocation__Misc2_Top & 38;// 38
static +Misc2_Middle: Class<MFiles$MenuLocation__Misc2_Middle> & MFiles$MenuLocation__Misc2_Middle & 39;// 39
static +Misc2_Bottom: Class<MFiles$MenuLocation__Misc2_Bottom> & MFiles$MenuLocation__Misc2_Bottom & 40;// 40
static +DocumentConversions: Class<MFiles$MenuLocation__DocumentConversions> & MFiles$MenuLocation__DocumentConversions & 41;// 41
static +BeforeProperties: Class<MFiles$MenuLocation__BeforeProperties> & MFiles$MenuLocation__BeforeProperties & 42;// 42
static +Bottom: Class<MFiles$MenuLocation__Bottom> & MFiles$MenuLocation__Bottom & 43;// 43
static +PropertyFolder: Class<MFiles$MenuLocation__PropertyFolder> & MFiles$MenuLocation__PropertyFolder & 44;// 44

}

declare class MFiles$MenuLocation__DefaultCommand mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Top mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__BeforeWindowsCommands mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__AfterWindowsCommands mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__ObjectCreation mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__FileCreation mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__ObjectOperations mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__FolderSpecific mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__SingleFolderSpecific mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__ViewVisibility mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Misc1_Top mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Misc1_Middle mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Misc1_Bottom mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__HistorySpecific mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__RelationshipsSpecific mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__CollectionMembersSpecific mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Deletion mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Edit mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Misc2_Top mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Misc2_Middle mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Misc2_Bottom mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__DocumentConversions mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__BeforeProperties mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__Bottom mixins MFiles$MenuLocation {}
declare class MFiles$MenuLocation__PropertyFolder mixins MFiles$MenuLocation {}


declare  class MFiles$MFACLComponentOverrideAccess {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFACLComponentOverrideAccess__None> & MFiles$MFACLComponentOverrideAccess__None & 0;// 0
static +Granted: Class<MFiles$MFACLComponentOverrideAccess__Granted> & MFiles$MFACLComponentOverrideAccess__Granted & 1;// 1

}

declare class MFiles$MFACLComponentOverrideAccess__None mixins MFiles$MFACLComponentOverrideAccess {}
declare class MFiles$MFACLComponentOverrideAccess__Granted mixins MFiles$MFACLComponentOverrideAccess {}


declare  class MFiles$MFACLEnforcingMode {
  constructor(...args: empty): mixed;
static +Automatic: Class<MFiles$MFACLEnforcingMode__Automatic> & MFiles$MFACLEnforcingMode__Automatic & 0;// 0
static +Provided: Class<MFiles$MFACLEnforcingMode__Provided> & MFiles$MFACLEnforcingMode__Provided & 1;// 1
static +ResetToDefault: Class<MFiles$MFACLEnforcingMode__ResetToDefault> & MFiles$MFACLEnforcingMode__ResetToDefault & 2;// 2
static +None: Class<MFiles$MFACLEnforcingMode__None> & MFiles$MFACLEnforcingMode__None & 3;// 3

}

declare class MFiles$MFACLEnforcingMode__Automatic mixins MFiles$MFACLEnforcingMode {}
declare class MFiles$MFACLEnforcingMode__Provided mixins MFiles$MFACLEnforcingMode {}
declare class MFiles$MFACLEnforcingMode__ResetToDefault mixins MFiles$MFACLEnforcingMode {}
declare class MFiles$MFACLEnforcingMode__None mixins MFiles$MFACLEnforcingMode {}


declare  class MFiles$MFACLMode {
  constructor(...args: empty): mixed;
static +Simple: Class<MFiles$MFACLMode__Simple> & MFiles$MFACLMode__Simple & 0;// 0
static +AutomaticPermissionsWithComponents: Class<MFiles$MFACLMode__AutomaticPermissionsWithComponents> & MFiles$MFACLMode__AutomaticPermissionsWithComponents & 1;// 1

}

declare class MFiles$MFACLMode__Simple mixins MFiles$MFACLMode {}
declare class MFiles$MFACLMode__AutomaticPermissionsWithComponents mixins MFiles$MFACLMode {}


declare  class MFiles$MFActionType {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFActionType__Unknown> & MFiles$MFActionType__Unknown & 0;// 0
static +CreateAssignment: Class<MFiles$MFActionType__CreateAssignment> & MFiles$MFActionType__CreateAssignment & 1;// 1

}

declare class MFiles$MFActionType__Unknown mixins MFiles$MFActionType {}
declare class MFiles$MFActionType__CreateAssignment mixins MFiles$MFActionType {}


declare  class MFiles$MFAdditionalClassInfoType {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFAdditionalClassInfoType__Unknown> & MFiles$MFAdditionalClassInfoType__Unknown & 0;// 0
static +Assignment: Class<MFiles$MFAdditionalClassInfoType__Assignment> & MFiles$MFAdditionalClassInfoType__Assignment & 1;// 1

}

declare class MFiles$MFAdditionalClassInfoType__Unknown mixins MFiles$MFAdditionalClassInfoType {}
declare class MFiles$MFAdditionalClassInfoType__Assignment mixins MFiles$MFAdditionalClassInfoType {}


declare  class MFiles$MFApplicationLicenseStatus {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFApplicationLicenseStatus__Unknown> & MFiles$MFApplicationLicenseStatus__Unknown & 0;// 0
static +NotNeeded: Class<MFiles$MFApplicationLicenseStatus__NotNeeded> & MFiles$MFApplicationLicenseStatus__NotNeeded & 1;// 1
static +NotInstalled: Class<MFiles$MFApplicationLicenseStatus__NotInstalled> & MFiles$MFApplicationLicenseStatus__NotInstalled & 2;// 2
static +Installed: Class<MFiles$MFApplicationLicenseStatus__Installed> & MFiles$MFApplicationLicenseStatus__Installed & 3;// 3
static +Valid: Class<MFiles$MFApplicationLicenseStatus__Valid> & MFiles$MFApplicationLicenseStatus__Valid & 4;// 4
static +Invalid: Class<MFiles$MFApplicationLicenseStatus__Invalid> & MFiles$MFApplicationLicenseStatus__Invalid & 5;// 5
static +FormatError: Class<MFiles$MFApplicationLicenseStatus__FormatError> & MFiles$MFApplicationLicenseStatus__FormatError & 6;// 6
static +Trial: Class<MFiles$MFApplicationLicenseStatus__Trial> & MFiles$MFApplicationLicenseStatus__Trial & 7;// 7
static +GracePeriod: Class<MFiles$MFApplicationLicenseStatus__GracePeriod> & MFiles$MFApplicationLicenseStatus__GracePeriod & 8;// 8

}

declare class MFiles$MFApplicationLicenseStatus__Unknown mixins MFiles$MFApplicationLicenseStatus {}
declare class MFiles$MFApplicationLicenseStatus__NotNeeded mixins MFiles$MFApplicationLicenseStatus {}
declare class MFiles$MFApplicationLicenseStatus__NotInstalled mixins MFiles$MFApplicationLicenseStatus {}
declare class MFiles$MFApplicationLicenseStatus__Installed mixins MFiles$MFApplicationLicenseStatus {}
declare class MFiles$MFApplicationLicenseStatus__Valid mixins MFiles$MFApplicationLicenseStatus {}
declare class MFiles$MFApplicationLicenseStatus__Invalid mixins MFiles$MFApplicationLicenseStatus {}
declare class MFiles$MFApplicationLicenseStatus__FormatError mixins MFiles$MFApplicationLicenseStatus {}
declare class MFiles$MFApplicationLicenseStatus__Trial mixins MFiles$MFApplicationLicenseStatus {}
declare class MFiles$MFApplicationLicenseStatus__GracePeriod mixins MFiles$MFApplicationLicenseStatus {}


declare  class MFiles$MFAssignmentType {
  constructor(...args: empty): mixed;
static +Task: Class<MFiles$MFAssignmentType__Task> & MFiles$MFAssignmentType__Task & 0;// 0
static +Approval: Class<MFiles$MFAssignmentType__Approval> & MFiles$MFAssignmentType__Approval & 1;// 1

}

declare class MFiles$MFAssignmentType__Task mixins MFiles$MFAssignmentType {}
declare class MFiles$MFAssignmentType__Approval mixins MFiles$MFAssignmentType {}


declare  class MFiles$MFAttachVaultOptionsFlag {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFAttachVaultOptionsFlag__None> & MFiles$MFAttachVaultOptionsFlag__None & 0;// 0
static +ExternalObjectTypes: Class<MFiles$MFAttachVaultOptionsFlag__ExternalObjectTypes> & MFiles$MFAttachVaultOptionsFlag__ExternalObjectTypes & 1;// 1
static +ExternalSources: Class<MFiles$MFAttachVaultOptionsFlag__ExternalSources> & MFiles$MFAttachVaultOptionsFlag__ExternalSources & 2;// 2
static +ExportedDataSets: Class<MFiles$MFAttachVaultOptionsFlag__ExportedDataSets> & MFiles$MFAttachVaultOptionsFlag__ExportedDataSets & 4;// 4
static +ExportImportJobs: Class<MFiles$MFAttachVaultOptionsFlag__ExportImportJobs> & MFiles$MFAttachVaultOptionsFlag__ExportImportJobs & 8;// 8
static +ExternalUserGroups: Class<MFiles$MFAttachVaultOptionsFlag__ExternalUserGroups> & MFiles$MFAttachVaultOptionsFlag__ExternalUserGroups & 16;// 16
static +EventHandlers: Class<MFiles$MFAttachVaultOptionsFlag__EventHandlers> & MFiles$MFAttachVaultOptionsFlag__EventHandlers & 32;// 32

}

declare class MFiles$MFAttachVaultOptionsFlag__None mixins MFiles$MFAttachVaultOptionsFlag {}
declare class MFiles$MFAttachVaultOptionsFlag__ExternalObjectTypes mixins MFiles$MFAttachVaultOptionsFlag {}
declare class MFiles$MFAttachVaultOptionsFlag__ExternalSources mixins MFiles$MFAttachVaultOptionsFlag {}
declare class MFiles$MFAttachVaultOptionsFlag__ExportedDataSets mixins MFiles$MFAttachVaultOptionsFlag {}
declare class MFiles$MFAttachVaultOptionsFlag__ExportImportJobs mixins MFiles$MFAttachVaultOptionsFlag {}
declare class MFiles$MFAttachVaultOptionsFlag__ExternalUserGroups mixins MFiles$MFAttachVaultOptionsFlag {}
declare class MFiles$MFAttachVaultOptionsFlag__EventHandlers mixins MFiles$MFAttachVaultOptionsFlag {}


declare  class MFiles$MFAuthType {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFAuthType__Unknown> & MFiles$MFAuthType__Unknown & 0;// 0
static +LoggedOnWindowsUser: Class<MFiles$MFAuthType__LoggedOnWindowsUser> & MFiles$MFAuthType__LoggedOnWindowsUser & 1;// 1
static +SpecificWindowsUser: Class<MFiles$MFAuthType__SpecificWindowsUser> & MFiles$MFAuthType__SpecificWindowsUser & 2;// 2
static +SpecificMFilesUser: Class<MFiles$MFAuthType__SpecificMFilesUser> & MFiles$MFAuthType__SpecificMFilesUser & 3;// 3

}

declare class MFiles$MFAuthType__Unknown mixins MFiles$MFAuthType {}
declare class MFiles$MFAuthType__LoggedOnWindowsUser mixins MFiles$MFAuthType {}
declare class MFiles$MFAuthType__SpecificWindowsUser mixins MFiles$MFAuthType {}
declare class MFiles$MFAuthType__SpecificMFilesUser mixins MFiles$MFAuthType {}


declare  class MFiles$MFAutomaticPermissionsOperationOptions {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFAutomaticPermissionsOperationOptions__None> & MFiles$MFAutomaticPermissionsOperationOptions__None & 0;// 0
static +ForceActive: Class<MFiles$MFAutomaticPermissionsOperationOptions__ForceActive> & MFiles$MFAutomaticPermissionsOperationOptions__ForceActive & 1;// 1

}

declare class MFiles$MFAutomaticPermissionsOperationOptions__None mixins MFiles$MFAutomaticPermissionsOperationOptions {}
declare class MFiles$MFAutomaticPermissionsOperationOptions__ForceActive mixins MFiles$MFAutomaticPermissionsOperationOptions {}


declare  class MFiles$MFAutomaticValueType {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFAutomaticValueType__None> & MFiles$MFAutomaticValueType__None & 0;// 0
static +CalculatedWithPlaceholders: Class<MFiles$MFAutomaticValueType__CalculatedWithPlaceholders> & MFiles$MFAutomaticValueType__CalculatedWithPlaceholders & 1;// 1
static +CalculatedWithVBScript: Class<MFiles$MFAutomaticValueType__CalculatedWithVBScript> & MFiles$MFAutomaticValueType__CalculatedWithVBScript & 2;// 2
static +AutoNumberSimple: Class<MFiles$MFAutomaticValueType__AutoNumberSimple> & MFiles$MFAutomaticValueType__AutoNumberSimple & 3;// 3
static +WithVBScript: Class<MFiles$MFAutomaticValueType__WithVBScript> & MFiles$MFAutomaticValueType__WithVBScript & 4;// 4

}

declare class MFiles$MFAutomaticValueType__None mixins MFiles$MFAutomaticValueType {}
declare class MFiles$MFAutomaticValueType__CalculatedWithPlaceholders mixins MFiles$MFAutomaticValueType {}
declare class MFiles$MFAutomaticValueType__CalculatedWithVBScript mixins MFiles$MFAutomaticValueType {}
declare class MFiles$MFAutomaticValueType__AutoNumberSimple mixins MFiles$MFAutomaticValueType {}
declare class MFiles$MFAutomaticValueType__WithVBScript mixins MFiles$MFAutomaticValueType {}


declare  class MFiles$MFAutoStateTransitionMode {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFAutoStateTransitionMode__None> & MFiles$MFAutoStateTransitionMode__None & 0;// 0
static +RelativeTime: Class<MFiles$MFAutoStateTransitionMode__RelativeTime> & MFiles$MFAutoStateTransitionMode__RelativeTime & 1;// 1
static +AssignmentCompleteOne: Class<MFiles$MFAutoStateTransitionMode__AssignmentCompleteOne> & MFiles$MFAutoStateTransitionMode__AssignmentCompleteOne & 2;// 2
static +AssignmentCompleteAll: Class<MFiles$MFAutoStateTransitionMode__AssignmentCompleteAll> & MFiles$MFAutoStateTransitionMode__AssignmentCompleteAll & 3;// 3
static +CriteriaFulfilled: Class<MFiles$MFAutoStateTransitionMode__CriteriaFulfilled> & MFiles$MFAutoStateTransitionMode__CriteriaFulfilled & 4;// 4
static +AllowedByScript: Class<MFiles$MFAutoStateTransitionMode__AllowedByScript> & MFiles$MFAutoStateTransitionMode__AllowedByScript & 5;// 5
static +AssignmentComplete: Class<MFiles$MFAutoStateTransitionMode__AssignmentComplete> & MFiles$MFAutoStateTransitionMode__AssignmentComplete & 6;// 6
static +AssignmentRejected: Class<MFiles$MFAutoStateTransitionMode__AssignmentRejected> & MFiles$MFAutoStateTransitionMode__AssignmentRejected & 7;// 7

}

declare class MFiles$MFAutoStateTransitionMode__None mixins MFiles$MFAutoStateTransitionMode {}
declare class MFiles$MFAutoStateTransitionMode__RelativeTime mixins MFiles$MFAutoStateTransitionMode {}
declare class MFiles$MFAutoStateTransitionMode__AssignmentCompleteOne mixins MFiles$MFAutoStateTransitionMode {}
declare class MFiles$MFAutoStateTransitionMode__AssignmentCompleteAll mixins MFiles$MFAutoStateTransitionMode {}
declare class MFiles$MFAutoStateTransitionMode__CriteriaFulfilled mixins MFiles$MFAutoStateTransitionMode {}
declare class MFiles$MFAutoStateTransitionMode__AllowedByScript mixins MFiles$MFAutoStateTransitionMode {}
declare class MFiles$MFAutoStateTransitionMode__AssignmentComplete mixins MFiles$MFAutoStateTransitionMode {}
declare class MFiles$MFAutoStateTransitionMode__AssignmentRejected mixins MFiles$MFAutoStateTransitionMode {}


declare  class MFiles$MFBackupType {
  constructor(...args: empty): mixed;
static +Full: Class<MFiles$MFBackupType__Full> & MFiles$MFBackupType__Full & 0;// 0
static +Differential: Class<MFiles$MFBackupType__Differential> & MFiles$MFBackupType__Differential & 1;// 1

}

declare class MFiles$MFBackupType__Full mixins MFiles$MFBackupType {}
declare class MFiles$MFBackupType__Differential mixins MFiles$MFBackupType {}


declare  class MFiles$MFBuiltInDocumentClass {
  constructor(...args: empty): mixed;
static +UnclassifiedDocument: Class<MFiles$MFBuiltInDocumentClass__UnclassifiedDocument> & MFiles$MFBuiltInDocumentClass__UnclassifiedDocument & 0;// 0
static +OtherDocument: Class<MFiles$MFBuiltInDocumentClass__OtherDocument> & MFiles$MFBuiltInDocumentClass__OtherDocument & 1;// 1

}

declare class MFiles$MFBuiltInDocumentClass__UnclassifiedDocument mixins MFiles$MFBuiltInDocumentClass {}
declare class MFiles$MFBuiltInDocumentClass__OtherDocument mixins MFiles$MFBuiltInDocumentClass {}


declare  class MFiles$MFBuiltInMetadataStructureItemID {
  constructor(...args: empty): mixed;
static +All: Class<MFiles$MFBuiltInMetadataStructureItemID__All> & MFiles$MFBuiltInMetadataStructureItemID__All & -1000000;// -1000000

}

declare class MFiles$MFBuiltInMetadataStructureItemID__All mixins MFiles$MFBuiltInMetadataStructureItemID {}


declare  class MFiles$MFBuiltInObjectClass {
  constructor(...args: empty): mixed;
static +Any: Class<MFiles$MFBuiltInObjectClass__Any> & MFiles$MFBuiltInObjectClass__Any & -3;// -3
static +NotSet: Class<MFiles$MFBuiltInObjectClass__NotSet> & MFiles$MFBuiltInObjectClass__NotSet & -2;// -2
static +GenericAssignment: Class<MFiles$MFBuiltInObjectClass__GenericAssignment> & MFiles$MFBuiltInObjectClass__GenericAssignment & -100;// -100

}

declare class MFiles$MFBuiltInObjectClass__Any mixins MFiles$MFBuiltInObjectClass {}
declare class MFiles$MFBuiltInObjectClass__NotSet mixins MFiles$MFBuiltInObjectClass {}
declare class MFiles$MFBuiltInObjectClass__GenericAssignment mixins MFiles$MFBuiltInObjectClass {}


declare  class MFiles$MFBuiltInObjectType {
  constructor(...args: empty): mixed;
static +Document: Class<MFiles$MFBuiltInObjectType__Document> & MFiles$MFBuiltInObjectType__Document & 0;// 0
static +DocumentCollection: Class<MFiles$MFBuiltInObjectType__DocumentCollection> & MFiles$MFBuiltInObjectType__DocumentCollection & 9;// 9
static +Assignment: Class<MFiles$MFBuiltInObjectType__Assignment> & MFiles$MFBuiltInObjectType__Assignment & 10;// 10
static +DocumentOrDocumentCollection: Class<MFiles$MFBuiltInObjectType__DocumentOrDocumentCollection> & MFiles$MFBuiltInObjectType__DocumentOrDocumentCollection & -102;// -102

}

declare class MFiles$MFBuiltInObjectType__Document mixins MFiles$MFBuiltInObjectType {}
declare class MFiles$MFBuiltInObjectType__DocumentCollection mixins MFiles$MFBuiltInObjectType {}
declare class MFiles$MFBuiltInObjectType__Assignment mixins MFiles$MFBuiltInObjectType {}
declare class MFiles$MFBuiltInObjectType__DocumentOrDocumentCollection mixins MFiles$MFBuiltInObjectType {}


declare  class MFiles$MFBuiltInPropertyDef {
  constructor(...args: empty): mixed;
static +NameOrTitle: Class<MFiles$MFBuiltInPropertyDef__NameOrTitle> & MFiles$MFBuiltInPropertyDef__NameOrTitle & 0;// 0
static +Created: Class<MFiles$MFBuiltInPropertyDef__Created> & MFiles$MFBuiltInPropertyDef__Created & 20;// 20
static +LastModified: Class<MFiles$MFBuiltInPropertyDef__LastModified> & MFiles$MFBuiltInPropertyDef__LastModified & 21;// 21
static +SingleFileObject: Class<MFiles$MFBuiltInPropertyDef__SingleFileObject> & MFiles$MFBuiltInPropertyDef__SingleFileObject & 22;// 22
static +LastModifiedBy: Class<MFiles$MFBuiltInPropertyDef__LastModifiedBy> & MFiles$MFBuiltInPropertyDef__LastModifiedBy & 23;// 23
static +StatusChanged: Class<MFiles$MFBuiltInPropertyDef__StatusChanged> & MFiles$MFBuiltInPropertyDef__StatusChanged & 24;// 24
static +CreatedBy: Class<MFiles$MFBuiltInPropertyDef__CreatedBy> & MFiles$MFBuiltInPropertyDef__CreatedBy & 25;// 25
static +Keywords: Class<MFiles$MFBuiltInPropertyDef__Keywords> & MFiles$MFBuiltInPropertyDef__Keywords & 26;// 26
static +Deleted: Class<MFiles$MFBuiltInPropertyDef__Deleted> & MFiles$MFBuiltInPropertyDef__Deleted & 27;// 27
static +DeletedBy: Class<MFiles$MFBuiltInPropertyDef__DeletedBy> & MFiles$MFBuiltInPropertyDef__DeletedBy & 28;// 28
static +VersionLabel: Class<MFiles$MFBuiltInPropertyDef__VersionLabel> & MFiles$MFBuiltInPropertyDef__VersionLabel & 29;// 29
static +SizeOnServerThisVersion: Class<MFiles$MFBuiltInPropertyDef__SizeOnServerThisVersion> & MFiles$MFBuiltInPropertyDef__SizeOnServerThisVersion & 30;// 30
static +SizeOnServerAllVersions: Class<MFiles$MFBuiltInPropertyDef__SizeOnServerAllVersions> & MFiles$MFBuiltInPropertyDef__SizeOnServerAllVersions & 31;// 31
static +MarkedForArchiving: Class<MFiles$MFBuiltInPropertyDef__MarkedForArchiving> & MFiles$MFBuiltInPropertyDef__MarkedForArchiving & 32;// 32
static +VersionComment: Class<MFiles$MFBuiltInPropertyDef__VersionComment> & MFiles$MFBuiltInPropertyDef__VersionComment & 33;// 33
static +Comment: Class<MFiles$MFBuiltInPropertyDef__Comment> & MFiles$MFBuiltInPropertyDef__Comment & 33;// 33
static +TraditionalFolder: Class<MFiles$MFBuiltInPropertyDef__TraditionalFolder> & MFiles$MFBuiltInPropertyDef__TraditionalFolder & 34;// 34
static +CreatedFromExternalLocation: Class<MFiles$MFBuiltInPropertyDef__CreatedFromExternalLocation> & MFiles$MFBuiltInPropertyDef__CreatedFromExternalLocation & 35;// 35
static +AdditionalClasses: Class<MFiles$MFBuiltInPropertyDef__AdditionalClasses> & MFiles$MFBuiltInPropertyDef__AdditionalClasses & 36;// 36
static +IsTemplate: Class<MFiles$MFBuiltInPropertyDef__IsTemplate> & MFiles$MFBuiltInPropertyDef__IsTemplate & 37;// 37
static +Workflow: Class<MFiles$MFBuiltInPropertyDef__Workflow> & MFiles$MFBuiltInPropertyDef__Workflow & 38;// 38
static +State: Class<MFiles$MFBuiltInPropertyDef__State> & MFiles$MFBuiltInPropertyDef__State & 39;// 39
static +StateEntered: Class<MFiles$MFBuiltInPropertyDef__StateEntered> & MFiles$MFBuiltInPropertyDef__StateEntered & 40;// 40
static +AssignmentDescription: Class<MFiles$MFBuiltInPropertyDef__AssignmentDescription> & MFiles$MFBuiltInPropertyDef__AssignmentDescription & 41;// 41
static +Deadline: Class<MFiles$MFBuiltInPropertyDef__Deadline> & MFiles$MFBuiltInPropertyDef__Deadline & 42;// 42
static +MonitoredBy: Class<MFiles$MFBuiltInPropertyDef__MonitoredBy> & MFiles$MFBuiltInPropertyDef__MonitoredBy & 43;// 43
static +AssignedTo: Class<MFiles$MFBuiltInPropertyDef__AssignedTo> & MFiles$MFBuiltInPropertyDef__AssignedTo & 44;// 44
static +CompletedBy: Class<MFiles$MFBuiltInPropertyDef__CompletedBy> & MFiles$MFBuiltInPropertyDef__CompletedBy & 45;// 45
static +CollectionMemberDocuments: Class<MFiles$MFBuiltInPropertyDef__CollectionMemberDocuments> & MFiles$MFBuiltInPropertyDef__CollectionMemberDocuments & 46;// 46
static +CollectionMemberCollections: Class<MFiles$MFBuiltInPropertyDef__CollectionMemberCollections> & MFiles$MFBuiltInPropertyDef__CollectionMemberCollections & 47;// 47
static +Constituent: Class<MFiles$MFBuiltInPropertyDef__Constituent> & MFiles$MFBuiltInPropertyDef__Constituent & 48;// 48
static +OriginalPath: Class<MFiles$MFBuiltInPropertyDef__OriginalPath> & MFiles$MFBuiltInPropertyDef__OriginalPath & 75;// 75
static +Reference: Class<MFiles$MFBuiltInPropertyDef__Reference> & MFiles$MFBuiltInPropertyDef__Reference & 76;// 76
static +OriginalPath2: Class<MFiles$MFBuiltInPropertyDef__OriginalPath2> & MFiles$MFBuiltInPropertyDef__OriginalPath2 & 77;// 77
static +OriginalPath3: Class<MFiles$MFBuiltInPropertyDef__OriginalPath3> & MFiles$MFBuiltInPropertyDef__OriginalPath3 & 78;// 78
static +WorkflowAssignment: Class<MFiles$MFBuiltInPropertyDef__WorkflowAssignment> & MFiles$MFBuiltInPropertyDef__WorkflowAssignment & 79;// 79
static +AccessedByMe: Class<MFiles$MFBuiltInPropertyDef__AccessedByMe> & MFiles$MFBuiltInPropertyDef__AccessedByMe & 81;// 81
static +FavoriteView: Class<MFiles$MFBuiltInPropertyDef__FavoriteView> & MFiles$MFBuiltInPropertyDef__FavoriteView & 82;// 82
static +MessageID: Class<MFiles$MFBuiltInPropertyDef__MessageID> & MFiles$MFBuiltInPropertyDef__MessageID & 83;// 83
static +InReplyTo: Class<MFiles$MFBuiltInPropertyDef__InReplyTo> & MFiles$MFBuiltInPropertyDef__InReplyTo & 84;// 84
static +InReplyToReference: Class<MFiles$MFBuiltInPropertyDef__InReplyToReference> & MFiles$MFBuiltInPropertyDef__InReplyToReference & 85;// 85
static +SignatureManifestation: Class<MFiles$MFBuiltInPropertyDef__SignatureManifestation> & MFiles$MFBuiltInPropertyDef__SignatureManifestation & 86;// 86
static +ReportURL: Class<MFiles$MFBuiltInPropertyDef__ReportURL> & MFiles$MFBuiltInPropertyDef__ReportURL & 87;// 87
static +ReportPlacement: Class<MFiles$MFBuiltInPropertyDef__ReportPlacement> & MFiles$MFBuiltInPropertyDef__ReportPlacement & 88;// 88
static +ObjectChanged: Class<MFiles$MFBuiltInPropertyDef__ObjectChanged> & MFiles$MFBuiltInPropertyDef__ObjectChanged & 89;// 89
static +ACLChanged: Class<MFiles$MFBuiltInPropertyDef__ACLChanged> & MFiles$MFBuiltInPropertyDef__ACLChanged & 90;// 90
static +VersionLabelChanged: Class<MFiles$MFBuiltInPropertyDef__VersionLabelChanged> & MFiles$MFBuiltInPropertyDef__VersionLabelChanged & 91;// 91
static +VersionCommentChanged: Class<MFiles$MFBuiltInPropertyDef__VersionCommentChanged> & MFiles$MFBuiltInPropertyDef__VersionCommentChanged & 92;// 92
static +DeletionStatusChanged: Class<MFiles$MFBuiltInPropertyDef__DeletionStatusChanged> & MFiles$MFBuiltInPropertyDef__DeletionStatusChanged & 93;// 93
static +VaultGUID: Class<MFiles$MFBuiltInPropertyDef__VaultGUID> & MFiles$MFBuiltInPropertyDef__VaultGUID & 94;// 94
static +SharedFiles: Class<MFiles$MFBuiltInPropertyDef__SharedFiles> & MFiles$MFBuiltInPropertyDef__SharedFiles & 95;// 95
static +ConflictResolved: Class<MFiles$MFBuiltInPropertyDef__ConflictResolved> & MFiles$MFBuiltInPropertyDef__ConflictResolved & 96;// 96
static +RejectedBy: Class<MFiles$MFBuiltInPropertyDef__RejectedBy> & MFiles$MFBuiltInPropertyDef__RejectedBy & 97;// 97
static +Completed: Class<MFiles$MFBuiltInPropertyDef__Completed> & MFiles$MFBuiltInPropertyDef__Completed & 98;// 98
static +StateTransition: Class<MFiles$MFBuiltInPropertyDef__StateTransition> & MFiles$MFBuiltInPropertyDef__StateTransition & 99;// 99
static +Class: Class<MFiles$MFBuiltInPropertyDef__Class> & MFiles$MFBuiltInPropertyDef__Class & 100;// 100
static +ClassGroups: Class<MFiles$MFBuiltInPropertyDef__ClassGroups> & MFiles$MFBuiltInPropertyDef__ClassGroups & 101;// 101
static +ObjectID: Class<MFiles$MFBuiltInPropertyDef__ObjectID> & MFiles$MFBuiltInPropertyDef__ObjectID & -102;// -102

}

declare class MFiles$MFBuiltInPropertyDef__NameOrTitle mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Created mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__LastModified mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__SingleFileObject mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__LastModifiedBy mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__StatusChanged mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__CreatedBy mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Keywords mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Deleted mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__DeletedBy mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__VersionLabel mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__SizeOnServerThisVersion mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__SizeOnServerAllVersions mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__MarkedForArchiving mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__VersionComment mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Comment mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__TraditionalFolder mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__CreatedFromExternalLocation mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__AdditionalClasses mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__IsTemplate mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Workflow mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__State mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__StateEntered mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__AssignmentDescription mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Deadline mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__MonitoredBy mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__AssignedTo mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__CompletedBy mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__CollectionMemberDocuments mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__CollectionMemberCollections mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Constituent mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__OriginalPath mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Reference mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__OriginalPath2 mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__OriginalPath3 mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__WorkflowAssignment mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__AccessedByMe mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__FavoriteView mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__MessageID mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__InReplyTo mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__InReplyToReference mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__SignatureManifestation mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__ReportURL mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__ReportPlacement mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__ObjectChanged mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__ACLChanged mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__VersionLabelChanged mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__VersionCommentChanged mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__DeletionStatusChanged mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__VaultGUID mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__SharedFiles mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__ConflictResolved mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__RejectedBy mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Completed mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__StateTransition mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__Class mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__ClassGroups mixins MFiles$MFBuiltInPropertyDef {}
declare class MFiles$MFBuiltInPropertyDef__ObjectID mixins MFiles$MFBuiltInPropertyDef {}


declare  class MFiles$MFBuiltInUserGroup {
  constructor(...args: empty): mixed;
static +Users: Class<MFiles$MFBuiltInUserGroup__Users> & MFiles$MFBuiltInUserGroup__Users & 1;// 1
static +AndExternalUsers: Class<MFiles$MFBuiltInUserGroup__AndExternalUsers> & MFiles$MFBuiltInUserGroup__AndExternalUsers & 2;// 2

}

declare class MFiles$MFBuiltInUserGroup__Users mixins MFiles$MFBuiltInUserGroup {}
declare class MFiles$MFBuiltInUserGroup__AndExternalUsers mixins MFiles$MFBuiltInUserGroup {}


declare  class MFiles$MFBuiltInValueList {
  constructor(...args: empty): mixed;
static +Documents: Class<MFiles$MFBuiltInValueList__Documents> & MFiles$MFBuiltInValueList__Documents & 0;// 0
static +Classes: Class<MFiles$MFBuiltInValueList__Classes> & MFiles$MFBuiltInValueList__Classes & 1;// 1
static +ClassGroups: Class<MFiles$MFBuiltInValueList__ClassGroups> & MFiles$MFBuiltInValueList__ClassGroups & 2;// 2
static +VersionLabels: Class<MFiles$MFBuiltInValueList__VersionLabels> & MFiles$MFBuiltInValueList__VersionLabels & 3;// 3
static +TraditionalFolders: Class<MFiles$MFBuiltInValueList__TraditionalFolders> & MFiles$MFBuiltInValueList__TraditionalFolders & 4;// 4
static +ExternalLocations: Class<MFiles$MFBuiltInValueList__ExternalLocations> & MFiles$MFBuiltInValueList__ExternalLocations & 5;// 5
static +Users: Class<MFiles$MFBuiltInValueList__Users> & MFiles$MFBuiltInValueList__Users & 6;// 6
static +Workflows: Class<MFiles$MFBuiltInValueList__Workflows> & MFiles$MFBuiltInValueList__Workflows & 7;// 7
static +States: Class<MFiles$MFBuiltInValueList__States> & MFiles$MFBuiltInValueList__States & 8;// 8
static +Collections: Class<MFiles$MFBuiltInValueList__Collections> & MFiles$MFBuiltInValueList__Collections & 9;// 9
static +Assignments: Class<MFiles$MFBuiltInValueList__Assignments> & MFiles$MFBuiltInValueList__Assignments & 10;// 10
static +UserGroups: Class<MFiles$MFBuiltInValueList__UserGroups> & MFiles$MFBuiltInValueList__UserGroups & 16;// 16
static +StateTransitions: Class<MFiles$MFBuiltInValueList__StateTransitions> & MFiles$MFBuiltInValueList__StateTransitions & 17;// 17

}

declare class MFiles$MFBuiltInValueList__Documents mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__Classes mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__ClassGroups mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__VersionLabels mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__TraditionalFolders mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__ExternalLocations mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__Users mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__Workflows mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__States mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__Collections mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__Assignments mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__UserGroups mixins MFiles$MFBuiltInValueList {}
declare class MFiles$MFBuiltInValueList__StateTransitions mixins MFiles$MFBuiltInValueList {}


declare  class MFiles$MFBuiltInView {
  constructor(...args: empty): mixed;
static +CheckedOutToCurrentUser: Class<MFiles$MFBuiltInView__CheckedOutToCurrentUser> & MFiles$MFBuiltInView__CheckedOutToCurrentUser & 5;// 5
static +Offline: Class<MFiles$MFBuiltInView__Offline> & MFiles$MFBuiltInView__Offline & 6;// 6
static +RecentlyModifiedByMe: Class<MFiles$MFBuiltInView__RecentlyModifiedByMe> & MFiles$MFBuiltInView__RecentlyModifiedByMe & 7;// 7
static +Templates: Class<MFiles$MFBuiltInView__Templates> & MFiles$MFBuiltInView__Templates & 8;// 8
static +AssignedToMe: Class<MFiles$MFBuiltInView__AssignedToMe> & MFiles$MFBuiltInView__AssignedToMe & 9;// 9
static +LatestSearches: Class<MFiles$MFBuiltInView__LatestSearches> & MFiles$MFBuiltInView__LatestSearches & 11;// 11
static +ByID: Class<MFiles$MFBuiltInView__ByID> & MFiles$MFBuiltInView__ByID & 12;// 12
static +BuiltIn: Class<MFiles$MFBuiltInView__BuiltIn> & MFiles$MFBuiltInView__BuiltIn & 13;// 13
static +RecentlyAccessedByMe: Class<MFiles$MFBuiltInView__RecentlyAccessedByMe> & MFiles$MFBuiltInView__RecentlyAccessedByMe & 14;// 14
static +Favorites: Class<MFiles$MFBuiltInView__Favorites> & MFiles$MFBuiltInView__Favorites & 15;// 15
static +AnyView: Class<MFiles$MFBuiltInView__AnyView> & MFiles$MFBuiltInView__AnyView & -1;// -1
static +OfflineCheckedOut: Class<MFiles$MFBuiltInView__OfflineCheckedOut> & MFiles$MFBuiltInView__OfflineCheckedOut & -9000;// -9000
static +OfflineMarkedForOfflineAvailability: Class<MFiles$MFBuiltInView__OfflineMarkedForOfflineAvailability> & MFiles$MFBuiltInView__OfflineMarkedForOfflineAvailability & -9001;// -9001

}

declare class MFiles$MFBuiltInView__CheckedOutToCurrentUser mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__Offline mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__RecentlyModifiedByMe mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__Templates mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__AssignedToMe mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__LatestSearches mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__ByID mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__BuiltIn mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__RecentlyAccessedByMe mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__Favorites mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__AnyView mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__OfflineCheckedOut mixins MFiles$MFBuiltInView {}
declare class MFiles$MFBuiltInView__OfflineMarkedForOfflineAvailability mixins MFiles$MFBuiltInView {}


declare  class MFiles$MFConditionType {
  constructor(...args: empty): mixed;
static +Equal: Class<MFiles$MFConditionType__Equal> & MFiles$MFConditionType__Equal & 1;// 1
static +NotEqual: Class<MFiles$MFConditionType__NotEqual> & MFiles$MFConditionType__NotEqual & 2;// 2
static +GreaterThan: Class<MFiles$MFConditionType__GreaterThan> & MFiles$MFConditionType__GreaterThan & 3;// 3
static +LessThan: Class<MFiles$MFConditionType__LessThan> & MFiles$MFConditionType__LessThan & 4;// 4
static +GreaterThanOrEqual: Class<MFiles$MFConditionType__GreaterThanOrEqual> & MFiles$MFConditionType__GreaterThanOrEqual & 5;// 5
static +LessThanOrEqual: Class<MFiles$MFConditionType__LessThanOrEqual> & MFiles$MFConditionType__LessThanOrEqual & 6;// 6
static +Contains: Class<MFiles$MFConditionType__Contains> & MFiles$MFConditionType__Contains & 7;// 7
static +DoesNotContain: Class<MFiles$MFConditionType__DoesNotContain> & MFiles$MFConditionType__DoesNotContain & 8;// 8
static +StartsWith: Class<MFiles$MFConditionType__StartsWith> & MFiles$MFConditionType__StartsWith & 9;// 9
static +DoesNotStartWith: Class<MFiles$MFConditionType__DoesNotStartWith> & MFiles$MFConditionType__DoesNotStartWith & 10;// 10
static +MatchesWildcardPattern: Class<MFiles$MFConditionType__MatchesWildcardPattern> & MFiles$MFConditionType__MatchesWildcardPattern & 11;// 11
static +DoesNotMatchWildcardPattern: Class<MFiles$MFConditionType__DoesNotMatchWildcardPattern> & MFiles$MFConditionType__DoesNotMatchWildcardPattern & 12;// 12
static +IsMissing: Class<MFiles$MFConditionType__IsMissing> & MFiles$MFConditionType__IsMissing & 13;// 13
static +IsNotMissing: Class<MFiles$MFConditionType__IsNotMissing> & MFiles$MFConditionType__IsNotMissing & 14;// 14
static +StartsWithAtWordBoundary: Class<MFiles$MFConditionType__StartsWithAtWordBoundary> & MFiles$MFConditionType__StartsWithAtWordBoundary & 15;// 15
static +ContainsAnyBitwise: Class<MFiles$MFConditionType__ContainsAnyBitwise> & MFiles$MFConditionType__ContainsAnyBitwise & 16;// 16
static +DoesNotContainAnyBitwise: Class<MFiles$MFConditionType__DoesNotContainAnyBitwise> & MFiles$MFConditionType__DoesNotContainAnyBitwise & 17;// 17

}

declare class MFiles$MFConditionType__Equal mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__NotEqual mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__GreaterThan mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__LessThan mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__GreaterThanOrEqual mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__LessThanOrEqual mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__Contains mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__DoesNotContain mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__StartsWith mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__DoesNotStartWith mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__MatchesWildcardPattern mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__DoesNotMatchWildcardPattern mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__IsMissing mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__IsNotMissing mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__StartsWithAtWordBoundary mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__ContainsAnyBitwise mixins MFiles$MFConditionType {}
declare class MFiles$MFConditionType__DoesNotContainAnyBitwise mixins MFiles$MFConditionType {}


declare  class MFiles$MFContentType {
  constructor(...args: empty): mixed;
static +Generic: Class<MFiles$MFContentType__Generic> & MFiles$MFContentType__Generic & 0;// 0
static +EmailAddress: Class<MFiles$MFContentType__EmailAddress> & MFiles$MFContentType__EmailAddress & 1;// 1
static +URL: Class<MFiles$MFContentType__URL> & MFiles$MFContentType__URL & 2;// 2
static +RTF: Class<MFiles$MFContentType__RTF> & MFiles$MFContentType__RTF & 3;// 3
static +HTML: Class<MFiles$MFContentType__HTML> & MFiles$MFContentType__HTML & 4;// 4

}

declare class MFiles$MFContentType__Generic mixins MFiles$MFContentType {}
declare class MFiles$MFContentType__EmailAddress mixins MFiles$MFContentType {}
declare class MFiles$MFContentType__URL mixins MFiles$MFContentType {}
declare class MFiles$MFContentType__RTF mixins MFiles$MFContentType {}
declare class MFiles$MFContentType__HTML mixins MFiles$MFContentType {}


declare  class MFiles$MFCustomApplicationType {
  constructor(...args: empty): mixed;
static +Unspecified: Class<MFiles$MFCustomApplicationType__Unspecified> & MFiles$MFCustomApplicationType__Unspecified & 0;// 0
static +Client: Class<MFiles$MFCustomApplicationType__Client> & MFiles$MFCustomApplicationType__Client & 1;// 1
static +Server: Class<MFiles$MFCustomApplicationType__Server> & MFiles$MFCustomApplicationType__Server & 2;// 2

}

declare class MFiles$MFCustomApplicationType__Unspecified mixins MFiles$MFCustomApplicationType {}
declare class MFiles$MFCustomApplicationType__Client mixins MFiles$MFCustomApplicationType {}
declare class MFiles$MFCustomApplicationType__Server mixins MFiles$MFCustomApplicationType {}


declare  class MFiles$MFDataFunction {
  constructor(...args: empty): mixed;
static +NoOp: Class<MFiles$MFDataFunction__NoOp> & MFiles$MFDataFunction__NoOp & 0;// 0
static +Year: Class<MFiles$MFDataFunction__Year> & MFiles$MFDataFunction__Year & 1;// 1
static +Month: Class<MFiles$MFDataFunction__Month> & MFiles$MFDataFunction__Month & 2;// 2
static +YearAndMonth: Class<MFiles$MFDataFunction__YearAndMonth> & MFiles$MFDataFunction__YearAndMonth & 3;// 3
static +Date: Class<MFiles$MFDataFunction__Date> & MFiles$MFDataFunction__Date & 4;// 4
static +DaysFrom: Class<MFiles$MFDataFunction__DaysFrom> & MFiles$MFDataFunction__DaysFrom & 5;// 5
static +DaysTo: Class<MFiles$MFDataFunction__DaysTo> & MFiles$MFDataFunction__DaysTo & 6;// 6
static +IntegerSegment: Class<MFiles$MFDataFunction__IntegerSegment> & MFiles$MFDataFunction__IntegerSegment & 7;// 7
static +LeftChars: Class<MFiles$MFDataFunction__LeftChars> & MFiles$MFDataFunction__LeftChars & 8;// 8
static +InitialCharGroup: Class<MFiles$MFDataFunction__InitialCharGroup> & MFiles$MFDataFunction__InitialCharGroup & 9;// 9

}

declare class MFiles$MFDataFunction__NoOp mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__Year mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__Month mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__YearAndMonth mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__Date mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__DaysFrom mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__DaysTo mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__IntegerSegment mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__LeftChars mixins MFiles$MFDataFunction {}
declare class MFiles$MFDataFunction__InitialCharGroup mixins MFiles$MFDataFunction {}


declare  class MFiles$MFDataType {
  constructor(...args: empty): mixed;
static +Uninitialized: Class<MFiles$MFDataType__Uninitialized> & MFiles$MFDataType__Uninitialized & 0;// 0
static +Text: Class<MFiles$MFDataType__Text> & MFiles$MFDataType__Text & 1;// 1
static +Integer: Class<MFiles$MFDataType__Integer> & MFiles$MFDataType__Integer & 2;// 2
static +Floating: Class<MFiles$MFDataType__Floating> & MFiles$MFDataType__Floating & 3;// 3
static +Date: Class<MFiles$MFDataType__Date> & MFiles$MFDataType__Date & 5;// 5
static +Time: Class<MFiles$MFDataType__Time> & MFiles$MFDataType__Time & 6;// 6
static +Timestamp: Class<MFiles$MFDataType__Timestamp> & MFiles$MFDataType__Timestamp & 7;// 7
static +Boolean: Class<MFiles$MFDataType__Boolean> & MFiles$MFDataType__Boolean & 8;// 8
static +Lookup: Class<MFiles$MFDataType__Lookup> & MFiles$MFDataType__Lookup & 9;// 9
static +MultiSelectLookup: Class<MFiles$MFDataType__MultiSelectLookup> & MFiles$MFDataType__MultiSelectLookup & 10;// 10
static +Integer64: Class<MFiles$MFDataType__Integer64> & MFiles$MFDataType__Integer64 & 11;// 11
static +FILETIME: Class<MFiles$MFDataType__FILETIME> & MFiles$MFDataType__FILETIME & 12;// 12
static +MultiLineText: Class<MFiles$MFDataType__MultiLineText> & MFiles$MFDataType__MultiLineText & 13;// 13
static +ACL: Class<MFiles$MFDataType__ACL> & MFiles$MFDataType__ACL & 14;// 14

}

declare class MFiles$MFDataType__Uninitialized mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Text mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Integer mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Floating mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Date mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Time mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Timestamp mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Boolean mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Lookup mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__MultiSelectLookup mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__Integer64 mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__FILETIME mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__MultiLineText mixins MFiles$MFDataType {}
declare class MFiles$MFDataType__ACL mixins MFiles$MFDataType {}


declare  class MFiles$MFDBEngine {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFDBEngine__None> & MFiles$MFDBEngine__None & 0;// 0
static +Firebird: Class<MFiles$MFDBEngine__Firebird> & MFiles$MFDBEngine__Firebird & 1;// 1
static +MSSQLServer: Class<MFiles$MFDBEngine__MSSQLServer> & MFiles$MFDBEngine__MSSQLServer & 2;// 2

}

declare class MFiles$MFDBEngine__None mixins MFiles$MFDBEngine {}
declare class MFiles$MFDBEngine__Firebird mixins MFiles$MFDBEngine {}
declare class MFiles$MFDBEngine__MSSQLServer mixins MFiles$MFDBEngine {}


declare  class MFiles$MFDefaultPropertyType {
  constructor(...args: empty): mixed;
static +Undefined: Class<MFiles$MFDefaultPropertyType__Undefined> & MFiles$MFDefaultPropertyType__Undefined & 0;// 0
static +FixedValue: Class<MFiles$MFDefaultPropertyType__FixedValue> & MFiles$MFDefaultPropertyType__FixedValue & 1;// 1
static +FromHPDSSXML: Class<MFiles$MFDefaultPropertyType__FromHPDSSXML> & MFiles$MFDefaultPropertyType__FromHPDSSXML & 2;// 2
static +FromXML: Class<MFiles$MFDefaultPropertyType__FromXML> & MFiles$MFDefaultPropertyType__FromXML & 3;// 3
static +FromEmail: Class<MFiles$MFDefaultPropertyType__FromEmail> & MFiles$MFDefaultPropertyType__FromEmail & 4;// 4
static +FromEmailHeader: Class<MFiles$MFDefaultPropertyType__FromEmailHeader> & MFiles$MFDefaultPropertyType__FromEmailHeader & 5;// 5
static +FromOCR: Class<MFiles$MFDefaultPropertyType__FromOCR> & MFiles$MFDefaultPropertyType__FromOCR & 6;// 6

}

declare class MFiles$MFDefaultPropertyType__Undefined mixins MFiles$MFDefaultPropertyType {}
declare class MFiles$MFDefaultPropertyType__FixedValue mixins MFiles$MFDefaultPropertyType {}
declare class MFiles$MFDefaultPropertyType__FromHPDSSXML mixins MFiles$MFDefaultPropertyType {}
declare class MFiles$MFDefaultPropertyType__FromXML mixins MFiles$MFDefaultPropertyType {}
declare class MFiles$MFDefaultPropertyType__FromEmail mixins MFiles$MFDefaultPropertyType {}
declare class MFiles$MFDefaultPropertyType__FromEmailHeader mixins MFiles$MFDefaultPropertyType {}
declare class MFiles$MFDefaultPropertyType__FromOCR mixins MFiles$MFDefaultPropertyType {}


declare  class MFiles$MFDependencyRelation {
  constructor(...args: empty): mixed;
static +Nothing: Class<MFiles$MFDependencyRelation__Nothing> & MFiles$MFDependencyRelation__Nothing & 0;// 0
static +AutomaticFilling: Class<MFiles$MFDependencyRelation__AutomaticFilling> & MFiles$MFDependencyRelation__AutomaticFilling & 1;// 1
static +Filtering: Class<MFiles$MFDependencyRelation__Filtering> & MFiles$MFDependencyRelation__Filtering & 2;// 2

}

declare class MFiles$MFDependencyRelation__Nothing mixins MFiles$MFDependencyRelation {}
declare class MFiles$MFDependencyRelation__AutomaticFilling mixins MFiles$MFDependencyRelation {}
declare class MFiles$MFDependencyRelation__Filtering mixins MFiles$MFDependencyRelation {}


declare  class MFiles$MFEmailField {
  constructor(...args: empty): mixed;
static +Undefined: Class<MFiles$MFEmailField__Undefined> & MFiles$MFEmailField__Undefined & 0;// 0
static +From: Class<MFiles$MFEmailField__From> & MFiles$MFEmailField__From & 1;// 1
static +To: Class<MFiles$MFEmailField__To> & MFiles$MFEmailField__To & 2;// 2
static +Cc: Class<MFiles$MFEmailField__Cc> & MFiles$MFEmailField__Cc & 3;// 3
static +Subject: Class<MFiles$MFEmailField__Subject> & MFiles$MFEmailField__Subject & 4;// 4
static +Body: Class<MFiles$MFEmailField__Body> & MFiles$MFEmailField__Body & 5;// 5
static +Date: Class<MFiles$MFEmailField__Date> & MFiles$MFEmailField__Date & 6;// 6
static +Importance: Class<MFiles$MFEmailField__Importance> & MFiles$MFEmailField__Importance & 7;// 7
static +Sensitivity: Class<MFiles$MFEmailField__Sensitivity> & MFiles$MFEmailField__Sensitivity & 8;// 8

}

declare class MFiles$MFEmailField__Undefined mixins MFiles$MFEmailField {}
declare class MFiles$MFEmailField__From mixins MFiles$MFEmailField {}
declare class MFiles$MFEmailField__To mixins MFiles$MFEmailField {}
declare class MFiles$MFEmailField__Cc mixins MFiles$MFEmailField {}
declare class MFiles$MFEmailField__Subject mixins MFiles$MFEmailField {}
declare class MFiles$MFEmailField__Body mixins MFiles$MFEmailField {}
declare class MFiles$MFEmailField__Date mixins MFiles$MFEmailField {}
declare class MFiles$MFEmailField__Importance mixins MFiles$MFEmailField {}
declare class MFiles$MFEmailField__Sensitivity mixins MFiles$MFEmailField {}


declare  class MFiles$MFEmailImportance {
  constructor(...args: empty): mixed;
static +Low: Class<MFiles$MFEmailImportance__Low> & MFiles$MFEmailImportance__Low & 0;// 0
static +Normal: Class<MFiles$MFEmailImportance__Normal> & MFiles$MFEmailImportance__Normal & 1;// 1
static +High: Class<MFiles$MFEmailImportance__High> & MFiles$MFEmailImportance__High & 2;// 2

}

declare class MFiles$MFEmailImportance__Low mixins MFiles$MFEmailImportance {}
declare class MFiles$MFEmailImportance__Normal mixins MFiles$MFEmailImportance {}
declare class MFiles$MFEmailImportance__High mixins MFiles$MFEmailImportance {}


declare  class MFiles$MFEmailSensitivity {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFEmailSensitivity__None> & MFiles$MFEmailSensitivity__None & 0;// 0
static +Normal: Class<MFiles$MFEmailSensitivity__Normal> & MFiles$MFEmailSensitivity__Normal & 1;// 1
static +Personal: Class<MFiles$MFEmailSensitivity__Personal> & MFiles$MFEmailSensitivity__Personal & 2;// 2
static +Private: Class<MFiles$MFEmailSensitivity__Private> & MFiles$MFEmailSensitivity__Private & 3;// 3
static +Confidential: Class<MFiles$MFEmailSensitivity__Confidential> & MFiles$MFEmailSensitivity__Confidential & 4;// 4

}

declare class MFiles$MFEmailSensitivity__None mixins MFiles$MFEmailSensitivity {}
declare class MFiles$MFEmailSensitivity__Normal mixins MFiles$MFEmailSensitivity {}
declare class MFiles$MFEmailSensitivity__Personal mixins MFiles$MFEmailSensitivity {}
declare class MFiles$MFEmailSensitivity__Private mixins MFiles$MFEmailSensitivity {}
declare class MFiles$MFEmailSensitivity__Confidential mixins MFiles$MFEmailSensitivity {}


declare  class MFiles$MFEventHandlerType {
  constructor(...args: empty): mixed;
static +TypeUndefined: Class<MFiles$MFEventHandlerType__TypeUndefined> & MFiles$MFEventHandlerType__TypeUndefined & 0;// 0
static +BeforeSetProperties: Class<MFiles$MFEventHandlerType__BeforeSetProperties> & MFiles$MFEventHandlerType__BeforeSetProperties & 1;// 1
static +AfterSetProperties: Class<MFiles$MFEventHandlerType__AfterSetProperties> & MFiles$MFEventHandlerType__AfterSetProperties & 2;// 2
static +AfterCreateNewObjectFinalize: Class<MFiles$MFEventHandlerType__AfterCreateNewObjectFinalize> & MFiles$MFEventHandlerType__AfterCreateNewObjectFinalize & 3;// 3
static +BeforeCheckInChanges: Class<MFiles$MFEventHandlerType__BeforeCheckInChanges> & MFiles$MFEventHandlerType__BeforeCheckInChanges & 4;// 4
static +AfterCheckInChanges: Class<MFiles$MFEventHandlerType__AfterCheckInChanges> & MFiles$MFEventHandlerType__AfterCheckInChanges & 5;// 5
static +BeforeCheckOut: Class<MFiles$MFEventHandlerType__BeforeCheckOut> & MFiles$MFEventHandlerType__BeforeCheckOut & 6;// 6
static +AfterCheckOut: Class<MFiles$MFEventHandlerType__AfterCheckOut> & MFiles$MFEventHandlerType__AfterCheckOut & 7;// 7
static +BeforeCancelCheckout: Class<MFiles$MFEventHandlerType__BeforeCancelCheckout> & MFiles$MFEventHandlerType__BeforeCancelCheckout & 8;// 8
static +AfterCancelCheckout: Class<MFiles$MFEventHandlerType__AfterCancelCheckout> & MFiles$MFEventHandlerType__AfterCancelCheckout & 9;// 9
static +BeforeDeleteObject: Class<MFiles$MFEventHandlerType__BeforeDeleteObject> & MFiles$MFEventHandlerType__BeforeDeleteObject & 10;// 10
static +AfterDeleteObject: Class<MFiles$MFEventHandlerType__AfterDeleteObject> & MFiles$MFEventHandlerType__AfterDeleteObject & 11;// 11
static +BeforeDestroyObject: Class<MFiles$MFEventHandlerType__BeforeDestroyObject> & MFiles$MFEventHandlerType__BeforeDestroyObject & 12;// 12
static +AfterDestroyObject: Class<MFiles$MFEventHandlerType__AfterDestroyObject> & MFiles$MFEventHandlerType__AfterDestroyObject & 13;// 13
static +BeforeSetObjectPermissions: Class<MFiles$MFEventHandlerType__BeforeSetObjectPermissions> & MFiles$MFEventHandlerType__BeforeSetObjectPermissions & 14;// 14
static +AfterSetObjectPermissions: Class<MFiles$MFEventHandlerType__AfterSetObjectPermissions> & MFiles$MFEventHandlerType__AfterSetObjectPermissions & 15;// 15
static +BeforeFileUpload: Class<MFiles$MFEventHandlerType__BeforeFileUpload> & MFiles$MFEventHandlerType__BeforeFileUpload & 16;// 16
static +AfterFileUpload: Class<MFiles$MFEventHandlerType__AfterFileUpload> & MFiles$MFEventHandlerType__AfterFileUpload & 17;// 17
static +BeforeFileDownload: Class<MFiles$MFEventHandlerType__BeforeFileDownload> & MFiles$MFEventHandlerType__BeforeFileDownload & 18;// 18
static +AfterFileDownload: Class<MFiles$MFEventHandlerType__AfterFileDownload> & MFiles$MFEventHandlerType__AfterFileDownload & 19;// 19
static +BeforeCreateNewValueListItem: Class<MFiles$MFEventHandlerType__BeforeCreateNewValueListItem> & MFiles$MFEventHandlerType__BeforeCreateNewValueListItem & 20;// 20
static +AfterCreateNewValueListItem: Class<MFiles$MFEventHandlerType__AfterCreateNewValueListItem> & MFiles$MFEventHandlerType__AfterCreateNewValueListItem & 21;// 21
static +BeforeLoginToVault: Class<MFiles$MFEventHandlerType__BeforeLoginToVault> & MFiles$MFEventHandlerType__BeforeLoginToVault & 22;// 22
static +AfterLoginToVault: Class<MFiles$MFEventHandlerType__AfterLoginToVault> & MFiles$MFEventHandlerType__AfterLoginToVault & 23;// 23
static +BeforeLogoutFromVault: Class<MFiles$MFEventHandlerType__BeforeLogoutFromVault> & MFiles$MFEventHandlerType__BeforeLogoutFromVault & 24;// 24
static +AfterLogoutFromVault: Class<MFiles$MFEventHandlerType__AfterLogoutFromVault> & MFiles$MFEventHandlerType__AfterLogoutFromVault & 25;// 25
static +BeforeRunScheduledJob: Class<MFiles$MFEventHandlerType__BeforeRunScheduledJob> & MFiles$MFEventHandlerType__BeforeRunScheduledJob & 26;// 26
static +AfterRunScheduledJob: Class<MFiles$MFEventHandlerType__AfterRunScheduledJob> & MFiles$MFEventHandlerType__AfterRunScheduledJob & 27;// 27
static +BeforeCreateNewObjectFinalize: Class<MFiles$MFEventHandlerType__BeforeCreateNewObjectFinalize> & MFiles$MFEventHandlerType__BeforeCreateNewObjectFinalize & 28;// 28
static +BeforeCancelCreateObject: Class<MFiles$MFEventHandlerType__BeforeCancelCreateObject> & MFiles$MFEventHandlerType__BeforeCancelCreateObject & 29;// 29
static +AfterCancelCreateObject: Class<MFiles$MFEventHandlerType__AfterCancelCreateObject> & MFiles$MFEventHandlerType__AfterCancelCreateObject & 30;// 30
static +BeforeDestroyObjectVersion: Class<MFiles$MFEventHandlerType__BeforeDestroyObjectVersion> & MFiles$MFEventHandlerType__BeforeDestroyObjectVersion & 31;// 31
static +AfterDestroyObjectVersion: Class<MFiles$MFEventHandlerType__AfterDestroyObjectVersion> & MFiles$MFEventHandlerType__AfterDestroyObjectVersion & 32;// 32
static +Replication_AfterCreateNewObjectFinalize: Class<MFiles$MFEventHandlerType__Replication_AfterCreateNewObjectFinalize> & MFiles$MFEventHandlerType__Replication_AfterCreateNewObjectFinalize & 33;// 33
static +Replication_AfterCheckInChanges: Class<MFiles$MFEventHandlerType__Replication_AfterCheckInChanges> & MFiles$MFEventHandlerType__Replication_AfterCheckInChanges & 34;// 34
static +VaultExtensionMethod: Class<MFiles$MFEventHandlerType__VaultExtensionMethod> & MFiles$MFEventHandlerType__VaultExtensionMethod & 35;// 35
static +BeforeCreateLoginAccount: Class<MFiles$MFEventHandlerType__BeforeCreateLoginAccount> & MFiles$MFEventHandlerType__BeforeCreateLoginAccount & 36;// 36
static +AfterCreateLoginAccount: Class<MFiles$MFEventHandlerType__AfterCreateLoginAccount> & MFiles$MFEventHandlerType__AfterCreateLoginAccount & 37;// 37
static +BeforeModifyLoginAccount: Class<MFiles$MFEventHandlerType__BeforeModifyLoginAccount> & MFiles$MFEventHandlerType__BeforeModifyLoginAccount & 38;// 38
static +AfterModifyLoginAccount: Class<MFiles$MFEventHandlerType__AfterModifyLoginAccount> & MFiles$MFEventHandlerType__AfterModifyLoginAccount & 39;// 39
static +BeforeRemoveLoginAccount: Class<MFiles$MFEventHandlerType__BeforeRemoveLoginAccount> & MFiles$MFEventHandlerType__BeforeRemoveLoginAccount & 40;// 40
static +AfterRemoveLoginAccount: Class<MFiles$MFEventHandlerType__AfterRemoveLoginAccount> & MFiles$MFEventHandlerType__AfterRemoveLoginAccount & 41;// 41
static +BeforeCreateUserAccount: Class<MFiles$MFEventHandlerType__BeforeCreateUserAccount> & MFiles$MFEventHandlerType__BeforeCreateUserAccount & 42;// 42
static +AfterCreateUserAccount: Class<MFiles$MFEventHandlerType__AfterCreateUserAccount> & MFiles$MFEventHandlerType__AfterCreateUserAccount & 43;// 43
static +BeforeModifyUserAccount: Class<MFiles$MFEventHandlerType__BeforeModifyUserAccount> & MFiles$MFEventHandlerType__BeforeModifyUserAccount & 44;// 44
static +AfterModifyUserAccount: Class<MFiles$MFEventHandlerType__AfterModifyUserAccount> & MFiles$MFEventHandlerType__AfterModifyUserAccount & 45;// 45
static +BeforeRemoveUserAccount: Class<MFiles$MFEventHandlerType__BeforeRemoveUserAccount> & MFiles$MFEventHandlerType__BeforeRemoveUserAccount & 46;// 46
static +AfterRemoveUserAccount: Class<MFiles$MFEventHandlerType__AfterRemoveUserAccount> & MFiles$MFEventHandlerType__AfterRemoveUserAccount & 47;// 47
static +BeforeCreateUserGroup: Class<MFiles$MFEventHandlerType__BeforeCreateUserGroup> & MFiles$MFEventHandlerType__BeforeCreateUserGroup & 48;// 48
static +AfterCreateUserGroup: Class<MFiles$MFEventHandlerType__AfterCreateUserGroup> & MFiles$MFEventHandlerType__AfterCreateUserGroup & 49;// 49
static +BeforeModifyUserGroup: Class<MFiles$MFEventHandlerType__BeforeModifyUserGroup> & MFiles$MFEventHandlerType__BeforeModifyUserGroup & 50;// 50
static +AfterModifyUserGroup: Class<MFiles$MFEventHandlerType__AfterModifyUserGroup> & MFiles$MFEventHandlerType__AfterModifyUserGroup & 51;// 51
static +BeforeRemoveUserGroup: Class<MFiles$MFEventHandlerType__BeforeRemoveUserGroup> & MFiles$MFEventHandlerType__BeforeRemoveUserGroup & 52;// 52
static +AfterRemoveUserGroup: Class<MFiles$MFEventHandlerType__AfterRemoveUserGroup> & MFiles$MFEventHandlerType__AfterRemoveUserGroup & 53;// 53
static +AfterBringOnline: Class<MFiles$MFEventHandlerType__AfterBringOnline> & MFiles$MFEventHandlerType__AfterBringOnline & 54;// 54
static +BeforeTakeOffline: Class<MFiles$MFEventHandlerType__BeforeTakeOffline> & MFiles$MFEventHandlerType__BeforeTakeOffline & 55;// 55
static +AfterCheckInChangesFinalize: Class<MFiles$MFEventHandlerType__AfterCheckInChangesFinalize> & MFiles$MFEventHandlerType__AfterCheckInChangesFinalize & 56;// 56
static +AfterBeginTransaction: Class<MFiles$MFEventHandlerType__AfterBeginTransaction> & MFiles$MFEventHandlerType__AfterBeginTransaction & 57;// 57
static +BeforeCommitTransaction: Class<MFiles$MFEventHandlerType__BeforeCommitTransaction> & MFiles$MFEventHandlerType__BeforeCommitTransaction & 58;// 58
static +BeforeRollbackTransaction: Class<MFiles$MFEventHandlerType__BeforeRollbackTransaction> & MFiles$MFEventHandlerType__BeforeRollbackTransaction & 59;// 59
static +AfterCancelCheckoutFinalize: Class<MFiles$MFEventHandlerType__AfterCancelCheckoutFinalize> & MFiles$MFEventHandlerType__AfterCancelCheckoutFinalize & 60;// 60
static +BeforeUndeleteObject: Class<MFiles$MFEventHandlerType__BeforeUndeleteObject> & MFiles$MFEventHandlerType__BeforeUndeleteObject & 61;// 61
static +AfterUndeleteObject: Class<MFiles$MFEventHandlerType__AfterUndeleteObject> & MFiles$MFEventHandlerType__AfterUndeleteObject & 62;// 62
static +AfterUndeleteObjectFinalize: Class<MFiles$MFEventHandlerType__AfterUndeleteObjectFinalize> & MFiles$MFEventHandlerType__AfterUndeleteObjectFinalize & 63;// 63
static +BeforeModifyMFilesCredentials: Class<MFiles$MFEventHandlerType__BeforeModifyMFilesCredentials> & MFiles$MFEventHandlerType__BeforeModifyMFilesCredentials & 64;// 64
static +AfterModifyMFilesCredentials: Class<MFiles$MFEventHandlerType__AfterModifyMFilesCredentials> & MFiles$MFEventHandlerType__AfterModifyMFilesCredentials & 65;// 65
static +BeforeReturnView: Class<MFiles$MFEventHandlerType__BeforeReturnView> & MFiles$MFEventHandlerType__BeforeReturnView & 66;// 66
static +BeforeCheckInChangesFinalize: Class<MFiles$MFEventHandlerType__BeforeCheckInChangesFinalize> & MFiles$MFEventHandlerType__BeforeCheckInChangesFinalize & 67;// 67
static +BeforeCreateView: Class<MFiles$MFEventHandlerType__BeforeCreateView> & MFiles$MFEventHandlerType__BeforeCreateView & 68;// 68
static +AfterCreateView: Class<MFiles$MFEventHandlerType__AfterCreateView> & MFiles$MFEventHandlerType__AfterCreateView & 69;// 69
static +BeforeModifyView: Class<MFiles$MFEventHandlerType__BeforeModifyView> & MFiles$MFEventHandlerType__BeforeModifyView & 70;// 70
static +AfterModifyView: Class<MFiles$MFEventHandlerType__AfterModifyView> & MFiles$MFEventHandlerType__AfterModifyView & 71;// 71
static +BeforeDeleteView: Class<MFiles$MFEventHandlerType__BeforeDeleteView> & MFiles$MFEventHandlerType__BeforeDeleteView & 72;// 72
static +AfterDeleteView: Class<MFiles$MFEventHandlerType__AfterDeleteView> & MFiles$MFEventHandlerType__AfterDeleteView & 73;// 73

}

declare class MFiles$MFEventHandlerType__TypeUndefined mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeSetProperties mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterSetProperties mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCreateNewObjectFinalize mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCheckInChanges mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCheckInChanges mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCheckOut mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCheckOut mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCancelCheckout mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCancelCheckout mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeDeleteObject mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterDeleteObject mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeDestroyObject mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterDestroyObject mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeSetObjectPermissions mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterSetObjectPermissions mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeFileUpload mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterFileUpload mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeFileDownload mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterFileDownload mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCreateNewValueListItem mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCreateNewValueListItem mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeLoginToVault mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterLoginToVault mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeLogoutFromVault mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterLogoutFromVault mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeRunScheduledJob mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterRunScheduledJob mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCreateNewObjectFinalize mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCancelCreateObject mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCancelCreateObject mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeDestroyObjectVersion mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterDestroyObjectVersion mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__Replication_AfterCreateNewObjectFinalize mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__Replication_AfterCheckInChanges mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__VaultExtensionMethod mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCreateLoginAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCreateLoginAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeModifyLoginAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterModifyLoginAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeRemoveLoginAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterRemoveLoginAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCreateUserAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCreateUserAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeModifyUserAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterModifyUserAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeRemoveUserAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterRemoveUserAccount mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCreateUserGroup mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCreateUserGroup mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeModifyUserGroup mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterModifyUserGroup mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeRemoveUserGroup mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterRemoveUserGroup mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterBringOnline mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeTakeOffline mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCheckInChangesFinalize mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterBeginTransaction mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCommitTransaction mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeRollbackTransaction mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCancelCheckoutFinalize mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeUndeleteObject mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterUndeleteObject mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterUndeleteObjectFinalize mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeModifyMFilesCredentials mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterModifyMFilesCredentials mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeReturnView mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCheckInChangesFinalize mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeCreateView mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterCreateView mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeModifyView mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterModifyView mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__BeforeDeleteView mixins MFiles$MFEventHandlerType {}
declare class MFiles$MFEventHandlerType__AfterDeleteView mixins MFiles$MFEventHandlerType {}


declare  class MFiles$MFExportContentFlag {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFExportContentFlag__None> & MFiles$MFExportContentFlag__None & 0;// 0
static +LatestVersionsOnly: Class<MFiles$MFExportContentFlag__LatestVersionsOnly> & MFiles$MFExportContentFlag__LatestVersionsOnly & 2;// 2
static +DestroyAfterExport: Class<MFiles$MFExportContentFlag__DestroyAfterExport> & MFiles$MFExportContentFlag__DestroyAfterExport & 4;// 4
static +ClearArchivalMarker: Class<MFiles$MFExportContentFlag__ClearArchivalMarker> & MFiles$MFExportContentFlag__ClearArchivalMarker & 8;// 8
static +SaveFilesAlsoAsPDFA: Class<MFiles$MFExportContentFlag__SaveFilesAlsoAsPDFA> & MFiles$MFExportContentFlag__SaveFilesAlsoAsPDFA & 32;// 32
static +ExportInformationOnDestroyedData: Class<MFiles$MFExportContentFlag__ExportInformationOnDestroyedData> & MFiles$MFExportContentFlag__ExportInformationOnDestroyedData & 64;// 64
static +UseMultipleContentPackages: Class<MFiles$MFExportContentFlag__UseMultipleContentPackages> & MFiles$MFExportContentFlag__UseMultipleContentPackages & 128;// 128
static +IndicateDropouts: Class<MFiles$MFExportContentFlag__IndicateDropouts> & MFiles$MFExportContentFlag__IndicateDropouts & 1024;// 1024

}

declare class MFiles$MFExportContentFlag__None mixins MFiles$MFExportContentFlag {}
declare class MFiles$MFExportContentFlag__LatestVersionsOnly mixins MFiles$MFExportContentFlag {}
declare class MFiles$MFExportContentFlag__DestroyAfterExport mixins MFiles$MFExportContentFlag {}
declare class MFiles$MFExportContentFlag__ClearArchivalMarker mixins MFiles$MFExportContentFlag {}
declare class MFiles$MFExportContentFlag__SaveFilesAlsoAsPDFA mixins MFiles$MFExportContentFlag {}
declare class MFiles$MFExportContentFlag__ExportInformationOnDestroyedData mixins MFiles$MFExportContentFlag {}
declare class MFiles$MFExportContentFlag__UseMultipleContentPackages mixins MFiles$MFExportContentFlag {}
declare class MFiles$MFExportContentFlag__IndicateDropouts mixins MFiles$MFExportContentFlag {}


declare  class MFiles$MFExpressionType {
  constructor(...args: empty): mixed;
static +Uninitialized: Class<MFiles$MFExpressionType__Uninitialized> & MFiles$MFExpressionType__Uninitialized & 0;// 0
static +PropertyValue: Class<MFiles$MFExpressionType__PropertyValue> & MFiles$MFExpressionType__PropertyValue & 1;// 1
static +ObjectIDSegment: Class<MFiles$MFExpressionType__ObjectIDSegment> & MFiles$MFExpressionType__ObjectIDSegment & 2;// 2
static +StatusValue: Class<MFiles$MFExpressionType__StatusValue> & MFiles$MFExpressionType__StatusValue & 3;// 3
static +FileValue: Class<MFiles$MFExpressionType__FileValue> & MFiles$MFExpressionType__FileValue & 4;// 4
static +TypedValue: Class<MFiles$MFExpressionType__TypedValue> & MFiles$MFExpressionType__TypedValue & 5;// 5
static +AnyField: Class<MFiles$MFExpressionType__AnyField> & MFiles$MFExpressionType__AnyField & 6;// 6
static +Permissions: Class<MFiles$MFExpressionType__Permissions> & MFiles$MFExpressionType__Permissions & 7;// 7

}

declare class MFiles$MFExpressionType__Uninitialized mixins MFiles$MFExpressionType {}
declare class MFiles$MFExpressionType__PropertyValue mixins MFiles$MFExpressionType {}
declare class MFiles$MFExpressionType__ObjectIDSegment mixins MFiles$MFExpressionType {}
declare class MFiles$MFExpressionType__StatusValue mixins MFiles$MFExpressionType {}
declare class MFiles$MFExpressionType__FileValue mixins MFiles$MFExpressionType {}
declare class MFiles$MFExpressionType__TypedValue mixins MFiles$MFExpressionType {}
declare class MFiles$MFExpressionType__AnyField mixins MFiles$MFExpressionType {}
declare class MFiles$MFExpressionType__Permissions mixins MFiles$MFExpressionType {}


declare  class MFiles$MFExtApplicationPlatform {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFExtApplicationPlatform__None> & MFiles$MFExtApplicationPlatform__None & 0;// 0
static +Desktop: Class<MFiles$MFExtApplicationPlatform__Desktop> & MFiles$MFExtApplicationPlatform__Desktop & 1;// 1
static +Web: Class<MFiles$MFExtApplicationPlatform__Web> & MFiles$MFExtApplicationPlatform__Web & 2;// 2

}

declare class MFiles$MFExtApplicationPlatform__None mixins MFiles$MFExtApplicationPlatform {}
declare class MFiles$MFExtApplicationPlatform__Desktop mixins MFiles$MFExtApplicationPlatform {}
declare class MFiles$MFExtApplicationPlatform__Web mixins MFiles$MFExtApplicationPlatform {}


declare  class MFiles$MFExternalDBRefreshType {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFExternalDBRefreshType__None> & MFiles$MFExternalDBRefreshType__None & 0;// 0
static +Quick: Class<MFiles$MFExternalDBRefreshType__Quick> & MFiles$MFExternalDBRefreshType__Quick & 1;// 1
static +Full: Class<MFiles$MFExternalDBRefreshType__Full> & MFiles$MFExternalDBRefreshType__Full & 2;// 2

}

declare class MFiles$MFExternalDBRefreshType__None mixins MFiles$MFExternalDBRefreshType {}
declare class MFiles$MFExternalDBRefreshType__Quick mixins MFiles$MFExternalDBRefreshType {}
declare class MFiles$MFExternalDBRefreshType__Full mixins MFiles$MFExternalDBRefreshType {}


declare  class MFiles$MFFacetFilterStatusFlags {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFFacetFilterStatusFlags__None> & MFiles$MFFacetFilterStatusFlags__None & 0;// 0
static +Available: Class<MFiles$MFFacetFilterStatusFlags__Available> & MFiles$MFFacetFilterStatusFlags__Available & 1;// 1
static +Applied: Class<MFiles$MFFacetFilterStatusFlags__Applied> & MFiles$MFFacetFilterStatusFlags__Applied & 2;// 2

}

declare class MFiles$MFFacetFilterStatusFlags__None mixins MFiles$MFFacetFilterStatusFlags {}
declare class MFiles$MFFacetFilterStatusFlags__Available mixins MFiles$MFFacetFilterStatusFlags {}
declare class MFiles$MFFacetFilterStatusFlags__Applied mixins MFiles$MFFacetFilterStatusFlags {}


declare  class MFiles$MFFacetSearchFlags {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFFacetSearchFlags__None> & MFiles$MFFacetSearchFlags__None & 0;// 0
static +IgnoreSearchPermissions: Class<MFiles$MFFacetSearchFlags__IgnoreSearchPermissions> & MFiles$MFFacetSearchFlags__IgnoreSearchPermissions & 2;// 2
static +IgnoreFacetGroupPermissions: Class<MFiles$MFFacetSearchFlags__IgnoreFacetGroupPermissions> & MFiles$MFFacetSearchFlags__IgnoreFacetGroupPermissions & 4;// 4
static +IgnoreFacetValuePermissions: Class<MFiles$MFFacetSearchFlags__IgnoreFacetValuePermissions> & MFiles$MFFacetSearchFlags__IgnoreFacetValuePermissions & 8;// 8
static +SortFacetValues: Class<MFiles$MFFacetSearchFlags__SortFacetValues> & MFiles$MFFacetSearchFlags__SortFacetValues & 16;// 16
static +AscendingOrder: Class<MFiles$MFFacetSearchFlags__AscendingOrder> & MFiles$MFFacetSearchFlags__AscendingOrder & 32;// 32
static +OverrideByConfiguration: Class<MFiles$MFFacetSearchFlags__OverrideByConfiguration> & MFiles$MFFacetSearchFlags__OverrideByConfiguration & 64;// 64

}

declare class MFiles$MFFacetSearchFlags__None mixins MFiles$MFFacetSearchFlags {}
declare class MFiles$MFFacetSearchFlags__IgnoreSearchPermissions mixins MFiles$MFFacetSearchFlags {}
declare class MFiles$MFFacetSearchFlags__IgnoreFacetGroupPermissions mixins MFiles$MFFacetSearchFlags {}
declare class MFiles$MFFacetSearchFlags__IgnoreFacetValuePermissions mixins MFiles$MFFacetSearchFlags {}
declare class MFiles$MFFacetSearchFlags__SortFacetValues mixins MFiles$MFFacetSearchFlags {}
declare class MFiles$MFFacetSearchFlags__AscendingOrder mixins MFiles$MFFacetSearchFlags {}
declare class MFiles$MFFacetSearchFlags__OverrideByConfiguration mixins MFiles$MFFacetSearchFlags {}


declare  class MFiles$MFFileDataStorage {
  constructor(...args: empty): mixed;
static +Default: Class<MFiles$MFFileDataStorage__Default> & MFiles$MFFileDataStorage__Default & 0;// 0
static +Disk: Class<MFiles$MFFileDataStorage__Disk> & MFiles$MFFileDataStorage__Disk & 1;// 1
static +DB: Class<MFiles$MFFileDataStorage__DB> & MFiles$MFFileDataStorage__DB & 2;// 2
static +External: Class<MFiles$MFFileDataStorage__External> & MFiles$MFFileDataStorage__External & 3;// 3

}

declare class MFiles$MFFileDataStorage__Default mixins MFiles$MFFileDataStorage {}
declare class MFiles$MFFileDataStorage__Disk mixins MFiles$MFFileDataStorage {}
declare class MFiles$MFFileDataStorage__DB mixins MFiles$MFFileDataStorage {}
declare class MFiles$MFFileDataStorage__External mixins MFiles$MFFileDataStorage {}


declare  class MFiles$MFFileFormat {
  constructor(...args: empty): mixed;
static +Native: Class<MFiles$MFFileFormat__Native> & MFiles$MFFileFormat__Native & 0;// 0
static +PDF: Class<MFiles$MFFileFormat__PDF> & MFiles$MFFileFormat__PDF & 1;// 1
static +DisplayOnlyPDF: Class<MFiles$MFFileFormat__DisplayOnlyPDF> & MFiles$MFFileFormat__DisplayOnlyPDF & 2;// 2

}

declare class MFiles$MFFileFormat__Native mixins MFiles$MFFileFormat {}
declare class MFiles$MFFileFormat__PDF mixins MFiles$MFFileFormat {}
declare class MFiles$MFFileFormat__DisplayOnlyPDF mixins MFiles$MFFileFormat {}


declare  class MFiles$MFFileInformationType {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFFileInformationType__Unknown> & MFiles$MFFileInformationType__Unknown & 0;// 0
static +EmailMessage: Class<MFiles$MFFileInformationType__EmailMessage> & MFiles$MFFileInformationType__EmailMessage & 1;// 1

}

declare class MFiles$MFFileInformationType__Unknown mixins MFiles$MFFileInformationType {}
declare class MFiles$MFFileInformationType__EmailMessage mixins MFiles$MFFileInformationType {}


declare  class MFiles$MFFileOpenMethod {
  constructor(...args: empty): mixed;
static +ShowInShell: Class<MFiles$MFFileOpenMethod__ShowInShell> & MFiles$MFFileOpenMethod__ShowInShell & 0;// 0
static +Open: Class<MFiles$MFFileOpenMethod__Open> & MFiles$MFFileOpenMethod__Open & 1;// 1
static +View: Class<MFiles$MFFileOpenMethod__View> & MFiles$MFFileOpenMethod__View & 2;// 2
static +Edit: Class<MFiles$MFFileOpenMethod__Edit> & MFiles$MFFileOpenMethod__Edit & 3;// 3

}

declare class MFiles$MFFileOpenMethod__ShowInShell mixins MFiles$MFFileOpenMethod {}
declare class MFiles$MFFileOpenMethod__Open mixins MFiles$MFFileOpenMethod {}
declare class MFiles$MFFileOpenMethod__View mixins MFiles$MFFileOpenMethod {}
declare class MFiles$MFFileOpenMethod__Edit mixins MFiles$MFFileOpenMethod {}


declare  class MFiles$MFFileValueType {
  constructor(...args: empty): mixed;
static +HasFiles: Class<MFiles$MFFileValueType__HasFiles> & MFiles$MFFileValueType__HasFiles & 0;// 0
static +FileName: Class<MFiles$MFFileValueType__FileName> & MFiles$MFFileValueType__FileName & 1;// 1
static +FileSize: Class<MFiles$MFFileValueType__FileSize> & MFiles$MFFileValueType__FileSize & 2;// 2
static +FileID: Class<MFiles$MFFileValueType__FileID> & MFiles$MFFileValueType__FileID & 3;// 3
static +CreationTime: Class<MFiles$MFFileValueType__CreationTime> & MFiles$MFFileValueType__CreationTime & 4;// 4
static +ChangeTime: Class<MFiles$MFFileValueType__ChangeTime> & MFiles$MFFileValueType__ChangeTime & 5;// 5
static +LinkedToExtLoc: Class<MFiles$MFFileValueType__LinkedToExtLoc> & MFiles$MFFileValueType__LinkedToExtLoc & 6;// 6
static +LinkedToExtLocID: Class<MFiles$MFFileValueType__LinkedToExtLocID> & MFiles$MFFileValueType__LinkedToExtLocID & 7;// 7

}

declare class MFiles$MFFileValueType__HasFiles mixins MFiles$MFFileValueType {}
declare class MFiles$MFFileValueType__FileName mixins MFiles$MFFileValueType {}
declare class MFiles$MFFileValueType__FileSize mixins MFiles$MFFileValueType {}
declare class MFiles$MFFileValueType__FileID mixins MFiles$MFFileValueType {}
declare class MFiles$MFFileValueType__CreationTime mixins MFiles$MFFileValueType {}
declare class MFiles$MFFileValueType__ChangeTime mixins MFiles$MFFileValueType {}
declare class MFiles$MFFileValueType__LinkedToExtLoc mixins MFiles$MFFileValueType {}
declare class MFiles$MFFileValueType__LinkedToExtLocID mixins MFiles$MFFileValueType {}


declare  class MFiles$MFFolderColumnId {
  constructor(...args: empty): mixed;
static +Name: Class<MFiles$MFFolderColumnId__Name> & MFiles$MFFolderColumnId__Name & -1;// -1
static +Type: Class<MFiles$MFFolderColumnId__Type> & MFiles$MFFolderColumnId__Type & -2;// -2
static +Size: Class<MFiles$MFFolderColumnId__Size> & MFiles$MFFolderColumnId__Size & -3;// -3
static +Status: Class<MFiles$MFFolderColumnId__Status> & MFiles$MFFolderColumnId__Status & -4;// -4
static +CheckoutTo: Class<MFiles$MFFolderColumnId__CheckoutTo> & MFiles$MFFolderColumnId__CheckoutTo & -5;// -5
static +CheckOutAt: Class<MFiles$MFFolderColumnId__CheckOutAt> & MFiles$MFFolderColumnId__CheckOutAt & -6;// -6
static +ObjectDispId: Class<MFiles$MFFolderColumnId__ObjectDispId> & MFiles$MFFolderColumnId__ObjectDispId & -7;// -7
static +ObjectVersion: Class<MFiles$MFFolderColumnId__ObjectVersion> & MFiles$MFFolderColumnId__ObjectVersion & -8;// -8
static +ShStatusChanged: Class<MFiles$MFFolderColumnId__ShStatusChanged> & MFiles$MFFolderColumnId__ShStatusChanged & -9;// -9
static +ShLastModifiedBy: Class<MFiles$MFFolderColumnId__ShLastModifiedBy> & MFiles$MFFolderColumnId__ShLastModifiedBy & -10;// -10
static +Location: Class<MFiles$MFFolderColumnId__Location> & MFiles$MFFolderColumnId__Location & -11;// -11
static +RelLocation: Class<MFiles$MFFolderColumnId__RelLocation> & MFiles$MFFolderColumnId__RelLocation & -12;// -12
static +DateCreated: Class<MFiles$MFFolderColumnId__DateCreated> & MFiles$MFFolderColumnId__DateCreated & -13;// -13
static +DateModified: Class<MFiles$MFFolderColumnId__DateModified> & MFiles$MFFolderColumnId__DateModified & -14;// -14
static +Score: Class<MFiles$MFFolderColumnId__Score> & MFiles$MFFolderColumnId__Score & -15;// -15
static +RelationshipDesc: Class<MFiles$MFFolderColumnId__RelationshipDesc> & MFiles$MFFolderColumnId__RelationshipDesc & -16;// -16
static +HasRelationships: Class<MFiles$MFFolderColumnId__HasRelationships> & MFiles$MFFolderColumnId__HasRelationships & -17;// -17
static +RelationshipTargetVer: Class<MFiles$MFFolderColumnId__RelationshipTargetVer> & MFiles$MFFolderColumnId__RelationshipTargetVer & -18;// -18
static +ObjectType: Class<MFiles$MFFolderColumnId__ObjectType> & MFiles$MFFolderColumnId__ObjectType & -19;// -19
static +ObjectPermissions: Class<MFiles$MFFolderColumnId__ObjectPermissions> & MFiles$MFFolderColumnId__ObjectPermissions & -20;// -20
static +TypeEx: Class<MFiles$MFFolderColumnId__TypeEx> & MFiles$MFFolderColumnId__TypeEx & -21;// -21
static +HasAssignments: Class<MFiles$MFFolderColumnId__HasAssignments> & MFiles$MFFolderColumnId__HasAssignments & -22;// -22
static +ExportedFile: Class<MFiles$MFFolderColumnId__ExportedFile> & MFiles$MFFolderColumnId__ExportedFile & -1000000;// -1000000
static +IdSegment: Class<MFiles$MFFolderColumnId__IdSegment> & MFiles$MFFolderColumnId__IdSegment & -1000001;// -1000001

}

declare class MFiles$MFFolderColumnId__Name mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__Type mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__Size mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__Status mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__CheckoutTo mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__CheckOutAt mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__ObjectDispId mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__ObjectVersion mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__ShStatusChanged mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__ShLastModifiedBy mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__Location mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__RelLocation mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__DateCreated mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__DateModified mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__Score mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__RelationshipDesc mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__HasRelationships mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__RelationshipTargetVer mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__ObjectType mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__ObjectPermissions mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__TypeEx mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__HasAssignments mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__ExportedFile mixins MFiles$MFFolderColumnId {}
declare class MFiles$MFFolderColumnId__IdSegment mixins MFiles$MFFolderColumnId {}


declare  class MFiles$MFFolderContentItemType {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFFolderContentItemType__Unknown> & MFiles$MFFolderContentItemType__Unknown & 0;// 0
static +ViewFolder: Class<MFiles$MFFolderContentItemType__ViewFolder> & MFiles$MFFolderContentItemType__ViewFolder & 1;// 1
static +PropertyFolder: Class<MFiles$MFFolderContentItemType__PropertyFolder> & MFiles$MFFolderContentItemType__PropertyFolder & 2;// 2
static +TraditionalFolder: Class<MFiles$MFFolderContentItemType__TraditionalFolder> & MFiles$MFFolderContentItemType__TraditionalFolder & 3;// 3
static +ObjectVersion: Class<MFiles$MFFolderContentItemType__ObjectVersion> & MFiles$MFFolderContentItemType__ObjectVersion & 4;// 4

}

declare class MFiles$MFFolderContentItemType__Unknown mixins MFiles$MFFolderContentItemType {}
declare class MFiles$MFFolderContentItemType__ViewFolder mixins MFiles$MFFolderContentItemType {}
declare class MFiles$MFFolderContentItemType__PropertyFolder mixins MFiles$MFFolderContentItemType {}
declare class MFiles$MFFolderContentItemType__TraditionalFolder mixins MFiles$MFFolderContentItemType {}
declare class MFiles$MFFolderContentItemType__ObjectVersion mixins MFiles$MFFolderContentItemType {}


declare  class MFiles$MFFolderDefType {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFFolderDefType__Unknown> & MFiles$MFFolderDefType__Unknown & 0;// 0
static +AnyFolder: Class<MFiles$MFFolderDefType__AnyFolder> & MFiles$MFFolderDefType__AnyFolder & 1;// 1
static +ViewFolder: Class<MFiles$MFFolderDefType__ViewFolder> & MFiles$MFFolderDefType__ViewFolder & 2;// 2
static +PropertyFolder: Class<MFiles$MFFolderDefType__PropertyFolder> & MFiles$MFFolderDefType__PropertyFolder & 3;// 3
static +TraditionalFolder: Class<MFiles$MFFolderDefType__TraditionalFolder> & MFiles$MFFolderDefType__TraditionalFolder & 4;// 4
static +SearchFolder: Class<MFiles$MFFolderDefType__SearchFolder> & MFiles$MFFolderDefType__SearchFolder & 5;// 5

}

declare class MFiles$MFFolderDefType__Unknown mixins MFiles$MFFolderDefType {}
declare class MFiles$MFFolderDefType__AnyFolder mixins MFiles$MFFolderDefType {}
declare class MFiles$MFFolderDefType__ViewFolder mixins MFiles$MFFolderDefType {}
declare class MFiles$MFFolderDefType__PropertyFolder mixins MFiles$MFFolderDefType {}
declare class MFiles$MFFolderDefType__TraditionalFolder mixins MFiles$MFFolderDefType {}
declare class MFiles$MFFolderDefType__SearchFolder mixins MFiles$MFFolderDefType {}


declare  class MFiles$MFFolderListingAlgorithm {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFFolderListingAlgorithm__None> & MFiles$MFFolderListingAlgorithm__None & 0;// 0
static +TestEachValue: Class<MFiles$MFFolderListingAlgorithm__TestEachValue> & MFiles$MFFolderListingAlgorithm__TestEachValue & 1;// 1
static +GetValuesByDistinctUse: Class<MFiles$MFFolderListingAlgorithm__GetValuesByDistinctUse> & MFiles$MFFolderListingAlgorithm__GetValuesByDistinctUse & 2;// 2
static +TestEachValueWithSeparateQueries: Class<MFiles$MFFolderListingAlgorithm__TestEachValueWithSeparateQueries> & MFiles$MFFolderListingAlgorithm__TestEachValueWithSeparateQueries & 3;// 3

}

declare class MFiles$MFFolderListingAlgorithm__None mixins MFiles$MFFolderListingAlgorithm {}
declare class MFiles$MFFolderListingAlgorithm__TestEachValue mixins MFiles$MFFolderListingAlgorithm {}
declare class MFiles$MFFolderListingAlgorithm__GetValuesByDistinctUse mixins MFiles$MFFolderListingAlgorithm {}
declare class MFiles$MFFolderListingAlgorithm__TestEachValueWithSeparateQueries mixins MFiles$MFFolderListingAlgorithm {}


declare  class MFiles$MFFolderListingColumnFlags {
  constructor(...args: empty): mixed;
static +SelectIfLeftOfSelectedMainColumn: Class<MFiles$MFFolderListingColumnFlags__SelectIfLeftOfSelectedMainColumn> & MFiles$MFFolderListingColumnFlags__SelectIfLeftOfSelectedMainColumn & 1;// 1
static +HideColumnText: Class<MFiles$MFFolderListingColumnFlags__HideColumnText> & MFiles$MFFolderListingColumnFlags__HideColumnText & 2;// 2

}

declare class MFiles$MFFolderListingColumnFlags__SelectIfLeftOfSelectedMainColumn mixins MFiles$MFFolderListingColumnFlags {}
declare class MFiles$MFFolderListingColumnFlags__HideColumnText mixins MFiles$MFFolderListingColumnFlags {}


declare  class MFiles$MFFolderListingItemGroupingMode {
  constructor(...args: empty): mixed;
static +Unspecified: Class<MFiles$MFFolderListingItemGroupingMode__Unspecified> & MFiles$MFFolderListingItemGroupingMode__Unspecified & -1;// -1
static +NoGrouping: Class<MFiles$MFFolderListingItemGroupingMode__NoGrouping> & MFiles$MFFolderListingItemGroupingMode__NoGrouping & 0;// 0
static +GroupObjectsByObjectType: Class<MFiles$MFFolderListingItemGroupingMode__GroupObjectsByObjectType> & MFiles$MFFolderListingItemGroupingMode__GroupObjectsByObjectType & 1;// 1
static +GroupViewsAndFoldersByType: Class<MFiles$MFFolderListingItemGroupingMode__GroupViewsAndFoldersByType> & MFiles$MFFolderListingItemGroupingMode__GroupViewsAndFoldersByType & 1024;// 1024

}

declare class MFiles$MFFolderListingItemGroupingMode__Unspecified mixins MFiles$MFFolderListingItemGroupingMode {}
declare class MFiles$MFFolderListingItemGroupingMode__NoGrouping mixins MFiles$MFFolderListingItemGroupingMode {}
declare class MFiles$MFFolderListingItemGroupingMode__GroupObjectsByObjectType mixins MFiles$MFFolderListingItemGroupingMode {}
declare class MFiles$MFFolderListingItemGroupingMode__GroupViewsAndFoldersByType mixins MFiles$MFFolderListingItemGroupingMode {}


declare  class MFiles$MFFolderListingViewMode {
  constructor(...args: empty): mixed;
static +Icon: Class<MFiles$MFFolderListingViewMode__Icon> & MFiles$MFFolderListingViewMode__Icon & 1;// 1
static +SmallIcon: Class<MFiles$MFFolderListingViewMode__SmallIcon> & MFiles$MFFolderListingViewMode__SmallIcon & 2;// 2
static +List: Class<MFiles$MFFolderListingViewMode__List> & MFiles$MFFolderListingViewMode__List & 3;// 3
static +Details: Class<MFiles$MFFolderListingViewMode__Details> & MFiles$MFFolderListingViewMode__Details & 4;// 4
static +Thumbnail: Class<MFiles$MFFolderListingViewMode__Thumbnail> & MFiles$MFFolderListingViewMode__Thumbnail & 5;// 5
static +Tile: Class<MFiles$MFFolderListingViewMode__Tile> & MFiles$MFFolderListingViewMode__Tile & 6;// 6
static +Thumbstrip: Class<MFiles$MFFolderListingViewMode__Thumbstrip> & MFiles$MFFolderListingViewMode__Thumbstrip & 7;// 7
static +Content: Class<MFiles$MFFolderListingViewMode__Content> & MFiles$MFFolderListingViewMode__Content & 8;// 8

}

declare class MFiles$MFFolderListingViewMode__Icon mixins MFiles$MFFolderListingViewMode {}
declare class MFiles$MFFolderListingViewMode__SmallIcon mixins MFiles$MFFolderListingViewMode {}
declare class MFiles$MFFolderListingViewMode__List mixins MFiles$MFFolderListingViewMode {}
declare class MFiles$MFFolderListingViewMode__Details mixins MFiles$MFFolderListingViewMode {}
declare class MFiles$MFFolderListingViewMode__Thumbnail mixins MFiles$MFFolderListingViewMode {}
declare class MFiles$MFFolderListingViewMode__Tile mixins MFiles$MFFolderListingViewMode {}
declare class MFiles$MFFolderListingViewMode__Thumbstrip mixins MFiles$MFFolderListingViewMode {}
declare class MFiles$MFFolderListingViewMode__Content mixins MFiles$MFFolderListingViewMode {}


declare  class MFiles$MFFolderUIStateLocationType {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFFolderUIStateLocationType__Unknown> & MFiles$MFFolderUIStateLocationType__Unknown & 0;// 0
static +RootFolder: Class<MFiles$MFFolderUIStateLocationType__RootFolder> & MFiles$MFFolderUIStateLocationType__RootFolder & 1;// 1
static +ViewFoldersContainer: Class<MFiles$MFFolderUIStateLocationType__ViewFoldersContainer> & MFiles$MFFolderUIStateLocationType__ViewFoldersContainer & 2;// 2
static +PropertyFoldersContainer: Class<MFiles$MFFolderUIStateLocationType__PropertyFoldersContainer> & MFiles$MFFolderUIStateLocationType__PropertyFoldersContainer & 3;// 3
static +ObjectsContainer: Class<MFiles$MFFolderUIStateLocationType__ObjectsContainer> & MFiles$MFFolderUIStateLocationType__ObjectsContainer & 4;// 4
static +ObjectFilesContainer: Class<MFiles$MFFolderUIStateLocationType__ObjectFilesContainer> & MFiles$MFFolderUIStateLocationType__ObjectFilesContainer & 5;// 5
static +TraditionalFolder: Class<MFiles$MFFolderUIStateLocationType__TraditionalFolder> & MFiles$MFFolderUIStateLocationType__TraditionalFolder & 6;// 6
static +SearchResultsContainer: Class<MFiles$MFFolderUIStateLocationType__SearchResultsContainer> & MFiles$MFFolderUIStateLocationType__SearchResultsContainer & 7;// 7
static +HistoryUI: Class<MFiles$MFFolderUIStateLocationType__HistoryUI> & MFiles$MFFolderUIStateLocationType__HistoryUI & 8;// 8
static +RelationshipsUIFromTab: Class<MFiles$MFFolderUIStateLocationType__RelationshipsUIFromTab> & MFiles$MFFolderUIStateLocationType__RelationshipsUIFromTab & 9;// 9
static +CollectionMembersUI: Class<MFiles$MFFolderUIStateLocationType__CollectionMembersUI> & MFiles$MFFolderUIStateLocationType__CollectionMembersUI & 10;// 10
static +SubobjectsUI: Class<MFiles$MFFolderUIStateLocationType__SubobjectsUI> & MFiles$MFFolderUIStateLocationType__SubobjectsUI & 11;// 11
static +ClearLocalCacheUI: Class<MFiles$MFFolderUIStateLocationType__ClearLocalCacheUI> & MFiles$MFFolderUIStateLocationType__ClearLocalCacheUI & 12;// 12
static +RelationshipsUIToTab: Class<MFiles$MFFolderUIStateLocationType__RelationshipsUIToTab> & MFiles$MFFolderUIStateLocationType__RelationshipsUIToTab & 13;// 13
static +RelationshipsUIAllTab: Class<MFiles$MFFolderUIStateLocationType__RelationshipsUIAllTab> & MFiles$MFFolderUIStateLocationType__RelationshipsUIAllTab & 14;// 14
static +LocalTemporaryItemsContainer: Class<MFiles$MFFolderUIStateLocationType__LocalTemporaryItemsContainer> & MFiles$MFFolderUIStateLocationType__LocalTemporaryItemsContainer & 15;// 15

}

declare class MFiles$MFFolderUIStateLocationType__Unknown mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__RootFolder mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__ViewFoldersContainer mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__PropertyFoldersContainer mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__ObjectsContainer mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__ObjectFilesContainer mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__TraditionalFolder mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__SearchResultsContainer mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__HistoryUI mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__RelationshipsUIFromTab mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__CollectionMembersUI mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__SubobjectsUI mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__ClearLocalCacheUI mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__RelationshipsUIToTab mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__RelationshipsUIAllTab mixins MFiles$MFFolderUIStateLocationType {}
declare class MFiles$MFFolderUIStateLocationType__LocalTemporaryItemsContainer mixins MFiles$MFFolderUIStateLocationType {}


declare  class MFiles$MFFormattingType {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFFormattingType__None> & MFiles$MFFormattingType__None & 0;// 0

}

declare class MFiles$MFFormattingType__None mixins MFiles$MFFormattingType {}


declare  class MFiles$MFFullTextSearchFlags {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFFullTextSearchFlags__None> & MFiles$MFFullTextSearchFlags__None & 0;// 0
static +Stemming: Class<MFiles$MFFullTextSearchFlags__Stemming> & MFiles$MFFullTextSearchFlags__Stemming & 4;// 4
static +TypeAllWords: Class<MFiles$MFFullTextSearchFlags__TypeAllWords> & MFiles$MFFullTextSearchFlags__TypeAllWords & 131072;// 131072
static +TypeAnyWords: Class<MFiles$MFFullTextSearchFlags__TypeAnyWords> & MFiles$MFFullTextSearchFlags__TypeAnyWords & 262144;// 262144
static +LookInMetaData: Class<MFiles$MFFullTextSearchFlags__LookInMetaData> & MFiles$MFFullTextSearchFlags__LookInMetaData & 268435456;// 268435456
static +LookInFileData: Class<MFiles$MFFullTextSearchFlags__LookInFileData> & MFiles$MFFullTextSearchFlags__LookInFileData & 536870912;// 536870912

}

declare class MFiles$MFFullTextSearchFlags__None mixins MFiles$MFFullTextSearchFlags {}
declare class MFiles$MFFullTextSearchFlags__Stemming mixins MFiles$MFFullTextSearchFlags {}
declare class MFiles$MFFullTextSearchFlags__TypeAllWords mixins MFiles$MFFullTextSearchFlags {}
declare class MFiles$MFFullTextSearchFlags__TypeAnyWords mixins MFiles$MFFullTextSearchFlags {}
declare class MFiles$MFFullTextSearchFlags__LookInMetaData mixins MFiles$MFFullTextSearchFlags {}
declare class MFiles$MFFullTextSearchFlags__LookInFileData mixins MFiles$MFFullTextSearchFlags {}


declare  class MFiles$MFilesURLType {
  constructor(...args: empty): mixed;
static +Show: Class<MFiles$MFilesURLType__Show> & MFiles$MFilesURLType__Show & 0;// 0
static +Open: Class<MFiles$MFilesURLType__Open> & MFiles$MFilesURLType__Open & 1;// 1
static +View: Class<MFiles$MFilesURLType__View> & MFiles$MFilesURLType__View & 2;// 2
static +Edit: Class<MFiles$MFilesURLType__Edit> & MFiles$MFilesURLType__Edit & 3;// 3
static +ShowMetadata: Class<MFiles$MFilesURLType__ShowMetadata> & MFiles$MFilesURLType__ShowMetadata & 6;// 6

}

declare class MFiles$MFilesURLType__Show mixins MFiles$MFilesURLType {}
declare class MFiles$MFilesURLType__Open mixins MFiles$MFilesURLType {}
declare class MFiles$MFilesURLType__View mixins MFiles$MFilesURLType {}
declare class MFiles$MFilesURLType__Edit mixins MFiles$MFilesURLType {}
declare class MFiles$MFilesURLType__ShowMetadata mixins MFiles$MFilesURLType {}


declare  class MFiles$MFImpersonationType {
  constructor(...args: empty): mixed;
static +LocalSystem: Class<MFiles$MFImpersonationType__LocalSystem> & MFiles$MFImpersonationType__LocalSystem & 0;// 0
static +SpecificAccount: Class<MFiles$MFImpersonationType__SpecificAccount> & MFiles$MFImpersonationType__SpecificAccount & 1;// 1
static +ExtAccount: Class<MFiles$MFImpersonationType__ExtAccount> & MFiles$MFImpersonationType__ExtAccount & 2;// 2

}

declare class MFiles$MFImpersonationType__LocalSystem mixins MFiles$MFImpersonationType {}
declare class MFiles$MFImpersonationType__SpecificAccount mixins MFiles$MFImpersonationType {}
declare class MFiles$MFImpersonationType__ExtAccount mixins MFiles$MFImpersonationType {}


declare  class MFiles$MFImportContentFlag {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFImportContentFlag__None> & MFiles$MFImportContentFlag__None & 0;// 0
static +UseMultipleContentPackages: Class<MFiles$MFImportContentFlag__UseMultipleContentPackages> & MFiles$MFImportContentFlag__UseMultipleContentPackages & 1;// 1
static +DeleteContentPackage: Class<MFiles$MFImportContentFlag__DeleteContentPackage> & MFiles$MFImportContentFlag__DeleteContentPackage & 4;// 4
static +ImportCheckoutStates: Class<MFiles$MFImportContentFlag__ImportCheckoutStates> & MFiles$MFImportContentFlag__ImportCheckoutStates & 16;// 16
static +ResetExportTimestamps: Class<MFiles$MFImportContentFlag__ResetExportTimestamps> & MFiles$MFImportContentFlag__ResetExportTimestamps & 32;// 32
static +DoNotImportObjectDestructions: Class<MFiles$MFImportContentFlag__DoNotImportObjectDestructions> & MFiles$MFImportContentFlag__DoNotImportObjectDestructions & 64;// 64
static +UseNamesAsAliases: Class<MFiles$MFImportContentFlag__UseNamesAsAliases> & MFiles$MFImportContentFlag__UseNamesAsAliases & 128;// 128
static +ForceNoStructureIdUpdate: Class<MFiles$MFImportContentFlag__ForceNoStructureIdUpdate> & MFiles$MFImportContentFlag__ForceNoStructureIdUpdate & 16384;// 16384
static +OmitDoneFile: Class<MFiles$MFImportContentFlag__OmitDoneFile> & MFiles$MFImportContentFlag__OmitDoneFile & 32768;// 32768

}

declare class MFiles$MFImportContentFlag__None mixins MFiles$MFImportContentFlag {}
declare class MFiles$MFImportContentFlag__UseMultipleContentPackages mixins MFiles$MFImportContentFlag {}
declare class MFiles$MFImportContentFlag__DeleteContentPackage mixins MFiles$MFImportContentFlag {}
declare class MFiles$MFImportContentFlag__ImportCheckoutStates mixins MFiles$MFImportContentFlag {}
declare class MFiles$MFImportContentFlag__ResetExportTimestamps mixins MFiles$MFImportContentFlag {}
declare class MFiles$MFImportContentFlag__DoNotImportObjectDestructions mixins MFiles$MFImportContentFlag {}
declare class MFiles$MFImportContentFlag__UseNamesAsAliases mixins MFiles$MFImportContentFlag {}
declare class MFiles$MFImportContentFlag__ForceNoStructureIdUpdate mixins MFiles$MFImportContentFlag {}
declare class MFiles$MFImportContentFlag__OmitDoneFile mixins MFiles$MFImportContentFlag {}


declare  class MFiles$MFIndirectPropertyIDLevelType {
  constructor(...args: empty): mixed;
static +PropertyDef: Class<MFiles$MFIndirectPropertyIDLevelType__PropertyDef> & MFiles$MFIndirectPropertyIDLevelType__PropertyDef & 0;// 0
static +ObjectType: Class<MFiles$MFIndirectPropertyIDLevelType__ObjectType> & MFiles$MFIndirectPropertyIDLevelType__ObjectType & 1;// 1
static +StateChanger: Class<MFiles$MFIndirectPropertyIDLevelType__StateChanger> & MFiles$MFIndirectPropertyIDLevelType__StateChanger & 2;// 2

}

declare class MFiles$MFIndirectPropertyIDLevelType__PropertyDef mixins MFiles$MFIndirectPropertyIDLevelType {}
declare class MFiles$MFIndirectPropertyIDLevelType__ObjectType mixins MFiles$MFIndirectPropertyIDLevelType {}
declare class MFiles$MFIndirectPropertyIDLevelType__StateChanger mixins MFiles$MFIndirectPropertyIDLevelType {}


declare  class MFiles$MFLatestSpecificBehavior {
  constructor(...args: empty): mixed;
static +Normal: Class<MFiles$MFLatestSpecificBehavior__Normal> & MFiles$MFLatestSpecificBehavior__Normal & 0;// 0
static +Specific: Class<MFiles$MFLatestSpecificBehavior__Specific> & MFiles$MFLatestSpecificBehavior__Specific & 1;// 1
static +Latest: Class<MFiles$MFLatestSpecificBehavior__Latest> & MFiles$MFLatestSpecificBehavior__Latest & 2;// 2
static +Automatic: Class<MFiles$MFLatestSpecificBehavior__Automatic> & MFiles$MFLatestSpecificBehavior__Automatic & 3;// 3

}

declare class MFiles$MFLatestSpecificBehavior__Normal mixins MFiles$MFLatestSpecificBehavior {}
declare class MFiles$MFLatestSpecificBehavior__Specific mixins MFiles$MFLatestSpecificBehavior {}
declare class MFiles$MFLatestSpecificBehavior__Latest mixins MFiles$MFLatestSpecificBehavior {}
declare class MFiles$MFLatestSpecificBehavior__Automatic mixins MFiles$MFLatestSpecificBehavior {}


declare  class MFiles$MFLicenseType {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFLicenseType__None> & MFiles$MFLicenseType__None & 0;// 0
static +NamedUserLicense: Class<MFiles$MFLicenseType__NamedUserLicense> & MFiles$MFLicenseType__NamedUserLicense & 1;// 1
static +ConcurrentUserLicense: Class<MFiles$MFLicenseType__ConcurrentUserLicense> & MFiles$MFLicenseType__ConcurrentUserLicense & 2;// 2
static +ReadOnlyLicense: Class<MFiles$MFLicenseType__ReadOnlyLicense> & MFiles$MFLicenseType__ReadOnlyLicense & 3;// 3

}

declare class MFiles$MFLicenseType__None mixins MFiles$MFLicenseType {}
declare class MFiles$MFLicenseType__NamedUserLicense mixins MFiles$MFLicenseType {}
declare class MFiles$MFLicenseType__ConcurrentUserLicense mixins MFiles$MFLicenseType {}
declare class MFiles$MFLicenseType__ReadOnlyLicense mixins MFiles$MFLicenseType {}


declare  class MFiles$MFLoginAccountType {
  constructor(...args: empty): mixed;
static +MFiles: Class<MFiles$MFLoginAccountType__MFiles> & MFiles$MFLoginAccountType__MFiles & 1;// 1
static +Windows: Class<MFiles$MFLoginAccountType__Windows> & MFiles$MFLoginAccountType__Windows & 2;// 2

}

declare class MFiles$MFLoginAccountType__MFiles mixins MFiles$MFLoginAccountType {}
declare class MFiles$MFLoginAccountType__Windows mixins MFiles$MFLoginAccountType {}


declare  class MFiles$MFLoginServerRole {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFLoginServerRole__None> & MFiles$MFLoginServerRole__None & 0;// 0
static +SystemAdministrator: Class<MFiles$MFLoginServerRole__SystemAdministrator> & MFiles$MFLoginServerRole__SystemAdministrator & 1;// 1
static +VaultCreator: Class<MFiles$MFLoginServerRole__VaultCreator> & MFiles$MFLoginServerRole__VaultCreator & 2;// 2
static +BackupOperator: Class<MFiles$MFLoginServerRole__BackupOperator> & MFiles$MFLoginServerRole__BackupOperator & 4;// 4
static +LogIn: Class<MFiles$MFLoginServerRole__LogIn> & MFiles$MFLoginServerRole__LogIn & 8;// 8

}

declare class MFiles$MFLoginServerRole__None mixins MFiles$MFLoginServerRole {}
declare class MFiles$MFLoginServerRole__SystemAdministrator mixins MFiles$MFLoginServerRole {}
declare class MFiles$MFLoginServerRole__VaultCreator mixins MFiles$MFLoginServerRole {}
declare class MFiles$MFLoginServerRole__BackupOperator mixins MFiles$MFLoginServerRole {}
declare class MFiles$MFLoginServerRole__LogIn mixins MFiles$MFLoginServerRole {}


declare  class MFiles$MFMetadataStructureItem {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFMetadataStructureItem__None> & MFiles$MFMetadataStructureItem__None & 0;// 0
static +ObjectType: Class<MFiles$MFMetadataStructureItem__ObjectType> & MFiles$MFMetadataStructureItem__ObjectType & 1;// 1
static +PropertyDef: Class<MFiles$MFMetadataStructureItem__PropertyDef> & MFiles$MFMetadataStructureItem__PropertyDef & 2;// 2
static +Class: Class<MFiles$MFMetadataStructureItem__Class> & MFiles$MFMetadataStructureItem__Class & 3;// 3
static +Workflow: Class<MFiles$MFMetadataStructureItem__Workflow> & MFiles$MFMetadataStructureItem__Workflow & 4;// 4
static +State: Class<MFiles$MFMetadataStructureItem__State> & MFiles$MFMetadataStructureItem__State & 5;// 5
static +NamedACL: Class<MFiles$MFMetadataStructureItem__NamedACL> & MFiles$MFMetadataStructureItem__NamedACL & 6;// 6
static +User: Class<MFiles$MFMetadataStructureItem__User> & MFiles$MFMetadataStructureItem__User & 7;// 7
static +UserGroup: Class<MFiles$MFMetadataStructureItem__UserGroup> & MFiles$MFMetadataStructureItem__UserGroup & 8;// 8
static +ClassGroup: Class<MFiles$MFMetadataStructureItem__ClassGroup> & MFiles$MFMetadataStructureItem__ClassGroup & 9;// 9
static +ViewDef: Class<MFiles$MFMetadataStructureItem__ViewDef> & MFiles$MFMetadataStructureItem__ViewDef & 10;// 10
static +ValueListItem: Class<MFiles$MFMetadataStructureItem__ValueListItem> & MFiles$MFMetadataStructureItem__ValueListItem & 13;// 13
static +ValueList: Class<MFiles$MFMetadataStructureItem__ValueList> & MFiles$MFMetadataStructureItem__ValueList & 14;// 14
static +VaultEventHandler: Class<MFiles$MFMetadataStructureItem__VaultEventHandler> & MFiles$MFMetadataStructureItem__VaultEventHandler & 15;// 15
static +StateTransition: Class<MFiles$MFMetadataStructureItem__StateTransition> & MFiles$MFMetadataStructureItem__StateTransition & 16;// 16
static +All: Class<MFiles$MFMetadataStructureItem__All> & MFiles$MFMetadataStructureItem__All & 10000;// 10000

}

declare class MFiles$MFMetadataStructureItem__None mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__ObjectType mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__PropertyDef mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__Class mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__Workflow mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__State mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__NamedACL mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__User mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__UserGroup mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__ClassGroup mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__ViewDef mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__ValueListItem mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__ValueList mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__VaultEventHandler mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__StateTransition mixins MFiles$MFMetadataStructureItem {}
declare class MFiles$MFMetadataStructureItem__All mixins MFiles$MFMetadataStructureItem {}


declare  class MFiles$MFMetadataStructureSelectorFlags {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFMetadataStructureSelectorFlags__None> & MFiles$MFMetadataStructureSelectorFlags__None & 0;// 0
static +SelectNew: Class<MFiles$MFMetadataStructureSelectorFlags__SelectNew> & MFiles$MFMetadataStructureSelectorFlags__SelectNew & 1;// 1
static +SelectExisting: Class<MFiles$MFMetadataStructureSelectorFlags__SelectExisting> & MFiles$MFMetadataStructureSelectorFlags__SelectExisting & 2;// 2
static +IncludeNewDependencies: Class<MFiles$MFMetadataStructureSelectorFlags__IncludeNewDependencies> & MFiles$MFMetadataStructureSelectorFlags__IncludeNewDependencies & 4;// 4
static +IncludeExistingDependencies: Class<MFiles$MFMetadataStructureSelectorFlags__IncludeExistingDependencies> & MFiles$MFMetadataStructureSelectorFlags__IncludeExistingDependencies & 8;// 8

}

declare class MFiles$MFMetadataStructureSelectorFlags__None mixins MFiles$MFMetadataStructureSelectorFlags {}
declare class MFiles$MFMetadataStructureSelectorFlags__SelectNew mixins MFiles$MFMetadataStructureSelectorFlags {}
declare class MFiles$MFMetadataStructureSelectorFlags__SelectExisting mixins MFiles$MFMetadataStructureSelectorFlags {}
declare class MFiles$MFMetadataStructureSelectorFlags__IncludeNewDependencies mixins MFiles$MFMetadataStructureSelectorFlags {}
declare class MFiles$MFMetadataStructureSelectorFlags__IncludeExistingDependencies mixins MFiles$MFMetadataStructureSelectorFlags {}


declare  class MFiles$MFMetadataSyncFormat {
  constructor(...args: empty): mixed;
static +Word: Class<MFiles$MFMetadataSyncFormat__Word> & MFiles$MFMetadataSyncFormat__Word & 0;// 0
static +Excel: Class<MFiles$MFMetadataSyncFormat__Excel> & MFiles$MFMetadataSyncFormat__Excel & 1;// 1
static +PowerPoint: Class<MFiles$MFMetadataSyncFormat__PowerPoint> & MFiles$MFMetadataSyncFormat__PowerPoint & 2;// 2

}

declare class MFiles$MFMetadataSyncFormat__Word mixins MFiles$MFMetadataSyncFormat {}
declare class MFiles$MFMetadataSyncFormat__Excel mixins MFiles$MFMetadataSyncFormat {}
declare class MFiles$MFMetadataSyncFormat__PowerPoint mixins MFiles$MFMetadataSyncFormat {}


declare  class MFiles$MFNamedACLType {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFNamedACLType__None> & MFiles$MFNamedACLType__None & 0;// 0
static +Normal: Class<MFiles$MFNamedACLType__Normal> & MFiles$MFNamedACLType__Normal & 1;// 1
static +Internal: Class<MFiles$MFNamedACLType__Internal> & MFiles$MFNamedACLType__Internal & 2;// 2

}

declare class MFiles$MFNamedACLType__None mixins MFiles$MFNamedACLType {}
declare class MFiles$MFNamedACLType__Normal mixins MFiles$MFNamedACLType {}
declare class MFiles$MFNamedACLType__Internal mixins MFiles$MFNamedACLType {}


declare  class MFiles$MFNamedValueType {
  constructor(...args: empty): mixed;
static +ConfigurationValue: Class<MFiles$MFNamedValueType__ConfigurationValue> & MFiles$MFNamedValueType__ConfigurationValue & 3;// 3
static +UserDefinedValue: Class<MFiles$MFNamedValueType__UserDefinedValue> & MFiles$MFNamedValueType__UserDefinedValue & 4;// 4
static +RegistryValue: Class<MFiles$MFNamedValueType__RegistryValue> & MFiles$MFNamedValueType__RegistryValue & 5;// 5
static +FolderConfiguration: Class<MFiles$MFNamedValueType__FolderConfiguration> & MFiles$MFNamedValueType__FolderConfiguration & 6;// 6
static +AdminConfiguration: Class<MFiles$MFNamedValueType__AdminConfiguration> & MFiles$MFNamedValueType__AdminConfiguration & 7;// 7
static +SystemAdminConfiguration: Class<MFiles$MFNamedValueType__SystemAdminConfiguration> & MFiles$MFNamedValueType__SystemAdminConfiguration & 8;// 8

}

declare class MFiles$MFNamedValueType__ConfigurationValue mixins MFiles$MFNamedValueType {}
declare class MFiles$MFNamedValueType__UserDefinedValue mixins MFiles$MFNamedValueType {}
declare class MFiles$MFNamedValueType__RegistryValue mixins MFiles$MFNamedValueType {}
declare class MFiles$MFNamedValueType__FolderConfiguration mixins MFiles$MFNamedValueType {}
declare class MFiles$MFNamedValueType__AdminConfiguration mixins MFiles$MFNamedValueType {}
declare class MFiles$MFNamedValueType__SystemAdminConfiguration mixins MFiles$MFNamedValueType {}


declare  class MFiles$MFObjectAccess {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFObjectAccess__None> & MFiles$MFObjectAccess__None & 0;// 0
static +Read: Class<MFiles$MFObjectAccess__Read> & MFiles$MFObjectAccess__Read & 1;// 1
static +Edit: Class<MFiles$MFObjectAccess__Edit> & MFiles$MFObjectAccess__Edit & 2;// 2
static +ChangePermissions: Class<MFiles$MFObjectAccess__ChangePermissions> & MFiles$MFObjectAccess__ChangePermissions & 4;// 4
static +Delete: Class<MFiles$MFObjectAccess__Delete> & MFiles$MFObjectAccess__Delete & 8;// 8
static +AttachObjects: Class<MFiles$MFObjectAccess__AttachObjects> & MFiles$MFObjectAccess__AttachObjects & 16;// 16

}

declare class MFiles$MFObjectAccess__None mixins MFiles$MFObjectAccess {}
declare class MFiles$MFObjectAccess__Read mixins MFiles$MFObjectAccess {}
declare class MFiles$MFObjectAccess__Edit mixins MFiles$MFObjectAccess {}
declare class MFiles$MFObjectAccess__ChangePermissions mixins MFiles$MFObjectAccess {}
declare class MFiles$MFObjectAccess__Delete mixins MFiles$MFObjectAccess {}
declare class MFiles$MFObjectAccess__AttachObjects mixins MFiles$MFObjectAccess {}


declare  class MFiles$MFObjectOperationFlags {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFObjectOperationFlags__None> & MFiles$MFObjectOperationFlags__None & 0;// 0
static +RequireReadAccess: Class<MFiles$MFObjectOperationFlags__RequireReadAccess> & MFiles$MFObjectOperationFlags__RequireReadAccess & 1;// 1
static +RequireEditAccess: Class<MFiles$MFObjectOperationFlags__RequireEditAccess> & MFiles$MFObjectOperationFlags__RequireEditAccess & 2;// 2
static +DisallowNameChange: Class<MFiles$MFObjectOperationFlags__DisallowNameChange> & MFiles$MFObjectOperationFlags__DisallowNameChange & 4;// 4
static +RequireChangeSecurityAccess: Class<MFiles$MFObjectOperationFlags__RequireChangeSecurityAccess> & MFiles$MFObjectOperationFlags__RequireChangeSecurityAccess & 8;// 8
static +RequireFullAccess: Class<MFiles$MFObjectOperationFlags__RequireFullAccess> & MFiles$MFObjectOperationFlags__RequireFullAccess & 16;// 16
static +ChangeACLInAllVersions: Class<MFiles$MFObjectOperationFlags__ChangeACLInAllVersions> & MFiles$MFObjectOperationFlags__ChangeACLInAllVersions & 32;// 32
static +RequireSomeAccess: Class<MFiles$MFObjectOperationFlags__RequireSomeAccess> & MFiles$MFObjectOperationFlags__RequireSomeAccess & 64;// 64

}

declare class MFiles$MFObjectOperationFlags__None mixins MFiles$MFObjectOperationFlags {}
declare class MFiles$MFObjectOperationFlags__RequireReadAccess mixins MFiles$MFObjectOperationFlags {}
declare class MFiles$MFObjectOperationFlags__RequireEditAccess mixins MFiles$MFObjectOperationFlags {}
declare class MFiles$MFObjectOperationFlags__DisallowNameChange mixins MFiles$MFObjectOperationFlags {}
declare class MFiles$MFObjectOperationFlags__RequireChangeSecurityAccess mixins MFiles$MFObjectOperationFlags {}
declare class MFiles$MFObjectOperationFlags__RequireFullAccess mixins MFiles$MFObjectOperationFlags {}
declare class MFiles$MFObjectOperationFlags__ChangeACLInAllVersions mixins MFiles$MFObjectOperationFlags {}
declare class MFiles$MFObjectOperationFlags__RequireSomeAccess mixins MFiles$MFObjectOperationFlags {}


declare  class MFiles$MFObjectTypeAccess {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFObjectTypeAccess__None> & MFiles$MFObjectTypeAccess__None & 0;// 0
static +SeeName: Class<MFiles$MFObjectTypeAccess__SeeName> & MFiles$MFObjectTypeAccess__SeeName & 1;// 1
static +AddNewItems: Class<MFiles$MFObjectTypeAccess__AddNewItems> & MFiles$MFObjectTypeAccess__AddNewItems & 2;// 2

}

declare class MFiles$MFObjectTypeAccess__None mixins MFiles$MFObjectTypeAccess {}
declare class MFiles$MFObjectTypeAccess__SeeName mixins MFiles$MFObjectTypeAccess {}
declare class MFiles$MFObjectTypeAccess__AddNewItems mixins MFiles$MFObjectTypeAccess {}


declare  class MFiles$MFObjectVersionFlag {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFObjectVersionFlag__None> & MFiles$MFObjectVersionFlag__None & 0;// 0
static +Completed: Class<MFiles$MFObjectVersionFlag__Completed> & MFiles$MFObjectVersionFlag__Completed & 1;// 1
static +HasRelatedObjects: Class<MFiles$MFObjectVersionFlag__HasRelatedObjects> & MFiles$MFObjectVersionFlag__HasRelatedObjects & 2;// 2

}

declare class MFiles$MFObjectVersionFlag__None mixins MFiles$MFObjectVersionFlag {}
declare class MFiles$MFObjectVersionFlag__Completed mixins MFiles$MFObjectVersionFlag {}
declare class MFiles$MFObjectVersionFlag__HasRelatedObjects mixins MFiles$MFObjectVersionFlag {}


declare  class MFiles$MFObjectWindowMode {
  constructor(...args: empty): mixed;
static +Insert: Class<MFiles$MFObjectWindowMode__Insert> & MFiles$MFObjectWindowMode__Insert & 0;// 0
static +InsertSourceFiles: Class<MFiles$MFObjectWindowMode__InsertSourceFiles> & MFiles$MFObjectWindowMode__InsertSourceFiles & 1;// 1
static +InsertSaveAsType: Class<MFiles$MFObjectWindowMode__InsertSaveAsType> & MFiles$MFObjectWindowMode__InsertSaveAsType & 2;// 2
static +Edit: Class<MFiles$MFObjectWindowMode__Edit> & MFiles$MFObjectWindowMode__Edit & 3;// 3
static +EditApplicationModal: Class<MFiles$MFObjectWindowMode__EditApplicationModal> & MFiles$MFObjectWindowMode__EditApplicationModal & 4;// 4

}

declare class MFiles$MFObjectWindowMode__Insert mixins MFiles$MFObjectWindowMode {}
declare class MFiles$MFObjectWindowMode__InsertSourceFiles mixins MFiles$MFObjectWindowMode {}
declare class MFiles$MFObjectWindowMode__InsertSaveAsType mixins MFiles$MFObjectWindowMode {}
declare class MFiles$MFObjectWindowMode__Edit mixins MFiles$MFObjectWindowMode {}
declare class MFiles$MFObjectWindowMode__EditApplicationModal mixins MFiles$MFObjectWindowMode {}


declare  class MFiles$MFObjectWindowResultCode {
  constructor(...args: empty): mixed;
static +Ok: Class<MFiles$MFObjectWindowResultCode__Ok> & MFiles$MFObjectWindowResultCode__Ok & 0;// 0
static +Cancel: Class<MFiles$MFObjectWindowResultCode__Cancel> & MFiles$MFObjectWindowResultCode__Cancel & 1;// 1
static +OkToAll: Class<MFiles$MFObjectWindowResultCode__OkToAll> & MFiles$MFObjectWindowResultCode__OkToAll & 2;// 2
static +SkipThis: Class<MFiles$MFObjectWindowResultCode__SkipThis> & MFiles$MFObjectWindowResultCode__SkipThis & 3;// 3

}

declare class MFiles$MFObjectWindowResultCode__Ok mixins MFiles$MFObjectWindowResultCode {}
declare class MFiles$MFObjectWindowResultCode__Cancel mixins MFiles$MFObjectWindowResultCode {}
declare class MFiles$MFObjectWindowResultCode__OkToAll mixins MFiles$MFObjectWindowResultCode {}
declare class MFiles$MFObjectWindowResultCode__SkipThis mixins MFiles$MFObjectWindowResultCode {}


declare  class MFiles$MFOCRDimensionUnit {
  constructor(...args: empty): mixed;
static +Pixel: Class<MFiles$MFOCRDimensionUnit__Pixel> & MFiles$MFOCRDimensionUnit__Pixel & 0;// 0
static +MillimeterX10: Class<MFiles$MFOCRDimensionUnit__MillimeterX10> & MFiles$MFOCRDimensionUnit__MillimeterX10 & 1;// 1
static +InchX100: Class<MFiles$MFOCRDimensionUnit__InchX100> & MFiles$MFOCRDimensionUnit__InchX100 & 2;// 2

}

declare class MFiles$MFOCRDimensionUnit__Pixel mixins MFiles$MFOCRDimensionUnit {}
declare class MFiles$MFOCRDimensionUnit__MillimeterX10 mixins MFiles$MFOCRDimensionUnit {}
declare class MFiles$MFOCRDimensionUnit__InchX100 mixins MFiles$MFOCRDimensionUnit {}


declare  class MFiles$MFOCRLanguage {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFOCRLanguage__None> & MFiles$MFOCRLanguage__None & 0;// 0
static +Neutral: Class<MFiles$MFOCRLanguage__Neutral> & MFiles$MFOCRLanguage__Neutral & 1;// 1
static +NumbersOnly: Class<MFiles$MFOCRLanguage__NumbersOnly> & MFiles$MFOCRLanguage__NumbersOnly & 2;// 2
static +EnglishUS: Class<MFiles$MFOCRLanguage__EnglishUS> & MFiles$MFOCRLanguage__EnglishUS & 3;// 3
static +EnglishBr: Class<MFiles$MFOCRLanguage__EnglishBr> & MFiles$MFOCRLanguage__EnglishBr & 4;// 4
static +German: Class<MFiles$MFOCRLanguage__German> & MFiles$MFOCRLanguage__German & 5;// 5
static +French: Class<MFiles$MFOCRLanguage__French> & MFiles$MFOCRLanguage__French & 6;// 6
static +Spanish: Class<MFiles$MFOCRLanguage__Spanish> & MFiles$MFOCRLanguage__Spanish & 7;// 7
static +Italian: Class<MFiles$MFOCRLanguage__Italian> & MFiles$MFOCRLanguage__Italian & 8;// 8
static +Finnish: Class<MFiles$MFOCRLanguage__Finnish> & MFiles$MFOCRLanguage__Finnish & 9;// 9
static +Swedish: Class<MFiles$MFOCRLanguage__Swedish> & MFiles$MFOCRLanguage__Swedish & 10;// 10
static +Danish: Class<MFiles$MFOCRLanguage__Danish> & MFiles$MFOCRLanguage__Danish & 11;// 11
static +Norwegian: Class<MFiles$MFOCRLanguage__Norwegian> & MFiles$MFOCRLanguage__Norwegian & 12;// 12
static +Nynorsk: Class<MFiles$MFOCRLanguage__Nynorsk> & MFiles$MFOCRLanguage__Nynorsk & 13;// 13
static +Estonian: Class<MFiles$MFOCRLanguage__Estonian> & MFiles$MFOCRLanguage__Estonian & 14;// 14
static +Latvian: Class<MFiles$MFOCRLanguage__Latvian> & MFiles$MFOCRLanguage__Latvian & 15;// 15
static +Lithuanian: Class<MFiles$MFOCRLanguage__Lithuanian> & MFiles$MFOCRLanguage__Lithuanian & 16;// 16
static +Dutch: Class<MFiles$MFOCRLanguage__Dutch> & MFiles$MFOCRLanguage__Dutch & 17;// 17
static +Portuguese: Class<MFiles$MFOCRLanguage__Portuguese> & MFiles$MFOCRLanguage__Portuguese & 18;// 18
static +Brazilian: Class<MFiles$MFOCRLanguage__Brazilian> & MFiles$MFOCRLanguage__Brazilian & 19;// 19
static +Galician: Class<MFiles$MFOCRLanguage__Galician> & MFiles$MFOCRLanguage__Galician & 20;// 20
static +Icelandic: Class<MFiles$MFOCRLanguage__Icelandic> & MFiles$MFOCRLanguage__Icelandic & 21;// 21
static +Greek: Class<MFiles$MFOCRLanguage__Greek> & MFiles$MFOCRLanguage__Greek & 22;// 22
static +Czech: Class<MFiles$MFOCRLanguage__Czech> & MFiles$MFOCRLanguage__Czech & 23;// 23
static +Hungarian: Class<MFiles$MFOCRLanguage__Hungarian> & MFiles$MFOCRLanguage__Hungarian & 24;// 24
static +Polish: Class<MFiles$MFOCRLanguage__Polish> & MFiles$MFOCRLanguage__Polish & 25;// 25
static +Romanian: Class<MFiles$MFOCRLanguage__Romanian> & MFiles$MFOCRLanguage__Romanian & 26;// 26
static +Slovak: Class<MFiles$MFOCRLanguage__Slovak> & MFiles$MFOCRLanguage__Slovak & 27;// 27
static +Croatian: Class<MFiles$MFOCRLanguage__Croatian> & MFiles$MFOCRLanguage__Croatian & 28;// 28
static +Serbian: Class<MFiles$MFOCRLanguage__Serbian> & MFiles$MFOCRLanguage__Serbian & 29;// 29
static +Slovenian: Class<MFiles$MFOCRLanguage__Slovenian> & MFiles$MFOCRLanguage__Slovenian & 30;// 30
static +Luxembourgish: Class<MFiles$MFOCRLanguage__Luxembourgish> & MFiles$MFOCRLanguage__Luxembourgish & 31;// 31
static +SwissGerman: Class<MFiles$MFOCRLanguage__SwissGerman> & MFiles$MFOCRLanguage__SwissGerman & 32;// 32
static +Turkish: Class<MFiles$MFOCRLanguage__Turkish> & MFiles$MFOCRLanguage__Turkish & 33;// 33
static +Russian: Class<MFiles$MFOCRLanguage__Russian> & MFiles$MFOCRLanguage__Russian & 34;// 34
static +ByeloRussian: Class<MFiles$MFOCRLanguage__ByeloRussian> & MFiles$MFOCRLanguage__ByeloRussian & 35;// 35
static +Ukrainian: Class<MFiles$MFOCRLanguage__Ukrainian> & MFiles$MFOCRLanguage__Ukrainian & 36;// 36
static +Macedonian: Class<MFiles$MFOCRLanguage__Macedonian> & MFiles$MFOCRLanguage__Macedonian & 37;// 37
static +Bulgarian: Class<MFiles$MFOCRLanguage__Bulgarian> & MFiles$MFOCRLanguage__Bulgarian & 38;// 38
static +Afrikaans: Class<MFiles$MFOCRLanguage__Afrikaans> & MFiles$MFOCRLanguage__Afrikaans & 39;// 39
static +Albanian: Class<MFiles$MFOCRLanguage__Albanian> & MFiles$MFOCRLanguage__Albanian & 40;// 40
static +Catalan: Class<MFiles$MFOCRLanguage__Catalan> & MFiles$MFOCRLanguage__Catalan & 41;// 41
static +IrishGaelic: Class<MFiles$MFOCRLanguage__IrishGaelic> & MFiles$MFOCRLanguage__IrishGaelic & 42;// 42
static +ScottishGaelic: Class<MFiles$MFOCRLanguage__ScottishGaelic> & MFiles$MFOCRLanguage__ScottishGaelic & 43;// 43
static +Welsh: Class<MFiles$MFOCRLanguage__Welsh> & MFiles$MFOCRLanguage__Welsh & 44;// 44
static +Basque: Class<MFiles$MFOCRLanguage__Basque> & MFiles$MFOCRLanguage__Basque & 45;// 45
static +Mexican: Class<MFiles$MFOCRLanguage__Mexican> & MFiles$MFOCRLanguage__Mexican & 46;// 46

}

declare class MFiles$MFOCRLanguage__None mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Neutral mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__NumbersOnly mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__EnglishUS mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__EnglishBr mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__German mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__French mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Spanish mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Italian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Finnish mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Swedish mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Danish mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Norwegian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Nynorsk mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Estonian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Latvian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Lithuanian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Dutch mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Portuguese mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Brazilian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Galician mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Icelandic mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Greek mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Czech mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Hungarian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Polish mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Romanian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Slovak mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Croatian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Serbian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Slovenian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Luxembourgish mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__SwissGerman mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Turkish mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Russian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__ByeloRussian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Ukrainian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Macedonian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Bulgarian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Afrikaans mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Albanian mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Catalan mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__IrishGaelic mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__ScottishGaelic mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Welsh mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Basque mixins MFiles$MFOCRLanguage {}
declare class MFiles$MFOCRLanguage__Mexican mixins MFiles$MFOCRLanguage {}


declare  class MFiles$MFOCRZoneRecognitionMode {
  constructor(...args: empty): mixed;
static +NoZoneRecognition: Class<MFiles$MFOCRZoneRecognitionMode__NoZoneRecognition> & MFiles$MFOCRZoneRecognitionMode__NoZoneRecognition & 0;// 0
static +RecognizeSpecifiedZones: Class<MFiles$MFOCRZoneRecognitionMode__RecognizeSpecifiedZones> & MFiles$MFOCRZoneRecognitionMode__RecognizeSpecifiedZones & 1;// 1
static +AutoDetectZones: Class<MFiles$MFOCRZoneRecognitionMode__AutoDetectZones> & MFiles$MFOCRZoneRecognitionMode__AutoDetectZones & 2;// 2

}

declare class MFiles$MFOCRZoneRecognitionMode__NoZoneRecognition mixins MFiles$MFOCRZoneRecognitionMode {}
declare class MFiles$MFOCRZoneRecognitionMode__RecognizeSpecifiedZones mixins MFiles$MFOCRZoneRecognitionMode {}
declare class MFiles$MFOCRZoneRecognitionMode__AutoDetectZones mixins MFiles$MFOCRZoneRecognitionMode {}


declare  class MFiles$MFOfflineTransitionResultFlags {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFOfflineTransitionResultFlags__None> & MFiles$MFOfflineTransitionResultFlags__None & 0;// 0
static +StatusChanged: Class<MFiles$MFOfflineTransitionResultFlags__StatusChanged> & MFiles$MFOfflineTransitionResultFlags__StatusChanged & 1;// 1
static +LoggedOut: Class<MFiles$MFOfflineTransitionResultFlags__LoggedOut> & MFiles$MFOfflineTransitionResultFlags__LoggedOut & 2;// 2

}

declare class MFiles$MFOfflineTransitionResultFlags__None mixins MFiles$MFOfflineTransitionResultFlags {}
declare class MFiles$MFOfflineTransitionResultFlags__StatusChanged mixins MFiles$MFOfflineTransitionResultFlags {}
declare class MFiles$MFOfflineTransitionResultFlags__LoggedOut mixins MFiles$MFOfflineTransitionResultFlags {}


declare  class MFiles$MFOnlineTransitionResultFlags {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFOnlineTransitionResultFlags__None> & MFiles$MFOnlineTransitionResultFlags__None & 0;// 0
static +StatusChanged: Class<MFiles$MFOnlineTransitionResultFlags__StatusChanged> & MFiles$MFOnlineTransitionResultFlags__StatusChanged & 1;// 1

}

declare class MFiles$MFOnlineTransitionResultFlags__None mixins MFiles$MFOnlineTransitionResultFlags {}
declare class MFiles$MFOnlineTransitionResultFlags__StatusChanged mixins MFiles$MFOnlineTransitionResultFlags {}


declare  class MFiles$MFParentChildBehavior {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFParentChildBehavior__None> & MFiles$MFParentChildBehavior__None & 0;// 0
static +IncludeChildValues: Class<MFiles$MFParentChildBehavior__IncludeChildValues> & MFiles$MFParentChildBehavior__IncludeChildValues & 1;// 1
static +IncludeParentValues: Class<MFiles$MFParentChildBehavior__IncludeParentValues> & MFiles$MFParentChildBehavior__IncludeParentValues & 2;// 2

}

declare class MFiles$MFParentChildBehavior__None mixins MFiles$MFParentChildBehavior {}
declare class MFiles$MFParentChildBehavior__IncludeChildValues mixins MFiles$MFParentChildBehavior {}
declare class MFiles$MFParentChildBehavior__IncludeParentValues mixins MFiles$MFParentChildBehavior {}


declare  class MFiles$MFPermission {
  constructor(...args: empty): mixed;
static +Deny: Class<MFiles$MFPermission__Deny> & MFiles$MFPermission__Deny & 0;// 0
static +Allow: Class<MFiles$MFPermission__Allow> & MFiles$MFPermission__Allow & 1;// 1
static +NotSet: Class<MFiles$MFPermission__NotSet> & MFiles$MFPermission__NotSet & 2;// 2

}

declare class MFiles$MFPermission__Deny mixins MFiles$MFPermission {}
declare class MFiles$MFPermission__Allow mixins MFiles$MFPermission {}
declare class MFiles$MFPermission__NotSet mixins MFiles$MFPermission {}


declare  class MFiles$MFPermissionsExpressionType {
  constructor(...args: empty): mixed;
static +ACL: Class<MFiles$MFPermissionsExpressionType__ACL> & MFiles$MFPermissionsExpressionType__ACL & 0;// 0
static +VisibleTo: Class<MFiles$MFPermissionsExpressionType__VisibleTo> & MFiles$MFPermissionsExpressionType__VisibleTo & 1;// 1
static +EditableBy: Class<MFiles$MFPermissionsExpressionType__EditableBy> & MFiles$MFPermissionsExpressionType__EditableBy & 2;// 2
static +PermissionsChangeableBy: Class<MFiles$MFPermissionsExpressionType__PermissionsChangeableBy> & MFiles$MFPermissionsExpressionType__PermissionsChangeableBy & 3;// 3
static +FullControlBy: Class<MFiles$MFPermissionsExpressionType__FullControlBy> & MFiles$MFPermissionsExpressionType__FullControlBy & 4;// 4
static +DeletableBy: Class<MFiles$MFPermissionsExpressionType__DeletableBy> & MFiles$MFPermissionsExpressionType__DeletableBy & 5;// 5
static +ObjectsAttachableToThisItemBy: Class<MFiles$MFPermissionsExpressionType__ObjectsAttachableToThisItemBy> & MFiles$MFPermissionsExpressionType__ObjectsAttachableToThisItemBy & 6;// 6

}

declare class MFiles$MFPermissionsExpressionType__ACL mixins MFiles$MFPermissionsExpressionType {}
declare class MFiles$MFPermissionsExpressionType__VisibleTo mixins MFiles$MFPermissionsExpressionType {}
declare class MFiles$MFPermissionsExpressionType__EditableBy mixins MFiles$MFPermissionsExpressionType {}
declare class MFiles$MFPermissionsExpressionType__PermissionsChangeableBy mixins MFiles$MFPermissionsExpressionType {}
declare class MFiles$MFPermissionsExpressionType__FullControlBy mixins MFiles$MFPermissionsExpressionType {}
declare class MFiles$MFPermissionsExpressionType__DeletableBy mixins MFiles$MFPermissionsExpressionType {}
declare class MFiles$MFPermissionsExpressionType__ObjectsAttachableToThisItemBy mixins MFiles$MFPermissionsExpressionType {}


declare  class MFiles$MFPredefinedSearchFilterType {
  constructor(...args: empty): mixed;
static +Unspecified: Class<MFiles$MFPredefinedSearchFilterType__Unspecified> & MFiles$MFPredefinedSearchFilterType__Unspecified & 0;// 0
static +ObjectType: Class<MFiles$MFPredefinedSearchFilterType__ObjectType> & MFiles$MFPredefinedSearchFilterType__ObjectType & 1;// 1
static +DocumentsModifiedToday: Class<MFiles$MFPredefinedSearchFilterType__DocumentsModifiedToday> & MFiles$MFPredefinedSearchFilterType__DocumentsModifiedToday & 30000;// 30000
static +DocumentsModifiedLastWeek: Class<MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastWeek> & MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastWeek & 30001;// 30001
static +DocumentsModifiedLastMonth: Class<MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastMonth> & MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastMonth & 30002;// 30002
static +DocumentsModifiedLastYear: Class<MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastYear> & MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastYear & 30003;// 30003
static +DocumentsAccessedByMeToday: Class<MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeToday> & MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeToday & 30004;// 30004
static +DocumentsAccessedByMeLastWeek: Class<MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastWeek> & MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastWeek & 30005;// 30005
static +DocumentsAccessedByMeLastMonth: Class<MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastMonth> & MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastMonth & 30006;// 30006
static +DocumentsAccessedByMeLastYear: Class<MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastYear> & MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastYear & 30007;// 30007

}

declare class MFiles$MFPredefinedSearchFilterType__Unspecified mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__ObjectType mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__DocumentsModifiedToday mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastWeek mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastMonth mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__DocumentsModifiedLastYear mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeToday mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastWeek mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastMonth mixins MFiles$MFPredefinedSearchFilterType {}
declare class MFiles$MFPredefinedSearchFilterType__DocumentsAccessedByMeLastYear mixins MFiles$MFPredefinedSearchFilterType {}


declare  class MFiles$MFProductMode {
  constructor(...args: empty): mixed;
static +Full: Class<MFiles$MFProductMode__Full> & MFiles$MFProductMode__Full & 0;// 0
static +Express: Class<MFiles$MFProductMode__Express> & MFiles$MFProductMode__Express & 1;// 1
static +Business: Class<MFiles$MFProductMode__Business> & MFiles$MFProductMode__Business & 2;// 2

}

declare class MFiles$MFProductMode__Full mixins MFiles$MFProductMode {}
declare class MFiles$MFProductMode__Express mixins MFiles$MFProductMode {}
declare class MFiles$MFProductMode__Business mixins MFiles$MFProductMode {}


declare  class MFiles$MFPropertyDefAccess {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFPropertyDefAccess__None> & MFiles$MFPropertyDefAccess__None & 0;// 0
static +See: Class<MFiles$MFPropertyDefAccess__See> & MFiles$MFPropertyDefAccess__See & 1;// 1
static +Edit: Class<MFiles$MFPropertyDefAccess__Edit> & MFiles$MFPropertyDefAccess__Edit & 2;// 2

}

declare class MFiles$MFPropertyDefAccess__None mixins MFiles$MFPropertyDefAccess {}
declare class MFiles$MFPropertyDefAccess__See mixins MFiles$MFPropertyDefAccess {}
declare class MFiles$MFPropertyDefAccess__Edit mixins MFiles$MFPropertyDefAccess {}


declare  class MFiles$MFRelationshipsMode {
  constructor(...args: empty): mixed;
static +FromThisObject: Class<MFiles$MFRelationshipsMode__FromThisObject> & MFiles$MFRelationshipsMode__FromThisObject & 1;// 1
static +ToThisObject: Class<MFiles$MFRelationshipsMode__ToThisObject> & MFiles$MFRelationshipsMode__ToThisObject & 2;// 2
static +All: Class<MFiles$MFRelationshipsMode__All> & MFiles$MFRelationshipsMode__All & 3;// 3

}

declare class MFiles$MFRelationshipsMode__FromThisObject mixins MFiles$MFRelationshipsMode {}
declare class MFiles$MFRelationshipsMode__ToThisObject mixins MFiles$MFRelationshipsMode {}
declare class MFiles$MFRelationshipsMode__All mixins MFiles$MFRelationshipsMode {}


declare  class MFiles$MFScheduledJobType {
  constructor(...args: empty): mixed;
static +Uninitialized: Class<MFiles$MFScheduledJobType__Uninitialized> & MFiles$MFScheduledJobType__Uninitialized & 0;// 0
static +Backup: Class<MFiles$MFScheduledJobType__Backup> & MFiles$MFScheduledJobType__Backup & 1;// 1
static +Restore: Class<MFiles$MFScheduledJobType__Restore> & MFiles$MFScheduledJobType__Restore & 2;// 2
static +CopyVault: Class<MFiles$MFScheduledJobType__CopyVault> & MFiles$MFScheduledJobType__CopyVault & 3;// 3
static +VerifyVault: Class<MFiles$MFScheduledJobType__VerifyVault> & MFiles$MFScheduledJobType__VerifyVault & 4;// 4
static +ExportContent: Class<MFiles$MFScheduledJobType__ExportContent> & MFiles$MFScheduledJobType__ExportContent & 5;// 5
static +ArchiveOldVersions: Class<MFiles$MFScheduledJobType__ArchiveOldVersions> & MFiles$MFScheduledJobType__ArchiveOldVersions & 6;// 6
static +ImportContent: Class<MFiles$MFScheduledJobType__ImportContent> & MFiles$MFScheduledJobType__ImportContent & 7;// 7
static +OptimizeVault: Class<MFiles$MFScheduledJobType__OptimizeVault> & MFiles$MFScheduledJobType__OptimizeVault & 8;// 8
static +Recalculate: Class<MFiles$MFScheduledJobType__Recalculate> & MFiles$MFScheduledJobType__Recalculate & 9;// 9
static +MigrateVault: Class<MFiles$MFScheduledJobType__MigrateVault> & MFiles$MFScheduledJobType__MigrateVault & 10;// 10

}

declare class MFiles$MFScheduledJobType__Uninitialized mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__Backup mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__Restore mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__CopyVault mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__VerifyVault mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__ExportContent mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__ArchiveOldVersions mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__ImportContent mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__OptimizeVault mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__Recalculate mixins MFiles$MFScheduledJobType {}
declare class MFiles$MFScheduledJobType__MigrateVault mixins MFiles$MFScheduledJobType {}


declare  class MFiles$MFSearchFlags {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFSearchFlags__None> & MFiles$MFSearchFlags__None & 0;// 0
static +LookInAllVersions: Class<MFiles$MFSearchFlags__LookInAllVersions> & MFiles$MFSearchFlags__LookInAllVersions & 1;// 1
static +ReturnLatestVisibleVersion: Class<MFiles$MFSearchFlags__ReturnLatestVisibleVersion> & MFiles$MFSearchFlags__ReturnLatestVisibleVersion & 2;// 2
static +LookAllObjectTypes: Class<MFiles$MFSearchFlags__LookAllObjectTypes> & MFiles$MFSearchFlags__LookAllObjectTypes & 4;// 4
static +DisableRelevancyRanking: Class<MFiles$MFSearchFlags__DisableRelevancyRanking> & MFiles$MFSearchFlags__DisableRelevancyRanking & 16;// 16

}

declare class MFiles$MFSearchFlags__None mixins MFiles$MFSearchFlags {}
declare class MFiles$MFSearchFlags__LookInAllVersions mixins MFiles$MFSearchFlags {}
declare class MFiles$MFSearchFlags__ReturnLatestVisibleVersion mixins MFiles$MFSearchFlags {}
declare class MFiles$MFSearchFlags__LookAllObjectTypes mixins MFiles$MFSearchFlags {}
declare class MFiles$MFSearchFlags__DisableRelevancyRanking mixins MFiles$MFSearchFlags {}


declare  class MFiles$MFServerConnection {
  constructor(...args: empty): mixed;
static +uthenticated: Class<MFiles$MFServerConnection__uthenticated> & MFiles$MFServerConnection__uthenticated & 1;// 1
static +nonymous: Class<MFiles$MFServerConnection__nonymous> & MFiles$MFServerConnection__nonymous & 2;// 2

}

declare class MFiles$MFServerConnection__uthenticated mixins MFiles$MFServerConnection {}
declare class MFiles$MFServerConnection__nonymous mixins MFiles$MFServerConnection {}


declare  class MFiles$MFSignaturePromptInfoType {
  constructor(...args: empty): mixed;
static +Fixed: Class<MFiles$MFSignaturePromptInfoType__Fixed> & MFiles$MFSignaturePromptInfoType__Fixed & 0;// 0
static +Selectable: Class<MFiles$MFSignaturePromptInfoType__Selectable> & MFiles$MFSignaturePromptInfoType__Selectable & 1;// 1
static +MetadataBased: Class<MFiles$MFSignaturePromptInfoType__MetadataBased> & MFiles$MFSignaturePromptInfoType__MetadataBased & 2;// 2

}

declare class MFiles$MFSignaturePromptInfoType__Fixed mixins MFiles$MFSignaturePromptInfoType {}
declare class MFiles$MFSignaturePromptInfoType__Selectable mixins MFiles$MFSignaturePromptInfoType {}
declare class MFiles$MFSignaturePromptInfoType__MetadataBased mixins MFiles$MFSignaturePromptInfoType {}


declare  class MFiles$MFSoftwarePlatformType {
  constructor(...args: empty): mixed;
static +Win32: Class<MFiles$MFSoftwarePlatformType__Win32> & MFiles$MFSoftwarePlatformType__Win32 & 0;// 0
static +X64: Class<MFiles$MFSoftwarePlatformType__X64> & MFiles$MFSoftwarePlatformType__X64 & 1;// 1

}

declare class MFiles$MFSoftwarePlatformType__Win32 mixins MFiles$MFSoftwarePlatformType {}
declare class MFiles$MFSoftwarePlatformType__X64 mixins MFiles$MFSoftwarePlatformType {}


declare  class MFiles$MFSpecialObjectFlag {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFSpecialObjectFlag__None> & MFiles$MFSpecialObjectFlag__None & 0;// 0
static +Shortcut: Class<MFiles$MFSpecialObjectFlag__Shortcut> & MFiles$MFSpecialObjectFlag__Shortcut & 1;// 1
static +Deleted: Class<MFiles$MFSpecialObjectFlag__Deleted> & MFiles$MFSpecialObjectFlag__Deleted & 2;// 2
static +RecentlyAccessedByValid: Class<MFiles$MFSpecialObjectFlag__RecentlyAccessedByValid> & MFiles$MFSpecialObjectFlag__RecentlyAccessedByValid & 4;// 4
static +HasSharedFiles: Class<MFiles$MFSpecialObjectFlag__HasSharedFiles> & MFiles$MFSpecialObjectFlag__HasSharedFiles & 8;// 8
static +Conflict: Class<MFiles$MFSpecialObjectFlag__Conflict> & MFiles$MFSpecialObjectFlag__Conflict & 16;// 16
static +Normal: Class<MFiles$MFSpecialObjectFlag__Normal> & MFiles$MFSpecialObjectFlag__Normal & 64;// 64

}

declare class MFiles$MFSpecialObjectFlag__None mixins MFiles$MFSpecialObjectFlag {}
declare class MFiles$MFSpecialObjectFlag__Shortcut mixins MFiles$MFSpecialObjectFlag {}
declare class MFiles$MFSpecialObjectFlag__Deleted mixins MFiles$MFSpecialObjectFlag {}
declare class MFiles$MFSpecialObjectFlag__RecentlyAccessedByValid mixins MFiles$MFSpecialObjectFlag {}
declare class MFiles$MFSpecialObjectFlag__HasSharedFiles mixins MFiles$MFSpecialObjectFlag {}
declare class MFiles$MFSpecialObjectFlag__Conflict mixins MFiles$MFSpecialObjectFlag {}
declare class MFiles$MFSpecialObjectFlag__Normal mixins MFiles$MFSpecialObjectFlag {}


declare  class MFiles$MFStatusType {
  constructor(...args: empty): mixed;
static +CheckedOut: Class<MFiles$MFStatusType__CheckedOut> & MFiles$MFStatusType__CheckedOut & 0;// 0
static +CheckedOutTo: Class<MFiles$MFStatusType__CheckedOutTo> & MFiles$MFStatusType__CheckedOutTo & 1;// 1
static +CheckedOutAt: Class<MFiles$MFStatusType__CheckedOutAt> & MFiles$MFStatusType__CheckedOutAt & 2;// 2
static +ObjectID: Class<MFiles$MFStatusType__ObjectID> & MFiles$MFStatusType__ObjectID & 3;// 3
static +ObjectVersionID: Class<MFiles$MFStatusType__ObjectVersionID> & MFiles$MFStatusType__ObjectVersionID & 4;// 4
static +Deleted: Class<MFiles$MFStatusType__Deleted> & MFiles$MFStatusType__Deleted & 5;// 5
static +ObjectTypeID: Class<MFiles$MFStatusType__ObjectTypeID> & MFiles$MFStatusType__ObjectTypeID & 6;// 6
static +IsLatestCheckedInVersion: Class<MFiles$MFStatusType__IsLatestCheckedInVersion> & MFiles$MFStatusType__IsLatestCheckedInVersion & 7;// 7
static +ExtID: Class<MFiles$MFStatusType__ExtID> & MFiles$MFStatusType__ExtID & 8;// 8
static +LatestOrSpecific: Class<MFiles$MFStatusType__LatestOrSpecific> & MFiles$MFStatusType__LatestOrSpecific & 9;// 9
static +ObjectTypeAndID: Class<MFiles$MFStatusType__ObjectTypeAndID> & MFiles$MFStatusType__ObjectTypeAndID & 10;// 10
static +ObjectFlags: Class<MFiles$MFStatusType__ObjectFlags> & MFiles$MFStatusType__ObjectFlags & 11;// 11
static +OriginalVaultGUID: Class<MFiles$MFStatusType__OriginalVaultGUID> & MFiles$MFStatusType__OriginalVaultGUID & 12;// 12
static +OriginalObjectType: Class<MFiles$MFStatusType__OriginalObjectType> & MFiles$MFStatusType__OriginalObjectType & 13;// 13
static +OriginalObjectID: Class<MFiles$MFStatusType__OriginalObjectID> & MFiles$MFStatusType__OriginalObjectID & 14;// 14
static +OriginalObjectIDSegment: Class<MFiles$MFStatusType__OriginalObjectIDSegment> & MFiles$MFStatusType__OriginalObjectIDSegment & 15;// 15

}

declare class MFiles$MFStatusType__CheckedOut mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__CheckedOutTo mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__CheckedOutAt mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__ObjectID mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__ObjectVersionID mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__Deleted mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__ObjectTypeID mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__IsLatestCheckedInVersion mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__ExtID mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__LatestOrSpecific mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__ObjectTypeAndID mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__ObjectFlags mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__OriginalVaultGUID mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__OriginalObjectType mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__OriginalObjectID mixins MFiles$MFStatusType {}
declare class MFiles$MFStatusType__OriginalObjectIDSegment mixins MFiles$MFStatusType {}


declare  class MFiles$MFStringDataType {
  constructor(...args: empty): mixed;
static +JSON: Class<MFiles$MFStringDataType__JSON> & MFiles$MFStringDataType__JSON & 0;// 0
static +XML: Class<MFiles$MFStringDataType__XML> & MFiles$MFStringDataType__XML & 1;// 1

}

declare class MFiles$MFStringDataType__JSON mixins MFiles$MFStringDataType {}
declare class MFiles$MFStringDataType__XML mixins MFiles$MFStringDataType {}


declare  class MFiles$MFTriggerMonth {
  constructor(...args: empty): mixed;
static +January: Class<MFiles$MFTriggerMonth__January> & MFiles$MFTriggerMonth__January & 1;// 1
static +February: Class<MFiles$MFTriggerMonth__February> & MFiles$MFTriggerMonth__February & 2;// 2
static +March: Class<MFiles$MFTriggerMonth__March> & MFiles$MFTriggerMonth__March & 4;// 4
static +April: Class<MFiles$MFTriggerMonth__April> & MFiles$MFTriggerMonth__April & 8;// 8
static +May: Class<MFiles$MFTriggerMonth__May> & MFiles$MFTriggerMonth__May & 16;// 16
static +June: Class<MFiles$MFTriggerMonth__June> & MFiles$MFTriggerMonth__June & 32;// 32
static +July: Class<MFiles$MFTriggerMonth__July> & MFiles$MFTriggerMonth__July & 64;// 64
static +August: Class<MFiles$MFTriggerMonth__August> & MFiles$MFTriggerMonth__August & 128;// 128
static +September: Class<MFiles$MFTriggerMonth__September> & MFiles$MFTriggerMonth__September & 256;// 256
static +October: Class<MFiles$MFTriggerMonth__October> & MFiles$MFTriggerMonth__October & 512;// 512
static +November: Class<MFiles$MFTriggerMonth__November> & MFiles$MFTriggerMonth__November & 1024;// 1024
static +December: Class<MFiles$MFTriggerMonth__December> & MFiles$MFTriggerMonth__December & 2048;// 2048
static +EveryMonth: Class<MFiles$MFTriggerMonth__EveryMonth> & MFiles$MFTriggerMonth__EveryMonth & 4095;// 4095

}

declare class MFiles$MFTriggerMonth__January mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__February mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__March mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__April mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__May mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__June mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__July mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__August mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__September mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__October mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__November mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__December mixins MFiles$MFTriggerMonth {}
declare class MFiles$MFTriggerMonth__EveryMonth mixins MFiles$MFTriggerMonth {}


declare  class MFiles$MFTriggerType {
  constructor(...args: empty): mixed;
static +Once: Class<MFiles$MFTriggerType__Once> & MFiles$MFTriggerType__Once & 0;// 0
static +Daily: Class<MFiles$MFTriggerType__Daily> & MFiles$MFTriggerType__Daily & 1;// 1
static +Weekly: Class<MFiles$MFTriggerType__Weekly> & MFiles$MFTriggerType__Weekly & 2;// 2
static +MonthlyDate: Class<MFiles$MFTriggerType__MonthlyDate> & MFiles$MFTriggerType__MonthlyDate & 3;// 3
static +MonthlyDOW: Class<MFiles$MFTriggerType__MonthlyDOW> & MFiles$MFTriggerType__MonthlyDOW & 4;// 4

}

declare class MFiles$MFTriggerType__Once mixins MFiles$MFTriggerType {}
declare class MFiles$MFTriggerType__Daily mixins MFiles$MFTriggerType {}
declare class MFiles$MFTriggerType__Weekly mixins MFiles$MFTriggerType {}
declare class MFiles$MFTriggerType__MonthlyDate mixins MFiles$MFTriggerType {}
declare class MFiles$MFTriggerType__MonthlyDOW mixins MFiles$MFTriggerType {}


declare  class MFiles$MFTriggerWeekDay {
  constructor(...args: empty): mixed;
static +Sunday: Class<MFiles$MFTriggerWeekDay__Sunday> & MFiles$MFTriggerWeekDay__Sunday & 1;// 1
static +Monday: Class<MFiles$MFTriggerWeekDay__Monday> & MFiles$MFTriggerWeekDay__Monday & 2;// 2
static +Tuesday: Class<MFiles$MFTriggerWeekDay__Tuesday> & MFiles$MFTriggerWeekDay__Tuesday & 4;// 4
static +Wednesday: Class<MFiles$MFTriggerWeekDay__Wednesday> & MFiles$MFTriggerWeekDay__Wednesday & 8;// 8
static +Thursday: Class<MFiles$MFTriggerWeekDay__Thursday> & MFiles$MFTriggerWeekDay__Thursday & 16;// 16
static +Friday: Class<MFiles$MFTriggerWeekDay__Friday> & MFiles$MFTriggerWeekDay__Friday & 32;// 32
static +Saturday: Class<MFiles$MFTriggerWeekDay__Saturday> & MFiles$MFTriggerWeekDay__Saturday & 64;// 64
static +EveryDay: Class<MFiles$MFTriggerWeekDay__EveryDay> & MFiles$MFTriggerWeekDay__EveryDay & 125;// 125

}

declare class MFiles$MFTriggerWeekDay__Sunday mixins MFiles$MFTriggerWeekDay {}
declare class MFiles$MFTriggerWeekDay__Monday mixins MFiles$MFTriggerWeekDay {}
declare class MFiles$MFTriggerWeekDay__Tuesday mixins MFiles$MFTriggerWeekDay {}
declare class MFiles$MFTriggerWeekDay__Wednesday mixins MFiles$MFTriggerWeekDay {}
declare class MFiles$MFTriggerWeekDay__Thursday mixins MFiles$MFTriggerWeekDay {}
declare class MFiles$MFTriggerWeekDay__Friday mixins MFiles$MFTriggerWeekDay {}
declare class MFiles$MFTriggerWeekDay__Saturday mixins MFiles$MFTriggerWeekDay {}
declare class MFiles$MFTriggerWeekDay__EveryDay mixins MFiles$MFTriggerWeekDay {}


declare  class MFiles$MFTriggerWeekOfMonth {
  constructor(...args: empty): mixed;
static +FirstWeek: Class<MFiles$MFTriggerWeekOfMonth__FirstWeek> & MFiles$MFTriggerWeekOfMonth__FirstWeek & 1;// 1
static +SecondWeek: Class<MFiles$MFTriggerWeekOfMonth__SecondWeek> & MFiles$MFTriggerWeekOfMonth__SecondWeek & 2;// 2
static +ThirdWeek: Class<MFiles$MFTriggerWeekOfMonth__ThirdWeek> & MFiles$MFTriggerWeekOfMonth__ThirdWeek & 3;// 3
static +FourthWeek: Class<MFiles$MFTriggerWeekOfMonth__FourthWeek> & MFiles$MFTriggerWeekOfMonth__FourthWeek & 4;// 4
static +LastWeek: Class<MFiles$MFTriggerWeekOfMonth__LastWeek> & MFiles$MFTriggerWeekOfMonth__LastWeek & 5;// 5

}

declare class MFiles$MFTriggerWeekOfMonth__FirstWeek mixins MFiles$MFTriggerWeekOfMonth {}
declare class MFiles$MFTriggerWeekOfMonth__SecondWeek mixins MFiles$MFTriggerWeekOfMonth {}
declare class MFiles$MFTriggerWeekOfMonth__ThirdWeek mixins MFiles$MFTriggerWeekOfMonth {}
declare class MFiles$MFTriggerWeekOfMonth__FourthWeek mixins MFiles$MFTriggerWeekOfMonth {}
declare class MFiles$MFTriggerWeekOfMonth__LastWeek mixins MFiles$MFTriggerWeekOfMonth {}


declare  class MFiles$MFUpdateType {
  constructor(...args: empty): mixed;
static +Normal: Class<MFiles$MFUpdateType__Normal> & MFiles$MFUpdateType__Normal & 0;// 0
static +ServerAuto: Class<MFiles$MFUpdateType__ServerAuto> & MFiles$MFUpdateType__ServerAuto & 1;// 1
static +ClientAuto: Class<MFiles$MFUpdateType__ClientAuto> & MFiles$MFUpdateType__ClientAuto & 2;// 2

}

declare class MFiles$MFUpdateType__Normal mixins MFiles$MFUpdateType {}
declare class MFiles$MFUpdateType__ServerAuto mixins MFiles$MFUpdateType {}
declare class MFiles$MFUpdateType__ClientAuto mixins MFiles$MFUpdateType {}


declare  class MFiles$MFUserAccountVaultRole {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFUserAccountVaultRole__None> & MFiles$MFUserAccountVaultRole__None & 0;// 0
static +FullControl: Class<MFiles$MFUserAccountVaultRole__FullControl> & MFiles$MFUserAccountVaultRole__FullControl & 1;// 1
static +LogIn: Class<MFiles$MFUserAccountVaultRole__LogIn> & MFiles$MFUserAccountVaultRole__LogIn & 2;// 2
static +CreateObjects: Class<MFiles$MFUserAccountVaultRole__CreateObjects> & MFiles$MFUserAccountVaultRole__CreateObjects & 4;// 4
static +SeeAllObjects: Class<MFiles$MFUserAccountVaultRole__SeeAllObjects> & MFiles$MFUserAccountVaultRole__SeeAllObjects & 8;// 8
static +UndeleteObjects: Class<MFiles$MFUserAccountVaultRole__UndeleteObjects> & MFiles$MFUserAccountVaultRole__UndeleteObjects & 16;// 16
static +DestroyObjects: Class<MFiles$MFUserAccountVaultRole__DestroyObjects> & MFiles$MFUserAccountVaultRole__DestroyObjects & 32;// 32
static +ForceUndoCheckout: Class<MFiles$MFUserAccountVaultRole__ForceUndoCheckout> & MFiles$MFUserAccountVaultRole__ForceUndoCheckout & 64;// 64
static +ChangeObjectSecurity: Class<MFiles$MFUserAccountVaultRole__ChangeObjectSecurity> & MFiles$MFUserAccountVaultRole__ChangeObjectSecurity & 128;// 128
static +ChangeMetadataStructure: Class<MFiles$MFUserAccountVaultRole__ChangeMetadataStructure> & MFiles$MFUserAccountVaultRole__ChangeMetadataStructure & 256;// 256
static +ManageUserAccounts: Class<MFiles$MFUserAccountVaultRole__ManageUserAccounts> & MFiles$MFUserAccountVaultRole__ManageUserAccounts & 512;// 512
static +InternalUser: Class<MFiles$MFUserAccountVaultRole__InternalUser> & MFiles$MFUserAccountVaultRole__InternalUser & 1024;// 1024
static +ManageTraditionalFolders: Class<MFiles$MFUserAccountVaultRole__ManageTraditionalFolders> & MFiles$MFUserAccountVaultRole__ManageTraditionalFolders & 2048;// 2048
static +DefineTemplates: Class<MFiles$MFUserAccountVaultRole__DefineTemplates> & MFiles$MFUserAccountVaultRole__DefineTemplates & 4096;// 4096
static +ManageCommonViews: Class<MFiles$MFUserAccountVaultRole__ManageCommonViews> & MFiles$MFUserAccountVaultRole__ManageCommonViews & 8192;// 8192
static +ManageWorkflows: Class<MFiles$MFUserAccountVaultRole__ManageWorkflows> & MFiles$MFUserAccountVaultRole__ManageWorkflows & 16384;// 16384
static +DefaultRoles: Class<MFiles$MFUserAccountVaultRole__DefaultRoles> & MFiles$MFUserAccountVaultRole__DefaultRoles & 3078;// 3078

}

declare class MFiles$MFUserAccountVaultRole__None mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__FullControl mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__LogIn mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__CreateObjects mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__SeeAllObjects mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__UndeleteObjects mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__DestroyObjects mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__ForceUndoCheckout mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__ChangeObjectSecurity mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__ChangeMetadataStructure mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__ManageUserAccounts mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__InternalUser mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__ManageTraditionalFolders mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__DefineTemplates mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__ManageCommonViews mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__ManageWorkflows mixins MFiles$MFUserAccountVaultRole {}
declare class MFiles$MFUserAccountVaultRole__DefaultRoles mixins MFiles$MFUserAccountVaultRole {}


declare  class MFiles$MFUserOrUserGroupType {
  constructor(...args: empty): mixed;
static +Unknown: Class<MFiles$MFUserOrUserGroupType__Unknown> & MFiles$MFUserOrUserGroupType__Unknown & 0;// 0
static +UserAccount: Class<MFiles$MFUserOrUserGroupType__UserAccount> & MFiles$MFUserOrUserGroupType__UserAccount & 1;// 1
static +UserGroup: Class<MFiles$MFUserOrUserGroupType__UserGroup> & MFiles$MFUserOrUserGroupType__UserGroup & 2;// 2
static +PseudoUser: Class<MFiles$MFUserOrUserGroupType__PseudoUser> & MFiles$MFUserOrUserGroupType__PseudoUser & 3;// 3
static +PropertyBasedPseudoUser: Class<MFiles$MFUserOrUserGroupType__PropertyBasedPseudoUser> & MFiles$MFUserOrUserGroupType__PropertyBasedPseudoUser & 4;// 4

}

declare class MFiles$MFUserOrUserGroupType__Unknown mixins MFiles$MFUserOrUserGroupType {}
declare class MFiles$MFUserOrUserGroupType__UserAccount mixins MFiles$MFUserOrUserGroupType {}
declare class MFiles$MFUserOrUserGroupType__UserGroup mixins MFiles$MFUserOrUserGroupType {}
declare class MFiles$MFUserOrUserGroupType__PseudoUser mixins MFiles$MFUserOrUserGroupType {}
declare class MFiles$MFUserOrUserGroupType__PropertyBasedPseudoUser mixins MFiles$MFUserOrUserGroupType {}


declare  class MFiles$MFValidationType {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFValidationType__None> & MFiles$MFValidationType__None & 0;// 0
static +RegularExpression: Class<MFiles$MFValidationType__RegularExpression> & MFiles$MFValidationType__RegularExpression & 1;// 1
static +VBScript: Class<MFiles$MFValidationType__VBScript> & MFiles$MFValidationType__VBScript & 2;// 2

}

declare class MFiles$MFValidationType__None mixins MFiles$MFValidationType {}
declare class MFiles$MFValidationType__RegularExpression mixins MFiles$MFValidationType {}
declare class MFiles$MFValidationType__VBScript mixins MFiles$MFValidationType {}


declare  class MFiles$MFValueListItemPropertyDef {
  constructor(...args: empty): mixed;
static +ID: Class<MFiles$MFValueListItemPropertyDef__ID> & MFiles$MFValueListItemPropertyDef__ID & 1;// 1
static +Name: Class<MFiles$MFValueListItemPropertyDef__Name> & MFiles$MFValueListItemPropertyDef__Name & 2;// 2
static +Owner: Class<MFiles$MFValueListItemPropertyDef__Owner> & MFiles$MFValueListItemPropertyDef__Owner & 3;// 3
static +Parent: Class<MFiles$MFValueListItemPropertyDef__Parent> & MFiles$MFValueListItemPropertyDef__Parent & 4;// 4
static +Deleted: Class<MFiles$MFValueListItemPropertyDef__Deleted> & MFiles$MFValueListItemPropertyDef__Deleted & 5;// 5
static +ObjectType: Class<MFiles$MFValueListItemPropertyDef__ObjectType> & MFiles$MFValueListItemPropertyDef__ObjectType & 6;// 6
static +ExtID: Class<MFiles$MFValueListItemPropertyDef__ExtID> & MFiles$MFValueListItemPropertyDef__ExtID & 7;// 7

}

declare class MFiles$MFValueListItemPropertyDef__ID mixins MFiles$MFValueListItemPropertyDef {}
declare class MFiles$MFValueListItemPropertyDef__Name mixins MFiles$MFValueListItemPropertyDef {}
declare class MFiles$MFValueListItemPropertyDef__Owner mixins MFiles$MFValueListItemPropertyDef {}
declare class MFiles$MFValueListItemPropertyDef__Parent mixins MFiles$MFValueListItemPropertyDef {}
declare class MFiles$MFValueListItemPropertyDef__Deleted mixins MFiles$MFValueListItemPropertyDef {}
declare class MFiles$MFValueListItemPropertyDef__ObjectType mixins MFiles$MFValueListItemPropertyDef {}
declare class MFiles$MFValueListItemPropertyDef__ExtID mixins MFiles$MFValueListItemPropertyDef {}


declare  class MFiles$MFValueListSortingType {
  constructor(...args: empty): mixed;
static +Name: Class<MFiles$MFValueListSortingType__Name> & MFiles$MFValueListSortingType__Name & 0;// 0
static +ExtID: Class<MFiles$MFValueListSortingType__ExtID> & MFiles$MFValueListSortingType__ExtID & 1;// 1

}

declare class MFiles$MFValueListSortingType__Name mixins MFiles$MFValueListSortingType {}
declare class MFiles$MFValueListSortingType__ExtID mixins MFiles$MFValueListSortingType {}


declare  class MFiles$MFVaultAccess {
  constructor(...args: empty): mixed;
static +None: Class<MFiles$MFVaultAccess__None> & MFiles$MFVaultAccess__None & 0;// 0
static +CreateDocs: Class<MFiles$MFVaultAccess__CreateDocs> & MFiles$MFVaultAccess__CreateDocs & 1;// 1
static +SeeAllDocs: Class<MFiles$MFVaultAccess__SeeAllDocs> & MFiles$MFVaultAccess__SeeAllDocs & 2;// 2
static +UndeleteDocs: Class<MFiles$MFVaultAccess__UndeleteDocs> & MFiles$MFVaultAccess__UndeleteDocs & 4;// 4
static +DestroyDocs: Class<MFiles$MFVaultAccess__DestroyDocs> & MFiles$MFVaultAccess__DestroyDocs & 8;// 8
static +ForceUndoCheckout: Class<MFiles$MFVaultAccess__ForceUndoCheckout> & MFiles$MFVaultAccess__ForceUndoCheckout & 16;// 16
static +ChangeDocSecurity: Class<MFiles$MFVaultAccess__ChangeDocSecurity> & MFiles$MFVaultAccess__ChangeDocSecurity & 32;// 32
static +ChangeMetaDataStructure: Class<MFiles$MFVaultAccess__ChangeMetaDataStructure> & MFiles$MFVaultAccess__ChangeMetaDataStructure & 64;// 64
static +ManageUserAccounts: Class<MFiles$MFVaultAccess__ManageUserAccounts> & MFiles$MFVaultAccess__ManageUserAccounts & 128;// 128
static +ChangeFullControlRole: Class<MFiles$MFVaultAccess__ChangeFullControlRole> & MFiles$MFVaultAccess__ChangeFullControlRole & 256;// 256
static +VerifyVault: Class<MFiles$MFVaultAccess__VerifyVault> & MFiles$MFVaultAccess__VerifyVault & 1024;// 1024
static +EditAllDocs: Class<MFiles$MFVaultAccess__EditAllDocs> & MFiles$MFVaultAccess__EditAllDocs & 2048;// 2048
static +ExportContent: Class<MFiles$MFVaultAccess__ExportContent> & MFiles$MFVaultAccess__ExportContent & 8192;// 8192
static +ImportContent: Class<MFiles$MFVaultAccess__ImportContent> & MFiles$MFVaultAccess__ImportContent & 16384;// 16384
static +ManageVLItemsFromClient: Class<MFiles$MFVaultAccess__ManageVLItemsFromClient> & MFiles$MFVaultAccess__ManageVLItemsFromClient & 65536;// 65536
static +ManageExternalLocations: Class<MFiles$MFVaultAccess__ManageExternalLocations> & MFiles$MFVaultAccess__ManageExternalLocations & 131072;// 131072
static +LicenseAllowsModifications: Class<MFiles$MFVaultAccess__LicenseAllowsModifications> & MFiles$MFVaultAccess__LicenseAllowsModifications & 262144;// 262144
static +ManageEvents: Class<MFiles$MFVaultAccess__ManageEvents> & MFiles$MFVaultAccess__ManageEvents & 524288;// 524288
static +ManageTraditionalFolders: Class<MFiles$MFVaultAccess__ManageTraditionalFolders> & MFiles$MFVaultAccess__ManageTraditionalFolders & 1048576;// 1048576
static +ChangeObjectStates: Class<MFiles$MFVaultAccess__ChangeObjectStates> & MFiles$MFVaultAccess__ChangeObjectStates & 4194304;// 4194304
static +ChangeAssignments: Class<MFiles$MFVaultAccess__ChangeAssignments> & MFiles$MFVaultAccess__ChangeAssignments & 8388608;// 8388608
static +ManageCommonViews: Class<MFiles$MFVaultAccess__ManageCommonViews> & MFiles$MFVaultAccess__ManageCommonViews & 16777216;// 16777216
static +ManageCommonUISettings: Class<MFiles$MFVaultAccess__ManageCommonUISettings> & MFiles$MFVaultAccess__ManageCommonUISettings & 33554432;// 33554432
static +ManageCommonNotificationRules: Class<MFiles$MFVaultAccess__ManageCommonNotificationRules> & MFiles$MFVaultAccess__ManageCommonNotificationRules & 134217728;// 134217728
static +SeeDeletedDocs: Class<MFiles$MFVaultAccess__SeeDeletedDocs> & MFiles$MFVaultAccess__SeeDeletedDocs & 268435456;// 268435456
static +MateriakizeViews: Class<MFiles$MFVaultAccess__MateriakizeViews> & MFiles$MFVaultAccess__MateriakizeViews & 536870912;// 536870912
static +MaterializeViews: Class<MFiles$MFVaultAccess__MaterializeViews> & MFiles$MFVaultAccess__MaterializeViews & 536870912;// 536870912

}

declare class MFiles$MFVaultAccess__None mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__CreateDocs mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__SeeAllDocs mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__UndeleteDocs mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__DestroyDocs mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ForceUndoCheckout mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ChangeDocSecurity mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ChangeMetaDataStructure mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ManageUserAccounts mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ChangeFullControlRole mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__VerifyVault mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__EditAllDocs mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ExportContent mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ImportContent mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ManageVLItemsFromClient mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ManageExternalLocations mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__LicenseAllowsModifications mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ManageEvents mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ManageTraditionalFolders mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ChangeObjectStates mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ChangeAssignments mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ManageCommonViews mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ManageCommonUISettings mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__ManageCommonNotificationRules mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__SeeDeletedDocs mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__MateriakizeViews mixins MFiles$MFVaultAccess {}
declare class MFiles$MFVaultAccess__MaterializeViews mixins MFiles$MFVaultAccess {}


declare  class MFiles$MFVaultConnectionTestResult {
  constructor(...args: empty): mixed;
static +OK: Class<MFiles$MFVaultConnectionTestResult__OK> & MFiles$MFVaultConnectionTestResult__OK & 0;// 0
static +UserCancelledLoginAttempt: Class<MFiles$MFVaultConnectionTestResult__UserCancelledLoginAttempt> & MFiles$MFVaultConnectionTestResult__UserCancelledLoginAttempt & 1;// 1

}

declare class MFiles$MFVaultConnectionTestResult__OK mixins MFiles$MFVaultConnectionTestResult {}
declare class MFiles$MFVaultConnectionTestResult__UserCancelledLoginAttempt mixins MFiles$MFVaultConnectionTestResult {}


declare  class MFiles$MFViewCategory {
  constructor(...args: empty): mixed;
static +Normal: Class<MFiles$MFViewCategory__Normal> & MFiles$MFViewCategory__Normal & 0;// 0
static +OfflineFilter: Class<MFiles$MFViewCategory__OfflineFilter> & MFiles$MFViewCategory__OfflineFilter & 1;// 1
static +TemporarySearch: Class<MFiles$MFViewCategory__TemporarySearch> & MFiles$MFViewCategory__TemporarySearch & 2;// 2

}

declare class MFiles$MFViewCategory__Normal mixins MFiles$MFViewCategory {}
declare class MFiles$MFViewCategory__OfflineFilter mixins MFiles$MFViewCategory {}
declare class MFiles$MFViewCategory__TemporarySearch mixins MFiles$MFViewCategory {}


declare  class MFiles$MFViewFlag {
  constructor(...args: empty): mixed;
static +sNone: Class<MFiles$MFViewFlag__sNone> & MFiles$MFViewFlag__sNone & 0;// 0
static +Materialized: Class<MFiles$MFViewFlag__Materialized> & MFiles$MFViewFlag__Materialized & 1;// 1

}

declare class MFiles$MFViewFlag__sNone mixins MFiles$MFViewFlag {}
declare class MFiles$MFViewFlag__Materialized mixins MFiles$MFViewFlag {}


declare  class MFiles$MFViewType {
  constructor(...args: empty): mixed;
static +Normal: Class<MFiles$MFViewType__Normal> & MFiles$MFViewType__Normal & 0;// 0
static +FilterOnly: Class<MFiles$MFViewType__FilterOnly> & MFiles$MFViewType__FilterOnly & 1;// 1

}

declare class MFiles$MFViewType__Normal mixins MFiles$MFViewType {}
declare class MFiles$MFViewType__FilterOnly mixins MFiles$MFViewType {}


declare  class MFiles$SearchFeature {
  constructor(...args: empty): mixed;
static +Undefined: Class<MFiles$SearchFeature__Undefined> & MFiles$SearchFeature__Undefined & 0;// 0
static +FacetSearch: Class<MFiles$SearchFeature__FacetSearch> & MFiles$SearchFeature__FacetSearch & 1;// 1
static +MultiVaultSearch: Class<MFiles$SearchFeature__MultiVaultSearch> & MFiles$SearchFeature__MultiVaultSearch & 2;// 2

}

declare class MFiles$SearchFeature__Undefined mixins MFiles$SearchFeature {}
declare class MFiles$SearchFeature__FacetSearch mixins MFiles$SearchFeature {}
declare class MFiles$SearchFeature__MultiVaultSearch mixins MFiles$SearchFeature {}


declare  class MFiles$TaskPaneGroup {
  constructor(...args: empty): mixed;
static +New: Class<MFiles$TaskPaneGroup__New> & MFiles$TaskPaneGroup__New & 1;// 1
static +ViewAndModify: Class<MFiles$TaskPaneGroup__ViewAndModify> & MFiles$TaskPaneGroup__ViewAndModify & 2;// 2
static +GoTo: Class<MFiles$TaskPaneGroup__GoTo> & MFiles$TaskPaneGroup__GoTo & 3;// 3
static +Main: Class<MFiles$TaskPaneGroup__Main> & MFiles$TaskPaneGroup__Main & 4;// 4

}

declare class MFiles$TaskPaneGroup__New mixins MFiles$TaskPaneGroup {}
declare class MFiles$TaskPaneGroup__ViewAndModify mixins MFiles$TaskPaneGroup {}
declare class MFiles$TaskPaneGroup__GoTo mixins MFiles$TaskPaneGroup {}
declare class MFiles$TaskPaneGroup__Main mixins MFiles$TaskPaneGroup {}


declare var MFiles$AccessControlEntry: {
new (): IAccessControlEntry
};

declare var MFiles$AccessControlEntryContainer: {
new (): IAccessControlEntryContainer
};

declare var MFiles$AccessControlEntryData: {
new (): IAccessControlEntryData
};

declare var MFiles$AccessControlEntryKey: {
new (): IAccessControlEntryKey
};

declare var MFiles$AccessControlEntryKeys: {
new (): IAccessControlEntryKeys
};

declare var MFiles$AccessControlList: {
new (): IAccessControlList
};

declare var MFiles$AccessControlListComponent: {
new (): IAccessControlListComponent
};

declare var MFiles$AccessControlListComponentContainer: {
new (): IAccessControlListComponentContainer
};

declare var MFiles$AccessControlListComponentKey: {
new (): IAccessControlListComponentKey
};

declare var MFiles$AccessControlListComponentKeys: {
new (): IAccessControlListComponentKeys
};

declare var MFiles$AccessControlLists: {
new (): IAccessControlLists
};

declare var MFiles$ActionConvertToPDF: {
new (): IActionConvertToPDF
};

declare var MFiles$ActionCreateAssignment: {
new (): IActionCreateAssignment
};

declare var MFiles$ActionDefinition: {
new (): IActionDefinition
};

declare var MFiles$ActionDefinitions: {
new (): IActionDefinitions
};

declare var MFiles$ActionSendNotification: {
new (): IActionSendNotification
};

declare var MFiles$ActionSetPermissions: {
new (): IActionSetPermissions
};

declare var MFiles$ActionSetProperties: {
new (): IActionSetProperties
};

declare var MFiles$AdditionalClassInfo: {
new (): IAdditionalClassInfo
};

declare var MFiles$AdditionalFolder: {
new (): IAdditionalFolder
};

declare var MFiles$AdditionalFolders: {
new (): IAdditionalFolders
};

declare var MFiles$ApprovalAssignmentClassInfo: {
new (): IApprovalAssignmentClassInfo
};

declare var MFiles$ArchiveOldVersionsJob: {
new (): IArchiveOldVersionsJob
};

declare var MFiles$AssignmentClassInfo: {
new (): IAssignmentClassInfo
};

declare var MFiles$AssociatedPropertyDef: {
new (): IAssociatedPropertyDef
};

declare var MFiles$AssociatedPropertyDefs: {
new (): IAssociatedPropertyDefs
};

declare var MFiles$AttachVaultOptions: {
new (): IAttachVaultOptions
};

declare var MFiles$AuthenticationResult: {
new (): IAuthenticationResult
};

declare var MFiles$AuthenticationResultIntermediate: {
new (): IAuthenticationResultIntermediate
};

declare var MFiles$AuthenticationResultServerFinal: {
new (): IAuthenticationResultServerFinal
};

declare var MFiles$AuthenticationResultVaultFinal: {
new (): IAuthenticationResultVaultFinal
};

declare var MFiles$AutomaticMetadataResult: {
new (): IAutomaticMetadataResult
};

declare var MFiles$AutomaticPermissions: {
new (): IAutomaticPermissions
};

declare var MFiles$AutomaticValue: {
new (): IAutomaticValue
};

declare var MFiles$BackupJob: {
new (): IBackupJob
};

declare var MFiles$BooleanValue: {
new (): IBooleanValue
};

declare var MFiles$ClassGroup: {
new (): IClassGroup
};

declare var MFiles$ClassGroups: {
new (): IClassGroups
};

declare var MFiles$CopyVaultJob: {
new (): ICopyVaultJob
};

declare var MFiles$CopyVaultJobOutputInfo: {
new (): ICopyVaultJobOutputInfo
};

declare var MFiles$CustomApplication: {
new (): ICustomApplication
};

declare var MFiles$CustomApplications: {
new (): ICustomApplications
};

declare var MFiles$DailyTrigger: {
new (): IDailyTrigger
};

declare var MFiles$DataFunctionCall: {
new (): IDataFunctionCall
};

declare var MFiles$DataSet: {
new (): IDataSet
};

declare var MFiles$DataSetExportingStatus: {
new (): IDataSetExportingStatus
};

declare var MFiles$DataSets: {
new (): IDataSets
};

declare var MFiles$DefaultProperties: {
new (): IDefaultProperties
};

declare var MFiles$DefaultProperty: {
new (): IDefaultProperty
};

declare var MFiles$EmailMessageInformation: {
new (): IEmailMessageInformation
};

declare var MFiles$EventHandler: {
new (): IEventHandler
};

declare var MFiles$EventHandlers: {
new (): IEventHandlers
};

declare var MFiles$ExportContentJob: {
new (): IExportContentJob
};

declare var MFiles$ExportStructureItem: {
new (): IExportStructureItem
};

declare var MFiles$ExportStructureItems: {
new (): IExportStructureItems
};

declare var MFiles$Expression: {
new (): IExpression
};

declare var MFiles$ExpressionEx: {
new (): IExpressionEx
};

declare var MFiles$ExpressionExs: {
new (): IExpressionExs
};

declare var MFiles$Expressions: {
new (): IExpressions
};

declare var MFiles$FileClass: {
new (): IFileClass
};

declare var MFiles$FileClasses: {
new (): IFileClasses
};

declare var MFiles$FileDownloadSession: {
new (): IFileDownloadSession
};

declare var MFiles$FileInformation: {
new (): IFileInformation
};

declare var MFiles$FileVer: {
new (): IFileVer
};

declare var MFiles$FileVers: {
new (): IFileVers
};

declare var MFiles$FolderContentItem: {
new (): IFolderContentItem
};

declare var MFiles$FolderContentItems: {
new (): IFolderContentItems
};

declare var MFiles$FolderDef: {
new (): IFolderDef
};

declare var MFiles$FolderDefs: {
new (): IFolderDefs
};

declare var MFiles$FolderListingColumn: {
new (): IFolderListingColumn
};

declare var MFiles$FolderListingColumns: {
new (): IFolderListingColumns
};

declare var MFiles$FolderListingColumnSorting: {
new (): IFolderListingColumnSorting
};

declare var MFiles$FolderListingColumnSortings: {
new (): IFolderListingColumnSortings
};

declare var MFiles$FolderListingUIState: {
new (): IFolderListingUIState
};

declare var MFiles$FolderNameListing: {
new (): IFolderNameListing
};

declare var MFiles$FolderUIState: {
new (): IFolderUIState
};

declare var MFiles$IDRange: {
new (): IIDRange
};

declare var MFiles$IDs: {
new (): IIDs
};

declare var MFiles$Impersonation: {
new (): IImpersonation
};

declare var MFiles$ImportContentJob: {
new (): IImportContentJob
};

declare var MFiles$IndirectPropertyID: {
new (): IIndirectPropertyID
};

declare var MFiles$IndirectPropertyIDLevel: {
new (): IIndirectPropertyIDLevel
};

declare var MFiles$KeyNamePair: {
new (): IKeyNamePair
};

declare var MFiles$KeyNamePairs: {
new (): IKeyNamePairs
};

declare var MFiles$Language: {
new (): ILanguage
};

declare var MFiles$Languages: {
new (): ILanguages
};

declare var MFiles$LicenseStatus: {
new (): ILicenseStatus
};

declare var MFiles$LoginAccount: {
new (): ILoginAccount
};

declare var MFiles$LoginAccountPersonalInformation: {
new (): ILoginAccountPersonalInformation
};

declare var MFiles$LoginAccounts: {
new (): ILoginAccounts
};

declare var MFiles$Lookup: {
new (): ILookup
};

declare var MFiles$Lookups: {
new (): ILookups
};

declare var MFiles$MetadataStructureSelector: {
new (): IMetadataStructureSelector
};

declare var MFiles$MetadataStructureSelectors: {
new (): IMetadataStructureSelectors
};

declare var MFiles$MFilesClientApplication: {
new (): IMFilesClientApplication
};

declare var MFiles$MFilesServerApplication: {
new (): IMFilesServerApplication
};

declare var MFiles$MFilesVersion: {
new (): IMFilesVersion
};

declare var MFiles$MFResourceManager: {
new (): IMFResourceManager
};

declare var MFiles$MFShellDocListCtrl: {
new (): IMFDocListCtrl
};

declare var MFiles$MonthlyDateTrigger: {
new (): IMonthlyDateTrigger
};

declare var MFiles$MonthlyDOWTrigger: {
new (): IMonthlyDOWTrigger
};

declare var MFiles$NamedACL: {
new (): INamedACL
};

declare var MFiles$NamedACLAdmin: {
new (): INamedACLAdmin
};

declare var MFiles$NamedACLs: {
new (): INamedACLs
};

declare var MFiles$NamedACLsAdmin: {
new (): INamedACLsAdmin
};

declare var MFiles$NamedValueNamespace: {
new (): INamedValueNamespace
};

declare var MFiles$NamedValueNamespaces: {
new (): INamedValueNamespaces
};

declare var MFiles$NamedValues: {
new (): INamedValues
};

declare var MFiles$Number: {
new (): INumber
};

declare var MFiles$ObjectClass: {
new (): IObjectClass
};

declare var MFiles$ObjectClassAdmin: {
new (): IObjectClassAdmin
};

declare var MFiles$ObjectClasses: {
new (): IObjectClasses
};

declare var MFiles$ObjectClassesAdmin: {
new (): IObjectClassesAdmin
};

declare var MFiles$ObjectCreationInfo: {
new (): IObjectCreationInfo
};

declare var MFiles$ObjectFile: {
new (): IObjectFile
};

declare var MFiles$ObjectFileAndObjVer: {
new (): IObjectFileAndObjVer
};

declare var MFiles$ObjectFileAndObjVerOfMultipleFiles: {
new (): IObjectFileAndObjVerOfMultipleFiles
};

declare var MFiles$ObjectFiles: {
new (): IObjectFiles
};

declare var MFiles$ObjectSearchResults: {
new (): IObjectSearchResults
};

declare var MFiles$ObjectTypeTargetForBrowsing: {
new (): IObjectTypeTargetForBrowsing
};

declare var MFiles$ObjectTypeTargetsForBrowsing: {
new (): IObjectTypeTargetsForBrowsing
};

declare var MFiles$ObjectVersion: {
new (): IObjectVersion
};

declare var MFiles$ObjectVersionAndProperties: {
new (): IObjectVersionAndProperties
};

declare var MFiles$ObjectVersionAndPropertiesOfMultipleObjects: {
new (): IObjectVersionAndPropertiesOfMultipleObjects
};

declare var MFiles$ObjectVersionFile: {
new (): IObjectFileAndVersion
};

declare var MFiles$ObjectVersionPermissions: {
new (): IObjectVersionPermissions
};

declare var MFiles$ObjectVersions: {
new (): IObjectVersions
};

declare var MFiles$ObjectVersionWorkflowState: {
new (): IObjectVersionWorkflowState
};

declare var MFiles$ObjectWindowResult: {
new (): IObjectWindowResult
};

declare var MFiles$ObjID: {
new (): IObjID
};

declare var MFiles$ObjIDs: {
new (): IObjIDs
};

declare var MFiles$ObjOrFileVer: {
new (): IObjOrFileVer
};

declare var MFiles$ObjOrFileVers: {
new (): IObjOrFileVers
};

declare var MFiles$ObjType: {
new (): IObjectType
};

declare var MFiles$ObjTypeAdmin: {
new (): IObjectTypeAdmin
};

declare var MFiles$ObjTypeColumnMapping: {
new (): IObjectTypeColumnMapping
};

declare var MFiles$ObjTypeColumnMappings: {
new (): IObjectTypeColumnMappings
};

declare var MFiles$ObjTypes: {
new (): IObjectTypes
};

declare var MFiles$ObjTypesAdmin: {
new (): IObjectTypesAdmin
};

declare var MFiles$ObjVer: {
new (): IObjVer
};

declare var MFiles$ObjVers: {
new (): IObjVers
};

declare var MFiles$OCROptions: {
new (): IOCROptions
};

declare var MFiles$OCRPage: {
new (): IOCRPage
};

declare var MFiles$OCRPageResult: {
new (): IOCRPageResult
};

declare var MFiles$OCRPageResults: {
new (): IOCRPageResults
};

declare var MFiles$OCRPages: {
new (): IOCRPages
};

declare var MFiles$OCRZone: {
new (): IOCRZone
};

declare var MFiles$OCRZoneResult: {
new (): IOCRZoneResult
};

declare var MFiles$OCRZoneResults: {
new (): IOCRZoneResults
};

declare var MFiles$OCRZones: {
new (): IOCRZones
};

declare var MFiles$OptimizeVaultJob: {
new (): IOptimizeVaultJob
};

declare var MFiles$OwnerPropertyDef: {
new (): IOwnerPropertyDef
};

declare var MFiles$PluginInfo: {
new (): IPluginInfo
};

declare var MFiles$PluginInfos: {
new (): IPluginInfos
};

declare var MFiles$PreviewerActiveXCtrl: {
new (): IPreviewerActiveXCtrl
};

declare var MFiles$PropertyDef: {
new (): IPropertyDef
};

declare var MFiles$PropertyDefAdmin: {
new (): IPropertyDefAdmin
};

declare var MFiles$PropertyDefOrObjectType: {
new (): IPropertyDefOrObjectType
};

declare var MFiles$PropertyDefOrObjectTypes: {
new (): IPropertyDefOrObjectTypes
};

declare var MFiles$PropertyDefs: {
new (): IPropertyDefs
};

declare var MFiles$PropertyDefsAdmin: {
new (): IPropertyDefsAdmin
};

declare var MFiles$PropertyValue: {
new (): IPropertyValue
};

declare var MFiles$PropertyValueForDisplay: {
new (): IPropertyValueForDisplay
};

declare var MFiles$PropertyValueIconClue: {
new (): IPropertyValueIconClue
};

declare var MFiles$PropertyValueIconClues: {
new (): IPropertyValueIconClues
};

declare var MFiles$PropertyValues: {
new (): IPropertyValues
};

declare var MFiles$PropertyValuesForDisplay: {
new (): IPropertyValuesForDisplay
};

declare var MFiles$PropertyValuesOfMultipleObjects: {
new (): IPropertyValuesOfMultipleObjects
};

declare var MFiles$PropertyValueSuggestion: {
new (): IPropertyValueSuggestion
};

declare var MFiles$PropertyValueSuggestions: {
new (): IPropertyValueSuggestions
};

declare var MFiles$PropertyValuesWithIconClues: {
new (): IPropertyValuesWithIconClues
};

declare var MFiles$PropertyValuesWithIconCluesOfMultipleObjects: {
new (): IPropertyValuesWithIconCluesOfMultipleObjects
};

declare var MFiles$ReportAccessCredentials: {
new (): IReportAccessCredentials
};

declare var MFiles$RestoreJob: {
new (): IRestoreJob
};

declare var MFiles$ScheduledJob: {
new (): IScheduledJob
};

declare var MFiles$ScheduledJobOutputInfo: {
new (): IScheduledJobOutputInfo
};

declare var MFiles$ScheduledJobRunInfo: {
new (): IScheduledJobRunInfo
};

declare var MFiles$ScheduledJobs: {
new (): IScheduledJobs
};

declare var MFiles$ScheduledJobTrigger: {
new (): IScheduledJobTrigger
};

declare var MFiles$ScheduledJobTriggers: {
new (): IScheduledJobTriggers
};

declare var MFiles$SearchCondition: {
new (): ISearchCondition
};

declare var MFiles$SearchConditionEx: {
new (): ISearchConditionEx
};

declare var MFiles$SearchConditionExs: {
new (): ISearchConditionExs
};

declare var MFiles$SearchConditions: {
new (): ISearchConditions
};

declare var MFiles$SearchCriteria: {
new (): ISearchCriteria
};

declare var MFiles$SearchDef: {
new (): ISearchDef
};

declare var MFiles$SemanticAliases: {
new (): ISemanticAliases
};

declare var MFiles$ServerLicenseManagementOperations: {
new (): IServerLicenseManagementOperations
};

declare var MFiles$ServerLoginAccountOperations: {
new (): IServerLoginAccountOperations
};

declare var MFiles$ServerManagementOperations: {
new (): IServerManagementOperations
};

declare var MFiles$ServerScheduledJobManagementOperations: {
new (): IServerScheduledJobManagementOperations
};

declare var MFiles$ServerVaultManagementOperations: {
new (): IServerVaultManagementOperations
};

declare var MFiles$SessionInfo: {
new (): ISessionInfo
};

declare var MFiles$SetPropertiesParams: {
new (): ISetPropertiesParams
};

declare var MFiles$SetPropertiesParamsOfMultipleObjects: {
new (): ISetPropertiesParamsOfMultipleObjects
};

declare var MFiles$SharedFileInfo: {
new (): ISharedFileInfo
};

declare var MFiles$SharedLinkInfo: {
new (): ISharedLinkInfo
};

declare var MFiles$SharedLinkInfos: {
new (): ISharedLinkInfos
};

declare var MFiles$SharedLinkPublicOperations: {
new (): ISharedLinkPublicOperations
};

declare var MFiles$ShortcutMappingInfo: {
new (): IShortcutMappingInfo
};

declare var MFiles$SignaturePromptInfo: {
new (): ISignaturePromptInfo
};

declare var MFiles$SignaturePromptInfoMetadataBased: {
new (): ISignaturePromptInfoMetadataBased
};

declare var MFiles$SignaturePromptInfos: {
new (): ISignaturePromptInfos
};

declare var MFiles$SignaturePromptInfoSelectable: {
new (): ISignaturePromptInfoSelectable
};

declare var MFiles$SignatureSettings: {
new (): ISignatureSettings
};

declare var MFiles$SourceObjectFile: {
new (): ISourceObjectFile
};

declare var MFiles$SourceObjectFiles: {
new (): ISourceObjectFiles
};

declare var MFiles$SQLDatabase: {
new (): ISQLDatabase
};

declare var MFiles$State: {
new (): IState
};

declare var MFiles$StateAdmin: {
new (): IStateAdmin
};

declare var MFiles$StateConditions: {
new (): IStateConditions
};

declare var MFiles$States: {
new (): IStates
};

declare var MFiles$StatesAdmin: {
new (): IStatesAdmin
};

declare var MFiles$StateTransition: {
new (): IStateTransition
};

declare var MFiles$StateTransitionForClient: {
new (): IStateTransitionForClient
};

declare var MFiles$StateTransitions: {
new (): IStateTransitions
};

declare var MFiles$StateTransitionsForClient: {
new (): IStateTransitionsForClient
};

declare var MFiles$StringData: {
new (): IStringData
};

declare var MFiles$Strings: {
new (): IStrings
};

declare var MFiles$TaskAssignmentClassInfo: {
new (): ITaskAssignmentClassInfo
};

declare var MFiles$TemporarySearchView: {
new (): ITemporarySearchView
};

declare var MFiles$Timestamp: {
new (): ITimestamp
};

declare var MFiles$TimeZoneInformation: {
new (): ITimeZoneInformation
};

declare var MFiles$TraditionalFolder: {
new (): ITraditionalFolder
};

declare var MFiles$TraditionalFolderContents: {
new (): ITraditionalFolderContents
};

declare var MFiles$TraditionalFolders: {
new (): ITraditionalFolders
};

declare var MFiles$TriggerType: {
new (): ITriggerType
};

declare var MFiles$TypedValue: {
new (): ITypedValue
};

declare var MFiles$TypedValues: {
new (): ITypedValues
};

declare var MFiles$UserAccount: {
new (): IUserAccount
};

declare var MFiles$UserAccounts: {
new (): IUserAccounts
};

declare var MFiles$UserGroup: {
new (): IUserGroup
};

declare var MFiles$UserGroupAdmin: {
new (): IUserGroupAdmin
};

declare var MFiles$UserGroups: {
new (): IUserGroups
};

declare var MFiles$UserGroupsAdmin: {
new (): IUserGroupsAdmin
};

declare var MFiles$UserOrUserGroupID: {
new (): IUserOrUserGroupID
};

declare var MFiles$UserOrUserGroupIDEx: {
new (): IUserOrUserGroupIDEx
};

declare var MFiles$UserOrUserGroupIDExs: {
new (): IUserOrUserGroupIDExs
};

declare var MFiles$UserOrUserGroupIDs: {
new (): IUserOrUserGroupIDs
};

declare var MFiles$Validation: {
new (): IValidation
};

declare var MFiles$ValueListItem: {
new (): IValueListItem
};

declare var MFiles$ValueListItems: {
new (): IValueListItems
};

declare var MFiles$ValueListItemSearchResults: {
new (): IValueListItemSearchResults
};

declare var MFiles$ValueListItemSearchResultsWithPermissions: {
new (): IValueListItemSearchResultsWithPermissions
};

declare var MFiles$ValueListItemsWithPermissions: {
new (): IValueListItemsWithPermissions
};

declare var MFiles$Vault: {
new (): IVault
};

declare var MFiles$VaultAutomaticMetadataOperations: {
new (): IVaultAutomaticMetadataOperations
};

declare var MFiles$VaultClassGroupOperations: {
new (): IVaultClassGroupOperations
};

declare var MFiles$VaultClassOperations: {
new (): IVaultClassOperations
};

declare var MFiles$VaultClientOperations: {
new (): IVaultClientOperations
};

declare var MFiles$VaultConnection: {
new (): IVaultConnection
};

declare var MFiles$VaultConnections: {
new (): IVaultConnections
};

declare var MFiles$VaultCustomApplicationManagementOperations: {
new (): IVaultCustomApplicationManagementOperations
};

declare var MFiles$VaultDataSetOperations: {
new (): IVaultDataSetOperations
};

declare var MFiles$VaultElectronicSignatureOperations: {
new (): IVaultElectronicSignatureOperations
};

declare var MFiles$VaultEventLogOperations: {
new (): IVaultEventLogOperations
};

declare var MFiles$VaultExtensionMethodOperations: {
new (): IVaultExtensionMethodOperations
};

declare var MFiles$VaultExternalObjectOperations: {
new (): IVaultExternalObjectOperations
};

declare var MFiles$VaultLoginAccountOperations: {
new (): IVaultLoginAccountOperations
};

declare var MFiles$VaultManagementOperations: {
new (): IVaultManagementOperations
};

declare var MFiles$VaultNamedACLOperations: {
new (): IVaultNamedACLOperations
};

declare var MFiles$VaultNamedValueStorageOperations: {
new (): IVaultNamedValueStorageOperations
};

declare var MFiles$VaultNotificationOperations: {
new (): IVaultNotificationOperations
};

declare var MFiles$VaultObjectFileOperations: {
new (): IVaultObjectFileOperations
};

declare var MFiles$VaultObjectOperations: {
new (): IVaultObjectOperations
};

declare var MFiles$VaultObjectPropertyOperations: {
new (): IVaultObjectPropertyOperations
};

declare var MFiles$VaultObjectSearchOperations: {
new (): IVaultObjectSearchOperations
};

declare var MFiles$VaultObjectTypeOperations: {
new (): IVaultObjectTypeOperations
};

declare var MFiles$VaultOnServer: {
new (): IVaultOnServer
};

declare var MFiles$VaultProperties: {
new (): IVaultProperties
};

declare var MFiles$VaultPropertyDefOperations: {
new (): IVaultPropertyDefOperations
};

declare var MFiles$VaultScheduledJobManagementOperations: {
new (): IVaultScheduledJobManagementOperations
};

declare var MFiles$VaultServerDataPushOperations: {
new (): IVaultServerDataPushOperations
};

declare var MFiles$VaultSharedLinkOperations: {
new (): IVaultSharedLinkOperations
};

declare var MFiles$VaultsOnServer: {
new (): IVaultsOnServer
};

declare var MFiles$VaultTraditionalFolderOperations: {
new (): IVaultTraditionalFolderOperations
};

declare var MFiles$VaultUserGroupOperations: {
new (): IVaultUserGroupOperations
};

declare var MFiles$VaultUserOperations: {
new (): IVaultUserOperations
};

declare var MFiles$VaultUserSettingOperations: {
new (): IVaultUserSettingOperations
};

declare var MFiles$VaultValueListItemOperations: {
new (): IVaultValueListItemOperations
};

declare var MFiles$VaultValueListOperations: {
new (): IVaultValueListOperations
};

declare var MFiles$VaultViewOperations: {
new (): IVaultViewOperations
};

declare var MFiles$VaultWorkflowOperations: {
new (): IVaultWorkflowOperations
};

declare var MFiles$VerifyVaultJob: {
new (): IVerifyVaultJob
};

declare var MFiles$VerifyVaultJobOutput: {
new (): IVerifyVaultJobOutput
};

declare var MFiles$VersionComment: {
new (): IVersionComment
};

declare var MFiles$VersionComments: {
new (): IVersionComments
};

declare var MFiles$View: {
new (): IView
};

declare var MFiles$ViewLocation: {
new (): IViewLocation
};

declare var MFiles$Views: {
new (): IViews
};

declare var MFiles$WeeklyTrigger: {
new (): IWeeklyTrigger
};

declare var MFiles$Workflow: {
new (): IWorkflow
};

declare var MFiles$WorkflowAdmin: {
new (): IWorkflowAdmin
};

declare var MFiles$WorkflowAssignment: {
new (): IWorkflowAssignment
};

declare var MFiles$Workflows: {
new (): IWorkflows
};

declare var MFiles$WorkflowsAdmin: {
new (): IWorkflowsAdmin
};

declare var MFiles$XMLSearchResult: {
new (): IXMLSearchResult
};

declare var MFiles$ApplicationPath: string;

declare var MFiles$CLSID: ICLSIDs;

declare var MFiles$CurrentApplicationPlatform: any;

declare function MFiles$CreateInstance(name: string): any


declare function MFiles$CreateObjectCLR(assemblyFile: string, className: string): any


declare function MFiles$DeleteRegistryKey(userSpecific: boolean, key: string): void


declare function MFiles$DeleteRegistryValue(userSpecific: boolean, key: string, valueName: string): void


declare function MFiles$EnableExceptionPropagation(exception: any): void


declare function MFiles$ExecuteURL(url: string): void


declare function MFiles$GetErrorDescription(exception: any): string


declare function MFiles$GetLongErrorDescription(exception: any): string


declare function MFiles$GetStringResource(resource: number): string


declare function MFiles$KillTimer(timerId: number): void


declare function MFiles$LaunchHelp(helpID: string): void


declare function MFiles$PersistStringData(name: string, privateData: boolean, data: string): void


declare function MFiles$ReadFromRegistry(userSpecific: boolean, key: string, valueName: string): any


declare function MFiles$ReadTextFile(filename: string): string


declare function MFiles$ReportException(exception: any): void


declare function MFiles$RetrieveStringData(name: string, privateData: boolean): string


declare function MFiles$SetTimer(timeoutInMs: number, callbackMethod: () => void): number


declare function MFiles$ThrowError(description: string): void


declare function MFiles$WriteToRegistry(
userSpecific: boolean,
key: string,
valueName: string,
value: any,
valueType: string): void

    }
