declare var npm$namespace$AI: {
  SeverityLevel: typeof AI$SeverityLevel,
  DependencyKind: typeof AI$DependencyKind,
  DependencySourceType: typeof AI$DependencySourceType,
  DataPointType: typeof AI$DataPointType,
  StackFrame: typeof AI$StackFrame,
  ExceptionDetails: typeof AI$ExceptionDetails,
  DataPoint: typeof AI$DataPoint,
  EventData: typeof AI$EventData,
  PageViewData: typeof AI$PageViewData,
  PageViewPerfData: typeof AI$PageViewPerfData,
  RemoteDependencyData: typeof AI$RemoteDependencyData,
  MessageData: typeof AI$MessageData
};

declare var AI$SeverityLevel: {|
  +Verbose: 0, // 0
  +Information: 1, // 1
  +Warning: 2, // 2
  +Error: 3, // 3
  +Critical: 4 // 4
|};

declare var AI$DependencyKind: {|
  +SQL: 0, // 0
  +Http: 1, // 1
  +Other: 2 // 2
|};

declare var AI$DependencySourceType: {|
  +Undefined: 0, // 0
  +Aic: 1, // 1
  +Apmc: 2 // 2
|};

declare class AI$StackFrame {
  level: number;
  method: string;
  assembly: string;
  fileName: string;
  line: number;
  constructor(): this;
}

declare class AI$ExceptionDetails {
  id: number;
  outerId: number;
  typeName: string;
  message: string;
  hasFullStack: boolean;
  stack: string;
  parsedStack: AI$StackFrame[];
  constructor(): this;
}

declare var AI$DataPointType: {|
  +Measurement: 0, // 0
  +Aggregation: 1 // 1
|};

declare class AI$DataPoint {
  name: string;
  kind: $Values<typeof AI$DataPointType>;
  value: number;
  count: number;
  min: number;
  max: number;
  stdDev: number;
  constructor(): this;
}

declare class AI$EventData mixins Microsoft$Telemetry$Domain {
  ver: number;
  name: string;
  properties: any;
  measurements: any;
  constructor(): this;
}

declare class AI$PageViewData mixins AI$EventData {
  ver: number;
  url: string;
  name: string;
  duration: string;
  referrer: string;
  referrerData: string;
  properties: any;
  measurements: any;
  constructor(): this;
}

declare class AI$PageViewPerfData mixins AI$PageViewData {
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
  constructor(): this;
}

declare class AI$RemoteDependencyData mixins Microsoft$Telemetry$Domain {
  ver: number;
  name: string;
  id: string;
  resultCode: string;
  kind: $Values<typeof AI$DataPointType>;
  value: number;
  count: number;
  min: number;
  max: number;
  stdDev: number;
  dependencyKind: $Values<typeof AI$DependencyKind>;
  success: boolean;
  async: boolean;
  dependencySource: $Values<typeof AI$DependencySourceType>;
  commandName: string;
  dependencyTypeName: string;
  properties: any;
  constructor(): this;
}

declare class AI$MessageData mixins Microsoft$Telemetry$Domain {
  ver: number;
  message: string;
  severityLevel: $Values<typeof AI$SeverityLevel>;
  properties: any;
  constructor(): this;
}
declare var npm$namespace$Microsoft: {
  ApplicationInsights: typeof npm$namespace$Microsoft$ApplicationInsights,
  Telemetry: typeof npm$namespace$Microsoft$Telemetry
};

declare var npm$namespace$Microsoft$ApplicationInsights: {
  FieldType: typeof Microsoft$ApplicationInsights$FieldType,
  UtilHelpers: typeof Microsoft$ApplicationInsights$UtilHelpers,
  Telemetry: typeof npm$namespace$Microsoft$ApplicationInsights$Telemetry
};
declare interface Microsoft$ApplicationInsights$Context$IApplication {
  /**
   * The application version.
   */
  ver: string;

  /**
   * The application build version.
   */
  build: string;
}

declare interface Microsoft$ApplicationInsights$Context$IDevice {
  /**
   * The type for the current device.
   */
  type: string;

  /**
   * A device unique ID.
   */
  id: string;

  /**
   * The device OEM for the current device.
   */
  oemName: string;

  /**
   * The device model for the current device.
   */
  model: string;

