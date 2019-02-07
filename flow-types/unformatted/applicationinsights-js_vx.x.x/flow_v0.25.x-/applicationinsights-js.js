declare module 'AI' {
        declare  class SeverityLevel {
  constructor(...args: empty): mixed;
static +Verbose: Class<SeverityLevel__Verbose> & SeverityLevel__Verbose & 0;// 0
static +Information: Class<SeverityLevel__Information> & SeverityLevel__Information & 1;// 1
static +Warning: Class<SeverityLevel__Warning> & SeverityLevel__Warning & 2;// 2
static +Error: Class<SeverityLevel__Error> & SeverityLevel__Error & 3;// 3
static +Critical: Class<SeverityLevel__Critical> & SeverityLevel__Critical & 4;// 4

}

declare class SeverityLevel__Verbose mixins SeverityLevel {}
declare class SeverityLevel__Information mixins SeverityLevel {}
declare class SeverityLevel__Warning mixins SeverityLevel {}
declare class SeverityLevel__Error mixins SeverityLevel {}
declare class SeverityLevel__Critical mixins SeverityLevel {}

	declare  class DependencyKind {
  constructor(...args: empty): mixed;
static +SQL: Class<DependencyKind__SQL> & DependencyKind__SQL & 0;// 0
static +Http: Class<DependencyKind__Http> & DependencyKind__Http & 1;// 1
static +Other: Class<DependencyKind__Other> & DependencyKind__Other & 2;// 2

}

declare class DependencyKind__SQL mixins DependencyKind {}
declare class DependencyKind__Http mixins DependencyKind {}
declare class DependencyKind__Other mixins DependencyKind {}

	declare  class DependencySourceType {
  constructor(...args: empty): mixed;
static +Undefined: Class<DependencySourceType__Undefined> & DependencySourceType__Undefined & 0;// 0
static +Aic: Class<DependencySourceType__Aic> & DependencySourceType__Aic & 1;// 1
static +Apmc: Class<DependencySourceType__Apmc> & DependencySourceType__Apmc & 2;// 2

}

declare class DependencySourceType__Undefined mixins DependencySourceType {}
declare class DependencySourceType__Aic mixins DependencySourceType {}
declare class DependencySourceType__Apmc mixins DependencySourceType {}

	declare class StackFrame  {
level: number;
method: string;
assembly: string;
fileName: string;
line: number;
constructor(): this
}
	declare class ExceptionDetails  {
id: number;
outerId: number;
typeName: string;
message: string;
hasFullStack: boolean;
stack: string;
parsedStack: StackFrame[];
constructor(): this
}
	declare  class DataPointType {
  constructor(...args: empty): mixed;
static +Measurement: Class<DataPointType__Measurement> & DataPointType__Measurement & 0;// 0
static +Aggregation: Class<DataPointType__Aggregation> & DataPointType__Aggregation & 1;// 1

}

declare class DataPointType__Measurement mixins DataPointType {}
declare class DataPointType__Aggregation mixins DataPointType {}

	declare class DataPoint  {
name: string;
kind: AI.DataPointType;
value: number;
count: number;
min: number;
max: number;
stdDev: number;
constructor(): this
}
	declare class EventData mixins undefined.Domain {
ver: number;
name: string;
properties: any;
measurements: any;
constructor(): this
}
	declare class PageViewData mixins AI.EventData {
ver: number;
url: string;
name: string;
duration: string;
referrer: string;
referrerData: string;
properties: any;
measurements: any;
constructor(): this
}
	declare class PageViewPerfData mixins AI.PageViewData {
ver: number;
url: string;
perfTotal: string;
name: string;
duration: string;
networkConnect: string;
referrer: string;
sentRequest: string;
referrerData: string;
receivedResponse: string;
domProcessing: string;
properties: any;
measurements: any;
constructor(): this
}
	declare class RemoteDependencyData mixins undefined.Domain {
ver: number;
name: string;
id: string;
resultCode: string;
kind: AI.DataPointType;
value: number;
count: number;
min: number;
max: number;
stdDev: number;
dependencyKind: AI.DependencyKind;
success: boolean;
async: boolean;
dependencySource: AI.DependencySourceType;
commandName: string;
dependencyTypeName: string;
properties: any;
constructor(): this
}
	declare class MessageData mixins undefined.Domain {
ver: number;
message: string;
severityLevel: AI.SeverityLevel;
properties: any;
constructor(): this
}
    }
