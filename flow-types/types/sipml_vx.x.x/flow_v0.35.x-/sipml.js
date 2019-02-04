declare module 'sipml' {
        
      declare var npm$namespace$SIPml: {
        getNavigatorFriendlyName: typeof SIPml$getNavigatorFriendlyName,
getNavigatorVersion: typeof SIPml$getNavigatorVersion,
getSystemFriendlyName: typeof SIPml$getSystemFriendlyName,
getWebRtc4AllVersion: typeof SIPml$getWebRtc4AllVersion,
haveMediaStream: typeof SIPml$haveMediaStream,
init: typeof SIPml$init,
isInitialized: typeof SIPml$isInitialized,
isNavigatorOutdated: typeof SIPml$isNavigatorOutdated,
isReady: typeof SIPml$isReady,
isScreenShareSupported: typeof SIPml$isScreenShareSupported,
isWebRtcPluginOutdated: typeof SIPml$isWebRtcPluginOutdated,
isWebRtc4AllSupported: typeof SIPml$isWebRtc4AllSupported,
isWebRtcSupported: typeof SIPml$isWebRtcSupported,
isWebSocketSupported: typeof SIPml$isWebSocketSupported,
setDebugLevel: typeof SIPml$setDebugLevel,
setWebRtcType: typeof SIPml$setWebRtcType,
        
      }
declare class SIPml$Event  {
description: string;
type: string;
getContent(): Object;
getContentString(): string;
getContentType(): Object;
getSipResponseCode(): number
}

declare class SIPml$EventTarget<EventSubscriptionType: string, EventType: SIPml$Event>  {
addEventListener(type: Stack$EventSubscriptionType, listener: (e: EventType) => void): void;
removeEventListener(type: Stack$EventSubscriptionType): void
}

declare class SIPml$Session mixins SIPml$EventTarget<SIPml$Session.Stack$EventSubscriptionType, SIPml$Session.SIPml$Event> {
accept(configuration?: SIPml$Session.Stack$Configuration): number;
getId(): number;
getRemoteFriendlyName(): string;
getRemoteUri(): string;
reject(configuration?: SIPml$Session.Stack$Configuration): number;
setConfiguration(configuration?: SIPml$Session.Stack$Configuration): void
}


/**
 * Should be
 * 
 * "*" |
 * "connecting" |
 * "connected" |
 * "terminating" |
 * "terminated" |
 * "i_ao_request" |
 * "media_added" |
 * "media_removed" |
 * "i_request" |
 * "o_request" |
 * "cancelled_request" |
 * "sent_request" |
 * "transport_error" |
 * "global_error" |
 * "message_error" |
 * "webrtc_error" |
 */
declare type Session$EventSubscriptionType = string;

declare interface Session$Configuration {
audio_remote?: HTMLElement,
bandwidth?: {
audio: number,
video: number
},
events_listener?: {
events: Session$EventSubscriptionType | Session$EventSubscriptionType[],
listener: (e: SIPml$Session.SIPml$Event) => void
},
expires?: number,
from?: string,
sip_caps?: Object[],
sip_headers?: Object[],
video_local?: HTMLElement,
video_remote?: HTMLElement,
video_size?: {
minWidth?: number,
maxWidth?: number,
minHeight?: number,
maxHeight?: number
},
bandwidth?: {
audio: number,
video: number
},
display_name?: string,
enable_click2call?: boolean,
enable_early_ims?: boolean,
enable_media_stream_cache?: boolean,
enable_rtcweb_breaker?: boolean,
events_listener?: {
events: Session$EventSubscriptionType | Session$EventSubscriptionType[],
listener: (e: SIPml$Stack.SIPml$Event) => void
},
ice_servers?: Object[],
impi?: string,
impu?: string,
outbound_proxy_url?: string,
password?: string,
realm?: string,
sip_headers?: Object[],
video_size?: {
minWidth?: number,
maxWidth?: number,
minHeight?: number,
maxHeight?: number
},
websocket_proxy_url?: string
} 

declare class Session$Call mixins SIPml$Session, SIPml$EventTarget<Session$Call.Session$EventSubscriptionType, SIPml$Session.SIPml$Event> {
acceptTransfer(configuration?: SIPml$Session.Session$Configuration): number;
call(to: string, configuration?: SIPml$Session.Session$Configuration): number;
dtmf(): number;
hangup(configuration?: SIPml$Session.Session$Configuration): number;
hold(configuration?: SIPml$Session.Session$Configuration): number;
info(): number;
rejectTransfer(): number;
resume(): number;
transfer(): number
}


/**
 * Should be
 * 
 * "*" |
 * "connecting" |
 * "connected" |
 * "terminating" |
 * "terminated" |
 * "i_ao_request" |
 * "media_added" |
 * "media_removed" |
 * "i_request" |
 * "o_request" |
 * "cancelled_request" |
 * "sent_request" |
 * "transport_error" |
 * "global_error" |
 * "message_error" |
 * "webrtc_error" |
 */
declare type Call$EventSubscriptionType = string;

declare class Session$Event mixins SIPml$Session$Event {
session: SIPml$Session;
getTransferDestinationFriendlyName(): string
}

declare class Session$Message mixins SIPml$Session {
send(
to: string,
content?: any,
contentType?: string,
configuration?: SIPml$Session.Session$Configuration): number
}

declare class Session$Publish mixins SIPml$Session {
publish(
content?: any,
contentType?: string,
configuration?: SIPml$Session.Session$Configuration): number;
unpublish(configuration?: SIPml$Session.Session$Configuration): void
}

declare class Session$Registration mixins SIPml$Session {
register(configuration?: SIPml$Session.Session$Configuration): void;
unregister(configuration?: SIPml$Session.Session$Configuration): void
}

declare class Session$Subscribe mixins SIPml$Session, SIPml$EventTarget<Session$Subscribe.Call$EventSubscriptionType, SIPml$Session.Session$Event> {
subscribe(to: string, configuration?: SIPml$Session.Session$Configuration): number;
unsubscribe(configuration?: SIPml$Session.Session$Configuration): number
}


/**
 * Should be
 * 
 * "*" |
 * "connecting" |
 * "connected" |
 * "terminating" |
 * "terminated" |
 * "i_ao_request" |
 * "media_added" |
 * "media_removed" |
 * "i_request" |
 * "o_request" |
 * "cancelled_request" |
 * "sent_request" |
 * "transport_error" |
 * "global_error" |
 * "message_error" |
 * "webrtc_error" |
 */
declare type Subscribe$EventSubscriptionType = string;

declare class SIPml$Stack mixins SIPml$EventTarget<SIPml$Stack.Subscribe$EventSubscriptionType, SIPml$Stack.Session$Event> {
constructor(configuration?: SIPml$Stack.Session$Configuration): this;
setConfiguration(configuration: SIPml$Stack.Session$Configuration): number;
newSession(type: string, configuration?: SIPml$Session.Session$Configuration): any;
start(): number;
stop(timeout?: number): number
}


/**
 * Should be
 * 
 * "*" |
 * "connecting" |
 * "connected" |
 * "terminating" |
 * "terminated" |
 * "i_ao_request" |
 * "media_added" |
 * "media_removed" |
 * "i_request" |
 * "o_request" |
 * "cancelled_request" |
 * "sent_request" |
 * "transport_error" |
 * "global_error" |
 * "message_error" |
 * "webrtc_error" |
 */
declare type Stack$EventSubscriptionType = string;

declare interface Stack$Configuration {
audio_remote?: HTMLElement,
bandwidth?: {
audio: number,
video: number
},
events_listener?: {
events: Stack$EventSubscriptionType | Stack$EventSubscriptionType[],
listener: (e: SIPml$Session.Session$Event) => void
},
expires?: number,
from?: string,
sip_caps?: Object[],
sip_headers?: Object[],
video_local?: HTMLElement,
video_remote?: HTMLElement,
video_size?: {
minWidth?: number,
maxWidth?: number,
minHeight?: number,
maxHeight?: number
},
bandwidth?: {
audio: number,
video: number
},
display_name?: string,
enable_click2call?: boolean,
enable_early_ims?: boolean,
enable_media_stream_cache?: boolean,
enable_rtcweb_breaker?: boolean,
events_listener?: {
events: Stack$EventSubscriptionType | Stack$EventSubscriptionType[],
listener: (e: SIPml$Stack.Session$Event) => void
},
ice_servers?: Object[],
impi?: string,
impu?: string,
outbound_proxy_url?: string,
password?: string,
realm?: string,
sip_headers?: Object[],
video_size?: {
minWidth?: number,
maxWidth?: number,
minHeight?: number,
maxHeight?: number
},
websocket_proxy_url?: string
} 

declare class Stack$Event mixins SIPml$Stack$Event {
description: string;
newSession: SIPml$Session;
type: string
}

declare function SIPml$getNavigatorFriendlyName(): string


declare function SIPml$getNavigatorVersion(): string


declare function SIPml$getSystemFriendlyName(): string


declare function SIPml$getWebRtc4AllVersion(): string


declare function SIPml$haveMediaStream(): boolean


declare function SIPml$init(readyCallback?: (e: any) => any, errorCallback?: (e: any) => any): boolean


declare function SIPml$isInitialized(): boolean


declare function SIPml$isNavigatorOutdated(): boolean


declare function SIPml$isReady(): boolean


declare function SIPml$isScreenShareSupported(): boolean


declare function SIPml$isWebRtcPluginOutdated(): boolean


declare function SIPml$isWebRtc4AllSupported(): boolean


declare function SIPml$isWebRtcSupported(): boolean


declare function SIPml$isWebSocketSupported(): boolean


declare function SIPml$setDebugLevel(level: string): void


declare function SIPml$setWebRtcType(type: string): boolean

    }
