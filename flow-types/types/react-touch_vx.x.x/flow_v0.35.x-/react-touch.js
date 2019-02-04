declare module 'react-touch' {
        import typeof * as React from 'react';

	declare export function defineHold(config?: HoldConfig): HoldableConfig

	declare export interface HoldConfig {

/**
 * @default 250
 */
updateEvery?: number,

/**
 * @default 1000
 */
holdFor?: number
} 
	
/**
 * @see defineHold
 */
declare export interface HoldableConfig {
holdProgress(
callback: () => void): (updateState: (holdLength: number) => void) => () => void,
holdComplete(callback: () => void): () => () => void
} 
	declare export interface HoldableProps {

/**
 * @see defineHold
 */
config?: HoldableConfig,
onHoldProgress(): void,
onHoldComplete(): void,
onMouseDown(): void,
onTouchStart(): void
} 
	declare export class Holdable mixins React.Component<HoldableProps> {}
	declare export interface DraggableStyle {
translateX?: number,
translateY?: number,
top?: number,
left?: number,
right?: number,
bottom?: number
} 
	declare export type DraggableCallbackArgument = {
dx: number,
dy: number
} & DraggableStyle

	declare export type DraggableCallback = (argument: DraggableCallbackArgument) => JSX.Element;
	declare export interface DraggableProps {

/**
 * An object that defines the initial position of the draggable component.
 * You can pass any of the following styles to it
 * and they'll be updated and passed back out in the callback with every animation tick.
 */
style: DraggableStyle,
children: DraggableCallback
} 
	declare export class Draggable mixins React.Component<DraggableProps> {}
	declare export function defineSwipe(config?: SwipeConfig): SwipeableConfig

	declare export interface SwipeConfig {

/**
 * @default 100
 */
swipeDistance?: number
} 
	
/**
 * @see defineSwipe
 */
declare export interface SwipeableConfig {
onSwipeLeft(current: number, initial: number, callback: () => void): void,
onSwipeRight(current: number, initial: number, callback: () => void): void,
onSwipeUp(current: number, initial: number, callback: () => void): void,
onSwipeDown(current: number, initial: number, callback: () => void): void
} 
	declare export interface SwipeableProps {

/**
 * @see defineSwipe
 */
config?: SwipeableConfig,
onSwipeLeft(): void,
onSwipeRight(): void,
onSwipeUp(): void,
onSwipeDown(): void,
onMouseDown(): void,
onTouchStart(): void
} 
	declare export class Swipeable mixins React.Component<SwipeableProps> {}
	declare export  class moves {
  constructor(...args: empty): mixed;
static +UPLEFT: Class<moves__UPLEFT> & moves__UPLEFT & 0;// 0
static +UP: Class<moves__UP> & moves__UP & 1;// 1
static +UPRIGHT: Class<moves__UPRIGHT> & moves__UPRIGHT & 2;// 2
static +LEFT: Class<moves__LEFT> & moves__LEFT & 3;// 3
static +RIGHT: Class<moves__RIGHT> & moves__RIGHT & 4;// 4
static +DOWNRIGHT: Class<moves__DOWNRIGHT> & moves__DOWNRIGHT & 5;// 5
static +DOWN: Class<moves__DOWN> & moves__DOWN & 6;// 6
static +DOWNLEFT: Class<moves__DOWNLEFT> & moves__DOWNLEFT & 7;// 7

}

declare class moves__UPLEFT mixins moves {}
declare class moves__UP mixins moves {}
declare class moves__UPRIGHT mixins moves {}
declare class moves__LEFT mixins moves {}
declare class moves__RIGHT mixins moves {}
declare class moves__DOWNRIGHT mixins moves {}
declare class moves__DOWN mixins moves {}
declare class moves__DOWNLEFT mixins moves {}

	declare export interface CustomGestureProps {
config: moves[],
onGesture(): void
} 
	declare export class CustomGesture mixins React.Component<CustomGestureProps> {}
    }
