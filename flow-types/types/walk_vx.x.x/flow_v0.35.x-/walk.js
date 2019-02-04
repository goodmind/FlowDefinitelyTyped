declare module 'walk' {
        import type {
          Stats
        } from 'fs';

	declare export type WalkStats = {
name: string,
type: "file"
| "directory"
| "symbolicLink"
| "blockDevice"
| "characterDevice"
| "FIFO"
| "socket",
error?: NodeJS.ErrnoException
} & Stats

	declare export interface WalkOptionsListeners {
names?: WalkNamesEventCallback,
files?: WalkStatArrayEventCallback,
file?: WalkStatEventCallback,
directories?: WalkStatArrayEventCallback,
directory?: WalkStatEventCallback,
end?: WalkStatArrayEventCallback,
errors?: WalkStatArrayEventCallback,
nodeError?: WalkStatArrayEventCallback,
directoryError?: WalkStatArrayEventCallback
} 
	declare export interface WalkOptions {
followLinks?: boolean,
filters?: string[],
listeners?: WalkOptionsListeners
} 
	declare export type WalkNext = () => void;
	declare export type WalkStatEventCallback = (base: string, names: WalkStats, next: WalkNext) => void;
	declare export type WalkStatArrayEventCallback = (base: string, names: WalkStats[], next: WalkNext) => void;
	declare export type WalkNamesEventCallback = (base: string, names: string[], next: WalkNext) => void;
	declare export type WalkStatArrayEvent = "files"
| "directories"
| "errors"
| "nodeError"
| "directoryError";
	declare export type WalkStatEvent = "file" | "directory";
	declare export interface Walker {
on(event: "names", cb: WalkNamesEventCallback): void,
on(event: WalkStatArrayEvent, cb: WalkStatArrayEventCallback): void,
on(event: WalkStatEvent, cb: WalkStatEventCallback): void,
on(event: "end", cb: () => void): void,
pause(): void,
resume(): void
} 
	declare export function walk(path: string, options?: WalkOptions): Walker

	declare export function walkSync(path: string, options?: WalkOptions): Walker

    }
