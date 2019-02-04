declare module 'react-native-navbar' {
        import typeof * as React from 'react';

	import type {
          ViewStyle,TextProps
        } from 'react-native';

	declare export interface NavigationBarButton {
title: string,
style?: ViewStyle,
handler?: () => void,
disable?: boolean
} 
	declare export interface NavigationBarTitle {
title: string,
tintColor?: string,
ellipsizeMode?: $ElementType<TextProps, "ellipsizeMode">,
numberOfLines?: number
} 
	declare export interface StatusBar {
style?: "light-content" | "default",
hidden?: boolean,
tintColor?: string,
hideAnimation?: "fade" | "slide" | "none",
showAnimation?: "fade" | "slide" | "none"
} 
	declare export interface NavigationBarProps {
style?: ViewStyle,
tintColor?: string,
statusBar?: StatusBar,
leftButton?: NavigationBarButton | React.ReactElement<any> | null,
rightButton?: NavigationBarButton | React.ReactElement<any> | null,
title?: NavigationBarTitle | React.ReactElement<any> | null
} 
	declare export default class NavigationBar mixins React.Component<NavigationBarProps> {}
    }
