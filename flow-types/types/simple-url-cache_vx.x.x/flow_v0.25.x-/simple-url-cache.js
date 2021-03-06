declare module "RedisPool" {
  declare export function connect(
    config: RedisStorageConfig
  ): redis.RedisClient;

  declare export function isOnline(): boolean;

  declare export function kill(): void;
}
declare interface privateN$StorageConfig {
  type: string;
}

declare interface privateN$CacheStorage {
  isCached(): Promise<boolean>;
  removeUrl(): Promise<boolean>;
  getUrl(): Promise<string>;
  cache(html: string): Promise<boolean>;
  cache(html: string, force: boolean): Promise<boolean>;
  destroy(): void;
}

declare class privateN$CacheCategory {
  constructor(currentUrl: string, _config: CacheRules): this;
  getCategory(): string;
  getCurrentUrl(): string;
}
declare module "simple-url-cache" {
  declare export class CacheEngine {
    constructor(storageConfig: FileStorageConfig, cacheRules: CacheRules): this;
    constructor(
      storageConfig: RedisStorageConfig,
      cacheRules: CacheRules
    ): this;
    url(url: string): FileStorage;
    url(url: string): RedisStorage;
  }
  declare export interface RegexRule {
    regex: RegExp;
  }
  declare export type MaxAgeRegexRule = {
    maxAge: number
  } & RegexRule;

  declare export interface CacheRules {
    cacheMaxAge: MaxAgeRegexRule[];
    cacheAlways: RegexRule[];
    cacheNever: RegexRule[];
    default: string;
  }
  declare export type FileStorageConfig = {
    dir: string
  } & privateN$privateN$StorageConfig;

  declare export type RedisStorageConfig = {
    host: string,
    port: number,
    path?: string,
    url?: string,
    socket_keepalive?: boolean,
    password?: string,
    db?: string
  } & privateN$privateN$StorageConfig;

  declare export class FileStorage
    mixins privateN$privateN$CacheCategory, privateN$privateN$CacheStorage {
    constructor(
      _url: string,
      _storageConfig: FileStorageConfig,
      _regexRules: CacheRules
    ): this;
    isCached(): Promise<boolean>;
    removeUrl(): Promise<boolean>;
    getUrl(): Promise<string>;
    cache(html: string): Promise<boolean>;
    cache(html: string, force: boolean): Promise<boolean>;
    destroy(): void;
  }
  declare export class RedisStorage
    mixins privateN$privateN$CacheCategory, privateN$privateN$CacheStorage {
    constructor(
      _url: string,
      _storageConfig: RedisStorageConfig,
      _regexRules: CacheRules
    ): this;
    isCached(): Promise<boolean>;
    removeUrl(): Promise<boolean>;
    getUrl(): Promise<string>;
    cache(html: string): Promise<boolean>;
    cache(html: string, force: boolean): Promise<boolean>;
    destroy(): void;
  }
}
