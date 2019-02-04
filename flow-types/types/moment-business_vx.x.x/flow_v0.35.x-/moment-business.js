declare module 'moment-business' {
        import typeof * as moment from 'moment';

	declare export function weekDays(startMoment: moment.Moment, endMoment: moment.Moment): number

	declare export function weekendDays(startMoment: moment.Moment, endMoment: moment.Moment): number

	declare export function addWeekDays(moment: moment.Moment, amount: number): moment.Moment

	declare export function subtractWeekDays(moment: moment.Moment, amount: number): moment.Moment

	declare export function isWeekDay(moment: moment.Moment): boolean

	declare export function isWeekendDay(moment: moment.Moment): boolean

    }
