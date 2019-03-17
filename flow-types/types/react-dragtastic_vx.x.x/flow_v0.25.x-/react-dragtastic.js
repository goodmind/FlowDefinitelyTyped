declare module "react-dragtastic" {
  import type {
    Node,
    Component,
    MouseEventHandler,
    TouchEventHandler
  } from "react";

  declare export type Id = string | number;
  declare export type Type = string | number;
  declare export type Accepts = string | $ReadOnlyArray<string>;
  declare export interface State {
    /**
     * The user's current horizontal position on the page.
     */
    x: number;

    /**
     * The user's current vertical position on the page.
     */
    y: number;

    /**
     * The user's initial horizontal position on the page when they started dragging.
     */
    startingX: number;

    /**
     * The user's initial vertical position on the page when they started dragging.
     */
    startingY: number;

    /**
     * A boolean representing whether the user is currently dragging.
     */
    isDragging: boolean;

    /**
     * The id of the currently dragging element.
     */
    currentlyDraggingId?: Id;

    /**
     * The id of the <Droppable/> currently being hovered.
     */
    currentlyHoveredDroppableId?: Id;

    /**
     * The accepts property of the <Droppable/> currently being hovered.
     */
    currentlyHoveredDroppableAccepts?: Accepts;

    /**
     * Data from the data property of the <Draggable/> which is currently active. null if not dragging.
     */
    data: any;

    /**
     * The type of the component being currently dragged. null if not dragging.
     */
    type?: Type;
  }
  declare export interface DraggableProps {
    /**
     * An id which will be used in the draggable zone's target <DragComponent/>
     */
    id?: Id;

    /**
     * A string, or array of strings, used to limit which droppable zones will accept <DragComponent/>'s attached to this draggable.
     */
    type?: Type;

    /**
     * Data of any type which will be passed to the onDrop function of any <Droppable/> which accepts this <Draggable/>'s type.
     */
    data?: any;

    /**
     * A function which will be called when the <Draggable/> zone is activated (The user started dragging).
     */
    onDragStart?: (data: any) => void;

    /**
     * A function which will be called when the <Draggable/> zone is deactivated (The user stopped dragging).
     */
    onDragEnd?: (data: any) => void;

    /**
     * A function which will be called every time the user's cursor moves while dragging.
     */
    onDrag?: () => void;

    /**
     * An optional array of strings. For performance reasons you can limit which keys in the dragState your component subscribes to.
     * For example, you may pass ['type', 'data'] to only rerender if these keys change.
     */
    subscribeTo?: $ReadOnlyArray<string> | null;

    /**
     * An optional int representing the distance in pixels the user's pointer must travel to activate the draggable. Defaults to 8
     */
    delay?: number;
    children: (
      arg: State & {
        /**
         * A boolean representing if the draggable is currently active.
         */
        isActive: boolean,
        events: {
          onMouseDown: MouseEventHandler,
          onTouchStart: TouchEventHandler
        }
      }
    ) => Node;
  }

  /**
   * This defines a draggable zone. At a minimum, spread the events over the element that should be draggable (usually the root element).
   */
  declare export class Draggable mixins Component<DraggableProps, any> {}
  declare export interface DroppableProps {
    /**
     * An id which will be used in the draggable zone's target <DragComponent/>
     */
    id?: Id;

    /**
     * A string type corresponding to the type property of the <Draggable/> zone for which this <Droppable/> should accept drop events.
     */
    accepts?: Accepts;

    /**
     * A function which will be called when a user drops a <DragComponent/> on this <Droppable/> with an accepted type.
     */
    onDrop?: (data: any) => void;

    /**
     * A function which will be called when the user's cursor enters the <Droppable/> while dragging.
     * This function will be called regardless of whether the droppable accepts the draggable currently being dragged.
     */
    onDragEnter?: () => void;

    /**
     * A function which will be called when the user's cursor leaves the <Droppable/> while dragging.
     * This function will be called regardless of whether the droppable accepts the draggable currently being dragged.
     */
    onDragLeave?: () => void;

    /**
     * An optional array of strings. For performance reasons you can limit which keys in the dragState your component subscribes to.
     * For example, you may pass ['type', 'data'] to only rerender if these keys change.
     */
    subscribeTo?: $ReadOnlyArray<string> | null;
    children: (
      arg: State & {
        /**
         * A boolean representing if the user is currently hovering the <Droppable/>.
         */
        isOver: boolean,

        /**
         * A boolean representing if this droppable will accept the currently dragging <DragComponent/>.
         */
        willAccept: boolean,
        events: {
          onMouseEnter: () => void,
          onMouseLeave: () => void,
          onMouseUp: () => void
        }
      }
    ) => Node;
  }

  /**
   * This defines a droppable zone. At a minimum, spread the events over the element that should be droppable (usually the root element).
   */
  declare export class Droppable mixins Component<DroppableProps, any> {}
  declare export interface DragComponentProps {
    for?: Id;

    /**
     * A function which will be called every time a user drags.
     */
    onDrag?: () => void;

    /**
     * A boolean determining whether or not the DragComponent should always render. Defaults to false.
     */
    alwaysRender?: boolean;

    /**
     * An optional array of strings. For performance reasons you can limit which keys in the dragState your component subscribes to.
     * For example, you may pass ['type', 'data'] to only rerender if these keys change.
     */
    subscribeTo?: $ReadOnlyArray<string> | null;
    children: (
      arg: State & {
        /**
         * A boolean representing whether the user is currently hovering a <Droppable/> that accepts the type of the currently active <Draggable/>
         */
        isOverAccepted: boolean
      }
    ) => Node;
  }

  /**
   * By default, children passed to this component will only render if the user is currently dragging, but this can be overridden.
   */
  declare export class DragComponent
    mixins Component<DragComponentProps, any> {}
  declare export interface DragStateProps {
    /**
     * An optional array of strings. For performance reasons you can limit which keys in the dragState your component subscribes to.
     * For example, you may pass ['type', 'data'] to only rerender if these keys change.
     */
    subscribeTo?: $ReadOnlyArray<string> | null;
    children: (arg: State) => Node;
  }

  /**
   * This component is used just like a draggable or droppable, but does not accept or trigger any drag events.
   * Use it if you need to notify a component about changes in the dragState without making that component a draggable or droppable zone.
   */
  declare export class DragState mixins Component<DragStateProps, any> {}
}
