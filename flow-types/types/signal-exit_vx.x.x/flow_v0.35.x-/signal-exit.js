declare module 'signal-exit' {
        declare module.exports: typeof signalExit

	declare function signalExit(
callback: (code: number | null, signal: signalExit$signalExit$Signal | null) => void,
options?: signalExit$signalExit$Options): () => void

	
      declare var npm$namespace$signalExit: {
        load: typeof signalExit$load,
unload: typeof signalExit$unload,
signals: typeof signalExit$signals,
        
      }
declare function signalExit$load(): void


declare function signalExit$unload(): void


declare function signalExit$signals(): signalExit$Signal[]


declare type signalExit$Signal = "SIGABRT"
| "SIGALRM"
| "SIGHUP"
| "SIGINT"
| "SIGTERM"
| string;

declare interface signalExit$Options {
alwaysLast?: boolean
} 
    }
