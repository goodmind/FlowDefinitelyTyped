declare module 'slocket' {
        import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof slocket

	declare var slocket: slocket$Slocket;
	declare interface Slocket {
(lockFile: string, cb?: (error: Error | null, lock: slocket$slocket$Lock) => void): slocket$slocket$Slocket,
new (
lockFile: string,
cb?: (error: Error | null, lock: slocket$slocket$Lock) => void): slocket$slocket$Slocket
} 
	declare type slocket$Slocket = {
then<TResult1= slocket$Lock, TResult2= empty>(
onfulfilled?: ((value: slocket$Lock) => TResult1 | PromiseLike<TResult1>) | null,
onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>,
catch<TResult= empty>(
onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<slocket$Lock | TResult>
} & EventEmitter


declare interface slocket$Lock {
release(sync?: boolean): void
} 
    }
