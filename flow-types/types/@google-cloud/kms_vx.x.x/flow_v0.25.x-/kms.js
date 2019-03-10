declare module "@google-cloud/kms" {
  import typeof * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

  declare var npm$namespace$v1: {
    CryptoKeyVersionAlgorithm: typeof v1$CryptoKeyVersionAlgorithm,
    CryptoKeyVersionState: typeof v1$CryptoKeyVersionState,
    CryptoKeyVersionView: typeof v1$CryptoKeyVersionView,
    ProtectionLevel: typeof v1$ProtectionLevel,
    AttestationFormat: typeof v1$AttestationFormat,
    CryptoKeyPurpose: typeof v1$CryptoKeyPurpose,
    KeyManagementServiceClient: typeof v1$KeyManagementServiceClient
  };

  declare var v1$CryptoKeyVersionAlgorithm: {|
    +CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED: 0, // 0
    +GOOGLE_SYMMETRIC_ENCRYPTION: 1, // 1
    +RSA_SIGN_PSS_2048_SHA256: 2, // 2
    +RSA_SIGN_PSS_3072_SHA256: 3, // 3
    +RSA_SIGN_PSS_4096_SHA256: 4, // 4
    +RSA_SIGN_PKCS1_2048_SHA256: 5, // 5
    +RSA_SIGN_PKCS1_3072_SHA256: 6, // 6
    +RSA_SIGN_PKCS1_4096_SHA256: 7, // 7
    +RSA_DECRYPT_OAEP_2048_SHA256: 8, // 8
    +RSA_DECRYPT_OAEP_3072_SHA256: 9, // 9
    +RSA_DECRYPT_OAEP_4096_SHA256: 10, // 10
    +EC_SIGN_P256_SHA256: 12, // 12
    +EC_SIGN_P384_SHA384: 13 // 13
  |};

  declare var v1$CryptoKeyVersionState: {|
    +CRYPTO_KEY_VERSION_STATE_UNSPECIFIED: 0, // 0
    +PENDING_GENERATION: 5, // 5
    +ENABLED: 1, // 1
    +DISABLED: 2, // 2
    +DESTROYED: 3, // 3
    +DESTROY_SCHEDULED: 4 // 4
  |};

  declare var v1$CryptoKeyVersionView: {|
    +CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED: 0, // 0
    +FULL: 1 // 1
  |};

  declare var v1$ProtectionLevel: {|
    +PROTECTION_LEVEL_UNSPECIFIED: 0, // 0
    +SOFTWARE: 1, // 1
    +HSM: 2 // 2
  |};

  declare var v1$AttestationFormat: {|
    +ATTESTATION_FORMAT_UNSPECIFIED: 0, // 0
    +CAVIUM_V1_COMPRESSED: 3 // 3
  |};

  declare interface v1$KeyOperationAttestation {
    format: $Values<typeof v1$AttestationFormat>;
  }

  declare interface v1$CryptoKeyVersion {
    name: string;
    state: $Values<typeof v1$CryptoKeyVersionState>;
    protectionLevel: $Values<typeof v1$ProtectionLevel>;
    algorithm: $Values<typeof v1$CryptoKeyVersionAlgorithm>;
    attestation?: v1$KeyOperationAttestation;
    createTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
    generateTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
    destroyTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    destroyEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  }

  declare interface v1$CryptoKeyVersionTemplate {
    protectionLevel: $Values<typeof v1$ProtectionLevel>;
    algorithm: $Values<typeof v1$CryptoKeyVersionAlgorithm>;
  }

  declare var v1$CryptoKeyPurpose: {|
    +CRYPTO_KEY_PURPOSE_UNSPECIFIED: 0, // 0
    +ENCRYPT_DECRYPT: 1, // 1
    +ASYMMETRIC_SIGN: 5, // 5
    +ASYMMETRIC_DECRYPT: 6 // 6
  |};

  declare interface v1$CryptoKey {
    name: string;
    primary: v1$CryptoKeyVersion;
    purpose: $Values<typeof v1$CryptoKeyPurpose>;
    createTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
    nextRotationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    versionTemplate: v1$CryptoKeyVersionTemplate;
    labels: {
      [s: string]: string
    };
  }

  declare interface v1$KeyRing {
    name: string;
    createTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
  }

  declare interface v1$KeyManagementServiceClient$ConfigurationObject {
    credentials?: {
      client_email?: string,
      private_key?: string
    };
    email?: string;
    keyFilename?: string;
    port?: number;
    projectId?: string;
    promise?: any;
    servicePath?: string;
  }

  declare interface v1$KeyManagementServiceClient$EncryptRequest {
    name: string;
    plaintext: string;
    additionalAuthenticatedData?: string;
  }

  declare interface v1$KeyManagementServiceClient$EncryptResponse {
    name: string;
    ciphertext: Buffer;
  }

  declare type v1$KeyManagementServiceClient$EncryptCallback = (
    err: Error | null,
    apiResponse: [v1$KeyManagementServiceClient$EncryptResponse, any, any]
  ) => void;

  declare interface v1$KeyManagementServiceClient$DecryptRequest {
    name: string;
    ciphertext: string;
    additionalAuthenticatedData?: string;
  }

  declare interface v1$KeyManagementServiceClient$DecryptResponse {
    plaintext: Buffer;
  }

  declare type v1$KeyManagementServiceClient$DecryptCallback = (
    err: Error | null,
    apiResponse: [v1$KeyManagementServiceClient$DecryptResponse, any, any]
  ) => void;

  declare interface v1$KeyManagementServiceClient$ListKeyRingsRequest {
    parent: string;
    page_size?: number;
    page_token?: string;
  }

  declare type v1$KeyManagementServiceClient$ListKeyRingsCallback = (
    err: Error | null,
    apiResponse: [v1$KeyRing[], any, any]
  ) => void;

  declare interface v1$KeyManagementServiceClient$ListCryptoKeysRequest {
    parent: string;
    page_size?: number;
    page_token?: string;
  }

  declare type v1$KeyManagementServiceClient$ListCryptoKeysCallback = (
    err: Error | null,
    apiResponse: [v1$CryptoKey[], any, any]
  ) => void;

  declare class v1$KeyManagementServiceClient {
    constructor(
      options?: v1$KeyManagementServiceClient$ConfigurationObject
    ): this;
    keyRingPath(project: string, location: string, keyRing: string): string;
    cryptoKeyPathPath(
      project: string,
      location: string,
      keyRing: string,
      cryptoKeyPath: string
    ): string;
    locationPath(project: string, location: string): string;
    cryptoKeyPath(
      project: string,
      location: string,
      keyRing: string,
      cryptoKey: string
    ): string;
    cryptoKeyVersionPath(
      project: string,
      location: string,
      keyRing: string,
      cryptoKey: string,
      cryptoKeyVersion: string
    ): string;
    encrypt(
      request: v1$KeyManagementServiceClient$EncryptRequest,
      gaxOpts?: GAX$CallOptions
    ): Promise<[v1$KeyManagementServiceClient$EncryptResponse, any, any]>;
    encrypt(
      request: v1$KeyManagementServiceClient$EncryptRequest,
      callback: v1$KeyManagementServiceClient$EncryptCallback
    ): void;
    encrypt(
      request: v1$KeyManagementServiceClient$EncryptRequest,
      gaxOpts: GAX$CallOptions,
      callback: v1$KeyManagementServiceClient$EncryptCallback
    ): void;
    decrypt(
      request: v1$KeyManagementServiceClient$DecryptRequest,
      gaxOpts?: GAX$CallOptions
    ): Promise<[v1$KeyManagementServiceClient$DecryptResponse, any, any]>;
    decrypt(
      request: v1$KeyManagementServiceClient$DecryptRequest,
      callback: v1$KeyManagementServiceClient$DecryptCallback
    ): void;
    decrypt(
      request: v1$KeyManagementServiceClient$DecryptRequest,
      gaxOpts: GAX$CallOptions,
      callback: v1$KeyManagementServiceClient$DecryptCallback
    ): void;
    listKeyRings(
      request: v1$KeyManagementServiceClient$ListKeyRingsRequest,
      gaxOpts?: GAX$CallOptions
    ): Promise<[v1$KeyRing[], any, any]>;
    listKeyRings(
      request: v1$KeyManagementServiceClient$ListKeyRingsRequest,
      callback: v1$KeyManagementServiceClient$ListKeyRingsCallback
    ): void;
    listKeyRings(
      request: v1$KeyManagementServiceClient$ListKeyRingsRequest,
      gaxOpts: GAX$CallOptions,
      callback: v1$KeyManagementServiceClient$ListKeyRingsCallback
    ): void;
    listCryptoKeys(
      request: v1$KeyManagementServiceClient$ListCryptoKeysRequest,
      gaxOpts?: GAX$CallOptions
    ): Promise<[v1$CryptoKey[], any, any]>;
    listCryptoKeys(
      request: v1$KeyManagementServiceClient$ListCryptoKeysRequest,
      callback: v1$KeyManagementServiceClient$ListCryptoKeysCallback
    ): void;
    listCryptoKeys(
      request: v1$KeyManagementServiceClient$ListCryptoKeysRequest,
      gaxOpts: GAX$CallOptions,
      callback: v1$KeyManagementServiceClient$ListCryptoKeysCallback
    ): void;
  }
  declare export class KeyManagementServiceClient
    mixins v1$KeyManagementServiceClient {
    constructor(
      options?: v1$KeyManagementServiceClient$ConfigurationObject
    ): this;
  }

  /**
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions
   */
  declare interface GAX$CallOptions {
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
  declare interface GAX$RetryOptions {
    retryCodes: string[];
    backoffSettings: GAX$BackoffSettings;
  }

  /**
   * https://googleapis.github.io/gax-nodejs/global.html#BackoffSettings
   */
  declare interface GAX$BackoffSettings {
    initialRetryDelayMillis: number;
    retryDelayMultiplier: number;
    maxRetryDelayMillis: number;
    initialRpcTimeoutMillis: number;
    maxRpcTimeoutMillis: number;
    totalTimeoutMillis: number;
  }
}
