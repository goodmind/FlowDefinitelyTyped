declare module "react-big-scheduler" {
  import typeof * as React from "react";

  import typeof * as moment from "moment";

  declare export class Scheduler mixins React.Component<SchedulerProps, any> {}
  declare export interface SchedulerProps {
    schedulerData: SchedulerData;
    prevClick(schedulerData: SchedulerData): void;
    nextClick(schedulerData: SchedulerData): void;
    onSelectDate(schedulerData: SchedulerData, date: string): void;
    onViewChange(schedulerData: SchedulerData, view: View): void;
  }
  declare export class SchedulerData {
    localeMoment(date: string): moment.Moment;
    cellUnit: $Values<typeof CellUnits>;
    viewType: $Values<typeof ViewTypes>;
    startDate: string;
    constructor(
      date?: string,
      viewType?: $Values<typeof ViewTypes>,
      showAgenda?: boolean,
      isEventPerspective?: boolean,
      newConfig?: SchedulerDataConfig,
      newBehaviours?: { [key: string]: any },
      localeMoment?: typeof moment
    ): this;
    setResources(resources: Resource[]): void;
    setEvents(events: Event[]): void;
    prev(): void;
    next(): void;
    setViewType(
      viewType?: $Values<typeof ViewTypes>,
      showAgenda?: boolean,
      isEventPerspective?: boolean
    ): void;
    setDate(date?: string): void;
  }

  declare export var CellUnits: {|
    +Day: 0, // 0
    +Hour: 1 // 1
  |};

  declare export var ViewTypes: {|
    +Day: 0, // 0
    +Week: 1, // 1
    +Month: 2, // 2
    +Quarter: 3, // 3
    +Year: 4, // 4
    +Custom: 5, // 5
    +Custom1: 6, // 6
    +Custom2: 7 // 7
  |};

  declare export interface View {
    viewName?: string;
    viewType: $Values<typeof ViewTypes>;
    showAgenda: boolean;
    isEventPerspective: boolean;
  }
  declare export interface Event {
    id: number;
    start: string;
    end: string;
    resourceId: string;
    title: string;
    bgColor?: string;
    rrule?: string;
  }
  declare export interface Resource {
    id: string;
    name: string;
  }
  declare export interface SchedulerDataConfig {
    schedulerWidth?: number | string;
    schedulerMaxHeight?: number;
    tableHeaderHeight?: number;
    agendaResourceTableWidth?: number;
    agendaMaxEventWidth?: number;
    dayResourceTableWidth?: number;
    weekResourceTableWidth?: number;
    monthResourceTableWidth?: number;
    yearResourceTableWidth?: number;
    quarterResourceTableWidth?: number;
    dayCellWidth?: number;
    weekCellWidth?: number;
    monthCellWidth?: number;
    yearCellWidth?: number;
    quarterCellWidth?: number;
    dayMaxEvents?: number;
    weekMaxEvents?: number;
    monthMaxEvents?: number;
    yearMaxEvents?: number;
    quarterMaxEvents?: number;
    eventItemHeight?: number;
    eventItemLineHeight?: number;
    nonAgendaSlotMinHeight?: number;
    dayStartFrom?: number;
    dayStopTo?: number;
    defaultEventBgColor?: string;
    selectedAreaColor?: string;
    nonWorkingTimeHeadColor?: string;
    nonWorkingTimeHeadBgColor?: string;
    nonWorkingTimeBodyBgColor?: string;
    summaryColor?: string;
    summaryPos?: $Values<typeof SummaryPos>;
    startResizable?: boolean;
    endResizable?: boolean;
    movable?: boolean;
    creatable?: boolean;
    crossResourceMove?: boolean;
    checkConflict?: boolean;
    scrollToSpecialMomentEnabled?: boolean;
    eventItemPopoverEnabled?: boolean;
    calendarPopoverEnabled?: boolean;
    recurringEventsEnabled?: boolean;
    headerEnabled?: boolean;
    displayWeekend?: boolean;
    relativeMove?: boolean;
    minuteStep?: number;
    views?: View[];
    resourceName?: string;
  }

  declare export var SummaryPos: {|
    +Top: 0, // 0
    +TopRight: 1, // 1
    +TopLeft: 2, // 2
    +Bottom: 3, // 3
    +BottomRight: 4, // 4
    +BottomLeft: 5 // 5
  |};

  declare export interface SchedulerDataBehaviors {
    isNonWorkingTimeFunc?: (
      schedulerData: SchedulerData,
      time: string
    ) => boolean;
    getCustomDateFunc?: (
      schedulerData: SchedulerData,
      num: number,
      date?: string
    ) => {
      startDate: string,
      endDate: string,
      cellUnit: $Values<typeof CellUnits>
    };
  }
}
