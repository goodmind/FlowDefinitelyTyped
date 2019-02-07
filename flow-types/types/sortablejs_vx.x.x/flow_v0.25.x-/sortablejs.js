declare module "sortablejs" {
  declare module.exports: typeof Sortable;

  declare class Sortable {
    options: Sortable$Sortable$Options;
    el: HTMLElement;

    /**
     * Sortable's main constructor.
     * @param element Any variety of HTMLElement.
     * @param options Sortable options object.
     */
    constructor(element: HTMLElement, options: Sortable$Sortable$Options): this;
    static active: Sortable;
    static utils: Sortable$Sortable$Utils;

    /**
     * Creation of new instances.
     * @param element Any variety of HTMLElement.
     * @param options Sortable options object.
     */
    static create(
      element: HTMLElement,
      options: Sortable$Sortable$Options
    ): Sortable;

    /**
     * Options getter/setter
     * @param name a Sortable.Options property.
     * @param value a value.
     */
    option<K: $Keys<Sortable$Sortable$Options>>(
      name: K,
      value: $ElementType<Sortable$Sortable$Options, K>
    ): void;
    option<K: $Keys<Sortable$Sortable$Options>>(
      name: K
    ): $ElementType<Sortable$Sortable$Options, K>;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param element an HTMLElement or selector string.
     * @param selector default: `options.draggable`
     */
    closest(element: HTMLElement, selector?: string): HTMLElement | null;

    /**
     * Sorts the elements according to the array.
     * @param order an array of strings to sort.
     */
    sort(order: $ReadOnlyArray<string>): void;

    /**
     * Saving and restoring of the sort.
     */
    save(): void;

    /**
     * Removes the sortable functionality completely.
     */
    destroy(): void;

    /**
     * Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
     */
    toArray(): string[];
  }
  declare export type Sortable$SortableEvent = {
    clone: HTMLElement,

    /**
     * previous list
     */
    from: HTMLElement,

    /**
     * dragged element
     */
    item: HTMLElement,

    /**
     * new index within parent
     */
    newIndex: number | void,

    /**
     * old index within parent
     */
    oldIndex: number | void,
    target: HTMLElement,

    /**
     * list, in which moved element.
     */
    to: HTMLElement
  } & Event;

  declare export type Sortable$MoveEvent = {
    dragged: HTMLElement,
    draggedRect: Sortable$DOMRect,
    from: HTMLElement,

    /**
     * element on which have guided
     */
    related: HTMLElement,
    relatedRect: Sortable$DOMRect,
    to: HTMLElement,
    willInsertAfter?: boolean
  } & Event;

  declare export interface Sortable$GroupOptions {
    /**
     * group name
     */
    name: string;

    /**
     * ability to move from the list. clone — copy the item, rather than move.
     */
    pull?:
      | boolean
      | "clone"
      | ((to: Sortable, from: Sortable) => boolean | string);

    /**
     * whether elements can be added from other lists, or an array of group names from which elements can be taken.
     */
    put?:
      | boolean
      | string
      | $ReadOnlyArray<string>
      | ((to: Sortable) => boolean);

    /**
     * revert cloned element to initial position after moving to a another list.
     */
    revertClone?: boolean;
  }

  declare export interface Sortable$Options {
    /**
     * ms, animation speed moving items when sorting, `0` — without animation
     */
    animation?: number;

    /**
     * Class name for the chosen item
     */
    chosenClass?: string;
    dataIdAttr?: string;

    /**
     * time in milliseconds to define when the sorting should start
     */
    delay?: number;

    /**
     * Disables the sortable if set to true.
     */
    disabled?: boolean;

    /**
     * Class name for the dragging item
     */
    dragClass?: string;

    /**
     * Specifies which items inside the element should be draggable
     */
    draggable?: string;
    dragoverBubble?: boolean;
    dropBubble?: boolean;

    /**
     * Class name for the cloned DOM Element when using forceFallback
     */
    fallbackClass?: string;

    /**
     * Appends the cloned DOM Element into the Document's Body
     */
    fallbackOnBody?: boolean;

    /**
     * Specify in pixels how far the mouse should move before it's considered as a drag.
     */
    fallbackTolerance?: number;
    fallbackOffset?: {
      x: number,
      y: number
    };

    /**
     * Selectors that do not lead to dragging (String or Function)
     */
    filter?:
      | string
      | ((
          event: Event | TouchEvent,
          target: HTMLElement,
          sortable: Sortable
        ) => boolean);

    /**
     * ignore the HTML5 DnD behaviour and force the fallback to kick in
     */
    forceFallback?: boolean;

    /**
     * Class name for the drop placeholder
     */
    ghostClass?: string;

    /**
     * To drag elements from one list into another, both lists must have the same group value.
     * You can also define whether lists can give away, give and keep a copy (clone), and receive elements.
     */
    group?: string | Sortable$GroupOptions;

    /**
     * Drag handle selector within list items
     */
    handle?: string;
    ignore?: string;

    /**
     * Call `event.preventDefault()` when triggered `filter`
     */
    preventOnFilter?: boolean;
    scroll?: boolean;

    /**
     * if you have custom scrollbar scrollFn may be used for autoscrolling
     */
    scrollFn?: (offsetX: number, offsetY: number, event: MouseEvent) => void;

    /**
     * px, how near the mouse must be to an edge to start scrolling.
     */
    scrollSensitivity?: number;

    /**
     * px
     */
    scrollSpeed?: number;

    /**
     * sorting inside list
     */
    sort?: boolean;
    store?: {
      get: (sortable: Sortable) => string[],
      set: (sortable: Sortable) => void
    };
    setData?: (dataTransfer: DataTransfer, draggedElement: HTMLElement) => void;

    /**
     * Element dragging started
     */
    onStart?: (event: Sortable$SortableEvent) => void;

    /**
     * Element dragging ended
     */
    onEnd?: (event: Sortable$SortableEvent) => void;

    /**
     * Element is dropped into the list from another list
     */
    onAdd?: (event: Sortable$SortableEvent) => void;

    /**
     * Created a clone of an element
     */
    onClone?: (event: Sortable$SortableEvent) => void;

    /**
     * Element is chosen
     */
    onChoose?: (event: Sortable$SortableEvent) => void;

    /**
     * Element is unchosen
     */
    onUnchoose?: (event: Sortable$SortableEvent) => void;

    /**
     * Changed sorting within list
     */
    onUpdate?: (event: Sortable$SortableEvent) => void;

    /**
     * Called by any change to the list (add / update / remove)
     */
    onSort?: (event: Sortable$SortableEvent) => void;

    /**
     * Element is removed from the list into another list
     */
    onRemove?: (event: Sortable$SortableEvent) => void;

    /**
     * Attempt to drag a filtered element
     */
    onFilter?: (event: Sortable$SortableEvent) => void;

    /**
     * Event when you move an item in the list or between lists
     */
    onMove?: (event: Sortable$MoveEvent) => boolean;
  }

  declare interface Sortable$Utils {
    /**
     * Attach an event handler function
     * @param element an HTMLElement.
     * @param event an Event context.
     * @param fn
     */
    on(
      element: HTMLElement,
      event: string,
      fn: EventListenerOrEventListenerObject
    ): void;

    /**
     * Remove an event handler function
     * @param element an HTMLElement.
     * @param event an Event context.
     * @param fn a callback.
     */
    off(
      element: HTMLElement,
      event: string,
      fn: EventListenerOrEventListenerObject
    ): void;

    /**
     * Get the values of all the CSS properties.
     * @param element an HTMLElement.
     */
    css(element: HTMLElement): CSSStyleDeclaration;

    /**
     * Get the value of style properties.
     * @param element an HTMLElement.
     * @param prop a property key.
     */
    css<K: $Keys<CSSStyleDeclaration>>(
      element: HTMLElement,
      prop: K
    ): $ElementType<CSSStyleDeclaration, K>;

    /**
     * Set one CSS property.
     * @param element an HTMLElement.
     * @param prop a property key.
     * @param value a property value.
     */
    css<K: $Keys<CSSStyleDeclaration>>(
      element: HTMLElement,
      prop: K,
      value: $ElementType<CSSStyleDeclaration, K>
    ): void;

    /**
     * Get elements by tag name.
     * @param context an HTMLElement.
     * @param tagName A tag name.
     * @param iterator An iterator.
     */
    find(
      context: HTMLElement,
      tagName: string,
      iterator?: (value: HTMLElement, index: number) => void
    ): NodeListOf<HTMLElement>;

    /**
     * Check the current matched set of elements against a selector.
     * @param element an HTMLElement.
     * @param selector an element selector.
     */
    is(element: HTMLElement, selector: string): boolean;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param element an HTMLElement.
     * @param selector an element seletor.
     * @param context a specific element's context.
     */
    closest(
      element: HTMLElement,
      selector: string,
      context?: HTMLElement
    ): HTMLElement | null;

    /**
     * Add or remove one classes from each element
     * @param element an HTMLElement.
     * @param name a class name.
     * @param state a class's state.
     */
    toggleClass(element: HTMLElement, name: string, state: boolean): void;
  }

  declare interface Sortable$DOMRect {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
  }
}
