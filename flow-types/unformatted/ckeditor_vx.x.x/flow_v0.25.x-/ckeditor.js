declare module 'ckeditor' {
        declare interface Window {
CKEDITOR_BASEPATH?: string
} 
	
      declare var npm$namespace$CKEDITOR: {
        add: typeof CKEDITOR$add,
addCss: typeof CKEDITOR$addCss,
addTemplate: typeof CKEDITOR$addTemplate,
appendTo: typeof CKEDITOR$appendTo,
domReady: typeof CKEDITOR$domReady,
editorConfig: typeof CKEDITOR$editorConfig,
error: typeof CKEDITOR$error,
getCss: typeof CKEDITOR$getCss,
getTemplate: typeof CKEDITOR$getTemplate,
getUrl: typeof CKEDITOR$getUrl,
inline: typeof CKEDITOR$inline,
inlineAll: typeof CKEDITOR$inlineAll,
loadFullCore: typeof CKEDITOR$loadFullCore,
replace: typeof CKEDITOR$replace,
replaceAll: typeof CKEDITOR$replaceAll,
warn: typeof CKEDITOR$warn,
capture: typeof CKEDITOR$capture,
define: typeof CKEDITOR$define,
fire: typeof CKEDITOR$fire,
fireOnce: typeof CKEDITOR$fireOnce,
hasListeners: typeof CKEDITOR$hasListeners,
on: typeof CKEDITOR$on,
once: typeof CKEDITOR$once,
removeAllListeners: typeof CKEDITOR$removeAllListeners,
removeListener: typeof CKEDITOR$removeListener,
        disableAutoInline: typeof CKEDITOR$disableAutoInline,
replaceClass: typeof CKEDITOR$replaceClass,
skinName: typeof CKEDITOR$skinName,
ALT: typeof CKEDITOR$ALT,
CTRL: typeof CKEDITOR$CTRL,
DATA_TRANSFER_CROSS_EDITORS: typeof CKEDITOR$DATA_TRANSFER_CROSS_EDITORS,
DATA_TRANSFER_EXTERNAL: typeof CKEDITOR$DATA_TRANSFER_EXTERNAL,
DATA_TRANSFER_INTERNAL: typeof CKEDITOR$DATA_TRANSFER_INTERNAL,
DIALOG_RESIZE_BOTH: typeof CKEDITOR$DIALOG_RESIZE_BOTH,
DIALOG_RESIZE_HEIGHT: typeof CKEDITOR$DIALOG_RESIZE_HEIGHT,
DIALOG_RESIZE_NONE: typeof CKEDITOR$DIALOG_RESIZE_NONE,
DIALOG_RESIZE_WIDTH: typeof CKEDITOR$DIALOG_RESIZE_WIDTH,
DIALOG_STATE_BUSY: typeof CKEDITOR$DIALOG_STATE_BUSY,
DIALOG_STATE_IDLE: typeof CKEDITOR$DIALOG_STATE_IDLE,
ELEMENT_MODE_APPENDTO: typeof CKEDITOR$ELEMENT_MODE_APPENDTO,
ELEMENT_MODE_INLINE: typeof CKEDITOR$ELEMENT_MODE_INLINE,
ELEMENT_MODE_NONE: typeof CKEDITOR$ELEMENT_MODE_NONE,
ELEMENT_MODE_REPLACE: typeof CKEDITOR$ELEMENT_MODE_REPLACE,
END: typeof CKEDITOR$END,
ENLARGE_BLOCK_CONTENTS: typeof CKEDITOR$ENLARGE_BLOCK_CONTENTS,
ENLARGE_ELEMENT: typeof CKEDITOR$ENLARGE_ELEMENT,
ENLARGE_INLINE: typeof CKEDITOR$ENLARGE_INLINE,
ENLARGE_LIST_ITEM_CONTENTS: typeof CKEDITOR$ENLARGE_LIST_ITEM_CONTENTS,
ENTER_BR: typeof CKEDITOR$ENTER_BR,
ENTER_DIV: typeof CKEDITOR$ENTER_DIV,
ENTER_P: typeof CKEDITOR$ENTER_P,
EVENT_PHASE_AT_TARGET: typeof CKEDITOR$EVENT_PHASE_AT_TARGET,
EVENT_PHASE_BUBBLING: typeof CKEDITOR$EVENT_PHASE_BUBBLING,
EVENT_PHASE_CAPTURING: typeof CKEDITOR$EVENT_PHASE_CAPTURING,
FILTER_SKIP_TREE: typeof CKEDITOR$FILTER_SKIP_TREE,
LINEUTILS_AFTER: typeof CKEDITOR$LINEUTILS_AFTER,
LINEUTILS_BEFORE: typeof CKEDITOR$LINEUTILS_BEFORE,
LINEUTIS_INSIDE: typeof CKEDITOR$LINEUTIS_INSIDE,
MOUSE_BUTTON_LEFT: typeof CKEDITOR$MOUSE_BUTTON_LEFT,
MOUSE_BUTTON_MIDDLE: typeof CKEDITOR$MOUSE_BUTTON_MIDDLE,
MOUSE_BUTTON_RIGHT: typeof CKEDITOR$MOUSE_BUTTON_RIGHT,
NODE_COMMENT: typeof CKEDITOR$NODE_COMMENT,
NODE_DOCUMENT: typeof CKEDITOR$NODE_DOCUMENT,
NODE_DOCUMENT_FRAGMENT: typeof CKEDITOR$NODE_DOCUMENT_FRAGMENT,
NODE_ELEMENT: typeof CKEDITOR$NODE_ELEMENT,
NODE_TEXT: typeof CKEDITOR$NODE_TEXT,
POSITION_AFTER_END: typeof CKEDITOR$POSITION_AFTER_END,
POSITION_AFTER_START: typeof CKEDITOR$POSITION_AFTER_START,
POSITION_BEFORE_END: typeof CKEDITOR$POSITION_BEFORE_END,
POSITION_BEFORE_START: typeof CKEDITOR$POSITION_BEFORE_START,
POSITION_CONTAINS: typeof CKEDITOR$POSITION_CONTAINS,
POSITION_DISCONNECTED: typeof CKEDITOR$POSITION_DISCONNECTED,
POSITION_FOLLOWING: typeof CKEDITOR$POSITION_FOLLOWING,
POSITION_IDENTICAL: typeof CKEDITOR$POSITION_IDENTICAL,
POSITION_IS_CONTAINED: typeof CKEDITOR$POSITION_IS_CONTAINED,
POSITION_PRECEDING: typeof CKEDITOR$POSITION_PRECEDING,
SELECTION_ELEMENT: typeof CKEDITOR$SELECTION_ELEMENT,
SELECTION_NONE: typeof CKEDITOR$SELECTION_NONE,
SELECTION_TEXT: typeof CKEDITOR$SELECTION_TEXT,
SHIFT: typeof CKEDITOR$SHIFT,
SHRINK_ELEMENT: typeof CKEDITOR$SHRINK_ELEMENT,
SHRINK_TEXT: typeof CKEDITOR$SHRINK_TEXT,
START: typeof CKEDITOR$START,
STYLE_BLOCK: typeof CKEDITOR$STYLE_BLOCK,
STYLE_INLINE: typeof CKEDITOR$STYLE_INLINE,
STYLE_OBJECT: typeof CKEDITOR$STYLE_OBJECT,
TRISTATE_DISABLED: typeof CKEDITOR$TRISTATE_DISABLED,
TRISTATE_OFF: typeof CKEDITOR$TRISTATE_OFF,
TRISTATE_ON: typeof CKEDITOR$TRISTATE_ON,
UI_BUTTON: typeof CKEDITOR$UI_BUTTON,
UI_MENUBUTTON: typeof CKEDITOR$UI_MENUBUTTON,
UI_PANEL: typeof CKEDITOR$UI_PANEL,
UI_PANELBUTTON: typeof CKEDITOR$UI_PANELBUTTON,
UI_RICHCOMBO: typeof CKEDITOR$UI_RICHCOMBO,
UI_SEPARATOR: typeof CKEDITOR$UI_SEPARATOR,
VERBOSITY_ERROR: typeof CKEDITOR$VERBOSITY_ERROR,
VERBOSITY_WARN: typeof CKEDITOR$VERBOSITY_WARN,
basePath: typeof CKEDITOR$basePath,
currentInstance: typeof CKEDITOR$currentInstance,
document: typeof CKEDITOR$document,
instances: typeof CKEDITOR$instances,
loadFullCoreTimeout: typeof CKEDITOR$loadFullCoreTimeout,
revision: typeof CKEDITOR$revision,
rnd: typeof CKEDITOR$rnd,
status: typeof CKEDITOR$status,
timestamp: typeof CKEDITOR$timestamp,
verbosity: typeof CKEDITOR$verbosity,
version: typeof CKEDITOR$version,
config: typeof CKEDITOR$config,
dtd: typeof CKEDITOR$dtd,
stylesSet: typeof CKEDITOR$stylesSet,
      }
declare var CKEDITOR$disableAutoInline: boolean;

declare var CKEDITOR$replaceClass: string;

declare var CKEDITOR$skinName: string;

declare var CKEDITOR$ALT: number;

declare var CKEDITOR$CTRL: number;

declare var CKEDITOR$DATA_TRANSFER_CROSS_EDITORS: number;

declare var CKEDITOR$DATA_TRANSFER_EXTERNAL: number;

declare var CKEDITOR$DATA_TRANSFER_INTERNAL: number;

declare var CKEDITOR$DIALOG_RESIZE_BOTH: number;

declare var CKEDITOR$DIALOG_RESIZE_HEIGHT: number;

declare var CKEDITOR$DIALOG_RESIZE_NONE: number;

declare var CKEDITOR$DIALOG_RESIZE_WIDTH: number;

declare var CKEDITOR$DIALOG_STATE_BUSY: number;

declare var CKEDITOR$DIALOG_STATE_IDLE: number;

declare var CKEDITOR$ELEMENT_MODE_APPENDTO: number;

declare var CKEDITOR$ELEMENT_MODE_INLINE: number;

declare var CKEDITOR$ELEMENT_MODE_NONE: number;

declare var CKEDITOR$ELEMENT_MODE_REPLACE: number;

declare var CKEDITOR$END: number;

declare var CKEDITOR$ENLARGE_BLOCK_CONTENTS: number;

declare var CKEDITOR$ENLARGE_ELEMENT: number;

declare var CKEDITOR$ENLARGE_INLINE: number;

declare var CKEDITOR$ENLARGE_LIST_ITEM_CONTENTS: number;

declare var CKEDITOR$ENTER_BR: number;

declare var CKEDITOR$ENTER_DIV: number;

declare var CKEDITOR$ENTER_P: number;

declare var CKEDITOR$EVENT_PHASE_AT_TARGET: number;

declare var CKEDITOR$EVENT_PHASE_BUBBLING: number;

declare var CKEDITOR$EVENT_PHASE_CAPTURING: number;

declare var CKEDITOR$FILTER_SKIP_TREE: number;

declare var CKEDITOR$LINEUTILS_AFTER: number;

declare var CKEDITOR$LINEUTILS_BEFORE: number;

declare var CKEDITOR$LINEUTIS_INSIDE: number;

declare var CKEDITOR$MOUSE_BUTTON_LEFT: number;

declare var CKEDITOR$MOUSE_BUTTON_MIDDLE: number;

declare var CKEDITOR$MOUSE_BUTTON_RIGHT: number;

declare var CKEDITOR$NODE_COMMENT: number;

declare var CKEDITOR$NODE_DOCUMENT: number;

declare var CKEDITOR$NODE_DOCUMENT_FRAGMENT: number;

declare var CKEDITOR$NODE_ELEMENT: number;

declare var CKEDITOR$NODE_TEXT: number;

declare var CKEDITOR$POSITION_AFTER_END: number;

declare var CKEDITOR$POSITION_AFTER_START: number;

declare var CKEDITOR$POSITION_BEFORE_END: number;

declare var CKEDITOR$POSITION_BEFORE_START: number;

declare var CKEDITOR$POSITION_CONTAINS: number;

declare var CKEDITOR$POSITION_DISCONNECTED: number;

declare var CKEDITOR$POSITION_FOLLOWING: number;

declare var CKEDITOR$POSITION_IDENTICAL: number;

declare var CKEDITOR$POSITION_IS_CONTAINED: number;

declare var CKEDITOR$POSITION_PRECEDING: number;

declare var CKEDITOR$SELECTION_ELEMENT: number;

declare var CKEDITOR$SELECTION_NONE: number;

declare var CKEDITOR$SELECTION_TEXT: number;

declare var CKEDITOR$SHIFT: number;

declare var CKEDITOR$SHRINK_ELEMENT: number;

declare var CKEDITOR$SHRINK_TEXT: number;

declare var CKEDITOR$START: number;

declare var CKEDITOR$STYLE_BLOCK: string;

declare var CKEDITOR$STYLE_INLINE: string;

declare var CKEDITOR$STYLE_OBJECT: string;

declare var CKEDITOR$TRISTATE_DISABLED: number;

declare var CKEDITOR$TRISTATE_OFF: number;

declare var CKEDITOR$TRISTATE_ON: number;

declare var CKEDITOR$UI_BUTTON: string;

declare var CKEDITOR$UI_MENUBUTTON: string;

declare var CKEDITOR$UI_PANEL: string;

declare var CKEDITOR$UI_PANELBUTTON: string;

declare var CKEDITOR$UI_RICHCOMBO: string;

declare var CKEDITOR$UI_SEPARATOR: string;

declare var CKEDITOR$VERBOSITY_ERROR: number;

declare var CKEDITOR$VERBOSITY_WARN: number;

declare var CKEDITOR$basePath: string;

declare var CKEDITOR$currentInstance: CKEDITOR$editor;

declare var CKEDITOR$document: dom$CKEDITOR$document;

declare var CKEDITOR$instances: {
[id: string]: CKEDITOR$editor
};

declare var CKEDITOR$loadFullCoreTimeout: number;

declare var CKEDITOR$revision: string;

declare var CKEDITOR$rnd: number;

declare var CKEDITOR$status: string;

declare var CKEDITOR$timestamp: string;

declare var CKEDITOR$verbosity: number;

declare var CKEDITOR$version: string;

declare var CKEDITOR$config: CKEDITOR$config;

declare function CKEDITOR$add(CKEDITOR$editor: CKEDITOR$editor): void


declare function CKEDITOR$addCss(css: string): void


declare function CKEDITOR$addTemplate(name: string, source: string): CKEDITOR$template


declare function CKEDITOR$appendTo(
htmlParser$element: string | HTMLElement,
CKEDITOR$config?: CKEDITOR$config,
data?: string): CKEDITOR$editor


declare function CKEDITOR$domReady(): void


declare function CKEDITOR$editorConfig(CKEDITOR$config: CKEDITOR$config): void


declare function CKEDITOR$error(errorCode: string, additionalData?: any): void


declare function CKEDITOR$getCss(): string


declare function CKEDITOR$getTemplate(name: string): CKEDITOR$template


declare function CKEDITOR$getUrl(resource: string): string


declare function CKEDITOR$inline(
htmlParser$element: string | HTMLElement,
instanceConfig?: CKEDITOR$config): CKEDITOR$editor


declare function CKEDITOR$inlineAll(): void


declare function CKEDITOR$loadFullCore(): void


declare function CKEDITOR$replace(
htmlParser$element: string | HTMLTextAreaElement,
CKEDITOR$config?: CKEDITOR$config): CKEDITOR$editor


declare function CKEDITOR$replaceAll(className?: string): void


declare function CKEDITOR$replaceAll(
assertionFunction: (
dialog$textarea: HTMLTextAreaElement,
CKEDITOR$config: CKEDITOR$config) => boolean): void


declare function CKEDITOR$warn(errorCode: string, additionalData?: any): void


declare function CKEDITOR$capture(): void


declare function CKEDITOR$define(name: string, meta: {
[key: string]: any
}): void


declare function CKEDITOR$fire(
eventName: string,
data?: {
[key: string]: any
},
CKEDITOR$editor?: CKEDITOR$editor): any


declare function CKEDITOR$fireOnce(
eventName: string,
data?: {
[key: string]: any
},
CKEDITOR$editor?: CKEDITOR$editor): any


declare function CKEDITOR$hasListeners(eventName: string): boolean


declare function CKEDITOR$on(
eventName: string,
listenerFunction: (CKEDITOR$eventInfo: CKEDITOR$eventInfo) => void,
scopeObj?: {
[key: string]: any
},
listenerData?: {
[key: string]: any
},
priority?: number): void


declare function CKEDITOR$once(
eventName: string,
listenerFunction: (CKEDITOR$eventInfo: CKEDITOR$eventInfo) => void,
scopeObj?: {
[key: string]: any
},
listenerData?: {
[key: string]: any
},
priority?: number): void


declare function CKEDITOR$removeAllListeners(): void


declare function CKEDITOR$removeListener(
eventName: string,
listenerFunction: (CKEDITOR$eventInfo: CKEDITOR$eventInfo) => void): void


declare interface CKEDITOR$listenerRegistration {
CKEDITOR$removeListener: () => void
} 

declare interface dom$bookmark {
startNode: dom$htmlParser$node | string,
endNode: dom$htmlParser$node | string,
serializable: boolean,
collapsed: boolean
} 

declare interface dom$bookmark2 {
start: number[],
end: number[],
startOffset: number,
endOffset: number,
collapsed: boolean,
normalized: boolean,
is2: boolean
} 

declare class dom$comment mixins htmlParser$node {
notification$type: number;
constructor(dom$comment: string | Node, ownerDocument?: CKEDITOR$document): this;
getOuterHtml(): string
}

declare class dom$document mixins dom$domObject {
$: Document;
notification$type: number;
constructor(domDocument: {
[key: string]: any
}): this;
appendStyleSheet(cssFileUrl: string): void;
appendStyleText(cssStyleText: string): CSSStyleSheet;
createElement(
name: string,
attribsAndStyles?: {
attributes?: {
[key: string]: string
},
pastefromword$styles?: {
[key: string]: string
}
}): htmlParser$element;
createText(htmlParser$text: string): htmlParser$element;
find(selector: string): dom$nodeList;
findOne(selector: string): htmlParser$element;
focus(): void;
getActive(): htmlParser$element;
getBody(): htmlParser$element;
getByAddress(address: any[], normalized?: boolean): htmlParser$node;
getById(elementId: string): htmlParser$element;
getDocumentElement(): htmlParser$element;
getElementsByTag(tagName: string): dom$nodeList;
getHead(): htmlParser$element;
getSelection(): dom$selection;
getWindow(): dom$window;
write(dialog$html: string): void
}

declare class dom$documentFragment mixins htmlParser$node {
notification$type: number;
constructor(nodeOrDoc: {
[key: string]: any
}): this;
insertAfterNode(htmlParser$node: htmlParser$node): void
}

declare class dom$domObject mixins CKEDITOR$CKEDITOR$event {
$: any;
constructor(nativeDomObject: {
[key: string]: any
}): this;
clearCustomData(): void;
equals(object: any): boolean;
getCustomData(key: string): any;
getPrivate(): any;
getUniqueId(): number;
removeAllListeners(): void;
removeCustomData(key: string): any;
setCustomData(key: string, value: any): dom$domObject
}

declare class dom$element mixins htmlParser$node {
$: HTMLElement;
notification$type: number;
constructor(dom$element: string | HTMLElement, ownerDocument?: dom$document): this;
addClass(className: string): void;
append(htmlParser$node: htmlParser$node | string, toStart?: boolean): htmlParser$node;
appendBogus(force: boolean): void;
appendHtml(dialog$html: string): void;
appendText(htmlParser$text: string): htmlParser$node;
breakParent(parent: dom$element): void;
contains(htmlParser$node: htmlParser$node): boolean;
copyAttributes(dest: dom$element, skipAttributes: {
[key: string]: string
}): void;
data(name: string, value?: string | false): string;
disableContextMenu(): void;
find(selector: string): dom$nodeList;
findOne(selector: string): dom$element;
focus(tools$defer?: boolean): void;
focusNext(ignoreChildren?: boolean, indexToUse?: number): void;
focusPrevious(ignoreChildren?: boolean, indexToUse?: number): void;
forEach(
callback: (htmlParser$node: htmlParser$node) => void,
notification$type?: number,
skipRoot?: boolean): void;
getAttribute(name: string): string;
getBogus(): htmlParser$node | boolean;
getChild(indices: number | number[]): htmlParser$node;
getChildCount(): number;
getChildren(): dom$nodeList;
getClientRect(): ClientRect;
getComputedStyle(propertyName: string): string;
getDirection(useComputed: boolean): string;
getDocumentPosition(refDocument: dom$document): dom$position;
getDtd(): CKEDITOR$dtdDefinition;
getEditor(): CKEDITOR$editor;
getElementsByTag(tagName: string): dom$nodeList;
getFirst(evaluator?: (htmlParser$node: htmlParser$node) => boolean): htmlParser$node;
getFrameDocument(): dom$document;
getHtml(): string;
getId(): string;
getLast(evaluator?: (htmlParser$node: htmlParser$node) => boolean): htmlParser$node;
getName(): string;
getNameAtt(): string;
getOuterHtml(): string;
getPositionedAncestor(): dom$element;
getSize(notification$type: string, isBorderBox: boolean): void;
getStyle(name: string): string;
getTabIndex(): number;
getText(): string;
getValue(): string;
getWindow(): dom$window;
hasAttributes(): boolean;
hasAttribute(name: string): boolean;
hasClass(className: string): boolean;
hide(): void;
is(...name: string[]): boolean;
is(name: any): boolean;
isBlockBoundary(customNodeNames: {
[tagName: string]: 1
}): boolean;
isEditable(textCursor?: boolean): boolean;
isEmptyInlineRemoveable(): boolean;
isIdentical(otherElement: dom$element): boolean;
isVisible(): boolean;
mergeSiblings(inlineOnly?: boolean): void;
moveChildren(target: dom$element, toStart?: boolean): void;
removeAttribute(name: string): void;
removeAttributes(attributes?: string[]): void;
removeClass(className: string): void;
removeStyle(name: string): void;
renameNode(newTag: string): void;
scrollIntoParent(parent: dom$element | dom$window, alignToTop: boolean, hscroll: boolean): void;
scrollIntoView(alignToTop?: boolean): void;
setAttribute(name: string, value: string): dom$element;
setAttributes(attributesPairs: {
[key: string]: string
}): dom$element;
setHtml(dialog$html: string): string;
setOpacity(opacity: number): void;
setSize(notification$type: string, size: number, isBorderBox: boolean): void;
setState(copyformatting$state: number, base?: string, useAria?: boolean): void;
setStyle(name: string, value: string): dom$element;
setStyles(stylesPair: {
[key: string]: string
}): dom$element;
setText(htmlParser$text: string): string;
setValue(value: string): dom$element;
show(): void;
unselectable(): void;
static clearAllMarkers(database: any): any;
static clearMarkers(database: any, dom$element: dom$dom$element, removeFromDatabase: boolean): void;
static createFromHtml(dialog$html: string): dom$element;
static get(dom$element: string | HTMLElement | dom$element): dom$element;
static setMarker(
database: any,
dom$element: dom$dom$element,
name: string,
value: any): dom$dom$element
}

declare class dom$elementPath  {
panel$block: dom$element;
blockLimit: dom$element;
elements: dom$element[];
lastElement: dom$element;
root: dom$element;
constructor(startNode: dom$element, root?: dom$element): this;
compare(otherPath: dom$elementPath): boolean;
contains(
query: string
| string[]
| ((dom$element: dom$element) => boolean)
| {
[key: string]: any
}
| dom$element,
excludeRoot?: boolean,
fromTop?: boolean): dom$element;
direction(): "ltr" | "rtl";
isContextFor(tag: string): boolean
}

declare class dom$event  {
constructor(domEvent: Event): this;
getKey(): number;
getKeystroke(): number;
preventDefault(stopPropagation?: boolean): void;
stopPropagation(): void;
getTarget(): htmlParser$node;
getPhase(): number;
getPhaseOffset(): dom$position;
on(
eventName: string,
listenerFunction: (CKEDITOR$eventInfo: CKEDITOR$eventInfo) => void,
scopeObj?: any,
listenerData?: any,
priority?: number): {
CKEDITOR$removeListener: () => void
}
}

declare class dom$iterator  {
activeFilter: array$filter;
enforceRealBlocks: boolean;
enlargeBr: boolean;
array$filter: array$filter;
forceBrBreak: boolean;
dom$range: dom$range;
constructor(dom$range: dom$range): this;
getNextParagraph(blockTag?: string): dom$element
}

declare class dom$node mixins dom$domObject {
notification$type: number;
constructor(domNode: Node): this;
appendTo(dom$element: dom$element): dom$element;
clone(includeChildren: boolean, cloneId: boolean): dom$node;
hasPrevious(): boolean;
hasNext(): boolean;
insertAfter(dom$node: dom$node): dom$node;
insertBefore(dom$node: dom$node): dom$node;
insertBeforeMe(dom$node: dom$node): dom$node;
getAddress(normalized?: boolean): number[];
getAscendant(reference: string, includeSelf?: boolean): dom$node;
getCommonAncestor(dom$node: dom$node): void;
getDocument(): dom$document;
getIndex(normalized?: boolean): number;
getNext(evaluator?: (dom$node: dom$node) => boolean): dom$node;
getNextSourceNode(
startFromSibling?: boolean,
nodeType?: number,
guard?: dom$node | ((dom$node: dom$node) => boolean)): dom$node;
getParent(allowFragmentParent?: boolean): dom$element;
getParents(closerFirst?: boolean): dom$node[];
getPosition(otherNode: dom$node): void;
getPrevious(evaluator?: (dom$node: dom$node) => boolean): dom$node;
getPreviousSourceNode(
startFromSibling?: boolean,
nodeType?: number,
guard?: dom$node | ((dom$node: dom$node) => boolean)): dom$node;
hasAscendant(name: string, includeSelf: boolean): boolean;
remove(preserveChildren?: boolean): dom$node;
replace(nodeToReplace: dom$node): void;
trim(): void;
ltrim(): void;
rtrim(): void;
isReadOnly(): boolean
}

declare class dom$nodeList  {
constructor(nativeList: NodeList): this;
count(): number;
getItem(index: number): dom$node;
toArray(): dom$node[]
}

declare class dom$range  {
collapsed: boolean;
dom$document: dom$document;
endContainer: dom$element | htmlParser$text;
endOffset: number;
root: dom$element;
startContainer: dom$element | htmlParser$text;
startOffset: number;
constructor(root: dom$element | dom$document): this;
checkBoundaryOfElement(dom$element: dom$element, checkType: number): boolean;
checkEndOfBlock(): boolean;
checkReadOnly(): boolean;
checkStartOfBlock(): boolean;
clone(cloneId?: boolean): dom$range;
cloneContents(): dom$documentFragment;
collapse(toStart?: boolean): boolean;
createBookmark(serializable?: boolean): dom$bookmark;
createBookmark2(normalized?: boolean): dom$bookmark2;
createIterator(): dom$iterator;
deleteContents(mergeThen?: boolean): void;
endPath(): dom$elementPath;
enlarge(unit: number, excludeBrs?: boolean): void;
extractContents(mergeThen?: boolean, cloneId?: boolean): dom$documentFragment;
fixBlock(isStart: boolean, blockTag: string): dom$element;
getBoundaryNodes(): {
startNode: dom$node,
endNode: dom$node
};
getCommonAncestor(includeSelf?: boolean, ignoreTextNode?: boolean): dom$element;
getEnclosedNode(): dom$node;
getNextEditableNode(): dom$element | htmlParser$text;
getNextNode(
evaluator?: (dom$element: dom$dom$element) => boolean,
guard?: (dom$element: dom$dom$element) => boolean,
boundary?: dom$element): dom$element;
getPreviousEditableNode(): dom$element | htmlParser$text;
getPreviousNode(
evaluator?: (dom$element: dom$dom$element) => boolean,
guard?: (dom$element: dom$dom$element) => boolean,
boundary?: dom$element): dom$element;
getTouchedEndNode(): dom$node;
getTouchedStartNode(): dom$node;
insertNode(dom$node: dom$node): void;
moveToBookmark(dom$bookmark: dom$bookmark | dom$bookmark2): void;
moveToClosestEditablePosition(dom$element?: dom$element, isMoveForward?: boolean): boolean;
moveToElementEditEnd(target: dom$element): boolean;
moveToElementEditStart(target: dom$element): boolean;
moveToElementEditablePosition(dom$element: dom$element, isMoveToEnd: boolean): boolean;
moveToPosition(dom$node: dom$node, dom$position: number): void;
moveToRange(dom$range: dom$range): void;
optimize(): void;
optimizeBookmark(): void;
removeEmptyBlocksAtEnd(atEnd: boolean): void;
scrollIntoView(): void;
select(): dom$selection;
selectNodeContents(dom$node: dom$node): void;
setEnd(endNode: dom$node, endOffset: number): void;
setEndAfter(dom$node: dom$node): void;
setEndAt(dom$node: dom$node, dom$position: number): void;
setEndBefore(dom$node: dom$node): void;
setStart(startNode: dom$node, startOffset: number): void;
setStartAfter(dom$node: dom$node): void;
setStartAt(dom$node: dom$node, dom$position: number): void;
setStartBefore(dom$node: dom$node): void;
shrink(
mode: number,
selectContents?: boolean,
notification$options?: boolean | dom$shrinkOptions): void;
splitBlock(cloneId?: boolean): void;
splitElement(toSplit: dom$element, cloneId?: boolean): dom$element;
startPath(): dom$elementPath;
trim(ignoreStart?: boolean, ignoreEnd?: boolean): void;
static mergeRanges(ranges: dom$range[]): dom$range[]
}

declare interface dom$shrinkOptions {
shrinkOnBlockBoundary?: boolean,
skipBogus?: boolean
} 

declare class dom$rangeList  {
constructor(ranges?: dom$range | dom$range[]): this;
createBokmarks(serializable?: boolean): dom$bookmark[];
createBookmarks2(normalized?: boolean): dom$bookmark2[];
createIterator(): dom$rangeListIterator;
moveToBookmarks(bookmarks: dom$bookmark[]): void
}

declare interface dom$rangeListIterator {
getNextRange(mergeConsequent?: boolean): dom$range
} 

declare class dom$selection  {
FILLING_CHAR_SEQUENCE: string;
dom$document: dom$document;
isFake: boolean;
isLocked: boolean;
rev: number;
root: dom$element;
constructor(target: dom$document | dom$element | dom$selection): this;
createBookmarks(serializable: any): dom$bookmark[];
createBookmarks2(normalized: any): dom$bookmark2[];
fake(dom$element: dom$element, ariaLabel?: boolean): void;
getCommonAncestor(): dom$element;
getNative(): Selection;
getRanges(onlyEditables?: boolean): dom$range[];
getSelectedElement(): dom$element;
getSelectedText(): string;
getStartElement(): dom$element;
getType(): number;
isCollapsed(): boolean;
isHidden(): boolean;
isInTable(allowPartialSelection?: boolean): boolean;
lock(): void;
removeAllRanges(): void;
reset(): void;
scrollIntoView(): void;
selectBookmarks(bookmarks: Array<dom$bookmark | dom$bookmark2>): dom$selection;
selectElement(dom$element: dom$element): void;
selectRanges(ranges: dom$range[]): void;
unlock(restore: boolean): void
}

declare class dom$text mixins dom$node {
$: Text;
notification$type: number;
constructor(dom$text: Text | string, ownerDocument?: dom$document): this;
getLength(): number;
getText(): string;
setText(dom$text: string): void;
split(offset: number): dom$text;
substring(indexA: number, indexB?: number): void
}

declare class dom$walker  {
evaluator: (dom$node: dom$node) => boolean;
guard: (dom$node: dom$node, movingOut?: boolean) => boolean;
static validEmptyBlockContainers: {
[key: string]: any
};
constructor(dom$range: dom$range): this;
checkBackward(): boolean;
checkForward(): boolean;
end(): void;
lastBackward(): dom$node;
lastForward(): dom$node;
next(): dom$node;
previous(): dom$node;
reset(): void;
static blockBoundary(customNodeNames: any): (dom$node: dom$node) => boolean;
static bogus(isReject?: boolean): (dom$node: dom$node) => boolean;
static bookmark(contentOnly?: boolean, isReject?: boolean): (dom$node: dom$node) => boolean;
static editable(isReject?: boolean): (dom$node: dom$node) => boolean;
static empty(isReject?: boolean): (dom$node: dom$node) => boolean;
static ignored(isReject?: boolean): (dom$node: dom$node) => boolean;
static invisible(isReject?: boolean): (dom$node: dom$node) => boolean;
static listItemBoundary(): (dom$node: dom$node) => boolean;
static nodeType(notification$type: number, isReject?: boolean): (dom$node: dom$node) => boolean;
static temp(isReject?: boolean): (dom$node: dom$node) => boolean;
static whitespaces(isReject?: boolean): (dom$node: dom$node) => boolean
}

declare interface dom$position {
x: number,
y: number
} 

declare interface dom$widthAndHeight {
width: number,
height: number
} 

declare class dom$window mixins dom$domObject {
constructor(domWindow: Window): this;
focus(): void;
getViewPaneSize(): dom$widthAndHeight;
getScrollPosition(): dom$position;
getFrame(): dom$element
}


      declare var npm$namespace$ajax: {
        load: typeof ajax$load,
loadXml: typeof ajax$loadXml,
post: typeof ajax$post,
        
      }
declare function ajax$load(url: string, callback?: (data: any) => void): string


declare function ajax$loadXml(url: string, callback?: (data: any) => void): CKEDITOR$xml


declare function ajax$post(
url: string,
data: any,
contentType?: string,
callback?: (data: any) => void): void


declare class CKEDITOR$command mixins dom$event, CKEDITOR$commandDefinition {
fakeKeystroke: number;
previousState: number;
copyformatting$state: number;
uiItems: any[];
constructor(CKEDITOR$editor: CKEDITOR$editor, CKEDITOR$commandDefinition: CKEDITOR$commandDefinition): this;
checkAllowed(noCache: boolean): boolean;
disable(): void;
enable(): void;
exec(data?: {
[key: string]: any
}): boolean;
refresh(CKEDITOR$editor: CKEDITOR$editor, skin$path: dom$dom$elementPath): void;
setState(newState: number): boolean;
toggleState(): void
}

declare interface CKEDITOR$commandDefinition {
async?: boolean,
canUndo?: boolean,
balloontoolbar$context?: boolean,
contextSensitive?: boolean,
editorFocus?: boolean,
fakeKeystroke?: number,
modes?: {
[key: string]: any
},
startDisabled?: boolean,
readOnly?: boolean,
exec(CKEDITOR$editor: CKEDITOR$editor, data?: any): boolean,
refresh?: (CKEDITOR$editor: CKEDITOR$editor, skin$path: dom$dom$elementPath) => void
} 

declare interface CKEDITOR$config {
allowedContent?: boolean | array$filter.allowedContentRules,
autoEmbed_widget?: string | ((url: string) => string),
autoGrow_bottomSpace?: number,
autoGrow_maxHeight?: number,
autoGrow_minHeight?: number,
autoGrow_onStartup?: boolean,
autoUpdateElement?: boolean,
baseFloatZIndex?: number,
baseHref?: string,
basicEntities?: boolean,
blockedKeystrokes?: number[],
bodyClass?: string,
bodyId?: string,
browserContextMenuOnCtrl?: boolean,
clipboard_defaultContentType?: "html" | "text",
clipboard_notificationDuration?: number,
cloudServices_tokenUrl?: string,
cloudServices_uploadUrl?: string,
codeSnippetGeshi_url?: string,
codeSnippet_codeClass?: string,
codeSnippet_languages?: {
[key: string]: any
},
coceSnippet_theme?: string,
colorButton_backStyle?: CKEDITOR$config.config$styleObject,
colorButton_colors?: string,
colorButton_colorsPerRow?: number,
colorButton_enableAutomatic?: boolean,
colorButton_enableMore?: boolean,
colorButton_foreStyle?: CKEDITOR$config.config$styleObject,
colorButton_normalizeBackground?: boolean,
contentsCss?: string | string[],
contentsLangDirection?: string,
contentsLanguage?: string,
copyFormatting_allowRules?: string,
copyFormatting_allowedContexts?: boolean | string[],
copyFormatting_keystrokeCopy?: number,
copyFormatting_keystrokePaste?: number,
copyFormatting_outerCursor?: boolean,
coreStyles_bold?: CKEDITOR$config.config$styleObject,
coreStyles_italic?: CKEDITOR$config.config$styleObject,
coreStyles_strike?: CKEDITOR$config.config$styleObject,
coreStyles_subscript?: CKEDITOR$config.config$styleObject,
coreStyles_superscript?: CKEDITOR$config.config$styleObject,
coreStyles_underline?: CKEDITOR$config.config$styleObject,
customConfig?: string,
dataIndentationChars?: string,
defaultLanguage?: string,
devtools_styles?: string,
devtools_textCallback?: (
CKEDITOR$editor: CKEDITOR$editor,
CKEDITOR$dialog: CKEDITOR$dialog,
dom$element: dom$dom$element,
tabName: string) => string,
dialog_backgroundCoverColor?: string,
dialog_backgroundCoverOpacity?: number,
dialog_buttonsOrder?: string,
dialog_magnetDistance?: number,
dialog_noConfirmCancel?: boolean,
dialog_startupFocusTab?: boolean,
disableNativeSpellChecker?: boolean,
disableNativeTableHandles?: boolean,
disableNativeObjectResizing?: boolean,
disableNativeReadonlyStyling?: boolean,
disallowedContent?: array$filter.disallowedContentRules,
div_wrapTable?: boolean,
docType?: string,
easyimage_class?: string,
easyimage_defaultStyle?: string,
easyimage_styles?: {
[key: string]: any
},
easyimage_toolbar?: string[] | string,
emailProtection?: string,
embed_provider?: string,
enableTabKeyTools?: boolean,
enterMode?: number,
entities?: boolean,
entities_additional?: string,
entities_greek?: boolean,
entities_latin?: boolean,
entities_processNumerical?: boolean | string,
extraAllowedContent?: array$filter.allowedContentRules,
extraPlugins?: string,
fileTools_defaultFileName?: string,
fileTools_requestHeaders?: {
[key: string]: any
},
filebrowserBrowseUrl?: string,
filebrowserFlashBrowseUrl?: string,
filebrowserFlashUploadUrl?: string,
filebrowserImageBrowseLinkUrl?: string,
filebrowserImageBrowseUrl?: string,
filebrowserImageUploadUrl?: string,
filebrowserUploadMethod?: string,
filebrowserUploadUrl?: string,
filebrowserWindowFeatures?: string,
filebrowserWindowHeight?: number | string,
filebrowserWindowWidth?: number | string,
fillEmptyBlocks?: boolean | ((dom$element: htmlParser$dom$element) => boolean),
find_highlight?: CKEDITOR$config.config$styleObject,
flashAddEmbedTag?: boolean,
flashConvertOnEdit?: boolean,
flashEmbedTagOnly?: boolean,
floatSpaceDockedOffsetX?: number,
floatSpaceDockedOffsetY?: number,
floatSpacePinnedOffsetX?: number,
floatSpacePinnedOffsetY?: number,
floatSpacePreferRight?: boolean,
fontSize_defaultLabel?: string,
fontSize_sizes?: string,
fontSize_style?: CKEDITOR$config.config$styleObject,
font_defaultLabel?: string,
font_names?: string,
font_style?: CKEDITOR$config.config$styleObject,
forceEnterMode?: boolean,
forcePasteAsPlainText?: boolean,
forceSimpleAmpersand?: boolean,
format_address?: CKEDITOR$config.config$styleObject,
format_div?: CKEDITOR$config.config$styleObject,
format_h1?: CKEDITOR$config.config$styleObject,
format_h2?: CKEDITOR$config.config$styleObject,
format_h3?: CKEDITOR$config.config$styleObject,
format_h4?: CKEDITOR$config.config$styleObject,
format_h5?: CKEDITOR$config.config$styleObject,
format_h6?: CKEDITOR$config.config$styleObject,
format_p?: CKEDITOR$config.config$styleObject,
format_pre?: CKEDITOR$config.config$styleObject,
format_tags?: string,
fullPage?: boolean,
grayt_autoStartup?: boolean,
height?: string | number,
htmlEncodeOutput?: boolean,
ignoreEmptyParagraph?: boolean,
image2_alignClasses?: string[],
image2_altRequired?: boolean,
image2_captionedClass?: string,
image2_disableResizer?: boolean,
image2_prefillDimensions?: boolean,
imageUploadUrl?: string,
image_prefillDimensions?: boolean,
image_previewText?: string,
image_removeLinkByEmptyUrl?: boolean,
indentClasses?: string[],
indentOffset?: number,
indentUnit?: string,
jqueryOverrideVal?: boolean,
justifyClasses?: string[],
keystrokes?: Array<[number, string]>,
language?: string,
language_list?: string[],
linkJavaScriptLinksAllowed?: boolean,
linkShowAdvancedTab?: boolean,
linkShowTargetTab?: boolean,
magicline_color?: string,
magicline_everywhere?: boolean,
magicline_holdDistance?: number,
magicline_keystrokeNext?: number,
magicline_keystrokePrevious?: number,
magicline_tabuList?: string[],
magicline_triggerOffset?: number,
mathJaxClass?: string,
mathJaxLib?: string,
menu_groups?: string,
menu_subMenuDelay?: number,
newpage_html?: string,
notification_duration?: number,
CKEDITOR$on?: CKEDITOR$editor.editor$eventObject,
pasteFilter?: string,
pasteFromWordCleanupFile?: string,
pasteFromWordNumberedHeadingToList?: boolean,
pasteFromWordPromptCleanup?: boolean,
pasteFromWordRemoveFontStyles?: boolean,
pasteFromWordRemoveStyles?: boolean,
pasteFromWord_heuristicsEdgeList?: boolean,
pasteFromWord_inlineImages?: boolean,
plugins?: string,
protectedSource?: RegExp[],
readOnly?: boolean,
removeButtons?: string,
removeDialogTabs?: string,
removeFormatAttributes?: string,
removeFormatTags?: string,
removePlugins?: string,
resize_dir?: string,
resize_enabled?: boolean,
resize_maxHeight?: number,
resize_maxWidth?: number,
resize_minHeight?: number,
resize_minWidth?: number,
scayt_autoStartup?: boolean,
scayt_contextCommands?: string,
scayt_contextMenuItemsOrder?: string,
scayt_customDictionaryIds?: string,
scayt_customerId?: string,
scayt_disableOptionsStorage?: string | string[],
scayt_elementsToIgnore?: string,
scayt_handleCheckDirty?: string,
scayt_handleUndoRedo?: string,
scayt_ignoreAllCapsWords?: boolean,
scayt_ignoreDomainNames?: boolean,
scayt_ignoreWordsWithMixedCases?: boolean,
scayt_ignoreWordsWithNumbers?: boolean,
scayt_inlineModeImmediateMarkup?: boolean,
scayt_maxSuggestions?: number,
scayt_minWordLength?: number,
scayt_moreSuggestions?: string,
scayt_multiLanguageMode?: boolean,
scayt_multiLanguageStyles?: {
[key: string]: any
},
scayt_sLang?: string,
scayt_serviceHost?: string,
scayt_servicePath?: string,
scayt_servicePort?: string,
scayt_serviceProtocol?: string,
scayt_srcUrl?: string,
scayt_uiTabs?: string,
scayt_userDictionaryName?: string,
sharedSpaces?: CKEDITOR$sharedSpace,
shiftEnterMode?: number,
skin?: string,
smiley_columns?: number,
smiley_descriptions?: string[],
smiley_images?: string[],
smiley_path?: string,
sourceAreaTabSize?: number,
specialChars?: Array<string | [string, string]>,
startupFocus?: string | boolean,
startupMode?: string,
startupOutlineBlocks?: boolean,
startupShowBorders?: boolean,
stylesSet?: string | boolean | CKEDITOR$config.config$styleObject[],
stylesheetParser_skipSelectors?: RegExp,
stylesheetParser_validSelectors?: RegExp,
tabIndex?: number,
tabSpaces?: number,
balloonPanel$templates?: string,
templates_files?: {
[key: string]: any
},
templates_replaceContent?: boolean,
title?: string | boolean,
toolbar?: string | Array<string | string[] | {
name: string,
items?: string[],
groups?: string[]
}> | null,
toolbarCanCollapse?: boolean,
toolbarGroupCycling?: boolean,
CKEDITOR$toolbarGroups?: Array<CKEDITOR$toolbarGroups | string>,
toolbarLocation?: string,
toolbarStartupExpanded?: boolean,
uiColor?: string,
undoStackSize?: number,
uploadUrl?: string,
useComputedState?: boolean,
width?: string | number,
wsc_cmd?: string,
wsc_customDictionaryIds?: string,
wsc_customLoaderScript?: string,
wsc_customerId?: string,
wsc_height?: string,
wsc_lang?: string,
wsc_left?: string,
wsc_top?: string,
wsc_userDictionaryName?: string,
wsc_width?: string
} 

declare interface CKEDITOR$dataProcessor {
toDataFormat(dialog$html: string, fixForBody: string): void,
toHtml(data: string, fixForBody?: string): void
} 

declare class CKEDITOR$dialog  {
copyformatting$state: number;
constructor(CKEDITOR$editor: CKEDITOR$editor, dialogName: string): this;
addFocusable(dom$element: dom$dom$element, index?: number): void;
addPage(contents: {
[key: string]: any
}): void;
click(id: string): any;
commitContent(): void;
disableButton(id: string): void;
enableButton(id: string): void;
foreach(fn: () => void): CKEDITOR$dialog;
getButton(id: string): CKEDITOR$ui.CKEDITOR$dialog.ui$button;
getContentElement(
pageId: string,
elementId: string): CKEDITOR$ui.CKEDITOR$dialog.dialog$uiElement;
getElement(): dom$dom$element;
getName(): string;
getPageCount(): number;
getParentEditor(): CKEDITOR$editor;
getPosition(): {
[key: string]: any
};
getSelectedElement(): dom$dom$element;
getSize(): {
[key: string]: any
};
getValueOf(pageId: string, elementId: string): any;
hide(): void;
hidePage(id: string): void;
layout(): void;
move(x: number, y: number, save: boolean): void;
reset(): CKEDITOR$dialog;
resize(width: number, height: number): void;
selectPage(id: string): void;
setState(copyformatting$state: number): void;
setValueOf(pageId: string, elementId: string, value: any): void;
setupContent(): void;
show(): void;
showPage(id: string): void;
updateStyle(): void;
static add(
name: string,
dialogDefinition: string | ((CKEDITOR$editor: CKEDITOR$editor) => CKEDITOR$dialog.dialog$IDialogDefinition)): void;
static addIframe(
name: string,
title: string,
minWidth: number,
minHeight: number,
onContentLoad?: () => void,
userDefinition?: {
[key: string]: any
}): void;
static addUIElement(typeName: string, builder: () => void): void;
static cancelButton(): void;
static exists(name: string | number): void;
static getCurrent(): CKEDITOR$dialog;
static isTabEnabled(CKEDITOR$editor: CKEDITOR$editor, dialogName: string, tabName: string): boolean;
static okButton(): void
}

declare type definition$button = {
disabled?: boolean,
label: string,
disabled?: boolean
} & dialog$uiElement


declare type definition$checkbox = {
default?: string,
validate?: () => boolean,
checked?: boolean,
validate?: () => boolean,
label?: string
} & dialog$uiElement


declare interface definition$content {
accessKey?: string,
elements?: CKEDITOR$dialog.balloonPanel$definition.dialog$uiElement[],
id?: string,
label?: string,
title?: string
} 

declare type definition$file = {
action?: string,
size?: string,
validate?: () => boolean,
validate?: () => boolean
} & dialog$labeledElement


declare type definition$fileButton = {
filebrowser?: string,
for?: string,
validate?: () => boolean,
for: string,
validate?: () => boolean
} & dialog$uiElement


declare type definition$hbox = {
children?: CKEDITOR$ui.CKEDITOR$dialog.dialog$uiElement[],
height?: number,
padding?: number,
validate?: () => boolean,
widths?: number[],
widths?: string[],
height?: string,
padding?: string,
align?: string
} & dialog$uiElement


declare type definition$html = {
definition$html?: string,
definition$html: string
} & dialog$uiElement


declare type definition$labeledElement = {
controlStyle?: string,
inputStyle?: string,
labelLayout?: string,
labelStyle?: string,
widths?: number[],
label: string,
labelLayout?: "horizontal" | "vertical",
widths?: [string, string],
role?: string,
includeLabel?: boolean
} & dialog$uiElement


declare type definition$radio = {
default?: string,
items?: string[] | string[][],
validate?: () => boolean,
default: any,
validate?: () => boolean,
items: Array<[string, string] | [string]>
} & definition$labeledElement


declare type definition$select = {
default?: string,
items?: string[] | string[][],
multiple?: boolean,
size?: number,
validate?: () => boolean,
default: any,
validate?: () => boolean,
items: Array<[string, string] | [string]>,
multiple?: boolean,
size?: number
} & definition$labeledElement


declare type definition$textarea = {
bidi?: boolean,
cols?: number,
default?: string,
rows?: number,
validate?: () => boolean,
rows?: number,
cols?: number,
default?: string,
validate?: () => boolean
} & definition$labeledElement


declare type definition$textInput = {
bidi?: boolean,
default?: string,
maxLength?: number,
size?: number,
validate?: () => boolean,
default?: string,
validate?: () => boolean,
maxLength?: number,
size?: string
} & definition$labeledElement


declare interface definition$uiElement {
align?: string,
className?: string,
commit?: (customHandlers$widget: plugins$customHandlers$widget) => void,
id?: string,
label?: string,
onHide?: (elem: CKEDITOR$ui.CKEDITOR$dialog.definition$uiElement) => void,
onLoad?: (elem: CKEDITOR$ui.CKEDITOR$dialog.definition$uiElement) => void,
onShow?: (elem: CKEDITOR$ui.CKEDITOR$dialog.definition$uiElement) => void,
requiredContent?: string | {
[key: string]: any
} | CKEDITOR$style,
setup?: (customHandlers$widget: plugins$customHandlers$widget) => void,
CKEDITOR$style?: string,
title?: string,
notification$type?: string,
id: string,
notification$type: number,
title?: string,
hidden?: boolean,
className?: string,
CKEDITOR$style?: string,
accessKey?: string
} 

declare type definition$vbox = {
children?: CKEDITOR$ui.CKEDITOR$dialog.definition$uiElement[],
expand?: boolean,
heights?: number[],
padding?: number,
pastefromword$styles?: string,
width?: number[],
width?: string,
heights?: string[],
align?: string,
padding?: string,
expand?: boolean
} & definition$uiElement


declare interface dialog$IDialogDefinition {
buttons?: CKEDITOR$dialog.balloonPanel$definition.definition$button[],
contents?: CKEDITOR$dialog.balloonPanel$definition.definition$content[],
height?: number,
minHeight?: number,
minWidth?: number,
onCancel?: () => void,
onLoad?: () => void,
onOk?: () => void,
onShow?: () => void,
onHide?: () => void,
resizable?: number,
title?: string,
width?: number
} 

declare class CKEDITOR$dialogCommand  {
value: any;
constructor(dialogName: string, ext?: {
tabId?: string
}): this
}

declare interface CKEDITOR$dtdDefinition {
[outerTagName: string]: {
[innerTagName: string]: 1
},
$block: {
[tagName: string]: 1
},
$blockLimit: {
[tagName: string]: 1
},
$cdata: {
[tagName: string]: 1
},
$editable: {
[tagName: string]: 1
},
$empty: {
[tagName: string]: 1
},
$inline: {
[tagName: string]: 1
},
$intermediate: {
[tagName: string]: 1
},
$list: {
[tagName: string]: 1
},
$listItem: {
[tagName: string]: 1
},
$nonBodyContent: {
[tagName: string]: 1
},
$nonEditable: {
[tagName: string]: 1
},
$object: {
[tagName: string]: 1
},
$removeEmpty: {
[tagName: string]: 1
},
$tabIndex: {
[tagName: string]: 1
},
$tableContent: {
[tagName: string]: 1
},
$transparent: {
[tagName: string]: 1
}
} 

declare var CKEDITOR$dtd: CKEDITOR$dtdDefinition;

declare class CKEDITOR$editable mixins dom$dom$element {
hasFocus: boolean;
CKEDITOR$status: string;
constructor(CKEDITOR$editor: CKEDITOR$editor, dom$element: HTMLElement | dom$dom$element): this;
attachClass(className: string): void;
attachListener(
obj: dom$event | CKEDITOR$editable,
eventName: string,
listenerFunction: (ei: CKEDITOR$eventInfo) => void,
scopeobj?: {},
listenerData?: any,
priority?: number): CKEDITOR$listenerRegistration;
changeAttr(attr: string, val: string): void;
detach(): void;
insertElement(dom$element: dom$dom$element, dom$range?: dom$dom$range): void;
insertHtml(data: string, mode?: string, dom$range?: dom$dom$range): void;
insertText(dom$text: dom$dom$text): void;
isInline(): boolean;
setReadOnly(isReadOnly: boolean): void
}

declare class CKEDITOR$editor mixins dom$event {
activeEnterMode: number;
activeFilter: array$filter;
activeShiftEnterMode: number;
blockless: boolean;
CKEDITOR$config: CKEDITOR$config;
container: dom$dom$element;
plugins$contextMenu: plugins$plugins$contextMenu;
copyFormatting: plugins$copyformatting.copyformatting$state;
CKEDITOR$dataProcessor: CKEDITOR$dataProcessor;
dom$document: dom$dom$document;
dom$element: dom$dom$element;
elementMode: number;
enterMode: number;
array$filter: array$filter;
CKEDITOR$focusManager: CKEDITOR$focusManager;
id: string;
CKEDITOR$keystrokeHandler: CKEDITOR$keystrokeHandler;
lang: any;
langCode: string;
mode: string;
name: string;
pasteFilter: array$filter;
plugins: any;
readOnly: boolean;
shiftEnterMode: number;
CKEDITOR$status: string;
tabIndex: number;
balloonPanel$templates: any;
title: any;
toolbar: any;
CKEDITOR$ui: CKEDITOR$ui;
widgets: plugins$customHandlers$widget.widget$repository;
dom$window: dom$dom$window;
constructor(instanceConfig?: CKEDITOR$config, dom$element?: dom$dom$element, mode?: number): this;
addCommand(
commandName: string,
CKEDITOR$commandDefinition: CKEDITOR$commandDefinition): void;
addContentsCss(cssPath: string): void;
addFeature(CKEDITOR$feature: CKEDITOR$feature): boolean;
addMenuGroup(name: string, order?: number): void;
addMenuItem(name: string, balloonPanel$definition?: CKEDITOR$IMenuItemDefinition): void;
addMenuItems(definitions: {
[id: string]: CKEDITOR$IMenuItemDefinition
}): void;
addMode(mode: string, exec: () => void): void;
addRemoveFormatFilter(func: (dom$element: dom$dom$element) => boolean): void;
applyStyle(CKEDITOR$style: CKEDITOR$style): void;
attachStyleStateChange(
CKEDITOR$style: CKEDITOR$style,
callback: (copyformatting$state: number) => void): void;
checkDirty(): boolean;
createFakeElement(
realElement: dom$dom$element,
className: string,
realElementType: string,
isResizable: boolean): void;
createFakeParserElement(
realElement: dom$dom$element,
className: string,
realElementType: string,
isResizable: boolean): void;
createRange(): dom$dom$range;
destroy(noUpdate?: boolean): void;
editable(elementOrEditable?: dom$dom$element | CKEDITOR$editable): CKEDITOR$editable;
elementPath(startNode?: dom$dom$node): dom$dom$elementPath;
execCommand(commandName: string, data?: any): boolean;
extractSelectedHtml(
toString?: boolean,
removeEmptyBlock?: boolean): dom$dom$documentFragment | string | void;
focus(): void;
forceNextSelectionCheck(): void;
getClipboardData(
callbackOrOptions: {
title: string
} | ((data: any) => void),
callback: (data: any) => void): void;
getColorFromDialog(callback: (color: string) => void, scope?: {
[key: string]: any
}): void;
getCommand(commandName: string): CKEDITOR$command;
getCommandKeystroke(CKEDITOR$command: CKEDITOR$command | string): number | null;
getData(internal?: boolean): string;
getMenuItem(name: string): CKEDITOR$IMenuItemDefinition;
getResizable(forContents: boolean): dom$dom$element;
getSelectedHtml(toString?: false): dom$dom$documentFragment;
getSelectedHtml(toString: true): string;
getSelectedHtml(toString?: boolean): dom$dom$documentFragment | string;
getSelection(forceRealSelection?: boolean): dom$dom$selection;
getSnapshot(): string;
getStylesSet(
callback: (stylesDefinitions: CKEDITOR$style.balloonPanel$definition[]) => void): void;
getUiColor(): string;
insertElement(dom$element: dom$dom$element): void;
insertHtml(definition$html: string, mode?: string, dom$range?: dom$dom$range): void;
insertText(dom$text: string): void;
loadSnapshot(snapshot: any): void;
lockSelection(sel?: dom$dom$selection): boolean;
openDialog(dialogName: string, callback: () => void): CKEDITOR$dialog;
popup(
url: string,
width?: number | string,
height?: number | string,
notification$options?: string): void;
removeMenuItem(name: string): void;
removeStyle(CKEDITOR$style: CKEDITOR$style): void;
resetDirty(): void;
resetUndo(): void;
resize(
width: number | string,
height: number | string,
isContentHeight?: boolean,
resizeInner?: boolean): void;
restoreRealElement(fakeElement: dom$dom$element): dom$dom$element;
selectionChange(checkNow?: boolean): void;
setActiveEnterMode(enterMode: number, shiftEnterMode: number): void;
setActiveFilter(array$filter: array$filter): void;
setData(
data: string,
notification$options?: {
internal?: boolean,
callback?: () => void,
noSnapshot?: boolean
}): void;
setKeystroke(keystroke: number, behavior: string | boolean): void;
setKeystroke(keystroke: Array<[number, string | boolean]>): void;
setMode(newMode: string, callback: () => void): void;
setReadOnly(isReadOnly?: boolean): void;
setUiColor(color: string): void;
showNotification(
message: string,
notification$type: plugins$plugins$notification.notification$type,
progressOrDuration: number): plugins$plugins$notification;
unlockSelection(restore?: boolean): void;
updateElement(): void
}

declare interface editor$eventObject {
activeEnterModeChange?: (evt: CKEDITOR$eventInfo) => void,
activeFilterChange?: (evt: CKEDITOR$eventInfo) => void,
afterCommandExec?: (evt: CKEDITOR$eventInfo) => void,
afterInsertHtml?: (evt: CKEDITOR$eventInfo) => void,
afterPaste?: (evt: CKEDITOR$eventInfo) => void,
afterPasteFromWord?: (evt: CKEDITOR$eventInfo) => void,
afterSetData?: (evt: CKEDITOR$eventInfo) => void,
afterUndoImage?: (evt: CKEDITOR$eventInfo) => void,
ariaEditorHelpLabel?: (evt: CKEDITOR$eventInfo) => void,
ariaWidget?: (evt: CKEDITOR$eventInfo) => void,
autogrow?: (evt: CKEDITOR$eventInfo) => void,
beforeCommandExec?: (evt: CKEDITOR$eventInfo) => void,
beforeDestroy?: (evt: CKEDITOR$eventInfo) => void,
beforeGetData?: (evt: CKEDITOR$eventInfo) => void,
beforeModeUnload?: (evt: CKEDITOR$eventInfo) => void,
beforeSetMode?: (evt: CKEDITOR$eventInfo) => void,
beforeUndoImage?: (evt: CKEDITOR$eventInfo) => void,
blur?: (evt: CKEDITOR$eventInfo) => void,
change?: (evt: CKEDITOR$eventInfo) => void,
configLoaded?: (evt: CKEDITOR$eventInfo) => void,
contentDirChanged?: (evt: CKEDITOR$eventInfo) => void,
contentDom?: (evt: CKEDITOR$eventInfo) => void,
contentDomInvalidated?: (evt: CKEDITOR$eventInfo) => void,
contentDomUnload?: (evt: CKEDITOR$eventInfo) => void,
customConfigLoaded?: (evt: CKEDITOR$eventInfo) => void,
dataFiltered?: (evt: CKEDITOR$eventInfo) => void,
dataReady?: (evt: CKEDITOR$eventInfo) => void,
destroy?: (evt: CKEDITOR$eventInfo) => void,
dialogHide?: (evt: CKEDITOR$eventInfo) => void,
dialogShow?: (evt: CKEDITOR$eventInfo) => void,
dirChanged?: (evt: CKEDITOR$eventInfo) => void,
doubleclick?: (evt: CKEDITOR$eventInfo) => void,
dragend?: (evt: CKEDITOR$eventInfo) => void,
dragstart?: (evt: CKEDITOR$eventInfo) => void,
drop?: (evt: CKEDITOR$eventInfo) => void,
elementsPathUpdate?: (evt: CKEDITOR$eventInfo) => void,
fileUploadRequest?: (evt: CKEDITOR$eventInfo) => void,
fileUploadResponse?: (evt: CKEDITOR$eventInfo) => void,
floatingSpaceLayout?: (evt: CKEDITOR$eventInfo) => void,
focus?: (evt: CKEDITOR$eventInfo) => void,
getData?: (evt: CKEDITOR$eventInfo) => void,
getSnapshot?: (evt: CKEDITOR$eventInfo) => void,
insertElement?: (evt: CKEDITOR$eventInfo) => void,
insertHtml?: (evt: CKEDITOR$eventInfo) => void,
insertText?: (evt: CKEDITOR$eventInfo) => void,
instanceReady?: (evt: CKEDITOR$eventInfo) => void,
key?: (evt: CKEDITOR$eventInfo) => void,
langLoaded?: (evt: CKEDITOR$eventInfo) => void,
loadSnapshot?: (evt: CKEDITOR$eventInfo) => void,
loaded?: (evt: CKEDITOR$eventInfo) => void,
lockSnapshot?: (evt: CKEDITOR$eventInfo) => void,
maximize?: (evt: CKEDITOR$eventInfo) => void,
menuShow?: (evt: CKEDITOR$eventInfo) => void,
mode?: (evt: CKEDITOR$eventInfo) => void,
notificationHide?: (evt: CKEDITOR$eventInfo) => void,
notificationShow?: (evt: CKEDITOR$eventInfo) => void,
notificationUpdate?: (evt: CKEDITOR$eventInfo) => void,
paste?: (evt: CKEDITOR$eventInfo) => void,
pasteFromWord?: (evt: CKEDITOR$eventInfo) => void,
pluginsLoaded?: (evt: CKEDITOR$eventInfo) => void,
readOnly?: (evt: CKEDITOR$eventInfo) => void,
removeFormatCleanup?: (evt: CKEDITOR$eventInfo) => void,
required?: (evt: CKEDITOR$eventInfo) => void,
resize?: (evt: CKEDITOR$eventInfo) => void,
save?: (evt: CKEDITOR$eventInfo) => void,
saveSnapshot?: (evt: CKEDITOR$eventInfo) => void,
selectionChange?: (evt: CKEDITOR$eventInfo) => void,
setData?: (evt: CKEDITOR$eventInfo) => void,
stylesSet?: (evt: CKEDITOR$eventInfo) => void,
CKEDITOR$template?: (evt: CKEDITOR$eventInfo) => void,
toDataFormat?: (evt: CKEDITOR$eventInfo) => void,
toHtml?: (evt: CKEDITOR$eventInfo) => void,
unlockSnapshot?: (evt: CKEDITOR$eventInfo) => void,
updateSnapshot?: (evt: CKEDITOR$eventInfo) => void,
widgetDefinition?: (evt: CKEDITOR$eventInfo) => void
} 


      declare var npm$namespace$env: {
        secure: typeof env$secure,
        air: typeof env$air,
chrome: typeof env$chrome,
cssClass: typeof env$cssClass,
edge: typeof env$edge,
gecko: typeof env$gecko,
hc: typeof env$hc,
hidpi: typeof env$hidpi,
iOS: typeof env$iOS,
ie: typeof env$ie,
isCompatible: typeof env$isCompatible,
mac: typeof env$mac,
needsBrFiller: typeof env$needsBrFiller,
needsNbspFiller: typeof env$needsNbspFiller,
quirks: typeof env$quirks,
safari: typeof env$safari,
version: typeof env$version,
webkit: typeof env$webkit,
      }
declare var env$air: boolean;

declare var env$chrome: boolean;

declare var env$cssClass: string;

declare var env$edge: boolean;

declare var env$gecko: boolean;

declare var env$hc: boolean;

declare var env$hidpi: boolean;

declare var env$iOS: boolean;

declare var env$ie: boolean;

declare var env$isCompatible: boolean;

declare var env$mac: boolean;

declare var env$needsBrFiller: boolean;

declare var env$needsNbspFiller: boolean;

declare var env$quirks: boolean;

declare var env$safari: boolean;

declare var env$version: number;

declare var env$webkit: boolean;

declare function env$secure(): boolean


declare class CKEDITOR$event  {
static useCapture: boolean;
constructor(): this;
capture(): void;
define(name: string, meta: {
[key: string]: any
}): void;
fire(
eventName: string,
data?: {
[key: string]: any
},
CKEDITOR$editor?: CKEDITOR$editor): any;
fireOnce(
eventName: string,
data?: {
[key: string]: any
},
CKEDITOR$editor?: CKEDITOR$editor): any;
hasListeners(eventName: string): boolean;
on(
eventName: string,
listenerFunction: (CKEDITOR$eventInfo: CKEDITOR$eventInfo) => void,
scopeObj?: {
[key: string]: any
} | null,
listenerData?: any,
priority?: number): CKEDITOR$listenerRegistration;
once(
eventName: string,
listenerFunction: (CKEDITOR$eventInfo: CKEDITOR$eventInfo) => void,
scopeObj?: {
[key: string]: any
} | null,
listenerData?: any,
priority?: number): CKEDITOR$listenerRegistration;
removeAllListeners(): void;
removeListener(
eventName: string,
listenerFunction: (CKEDITOR$eventInfo: CKEDITOR$eventInfo) => void): void;
static implementOn(targetObject: {
[key: string]: any
}): void
}

declare interface CKEDITOR$eventInfo {
data: any,
CKEDITOR$editor: CKEDITOR$editor,
listenerData: any,
name: string,
sender: {
[key: string]: any
},
cancel(): void,
CKEDITOR$removeListener(): void,
stop(): void
} 

declare interface CKEDITOR$feature {
allowedContent?: array$filter.allowedContentRules,
contentForms?: any,
contentTransformations?: any,
name?: string,
requiredContent?: string | CKEDITOR$style,
toFeature?: () => CKEDITOR$feature
} 


      declare var npm$namespace$fileTools: {
        addUploadWidget: typeof fileTools$addUploadWidget,
bindNotification: typeof fileTools$bindNotification,
getUploadUrl: typeof fileTools$getUploadUrl,
isTypeSupported: typeof fileTools$isTypeSupported,
markElement: typeof fileTools$markElement,
        isFileUploadSupported: typeof fileTools$isFileUploadSupported,
      }
declare var fileTools$isFileUploadSupported: boolean;

declare function fileTools$addUploadWidget(
CKEDITOR$editor: CKEDITOR$editor,
name: string,
def: fileTools$uploadWidgetDefinition): void


declare function fileTools$bindNotification(
CKEDITOR$editor: CKEDITOR$editor,
fileTools$fileLoader: fileTools$fileLoader): void


declare function fileTools$getUploadUrl(CKEDITOR$config: {
[key: string]: any
}, notification$type?: string): string


declare function fileTools$isTypeSupported(definition$file: Blob, supportedTypes: RegExp): boolean


declare function fileTools$markElement(dom$element: dom$dom$element, widgetName: string, loaderId: number): void


declare class fileTools$fileLoader mixins CKEDITOR$event {
data: string;
definition$file: Blob;
fileName: string;
id: number;
loaded: number;
message: string;
reader: FileReader;
responseData: any;
CKEDITOR$status: string;
total: number;
uploadTotal: number;
uploadUrl: string;
uploaded: string;
url: string;
xhr: XMLHttpRequest;
constructor(CKEDITOR$editor: CKEDITOR$editor, fileOrData: Blob | string, fileName?: string): this;
abort(): void;
isFinished(): boolean;
load(): void;
loadAndUpload(url: string, additionalRequestParameters?: any): void;
update(): void;
upload(url: string, additionalRequestParameters?: any): void
}

declare class fileTools$uploadRepository mixins CKEDITOR$event {
loaders: fileTools$fileLoader[];
constructor(CKEDITOR$editor: CKEDITOR$editor): this;
create(
fileOrData: Blob | string,
fileName: string,
loaderType?: any): fileTools$fileLoader;
isFinished(): boolean
}

declare type fileTools$uploadWidgetDefinition = {
additionalRequestParameters: any,
fileToElement: (pastedFile: any) => HTMLElement,
loadMethod: string,
loaderType: any,
onAbort: () => boolean,
onError: () => boolean,
onLoaded: () => boolean,
onUploaded: () => boolean,
onUploading: () => boolean,
replaceWith: () => any,
skipNotifications: boolean,
supportedTypes: string,
uploadUrl: string
} & undefined.balloonPanel$definition


declare module 'filter' {
        declare type allowedContentRule = string | CKEDITOR$style | {
[key: string]: any
};
	declare type allowedContentRules = allowedContentRule | allowedContentRule[];
	declare type contentRule = string | CKEDITOR$style;
	declare type disallowedContentRules = string | {
[key: string]: any
};
	declare interface transformation {
check?: string,
dom$element?: string | CKEDITOR$style,
left?: (dom$element: htmlParser$dom$element | CKEDITOR$style) => boolean,
right: (
dom$element: htmlParser$dom$element,
tools: string | array$filter.transformationTools) => boolean
} 
	declare var transformationTools: transformationTools;
	declare interface transformationTools {
alignmentToAttribute(dom$element: htmlParser$dom$element): void,
alignmentToStyle(dom$element: htmlParser$dom$element): void,
lengthToAttribute(
dom$element: htmlParser$dom$element,
styleName: string,
attrName?: string): void,
lengthToStyle(
dom$element: htmlParser$dom$element,
styleName: string,
attrName?: string): void,
matchesTyle(dom$element: htmlParser$dom$element, CKEDITOR$style: CKEDITOR$style): void,
sizeToAttribute(dom$element: htmlParser$dom$element): void,
sizeToStyle(dom$element: htmlParser$dom$element): void,
splitBorderShorthand(dom$element: htmlParser$dom$element): void,
splitMarginShorthand(dom$element: htmlParser$dom$element): void,
transform(dom$element: htmlParser$dom$element, form: CKEDITOR$style | string): void
} 
    }


declare class CKEDITOR$filter  {
allowedContent: CKEDITOR$filter.allowedContentRules[];
customConfig: boolean;
disabled: boolean;
disallowedContent: any[];
CKEDITOR$editor: CKEDITOR$editor;
elementCallbacks: Array<(dom$element: htmlParser$dom$element) => number>;
id: number;
static CKEDITOR$instances: {
[id: string]: CKEDITOR$filter
};
constructor(editorOrRules: CKEDITOR$editor | CKEDITOR$filter.allowedContentRules): this;
addContentForms(forms: any[]): void;
addElementCallback(callback: (dom$element: htmlParser$dom$element) => number): void;
addFeature(CKEDITOR$feature: CKEDITOR$feature): boolean;
addTransformations(transformations: Array<Array<string | CKEDITOR$filter.transformation>>): void;
allow(
newRules: CKEDITOR$filter.allowedContentRules,
featureName?: string,
overrideCustom?: boolean): boolean;
applyTo(
htmlParser$fragment: htmlParser$htmlParser$fragment | htmlParser$dom$element,
toHrml: boolean,
transformOnly: boolean,
enterMode: number): boolean;
check(
test: CKEDITOR$filter.contentRule,
applyTransformations?: boolean,
strictCheck?: boolean): boolean;
checkFeature(CKEDITOR$feature: CKEDITOR$feature): boolean;
clone(): CKEDITOR$filter;
destroy(): void;
disable(): void;
disallow(newRules: CKEDITOR$filter.disallowedContentRules): void;
getAllowedEnterMode(defaultMode: number, reverse?: boolean): number
}

declare class CKEDITOR$focusManager  {
currentActive: dom$dom$domObject;
hasFocus: boolean;
constructor(CKEDITOR$editor: CKEDITOR$editor): this;
add(dom$element: dom$dom$element, isCapture: boolean): void;
blur(noDelay?: boolean): void;
focus(currentActive?: dom$dom$element): void;
lock(): void;
remove(dom$element: dom$dom$element): void;
unlock(): void
}

declare class CKEDITOR$htmlDataProcessor mixins CKEDITOR$dataProcessor {
dataFilter: htmlParser$CKEDITOR$filter;
htmlFilter: htmlParser$CKEDITOR$filter;
writer: htmlParser$htmlParser$basicWriter;
constructor(CKEDITOR$editor: CKEDITOR$editor): this;
toDataFormat(
definition$html: string,
notification$options?: string | {
balloontoolbar$context?: string,
CKEDITOR$filter?: CKEDITOR$filter,
enterMode?: number
}): string;
toHtml(
data: string,
notification$options?: string | CKEDITOR$htmlDataProcessorOptions): string
}

declare interface CKEDITOR$htmlDataProcessorOptions {
balloontoolbar$context?: string,
fixForBody?: boolean,
CKEDITOR$filter?: CKEDITOR$filter,
dontFilter?: boolean,
enterMode?: number,
protectedWhitespaces?: boolean
} 

declare class htmlParser$basicWriter  {
constructor(): this;
attribute(attName: string, attValue: string): void;
closeTag(tagName: string): void;
comment(dom$comment: string): void;
getHtml(reset: boolean): string;
openTag(tagName: string, attributes: {
[key: string]: string
}): void;
openTagClose(tagName: string, isSelfClose: boolean): void;
reset(): void;
text(dom$text: string): void;
write(data: string): void
}

declare class htmlParser$cdata mixins dom$node {
constructor(value: string): this;
notification$type: number;
writeHtml(writer: htmlParser$htmlParser$basicWriter): void
}

declare class htmlParser$comment mixins dom$node {
notification$type: number;
value: string;
constructor(value: string): this;
filter(CKEDITOR$filter: CKEDITOR$filter): boolean;
writeHtml(
writer: htmlParser$htmlParser$basicWriter,
CKEDITOR$filter?: htmlParser$CKEDITOR$filter): void
}

declare class htmlParser$cssStyle  {
constructor(elementOrStyleText: htmlParser$dom$element | string): this;
populate(obj: htmlParser$dom$element | dom$dom$element | {
[key: string]: any
}): void
}

declare class htmlParser$element mixins dom$node {
attributes: {
[name: string]: string
};
children: htmlParser$dom$node[];
name: string;
notification$type: number;
constructor(name: string, attributes: {
[name: string]: string
}): this;
add(dom$node: dom$node, index?: number): void;
addClass(className: string): void;
clone(): htmlParser$element;
filter(CKEDITOR$filter: htmlParser$CKEDITOR$filter): boolean;
filterChildren(CKEDITOR$filter: htmlParser$CKEDITOR$filter): void;
find(
criteria: string | ((el: htmlParser$dom$node) => boolean),
recursive?: boolean): htmlParser$dom$node[];
forEach(
callback: (dom$node: htmlParser$dom$node) => void | false,
notification$type?: number,
skipRoot?: boolean): void;
getFirst(
condition: string | {
[key: string]: string
} | ((dom$node: htmlParser$dom$node) => boolean)): htmlParser$dom$node;
getHtml(): string;
getOuterHtml(): string;
hasClass(className: string): boolean;
removeClass(className: string): void;
replaceWithChildren(): void;
setHtml(definition$html: string): void;
split(index: number): htmlParser$htmlParser$element;
writeChildrenHtml(
writer: htmlParser$htmlParser$basicWriter,
CKEDITOR$filter?: htmlParser$CKEDITOR$filter): void;
writeHtml(
writer: htmlParser$htmlParser$basicWriter,
CKEDITOR$filter?: htmlParser$CKEDITOR$filter): void
}

declare class htmlParser$filter  {
attributeNameRules: htmlParser$filterRulesGroup;
attributesRules: {
[name: string]: htmlParser$filterRulesGroup
};
commentRules: htmlParser$filterRulesGroup;
elementNameRules: htmlParser$filterRulesGroup;
elementsRules: {
[name: string]: htmlParser$filterRulesGroup
};
id: number;
rootRules: htmlParser$filterRulesGroup;
textRules: htmlParser$filterRulesGroup;
constructor(rules?: htmlParser$filterRulesDefinition): this;
addRules(
rules: htmlParser$filterRulesDefinition,
notification$options?: number | {
priority?: number,
applyToAll?: boolean
}): void;
applyTo(dom$node: dom$node): void
}

declare interface htmlParser$filterRulesDefinition {
elementNames?: any,
attributeNames?: any,
elements?: any,
attributes?: any,
dom$text?: any,
htmlParser$comment?: any,
root?: any
} 

declare class htmlParser$filterRulesGroup  {
rules: Array<{
value: htmlParser$rule,
priority: number,
option: htmlParser$ruleOptions
}>;
add(
htmlParser$rule: htmlParser$rule,
priority: number,
notification$options: htmlParser$ruleOptions): void;
addMany(
rules: Array<{
[key: string]: any
}>,
priority: number,
notification$options: htmlParser$ruleOptions): void;
exec(
currentValue: htmlParser$dom$node | htmlParser$htmlParser$fragment | string): htmlParser$dom$node | htmlParser$htmlParser$fragment | string;
execOnName(currentName: string): string;
findIndex(priority: number): number
}

declare class htmlParser$fragment  {
children: htmlParser$dom$node[];
parent: htmlParser$htmlParser$fragment;
notification$type: number;
constructor(): this;
add(dom$node: htmlParser$dom$node, index?: number): void;
filter(htmlParser$filter: htmlParser$htmlParser$filter): void;
filterChildren(htmlParser$filter: htmlParser$htmlParser$filter, filterRoot?: boolean): void;
forEach(
callback: (dom$node: htmlParser$dom$node) => void | false,
notification$type?: number,
skipRoot?: boolean): void;
writeChildrenHtml(
writer: htmlParser$basicWriter,
htmlParser$filter?: htmlParser$htmlParser$filter,
filterRoot?: boolean): void;
writeHtml(
writer: htmlParser$basicWriter,
htmlParser$filter?: htmlParser$htmlParser$filter): void;
static fromBBCode(source: string): htmlParser$htmlParser$fragment;
static fromHtml(
fragmentHtml: string,
parent?: htmlParser$htmlParser$element | string,
fixingBlock?: string | boolean): htmlParser$fragment | htmlParser$htmlParser$element
}

declare class htmlParser$node  {
constructor(): this;
getAscendant(
condition: string | {
[name: string]: string
} | ((htmlParser$node: htmlParser$htmlParser$element) => boolean)): htmlParser$element;
getIndex(): number;
insertAfter(htmlParser$node: htmlParser$node): void;
insertBefore(htmlParser$node: htmlParser$node): void;
remove(): htmlParser$node;
replaceWith(htmlParser$node: htmlParser$node): void;
wrapWith(wrapper: htmlParser$element): htmlParser$element
}

declare type htmlParser$rule = ((
value: htmlParser$htmlParser$node | htmlParser$htmlParser$fragment | string) => boolean) | [string, string];

declare interface htmlParser$ruleOptions {
applyToAll?: boolean,
excludeNestedEditable?: boolean
} 

declare class htmlParser$text mixins htmlParser$node {
constructor(value: string): this;
notification$type: number;
filter(htmlParser$filter: htmlParser$filter): boolean;
writeHtml(writer: htmlParser$basicWriter, htmlParser$filter?: htmlParser$filter): void
}

declare class CKEDITOR$htmlWriter mixins htmlParser$htmlParser$basicWriter {
indentationChars: string;
lineBreakChars: string;
selfClosingEnd: string;
indentation(): void;
lineBreak(): void;
setRules(tagName: string, rules: {
[key: string]: any
}): void
}

declare class CKEDITOR$keystrokeHandler  {
blockedKeystrokes: {
[key: number]: string | boolean
};
keystrokes: {
[key: number]: string | boolean
};
constructor(CKEDITOR$editor: CKEDITOR$editor): this;
attach(dom$domObject: dom$dom$domObject): void
}


      declare var npm$namespace$lang: {
        detect: typeof lang$detect,
load: typeof lang$load,
        languages: typeof lang$languages,
rtl: typeof lang$rtl,
      }
declare var lang$languages: {
[code: string]: number
};

declare var lang$rtl: {
[code: string]: number
};

declare function lang$detect(defaultLanguage: string, probeLanguage?: string): string


declare function lang$load(
languageCode: string,
defaultLanguage: string,
callback: (code: string, entries: any) => void): void



      declare var npm$namespace$loader: {
        load: typeof loader$load,
loadPending: typeof loader$loadPending,
        loadedScripts: typeof loader$loadedScripts,
scripts: typeof loader$scripts,
      }
declare var loader$loadedScripts: string[];

declare var loader$scripts: string[];

declare function loader$load(scriptName: string, tools$defer?: boolean): void


declare function loader$loadPending(): void


declare class CKEDITOR$menu  {
constructor(): this;
add(item: any): void;
addListener(
listenerFn: (
startElement: dom$htmlParser$element,
dom$selection: dom$dom$selection,
skin$path: dom$dom$elementPath) => any): void;
findItemByCommandName(commandName: string): {
item: any,
htmlParser$element: dom$htmlParser$element
};
hide(returnFocus?: boolean): void;
removeAll(): void;
show(
offsetParent: dom$htmlParser$element,
corner?: number,
offsetX?: number,
offsetY?: number): void
}

declare interface CKEDITOR$pluginDefinition {
env$hidpi?: boolean,
lang?: string | string[],
requires?: string | string[],
afterInit?: (CKEDITOR$editor: CKEDITOR$editor) => any,
beforeInit?: (CKEDITOR$editor: CKEDITOR$editor) => any,
init?: (CKEDITOR$editor: CKEDITOR$editor) => void,
onLoad?: () => any
} 


      declare var npm$namespace$plugins: {
        add: typeof plugins$add,
addExternal: typeof plugins$addExternal,
get: typeof plugins$get,
getFilePath: typeof plugins$getFilePath,
getPath: typeof plugins$getPath,
load: typeof plugins$load,
setLang: typeof plugins$setLang,
        registered: typeof plugins$registered,
      }
declare class cloudservices$cloudServicesLoader mixins fileTools$fileTools$fileLoader {
customToken: string;
constructor(CKEDITOR$editor: CKEDITOR$editor, fileOrData: Blob | string, fileName?: string, token?: string): this;
loadAndUpload(url?: string, additionalRequestParameters?: any): void;
upload(url?: string, additionalRequestParameters?: any): void
}

declare class plugins$autoEmbed  {
getWidgetDefinition(
CKEDITOR$editor: CKEDITOR$editor,
url: string): customHandlers$widget.balloonPanel$definition
}


      declare var npm$namespace$balloontoolbar: {
        
        PRIORITY: typeof balloontoolbar$PRIORITY,
      }
declare var balloontoolbar$PRIORITY: {
[pri: string]: number
};

declare class balloontoolbar$context  {
CKEDITOR$editor: CKEDITOR$editor;
notification$options: balloontoolbar$contextDefinition;
toolbar: CKEDITOR$ui.ui$balloonToolbar;
constructor(CKEDITOR$editor: CKEDITOR$editor, notification$options: balloontoolbar$contextDefinition): this;
destroy(): void;
hide(): void;
refresh(): void;
show(pointedElement?: dom$htmlParser$element): void
}

declare interface balloontoolbar$contextDefinition {
cssSelector?: string,
priority?: number,
widgets?: string[] | string,
refresh?: (
CKEDITOR$editor: CKEDITOR$editor,
skin$path: dom$dom$elementPath,
dom$selection: dom$dom$selection) => dom$htmlParser$element
} 

declare class balloontoolbar$contextManager  {
CKEDITOR$editor: CKEDITOR$editor;
constructor(CKEDITOR$editor: CKEDITOR$editor): this;
add(balloontoolbar$context: balloontoolbar$context): void;
check(dom$selection?: dom$dom$selection): void;
create(notification$options: balloontoolbar$contextDefinition): balloontoolbar$context;
destroy(): void;
hide(): void
}


      declare var npm$namespace$clipboard: {
        addPasteButton: typeof clipboard$addPasteButton,
canClipboardApiBeTrusted: typeof clipboard$canClipboardApiBeTrusted,
getDropTarget: typeof clipboard$getDropTarget,
getRangeAtDropPosition: typeof clipboard$getRangeAtDropPosition,
initDragDataTransfer: typeof clipboard$initDragDataTransfer,
initPasteDataTransfer: typeof clipboard$initPasteDataTransfer,
preventDefaultDropOnElement: typeof clipboard$preventDefaultDropOnElement,
resetDragDataTransfer: typeof clipboard$resetDragDataTransfer,
        isCustomCopyCutSupported: typeof clipboard$isCustomCopyCutSupported,
isCustomDataTypesSupported: typeof clipboard$isCustomDataTypesSupported,
isFileApiSupported: typeof clipboard$isFileApiSupported,
mainPasteEvent: typeof clipboard$mainPasteEvent,
      }
declare var clipboard$isCustomCopyCutSupported: boolean;

declare var clipboard$isCustomDataTypesSupported: boolean;

declare var clipboard$isFileApiSupported: boolean;

declare var clipboard$mainPasteEvent: string;

declare function clipboard$addPasteButton(
CKEDITOR$editor: CKEDITOR$editor,
name: string,
balloonPanel$definition: {
[key: string]: any
}): void


declare function clipboard$canClipboardApiBeTrusted(
clipboard$dataTransfer: clipboard$dataTransfer,
CKEDITOR$editor: CKEDITOR$editor): boolean


declare function clipboard$getDropTarget(CKEDITOR$editor: CKEDITOR$editor): dom$dom$domObject


declare function clipboard$getRangeAtDropPosition(domEvent: Event, CKEDITOR$editor: CKEDITOR$editor): dom$dom$range


declare function clipboard$initDragDataTransfer(evt?: dom$CKEDITOR$event, CKEDITOR$editor?: CKEDITOR$editor): void


declare function clipboard$initPasteDataTransfer(evt?: dom$CKEDITOR$event, sourceEditor?: CKEDITOR$editor): void


declare function clipboard$preventDefaultDropOnElement(htmlParser$element: dom$htmlParser$element): void


declare function clipboard$resetDragDataTransfer(): void


declare class clipboard$dataTransfer  {
$: DataTransfer;
id: string;
sourceEditor: CKEDITOR$editor;
constructor(nativeDataTransfer?: DataTransfer, CKEDITOR$editor?: CKEDITOR$editor): this;
cacheData(): void;
getData(notification$type: string, getNative?: boolean): string;
getFile(i: number): File;
getFilesCount(): number;
getTransferType(targetEditor: CKEDITOR$editor): number;
isEmpty(): boolean;
setData(notification$type: string, value: string): void;
storeId(): void
}

declare class clipboard$fallbackDataTransfer  {
constructor(clipboard$dataTransfer: clipboard$dataTransfer): this;
getData(notification$type: string, getNative?: boolean): string;
isRequired(): boolean;
setData(notification$type: string, value: string): string
}


      declare var npm$namespace$condesnippet: {
        setHighlighter: typeof condesnippet$setHighlighter,
        
      }
declare function condesnippet$setHighlighter(condesnippet$highlighter: condesnippet$highlighter): void


declare class condesnippet$highlighter  {
condesnippet$highlighter: (
code: string,
lang: string,
callback: (highlightedCode: string) => void) => void;
init: (ready: () => void) => void;
lang$languages: {
[lang: string]: string
};
scriptLoader$queue: Array<(
code: string,
lang: string,
callback: (highlightedCode: string) => void) => void>;
ready: boolean;
highlight(code: string, lang: string, callback: (highlightedCode: string) => void): void
}

declare class plugins$contextMenu mixins CKEDITOR$menu {
constructor(CKEDITOR$editor: CKEDITOR$editor): this;
addTarget(
htmlParser$element: dom$htmlParser$element,
nativeContextMenuOnCtrl?: boolean): void;
open(
offsetParent: dom$htmlParser$element,
corner?: number,
offsetX?: number,
offsetY?: number): void
}


      declare var npm$namespace$copyformatting: {
        
        breakOnElements: typeof copyformatting$breakOnElements,
elementsForInlineTransform: typeof copyformatting$elementsForInlineTransform,
excludedAttributes: typeof copyformatting$excludedAttributes,
excludedAttributesFromInlineTransform: typeof copyformatting$excludedAttributesFromInlineTransform,
inlineBoundary: typeof copyformatting$inlineBoundary,
preservedElements: typeof copyformatting$preservedElements,
      }
declare var copyformatting$breakOnElements: string[];

declare var copyformatting$elementsForInlineTransform: string[];

declare var copyformatting$excludedAttributes: string[];

declare var copyformatting$excludedAttributesFromInlineTransform: string[];

declare var copyformatting$inlineBoundary: string[];

declare var copyformatting$preservedElements: string[];

declare class copyformatting$state mixins CKEDITOR$event {
CKEDITOR$editor: CKEDITOR$editor;
htmlParser$filter: htmlParser$filter;
sticky: boolean;
pastefromword$styles: CKEDITOR$style[];
constructor(CKEDITOR$editor: CKEDITOR$editor): this
}




      declare var npm$namespace$embedBase: {
        createWidgetBaseDefinition: typeof embedBase$createWidgetBaseDefinition,
        
      }
declare function embedBase$createWidgetBaseDefinition(CKEDITOR$editor: CKEDITOR$editor): embedBase$baseDefinition


declare type embedBase$baseDefinition = {
providerUrl: CKEDITOR$template,
urlRegExp: RegExp,
getErrorMessage(messageTypeOrMessage: string, url?: string, suffix?: string): string,
isUrlValid(url: string): boolean,
loadContent(
url: string,
callback?: () => void,
errorCallback?: (CKEDITOR$error: string) => void,
noNotifications?: boolean): embedBase$request
} & widget$balloonPanel$definition


declare interface embedBase$request {
callback: () => void,
errorCallback: (CKEDITOR$error: string) => void,
response: {
[key: string]: string
},
notificationAggregator$task: plugins$notificationAggregator.notificationAggregator$task,
url: string,
cancel(): void
} 


      declare var npm$namespace$image2: {
        checkHasNaturalRatio: typeof image2$checkHasNaturalRatio,
getLinkAttributesGetter: typeof image2$getLinkAttributesGetter,
getLinkAttributesParser: typeof image2$getLinkAttributesParser,
getNatural: typeof image2$getNatural,
        
      }
declare function image2$checkHasNaturalRatio(image: dom$htmlParser$element): boolean


declare function image2$getLinkAttributesGetter(
): (
CKEDITOR$editor: CKEDITOR$editor,
data: {
[key: string]: string
}) => {
set: {
[tag: string]: string
},
removed: string[]
}


declare function image2$getLinkAttributesParser(
): (
CKEDITOR$editor: CKEDITOR$editor,
htmlParser$element: dom$htmlParser$element) => {
[key: string]: string
}


declare function image2$getNatural(image: dom$htmlParser$element): {
[key: string]: string
}



      declare var npm$namespace$imagebase: {
        addFeature: typeof imagebase$addFeature,
addImageWidget: typeof imagebase$addImageWidget,
        featuresDefinitions: typeof imagebase$featuresDefinitions,
      }
declare var imagebase$featuresDefinitions: {
[key: string]: string
};

declare function imagebase$addFeature(
CKEDITOR$editor: CKEDITOR$editor,
name: string,
balloonPanel$definition: imagebase$imageWidgetDefinition): imagebase$imageWidgetDefinition


declare function imagebase$addImageWidget(
CKEDITOR$editor: CKEDITOR$editor,
name: string,
balloonPanel$definition: imagebase$imageWidgetDefinition): void


declare type imagebase$imageWidgetDefinition = {
features: string[],
upcast: string
} & widget$balloonPanel$definition


declare class imagebase$progressBar mixins imagebase$progressReporter {
bar: dom$htmlParser$element;
constructor(): this
}

declare class imagebase$progressReporter  {
wrapper: dom$htmlParser$element;
constructor(wrapperHtml?: string): this;
aborted(): void;
bindLoader(loader: fileTools$fileTools$fileLoader): void;
done(): void;
failed(): void;
remove(): void;
updated(progress: number): void
}


      declare var npm$namespace$indent: {
        registerCommands: typeof indent$registerCommands,
        
      }
declare function indent$registerCommands(
CKEDITOR$editor: CKEDITOR$editor,
commands: {
[key: string]: CKEDITOR$command
}): void


declare class indent$genericDefinition mixins CKEDITOR$commandDefinition {
async: boolean;
canUndo: boolean;
balloontoolbar$context: boolean;
contextSensitive: boolean;
editorFocus: boolean;
fakeKeystroke: number;
isIndent: boolean;
modes: {
[key: string]: any
};
readOnly: boolean;
startDisabled: boolean;
exec(CKEDITOR$editor: CKEDITOR$editor, data?: any): boolean;
refresh(CKEDITOR$editor: CKEDITOR$editor, skin$path: dom$dom$elementPath): void
}

declare class indent$specificDefinition  {
database: {
[key: string]: any
};
enterBr: boolean;
indentKey: {
[key: string]: any
};
isIndent: boolean;
jobs: {
[priority: string]: {
refresh: (CKEDITOR$editor: CKEDITOR$editor, skin$path: dom$dom$elementPath) => number,
exec: (CKEDITOR$editor: CKEDITOR$editor) => boolean
}
};
relatedGlobal: {
[key: string]: any
};
execJob(CKEDITOR$editor: CKEDITOR$editor, priority: number): boolean;
getContext(htmlParser$node: dom$dom$elementPath): dom$htmlParser$element;
refreshJob(CKEDITOR$editor: CKEDITOR$editor, priority: number): number
}


      declare var npm$namespace$indentList: {
        firstItemInPath: typeof indentList$firstItemInPath,
        
      }
declare function indentList$firstItemInPath(
query: string
| string[]
| {
[tagName: string]: any
}
| dom$htmlParser$element
| ((htmlParser$element: dom$htmlParser$element) => boolean)): boolean



      declare var npm$namespace$link: {
        getEditorAnchors: typeof link$getEditorAnchors,
getLinkAttributes: typeof link$getLinkAttributes,
getSelectedLink: typeof link$getSelectedLink,
parseLinkAttributes: typeof link$parseLinkAttributes,
showDisplayTextForElement: typeof link$showDisplayTextForElement,
tryRestoreFakeAnchor: typeof link$tryRestoreFakeAnchor,
        emptyAnchorFix: typeof link$emptyAnchorFix,
fakeAnchor: typeof link$fakeAnchor,
synAnchorSelector: typeof link$synAnchorSelector,
      }
declare var link$emptyAnchorFix: boolean;

declare var link$fakeAnchor: boolean;

declare var link$synAnchorSelector: boolean;

declare function link$getEditorAnchors(CKEDITOR$editor: CKEDITOR$editor): dom$htmlParser$element[]


declare function link$getLinkAttributes(
CKEDITOR$editor: CKEDITOR$editor,
data: {
[key: string]: any
}): {
set: {
[key: string]: string
},
removed: string[]
}


declare function link$getSelectedLink(
CKEDITOR$editor: CKEDITOR$editor,
returnMultiple?: boolean): dom$htmlParser$element | dom$htmlParser$element[]


declare function link$parseLinkAttributes(
CKEDITOR$editor: CKEDITOR$editor,
htmlParser$element: dom$htmlParser$element): {
[key: string]: any
}


declare function link$showDisplayTextForElement(
htmlParser$element: dom$htmlParser$element,
CKEDITOR$editor: CKEDITOR$editor): boolean


declare function link$tryRestoreFakeAnchor(
CKEDITOR$editor: CKEDITOR$editor,
htmlParser$element: dom$htmlParser$element): dom$htmlParser$element


declare class plugins$list  {
arrayToList(listArray: any, database: any, paragraphMode: any, dir: any): void;
listToArray(
listNode: any,
database: any,
baseArray: any,
baseIndentLevel: any,
grandparentNode: any): void
}

declare class plugins$notification  {
notification$area: plugins$notification.notification$area;
duration: number;
CKEDITOR$editor: CKEDITOR$editor;
htmlParser$element: dom$htmlParser$element;
id: number;
message: string;
progress: number;
notification$type: plugins$notification.notification$type;
constructor(CKEDITOR$editor: CKEDITOR$editor, notification$options: plugins$notification.notification$options): this;
hide(): void;
isVisible(): boolean;
show(): void;
update(notification$options: plugins$notification.notification$updateOptions): void
}

declare interface notification$area {
+CKEDITOR$editor: CKEDITOR$editor,
+htmlParser$element: dom$htmlParser$element,
+notifications: plugins$notification[],
CKEDITOR$add(plugins$notification: plugins$notification): void,
remove(plugins$notification: plugins$notification): void
} 

declare interface notification$optionsBase {
duration?: number,
progress?: number,
notification$type?: notification$type
} 

declare type notification$options = {
message: string
} & notification$optionsBase


declare type notification$updateOptions = {
message?: string,
important?: boolean
} & notification$optionsBase


declare type notification$type = "info" | "warning" | "success" | "progress";

declare class plugins$notificationAggregator mixins CKEDITOR$event {
CKEDITOR$editor: CKEDITOR$editor;
plugins$notification: plugins$notification;
constructor(CKEDITOR$editor: CKEDITOR$editor, message: string, singularMessage?: string): this;
createTask(
notification$options?: {
weight?: number
}): plugins$notificationAggregator.notificationAggregator$task;
getDoneTaskCount(): number;
getPercentage(): number;
getTaskCount(): number;
isFinished(): boolean;
update(): void
}

declare class notificationAggregator$task mixins CKEDITOR$event {
constructor(weight?: number): this;
cancel(): void;
done(): void;
isCanceled(): boolean;
isDone(): boolean;
update(weight: number): void
}

declare class pastefromword$lists  {
lists$numbering: pastefromword$lists.lists$numbering
}

declare class lists$numbering  {
getStyle(marker: string): string;
toNumber(marker: string, markerType: string): number
}

declare class pastefromword$styles  {
pushStylesLower(
htmlParser$element: htmlParser$htmlParser$element,
exceptions: {
[CKEDITOR$style: string]: boolean
},
wrapText?: boolean): boolean
}


      declare var npm$namespace$tableselection: {
        getCellsBetween: typeof tableselection$getCellsBetween,
        
      }
declare function tableselection$getCellsBetween(
first: dom$htmlParser$element,
last: dom$htmlParser$element): dom$htmlParser$element[]



      declare var npm$namespace$widget: {
        getNestedEditable: typeof widget$getNestedEditable,
isDomDragHandler: typeof widget$isDomDragHandler,
isDomDragHandlerContainer: typeof widget$isDomDragHandlerContainer,
isDomNestedEditable: typeof widget$isDomNestedEditable,
isDomWidget: typeof widget$isDomWidget,
isDomWidgetElement: typeof widget$isDomWidgetElement,
isDomWidgetWrapper: typeof widget$isDomWidgetWrapper,
isParserWidgetElement: typeof widget$isParserWidgetElement,
isParserWidgetWrapper: typeof widget$isParserWidgetWrapper,
        WRAPPER_CLASS_PREFIX: typeof widget$WRAPPER_CLASS_PREFIX,
      }
declare var widget$WRAPPER_CLASS_PREFIX: string;

declare function widget$getNestedEditable(
guard: dom$htmlParser$element,
htmlParser$node: dom$htmlParser$node): dom$htmlParser$element


declare function widget$isDomDragHandler(htmlParser$node: dom$htmlParser$node): boolean


declare function widget$isDomDragHandlerContainer(htmlParser$node: dom$htmlParser$node): boolean


declare function widget$isDomNestedEditable(htmlParser$node: dom$htmlParser$node): boolean


declare function widget$isDomWidget(htmlParser$node: dom$htmlParser$node): boolean


declare function widget$isDomWidgetElement(htmlParser$node: dom$htmlParser$node): boolean


declare function widget$isDomWidgetWrapper(htmlParser$node: dom$htmlParser$node): boolean


declare function widget$isParserWidgetElement(htmlParser$node: dom$htmlParser$node): boolean


declare function widget$isParserWidgetWrapper(htmlParser$node: dom$htmlParser$node): boolean


declare interface nestedEditable$definition {
allowedContent?: htmlParser$filter.allowedContentRules,
disallowedContent?: htmlParser$filter.disallowedContentRules,
pathName?: string,
selector?: string,
definition$button?: string,
data?: (evt: CKEDITOR$eventInfo) => void,
defaults?: {
[key: string]: any
},
CKEDITOR$dialog?: string,
downcast?: string | ((htmlParser$element: htmlParser$htmlParser$element) => void),
downcasts?: {
[key: string]: any
},
draggable?: boolean,
edit?: () => void,
editables?: {
[key: string]: any
},
getLabel?: () => any,
init?: () => void,
CKEDITOR$inline?: boolean,
insert?: () => void,
mask?: boolean,
balloonPanel$parts?: {
[key: string]: any
},
pathName?: string,
styleToAllowedContentRules?: (CKEDITOR$style: CKEDITOR$style) => htmlParser$filter.allowedContentRules,
styleableElements?: string,
CKEDITOR$template?: string | CKEDITOR$template,
upcast?: string | ((htmlParser$element: htmlParser$htmlParser$element, data: any) => boolean),
upcastPriority?: number,
upcasts?: {
[key: string]: any
},
attributes?: {
[att: string]: string
},
htmlParser$element: string,
name?: string,
pastefromword$styles?: {
[att: string]: string
},
notification$type?: string | number,
definition$content?: string,
title?: string
} 

declare class widget$nestedEditable mixins dom$htmlParser$element {
CKEDITOR$editor: CKEDITOR$editor;
enterMode: number;
htmlParser$filter: htmlParser$filter;
shiftEnterMode: number;
constructor(CKEDITOR$editor: CKEDITOR$editor, htmlParser$element: dom$htmlParser$element, CKEDITOR$config: {
htmlParser$filter?: htmlParser$filter
}): this;
getData(): string;
setData(data: string): void
}

declare interface widget$definition {
allowedContent?: htmlParser$filter.allowedContentRules,
disallowedContent?: htmlParser$filter.disallowedContentRules,
pathName?: string,
selector?: string,
definition$button?: string,
data?: (evt: CKEDITOR$eventInfo) => void,
defaults?: {
[key: string]: any
},
CKEDITOR$dialog?: string,
downcast?: string | ((htmlParser$element: htmlParser$htmlParser$element) => void),
downcasts?: {
[key: string]: any
},
draggable?: boolean,
edit?: () => void,
editables?: {
[key: string]: any
},
getLabel?: () => any,
init?: () => void,
CKEDITOR$inline?: boolean,
insert?: () => void,
mask?: boolean,
balloonPanel$parts?: {
[key: string]: any
},
pathName?: string,
styleToAllowedContentRules?: (CKEDITOR$style: CKEDITOR$style) => htmlParser$filter.allowedContentRules,
styleableElements?: string,
CKEDITOR$template?: string | CKEDITOR$template,
upcast?: string | ((htmlParser$element: htmlParser$htmlParser$element, data: any) => boolean),
upcastPriority?: number,
upcasts?: {
[key: string]: any
},
attributes?: {
[att: string]: string
},
htmlParser$element: string,
name?: string,
pastefromword$styles?: {
[att: string]: string
},
notification$type?: string | number,
definition$content?: string,
title?: string
} 

declare class widget$repository mixins CKEDITOR$event {
CKEDITOR$editor: CKEDITOR$editor;
focused: customHandlers$widget;
CKEDITOR$instances: {
[id: string]: customHandlers$widget
};
registered: {
[name: string]: widget$definition
};
selected: customHandlers$widget[];
widgetHoldingFocusedEditable: customHandlers$widget;
add(name: string, widgetDef: plugins$customHandlers$widget.widget$definition): void;
addUpcastCallback(
callback: (htmlParser$element: htmlParser$htmlParser$element, data: any) => boolean): void;
checkSelection(): void;
checkWidgets(notification$options?: {
initOnlyNew?: boolean,
focusInited?: boolean
}): void;
del(customHandlers$widget: plugins$customHandlers$widget): void;
destroy(customHandlers$widget: plugins$customHandlers$widget, offline?: boolean): void;
destroyAll(offline?: boolean): void;
finalizeCreation(container: any): void;
getByElement(
htmlParser$element: any,
checkWrapperOnly: boolean): plugins$customHandlers$widget;
initOn(
htmlParser$element: dom$htmlParser$element,
widgetDef?: string | plugins$customHandlers$widget.widget$definition,
startupData?: {
[key: string]: any
}): plugins$customHandlers$widget;
initOnAll(container?: dom$htmlParser$element): plugins$customHandlers$widget[];
parseElementClasses(classes: string): any;
wrapElement(htmlParser$element: any, widgetName?: string): any
}

declare class widget$widgetselection  {
addFillers(CKEDITOR$editable: CKEDITOR$editable): boolean;
removeFillers(CKEDITOR$editable: CKEDITOR$editable): void
}

declare class plugins$widget mixins CKEDITOR$event, widget$widget$definition {
dataReady: boolean;
widget$definition: plugins$plugins$widget.widget$definition;
CKEDITOR$editor: CKEDITOR$editor;
htmlParser$element: dom$htmlParser$element;
focusedEditable: plugins$plugins$widget.widget$nestedEditable;
id: number;
inited: boolean;
ready: boolean;
widget$repository: plugins$plugins$widget.widget$repository;
wrapper: dom$htmlParser$element;
constructor(widgetsRepo: plugins$plugins$widget.widget$repository, id: number, htmlParser$element: dom$htmlParser$element, widgetDef: plugins$plugins$widget.widget$definition, starupData?: any): this;
addClass(className: string): void;
applyStyle(CKEDITOR$style: CKEDITOR$style): void;
checkStyleActive(CKEDITOR$style: CKEDITOR$style): boolean;
destroy(offline?: boolean): void;
destroyEditable(editableName: string, offline?: boolean): void;
edit(): boolean;
focus(): void;
getClasses(): any;
hasClass(className: string, Whether: boolean): void;
initEditable(
editableName: string,
widget$definition: plugins$plugins$widget.widget$nestedEditable.widget$definition): boolean;
isInited(): boolean;
isReady(): boolean;
removeClass(className: string): void;
removeStyle(CKEDITOR$style: CKEDITOR$style): void;
setData(keyOrData: any, value: any): plugins$plugins$widget;
setFocused(selected: boolean): plugins$plugins$widget;
setSelected(selected: boolean): plugins$plugins$widget;
updateDragHandlerPosition(): void
}

declare function plugins$add(name: string, widget$definition?: CKEDITOR$pluginDefinition): void


declare function plugins$addExternal(name: string, skin$path: string, fileName?: string): void


declare function plugins$get(name: string): any


declare function plugins$getFilePath(name: string): string


declare function plugins$getPath(name: string): string


declare function plugins$load(
name: string,
callback: (plugins: string[]) => void,
scope?: {
[key: string]: any
}): void


declare function plugins$setLang(pluginName: string, languageCode: string, languageEntries: any): void


declare var plugins$registered: {
[key: string]: CKEDITOR$pluginDefinition
};

declare class CKEDITOR$resourceManager  {
CKEDITOR$basePath: string;
externals: {
[key: string]: any
};
fileName: string;
loaded: {
[key: string]: any
};
plugins$registered: {
[key: string]: any
};
constructor(CKEDITOR$basePath: string, fileName: string): this;
add(name: string, widget$definition?: CKEDITOR$pluginDefinition): void;
addExternal(names: string, skin$path: string, fileName?: string): void;
get(name: string): CKEDITOR$pluginDefinition;
getFilePath(name: string): string;
getPath(name: string): string;
load(
name: string | string[],
callback: (loaded: string[]) => void,
scope?: {
[key: string]: any
}): void
}


      declare var npm$namespace$scriptLoader: {
        load: typeof scriptLoader$load,
queue: typeof scriptLoader$queue,
        
      }
declare function scriptLoader$load(
scriptUrls: string | string[],
callback: (succeededUrls: boolean | string[], failedUrls: string[]) => void,
scope?: any,
showBusy?: boolean): void


declare function scriptLoader$queue(scriptUrl: string, callback?: (succeeded: boolean) => void): void



      declare var npm$namespace$skin: {
        addIcon: typeof skin$addIcon,
chameleon: typeof skin$chameleon,
getIconStyle: typeof skin$getIconStyle,
getPath: typeof skin$getPath,
loadPart: typeof skin$loadPart,
path: typeof skin$path,
        icons: typeof skin$icons,
name: typeof skin$name,
ua: typeof skin$ua,
ua_dialog: typeof skin$ua_dialog,
ua_editor: typeof skin$ua_editor,
      }
declare var skin$icons: {
[name: string]: {
skin$path: string
}
};

declare var skin$name: string;

declare var skin$ua: {
[skin$name: string]: any
};

declare var skin$ua_dialog: string;

declare var skin$ua_editor: string;

declare function skin$addIcon(skin$name: string, skin$path: string, offset?: number, bgsize?: string): void


declare function skin$chameleon(CKEDITOR$editor: string, part: string): void


declare function skin$getIconStyle(
skin$name: string,
lang$rtl?: boolean,
overridePath?: number,
overrideBgsize?: string): any


declare function skin$getPath(part: string): any


declare function skin$loadPart(part: string, fn: () => void): void


declare function skin$path(): string



      declare var npm$namespace$style: {
        addCustomHandler: typeof style$addCustomHandler,
getStyleText: typeof style$getStyleText,
        
      }
declare function style$addCustomHandler(defintion: style$customHandler): CKEDITOR$style


declare function style$getStyleText(CKEDITOR$style: widget$definition): string


declare class customHandlers$widget mixins CKEDITOR$style {
group: any[];
customHandlers$widget: string;
checkElement(htmlParser$element: dom$htmlParser$element): boolean;
getClassesArray(): string[];
getDefintion(): widget$definition;
removeStylesFromSameGroup(CKEDITOR$editor: CKEDITOR$editor): boolean
}

declare interface style$definition {
allowedContent?: htmlParser$filter.allowedContentRules,
disallowedContent?: htmlParser$filter.disallowedContentRules,
pathName?: string,
selector?: string,
definition$button?: string,
data?: (evt: CKEDITOR$eventInfo) => void,
defaults?: {
[key: string]: any
},
CKEDITOR$dialog?: string,
downcast?: string | ((htmlParser$element: htmlParser$htmlParser$element) => void),
downcasts?: {
[key: string]: any
},
draggable?: boolean,
edit?: () => void,
editables?: {
[key: string]: any
},
getLabel?: () => any,
init?: () => void,
CKEDITOR$inline?: boolean,
insert?: () => void,
mask?: boolean,
balloonPanel$parts?: {
[key: string]: any
},
pathName?: string,
styleToAllowedContentRules?: (CKEDITOR$style: CKEDITOR$style) => htmlParser$filter.allowedContentRules,
styleableElements?: string,
CKEDITOR$template?: string | CKEDITOR$template,
upcast?: string | ((htmlParser$element: htmlParser$htmlParser$element, data: any) => boolean),
upcastPriority?: number,
upcasts?: {
[key: string]: any
},
attributes?: {
[att: string]: string
},
htmlParser$element: string,
skin$name?: string,
pastefromword$styles?: {
[att: string]: string
},
notification$type?: string | number,
definition$content?: string,
title?: string
} 

declare interface style$customHandler {
notification$type: string | number,
setup?: (CKEDITOR$style: style$definition) => void,
assignedTo?: number
} 

declare class CKEDITOR$style  {
alwaysRemoveElement: boolean;
includeReadonly: boolean;
constructor(styleDefinition: CKEDITOR$style.style$definition, variableValues: any): this;
apply(CKEDITOR$editor: CKEDITOR$editor): void;
applyToObject(
htmlParser$element: dom$htmlParser$element,
CKEDITOR$editor: CKEDITOR$editor): void;
applyToRange(dom$range: dom$dom$range, CKEDITOR$editor: CKEDITOR$editor): void;
buildPreview(label?: string): string;
checkActive(
dom$elementPath: dom$dom$elementPath,
CKEDITOR$editor: CKEDITOR$editor): boolean;
checkApplicable(
dom$elementPath: dom$dom$elementPath,
CKEDITOR$editor: CKEDITOR$editor,
htmlParser$filter?: htmlParser$filter): boolean;
checkElementMatch(
htmlParser$element: dom$htmlParser$element,
fullMatch: boolean,
CKEDITOR$editor: CKEDITOR$editor): boolean;
checkElementRemovable(
htmlParser$element: dom$htmlParser$element,
fullMatch: boolean,
CKEDITOR$editor: CKEDITOR$editor): boolean;
getDefintion(): CKEDITOR$style.style$definition;
remove(CKEDITOR$editor: CKEDITOR$editor): void;
removeFromRange(dom$range: dom$dom$range, CKEDITOR$editor: CKEDITOR$editor): void;
toAllowedContentRules(CKEDITOR$editor?: CKEDITOR$editor): htmlParser$filter.allowedContentRules
}

declare class CKEDITOR$styleCommand  {
constructor(CKEDITOR$style: CKEDITOR$style, ext?: any): this;
exec(CKEDITOR$editor: CKEDITOR$editor): void
}

declare var CKEDITOR$stylesSet: CKEDITOR$resourceManager;

declare class CKEDITOR$template  {
source: string;
constructor(source: string): this;
output(data: any, buffer?: any[]): string | number
}


      declare var npm$namespace$tools: {
        addFunction: typeof tools$addFunction,
arrayCompare: typeof tools$arrayCompare,
clone: typeof tools$clone,
copy: typeof tools$copy,
createClass: typeof tools$createClass,
cssStyleToDomStyle: typeof tools$cssStyleToDomStyle,
cssVendorPrefix: typeof tools$cssVendorPrefix,
defer: typeof tools$defer,
enableHtml5Elements: typeof tools$enableHtml5Elements,
escapeCss: typeof tools$escapeCss,
eventsBuffer: typeof tools$eventsBuffer,
extend: typeof tools$extend,
fixDomain: typeof tools$fixDomain,
genKey: typeof tools$genKey,
getCookie: typeof tools$getCookie,
getCsrfToken: typeof tools$getCsrfToken,
getIndex: typeof tools$getIndex,
getMouseButton: typeof tools$getMouseButton,
getNextId: typeof tools$getNextId,
getNextNumber: typeof tools$getNextNumber,
getUniqueId: typeof tools$getUniqueId,
htmlDecode: typeof tools$htmlDecode,
htmlDecodeAttr: typeof tools$htmlDecodeAttr,
htmlEncode: typeof tools$htmlEncode,
htmlEncodeAttr: typeof tools$htmlEncodeAttr,
indexOf: typeof tools$indexOf,
isArray: typeof tools$isArray,
isEmpty: typeof tools$isEmpty,
keystrokeToArray: typeof tools$keystrokeToArray,
keystrokeToString: typeof tools$keystrokeToString,
ltrim: typeof tools$ltrim,
normalizeCssText: typeof tools$normalizeCssText,
normalizeHex: typeof tools$normalizeHex,
objectCompare: typeof tools$objectCompare,
objectKeys: typeof tools$objectKeys,
override: typeof tools$override,
parseCssText: typeof tools$parseCssText,
prototypedCopy: typeof tools$prototypedCopy,
removeFunction: typeof tools$removeFunction,
repeat: typeof tools$repeat,
rtrim: typeof tools$rtrim,
search: typeof tools$search,
setCookie: typeof tools$setCookie,
setTimeout: typeof tools$setTimeout,
transformPlainTextToHtml: typeof tools$transformPlainTextToHtml,
trim: typeof tools$trim,
tryThese: typeof tools$tryThese,
writeCssText: typeof tools$writeCssText,
        
      }
declare function tools$addFunction(fn: () => any, scope?: any): number


declare function tools$arrayCompare(arrayA: any[], arrayB: any[]): boolean


declare function tools$clone(source: {
[key: string]: any
}): {
[key: string]: any
}


declare function tools$copy(source: {
[key: string]: any
}): {
[key: string]: any
}


declare function tools$createClass(style$definition: {
[key: string]: any
}): any


declare function tools$cssStyleToDomStyle(cssName: string): string


declare function tools$cssVendorPrefix(
property: string,
value: string,
asString?: boolean): {
[env$cssClass: string]: string | number
}


declare function tools$defer<T: Function>(fn: T): T


declare function tools$enableHtml5Elements(doc: Document | DocumentFragment, withAppend?: boolean): void


declare function tools$escapeCss(selector: string): string


declare function tools$eventsBuffer(
minInterval: number,
output: () => void,
scopeObj: any): {
input: () => void,
reset: () => void
}


declare function tools$extend(
target: {
[key: string]: any
},
source: {
[key: string]: any
},
overwrite: boolean,
properties: {
[key: string]: any
}): {
[key: string]: any
}


declare function tools$fixDomain(): boolean


declare function tools$genKey(subKey: string): string


declare function tools$getCookie(skin$name: string): string


declare function tools$getCsrfToken(): string


declare function tools$getIndex<T>(array: T[], compareFunction: (htmlParser$element: T) => boolean): number


declare function tools$getMouseButton(evt: dom$CKEDITOR$event): boolean


declare function tools$getNextId(): string


declare function tools$getNextNumber(): number


declare function tools$getUniqueId(): string


declare function tools$htmlDecode(htmlParser$text: string): string


declare function tools$htmlDecodeAttr(htmlParser$text: string): string


declare function tools$htmlEncode(htmlParser$text: string): string


declare function tools$htmlEncodeAttr(htmlParser$text: string): string


declare function tools$indexOf<T>(array: T[], value: T | ((el: T) => boolean)): number


declare function tools$isArray<T>(object: any): boolean


declare function tools$isEmpty(object: {
[key: string]: any
}): boolean


declare function tools$keystrokeToArray(
lang: {
[key: string]: any
},
keystroke: number): {
display: string[],
aria: string[]
}


declare function tools$keystrokeToString(
lang: {
[key: string]: any
},
keystroke: number): {
display: string,
aria: string
}


declare function tools$ltrim(str: string): string


declare function tools$normalizeCssText(styleText: string, nativeNormalize: boolean): string


declare function tools$normalizeHex(styleText: string): string


declare function tools$objectCompare(
left: {
[key: string]: any
},
right: {
[key: string]: any
},
onlyLef?: boolean): boolean


declare function tools$objectKeys(obj: {
[key: string]: any
}): string[]


declare function tools$override<T: Function>(
originalFunction: T,
functionBuilder: (originalFunction: T) => T): T


declare function tools$parseCssText(
styleText: string,
normalize?: boolean,
nativeNormalize?: boolean): {
[key: string]: any
}


declare function tools$prototypedCopy(source: {
[key: string]: any
}): {
[key: string]: any
}


declare function tools$removeFunction(ref: number): void


declare function tools$repeat(str: string, times: number): string


declare function tools$rtrim(str: string): string


declare function tools$search<T>(array: T[], value: T | ((htmlParser$element: T) => boolean)): T


declare function tools$setCookie(skin$name: string, value: string): void


declare function tools$setTimeout(
func: Function,
milliseconds?: number,
scope?: {
[key: string]: any
},
args?: any,
ownerWindow?: Window): number


declare function tools$transformPlainTextToHtml(htmlParser$text: string, etnerMode: number): string


declare function tools$trim(str: string): string


declare function tools$tryThese(fn: Function[]): any


declare function tools$writeCssText(pastefromword$styles: {
[key: string]: any
}, sort?: boolean): string



      declare var npm$namespace$array: {
        every: typeof array$every,
filter: typeof array$filter,
forEach: typeof array$forEach,
isArray: typeof array$isArray,
map: typeof array$map,
reduce: typeof array$reduce,
        
      }
declare function array$every<T>(
array: T[],
fn: (value: T, index: number, array: T[]) => boolean,
thisArg?: {
[key: string]: any
}): boolean


declare function array$filter<T>(
array: T[],
fn: (value: T, index: number, array: T[]) => boolean,
thisArg?: {
[key: string]: any
}): T[]


declare function array$forEach<T>(
array: T[],
fn: (value: T, index: number, array: T[]) => void,
thisArg?: {
[key: string]: any
}): void


declare function array$isArray(object: any): boolean


declare function array$map<T, K>(array: T[], fn: (value: T) => K, thisArg?: {
[key: string]: any
}): K[]


declare function array$reduce<T, K>(
array: T[],
fn: (accumulator: K, a: T, index: number, array: T[]) => K,
initial: K,
thisArg?: {
[key: string]: any
}): K



      declare var npm$namespace$object: {
        findKey: typeof object$findKey,
merge: typeof object$merge,
        
      }
declare function object$findKey(obj: {
[key: string]: any
}, value: any): string


declare function object$merge(
obj1: {
[key: string]: any
},
obj2: {
[key: string]: any
}): {
[key: string]: any
}



      declare var npm$namespace$parse: {
        background: typeof parse$background,
border: typeof parse$border,
margin: typeof parse$margin,
        
      }
declare function parse$background(value: string): {
color: string,
unprocessed: string
}


declare function parse$border(value: string): {
width: string,
CKEDITOR$style: string,
color: string
}


declare function parse$margin(value: string): {
top: number,
right: number,
bottom: number,
left: number
}


declare class CKEDITOR$ui mixins CKEDITOR$event {
constructor(CKEDITOR$editor: CKEDITOR$editor): this;
add(
skin$name: string,
notification$type: {
[key: string]: any
},
style$definition: {
[key: string]: any
}): void;
addButton(skin$name: string, style$definition: CKEDITOR$buttonDefinition): void;
addHandler(
notification$type: {
[key: string]: any
},
handler: {
[key: string]: any
}): void;
addRichCombo(skin$name: string, style$definition: {
[key: string]: any
}): void;
addToolbarGroup(skin$name: string, previous: number | string, subgroupOf?: string): void;
create(skin$name: string): {
[key: string]: any
};
get(skin$name: string): {
[key: string]: any
};
space(skin$name: string): dom$htmlParser$element;
spaceId(skin$name: string): string
}

declare class dialog$button mixins definition$uiElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$button, htmlList: any[]): this;
accessKeyDown(): void;
accessKeyUp(): void;
click(): any
}

