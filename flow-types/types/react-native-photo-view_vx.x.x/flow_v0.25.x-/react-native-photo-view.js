declare module "react-native-photo-view" {
  import typeof * as React from "react";

  import type { ImageSourcePropType, ViewProps } from "react-native";

  declare export interface ReactNativePhotoViewProps {
    source?: ImageSourcePropType;
    loadingIndicatorSource?: ImageSourcePropType;
    fadeDuration?: number;
    minimumZoomScale?: number;
    maximumZoomScale?: number;
    showsHorizontalScrollIndicator?: boolean;
    showsVerticalScrollIndicator?: boolean;
    scale?: number;
    androidZoomTransitionDuration?: number;
    androidScaleType?:
      | "center"
      | "centerCrop"
      | "centerInside"
      | "fitCenter"
      | "fitStart"
      | "fitEnd"
      | "fitXY";
    onLoadStart?: () => void;
    onLoad?: () => void;
    onLoadEnd?: () => void;
    onProgress?: (loaded: number, total: number) => void;
    onTap?: (
      point: {
        x: number,
        y: number
      },
      target?: React.ReactElement<any>
    ) => void;
    onViewTap?: (
      point: {
        x: number,
        y: number
      },
      target?: React.ReactElement<any>
    ) => void;
    onScale?: (scale: number, target?: React.ReactElement<any>) => void;
  }
  declare export default class ReactNativePhotoView
    mixins React.Component<ReactNativePhotoViewProps & ViewProps> {}
}
