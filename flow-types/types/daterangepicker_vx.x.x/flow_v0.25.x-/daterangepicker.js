declare module "global" {
  declare interface JQuery {
    daterangepicker: ((
      options?: daterangepicker$daterangepicker$Options,
      callback?: daterangepicker$daterangepicker$DataRangePickerCallback
    ) => JQuery) & {
      defaultOptions?: daterangepicker$daterangepicker$Options
    };
    data(key: "daterangepicker"): daterangepicker | void;
  }
}
declare module "daterangepicker" {
  declare class daterangepicker {
    constructor(
      element: HTMLElement,
      options?: daterangepicker$daterangepicker$Options,
      callback?: daterangepicker$daterangepicker$DataRangePickerCallback
    ): this;
    startDate: moment.Moment;
    endDate: moment.Moment;
    container: JQuery;
    setStartDate(date: daterangepicker$daterangepicker$DateOrString): void;
    setEndDate(date: daterangepicker$daterangepicker$DateOrString): void;
    remove(): void;
  }
  declare type daterangepicker$DataRangePickerCallback = (
    start: moment.Moment,
    end: moment.Moment,
    label: string | null
  ) => void;

  declare type daterangepicker$DateOrString = string | moment.Moment | Date;

  declare type daterangepicker$DatepickerEventObject = {
    date: Date,
    format(format?: string): string
  } & JQueryEventObject;

  declare interface daterangepicker$Options {
    /**
     * The start of the initially selected date range
     */
    startDate?: daterangepicker$DateOrString;

    /**
     * The end of the initially selected date range
     */
    endDate?: daterangepicker$DateOrString;

    /**
     * The earliest date a user may select
     */
    minDate?: daterangepicker$DateOrString;

    /**
     * The latest date a user may select
     */
    maxDate?: daterangepicker$DateOrString;

    /**
     * The maximum span between the selected start and end dates. Can have any property you can add to a moment object (i.e. days, months)
     */
    maxSpan?: moment.MomentInput | moment.Duration;

    /**
     * Show year and month select boxes above calendars to jump to a specific month and year
     */
    showDropdowns?: boolean;

    /**
     * The minimum year shown in the dropdowns when `showDropdowns` is set to true.
     */
    minYear?: number;

    /**
     * The maximum year shown in the dropdowns when `showDropdowns` is set to true.
     */
    maxYear?: number;

    /**
     * Show localized week numbers at the start of each week on the calendars
     */
    showWeekNumbers?: boolean;

    /**
     * Show ISO week numbers at the start of each week on the calendars
     */
    showISOWeekNumbers?: boolean;

    /**
     * Allow selection of dates with times, not just dates
     */
    timePicker?: boolean;

    /**
     * Increment of the minutes selection list for times (i.e. 30 to allow only selection of times ending in 0 or 30)
     */
    timePickerIncrement?: number;

    /**
     * Use 24- hour instead of 12- hour times, removing the AM/ PM selection.
     */
    timePicker24Hour?: boolean;

    /**
     * Show seconds in the timePicker.
     */
    timePickerSeconds?: boolean;

    /**
     * Set predefined date ranges the user can select from.Each key is the label for the range, and its value an array with two dates representing the bounds of the range.
     */
    ranges?: {
      [name: string]: [
        daterangepicker$DateOrString,
        daterangepicker$DateOrString
      ]
    };

    /**
     * Whether to show the 'Custom Range' label or just pre-defined ranges
     */
    showCustomRangeLabel?: boolean;

    /**
     * Normally, if you use the `ranges` option to specify pre-defined date ranges, calendars
     * for choosing a custom date range are not shown until the user clicks "Custom Range".
     * When this option is set to true, the calendars for choosing a custom date range are always shown instead.
     */
    alwaysShowCalendars?: boolean;

    /**
     * Whether the picker appears aligned to the left, to the right, or centered under the HTML element it's attached to
     */
    opens?: "left" | "right" | "center";

    /**
     * Whether the picker appears below (default) or above the HTML element it's attached to
     */
    drops?: "down" | "up";

    /**
     * CSS class names that will be added to all buttons in the picker
     */
    buttonClasses?: string[];

    /**
     * CSS class string that will be added to the apply button
     */
    applyButtonClasses?: string;

    /**
     * CSS class string that will be added to the cancel button
     */
    cancelButtonClasses?: string;

    /**
     * Allows you to provide localized strings for buttons and labels, customize the date display format, and change the first day of week for the calendars.
     */
    locale?: daterangepicker$Locale;

    /**
     * Show only a single calendar to choose one date, instead of a range picker with two calendars; the start and end dates provided to your callback will be the same single date chosen.
     */
    singleDatePicker?: boolean;

    /**
     * Hide the apply and cancel buttons, and automatically apply a new date range as soon as two dates or a predefined range is selected.
     */
    autoApply?: boolean;

    /**
     * When enabled, the two calendars displayed will always be for two sequential months (i.e.
     * January and February), and both will be advanced when clicking the left or right arrows
     * above the calendars.When disabled, the two calendars can be individually advanced and
     * display any month/ year.
     */
    linkedCalendars?: boolean;

    /**
     * A function that is passed each date in the two calendars before they are displayed, and may return true or false to indicate whether that date should be available for selection or not.
     */
    isInvalidDate?: (
      startDate: daterangepicker$DateOrString,
      endDate?: daterangepicker$DateOrString
    ) => boolean;

    /**
     * A function that is passed each date in the two calendars before they are displayed, and may return a string or array of CSS class names to apply to that date's calendar cell.
     */
    isCustomDate?: (
      date: daterangepicker$DateOrString
    ) => string | string[] | void;

    /**
     * Indicates whether the date range picker should automatically update the value of an < input > element it's attached to at initialization and when the selected dates change.
     */
    autoUpdateInput?: boolean;

    /**
     * jQuery selector of the parent element that the date range picker will be added to, if not provided this will be 'body'
     */
    parentEl?: string;
  }

  declare interface daterangepicker$Locale {
    /**
     * Text for cancel label.
     */
    cancelLabel?: string;

    /**
     * Text for apply label.
     */
    applyLabel?: string;

    /**
     * Text for fromLabel label.
     */
    fromLabel?: string;

    /**
     * Text for toLabel label.
     */
    toLabel?: string;

    /**
     * Format of the date string. example: 'YYYY-MM-DD'
     */
    format?: string;

    /**
     * Separator between the startDate and endDate in the attached input element. Example: ' - '
     */
    separator?: string;

    /**
     * Text for the week label.
     */
    weekLabel?: string;

    /**
     * Text for the custom range label.
     */
    customRangeLabel?: string;

    /**
     * The first day of the week (0-6, Sunday to Saturday).
     */
    firstDay?: number;

    /**
     * Weekday names displayed in the header of calendar.
     */
    daysOfWeek?: string[];

    /**
     * Month names used in the month select boxes.
     */
    monthNames?: string[];
  }
  declare module.exports: typeof daterangepicker;
}
