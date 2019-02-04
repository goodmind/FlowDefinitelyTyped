declare module 'unity-webapi' {
        declare interface External {
getUnityObject(version: number): Unity
} 
	declare class UnitySettings  {
name: string;
iconUrl: string;
onInit: Function
}
	declare  class UnityPlaybackState {
  constructor(...args: empty): mixed;
static +Playing: Class<UnityPlaybackState__Playing> & UnityPlaybackState__Playing & 0;// 0
static +Paused: Class<UnityPlaybackState__Paused> & UnityPlaybackState__Paused & 1;// 1

}

declare class UnityPlaybackState__Playing mixins UnityPlaybackState {}
declare class UnityPlaybackState__Paused mixins UnityPlaybackState {}

	declare class UnityTrackMetadata  {
title: string;
album: string;
artist: string;
artLocation: string
}
	declare interface UnityMediaPlayer {
setTrack(trackMetadata: UnityTrackMetadata): any,
onPrevious(onPreviousCallback: Function): any,
onNext(onNextCallback: Function): any,
onPlayPause(onPlayPauseCallback: Function): any,
getPlaybackstate(response: Function): any,
setPlaybackstate(state: UnityPlaybackState): any,
setCanGoNext(cangonext: boolean): any,
setCanGoPrev(cangoprev: boolean): any,
setCanPlay(canplay: boolean): any,
setCanPause(canpause: boolean): any
} 
	declare interface UnityNotification {
showNotification(summary: string, body: string, iconUrl?: string): any
} 
	declare class UnityIndicatorProperties  {
count: number;
time: Date;
iconURI: string;
onIndicatorActivated: Function
}
	declare interface UnityMessagingIndicator {
showIndicator(name: string, indicatorProperties: UnityIndicatorProperties): any,
clearIndicator(name: string): any,
clearIndicators(): any,
addAction(name: string, onActionInvoked: Function): any,
removeAction(name: string): any,
removeActions(): any,
onPresenceChanged(onPresenceChanged: Function): any,
presence: string
} 
	declare interface UnityLauncher {
setCount(count: number): any,
clearCount(): any,
setProgress(progress: number): any,
clearProgress(): any,
setUrgent(urgent: boolean): any,
addAction(name: string, onActionInvoked: Function): any,
removeAction(name: string): any,
removeActions(): any
} 
	declare interface Unity {
init(settings: UnitySettings): any,
addAction(name: string, callback: Function): any,
removeAction(actionName: string): any,
removeActions(): any,
Notification: UnityNotification,
MediaPlayer: UnityMediaPlayer,
MessagingIndicator: UnityMessagingIndicator,
Launcher: UnityLauncher
} 
	declare interface BrowserPublic {
getUnityObject(version: number): Unity
} 
    }
