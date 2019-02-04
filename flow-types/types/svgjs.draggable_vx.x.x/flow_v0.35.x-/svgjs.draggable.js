declare module 'svgjs.draggable' {
        declare module 'draggable' {
        declare export interface DragDelta {
x: number,
y: number,
zoom: number
} 
    }


declare export interface svgjs$Element {
draggable(): this,
draggable(obj: Object): this,
fixed(): this,
beforedrag: (event: MouseEvent) => any,
dragstart: (delta: svgjs$draggable.DragDelta, event: MouseEvent) => any,
dragmove: (delta: svgjs$draggable.DragDelta, event: MouseEvent) => any,
dragend: (delta: svgjs$draggable.DragDelta, event: MouseEvent) => any
} 
    }
