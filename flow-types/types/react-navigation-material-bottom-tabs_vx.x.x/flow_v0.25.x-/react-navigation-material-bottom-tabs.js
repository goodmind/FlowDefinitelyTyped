declare module "react-navigation-material-bottom-tabs" {
  import type { StyleProp, TextStyle, ViewStyle } from "react-native";

  import type {
    NavigationContainer,
    NavigationPathsConfig,
    NavigationRouteConfigMap
  } from "react-navigation";

  declare export interface TabConfig {
    shifting?: boolean;
    labeled?: boolean;
    activeTintColor?: string;
    inactiveTintColor?: string;
    barStyle?: StyleProp<ViewStyle>;
    initialRouteName?: string;
    order?: string[];
    paths?: NavigationPathsConfig;
    backBehavior?: "initialRoute" | "none";
  }
  declare export function createMaterialBottomTabNavigator(
    routeConfigMap: NavigationRouteConfigMap,
    config?: TabConfig
  ): NavigationContainer;
}
