declare var Velocity: jquery$velocity.velocity$VelocityStatic;
declare module "velocity-animate" {
  declare module.exports: typeof Velocity;
}
declare interface JQuery {
  velocity(
    name: string,
    options: jquery$velocity.velocity$RegisteredEffectOptions
  ): JQuery;
  velocity(options: {
    properties: jquery$velocity.velocity$Properties,
    options: jquery$velocity.velocity$Options
  }): JQuery;
  velocity(
    properties: jquery$velocity.velocity$Properties,
    options: jquery$velocity.velocity$Options
  ): JQuery;
  velocity(
    properties: jquery$velocity.velocity$Properties,
    duration: number,
    easing: jquery$velocity.velocity$Easing,
    complete?: jquery$velocity.velocity$ElementCallback
  ): JQuery;
  velocity(
    properties: jquery$velocity.velocity$Properties,
    duration: number,
    complete?: jquery$velocity.velocity$ElementCallback
  ): JQuery;
  velocity(
    properties: jquery$velocity.velocity$Properties,
    easing: jquery$velocity.velocity$Easing,
    complete?: jquery$velocity.velocity$ElementCallback
  ): JQuery;
  velocity(
    properties: jquery$velocity.velocity$Properties,
    complete?: jquery$velocity.velocity$ElementCallback
  ): JQuery;
}
declare interface JQueryStatic {
  Velocity: jquery$velocity.velocity$VelocityStatic;
}
declare type velocity$Properties = Object;

declare type velocity$Easing = string | number[];

declare type velocity$ElementCallback = (
  elements: NodeListOf<HTMLElement>
) => void;

declare type velocity$ProgressCallback = (
  elements: NodeListOf<HTMLElement>,
  percentComplete: number,
  timeRemaining: number,
  timeStart: number,
  tweenValue: number
) => void;

declare type velocity$EffectCall =
  | [velocity$Properties]
  | [velocity$Properties, number]
  | [velocity$Properties, velocity$EffectCallOptions]
  | [velocity$Properties, number, velocity$EffectCallOptions];

declare interface velocity$EffectCallOptions {
  delay?: any;
  easing?: any;
}

declare interface velocity$CommonOptions {
  duration?: string | number;
  begin?: velocity$ElementCallback;
  complete?: velocity$ElementCallback;
  display?: string | boolean;
  delay?: number | boolean;
  mobileHA?: boolean;
  _cacheValues?: boolean;
  container?: JQuery;
  axis?: string;
  offset?: number;
}

declare type velocity$Options = {
  queue?: string | boolean,
  easing?: velocity$Easing,
  progress?: velocity$ProgressCallback,
  loop?: number | boolean
} & velocity$CommonOptions;

declare interface velocity$RegisterEffectOptions {
  defaultDuration?: number;
  calls: velocity$EffectCall[];
  reset?: Object;
}

declare type velocity$RegisteredEffectOptions = {
  stagger?: number,
  drag?: boolean,
  backwards?: boolean
} & velocity$CommonOptions;

declare interface velocity$SequenceCall {
  e: HTMLElement | JQuery;
  p: velocity$Properties;
  o: velocity$SequenceOptions;
}

declare type velocity$SequenceOptions = {
  sequenceQueue?: boolean
} & velocity$Options;

declare interface velocity$VelocityStatic {
  Sequences: any;
  mock: any;
  animate(options: {
    elements: HTMLCollection | NodeListOf<HTMLElement>,
    properties: velocity$Properties,
    options: velocity$Options
  }): any;
  animate(
    elements: HTMLElement | HTMLCollection | NodeListOf<HTMLElement>,
    properties: velocity$Properties,
    options: velocity$Options
  ): any;
  RegisterEffect(
    name: string,
    options: velocity$RegisterEffectOptions
  ): velocity$VelocityStatic;
  RunSequence(sequence: velocity$SequenceCall[]): velocity$VelocityStatic;

  /**
   * Get a hook value. Hooks are the subvalues of multi-value CSS properties.
   * It features the same API as $.css().
   */
  hook(element: HTMLElement | JQuery, cssKey: string): string;

  /**
   * Set a hook value. Hooks are the subvalues of multi-value CSS properties.
   * It features the same API as $.css().
   */
  hook(element: HTMLElement | JQuery, cssKey: string, cssValue: string): void;
}
