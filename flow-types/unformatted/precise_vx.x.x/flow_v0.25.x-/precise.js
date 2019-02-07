declare module 'precise' {
        
/**
 * Precise factory
 */
declare function _precise(): _precise.Precise

	declare module '_precise' {
        declare class Precise  {
constructor(): this;

/**
 * Starts a timer
 */
start(): Precise;

/**
 * Stops a timer
 */
stop(): Precise;

/**
 * Returns the nanoseconds from `start()` to `stop()`
 */
diff(): number
}
    }

	declare module.exports: typeof _precise

    }
