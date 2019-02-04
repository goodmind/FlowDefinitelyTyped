declare module 'p-min-delay' {
        declare module.exports: typeof pMinDelay

	declare function pMinDelay<T>(
input: PromiseLike<T>,
minimumDelay: number,
options?: pMinDelay$pMinDelay$Options): Promise<T>

	declare interface pMinDelay$Options {
delayRejection?: boolean
} 
    }
