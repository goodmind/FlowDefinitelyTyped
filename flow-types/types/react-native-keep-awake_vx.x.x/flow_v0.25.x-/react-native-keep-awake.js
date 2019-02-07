declare module "react-native-keep-awake" {
  import typeof * as React from "react";

  declare class KeepAwake
    mixins React.Component<{
        children?: JSX.Element
      }> {
    static activate(): void;
    static deactivate(): void;
  }
  declare export default typeof KeepAwake;
}
