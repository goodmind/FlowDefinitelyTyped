declare module "draggabilly" {
  declare export interface Position {
    x: number;
    y: number;
  }
  declare export interface DraggabillyOptions {
    axis?: "x" | "y";
    containment?: Element | string | boolean;
    grid?: [number, number];
    handle?: string;
  }
  declare export type DraggabillyClickEventName =
    | "dragStart"
    | "dragEnd"
    | "pointerDown"
    | "pointerUp"
    | "staticClick";
  declare export type DraggabillyMoveEventName = "dragMove" | "pointerMove";
  declare export default class Draggabilly {
    position: Position;
    constructor(element: Element | string, options?: DraggabillyOptions): this;
    on(
      eventName: DraggabillyClickEventName,
      listener: (event: Event, pointer: MouseEvent | Touch) => void
    ): Draggabilly;
    on(
      eventName: DraggabillyMoveEventName,
      listener: (
        event: Event,
        pointer: MouseEvent | Touch,
        moveVector: Position
      ) => void
    ): Draggabilly;
    off(
      eventName: DraggabillyClickEventName,
      listener: (event: Event, pointer: MouseEvent | Touch) => void
    ): Draggabilly;
    off(
      eventName: DraggabillyMoveEventName,
      listener: (
        event: Event,
        pointer: MouseEvent | Touch,
        moveVector: Position
      ) => void
    ): Draggabilly;
    once(
      eventName: DraggabillyClickEventName,
      listener: (event: Event, pointer: MouseEvent | Touch) => void
    ): Draggabilly;
    once(
      eventName: DraggabillyMoveEventName,
      listener: (
        event: Event,
        pointer: MouseEvent | Touch,
        moveVector: Position
      ) => void
    ): Draggabilly;
    enable(): void;
    disable(): void;
    destroy(): void;
  }
}
