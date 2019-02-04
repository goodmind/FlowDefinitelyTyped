declare module 'tweenjs' {
        declare export class createjs$Ease  {
static backIn: (amount: number) => number;
static backInOut: (amount: number) => number;
static backOut: (amount: number) => number;
static bounceIn: (amount: number) => number;
static bounceInOut: (amount: number) => number;
static bounceOut: (amount: number) => number;
static circIn: (amount: number) => number;
static circInOut: (amount: number) => number;
static circOut: (amount: number) => number;
static cubicIn: (amount: number) => number;
static cubicInOut: (amount: number) => number;
static cubicOut: (amount: number) => number;
static elasticIn: (amount: number) => number;
static elasticInOut: (amount: number) => number;
static elasticOut: (amount: number) => number;
static get(amount: number): (amount: number) => number;
static getBackIn(amount: number): (amount: number) => number;
static getBackInOut(amount: number): (amount: number) => number;
static getBackOut(amount: number): (amount: number) => number;
static getElasticIn(amplitude: number, period: number): (amount: number) => number;
static getElasticInOut(amplitude: number, period: number): (amount: number) => number;
static getElasticOut(amplitude: number, period: number): (amount: number) => number;
static getPowIn(pow: number): (amount: number) => number;
static getPowInOut(pow: number): (amount: number) => number;
static getPowOut(pow: number): (amount: number) => number;
static linear: (amount: number) => number;
static none: (amount: number) => number;
static quadIn: (amount: number) => number;
static quadInOut: (amount: number) => number;
static quadOut: (amount: number) => number;
static quartIn: (amount: number) => number;
static quartInOut: (amount: number) => number;
static quartOut: (amount: number) => number;
static quintIn: (amount: number) => number;
static quintInOut: (amount: number) => number;
static quintOut: (amount: number) => number;
static sineIn: (amount: number) => number;
static sineInOut: (amount: number) => number;
static sineOut: (amount: number) => number
}

declare export type createjs$TweenProps = {
useTicks?: boolean,
ignoreGlobalPause?: boolean,
loop?: number,
reversed?: boolean,
bounce?: boolean,
timeScale?: number,
pluginData?: any,
paused?: boolean,
position?: number,
onChange?: (e: Event) => void,
onComplete?: (e: Event) => void,
override?: boolean
};

declare export type createjs$TimelineProps = {
useTicks?: boolean,
ignoreGlobalPause?: boolean,
loop?: number,
reversed?: boolean,
bounce?: boolean,
timeScale?: number,
paused?: boolean,
position?: number,
onChange?: (e: Event) => void,
onComplete?: (e: Event) => void
};

declare export class createjs$TweenStep  {
constructor(prev: createjs$TweenStep, t: number, d: number, props: createjs$TweenProps, ease: Function, passive: boolean): this;
next: createjs$TweenStep;
prev: createjs$TweenStep;
t: number;
d: number;
props: createjs$TweenProps;
ease: Function;
passive: boolean;
index: number
}

declare export class createjs$TweenAction  {
constructor(prev: createjs$TweenAction, t: number, scope: any, funct: Function, params: any[]): this;
next: createjs$TweenAction;
prev: createjs$TweenAction;
t: number;
d: number;
scope: any;
funct: Function;
params: any[]
}

declare export class createjs$MotionGuidePlugin  {
static priority: number;
static ID: string;
static install(): Object;
static init(tween: createjs$Tween, prop: string, value: any): void;
static step(
tween: createjs$Tween,
step: createjs$TweenStep,
props: createjs$TweenProps): void;
static change(
tween: createjs$Tween,
step: createjs$TweenStep,
prop: string,
value: any,
ratio: number,
end: boolean): void;
static debug(guideData: any, ctx: any, higlight: number[]): void
}

declare export class createjs$Timeline mixins createjs$AbstractTween {
constructor(props?: createjs$TimelineProps): this;
tweens: createjs$Tween[];
addTween(tween: createjs$Tween): createjs$Tween;
removeTween(tween: createjs$Tween): boolean;
updateDuration(): void
}

declare export class createjs$AbstractTween mixins EventDispatcher {
constructor(props?: createjs$TweenProps): this;
ignoreGlobalPause: boolean;
loop: number;
useTicks: boolean;
reversed: boolean;
bounce: boolean;
timeScale: number;
duration: number;
position: number;
rawPosition: number;
paused: boolean;
currentLabel: string;
advance(delta: number, ignoreActions?: boolean): void;
setPosition(
rawPosition: number,
ignoreActions?: boolean,
jump?: boolean,
callback?: (tween: createjs$AbstractTween) => void): void;
calculatePosition(rawPosition: number): void;
getLabels(): string[];
setLabels(labels: {
[labelName: string]: number
}[]): void;
addLabel(label: string, position: number): void;
gotoAndPlay(positionOrLabel: string | number): void;
gotoAndStop(positionOrLabel: string | number): void;
resolve(positionOrLabel: string | number): number;
toString(): string
}

declare export class createjs$Tween mixins createjs$AbstractTween {
constructor(target: any, props?: createjs$TweenProps): this;
static IGNORE: any;
target: any;
pluginData: any;
passive: boolean;
static get(target: any, props?: createjs$TweenProps): createjs$Tween;
static tick(delta: number, paused: boolean): void;
static handleEvent(e: Event): void;
static removeTweens(target: any): void;
static removeAllTweens(): void;
static hasActiveTweens(target: any): boolean;
wait(duration: number, passive?: boolean): createjs$Tween;
to(props: any, duration?: number, ease?: Function): createjs$Tween;
label(name: string): createjs$Tween;
call(
callback: (...params: any[]) => void,
params?: any[],
scope?: any): createjs$Tween;
set(props: any, target?: any): createjs$Tween;
play(tween?: createjs$Tween): createjs$Tween;
pause(tween?: createjs$Tween): createjs$Tween
}

declare export class createjs$TweenJS  {
static buildDate: string;
static version: string
}
    }
