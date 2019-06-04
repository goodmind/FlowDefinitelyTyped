declare module "node-downloader-helper" {
  import type { EventEmitter } from "events";

  import type {
    RequestOptions as HttpRequestOptions,
    OutgoingHttpHeaders
  } from "http";

  import type { RequestOptions as HttpsRequestOptions } from "https";

  declare export interface Options {
    method?: string;
    headers?: OutgoingHttpHeaders;
    fileName?: string;
    forceResume?: boolean;
    override?: boolean;
    httpRequestOptions?: HttpRequestOptions;
    httpsRequestOptions?: HttpsRequestOptions;
  }
  declare export interface Stats {
    total: number;
    downloaded: number;
    progress: number;
    speed: number;
  }

  declare export var DH_STATES: {|
    +IDLE: "IDLE", // "IDLE"
    +STARTED: "STARTED", // "STARTED"
    +DOWNLOADING: "DOWNLOADING", // "DOWNLOADING"
    +PAUSED: "PAUSED", // "PAUSED"
    +RESUMED: "RESUMED", // "RESUMED"
    +STOPPED: "STOPPED", // "STOPPED"
    +FINISHED: "FINISHED", // "FINISHED"
    +FAILED: "FAILED" // "FAILED"
  |};

  declare export class DownloaderHelper mixins EventEmitter {
    constructor(url: string, destFolder: string, options?: Options): this;
    start(): Promise<boolean>;
    pause(): Promise<boolean>;
    resume(): Promise<boolean>;
    stop(): Promise<boolean>;
  }
}
