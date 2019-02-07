declare module "fsevents" {
  import type { EventEmitter } from "events";

  declare module.exports: typeof fsevents;

  declare function fsevents(path: string): fsevents$fsevents$Watcher;

  declare var npm$namespace$fsevents: {
    getInfo: typeof fsevents$getInfo,
    Constants: typeof fsevents$Constants
  };
  declare function fsevents$getInfo(
    path: string,
    flags: number
  ): fsevents$BaseEventInfo<fsevents$BaseEventType | "moved">;

  declare class fsevents$FSEvents {
    constructor(
      path: string,
      handler: (path: string, flags: number, id: number) => void
    ): this;
    start(): this;
    stop(): this;
  }

  declare var fsevents$Constants: {
    kFSEventStreamEventFlagNone: 0,
    kFSEventStreamEventFlagMustScanSubDirs: 1,
    kFSEventStreamEventFlagUserDropped: 2,
    kFSEventStreamEventFlagKernelDropped: 4,
    kFSEventStreamEventFlagEventIdsWrapped: 8,
    kFSEventStreamEventFlagHistoryDone: 16,
    kFSEventStreamEventFlagRootChanged: 32,
    kFSEventStreamEventFlagMount: 64,
    kFSEventStreamEventFlagUnmount: 128,
    kFSEventStreamEventFlagItemCreated: 256,
    kFSEventStreamEventFlagItemRemoved: 512,
    kFSEventStreamEventFlagItemInodeMetaMod: 1024,
    kFSEventStreamEventFlagItemRenamed: 2048,
    kFSEventStreamEventFlagItemModified: 4096,
    kFSEventStreamEventFlagItemFinderInfoMod: 8192,
    kFSEventStreamEventFlagItemChangeOwner: 16384,
    kFSEventStreamEventFlagItemXattrMod: 32768,
    kFSEventStreamEventFlagItemIsFile: 65536,
    kFSEventStreamEventFlagItemIsDir: 131072,
    kFSEventStreamEventFlagItemIsSymlink: 262144
  };

  declare type fsevents$Watcher = {
    start(): this,
    stop(): this,
    addListener(
      event: "fsevent",
      listener: (path: string, flags: number, id: number) => void
    ): this,
    addListener(
      event: fsevents$EventType | "change",
      listener: (path: string, info: fsevents$EventInfo) => void
    ): this,
    on(
      event: "fsevent",
      listener: (path: string, flags: number, id: number) => void
    ): this,
    on(
      event: fsevents$EventType | "change",
      listener: (path: string, info: fsevents$EventInfo) => void
    ): this,
    once(
      event: "fsevent",
      listener: (path: string, flags: number, id: number) => void
    ): this,
    once(
      event: fsevents$EventType | "change",
      listener: (path: string, info: fsevents$EventInfo) => void
    ): this,
    prependListener(
      event: "fsevent",
      listener: (path: string, flags: number, id: number) => void
    ): this,
    prependListener(
      event: fsevents$EventType | "change",
      listener: (path: string, info: fsevents$EventInfo) => void
    ): this,
    prependOnceListener(
      event: "fsevent",
      listener: (path: string, flags: number, id: number) => void
    ): this,
    prependOnceListener(
      event: fsevents$EventType | "change",
      listener: (path: string, info: fsevents$EventInfo) => void
    ): this,
    removeListener(
      event: "fsevent",
      listener: (path: string, flags: number, id: number) => void
    ): this,
    removeListener(
      event: fsevents$EventType | "change",
      listener: (path: string, info: fsevents$EventInfo) => void
    ): this,
    removeAllListeners(event?: fsevents$EventType | "change" | "fsevent"): this,
    listeners(event: fsevents$EventType | "change" | "fsevent"): Function[],
    emit(event: "fsevent", path: string, flags: number, id: number): boolean,
    emit(
      event: fsevents$EventType | "change",
      path: string,
      info: fsevents$EventInfo
    ): boolean,
    eventNames(): Array<fsevents$EventType | "change" | "fsevent">,
    listenerCount(type: fsevents$EventType | "change" | "fsevent"): number
  } & EventEmitter;

  declare type fsevents$EventType =
    | "moved-out"
    | "moved-in"
    | fsevents$BaseEventType;

  declare type fsevents$EventInfo = {
    id: number
  } & fsevents$BaseEventInfo<fsevents$EventType>;

  declare type fsevents$BaseEventType =
    | "created"
    | "deleted"
    | "modified"
    | "root-changed"
    | "unknown";

  declare interface fsevents$BaseEventInfo<E: string> {
    event: E;
    path: string;
    type: "file" | "directory" | "symlink";
    changes: {
      inode: boolean,
      finder: boolean,
      access: boolean,
      xattrs: boolean
    };
    flags: number;
  }
}
