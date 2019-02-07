declare module 'twilio' {
        declare interface twilio {
(sid?: string, tkn?: string, options?: twilio$twilio$ClientOptions): twilio$twilio$RestClient
} 
	declare function twilio(
sid?: string,
tkn?: string,
options?: twilio$twilio$ClientOptions): twilio$twilio$RestClient

	
      declare var npm$namespace$twilio: {
        webhook: typeof twilio$webhook,
validateRequest: typeof twilio$validateRequest,
validateExpressRequest: typeof twilio$validateExpressRequest,
        
      }
declare export interface twilio$GrantPayload {} 

declare export interface twilio$Grant {
toPayload(): twilio$GrantPayload
} 

declare export interface twilio$RequestCallback {
(err: any, data: any, response: Http.IncomingMessage): void
} 

declare export interface twilio$RestMethod {
(callback: twilio$RequestCallback): Q.Promise<any>,
(args: any, callback?: twilio$RequestCallback): Q.Promise<any>
} 

declare export interface twilio$BaseMappedResource<T> {
(resourceSid: string): T
} 

declare export interface twilio$Resource {
get: twilio$RestMethod
} 

declare export type twilio$DeletableResource = {
delete: twilio$RestMethod
} & twilio$Resource


declare export type twilio$ListableResource = {
list: twilio$RestMethod
} & twilio$Resource


declare export type twilio$MappedResource<T> = {} & twilio$Resource & twilio$BaseMappedResource<T>


declare export type twilio$PostableResource = {
post: twilio$RestMethod
} & twilio$Resource


declare export type twilio$InstanceResource = {
update: twilio$RestMethod
} & twilio$PostableResource & twilio$DeletableResource


declare export type twilio$CreatableMappedResource<T> = {
create: twilio$RestMethod
} & twilio$MappedResource<T> & twilio$PostableResource


declare export type twilio$ListMappedResource<T> = {} & twilio$CreatableMappedResource<T> & twilio$ListableResource


declare export interface twilio$IpMessagingGrantOptions {
serviceSid: string,
endpointId: string,
deploymentRoleSid: string,
pushCredentialSid: string
} 

declare export type twilio$IpMessagingGrantPayload = {
service_sid: string,
endpoint_id: string,
deployment_role_sid: string,
push_credential_sid: string
} & twilio$GrantPayload


declare export class twilio$IpMessagingGrant mixins twilio$Grant {
serviceSid: string;
endpointId: string;
deploymentRoleSid: string;
pushCredentialSid: string;
key: string;
constructor(options?: twilio$IpMessagingGrantOptions): this;
toPayload(): twilio$IpMessagingGrantPayload
}

declare export interface twilio$ConversationsGrantOptions {
configurationProfileSid: string
} 

declare export type twilio$ConversationsGrantPayload = {
configuration_profile_sid: string
} & twilio$GrantPayload


declare export class twilio$ConversationsGrant mixins twilio$Grant {
configurationProfileSid: string;
constructor(options?: twilio$ConversationsGrantOptions): this;
toPayload(): twilio$ConversationsGrantPayload
}

declare export interface twilio$AccessTokenOptions {
ttl: number,
identity: string,
nbf: number
} 

declare export class twilio$AccessToken  {
accountSid: string;
keySid: string;
secret: string;
ttl: number;
identity: string;
nbf: number;
grants: Array<twilio$Grant>;
static twilio$IpMessagingGrant: twilio$IpMessagingGrant;
static ConversationGrant: twilio$ConversationsGrant;
static DEFAULT_ALGORITHM: string;
static ALGORITHMS: Array<string>;
constructor(accountSid: string, keySid: string, secret: string, opts?: twilio$AccessTokenOptions): this;
addGrant(grant: twilio$Grant): void;
toJwt(algorithm: string): any
}

declare export class twilio$Capability  {
accountSid: string;
authToken: string;
capabilities: Array<string>;
clientName: string;
outgoingScopeParams: any;
scopeParams: any;
constructor(sid?: string, tkn?: string): this;
allowClientIncoming(clientName: string): twilio$Capability;
allowClientOutgoing(appSid: string, params?: any): twilio$Capability;
allowEventStream(filters?: any): twilio$Capability;
generate(timeout?: number): string
}

declare export interface twilio$ClientOptions {
host?: string,
apiVersion?: string,
timeout?: number
} 

declare export interface twilio$ClientRequestOptions {
url: string,
method?: string,
form?: any
} 

declare export class twilio$Client  {
accountSid: string;
authToken: string;
host: string;
apiVersion: string;
timeout: number;
constructor(sid?: string, tkn?: string, host?: string, api_version?: string, timeout?: number): this;
getBaseUrl(): string;
request(
options: twilio$ClientRequestOptions,
callback?: twilio$RequestCallback): Q.Promise<any>
}

declare export class twilio$IpMessagingClient mixins twilio$Client {
services: twilio$ServiceResource;
credentials: twilio$CredentialResource;
constructor(sid?: string, tkn?: string, options?: twilio$ClientOptions): this
}

declare export class twilio$LookupsClient mixins twilio$Client {
phoneNumbers: twilio$PhoneNumberResource;
constructor(sid?: string, tkn?: string, options?: twilio$ClientOptions): this
}

declare export class twilio$MonitorClient mixins twilio$Client {
events: twilio$EventResource;
alerts: twilio$AlertResource;
constructor(sid?: string, tkn?: string, options?: twilio$ClientOptions): this
}

declare export class twilio$PricingClient mixins twilio$Client {
voice: twilio$PricingVoiceResource;
phoneNumbers: twilio$PricingPhoneNumberResource;
messaging: twilio$PricingMessagingResource;
constructor(sid?: string, tkn?: string, options?: twilio$ClientOptions): this
}

declare export class twilio$RestClient mixins twilio$Client {
constructor(sid?: string, tkn?: string, options?: twilio$ClientOptions): this;
accounts: twilio$AccountResource;
availablePhoneNumbers: twilio$AvailablePhoneNumberResource;
outgoingCallerIds: twilio$OutgoingCallerIdResource;
incomingPhoneNumbers: twilio$IncomingPhoneNumberResource;
messages: twilio$MessageResource;
sms: twilio$SMSIntermediary;
applications: twilio$ApplicationResource;
connectApps: twilio$ConnectAppResource;
authorizedConnectApps: twilio$AuthorizedConnectAppResource;
calls: twilio$CallResource;
conferences: twilio$ConferenceResource;
queues: twilio$QueueResource;
recordings: twilio$RecordingResource;
tokens: twilio$TokenResource;
transcriptions: twilio$TranscriptionResource;
notifications: twilio$NotificationResource;
usage: twilio$UsageIntermediary;
sip: twilio$SIPIntermediary;
addresses: twilio$AddressResource;
keys: twilio$KeyResource;
put: twilio$RestMethod;
post: twilio$RestMethod;
get: twilio$RestMethod;
update: twilio$RestMethod;
list: twilio$RestMethod;
sendSms: twilio$RestMethod;
sendMms: twilio$RestMethod;
sendMessage: twilio$RestMethod;
listSms: twilio$RestMethod;
listMessages: twilio$RestMethod;
getSms(messageSid: string, callback?: twilio$RequestCallback): Q.Promise<any>;
getMessage(messageSid: string, callback?: twilio$RequestCallback): Q.Promise<any>;
makeCall: twilio$RestMethod;
listCalls: twilio$RestMethod;
getCall(callSid: string, callback?: twilio$RequestCallback): Q.Promise<any>;
request(
options: twilio$ClientRequestOptions,
callback?: twilio$RequestCallback): Q.Promise<any>
}

declare export interface twilio$Policy {
url: string,
method: string,
query_filter?: any,
post_filter?: any,
allow: boolean
} 

declare export class twilio$TaskRouterCapability  {
accountSid: string;
authToken: string;
policies: Array<twilio$Policy>;
workspaceSid: string;
channelId: string;
constructor(accountSid: string, authToken: string, workspaceSid: string, channelId: string): this;
_setupResource(): void;
allowFetchSubresources(): void;
allowUpdates(): void;
allowUpdatesSubresources(): void;
allowDelete(): void;
allowDeleteSubresources(): void;
allowWorkerActivityUpdates(): void;
allowWorkerFetchAttributes(): void;
allowTaskReservationUpdates(): void;
addPolicy(
url: string,
method: string,
allowed?: boolean,
queryFilter?: any,
postFilter?: any): void;
allow(url: string, method: string, queryFilter?: any, postFilter?: any): void;
deny(url: string, method: string, queryFilter?: any, postFilter?: any): void;
generate(ttl: number): string
}

declare export class twilio$TaskRouterClient mixins twilio$Client {
workspaces: twilio$WorkspaceResource;
workspace: twilio$WorkspaceResource;
constructor(sid?: string, tkn?: string, workspaceSid?: string, options?: twilio$ClientOptions): this
}

declare export class twilio$TaskRouterTaskQueueCapability mixins twilio$TaskRouterCapability {
constructor(accountSid: string, authToken: string, workspaceSid: string, taskQueueSid: string): this;
_setupResource(): void
}

declare export class twilio$TaskRouterWorkerCapability mixins twilio$TaskRouterCapability {
reservationsUrl: string;
activityUrl: string;
workerReservationsUrl: string;
constructor(accountSid: string, authToken: string, workspaceSid: string, workerSid: string): this;
_setupResource(): void;
allowActivityUpdates(): void;
allowReservationUpdates(): void
}

declare export class twilio$TaskRouterWorkspaceCapability mixins twilio$TaskRouterCapability {
constructor(accountSid: string, authToken: string, workspaceSid: string): this;
_setupResource(): void
}

declare export class twilio$TrunkingClient mixins twilio$Client {
trunks: twilio$TrunkResource;
constructor(sid?: string, tkn?: string, options?: twilio$ClientOptions): this
}

declare export interface twilio$NodeOptions {
name: string,
attributes?: any,
text?: string,
topLevel?: boolean,
legalNodes: Array<string>
} 

declare export interface twilio$TwimlMethod {
(): twilio$Node,
(arg1: twilio$TwimlCallback | string, arg2?: any): twilio$Node,
(arg1: any, arg2?: twilio$TwimlCallback | string): twilio$Node
} 

declare export interface twilio$TwimlCallback {
(node: twilio$Node): void
} 

declare export class twilio$Node mixins twilio$NodeOptions {
name: string;
attributes: any;
text: any;
topLevel: boolean;
legalNodes: Array<string>;
constructor(config?: twilio$NodeOptions): this;
gather: twilio$TwimlMethod;
say: twilio$TwimlMethod;
play: twilio$TwimlMethod;
pause: twilio$TwimlMethod;
dial: twilio$TwimlMethod;
number: twilio$TwimlMethod;
client: twilio$TwimlMethod;
conference: twilio$TwimlMethod;
queue: twilio$TwimlMethod;
sip: twilio$TwimlMethod;
message: twilio$TwimlMethod;
media: twilio$TwimlMethod;
body: twilio$TwimlMethod;
enqueue: twilio$TwimlMethod;
task: twilio$TwimlMethod;
record: twilio$TwimlMethod;
sms: twilio$TwimlMethod;
hangup: twilio$TwimlMethod;
redirect: twilio$TwimlMethod;
reject: twilio$TwimlMethod;
leave: twilio$TwimlMethod;
toString(): string
}

declare export class twilio$TwimlResponse mixins twilio$Node {}

declare export interface twilio$WebhookOptions {
validate?: boolean,
includeHelpers?: boolean,
host?: string,
protocol?: string
} 

declare export interface twilio$WebhookExpressOptions {
url?: string,
host?: string,
protocol?: string
} 

declare export interface twilio$MiddlewareFunction {
(request: Http.IncomingMessage, response: Http.ServerResponse, next: Express.NextFunction): void
} 

declare export function twilio$webhook(authToken: string, options?: twilio$WebhookOptions): twilio$MiddlewareFunction


declare export function twilio$webhook(options?: twilio$WebhookOptions): twilio$MiddlewareFunction


declare export function twilio$validateRequest(authToken: string, twilioHeader: string, url: string, params?: any): boolean


declare export function twilio$validateExpressRequest(
request: Express.Request,
authToken: string,
options?: twilio$WebhookExpressOptions): boolean


declare export type twilio$OutgoingCallerIdInstance = {
put: twilio$RestMethod
} & twilio$InstanceResource


declare export type twilio$OutgoingCallerIdResource = {} & twilio$CreatableMappedResource<twilio$OutgoingCallerIdInstance>


declare export type twilio$SMSMessageInstance = {} & twilio$Resource


declare export type twilio$SMSMessageResource = {} & twilio$CreatableMappedResource<twilio$SMSMessageInstance>


declare export type twilio$SMSShortCodeInstance = {
update: twilio$RestMethod
} & twilio$PostableResource


declare export type twilio$SMSShortCodeResource = {} & twilio$MappedResource<twilio$SMSShortCodeInstance>


declare export interface twilio$SMSIntermediary {
messages: twilio$SMSMessageResource,
shortCodes: twilio$SMSShortCodeResource
} 

declare export type twilio$ApplicationInstance = {} & twilio$InstanceResource


declare export type twilio$ApplicationResource = {} & twilio$CreatableMappedResource<twilio$ApplicationInstance>


declare export type twilio$ConnectAppInstance = {
update: twilio$RestMethod
} & twilio$PostableResource


declare export type twilio$ConnectAppResource = {} & twilio$MappedResource<twilio$ConnectAppInstance>


declare export type twilio$AuthorizedConnectAppInstance = {} & twilio$Resource


declare export type twilio$AuthorizedConnectAppResource = {} & twilio$MappedResource<twilio$AuthorizedConnectAppInstance>


declare export interface twilio$TokenInstance {} 

declare export type twilio$TokenResource = {
post: twilio$RestMethod,
create: twilio$RestMethod
} & twilio$BaseMappedResource<twilio$TokenInstance>


declare export type twilio$TranscriptionInstance = {} & twilio$DeletableResource


declare export type twilio$TranscriptionResource = {} & twilio$MappedResource<twilio$TranscriptionInstance>


declare export type twilio$NotificationInstance = {} & twilio$DeletableResource


declare export type twilio$NotificationResource = {} & twilio$MappedResource<twilio$NotificationInstance>


declare export type twilio$UsageTriggerInstance = {} & twilio$InstanceResource


declare export type twilio$UsageTriggerResource = {} & twilio$CreatableMappedResource<twilio$UsageTriggerInstance>


declare export interface twilio$UsageIntermediary {
records: twilio$UsageRecordResource,
triggers: twilio$UsageTriggerResource
} 

declare export interface twilio$SIPIntermediary {
domains: twilio$DomainResource,
ipAccessControlLists: twilio$IPAccessControlListResource,
credentialLists: twilio$CredentialListResource
} 

declare export type twilio$KeyInstance = {} & twilio$InstanceResource


declare export type twilio$KeyResource = {} & twilio$CreatableMappedResource<twilio$KeyInstance>


declare export type twilio$AccountInstance = {
update: twilio$RestMethod,
put: twilio$RestMethod,
availablePhoneNumbers: twilio$AvailablePhoneNumberResource,
outgoingCallerIds: twilio$OutgoingCallerIdResource,
incomingPhoneNumbers: twilio$IncomingPhoneNumberResource,
messages: twilio$MessageResource,
sms: twilio$SMSIntermediary,
applications: twilio$ApplicationResource,
connectApps: twilio$ConnectAppResource,
authorizedConnectApps: twilio$AuthorizedConnectAppResource,
calls: twilio$CallResource,
conferences: twilio$ConferenceResource,
queues: twilio$QueueResource,
recordings: twilio$RecordingResource,
tokens: twilio$TokenResource,
transcriptions: twilio$TranscriptionResource,
notifications: twilio$NotificationResource,
usage: twilio$UsageIntermediary,
sip: twilio$SIPIntermediary,
addresses: twilio$AddressResource,
keys: twilio$KeyResource
} & twilio$PostableResource


declare export type twilio$AccountResource = {} & twilio$AccountInstance & twilio$ListMappedResource<twilio$AccountInstance>


declare export type twilio$DependentPhoneNumberResource = {} & twilio$ListableResource


declare export type twilio$AddressInstance = {
dependentPhoneNumbers: twilio$DependentPhoneNumberResource
} & twilio$PostableResource & twilio$DeletableResource


declare export type twilio$AddressResource = {} & twilio$ListMappedResource<twilio$AddressInstance>


declare export type twilio$AvailablePhoneNumberResourceGroup = {
search: twilio$RestMethod
} & twilio$ListableResource


declare export interface twilio$AvailablePhoneNumberInstance {
local: twilio$AvailablePhoneNumberResourceGroup,
tollFree: twilio$AvailablePhoneNumberResourceGroup,
mobile: twilio$AvailablePhoneNumberResourceGroup
} 

declare export type twilio$AvailablePhoneNumberResource = {} & twilio$BaseMappedResource<twilio$AvailablePhoneNumberInstance>


declare export type twilio$CallRecordingResource = {} & twilio$ListableResource


declare export type twilio$CallNotificationResource = {} & twilio$ListableResource


declare export type twilio$CallFeedbackResource = {
create: twilio$RestMethod
} & twilio$PostableResource & twilio$DeletableResource


declare export type twilio$CallInstance = {
recordings: twilio$CallRecordingResource,
notifications: twilio$CallNotificationResource,
feedback: twilio$CallFeedbackResource
} & twilio$InstanceResource


declare export type twilio$CallFeedbackSummaryInstance = {} & twilio$DeletableResource


declare export type twilio$CallFeedbackSummaryResource = {
post: twilio$RestMethod,
create: twilio$RestMethod
} & twilio$BaseMappedResource<twilio$CallFeedbackSummaryInstance>


declare export type twilio$CallResource = {
feedbackSummary: twilio$CallFeedbackSummaryResource
} & twilio$CreatableMappedResource<twilio$CallInstance> & twilio$ListableResource


declare export type twilio$ConferenceParticipantInstance = {
kick: twilio$RestMethod
} & twilio$InstanceResource


declare export type twilio$ConferenceParticipantResource = {} & twilio$MappedResource<twilio$ConferenceParticipantInstance> & twilio$ListableResource


declare export type twilio$ConferenceInstance = {
participants: twilio$ConferenceParticipantResource
} & twilio$Resource


declare export type twilio$ConferenceResource = {} & twilio$MappedResource<twilio$ConferenceInstance> & twilio$ListableResource


declare export type twilio$IncomingPhoneNumberResourceGroup = {
create: twilio$RestMethod
} & twilio$PostableResource


declare export type twilio$IncomingPhoneNumberInstance = {
put: twilio$RestMethod
} & twilio$InstanceResource


declare export type twilio$IncomingPhoneNumberResource = {
local: twilio$IncomingPhoneNumberResourceGroup,
tollFree: twilio$IncomingPhoneNumberResourceGroup,
mobile: twilio$IncomingPhoneNumberResourceGroup
} & twilio$CreatableMappedResource<twilio$IncomingPhoneNumberInstance>


declare export type twilio$MessageMediaInstance = {} & twilio$DeletableResource


declare export type twilio$MessageMediaResource = {} & twilio$MappedResource<twilio$MessageMediaInstance> & twilio$ListableResource


declare export type twilio$MessageInstance = {
media: twilio$MessageMediaResource
} & twilio$PostableResource & twilio$DeletableResource


declare export type twilio$MessageResource = {} & twilio$ListMappedResource<twilio$MessageInstance>


declare export type twilio$QueueMemberInstance = {
update: twilio$RestMethod
} & twilio$PostableResource


declare export type twilio$QueueMemberResource = {
front: twilio$QueueMemberInstance
} & twilio$MappedResource<twilio$QueueMemberInstance>


declare export type twilio$QueueInstance = {
members: twilio$QueueMemberResource
} & twilio$InstanceResource


declare export type twilio$QueueResource = {} & twilio$CreatableMappedResource<twilio$QueueInstance>


declare export type twilio$RecordingTranscriptionResource = {} & twilio$ListableResource


declare export type twilio$RecordingInstance = {
transcriptions: twilio$RecordingTranscriptionResource
} & twilio$ListableResource & twilio$DeletableResource


declare export type twilio$RecordingResource = {} & twilio$MappedResource<twilio$RecordingInstance> & twilio$ListableResource


declare export type twilio$UsageRecordInstance = {} & twilio$Resource


declare export type twilio$UsageRecordRange = {} & twilio$ListableResource


declare export type twilio$UsageRecordResource = {
daily: twilio$UsageRecordRange,
monthly: twilio$UsageRecordRange,
yearly: twilio$UsageRecordRange,
allTime: twilio$UsageRecordRange,
today: twilio$UsageRecordRange,
yesterday: twilio$UsageRecordRange,
thisMonth: twilio$UsageRecordRange,
lastMonth: twilio$UsageRecordRange
} & twilio$MappedResource<twilio$UsageRecordInstance>


declare export type twilio$CredentialInstance = {} & twilio$InstanceResource


declare export type twilio$CredentialResource = {} & twilio$ListMappedResource<twilio$CredentialInstance>


declare export type twilio$ServiceUserInstance = {} & twilio$InstanceResource


declare export type twilio$ServiceUserResource = {} & twilio$ListMappedResource<twilio$ServiceUserInstance>


declare export type twilio$ServiceRoleInstance = {} & twilio$Resource


declare export type twilio$ServiceRoleResource = {} & twilio$MappedResource<twilio$ServiceRoleInstance> & twilio$ListableResource


declare export type twilio$ServiceChannelMessageInstance = {} & twilio$InstanceResource


declare export type twilio$ServiceChannelMessageResource = {} & twilio$ListMappedResource<twilio$ServiceChannelMessageInstance>


declare export type twilio$ServiceChannelMemberInstance = {} & twilio$InstanceResource


declare export type twilio$ServiceChannelMemberResource = {} & twilio$ListMappedResource<twilio$ServiceChannelMemberInstance>


declare export type twilio$ServiceChannelInstance = {
messages: twilio$ServiceChannelMessageResource,
members: twilio$ServiceChannelMemberResource
} & twilio$InstanceResource


declare export type twilio$ServiceChannelResource = {} & twilio$ListMappedResource<twilio$ServiceChannelInstance>


declare export type twilio$ServiceInstance = {
users: twilio$ServiceUserResource,
roles: twilio$ServiceRoleResource,
channels: twilio$ServiceChannelResource
} & twilio$InstanceResource


declare export type twilio$ServiceResource = {} & twilio$ListMappedResource<twilio$ServiceInstance>


declare export type twilio$PhoneNumberInstance = {} & twilio$Resource


declare export type twilio$PhoneNumberResource = {} & twilio$BaseMappedResource<twilio$PhoneNumberInstance>


declare export type twilio$AlertInstance = {} & twilio$Resource


declare export type twilio$AlertResource = {} & twilio$MappedResource<twilio$AlertInstance> & twilio$ListableResource


declare export type twilio$EventInstance = {} & twilio$Resource


declare export type twilio$EventResource = {} & twilio$MappedResource<twilio$EventInstance> & twilio$ListableResource


declare export type twilio$CountryInstance = {} & twilio$Resource


declare export type twilio$CountryResource = {} & twilio$MappedResource<twilio$CountryInstance> & twilio$ListableResource


declare export interface twilio$PricingMessagingResource {
countries: twilio$CountryResource
} 

declare export interface twilio$PricingPhoneNumberResource {
countries: twilio$CountryResource
} 

declare export type twilio$NumberInstance = {} & twilio$Resource


declare export type twilio$NumberResource = {} & twilio$MappedResource<twilio$NumberInstance> & twilio$ListableResource


declare export interface twilio$PricingVoiceResource {
countries: twilio$CountryResource,
numbers: twilio$NumberResource
} 

declare export type twilio$CredentialListInstance = {
credentials: twilio$CredentialResource
} & twilio$InstanceResource


declare export type twilio$CredentialListResource = {} & twilio$ListMappedResource<twilio$CredentialListInstance>


declare export type twilio$IPAccessControlListMappingInstance = {} & twilio$DeletableResource


declare export type twilio$IPAccessControlListMappingResource = {} & twilio$ListMappedResource<twilio$IPAccessControlListMappingInstance>


declare export type twilio$CredentialListMappingInstance = {} & twilio$DeletableResource


declare export type twilio$CredentialListMappingResource = {} & twilio$ListMappedResource<twilio$CredentialListMappingInstance>


declare export type twilio$DomainInstance = {
ipAccessControlListMappings: twilio$IPAccessControlListMappingResource,
credentialListMappings: twilio$CredentialListMappingResource
} & twilio$InstanceResource


declare export type twilio$DomainResource = {} & twilio$ListMappedResource<twilio$DomainInstance>


declare export type twilio$IPAddressInstance = {} & twilio$InstanceResource


declare export type twilio$IPAddressResource = {} & twilio$ListMappedResource<twilio$IPAddressInstance>


declare export type twilio$IPAccessControlListInstance = {
ipAddresses: twilio$IPAddressResource
} & twilio$InstanceResource


declare export type twilio$IPAccessControlListResource = {} & twilio$ListMappedResource<twilio$IPAccessControlListInstance>


declare export interface twilio$WorkflowRuleTargetOptions {
queue: string,
expression?: string,
priority?: number,
timeout?: number
} 

declare export class twilio$WorkflowRuleTarget  {
queue: string;
expression: string;
priority: number;
timeout: number;
constructor(options?: twilio$WorkflowRuleTargetOptions): this
}

declare export interface twilio$WorkflowRuleOptions {
expression: string,
targets: Array<twilio$WorkflowRuleTargetOptions>,
friendly_name?: string,
friendlyName?: string,
filter_friendly_name?: string
} 

declare export class twilio$WorkflowRule  {
friendly_name: string;
expression: string;
targets: Array<twilio$WorkflowRuleTarget>;
friendlyName: string;
constructor(options?: twilio$WorkflowRuleOptions): this
}

declare export interface twilio$TaskRoutingConfigurationOptions {
filters: Array<twilio$WorkflowRuleOptions>,
default_filter?: twilio$WorkflowRuleOptions,
defaultFilter?: twilio$WorkflowRuleOptions
} 

declare export class twilio$TaskRoutingConfiguration  {
filters: Array<twilio$WorkflowRule>;
default_filter: twilio$WorkflowRuleOptions;
defaultFilter: twilio$WorkflowRuleOptions;
constructor(options?: twilio$TaskRoutingConfigurationOptions): this
}

declare export interface twilio$WorkflowConfigurationOptions {
task_routing?: twilio$TaskRoutingConfigurationOptions,
taskRouting?: twilio$TaskRoutingConfigurationOptions
} 

declare export class twilio$WorkflowConfiguration  {
task_routing: twilio$TaskRoutingConfiguration;
taskRouting: twilio$TaskRoutingConfiguration;
constructor(options?: twilio$WorkflowConfigurationOptions): this;
static fromJSON(json: string): twilio$WorkflowConfiguration;
toJSON(): string
}

declare export type twilio$WorkspaceActivityInstance = {} & twilio$InstanceResource


declare export type twilio$WorkspaceActivityResource = {} & twilio$ListMappedResource<twilio$WorkspaceActivityInstance>


declare export type twilio$WorkspaceEventInstance = {} & twilio$Resource


declare export type twilio$WorkspaceEventResource = {} & twilio$MappedResource<twilio$WorkspaceEventInstance> & twilio$ListableResource


declare export type twilio$WorkspaceTaskReservationInstance = {
update: twilio$RestMethod
} & twilio$PostableResource


declare export type twilio$WorkspaceTaskReservationResource = {} & twilio$MappedResource<twilio$WorkspaceTaskReservationInstance> & twilio$ListableResource


declare export type twilio$WorkspaceTaskInstance = {
reservations: twilio$WorkspaceTaskReservationResource
} & twilio$InstanceResource


declare export type twilio$WorkspaceTaskResource = {} & twilio$ListMappedResource<twilio$WorkspaceTaskInstance>


declare export type twilio$WorkspaceInstanceStatisticResource = {} & twilio$Resource


declare export type twilio$WorkspaceStatisticResource = {} & twilio$ListableResource


declare export type twilio$WorkspaceTaskQueueInstance = {
statistics: twilio$WorkspaceInstanceStatisticResource
} & twilio$InstanceResource


declare export type twilio$WorkspaceTaskQueueResource = {
statistics: twilio$WorkspaceStatisticResource
} & twilio$ListMappedResource<twilio$WorkspaceTaskQueueInstance>


declare export type twilio$WorkspaceWorkerReservationInstance = {
update: twilio$RestMethod
} & twilio$PostableResource


declare export type twilio$WorkspaceWorkerReservationResource = {} & twilio$MappedResource<twilio$WorkspaceWorkerReservationInstance> & twilio$ListableResource


declare export type twilio$WorkspaceWorkerInstance = {
statistics: twilio$WorkspaceInstanceStatisticResource,
reservations: twilio$WorkspaceWorkerReservationResource
} & twilio$InstanceResource


declare export type twilio$WorkspaceWorkerResource = {
statistics: twilio$WorkspaceStatisticResource
} & twilio$ListMappedResource<twilio$WorkspaceWorkerInstance>


declare export type twilio$WorkspaceWorkflowInstance = {
statistics: twilio$WorkspaceInstanceStatisticResource
} & twilio$InstanceResource


declare export type twilio$WorkspaceWorkflowResource = {
statistics: twilio$WorkspaceStatisticResource
} & twilio$ListMappedResource<twilio$WorkspaceWorkflowInstance>


declare export type twilio$WorkspaceInstance = {
activities: twilio$WorkspaceActivityResource,
events: twilio$WorkspaceEventResource,
tasks: twilio$WorkspaceTaskResource,
taskQueues: twilio$WorkspaceTaskQueueResource,
workers: twilio$WorkspaceWorkerResource,
workflows: twilio$WorkspaceWorkflowResource,
statistics: twilio$WorkspaceInstanceStatisticResource
} & twilio$InstanceResource


declare export type twilio$WorkspaceResource = {} & twilio$CreatableMappedResource<twilio$WorkspaceInstance>


declare export type twilio$OriginationURLInstance = {} & twilio$InstanceResource


declare export type twilio$OriginationURLResource = {} & twilio$ListMappedResource<twilio$OriginationURLInstance>


declare export type twilio$TrunkInstance = {
ipAccessControlLists: twilio$IPAccessControlListResource,
credentialLists: twilio$CredentialListResource,
phoneNumbers: twilio$PhoneNumberResource,
originationUrls: twilio$OriginationURLResource
} & twilio$InstanceResource


declare export type twilio$TrunkResource = {} & twilio$ListMappedResource<twilio$TrunkInstance>

	declare module.exports: typeof twilio

    }
