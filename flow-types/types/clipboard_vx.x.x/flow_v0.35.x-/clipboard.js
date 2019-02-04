declare module 'clipboard' {
        declare class ClipboardJS  {
constructor(selector: string | Element | NodeListOf<Element>, options?: ClipboardJS$ClipboardJS$Options): this;

/**
 * Subscribes to events that indicate the result of a copy/cut operation.
 * @param type Event type ('success' or 'error').
 * @param handler Callback function.
 */
on(
type: "success" | "error",
handler: (e: ClipboardJS$ClipboardJS$Event) => void): this;
on(type: string, handler: (...args: any[]) => void): this;

/**
 * Clears all event bindings.
 */
destroy(): void;

/**
 * Checks if clipboard.js is supported
 */
static isSupported(): boolean
}
	declare interface ClipboardJS$Options {

/**
 * Overwrites default command ('cut' or 'copy').
 * @param elem Current element
 */
action(elem: Element): "cut" | "copy",

/**
 * Overwrites default target input element.
 * @param elem Current element
 * @returns <input> element to use.
 */
target(elem: Element): Element,

/**
 * Returns the explicit text to copy.
 * @param elem Current element
 * @returns Text to be copied.
 */
text(elem: Element): string,

/**
 * For use in Bootstrap Modals or with any
 * other library that changes the focus
 * you'll want to set the focused element
 * as the container value.
 */
container?: Element
} 

declare interface ClipboardJS$Event {
action: string,
text: string,
trigger: Element,
clearSelection(): void
} 
	declare module.exports: typeof ClipboardJS

    }
