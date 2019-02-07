declare module "watchpack" {
  import type { EventEmitter } from "events";

  declare class Watchpack mixins EventEmitter {
    aggregatedChanges: string[];
    aggregateTimeout: NodeJS.Timer;
    dirWatchers: Watcher[];
    fileWatchers: Watcher[];
    mtimes: {
      [path: string]: number
    };
    options: Watchpack$Watchpack$WatchOptions;
    paused: boolean;
    watcherOptions: Watchpack$Watchpack$WatcherOptions;
    constructor(options: Watchpack$Watchpack$WatchOptions): this;
    watch(files: string[], directories: string[], startTime?: number): void;
    close(): void;
    pause(): void;
    getTimes(): {
      [path: string]: number
    };
    _fileWatcher(file: string, watcher: Watcher): Watcher;
    _dirWatcher(item: string, watcher: Watcher): Watcher;
    _onChange(item: string, mtime: number, file?: string): void;
    _onTimeout(): void;
  }
  declare interface Watchpack$WatcherOptions {
    ignored?: string[] | string | RegExp | ((path: string) => boolean);
    poll?: boolean | number;
  }

  declare type Watchpack$WatchOptions = {
    aggregateTimeout?: number
  } & Watchpack$WatcherOptions;

  declare module.exports: typeof Watchpack;
}
