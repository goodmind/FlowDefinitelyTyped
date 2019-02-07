declare module "react-calendar-timeline" {
  declare export interface TimelineGroup {
    id: number;
    title: React.ReactNode;
    rightTitle?: React.ReactNode;
  }
  declare export interface TimelineItem {
    id: number;
    group: number;
    title?: React.ReactNode;
    start_time: any;
    end_time: any;
    canMove?: boolean;
    canResize?: boolean | "left" | "right" | "both";
    canChangeGroup?: boolean;
    className?: string;
    itemProps?: {};
  }
  declare export interface TimelineContext {
    visibletimeStart: number;
    visibleTimeEnd: number;
    timelineWidth: number;
  }
  declare export interface TimelineTimeSteps {
    second: number;
    minute: number;
    hour: number;
    day: number;
    month: number;
    year: number;
  }
  declare export interface TimelineHeaderLabelFormat {
    yearShort: string;
    yearLong: string;
    monthShort: string;
    monthMedium: string;
    monthMediumLong: string;
    monthLong: string;
    dayShort: string;
    dayLong: string;
    hourShort: string;
    hourMedium: string;
    hourMediumLong: string;
    hourLong: string;
    time: string;
  }
  declare export interface ReactCalendarTimelineProps {
    groups: TimelineGroup[];
    items: TimelineItem[];
    keys?: {
      groupIdKey: string,
      groupTitleKey: string,
      itemIdKey: string,
      itemTitleKey: string,
      itemGroupKey: string,
      itemTimeStartKey: string,
      itemTimeEndKey: string
    };
    defaultTimeStart?: any;
    defaultTimeEnd?: any;
    visibleTimeStart?: any;
    visibleTimeEnd?: any;
    selected?: number[];
    sidebarWidth?: number;
    sidebarContent?: React.ReactNode;
    rightSidebarWidth?: number;
    rightSidebarContent?: React.ReactNode;
    dragSnap?: number;
    minResizeWidth?: number;
    stickyOffset?: number;
    stickyHeader?: boolean;
    headerRef?: any;
    lineHeight?: number;
    headerLabelGroupHeight?: number;
    headerLabelHeight?: number;
    itemHeightRatio?: number;
    minZoom?: number;
    maxZoom?: number;
    clickTolerance?: number;
    canMove?: boolean;
    canChangeGroup?: boolean;
    canResize?: boolean | "left" | "right" | "both";
    useResizeHandle?: boolean;
    showCursorLine?: boolean;
    stackItems?: boolean;
    traditionalZoom?: boolean;
    itemTouchSendsClick?: boolean;
    timeSteps?: TimelineTimeSteps;
    onItemMove?: (
      itemId: number,
      dragTime: number,
      newGroupOrder: number
    ) => any;
    onItemResize?: (
      itemId: number,
      newResizeEnd: number,
      edge: "left" | "right"
    ) => any;
    onItemSelect?: (itemId: number, e: any, time: number) => any;
    onItemClick?: (itemId: number, e: any, time: number) => any;
    onItemDoubleClick?: (itemId: number, e: any, time: number) => any;
    onCanvasClick?: (groupId: number, time: number, e: any) => any;
    onCanvasDoubleClick?: (group: TimelineGroup, time: number, e: any) => any;
    onCanvasContextMenu?: (group: TimelineGroup, time: number, e: any) => any;
    onZoom?: (timelineContext: TimelineContext) => any;
    moveResizeValidator?: (
      action: "move" | "resize",
      itemId: number,
      time: number,
      resizeEdge: "left" | "right"
    ) => any;
    headerLabelFormats?: TimelineHeaderLabelFormat;
    subHeaderLabelFormats?: TimelineHeaderLabelFormat;
    onTimeChange?: (
      visibleTimeStart: number,
      visibleTimeEnd: number,
      updateScrollCanvas: (start: number, end: number) => void
    ) => any;
    onTimeInit?: (canvasTimeStart: number, canvasTimeEnd: number) => any;
    onBoundsChange?: (canvasTimeStart: number, canvasTimeEnd: number) => any;
    itemRenderer?: (props: {
      item: TimelineItem,
      context: TimelineContext
    }) => React.ReactElement<{}>;
    groupRenderer?: (props: {
      group: TimelineGroup,
      isRightSidebar: boolean
    }) => React.ReactElement<{}>;
    minimumWidthForItemContentVisibility?: number;
    children?: any;
  }
  declare export var defaultHeaderLabelFormats: TimelineHeaderLabelFormat;
  declare export var defaultSubHeaderLabelFormats: TimelineHeaderLabelFormat;
  declare var ReactCalendarTimeline: React.ClassicComponentClass<ReactCalendarTimelineProps>;
  declare export default typeof ReactCalendarTimeline;
}
