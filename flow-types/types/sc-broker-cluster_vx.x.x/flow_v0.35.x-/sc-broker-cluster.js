declare module 'sc-broker-cluster' {
        import type {
          SCServerSocket,SCServer
        } from 'socketcluster-server';

	import type {
          BrokerStartInfo,BrokerExitInfo
        } from 'socketcluster';

	import type {
          SpliceOptions,QueryOptions
        } from 'sc-broker';

	import type {
          SCChannel
        } from 'sc-channel';

	import type {
          EventEmitter
        } from 'events';

	import type {
          AsyncResultArrayCallback
        } from 'async';

	import type {
          KeyChain,FlexiMap
        } from 'fleximap';

	import type {
          Keys
        } from 'expirymanager';

	import type {
          ClientCluster
        } from './clientcluster';

	declare export class AbstractDataClient mixins EventEmitter {
constructor(dataClient: ClientCluster): this;
set(
keyChain: KeyChain,
value: any,
getValue?: boolean,
callback?: (err?: Error) => void): void;
set(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void;
expire(keys: Keys, seconds: number, callback?: (err?: Error) => void): void;
unexpire(keys: Keys, callback?: (err?: Error) => void): void;
add(
keyChain: KeyChain,
value: any,
getValue?: boolean,
callback?: (err?: Error) => void): void;
add(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void;
get(keyChain: KeyChain, callback: (err: Error | null, value: any) => void): void;
getRange(
keyChain: KeyChain,
fromIndex: number,
toIndex: number,
callback: (err: Error | null, value: any) => void): void;
getRange(
keyChain: KeyChain,
fromIndex: number,
callback: (err: Error | null, value: any) => void): void;
getAll(
callback: (err: Error | null, value: any[] | {[key: string]: any}) => void): void;
count(keyChain: KeyChain, callback: (err: Error | null, value: number) => void): void;
remove(keyChain: KeyChain, getValue?: boolean, callback?: (err?: Error) => void): void;
remove(keyChain: KeyChain, callback?: (err?: Error) => void): void;
removeRange(
keyChain: KeyChain,
fromIndex: number,
toIndex?: number,
getValue?: boolean,
callback?: (err?: Error) => void): void;
removeRange(
keyChain: KeyChain,
fromIndex: number,
toIndex?: number,
callback?: (err?: Error) => void): void;
removeRange(keyChain: KeyChain, fromIndex: number, callback?: (err?: Error) => void): void;
removeAll(callback?: (err: Error) => void): void;
splice(
keyChain: KeyChain,
options?: SpliceOptions,
callback?: (err?: Error) => void): void;
splice(keyChain: KeyChain, callback?: (err?: Error) => void): void;
pop(keyChain: KeyChain, callback: (err: Error | null, data: any) => void): void;
hasKey(keyChain: KeyChain, callback: (err: Error | null, data: boolean) => void): void;
extractKeys(keyChain: KeyChain): string[];
extractValues(keyChain: KeyChain): any[];
exec(
query: (datamap: FlexiMap) => void,
options?: QueryOptions,
callback?: (err: Error | null, data: any) => void): void;
exec(
query: (datamap: FlexiMap) => void,
callback: (err: Error | null, data: any) => void): void
}
	declare export type handlerFunction = (data: any) => void;
	declare export type mapperFunction = (keyChain: KeyChain, method: string, clientIds: number[]) => number | number[];
	
/**
 * The exchange object is a top-level SCBrokerClient which lets you publish events and manipulate data within your brokers - It represents a cluster of 1 or more brokers.
 */
declare export class SCExchange mixins AbstractDataClient {
constructor(privateClientCluster: ClientCluster, publicClientCluster: ClientCluster, ioClusterClient: Client): this;
send(
data: any,
mapIndex: number | string | string[] | null,
callback?: (err?: Error) => void): void;
publish(channelName: string, data: any, callback: (err?: Error) => void): void;
subscribe(channelName: string): SCChannel;
unsubscribe(channelName: string): void;
channel(channelName: string): SCChannel;
destroyChannel(channelName: string): void;
subscriptions(includePending?: boolean): string[];
isSubscribed(channelName: string, includePending?: boolean): boolean;
watch(channelName: string, handler: handlerFunction): void;
unwatch(channelName: string, handler?: handlerFunction): void;
watchers(channelName: string): handlerFunction[];
setMapper(mapper: mapperFunction): void;
getMapper(): mapperFunction;
map(keyChain: KeyChain, method: string): {
type: string,
targets: Client[]
};
destroy(): void
}
	declare export interface SCBrokerClusterServerOptions {
brokers: string[],
debug?: boolean,
inspect?: boolean,
instanceId?: string,
secretKey?: string,
expiryAccuracy?: number,
downgradeToUser: number | string,
appBrokerControllerPath?: string,
processTermTimeout?: number,
ipcAckTimeout?: number,
brokerOptions?: SCServer.SCServerOptions
} 
	declare export class Server mixins EventEmitter {
constructor(options: SCBrokerClusterServerOptions): this;
on(event: "brokerStart", listener: (brokerInfo: BrokerStartInfo) => void): this;
on(event: "brokerExit", listener: (brokerInfo: BrokerExitInfo) => void): this;
on(
event: "brokerMessage",
listener: (
brokerId: string,
data: any,
callback: (err: Error | null, data: any) => void) => void): this;
on(event: "ready", listener: () => void): this;
on(event: "error", listener: (err?: Error) => void): this;
sendToBroker(
brokerId: string,
data: any,
callback?: (err: Error | null, data: any) => void): void;
killBrokers(): void;
destroy(): void
}
	declare export interface SCBrokerClusterClientOptions {
brokers: string[],
secretKey?: string,
pubSubBatchDuration?: number,
connectRetryErrorThreshold: number
} 
	declare export interface MessagePacket {
channel: string,
data: any
} 
	declare export class Client mixins EventEmitter {
constructor(options: SCBrokerClusterClientOptions): this;
exchange(): SCExchange;
options: SCBrokerClusterClientOptions;
on(event: "error", listener: (err?: Error) => void): this;
on(event: "warning", listener: (warning?: Error) => void): this;
on(event: "ready", listener: () => void): this;
on(event: "message", listener: (packet: MessagePacket) => void): this;
destroy(callback: AsyncResultArrayCallback<SCExchange>): void;
subscribe(channel: string, callback: (err?: Error) => void): void;
unsubscribe(channel: string, callback: () => void): void;
unsubscribeAll(callback: () => void): void;
isSubscribed(channel: string, includePending: boolean): boolean;
subscribeSocket(
socket: SCServerSocket,
channel: string,
callback?: (err?: Error) => void): void;
unsubscribeSocket(socket: SCServerSocket, channel: string, callback?: () => void): void;
setSCServer(scServer: SCServer): void
}
    }
