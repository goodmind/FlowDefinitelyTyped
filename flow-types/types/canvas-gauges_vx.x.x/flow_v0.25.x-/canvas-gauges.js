declare var npm$namespace$CanvasGauges: {
  GenericOptions: typeof CanvasGauges$GenericOptions
};
export type CanvasGauges$FontStyle = "normal" | "italic" | "oblique";

export type CanvasGauges$FontWeight =
  | "normal"
  | "bold"
  | "bolder"
  | "lighter"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type CanvasGauges$RenderTarget = string | HTMLElement;

export interface CanvasGauges$AnimationRule {
  (percent: number): number;
}

export interface CanvasGauges$Highlight {
  from: number;
  to: number;
  color: string;
}

export interface CanvasGauges$EventListeners {
  [key: string]: Function | [Function];
}

export type CanvasGauges$MajorTicks = string[] | number[];

export interface CanvasGauges$GenericOptions {
  renderTo: CanvasGauges$RenderTarget;
  width?: number;
  height?: number;
  minValue?: number;
  maxValue?: number;
  value?: number;
  units?: string | boolean;
  exactTicks?: boolean;
  majorTicks?: CanvasGauges$MajorTicks;
  minorTicks?: number;
  strokeTicks?: boolean;
  animatedValue?: boolean;
  animateOnInit?: boolean;
  title?: string | boolean;
  borders?: boolean;
  numbersMargin?: number;
  listeners?: CanvasGauges$EventListeners;
  valueInt?: number;
  valueDec?: number;
  majorTicksInt?: number;
  majorTicksDec?: number;
  animation?: boolean;
  animationDuration?: number;
  animationRule?: string | CanvasGauges$AnimationRule;
  colorPlate?: string;
  colorPlateEnd?: string;
  colorMajorTicks?: string;
  colorMinorTicks?: string;
  colorTitle?: string;
  colorUnits?: string;
  colorNumbers?: string;
  colorNeedle?: string;
  colorNeedleEnd?: string;
  colorValueText?: string;
  colorValueTextShadow?: string;
  colorBorderShadow?: string;
  colorBorderOuter?: string;
  colorBorderOuterEnd?: string;
  colorBorderMiddle?: string;
  colorBorderMiddleEnd?: string;
  colorBorderInner?: string;
  colorBorderInnerEnd?: string;
  colorValueBoxRect?: string;
  colorValueBoxRectEnd?: string;
  colorValueBoxBackground?: string;
  colorValueBoxShadow?: string;
  colorNeedleShadowUp?: string;
  colorNeedleShadowDown?: string;
  colorBarStroke?: string;
  colorBar?: string;
  colorBarProgress?: string;
  colorBarShadow?: string;
  fontNumbers?: string;
  fontTitle?: string;
  fontUnits?: string;
  fontValue?: string;
  fontTitleSize?: number;
  fontValueSize?: number;
  fontUnitsSize?: number;
  fontNumbersSize?: number;
  fontTitleStyle?: CanvasGauges$FontStyle;
  fontValueStyle?: CanvasGauges$FontStyle;
  fontUnitsStyle?: CanvasGauges$FontStyle;
  fontNumbersStyle?: CanvasGauges$FontStyle;
  fontTitleWeight?: CanvasGauges$FontWeight;
  fontValueWeight?: CanvasGauges$FontWeight;
  fontUnitsWeight?: CanvasGauges$FontWeight;
  fontNumbersWeight?: CanvasGauges$FontWeight;
  needle?: boolean;
  needleShadow?: boolean;
  needleType?: string;
  needleStart?: number;
  needleEnd?: number;
  needleWidth?: number;
  borderOuterWidth?: number;
  borderMiddleWidth?: number;
  borderInnerWidth?: number;
  borderShadowWidth?: number;
  valueBox?: boolean;
  valueBoxWidth?: number;
  valueBoxStroke?: number;
  valueText?: string;
  valueTextShadow?: boolean;
  valueBoxBorderRadius?: number;
  highlights?: CanvasGauges$Highlight[];
  highlightsWidth?: number;
  barWidth?: number;
  barStrokeWidth?: number;
  barProgress?: boolean;
  barShadow?: number;
}

declare export var CanvasGauges$GenericOptions: CanvasGauges$GenericOptions;

export type CanvasGauges$RadialGaugeOptions = {
  ticksAngle?: number,
  startAngle?: number,
  colorNeedleCircleOuter?: string,
  colorNeedleCircleOuterEnd?: string,
  colorNeedleCircleInner?: string,
  colorNeedleCircleInnerEnd?: string,
  needleCircleSize?: number,
  needleCircleInner?: boolean,
  needleCircleOuter?: boolean,
  animationTarget?: string,
  useMinPath?: boolean
} & CanvasGauges$GenericOptions;

export type CanvasGauges$LinearGaugeOptions = {
  borderRadius?: number,
  barBeginCircle?: number,
  colorBarEnd?: string,
  colorBarProgressEnd?: string,
  tickSide?: string,
  needleSide?: string,
  numberSide?: string,
  ticksWidth?: number,
  ticksWidthMinor?: number,
  ticksPadding?: number,
  barLength?: number
} & CanvasGauges$GenericOptions;

