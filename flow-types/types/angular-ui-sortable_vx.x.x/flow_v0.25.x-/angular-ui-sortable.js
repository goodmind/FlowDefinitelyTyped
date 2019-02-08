declare type ui$UISortableOptions<T> = {
  "ui-floating"?: "auto" | boolean
} & ui$SortableOptions<T>;

declare interface ui$UISortableProperties<T> {
  /**
   * Holds the index of the drop target that the dragged item was dropped.
   */
  dropindex: number;

  /**
   * Holds the ui-sortable element that the dragged item was dropped on.
   */
  droptarget: number;

  /**
   * Holds the array that is specified by the `ng-model` attribute of the [`droptarget`](#droptarget) ui-sortable element.
   */
  droptargetModel: Array<T>;

  /**
   * Holds the original index of the item dragged.
   */
  index: number;

  /**
   * Holds the JavaScript object that is used as the model of the dragged item, as specified by the ng-repeat of the [`source`](#source) ui-sortable element and the item's [`index`](#index).
   */
  model: T;

  /**
   * Holds the model of the dragged item only when a sorting happens between two connected ui-sortable elements.
   * In other words: `'moved' in ui.item.sortable` will return false only when a sorting is withing the same ui-sortable element ([`source`](#source) equals to the [`droptarget`](#droptarget)).
   */
  moved?: T;

  /**
   * When sorting between two connected sortables, it will be set to true inside the `update` callback of the [`droptarget`](#droptarget).
   */
  received: Boolean;

  /**
   * Holds the ui-sortable element that the dragged item originated from.
   */
  source: ng.IAugmentedJQuery;

  /**
   * Holds the array that is specified by the `ng-model` of the [`source`](#source) ui-sortable element.
   */
  sourceModel: Array<T>;

  /**
   * Can be called inside the `update` callback, in order to prevent/revert a sorting.
   * Should be used instead of the [jquery-ui-sortable cancel()](http://api.jqueryui.com/sortable/#method-cancel) method.
   */
  cancel(): void;

  /**
   * Returns whether the current sorting is marked as canceled, by an earlier call to [`ui.item.sortable.cancel()`](#cancel).
   */
  isCanceled(): Boolean;

  /**
   * Returns whether the [`helper`](http://api.jqueryui.com/sortable/#option-helper) element used for the current sorting, is one of the original ui-sortable list elements.
   */
  isCustomHelperUsed(): Boolean;
}

declare type ui$UISortableUIItem<T> = {
  sortable: ui$UISortableProperties<T>
} & Omit<ng.IAugmentedJQuery, "sortable">;

declare type ui$UISortableUIParams<T> = {
  item: ui$UISortableUIItem<T>
} & Omit<ui$SortableUIParams, "item">;

declare interface ui$SortableCursorAtOptions {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

declare interface ui$SortableHelperFunctionOption {
  (event: JQueryEventObject, ui: ng.IAugmentedJQuery): JQuery;
}

declare type ui$SortableOptions<T> = {
  /**
   * jQuery, Element, Selector or string
   * Default: "parent"
   */
  appendTo?: any,

  /**
   * "X", "Y" or false
   * Default: false
   */
  axis?: string | boolean,

  /**
   * Selector
   * Default: "input,textarea,button,select,option"
   */
  cancel?: string,

  /**
   * Selector or false
   * Default: false
   */
  connectWith?: string | boolean,

  /**
   * Element, Selector, string or false
   * Default: false
   */
  containment?: any,
  cursor?: string,

  /**
   * Moves the sorting element or helper so the cursor always appears to drag from the same position. Coordinates can be given as a hash using a combination of one or two keys SortableCursorAtOptions: { top, left, right, bottom }
   * Default: false
   */
  cursorAt?: ui$SortableCursorAtOptions | boolean,
  delay?: number,
  disabled?: boolean,
  distance?: number,
  dropOnEmpty?: boolean,
  forceHelperSize?: boolean,
  forcePlaceholderSize?: boolean,

  /**
   * Array of numbers or false
   * Default: false
   */
  grid?: number[] | boolean,

  /**
   * Selector or Element
   */
  handle?: any,

  /**
   * "original", "clone" or Function()
   * Default: "original"
   */
  helper?: string | ui$SortableHelperFunctionOption,

  /**
   * Selector
   */
  items?: string,

  /**
   * Number or false
   * Default: false
   */
  opacity?: number | boolean,

  /**
   * string or false
   * Default: false
   */
  placeholder?: string | boolean,

  /**
   * boolean or number
   * Default: false
   */
  revert?: number | boolean,
  scroll?: boolean,
  scrollSensitivity?: number,
  scrollSpeed?: number,

  /**
   * "intersect" or "pointer"
   * Default: "intersect"
   */
  tolerance?: string,
  zIndex?: number
} & ui$SortableEvents<T>;

declare interface ui$SortableUIParams {
  helper: ng.IAugmentedJQuery;
  item: ng.IAugmentedJQuery;
  offset: any;
  position: any;
  originalPosition: any;
  sender: ng.IAugmentedJQuery;
  placeholder: ng.IAugmentedJQuery;
}

declare interface ui$SortableEvent<T> {
  (event: JQueryEventObject, ui: ui$UISortableUIParams<T>): void;
}

declare interface ui$SortableEvents<T> {
  activate?: ui$SortableEvent<T>;
  beforeStop?: ui$SortableEvent<T>;
  change?: ui$SortableEvent<T>;
  deactivate?: ui$SortableEvent<T>;
  out?: ui$SortableEvent<T>;
  over?: ui$SortableEvent<T>;
  receive?: ui$SortableEvent<T>;
  remove?: ui$SortableEvent<T>;
  sort?: ui$SortableEvent<T>;
  start?: ui$SortableEvent<T>;
  stop?: ui$SortableEvent<T>;
  update?: ui$SortableEvent<T>;
}
declare module "angular" {
}
declare module "angular-ui-sortable" {
  import typeof * as ng from "angular";

  declare type Omit<T, K: $Keys<T>> = Pick<
    T,
    $ElementType<
      $ObjMapi<T, <P>(P) => P> &
        $ObjMapi<{ [k: K]: any }, <P>(P) => empty> & {
          [x: string]: empty,
          [x: number]: empty
        },
      $Keys<T>
    >
  >;
}
