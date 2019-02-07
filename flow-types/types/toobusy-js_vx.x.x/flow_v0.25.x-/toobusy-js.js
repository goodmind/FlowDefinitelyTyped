declare module "toobusy-js" {
  declare module.exports: typeof toobusy_js;

  /**
   * Main export function.
   * @return True if node process is too busy.
   */
  declare function toobusy_js(): boolean;

  declare var npm$namespace$toobusy_js: {
    interval: typeof toobusy_js$interval,
    lag: typeof toobusy_js$lag,
    maxLag: typeof toobusy_js$maxLag,
    smoothingFactor: typeof toobusy_js$smoothingFactor,
    shutdown: typeof toobusy_js$shutdown,
    onLag: typeof toobusy_js$onLag,
    started: typeof toobusy_js$started
  };

  /**
   * Sets or gets the current check interval.
   * If you want more sensitive checking, set a faster (lower) interval. A lower maxLag can also create a more
   * sensitive check.
   * @param newInterval New interval to set. If not provided, will return the existing interval.
   * @return New or existing interval.
   */
  declare function toobusy_js$interval(newInterval?: number): number;

  /**
   * Returns last lag reading from last check interval.
   * @return Lag in ms.
   */
  declare function toobusy_js$lag(): number;

  /**
   * Set or get the current max latency threshold. Default is 70ms.
   *
   * Note that if event loop lag goes over this threshold, the process is not always 'too busy' - the farther
   * it goes over the threshold, the more likely the process will be considered too busy.
   *
   * The percentage is equal to the percent over the max lag threshold. So 1.25x over the maxLag will indicate
   * too busy 25% of the time. 2x over the maxLag threshold will indicate too busy 100% of the time.
   * @param newLag New maxLag (highwater) threshold.
   * @return New or existing maxLag (highwater) threshold.
   */
  declare function toobusy_js$maxLag(newLag?: number): number;

  /**
   * Set or get the smoothing factor. Default is 0.3333....
   *
   * The smoothing factor per the standard exponential smoothing formula "αtn + (1-α)tn-1"
   * See: https://en.wikipedia.org/wiki/Exponential_smoothing
   * @param newFactor New smoothing factor.
   * @return New or existing smoothing factor.
   */
  declare function toobusy_js$smoothingFactor(newFactor?: number): number;

  /**
   * Shuts down toobusy.
   *
   * Not necessary to call this manually, only do this if you know what you're doing. `unref()` is called
   * on toobusy's check interval, so it will never keep the server open.
   */
  declare function toobusy_js$shutdown(): void;

  /**
   * Registers an event listener for lag events,
   * optionally specify a minimum value threshold for events being emitted
   * @param fn Function of form onLag(value: number) => void
   * @param threshold Optional minimum lag value for events to be emitted
   */
  declare function toobusy_js$onLag(
    fn: (toobusy_js$lag: number) => void,
    threshold?: number
  ): void;

  declare function toobusy_js$started(): boolean;
}
