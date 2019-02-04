declare module 'animejs' {
        declare type FunctionBasedParameter = (element: HTMLElement, index: number, length: number) => number;
	declare type AnimeCallbackFunction = (anim: anime$anime$AnimeInstance) => void;
	declare type AnimeTarget = string
| {[key: string]: any}
| HTMLElement
| SVGElement
| NodeList
| null;
	
      declare var npm$namespace$anime: {
        remove: typeof anime$remove,
getValue: typeof anime$getValue,
path: typeof anime$path,
setDashoffset: typeof anime$setDashoffset,
bezier: typeof anime$bezier,
timeline: typeof anime$timeline,
random: typeof anime$random,
        speed: typeof anime$speed,
running: typeof anime$running,
easings: typeof anime$easings,
      }
declare type anime$EasingOptions = "linear"
| "easeInQuad"
| "easeInCubic"
| "easeInQuart"
| "easeInQuint"
| "easeInSine"
| "easeInExpo"
| "easeInCirc"
| "easeInBack"
| "easeInElastic"
| "easeOutQuad"
| "easeOutCubic"
| "easeOutQuart"
| "easeOutQuint"
| "easeOutSine"
| "easeOutExpo"
| "easeOutCirc"
| "easeOutBack"
| "easeOutElastic"
| "easeInOutQuad"
| "easeInOutCubic"
| "easeInOutQuart"
| "easeInOutQuint"
| "easeInOutSine"
| "easeInOutExpo"
| "easeInOutCirc"
| "easeInOutBack"
| "easeInOutElastic";

declare type anime$DirectionOptions = "reverse" | "alternate" | "normal";

declare interface anime$AnimeInstanceParams {
loop?: number | boolean,
autoplay?: boolean,
direction?: anime$DirectionOptions | string,
begin?: AnimeCallbackFunction,
run?: AnimeCallbackFunction,
update?: AnimeCallbackFunction,
complete?: AnimeCallbackFunction
} 

declare interface anime$AnimeAnimParams {
targets: AnimeTarget | $ReadOnlyArray<AnimeTarget>,
duration?: number | FunctionBasedParameter,
delay?: number | FunctionBasedParameter,
elasticity?: number | FunctionBasedParameter,
round?: number | boolean | FunctionBasedParameter,
easing?: anime$EasingOptions | string | $ReadOnlyArray<number>,
begin?: AnimeCallbackFunction,
run?: AnimeCallbackFunction,
update?: AnimeCallbackFunction,
complete?: AnimeCallbackFunction,
[AnyAnimatedProperty: string]: any
} 

declare type anime$AnimeParams = {} & anime$AnimeInstanceParams & anime$AnimeAnimParams


declare interface anime$AnimeInstance {
play(): void,
pause(): void,
restart(): void,
reverse(): void,
seek(time: number): void,
began: boolean,
paused: boolean,
completed: boolean,
finished: Promise<void>,
begin: AnimeCallbackFunction,
run: AnimeCallbackFunction,
update: AnimeCallbackFunction,
complete: AnimeCallbackFunction,
autoplay: boolean,
currentTime: number,
delay: number,
direction: string,
duration: number,
loop: number | boolean,
offset: number,
progress: number,
remaining: number,
reversed: boolean,
animatables: $ReadOnlyArray<{[key: string]: any}>,
animations: $ReadOnlyArray<{[key: string]: any}>
} 

declare type anime$AnimeTimelineAnimParams = {
offset: number | string | FunctionBasedParameter
} & anime$AnimeAnimParams


declare type anime$AnimeTimelineInstance = {
add(params: anime$AnimeAnimParams): anime$AnimeTimelineInstance
} & anime$AnimeInstance


declare var anime$speed: number;

declare var anime$running: anime$AnimeInstance[];

declare var anime$easings: {
[EasingFunction: string]: (t: number) => any
};

declare function anime$remove(targets: AnimeTarget | $ReadOnlyArray<AnimeTarget>): void


declare function anime$getValue(targets: AnimeTarget, prop: string): string | number


declare function anime$path(
anime$path: string | HTMLElement | SVGElement | null,
percent?: number): (
prop: string) => {
el: HTMLElement | SVGElement,
property: string,
totalLength: number
}


declare function anime$setDashoffset(el: HTMLElement | SVGElement | null): number


declare function anime$bezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number


declare function anime$timeline(
params?: anime$AnimeInstanceParams | $ReadOnlyArray<anime$AnimeInstance>): anime$AnimeTimelineInstance


declare function anime$random(min: number, max: number): number

	declare function anime(params: anime$anime$AnimeParams): anime$anime$AnimeInstance

	declare module.exports: typeof anime

    }
