declare module "react-native-calendars" {
  import typeof * as React from "react";

  import type { StyleProp, TextStyle, ViewStyle } from "react-native";

  declare export interface DateObject {
    day: number;
    dateString: string;
    month: number;
    timestamp: number;
    year: number;
  }
  declare export interface CalendarDot {
    key: string;
    color: string;
    selectedDotColor?: string;
    key: string;
    color: string;
    selectedDotColor?: string;
  }
  declare export interface CalendarThemeIdStyle {
    [themeId: string]: ViewStyle | TextStyle;
  }
  declare export interface CalendarTheme {
    arrowColor?: string;
    backgroundColor?: string;
    calendarBackground?: string;
    dayTextColor?: string;
    dotColor?: string;
    monthTextColor?: string;
    selectedDayBackgroundColor?: string;
    selectedDayTextColor?: string;
    selectedDotColor?: string;
    textDayFontFamily?: string;
    textDayFontSize?: number;
    textDayHeaderFontFamily?: string;
    textDayHeaderFontSize?: number;
    textDisabledColor?: string;
    textMonthFontFamily?: string;
    textMonthFontWeight?: string;
    textMonthFontSize?: number;
    textSectionTitleColor?: string;
    todayTextColor?: string;
    "stylesheet.calendar.header"?: CalendarThemeIdStyle;
    "stylesheet.calendar.main"?: CalendarThemeIdStyle;
    "stylesheet.calendar-list.main"?: CalendarThemeIdStyle;
    "stylesheet.agenda.main"?: CalendarThemeIdStyle;
    "stylesheet.agenda.list"?: CalendarThemeIdStyle;
    "stylesheet.day.basic"?: CalendarThemeIdStyle;
    "stylesheet.day.single"?: CalendarThemeIdStyle;
    "stylesheet.day.multiDot"?: CalendarThemeIdStyle;
    "stylesheet.day.period"?: CalendarThemeIdStyle;
  }
  declare export type DateCallbackHandler = (date: DateObject) => void;
  declare export type TCalendarDate =
    | Date
    | DateObject
    | number
    | string
    | XDate;
  declare export interface MarkedDateCustomStyles {
    container: StyleProp<ViewStyle>;
    text: StyleProp<TextStyle>;
  }
  declare export interface CustomMarking {
    customStyles: MarkedDateCustomStyles;
  }
  declare export interface DotMarking {
    activeOpacity?: number;
    disabled?: boolean;
    disableTouchEvent?: boolean;
    dotColor?: string;
    marked?: boolean;
    selected?: boolean;
    selectedColor?: string;
  }
  declare export interface MultiDotMarking {
    disabled?: boolean;
    dots: CalendarDot[];
    selected?: boolean;
    selectedColor?: string;
  }
  declare export interface MultiPeriodMarking {
    periods: Array<{
      startingDay?: boolean,
      endingDay?: boolean,
      color?: string
    }>;
  }
  declare export interface PeriodMarking {
    textColor?: string;
    startingDay?: boolean;
    color?: string;
    selected?: boolean;
    endingDay?: boolean;
    disabled?: boolean;
  }
  declare export type Marking =
    | CustomMarking
    | DotMarking
    | MultiDotMarking
    | MultiPeriodMarking
    | PeriodMarking;
  declare export interface CustomMarkingProps {
    markingType: "custom";
    markedDates: {
      [date: string]: CustomMarking
    };
  }
  declare export interface DotMarkingProps {
    markingType?: "simple";
    markedDates: {
      [date: string]: DotMarking
    };
  }
  declare export interface MultiDotMarkingProps {
    markingType: "multi-dot";
    markedDates: {
      [date: string]: MultiDotMarking
    };
  }

