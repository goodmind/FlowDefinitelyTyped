declare module "react-router-navigation-core" {
  import type {
    PureComponent,
    Node,
    ComponentClass,
    ReactElement
  } from "react";

  import type { BackHandler, StyleProp, ViewStyle } from "react-native";

  import type { History, Location } from "history";

  import type { RouterProps, RouteProps, match } from "react-router";

  declare export type Route<T = {}> = {
    key: string,
    routeName: string,
    match?: match<T>
  };
  declare export type NavigationState<OwnRoute> = {
    index: number,
    routes: Array<Route<> & OwnRoute>
  };
  declare export type RouteProps = {
    component?: ComponentClass<RouterProps>,
    render?: (props: RouterProps) => Node,
    children?: ((props: RouterProps) => Node) | Node,
    path?: string,
    exact?: boolean,
    strict?: boolean
  };
  declare export type Card = RouteProps & {
    key: string
  };
  declare export type CardsRendererProps = {
    onNavigateBack: (routeKey?: string) => boolean,
    navigationState: NavigationState<{
      path?: string,
      params?: { [key: string]: any }
    }>,
    cards: Card[]
  };
  declare export type Tab = RouteProps & {
    key: string,
    onIndexChange?: (index: number) => void
  };
  declare export type TabsRendererProps = {
    onIndexChange: (index: number) => void,
    navigationState: NavigationState<{
      title?: string,
      testID?: string
    }>,
    loadedTabs: string[],
    tabs: Tab[]
  };
  declare export type CardStackProps = {
    children?: Node[],
    render: (props: CardsRendererProps) => Node
  };
  declare export class CardStack
    mixins PureComponent<
        CardStackProps,
        {
          key: number,
          navigationState: NavigationState<{
            path?: string,
            params?: { [key: string]: any }
          }>,
          cards: Card[]
        }
      > {
    unlistenHistory: () => void;
    constructor(props: CardStackProps, context?: any): this;
    onListenHistory: (history: History, nextHistory: History) => void;
    onNavigateBack: () => boolean;
  }
  declare export type TabStackProps = {
    children?: Node[],
    render: (props: TabsRendererProps) => Node,
    lazy?: boolean,
    forceSync?: boolean,
    style?: StyleProp<ViewStyle>
  };
  declare export class TabStack
    mixins PureComponent<
        TabStackProps,
        {
          navigationState: NavigationState<{
            title?: string,
            testID?: string
          }>,
          tabs: Tab[],
          loadedTabs: string[],
          rootIndex: number,
          tabsHistory: {
            [key: number]: Location[]
          }
        }
      > {
    static defaultProps: {
      forceSync: false
    };
    unlistenHistory: () => void;
    constructor(props: TabStackProps): this;
    onListenHistory: (history: History, nextHistory: History) => void;
    onIndexChange: (index: number) => void;
  }
  declare export var shouldUpdate: (
    currentItem: RouteProps,
    nextItem: RouteProps,
    currentLocation: Location,
    nextLocation: Location
  ) => boolean;
  declare export var get: <Item: Route<>>(
    items: Item[],
    route: Route<>
  ) => Item;
  declare export var createKey: (route: Route<>) => string;
  declare export var getRoute: (
    stack: RouteProps[],
    location: Location
  ) => Route<> | void;
  declare export var renderSubView: (
    render: (propsA: any, propsB: any) => Node,
    additionalProps?: any
  ) => (ownProps: any) => Node;
  declare export var build: <Item>(
    children: Array<ReactElement<Item>>,
    oldBuild?: Item[]
  ) => Item[];
  declare export var runHistoryListenner: (
    history: History,
    onListenHistory: () => void
  ) => () => void;
}
