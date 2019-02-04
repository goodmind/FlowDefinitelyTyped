declare module 'webpackbar' {
        import type {
          Plugin
        } from 'webpack';

	declare module.exports: typeof WebpackBar

	declare class WebpackBar mixins Plugin {
constructor(options?: WebpackBar$WebpackBar$Options): this;
state: WebpackBar$WebpackBar$State
}
	declare interface WebpackBar$Stats {
count: number,
time: [number, number]
} 

declare class WebpackBar$Profile  {
requests: any[];
name: string;
constructor(name: string): this;
getStats(): {
ext: WebpackBar$Stats,
loader: WebpackBar$Stats
}
}

declare interface WebpackBar$State {
isRunning: boolean,
color: string,
profile: WebpackBar$Profile | null
} 

declare interface WebpackBar$SharedState {
[name: string]: WebpackBar$State
} 

declare interface WebpackBar$Options {

/**
 * Display name
 */
name?: string,

/**
 * Color output of the progress bar
 */
color?: string,

/**
 * Enable the profiler for files and loaders
 */
profile?: boolean,

/**
 * Stream to rwite to
 */
stream?: NodeJS.WriteStream,

/**
 * Minimal output
 */
minimal?: boolean,

/**
 * Show compiled in time
 */
compiledIn?: boolean,

/**
 * Function called when all builds are finished
 */
done?: (sharedState: WebpackBar$SharedState, ctx: WebpackBar) => void
} 
    }
