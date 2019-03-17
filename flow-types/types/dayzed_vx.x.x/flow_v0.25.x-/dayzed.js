declare module "dayzed" {
  import type { Component, Node } from "react";

  declare export interface DateObj {
    date: Date;
    nextMonth: boolean;
    prevMonth: boolean;
    selectable: boolean;
    selected: boolean;
    today: boolean;
  }
  declare interface Calendar {
    firstDayOfMonth: Date;
    lastDayOfMonth: Date;
    month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    weeks: Array<Array<DateObj | "">>;
    year: number;
  }
  declare interface RenderProps {
    calendars: Calendar[];
    getBackProps: (data: {
      calendars: Calendar[],
      offset?: number
    }) => Record<string, any>;
    getForwardProps: (data: {
      calendars: Calendar[],
      offset?: number
    }) => Record<string, any>;
    getDateProps: (data: {
      dateObj: DateObj
    }) => Record<string, any>;
  }
  declare type RenderFn = (renderProps: RenderProps) => Node;
  declare interface Props {
    date?: Date;
    maxDate?: Date;
    minDate?: Date;
    monthsToDisplay?: number;
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    showOutsideDays?: boolean;
    selected?: Date | Date[];
    children?: RenderFn;
    render?: RenderFn;
    offset?: number;
    onOffsetChanged?: (offset: number) => void;
    onDateSelected(selectedDate: DateObj): void;
  }
  declare class Dayzed mixins Component<Props> {}
  declare export default typeof Dayzed;
}
