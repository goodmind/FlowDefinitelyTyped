declare module 'public-ip' {
        declare export function v4(options?: Options): CancelablePromise<string>

	declare export function v6(options?: Options): CancelablePromise<string>

	declare export interface Options {
https?: boolean,
timeout?: number
} 
	declare export type CancelablePromise<T> = Promise<T> & {
cancel(): void
};
    }
