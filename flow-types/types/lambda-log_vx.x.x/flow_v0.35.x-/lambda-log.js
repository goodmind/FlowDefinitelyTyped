declare module 'lambda-log' {
        import type {
          WriteStream
        } from 'fs';

	import type {
          Console
        } from 'console';

	import type {
          EventEmitter
        } from 'events';

	declare export interface LogRecordOptions {
level: string,
msg: string,
meta?: any,
tags?: string[]
} 
	declare export interface LogRecord {
msg: string,
meta: any,
_logLevel: string,
_tags: string[]
} 
	declare export class LogMessage  {
level: string;
msg: string;
meta: any;
constructor(logRecordOptions: LogRecordOptions, opts: LambdaLogOptions): this;
value: LogRecord;
log: LogRecord;
throw: void;
toJSON(format?: number): string;
static isError(val: any): boolean
}
	declare export interface LambdaLogOptions {
meta?: any,
tags?: string[],
dynamicMeta?: (message: LogMessage) => any,
debug?: boolean,
dev?: boolean,
silent?: boolean,
replacer?: (key: string, value: any) => any,
stdoutStream?: WriteStream,
stderrStream?: WriteStream
} 
	declare export interface LogLevels {
info: "info",
warn: "warn",
error: "error",
debug: "log" | false,
[key: string]: any
} 
	declare export class LambdaLog mixins EventEmitter {
LambdaLog: LambdaLog;
options: LambdaLogOptions;
console: Console;
[key: string]: any;
constructor(options?: LambdaLogOptions, levels?: any): this;
log(level: string, msg: string, meta: {[key: string]: any}, tags: string[]): string;
assert(
test: any,
msg: string,
meta: {[key: string]: any},
tags: string[]): boolean | string
}
    }
