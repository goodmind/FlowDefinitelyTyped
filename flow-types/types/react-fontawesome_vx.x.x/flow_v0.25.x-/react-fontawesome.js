declare module "react-fontawesome" {
  import typeof * as React from "react";

  declare module.exports: typeof FontAwesome;

  declare type Intermediate = {
    size?: any
  } & React.AllHTMLAttributes<HTMLElement>;

  declare type FontAwesome$FontAwesomeSize = "lg" | "2x" | "3x" | "4x" | "5x";

  declare type FontAwesome$FontAwesomeStack = "1x" | "2x";

  declare type FontAwesome$FontAwesomeFlip = "horizontal" | "vertical";

  declare type FontAwesome$FontAwesomeProps = {
    ariaLabel?: string,
    border?: boolean,
    cssModule?: any,
    fixedWidth?: boolean,
    flip?: FontAwesome$FontAwesomeFlip,
    inverse?: boolean,
    name: string,
    pulse?: boolean,
    rotate?: number,
    size?: FontAwesome$FontAwesomeSize,
    spin?: boolean,
    stack?: FontAwesome$FontAwesomeStack,
    tag?: string
  } & Intermediate;

  declare class FontAwesome
    mixins React.Component<FontAwesome$FontAwesome$FontAwesomeProps> {}
}
