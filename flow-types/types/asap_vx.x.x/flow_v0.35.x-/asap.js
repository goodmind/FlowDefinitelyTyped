declare module 'asap' {
        declare interface Task {
call(...args: any[]): any
} 
	
/**
 * Executes a task as soon as possible.
 * @param task Function or any object that implements `call()`.
 */
declare function asap(task: Task): void

	declare module.exports: typeof asap

    }
