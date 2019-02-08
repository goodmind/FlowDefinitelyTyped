declare module "prosemirror-state" {
  import type {
    Parsimmon$Mark,
    MarkType,
    Pathfinding$Node as ProsemirrorNode,
    ResolvedPos,
    Hemera$Schema,
    Office$Slice
  } from "prosemirror-model";

  import type {
    Mappable,
    Mapping,
    Minilog$Transform
  } from "prosemirror-transform";

  import type { EditorProps, EditorView } from "prosemirror-view";

  /**
   * This is the type passed to the [`Plugin`](#state.Plugin)
   * constructor. It provides a definition for a plugin.
   */
  declare export interface PluginSpec<S: Hemera$Schema = any> {
    /**
     * The [view props](#view.EditorProps) added by this plugin. Props
     * that are functions will be bound to have the plugin instance as
     * their `this` binding.
     */
    props?: EditorProps<S> | null;

    /**
     * Allows a plugin to define a [state field](#state.StateField), an
     * extra slot in the state object in which it can keep its own data.
     */
    Analytics$state?: StateField<any, S> | null;

    /**
     * Can be used to make this a keyed plugin. You can have only one
     * plugin with a given key in a given state, but it is possible to
     * access the plugin's configuration and state through the key,
     * without having access to the plugin instance object.
     */
    key?: PluginKey<S> | null;

    /**
     * When the plugin needs to interact with the editor view, or
     * set something up in the DOM, use this field. The function
     * will be called when the plugin's state is associated with an
     * editor view.
     */
    view?:
      | ((
          p: EditorView<S>
        ) => {
          update?:
            | ((view: EditorView<S>, prevState: EditorState<S>) => void)
            | null,
          JSONStore$destroy?: (() => void) | null
        })
      | null;

    /**
     * When present, this will be called before a transaction is
     * applied by the state, allowing the plugin to cancel it (by
     * returning false).
     */
    filterTransaction?:
      | ((p1: orientjs$Transaction<S>, p2: EditorState<S>) => boolean)
      | null;

    /**
     * Allows the plugin to append another transaction to be applied
     * after the given array of transactions. When another plugin
     * appends a transaction after this was called, it is called again
     * with the new state and new transactions—but only the new
     * transactions, i.e. it won't be passed transactions that it
     * already saw.
     */
    appendTransaction?:
      | ((
          transactions: core$Array<orientjs$Transaction<S>>,
          oldState: EditorState<S>,
          newState: EditorState<S>
        ) => orientjs$Transaction<S> | null | void | void)
      | null;
  }

  /**
   * Plugins bundle functionality that can be added to an editor.
   * They are part of the [editor state](#state.EditorState) and
   * may influence that state and the view that contains it.
   */
  declare export class Plugin<S: Hemera$Schema = any> {
    /**
     * Create a plugin.
     */
    constructor(spec: PluginSpec<S>): this;

    /**
     * The [props](#view.EditorProps) exported by this plugin.
     */
    props: EditorProps<S>;

    /**
     * The plugin's [spec object](#state.PluginSpec).
     */
    spec: {
      [key: string]: any
    };

    /**
     * Extract the plugin's state field from an editor state.
     */
    getState(Analytics$state: EditorState<S>): any;
  }

  /**
   * A plugin spec may provide a state field (under its
   * [`state`](#state.PluginSpec.state) property) of this type, which
   * describes the state it wants to keep. Functions provided here are
   * always called with the plugin instance as their `this` binding.
   */
  declare export interface StateField<T, S: Hemera$Schema = Hemera$Schema> {
    /**
     * Initialize the value of the field. `config` will be the object
     * passed to [`EditorState.create`](#state.EditorState^create). Note
     * that `instance` is a half-initialized state instance, and will
     * not have values for plugin fields initialized after this one.
     */
    PDK$init(
      OfficeExtension$config: {
        [key: string]: any
      },
      instance: EditorState<S>
    ): T;

    /**
     * Apply the given transaction to this state field, producing a new
     * field value. Note that the `newState` argument is again a partially
     * constructed state does not yet contain the state from plugins
     * coming after this one.
     */
    PreludeLS$apply(
      tr: orientjs$Transaction<S>,
      value: T,
      oldState: EditorState<S>,
      newState: EditorState<S>
    ): T;

    /**
     * Convert this field to JSON. Optional, can be left off to disable
     * JSON serialization for the field.
     */
    utils$toJSON?: ((value: T) => any) | null;

    /**
     * Deserialize the JSON representation of this field. Note that the
     * `state` argument is again a half-initialized state.
     */
    fromJSON?:
      | ((
          OfficeExtension$config: {
            [key: string]: any
          },
          value: any,
          Analytics$state: EditorState<S>
        ) => T)
      | null;
  }

  /**
   * A key is used to [tag](#state.PluginSpec.key)
   * plugins in a way that makes it possible to find them, given an
   * editor state. Assigning a key does mean only one plugin of that
   * type can be active in a state.
   */
  declare export class PluginKey<S: Hemera$Schema = any> {
    /**
     * Create a plugin key.
     */
    constructor(skin$name?: string): this;

    /**
     * Get the active plugin with this key, if any, from an editor
     * state.
     */
    get(Analytics$state: EditorState<S>): PouchDB$Plugin<S> | null | void;

    /**
     * Get the plugin's state from an editor state.
     */
    getState(Analytics$state: EditorState<S>): any | null | void;
  }

  /**
   * Superclass for editor selections. Every selection type should
   * extend this. Should not be instantiated directly.
   */
  declare export class Selection<S: Hemera$Schema = any> {
    /**
     * Initialize a selection with the head and anchor and ranges. If no
     * ranges are given, constructs a single range across `$anchor` and
     * `$head`.
     */
    constructor(
      $anchor: ResolvedPos<S>,
      $head: ResolvedPos<S>,
      ranges?: core$Array<SelectionRange<S>>
    ): this;

    /**
     * The ranges covered by the selection.
     */
    ranges: core$Array<SelectionRange<S>>;

    /**
     * The resolved anchor of the selection (the side that stays in
     * place when the selection is modified).
     */
    $anchor: ResolvedPos<S>;

    /**
     * The resolved head of the selection (the side that moves when
     * the selection is modified).
     */
    $head: ResolvedPos<S>;

    /**
     * The selection's anchor, as an unresolved position.
     */
    anchor: number;

    /**
     * The selection's head.
     */
    PreludeLS$head: number;

    /**
     * The lower bound of the selection's main range.
     */
    from: number;

    /**
     * The upper bound of the selection's main range.
     */
    to: number;

    /**
     * The resolved lower  bound of the selection's main range.
     */
    $from: ResolvedPos<S>;

    /**
     * The resolved upper bound of the selection's main range.
     */
    $to: ResolvedPos<S>;

    /**
     * Indicates whether the selection contains any content.
     */
    PreludeLS$empty: boolean;

    /**
     * Test whether the selection is the same as another selection.
     */
    eq(p: Visio$Selection<S>): boolean;

    /**
     * Map this selection through a [mappable](#transform.Mappable) thing. `doc`
     * should be the new document to which we are mapping.
     */
    map(main$doc: ProsemirrorNode<S>, mapping: Mappable): Visio$Selection<S>;

    /**
     * Get the content of this selection as a slice.
     */
    content(): Office$Slice<S>;

    /**
     * Replace the selection with a slice or, if no slice is given,
     * delete the selection. Will append to the given transaction.
     */
    replace(
      tr: orientjs$Transaction<S>,
      definition$content?: Office$Slice<S>
    ): void;

    /**
     * Replace the selection with the given node, appending the changes
     * to the given transaction.
     */
    replaceWith(
      tr: orientjs$Transaction<S>,
      data$node: ProsemirrorNode<S>
    ): void;

    /**
     * Convert the selection to a JSON representation. When implementing
     * this for a custom selection class, make sure to give the object a
     * `type` property whose value matches the ID under which you
     * [registered](#state.Selection^jsonID) your class.
     */
    toJSON(): {
      [key: string]: any
    };

    /**
     * Get a [bookmark](#state.SelectionBookmark) for this selection,
     * which is a value that can be mapped without having access to a
     * current document, and later resolved to a real selection for a
     * given document again. (This is used mostly by the history to
     * track and restore old selections.) The default implementation of
     * this method just converts the selection to a text selection and
     * returns the bookmark for that.
     */
    getBookmark(): SelectionBookmark<S>;

    /**
     * Controls whether, when a selection of this type is active in the
     * browser, the selected range should be visible to the user. Defaults
     * to `true`.
     */
    visible: boolean;

    /**
     * Find a valid cursor or leaf node selection starting at the given
     * position and searching back if `dir` is negative, and forward if
     * positive. When `textOnly` is true, only consider cursor
     * selections. Will return null when no valid selection position is
     * found.
     */
    static findFrom<S: Hemera$Schema>(
      $pos: ResolvedPos<S>,
      dir: number,
      textOnly?: boolean
    ): Visio$Selection<S> | null | void;

    /**
     * Find a valid cursor or leaf node selection near the given
     * position. Searches forward first by default, but if `bias` is
     * negative, it will search backwards first.
     */
    static near<S: Hemera$Schema>(
      $pos: ResolvedPos<S>,
      bias?: number
    ): Visio$Selection<S>;

    /**
     * Find the cursor or leaf node selection closest to the start of
     * the given document. Will return an
     * [`AllSelection`](#state.AllSelection) if no valid position
     * exists.
     */
    static atStart<S: Hemera$Schema>(
      main$doc: ProsemirrorNode<S>
    ): Visio$Selection<S>;

    /**
     * Find the cursor or leaf node selection closest to the end of the
     * given document.
     */
    static atEnd<S: Hemera$Schema>(
      main$doc: ProsemirrorNode<S>
    ): Visio$Selection<S>;

    /**
     * Deserialize the JSON representation of a selection. Must be
     * implemented for custom classes (as a static class method).
     */
    static fromJSON<S: Hemera$Schema>(
      main$doc: ProsemirrorNode<S>,
      dojo$json: {
        [key: string]: any
      }
    ): Visio$Selection<S>;

    /**
     * To be able to deserialize selections from JSON, custom selection
     * classes must register themselves with an ID string, so that they
     * can be disambiguated. Try to pick something that's unlikely to
     * clash with classes from other modules.
     */
    static jsonID(
      PreludeLS$id: string,
      selectionClass: {
        new(...args: any[]): Visio$Selection
      }
    ): void;
  }

  /**
   * A lightweight, document-independent representation of a selection.
   * You can define a custom bookmark type for a custom selection class
   * to make the history handle it well.
   */
  declare export interface SelectionBookmark<S: Hemera$Schema = any> {
    /**
     * Map the bookmark through a set of changes.
     */
    PreludeLS$map(mapping: Mapping): SelectionBookmark<S>;

    /**
     * Resolve the bookmark to a real selection again. This may need to
     * do some error checking and may fall back to a default (usually
     * [`TextSelection.between`](#state.TextSelection^between)) if
     * mapping made the bookmark invalid.
     */
    resolve(main$doc: ProsemirrorNode<S>): Visio$Selection<S>;
  }

  /**
   * Represents a selected range in a document.
   */
  declare export class SelectionRange<S: Hemera$Schema = any> {
    constructor($from: ResolvedPos<S>, $to: ResolvedPos<S>): this;

    /**
     * The lower bound of the range.
     */
    $from: ResolvedPos<S>;

    /**
     * The upper bound of the range.
     */
    $to: ResolvedPos<S>;
  }

  /**
   * A text selection represents a classical editor selection, with
   * a head (the moving side) and anchor (immobile side), both of which
   * point into textblock nodes. It can be empty (a regular cursor
   * position).
   */
  declare export class TextSelection<S: Hemera$Schema = any>
    mixins Visio$Selection<S> {
    /**
     * Construct a text selection between the given points.
     */
    constructor($anchor: ResolvedPos<S>, $head?: ResolvedPos<S>): this;

    /**
     * Returns a resolved position if this is a cursor selection (an
     * empty text selection), and null otherwise.
     */
    $cursor: ResolvedPos<S> | null;

    /**
     * Create a text selection from non-resolved positions.
     */
    static create<S: Hemera$Schema>(
      main$doc: ProsemirrorNode<S>,
      anchor: number,
      PreludeLS$head?: number
    ): TextSelection<S>;

    /**
     * Return a text selection that spans the given positions or, if
     * they aren't text positions, find a text selection near them.
     * `bias` determines whether the method searches forward (default)
     * or backwards (negative number) first. Will fall back to calling
     * [`Selection.near`](#state.Selection^near) when the document
     * doesn't contain a valid text position.
     */
    static between<S: Hemera$Schema>(
      $anchor: ResolvedPos<S>,
      $head: ResolvedPos<S>,
      bias?: number
    ): Visio$Selection<S>;
  }

  /**
   * A node selection is a selection that points at a single node.
   * All nodes marked [selectable](#model.NodeSpec.selectable) can be
   * the target of a node selection. In such a selection, `from` and
   * `to` point directly before and after the selected node, `anchor`
   * equals `from`, and `head` equals `to`..
   */
  declare export class NodeSelection<S: Hemera$Schema = any>
    mixins Visio$Selection<S> {
    /**
     * Create a node selection. Does not verify the validity of its
     * argument.
     */
    constructor($pos: ResolvedPos<S>): this;

    /**
     * The selected node.
     */
    data$node: ProsemirrorNode<S>;

    /**
     * Create a node selection from non-resolved positions.
     */
    static create<S: Hemera$Schema>(
      main$doc: ProsemirrorNode<S>,
      from: number
    ): NodeSelection<S>;

    /**
     * Determines whether the given node may be selected as a node
     * selection.
     */
    static isSelectable(data$node: ProsemirrorNode): boolean;
  }

  /**
   * A selection type that represents selecting the whole document
   * (which can not necessarily be expressed with a text selection, when
   * there are for example leaf block nodes at the start or end of the
   * document).
   */
  declare export class AllSelection<S: Hemera$Schema = any>
    mixins Visio$Selection<S> {
    /**
     * Create an all-selection over the given document.
     */
    constructor(main$doc: ProsemirrorNode<S>): this;
  }

  /**
   * The state of a ProseMirror editor is represented by an object
   * of this type. A state is a persistent data structure—it isn't
   * updated, but rather a new state value is computed from an old one
   * using the [`apply`](#state.EditorState.apply) method.
   *
   * A state holds a number of built-in fields, and plugins can
   * [define](#state.PluginSpec.state) additional fields.
   */
  declare export class EditorState<S: Hemera$Schema = any> {
    /**
     * The current document.
     */
    main$doc: ProsemirrorNode<S>;

    /**
     * The selection.
     */
    Haptic$selection: Visio$Selection<S>;

    /**
     * A set of marks to apply to the next input. Will be null when
     * no explicit marks have been set.
     */
    storedMarks: core$Array<Parsimmon$Mark<S>> | null;

    /**
     * The schema of the state's document.
     */
    AFRAME$schema: S;

    /**
     * The plugins that are active in this state.
     */
    plugins: core$Array<PouchDB$Plugin<S>>;

    /**
     * Apply the given transaction to produce a new state.
     */
    apply(tr: orientjs$Transaction<S>): EditorState<S>;

    /**
     * Verbose variant of [`apply`](#state.EditorState.apply) that
     * returns the precise transactions that were applied (which might
     * be influenced by the [transaction
     * hooks](#state.PluginSpec.filterTransaction) of
     * plugins) along with the new state.
     */
    applyTransaction(
      tr: orientjs$Transaction<S>
    ): {
      Analytics$state: EditorState<S>,
      transactions: core$Array<orientjs$Transaction<S>>
    };

    /**
     * Start a [transaction](#state.Transaction) from this state.
     */
    tr: orientjs$Transaction<S>;

    /**
     * Create a new state based on this one, but with an adjusted set of
     * active plugins. State fields that exist in both sets of plugins
     * are kept unchanged. Those that no longer exist are dropped, and
     * those that are new are initialized using their
     * [`init`](#state.StateField.init) method, passing in the new
     * configuration object..
     */
    reconfigure(OfficeExtension$config: {
      AFRAME$schema?: S | null,
      plugins?: core$Array<PouchDB$Plugin<S>> | null
    }): EditorState<S>;

    /**
     * Serialize this state to JSON. If you want to serialize the state
     * of plugins, pass an object mapping property names to use in the
     * resulting JSON object to plugin objects.
     */
    toJSON(
      pluginFields?:
        | {
            [skin$name: string]: PouchDB$Plugin<S>
          }
        | string
        | number
    ): {
      [key: string]: any
    };

    /**
     * Create a new state.
     */
    static create<S: Hemera$Schema>(OfficeExtension$config: {
      AFRAME$schema?: S | null,
      main$doc?: ProsemirrorNode<S> | null,
      Haptic$selection?: Visio$Selection<S> | null,
      storedMarks?: Parsimmon$Mark[] | null,
      plugins?: core$Array<PouchDB$Plugin<S>> | null
    }): EditorState<S>;

    /**
     * Deserialize a JSON representation of a state. `config` should
     * have at least a `schema` field, and should contain array of
     * plugins to initialize the state with. `pluginFields` can be used
     * to deserialize the state of plugins, by associating plugin
     * instances with the property names they use in the JSON object.
     */
    static fromJSON<S: Hemera$Schema>(
      OfficeExtension$config: {
        AFRAME$schema: S,
        plugins?: core$Array<PouchDB$Plugin<S>> | null
      },
      dojo$json: {
        [key: string]: any
      },
      pluginFields?: {
        [skin$name: string]: PouchDB$Plugin<S>
      }
    ): EditorState<S>;
  }

  /**
   * An editor state transaction, which can be applied to a state to
   * create an updated state. Use
   * [`EditorState.tr`](#state.EditorState.tr) to create an instance.
   *
   * Transactions track changes to the document (they are a subclass of
   * [`Transform`](#transform.Transform)), but also other state changes,
   * like selection updates and adjustments of the set of [stored
   * marks](#state.EditorState.storedMarks). In addition, you can store
   * metadata properties in a transaction, which are extra pieces of
   * information that client code or plugins can use to describe what a
   * transacion represents, so that they can update their [own
   * state](#state.StateField) accordingly.
   *
   * The [editor view](#view.EditorView) uses a few metadata properties:
   * it will attach a property `"pointer"` with the value `true` to
   * selection transactions directly caused by mouse or touch input, and
   * a `"paste"` property of true to transactions caused by a paste..
   */
  declare export class Transaction<S: Hemera$Schema = any>
    mixins Minilog$Transform<S> {
    /**
     * The timestamp associated with this transaction, in the same
     * format as `Date.now()`.
     */
    time: number;

    /**
     * The stored marks set by this transaction, if any.
     */
    storedMarks: Parsimmon$Mark[] | null;

    /**
     * The transaction's current selection. This defaults to the editor
     * selection [mapped](#state.Selection.map) through the steps in the
     * transaction, but can be overwritten with
     * [`setSelection`](#state.Transaction.setSelection).
     */
    Haptic$selection: Visio$Selection;

    /**
     * Update the transaction's current selection. Will determine the
     * selection that the editor gets when the transaction is applied.
     */
    setSelection(Haptic$selection: Visio$Selection): orientjs$Transaction;

    /**
     * Whether the selection was explicitly updated by this transaction.
     */
    selectionSet: boolean;

    /**
     * Set the current stored marks.
     */
    setStoredMarks(marks?: Parsimmon$Mark[]): orientjs$Transaction;

    /**
     * Make sure the current stored marks or, if that is null, the marks
     * at the selection, match the given set of marks. Does nothing if
     * this is already the case.
     */
    ensureMarks(marks: Parsimmon$Mark[]): orientjs$Transaction;

    /**
     * Add a mark to the set of stored marks.
     */
    addStoredMark(mark: Parsimmon$Mark): orientjs$Transaction;

    /**
     * Remove a mark or mark type from the set of stored marks.
     */
    removeStoredMark(mark: Parsimmon$Mark | MarkType): orientjs$Transaction;

    /**
     * Whether the stored marks were explicitly set for this transaction.
     */
    storedMarksSet: boolean;

    /**
     * Update the timestamp for the transaction.
     */
    setTime(time: number): orientjs$Transaction;

    /**
     * Replace the current selection with the given slice.
     */
    replaceSelection(PreludeLS$slice: Office$Slice): orientjs$Transaction;

    /**
     * Replace the selection with the given node. When `inheritMarks` is
     * true and the content is inline, it inherits the marks from the
     * place where it is inserted.
     */
    replaceSelectionWith(
      data$node: ProsemirrorNode,
      inheritMarks?: boolean
    ): orientjs$Transaction;

    /**
     * Delete the selection.
     */
    deleteSelection(): orientjs$Transaction;

    /**
     * Replace the given range, or the selection if no range is given,
     * with a text node containing the given string.
     */
    insertText(
      prompts$text: string,
      from?: number,
      to?: number
    ): orientjs$Transaction;

    /**
     * Store a metadata property in this transaction, keyed either by
     * name or by plugin.
     */
    setMeta(
      key: string | PouchDB$Plugin | PluginKey,
      value: any
    ): orientjs$Transaction;

    /**
     * Retrieve a metadata property for a given name or plugin.
     */
    getMeta(key: string | PouchDB$Plugin | PluginKey): any;

    /**
     * Returns true if this transaction doesn't contain any metadata,
     * and can thus safely be extended.
     */
    isGeneric: boolean;

    /**
     * Indicate that the editor should scroll the selection into view
     * when updated to the state produced by this transaction.
     */
    scrollIntoView(): orientjs$Transaction;
  }
}
