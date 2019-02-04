declare module 'react-daterange-picker' {
        import typeof * as React from 'react';

	import typeof * as moment from 'moment';

	import typeof * as momentRange from 'moment-range';

	declare export default class DateRangePicker mixins React.Component<Props> {}
	declare export type Props<T> = {
bemBlock?: string,
bemNamespace?: string,
dateStates?: DateState[],
defaultState?: string,
disableNavigation?: boolean,
firstOfWeek?: number,
helpMessage?: string,
initialFromValue?: boolean,
initialDate?: Date,
initialMonth?: number,
initialYear?: number,
initialRange?: {},
maximumDate?: Date,
minimumDate?: Date,
numberOfCalendars?: number,
onHighlightDate(date: Date): void,
onHighlightRange(date: Date): void,
onSelect(value: OnSelectCallbackParam): void,
onSelectStart(value: momentRange.MomentRangeExtends): void,
paginationArrowComponent?: React.ComponentClass<PaginationArrowProps> | React.SFC<PaginationArrowProps>,
selectedLabel?: string,
selectionType?: "single" | "range",
singleDateRange?: boolean,
showLegend?: boolean,
stateDefinitions?: StateDefinitions,
value?: momentRange.MomentRangeExtends | momentRange.DateRange | moment.Moment
} & React.Props<T>

	declare export interface DateState {
state: string,
range: momentRange.DateRange
} 
	declare export interface StateDefinitions {
[key: string]: StateDefinition
} 
	declare export interface StateDefinition {
color: string,
label: string,
selectable?: boolean
} 
	declare export type PaginationArrowProps<T> = {
disabled?: boolean,
onTrigger(): void,
direction?: "next" | "previous"
} & React.Props<T>

	declare export interface OnSelectCallbackParam {
start: moment.Moment,
end: moment.Moment
} 
    }
