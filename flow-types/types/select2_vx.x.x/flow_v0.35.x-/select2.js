declare module 'select2' {
        declare export type Sub<O: string, D: string> = $ElementType<$ObjMapi<{[k: O]: any}, <K>(K) => $ElementType<(Record<D, empty> & Record<string, K>), K>>, O>;
	
/**
 * Same as jQuery v3 `JQuery.AjaxSettingsBase`.
 */
declare export type JQueryAjaxSettingsBase = Pick<JQueryAjaxSettings, Sub<$Keys<JQueryAjaxSettings>, "url">>;
	
/**
 * Same as jQuery v3 `JQuery.EventHandlerBase`.
 */
declare export type JQueryEventHandlerBase<TContext, T> = (t: T, ...args: any[]) => void | false;
	
/**
 * Same as jQuery v3 `JQuery.PlainObject`.
 */
declare export interface PlainObject<T> {
[key: string]: T
} 
	declare export interface Select2 {
$container: JQuery,
$dropdown: JQuery,
$selection: JQuery,
$results: JQuery,
dropdown: any,
id: string,
options: {
options: Options
},
results: any,
selection: any
} 
	declare export interface QueryOptions {
term?: string,
page?: number
} 
	declare export interface SearchOptions {
term: string
} 
	declare export interface DataFormat {
id: number | string,
text: string,
selected?: boolean,
disabled?: boolean
} 
	declare export interface GroupedDataFormat {
text: string,
children?: DataFormat[],
id?: void
} 
	declare export interface ProcessedResult<Result> {
results: Result[],
pagination?: {
more: boolean
}
} 
	declare export interface LoadingData {
loading: boolean,
text: string,
id?: void,
element?: void
} 
	declare export interface OptGroupData {
children: OptionData[],
disabled: boolean,
element: HTMLOptGroupElement,
selected: boolean,
text: string,
title: string,
loading?: void
} 
	declare export interface OptionData {
disabled: boolean,
element: HTMLOptionElement,
id: string,
selected: boolean,
text: string,
title: string,
loading?: void,
children?: void
} 
	declare export interface IdTextPair {
id: string,
text: string,
loading?: void,
element?: void
} 
	declare export interface TranslationArg {
input: string,
minimum: number,
maximum: number
} 
	declare export interface Translation {
errorLoading?: () => string,
inputTooLong?: (arg: TranslationArg) => string,
inputTooShort?: (arg: TranslationArg) => string,
loadingMore?: () => string,
maximumSelected?: (arg: TranslationArg) => string,
noResults?: () => string,
searching?: () => string
} 
	declare export interface DataParams {
data: OptionData,
originalEvent: BaseJQueryEventObject
} 
	declare export interface IngParams {
name: "select" | "open" | "close" | "unselect",
prevented: boolean
} 
	declare export type Event<TElement, T> = {
params: T
} & BaseJQueryEventObject

	declare export interface Trigger {
type: "select2:select",
params: {
data: IdTextPair
}
} 
	declare export type AjaxOptions<Result, RemoteResult> = {
delay?: number,
url?: string | ((params: QueryOptions) => string),
data?: (params: QueryOptions) => PlainObject,
transport?: (
settings: JQueryAjaxSettings,
success?: (data: RemoteResult) => void,
failure?: () => void) => void,
processResults?: (data: RemoteResult, params: QueryOptions) => ProcessedResult<Result>
} & JQueryAjaxSettingsBase

	declare export interface Options<Result, RemoteResult> {
ajax?: AjaxOptions<Result, RemoteResult>,
allowClear?: boolean,
amdBase?: string,
amdLanguageBase?: string,
closeOnSelect?: boolean,
containerCss?: any,
containerCssClass?: string,
data?: DataFormat[] | GroupedDataFormat[],
dataAdapter?: any,
debug?: boolean,
dir?: "ltr" | "rtl",
disabled?: boolean,
dropdownAdapter?: any,
dropdownAutoWidth?: boolean,
dropdownCss?: any,
dropdownCssClass?: string,
dropdownParent?: JQuery,
escapeMarkup?: (markup: string) => string,
initSelection?: (element: JQuery, callback: (data: any) => void) => void,
language?: string | Translation,
matcher?: (
params: SearchOptions,
data: OptGroupData | OptionData) => OptGroupData | OptionData | null,
maximumInputLength?: number,
maximumSelectionLength?: number,
minimumInputLength?: number,
minimumResultsForSearch?: number,
multiple?: boolean,
placeholder?: string | IdTextPair,
resultsAdapter?: any,
selectionAdapter?: any,
selectOnClose?: boolean,
sorter?: (
data: Array<OptGroupData | OptionData | IdTextPair>) => Array<OptGroupData | OptionData | IdTextPair>,
tags?: boolean,
templateResult?: (result: LoadingData | Result) => string | JQuery | null,
templateSelection?: (selection: IdTextPair | LoadingData | Result) => string | JQuery,
theme?: string,
tokenizer?: (
input: string,
selection: any[],
selectCallback: () => void,
options: Options) => string,
tokenSeparators?: string[],
width?: string,
createTag?: (params: SearchOptions) => IdTextPair | null,
insertTag?: (data: Array<OptionData | IdTextPair>, tag: IdTextPair) => void
} 
	declare export interface Select2Plugin<TElement> {
amd: {
require: Require
},
defaults: {
set: (key: string, value: any) => void,
reset: () => void
},
(): JQuery<TElement>,
(options: Options<Result, RemoteResult>): JQuery<TElement>,

/**
 * Get the data object of the current selection
 */
(method: "data"): OptionData[],

/**
 * Reverts changes to DOM done by Select2. Any selection done via Select2 will be preserved.
 */
(method: "destroy"): JQuery<TElement>,

/**
 * Opens the dropdown
 */
(method: "open"): JQuery<TElement>,

/**
 * Closes the dropdown
 */
(method: "close"): JQuery<TElement>
} 
	declare module 'global' {
        declare interface JQuery<TElement> {
select2: Select2Plugin<TElement>,
data(key: "select2"): Select2,
trigger(events: Trigger): void,
on(
events: "select2:closing",
handler?: JQueryEventHandlerBase<TElement, Event<TElement, IngParams>>): this,
on(
events: "select2:close",
handler?: JQueryEventHandlerBase<TElement, Event<TElement, {}>>): this,
on(
events: "select2:opening",
handler?: JQueryEventHandlerBase<TElement, Event<TElement, IngParams>>): this,
on(
events: "select2:open",
handler?: JQueryEventHandlerBase<TElement, Event<TElement, {}>>): this,
on(
events: "select2:selecting",
handler?: JQueryEventHandlerBase<TElement, Event<TElement, IngParams>>): this,
on(
events: "select2:select",
handler?: JQueryEventHandlerBase<TElement, Event<TElement, DataParams>>): this,
on(
events: "select2:unselecting",
handler?: JQueryEventHandlerBase<TElement, Event<TElement, IngParams>>): this,
on(
events: "select2:unselect",
handler?: JQueryEventHandlerBase<TElement, Event<TElement, DataParams>>): this
} 
    }

    }