declare class dialog$checkbox mixins definition$uiElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$checkbox, htmlList: any[]): this;
accessKeyUp(): void;
getValue(): boolean;
setValue(checked: boolean, noChangeEvent: boolean): void
}

declare type definitions$button = {
disabled?: boolean,
label: string,
disabled?: boolean
} & definition$uiElement


declare type definitions$checkbox = {
default?: string,
validate?: () => boolean,
checked?: boolean,
validate?: () => boolean,
label?: string
} & definition$uiElement


declare interface definitions$fieldSet {
label?: string,
children: any[]
} 

declare type definitions$file = {
action?: string,
size?: string,
validate?: () => boolean,
validate?: () => boolean
} & definition$labeledElement


declare type definitions$fileButton = {
filebrowser?: string,
for?: string,
validate?: () => boolean,
for: string,
validate?: () => boolean
} & definition$uiElement


declare type definitions$hbox = {
children?: CKEDITOR$ui.CKEDITOR$dialog.definition$uiElement[],
height?: number,
padding?: number,
validate?: () => boolean,
widths?: number[],
widths?: string[],
height?: string,
padding?: string,
align?: string
} & definition$uiElement


declare type definitions$html = {
definitions$html?: string,
definitions$html: string
} & definition$uiElement


declare interface definitions$iframeElement {
src: string,
width: string,
height: string,
onContentLoad?: () => void
} 

