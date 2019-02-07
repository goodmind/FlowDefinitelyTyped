declare module "sc-broker" {
  import type { SCServer } from "socketcluster-server";

  import type { SCBrokerOptions } from "./scbroker";

  import type { WorkerExitInfo } from "socketcluster";

  import type { EventEmitter } from "events";

  import type { KeyChain, FlexiMap } from "fleximap";

  import type { Keys, Key } from "expirymanager";

  declare export interface SCBrokerServerOptions {
    id?: string;
    instanceId?: string;
    debug?: boolean;
    inspect?: boolean;
    socketPath?: string;
    port?: number;
    expiryAccuracy?: number;
    downgradeToUser: number | string;
    brokerControllerPath?: string;
    processTermTimeout?: number;
    ipcAckTimeout?: number;
    secretKey?: string;
    brokerOptions?: SCBrokerOptions;
  }
  declare export type SCBrokerServer = {
    options: SCBrokerServerOptions,
    socketPath?: string,
    port?: number,
    ipcAckTimeout: number,
    on(event: "error", listener: (err?: Error) => void): this,
    on(
      event: "brokerMessage",
      listener: (
        brokerId: string,
        data: any,
        callback: (err: Error | null, data: any) => void
      ) => void
    ): this,
    on(event: "ready", listener: (data: any) => void): this,
    on(event: "exit", listener: (data: WorkerExitInfo) => void): this,
    sendToBroker(
      data: any,
      callback?: (err: Error | null, data: any, brokerId: string) => void
    ): void
  } & EventEmitter;

  declare export function createServer(
    options?: SCBrokerServerOptions
  ): SCBrokerServer;

  declare export interface AutoReconnectOptions {
    initialDelay?: number;
    randomness?: number;
    multiplier?: number;
    maxDelay?: number;
  }
  declare export interface SCBrokerClientOptions {
    secretKey?: string;
    timeout?: number;
    socketPath?: string;
    port?: number;
    host?: string;
    autoReconnect?: boolean;
    autoReconnectOptions?: AutoReconnectOptions;
    connectRetryErrorThreshold?: number;
    pubSubBatchDuration?: number;
  }
  declare export interface QueryOptions {
    baseKey?: KeyChain;
    noAck?: boolean;
    data?: any;
  }
  declare export interface SpliceOptions {
    index?: number;
    count?: number;
    items?: any[];
    getValue?: boolean;
    noAck?: boolean;
  }
  declare export type SCBrokerClient = {
    +CONNECTED: "connected",
    +CONNECTING: "connecting",
    +DISCONNECTED: "disconnected",
    socketPath?: string,
    port?: number,
    host?: string,
    autoReconnect: boolean,
    autoReconnectOptions?: AutoReconnectOptions,
    connectRetryErrorThreshold: number,
    state: "connected" | "connecting" | "disconnected",
    connectAttempts: number,
    pendingReconnect: boolean,
    pendingReconnectTimeout: number | null,
    on(event: "error", listener: (err?: Error) => void): this,
    on(event: "warning", listener: (warning?: Error) => void): this,
    on(event: "ready", listener: (data: any) => void): this,
    on(event: "message", listener: (channel: string, data: any) => void): this,
    on(
      event: "subscribeFail",
      listener: (err: Error | null, channel: string) => void
    ): this,
    on(event: "subscribe", listener: (channel: string) => void): this,
    on(event: "unsubscribe", listener: () => void): this,
    isConnected(): boolean,
    subscribe(
      channel: string,
      ackCallback: (err?: Error) => void,
      force?: boolean
    ): void,
    unsubscribe(channel: string, ackCallback: (err?: Error) => void): void,
    subscriptions(includePending?: boolean): string[],
    isSubscribed(channel: string, includePending?: boolean): boolean,
    publish(channel: string, data: any, callback: (err?: Error) => void): void,
    send(data: any, callback: (err?: Error) => void): void,
    set(
      keyChain: KeyChain,
      value: any,
      getValue?: boolean,
      callback?: (err?: Error) => void
    ): void,
    set(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void,
    expire(keys: Keys, seconds: number, callback?: (err?: Error) => void): void,
    unexpire(keys: Keys, callback?: (err?: Error) => void): void,
    getExpiry(key: Key, callback?: (err?: Error) => void): number,
    add(
      keyChain: KeyChain,
      value: any,
      getValue?: boolean,
      callback?: (err?: Error) => void
    ): void,
    add(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void,
    concat(
      keyChain: KeyChain,
      value: any,
      getValue?: boolean,
      callback?: (err?: Error) => void
    ): void,
    concat(
      keyChain: KeyChain,
      value: any,
      callback?: (err?: Error) => void
    ): void,
    get(
      keyChain: KeyChain,
      callback: (err: Error | null, value: any) => void
    ): void,
    getRange(
      keyChain: KeyChain,
      fromIndex: number,
      toIndex: number,
      callback: (err: Error | null, value: any) => void
    ): void,
    getRange(
      keyChain: KeyChain,
      fromIndex: number,
      callback: (err: Error | null, value: any) => void
    ): void,
    getAll(
      callback: (
        err: Error | null,
        value: any[] | { [key: string]: any }
      ) => void
    ): void,
    count(
      keyChain: KeyChain,
      callback: (err: Error | null, value: number) => void
    ): void,
    exec(
      query: (datamap: FlexiMap) => void,
      options?: QueryOptions,
      callback?: (err: Error | null, data: any) => void
    ): void,
    exec(
      query: (datamap: FlexiMap) => void,
      callback: (err: Error | null, data: any) => void
    ): void,
    query(
      query: (datamap: FlexiMap) => void,
      data?: any,
      callback?: (err: Error | null, data: any) => void
    ): void,
    query(
      query: (datamap: FlexiMap) => void,
      callback: (err: Error | null, data: any) => void
    ): void,
    remove(
      keyChain: KeyChain,
      getValue?: boolean,
      callback?: (err?: Error) => void
    ): void,
    remove(keyChain: KeyChain, callback?: (err?: Error) => void): void,
    removeRange(
      keyChain: KeyChain,
      fromIndex: number,
      toIndex?: number,
      getValue?: boolean,
      callback?: (err?: Error) => void
    ): void,
    removeRange(
      keyChain: KeyChain,
      fromIndex: number,
      toIndex?: number,
      callback?: (err?: Error) => void
    ): void,
    removeRange(
      keyChain: KeyChain,
      fromIndex: number,
      callback?: (err?: Error) => void
    ): void,
    removeAll(callback?: (err: Error) => void): void,
    splice(
      keyChain: KeyChain,
      options?: SpliceOptions,
      callback?: (err?: Error) => void
    ): void,
    splice(keyChain: KeyChain, callback?: (err?: Error) => void): void,
    pop(
      keyChain: KeyChain,
      callback: (err: Error | null, data: any) => void
    ): void,
    hasKey(
      keyChain: KeyChain,
      callback: (err: Error | null, data: boolean) => void
    ): void,
    extractKeys(keyChain: KeyChain): string[],
    extractValues(keyChain: KeyChain): any[],
    end(callback: (err?: Error) => void): void
  } & EventEmitter;

  declare export function createClient(
    options?: SCBrokerClientOptions
  ): SCBrokerClient;
}
