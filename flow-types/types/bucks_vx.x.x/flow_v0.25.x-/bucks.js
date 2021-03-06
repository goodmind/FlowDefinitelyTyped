declare module "bucks" {
  declare interface Bucks$BucksStatic {
    /**
     * bucks.js version.
     */
    VERSION: string;

    /**
     * If set `true`, uncaught errors are logged.
     */
    DEBUG: boolean;

    /**
     * Running bucks objects.
     */
    running: Bucks$Bucks[];

    /**
     * Not yet called `end` bucks object.
     */
    living: Bucks$Bucks[];

    /**
     * Create bucks object.
     */
    new(): Bucks$Bucks;

    /**
     * Catch all errors.
     * @param onError Function called after catching error
     */
    onError(onError: (err: Error, bucks: Bucks$Bucks) => any): void;
  }

  declare interface Bucks$Bucks {
    /**
     * Add a task.
     * @param task Function added async chain
     */
    add(task: Bucks$TaskWithNext): Bucks$Bucks;

    /**
     * Add a task called only in case of success.
     * @param onSuccess Function called only in case of success
     */
    then(onSuccess: (res: any, next?: Bucks$Task) => any): Bucks$Bucks;

    /**
     * Add a empty task.
     */
    empty(): Bucks$Bucks;

    /**
     * Add a task called only in case of error.
     * @param onError Function called only in case of error
     */
    error(onError: (err: Error, next?: Bucks$Task) => any): Bucks$Bucks;

    /**
     * Add tasks in asynchronous way and join their results.
     * @param tasks Functions called in asynchronous way and join their results
     */
    parallel(tasks: Bucks$TaskWithNext[]): Bucks$Bucks;

    /**
     * Add tasks in asynchronous way and join their results.
     * @param tasks Functions added async chain
     */
    waterfall(tasks: Bucks$TaskWithNext[]): Bucks$Bucks;

    /**
     * Add delay execution.
     * @param ms number millisecond for delaying
     */
    delay(ms: number): Bucks$Bucks;

    /**
     * Called when destroy async chain.
     */
    dispose(): void;

    /**
     * Destroy this object and call last callback function.
     * @param err If specify err and no callback, throw to execute failure callback
     */
    destroy(err?: Error): Bucks$Bucks;

    /**
     * Complete creating async chain and start executing.
     * @param callback Last callback function
     * @param errback Handler for occurring error in last callback function
     */
    end(callback?: Bucks$Task, errback?: (err: Error) => any): void;
  }

  declare interface Bucks$TaskWithNext {
    (err?: Error, res?: any, next?: Bucks$Task): any;
  }

  declare interface Bucks$Task {
    (err?: Error, res?: any): any;
  }
  declare var Bucks$Bucks: Bucks$Bucks.Bucks$BucksStatic;
}
