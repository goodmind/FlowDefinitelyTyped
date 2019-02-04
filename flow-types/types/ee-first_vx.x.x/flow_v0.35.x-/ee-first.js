declare module 'ee-first' {
        import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof first

	
/**
 * Get the first event in a set of event emitters and event pairs, then clean up after itself.
 * Invoke `listener` on the first event from the list specified in `eventSpec`.
 * @param eventSpec Array of arrays, with each array in the format `[ee, ...event]`.
 * @param listener Will be called only once, the first time any of the given events are emitted.
If `error` is one of the listened events, then if that fires first, the `listener` will be given the `err` argument.
`listener`'s arguments:
- `err`: the first argument emitted from an error event, if applicable
- `ee`: the event emitter that fired
- `event`: the string event name that fired
- `args`: an array of the arguments that were emitted on the event
 */
declare function first<TEmitter: EventEmitter>(
eventSpec: Array<[TEmitter, "NO PRINT IMPLEMENTED: RestType"]>,
listener: first$first$Listener<TEmitter>): first$first$Thunk<TEmitter>

	declare type first$Listener<TEmitter: EventEmitter> = (err: any, ee: TEmitter, event: string[], args: any[]) => void;

declare interface first$Thunk<TEmitter: EventEmitter> {
(listener: first$Listener<TEmitter>): void,

/**
 * The group of listeners can be cancelled before being invoked and have all the event listeners removed
 * from the underlying event emitters.
 */
cancel(): void
} 
    }
