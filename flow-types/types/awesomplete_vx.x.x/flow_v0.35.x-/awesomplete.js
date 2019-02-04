declare module 'awesomplete' {
        declare class Awesomplete  {
constructor(input: Element | HTMLElement | string, o?: Awesomplete$Awesomplete$Options): this;
static all: any[];
static $$(expr: string | NodeSelector, con?: any): NodeList;
static ITEM: (text: string, input: string) => HTMLElement;
static $: {
(expr: string | Element, con?: NodeSelector): string | Element,
regExpEscape(s: {
replace(arg0: RegExp, arg1: string): void
}): any,
create(tag: string, o: any): HTMLElement,
fire(target: EventTarget, type: string, properties: any): any,
siblingIndex(el: Element): number
};
static FILTER_STARTSWITH: (text: string, input: string) => boolean;
static FILTER_CONTAINS: (text: string, input: string) => boolean;
static SORT_BYLENGTH: (left: number | any[], right: number | any[]) => number;
static REPLACE: (text: string) => void;
static DATA: (item: Awesomplete$Awesomplete$Suggestion) => Awesomplete$Awesomplete$Suggestion;
next: () => void;
container: HTMLElement;
select: (selected?: HTMLElement, originalTarget?: HTMLElement) => void;
previous: () => void;
index: number;
opened: number;
list: string | Element | Awesomplete$Awesomplete$Suggestion[];
input: HTMLElement | string;
goto: (i: number) => void;
ul: HTMLElement;
close: () => void;
evaluate: () => void;
selected: boolean;
open: () => void;
status: HTMLElement;
destroy: () => void
}
	declare type Awesomplete$Suggestion = string | {
label: string | any,
value: string | any
} | [string, string];

declare type Awesomplete$SortFunction = (left: number | any[], right: number | any[]) => number;

declare interface Awesomplete$Options {
list?: string
| string[]
| Element
| Array<{
label: string,
value: any
}>
| Array<[string, string]>,
minChars?: number,
maxItems?: number,
autoFirst?: boolean,
data(item: Awesomplete$Suggestion, input: string): string,
filter(text: string, input: string): boolean,
sort?: boolean | Awesomplete$SortFunction,
item(text: string, input: string): HTMLElement,
replace(text: string): void
} 
	declare module.exports: typeof Awesomplete

    }
