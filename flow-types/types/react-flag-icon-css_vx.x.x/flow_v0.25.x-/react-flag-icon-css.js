declare module "react-flag-icon-css" {
  import typeof * as CSS from "csstype";

  import type { PureComponent, Node } from "react";

  declare export type FlagIconSize = "lg" | "2x" | "3x" | "4x" | "5x";
  declare export type FlagIconFlip = "horizontal" | "vertical";
  declare export type FlagIconRotate = 30 | 60 | 90 | 180 | 270;
  declare export interface FlagIconOptions {
    /**
     * Use CSS modules styles (your module bundler must be correctly setup).
     */
    useCssModules?: boolean;

    /**
     * An object literal whose keys are your custom codes.
     */
    customCodes?: {
      [key: string]: string
    };

    /**
     * Set this if useCssModules is true and a) you want to apply styles to FlagIcon
     * using .theme-base and/or b) you are using custom flags.
     */
    themeStyles?: {
      [key: string]: CSS.Properties & CSS.PropertiesHyphen
    };
  }
  declare export interface FlagIconProps {
    /**
     * ISO 3166-1-alpha-2 code.
     */
    code: string;
    size?: FlagIconSize;
    flip?: FlagIconFlip;
    rotate?: FlagIconRotate;
    Component?: string;

    /**
     * Uses the 1x1 image if true.
     */
    squared?: boolean;

    /**
     * This is always appended as-is to class in the HTML.
     */
    className?: string;

    /**
     * This is mapped to a CSS module and appended to class in the HTML.
     */
    styleName?: string;
    children?: Node;
  }
  declare export class FlagIcon mixins PureComponent<FlagIconProps> {}
  declare export default function FlagIconFactory(
    react: any,
    opts?: $ReadOnly<FlagIconOptions>
  ): typeof FlagIcon;

  declare export function CustomFlagIconFactory(
    react: any,
    opts?: $ReadOnly<FlagIconOptions>
  ): typeof FlagIcon;
}
