declare module 'klaw' {
        import typeof * as fs from 'fs';

	import type {
          Readable,ReadableOptions
        } from 'stream';

	declare function K(root: string, options?: K$K$Options): K$K$Walker

	declare interface K$Item {
path: string,
stats: fs.Stats
} 

declare type K$QueueMethod = "shift" | "pop";

declare type K$Options = {
queueMethod?: K$QueueMethod,
pathSorter?: (pathA: string, pathB: string) => number,
fs?: any,
filter?: (path: string) => boolean,
depthLimit?: number
} & ReadableOptions


declare type K$Event = "close"
| "data"
| "end"
| "readable"
| "error";

declare type K$Walker = {
on(event: K$Event, listener: Function): this,
on(event: "close", listener: () => void): this,
on(event: "data", listener: (item: K$Item) => void): this,
on(event: "end", listener: () => void): this,
on(event: "readable", listener: () => void): this,
on(event: "error", listener: (err: Error) => void): this,
read(): K$Item
} & Readable

	declare module.exports: typeof K

    }
