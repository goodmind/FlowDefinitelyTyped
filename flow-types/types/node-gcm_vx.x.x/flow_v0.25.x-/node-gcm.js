declare module "node-gcm" {
  declare export interface INotificationOptions {
    title: string;
    body?: string;
    icon: string;
    sound?: string;
    badge?: string;
    tag?: string;
    color?: string;
    click_action?: string;
    body_loc_key?: string;
    body_loc_args?: string;
    title_loc_args?: string;
    title_loc_key?: string;
  }
  declare export interface IMessageOptions {
    collapseKey?: string;
    priority?: string;
    contentAvailable?: boolean;
    mutableContent?: boolean;
    delayWhileIdle?: boolean;
    timeToLive?: number;
    restrictedPackageName?: string;
    dryRun?: boolean;
    data?: {
      [key: string]: string
    };
    notification?: INotificationOptions;
  }
  declare export class Message {
    constructor(options?: IMessageOptions): this;
    collapseKey: string;
    delayWhileIdle: boolean;
    timeToLive: number;
    dryRun: boolean;
    addData(key: string, value: string): void;
    addData(data: {
      [key: string]: string
    }): void;
    addNotification(value: INotificationOptions): void;
    addNotification(key: string, value: INotificationOptions): void;
  }
  declare export interface ISenderOptions {
    proxy?: any;
    maxSockets?: number;
    timeout?: number;
  }
  declare export interface ISenderSendOptions {
    retries?: number;
    backoff?: number;
  }
  declare export interface IRecipient {
    to?: string;
    topic?: string;
    condition?: string;
    notificationKey?: string;
    registrationIds?: string[];
    registrationTokens?: string[];
  }
  declare export class Sender {
    constructor(key: string, options?: ISenderOptions): this;
    key: string;
    options: ISenderOptions;
    send(
      message: Message,
      registrationIds: string | string[] | IRecipient,
      callback: (err: any, resJson: IResponseBody) => void
    ): void;
    send(
      message: Message,
      registrationIds: string | string[] | IRecipient,
      retries: number,
      callback: (err: any, resJson: IResponseBody) => void
    ): void;
    send(
      message: Message,
      registrationIds: string | string[] | IRecipient,
      options: ISenderSendOptions,
      callback: (err: any, resJson: IResponseBody) => void
    ): void;
    sendNoRetry(
      message: Message,
      registrationIds: string | string[] | IRecipient,
      callback: (err: any, resJson: IResponseBody) => void
    ): void;
  }
  declare export interface IResponseBody {
    success: number;
    failure: number;
    canonical_ids: number;
    multicast_id?: number;
    results?: {
      message_id?: string,
      registration_id?: string,
      error?: string
    }[];
  }
}
