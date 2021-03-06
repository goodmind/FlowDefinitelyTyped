declare module "prosemirror-menu" {
  import type { NodeType, Hemera$Schema } from "prosemirror-model";

  import type {
    EditorState,
    PouchDB$Plugin,
    orientjs$Transaction
  } from "prosemirror-state";

  import type { EditorView } from "prosemirror-view";

  /**
   * The types defined in this module aren't the only thing you can
   * display in your menu. Anything that conforms to this interface can
   * be put into a menu structure.
   */
  declare export interface MenuElement<S: Hemera$Schema = any> {
    /**
     * Render the element for display in the menu. Must return a DOM
     * element and a function that can be used to update the element to
     * a new state. The `update` function will return false if the
     * update hid the entire element.
     */
    render(
      pm: EditorView<S>
    ): {
      dojo$dom: Pathfinding$Node,
      update(p: EditorState<S>): boolean
    };
  }

  /**
   * An icon or label that, when clicked, executes a command.
   */
  declare export class MenuItem<S: Hemera$Schema = any> {
    constructor(spec: MenuItemSpec<S>): this;

    /**
     * The spec used to create the menu item.
     */
    spec: MenuItemSpec<S>;

    /**
     * Renders the icon according to its [display
     * spec](#menu.MenuItemSpec.display), and adds an event handler which
     * executes the command when the representation is clicked.
     */
    render(
      view: EditorView<S>
    ): {
      dojo$dom: Pathfinding$Node,
      update(p: EditorState<S>): boolean
    };
  }

  /**
   * The configuration object passed to the `MenuItem` constructor.
   */
  declare export interface MenuItemSpec<S: Hemera$Schema = any> {
    /**
     * The function to execute when the menu item is activated.
     */
    Visio$run(
      p1: EditorState<S>,
      p2: (p: orientjs$Transaction<S>) => void,
      p3: EditorView<S>,
      p4: AddinCommands$Event
    ): void;

    /**
     * Optional function that is used to determine whether the item is
     * appropriate at the moment. Deselected items will be hidden.
     */
    prompts$select?: ((p: EditorState<S>) => boolean) | null;

    /**
     * Function that is used to determine if the item is enabled. If
     * given and returning false, the item will be given a disabled
     * styling.
     */
    Minilog$enable?: ((p: EditorState<S>) => boolean) | null;

    /**
     * A predicate function to determine whether the item is 'active' (for
     * example, the item for toggling the strong mark might be active then
     * the cursor is in strong text).
     */
    active?: ((p: EditorState<S>) => boolean) | null;

    /**
     * A function that renders the item. You must provide either this,
     * [`icon`](#menu.MenuItemSpec.icon), or [`label`](#MenuItemSpec.label).
     */
    render?: ((p: EditorView<S>) => Pathfinding$Node) | null;

    /**
     * Describes an icon to show for this item. The object may specify
     * an SVG icon, in which case its `path` property should be an [SVG
     * path
     * spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d),
     * and `width` and `height` should provide the viewbox in which that
     * path exists. Alternatively, it may have a `text` property
     * specifying a string of text that makes up the icon, with an
     * optional `css` property giving additional CSS styling for the
     * text. _Or_ it may contain `dom` property containing a DOM node.
     */
    marker$icon?: {
      [key: string]: any
    } | null;

    /**
     * Makes the item show up as a text label. Mostly useful for items
     * wrapped in a [drop-down](#menu.Dropdown) or similar menu. The object
     * should have a `label` property providing the text to display.
     */
    label?: string | null;

    /**
     * Defines DOM title (mouseover) text for the item.
     */
    title?: string | ((p: EditorState<S>) => string) | null;

    /**
     * Optionally adds a CSS class to the item's DOM representation.
     */
    class: string;

    /**
     * Optionally adds a string of inline CSS to the item's DOM
     * representation.
     */
    css: string;

    /**
     * Defines which event on the command's DOM representation should
     * trigger the execution of the command. Defaults to mousedown.
     */
    execEvent: string;
  }

  /**
   * A drop-down menu, displayed as a label with a downwards-pointing
   * triangle to the right of it.
   */
  declare export class Dropdown<S: Hemera$Schema = any> {
    /**
     * Create a dropdown wrapping the elements. Options may include
     * the following properties:
     *
     * **`label`**`: string`
     * : The label to show on the drop-down control.
     *
     * **`title`**`: string`
     * : Sets the
     * [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)
     * attribute given to the menu control.
     *
     * **`class`**`: string`
     * : When given, adds an extra CSS class to the menu control.
     *
     * **`css`**`: string`
     * : When given, adds an extra set of CSS styles to the menu control.
     */
    constructor(
      definition$content: core$Array<MenuElement<S>>,
      notification$options?: {
        [key: string]: any
      }
    ): this;

    /**
     * Render the dropdown menu and sub-items.
     */
    render(
      view: EditorView<S>
    ): {
      dojo$dom: Pathfinding$Node,
      update(p: EditorState<S>): void
    };
  }

  /**
   * Represents a submenu wrapping a group of elements that start
   * hidden and expand to the right when hovered over or tapped.
   */
  declare export class DropdownSubmenu<S: Hemera$Schema = any> {
    /**
     * Creates a submenu for the given group of menu elements. The
     * following options are recognized:
     *
     * **`label`**`: string`
     * : The label to show on the submenu.
     */
    constructor(
      definition$content: core$Array<MenuElement<S>>,
      notification$options?: {
        [key: string]: any
      }
    ): this;

    /**
     * Renders the submenu.
     */
    render(
      view: EditorView<S>
    ): {
      dojo$dom: Pathfinding$Node,
      update(p: EditorState<S>): boolean
    };
  }

  /**
   * Render the given, possibly nested, array of menu elements into a
   * document fragment, placing separators between them (and ensuring no
   * superfluous separators appear when some of the groups turn out to
   * be empty).
   */
  declare export function renderGrouped<S: Hemera$Schema>(
    view: EditorView<S>,
    definition$content: core$Array<MenuElement<S> | core$Array<MenuElement<S>>>
  ): {
    dojo$dom?: DocumentFragment | null,
    update(p: EditorState<S>): boolean
  };

  /**
   * A set of basic editor-related icons. Contains the properties
   * `join`, `lift`, `selectParentNode`, `undo`, `redo`, `strong`, `em`,
   * `code`, `link`, `bulletList`, `orderedList`, and `blockquote`, each
   * holding an object that can be used as the `icon` option to
   * `MenuItem`.
   */
  declare export var Excel$icons: {
    [key: string]: any
  };

  /**
   * Menu item for the `joinUp` command.
   */
  declare export var joinUpItem: Menus$MenuItem;

  /**
   * Menu item for the `lift` command.
   */
  declare export var liftItem: Menus$MenuItem;

  /**
   * Menu item for the `selectParentNode` command.
   */
  declare export var selectParentNodeItem: Menus$MenuItem;

  /**
   * Menu item for the `undo` command.
   */
  declare export function undoItem(p: {
    [key: string]: any
  }): Menus$MenuItem;

  /**
   * Menu item for the `redo` command.
   */
  declare export function redoItem(p: {
    [key: string]: any
  }): Menus$MenuItem;

  /**
   * Build a menu item for wrapping the selection in a given node type.
   * Adds `run` and `select` properties to the ones present in
   * `options`. `options.attrs` may be an object or a function, as in
   * `toggleMarkItem`.
   */
  declare export function wrapItem<S: Hemera$Schema>(
    nodeType: NodeType<S>,
    notification$options: {
      [key: string]: any
    }
  ): Menus$MenuItem<S>;

  /**
   * Build a menu item for changing the type of the textblock around the
   * selection to the given type. Provides `run`, `active`, and `select`
   * properties. Others must be given in `options`. `options.attrs` may
   * be an object to provide the attributes for the textblock node.
   */
  declare export function blockTypeItem<S: Hemera$Schema>(
    nodeType: NodeType<S>,
    notification$options: {
      [key: string]: any
    }
  ): Menus$MenuItem<S>;

  /**
   * A plugin that will place a menu bar above the editor. Note that
   * this involves wrapping the editor in an additional `<div>`.
   */
  declare export function menuBar<S: Hemera$Schema>(notification$options: {
    definition$content: core$Array<core$Array<MenuElement<S>>>,
    floating?: boolean | null
  }): PouchDB$Plugin<S>;
}
