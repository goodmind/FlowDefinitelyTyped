declare module 'q-retry' {
        import typeof * as Q from 'q';

	declare module.exports: typeof Q

	declare module 'q' {
        declare export interface IRetryOptions {
limit?: number,
interval?: number,
maxInterval?: number,
intervalMultiplier?: number
} 
	declare export function retry<U>(
process: () => IPromise<U>,
onFail: (reason: any, retries: number) => void,
limit: number): Promise<U>

	declare export function retry<U>(
process: () => IPromise<U>,
onFail: (reason: any, retries: number) => void,
options?: IRetryOptions): Promise<U>

	declare export function retry<U>(process: () => IPromise<U>, limit: number): Promise<U>

	declare export function retry<U>(process: () => IPromise<U>, options?: IRetryOptions): Promise<U>

	declare export function retry<U>(
process: () => U,
onFail: (reason: any, retries: number) => void,
limit: number): Promise<U>

	declare export function retry<U>(
process: () => U,
onFail: (reason: any, retries: number) => void,
options?: IRetryOptions): Promise<U>

	declare export function retry<U>(process: () => U, limit: number): Promise<U>

	declare export function retry<U>(process: () => U, options?: IRetryOptions): Promise<U>

	declare interface Promise<T> {
retry<U>(
process: (value: T) => IPromise<U>,
onFail: (reason: any, retries: number) => void,
limit: number): Promise<U>,
retry<U>(
process: (value: T) => IPromise<U>,
onFail: (reason: any, retries: number) => void,
options?: IRetryOptions): Promise<U>,
retry<U>(process: (value: T) => IPromise<U>, limit: number): Promise<U>,
retry<U>(process: (value: T) => IPromise<U>, options?: IRetryOptions): Promise<U>,
retry<U>(
process: (value: T) => U,
onFail: (reason: any, retries: number) => void,
limit: number): Promise<U>,
retry<U>(
process: (value: T) => U,
onFail: (reason: any, retries: number) => void,
options?: IRetryOptions): Promise<U>,
retry<U>(process: (value: T) => U, limit: number): Promise<U>,
retry<U>(process: (value: T) => U, options?: IRetryOptions): Promise<U>
} 
    }

    }
