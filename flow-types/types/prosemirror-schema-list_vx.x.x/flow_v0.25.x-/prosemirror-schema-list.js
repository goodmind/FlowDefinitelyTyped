declare module "prosemirror-schema-list" {
  import type { NodeSpec, NodeType, Hemera$Schema } from "prosemirror-model";

  import type { EditorState, orientjs$Transaction } from "prosemirror-state";

  /**
   * An ordered list [node spec](#model.NodeSpec). Has a single
   * attribute, `order`, which determines the number at which the list
   * starts counting, and defaults to 1. Represented as an `<ol>`
   * element.
   */
  declare export var orderedList: NodeSpec;

  /**
   * A bullet list node spec, represented in the DOM as `<ul>`.
   */
  declare export var bulletList: NodeSpec;

  /**
   * A list item (`<li>`) spec.
   */
  declare export var listItem: NodeSpec;

  /**
   * Convenience function for adding list-related node types to a map
   * specifying the nodes for a schema. Adds
   * [`orderedList`](#schema-list.orderedList) as `"ordered_list"`,
   * [`bulletList`](#schema-list.bulletList) as `"bullet_list"`, and
   * [`listItem`](#schema-list.listItem) as `"list_item"`.
   *
   * `itemContent` determines the content expression for the list items.
   * If you want the commands defined in this module to apply to your
   * list structure, it should have a shape like `"paragraph block*"` or
   * `"paragraph (ordered_list | bullet_list)*"`. `listGroup` can be
   * given to assign a group name to the list node types, for example
   * `"block"`.
   */
  declare export function addListNodes(
    nodes: OrderedMap<NodeSpec>,
    itemContent: string,
    listGroup?: string
  ): OrderedMap<NodeSpec>;

  /**
   * Returns a command function that wraps the selection in a list with
   * the given type an attributes. If `dispatch` is null, only return a
   * value to indicate whether this is possible, but don't actually
   * perform the change.
   */
  declare export function wrapInList<S: Hemera$Schema>(
    listType: NodeType<S>,
    attrs?: {
      [key: string]: any
    }
  ): (
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ) => boolean;

  /**
   * Build a command that splits a non-empty textblock at the top level
   * of a list item by also splitting that list item.
   */
  declare export function splitListItem<S: Hemera$Schema>(
    itemType: NodeType<S>
  ): (
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ) => boolean;

  /**
   * Create a command to lift the list item around the selection up into
   * a wrapping list.
   */
  declare export function liftListItem<S: Hemera$Schema>(
    itemType: NodeType<S>
  ): (
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ) => boolean;

  /**
   * Create a command to sink the list item around the selection down
   * into an inner list.
   */
  declare export function sinkListItem<S: Hemera$Schema>(
    itemType: NodeType<S>
  ): (
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ) => boolean;
}
