declare module '@google-cloud/kms' {
        import typeof * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

	declare  class v1$CryptoKeyVersionAlgorithm {
  constructor(...args: empty): mixed;
static +CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED: Class<v1$CryptoKeyVersionAlgorithm__CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED> & v1$CryptoKeyVersionAlgorithm__CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED & 0;// 0
static +GOOGLE_SYMMETRIC_ENCRYPTION: Class<v1$CryptoKeyVersionAlgorithm__GOOGLE_SYMMETRIC_ENCRYPTION> & v1$CryptoKeyVersionAlgorithm__GOOGLE_SYMMETRIC_ENCRYPTION & 1;// 1
static +RSA_SIGN_PSS_2048_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_2048_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_2048_SHA256 & 2;// 2
static +RSA_SIGN_PSS_3072_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_3072_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_3072_SHA256 & 3;// 3
static +RSA_SIGN_PSS_4096_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_4096_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_4096_SHA256 & 4;// 4
static +RSA_SIGN_PKCS1_2048_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_2048_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_2048_SHA256 & 5;// 5
static +RSA_SIGN_PKCS1_3072_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_3072_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_3072_SHA256 & 6;// 6
static +RSA_SIGN_PKCS1_4096_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_4096_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_4096_SHA256 & 7;// 7
static +RSA_DECRYPT_OAEP_2048_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_2048_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_2048_SHA256 & 8;// 8
static +RSA_DECRYPT_OAEP_3072_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_3072_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_3072_SHA256 & 9;// 9
static +RSA_DECRYPT_OAEP_4096_SHA256: Class<v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_4096_SHA256> & v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_4096_SHA256 & 10;// 10
static +EC_SIGN_P256_SHA256: Class<v1$CryptoKeyVersionAlgorithm__EC_SIGN_P256_SHA256> & v1$CryptoKeyVersionAlgorithm__EC_SIGN_P256_SHA256 & 12;// 12
static +EC_SIGN_P384_SHA384: Class<v1$CryptoKeyVersionAlgorithm__EC_SIGN_P384_SHA384> & v1$CryptoKeyVersionAlgorithm__EC_SIGN_P384_SHA384 & 13;// 13

}

declare class v1$CryptoKeyVersionAlgorithm__CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__GOOGLE_SYMMETRIC_ENCRYPTION mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_2048_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_3072_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PSS_4096_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_2048_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_3072_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_SIGN_PKCS1_4096_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_2048_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_3072_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__RSA_DECRYPT_OAEP_4096_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__EC_SIGN_P256_SHA256 mixins v1$CryptoKeyVersionAlgorithm {}
declare class v1$CryptoKeyVersionAlgorithm__EC_SIGN_P384_SHA384 mixins v1$CryptoKeyVersionAlgorithm {}


declare  class v1$CryptoKeyVersionState {
  constructor(...args: empty): mixed;
static +CRYPTO_KEY_VERSION_STATE_UNSPECIFIED: Class<v1$CryptoKeyVersionState__CRYPTO_KEY_VERSION_STATE_UNSPECIFIED> & v1$CryptoKeyVersionState__CRYPTO_KEY_VERSION_STATE_UNSPECIFIED & 0;// 0
static +PENDING_GENERATION: Class<v1$CryptoKeyVersionState__PENDING_GENERATION> & v1$CryptoKeyVersionState__PENDING_GENERATION & 5;// 5
static +ENABLED: Class<v1$CryptoKeyVersionState__ENABLED> & v1$CryptoKeyVersionState__ENABLED & 1;// 1
static +DISABLED: Class<v1$CryptoKeyVersionState__DISABLED> & v1$CryptoKeyVersionState__DISABLED & 2;// 2
static +DESTROYED: Class<v1$CryptoKeyVersionState__DESTROYED> & v1$CryptoKeyVersionState__DESTROYED & 3;// 3
static +DESTROY_SCHEDULED: Class<v1$CryptoKeyVersionState__DESTROY_SCHEDULED> & v1$CryptoKeyVersionState__DESTROY_SCHEDULED & 4;// 4

}

declare class v1$CryptoKeyVersionState__CRYPTO_KEY_VERSION_STATE_UNSPECIFIED mixins v1$CryptoKeyVersionState {}
declare class v1$CryptoKeyVersionState__PENDING_GENERATION mixins v1$CryptoKeyVersionState {}
declare class v1$CryptoKeyVersionState__ENABLED mixins v1$CryptoKeyVersionState {}
declare class v1$CryptoKeyVersionState__DISABLED mixins v1$CryptoKeyVersionState {}
declare class v1$CryptoKeyVersionState__DESTROYED mixins v1$CryptoKeyVersionState {}
declare class v1$CryptoKeyVersionState__DESTROY_SCHEDULED mixins v1$CryptoKeyVersionState {}


declare  class v1$CryptoKeyVersionView {
  constructor(...args: empty): mixed;
static +CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED: Class<v1$CryptoKeyVersionView__CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED> & v1$CryptoKeyVersionView__CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED & 0;// 0
static +FULL: Class<v1$CryptoKeyVersionView__FULL> & v1$CryptoKeyVersionView__FULL & 1;// 1

}

declare class v1$CryptoKeyVersionView__CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED mixins v1$CryptoKeyVersionView {}
declare class v1$CryptoKeyVersionView__FULL mixins v1$CryptoKeyVersionView {}


declare  class v1$ProtectionLevel {
  constructor(...args: empty): mixed;
static +PROTECTION_LEVEL_UNSPECIFIED: Class<v1$ProtectionLevel__PROTECTION_LEVEL_UNSPECIFIED> & v1$ProtectionLevel__PROTECTION_LEVEL_UNSPECIFIED & 0;// 0
static +SOFTWARE: Class<v1$ProtectionLevel__SOFTWARE> & v1$ProtectionLevel__SOFTWARE & 1;// 1
static +HSM: Class<v1$ProtectionLevel__HSM> & v1$ProtectionLevel__HSM & 2;// 2

}

declare class v1$ProtectionLevel__PROTECTION_LEVEL_UNSPECIFIED mixins v1$ProtectionLevel {}
declare class v1$ProtectionLevel__SOFTWARE mixins v1$ProtectionLevel {}
declare class v1$ProtectionLevel__HSM mixins v1$ProtectionLevel {}


declare  class v1$AttestationFormat {
  constructor(...args: empty): mixed;
static +ATTESTATION_FORMAT_UNSPECIFIED: Class<v1$AttestationFormat__ATTESTATION_FORMAT_UNSPECIFIED> & v1$AttestationFormat__ATTESTATION_FORMAT_UNSPECIFIED & 0;// 0
static +CAVIUM_V1_COMPRESSED: Class<v1$AttestationFormat__CAVIUM_V1_COMPRESSED> & v1$AttestationFormat__CAVIUM_V1_COMPRESSED & 3;// 3

}

declare class v1$AttestationFormat__ATTESTATION_FORMAT_UNSPECIFIED mixins v1$AttestationFormat {}
declare class v1$AttestationFormat__CAVIUM_V1_COMPRESSED mixins v1$AttestationFormat {}


declare interface v1$KeyOperationAttestation {
format: v1$AttestationFormat
} 

declare interface v1$CryptoKeyVersion {
name: string,
state: v1$CryptoKeyVersionState,
protectionLevel: v1$ProtectionLevel,
algorithm: v1$CryptoKeyVersionAlgorithm,
attestation?: v1$KeyOperationAttestation,
createTime: google_protobuf_timestamp_pb.Timestamp.AsObject,
generateTime: google_protobuf_timestamp_pb.Timestamp.AsObject,
destroyTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
destroyEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject
} 

declare interface v1$CryptoKeyVersionTemplate {
protectionLevel: v1$ProtectionLevel,
algorithm: v1$CryptoKeyVersionAlgorithm
} 

declare  class v1$CryptoKeyPurpose {
  constructor(...args: empty): mixed;
static +CRYPTO_KEY_PURPOSE_UNSPECIFIED: Class<v1$CryptoKeyPurpose__CRYPTO_KEY_PURPOSE_UNSPECIFIED> & v1$CryptoKeyPurpose__CRYPTO_KEY_PURPOSE_UNSPECIFIED & 0;// 0
static +ENCRYPT_DECRYPT: Class<v1$CryptoKeyPurpose__ENCRYPT_DECRYPT> & v1$CryptoKeyPurpose__ENCRYPT_DECRYPT & 1;// 1
static +ASYMMETRIC_SIGN: Class<v1$CryptoKeyPurpose__ASYMMETRIC_SIGN> & v1$CryptoKeyPurpose__ASYMMETRIC_SIGN & 5;// 5
static +ASYMMETRIC_DECRYPT: Class<v1$CryptoKeyPurpose__ASYMMETRIC_DECRYPT> & v1$CryptoKeyPurpose__ASYMMETRIC_DECRYPT & 6;// 6

}

declare class v1$CryptoKeyPurpose__CRYPTO_KEY_PURPOSE_UNSPECIFIED mixins v1$CryptoKeyPurpose {}
declare class v1$CryptoKeyPurpose__ENCRYPT_DECRYPT mixins v1$CryptoKeyPurpose {}
declare class v1$CryptoKeyPurpose__ASYMMETRIC_SIGN mixins v1$CryptoKeyPurpose {}
declare class v1$CryptoKeyPurpose__ASYMMETRIC_DECRYPT mixins v1$CryptoKeyPurpose {}


declare interface v1$CryptoKey {
name: string,
primary: v1$CryptoKeyVersion,
purpose: v1$CryptoKeyPurpose,
createTime: google_protobuf_timestamp_pb.Timestamp.AsObject,
nextRotationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
versionTemplate: v1$CryptoKeyVersionTemplate,
labels: {
[s: string]: string
}
} 

declare interface v1$KeyRing {
name: string,
createTime: google_protobuf_timestamp_pb.Timestamp.AsObject
} 

declare interface KeyManagementServiceClient$ConfigurationObject {
credentials?: {
client_email?: string,
private_key?: string
},
email?: string,
keyFilename?: string,
port?: number,
projectId?: string,
promise?: any,
servicePath?: string
} 

declare interface KeyManagementServiceClient$EncryptRequest {
name: string,
plaintext: string,
additionalAuthenticatedData?: string
} 

declare interface KeyManagementServiceClient$EncryptResponse {
name: string,
ciphertext: Buffer
} 

declare type KeyManagementServiceClient$EncryptCallback = (
err: Error | null,
apiResponse: [KeyManagementServiceClient$EncryptResponse, any, any]) => void;

declare interface KeyManagementServiceClient$DecryptRequest {
name: string,
ciphertext: string,
additionalAuthenticatedData?: string
} 

declare interface KeyManagementServiceClient$DecryptResponse {
plaintext: Buffer
} 

declare type KeyManagementServiceClient$DecryptCallback = (
err: Error | null,
apiResponse: [KeyManagementServiceClient$DecryptResponse, any, any]) => void;

declare interface KeyManagementServiceClient$ListKeyRingsRequest {
parent: string,
page_size?: number,
page_token?: string
} 

declare type KeyManagementServiceClient$ListKeyRingsCallback = (err: Error | null, apiResponse: [v1$KeyRing[], any, any]) => void;

declare interface KeyManagementServiceClient$ListCryptoKeysRequest {
parent: string,
page_size?: number,
page_token?: string
} 

declare type KeyManagementServiceClient$ListCryptoKeysCallback = (err: Error | null, apiResponse: [v1$CryptoKey[], any, any]) => void;

declare class v1$KeyManagementServiceClient  {
constructor(options?: v1$KeyManagementServiceClient.KeyManagementServiceClient$ConfigurationObject): this;
keyRingPath(project: string, location: string, keyRing: string): string;
cryptoKeyPathPath(
project: string,
location: string,
keyRing: string,
cryptoKeyPath: string): string;
locationPath(project: string, location: string): string;
cryptoKeyPath(project: string, location: string, keyRing: string, cryptoKey: string): string;
cryptoKeyVersionPath(
project: string,
location: string,
keyRing: string,
cryptoKey: string,
cryptoKeyVersion: string): string;
encrypt(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$EncryptRequest,
gaxOpts?: GAX$GAX$CallOptions): Promise<[v1$KeyManagementServiceClient.KeyManagementServiceClient$EncryptResponse, any, any]>;
encrypt(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$EncryptRequest,
callback: v1$KeyManagementServiceClient.KeyManagementServiceClient$EncryptCallback): void;
encrypt(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$EncryptRequest,
gaxOpts: GAX$GAX$CallOptions,
callback: v1$KeyManagementServiceClient.KeyManagementServiceClient$EncryptCallback): void;
decrypt(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$DecryptRequest,
gaxOpts?: GAX$GAX$CallOptions): Promise<[v1$KeyManagementServiceClient.KeyManagementServiceClient$DecryptResponse, any, any]>;
decrypt(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$DecryptRequest,
callback: v1$KeyManagementServiceClient.KeyManagementServiceClient$DecryptCallback): void;
decrypt(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$DecryptRequest,
gaxOpts: GAX$GAX$CallOptions,
callback: v1$KeyManagementServiceClient.KeyManagementServiceClient$DecryptCallback): void;
listKeyRings(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListKeyRingsRequest,
gaxOpts?: GAX$GAX$CallOptions): Promise<[v1$KeyRing[], any, any]>;
listKeyRings(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListKeyRingsRequest,
callback: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListKeyRingsCallback): void;
listKeyRings(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListKeyRingsRequest,
gaxOpts: GAX$GAX$CallOptions,
callback: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListKeyRingsCallback): void;
listCryptoKeys(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListCryptoKeysRequest,
gaxOpts?: GAX$GAX$CallOptions): Promise<[v1$CryptoKey[], any, any]>;
listCryptoKeys(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListCryptoKeysRequest,
callback: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListCryptoKeysCallback): void;
listCryptoKeys(
request: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListCryptoKeysRequest,
gaxOpts: GAX$GAX$CallOptions,
callback: v1$KeyManagementServiceClient.KeyManagementServiceClient$ListCryptoKeysCallback): void
}
	declare export class KeyManagementServiceClient mixins v1$v1$KeyManagementServiceClient {
constructor(options?: v1$v1$KeyManagementServiceClient.KeyManagementServiceClient$ConfigurationObject): this
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
    }
