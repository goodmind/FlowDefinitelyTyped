declare module 'soundmanager2' {
        declare var soundManager: soundmanager$soundmanager$SoundManager;
	declare type soundmanager$ScriptAccess = "always" | "sameDomain";

declare interface soundmanager$DefaultOptions {
autoLoad?: boolean,
autoPlay?: boolean,
from?: number | null,
loops?: number,
onid3?: (() => void) | null,
onerror?: (() => void) | null,
onload?: (() => void) | null,
whileloading?: (() => void) | null,
onplay?: (() => void) | null,
onpause?: (() => void) | null,
onresume?: (() => void) | null,
whileplaying?: (() => void) | null,
onposition?: (() => void) | null,
onstop?: (() => void) | null,
onfinish?: (() => void) | null,
multiShot?: boolean,
multiShotEvents?: boolean,
position?: number | null,
pan?: number,
playbackRate?: number,
stream?: boolean,
to?: number | null,
type?: string | null,
usePolicyFile?: boolean,
volume?: number
} 

declare interface soundmanager$Flash9Options {
onfailure?: (() => void) | null,
isMovieStar?: true | null,
usePeakData?: boolean,
useWaveformData?: boolean,
useEQData?: boolean,
onbufferchange?: (() => void) | null,
ondataerror?: (() => void) | null
} 

declare interface soundmanager$MovieStarOptions {
bufferTime?: number,
serverURL?: string | null,
onconnect?: (() => void) | null,
duration?: number | null
} 

declare interface soundmanager$SoundManagerProps {

/**
 * The directory where SM2 can find the flash movies (soundmanager2.swf,
 * soundmanager2_flash9.swf and debug versions etc.) Note that SM2 will
 * append the correct SWF file name, depending on flashVersion and
 * debugMode settings.
 */
url?: string,
allowScriptAccess?: soundmanager$ScriptAccess,
altURL?: string,
bgColor?: string,
consoleOnly?: boolean,
debugMode?: boolean,
debugFlash?: boolean,

/**
 * Some properties are dynamic, determined at initialisation or later
 * during runtime, and should be treated as read-only.
 */
+features?: {[key: string]: any},
flashVersion?: number,
forceUseGlobalHTML5Audio?: boolean,
+html5Only?: boolean,
flashLoadTimeout?: number,
idPrefix?: string,
ignoreMobileRestrications?: boolean,
noSWFCache?: boolean,
preferFlash?: boolean,
useAltURL?: boolean,
useConsole?: boolean,
useFlashBlock?: boolean,
useHighPerformance?: boolean,
useHTML5Audio?: boolean,
waitForWindowLoad?: false,
wmode?: string | null,
defaultOptions?: soundmanager$DefaultOptions,
flash9Options?: soundmanager$Flash9Options,
movieStarOptions?: soundmanager$MovieStarOptions,
onready(): void,
ontimeout(): void
} 

declare type soundmanager$SoundManager = {
canPlayLink(domElement: HTMLElement): boolean,
canPlayMIME(MIMEtype: string): boolean,
canPlayURL(mediaURL: string): boolean,
clearOnPosition(id: string, msecOffset: number, callback?: (() => void)): soundmanager$SMSound,

/**
 * Creates a sound object, supporting an arbitrary number of optional arguments. Returns a SMSound object instance. At minimum, a url parameter is required.
 */
createSound(properties: soundmanager$SoundProperties): soundmanager$SMSound,
destroySound(id: string): void,
getMemoryUse(): number,
getSoundById(id: string): soundmanager$SMSound,
load(id: string, options?: {[key: string]: any}): soundmanager$SMSound,
mute(id?: string): soundmanager$SMSound,
ok(): boolean,
onPosition(
id: string,
msecOffset: number,
callback: (eventPosition: any) => void): soundmanager$SMSound,
pause(id: string): soundmanager$SMSound,
pauseAll(): void,
play(
id?: string,
options?: soundmanager$DefaultOptions | soundmanager$Flash9Options): soundmanager$SMSound,
reboot(): void,
reset(): void,
resume(id: string): soundmanager$SMSound,
resumeAll(): void,
setup(options: soundmanager$SoundManagerProps): soundmanager$SoundManager,
setPan(id: string, volume: number): soundmanager$SMSound,
setPlaybackRate(id: string, playbackRate: number): void,
setPosition(id: string, msecOffset: number): soundmanager$SMSound,
setVolume(id: string, volume: number): soundmanager$SMSound,

/**
 * Sets the volume of all sound objects. Accepted values: 0-100. Affects volume property.
 * @param volume Volume of all sound objects. Accepted values: 0 - 100
 */
setVolume(volume: number): void,
stop(id: string): soundmanager$SMSound,
stopAll(): void,
toggleMute(id: string): soundmanager$SMSound,
togglePause(id: string): soundmanager$SMSound,
unload(id: string): soundmanager$SMSound,
unmute(id?: string): soundmanager$SMSound
} & soundmanager$SoundManagerProps


declare class soundmanager$SMSound  {
id: string;
pan: number;
peekData: soundmanager$PeekData;
position: number;
url: string;
volume: number;
buffered: {[key: string]: any}[];
bytesLoaded: number | null;
bytesTotal: number | null;
isBuffering: boolean;
connected: boolean;
duration: number | null;
durationEstimate: number | null;
isHTML5: boolean;
loaded: boolean;
muted: boolean;
paused: boolean;
playState: number;
readyState: number;
onbufferchange: (() => void);
onconnect: (() => void);
ondataerror: (() => void);
onerror: (() => void);
onfinish: (() => void);
onload: (() => void);
onpause: (() => void);
onplay: (() => void);
onresume: (() => void);
onsuspend: (() => void);
onstop: (() => void);
onid3: (() => void);
whileloading: (() => void);
whileplaying: (() => void);
destruct(): void;
load(options: {[key: string]: any}): soundmanager$SMSound;
onPosition(
mescOffest: number,
callback: {[key: string]: any},
"NO PRINT IMPLEMENTED: ArrayBindingPattern": <<UNKNOWN PARAM FORMAT>>): soundmanager$SMSound;
mute(): soundmanager$SMSound;
pause(): soundmanager$SMSound;
play(id?: string, options?: soundmanager$DefaultOptions): soundmanager$SMSound;
resume(): soundmanager$SMSound;
setPan(volume: number): soundmanager$SMSound;
setPosition(msecOffset: number): soundmanager$SMSound;
setVolume(volume: number): soundmanager$SMSound;
stop(): soundmanager$SMSound;
toggleMute(): soundmanager$SMSound;
togglePause(): soundmanager$SMSound;
unload(): soundmanager$SMSound;
unmute(): soundmanager$SMSound
}

declare interface soundmanager$PeekData {
left: number,
right: number
} 

declare type soundmanager$SoundProperties = {
url: string,
id?: string
} & soundmanager$DefaultOptions

    }
