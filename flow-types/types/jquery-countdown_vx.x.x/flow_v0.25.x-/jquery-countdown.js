declare module "jquery-countdown" {
  declare interface jQueryCountdown$Options {
    /**
     * Allow to continue after finishes
     */
    elapse?: boolean;

    /**
     * The update rate in milliseconds
     */
    precision?: number;

    /**
     * Deferred initialization mode
     */
    defer?: boolean;
  }

  declare type jQueryCountdown$Event = {
    /**
     * The namespaced event type
     */
    type: string,

    /**
     * The formatter function
     */
    strftime: (format: string) => string,

    /**
     * The parsed final date native object
     */
    finalDate: Date,

    /**
     * Passed away the final date?
     */
    elapsed: boolean,
    offset: jQueryCountdown$OffsetEvent
  } & JQuery.jQueryCountdown$Event;

  declare interface jQueryCountdown$OffsetEvent {
    /**
     * Seconds left for the next minute
     */
    seconds: number;

    /**
     * Minutes left for the next hour
     */
    minutes: number;

    /**
     * Hours left until next day
     */
    hours: number;

    /**
     * Days left until next week
     */
    days: number;

    /**
     * Days left until next week
     */
    daysToWeek: number;

    /**
     * Days left until next month
     */
    daysToMonth: number;

    /**
     * Weeks left until the final date
     */
    weeks: number;

    /**
     * Weeks left until the next month
     */
    weeksToMonth: number;

    /**
     * Months left until final date
     */
    months: number;

    /**
     * Years left until final date
     */
    years: number;

    /**
     * Total amount of days left until final date
     */
    totalDays: number;

    /**
     * Total amount of hours left until final date
     */
    totalHours: number;

    /**
     * Total amount of minutes left until final date
     */
    totalMinutes: number;

    /**
     * Total amount of seconds left until final date
     */
    totalSeconds: number;
  }

  declare type jQueryCountdown$Methods =
    | "update.countdown"
    | "finish.countdown"
    | "stop.countdown";

  declare type jQueryCountdown$Controls = "start" | "stop" | "pause" | "resume";
  declare interface JQuery {
    /**
     * Initialize the countdown
     */
    countdown(
      finalDate: string,
      callback?: (event: jQueryCountdown$jQueryCountdown$Event) => void
    ): JQuery;

    /**
     * Initialize the countdown with options
     */
    countdown(
      finalDate: string,
      options: jQueryCountdown$jQueryCountdown$Options,
      callback?: (event: jQueryCountdown$jQueryCountdown$Event) => void
    ): JQuery;

    /**
     * Methods to control the execution flow of countdown
     */
    countdown(control: jQueryCountdown$jQueryCountdown$Controls): JQuery;

    /**
     * Trigger an event whenever some state change
     */
    on(
      method: jQueryCountdown$jQueryCountdown$Methods,
      callback: (event: jQueryCountdown$jQueryCountdown$Event) => void
    ): JQuery;
  }
}
