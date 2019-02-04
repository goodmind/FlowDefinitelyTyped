declare module 'worker-threads-pool' {
        import type {
          Worker,WorkerOptions
        } from 'worker_threads';

	declare module.exports: typeof Pool

	declare class Pool  {
constructor(options?: Pool$Pool$Options): this;

/**
 * Number of active workers in the pool.
 */
size: number;

/**
 * @param filename argument passed directly to `new Worker(filename, options)`
 * @param options argument passed directly to `new Worker(filename, options)`
 * @param callback will be called once the worker is created
 */
acquire(
filename: string,
callback: (error: Error | null, worker: Worker) => void): void;
acquire(
filename: string,
options: WorkerOptions,
callback: (error: Error | null, worker: Worker) => void): void;

/**
 * Calls `worker.terminate()` on all workers in the pool.
 * @param callback will be called once all workers have terminated
 */
destroy(callback?: () => void): void
}
	declare interface Pool$Options {

/**
 * Maximum number of workers allowed in the pool. Other workers will be queued
 * and started once there's room in the pool.
 * @default 1
 */
max?: number,

/**
 * Maximum number of workers waiting to be started when the pool is full.
 * The callback to `pool.acquire` will be called with an error in case this limit is reached.
 */
maxWaiting?: number
} 
    }
