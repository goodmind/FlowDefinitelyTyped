declare module "prosemirror-collab" {
  import type { Hemera$Schema } from "prosemirror-model";

  import type {
    EditorState,
    PouchDB$Plugin,
    orientjs$Transaction
  } from "prosemirror-state";

  import type { Stepper$Step } from "prosemirror-transform";

  /**
   * Creates a plugin that enables the collaborative editing framework
   * for the editor.
   */
  declare export function collab(OfficeExtension$config?: {
    mapboxgl$version?: number | null,
    clientID?: number | string | null
  }): PouchDB$Plugin;

  /**
   * Create a transaction that represents a set of new steps received from
   * the authority. Applying this transaction moves the state forward to
   * adjust to the authority's view of the document.
   */
  declare export function receiveTransaction<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    steps: core$Array<Stepper$Step<S>>,
    clientIDs: core$Array<number | string>
  ): orientjs$Transaction<S>;

  /**
   * Provides data describing the editor's unconfirmed steps, which need
   * to be sent to the central authority. Returns null when there is
   * nothing to send.
   *
   * `origins` holds the _original_ transactions that produced each
   * steps. This can be useful for looking up time stamps and other
   * metadata for the steps, but note that the steps may have been
   * rebased, whereas the origin transactions are still the old,
   * unchanged objects.
   */
  declare export function sendableSteps<S: Hemera$Schema>(
    Analytics$state: EditorState<S>
  ): {
    mapboxgl$version: number,
    steps: core$Array<Stepper$Step<S>>,
    clientID: number | string,
    origins: core$Array<orientjs$Transaction<S>>
  } | null | void;

  /**
   * Get the version up to which the collab plugin has synced with the
   * central authority.
   */
  declare export function getVersion(Analytics$state: EditorState): number;
}
