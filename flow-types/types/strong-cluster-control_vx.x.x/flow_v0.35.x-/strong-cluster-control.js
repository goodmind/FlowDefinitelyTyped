declare module 'strong-cluster-control' {
        declare type StrongClusterControl$pid = number;

declare interface StrongClusterControl$StartOptions {
size?: number,
env?: {},
shutdownTimeout?: number,
terminateTimeout?: number,
throttleDelay?: number
} 

declare interface StrongClusterControl$ClusterMaster {
StrongClusterControl$pid: number,
setSize?: number,
startTime: number
} 

declare type StrongClusterControl$ClusterWorker = {
id: number
} & StrongClusterControl$ClusterMaster


declare interface StrongClusterControl$ClusterStatus {
master: StrongClusterControl$ClusterMaster,
workers: StrongClusterControl$ClusterWorker[]
} 

declare interface StrongClusterControl$CMD {
SHUTDOWN: "CLUSTER_CONTROL_shutdown"
} 

declare type StrongClusterControl$Control = {
+cmd: StrongClusterControl$CMD,
+CPUS: number,
+options: StrongClusterControl$StartOptions,

/**
 * @description Start the controller
 * @param options - An options object, no default, and options object is not required.
 * @param - Number of workers that should be running, the default is to not control the number of workers
 * @param - Environment properties object passed to cluster.fork() if the controller has to start a worker to resize the cluster, default is null.
 * @param - Number of milliseconds to wait after shutdown before terminating a worker, the default is 5 seconds
 * @param - Number of milliseconds to wait after terminate before killing a worker, the default is 5 seconds
 * @param - Number of milliseconds to delay restarting workers after they are exiting abnormally. Abnormal is defined as as not suicide.
 */
start(options?: StrongClusterControl$StartOptions, callback?: () => any): this,
start(callback?: () => any): this,

/**
 * @description Stop the controller, after stopping workers (if the size is being controlled, see setSize()).
 */
stop(callback?: () => any): this,

/**
 * @description Restart workers one by one, until all current workers have been restarted.
 */
restart(): this,

/**
 * @description Returns the current cluster status
 */
status(): StrongClusterControl$ClusterStatus,

/**
 * @description Set the size of the cluster.
 * @param N - The size of the cluster is the number of workers that should be maintained online.
 */
setSize(N?: number): this,

/**
 * @description Disconnect worker id and take increasingly agressive action until it exits.
 * @param id - Cluster worker ID,
 */
shutdown(id: number): this,

/**
 * @description Disconnect worker id and take increasingly agressive action until it exits.
 * @param id - Cluster worker ID,
 */
terminate(id: number): this,
on(event: "start" | "stop" | "restart", handler: () => any): this,
on(event: "setSize" | "resize", handler: (size: number) => any): this,
on(
event: "startWorker",
handler: (worker: StrongClusterControl$ClusterWorker) => any): this,
on(
event: "startRestart",
handler: (workers: StrongClusterControl$pid[]) => any): this,
on(
event: "stopWorker",
handler: (
worker: StrongClusterControl$ClusterWorker,
code: number,
signal: string) => any): this,
on(event: "error", handler: (error: Error | Error[]) => any): this
} & NodeJS.EventEmitter

	declare var control: StrongClusterControl$StrongClusterControl$Control;
	declare module.exports: typeof control

    }
