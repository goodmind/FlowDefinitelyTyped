declare module 'smooth-scroll' {
        declare module.exports: typeof SmoothScroll

	declare type SmoothScroll$Easing = "Linear"
| "easeInQuad"
| "easeInCubic"
| "easeInQuart"
| "easeInQuint"
| "easeInOutQuad"
| "easeInOutCubic"
| "easeInOutQuart"
| "easeInOutQuint"
| "easeOutQuad"
| "easeOutCubic"
| "easeOutQuart"
| "easeOutQuint";

declare interface SmoothScroll$Options {
ignore?: string,
header?: string,
topOnEmptyHash?: boolean,
speed?: number,
clip?: boolean,
offset?: number | ((anchor?: Element | number | null, toggle?: Element | null) => number),
easing?: SmoothScroll$Easing,
customEasing?: (time: number) => number,
updateURL?: boolean,
popstate?: boolean,
emitEvents?: boolean
} 
	declare class SmoothScroll  {
constructor(selector?: string, options?: SmoothScroll$SmoothScroll$Options): this;
init(options?: SmoothScroll$SmoothScroll$Options): void;
destroy(): void;
animateScroll(
anchor: Element | number | null,
toggle?: Element | null,
options?: SmoothScroll$SmoothScroll$Options): void;
cancelScroll(noEvent?: boolean): void
}
    }