declare module 'Microsoft' {
        declare module 'ApplicationInsights' {
        declare module 'Context' {
        declare interface IApplication {

/**
 * The application version.
 */
ver: string,

/**
 * The application build version.
 */
build: string
} 
	declare interface IDevice {

/**
 * The type for the current device.
 */
type: string,

/**
 * A device unique ID.
 */
id: string,

/**
 * The device OEM for the current device.
 */
oemName: string,

/**
 * The device model for the current device.
 */
model: string,

/**
 * The IANA interface type for the internet connected network adapter.
 */
network: number,

/**
 * The application screen resolution.
 */
resolution: string,

/**
 * The current display language of the operating system.
 */
locale: string,

/**
 * The IP address.
 */
ip: string,

/**
 * The device language.
 */
language: string,

/**
 * The OS name.
 */
os: string,

/**
 * The OS version.
 */
osversion: string
} 
	declare interface ILocation {

/**
 * Client IP address for reverse lookup
 */
ip: string
} 
	declare interface IInternal {

/**
 * The SDK version used to create this telemetry item.
 */
sdkVersion: string,

/**
 * The SDK agent version.
 */
agentVersion: string
} 
	declare interface ISample {

/**
 * Sample rate
 */
sampleRate: number
} 
	declare interface ISession {

/**
 * The session ID.
 */
id: string,

/**
 * The true if this is the first session
 */
isFirst: boolean,

/**
 * The date at which this guid was genereated.
 * Per the spec the ID will be regenerated if more than acquisitionSpan milliseconds ellapse from this time.
 */
acquisitionDate: number,

/**
 * The date at which this session ID was last reported.
 * This value should be updated whenever telemetry is sent using this ID.
 * Per the spec the ID will be regenerated if more than renewalSpan milliseconds elapse from this time with no activity.
 */
renewalDate: number
} 
	declare interface IOperation {

/**
 * Operation id
 */
id: string,

/**
 * Operation name
 */
name: string,

/**
 * Parent operation id
 */
parentId: string,

/**
 * Root operation id
 */
rootId: string,

/**
 * Synthetic source of the operation
 */
syntheticSource: string
} 
	declare interface IUser {

/**
 * The telemetry configuration.
 */
config: any,

/**
 * The user ID.
 */
id: string,

/**
 * Authenticated user id
 */
authenticatedId: string,

/**
 * The account ID.
 */
accountId: string,

/**
 * The account acquisition date.
 */
accountAcquisitionDate: string,

/**
 * The user agent string.
 */
agent: string,

/**
 * The store region.
 */
storeRegion: string
} 
    }

