declare module 'tinymce' {
        declare export var DOM: dom$dom$DOMUtils;
	declare export var PluginManager: AddOnManager;
	declare export var dom$ScriptLoader: dom$dom$ScriptLoader;
	declare export var ThemeManager: AddOnManager;
	declare export var EditorManager: EditorManager;
	declare export var baseURL: string;
	declare export var activeEditor: Editor;
	declare export function create(s: string, p: {}, root?: {}): void

	declare export function createNS(n: string, o: {}): {}

	declare export function each(o: {}, cb: () => void, s?: {}): void

	declare export function explode(s: string, d: string): void

	declare export function grep(a: any[], f: () => void): any[]

	declare export function inArray(item: any, arr: any[]): number

	declare export function is(obj: {}, type?: string): boolean

	declare export function isArray(obj: {}): boolean

	declare export function makeMap(items: any[], delim?: string, map?: {}): {}

	declare export function map(array: any[], callback: () => void): any[]

	declare export function resolve(n: string, o?: {}): {}

	declare export function toArray(obj: {}): any[]

	declare export function trim(s: string): string

	declare export function walk(o: {}, f: () => void, n?: string, s?: string): void

	declare export function init(settings: Settings): void

	declare export interface Settings {
table_toolbar?: string,
table_appearance_options?: boolean,
table_clone_elements?: string,
table_grid?: boolean,
table_tab_navigation?: boolean,
table_default_attributes?: {[key: string]: any} | string,
table_default_styles?: {[key: string]: any} | string,
table_class_list?: {[key: string]: any}[],
table_cell_class_list?: {[key: string]: any}[],
table_row_class_list?: {[key: string]: any}[],
table_advtab?: boolean,
table_cell_advtab?: boolean,
table_row_advtab?: boolean,
auto_focus?: string,
cache_suffix?: string,
content_security_policy?: string,
external_plugins?: {},
hidden_input?: boolean,
paste_data_images?: boolean,
advlist_number_styles?: string,
init_instance_callback(editor: Editor): void,
plugins?: string | string[],
selector?: string,
setup(edtor: Editor): void,
target?: Element,
branding?: boolean,
color_picker_callback(callback: (hexColor: string) => void, value: string): void,
custom_ui_selector?: string,
elementpath?: boolean,
event_root?: boolean,
fixed_toolbar_container?: string,
height?: number | string,
inline?: boolean,
insert_button_items?: string,
insert_toolbar?: string,
max_height?: number,
max_width?: number,
menu?: settings$ui$Menu,
menubar?: string | boolean,
min_height?: number | string,
min_width?: number | string,
preview_styles?: boolean | string,
removed_menuitems?: string,
resize?: boolean | string,
selection_toolbar?: string,
skin_url?: string,
skin?: string,
statusbar?: boolean,
theme_url?: string,
theme?: string,
toolbar?: boolean | string | string[],
width?: number | string,
body_class?: string,
body_id?: string,
content_css?: string | string[],
content_style?: string,
inline_boundaries?: boolean,
visual_anchor_class?: string,
visual_table_class?: string,
visual?: boolean,
allow_conditional_comments?: boolean,
allow_html_in_named_anchor?: boolean,
allow_unsafe_link_target?: boolean,
convert_fonts_to_spans?: boolean,
custom_elements?: string,
doctype?: string,
element_format?: string,
encoding?: string,
entities?: string,
entity_encoding?: string,
extended_valid_elements?: string,
fix_list_elements?: boolean,
force_hex_style_colors?: boolean,
forced_root_block?: string,
forced_root_block_attrs?: {},
invalid_elements?: string,
invalid_styles?: string | {},
keep_styles?: boolean,
protect?: RegExp[],
remove_trailing_brs?: boolean,
schema?: string,
valid_children?: string,
valid_classes?: string | {},
valid_elements?: string,
valid_styles?: {},
block_formats?: string,
font_formats?: string,
fontsize_formats?: string,
formats?: {},
removeFormat?: Array<{}>,
indentation?: string,
style_formats?: Array<{}>,
style_formats_autohide?: boolean,
style_formats_merge?: boolean,
browser_spellcheck?: boolean,
gecko_spellcheck?: boolean,
automatic_uploads?: boolean,
file_browser_callback(field_name: string, url: string, type: string, win: Window): void,
file_browser_callback_types?: string,
file_picker_callback(
callback: (filename: string, metadata: {}) => void,
valud: string,
meta: {}): void,
file_picker_types?: string,
images_dataimg_filter(img: any): void,
images_reuse_filename?: boolean,
images_upload_base_path?: string,
images_upload_credentials?: boolean,
images_upload_handler(
blobInfo: any,
success: (msg: string) => void,
failure: (msg: string) => void): void,
images_upload_url?: string,
directionality?: string,
language?: string,
language_url?: string,
allow_script_urls?: boolean,
convert_urls?: boolean,
document_base_url?: string,
relative_urls?: boolean,
remove_script_host?: boolean,
urlconverter_callback(url: string, node: HTMLElement, on_save: boolean, name: string): void,
anchor_bottom?: string,
anchor_top?: string,
br_in_pre?: boolean,
custom_undo_redo_levels?: number,
end_container_on_empty_block?: boolean,
nowrap?: boolean,
object_resizing?: boolean | string,
type_ahead_urls?: boolean,
autosave_ask_before_unload?: boolean,
autosave_interval?: string,
autosave_prefix?: string,
autosave_restore_when_empty?: boolean,
autosave_retention?: string,
imagetools_cors_hosts?: string[],
imagetools_proxy?: string,
imagetools_toolbar?: string,
imagetools_api_key?: string
} 
	declare interface settings$Menu {
file: settings$MenuItem,
edit: settings$MenuItem,
insert: settings$MenuItem,
view: settings$MenuItem,
format: settings$MenuItem,
table: settings$MenuItem,
tools: settings$MenuItem
} 

declare interface settings$MenuItem {
title: string,
items: string
} 
	declare export interface AddOnManager {
add(id: string, addOn: (editor: Editor, url: string) => void): Theme | Plugin,
addComponents(pluginName: string, scripts: string[]): void,
get(name: string): Theme | Plugin,
load(
name: string,
addOnUrl: string,
success?: () => void,
scope?: {},
failure?: () => void): void,
requireLangPack(name: string, languages?: string): void
} 
	declare export class Editor mixins util$util$Observable {
constructor(id: string, settings: Settings, editorManager: EditorManager): this;
$: dom$dom$DomQuery;
baseURI: util$util$URI;
contentCSS: string[];
contentStyles: string[];
documentBaseURI: util$util$URI;
dom: dom$dom$DOMUtils;
formatter: Formatter;
id: string;
initialized: boolean;
notificationManager: notificationManager;
parser: html$html$DomParser;
schema: html$html$Schema;
selection: dom$dom$Selection;
serializer: dom$html$Serializer;
settings: Settings;
theme: Theme;
undoManager: UndoManager;
windowManager: WindowManager;
addButton(name: string, settings: {}): void;
addCommand(name: string, callback: (ui: boolean, value: {}) => boolean, scope?: {}): void;
addContextToolbar(predicate: () => void, items: string): void;
addMenuItem(name: string, settings: {}): void;
addQueryStateHandler(name: string, callback: () => boolean, scope?: {}): void;
addQueryValueHandler(name: string, callback: () => {}, scope?: {}): void;
addShortcut(pattern: string, desc: string, cmdFunc: string, sc?: {}): boolean;
addSidebar(name: string, settings: {}): void;
addVisual(elm?: Element): void;
convertURL(url: string, name: string, elm: string): string;
destroy(automatic?: boolean): void;
execCallback(name: string): {};
execCommand(cmd: string, ui: boolean, value?: any, args?: {}): void;
focus(skipFocus: boolean): void;
getBody(): HTMLBodyElement;
getContainer(): Element;
getContent(args?: {}): string;
getContentAreaContainer(): Element;
getDoc(): Document;
getElement(): Element;
getLang(name: string, defaultVal?: string): void;
getParam(name: string, defaultVal?: string, type?: string): string;
getWin(): Window;
hasEventListeners(name: string): boolean;
hide(): void;
init(): void;
insertContent(content: string, args?: {}): void;
isDirty(): boolean;
isHidden(): boolean;
load(args?: {}): string;
nodeChanged(args?: {}): void;
queryCommandState(cmd: string): boolean;
queryCommandSupported(cmd: string): boolean;
queryCommandValue(cmd: string): {};
remove(): void;
render(): void;
save(args: {}): string;
setContent(content: string, args?: {}): string;
setDirty(state: boolean): void;
setMode(mode: string): void;
setProgressState(state: boolean, time: number): boolean;
show(): void;
translate(text: string): string;
uploadImages(callback: () => void): Promise<any>
}
	declare export interface EditorCommands {
addCommands(command_list: {}, type?: string): void,
execCommand(command: string, ui?: boolean, value?: {}, args?: {}): boolean,
queryCommandState(command: string): boolean | number,
queryCommandSupported(command: string): boolean,
queryCommandValue(command: string): {}
} 
	declare export type EditorManager = {
$: dom$dom$DomQuery,
activeEditor: Editor,
baseURI: util$util$URI,
baseURL: string,
documentBaseURL: string,
editors: Editor[],
util$i18n: {},
majorVersion: string,
minorVersion: string,
releaseDate: string,
suffix: string,
add(editor: Editor): Editor,
addI18n(code: string, items: {}): void,
createEditor(id: string, settings: {}): Editor,
execCommand(cmd: string, ui?: boolean, value?: string): boolean,
get(id: string): Editor,
init(settings: Settings): Promise<Editor>,
overrideDefaults(defaultSettings: {}): void,
remove(selector: Editor): Editor,
setActive(editor: Editor): void,
translate(text: string): string,
triggerSave(): void
} & util$util$Observable

