declare module 'opener' {
        import type {
          ChildProcess
        } from 'child_process';

	declare type Callback = (error: Error, stdout: string, stderr: string) => void;
	declare function opener(args: string | string[], options?: {}, callback?: Callback): ChildProcess

	declare module.exports: typeof opener

    }
