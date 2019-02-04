declare module 'xrm' {
        declare var Xrm: Xrm$Xrm$XrmStatic;
	
/**
 * Gets the global context.
 * The method provides access to the global context without going through the form context.
 * 
 * It is preferreed to use {@link Xrm.Utility.getGlobalContext Xrm.Utility.getGlobalContext()} instead.
 * @see {@link Xrm.Utility.getGlobalContext}
 */
declare function GetGlobalContext(): Xrm$Xrm$GlobalContext

	declare interface Window {
Xrm: Xrm$Xrm$XrmStatic,
GetGlobalContext(): Xrm$Xrm$GlobalContext
} 
	
/**
 * Static xRM object.
 */
declare interface Xrm$XrmStatic {

/**
 * Provides a namespace container for the context, data and ui objects.
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
Xrm$Page: Xrm$Page,

/**
 * Provides navigation-related methods.
 */
Xrm$Navigation: Xrm$Navigation,

/**
 * Provides a container for useful functions not directly related to the current page.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility External Link: Xrm.Utility (Client API reference)}
 */
Xrm$Utility: Xrm$Utility,

/**
 * Provides methods to create and manage records in the mobile clients (for phones tablets).
 * @deprecated Use {@link Xrm.WebApi} instead.
 */
Xrm$Mobile: Xrm$Mobile,

/**
 * Provides a method to display a web page in the side pane of the Customer Engagement form.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel External Link: Xrm.Panel}
 */
Xrm$Panel: Xrm$Panel,

/**
 * Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi External Link: Xrm.WebApi (Client API reference)}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/use-microsoft-dynamics-365-web-api External Link: Use the Customer Engagement Web API}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/webapi/get-started-web-api-client-side-javascript External Link: Get started with the Customer Engagement Web API (client-side JavaScript)}
 */
Xrm$WebApi: Xrm$WebApi,

/**
 * Provides methods to use native device capabilities of mobile devices.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device External Link: Xrm.Device (Client API reference)}
 */
Xrm$Device: Xrm$Device,

/**
 * Provides methods to encode strings.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding External Link: Xrm.Encoding (Client API reference)}
 */
Xrm$Encoding: Xrm$Encoding
} 


/**
 * Client Types for {@link ClientContext.getClient clientContext.getClient()}.
 * @see {@link XrmEnum.Client}
 */
declare type Xrm$Client = "Web" | "Outlook" | "Mobile" | "UnifiedServiceDesk";


/**
 * Client States for {@link ClientContext.getClientState clientContext.getClientState()}.
 * @see {@link XrmEnum.ClientState}
 */
declare type Xrm$ClientState = "Online" | "Offline";


/**
 * Display States for setDisplayState() on {@link Controls.ProcessControl.setDisplayState Processes} and {@link Controls.Tab.setDisplayState Tabs}.
 * @see {@link XrmEnum.DisplayState}
 */
declare type Xrm$DisplayState = "collapsed" | "expanded";


/**
 * The {@link Entity.save Entity}'s Save Mode
 * @see {@link XrmEnum.EntitySaveMode}
 * @see {@link Entity}
 * @see {@link Entity.save}
 */
declare type Xrm$EntitySaveMode = "saveandclose" | "saveandnew";


/**
 * Form Notification Levels for {@link Ui.setFormNotification formContext.ui.setFormNotification()}.
 * @see {@link XrmEnum.FormNotificationLevel}
 */
declare type Xrm$FormNotificationLevel = "ERROR" | "INFO" | "WARNING";


/**
 * Submit Mode for {@link Attributes.Attribute.setSubmitMode} Attributes.Attribute.setSubmitMode().
 * @see {@link XrmEnum.SubmitMode}
 */
declare type Xrm$SubmitMode = "always" | "dirty" | "never";


/**
 * Themes for {@link GlobalContext.getCurrentTheme globalContext.getCurrentTheme()}.
 * @remarks getCurrentTheme() does not work with Dynamics CRM for tablets or in the unified interface.
 * @see {@link XrmEnum.Theme}
 */
declare type Xrm$Theme = "default" | "Office12Blue" | "Office14Silver";


/**
 * Interface for the client context.
 */
declare interface Xrm$ClientContext {

/**
 * Returns a value to indicate which client the script is executing in.
 * @returns The client, as either "Web", "Outlook", or "Mobile"
 */
getClient(): Xrm$Client,

/**
 * Gets client's current state.
 * @returns The client state, as either "Online" or "Offline"
 */
getClientState(): Xrm$ClientState,

/**
 * Use this method to get information about the kind of device the user is using.
 */
getFormFactor(): XrmEnum$XrmEnum$ClientFormFactor,

/**
 * Returns information whether the server is online or offline.
 */
isOffline(): boolean
} 


/**
 * Returns information about the current organization settings.
 */
declare interface Xrm$OrganizationSettings {

/**
 * Returns the ID of the base currency for the current organization.
 */
baseCurrencyId: string,

/**
 * Returns the default country/region code for phone numbers for the current organization.
 */
defaultCountryCode: string,

/**
 * Indicates whether the auto-save option is enabled for the current organization.
 */
isAutoSaveEnabled: boolean,

/**
 * Returns the preferred language ID for the current organization.
 */
languageId: number,

/**
 * Returns the ID of the current organization.
 */
organizationId: string,

/**
 * Returns the unique name of the current organization.
 */
uniqueName: string,

/**
 * Indicates whether the Skype protocol is used for the current organization.
 */
useSkypeProtocol: boolean
} 


/**
 * Interface for the DateFormattingInfo.calendar field
 */
declare interface Xrm$Calendar {
MinSupportedDateTime: Date,
MaxSupportedDateTime: Date,
AlgorithmType: number,
CalendarType: number,
Eras: number[],
TwoDigitYearMax: number,
IsReadOnly: boolean
} 


/**
 * Interface for UserSettings.dateFormattingInfo response
 */
declare interface Xrm$DateFormattingInfo {
amDesignator: string,
abbreviatedDayNames: string[],
abbreviatedMonthGenitiveNames: string[],
abbreviatedMonthNames: string[],
calendarWeekRule: number,
calendar: Xrm$Calendar,
dateSeparator: string,
dayNames: string[],
firstDayOfWeek: number,
fullDateTimePattern: string,
longDatePattern: string,
longTimePattern: string,
monthDayPattern: string,
monthGenitiveNames: string[],
monthNames: string[],
pmDesignator: string,
shortDatePattern: string,
shortTimePattern: string,
shortestDayNames: string[],
sortableDateTimePattern: string,
timeSeparator: string,
universalSortableDateTimePattern: string,
yearMonthPattern: string
} 


/**
 * Holds information about the current user settings.
 */
declare interface Xrm$UserSettings {

/**
 * Returns the date formatting information for the current user.
 */
dateFormattingInfo(): Xrm$DateFormattingInfo,

/**
 * Returns the ID of the default dashboard for the current user.
 */
defaultDashboardId: string,

/**
 * Indicates whether guided help is enabled for the current user.
 */
isGuidedHelpEnabled: boolean,

/**
 * Indicates whether high contrast is enabled for the current user.
 */
isHighContrastEnabled: boolean,

/**
 * Indicates whether the language for the current user is a right-to-left (RTL) language.
 */
isRTL: boolean,

/**
 * Returns the language ID for the current user.
 */
languageId: number,

/**
 * Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with.
 */
securityRolePrivileges: string[],

/**
 * Returns an array of strings that represent the GUID values of each of the security role that the user is associated with or any teams that the user is associated with.
 */
securityRoles: string[],

/**
 * Returns the transaction currency ID for the current user.
 */
transactionCurrencyId: string,

/**
 * Returns the GUID of the SystemUser.Id value for the current user.
 */
userId: string,

/**
 * Returns the name of the current user.
 */
userName: string,

/**
 * Returns the difference in minutes between the local time and Coordinated Universal Time (UTC).
 */
getTimeZoneOffsetMinutes(): number
} 


/**
 * properties of the current business app in Customer Engagement.
 */
declare interface Xrm$AppProperties {
appId?: string,
displayName?: string,
uniqueName?: string,
url?: string,
webResourceId?: string,
webResourceName?: string,
welcomePageId?: string,
welcomePageName?: string
} 


/**
 * Interface for the xRM application context.
 * GetGlobalContext()
 */
declare interface Xrm$GlobalContext {

/**
 * The client's context instance.
 */
client: Xrm$ClientContext,

/**
 * Returns information about the current organization settings.
 */
organizationSettings: Xrm$OrganizationSettings,

/**
 * Returns information about the current user settings.
 */
userSettings: Xrm$UserSettings,

/**
 * Returns information about the advanced configuration settings for the organization.
 * @param setting Name of the configuration setting.
 * @see {@link XrmEnum.AdvancedConfigSettingOption}
 */
getAdvancedConfigSetting(setting: "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"): number,

/**
 * Gets client's base URL for Dynamics CRM
 * @returns The client's base URL
 * @example For Dynamics CRM On-Premises:               http(s)://server/org
* For Dynamics CRM Online:                    https://org.crm.dynamics.com
* For Dynamics CRM for Outlook (Offline):     http://localhost:2525
 */
getClientUrl(): string,

/**
 * Returns the name of the current business app in Customer Engagement.
 */
getCurrentAppName(): Async$Async$PromiseLike<string>,

/**
 * Returns the properties of the current business app in Customer Engagement.
 */
getCurrentAppProperties(): Async$Async$PromiseLike<Xrm$AppProperties>,

/**
 * Returns the URL of the current business app in Customer Engagement.
 * @example Online        https://**org**.crm.dynamics.com/main.aspx?appid=**GUID**
* OnPrem        https://**server**\/**org**\/main.aspx?appid=**GUID**
 * @returns A string containing the url of the current business app.
 */
getCurrentAppUrl(): string,

/**
 * Gets current styling theme.
 * @remarks This function does not work with Dynamics CRM for tablets or in the unified interface.
 * @returns The name of the current theme, as either "default", "Office12Blue", or "Office14Silver"
 */
getCurrentTheme(): Xrm$Theme,

/**
 * Gets whether automatic save is enabled.
 * @deprecated Deprecated in v9. Use {@link Xrm.OrganizationSettings.isAutoSaveEnabled globalContext.organizationSettings.isAutoSaveEnabled} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @returns true if automatic saving is enabled, otherwise false.
 */
getIsAutoSaveEnabled(): boolean,

/**
 * Gets organization's LCID (language code).
 * @deprecated Deprecated in v9. Use {@link Xrm.OrganizationSettings.languageId globalContext.organizationSettings.languageId} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @returns The organization language code.
 * @see {@link http://msdn.microsoft.com/en-us/library/ms912047(WinEmbedded.10).aspx External Link: Microsoft Locale ID Values}
 */
getOrgLcid(): number,

/**
 * Gets organization's unique name.
 * @remarks This value can be found on the Developer Resources page within Dynamics CRM.
 * @deprecated Deprecated in v9. Use {@link Xrm.OrganizationSettings.uniqueName} globalContext.organizationSettings.uniqueName instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @returns The organization's unique name.
 */
getOrgUniqueName(): string,

/**
 * Gets query string parameters.
 * @returns The query string parameters, in a dictionary object representing name and value pairs.
 * @deprecated Deprecated in v9 (Still applicable in Web Client).
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
getQueryStringParameters(): {
[index: string]: any
},

/**
 * Returns the difference between the local time and Coordinated Universal Time (UTC).
 * @returns The time zone offset, in minutes.
 */
getTimeZoneOffsetMinutes(): number,

/**
 * Gets user's unique identifier.
 * @deprecated Deprecated in v9.  Use {@link Xrm.UserSettings.userId globalContext.userSettings.userId} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @returns The user's identifier in Guid format.
 * @example Example: "{B05EC7CE-5D51-DF11-97E0-00155DB232D0}"
 */
getUserId(): string,

/**
 * Gets user's LCID (language code).
 * @deprecated Deprecated in v9. Use {@link Xrm.UserSettings.languageId globalContext.userSetings.languageId} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @returns The user's language code.
 * @see {@link http://msdn.microsoft.com/en-us/library/ms912047(WinEmbedded.10).aspx External Link: Microsoft Locale ID Values}
 */
getUserLcid(): number,

/**
 * Gets the name of the current user.
 * @deprecated Deprecated in v9. Use {@link Xrm.UserSettings.userName globalContext.userSettings.userName} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @returns The user's name.
 */
getUserName(): string,

/**
 * Gets all user security roles.
 * @deprecated Deprecated in v9.  Use {@link Xrm.UserSettings.securityRoles globalContext.userSettings.securityRoles} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @returns An array of user role identifiers, in Guid format.
 * @example Example: ["cf4cc7ce-5d51-df11-97e0-00155db232d0"]
 */
getUserRoles(): string[],

/**
 * Returns the version number of the Dynamics 365 server.
 * @returns The version number
 */
getVersion(): string,

/**
 * Returns a boolean value indicating if the Customer Engagement instance is hosted on- premises or online.
 */
isOnPremise(): boolean,

/**
 * Prefixes the current organization's unique name to a string; typically a URL path.
 * @param sPath Local pathname of the resource.
 * @returns A path string with the organization name. Format: "/"+ OrgName + sPath
 */
prependOrgName(sPath: string): string
} 


/**
 * Interface for save event arguments.
 */
declare interface Events$SaveEventArguments {

/**
 * @summary Gets save mode, as an integer.
 * @returns The save mode.
 * @description Gets save mode, as an integer.<BR>
**Values returned are**:
* 1      Save
* 2      Save and Close
* 59     Save and New
* 70     AutoSave (Where enabled; can be used with an OnSave handler to conditionally disable auto-saving)
* 58     Save as Completed (Activities)
* 5      Deactivate
* 6      Reactivate
* 47     Assign (All user- or team-owned entities)
* 7      Send (Email)
* 16     Qualify (Lead)
* 15     Disqualify (Lead)
 */
getSaveMode(): XrmEnum$XrmEnum$SaveMode,

/**
 * Returns a boolean value to indicate if the record's save has been prevented.
 * @returns true if saving is prevented, otherwise false.
 */
isDefaultPrevented(): boolean,

/**
 * Prevents the save operation from being submitted to the server.
 * All remaining "on save" handlers will continue execution.
 */
preventDefault(): void
} 


/**
 * Interface for process stage change event arguments.
 */
declare interface Events$StageChangeEventArguments {

/**
 * Gets the direction of the stage change.
 * @returns The direction: "next" or "previous"
 */
getDirection(): ProcessFlow$XrmEnum$StageChangeDirection,

/**
 * Gets the destination stage object
 * @returns The stage object. For switching between entities, returns the previous stage object
 */
getStage(): ProcessFlow$ProcessFlow$Stage
} 


/**
 * Interface for process stage selected event arguments.
 */
declare interface Events$StageSelectedEventArguments {

/**
 * Gets the selected stage object
 * @returns The stage object
 */
getStage(): ProcessFlow$ProcessFlow$Stage
} 


/**
 * Interface for the event context.
 * In the API documentation, this is sometimes refferred to as the executionContext.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/clientapi-execution-context External Link: Client API execution context}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/execution-context External Link: Execution context (Client API reference)}
 */
declare interface Events$EventContext {

/**
 * Gets the Xrm context.
 * @returns The Xrm context.
 */
getContext(): Xrm$GlobalContext,

/**
 * Gets the handler's depth, which is the order in which the handler is executed.
 * @returns The depth, a 0-based index.
 */
getDepth(): number,

/**
 * Gets a reference to the object for which event occurred.
 * @returns The event source.
 */
getEventSource(): Attributes$Attributes$Attribute | Controls$Controls$Control | Xrm$Entity,

/**
 * Gets a reference to the currnet form context
 * @returns The {@link FormContext form context}
 */
getFormContext(): Xrm$FormContext,

/**
 * @summary Gets the shared variable with the specified key.
 * @param T Generic type parameter.
 * @param key The key.
 * @returns The shared variable.
 * @desc Gets the shared variable with the specified key.
Used to pass values between handlers of an event.
 */
getSharedVariable<T>(key: string): T,

/**
 * @summary Sets a shared variable.
 * @param T Generic type parameter.
 * @param key The key.
 * @param value The value.
 * @desc Sets the shared variable with the specified key.
Used to pass values between handlers of an event.
 */
setSharedVariable<T>(key: string, value: T): void
} 


/**
 * Interface for a save event context
 */
declare type Events$SaveEventContext = {

/**
 * Gets save-event arguments.
 * @returns The event arguments.  Returns null for all but the "save" event.
 */
getEventArgs(): Events$SaveEventArguments
} & Events$EventContext



/**
 * Interface for a process stage change event context
 */
declare type Events$StageChangeEventContext = {

/**
 * Gets process stage change event arguments.
 * @returns The event arguments.
 */
getEventArgs(): Events$StageChangeEventArguments
} & Events$EventContext


declare type Events$StageSelectedEventContext = {

/**
 * Gets process stage selected event arguments.
 * @returns The event arguments.
 */
getEventArgs(): Events$StageSelectedEventArguments
} & Events$EventContext



/**
 * Type for a context-sensitive handler.
 * @param context The context.
 */
declare type Events$ContextSensitiveHandler = (context: Events$EventContext) => void;


/**
 * Type for a process status change handler.
 * @param status The process status.
 */
declare type Events$ProcessStatusChangeHandler = (status: ProcessFlow$XrmEnum$ProcessStatus) => void;


/**
 * Defines save options to control how appointment, recurring appointment, or service activity records are processed.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/save External Link: save(Client API reference)}
 */
declare interface Xrm$SaveOptions {

/**
 * Indicates whether to use the Book or Reschedule messages rather than the Create or Update messages.
 * Applicable to appointment, recurring appointment, or service activity records.
 */
UseSchedulingEngine?: boolean
} 


/**
 * Interface for the formContext.data object.
 * @note NTOE NOTE
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data External Link: formContext.data (Client API reference)}
 */
declare interface Xrm$Data {

/**
 * Asynchronously refreshes data on the form, without reloading the page.
 * @param save true to save the record, after the refresh.
 * @returns Returns an asynchronous promise.
 */
refresh(save: boolean): Async$Async$PromiseLike<void>,

/**
 * Asynchronously saves the record.
 * @returns Returns an asynchronous promise.
 */
save(): Async$Async$PromiseLike<void>,

/**
 * Asynchronously saves the record  with the option to set callback functions to be executed after the save operation is completed.
 * @param saveOptions Options to control how appointment, recurring appointment, or service activity records are processed.
 * @returns Returns an asynchronous promise.
 */
save(saveOptions: Xrm$SaveOptions): Async$Async$PromiseLike<void>,

/**
 * Collection of non-entity data on the form.
 * Items in this collection are of the same type as the attributes collection, but they are not attributes of the form entity.
 * In V9 this is only available in the Unified Client
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes External Link: Attributes (Client API reference)}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 * @see {@link Attributes}
 */
attributes: Collection$Collection$ItemCollection<Attributes$Attributes$Attribute>,

/**
 * The record context of the form, {@link Entity formContext.data.entity}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity External Link: formContext.data.entity (Client API reference)}
 */
entity: Xrm$Entity,

/**
 * The process API for {@link ProcessFlow.ProcessManager formContext.ui.process}.
 * @remarks This member may be undefined when Process Flows are not used by the current entity.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process External Link: formContext.data.process (Client API reference)}
 */
process: ProcessFlow$ProcessFlow$ProcessManager
} 


/**
 * Interface for formContext
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/executioncontext/getformcontext External Link: getFormContext (Client API reference)}
 */
declare interface Xrm$FormContext {

/**
 * Provides methods to work with the form.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data External Link: formContext.data (Client API reference)}
 */
data: Xrm$Data,

/**
 * Contains properties and methods to retrieve information about the user interface as well as collections for several subcomponents of the form.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui External Link: formContext.ui (Client API reference)}
 */
ui: Xrm$Ui,

/**
 * Gets all attributes.
 * @returns An array of attributes.
 */
getAttribute(): Attributes$Attributes$Attribute[],

/**
 * Gets an attribute matching attributeName.
 * @param T An Attribute type.
 * @param attributeName Name of the attribute.
 * @returns The attribute.
 */
getAttribute<T: Attributes$Attributes$Attribute>(attributeName: string): T,

/**
 * Gets an attribute matching attributeName.
 * @param attributeName Name of the attribute.
 * @returns The attribute.
 */
getAttribute(attributeName: string): Attributes$Attributes$Attribute,

/**
 * Gets an attribute by index.
 * @param index The attribute index.
 * @returns The attribute.
 */
getAttribute(index: number): Attributes$Attributes$Attribute,

/**
 * Gets an attribute.
 * @param delegateFunction A matching delegate function
 * @returns An array of attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getAttribute(
delegateFunction: Collection$Collection$MatchingDelegate<Attributes$Attributes$Attribute>): Attributes$Attributes$Attribute[],

/**
 * Gets all controls.
 * @returns An array of controls.
 */
getControl(): Controls$Controls$Control[],

/**
 * Gets a control matching controlName.
 * @param T A Control type
 * @param controlName Name of the control.
 * @returns The control.
 */
getControl<T: Controls$Controls$Control>(controlName: string): T,

/**
 * Gets a control matching controlName.
 * @param controlName Name of the control.
 * @returns The control.
 */
getControl(controlName: string): Controls$Controls$Control,

/**
 * Gets a control by index.
 * @param T A Control type
 * @param index The control index.
 * @returns The control.
 */
getControl<T: Controls$Controls$Control>(index: number): T,

/**
 * Gets a control by index.
 * @param index The control index.
 * @returns The control.
 */
getControl(index: number): Controls$Controls$Control,

/**
 * Gets a control.
 * @param delegateFunction A matching delegate function.
 * @returns An array of control.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getControl(
delegateFunction: Collection$Collection$MatchingDelegate<Controls$Controls$Control>): Controls$Controls$Control[]
} 


/**
 * Interface for the formContext.ui object.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui External Link: formContext.ui (Client API reference)}
 */
declare interface Xrm$Ui {

/**
 * Displays a form level notification. Any number of notifications can be displayed and will remain until removed using clearFormNotification.
 * The height of the notification area is limited so each new message will be added to the top.
 * @param message The text of the notification message.
 * @param level The level of the notification which defines how the message will be displayed, such as the icon.
ERROR: Notification will use the system error icon.
WARNING: Notification will use the system warning icon.
INFO: Notification will use the system info icon.
 * @param uniqueId Unique identifier for the notification which is used with clearFormNotification to remove the notification.
 * @returns true if it succeeds, otherwise false.
 */
setFormNotification(message: string, level: Xrm$FormNotificationLevel, uniqueId: string): boolean,

/**
 * Clears the form notification described by uniqueId.
 * @param uniqueId Unique identifier.
 * @returns True if it succeeds, otherwise false.
 */
clearFormNotification(uniqueId: string): boolean,

/**
 * Closes the form.
 */
close(): void,

/**
 * Gets form type.
 * @returns The form type.
 * @remarks *Values returned are**:
* 0  Undefined
* 1  Create
* 2  Update
* 3  Read Only
* 4  Disabled
* 6  Bulk Edit
* Deprecated values are 5 (Quick Create), and 11 (Read Optimized)
 */
getFormType(): XrmEnum$XrmEnum$FormType,

/**
 * Gets view port height.
 * @returns The view port height, in pixels.
 * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
 */
getViewPortHeight(): number,

/**
 * Gets view port width.
 * @returns The view port width, in pixels.
 * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
 */
getViewPortWidth(): number,

/**
 * Re-evaluates the ribbon's configured EnableRules.
 * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
 */
refreshRibbon(): void,

/**
 * The business process flow API, used to interact with the business process flow control in a form.
 */
process: Controls$Controls$ProcessControl,

/**
 * A reference to the collection of controls on the form.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Controls$Control>,

/**
 * The form selector API.
 * @remarks This API does not exist with Microsoft Dynamics CRM for tablets.
 */
formSelector: Controls$Controls$FormSelector,

/**
 * The navigation API.
 * @remarks This API does not exist with Microsoft Dynamics CRM for tablets.
 */
navigation: Controls$Xrm$Navigation,

/**
 * A reference to the collection of tabs on the form.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
tabs: Collection$Collection$ItemCollection<Controls$Controls$Tab>,

/**
 * A collection of all the quick view controls on a form using the new form rendering engine (also called "turbo forms").
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms ExternalLink: formContext.ui.quickForms (Client API reference)}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui External Link: formContext.ui (Client API reference)}
 */
quickForms: Collection$Collection$ItemCollection<Controls$Controls$QuickFormControl>
} 


/**
 * Interface for options used in Xrm.Utility.lookupObjects
 */
declare interface Xrm$LookupOptions {

/**
 * Indicates whether the lookup allows more than one item to be selected.
 */
allowMultiSelect?: boolean,

/**
 * The default entity type to use.
 */
defaultEntityType?: string,

/**
 * The default view to use.
 */
defaultViewId?: string,

/**
 * The entity types to display.
 */
entityTypes?: string[],

/**
 * Indicates whether the lookup control should show the barcode scanner in mobile clients.
 */
showBarcodeScanner?: boolean,

/**
 * The views to be available in the view picker.Only system views are supported.
 */
viewIds?: string[]
} 


/**
 * Interface for the Xrm.Utility API
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility External Link: Xrm.Utility (Client API reference)}
 */
declare interface Xrm$Utility {

/**
 * Closes a progress dialog box.
 */
closeProgressIndicator(): void,

/**
 * Returns the valid state transitions for the specified entity type and state code.
 * TODO: No info on the return type is available
 * @param entityName The logical name of the entity.
 * @param stateCode The state code to find out the allowed status transition values.
 */
getAllowedStatusTransitions(entityName: string, stateCode: number): Async$Async$PromiseLike<any>,

/**
 * Returns the entity metadata for the specified entity.
 * @param entityName The logical name of the entity.
 * @param attributes The attributes to get metadata for.
 */
getEntityMetadata(
entityName: string,
attributes?: string[]): Async$Async$PromiseLike<Metadata$Metadata$EntityMetadata>,

/**
 * The method provides access to the global context without going through the form context.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext External Link: getGlobalContext (Client API reference)}
 */
getGlobalContext(): Xrm$GlobalContext,

/**
 * Returns the localized string for a given key associated with the specified web resource.
 * @param webResourceName The name of the web resource.
 * @param key The key for the localized string.
 * @returns A localized string.
 */
getResourceString(webResourceName: string, key: string): string,

/**
 * Invokes an action based on the specified parameters
 * @param name Name of the process action to invoke.
 * @param parameters An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/invokeprocessaction External Link: invokeProcessAction (Client API reference)}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/customize/actions External Link: Actions overview}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/create-own-actions External Link: Create your own actions}
 */
invokeProcessAction(
name: string,
parameters: Collection$Collection$Dictionary<any>): Async$Async$PromiseLike<any>,

/**
 * Opens a lookup control to select one or more items.
 * @param lookupOptions Defines the options for opening the lookup dialog
 */
lookupObjects(lookupOptions: Xrm$LookupOptions): Async$Async$PromiseLike<Xrm$LookupValue[]>,

/**
 * Refreshes the parent grid containing the specified record.
 * @param lookupOptions : The lookup value of the parent object to refresh.
 */
refreshParentGrid(lookupOptions: Xrm$LookupValue): void,

/**
 * Displays a progress dialog with the specified message.
 * Any subsequent call to this method will update the displayed message in the existing progress dialog with the message specified in the latest method call.
 * @param message The message to be displayed in the progress dialog.
 */
showProgressIndicator(message: string): void,

/**
 * Displays an alert dialog, with an "OK" button.
 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openAlertDialog} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param message The message.
 * @param onCloseCallback The "OK" callback.
 */
alertDialog(message: string, onCloseCallback: () => void): void,

/**
 * Displays a confirmation dialog, with "OK" and "Cancel" buttons.
 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openConfirmDialog} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param message The message.
 * @param yesCloseCallback The "OK" callback.
 * @param noCloseCallback The "Cancel" callback.
 */
confirmDialog(
message: string,
yesCloseCallback: () => void,
noCloseCallback: () => void): void,

/**
 * Query if 'entityType' is an Activity entity.
 * @deprecated Deprecated in v9. Use {@link Xrm.Utility.getEntityMetadata  Xrm.Utility.getEntityMetadata(entityName, ["IsActivity"])} instead.
 * @remarks The isActivityType method is synchronous so it was suitable for ribbon rules.
However, the replacement method, getEntityMetadata, is asynchronous, and is not suitable for ribbon rules.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param entityType Type of the entity.
 * @returns true if the entity is an Activity, false if not.
 */
isActivityType(entityType: string): boolean,

/**
 * Opens quick create.
 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openForm} instead with the option {useQuickCreateForm:true}.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param entityLogicalName The logical name of the entity to create.
 * @param createFromEntity (Optional) Designates a record that will provide default values based on mapped attribute values.
 * @param parameters (Optional) A dictionary object that passes extra query string parameters to the form. Invalid query string parameters will cause an error.
 * @returns Returns an asynchronous promise.
 */
openQuickCreate(
entityLogicalName: string,
createFromEntity?: Xrm$LookupValue,
parameters?: Xrm$Utility.Utility$OpenParameters): Async$Async$PromiseLike<Async$Async$OpenQuickCreateSuccessCallbackObject>,

/**
 * Opens an entity form.
 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openForm} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param name The entity's logical name.
 * @param id (Optional) The unique identifier for the record.
 * @param parameters (Optional) A dictionary object that passes extra query string parameters to the form.
 * @param windowOptions (Optional) Options for controlling the window.
 */
openEntityForm(
name: string,
id?: string,
parameters?: Xrm$Utility.Utility$FormOpenParameters,
windowOptions?: Xrm$Utility.Utility$WindowOptions): void,

/**
 * Opens an HTML Web Resource in a new browser window.
 * @deprecated Deprecated in v9. Use {@link Xrm.Navigation.openWebResource} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param webResourceName Name of the HTML web resource. Can be used to pass URL parameters.  See Remarks.
 * @param webResourceData (Optional) Data to pass into the Web Resource's data parameter. It is advised to use encodeURIcomponent() to encode the value.
 * @param width (Optional) The width of the new window.
 * @param height (Optional) The height of the new window.
 * @returns A Window reference, containing the opened Web Resource.
 * @remarks This function will not work with Microsoft Dynamics CRM for tablets.<BR>
**Valid WebResource URL Parameters**:
* typename
* type
* id
* orgname
* userlcid
* data (identical to this method's webResourceData parameter)
* formid
 */
openWebResource(
webResourceName: string,
webResourceData?: string,
width?: number,
height?: number): Window
} 


/**
 * Interface for methods to create and manage records in the mobile clients (for phones tablets).
 */
declare interface Xrm$Mobile {

/**
 * Provides methods to create and manage records in the mobile clients while working in the offline mode.
 * @see {@link https://msdn.microsoft.com/en-us/library/mt787123.aspx External Link: Xrm.Mobile.offline (client-side reference)}
 * @deprecated Use {@link Xrm.WebApi.offline} instead.  Xrm.WebApi.offline is implemented differently than Xrm.Mobile.offline
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
offline: Xrm$MobileOffline
} 


/**
 * Interface for the Mobile.offline methods to create and manage records in the mobile clients while working in the offline mode.
 * @deprecated Use {@link Xrm.WebApi.offline} instead.  Xrm.WebApi.offline is implemented differently than Xrm.Mobile.offline
 * @see {@link https://msdn.microsoft.com/en-us/library/mt787123.aspx External Link: Xrm.Mobile.offline (client-side reference)}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
declare interface Xrm$MobileOffline {

/**
 * Returns whether an entity is offline enabled.
 * @param entityType The logical name of the entity.
 * @returns True if the entity is offline enabled; otherwise False.
 * @deprecated Use {@link Xrm.WebApi.isAvailableOffline} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
isOfflineEnabled(entityType: string): boolean,

/**
 * Creates an entity record in mobile clients while working in the offline mode.
 * @param entityType The logical name of the entity.
 * @param data A dictionary object containing key : value pairs for the record to create.
 * @returns Returns an asynchronous promise.
 * @remarks You cannot create intersect and activity party entities.<BR>
Only the following attribute types are supported in offline mode:<BR>
BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName<BR>
Integer, Lookup, Memo, Money, Owner, Picklist, String, State<BR>
Status, UniqueIdentifier
 * @deprecated Use {@link Xrm.WebApi.createRecord} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
createRecord(
entityType: string,
data: {
[attributeName: string]: any
}): Async$Async$PromiseLike<Async$Async$OfflineOperationSuccessCallbackObject>,

/**
 * Retrieves an entity record in mobile clients while working in the offline mode.
 * @param entityType The logical name of the entity.
 * @param id GUID of the record to retrieve.
 * @param options (Optional) OData system query options to retrieve your data. Supports $select and $expand
 * @example <caption>Example options</caption>
options: ?$select=name&$expand=primarycontactid($select=contactid,fullname)
 * @returns Returns an asynchronous promise.
 * @remarks Only $select option can be specified within $expand.<BR>
Only the following attribute types are supported in offline mode:<BR>
BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName<BR>
Integer, Lookup, Memo, Money, Owner, Picklist, String, State<BR>
Status, UniqueIdentifier
 * @deprecated Use {@link Xrm.WebApi.retrieveRecord} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
retrieveRecord(
entityType: string,
id: string,
options?: string): Async$Async$PromiseLike<Async$Async$OfflineOperationSuccessCallbackObject>,

/**
 * Retrieves a collection of entity records in mobile clients while working in the offline mode.
 * @param entityType The logical name of the entity.
 * @param options (Optional) The logical name of the entity
 * @param maxPageSize (Optional) A positive number to indicates the number of entity records to be returned per page.
* If you do not specify this parameter, the default value is passed as 5000.
* If the number of records being retrieved is more than maxPageSize, an
 * @odata .nextLink property
will be returned, and you can use the value of the
 * @odata .nextLink property with a new GET
request to return next set of records.
 * @returns Returns an asynchronous promise.
 * @remarks A maximum of 5000 related records can be retrieved when using $expand.
* Only $select option can be specified within $expand.
* $skip query option is not supported.
* Only the following attribute types are supported in offline mode:<BR>
BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName<BR>
Integer, Lookup, Memo, Money, Owner, Picklist, String, State<BR>
Status, UniqueIdentifier
 * @deprecated Use {@link Xrm.WebApi.retrieveMultipleRecords} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
retrieveMultipleRecords(
entityType: string,
options?: string,
maxPageSize?: number): Async$Async$PromiseLike<Array<{
[key: string]: any
}>>,

/**
 * Updates an entity record in mobile clients while working in the offline mode.
 * @param entityType The logical name of the entity.
 * @param id GUID of the record to update.
 * @param data A dictionary object containing key : value pairs for the record to update.
 * @returns Returns an asynchronous promise.
 * @remarks You cannot update intersect and activity party entities.<BR>
Only the following attribute types are supported in offline mode:<BR>
BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName<BR>
Integer, Lookup, Memo, Money, Owner, Picklist, String, State<BR>
Status, UniqueIdentifier
 * @deprecated Use {@link Xrm.WebApi.updateRecord} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
updateRecord(
entityType: string,
id: string,
data: {
[attributeName: string]: any
}): Async$Async$PromiseLike<Async$Async$OfflineOperationSuccessCallbackObject>,

/**
 * Deletes an entity record in mobile clients while working in the offline mode.
 * @param entityType The logical name of the entity.
 * @param id GUID of the record to delete.
 * @returns Returns an asynchronous promise.
 * @remarks You cannot delete intersect and activity party entities.
 * @deprecated Use {@link Xrm.WebApi.deleteRecord} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
deleteRecord(
entityType: string,
id: string): Async$Async$PromiseLike<Async$Async$OfflineOperationSuccessCallbackObject>
} 


/**
 * Interface for the Xrm.Panel API
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel External Link: Xrm.Panel}
 */
declare interface Xrm$Panel {

/**
 * Displays the web page represented by a URL in the static area in the side pane, which appears on all pages in the Customer Engagement web client.
 * @param url URL of the page to be loaded in the side pane static area.
 * @param title Title of the side pane static area.
 * @remarks This method is only supported for the web client.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel/loadpanel External Link: loadPanel (Client-side reference)}
 */
loadPanel(url: string, title: string): void
} 


/**
 * Object passed to ErrorCallbackDelegate.
 */
declare interface Async$ErrorCallbackObject {

/**
 * The error code.
 */
errorCode: number,

/**
 * An error message describing the issue.
 */
message: string
} 


/**
 * Object passed to QuickCreateSuccessCallbackDelegate.
 */
declare interface Async$OpenQuickCreateSuccessCallbackObject {

/**
 * A lookup value which identifies the record which has been created.
 */
savedEntityReference: Xrm$LookupValue
} 


/**
 * Object passed to OfflineOperationSuccessCallbackDelegate;
 */
declare interface Async$OfflineOperationSuccessCallbackObject {

/**
 * GUID of the record;
 */
id: string,

/**
 * Logical name of the entity.
 */
logicalName: string
} 


/**
 * Object passed to OfflineErrorCallbackDelegate.
 */
declare type Async$OfflineErrorCallbackObject = {

/**
 * An internal error message that might contain additional details about the issue.
 */
debugMessage: string
} & Async$ErrorCallbackObject



/**
 * Interface for asynchronous promises. Based on JQuery Promise
 */
declare interface Async$PromiseLike<T> {

/**
 * Attaches callbacks for the resolution and/or rejection of the Promise.
 * @param onfulfilled The callback to execute when the Promise is resolved.
 * @param onrejected The callback to execute when the Promise is rejected.
 * @returns A Promise for the completion of which ever callback is executed.
 */
then<U>(
onFulfilled?: (value: T) => U | Async$PromiseLike<U>,
onRejected?: (error: any) => U | Async$PromiseLike<U>): Async$PromiseLike<U>,
then<U>(
onFulfilled?: (value: T) => U | Async$PromiseLike<U>,
onRejected?: (error: any) => void): Async$PromiseLike<U>,

/**
 * UNDOCUMENTED (Web Client only) Add handlers to be called when the Deferred object is rejected.
 */
fail<U>(
onRejected?: (reason: Xrm$ErrorResponse) => U | Async$PromiseLike<U>): Async$PromiseLike<U>,

/**
 * UNDOCUMENTED (Web Client only): Add handlers to be called when the Deferred object is either resolved or rejected.
 */
always<U>(alwaysCallback: (() => U | Async$PromiseLike<U>)): Async$PromiseLike<U>,

/**
 * UNDOCUMENTED (Unified Client only): Add handlers to be called when the Deferred object is rejected.
 */
catch<U>(
onRejected?: (reason: Xrm$ErrorResponse) => U | Async$PromiseLike<U>): Async$PromiseLike<U>,

/**
 * UNDOCUMENTED (Unified Client only): Add handlers to be called when the Deferred object is either resolved or rejected.
 */
finally<U>(finallyCallback: (() => U | Async$PromiseLike<U>)): Async$PromiseLike<U>
} 


/**
 * Called for each item in an array
 * @param item The item.
 * @param index Zero-based index of the item array.
 * @returns true if the item matches, false if it does not.
 */
declare type Collection$MatchingDelegate<T> = (item: T, index?: number) => boolean;


/**
 * Called for each item in an array
 * @param item The item.
 * @param index Zero-based index of the item array.
 */
declare type Collection$IterativeDelegate<T> = (item: T, index?: number) => void;


/**
 * Defines collections that are index-able by string
 * @param Generic type parameter.
 */
declare interface Collection$Dictionary<T> {
[key: string]: T
} 


/**
 * Defines item collections that are index-able by string
 * @param Generic type parameter.
 */
declare type Collection$StringIndexableItemCollection<T> = Collection$Dictionary<T> & Collection$ItemCollection<T>;


/**
 * Collections are structures to provide access to data that represent an array, but without the ability to modify the data in the array.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
declare interface Collection$ItemCollection<T> {

/**
 * Applies an operation to all items in this collection.
 * @param delegate An iterative delegate function
 */
forEach(delegate: Collection$IterativeDelegate<T>): void,

/**
 * Gets the item using a delegate matching function
 * @param delegate A matching delegate function
 * @returns A T[] whose members have been validated by delegate.
 */
get(delegate: Collection$MatchingDelegate<T>): T[],

/**
 * Gets the item given by the index.
 * @param itemNumber The item number to get.
 * @returns The T in the itemNumber-th place.
 */
get(itemNumber: number): T,

/**
 * Gets the item given by the index.
 * @param itemNumber The item number to get.
 * @returns The T in the itemNumber-th place.
 * @see {@link Controls.Control.getName Controls.Control.getName()} for Control-naming schemes.
 */
get<TSubType: T>(itemNumber: number): TSubType,

/**
 * Gets the item given by the key.
 * @param itemName The item name to get.
 * @returns The T matching the key itemName.
 * @see {@link Controls.Control.getName Controls.Control.getName()} for Control-naming schemes.
 */
get(itemName: string): T,

/**
 * Gets the item given by the key.
 * @param itemName The item name to get.
 * @returns The T matching the key itemName.
 * @see {@link Controls.Control.getName Controls.Control.getName()} for Control-naming schemes.
 */
get<TSubType: T>(attributeName: string): TSubType,

/**
 * Gets the entire array of T.
 * @returns A T[].
 */
get(): T[],

/**
 * Gets the length of the collection.
 * @returns The length.
 */
getLength(): number
} 


/**
 * Interface for Page context
 * @deprecated Use {@link Xrm.Events.EventContext.getFormContext formContext} instead.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}a
 */
declare type Xrm$Page = {

/**
 * Provides methods to retrieve information specific to an organization, a user, or parameters passed to a page.
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
context: Xrm$GlobalContext
} & Xrm$FormContext



/**
 * @deprecated Use {@link Xrm.Controls.AddControlNotificationOptions} instead.
 */
declare type Page$AddControlNotificationOptions = {

/**
 * A collection of actions
 */
actions?: Controls$ControlNotificationAction[],

/**
 * The message to display in the notification.
 * In the current release, only the first message specified in this array will be displayed.
 */
messages: string[],

/**
 * Defines the type of notification.
 */
notificationLevel?: Controls$NotificationLevel,

/**
 * The ID to use to clear this notification when using the clearNotification method.
 */
uniqueId: string
} & Controls$Page$AddControlNotificationOptions



/**
 * Interface to define the actions on a control notification
 * @deprecated Use {@link Xrm.Controls.ControlNotificationAction} instead.
 */
declare type Page$ControlNotificationAction = {

/**
 * The body message of the notification to be displayed to the user. Limit your message to 100 characters for optimal user experience.
 */
message?: string,

/**
 * Array of functions. The corresponding actions for the message.
 */
actions: Array<() => void>
} & Controls$Page$ControlNotificationAction



/**
 * Interface for an entity's form selector item.
 * @deprecated Use {@link Xrm.Controls.FormItem} instead.
 */
declare type Page$FormItem = {

/**
 * Gets the unique identifier of the form.
 * @returns The identifier, in Guid format.
 */
getId(): string,

/**
 * Gets the label for the form.
 * @returns The label.
 */
getLabel(): string,

/**
 * Navigates the user to this form.
 */
navigate(): void
} & Controls$Page$FormItem



/**
 * Interface for the form selector API.
 * @deprecated Use {@link Xrm.Controls.FormSelector} instead.
 */
declare type Page$FormSelector = {

/**
 * Gets current form.
 * @returns The current item.
 * @remarks When only one form is available this method will return null.
 */
getCurrentItem(): Page$FormItem,

/**
 * A reference to the collection of available forms.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
items: Collection$Collection$ItemCollection<Page$FormItem>
} & Controls$Page$FormSelector



/**
 * Interface for Xrm.Page.ui.navigation.
 * @deprecated Use {@link Xrm.Controls.Navigation} instead.
 */
declare type Page$Navigation = {

/**
 * A reference to the collection of available navigation items.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
items: Collection$Collection$ItemCollection<Controls$NavigationItem>,

/**
 * Displays an alert dialog containing a message and a button.
 * @param alertStrings The strings to be used in the alert dialog.
 * @param alertOptions The height and width options for alert dialog
 */
openAlertDialog(
alertStrings: Page$Navigation.Navigation$AlertStrings,
alertOptions?: Page$Navigation.Navigation$DialogSizeOptions): Async$Async$PromiseLike<any>,

/**
 * Displays a confirmation dialog box containing a message and two buttons.
 * @param confirmStrings The strings to be used in the confirm dialog.
 * @param confirmOptions The height and width options for alert dialog
 */
openConfirmDialog(
confirmStrings: Page$Navigation.Navigation$ConfirmStrings,
confirmOptions?: Page$Navigation.Navigation$DialogSizeOptions): Async$Async$PromiseLike<Page$Navigation.Navigation$ConfirmResult>,

/**
 * Displays an error dialog.
 * @param confirmStrings The strings to be used in the confirm dialog.
 * @param confirmOptions The height and width options for alert dialog
 */
openErrorDialog(
errorOptions: Page$Navigation.Navigation$ErrorDialogOptions): Async$Async$PromiseLike<any>,

/**
 * Opens a file.
 */
openFile(
file: Page$Navigation.Navigation$FileDetails,
openFileOptions?: XrmEnum$XrmEnum$OpenFileOptions): void,

/**
 * Opens an entity form or a quick create form.
 */
openForm(
entityFormOptions: Page$Navigation.Navigation$EntityFormOptions,
formParameters?: Xrm$Utility.Utility$OpenParameters): Async$Async$PromiseLike<Page$Navigation.Navigation$OpenFormResult>,

/**
 * Opens a URL, including file URLs.
 * @param url URL to open.
 * @param openUrlOptions Options to open the URL
 */
openUrl(
url: string,
openUrlOptions?: Page$Navigation.Navigation$DialogSizeOptions): void,

/**
 * Opens an HTML web resource.
 * @param webResourceName Name of the HTML web resource.
 * @param windowOptions (Optional) Window options for opening the web resource.
                           It is advised to use encodeURIcomponent() to encode the value.
 */
openWebResource(
webResourceName: string,
windowOptions?: Page$Navigation.Navigation$OpenWebresourceOptions,
data?: string): void
} & Controls$Page$Navigation



/**
 * Interface for a navigation item.
 * @see {@link UiElement}
 * @see {@link UiFocusable}
 * @deprecated Use {@link Xrm.Controls.NavigationItem} instead.
 */
declare type Page$NavigationItem = {

/**
 * Gets the name of the item.
 * @returns The identifier.
 */
getId(): string
} & Controls$Page$NavigationItem



/**
 * Constants to use with the addNotification method of form controls
 * @deprecated Use {@link Xrm.Controls.NotificationLevel} instead.
 */
declare type Page$NotificationLevel = Controls$Page$NotificationLevel;


/**
 * Requirement Level for Xrm.Page.Attribute.getRequiredLevel() and Xrm.Page.Attribute.setRequiredLevel().
 * @deprecated Use {@link Xrm.Attributes.RequirementLevel} instead.
 */
declare type Page$RequirementLevel = Attributes$Page$RequirementLevel;


/**
 * Save Modes for Xrm.Page.Entity.save().
 * @deprecated Use {@link Xrm.EntitySaveMode} instead.
 */
declare type Page$SaveMode = Xrm$EntitySaveMode;


/**
 * Status for Xrm.Page.Stage.getStatus().
 * @deprecated Use {@link Xrm.ProcessFlow.StageStatus} instead.
 */
declare type Page$StageStatus = ProcessFlow$Page$StageStatus;


/**
 * Status for Xrm.Page.Process.getStatus().
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessStatus} instead
 */
declare type Page$ProcessStatus = ProcessFlow$Page$ProcessStatus;


/**
 * Submit Mode for {@link Attributes.Attribute.setSubmitMode} Attributes.Attribute.setSubmitMode().
 * @see {@link XrmEnum.SubmitMode}
 */
declare type Page$SubmitMode = "always" | "dirty" | "never";


/**
 * Control type for Xrm.Page.ui.QuickForm.getControlType().
 * @deprecated Use {@link Xrm.Controls.ControlQuickFormType} instead.
 */
declare type Page$ControlQuickFormType = Controls$Page$ControlQuickFormType;


/**
 * Control types for Xrm.Page.Control.getControlType().
 * @deprecated Use {@link Xrm.Controls.ControlType} instead.
 */
declare type Page$ControlType = Controls$Page$ControlType;


/**
 * Date attribute formats for Xrm.Page.Attribute.getFormat(), used by DateAttribute.
 * @deprecated Use {@link Xrm.Attributes.DateAttributeFormat} instead.
 */
declare type Page$DateAttributeFormat = Attributes$Page$DateAttributeFormat;


/**
 * Integer attribute formats for Xrm.Page.Attribute.getFormat(), used by NumberAttribute.
 * @deprecated Use {@link Xrm.Attributes.IntegerAttributeFormat} instead.
 */
declare type Page$IntegerAttributeFormat = Attributes$Page$IntegerAttributeFormat;


/**
 * OptionSet attribute formats for Xrm.Page.Attribute.getFormat(), used by OptionSetAttribute.
 * @deprecated Use {@link Xrm.Attributes.OptiopnSetAttributeFormat} instead.
 */
declare type Page$OptionSetAttributeFormat = Attributes$Page$OptionSetAttributeFormat;


/**
 * String attribute formats for Xrm.Page.Attribute.getFormat(), used by StringAttribute.
 * @deprecated Use {@link Xrm.Attributes.StringAttributeFormat} instead.
 */
declare type Page$StringAttributeFormat = Attributes$Page$StringAttributeFormat;


/**
 * Attribute types for Xrm.ui.ProcessMonitor Xrm.Page.Attribute.setDisplayState().
 * @deprecated Use {@link Xrm.Attributes.AttributeType} instead.
 */
declare type Page$AttributeType = Attributes$Page$AttributeType;


/**
 * Direction types for a process stage change event
 * @deprecated Use {@link Xrm.ProcessFlow.StageChangeDirection} instead.
 */
declare type Page$StageChangeDirection = ProcessFlow$Page$StageChangeDirection;


/**
 * Attribute formats for Xrm.Page.Attribute.getFormat().
 * @deprecated Use {@link Xrm.Attributes.AttributeFormat} instead.
 */
declare type Page$AttributeFormat = Attributes$Page$AttributeFormat;


/**
 * Interface for a CRM Business Process Flow instance.
 * @deprecated Use {@link Xrm.ProcessFlow.Process} instead.
 */
declare type Page$Process = {

/**
 * Returns the unique identifier of the process.
 * @returns The identifier for this process, in GUID format.
 * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
 */
getId(): string,

/**
 * Returns the name of the process.
 * @returns The name.
 */
getName(): string,

/**
 * Returns an collection of stages in the process.
 * @returns The stages.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getStages(): Collection$Collection$ItemCollection<ProcessFlow$Stage>,

/**
 * Returns a boolean value to indicate if the process is rendered.
 * @returns true if the process is rendered, false if not.
 */
isRendered(): boolean
} & ProcessFlow$Page$Process



/**
 * Interface for CRM Business Process Flow stages.
 * @deprecated Use {@link Xrm.ProcessFlow.Stage} instead.
 */
declare type Page$Stage = {

/**
 * Returns an object with a getValue method which will return the integer value of the business process flow
 * category.
 * @returns The stage category.
 */
getCategory(): {
getValue(): XrmEnum$XrmEnum$StageCategory
},

/**
 * Returns the logical name of the entity associated with the stage.
 * @returns The entity name.
 */
getEntityName(): string,

/**
 * Returns the unique identifier of the stage.
 * @returns The identifier of the Stage, in GUID format.
 * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
 */
getId(): string,

/**
 * Returns the name of the stage.
 * @returns The name.
 */
getName(): string,

/**
 * Returns the status of the stage.
 * @returns The status, either "active" or "inactive".
 */
getStatus(): Page$StageStatus,

/**
 * Returns a collection of steps in the stage.
 * @returns An array of Step.
 */
getSteps(): ProcessFlow$Step[]
} & ProcessFlow$Page$Stage



/**
 * Interface for CRM Business Process Flow steps.
 * @deprecated Use {@link Xrm.ProcessFlow.Step} instead.
 */
declare type Page$Step = {

/**
 * Returns the logical name of the attribute associated to the step.
 * @returns The attribute.
 * @remarks Some steps don’t contain an attribute value.
 */
getAttribute(): string,

/**
 * Returns the name of the step.
 * @returns The name.
 */
getName(): string,

/**
 * Returns whether the step is required in the business process flow.
 * @returns true if required, false if not.
 * @remarks Returns true if the step is marked as required in the Business Process Flow editor; otherwise, false.
There is no connection between this value and the values you can change in the formContext.data.entity
attribute RequiredLevel methods.
 */
isRequired(): boolean
} & ProcessFlow$Page$Step



/**
 * Interface for the event context.
 * In the API documentation, this is sometimes refferred to as the executionContext.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/clientapi-execution-context External Link: Client API execution context}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/execution-context External Link: Execution context (Client API reference)}
 */
declare interface Page$EventContext {

/**
 * Gets the Xrm context.
 * @returns The Xrm context.
 */
getContext(): Xrm$GlobalContext,

/**
 * Gets the handler's depth, which is the order in which the handler is executed.
 * @returns The depth, a 0-based index.
 */
getDepth(): number,

/**
 * Gets a reference to the object for which event occurred.
 * @returns The event source.
 */
getEventSource(): Attributes$Attributes$Attribute | Controls$Controls$Control | Xrm$Entity,

/**
 * Gets a reference to the currnet form context
 * @returns The {@link FormContext form context}
 */
getFormContext(): Xrm$FormContext,

/**
 * @summary Gets the shared variable with the specified key.
 * @param T Generic type parameter.
 * @param key The key.
 * @returns The shared variable.
 * @desc Gets the shared variable with the specified key.
Used to pass values between handlers of an event.
 */
getSharedVariable<T>(key: string): T,

/**
 * @summary Sets a shared variable.
 * @param T Generic type parameter.
 * @param key The key.
 * @param value The value.
 * @desc Sets the shared variable with the specified key.
Used to pass values between handlers of an event.
 */
setSharedVariable<T>(key: string, value: T): void
} 


/**
 * Interface for a save event context
 */
declare type Page$SaveEventContext = {

/**
 * Gets save-event arguments.
 * @returns The event arguments.  Returns null for all but the "save" event.
 */
getEventArgs(): Events$SaveEventArguments
} & Page$EventContext



/**
 * Interface for a process stage change event context
 */
declare type Page$StageChangeEventContext = {

/**
 * Gets process stage change event arguments.
 * @returns The event arguments.
 */
getEventArgs(): Events$StageChangeEventArguments
} & Page$EventContext


declare type Page$StageSelectedEventContext = {

/**
 * Gets process stage selected event arguments.
 * @returns The event arguments.
 */
getEventArgs(): Events$StageSelectedEventArguments
} & Page$EventContext



/**
 * Type for a context-sensitive handler.
 * @param context The context.
 */
declare type Page$ContextSensitiveHandler = (context: Page$EventContext) => void;


/**
 * Type for a process status change handler.
 * @param status The process status.
 */
declare type Page$ProcessStatusChangeHandler = (status: ProcessFlow$Page$ProcessStatus) => void;


/**
 * Interface for UI elements with labels.
 * @deprecated Use {@link Xrm.Controls.UiLabelElement} instead.
 */
declare type Page$UiLabelElement = {

/**
 * Gets the label.
 * @returns The label.
 */
getLabel(): string,

/**
 * Sets the label.
 * @param label The label.
 */
setLabel(label: string): void
} & Controls$Page$UiLabelElement



/**
 * Interface for UI elements which can have the visibility value read.
 * @deprecated Use {@link Xrm.Controls.UiCanGetVisibleElement} instead.
 */
declare type Page$UiCanGetVisibleElement = {

/**
 * Gets the visibility state.
 * @returns true if the tab is visible, otherwise false.
 */
getVisible(): boolean
} & Controls$Page$UiCanGetVisibleElement



/**
 * Interface for UI elements which can have the visibility value updated.
 * @deprecated Use {@link Xrm.Controls.UiCanSetVisibleElement} instead.
 */
declare type Page$UiCanSetVisibleElement = {

/**
 * Sets the visibility state.
 * @param visible true to show, false to hide.
 */
setVisible(visible: boolean): void
} & Controls$Page$UiCanSetVisibleElement



/**
 * Base interface for standard UI elements.
 * @deprecated Use {@link Xrm.Controls.UiStandardElement} instead.
 */
declare type Page$UiStandardElement = {

/**
 * Sets the visibility state.
 * @param visible true to show, false to hide.
 */
setVisible(visible: boolean): void
} & Controls$Page$UiStandardElement



/**
 * Interface for focusable UI elements.
 * @deprecated Use {@link Xrm.Controls.UiFocusable} instead.
 */
declare type Page$UiFocusable = {

/**
 * Sets focus on the element.
 */
setFocus(): void
} & Controls$Page$UiFocusable



/**
 * Interface for controls which methods provide immediate feedback or take actions as user types in a control.
 * Contains methods which can be used to perform data validations in a control even before the user commits (saves) the value in a form.
 * @deprecated Use {@link Xrm.Controls.UiKeyPressable} instead.
 */
declare type Page$UiKeyPressable = {

/**
 * Use this to add a function as an event handler for the keypress event so that the function is called when you type a character in the specific text or number field.
 * For a sample JavaScript code that uses the addOnKeyPress method to configure the auto-completion experience, see Sample: Auto-complete in CRM controls.
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param handler The function reference.
 */
addOnKeyPress(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to manually fire an event handler that you created for a specific text or number field to be executed on the keypress event.
 */
fireOnKeyPress(): void,

/**
 * Use this to remove an event handler for a text or number field that you added using addOnKeyPress.
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
Remarks:  If an anonymous function is set using addOnKeyPress, it can’t be removed using this method.
 * @param handler The function reference.
 */
removeOnKeyPress(handler: Events$Page$ContextSensitiveHandler): void
} & Controls$Page$UiKeyPressable



/**
 * Interface for Result value of AutoCompleteResultSet
 * @deprecated Use {@link Xrm.Controls.AutoCompleteResult} instead.
 */
declare type Page$AutoCompleteResult = {

/**
 * The Identifier
 */
id: string | number,

/**
 * Url of the icon to display
 */
icon?: string,

/**
 * Display value(s) for this auto-complete option
 */
fields: string[]
} & Controls$Page$AutoCompleteResult



/**
 * Interface for command of AutoCompleteResultSet.  This is displayed at the bottom of the auto complete view
 * @deprecated Use {@link Xrm.Controls.AutoCompleteCommand} instead.
 */
declare type Page$AutoCompleteCommand = {

/**
 * The Identifier
 */
id: string,

/**
 * Url of the icon to display
 */
icon?: string,

/**
 * Label to display at the bottom of the auto complete view
 */
label: string,

/**
 * Action to perform when user clicks on label
 */
action(): void
} & Controls$Page$AutoCompleteCommand



/**
 * Interface for showAutoComplete argument
 * @deprecated Use {@link Xrm.Controls.AutoCompleteResultSet} instead.
 */
declare type Page$AutoCompleteResultSet = {

/**
 * Results to show
 */
results: Page$AutoCompleteResult[],

/**
 * Command to show/execute at the bottom of the results displayed
 */
commands?: Page$AutoCompleteCommand
} & Controls$Page$AutoCompleteResultSet



/**
 * Interface for a Lookup value.
 * @deprecated Use {@link Xrm.LookupValue} instead.
 */
declare type Page$LookupValue = {

/**
 * The identifier.
 */
id: string,

/**
 * The name
 */
name?: string,

/**
 * Type of the entity.
 */
entityType: string
} & Xrm$Page$LookupValue



/**
 * Interface for an OptionSet value.
 * @deprecated Use {@link Xrm.OptionSetValue} instead.
 */
declare type Page$OptionSetValue = {

/**
 * The label text.
 */
text: string,

/**
 * The value, as a number
 */
value: number
} & Xrm$Page$OptionSetValue



/**
 * Interface for a privilege.
 * @deprecated Use {@link Xrm.Privilege} instead.
 */
declare type Page$Privilege = {

/**
 * True if the user can read.
 */
canRead: boolean,

/**
 * True if the user can update.
 */
canUpdate: boolean,

/**
 * True if the user can create.
 */
canCreate: boolean
} & Xrm$Page$Privilege



/**
 * Interface for an Entity attribute.
 * @deprecated Use {@link Xrm.Attributes.Attribute} instead.
 */
declare type Page$Attribute = {

/**
 * Adds a handler to be called when the attribute's value is changed.
 * @param handler The function reference.
 */
addOnChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Fire all "on change" event handlers.
 */
fireOnChange(): void,

/**
 * Gets attribute type.
 * @returns The attribute's type name.<BR><BR>
**Values returned are**:
* boolean
* datetime
* decimal
* double
* integer
* lookup
* memo
* money
* optionset
* string
 */
getAttributeType(): Page$AttributeType,

/**
 * Gets the attribute format.
 * @returns The format of the attribute.<BR><BR>
**Values returned are**:
* date           (datetime)
* datetime       (datetime)
* duration       (integer)
* email          (string)
* language       (optionset)
* none           (integer)
* phone          (string)
* text           (string)
* textarea       (string)
* tickersymbol   (string)
* timezone       (optionset)
* url            (string)
 * @see {@link getAttributeType}
 */
getFormat(): Page$AttributeFormat,

/**
 * Gets a boolean value indicating whether this Attribute has unsaved changes.
 * @returns true if there are unsaved changes, otherwise false.
 */
getIsDirty(): boolean,

/**
 * Gets the logical name of the attribute.
 * @returns The logical name.
 */
getName(): string,

/**
 * Gets a reference to the record context of this attribute.
 * @returns The parent record context.
 */
getParent(): Xrm$Entity,

/**
 * Gets the current level of requirement for the attribute.
 * @returns The required level, as either "none", "required", or "recommended"
 */
getRequiredLevel(): Page$RequirementLevel,

/**
 * Gets current submit mode for the attribute.
 * @returns The submit mode, as either "always", "never", or "dirty"
 * @remarks The default value is "dirty"
 */
getSubmitMode(): Page$SubmitMode,

/**
 * Gets the current user's privileges for the attribute.
 * @returns The user privileges.
 */
getUserPrivilege(): Page$Privilege,

/**
 * Removes the handler from the "on change" event.
 * @param handler The handler.
 */
removeOnChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Sets the required level.
 * @param requirementLevel The requirement level, as either "none", "required", or "recommended"
 * @see {@link XrmEnum.AttributeRequirementLevel}
 */
setRequiredLevel(requirementLevel: Page$RequirementLevel): void,

/**
 * Sets the submit mode.
 * @param submitMode The submit mode, as either "always", "never", or "dirty".
 * @default submitMode "dirty"
 * @see {@link XrmEnum.AttributeRequirementLevel}
 */
setSubmitMode(submitMode: Page$SubmitMode): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Controls$Control>,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): any,

/**
 * Sets the value.
 * @param value The value.
 */
setValue(value: any): void
} & Attributes$Page$Attribute



/**
 * Interface for a Number attribute.
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.NumberAttribute} instead.
 */
declare type Page$NumberAttribute = {

/**
 * Gets the attribute format.
 * @returns The format of the attribute.
Values returned are: duration, none
 */
getFormat(): Page$IntegerAttributeFormat,

/**
 * Gets the maximum value allowed.
 * @returns The maximum value allowed.
 */
getMax(): number,

/**
 * Gets the minimum value allowed.
 * @returns The minimum value allowed.
 */
getMin(): number,

/**
 * Gets the attribute's configured precision.
 * @returns The total number of allowed decimal places.
 */
getPrecision(): number,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): number,

/**
 * Sets the value.
 * @param value The value.
 * @remarks Attributes on Quick Create Forms will not save values set with this method.
 */
setValue(value: number): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Controls$NumberControl>
} & Attributes$Page$NumberAttribute



/**
 * Interface for a String attribute.
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.StringAttribute} instead.
 */
declare type Page$StringAttribute = {

/**
 * Gets the attribute format.
 * @returns The format of the attribute.
Values returned are: email, phone, text, textarea, tickersymbol, url
 */
getFormat(): Page$StringAttributeFormat,

/**
 * Gets maximum length allowed.
 * @returns The maximum length allowed.
 * @remarks The email form's "Description" attribute does not have the this method.
 */
getMaxLength(): number,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): string,

/**
 * Sets the value.
 * @param value The value.
 * @remarks A String field with the {@link Attribute.getFormat|email} format enforces email
address formatting. Attributes on Quick Create Forms will not save values set
with this method.
 */
setValue(value: string): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Controls$StringControl>
} & Attributes$Page$StringAttribute



/**
 * Common interface for enumeration attributes (OptionSet and Boolean).
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.EnumAttribute} instead.
 */
declare type Page$EnumAttribute = {

/**
 * Gets the initial value of the attribute.
 * @returns The initial value.
 * @remarks Valid for OptionSet and boolean attribute types
 */
getInitialValue(): number | boolean
} & Attributes$Page$EnumAttribute



/**
 * Interface for a Boolean attribute.
 * @see {@link EnumAttribute}
 * @deprecated Use {@link Xrm.Attributes.BooleanAttribute} instead.
 */
declare type Page$BooleanAttribute = {

/**
 * Gets the initial value of the attribute.
 * @returns The initial value.
 * @remarks Valid for OptionSet and boolean attribute types
 */
getInitialValue(): boolean,

/**
 * Gets the value.
 * @returns true if it succeeds, false if it fails.
 */
getValue(): boolean,

/**
 * Sets the value.
 * @param value The value.
 * @remarks Attributes on Quick Create Forms will not save values set with this method.
 */
setValue(value: boolean): void
} & Attributes$Page$BooleanAttribute



/**
 * Interface for a Date attribute.
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.DateAttribute} instead.
 */
declare type Page$DateAttribute = {

/**
 * Gets the attribute format.
 * @returns The format of the attribute.
Values returned are: date, datetime
 */
getFormat(): Page$DateAttributeFormat,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): Date,

/**
 * Sets the value.
 * @param value The value.
 * @remarks Attributes on Quick Create Forms will not save values set with this method.
 */
setValue(value: Date): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Controls$DateControl>
} & Attributes$Page$DateAttribute



/**
 * Interface an OptionSet attribute.
 * @see {@link EnumAttribute}
 * @deprecated Use {@link Xrm.Attributes.OptionSetAttribute} instead.
 */
declare type Page$OptionSetAttribute = {

/**
 * Gets the attribute format.
 * @returns The format of the attribute.
Values returned are: language, timezone
 */
getFormat(): Page$OptionSetAttributeFormat,

/**
 * Gets the initial value of the attribute.
 * @returns The initial value.
 * @remarks Valid for OptionSet and boolean attribute types
 */
getInitialValue(): number,

/**
 * Gets the option matching a value.
 * @param value The enumeration value of the option desired.
 * @returns The option.
 */
getOption(value: number): Page$OptionSetValue,

/**
 * Gets the option matching a label.
 * @param label The label of the option desired.
 * @returns The option.
 */
getOption(label: string): Page$OptionSetValue,

/**
 * Gets all of the options.
 * @returns An array of options.
 */
getOptions(): Page$OptionSetValue[],

/**
 * Gets selected option.
 * @returns The selected option.
 */
getSelectedOption(): Page$OptionSetValue,

/**
 * Gets the label of the currently selected option.
 * @returns The current value's label.
 */
getText(): string,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): number,

/**
 * Sets the value.
 * @param value The value.
 * @remarks The getOptions() method returns option values as strings. You must use parseInt
to convert them to numbers before you can use those values to set the value of an
OptionSet attribute. Attributes on Quick Create Forms will not save values set
with this method.
 */
setValue(value: number): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Controls$OptionSetControl>
} & Attributes$Page$OptionSetAttribute



