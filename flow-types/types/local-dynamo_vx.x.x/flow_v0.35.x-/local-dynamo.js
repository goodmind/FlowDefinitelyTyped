declare module 'local-dynamo' {
        import type {
          ChildProcess
        } from 'child_process';

	declare export interface Options {
port: number,
dir?: string,
heap?: string,
detached?: boolean,
stdio?: string,
cors?: string | string[],
sharedDb?: boolean
} 
	declare export function launch(options?: Options | string, port?: number): ChildProcess

    }
