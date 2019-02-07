declare module "minio" {
  import type { Stream } from "stream";

  declare export type Region =
    | "us-east-1"
    | "us-west-1"
    | "us-west-2"
    | "eu-west-1"
    | "eu-central-1"
    | "ap-southeast-1"
    | "ap-northeast-1"
    | "ap-southeast-2"
    | "sa-east-1"
    | "cn-north-1"
    | string;
  declare export type NoResultCallback = (error: Error | null) => void;
  declare export type ResultCallback<T> = (
    error: Error | null,
    result: T
  ) => void;
  declare export interface ClientOptions {
    endPoint: string;
    accessKey: string;
    secretKey: string;
    useSSL?: boolean;
    port?: number;
    region?: Region;
    transport?: any;
    sessionToken?: string;
  }
  declare export interface BucketItemFromList {
    name: string;
    creationDate: Date;
  }
  declare export interface BucketItemCopy {
    etag: string;
    lastModified: Date;
  }
  declare export interface BucketItem {
    name: string;
    prefix: string;
    size: number;
    etag: string;
    lastModified: Date;
  }
  declare export interface BucketItemStat {
    size: number;
    etag: string;
    lastModified: Date;
    metaData: ItemBucketMetadata;
  }
  declare export interface IncompleteUploadedBucketItem {
    key: string;
    uploadId: string;
    size: number;
  }
  declare export type BucketStream<T> = {
    on(event: "data", listener: (item: T) => void): this,
    on(event: "error", listener: (error: Error) => void): this
  } & Stream;

  declare export interface PostPolicyResult {
    postURL: string;
    formData: {
      [key: string]: any
    };
  }
  declare export interface ItemBucketMetadata {
    [key: string]: any;
  }
  declare export class TargetConfig {
    setId(id: any): void;
    addEvent(newEvent: any): void;
    addFilterSuffix(suffix: any): void;
    addFilterPrefix(prefix: any): void;
  }
  declare export class Client {
    constructor(options: ClientOptions): this;
    makeBucket(
      bucketName: string,
      region: Region,
      callback: NoResultCallback
    ): void;
    makeBucket(bucketName: string, region: Region): Promise<void>;
    listBuckets(callback: ResultCallback<BucketItemFromList[]>): void;
    listBuckets(): Promise<BucketItemFromList[]>;
    bucketExists(bucketName: string, callback: ResultCallback<boolean>): void;
    bucketExists(bucketName: string): Promise<boolean>;
    removeBucket(bucketName: string, callback: NoResultCallback): void;
    removeBucket(bucketName: string): Promise<void>;
    listObjects(
      bucketName: string,
      prefix?: string,
      recursive?: boolean
    ): BucketStream<BucketItem>;
    listObjectsV2(
      bucketName: string,
      prefix?: string,
      recursive?: boolean
    ): BucketStream<BucketItem>;
    listIncompleteUploads(
      bucketName: string,
      prefix?: string,
      recursive?: boolean
    ): BucketStream<IncompleteUploadedBucketItem>;
    getObject(
      bucketName: string,
      objectName: string,
      callback: ResultCallback<Stream>
    ): void;
    getObject(bucketName: string, objectName: string): Promise<Stream>;
    getPartialObject(
      bucketName: string,
      objectName: string,
      offset: number,
      callback: ResultCallback<Stream>
    ): void;
    getPartialObject(
      bucketName: string,
      objectName: string,
      offset: number,
      length: number,
      callback: ResultCallback<Stream>
    ): void;
    getPartialObject(
      bucketName: string,
      objectName: string,
      offset: number,
      length?: number
    ): Promise<Stream>;
    fGetObject(
      bucketName: string,
      objectName: string,
      filePath: string,
      callback: NoResultCallback
    ): void;
    fGetObject(
      bucketName: string,
      objectName: string,
      filePath: string
    ): Promise<void>;
    putObject(
      bucketName: string,
      objectName: string,
      stream: Stream | Buffer | string,
      callback: ResultCallback<string>
    ): void;
    putObject(
      bucketName: string,
      objectName: string,
      stream: Stream | Buffer | string,
      size: number,
      callback: ResultCallback<string>
    ): void;
    putObject(
      bucketName: string,
      objectName: string,
      stream: Stream | Buffer | string,
      size: number,
      metaData: ItemBucketMetadata,
      callback: ResultCallback<string>
    ): void;
    putObject(
      bucketName: string,
      objectName: string,
      stream: Stream | Buffer | string,
      size?: number,
      metaData?: ItemBucketMetadata
    ): Promise<string>;
    fPutObject(
      bucketName: string,
      objectName: string,
      filePath: string,
      metaData: ItemBucketMetadata,
      callback: ResultCallback<string>
    ): void;
    fPutObject(
      bucketName: string,
      objectName: string,
      filePath: string,
      metaData: ItemBucketMetadata
    ): Promise<string>;
    copyObject(
      bucketName: string,
      objectName: string,
      sourceObject: string,
      conditions: CopyConditions,
      callback: ResultCallback<BucketItemCopy>
    ): void;
    copyObject(
      bucketName: string,
      objectName: string,
      sourceObject: string,
      conditions: CopyConditions
    ): Promise<BucketItemCopy>;
    statObject(
      bucketName: string,
      objectName: string,
      callback: ResultCallback<BucketItemStat>
    ): void;
    statObject(bucketName: string, objectName: string): Promise<BucketItemStat>;
    removeObject(
      bucketName: string,
      objectName: string,
      callback: NoResultCallback
    ): void;
    removeObject(bucketName: string, objectName: string): Promise<void>;
    removeObjects(
      bucketName: string,
      objectsList: string[],
      callback: NoResultCallback
    ): void;
    removeObjects(bucketName: string, objectsList: string[]): Promise<void>;
    removeIncompleteUpload(
      bucketName: string,
      objectName: string,
      callback: NoResultCallback
    ): void;
    removeIncompleteUpload(
      bucketName: string,
      objectName: string
    ): Promise<void>;
    presignedUrl(
      httpMethod: string,
      bucketName: string,
      objectName: string,
      callback: ResultCallback<string>
    ): void;
    presignedUrl(
      httpMethod: string,
      bucketName: string,
      objectName: string,
      expiry: number,
      callback: ResultCallback<string>
    ): void;
    presignedUrl(
      httpMethod: string,
      bucketName: string,
      objectName: string,
      expiry: number,
      reqParams: {
        [key: string]: any
      },
      callback: ResultCallback<string>
    ): void;
    presignedUrl(
      httpMethod: string,
      bucketName: string,
      objectName: string,
      expiry?: number,
      reqParams?: {
        [key: string]: any
      }
    ): Promise<string>;
    presignedGetObject(
      bucketName: string,
      objectName: string,
      callback: ResultCallback<string>
    ): void;
    presignedGetObject(
      bucketName: string,
      objectName: string,
      expiry: number,
      callback: ResultCallback<string>
    ): void;
    presignedGetObject(
      bucketName: string,
      objectName: string,
      expiry?: number
    ): Promise<string>;
    presignedPutObject(
      bucketName: string,
      objectName: string,
      callback: ResultCallback<string>
    ): void;
    presignedPutObject(
      bucketName: string,
      objectName: string,
      expiry: number,
      callback: ResultCallback<string>
    ): void;
    presignedPutObject(
      bucketName: string,
      objectName: string,
      expiry?: number
    ): Promise<string>;
    presignedPostPolicy(
      policy: PostPolicy,
      callback: ResultCallback<PostPolicyResult>
    ): void;
    presignedPostPolicy(policy: PostPolicy): Promise<PostPolicyResult>;
    getBucketNotification(
      bucketName: string,
      callback: ResultCallback<NotificationConfig>
    ): void;
    getBucketNotification(bucketName: string): Promise<NotificationConfig>;
    setBucketNotification(
      bucketName: string,
      bucketNotificationConfig: NotificationConfig,
      callback: NoResultCallback
    ): void;
    setBucketNotification(
      bucketName: string,
      bucketNotificationConfig: NotificationConfig
    ): Promise<void>;
    removeAllBucketNotification(
      bucketName: string,
      callback: NoResultCallback
    ): void;
    removeAllBucketNotification(bucketName: string): Promise<void>;
    listenBucketNotification(
      bucketName: string,
      prefix: string,
      suffix: string,
      events: string[]
    ): EventEmitter;
    getBucketPolicy(bucketName: string, callback: ResultCallback<string>): void;
    getBucketPolicy(bucketName: string): Promise<string>;
    setBucketPolicy(
      bucketName: string,
      bucketPolicy: string,
      callback: NoResultCallback
    ): void;
    setBucketPolicy(bucketName: string, bucketPolicy: string): Promise<void>;
    newPostPolicy(): PostPolicy;
  }

  declare var npm$namespace$Policy: {
    NONE: typeof Policy$NONE,
    READONLY: typeof Policy$READONLY,
    WRITEONLY: typeof Policy$WRITEONLY,
    READWRITE: typeof Policy$READWRITE
  };
  declare var Policy$NONE: "none";

  declare var Policy$READONLY: "readonly";

  declare var Policy$WRITEONLY: "writeonly";

  declare var Policy$READWRITE: "readwrite";
  declare export class CopyConditions {
    setModified(date: Date): void;
    setUnmodified(date: Date): void;
    setMatchETag(etag: string): void;
    setMatchETagExcept(etag: string): void;
  }
  declare export class PostPolicy {
    setExpires(date: Date): void;
    setKey(objectName: string): void;
    setKeyStartsWith(prefix: string): void;
    setBucket(bucketName: string): void;
    setContentType(type: string): void;
    setContentLengthRange(min: number, max: number): void;
  }
  declare export class NotificationPoller mixins EventEmitter {
    stop(): void;
    start(): void;
    checkForChanges(): void;
  }
  declare export class NotificationConfig {
    add(target: TopicConfig | QueueConfig | CloudFunctionConfig): void;
  }
  declare export class TopicConfig mixins TargetConfig {
    constructor(arn: string): this;
  }
  declare export class QueueConfig mixins TargetConfig {
    constructor(arn: string): this;
  }
  declare export class CloudFunctionConfig mixins TargetConfig {
    constructor(arn: string): this;
  }
  declare export function buildARN(
    partition: string,
    service: string,
    region: string,
    accountId: string,
    resource: string
  ): string;

  declare export var ObjectCreatedAll: string;
  declare export var ObjectCreatedPut: string;
  declare export var ObjectCreatedPost: string;
  declare export var ObjectCreatedCopy: string;
  declare export var ObjectCreatedCompleteMultipartUpload: string;
  declare export var ObjectRemovedAll: string;
  declare export var ObjectRemovedDelete: string;
  declare export var ObjectRemovedDeleteMarkerCreated: string;
  declare export var ObjectReducedRedundancyLostObject: string;
}
