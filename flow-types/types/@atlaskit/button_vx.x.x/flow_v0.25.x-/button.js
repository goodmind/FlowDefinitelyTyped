declare module "@atlaskit/button" {
  import type {
    Component,
    Node,
    ReactElement,
    ComponentClass,
    MouseEventHandler
  } from "react";

  declare export type ButtonAppearances =
    | "default"
    | "danger"
    | "link"
    | "primary"
    | "subtle"
    | "subtle-link"
    | "warning"
    | "help";
  declare export interface ButtonProps {
    /**
     * The base styling to apply to the button.
     */
    +appearance?: ButtonAppearances;

    /**
     * Pass aria-controls to underlying html button.
     */
    +ariaControls?: string;

    /**
     * Pass aria-expanded to underlying html button.
     */
    +ariaExpanded?: boolean;

    /**
     * Pass aria-haspopup to underlying html button.
     */
    +ariaHaspopup?: boolean;

    /**
     * This button's child nodes.
     */
    +children?: Node;

    /**
     * Add a classname to the button.
     */
    +className?: string;

    /**
     * A custom component to use instead of the default button.
     */
    +component?: ComponentClass<any>;

    /**
     * Name property of a linked form that the button submits when clicked.
     */
    +form?: string;

    /**
     * Provides a url for buttons being used as a link.
     */
    +href?: string;

    /**
     * Places an icon within the button, after the button's text.
     */
    +iconAfter?: ReactElement<any>;

    /**
     * Places an icon within the button, before the button's text.
     */
    +iconBefore?: ReactElement<any>;

    /**
     * Pass a reference on to the styled component
     */
    +innerRef?: (instance: any) => void;

    /**
     * Provide a unique id to the button.
     */
    +id?: string;

    /**
     * Set if the button is disabled.
     */
    +isDisabled?: boolean;

    /**
     * Change the style to indicate the button is selected.
     */
    +isSelected?: boolean;

    /**
     * Handler to be called on click.
     */
    +onClick?: MouseEventHandler<HTMLButtonElement>;

    /**
     * Set the amount of padding in the button.
     */
    +spacing?: ButtonSpacing;

    /**
     * Assign specific tabIndex order to the underlying html button.
     */
    +tabIndex?: number;

    /**
     * Pass target down to a link within the button component, if a href is provided.
     */
    +target?: string;

    /**
     * Set whether it is a button or a form submission.
     */
    +type?: ButtonType;

    /**
     * Option to fit button width to its parent width
     */
    +shouldFitContainer?: boolean;
  }
  declare export type ButtonType = "button" | "submit";
  declare export type ButtonSpacing = "compact" | "default" | "none";
  declare export interface ButtonState {
    +isActive: boolean;
    +isFocus: boolean;
    +isHover: boolean;
  }
  declare class Button mixins Component<ButtonProps, ButtonState> {}
  declare export interface ButtonGroupProps {
    /**
     * The appearance to apply to all buttons.
     */
    +appearance?: ButtonAppearances;

    /**
     * The buttons to render.
     */
    +children: Node;
  }
  declare export class ButtonGroup mixins Component<ButtonGroupProps> {}
  declare export var themeNamespace: string;
  declare export default typeof Button;
}
