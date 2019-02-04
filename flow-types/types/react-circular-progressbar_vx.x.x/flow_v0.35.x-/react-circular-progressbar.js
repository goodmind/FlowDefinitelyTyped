declare module 'react-circular-progressbar' {
        import type {
          Component,CSSProperties
        } from 'react';

	declare export default class CircularProgressbar mixins Component<Props> {}
	declare export interface Props {
percentage: number,
className?: string,
classes?: ProgressbarClasses,
styles?: ProgressbarStyles,
strokeWidth?: number,
background?: boolean,
backgroundPadding?: number,
initialAnimation?: boolean,
counterClockwise?: boolean,
text?: string
} 
	declare export interface GroupOverride<T> {
root?: T,
trail?: T,
path?: T,
text?: T,
background?: T
} 
	declare export type ProgressbarClasses = {} & GroupOverride<string>

	declare export type ProgressbarStyles = {} & GroupOverride<CSSProperties>

    }
