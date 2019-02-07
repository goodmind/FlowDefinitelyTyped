declare module "generic-pool" {
  import type { EventEmitter } from "events";

  declare export class Pool<T> mixins EventEmitter {
    spareResourceCapacity: number;
    size: number;
    available: number;
    borrowed: number;
    pending: number;
    max: number;
    min: number;
    start(): void;
    acquire(priority?: number): PromiseLike<T>;
    release(resource: T): PromiseLike<void>;
    destroy(resource: T): PromiseLike<void>;
    drain(): PromiseLike<void>;
    clear(): PromiseLike<void>;
    use<U>(cb: (resource: T) => U | PromiseLike<U>): PromiseLike<U>;
    isBorrowedResource(resource: T): boolean;
  }
  declare export interface Factory<T> {
    create(): PromiseLike<T>;
    destroy(client: T): PromiseLike<void>;
    validate?: (client: T) => PromiseLike<boolean>;
  }
  declare export interface Options {
    max?: number;
    min?: number;
    maxWaitingClients?: number;
    testOnBorrow?: boolean;
    acquireTimeoutMillis?: number;
    fifo?: boolean;
    priorityRange?: number;
    autostart?: boolean;
    evictionRunIntervalMillis?: number;
    numTestsPerEvictionRun?: number;
    softIdleTimeoutMillis?: number;
    idleTimeoutMillis?: number;
  }
  declare export function createPool<T>(
    factory: Factory<T>,
    opts?: Options
  ): Pool<T>;
}
