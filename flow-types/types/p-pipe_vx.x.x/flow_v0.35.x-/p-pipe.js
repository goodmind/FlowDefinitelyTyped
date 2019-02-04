declare module 'p-pipe' {
        declare module.exports: typeof pPipe

	declare function pPipe<T1, R>(...args: Tasks1<T1, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, R>(...args: Tasks2<T1, T2, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, R>(...args: Tasks3<T1, T2, T3, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, R>(...args: Tasks4<T1, T2, T3, T4, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, T5, R>(
...args: Tasks5<T1, T2, T3, T4, T5, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, T5, T6, R>(
...args: Tasks6<T1, T2, T3, T4, T5, T6, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, T5, T6, T7, R>(
...args: Tasks7<T1, T2, T3, T4, T5, T6, T7, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, T5, T6, T7, T8, R>(
...args: Tasks8<T1, T2, T3, T4, T5, T6, T7, T8, R>): PromiseTask<T1, R>

	declare function pPipe(...args: Array<Task<any, any>>): PromiseTask<any, any>

	declare function pPipe<T1, R>(tasks: Tasks1<T1, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, R>(tasks: Tasks2<T1, T2, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, R>(tasks: Tasks3<T1, T2, T3, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, R>(tasks: Tasks4<T1, T2, T3, T4, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, T5, R>(
tasks: Tasks5<T1, T2, T3, T4, T5, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, T5, T6, R>(
tasks: Tasks6<T1, T2, T3, T4, T5, T6, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, T5, T6, T7, R>(
tasks: Tasks7<T1, T2, T3, T4, T5, T6, T7, R>): PromiseTask<T1, R>

	declare function pPipe<T1, T2, T3, T4, T5, T6, T7, T8, R>(
tasks: Tasks8<T1, T2, T3, T4, T5, T6, T7, T8, R>): PromiseTask<T1, R>

	declare function pPipe(tasks: Array<Task<any, any>>): PromiseTask<any, any>

	declare type Tasks1<T1, R> = [PromiseTask<T1, R>];
	declare type Tasks2<T1, T2, R> = [Task<T1, T2>, Task<T2, R>];
	declare type Tasks3<T1, T2, T3, R> = [Task<T1, T2>, Task<T2, T3>, Task<T3, R>];
	declare type Tasks4<T1, T2, T3, T4, R> = [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, R>];
	declare type Tasks5<T1, T2, T3, T4, T5, R> = [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, T5>, Task<T5, R>];
	declare type Tasks6<T1, T2, T3, T4, T5, T6, R> = [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, T5>, Task<T5, T6>, Task<T6, R>];
	declare type Tasks7<T1, T2, T3, T4, T5, T6, T7, R> = [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, T5>, Task<T5, T6>, Task<T6, T7>, Task<T7, R>];
	declare type Tasks8<T1, T2, T3, T4, T5, T6, T7, T8, R> = [Task<T1, T2>, Task<T2, T3>, Task<T3, T4>, Task<T4, T5>, Task<T5, T6>, Task<T6, T7>, Task<T7, T8>, Task<T8, R>];
	declare type Task<T, R> = (input: T) => PromiseLike<R> | R;
	declare type PromiseTask<T, R> = (input: T) => Promise<R>;
    }
