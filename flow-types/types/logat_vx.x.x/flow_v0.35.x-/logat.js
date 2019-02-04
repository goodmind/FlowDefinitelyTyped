declare module 'logat' {
        declare interface LogOptionsI {
logLevel?: number,
logMethod?: number,
logFileName?: string
} 
	declare type Logger = {
error(...args: any[]): void,
warn(...args: any[]): void,
info(...args: any[]): void,
debug(...args: any[]): void,
getOptions(): LogOptionsI,
setOptions(options: LogOptionsI): void
} & NodeJS.EventEmitter

	declare var logger: Logger;
	declare module.exports: typeof logger

    }
