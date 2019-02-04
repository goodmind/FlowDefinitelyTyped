declare module 'moment-range' {
        declare export class DateRange  {
start: moment.Moment;
end: moment.Moment;
constructor(range: string | Date[] | moment.Moment[]): this;
constructor(start: Date | moment.Moment, end: Date | moment.Moment): this;
contains(
other: DateRange | moment.Moment | Date,
options?: {
exclusive?: boolean
}): boolean;
overlaps(range: DateRange, options?: {
adjacent?: boolean
}): boolean;
intersect(other: DateRange): DateRange;
add(other: DateRange, options?: {
adjacent?: boolean
}): DateRange;
subtract(other: DateRange): DateRange[];
by(
interval: moment.unitOfTime.Diff,
options?: {
exclusive?: boolean,
step?: number
}): Iterable<moment.Moment>;
byRange(
interval: DateRange,
options?: {
exclusive?: boolean,
step?: number
}): Iterable<moment.Moment>;
isSame(other: DateRange): boolean;
diff(unit?: moment.unitOfTime.Diff, rounded?: boolean): number;
toDate(): Date[];
toString(): string;
valueOf(): number;
center(): moment.Moment;
clone(): DateRange;
isEqual(other: DateRange): boolean;
adjacent(other: DateRange): boolean;
duration(unit?: moment.unitOfTime.Diff, precise?: boolean): number;
reverseBy(
interval: moment.unitOfTime.Diff,
options?: {
exclusive?: boolean,
step?: number
}): Iterable<moment.Moment>;
reverseByRange(
interval: DateRange,
options?: {
exclusive?: boolean,
step?: number
}): Iterable<moment.Moment>
}
	declare export interface MomentRangeMethods {
range(range: string | Date[] | moment.Moment[]): DateRange,
range(start: Date | moment.Moment, end: Date | moment.Moment): DateRange,
isRange(range: any): boolean,
within(range: DateRange): boolean
} 
	declare export type MomentRangeExtends = {
(...args: any[]): MomentRangeMethods & moment.Moment
} & MomentRangeMethods

	declare export function extendMoment(
momentInstance: moment.Moment | typeof moment): MomentRangeExtends & moment.Moment

    }
