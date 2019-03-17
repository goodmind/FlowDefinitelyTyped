declare module "react-native-settings-list" {
  import type { Component, Node } from "react";

  import type {
    TextStyle,
    StyleProp,
    ImageStyle,
    ViewStyle
  } from "react-native";

  declare interface SettingsListProps {
    /**
     * default: white
     */
    backgroundColor?: string;

    /**
     * default: black
     */
    borderColor?: string;

    /**
     * default: 50
     */
    defaultItemSize?: number;

    /**
     * default: transparent
     */
    underlayColor?: string;

    /**
     * default: {fontSize: 16}
     */
    defaultTitleStyle?: StyleProp<TextStyle>;
    defaultTitleInfoPosition?: string;
    scrollViewProps?: { [key: string]: any };
  }
  declare class SettingsList mixins Component<SettingsListProps> {}
  declare interface HeaderProps {
    headerText?: string;
    headerStyle?: StyleProp<TextStyle>;
    headerRef?: () => void;

    /**
     * default: 1
     */
    headerNumberOfLines?: number;
  }
  declare interface ItemProps {
    /**
     * Title being displayed
     */
    title?: string;
    titleStyle?: StyleProp<TextStyle>;

    /**
     * Icon displayed on the left of the settings item
     */
    icon?: Node;

    /**
     * Item Box Style
     */
    itemBoxStyle?: StyleProp<ViewStyle>;

    /**
     * Title Box Style
     */
    titleBoxStyle?: StyleProp<ViewStyle>;

    /**
     * Right Side Style
     */
    rightSideStyle?: StyleProp<ViewStyle>;

    /**
     * Editable Right Side Style
     */
    editableTextStyle?: StyleProp<TextStyle>;

    /**
     * Individual item width.  Can be globally set in the parent.  Will become deprecated
     */
    itemWidth?: number;

    /**
     * Allows for the item to become an auth item
     */
    isAuth?: boolean;
    authPropsUser?: { [key: string]: any };
    authPropsPW?: { [key: string]: any };

    /**
     * Individual background color. Can be globally set in the parent. Will become Deprecated
     */
    backgroundColor?: string;

    /**
     * Individual underlay click color.  Can be globally set in the parent.
     */
    underlayColor?: string;

    /**
     * Item on press callback.
     */
    onPress?: () => void;

    /**
     * Item on long press callback.
     */
    onLongPress?: () => void;

    /**
     * Enable or disable the > arrow at the end of the setting item.
     * Default: true
     */
    hasNavArrow?: boolean;
    arrowIcon?: Node;
    arrowStyle?: StyleProp<ImageStyle>;

    /**
     * Enable or disable a Switch component
     */
    hasSwitch?: boolean;

    /**
     * Switch state
     */
    switchState?: boolean;

    /**
     * Switch props
     */
    switchProps?: { [key: string]: any };

    /**
     * On value change callback
     */
    switchOnValueChange?: () => void;

    /**
     * Right side information on the setting item
     */
    titleInfo?: string;
    titleInfoStyle?: StyleProp<TextStyle>;

    /**
     * If 'Bottom'; info is placed beneath the title
     */
    titleInfoPosition?: string;

    /**
     * Right side content
     */
    rightSideContent?: Node;
    borderHide?: "Top" | "Bottom" | "Both";
    itemRef?: () => void;
  }
  declare var SettingsList: typeof npm$namespace$SettingsList;

  declare var npm$namespace$SettingsList: {
    Header: typeof SettingsList$Header,
    Item: typeof SettingsList$Item
  };
  declare class SettingsList$Header mixins Component<HeaderProps> {}

  declare class SettingsList$Item mixins Component<ItemProps> {}
  declare export default typeof SettingsList;
}
