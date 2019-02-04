declare module 'gulp-image-resize' {
        import typeof * as stream from 'stream';

	import typeof * as gm from 'gm';

	declare module.exports: typeof GulpImageResize

	declare function GulpImageResize(options?: GulpImageResize$GulpImageResize$Options): stream.Transform

	declare type GulpImageResize$SamplingFactor = [number, number];

declare interface GulpImageResize$Options {
width?: number,
height?: number,
upscale?: boolean,
crop?: boolean,
gravity?: gm.GravityDirection,
quality?: number,
format?: string,
filter?: gm.FilterType,
sharpen?: boolean | string,
samplingFactor?: GulpImageResize$SamplingFactor,
noProfile?: boolean,
interlace?: boolean,
imageMagick?: boolean,
background?: string,
flatten?: boolean,
percentage?: number,
cover?: boolean
} 
    }
