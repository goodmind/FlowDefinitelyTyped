declare module 'async-retry' {
        declare function AsyncRetry<A>(
fn: AsyncRetry$AsyncRetry$RetryFunction<A>,
opts: AsyncRetry$AsyncRetry$Options): Promise<A>

	declare interface AsyncRetry$Options {
retries?: number,
factor?: number,
minTimeout?: number,
maxTimeout?: number,
randomize?: boolean,
onRetry?: (e: Error) => any
} 

declare type AsyncRetry$RetryFunction<A> = (bail: (e: Error) => void, attempt: number) => A | Promise<A>;
	declare module.exports: typeof AsyncRetry

    }
