declare module "react-router-navigation" {
  import type {
    Component,
    ReactNode,
    ReactElement,
    ComponentClass
  } from "react";

  import type {
    StyleProp,
    ViewProps,
    ViewStyle,
    TextStyle
  } from "react-native";

  import type { RouteProps } from "react-router-navigation-core";

  import type {
    NavigationTransitionProps,
    NavigationTransitionSpec
  } from "react-navigation";

  /**
   * Navigation
   */
  declare export type CardProps = RouteProps & NavBarProps;
  declare export type CardSubViewProps = any;
  declare export interface NavBarProps {
    hideNavBar?: boolean;
    renderNavBar?: (props: CardSubViewProps) => ReactNode;
    navBarStyle?: StyleProp<ViewStyle>;
    hideBackButton?: boolean;
    backButtonTintColor?: string;
    backButtonTitle?: string;
    renderLeftButton?: (props: CardSubViewProps) => ReactNode;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    renderTitle?: (props: CardSubViewProps) => ReactNode;
    renderRightButton?: (props: CardSubViewProps) => ReactNode;
  }
  declare export type NavigationProps = {
    cardStyle?: StyleProp<ViewStyle>,
    configureTransition?: (
      transitionProps: NavigationTransitionProps,
      prevTransitionProps?: NavigationTransitionProps
    ) => NavigationTransitionSpec,
    onTransitionStart?: (...args: any[]) => void,
    onTransitionEnd?: (...args: any[]) => void
  } & NavBarProps;

  declare export type Card = {
    key: string
  } & CardProps;

  /**
   * Tabs
   */
  declare export type TabSubViewProps = any;
  declare export interface TabBarProps {
    hideTabBar?: boolean;
    renderTabBar?: (props: TabSubViewProps) => ReactNode;
    tabBarStyle?: StyleProp<ViewStyle>;
    tabStyle?: StyleProp<ViewStyle>;
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    renderLabel?: (props: TabSubViewProps) => ReactNode;
    tabTintColor?: string;
    tabActiveTintColor?: string;
    renderTabIcon?: (props: TabSubViewProps) => ReactNode;
    tabBarPosition?: "top" | "bottom";
    tabBarIndicatorStyle?: StyleProp<ViewStyle>;
  }
  declare export type TabsProps = {
    initialLayout?: {
      width?: number,
      height?: number
    },
    configureTransition?: (
      transitionProps: NavigationTransitionProps,
      prevTransitionProps?: NavigationTransitionProps
    ) => NavigationTransitionSpec
  } & TabBarProps;

  declare export type TabProps = {
    onReset?: (props: TabBarProps & RouteProps) => void,
    onIndexChange?: (index: number) => void
  } & RouteProps &
    TabBarProps;

  declare export type Tab = {
    key: string
  } & TabProps;

  declare export type BottomNavigationProps = {
    children?: ReactNode[],
    lazy?: boolean,
    style?: StyleProp<ViewStyle>
  } & TabBarProps;

  declare export class BottomNavigation
    mixins Component<
        BottomNavigationProps,
        {
          key: string
        }
      > {
    static defaultProps: {
      lazy: true
    };
    renderPager: (sceneProps: TabSubViewProps) => ReactNode;
    renderNavigationBar: (
      sceneProps: TabSubViewProps,
      props: TabSubViewProps
    ) => ReactNode;
    renderSceneView: (sceneProps: TabSubViewProps) => ReactNode;
    renderScene: (sceneProps: TabSubViewProps) => ReactElement<ViewProps>;
  }
  declare export function Card(props: CardProps): ReactElement<CardProps>;

  declare export class NavBar mixins Component<CardSubViewProps, void> {
    props: CardSubViewProps;
    renderLeftComponent: (sceneProps: CardSubViewProps) => ReactNode;
    renderTitleComponent: (sceneProps: CardSubViewProps) => ReactNode;
    renderRightComponent: (sceneProps: CardSubViewProps) => ReactNode;
  }
  declare export type NavigationComponentProps = {
    children?: Array<ReactElement<any>>
  } & NavigationProps;

  declare export class Navigation mixins Component<NavigationComponentProps> {
    props: NavigationComponentProps;
    renderHeader: (
      sceneProps: CardSubViewProps,
      props: CardSubViewProps
    ) => ReactNode;
    renderSceneComponent: (
      sceneProps: CardSubViewProps
    ) => ComponentClass<any> | void;
  }
  declare export function Tab(props: TabProps): ReactElement<{}>;

  declare export type TabBarComponentProps = {
    children?: Array<ReactElement<any>>
  } & TabBarProps;

  declare export class Tabs
    mixins Component<
        TabBarComponentProps,
        {
          key: string
        }
      > {
    props: TabBarComponentProps;
    renderHeader: (sceneProps: TabSubViewProps) => ReactElement<any> | null;
    renderFooter: (sceneProps: TabSubViewProps) => ReactElement<any> | null;
    renderTabBar: (
      sceneProps: TabSubViewProps,
      props: TabSubViewProps
    ) => ReactElement<any> | null;
    renderScene: (sceneProps: TabSubViewProps) => ReactElement<any> | null;
  }
}
