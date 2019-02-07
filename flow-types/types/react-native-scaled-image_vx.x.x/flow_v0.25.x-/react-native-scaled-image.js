declare module "react-native-scaled-image" {
  import typeof * as React from "react";

  import type {
    ImageSourcePropType,
    StyleProp,
    ImageStyle
  } from "react-native";

  declare export interface ScaledImageProps {
    source: ImageSourcePropType;
    height?: number;
    width?: number;
    style?: StyleProp<ImageStyle>;
  }
  declare export default class ScaledImage
    mixins React.Component<ScaledImageProps> {}
}
