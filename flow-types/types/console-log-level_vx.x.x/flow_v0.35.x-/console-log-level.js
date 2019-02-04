declare module 'console-log-level' {
        declare type PrefixFunction = (level: string) => string;
	declare type consoleLogLevel$LogLevelNames = "trace"
| "debug"
| "info"
| "warn"
| "error"
| "fatal";

declare type consoleLogLevel$Logger = Record<consoleLogLevel$LogLevelNames, (...args: any[]) => void>;
	declare interface Options {
level?: consoleLogLevel$consoleLogLevel$LogLevelNames,
prefix?: string | PrefixFunction,
stderr?: boolean
} 
	declare function consoleLogLevel(opts: Options): consoleLogLevel$consoleLogLevel$Logger

	declare module.exports: typeof consoleLogLevel

    }
