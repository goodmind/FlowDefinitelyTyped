declare module 'fb-watchman' {
        import type {
          EventEmitter
        } from 'events';

	declare export type UnilateralTags = "unilateralTags" | "log";
	declare export interface ClientOptions {

/**
 * Absolute path to the watchman binary.
 * If not provided, the Client locates the binary using the PATH specified
 * by the node child_process's default env.
 */
watchmanBinaryPath?: string
} 
	declare export interface Capabilities {
optional: any[],
required: any[]
} 
	declare export type doneCallback = (error?: Error | null, resp?: any) => any;
	declare export class Client mixins EventEmitter {
constructor(options?: ClientOptions): this;
sendNextCommand(): void;
cancelCommands(why: string): void;
connect(): void;
command(args: any, done: doneCallback): void;
capabilityCheck(caps: Capabilities, done: doneCallback): void;
end(): void
}
    }
