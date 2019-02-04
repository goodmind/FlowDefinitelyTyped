declare module 'nivo-slider' {
        declare export type EffectType = "sliceDown"
| "sliceDownLeft"
| "sliceUp"
| "sliceUpLeft"
| "sliceUpDown"
| "sliceUpDownLeft"
| "fold"
| "fade"
| "random"
| "slideInRight"
| "slideInLeft"
| "boxRandom"
| "boxRain"
| "boxRainReverse"
| "boxRainGrow"
| "boxRainGrowReverse";
	declare export interface Options {
effect?: EffectType,
slices?: number,
boxCols?: number,
boxRows?: number,
animSpeed?: number,
pauseTime?: number,
startSlide?: number,
directionNav?: boolean,
controlNav?: boolean,
controlNavThumbs?: boolean,
pauseOnHover?: boolean,
manualAdvance?: boolean,
prevText?: string,
nextText?: string,
randomStart?: boolean,
beforeChange?: () => void,
afterChange?: () => void,
slideshowEnd?: () => void,
lastSlide?: () => void,
afterLoad?: () => void
} 
	declare module 'global' {
        declare interface JQuery {
nivoSlider(options?: Options): JQuery
} 
    }

    }
