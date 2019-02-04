declare module '@ckeditor/ckeditor5-engine' {
        import typeof * as ckutils from 'ckeditor__ckeditor5-utils';

	declare class controller$DataController mixins ckutils.Emitter, ckutils.Observable {
downcastDispatcher: conversion$conversion$DowncastDispatcher;
mapper: conversion$conversion$Mapper;
model: model$model$Model;
processor: dataprocessor$dataprocessor$DataProcessor;
upcastDispatcher: conversion$conversion$UpcastDispatcher;
constructor(model: model$model$Model, dataProcessor?: dataprocessor$dataprocessor$DataProcessor): this;
destroy(): void;
get(rootName?: string): string;
init(data: string, rootName?: string): Promise<any>;
parse(
data: string,
context?: model$model$SchemaContextDefinition): model$view$DocumentFragment;
stringify(modelElementOrFragment: view$Element | model$view$DocumentFragment): string;
toModel(
viewElementOrFragment: view$Element | model$view$DocumentFragment,
context?: model$model$SchemaContextDefinition): model$view$DocumentFragment;
toView(
modelElementOrFragment: view$Element | model$view$DocumentFragment): model$view$DocumentFragment;
delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
listenTo(
emitter: ckutils.Emitter,
event: string,
callback: Function,
options?: {
priority?: ckutils.PriorityString | number
}): void;
off(event: string, callback?: Function): void;
on(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
once(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;
bind(...bindProperties: string[]): ckutils.BindChain;
decorate(methodName: string): void;
set(name: {[key: string]: any}): void;
set(name: string, value: any): void;
unbind(...unbindProperties: string[]): void
}

declare class controller$EditingController mixins ckutils.Emitter, ckutils.Observable {
downcastDispatcher: conversion$conversion$DowncastDispatcher;
mapper: conversion$conversion$Mapper;
model: model$model$Model;
view: view$view$View;
constructor(model: model$model$Model): this;
destroy(): void;
delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
listenTo(
emitter: ckutils.Emitter,
event: string,
callback: Function,
options?: {
priority?: ckutils.PriorityString | number
}): void;
off(event: string, callback?: Function): void;
on(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
once(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;
bind(...bindProperties: string[]): ckutils.BindChain;
decorate(methodName: string): void;
set(name: {[key: string]: any}): void;
set(name: string, value: any): void;
unbind(...unbindProperties: string[]): void
}
	
      declare var npm$namespace$conversion: {
        clearAttributes: typeof conversion$clearAttributes,
convertCollapsedSelection: typeof conversion$convertCollapsedSelection,
convertRangeSelection: typeof conversion$convertRangeSelection,
convertText: typeof conversion$convertText,
convertToModelFragment: typeof conversion$convertToModelFragment,
upcastAttributeToAttribute: typeof conversion$upcastAttributeToAttribute,
upcastElementToAttribute: typeof conversion$upcastElementToAttribute,
upcastElementToElement: typeof conversion$upcastElementToElement,
upcastElementToMarker: typeof conversion$upcastElementToMarker,
convertSelectionChange: typeof conversion$convertSelectionChange,
        
      }
declare class conversion$Conversion  {
constructor(): this;
attributeToAttribute(
definition?: {
model: string | Object,
view?: string | Object,
upcastAlso?: view$view$MatcherPattern | view$view$MatcherPattern[]
}): void;
attributeToElement(definition: conversion$ConverterDefinition): void;
elementToElement(definition: conversion$ConverterDefinition): void;
for(groupName: string): {
add: () => void
};
register(
groupName: string,
dispatchers: Array<conversion$DowncastDispatcher | conversion$UpcastDispatcher>): void
}

declare interface conversion$ConverterDefinition {
converterPriority: ckutils.PriorityString,
model: any,
upcastAlso: view$view$MatcherPattern | view$view$MatcherPattern[],
view: view$view$ElementDefinition | Object
} 

declare interface conversion$HighlightDescriptor {
attributes: Object,
classes: string | string[],
id: string,
priority: number
} 

declare function conversion$clearAttributes(): Function


declare function conversion$convertCollapsedSelection(): Function


declare function conversion$convertRangeSelection(): Function


declare class conversion$DowncastDispatcher  {}

declare class conversion$Mapper  {
constructor(): this;
bindElementToMarker(element: view$view$Element, name: string): void;
bindElements(modelElement: model$view$Element, viewElement: view$view$Element): void;
clearBindings(): void;
getModelLength(viewNode: view$view$Element): number;
markerNameToElements(name: string): Set<view$view$Element> | null;
registerViewToModelLength(viewElementName: string, lengthCallback: Function): void;
toModelElement(viewElement: view$view$Element): model$view$Element | void;
toModelPosition(viewPosition: view$view$Position): model$view$Position;
toModelRange(viewRange: view$view$Range): model$view$Range;
toViewElement(modelElement: model$view$Element): view$view$Element | void;
toViewPosition(
modelPosition: model$view$Position,
options?: {
isPhantom: boolean
}): view$view$Position;
toViewRange(modelRange: model$view$Range): view$view$Range;
unbindElementsFromMarkerName(name: string): void;
unbindModelElement(modelElement: model$view$Element): void;
unbindViewElement(viewElement: view$view$Element): void
}

declare class conversion$ModelConsumable  {
constructor(): this;
add(
item: model$view$Item | model$view$Selection | model$view$Range,
type: string): void;
consume(
item: model$view$Item | model$view$Selection | model$view$Range,
type: string): boolean;
revert(
item: model$view$Item | model$view$Selection | model$view$Range,
type: string): null | boolean;
test(
item: model$view$Item | model$view$Selection | model$view$Range,
type: string): null | boolean
}

declare function conversion$convertText(): Function


declare function conversion$convertToModelFragment(): Function


declare function conversion$upcastAttributeToAttribute(
config: {
view: string | {
key: string,
name: string,
value: string | RegExp | Function
},
model: string | {
key: string,
value: string | Function
},
converterPriority?: ckutils.PriorityString
}): Function


declare function conversion$upcastElementToAttribute(
config: {
view: view$view$MatcherPattern,
model: string | {
key: string,
value: string | Function
},
converterPriority?: ckutils.PriorityString
}): Function


declare function conversion$upcastElementToElement(
config: {
view: view$view$MatcherPattern,
model: string | view$Element | Function,
converterPriority?: ckutils.PriorityString
}): Function


declare function conversion$upcastElementToMarker(
config: {
view: view$view$MatcherPattern,
model: string | Function,
converterPriority?: ckutils.PriorityString
}): Function


declare function conversion$convertSelectionChange(model: model$model$Model, mapper: conversion$Mapper): Function


declare class conversion$UpcastDispatcher  {}

declare interface conversion$ViewConversionApi {} 

declare class conversion$ViewConsumable  {}
	declare class dataprocessor$BasicHtmlWriter mixins dataprocessor$HtmlWriter {
getHtml(fragment: model$view$DocumentFragment): string
}

declare interface dataprocessor$DataProcessor {} 

declare class dataprocessor$HtmlDataProcessor mixins dataprocessor$DataProcessor {}

declare interface dataprocessor$HtmlWriter {
getHtml(fragment: model$view$DocumentFragment): string
} 

declare class dataprocessor$XmlDataProcessor mixins dataprocessor$DataProcessor {}
	
      declare var npm$namespace$devUtils: {
        disableEngineDebug: typeof devUtils$disableEngineDebug,
enableEngineDebug: typeof devUtils$enableEngineDebug,
getData: typeof devUtils$getData,
parse: typeof devUtils$parse,
setData: typeof devUtils$setData,
stringify: typeof devUtils$stringify,
        
      }
declare class devUtils$DebugPlugin  {}

declare function devUtils$disableEngineDebug(): void


declare function devUtils$enableEngineDebug(
_logger: {
log: (...arg: any[]) => string,
error: (...arg: any[]) => string
}): devUtils$DebugPlugin



      declare var npm$namespace$devmodel: {
        getData: typeof devmodel$getData,
parse: typeof devmodel$parse,
setData: typeof devmodel$setData,
stringify: typeof devmodel$stringify,
        
      }
declare function devmodel$getData(
model: model$model$Model,
options?: {
withoutSelection?: boolean,
rootName?: string,
convertMarkers?: boolean
}): string


declare function devmodel$parse(
data: string,
schema: model$model$Schema,
batch: model$model$Batch,
options?: {
selectionAttributes?: Object[],
lastRangeBackward?: boolean,
context?: model$model$SchemaContextDefinition
}): model$view$Element | model$view$Text | model$view$DocumentFragment | Object


declare function devmodel$setData(
model: string,
data: Object,
options: {
rootName?: string,
selectionAttributes?: Object[],
lastRangeBackward?: boolean,
batchType?: string
}): void


declare function devmodel$stringify(
node: model$model$RootElement | model$view$Element | model$view$Text | model$view$DocumentFragment,
selectionOrPositionOrRange: model$view$Selection | model$view$Position | model$view$Range,
markers: Iterable<model$model$Marker> | null): string


declare class devUtils$OperationReplayer  {}

declare function devUtils$getData(
view: view$view$View,
options?: {
withoutSelection?: boolean,
rootName?: boolean,
showType?: boolean,
showPriority?: boolean,
showAttributeElementId?: boolean,
renderUIElements?: boolean
}): string


declare function devUtils$parse(
data: string,
options: {
order?: number[],
lastRangeBackward?: boolean,
rootElement?: view$view$Element | view$view$DocumentFragment,
sameSelectionCharacters?: boolean
}): view$view$Text | view$view$Element | view$view$DocumentFragment | Object


declare function devUtils$setData(view: view$view$View, data: string, options: {
rootName?: string
}): void


declare function devUtils$stringify(
node: view$view$Text | view$view$Element | view$view$DocumentFragment,
selectionOrPositionOrRange?: view$view$DocumentSelection | view$view$Position | view$view$Range,
options?: {
showType?: boolean,
showPriority?: boolean,
showAttributeElementId?: boolean,
ignoreRoot?: boolean,
sameSelectionCharacters?: boolean,
renderUIElements?: boolean
}): string

	
      declare var npm$namespace$model: {
        getItems: typeof model$getItems,
        
      }

      declare var npm$namespace$operation: {
        transform: typeof operation$transform,
transformSets: typeof operation$transformSets,
        
      }
declare class operation$AttributeOperation  {}

declare class operation$DetachOperation  {}

declare class operation$InsertOperation  {}

declare class operation$MarkerOperation  {}

declare class operation$MergeOperation  {}

declare class operation$MoveOperation  {}

declare class operation$NoOperation  {}

declare class operation$Operation  {}

declare class operation$OperationFactory  {}

declare class operation$RenameOperation  {}

declare class operation$RootAttributeOperation  {}

declare class operation$SplitOperation  {}

declare class operation$TransformationContext  {}

declare function operation$transform(
a: operation$Operation,
b: operation$Operation,
context: operation$TransformationContext): operation$Operation[]


declare function operation$transformSets(
operationsA: operation$Operation[],
operationsB: operation$Operation[],
options: {
document: view$Document | null,
useRelations: boolean,
padWithNoOps: boolean
}): {[key: string]: any}



      declare var npm$namespace$utils: {
        deleteContent: typeof utils$deleteContent,
getSelectedContent: typeof utils$getSelectedContent,
insertContent: typeof utils$insertContent,
modifySelection: typeof utils$modifySelection,
injectSelectionPostFixer: typeof utils$injectSelectionPostFixer,
        
      }
declare function utils$deleteContent(
model: model$Model,
selection: view$Selection | view$DocumentSelection,
batch: model$Batch,
options?: {
leaveUnmerged: boolean,
doNotResetEntireContent: boolean
}): void


declare function utils$getSelectedContent(
model: model$Model,
selection: view$Selection | view$DocumentSelection): view$DocumentFragment


declare function utils$insertContent(
model: model$Model,
content: view$DocumentFragment | view$Item,
selectable?: view$Selection
| view$DocumentSelection
| view$Position
| view$Element
| Iterable<view$Range>
| view$Range
| null): void


declare function utils$modifySelection(
model: model$Model,
selection: view$Selection | view$DocumentSelection,
options?: {
direction?: "forward" | "backward",
unit?: "character" | "codePoint" | "word"
}): void


declare function utils$injectSelectionPostFixer(model: model$Model): void


declare class model$Batch  {}

declare class model$Differ  {}

declare class model$Document  {}

declare class model$DocumentFragment  {
childCount: number;
isEmpty: boolean;
markers: Map<string, view$Range>;
maxOffset: number;
parent: null;
root: model$DocumentFragment;
constructor(children?: view$Node | Iterable<view$Node>): this;
undefined(): Iterator<view$Node>;
getChild(index: number): view$Node | null;
getChildIndex(node: view$Node): number | null;
getChildStartOffset(node: view$Node): number | null;
getChildren(): Iterable<view$Node>;
getNodeByPath(relativePath: number[]): view$Node | model$DocumentFragment;
getPath(): number[];
is(type: string): boolean;
offsetToIndex(offset: number): number;
toJSON(): Object;
_appendChild(items: view$Item | Iterable<view$Item>): void;
_insertChild(index: number, items: view$Item | Iterable<view$Item>): void;
_removeChildren(index: number, howMany?: number): view$Node[];
static fromJSON(json: {[key: string]: any}): model$DocumentFragment
}

declare class model$DocumentSelection  {}

declare class model$Element mixins view$Node {
childCount: number;
isEmpty: boolean;
maxOffset: number;
name: string;
constructor(name: string, attrs?: Map<string, any> | $ReadOnlyArray<[string, any]>, children?: view$Node | Iterable<view$Node>): this;
getChild(index: number): view$Node;
getChildIndex(node: view$Node): number;
getChildStartOffset(node: view$Node): number;
getChildren(): Iterable<view$Node>;
getNodeByPath(relativePath: number[]): view$Node;
is(type: string, name?: string): boolean;
offsetToIndex(offset: number): number;
toJSON(): {[key: string]: any};
_appendChild(nodes: view$Item | Iterable<view$Item>): void;
_clone(deep?: boolean): model$Element;
_insertChild(index: number, items: view$Item | Iterable<view$Item>): void;
_removeChildren(index: number, howMany?: number): view$Node[];
static fromJSON(json: {[key: string]: any}): model$Element
}

declare class model$History  {}

declare type model$Item = view$Node | view$TextProxy;

declare class model$LivePosition  {}

declare class model$LiveRange  {}

declare class model$Marker  {}

declare class model$MarkerCollection  {}

declare class model$Model mixins ckutils.Emitter, ckutils.Observable {
document: model$Document;
markers: model$MarkerCollection;
schema: model$Schema;
applyOperation(operation: operation$operation$Operation): void;
change(callback: Function): any;
deleteContent(
selection: view$Selection | model$DocumentSelection,
batch: model$Batch,
options: {
leaveUnmerged?: boolean,
doNotResetEntireContent?: boolean
}): void;
destroy(): void;
enqueueChange(batchOrType: model$Batch | "transparent" | "default", callback: Function): void;
getSelectedContent(selection: view$Selection | model$DocumentSelection): model$DocumentFragment;
hasContent(rangeOrElement: view$Range | model$Element): boolean;
insertContent(
content: model$DocumentFragment | model$Item,
selectable?: view$Selection
| model$DocumentSelection
| view$Position
| model$Element
| Iterable<view$Range>
| view$Range
| null): void;
modifySelection(
selection: view$Selection | model$DocumentSelection,
options?: {
direction?: "forward" | "backward",
unit?: "character" | "codePoint" | "word"
}): void;
delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
listenTo(
emitter: ckutils.Emitter,
event: string,
callback: Function,
options?: {
priority?: ckutils.PriorityString | number
}): void;
off(event: string, callback?: Function): void;
on(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
once(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;
bind(...bindProperties: string[]): ckutils.BindChain;
decorate(methodName: string): void;
set(name: {[key: string]: any}): void;
set(name: string, value: any): void;
unbind(...unbindProperties: string[]): void
}

declare class model$Node  {
document: model$Document | null;
endOffset: number | null;
index: number | null;
nextSibling: model$Node | null;
offsetSize: number;
parent: model$Element | model$DocumentFragment | null;
previousSibling: model$Node | null;
root: model$Node | model$DocumentFragment;
startOffset: number | null;
constructor(attrs?: Map<string, any> | $ReadOnlyArray<[string, any]>): this;
getAncestors(options: {
includeSelf: boolean,
parentFirst: boolean
}): model$Node[];
getAttribute(key: string): any;
getAttributeKeys(): Iterable<string>;
getAttributes(): Iterable<any>;
getCommonAncestor(
node: model$Node,
options?: {
includeSelf: boolean
}): model$Element | model$DocumentFragment | null;
getPath(): number[];
hasAttribute(key: string): boolean;
is(type: "element"): boolean;
is(type: "rootElement"): boolean;
is(type: "text"): boolean;
is(type: "textProxy"): boolean;
is(type: "documentFragment"): boolean;
is(type: string, name: string): boolean;
isAfter(node: model$Node): boolean;
isBefore(node: model$Node): boolean;
toJSON(): {[key: string]: any}
}

declare type model$NodeSet = model$Node
| view$TextProxy
| string
| model$NodeList
| model$DocumentFragment
| Iterable<any>;

declare class model$NodeList mixins Iterable<model$Node> {
length: number;
maxOffset: number;
undefined(): Iterator<model$Node>;
getNode(index: number): model$Node | null;
getNodeIndex(node: model$Node): number | null;
getNodeStartOffset(node: model$Node): number | null;
indexToOffset(index: number): number;
offsetToIndex(offset: number): number;
toJSON(): model$Node[]
}

declare class model$Position  {
index: number;
isAtEnd: boolean;
isAtStart: boolean;
nodeAfter: model$Node | null;
nodeBefore: model$Node;
offset: number;
parent: model$Element;
path: number[];
root: model$Element | model$DocumentFragment;
stickiness: model$PositionStickiness;
textNode: view$Text | null;
constructor(root: model$Element | model$DocumentFragment, path: number[], stickiness?: model$PositionStickiness): this;
compareWith(otherPosition: model$Position): view$PositionRelation;
getAncestors(): model$Item[];
getCommonAncestor(position: model$Position): model$Element | model$DocumentFragment | null;
getCommonPath(position: model$Position): number[];
getLastMatchingPosition(
skip: (t: view$TreeWalkerValue) => boolean,
options: {[key: string]: any}): model$Position;
getParentPath(): number[];
getShiftedBy(shift: number): model$Position;
getTransformedByOperation(operation: operation$operation$Operation): model$Position;
hasSameParentAs(position: model$Position): boolean;
isAfter(otherPosition: model$Position): boolean;
isBefore(otherPosition: model$Position): boolean;
isEqual(otherPosition: model$Position): boolean;
isTouching(otherPosition: model$Position): boolean;
toJSON(): {[key: string]: any};
static createAfter(item: model$Item): model$Position;
static createAt(
itemOrPosition: model$Item | model$Position,
offset?: number | "end" | "before" | "after"): void;
static createBefore(item: model$Item): model$Position;
static createFromParentAndOffset(parent: model$Element | model$DocumentFragment, offset: number): model$Position;
static createFromPosition(position: model$Position): model$Position;
static fromJSON(json: {[key: string]: any}, doc: model$Document): model$Position
}

declare type model$PositionRelation = "before" | "after" | "same";

declare type model$PositionStickiness = "toNone" | "toNext" | "toPrevious";

declare class model$Range mixins Iterable<model$Node> {
end: model$Position;
isCollapsed: boolean;
isFlat: boolean;
root: model$Element | model$DocumentFragment;
start: model$Position;
constructor(start: model$Position, end?: model$Position): this;
undefined(): Iterator<model$Node>;
containsItem(item: model$Item): void;
containsPosition(position: model$Position): boolean;
containsRange(otherRange: model$Range, loose?: boolean): boolean;
getCommonAncestor(): model$Element | model$DocumentFragment | null;
getDifference(otherRange: model$Range): model$Range[];
getIntersection(otherRange: model$Range): model$Range | null;
getMinimalFlatRanges(): model$Range[];
getPositions(options: {[key: string]: any}): Iterable<model$Position>;
getTransformedByOperation(operation: operation$operation$Operation): model$Range[];
getTransformedByOperations(operations: Iterable<operation$operation$Operation>): model$Range[];
getWalker(
options: {
startPosition: model$Position,
singleCharacters: boolean,
shallow: boolean,
ignoreElementEnd: boolean
}): void;
isEqual(otherRange: model$Range): boolean;
isIntersecting(otherRange: model$Range): boolean;
toJSON(): {[key: string]: any}
}

declare function model$getItems(options: {[key: string]: any}): Iterable<model$Item>


declare class model$RootElement mixins model$Element {
document: model$Document | null;
rootName: string;
constructor(doc: model$Document, name: string, rootName: string): this
}

declare class model$Schema  {}

declare class model$SchemaContext  {}

declare interface model$SchemaCompiledItemDefinition {
name: string,
allowIn: string | string[],
allowAttributes: string | string[],
isBlock: boolean,
isLimit: boolean,
isObject: boolean
} 

declare type model$SchemaContextDefinition = model$Node
| model$Position
| model$SchemaContext
| string
| Array<string | model$Node>;

declare interface model$SchemaContextItem {
name: string,
getAttributeKeys: Iterable<string>,
getAttribute: (key: string) => string
} 

declare interface model$SchemaItemDefinition {
allowIn: string | string[],
allowAttributes: string | string[],
allowContentOf: string | string[],
allowWhere: string | string[],
allowAttributesOf: string | string[],
inheritTypesFrom: string | string[],
inheritAllFrom: string | string[],
isBlock: boolean,
isLimit: boolean,
isObject: boolean
} 

declare class model$Selection mixins ckutils.Emitter {
delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
listenTo(
emitter: ckutils.Emitter,
event: string,
callback: Function,
options?: {
priority?: ckutils.PriorityString | number
}): void;
off(event: string, callback?: Function): void;
on(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
once(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void
}

declare class model$Text mixins model$Node {
data: string;
_data: string;
constructor(data: string, attrs?: Map<string, any> | $ReadOnlyArray<[string, any]>): this;
toJSON(): {[key: string]: any};
_clone(): model$Text;
static fromJSON(json: {[key: string]: any}): model$Text
}

declare class model$TextProxy  {
data: string;
document: model$Document | null;
endOffset: number;
isPartial: boolean;
offsetInText: number;
offsetSize: number;
parent: model$Element | model$DocumentFragment | null;
root: model$Node | model$DocumentFragment;
startOffset: number;
textNode: model$Text;
constructor(textNode: model$Text, offsetInText: number, length: number): this;
getAncestors(
options: {
includeSelf?: boolean,
parentFirst?: boolean
}): Array<model$TextProxy | model$Element | model$DocumentFragment>;
getAttribute(key: string): any;
getAttributeKeys(): Iterable<string>;
getAttributes(): Iterable<any>;
getPath(): number[];
hasAttribute(key: string): boolean;
is(type: "textProxy"): boolean;
is(type: string): boolean
}

declare class model$TreeWalker mixins Iterable<view$TreeWalkerValue> {
boundaries: model$Range;
direction: "backward" | "forward";
ignoreElementEnd: boolean;
position: model$Position;
shallow: boolean;
singleCharacters: boolean;
constructor(options?: {
direction?: "forward" | "backward",
boundaries?: model$Range,
startPosition: model$Position,
singleCharacters?: boolean,
shallow?: boolean,
ignoreElementEnd?: boolean
}): this;
undefined(): Iterator<view$TreeWalkerValue>;
next(): view$TreeWalkerValue;
skip(skip: (t: view$TreeWalkerValue) => boolean): void
}

declare interface model$TreeWalkerValue {
item: model$Item,
length: number,
nextPosition: model$Position,
previousPosition: model$Position,
type: view$TreeWalkerValueType,
item: model$Item,
length: number,
nextPosition: model$Position,
previousPosition: model$Position,
type: view$TreeWalkerValueType
} 

declare type model$TreeWalkerValueType = "elementStart" | "elementEnd" | "character" | "text";

declare class model$Writer  {}
	
      declare var npm$namespace$utils: {
        bindTwoStepCaretToAttribute: typeof utils$bindTwoStepCaretToAttribute,
        
      }
declare function utils$bindTwoStepCaretToAttribute(
view: view$view$View,
model: model$model$Model,
emitter: ckutils.Emitter,
attribute: string): void

	
      declare var npm$namespace$view: {
        BR_FILLER: typeof view$BR_FILLER,
NBSP_FILLER: typeof view$NBSP_FILLER,
getDataWithoutFiller: typeof view$getDataWithoutFiller,
injectQuirksHandling: typeof view$injectQuirksHandling,
isBlockFiller: typeof view$isBlockFiller,
isInlineFiller: typeof view$isInlineFiller,
startsWithFiller: typeof view$startsWithFiller,
attachPlaceholder: typeof view$attachPlaceholder,
detachPlaceholder: typeof view$detachPlaceholder,
        INLINE_FILLER_LENGTH: typeof view$INLINE_FILLER_LENGTH,
INLINE_FILLER: typeof view$INLINE_FILLER,
      }
declare class observer$ClickObserver mixins observer$DomEventObserver {}

declare class observer$CompositionObserver mixins observer$DomEventObserver {}

declare class observer$DomEventData  {}

declare class observer$DomEventObserver mixins observer$Observer {
domEventType: string | string[];
useCapture: boolean;
fire(eventType: string, domEvent: Event, additionalData?: Object): void;
onDomEvent(): void
}

declare class observer$FakeSelectionObserver mixins observer$Observer {
constructor(view: view$View): this;
destroy(): void;
observe(): void
}

declare class observer$FocusObserver mixins observer$DomEventObserver {}

declare class observer$KeyEventData mixins observer$DomEventData, ckutils.KeystrokeInfo {
altKey: boolean;
ctrlKey: boolean;
keyCode: number;
keystroke: number;
shiftKey: boolean
}

declare class observer$KeyObserver mixins observer$DomEventObserver {}

declare class observer$MouseObserver mixins observer$DomEventObserver {}

declare class observer$MutationObserver mixins observer$Observer {
domConverter: view$DomConverter;
renderer: view$Renderer
}

declare interface observer$MutatedChildren {
newChildren: model$Node[],
node: model$Element,
oldChildren: model$Node[],
type: string
} 

declare interface observer$MutatedText {
newText: string,
node: model$Text,
oldText: string,
type: string
} 

declare class observer$Observer  {
document: model$Document;
isEnabled: boolean;
view: view$View;
constructor(view: view$View): this;
destroy(): void;
disable(): void;
enable(): void;
observe(domElement: HTMLElement, name: string): void
}

declare class observer$SelectionObserver mixins observer$Observer {
domConverter: view$DomConverter;
mutationObserver: observer$MutationObserver;
selection: model$DocumentSelection
}

declare class view$AttributeElement mixins model$Element {
id: string | number;
priority: number;
_clonesGroup: Set<view$AttributeElement> | null;
_id: string | number;
_priority: number;
static DEFAULT_PRIORITY: number;
constructor(name: string, attrs?: {[key: string]: any} | Iterable<[string, string]> | Map<string, string>, children?: model$Node | Iterable<model$Node>): this;
getElementsWithSameId(): Set<view$AttributeElement>;
getFillerOffset(): number | null;
isSimilar(otherElement: model$Element): boolean;
_clone(deep: boolean): view$AttributeElement
}

declare class view$ContainerElement mixins model$Element {
constructor(name: string, attrs?: {[key: string]: any} | Iterable<[string, string]> | Map<string, string>, children?: model$Node | Iterable<model$Node>): this;
getFillerOffset(): number | null
}

declare class view$Document mixins ckutils.Emitter, ckutils.Observable {
isComposing: boolean;
isFocused: boolean;
isReadOnly: boolean;
roots: ckutils.Collection<view$RootEditableElement>;
selection: model$DocumentSelection;
constructor(): this;
getRoot(name?: string): view$RootEditableElement | null;
registerPostFixer(postFixer: (downcastWriter: view$DowncastWriter) => boolean): void;
_callPostFixers(writer: view$DowncastWriter): void;
delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
listenTo(
emitter: ckutils.Emitter,
event: string,
callback: Function,
options?: {
priority?: ckutils.PriorityString | number
}): void;
off(event: string, callback?: Function): void;
on(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
once(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;
bind(...bindProperties: string[]): ckutils.BindChain;
decorate(methodName: string): void;
set(name: {[key: string]: any}): void;
set(name: string, value: any): void;
unbind(...unbindProperties: string[]): void
}

declare type view$ChangeType = "children" | "attributes" | "text";

declare class view$DocumentFragment  {
childCount: number;
isEmpty: boolean;
parent: null;
root: view$DocumentFragment;
_children: model$Element[];
constructor(children?: model$Node | Iterable<model$Node>): this;
undefined(): Iterator<model$Node>;
_appendChild(items: model$Item | Iterable<model$Item>): number;
_insertChild(index: number, items: model$Item | Iterable<model$Item>): number;
_removeChildren(index: number, howMany?: number): model$Node[];
getChild(index: number): model$Node;
getChildIndex(node: model$Node): number;
getChildren(): Iterable<model$Node>;
is(type: string): boolean
}

declare class view$DocumentSelection  {}

declare class view$DomConverter  {}

declare class view$DowncastWriter  {}

declare class view$EditableElement mixins view$ContainerElement {}

declare class view$Element mixins model$Node {
childCount: number;
isEmpty: boolean;
name: string;
_attrs: Map<string, string>;
_children: model$Node[];
_classes: Set<string>;
_customProperties: Map<string, any>;
_styles: Map<string, string>;
constructor(name: string, attrs?: {[key: string]: any} | Iterable<[string, string]> | Map<string, string>, children?: model$Node | Iterable<model$Node>): this;
_removeChildren(index: number, howMany?: number): model$Node[];
_removeClass(className: string[] | string): void;
findAncestor(patterns: Object | string | RegExp | Function): view$Element | null;
getAttribute(key: string): string | void;
getAttributeKeys(): Iterable<string>;
getAttributes(): Iterable<any>;
getChild(index: number): model$Node;
getChildIndex(node: model$Node): number;
getChildren(): Iterable<model$Node>;
getClassNames(): Iterable<string>;
getCustomProperties(): Iterable<any>;
getCustomProperty(key: string | Symbol): any;
getFillerOffset(): void;
getIdentity(): string;
getStyle(property: string): string | void;
getStyleNames(): Iterable<string>;
hasAttribute(key: string): boolean;
hasClass(className: string): void;
hasStyle(property: string): void;
is(type: string, name?: string): boolean;
isSimilar(otherElement: view$Element): boolean;
_addClass(className: string[] | string): void;
_appendChild(items: model$Item | Iterable<model$Item>): number;
_clone(deep?: boolean): view$Element;
_insertChild(index: number, items: model$Item | Iterable<model$Item>): number;
_removeAttribute(key: string): boolean;
_removeCustomProperty(key: string | Symbol): boolean;
_removeStyle(property: string[] | string): void;
_setAttribute(key: string, value: string): void;
_setCustomProperty(key: string | Symbol, value: any): void;
_setStyle(property: string | {
[key: string]: string
}, value?: string): void
}

declare type view$ElementDefinition = string | {
attributes?: {
[key: string]: string
},
classes?: string | string[],
name: string,
priority?: number,
styles?: {
[key: string]: string
}
};

declare class view$EmptyElement mixins view$Element {
constructor(name: string, attrs?: {[key: string]: any} | Iterable<[string, string]> | Map<string, string>, children?: model$Node | Iterable<model$Node>): this;
getFillerOffset(): null
}

declare var view$INLINE_FILLER_LENGTH: number;

declare var view$INLINE_FILLER: string;

declare function view$BR_FILLER(): void


declare function view$NBSP_FILLER(): void


declare function view$getDataWithoutFiller(domText: model$Text): string


declare function view$injectQuirksHandling(view: view$View): void


declare function view$isBlockFiller(domNode: model$Node, blockFiller: Function): boolean


declare function view$isInlineFiller(domText: model$Text): boolean


declare function view$startsWithFiller(domNode: model$Text): boolean


declare type view$Item = model$Node | model$TextProxy;

declare class view$Matcher  {}

declare type view$MatcherPattern = ((element: view$Element) => null | {
name: boolean,
attribute?: string[]
}) | string | RegExp | {
attributes?: {
[key: string]: string | RegExp | boolean
},
classes?: string | RegExp | Array<string | RegExp>,
name?: string | RegExp,
styles?: {
[key: string]: string | RegExp
}
};

declare class view$Node  {
document: view$Document | null;
index: number | null;
nextSibling: view$Node | null;
parent: view$Element | view$DocumentFragment | null;
previousSibling: view$Node | null;
root: view$Node | view$DocumentFragment;
constructor(): this;
_fireChange(type: view$ChangeType, node: view$Node): void;
getAncestors(
options: {
includeSelf: boolean,
parentFirst?: boolean
}): Array<view$Element | view$DocumentFragment>;
getCommonAncestor(
node: view$Node,
options: {
includeSelf?: boolean
}): view$Element | view$DocumentFragment | null;
getPath(): number[];
is(type: "element"): boolean;
is(type: "containerElement"): boolean;
is(type: "attributeElement"): boolean;
is(type: "emptyElement"): boolean;
is(type: "uiElement"): boolean;
is(type: "documentFragment"): boolean;
is(type: "text"): boolean;
is(type: "textProxy"): boolean;
is(type: string, name: string): boolean;
isAfter(node: view$Node): boolean;
isBefore(node: view$Node): boolean;
isSimilar(otherElement: view$Node): boolean;
toJSON(): {[key: string]: any};
_clone(): view$Node;
_remove(): void
}

declare function view$attachPlaceholder(
view: view$View,
element: view$Element,
placeholderText: string,
checkFunction?: Function): void


declare function view$detachPlaceholder(view: view$View, element: view$Element): void


declare class view$Position  {}

declare type view$PositionRelation = "before" | "after" | "same";

declare class view$Range  {}

declare class view$Renderer  {}

declare class view$RootEditableElement mixins view$EditableElement {}

declare class view$Selection  {}

declare class view$Text mixins view$Node {
data: string;
_data: string;
_textData: string;
constructor(data: string): this;
isSimilar(otherNode: view$Text): boolean;
_clone(): view$Text
}

declare class view$TextProxy  {
data: string;
document: view$Document | null;
isPartial: boolean;
offsetInText: number;
offsetSize: number;
parent: view$Element | view$DocumentFragment | null;
root: view$Node | view$DocumentFragment;
textNode: view$Text;
constructor(textNode: view$Text, offsetInText: number, length: number): this;
getAncestors(
options: {
includeSelf?: boolean,
parentFirst?: boolean
}): Array<view$Text | view$Element | view$DocumentFragment>;
is(type: "textProxy"): boolean;
is(type: string): boolean
}

declare class view$TreeWalker  {
boundaries: view$Range;
direction: view$TreeWalkerDirection;
ignoreElementEnd: boolean;
position: view$Position;
shallow: boolean;
singleCharacters: boolean;
constructor(options: {
boundaries?: view$Range,
startPosition?: view$Position,
direction?: view$TreeWalkerDirection,
singleCharacters?: boolean,
shallow?: boolean,
ignoreElementEnd?: boolean
}): this;
undefined(): Iterator<model$TreeWalkerValue>;
next(): model$TreeWalkerValue;
skip(skip: (treeWalkerValue: model$TreeWalkerValue) => boolean): void
}

declare type view$TreeWalkerDirection = "forward" | "backward";

declare interface view$TreeWalkerValue {
item: view$Item,
length: number,
nextPosition: view$Position,
previousPosition: view$Position,
type: model$TreeWalkerValueType,
item: view$Item,
length: number,
nextPosition: view$Position,
previousPosition: view$Position,
type: model$TreeWalkerValueType
} 

declare type view$TreeWalkerValueType = "elementStart" | "elementEnd" | "character" | "text";

declare class view$UIElement mixins view$Element {
constructor(name: string, attrs?: {[key: string]: any} | Iterable<[string, string]> | Map<string, string>, children?: view$Node | Iterable<view$Node>): this;
getFillerOffset(): null;
render(domDocument: view$Document): HTMLElement;
toDomElement(domDocument: view$Document): HTMLElement
}

declare class view$UpcastWriter  {}

declare class view$View mixins ckutils.Emitter, ckutils.Observable {
delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
listenTo(
emitter: ckutils.Emitter,
event: string,
callback: Function,
options?: {
priority?: ckutils.PriorityString | number
}): void;
off(event: string, callback?: Function): void;
on(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
once(
event: string,
callback: Function,
options?: {
priority: ckutils.PriorityString | number
}): void;
stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;
bind(...bindProperties: string[]): ckutils.BindChain;
decorate(methodName: string): void;
set(name: {[key: string]: any}): void;
set(name: string, value: any): void;
unbind(...unbindProperties: string[]): void
}
    }
