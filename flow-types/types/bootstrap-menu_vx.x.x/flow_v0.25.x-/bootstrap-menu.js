declare module "bootstrap-menu" {
  declare interface BootstrapMenu$BootstrapMenuOptions {
    /**
     * Container of the context menu, where it will be created and where event listeners will be installed.
     */
    container?: string;

    /**
     * What the source of the context menu should be when opened. Valid values are *mouse* and *element*. Defaults to *mouse*.
     */
    menuSource?: BootstrapMenu$BootstrapMenuSource;

    /**
     * How to calculate the position of the context menu based on its source. Valid values are *aboveLeft*, *aboveRight*, *belowLeft*, and *belowRight*. Defaults to *belowLeft*.
     */
    menuPosition?: BootstrapMenu$BootstrapMenuPosition;

    /**
     * The event to listen to open the menu. Valid values are *click*, *right-click*, *hover*. Defaults to *right-click*.
     */
    menuEvent?: BootstrapMenu$BootstrapMenuEvent;

    /**
     * Obtain specific data about the currently opened element, to pass it to the rest of user-defined functions of an action.
     */
    fetchElementData?: (
      jqueryElement: JQuery
    ) => BootstrapMenu$BootstrapMenuRowElement;

    /**
     * Array or object containing the list of actions to be rendered in the context menu.
     */
    actions:
      | {
          [key: string]: BootstrapMenu$BootstrapMenuActions
        }
      | $ReadOnlyArray<BootstrapMenu$BootstrapMenuActions>;

    /**
     * Array to group actions to render them next to each other, with a separator between each group.
     */
    actionsGroups?: $ReadOnlyArray<$ReadOnlyArray<string>>;

    /**
     * Message to show when there are no actions to show in a menu
     * (isShown() returned false on all actions)
     */
    noActionsMessage?: string;

    /**
     * In some weird cases, another plugin may be installing 'click' listeners
     * in the anchors used for each action of the context menu, and stopping
     * the event bubbling before it reachs this plugin's listener.
     *
     * For those cases, _actionSelectEvent can be used to change the event we
     * listen to, for example to 'mousedown'.
     *
     * Unless the context menu is not working due to this and a workaround is
     * needed, this option can be safely ignored.
     */
    _actionSelectEvent?: string;
  }

  /**
   * Every function attribute is called before rendering the menu each time it is opened.
   * If `fetchElementData` was defined, these functions will receive as first argument its returned value for the currently selected element.
   */
  declare interface BootstrapMenu$BootstrapMenuActions {
    /**
     * The name of the action.
     */
    name: string;

    /**
     * Handler to run when an action is clicked.
     */
    onClick: (rowElement: BootstrapMenu$BootstrapMenuRowElement) => void;

    /**
     * Optional, Font Awesome class of the icon to show for the action.
     */
    iconClass?: string;

    /**
     * Optional, classes to add to the action.
     */
    classNames?:
      | string
      | { [key: string]: any }
      | (() => string | { [key: string]: any });

    /**
     * Optional, decides if the action should be shown or hidden in the context menu.
     */
    isShown?: (rowElement: BootstrapMenu$BootstrapMenuRowElement) => boolean;

    /**
     * Optional, decides if the action should appear enabled or disabled in the context menu.
     */
    isEnabled?: (rowElement: BootstrapMenu$BootstrapMenuRowElement) => boolean;
  }

  declare type BootstrapMenu$BootstrapMenuSource = "mouse" | "element";

  declare type BootstrapMenu$BootstrapMenuPosition =
    | "aboveLeft"
    | "aboveRight"
    | "belowLeft"
    | "belowRight";

  declare type BootstrapMenu$BootstrapMenuEvent =
    | "click"
    | "right-click"
    | "hover";

  declare type BootstrapMenu$BootstrapMenuRowElement = any;
  declare class BootstrapMenu {
    /**
     * @param selector Css selector of the element to attach the Menu to
     * @param options Options to configure the menu
     */
    constructor(
      selector: string,
      options: BootstrapMenu$BootstrapMenuOptions
    ): this;

    /**
     * Close the menu and remove every event listeners
     */
    destroy: () => void;

    /**
     * Close the context menu
     */
    close: () => void;
  }
  declare export default typeof BootstrapMenu;
}
