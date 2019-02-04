declare module '@vimeo/player' {
        declare export type CallbackFunction = (...args: any[]) => any;
	declare export interface Error {
name: string,
message: string,
method: string
} 
	declare export type PasswordError = {
name: "PasswordError",
message: string,
method: string
} & Error

	declare export type PrivacyError = {
name: "PrivacyError",
message: string,
method: string
} & Error

	declare export type InvalidTrackLanguageError = {
name: "InvalidTrackLanguageError",
message: string,
method: string
} & Error

	declare export type InvalidTrackError = {
name: "InvalidTrackError",
message: string,
method: string
} & Error

	declare export type UnsupportedError = {
name: "UnsupportedError",
message: string,
method: string
} & Error

	declare export type ContrastError = {
name: "ContrastError",
message: string,
method: string
} & Error

	declare export type InvalidCuePoint = {
name: "InvalidCuePoint",
message: string,
method: string
} & Error

	declare export type RangeError = {
name: "RangeError",
message: string,
method: string
} & Error

	declare export type TypeError = {
name: "TypeError",
message: string,
method: string
} & Error

	declare export type EventName = "play"
| "pause"
| "ended"
| "timeupdate"
| "progress"
| "seeked"
| "texttrackchange"
| "cuechange"
| "cuepoint"
| "volumechange"
| "playbackratechange"
| "bufferstart"
| "bufferend"
| "error"
| "loaded"
| string;
	declare export type EventCallback = (data: any) => any;
	declare export class Player  {
constructor(element: HTMLIFrameElement | HTMLElement | string, options?: Options): this;
on(event: EventName, callback: EventCallback): void;
off(event: EventName, callback?: EventCallback): void;
loadVideo(
id: number): VimeoPromise<number, TypeError | PasswordError | PrivacyError | Error>;
ready(): VimeoPromise<void, Error>;
enableTextTrack(
language: string,
kind?: string): VimeoPromise<VimeoTextTrack, InvalidTrackLanguageError | InvalidTrackError | Error>;
disableTextTrack(): VimeoPromise<void, Error>;
pause(): VimeoPromise<void, PasswordError | PrivacyError | Error>;
play(): VimeoPromise<void, PasswordError | PrivacyError | Error>;
unload(): VimeoPromise<void, Error>;
getAutopause(): VimeoPromise<boolean, UnsupportedError | Error>;
setAutopause(autopause: boolean): VimeoPromise<boolean, UnsupportedError | Error>;
getColor(): VimeoPromise<string, Error>;
setColor(color: string): VimeoPromise<string, ContrastError | TypeError | Error>;
addCuePoint(
time: number,
data: VimeoCuePointData): VimeoPromise<string, UnsupportedError | RangeError | Error>;
removeCuePoint(id: string): VimeoPromise<string, UnsupportedError | InvalidCuePoint | Error>;
getCuePoints(): VimeoPromise<VimeoCuePoint[], UnsupportedError | Error>;
getCurrentTime(): VimeoPromise<number, Error>;
setCurrentTime(seconds: number): VimeoPromise<number, RangeError | Error>;
getDuration(): VimeoPromise<number, Error>;
getEnded(): VimeoPromise<boolean, Error>;
getLoop(): VimeoPromise<boolean, Error>;
setLoop(loop: boolean): VimeoPromise<boolean, Error>;
getPaused(): VimeoPromise<boolean, Error>;
getPlaybackRate(): VimeoPromise<number, Error>;
setPlaybackRate(playbackRate: number): VimeoPromise<number, RangeError | Error>;
getTextTracks(): VimeoPromise<VimeoTextTrack[], Error>;
getVideoEmbedCode(): VimeoPromise<string, Error>;
getVideoId(): VimeoPromise<number, Error>;
getVideoTitle(): VimeoPromise<string, Error>;
getVideoWidth(): VimeoPromise<number, Error>;
getVideoHeight(): VimeoPromise<number, Error>;
getVideoUrl(): VimeoPromise<string, PrivacyError | Error>;
getVolume(): VimeoPromise<number, Error>;
setVolume(volume: number): VimeoPromise<number, RangeError | Error>;
destroy(): VimeoPromise<void, Error>
}
	declare export interface VimeoCuePoint {
time: number,
data: VimeoCuePointData,
id: string
} 
	declare export interface VimeoCuePointData {
[key: string]: any
} 
	declare export interface VimeoTextTrack {
language: string,
kind: string,
label: string,
mode?: string
} 
	declare export interface Options {
id?: number,
url?: string,
autopause?: boolean,
autoplay?: boolean,
background?: boolean,
byline?: boolean,
color?: string,
height?: number,
loop?: boolean,
maxheight?: number,
maxwidth?: number,
muted?: boolean,
playsinline?: boolean,
portrait?: boolean,
responsive?: boolean,
speed?: boolean,
title?: boolean,
transparent?: boolean,
width?: number
} 
	declare export type VimeoPromise<Result, Reason> = {
(successCallback?: (promiseValue: Result) => void, rejectCallback?: (reasonValue: Reason) => void): Promise<Result>
} & Promise<Result>

	declare export default typeof Player

    }