  /**
   * This type of marking is only fully supported by <Calendar/> as it will expand the height
   * of the component
   */
  declare export interface MultiPeriodMarkingProps {
    markingType: "multi-period";
    markedDates: {
      [date: string]: MultiPeriodMarking
    };
  }
  declare export interface PeriodMarkingProps {
    markingType: "period";
    markedDates: {
      [date: string]: PeriodMarking
    };
  }
  declare export type CalendarMarkingProps =
    | MultiDotMarkingProps
    | DotMarkingProps
    | PeriodMarkingProps
    | MultiPeriodMarkingProps
    | CustomMarkingProps
    | {};
  declare export interface DayComponentProps {
    date: DateObject;
    marking: false | Marking[];
    onPress: () => any;
    onLongPress: () => any;
    state: "" | "selected" | "disabled" | "today";
    theme: CalendarTheme;
  }
  declare export interface CalendarBaseProps {
    /**
     * Initially visible month. Default = Date()
     */
    current?: TCalendarDate;

    /**
     * Provide custom day rendering component.
     */
    dayComponent?:
      | React.Component<DayComponentProps>
      | React.SFC<DayComponentProps>;

    /**
     * Disable days by default. Default = false
     */
    disabledByDefault?: boolean;

    /**
     * If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
     * day from another month that is visible in calendar page. Default = false
     */
    disableMonthChange?: boolean;

    /**
     * Display loading indicator. Default = false
     */
    displayLoadingIndicator?: boolean;

    /**
     * If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
     */
    firstDay?: number;

    /**
     * Hide month navigation arrows. Default = false
     */
    hideArrows?: boolean;

    /**
     * Hide day names. Default = false
     */
    hideDayNames?: boolean;

    /**
     * Do not show days of other months in month page. Default = false
     */
    hideExtraDays?: boolean;

    /**
     * Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
     */
    maxDate?: TCalendarDate;

    /**
     * Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
     */
    minDate?: TCalendarDate;

    /**
     * Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
     */
    monthFormat?: string;

    /**
     * Handler which gets executed on day press. Default = undefined
     */
    onDayPress?: DateCallbackHandler;

    /**
     * Handler which gets executed on day long press. Default = undefined
     */
    onDayLongPress?: DateCallbackHandler;

    /**
     * Handler which gets executed when press arrow icon left. It receive a callback can go back month
     */
    onPressArrowLeft?: (substractMonth: () => void) => void;

    /**
     * Handler which gets executed when press arrow icon left. It receive a callback can go next month
     */
    onPressArrowRight?: (addMonth: () => void) => void;

    /**
     * Handler which gets executed when visible month changes in calendar. Default = undefined
     */
    onMonthChange?: DateCallbackHandler;

    /**
     * Callback which gets executed when visible months change in scroll view. Default = undefined
     */
    onVisibleMonthsChange?: (months: DateObject[]) => void;

    /**
     * Replace default arrows with custom ones (direction can be 'left' or 'right')
     */
    renderArrow?: (direction: "left" | "right") => React.ReactNode;

    /**
     * Show week numbers to the left. Default = false
     */
    showWeekNumbers?: boolean;

    /**
     * Calendar container style.
     */
    style?: StyleProp<ViewStyle>;

    /**
     * Specify theme properties to override specific styles for calendar parts. Default = {}
     */
    theme?: CalendarTheme;
  }
  declare export class Calendar
    mixins React.Component<CalendarMarkingProps & CalendarBaseProps> {}
  declare export type CalendarListBaseProps = {
    /**
     * Set custom calendar heigth.
     */
    calendarHeight?: number,

    /**
     * Set custom calendar width.
     */
    calendarWidth?: number,

    /**
     * Max amount of months allowed to scroll to the future. Default = 50
     */
    futureScrollRange?: number,

    /**
     * Enable horizontal scrolling, default = false
     */
    horizontal?: boolean,

    /**
     * Enable paging on horizontal, default = false
     */
    pagingEnabled?: boolean,

    /**
     * Max amount of months allowed to scroll to the past. Default = 50
     */
    pastScrollRange?: number,

    /**
     * Enable or disable scrolling of calendar list
     */
    scrollEnabled?: boolean,

    /**
     * When true, the calendar list scrolls to top when the status bar is tapped. Default = true
     */
    scrollsToTop?: boolean,

    /**
     * Enable or disable vertical scroll indicator. Default = false
     */
    showScrollIndicator?: boolean,

    /**
     * Initially selected day
     */
    selected?: string
  } & CalendarBaseProps;

