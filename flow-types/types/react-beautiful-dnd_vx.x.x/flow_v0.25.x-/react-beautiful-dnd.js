declare module "react-beautiful-dnd" {
  import typeof * as React from "react";

  declare export type Id = string;
  declare export type DraggableId = Id;
  declare export type DroppableId = Id;
  declare export type TypeId = Id;
  declare export type ZIndex = $ElementType<React.CSSProperties, "zIndex">;
  declare export type DropReason = "DROP" | "CANCEL";
  declare export type Announce = (message: string) => void;
  declare export interface DraggableLocation {
    droppableId: DroppableId;
    index: number;
  }
  declare export type MovementMode = "FLUID" | "SNAP";

  /**
   * Responders
   */
  declare export interface ResponderProvided {
    announce: Announce;
  }
  declare export type OnBeforeDragStartResponder = (start: DragStart) => void;
  declare export type OnDragStartResponder = (
    start: DragStart,
    provided: ResponderProvided
  ) => void;
  declare export type OnDragUpdateResponder = (
    update: DragUpdate,
    provided: ResponderProvided
  ) => void;
  declare export type OnDragEndResponder = (
    result: DropResult,
    provided: ResponderProvided
  ) => void;
  declare export interface Responders {
    onBeforeDragStart?: OnBeforeDragStartResponder;
    onDragStart?: OnDragStartResponder;
    onDragUpdate?: OnDragUpdateResponder;
    onDragEnd: OnDragEndResponder;
  }

  /**
   * DragDropContext
   */
  declare export interface DragStart {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
    mode: MovementMode;
  }
  declare export type DragUpdate = {
    destination?: DraggableLocation | null,
    combine?: Combine | null
  } & DragStart;

  declare export interface Combine {
    draggableId: DraggableId;
    droppableId: DroppableId;
  }
  declare export type DropResult = {
    reason: DropReason
  } & DragUpdate;

  declare export interface DragDropContextProps {
    onBeforeDragStart?: (initial: DragStart) => void;
    onDragStart?: (initial: DragStart, provided: ResponderProvided) => void;
    onDragUpdate?: (initial: DragUpdate, provided: ResponderProvided) => void;
    onDragEnd(result: DropResult, provided: ResponderProvided): void;
  }
  declare export class DragDropContext
    mixins React.Component<DragDropContextProps> {}

  /**
   * Droppable
   */
  declare export interface DroppableProvidedProps {
    "data-react-beautiful-dnd-droppable": string;
  }
  declare export interface DroppableProvided {
    innerRef(element: HTMLElement | null): any;
    placeholder?: React.ReactElement<any> | null;
    droppableProps: DroppableProvidedProps;
  }
  declare export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
    draggingOverWith?: DraggableId;
  }
  declare export interface DroppableProps {
    droppableId: DroppableId;
    type?: TypeId;
    ignoreContainerClipping?: boolean;
    isDropDisabled?: boolean;
    isCombineEnabled?: boolean;
    direction?: "vertical" | "horizontal";
    children(
      provided: DroppableProvided,
      snapshot: DroppableStateSnapshot
    ): React.ReactElement<any>;
  }
  declare export class Droppable mixins React.Component<DroppableProps> {}

  /**
   * Draggable
   */
  declare export interface NotDraggingStyle {
    transform?: string;
    transition?: "none";
  }
  declare export interface DraggingStyle {
    pointerEvents: "none";
    position: "fixed";
    width: number;
    height: number;
    boxSizing: "border-box";
    top: number;
    left: number;
    margin: 0;
    transform?: string;
    transition: "none";
    zIndex: ZIndex;
  }
  declare export interface DraggableProvidedDraggableProps {
    style?: DraggingStyle | NotDraggingStyle;
    "data-react-beautiful-dnd-draggable": string;
  }
  declare export interface DraggableProvidedDragHandleProps {
    onMouseDown: React.MouseEventHandler<any>;
    onKeyDown: React.KeyboardEventHandler<any>;
    onTouchStart: React.TouchEventHandler<any>;
    onTouchMove: React.TouchEventHandler<any>;
    "data-react-beautiful-dnd-drag-handle": string;
    "aria-roledescription": string;
    tabIndex: number;
    "aria-grabbed": boolean;
    draggable: boolean;
    onDragStart: React.DragEventHandler<any>;
  }
  declare export interface DraggableProvided {
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null;
    innerRef(element?: HTMLElement | null): any;
    placeholder?: React.ReactElement<any> | null;
  }
  declare export interface DraggableStateSnapshot {
    isDragging: boolean;
    isDropAnimating: boolean;
    draggingOver?: DroppableId;
    dropAnimation?: DropAnimation;
    combineWith?: DraggableId;
    combineTargetFor?: DraggableId;
    mode?: MovementMode;
  }
  declare export interface DropAnimation {
    duration: number;
    curve: string;
    moveTo: Position;
    opacity?: number;
    scale?: number;
  }
  declare export interface DraggableProps {
    draggableId: DroppableId;
    index: number;
    isDragDisabled?: boolean;
    disableInteractiveElementBlocking?: boolean;
    children(
      provided: DraggableProvided,
      snapshot: DraggableStateSnapshot
    ): React.ReactElement<any>;
    type?: TypeId;
  }
  declare export class Draggable mixins React.Component<DraggableProps> {}
}
