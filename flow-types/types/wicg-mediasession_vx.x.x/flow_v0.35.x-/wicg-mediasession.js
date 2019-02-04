declare module 'wicg-mediasession' {
        declare interface Navigator {
+mediaSession?: MediaSession
} 
	declare interface Window {
MediaSession?: MediaSession
} 
	declare type MediaSessionPlaybackState = "none" | "paused" | "playing";
	declare type MediaSessionAction = "play"
| "pause"
| "seekbackward"
| "seekforward"
| "previoustrack"
| "nexttrack";
	declare interface MediaSession {
playbackState: MediaSessionPlaybackState,
metadata: MediaMetadata | null,
setActionHandler(action: MediaSessionAction, listener: (() => void) | null): void
} 
	declare interface MediaImage {
src: string,
sizes?: string,
type?: string
} 
	declare interface MediaMetadataInit {
title?: string,
artist?: string,
album?: string,
artwork?: MediaImage[]
} 
	declare class MediaMetadata  {
constructor(init?: MediaMetadataInit): this;
title: string;
artist: string;
album: string;
artwork: MediaImage[]
}
    }
