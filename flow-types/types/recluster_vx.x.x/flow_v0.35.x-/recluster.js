declare module 'recluster' {
        import type {
          ChildProcess
        } from 'child_process';

	declare interface recluster$LogOptions {
respawns?: boolean
} 

declare interface recluster$Logger {
log(message?: any, ...optionalParams: any[]): void
} 

declare interface recluster$BalancerOptions {

/**
 * number of active workers
 */
workers?: number,

/**
 * kill timeout for old workers after reload (sec)
 */
timeout?: number,

/**
 * min time between respawns when workers die
 */
respawn?: number,

/**
 * max time between respawns when workers die
 */
backoff?: number,

/**
 * when does the worker become ready? 'listening' or 'started'
 */
readyWhen?: string,

/**
 * arguments to pass to the worker (default: [])
 */
args?: string[],

/**
 * what to log to stdout (default: {respawns: true})
 */
log?: recluster$LogOptions,

/**
 * logger to use, needs `log` method (default: console)
 */
logger?: recluster$Logger
} 

declare class recluster$Balancer  {
constructor(file: string, options: recluster$BalancerOptions): this;
run(): void;
reload(cb?: () => void): void;
stop(): void;
workers(): ChildProcess[];
activeWorkers(): ChildProcess[]
}
	declare function recluster(
file: string,
options?: recluster$recluster$BalancerOptions): recluster$recluster$Balancer

	declare module.exports: typeof recluster

    }
