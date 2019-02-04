declare module 'angular-bootstrap-calendar' {
        import typeof * as moment from 'moment';

	import typeof * as angular from 'angular';

	declare module 'angular' {
        declare interface calendar$IEventAction {

/**
 * The label of the action
 */
label: string,

/**
 * CSS class to be added to the action element
 */
cssClass?: string,

/**
 * The action that occurs when it's clicked
 * @param args - the IEvent whose action was clicked
 */
onClick: (args: any) => void
} 

declare interface calendar$IEventColor {

/**
 * The primary color of the event, should be darker than secondary
 */
primary: string,

/**
 * The secondary color of the event, should be lighter than primary
 */
secondary: string
} 

declare interface calendar$IEvent {

/**
 * The title of the event
 */
title: string,

/**
 * The type of the event (determines its color). Can be important, warning, info, inverse, success or special
 */
type?: string,

/**
 * A javascript date object for when the event starts
 */
startsAt: Date,

/**
 * Optional - a javascript date object for when the event ends
 */
endsAt?: Date,

/**
 * Color of the Event
 */
color?: calendar$IEventColor,

/**
 * Actions of the Event
 */
actions?: Array<calendar$IEventAction>,

/**
 * If edit-event-html is set and this field is explicitly set to false then dont make it editable.
 */
editable?: boolean,

/**
 * If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
 */
deletable?: boolean,

/**
 * Allow an event to be dragged and dropped
 */
draggable?: boolean,

/**
 * Allow an event to be resizable
 */
resizable?: boolean,

/**
 * If set to false then will not count towards the badge total amount on the month and year view
 */
incrementsBadgeTotal?: boolean,

/**
 * If set the event will recur on the given period. Valid values are year or month
 */
recursOn?: string,

/**
 * A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
 */
cssClass?: string,

/**
 * If set the event will display as all-day event
 */
allDay?: boolean
} 

declare interface calendar$ICalendarConfig {
allDateFormats: {
angular: calendar$IFormats,
moment: calendar$IFormats
},
dateFormats: calendar$IDateFormats,
titleFormats: calendar$ITitleFormats,
dateFormatter: string,
displayEventEndTimes: boolean,
showTimesOnWeekView: boolean,
displayAllMonthEvents: boolean,
i18nStrings: {
weekNumber: string
},
templates: {
calendarDayView: string,
calendarHourList: string,
calendarMonthCell: string,
calendarMonthCellEvents: string,
calendarMonthView: string,
calendarSlideBox: string,
calendarWeekView: string,
calendarYearView: string
}
} 

declare interface calendar$IFormats {
date: calendar$IDateFormats,
title: calendar$ITitleFormats
} 

declare interface calendar$IDateFormats {
hour: string,
day: string,
month: string,
weekDay: string,
time: string,
datetime: string
} 

declare interface calendar$ITitleFormats {
day: string,
week: string,
month: string,
year: string
} 

declare interface calendar$ICalendarCell {
label: number,
date: moment.Moment,
inMonth: boolean,
isPast: boolean,
isToday: boolean,
isFuture: boolean,
isWeekend: boolean,
events: calendar$IEvent[],
badgeTotal: number
} 

declare interface events$IOnEventClick {
(calendarEvent: calendar$IEvent): void
} 

declare interface events$IOnEventTimesChanged {
(calendarEvent: calendar$IEvent, calendarNewEventStart: Date, calendarNewEventEnd: Date): void
} 

declare interface events$IOnEditEventClick {
(calendarEvent: calendar$IEvent): void
} 

declare interface events$IOnDeleteEventClick {
(calendarEvent: calendar$IEvent): void
} 

declare interface events$IOnTimespanClick {
(calendarDate: Date, calendarCell: calendar$ICalendarCell): void
} 

declare interface events$IOnViewChangeClick {
(calendarDate: Date, calendarNextView: string): boolean
} 
    }

    }
