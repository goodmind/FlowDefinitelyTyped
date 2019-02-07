declare var npm$namespace$__node_sleep: {
  sleep: typeof __node_sleep$sleep,
  msleep: typeof __node_sleep$msleep,
  usleep: typeof __node_sleep$usleep
};

/**
 * Sleep for <i>n</i> seconds.
 * @param n Number of seconds to sleep.
 */
declare function __node_sleep$sleep(n: number): void;

/**
 * Sleep for n milliseconds.
 * @param n Number of milliseconds to sleep.
 */
declare function __node_sleep$msleep(n: number): void;

/**
 * Sleep for n microseconds.
 * @param n Number of microseconds to sleep; 1 second is 1,000,000 microseconds.
 */
declare function __node_sleep$usleep(n: number): void;
declare module "sleep" {
  declare module.exports: typeof __node_sleep;
}
