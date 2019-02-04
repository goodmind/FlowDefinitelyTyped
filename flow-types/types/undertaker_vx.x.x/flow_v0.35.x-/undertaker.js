declare module 'undertaker' {
        import typeof * as Registry from 'undertaker-registry';

	import type {
          Duplex
        } from 'stream';

	import type {
          EventEmitter
        } from 'events';

	declare interface Undertaker$TaskFunctionParams {
name?: string,
displayName?: string,
description?: string
} 

declare type Undertaker$TaskFunction = {
(done: (error?: any) => void): void
| Duplex
| NodeJS.Process
| Promise<empty>
| any
} & Undertaker$TaskFunctionParams


declare type Undertaker$Task = string | Undertaker$TaskFunction;

declare interface Undertaker$TreeOptions {

/**
 * Whether or not the whole tree should be returned.
 * Default: false
 */
deep?: boolean
} 

declare interface Undertaker$TreeResult {
label: "Tasks",
nodes: Undertaker$Node[]
} 

declare interface Undertaker$Node {
label: string,
nodes: Undertaker$Node[],
type?: string,
branch?: boolean
} 
	declare class Undertaker mixins EventEmitter {
constructor(registry?: Registry): this;

/**
 * Returns the registered function.
 * @param taskName - Task name.
 */
task(taskName: string): Undertaker$Undertaker$TaskFunction;

/**
 * Register the task by the taskName.
 * @param taskName - Task name.
 * @param fn - Task function.
 */
task(taskName: string, fn: Undertaker$Undertaker$TaskFunction): void;

/**
 * Register the task by the name property of the function.
 * @param fn - Task function.
 */
task(fn: Undertaker$Undertaker$TaskFunction): void;

/**
 * Takes a variable amount of strings (taskName) and/or functions (fn)
 * and returns a function of the composed tasks or functions.
 * Any taskNames are retrieved from the registry using the get method.
 * 
 * When the returned function is executed, the tasks or functions will be executed in series,
 * each waiting for the prior to finish. If an error occurs, execution will stop.
 * @param tasks - List of tasks.
 */
series(...tasks: Undertaker$Undertaker$Task[]): Undertaker$Undertaker$TaskFunction;

/**
 * Takes a variable amount of strings (taskName) and/or functions (fn)
 * and returns a function of the composed tasks or functions.
 * Any taskNames are retrieved from the registry using the get method.
 * 
 * When the returned function is executed, the tasks or functions will be executed in series,
 * each waiting for the prior to finish. If an error occurs, execution will stop.
 * @param tasks - List of tasks.
 */
series(tasks: Undertaker$Undertaker$Task[]): Undertaker$Undertaker$TaskFunction;

/**
 * Takes a variable amount of strings (taskName) and/or functions (fn)
 * and returns a function of the composed tasks or functions.
 * Any taskNames are retrieved from the registry using the get method.
 * 
 * When the returned function is executed, the tasks or functions will be executed in parallel,
 * all being executed at the same time. If an error occurs, all execution will complete.
 * @param tasks - list of tasks.
 */
parallel(...tasks: Undertaker$Undertaker$Task[]): Undertaker$Undertaker$TaskFunction;

/**
 * Takes a variable amount of strings (taskName) and/or functions (fn)
 * and returns a function of the composed tasks or functions.
 * Any taskNames are retrieved from the registry using the get method.
 * 
 * When the returned function is executed, the tasks or functions will be executed in parallel,
 * all being executed at the same time. If an error occurs, all execution will complete.
 * @param tasks - list of tasks.
 */
parallel(tasks: Undertaker$Undertaker$Task[]): Undertaker$Undertaker$TaskFunction;

/**
 * Returns the current registry object.
 */
registry(): Registry;

/**
 * The tasks from the current registry will be transferred to it
 * and the current registry will be replaced with the new registry.
 * @param registry - Instance of registry.
 */
registry(registry: Registry): void;

/**
 * Optionally takes an object (options) and returns an object representing the tree of registered tasks.
 * @param options - Tree options.
 */
tree(options?: Undertaker$Undertaker$TreeOptions): Undertaker$Undertaker$TreeResult;

/**
 * Takes a string or function (task) and returns a timestamp of the last time the task was run successfully.
 * The time will be the time the task started.  Returns undefined if the task has not been run.
 * @param task - Task.
 * @param timeResolution - Time resolution.
 */
lastRun(task: Undertaker$Undertaker$Task, timeResolution?: number): number
}
	declare module.exports: typeof Undertaker

    }
