declare interface gridster$GridsterConfig {
  columns?: number;
  pushing?: boolean;
  floating?: boolean;
  swapping?: boolean;
  width?: string;
  colWidth?: string;
  rowHeight?: string;
  margins?: number[];
  outerMargin?: boolean;
  isMobile?: boolean;
  mobileBreakPoint?: number;
  mobileModeEnabled?: boolean;
  minColumns?: number;
  minRows?: number;
  maxRows?: number;
  defaultSizeX?: number;
  defaultSizeY?: number;
  minSizeX?: number;
  maxSizeX?: number;
  minSizeY?: number;
  maxSizeY?: number;
  saveGridItemCalculatedHeightInMobile?: boolean;
  resizable?: {
    enabled?: boolean,
    handles?: string[],
    start?: (
      event: IAngularEvent,
      $element: IAugmentedJQuery,
      options: any
    ) => void,
    resize?: (
      event: IAngularEvent,
      $element: IAugmentedJQuery,
      options: any
    ) => void,
    stop?: (
      event: IAngularEvent,
      $element: IAugmentedJQuery,
      options: any
    ) => void
  };
  draggable?: {
    enabled?: boolean,
    scrollSensitivity?: number,
    scrollSpeed?: number,
    handle?: string,
    start?: (
      event: IAngularEvent,
      $element: IAugmentedJQuery,
      options: any
    ) => void,
    drag?: (
      event: IAngularEvent,
      $element: IAugmentedJQuery,
      options: any
    ) => void,
    stop?: (
      event: IAngularEvent,
      $element: IAugmentedJQuery,
      options: any
    ) => void
  };
}

declare interface gridster$StandardGridsterItem {
  sizeX: number;
  sizeY: number;
  row: number;
  col: number;
}
declare module "angular" {
}
declare module "angular-gridster" {
  import typeof * as angular from "angular";

  declare var exportedString: "gridster";
  declare export default typeof exportedString;
}
