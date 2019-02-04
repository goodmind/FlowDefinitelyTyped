declare module 'memwatch-next' {
        declare type EventCallback = (data: LeakInformation | StatsInformation | Object) => void;
	
/**
 * Compare the state of your heap between two points in time, telling you what has been allocated, and what has been released.
 * @class
 */
declare export class HeapDiff  {

/**
 * Compute the diff.
 */
end: () => void
}
	
/**
 * Stats information.
 * @interface
 */
declare export interface StatsInformation {
current_base: number,
estimated_base: number,
heap_compactions: number,
max: number,
min: number,
num_full_gc: number,
num_inc_gc: number,
usage_trend: number
} 
	
/**
 * Leak information.
 * @interface
 */
declare export interface LeakInformation {

/**
 * End date.
 * @type {Date}
 */
end: Date,

/**
 * Growth.
 * @type {number}
 */
growth: number,

/**
 * Reason leak.
 * @type {string}
 */
reason: string,

/**
 * Start date.
 * @type {Date}
 */
start: Date
} 
	
/**
 * Subscribe to a event.
 * @param {string} eventName A event name.
 * @param {EventCallback} callback A callback;
 */
declare export function on(eventName: string, callback: EventCallback): void

    }
