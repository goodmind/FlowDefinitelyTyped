declare module "promise-pool" {
  import typeof * as Q from "q";

  /**
   * interface for the final result.
   */
  declare export interface IResult {
    fulfilled: number;
    rejected: number;
    total: number;
  }

  /**
   * interface for progress data.
   */
  declare export interface IProgress {
    index: number;
    success: boolean;
    error: any;
    retries: number;
    fulfilled: number;
    rejected: number;
    pending: number;
    total: number;
  }

  /**
   * tasks pool that manages concurrency.
   */
  declare export class Pool<T> {
    /**
     * (get/set) the max concurrency of this task pool.
     */
    concurrency: number;

    /**
     * (get/set) the processor function that handles tasks data.
     */
    processor: (data: T, index: number) => Q.IPromise<void>;

    /**
     * (get) the number of successful tasks.
     */
    fulfilled: number;

    /**
     * (get) the number of failed tasks.
     */
    rejected: number;

    /**
     * (get) the number of pending tasks.
     */
    pending: number;

    /**
     * (get) the number of completed tasks and pending tasks in total.
     */
    total: number;

    /**
     * (get/set) indicates whether this task pool is endless, if so, tasks can still be added even after all previous tasks have been fulfilled.
     */
    endless: boolean;

    /**
     * (get/set) defaults to 0, the number or retries that this task pool will take for every single task, could be Infinity.
     */
    retries: number;

    /**
     * (get/set) defaults to 0, interval (milliseconds) between each retries.
     */
    retryInterval: number;

    /**
     * (get/set) defaults to Infinity, max retry interval when retry interval multiplier applied.
     */
    maxRetryInterval: number;

    /**
     * (get/set) defaults to 1, the multiplier applies to interval after every retry.
     */
    retryIntervalMultiplier: number;
    onProgress: (progress: IProgress) => void;

    /**
     * initialize a task pool.
     * @param processor a function takes the data and index as parameters and returns a promise.
     * @param concurrency the concurrency of this task pool.
     * @param endless defaults to false. indicates whether this task pool is endless, if so, tasks can still be added even after all previous tasks have been fulfilled.
     * @param tasksData an initializing array of task data.
     */
    constructor(
      processor: (data: T, index: number) => Q.IPromise<void>,
      concurrency: number,
      endless?: boolean,
      tasksData?: T[]
    ): this;

    /**
     * add a data item.
     * @param taskData task data to add.
     */
    add(taskData: T): void;

    /**
     * add data items.
     * @param tasskData tasks data to add.
     */
    add(tasksData: T[]): void;

    /**
     * start tasks, return a promise that will be fulfilled after all tasks accomplish if endless is false.
     * @param onProgress a callback that will be triggered every time when a single task is fulfilled.
     */
    start(onProgress?: (progress: IProgress) => void): Q.Promise<IResult>;

    /**
     * pause tasks and return a promise that will be fulfilled after the running tasks accomplish. this will wait for running tasks to complete instead of aborting them.
     */
    pause(): Q.Promise<void>;

    /**
     * resume tasks.
     */
    resume(): void;

    /**
     * pause tasks, then clear pending tasks data and reset counters. return a promise that will be fulfilled after resetting accomplish.
     */
    reset(): Q.Promise<void>;
  }
}
