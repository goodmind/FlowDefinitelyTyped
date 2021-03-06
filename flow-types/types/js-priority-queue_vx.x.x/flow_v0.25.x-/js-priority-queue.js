declare module "js-priority-queue" {
  declare class AbstractPriorityQueue<T> {
    /**
     * Returns the number of elements in the queue
     */
    length: number;

    /**
     * Creates a priority queue
     */
    constructor(
      options?: PriorityQueue$PriorityQueue$PriorityQueueOptions<T>
    ): this;

    /**
     * Inserts a new value in the queue
     */
    queue(value: T): void;

    /**
     * Returns the smallest item in the queue and leaves the queue unchanged
     */
    peek(): T;

    /**
     * Returns the smallest item in the queue and removes it from the queue
     */
    dequeue(): T;

    /**
     * Removes all values from the queue
     */
    clear(): void;
  }
  declare type PriorityQueue$PriorityQueueOptions<T> = {
    /**
     * This is the argument we would pass to Array.prototype.sort
     */
    comparator?: (a: T, b: T) => number,

    /**
     * You can also pass initial values, in any order.
     * With lots of values, it's faster to load them all at once than one at a time.
     */
    initialValues?: T[],

    /**
     * According to JsPerf, the fastest strategy for most cases is BinaryHeapStrategy.
     * Only use ArrayStrategy only if you're queuing items in a very particular order.
     * Don't use BHeapStrategy, except as a lesson in how sometimes miracles in one programming language aren't great in other languages.
     */
    strategy?: typeof AbstractPriorityQueue
  };

  declare class PriorityQueue$ArrayStrategy<T>
    mixins AbstractPriorityQueue<T> {}

  declare class PriorityQueue$BinaryHeapStrategy<T>
    mixins AbstractPriorityQueue<T> {}

  declare class PriorityQueue$BHeapStrategy<T>
    mixins AbstractPriorityQueue<T> {}
  declare class PriorityQueue<T> mixins AbstractPriorityQueue<T> {}
  declare module.exports: typeof PriorityQueue;
}
