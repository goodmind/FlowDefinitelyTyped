declare module 'chromedriver' {
        import type {
          ChildProcess
        } from 'child_process';

	declare export var path: string;
	declare export var version: string;
	declare export function start(args?: $ReadOnlyArray<string>): ChildProcess

	declare export function stop(): void

	declare export var defaultInstance: ChildProcess | void;
    }
