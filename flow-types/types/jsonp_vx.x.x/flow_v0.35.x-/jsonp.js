declare module 'jsonp' {
        declare module.exports: typeof jsonp

	declare function jsonp(url: string, options?: Options, cb?: RequestCallback): CancelFn

	declare function jsonp(url: string, callback?: RequestCallback): CancelFn

	declare type CancelFn = () => void;
	declare type RequestCallback = (error: Error | null, data: any) => void;
	declare interface Options {
param?: string,
prefix?: string,
name?: string,
timeout?: number
} 
    }
