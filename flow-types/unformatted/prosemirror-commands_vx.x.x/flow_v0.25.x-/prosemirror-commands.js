declare module 'prosemirror-commands' {
        import type {
          MarkType,Node as ProsemirrorNode,NodeType,Schema
        } from 'prosemirror-model';

	import type {
          EditorState,Transaction
        } from 'prosemirror-state';

	import type {
          EditorView
        } from 'prosemirror-view';

	
/**
 * Delete the selection, if there is one.
 */
declare export function deleteSelection<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * If the selection is empty and at the start of a textblock, try to
 * reduce the distance between that block and the one before it—if
 * there's a block directly before it that can be joined, join them.
 * If not, try to move the selected block closer to the next one in
 * the document structure by lifting it out of its parent or moving it
 * into a parent of the previous block. Will use the view for accurate
 * (bidi-aware) start-of-textblock detection if given.
 */
declare export function joinBackward<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void,
view?: EditorView<S>): boolean

	
/**
 * When the selection is empty and at the start of a textblock, select
 * the node before that textblock, if possible. This is intended to be
 * bound to keys like backspace, after
 * [`joinBackward`](#commands.joinBackward) or other deleting
 * commands, as a fall-back behavior when the schema doesn't allow
 * deletion at the selected point.
 */
declare export function selectNodeBackward<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void,
view?: EditorView<S>): boolean

	
/**
 * If the selection is empty and the cursor is at the end of a
 * textblock, try to reduce or remove the boundary between that block
 * and the one after it, either by joining them or by moving the other
 * block closer to this one in the tree structure. Will use the view
 * for accurate start-of-textblock detection if given.
 */
declare export function joinForward<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void,
view?: EditorView<S>): boolean

	
/**
 * When the selection is empty and at the end of a textblock, select
 * the node coming after that textblock, if possible. This is intended
 * to be bound to keys like delete, after
 * [`joinForward`](#commands.joinForward) and similar deleting
 * commands, to provide a fall-back behavior when the schema doesn't
 * allow deletion at the selected point.
 */
declare export function selectNodeForward<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void,
view?: EditorView<S>): boolean

	
/**
 * Join the selected block or, if there is a text selection, the
 * closest ancestor block of the selection that can be joined, with
 * the sibling above it.
 */
declare export function joinUp<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * Join the selected block, or the closest ancestor of the selection
 * that can be joined, with the sibling after it.
 */
declare export function joinDown<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * Lift the selected block, or the closest ancestor block of the
 * selection that can be lifted, out of its parent node.
 */
declare export function lift<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * If the selection is in a node whose type has a truthy
 * [`code`](#model.NodeSpec.code) property in its spec, replace the
 * selection with a newline character.
 */
declare export function newlineInCode<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * When the selection is in a node with a truthy
 * [`code`](#model.NodeSpec.code) property in its spec, create a
 * default block after the code block, and move the cursor there.
 */
declare export function exitCode<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * If a block node is selected, create an empty paragraph before (if
 * it is its parent's first child) or after it.
 */
declare export function createParagraphNear<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * If the cursor is in an empty textblock that can be lifted, lift the
 * block.
 */
declare export function liftEmptyBlock<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * Split the parent block of the selection. If the selection is a text
 * selection, also delete its content.
 */
declare export function splitBlock<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * Acts like [`splitBlock`](#commands.splitBlock), but without
 * resetting the set of active marks at the cursor.
 */
declare export function splitBlockKeepMarks<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * Move the selection to the node wrapping the current selection, if
 * any. (Will not select the document node.)
 */
declare export function selectParentNode<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * Select the whole document.
 */
declare export function selectAll<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	
/**
 * Wrap the selection in a node of the given type with the given
 * attributes.
 */
declare export function wrapIn<S: Schema= any>(
nodeType: NodeType<S>,
attrs?: {
[key: string]: any
}): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean

	
/**
 * Returns a command that tries to set the textblock around the
 * selection to the given node type with the given attributes.
 */
declare export function setBlockType<S: Schema= any>(
nodeType: NodeType<S>,
attrs?: {
[key: string]: any
}): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean

	
/**
 * Create a command function that toggles the given mark with the
 * given attributes. Will return `false` when the current selection
 * doesn't support that mark. This will remove the mark if any marks
 * of that type exist in the selection, or add it otherwise. If the
 * selection is empty, this applies to the [stored
 * marks](#state.EditorState.storedMarks) instead of a range of the
 * document.
 */
declare export function toggleMark<S: Schema= any>(
markType: MarkType<S>,
attrs?: {
[key: string]: any
}): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean

	
/**
 * Wrap a command so that, when it produces a transform that causes
 * two joinable nodes to end up next to each other, those are joined.
 * Nodes are considered joinable when they are of the same type and
 * when the `isJoinable` predicate returns true for them or, if an
 * array of strings was passed, if their node type name is in that
 * array.
 */
declare export function autoJoin<S: Schema= any>(
command: (state: EditorState<S>, p1?: (tr: Transaction<S>) => void) => boolean,
isJoinable: ((before: ProsemirrorNode<S>, after: ProsemirrorNode<S>) => boolean) | string[]): (state: EditorState<S>, p1?: (tr: Transaction<S>) => void) => boolean

	
/**
 * Combine a number of command functions into a single function (which
 * calls them one by one until one returns true).
 */
declare export function chainCommands<S: Schema= any>(
...commands: Array<(
p1: EditorState<S>,
p2?: (tr: Transaction<S>) => void,
p3?: EditorView<S>) => boolean>): (
p1: EditorState<S>,
p2?: (tr: Transaction<S>) => void,
p3?: EditorView<S>) => boolean

	
/**
 * A basic keymap containing bindings not specific to any schema.
 * Binds the following keys (when multiple commands are listed, they
 * are chained with [`chainCommands`](#commands.chainCommands)):
 * 
 * * **Enter** to `newlineInCode`, `createParagraphNear`, `liftEmptyBlock`, `splitBlock`
 * * **Mod-Enter** to `exitCode`
 * * **Backspace** and **Mod-Backspace** to `deleteSelection`, `joinBackward`, `selectNodeBackward`
 * * **Delete** and **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
 * * **Mod-Delete** to `deleteSelection`, `joinForward`, `selectNodeForward`
 * * **Mod-a** to `selectAll`
 */
declare export var pcBaseKeymap: {
[key: string]: any
};
	
/**
 * A copy of `pcBaseKeymap` that also binds **Ctrl-h** like Backspace,
 * **Ctrl-d** like Delete, **Alt-Backspace** like Ctrl-Backspace, and
 * **Ctrl-Alt-Backspace**, **Alt-Delete**, and **Alt-d** like
 * Ctrl-Delete.
 */
declare export var macBaseKeymap: {
[key: string]: any
};
	
/**
 * Depending on the detected platform, this will hold
 * [`pcBasekeymap`](#commands.pcBaseKeymap) or
 * [`macBaseKeymap`](#commands.macBaseKeymap).
 */
declare export var baseKeymap: {
[key: string]: any
};
    }
