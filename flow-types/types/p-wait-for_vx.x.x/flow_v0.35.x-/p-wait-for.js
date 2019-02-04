declare module 'p-wait-for' {
        declare module.exports: typeof pWaitFor

	declare function pWaitFor(
condition: () => PromiseLike<boolean> | boolean,
options?: pWaitFor$pWaitFor$Options): Promise<void>

	declare interface pWaitFor$Options {
interval?: number,
timeout?: number
} 
    }
