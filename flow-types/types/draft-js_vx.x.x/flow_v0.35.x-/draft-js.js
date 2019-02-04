declare module 'draft-js' {
        import typeof * as React from 'react';

	import typeof * as Immutable from 'immutable';

	declare type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
	declare type SyntheticEvent = React.SyntheticEvent<{}>;
	declare type Base$DraftBlockRenderMap = Immutable.Map<Constants$DraftBlockType, ImmutableData$DraftBlockRenderConfig>;

declare type Base$EditorCommand = Constants$DraftEditorCommand | string;


/**
 * `DraftEditor` is the root editor component. It composes a `contentEditable`
 * div, and provides a wide variety of useful function props for managing the
 * state of the editor. See `DraftEditorProps` for details.
 */
declare class Base$DraftEditor mixins React.Component<Base$DraftEditorProps, {}> {
focus(): void;
blur(): void
}


/**
 * The two most critical props are `editorState` and `onChange`.
 * 
 * The `editorState` prop defines the entire state of the editor, while the
 * `onChange` prop is the method in which all state changes are propagated
 * upward to higher-level components.
 * 
 * These props are analagous to `value` and `onChange` in controlled React
 * text inputs.
 */
declare export interface Base$DraftEditorProps {
editorState: ImmutableData$EditorState,
onChange(editorState: ImmutableData$EditorState): void,
placeholder?: string,
textAlignment?: Base$DraftTextAlignment,
blockRendererFn(block: ImmutableData$ContentBlock): any,
blockStyleFn(block: ImmutableData$ContentBlock): string,
customStyleMap?: any,
customStyleFn?: (style: ImmutableData$DraftInlineStyle) => Object,
keyBindingFn(e: SyntheticKeyboardEvent): Base$EditorCommand | null,
readOnly?: boolean,
spellCheck?: boolean,
stripPastedStyles?: boolean,
tabIndex?: number,
autoCapitalize?: string,
autoComplete?: string,
autoCorrect?: string,
ariaActiveDescendantID?: string,
ariaAutoComplete?: string,
ariaControls?: string,
ariaDescribedBy?: string,
ariaExpanded?: boolean,
ariaLabel?: string,
ariaMultiline?: boolean,
webDriverTestID?: string,

/**
 * Cancelable event handlers, handled from the top level down. A handler
 * that returns `handled` will be the last handler to execute for that event.
 */
handleReturn(
e: SyntheticKeyboardEvent,
editorState: ImmutableData$EditorState): Constants$DraftHandleValue,
handleKeyCommand(
command: Base$EditorCommand,
editorState: ImmutableData$EditorState): Constants$DraftHandleValue,
handleBeforeInput(
chars: string,
editorState: ImmutableData$EditorState): Constants$DraftHandleValue,
handlePastedText(
text: string,
html: string | void,
editorState: ImmutableData$EditorState): Constants$DraftHandleValue,
handlePastedFiles(files: Array<Blob>): Constants$DraftHandleValue,
handleDroppedFiles(
selection: ImmutableData$SelectionState,
files: Array<Blob>): Constants$DraftHandleValue,
handleDrop(
selection: ImmutableData$SelectionState,
dataTransfer: Object,
isInternal: Constants$DraftDragType): Constants$DraftHandleValue,

/**
 * Non-cancelable event triggers.
 */
onEscape(e: SyntheticKeyboardEvent): void,
onTab(e: SyntheticKeyboardEvent): void,
onUpArrow(e: SyntheticKeyboardEvent): void,
onDownArrow(e: SyntheticKeyboardEvent): void,
onRightArrow(e: SyntheticKeyboardEvent): void,
onLeftArrow(e: SyntheticKeyboardEvent): void,
onBlur(e: SyntheticEvent): void,
onFocus(e: SyntheticEvent): void,
blockRenderMap?: Base$DraftBlockRenderMap
} 

declare type Base$DraftTextAlignment = "left" | "center" | "right";

declare class Components$DraftEditorBlock mixins React.Component<any, {}> {}


      declare var npm$namespace$Selection: {
        getVisibleSelectionRect: typeof Selection$getVisibleSelectionRect,
        
      }
declare interface Selection$FakeClientRect {
left: number,
width: number,
right: number,
top: number,
bottom: number,
height: number
} 


/**
 * Return the bounding ClientRect for the visible DOM selection, if any.
 * In cases where there are no selected ranges or the bounding rect is
 * temporarily invalid, return null.
 */
declare function Selection$getVisibleSelectionRect(global: any): Selection$FakeClientRect



      declare var npm$namespace$Utils: {
        getDefaultKeyBinding: typeof Utils$getDefaultKeyBinding,
        
      }
declare class Utils$KeyBindingUtil  {

/**
 * Check whether the ctrlKey modifier is *not* being used in conjunction with
 * the altKey modifier. If they are combined, the result is an `altGraph`
 * key modifier, which should not be handled by this set of key bindings.
 */
static isCtrlKeyCommand(e: SyntheticKeyboardEvent): boolean;
static isOptionKeyCommand(e: SyntheticKeyboardEvent): boolean;
static hasCommandModifier(e: SyntheticKeyboardEvent): boolean
}


/**
 * Retrieve a bound key command for the given event.
 */
declare function Utils$getDefaultKeyBinding(e: SyntheticKeyboardEvent): Constants$DraftEditorCommand | null



/**
 * A set of editor commands that may be invoked by keyboard commands or UI
 * controls. These commands should map to operations that modify content or
 * selection state and update the editor state accordingly.
 */
declare type Constants$DraftEditorCommand = ("undo"
| "redo"
| "delete"
| "delete-word"
| "backspace"
| "backspace-word"
| "backspace-to-start-of-line"
| "bold"
| "code"
| "italic"
| "strikethrough"
| "underline"
| "split-block"
| "transpose-characters"
| "move-selection-to-start-of-block"
| "move-selection-to-end-of-block"
| "secondary-cut"
| "secondary-paste");


/**
 * A type that allows us to avoid passing boolean arguments
 * around to indicate whether a drag type is internal or external.
 */
declare type Constants$DraftDragType = "internal" | "external";


/**
 * The list of default valid block types.
 */
declare type Constants$DraftBlockType = ("unstyled"
| "paragraph"
| "header-one"
| "header-two"
| "header-three"
| "header-four"
| "header-five"
| "header-six"
| "unordered-list-item"
| "ordered-list-item"
| "blockquote"
| "code-block"
| "atomic");


/**
 * A type that allows us to avoid passing boolean arguments
 * around to indicate whether a deletion is forward or backward.
 */
declare type Constants$DraftRemovalDirection = "backward" | "forward";


/**
 * A type that allows us to avoid returning boolean values
 * to indicate whether an event was handled or not.
 */
declare type Constants$DraftHandleValue = "handled" | "not-handled";


/**
 * A type that defines if an fragment shall be inserted before or after
 * another fragment or if the selected fragment shall be replaced
 */
declare type Constants$DraftInsertionType = "replace" | "before" | "after";


/**
 * Valid inline styles.
 */
declare type Constants$DraftInlineStyleType = ("BOLD"
| "CODE"
| "ITALIC"
| "STRIKETHROUGH"
| "UNDERLINE");


/**
 * Default entity types.
 */
declare type Constants$ComposedEntityType = ("LINK" | "TOKEN" | "PHOTO" | "IMAGE");


/**
 * Possible entity types.
 */
declare type Constants$DraftEntityType = string | Constants$ComposedEntityType;


/**
 * Possible "mutability" options for an entity. This refers to the behavior
 * that should occur when inserting or removing characters in a text range
 * with an entity applied to it.
 * 
 * `MUTABLE`:
 *    The text range can be modified freely. Generally used in cases where
 *    the text content and the entity do not necessarily have a direct
 *    relationship. For instance, the text and URI for a link may be completely
 *    different. The user is allowed to edit the text as needed, and the entity
 *    is preserved and applied to any characters added within the range.
 * 
 * `IMMUTABLE`:
 *    Not to be confused with immutable data structures used to represent the
 *    state of the editor. Immutable entity ranges cannot be modified in any
 *    way. Adding characters within the range will remove the entity from the
 *    entire range. Deleting characters will delete the entire range. Example:
 *    Facebook Page mentions.
 * 
 * `SEGMENTED`:
 *    Segmented entities allow the removal of partial ranges of text, as
 *    separated by a delimiter. Adding characters wihin the range will remove
 *    the entity from the entire range. Deleting characters within a segmented
 *    entity will delete only the segments affected by the deletion. Example:
 *    Facebook User mentions.
 */
declare type Constants$DraftEntityMutability = "MUTABLE" | "IMMUTABLE" | "SEGMENTED";


/**
 * An interface for document decorator classes, allowing the creation of
 * custom decorator classes.
 * 
 * See `CompositeDraftDecorator` for the most common use case.
 */
declare interface Decorators$DraftDecoratorType {

/**
 * Given a `ContentBlock`, return an immutable List of decorator keys.
 */
getDecorations(
block: ImmutableData$ContentBlock,
contentState: ImmutableData$ContentState): Immutable.List<string>,

/**
 * Given a decorator key, return the component to use when rendering
 * this decorated range.
 */
getComponentForKey(key: string): Function,

/**
 * Given a decorator key, optionally return the props to use when rendering
 * this decorated range.
 */
getPropsForKey(key: string): any
} 


/**
 * A DraftDecorator is a strategy-component pair intended for use when
 * rendering content.
 * 
 *    - A "strategy": A function that accepts a ContentBlock object and
 *      continuously executes a callback with start/end values corresponding to
 *      relevant matches in the document text. For example, getHashtagMatches
 *      uses a hashtag regex to find hashtag strings in the block, and
 *      for each hashtag match, executes the callback with start/end pairs.
 * 
 *    - A "component": A React component that will be used to render the
 *      "decorated" section of text.
 * 
 *    - "props": Props to be passed into the React component that will be used.
 */
declare interface Decorators$DraftDecorator {
strategy: (
block: ImmutableData$ContentBlock,
callback: (start: number, end: number) => void,
contentState: ImmutableData$ContentState) => void,
component: Function,
props?: Object
} 


/**
 * A CompositeDraftDecorator traverses through a list of DraftDecorator
 * instances to identify sections of a ContentBlock that should be rendered
 * in a "decorated" manner. For example, hashtags, mentions, and links may
 * be intended to stand out visually, be rendered as anchors, etc.
 * 
 * The list of decorators supplied to the constructor will be used in the
 * order they are provided. This allows the caller to specify a priority for
 * string matching, in case of match collisions among decorators.
 * 
 * For instance, I may have a link with a `#` in its text. Though this section
 * of text may match our hashtag decorator, it should not be treated as a
 * hashtag. I should therefore list my link DraftDecorator
 * before my hashtag DraftDecorator when constructing this composite
 * decorator instance.
 * 
 * Thus, when a collision like this is encountered, the earlier match is
 * preserved and the new match is discarded.
 */
declare class Decorators$CompositeDraftDecorator  {
constructor(decorators: Array<Decorators$DraftDecorator>): this;
getDecorations(
block: ImmutableData$ContentBlock,
contentState: ImmutableData$ContentState): Immutable.List<string>;
getComponentForKey(key: string): Function;
getPropsForKey(key: string): Object
}


      declare var npm$namespace$Encoding: {
        convertFromHTMLtoContentBlocks: typeof Encoding$convertFromHTMLtoContentBlocks,
convertFromRawToDraftState: typeof Encoding$convertFromRawToDraftState,
convertFromDraftStateToRaw: typeof Encoding$convertFromDraftStateToRaw,
        
      }

/**
 * A plain object representation of an inline style range.
 */
declare interface Encoding$RawDraftInlineStyleRange {
style: Constants$DraftInlineStyleType,
offset: number,
length: number
} 


/**
 * A plain object representation of an entity attribution.
 * 
 * The `key` value corresponds to the key of the entity in the `entityMap` of
 * a `ComposedText` object, not for use with `DraftEntity.get()`.
 */
declare interface Encoding$RawDraftEntityRange {
key: number,
offset: number,
length: number
} 


/**
 * A plain object representation of an EntityInstance.
 */
declare interface Encoding$RawDraftEntity {
type: Constants$DraftEntityType,
mutability: Constants$DraftEntityMutability,
data: {
[key: string]: any
}
} 


/**
 * A plain object representation of a ContentBlock, with all style and entity
 * attribution repackaged as range objects.
 */
declare interface Encoding$RawDraftContentBlock {
key: string,
type: Constants$DraftBlockType,
text: string,
depth: number,
inlineStyleRanges: Array<Encoding$RawDraftInlineStyleRange>,
entityRanges: Array<Encoding$RawDraftEntityRange>,
data?: Object
} 


/**
 * A type that represents a composed document as vanilla JavaScript objects,
 * with all styles and entities represented as ranges. Corresponding entity
 * objects are packaged as objects as well.
 * 
 * This object is especially useful when sending the document state to the
 * server for storage, as its representation is more concise than our
 * immutable objects.
 */
declare interface Encoding$RawDraftContentState {
blocks: Array<Encoding$RawDraftContentBlock>,
entityMap: {
[key: string]: Encoding$RawDraftEntity
}
} 

declare function Encoding$convertFromHTMLtoContentBlocks(
html: string,
DOMBuilder?: Function,
blockRenderMap?: Base$DraftBlockRenderMap): {
contentBlocks: Array<ImmutableData$ContentBlock>,
entityMap: any
}


declare function Encoding$convertFromRawToDraftState(rawState: Encoding$RawDraftContentState): ImmutableData$ContentState


declare function Encoding$convertFromDraftStateToRaw(contentState: ImmutableData$ContentState): Encoding$RawDraftContentState



/**
 * A "document entity" is an object containing metadata associated with a
 * piece of text in a ContentBlock.
 * 
 * For example, a `link` entity might include a `uri` property. When a
 * ContentBlock is rendered in the browser, text that refers to that link
 * entity may be rendered as an anchor, with the `uri` as the href value.
 * 
 * In a ContentBlock, every position in the text may correspond to zero
 * or one entities. This correspondence is tracked using a key string,
 * generated via DraftEntity.create() and used to obtain entity metadata
 * via DraftEntity.get().
 */
declare class Entity$DraftEntity  {

/**
 * Create a DraftEntityInstance and store it for later retrieval.
 * 
 * A random key string will be generated and returned. This key may
 * be used to track the entity's usage in a ContentBlock, and for
 * retrieving data about the entity at render time.
 */
static create(
type: Constants$DraftEntityType,
mutability: Constants$DraftEntityMutability,
data?: Object): string;

/**
 * Add an existing DraftEntityInstance to the DraftEntity map. This is
 * useful when restoring instances from the server.
 */
static add(instance: Entity$DraftEntityInstance): string;

/**
 * Retrieve the entity corresponding to the supplied key string.
 */
static get(key: string): Entity$DraftEntityInstance;

/**
 * Entity instances are immutable. If you need to update the data for an
 * instance, this method will merge your data updates and return a new
 * instance.
 */
static mergeData(key: string, toMerge: {
[key: string]: any
}): Entity$DraftEntityInstance;

/**
 * Completely replace the data for a given instance.
 */
static replaceData(key: string, newData: {
[key: string]: any
}): Entity$DraftEntityInstance
}


/**
 * An instance of a document entity, consisting of a `type` and relevant
 * `data`, metadata about the entity.
 * 
 * For instance, a "link" entity might provide a URI, and a "mention"
 * entity might provide the mentioned user's ID. These pieces of data
 * may be used when rendering the entity as part of a ContentBlock DOM
 * representation. For a link, the data would be used as an href for
 * the rendered anchor. For a mention, the ID could be used to retrieve
 * a hovercard.
 */
declare interface Entity$DraftEntityInstance {
getType(): Constants$DraftEntityType,
getMutability(): Constants$DraftEntityMutability,
getData(): any
} 


      declare var npm$namespace$ImmutableData: {
        
        Record: typeof ImmutableData$Record,
DefaultDraftBlockRenderMap: typeof ImmutableData$DefaultDraftBlockRenderMap,
DefaultDraftInlineStyle: typeof ImmutableData$DefaultDraftInlineStyle,
      }
declare type ImmutableData$DraftInlineStyle = Immutable.OrderedSet<string>;

declare type ImmutableData$BlockMap = Immutable.OrderedMap<string, Draft$Model.ImmutableData.ImmutableData$ContentBlock>;

declare var ImmutableData$Record: Immutable.ImmutableData$Record.Class;

declare interface ImmutableData$DraftBlockRenderConfig {
element: string,
wrapper?: React.ReactElement<any>
} 

declare class ImmutableData$EditorState mixins ImmutableData$Record {
static createEmpty(decorator?: Decorators$DraftDecoratorType): ImmutableData$EditorState;
static createWithContent(
contentState: ImmutableData$ContentState,
decorator?: Decorators$DraftDecoratorType): ImmutableData$EditorState;
static create(config: Object): ImmutableData$EditorState;
static set(editorState: ImmutableData$EditorState, put: Object): ImmutableData$EditorState;

/**
 * Incorporate native DOM selection changes into the EditorState. This
 * method can be used when we simply want to accept whatever the DOM
 * has given us to represent selection, and we do not need to re-render
 * the editor.
 * 
 * To forcibly move the DOM selection, see `EditorState.forceSelection`.
 */
static acceptSelection(
editorState: ImmutableData$EditorState,
selection: ImmutableData$SelectionState): ImmutableData$EditorState;

/**
 * At times, we need to force the DOM selection to be where we
 * need it to be. This can occur when the anchor or focus nodes
 * are non-text nodes, for instance. In this case, we want to trigger
 * a re-render of the editor, which in turn forces selection into
 * the correct place in the DOM. The `forceSelection` method
 * accomplishes this.
 * 
 * This method should be used in cases where you need to explicitly
 * move the DOM selection from one place to another without a change
 * in ContentState.
 */
static forceSelection(
editorState: ImmutableData$EditorState,
selection: ImmutableData$SelectionState): ImmutableData$EditorState;

/**
 * Move selection to the end of the editor without forcing focus.
 */
static moveSelectionToEnd(editorState: ImmutableData$EditorState): ImmutableData$EditorState;

/**
 * Force focus to the end of the editor. This is useful in scenarios
 * where we want to programmatically focus the input and it makes sense
 * to allow the user to continue working seamlessly.
 */
static moveFocusToEnd(editorState: ImmutableData$EditorState): ImmutableData$EditorState;

/**
 * Push the current ContentState onto the undo stack if it should be
 * considered a boundary state, and set the provided ContentState as the
 * new current content.
 */
static push(
editorState: ImmutableData$EditorState,
contentState: ImmutableData$ContentState,
changeType: ImmutableData$EditorChangeType): ImmutableData$EditorState;

/**
 * Make the top ContentState in the undo stack the new current content and
 * push the current content onto the redo stack.
 */
static undo(editorState: ImmutableData$EditorState): ImmutableData$EditorState;

/**
 * Make the top ContentState in the redo stack the new current content and
 * push the current content onto the undo stack.
 */
static redo(editorState: ImmutableData$EditorState): ImmutableData$EditorState;
toJS(): Object;
getAllowUndo(): boolean;
getCurrentContent(): ImmutableData$ContentState;
getUndoStack(): Immutable.Stack<ImmutableData$ContentState>;
getRedoStack(): Immutable.Stack<ImmutableData$ContentState>;
getSelection(): ImmutableData$SelectionState;
getDecorator(): Decorators$DraftDecoratorType;
isInCompositionMode(): boolean;
mustForceSelection(): boolean;
getNativelyRenderedContent(): ImmutableData$ContentState;
getLastChangeType(): ImmutableData$EditorChangeType;

/**
 * While editing, the user may apply inline style commands with a collapsed
 * cursor, intending to type text that adopts the specified style. In this
 * case, we track the specified style as an "override" that takes precedence
 * over the inline style of the text adjacent to the cursor.
 * 
 * If null, there is no override in place.
 */
getInlineStyleOverride(): ImmutableData$DraftInlineStyle;
static setInlineStyleOverride(
editorState: ImmutableData$EditorState,
inlineStyleOverride: ImmutableData$DraftInlineStyle): ImmutableData$EditorState;

/**
 * Get the appropriate inline style for the editor state. If an
 * override is in place, use it. Otherwise, the current style is
 * based on the location of the selection state.
 */
getCurrentInlineStyle(): ImmutableData$DraftInlineStyle;
getBlockTree(blockKey: string): Immutable.List<any>;
isSelectionAtStartOfContent(): boolean;
isSelectionAtEndOfContent(): boolean;
getDirectionMap(): Immutable.OrderedMap<any, any>
}

declare class ImmutableData$ContentBlock mixins ImmutableData$Record {
getKey(): string;
getType(): Constants$DraftBlockType;
getType(): string;
getText(): string;
getCharacterList(): Immutable.List<ImmutableData$CharacterMetadata>;
getLength(): number;
getDepth(): number;
getData(): Immutable.Map<any, any>;
getInlineStyleAt(offset: number): ImmutableData$DraftInlineStyle;
getEntityAt(offset: number): string;

/**
 * Execute a callback for every contiguous range of styles within the block.
 */
findStyleRanges(
filterFn: (value: ImmutableData$CharacterMetadata) => boolean,
callback: (start: number, end: number) => void): void;

/**
 * Execute a callback for every contiguous range of entities within the block.
 */
findEntityRanges(
filterFn: (value: ImmutableData$CharacterMetadata) => boolean,
callback: (start: number, end: number) => void): void
}

declare class ImmutableData$ContentState mixins ImmutableData$Record {
static createFromBlockArray(
blocks: Array<ImmutableData$ContentBlock>,
entityMap?: any): ImmutableData$ContentState;
static createFromText(text: string, delimiter?: string): ImmutableData$ContentState;
createEntity(
type: Constants$DraftEntityType,
mutability: Constants$DraftEntityMutability,
data?: Object): ImmutableData$ContentState;
getEntity(key: string): EntityInstance;
getEntityMap(): any;
getLastCreatedEntityKey(): string;
mergeEntityData(key: string, toMerge: {
[key: string]: any
}): ImmutableData$ContentState;
replaceEntityData(key: string, toMerge: {
[key: string]: any
}): ImmutableData$ContentState;
addEntity(instance: Entity$DraftEntityInstance): ImmutableData$ContentState;
getBlockMap(): ImmutableData$BlockMap;
getSelectionBefore(): ImmutableData$SelectionState;
getSelectionAfter(): ImmutableData$SelectionState;
getBlockForKey(key: string): ImmutableData$ContentBlock;
getKeyBefore(key: string): string;
getKeyAfter(key: string): string;
getBlockAfter(key: string): ImmutableData$ContentBlock;
getBlockBefore(key: string): ImmutableData$ContentBlock;
getBlocksAsArray(): Array<ImmutableData$ContentBlock>;
getFirstBlock(): ImmutableData$ContentBlock;
getLastBlock(): ImmutableData$ContentBlock;
getPlainText(delimiter?: string): string;
hasText(): boolean
}

declare class ImmutableData$SelectionState mixins ImmutableData$Record {
static createEmpty(key: string): ImmutableData$SelectionState;
serialize(): string;
getAnchorKey(): string;
getAnchorOffset(): number;
getFocusKey(): string;
getFocusOffset(): number;
getIsBackward(): boolean;
getHasFocus(): boolean;

/**
 * Return whether the specified range overlaps with an edge of the
 * SelectionState.
 */
hasEdgeWithin(blockKey: string, start: number, end: number): boolean;
isCollapsed(): boolean;
getStartKey(): string;
getStartOffset(): number;
getEndKey(): string;
getEndOffset(): number
}

declare class ImmutableData$CharacterMetadata  {
static applyStyle(
record: ImmutableData$CharacterMetadata,
style: string): ImmutableData$CharacterMetadata;
static removeStyle(
record: ImmutableData$CharacterMetadata,
style: string): ImmutableData$CharacterMetadata;
static applyEntity(
record: ImmutableData$CharacterMetadata,
entityKey: string | null): ImmutableData$CharacterMetadata;
static applyEntity(record: ImmutableData$CharacterMetadata): ImmutableData$CharacterMetadata;

/**
 * Use this function instead of the `CharacterMetadata` constructor.
 * Since most content generally uses only a very small number of
 * style/entity permutations, we can reuse these objects as often as
 * possible.
 */
static create(
config?: ImmutableData$CharacterMetadataConfig): ImmutableData$CharacterMetadata;
static create(): ImmutableData$CharacterMetadata;
getStyle(): ImmutableData$DraftInlineStyle;
getEntity(): string;
hasStyle(style: string): boolean
}

declare interface ImmutableData$CharacterMetadataConfig {
style?: ImmutableData$DraftInlineStyle,
entity?: string
} 

declare type ImmutableData$EditorChangeType = ("adjust-depth"
| "apply-entity"
| "backspace-character"
| "change-block-data"
| "change-block-type"
| "change-inline-style"
| "delete-character"
| "insert-characters"
| "insert-fragment"
| "redo"
| "remove-range"
| "spellcheck-change"
| "split-block"
| "undo");

declare class ImmutableData$BlockMapBuilder  {
static createFromArray(blocks: Array<ImmutableData$ContentBlock>): ImmutableData$BlockMap
}

declare var ImmutableData$DefaultDraftBlockRenderMap: Immutable.Map<any, any>;

declare var ImmutableData$DefaultDraftInlineStyle: Immutable.Map<any, any>;


      declare var npm$namespace$Keys: {
        generateRandomKey: typeof Keys$generateRandomKey,
        
      }
declare function Keys$generateRandomKey(): string


declare type Modifier$URI = any;

declare class Modifier$AtomicBlockUtils  {
static insertAtomicBlock(
editorState: ImmutableData$EditorState,
entityKey: string,
character: string): ImmutableData$EditorState;
static moveAtomicBlock(
editorState: ImmutableData$EditorState,
atomicBlock: ImmutableData$ContentBlock,
targetRange: ImmutableData$SelectionState,
insertionMode?: Constants$DraftInsertionType): ImmutableData$EditorState
}


/**
 * `DraftModifier` provides a set of convenience methods that apply
 * modifications to a `ContentState` object based on a target `SelectionState`.
 * 
 * Any change to a `ContentState` should be decomposable into a series of
 * transaction functions that apply the required changes and return output
 * `ContentState` objects.
 * 
 * These functions encapsulate some of the most common transaction sequences.
 */
declare class Modifier$DraftModifier  {
static replaceText(
contentState: ImmutableData$ContentState,
rangeToReplace: ImmutableData$SelectionState,
text: string,
inlineStyle?: ImmutableData$DraftInlineStyle,
entityKey?: string): ImmutableData$ContentState;
static insertText(
contentState: ImmutableData$ContentState,
targetRange: ImmutableData$SelectionState,
text: string,
inlineStyle?: ImmutableData$DraftInlineStyle,
entityKey?: string): ImmutableData$ContentState;
static moveText(
contentState: ImmutableData$ContentState,
removalRange: ImmutableData$SelectionState,
targetRange: ImmutableData$SelectionState): ImmutableData$ContentState;
static replaceWithFragment(
contentState: ImmutableData$ContentState,
targetRange: ImmutableData$SelectionState,
fragment: ImmutableData$BlockMap): ImmutableData$ContentState;
static removeRange(
contentState: ImmutableData$ContentState,
rangeToRemove: ImmutableData$SelectionState,
removalDirection: Constants$DraftRemovalDirection): ImmutableData$ContentState;
static splitBlock(
contentState: ImmutableData$ContentState,
selectionState: ImmutableData$SelectionState): ImmutableData$ContentState;
static applyInlineStyle(
contentState: ImmutableData$ContentState,
selectionState: ImmutableData$SelectionState,
inlineStyle: string): ImmutableData$ContentState;
static removeInlineStyle(
contentState: ImmutableData$ContentState,
selectionState: ImmutableData$SelectionState,
inlineStyle: string): ImmutableData$ContentState;
static setBlockType(
contentState: ImmutableData$ContentState,
selectionState: ImmutableData$SelectionState,
blockType: Constants$DraftBlockType): ImmutableData$ContentState;
static setBlockType(
contentState: ImmutableData$ContentState,
selectionState: ImmutableData$SelectionState,
blockType: string): ImmutableData$ContentState;
static setBlockData(
contentState: ImmutableData$ContentState,
selectionState: ImmutableData$SelectionState,
blockData: Immutable.Map<any, any>): ImmutableData$ContentState;
static mergeBlockData(
contentState: ImmutableData$ContentState,
selectionState: ImmutableData$SelectionState,
blockData: Immutable.Map<any, any>): ImmutableData$ContentState;
static applyEntity(
contentState: ImmutableData$ContentState,
selectionState: ImmutableData$SelectionState,
entityKey: string | null): ImmutableData$ContentState
}

declare class Modifier$RichTextEditorUtil  {
static currentBlockContainsLink(editorState: ImmutableData$EditorState): boolean;
static getCurrentBlockType(editorState: ImmutableData$EditorState): Constants$DraftBlockType;
static getCurrentBlockType(editorState: ImmutableData$EditorState): string;
static getDataObjectForLinkURL(uri: Modifier$URI): Object;
static handleKeyCommand(
editorState: ImmutableData$EditorState,
command: Constants$DraftEditorCommand): ImmutableData$EditorState;
static handleKeyCommand(editorState: ImmutableData$EditorState, command: string): null;
static insertSoftNewline(editorState: ImmutableData$EditorState): ImmutableData$EditorState;

/**
 * For collapsed selections at the start of styled blocks, backspace should
 * just remove the existing style.
 */
static onBackspace(editorState: ImmutableData$EditorState): ImmutableData$EditorState;
static onDelete(editorState: ImmutableData$EditorState): ImmutableData$EditorState;
static onTab(
event: SyntheticKeyboardEvent,
editorState: ImmutableData$EditorState,
maxDepth: number): ImmutableData$EditorState;
static toggleBlockType(
editorState: ImmutableData$EditorState,
blockType: Constants$DraftBlockType): ImmutableData$EditorState;
static toggleBlockType(
editorState: ImmutableData$EditorState,
blockType: string): ImmutableData$EditorState;
static toggleCode(editorState: ImmutableData$EditorState): ImmutableData$EditorState;

/**
 * Toggle the specified inline style for the selection. If the
 * user's selection is collapsed, apply or remove the style for the
 * internal state. If it is not collapsed, apply the change directly
 * to the document state.
 */
static toggleInlineStyle(
editorState: ImmutableData$EditorState,
inlineStyle: string): ImmutableData$EditorState;
static toggleLink(
editorState: ImmutableData$EditorState,
targetSelection: ImmutableData$SelectionState,
entityKey: string | null): ImmutableData$EditorState;

/**
 * When a collapsed cursor is at the start of an empty styled block, allow
 * certain key commands (newline, backspace) to simply change the
 * style of the block instead of the default behavior.
 */
static tryToRemoveBlockStyle(editorState: ImmutableData$EditorState): ImmutableData$ContentState
}
	declare export {
          Editor,EditorProps,EditorBlock,EditorState,EditorChangeType,CompositeDecorator,Entity,EntityInstance,BlockMapBuilder,CharacterMetadata,ContentBlock,ContentState,SelectionState,DraftInlineStyle,BlockMap,AtomicBlockUtils,KeyBindingUtil,Modifier,RichUtils,DefaultDraftBlockRenderMap,DefaultDraftInlineStyle,RawDraftInlineStyleRange,RawDraftEntityRange,RawDraftEntity,RawDraftContentBlock,RawDraftContentState,convertFromRaw,convertToRaw,convertFromHTML,genKey,getDefaultKeyBinding,getVisibleSelectionRect,DraftEditorCommand,DraftDragType,DraftBlockType,DraftBlockRenderConfig,DraftBlockRenderMap,DraftInlineStyleType,DraftEntityType,DraftEntityMutability,DraftRemovalDirection,DraftHandleValue,DraftInsertionType
        }

    }
