declare module 'soundjs' {
        declare export class createjs$AbstractPlugin  {
create(
src: string,
startTime: number,
duration: number): createjs$AbstractSoundInstance;
getVolume(): number;
isPreloadComplete(src: string): boolean;
isPreloadStarted(src: string): boolean;
isSupported(): boolean;
preload(loader: Object): void;
register(loadItem: string, instances: number): Object;
removeAllSounds(src: string): void;
removeSound(src: string): void;
setMute(value: boolean): boolean;
setVolume(value: number): boolean
}

declare export class createjs$AbstractSoundInstance mixins EventDispatcher {
constructor(src: string, startTime: number, duration: number, playbackResource: Object): this;
duration: number;
loop: number;
muted: boolean;
pan: number;
paused: boolean;
playbackResource: Object;
playState: string;
position: number;
src: string;
uniqueId: number | string;
volume: number;
destroy(): void;
getDuration(): number;
getLoop(): number;
getMute(): boolean;
getPan(): number;
getPaused(): boolean;
getPosition(): number;
getVolume(): number;
play(
interrupt?: string | Object,
delay?: number,
offset?: number,
loop?: number,
volume?: number,
pan?: number): createjs$AbstractSoundInstance;
setDuration(value: number): createjs$AbstractSoundInstance;
setLoop(value: number): void;
setMute(value: boolean): createjs$AbstractSoundInstance;
setPan(value: number): createjs$AbstractSoundInstance;
setPlayback(value: Object): createjs$AbstractSoundInstance;
setPosition(value: number): createjs$AbstractSoundInstance;
setVolume(value: number): createjs$AbstractSoundInstance;
stop(): createjs$AbstractSoundInstance
}

declare export class createjs$FlashAudioLoader mixins AbstractLoader {
flashId: string;
setFlash(flash: Object): void
}

declare export class createjs$FlashAudioPlugin mixins createjs$AbstractPlugin {
flashReady: boolean;
showOutput: boolean;
static swfPath: string;
static isSupported(): boolean
}

declare export class createjs$FlashAudioSoundInstance mixins createjs$AbstractSoundInstance {
constructor(src: string, startTime: number, duration: number, playbackResource: Object): this
}


/**
 * @deprecated - use FlashAudioPlugin
 */
declare export class createjs$FlashPlugin  {
constructor(): this;
static buildDate: string;
flashReady: boolean;
showOutput: boolean;
static swfPath: string;
static version: string;
create(src: string): createjs$AbstractSoundInstance;
getVolume(): number;
isPreloadStarted(src: string): boolean;
static isSupported(): boolean;
preload(src: string, instance: Object): void;
register(src: string, instances: number): Object;
removeAllSounds(): void;
removeSound(src: string): void;
setMute(value: boolean): boolean;
setVolume(value: number): boolean
}

declare export class createjs$HTMLAudioPlugin mixins createjs$AbstractPlugin {
constructor(): this;
defaultNumChannels: number;
enableIOS: boolean;
static MAX_INSTANCES: number;
static isSupported(): boolean
}

declare export class createjs$HTMLAudioSoundInstance mixins createjs$AbstractSoundInstance {
constructor(src: string, startTime: number, duration: number, playbackResource: Object): this
}

declare export class createjs$HTMLAudioTagPool  {}

declare export class createjs$PlayPropsConfig  {
delay: number;
duration: number;
interrupt: string;
loop: number;
offset: number;
pan: number;
startTime: number;
volume: number;
static create(value: createjs$PlayPropsConfig | any): createjs$PlayPropsConfig;
set(props: any): createjs$PlayPropsConfig
}

declare export class createjs$Sound mixins EventDispatcher {
static activePlugin: Object;
static alternateExtensions: any[];
static defaultInterruptBehavior: string;
static EXTENSION_MAP: Object;
static INTERRUPT_ANY: string;
static INTERRUPT_EARLY: string;
static INTERRUPT_LATE: string;
static INTERRUPT_NONE: string;
static PLAY_FAILED: string;
static PLAY_FINISHED: string;
static PLAY_INITED: string;
static PLAY_INTERRUPTED: string;
static PLAY_SUCCEEDED: string;
static SUPPORTED_EXTENSIONS: string[];
static muted: boolean;
static volume: number;
static capabilities: any;
static createInstance(src: string): createjs$AbstractSoundInstance;
static getCapabilities(): Object;
static getCapability(key: string): number | boolean;
static getMute(): boolean;
static getVolume(): number;
static initializeDefaultPlugins(): boolean;
static isReady(): boolean;
static loadComplete(src: string): boolean;
static play(
src: string,
interrupt?: any,
delay?: number,
offset?: number,
loop?: number,
volume?: number,
pan?: number): createjs$AbstractSoundInstance;
static registerManifest(manifest: Object[], basePath: string): Object;
static registerPlugins(plugins: any[]): boolean;
static registerSound(
src: string | Object,
id?: string,
data?: number | Object,
basePath?: string): Object;
static registerSounds(sounds: Object[], basePath?: string): Object[];
static removeAllSounds(): void;
static removeManifest(manifest: any[], basePath: string): Object;
static removeSound(src: string | Object, basePath: string): boolean;
static setMute(value: boolean): boolean;
static setVolume(value: number): void;
static stop(): void;
static addEventListener(
type: string,
listener: (eventObj: Object) => boolean,
useCapture?: boolean): Function;
static addEventListener(
type: string,
listener: (eventObj: Object) => void,
useCapture?: boolean): Function;
static addEventListener(
type: string,
listener: {
handleEvent: (eventObj: Object) => boolean
},
useCapture?: boolean): Object;
static addEventListener(
type: string,
listener: {
handleEvent: (eventObj: Object) => void
},
useCapture?: boolean): Object;
static dispatchEvent(eventObj: Object | string | Event, target?: Object): boolean;
static hasEventListener(type: string): boolean;
static off(
type: string,
listener: (eventObj: Object) => boolean,
useCapture?: boolean): void;
static off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
static off(
type: string,
listener: {
handleEvent: (eventObj: Object) => boolean
},
useCapture?: boolean): void;
static off(
type: string,
listener: {
handleEvent: (eventObj: Object) => void
},
useCapture?: boolean): void;
static off(type: string, listener: Function, useCapture?: boolean): void;
static on(
type: string,
listener: (eventObj: Object) => boolean,
scope?: Object,
once?: boolean,
data?: any,
useCapture?: boolean): Function;
static on(
type: string,
listener: (eventObj: Object) => void,
scope?: Object,
once?: boolean,
data?: any,
useCapture?: boolean): Function;
static on(
type: string,
listener: {
handleEvent: (eventObj: Object) => boolean
},
scope?: Object,
once?: boolean,
data?: any,
useCapture?: boolean): Object;
static on(
type: string,
listener: {
handleEvent: (eventObj: Object) => void
},
scope?: Object,
once?: boolean,
data?: any,
useCapture?: boolean): Object;
static removeAllEventListeners(type?: string): void;
static removeEventListener(
type: string,
listener: (eventObj: Object) => boolean,
useCapture?: boolean): void;
static removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
static removeEventListener(
type: string,
listener: {
handleEvent: (eventObj: Object) => boolean
},
useCapture?: boolean): void;
static removeEventListener(
type: string,
listener: {
handleEvent: (eventObj: Object) => void
},
useCapture?: boolean): void;
static removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
static toString(): string;
static willTrigger(type: string): boolean
}

declare export class createjs$SoundJS  {
static buildDate: string;
static version: string
}

declare export class createjs$WebAudioLoader  {
static context: AudioContext
}

declare export class createjs$WebAudioPlugin mixins createjs$AbstractPlugin {
constructor(): this;
static context: AudioContext;
context: AudioContext;
dynamicsCompressorNode: DynamicsCompressorNode;
gainNode: GainNode;
static isSupported(): boolean;
static playEmptySound(): void
}

declare export class createjs$WebAudioSoundInstance mixins createjs$AbstractSoundInstance {
constructor(src: string, startTime: number, duration: number, playbackResource: Object): this;
static context: AudioContext;
static destinationNode: AudioNode;
gainNode: GainNode;
panNode: PannerNode;
sourceNode: AudioNode
}
    }
