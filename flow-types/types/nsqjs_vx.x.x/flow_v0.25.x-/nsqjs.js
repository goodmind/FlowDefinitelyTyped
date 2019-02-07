declare module "nsqjs" {
  import typeof * as events from "events";

  declare export class Message mixins events.EventEmitter {
    static BACKOFF: string;
    static RESPOND: string;
    static FINISH: number;
    static REQUEUE: number;
    static TOUCH: number;
    id: string;
    body: any;
    hasResponded: boolean;
    timestamp: number;
    constructor(
      id: string,
      timestamp: number,
      attempts: number,
      body: any,
      requeueDelay: number,
      msgTimeout: number,
      maxMsgTimeout: number
    ): this;
    json(): any;
    timeUntilTimeout(hard?: boolean): number;
    finish(): any;
    requeue(delay?: number, backoff?: boolean): any;
    touch(): any;
    respond(responseType: number, wireData: Buffer): any;
    on(event: "backoff", listener: () => void): this;
    on(
      event: "respond",
      listener: (responseType: number, wireData: Buffer) => void
    ): this;
  }
  declare export class Writer mixins events.EventEmitter {
    nsqdHost: string;
    nsqdPort: number;
    static READY: string;
    static CLOSED: string;
    static ERROR: string;
    constructor(
      nsqdHost: string,
      nsqdPort: number,
      options?: ConnectionConfigOptions
    ): this;
    connect(): any;
    publish(topic: string, msgs: any, listener?: (err: Error) => void): any;
    close(): any;
    on(event: "ready" | "closed", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
  }
  declare export class Reader mixins events.EventEmitter {
    static ERROR: string;
    static MESSAGE: string;
    static DISCARD: string;
    static NSQD_CONNECTED: string;
    static NSQD_CLOSED: string;
    constructor(
      topic: string,
      channel: any,
      options?: ReaderConnectionConfigOptions
    ): this;
    connect(): any;
    close(): any;
    pause(): any;
    unpause(): any;
    isPaused(): boolean;
    queryLookupd(): any;
    connectToNSQD(host: string, port: number): any;
    handleMessage(message: any): any;
    on(
      event: "nsqd_connected" | "nsqd_closed",
      listener: (host: string, port: number) => void
    ): this;
    on(
      event: "message" | "discard",
      listener: (message: Message) => void
    ): this;
    on(event: "error", listener: (err: Error) => void): this;
  }
  declare export interface ConnectionConfigOptions {
    authSecret?: string;
    clientId?: string;
    deflate?: boolean;
    deflateLevel?: number;
    heartbeatInterval?: number;
    maxInFlight?: number;
    messageTimeout?: number;
    outputBufferSize?: number;
    outputBufferTimeout?: number;
    requeueDelay?: number;
    sampleRate?: number;
    snappy?: boolean;
    tls?: boolean;
    tlsVerification?: boolean;
  }
  declare export type ReaderConnectionConfigOptions = {
    lookupdHTTPAddresses?: string | string[],
    lookupdPollInterval?: number,
    lookupdPollJitter?: number,
    name?: string,
    nsqdTCPAddresses?: string | string[],
    maxAttempts?: number,
    maxBackoffDuration?: number
  } & ConnectionConfigOptions;
}
