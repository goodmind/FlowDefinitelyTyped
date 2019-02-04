declare module 'vimeo' {
        declare interface VimeoParams {
name: string,
value: any
} 
	declare interface VimeoPlayerAPI {
(method: string): any,
(method: string, callback: (value: any, player_id: any) => void): any,
(method: string, value: any): any,
(method: string, value: VimeoParams[]): any
} 
	declare interface VimeoPlayer {
api: VimeoPlayerAPI,
addEvent(eventName: string, callback: (e: any) => void): any,
removeEvent(eventName: string): void,
postMessage(method: string, params: VimeoParams[], target: any): void,
onMessageReceived(event: any): any,
storeCallback(eventName: string, callback: any, target_id: string): any,
getCallback(eventName: string, target_id: string): any,
removeCallback(eventName: string, target_id: string): any,
getDomainFromUrl(url: string): string
} 
	declare var $f: VimeoPlayerAPI;
	declare var Froogaloop: VimeoPlayerAPI;
    }
