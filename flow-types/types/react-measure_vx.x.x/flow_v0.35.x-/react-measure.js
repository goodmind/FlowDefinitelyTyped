declare module 'react-measure' {
        import typeof * as React from 'react';

	declare export type MeasurementType = "client"
| "offset"
| "scroll"
| "bounds"
| "margin";
	declare interface TopLeft {
+top: number,
+left: number
} 
	declare interface BottomRight {
+bottom: number,
+right: number
} 
	declare interface Dimensions {
+width: number,
+height: number
} 
	declare export type Margin = TopLeft & BottomRight;
	declare export type Rect = TopLeft & Dimensions;
	declare export type BoundingRect = Dimensions & Margin;
	declare export interface ContentRect {
client?: Rect,
offset?: Rect,
scroll?: Rect,
bounds?: BoundingRect,
margin?: Margin,
entry?: any
} 
	declare export interface MeasuredComponentProps {
measureRef(ref: Element | null): void,
measure(): void,
contentRect: ContentRect
} 
	declare type MeasuredComponent<T> = React.ComponentType<T & MeasuredComponentProps>;
	declare export interface MeasureProps {
client?: boolean,
offset?: boolean,
scroll?: boolean,
bounds?: boolean,
margin?: boolean,
innerRef(ref: Element | null): void,
onResize(contentRect: ContentRect): void,
children?: React.SFC<MeasuredComponentProps>
} 
	declare export function withContentRect(
types: $ReadOnlyArray<MeasurementType> | MeasurementType): <T: {}>(fn: MeasuredComponent<T>) => React.ComponentType<T>

	declare class Measure mixins React.Component<MeasureProps> {}
	declare export default typeof Measure

    }
