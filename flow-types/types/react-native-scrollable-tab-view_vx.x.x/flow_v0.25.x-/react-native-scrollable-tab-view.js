declare module "react-native-scrollable-tab-view" {
  import typeof * as React from "react";

  import type {
    Animated,
    ScrollViewProps,
    ViewStyle,
    TextStyle,
    StyleProp
  } from "react-native";

  declare export type ScrollableTabViewProperties = {
    /**
     * accept 1 argument props and should return a component
     * to use as the tab bar. The component has goToPage, tabs, activeTab and ref added to the props,
     * and should implement setAnimationValue to be able to animate itself along with the tab content.
     * You can manually pass the props to the TabBar component.
     */
    renderTabBar?: ((props: TabBarProps) => JSX.Element) | false,

    /**
     * Defaults to "top".
     * "bottom" to position the tab bar below content.
     * "overlayTop" or "overlayBottom" for a semitransparent tab bar that overlays content. Custom
     * tab bars must consume a style prop on their outer element to support this feature: style={this.props.style}.
     */
    tabBarPosition?: "top" | "bottom" | "overlayTop" | "overlayBottom",

    /**
     * function to call when tab changes, should accept 1 argument which is
     * an Object containing two keys: i: the index of the tab that is selected, ref: the ref of the
     * tab that is selected
     */
    onChangeTab?: (value: ChangeTabProperties) => void,

    /**
     * function to call when the pages are sliding,
     * should accept 1 argument which is an Float number representing the page position in the slide frame.
     */
    onScroll?: (value: number) => void,

    /**
     * disables horizontal dragging to scroll between tabs, default is false.
     */
    locked?: boolean,

    /**
     * the index of the initially selected tab, defaults to 0 === first tab
     */
    initialPage?: number,

    /**
     * set selected tab(can be buggy see
     * https://github.com/skv-headless/react-native-scrollable-tab-view/issues/126
     */
    page?: number,

    /**
     * style of the default tab bar's underline
     */
    tabBarUnderlineStyle?: StyleProp<ViewStyle>,

    /**
     * color of the default tab bar's background, defaults to white
     */
    tabBarBackgroundColor?: string,

    /**
     * color of the default tab bar's text when active, defaults to navy
     */
    tabBarActiveTextColor?: string,

    /**
     * color of the default tab bar's text when inactive, defaults to black
     */
    tabBarInactiveTextColor?: string,

    /**
     * additional styles to the tab bar's text
     */
    tabBarTextStyle?: StyleProp<TextStyle>,

    /**
     * style (View.propTypes.style)
     */
    style?: StyleProp<ViewStyle>,

    /**
     * props that are applied to root ScrollView/ViewPagerAndroid.
     * Note that overriding defaults set by the library may break functionality; see the source for details.
     */
    contentProps?: ScrollViewProps,

    /**
     * on tab press change tab without animation.
     */
    scrollWithoutAnimation?: boolean,

    /**
     * pre-render nearby # sibling, Infinity === render all
     * the siblings, default to 0 === render current page.
     */
    prerenderingSiblingsNumber?: number
  } & React.Props<ScrollableTabView>;

  declare export type TabBarProps<T = {}> = T & {
    goToPage?: (pageNumber: number) => void,
    tabs?: JSX.Element[],
    activeTab?: number,
    scrollValue?: Animated.Value,
    containerWidth?: number
  };
  declare export interface ChangeTabProperties {
    i: number;
    ref: JSX.Element;
    from: number;
  }
  declare export default class ScrollableTabView
    mixins React.Component<ScrollableTabViewProperties> {}
  declare export type TabProps<T = {}> = T & {
    tabLabel: React.ReactChild
  };
  declare export interface DefaultTabBarProps {
    backgroundColor?: string;
    activeTextColor?: string;
    inactiveTextColor?: string;
    textStyle?: TextStyle;
    tabStyle?: ViewStyle;
    renderTab?: RenderTabProperties;
    underlineStyle?: ViewStyle;
  }
  declare export type RenderTabProperties = (
    name: string,
    pageIndex: number,
    isTabActive: boolean,
    goToPage: (pageNumber: number) => void
  ) => JSX.Element;
  declare export class DefaultTabBar
    mixins React.Component<TabBarProps<DefaultTabBarProps>> {}
  declare export type ScrollableTabBarProps = {
    scrollOffset?: number,
    style?: ViewStyle,
    tabsContainerStyle?: ViewStyle
  } & DefaultTabBarProps;

  declare export class ScrollableTabBar
    mixins React.Component<TabBarProps<ScrollableTabBarProps>> {}
}
