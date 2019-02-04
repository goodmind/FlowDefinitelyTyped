declare module 'react-dates' {
        import typeof * as React from 'react';

	import typeof * as moment from 'moment';

	declare module.exports: typeof ReactDates

	declare type momentPropTypes$momentObj = moment.Moment;

declare type momentPropTypes$momentString = any;

declare type momentPropTypes$momentDurationObj = any;
	
      declare var npm$namespace$ReactDates: {
        
        DateRangePicker: typeof ReactDates$DateRangePicker,
DayPickerRangeController: typeof ReactDates$DayPickerRangeController,
DayPickerSingleDateController: typeof ReactDates$DayPickerSingleDateController,
SingleDatePicker: typeof ReactDates$SingleDatePicker,
isInclusivelyAfterDay: typeof ReactDates$isInclusivelyAfterDay,
isInclusivelyBeforeDay: typeof ReactDates$isInclusivelyBeforeDay,
isNextDay: typeof ReactDates$isNextDay,
isSameDay: typeof ReactDates$isSameDay,
toISODateString: typeof ReactDates$toISODateString,
toLocalizedDateString: typeof ReactDates$toLocalizedDateString,
toMomentObject: typeof ReactDates$toMomentObject,
      }
declare type ReactDates$AnchorDirectionShape = "left" | "right";

declare type ReactDates$CalendarInfoPositionShape = "top" | "bottom" | "before" | "after";

declare interface ReactDates$DateRangePickerShape {
startDate: momentPropTypes$momentPropTypes$momentObj | null,
startDateId: string,
endDate: momentPropTypes$momentPropTypes$momentObj | null,
endDateId: string,
focusedInput: ReactDates$FocusedInputShape | null,
onDatesChange: (
arg: {
startDate: momentPropTypes$momentPropTypes$momentObj | null,
endDate: momentPropTypes$momentPropTypes$momentObj | null
}) => void,
onFocusChange: (arg: ReactDates$FocusedInputShape | null) => void,
onClose?: (
final: {
startDate: momentPropTypes$momentPropTypes$momentObj,
endDate: momentPropTypes$momentPropTypes$momentObj
}) => void,
startDatePlaceholderText?: string,
endDatePlaceholderText?: string,
disabled?: ReactDates$DisabledShape,
required?: boolean,
readOnly?: boolean,
screenReaderInputMessage?: string,
showClearDates?: boolean,
showDefaultInputIcon?: boolean,
inputIconPosition?: ReactDates$IconPositionShape,
customInputIcon?: string | JSX.Element,
customArrowIcon?: string | JSX.Element,
customCloseIcon?: string | JSX.Element,
noBorder?: boolean,
block?: boolean,
small?: boolean,
regular?: boolean,
keepFocusOnInput?: boolean,
renderMonthText?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
renderMonthElement?: (
props: {
month: momentPropTypes$momentPropTypes$momentObj,
onMonthSelect: (
currentMonth: momentPropTypes$momentPropTypes$momentObj,
newMonthVal: string) => void,
onYearSelect: (
currentMonth: momentPropTypes$momentPropTypes$momentObj,
newYearVal: string) => void
}) => string | JSX.Element,
orientation?: ReactDates$OrientationShape,
anchorDirection?: ReactDates$AnchorDirectionShape,
openDirection?: ReactDates$OpenDirectionShape,
horizontalMargin?: number,
withPortal?: boolean,
withFullScreenPortal?: boolean,
appendToBody?: boolean,
disableScroll?: boolean,
daySize?: number,
isRTL?: boolean,
firstDayOfWeek?: ReactDates$DayOfWeekShape,
initialVisibleMonth?: () => momentPropTypes$momentPropTypes$momentObj,
numberOfMonths?: number,
keepOpenOnDateSelect?: boolean,
reopenPickerOnClearDates?: boolean,
renderCalendarInfo?: () => string | JSX.Element,
calendarInfoPosition?: ReactDates$CalendarInfoPositionShape,
hideKeyboardShortcutsPanel?: boolean,
verticalHeight?: number,
transitionDuration?: number,
verticalSpacing?: number,
navPrev?: string | JSX.Element,
navNext?: string | JSX.Element,
onPrevMonthClick?: (newCurrentMonth: momentPropTypes$momentPropTypes$momentObj) => void,
onNextMonthClick?: (newCurrentMonth: momentPropTypes$momentPropTypes$momentObj) => void,
renderCalendarDay?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
renderDayContents?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
minimumNights?: number,
enableOutsideDays?: boolean,
isDayBlocked?: (day: any) => boolean,
isOutsideRange?: (day: any) => boolean,
isDayHighlighted?: (day: any) => boolean,
displayFormat?: string | (() => string),
monthFormat?: string,
weekDayFormat?: string,
phrases?: ReactDates$DateRangePickerPhrases,
dayAriaLabelFormat?: string
} 

declare type ReactDates$DayOfWeekShape = 0
| 1
| 2
| 3
| 4
| 5
| 6;

declare type ReactDates$DisabledShape = boolean | "startDate" | "endDate";

declare type ReactDates$FocusedInputShape = "startDate" | "endDate";

declare type ReactDates$IconPositionShape = "before" | "after";

declare type ReactDates$OpenDirectionShape = "down" | "up";

declare type ReactDates$OrientationShape = "horizontal" | "vertical";

declare type ReactDates$ScrollableOrientationShape = "horizontal" | "vertical" | "verticalScrollable";

declare interface ReactDates$SingleDatePickerShape {
id: string,
date: momentPropTypes$momentPropTypes$momentObj | null,
focused: boolean,
onDateChange: (date: momentPropTypes$momentPropTypes$momentObj | null) => void,
onFocusChange: (arg: {
focused: boolean | null
}) => void,
placeholder?: string,
disabled?: boolean,
required?: boolean,
readOnly?: boolean,
screenReaderInputMessage?: string,
showClearDate?: boolean,
customCloseIcon?: string | JSX.Element,
showDefaultInputIcon?: boolean,
inputIconPosition?: ReactDates$IconPositionShape,
customInputIcon?: string | JSX.Element,
noBorder?: boolean,
block?: boolean,
small?: boolean,
regular?: boolean,
verticalSpacing?: number,
keepFocusOnInput?: boolean,
renderMonthText?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
renderMonthElement?: (
props: {
month: momentPropTypes$momentPropTypes$momentObj,
onMonthSelect: (
currentMonth: momentPropTypes$momentPropTypes$momentObj,
newMonthVal: string) => void,
onYearSelect: (
currentMonth: momentPropTypes$momentPropTypes$momentObj,
newYearVal: string) => void
}) => string | JSX.Element,
orientation?: ReactDates$OrientationShape,
anchorDirection?: ReactDates$AnchorDirectionShape,
openDirection?: ReactDates$OpenDirectionShape,
horizontalMargin?: number,
withPortal?: boolean,
withFullScreenPortal?: boolean,
appendToBody?: boolean,
disableScroll?: boolean,
initialVisibleMonth?: () => momentPropTypes$momentPropTypes$momentObj,
firstDayOfWeek?: ReactDates$DayOfWeekShape,
numberOfMonths?: number,
keepOpenOnDateSelect?: boolean,
reopenPickerOnClearDates?: boolean,
renderCalendarInfo?: () => string | JSX.Element,
calendarInfoPosition?: ReactDates$CalendarInfoPositionShape,
hideKeyboardShortcutsPanel?: boolean,
daySize?: number,
isRTL?: boolean,
verticalHeight?: number | null,
transitionDuration?: number,
navPrev?: string | JSX.Element,
navNext?: string | JSX.Element,
onPrevMonthClick?: (newCurrentMonth: momentPropTypes$momentPropTypes$momentObj) => void,
onNextMonthClick?: (newCurrentMonth: momentPropTypes$momentPropTypes$momentObj) => void,
onClose?: (
final: {
startDate: momentPropTypes$momentPropTypes$momentObj,
endDate: momentPropTypes$momentPropTypes$momentObj
}) => void,
renderCalendarDay?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
renderDayContents?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
enableOutsideDays?: boolean,
isDayBlocked?: (day: any) => boolean,
isOutsideRange?: (day: any) => boolean,
isDayHighlighted?: (day: any) => boolean,
displayFormat?: string | (() => string),
monthFormat?: string,
weekDayFormat?: string,
phrases?: ReactDates$SingleDatePickerPhrases,
dayAriaLabelFormat?: string
} 

declare type ReactDates$DateRangePickerPhrases = {
calendarLabel?: string,
closeDatePicker?: string,
clearDates?: string,
focusStartDate?: string,
jumpToPrevMonth?: string,
jumpToNextMonth?: string,
keyboardShortcuts?: string,
showKeyboardShortcutsPanel?: string,
hideKeyboardShortcutsPanel?: string,
openThisPanel?: string,
enterKey?: string,
leftArrowRightArrow?: string,
upArrowDownArrow?: string,
pageUpPageDown?: string,
homeEnd?: string,
escape?: string,
questionMark?: string,
selectFocusedDate?: string,
moveFocusByOneDay?: string,
moveFocusByOneWeek?: string,
moveFocusByOneMonth?: string,
moveFocustoStartAndEndOfWeek?: string,
returnFocusToInput?: string,
keyboardNavigationInstructions?: string,
chooseAvailableStartDate?: (date: string) => string,
chooseAvailableEndDate?: (date: string) => string,
dateIsUnavailable?: (date: string) => string,
dateIsSelected?: (date: string) => string
};

declare type ReactDates$DateRangePickerInputPhrases = {
focusStartDate?: string,
clearDates?: string,
keyboardNavigationInstructions?: string
};

declare type ReactDates$SingleDatePickerPhrases = {
calendarLabel?: string,
closeDatePicker?: string,
clearDate?: string,
jumpToPrevMonth?: string,
jumpToNextMonth?: string,
keyboardShortcuts?: string,
showKeyboardShortcutsPanel?: string,
hideKeyboardShortcutsPanel?: string,
openThisPanel?: string,
enterKey?: string,
leftArrowRightArrow?: string,
upArrowDownArrow?: string,
pageUpPageDown?: string,
homeEnd?: string,
escape?: string,
questionMark?: string,
selectFocusedDate?: string,
moveFocusByOneDay?: string,
moveFocusByOneWeek?: string,
moveFocusByOneMonth?: string,
moveFocustoStartAndEndOfWeek?: string,
returnFocusToInput?: string,
keyboardNavigationInstructions?: string,
chooseAvailableDate?: (date: string) => string,
dateIsUnavailable?: (date: string) => string,
dateIsSelected?: (date: string) => string
};

declare type ReactDates$SingleDatePickerInputPhrases = {
clearDate?: string,
keyboardNavigationInstructions?: string
};

declare type ReactDates$DayPickerPhrases = {
calendarLabel?: string,
jumpToPrevMonth?: string,
jumpToNextMonth?: string,
keyboardShortcuts?: string,
showKeyboardShortcutsPanel?: string,
hideKeyboardShortcutsPanel?: string,
openThisPanel?: string,
enterKey?: string,
leftArrowRightArrow?: string,
upArrowDownArrow?: string,
pageUpPageDown?: string,
homeEnd?: string,
escape?: string,
questionMark?: string,
selectFocusedDate?: string,
moveFocusByOneDay?: string,
moveFocusByOneWeek?: string,
moveFocusByOneMonth?: string,
moveFocustoStartAndEndOfWeek?: string,
returnFocusToInput?: string,
chooseAvailableStartDate?: (date: string) => string,
chooseAvailableEndDate?: (date: string) => string,
chooseAvailableDate?: (date: string) => string,
dateIsUnavailable?: (date: string) => string,
dateIsSelected?: (date: string) => string
};

declare type ReactDates$DayPickerKeyboardShortcutsPhrases = {
keyboardShortcuts?: string,
showKeyboardShortcutsPanel?: string,
hideKeyboardShortcutsPanel?: string,
openThisPanel?: string,
enterKey?: string,
leftArrowRightArrow?: string,
upArrowDownArrow?: string,
pageUpPageDown?: string,
homeEnd?: string,
escape?: string,
questionMark?: string,
selectFocusedDate?: string,
moveFocusByOneDay?: string,
moveFocusByOneWeek?: string,
moveFocusByOneMonth?: string,
moveFocustoStartAndEndOfWeek?: string,
returnFocusToInput?: string
};

declare type ReactDates$DayPickerNavigationPhrases = {
jumpToPrevMonth?: string,
jumpToNextMonth?: string
};

declare type ReactDates$CalendarDayPhrases = {
chooseAvailableDate: (date: string) => string,
dateIsUnavailable: (date: string) => string,
dateIsSelected: (date: string) => string
};

declare type ReactDates$DateRangePicker = React.ClassicComponentClass<ReactDates$DateRangePickerShape>;

declare var ReactDates$DateRangePicker: React.ClassicComponentClass<ReactDates$DateRangePickerShape>;

declare type ReactDates$DayPickerRangeControllerShape = {
startDate: momentPropTypes$momentPropTypes$momentObj | null,
endDate: momentPropTypes$momentPropTypes$momentObj | null,
onDatesChange: (
arg: {
startDate: momentPropTypes$momentPropTypes$momentObj | null,
endDate: momentPropTypes$momentPropTypes$momentObj | null
}) => void,
focusedInput: ReactDates$FocusedInputShape,
onFocusChange: (arg: ReactDates$FocusedInputShape | null) => void,
startDateOffset?: (day: any) => any,
endDateOffset?: (day: any) => any,
onClose?: (
final: {
startDate: momentPropTypes$momentPropTypes$momentObj,
endDate: momentPropTypes$momentPropTypes$momentObj
}) => void,
keepOpenOnDateSelect?: boolean,
minimumNights?: number,
disabled?: ReactDates$DisabledShape,
isOutsideRange?: (day: any) => boolean,
isDayBlocked?: (day: any) => boolean,
isDayHighlighted?: (day: any) => boolean
} & ReactDates$DayPickerShape


declare type ReactDates$DayPickerRangeController = React.ClassicComponentClass<ReactDates$DayPickerRangeControllerShape>;

declare var ReactDates$DayPickerRangeController: React.ClassicComponentClass<ReactDates$DayPickerRangeControllerShape>;

declare interface ReactDates$DayPickerShape {
renderMonthText?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
renderMonthElement?: (
props: {
month: momentPropTypes$momentPropTypes$momentObj,
onMonthSelect: (
currentMonth: momentPropTypes$momentPropTypes$momentObj,
newMonthVal: string) => void,
onYearSelect: (
currentMonth: momentPropTypes$momentPropTypes$momentObj,
newYearVal: string) => void
}) => string | JSX.Element,
enableOutsideDays?: boolean,
numberOfMonths?: number,
orientation?: ReactDates$ScrollableOrientationShape,
withPortal?: boolean,
initialVisibleMonth?: () => momentPropTypes$momentPropTypes$momentObj,
firstDayOfWeek?: 0
| 1
| 2
| 3
| 4
| 5
| 6,
hideKeyboardShortcutsPanel?: boolean,
daySize?: number,
verticalHeight?: number,
noBorder?: boolean,
transitionDuration?: number,
navPrev?: string | JSX.Element,
navNext?: string | JSX.Element,
onPrevMonthClick?: (newCurrentMonth: momentPropTypes$momentPropTypes$momentObj) => void,
onNextMonthClick?: (newCurrentMonth: momentPropTypes$momentPropTypes$momentObj) => void,
onOutsideClick?: (e: any) => void,
renderCalendarDay?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
renderDayContents?: (day: momentPropTypes$momentPropTypes$momentObj) => string | JSX.Element,
renderCalendarInfo?: () => string | JSX.Element,
calendarInfoPosition?: ReactDates$CalendarInfoPositionShape,
onBlur?: () => void,
isFocused?: boolean,
showKeyboardShortcuts?: boolean,
monthFormat?: string,
weekDayFormat?: string,
phrases?: ReactDates$SingleDatePickerPhrases,
dayAriaLabelFormat?: string,
isRTL?: boolean
} 

declare type ReactDates$DayPickerSingleDateControllerShape = {
date: momentPropTypes$momentPropTypes$momentObj | null,
onDateChange: (date: momentPropTypes$momentPropTypes$momentObj | null) => void,
focused: boolean,
onFocusChange: (arg: {
focused: boolean | null
}) => void,
onClose?: (final: {
date: momentPropTypes$momentPropTypes$momentObj
}) => void,
keepOpenOnDateSelect?: boolean,
isOutsideRange?: (day: any) => boolean,
isDayBlocked?: (day: any) => boolean,
isDayHighlighted?: (day: any) => boolean
} & ReactDates$DayPickerShape


declare type ReactDates$DayPickerSingleDateController = React.ClassicComponentClass<ReactDates$DayPickerSingleDateControllerShape>;

declare var ReactDates$DayPickerSingleDateController: React.ClassicComponentClass<ReactDates$DayPickerSingleDateControllerShape>;

declare type ReactDates$SingleDatePicker = React.ClassicComponentClass<ReactDates$SingleDatePickerShape>;

declare var ReactDates$SingleDatePicker: React.ClassicComponentClass<ReactDates$SingleDatePickerShape>;

declare var ReactDates$isInclusivelyAfterDay: (a: moment.Moment, b: moment.Moment) => boolean;

declare var ReactDates$isInclusivelyBeforeDay: (a: moment.Moment, b: moment.Moment) => boolean;

declare var ReactDates$isNextDay: (a: moment.Moment, b: moment.Moment) => boolean;

declare var ReactDates$isSameDay: (a: moment.Moment, b: moment.Moment) => boolean;

declare var ReactDates$toISODateString: (
date: moment.MomentInput,
currentFormat: moment.MomentFormatSpecification) => string | null;

declare var ReactDates$toLocalizedDateString: (
date: moment.MomentInput,
currentFormat: moment.MomentFormatSpecification) => string | null;

declare var ReactDates$toMomentObject: (
dateString: moment.MomentInput,
customFormat: moment.MomentFormatSpecification) => moment.Moment | null;
    }
