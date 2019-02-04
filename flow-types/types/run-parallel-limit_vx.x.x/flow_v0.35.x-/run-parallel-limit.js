declare module 'run-parallel-limit' {
        declare type RunParallelLimit$TaskCallback<T> = (err: Error | null, results?: T) => void;

declare type RunParallelLimit$Task<T> = (callback: RunParallelLimit$TaskCallback<T>) => void;

declare type RunParallelLimit$TaskObj<T> = Record<string, RunParallelLimit$Task<T>>;

declare type RunParallelLimit$Callback<T> = (err: Error, results: T) => void;
	declare function RunParallelLimit<T>(tasks: Array<RunParallelLimit$RunParallelLimit$Task<T>>, limit: number): T[]

	declare function RunParallelLimit<T>(
tasks: Array<RunParallelLimit$RunParallelLimit$Task<T>>,
limit: number,
callback: RunParallelLimit$RunParallelLimit$Callback<T[]>): void

	declare function RunParallelLimit<T>(
tasks: RunParallelLimit$RunParallelLimit$TaskObj<T>,
limit: number): Record<string, T>

	declare function RunParallelLimit<T>(
tasks: RunParallelLimit$RunParallelLimit$TaskObj<T>,
limit: number,
callback: RunParallelLimit$RunParallelLimit$Callback<Record<string, T>>): void

	declare module.exports: typeof RunParallelLimit

    }
