declare module '@google-cloud/pubsub' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          Duplex
        } from 'stream';

	
      declare var npm$namespace$PubSub: {
        v1: typeof PubSub$v1,
        
      }
declare function PubSub$v1(config?: PubSub$GCloudConfiguration): any



/**
 * @version : Google PubSub 0.18.0
 */
declare interface PubSub$GCloudConfiguration {
projectId?: string,
keyFilename?: string,
apiEndpoint?: string,
email?: string,
credentials?: {
client_email?: string,
private_key?: string
},
autoRetry?: boolean,
maxRetries?: number,
promise?: any
} 

declare interface PubSub$PubSub {
createSubscription(
topic: PubSub$Topic | string,
name: string,
options?: PubSub$PubSub.Topic$CreateSubscriptionOptions): Promise<any[]>,
createSubscription(
topic: PubSub$Topic | string,
name: string,
callback: PubSub$PubSub.Topic$CreateSubscriptionCallback): void,
createSubscription(
topic: PubSub$Topic | string,
name: string,
options: PubSub$PubSub.Topic$CreateSubscriptionOptions,
callback: PubSub$PubSub.Topic$CreateSubscriptionCallback): void,
createTopic(name: string, gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
createTopic(name: string, callback: PubSub$PubSub.PubSub$CreateTopicCallback): void,
createTopic(
name: string,
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$PubSub.PubSub$CreateTopicCallback): void,
getSnapshots(options?: PubSub$PubSub.PubSub$GetSnapshotsOptions): Promise<any[]>,
getSnapshots(callback: PubSub$PubSub.PubSub$GetSnapshotsCallback): void,
getSnapshots(
options: PubSub$PubSub.PubSub$GetSnapshotsOptions,
callback: PubSub$PubSub.PubSub$GetSnapshotsCallback): void,
getSnapshotsStream(options?: PubSub$PubSub.PubSub$GetSnapshotsOptions): Duplex,
getSubscriptions(options?: PubSub$PubSub.Topic$GetSubscriptionsOptions): Promise<any[]>,
getSubscriptions(callback: PubSub$PubSub.Topic$GetSubscriptionsCallback): void,
getSubscriptions(
options: PubSub$PubSub.Topic$GetSubscriptionsOptions,
callback: PubSub$PubSub.Topic$GetSubscriptionsCallback): void,
getSubscriptionsStream(options?: PubSub$PubSub.Topic$GetSubscriptionsOptions): Duplex,
getTopics(query?: PubSub$PubSub.PubSub$GetTopicsQuery): Promise<any[]>,
getTopics(callback: PubSub$PubSub.PubSub$GetTopicsCallback): void,
getTopics(
query: PubSub$PubSub.PubSub$GetTopicsQuery,
callback: PubSub$PubSub.PubSub$GetTopicsCallback): void,
getTopicsStream(query?: PubSub$PubSub.PubSub$GetTopicsQuery): Duplex,
snapshot(name: string): PubSub$Snapshot,
subscription(
name: string,
options?: PubSub$PubSub.Topic$SubscriptionOptions): PubSub$Subscription,
topic(name: string): PubSub$Topic
} 

declare interface PubSub$CreateSubscriptionOptions {
flowControl?: {
maxBytes?: number,
maxMessages?: number
},
gaxOpts?: GAX$GAX$CallOptions,
messageRetentionDuration?: number | Date,
pushEndpoint?: string,
retainAckedMessages?: boolean,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare type PubSub$CreateSubscriptionCallback = (
err: Error | null,
subscription: PubSub$Subscription,
apiResponse: {[key: string]: any}) => void;

declare type PubSub$CreateTopicCallback = (
err: Error | null,
topic: PubSub$Topic,
apiResponse: {[key: string]: any}) => void;

declare interface PubSub$GetSnapshotsOptions {
autoPaginate?: boolean,
gaxOpts?: GAX$GAX$CallOptions,
pageSize?: number,
pageToken?: string
} 

declare type PubSub$GetSnapshotsCallback = (err: Error | null, snapshots: PubSub$Snapshot[]) => void;

declare interface PubSub$GetSubscriptionsOptions {
autoPaginate?: boolean,
gaxOpts?: GAX$GAX$CallOptions,
pageSize?: number,
pageToken?: string,
topic?: PubSub$Topic | string,
autoPaginate?: boolean,
gaxOpts?: GAX$GAX$CallOptions,
pageSize?: number,
pageToken?: string
} 

declare type PubSub$GetSubscriptionsCallback = (
err: Error | null,
subscriptions: PubSub$Subscription[],
apiResponse: {[key: string]: any}) => void;

declare interface PubSub$GetTopicsQuery {
autoPaginate?: boolean,
gaxOpts?: GAX$GAX$CallOptions,
pageSize?: number,
pageToken?: string
} 

declare type PubSub$GetTopicsCallback = (
err: Error | null,
topics: PubSub$Topic[],
apiResponse: {[key: string]: any}) => void;

declare interface PubSub$SubscriptionOptions {
flowControl?: {
maxBytes?: number,
maxMessages?: number
},
maxConnections?: number,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface PubSub$Publisher {
publish(data: Buffer, callback: PubSub$Publisher.Publisher$PublishCallback): void,
publish(
data: Buffer,
attributes: PubSub$Publisher.Publisher$Attributes,
callback: PubSub$Publisher.Publisher$PublishCallback): void,
publish(
data: Buffer,
attributes?: PubSub$Publisher.Publisher$Attributes): Promise<string>
} 

declare type Publisher$PublishCallback = (error: Error | null, messageId: string) => void;

declare interface Publisher$Attributes {
[key: string]: string | Buffer | ArrayBuffer
} 

declare interface PubSub$Snapshot {
delete(): Promise<any[]>,
delete(callback: PubSub$Snapshot.Topic$DeleteCallback): void
} 

declare type PubSub$SnapshotFromSubscription = {
create(name: string): Promise<any[]>,
create(name: string, callback: PubSub$Snapshot.Topic$CreateCallback): void,
seek(): Promise<any[]>,
seek(callback: PubSub$Snapshot.Subscription$SeekCallback): void
} & PubSub$Snapshot


declare type Snapshot$DeleteCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare type Snapshot$CreateCallback = (
err: Error | null,
snapshot: PubSub$Snapshot,
apiResponse: {[key: string]: any}) => void;

declare type Snapshot$SeekCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare type PubSub$Subscription = {
close(): Promise<void>,
close(callback: PubSub$Subscription.Subscription$CloseCallback): void,
createSnapshot(name: string, gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
createSnapshot(
name: string,
callback: PubSub$Subscription.Subscription$CreateSnapshotCallback): void,
createSnapshot(
name: string,
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Subscription.Subscription$CreateSnapshotCallback): void,
delete(gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
delete(callback: PubSub$Subscription.Snapshot$DeleteCallback): void,
delete(
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Subscription.Snapshot$DeleteCallback): void,
exists(): Promise<any[]>,
exists(callback: PubSub$Subscription.Topic$ExistsCallback): void,
get(gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
get(callback: PubSub$Subscription.Topic$GetCallback): void,
get(
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Subscription.Topic$GetCallback): void,
getMetadata(gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
getMetadata(callback: PubSub$Subscription.Topic$GetMetadataCallback): void,
getMetadata(
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Subscription.Topic$GetMetadataCallback): void,
iam: PubSub$IAM,
modifyPushConfig(
config: PubSub$Subscription.Subscription$PushConfig,
gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
modifyPushConfig(
config: PubSub$Subscription.Subscription$PushConfig,
callback: PubSub$Subscription.Subscription$ModifyPushConfigCallback): void,
modifyPushConfig(
config: PubSub$Subscription.Subscription$PushConfig,
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Subscription.Subscription$ModifyPushConfigCallback): void,
seek(
snapshot: string | Date,
callback: PubSub$Subscription.Snapshot$SeekCallback): void,
seek(
snapshot: string | Date,
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Subscription.Snapshot$SeekCallback): void,
setMetadata(metadata: {[key: string]: any}, gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
setMetadata(
metadata: {[key: string]: any},
callback: PubSub$Subscription.Subscription$SetMetadataCallback): void,
setMetadata(
metadata: {[key: string]: any},
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Subscription.Subscription$SetMetadataCallback): void,
snapshot(name: string): PubSub$SnapshotFromSubscription
} & EventEmitter


declare type Subscription$CloseCallback = (err: Error | null) => void;

declare type Subscription$CreateSnapshotCallback = (
err: Error | null,
snapshot: PubSub$SnapshotFromSubscription,
apiResponse: {[key: string]: any}) => void;

declare type Subscription$DeleteCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare type Subscription$ExistsCallback = (err: Error | null, exists: boolean) => void;

declare type Subscription$GetCallback = (
err: Error | null,
subscription: PubSub$Subscription,
apiResponse: {[key: string]: any}) => void;

declare type Subscription$GetMetadataCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare interface Subscription$PushConfig {
pushEndpoint?: string,
attributes?: Subscription$PushConfigAttributes
} 

declare interface Subscription$PushConfigAttributes {
"x-goog-version": "v1beta" | "v1" | "v1beta2"
} 

declare type Subscription$ModifyPushConfigCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare type Subscription$SeekCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare type Subscription$SetMetadataCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare interface PubSub$Topic {
create(gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
create(callback: PubSub$Topic.Snapshot$CreateCallback): void,
create(
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Topic.Snapshot$CreateCallback): void,
createSubscription(
nameOrOptions?: string | PubSub$Topic.PubSub$CreateSubscriptionOptions): Promise<any[]>,
createSubscription(
name: string,
options: PubSub$Topic.PubSub$CreateSubscriptionOptions): Promise<any[]>,
createSubscription(callback: PubSub$Topic.PubSub$CreateSubscriptionCallback): void,
createSubscription(
nameOrOptions: string | PubSub$Topic.PubSub$CreateSubscriptionOptions,
callback: PubSub$Topic.PubSub$CreateSubscriptionCallback): void,
createSubscription(
name: string,
options: PubSub$Topic.PubSub$CreateSubscriptionOptions,
callback: PubSub$Topic.PubSub$CreateSubscriptionCallback): void,
delete(gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
delete(callback: PubSub$Topic.Subscription$DeleteCallback): void,
delete(
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Topic.Subscription$DeleteCallback): void,
exists(): Promise<any[]>,
exists(callback: PubSub$Topic.Subscription$ExistsCallback): void,
get(gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
get(callback: PubSub$Topic.Subscription$GetCallback): void,
get(
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Topic.Subscription$GetCallback): void,
getMetadata(gaxOpts?: GAX$GAX$CallOptions): Promise<any[]>,
getMetadata(callback: PubSub$Topic.Subscription$GetMetadataCallback): void,
getMetadata(
gaxOpts: GAX$GAX$CallOptions,
callback: PubSub$Topic.Subscription$GetMetadataCallback): void,
getSubscriptions(options?: PubSub$Topic.PubSub$GetSubscriptionsOptions): Promise<any[]>,
getSubscriptions(callback: PubSub$Topic.PubSub$GetSubscriptionsCallback): void,
getSubscriptions(
options: PubSub$Topic.PubSub$GetSubscriptionsOptions,
callback: PubSub$Topic.PubSub$GetSubscriptionsCallback): void,
getSubscriptionsStream(options?: PubSub$Topic.PubSub$GetSubscriptionsOptions): Duplex,
iam: PubSub$IAM,
publisher(options?: PubSub$Topic.Topic$PublisherOptions): PubSub$Publisher,
subscription(
name: string,
options?: PubSub$Topic.PubSub$SubscriptionOptions): PubSub$Subscription
} 

declare type Topic$CreateCallback = (
err: Error | null,
snapshot: PubSub$Snapshot,
apiResponse: {[key: string]: any}) => void;

declare interface Topic$CreateSubscriptionOptions {
flowControl?: {
maxBytes?: number,
maxMessages?: number
},
gaxOpts?: GAX$GAX$CallOptions,
messageRetentionDuration?: number | Date,
pushEndpoint?: string,
retainAckedMessages?: boolean,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare type Topic$CreateSubscriptionCallback = (
err: Error | null,
subscription: PubSub$Subscription,
apiResponse: {[key: string]: any}) => void;

declare type Topic$DeleteCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare type Topic$ExistsCallback = (err: Error | null, exists: boolean) => void;

declare type Topic$GetCallback = (
err: Error | null,
subscription: PubSub$Subscription,
apiResponse: {[key: string]: any}) => void;

declare type Topic$GetMetadataCallback = (err: Error | null, apiResponse: {[key: string]: any}) => void;

declare interface Topic$GetSubscriptionsOptions {
autoPaginate?: boolean,
gaxOpts?: GAX$GAX$CallOptions,
pageSize?: number,
pageToken?: string,
topic?: PubSub$Topic | string,
autoPaginate?: boolean,
gaxOpts?: GAX$GAX$CallOptions,
pageSize?: number,
pageToken?: string
} 

declare type Topic$GetSubscriptionsCallback = (
err: Error | null,
subscriptions: PubSub$Subscription[],
apiResponse: {[key: string]: any}) => void;

declare interface Topic$PublisherOptions {
batching?: {
maxBytes?: number,
maxMessages?: number,
maxMilliseconds?: number
}
} 

declare interface Topic$SubscriptionOptions {
flowControl?: {
maxBytes?: number,
maxMessages?: number
},
maxConnections?: number,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare interface PubSub$IAM {
getPolicy(): Promise<any[]>,
getPolicy(callback: PubSub$IAM.IAM$GetPolicyCallback): void,
setPolicy(policy: PubSub$IAM.IAM$Policy): Promise<any[]>,
setPolicy(
policy: PubSub$IAM.IAM$Policy,
callback: PubSub$IAM.IAM$SetPolicyCallback): void,
testPermissions(permissions: string | string[]): Promise<any[]>,
testPermissions(
permissions: string | string[],
callback: PubSub$IAM.IAM$TestPermissionsCallback): void
} 

declare type IAM$GetPolicyCallback = (
err: Error | null,
policy: IAM$Policy,
apiResponse: {[key: string]: any}) => void;

declare type IAM$SetPolicyCallback = (
err: Error | null,
policy: IAM$Policy,
apiResponse: {[key: string]: any}) => void;

declare type IAM$TestPermissionsCallback = (
err: Error | null,
permissions: string | string[],
apiResponse: {[key: string]: any}) => void;

declare interface IAM$Policy {
bindings?: any[],
rules?: {[key: string]: any}[],
etag?: string
} 


/**
 * https://googleapis.github.io/gax-nodejs/global.html#CallOptions
 */
declare interface GAX$CallOptions {
timeout?: number,
retry?: GAX$RetryOptions,
autoPaginate?: boolean,
pageToken?: {[key: string]: any},
isBundling?: boolean,
longrunning?: GAX$BackoffSettings,
promise?: PromiseConstructor
} 


/**
 * https://googleapis.github.io/gax-nodejs/global.html#RetryOptions
 */
declare interface GAX$RetryOptions {
retryCodes: string[],
backoffSettings: GAX$BackoffSettings
} 


/**
 * https://googleapis.github.io/gax-nodejs/global.html#BackoffSettings
 */
declare interface GAX$BackoffSettings {
initialRetryDelayMillis: number,
retryDelayMultiplier: number,
maxRetryDelayMillis: number,
initialRpcTimeoutMillis: number,
maxRpcTimeoutMillis: number,
totalTimeoutMillis: number
} 
	declare function PubSub(config?: PubSub$PubSub.PubSub$GCloudConfiguration): PubSub$PubSub.PubSub$PubSub

	declare module.exports: typeof PubSub$PubSub

    }
