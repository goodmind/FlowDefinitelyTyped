declare module 'throng' {
        declare function throng(startOrOptions: throng$throng$ProcessCallback | throng$throng$Options): void

	declare function throng(workers: throng$throng$WorkerCount, start: throng$throng$ProcessCallback): void

	declare type throng$WorkerCount = number | string;

declare type throng$ProcessCallback = (id: number) => any;

declare interface throng$Options {
grace?: number,
lifetime?: number,
master?: throng$ProcessCallback,
start: throng$ProcessCallback,
workers?: throng$WorkerCount
} 
	declare module.exports: typeof throng

    }
