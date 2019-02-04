declare module 'fluent-ffmpeg' {
        import typeof * as events from 'events';

	import typeof * as stream from 'stream';

	
      declare var npm$namespace$Ffmpeg: {
        setFfmpegPath: typeof Ffmpeg$setFfmpegPath,
setFfprobePath: typeof Ffmpeg$setFfprobePath,
setFlvtoolPath: typeof Ffmpeg$setFlvtoolPath,
availableFilters: typeof Ffmpeg$availableFilters,
getAvailableFilters: typeof Ffmpeg$getAvailableFilters,
availableCodecs: typeof Ffmpeg$availableCodecs,
getAvailableCodecs: typeof Ffmpeg$getAvailableCodecs,
availableEncoders: typeof Ffmpeg$availableEncoders,
getAvailableEncoders: typeof Ffmpeg$getAvailableEncoders,
availableFormats: typeof Ffmpeg$availableFormats,
getAvailableFormats: typeof Ffmpeg$getAvailableFormats,
ffprobe: typeof Ffmpeg$ffprobe,
        
      }
declare interface Ffmpeg$FfmpegCommandLogger {
error(...data: any[]): void,
warn(...data: any[]): void,
info(...data: any[]): void,
debug(...data: any[]): void
} 

declare interface Ffmpeg$FfmpegCommandOptions {
logger?: Ffmpeg$FfmpegCommandLogger,
niceness?: number,
priority?: number,
presets?: string,
preset?: string,
stdoutLines?: number,
timeout?: number,
source?: string | stream.Readable
} 

declare interface Ffmpeg$FilterSpecification {
filter: string,
inputs: string | string[],
outputs: string | string[],
options?: any | string | any[]
} 

declare type Ffmpeg$GetPreset = (command: Ffmpeg$FfmpegCommand) => string;

declare interface Ffmpeg$Filter {
description: string,
input: string,
multipleInputs: boolean,
output: string,
multipleOutputs: boolean
} 

declare interface Ffmpeg$Filters {
[key: string]: Ffmpeg$Filter
} 

declare type Ffmpeg$FiltersCallback = (err: Error, filters: Ffmpeg$Filters) => void;

declare interface Ffmpeg$Codec {
type: string,
description: string,
canDecode: boolean,
canEncode: boolean,
drawHorizBand?: boolean,
directRendering?: boolean,
weirdFrameTruncation?: boolean,
intraFrameOnly?: boolean,
isLossy?: boolean,
isLossless?: boolean
} 

declare interface Ffmpeg$Codecs {
[key: string]: Ffmpeg$Codec
} 

declare type Ffmpeg$CodecsCallback = (err: Error, codecs: Ffmpeg$Codecs) => void;

declare interface Ffmpeg$Encoder {
type: string,
description: string,
frameMT: boolean,
sliceMT: boolean,
experimental: boolean,
drawHorizBand: boolean,
directRendering: boolean
} 

declare interface Ffmpeg$Encoders {
[key: string]: Ffmpeg$Encoder
} 

declare type Ffmpeg$EncodersCallback = (err: Error, encoders: Ffmpeg$Encoders) => void;

declare interface Ffmpeg$Format {
description: string,
canDemux: boolean,
canMux: boolean
} 

declare interface Ffmpeg$Formats {
[key: string]: Ffmpeg$Format
} 

declare type Ffmpeg$FormatsCallback = (err: Error, formats: Ffmpeg$Formats) => void;

declare interface Ffmpeg$FfprobeData {
streams: any[],
format: any,
chapters: any[]
} 

declare interface Ffmpeg$ScreenshotsConfig {
count?: number,
folder?: string,
filename?: string,
timemarks?: number[] | string[],
timestamps?: number[] | string[],
fastSeek?: boolean,
size?: string
} 

declare interface Ffmpeg$AudioVideoFilter {
filter: string,
options: string | string[] | {}
} 

declare function Ffmpeg$setFfmpegPath(path: string): Ffmpeg$FfmpegCommand


declare function Ffmpeg$setFfprobePath(path: string): Ffmpeg$FfmpegCommand


declare function Ffmpeg$setFlvtoolPath(path: string): Ffmpeg$FfmpegCommand


declare function Ffmpeg$availableFilters(callback: Ffmpeg$FiltersCallback): void


declare function Ffmpeg$getAvailableFilters(callback: Ffmpeg$FiltersCallback): void


declare function Ffmpeg$availableCodecs(callback: Ffmpeg$CodecsCallback): void


declare function Ffmpeg$getAvailableCodecs(callback: Ffmpeg$CodecsCallback): void


declare function Ffmpeg$availableEncoders(callback: Ffmpeg$EncodersCallback): void


declare function Ffmpeg$getAvailableEncoders(callback: Ffmpeg$EncodersCallback): void


declare function Ffmpeg$availableFormats(callback: Ffmpeg$FormatsCallback): void


declare function Ffmpeg$getAvailableFormats(callback: Ffmpeg$FormatsCallback): void


declare class Ffmpeg$FfmpegCommand mixins events.EventEmitter {
constructor(options?: Ffmpeg$FfmpegCommandOptions): this;
constructor(input?: string | stream.Readable, options?: Ffmpeg$FfmpegCommandOptions): this;
mergeAdd(source: string | stream.Readable): Ffmpeg$FfmpegCommand;
addInput(source: string | stream.Readable): Ffmpeg$FfmpegCommand;
input(source: string | stream.Readable): Ffmpeg$FfmpegCommand;
withInputFormat(format: string): Ffmpeg$FfmpegCommand;
inputFormat(format: string): Ffmpeg$FfmpegCommand;
fromFormat(format: string): Ffmpeg$FfmpegCommand;
withInputFps(fps: number): Ffmpeg$FfmpegCommand;
withInputFPS(fps: number): Ffmpeg$FfmpegCommand;
withFpsInput(fps: number): Ffmpeg$FfmpegCommand;
withFPSInput(fps: number): Ffmpeg$FfmpegCommand;
inputFPS(fps: number): Ffmpeg$FfmpegCommand;
inputFps(fps: number): Ffmpeg$FfmpegCommand;
fpsInput(fps: number): Ffmpeg$FfmpegCommand;
FPSInput(fps: number): Ffmpeg$FfmpegCommand;
nativeFramerate(): Ffmpeg$FfmpegCommand;
withNativeFramerate(): Ffmpeg$FfmpegCommand;
native(): Ffmpeg$FfmpegCommand;
setStartTime(seek: string | number): Ffmpeg$FfmpegCommand;
seekInput(seek: string | number): Ffmpeg$FfmpegCommand;
loop(duration: string | number): Ffmpeg$FfmpegCommand;
withNoAudio(): Ffmpeg$FfmpegCommand;
noAudio(): Ffmpeg$FfmpegCommand;
withAudioCodec(codec: string): Ffmpeg$FfmpegCommand;
audioCodec(codec: string): Ffmpeg$FfmpegCommand;
withAudioBitrate(bitrate: string | number): Ffmpeg$FfmpegCommand;
audioBitrate(bitrate: string | number): Ffmpeg$FfmpegCommand;
withAudioChannels(channels: number): Ffmpeg$FfmpegCommand;
audioChannels(channels: number): Ffmpeg$FfmpegCommand;
withAudioFrequency(freq: number): Ffmpeg$FfmpegCommand;
audioFrequency(freq: number): Ffmpeg$FfmpegCommand;
withAudioQuality(quality: number): Ffmpeg$FfmpegCommand;
audioQuality(quality: number): Ffmpeg$FfmpegCommand;
withAudioFilter(filters: string | string[] | Ffmpeg$AudioVideoFilter[]): Ffmpeg$FfmpegCommand;
withAudioFilters(filters: string | string[] | Ffmpeg$AudioVideoFilter[]): Ffmpeg$FfmpegCommand;
audioFilter(filters: string | string[] | Ffmpeg$AudioVideoFilter[]): Ffmpeg$FfmpegCommand;
audioFilters(filters: string | string[] | Ffmpeg$AudioVideoFilter[]): Ffmpeg$FfmpegCommand;
withNoVideo(): Ffmpeg$FfmpegCommand;
noVideo(): Ffmpeg$FfmpegCommand;
withVideoCodec(codec: string): Ffmpeg$FfmpegCommand;
videoCodec(codec: string): Ffmpeg$FfmpegCommand;
withVideoBitrate(bitrate: string | number): Ffmpeg$FfmpegCommand;
videoBitrate(bitrate: string | number): Ffmpeg$FfmpegCommand;
withVideoFilter(filters: string | string[] | Ffmpeg$AudioVideoFilter[]): Ffmpeg$FfmpegCommand;
withVideoFilters(filters: string | string[] | Ffmpeg$AudioVideoFilter[]): Ffmpeg$FfmpegCommand;
videoFilter(filters: string | string[] | Ffmpeg$AudioVideoFilter[]): Ffmpeg$FfmpegCommand;
videoFilters(filters: string | string[] | Ffmpeg$AudioVideoFilter[]): Ffmpeg$FfmpegCommand;
withOutputFps(fps: number): Ffmpeg$FfmpegCommand;
withOutputFPS(fps: number): Ffmpeg$FfmpegCommand;
withFpsOutput(fps: number): Ffmpeg$FfmpegCommand;
withFPSOutput(fps: number): Ffmpeg$FfmpegCommand;
withFps(fps: number): Ffmpeg$FfmpegCommand;
withFPS(fps: number): Ffmpeg$FfmpegCommand;
outputFPS(fps: number): Ffmpeg$FfmpegCommand;
outputFps(fps: number): Ffmpeg$FfmpegCommand;
fpsOutput(fps: number): Ffmpeg$FfmpegCommand;
FPSOutput(fps: number): Ffmpeg$FfmpegCommand;
fps(fps: number): Ffmpeg$FfmpegCommand;
FPS(fps: number): Ffmpeg$FfmpegCommand;
takeFrames(frames: number): Ffmpeg$FfmpegCommand;
withFrames(frames: number): Ffmpeg$FfmpegCommand;
frames(frames: number): Ffmpeg$FfmpegCommand;
keepPixelAspect(): Ffmpeg$FfmpegCommand;
keepDisplayAspect(): Ffmpeg$FfmpegCommand;
keepDisplayAspectRatio(): Ffmpeg$FfmpegCommand;
keepDAR(): Ffmpeg$FfmpegCommand;
withSize(size: string): Ffmpeg$FfmpegCommand;
setSize(size: string): Ffmpeg$FfmpegCommand;
size(size: string): Ffmpeg$FfmpegCommand;
withAspect(aspect: string | number): Ffmpeg$FfmpegCommand;
withAspectRatio(aspect: string | number): Ffmpeg$FfmpegCommand;
setAspect(aspect: string | number): Ffmpeg$FfmpegCommand;
setAspectRatio(aspect: string | number): Ffmpeg$FfmpegCommand;
aspect(aspect: string | number): Ffmpeg$FfmpegCommand;
aspectRatio(aspect: string | number): Ffmpeg$FfmpegCommand;
applyAutopadding(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
applyAutoPadding(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
applyAutopad(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
applyAutoPad(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
withAutopadding(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
withAutoPadding(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
withAutopad(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
withAutoPad(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
autoPad(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
autopad(pad: boolean, color: string): Ffmpeg$FfmpegCommand;
addOutput(
target: string | stream.Writable,
pipeopts?: {
end?: boolean
}): Ffmpeg$FfmpegCommand;
output(
target: string | stream.Writable,
pipeopts?: {
end?: boolean
}): Ffmpeg$FfmpegCommand;
seekOutput(seek: string | number): Ffmpeg$FfmpegCommand;
seek(seek: string | number): Ffmpeg$FfmpegCommand;
withDuration(duration: string | number): Ffmpeg$FfmpegCommand;
setDuration(duration: string | number): Ffmpeg$FfmpegCommand;
duration(duration: string | number): Ffmpeg$FfmpegCommand;
toFormat(format: string): Ffmpeg$FfmpegCommand;
withOutputFormat(format: string): Ffmpeg$FfmpegCommand;
outputFormat(format: string): Ffmpeg$FfmpegCommand;
format(format: string): Ffmpeg$FfmpegCommand;
map(spec: string): Ffmpeg$FfmpegCommand;
updateFlvMetadata(): Ffmpeg$FfmpegCommand;
flvmeta(): Ffmpeg$FfmpegCommand;
preset(format: string): Ffmpeg$FfmpegCommand;
addInputOption(options: string[]): Ffmpeg$FfmpegCommand;
addInputOption(...options: string[]): Ffmpeg$FfmpegCommand;
addInputOptions(options: string[]): Ffmpeg$FfmpegCommand;
addInputOptions(...options: string[]): Ffmpeg$FfmpegCommand;
withInputOption(options: string[]): Ffmpeg$FfmpegCommand;
withInputOption(...options: string[]): Ffmpeg$FfmpegCommand;
withInputOptions(options: string[]): Ffmpeg$FfmpegCommand;
withInputOptions(...options: string[]): Ffmpeg$FfmpegCommand;
inputOption(options: string[]): Ffmpeg$FfmpegCommand;
inputOption(...options: string[]): Ffmpeg$FfmpegCommand;
inputOptions(options: string[]): Ffmpeg$FfmpegCommand;
inputOptions(...options: string[]): Ffmpeg$FfmpegCommand;
addOutputOption(options: string[]): Ffmpeg$FfmpegCommand;
addOutputOption(...options: string[]): Ffmpeg$FfmpegCommand;
addOutputOptions(options: string[]): Ffmpeg$FfmpegCommand;
addOutputOptions(...options: string[]): Ffmpeg$FfmpegCommand;
addOption(options: string[]): Ffmpeg$FfmpegCommand;
addOption(...options: string[]): Ffmpeg$FfmpegCommand;
addOptions(options: string[]): Ffmpeg$FfmpegCommand;
addOptions(...options: string[]): Ffmpeg$FfmpegCommand;
withOutputOption(options: string[]): Ffmpeg$FfmpegCommand;
withOutputOption(...options: string[]): Ffmpeg$FfmpegCommand;
withOutputOptions(options: string[]): Ffmpeg$FfmpegCommand;
withOutputOptions(...options: string[]): Ffmpeg$FfmpegCommand;
withOption(options: string[]): Ffmpeg$FfmpegCommand;
withOption(...options: string[]): Ffmpeg$FfmpegCommand;
withOptions(options: string[]): Ffmpeg$FfmpegCommand;
withOptions(...options: string[]): Ffmpeg$FfmpegCommand;
outputOption(options: string[]): Ffmpeg$FfmpegCommand;
outputOption(...options: string[]): Ffmpeg$FfmpegCommand;
outputOptions(options: string[]): Ffmpeg$FfmpegCommand;
outputOptions(...options: string[]): Ffmpeg$FfmpegCommand;
filterGraph(
spec: string | Ffmpeg$FilterSpecification[],
map: string[]): Ffmpeg$FfmpegCommand;
complexFilter(
spec: string | Ffmpeg$FilterSpecification[],
map: string[]): Ffmpeg$FfmpegCommand;
usingPreset(proset: string | Ffmpeg$GetPreset): Ffmpeg$FfmpegCommand;
pnreset(proset: string | Ffmpeg$GetPreset): Ffmpeg$FfmpegCommand;
renice(niceness: number): Ffmpeg$FfmpegCommand;
kill(signal: string): Ffmpeg$FfmpegCommand;
setFfmpegPath(path: string): Ffmpeg$FfmpegCommand;
setFfprobePath(path: string): Ffmpeg$FfmpegCommand;
setFlvtoolPath(path: string): Ffmpeg$FfmpegCommand;
availableFilters(callback: Ffmpeg$FiltersCallback): void;
getAvailableFilters(callback: Ffmpeg$FiltersCallback): void;
availableCodecs(callback: Ffmpeg$CodecsCallback): void;
getAvailableCodecs(callback: Ffmpeg$CodecsCallback): void;
availableEncoders(callback: Ffmpeg$EncodersCallback): void;
getAvailableEncoders(callback: Ffmpeg$EncodersCallback): void;
availableFormats(callback: Ffmpeg$FormatsCallback): void;
getAvailableFormats(callback: Ffmpeg$FormatsCallback): void;
ffprobe(callback: (err: any, data: Ffmpeg$FfprobeData) => void): void;
ffprobe(index: number, callback: (err: any, data: Ffmpeg$FfprobeData) => void): void;
ffprobe(
options: string[],
callback: (err: any, data: Ffmpeg$FfprobeData) => void): void;
ffprobe(
index: number,
options: string[],
callback: (err: any, data: Ffmpeg$FfprobeData) => void): void;
saveToFile(output: string): Ffmpeg$FfmpegCommand;
save(output: string): Ffmpeg$FfmpegCommand;
writeToStream(stream: stream.Writable, options?: {
end?: boolean
}): stream.Writable;
pipe(
stream?: stream.Writable,
options?: {
end?: boolean
}): stream.Writable | stream.PassThrough;
stream(stream: stream.Writable, options?: {
end?: boolean
}): stream.Writable;
takeScreenshots(
config: number | Ffmpeg$ScreenshotsConfig,
folder?: string): Ffmpeg$FfmpegCommand;
thumbnail(
config: number | Ffmpeg$ScreenshotsConfig,
folder?: string): Ffmpeg$FfmpegCommand;
thumbnails(
config: number | Ffmpeg$ScreenshotsConfig,
folder?: string): Ffmpeg$FfmpegCommand;
screenshot(
config: number | Ffmpeg$ScreenshotsConfig,
folder?: string): Ffmpeg$FfmpegCommand;
screenshots(
config: number | Ffmpeg$ScreenshotsConfig,
folder?: string): Ffmpeg$FfmpegCommand;
mergeToFile(
target: string | stream.Writable,
options?: {
end?: boolean
}): Ffmpeg$FfmpegCommand;
concatenate(
target: string | stream.Writable,
options?: {
end?: boolean
}): Ffmpeg$FfmpegCommand;
concat(
target: string | stream.Writable,
options?: {
end?: boolean
}): Ffmpeg$FfmpegCommand;
clone(): Ffmpeg$FfmpegCommand;
run(): void
}

declare function Ffmpeg$ffprobe(file: string, callback: (err: any, data: Ffmpeg$FfprobeData) => void): void


declare function Ffmpeg$ffprobe(
file: string,
index: number,
callback: (err: any, data: Ffmpeg$FfprobeData) => void): void


declare function Ffmpeg$ffprobe(
file: string,
options: string[],
callback: (err: any, data: Ffmpeg$FfprobeData) => void): void


declare function Ffmpeg$ffprobe(
file: string,
index: number,
options: string[],
callback: (err: any, data: Ffmpeg$FfprobeData) => void): void

	declare function Ffmpeg(options?: Ffmpeg$Ffmpeg$FfmpegCommandOptions): Ffmpeg$Ffmpeg$FfmpegCommand

	declare function Ffmpeg(
input?: string | stream.Readable,
options?: Ffmpeg$Ffmpeg$FfmpegCommandOptions): Ffmpeg$Ffmpeg$FfmpegCommand

	declare module.exports: typeof Ffmpeg

    }
