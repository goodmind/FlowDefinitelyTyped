declare module "better-queue" {
  declare class BetterQueue<T = any, K = any> mixins NodeJS.EventEmitter {
    constructor(options: BetterQueue$BetterQueue$QueueOptions<T, K>): this;
    constructor(
      process: BetterQueue$BetterQueue$ProcessFunction<T, K>,
      options?: $Shape<BetterQueue$BetterQueue$QueueOptions<T, K>>
    ): this;
    push(
      task: T,
      cb?: (err: any, result: K) => void
    ): BetterQueue$BetterQueue$Ticket;
    cancel(taskId: any, cb?: () => void): void;
    pause(): void;
    resume(): void;
    destroy(cb: () => void): void;
    use(store: BetterQueue$BetterQueue$Store<T>): void;
    getStats(): BetterQueue$BetterQueue$QueueStats;
    resetStats(): void;
    on(event: "task_finish", listener: (taskId: any, result: K) => void): this;
    on(
      event: "task_failed",
      listener: (taskId: any, errorMessage: string) => void
    ): this;
    on(
      event: "task_progress",
      listener: (taskId: any, completed: number, total: number) => void
    ): this;
    on(
      event: BetterQueue$BetterQueue$QueueEvent,
      listener: (...args: any[]) => void
    ): this;
  }
  declare interface BetterQueue$QueueOptions<T, K> {
    process: BetterQueue$ProcessFunction<T, K>;
    filter?: (task: T, cb: (error: any, task: T) => void) => void;
    merge?: (
      oldTask: T,
      newTask: T,
      cb: (error: any, mergedTask: T) => void
    ) => void;
    priority?: (task: T, cb: (error: any, priority: number) => void) => void;
    precondition?: (cb: (error: any, passOrFail: boolean) => void) => void;
    id?: $Keys<T> | ((task: T, cb: (error: any, id: $Keys<T>) => void) => void);
    cancelIfRunning?: boolean;
    autoResume?: boolean;
    failTaskOnProcessException?: boolean;
    filo?: boolean;
    batchSize?: number;
    batchDelay?: number;
    batchDelayTimeout?: number;
    concurrent?: number;
    maxTimeout?: number;
    afterProcessDelay?: number;
    maxRetries?: number;
    retryDelay?: number;
    storeMaxRetries?: number;
    storeRetryTimeout?: number;
    preconditionRetryTimeout?: number;
    store?: string | BetterQueue$StoreOptions | BetterQueue$Store<T>;
  }

  declare type BetterQueue$ProcessFunction<T, K> = (
    task: any,
    cb: BetterQueue$ProcessFunctionCb<K>
  ) => void;

  declare type BetterQueue$ProcessFunctionCb<K> = (
    error?: any,
    result?: K
  ) => void;

  declare type BetterQueue$QueueEvent =
    | "task_queued"
    | "task_accepted"
    | "task_started"
    | "task_finish"
    | "task_failed"
    | "task_progress"
    | "batch_finish"
    | "batch_failed"
    | "batch_progress"
    | "error";

  declare type BetterQueue$TicketEvent =
    | "accept"
    | "queued"
    | "started"
    | "progress"
    | "finish"
    | "failed"
    | "error";

  declare interface BetterQueue$Store<T> {
    connect(cb: (error: any, length: number) => void): void;
    getTask(taskId: any, cb: (error: any, task: T) => void): void;
    deleteTask(taskId: any, cb: () => void): void;
    putTask(
      taskId: any,
      task: T,
      priority: number,
      cb: (error: any) => void
    ): void;
    takeFirstN(n: number, cb: (error: any, lockId: string) => void): void;
    takeLastN(n: number, cb: (error: any, lockId: string) => void): void;
    getLock(
      lockId: string,
      cb: (
        error: any,
        tasks: {
          [taskId: string]: T
        }
      ) => void
    ): void;
    releaseLock(lockId: string, cb: (error: any) => void): void;
  }

  declare interface BetterQueue$StoreOptions {
    type: string;
    [key: string]: any;
  }

  declare class BetterQueue$Ticket mixins NodeJS.EventEmitter {
    on(
      event: BetterQueue$TicketEvent,
      listener: (...args: any[]) => void
    ): this;
  }

  declare interface BetterQueue$TickerProgress {
    eta: string;
    pct: number;
    complete: number;
    total: number;
    message: string;
  }

  declare interface BetterQueue$QueueStats {
    total: number;
    average: number;
    successRate: number;
    peak: number;
  }
  declare module.exports: typeof BetterQueue;
}
