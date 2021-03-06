declare module "react-native-material-ui" {
  import type { Component } from "react";

  import type {
    StyleProp,
    ViewStyle as ViewStyleRaw,
    TextStyle as TextStyleRaw,
    Image
  } from "react-native";

  declare export type ViewStyle = StyleProp<ViewStyleRaw>;
  declare export type TextStyle = StyleProp<TextStyleRaw>;
  declare export interface ActionButtonProps {
    actions?:
      | string[]
      | JSX.Element[]
      | Array<{
          icon: string | JSX.Element,
          label: string,
          name: string
        }>;
    hidden?: boolean;
    icon?: string;
    style?: {
      container?: ViewStyle,
      icon?: TextStyle,
      positionContainer?: ViewStyle
    };
    transition?: "toolbar" | "speedDial";
    onPress?: () => void;
    onLongPress?: () => void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/ActionButton/ActionButton.react.js
   */
  declare export class ActionButton mixins Component<ActionButtonProps, any> {}
  declare export interface AvatarProps {
    image?: Image;
    icon?: string;
    iconColor?: string;
    iconSize?: number;
    text?: string;
    size?: number;
    style?: {
      container?: ViewStyle,
      content?: ViewStyle
    };
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Avatar/Avatar.react.js
   */
  declare export class Avatar mixins Component<AvatarProps, any> {}
  declare export interface BadgeProps {
    children?: JSX.Element;
    text?: string;
    icon?:
      | string
      | {
          name: string,
          color: string,
          size: string
        };
    size?: number;
    stroke?: number;
    accent?: boolean;
    style?: {
      container?: ViewStyle,
      content?: ViewStyle,
      strokeContainer?: ViewStyle
    };
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Badge/Badge.react.js
   */
  declare export class Badge mixins Component<BadgeProps, any> {}
  declare export interface BottomNavigationProps {
    active?: string;
    children: JSX.Element | JSX.Element[];
    hidden?: boolean;
    style?: {
      container?: ViewStyle
    };
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/BottomNavigation/BottomNavigation.react.js
   */
  declare export class BottomNavigation
    mixins Component<BottomNavigationProps, any> {}
  declare export interface BottomNavigationAction {
    icon: JSX.Element | string;
    label?: string;
    key?: string;
    active: boolean;
    disabled?: boolean;
    style?: {
      container?: ViewStyle,
      active?: TextStyle,
      disabled?: TextStyle
    };
    onPress?: () => void;
  }
  declare class BottomNavigation$Action
    mixins Component<BottomNavigationAction, any> {}
  declare export interface ButtonProps {
    text: string;
    primary?: boolean;
    accent?: boolean;
    disabled?: boolean;
    raised?: boolean;
    upperCase?: boolean;
    icon?: string | JSX.Element;
    style?: {
      container?: ViewStyle,
      text?: TextStyle
    };
    onPress?: () => void;
    onLongPress?: () => void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Button/Button.react.js
   */
  declare export class Button mixins Component<ButtonProps, any> {}
  declare export interface CardProps {
    children?: JSX.Element;
    style?: {
      container?: ViewStyle
    };
    onPress?: () => void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Card/Card.react.js
   */
  declare export class Card mixins Component<CardProps, any> {}
  declare export interface CheckBoxProps {
    label: string;
    value: string | number;
    checked?: boolean;
    disabled?: boolean;
    uncheckedIcon?: string;
    checkedIcon?: string;
    style?: {
      icon?: ViewStyle,
      container?: ViewStyle,
      label?: TextStyle
    };
    onCheck(checked: boolean): void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Checkbox/Checkbox.react.js
   */
  declare export class Checkbox mixins Component<CheckBoxProps, any> {}
  declare export interface DialogProps {
    children: JSX.Element | JSX.Element[];
    style?: {
      container?: ViewStyle
    };
    onPress?: () => void;
  }

  /**
   * Dialog
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/Dialog.react.js
   */
  declare export class Dialog mixins Component<DialogProps, any> {}
  declare export interface DialogTitleProps {
    children: JSX.Element;
    style?: {
      titleContainer?: ViewStyle,
      titleText?: TextStyle
    };
  }
  declare export interface DialogContentProps {
    children: JSX.Element;
    style?: {
      contentContainer?: ViewStyle
    };
  }
  declare export interface DialogActionsProps {
    children: JSX.Element;
    style?: {
      actionsContainer?: ViewStyle
    };
  }
  declare class Dialog$Title mixins Component<DialogTitleProps, any> {}

  declare class Dialog$Content mixins Component<DialogContentProps, any> {}

  declare class Dialog$Actions mixins Component<DialogActionsProps, any> {}
  declare export interface DialogDefaultActionsProps {
    actions: string[];
    style?: {
      defaultActionsContainer?: ViewStyle
    };
    onActionPress(action: string): void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/DialogDefaultActions.react.js
   */
  declare export class DialogDefaultActions
    mixins Component<DialogDefaultActionsProps, any> {}
  declare export interface DialogStackedActionsProps {
    actions: string[];
    style?: {
      stackedActionsContainer?: ViewStyle
    };
    onActionPress(action: string): void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/DialogStackedActions.react.js
   */
  declare export class DialogStackedActions
    mixins Component<DialogStackedActionsProps, any> {}
  declare export interface DividerProps {
    inset?: boolean;
    style?: {
      container?: ViewStyle
    };
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Divider/Divider.react.js
   */
  declare export class Divider mixins Component<DividerProps, any> {}
  declare export interface DrawerProps {
    children: JSX.Element;
    style?: {
      container?: ViewStyle
    };
  }
  declare export interface DrawerHeaderProps {
    image?: Image[];
    backgroundColor?: string;
    children?: JSX.Element;
    style?: {
      container?: ViewStyle,
      contentContainer?: ViewStyle
    };
  }
  declare export interface DrawerSectionItem {
    icon?: string;
    value?: string | JSX.Element;
    label?: string;
    active?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    onLongPress?: () => void;
  }
  declare export interface DrawerSectionProps {
    title?: string;
    items: DrawerSectionItem[];
    divider?: boolean;
    style?: {
      container?: ViewStyle,
      item?: ViewStyle,
      subheader?: TextStyle,
      icon?: ViewStyle,
      value?: TextStyle,
      label?: TextStyle
    };
  }
  declare export interface DrawerHeaderAccountProps {
    avatar?: JSX.Element;
    accounts?: Array<{
      avatar?: JSX.Element,
      onPress?: () => void
    }>;
    footer?: {};
    style?: {
      container?: ViewStyle,
      accountContainer?: ViewStyle,
      topContainer?: ViewStyle,
      avatarsContainer?: ViewStyle,
      activeAvatarContainer?: ViewStyle,
      inactiveAvatarContainer?: ViewStyle
    };
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Drawer/Drawer.react.js
   */
  declare export class Drawer mixins Component<DrawerProps, any> {}
  declare class Drawer$Header mixins Component<DrawerHeaderProps, any> {}

  declare class Header$Account
    mixins Component<DrawerHeaderAccountProps, any> {}

  declare class Drawer$Section mixins Component<DrawerSectionProps, any> {}
  declare export interface IconProps {
    name: string;
    style?: ViewStyle | ViewStyle[];
    size?: number;
    color?: string;
  }

  /**
   * Icon
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Icon/index.js
   */
  declare export class Icon mixins Component<IconProps, any> {}
  declare export interface IconToggleProps {
    color?: string;
    underlayColor?: string;
    maxOpacity?: number;
    percent?: number;
    disabled?: boolean;
    size?: number;
    name: string;
    children?: JSX.Element;
    style?: {
      container?: ViewStyle,
      icon?: ViewStyle
    };
    onPress?: () => void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/IconToggle/IconToggle.react.js
   */
  declare export class IconToggle mixins Component<IconToggleProps, any> {}
  declare export interface ListItemCenterElement {
    primaryText: string | JSX.Element;
    secondaryText?: string;
    tertiaryText?: string;
  }
  declare export interface ListItemStyle {
    container?: ViewStyle;
    content?: ViewStyle;
    contentViewContainer?: ViewStyle;
    leftElementContainer?: ViewStyle;
    centerElementContainer?: ViewStyle;
    textViewContainer?: ViewStyle;
    primaryText?: TextStyle;
    firstLine?: TextStyle;
    primaryTextContainer?: ViewStyle;
    secondaryText?: TextStyle;
    tertiaryText?: TextStyle;
    rightElementContainer?: ViewStyle;
    rightElement?: TextStyle;
    LeftElement?: TextStyle;
  }
  declare export interface ListItemProps {
    numberOfLines?: 1 | 2 | 3 | "dynamic";
    leftElement?: JSX.Element | string;
    rightElement?: JSX.Element | string;
    centerElement: JSX.Element | string | ListItemCenterElement;
    style?: ListItemStyle;
    dense?: boolean;
    divider?: boolean;
    onPressValue?: any;
    onPress?: () => void;
    onRightElementPress?: () => void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/ListItem/ListItem.react.js
   */
  declare export class ListItem mixins Component<ListItemProps, any> {}
  declare export interface RadioButtonProps {
    label: string;
    value: string | number;
    checked?: boolean;
    disabled?: boolean;
    theme?: string;
    onSelect(value: string): void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/RadioButton/RadioButton.react.js
   */
  declare export class RadioButton mixins Component<RadioButtonProps, any> {}
  declare export interface SubheaderProps {
    text: string;
    inset?: boolean;
    lines?: number;
    style?: {
      container?: ViewStyle,
      text?: TextStyle
    };
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Subheader/Subheader.react.js
   */
  declare export class Subheader mixins Component<SubheaderProps, any> {}
  declare export interface ToolbarStyle {
    container?: ViewStyle;
    leftElementContainer?: ViewStyle;
    leftElement?: TextStyle;
    centerElementContainer?: ViewStyle;
    titleText?: TextStyle;
    rightElementContainer?: ViewStyle;
    rightElement?: TextStyle;
  }
  declare export interface Searchable {
    placeholder?: string;
    autoFocus?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    onChangeText?: (text: string) => void;
    onSearchClosed?: () => void;
    onSearchPressed?: () => void;
    onSubmitEditing?: () => void;
    onSearchCloseRequested?: () => void;
  }
  declare export interface ToolBarRightElement {
    actions?: Array<JSX.Element | string>;
    menu?: {
      icon: string,
      labels: string[]
    };
  }
  declare export interface RightElementPressEvent {
    action: string;
    index: number;
    result?: any;
  }
  declare export interface ToolbarProps {
    isSearchActive?: boolean;
    size?: number;
    hidden?: boolean;
    leftElement?: JSX.Element | string;
    rightElement?: JSX.Element | string | string[] | ToolBarRightElement;
    centerElement?: JSX.Element | string;
    style?: ToolbarStyle;
    searchable?: Searchable;
    onPress?: () => void;
    onLeftElementPress?: () => void;
    onRightElementPress?: (e: RightElementPressEvent) => void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Toolbar/Toolbar.react.js
   */
  declare export class Toolbar mixins Component<ToolbarProps, any> {}
  declare export interface SnackbarProps {
    message: string;
    visible: boolean;
    timeout: number;
    bottomNavigation: boolean;
    actionText?: string;
    button?: ButtonProps;
    style?: {
      container?: ViewStyle,
      message?: ViewStyle
    };
    onRequestClose(): void;
    onActionPress?: () => void;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Snackbar/Snackbar.react.js
   */
  declare export class Snackbar mixins Component<SnackbarProps, any> {}
  declare export interface RippleFeedbackProps {
    color?: string;
    borderless?: boolean;
    children: JSX.Element;
  }

  /**
   * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/RippleFeedback/RippleFeedback.react.js
   */
  declare export class RippleFeedback
    mixins Component<RippleFeedbackProps, any> {}
  declare export interface Color {
    red50: string;
    red100: string;
    red200: string;
    red300: string;
    red400: string;
    red500: string;
    red600: string;
    red700: string;
    red800: string;
    red900: string;
    redA100: string;
    redA200: string;
    redA400: string;
    redA700: string;
    pink50: string;
    pink100: string;
    pink200: string;
    pink300: string;
    pink400: string;
    pink500: string;
    pink600: string;
    pink700: string;
    pink800: string;
    pink900: string;
    pinkA100: string;
    pinkA200: string;
    pinkA400: string;
    pinkA700: string;
    purple50: string;
    purple100: string;
    purple200: string;
    purple300: string;
    purple400: string;
    purple500: string;
    purple600: string;
    purple700: string;
    purple800: string;
    purple900: string;
    purpleA100: string;
    purpleA200: string;
    purpleA400: string;
    purpleA700: string;
    deepPurple50: string;
    deepPurple100: string;
    deepPurple200: string;
    deepPurple300: string;
    deepPurple400: string;
    deepPurple500: string;
    deepPurple600: string;
    deepPurple700: string;
    deepPurple800: string;
    deepPurple900: string;
    deepPurpleA100: string;
    deepPurpleA200: string;
    deepPurpleA400: string;
    deepPurpleA700: string;
    indigo50: string;
    indigo100: string;
    indigo200: string;
    indigo300: string;
    indigo400: string;
    indigo500: string;
    indigo600: string;
    indigo700: string;
    indigo800: string;
    indigo900: string;
    indigoA100: string;
    indigoA200: string;
    indigoA400: string;
    indigoA700: string;
    blue50: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    blue800: string;
    blue900: string;
    blueA100: string;
    blueA200: string;
    blueA400: string;
    blueA700: string;
    lightBlue50: string;
    lightBlue100: string;
    lightBlue200: string;
    lightBlue300: string;
    lightBlue400: string;
    lightBlue500: string;
    lightBlue600: string;
    lightBlue700: string;
    lightBlue800: string;
    lightBlue900: string;
    lightBlueA100: string;
    lightBlueA200: string;
    lightBlueA400: string;
    lightBlueA700: string;
    cyan50: string;
    cyan100: string;
    cyan200: string;
    cyan300: string;
    cyan400: string;
    cyan500: string;
    cyan600: string;
    cyan700: string;
    cyan800: string;
    cyan900: string;
    cyanA100: string;
    cyanA200: string;
    cyanA400: string;
    cyanA700: string;
    teal50: string;
    teal100: string;
    teal200: string;
    teal300: string;
    teal400: string;
    teal500: string;
    teal600: string;
    teal700: string;
    teal800: string;
    teal900: string;
    tealA100: string;
    tealA200: string;
    tealA400: string;
    tealA700: string;
    green50: string;
    green100: string;
    green200: string;
    green300: string;
    green400: string;
    green500: string;
    green600: string;
    green700: string;
    green800: string;
    green900: string;
    greenA100: string;
    greenA200: string;
    greenA400: string;
    greenA700: string;
    lightGreen50: string;
    lightGreen100: string;
    lightGreen200: string;
    lightGreen300: string;
    lightGreen400: string;
    lightGreen500: string;
    lightGreen600: string;
    lightGreen700: string;
    lightGreen800: string;
    lightGreen900: string;
    lightGreenA100: string;
    lightGreenA200: string;
    lightGreenA400: string;
    lightGreenA700: string;
    lime50: string;
    lime100: string;
    lime200: string;
    lime300: string;
    lime400: string;
    lime500: string;
    lime600: string;
    lime700: string;
    lime800: string;
    lime900: string;
    limeA100: string;
    limeA200: string;
    limeA400: string;
    limeA700: string;
    yellow50: string;
    yellow100: string;
    yellow200: string;
    yellow300: string;
    yellow400: string;
    yellow500: string;
    yellow600: string;
    yellow700: string;
    yellow800: string;
    yellow900: string;
    yellowA100: string;
    yellowA200: string;
    yellowA400: string;
    yellowA700: string;
    amber50: string;
    amber100: string;
    amber200: string;
    amber300: string;
    amber400: string;
    amber500: string;
    amber600: string;
    amber700: string;
    amber800: string;
    amber900: string;
    amberA100: string;
    amberA200: string;
    amberA400: string;
    amberA700: string;
    orange50: string;
    orange100: string;
    orange200: string;
    orange300: string;
    orange400: string;
    orange500: string;
    orange600: string;
    orange700: string;
    orange800: string;
    orange900: string;
    orangeA100: string;
    orangeA200: string;
    orangeA400: string;
    orangeA700: string;
    deepOrange50: string;
    deepOrange100: string;
    deepOrange200: string;
    deepOrange300: string;
    deepOrange400: string;
    deepOrange500: string;
    deepOrange600: string;
    deepOrange700: string;
    deepOrange800: string;
    deepOrange900: string;
    deepOrangeA100: string;
    deepOrangeA200: string;
    deepOrangeA400: string;
    deepOrangeA700: string;
    brown50: string;
    brown100: string;
    brown200: string;
    brown300: string;
    brown400: string;
    brown500: string;
    brown600: string;
    brown700: string;
    brown800: string;
    brown900: string;
    blueGrey50: string;
    blueGrey100: string;
    blueGrey200: string;
    blueGrey300: string;
    blueGrey400: string;
    blueGrey500: string;
    blueGrey600: string;
    blueGrey700: string;
    blueGrey800: string;
    blueGrey900: string;
    grey50: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    grey600: string;
    grey700: string;
    grey800: string;
    grey900: string;
    black: string;
    white: string;
    transparent: string;
    snackbarColor: string;
  }
  declare export var COLOR: Color;
  declare export interface ThemeProps {
    theme: {};
  }
  declare export interface ThemeProviderProps {
    value: {};
    children: React.ReactElement<any>;
  }
  declare export interface ThemeConsumerProps {
    children(props: ThemeProps): React.ReactElement<any>;
  }
  declare class ThemeContext$Provider mixins Component<ThemeProviderProps> {}

  declare class ThemeContext$Consumer mixins Component<ThemeConsumerProps> {}
  declare export function getTheme(theme: {}): {};
}
