declare module 'azure-sb' {
        declare export function createServiceBusService(
namespaceOrConnectionString?: string,
accessKey?: string,
issuer?: string,
acsNamespace?: string,
host?: string,
authenticationProvider?: {[key: string]: any}): ServiceBusService

	declare export function createNotificationHubService(
hubName: string,
endpointOrConnectionString?: string,
sharedAccessKeyName?: string,
sharedAccessKeyValue?: string): NotificationHubService

	declare export function createWrapService(acsHost: string, issuer?: string, accessKey?: string): WrapService

	declare export type ServiceBus$Duration = string;

declare export type ServiceBus$DateString = string;

declare export interface ServiceBus$Dictionary<T> {
[k: string]: T
} 

declare export interface ServiceBus$ReceiveQueueMessageOptions {
timeoutIntervalInS?: number
} 

declare export type ServiceBus$ReceiveSubscriptionMessageOptions = {
isPeekLock?: boolean
} & ServiceBus$ReceiveQueueMessageOptions


declare interface ServiceBus$IBrokerPropertiesResponse {
+DeliveryCount: number,
+LockedUntil: ServiceBus$DateString,
+LockToken: string,
+SequenceNumber: number
} 

declare interface ServiceBus$IBrokerProperties {
CorrelationId: string,
Label: string,
MessageId: string,
PartitionKey: string,
ReplyTo: string,
ReplyToSessionId: string,
ScheduledEnqueueTimeUtc: string,
SessionId: string,
TimeToLive: string,
To: string
} 

declare export interface ServiceBus$Message {
body: string,
brokerProperties?: ServiceBus$BrokerProperties,
contentType?: string,
customProperties?: ServiceBus$Dictionary<any>
} 

declare interface ServiceBus$CreateOptions {
DefaultMessageTimeToLive: string,
DuplicateDetectionHistoryTimeWindow: string,
EnablePartitioning: boolean,
MaxSizeInMegabytes: number,
RequiresDuplicateDetection: boolean
} 

declare type ServiceBus$IQueueOptions = {
AutoDeleteOnIdle: string,
DeadLetteringOnMessageExpiration: boolean,
LockDuration: string,
RequiresSession: boolean
} & ServiceBus$CreateOptions


declare type ServiceBus$ICreateTopicOptions = {
EnableBatchedOperations: boolean,
SizeInBytes: boolean,
SupportOrdering: boolean
} & ServiceBus$CreateOptions


declare type ServiceBus$ICreateTopicIfNotExistsOptions = {
EnableDeadLetteringOnFilterEvaluationExceptions: boolean,
EnableDeadLetteringOnMessageExpiration: boolean,
MaxCorrelationFiltersPerTopic: number,
MaxSqlFiltersPerTopic: number,
MaxSubscriptionsPerTopic: number
} & ServiceBus$ICreateTopicOptions


declare interface ServiceBus$ICreateSubscriptionOptions {
DefaultMessageTimeToLive: string,
EnableDeadLetteringOnFilterEvaluationExceptions: boolean,
EnableDeadLetteringOnMessageExpiration: boolean,
LockDuration: string,
RequiresSession: boolean
} 

declare interface ServiceBus$PaginationOptions {
top: number,
skip: number
} 

declare interface ServiceBus$ICreateRuleOptions {
trueFilter: string,
falseFilter: string,
sqlExpressionFilter: string,
correlationIdFilter: string,
sqlRuleAction: string
} 

declare interface ServiceBus$ICreateNotificationHubOptions {
apns: ServiceBus$Dictionary<string>,
gcm: ServiceBus$Dictionary<string>,
mpns: ServiceBus$Dictionary<string>,
wns: ServiceBus$Dictionary<string>
} 

declare export interface ServiceBus$NotificationHubRegistration {
BodyTemplate?: any,
ChannelUri?: string,
DeviceToken?: string,
Expiry?: Date,
gcmRegistrationId?: string,
MpnsHeaders?: any,
RegistrationId: string,
Tags?: string,
WnsHeaders?: any
} 

declare export interface ServiceBus$NotificationHubInstallation {
installationId: string,
+lastActiveOn?: string,
+expirationTime?: string,
+lastUpdate?: string,
platform: "apns"
| "wns"
| "mpns"
| "adm"
| "gcm",
pushChannel: string,
+expiredPushChannel?: string,
tags?: Array<string>,
templates?: {
[name: string]: {
body: string,
headers?: any,
expiry?: string,
tags?: Array<string>
}
},
secondaryTile?: {
[titleId: string]: {
pushChannel: string,
tags?: Array<string>,
templates?: any
}
}
} 

declare export interface ServiceBus$Response {
body: ServiceBus$Dictionary<string | {[key: string]: any}>,
headers: ServiceBus$Dictionary<string>,
isSuccessful: boolean,
md5?: string,
statusCode: number
} 

declare export type ServiceBus$ErrorResponse = {
body: {
Error: {
Code: string,
Detail: string
}
}
} & ServiceBus$Response



