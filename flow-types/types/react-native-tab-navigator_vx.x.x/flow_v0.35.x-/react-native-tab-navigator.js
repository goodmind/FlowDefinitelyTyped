declare module 'react-native-tab-navigator' {
        import typeof * as React from 'react';

	import type {
          ViewStyle,TextStyle
        } from 'react-native';

	declare export interface TabNavigatorProps {

/**
 * Define for rendered scene
 */
sceneStyle?: ViewStyle,

/**
 * Define style for TabBar
 */
tabBarStyle?: ViewStyle,

/**
 * Define shadow style for tabBar
 */
tabBarShadowStyle?: ViewStyle,

/**
 * Disable onPress opacity for Tab
 * @default false
 */
hidesTabTouch?: boolean
} 
	declare interface TabNavigatorItemProps {

/**
 * Allow font scaling for title
 */
allowFontScaling?: boolean,

/**
 * Text for Item badge
 */
badgeText?: string | number,

/**
 * Return whether the item is selected
 */
selected?: boolean,

/**
 * Styling for selected Item title
 */
selectedTitleStyle?: TextStyle,

/**
 * Styling for tab
 */
tabStyle?: ViewStyle,

/**
 * Item title
 */
title?: string,

/**
 * Styling for Item title
 */
titleStyle?: TextStyle,

/**
 * onPress method for Item
 */
onPress(): void,

/**
 * Returns Item badge
 */
renderBadge(): JSX.Element,

/**
 * Returns Item icon
 */
renderIcon(): JSX.Element,

/**
 * Returns selected Item icon
 */
renderSelectedIcon(): JSX.Element
} 
	declare export class TabNavigator mixins React.Component<TabNavigatorProps, any> {}
	declare class TabNavigator$Item mixins React.Component<TabNavigatorItemProps, any> {}
	declare export default typeof TabNavigator

    }
