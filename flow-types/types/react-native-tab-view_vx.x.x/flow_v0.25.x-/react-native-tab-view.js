declare module "react-native-tab-view" {
  import type { PureComponent, Node, ComponentType } from "react";

  import type {
    Animated,
    StyleProp,
    ViewStyle,
    EasingFunction
  } from "react-native";

  declare export type Key = {
    key: string
  };
  declare export type RouteBase = Key & {
    testID?: string
  };
  declare export type Route<T: RouteBase = RouteBase> = T;
  declare export type NavigationState<T: Key> = {
    index: number,
    routes: T[]
  };
  declare export type Scene<T> = {
    route: T,
    focused: boolean,
    index: number
  };
  declare export type Layout = {
    height: number,
    width: number
  };
  declare export type SceneRendererProps<T: RouteBase = RouteBase> = {
    layout: Layout & {
      measured: boolean
    },
    navigationState: NavigationState<T>,
    position: Animated.Value,
    jumpTo: (key: string) => void,
    getLastPosition: () => number,
    subscribe: (
      event: SubscriptionName,
      callback: () => void
    ) => {
      remove: () => void
    }
  };
  declare export type SubscriptionName = "reset" | "position";
  declare export type TransitionProps = {
    progress: number
  };
  declare export type NavigationTransitionSpec = {
    duration?: number,
    easing?: EasingFunction,
    timing?: (value: Animated.Value, config: any) => any
  };
  declare export type TransitionConfigurator = (
    currentTransitionProps: TransitionProps,
    nextTransitionProps: TransitionProps
  ) => NavigationTransitionSpec;
  declare export type PagerProps = {
    configureTransition?: TransitionConfigurator,
    animationEnabled?: boolean,
    swipeEnabled?: boolean,
    swipeDistanceThreshold?: number,
    swipeVelocityThreshold?: number,
    children?: Node
  };
  declare export type TabViewProps<T: RouteBase = RouteBase> = PagerProps & {
    navigationState: NavigationState<T>,
    tabBarPosition?: "bottom" | "top",
    onIndexChange: (index: number) => void,
    onPositionChange?: (props: {
      value: number
    }) => void,
    initialLayout?: Layout,
    canJumpToTab?: (route: T) => boolean,
    renderPager?: (props: SceneRendererProps<T> & PagerProps) => Node,
    renderScene: (props: SceneRendererProps<T> & Scene<T>) => Node,
    renderTabBar?: (props: SceneRendererProps<T>) => Node,
    lazy?: boolean,
    style?: StyleProp<ViewStyle>
  };
  declare export class TabView<T: Route<> = Route<>>
    mixins PureComponent<TabViewProps<T>> {}
  declare export type GestureEvent = {
    nativeEvent: {
      changedTouches: any[],
      identifier: number,
      locationX: number,
      locationY: number,
      pageX: number,
      pageY: number,
      target: number,
      timestamp: number,
      touches: any[]
    }
  };
  declare export type GestureState = {
    stateID: number,
    moveX: number,
    moveY: number,
    x0: number,
    y0: number,
    dx: number,
    dy: number,
    vx: number,
    vy: number,
    numberActiveTouches: number
  };
  declare export type GestureHandler = (
    event: GestureEvent,
    state: GestureState
  ) => void;
  declare export type PagerPanProps<
    T: RouteBase = RouteBase
  > = SceneRendererProps<T> & {
    configureTransition?: TransitionConfigurator,
    animationEnabled?: boolean,
    swipeEnabled?: boolean,
    swipeDistanceThreshold?: number,
    swipeVelocityThreshold?: number,
    onSwipeStart?: GestureHandler,
    onSwipeEnd?: GestureHandler,
    children?: Node
  };
  declare export type DefaultTransitionSpec = {
    timing: typeof Animated.spring,
    tension: 300,
    friction: 35
  };
  declare export class PagerPan<T: Route<> = Route<>>
    mixins PureComponent<PagerPanProps<T>> {
    static defaultProps: {
      configureTransition: () => DefaultTransitionSpec,
      initialLayout: {
        height: 0,
        width: 0
      },
      swipeDistanceThreshold: 120,
      swipeVelocityThreshold: 0.25
    };
  }
  declare export type ScrollEvent = {
    nativeEvent: {
      contentOffset: {
        x: number,
        y: number
      }
    }
  };
  declare export type PagerScrollProps<
    T: RouteBase = RouteBase
  > = SceneRendererProps<T> & {
    animationEnabled?: boolean,
    swipeEnabled?: boolean,
    children?: Node
  };
  declare export class PagerScroll<T: Route<> = Route<>>
    mixins PureComponent<PagerScrollProps<T>> {}
  declare export type PageScrollEvent = {
    nativeEvent: {
      position: number,
      offset: number
    }
  };
  declare export type PageScrollState = "dragging" | "settling" | "idle";
  declare export type PagerAndroidProps<
    T: RouteBase = RouteBase
  > = SceneRendererProps<T> & {
    animationEnabled?: boolean,
    swipeEnabled?: boolean,
    children?: Node
  };
  declare export class PagerAndroid<T: Route<> = Route<>>
    mixins PureComponent<PagerAndroidProps<T>> {}
  declare export type IndicatorProps<
    T: RouteBase = RouteBase
  > = SceneRendererProps<T> & {
    width: Animated.Value
  };
  declare export type TabBarProps<
    T: RouteBase = RouteBase
  > = SceneRendererProps<T> & {
    scrollEnabled?: boolean,
    pressColor?: string,
    pressOpacity?: number,
    getLabelText?: (scene: Scene<T>) => string | void | null,
    renderLabel?: (scene: Scene<T>) => Node,
    renderIcon?: (scene: Scene<T>) => Node,
    renderBadge?: (scene: Scene<T>) => Node,
    renderIndicator?: (props: IndicatorProps<T>) => Node,
    onTabPress?: (scene: Scene<T>) => void,
    tabStyle?: StyleProp<ViewStyle>,
    indicatorStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<ViewStyle>,
    style?: StyleProp<ViewStyle>
  };
  declare export class TabBar<T: Route<> = Route<>>
    mixins PureComponent<TabBarProps<T>> {}
  declare export function SceneMap(scenes: {
    [key: string]: ComponentType<any>
  }): (props: {
    route: Route<>
  }) => Node;
}
