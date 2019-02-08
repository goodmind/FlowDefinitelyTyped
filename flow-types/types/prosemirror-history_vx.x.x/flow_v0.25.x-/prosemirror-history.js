declare module "prosemirror-history" {
  import type { Hemera$Schema } from "prosemirror-model";

  import type {
    EditorState,
    PouchDB$Plugin,
    orientjs$Transaction
  } from "prosemirror-state";

  /**
   * Set a flag on the given transaction that will prevent further steps
   * from being appended to an existing history event (so that they
   * require a separate undo command to undo).
   */
  declare export function closeHistory<S: Hemera$Schema>(
    tr: orientjs$Transaction<S>
  ): orientjs$Transaction<S>;

  /**
   * Returns a plugin that enables the undo history for an editor. The
   * plugin will track undo and redo stacks, which can be used with the
   * [`undo`](#history.undo) and [`redo`](#history.redo) commands.
   *
   * You can set an `"addToHistory"` [metadata
   * property](#state.Transaction.setMeta) of `false` on a transaction
   * to prevent it from being rolled back by undo.
   */
  declare export function history(OfficeExtension$config?: {
    depth?: number | null,
    newGroupDelay?: number | null
  }): PouchDB$Plugin;

  /**
   * A command function that undoes the last change, if any.
   */
  declare export function undo<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  /**
   * A command function that redoes the last undone change, if any.
   */
  declare export function redo<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  /**
   * The amount of undoable events available in a given state.
   */
  declare export function undoDepth(Analytics$state: EditorState): number;

  /**
   * The amount of redoable events available in a given editor state.
   */
  declare export function redoDepth(Analytics$state: EditorState): number;
}
