declare module 'dplayer' {
        declare export type Lang = "en" | "zh-cn" | "zh-tw";
	declare export type Preload = "none" | "metadata" | "auto";
	declare export type VideoType = "auto"
| "hls"
| "flv"
| "dash"
| "webtorrent"
| "normal";
	declare export type SubTitleType = "webvtt" | "ass";
	declare export type DirectionType = "top" | "right" | "bottom";
	declare export type FullScreenType = "web" | "browser";
	declare export  class DPlayerEvents {
  constructor(...args: empty): mixed;
static +abort: Class<DPlayerEvents__abort> & DPlayerEvents__abort & "abort";// "abort"
static +canplay: Class<DPlayerEvents__canplay> & DPlayerEvents__canplay & "canplay";// "canplay"
static +canplaythrough: Class<DPlayerEvents__canplaythrough> & DPlayerEvents__canplaythrough & "canplaythrough";// "canplaythrough"
static +durationchange: Class<DPlayerEvents__durationchange> & DPlayerEvents__durationchange & "durationchange";// "durationchange"
static +emptied: Class<DPlayerEvents__emptied> & DPlayerEvents__emptied & "emptied";// "emptied"
static +ended: Class<DPlayerEvents__ended> & DPlayerEvents__ended & "ended";// "ended"
static +error: Class<DPlayerEvents__error> & DPlayerEvents__error & "error";// "error"
static +loadeddata: Class<DPlayerEvents__loadeddata> & DPlayerEvents__loadeddata & "loadeddata";// "loadeddata"
static +loadedmetadata: Class<DPlayerEvents__loadedmetadata> & DPlayerEvents__loadedmetadata & "loadedmetadata";// "loadedmetadata"
static +loadstart: Class<DPlayerEvents__loadstart> & DPlayerEvents__loadstart & "loadstart";// "loadstart"
static +mozaudioavailable: Class<DPlayerEvents__mozaudioavailable> & DPlayerEvents__mozaudioavailable & "mozaudioavailable";// "mozaudioavailable"
static +pause: Class<DPlayerEvents__pause> & DPlayerEvents__pause & "pause";// "pause"
static +play: Class<DPlayerEvents__play> & DPlayerEvents__play & "play";// "play"
static +playing: Class<DPlayerEvents__playing> & DPlayerEvents__playing & "playing";// "playing"
static +progress: Class<DPlayerEvents__progress> & DPlayerEvents__progress & "progress";// "progress"
static +ratechange: Class<DPlayerEvents__ratechange> & DPlayerEvents__ratechange & "ratechange";// "ratechange"
static +seeked: Class<DPlayerEvents__seeked> & DPlayerEvents__seeked & "seeked";// "seeked"
static +seeking: Class<DPlayerEvents__seeking> & DPlayerEvents__seeking & "seeking";// "seeking"
static +stalled: Class<DPlayerEvents__stalled> & DPlayerEvents__stalled & "stalled";// "stalled"
static +suspend: Class<DPlayerEvents__suspend> & DPlayerEvents__suspend & "suspend";// "suspend"
static +timeupdate: Class<DPlayerEvents__timeupdate> & DPlayerEvents__timeupdate & "timeupdate";// "timeupdate"
static +volumechange: Class<DPlayerEvents__volumechange> & DPlayerEvents__volumechange & "volumechange";// "volumechange"
static +waiting: Class<DPlayerEvents__waiting> & DPlayerEvents__waiting & "waiting";// "waiting"
static +screenshot: Class<DPlayerEvents__screenshot> & DPlayerEvents__screenshot & "screenshot";// "screenshot"
static +thumbnails_show: Class<DPlayerEvents__thumbnails_show> & DPlayerEvents__thumbnails_show & "thumbnails_show";// "thumbnails_show"
static +thumbnails_hide: Class<DPlayerEvents__thumbnails_hide> & DPlayerEvents__thumbnails_hide & "thumbnails_hide";// "thumbnails_hide"
static +danmaku_show: Class<DPlayerEvents__danmaku_show> & DPlayerEvents__danmaku_show & "danmaku_show";// "danmaku_show"
static +danmaku_hide: Class<DPlayerEvents__danmaku_hide> & DPlayerEvents__danmaku_hide & "danmaku_hide";// "danmaku_hide"
static +danmaku_clear: Class<DPlayerEvents__danmaku_clear> & DPlayerEvents__danmaku_clear & "danmaku_clear";// "danmaku_clear"
static +danmaku_loaded: Class<DPlayerEvents__danmaku_loaded> & DPlayerEvents__danmaku_loaded & "danmaku_loaded";// "danmaku_loaded"
static +danmaku_send: Class<DPlayerEvents__danmaku_send> & DPlayerEvents__danmaku_send & "danmaku_send";// "danmaku_send"
static +danmaku_opacity: Class<DPlayerEvents__danmaku_opacity> & DPlayerEvents__danmaku_opacity & "danmaku_opacity";// "danmaku_opacity"
static +contextmenu_show: Class<DPlayerEvents__contextmenu_show> & DPlayerEvents__contextmenu_show & "contextmenu_show";// "contextmenu_show"
static +contextmenu_hide: Class<DPlayerEvents__contextmenu_hide> & DPlayerEvents__contextmenu_hide & "contextmenu_hide";// "contextmenu_hide"
static +notice_show: Class<DPlayerEvents__notice_show> & DPlayerEvents__notice_show & "notice_show";// "notice_show"
static +notice_hide: Class<DPlayerEvents__notice_hide> & DPlayerEvents__notice_hide & "notice_hide";// "notice_hide"
static +quality_start: Class<DPlayerEvents__quality_start> & DPlayerEvents__quality_start & "quality_start";// "quality_start"
static +quality_end: Class<DPlayerEvents__quality_end> & DPlayerEvents__quality_end & "quality_end";// "quality_end"
static +destroy: Class<DPlayerEvents__destroy> & DPlayerEvents__destroy & "destroy";// "destroy"
static +resize: Class<DPlayerEvents__resize> & DPlayerEvents__resize & "resize";// "resize"
static +fullscreen: Class<DPlayerEvents__fullscreen> & DPlayerEvents__fullscreen & "fullscreen";// "fullscreen"
static +fullscreen_cancel: Class<DPlayerEvents__fullscreen_cancel> & DPlayerEvents__fullscreen_cancel & "fullscreen_cancel";// "fullscreen_cancel"
static +subtitle_show: Class<DPlayerEvents__subtitle_show> & DPlayerEvents__subtitle_show & "subtitle_show";// "subtitle_show"
static +subtitle_hide: Class<DPlayerEvents__subtitle_hide> & DPlayerEvents__subtitle_hide & "subtitle_hide";// "subtitle_hide"
static +subtitle_change: Class<DPlayerEvents__subtitle_change> & DPlayerEvents__subtitle_change & "subtitle_change";// "subtitle_change"

}

declare class DPlayerEvents__abort mixins DPlayerEvents {}
declare class DPlayerEvents__canplay mixins DPlayerEvents {}
declare class DPlayerEvents__canplaythrough mixins DPlayerEvents {}
declare class DPlayerEvents__durationchange mixins DPlayerEvents {}
declare class DPlayerEvents__emptied mixins DPlayerEvents {}
declare class DPlayerEvents__ended mixins DPlayerEvents {}
declare class DPlayerEvents__error mixins DPlayerEvents {}
declare class DPlayerEvents__loadeddata mixins DPlayerEvents {}
declare class DPlayerEvents__loadedmetadata mixins DPlayerEvents {}
declare class DPlayerEvents__loadstart mixins DPlayerEvents {}
declare class DPlayerEvents__mozaudioavailable mixins DPlayerEvents {}
declare class DPlayerEvents__pause mixins DPlayerEvents {}
declare class DPlayerEvents__play mixins DPlayerEvents {}
declare class DPlayerEvents__playing mixins DPlayerEvents {}
declare class DPlayerEvents__progress mixins DPlayerEvents {}
declare class DPlayerEvents__ratechange mixins DPlayerEvents {}
declare class DPlayerEvents__seeked mixins DPlayerEvents {}
declare class DPlayerEvents__seeking mixins DPlayerEvents {}
declare class DPlayerEvents__stalled mixins DPlayerEvents {}
declare class DPlayerEvents__suspend mixins DPlayerEvents {}
declare class DPlayerEvents__timeupdate mixins DPlayerEvents {}
declare class DPlayerEvents__volumechange mixins DPlayerEvents {}
declare class DPlayerEvents__waiting mixins DPlayerEvents {}
declare class DPlayerEvents__screenshot mixins DPlayerEvents {}
declare class DPlayerEvents__thumbnails_show mixins DPlayerEvents {}
declare class DPlayerEvents__thumbnails_hide mixins DPlayerEvents {}
declare class DPlayerEvents__danmaku_show mixins DPlayerEvents {}
declare class DPlayerEvents__danmaku_hide mixins DPlayerEvents {}
declare class DPlayerEvents__danmaku_clear mixins DPlayerEvents {}
declare class DPlayerEvents__danmaku_loaded mixins DPlayerEvents {}
declare class DPlayerEvents__danmaku_send mixins DPlayerEvents {}
declare class DPlayerEvents__danmaku_opacity mixins DPlayerEvents {}
declare class DPlayerEvents__contextmenu_show mixins DPlayerEvents {}
declare class DPlayerEvents__contextmenu_hide mixins DPlayerEvents {}
declare class DPlayerEvents__notice_show mixins DPlayerEvents {}
declare class DPlayerEvents__notice_hide mixins DPlayerEvents {}
declare class DPlayerEvents__quality_start mixins DPlayerEvents {}
declare class DPlayerEvents__quality_end mixins DPlayerEvents {}
declare class DPlayerEvents__destroy mixins DPlayerEvents {}
declare class DPlayerEvents__resize mixins DPlayerEvents {}
declare class DPlayerEvents__fullscreen mixins DPlayerEvents {}
declare class DPlayerEvents__fullscreen_cancel mixins DPlayerEvents {}
declare class DPlayerEvents__subtitle_show mixins DPlayerEvents {}
declare class DPlayerEvents__subtitle_hide mixins DPlayerEvents {}
declare class DPlayerEvents__subtitle_change mixins DPlayerEvents {}

