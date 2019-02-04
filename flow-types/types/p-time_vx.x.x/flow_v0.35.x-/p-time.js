declare module 'p-time' {
        declare module.exports: typeof pTime

	declare function pTime<TArgs: any[], TRes>(
fn: (...args: TArgs) => PromiseLike<TRes>): (...args: TArgs) => pTime$pTime$PromiseWithTime<TRes>

	
      declare var npm$namespace$pTime: {
        
        log: typeof pTime$log,
      }
declare var pTime$log: typeof pTime;

declare type pTime$PromiseWithTime<T> = {
time?: number
} & Promise<T>

    }
