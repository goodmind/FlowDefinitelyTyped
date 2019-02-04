declare module 'react-calendar-heatmap' {
        import typeof * as React from 'react';

	declare export interface Props {
classForValue?: (value: any) => any,
endDate?: string | number | Date,
gutterSize?: number,
horizontal?: boolean,
monthLabels?: string[],
numDays?: number,
onClick?: (value: any) => void,
onMouseLeave?: (e: any, value: any) => void,
onMouseOver?: (e: any, value: any) => void,
showMonthLabels?: boolean,
showOutOfRangeDays?: boolean,
showWeekdayLabels?: boolean,
startDate?: string | number | Date,
titleForValue?: (value: any) => any,
tooltipDataAttrs?: {[key: string]: any},
transformDayElement?: (rect: any, value: any, index: number) => any,
values: any[],
weekdayLabels?: string[]
} 
	declare export default class ReactCalendarHeatmap mixins React.Component<Props> {}
    }
