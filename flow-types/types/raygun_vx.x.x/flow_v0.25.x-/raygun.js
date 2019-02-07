declare module "raygun" {
  declare interface raygun$KeyValueObject {
    [key: string]: string | number | boolean | raygun$KeyValueObject;
  }

  declare interface raygun$StackFrame {
    lineNumber: number;
    className: string;
    fileName: string;
    methodName: string;
    columnNumber?: number;
  }

  declare interface raygun$RaygunErrorObject {
    message: string;
    className: string;
    stackTrace: raygun$StackFrame[];
    innerError?: raygun$RaygunErrorObject;
  }

  declare interface raygun$RaygunRequest {
    hostname?: string;
    host?: string;
    path?: string;
    method?: string;
    ip?: string;
    queryString?: raygun$KeyValueObject;
    headers?: raygun$KeyValueObject;
    form?: raygun$KeyValueObject;
  }

  declare interface raygun$RaygunUser {
    identifier: string;
    email?: string;
    fullName?: string;
    firstName?: string;
    uuid?: string;
  }

  declare interface raygun$RaygunPayload {
    occurredOn: Date;
    details: {
      client: {
        name: "raygun-node",
        version: string
      },
      groupingKey?: string,
      error: raygun$RaygunErrorObject,
      environment: {
        osVersion: string,
        architecture: string,
        totalPhysicalMemory: number,
        availablePhysicalMemory: number,
        utcOffset: number,
        processorCount?: number,
        cpu: {
          model: string,
          speed: number,
          times: {
            user: number,
            nice: number,
            sys: number,
            idle: number,
            irq: number
          }
        }
      },
      machineName: string,
      userCustomData?: raygun$KeyValueObject,
      tags: string[],
      request?: raygun$RaygunRequest,
      user?:
        | raygun$RaygunUser
        | {
            identifier: string
          },
      version?: string
    };
  }

  declare interface raygun$RaygunOfflineStorageProvider<
    TTransportItem = raygun$RaygunPayload,
    TStorageItem = string
  > {
    init(options: any): raygun$RaygunOfflineStorageProvider;
    save(item: TTransportItem, callback: (error?: Error) => void): void;
    retrieve(
      callback: (
        error: Error,
        storageItems: $ReadOnlyArray<TStorageItem>
      ) => void
    ): void;
    send(
      callback: (error: Error, sendItems: $ReadOnlyArray<TStorageItem>) => void
    ): void;
  }

  declare type raygun$OnBeforeSend = (
    payload: raygun$RaygunPayload,
    exception: Error,
    customData: raygun$KeyValueObject,
    request: raygun$RaygunRequest,
    tags: $ReadOnlyArray<string>
  ) => boolean | raygun$RaygunPayload;

  declare interface raygun$RaygunOptions {
    apiKey: string;
    filters?: $ReadOnlyArray<string>;
    port?: number;
    host?: string;
    useSSL?: boolean;
    onBeforeSend?: raygun$OnBeforeSend;
    offlineStorage?: raygun$RaygunOfflineStorageProvider;
    offlineStorageOptions?: any;
    isOffline?: boolean;
    groupingKey?: string;
    tags?: $ReadOnlyArray<string>;
    userHumanStringForObject?: boolean;
    reportColumnNumbers?: boolean;
    innerErrorFieldName?: string;
  }
  declare class Client {
    init(options: raygun$raygun$RaygunOptions): Client;
    setUser(user: raygun$raygun$RaygunUser): Client;
    setVersion(version: string): Client;
    onBeforeSend(callback: raygun$raygun$OnBeforeSend): Client;
    groupingKey(groupingKey: string): Client;
    offline(): Client;
    online(): Client;
    send(
      exception: Error | string | { [key: string]: any },
      customData?: raygun$raygun$KeyValueObject,
      offlineStorageCallback?: (error?: Error) => void,
      request?: raygun$raygun$RaygunRequest,
      tags?: $ReadOnlyArray<string>
    ): raygun$raygun$RaygunPayload;
    expressHandler(
      error: Error,
      request: raygun$raygun$RaygunRequest,
      res: any,
      next: any
    ): void;
  }
  declare module.exports: typeof Client;
}
