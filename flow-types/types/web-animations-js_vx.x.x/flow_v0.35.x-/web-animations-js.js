declare module 'web-animations-js' {
        declare type AnimationEffectTimingFillMode = "none"
| "forwards"
| "backwards"
| "both"
| "auto";
	declare type AnimationEffectTimingPlaybackDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
	declare interface AnimationPlaybackEvent {
target: Animation,
+currentTime: number | null,
+timelineTime: number | null,
type: string,
bubbles: boolean,
cancelable: boolean,
currentTarget: Animation,
defaultPrevented: boolean,
eventPhase: number,
timeStamp: number
} 
	declare type AnimationPlaybackEventInit = {
currentTime?: number | null,
timelineTime?: number | null
} & EventInit

	declare var AnimationPlaybackEvent: {
prototype: AnimationPlaybackEvent,
new (
type: string,
eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent
};
	declare interface AnimationKeyFrame {
easing?: string | string[],
offset?: number | Array<number | null> | null,
opacity?: number | number[],
transform?: string | string[]
} 
	declare interface AnimationTimeline {
+currentTime: number | null,
getAnimations(): Animation[],
play(effect: KeyframeEffect): Animation
} 
	declare interface AnimationEffectTiming {
delay?: number,
direction?: AnimationEffectTimingPlaybackDirection,
duration?: number,
easing?: string,
endDelay?: number,
fill?: AnimationEffectTimingFillMode,
iterationStart?: number,
iterations?: number,
playbackRate?: number
} 
	declare interface AnimationEffectReadOnly {
+timing: number,
getComputedTiming(): ComputedTimingProperties
} 
	declare interface ComputedTimingProperties {
endTime: number,
activeDuration: number,
localTime: number | null,
progress: number | null,
currentIteration: number | null
} 
	declare type AnimationEventListener = ((evt: AnimationPlaybackEvent) => any) | null;
	declare type Animation = {
currentTime: number | null,
id: string,
oncancel: AnimationEventListener,
onfinish: AnimationEventListener,
+playState: AnimationPlayState,
playbackRate: number,
startTime: number | null,
cancel(): void,
finish(): void,
pause(): void,
play(): void,
reverse(): void,
addEventListener(type: "finish" | "cancel", handler: EventListener): void,
removeEventListener(type: "finish" | "cancel", handler: EventListener): void,
effect: AnimationEffect | null,
+finished: Promise<Animation>,
+ready: Promise<Animation>,
timeline: AnimationTimeline | null
} & EventTarget

	declare var Animation: {
prototype: Animation,
new (
effect?: AnimationEffect | null,
timeline?: AnimationTimeline | null): Animation
};
	declare class SequenceEffect mixins KeyframeEffect {
constructor(effects: KeyframeEffect[]): this
}
	declare class GroupEffect mixins KeyframeEffect {
constructor(effects: KeyframeEffect[]): this
}
	declare interface Element {
animate(
effect: AnimationKeyFrame | AnimationKeyFrame[] | null,
timing: number | AnimationEffectTiming): Animation,
animate(
keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
options?: number | KeyframeAnimationOptions): Animation,
getAnimations(): Animation[]
} 
	declare interface Document {
+timeline: AnimationTimeline
} 
    }
