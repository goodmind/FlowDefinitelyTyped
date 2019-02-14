declare module "@tweenjs/tween.js" {
  declare export default typeof TWEEN;
}
declare module "tween.js" {
  declare var npm$namespace$TWEEN: {
    getAll: typeof TWEEN$getAll,
    removeAll: typeof TWEEN$removeAll,
    add: typeof TWEEN$add,
    remove: typeof TWEEN$remove,
    update: typeof TWEEN$update,
    now: typeof TWEEN$now,
    Easing: typeof TWEEN$Easing,
    Interpolation: typeof TWEEN$Interpolation,

    Tween: typeof TWEEN$Tween,
    Group: typeof TWEEN$Group
  };
  declare export function TWEEN$getAll(): TWEEN$Tween[];

  declare export function TWEEN$removeAll(): void;

  declare export function TWEEN$add(tween: TWEEN$Tween): void;

  declare export function TWEEN$remove(tween: TWEEN$Tween): void;

  declare export function TWEEN$update(
    time?: number,
    preserve?: boolean
  ): boolean;

  declare export function TWEEN$now(): number;

  declare export class TWEEN$Tween {
    constructor(object?: any, group?: TWEEN$Group): this;
    getId(): number;
    isPlaying(): boolean;
    to(properties: any, duration: number): TWEEN$Tween;
    start(time?: number): TWEEN$Tween;
    stop(): TWEEN$Tween;
    end(): TWEEN$Tween;
    stopChainedTweens(): TWEEN$Tween;
    group(group: TWEEN$Group): TWEEN$Tween;
    delay(amount: number): TWEEN$Tween;
    repeat(times: number): TWEEN$Tween;
    repeatDelay(times: number): TWEEN$Tween;
    yoyo(enable: boolean): TWEEN$Tween;
    easing(easing: (k: number) => number): TWEEN$Tween;
    interpolation(
      interpolation: (v: number[], k: number) => number
    ): TWEEN$Tween;
    chain(...tweens: TWEEN$Tween[]): TWEEN$Tween;
    onStart(callback: (object?: any) => void): TWEEN$Tween;
    onStop(callback: (object?: any) => void): TWEEN$Tween;
    onUpdate(callback: (object?: any) => void): TWEEN$Tween;
    onComplete(callback: (object?: any) => void): TWEEN$Tween;
    update(time: number): boolean;
  }

  declare export class TWEEN$Group {
    constructor(): this;
    getAll(): TWEEN$Tween[];
    removeAll(): void;
    add(tween: TWEEN$Tween): void;
    remove(tween: TWEEN$Tween): void;
    update(time?: number, preserve?: boolean): boolean;
  }

  declare export var TWEEN$Easing: TWEEN$Easing;

  declare export var TWEEN$Interpolation: TWEEN$Interpolation;
  declare interface Easing {
    Linear: {
      None(k: number): number
    };
    Quadratic: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Cubic: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Quartic: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Quintic: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Sinusoidal: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Exponential: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Circular: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Elastic: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Back: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
    Bounce: {
      In(k: number): number,
      Out(k: number): number,
      InOut(k: number): number
    };
  }
  declare interface Interpolation {
    Linear(v: number[], k: number): number;
    Bezier(v: number[], k: number): number;
    CatmullRom(v: number[], k: number): number;
    Utils: {
      Linear(p0: number, p1: number, t: number): number,
      Bernstein(n: number, i: number): number,
      Factorial(n: number): number,
      CatmullRom(
        p0: number,
        p1: number,
        p2: number,
        p3: number,
        t: number
      ): number
    };
  }
}