	declare export interface Env {
android: boolean,
ceFalse: boolean,
contentEditable: boolean,
documentMode: boolean,
fileApi: boolean,
gecko: boolean,
iOS: boolean,
ie: boolean,
mac: boolean,
noCaretAfter: boolean,
opera: boolean,
range: boolean,
transparentSrc: boolean,
webKit: boolean
} 
	declare interface Events$Event {
type: string,
target: string,
isDefaultPrevented(): boolean,
isImmediatePropagationStopped(): boolean,
isPropagationStopped(): boolean,
preventDefault(): void,
stopImmediatePropagation(): void,
stopPropagation(): void
} 

declare type Events$FocusBlurEvent = {
blurredEditor: Editor
} & Events$Event


declare type Events$ContentEvent = {
format: string,
set: boolean,
content: string
} & Events$Event


declare type Events$ProcessEvent = {
content: string,
forced_root_block: string,
format: string,
get: boolean,
get_inner: boolean,
node: html$Node,
selection: true
} & Events$Event


declare type Events$NodeChangeEvent = {
element: html$Node,
parents: html$Node[],
selectionChange: boolean
} & Events$Event


declare type Events$UndoRedoEvent = {
level: {}
} & Events$Event


declare type Events$ChangeEvent = {
lastLevel: {},
level: {}
} & Events$Event


declare type Events$CommandEvent = {
command: string,
ui: boolean,
value: string
} & Events$Event

