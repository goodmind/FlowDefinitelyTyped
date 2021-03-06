declare module "jquery-sortable" {
  declare interface JQuerySortable$Position {
    top: number;
    left: number;
  }

  declare type JQuerySortable$Dimensions = number[];

  declare interface JQuerySortable$ContainerGroup {
    $document: JQuery;
    containerDimensions: JQuerySortable$Dimensions[];
    containers: JQuerySortable$Container[];
    delayMet: boolean;
    dragInitDone: boolean;
    dragProxy: any;
    dragging: boolean;
    dropProxy: any;
    item: JQuery;
    itemContainer: JQuerySortable$Container;
    lastAppendedItem: JQuery;
    lastPointer: JQuerySortable$Position;
    lastRelativePointer: JQuerySortable$Position;
    offsetParent: JQuery;
    options: JQuerySortable$Options;
    placeholder: JQuery;
    pointer: JQuerySortable$Position;
    relativePointer: JQuerySortable$Position;
    sameResultBox: {
      bottom: number,
      left: number,
      right: number,
      top: number
    };
    scrollProxy: any;
  }

  declare interface JQuerySortable$Container {
    el: JQuery;
    options: JQuerySortable$Options;
    group: JQuerySortable$ContainerGroup;
    rootGroup: JQuerySortable$ContainerGroup;
    handle: string;
    target: JQuery;
    itemDimensions: JQuerySortable$Dimensions[];
    items: HTMLElement[];
  }

  declare type JQuerySortable$GenericEventHandler = (
    $item?: JQuery,
    container?: JQuerySortable$Container,
    _super?: JQuerySortable$GenericEventHandler,
    event?: Event
  ) => void;

  declare type JQuerySortable$OnDragEventHandler = (
    $item?: JQuery,
    position?: JQuerySortable$Position,
    _super?: JQuerySortable$OnDragEventHandler,
    event?: Event
  ) => void;

  declare type JQuerySortable$OnMousedownHandler = (
    $item?: JQuery,
    _super?: JQuerySortable$OnMousedownHandler,
    event?: Event
  ) => void;

  declare type JQuerySortable$OnCancelHandler = (
    $item?: JQuery,
    container?: JQuerySortable$Container,
    _super?: JQuerySortable$OnCancelHandler,
    event?: Event
  ) => void;

  declare type JQuerySortable$SerializeFunc = (
    $parent: JQuery,
    $children: any,
    parentIsContainer: boolean
  ) => void;

  declare interface JQuerySortable$GroupOptions {
    afterMove?: (
      $placeholder: JQuery,
      container: JQuerySortable$Container,
      $closestItemOrContainer: JQuery
    ) => void;
    containerPath?: string;
    containerSelector?: string;
    distance?: number;
    delay?: number;
    handle?: string;
    itemPath?: string;
    itemSelector?: string;
    isValidTarget?: (
      $item: JQuery,
      container: JQuerySortable$Container
    ) => boolean;
    onCancel?: JQuerySortable$OnCancelHandler;
    onDrag?: JQuerySortable$OnDragEventHandler;
    onDragStart?: JQuerySortable$GenericEventHandler;
    onDrop?: JQuerySortable$GenericEventHandler;
    onMousedown?: JQuerySortable$OnMousedownHandler;
    placeholder?: JQuery | any[] | Element | string;
    pullPlaceholder?: boolean;
    serialize?: JQuerySortable$SerializeFunc;
    tolerance?: number;
  }

  declare interface JQuerySortable$ContainerOptions {
    drag?: boolean;
    drop?: boolean;
    exclude?: string;
    nested?: boolean;
    vertical?: boolean;
  }

  declare type JQuerySortable$Options = {
    group?: string
  } & JQuerySortable$GroupOptions &
    JQuerySortable$ContainerOptions;

  declare interface JQuery {
    sortable(methodName: "enable"): JQuery;
    sortable(methodName: "disable"): JQuery;
    sortable(methodName: "refresh"): JQuery;
    sortable(methodName: "destroy"): JQuery;
    sortable(methodName: "serialize"): JQuery;
    sortable(methodName: string): JQuery;
    sortable(options?: JQuerySortable$JQuerySortable$Options): JQuery;
  }
}
