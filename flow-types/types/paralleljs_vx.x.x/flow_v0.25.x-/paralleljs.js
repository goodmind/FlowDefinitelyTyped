declare interface ParallelOptions {
  /**
   * This is the path to the file eval.js.  This is required when running in node, and required for some browsers (IE 10) in order to work around cross-domain restrictions for web workers.  Defaults to the same location as parallel.js in node environments, and null in the browser.
   */
  evalPath?: string;

  /**
   * The maximum number of permitted worker threads.  This will default to 4, or the number of cpus on your computer if you're running node.
   */
  maxWorkers?: number;

  /**
   * If webworkers are not available, whether or not to fall back to synchronous processing using setTimeout.  Defaults to true.
   */
  synchronous?: boolean;
}
declare class Parallel<T> {
  /**
   * This is the constructor.  Use it to new up any parallel jobs.  The constructor takes an array of data you want to operate on.  This data will be held in memory until you finish your job, and can be accessed via the .data attribute of your job.
   * The object returned by the Parallel constructor is meant to be chained, so you can produce a chain of operations on the provided data.
   * @param data This is the data you wish to operate on.  Will often be an array, but the only restrictions are that your values are serializable as JSON.
   * @param opts Some options for your job.
   */
  constructor(data: T, opts?: ParallelOptions): this;

  /**
   * Data
   */
  data: T;

  /**
   * This function will spawn a new process on a worker thread.  Pass it the function you want to call.  Your function will receive one argument, which is the current data.  The value returned from your spawned function will update the current data.
   * @param fn A function to execute on a worker thread.  Receives the wrapped data as an argument.  The value returned will be assigned to the wrapped data.
   * @return Parallel instance.
   */
  spawn(fn: (data: T) => T): Parallel<T>;

  /**
   * Map will apply the supplied function to every element in the wrapped data.  Parallel will spawn one worker for each array element in the data, or the supplied maxWorkers argument.  The values returned will be stored for further processing.
   * @param fn A function to apply.  Receives the wrapped data as an argument.  The value returned will be assigned to the wrapped data.
   * @return Parallel instance.
   */
  map<N>(fn: (data: N) => N): Parallel<T>;

  /**
   * Reduce applies an operation to every member of the wrapped data, and returns a scalar value produced by the operation.  Use it for combining the results of a map operation, by summing numbers for example.  This takes a reducing function, which gets an argument, data, an array of the stored value, and the current element.
   * @param fn A function to apply.  Receives the stored value and current element as argument.  The value returned will be stored as the current value for the next iteration.  Finally, the current value will be assigned to current data.
   * @return Parallel instance.
   */
  reduce<N>(fn: (data: N[]) => N): Parallel<T>;

  /**
   * The functions given to then are called after the last requested operation has finished.  success receives the resulting data object, while fail will receive an error object.
   * @param success A function that gets called upon successful completion.  Receives the wrapped data as an argument.
   * @param fail A function that gets called if the job fails.  The function is passed an error object.
   * @return Parallel instance.
   */
  then(success: (data: T) => void, fail?: (e: Error) => void): Parallel<T>;

  /**
   * If you have state that you want to share between your main thread and worker threads, this is how.  Require takes either a string or a function.  A string should point to a file name.  NOte that in order to use require with a file name as an argument, you have to provide the evalPath property in the options object.
   * @param state Shared state function or js file.
   * @return Parallel instance.
   */
  require(file: string): Parallel<T>;

  /**
   * @see require
   */
  require(fn: Function): Parallel<T>;
}
declare module "paralleljs" {
  declare module.exports: typeof Parallel;
}
