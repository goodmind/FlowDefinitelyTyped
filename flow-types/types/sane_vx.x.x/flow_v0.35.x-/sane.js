declare module 'sane' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          Stats
        } from 'fs';

	declare module.exports: typeof sane

	declare function sane(dir: string, options?: sane$sane$Options): sane$sane$Watcher

	
      declare var npm$namespace$sane: {
        
        FSEventsWatcher: typeof sane$FSEventsWatcher,
NodeWatcher: typeof sane$NodeWatcher,
PollWatcher: typeof sane$PollWatcher,
WatchmanWatcher: typeof sane$WatchmanWatcher,
      }
declare interface sane$Options {
glob?: string | string[],
poll?: boolean,
watchman?: boolean,
fsevents?: boolean,
watcher?: string,
dot?: boolean,
ignored?: sane$AnymatchMatcher | sane$AnymatchMatcher[]
} 

declare var sane$FSEventsWatcher: typeof SaneWatcher;

declare var sane$NodeWatcher: typeof SaneWatcher;

declare var sane$PollWatcher: typeof SaneWatcher;

declare var sane$WatchmanWatcher: typeof SaneWatcher;

declare type sane$Watcher = SaneWatcher;

declare type sane$AnymatchMatcher = string | RegExp | ((...testStrings: string[]) => boolean);
	declare class SaneWatcher mixins EventEmitter {
globs: string[];
dot: boolean;
ignored: sane$sane$AnymatchMatcher | sane$sane$AnymatchMatcher[];
hasIgnore: boolean;
root: string;
constructor(dir: string, options?: sane$sane$Options): this;
close(callback?: () => void): void;
addListener(event: "ready", listener: () => void): this;
addListener(event: "error", listener: (error: Error) => void): this;
addListener(
event: "all",
listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void): this;
addListener(
event: "add" | "change",
listener: (path: string, root: string, stat: Stats) => void): this;
addListener(event: "delete", listener: (path: string, root: string) => void): this;
on(event: "ready", listener: () => void): this;
on(event: "error", listener: (error: Error) => void): this;
on(
event: "all",
listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void): this;
on(
event: "add" | "change",
listener: (path: string, root: string, stat: Stats) => void): this;
on(event: "delete", listener: (path: string, root: string) => void): this;
once(event: "ready", listener: () => void): this;
once(event: "error", listener: (error: Error) => void): this;
once(
event: "all",
listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void): this;
once(
event: "add" | "change",
listener: (path: string, root: string, stat: Stats) => void): this;
once(event: "delete", listener: (path: string, root: string) => void): this;
prependListener(event: "ready", listener: () => void): this;
prependListener(event: "error", listener: (error: Error) => void): this;
prependListener(
event: "all",
listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void): this;
prependListener(
event: "add" | "change",
listener: (path: string, root: string, stat: Stats) => void): this;
prependListener(event: "delete", listener: (path: string, root: string) => void): this;
prependOnceListener(event: "ready", listener: () => void): this;
prependOnceListener(event: "error", listener: (error: Error) => void): this;
prependOnceListener(
event: "all",
listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void): this;
prependOnceListener(
event: "add" | "change",
listener: (path: string, root: string, stat: Stats) => void): this;
prependOnceListener(event: "delete", listener: (path: string, root: string) => void): this;
removeListener(event: "ready", listener: () => void): this;
removeListener(event: "error", listener: (error: Error) => void): this;
removeListener(
event: "all",
listener: (eventType: AllEventType, path: string, root: string, stat?: Stats) => void): this;
removeListener(
event: "add" | "change",
listener: (path: string, root: string, stat: Stats) => void): this;
removeListener(event: "delete", listener: (path: string, root: string) => void): this;
removeAllListeners(event?: EventType): this;
listeners(event: EventType): Function[];
emit(event: "ready"): boolean;
emit(event: "error", error: Error): boolean;
emit(
event: "all",
eventType: AllEventType,
path: string,
root: string,
stat?: Stats): boolean;
emit(event: "add" | "change", path: string, root: string, stat: Stats): boolean;
emit(event: "delete", path: string, root: string): boolean;
eventNames(): EventType[];
listenerCount(type: EventType): number
}
	declare type EventType = "ready" | "error" | "all" | AllEventType;
	declare type AllEventType = "add" | "change" | "delete";
    }
