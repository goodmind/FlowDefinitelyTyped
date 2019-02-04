declare module 'sequencify' {
        declare module.exports: typeof sequencify

	declare interface sequencify$Task {
name: string,
dep: string[]
} 

declare interface sequencify$TaskMap {
[name: string]: sequencify$Task
} 
	declare function sequencify<T: sequencify$sequencify$TaskMap>(
tasks: T,
names: Array<$Keys<T>>,
results: Array<$Keys<T>>,
nest?: string[]): void

    }
