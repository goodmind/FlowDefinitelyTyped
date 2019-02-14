declare module "azure-sb" {
  import typeof * as ServiceBusService from "./lib/servicebusservice";

  import typeof * as NotificationHubService from "./lib/notificationhubservice";

  import typeof * as WrapService from "./lib/wrapservice";

  declare export function createServiceBusService(
    namespaceOrConnectionString?: string,
    accessKey?: string,
    issuer?: string,
    acsNamespace?: string,
    host?: string,
    authenticationProvider?: { [key: string]: any }
  ): ServiceBusService;

  declare export function createNotificationHubService(
    hubName: string,
    endpointOrConnectionString?: string,
    sharedAccessKeyName?: string,
    sharedAccessKeyValue?: string
  ): NotificationHubService;

  declare export function createWrapService(
    acsHost: string,
    issuer?: string,
    accessKey?: string
  ): WrapService;

  declare var npm$namespace$Azure: {
    ServiceBus: typeof npm$namespace$Azure$ServiceBus
  };

  declare var npm$namespace$Azure$ServiceBus: {
    Results: typeof npm$namespace$Azure$ServiceBus$Results
  };
  declare export type Azure$ServiceBus$Duration = string;

  declare export type Azure$ServiceBus$DateString = string;

  declare export interface Azure$ServiceBus$Dictionary<T> {
    [k: string]: T;
  }

  declare export interface Azure$ServiceBus$ReceiveQueueMessageOptions {
    timeoutIntervalInS?: number;
  }

  declare export type Azure$ServiceBus$ReceiveSubscriptionMessageOptions = {
    isPeekLock?: boolean
  } & ReceiveQueueMessageOptions;

  declare interface Azure$ServiceBus$IBrokerPropertiesResponse {
    +DeliveryCount: number;
    +LockedUntil: Azure$ServiceBus$DateString;
    +LockToken: string;
    +SequenceNumber: number;
  }

  declare interface Azure$ServiceBus$IBrokerProperties {
    CorrelationId: string;
    Label: string;
    MessageId: string;
    PartitionKey: string;
    ReplyTo: string;
    ReplyToSessionId: string;
    ScheduledEnqueueTimeUtc: string;
    SessionId: string;
    TimeToLive: string;
    To: string;
  }

  declare export interface Azure$ServiceBus$Message {
    body: string;
    brokerProperties?: ServiceBus$BrokerProperties;
    contentType?: string;
    customProperties?: Azure$ServiceBus$Dictionary<any>;
  }

  declare interface Azure$ServiceBus$CreateOptions {
    DefaultMessageTimeToLive: string;
    DuplicateDetectionHistoryTimeWindow: string;
    EnablePartitioning: boolean;
    MaxSizeInMegabytes: number;
    RequiresDuplicateDetection: boolean;
  }

  declare type Azure$ServiceBus$IQueueOptions = {
    AutoDeleteOnIdle: string,
    DeadLetteringOnMessageExpiration: boolean,
    LockDuration: string,
    RequiresSession: boolean
  } & CreateOptions;

  declare type Azure$ServiceBus$ICreateTopicOptions = {
    EnableBatchedOperations: boolean,
    SizeInBytes: boolean,
    SupportOrdering: boolean
  } & CreateOptions;

  declare type Azure$ServiceBus$ICreateTopicIfNotExistsOptions = {
    EnableDeadLetteringOnFilterEvaluationExceptions: boolean,
    EnableDeadLetteringOnMessageExpiration: boolean,
    MaxCorrelationFiltersPerTopic: number,
    MaxSqlFiltersPerTopic: number,
    MaxSubscriptionsPerTopic: number
  } & ICreateTopicOptions;

  declare interface Azure$ServiceBus$ICreateSubscriptionOptions {
    DefaultMessageTimeToLive: string;
    EnableDeadLetteringOnFilterEvaluationExceptions: boolean;
    EnableDeadLetteringOnMessageExpiration: boolean;
    LockDuration: string;
    RequiresSession: boolean;
  }

  declare interface Azure$ServiceBus$PaginationOptions {
    top: number;
    skip: number;
  }

  declare interface Azure$ServiceBus$ICreateRuleOptions {
    trueFilter: string;
    falseFilter: string;
    sqlExpressionFilter: string;
    correlationIdFilter: string;
    sqlRuleAction: string;
  }

  declare interface Azure$ServiceBus$ICreateNotificationHubOptions {
    apns: Azure$ServiceBus$Dictionary<string>;
    gcm: Azure$ServiceBus$Dictionary<string>;
    mpns: Azure$ServiceBus$Dictionary<string>;
    wns: Azure$ServiceBus$Dictionary<string>;
  }

  declare export interface Azure$ServiceBus$NotificationHubRegistration {
    BodyTemplate?: any;
    ChannelUri?: string;
    DeviceToken?: string;
    Expiry?: Date;
    gcmRegistrationId?: string;
    MpnsHeaders?: any;
    RegistrationId: string;
    Tags?: string;
    WnsHeaders?: any;
  }

  declare export interface Azure$ServiceBus$NotificationHubInstallation {
    installationId: string;
    +lastActiveOn?: string;
    +expirationTime?: string;
    +lastUpdate?: string;
    platform: "apns" | "wns" | "mpns" | "adm" | "gcm";
    pushChannel: string;
    +expiredPushChannel?: string;
    tags?: Array<string>;
    templates?: {
      [name: string]: {
        body: string,
        headers?: any,
        expiry?: string,
        tags?: Array<string>
      }
    };
    secondaryTile?: {
      [titleId: string]: {
        pushChannel: string,
        tags?: Array<string>,
        templates?: any
      }
    };
  }

  declare export interface Azure$ServiceBus$Response {
    body: Azure$ServiceBus$Dictionary<string | { [key: string]: any }>;
    headers: Azure$ServiceBus$Dictionary<string>;
    isSuccessful: boolean;
    md5?: string;
    statusCode: number;
  }

  declare export type Azure$ServiceBus$ErrorResponse = {
    body: {
      Error: {
        Code: string,
        Detail: string
      }
    }
  } & Response;

  declare var npm$namespace$Azure$ServiceBus$Results: {
    Models: typeof npm$namespace$Azure$ServiceBus$Results$Models
  };

  declare var npm$namespace$Azure$ServiceBus$Results$Models: {
    ActiveMessageCount: typeof Azure$ServiceBus$Results$Models$ActiveMessageCount,
    DeadLetterMessageCount: typeof Azure$ServiceBus$Results$Models$DeadLetterMessageCount,
    ScheduledMessageCount: typeof Azure$ServiceBus$Results$Models$ScheduledMessageCount,
    TransferMessageCount: typeof Azure$ServiceBus$Results$Models$TransferMessageCount,
    TransferDeadLetterMessageCount: typeof Azure$ServiceBus$Results$Models$TransferDeadLetterMessageCount,
    EntityStatus: typeof Azure$ServiceBus$Results$Models$EntityStatus,
    EntityAvailabilityStatus: typeof Azure$ServiceBus$Results$Models$EntityAvailabilityStatus
  };

  declare export var Azure$ServiceBus$Results$Models$EntityStatus: {|
    +Active: "Active", // "Active"
    +Creating: "Creating", // "Creating"
    +Deleting: "Deleting", // "Deleting"
    +Disabled: "Disabled", // "Disabled"
    +ReceiveDisabled: "ReceiveDisabled", // "ReceiveDisabled"
    +Renaming: "Renaming", // "Renaming"
    +Restoring: "Restoring", // "Restoring"
    +SendDisabled: "SendDisabled", // "SendDisabled"
    +Unknown: "Unknown" // "Unknown"
  |};

  declare export var Azure$ServiceBus$Results$Models$EntityAvailabilityStatus: {|
    +Available: "Available", // "Available"
    +Limited: "Limited", // "Limited"
    +Renaming: "Renaming", // "Renaming"
    +Restoring: "Restoring", // "Restoring"
    +Unknown: "Unknown" // "Unknown"
  |};

  declare interface Azure$ServiceBus$Results$Models$Base {
    _: {
      ContentRootElement: string,
      id: string,
      title: string,
      published: Azure$ServiceBus$DateString,
      updated: Azure$ServiceBus$DateString,
      author?: {
        name: string
      },
      link: string
    };
    CreatedAt: Azure$ServiceBus$DateString;
  }

  declare type Azure$ServiceBus$Results$Models$ExtendedBase = {
    AuthorizationRules: string,
    AutoDeleteOnIdle: string,
    DefaultMessageTimeToLive: string,
    DuplicateDetectionHistoryTimeWindow: Azure$ServiceBus$Duration,
    EnableBatchedOperations: string,
    EnableExpress: string,
    EnablePartitioning: string,
    EntityAvailabilityStatus: string,
    IsAnonymousAccessible: string,
    MaxSizeInMegabytes: string,
    RequiresDuplicateDetection: string,
    SizeInBytes: string,
    Status: $Values<typeof Azure$ServiceBus$Results$Models$EntityStatus>,
    UpdatedAt: Azure$ServiceBus$DateString
  } & Base;

  declare export var Azure$ServiceBus$Results$Models$ActiveMessageCount: any; // "d2p1:ActiveMessageCount";

  declare export var Azure$ServiceBus$Results$Models$DeadLetterMessageCount: any; // "d2p1:DeadLetterMessageCount";

  declare export var Azure$ServiceBus$Results$Models$ScheduledMessageCount: any; // "d2p1:ScheduledMessageCount";

  declare export var Azure$ServiceBus$Results$Models$TransferMessageCount: any; // "d2p1:TransferMessageCount";

  declare export var Azure$ServiceBus$Results$Models$TransferDeadLetterMessageCount: any; // "d2p1:TransferDeadLetterMessageCount";

  declare export type Azure$ServiceBus$Results$Models$Topic = {
    AccessedAt: Azure$ServiceBus$DateString,
    CountDetails: {
      [key: string]: string
    },
    EnableSubscriptionPartitioning: string,
    FilteringMessagesBeforePublishing: string,
    IsExpress: string,
    SubscriptionCount: string,
    SupportOrdering: string,
    TopicName: string
  } & ExtendedBase;

  declare export type Azure$ServiceBus$Results$Models$Queue = {
    DeadLetteringOnMessageExpiration: string,
    LockDuration: Azure$ServiceBus$Duration,
    MaxDeliveryCount: string,
    MessageCount: string,
    QueueName: string,
    RequiresSession: string,
    SupportOrdering: string
  } & ExtendedBase;

  declare export type Azure$ServiceBus$Results$Models$Subscription = {
    CountDetails: {
      [key: string]: string
    },
    DeadLetteringOnFilterEvaluationExceptions: string,
    DeadLetteringOnMessageExpiration: string,
    LockDuration: string,
    MaxDeliveryCount: string,
    MessageCount: string,
    RequiresSession: string,
    SubscriptionName: string,
    TopicName: string
  } & ExtendedBase;

  /**
   * @see https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-sql-filter
   */
  declare interface Azure$ServiceBus$Results$Models$SqlFilter {
    +CompatibilityLevel: string;
    Parameters?: Azure$ServiceBus$Dictionary<any>;
    RequiresPreprocessing?: string;
    SqlExpression: string;
  }

  declare type Azure$ServiceBus$Results$Models$CorrelationFilter = $Shape<{
    ContentType: string,
    CorrelationId: string,
    Label: string,
    Properties: string,
    ReplyTo: string,
    ReplyToSessionId: string,
    RequiresPreprocessing: string,
    SessionId: string,
    To: string
  }>;

  declare export type Azure$ServiceBus$Results$Models$Rule = {
    Action: string | Azure$ServiceBus$Results$Models$SqlFilter,
    Filter:
      | Azure$ServiceBus$Results$Models$SqlFilter
      | Azure$ServiceBus$Results$Models$CorrelationFilter,
    Name: string,
    TopicName: string,
    SubscriptionName: string,
    RuleName: string
  } & Base;

  declare export type Azure$ServiceBus$ResponseCallback = (
    error: Error | null,
    response: Azure$ServiceBus$Response
  ) => void;

  declare export type Azure$ServiceBus$ResultAndResponseCallback = (
    error: Error | null,
    result:
      | boolean
      | Azure$ServiceBus$Results$Models$Base
      | Azure$ServiceBus$Results$Models$Base[],
    response: Azure$ServiceBus$Response
  ) => void;

  declare export type Azure$ServiceBus$TypedResultAndResponseCallback<T> = (
    error: Error | null,
    result: T,
    response: Azure$ServiceBus$Response
  ) => void;

  declare export type Azure$ServiceBus$BrokerProperties = $Shape<Azure$ServiceBus$IBrokerProperties>;

  declare export type Azure$ServiceBus$BrokerPropertiesResponse = Azure$ServiceBus$IBrokerPropertiesResponse &
    $Shape<Azure$ServiceBus$IBrokerProperties>;

  declare export type Azure$ServiceBus$CreateQueueOptions = $Shape<Azure$ServiceBus$IQueueOptions>;

  declare export type Azure$ServiceBus$CreateTopicOptions = $Shape<Azure$ServiceBus$ICreateTopicOptions>;

  declare export type Azure$ServiceBus$CreateTopicIfNotExistsOptions = $Shape<Azure$ServiceBus$ICreateTopicIfNotExistsOptions>;

  declare export type Azure$ServiceBus$CreateSubscriptionOptions = $Shape<Azure$ServiceBus$ICreateSubscriptionOptions>;

  declare export type Azure$ServiceBus$ListSubscriptionsOptions = $Shape<Azure$ServiceBus$PaginationOptions>;

  declare export type Azure$ServiceBus$ListRulesOptions = $Shape<Azure$ServiceBus$PaginationOptions>;

  declare export type Azure$ServiceBus$ListTopicsOptions = $Shape<Azure$ServiceBus$PaginationOptions>;

  declare export type Azure$ServiceBus$ListQueuesOptions = $Shape<Azure$ServiceBus$PaginationOptions>;

  declare export type Azure$ServiceBus$CreateRuleOptions = $Shape<Azure$ServiceBus$ICreateRuleOptions>;

  declare export type Azure$ServiceBus$CreateNotificationHubOptions = $Shape<Azure$ServiceBus$ICreateNotificationHubOptions>;

  declare export type Azure$ServiceBus$ListNotificationHubsOptions = $Shape<Azure$ServiceBus$PaginationOptions>;

  declare export type Azure$ServiceBus$MessageOrName =
    | Azure$ServiceBus$Message
    | string;
}
