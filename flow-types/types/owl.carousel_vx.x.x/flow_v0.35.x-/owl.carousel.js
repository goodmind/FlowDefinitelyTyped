declare module 'owl.carousel' {
        declare interface OwlCarousel$Options {
items?: number,
margin?: number,
loop?: boolean,
center?: boolean,
mouseDrag?: boolean,
touchDrag?: boolean,
pullDrag?: boolean,
freeDrag?: boolean,
stagePadding?: number,
merge?: boolean,
mergeFit?: boolean,
autoWidth?: boolean,
startPosition?: number | string,
URLhashListener?: boolean,
nav?: boolean,
rewind?: boolean,
navText?: string[],
navElement?: string,
slideBy?: number | string,
dots?: boolean,
dotsEach?: number | boolean,
dotsData?: boolean,
lazyLoad?: boolean,
lazyLoadEager?: number,
autoplay?: boolean,
autoplayTimeout?: number,
autoplayHoverPause?: boolean,
smartSpeed?: number | boolean,
fluidSpeed?: number | boolean,
autoplaySpeed?: number | boolean,
navSpeed?: number | boolean,
dotsSpeed?: number | boolean,
dragEndSpeed?: number | boolean,
callbacks?: boolean,
responsive?: {
[breakpoint: string]: OwlCarousel$Options
},
responsiveRefreshRate?: number,
responsiveBaseElement?: Element,
video?: boolean,
videoHeight?: number | boolean,
videoWidth?: number | boolean,
animateOut?: string | boolean,
animateIn?: string | boolean,
fallbackEasing?: string,
info?: OwlCarousel$HandlerCallback,
nestedItemSelector?: string,
itemElement?: string,
stageElement?: string,
navContainer?: string | boolean,
dotsContainer?: string | boolean,
checkVisible?: boolean,
slideTransition?: string,
autoHeight?: boolean,
refreshClass?: string,
loadingClass?: string,
loadedClass?: string,
rtlClass?: string,
dragClass?: string,
grabClass?: string,
stageClass?: string,
stageOuterClass?: string,
navContainerClass?: string,
navClass?: string[],
controlsClass?: string,
dotClass?: string,
dotsClass?: string,
autoHeightClass?: string,
responsiveClass?: string | boolean,
onInitialize?: OwlCarousel$HandlerCallback,
onInitialized?: OwlCarousel$HandlerCallback,
onResize?: OwlCarousel$HandlerCallback,
onResized?: OwlCarousel$HandlerCallback,
onRefresh?: OwlCarousel$HandlerCallback,
onRefreshed?: OwlCarousel$HandlerCallback,
onDrag?: OwlCarousel$HandlerCallback,
onDragged?: OwlCarousel$HandlerCallback,
onTranslate?: OwlCarousel$HandlerCallback,
onTranslated?: OwlCarousel$HandlerCallback,
onChange?: OwlCarousel$HandlerCallback,
onChanged?: OwlCarousel$HandlerCallback,
onLoadLazy?: OwlCarousel$HandlerCallback,
onLoadedLazy?: OwlCarousel$HandlerCallback,
onStopVideo?: OwlCarousel$HandlerCallback,
onPlayVideo?: OwlCarousel$HandlerCallback
} 

declare type OwlCarousel$HandlerCallback = (...args: any[]) => void;

declare type OwlCarousel$OnEvent = "initialize.owl.carousel"
| "initialized.owl.carousel"
| "resize.owl.carousel"
| "resized.owl.carousel"
| "refresh.owl.carousel"
| "refreshed.owl.carousel"
| "drag.owl.carousel"
| "dragged.owl.carousel"
| "translate.owl.carousel"
| "translated.owl.carousel"
| "change.owl.carousel"
| "changed.owl.carousel"
| "load.owl.lazy"
| "loaded.owl.lazy"
| "stop.owl.video"
| "play.owl.video";

declare type OwlCarousel$TriggerEvent = "refresh.owl.carousel"
| "next.owl.carousel"
| "prev.owl.carousel"
| "to.owl.carousel"
| "destroy.owl.carousel"
| "replace.owl.carousel"
| "add.owl.carousel"
| "remove.owl.carousel"
| "play.owl.autoplay"
| "stop.owl.autoplay";
	declare interface JQuery {
owlCarousel(options?: OwlCarousel$OwlCarousel$Options | "destroy"): JQuery,
on(
event: OwlCarousel$OwlCarousel$OnEvent,
handler: OwlCarousel$OwlCarousel$HandlerCallback): JQuery,
trigger(event: OwlCarousel$OwlCarousel$TriggerEvent): JQuery
} 
    }
