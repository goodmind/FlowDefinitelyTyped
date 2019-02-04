declare module 'rheostat' {
        import typeof * as React from 'react';

	declare export type Orientation = "horizontal" | "vertical";
	declare export interface Algorithm {
getPosition(value: number, min: number, max: number): number,
getValue(pos: number, min: number, max: number): number
} 
	declare export interface PublicState {
max: number,
min: number,
values: number[]
} 
	declare export interface Events {
getNextHandlePosition(handleIdx: number, percentPosition: number): number,
onClick(): any,
onChange(publicState: PublicState): any,
onKeyPress(): any,
onSliderDragEnd(): any,
onSliderDragMove(): any,
onSliderDragStart(): any,
onValuesUpdated(publicState: PublicState): any
} 
	declare export type Props = {
algorithm?: Algorithm,
autoAdjustVerticalPosition?: boolean,
background?: React.ReactType,
className?: string,
disabled?: boolean,
handle?: React.ReactType,
max?: number,
min?: number,
orientation?: Orientation,
pitComponent?: React.ReactType,
pitPoints?: number[],
progressBar?: React.ReactType,
snap?: boolean,
snapPoints?: number[],
values?: number[]
} & Events

	declare export default class Rheostat mixins React.Component<Props, empty> {}
    }
