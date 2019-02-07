declare module "evaporate" {
  declare module.exports: typeof Evaporate;

  declare class Evaporate {
    constructor(config: Evaporate$Evaporate$CreateConfig): this;
    supported: boolean;
    add(
      config: Evaporate$Evaporate$AddConfig,
      options?: Evaporate$Evaporate$AddOverrideOptions
    ): Promise<string>;
    pause(file_key?: string, options?: { [key: string]: any }): Promise<void[]>;
    resume(file_key?: string): Promise<void[]>;
    cancel(file_key?: string): Promise<void[]>;
  }

  declare var npm$namespace$Evaporate: {
    create: typeof Evaporate$create
  };
  declare function Evaporate$create(
    config: Evaporate$CreateConfig
  ): Promise<Evaporate>;

  declare interface Evaporate$CreateConfig {
    readableStreams?: boolean;
    readableStreamPartMethod?:
      | null
      | ((file: File, start: number, end: number) => ReadableStream);
    bucket: string;
    logging?: boolean;
    maxConcurrentParts?: number;
    partSize?: number;
    retryBackoffPower?: number;
    maxRetryBackoffSecs?: number;
    progressIntervalMS?: number;
    cloudfront?: boolean;
    s3Acceleration?: boolean;
    mockLocalStorage?: boolean;
    encodeFilename?: boolean;
    computeContentMd5?: boolean;
    allowS3ExistenceOptimization?: boolean;
    onlyRetryForSameFileName?: boolean;
    timeUrl?: string;
    cryptoMd5Method?: null | ((data: ArrayBuffer) => string);
    cryptoHexEncodedHash256?:
      | null
      | ((data: string | ArrayBuffer | null) => string);
    aws_url?: string;
    aws_key?: string;
    awsRegion?: string;
    awsSignatureVersion?: "2" | "4";
    signerUrl?: string;
    sendCanonicalRequestToSignerUrl?: boolean;
    s3FileCacheHoursAgo?: null | number;
    signParams?: { [key: string]: any };
    signHeaders?: { [key: string]: any };
    customAuthMethod?:
      | null
      | ((
          signParams: string,
          signHeaders: string,
          stringToSign: string,
          signatureDateTime: string,
          canonicalRequest: string
        ) => Promise<string>);
    maxFileSize?: number;
    signResponseHandler?:
      | null
      | ((
          response: any,
          stringToSign: string,
          signatureDateTime: string
        ) => Promise<string>);
    xhrWithCredentials?: boolean;
    localTimeOffset?: number;
    evaporateChanged?: (evaporate: Evaporate, evaporatingCount: number) => void;
    abortCompletionThrottlingMs?: number;
  }

  declare interface Evaporate$TransferStats {
    speed: number;
    readableSpeed: string;
    loaded: number;
    totalUploaded: number;
    remainingSize: number;
    secondsLeft: number;
    fileSize: number;
  }

  declare interface Evaporate$AddConfig {
    name: string;
    file: File;
    xAmzHeadersAtInitiate?: {
      [key: string]: string
    };
    notSignedHeadersAtInitiate?: {
      [key: string]: string
    };
    xAmzHeadersAtUpload?: {
      [key: string]: string
    };
    xAmzHeadersAtComplete?: {
      [key: string]: string
    };
    xAmzHeadersCommon?: {
      [key: string]: string
    };
    started?: (file_key: string) => void;
    uploadInitiated?: (s3UploadId?: string) => void;
    paused?: (file_key: string) => void;
    resumed?: (file_key: string) => void;
    pausing?: (file_key: string) => void;
    cancelled?: () => void;
    complete?: (
      xhr: XMLHttpRequest,
      awsObjectKey: string,
      stats: Evaporate$TransferStats
    ) => void;
    nameChanged?: (awsObjectKey: string) => void;
    info?: (msg: string) => void;
    warn?: (msg: string) => void;
    error?: (msg: string) => void;
    progress?: (p: number, stats: Evaporate$TransferStats) => void;
    contentType?: string;
    beforeSigner?: (xhr: XMLHttpRequest, url: string) => void;
  }

  declare type Evaporate$ImmutableOptionKeys =
    | "maxConcurrentParts"
    | "logging"
    | "cloudfront"
    | "encodeFilename"
    | "computeContentMd5"
    | "allowS3ExistenceOptimization"
    | "onlyRetryForSameFileName"
    | "timeUrl"
    | "cryptoMd5Method"
    | "cryptoHexEncodedHash256"
    | "awsRegion"
    | "awsSignatureVersion"
    | "evaporateChanged";

  declare type Evaporate$AddOverrideOptionKeys = Exclude<
    $Keys<Evaporate$CreateConfig>,
    Evaporate$ImmutableOptionKeys
  >;

  declare type Evaporate$AddOverrideOptions = {} & Pick<
    Evaporate$CreateConfig,
    Evaporate$AddOverrideOptionKeys
  >;

  declare interface Evaporate$PauseConfig {
    force?: boolean;
  }
}