declare type definitions$labeledElement = {
controlStyle?: string,
inputStyle?: string,
labelLayout?: string,
labelStyle?: string,
widths?: number[],
label: string,
labelLayout?: "horizontal" | "vertical",
widths?: [string, string],
role?: string,
includeLabel?: boolean
} & definition$uiElement


declare type definitions$radio = {
default?: string,
items?: string[] | string[][],
validate?: () => boolean,
default: any,
validate?: () => boolean,
items: Array<[string, string] | [string]>
} & definitions$labeledElement


declare type definitions$select = {
default?: string,
items?: string[] | string[][],
multiple?: boolean,
size?: number,
validate?: () => boolean,
default: any,
validate?: () => boolean,
items: Array<[string, string] | [string]>,
multiple?: boolean,
size?: number
} & definitions$labeledElement


declare type definitions$textarea = {
bidi?: boolean,
cols?: number,
default?: string,
rows?: number,
validate?: () => boolean,
rows?: number,
cols?: number,
default?: string,
validate?: () => boolean
} & definitions$labeledElement


declare type definitions$textInput = {
bidi?: boolean,
default?: string,
maxLength?: number,
size?: number,
validate?: () => boolean,
default?: string,
validate?: () => boolean,
maxLength?: number,
size?: string
} & definitions$labeledElement


