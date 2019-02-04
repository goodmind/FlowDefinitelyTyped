declare module 'fscreen' {
        declare type Handler = (e?: Event) => void;
	declare type RequestFullScreenFunction = (element: Element) => void;
	declare type EventName = "fullscreenEnabled"
| "fullscreenElement"
| "requestFullscreen"
| "exitFullscreen"
| "fullscreenchange"
| "fullscreenerror";
	declare class Fscreen  {
fullscreenElement: Element | void;
fullscreenEnabled: boolean;
exitFullscreen: Handler;
onfullscreenchange: Handler;
onfullscreenerror: Handler;
addEventListener(
type: EventName,
handler: Handler,
options?: boolean | AddEventListenerOptions): void;
removeEventListener(
type: EventName,
handler: Handler,
options?: boolean | AddEventListenerOptions): void;
requestFullscreen(element: Element): void;
requestFullscreenFunction(element: Element): RequestFullScreenFunction
}
	declare var fscreen: Fscreen;
	declare export default typeof fscreen

    }
