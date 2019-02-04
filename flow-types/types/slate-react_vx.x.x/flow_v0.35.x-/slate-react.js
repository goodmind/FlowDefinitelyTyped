declare module 'slate-react' {
        import type {
          Document,CoreEditor,Mark,Node,Block,Inline,Operations,SchemaProperties,Value,Operation,MarkProperties,BlockProperties,InlineProperties,Path,RangeProperties,NodeProperties,Range,Controller
        } from 'slate';

	import typeof * as Immutable from 'immutable';

	import typeof * as React from 'react';

	declare export interface RenderAttributes {
[key: string]: any
} 
	declare export interface RenderMarkProps {
attributes: RenderAttributes,
children: React.ReactNode,
editor: CoreEditor,
mark: Mark,
marks: Immutable.Set<Mark>,
node: Node,
offset: number,
text: string
} 
	declare export interface RenderNodeProps {
attributes: RenderAttributes,
children: React.ReactNode,
editor: CoreEditor,
isFocused: boolean,
isSelected: boolean,
key: string,
node: Block | Inline,
parent: Node,
readOnly: boolean
} 
	declare export interface RenderPlaceholderProps {
editor: CoreEditor,
readOnly: boolean
} 
	declare export type EventHook = (event: Event, editor: CoreEditor, next: () => any) => any;
	declare export interface Plugin {
decorateNode?: (node: Node, editor: CoreEditor, next: () => any) => any,
renderEditor?: (props: EditorProps, editor: CoreEditor, next: () => any) => any,
renderMark?: (props: RenderMarkProps, editor: CoreEditor, next: () => any) => any,
renderNode?: (props: RenderNodeProps, editor: CoreEditor, next: () => any) => any,
renderPlaceholder?: (props: RenderPlaceholderProps, editor: CoreEditor, next: () => any) => any,
shouldNodeComponentUpdate?: (
previousProps: RenderNodeProps,
props: RenderNodeProps,
editor: CoreEditor,
next: () => any) => any,
onBeforeInput?: EventHook,
onBlur?: EventHook,
onClick?: EventHook,
onCompositionEnd?: EventHook,
onCompositionStart?: EventHook,
onCopy?: EventHook,
onCut?: EventHook,
onDragEnd?: EventHook,
onDragEnter?: EventHook,
onDragExit?: EventHook,
onDragLeave?: EventHook,
onDragOver?: EventHook,
onDragStart?: EventHook,
onDrop?: EventHook,
onFocus?: EventHook,
onInput?: EventHook,
onKeyDown?: EventHook,
onPaste?: EventHook,
onSelect?: EventHook
} 
	declare export interface BasicEditorProps {
value: Value,
autoCorrect?: boolean,
autoFocus?: boolean,
className?: string,
onChange?: (change: {
operations: Immutable.List<Operation>,
value: Value
}) => any,
placeholder?: any,
plugins?: Plugin[],
readOnly?: boolean,
role?: string,
schema?: SchemaProperties,
spellCheck?: boolean,
style?: React.CSSProperties,
tabIndex?: number
} 
	declare export type EditorProps = BasicEditorProps & Plugin;
	declare export interface EditorState {
value: Value
} 
	declare export class Editor mixins React.Component<EditorProps, EditorState>, Controller {
controller: CoreEditor;
plugins: Plugin[];
operations: Immutable.List<Operation>;
readOnly: boolean;
value: Value;
resolveController(
plugins: Plugin[],
schema: SchemaProperties,
commands: any[],
queries: any[]): void;
addMark: $ElementType<CoreEditor, "addMark">;
delete: $ElementType<CoreEditor, "delete">;
deleteBackward: $ElementType<CoreEditor, "deleteBackward">;
deleteForward: $ElementType<CoreEditor, "deleteForward">;
insertBlock: $ElementType<CoreEditor, "insertBlock">;
insertFragment: $ElementType<CoreEditor, "insertFragment">;
insertInline: $ElementType<CoreEditor, "insertInline">;
insertText: $ElementType<CoreEditor, "insertText">;
setBlocks: $ElementType<CoreEditor, "setBlocks">;
setInlines: $ElementType<CoreEditor, "setInlines">;
splitBlock: $ElementType<CoreEditor, "splitBlock">;
splitInline: $ElementType<CoreEditor, "splitInline">;
removeMark: $ElementType<CoreEditor, "removeMark">;
replaceMark: $ElementType<CoreEditor, "replaceMark">;
toggleMark: $ElementType<CoreEditor, "toggleMark">;
unwrapBlock: $ElementType<CoreEditor, "unwrapBlock">;
unwrapInline: $ElementType<CoreEditor, "unwrapInline">;
wrapBlock: $ElementType<CoreEditor, "wrapBlock">;
wrapInline: $ElementType<CoreEditor, "wrapInline">;
wrapText: $ElementType<CoreEditor, "wrapText">;
blur: $ElementType<CoreEditor, "blur">;
deselect: $ElementType<CoreEditor, "deselect">;
flip: $ElementType<CoreEditor, "flip">;
focus: $ElementType<CoreEditor, "focus">;
moveAnchorBackward: $ElementType<CoreEditor, "moveAnchorBackward">;
moveAnchorForward: $ElementType<CoreEditor, "moveAnchorForward">;
moveAnchorTo: $ElementType<CoreEditor, "moveAnchorTo">;
moveAnchorToEndOfBlock: $ElementType<CoreEditor, "moveAnchorToEndOfBlock">;
moveAnchorToEndOfInline: $ElementType<CoreEditor, "moveAnchorToEndOfInline">;
moveAnchorToEndOfDocument: $ElementType<CoreEditor, "moveAnchorToEndOfDocument">;
moveAnchorToEndOfNextBlock: $ElementType<CoreEditor, "moveAnchorToEndOfNextBlock">;
moveAnchorToEndOfNextInline: $ElementType<CoreEditor, "moveAnchorToEndOfNextInline">;
moveAnchorToEndOfNextText: $ElementType<CoreEditor, "moveAnchorToEndOfNextText">;
moveAnchorEndOfNode: $ElementType<CoreEditor, "moveAnchorEndOfNode">;
moveAnchorToEndOfPreviousBlock: $ElementType<CoreEditor, "moveAnchorToEndOfPreviousBlock">;
moveAnchorToEndOfPreviousInline: $ElementType<CoreEditor, "moveAnchorToEndOfPreviousInline">;
moveAnchorToEndOfPreviousText: $ElementType<CoreEditor, "moveAnchorToEndOfPreviousText">;
moveAnchorToEndOfText: $ElementType<CoreEditor, "moveAnchorToEndOfText">;
moveAnchorToStartOfBlock: $ElementType<CoreEditor, "moveAnchorToStartOfBlock">;
moveAnchorToStartOfDocument: $ElementType<CoreEditor, "moveAnchorToStartOfDocument">;
moveAnchorToStartOfInline: $ElementType<CoreEditor, "moveAnchorToStartOfInline">;
moveAnchorToStartOfNextBlock: $ElementType<CoreEditor, "moveAnchorToStartOfNextBlock">;
moveAnchorToStartOfNextInline: $ElementType<CoreEditor, "moveAnchorToStartOfNextInline">;
moveAnchorToStartOfNextText: $ElementType<CoreEditor, "moveAnchorToStartOfNextText">;
moveAnchorToStartOfNode: $ElementType<CoreEditor, "moveAnchorToStartOfNode">;
moveAnchorToStartOfPreviousBlock: $ElementType<CoreEditor, "moveAnchorToStartOfPreviousBlock">;
moveAnchorToStartOfPreviousInline: $ElementType<CoreEditor, "moveAnchorToStartOfPreviousInline">;
moveAnchorToStartOfPreviousText: $ElementType<CoreEditor, "moveAnchorToStartOfPreviousText">;
moveAnchorToStartOfText: $ElementType<CoreEditor, "moveAnchorToStartOfText">;
moveEndBackward: $ElementType<CoreEditor, "moveEndBackward">;
moveEndForward: $ElementType<CoreEditor, "moveEndForward">;
moveEndTo: $ElementType<CoreEditor, "moveEndTo">;
moveEndToEndOfBlock: $ElementType<CoreEditor, "moveEndToEndOfBlock">;
moveEndToEndOfDocument: $ElementType<CoreEditor, "moveEndToEndOfDocument">;
moveEndToEndOfInline: $ElementType<CoreEditor, "moveEndToEndOfInline">;
moveEndToEndOfNextBlock: $ElementType<CoreEditor, "moveEndToEndOfNextBlock">;
moveEndToEndOfNextInline: $ElementType<CoreEditor, "moveEndToEndOfNextInline">;
moveEndToEndOfNextText: $ElementType<CoreEditor, "moveEndToEndOfNextText">;
moveEndToEndOfNode: $ElementType<CoreEditor, "moveEndToEndOfNode">;
moveEndToEndOfPreviousBlock: $ElementType<CoreEditor, "moveEndToEndOfPreviousBlock">;
moveEndToEndOfPreviousInline: $ElementType<CoreEditor, "moveEndToEndOfPreviousInline">;
moveEndToEndOfPreviousText: $ElementType<CoreEditor, "moveEndToEndOfPreviousText">;
moveEndToEndOfText: $ElementType<CoreEditor, "moveEndToEndOfText">;
moveEndToStartOfBlock: $ElementType<CoreEditor, "moveEndToStartOfBlock">;
moveEndToStartOfDocument: $ElementType<CoreEditor, "moveEndToStartOfDocument">;
moveEndToStartOfInline: $ElementType<CoreEditor, "moveEndToStartOfInline">;
moveEndToStartOfNextBlock: $ElementType<CoreEditor, "moveEndToStartOfNextBlock">;
moveEndToStartOfNextInline: $ElementType<CoreEditor, "moveEndToStartOfNextInline">;
moveEndToStartOfNextText: $ElementType<CoreEditor, "moveEndToStartOfNextText">;
moveEndToStartOfNode: $ElementType<CoreEditor, "moveEndToStartOfNode">;
moveEndToStartOfPreviousBlock: $ElementType<CoreEditor, "moveEndToStartOfPreviousBlock">;
moveEndToStartOfPreviousInline: $ElementType<CoreEditor, "moveEndToStartOfPreviousInline">;
moveEndToStartOfPreviousText: $ElementType<CoreEditor, "moveEndToStartOfPreviousText">;
moveEndToStartOfText: $ElementType<CoreEditor, "moveEndToStartOfText">;
moveFocusBackward: $ElementType<CoreEditor, "moveFocusBackward">;
moveFocusForward: $ElementType<CoreEditor, "moveFocusForward">;
moveFocusTo: $ElementType<CoreEditor, "moveFocusTo">;
moveFocusToEndOfBlock: $ElementType<CoreEditor, "moveFocusToEndOfBlock">;
moveFocusToEndOfDocument: $ElementType<CoreEditor, "moveFocusToEndOfDocument">;
moveFocusToEndOfInline: $ElementType<CoreEditor, "moveFocusToEndOfInline">;
moveFocusToEndOfNextBlock: $ElementType<CoreEditor, "moveFocusToEndOfNextBlock">;
moveFocusToEndOfNextInline: $ElementType<CoreEditor, "moveFocusToEndOfNextInline">;
moveFocusToEndOfNextText: $ElementType<CoreEditor, "moveFocusToEndOfNextText">;
moveFocusToEndOfNode: $ElementType<CoreEditor, "moveFocusToEndOfNode">;
moveFocusToEndOfPreviousBlock: $ElementType<CoreEditor, "moveFocusToEndOfPreviousBlock">;
moveFocusToEndOfPreviousInline: $ElementType<CoreEditor, "moveFocusToEndOfPreviousInline">;
moveFocusToEndOfPreviousText: $ElementType<CoreEditor, "moveFocusToEndOfPreviousText">;
moveFocusToEndOfText: $ElementType<CoreEditor, "moveFocusToEndOfText">;
moveFocusToStartOfBlock: $ElementType<CoreEditor, "moveFocusToStartOfBlock">;
moveFocusToStartOfDocument: $ElementType<CoreEditor, "moveFocusToStartOfDocument">;
moveFocusToStartOfInline: $ElementType<CoreEditor, "moveFocusToStartOfInline">;
moveFocusToStartOfNextBlock: $ElementType<CoreEditor, "moveFocusToStartOfNextBlock">;
moveFocusToStartOfNextInline: $ElementType<CoreEditor, "moveFocusToStartOfNextInline">;
moveFocusToStartOfNextText: $ElementType<CoreEditor, "moveFocusToStartOfNextText">;
moveFocusToStartOfNode: $ElementType<CoreEditor, "moveFocusToStartOfNode">;
moveFocusToStartOfPreviousBlock: $ElementType<CoreEditor, "moveFocusToStartOfPreviousBlock">;
moveFocusToStartOfPreviousInline: $ElementType<CoreEditor, "moveFocusToStartOfPreviousInline">;
moveFocusToStartOfPreviousText: $ElementType<CoreEditor, "moveFocusToStartOfPreviousText">;
moveFocusToStartOfText: $ElementType<CoreEditor, "moveFocusToStartOfText">;
moveStartForward: $ElementType<CoreEditor, "moveStartForward">;
moveStartBackward: $ElementType<CoreEditor, "moveStartBackward">;
moveStartTo: $ElementType<CoreEditor, "moveStartTo">;
moveStartToEndOfBlock: $ElementType<CoreEditor, "moveStartToEndOfBlock">;
moveStartToEndOfDocument: $ElementType<CoreEditor, "moveStartToEndOfDocument">;
moveStartToEndOfInline: $ElementType<CoreEditor, "moveStartToEndOfInline">;
moveStartToEndOfNextBlock: $ElementType<CoreEditor, "moveStartToEndOfNextBlock">;
moveStartToEndOfNextInline: $ElementType<CoreEditor, "moveStartToEndOfNextInline">;
moveStartToEndOfNextText: $ElementType<CoreEditor, "moveStartToEndOfNextText">;
moveStartToEndOfNode: $ElementType<CoreEditor, "moveStartToEndOfNode">;
moveStartToEndOfPreviousBlock: $ElementType<CoreEditor, "moveStartToEndOfPreviousBlock">;
moveStartToEndOfPreviousInline: $ElementType<CoreEditor, "moveStartToEndOfPreviousInline">;
moveStartToEndOfPreviousText: $ElementType<CoreEditor, "moveStartToEndOfPreviousText">;
moveStartToEndOfText: $ElementType<CoreEditor, "moveStartToEndOfText">;
moveStartToStartOfBlock: $ElementType<CoreEditor, "moveStartToStartOfBlock">;
moveStartToStartOfDocument: $ElementType<CoreEditor, "moveStartToStartOfDocument">;
moveStartToStartOfInline: $ElementType<CoreEditor, "moveStartToStartOfInline">;
moveStartToStartOfNextBlock: $ElementType<CoreEditor, "moveStartToStartOfNextBlock">;
moveStartToStartOfNextInline: $ElementType<CoreEditor, "moveStartToStartOfNextInline">;
moveStartToStartOfNextText: $ElementType<CoreEditor, "moveStartToStartOfNextText">;
moveStartToStartOfNode: $ElementType<CoreEditor, "moveStartToStartOfNode">;
moveStartToStartOfPreviousBlock: $ElementType<CoreEditor, "moveStartToStartOfPreviousBlock">;
moveStartToStartOfPreviousInline: $ElementType<CoreEditor, "moveStartToStartOfPreviousInline">;
moveStartToStartOfPreviousText: $ElementType<CoreEditor, "moveStartToStartOfPreviousText">;
moveStartToStartOfText: $ElementType<CoreEditor, "moveStartToStartOfText">;
moveBackward: $ElementType<CoreEditor, "moveBackward">;
moveForward: $ElementType<CoreEditor, "moveForward">;
moveTo: $ElementType<CoreEditor, "moveTo">;
moveToAnchor: $ElementType<CoreEditor, "moveToAnchor">;
moveToFocus: $ElementType<CoreEditor, "moveToFocus">;
moveToStart: $ElementType<CoreEditor, "moveToStart">;
moveToEnd: $ElementType<CoreEditor, "moveToEnd">;
moveToEndOfBlock: $ElementType<CoreEditor, "moveToEndOfBlock">;
moveToEndOfDocument: $ElementType<CoreEditor, "moveToEndOfDocument">;
moveToEndOfInline: $ElementType<CoreEditor, "moveToEndOfInline">;
moveToEndOfNextBlock: $ElementType<CoreEditor, "moveToEndOfNextBlock">;
moveToEndOfNextInline: $ElementType<CoreEditor, "moveToEndOfNextInline">;
moveToEndOfNextText: $ElementType<CoreEditor, "moveToEndOfNextText">;
moveToEndOfNode: $ElementType<CoreEditor, "moveToEndOfNode">;
moveToEndOfPreviousBlock: $ElementType<CoreEditor, "moveToEndOfPreviousBlock">;
moveToEndOfPreviousInline: $ElementType<CoreEditor, "moveToEndOfPreviousInline">;
moveToEndOfPreviousText: $ElementType<CoreEditor, "moveToEndOfPreviousText">;
moveToEndOfText: $ElementType<CoreEditor, "moveToEndOfText">;
moveToStartOfBlock: $ElementType<CoreEditor, "moveToStartOfBlock">;
moveToStartOfDocument: $ElementType<CoreEditor, "moveToStartOfDocument">;
moveToStartOfInline: $ElementType<CoreEditor, "moveToStartOfInline">;
moveToStartOfNextBlock: $ElementType<CoreEditor, "moveToStartOfNextBlock">;
moveToStartOfNextInline: $ElementType<CoreEditor, "moveToStartOfNextInline">;
moveToStartOfNextText: $ElementType<CoreEditor, "moveToStartOfNextText">;
moveToStartOfNode: $ElementType<CoreEditor, "moveToStartOfNode">;
moveToStartOfPreviousBlock: $ElementType<CoreEditor, "moveToStartOfPreviousBlock">;
moveToStartOfPreviousInline: $ElementType<CoreEditor, "moveToStartOfPreviousInline">;
moveToStartOfPreviousText: $ElementType<CoreEditor, "moveToStartOfPreviousText">;
moveToStartOfText: $ElementType<CoreEditor, "moveToStartOfText">;
moveToRangeOfDocument: $ElementType<CoreEditor, "moveToRangeOfDocument">;
moveToRangeOf: $ElementType<CoreEditor, "moveToRangeOf">;
select: $ElementType<CoreEditor, "select">;
addMarkAtRange: $ElementType<CoreEditor, "addMarkAtRange">;
deleteAtRange: $ElementType<CoreEditor, "deleteAtRange">;
deleteCharBackwardAtRange: $ElementType<CoreEditor, "deleteCharBackwardAtRange">;
deleteLineBackwardAtRange: $ElementType<CoreEditor, "deleteLineBackwardAtRange">;
deleteWordBackwardAtRange: $ElementType<CoreEditor, "deleteWordBackwardAtRange">;
deleteBackwardAtRange: $ElementType<CoreEditor, "deleteBackwardAtRange">;
deleteCharForwardAtRange: $ElementType<CoreEditor, "deleteCharForwardAtRange">;
deleteLineForwardAtRange: $ElementType<CoreEditor, "deleteLineForwardAtRange">;
deleteWordForwardAtRange: $ElementType<CoreEditor, "deleteWordForwardAtRange">;
deleteForwardAtRange: $ElementType<CoreEditor, "deleteForwardAtRange">;
insertBlockAtRange: $ElementType<CoreEditor, "insertBlockAtRange">;
insertFragmentAtRange: $ElementType<CoreEditor, "insertFragmentAtRange">;
insertInlineAtRange: $ElementType<CoreEditor, "insertInlineAtRange">;
insertTextAtRange: $ElementType<CoreEditor, "insertTextAtRange">;
setBlocksAtRange: $ElementType<CoreEditor, "setBlocksAtRange">;
setInlinesAtRange: $ElementType<CoreEditor, "setInlinesAtRange">;
splitBlockAtRange: $ElementType<CoreEditor, "splitBlockAtRange">;
splitInlineAtRange: $ElementType<CoreEditor, "splitInlineAtRange">;
removeMarkAtRange: $ElementType<CoreEditor, "removeMarkAtRange">;
toggleMarkAtRange: $ElementType<CoreEditor, "toggleMarkAtRange">;
unwrapBlockAtRange: $ElementType<CoreEditor, "unwrapBlockAtRange">;
unwrapInlineAtRange: $ElementType<CoreEditor, "unwrapInlineAtRange">;
wrapBlockAtRange: $ElementType<CoreEditor, "wrapBlockAtRange">;
wrapInlineAtRange: $ElementType<CoreEditor, "wrapInlineAtRange">;
wrapTextAtRange: $ElementType<CoreEditor, "wrapTextAtRange">;
addMarkByKey: $ElementType<CoreEditor, "addMarkByKey">;
addMarkByPath: $ElementType<CoreEditor, "addMarkByPath">;
insertNodeByKey: $ElementType<CoreEditor, "insertNodeByKey">;
insertNodeByPath: $ElementType<CoreEditor, "insertNodeByPath">;
insertFragmentByKey: $ElementType<CoreEditor, "insertFragmentByKey">;
insertFragmentByPath: $ElementType<CoreEditor, "insertFragmentByPath">;
insertTextByKey: $ElementType<CoreEditor, "insertTextByKey">;
insertTextByPath: $ElementType<CoreEditor, "insertTextByPath">;
mergeNodeByKey: $ElementType<CoreEditor, "mergeNodeByKey">;
mergeNodeByPath: $ElementType<CoreEditor, "mergeNodeByPath">;
moveNodeByKey: $ElementType<CoreEditor, "moveNodeByKey">;
moveNodeByPath: $ElementType<CoreEditor, "moveNodeByPath">;
removeMarkByKey: $ElementType<CoreEditor, "removeMarkByKey">;
removeMarkByPath: $ElementType<CoreEditor, "removeMarkByPath">;
removeNodeByKey: $ElementType<CoreEditor, "removeNodeByKey">;
removeNodeByPath: $ElementType<CoreEditor, "removeNodeByPath">;
replaceNodeByKey: $ElementType<CoreEditor, "replaceNodeByKey">;
replaceNodeByPath: $ElementType<CoreEditor, "replaceNodeByPath">;
removeTextByKey: $ElementType<CoreEditor, "removeTextByKey">;
removeTextByPath: $ElementType<CoreEditor, "removeTextByPath">;
setMarkByKey: $ElementType<CoreEditor, "setMarkByKey">;
setMarksByPath: $ElementType<CoreEditor, "setMarksByPath">;
setNodeByKey: $ElementType<CoreEditor, "setNodeByKey">;
setNodeByPath: $ElementType<CoreEditor, "setNodeByPath">;
splitNodeByKey: $ElementType<CoreEditor, "splitNodeByKey">;
splitNodeByPath: $ElementType<CoreEditor, "splitNodeByPath">;
unwrapInlineByKey: $ElementType<CoreEditor, "unwrapInlineByKey">;
unwrapInlineByPath: $ElementType<CoreEditor, "unwrapInlineByPath">;
unwrapBlockByKey: $ElementType<CoreEditor, "unwrapBlockByKey">;
unwrapBlockByPath: $ElementType<CoreEditor, "unwrapBlockByPath">;
unwrapNodeByKey: $ElementType<CoreEditor, "unwrapNodeByKey">;
unwrapNodeByPath: $ElementType<CoreEditor, "unwrapNodeByPath">;
wrapInlineByKey: $ElementType<CoreEditor, "wrapInlineByKey">;
wrapInlineByPath: $ElementType<CoreEditor, "wrapInlineByPath">;
wrapBlockByKey: $ElementType<CoreEditor, "wrapBlockByKey">;
wrapBlockByPath: $ElementType<CoreEditor, "wrapBlockByPath">;
wrapNodeByKey: $ElementType<CoreEditor, "wrapNodeByKey">;
wrapNodeByPath: $ElementType<CoreEditor, "wrapNodeByPath">;
normalize: $ElementType<CoreEditor, "normalize">;
withoutNormalizing: $ElementType<CoreEditor, "withoutNormalizing">;
withoutSaving: $ElementType<CoreEditor, "withoutSaving">;
withoutMerging: $ElementType<CoreEditor, "withoutMerging">;
redo: $ElementType<CoreEditor, "redo">;
undo: $ElementType<CoreEditor, "undo">;
snapshotSelection: $ElementType<CoreEditor, "snapshotSelection">;
command: $ElementType<CoreEditor, "command">;
query: $ElementType<CoreEditor, "query">;
registerCommand: $ElementType<CoreEditor, "registerCommand">;
registerQuery: $ElementType<CoreEditor, "registerQuery">;
applyOperation: $ElementType<CoreEditor, "applyOperation">;
run: $ElementType<CoreEditor, "run">
}
	declare export type SlateType = "fragment"
| "html"
| "node"
| "rich"
| "text"
| "files";
	declare export function cloneFragment(event: Event, value: Value, fragment?: Document, callback?: () => void): void

	declare export function findDOMNode(node: Node, win?: Window): Element

	declare export function findDOMRange(range: Range, win?: Window): Range

	declare export function findNode(element: Element, value: Value): Node

	declare export function findRange(selection: Selection, value: Value): Range

	declare export function getEventRange(event: Event, value: Value): Range

	declare export function getEventTransfer(event: Event): {
type: SlateType,
node: Node
}

	declare export function setEventTransfer(event: Event, type: SlateType, data: any): void

    }
