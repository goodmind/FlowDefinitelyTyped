declare module "ali-oss" {
  declare module.exports: typeof OSS;

  declare interface OSS$Options {
    accessKeyId: string;
    accessKeySecret: string;
    stsToken?: string;
    bucket?: string;
    endpoint?: string;
    region?: string;
    internal?: boolean;
    secure?: boolean;
    timeout?: string | number;
    cname?: boolean;
  }

  declare interface OSS$Bucket {
    name: string;
    region: string;
    creationDate: string;
    StorageClass: OSS$StorageType;
  }

  declare type OSS$StorageType = "Standard" | "IA" | "Archive";

  declare type OSS$ACLType = "public-read-write" | "public-read" | "private";

  declare type OSS$HTTPMethods = "GET" | "POST" | "DELETE" | "PUT";

  declare interface OSS$RequestOptions {
    timeout?: number;
  }

  declare type OSS$RuleStatusType = "Enabled" | "Disabled";

  declare interface OSS$LifecycleRule {
    id?: string;
    prefix: string;
    status: OSS$RuleStatusType;
    days?: number | string;
    date: string;
  }

  declare interface OSS$CORSRule {
    allowedOrigin: string | string[];
    allowedMethod: string | string[];
    allowedHeader?: string | string[];
    exposeHeader?: string | string[];
    maxAgeSeconds?: string | string[];
  }

  declare interface OSS$OwnerType {
    id: string;
    displayName: string;
  }

  declare interface OSS$ObjectMeta {
    name: string;
    lastModified: string;
    etag: string;
    type: string;
    size: number;
    storageClass: OSS$StorageType;
    owner: OSS$OwnerType;
  }

  declare interface OSS$NormalSuccessResponse {
    status: number;
    headers: { [key: string]: any };
    size: number;
    rt: number;
  }

  declare interface OSS$UserMeta {
    uid: number;
    pid: number;
  }

  declare interface OSS$ObjectCallback {
    url: string;
    host?: string;
    body: string;
    contentType?: string;
    customValue?: { [key: string]: any };
    headers?: { [key: string]: any };
  }

  declare interface OSS$ModifyData {
    lastModified: string;
    etag: string;
  }

  declare interface OSS$Checkpoint {
    file: any;
    name: string;
    fileSize: number;
    partSize: number;
    uploadId: string;
    doneParts: Array<{
      number: number,
      etag: string
    }>;
  }

  declare interface OSS$ObjectPart {
    PartNumber: number;
    LastModified: any;
    ETag: string;
    size: number;
  }

  declare interface OSS$Upload {
    name: string;
    uploadId: string;
    initiated: any;
  }

  declare interface OSS$Channel {
    Name: string;
    Description: string;
    Status: string;
    LastModified: string;
    PublishUrls: string[];
    PlayUrls: string[];
  }

  declare interface OSS$ChannelHistory {
    StartTime: string;
    EndTime: string;
    RemoteAddr: string;
  }

  declare interface OSS$ListBucketsQueryType {
    prefix?: string;
    marker?: string;
    "max-keys"?: string | number;
  }

  declare interface OSS$PutBucketOptions {
    timeout: number;
    storageClass: OSS$StorageType;
  }

  declare interface OSS$PutBucketWebsiteConfig {
    index: string;
    error?: string;
  }

  declare interface OSS$ListObjectsQuery {
    prefix?: string;
    marker?: string;
    delimiter?: string;
    "max-keys": string | number;
  }

  declare interface OSS$ListObjectResult {
    objects: OSS$ObjectMeta[];
    prefixes: string[];
    isTruncated: boolean;
    nextMarker: string;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$PutObjectOptions {
    timeout?: number;
    mime?: string;
    meta?: OSS$UserMeta;
    callback: OSS$ObjectCallback;
    headers?: { [key: string]: any };
  }

  declare interface OSS$PutObjectResult {
    name: string;
    data: { [key: string]: any };
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$PutStreamOptions {
    contentLength?: number;
    timeout: number;
    mime: string;
    meta: OSS$UserMeta;
    callback: OSS$ObjectCallback;
    headers?: { [key: string]: any };
  }

  declare interface OSS$AppendObjectOptions {
    position?: string;
    timeout?: number;
    mime?: string;
    meta?: OSS$UserMeta;
    headers?: { [key: string]: any };
  }

  declare interface OSS$AppendObjectResult {
    name: string;
    url: string;
    res: OSS$NormalSuccessResponse;
    nextAppendPosition: string;
  }

  declare interface OSS$HeadObjectOptions {
    timeout?: number;
    headers?: { [key: string]: any };
  }

  declare interface OSS$HeadObjectResult {
    status: number;
    meta: OSS$UserMeta;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$GetObjectOptions {
    timeout?: number;
    process?: string;
    headers?: { [key: string]: any };
  }

  declare interface OSS$GetObjectResult {
    content?: any;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$GetStreamOptions {
    timeout?: number;
    process?: string;
    headers?: { [key: string]: any };
  }

  declare interface OSS$GetStreamResult {
    stream?: any;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$CopyObjectOptions {
    timeout?: number;
    meta?: OSS$UserMeta;
    headers?: { [key: string]: any };
  }

  declare interface OSS$CopyAndPutMetaResult {
    data: OSS$ModifyData;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$DeleteMultiOptions {
    quite?: boolean;
    timeout?: number;
  }

  declare interface OSS$DeleteMultiResult {
    deleted?: string[];
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$ResponseHeaderType {
    "content-type"?: string;
    "content-disposition"?: string;
    "cache-control"?: string;
  }

  declare interface OSS$SignatureUrlOptions {
    expires?: number;
    method?: OSS$HTTPMethods;
    "Content-Type"?: string;
    process?: string;
    response?: OSS$ResponseHeaderType;
    callback?: OSS$ObjectCallback;
  }

  declare interface OSS$GetACLResult {
    acl: OSS$ACLType;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$InitMultipartUploadOptions {
    timeout?: number;
    mime?: string;
    meta?: OSS$UserMeta;
    headers?: { [key: string]: any };
  }

  declare interface OSS$InitMultipartUploadResult {
    res: {
      status: number,
      headers: { [key: string]: any },
      size: number,
      rt: number
    };
    bucket: string;
    name: string;
    uploadId: string;
  }

  declare interface OSS$UploadPartResult {
    name: string;
    etag: string;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$CompleteMultipartUploadOptions {
    timeout?: number;
    callback?: OSS$ObjectCallback;
    headers?: { [key: string]: any };
  }

  declare interface OSS$CompleteMultipartUploadResult {
    bucket: string;
    name: string;
    etag: string;
    data: { [key: string]: any };
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$MultipartUploadOptions {
    parallel?: number;
    partSize?: number;
    progress?: (...args: any[]) => any;
    checkpoint?: OSS$Checkpoint;
    meta?: OSS$UserMeta;
    mime?: string;
    callback?: OSS$ObjectCallback;
    headers?: { [key: string]: any };
    timeout?: number;
    copyheaders?: { [key: string]: any };
  }

  declare interface OSS$MultipartUploadResult {
    bucket: string;
    name: string;
    etag: string;
    data: { [key: string]: any };
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$MultipartUploadCopyResult {
    bucket: string;
    name: string;
    etag: string;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$MultipartUploadCopySourceData {
    sourceKey: string;
    sourceBucketName: string;
    startOffset: number;
    endOffset: number;
  }

  declare interface OSS$ListPartsQuery {
    "max-parts": number;
    "part-number-marker": number;
    "encoding-type": string;
  }

  declare interface OSS$ListPartsResult {
    uploadId: string;
    bucket: string;
    name: string;
    PartNumberMarker: number;
    nextPartNumberMarker: number;
    maxParts: number;
    isTruncated: boolean;
    parts: OSS$ObjectPart[];
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$ListUploadsQuery {
    prefix?: string;
    "max-uploads"?: number;
    "key-marker"?: string;
    "upload-id-marker"?: string;
  }

  declare interface OSS$ListUploadsResult {
    res: OSS$NormalSuccessResponse;
    bucket: string;
    nextKeyMarker: any;
    nextUploadIdMarker: any;
    isTruncated: boolean;
    uploads: OSS$Upload[];
  }

  declare interface OSS$PutChannelConf {
    Description?: string;
    Status?: string;
    Target?: {
      Type: string,
      FragDuration: number,
      FragCount: number,
      PlaylistName: string
    };
  }

  declare interface OSS$PutChannelResult {
    publishUrls: string[];
    playUrls: string[];
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$GetChannelResult {
    Status: string;
    ConnectedTime?: string;
    RemoteAddr?: string;
    Video?: { [key: string]: any };
    Audio?: { [key: string]: any };
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$ListChannelsQuery {
    prefix: string;
    marker: string;
    "max-keys ": number;
  }

  declare interface OSS$ListChannelsResult {
    channels: OSS$Channel[];
    nextMarker: string | null;
    isTruncated: boolean;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$ChannelHistoryResult {
    records: OSS$ChannelHistory;
    res: OSS$NormalSuccessResponse;
  }

  declare interface OSS$GetRtmpUrlOptions {
    expires?: number;
    params?: { [key: string]: any };
    timeout?: number;
  }

  declare interface OSS$ClusterType {
    host: string;
    accessKeyId: string;
    accessKeySecret: string;
  }

  declare interface OSS$ClusterOptions {
    clusters: OSS$ClusterType[];
    schedule?: string;
  }

  declare class OSS$Cluster {
    constructor(options: OSS$ClusterOptions): this;
    list(
      query: OSS$ListObjectsQuery | null,
      options: OSS$RequestOptions
    ): Promise<OSS$ListObjectResult>;
    put(
      name: string,
      file: any,
      options?: OSS$PutObjectOptions
    ): Promise<OSS$PutObjectResult>;
    putStream(
      name: string,
      stream: any,
      options?: OSS$PutStreamOptions
    ): Promise<{
      name: string,
      res: OSS$NormalSuccessResponse
    }>;
    head(
      name: string,
      options?: OSS$HeadObjectOptions
    ): Promise<OSS$HeadObjectResult>;
    get(
      name: string,
      file?: any,
      options?: OSS$GetObjectOptions
    ): Promise<OSS$GetObjectResult>;
    getStream(
      name?: string,
      options?: OSS$GetStreamOptions
    ): Promise<OSS$GetStreamResult>;
    delete(
      name: string,
      options?: OSS$RequestOptions
    ): Promise<OSS$NormalSuccessResponse>;
    copy(
      name: string,
      sourceName: string,
      options?: OSS$CopyObjectOptions
    ): Promise<OSS$CopyAndPutMetaResult>;
    putMeta(
      name: string,
      meta: OSS$UserMeta,
      options: OSS$RequestOptions
    ): Promise<OSS$CopyAndPutMetaResult>;
    deleteMulti(
      names: string[],
      options?: OSS$DeleteMultiOptions
    ): Promise<OSS$DeleteMultiResult>;
    signatureUrl(name: string, options?: OSS$SignatureUrlOptions): string;
    putACL(
      name: string,
      acl: OSS$ACLType,
      options?: OSS$RequestOptions
    ): Promise<OSS$NormalSuccessResponse>;
    restore(
      name: string,
      options?: OSS$RequestOptions
    ): Promise<OSS$NormalSuccessResponse>;
  }

  declare interface OSS$ImageClientOptions {
    imageHost: string;
    accessKeyId: string;
    accessKeySecret: string;
    bucket: string;
    region?: string;
    internal?: boolean;
    timeout?: string | number;
  }

  declare interface OSS$ImageGetOptions {
    timeout?: number;
    headers?: { [key: string]: any };
  }

  declare interface OSS$StyleData {
    Name: string;
    Content: string;
    CreateTime: string;
    LastModifyTime: string;
  }

  declare class OSS$ImageClient {
    constructor(options: OSS$ImageClientOptions): this;

    /**
     * Get an image from the image channel.
     */
    get(
      name: string,
      file?: any,
      options?: OSS$ImageGetOptions
    ): Promise<{
      content: any,
      res: OSS$NormalSuccessResponse
    }>;

    /**
     * Get an image read stream.
     */
    getStream(
      name: string,
      options?: OSS$ImageGetOptions
    ): Promise<{
      stream: any,
      res: OSS$NormalSuccessResponse
    }>;

    /**
     * Get a image exif info by image object name from the image channel.
     */
    getExif(
      name: string,
      options?: OSS$RequestOptions
    ): Promise<{
      data: { [key: string]: any },
      res: OSS$NormalSuccessResponse
    }>;

    /**
     * Get a image info and exif info by image object name from the image channel.
     */
    getInfo(
      name: string,
      options?: OSS$RequestOptions
    ): Promise<{
      data: { [key: string]: any },
      res: OSS$NormalSuccessResponse
    }>;

    /**
     * todo
     */
    putStyle(
      name: string,
      style: string,
      options?: OSS$RequestOptions
    ): Promise<{
      data: { [key: string]: any },
      res: OSS$NormalSuccessResponse
    }>;

    /**
     * Get a style by name from the image channel.
     */
    getStyle(
      name: string,
      options?: OSS$RequestOptions
    ): Promise<{
      data: OSS$StyleData,
      res: OSS$NormalSuccessResponse
    }>;

    /**
     * Get all styles from the image channel.
     */
    listStyle(options?: OSS$RequestOptions): Promise<OSS$StyleData[]>;

    /**
     * todo
     */
    deleteStyle(
      styleName: string,
      options?: OSS$RequestOptions
    ): Promise<OSS$NormalSuccessResponse>;

    /**
     * Create a signature url for directly download.
     */
    signatureUrl(
      name: string,
      options?: {
        expires?: string,
        timeout?: string
      }
    ): string;
  }
  declare class OSS {
    constructor(options: OSS$OSS$Options): this;

    /**
     * ***************************************** the bucket operations ************************************************
     * List buckets in this account.
     */
    listBuckets(
      query: OSS$OSS$ListBucketsQueryType | null,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$Bucket[]>;

    /**
     * Create a new bucket.
     */
    putBucket(
      name: string,
      options?: OSS$OSS$PutBucketOptions
    ): Promise<{
      bucket: string,
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Use the bucket.
     */
    useBucket(name: string): void;

    /**
     * Delete an empty bucket.
     */
    deleteBucket(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get bucket information,include CreationDate、ExtranetEndpoint、IntranetEndpoint、Location、Name、StorageClass、 Owner、AccessControlList
     */
    getBucketInfo(name: string): Promise<any>;

    /**
     * Get bucket location
     */
    getBucketLocation(name: string): Promise<any>;

    /**
     * Update the bucket ACL.
     */
    putBucketACL(
      name: string,
      acl: OSS$OSS$ACLType,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get the bucket ACL.
     *    acl - acl settings string
     */
    getBucketACL(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<{
      acl: string,
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Update the bucket logging settings. Log file will create every one hour and name format: <prefix><bucket>-YYYY-mm-DD-HH-MM-SS-UniqueString.
     */
    putBucketLogging(
      name: string,
      prefix?: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get the bucket logging settings.
     */
    getBucketLogging(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<{
      enable: boolean,
      prefix: string | null,
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Delete the bucket logging settings.
     */
    deleteBucketLogging(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Set the bucket as a static website.
     */
    putBucketWebsite(
      name: string,
      config: OSS$OSS$PutBucketWebsiteConfig
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get the bucket website config.
     */
    getBucketWebsite(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<{
      index: string,
      error: string,
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Delete the bucket website config.
     */
    deleteBucketWebsite(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Set the bucket request Referer white list.
     */
    putBucketReferer(
      name: string,
      allowEmpty: boolean,
      referers: string[],
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get the bucket request Referer white list.
     */
    getBucketReferer(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<{
      allowEmpty: boolean,
      referers: string[],
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Delete the bucket request Referer white list.
     */
    deleteBucketReferer(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Set the bucket object lifecycle.
     */
    putBucketLifecycle(
      name: string,
      rules: OSS$OSS$LifecycleRule[],
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get the bucket object lifecycle.
     */
    getBucketLifecycle(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<{
      rules: OSS$OSS$LifecycleRule[],
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Delete the bucket object lifecycle.
     */
    deleteBucketLifecycle(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Set CORS rules of the bucket object
     */
    putBucketCORS(
      name: string,
      rules: OSS$OSS$CORSRule[],
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get CORS rules of the bucket object.
     */
    getBucketCORS(
      name: string
    ): Promise<{
      rules: OSS$OSS$CORSRule[],
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Delete CORS rules of the bucket object.
     */
    deleteBucketCORS(name: string): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * ******************************************************** Object operations *******************************************
     * List objects in the bucket.
     */
    list(
      query: OSS$OSS$ListObjectsQuery | null,
      options: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$ListObjectResult>;

    /**
     * Add an object to the bucket.
     */
    put(
      name: string,
      file: any,
      options?: OSS$OSS$PutObjectOptions
    ): Promise<OSS$OSS$PutObjectResult>;

    /**
     * Add a stream object to the bucket.
     */
    putStream(
      name: string,
      stream: any,
      options?: OSS$OSS$PutStreamOptions
    ): Promise<{
      name: string,
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Append an object to the bucket, it's almost same as put, but it can add content to existing object rather than override it.
     */
    append(
      name: string,
      file: any,
      options?: OSS$OSS$AppendObjectOptions
    ): Promise<OSS$OSS$AppendObjectResult>;

    /**
     * Get the Object url. If provide baseUrl, will use baseUrl instead the default endpoint.
     */
    getObjectUrl(name: string, baseUrl?: string): string;

    /**
     * Get the Object url. If provide baseUrl, will use baseUrl instead the default bucket and endpoint. Suggest use generateObjectUrl instead of getObjectUrl.
     */
    generateObjectUrl(name: string, baseUrl?: string): string;

    /**
     * Head an object and get the meta info.
     */
    head(
      name: string,
      options?: OSS$OSS$HeadObjectOptions
    ): Promise<OSS$OSS$HeadObjectResult>;

    /**
     * Get an object from the bucket.
     */
    get(
      name: string,
      file?: any,
      options?: OSS$OSS$GetObjectOptions
    ): Promise<OSS$OSS$GetObjectResult>;

    /**
     * Get an object read stream.
     */
    getStream(
      name?: string,
      options?: OSS$OSS$GetStreamOptions
    ): Promise<OSS$OSS$GetStreamResult>;

    /**
     * Delete an object from the bucket.
     */
    delete(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Copy an object from sourceName to name.
     */
    copy(
      name: string,
      sourceName: string,
      options?: OSS$OSS$CopyObjectOptions
    ): Promise<OSS$OSS$CopyAndPutMetaResult>;

    /**
     * Set an exists object meta.
     */
    putMeta(
      name: string,
      meta: OSS$OSS$UserMeta,
      options: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$CopyAndPutMetaResult>;

    /**
     * Delete multi objects in one request.
     */
    deleteMulti(
      names: string[],
      options?: OSS$OSS$DeleteMultiOptions
    ): Promise<OSS$OSS$DeleteMultiResult>;

    /**
     * Create a signature url for download or upload object. When you put object with signatureUrl ,you need to pass Content-Type.Please look at the example.
     */
    signatureUrl(name: string, options?: OSS$OSS$SignatureUrlOptions): string;

    /**
     * Set object's ACL.
     */
    putACL(
      name: string,
      acl: OSS$OSS$ACLType,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get object's ACL.
     */
    getACL(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$GetACLResult>;

    /**
     * Restore Object.
     */
    restore(
      name: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * multi upload
     */
    initMultipartUpload(
      name: string,
      options?: OSS$OSS$InitMultipartUploadOptions
    ): Promise<OSS$OSS$InitMultipartUploadResult>;

    /**
     * After initiating a Multipart Upload event, you can upload data in parts based on the specified object name and Upload ID.
     */
    uploadPart(
      name: string,
      uploadId: string,
      partNo: number,
      file: any,
      start: number,
      end: number,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$UploadPartResult>;

    /**
     * Using Upload Part Copy, you can copy data from an existing object and upload a part of the data.
     * When copying a file larger than 1 GB, you must use the Upload Part Copy method. If you want to copy a file smaller than 1 GB, see Copy Object.
     */
    uploadPartCopy(
      name: string,
      uploadId: string,
      partNo: number,
      range: string,
      sourceData: {
        sourceKey: string,
        sourceBucketName: string
      },
      options: {
        timeout?: number,
        headers?: { [key: string]: any }
      }
    ): Promise<OSS$OSS$UploadPartResult>;

    /**
     * After uploading all data parts, you must call the Complete Multipart Upload API to complete Multipart Upload for the entire file.
     */
    completeMultipartUpload(
      name: string,
      uploadId: string,
      parts: Array<{
        number: number,
        etag: string
      }>,
      options?: OSS$OSS$CompleteMultipartUploadOptions
    ): Promise<OSS$OSS$CompleteMultipartUploadResult>;

    /**
     * Upload file with OSS multipart.
     */
    multipartUpload(
      name: string,
      file: any,
      options: OSS$OSS$MultipartUploadOptions
    ): Promise<OSS$OSS$MultipartUploadResult>;

    /**
     * Copy file with OSS multipart.
     * this function contains head, initMultipartUpload, uploadPartCopy, completeMultipartUpload.
     * When copying a file larger than 1 GB, you should use the Upload Part Copy method. If you want to copy a file smaller than 1 GB, see Copy Object.
     */
    multipartUploadCopy(
      name: string,
      sourceData: OSS$OSS$MultipartUploadCopySourceData,
      options?: OSS$OSS$MultipartUploadOptions
    ): Promise<OSS$OSS$MultipartUploadCopyResult>;

    /**
     * The ListParts command can be used to list all successfully uploaded parts mapped to a specific upload ID, i.e.: those not completed and not aborted.
     */
    listParts(
      name: string,
      uploadId: string,
      query?: OSS$OSS$ListPartsQuery,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$ListPartsResult>;

    /**
     * List on-going multipart uploads, i.e.: those not completed and not aborted.
     */
    listUploads(
      query: OSS$OSS$ListUploadsQuery,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$ListUploadsResult>;

    /**
     * Abort a multipart upload for object.
     */
    abortMultipartUpload(
      name: string,
      uploadId: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * ********************************************** RTMP Operations ************************************************************
     * Create a live channel.
     */
    putChannel(
      id: string,
      conf: OSS$OSS$PutChannelConf,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$PutChannelResult>;

    /**
     * Get live channel info.
     */
    getChannel(
      id: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<{
      data: OSS$OSS$PutChannelConf,
      res: OSS$OSS$NormalSuccessResponse
    }>;

    /**
     * Delete a live channel.
     */
    deleteChannel(
      id: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Change the live channel status.
     */
    putChannelStatus(
      id: string,
      status?: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get the live channel status.
     */
    getChannelStatus(
      id: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$GetChannelResult>;

    /**
     * List channels.
     */
    listChannels(
      query: OSS$OSS$ListChannelsQuery,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$ListChannelsResult>;

    /**
     * Get the live channel history.
     */
    getChannelHistory(
      id: string,
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$ChannelHistoryResult>;

    /**
     * Create a VOD playlist for the channel.
     */
    createVod(
      id: string,
      name: string,
      time: {
        startTime: number,
        endTime: number
      },
      options?: OSS$OSS$RequestOptions
    ): Promise<OSS$OSS$NormalSuccessResponse>;

    /**
     * Get signatured rtmp url for publishing.
     */
    getRtmpUrl(channelId?: string, options?: OSS$OSS$GetRtmpUrlOptions): string;
  }
}
