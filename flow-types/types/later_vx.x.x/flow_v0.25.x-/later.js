declare module "later" {
  declare interface later$ScheduleData {
    /**
     * A list of recurrence information as a composite schedule.
     */
    schedules: later$Recurrence[];

    /**
     * A list of exceptions to the composite recurrence information.
     */
    exceptions: later$Recurrence[];

    /**
     * A code to identify any errors in the composite schedule and exceptions.
     * The number tells you the position of the error within the schedule.
     */
    error: number;
  }

  declare interface later$Recurrence {
    /**
     * Time in seconds from midnight.
     */
    t?: number[];

    /**
     * Seconds in minute.
     */
    s?: number[];

    /**
     * Minutes in hour.
     */
    m?: number[];

    /**
     * Hour in day.
     */
    h?: number[];

    /**
     * Day of the month.
     */
    D?: number[];

    /**
     * Day in week.
     */
    dw?: number[];

    /**
     * Nth day of the week in month.
     */
    dc?: number[];

    /**
     * Day in year.
     */
    dy?: number[];

    /**
     * Week in month.
     */
    wm?: number[];

    /**
     * ISO week in year.
     */
    wy?: number[];

    /**
     * Month in year.
     */
    M?: number[];

    /**
     * Year.
     */
    Y?: number[];

    /**
     * After modifiers.
     */
    t_a?: number[];

    /**
     * After modifiers.
     */
    s_a?: number[];

    /**
     * After modifiers.
     */
    m_a?: number[];

    /**
     * After modifiers.
     */
    h_a?: number[];

    /**
     * After modifiers.
     */
    D_a?: number[];

    /**
     * After modifiers.
     */
    dw_a?: number[];

    /**
     * After modifiers.
     */
    dc_a?: number[];

    /**
     * After modifiers.
     */
    dy_a?: number[];

    /**
     * After modifiers.
     */
    wm_a?: number[];

    /**
     * After modifiers.
     */
    wy_a?: number[];

    /**
     * After modifiers.
     */
    M_a?: number[];

    /**
     * After modifiers.
     */
    Y_a?: number[];

    /**
     * Before modifiers.
     */
    t_b?: number[];

    /**
     * Before modifiers.
     */
    s_b?: number[];

    /**
     * Before modifiers.
     */
    m_b?: number[];

    /**
     * Before modifiers.
     */
    h_b?: number[];

    /**
     * Before modifiers.
     */
    D_b?: number[];

    /**
     * Before modifiers.
     */
    dw_b?: number[];

    /**
     * Before modifiers.
     */
    dc_b?: number[];

    /**
     * Before modifiers.
     */
    dy_b?: number[];

    /**
     * Before modifiers.
     */
    wm_b?: number[];

    /**
     * Before modifiers.
     */
    wy_b?: number[];

    /**
     * Before modifiers.
     */
    M_b?: number[];

    /**
     * Before modifiers.
     */
    Y_b?: number[];
    [timeperiodAndModifierName: string]: number[] | void;
  }

  declare interface later$ParseStatic {
    /**
     * Create a recurrence builder for building schedule data.
     */
    recur(): later$RecurrenceBuilder;

    /**
     * Create schedule data by parsing a cron string
     * @param input - A string value to parse.
     * @param hasSeconds - Whether the cron expression has second part.
     */
    cron(input?: string, hasSeconds?: boolean): later$ScheduleData;

    /**
     * Create schedule data by paring a human readable string.
     * @param input - A string value to parse.
     */
    text(input?: string): later$ScheduleData;
  }

  declare interface later$Timer {
    /**
     * Clear the timer and end execution.
     */
    clear(): void;
  }

  declare interface later$Schedule {
    /**
     * Finds the next valid instance or instances of the current schedule,
     * optionally between a specified start and end date. Start date is
     * Date.now() by default, end date is unspecified. Start date must be
     * smaller than end date.
     * @param numberOfInst : The number of instances to return
     * @param dateFrom : The earliest a valid instance can occur
     * @param dateTo : The latest a valid instance can occur
     */
    next(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[];

    /**
     * Finds the next valid range or ranges of the current schedule,
     * optionally between a specified start and end date. Start date is
     * Date.now() by default, end date is unspecified. Start date must be
     * greater than end date.
     * @param numberOfInst : The number of ranges to return
     * @param dateFrom : The earliest a valid range can occur
     * @param dateTo : The latest a valid range can occur
     */
    nextRange(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[];

    /**
     * Finds the previous valid instance or instances of the current schedule,
     * optionally between a specified start and end date. Start date is
     * Date.now() by default, end date is unspecified. Start date must be
     * greater than end date.
     * @param numberOfInst : The number of instances to return
     * @param dateFrom : The earliest a valid instance can occur
     * @param dateTo : The latest a valid instance can occur
     */
    prev(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[];

    /**
     * Finds the previous valid range or ranges of the current schedule,
     * optionally between a specified start and end date. Start date is
     * Date.now() by default, end date is unspecified. Start date must be
     * greater than end date.
     * @param numberOfInst : The number of ranges to return
     * @param dateFrom : The earliest a valid range can occur
     * @param dateTo : The latest a valid range can occur
     */
    prevRange(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[];
  }

  declare type later$RecurrenceBuilder = {
    /**
     * a time period
     */
    second(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    minute(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    hour(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    time(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    dayOfWeek(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    dayOfWeekCount(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    dayOfMonth(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    dayOfYear(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    weekOfMonth(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    weekOfYear(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    month(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    year(): later$RecurrenceBuilder,

    /**
     * a time period
     */
    fullDate(): later$RecurrenceBuilder,

    /**
     * Specifies one or more specific vals of a time period information provider.
     * When used to specify a time, a string indicating the 24-hour time may be used.
     * @param values - A list of values.
     */
    on(...values: number[]): later$RecurrenceBuilder,

    /**
     * Specifies one or more specific vals of a time period information provider.
     * When used to specify a time, a string indicating the 24-hour time may be used.
     * @param value - A Date or string representing your value.
     */
    on(value: Date | string): later$RecurrenceBuilder,

    /**
     * Preceed a time period.
     * @param value - A number or string representing your value.
     */
    every(value?: number | string): later$RecurrenceBuilder,

    /**
     * Preceed a time period.
     * @param start - A number representing your start value.
     * @param end - A number representing your end value.
     */
    between(start: number, end: number): later$RecurrenceBuilder,

    /**
     * Preceed a time period.
     * @param start - A string representing your start value.
     * @param end - A string representing your end value.
     */
    between(start: string, end: string): later$RecurrenceBuilder,

    /**
     * After a time period.
     * @param value - A number or string representing your value.
     */
    after(value: number | string): later$RecurrenceBuilder,

    /**
     * Before a time period.
     * @param value - A number or string representing your value.
     */
    before(value: number | string): later$RecurrenceBuilder,

    /**
     * After a time period.
     * @param value - A number or string representing your value.
     */
    startingOn(value: number | string): later$RecurrenceBuilder,

    /**
     * Equivalent to .on(min)
     */
    first(): later$RecurrenceBuilder,

    /**
     * Equivalent to .on(max)
     */
    last(): later$RecurrenceBuilder,

    /**
     * Equivalent to .on(1,7).dayOfWeek()
     */
    onWeekend(): later$RecurrenceBuilder,

    /**
     * Equivalent to .on(2,3,4,5,6).dayOfWeek()
     */
    onWeekday(): later$RecurrenceBuilder,

    /**
     * Add a new schedule value to schedules, composite schedule.
     */
    and(): later$RecurrenceBuilder,

    /**
     * Add exceptions.
     */
    except(): later$RecurrenceBuilder,

    /**
     * Custom Timeperiod Recurrences.
     * Using a key as defined by the custom period in any extension to Later.IStatic.
     */
    customPeriod(key: string): later$RecurrenceBuilder,

    /**
     * Customise Recurrences.
     * Using a key as defined by the custom modifier in any extension to Later.IModifierStatic.
     */
    customModifier(key: string, values: number): later$RecurrenceBuilder
  } & later$ScheduleData;

  declare interface later$DateProvider {
    /**
     * Set later to use UTC time.
     */
    UTC(): void;

    /**
     * Set later to use local time.
     */
    localTime(): void;

    /**
     * Builds and returns a new Date using the specified values.  Date
     * returned is either using Local time or UTC based on isLocal.
     * @param Y : Four digit year
     * @param M : Month between 1 and 12, defaults to 1
     * @param D : Date between 1 and 31, defaults to 1
     * @param h : Hour between 0 and 23, defaults to 0
     * @param m : Minute between 0 and 59, defaults to 0
     * @param s : Second between 0 and 59, defaults to 0
     */
    next(
      Y?: number,
      M?: number,
      D?: number,
      h?: number,
      m?: number,
      s?: number
    ): Date;

    /**
     * Builds and returns a new Date using the specified values.  Date
     * returned is either using Local time or UTC based on isLocal.
     * @param Y : Four digit year
     * @param M : Month between 0 and 11, defaults to 11
     * @param D : Date between 1 and 31, defaults to last day of month
     * @param h : Hour between 0 and 23, defaults to 23
     * @param m : Minute between 0 and 59, defaults to 59
     * @param s : Second between 0 and 59, defaults to 59
     */
    prev(
      Y?: number,
      M?: number,
      D?: number,
      h?: number,
      m?: number,
      s?: number
    ): Date;

    /**
     * Determines if a value will cause a particular constraint to rollover to the
     * next largest time period. Used primarily when a constraint has a
     * variable extent.
     * @param d : Date
     * @param val : Value
     * @param constraint : A modifier
     * @param period : A time period
     */
    nextRollover(
      d: Date,
      val: number,
      constraint: later$Modifier,
      period: later$TimePeriod
    ): Date;

    /**
     * Determines if a value will cause a particular constraint to rollover to the
     * previous largest time period. Used primarily when a constraint has a
     * variable extent.
     * @param d : Date
     * @param val : Value
     * @param constraint : A modifier
     * @param period : A time period
     */
    prevRollover(
      d: Date,
      val: number,
      constraint: later$Modifier,
      period: later$TimePeriod
    ): Date;
  }

  declare interface later$TimePeriod {
    /**
     * The name of the time period information provider.
     */
    name: string;

    /**
     * The rough number of seconds that are covered when moving from one instance of this time period to the next instance.
     */
    range: number;

    /**
     * The value of this time period for the date specified.
     * @param date - The given date.
     */
    val(date: Date): number;

    /**
     * True if the specified value is valid for the specified date, false otherwise.
     * @param date - The given date.
     * @param value - The value to test for the date.
     */
    isValid(date: Date, value: any): boolean;

    /**
     * The minimum and maximum valid values for the time period for the specified date.
     * If the minimum value is not 0, 0 can be specified in schedules to indicate the maximum value.
     * This makes working with non - constant extents(like days in a month) easier.
     * @param date - The given date.
     */
    extent(date?: Date): number[];

    /**
     * The first second in which the value is the same as the value of the specified date.
     *   For example, the start of an hour would be the hour with 0 minutes and 0 seconds.
     * @param date - The given date.
     */
    start(date: Date): Date;

    /**
     * The last second in which the value is the same as the value of the specified date.
     * For example, the end of an hour would be the hour with 59 minutes and 59 seconds.
     * @param date - The given date.
     */
    end(date: Date): Date;

    /**
     * Returns the next date where the value is the value specified.
     * Sets the value to 1 if value specified is greater than the max allowed value.
     * @param date - The given date.
     * @param value - The value to test for the date.
     */
    next(date: Date, value: any): Date;

    /**
     * Returns the previous date where the value is the value specified.
     * Sets the value to the max allowed value if the value specified is greater than the max allowed value.
     * @param date - The given date.
     * @param value - The value to test for the date.
     */
    prev(date: Date, value: any): Date;
  }

  declare type later$Modifier = {
    /**
     * Creates a new modified constraint.
     * @param constraint : The constraint to be modified
     * @param value : The starting value of the after constraint
     */
    (constraint: later$TimePeriod, value: number): later$TimePeriod
  } & later$TimePeriod;

  declare interface later$ModifierStatic {
    /**
     * After Modifier
     */
    after: later$Modifier;

    /**
     * Before Modifier
     */
    before: later$Modifier;
  }

  declare interface later$Static {
    /**
     * Schedule
     * Generates instances from schedule data.
     */
    schedule(input: any): later$Schedule;

    /**
     * Parse
     * For generating schedule data.
     */
    parse: later$ParseStatic;

    /**
     * Date Provider
     */
    date: later$DateProvider;

    /**
     * Set timeout on window using given recurrence next.
     * @param callback - A callback called after first instance of recurrence pattern.
     * @param - A recurrence instance.
     */
    setTimeout(callback: () => void, time: later$ScheduleData): later$Timer;

    /**
     * Set interval on window using given recurrence
     * @param callback - A callback called after each instance of recurrence pattern.
     * @param - A recurrence instance.
     */
    setInterval(callback: () => void, time: later$ScheduleData): later$Timer;

    /**
     * time period information provider.
     */
    time: later$TimePeriod;

    /**
     * Second time period information provider.
     */
    second: later$TimePeriod;

    /**
     * Minute time period information provider.
     */
    minute: later$TimePeriod;

    /**
     * Hour time period information provider.
     */
    hour: later$TimePeriod;

    /**
     * Day time period information provider.
     */
    day: later$TimePeriod;

    /**
     * Day of week time period information provider.
     */
    dayOfWeek: later$TimePeriod;

    /**
     * Day of week in month time period information provider.
     */
    dayOfWeekCount: later$TimePeriod;

    /**
     * Day in year time period information provider.
     */
    dayOfYear: later$TimePeriod;

    /**
     * Week of mobth time period information provider.
     */
    weekOfMonth: later$TimePeriod;

    /**
     * Week of yearfrom ISO 8601 time period information provider.
     */
    weekOfYear: later$TimePeriod;

    /**
     * Month time period information provider.
     */
    month: later$TimePeriod;

    /**
     * Year time period information provider.
     */
    year: later$TimePeriod;

    /**
     * Later Modifiers:
     *
     * This type can be easily extended to include any custom IModifiers that you desire.
     * These can then be used to create schedules of your own custom type.
     *
     * interface IGandalfsLaterModifier extends Later.IModifierStatic {
     *      duringTheThirdAge: IModifier
     * }
     *
     * Be sure to use this interface when dealing with Later.modifier
     */
    modifier: later$ModifierStatic;
  }

  /**
   * Later Module:
   *
   * Easily define complex schedules then quickly calculate future or previous schedule occurrences.
   *
   * This type can be easily extended to include any custom ITimePeriods that you desire.
   * These can then be used to create schedules of your own custom type.
   *
   * interface IGandalfsLater extends Later.IStatic {
   *      agesOfMiddleEarth: ITimePeriod
   * }
   *
   * Be sure to use this interface when dealing with Later.
   */
  declare var later: later$later$Static;
  declare module.exports: typeof later;
}
