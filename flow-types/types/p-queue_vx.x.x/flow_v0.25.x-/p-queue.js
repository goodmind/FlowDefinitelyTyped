declare module "p-queue" {
  declare module.exports: typeof PQueue;

  declare class PQueue<
    O: PQueue$PQueue$QueueAddOptions = PQueue$PQueue$DefaultAddOptions
  > {
    /**
     * Size of the queue.
     */
    size: number;

    /**
     * Number of pending promises.
     */
    pending: number;

    /**
     * Whether the queue is currently paused.
     */
    isPaused: boolean;
    constructor(opts?: PQueue$PQueue$Options<O>): this;

    /**
     * Returns the promise returned by calling fn.
     * @param fn Promise-returning/async function.
     */
    add<T>(fn: PQueue$PQueue$Task<T>, opts?: O): Promise<T>;

    /**
     * Same as .add(), but accepts an array of async functions and
     * returns a promise that resolves when all async functions are resolved.
     * @param fn Array of Promise-returning/async functions.
     */
    addAll<TAll>(
      fns: Array<PQueue$PQueue$Task<TAll>>,
      opts?: O
    ): Promise<TAll[]>;

    /**
     * Returns a promise that settles when the queue becomes empty.
     * Can be called multiple times. Useful if you for example add
     * additional items at a later time.
     */
    onEmpty(): Promise<void>;

    /**
     * Returns a promise that settles when the queue becomes empty, and all
     * promises have completed; queue.size === 0 && queue.pending === 0.
     * The difference with .onEmpty is that .onIdle guarantees that all work
     * from the queue has finished. .onEmpty merely signals that the queue is
     * empty, but it could mean that some promises haven't completed yet.
     */
    onIdle(): Promise<void>;

    /**
     * Start (or resume) executing enqueued tasks within concurrency limit.
     * No need to call this if queue is not paused (via options.autoStart = false
     * or by .pause() method.)
     */
    start(): void;

    /**
     * Clear the queue.
     */
    clear(): void;

    /**
     * Put queue execution on hold.
     */
    pause(): void;
  }
  declare interface PQueue$QueueAddOptions {
    [key: string]: any;
  }

  declare interface PQueue$QueueClassConstructor<O: PQueue$QueueAddOptions> {
    new(): PQueue$QueueClass<O>;
  }

  declare interface PQueue$QueueClass<O: PQueue$QueueAddOptions> {
    size: number;
    enqueue(run: () => void, options?: O): void;
    dequeue(): (() => void) | void;
  }

  declare interface PQueue$Options<O: PQueue$QueueAddOptions> {
    concurrency?: number;
    autoStart?: boolean;
    queueClass?: PQueue$QueueClassConstructor<O>;
    intervalCap?: number;
    interval?: number;
    carryoverConcurrencyCount?: boolean;
  }

  declare interface PQueue$DefaultAddOptions {
    priority?: number;
  }

  declare type PQueue$Task<T> = () => Promise<T>;
}
