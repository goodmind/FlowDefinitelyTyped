declare module 'd3kit' {
        declare export class Base  {
constructor(options?: ChartOptions): this;
static getDefaultOptions(options?: ChartOptions): ChartOptions;
copyDimension(another: Base): this;
width(value: number): this;
width(): number;
height(value: number): this;
height(): number;
dimension(dimensions: [number, number]): this;
dimension(): [number, number];
margin(margins: ChartMargin): this;
margin(): ChartMargin;
offset(offset: [number, number]): this;
offset(): [number, number];
pixelRatio(value: number): this;
pixelRatio(): number;
updateDimensionNow(): this
}
	declare export class AbstractPlate mixins Base {
constructor(selector: string | Element, options?: ChartOptions): this;
static getDefaultOptions(options?: ChartOptions): ChartOptions;
getNode(): Element;
getSelection(): d3.Selection<d3.BaseType, any, d3.BaseType, any>
}
	declare export class CanvasPlate mixins AbstractPlate {
constructor(options?: ChartOptions): this;
static getDefaultOptions(options?: ChartOptions): ChartOptions;
getContext2d(): CanvasRenderingContext2D;
clear(): this
}
	declare export class DivPlate mixins AbstractPlate {
constructor(options?: ChartOptions): this;
static getDefaultOptions(options?: ChartOptions): ChartOptions
}
	declare export class SvgPlate mixins AbstractPlate {
rootG: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
layers: LayerOrganizer;
constructor(options?: ChartOptions): this;
static getDefaultOptions(options?: ChartOptions): ChartOptions
}
	declare export class AbstractChart mixins Base {
constructor(selector: string | Element, options?: ChartOptions): this;
static getCustomEventNames(): string[];
addPlate(name: string, plate: AbstractPlate, doNotAppend: boolean): AbstractPlate;
addPlate(name: string, plate: AbstractPlate): this;
removePlate(name: string): this;
setupDispatcher(customEventNames?: string[]): this;
getCustomEventNames(): string[];
getInnerWidth(): number;
getInnerHeight(): number;
data(data: any): this;
data(): any;
options(options: ChartOptions): this;
options(): ChartOptions;
hasData(): boolean;
hasNonZeroArea(): boolean;
fit(fitOptions?: FitOptions, watchOptions?: boolean | WatchOptions): this;
stopFitWatcher(): this;
on(name: string, listener: () => void): this;
off(name: string): this;
dispatchAs(name: string, ...args: any[]): (...args: any[]) => void;
destroy(): this
}
	declare export interface ChartMargin {
top?: number,
right?: number,
bottom?: number,
left?: number
} 
	declare export interface ChartOptions {
initialWidth?: number,
initialHeight?: number,
margin?: ChartMargin,
offset?: [number, number],
pixelRatio?: number
} 
	declare export interface FitOptions {
mode?: string,
width?: string | number,
height?: string | number,
ratio?: number,
maxWidth?: string | number,
maxHeight?: string | number
} 
	declare export interface WatchOptions {
mode?: string,
target?: Element | [number, number] | {
width: number,
height: number
} | null,
interval?: number
} 
	declare export class SvgChart mixins AbstractChart {
svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
rootG: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
layers: LayerOrganizer;
plate: SvgPlate;
constructor(selector: string | Element, options?: ChartOptions): this
}
	declare export class CanvasChart mixins AbstractChart {
constructor(selector: string | Element, options?: ChartOptions): this;
static getDefaultOptions(): ChartOptions;
getContext2d(): CanvasRenderingContext2D;
clear(): this
}
	declare export class HybridChart mixins CanvasChart {
svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
rootG: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
layers: LayerOrganizer;
plate: SvgPlate;
constructor(selector: string | Element, options?: ChartOptions): this;
static getDefaultOptions(): ChartOptions
}
	declare export class LayerOrganizer  {
constructor(container: d3.Selection<d3.BaseType, any, d3.BaseType, any>, defaultTag?: string): this;
create(
layerNames: string | string[] | LayerConfig | LayerConfig[]): d3.Selection<d3.BaseType, any, d3.BaseType, any> | Array<d3.Selection<d3.BaseType, any, d3.BaseType, any>>;
get(name: string): d3.Selection<d3.BaseType, any, d3.BaseType, any>;
has(name: string): boolean
}
	declare export interface LayerConfig {
[layerName: string]: string | string[] | LayerConfig | LayerConfig[]
} 
	
      declare var npm$namespace$helper: {
        debounce: typeof helper$debounce,
deepExtend: typeof helper$deepExtend,
extend: typeof helper$extend,
functor: typeof helper$functor,
rebind: typeof helper$rebind,
isFunction: typeof helper$isFunction,
isObject: typeof helper$isObject,
kebabCase: typeof helper$kebabCase,
throttle: typeof helper$throttle,
        
      }
declare function helper$debounce(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void


declare function helper$deepExtend(dest: any, ...args: any[]): any


declare function helper$extend(dest: any, ...args: any[]): any


declare function helper$functor(value: any): (...args: any[]) => any


declare function helper$rebind(target: any, source: any): any


declare function helper$isFunction(value: any): boolean


declare function helper$isObject(value: any): boolean


declare function helper$kebabCase(str: string): string


declare function helper$throttle(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void

    }
