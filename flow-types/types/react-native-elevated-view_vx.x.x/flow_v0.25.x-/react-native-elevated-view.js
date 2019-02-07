declare module "react-native-elevated-view" {
  import typeof * as React from "react";

  import typeof * as ReactNative from "react-native";

  declare export type ElevatedViewProperties = {
    elevation?: number
  } & ReactNative.ViewProps;

  declare export default class ElevatedView
    mixins React.Component<ElevatedViewProperties> {}
}