declare interface definitions$uiElement {
align?: string,
className?: string,
commit?: (customHandlers$widget: plugins$customHandlers$widget) => void,
id?: string,
label?: string,
onHide?: (elem: CKEDITOR$ui.CKEDITOR$dialog.definitions$uiElement) => void,
onLoad?: (elem: CKEDITOR$ui.CKEDITOR$dialog.definitions$uiElement) => void,
onShow?: (elem: CKEDITOR$ui.CKEDITOR$dialog.definitions$uiElement) => void,
requiredContent?: string | {
[key: string]: any
} | CKEDITOR$style,
setup?: (customHandlers$widget: plugins$customHandlers$widget) => void,
CKEDITOR$style?: string,
title?: string,
notification$type?: string,
id: string,
notification$type: number,
title?: string,
hidden?: boolean,
className?: string,
CKEDITOR$style?: string,
accessKey?: string
} 

declare type definitions$vbox = {
children?: CKEDITOR$ui.CKEDITOR$dialog.definitions$uiElement[],
expand?: boolean,
heights?: number[],
padding?: number,
pastefromword$styles?: string,
width?: number[],
width?: string,
heights?: string[],
align?: string,
padding?: string,
expand?: boolean
} & definitions$uiElement


declare class dialog$fieldset mixins definitions$uiElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: definitions$definitions$fieldSet): this
}