  declare export class CalendarList
    mixins React.Component<CalendarMarkingProps & CalendarListBaseProps> {}
  declare export type AgendaThemeStyle = {
    agendaDayNumColor?: string,
    agendaDayTextColor?: string,
    agendaKnobColor?: string,
    agendaTodayColor?: string
  } & CalendarTheme;

  declare export interface AgendaItemsMap<TItem> {
    [date: string]: TItem[];
  }
  declare export interface AgendaProps<TItem> {
    /**
     * Display loading indicator. Default = false
     */
    displayLoadingIndicator?: boolean;

    /**
     * If firstDay = 1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
     */
    firstDay?: number;

    /**
     * Max amount of months allowed to scroll to the future. Default = 50
     */
    futureScrollRange?: number;

    /**
     * Hide knob button. Default = false
     */
    hideKnob?: boolean;

    /**
     * The list of items that have to be displayed in agenda. If you want to render item as empty date
     * the value of date key kas to be an empty array []. If there exists no value for date key it is
     * considered that the date in question is not yet loaded
     */
    items?: AgendaItemsMap<TItem>;

    /**
     * callback that gets called when items for a certain month should be loaded (month became visible)
     */
    loadItemsForMonth?: (date: DateObject) => void;

    /**
     * Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
     */
    maxDate?: TCalendarDate;

    /**
     * Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
     */
    minDate?: TCalendarDate;

    /**
     * Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
     */
    monthFormat?: string;

    /**
     * Handler which gets executed on day press. Default = undefined
     */
    onDayPress?: DateCallbackHandler;

    /**
     * Handler which gets executed when the calendar is opened or closed. Default = undefined
     */
    onCalendarToggled?: (calendarOpened: boolean) => void;

    /**
     * Handler that gets called when day changes while scrolling agenda list. Default = undefined
     */
    onDayChange?: DateCallbackHandler;

    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality.
     * Make sure to also set the refreshing prop correctly. Default = undefined
     */
    onRefresh?: () => void;

    /**
     * Max amount of months allowed to scroll to the past. Default = 50
     */
    pastScrollRange?: number;

    /**
     * A RefreshControl component, used to provide pull-to-refresh funtionality for the ScrollView.
     */
    refreshControl?: React.ReactNode;

    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing?: boolean;

    /**
     * Specify how each day should be rendered.
     * Date can be undefined if the item has not property date.
     */
    renderDay?: (date: DateObject | void, item: TItem) => React.ReactNode;

    /**
     * Specify what should be rendered instead of ActivityIndicator
     */
    renderEmptyData?: () => React.ReactNode;

    /**
     * Specify how empty date content with no items should be rendered.
     */
    renderEmptyDate: () => React.ReactNode;

    /**
     * Specify how each item should be rendered in agenda.
     */
    renderItem: (item: TItem, firstDayInDay: boolean) => React.ReactNode;

    /**
     * Specify how agenda knob should look like.
     */
    renderKnob?: () => React.ReactNode;

    /**
     * specify your item comparison function for increased performance
     */
    rowHasChanged: (r1: TItem, r2: TItem) => boolean;

    /**
     * Initially visible month. Default = Date()
     */
    selected?: TCalendarDate;

    /**
     * Agenda container style.
     */
    style?: StyleProp<ViewStyle>;

    /**
     * Specify theme properties to override specific styles for agenda parts. Default = {}
     */
    theme?: AgendaThemeStyle;
  }
  declare export class Agenda<TItem>
    mixins React.Component<AgendaProps<TItem> & CalendarMarkingProps> {}
}
