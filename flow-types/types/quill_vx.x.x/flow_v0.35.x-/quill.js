declare module 'quill' {
        import type {
          Blot
        } from 'parchment/dist/src/blot/abstract/blot';

	
/**
 * A stricter type definition would be:
 * 
 *    type DeltaOperation ({ insert: any } | { delete: number } | { retain: number }) & OptionalAttributes;
 * 
 *   But this would break a lot of existing code as it would require manual discrimination of the union types.
 */
declare export type DeltaOperation = {
insert?: any,
delete?: number,
retain?: number
} & OptionalAttributes;
	declare export type Sources = "api" | "user" | "silent";
	declare export interface Key {
key: string,
shortKey?: boolean
} 
	declare export interface StringMap {
[key: string]: any
} 
	declare export interface OptionalAttributes {
attributes?: StringMap
} 
	declare export type TextChangeHandler = (delta: Delta, oldContents: Delta, source: Sources) => any;
	declare export type SelectionChangeHandler = (range: RangeStatic, oldRange: RangeStatic, source: Sources) => any;
	declare export type EditorChangeHandler = ((name: "text-change", delta: Delta, oldContents: Delta, source: Sources) => any) | ((
name: "selection-change",
range: RangeStatic,
oldRange: RangeStatic,
source: Sources) => any);
	declare export interface KeyboardStatic {
addBinding(key: Key, callback: (range: RangeStatic, context: any) => void): void,
addBinding(
key: Key,
context: any,
callback: (range: RangeStatic, context: any) => void): void
} 
	declare export interface ClipboardStatic {
convert(html?: string): Delta,
addMatcher(
selectorOrNodeType: string | number,
callback: (node: any, delta: Delta) => Delta): void,
dangerouslyPasteHTML(html: string, source?: Sources): void,
dangerouslyPasteHTML(index: number, html: string, source?: Sources): void
} 
	declare export interface QuillOptionsStatic {
debug?: string | boolean,
modules?: StringMap,
placeholder?: string,
readOnly?: boolean,
theme?: string,
formats?: string[],
bounds?: HTMLElement | string,
scrollingContainer?: HTMLElement | string,
strict?: boolean
} 
	declare export interface BoundsStatic {
bottom: number,
left: number,
right: number,
top: number,
height: number,
width: number
} 
	declare export class RangeStatic mixins RangeStatic {
constructor(): this;
index: number;
length: number
}
	declare export interface EventEmitter {
on(eventName: "text-change", handler: TextChangeHandler): EventEmitter,
on(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter,
on(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter,
once(eventName: "text-change", handler: TextChangeHandler): EventEmitter,
once(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter,
once(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter,
off(eventName: "text-change", handler: TextChangeHandler): EventEmitter,
off(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter,
off(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter
} 
	declare export class Quill mixins EventEmitter {

/**
 * @private Internal API
 */
root: HTMLDivElement;
clipboard: ClipboardStatic;
scroll: Blot;
keyboard: KeyboardStatic;
constructor(container: string | Element, options?: QuillOptionsStatic): this;
deleteText(index: number, length: number, source?: Sources): Delta;
disable(): void;
enable(enabled?: boolean): void;
getContents(index?: number, length?: number): Delta;
getLength(): number;
getText(index?: number, length?: number): string;
insertEmbed(index: number, type: string, value: any, source?: Sources): Delta;
insertText(index: number, text: string, source?: Sources): Delta;
insertText(
index: number,
text: string,
format: string,
value: any,
source?: Sources): Delta;
insertText(index: number, text: string, formats: StringMap, source?: Sources): Delta;

/**
 * @deprecated Remove in 2.0. Use clipboard.dangerouslyPasteHTML(index: number, html: string, source: Sources)
 */
pasteHTML(index: number, html: string, source?: Sources): string;

/**
 * @deprecated Remove in 2.0. Use clipboard.dangerouslyPasteHTML(html: string, source: Sources): void;
 */
pasteHTML(html: string, source?: Sources): string;
setContents(delta: Delta, source?: Sources): Delta;
setText(text: string, source?: Sources): Delta;
update(source?: Sources): void;
updateContents(delta: Delta, source?: Sources): Delta;
format(name: string, value: any, source?: Sources): Delta;
formatLine(index: number, length: number, source?: Sources): Delta;
formatLine(
index: number,
length: number,
format: string,
value: any,
source?: Sources): Delta;
formatLine(index: number, length: number, formats: StringMap, source?: Sources): Delta;
formatText(index: number, length: number, source?: Sources): Delta;
formatText(
index: number,
length: number,
format: string,
value: any,
source?: Sources): Delta;
formatText(index: number, length: number, formats: StringMap, source?: Sources): Delta;
formatText(range: RangeStatic, format: string, value: any, source?: Sources): Delta;
formatText(range: RangeStatic, formats: StringMap, source?: Sources): Delta;
getFormat(range?: RangeStatic): StringMap;
getFormat(index: number, length?: number): StringMap;
removeFormat(index: number, length: number, source?: Sources): Delta;
blur(): void;
focus(): void;
getBounds(index: number, length?: number): BoundsStatic;
getSelection(focus: true): RangeStatic;
getSelection(focus?: false): RangeStatic | null;
hasFocus(): boolean;
setSelection(index: number, length: number, source?: Sources): void;
setSelection(range: RangeStatic, source?: Sources): void;
static debug(level: string | boolean): void;
static import(path: string): any;
static register(path: string, def: any, suppressWarning?: boolean): void;
static register(defs: StringMap, suppressWarning?: boolean): void;
static find(domNode: Node, bubble?: boolean): Quill | any;
addContainer(classNameOrDomNode: string | Node, refNode?: Node): any;
getModule(name: string): any;
getIndex(blot: any): number;
getLeaf(index: number): any;
getLine(index: number): [any, number];
getLines(index?: number, length?: number): any[];
getLines(range: RangeStatic): any[];
on(eventName: "text-change", handler: TextChangeHandler): EventEmitter;
on(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter;
on(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter;
once(eventName: "text-change", handler: TextChangeHandler): EventEmitter;
once(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter;
once(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter;
off(eventName: "text-change", handler: TextChangeHandler): EventEmitter;
off(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter;
off(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter
}
	declare export default typeof Quill

    }
