declare module 'elementtree' {
        declare export interface ElementTreeWriteOptions {
default_namespace?: string,
encoding?: string,
indent?: number,
method?: "xml" | "text",
xml_declaration?: boolean
} 
	declare export class ElementTree  {
constructor(element: Element): this;
getroot(): Element;
_setroot(element: Element): void;
parse(source: string): Element;
find(path: string): Element | null;
findtext(path: string): ElementText | void;
findall(path: string): Element[];
write(options?: ElementTreeWriteOptions): string
}
	declare export interface Attributes {
[key: string]: string | void
} 
	declare export type ElementTag = typeof Comment | typeof CData | typeof ProcessingInstruction | string;
	declare export type ElementText = {
toString(): string
} | string;
	declare export interface Element {
tag: ElementTag,
attrib: Attributes,
text: ElementText | null,
tail: string | null,
toString(): string,
makeelement(tag: ElementTag, attrib?: Attributes): Element,
len(): number,
getItem(index: number): Element | void,
setItem(index: number, element: Element): void,
delItem(index: number): void,
getSlice(start: number, stop: number): Element[],
setSlice(start: number, stop: number, elements: $ReadOnlyArray<Element>): void,
delSlice(start: number, stop: number): void,
append(element: Element): void,
extend(elements: $ReadOnlyArray<Element>): void,
insert(index: number, element: Element): void,
remove(element: Element): void,
getchildren(): Element[],
find(path: string): Element | null,
findtext(path: string): ElementText | void,
findall(path: string): Element[],
clear(): void,
get(k: string): string | void,
set(k: string, v?: string): string,
keys(): string[],
items(): Array<[string, string]>
} 
	declare export class QName  {
text: string;
constructor(text_or_uri: string, tag?: string): this;
toString(): string
}
	declare export function CData(text?: ElementText): Element

	declare export function Comment(text?: ElementText): Element

	declare export function ProcessingInstruction(target: ElementText, text?: ElementText): Element

	declare export function XML(data: string): Element

	declare export function Element(ElementTag: string, attrib?: Attributes): Element

	declare export function SubElement(parent: Element, ElementTag: string, attrib?: Attributes): Element

	declare export function parse(source: string): ElementTree

	declare export function register_namespace(prefix: string, uri: string): void

	declare export function tostring(element: Element, options: ElementTreeWriteOptions): string

    }
