declare module 'pubnub' {
        declare class Pubnub  {
constructor(config: Pubnub$Pubnub$PubnubConfig): this;
static CATEGORIES: Pubnub$Pubnub$Categories;
static OPERATIONS: Pubnub$Pubnub$Operations;
static generateUUID(): string;
setUUID(uuid: string): void;
getUUID(): string;
setAuthKey(authKey: string): void;
setFilterExpression(filterExpression: string): void;
getFilterExpression(): string;
publish(
params: Pubnub$Pubnub$PublishParameters,
callback: (
status: Pubnub$Pubnub$PublishStatus,
response: Pubnub$Pubnub$PublishResponse) => void): void;
publish(
params: Pubnub$Pubnub$PublishParameters): Promise<Pubnub$Pubnub$PublishResponse>;
fire(
params: Pubnub$Pubnub$FireParameters,
callback: (
status: Pubnub$Pubnub$PublishStatus,
response: Pubnub$Pubnub$PublishResponse) => void): void;
fire(params: Pubnub$Pubnub$FireParameters): Promise<Pubnub$Pubnub$PublishResponse>;
history(
params: Pubnub$Pubnub$HistoryParameters,
callback: (
status: Pubnub$Pubnub$HistoryStatus,
response: Pubnub$Pubnub$HistoryResponse) => void): void;
subscribe(params: Pubnub$Pubnub$SubscribeParameters): void;
unsubscribe(params: Pubnub$Pubnub$UnsubscribeParameters): void;
unsubscribeAll(): void;
stop(): void;
addListener(params: Pubnub$Pubnub$ListenerParameters): void;
removeListener(params: Pubnub$Pubnub$ListenerParameters): void;
hereNow(
params: Pubnub$Pubnub$HereNowParameters,
callback: (
status: Pubnub$Pubnub$HereNowStatus,
response: Pubnub$Pubnub$HereNowResponse) => void): void;
hereNow(
params: Pubnub$Pubnub$HereNowParameters): Promise<Pubnub$Pubnub$HereNowResponse>;
whereNow(
params: Pubnub$Pubnub$WhereNowParameters,
callback: (
status: Pubnub$Pubnub$WhereNowStatus,
response: Pubnub$Pubnub$WhereNowResponse) => void): void;
whereNow(
params: Pubnub$Pubnub$WhereNowParameters): Promise<Pubnub$Pubnub$WhereNowResponse>;
getState(
params: Pubnub$Pubnub$GetStateParameters,
callback: (
status: Pubnub$Pubnub$GetStateStatus,
state: Pubnub$Pubnub$GetStateResponse) => void): void;
getState(
params: Pubnub$Pubnub$GetStateParameters): Promise<Pubnub$Pubnub$GetStateResponse>;
setState(
params: Pubnub$Pubnub$SetStateParameters,
callback: (
status: Pubnub$Pubnub$SetStateStatus,
state: Pubnub$Pubnub$SetStateResponse) => void): void;
setState(
params: Pubnub$Pubnub$SetStateParameters): Promise<Pubnub$Pubnub$SetStateResponse>;
encrypt(
data: string,
customCipherKey?: string,
options?: Pubnub$Pubnub$CryptoParameters): any;
decrypt(
data: {[key: string]: any},
customCipherKey?: string,
options?: Pubnub$Pubnub$CryptoParameters): any
}
	declare interface Pubnub$PubnubConfig {
subscribeKey: string,
publishKey?: string,
cipherKey?: string,
authKey?: string,
logVerbosity?: boolean,
uuid?: string,
ssl?: boolean,
origin?: string,
presenceTimeout?: number,
heartbeatInterval?: number,
restore?: boolean,
keepAlive?: boolean,
keepAliveSettings?: {
keepAliveMsecs?: number,
freeSocketKeepAliveTimeout?: number,
timeout?: number,
maxSockets?: number,
maxFreeSockets?: number
},
suppressLeaveEvents?: boolean,
secretKey?: string
} 

declare interface Pubnub$MessageEvent {
channel: string,
subscription: string,
timetoken: string,
message: any,
publisher: string,

/**
 * @deprecated
 */
actualChannel: string,

/**
 * @deprecated
 */
subscribedChannel: string
} 

declare type Pubnub$PubnubData = Pubnub$MessageEvent;

declare interface Pubnub$StatusEvent {
category: string,
operation: string,
affectedChannels: string[],
subscribedChannels: string[],
affectedChannelGroups: string[],
lastTimetoken: number | string,
currentTimetoken: number | string
} 

declare interface Pubnub$PresenceEvent {
action: "join" | "leave" | "state-change" | "timeout",
channel: string,
occupancy: number,
state?: any,
subscription: string,
timestamp: number,
timetoken: string,
uuid: string,

/**
 * @deprecated
 */
actualChannel: string,

/**
 * @deprecated
 */
subscribedChannel: string
} 

declare interface Pubnub$PublishParameters {
message: any,
channel: string,
storeInHistory?: boolean,
sendByPost?: boolean,
meta?: any,
ttl?: number
} 

declare interface Pubnub$PublishResponse {
timetoken: number
} 

declare interface Pubnub$HistoryParameters {
channel: string,
count: number,
stringifiedTimeToken?: boolean,
includeTimetoken?: boolean,
reverse?: boolean,
start?: number,
end?: number
} 

declare interface Pubnub$HistoryMessage {
entry: any,
timetoken?: string | number
} 

declare interface Pubnub$HistoryResponse {
endTimeToken?: number,
startTimeToken?: number,
messages: Pubnub$HistoryMessage[]
} 

declare interface Pubnub$HistoryStatus {
error: boolean,
errorData?: Error,
operation: string,
statusCode?: number
} 

declare interface Pubnub$PublishStatus {
operation: string,
category: string,
error: boolean,
errorData: Error
} 

declare interface Pubnub$FireParameters {
message: any,
channel: string,
sendByPost?: boolean,
meta?: any
} 

declare interface Pubnub$SubscribeParameters {
channels?: string[],
channelGroups?: string[],
withPresence?: boolean,
timetoken?: number
} 

declare interface Pubnub$UnsubscribeParameters {
channels?: string[],
channelGroups?: string[]
} 

declare interface Pubnub$ListenerParameters {
status(statusEvent: Pubnub$StatusEvent): void,
message(messageEvent: Pubnub$MessageEvent): void,
presence(presenceEvent: Pubnub$PresenceEvent): void
} 

declare interface Pubnub$HereNowParameters {
channels?: string[],
channelGroups?: string[],
includeUUIDs?: boolean,
includeState?: boolean
} 

declare interface Pubnub$HereNowResponse {
totalChannels: number,
totalOccupancy: number,
channels: {
[channel: string]: {
name: string,
occupancy: number,
occupants: Array<{
uuid: string,
state?: any
}>
}
}
} 

declare interface Pubnub$HereNowStatus {
error: boolean,
operation: string,
statusCode: number
} 

declare interface Pubnub$WhereNowParameters {
uuid?: string
} 

declare interface Pubnub$WhereNowStatus {
error: boolean,
operation: string,
statusCode: number
} 

declare interface Pubnub$WhereNowResponse {
channels: string[]
} 

declare interface Pubnub$SetStateParameters {
channels?: string[],
channelGroups?: string[],
state?: any
} 

declare interface Pubnub$SetStateStatus {
error: boolean,
operation: string,
statusCode: number
} 

declare interface Pubnub$SetStateResponse {
state: any
} 

declare interface Pubnub$GetStateParameters {
uuid?: string,
channels?: string[],
channelGroups?: string[]
} 

declare interface Pubnub$GetStateStatus {
error: boolean,
operation: string,
statusCode: number
} 

declare interface Pubnub$GetStateResponse {
channels: {
[channel: string]: any
}
} 

declare interface Pubnub$CryptoParameters {
encryptKey?: boolean,
keyEncoding?: string,
keyLength?: number,
mode?: string
} 

declare interface Pubnub$Categories {
PNNetworkUpCategory: string,
PNNetworkDownCategory: string,
PNNetworkIssuesCategory: string,
PNTimeoutCategory: string,
PNBadRequestCategory: string,
PNAccessDeniedCategory: string,
PNUnknownCategory: string,
PNReconnectedCategory: string,
PNConnectedCategory: string,
PNRequestMessageCountExceededCategory: string
} 

declare interface Pubnub$Operations {
PNTimeOperation: string,
PNHistoryOperation: string,
PNDeleteMessagesOperation: string,
PNFetchMessagesOperation: string,
PNSubscribeOperation: string,
PNUnsubscribeOperation: string,
PNPublishOperation: string,
PNPushNotificationEnabledChannelsOperation: string,
PNRemoveAllPushNotificationsOperation: string,
PNWhereNowOperation: string,
PNSetStateOperation: string,
PNHereNowOperation: string,
PNGetStateOperation: string,
PNHeartbeatOperation: string,
PNChannelGroupsOperation: string,
PNRemoveGroupOperation: string,
PNChannelsForGroupOperation: string,
PNAddChannelsToGroupOperation: string,
PNRemoveChannelsFromGroupOperation: string,
PNAccessManagerGrant: string,
PNAccessManagerAudit: string
} 
	declare module.exports: typeof Pubnub

    }
