declare module "react-infinite-calendar" {
  import typeof * as React from "react";

  declare export type DateType = Date | string | number;
  declare export class EVENT_TYPE {
    constructor(...args: empty): mixed;
    static +START: Class<EVENT_TYPE__START> & EVENT_TYPE__START & 1; // 1
    static +HOVER: Class<EVENT_TYPE__HOVER> & EVENT_TYPE__HOVER & 1; // 1
    static +END: Class<EVENT_TYPE__END> & EVENT_TYPE__END & 2; // 2
  }

  declare class EVENT_TYPE__START mixins EVENT_TYPE {}
  declare class EVENT_TYPE__HOVER mixins EVENT_TYPE {}
  declare class EVENT_TYPE__END mixins EVENT_TYPE {}

  declare export interface RangedSelection {
    eventType: EVENT_TYPE;
    start: Date;
    end: Date;
  }
  declare export type RangedSelectFunction = (
    rangedDate: RangedSelection
  ) => void;
  declare export type DateSelectFunction = (date: Date) => void;
  declare export interface ReactInfiniteCalendarProps {
    selected?:
      | DateType
      | false
      | {
          start: DateType,
          end: DateType
        };
    width?: number | "auto" | "100%";
    height?: number | "auto";
    min?: DateType;
    max?: DateType;
    minDate?: DateType;
    maxDate?: DateType;
    disabledDays?: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>;
    disabledDates?: DateType[];
    display?: "days" | "years";
    displayOptions?: {
      hideYearsOnSelect?: boolean,
      layout?: "portrait" | "landscape",
      overscanMonthCount?: number,
      shouldHeaderAnimate?: boolean,
      showHeader?: boolean,
      showMonthsForYears?: boolean,
      showOverlay?: boolean,
      showTodayHelper?: boolean,
      showWeekdays?: boolean,
      todayHelperRowOffset?: number
    };
    locale?: {
      blank?: string,
      headerFormat?: string,
      todayLabel?: {
        long: string
      },
      weekdays?: string[],
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    };
    theme?: {
      accentColor?: string,
      floatingNav?: {
        background?: string,
        chevron?: string,
        color?: string
      },
      headerColor?: string,
      selectionColor?: string,
      textColor?: {
        active?: string,
        default?: string
      },
      todayColor?: string,
      weekdayColor?: string
    };
    className?: string;
    onSelect?: DateSelectFunction | RangedSelectFunction;
    onScroll?: (scrollTop: number) => void;
    onScrollEnd?: (scrollTop: number) => void;
    rowHeight?: number;
    autoFocus?: boolean;
    tabIndex?: number;
    Component?: CalendarClass;
  }
  declare export class Calendar
    mixins React.Component<ReactInfiniteCalendarProps> {}
  declare export type CalendarClass = React.ComponentClass<ReactInfiniteCalendarProps>;
  declare export function withRange(component: CalendarClass): CalendarClass;

  declare export function withDateSelection(
    component: CalendarClass
  ): CalendarClass;

  declare export function withMultipleDates(
    component: CalendarClass
  ): CalendarClass;

  declare export function withKeyboardSupport(
    component: CalendarClass
  ): CalendarClass;

  declare export function defaultMultipleDateInterpolation(
    component: CalendarClass
  ): CalendarClass;

  declare export default class ReactInfiniteCalendar
    mixins React.Component<ReactInfiniteCalendarProps> {}
}
