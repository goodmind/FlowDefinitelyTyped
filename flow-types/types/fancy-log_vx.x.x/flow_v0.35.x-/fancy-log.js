declare module 'fancy-log' {
        declare interface FancyLog$Logger {
(...args: any[]): FancyLog$Logger,
dir(...args: any[]): FancyLog$Logger,
error(...args: any[]): FancyLog$Logger,
info(...args: any[]): FancyLog$Logger,
warn(...args: any[]): FancyLog$Logger
} 
	declare var logger: FancyLog$FancyLog$Logger;
	declare module.exports: typeof logger

    }
