declare module "gestalt" {
  import typeof * as React from "react";

  declare export interface AvatarProps {
    name: string;
    outline?: boolean;
    size?: "sm" | "md" | "lg";
    src?: string;
    verified?: boolean;
  }
  declare export type UnsignedUpTo12 =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;
  declare export type SignedUpTo12 =
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | UnsignedUpTo12;
  declare export interface BoxProps {
    alignContent?:
      | "start"
      | "end"
      | "center"
      | "between"
      | "around"
      | "stretch";
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
    bottom?: boolean;
    children?: React.Node;
    color?:
      | "blue"
      | "darkGray"
      | "darkWash"
      | "eggplant"
      | "gray"
      | "green"
      | "lightGray"
      | "lightWash"
      | "maroon"
      | "midnight"
      | "navy"
      | "olive"
      | "orange"
      | "orchid"
      | "pine"
      | "purple"
      | "red"
      | "transparent"
      | "watermelon"
      | "white";
    column?: UnsignedUpTo12;
    smColumn?: UnsignedUpTo12;
    mdColumn?: UnsignedUpTo12;
    lgColumn?: UnsignedUpTo12;
    dangerouslySetInlineStyle?: {
      __style: {
        [key: string]: any
      }
    };
    direction?: "row" | "column";
    smDirection?: "row" | "column";
    mdDirection?: "row" | "column";
    lgDirection?: "row" | "column";
    display?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
    smDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
    mdDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
    lgDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
    fit?: boolean;
    flex?: "grow" | "shrink" | "none";
    height?: number | string;
    justifyContent?: "start" | "end" | "center" | "between" | "around";
    left?: boolean;
    margin?: SignedUpTo12;
    smMargin?: SignedUpTo12;
    mdMargin?: SignedUpTo12;
    lgMargin?: SignedUpTo12;
    marginBottom?: SignedUpTo12;
    smMarginBottom?: SignedUpTo12;
    mdMarginBottom?: SignedUpTo12;
    lgMarginBottom?: SignedUpTo12;
    marginEnd?: SignedUpTo12;
    smMarginEnd?: SignedUpTo12;
    mdMarginEnd?: SignedUpTo12;
    lgMarginEnd?: SignedUpTo12;
    marginLeft?: SignedUpTo12;
    smMarginLeft?: SignedUpTo12;
    mdMarginLeft?: SignedUpTo12;
    lgMarginLeft?: SignedUpTo12;
    marginRight?: SignedUpTo12;
    smMarginRight?: SignedUpTo12;
    mdMarginRight?: SignedUpTo12;
    lgMarginRight?: SignedUpTo12;
    marginStart?: SignedUpTo12;
    smMarginStart?: SignedUpTo12;
    mdMarginStart?: SignedUpTo12;
    lgMarginStart?: SignedUpTo12;
    marginTop?: SignedUpTo12;
    smMarginTop?: SignedUpTo12;
    mdMarginTop?: SignedUpTo12;
    lgMarginTop?: SignedUpTo12;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    overflow?: "visible" | "hidden" | "scroll" | "scrollX" | "scrollY" | "auto";
    padding?: UnsignedUpTo12;
    smPadding?: UnsignedUpTo12;
    mdPadding?: UnsignedUpTo12;
    lgPadding?: UnsignedUpTo12;
    paddingX?: UnsignedUpTo12;
    smPaddingX?: UnsignedUpTo12;
    mdPaddingX?: UnsignedUpTo12;
    lgPaddingX?: UnsignedUpTo12;
    paddingY?: UnsignedUpTo12;
    smPaddingY?: UnsignedUpTo12;
    mdPaddingY?: UnsignedUpTo12;
    lgPaddingY?: UnsignedUpTo12;
    position?: "static" | "absolute" | "relative" | "fixed";
    right?: boolean;
    shape?:
      | "square"
      | "rounded"
      | "pill"
      | "circle"
      | "roundedTop"
      | "roundedBottom"
      | "roundedLeft"
      | "roundedRight";
    top?: boolean;
    width?: number | string;
    wrap?: boolean;
  }
  declare export interface ButtonProps {
    text: string;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    accessibilityLabel?: string;
    color?: "blue" | "gray" | "red" | "transparent" | "white";
    disabled?: boolean;
    inline?: boolean;
    name?: string;
    onClick?: (args: {
      event: React.SyntheticEvent<React.MouseEvent<>>
    }) => void;
    size?: "sm" | "md" | "lg";
    type?: "submit" | "button";
  }
  declare export interface CardProps {
    active?: boolean;
    children?: React.Node;
    image?: React.Node;
    onMouseEnter?: (args: {
      event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>>
    }) => void;
    onMouseLeave?: (args: {
      event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>>
    }) => void;
  }
  declare export interface CheckboxProps {
    id: string;
    onChange: (args: {
      event: React.SyntheticEvent<HTMLInputElement>,
      checked: boolean
    }) => void;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    name?: string;
    size?: "sm" | "md";
  }
  declare export interface ColumnProps {
    span: UnsignedUpTo12;
    smSpan?: UnsignedUpTo12;
    mdSpan?: UnsignedUpTo12;
    lgSpan?: UnsignedUpTo12;
    children?: React.Node;
  }
  declare export interface ContainerProps {
    children?: React.Node;
  }
  declare export interface FlyoutProps {
    anchor: React.RefObject<any>;
    onDismiss: () => void;
    children?: React.Node;
    color?: "blue" | "orange" | "white";
    idealDirection?: "up" | "right" | "down" | "left";
    positionRelativeToAnchor?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  }
  declare export interface GroupAvatarProps {
    collaborators: $ReadOnlyArray<{
      name: string,
      src?: string
    }>;
    outline?: boolean;
    size?: "sm" | "md" | "lg";
  }
  declare export interface HeaderProps {
    accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.Node;
    color?:
      | "blue"
      | "darkGray"
      | "eggplant"
      | "gray"
      | "green"
      | "lightGray"
      | "maroon"
      | "midnight"
      | "navy"
      | "olive"
      | "orange"
      | "orchid"
      | "pine"
      | "purple"
      | "red"
      | "watermelon"
      | "white";
    id?: string;
    overflow?: "normal" | "breakWord";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    smSize?: "xs" | "sm" | "md" | "lg" | "xl";
    mdSize?: "xs" | "sm" | "md" | "lg" | "xl";
    lgSize?: "xs" | "sm" | "md" | "lg" | "xl";
    truncate?: boolean;
  }
  declare export type Icons =
    | "add"
    | "add-circle"
    | "add-pin"
    | "angled-pin"
    | "arrow-back"
    | "arrow-circle-down"
    | "arrow-circle-forward"
    | "arrow-down"
    | "arrow-forward"
    | "arrow-up"
    | "arrow-up-right"
    | "bell"
    | "camera"
    | "cancel"
    | "check"
    | "check-circle"
    | "circle-outline"
    | "clear"
    | "clock"
    | "cog"
    | "compass"
    | "dash"
    | "edit"
    | "ellipsis"
    | "ellipsis-circle-outline"
    | "eye"
    | "facebook"
    | "face-happy"
    | "face-sad"
    | "face-smiley"
    | "filter"
    | "flag"
    | "flashlight"
    | "gif"
    | "globe"
    | "globe-checked"
    | "graph-bar"
    | "handle"
    | "hand-pointing"
    | "heart"
    | "heart-broken"
    | "knoop"
    | "lightbulb"
    | "link"
    | "location"
    | "lock"
    | "maximize"
    | "menu"
    | "minimize"
    | "move"
    | "mute"
    | "pause"
    | "people"
    | "person"
    | "person-add"
    | "pin"
    | "pin-hide"
    | "pinterest"
    | "play"
    | "question-mark"
    | "remove"
    | "report"
    | "search"
    | "shopping-bag"
    | "smiley"
    | "smiley-outline"
    | "send"
    | "share"
    | "sound"
    | "speech"
    | "speech-ellipsis"
    | "tag"
    | "terms"
    | "text-align-left"
    | "text-align-center"
    | "text-align-right"
    | "twitter"
    | "view-type-default"
    | "view-type-dense"
    | "view-type-list";
  declare export interface IconProps {
    accessibilityLabel: string;
    icon: Icons;
    color?:
      | "blue"
      | "darkGray"
      | "eggplant"
      | "gray"
      | "green"
      | "lightGray"
      | "maroon"
      | "midnight"
      | "navy"
      | "olive"
      | "orange"
      | "orchid"
      | "pine"
      | "purple"
      | "red"
      | "watermelon"
      | "white";
    dangerouslySetSvgPath?: {
      __path: string
    };
    inline?: boolean;
    size?: number | string;
  }
  declare export interface IconButtonProps {
    accessibilityLabel: string;
    icon: Icons;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    bgColor?: "transparent" | "lightGray" | "white";
    iconColor?: "blue" | "darkGray" | "gray" | "red" | "white";
    onClick?: (args: {
      event: React.SyntheticEvent<React.MouseEvent<>>
    }) => void;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }
  declare export interface ImageProps {
    alt: string;
    color: string;
    naturalHeight: number;
    naturalWidth: number;
    src: string;
    children?: React.Node;
    fit?: "cover" | "contain" | "none";
    onError?: () => void;
    onLoad?: () => void;
    size?: string;
    srcSet?: string;
  }
  declare export interface LabelProps {
    htmlFor: string;
    children?: React.Node;
  }
  declare export interface LetterboxProps {
    contentAspectRatio: number;
    height: number;
    width: number;
    children?: React.Node;
  }
  declare export interface LinkProps {
    children?: React.Node;
    href?: string;
    inline?: boolean;
    onClick?: (args: {
      event: React.SyntheticEvent<React.MouseEvent<>>
    }) => void;
    target?: "null" | "self" | "blank";
  }
  declare export interface MaskProps {
    children?: React.Node;
    height?: number | string;
    shape?: "circle" | "rounded" | "square";
    wash?: boolean;
    width?: number | string;
  }
  declare export interface MasonryProps {
    comp: React.ComponentType<>;
    items: $ReadOnlyArray<any>;
    columnWidth?: number;
    flexible?: boolean;
    gutterWidth?: number;
    layout?: "MasonryDefaultLayout" | "MasonryUniformRowLayout";
    loadItems?: () => void;
    measurementStore?: any;
    minCols?: number;
    scrollContainer?: () => HTMLElement;
    virtualize?: boolean;
  }
  declare export interface ModalProps {
    accessibilityCloseLabel: string;
    accessibilityModalLabel: string;
    heading: string;
    onDismiss: () => void;
    children?: React.Node;
    footer?: React.Node;
    role?: "alertdialog" | "dialog";
    size?: "sm" | "md" | "lg";
  }
  declare export interface PogProps {
    icon: Icons;
    active?: boolean;
    bgColor?: "transparent" | "lightGray" | "white";
    focused?: boolean;
    hovered?: boolean;
    iconColor?: "blue" | "darkGray" | "gray" | "red" | "white";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }
  declare export interface PulsarProps {
    paused?: boolean;
    size?: number;
  }
  declare export interface RadioButtonProps {
    id: string;
    onChange: (args: {
      event: React.SyntheticEvent<HTMLInputElement>,
      checked: boolean
    }) => void;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    size?: "sm" | "md";
    value?: string;
  }
  declare export interface SearchFieldProps {
    accessibilityLabel: string;
    id: string;
    onChange: (args: {
      value: string,
      syntheticEvent: React.SyntheticEvent<HTMLInputElement>
    }) => void;
    onBlur?: (args: {
      event: React.SyntheticEvent<HTMLInputElement>
    }) => void;
    onFocus?: (args: {
      value: string,
      syntheticEvent: React.SyntheticEvent<HTMLInputElement>
    }) => void;
    placeholder?: string;
    value?: string;
  }
  declare export interface SegmentedControlProps {
    items: $ReadOnlyArray<React.Node>;
    onChange: (args: {
      event: React.SyntheticEvent<React.MouseEvent<>>,
      activeIndex: number
    }) => void;
    selectedItemIndex: number;
    size?: "md" | "lg";
  }
  declare export interface SelectListProps {
    id: string;
    onChange: (args: {
      event: React.SyntheticEvent<HTMLInputElement>,
      value: string
    }) => void;
    options: $ReadOnlyArray<{
      label: string,
      value: string
    }>;
    disabled?: boolean;
    errorMessage?: string;
    idealErrorDirection?: "up" | "right" | "down" | "left";
    name?: string;
    placeholder?: string;
    value?: string;
  }
  declare export interface SpinnerProps {
    accessibilityLabel: string;
    show: boolean;
  }
  declare export interface StickyProps {
    bottom?: number | string;
    children?: React.Node;
    dangerouslySetZIndex?: {
      __zIndex: string
    };
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }
  declare export interface SwitchProps {
    id: string;
    onChange: (args: {
      event: React.SyntheticEvent<HTMLInputElement>,
      value: boolean
    }) => void;
    disabled?: boolean;
    name?: string;
    switched?: boolean;
  }
  declare export interface TabsProps {
    activeTabIndex: number;
    onChange: (args: {
      event: React.SyntheticEvent<React.MouseEvent<>>,
      activeTabIndex: number
    }) => void;
    tabs: $ReadOnlyArray<{
      text: any,
      href: string
    }>;
  }
  declare export interface TextProps {
    align?: "left" | "right" | "center" | "justify";
    bold?: boolean;
    children?: React.Node;
    color?:
      | "blue"
      | "darkGray"
      | "eggplant"
      | "gray"
      | "green"
      | "lightGray"
      | "maroon"
      | "midnight"
      | "navy"
      | "olive"
      | "orange"
      | "orchid"
      | "pine"
      | "purple"
      | "red"
      | "watermelon"
      | "white";
    inline?: boolean;
    italic?: boolean;
    overflow?: "normal" | "breakWord";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    smSize?: "xs" | "sm" | "md" | "lg" | "xl";
    mdSize?: "xs" | "sm" | "md" | "lg" | "xl";
    lgSize?: "xs" | "sm" | "md" | "lg" | "xl";
    truncate?: boolean;
  }
  declare export interface TextAreaProps {
    id: string;
    onChange: (args: {
      event: React.SyntheticEvent<HTMLInputElement>,
      value: string
    }) => void;
    disabled?: boolean;
    errorMessage?: string;
    idealErrorDirection?: "up" | "right" | "down" | "left";
    name?: string;
    onBlur?: (args: {
      event: React.SyntheticEvent<React.FocusEvent<>>,
      value: string
    }) => void;
    onFocus?: (args: {
      event: React.SyntheticEvent<React.FocusEvent<>>,
      value: string
    }) => void;
    placeholder?: string;
    rows?: number;
    value?: string;
  }
  declare export interface TextFieldProps {
    id: string;
    onChange: (args: {
      event: React.SyntheticEvent<HTMLInputElement>,
      value: string
    }) => void;
    autoComplete?: "current-password" | "on" | "off" | "username";
    disabled?: boolean;
    errorMessage?: string;
    idealErrorDirection?: "up" | "right" | "down" | "left";
    name?: string;
    onBlur?: (args: {
      event: React.SyntheticEvent<React.FocusEvent<>>,
      value: string
    }) => void;
    onFocus?: (args: {
      event: React.SyntheticEvent<React.FocusEvent<>>,
      value: string
    }) => void;
    placeholder?: string;
    type?: "date" | "email" | "number" | "password" | "text" | "url";
    value?: string;
  }
  declare export interface ToastProps {
    color?: "darkGray" | "orange";
    icon?: "arrow-circle-forward";
    text?: string | $ReadOnlyArray<string>;
    thumbnail?: React.ReactElement<any>;
  }
  declare export interface TooltipProps {
    anchor: any;
    onDismiss: () => void;
    children?: React.Node;
    idealDirection?: "up" | "right" | "down" | "left";
    positionRelativeToAnchor?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }
  declare export interface TouchableProps {
    onTouch: (args: {
      event:
        | React.SyntheticEvent<React.MouseEvent<HTMLDivElement>>
        | React.SyntheticEvent<React.KeyboardEvent<HTMLDivElement>>
    }) => void;
    children?: React.Node;
    fullHeight?: boolean;
    fullWidth?: boolean;
    mouseCursor?:
      | "copy"
      | "grab"
      | "grabbing"
      | "move"
      | "noDrop"
      | "pointer"
      | "zoomIn"
      | "zoomOut";
    onMouseEnter?: (args: {
      event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>>
    }) => void;
    onMouseLeave?: (args: {
      event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>>
    }) => void;
    shape?:
      | "square"
      | "rounded"
      | "pill"
      | "circle"
      | "roundedTop"
      | "roundedBottom"
      | "roundedLeft"
      | "roundedRight";
  }
  declare export interface VideoProps {
    aspectRatio: number;
    captions: string;
    src:
      | string
      | $ReadOnlyArray<{
          type: "video/m3u8" | "video/mp4" | "video/ogg",
          src: string
        }>;
    accessibilityMaximizeLabel?: string;
    accessibilityMinimizeLabel?: string;
    accessibilityMuteLabel?: string;
    accessibilityPauseLabel?: string;
    accessibilityPlayLabel?: string;
    accessibilityUnmuteLabel?: string;
    controls?: boolean;
    loop?: boolean;
    onDurationChange?: (args: {
      event: React.SyntheticEvent<HTMLVideoElement>,
      duration: number
    }) => void;
    onEnded?: (args: {
      event: React.SyntheticEvent<HTMLVideoElement>
    }) => void;
    onFullscreenChange?: (args: {
      event: React.SyntheticEvent<HTMLDivElement>,
      fullscreen: boolean
    }) => void;
    onLoadedChange?: (args: {
      event: React.SyntheticEvent<HTMLVideoElement>,
      loaded: number
    }) => void;
    onPause?: (args: {
      event: React.SyntheticEvent<HTMLDivElement>
    }) => void;
    onPlay?: (args: {
      event: React.SyntheticEvent<HTMLDivElement>
    }) => void;
    onReady?: (args: {
      event: React.SyntheticEvent<HTMLVideoElement>
    }) => void;
    onSeek?: (args: {
      event: React.SyntheticEvent<HTMLVideoElement>
    }) => void;
    onTimeChange?: (args: {
      event: React.SyntheticEvent<HTMLVideoElement>,
      time: number
    }) => void;
    onVolumeChange?: (args: {
      event: React.SyntheticEvent<HTMLDivElement>,
      volume: number
    }) => void;
    playbackRate?: number;
    playing?: boolean;
    playsInline?: boolean;
    poster?: string;
    preload?: "auto" | "metadata" | "none";
    volume: number;
  }
  declare export class Avatar mixins React.Component<AvatarProps, any> {}
  declare export class Box mixins React.Component<BoxProps, any> {}
  declare export class Button mixins React.Component<ButtonProps, any> {}
  declare export class Card mixins React.Component<CardProps, any> {}
  declare export class Checkbox mixins React.Component<CheckboxProps, any> {}
  declare export class Column mixins React.Component<ColumnProps, any> {}
  declare export class Container mixins React.Component<ContainerProps, any> {}
  declare export class Divider mixins React.Component<{}, any> {}
  declare export class Flyout mixins React.Component<FlyoutProps, any> {}
  declare export class GroupAvatar
    mixins React.Component<GroupAvatarProps, any> {}
  declare export class Heading mixins React.Component<HeaderProps, any> {}
  declare export class Icon mixins React.Component<IconProps, any> {}
  declare export class IconButton
    mixins React.Component<IconButtonProps, any> {}
  declare export class Image mixins React.Component<ImageProps, any> {}
  declare export class Label mixins React.Component<LabelProps, any> {}
  declare export class Letterbox mixins React.Component<LetterboxProps, any> {}
  declare export class Link mixins React.Component<LinkProps, any> {}
  declare export class Mask mixins React.Component<MaskProps, any> {}
  declare export class Masonry mixins React.Component<MasonryProps, any> {}
  declare export class Modal mixins React.Component<ModalProps, any> {}
  declare export class Pog mixins React.Component<PogProps, any> {}
  declare export class Pulsar mixins React.Component<PulsarProps, any> {}
  declare export class RadioButton
    mixins React.Component<RadioButtonProps, any> {}
  declare export class SearchField
    mixins React.Component<SearchFieldProps, any> {}
  declare export class SegmentedControl
    mixins React.Component<SearchFieldProps, any> {}
  declare export class SelectList
    mixins React.Component<SelectListProps, any> {}
  declare export class Spinner mixins React.Component<SpinnerProps, any> {}
  declare export class Sticky mixins React.Component<StickyProps, any> {}
  declare export class Switch mixins React.Component<SwitchProps, any> {}
  declare export class Tabs mixins React.Component<TabsProps, any> {}
  declare export class Text mixins React.Component<TextProps, any> {}
  declare export class TextArea mixins React.Component<TextAreaProps, any> {}
  declare export class TextField mixins React.Component<TextFieldProps, any> {}
  declare export class Toast mixins React.Component<ToastProps, any> {}
  declare export class Tooltip mixins React.Component<TooltipProps, any> {}
  declare export class Touchable mixins React.Component<TouchableProps, any> {}
  declare export class Video mixins React.Component<VideoProps, any> {}
}
