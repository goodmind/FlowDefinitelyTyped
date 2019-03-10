declare module "react-big-calendar" {
  import type { Validator } from "prop-types";

  import typeof * as React from "react";

  declare export type DayPropGetter = (
    date: Date
  ) => {
    className?: string,
    style?: React.CSSProperties
  };
  declare export type EventPropGetter<T> = (
    event: T,
    start: stringOrDate,
    end: stringOrDate,
    isSelected: boolean
  ) => {
    className?: string,
    style?: React.CSSProperties
  };
  declare export type SlotPropGetter = (
    date: Date
  ) => {
    className?: string,
    style?: React.CSSProperties
  };
  declare export type stringOrDate = string | Date;
  declare export type ViewKey =
    | "MONTH"
    | "WEEK"
    | "WORK_WEEK"
    | "DAY"
    | "AGENDA";
  declare export type View = "month" | "week" | "work_week" | "day" | "agenda";
  declare export type Views =
    | View[]
    | {
        month: boolean | React.SFC<> | React.Component<>,
        week: boolean | React.SFC<> | React.Component<>,
        myweek: boolean | React.SFC<> | React.Component<>
      };
  declare export type Navigate = "PREV" | "NEXT" | "TODAY" | "DATE";
  declare export type Event = { [key: string]: any };
  declare export interface DateRange {
    start: Date;
    end: Date;
  }
  declare export type DateFormatFunction = (
    date: Date,
    culture?: string,
    localizer?: { [key: string]: any }
  ) => string;
  declare export type DateRangeFormatFunction = (
    range: DateRange,
    culture?: string,
    localizer?: { [key: string]: any }
  ) => string;
  declare export type DateFormat = string | DateFormatFunction;
  declare export interface Formats {
    /**
     * Format for the day of the month heading in the Month view.
     * e.g. "01", "02", "03", etc
     */
    dateFormat?: DateFormat;

    /**
     * A day of the week format for Week and Day headings,
     * e.g. "Wed 01/04"
     */
    dayFormat?: DateFormat;

    /**
     * Week day name format for the Month week day headings,
     * e.g: "Sun", "Mon", "Tue", etc
     */
    weekdayFormat?: DateFormat;

    /**
     * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
     */
    timeGutterFormat?: DateFormat;

    /**
     * Toolbar header format for the Month view, e.g "2015 April"
     */
    monthHeaderFormat?: DateFormat;

    /**
     * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
     */
    dayRangeHeaderFormat?: DateRangeFormatFunction;

    /**
     * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
     */
    dayHeaderFormat?: DateFormat;

    /**
     * Toolbar header format for the Agenda view, e.g. "4/1/2015 — 5/1/2015"
     */
    agendaHeaderFormat?: DateRangeFormatFunction;

    /**
     * A time range format for selecting time slots, e.g "8:00am — 2:00pm"
     */
    selectRangeFormat?: DateRangeFormatFunction;
    agendaDateFormat?: DateFormat;
    agendaTimeFormat?: DateFormat;
    agendaTimeRangeFormat?: DateRangeFormatFunction;

    /**
     * Time range displayed on events.
     */
    eventTimeRangeFormat?: DateRangeFormatFunction;

    /**
     * An optional event time range for events that continue onto another day
     */
    eventTimeRangeStartFormat?: DateRangeFormatFunction;

    /**
     * An optional event time range for events that continue from another day
     */
    eventTimeRangeEndFormat?: DateRangeFormatFunction;
  }
  declare export interface HeaderProps {
    date: Date;
    label: string;
    localizer: DateLocalizer;
  }
  declare export interface Components {
    event?:
      | React.SFC<>
      | React.Component<>
      | React.ComponentClass<>
      | React$Node;
    eventWrapper?: React.ComponentType<EventWrapperProps<>>;
    dayWrapper?:
      | React.SFC<>
      | React.Component<>
      | React.ComponentClass<>
      | React$Node;
    dateCellWrapper?:
      | React.SFC<>
      | React.Component<>
      | React.ComponentClass<>
      | React$Node;

    /**
     * component used as a header for each column in the TimeGridHeader
     */
    header?: React.ComponentType<HeaderProps>;
    toolbar?: React.ComponentType<ToolbarProps>;
    agenda?: {
      date?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node,
      time?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node,
      event?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node
    };
    day?: {
      header?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node,
      event?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node
    };
    week?: {
      header?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node,
      event?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node
    };
    month?: {
      header?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node,
      dateHeader?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node,
      event?:
        | React.SFC<>
        | React.Component<>
        | React.ComponentClass<>
        | React$Node
    };
  }
  declare export interface ToolbarProps {
    date: Date;
    view: View;
    views: Views;
    label: string;
    localizer: {
      messages: Messages
    };
    onNavigate: (navigate: Navigate, date?: Date) => void;
    onView: (view: View) => void;
    children?: React.Node;
  }
  declare export interface EventWrapperProps<T: Event = Event> {
    style?: React.CSSProperties & {
      xOffset: number
    };
    className: string;
    event: T;
    isRtl: boolean;
    getters: {
      eventProp?: EventPropGetter<T>,
      slotProp?: SlotPropGetter,
      dayProp?: DayPropGetter
    };
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    onDoubleClick: (e: React.MouseEvent<HTMLElement>) => void;
    accessors: {
      title?: (event: T) => string,
      tooltip?: (event: T) => string,
      end?: (event: T) => Date,
      start?: (event: T) => Date
    };
    selected: boolean;
    label: string;
    continuesEarlier: boolean;
    continuesLater: boolean;
  }
  declare export interface Messages {
    date?: string;
    time?: string;
    event?: string;
    allDay?: string;
    week?: string;
    work_week?: string;
    day?: string;
    month?: string;
    previous?: string;
    next?: string;
    yesterday?: string;
    tomorrow?: string;
    today?: string;
    agenda?: string;
    showMore?: (count: number) => string;
  }
  declare export type Culture = string | string[];
  declare export type FormatInput = number | string | Date;
  declare export interface DateLocalizerSpec {
    firstOfWeek: (culture: Culture) => number;
    format: (value: FormatInput, format: string, culture: Culture) => string;
    formats: Formats;
    propType?: Validator<any>;
  }
  declare export class DateLocalizer {
    formats: Formats;
    propType: Validator<any>;
    startOfWeek: (culture: Culture) => number;
    constructor(spec: DateLocalizerSpec): this;
    format(value: FormatInput, format: string, culture: Culture): string;
  }
  declare export type BigCalendarProps<
    TEvent: Event = Event,
    TResource: { [key: string]: any } = { [key: string]: any }
  > = {
    localizer: DateLocalizer,
    date?: stringOrDate,
    now?: Date,
    view?: View,
    events?: TEvent[],
    onNavigate?: (newDate: Date, view: View, action: Navigate) => void,
    onView?: (view: View) => void,
    onDrillDown?: (date: Date, view: View) => void,
    onSelectSlot?: (slotInfo: {
      start: stringOrDate,
      end: stringOrDate,
      slots: Date[] | string[],
      action: "select" | "click" | "doubleClick"
    }) => void,
    onDoubleClickEvent?: (
      event: TEvent,
      e: React.SyntheticEvent<HTMLElement>
    ) => void,
    onSelectEvent?: (
      event: TEvent,
      e: React.SyntheticEvent<HTMLElement>
    ) => void,
    onSelecting?: (range: {
      start: stringOrDate,
      end: stringOrDate
    }) => boolean | void | null,
    onRangeChange?: (range: {
      start: stringOrDate,
      end: stringOrDate
    }) => void,
    selected?: any,
    views?: Views,
    drilldownView?: View | null,
    getDrilldownView?:
      | ((
          targetDate: Date,
          currentViewName: View,
          configuredViewNames: View[]
        ) => void)
      | null,
    length?: number,
    toolbar?: boolean,
    popup?: boolean,
    popupOffset?:
      | number
      | {
          x: number,
          y: number
        },
    selectable?: boolean | "ignoreEvents",
    longPressThreshold?: number,
    step?: number,
    timeslots?: number,
    rtl?: boolean,
    eventPropGetter?: EventPropGetter<TEvent>,
    slotPropGetter?: SlotPropGetter,
    dayPropGetter?: DayPropGetter,
    showMultiDayTimes?: boolean,
    min?: stringOrDate,
    max?: stringOrDate,
    scrollToTime?: Date,
    culture?: string,
    formats?: Formats,
    components?: Components,
    messages?: Messages,
    titleAccessor?: $Keys<TEvent> | ((event: TEvent) => string),
    allDayAccessor?: $Keys<TEvent> | ((event: TEvent) => boolean),
    startAccessor?: $Keys<TEvent> | ((event: TEvent) => Date),
    endAccessor?: $Keys<TEvent> | ((event: TEvent) => Date),
    resourceAccessor?: $Keys<TEvent> | ((event: TEvent) => any),
    resources?: TResource[],
    resourceIdAccessor?: $Keys<TResource> | ((resource: TResource) => any),
    resourceTitleAccessor?:
      | $Keys<TResource>
      | ((resource: TResource) => string),
    defaultView?: View,
    defaultDate?: Date,
    className?: string,
    elementProps?: React.HTMLAttributes<HTMLElement>
  } & React.Props<BigCalendar<TEvent, TResource>>;

  declare export interface ViewStatic {
    navigate(date: Date, action: Navigate, props: any): Date;
  }
  declare export interface MoveOptions {
    action: Navigate;
    date: Date;
    today: Date;
  }
  declare export default class BigCalendar<
    TEvent: Event = Event,
    TResource: { [key: string]: any } = { [key: string]: any }
  > mixins React.Component<BigCalendarProps<TEvent, TResource>> {
    components: {
      dateCellWrapper: React.ComponentType<>,
      dayWrapper: React.ComponentType<>,
      eventWrapper: React.ComponentType<>
    };

    /**
     * create DateLocalizer from globalize
     */
    static globalizeLocalizer(globalizeInstance: {
      [key: string]: any
    }): DateLocalizer;

    /**
     * create DateLocalizer from a moment
     */
    static momentLocalizer(momentInstance: {
      [key: string]: any
    }): DateLocalizer;

    /**
     * action constants for Navigate
     */
    static Navigate: {
      PREVIOUS: "PREV",
      NEXT: "NEXT",
      TODAY: "TODAY",
      DATE: "DATE"
    };

    /**
     * action constants for View
     */
    static Views: Record<ViewKey, View>;
    static move(View: ViewStatic | ViewKey, options: MoveOptions): Date;
  }
}
