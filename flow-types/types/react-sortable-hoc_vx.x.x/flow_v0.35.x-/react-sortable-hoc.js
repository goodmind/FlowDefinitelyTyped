declare module 'react-sortable-hoc' {
        import typeof * as React from 'react';

	declare export type Axis = "x" | "y" | "xy";
	declare export type Offset = number | string;
	declare export interface SortStart {
node: Element,
index: number,
collection: Offset
} 
	declare export type SortEvent = React.MouseEvent<any> | React.TouchEvent<any>;
	declare export type SortEventWithTag = SortEvent & {
target: {
tagName: string
}
};
	declare export type SortStartHandler = (sort: SortStart, event: SortEvent) => void;
	declare export type SortMoveHandler = (event: SortEvent) => void;
	declare export interface SortEnd {
oldIndex: number,
newIndex: number,
collection: Offset
} 
	declare export type SortEndHandler = (sort: SortEnd, event: SortEvent) => void;
	declare export type ContainerGetter = (element: React.ReactElement<any>) => HTMLElement;
	declare export interface Dimensions {
width: number,
height: number
} 
	declare export interface SortableContainerProps {
axis?: Axis,
lockAxis?: Axis,
helperClass?: string,
transitionDuration?: number,
pressDelay?: number,
pressThreshold?: number,
distance?: number,
shouldCancelStart?: (event: SortEvent | SortEventWithTag) => boolean,
onSortStart?: SortStartHandler,
onSortMove?: SortMoveHandler,
onSortEnd?: SortEndHandler,
useDragHandle?: boolean,
useWindowAsScrollContainer?: boolean,
hideSortableGhost?: boolean,
lockToContainerEdges?: boolean,
lockOffset?: Offset | [Offset, Offset],
getContainer?: ContainerGetter,
getHelperDimensions?: (sort: SortStart) => Dimensions
} 
	declare export interface SortableElementProps {
index: number,
collection?: Offset,
disabled?: boolean
} 
	declare export interface Config {
withRef: boolean
} 
	declare export type WrappedComponentFactory<P> = (props: P) => JSX.Element;
	declare export type WrappedComponent<P> = React.ComponentClass<P> | WrappedComponentFactory<P>;
	declare export function SortableContainer<P>(
wrappedComponent: WrappedComponent<P>,
config?: Config): React.ComponentClass<P & SortableContainerProps>

	declare export function SortableElement<P>(
wrappedComponent: WrappedComponent<P>,
config?: Config): React.ComponentClass<P & SortableElementProps>

	declare export function SortableHandle<P>(
wrappedComponent: WrappedComponent<P>,
config?: Config): React.ComponentClass<P>

	declare export function arrayMove<T>(collection: T[], previousIndex: number, newIndex: number): T[]

    }
