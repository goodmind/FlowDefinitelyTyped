declare module 'bigscreen' {
        declare export var element: Element;
	declare export var enabled: boolean;
	declare export function exit(): void

	declare export function onchange(element: Element): void

	declare export function onenter(element: Element): void

	declare export function onerror(element: Element, reason: string): void

	declare export function onexit(): void

	declare export function request(
element: Element,
onEnter?: (element: Element) => void,
onExit?: () => void,
onError?: (element: Element, reason: string) => void): void

	declare export function toggle(
element?: Element,
onEnter?: (element: Element) => void,
onExit?: () => void,
onError?: (element: Element, reason: string) => void): void

	declare export function videoEnabled(video: HTMLVideoElement): boolean

    }
