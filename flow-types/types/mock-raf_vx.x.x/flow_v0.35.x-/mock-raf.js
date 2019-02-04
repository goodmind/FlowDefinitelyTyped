declare module 'mock-raf' {
        declare interface MockRaf$Options {

/**
 * The time that should pass during each requestAnimationFrame step in milliseconds. Default is roughly equivalent to default browser behavior.
 */
time?: number,

/**
 * The number of steps to take.
 */
count?: number
} 


/**
 * Creates a mockRaf instance, exposing the functions you'll use to interact with the mock.
 */
declare interface MockRaf$Creator {

/**
 * Returns the current now value of the mock. Starts at 0 and increases with each step() taken.
 * Useful for stubbing out performance.now() or a polyfill when using requestAnimationFrame with timers.
 */
now(): number,

/**
 * Replacement for requestAnimationFrame or a polyfill.Adds a callback to be fired on the next step.
 */
raf(callback: FrameRequestCallback): number,

/**
 * Replacement for cancelAnimationFrame or a polyfill.Removes all currently scheduled requestAnimationFrame callbacks from the queue.
 */
cancel(handle: number): void,

/**
 * Takes requestAnimationFrame steps. Fires currently queued callbacks for each step and increments now time for each step. The primary way to interact with a mockRaf instance for testing.
 */
step(options?: MockRaf$Options): void
} 
	declare function MockRaf(): MockRaf$MockRaf$Creator

	declare module.exports: typeof MockRaf

    }
