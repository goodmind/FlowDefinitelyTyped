declare module "pkgcloud" {
  declare export var version: string;
  declare export type ClientError = {
    provider?: Providers,
    method?: string,
    failCode?: string,
    statusCode?: number,
    href?: string,
    headers?: {
      [headerName: string]: string
    },
    result?: any
  } & Error;

  declare export type Providers =
    | "amazon"
    | "azure"
    | "digitalocean"
    | "google"
    | "hp"
    | "iriscouch"
    | "joyent"
    | "mongohq"
    | "mongolab"
    | "oneandone"
    | "openstack"
    | "rackspace"
    | "redistogo"
    | "telefonic";
  declare export interface BaseProviderOptions {
    provider: Providers;
  }
  declare export interface AmazonProviderOptions {
    provider: "amazon";
    keyId: string;
    key: string;
    region?: string;
  }
  declare export interface AzureProviderOptions {
    provider: "azure";
    storageAccount: string;
    storageAccessKey: string;
    location?: string;
  }
  declare export type ProviderOptions = BaseProviderOptions &
    $Shape<AmazonProviderOptions | AzureProviderOptions>;
  declare var storage: typeof npm$namespace$storage;

  declare var npm$namespace$storage: {
    createClient: typeof storage$createClient
  };
  declare interface storage$StorageUploadOptions {
    container: string;
    remote: string;
  }

  declare interface storage$StorageDownloadOptions {
    container: string;
    remote: string;
  }

  declare interface storage$Client {
    provider: string;
    config: ProviderOptions;
    protocol: string;
    getContainers(
      callback: (err: ClientError, containers: storage$Container[]) => any
    ): void;
    createContainer(
      options: any,
      callback: (err: ClientError, container: storage$Container) => any
    ): void;
    destroyContainer(
      containerName: string,
      callback: (err: ClientError) => any
    ): void;
    getContainer(
      containerName: string,
      callback: (err: ClientError, container: storage$Container) => any
    ): void;
    upload(options: storage$StorageUploadOptions): NodeJS$WriteStream;
    download(options: storage$StorageDownloadOptions): NodeJS$ReadStream;
    getFiles(
      containerName: string,
      callback: (err: ClientError, files: storage$File[]) => any
    ): void;
    getFile(
      containerName: string,
      file: string,
      callback: (err: ClientError, file: storage$File) => any
    ): void;
    removeFile(
      containerName: string,
      file: string,
      callback: (err: ClientError) => any
    ): void;
    on(
      eventName: string,
      callback: (message: string, object?: any) => any
    ): void;
  }

  declare interface storage$Container {
    client: storage$Client;
  }

  declare interface storage$File {
    container: string;
    name: string;
    size: number;
    client: storage$Client;
  }

  declare function storage$createClient(
    options: ProviderOptions
  ): storage$Client;
}
