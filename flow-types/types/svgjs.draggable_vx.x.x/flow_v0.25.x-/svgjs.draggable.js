declare module "draggable" {
  declare export interface DragDelta {
    x: number;
    y: number;
    zoom: number;
  }
}

export interface svgjs$Element {
  svgjs$draggable(): this;
  svgjs$draggable(obj: Object): this;
  fixed(): this;
  beforedrag: (event: MouseEvent) => any;
  dragstart: (delta: svgjs$draggable.DragDelta, event: MouseEvent) => any;
  dragmove: (delta: svgjs$draggable.DragDelta, event: MouseEvent) => any;
  dragend: (delta: svgjs$draggable.DragDelta, event: MouseEvent) => any;
}
declare module "svgjs.draggable" {
}