	declare module 'Telemetry' {
        declare class Domain  {
constructor(): this
}
	declare class Base  {
baseType: string;
constructor(): this
}
	declare class Data<TDomain> mixins undefined.Base {
baseType: string;
baseData: TDomain;
constructor(): this
}
	declare class Event mixins undefined.ISerializable {
static envelopeType: string;
static dataType: string;
ver: number;
name: string;
properties: any;
measurements: any;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
name: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the EventTelemetry object
 */
constructor(name: string, properties?: any, measurements?: any): this
}
	declare class Exception mixins undefined.ISerializable {
static envelopeType: string;
static dataType: string;
ver: number;
handledAt: string;
exceptions: AI.ExceptionDetails[];
severityLevel: AI.SeverityLevel;
problemId: string;
crashThreadId: number;
properties: any;
measurements: any;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
handledAt: Microsoft.ApplicationInsights.FieldType,
exceptions: Microsoft.ApplicationInsights.FieldType,
severityLevel: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new isntance of the ExceptionTelemetry object
 */
constructor(exception: Error, handledAt?: string, properties?: any, measurements?: any, severityLevel?: AI.SeverityLevel): this;

/**
 * Creates a simple exception with 1 stack frame. Useful for manual constracting of exception.
 */
static CreateSimpleException(
message: string,
typeName: string,
assembly: string,
fileName: string,
details: string,
line: number,
handledAt?: string): Telemetry.Exception
}
	declare class Metric mixins undefined.ISerializable {
static envelopeType: string;
static dataType: string;
ver: number;
metrics: AI.DataPoint[];
properties: any;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
metrics: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the MetricTelemetry object
 */
constructor(name: string, value: number, count?: number, min?: number, max?: number, properties?: any): this
}
	declare class PageView mixins AI.PageViewData, undefined.ISerializable {
static envelopeType: string;
static dataType: string;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
name: Microsoft.ApplicationInsights.FieldType,
url: Microsoft.ApplicationInsights.FieldType,
duration: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the PageEventTelemetry object
 */
constructor(name?: string, url?: string, durationMs?: number, properties?: any, measurements?: any): this
}
	declare class PageViewPerformance mixins AI.PageViewPerfData, undefined.ISerializable {
static envelopeType: string;
static dataType: string;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
name: Microsoft.ApplicationInsights.FieldType,
url: Microsoft.ApplicationInsights.FieldType,
duration: Microsoft.ApplicationInsights.FieldType,
perfTotal: Microsoft.ApplicationInsights.FieldType,
networkConnect: Microsoft.ApplicationInsights.FieldType,
sentRequest: Microsoft.ApplicationInsights.FieldType,
receivedResponse: Microsoft.ApplicationInsights.FieldType,
domProcessing: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType
};

/**
 * Indicates whether this instance of PageViewPerformance is valid and should be sent
 */
getIsValid(): boolean;

/**
 * Gets the total duration (PLT) in milliseconds. Check getIsValid() before using this method.
 */
getDurationMs(): number;

/**
 * Constructs a new instance of the PageEventTelemetry object
 */
constructor(name: string, url: string, unused: number, properties?: any, measurements?: any): this;
static getPerformanceTiming(): PerformanceTiming;

/**
 * Returns true is window performance timing API is supported, false otherwise.
 */
static isPerformanceTimingSupported(): PerformanceTiming;

/**
 * As page loads different parts of performance timing numbers get set. When all of them are set we can report it.
 * Returns true if ready, false otherwise.
 */
static isPerformanceTimingDataReady(): boolean;
static getDuration(start: any, end: any): number
}
	declare class RemoteDependencyData mixins AI.RemoteDependencyData, undefined.ISerializable {
static envelopeType: string;
static dataType: string;
aiDataContract: {
id: Microsoft.ApplicationInsights.FieldType,
ver: Microsoft.ApplicationInsights.FieldType,
name: Microsoft.ApplicationInsights.FieldType,
kind: Microsoft.ApplicationInsights.FieldType,
value: Microsoft.ApplicationInsights.FieldType,
count: Microsoft.ApplicationInsights.FieldType,
min: Microsoft.ApplicationInsights.FieldType,
max: Microsoft.ApplicationInsights.FieldType,
stdDev: Microsoft.ApplicationInsights.FieldType,
dependencyKind: Microsoft.ApplicationInsights.FieldType,
success: Microsoft.ApplicationInsights.FieldType,
async: Microsoft.ApplicationInsights.FieldType,
dependencySource: Microsoft.ApplicationInsights.FieldType,
commandName: Microsoft.ApplicationInsights.FieldType,
dependencyTypeName: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
resultCode: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the RemoteDependencyData object
 */
constructor(id: string, absoluteUrl: string, commandName: string, value: number, success: boolean, resultCode: number, method?: string): this
}
	declare class Trace mixins AI.MessageData, undefined.ISerializable {
static envelopeType: string;
static dataType: string;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
message: Microsoft.ApplicationInsights.FieldType,
severityLevel: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the MetricTelemetry object
 */
constructor(message: string, properties?: any): this
}
	declare module 'Common' {
        declare class Base mixins undefined.Base, undefined.ISerializable {

/**
 * The data contract for serializing this object.
 */
aiDataContract: {}
}
	declare class Data<TDomain> mixins undefined.Data<TDomain>, undefined.ISerializable {

/**
 * The data contract for serializing this object.
 */
aiDataContract: {
baseType: FieldType,
baseData: FieldType
};

/**
 * Constructs a new instance of telemetry data.
 */
constructor(type: string, data: TDomain): this
}
	declare class Envelope mixins IEnvelope {
ver: number;
name: string;
time: string;
sampleRate: number;
seq: string;
iKey: string;
flags: number;
deviceId: string;
os: string;
osVer: string;
appId: string;
appVer: string;
userId: string;
tags: any;
data: Base;

/**
 * The data contract for serializing this object.
 */
aiDataContract: any;

/**
 * Constructs a new instance of telemetry data.
 */
constructor(data: Microsoft.Telemetry.Base, name: string): this
}
	declare class DataSanitizer  {
static sanitizeKeyAndAddUniqueness(key: any, map: any): any;
static sanitizeKey(name: any): any;
static sanitizeString(value: any): any;
static sanitizeUrl(url: any): any;
static sanitizeMessage(message: any): any;
static sanitizeException(exception: any): any;
static sanitizeProperties(properties: any): any;
static sanitizeMeasurements(measurements: any): any;
static padNumber(num: any): string
}
    }

    }

