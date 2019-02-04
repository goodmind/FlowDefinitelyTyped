declare module 'minipass' {
        import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof MiniPass

	declare class MiniPass mixins EventEmitter, NodeJS.WritableStream {
bufferLength: number;
flowing: boolean;
emittedEnd: boolean;
encoding: string | null;
readable: boolean;
writable: boolean;
pipes: any;
buffer: any;
constructor(options?: MiniPass$MiniPass$Options): this;
setEncoding(encoding: string | null): void;
read(size?: number): any;
write(chunk: any, cb?: () => void): boolean;
write(chunk: any, encoding?: string | null, cb?: () => void): boolean;
end(cb?: () => void): void;
end(chunk: any, cb?: () => void): void;
end(chunk: any, encoding?: string | null, cb?: () => void): void;
resume(): void;
pause(): void;
pipe<T: NodeJS.WritableStream>(destination: T, options?: {
end?: boolean
}): T;
addEventHandler(event: string, listener: (...args: any[]) => void): this;
addEventHandler(event: "data", listener: (chunk: any) => void): this;
addEventHandler(
event: "readable"
| "drain"
| "resume"
| "end"
| "prefinish"
| "finish"
| "close",
listener: () => void): this;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "data", listener: (chunk: any) => void): this;
on(
event: "readable"
| "drain"
| "resume"
| "end"
| "prefinish"
| "finish"
| "close",
listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "data", listener: (chunk: any) => void): this;
once(
event: "readable"
| "drain"
| "resume"
| "end"
| "prefinish"
| "finish"
| "close",
listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "data", listener: (chunk: any) => void): this;
prependListener(
event: "readable"
| "drain"
| "resume"
| "end"
| "prefinish"
| "finish"
| "close",
listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "data", listener: (chunk: any) => void): this;
prependOnceListener(
event: "readable"
| "drain"
| "resume"
| "end"
| "prefinish"
| "finish"
| "close",
listener: () => void): this;
removeListener(event: string, listener: (...args: any[]) => void): this;
removeListener(event: "data", listener: (chunk: any) => void): this;
removeListener(
event: "readable"
| "drain"
| "resume"
| "end"
| "prefinish"
| "finish"
| "close",
listener: () => void): this;
emit(event: string, ...args: any[]): boolean;
emit(event: "data", chunk: any): boolean;
emit(
event: "readable"
| "drain"
| "resume"
| "end"
| "prefinish"
| "finish"
| "close"): boolean
}
	declare interface MiniPass$Options {
objectMode?: boolean,
encoding?: string | null
} 
    }
