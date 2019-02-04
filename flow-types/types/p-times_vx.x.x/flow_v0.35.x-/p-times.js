declare module 'p-times' {
        declare module.exports: typeof pTimes

	declare function pTimes<T>(
count: number,
mapper: (index: number) => T | PromiseLike<T>,
options?: pTimes$pTimes$Options): Promise<T[]>

	declare interface pTimes$Options {
concurrency?: number
} 
    }