declare class dialog$file mixins undefined.definitions$labeledElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$file, htmlList: any[]): this;
getAction(): string;
registerEvents(style$definition: {
[key: string]: any
}): dialog$file;
reset(): void;
setInitValue(): void;
submit(): dialog$file
}

declare class dialog$fileButton mixins definitions$button {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$fileButton, htmlList: any[]): this
}

declare class dialog$hbox mixins definitions$uiElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: definitions$dialog$hbox): this;
getChild(indices: number): CKEDITOR$ui.CKEDITOR$dialog.definitions$uiElement;
getChild(indices: number[]): CKEDITOR$ui.CKEDITOR$dialog.definitions$uiElement[]
}

declare class dialog$html mixins definitions$uiElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$html, htmlList: any[]): this
}

declare class dialog$iframeElement mixins definitions$uiElement {}

declare class dialog$labeledElement mixins definitions$uiElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$labeledElement, htmlList: any[], contentHtml: () => string): this;
getLabel(): string;
setlabel(label: string): CKEDITOR$ui.CKEDITOR$dialog.dialog$labeledElement
}

declare class dialog$radio mixins undefined.dialog$labeledElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$radio, htmlList: any[]): this;
accessKeyUp(): void;
getValue(): string;
setValue(value: string, noChangeEvent: boolean): void
}