/**
 * Interface a Lookup attribute.
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.LookupAttribute} instead.
 */
declare type Page$LookupAttribute = {

/**
 * Gets a boolean value indicating whether the Lookup is a multi-value PartyList.
 * @returns true the attribute is a PartyList, otherwise false.
 */
getIsPartyList(): boolean,

/**
 * Gets the value.
 * @returns An array of LookupValue.
 */
getValue(): Page$LookupValue[],

/**
 * Sets the value.
 * @param value The value.
 * @remarks Attributes on Quick Create Forms will not save values set with this method.
 */
setValue(value: Page$LookupValue[]): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Controls$LookupControl>
} & Attributes$Page$LookupAttribute



/**
 * Interface for the form's record context, Xrm.Page.data.entity
 * @deprecated Use {@link Xrm.Entity} instead.
 */
declare type Page$Entity = {

/**
 * Adds a handler to be called when the record is saved.
 * @param handler The handler.
 */
addOnSave(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Gets an serialized-XML string representing data that will be passed to the server upon saving the record.
 * @returns The XML in string format.
 * @remarks This function does not work with Microsoft Dynamics CRM for tablets.
 * @example "<account><name>Contoso</name><accountnumber>55555</accountnumber><telephone2>425
555-1234</telephone2></account>".
 */
getDataXml(): string,

/**
 * Gets entity's logical name.
 * @returns The logical name.
 */
getEntityName(): string,

/**
 * Gets a lookup value that references the record.
 * @returns A lookup value that references the record.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference External Link: getEntityReference API Documentation}
 */
getEntityReference(): Page$LookupValue,

/**
 * Gets the record's unique identifier.
 * @returns The identifier, in Guid format.
 * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
 */
getId(): string,

/**
 * Gets a boolean value indicating whether the record has unsaved changes.
 * @returns true if there are unsaved changes, otherwise false.
 */
getIsDirty(): boolean,

/**
 * Gets the record's primary attribute value.
 * @returns The primary attribute value.
 * @remarks The value for this attribute is used when links to the record are displayed.
 */
getPrimaryAttributeValue(): string,

/**
 * Gets a boolean value indicating whether all of the entity data is valid.
 * @returns true if all of the entity data is valid; false otherwise.
 */
isValid(): boolean,

/**
 * Removes the handler from the "on save" event.
 * @param handler The handler.
 */
removeOnSave(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Saves the record.
 * @remarks When using quick create forms in the web application the saveandnew option is not
applied. It will always work as if saveandclose were used. Quick create forms in
Microsoft Dynamics CRM for tablets will apply the saveandnew behavior.
 */
save(): void,

/**
 * Saves the record with the given save mode.
 * @param saveMode (Optional) the save mode to save, as either "saveandclose" or "saveandnew".  If no parameter is included in the method, the record will simply be saved.
 */
save(saveMode?: Xrm$EntitySaveMode): void,

/**
 * The collection of attributes for the record.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes External Link: Attributes (Client API reference)}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
attributes: Collection$Collection$ItemCollection<Attributes$Page$Attribute>
} & Xrm$Page$Entity



/**
 * Interface for save event arguments.
 */
declare interface Page$SaveEventArguments {

/**
 * @summary Gets save mode, as an integer.
 * @returns The save mode.
 * @description Gets save mode, as an integer.<BR>
**Values returned are**:
* 1      Save
* 2      Save and Close
* 59     Save and New
* 70     AutoSave (Where enabled; can be used with an OnSave handler to conditionally disable auto-saving)
* 58     Save as Completed (Activities)
* 5      Deactivate
* 6      Reactivate
* 47     Assign (All user- or team-owned entities)
* 7      Send (Email)
* 16     Qualify (Lead)
* 15     Disqualify (Lead)
 */
getSaveMode(): XrmEnum$Page$SaveMode,

/**
 * Returns a boolean value to indicate if the record's save has been prevented.
 * @returns true if saving is prevented, otherwise false.
 */
isDefaultPrevented(): boolean,

/**
 * Prevents the save operation from being submitted to the server.
 * All remaining "on save" handlers will continue execution.
 */
preventDefault(): void
} 


/**
 * Interface for process stage change event arguments.
 */
declare interface Page$StageChangeEventArguments {

/**
 * Gets the direction of the stage change.
 * @returns The direction: "next" or "previous"
 */
getDirection(): ProcessFlow$Page$StageChangeDirection,

/**
 * Gets the destination stage object
 * @returns The stage object. For switching between entities, returns the previous stage object
 */
getStage(): ProcessFlow$Page$Stage
} 


/**
 * Interface for process stage selected event arguments.
 */
declare interface Page$StageSelectedEventArguments {

/**
 * Gets the selected stage object
 * @returns The stage object
 */
getStage(): ProcessFlow$Page$Stage
} 


/**
 * Interface for Xrm.Page.ui controls.
 * @see {@link UiElement}
 * @deprecated Use {@link Xrm.Controls.Control} instead.
 */
declare type Page$Control = {

/**
 * Gets the controls type.
 * @returns The control type.<BR><BR>
**Values returned are**:
* standard
* iframe
* lookup
* optionset
* subgrid
* webresource
* notes
* timercontrol
* kbsearch (CRM Online Only, use parature.d.ts)
* quickform (see ui.QuickForm)
* customcontrol: <namespace>.<name> (A custom control for mobile phone and tablet clients).
* customsubgrid: <namespace>.<name> (A custom dataset control for mobile phone and tablet clients).
 */
getControlType(): Page$ControlType | string,

/**
 * Gets the name of the control on the form.
 * @returns The name of the control.
 * @remarks The name assigned to a control is not determined until the form loads. Changes to
the form may change the name assigned to a given control.
When you use the control getName method the name of the first control will be the
same as the name of the attribute. The second instance of a control for that
attribute will be "<attributeName>1". The pattern <attributeName>+N
will continue for each additional control added to the form for a specific
attribute. When a form displays a business process flow control in the header,
additional controls will be added for each attribute that is displayed in the
business process flow. These controls have a unique name like the following:
header_process_<attribute name>.
 */
getName(): string,

/**
 * Gets a reference to the Section parent of the control.
 * @returns The parent Section.
 */
getParent(): Controls$Section
} & Controls$Page$Control



/**
 * Interface for a standard control.
 * @see {@link Control}
 * @deprecated Use {@link Xrm.Controls.StandardControl} instead.
 */
declare type Page$StandardControl = {

/**
 * Clears the notification identified by uniqueId.
 * @param uniqueId (Optional) Unique identifier.
 * @returns true if it succeeds, false if it fails.
 * @remarks If the uniqueId parameter is not used, the current notification shown will be removed.
 */
clearNotification(uniqueId?: string): boolean,

/**
 * Gets a boolean value, indicating whether the control is disabled.
 * @returns true if it is disabled, otherwise false.
 */
getDisabled(): boolean,

/**
 * Sets the state of the control to either enabled, or disabled.
 * @param disabled true to disable, false to enable.
 */
setDisabled(disabled: boolean): void,

/**
 * Sets a control-local notification message.
 * @param message The message.
 * @param uniqueId Unique identifier.
 * @returns true if it succeeds, false if it fails.
 * @remarks When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon
appears next to the control. Tapping on the icon will display the message.
 */
setNotification(message: string, uniqueId: string): boolean,

/**
 * Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification.
 */
addNotification(notification: Page$AddControlNotificationOptions): void,

/**
 * Gets the control's bound attribute.
 * @template An Attribute type.
 * @returns The attribute.
 */
getAttribute<T: Attributes$Page$Attribute>(): T,

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Page$Attribute
} & Controls$Page$StandardControl



/**
 * Interface for Auto Lookup Control.
 * This is not an Entity Lookup, but a control that supports AutoComplete / KeyPress Events (Text or Number)
 * @remarks This interface is not supported for CRM mobile clients (phones or tablets) and the interactive service hub.  It is only available for Updated entities.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.AutoLookupControl} instead.
 */
declare type Page$AutoLookupControl = {

/**
 * Gets the latest value in a control as the user types characters in a specific text or number field.
 * This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control.
 * The getValue method is different from the attribute getValue method because the control method retrieves the value from the control
 * as the user is typing in the control as opposed to the attribute getValue method that retrieves the value after the user commits (saves) the field.
 */
getValue(): string,

/**
 * Hides the auto-completion drop-down list configured for a specific text field
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
hideAutoComplete(): void,

/**
 * Shows upt to 10 matching strings in a drop-down list as users press keys to type charactrer in a specific text field.
 * On selecting an item in the drop-down list, the value in the text field changes to the selected item, the drop-down list disappears, and the OnChange event for the text field is invoked
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param resultSet The results to show
 */
showAutoComplete(resultSet: Page$AutoCompleteResultSet): void
} & Controls$Page$AutoLookupControl



/**
 * Interface for a String control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.StringControl} instead.
 */
declare type Page$StringControl = {

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Page$StringAttribute
} & Controls$Page$StringControl



/**
 * Interface for a Number control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.NumberControl} instead.
 */
declare type Page$NumberControl = {

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Page$NumberAttribute
} & Page$AutoLookupControl



/**
 * Interface for a Date control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.DateControl} instead.
 */
declare type Page$DateControl = {

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Page$DateAttribute,

/**
 * Gets the status of the time-of-day component of the Date control.
 * @returns true if the time is shown, otherwise false.
 */
getShowTime(): boolean,

/**
 * Sets the visibility of the time component of the Date control.
 * @param showTimeValue true to show, false to hide the time value.
 */
setShowTime(showTimeValue: boolean): void
} & Page$StandardControl



/**
 * Interface for a Lookup control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.LookupControl} instead.
 */
declare type Page$LookupControl = {

/**
 * Adds a handler to the "pre search" event of the Lookup control.
 * @param handler The handler.
 */
addPreSearch(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Adds an additional custom filter to the lookup, with the "AND" filter operator.
 * Can only be used within a "pre search" event handler
 * @see {@link addPreSearch}
 * @param filter Specifies the filter, as a serialized FetchXML "filter" node.
 * @param entityLogicalName (Optional) The logical name of the entity.
 * @remarks If entityLogicalName is not specified, the filter will be applied to all entities
valid for the Lookup control.
 * @example Example filter: <filter type="and">
             <condition attribute="address1_city" operator="eq" value="Redmond" />
             </filter>
 */
addCustomFilter(filter: string, entityLogicalName?: string): void,

/**
 * Adds a custom view for the Lookup dialog.
 * @param viewId Unique identifier for the view, in Guid format.
 * @param entityName Name of the entity.
 * @param viewDisplayName Name of the view to display.
 * @param fetchXml The FetchXML query for the view's contents, serialized as a string.
 * @param layoutXml The Layout XML, serialized as a string.
 * @param isDefault true, to treat this view as default.
 * @remarks Cannot be used on "Owner" Lookup controls.
The viewId is never saved to CRM, but must be unique across available views.  Generating
a new value can be accomplished with a {@link http://www.guidgen.com/ Guid generator(external link)}.
 * @example Example viewId value: "{00000000-0000-0000-0000-000000000001}"
 * @see {@link http://msdn.microsoft.com/en-us/library/gg334522.aspx External Link: Layout XML Reference}
 */
addCustomView(
viewId: string,
entityName: string,
viewDisplayName: string,
fetchXml: string,
layoutXml: string,
isDefault: boolean): void,

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Page$LookupAttribute,

/**
 * Gets the unique identifier of the default view.
 * @returns The default view, in Guid format.
 * @example Example return: "{00000000-0000-0000-0000-000000000000}"
 */
getDefaultView(): string,

/**
 * Removes the handler from the "pre search" event of the Lookup control.
 * @param handler The handler.
 */
removePreSearch(handler: () => void): void,

/**
 * Sets the Lookup's default view.
 * @param viewGuid Unique identifier for the view.
 * @example Example viewGuid value: "{00000000-0000-0000-0000-000000000000}"
 */
setDefaultView(viewGuid: string): void,

/**
 * Gets the types of entities allowed in the lookup control.
 */
getEntityTypes(): string[],

/**
 * Sets the types of entities allowed in the lookup control.
 */
setEntityTypes(entityLogicalNames: string[]): void
} & Controls$Page$LookupControl



/**
 * Interface for an OptionSet control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.OptionSetControl} instead.
 */
declare type Page$OptionSetControl = {

/**
 * Adds an option.
 * @param option The option.
 * @param index (Optional) zero-based index of the option.
 * @remarks This method does not check that the values within the options you add are valid.
If index is not provided, the new option will be added to the end of the list.
 */
addOption(option: Page$OptionSetValue, index?: number): void,

/**
 * Clears all options.
 */
clearOptions(): void,

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Page$OptionSetAttribute,

/**
 * Removes the option matching the value.
 * @param value The value.
 */
removeOption(value: number): void
} & Controls$Page$OptionSetControl



/**
 * Interface for a CRM grid control.
 * @see {@link Control}
 * @deprecated Use {@link Xrm.Controls.GridControl} instead.
 */
declare type Page$GridControl = {

/**
 * Use this method to add event handlers to the GridControl's OnLoad event.
 * @param handler The event handler.
 */
addOnLoad(handler: () => void): void,

/**
 * This method returns context information about the GridControl.
 * @returns The context type.
 */
getContextType(): XrmEnum$XrmEnum$GridControlContext,

/**
 * Use this method to get the logical name of the entity data displayed in the grid.
 * @returns The entity name.
 */
getEntityName(): string,

/**
 * Use this method to get access to the Grid available in the GridControl.
 * @returns The grid.
 */
getGrid(): Controls$Grid,

/**
 * Use this method to get access to the ViewSelector available for the GridControl when it is configured to display views.
 * @returns The view selector.
 */
getViewSelector(): Controls$ViewSelector,

/**
 * Refreshes the sub grid.
 * @remarks Not available during the "on load" event of the form.
 */
refresh(): void,

/**
 * Use this method to remove event handlers from the GridControl's OnLoad event.
 * @param handler The handler.
 */
removeOnLoad(handler: () => void): void
} & Controls$Page$GridControl



/**
 * Interface for a framed control, which is either a Web Resource or an Iframe.
 * @see {@link Control}
 * @remarks An Iframe control provides additional methods, so use {@link IframeControl} where
appropriate.  Silverlight controls should use {@link SilverlightControl}.
 * @deprecated Use {@link Xrm.Controls.FramedControl} instead.
 */
declare type Page$FramedControl = {

/**
 * Gets the DOM element containing the control.
 * @returns The container object.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getObject(): HTMLIFrameElement,

/**
 * Gets the URL value of the control.
 * @returns The source URL.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getSrc(): string,

/**
 * Sets the URL value of the control.
 * @param src The source URL.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
setSrc(src: string): void
} & Controls$Page$FramedControl



/**
 * Interface for an Iframe control.
 * @see {@link FramedControl}
 * @deprecated Use {@link Xrm.Controls.IframeControl} instead.
 */
declare type Page$IframeControl = {

/**
 * Gets initial URL defined for the Iframe.
 * @returns The initial URL.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getInitialUrl(): string
} & Controls$Page$IframeControl



/**
 * Interface for a Silverlight control.
 * @see {@link Control}
 * @deprecated Use {@link Xrm.Controls.SilverlightControl} instead.
 */
declare type Page$SilverlightControl = {

/**
 * Gets the query string value passed to Silverlight.
 * @returns The data.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getData(): string,

/**
 * Sets the query string value passed to Silverlight.
 * @param data The data.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
setData(data: string): void,

/**
 * Gets the DOM element containing the control.
 * @returns The container object.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getObject(): HTMLObjectElement
} & Controls$Page$SilverlightControl



/**
 * Interface for a Timeline control.
 * @see {@link Control}
 * @deprecated Use {@link Xrm.Controls.TimelineWall} instead.
 */
declare type Page$TimelineWall = {

/**
 * Refreshes the data displayed in a timelinewall and timer control.
 */
refresh(): void
} & Controls$Page$TimelineWall



/**
 * Interface for a form tab.
 * @see {@link UiElement}
 * @see {@link UiFocusable}
 * @deprecated Use {@link Xrm.Controls.Tab} instead.
 */
declare type Page$Tab = {

/**
 * Gets display state of the tab.
 * @returns The display state, as either "expanded" or "collapsed"
 */
getDisplayState(): Xrm$DisplayState,

/**
 * Gets the name of the tab.
 * @returns The name.
 */
getName(): string,

/**
 * Gets a reference to the {@link FormContext.ui formContext.ui} parent of the tab.
 * @returns The parent.
 */
getParent(): Xrm$Ui,

/**
 * Sets display state of the tab.
 * @param displayState Display state of the tab, as either "expanded" or "collapsed"
 */
setDisplayState(displayState: Xrm$DisplayState): void,

/**
 * A reference to the collection of form sections within this tab.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
sections: Collection$Collection$ItemCollection<Controls$Section>
} & Controls$Page$Tab



/**
 * Interface for a form section.
 * @see {@link UiElement}
 * @deprecated Use {@link Xrm.Controls.Section} instead.
 */
declare type Page$Section = {

/**
 * Gets the name of the section.
 * @returns The name.
 */
getName(): string,

/**
 * Gets a reference to the parent {@link Tab}.
 * @returns The parent.
 */
getParent(): Page$Tab,

/**
 * A reference to the collection of controls within this tab.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Page$Control>
} & Controls$Page$Section



/**
 * Interface for the Xrm.Page.data.process API.
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessManager} instead.
 */
declare type data$ProcessManager = {

/**
 * Returns a Process object representing the active process.
 * @returns current active process.
 */
getActiveProcess(): Page$Process,

/**
 * Set a Process as the active process.
 * @param processId The Id of the process to make the active process.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveProcess(
processId: string,
callbackFunction?: ProcessFlow$ProcessCallbackDelegate): void,

/**
 * Returns all process instances for the entity record that the calling user has access to.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
getProcessInstances(callbackFunction?: ProcessFlow$GetProcessInstancesDelegate): void,

/**
 * Sets a process instance as the active instance
 * @param processInstanceId The Id of the process instance to make the active instance.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveProcessInstance(
processInstanceId: string,
callbackFunction?: ProcessFlow$SetProcessInstanceDelegate): void,

/**
 * Returns a Stage object representing the active stage.
 * @returns current active stage.
 */
getActiveStage(): Page$Stage,

/**
 * Set a stage as the active stage.
 * @param stageId the Id of the stage to make the active stage.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveStage(stageId: string, callbackFunction?: ProcessFlow$ProcessCallbackDelegate): void,

/**
 * Use this method to get a collection of stages currently in the active path with methods to interact with the
 * stages displayed in the business process flow control. The active path represents stages currently rendered in
 * the process control based on the branching rules and current data in the record.
 * @returns A collection of all completed stages, the currently active stage, and the predicted set of future stages
based on satisfied conditions in the branching rule. This may be a subset of the stages returned with
formContext.data.process.getActiveProcess because it will only include those stages which represent a valid
transition from the current stage based on branching that has occurred in the process.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getActivePath(): Collection$Collection$ItemCollection<Page$Stage>,

/**
 * Use this method to asynchronously retrieve the enabled business process flows that the user can switch to for an
 * entity.
 * @param callbackFunction The callback function must accept a parameter that contains an object with
dictionary properties where the name of the property is the Id of the
business process flow and the value of the property is the name of the
business process flow.
The enabled processes are filtered according to the user’s privileges. The
list of enabled processes is the same ones a user can see in the UI if they
want to change the process manually.
 */
getEnabledProcesses(
callbackFunction: (enabledProcesses: ProcessFlow$ProcessDictionary) => void): void,

/**
 * Use this method to get the currently selected stage.
 * @returns The currently selected stage.
 */
getSelectedStage(): Page$Stage,

/**
 * Use this to add a function as an event handler for the OnStageChange event so that it will be called when the
 * business process flow stage changes.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnStageChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to add a function as an event handler for the OnProcessStatusChange event so that it will be called when the
 * business process flow status changes.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnProcessStatusChange(handler: Events$Page$ProcessStatusChangeHandler): void,

/**
 * Use this to add a function as an event handler for the OnStageSelected event so that it will be called
 * when a business process flow stage is selected.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnStageSelected(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to remove a function as an event handler for the OnProcessStatusChange event.
 * @param handler If an anonymous function is set using the addOnProcessStatusChange method it
cannot be removed using this method.
 */
removeOnProcessStatusChange(handler: Events$Page$ProcessStatusChangeHandler): void,

/**
 * Use this to remove a function as an event handler for the OnStageChange event.
 * @param handler If an anonymous function is set using the addOnStageChange method it
cannot be removed using this method.
 */
removeOnStageChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to remove a function as an event handler for the OnStageChange event.
 * @param handler If an anonymous function is set using the addOnStageChange method it
cannot be removed using this method.
 */
removeOnStageSelected(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Progresses to the next stage.
 * @param callbackFunction (Optional) A function to call when the operation is complete.
 */
moveNext(callbackFunction?: ProcessFlow$ProcessCallbackDelegate): void,

/**
 * Moves to the previous stage.
 * @param callbackFunction (Optional) A function to call when the operation is complete.
 */
movePrevious(callbackFunction?: ProcessFlow$ProcessCallbackDelegate): void,

/**
 * Use this method to get the unique identifier of the process instance
 * @returns The unique identifier of the process instance
 */
getInstanceId(): string,

/**
 * Use this method to get the name of the process instance
 * @returns The name of the process instance
 */
getInstanceName(): string,

/**
 * Use this method to get the current status of the process instance
 * @returns The current status of the process
 */
getStatus(): Page$ProcessStatus,

/**
 * Use this method to set the current status of the process instance
 * @param status The new status for the process
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setStatus(
status: Page$ProcessStatus,
callbackFunction?: ProcessFlow$ProcessSetStatusDelegate): void
} & ProcessFlow$data$ProcessManager



/**
 * Called when method to get active processes is complete
 * @param status The result of the get active processes operation.
 * @remarks *Returns object with the following key-value pairs**:
* CreatedOn
* ProcessDefinitionID
* ProcessDefinitionName
* ProcessInstanceID
* ProcessInstanceName
* StatusCodeName
 * @deprecated Use {@link Xrm.ProcessFlow.GetProcessInstancesDelegate} instead.
 */
declare type data$GetProcessInstancesDelegate = ProcessFlow$data$GetProcessInstancesDelegate;


/**
 * Called when method to set active process is complete
 * @param status The result of the set active process operation.
 * @remarks *Values returned are**:
* success        (The operation succeeded.)
* invalid        (The processInstanceId isn’t valid or the process isn’t enabled.)
 * @deprecated Use {@link Xrm.ProcessFlow.SetProcessInstanceDelegate} instead.
 */
declare type data$SetProcessInstanceDelegate = ProcessFlow$data$SetProcessInstanceDelegate;


/**
 * Called when process change methods have completed.
 * @param status The result of the process change operation.
 * @remarks *Values returned are**:
* success        (The operation succeeded.)
* crossEntity    (The previous stage is for a different entity.)
* beginning      (The active stage is the first stage of the active path.)
* invalid        (The operation failed because the selected stage isn’t the same as the active stage.)
* unreachable    (The stage exists on a different path.)
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessCallbackDelegate} instead.
 */
declare type data$ProcessCallbackDelegate = ProcessFlow$data$ProcessCallbackDelegate;


/**
 * Called when process set status method has completed.
 * @param status The new status of the process instance
 * @remarks *Values returned are**:
* active
* aborted
* finished
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessSetStatusDelegate} instead.
 */
declare type data$ProcessSetStatusDelegate = ProcessFlow$data$ProcessSetStatusDelegate;


/**
 * Represents a key-value pair, where the key is the Process Flow's ID, and the value is the name thereof.
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessDictionary} instead.
 */
declare type data$ProcessDictionary = {
[index: string]: string
} & ProcessFlow$data$ProcessDictionary



/**
 * Form Notification Levels for {@link Ui.setFormNotification formContext.ui.setFormNotification()}.
 * @see {@link XrmEnum.FormNotificationLevel}
 */
declare type ui$FormNotificationLevel = "ERROR" | "INFO" | "WARNING";


/**
 * Display States for setDisplayState() on {@link Controls.ProcessControl.setDisplayState Processes} and {@link Controls.Tab.setDisplayState Tabs}.
 * @see {@link XrmEnum.DisplayState}
 */
declare type ui$DisplayState = "collapsed" | "expanded";


/**
 * Interface for the Xrm.Page.data.process API.
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessManager} instead.
 */
declare type ui$ProcessManager = {

/**
 * Returns a Process object representing the active process.
 * @returns current active process.
 */
getActiveProcess(): Page$Process,

/**
 * Set a Process as the active process.
 * @param processId The Id of the process to make the active process.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveProcess(processId: string, callbackFunction?: data$ProcessCallbackDelegate): void,

/**
 * Returns all process instances for the entity record that the calling user has access to.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
getProcessInstances(callbackFunction?: data$GetProcessInstancesDelegate): void,

/**
 * Sets a process instance as the active instance
 * @param processInstanceId The Id of the process instance to make the active instance.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveProcessInstance(
processInstanceId: string,
callbackFunction?: data$SetProcessInstanceDelegate): void,

/**
 * Returns a Stage object representing the active stage.
 * @returns current active stage.
 */
getActiveStage(): Page$Stage,

/**
 * Set a stage as the active stage.
 * @param stageId the Id of the stage to make the active stage.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveStage(stageId: string, callbackFunction?: data$ProcessCallbackDelegate): void,

/**
 * Use this method to get a collection of stages currently in the active path with methods to interact with the
 * stages displayed in the business process flow control. The active path represents stages currently rendered in
 * the process control based on the branching rules and current data in the record.
 * @returns A collection of all completed stages, the currently active stage, and the predicted set of future stages
based on satisfied conditions in the branching rule. This may be a subset of the stages returned with
formContext.data.process.getActiveProcess because it will only include those stages which represent a valid
transition from the current stage based on branching that has occurred in the process.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getActivePath(): Collection$Collection$ItemCollection<Page$Stage>,

/**
 * Use this method to asynchronously retrieve the enabled business process flows that the user can switch to for an
 * entity.
 * @param callbackFunction The callback function must accept a parameter that contains an object with
dictionary properties where the name of the property is the Id of the
business process flow and the value of the property is the name of the
business process flow.
The enabled processes are filtered according to the user’s privileges. The
list of enabled processes is the same ones a user can see in the UI if they
want to change the process manually.
 */
getEnabledProcesses(callbackFunction: (enabledProcesses: data$ProcessDictionary) => void): void,

/**
 * Use this method to get the currently selected stage.
 * @returns The currently selected stage.
 */
getSelectedStage(): Page$Stage,

/**
 * Use this to add a function as an event handler for the OnStageChange event so that it will be called when the
 * business process flow stage changes.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnStageChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to add a function as an event handler for the OnProcessStatusChange event so that it will be called when the
 * business process flow status changes.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnProcessStatusChange(handler: Events$Page$ProcessStatusChangeHandler): void,

/**
 * Use this to add a function as an event handler for the OnStageSelected event so that it will be called
 * when a business process flow stage is selected.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnStageSelected(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to remove a function as an event handler for the OnProcessStatusChange event.
 * @param handler If an anonymous function is set using the addOnProcessStatusChange method it
cannot be removed using this method.
 */
removeOnProcessStatusChange(handler: Events$Page$ProcessStatusChangeHandler): void,

/**
 * Use this to remove a function as an event handler for the OnStageChange event.
 * @param handler If an anonymous function is set using the addOnStageChange method it
cannot be removed using this method.
 */
removeOnStageChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to remove a function as an event handler for the OnStageChange event.
 * @param handler If an anonymous function is set using the addOnStageChange method it
cannot be removed using this method.
 */
removeOnStageSelected(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Progresses to the next stage.
 * @param callbackFunction (Optional) A function to call when the operation is complete.
 */
moveNext(callbackFunction?: data$ProcessCallbackDelegate): void,

/**
 * Moves to the previous stage.
 * @param callbackFunction (Optional) A function to call when the operation is complete.
 */
movePrevious(callbackFunction?: data$ProcessCallbackDelegate): void,

/**
 * Use this method to get the unique identifier of the process instance
 * @returns The unique identifier of the process instance
 */
getInstanceId(): string,

/**
 * Use this method to get the name of the process instance
 * @returns The name of the process instance
 */
getInstanceName(): string,

/**
 * Use this method to get the current status of the process instance
 * @returns The current status of the process
 */
getStatus(): Page$ProcessStatus,

/**
 * Use this method to set the current status of the process instance
 * @param status The new status for the process
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setStatus(
status: Page$ProcessStatus,
callbackFunction?: data$ProcessSetStatusDelegate): void
} & ProcessFlow$ui$ProcessManager



/**
 * Interface for a grid.  Use Grid methods to access information about data in the grid. Grid is returned by the
 * GridControl.getGrid method.
 * @deprecated Use {@link Xrm.Controls.Grid} instead.
 */
declare type ui$Grid = {

/**
 * Returns a collection of every GridRow in the Grid.
 * @returns The rows.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getRows(): Collection$Collection$ItemCollection<ui$Grid.Grid$GridRow>,

/**
 * Returns a collection of every selected GridRow in the Grid.
 * @returns The selected rows.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getSelectedRows(): Collection$Collection$ItemCollection<ui$Grid.Grid$GridRow>,

/**
 * Returns the total number of records in the Grid.
 * @returns The total record count.
 */
getTotalRecordCount(): number
} & Controls$ui$Grid



/**
 * Interface for a grid row.  Use the GridRow.getData method to access the GridRowData. A collection of GridRow is
 * returned by Grid.getRows and Grid.getSelectedRows methods.
 * In V9 - this is essentailly a form context.
 * @deprecated Use {@link Xrm.Controls.Grid.GridRow} instead.
 */
declare type ui$GridRow = {

/**
 * Provides methods to work with the row data.
 */
data: Xrm$Data,

/**
 * Returns the GridRowData for the GridRow.
 * @deprecated Deprecated in V9 - use data field instead
 * @returns The data.
 */
getData(): Grid$GridRowData
} & undefined.ui$GridRow



/**
 * Interface for grid row data.  Use the GridRowData.getEntity method to access the GridEntity. GridRowData is
 * returned by the GridRow.getData method.
 * @deprecated Use {@link Xrm.Controls.Grid.GridRowData} instead.
 */
declare type ui$GridRowData = {

/**
 * Returns the GridEntity for the GridRowData.
 * @returns The entity.
 * @deprecated Use GridRow.data.entity instead of using GridRow.getData().getEntity().
 */
getEntity(): Grid$GridEntity
} & undefined.ui$GridRowData



/**
 * Interface for a grid entity.  Use the GridEntity methods to access data about the specific records in the rows.
 * GridEntity is returned by the GridRowData.getEntity method.
 * @deprecated Use {@link Xrm.Controls.Grid.GridRowData} instead.v
 */
declare type ui$GridEntity = {

/**
 * Returns the logical name for the record in the row.
 * @returns The entity name.
 * @deprecated Use GridRow.data.entity.getEntityName() instead.
 */
getEntityName(): string,

/**
 * Returns a LookupValue that references this record.
 * @returns The entity reference.
 * @deprecated Use GridRow.data.entity.getEntityReference() instead.
 */
getEntityReference(): Page$LookupValue,

/**
 * Returns the id for the record in the row.
 * @returns The identifier of the GridEntity, in GUID format.
 * @example Example return: "{00000000-0000-0000-0000-000000000000}"
 * @deprecated Use GridRow.data.entity.getId() instead.
 */
getId(): string,

/**
 * Returns the primary attribute value for the record in the row.  (Commonly the name.)
 * @returns The primary attribute value.
 * @deprecated Use GridRow.data.entity.getPrimaryAttributeValue() instead.
 */
getPrimaryAttributeValue(): string
} & undefined.ui$GridEntity



/**
 * Interface for the view selector.  Use the ViewSelector methods to get or set information about the view selector
 * of the grid control.
 * @deprecated Use {@link Xrm.Controls.ViewSelector} instead.
 */
declare type ui$ViewSelector = {

/**
 * Use this method to get a reference to the current view.
 * @returns The current view.
 */
getCurrentView(): Controls$ViewSelectorItem,

/**
 * Use this method to determine whether the view selector is visible.
 * @returns true if visible, false if not.
 */
isVisible(): boolean,

/**
 * Use this method to set the current view.
 * @param viewSelectorItem The view selector item.
 */
setCurrentView(viewSelectorItem: Controls$ViewSelectorItem): void
} & Controls$ui$ViewSelector



/**
 * Interface for a view selector item. This object contains data that identifies a view. Use this as a parameter to
 * the ViewSelector.setCurrentView method.
 * @deprecated Use {@link Xrm.Controls.ViewSelectorItem} instead.
 */
declare type ui$ViewSelectorItem = {

/**
 * Returns a LookupValue that references this view.
 * @returns The entity reference.
 */
getEntityReference(): Page$LookupValue
} & Controls$ui$ViewSelectorItem



/**
 * Interface for a quick view control instance on a form.
 * @see {@link https://msdn.microsoft.com/en-us/library/mt736908.aspx External Link: Xrm.Page.ui quickForms (client-side reference)}
 * @deprecated Use {@link Xrm.Controls.ViewSelectorItem} instead.
 */
declare type ui$QuickForm = {} & Controls$Controls$QuickFormControl



/**
 * Interface for a Lookup value.
 * @deprecated Use {@link Xrm.LookupValue} instead.
 */
declare type Xrm$LookupValue = {

/**
 * The identifier.
 */
id: string,

/**
 * The name
 */
name?: string,

/**
 * Type of the entity.
 */
entityType: string
} & Xrm$Xrm$LookupValue



/**
 * Interface for an OptionSet value.
 * @deprecated Use {@link Xrm.OptionSetValue} instead.
 */
declare type Xrm$OptionSetValue = {

/**
 * The label text.
 */
text: string,

/**
 * The value, as a number
 */
value: number
} & Xrm$Xrm$OptionSetValue



/**
 * Requirement Level for Xrm.Page.Attribute.getRequiredLevel() and Xrm.Page.Attribute.setRequiredLevel().
 * @deprecated Use {@link Xrm.Attributes.RequirementLevel} instead.
 */
declare type Attributes$RequirementLevel = Attributes$Attributes$RequirementLevel;


/**
 * Date attribute formats for Xrm.Page.Attribute.getFormat(), used by DateAttribute.
 * @deprecated Use {@link Xrm.Attributes.DateAttributeFormat} instead.
 */
declare type Attributes$DateAttributeFormat = Attributes$Attributes$DateAttributeFormat;


/**
 * Integer attribute formats for Xrm.Page.Attribute.getFormat(), used by NumberAttribute.
 * @deprecated Use {@link Xrm.Attributes.IntegerAttributeFormat} instead.
 */
declare type Attributes$IntegerAttributeFormat = Attributes$Attributes$IntegerAttributeFormat;


/**
 * OptionSet attribute formats for Xrm.Page.Attribute.getFormat(), used by OptionSetAttribute.
 * @deprecated Use {@link Xrm.Attributes.OptiopnSetAttributeFormat} instead.
 */
declare type Attributes$OptionSetAttributeFormat = Attributes$Attributes$OptionSetAttributeFormat;


/**
 * String attribute formats for Xrm.Page.Attribute.getFormat(), used by StringAttribute.
 * @deprecated Use {@link Xrm.Attributes.StringAttributeFormat} instead.
 */
declare type Attributes$StringAttributeFormat = Attributes$Attributes$StringAttributeFormat;


/**
 * Attribute types for Xrm.ui.ProcessMonitor Xrm.Page.Attribute.setDisplayState().
 * @deprecated Use {@link Xrm.Attributes.AttributeType} instead.
 */
declare type Attributes$AttributeType = Attributes$Attributes$AttributeType;


/**
 * Attribute formats for Xrm.Page.Attribute.getFormat().
 * @deprecated Use {@link Xrm.Attributes.AttributeFormat} instead.
 */
declare type Attributes$AttributeFormat = Attributes$Attributes$AttributeFormat;


/**
 * Interface for an Entity attribute.
 * @deprecated Use {@link Xrm.Attributes.Attribute} instead.
 */
declare type Attributes$Attribute = {

/**
 * Adds a handler to be called when the attribute's value is changed.
 * @param handler The function reference.
 */
addOnChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Fire all "on change" event handlers.
 */
fireOnChange(): void,

/**
 * Gets attribute type.
 * @returns The attribute's type name.<BR><BR>
**Values returned are**:
* boolean
* datetime
* decimal
* double
* integer
* lookup
* memo
* money
* optionset
* string
 */
getAttributeType(): Attributes$AttributeType,

/**
 * Gets the attribute format.
 * @returns The format of the attribute.<BR><BR>
**Values returned are**:
* date           (datetime)
* datetime       (datetime)
* duration       (integer)
* email          (string)
* language       (optionset)
* none           (integer)
* phone          (string)
* text           (string)
* textarea       (string)
* tickersymbol   (string)
* timezone       (optionset)
* url            (string)
 * @see {@link getAttributeType}
 */
getFormat(): Attributes$AttributeFormat,

/**
 * Gets a boolean value indicating whether this Attribute has unsaved changes.
 * @returns true if there are unsaved changes, otherwise false.
 */
getIsDirty(): boolean,

/**
 * Gets the logical name of the attribute.
 * @returns The logical name.
 */
getName(): string,

/**
 * Gets a reference to the record context of this attribute.
 * @returns The parent record context.
 */
getParent(): Page$Entity,

/**
 * Gets the current level of requirement for the attribute.
 * @returns The required level, as either "none", "required", or "recommended"
 */
getRequiredLevel(): Attributes$RequirementLevel,

/**
 * Gets current submit mode for the attribute.
 * @returns The submit mode, as either "always", "never", or "dirty"
 * @remarks The default value is "dirty"
 */
getSubmitMode(): Page$SubmitMode,

/**
 * Gets the current user's privileges for the attribute.
 * @returns The user privileges.
 */
getUserPrivilege(): Page$Privilege,

/**
 * Removes the handler from the "on change" event.
 * @param handler The handler.
 */
removeOnChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Sets the required level.
 * @param requirementLevel The requirement level, as either "none", "required", or "recommended"
 * @see {@link XrmEnum.AttributeRequirementLevel}
 */
setRequiredLevel(requirementLevel: Attributes$RequirementLevel): void,

/**
 * Sets the submit mode.
 * @param submitMode The submit mode, as either "always", "never", or "dirty".
 * @default submitMode "dirty"
 * @see {@link XrmEnum.AttributeRequirementLevel}
 */
setSubmitMode(submitMode: Page$SubmitMode): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Page$Control>,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): any,

/**
 * Sets the value.
 * @param value The value.
 */
setValue(value: any): void
} & Attributes$Attributes$Attribute



/**
 * Interface for a Number attribute.
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.NumberAttribute} instead.
 */
declare type Attributes$NumberAttribute = {

/**
 * Gets the attribute format.
 * @returns The format of the attribute.
Values returned are: duration, none
 */
getFormat(): Attributes$IntegerAttributeFormat,

/**
 * Gets the maximum value allowed.
 * @returns The maximum value allowed.
 */
getMax(): number,

/**
 * Gets the minimum value allowed.
 * @returns The minimum value allowed.
 */
getMin(): number,

/**
 * Gets the attribute's configured precision.
 * @returns The total number of allowed decimal places.
 */
getPrecision(): number,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): number,

/**
 * Sets the value.
 * @param value The value.
 * @remarks Attributes on Quick Create Forms will not save values set with this method.
 */
setValue(value: number): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Page$NumberControl>
} & Attributes$Attributes$NumberAttribute



/**
 * Interface for a String attribute.
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.StringAttribute} instead.
 */
declare type Attributes$StringAttribute = {

/**
 * Gets the attribute format.
 * @returns The format of the attribute.
Values returned are: email, phone, text, textarea, tickersymbol, url
 */
getFormat(): Attributes$StringAttributeFormat,

/**
 * Gets maximum length allowed.
 * @returns The maximum length allowed.
 * @remarks The email form's "Description" attribute does not have the this method.
 */
getMaxLength(): number,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): string,

/**
 * Sets the value.
 * @param value The value.
 * @remarks A String field with the {@link Attribute.getFormat|email} format enforces email
address formatting. Attributes on Quick Create Forms will not save values set
with this method.
 */
setValue(value: string): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Page$StringControl>
} & Attributes$Attributes$StringAttribute



/**
 * Common interface for enumeration attributes (OptionSet and Boolean).
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.EnumAttribute} instead.
 */
declare type Attributes$EnumAttribute = {

/**
 * Gets the initial value of the attribute.
 * @returns The initial value.
 * @remarks Valid for OptionSet and boolean attribute types
 */
getInitialValue(): number | boolean
} & Attributes$Attributes$EnumAttribute



/**
 * Interface for a Boolean attribute.
 * @see {@link EnumAttribute}
 * @deprecated Use {@link Xrm.Attributes.BooleanAttribute} instead.
 */
declare type Attributes$BooleanAttribute = {

/**
 * Gets the initial value of the attribute.
 * @returns The initial value.
 * @remarks Valid for OptionSet and boolean attribute types
 */
getInitialValue(): boolean,

/**
 * Gets the value.
 * @returns true if it succeeds, false if it fails.
 */
getValue(): boolean,

/**
 * Sets the value.
 * @param value The value.
 * @remarks Attributes on Quick Create Forms will not save values set with this method.
 */
setValue(value: boolean): void
} & Attributes$Attributes$BooleanAttribute



/**
 * Interface for a Date attribute.
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.DateAttribute} instead.
 */
declare type Attributes$DateAttribute = {

/**
 * Gets the attribute format.
 * @returns The format of the attribute.
Values returned are: date, datetime
 */
getFormat(): Attributes$DateAttributeFormat,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): Date,

/**
 * Sets the value.
 * @param value The value.
 * @remarks Attributes on Quick Create Forms will not save values set with this method.
 */
setValue(value: Date): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Page$DateControl>
} & Attributes$Attributes$DateAttribute



/**
 * Interface an OptionSet attribute.
 * @see {@link EnumAttribute}
 * @deprecated Use {@link Xrm.Attributes.OptionSetAttribute} instead.
 */
declare type Attributes$OptionSetAttribute = {

/**
 * Gets the attribute format.
 * @returns The format of the attribute.
Values returned are: language, timezone
 */
getFormat(): Attributes$OptionSetAttributeFormat,

/**
 * Gets the initial value of the attribute.
 * @returns The initial value.
 * @remarks Valid for OptionSet and boolean attribute types
 */
getInitialValue(): number,

/**
 * Gets the option matching a value.
 * @param value The enumeration value of the option desired.
 * @returns The option.
 */
getOption(value: number): Xrm$OptionSetValue,

/**
 * Gets the option matching a label.
 * @param label The label of the option desired.
 * @returns The option.
 */
getOption(label: string): Xrm$OptionSetValue,

/**
 * Gets all of the options.
 * @returns An array of options.
 */
getOptions(): Xrm$OptionSetValue[],

/**
 * Gets selected option.
 * @returns The selected option.
 */
getSelectedOption(): Xrm$OptionSetValue,

/**
 * Gets the label of the currently selected option.
 * @returns The current value's label.
 */
getText(): string,

/**
 * Gets the value.
 * @returns The value.
 */
getValue(): number,

/**
 * Sets the value.
 * @param value The value.
 * @remarks The getOptions() method returns option values as strings. You must use parseInt
to convert them to numbers before you can use those values to set the value of an
OptionSet attribute. Attributes on Quick Create Forms will not save values set
with this method.
 */
setValue(value: number): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Page$OptionSetControl>
} & Attributes$Attributes$OptionSetAttribute



/**
 * Interface a Lookup attribute.
 * @see {@link Attribute}
 * @deprecated Use {@link Xrm.Attributes.LookupAttribute} instead.
 */
declare type Attributes$LookupAttribute = {

/**
 * Gets a boolean value indicating whether the Lookup is a multi-value PartyList.
 * @returns true the attribute is a PartyList, otherwise false.
 */
getIsPartyList(): boolean,

/**
 * Gets the value.
 * @returns An array of LookupValue.
 */
getValue(): Xrm$LookupValue[],

/**
 * Sets the value.
 * @param value The value.
 * @remarks Attributes on Quick Create Forms will not save values set with this method.
 */
setValue(value: Xrm$LookupValue[]): void,

/**
 * A collection of all the controls on the form that interface with this attribute.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Page$LookupControl>
} & Attributes$Attributes$LookupAttribute



/**
 * Control type for Xrm.Page.ui.QuickForm.getControlType().
 * @deprecated Use {@link Xrm.Controls.ControlQuickFormType} instead.
 */
declare type Controls$ControlQuickFormType = Controls$Controls$ControlQuickFormType;


/**
 * Control types for Xrm.Page.Control.getControlType().
 * @deprecated Use {@link Xrm.Controls.ControlType} instead.
 */
declare type Controls$ControlType = Controls$Controls$ControlType;


/**
 * Interface for UI elements with labels.
 * @deprecated Use {@link Xrm.Controls.UiLabelElement} instead.
 */
declare type Controls$UiLabelElement = {

/**
 * Gets the label.
 * @returns The label.
 */
getLabel(): string,

/**
 * Sets the label.
 * @param label The label.
 */
setLabel(label: string): void
} & Controls$Controls$UiLabelElement



/**
 * Interface for UI elements which can have the visibility value read.
 * @deprecated Use {@link Xrm.Controls.UiCanGetVisibleElement} instead.
 */
declare type Controls$UiCanGetVisibleElement = {

/**
 * Gets the visibility state.
 * @returns true if the tab is visible, otherwise false.
 */
getVisible(): boolean
} & Controls$Controls$UiCanGetVisibleElement



/**
 * Interface for UI elements which can have the visibility value updated.
 * @deprecated Use {@link Xrm.Controls.UiCanSetVisibleElement} instead.
 */
declare type Controls$UiCanSetVisibleElement = {

/**
 * Sets the visibility state.
 * @param visible true to show, false to hide.
 */
setVisible(visible: boolean): void
} & Controls$Controls$UiCanSetVisibleElement



/**
 * Base interface for standard UI elements.
 * @deprecated Use {@link Xrm.Controls.UiStandardElement} instead.
 */
declare type Controls$UiStandardElement = {

/**
 * Sets the visibility state.
 * @param visible true to show, false to hide.
 */
setVisible(visible: boolean): void
} & Controls$Controls$UiStandardElement



/**
 * Interface for focusable UI elements.
 * @deprecated Use {@link Xrm.Controls.UiFocusable} instead.
 */
declare type Controls$UiFocusable = {

/**
 * Sets focus on the element.
 */
setFocus(): void
} & Controls$Controls$UiFocusable



/**
 * Interface for controls which methods provide immediate feedback or take actions as user types in a control.
 * Contains methods which can be used to perform data validations in a control even before the user commits (saves) the value in a form.
 * @deprecated Use {@link Xrm.Controls.UiKeyPressable} instead.
 */
declare type Controls$UiKeyPressable = {

/**
 * Use this to add a function as an event handler for the keypress event so that the function is called when you type a character in the specific text or number field.
 * For a sample JavaScript code that uses the addOnKeyPress method to configure the auto-completion experience, see Sample: Auto-complete in CRM controls.
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param handler The function reference.
 */
addOnKeyPress(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to manually fire an event handler that you created for a specific text or number field to be executed on the keypress event.
 */
fireOnKeyPress(): void,

/**
 * Use this to remove an event handler for a text or number field that you added using addOnKeyPress.
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
Remarks:  If an anonymous function is set using addOnKeyPress, it can’t be removed using this method.
 * @param handler The function reference.
 */
removeOnKeyPress(handler: Events$Page$ContextSensitiveHandler): void
} & Controls$Controls$UiKeyPressable



/**
 * Interface for Result value of AutoCompleteResultSet
 * @deprecated Use {@link Xrm.Controls.AutoCompleteResult} instead.
 */
declare type Controls$AutoCompleteResult = {

/**
 * The Identifier
 */
id: string | number,

/**
 * Url of the icon to display
 */
icon?: string,

/**
 * Display value(s) for this auto-complete option
 */
fields: string[]
} & Controls$Controls$AutoCompleteResult



/**
 * Interface for command of AutoCompleteResultSet.  This is displayed at the bottom of the auto complete view
 * @deprecated Use {@link Xrm.Controls.AutoCompleteCommand} instead.
 */
declare type Controls$AutoCompleteCommand = {

/**
 * The Identifier
 */
id: string,

/**
 * Url of the icon to display
 */
icon?: string,

/**
 * Label to display at the bottom of the auto complete view
 */
label: string,

/**
 * Action to perform when user clicks on label
 */
action(): void
} & Controls$Controls$AutoCompleteCommand



/**
 * Interface for showAutoComplete argument
 * @deprecated Use {@link Xrm.Controls.AutoCompleteResultSet} instead.
 */
declare type Controls$AutoCompleteResultSet = {

/**
 * Results to show
 */
results: Controls$AutoCompleteResult[],

/**
 * Command to show/execute at the bottom of the results displayed
 */
commands?: Controls$AutoCompleteCommand
} & Controls$Controls$AutoCompleteResultSet



/**
 * Interface for Xrm.Page.ui controls.
 * @see {@link UiElement}
 * @deprecated Use {@link Xrm.Controls.Control} instead.
 */
declare type Controls$Control = {

/**
 * Gets the controls type.
 * @returns The control type.<BR><BR>
**Values returned are**:
* standard
* iframe
* lookup
* optionset
* subgrid
* webresource
* notes
* timercontrol
* kbsearch (CRM Online Only, use parature.d.ts)
* quickform (see ui.QuickForm)
* customcontrol: <namespace>.<name> (A custom control for mobile phone and tablet clients).
* customsubgrid: <namespace>.<name> (A custom dataset control for mobile phone and tablet clients).
 */
getControlType(): Controls$ControlType | string,

/**
 * Gets the name of the control on the form.
 * @returns The name of the control.
 * @remarks The name assigned to a control is not determined until the form loads. Changes to
the form may change the name assigned to a given control.
When you use the control getName method the name of the first control will be the
same as the name of the attribute. The second instance of a control for that
attribute will be "<attributeName>1". The pattern <attributeName>+N
will continue for each additional control added to the form for a specific
attribute. When a form displays a business process flow control in the header,
additional controls will be added for each attribute that is displayed in the
business process flow. These controls have a unique name like the following:
header_process_<attribute name>.
 */
getName(): string,

/**
 * Gets a reference to the Section parent of the control.
 * @returns The parent Section.
 */
getParent(): Page$Section
} & Controls$Controls$Control



/**
 * Interface for Xrm.Page.ui.navigation.
 * @deprecated Use {@link Xrm.Controls.Navigation} instead.
 */
declare type Controls$Navigation = {

/**
 * A reference to the collection of available navigation items.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
items: Collection$Collection$ItemCollection<Page$NavigationItem>,

/**
 * Displays an alert dialog containing a message and a button.
 * @param alertStrings The strings to be used in the alert dialog.
 * @param alertOptions The height and width options for alert dialog
 */
openAlertDialog(
alertStrings: Controls$Navigation.Navigation$AlertStrings,
alertOptions?: Controls$Navigation.Navigation$DialogSizeOptions): Async$Async$PromiseLike<any>,

/**
 * Displays a confirmation dialog box containing a message and two buttons.
 * @param confirmStrings The strings to be used in the confirm dialog.
 * @param confirmOptions The height and width options for alert dialog
 */
openConfirmDialog(
confirmStrings: Controls$Navigation.Navigation$ConfirmStrings,
confirmOptions?: Controls$Navigation.Navigation$DialogSizeOptions): Async$Async$PromiseLike<Controls$Navigation.Navigation$ConfirmResult>,

/**
 * Displays an error dialog.
 * @param confirmStrings The strings to be used in the confirm dialog.
 * @param confirmOptions The height and width options for alert dialog
 */
openErrorDialog(
errorOptions: Controls$Navigation.Navigation$ErrorDialogOptions): Async$Async$PromiseLike<any>,

/**
 * Opens a file.
 */
openFile(
file: Controls$Navigation.Navigation$FileDetails,
openFileOptions?: XrmEnum$XrmEnum$OpenFileOptions): void,

/**
 * Opens an entity form or a quick create form.
 */
openForm(
entityFormOptions: Controls$Navigation.Navigation$EntityFormOptions,
formParameters?: Xrm$Utility.Utility$OpenParameters): Async$Async$PromiseLike<Controls$Navigation.Navigation$OpenFormResult>,

/**
 * Opens a URL, including file URLs.
 * @param url URL to open.
 * @param openUrlOptions Options to open the URL
 */
openUrl(
url: string,
openUrlOptions?: Controls$Navigation.Navigation$DialogSizeOptions): void,

/**
 * Opens an HTML web resource.
 * @param webResourceName Name of the HTML web resource.
 * @param windowOptions (Optional) Window options for opening the web resource.
                           It is advised to use encodeURIcomponent() to encode the value.
 */
openWebResource(
webResourceName: string,
windowOptions?: Controls$Navigation.Navigation$OpenWebresourceOptions,
data?: string): void
} & Controls$Controls$Navigation



/**
 * Interface for a navigation item.
 * @see {@link UiElement}
 * @see {@link UiFocusable}
 * @deprecated Use {@link Xrm.Controls.NavigationItem} instead.
 */
declare type Controls$NavigationItem = {

/**
 * Gets the name of the item.
 * @returns The identifier.
 */
getId(): string
} & Controls$Controls$NavigationItem



/**
 * Interface for a standard control.
 * @see {@link Control}
 * @deprecated Use {@link Xrm.Controls.StandardControl} instead.
 */
declare type Controls$StandardControl = {

/**
 * Clears the notification identified by uniqueId.
 * @param uniqueId (Optional) Unique identifier.
 * @returns true if it succeeds, false if it fails.
 * @remarks If the uniqueId parameter is not used, the current notification shown will be removed.
 */
clearNotification(uniqueId?: string): boolean,

/**
 * Gets a boolean value, indicating whether the control is disabled.
 * @returns true if it is disabled, otherwise false.
 */
getDisabled(): boolean,

/**
 * Sets the state of the control to either enabled, or disabled.
 * @param disabled true to disable, false to enable.
 */
setDisabled(disabled: boolean): void,

/**
 * Sets a control-local notification message.
 * @param message The message.
 * @param uniqueId Unique identifier.
 * @returns true if it succeeds, false if it fails.
 * @remarks When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon
appears next to the control. Tapping on the icon will display the message.
 */
setNotification(message: string, uniqueId: string): boolean,

/**
 * Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification.
 */
addNotification(notification: Page$AddControlNotificationOptions): void,

/**
 * Gets the control's bound attribute.
 * @template An Attribute type.
 * @returns The attribute.
 */
getAttribute<T: Attributes$Attributes$Attribute>(): T,

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Attributes$Attribute
} & Controls$Controls$StandardControl



/**
 * Interface for Auto Lookup Control.
 * This is not an Entity Lookup, but a control that supports AutoComplete / KeyPress Events (Text or Number)
 * @remarks This interface is not supported for CRM mobile clients (phones or tablets) and the interactive service hub.  It is only available for Updated entities.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.AutoLookupControl} instead.
 */
declare type Controls$AutoLookupControl = {

/**
 * Gets the latest value in a control as the user types characters in a specific text or number field.
 * This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control.
 * The getValue method is different from the attribute getValue method because the control method retrieves the value from the control
 * as the user is typing in the control as opposed to the attribute getValue method that retrieves the value after the user commits (saves) the field.
 */
getValue(): string,

/**
 * Hides the auto-completion drop-down list configured for a specific text field
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 */
hideAutoComplete(): void,

/**
 * Shows upt to 10 matching strings in a drop-down list as users press keys to type charactrer in a specific text field.
 * On selecting an item in the drop-down list, the value in the text field changes to the selected item, the drop-down list disappears, and the OnChange event for the text field is invoked
 * @deprecated Deprecated in v9.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated External Link: Deprecated Client APIs}
 * @param resultSet The results to show
 */
showAutoComplete(resultSet: Controls$AutoCompleteResultSet): void
} & Controls$Controls$AutoLookupControl



/**
 * Interface for a String control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.StringControl} instead.
 */
declare type Controls$StringControl = {

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Attributes$StringAttribute
} & Controls$Controls$StringControl



/**
 * Interface for a Number control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.NumberControl} instead.
 */
declare type Controls$NumberControl = {

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Attributes$NumberAttribute
} & Controls$AutoLookupControl



/**
 * Interface for a Date control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.DateControl} instead.
 */
declare type Controls$DateControl = {

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Attributes$DateAttribute,

/**
 * Gets the status of the time-of-day component of the Date control.
 * @returns true if the time is shown, otherwise false.
 */
getShowTime(): boolean,

/**
 * Sets the visibility of the time component of the Date control.
 * @param showTimeValue true to show, false to hide the time value.
 */
setShowTime(showTimeValue: boolean): void
} & Controls$StandardControl



/**
 * Interface for a Lookup control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.LookupControl} instead.
 */
declare type Controls$LookupControl = {

/**
 * Adds a handler to the "pre search" event of the Lookup control.
 * @param handler The handler.
 */
addPreSearch(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Adds an additional custom filter to the lookup, with the "AND" filter operator.
 * Can only be used within a "pre search" event handler
 * @see {@link addPreSearch}
 * @param filter Specifies the filter, as a serialized FetchXML "filter" node.
 * @param entityLogicalName (Optional) The logical name of the entity.
 * @remarks If entityLogicalName is not specified, the filter will be applied to all entities
valid for the Lookup control.
 * @example Example filter: <filter type="and">
             <condition attribute="address1_city" operator="eq" value="Redmond" />
             </filter>
 */
addCustomFilter(filter: string, entityLogicalName?: string): void,

/**
 * Adds a custom view for the Lookup dialog.
 * @param viewId Unique identifier for the view, in Guid format.
 * @param entityName Name of the entity.
 * @param viewDisplayName Name of the view to display.
 * @param fetchXml The FetchXML query for the view's contents, serialized as a string.
 * @param layoutXml The Layout XML, serialized as a string.
 * @param isDefault true, to treat this view as default.
 * @remarks Cannot be used on "Owner" Lookup controls.
The viewId is never saved to CRM, but must be unique across available views.  Generating
a new value can be accomplished with a {@link http://www.guidgen.com/ Guid generator(external link)}.
 * @example Example viewId value: "{00000000-0000-0000-0000-000000000001}"
 * @see {@link http://msdn.microsoft.com/en-us/library/gg334522.aspx External Link: Layout XML Reference}
 */
addCustomView(
viewId: string,
entityName: string,
viewDisplayName: string,
fetchXml: string,
layoutXml: string,
isDefault: boolean): void,

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Attributes$LookupAttribute,

/**
 * Gets the unique identifier of the default view.
 * @returns The default view, in Guid format.
 * @example Example return: "{00000000-0000-0000-0000-000000000000}"
 */
getDefaultView(): string,

/**
 * Removes the handler from the "pre search" event of the Lookup control.
 * @param handler The handler.
 */
removePreSearch(handler: () => void): void,

/**
 * Sets the Lookup's default view.
 * @param viewGuid Unique identifier for the view.
 * @example Example viewGuid value: "{00000000-0000-0000-0000-000000000000}"
 */
setDefaultView(viewGuid: string): void,

/**
 * Gets the types of entities allowed in the lookup control.
 */
getEntityTypes(): string[],

/**
 * Sets the types of entities allowed in the lookup control.
 */
setEntityTypes(entityLogicalNames: string[]): void
} & Controls$Controls$LookupControl



/**
 * Interface for an OptionSet control.
 * @see {@link StandardControl}
 * @deprecated Use {@link Xrm.Controls.OptionSetControl} instead.
 */
declare type Controls$OptionSetControl = {

/**
 * Adds an option.
 * @param option The option.
 * @param index (Optional) zero-based index of the option.
 * @remarks This method does not check that the values within the options you add are valid.
If index is not provided, the new option will be added to the end of the list.
 */
addOption(option: Xrm$OptionSetValue, index?: number): void,

/**
 * Clears all options.
 */
clearOptions(): void,

/**
 * Gets the control's bound attribute.
 * @returns The attribute.
 */
getAttribute(): Attributes$Attributes$OptionSetAttribute,

/**
 * Removes the option matching the value.
 * @param value The value.
 */
removeOption(value: number): void
} & Controls$Controls$OptionSetControl



/**
 * Interface for a CRM grid control.
 * @see {@link Control}
 * @deprecated Use {@link Xrm.Controls.GridControl} instead.
 */
declare type Controls$GridControl = {

/**
 * Use this method to add event handlers to the GridControl's OnLoad event.
 * @param handler The event handler.
 */
addOnLoad(handler: () => void): void,

/**
 * This method returns context information about the GridControl.
 * @returns The context type.
 */
getContextType(): XrmEnum$XrmEnum$GridControlContext,

/**
 * Use this method to get the logical name of the entity data displayed in the grid.
 * @returns The entity name.
 */
getEntityName(): string,

/**
 * Use this method to get access to the Grid available in the GridControl.
 * @returns The grid.
 */
getGrid(): ui$Grid,

/**
 * Use this method to get access to the ViewSelector available for the GridControl when it is configured to display views.
 * @returns The view selector.
 */
getViewSelector(): ui$ViewSelector,

/**
 * Refreshes the sub grid.
 * @remarks Not available during the "on load" event of the form.
 */
refresh(): void,

/**
 * Use this method to remove event handlers from the GridControl's OnLoad event.
 * @param handler The handler.
 */
removeOnLoad(handler: () => void): void
} & Controls$Controls$GridControl



/**
 * Interface for a grid.  Use Grid methods to access information about data in the grid. Grid is returned by the
 * GridControl.getGrid method.
 * @deprecated Use {@link Xrm.Controls.Grid} instead.
 */
declare type Controls$Grid = {

/**
 * Returns a collection of every GridRow in the Grid.
 * @returns The rows.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getRows(): Collection$Collection$ItemCollection<Controls$Grid.ui$GridRow>,

/**
 * Returns a collection of every selected GridRow in the Grid.
 * @returns The selected rows.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getSelectedRows(): Collection$Collection$ItemCollection<Controls$Grid.ui$GridRow>,

/**
 * Returns the total number of records in the Grid.
 * @returns The total record count.
 */
getTotalRecordCount(): number
} & Controls$Controls$Grid



/**
 * Interface for a grid row.  Use the GridRow.getData method to access the GridRowData. A collection of GridRow is
 * returned by Grid.getRows and Grid.getSelectedRows methods.
 * In V9 - this is essentailly a form context.
 * @deprecated Use {@link Xrm.Controls.Grid.GridRow} instead.
 */
declare type Grid$GridRow = {

/**
 * Provides methods to work with the row data.
 */
data: Xrm$Data,

/**
 * Returns the GridRowData for the GridRow.
 * @deprecated Deprecated in V9 - use data field instead
 * @returns The data.
 */
getData(): ui$GridRowData
} & undefined.Grid$GridRow



/**
 * Interface for grid row data.  Use the GridRowData.getEntity method to access the GridEntity. GridRowData is
 * returned by the GridRow.getData method.
 * @deprecated Use {@link Xrm.Controls.Grid.GridRowData} instead.
 */
declare type Grid$GridRowData = {

/**
 * Returns the GridEntity for the GridRowData.
 * @returns The entity.
 * @deprecated Use GridRow.data.entity instead of using GridRow.getData().getEntity().
 */
getEntity(): ui$GridEntity
} & undefined.Grid$GridRowData



/**
 * Interface for a grid entity.  Use the GridEntity methods to access data about the specific records in the rows.
 * GridEntity is returned by the GridRowData.getEntity method.
 * @deprecated Use {@link Xrm.Controls.Grid.GridRowData} instead.v
 */
declare type Grid$GridEntity = {

/**
 * Returns the logical name for the record in the row.
 * @returns The entity name.
 * @deprecated Use GridRow.data.entity.getEntityName() instead.
 */
getEntityName(): string,

/**
 * Returns a LookupValue that references this record.
 * @returns The entity reference.
 * @deprecated Use GridRow.data.entity.getEntityReference() instead.
 */
getEntityReference(): Xrm$LookupValue,

/**
 * Returns the id for the record in the row.
 * @returns The identifier of the GridEntity, in GUID format.
 * @example Example return: "{00000000-0000-0000-0000-000000000000}"
 * @deprecated Use GridRow.data.entity.getId() instead.
 */
getId(): string,

/**
 * Returns the primary attribute value for the record in the row.  (Commonly the name.)
 * @returns The primary attribute value.
 * @deprecated Use GridRow.data.entity.getPrimaryAttributeValue() instead.
 */
getPrimaryAttributeValue(): string
} & undefined.Grid$GridEntity



/**
 * Interface for a framed control, which is either a Web Resource or an Iframe.
 * @see {@link Control}
 * @remarks An Iframe control provides additional methods, so use {@link IframeControl} where
appropriate.  Silverlight controls should use {@link SilverlightControl}.
 * @deprecated Use {@link Xrm.Controls.FramedControl} instead.
 */
declare type Controls$FramedControl = {

/**
 * Gets the DOM element containing the control.
 * @returns The container object.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getObject(): HTMLIFrameElement,

/**
 * Gets the URL value of the control.
 * @returns The source URL.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getSrc(): string,

/**
 * Sets the URL value of the control.
 * @param src The source URL.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
setSrc(src: string): void
} & Controls$Controls$FramedControl



/**
 * Interface for an Iframe control.
 * @see {@link FramedControl}
 * @deprecated Use {@link Xrm.Controls.IframeControl} instead.
 */
declare type Controls$IframeControl = {

/**
 * Gets initial URL defined for the Iframe.
 * @returns The initial URL.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getInitialUrl(): string
} & Controls$Controls$IframeControl



/**
 * Interface for a quick view control instance on a form.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms External Link: formContext.ui.quickForms (Client API reference)}
 */
declare type Controls$QuickFormControl = {

/**
 * Gets the constituent controls in a quick view control.
 * @returns An array of controls.
 * @remarks Constituent controls in a quick view control are read only.
 */
getControl(): Controls$Control[],

/**
 * Gets the constituent controls in a quick view control.
 * @param T A Control type
 * @param controlName Name of the control.
 * @returns The control.
 * @remarks Constituent controls in a quick view control are read only.
 */
getControl<T: Controls$Control>(controlName: string): T,

/**
 * Gets the constituent controls in a quick view control.
 * @param controlName Name of the control.
 * @returns The control.
 * @remarks Constituent controls in a quick view control are read only.
 */
getControl(controlName: string): Controls$Control,

/**
 * Gets a control by index.
 * @param T A Control type
 * @param index The control index.
 * @returns The control.
 * @remarks Constituent controls in a quick view control are read only.
 */
getControl<T: Controls$Control>(index: number): T,

/**
 * Gets a control by index.
 * @param index The control index.
 * @returns The control.
 * @remarks Constituent controls in a quick view control are read only.
 */
getControl(index: number): Controls$Control,

/**
 * Gets the controls type.
 * @returns Returns a string value ("quickform") that categorizes quick view controls.
 */
getControlType(): Controls$ControlQuickFormType,

/**
 * Returns whether the data binding for the constituent controls in a quick view control is complete.
 * @returns True is the data binding for a constituent control is complete, otherwise false.
because the quick view form that the control is bound to may not have loaded completely.
As a result, using the getAttribute or any data-related methods on a constituent control might not work.
The isLoaded method for the quick view control helps determine the data binding status for constituent controls in a quick view control.
 * @remarks The data binding for the constituent controls in a quick view control may not be complete during the main form OnLoad event
 */
isLoaded(): boolean,

/**
 * Refreshes the data displayed in a quick view control.
 */
refresh(): void
} & Controls$Control & Controls$UiLabelElement & Controls$UiCanGetVisibleElement



/**
 * Interface for a Silverlight control.
 * @see {@link Control}
 * @deprecated Use {@link Xrm.Controls.SilverlightControl} instead.
 */
declare type Controls$SilverlightControl = {

/**
 * Gets the query string value passed to Silverlight.
 * @returns The data.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getData(): string,

/**
 * Sets the query string value passed to Silverlight.
 * @param data The data.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
setData(data: string): void,

/**
 * Gets the DOM element containing the control.
 * @returns The container object.
 * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
 */
getObject(): HTMLObjectElement
} & Controls$Controls$SilverlightControl



/**
 * Interface for a Timeline control.
 * @see {@link Control}
 * @deprecated Use {@link Xrm.Controls.TimelineWall} instead.
 */
declare type Controls$TimelineWall = {

/**
 * Refreshes the data displayed in a timelinewall and timer control.
 */
refresh(): void
} & Controls$Controls$TimelineWall



/**
 * Interface for a form tab.
 * @see {@link UiElement}
 * @see {@link UiFocusable}
 * @deprecated Use {@link Xrm.Controls.Tab} instead.
 */
declare type Controls$Tab = {

/**
 * Gets display state of the tab.
 * @returns The display state, as either "expanded" or "collapsed"
 */
getDisplayState(): ui$DisplayState,

/**
 * Gets the name of the tab.
 * @returns The name.
 */
getName(): string,

/**
 * Gets a reference to the {@link FormContext.ui formContext.ui} parent of the tab.
 * @returns The parent.
 */
getParent(): Xrm$Ui,

/**
 * Sets display state of the tab.
 * @param displayState Display state of the tab, as either "expanded" or "collapsed"
 */
setDisplayState(displayState: ui$DisplayState): void,

/**
 * A reference to the collection of form sections within this tab.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
sections: Collection$Collection$ItemCollection<Page$Section>
} & Controls$Controls$Tab



/**
 * Interface for a form section.
 * @see {@link UiElement}
 * @deprecated Use {@link Xrm.Controls.Section} instead.
 */
declare type Controls$Section = {

/**
 * Gets the name of the section.
 * @returns The name.
 */
getName(): string,

/**
 * Gets a reference to the parent {@link Tab}.
 * @returns The parent.
 */
getParent(): Controls$Tab,

/**
 * A reference to the collection of controls within this tab.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
controls: Collection$Collection$ItemCollection<Controls$Control>
} & Controls$Controls$Section



/**
 * @deprecated Use {@link Xrm.Controls.AddControlNotificationOptions} instead.
 */
declare type Controls$AddControlNotificationOptions = {

/**
 * A collection of actions
 */
actions?: Page$ControlNotificationAction[],

/**
 * The message to display in the notification.
 * In the current release, only the first message specified in this array will be displayed.
 */
messages: string[],

/**
 * Defines the type of notification.
 */
notificationLevel?: Page$NotificationLevel,

/**
 * The ID to use to clear this notification when using the clearNotification method.
 */
uniqueId: string
} & Controls$Controls$AddControlNotificationOptions



/**
 * Constants to use with the addNotification method of form controls
 * @deprecated Use {@link Xrm.Controls.NotificationLevel} instead.
 */
declare type Controls$NotificationLevel = Controls$Controls$NotificationLevel;


/**
 * Interface to define the actions on a control notification
 * @deprecated Use {@link Xrm.Controls.ControlNotificationAction} instead.
 */
declare type Controls$ControlNotificationAction = {

/**
 * The body message of the notification to be displayed to the user. Limit your message to 100 characters for optimal user experience.
 */
message?: string,

/**
 * Array of functions. The corresponding actions for the message.
 */
actions: Array<() => void>
} & Controls$Controls$ControlNotificationAction


declare type Controls$ProcessControl = {

/**
 * Sets display state of the process flow control.
 * @param displayState Display state of the process flow control, as either "expanded" or "collapsed"
 */
setDisplayState(displayState: ui$DisplayState): void,

/**
 * Gets the display state of the process flow control.
 */
getDisplayState(): ui$DisplayState,

/**
 * Reflow the UI of the process control
 * @param updateUI Specify true to update the UI of the process control; false otherwise.
 * @param parentStage ID of the parent stage.
 * @param nextStage ID of the next stage.
 */
reflow(updateUI: boolean, parentStage: string, nextStage: string): void
} & Controls$UiCanGetVisibleElement & Controls$UiCanSetVisibleElement



/**
 * Interface for an entity's form selector item.
 * @deprecated Use {@link Xrm.Controls.FormItem} instead.
 */
declare type Controls$FormItem = {

/**
 * Gets the unique identifier of the form.
 * @returns The identifier, in Guid format.
 */
getId(): string,

/**
 * Gets the label for the form.
 * @returns The label.
 */
getLabel(): string,

/**
 * Navigates the user to this form.
 */
navigate(): void
} & Controls$Controls$FormItem



/**
 * Interface for the form selector API.
 * @deprecated Use {@link Xrm.Controls.FormSelector} instead.
 */
declare type Controls$FormSelector = {

/**
 * Gets current form.
 * @returns The current item.
 * @remarks When only one form is available this method will return null.
 */
getCurrentItem(): Controls$FormItem,

/**
 * A reference to the collection of available forms.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
items: Collection$Collection$ItemCollection<Controls$FormItem>
} & Controls$Controls$FormSelector



/**
 * Interface for the view selector.  Use the ViewSelector methods to get or set information about the view selector
 * of the grid control.
 * @deprecated Use {@link Xrm.Controls.ViewSelector} instead.
 */
declare type Controls$ViewSelector = {

/**
 * Use this method to get a reference to the current view.
 * @returns The current view.
 */
getCurrentView(): ui$ViewSelectorItem,

/**
 * Use this method to determine whether the view selector is visible.
 * @returns true if visible, false if not.
 */
isVisible(): boolean,

/**
 * Use this method to set the current view.
 * @param viewSelectorItem The view selector item.
 */
setCurrentView(viewSelectorItem: ui$ViewSelectorItem): void
} & Controls$Controls$ViewSelector



/**
 * Interface for a view selector item. This object contains data that identifies a view. Use this as a parameter to
 * the ViewSelector.setCurrentView method.
 * @deprecated Use {@link Xrm.Controls.ViewSelectorItem} instead.
 */
declare type Controls$ViewSelectorItem = {

/**
 * Returns a LookupValue that references this view.
 * @returns The entity reference.
 */
getEntityReference(): Xrm$LookupValue
} & Controls$Controls$ViewSelectorItem



/**
 * Interface for the form's record context, Xrm.Page.data.entity
 * @deprecated Use {@link Xrm.Entity} instead.
 */
declare type Xrm$Entity = {

/**
 * Adds a handler to be called when the record is saved.
 * @param handler The handler.
 */
addOnSave(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Gets an serialized-XML string representing data that will be passed to the server upon saving the record.
 * @returns The XML in string format.
 * @remarks This function does not work with Microsoft Dynamics CRM for tablets.
 * @example "<account><name>Contoso</name><accountnumber>55555</accountnumber><telephone2>425
555-1234</telephone2></account>".
 */
getDataXml(): string,

/**
 * Gets entity's logical name.
 * @returns The logical name.
 */
getEntityName(): string,

/**
 * Gets a lookup value that references the record.
 * @returns A lookup value that references the record.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference External Link: getEntityReference API Documentation}
 */
getEntityReference(): Xrm$LookupValue,

/**
 * Gets the record's unique identifier.
 * @returns The identifier, in Guid format.
 * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
 */
getId(): string,

/**
 * Gets a boolean value indicating whether the record has unsaved changes.
 * @returns true if there are unsaved changes, otherwise false.
 */
getIsDirty(): boolean,

/**
 * Gets the record's primary attribute value.
 * @returns The primary attribute value.
 * @remarks The value for this attribute is used when links to the record are displayed.
 */
getPrimaryAttributeValue(): string,

/**
 * Gets a boolean value indicating whether all of the entity data is valid.
 * @returns true if all of the entity data is valid; false otherwise.
 */
isValid(): boolean,

/**
 * Removes the handler from the "on save" event.
 * @param handler The handler.
 */
removeOnSave(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Saves the record.
 * @remarks When using quick create forms in the web application the saveandnew option is not
applied. It will always work as if saveandclose were used. Quick create forms in
Microsoft Dynamics CRM for tablets will apply the saveandnew behavior.
 */
save(): void,

/**
 * Saves the record with the given save mode.
 * @param saveMode (Optional) the save mode to save, as either "saveandclose" or "saveandnew".  If no parameter is included in the method, the record will simply be saved.
 */
save(saveMode?: Xrm$EntitySaveMode): void,

/**
 * The collection of attributes for the record.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes External Link: Attributes (Client API reference)}
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
attributes: Collection$Collection$ItemCollection<Attributes$Attributes$Attribute>
} & Xrm$Xrm$Entity



/**
 * Direction types for a process stage change event
 * @deprecated Use {@link Xrm.ProcessFlow.StageChangeDirection} instead.
 */
declare type ProcessFlow$StageChangeDirection = ProcessFlow$ProcessFlow$StageChangeDirection;


/**
 * Status for Xrm.Page.Stage.getStatus().
 * @deprecated Use {@link Xrm.ProcessFlow.StageStatus} instead.
 */
declare type ProcessFlow$StageStatus = ProcessFlow$ProcessFlow$StageStatus;


/**
 * Status for Xrm.Page.Process.getStatus().
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessStatus} instead
 */
declare type ProcessFlow$ProcessStatus = ProcessFlow$ProcessFlow$ProcessStatus;


/**
 * Interface for a CRM Business Process Flow instance.
 * @deprecated Use {@link Xrm.ProcessFlow.Process} instead.
 */
declare type ProcessFlow$Process = {

/**
 * Returns the unique identifier of the process.
 * @returns The identifier for this process, in GUID format.
 * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
 */
getId(): string,

/**
 * Returns the name of the process.
 * @returns The name.
 */
getName(): string,

/**
 * Returns an collection of stages in the process.
 * @returns The stages.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getStages(): Collection$Collection$ItemCollection<Page$Stage>,

/**
 * Returns a boolean value to indicate if the process is rendered.
 * @returns true if the process is rendered, false if not.
 */
isRendered(): boolean
} & ProcessFlow$ProcessFlow$Process



/**
 * Interface for CRM Business Process Flow stages.
 * @deprecated Use {@link Xrm.ProcessFlow.Stage} instead.
 */
declare type ProcessFlow$Stage = {

/**
 * Returns an object with a getValue method which will return the integer value of the business process flow
 * category.
 * @returns The stage category.
 */
getCategory(): {
getValue(): XrmEnum$XrmEnum$StageCategory
},

/**
 * Returns the logical name of the entity associated with the stage.
 * @returns The entity name.
 */
getEntityName(): string,

/**
 * Returns the unique identifier of the stage.
 * @returns The identifier of the Stage, in GUID format.
 * @example Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
 */
getId(): string,

/**
 * Returns the name of the stage.
 * @returns The name.
 */
getName(): string,

/**
 * Returns the status of the stage.
 * @returns The status, either "active" or "inactive".
 */
getStatus(): ProcessFlow$StageStatus,

/**
 * Returns a collection of steps in the stage.
 * @returns An array of Step.
 */
getSteps(): Page$Step[]
} & ProcessFlow$ProcessFlow$Stage



/**
 * Interface for CRM Business Process Flow steps.
 * @deprecated Use {@link Xrm.ProcessFlow.Step} instead.
 */
declare type ProcessFlow$Step = {

/**
 * Returns the logical name of the attribute associated to the step.
 * @returns The attribute.
 * @remarks Some steps don’t contain an attribute value.
 */
getAttribute(): string,

/**
 * Returns the name of the step.
 * @returns The name.
 */
getName(): string,

/**
 * Returns whether the step is required in the business process flow.
 * @returns true if required, false if not.
 * @remarks Returns true if the step is marked as required in the Business Process Flow editor; otherwise, false.
There is no connection between this value and the values you can change in the formContext.data.entity
attribute RequiredLevel methods.
 */
isRequired(): boolean
} & ProcessFlow$ProcessFlow$Step



/**
 * Interface for the Xrm.Page.data.process API.
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessManager} instead.
 */
declare type ProcessFlow$ProcessManager = {

/**
 * Returns a Process object representing the active process.
 * @returns current active process.
 */
getActiveProcess(): ProcessFlow$Process,

/**
 * Set a Process as the active process.
 * @param processId The Id of the process to make the active process.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveProcess(processId: string, callbackFunction?: data$ProcessCallbackDelegate): void,

/**
 * Returns all process instances for the entity record that the calling user has access to.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
getProcessInstances(callbackFunction?: data$GetProcessInstancesDelegate): void,

/**
 * Sets a process instance as the active instance
 * @param processInstanceId The Id of the process instance to make the active instance.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveProcessInstance(
processInstanceId: string,
callbackFunction?: data$SetProcessInstanceDelegate): void,

/**
 * Returns a Stage object representing the active stage.
 * @returns current active stage.
 */
getActiveStage(): ProcessFlow$Stage,

/**
 * Set a stage as the active stage.
 * @param stageId the Id of the stage to make the active stage.
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setActiveStage(stageId: string, callbackFunction?: data$ProcessCallbackDelegate): void,

/**
 * Use this method to get a collection of stages currently in the active path with methods to interact with the
 * stages displayed in the business process flow control. The active path represents stages currently rendered in
 * the process control based on the branching rules and current data in the record.
 * @returns A collection of all completed stages, the currently active stage, and the predicted set of future stages
based on satisfied conditions in the branching rule. This may be a subset of the stages returned with
formContext.data.process.getActiveProcess because it will only include those stages which represent a valid
transition from the current stage based on branching that has occurred in the process.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
getActivePath(): Collection$Collection$ItemCollection<ProcessFlow$Stage>,

/**
 * Use this method to asynchronously retrieve the enabled business process flows that the user can switch to for an
 * entity.
 * @param callbackFunction The callback function must accept a parameter that contains an object with
dictionary properties where the name of the property is the Id of the
business process flow and the value of the property is the name of the
business process flow.
The enabled processes are filtered according to the user’s privileges. The
list of enabled processes is the same ones a user can see in the UI if they
want to change the process manually.
 */
getEnabledProcesses(callbackFunction: (enabledProcesses: data$ProcessDictionary) => void): void,

/**
 * Use this method to get the currently selected stage.
 * @returns The currently selected stage.
 */
getSelectedStage(): ProcessFlow$Stage,

/**
 * Use this to add a function as an event handler for the OnStageChange event so that it will be called when the
 * business process flow stage changes.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnStageChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to add a function as an event handler for the OnProcessStatusChange event so that it will be called when the
 * business process flow status changes.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnProcessStatusChange(handler: Events$Page$ProcessStatusChangeHandler): void,

/**
 * Use this to add a function as an event handler for the OnStageSelected event so that it will be called
 * when a business process flow stage is selected.
 * @param handler The function will be added to the bottom of the event
handler pipeline. The execution context is automatically
set to be the first parameter passed to the event handler.
Use a reference to a named function rather than an
anonymous function if you may later want to remove the
event handler.
 */
addOnStageSelected(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to remove a function as an event handler for the OnProcessStatusChange event.
 * @param handler If an anonymous function is set using the addOnProcessStatusChange method it
cannot be removed using this method.
 */
removeOnProcessStatusChange(handler: Events$Page$ProcessStatusChangeHandler): void,

/**
 * Use this to remove a function as an event handler for the OnStageChange event.
 * @param handler If an anonymous function is set using the addOnStageChange method it
cannot be removed using this method.
 */
removeOnStageChange(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Use this to remove a function as an event handler for the OnStageChange event.
 * @param handler If an anonymous function is set using the addOnStageChange method it
cannot be removed using this method.
 */
removeOnStageSelected(handler: Events$Page$ContextSensitiveHandler): void,

/**
 * Progresses to the next stage.
 * @param callbackFunction (Optional) A function to call when the operation is complete.
 */
moveNext(callbackFunction?: data$ProcessCallbackDelegate): void,

/**
 * Moves to the previous stage.
 * @param callbackFunction (Optional) A function to call when the operation is complete.
 */
movePrevious(callbackFunction?: data$ProcessCallbackDelegate): void,

/**
 * Use this method to get the unique identifier of the process instance
 * @returns The unique identifier of the process instance
 */
getInstanceId(): string,

/**
 * Use this method to get the name of the process instance
 * @returns The name of the process instance
 */
getInstanceName(): string,

/**
 * Use this method to get the current status of the process instance
 * @returns The current status of the process
 */
getStatus(): ProcessFlow$ProcessStatus,

/**
 * Use this method to set the current status of the process instance
 * @param status The new status for the process
 * @param callbackFunction (Optional) a function to call when the operation is complete.
 */
setStatus(
status: ProcessFlow$ProcessStatus,
callbackFunction?: data$ProcessSetStatusDelegate): void
} & ProcessFlow$ProcessFlow$ProcessManager



/**
 * Called when method to get active processes is complete
 * @param status The result of the get active processes operation.
 * @remarks *Returns object with the following key-value pairs**:
* CreatedOn
* ProcessDefinitionID
* ProcessDefinitionName
* ProcessInstanceID
* ProcessInstanceName
* StatusCodeName
 * @deprecated Use {@link Xrm.ProcessFlow.GetProcessInstancesDelegate} instead.
 */
declare type ProcessFlow$GetProcessInstancesDelegate = ProcessFlow$ProcessFlow$GetProcessInstancesDelegate;


/**
 * Called when method to set active process is complete
 * @param status The result of the set active process operation.
 * @remarks *Values returned are**:
* success        (The operation succeeded.)
* invalid        (The processInstanceId isn’t valid or the process isn’t enabled.)
 * @deprecated Use {@link Xrm.ProcessFlow.SetProcessInstanceDelegate} instead.
 */
declare type ProcessFlow$SetProcessInstanceDelegate = ProcessFlow$ProcessFlow$SetProcessInstanceDelegate;


/**
 * Called when process change methods have completed.
 * @param status The result of the process change operation.
 * @remarks *Values returned are**:
* success        (The operation succeeded.)
* crossEntity    (The previous stage is for a different entity.)
* beginning      (The active stage is the first stage of the active path.)
* invalid        (The operation failed because the selected stage isn’t the same as the active stage.)
* unreachable    (The stage exists on a different path.)
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessCallbackDelegate} instead.
 */
declare type ProcessFlow$ProcessCallbackDelegate = ProcessFlow$ProcessFlow$ProcessCallbackDelegate;


/**
 * Called when process set status method has completed.
 * @param status The new status of the process instance
 * @remarks *Values returned are**:
* active
* aborted
* finished
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessSetStatusDelegate} instead.
 */
declare type ProcessFlow$ProcessSetStatusDelegate = ProcessFlow$ProcessFlow$ProcessSetStatusDelegate;


/**
 * Represents a key-value pair, where the key is the Process Flow's ID, and the value is the name thereof.
 * @deprecated Use {@link Xrm.ProcessFlow.ProcessDictionary} instead.
 */
declare type ProcessFlow$ProcessDictionary = {
[index: string]: string
} & ProcessFlow$ProcessFlow$ProcessDictionary



/**
 * Interface for a privilege.
 * @deprecated Use {@link Xrm.Privilege} instead.
 */
declare type Xrm$Privilege = {

/**
 * True if the user can read.
 */
canRead: boolean,

/**
 * True if the user can update.
 */
canUpdate: boolean,

/**
 * True if the user can create.
 */
canCreate: boolean
} & Xrm$Xrm$Privilege



/**
 * Command Bar Display options for Xrm.Url.FormOpenParameters.cmdbar, Xrm.Url.ViewOpenParameters.cmdbar, and Xrm.Utility.FormOpenParameters.cmdbar.
 * @see {@link XrmEnum.CmdBarDisplay}
 */
declare type Url$CmdBarDisplay = "true" | "false";


/**
 * Navigation Bar Display options for Xrm.Url.FormOpenParameters.navbar, Xrm.Url.ViewOpenParameters.navbar, and Xrm.Utility.FormOpenParameters.navbar.
 * @see {@link XrmEnum.NavBarDisplay}
 */
declare type Url$NavBarDisplay = "entity" | "off" | "on";


/**
 * Report Open Action options for Xrm.Url.ReportOpenParameters.actions.
 * @see {@link XrmEnum.ReportAction}
 */
declare type Url$ReportAction = "filter" | "run";


/**
 * Interface for defining parameters on a request to open a form with main.aspx (as with
 * window.open). Useful for parsing the keys and values into a string of the format:
 * "&key=value".
 * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
 * @remarks A member for "pagetype" is not provided.  The value "entityrecord" is required in
the URL, for forms. Example:  "pagetype=entityrecord"
 */
declare interface Url$FormOpenParameters {

/**
 * The logical name of the entity.
 */
etn: string,

/**
 * Additional parameters can be provided to the request. This can only be used to provide
 * default field values for the form, or pass data to custom parameters that have been
 * customized for the form.  See example below for setting the selected form.
 * @example Example:  encodeURIComponent("formid={8c9f3e6f-7839-e211-831e-00155db7d98f}");
 */
extraqs?: string,

/**
 * Controls whether the command bar is displayed.
 * @remarks *Accepted values are**:
* "true"    (The command bar is displayed.)
* "false"   (The command bar is not displayed.)
 */
cmdbar?: Url$CmdBarDisplay,

/**
 * Controls whether the Navigation bar is displayed on the form.
 * @remarks *Accepted values are**:
* "on"      (The navigation bar is displayed.)
* "off"     (The navigation bar is not displayed.)
* "entity"  (On an entity form, only the navigation options for related entities are available.)
 */
navbar?: Url$NavBarDisplay,

/**
 * The identifier of the form to use, when several are available.
 */
formid?: string,

/**
 * Controls whether the Navigation bar is displayed on the form.
 * @remarks *Accepted values are**:
* "on"      (The navigation bar is displayed.)
* "off"     (The navigation bar is not displayed.)
* "entity"  (On an entity form, only the navigation options for related entities are available.)
 */
navbar?: Url$Url$NavBarDisplay,

/**
 * Controls whether the command bar is displayed.
 * @remarks *Accepted values are**:
* "true"    (The command bar is displayed.)
* "false"   (The command bar is not displayed.)
 */
cmdbar?: Url$Url$CmdBarDisplay
} 


/**
 * Interface for defining parameters on a request to open a view with main.aspx (as with
 * window.open). Useful for parsing the keys and values into a string of the format:
 * "&key=value".
 * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
 * @remarks A member for "pagetype" is not provided.  The value "entitylist" is required in
the URL, for views. Example:  "pagetype=entitylist"
 */
declare interface Url$ViewOpenParameters {

/**
 * The logical name of the entity.
 */
etn: string,

/**
 * The unique identifier of a view, in Guid format, which is valid for the entity described by
 * {@link etn}.
 */
viewid: string,

/**
 * The type of view identified by {@link viewid}.
 * @remarks *Accepted values are**:
* 1039    System View
* 4230    User View.
 */
viewtype: XrmEnum$XrmEnum$ViewType,

/**
 * Controls whether the command bar is displayed.
 * @remarks *Accepted values are**:
* "true"    (The command bar is displayed.)
* "false"   (The command bar is not displayed.)
 */
cmdbar?: Url$CmdBarDisplay,

/**
 * Controls whether the Navigation bar is displayed on the form.
 * @remarks *Accepted values are**:
* "on"      (The navigation bar is displayed.)
* "off"     (The navigation bar is not displayed.)
* "entity"  (On an entity form, only the navigation options for related entities are available.)
 */
navbar?: Url$NavBarDisplay
} 


/**
 * Interface for defining parameters of a request to open a dialog with rundialog.aspx (as with
 * window.open).  Useful for parsing the keys and values into a string of the format:
 * "&key=value".
 * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
 */
declare interface Url$DialogOpenParameters {

/**
 * The unique identifier of the dialog, in Guid format, which is valid for the entity described
 * by: {@link EntityName}
 */
DialogId: string,

/**
 * The logical name of the entity.
 */
EntityName: string,

/**
 * The unique identifier for the targeted record.
 */
ObjectId: string
} 


/**
 * Interface for defining parameters of a request to open a report with viewer.apsx (as with
 * window.open).  Useful for parsing out the keys and values into a string of the format:
 * "&key=value"
 * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
 */
declare interface Url$ReportOpenParameters {

/**
 * The action to perform, as either "run" or "filter".
 * @remarks *Actions**:
* "run"       Executes the report with default filters.
* "filter"    Presents the user with the filter editor, and a "Run Report" button.
 */
action: Url$ReportAction,

/**
 * The file name of the report.  For out-of-box reports, this parameter enables context-sensitive
 * help.
 */
helpID?: string,

/**
 * The unique identifier, held in the report's 'reportid' attribute, in Guid format.
 */
id: string
} 


/**
 * Interface use to provide parameters when opening new entiy forms
 */
declare interface Utility$OpenParameters {

/**
 * Additional parameters can be provided to the request, by overloading
 * this object with additional key and value pairs. This can only be used
 * to provide default field values for the form, or pass data to custom
 * parameters that have been customized for the form.
 */
[index: string]: string | void
} 


/**
 * Interface for defining parameters on a request to open a form with main.aspx (as with
 * window.open). Useful for parsing the keys and values into a string of the format:
 * "&key=value".
 * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx External Link: Open forms, views, dialogs, and reports with a URL}
 * @remarks A member for "pagetype" is not provided.  The value "entityrecord" is required in
the URL, for forms. Example:  "pagetype=entityrecord"
 */
declare interface Utility$FormOpenParameters {

/**
 * The logical name of the entity.
 */
etn: string,

/**
 * Additional parameters can be provided to the request. This can only be used to provide
 * default field values for the form, or pass data to custom parameters that have been
 * customized for the form.  See example below for setting the selected form.
 * @example Example:  encodeURIComponent("formid={8c9f3e6f-7839-e211-831e-00155db7d98f}");
 */
extraqs?: string,

/**
 * Controls whether the command bar is displayed.
 * @remarks *Accepted values are**:
* "true"    (The command bar is displayed.)
* "false"   (The command bar is not displayed.)
 */
cmdbar?: Url$CmdBarDisplay,

/**
 * Controls whether the Navigation bar is displayed on the form.
 * @remarks *Accepted values are**:
* "on"      (The navigation bar is displayed.)
* "off"     (The navigation bar is not displayed.)
* "entity"  (On an entity form, only the navigation options for related entities are available.)
 */
navbar?: Url$NavBarDisplay,

/**
 * The identifier of the form to use, when several are available.
 */
formid?: string,

/**
 * Controls whether the Navigation bar is displayed on the form.
 * @remarks *Accepted values are**:
* "on"      (The navigation bar is displayed.)
* "off"     (The navigation bar is not displayed.)
* "entity"  (On an entity form, only the navigation options for related entities are available.)
 */
navbar?: Url$Url$NavBarDisplay,

/**
 * Controls whether the command bar is displayed.
 * @remarks *Accepted values are**:
* "true"    (The command bar is displayed.)
* "false"   (The command bar is not displayed.)
 */
cmdbar?: Url$Url$CmdBarDisplay
} 


/**
 * Interface for window options.
 */
declare interface Utility$WindowOptions {

/**
 * Direct the form to open in a new window.
 */
openInNewWindow: boolean
} 

declare interface Navigation$AlertStrings {

/**
 * (Optional) The confirm button label.If you do not specify the button label, OK is used as the button label.
 */
confirmButtonLabel?: string,

/**
 * The message to be displyed in the alert dialog.
 */
text: string
} 

declare interface Navigation$ConfirmStrings {

/**
 * (Optional) The cancel button label. If you do not specify the cancel button label, Cancel is used as the button label.
 */
cancelButtonLabel?: string,

/**
 * (Optional) The confirm button label.If you do not specify the button label, OK is used as the button label.
 */
confirmButtonLabel?: string,

/**
 * (Optional) The subtitle to be displayed in the confirmation dialog.
 */
subtitle?: string,

/**
 * (Optional) The title to be displyed in the confirmation dialog.
 */
title?: string,

/**
 * The message to be displyed in the alert dialog.
 */
text: string
} 

declare interface Navigation$DialogSizeOptions {

/**
 * Height of the alert dialog in pixels.
 */
height: number,

/**
 * Width of the alert dialog pixels.
 */
width: number
} 

declare type Navigation$OpenWebresourceOptions = {

/**
 * Indicates whether to open the web resource in a new window.
 */
openInNewWindow: boolean
} & Navigation$DialogSizeOptions



/**
 * An object with the confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.
 */
declare interface Navigation$ConfirmResult {

/**
 * true if the confirm button was clicked to close the dialog.
 */
confirmed: boolean
} 

declare interface Navigation$OpenFormResult {

/**
 * Identifies the record displayed or created
 */
savedEntityReference: Xrm$LookupValue[]
} 


/**
 * Details to show in the Error dialog
 */
declare interface Navigation$ErrorDialogOptions {

/**
 * Details about the error. When you specify this, the Download Log File button is available in the error message,
 * and clicking it will let users download a text file with the content specified in this attribute.
 */
details?: string,

/**
 * The error code. If you just set errorCode, the message for the error code is automatically
 * retrieved from the server and displayed in the error dialog.
 * If you specify an invalid errorCode value, an error dialog with a default error message is displyed.
 */
errorCode?: number,

/**
 * The message to be displayed in the error dialog.
 */
message?: string
} 

declare interface Navigation$FileDetails {

/**
 * Contents of the file.
 */
fileContent: string,

/**
 * Name of the file.
 */
fileName: string,

/**
 * Size of the file in KB.
 */
fileSize: number,

/**
 * String. MIME type of the file.
 */
mimeType: string
} 


/**
 * Entity form options for opening the form
 */
declare interface Navigation$EntityFormOptions {

/**
 * Indicates whether to display the command bar.If you do not specify this parameter, the command bar is displayed by default.
 */
cmdbar?: boolean,

/**
 * Designates a record that will provide default values based on mapped attribute values.The lookup object has the following String properties: entityType, id, and name (optional).
 */
createFromEntity?: Xrm$LookupValue,

/**
 * ID of the entity record to display the form for.
 */
entityId?: string,

/**
 * Logical name of the entity to display the form for.
 */
entityName?: string,

/**
 * ID of the form instance to be displayed.
 */
formId?: string,

/**
 * Height of the form window to be displayed in pixels.
 */
height?: number,

/**
 * Undocumented at this time
 */
isCrossEntityNavigate?: boolean,

/**
 * Undocumented at this time
 */
isOfflineSyncError?: boolean,

/**
 * Controls whether the navigation bar is displayed and whether application navigation is available using the areas and subareas defined in the sitemap.Valid vlaues are: "on", "off", or "entity".
 * * on: The navigation bar is displayed.This is the default behavior if the navBar parameter is not used.
 * * off: The navigation bar is not displayed.People can navigate using other user interface elements or the back and forward buttons.
 * * entity: On an entity form, only the navigation options for related entities are available.After navigating to a related entity, a back button is displayed in the navigation bar to allow returning to the original record.
 */
navBar?: Url$Url$NavBarDisplay,

/**
 * Indicates whether to display form in a new window.
 */
openInNewWindow?: boolean,

/**
 * Specify one of the following values for the window position of the form on the screen:
 * * 1:center
 * * 2:side
 */
windowPosition?: XrmEnum$XrmEnum$WindowPositions,

/**
 * ID of the business process to be displayed on the form.
 */
processId?: string,

/**
 * ID of the business process instance to be displayed on the form.
 */
processInstanceId?: string,

/**
 * Define a relationship object to display the related records on the form.
 */
relationship?: Navigation$Relationship,

/**
 * ID of the selected stage in business process instance.
 */
selectedStageId?: string,

/**
 * Indicates whether to open a quick create form.
 */
useQuickCreateForm?: boolean,

/**
 * Width of the form window to be displayed in pixels.
 */
width?: number
} 

declare interface Navigation$Relationship {

/**
 * Name of the attribute used for relationship.
 */
attributeName: string,

/**
 * Name of the relationship.
 */
name: string,

/**
 * Name of the navigation property for this relationship.
 */
navigationPropertyName?: string,

/**
 * Relationship type.Specify one of the following values:
 * * 0:OneToMany
 * * 1:ManyToMany
 */
relationshipType?: XrmEnum$XrmEnum$RelationshipType,

/**
 * Role type in relationship.Specify one of the following values:
 * * 1:Referencing
 * * 2:AssociationEntity
 */
roleType?: XrmEnum$XrmEnum$RoleType
} 


/**
 * Interface for Xrm.Page.ui.navigation.
 * @deprecated Use {@link Xrm.Controls.Navigation} instead.
 */
declare type Xrm$Navigation = {

/**
 * A reference to the collection of available navigation items.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
items: Collection$Collection$ItemCollection<Controls$NavigationItem>,

/**
 * Displays an alert dialog containing a message and a button.
 * @param alertStrings The strings to be used in the alert dialog.
 * @param alertOptions The height and width options for alert dialog
 */
openAlertDialog(
alertStrings: Xrm$Navigation.Navigation$AlertStrings,
alertOptions?: Xrm$Navigation.Navigation$DialogSizeOptions): Async$Async$PromiseLike<any>,

/**
 * Displays a confirmation dialog box containing a message and two buttons.
 * @param confirmStrings The strings to be used in the confirm dialog.
 * @param confirmOptions The height and width options for alert dialog
 */
openConfirmDialog(
confirmStrings: Xrm$Navigation.Navigation$ConfirmStrings,
confirmOptions?: Xrm$Navigation.Navigation$DialogSizeOptions): Async$Async$PromiseLike<Xrm$Navigation.Navigation$ConfirmResult>,

/**
 * Displays an error dialog.
 * @param confirmStrings The strings to be used in the confirm dialog.
 * @param confirmOptions The height and width options for alert dialog
 */
openErrorDialog(
errorOptions: Xrm$Navigation.Navigation$ErrorDialogOptions): Async$Async$PromiseLike<any>,

/**
 * Opens a file.
 */
openFile(
file: Xrm$Navigation.Navigation$FileDetails,
openFileOptions?: XrmEnum$XrmEnum$OpenFileOptions): void,

/**
 * Opens an entity form or a quick create form.
 */
openForm(
entityFormOptions: Xrm$Navigation.Navigation$EntityFormOptions,
formParameters?: Xrm$Utility.Utility$OpenParameters): Async$Async$PromiseLike<Xrm$Navigation.Navigation$OpenFormResult>,

/**
 * Opens a URL, including file URLs.
 * @param url URL to open.
 * @param openUrlOptions Options to open the URL
 */
openUrl(
url: string,
openUrlOptions?: Xrm$Navigation.Navigation$DialogSizeOptions): void,

/**
 * Opens an HTML web resource.
 * @param webResourceName Name of the HTML web resource.
 * @param windowOptions (Optional) Window options for opening the web resource.
                           It is advised to use encodeURIcomponent() to encode the value.
 */
openWebResource(
webResourceName: string,
windowOptions?: Xrm$Navigation.Navigation$OpenWebresourceOptions,
data?: string): void
} & Controls$Xrm$Navigation



/**
 * Types returned by a call to getEntityMetadata
 */
declare interface Metadata$EntityMetadata {
ActivityTypeMask: number,

/**
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
Attributes: Collection$Collection$StringIndexableItemCollection<Metadata$AttributeMetadata>,
AutoRouteToOwnerQueue: boolean,
CanEnableSyncToExternalSearchIndex: boolean,
CanBeInManyToMany: boolean,
CanBePrimaryEntityInRelationship: boolean,
CanBeRelatedEntityInRelationship: boolean,
CanCreateAttributes: boolean,
CanCreateCharts: boolean,
CanCreateForms: boolean,
CanCreateViews: boolean,
CanModifyAdditionalSettings: boolean,
CanTriggerWorkflow: boolean,
Description: Metadata$Label,
DisplayCollectionName: Metadata$Label,
DisplayName: Metadata$Label,
EntityColor: string,
EntitySetName: string,
IconLargeName: string,
IconMediumName: string,
IconSmallName: string,
IsActivity: boolean,
IsActivityParty: boolean,
IsAuditEnabled: boolean,
IsAvailableOffline: boolean,
IsBPFEntity: boolean,
IsChildEntity: boolean,
IsConnectionsEnabled: boolean,
IsCustomEntity: boolean,
IsCustomizable: boolean,
IsDocumentManagementEnabled: boolean,
IsDuplicateDetectionEnabled: boolean,
IsEnabledForCharts: boolean,
IsOneNotIntegrationEnabled: boolean,
IsOptimisitcConcurrencyEnabled: boolean,
IsQuickCreateEnabled: boolean,
IsImportable: boolean,
IsIntersect: boolean,
IsMailMergeEnabled: boolean,
IsManaged: boolean,
IsMappable: boolean,
IsReadingPaneEnabled: boolean,
IsRenameable: boolean,
IsStateModelAware: boolean,
IsValidForAdvancedFind: boolean,
IsValidForQueue: boolean,
IsVisibleInMobileClient: boolean,
LogicalCollectionName: string,
LogicalName: string,
ObjectTypeCode: number,
OwnershipTypeCode: number,
PrimaryIdAttribute: string,
PrimaryNameAttribute: string,
RecurrenceBaseEntityLogicalName: string,
PrimaryImageAttribute: string
} 


/**
 * Type to hold Labels as part of the EntityMetadata
 */
declare interface Metadata$Label {

/**
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
LocalizedLabels: Metadata$LocalizedLabel[],
UserLocalizedLabel: Metadata$LocalizedLabel
} 


/**
 * Type to hold a Label as part of the EntityMetadata
 */
declare interface Metadata$LocalizedLabel {
Metadata$Label: string,
LanguageCode: number
} 


/**
 * Type to hold the Attribute metadata as part of the EntityMetadata
 */
declare interface Metadata$AttributeMetadata {
defaultFormValue: number,

/**
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
options: string[],
logicalName: string,
displayName: string,
attributeType: XrmEnum$XrmEnum$AttributeTypeCode,
entityLogicalName: string,

/**
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
 */
optionSet: Metadata$OptionMetadata[]
} 


/**
 * Type to hold the optionset metadata as part of the EntityMetadata
 */
declare interface Metadata$OptionMetadata {
Value: number,
Color: string,
IsManaged: boolean,
ExternalValue: any,
MetadataId: string,
HasChanged: boolean,
State: number,
TransitionData: any,
Metadata$Label: Metadata$Label,
Description: Metadata$Label
} 


/**
 * Xrm.Device.captureAudio/captureImage/captureVideo response
 */
declare interface Device$CaptureFileResponse {

/**
 * Base64 encoded contents of the file.
 */
fileContent: string,

/**
 * Name of the audio file.
 */
fileName: string,

/**
 * Size of the file in KB.
 */
fileSize: number,

/**
 * File MIME type.
 */
mimeType: string
} 


/**
 * Options for Xrm.Device.captureImage
 */
declare interface Device$CaptureImageOptions {

/**
 * Indicates whether to edit the image before saving.
 */
allowEdit: boolean,

/**
 * Height of the image to capture.
 */
height: number,

/**
 * Indicates whether to capture image using the front camera of the device.
 */
preferFrontCamera: boolean,

/**
 * Quality of the image file in percentage. Number.
 */
quality: number,

/**
 * Width of the image to capture
 */
width: number
} 


/**
 * Interface for Xrm.Device.getCurrentPosition response
 */
declare interface Device$GetCurrentPositionResponse {

/**
 * Contains a set of geographic coordinates along with associated accuracy as well as a set of other optional attributes such as altitude and speed.
 */
coords: any,

/**
 * Represents the time when the object was acquired and is represented as DOMTimeStamp.
 */
timestamp: number
} 


/**
 * Posible file types for Xrm.Device.pickFile options
 * @see {@link XrmEnum.DevicePickFileType}
 */
declare type Device$PickFileTypes = "audio" | "video" | "image";


/**
 * Interface for Xrm.Device.pickFile options
 */
declare interface Device$PickFileOptions {

/**
 * Image file types to select.
 */
accept: Device$PickFileTypes,

/**
 * Indicates whether to allow selecting multiple files.
 */
allowMultipleFiles: boolean,

/**
 * Maximum size of the files(s) to be selected.
 */
maximumAllowedFileSize: number
} 


/**
 * Interface for Xrm.Device API
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device External Link: Xrm.Device (Client API reference)}
 */
declare interface Xrm$Device {

/**
 * Invokes the device microphone to record audio.
 * @returns On success, returns Base64 encoded file
 */
captureAudio(): Async$Async$PromiseLike<Xrm$Device.Device$CaptureFileResponse>,

/**
 * Invokes the device camera to capture an image.
 * @returns On success, returns Base64 encoded file
 */
captureImage(
imageOptions: Xrm$Device.Device$CaptureImageOptions): Async$Async$PromiseLike<Xrm$Device.Device$CaptureFileResponse>,

/**
 * Invokes the device camera to capture video.
 * @returns On success, returns Base64 encoded file
 */
captureVideo(): Async$Async$PromiseLike<Xrm$Device.Device$CaptureFileResponse>,

/**
 * Invokes the device camera to scan the barcode information, such as a product number.
 * @returns On success, Barcode value is returned as a String
 */
getBarcodeValue(): Async$Async$PromiseLike<string>,

/**
 * Returns the current location using the device geolocation capability.
 * @returns On success, returns current geolocation information
 */
getCurrentPosition(): Async$Async$PromiseLike<Xrm$Device.Device$GetCurrentPositionResponse>,

/**
 * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
 * @returns On success, returns an array of files
 */
pickFile(
pickFileOptions: Xrm$Device.Device$PickFileOptions): Async$Async$PromiseLike<Xrm$Device.Device$CaptureFileResponse[]>
} 


/**
 * Interface for Xrm.Encoding API
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding External Link: Xrm.Encoding (Client API reference)}
 */
declare interface Xrm$Encoding {

/**
 * Applies attribute encoding to a string.
 * @param arg String to be encoded.
 * @returns Encoded string.
 */
xmlAttributeEncode(arg: string): string,

/**
 * Applies XML encoding to a string.
 * @param arg String to be encoded.
 * @returns Encoded string.
 */
xmlEncode(arg: string): string
} 


/**
 * Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi External Link: Xrm.WebApi (Client API reference)}
 */
declare type Xrm$WebApi = {

/**
 * Returns a boolean value indicating whether an entity is offline enabled.
 * @param entityLogicalName Logical name of the entity. For example: "account".
 * @returns true if the entity is offline enabled; otherwise false.
 */
isAvailableOffline(entityLogicalName: string): boolean,

/**
 * Provides methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement when connected to the Customer Engagement server (online mode).
 */
online: Xrm$WebApiOnline,

/**
 * Provides methods to create and manage records in the Dynamics 365 Customer Engagement mobile clients while working in the offline mode.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/offline}
 */
offline: Xrm$WebApiOffline
} & Xrm$WebApiOffline



/**
 * Interface for the Xrm.WebApi.online API
 * Execute and ExecuteMultiple are only available when online, not offline.
 */
declare type Xrm$WebApiOnline = {

/**
 * Execute a single action, function, or CRUD operation.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/execute External Link: execute (Client API reference)}
 * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
 * @remarks The object exposes a getMetadata method that lets you define the metadata for the action, function or CRUD request you want to execute.<BR>
**The getMetadata method has the following parameters**:
- boundParameter: (Optional) String. The name of the bound parameter for the action or function to execute.
* Specify undefined if you are executing a CRUD request.
* Specify null if the action or function to execute is not bound to any entity.
* Specify entity logical name or entity set name in case the action or function to execute is bound to one.
- operationName: (Optional). String. Name of the action, function, or one of the following values if you are executing a CRUD request: "Create", "Retrieve", "RetrieveMultiple", "Update", or "Delete".
- operationType: (Optional). Number. Indicates the type of operation you are executing; specify one of the following values:
* 0: Action
* 1: Function
* 2: CRUD
- parameterTypes: Object. The metadata for parameter types. The object has the following attributes:
- enumProperties: (Optional) Object. The metadata for enum types. The object has two string attributes: name and value
- structuralProperty: Number. The category of the parameter type. Specify one of the following values:
* 0: Unknown
* 1: PrimitiveType
* 2: ComplexType
* 3: EnumerationType
* 4: Collection
* 5: EntityType
- typeName: String. The fully qualified name of the parameter type.
 */
execute(request: any): Async$Async$PromiseLike<Xrm$ExecuteResponse>,

/**
 * Execute a collection of action, function, or CRUD operations.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/executemultiple External Link: executeMultiple (Client API reference)}
 * @param request An array of one of one of the following types:
-objects where each object is an action, function, or CRUD request that you want to execute
* against the Web API endpoint. Each object exposes a getMetadata method that lets you define
the metadata for the action, function or CRUD request you want to execute. This is the same
object that you pass in the execute method. For information about the object, see execute.
-change set (an array of objects), where each object in the change set is as defined above.
* In this case, all the request objects specified in the change set will get executed in a
transaction.
 */
executeMultiple(request: any[]): Async$Async$PromiseLike<Xrm$ExecuteResponse[]>
} & Xrm$WebApiOffline



/**
 * Interface for the Xrm.WebApi.offline API
 */
declare interface Xrm$WebApiOffline {

/**
 * Creates an entity record
 * @param entityLogicalName Logical name of the entity you want to create. For example: "account".
 * @param record A JSON object defining the attributes and values for the new entity record.
 * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/createrecord External Link: createRecord (Client API reference)}
 */
createRecord(entityLogicalName: string, record: any): Async$Async$PromiseLike<string>,

/**
 * Deletes an entity record.
 * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
 * @param id GUID of the entity record you want to delete.
 * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/deleterecord External Link: deleteRecord (Client API reference)}
 */
deleteRecord(entityLogicalName: string, id: string): Async$Async$PromiseLike<string>,

/**
 * Retrieves an entity record.
 * @param entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
 * @param id GUID of the entity record you want to retrieve.
 * @param options (Optional) OData system query options, $select and $expand, to retrieve your data.
- Use the $select system query option to limit the properties returned by including a comma-separated
list of property names. This is an important performance best practice. If properties aren’t
specified using $select, all properties will be returned.
- Use the $expand system query option to control what data from related entities is returned. If you
just include the name of the navigation property, you’ll receive all the properties for related
records. You can limit the properties returned for related records using the $select system query
option in parentheses after the navigation property name. Use this for both single-valued and
collection-valued navigation properties.
- You can also specify multiple query options by using & to separate the query options.
 * @example <caption>options example:</caption>
options: $select=name&$expand=primarycontactid($select=contactid,fullname)
 * @returns On success, returns a promise containing a JSON object with the retrieved attributes and their values.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrieverecord External Link: retrieveRecord (Client API reference)}
 */
retrieveRecord(
entityLogicalName: string,
id: string,
options?: string): Async$Async$PromiseLike<any>,

/**
 * Retrieves a collection of entity records.
 * @param entityLogicalName The entity logical name of the records you want to retrieve. For example: "account".
 * @param options (Optional) OData system query options or FetchXML query to retrieve your data.
* Following system query options are supported: $select, $top, $filter, $expand, and $orderby.
* To specify a FetchXML query, use the fetchXml attribute to specify the query.
* NOTE: You must always use the $select system query option to limit the properties returned for an entity
record by including a comma-separated list of property names. This is an important performance best practice.
* If properties aren’t specified using $select, all properties will be returned.
* You can specify multiple system query options by using & to separate the query options.
 * @param maxPageSize (Optional) Specify a positive number that indicates the number of entity records to be returned per page.
* If you do not specify this parameter, the default value is passed as 5000. If the number of records being retrieved is more than the specified
maxPageSize value, nextLink attribute in the returned promise object will contain a link to retrieve the next set of entities.
 * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrievemultiplerecords External Link: retrieveMultipleRecords (Client API reference)}
 */
retrieveMultipleRecords(
entityLogicalName: string,
options?: string,
maxPageSize?: number): Async$Async$PromiseLike<Xrm$RetrieveMultipleResult>,

/**
 * Updates an entity record.
 * @param entityLogicalName The entity logical name of the record you want to update. For example: "account".
 * @param id GUID of the entity record you want to update.
 * @param Data A JSON object containing key: value pairs, where key is the property of the entity and value is the value of the property you want update.
 * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/updaterecord External Link: updateRecord (Client API reference)}
 */
updateRecord(entityLogicalName: string, id: string, data: any): Async$Async$PromiseLike<any>
} 


/**
 * Interface for the Promise error response arguments
 */
declare interface Xrm$ErrorResponse {
errorCode: number,
message: string
} 


/**
 * Interface for the WebAPI RetrieveMultiple request response
 */
declare interface Xrm$RetrieveMultipleResult {

/**
 * An array of JSON objects, where each object represents the retrieved entity record containing attributes and their values as key: value pairs. The Id of the entity record is retrieved by default.
 */
entities: any[],

/**
 * If the number of records being retrieved is more than the value specified in the maxPageSize parameter, this attribute returns the URL to return next set of records.
 */
nextLink: string
} 


/**
 * Interface for the WebAPI Execute request response
 */
declare interface Xrm$ExecuteResponse {

/**
 * (Optional). Object.Response body.
 */
body: string,

/**
 * Response headers.
 */
headers: any,

/**
 * Indicates whether the request was successful.
 */
ok: boolean,

/**
 * Numeric value in the response status code.
 * @example 200
 */
status: number,

/**
 * Description of the response status code.
 * @example "OK"
 */
statusText: string,

/**
 * Response type.Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
 */
type: string,

/**
 * Request URL of the action, function, or CRUD request that was sent to the Web API endpoint.
 */
url: string
} 
	
/**
 * Enumeration of entity form states/types.
 */
declare  class XrmEnum$FormType {
  constructor(...args: empty): mixed;
static +Undefined: Class<XrmEnum$FormType__Undefined> & XrmEnum$FormType__Undefined & 0;// 0
static +Create: Class<XrmEnum$FormType__Create> & XrmEnum$FormType__Create & 1;// 1
static +Update: Class<XrmEnum$FormType__Update> & XrmEnum$FormType__Update & 2;// 2
static +ReadOnly: Class<XrmEnum$FormType__ReadOnly> & XrmEnum$FormType__ReadOnly & 3;// 3
static +Disabled: Class<XrmEnum$FormType__Disabled> & XrmEnum$FormType__Disabled & 4;// 4
static +BulkEdit: Class<XrmEnum$FormType__BulkEdit> & XrmEnum$FormType__BulkEdit & 6;// 6
static +QuickCreate: Class<XrmEnum$FormType__QuickCreate> & XrmEnum$FormType__QuickCreate & 5;// 5
static +ReadOptimized: Class<XrmEnum$FormType__ReadOptimized> & XrmEnum$FormType__ReadOptimized & 11;// 11

}

declare class XrmEnum$FormType__Undefined mixins XrmEnum$FormType {}
declare class XrmEnum$FormType__Create mixins XrmEnum$FormType {}
declare class XrmEnum$FormType__Update mixins XrmEnum$FormType {}
declare class XrmEnum$FormType__ReadOnly mixins XrmEnum$FormType {}
declare class XrmEnum$FormType__Disabled mixins XrmEnum$FormType {}
declare class XrmEnum$FormType__BulkEdit mixins XrmEnum$FormType {}
declare class XrmEnum$FormType__QuickCreate mixins XrmEnum$FormType {}
declare class XrmEnum$FormType__ReadOptimized mixins XrmEnum$FormType {}



/**
 * Enumeration of entity form save modes.
 */
declare  class XrmEnum$SaveMode {
  constructor(...args: empty): mixed;
static +Save: Class<XrmEnum$SaveMode__Save> & XrmEnum$SaveMode__Save & 1;// 1
static +SaveAndClose: Class<XrmEnum$SaveMode__SaveAndClose> & XrmEnum$SaveMode__SaveAndClose & 2;// 2
static +SaveAndNew: Class<XrmEnum$SaveMode__SaveAndNew> & XrmEnum$SaveMode__SaveAndNew & 59;// 59
static +AutoSave: Class<XrmEnum$SaveMode__AutoSave> & XrmEnum$SaveMode__AutoSave & 70;// 70
static +SaveAsCompleted: Class<XrmEnum$SaveMode__SaveAsCompleted> & XrmEnum$SaveMode__SaveAsCompleted & 58;// 58
static +Deactivate: Class<XrmEnum$SaveMode__Deactivate> & XrmEnum$SaveMode__Deactivate & 5;// 5
static +Reactivate: Class<XrmEnum$SaveMode__Reactivate> & XrmEnum$SaveMode__Reactivate & 6;// 6
static +Assign: Class<XrmEnum$SaveMode__Assign> & XrmEnum$SaveMode__Assign & 47;// 47
static +Send: Class<XrmEnum$SaveMode__Send> & XrmEnum$SaveMode__Send & 7;// 7
static +Qualify: Class<XrmEnum$SaveMode__Qualify> & XrmEnum$SaveMode__Qualify & 16;// 16
static +Disqualify: Class<XrmEnum$SaveMode__Disqualify> & XrmEnum$SaveMode__Disqualify & 15;// 15

}

declare class XrmEnum$SaveMode__Save mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__SaveAndClose mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__SaveAndNew mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__AutoSave mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__SaveAsCompleted mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__Deactivate mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__Reactivate mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__Assign mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__Send mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__Qualify mixins XrmEnum$SaveMode {}
declare class XrmEnum$SaveMode__Disqualify mixins XrmEnum$SaveMode {}



/**
 * Enumeration of stage categories.
 */
declare  class XrmEnum$StageCategory {
  constructor(...args: empty): mixed;
static +Qualify: Class<XrmEnum$StageCategory__Qualify> & XrmEnum$StageCategory__Qualify & 0;// 0
static +Develop: Class<XrmEnum$StageCategory__Develop> & XrmEnum$StageCategory__Develop & 1;// 1
static +Propose: Class<XrmEnum$StageCategory__Propose> & XrmEnum$StageCategory__Propose & 2;// 2
static +Close: Class<XrmEnum$StageCategory__Close> & XrmEnum$StageCategory__Close & 3;// 3
static +Identify: Class<XrmEnum$StageCategory__Identify> & XrmEnum$StageCategory__Identify & 4;// 4
static +Research: Class<XrmEnum$StageCategory__Research> & XrmEnum$StageCategory__Research & 5;// 5
static +Resolve: Class<XrmEnum$StageCategory__Resolve> & XrmEnum$StageCategory__Resolve & 6;// 6

}

declare class XrmEnum$StageCategory__Qualify mixins XrmEnum$StageCategory {}
declare class XrmEnum$StageCategory__Develop mixins XrmEnum$StageCategory {}
declare class XrmEnum$StageCategory__Propose mixins XrmEnum$StageCategory {}
declare class XrmEnum$StageCategory__Close mixins XrmEnum$StageCategory {}
declare class XrmEnum$StageCategory__Identify mixins XrmEnum$StageCategory {}
declare class XrmEnum$StageCategory__Research mixins XrmEnum$StageCategory {}
declare class XrmEnum$StageCategory__Resolve mixins XrmEnum$StageCategory {}



/**
 * Enumeration of grid control context resolutions.
 */
declare  class XrmEnum$GridControlContext {
  constructor(...args: empty): mixed;
static +Unknown: Class<XrmEnum$GridControlContext__Unknown> & XrmEnum$GridControlContext__Unknown & 0;// 0
static +RibbonContextForm: Class<XrmEnum$GridControlContext__RibbonContextForm> & XrmEnum$GridControlContext__RibbonContextForm & 1;// 1
static +RibbonContextListing: Class<XrmEnum$GridControlContext__RibbonContextListing> & XrmEnum$GridControlContext__RibbonContextListing & 2;// 2
static +FormContextUnrelated: Class<XrmEnum$GridControlContext__FormContextUnrelated> & XrmEnum$GridControlContext__FormContextUnrelated & 3;// 3
static +FormContextRelated: Class<XrmEnum$GridControlContext__FormContextRelated> & XrmEnum$GridControlContext__FormContextRelated & 4;// 4

}

declare class XrmEnum$GridControlContext__Unknown mixins XrmEnum$GridControlContext {}
declare class XrmEnum$GridControlContext__RibbonContextForm mixins XrmEnum$GridControlContext {}
declare class XrmEnum$GridControlContext__RibbonContextListing mixins XrmEnum$GridControlContext {}
declare class XrmEnum$GridControlContext__FormContextUnrelated mixins XrmEnum$GridControlContext {}
declare class XrmEnum$GridControlContext__FormContextRelated mixins XrmEnum$GridControlContext {}



/**
 * An enumeration for view types.
 */
declare  class XrmEnum$ViewType {
  constructor(...args: empty): mixed;
static +SystemView: Class<XrmEnum$ViewType__SystemView> & XrmEnum$ViewType__SystemView & 1039;// 1039
static +UserView: Class<XrmEnum$ViewType__UserView> & XrmEnum$ViewType__UserView & 4230;// 4230

}

declare class XrmEnum$ViewType__SystemView mixins XrmEnum$ViewType {}
declare class XrmEnum$ViewType__UserView mixins XrmEnum$ViewType {}



/**
 * An enumeration for Attribute Type metadata
 */
declare  class XrmEnum$AttributeTypeCode {
  constructor(...args: empty): mixed;
static +Boolean: Class<XrmEnum$AttributeTypeCode__Boolean> & XrmEnum$AttributeTypeCode__Boolean & 0;// 0
static +Customer: Class<XrmEnum$AttributeTypeCode__Customer> & XrmEnum$AttributeTypeCode__Customer & 1;// 1
static +DateTime: Class<XrmEnum$AttributeTypeCode__DateTime> & XrmEnum$AttributeTypeCode__DateTime & 2;// 2
static +Decimal: Class<XrmEnum$AttributeTypeCode__Decimal> & XrmEnum$AttributeTypeCode__Decimal & 3;// 3
static +Double: Class<XrmEnum$AttributeTypeCode__Double> & XrmEnum$AttributeTypeCode__Double & 4;// 4
static +Integer: Class<XrmEnum$AttributeTypeCode__Integer> & XrmEnum$AttributeTypeCode__Integer & 5;// 5
static +Lookup: Class<XrmEnum$AttributeTypeCode__Lookup> & XrmEnum$AttributeTypeCode__Lookup & 6;// 6
static +Memo: Class<XrmEnum$AttributeTypeCode__Memo> & XrmEnum$AttributeTypeCode__Memo & 7;// 7
static +Money: Class<XrmEnum$AttributeTypeCode__Money> & XrmEnum$AttributeTypeCode__Money & 8;// 8
static +Owner: Class<XrmEnum$AttributeTypeCode__Owner> & XrmEnum$AttributeTypeCode__Owner & 9;// 9
static +PartyList: Class<XrmEnum$AttributeTypeCode__PartyList> & XrmEnum$AttributeTypeCode__PartyList & 10;// 10
static +Picklist: Class<XrmEnum$AttributeTypeCode__Picklist> & XrmEnum$AttributeTypeCode__Picklist & 11;// 11
static +State: Class<XrmEnum$AttributeTypeCode__State> & XrmEnum$AttributeTypeCode__State & 12;// 12
static +Status: Class<XrmEnum$AttributeTypeCode__Status> & XrmEnum$AttributeTypeCode__Status & 13;// 13
static +String: Class<XrmEnum$AttributeTypeCode__String> & XrmEnum$AttributeTypeCode__String & 14;// 14
static +Uniqueidentifier: Class<XrmEnum$AttributeTypeCode__Uniqueidentifier> & XrmEnum$AttributeTypeCode__Uniqueidentifier & 15;// 15
static +CalendarRules: Class<XrmEnum$AttributeTypeCode__CalendarRules> & XrmEnum$AttributeTypeCode__CalendarRules & 16;// 16
static +Virtual: Class<XrmEnum$AttributeTypeCode__Virtual> & XrmEnum$AttributeTypeCode__Virtual & 17;// 17
static +BigInt: Class<XrmEnum$AttributeTypeCode__BigInt> & XrmEnum$AttributeTypeCode__BigInt & 18;// 18
static +ManagedProperty: Class<XrmEnum$AttributeTypeCode__ManagedProperty> & XrmEnum$AttributeTypeCode__ManagedProperty & 19;// 19
static +EntityName: Class<XrmEnum$AttributeTypeCode__EntityName> & XrmEnum$AttributeTypeCode__EntityName & 20;// 20

}

declare class XrmEnum$AttributeTypeCode__Boolean mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Customer mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__DateTime mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Decimal mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Double mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Integer mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Lookup mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Memo mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Money mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Owner mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__PartyList mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Picklist mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__State mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Status mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__String mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Uniqueidentifier mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__CalendarRules mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__Virtual mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__BigInt mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__ManagedProperty mixins XrmEnum$AttributeTypeCode {}
declare class XrmEnum$AttributeTypeCode__EntityName mixins XrmEnum$AttributeTypeCode {}



/**
 * An enumeration for Attribute required level metadata
 */
declare  class XrmEnum$AttributeRequiredLevel {
  constructor(...args: empty): mixed;
static +None: Class<XrmEnum$AttributeRequiredLevel__None> & XrmEnum$AttributeRequiredLevel__None & 0;// 0
static +SystemRequired: Class<XrmEnum$AttributeRequiredLevel__SystemRequired> & XrmEnum$AttributeRequiredLevel__SystemRequired & 1;// 1
static +ApplicationRequired: Class<XrmEnum$AttributeRequiredLevel__ApplicationRequired> & XrmEnum$AttributeRequiredLevel__ApplicationRequired & 2;// 2
static +Recommended: Class<XrmEnum$AttributeRequiredLevel__Recommended> & XrmEnum$AttributeRequiredLevel__Recommended & 3;// 3

}

declare class XrmEnum$AttributeRequiredLevel__None mixins XrmEnum$AttributeRequiredLevel {}
declare class XrmEnum$AttributeRequiredLevel__SystemRequired mixins XrmEnum$AttributeRequiredLevel {}
declare class XrmEnum$AttributeRequiredLevel__ApplicationRequired mixins XrmEnum$AttributeRequiredLevel {}
declare class XrmEnum$AttributeRequiredLevel__Recommended mixins XrmEnum$AttributeRequiredLevel {}



/**
 * An enumeration for open file dialog options
 */
declare  class XrmEnum$OpenFileOptions {
  constructor(...args: empty): mixed;
static +Open: Class<XrmEnum$OpenFileOptions__Open> & XrmEnum$OpenFileOptions__Open & 1;// 1
static +Save: Class<XrmEnum$OpenFileOptions__Save> & XrmEnum$OpenFileOptions__Save & 2;// 2

}

declare class XrmEnum$OpenFileOptions__Open mixins XrmEnum$OpenFileOptions {}
declare class XrmEnum$OpenFileOptions__Save mixins XrmEnum$OpenFileOptions {}



/**
 * An enumeration for window positions when opening a new window
 */
declare  class XrmEnum$WindowPositions {
  constructor(...args: empty): mixed;
static +Center: Class<XrmEnum$WindowPositions__Center> & XrmEnum$WindowPositions__Center & 1;// 1
static +Side: Class<XrmEnum$WindowPositions__Side> & XrmEnum$WindowPositions__Side & 2;// 2

}

declare class XrmEnum$WindowPositions__Center mixins XrmEnum$WindowPositions {}
declare class XrmEnum$WindowPositions__Side mixins XrmEnum$WindowPositions {}



/**
 * An enumeration for Relationship Type Metadata
 */
declare  class XrmEnum$RelationshipType {
  constructor(...args: empty): mixed;
static +OneToMany: Class<XrmEnum$RelationshipType__OneToMany> & XrmEnum$RelationshipType__OneToMany & 0;// 0
static +ManyToMany: Class<XrmEnum$RelationshipType__ManyToMany> & XrmEnum$RelationshipType__ManyToMany & 1;// 1

}

declare class XrmEnum$RelationshipType__OneToMany mixins XrmEnum$RelationshipType {}
declare class XrmEnum$RelationshipType__ManyToMany mixins XrmEnum$RelationshipType {}



/**
 * An enumeration for Relationship Role Type Metadata
 */
declare  class XrmEnum$RoleType {
  constructor(...args: empty): mixed;
static +Referencing: Class<XrmEnum$RoleType__Referencing> & XrmEnum$RoleType__Referencing & 1;// 1
static +AssociationEntity: Class<XrmEnum$RoleType__AssociationEntity> & XrmEnum$RoleType__AssociationEntity & 2;// 2

}

declare class XrmEnum$RoleType__Referencing mixins XrmEnum$RoleType {}
declare class XrmEnum$RoleType__AssociationEntity mixins XrmEnum$RoleType {}


declare  class XrmEnum$ClientFormFactor {
  constructor(...args: empty): mixed;
static +Unknown: Class<XrmEnum$ClientFormFactor__Unknown> & XrmEnum$ClientFormFactor__Unknown & 1;// 1
static +Desktop: Class<XrmEnum$ClientFormFactor__Desktop> & XrmEnum$ClientFormFactor__Desktop & 2;// 2
static +Tablet: Class<XrmEnum$ClientFormFactor__Tablet> & XrmEnum$ClientFormFactor__Tablet & 3;// 3
static +Phone: Class<XrmEnum$ClientFormFactor__Phone> & XrmEnum$ClientFormFactor__Phone & 4;// 4

}

declare class XrmEnum$ClientFormFactor__Unknown mixins XrmEnum$ClientFormFactor {}
declare class XrmEnum$ClientFormFactor__Desktop mixins XrmEnum$ClientFormFactor {}
declare class XrmEnum$ClientFormFactor__Tablet mixins XrmEnum$ClientFormFactor {}
declare class XrmEnum$ClientFormFactor__Phone mixins XrmEnum$ClientFormFactor {}



/**
 * Constant Enum: Client Types for {@link ClientContext.getClient clientContext.getClient()}.
 * @see {@link Xrm.Client}
 */
declare  class XrmEnum$Client {
  constructor(...args: empty): mixed;
static +Web: Class<XrmEnum$Client__Web> & XrmEnum$Client__Web & "Web";// "Web"
static +Outlook: Class<XrmEnum$Client__Outlook> & XrmEnum$Client__Outlook & "Outlook";// "Outlook"
static +Mobile: Class<XrmEnum$Client__Mobile> & XrmEnum$Client__Mobile & "Mobile";// "Mobile"
static +UnifiedServiceDesk: Class<XrmEnum$Client__UnifiedServiceDesk> & XrmEnum$Client__UnifiedServiceDesk & "UnifiedServiceDesk";// "UnifiedServiceDesk"
static +USD: Class<XrmEnum$Client__USD> & XrmEnum$Client__USD & "UnifiedServiceDesk";// "UnifiedServiceDesk"

}

declare class XrmEnum$Client__Web mixins XrmEnum$Client {}
declare class XrmEnum$Client__Outlook mixins XrmEnum$Client {}
declare class XrmEnum$Client__Mobile mixins XrmEnum$Client {}
declare class XrmEnum$Client__UnifiedServiceDesk mixins XrmEnum$Client {}
declare class XrmEnum$Client__USD mixins XrmEnum$Client {}



/**
 * Constant Enum: Client States for {@link ClientContext.getClientState clientContext.getClientState()}.
 * @see {@link Xrm.ClientState}
 */
declare  class XrmEnum$ClientState {
  constructor(...args: empty): mixed;
static +Online: Class<XrmEnum$ClientState__Online> & XrmEnum$ClientState__Online & "Online";// "Online"
static +Offline: Class<XrmEnum$ClientState__Offline> & XrmEnum$ClientState__Offline & "Offline";// "Offline"

}

declare class XrmEnum$ClientState__Online mixins XrmEnum$ClientState {}
declare class XrmEnum$ClientState__Offline mixins XrmEnum$ClientState {}



/**
 * Constant Enum: Display States for setDisplayState() on {@link Controls.ProcessControl.setDisplayState Processes} and {@link Controls.Tab.setDisplayState Tabs}.
 * @see {@link Xrm.DisplayState}
 */
declare  class XrmEnum$DisplayState {
  constructor(...args: empty): mixed;
static +Expanded: Class<XrmEnum$DisplayState__Expanded> & XrmEnum$DisplayState__Expanded & "expanded";// "expanded"
static +Collapsed: Class<XrmEnum$DisplayState__Collapsed> & XrmEnum$DisplayState__Collapsed & "collapsed";// "collapsed"

}

declare class XrmEnum$DisplayState__Expanded mixins XrmEnum$DisplayState {}
declare class XrmEnum$DisplayState__Collapsed mixins XrmEnum$DisplayState {}



/**
 * Constant Enum: {@link Entity.save Entity} Save Modes
 * @see {@link Xrm.EntitySaveMode}
 * @see {@link Entity}
 * @see {@link Entity.save}
 */
declare  class XrmEnum$EntitySaveMode {
  constructor(...args: empty): mixed;
static +SaveAndClose: Class<XrmEnum$EntitySaveMode__SaveAndClose> & XrmEnum$EntitySaveMode__SaveAndClose & "saveandclose";// "saveandclose"
static +SaveAndNew: Class<XrmEnum$EntitySaveMode__SaveAndNew> & XrmEnum$EntitySaveMode__SaveAndNew & "saveandnew";// "saveandnew"

}

declare class XrmEnum$EntitySaveMode__SaveAndClose mixins XrmEnum$EntitySaveMode {}
declare class XrmEnum$EntitySaveMode__SaveAndNew mixins XrmEnum$EntitySaveMode {}



/**
 * Constant Enum: Form Notification Levels for {@link Ui.setFormNotification formContext.ui.setFormNotification()}.
 * @see {@link Xrm.FormNotificationLevel}
 */
declare  class XrmEnum$FormNotificationLevel {
  constructor(...args: empty): mixed;
static +Error: Class<XrmEnum$FormNotificationLevel__Error> & XrmEnum$FormNotificationLevel__Error & "ERROR";// "ERROR"
static +Info: Class<XrmEnum$FormNotificationLevel__Info> & XrmEnum$FormNotificationLevel__Info & "INFO";// "INFO"
static +Warning: Class<XrmEnum$FormNotificationLevel__Warning> & XrmEnum$FormNotificationLevel__Warning & "WARNING";// "WARNING"

}

declare class XrmEnum$FormNotificationLevel__Error mixins XrmEnum$FormNotificationLevel {}
declare class XrmEnum$FormNotificationLevel__Info mixins XrmEnum$FormNotificationLevel {}
declare class XrmEnum$FormNotificationLevel__Warning mixins XrmEnum$FormNotificationLevel {}



/**
 * Constant Enum: Submit Modes for {@link Attributes.Attribute.setSubmitMode} Attributes.Attribute.setSubmitMode().
 * @see {@link Xrm.SubmitMode}
 */
declare  class XrmEnum$SubmitMode {
  constructor(...args: empty): mixed;
static +Always: Class<XrmEnum$SubmitMode__Always> & XrmEnum$SubmitMode__Always & "always";// "always"
static +Dirty: Class<XrmEnum$SubmitMode__Dirty> & XrmEnum$SubmitMode__Dirty & "dirty";// "dirty"
static +Never: Class<XrmEnum$SubmitMode__Never> & XrmEnum$SubmitMode__Never & "never";// "never"

}

declare class XrmEnum$SubmitMode__Always mixins XrmEnum$SubmitMode {}
declare class XrmEnum$SubmitMode__Dirty mixins XrmEnum$SubmitMode {}
declare class XrmEnum$SubmitMode__Never mixins XrmEnum$SubmitMode {}



/**
 * Constant Enum: Themes for {@link GlobalContext.getCurrentTheme globalContext.getCurrentTheme()}.
 * @remarks getCurrentTheme() does not work with Dynamics CRM for tablets or in the unified interface.
 */
declare  class XrmEnum$Theme {
  constructor(...args: empty): mixed;
static +Default: Class<XrmEnum$Theme__Default> & XrmEnum$Theme__Default & "default";// "default"
static +Office12Blue: Class<XrmEnum$Theme__Office12Blue> & XrmEnum$Theme__Office12Blue & "Office12Blue";// "Office12Blue"
static +Office14Silver: Class<XrmEnum$Theme__Office14Silver> & XrmEnum$Theme__Office14Silver & "Office14Silver";// "Office14Silver"

}

declare class XrmEnum$Theme__Default mixins XrmEnum$Theme {}
declare class XrmEnum$Theme__Office12Blue mixins XrmEnum$Theme {}
declare class XrmEnum$Theme__Office14Silver mixins XrmEnum$Theme {}



/**
 * Constant Enum: Settings for {@link GlobalContext.getAdvancedConfigSetting globalContext.getAdvancedConfigSetting(setting)}
 */
declare  class XrmEnum$AdvancedConfigSettingOption {
  constructor(...args: empty): mixed;
static +MaxChildIncidentNumber: Class<XrmEnum$AdvancedConfigSettingOption__MaxChildIncidentNumber> & XrmEnum$AdvancedConfigSettingOption__MaxChildIncidentNumber & "MaxChildIncidentNumber";// "MaxChildIncidentNumber"
static +MaxIncidentMergeNumber: Class<XrmEnum$AdvancedConfigSettingOption__MaxIncidentMergeNumber> & XrmEnum$AdvancedConfigSettingOption__MaxIncidentMergeNumber & "MaxIncidentMergeNumber";// "MaxIncidentMergeNumber"

}

declare class XrmEnum$AdvancedConfigSettingOption__MaxChildIncidentNumber mixins XrmEnum$AdvancedConfigSettingOption {}
declare class XrmEnum$AdvancedConfigSettingOption__MaxIncidentMergeNumber mixins XrmEnum$AdvancedConfigSettingOption {}



/**
 * Constant Enum: Requirement Level for {@link Attributes.Attribute.getRequiredLevel Attributes.Attribute.getRequiredLevel()} and
 * {@link Attributes.Attribute.setRequiredLevel Attributes.Attribute.setRequiredLevel()}.
 * @see {@link Xrm.Attributes.RequirementLevel}
 */
declare  class XrmEnum$AttributeRequirementLevel {
  constructor(...args: empty): mixed;
static +None: Class<XrmEnum$AttributeRequirementLevel__None> & XrmEnum$AttributeRequirementLevel__None & "none";// "none"
static +Recommended: Class<XrmEnum$AttributeRequirementLevel__Recommended> & XrmEnum$AttributeRequirementLevel__Recommended & "recommended";// "recommended"
static +Required: Class<XrmEnum$AttributeRequirementLevel__Required> & XrmEnum$AttributeRequirementLevel__Required & "required";// "required"

}

declare class XrmEnum$AttributeRequirementLevel__None mixins XrmEnum$AttributeRequirementLevel {}
declare class XrmEnum$AttributeRequirementLevel__Recommended mixins XrmEnum$AttributeRequirementLevel {}
declare class XrmEnum$AttributeRequirementLevel__Required mixins XrmEnum$AttributeRequirementLevel {}



/**
 * Constant Enum: Date attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.DateAttribute DateAttribute}.
 * @see {@link Xrm.Attributes.DateAttributeFormat}
 */
declare  class XrmEnum$DateAttributeFormat {
  constructor(...args: empty): mixed;
static +Date: Class<XrmEnum$DateAttributeFormat__Date> & XrmEnum$DateAttributeFormat__Date & "date";// "date"
static +DateTime: Class<XrmEnum$DateAttributeFormat__DateTime> & XrmEnum$DateAttributeFormat__DateTime & "datetime";// "datetime"

}

declare class XrmEnum$DateAttributeFormat__Date mixins XrmEnum$DateAttributeFormat {}
declare class XrmEnum$DateAttributeFormat__DateTime mixins XrmEnum$DateAttributeFormat {}



/**
 * Constant Enum: Integer attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.NumberAttribute NumberAttribute}.
 * @see {@link Xrm.Attributes.IntegerAttributeFormat}
 */
declare  class XrmEnum$IntegerAttributeFormat {
  constructor(...args: empty): mixed;
static +Duration: Class<XrmEnum$IntegerAttributeFormat__Duration> & XrmEnum$IntegerAttributeFormat__Duration & "duration";// "duration"
static +None: Class<XrmEnum$IntegerAttributeFormat__None> & XrmEnum$IntegerAttributeFormat__None & "none";// "none"

}

declare class XrmEnum$IntegerAttributeFormat__Duration mixins XrmEnum$IntegerAttributeFormat {}
declare class XrmEnum$IntegerAttributeFormat__None mixins XrmEnum$IntegerAttributeFormat {}



/**
 * Constant Enum: OptionSet attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.OptionSetAttribute OptionSetAttribute}.
 * @see {@link Xrm.Attributes.OptionSetAttributeFormat}
 */
declare  class XrmEnum$OptionSetAttributeFormat {
  constructor(...args: empty): mixed;
static +Language: Class<XrmEnum$OptionSetAttributeFormat__Language> & XrmEnum$OptionSetAttributeFormat__Language & "language";// "language"
static +TimeZone: Class<XrmEnum$OptionSetAttributeFormat__TimeZone> & XrmEnum$OptionSetAttributeFormat__TimeZone & "timezone";// "timezone"

}

declare class XrmEnum$OptionSetAttributeFormat__Language mixins XrmEnum$OptionSetAttributeFormat {}
declare class XrmEnum$OptionSetAttributeFormat__TimeZone mixins XrmEnum$OptionSetAttributeFormat {}



/**
 * Constant Enum: String attribute formats for Attributes.Attribute.getFormat(), used by {@link Attributes.StringAttribute StringAttribute}.
 * @see {@link Xrm.Attributes.StringAttributeFormat}
 */
declare  class XrmEnum$StringAttributeFormat {
  constructor(...args: empty): mixed;
static +Email: Class<XrmEnum$StringAttributeFormat__Email> & XrmEnum$StringAttributeFormat__Email & "email";// "email"
static +Phone: Class<XrmEnum$StringAttributeFormat__Phone> & XrmEnum$StringAttributeFormat__Phone & "phone";// "phone"
static +Text: Class<XrmEnum$StringAttributeFormat__Text> & XrmEnum$StringAttributeFormat__Text & "text";// "text"
static +TextArea: Class<XrmEnum$StringAttributeFormat__TextArea> & XrmEnum$StringAttributeFormat__TextArea & "textarea";// "textarea"
static +TickerSymbol: Class<XrmEnum$StringAttributeFormat__TickerSymbol> & XrmEnum$StringAttributeFormat__TickerSymbol & "tickersymbol";// "tickersymbol"
static +URL: Class<XrmEnum$StringAttributeFormat__URL> & XrmEnum$StringAttributeFormat__URL & "url";// "url"

}

declare class XrmEnum$StringAttributeFormat__Email mixins XrmEnum$StringAttributeFormat {}
declare class XrmEnum$StringAttributeFormat__Phone mixins XrmEnum$StringAttributeFormat {}
declare class XrmEnum$StringAttributeFormat__Text mixins XrmEnum$StringAttributeFormat {}
declare class XrmEnum$StringAttributeFormat__TextArea mixins XrmEnum$StringAttributeFormat {}
declare class XrmEnum$StringAttributeFormat__TickerSymbol mixins XrmEnum$StringAttributeFormat {}
declare class XrmEnum$StringAttributeFormat__URL mixins XrmEnum$StringAttributeFormat {}



/**
 * Constant Enum: Attribute types for {@link Attributes.Attribute.setDisplayState()}.
 * @see {@link Xrm.Attributes.AttributeType}
 */
declare  class XrmEnum$AttributeType {
  constructor(...args: empty): mixed;
static +Boolean: Class<XrmEnum$AttributeType__Boolean> & XrmEnum$AttributeType__Boolean & "boolean";// "boolean"
static +DateTime: Class<XrmEnum$AttributeType__DateTime> & XrmEnum$AttributeType__DateTime & "datetime";// "datetime"
static +Decimal: Class<XrmEnum$AttributeType__Decimal> & XrmEnum$AttributeType__Decimal & "decimal";// "decimal"
static +Double: Class<XrmEnum$AttributeType__Double> & XrmEnum$AttributeType__Double & "double";// "double"
static +Integer: Class<XrmEnum$AttributeType__Integer> & XrmEnum$AttributeType__Integer & "integer";// "integer"
static +Lookup: Class<XrmEnum$AttributeType__Lookup> & XrmEnum$AttributeType__Lookup & "lookup";// "lookup"
static +Memo: Class<XrmEnum$AttributeType__Memo> & XrmEnum$AttributeType__Memo & "memo";// "memo"
static +Money: Class<XrmEnum$AttributeType__Money> & XrmEnum$AttributeType__Money & "money";// "money"
static +MultiOptionSet: Class<XrmEnum$AttributeType__MultiOptionSet> & XrmEnum$AttributeType__MultiOptionSet & "multioptionset";// "multioptionset"
static +OptionSet: Class<XrmEnum$AttributeType__OptionSet> & XrmEnum$AttributeType__OptionSet & "optionset";// "optionset"
static +String: Class<XrmEnum$AttributeType__String> & XrmEnum$AttributeType__String & "string";// "string"

}

declare class XrmEnum$AttributeType__Boolean mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__DateTime mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__Decimal mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__Double mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__Integer mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__Lookup mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__Memo mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__Money mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__MultiOptionSet mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__OptionSet mixins XrmEnum$AttributeType {}
declare class XrmEnum$AttributeType__String mixins XrmEnum$AttributeType {}



/**
 * Constant Enum: Control types for {@link Controls.Control.getControlType Controls.Control.getControlType()}.
 * @see {@link Xrm.Controls.ControlType}
 */
declare  class XrmEnum$StandardControlType {
  constructor(...args: empty): mixed;
static +Standard: Class<XrmEnum$StandardControlType__Standard> & XrmEnum$StandardControlType__Standard & "standard";// "standard"
static +IFrame: Class<XrmEnum$StandardControlType__IFrame> & XrmEnum$StandardControlType__IFrame & "iframe";// "iframe"
static +Lookup: Class<XrmEnum$StandardControlType__Lookup> & XrmEnum$StandardControlType__Lookup & "lookup";// "lookup"
static +OptionSet: Class<XrmEnum$StandardControlType__OptionSet> & XrmEnum$StandardControlType__OptionSet & "optionset";// "optionset"
static +MultiSelectOptionSet: Class<XrmEnum$StandardControlType__MultiSelectOptionSet> & XrmEnum$StandardControlType__MultiSelectOptionSet & "multiselectoptionset";// "multiselectoptionset"
static +SubGrid: Class<XrmEnum$StandardControlType__SubGrid> & XrmEnum$StandardControlType__SubGrid & "subgrid";// "subgrid"
static +WebResource: Class<XrmEnum$StandardControlType__WebResource> & XrmEnum$StandardControlType__WebResource & "webresource";// "webresource"
static +Notes: Class<XrmEnum$StandardControlType__Notes> & XrmEnum$StandardControlType__Notes & "notes";// "notes"
static +TimerControl: Class<XrmEnum$StandardControlType__TimerControl> & XrmEnum$StandardControlType__TimerControl & "timercontrol";// "timercontrol"
static +KBSearch: Class<XrmEnum$StandardControlType__KBSearch> & XrmEnum$StandardControlType__KBSearch & "kbsearch";// "kbsearch"
static +TimeLineWall: Class<XrmEnum$StandardControlType__TimeLineWall> & XrmEnum$StandardControlType__TimeLineWall & "timelinewall";// "timelinewall"
static +QuickForm: Class<XrmEnum$StandardControlType__QuickForm> & XrmEnum$StandardControlType__QuickForm & "quickform";// "quickform"

}

declare class XrmEnum$StandardControlType__Standard mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__IFrame mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__Lookup mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__OptionSet mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__MultiSelectOptionSet mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__SubGrid mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__WebResource mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__Notes mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__TimerControl mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__KBSearch mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__TimeLineWall mixins XrmEnum$StandardControlType {}
declare class XrmEnum$StandardControlType__QuickForm mixins XrmEnum$StandardControlType {}



/**
 * Constant Enum: Direction types for a process stage change event
 * @see {@link ProcessFlow.StageChangeDirection}
 */
declare  class XrmEnum$StageChangeDirection {
  constructor(...args: empty): mixed;
static +Next: Class<XrmEnum$StageChangeDirection__Next> & XrmEnum$StageChangeDirection__Next & "Next";// "Next"
static +Previous: Class<XrmEnum$StageChangeDirection__Previous> & XrmEnum$StageChangeDirection__Previous & "Previous";// "Previous"

}

declare class XrmEnum$StageChangeDirection__Next mixins XrmEnum$StageChangeDirection {}
declare class XrmEnum$StageChangeDirection__Previous mixins XrmEnum$StageChangeDirection {}



/**
 * Constant Enum: Status for {@link ProcessFlow.Stage.getStatus Stage.getStatus()}.
 * @see {@link ProcessFlow.StageStatus}
 */
declare  class XrmEnum$StageStatus {
  constructor(...args: empty): mixed;
static +Active: Class<XrmEnum$StageStatus__Active> & XrmEnum$StageStatus__Active & "active";// "active"
static +Inactive: Class<XrmEnum$StageStatus__Inactive> & XrmEnum$StageStatus__Inactive & "inactive";// "inactive"

}

declare class XrmEnum$StageStatus__Active mixins XrmEnum$StageStatus {}
declare class XrmEnum$StageStatus__Inactive mixins XrmEnum$StageStatus {}



/**
 * Constant Enum: Status for {@link ProcessFlow.Process.getStatus Process.getStatus()}.
 * @see {@link ProcessFlow.ProcessStatus}
 */
declare  class XrmEnum$ProcessStatus {
  constructor(...args: empty): mixed;
static +Active: Class<XrmEnum$ProcessStatus__Active> & XrmEnum$ProcessStatus__Active & "active";// "active"
static +Aborted: Class<XrmEnum$ProcessStatus__Aborted> & XrmEnum$ProcessStatus__Aborted & "aborted";// "aborted"
static +Finished: Class<XrmEnum$ProcessStatus__Finished> & XrmEnum$ProcessStatus__Finished & "finished";// "finished"

}

declare class XrmEnum$ProcessStatus__Active mixins XrmEnum$ProcessStatus {}
declare class XrmEnum$ProcessStatus__Aborted mixins XrmEnum$ProcessStatus {}
declare class XrmEnum$ProcessStatus__Finished mixins XrmEnum$ProcessStatus {}



/**
 * Constant Enum: Command Bar Display options for Xrm.Url.FormOpenParameters.cmdbar, Xrm.Url.ViewOpenParameters.cmdbar, and Xrm.Utility.FormOpenParameters.cmdbar.
 * @see {@link Xrm.Url.CmdBarDisplay}
 */
declare  class XrmEnum$CmdBarDisplay {
  constructor(...args: empty): mixed;
static +True: Class<XrmEnum$CmdBarDisplay__True> & XrmEnum$CmdBarDisplay__True & "true";// "true"
static +False: Class<XrmEnum$CmdBarDisplay__False> & XrmEnum$CmdBarDisplay__False & "false";// "false"

}

declare class XrmEnum$CmdBarDisplay__True mixins XrmEnum$CmdBarDisplay {}
declare class XrmEnum$CmdBarDisplay__False mixins XrmEnum$CmdBarDisplay {}



/**
 * Constant Enum: Navigation Bar Display options for Xrm.Url.FormOpenParameters.navbar, Xrm.Url.ViewOpenParameters.navbar, and Xrm.Utility.FormOpenParameters.navbar.
 * @see {@link Xrm.Url.NavBarDisplay}
 */
declare  class XrmEnum$NavBarDisplay {
  constructor(...args: empty): mixed;
static +Entity: Class<XrmEnum$NavBarDisplay__Entity> & XrmEnum$NavBarDisplay__Entity & "entity";// "entity"
static +On: Class<XrmEnum$NavBarDisplay__On> & XrmEnum$NavBarDisplay__On & "on";// "on"
static +Off: Class<XrmEnum$NavBarDisplay__Off> & XrmEnum$NavBarDisplay__Off & "off";// "off"

}

declare class XrmEnum$NavBarDisplay__Entity mixins XrmEnum$NavBarDisplay {}
declare class XrmEnum$NavBarDisplay__On mixins XrmEnum$NavBarDisplay {}
declare class XrmEnum$NavBarDisplay__Off mixins XrmEnum$NavBarDisplay {}



/**
 * Constant Enum: Report Open Action options for Xrm.Url.ReportOpenParameters.actions.
 * @see {@link Xrm.Url.ReportAction}
 */
declare  class XrmEnum$ReportAction {
  constructor(...args: empty): mixed;
static +Filter: Class<XrmEnum$ReportAction__Filter> & XrmEnum$ReportAction__Filter & "filter";// "filter"
static +Run: Class<XrmEnum$ReportAction__Run> & XrmEnum$ReportAction__Run & "run";// "run"

}

declare class XrmEnum$ReportAction__Filter mixins XrmEnum$ReportAction {}
declare class XrmEnum$ReportAction__Run mixins XrmEnum$ReportAction {}



/**
 * Constant Enum: Posible file types for Xrm.Device.pickFile options
 * @see {@link Xrm.Device.PickFileTypes}
 */
declare  class XrmEnum$DevicePickFileType {
  constructor(...args: empty): mixed;
static +Audio: Class<XrmEnum$DevicePickFileType__Audio> & XrmEnum$DevicePickFileType__Audio & "audio";// "audio"
static +Video: Class<XrmEnum$DevicePickFileType__Video> & XrmEnum$DevicePickFileType__Video & "vidoe";// "vidoe"
static +Image: Class<XrmEnum$DevicePickFileType__Image> & XrmEnum$DevicePickFileType__Image & "image";// "image"

}

declare class XrmEnum$DevicePickFileType__Audio mixins XrmEnum$DevicePickFileType {}
declare class XrmEnum$DevicePickFileType__Video mixins XrmEnum$DevicePickFileType {}
declare class XrmEnum$DevicePickFileType__Image mixins XrmEnum$DevicePickFileType {}

    }
