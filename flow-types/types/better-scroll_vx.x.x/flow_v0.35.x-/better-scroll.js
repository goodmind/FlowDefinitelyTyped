declare module 'better-scroll' {
        declare export interface WheelOption {
selectedIndex: number,
rotate: number,
adjustTime: number,
wheelWrapperClass: string,
wheelItemClass: string
} 
	declare export interface PageOption {
x: number,
y: number,
pageX: number,
pageY: number
} 
	declare export interface SlideOption {
loop: boolean,
el: Element,
threshold: number,
stepX: number,
stepY: number,
speed: number,
listenFlick: boolean
} 
	declare export interface ScrollBarOption {
fade: boolean
} 
	declare export interface PullDownOption {
threshold: number,
stop: number
} 
	declare export interface PullUpOption {
threshold: number
} 
	declare export interface MouseWheelOption {
speed: number,
invert: boolean,
easeTime: number
} 
	declare export interface ZoomOption {
start: number,
min: number,
max: number
} 
	declare export interface InfinityOption {
fetch: (count: number) => void,
render: (item: any, div: Element) => Element,
createTombstone: () => Element
} 
	declare export interface BounceObjectOption {
top?: boolean,
bottom?: boolean,
left?: boolean,
right?: boolean
} 
	declare export interface DoubleClick {
delay: number
} 
	declare export interface EaseOption {
swipe?: {
style: string,
fn: (t: number) => number
},
swipeBounce?: {
style: string,
fn: (t: number) => number
},
bounce?: {
style: string,
fn: (t: number) => number
}
} 
	declare export interface BsOption {
startX: number,
startY: number,
scrollX: boolean,
scrollY: boolean,
freeScroll: boolean,
directionLockThreshold: number,
eventPassthrough: string | boolean,
click: boolean,
dblclick: boolean | DoubleClick,
tap: boolean,
bounce: boolean | BounceObjectOption,
bounceTime: number,
momentum: boolean,
momentumLimitTime: number,
momentumLimitDistance: number,
swipeTime: number,
swipeBounceTime: number,
deceleration: number,
flickLimitTime: number,
flickLimitDistance: number,
resizePolling: number,
probeType: number,
preventDefault: boolean,
preventDefaultException: {[key: string]: any},
HWCompositing: boolean,
useTransition: boolean,
useTransform: boolean,
bindToWrapper: boolean,
disableMouse: boolean,
disableTouch: boolean,
observeDOM: boolean,
autoBlur: boolean,
stopPropagation: boolean,

/**
 * for picker
 * wheel: {
 *    selectedIndex: 0,
 *    rotate: 25,
 *    adjustTime: 400
 * }
 */
wheel: $Shape<WheelOption> | boolean,

/**
 * for slide
 * snap: {
 *    loop: boolean,
 *    el: domEl,
 *    threshold: 0.1,
 *    stepX: 100,
 *    stepY: 100,
 *    listenFlick: true
 * }
 */
snap: $Shape<SlideOption> | boolean,

/**
 * for scrollbar
 * scrollbar: {
 *    fade: true
 * }
 */
scrollbar: $Shape<ScrollBarOption> | boolean,

/**
 * for pull down and refresh
 * pullDownRefresh: {
 *    threshold: 50,
 *    stop: 20
 * }
 */
pullDownRefresh: $Shape<PullDownOption> | boolean,

/**
 * for pull up and load
 * pullUpLoad: {
 *    threshold: 50
 * }
 */
pullUpLoad: $Shape<PullUpOption> | boolean,
mouseWheel: $Shape<MouseWheelOption> | boolean,
zoom: $Shape<ZoomOption> | boolean,
infinity: $Shape<InfinityOption> | boolean
} 
	declare export interface Position {
x: number,
y: number
} 
	declare export default class BScroll  {
constructor(element: Element | string, options?: $Shape<BsOption>): this;
x: number;
y: number;
maxScrollX: number;
maxScrollY: number;
movingDirectionX: number;
movingDirectionY: number;
directionX: number;
directionY: number;
enabled: boolean;
isInTransition: boolean;
isAnimating: boolean;
options: BsOption;
refresh(): void;
enable(): void;
disable(): void;
scrollBy(x: number, y: number, time?: number, easing?: {[key: string]: any}): void;
scrollTo(x: number, y: number, time?: number, easing?: {[key: string]: any}): void;
scrollToElement(
el: HTMLElement | string,
time?: number,
offsetX?: number | boolean,
offsetY?: number | boolean,
easing?: {[key: string]: any}): void;
stop(): void;
destroy(): void;
goToPage(x: number, y: number, time?: number, easing?: {[key: string]: any}): void;
next(time?: number, easing?: {[key: string]: any}): void;
prev(time?: number, easing?: {[key: string]: any}): void;
getCurrentPage(): PageOption;
wheelTo(index: number): void;
getSelectedIndex(): number;
finishPullDown(): void;
finishPullUp(): void;
on(
type: "beforeScrollStart"
| "scrollStart"
| "scrollCancel"
| "beforeScrollStart"
| "flick"
| "refresh"
| "destroy"
| "pullingDown"
| "pullingUp",
fn: () => any): void;
on(type: "scroll" | "scrollEnd" | "touchEnd", fn: (pos: Position) => any): void;
off(
type: "beforeScrollStart"
| "scrollStart"
| "scroll"
| "scrollCancel"
| "beforeScrollStart"
| "scrollEnd"
| "touchEnd"
| "flick"
| "refresh"
| "destroy"
| "pullingDown"
| "pullingUp",
fn: (...args: any[]) => void): void;
trigger(type: string): void
}
    }