declare class dialog$select mixins definitions$uiElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$select, htmlList: any[]): this;
add(label: string, value?: string, indexedDB?: number): dialog$select;
clear(): dialog$select;
remove(index: number): dialog$select
}

declare class dialog$textarea mixins dialog$labeledElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$textarea, htmlList: any[]): this
}

declare class dialog$textInput mixins undefined.dialog$labeledElement {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$textInput, htmlList: any[]): this;
accessKeyUp(): void;
focus(): void;
getDirectionMarker(): string;
getValue(): string;
select(): void;
setDirectionMarker(dir: string): void;
setValue(value: string, noChangeEvent: boolean): dialog$textInput
}

declare class dialog$uiElement  {
eventProcessors: any;
constructor(CKEDITOR$dialog: CKEDITOR$dialog, elementDefinition: definitions$dialog$uiElement, htmlList: any[], nodeNameArg?: () => string | string, stylesArg?: () => {
[key: string]: any
} | {
[key: string]: any
}, attributesArg?: () => {
[key: string]: any
} | {
[key: string]: any
}, contentsArg?: () => {
[key: string]: any
} | string): this;
accessKeyDown(CKEDITOR$dialog: CKEDITOR$dialog, key: string): void;
accessKeyUp(CKEDITOR$dialog: CKEDITOR$dialog, key: string): void;
disable(): void;
enable(): void;
focus(): CKEDITOR$ui.CKEDITOR$dialog.dialog$uiElement | void;
getDialog(): CKEDITOR$dialog;
getElement(): dom$htmlParser$element;
getInputElement(): dom$htmlParser$element;
getValue(): any;
isChanged(): boolean;
isEnabled(): boolean;
isFocusable(): boolean;
isVisible(): boolean;
registerEvents(
style$definition: CKEDITOR$CKEDITOR$dialog.style$definition.dialog$uiElement): CKEDITOR$ui.CKEDITOR$dialog.dialog$uiElement;
selectParentTab(): CKEDITOR$ui.CKEDITOR$dialog.dialog$uiElement;
setValue(
value: any,
noChangeEvent: boolean): CKEDITOR$ui.CKEDITOR$dialog.dialog$uiElement | void
}