  /**
   * The IANA interface type for the internet connected network adapter.
   */
  network: number;

  /**
   * The application screen resolution.
   */
  resolution: string;

  /**
   * The current display language of the operating system.
   */
  locale: string;

  /**
   * The IP address.
   */
  ip: string;

  /**
   * The device language.
   */
  language: string;

  /**
   * The OS name.
   */
  os: string;

  /**
   * The OS version.
   */
  osversion: string;
}

declare interface Microsoft$ApplicationInsights$Context$ILocation {
  /**
   * Client IP address for reverse lookup
   */
  ip: string;
}

declare interface Microsoft$ApplicationInsights$Context$IInternal {
  /**
   * The SDK version used to create this telemetry item.
   */
  sdkVersion: string;

  /**
   * The SDK agent version.
   */
  agentVersion: string;
}

declare interface Microsoft$ApplicationInsights$Context$ISample {
  /**
   * Sample rate
   */
  sampleRate: number;
}

declare interface Microsoft$ApplicationInsights$Context$ISession {
  /**
   * The session ID.
   */
  id: string;

  /**
   * The true if this is the first session
   */
  isFirst: boolean;

  /**
   * The date at which this guid was genereated.
   * Per the spec the ID will be regenerated if more than acquisitionSpan milliseconds ellapse from this time.
   */
  acquisitionDate: number;

  /**
   * The date at which this session ID was last reported.
   * This value should be updated whenever telemetry is sent using this ID.
   * Per the spec the ID will be regenerated if more than renewalSpan milliseconds elapse from this time with no activity.
   */
  renewalDate: number;
}

declare interface Microsoft$ApplicationInsights$Context$IOperation {
  /**
   * Operation id
   */
  id: string;

  /**
   * Operation name
   */
  name: string;

  /**
   * Parent operation id
   */
  parentId: string;

  /**
   * Root operation id
   */
  rootId: string;

  /**
   * Synthetic source of the operation
   */
  syntheticSource: string;
}

declare interface Microsoft$ApplicationInsights$Context$IUser {
  /**
   * The telemetry configuration.
   */
  config: any;

  /**
   * The user ID.
   */
  id: string;

  /**
   * Authenticated user id
   */
  authenticatedId: string;

  /**
   * The account ID.
   */
  accountId: string;

  /**
   * The account acquisition date.
   */
  accountAcquisitionDate: string;

  /**
   * The user agent string.
   */
  agent: string;

  /**
   * The store region.
   */
  storeRegion: string;
}

declare var npm$namespace$Microsoft$ApplicationInsights$Telemetry: {
  Event: typeof Microsoft$ApplicationInsights$Telemetry$Event,
  Exception: typeof Microsoft$ApplicationInsights$Telemetry$Exception,
  Metric: typeof Microsoft$ApplicationInsights$Telemetry$Metric,
  PageView: typeof Microsoft$ApplicationInsights$Telemetry$PageView,
  PageViewPerformance: typeof Microsoft$ApplicationInsights$Telemetry$PageViewPerformance,
  RemoteDependencyData: typeof Microsoft$ApplicationInsights$Telemetry$RemoteDependencyData,
  Trace: typeof Microsoft$ApplicationInsights$Telemetry$Trace,
  Common: typeof npm$namespace$Microsoft$ApplicationInsights$Telemetry$Common
};
declare class Microsoft$ApplicationInsights$Telemetry$Event
  mixins Microsoft$ApplicationInsights$ISerializable {
  static envelopeType: string;
  static dataType: string;
  ver: number;
  name: string;
  properties: any;
  measurements: any;
  aiDataContract: {
    ver: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    name: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    properties: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    measurements: $Values<typeof Microsoft$ApplicationInsights$FieldType>
  };

  /**
   * Constructs a new instance of the EventTelemetry object
   */
  constructor(name: string, properties?: any, measurements?: any): this;
}

