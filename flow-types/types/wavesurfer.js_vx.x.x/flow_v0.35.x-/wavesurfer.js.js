declare module 'wavesurfer.js' {
        declare module.exports: typeof WaveSurfer

	declare class Observer  {
constructor(): this;
fireEvent(eventName: string, ...args: any[]): void;
on(
eventName: string,
callback: (...args: any[]) => void): WaveSurfer$WaveSurfer$ListenerDescriptor;
once(
eventName: string,
callback: (...args: any[]) => void): WaveSurfer$WaveSurfer$ListenerDescriptor;
un(eventName: string, callback: (...args: any[]) => void): void;
unAll(): void
}
	declare class WaveSurfer mixins Observer {
constructor(params: WaveSurfer$WaveSurfer$WaveSurferParams): this;
static util: WaveSurfer$WaveSurfer$WaveSurferUtil;
static create(params: WaveSurfer$WaveSurfer$WaveSurferParams): WaveSurfer;
[x: string]: any;
util: WaveSurfer$WaveSurfer$WaveSurferUtil;
destroy(): void;
empty(): void;
getCurrentTime(): number;
getDuration(): number;
getPlaybackRate(): number;
getVolume(): number;
getMute(): boolean;
getFilters(): AudioNode[];
getWaveColor(): string;
exportPCM(length: number, accuracy: number, noWindow?: boolean, start?: number): string;
exportImage(format: string, quality: number): string;
init(): void;
isPlaying(): boolean;
isReady(): boolean;
load(
url: string | HTMLMediaElement,
peaks?: $ReadOnlyArray<number> | $ReadOnlyArray<$ReadOnlyArray<number>>,
preload?: string,
duration?: number): void;
loadBlob(url: Blob | File): void;
pause(): Promise<void> | void;
play(start?: number, end?: number): Promise<void> | void;
playPause(): Promise<void> | void;
seekAndCenter(progress: number): void;
seekTo(progress: number): void;
setHeight(height: number): void;
setPlaybackRate(rate: number): void;
setVolume(newVolume: number): void;
setMute(mute: boolean): void;
setWaveColor(color: string): void;
setSinkId(deviceId: string): void;
skip(offset: number): void;
skipBackward(seconds?: number): void;
skipForward(seconds?: number): void;
stop(): void;
toggleInteraction(): void;
toggleMute(): void;
toggleScroll(): void;
zoom(pxPerSec?: number): void
}
	declare class WaveSurfer$WaveRenderer mixins Observer {
constructor(container: HTMLElement, params: WaveSurfer$WaveSurferParams): this;
height: number;
width: number;
wrapper: HTMLElement;
clearWave(): void;
createWrapper(): void;
destroy(): void;
drawBars(
peaks: $ReadOnlyArray<number> | $ReadOnlyArray<$ReadOnlyArray<number>>,
channelIndex: number,
start: number,
end: number): void;
drawPeaks(
peaks: $ReadOnlyArray<number> | $ReadOnlyArray<$ReadOnlyArray<number>>,
length: number,
start: number,
end: number): void;
drawWave(
peaks: $ReadOnlyArray<number> | $ReadOnlyArray<$ReadOnlyArray<number>>,
channelIndex: number,
start: number,
end: number): void;
getScrollX(): number;
getWidth(): number;
handleEvent(e: Event, noPrevent: boolean): number;
progress(progress: number): void;
recenter(percent: number): void;
recenterOnPosition(position: number, immediate: boolean): void;
resetScroll(): void;
setHeight(height: number): boolean;
setWidth(width: number): boolean;
style(el: HTMLElement, styles: {
[x: string]: string
}): HTMLElement;
updateProgress(position: number): void;
updateSize(): void
}

declare class WaveSurfer$WaveSurferPlugin  {
constructor(params: {[key: string]: any}, ws: WaveSurfer): this;
static create(params: {[key: string]: any}): WaveSurfer$PluginDefinition;
init(): void;
destroy(): void
}

declare interface WaveSurfer$WaveSurferUtil {
ajax(options: {
xhr?: WaveSurfer$XHROptions
}): Observer,
extend(
dest: {[key: string]: any},
...sources: {[key: string]: any}[]): {[key: string]: any},
frame(fn: (...args: any[]) => void): (...args: any[]) => number,
getId(): string,
max(values: $ReadOnlyArray<number>): number,
min(values: $ReadOnlyArray<number>): number,
Observer: Observer,
preventClick(): void,
requestAnimationFrame(): (fn: (t: number) => void) => number,
style(el: HTMLElement, styles: {
[x: string]: string
}): HTMLElement
} 

declare interface WaveSurfer$WaveSurferParams {
audioContext?: AudioContext,
audioRate?: number,
audioScriptProcessor?: ScriptProcessorNode,
autoCenter?: boolean,
backend?: string,
barHeight?: number,
barWidth?: number,
barGap?: number,
closeAudioContext?: boolean,
container: string | HTMLElement,
cursorColor?: string,
cursorWidth?: number,
fillParent?: boolean,
forceDecode?: boolean,
height?: number,
hideScrollbar?: boolean,
interact?: boolean,
loopSelection?: boolean,
maxCanvasWidth?: number,
mediaControls?: boolean,
mediaType?: string,
minPxPerSec?: number,
normalize?: boolean,
partialRender?: boolean,
pixelRatio?: number,
plugins?: WaveSurfer$PluginDefinition[],
progressColor?: string,
removeMediaElementOnDestroy?: boolean,
renderer?: {
new (
container: HTMLElement,
params: WaveSurfer$WaveSurferParams): WaveSurfer$WaveRenderer
},
responsive?: boolean | number,
scrollParent?: boolean,
skipLength?: number,
splitChannels?: boolean,
waveColor?: string,
xhr?: WaveSurfer$XHROptions
} 

declare interface WaveSurfer$PluginDefinition {
name: string,
staticProps?: {[key: string]: any},
deferInit?: boolean,
params: {[key: string]: any},
instance: {
new (params: {[key: string]: any}, ws: WaveSurfer): WaveSurfer$WaveSurferPlugin
}
} 

declare interface WaveSurfer$ListenerDescriptor {
name: string,
callback(...args: any[]): void,
un(): void
} 

declare interface WaveSurfer$XHROptions {
requestHeaders?: WaveSurfer$XHRRequestHeader[],
withCredentials?: boolean
} 

declare interface WaveSurfer$XHRRequestHeader {
key: string,
value: string
} 
    }
