declare module "react-hamburger-menu" {
  import typeof * as React from "react";

  declare export default typeof HamburgerMenu;

  declare class HamburgerMenu mixins React.PureComponent<HamburgerMenuProps> {}
  declare export interface HamburgerMenuProps {
    /**
     * Determines whether the menu is a hamburger or cross icon
     */
    isOpen: boolean;

    /**
     * The width of the icon
     * @default 36
     */
    width?: number;

    /**
     * The height of the icon
     * @default 30
     */
    height?: number;

    /**
     * The stroke width of the lines
     * @default 2
     */
    strokeWidth?: number;

    /**
     * The rotation of the icon, eg {45} would be 45deg
     * @default 0
     */
    rotate?: number;

    /**
     * The border radius of the lines
     * @default 0
     */
    borderRadius?: number;

    /**
     * The color of both icons
     * @default #000
     */
    color: string;

    /**
     * The length of time it takes for the icon transitions to complete.
     * @default 0.4
     */
    animationDuration?: number;

    /**
     * Will be invoked when the component is clicked
     */
    menuClicked(): void;
  }
}
