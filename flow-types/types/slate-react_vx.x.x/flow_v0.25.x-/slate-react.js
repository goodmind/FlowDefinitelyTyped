declare module "slate-react" {
  import type {
    Document,
    Editor as CoreEditor,
    Mark,
    Node,
    Block,
    Inline,
    Operations,
    SchemaProperties,
    Value,
    Operation,
    MarkProperties,
    BlockProperties,
    InlineProperties,
    Path,
    RangeProperties,
    NodeProperties,
    Range,
    Controller
  } from "slate";

  import typeof * as Immutable from "immutable";

  import typeof * as React from "react";

  declare export interface RenderAttributes {
    [key: string]: any;
  }
  declare export interface RenderMarkProps {
    attributes: RenderAttributes;
    children: React.Node;
    editor: CoreEditor;
    mark: Mark;
    marks: Immutable.Set<Mark>;
    node: Node;
    offset: number;
    text: string;
  }
  declare export interface RenderNodeProps {
    attributes: RenderAttributes;
    children: React.Node;
    editor: CoreEditor;
    isFocused: boolean;
    isSelected: boolean;
    key: string;
    node: Block | Inline;
    parent: Node;
    readOnly: boolean;
  }
  declare export interface RenderPlaceholderProps {
    editor: CoreEditor;
    readOnly: boolean;
  }
  declare export type EventHook = (
    event: Event,
    editor: CoreEditor,
    next: () => any
  ) => any;
  declare export interface Plugin {
    decorateNode?: (node: Node, editor: CoreEditor, next: () => any) => any;
    renderEditor?: (
      props: EditorProps,
      editor: CoreEditor,
      next: () => any
    ) => any;
    renderMark?: (
      props: RenderMarkProps,
      editor: CoreEditor,
      next: () => any
    ) => any;
    renderNode?: (
      props: RenderNodeProps,
      editor: CoreEditor,
      next: () => any
    ) => any;
    renderPlaceholder?: (
      props: RenderPlaceholderProps,
      editor: CoreEditor,
      next: () => any
    ) => any;
    shouldNodeComponentUpdate?: (
      previousProps: RenderNodeProps,
      props: RenderNodeProps,
      editor: CoreEditor,
      next: () => any
    ) => any;
    onBeforeInput?: EventHook;
    onBlur?: EventHook;
    onClick?: EventHook;
    onCompositionEnd?: EventHook;
    onCompositionStart?: EventHook;
    onCopy?: EventHook;
    onCut?: EventHook;
    onDragEnd?: EventHook;
    onDragEnter?: EventHook;
    onDragExit?: EventHook;
    onDragLeave?: EventHook;
    onDragOver?: EventHook;
    onDragStart?: EventHook;
    onDrop?: EventHook;
    onFocus?: EventHook;
    onInput?: EventHook;
    onKeyDown?: EventHook;
    onPaste?: EventHook;
    onSelect?: EventHook;
  }
  declare export interface BasicEditorProps {
    value: Value;
    autoCorrect?: boolean;
    autoFocus?: boolean;
    className?: string;
    onChange?: (change: {
      operations: Immutable.List<Operation>,
      value: Value
    }) => any;
    placeholder?: any;
    plugins?: Plugin[];
    readOnly?: boolean;
    role?: string;
    schema?: SchemaProperties;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
  }
  declare export type EditorProps = BasicEditorProps & Plugin;
  declare export interface EditorState {
    value: Value;
  }
  declare export class Editor
    mixins React.Component<EditorProps, EditorState>, Controller {
    controller: CoreEditor;
    plugins: Plugin[];
    operations: Immutable.List<Operation>;
    readOnly: boolean;
    value: Value;
    resolveController(
      plugins: Plugin[],
      schema: SchemaProperties,
      commands: any[],
      queries: any[]
    ): void;
    addMark: $PropertyType<CoreEditor, "addMark">;
    delete: $PropertyType<CoreEditor, "delete">;
    deleteBackward: $PropertyType<CoreEditor, "deleteBackward">;
    deleteForward: $PropertyType<CoreEditor, "deleteForward">;
    insertBlock: $PropertyType<CoreEditor, "insertBlock">;
    insertFragment: $PropertyType<CoreEditor, "insertFragment">;
    insertInline: $PropertyType<CoreEditor, "insertInline">;
    insertText: $PropertyType<CoreEditor, "insertText">;
    setBlocks: $PropertyType<CoreEditor, "setBlocks">;
    setInlines: $PropertyType<CoreEditor, "setInlines">;
    splitBlock: $PropertyType<CoreEditor, "splitBlock">;
    splitInline: $PropertyType<CoreEditor, "splitInline">;
    removeMark: $PropertyType<CoreEditor, "removeMark">;
    replaceMark: $PropertyType<CoreEditor, "replaceMark">;
    toggleMark: $PropertyType<CoreEditor, "toggleMark">;
    unwrapBlock: $PropertyType<CoreEditor, "unwrapBlock">;
    unwrapInline: $PropertyType<CoreEditor, "unwrapInline">;
    wrapBlock: $PropertyType<CoreEditor, "wrapBlock">;
    wrapInline: $PropertyType<CoreEditor, "wrapInline">;
    wrapText: $PropertyType<CoreEditor, "wrapText">;
    blur: $PropertyType<CoreEditor, "blur">;
    deselect: $PropertyType<CoreEditor, "deselect">;
    flip: $PropertyType<CoreEditor, "flip">;
    focus: $PropertyType<CoreEditor, "focus">;
    moveAnchorBackward: $PropertyType<CoreEditor, "moveAnchorBackward">;
    moveAnchorForward: $PropertyType<CoreEditor, "moveAnchorForward">;
    moveAnchorTo: $PropertyType<CoreEditor, "moveAnchorTo">;
    moveAnchorToEndOfBlock: $PropertyType<CoreEditor, "moveAnchorToEndOfBlock">;
    moveAnchorToEndOfInline: $PropertyType<
      CoreEditor,
      "moveAnchorToEndOfInline"
    >;
    moveAnchorToEndOfDocument: $PropertyType<
      CoreEditor,
      "moveAnchorToEndOfDocument"
    >;
    moveAnchorToEndOfNextBlock: $PropertyType<
      CoreEditor,
      "moveAnchorToEndOfNextBlock"
    >;
    moveAnchorToEndOfNextInline: $PropertyType<
      CoreEditor,
      "moveAnchorToEndOfNextInline"
    >;
    moveAnchorToEndOfNextText: $PropertyType<
      CoreEditor,
      "moveAnchorToEndOfNextText"
    >;
    moveAnchorEndOfNode: $PropertyType<CoreEditor, "moveAnchorEndOfNode">;
    moveAnchorToEndOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveAnchorToEndOfPreviousBlock"
    >;
    moveAnchorToEndOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveAnchorToEndOfPreviousInline"
    >;
    moveAnchorToEndOfPreviousText: $PropertyType<
      CoreEditor,
      "moveAnchorToEndOfPreviousText"
    >;
    moveAnchorToEndOfText: $PropertyType<CoreEditor, "moveAnchorToEndOfText">;
    moveAnchorToStartOfBlock: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfBlock"
    >;
    moveAnchorToStartOfDocument: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfDocument"
    >;
    moveAnchorToStartOfInline: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfInline"
    >;
    moveAnchorToStartOfNextBlock: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfNextBlock"
    >;
    moveAnchorToStartOfNextInline: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfNextInline"
    >;
    moveAnchorToStartOfNextText: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfNextText"
    >;
    moveAnchorToStartOfNode: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfNode"
    >;
    moveAnchorToStartOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfPreviousBlock"
    >;
    moveAnchorToStartOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfPreviousInline"
    >;
    moveAnchorToStartOfPreviousText: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfPreviousText"
    >;
    moveAnchorToStartOfText: $PropertyType<
      CoreEditor,
      "moveAnchorToStartOfText"
    >;
    moveEndBackward: $PropertyType<CoreEditor, "moveEndBackward">;
    moveEndForward: $PropertyType<CoreEditor, "moveEndForward">;
    moveEndTo: $PropertyType<CoreEditor, "moveEndTo">;
    moveEndToEndOfBlock: $PropertyType<CoreEditor, "moveEndToEndOfBlock">;
    moveEndToEndOfDocument: $PropertyType<CoreEditor, "moveEndToEndOfDocument">;
    moveEndToEndOfInline: $PropertyType<CoreEditor, "moveEndToEndOfInline">;
    moveEndToEndOfNextBlock: $PropertyType<
      CoreEditor,
      "moveEndToEndOfNextBlock"
    >;
    moveEndToEndOfNextInline: $PropertyType<
      CoreEditor,
      "moveEndToEndOfNextInline"
    >;
    moveEndToEndOfNextText: $PropertyType<CoreEditor, "moveEndToEndOfNextText">;
    moveEndToEndOfNode: $PropertyType<CoreEditor, "moveEndToEndOfNode">;
    moveEndToEndOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveEndToEndOfPreviousBlock"
    >;
    moveEndToEndOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveEndToEndOfPreviousInline"
    >;
    moveEndToEndOfPreviousText: $PropertyType<
      CoreEditor,
      "moveEndToEndOfPreviousText"
    >;
    moveEndToEndOfText: $PropertyType<CoreEditor, "moveEndToEndOfText">;
    moveEndToStartOfBlock: $PropertyType<CoreEditor, "moveEndToStartOfBlock">;
    moveEndToStartOfDocument: $PropertyType<
      CoreEditor,
      "moveEndToStartOfDocument"
    >;
    moveEndToStartOfInline: $PropertyType<CoreEditor, "moveEndToStartOfInline">;
    moveEndToStartOfNextBlock: $PropertyType<
      CoreEditor,
      "moveEndToStartOfNextBlock"
    >;
    moveEndToStartOfNextInline: $PropertyType<
      CoreEditor,
      "moveEndToStartOfNextInline"
    >;
    moveEndToStartOfNextText: $PropertyType<
      CoreEditor,
      "moveEndToStartOfNextText"
    >;
    moveEndToStartOfNode: $PropertyType<CoreEditor, "moveEndToStartOfNode">;
    moveEndToStartOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveEndToStartOfPreviousBlock"
    >;
    moveEndToStartOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveEndToStartOfPreviousInline"
    >;
    moveEndToStartOfPreviousText: $PropertyType<
      CoreEditor,
      "moveEndToStartOfPreviousText"
    >;
    moveEndToStartOfText: $PropertyType<CoreEditor, "moveEndToStartOfText">;
    moveFocusBackward: $PropertyType<CoreEditor, "moveFocusBackward">;
    moveFocusForward: $PropertyType<CoreEditor, "moveFocusForward">;
    moveFocusTo: $PropertyType<CoreEditor, "moveFocusTo">;
    moveFocusToEndOfBlock: $PropertyType<CoreEditor, "moveFocusToEndOfBlock">;
    moveFocusToEndOfDocument: $PropertyType<
      CoreEditor,
      "moveFocusToEndOfDocument"
    >;
    moveFocusToEndOfInline: $PropertyType<CoreEditor, "moveFocusToEndOfInline">;
    moveFocusToEndOfNextBlock: $PropertyType<
      CoreEditor,
      "moveFocusToEndOfNextBlock"
    >;
    moveFocusToEndOfNextInline: $PropertyType<
      CoreEditor,
      "moveFocusToEndOfNextInline"
    >;
    moveFocusToEndOfNextText: $PropertyType<
      CoreEditor,
      "moveFocusToEndOfNextText"
    >;
    moveFocusToEndOfNode: $PropertyType<CoreEditor, "moveFocusToEndOfNode">;
    moveFocusToEndOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveFocusToEndOfPreviousBlock"
    >;
    moveFocusToEndOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveFocusToEndOfPreviousInline"
    >;
    moveFocusToEndOfPreviousText: $PropertyType<
      CoreEditor,
      "moveFocusToEndOfPreviousText"
    >;
    moveFocusToEndOfText: $PropertyType<CoreEditor, "moveFocusToEndOfText">;
    moveFocusToStartOfBlock: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfBlock"
    >;
    moveFocusToStartOfDocument: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfDocument"
    >;
    moveFocusToStartOfInline: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfInline"
    >;
    moveFocusToStartOfNextBlock: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfNextBlock"
    >;
    moveFocusToStartOfNextInline: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfNextInline"
    >;
    moveFocusToStartOfNextText: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfNextText"
    >;
    moveFocusToStartOfNode: $PropertyType<CoreEditor, "moveFocusToStartOfNode">;
    moveFocusToStartOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfPreviousBlock"
    >;
    moveFocusToStartOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfPreviousInline"
    >;
    moveFocusToStartOfPreviousText: $PropertyType<
      CoreEditor,
      "moveFocusToStartOfPreviousText"
    >;
    moveFocusToStartOfText: $PropertyType<CoreEditor, "moveFocusToStartOfText">;
    moveStartForward: $PropertyType<CoreEditor, "moveStartForward">;
    moveStartBackward: $PropertyType<CoreEditor, "moveStartBackward">;
    moveStartTo: $PropertyType<CoreEditor, "moveStartTo">;
    moveStartToEndOfBlock: $PropertyType<CoreEditor, "moveStartToEndOfBlock">;
    moveStartToEndOfDocument: $PropertyType<
      CoreEditor,
      "moveStartToEndOfDocument"
    >;
    moveStartToEndOfInline: $PropertyType<CoreEditor, "moveStartToEndOfInline">;
    moveStartToEndOfNextBlock: $PropertyType<
      CoreEditor,
      "moveStartToEndOfNextBlock"
    >;
    moveStartToEndOfNextInline: $PropertyType<
      CoreEditor,
      "moveStartToEndOfNextInline"
    >;
    moveStartToEndOfNextText: $PropertyType<
      CoreEditor,
      "moveStartToEndOfNextText"
    >;
    moveStartToEndOfNode: $PropertyType<CoreEditor, "moveStartToEndOfNode">;
    moveStartToEndOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveStartToEndOfPreviousBlock"
    >;
    moveStartToEndOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveStartToEndOfPreviousInline"
    >;
    moveStartToEndOfPreviousText: $PropertyType<
      CoreEditor,
      "moveStartToEndOfPreviousText"
    >;
    moveStartToEndOfText: $PropertyType<CoreEditor, "moveStartToEndOfText">;
    moveStartToStartOfBlock: $PropertyType<
      CoreEditor,
      "moveStartToStartOfBlock"
    >;
    moveStartToStartOfDocument: $PropertyType<
      CoreEditor,
      "moveStartToStartOfDocument"
    >;
    moveStartToStartOfInline: $PropertyType<
      CoreEditor,
      "moveStartToStartOfInline"
    >;
    moveStartToStartOfNextBlock: $PropertyType<
      CoreEditor,
      "moveStartToStartOfNextBlock"
    >;
    moveStartToStartOfNextInline: $PropertyType<
      CoreEditor,
      "moveStartToStartOfNextInline"
    >;
    moveStartToStartOfNextText: $PropertyType<
      CoreEditor,
      "moveStartToStartOfNextText"
    >;
    moveStartToStartOfNode: $PropertyType<CoreEditor, "moveStartToStartOfNode">;
    moveStartToStartOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveStartToStartOfPreviousBlock"
    >;
    moveStartToStartOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveStartToStartOfPreviousInline"
    >;
    moveStartToStartOfPreviousText: $PropertyType<
      CoreEditor,
      "moveStartToStartOfPreviousText"
    >;
    moveStartToStartOfText: $PropertyType<CoreEditor, "moveStartToStartOfText">;
    moveBackward: $PropertyType<CoreEditor, "moveBackward">;
    moveForward: $PropertyType<CoreEditor, "moveForward">;
    moveTo: $PropertyType<CoreEditor, "moveTo">;
    moveToAnchor: $PropertyType<CoreEditor, "moveToAnchor">;
    moveToFocus: $PropertyType<CoreEditor, "moveToFocus">;
    moveToStart: $PropertyType<CoreEditor, "moveToStart">;
    moveToEnd: $PropertyType<CoreEditor, "moveToEnd">;
    moveToEndOfBlock: $PropertyType<CoreEditor, "moveToEndOfBlock">;
    moveToEndOfDocument: $PropertyType<CoreEditor, "moveToEndOfDocument">;
    moveToEndOfInline: $PropertyType<CoreEditor, "moveToEndOfInline">;
    moveToEndOfNextBlock: $PropertyType<CoreEditor, "moveToEndOfNextBlock">;
    moveToEndOfNextInline: $PropertyType<CoreEditor, "moveToEndOfNextInline">;
    moveToEndOfNextText: $PropertyType<CoreEditor, "moveToEndOfNextText">;
    moveToEndOfNode: $PropertyType<CoreEditor, "moveToEndOfNode">;
    moveToEndOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveToEndOfPreviousBlock"
    >;
    moveToEndOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveToEndOfPreviousInline"
    >;
    moveToEndOfPreviousText: $PropertyType<
      CoreEditor,
      "moveToEndOfPreviousText"
    >;
    moveToEndOfText: $PropertyType<CoreEditor, "moveToEndOfText">;
    moveToStartOfBlock: $PropertyType<CoreEditor, "moveToStartOfBlock">;
    moveToStartOfDocument: $PropertyType<CoreEditor, "moveToStartOfDocument">;
    moveToStartOfInline: $PropertyType<CoreEditor, "moveToStartOfInline">;
    moveToStartOfNextBlock: $PropertyType<CoreEditor, "moveToStartOfNextBlock">;
    moveToStartOfNextInline: $PropertyType<
      CoreEditor,
      "moveToStartOfNextInline"
    >;
    moveToStartOfNextText: $PropertyType<CoreEditor, "moveToStartOfNextText">;
    moveToStartOfNode: $PropertyType<CoreEditor, "moveToStartOfNode">;
    moveToStartOfPreviousBlock: $PropertyType<
      CoreEditor,
      "moveToStartOfPreviousBlock"
    >;
    moveToStartOfPreviousInline: $PropertyType<
      CoreEditor,
      "moveToStartOfPreviousInline"
    >;
    moveToStartOfPreviousText: $PropertyType<
      CoreEditor,
      "moveToStartOfPreviousText"
    >;
    moveToStartOfText: $PropertyType<CoreEditor, "moveToStartOfText">;
    moveToRangeOfDocument: $PropertyType<CoreEditor, "moveToRangeOfDocument">;
    moveToRangeOf: $PropertyType<CoreEditor, "moveToRangeOf">;
    select: $PropertyType<CoreEditor, "select">;
    addMarkAtRange: $PropertyType<CoreEditor, "addMarkAtRange">;
    deleteAtRange: $PropertyType<CoreEditor, "deleteAtRange">;
    deleteCharBackwardAtRange: $PropertyType<
      CoreEditor,
      "deleteCharBackwardAtRange"
    >;
    deleteLineBackwardAtRange: $PropertyType<
      CoreEditor,
      "deleteLineBackwardAtRange"
    >;
    deleteWordBackwardAtRange: $PropertyType<
      CoreEditor,
      "deleteWordBackwardAtRange"
    >;
    deleteBackwardAtRange: $PropertyType<CoreEditor, "deleteBackwardAtRange">;
    deleteCharForwardAtRange: $PropertyType<
      CoreEditor,
      "deleteCharForwardAtRange"
    >;
    deleteLineForwardAtRange: $PropertyType<
      CoreEditor,
      "deleteLineForwardAtRange"
    >;
    deleteWordForwardAtRange: $PropertyType<
      CoreEditor,
      "deleteWordForwardAtRange"
    >;
    deleteForwardAtRange: $PropertyType<CoreEditor, "deleteForwardAtRange">;
    insertBlockAtRange: $PropertyType<CoreEditor, "insertBlockAtRange">;
    insertFragmentAtRange: $PropertyType<CoreEditor, "insertFragmentAtRange">;
    insertInlineAtRange: $PropertyType<CoreEditor, "insertInlineAtRange">;
    insertTextAtRange: $PropertyType<CoreEditor, "insertTextAtRange">;
    setBlocksAtRange: $PropertyType<CoreEditor, "setBlocksAtRange">;
    setInlinesAtRange: $PropertyType<CoreEditor, "setInlinesAtRange">;
    splitBlockAtRange: $PropertyType<CoreEditor, "splitBlockAtRange">;
    splitInlineAtRange: $PropertyType<CoreEditor, "splitInlineAtRange">;
    removeMarkAtRange: $PropertyType<CoreEditor, "removeMarkAtRange">;
    toggleMarkAtRange: $PropertyType<CoreEditor, "toggleMarkAtRange">;
    unwrapBlockAtRange: $PropertyType<CoreEditor, "unwrapBlockAtRange">;
    unwrapInlineAtRange: $PropertyType<CoreEditor, "unwrapInlineAtRange">;
    wrapBlockAtRange: $PropertyType<CoreEditor, "wrapBlockAtRange">;
    wrapInlineAtRange: $PropertyType<CoreEditor, "wrapInlineAtRange">;
    wrapTextAtRange: $PropertyType<CoreEditor, "wrapTextAtRange">;
    addMarkByKey: $PropertyType<CoreEditor, "addMarkByKey">;
    addMarkByPath: $PropertyType<CoreEditor, "addMarkByPath">;
    insertNodeByKey: $PropertyType<CoreEditor, "insertNodeByKey">;
    insertNodeByPath: $PropertyType<CoreEditor, "insertNodeByPath">;
    insertFragmentByKey: $PropertyType<CoreEditor, "insertFragmentByKey">;
    insertFragmentByPath: $PropertyType<CoreEditor, "insertFragmentByPath">;
    insertTextByKey: $PropertyType<CoreEditor, "insertTextByKey">;
    insertTextByPath: $PropertyType<CoreEditor, "insertTextByPath">;
    mergeNodeByKey: $PropertyType<CoreEditor, "mergeNodeByKey">;
    mergeNodeByPath: $PropertyType<CoreEditor, "mergeNodeByPath">;
    moveNodeByKey: $PropertyType<CoreEditor, "moveNodeByKey">;
    moveNodeByPath: $PropertyType<CoreEditor, "moveNodeByPath">;
    removeMarkByKey: $PropertyType<CoreEditor, "removeMarkByKey">;
    removeMarkByPath: $PropertyType<CoreEditor, "removeMarkByPath">;
    removeNodeByKey: $PropertyType<CoreEditor, "removeNodeByKey">;
    removeNodeByPath: $PropertyType<CoreEditor, "removeNodeByPath">;
    replaceNodeByKey: $PropertyType<CoreEditor, "replaceNodeByKey">;
    replaceNodeByPath: $PropertyType<CoreEditor, "replaceNodeByPath">;
    removeTextByKey: $PropertyType<CoreEditor, "removeTextByKey">;
    removeTextByPath: $PropertyType<CoreEditor, "removeTextByPath">;
    setMarkByKey: $PropertyType<CoreEditor, "setMarkByKey">;
    setMarksByPath: $PropertyType<CoreEditor, "setMarksByPath">;
    setNodeByKey: $PropertyType<CoreEditor, "setNodeByKey">;
    setNodeByPath: $PropertyType<CoreEditor, "setNodeByPath">;
    splitNodeByKey: $PropertyType<CoreEditor, "splitNodeByKey">;
    splitNodeByPath: $PropertyType<CoreEditor, "splitNodeByPath">;
    unwrapInlineByKey: $PropertyType<CoreEditor, "unwrapInlineByKey">;
    unwrapInlineByPath: $PropertyType<CoreEditor, "unwrapInlineByPath">;
    unwrapBlockByKey: $PropertyType<CoreEditor, "unwrapBlockByKey">;
    unwrapBlockByPath: $PropertyType<CoreEditor, "unwrapBlockByPath">;
    unwrapNodeByKey: $PropertyType<CoreEditor, "unwrapNodeByKey">;
    unwrapNodeByPath: $PropertyType<CoreEditor, "unwrapNodeByPath">;
    wrapInlineByKey: $PropertyType<CoreEditor, "wrapInlineByKey">;
    wrapInlineByPath: $PropertyType<CoreEditor, "wrapInlineByPath">;
    wrapBlockByKey: $PropertyType<CoreEditor, "wrapBlockByKey">;
    wrapBlockByPath: $PropertyType<CoreEditor, "wrapBlockByPath">;
    wrapNodeByKey: $PropertyType<CoreEditor, "wrapNodeByKey">;
    wrapNodeByPath: $PropertyType<CoreEditor, "wrapNodeByPath">;
    normalize: $PropertyType<CoreEditor, "normalize">;
    withoutNormalizing: $PropertyType<CoreEditor, "withoutNormalizing">;
    withoutSaving: $PropertyType<CoreEditor, "withoutSaving">;
    withoutMerging: $PropertyType<CoreEditor, "withoutMerging">;
    redo: $PropertyType<CoreEditor, "redo">;
    undo: $PropertyType<CoreEditor, "undo">;
    snapshotSelection: $PropertyType<CoreEditor, "snapshotSelection">;
    command: $PropertyType<CoreEditor, "command">;
    query: $PropertyType<CoreEditor, "query">;
    registerCommand: $PropertyType<CoreEditor, "registerCommand">;
    registerQuery: $PropertyType<CoreEditor, "registerQuery">;
    applyOperation: $PropertyType<CoreEditor, "applyOperation">;
    run: $PropertyType<CoreEditor, "run">;
  }
  declare export type SlateType =
    | "fragment"
    | "html"
    | "node"
    | "rich"
    | "text"
    | "files";
  declare export function cloneFragment(
    event: Event,
    value: Value,
    fragment?: Document,
    callback?: () => void
  ): void;

  declare export function findDOMNode(node: Node, win?: Window): Element;

  declare export function findDOMRange(range: Range, win?: Window): Range;

  declare export function findNode(element: Element, value: Value): Node;

  declare export function findRange(selection: Selection, value: Value): Range;

  declare export function getEventRange(event: Event, value: Value): Range;

  declare export function getEventTransfer(
    event: Event
  ): {
    type: SlateType,
    node: Node
  };

  declare export function setEventTransfer(
    event: Event,
    type: SlateType,
    data: any
  ): void;
}
