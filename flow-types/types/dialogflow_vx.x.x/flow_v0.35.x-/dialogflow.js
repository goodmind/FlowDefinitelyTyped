declare module 'dialogflow' {
        declare class v2$AgentsClient  {
constructor(options?: ClientOptions): this;
servicePath: string;
port: number;
scopes: string[];
getProjectId(): Promise<string>;
getProjectId(callback?: (error: Error, id: string) => string): void;
getAgent(
request: GetAgentRequest,
options?: gax$gax$CallOptions,
cb?: (err: Error, agent: Agent) => void): Promise<[Agent]>;
searchAgents(
request: SearchAgentRequest,
options?: gax$gax$CallOptions,
cb?: (err: Error, agents: Agent[], arg3: any, response: any) => void): Promise<Agent[]>;
searchAgentsStream(request: SearchAgentRequest, options?: gax$gax$CallOptions): any;
trainAgent(
request: TrainAgentRequest,
options?: gax$gax$CallOptions,
cb?: (err: Error, operation: gax$longrunning$Operation) => void): Promise<[gax$longrunning$Operation]>;
exportAgent(
request: ExportAgentRequest,
options?: gax$gax$CallOptions,
cb?: (err: Error, operation: gax$longrunning$Operation) => void): Promise<[gax$longrunning$Operation]>;
importAgent(
request: ImportAgentRequest,
options?: gax$gax$CallOptions,
cb?: (err: Error, operation: gax$longrunning$Operation) => void): Promise<[gax$longrunning$Operation]>;
restoreAgent(
request: RestoreAgentRequest,
options?: gax$gax$CallOptions,
cb?: (err: Error, operation: gax$longrunning$Operation) => void): Promise<[gax$longrunning$Operation]>
}

declare class v2$ContextsClient  {
constructor(options?: ClientOptions): this;
servicePath: string;
port: number;
scopes: string[];
getProjectId(): Promise<string>;
getProjectId(callback?: (error: Error, id: string) => string): void;
listContexts(
request: ListContextsRequest,
options?: gax$gax$CallOptions): Promise<[Context[]]>;
listContextsStream(request: ListContextsRequest, options?: gax$gax$CallOptions): any;
getContext(request: GetContextRequest, options?: gax$gax$CallOptions): Promise<[Context]>;
createContext(
request: CreateContextReqeust,
options?: gax$gax$CallOptions): Promise<[Context]>;
updateContext(
request: UpdateContextRequest,
options?: gax$gax$CallOptions): Promise<[Context]>;
deleteContext(request: DeleteContextRequest, options?: gax$gax$CallOptions): Promise<void>;
deleteAllContexts(
request: DeleteAllContextsRequest,
options?: gax$gax$CallOptions): Promise<void>;
sessionPath(project: string, session: string): string;
contextPath(project: string, session: string, context: string): string;
matchProjectFromContextName(name: string): string;
matchSessionFromContextName(name: string): string;
matchContextFromContextName(name: string): string;
matchProjectFromSessionName(name: string): string;
matchSessionFromSessionName(name: string): string
}

declare class v2$EntityTypesClient  {
constructor(options?: ClientOptions): this;
servicePath: string;
port: number;
scopes: string[];
getProjectId(): Promise<string>;
getProjectId(callback?: (error: Error, id: string) => string): void;
listEntityTypes(
request: ListEntityTypesRequest,
options?: gax$gax$CallOptions): Promise<[EntityType[]]>;
listEntityTypesStream(request: ListEntityTypesRequest, options?: gax$gax$CallOptions): any;
getEntityType(
request: GetEntityTypeRequest,
options?: gax$gax$CallOptions): Promise<[EntityType]>;
createEntityType(
request: CreateEntityTypeRequest,
options?: gax$gax$CallOptions): Promise<[EntityType]>;
updateEntityType(
request: UpdateEntityTypeRequest,
options?: gax$gax$CallOptions): Promise<[EntityType]>;
deleteEntityType(request: DeleteEntityTypeRequest, options?: gax$gax$CallOptions): Promise<void>;
projectAgentPath(project: string): string;
entityTypePath(project: string, entityType: string): string;
matchProjectFromProjectAgentName(entityTypeName: string): string;
matchProjectFromEntityTypeName(entityTypeName: string): string;
matchEntityTypeFromEntityTypeName(entityTypeName: string): string
}

declare class v2$IntentsClient  {
constructor(options?: ClientOptions): this;
servicePath: string;
port: number;
scopes: string[];
getProjectId(): Promise<string>;
getProjectId(callback?: (error: Error, id: string) => string): void;
listIntents(
request: ListIntentsRequest,
options?: gax$gax$CallOptions): Promise<[Intent[]]>;
getIntent(request: GetIntentRequest, options?: gax$gax$CallOptions): Promise<[Intent]>;
createIntent(request: CreateIntentRequest, options?: gax$gax$CallOptions): Promise<[Intent]>;
updateIntent(request: UpdateIntentRequest, options?: gax$gax$CallOptions): Promise<[Intent]>;
deleteIntent(request: DeleteIntentRequest, options?: gax$gax$CallOptions): Promise<void>;
projectAgentPath(project: string): string;
intentPath(project: string, intent: string): string;
agentPath(project: string, agent: string): string;
matchProjectFromProjectAgentName(projectAgentName: string): string;
matchProjectFromIntentName(intentName: string): string;
matchIntentFromIntentName(intentName: string): string;
matchProjectFromAgentName(agentName: string): string;
matchAgentFromAgentName(agentName: string): string
}

declare class v2$SessionEntityTypesClient  {
constructor(options?: ClientOptions): this;
servicePath: string;
port: number;
scopes: string[];
getProjectId(): Promise<string>;
getProjectId(callback?: (error: Error, id: string) => string): void;
listSessionEntityTypes(
request: ListSessionEntityTypesRequest,
options?: gax$gax$CallOptions): Promise<[SessionEntityType[]]>;
getSessionEntityType(
request: GetSessionEntityTypeRequest,
options?: gax$gax$CallOptions): Promise<[SessionEntityType]>;
createSessionEntityType(
request: CreateSessionEntityTypeRequest,
options?: gax$gax$CallOptions): Promise<[SessionEntityType]>;
updateSessionEntityType(
request: UpdateSessionEntityTypeRequest,
options?: gax$gax$CallOptions): Promise<[SessionEntityType]>;
deleteSessionEntityType(
request: DeleteSessionEntityTypeRequest,
options?: gax$gax$CallOptions): Promise<void>
}

declare class v2$SessionsClient  {
constructor(options?: ClientOptions): this;
servicePath: string;
port: number;
scopes: string[];
getProjectId(): Promise<string>;
getProjectId(callback?: (error: Error, id: string) => string): void;
detectIntent(
request: DetectIntentRequest,
options?: gax$gax$CallOptions): Promise<DetectIntentResponse[]>;
streamingDetectIntent(options?: gax$gax$CallOptions): Promise<any>;
sessionPath(projectId: string, sessionId: string): string
}
	declare class v2beta1$AgentsClient mixins v2$v2beta1$AgentsClient {}

declare class v2beta1$ContextsClient mixins v2$v2beta1$ContextsClient {
environmentSessionPath(project: string, environment: string, user: string, session: string): string;
environmentContextPath(
project: string,
environment: string,
user: string,
session: string,
context: string): string;
matchProjectFromEnvironmentSessionName(environmentSessionName: string): string;
matchEnvironmentFromEnvironmentSessionName(environmentSessionName: string): string;
matchUserFromEnvironmentSessionName(environmentSessionName: string): string;
matchSessionFromEnvironmentSessionName(environmentSessionName: string): string;
matchProjectFromEnvironmentContextName(environmentContextName: string): string;
matchEnvironmentFromEnvironmentContextName(environmentContextName: string): string;
matchUserFromEnvironmentContextName(environmentContextName: string): string;
matchSessionFromEnvironmentContextName(environmentContextName: string): string;
matchContextFromEnvironmentContextName(environmentContextName: string): string
}

declare class v2beta1$EntityTypesClient mixins v2$v2beta1$EntityTypesClient {}

declare class v2beta1$IntentsClient mixins v2$v2beta1$IntentsClient {}

declare class v2beta1$SessionEntityTypesClient mixins v2$v2beta1$SessionEntityTypesClient {}

declare class v2beta1$SessionsClient mixins v2$v2beta1$SessionsClient {
environmentSessionPath(project: string, environment: string, user: string, session: string): string;
matchProjectFromEnvironmentSessionName(environmentSessionName: string): string;
matchEnvironmentFromEnvironmentSessionName(environmentSessionName: string): string;
matchUserFromEnvironmentSessionName(environmentSessionName: string): string;
matchSessionFromEnvironmentSessionName(environmentSessionName: string): string
}
	declare export class AgentsClient mixins v2$v2beta1$AgentsClient {}
	declare export class ContextsClient mixins v2$v2beta1$ContextsClient {}
	declare export class EntityTypesClient mixins v2$v2beta1$EntityTypesClient {}
	declare export class IntentsClient mixins v2$v2beta1$IntentsClient {}
	declare export class SessionEntityTypesClient mixins v2$v2beta1$SessionEntityTypesClient {}
	declare export class SessionsClient mixins v2$v2beta1$SessionsClient {}
	declare interface DateTimeVariants$DateTime {
date_time: string,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface DateTimeVariants$DateTimePeriod {
startDateTime: DateTimeVariants$DateTime,
endDateTime: DateTimeVariants$DateTime
} 

declare interface DateTimeVariants$DatePeriod {
startDate: entities$Date,
endDate: entities$Date
} 

declare interface DateTimeVariants$TimePeriod {
startTime: string,
endTime: string
} 

declare interface entities$DateTime {
date_time: string,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface entities$Duration {
unit: string,
amount: number
} 

declare type entities$Date = string;

declare type entities$Time = string;
	declare interface gax$BackoffSettings {
initialRetryDelayMillis: number,
retryDelayMultiplier: number,
maxRetryDelayMillis: number,
initialRpcTimeoutMillis: number,
maxRpcTimeoutMillis: number,
totalTimeoutMillis: number
} 

declare interface gax$RetryOptions {
retryCodes: string[],
backoffSettings: gax$BackoffSettings
} 

declare interface gax$CallOptions {
timeout?: number,
retry?: gax$RetryOptions,
autoPaginate?: boolean,
pageToken?: any,
isBundling?: boolean,
longrunning?: gax$BackoffSettings,
promise?: PromiseConstructor
} 

declare interface gax$Operation {
grpcOp: longrunning$gax$Operation,
longrunningDescriptor: any,
backoffSettings: gax$BackoffSettings,
callOptions?: gax$CallOptions,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 
	declare interface longrunning$Operation {
grpcOp: longrunning$longrunning$Operation,
longrunningDescriptor: any,
backoffSettings: gax$BackoffSettings,
callOptions?: gax$CallOptions,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface longrunning$BaseOperation {
name: string,
metadata: any,
done: boolean
} 

declare type longrunning$UnfinishedOperation = {
done: false
} & longrunning$BaseOperation


declare type longrunning$FailedOperation = {
done: true,
error: longrunning$Status
} & longrunning$BaseOperation


declare type longrunning$SuccessfulOperation = {
done: true,
response: any
} & longrunning$BaseOperation


declare interface longrunning$Status {
code: number,
message: string,
details: any[]
} 
	declare export interface GetAgentRequest {
parent: string
} 
	declare export interface SearchAgentRequest {
parent: string,
pageSize?: number
} 
	declare export interface TrainAgentRequest {
parent: string
} 
	declare export interface ExportAgentRequest {
parent: string,
agentUri?: string
} 
	declare export interface ImportAgentRequest {
parent: string,
agentUri?: string,
agentContent?: string
} 
	declare export interface RestoreAgentRequest {
parent: string,
agentUri?: string,
agentContent?: string
} 
	declare export interface ListContextsRequest {
parent: string,
pageSize?: number
} 
	declare export interface GetContextRequest {
name: string
} 
	declare export interface CreateContextReqeust {
parent: string,
context: Context
} 
	declare export interface UpdateContextRequest {
context: Context,
updatemask?: any
} 
	declare export interface DeleteContextRequest {
name: string
} 
	declare export interface DeleteAllContextsRequest {
parent: string
} 
	declare export interface ListEntityTypesRequest {
parent: string,
languageCode?: string,
pageSize?: number
} 
	declare export interface GetEntityTypeRequest {
name: string,
languageCode?: string
} 
	declare export interface CreateEntityTypeRequest {
parent: string,
entityType: EntityType
} 
	declare export interface UpdateEntityTypeRequest {
entityType: EntityType,
languageCode?: string,

/**
 * @link https://github.com/google/protobuf/blob/master/src/google/protobuf/field_mask.proto
 */
updateMask?: any
} 
	declare export interface DeleteEntityTypeRequest {
name: string
} 
	declare export interface ListSessionEntityTypesRequest {
parent: string,
pageSize?: number
} 
	declare export interface GetSessionEntityTypeRequest {
name: string
} 
	declare export interface CreateSessionEntityTypeRequest {
parent: string,
sessionEntityType: SessionEntityType
} 
	declare export interface UpdateSessionEntityTypeRequest {
sessionEntityType: SessionEntityType,

/**
 * @link https://github.com/google/protobuf/blob/master/src/google/protobuf/field_mask.proto
 */
updateMask: any
} 
	declare export interface DeleteSessionEntityTypeRequest {
name: string
} 
	declare export interface ListIntentsRequest {
parent: string,
languageCode?: string,
intentView?: IntentView,
pageSize?: number
} 
	declare export interface GetIntentRequest {
name: string,
languageCode?: string,
intentView?: IntentView
} 
	declare export interface CreateIntentRequest {
parent: string,
intent: Intent,
languageCode?: string,
intentView?: IntentView
} 
	declare export interface UpdateIntentRequest {
intent: Intent,
languageCode?: string,
updateMask?: any,
intentView?: IntentView
} 
	declare export interface DeleteIntentRequest {
name: string
} 
	declare export interface DetectIntentRequest {
session: string,
queryInput: QueryInput,
queryParams?: QueryParams,
inputAudio?: any
} 
	declare export interface DetectIntentResponse {
responseId: string,
queryResult: QueryResult,
webhookStatus: longrunning$Status
} 
	declare export interface QueryResult {
queryText: string,
languageCode: string,
speechRecognitionConfidence: number,
action: string,
parameters: any,
allRequiredParamsSent: boolean,
fulfillmentText: string,
fulfillmentMessages: Message[],
webhookSource: string,
webhookPayload: any,
outputContexts: Context[],
intent: Intent,
intentDetectionConfidence: number,
sentimentAnalysisResult?: {
queryTextSentiment: {
magnitude: number,
score: number
}
},
diagnosticInfo: any
} 
	declare export interface Status {
code: StatusCode,
message: string,
details: any[]
} 
	declare export  class StatusCode {
  constructor(...args: empty): mixed;
static +OK: Class<StatusCode__OK> & StatusCode__OK & 0;// 0
static +CANCELLED: Class<StatusCode__CANCELLED> & StatusCode__CANCELLED & 1;// 1
static +UNKNOWN: Class<StatusCode__UNKNOWN> & StatusCode__UNKNOWN & 2;// 2
static +INVALID_ARGUMENT: Class<StatusCode__INVALID_ARGUMENT> & StatusCode__INVALID_ARGUMENT & 3;// 3
static +DEADLINE_EXCEEDED: Class<StatusCode__DEADLINE_EXCEEDED> & StatusCode__DEADLINE_EXCEEDED & 4;// 4
static +NOT_FOUND: Class<StatusCode__NOT_FOUND> & StatusCode__NOT_FOUND & 5;// 5
static +ALREADY_EXISTS: Class<StatusCode__ALREADY_EXISTS> & StatusCode__ALREADY_EXISTS & 6;// 6
static +PERMISSION_DENIED: Class<StatusCode__PERMISSION_DENIED> & StatusCode__PERMISSION_DENIED & 7;// 7
static +UNAUTHENTICATED: Class<StatusCode__UNAUTHENTICATED> & StatusCode__UNAUTHENTICATED & 16;// 16
static +RESOURCE_EXHAUSTED: Class<StatusCode__RESOURCE_EXHAUSTED> & StatusCode__RESOURCE_EXHAUSTED & 8;// 8
static +FAILED_PRECONDITION: Class<StatusCode__FAILED_PRECONDITION> & StatusCode__FAILED_PRECONDITION & 9;// 9
static +ABORTED: Class<StatusCode__ABORTED> & StatusCode__ABORTED & 10;// 10
static +OUT_OF_RANGE: Class<StatusCode__OUT_OF_RANGE> & StatusCode__OUT_OF_RANGE & 11;// 11
static +UNIMPLEMENTED: Class<StatusCode__UNIMPLEMENTED> & StatusCode__UNIMPLEMENTED & 12;// 12
static +INTERNAL: Class<StatusCode__INTERNAL> & StatusCode__INTERNAL & 13;// 13
static +UNAVAILABLE: Class<StatusCode__UNAVAILABLE> & StatusCode__UNAVAILABLE & 14;// 14
static +DATA_LOSS: Class<StatusCode__DATA_LOSS> & StatusCode__DATA_LOSS & 15;// 15

}

declare class StatusCode__OK mixins StatusCode {}
declare class StatusCode__CANCELLED mixins StatusCode {}
declare class StatusCode__UNKNOWN mixins StatusCode {}
declare class StatusCode__INVALID_ARGUMENT mixins StatusCode {}
declare class StatusCode__DEADLINE_EXCEEDED mixins StatusCode {}
declare class StatusCode__NOT_FOUND mixins StatusCode {}
declare class StatusCode__ALREADY_EXISTS mixins StatusCode {}
declare class StatusCode__PERMISSION_DENIED mixins StatusCode {}
declare class StatusCode__UNAUTHENTICATED mixins StatusCode {}
declare class StatusCode__RESOURCE_EXHAUSTED mixins StatusCode {}
declare class StatusCode__FAILED_PRECONDITION mixins StatusCode {}
declare class StatusCode__ABORTED mixins StatusCode {}
declare class StatusCode__OUT_OF_RANGE mixins StatusCode {}
declare class StatusCode__UNIMPLEMENTED mixins StatusCode {}
declare class StatusCode__INTERNAL mixins StatusCode {}
declare class StatusCode__UNAVAILABLE mixins StatusCode {}
declare class StatusCode__DATA_LOSS mixins StatusCode {}

	declare export interface Agent {
parent: string,
displayName: string,
defaultLanguageCode: string,
supportedLanguageCodes?: string[],
timeZone: string,
description?: string,
avatarUri?: string,
enableLogging?: boolean,
matchMode?: MatchMode,
classificationThreshold?: number
} 
	declare export interface Context<N, T> {
name: N,
lifespanCount?: number,
parameters?: T
} 
	declare export interface EntityType {
name: string,
entities: EntitySynonyms[],
displayName: string,
kind: EntityKind,
autoExpansionMode: EntityAutoExpansionMode
} 
	declare export  class MatchMode {
  constructor(...args: empty): mixed;
static +MATCH_MODE_UNSPECIFIED: Class<MatchMode__MATCH_MODE_UNSPECIFIED> & MatchMode__MATCH_MODE_UNSPECIFIED & "MATCH_MODE_UNSPECIFIED";// "MATCH_MODE_UNSPECIFIED"
static +MATCH_MODE_HYBRID: Class<MatchMode__MATCH_MODE_HYBRID> & MatchMode__MATCH_MODE_HYBRID & "MATCH_MODE_HYBRID";// "MATCH_MODE_HYBRID"
static +MATCH_MODE_ML_ONLY: Class<MatchMode__MATCH_MODE_ML_ONLY> & MatchMode__MATCH_MODE_ML_ONLY & "MATCH_MODE_ML_ONLY";// "MATCH_MODE_ML_ONLY"

}

declare class MatchMode__MATCH_MODE_UNSPECIFIED mixins MatchMode {}
declare class MatchMode__MATCH_MODE_HYBRID mixins MatchMode {}
declare class MatchMode__MATCH_MODE_ML_ONLY mixins MatchMode {}

	declare export interface Credentials {
client_email: string,
private_key: string
} 
	declare export interface ClientOptions {
credentials?: Credentials,
email?: string,
keyFilename?: string,
port?: number,
projectId?: string,
promise?: PromiseConstructor,
servicePath?: string
} 
	declare export interface EntitySynonyms {
synonyms: string[],
value: string
} 
	declare export  class EntityKind {
  constructor(...args: empty): mixed;
static +KIND_MAP: Class<EntityKind__KIND_MAP> & EntityKind__KIND_MAP & "KIND_MAP";// "KIND_MAP"
static +KIND_LIST: Class<EntityKind__KIND_LIST> & EntityKind__KIND_LIST & "KIND_LIST";// "KIND_LIST"

}

declare class EntityKind__KIND_MAP mixins EntityKind {}
declare class EntityKind__KIND_LIST mixins EntityKind {}

	declare export  class EntityAutoExpansionMode {
  constructor(...args: empty): mixed;
static +AUTO_EXPANSION_MODE_DEFAULT: Class<EntityAutoExpansionMode__AUTO_EXPANSION_MODE_DEFAULT> & EntityAutoExpansionMode__AUTO_EXPANSION_MODE_DEFAULT & "AUTO_EXPANSION_MODE_DEFAULT";// "AUTO_EXPANSION_MODE_DEFAULT"
static +AUTO_EXPANSION_MODE_UNSPECIFIED: Class<EntityAutoExpansionMode__AUTO_EXPANSION_MODE_UNSPECIFIED> & EntityAutoExpansionMode__AUTO_EXPANSION_MODE_UNSPECIFIED & "AUTO_EXPANSION_MODE_UNSPECIFIED";// "AUTO_EXPANSION_MODE_UNSPECIFIED"

}

declare class EntityAutoExpansionMode__AUTO_EXPANSION_MODE_DEFAULT mixins EntityAutoExpansionMode {}
declare class EntityAutoExpansionMode__AUTO_EXPANSION_MODE_UNSPECIFIED mixins EntityAutoExpansionMode {}

	declare export  class IntentView {
  constructor(...args: empty): mixed;
static +INTENT_VIEW_UNSPECIFIED: Class<IntentView__INTENT_VIEW_UNSPECIFIED> & IntentView__INTENT_VIEW_UNSPECIFIED & "INTENT_VIEW_UNSPECIFIED";// "INTENT_VIEW_UNSPECIFIED"
static +INTENT_VIEW_FULL: Class<IntentView__INTENT_VIEW_FULL> & IntentView__INTENT_VIEW_FULL & "INTENT_VIEW_FULL";// "INTENT_VIEW_FULL"

}

declare class IntentView__INTENT_VIEW_UNSPECIFIED mixins IntentView {}
declare class IntentView__INTENT_VIEW_FULL mixins IntentView {}

	declare export interface Intent {
name: string,
displayName: string,
webhookState: string,
priority?: number,
isFallback?: boolean,
mlEnabled?: boolean,
inputContextNames?: string[],
events?: string[],
trainingPhrases?: TrainingPhrase[],
action?: string,
outputContexts?: Context[],
resetContexts?: boolean,
parameters?: Parameter[],
messages?: Message[],
defaultResponsePlatforms?: string[],
rootFollowupIntentName: string,
parentFollowupIntentName: string,
followupIntentInfo?: FollowupIntentInfo[]
} 
	declare export interface TrainingPhrase {
name: string,
type: string,
parts: Part[],
timesAddedCount?: number
} 
	declare export interface Part {
text: string,
entityType?: string,
alias?: string,
userDefined?: boolean
} 
	declare export interface Parameter {
name: string,
displayName: string,
value?: string,
defaultValue?: string,
entityTypeDisplayName?: string,
mandatory?: boolean,
prompts?: string[],
isList?: boolean
} 
	declare export interface FollowupIntentInfo {
followupIntentName: string,
parentFollowupIntentName: string
} 
	declare export interface Message {
platform?: string,
text?: Text,
card?: Card,
payload?: any
} 
	declare export interface Text {
text: string[]
} 
	declare export interface Card {
title?: string,
subtitle?: string,
imageUri?: string,
buttons?: Button[]
} 
	declare export interface Button {
text?: string,
postback?: string
} 
	declare export interface EventInput {
name: string,
languageCode: string,
parameters?: any
} 
	declare export interface TextInput {
text: string,
languageCode: string
} 
	declare export interface QueryInput {
text?: TextInput,
event?: EventInput
} 
	declare export interface QueryParams {
timeZone?: string,
geoLocation?: LatLong,
contexts?: Context[],
resetContexts?: boolean,
sessionEntityTypes?: SessionEntityType[],
payload?: any
} 
	declare export interface LatLong {
latitude: number,
longitude: number
} 
	declare export interface SessionEntityType {
name: string,
entityOverrideMode: string,
entities: Entity[]
} 
	declare export interface Entity {
value: string,
synonyms: string[]
} 
	declare export interface WebhookRequest {
session: string,
responseId: string,
queryResult: QueryResult,
originalDetectIntentRequest?: any
} 
	declare export interface WebhookResponse {
fulfillmentText?: string,
fulfillmentMessages?: Message[],
source?: string,
payload?: any,
outputContexts?: Context[],
followupEventInput?: EventInput
} 
    }