      declare var npm$namespace$Models: {
        
        ActiveMessageCount: typeof Models$ActiveMessageCount,
DeadLetterMessageCount: typeof Models$DeadLetterMessageCount,
ScheduledMessageCount: typeof Models$ScheduledMessageCount,
TransferMessageCount: typeof Models$TransferMessageCount,
TransferDeadLetterMessageCount: typeof Models$TransferDeadLetterMessageCount,
      }
declare export  class Models$EntityStatus {
  constructor(...args: empty): mixed;
static +Active: Class<Models$EntityStatus__Active> & Models$EntityStatus__Active & "Active";// "Active"
static +Creating: Class<Models$EntityStatus__Creating> & Models$EntityStatus__Creating & "Creating";// "Creating"
static +Deleting: Class<Models$EntityStatus__Deleting> & Models$EntityStatus__Deleting & "Deleting";// "Deleting"
static +Disabled: Class<Models$EntityStatus__Disabled> & Models$EntityStatus__Disabled & "Disabled";// "Disabled"
static +ReceiveDisabled: Class<Models$EntityStatus__ReceiveDisabled> & Models$EntityStatus__ReceiveDisabled & "ReceiveDisabled";// "ReceiveDisabled"
static +Renaming: Class<Models$EntityStatus__Renaming> & Models$EntityStatus__Renaming & "Renaming";// "Renaming"
static +Restoring: Class<Models$EntityStatus__Restoring> & Models$EntityStatus__Restoring & "Restoring";// "Restoring"
static +SendDisabled: Class<Models$EntityStatus__SendDisabled> & Models$EntityStatus__SendDisabled & "SendDisabled";// "SendDisabled"
static +Unknown: Class<Models$EntityStatus__Unknown> & Models$EntityStatus__Unknown & "Unknown";// "Unknown"

}

declare class Models$EntityStatus__Active mixins Models$EntityStatus {}
declare class Models$EntityStatus__Creating mixins Models$EntityStatus {}
declare class Models$EntityStatus__Deleting mixins Models$EntityStatus {}
declare class Models$EntityStatus__Disabled mixins Models$EntityStatus {}
declare class Models$EntityStatus__ReceiveDisabled mixins Models$EntityStatus {}
declare class Models$EntityStatus__Renaming mixins Models$EntityStatus {}
declare class Models$EntityStatus__Restoring mixins Models$EntityStatus {}
declare class Models$EntityStatus__SendDisabled mixins Models$EntityStatus {}
declare class Models$EntityStatus__Unknown mixins Models$EntityStatus {}


declare export  class Models$EntityAvailabilityStatus {
  constructor(...args: empty): mixed;
static +Available: Class<Models$EntityAvailabilityStatus__Available> & Models$EntityAvailabilityStatus__Available & "Available";// "Available"
static +Limited: Class<Models$EntityAvailabilityStatus__Limited> & Models$EntityAvailabilityStatus__Limited & "Limited";// "Limited"
static +Renaming: Class<Models$EntityAvailabilityStatus__Renaming> & Models$EntityAvailabilityStatus__Renaming & "Renaming";// "Renaming"
static +Restoring: Class<Models$EntityAvailabilityStatus__Restoring> & Models$EntityAvailabilityStatus__Restoring & "Restoring";// "Restoring"
static +Unknown: Class<Models$EntityAvailabilityStatus__Unknown> & Models$EntityAvailabilityStatus__Unknown & "Unknown";// "Unknown"

}

declare class Models$EntityAvailabilityStatus__Available mixins Models$EntityAvailabilityStatus {}
declare class Models$EntityAvailabilityStatus__Limited mixins Models$EntityAvailabilityStatus {}
declare class Models$EntityAvailabilityStatus__Renaming mixins Models$EntityAvailabilityStatus {}
declare class Models$EntityAvailabilityStatus__Restoring mixins Models$EntityAvailabilityStatus {}
declare class Models$EntityAvailabilityStatus__Unknown mixins Models$EntityAvailabilityStatus {}


declare interface Models$Base {
_: {
ContentRootElement: string,
id: string,
title: string,
published: ServiceBus$DateString,
updated: ServiceBus$DateString,
author?: {
name: string
},
link: string
},
CreatedAt: ServiceBus$DateString
} 

declare type Models$ExtendedBase = {
AuthorizationRules: string,
AutoDeleteOnIdle: string,
DefaultMessageTimeToLive: string,
DuplicateDetectionHistoryTimeWindow: ServiceBus$Duration,
EnableBatchedOperations: string,
EnableExpress: string,
EnablePartitioning: string,
Models$EntityAvailabilityStatus: string,
IsAnonymousAccessible: string,
MaxSizeInMegabytes: string,
RequiresDuplicateDetection: string,
SizeInBytes: string,
Status: Models$EntityStatus,
UpdatedAt: ServiceBus$DateString
} & Models$Base


declare export var Models$ActiveMessageCount: ;

declare export var Models$DeadLetterMessageCount: ;

declare export var Models$ScheduledMessageCount: ;

declare export var Models$TransferMessageCount: ;

declare export var Models$TransferDeadLetterMessageCount: ;

declare export type Models$Topic = {
AccessedAt: ServiceBus$DateString,
CountDetails: {
[key: string]: string
},
EnableSubscriptionPartitioning: string,
FilteringMessagesBeforePublishing: string,
IsExpress: string,
SubscriptionCount: string,
SupportOrdering: string,
TopicName: string
} & Models$ExtendedBase


declare export type Models$Queue = {
DeadLetteringOnMessageExpiration: string,
LockDuration: ServiceBus$Duration,
MaxDeliveryCount: string,
MessageCount: string,
QueueName: string,
RequiresSession: string,
SupportOrdering: string
} & Models$ExtendedBase


declare export type Models$Subscription = {
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
} & Models$ExtendedBase



/**
 * @see https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-sql-filter
 */
declare interface Models$SqlFilter {
+CompatibilityLevel: string,
Parameters?: ServiceBus$Dictionary<any>,
RequiresPreprocessing?: string,
SqlExpression: string
} 

declare type Models$CorrelationFilter = $Shape<{
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

declare export type Models$Rule = {
Action: string | Models$SqlFilter,
Filter: Models$SqlFilter | Models$CorrelationFilter,
Name: string,
TopicName: string,
SubscriptionName: string,
RuleName: string
} & Models$Base


declare export type ServiceBus$ResponseCallback = (error: Error | null, response: ServiceBus$Response) => void;

declare export type ServiceBus$ResultAndResponseCallback = (
error: Error | null,
result: boolean | Results$Models.Models$Base | Results$Models.Models$Base[],
response: ServiceBus$Response) => void;

declare export type ServiceBus$TypedResultAndResponseCallback<T> = (error: Error | null, result: T, response: ServiceBus$Response) => void;

declare export type ServiceBus$BrokerProperties = $Shape<ServiceBus$IBrokerProperties>;

declare export type ServiceBus$BrokerPropertiesResponse = ServiceBus$IBrokerPropertiesResponse & $Shape<ServiceBus$IBrokerProperties>;

declare export type ServiceBus$CreateQueueOptions = $Shape<ServiceBus$IQueueOptions>;

declare export type ServiceBus$CreateTopicOptions = $Shape<ServiceBus$ICreateTopicOptions>;

declare export type ServiceBus$CreateTopicIfNotExistsOptions = $Shape<ServiceBus$ICreateTopicIfNotExistsOptions>;

declare export type ServiceBus$CreateSubscriptionOptions = $Shape<ServiceBus$ICreateSubscriptionOptions>;

declare export type ServiceBus$ListSubscriptionsOptions = $Shape<ServiceBus$PaginationOptions>;

declare export type ServiceBus$ListRulesOptions = $Shape<ServiceBus$PaginationOptions>;

declare export type ServiceBus$ListTopicsOptions = $Shape<ServiceBus$PaginationOptions>;

declare export type ServiceBus$ListQueuesOptions = $Shape<ServiceBus$PaginationOptions>;

declare export type ServiceBus$CreateRuleOptions = $Shape<ServiceBus$ICreateRuleOptions>;

declare export type ServiceBus$CreateNotificationHubOptions = $Shape<ServiceBus$ICreateNotificationHubOptions>;

declare export type ServiceBus$ListNotificationHubsOptions = $Shape<ServiceBus$PaginationOptions>;

declare export type ServiceBus$MessageOrName = ServiceBus$Message | string;
    }
