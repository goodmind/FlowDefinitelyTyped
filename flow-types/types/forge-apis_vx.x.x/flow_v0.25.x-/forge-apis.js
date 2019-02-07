declare module "forge-apis" {
  declare export class AuthClientTwoLegged {
    constructor(clientId: string, clientSecret: string, scope: string[]): this;
    authenticate(): Promise<AuthToken>;
    getCredentials(): AuthToken;
    setCredentials(credentials: AuthToken): void;
    isAuthorized(): boolean;
  }
  declare export class AuthClientThreeLegged {
    constructor(
      clientId: string,
      clientSecret: string,
      redirectUri: string,
      scope: string[]
    ): this;
    generateAuthUrl(): string;
    getToken(code: string): Promise<AuthToken>;
    refreshToken(credentials: AuthToken): Promise<AuthToken>;
  }
  declare export interface ApiResponse {
    body: any;
    headers: any;
    statusCode: number;
  }
  declare export interface ApiError {
    statusCode: number;
    statusMessage: string;
  }
  declare export class BucketsApi {
    constructor(): this;
    createBucket(
      postBuckets: { [key: string]: any },
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    deleteBucket(
      bucketKey: string,
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getBucketDetails(
      bucketKey: string,
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getBuckets(
      options: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
  }
  declare export class HubsApi {
    constructor(): this;
    getHub(
      hubId: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getHubs(
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getHubProjects(
      hubId: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
  }
  declare export class FoldersApi {
    constructor(): this;
    getFolderContents(
      projectId: string,
      folderId: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
  }
  declare export interface JobPayload {
    input: JobPayloadInput;
    output: JobPayloadOutput;
  }
  declare export interface JobPayloadInput {
    urn: string;
    compressedUrn?: boolean;
    rootFilename?: string;
  }
  declare export interface JobPayloadOutput {
    formats: JobPayloadItem[];
  }
  declare export interface JobPayloadItem {
    type: string;
    views?: string[];
    advanced?: {
      applicationProtocol: string,
      tolerance: number
    };
    format?: string;
    exportColor?: boolean;
    exportFileStructure?: string;
  }
  declare export class DerivativesApi {
    constructor(): this;
    deleteManifest(urn: string, credentials: AuthToken): Promise<ApiResponse>;
    getDerivativeManifest(
      urn: string,
      derivativeUrn: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getFormats(
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getManifest(
      urn: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getMetadata(
      urn: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getModelviewMetadata(
      urn: string,
      guid: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getModelviewProperties(
      urn: string,
      guid: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    getThumbnail(
      urn: string,
      opts: { [key: string]: any },
      credentials: AuthToken
    ): Promise<ApiResponse>;
    translate(
      job: JobPayload,
      opts: {
        xAdsForce?: boolean
      },
      credentials: AuthToken
    ): Promise<ApiResponse>;
  }
  declare export interface Credentials {
    client_id: string;
    client_secret: string;
    grant_type: string;
    scope?: string;
  }
  declare export interface AuthToken {
    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token?: string;
  }
  declare interface Dm$BucketResponse {
    bucketKey: string;
    bucketOwner: string;
    createdDate: number;
    permissions: Array<{
      access: string,
      authId: string
    }>;
    policyKey: string;
  }

  declare interface Dm$ItemResponse {
    data: any[];
    included: Dm$Item[];
    jsonapi: {
      version: string
    };
    links: any;
  }

  declare interface Dm$Item {
    attributes: {
      createTime: string,
      createUserId: string,
      displayName: string,
      extension: { [key: string]: any },
      fileType: string,
      lastModifiedTime: string,
      lastModifiedUserId: string,
      mimeType: string,
      name: string,
      storageSize: number,
      versionNumber: number
    };
    id: string;
    links: {
      self: {
        href: string
      }
    };
    relationships: {
      derivatives: {
        data: {
          id: string
        },
        meta: {
          link: {
            href: string
          }
        }
      },
      item: any,
      refs: any,
      storage: {
        data: {
          id: string,
          type: string
        }
      },
      thumbnail: any
    };
    type: string;
  }
}