	declare interface IConfig {
instrumentationKey?: string,
endpointUrl?: string,
emitLineDelimitedJson?: boolean,
accountId?: string,
sessionRenewalMs?: number,
sessionExpirationMs?: number,
maxBatchSizeInBytes?: number,
maxBatchInterval?: number,
enableDebug?: boolean,
disableExceptionTracking?: boolean,
disableTelemetry?: boolean,
verboseLogging?: boolean,
diagnosticLogInterval?: number,
samplingPercentage?: number,
autoTrackPageVisitTime?: boolean,
disableAjaxTracking?: boolean,
overridePageViewDuration?: boolean,
maxAjaxCallsPerView?: number,
disableDataLossAnalysis?: boolean,
disableCorrelationHeaders?: boolean,
correlationHeaderExcludedDomains?: string[],
disableFlushOnBeforeUnload?: boolean,
enableSessionStorageBuffer?: boolean,
isCookieUseDisabled?: boolean,
cookieDomain?: string,
isRetryDisabled?: boolean,
url?: string,
isStorageUseDisabled?: boolean,
isBeaconApiDisabled?: boolean,
sdkExtension?: string,
isBrowserLinkTrackingEnabled?: boolean,
appId?: string,
enableCorsCorrelation?: boolean
} 
	
/**
 * Enum is used in aiDataContract to describe how fields are serialized.
 * For instance: (Fieldtype.Required | FieldType.Array) will mark the field as required and indicate it's an array
 */
declare  class FieldType {
  constructor(...args: empty): mixed;
static +Default: Class<FieldType__Default> & FieldType__Default & 0;// 0
static +Required: Class<FieldType__Required> & FieldType__Required & 1;// 1
static +Array: Class<FieldType__Array> & FieldType__Array & 2;// 2
static +Hidden: Class<FieldType__Hidden> & FieldType__Hidden & 4;// 4

}

declare class FieldType__Default mixins FieldType {}
declare class FieldType__Required mixins FieldType {}
declare class FieldType__Array mixins FieldType {}
declare class FieldType__Hidden mixins FieldType {}

	declare interface ISerializable {

/**
 * The set of fields for a serializeable object.
 * This defines the serialization order and a value of true/false
 * for each field defines whether the field is required or not.
 */
aiDataContract: any
} 
	declare type IEnvelope = {
ver: number,
name: string,
time: string,
sampleRate: number,
seq: string,
iKey: string,
flags: number,
deviceId: string,
os: string,
osVer: string,
appId: string,
appVer: string,
userId: string,
tags: {
[name: string]: any
},
data: any
} & ISerializable

