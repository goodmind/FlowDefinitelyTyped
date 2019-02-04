declare module 'exif' {
        declare interface Exif$ExifData {
image: {
Copyright?: string,
ExifOffset?: number,
ImageHeight?: number,
ImageWidth?: number,
Make?: string,
Model?: string,
ModifyDate?: string,
Orientation?: number,
ResolutionUnit?: number,
Software?: string,
XResolution?: number,
YCbCrPositioning?: number,
YResolution?: number
},
thumbnail: {
Compression?: number,
Orientation?: number,
ResolutionUnit?: number,
ThumbnailLength?: number,
ThumbnailOffset?: number,
XResolution?: number,
YCbCrPositioning?: number,
YResolution?: number
},
exif: {
ApertureValue?: number,
BrightnessValue?: number,
ColorSpace?: number,
ComponentsConfiguration?: Buffer,
CompressedBitsPerPixel?: number,
CreateDate?: string,
DateTimeOriginal?: string,
ExifImageHeight?: number,
ExifImageWidth?: number,
ExifVersion?: Buffer,
ExposureCompensation?: number,
ExposureMode?: number,
ExposureProgram?: number,
ExposureTime?: number,
FileSource?: Buffer,
Flash?: number,
FlashpixVersion?: Buffer,
FNumber?: number,
FocalLength?: number,
FocalLengthIn35mmFormat?: number,
FocalPlaneResolutionUnit?: number,
FocalPlaneXResolution?: number,
FocalPlaneYResolution?: number,
ImageUniqueID?: string,
InteropOffset?: number,
ISO?: number,
MakerNote?: Buffer,
MaxApertureValue?: number,
MeteringMode?: number,
SceneCaptureType?: number,
SceneType?: Buffer,
SensingMethod?: number,
ShutterSpeedValue?: number,
UserComment?: Buffer,
WhiteBalance?: number
},
gps: {
GPSAltitude?: number,
GPSAltitudeRef?: number,
GPSDateStamp?: string,
GPSLatitude?: number[],
GPSLatitudeRef?: string,
GPSLongitude?: number[],
GPSLongitudeRef?: string,
GPSTimeStamp?: number[],
GPSVersionId?: number[]
},
interoperability: {
InteropIndex?: string,
InteropVersion?: Buffer
},
makernote: {
AutoBracketing?: number,
BlurWarning?: number,
ExposureWarning?: number,
error?: string,
FlashExposureComp?: number,
FocusMode?: number,
FocusWarning?: number,
FujiFlashMode?: number,
Macro?: number,
Quality?: string,
Sharpness?: number,
SlowSync?: number,
Version?: Buffer,
WhiteBalance?: number
}
} 

declare interface Exif$ExifOptions {
agfaMaxEntries?: number,
epsonMaxEntries?: number,

/**
 * node-exif corrects the thumbnail offset in order to have an offset from the start of the buffer/file.
 */
fixThumbnailOffset?: boolean,
fujifilmMaxEntries?: number,
ifd0MaxEntries?: number,
ifd1MaxEntries?: number,

/**
 * The image to get Exif data from can be either a filesystem path or a Buffer.
 * 
 * If `image` is not specified, the developer must call `loadImage()` to parse the image.
 */
image?: string | Buffer,

/**
 * Specifies the maximum entries to be parsed
 */
maxEntries?: number,
maxGpsEntries?: number,
maxInteroperabilityEntries?: number,
noPadding?: boolean,
olympusMaxEntries?: number,
panasonicMaxEntries?: number,
sanyoMaxEntries?: number,

/**
 * An object named "offsets" is added to exifData and contains lot of offsets needed to get thumbnail and other things.
 */
tiffOffsets?: number
} 

declare type Exif$ExifImageCallback = (error: Error | null, data: Exif$ExifData) => void;

declare type Exif$ExifCallback = (error: Error | null, data: Exif$ExifData, dataPath: string) => void;

declare class Exif$ExifImage  {
constructor(options: Exif$ExifOptions | string | Buffer, callback: Exif$ExifImageCallback): this;
constructor(): this;
loadImage(file: string | Buffer, callback: Exif$ExifImageCallback): void
}
	declare function Exif(path: string, callback: Exif$Exif$ExifCallback): void

	declare module.exports: typeof Exif

    }
