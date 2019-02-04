declare module 'electron-unhandled' {
        declare interface unhandled$Options {
logger?: (err: Error) => void,
showDialog?: boolean
} 
	declare function unhandled(options?: unhandled$unhandled$Options): void

	declare module.exports: typeof unhandled

    }