declare class Microsoft$ApplicationInsights$Telemetry$Exception
  mixins Microsoft$ApplicationInsights$ISerializable {
  static envelopeType: string;
  static dataType: string;
  ver: number;
  handledAt: string;
  exceptions: AI$ExceptionDetails[];
  severityLevel: $Values<typeof AI$SeverityLevel>;
  problemId: string;
  crashThreadId: number;
  properties: any;
  measurements: any;
  aiDataContract: {
    ver: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    handledAt: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    exceptions: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    severityLevel: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    properties: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    measurements: $Values<typeof Microsoft$ApplicationInsights$FieldType>
  };

  /**
   * Constructs a new isntance of the ExceptionTelemetry object
   */
  constructor(
    exception: Error,
    handledAt?: string,
    properties?: any,
    measurements?: any,
    severityLevel?: $Values<typeof AI$SeverityLevel>
  ): this;

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
    handledAt?: string
  ): Microsoft$ApplicationInsights$Telemetry$Exception;
}

declare class Microsoft$ApplicationInsights$Telemetry$Metric
  mixins Microsoft$ApplicationInsights$ISerializable {
  static envelopeType: string;
  static dataType: string;
  ver: number;
  metrics: AI$DataPoint[];
  properties: any;
  aiDataContract: {
    ver: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    metrics: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    properties: $Values<typeof Microsoft$ApplicationInsights$FieldType>
  };

  /**
   * Constructs a new instance of the MetricTelemetry object
   */
  constructor(
    name: string,
    value: number,
    count?: number,
    min?: number,
    max?: number,
    properties?: any
  ): this;
}

declare class Microsoft$ApplicationInsights$Telemetry$PageView
  mixins AI$PageViewData, Microsoft$ApplicationInsights$ISerializable {
  static envelopeType: string;
  static dataType: string;
  aiDataContract: {
    ver: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    name: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    url: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    duration: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    properties: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    measurements: $Values<typeof Microsoft$ApplicationInsights$FieldType>
  };

  /**
   * Constructs a new instance of the PageEventTelemetry object
   */
  constructor(
    name?: string,
    url?: string,
    durationMs?: number,
    properties?: any,
    measurements?: any
  ): this;
}

