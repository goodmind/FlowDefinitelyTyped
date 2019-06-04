declare module "react-elemental" {
  import type {
    AnchorHTMLAttributes,
    Component,
    CSSProperties,
    FunctionComponent,
    HTMLAttributes,
    ImgHTMLAttributes,
    InputHTMLAttributes,
    ReactElement,
    Node,
    TextareaHTMLAttributes
  } from "react";

  declare export type AlertType = "info" | "success" | "warn" | "error";
  declare export type AlertSize = "alpha" | "beta";
  declare export interface AlertProps {
    +type?: AlertType;
    +size?: AlertSize;
    +title: string;
    +message: string | ReactElement;
    +dismissible?: boolean;
    +style?: CSSProperties;
    +onDismiss?: () => void;
  }

  /**
   * Educational status alerts.
   */
  declare export class Alert mixins Component<AlertProps> {}
  declare export type ButtonSize = "alpha" | "beta" | "gamma";
  declare export interface ButtonProps {
    +color?: string;
    +size?: ButtonSize;
    +text?: string;
    +disabled?: boolean;
    +secondary?: boolean;
    +style?: CSSProperties;
    +children?: any;
  }

  /**
   * Button component.
   */
  declare export class Button mixins Component<ButtonProps> {}
  declare export interface CheckboxProps {
    +checked?: boolean;
    +label?: string;
    +style?: CSSProperties;
    +disabled?: boolean;
    +onChange?: (checked: boolean) => void;
    +children?: Node;
  }
  declare export interface CheckboxState {
    +isHover: boolean;
    +isFocus: boolean;
  }

  /**
   * Styled checkbox element.
   */
  declare export class Checkbox
    mixins Component<CheckboxProps, CheckboxState> {}
  declare export type ImageProps = {
    +alt: string,
    +color?: string,
    +width?: string,
    +height?: string,
    +lazy?: boolean,
    +showIntermediate?: boolean,
    +style?: CSSProperties,
    +imgStyle?: { [key: string]: any }
  } & ImgHTMLAttributes<HTMLImageElement>;

  declare export interface ImageState {
    +load: string;
  }

  /**
   * Wrapper for external images.
   */
  declare export class Image mixins Component<ImageProps, ImageState> {}
  declare export interface LabelProps {
    +label?: string;
    +sublabel?: string;
  }

  /**
   * Text label accompanying an input field.
   */
  declare export var Label: FunctionComponent<LabelProps>;
  declare export type LinkType = "regular" | "plain" | "underline";
  declare export type LinkProps = {
    +type?: LinkType,
    +ref?: string,
    +activeColor?: string,
    +style?: CSSProperties,
    +children?: Node
  } & AnchorHTMLAttributes<HTMLAnchorElement>;

  /**
   * Styled link element.
   */
  declare export class Link mixins Component<LinkProps> {}
  declare export interface LoadingBarProps {
    +color?: string;
    +thickness?: number;
    +duration?: number;
    +delay?: number;
    +style?: CSSProperties;
  }
  declare export interface LoadingBarState {
    +position: number;
  }

  /**
   * Indeterminate loading bar component.
   */
  declare export class LoadingBar
    mixins Component<LoadingBarProps, LoadingBarState> {}
  declare export type ModalSize = "alpha" | "beta" | "gamma";
  declare export interface ModalProps {
    +size?: ModalSize;
    +persistent?: boolean;
    +onHide?: () => void;
    +style?: CSSProperties;
    +children?: any;
  }
  declare export interface ModalState {
    +modal: HTMLDivElement;
    +windowWidth: number;
    +windowHeight: number;
  }

  /**
   * Container for a full-page modal dialog.
   */
  declare export class Modal mixins Component<ModalProps, ModalState> {}
  declare export type PulsatorSize = "alpha" | "beta" | "gamma" | "delta";
  declare export interface PulsatorProps {
    +color?: string;
    +size?: PulsatorSize;
    +inactive?: boolean;
    +transparent?: boolean;
    +style?: CSSProperties;
  }
  declare export interface PulsatorState {
    +color: any;
  }

  /**
   * Indeterminate progress indication spinner.
   */
  declare export class Pulsator
    mixins Component<PulsatorProps, PulsatorState> {}
  declare export type RadioGroupProps = HTMLAttributes<HTMLDivElement> & {
    +options?: Array<{
      +value: string,
      +label: string | Node,
      +disabled?: boolean
    }>,
    +value?: string,
    +accentColor?: string,
    +idleColor?: string,
    +radioRenderer?: (
      option: ReactElement,
      idx: number,
      options: ReactElement[]
    ) => ReactElement,
    +onChange?: (value: string) => void
  };

  /**
   * Group of individually selectable radio buttons.
   */
  declare export class RadioGroup mixins Component<RadioGroupProps> {}
  declare export interface SelectListProps {
    +placeholder?: string;
    +options?: Array<{
      +label: string,
      +value: string
    }>;
    +width?: number | string;
    +height?: number;
    +error?: string;
    +style?: CSSProperties;
    +onChange?: (value: string) => void;
  }
  declare export interface SelectListState {
    +isExpanded: boolean;
    +isFocused: boolean;
    +isHovered: boolean;
    +selectedOption: {
      +label: any,
      +value: string
    };
    +highlightedIdx: number | null;
  }

  /**
   * Dropdown menu component.
   */
  declare export class SelectList
    mixins Component<SelectListProps, SelectListState> {}
  declare export interface SpacingProps {
    +padding?: boolean;
    +size?: string;
    +top?: boolean;
    +right?: boolean;
    +bottom?: boolean;
    +left?: boolean;
    +inline?: boolean;
    +style?: CSSProperties;
    +children?: any;
  }

  /**
   * Spacing component to add padding and margins.
   */
  declare export var Spacing: FunctionComponent<SpacingProps>;
  declare export type SpinnerSize = "alpha" | "beta" | "gamma" | "delta";
  declare export interface SpinnerProps {
    +size?: SpinnerSize;
    +ringColor?: string;
    +accentColor?: string;
    +duration?: number;
    +thickness?: number;
    +style?: CSSProperties;
  }

  /**
   * Indeterminate progress indication spinner.
   */
  declare export class Spinner mixins Component<SpinnerProps> {}
  declare export interface TabsProps {
    +options?: Array<{
      +value: string,
      +label: string | Node
    }>;
    +value?: string;
    +secondary?: boolean;
    +fit?: boolean;
    +invert?: boolean;
    +onChange?: (value: string) => void;
    +style?: CSSProperties;
  }

  /**
   * Horizontally organized segments of options.
   */
  declare export class Tabs mixins Component<TabsProps> {}
  declare export type TagSize = "alpha" | "beta";
  declare export interface TagProps {
    +outlineColor?: string;
    +backgroundColor?: string;
    +text: string;
    +size?: TagSize;
    +dismissible?: boolean;
    +onDismiss?: () => void;
    +style?: CSSProperties;
  }

  /**
   * Textual status indicators.
   */
  declare export var Tag: FunctionComponent<TagProps>;
  declare export interface TextProps {
    +secondary?: boolean;
    +size?: string;
    +color?: string;
    +bold?: boolean;
    +inline?: boolean;
    +uppercase?: boolean;
    +center?: boolean;
    +right?: boolean;
    +style?: CSSProperties;
    +children?: Node;
  }

  /**
   * Text component with automatic typeface formatting.
   */
  declare export class Text mixins Component<TextProps> {}
  declare export type TextAreaProps = TextFieldProps & {
    +error?: string,
    +secondary?: boolean,
    +style?: CSSProperties
  };

  /**
   * Styled textarea element for blobs of text input.
   *
   * This component behaves similarly to TextField, with some minor modifications.
   */
  declare export var TextArea: FunctionComponent<TextAreaProps>;
  declare export type TextFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
    InputHTMLAttributes<HTMLInputElement> & {
      +error?: string,
      +secondary?: boolean,
      +textarea?: boolean,
      +style?: CSSProperties
    };

  /**
   * Input element for accepting user text input.
   */
  declare export class TextField mixins Component<TextFieldProps> {}
  declare export interface ToastProps {
    +color?: string;
    +accent?: string;
    +style?: CSSProperties;
    +children?: Node;
  }

  /**
   * Fixed-position notification element. This component is purely presentational; in actual usage,
   * it should be wrapped in a manager to handle logic for conditional display.
   */
  declare export var Toast: FunctionComponent<ToastProps>;
  declare export interface TooltipProps {
    +contents: ReactElement;
    +persistent?: boolean;
    +width?: number | string;
    +offset?: number;
    +top?: boolean;
    +bottom?: boolean;
    +style?: CSSProperties;
    +children: Node;
  }
  declare export interface TooltipState {
    +displayTooltip: any;
  }

  /**
   * Wrap an arbitrary element with a tooltip next to the element on hover.
   */
  declare export class Tooltip mixins Component<TooltipProps, TooltipState> {}
  declare export interface ElementalProps {
    +fontOpts?: {
      +primary?: {
        +regular?: string,
        +bold?: string
      },
      +secondary?: {
        +regular?: string,
        +bold?: string
      }
    };
    +colorOpts?: {
      +primary?: string,
      +primaryLight?: string,
      +primaryDark?: string
    };
    +children: Node;
  }

  /**
   * Component that declaratively wraps logic for idempotently bootstrapping the library. Client code
   * can be contained within the children of this component at the highest level of the application.
   */
  declare export class Elemental mixins Component<ElementalProps> {}
  declare export interface FontOpts {
    primary?: {
      regular?: string,
      bold?: string
    };
    secondary?: {
      regular?: string,
      bold?: string
    };
  }
  declare export interface ColorOpts {
    primary?: string;
    primaryLight?: string;
    primaryDark?: string;
  }

  /**
   * Bootstrap Elemental. This will inject all necessary global CSS declarations and initialize custom
   * style overrides passed in as options.
   * @param fontOpts Describes the primary and secondary fonts.
   * @param colorOpts Optional color overrides for the library's default primary colors.
   */
  declare export function bootstrap(
    fontOpts?: FontOpts,
    colorOpts?: ColorOpts
  ): void;

  declare export var colors: {
    black: string,
    white: string,
    transparent: string,
    greenLight: string,
    green: string,
    redLight: string,
    red: string,
    blueLight: string,
    blue: string,
    blueDark: string,
    orangeLight: string,
    orange: string,
    yellow: string,
    yellowLight: string,
    purpleLight: string,
    purple: string,
    purpleDark: string,
    primary: string,
    primaryLight: string,
    primaryDark: string,
    [colorName: string]: string
  };
  declare export var sizes: {
    alpha: string,
    beta: string,
    gamma: string,
    delta: string,
    epsilon: string,
    iota: string,
    kilo: string,
    lambda: string
  };
  declare export var spacing: {
    default: string,
    micro: string,
    tiny: string,
    small: string,
    large: string,
    huge: string,
    enormous: string
  };
}