export interface CanvasGauges$DrawEventCallback {
  (percent: number): any;
}

export interface CanvasGauges$EndEventCallback {
  (): any;
}

export interface CanvasGauges$rules {
  linear: CanvasGauges$AnimationRule;
  quad: CanvasGauges$AnimationRule;
  dequad: CanvasGauges$AnimationRule;
  quint: CanvasGauges$AnimationRule;
  dequint: CanvasGauges$AnimationRule;
  cycle: CanvasGauges$AnimationRule;
  decycle: CanvasGauges$AnimationRule;
  bounce: CanvasGauges$AnimationRule;
  debounce: CanvasGauges$AnimationRule;
  elastic: CanvasGauges$AnimationRule;
  delastic: CanvasGauges$AnimationRule;
}

declare export class CanvasGauges$Animation {
  duration: number;
  rule: string | CanvasGauges$AnimationRule;
  draw: CanvasGauges$DrawEventCallback;
  end: CanvasGauges$EndEventCallback;
  static CanvasGauges$rules: CanvasGauges$rules;
  constructor(
    rule?: string | CanvasGauges$AnimationRule,
    duration?: number,
    draw?: CanvasGauges$DrawEventCallback,
    end?: CanvasGauges$EndEventCallback
  ): this;
  animate(
    draw?: CanvasGauges$DrawEventCallback,
    end?: CanvasGauges$EndEventCallback
  ): any;
  destroy(): any;
}

declare export class CanvasGauges$SmartCanvas {
  element: HTMLCanvasElement;
  elementClone: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  contextClone: CanvasRenderingContext2D;
  drawWidth: number;
  drawHeight: number;
  drawX: number;
  drawY: number;
  minSide: number;
  width: number;
  height: number;
  constructor(
    element: HTMLCanvasElement,
    width?: number,
    height?: number
  ): this;
  init(): any;
  onRedraw(): any;
  destroy(): any;
  commit(): CanvasGauges$SmartCanvas;
  redraw(): CanvasGauges$SmartCanvas;
  pixelRatio: number;
  static redraw(): any;
  static collection: Array<CanvasGauges$SmartCanvas>;
}

declare export class CanvasGauges$DomObserver {
  Type: CanvasGauges$BaseGauge;
  mutationsObserved: boolean;
  isObservable: boolean;
  options: CanvasGauges$GenericOptions;
  element: string;
  type: string;
  constructor(
    options: CanvasGauges$GenericOptions,
    element: string,
    type: string
  ): this;
  isValidNode(node: Node | HTMLElement): boolean;
  traverse(): any;
  observe(records: MutationRecord[]): any;
  process(node: Node | HTMLElement): CanvasGauges$BaseGauge;
  static parse(value: any): any;
  static toDashed(camelCase: string): string;
  static toAttributeName(str: string): string;
  static domReady(handler: Function): any;
}

declare export class CanvasGauges$BaseGauge {
  type: CanvasGauges$BaseGauge;
  options: CanvasGauges$GenericOptions;
  canvas: CanvasGauges$SmartCanvas;
  animation: CanvasGauges$Animation;
  value: number;
  static version: number;
  constructor(options: CanvasGauges$GenericOptions): this;
  update(options: CanvasGauges$GenericOptions): CanvasGauges$BaseGauge;
  destroy(): any;
  draw(): CanvasGauges$BaseGauge;
  static initialize(type: string, options: CanvasGauges$GenericOptions): any;
  static fromElement(element: HTMLElement): any;
  static ensureValue(value: number): number;
}

declare export class CanvasGauges$RadialGauge mixins CanvasGauges$BaseGauge {
  type: CanvasGauges$RadialGauge;
  options: CanvasGauges$RadialGaugeOptions;
  constructor(options: CanvasGauges$RadialGaugeOptions): this;
  draw(): CanvasGauges$RadialGauge;
}

declare export class CanvasGauges$LinearGauge mixins CanvasGauges$BaseGauge {
  type: CanvasGauges$LinearGauge;
  options: CanvasGauges$LinearGaugeOptions;
  constructor(options: CanvasGauges$LinearGaugeOptions): this;
  draw(): CanvasGauges$LinearGauge;
}

export type CanvasGauges$Collection = {
  get: (id: number | string) => CanvasGauges$BaseGauge
} & Array<CanvasGauges$BaseGauge>;
declare module "canvas-gauges" {
  declare export default typeof CanvasGauges;
}
declare interface Document {
  gauges: CanvasGauges$CanvasGauges$Collection;
}
declare interface Window {
  CanvasGauges$BaseGauge: CanvasGauges$CanvasGauges$BaseGauge;
  CanvasGauges$RadialGauge: CanvasGauges$CanvasGauges$RadialGauge;
  CanvasGauges$LinearGauge: CanvasGauges$CanvasGauges$LinearGauge;
}