declare class Microsoft$ApplicationInsights$Telemetry$PageViewPerformance
  mixins AI$PageViewPerfData, Microsoft$ApplicationInsights$ISerializable {
  static envelopeType: string;
  static dataType: string;
  aiDataContract: {
    ver: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    name: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    url: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    duration: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    perfTotal: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    networkConnect: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    sentRequest: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    receivedResponse: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    domProcessing: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    properties: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    measurements: $Values<typeof Microsoft$ApplicationInsights$FieldType>
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
  constructor(
    name: string,
    url: string,
    unused: number,
    properties?: any,
    measurements?: any
  ): this;
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
  static getDuration(start: any, end: any): number;
}

declare class Microsoft$ApplicationInsights$Telemetry$RemoteDependencyData
  mixins AI$RemoteDependencyData, Microsoft$ApplicationInsights$ISerializable {
  static envelopeType: string;
  static dataType: string;
  aiDataContract: {
    id: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    ver: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    name: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    kind: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    value: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    count: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    min: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    max: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    stdDev: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    dependencyKind: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    success: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    async: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    dependencySource: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    commandName: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    dependencyTypeName: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    properties: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    resultCode: $Values<typeof Microsoft$ApplicationInsights$FieldType>
  };

  /**
   * Constructs a new instance of the RemoteDependencyData object
   */
  constructor(
    id: string,
    absoluteUrl: string,
    commandName: string,
    value: number,
    success: boolean,
    resultCode: number,
    method?: string
  ): this;
}

declare class Microsoft$ApplicationInsights$Telemetry$Trace
  mixins AI$MessageData, Microsoft$ApplicationInsights$ISerializable {
  static envelopeType: string;
  static dataType: string;
  aiDataContract: {
    ver: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    message: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    severityLevel: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    measurements: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    properties: $Values<typeof Microsoft$ApplicationInsights$FieldType>
  };

  /**
   * Constructs a new instance of the MetricTelemetry object
   */
  constructor(message: string, properties?: any): this;
}

declare var npm$namespace$Microsoft$ApplicationInsights$Telemetry$Common: {
  Base: typeof Microsoft$ApplicationInsights$Telemetry$Common$Base,
  Data: typeof Microsoft$ApplicationInsights$Telemetry$Common$Data,
  Envelope: typeof Microsoft$ApplicationInsights$Telemetry$Common$Envelope,
  DataSanitizer: typeof Microsoft$ApplicationInsights$Telemetry$Common$DataSanitizer
};
declare class Microsoft$ApplicationInsights$Telemetry$Common$Base
  mixins Microsoft$Telemetry$Base, Microsoft$ApplicationInsights$ISerializable {
  /**
   * The data contract for serializing this object.
   */
  aiDataContract: {};
}

declare class Microsoft$ApplicationInsights$Telemetry$Common$Data<TDomain>
  mixins Microsoft$Telemetry$Data<TDomain>,
    Microsoft$ApplicationInsights$ISerializable {
  /**
   * The data contract for serializing this object.
   */
  aiDataContract: {
    baseType: $Values<typeof Microsoft$ApplicationInsights$FieldType>,
    baseData: $Values<typeof Microsoft$ApplicationInsights$FieldType>
  };

  /**
   * Constructs a new instance of telemetry data.
   */
  constructor(type: string, data: TDomain): this;
}

declare class Microsoft$ApplicationInsights$Telemetry$Common$Envelope
  mixins Microsoft$ApplicationInsights$IEnvelope {
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
  data: Microsoft$ApplicationInsights$Telemetry$Common$Base;

  /**
   * The data contract for serializing this object.
   */
  aiDataContract: any;

  /**
   * Constructs a new instance of telemetry data.
   */
  constructor(data: Microsoft$Telemetry$Base, name: string): this;
}

declare class Microsoft$ApplicationInsights$Telemetry$Common$DataSanitizer {
  static sanitizeKeyAndAddUniqueness(key: any, map: any): any;
  static sanitizeKey(name: any): any;
  static sanitizeString(value: any): any;
  static sanitizeUrl(url: any): any;
  static sanitizeMessage(message: any): any;
  static sanitizeException(exception: any): any;
  static sanitizeProperties(properties: any): any;
  static sanitizeMeasurements(measurements: any): any;
  static padNumber(num: any): string;
}

declare interface Microsoft$ApplicationInsights$IConfig {
  instrumentationKey?: string;
  endpointUrl?: string;
  emitLineDelimitedJson?: boolean;
  accountId?: string;
  sessionRenewalMs?: number;
  sessionExpirationMs?: number;
  maxBatchSizeInBytes?: number;
  maxBatchInterval?: number;
  enableDebug?: boolean;
  disableExceptionTracking?: boolean;
  disableTelemetry?: boolean;
  verboseLogging?: boolean;
  diagnosticLogInterval?: number;
  samplingPercentage?: number;
  autoTrackPageVisitTime?: boolean;
  disableAjaxTracking?: boolean;
  overridePageViewDuration?: boolean;
  maxAjaxCallsPerView?: number;
  disableDataLossAnalysis?: boolean;
  disableCorrelationHeaders?: boolean;
  correlationHeaderExcludedDomains?: string[];
  disableFlushOnBeforeUnload?: boolean;
  enableSessionStorageBuffer?: boolean;
  isCookieUseDisabled?: boolean;
  cookieDomain?: string;
  isRetryDisabled?: boolean;
  url?: string;
  isStorageUseDisabled?: boolean;
  isBeaconApiDisabled?: boolean;
  sdkExtension?: string;
  isBrowserLinkTrackingEnabled?: boolean;
  appId?: string;
  enableCorsCorrelation?: boolean;
}

/**
 * Enum is used in aiDataContract to describe how fields are serialized.
 * For instance: (Fieldtype.Required | FieldType.Array) will mark the field as required and indicate it's an array
 */

declare var Microsoft$ApplicationInsights$FieldType: {|
  +Default: 0, // 0
  +Required: 1, // 1
  +Array: 2, // 2
  +Hidden: 4 // 4
|};

declare interface Microsoft$ApplicationInsights$ISerializable {
  /**
   * The set of fields for a serializeable object.
   * This defines the serialization order and a value of true/false
   * for each field defines whether the field is required or not.
   */
  aiDataContract: any;
}

declare type Microsoft$ApplicationInsights$IEnvelope = {
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
} & Microsoft$ApplicationInsights$ISerializable;

declare interface Microsoft$ApplicationInsights$ITelemetryContext {
  /**
   * The object describing a component tracked by this object.
   */
  application: Microsoft$ApplicationInsights$Context$IApplication;

  /**
   * The object describing a device tracked by this object.
   */
  device: Microsoft$ApplicationInsights$Context$IDevice;

  /**
   * The object describing internal settings.
   */
  internal: Microsoft$ApplicationInsights$Context$IInternal;

  /**
   * The object describing a location tracked by this object.
   */
  location: Microsoft$ApplicationInsights$Context$ILocation;

  /**
   * The object describing a operation tracked by this object.
   */
  operation: Microsoft$ApplicationInsights$Context$IOperation;

  /**
   * The object describing sampling settings.
   */
  sample: Microsoft$ApplicationInsights$Context$ISample;

  /**
   * The object describing a user tracked by this object.
   */
  user: Microsoft$ApplicationInsights$Context$IUser;

  /**
   * The object describing a session tracked by this object.
   */
  session: Microsoft$ApplicationInsights$Context$ISession;

  /**
   * Adds telemetry initializer to the collection. Telemetry initializers will be called one by one
   * before telemetry item is pushed for sending and in the order they were added.
   */
  addTelemetryInitializer(
    telemetryInitializer: (
      envelope: Microsoft$ApplicationInsights$IEnvelope
    ) => boolean | void
  ): any;

  /**
   * Tracks telemetry object.
   */
  track(envelope: Microsoft$ApplicationInsights$IEnvelope): any;
}

declare interface Microsoft$ApplicationInsights$IAppInsights {
  config: Microsoft$ApplicationInsights$IConfig;
  context: Microsoft$ApplicationInsights$ITelemetryContext;
  queue: Array<() => void>;

  /**
   * Starts the timer for tracking a page load time. Use this instead of `trackPageView` if you want to control when the page view timer starts and stops,
   * but don't want to calculate the duration yourself. This method doesn't send any telemetry. Call `stopTrackPage` to log the end of the page view
   * and send the event.
   * @param name A string that idenfities this item, unique within this HTML document. Defaults to the document title.
   */
  startTrackPage(name?: string): any;

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
    }
  ): any;

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
    duration?: number
  ): any;

  /**
   * Start timing an extended event. Call `stopTrackEvent` to log the event when it ends.
   * @param name A string that identifies this event uniquely within the document.
   */
  startTrackEvent(name: string): any;

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
    }
  ): any;

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
    }
  ): any;

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
    }
  ): any;

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
    severityLevel?: $Values<typeof AI$SeverityLevel>
  ): any;

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
    }
  ): any;

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
    severityLevel?: $Values<typeof AI$SeverityLevel>
  ): any;

  /**
   * Immediately send all queued telemetry.
   */
  flush(): any;

  /**
   * Sets the autheticated user id and the account id in this session.
   * User auth id and account id should be of type string. They should not contain commas, semi-colons, equal signs, spaces, or vertical-bars.
   * @param {string} authenticatedUserId - The authenticated user id. A unique and persistent string that represents each authenticated user in the service.
   * @param {string} accountId - An optional string to represent the account associated with the authenticated user.
   */
  setAuthenticatedUserContext(
    authenticatedUserId: string,
    accountId?: string,
    storeInCookie?: boolean
  ): any;

  /**
   * Clears the authenticated user id and the account id from the user context.
   */
  clearAuthenticatedUserContext(): any;
  downloadAndSetup?: (config: Microsoft$ApplicationInsights$IConfig) => any;

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
    error: Error
  ): any;
}

declare class Microsoft$ApplicationInsights$UtilHelpers {
  /**
   * Generate a random ID string
   */
  static newId(): string;
}

declare var npm$namespace$Microsoft$Telemetry: {
  Domain: typeof Microsoft$Telemetry$Domain,
  Base: typeof Microsoft$Telemetry$Base,
  Data: typeof Microsoft$Telemetry$Data
};
declare class Microsoft$Telemetry$Domain {
  constructor(): this;
}

declare class Microsoft$Telemetry$Base {
  baseType: string;
  constructor(): this;
}

declare class Microsoft$Telemetry$Data<TDomain>
  mixins Microsoft$Telemetry$Base {
  baseType: string;
  baseData: TDomain;
  constructor(): this;
}
declare module "applicationinsights-js" {
  declare var AppInsights: Microsoft$ApplicationInsights$IAppInsights;
  declare var Util: typeof Microsoft$ApplicationInsights$UtilHelpers;
}
declare var appInsights: Microsoft$ApplicationInsights$IAppInsights;
