declare module "react-date-range" {
  import typeof * as React from "react";

  import typeof * as moment from "moment-timezone";

  declare export type AnyDate = string | moment.Moment;
  declare export type DateFunc = (now: moment.Moment) => AnyDate;
  declare export type DateInputType = AnyDate | DateFunc;
  declare export type LanguageType =
    | "cn"
    | "jp"
    | "fr"
    | "it"
    | "de"
    | "ko"
    | "es"
    | "ru"
    | "tr";
  declare export type SizeType = number;
  declare export interface DateContainerType {
    date: moment.Moment;
  }
  declare export interface CalendarTheme {
    DateRange?: React.CSSProperties;
    Calendar?: React.CSSProperties;
    Day?: React.CSSProperties;
    DayPassive?: React.CSSProperties;
    DayHover?: React.CSSProperties;
    DayToday?: React.CSSProperties;
    DaySunday?: React.CSSProperties;
    DaySpecialDay?: React.CSSProperties;
    DayActive?: React.CSSProperties;
    DaySelected?: React.CSSProperties;
    DayStartEdge?: React.CSSProperties;
    DayEndEdge?: React.CSSProperties;
    DayInRange?: React.CSSProperties;
    Weekday?: React.CSSProperties;
    MonthAndYear?: React.CSSProperties;
    MonthButton?: React.CSSProperties;
    MonthArrow?: React.CSSProperties;
    MonthArrowPrev?: React.CSSProperties;
    MonthArrowNext?: React.CSSProperties;
    PredefinedRanges?: React.CSSProperties;
    PredefinedRangesItem?: React.CSSProperties;
    PredefinedRangesItemActive?: React.CSSProperties;
  }
  declare export interface Range {
    /**
     * default: today
     */
    startDate?: moment.Moment;

    /**
     * default: today
     */
    endDate?: moment.Moment;
  }
  declare export interface CommonCalendarProps {
    /**
     * default: DD/MM/YYY
     */
    format?: string;

    /**
     * default: moment.localeData().firstDayOfWeek()
     */
    firstDayOfWeek?: number;
    theme?: CalendarTheme;

    /**
     * default: none
     */
    onInit?: (range: Range) => void;

    /**
     * default: none
     */
    onChange?: (range: Range) => void;

    /**
     * default: none
     */
    minDate?: DateInputType;

    /**
     * default: none
     */
    maxDate?: DateInputType;

    /**
     * Calendar languages.
     * ('cn' - Chinese, 'jp' - Japanese,
     * 'fr' - French, 'it' - Italian,
     * 'de' - German, 'ko' - Korean,
     * 'es' - Spanish, 'ru' - Russian,
     * 'tr' - Turkish) default: none
     */
    lang?: LanguageType;
  }
  declare export type CalendarProps = {
    /**
     * default: today
     */
    date: DateInputType
  } & CommonCalendarProps;

  declare export class Calendar mixins React.Component<CalendarProps> {}
  declare export type DateRangeProps = {
    /**
     * default: false
     */
    linkedCalendars?: boolean,

    /**
     * default: 2
     */
    calendars?: number,

    /**
     * default: none
     */
    ranges?: { [key: string]: any },

    /**
     * default: false
     */
    twoStepChange?: boolean,

    /**
     * default: false
     */
    rangedCalendars?: boolean,

    /**
     * default: none
     */
    specialDays?: DateContainerType[]
  } & Range &
    CommonCalendarProps;

  declare export class DateRange mixins React.Component<DateRangeProps> {}
  declare export type DateRangeIndex =
    | "Today"
    | "Yesterday"
    | "Last 7 Days"
    | "Last 30 Days";
  declare export interface DateRangeObject {
    startDate: (now: moment.Moment) => moment.Moment;
    endDate: (now: moment.Moment) => moment.Moment;
  }
  declare export var defaultRanges: {
    [measure: string]: DateRangeObject
  };
}