	declare export interface DPlayerOptions {
[key: string]: any,
container: HTMLElement | null,
live?: boolean,
autoplay?: boolean,
theme?: string,
loop?: boolean,
lang?: Lang | string,
screenshot?: boolean,
hotkey?: boolean,
preload?: Preload,
logo?: string,
volume?: number,
mutex?: boolean,
video?: DPlayerVideo,
subtitle?: DPlayerSubTitle,
danmaku?: DPlayerDanmaku,
contextmenu?: DPlayerContextMenuItem[],
highlight?: DPlayerHighLightItem[],
apiBackend?: DPlayerAPIBackend
} 
	declare export interface DPlayerDanmakuItem {
text: string,
color: string,
type: DirectionType
} 
	declare export interface DPlayerContextMenuItem {
text: string,
link?: string,
click?: () => void
} 
	declare export interface DPlayerHighLightItem {
text: string,
time: number
} 
	declare export interface DPlayerVideoQuality {
name: string,
url: string,
type?: string
} 
	declare export interface DPlayerVideo {
url: string,
pic?: string,
thumbnails?: string,
type?: VideoType | string,
customType?: any,
quality?: DPlayerVideoQuality[],
defaultQuality?: number
} 
	declare export interface DPlayerSubTitle {
url: string,
type?: SubTitleType,
fontSize?: string,
bottom?: string,
color?: string
} 
	declare export interface DPlayerDanmaku {
id: string,
api: string,
token?: string,
maximum?: string,
addition?: string[],
user?: string,
bottom?: string,
unlimited?: boolean
} 
	declare export interface DPlayerAPIBackend {
read(endpoint: any, callback: () => void): void,
send(endpoint: any, danmakuData: DPlayerDanmakuItem, callback: () => void): void
} 
	declare export interface Danmaku {
send(danmaku: DPlayerDanmakuItem, callback: () => void): void,
draw(danmaku: DPlayerDanmakuItem): void,
opacity(percentage: number): void,
clear(): void,
hide(): void,
show(): void
} 
	declare export interface FullScreen {
request(type: FullScreenType): void,
cancel(type: FullScreenType): void
} 
	declare export default class DPlayer  {
events: any;
video: HTMLVideoElement;
danmaku: Danmaku;
fullScreen: FullScreen;
constructor(options: DPlayerOptions): this;
play(): void;
pause(): void;
seek(time: number): void;
toggle(): void;
on(event: DPlayerEvents, handler: () => void): void;
switchVideo(video: DPlayerVideo, danmaku: DPlayerDanmaku): void;
notice(text: string, time: number, opacity: number): void;
switchQuality(index: number): void;
destroy(): void;
speed(rate: number): void;
volume(percentage: number, nostorage: boolean, nonotice: boolean): void
}
    }