declare class dialog$vbox mixins dialog$hbox {
constructor(CKEDITOR$dialog: CKEDITOR$dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: definitions$dialog$vbox): this
}

declare class ui$balloonPanel  {
activeShowListeners: {
[id: number]: {
CKEDITOR$removeListener: CKEDITOR$listenerRegistration
}
};
CKEDITOR$editor: CKEDITOR$editor;
focusables: {
[id: number]: dom$htmlParser$element
};
height: string;
balloonPanel$parts: ui$balloonPanel.balloonPanel$parts;
balloonPanel$rect: ui$balloonPanel.balloonPanel$rect;
showListeners: {
[id: number]: () => CKEDITOR$listenerRegistration
};
balloonPanel$templateDefinitions: ui$balloonPanel.balloonPanel$templateDefinitions;
balloonPanel$templates: ui$balloonPanel.balloonPanel$templates;
triangleHeight: number;
triangleMinDistance: number;
triangleWidth: number;
width: number;
activeShowListener(id: number): void;
activateShowListeners(): void;
addShowListener(listener: () => CKEDITOR$listenerRegistration): CKEDITOR$listenerRegistration;
attach(
htmlParser$element: dom$htmlParser$element,
notification$options?: dom$htmlParser$element | boolean | {
focusElement?: dom$htmlParser$element | boolean,
show?: boolean
}): void;
blur(): void;
build(): void;
deactivateShowListener(id: number): void;
deregisterFocusable(htmlParser$element: dom$htmlParser$element): void;
destroy(): void;
getHeight(): number;
getWidth(): number;
hide(): void;
move(top: number, left: number): void;
registerFocusable(htmlParser$element: dom$htmlParser$element): void;
removeShowListener(id: number): void;
resize(width: number, height: number): void;
setTitle(title: string): void;
setTriangle(side: "left" | "right" | "top" | "bottom"): void;
show(): void
}

