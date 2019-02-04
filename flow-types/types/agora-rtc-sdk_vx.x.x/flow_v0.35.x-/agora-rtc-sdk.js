declare module 'agora-rtc-sdk' {
        declare export function createClient(config: ClientConfig): Client

	declare export function createStream(spec: StreamSpec): Stream

	declare export function checkSystemRequirements(): boolean

	declare export function getDevices(callback: (devices: any[]) => void): void

	declare export interface ClientConfig {
mode: "live" | "rtc",
codec: "vp8" | "h264",
proxyServer?: string,
turnServer?: {
turnServerURL: string,
username: string,
password: string,
udpport: string,
tcpport: string,
forceturn: boolean
}
} 
	declare export interface StreamSpec {
streamID: number,
audio: boolean,
video: boolean,
screen: boolean,
cameraId?: string,
microphoneId?: string,
mirror?: boolean,
extensionid?: string,
mediaSource?: "screen" | "application" | "window",
audioProcessing?: {
AGC: boolean
},
attributes?: {
resolution: string,
minFrameRate: number,
maxFrameRate: number
}
} 
	declare export interface LocalStreamStats {
audioSendBytes: string,
audioSendPackets: string,
videoSendBytes: string,
videoSendPackets: string,
videoSendPacketsLost: string,
videoSendFrameRate: string,
videoSendBandwidth: string,
videoSendResolutionWidth?: string,
videoSendResolutionHeight?: string,
audioCodecName: string,
videoCodecName: string,
timestamp: string,
startTime: string,
duration: string
} 
	declare export interface RemoteStreamStats {
audioReceiveBytes: string,
audioReceivePackets: string,
audioReceivePacketsLost: string,
videoReceiveBytes: string,
videoReceivePackets: string,
videoReceivePacketsLost: string,
videoReceiveFrameRate?: string,
videoReceiveDecodeFrameRate?: string,
videoReceiveBandwidth?: string,
videoReceivedResolutionWidth?: string,
videoReceivedResolutionHeight?: string,
timestamp: string,
startTime: string,
duration: string
} 
	declare export type VideoProfile = "120p"
| "120p_1"
| "120p_3"
| "180p"
| "180p_1"
| "180p_3"
| "180p_4"
| "240p"
| "240p_1"
| "240p_3"
| "240p_4"
| "360p"
| "360p_1"
| "360p_3"
| "360p_4"
| "360p_6"
| "360p_7"
| "360p_8"
| "360p_9"
| "360p_10"
| "360p_11"
| "480p"
| "480p_1"
| "480p_2"
| "480p_3"
| "480p_4"
| "480p_6"
| "480p_8"
| "480p_9"
| "480p_10"
| "720p"
| "720p_1"
| "720p_2"
| "720p_3"
| "720p_5"
| "720p_6"
| "1080p"
| "1080p_1"
| "1080p_2"
| "1080p_3"
| "1080p_5"
| "1440p"
| "1440p_1"
| "1440p_2"
| "4K"
| "4K_1"
| "4K_3";
	declare export type FirefoxVideoProfile = "480p"
| "480p_1"
| "480p_2"
| "480p_3"
| "480p_4"
| "480p_6"
| "480p_8"
| "480p_9"
| "480p_10"
| "720p"
| "720p_1"
| "720p_2"
| "720p_3"
| "720p_5"
| "720p_6";
	declare export type SafariVideoProfile = "480p"
| "480p_1"
| "480p_2"
| "480p_3"
| "480p_4"
| "480p_6"
| "480p_8"
| "480p_9"
| "480p_10"
| "720p"
| "720p_1"
| "720p_2"
| "720p_3"
| "720p_5"
| "720p_6"
| "1080p"
| "1080p_1"
| "1080p_2"
| "1080p_3"
| "1080p_5"
| "1440p"
| "1440p_1"
| "1440p_2"
| "4K"
| "4K_1"
| "4K_3";
	declare export type ScreenSharingProfile = "480p_1"
| "480p_2"
| "720p_1"
| "720p_2"
| "1080p_1"
| "1080p_2";
	declare export type ClientEvent = "stream-published"
| "stream-added"
| "stream-removed"
| "stream-subscribed"
| "peer-leave"
| "mute-audio"
| "unmute-audio"
| "mute-video"
| "unmute-video"
| "client-banned"
| "active-speaker"
| "error";
	declare export interface Stream {
getStats(callback: (stats: LocalStreamStats | RemoteStreamStats) => void): void,
init(onSuccess: () => void, onFailure: (err: any) => void): void,
getId(): number,
getAttributes(): any,
getAudioLevel(): number,
hasVideo(): boolean,
hasAudio(): boolean,
enableVideo(): void,
disableVideo(): void,
enableAudio(): void,
disableAudio(): void,
setVideoProfile(
profile: VideoProfile | FirefoxVideoProfile | SafariVideoProfile | ScreenSharingProfile): void,
play(HTMLElementID: string): void,
stop(): void,
close(): void
} 
	declare export interface Client {
on(eventName: ClientEvent, callback: (evt: any) => void): void,
init(appId: string, onSuccess: () => void, onFailure: (err: any) => void): void,
join(
tokenOrKey: string,
channel: string,
uid: number,
onSuccess: (uid: number) => void,
onFailure: (err: any) => void): void,
renewChannelKey(key: string, onSuccess: () => void, onFailure: (err: any) => void): void,
enableDualStream(onSuccess: () => void, onFailure: (err: any) => void): void,
setRemoteVideoStreamType(stream: Stream, streamType: 0 | 1): void,
setLowStreamParameter(
param: {
width: number,
height: number,
framerate: number,
birate: number
}): void,
disableDualStream(onSuccess: () => void, onFailure: (err: any) => void): void,
leave(onSuccess: () => void, onFailure: (err: any) => void): void,
publish(stream: Stream, onFailure: (err: any) => void): void,
unpublish(stream: Stream, onFailure: (err: any) => void): void,
subscribe(stream: Stream, onFailure: (err: any) => void): void,
unsubscribe(stream: Stream, onFailure: (err: any) => void): void,
setProxyServer(proxyServer: $ElementType<ClientConfig, "proxyServer">): void,
setTurnServer(turnServer: $ElementType<ClientConfig, "turnServer">): void,
setEncryptionSecret(password: string): void,
setEncryptionMode(encryptionMode: "aes-128-xts" | "aes-256-xts" | "aes-128-ecb"): void
} 
	declare export var VERSION: string;
	declare export var AUDIO_SAMPLE_RATE_32000: 32000;
	declare export var AUDIO_SAMPLE_RATE_44100: 44100;
	declare export var AUDIO_SAMPLE_RATE_48000: 48000;
	declare export var VIDEO_CODEC_PROFILE_BASELINE: 66;
	declare export var VIDEO_CODEC_PROFILE_MAIN: 77;
	declare export var VIDEO_CODEC_PROFILE_HIGH: 100;
	declare export var REMOTE_VIDEO_STREAM_HIGH: 0;
	declare export var REMOTE_VIDEO_STREAM_LOW: 1;
	declare export var REMOTE_VIDEO_STREAM_MEDIUM: 2;
	
      declare var npm$namespace$Logger: {
        setLogLevel: typeof Logger$setLogLevel,
log: typeof Logger$log,
debug: typeof Logger$debug,
info: typeof Logger$info,
warning: typeof Logger$warning,
error: typeof Logger$error,
        
      }
declare type Logger$DEBUG = 0;

declare type Logger$INFO = 1;

declare type Logger$WARNING = 2;

declare type Logger$ERROR = 3;

declare type Logger$NONE = 4;

declare function Logger$setLogLevel(level: Logger$DEBUG | Logger$INFO | Logger$WARNING | Logger$NONE): void


declare function Logger$log(args: any): void


declare function Logger$debug(args: any): void


declare function Logger$info(args: any): void


declare function Logger$warning(args: any): void


declare function Logger$error(args: any): void

    }
