declare module 'watch' {
        declare export type FileOrFiles = fs.Stats | {
[key: string]: fs.Stats
};
	declare export type Monitor = {
files: {
[key: string]: fs.Stats
},
on(
event: "created" | "removed",
listener: (f: FileOrFiles, stat: fs.Stats) => void): this,
on(
event: "changed",
listener: (f: FileOrFiles, current: fs.Stats, prev: fs.Stats) => void): this,
on(event: string | Symbol, listener: (...args: any[]) => void): this,
stop(): void
} & events.EventEmitter

	declare export interface Options {
ignoreDotFiles?: boolean,
filter(path: string, stat: fs.Stats): boolean,
interval?: number,
ignoreUnreadableDir?: boolean,
ignoreNotPermitted?: boolean,
ignoreDirectoryPattern?: boolean
} 
	declare export function watchTree(
root: string,
callback: (f: FileOrFiles, curr: fs.Stats, prev: fs.Stats) => void): void

	declare export function watchTree(
root: string,
options: Options,
callback: (f: FileOrFiles, curr: fs.Stats, prev: fs.Stats) => void): void

	declare export function unwatchTree(root: string): void

	declare export function createMonitor(root: string, callback: (monitor: Monitor) => void): void

	declare export function createMonitor(root: string, options: Options, callback: (monitor: Monitor) => void): void

    }
