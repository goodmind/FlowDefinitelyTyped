declare module "@google-cloud/pubsub" {
  import type { EventEmitter } from "events";

  import type { Duplex } from "stream";

  declare var npm$namespace$PubSub: {
    v1: typeof PubSub$v1
  };
  declare function PubSub$v1(config?: PubSub$GCloudConfiguration): any;

  /**
   * @version : Google PubSub 0.18.0
   */
  declare interface PubSub$GCloudConfiguration {
    projectId?: string;
    keyFilename?: string;
    apiEndpoint?: string;
    email?: string;
    credentials?: {
      client_email?: string,
      private_key?: string
    };
    autoRetry?: boolean;
    maxRetries?: number;
    promise?: any;
  }

  declare interface PubSub$PubSub {
    createSubscription(
      topic: PubSub$Topic | string,
      name: string,
      options?: PubSub$PubSub$CreateSubscriptionOptions
    ): Promise<any[]>;
    createSubscription(
      topic: PubSub$Topic | string,
      name: string,
      callback: PubSub$PubSub$CreateSubscriptionCallback
    ): void;
    createSubscription(
      topic: PubSub$Topic | string,
      name: string,
      options: PubSub$PubSub$CreateSubscriptionOptions,
      callback: PubSub$PubSub$CreateSubscriptionCallback
    ): void;
    createTopic(name: string, gaxOpts?: PubSub$GAX$CallOptions): Promise<any[]>;
    createTopic(
      name: string,
      callback: PubSub$PubSub$CreateTopicCallback
    ): void;
    createTopic(
      name: string,
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$PubSub$CreateTopicCallback
    ): void;
    getSnapshots(options?: PubSub$PubSub$GetSnapshotsOptions): Promise<any[]>;
    getSnapshots(callback: PubSub$PubSub$GetSnapshotsCallback): void;
    getSnapshots(
      options: PubSub$PubSub$GetSnapshotsOptions,
      callback: PubSub$PubSub$GetSnapshotsCallback
    ): void;
    getSnapshotsStream(options?: PubSub$PubSub$GetSnapshotsOptions): Duplex;
    getSubscriptions(
      options?: PubSub$PubSub$GetSubscriptionsOptions
    ): Promise<any[]>;
    getSubscriptions(callback: PubSub$PubSub$GetSubscriptionsCallback): void;
    getSubscriptions(
      options: PubSub$PubSub$GetSubscriptionsOptions,
      callback: PubSub$PubSub$GetSubscriptionsCallback
    ): void;
    getSubscriptionsStream(
      options?: PubSub$PubSub$GetSubscriptionsOptions
    ): Duplex;
    getTopics(query?: PubSub$PubSub$GetTopicsQuery): Promise<any[]>;
    getTopics(callback: PubSub$PubSub$GetTopicsCallback): void;
    getTopics(
      query: PubSub$PubSub$GetTopicsQuery,
      callback: PubSub$PubSub$GetTopicsCallback
    ): void;
    getTopicsStream(query?: PubSub$PubSub$GetTopicsQuery): Duplex;
    snapshot(name: string): PubSub$Snapshot;
    subscription(
      name: string,
      options?: PubSub$PubSub$SubscriptionOptions
    ): PubSub$Subscription;
    topic(name: string): PubSub$Topic;
  }

  declare interface PubSub$PubSub$CreateSubscriptionOptions {
    flowControl?: {
      maxBytes?: number,
      maxMessages?: number
    };
    gaxOpts?: PubSub$GAX$CallOptions;
    messageRetentionDuration?: number | Date;
    pushEndpoint?: string;
    retainAckedMessages?: boolean;
  }

  declare type PubSub$PubSub$CreateSubscriptionCallback = (
    err: Error | null,
    subscription: PubSub$Subscription,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$PubSub$CreateTopicCallback = (
    err: Error | null,
    topic: PubSub$Topic,
    apiResponse: { [key: string]: any }
  ) => void;

  declare interface PubSub$PubSub$GetSnapshotsOptions {
    autoPaginate?: boolean;
    gaxOpts?: PubSub$GAX$CallOptions;
    pageSize?: number;
    pageToken?: string;
  }

  declare type PubSub$PubSub$GetSnapshotsCallback = (
    err: Error | null,
    snapshots: PubSub$Snapshot[]
  ) => void;

  declare interface PubSub$PubSub$GetSubscriptionsOptions {
    autoPaginate?: boolean;
    gaxOpts?: PubSub$GAX$CallOptions;
    pageSize?: number;
    pageToken?: string;
    topic?: PubSub$Topic | string;
  }

  declare type PubSub$PubSub$GetSubscriptionsCallback = (
    err: Error | null,
    subscriptions: PubSub$Subscription[],
    apiResponse: { [key: string]: any }
  ) => void;

  declare interface PubSub$PubSub$GetTopicsQuery {
    autoPaginate?: boolean;
    gaxOpts?: PubSub$GAX$CallOptions;
    pageSize?: number;
    pageToken?: string;
  }

  declare type PubSub$PubSub$GetTopicsCallback = (
    err: Error | null,
    topics: PubSub$Topic[],
    apiResponse: { [key: string]: any }
  ) => void;

  declare interface PubSub$PubSub$SubscriptionOptions {
    flowControl?: {
      maxBytes?: number,
      maxMessages?: number
    };
    maxConnections?: number;
  }

  declare interface PubSub$Publisher {
    publish(data: Buffer, callback: PubSub$Publisher$PublishCallback): void;
    publish(
      data: Buffer,
      attributes: PubSub$Publisher$Attributes,
      callback: PubSub$Publisher$PublishCallback
    ): void;
    publish(
      data: Buffer,
      attributes?: PubSub$Publisher$Attributes
    ): Promise<string>;
  }

  declare type PubSub$Publisher$PublishCallback = (
    error: Error | null,
    messageId: string
  ) => void;

  declare interface PubSub$Publisher$Attributes {
    [key: string]: string | Buffer | ArrayBuffer;
  }

  declare interface PubSub$Snapshot {
    delete(): Promise<any[]>;
    delete(callback: PubSub$Snapshot$DeleteCallback): void;
  }

  declare type PubSub$SnapshotFromSubscription = {
    create(name: string): Promise<any[]>,
    create(name: string, callback: PubSub$Snapshot$CreateCallback): void,
    seek(): Promise<any[]>,
    seek(callback: PubSub$Snapshot$SeekCallback): void
  } & PubSub$Snapshot;

  declare type PubSub$Snapshot$DeleteCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Snapshot$CreateCallback = (
    err: Error | null,
    snapshot: PubSub$Snapshot,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Snapshot$SeekCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Subscription = {
    close(): Promise<void>,
    close(callback: PubSub$Subscription$CloseCallback): void,
    createSnapshot(
      name: string,
      gaxOpts?: PubSub$GAX$CallOptions
    ): Promise<any[]>,
    createSnapshot(
      name: string,
      callback: PubSub$Subscription$CreateSnapshotCallback
    ): void,
    createSnapshot(
      name: string,
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Subscription$CreateSnapshotCallback
    ): void,
    delete(gaxOpts?: PubSub$GAX$CallOptions): Promise<any[]>,
    delete(callback: PubSub$Subscription$DeleteCallback): void,
    delete(
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Subscription$DeleteCallback
    ): void,
    exists(): Promise<any[]>,
    exists(callback: PubSub$Subscription$ExistsCallback): void,
    get(gaxOpts?: PubSub$GAX$CallOptions): Promise<any[]>,
    get(callback: PubSub$Subscription$GetCallback): void,
    get(
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Subscription$GetCallback
    ): void,
    getMetadata(gaxOpts?: PubSub$GAX$CallOptions): Promise<any[]>,
    getMetadata(callback: PubSub$Subscription$GetMetadataCallback): void,
    getMetadata(
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Subscription$GetMetadataCallback
    ): void,
    iam: PubSub$IAM,
    modifyPushConfig(
      config: PubSub$Subscription$PushConfig,
      gaxOpts?: PubSub$GAX$CallOptions
    ): Promise<any[]>,
    modifyPushConfig(
      config: PubSub$Subscription$PushConfig,
      callback: PubSub$Subscription$ModifyPushConfigCallback
    ): void,
    modifyPushConfig(
      config: PubSub$Subscription$PushConfig,
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Subscription$ModifyPushConfigCallback
    ): void,
    seek(
      snapshot: string | Date,
      callback: PubSub$Subscription$SeekCallback
    ): void,
    seek(
      snapshot: string | Date,
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Subscription$SeekCallback
    ): void,
    setMetadata(
      metadata: { [key: string]: any },
      gaxOpts?: PubSub$GAX$CallOptions
    ): Promise<any[]>,
    setMetadata(
      metadata: { [key: string]: any },
      callback: PubSub$Subscription$SetMetadataCallback
    ): void,
    setMetadata(
      metadata: { [key: string]: any },
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Subscription$SetMetadataCallback
    ): void,
    snapshot(name: string): PubSub$SnapshotFromSubscription
  } & EventEmitter;

  declare type PubSub$Subscription$CloseCallback = (err: Error | null) => void;

  declare type PubSub$Subscription$CreateSnapshotCallback = (
    err: Error | null,
    snapshot: PubSub$SnapshotFromSubscription,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Subscription$DeleteCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Subscription$ExistsCallback = (
    err: Error | null,
    exists: boolean
  ) => void;

  declare type PubSub$Subscription$GetCallback = (
    err: Error | null,
    subscription: PubSub$Subscription,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Subscription$GetMetadataCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare interface PubSub$Subscription$PushConfig {
    pushEndpoint?: string;
    attributes?: Subscription$PushConfigAttributes;
  }

  declare interface PubSub$Subscription$PushConfigAttributes {
    "x-goog-version": "v1beta" | "v1" | "v1beta2";
  }

  declare type PubSub$Subscription$ModifyPushConfigCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Subscription$SeekCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Subscription$SetMetadataCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare interface PubSub$Topic {
    create(gaxOpts?: PubSub$GAX$CallOptions): Promise<any[]>;
    create(callback: PubSub$Topic$CreateCallback): void;
    create(
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Topic$CreateCallback
    ): void;
    createSubscription(
      nameOrOptions?: string | PubSub$Topic$CreateSubscriptionOptions
    ): Promise<any[]>;
    createSubscription(
      name: string,
      options: PubSub$Topic$CreateSubscriptionOptions
    ): Promise<any[]>;
    createSubscription(callback: PubSub$Topic$CreateSubscriptionCallback): void;
    createSubscription(
      nameOrOptions: string | PubSub$Topic$CreateSubscriptionOptions,
      callback: PubSub$Topic$CreateSubscriptionCallback
    ): void;
    createSubscription(
      name: string,
      options: PubSub$Topic$CreateSubscriptionOptions,
      callback: PubSub$Topic$CreateSubscriptionCallback
    ): void;
    delete(gaxOpts?: PubSub$GAX$CallOptions): Promise<any[]>;
    delete(callback: PubSub$Topic$DeleteCallback): void;
    delete(
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Topic$DeleteCallback
    ): void;
    exists(): Promise<any[]>;
    exists(callback: PubSub$Topic$ExistsCallback): void;
    get(gaxOpts?: PubSub$GAX$CallOptions): Promise<any[]>;
    get(callback: PubSub$Topic$GetCallback): void;
    get(
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Topic$GetCallback
    ): void;
    getMetadata(gaxOpts?: PubSub$GAX$CallOptions): Promise<any[]>;
    getMetadata(callback: PubSub$Topic$GetMetadataCallback): void;
    getMetadata(
      gaxOpts: PubSub$GAX$CallOptions,
      callback: PubSub$Topic$GetMetadataCallback
    ): void;
    getSubscriptions(
      options?: PubSub$Topic$GetSubscriptionsOptions
    ): Promise<any[]>;
    getSubscriptions(callback: PubSub$Topic$GetSubscriptionsCallback): void;
    getSubscriptions(
      options: PubSub$Topic$GetSubscriptionsOptions,
      callback: PubSub$Topic$GetSubscriptionsCallback
    ): void;
    getSubscriptionsStream(
      options?: PubSub$Topic$GetSubscriptionsOptions
    ): Duplex;
    iam: PubSub$IAM;
    publisher(options?: PubSub$Topic$PublisherOptions): PubSub$Publisher;
    subscription(
      name: string,
      options?: PubSub$Topic$SubscriptionOptions
    ): PubSub$Subscription;
  }

  declare type PubSub$Topic$CreateCallback = PubSub$PubSub$CreateTopicCallback;

  declare type PubSub$Topic$CreateSubscriptionOptions = PubSub$PubSub$CreateSubscriptionOptions;

  declare type PubSub$Topic$CreateSubscriptionCallback = PubSub$PubSub$CreateSubscriptionCallback;

  declare type PubSub$Topic$DeleteCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Topic$ExistsCallback = (
    err: Error | null,
    exists: boolean
  ) => void;

  declare type PubSub$Topic$GetCallback = (
    err: Error | null,
    topic: PubSub$Topic,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$Topic$GetMetadataCallback = (
    err: Error | null,
    apiResponse: { [key: string]: any }
  ) => void;

  declare interface PubSub$Topic$GetSubscriptionsOptions {
    autoPaginate?: boolean;
    gaxOpts?: PubSub$GAX$CallOptions;
    pageSize?: number;
    pageToken?: string;
  }

  declare type PubSub$Topic$GetSubscriptionsCallback = (
    err: Error | null,
    subscriptions: PubSub$Subscription[]
  ) => void;

  declare interface PubSub$Topic$PublisherOptions {
    batching?: {
      maxBytes?: number,
      maxMessages?: number,
      maxMilliseconds?: number
    };
  }

  declare type PubSub$Topic$SubscriptionOptions = PubSub$PubSub$SubscriptionOptions;

  declare interface PubSub$IAM {
    getPolicy(): Promise<any[]>;
    getPolicy(callback: PubSub$IAM$GetPolicyCallback): void;
    setPolicy(policy: PubSub$IAM$Policy): Promise<any[]>;
    setPolicy(
      policy: PubSub$IAM$Policy,
      callback: PubSub$IAM$SetPolicyCallback
    ): void;
    testPermissions(permissions: string | string[]): Promise<any[]>;
    testPermissions(
      permissions: string | string[],
      callback: PubSub$IAM$TestPermissionsCallback
    ): void;
  }

  declare type PubSub$IAM$GetPolicyCallback = (
    err: Error | null,
    policy: IAM$Policy,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$IAM$SetPolicyCallback = (
    err: Error | null,
    policy: IAM$Policy,
    apiResponse: { [key: string]: any }
  ) => void;

  declare type PubSub$IAM$TestPermissionsCallback = (
    err: Error | null,
    permissions: string | string[],
    apiResponse: { [key: string]: any }
  ) => void;

  declare interface PubSub$IAM$Policy {
    bindings?: any[];
    rules?: { [key: string]: any }[];
    etag?: string;
  }

  /**
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions
   */
  declare interface PubSub$GAX$CallOptions {
    timeout?: number;
    retry?: GAX$RetryOptions;
    autoPaginate?: boolean;
    pageToken?: { [key: string]: any };
    isBundling?: boolean;
    longrunning?: GAX$BackoffSettings;
    promise?: PromiseConstructor;
  }

  /**
   * https://googleapis.github.io/gax-nodejs/global.html#RetryOptions
   */
  declare interface PubSub$GAX$RetryOptions {
    retryCodes: string[];
    backoffSettings: GAX$BackoffSettings;
  }

  /**
   * https://googleapis.github.io/gax-nodejs/global.html#BackoffSettings
   */
  declare interface PubSub$GAX$BackoffSettings {
    initialRetryDelayMillis: number;
    retryDelayMultiplier: number;
    maxRetryDelayMillis: number;
    initialRpcTimeoutMillis: number;
    maxRpcTimeoutMillis: number;
    totalTimeoutMillis: number;
  }
  declare function PubSub(config?: PubSub$GCloudConfiguration): PubSub$PubSub;

  declare export default typeof PubSub;
}
