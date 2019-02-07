declare module 'popcorn' {
        declare var Popcorn: PopcornStatic;
	declare interface PopcornStatic {
(callback: Function): PopcornImpl,
(selector: string, options?: any): PopcornImpl,
plugin: {
(pluginName: string, info: PopcornPlugin, manifest?: any),
debug: boolean,
errors: any[]
},
util: {
toSeconds(smpte: string, fps?: number): number
},
destroy<<UNKNOWN PARAM FORMAT>>,
extend<<UNKNOWN PARAM FORMAT>>,
forEach<<UNKNOWN PARAM FORMAT>>,
getJSONP<<UNKNOWN PARAM FORMAT>>,
getScript<<UNKNOWN PARAM FORMAT>>,
guid<<UNKNOWN PARAM FORMAT>>,
locale: PopcornLocale,
parser<<UNKNOWN PARAM FORMAT>>
} 
	declare interface PopcornLocale {
get(): string,
set<<UNKNOWN PARAM FORMAT>>
} 
	declare interface PopcornImpl {
media: HTMLMediaElement,
footnote<<UNKNOWN PARAM FORMAT>>,
autoplay<<UNKNOWN PARAM FORMAT>>,
buffered(): TimeRanges,
compose<<UNKNOWN PARAM FORMAT>>,
controls<<UNKNOWN PARAM FORMAT>>,
cue<<UNKNOWN PARAM FORMAT>>,
cue<<UNKNOWN PARAM FORMAT>>,
currentTime(time?: string): number,
currentTime(time?: number): number,
defaults<<UNKNOWN PARAM FORMAT>>,
destroy<<UNKNOWN PARAM FORMAT>>,
disable<<UNKNOWN PARAM FORMAT>>,
duration(): number,
emit<<UNKNOWN PARAM FORMAT>>,
enable(pluginName: string): PopcornImpl,
exec<<UNKNOWN PARAM FORMAT>>,
exec<<UNKNOWN PARAM FORMAT>>,
listen<<UNKNOWN PARAM FORMAT>>,
load<<UNKNOWN PARAM FORMAT>>,
loop<<UNKNOWN PARAM FORMAT>>,
mute<<UNKNOWN PARAM FORMAT>>,
muted<<UNKNOWN PARAM FORMAT>>,
off<<UNKNOWN PARAM FORMAT>>,
on<<UNKNOWN PARAM FORMAT>>,
pause<<UNKNOWN PARAM FORMAT>>,
pause<<UNKNOWN PARAM FORMAT>>,
paused(): boolean,
play<<UNKNOWN PARAM FORMAT>>,
play<<UNKNOWN PARAM FORMAT>>,
playbackRate<<UNKNOWN PARAM FORMAT>>,
played(): TimeRanges,
position(): ClientRect,
preload<<UNKNOWN PARAM FORMAT>>,
readyState(): number,
roundTime(): number,
seekable(): any,
seeking(): boolean,
toggle<<UNKNOWN PARAM FORMAT>>,
trigger<<UNKNOWN PARAM FORMAT>>,
unlisten<<UNKNOWN PARAM FORMAT>>,
unmute<<UNKNOWN PARAM FORMAT>>,
volume(value?: number): number,
getLastTrackEventId(): string,
removeTrackEvent<<UNKNOWN PARAM FORMAT>>
} 
	declare interface PopcornPlugin {
(options: any),
_setup?: <<UNKNOWN PARAM FORMAT>>,
_update?: <<UNKNOWN PARAM FORMAT>>,
_teardown?: <<UNKNOWN PARAM FORMAT>>,
start?: <<UNKNOWN PARAM FORMAT>>,
end?: <<UNKNOWN PARAM FORMAT>>,
frame?: <<UNKNOWN PARAM FORMAT>>,
toString?: () => string,
manifest?: PopcornManifest
} 
	declare interface PopcornManifest {
about: PopcornManifestAbout,
options: PopcornManifestOptions
} 
	declare interface PopcornManifestAbout {
name: string,
version: string,
author: string,
website: string
} 
	declare interface PopcornManifestOptions {
start: PopcornManifestOption,
end: PopcornManifestOption,
target: string,
text: PopcornManifestOption
} 
	declare interface PopcornManifestOption {
elem: string,
type: string,
label: string
} 
	declare interface Footnote {
start: number,
end: number,
target: string,
text: string
} 
    }
