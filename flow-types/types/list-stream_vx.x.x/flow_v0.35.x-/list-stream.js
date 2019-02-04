declare module 'list-stream' {
        import type {
          Duplex,DuplexOptions
        } from 'stream';

	declare interface ListStreamMethod {
(callback?: (err: Error, data: any[]) => void): ListStream,
(options?: DuplexOptions, callback?: (err: Error, data: any[]) => void): ListStream
} 
	declare type ListStreamConstructor = {
new (callback?: (err: Error, data: any[]) => void): ListStream,
new (
options?: DuplexOptions,
callback?: (err: Error, data: any[]) => void): ListStream,
obj: ListStreamMethod
} & ListStreamMethod

	declare var ListStream: ListStreamConstructor;
	declare type ListStream = {
append(chunk: any): void,
duplicate(): ListStream,
end(): void,
get(index: number): any,
length: number
} & Duplex

	declare module.exports: typeof ListStream

    }