	declare interface ITelemetryContext {

/**
 * The object describing a component tracked by this object.
 */
application: Context.IApplication,

/**
 * The object describing a device tracked by this object.
 */
device: Context.IDevice,

/**
 * The object describing internal settings.
 */
internal: Context.IInternal,

/**
 * The object describing a location tracked by this object.
 */
location: Context.ILocation,

/**
 * The object describing a operation tracked by this object.
 */
operation: Context.IOperation,

/**
 * The object describing sampling settings.
 */
sample: Context.ISample,

/**
 * The object describing a user tracked by this object.
 */
user: Context.IUser,

/**
 * The object describing a session tracked by this object.
 */
session: Context.ISession,

/**
 * Adds telemetry initializer to the collection. Telemetry initializers will be called one by one
 * before telemetry item is pushed for sending and in the order they were added.
 */
addTelemetryInitializer(
telemetryInitializer: (envelope: Microsoft.ApplicationInsights.IEnvelope) => boolean | void): any,

/**
 * Tracks telemetry object.
 */
track(envelope: Microsoft.ApplicationInsights.IEnvelope): any
} 
	declare interface IAppInsights {
config: IConfig,
context: ITelemetryContext,
queue: Array<() => void>,

/**
 * Starts the timer for tracking a page load time. Use this instead of `trackPageView` if you want to control when the page view timer starts and stops,
 * but don't want to calculate the duration yourself. This method doesn't send any telemetry. Call `stopTrackPage` to log the end of the page view
 * and send the event.
 * @param name A string that idenfities this item, unique within this HTML document. Defaults to the document title.
 */
startTrackPage(name?: string): any,

/**
 * Stops the timer that was started by calling `startTrackPage` and sends the pageview load time telemetry with the specified properties and measurements.
 * The duration of the page view will be the time between calling `startTrackPage` and `stopTrackPage`.
 * @param name The string you used as the name in `startTrackPage`. Defaults to the document title.
 * @param url String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
 * @param properties map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
 * @param measurements map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
 */
stopTrackPage(
name?: string,
url?: string,
properties?: {
[name: string]: string
},
measurements?: {
[name: string]: number
}): any,

/**
 * Logs that a page or other item was viewed.
 * @param name The string you used as the name in `startTrackPage`. Defaults to the document title.
 * @param url String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
 * @param properties map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
 * @param measurements map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
 * @param duration number - the number of milliseconds it took to load the page. Defaults to undefined. If set to default value, page load time is calculated internally.
 */
trackPageView(
name?: string,
url?: string,
properties?: {
[name: string]: string
},
measurements?: {
[name: string]: number
},
duration?: number): any,

/**
 * Start timing an extended event. Call `stopTrackEvent` to log the event when it ends.
 * @param name A string that identifies this event uniquely within the document.
 */
startTrackEvent(name: string): any,

/**
 * Log an extended event that you started timing with `startTrackEvent`.
 * @param name The string you used to identify this event in `startTrackEvent`.
 * @param properties map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
 * @param measurements map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
 */
stopTrackEvent(
name: string,
properties?: {
[name: string]: string
},
measurements?: {
[name: string]: number
}): any,

/**
 * Log a user action or other occurrence.
 * @param name A string to identify this event in the portal.
 * @param properties map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
 * @param measurements map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
 */
trackEvent(
name: string,
properties?: {
[name: string]: string
},
measurements?: {
[name: string]: number
}): any,

/**
 * Log a dependency call
 * @param id unique id, this is used by the backend o correlate server requests. Use Util.newId() to generate a unique Id.
 * @param method represents request verb (GET, POST, etc.)
 * @param absoluteUrl absolute url used to make the dependency request
 * @param pathName the path part of the absolute url
 * @param totalTime total request time
 * @param success indicates if the request was sessessful
 * @param resultCode response code returned by the dependency request
 * @param properties map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
 * @param measurements map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
 */
trackDependency(
id: string,
method: string,
absoluteUrl: string,
pathName: string,
totalTime: number,
success: boolean,
resultCode: number,
properties?: {
[name: string]: string
},
measurements?: {
[name: string]: number
}): any,

/**
 * Log an exception you have caught.
 * @param exception An Error from a catch clause, or the string error message.
 * @param properties map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
 * @param measurements map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
 * @param severityLevel AI.SeverityLevel - severity level
 */
trackException(
exception: Error,
handledAt?: string,
properties?: {
[name: string]: string
},
measurements?: {
[name: string]: number
},
severityLevel?: AI.SeverityLevel): any,

/**
 * Log a numeric value that is not associated with a specific event. Typically used to send regular reports of performance indicators.
 * To send a single measurement, use just the first two parameters. If you take measurements very frequently, you can reduce the
 * telemetry bandwidth by aggregating multiple measurements and sending the resulting average at intervals.
 * @param name A string that identifies the metric.
 * @param average Number representing either a single measurement, or the average of several measurements.
 * @param sampleCount The number of measurements represented by the average. Defaults to 1.
 * @param min The smallest measurement in the sample. Defaults to the average.
 * @param max The largest measurement in the sample. Defaults to the average.
 */
trackMetric(
name: string,
average: number,
sampleCount?: number,
min?: number,
max?: number,
properties?: {
[name: string]: string
}): any,

/**
 * Log a diagnostic message.
 * @param message A message string
 * @param properties map[string, string] - additional data used to filter traces in the portal. Defaults to empty.
 */
trackTrace(
message: string,
properties?: {
[name: string]: string
},
severityLevel?: AI.SeverityLevel): any,

/**
 * Immediately send all queued telemetry.
 */
flush(): any,

/**
 * Sets the autheticated user id and the account id in this session.
 * User auth id and account id should be of type string. They should not contain commas, semi-colons, equal signs, spaces, or vertical-bars.
 * @param {string} authenticatedUserId - The authenticated user id. A unique and persistent string that represents each authenticated user in the service.
 * @param {string} accountId - An optional string to represent the account associated with the authenticated user.
 */
setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string, storeInCookie?: boolean): any,

/**
 * Clears the authenticated user id and the account id from the user context.
 */
clearAuthenticatedUserContext(): any,
downloadAndSetup?: (config: Microsoft.ApplicationInsights.IConfig) => any,

/**
 * The custom error handler for Application Insights
 * @param {string} message - The error message
 * @param {string} url - The url where the error was raised
 * @param {number} lineNumber - The line number where the error was raised
 * @param {number} columnNumber - The column number for the line where the error was raised
 * @param {Error} error - The Error object
 */
_onerror(
message: string,
url: string,
lineNumber: number,
columnNumber: number,
error: Error): any
} 
	declare class UtilHelpers  {

/**
 * Generate a random ID string
 */
static newId(): string
}
    }

	declare module 'Telemetry' {
        declare class Domain  {
constructor(): this
}
	declare class Base  {
baseType: string;
constructor(): this
}
	declare class Data<TDomain> mixins undefined.Base {
baseType: string;
baseData: TDomain;
constructor(): this
}
	declare class Event mixins undefined.ISerializable {
static envelopeType: string;
static dataType: string;
ver: number;
name: string;
properties: any;
measurements: any;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
name: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the EventTelemetry object
 */
constructor(name: string, properties?: any, measurements?: any): this
}
	declare class Exception mixins undefined.ISerializable {
static envelopeType: string;
static dataType: string;
ver: number;
handledAt: string;
exceptions: AI.ExceptionDetails[];
severityLevel: AI.SeverityLevel;
problemId: string;
crashThreadId: number;
properties: any;
measurements: any;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
handledAt: Microsoft.ApplicationInsights.FieldType,
exceptions: Microsoft.ApplicationInsights.FieldType,
severityLevel: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new isntance of the ExceptionTelemetry object
 */
constructor(exception: Error, handledAt?: string, properties?: any, measurements?: any, severityLevel?: AI.SeverityLevel): this;

/**
 * Creates a simple exception with 1 stack frame. Useful for manual constracting of exception.
 */
static CreateSimpleException(
message: string,
typeName: string,
assembly: string,
fileName: string,
details: string,
line: number,
handledAt?: string): Telemetry.Exception
}
	declare class Metric mixins undefined.ISerializable {
static envelopeType: string;
static dataType: string;
ver: number;
metrics: AI.DataPoint[];
properties: any;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
metrics: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the MetricTelemetry object
 */
constructor(name: string, value: number, count?: number, min?: number, max?: number, properties?: any): this
}
	declare class PageView mixins AI.PageViewData, undefined.ISerializable {
static envelopeType: string;
static dataType: string;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
name: Microsoft.ApplicationInsights.FieldType,
url: Microsoft.ApplicationInsights.FieldType,
duration: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the PageEventTelemetry object
 */
constructor(name?: string, url?: string, durationMs?: number, properties?: any, measurements?: any): this
}
	declare class PageViewPerformance mixins AI.PageViewPerfData, undefined.ISerializable {
static envelopeType: string;
static dataType: string;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
name: Microsoft.ApplicationInsights.FieldType,
url: Microsoft.ApplicationInsights.FieldType,
duration: Microsoft.ApplicationInsights.FieldType,
perfTotal: Microsoft.ApplicationInsights.FieldType,
networkConnect: Microsoft.ApplicationInsights.FieldType,
sentRequest: Microsoft.ApplicationInsights.FieldType,
receivedResponse: Microsoft.ApplicationInsights.FieldType,
domProcessing: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType
};

/**
 * Indicates whether this instance of PageViewPerformance is valid and should be sent
 */
getIsValid(): boolean;

/**
 * Gets the total duration (PLT) in milliseconds. Check getIsValid() before using this method.
 */
getDurationMs(): number;

/**
 * Constructs a new instance of the PageEventTelemetry object
 */
constructor(name: string, url: string, unused: number, properties?: any, measurements?: any): this;
static getPerformanceTiming(): PerformanceTiming;

/**
 * Returns true is window performance timing API is supported, false otherwise.
 */
static isPerformanceTimingSupported(): PerformanceTiming;

/**
 * As page loads different parts of performance timing numbers get set. When all of them are set we can report it.
 * Returns true if ready, false otherwise.
 */
static isPerformanceTimingDataReady(): boolean;
static getDuration(start: any, end: any): number
}
	declare class RemoteDependencyData mixins AI.RemoteDependencyData, undefined.ISerializable {
static envelopeType: string;
static dataType: string;
aiDataContract: {
id: Microsoft.ApplicationInsights.FieldType,
ver: Microsoft.ApplicationInsights.FieldType,
name: Microsoft.ApplicationInsights.FieldType,
kind: Microsoft.ApplicationInsights.FieldType,
value: Microsoft.ApplicationInsights.FieldType,
count: Microsoft.ApplicationInsights.FieldType,
min: Microsoft.ApplicationInsights.FieldType,
max: Microsoft.ApplicationInsights.FieldType,
stdDev: Microsoft.ApplicationInsights.FieldType,
dependencyKind: Microsoft.ApplicationInsights.FieldType,
success: Microsoft.ApplicationInsights.FieldType,
async: Microsoft.ApplicationInsights.FieldType,
dependencySource: Microsoft.ApplicationInsights.FieldType,
commandName: Microsoft.ApplicationInsights.FieldType,
dependencyTypeName: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType,
resultCode: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the RemoteDependencyData object
 */
constructor(id: string, absoluteUrl: string, commandName: string, value: number, success: boolean, resultCode: number, method?: string): this
}
	declare class Trace mixins AI.MessageData, undefined.ISerializable {
static envelopeType: string;
static dataType: string;
aiDataContract: {
ver: Microsoft.ApplicationInsights.FieldType,
message: Microsoft.ApplicationInsights.FieldType,
severityLevel: Microsoft.ApplicationInsights.FieldType,
measurements: Microsoft.ApplicationInsights.FieldType,
properties: Microsoft.ApplicationInsights.FieldType
};

/**
 * Constructs a new instance of the MetricTelemetry object
 */
constructor(message: string, properties?: any): this
}
	declare module 'Common' {
        declare class Base mixins undefined.Base, undefined.ISerializable {

/**
 * The data contract for serializing this object.
 */
aiDataContract: {}
}
	declare class Data<TDomain> mixins undefined.Data<TDomain>, undefined.ISerializable {

/**
 * The data contract for serializing this object.
 */
aiDataContract: {
baseType: FieldType,
baseData: FieldType
};

/**
 * Constructs a new instance of telemetry data.
 */
constructor(type: string, data: TDomain): this
}
	declare class Envelope mixins IEnvelope {
ver: number;
name: string;
time: string;
sampleRate: number;
seq: string;
iKey: string;
flags: number;
deviceId: string;
os: string;
osVer: string;
appId: string;
appVer: string;
userId: string;
tags: any;
data: Base;

/**
 * The data contract for serializing this object.
 */
aiDataContract: any;

/**
 * Constructs a new instance of telemetry data.
 */
constructor(data: Microsoft.Telemetry.Base, name: string): this
}
	declare class DataSanitizer  {
static sanitizeKeyAndAddUniqueness(key: any, map: any): any;
static sanitizeKey(name: any): any;
static sanitizeString(value: any): any;
static sanitizeUrl(url: any): any;
static sanitizeMessage(message: any): any;
static sanitizeException(exception: any): any;
static sanitizeProperties(properties: any): any;
static sanitizeMeasurements(measurements: any): any;
static padNumber(num: any): string
}
    }

    }

    }
declare module 'applicationinsights-js' {
        declare var AppInsights: Microsoft.ApplicationInsights.IAppInsights;
	declare var Util: typeof undefined;
    }
declare var appInsights: Microsoft.ApplicationInsights.IAppInsights;