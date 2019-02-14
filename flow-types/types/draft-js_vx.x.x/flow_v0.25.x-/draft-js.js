declare module "draft-js" {
  import typeof * as React from "react";

  import typeof * as Immutable from "immutable";

  declare type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
  declare type SyntheticEvent = React.SyntheticEvent<{}>;

  declare var npm$namespace$Draft: {
    Component: typeof npm$namespace$Draft$Component,
    Model: typeof npm$namespace$Draft$Model
  };

  declare var npm$namespace$Draft$Component: {
    Base: typeof npm$namespace$Draft$Component$Base,
    Components: typeof npm$namespace$Draft$Component$Components,
    Selection: typeof npm$namespace$Draft$Component$Selection,
    Utils: typeof npm$namespace$Draft$Component$Utils
  };

  declare var npm$namespace$Draft$Component$Base: {
    DraftEditor: typeof Draft$Component$Base$DraftEditor
  };
  declare type Draft$Component$Base$DraftBlockRenderMap = Immutable.Map<
    Constants$DraftBlockType,
    ImmutableData$DraftBlockRenderConfig
  >;

  declare type Draft$Component$Base$EditorCommand =
    | Constants$DraftEditorCommand
    | string;

  /**
   * `DraftEditor` is the root editor component. It composes a `contentEditable`
   * div, and provides a wide variety of useful function props for managing the
   * state of the editor. See `DraftEditorProps` for details.
   */
  declare class Draft$Component$Base$DraftEditor
    mixins React.Component<Base$DraftEditorProps, {}> {
    focus(): void;
    blur(): void;
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
  declare export interface Draft$Component$Base$DraftEditorProps {
    editorState: ImmutableData$EditorState;
    onChange(editorState: ImmutableData$EditorState): void;
    placeholder?: string;
    textAlignment?: Base$DraftTextAlignment;
    blockRendererFn?: (block: ImmutableData$ContentBlock) => any;
    blockStyleFn?: (block: ImmutableData$ContentBlock) => string;
    customStyleMap?: any;
    customStyleFn?: (style: ImmutableData$DraftInlineStyle) => Object;
    keyBindingFn?: (
      e: SyntheticKeyboardEvent
    ) => Draft$Component$Base$EditorCommand | null;
    readOnly?: boolean;
    spellCheck?: boolean;
    stripPastedStyles?: boolean;
    tabIndex?: number;
    autoCapitalize?: string;
    autoComplete?: string;
    autoCorrect?: string;
    ariaActiveDescendantID?: string;
    ariaAutoComplete?: string;
    ariaControls?: string;
    ariaDescribedBy?: string;
    ariaExpanded?: boolean;
    ariaLabel?: string;
    ariaMultiline?: boolean;
    webDriverTestID?: string;

    /**
     * Cancelable event handlers, handled from the top level down. A handler
     * that returns `handled` will be the last handler to execute for that event.
     */
    handleReturn?: (
      e: SyntheticKeyboardEvent,
      editorState: ImmutableData$EditorState
    ) => Constants$DraftHandleValue;
    handleKeyCommand?: (
      command: Draft$Component$Base$EditorCommand,
      editorState: ImmutableData$EditorState
    ) => Constants$DraftHandleValue;
    handleBeforeInput?: (
      chars: string,
      editorState: ImmutableData$EditorState
    ) => Constants$DraftHandleValue;
    handlePastedText?: (
      text: string,
      html: string | void,
      editorState: ImmutableData$EditorState
    ) => Constants$DraftHandleValue;
    handlePastedFiles?: (files: Array<Blob>) => Constants$DraftHandleValue;
    handleDroppedFiles?: (
      selection: ImmutableData$SelectionState,
      files: Array<Blob>
    ) => Constants$DraftHandleValue;
    handleDrop?: (
      selection: ImmutableData$SelectionState,
      dataTransfer: Object,
      isInternal: Constants$DraftDragType
    ) => Constants$DraftHandleValue;

    /**
     * Non-cancelable event triggers.
     */
    onEscape?: (e: SyntheticKeyboardEvent) => void;
    onTab?: (e: SyntheticKeyboardEvent) => void;
    onUpArrow?: (e: SyntheticKeyboardEvent) => void;
    onDownArrow?: (e: SyntheticKeyboardEvent) => void;
    onRightArrow?: (e: SyntheticKeyboardEvent) => void;
    onLeftArrow?: (e: SyntheticKeyboardEvent) => void;
    onBlur?: (e: SyntheticEvent) => void;
    onFocus?: (e: SyntheticEvent) => void;
    blockRenderMap?: Draft$Component$Base$DraftBlockRenderMap;
  }

  declare type Draft$Component$Base$DraftTextAlignment =
    | "left"
    | "center"
    | "right";

  declare var npm$namespace$Draft$Component$Components: {
    DraftEditorBlock: typeof Draft$Component$Components$DraftEditorBlock
  };
  declare class Draft$Component$Components$DraftEditorBlock
    mixins React.Component<any, {}> {}

  declare var npm$namespace$Draft$Component$Selection: {
    getVisibleSelectionRect: typeof Draft$Component$Selection$getVisibleSelectionRect
  };
  declare interface Draft$Component$Selection$FakeClientRect {
    left: number;
    width: number;
    right: number;
    top: number;
    bottom: number;
    height: number;
  }

  /**
   * Return the bounding ClientRect for the visible DOM selection, if any.
   * In cases where there are no selected ranges or the bounding rect is
   * temporarily invalid, return null.
   */
  declare function Draft$Component$Selection$getVisibleSelectionRect(
    global: any
  ): Draft$Component$Selection$FakeClientRect;

  declare var npm$namespace$Draft$Component$Utils: {
    getDefaultKeyBinding: typeof Draft$Component$Utils$getDefaultKeyBinding,

    KeyBindingUtil: typeof Draft$Component$Utils$KeyBindingUtil
  };
  declare class Draft$Component$Utils$KeyBindingUtil {
    /**
     * Check whether the ctrlKey modifier is *not* being used in conjunction with
     * the altKey modifier. If they are combined, the result is an `altGraph`
     * key modifier, which should not be handled by this set of key bindings.
     */
    static isCtrlKeyCommand(e: SyntheticKeyboardEvent): boolean;
    static isOptionKeyCommand(e: SyntheticKeyboardEvent): boolean;
    static hasCommandModifier(e: SyntheticKeyboardEvent): boolean;
  }

  /**
   * Retrieve a bound key command for the given event.
   */
  declare function Draft$Component$Utils$getDefaultKeyBinding(
    e: SyntheticKeyboardEvent
  ): Constants$DraftEditorCommand | null;

  declare var npm$namespace$Draft$Model: {
    Decorators: typeof npm$namespace$Draft$Model$Decorators,
    Encoding: typeof npm$namespace$Draft$Model$Encoding,
    Entity: typeof npm$namespace$Draft$Model$Entity,
    ImmutableData: typeof npm$namespace$Draft$Model$ImmutableData,
    Keys: typeof npm$namespace$Draft$Model$Keys,
    Modifier: typeof npm$namespace$Draft$Model$Modifier
  };

  /**
   * A set of editor commands that may be invoked by keyboard commands or UI
   * controls. These commands should map to operations that modify content or
   * selection state and update the editor state accordingly.
   */
  declare type Draft$Model$Constants$DraftEditorCommand =
    | "undo"
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
    | "secondary-paste";

  /**
   * A type that allows us to avoid passing boolean arguments
   * around to indicate whether a drag type is internal or external.
   */
  declare type Draft$Model$Constants$DraftDragType = "internal" | "external";

  /**
   * The list of default valid block types.
   */
  declare type Draft$Model$Constants$DraftBlockType =
    | "unstyled"
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
    | "atomic";

  /**
   * A type that allows us to avoid passing boolean arguments
   * around to indicate whether a deletion is forward or backward.
   */
  declare type Draft$Model$Constants$DraftRemovalDirection =
    | "backward"
    | "forward";

  /**
   * A type that allows us to avoid returning boolean values
   * to indicate whether an event was handled or not.
   */
  declare type Draft$Model$Constants$DraftHandleValue =
    | "handled"
    | "not-handled";

  /**
   * A type that defines if an fragment shall be inserted before or after
   * another fragment or if the selected fragment shall be replaced
   */
  declare type Draft$Model$Constants$DraftInsertionType =
    | "replace"
    | "before"
    | "after";

  /**
   * Valid inline styles.
   */
  declare type Draft$Model$Constants$DraftInlineStyleType =
    | "BOLD"
    | "CODE"
    | "ITALIC"
    | "STRIKETHROUGH"
    | "UNDERLINE";

  /**
   * Default entity types.
   */
  declare type Draft$Model$Constants$ComposedEntityType =
    | "LINK"
    | "TOKEN"
    | "PHOTO"
    | "IMAGE";

  /**
   * Possible entity types.
   */
  declare type Draft$Model$Constants$DraftEntityType =
    | string
    | Draft$Model$Constants$ComposedEntityType;

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
  declare type Draft$Model$Constants$DraftEntityMutability =
    | "MUTABLE"
    | "IMMUTABLE"
    | "SEGMENTED";

  declare var npm$namespace$Draft$Model$Decorators: {
    CompositeDraftDecorator: typeof Draft$Model$Decorators$CompositeDraftDecorator
  };

  /**
   * An interface for document decorator classes, allowing the creation of
   * custom decorator classes.
   *
   * See `CompositeDraftDecorator` for the most common use case.
   */
  declare interface Draft$Model$Decorators$DraftDecoratorType {
    /**
     * Given a `ContentBlock`, return an immutable List of decorator keys.
     */
    getDecorations(
      block: ImmutableData$ContentBlock,
      contentState: ImmutableData$ContentState
    ): Immutable.List<string>;

    /**
     * Given a decorator key, return the component to use when rendering
     * this decorated range.
     */
    getComponentForKey(key: string): Function;

    /**
     * Given a decorator key, optionally return the props to use when rendering
     * this decorated range.
     */
    getPropsForKey(key: string): any;
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
  declare interface Draft$Model$Decorators$DraftDecorator {
    strategy: (
      block: ImmutableData$ContentBlock,
      callback: (start: number, end: number) => void,
      contentState: ImmutableData$ContentState
    ) => void;
    component: Function;
    props?: Object;
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
  declare class Draft$Model$Decorators$CompositeDraftDecorator {
    constructor(decorators: Array<Draft$Model$Decorators$DraftDecorator>): this;
    getDecorations(
      block: ImmutableData$ContentBlock,
      contentState: ImmutableData$ContentState
    ): Immutable.List<string>;
    getComponentForKey(key: string): Function;
    getPropsForKey(key: string): Object;
  }

  declare var npm$namespace$Draft$Model$Encoding: {
    convertFromHTMLtoContentBlocks: typeof Draft$Model$Encoding$convertFromHTMLtoContentBlocks,
    convertFromRawToDraftState: typeof Draft$Model$Encoding$convertFromRawToDraftState,
    convertFromDraftStateToRaw: typeof Draft$Model$Encoding$convertFromDraftStateToRaw
  };

  /**
   * A plain object representation of an inline style range.
   */
  declare interface Draft$Model$Encoding$RawDraftInlineStyleRange {
    style: Draft$Model$Constants$DraftInlineStyleType;
    offset: number;
    length: number;
  }

  /**
   * A plain object representation of an entity attribution.
   *
   * The `key` value corresponds to the key of the entity in the `entityMap` of
   * a `ComposedText` object, not for use with `DraftEntity.get()`.
   */
  declare interface Draft$Model$Encoding$RawDraftEntityRange {
    key: number;
    offset: number;
    length: number;
  }

  /**
   * A plain object representation of an EntityInstance.
   */
  declare interface Draft$Model$Encoding$RawDraftEntity {
    type: Draft$Model$Constants$DraftEntityType;
    mutability: Draft$Model$Constants$DraftEntityMutability;
    data: {
      [key: string]: any
    };
  }

  /**
   * A plain object representation of a ContentBlock, with all style and entity
   * attribution repackaged as range objects.
   */
  declare interface Draft$Model$Encoding$RawDraftContentBlock {
    key: string;
    type: Draft$Model$Constants$DraftBlockType;
    text: string;
    depth: number;
    inlineStyleRanges: Array<Draft$Model$Encoding$RawDraftInlineStyleRange>;
    entityRanges: Array<Draft$Model$Encoding$RawDraftEntityRange>;
    data?: Object;
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
  declare interface Draft$Model$Encoding$RawDraftContentState {
    blocks: Array<Draft$Model$Encoding$RawDraftContentBlock>;
    entityMap: {
      [key: string]: Draft$Model$Encoding$RawDraftEntity
    };
  }

  declare function Draft$Model$Encoding$convertFromHTMLtoContentBlocks(
    html: string,
    DOMBuilder?: Function,
    blockRenderMap?: Draft$Component$Base$DraftBlockRenderMap
  ): {
    contentBlocks: Array<ImmutableData$ContentBlock>,
    entityMap: any
  };

  declare function Draft$Model$Encoding$convertFromRawToDraftState(
    rawState: Draft$Model$Encoding$RawDraftContentState
  ): ImmutableData$ContentState;

  declare function Draft$Model$Encoding$convertFromDraftStateToRaw(
    contentState: ImmutableData$ContentState
  ): Draft$Model$Encoding$RawDraftContentState;

  declare var npm$namespace$Draft$Model$Entity: {
    DraftEntity: typeof Draft$Model$Entity$DraftEntity
  };

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
  declare class Draft$Model$Entity$DraftEntity {
    /**
     * Create a DraftEntityInstance and store it for later retrieval.
     *
     * A random key string will be generated and returned. This key may
     * be used to track the entity's usage in a ContentBlock, and for
     * retrieving data about the entity at render time.
     */
    static create(
      type: Draft$Model$Constants$DraftEntityType,
      mutability: Draft$Model$Constants$DraftEntityMutability,
      data?: Object
    ): string;

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
    static mergeData(
      key: string,
      toMerge: {
        [key: string]: any
      }
    ): Entity$DraftEntityInstance;

    /**
     * Completely replace the data for a given instance.
     */
    static replaceData(
      key: string,
      newData: {
        [key: string]: any
      }
    ): Entity$DraftEntityInstance;
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
  declare interface Draft$Model$Entity$DraftEntityInstance {
    getType(): Draft$Model$Constants$DraftEntityType;
    getMutability(): Draft$Model$Constants$DraftEntityMutability;
    getData(): any;
  }

  declare var npm$namespace$Draft$Model$ImmutableData: {
    Record: typeof Draft$Model$ImmutableData$Record,
    DefaultDraftBlockRenderMap: typeof Draft$Model$ImmutableData$DefaultDraftBlockRenderMap,
    DefaultDraftInlineStyle: typeof Draft$Model$ImmutableData$DefaultDraftInlineStyle,

    EditorState: typeof Draft$Model$ImmutableData$EditorState,
    ContentBlock: typeof Draft$Model$ImmutableData$ContentBlock,
    ContentState: typeof Draft$Model$ImmutableData$ContentState,
    SelectionState: typeof Draft$Model$ImmutableData$SelectionState,
    CharacterMetadata: typeof Draft$Model$ImmutableData$CharacterMetadata,
    BlockMapBuilder: typeof Draft$Model$ImmutableData$BlockMapBuilder
  };
  declare type Draft$Model$ImmutableData$DraftInlineStyle = Immutable.OrderedSet<string>;

  declare type Draft$Model$ImmutableData$BlockMap = Immutable.OrderedMap<
    string,
    ImmutableData$ContentBlock
  >;

  declare var Draft$Model$ImmutableData$Record: Immutable.Record.Class;

  declare interface Draft$Model$ImmutableData$DraftBlockRenderConfig {
    element: string;
    wrapper?: React.ReactElement<any>;
  }

  declare class Draft$Model$ImmutableData$EditorState mixins Record {
    static createEmpty(
      decorator?: Draft$Model$Decorators$DraftDecoratorType
    ): Draft$Model$ImmutableData$EditorState;
    static createWithContent(
      contentState: ImmutableData$ContentState,
      decorator?: Draft$Model$Decorators$DraftDecoratorType
    ): Draft$Model$ImmutableData$EditorState;
    static create(config: Object): Draft$Model$ImmutableData$EditorState;
    static set(
      editorState: Draft$Model$ImmutableData$EditorState,
      put: Object
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * Incorporate native DOM selection changes into the EditorState. This
     * method can be used when we simply want to accept whatever the DOM
     * has given us to represent selection, and we do not need to re-render
     * the editor.
     *
     * To forcibly move the DOM selection, see `EditorState.forceSelection`.
     */
    static acceptSelection(
      editorState: Draft$Model$ImmutableData$EditorState,
      selection: ImmutableData$SelectionState
    ): Draft$Model$ImmutableData$EditorState;

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
      editorState: Draft$Model$ImmutableData$EditorState,
      selection: ImmutableData$SelectionState
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * Move selection to the end of the editor without forcing focus.
     */
    static moveSelectionToEnd(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * Force focus to the end of the editor. This is useful in scenarios
     * where we want to programmatically focus the input and it makes sense
     * to allow the user to continue working seamlessly.
     */
    static moveFocusToEnd(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * Push the current ContentState onto the undo stack if it should be
     * considered a boundary state, and set the provided ContentState as the
     * new current content.
     */
    static push(
      editorState: Draft$Model$ImmutableData$EditorState,
      contentState: ImmutableData$ContentState,
      changeType: ImmutableData$EditorChangeType
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * Make the top ContentState in the undo stack the new current content and
     * push the current content onto the redo stack.
     */
    static undo(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * Make the top ContentState in the redo stack the new current content and
     * push the current content onto the undo stack.
     */
    static redo(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$EditorState;
    toJS(): Object;
    getAllowUndo(): boolean;
    getCurrentContent(): ImmutableData$ContentState;
    getUndoStack(): Immutable.Stack<ImmutableData$ContentState>;
    getRedoStack(): Immutable.Stack<ImmutableData$ContentState>;
    getSelection(): ImmutableData$SelectionState;
    getDecorator(): Draft$Model$Decorators$DraftDecoratorType;
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
    getInlineStyleOverride(): Draft$Model$ImmutableData$DraftInlineStyle;
    static setInlineStyleOverride(
      editorState: Draft$Model$ImmutableData$EditorState,
      inlineStyleOverride: Draft$Model$ImmutableData$DraftInlineStyle
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * Get the appropriate inline style for the editor state. If an
     * override is in place, use it. Otherwise, the current style is
     * based on the location of the selection state.
     */
    getCurrentInlineStyle(): Draft$Model$ImmutableData$DraftInlineStyle;
    getBlockTree(blockKey: string): Immutable.List<any>;
    isSelectionAtStartOfContent(): boolean;
    isSelectionAtEndOfContent(): boolean;
    getDirectionMap(): Immutable.OrderedMap<any, any>;
  }

  declare class Draft$Model$ImmutableData$ContentBlock mixins Record {
    getKey(): string;
    getType(): Draft$Model$Constants$DraftBlockType;
    getType(): string;
    getText(): string;
    getCharacterList(): Immutable.List<ImmutableData$CharacterMetadata>;
    getLength(): number;
    getDepth(): number;
    getData(): Immutable.Map<any, any>;
    getInlineStyleAt(
      offset: number
    ): Draft$Model$ImmutableData$DraftInlineStyle;
    getEntityAt(offset: number): string;

    /**
     * Execute a callback for every contiguous range of styles within the block.
     */
    findStyleRanges(
      filterFn: (value: ImmutableData$CharacterMetadata) => boolean,
      callback: (start: number, end: number) => void
    ): void;

    /**
     * Execute a callback for every contiguous range of entities within the block.
     */
    findEntityRanges(
      filterFn: (value: ImmutableData$CharacterMetadata) => boolean,
      callback: (start: number, end: number) => void
    ): void;
  }

  declare class Draft$Model$ImmutableData$ContentState mixins Record {
    static createFromBlockArray(
      blocks: Array<Draft$Model$ImmutableData$ContentBlock>,
      entityMap?: any
    ): Draft$Model$ImmutableData$ContentState;
    static createFromText(
      text: string,
      delimiter?: string
    ): Draft$Model$ImmutableData$ContentState;
    createEntity(
      type: Draft$Model$Constants$DraftEntityType,
      mutability: Draft$Model$Constants$DraftEntityMutability,
      data?: Object
    ): Draft$Model$ImmutableData$ContentState;
    getEntity(key: string): EntityInstance;
    getEntityMap(): any;
    getLastCreatedEntityKey(): string;
    mergeEntityData(
      key: string,
      toMerge: {
        [key: string]: any
      }
    ): Draft$Model$ImmutableData$ContentState;
    replaceEntityData(
      key: string,
      toMerge: {
        [key: string]: any
      }
    ): Draft$Model$ImmutableData$ContentState;
    addEntity(
      instance: Draft$Model$Entity$DraftEntityInstance
    ): Draft$Model$ImmutableData$ContentState;
    getBlockMap(): Draft$Model$ImmutableData$BlockMap;
    getSelectionBefore(): ImmutableData$SelectionState;
    getSelectionAfter(): ImmutableData$SelectionState;
    getBlockForKey(key: string): Draft$Model$ImmutableData$ContentBlock;
    getKeyBefore(key: string): string;
    getKeyAfter(key: string): string;
    getBlockAfter(key: string): Draft$Model$ImmutableData$ContentBlock;
    getBlockBefore(key: string): Draft$Model$ImmutableData$ContentBlock;
    getBlocksAsArray(): Array<Draft$Model$ImmutableData$ContentBlock>;
    getFirstBlock(): Draft$Model$ImmutableData$ContentBlock;
    getLastBlock(): Draft$Model$ImmutableData$ContentBlock;
    getPlainText(delimiter?: string): string;
    hasText(): boolean;
  }

  declare class Draft$Model$ImmutableData$SelectionState mixins Record {
    static createEmpty(key: string): Draft$Model$ImmutableData$SelectionState;
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
    getEndOffset(): number;
  }

  declare class Draft$Model$ImmutableData$CharacterMetadata {
    static applyStyle(
      record: Draft$Model$ImmutableData$CharacterMetadata,
      style: string
    ): Draft$Model$ImmutableData$CharacterMetadata;
    static removeStyle(
      record: Draft$Model$ImmutableData$CharacterMetadata,
      style: string
    ): Draft$Model$ImmutableData$CharacterMetadata;
    static applyEntity(
      record: Draft$Model$ImmutableData$CharacterMetadata,
      entityKey: string | null
    ): Draft$Model$ImmutableData$CharacterMetadata;
    static applyEntity(
      record: Draft$Model$ImmutableData$CharacterMetadata
    ): Draft$Model$ImmutableData$CharacterMetadata;

    /**
     * Use this function instead of the `CharacterMetadata` constructor.
     * Since most content generally uses only a very small number of
     * style/entity permutations, we can reuse these objects as often as
     * possible.
     */
    static create(
      config?: ImmutableData$CharacterMetadataConfig
    ): Draft$Model$ImmutableData$CharacterMetadata;
    static create(): Draft$Model$ImmutableData$CharacterMetadata;
    getStyle(): Draft$Model$ImmutableData$DraftInlineStyle;
    getEntity(): string;
    hasStyle(style: string): boolean;
  }

  declare interface Draft$Model$ImmutableData$CharacterMetadataConfig {
    style?: Draft$Model$ImmutableData$DraftInlineStyle;
    entity?: string;
  }

  declare type Draft$Model$ImmutableData$EditorChangeType =
    | "adjust-depth"
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
    | "undo";

  declare class Draft$Model$ImmutableData$BlockMapBuilder {
    static createFromArray(
      blocks: Array<Draft$Model$ImmutableData$ContentBlock>
    ): Draft$Model$ImmutableData$BlockMap;
  }

  declare var Draft$Model$ImmutableData$DefaultDraftBlockRenderMap: Immutable.Map<
    any,
    any
  >;

  declare var Draft$Model$ImmutableData$DefaultDraftInlineStyle: Immutable.Map<
    any,
    any
  >;

  declare var npm$namespace$Draft$Model$Keys: {
    generateRandomKey: typeof Draft$Model$Keys$generateRandomKey
  };
  declare function Draft$Model$Keys$generateRandomKey(): string;

  declare var npm$namespace$Draft$Model$Modifier: {
    AtomicBlockUtils: typeof Draft$Model$Modifier$AtomicBlockUtils,
    DraftModifier: typeof Draft$Model$Modifier$DraftModifier,
    RichTextEditorUtil: typeof Draft$Model$Modifier$RichTextEditorUtil
  };
  declare type Draft$Model$Modifier$URI = any;

  declare class Draft$Model$Modifier$AtomicBlockUtils {
    static insertAtomicBlock(
      editorState: Draft$Model$ImmutableData$EditorState,
      entityKey: string,
      character: string
    ): Draft$Model$ImmutableData$EditorState;
    static moveAtomicBlock(
      editorState: Draft$Model$ImmutableData$EditorState,
      atomicBlock: Draft$Model$ImmutableData$ContentBlock,
      targetRange: Draft$Model$ImmutableData$SelectionState,
      insertionMode?: Draft$Model$Constants$DraftInsertionType
    ): Draft$Model$ImmutableData$EditorState;
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
  declare class Draft$Model$Modifier$DraftModifier {
    static replaceText(
      contentState: Draft$Model$ImmutableData$ContentState,
      rangeToReplace: Draft$Model$ImmutableData$SelectionState,
      text: string,
      inlineStyle?: Draft$Model$ImmutableData$DraftInlineStyle,
      entityKey?: string
    ): Draft$Model$ImmutableData$ContentState;
    static insertText(
      contentState: Draft$Model$ImmutableData$ContentState,
      targetRange: Draft$Model$ImmutableData$SelectionState,
      text: string,
      inlineStyle?: Draft$Model$ImmutableData$DraftInlineStyle,
      entityKey?: string
    ): Draft$Model$ImmutableData$ContentState;
    static moveText(
      contentState: Draft$Model$ImmutableData$ContentState,
      removalRange: Draft$Model$ImmutableData$SelectionState,
      targetRange: Draft$Model$ImmutableData$SelectionState
    ): Draft$Model$ImmutableData$ContentState;
    static replaceWithFragment(
      contentState: Draft$Model$ImmutableData$ContentState,
      targetRange: Draft$Model$ImmutableData$SelectionState,
      fragment: Draft$Model$ImmutableData$BlockMap
    ): Draft$Model$ImmutableData$ContentState;
    static removeRange(
      contentState: Draft$Model$ImmutableData$ContentState,
      rangeToRemove: Draft$Model$ImmutableData$SelectionState,
      removalDirection: Draft$Model$Constants$DraftRemovalDirection
    ): Draft$Model$ImmutableData$ContentState;
    static splitBlock(
      contentState: Draft$Model$ImmutableData$ContentState,
      selectionState: Draft$Model$ImmutableData$SelectionState
    ): Draft$Model$ImmutableData$ContentState;
    static applyInlineStyle(
      contentState: Draft$Model$ImmutableData$ContentState,
      selectionState: Draft$Model$ImmutableData$SelectionState,
      inlineStyle: string
    ): Draft$Model$ImmutableData$ContentState;
    static removeInlineStyle(
      contentState: Draft$Model$ImmutableData$ContentState,
      selectionState: Draft$Model$ImmutableData$SelectionState,
      inlineStyle: string
    ): Draft$Model$ImmutableData$ContentState;
    static setBlockType(
      contentState: Draft$Model$ImmutableData$ContentState,
      selectionState: Draft$Model$ImmutableData$SelectionState,
      blockType: Draft$Model$Constants$DraftBlockType
    ): Draft$Model$ImmutableData$ContentState;
    static setBlockType(
      contentState: Draft$Model$ImmutableData$ContentState,
      selectionState: Draft$Model$ImmutableData$SelectionState,
      blockType: string
    ): Draft$Model$ImmutableData$ContentState;
    static setBlockData(
      contentState: Draft$Model$ImmutableData$ContentState,
      selectionState: Draft$Model$ImmutableData$SelectionState,
      blockData: Immutable.Map<any, any>
    ): Draft$Model$ImmutableData$ContentState;
    static mergeBlockData(
      contentState: Draft$Model$ImmutableData$ContentState,
      selectionState: Draft$Model$ImmutableData$SelectionState,
      blockData: Immutable.Map<any, any>
    ): Draft$Model$ImmutableData$ContentState;
    static applyEntity(
      contentState: Draft$Model$ImmutableData$ContentState,
      selectionState: Draft$Model$ImmutableData$SelectionState,
      entityKey: string | null
    ): Draft$Model$ImmutableData$ContentState;
  }

  declare class Draft$Model$Modifier$RichTextEditorUtil {
    static currentBlockContainsLink(
      editorState: Draft$Model$ImmutableData$EditorState
    ): boolean;
    static getCurrentBlockType(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$Constants$DraftBlockType;
    static getCurrentBlockType(
      editorState: Draft$Model$ImmutableData$EditorState
    ): string;
    static getDataObjectForLinkURL(uri: Draft$Model$Modifier$URI): Object;
    static handleKeyCommand(
      editorState: Draft$Model$ImmutableData$EditorState,
      command: Draft$Model$Constants$DraftEditorCommand
    ): Draft$Model$ImmutableData$EditorState;
    static handleKeyCommand(
      editorState: Draft$Model$ImmutableData$EditorState,
      command: string
    ): null;
    static insertSoftNewline(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * For collapsed selections at the start of styled blocks, backspace should
     * just remove the existing style.
     */
    static onBackspace(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$EditorState;
    static onDelete(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$EditorState;
    static onTab(
      event: SyntheticKeyboardEvent,
      editorState: Draft$Model$ImmutableData$EditorState,
      maxDepth: number
    ): Draft$Model$ImmutableData$EditorState;
    static toggleBlockType(
      editorState: Draft$Model$ImmutableData$EditorState,
      blockType: Draft$Model$Constants$DraftBlockType
    ): Draft$Model$ImmutableData$EditorState;
    static toggleBlockType(
      editorState: Draft$Model$ImmutableData$EditorState,
      blockType: string
    ): Draft$Model$ImmutableData$EditorState;
    static toggleCode(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * Toggle the specified inline style for the selection. If the
     * user's selection is collapsed, apply or remove the style for the
     * internal state. If it is not collapsed, apply the change directly
     * to the document state.
     */
    static toggleInlineStyle(
      editorState: Draft$Model$ImmutableData$EditorState,
      inlineStyle: string
    ): Draft$Model$ImmutableData$EditorState;
    static toggleLink(
      editorState: Draft$Model$ImmutableData$EditorState,
      targetSelection: Draft$Model$ImmutableData$SelectionState,
      entityKey: string | null
    ): Draft$Model$ImmutableData$EditorState;

    /**
     * When a collapsed cursor is at the start of an empty styled block, allow
     * certain key commands (newline, backspace) to simply change the
     * style of the block instead of the default behavior.
     */
    static tryToRemoveBlockStyle(
      editorState: Draft$Model$ImmutableData$EditorState
    ): Draft$Model$ImmutableData$ContentState;
  }
  declare export {
    Editor,
    EditorProps,
    EditorBlock,
    EditorState,
    EditorChangeType,
    CompositeDecorator,
    Entity,
    EntityInstance,
    BlockMapBuilder,
    CharacterMetadata,
    ContentBlock,
    ContentState,
    SelectionState,
    DraftInlineStyle,
    BlockMap,
    AtomicBlockUtils,
    KeyBindingUtil,
    Modifier,
    RichUtils,
    DefaultDraftBlockRenderMap,
    DefaultDraftInlineStyle,
    RawDraftInlineStyleRange,
    RawDraftEntityRange,
    RawDraftEntity,
    RawDraftContentBlock,
    RawDraftContentState,
    convertFromRaw,
    convertToRaw,
    convertFromHTML,
    genKey,
    getDefaultKeyBinding,
    getVisibleSelectionRect,
    DraftEditorCommand,
    DraftDragType,
    DraftBlockType,
    DraftBlockRenderConfig,
    DraftBlockRenderMap,
    DraftInlineStyleType,
    DraftEntityType,
    DraftEntityMutability,
    DraftRemovalDirection,
    DraftHandleValue,
    DraftInsertionType
  };
}