	declare export class FocusManager  {
constructor(): this;
static isEditorUIElement(elm: Element): boolean
}
	declare export class Formatter mixins Formatter {
constructor(ed: Editor): this
}
	declare export interface Shortcuts {
add(
pattern: string,
desc: string,
cmdFunc: () => void | string,
scope?: {}): boolean,
remove(pattern: string): boolean
} 
	declare export interface Theme {
renderUI(obj: {}): {}
} 
	declare export interface UndoManager {
add(level?: {}, event?: DocumentEvent): {},
beforeChange(): void,
clear(): void,
extra(callback1: () => void, callback2: () => void): void,
hasRedo(): boolean,
hasUndo(): boolean,
ignore(callback: () => void): void,
redo(): {},
transact(callback: () => void): {},
undo(): {}
} 
	declare export interface WindowManager {
alert(message: string, callback: () => void, scope?: {}): void,
close(): void,
confirm(message: string, callback: () => void, scope?: {}): void,
getParams(): {},
getWindows(): Window[],
open(args: {}, params: {}): void,
setParams(params: {}): void
} 
	declare export interface notificationManager {
close(): void,
getNotifications(): Array<{}>,
open(args?: {}): void
} 
	declare interface ui$ControlSettings {
menu: settings$Menu
} 

declare interface ui$Collection {} 

declare interface ui$Container {
add(items: any): ui$Collection,
items(): ui$Collection
} 

declare interface ui$Moveable {
moveRel(elm: html$Node, rel: string): ui$Control
} 

declare type ui$FloatPanel = {} & ui$Control & ui$Moveable


declare interface ui$Menu {
file: settings$MenuItem,
edit: settings$MenuItem,
insert: settings$MenuItem,
view: settings$MenuItem,
format: settings$MenuItem,
table: settings$MenuItem,
tools: settings$MenuItem
} 

declare interface ui$Factory {
create(settings: any): ui$Control
} 

declare class ui$Control  {
constructor(): this;
$el: JQuery;
on(name: string, callback: string): ui$Control;
tooltip(): ui$Control;
settings: ui$ControlSettings;
disabled(state: boolean): void;
active(state: boolean): void
}
	declare interface dom$BookmarkManager {
getBookmark(type?: number, normalized?: boolean): {},
isBookmarkNode(node: HTMLElement): boolean,
moveToBookmark(bookmark: {}): boolean
} 

declare class dom$DOMUtils mixins dom$DOMUtils {
constructor(doc: Document, settings?: {}): this
}

declare class dom$DomQuery mixins dom$DomQuery {
constructor(selector?: string, context?: Document): this
}

declare interface dom$EventUtils {
bind(target: {}, names: string, callback: () => void, scope: {}): () => void,
clean(target: {}): dom$EventUtils,
fire(target: {}, name: string, args?: {}): dom$EventUtils,
unbind(target: {}, names?: string, callback?: () => void): dom$EventUtils
} 

declare interface dom$RangeUtils {
compareRanges(rng1: Range, rng2: Range): boolean,
getCaretRangeFromPoint(clientX: number, clientY: number, doc: Document): Range
} 

declare interface dom$ScriptLoader {
add(url: string, success?: () => void, scope?: {}, failure?: () => void): void,
isDone(url: string): boolean,
load(url: string, callback1?: () => void, callback2?: () => void): void,
loadQueue(success?: () => void, failure?: () => void, scope?: {}): void,
loadScripts(
scripts: string[],
callback1?: () => void,
scope?: {},
callback2?: () => void): void,
markDone(url: string): void
} 

declare class dom$Selection mixins dom$Selection {
constructor(dom: dom$DOMUtils, win: Window, editor: Editor, serializer: html$Serializer): this
}

declare class dom$Serializer mixins dom$Serializer {
constructor(settings: {}, editor?: Editor): this
}

declare interface dom$TreeWalker {
current(): html$html$Node,
next(): html$html$Node,
prev(): html$html$Node
} 
	declare export class TreeWalker mixins dom$TreeWalker {
constructor(startNode: html$html$Node, rootNode: html$html$Node): this
}
	declare interface geom$Rect {
clamp(rect: geom$Rect, clampRect: geom$Rect, fixedSize: boolean): geom$Rect,
create(x: number, y: number, w: number, h: number): geom$Rect,
findBestRelativePosition(
rect: geom$Rect,
targetRect: geom$Rect,
constrainRect: geom$Rect,
rels: any[]): void,
fromClientRect(clientRect: ClientRect): geom$Rect,
inflate(rect: geom$Rect, w: number, h: number): geom$Rect,
intersect(rect: geom$Rect, cropRect: geom$Rect): geom$Rect,
relativePosition(rect: geom$Rect, targetRect: geom$Rect, rel: string): void
} 
	declare class html$DomParser mixins html$DomParser {
constructor(settings: {}, schema: html$Schema): this
}

declare interface html$Entities {
decode(text: string): string,
encodeAllRaw(text: string): string,
encodeNamed(text: string, attr?: boolean, entities?: {}): string,
encodeNumeric(text: string, attr?: boolean): string,
encodeRaw(text: string, attr?: boolean): string,
getEncodeFunc(name: string, entities?: string): () => void
} 

declare class html$Node mixins html$Node {
constructor(name: string, type: number): this
}

declare class html$SaxParser mixins html$SaxParser {
constructor(settings: {}, schema: html$Schema): this
}

declare class html$Schema mixins html$Schema {
constructor(settings: {}): this
}

declare class html$Serializer mixins html$Serializer {
constructor(settings: {}, schema: html$Schema): this
}

declare interface html$Styles {
parse(css: string): {},
serialize(styles: {}, elementName: string): string,
toHex(color: string): string
} 

declare interface html$Writer {
cdata(text: string): void,
doctype(text: string): void,
end(name: string): void,
getContent(): string,
pi(name: string, text: string): void,
reset(): void,
start(name: string, attrs?: any[], empty?: boolean): void,
text(text: string, raw: boolean): void
} 
	declare export class Writer mixins html$Writer {
constructor(settings: {}): this
}
	declare class util$Color mixins util$Color {
constructor(value: string | {}): this
}

declare interface util$Delay {
clearInterval(interval: number): void,
clearTimeout(timeout: number): void,
debounce(callback: () => void, time: number): () => void,
requestAnimationFrame(callback: () => void, element?: HTMLElement): void,
setEditorInterval(callback: () => void, time: number): number,
setEditorTimeout(editor: Editor, callback: () => void, time: number): number,
setInterval(callback: () => void, time: number): number,
setTimeout(callback: () => void, time: number): number
} 

declare interface util$EventDispatcher {
fire(name: string, args?: {}): {},
has(name: string): boolean,
isNative(name: string): boolean,
off(name: string, callback?: () => void): {},
on(name: string, callback: () => void, first?: boolean): {},
once(name: string, callback: () => void, first: boolean): {}
} 

declare interface util$i18n {
rtl: boolean,
add(code: string, items: Array<{}>): void,
getCode(): string,
setCode(newCode: string): void,
translate(text: string): string
} 

declare interface util$JSON {
parse(s: string): {},
serialize(obj: {}, quote?: string): string
} 

declare interface util$JSONRequest {
send(args: {}): void,
sendRPC(o: {}): void
} 

declare interface util$LocalStorage {
length: number,
clear(): void,
getItem(key: string): string,
key(index: number): string,
removeItem(key: string): void,
setItem(key: string, value: string): void
} 

declare class util$Observable  {
fire(name: string, args?: {}, bubble?: boolean): {};
hasEventListeners(name: string): boolean;
off(name?: string, callback?: () => void): {};
on(name: string, callback: (event: any) => void, first?: boolean): {};
once(name: string, callback: (event: any) => void): {}
}

declare interface util$Tools {
create(s: string, p: {}, root?: {}): void,
createNS(n: string, o?: {}): {},
each(o: {}, cb: () => void, s?: {}): void,
explode(s: string, d: string): void,
grep<T>(a: T[], f: () => void): T[],
inArray<T>(item: T, arr: T[]): number,
is(obj: {}, type: string): boolean,
isArray(obj: {}): boolean,
makeMap<T>(items: T[], delim?: string, map?: {}): {},
map<T, S>(array: T[], callback: (c: T) => S): S[],
resolve(n: string, o?: {}): {},
toArray<T>(obj: {}): T[],
trim(s: string): string,
walk(o: {}, f: () => void, n?: string, s?: string): void
} 

declare class util$URI mixins util$URI {
constructor(url: string, settings?: {}): this
}

declare interface util$XHR {
fire(name: string, args?: {}, bubble?: boolean): {},
hasEventListeners(name: string): boolean,
off(name?: string, callback?: () => void): {},
on(name: string, callback: () => void, first?: boolean): {},
once(name: string, callback: () => void): {},
send(settings: {}): void
} 
    }
