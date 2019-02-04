declare module 'socketcluster' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          SCServer
        } from 'socketcluster-server';

	import type {
          ChildProcess
        } from 'child_process';

	declare interface WorkerStartInfo {
id: number,
pid: number,
respawn: boolean
} 
	declare interface WorkerClusterStartInfo {
pid: number,
childProcess: ChildProcess
} 
	declare interface WorkerClusterReadyInfo {
pid: number,
childProcess: ChildProcess
} 
	declare interface WorkerClusterExitInfo {
pid: number,
code: number,
signal: string,
childProcess: ChildProcess
} 
	declare interface KillWorkersOptions {
immediate?: boolean,
killClusterMaster?: boolean
} 
	declare type ColorCodes = "red" | "green" | "yellow";
	declare module.exports: typeof SocketCluster

	declare class SocketCluster mixins EventEmitter {
EVENT_FAIL: "fail";
EVENT_WARNING: "warning";
EVENT_READY: "ready";
EVENT_WORKER_START: "workerStart";
EVENT_WORKER_EXIT: "workerExit";
EVENT_BROKER_START: "brokerStart";
EVENT_BROKER_EXIT: "brokerExit";
EVENT_WORKER_CLUSTER_START: "workerClusterStart";
EVENT_WORKER_CLUSTER_READY: "workerClusterReady";
EVENT_WORKER_CLUSTER_EXIT: "workerClusterExit";
options: SCServer.SCServerOptions;
constructor(options?: SCServer.SCServerOptions): this;
on(event: "fail", listener: (err: Error) => void): this;
on(event: "warning", listener: (warning: Error) => void): this;
on(event: "ready", listener: () => void): this;
on(event: "workerStart", listener: (workerInfo: WorkerStartInfo) => void): this;
on(
event: "workerExit",
listener: (workerInfo: SocketCluster$SocketCluster$WorkerExitInfo) => void): this;
on(
event: "brokerStart",
listener: (brokerInfo: SocketCluster$SocketCluster$BrokerStartInfo) => void): this;
on(
event: "brokerExit",
listener: (brokerInfo: SocketCluster$SocketCluster$BrokerExitInfo) => void): this;
on(
event: "workerClusterStart",
listener: (workerClusterInfo: WorkerClusterStartInfo) => void): this;
on(
event: "workerClusterReady",
listener: (workerClusterInfo: WorkerClusterReadyInfo) => void): this;
on(
event: "workerClusterExit",
listener: (workerClusterInfo: WorkerClusterExitInfo) => void): this;
run(): void;
sendToWorker(
workerId: number,
data: any,
callback?: (err: Error, responseData: any, workerId: number) => void): void;
sendToBroker(
brokerId: number,
data: any,
callback?: (err: Error | null, responseData: any) => void): void;
killWorkers(options?: KillWorkersOptions): void;
killBrokers(): void;
log(message: string, time?: number): void;
colorText(message: string, color?: ColorCodes | number): string;
destroy(callback?: () => void): void;
static create(options?: SCServer.SCServerOptions): SocketCluster
}
	declare interface SocketCluster$WorkerExitInfo {
id: number,
pid: number,
code: number,
signal: string
} 

declare interface SocketCluster$BrokerStartInfo {
id: number,
pid: number,
respawn: boolean
} 

declare interface SocketCluster$BrokerExitInfo {
id: number,
pid: number,
code: number,
signal: string
} 
    }
