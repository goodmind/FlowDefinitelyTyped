declare module "rwlock" {
  declare class ReadWriteGeneric<T> {
    readLock(callback: T, options?: ReadWriteLock$ReadWriteLock$Options): void;
    readLock(
      key: string,
      callback: T,
      options?: ReadWriteLock$ReadWriteLock$Options
    ): void;
    writeLock(callback: T, options?: ReadWriteLock$ReadWriteLock$Options): void;
    writeLock(
      key: string,
      callback: T,
      options?: ReadWriteLock$ReadWriteLock$Options
    ): void;
  }
  declare type ReadWriteLock$Release = () => void;

  declare type ReadWriteLock$Callback = (
    release: ReadWriteLock$Release
  ) => void;

  declare type ReadWriteLock$AsyncCallback = (
    err: Error,
    release: ReadWriteLock$Release
  ) => void;

  declare interface ReadWriteLock$Options {
    scope?: any;
    timeout?: number;
    timeoutCallback?: () => void;
  }
  declare class ReadWriteLock
    mixins ReadWriteGeneric<ReadWriteLock$ReadWriteLock$Callback> {
    constructor(): this;
    async: ReadWriteGeneric<ReadWriteLock$ReadWriteLock$AsyncCallback>;
  }
  declare module.exports: typeof ReadWriteLock;
}