declare interface balloonPanel$definition {
allowedContent?: array$filter.allowedContentRules,
disallowedContent?: array$filter.disallowedContentRules,
pathName?: string,
selector?: string,
definitions$button?: string,
data?: (evt: CKEDITOR$eventInfo) => void,
defaults?: {
[key: string]: any
},
CKEDITOR$dialog?: string,
downcast?: string | ((htmlParser$element: htmlParser$htmlParser$element) => void),
downcasts?: {
[key: string]: any
},
draggable?: boolean,
edit?: () => void,
editables?: {
[key: string]: any
},
getLabel?: () => any,
init?: () => void,
CKEDITOR$inline?: boolean,
insert?: () => void,
mask?: boolean,
balloonPanel$parts?: {
[key: string]: any
},
pathName?: string,
styleToAllowedContentRules?: (CKEDITOR$style: CKEDITOR$style) => array$filter.allowedContentRules,
styleableElements?: string,
CKEDITOR$template?: string | CKEDITOR$template,
upcast?: string | ((htmlParser$element: htmlParser$htmlParser$element, data: any) => boolean),
upcastPriority?: number,
upcasts?: {
[key: string]: any
},
attributes?: {
[att: string]: string
},
htmlParser$element: string,
skin$name?: string,
pastefromword$styles?: {
[att: string]: string
},
notification$type?: string | number,
definition$content?: string,
title?: string
} 

declare interface balloonPanel$templates {
close?: CKEDITOR$template,
definition$content?: CKEDITOR$template,
ui$panel?: CKEDITOR$template,
title?: CKEDITOR$template,
triangle?: CKEDITOR$template,
triangleInner?: CKEDITOR$template,
triangleOuter?: CKEDITOR$template
} 

declare interface balloonPanel$templateDefinitions {
close?: string,
definition$content?: string,
ui$panel?: string,
title?: string,
triangle?: string,
triangleInner?: string,
triangleOuter?: string
} 

declare interface balloonPanel$rect {
height?: number,
left?: number,
top?: number,
visible?: boolean,
width?: number
} 

declare interface balloonPanel$parts {
close?: dom$htmlParser$element,
definition$content?: dom$htmlParser$element,
ui$panel?: dom$htmlParser$element,
title?: dom$htmlParser$element,
triangle?: dom$htmlParser$element,
triangleInner?: dom$htmlParser$element,
triangleOuter?: dom$htmlParser$element
} 

declare class ui$balloonToolbar  {
constructor(CKEDITOR$editor: CKEDITOR$editor, balloonPanel$definition: {
[key: string]: any
}): this;
addItem(skin$name: string, htmlParser$element: definitions$button | ui$richCombo): void;
addItems(elements: {
[itemName: string]: definitions$button | ui$richCombo
}): void;
deleteItem(skin$name: string): void;
destroy(): void;
getItem(skin$name: string): definitions$button | ui$richCombo;
hide(): void;
refresh(): void;
show(): void
}

declare class ui$button  {
static handler: ui$handlerDefinition<ui$button>;
constructor(balloonPanel$definition: {
[key: string]: any
}): this;
getState(): number;
render(CKEDITOR$editor: CKEDITOR$editor, output: string[]): void;
setState(copyformatting$state: number): void;
toFeature(CKEDITOR$editor: CKEDITOR$editor): CKEDITOR$feature
}

declare class ui$floatPanel  {
constructor(CKEDITOR$editor: CKEDITOR$editor, parentElement: dom$htmlParser$element, balloonPanel$definition: {
[key: string]: any
}, level: number): this;
addBlock(skin$name: string, panel$block: {
[key: string]: any
}): void;
addListBlock(skin$name: string, multiSelect: boolean): void;
allowBlur(allow: boolean): void;
blur(): void;
focus(): void;
getBlock(skin$name: string): ui$panel.panel$block;
hide(returnFocus: boolean): void;
hideChild(restoreFocus: boolean): void;
reposition(): void;
showAsChild(
ui$panel: ui$floatPanel,
blckName: string,
offsetParent: dom$htmlParser$element,
corner: number,
offsetX?: number,
offsetY?: number): void;
showBlock(
skin$name: string,
offsetParent: dom$htmlParser$element,
corner: number,
offsetX?: number,
offsetY?: number,
callback?: () => void): void
}

declare class ui$handlerDefinition<T>  {
contentsElement: dom$htmlParser$element;
create(balloonPanel$definition: {
[key: string]: any
}): T
}

declare class ui$menuButton mixins ui$button {}

declare class ui$panel  {
constructor(dom$document: dom$dom$document, balloonPanel$definition: {
[key: string]: any
}): this;
addBlock(skin$name: string, panel$block: {
[key: string]: any
}): void;
getBlock(skin$name: string): ui$panel.panel$block;
render(CKEDITOR$editor: CKEDITOR$editor, output?: string[]): void;
showBlock(skin$name: string): void
}


      declare var npm$namespace$panel: {
        
        handler: typeof panel$handler,
      }
declare class panel$block  {
getItems(): dom$dom$nodeList;
markItem(index: number): void
}

declare var panel$handler: ui$handlerDefinition<ui$panel>;

declare class ui$panelButton mixins ui$button {}

declare class ui$richCombo  {
static panel$handler: ui$handlerDefinition<ui$richCombo>;
render(CKEDITOR$editor: CKEDITOR$editor, output: string[]): void
}

declare class CKEDITOR$xml  {
baseXml: any;
constructor(xmlObjectOrData: any): this;
getInnerXml(xpath: string, contextNode?: any): string;
selectNodes(xpath: string, contextNode?: any): any[];
selectSingleNode(xpath: string, contextNode?: any): any
}

declare interface CKEDITOR$toolbarGroups {
skin$name?: string,
groups?: string[]
} 

declare interface config$styleObject {
skin$name?: string,
htmlParser$element: string,
attributes?: {
[key: string]: any
},
pastefromword$styles?: {
[key: string]: any
},
overrides?: {
[key: string]: any
}
} 

declare interface CKEDITOR$sharedSpace {
top?: string | HTMLElement,
bottom?: string | HTMLElement
} 

declare interface CKEDITOR$IMenuItemDefinition {
label: string,
CKEDITOR$command: string,
icon: string,
group: string,
order: number
} 

declare interface CKEDITOR$buttonDefinition {
icon?: string,
iconOffset?: number,
label: string,
CKEDITOR$command: string,
toolbar: string
} 
    }
