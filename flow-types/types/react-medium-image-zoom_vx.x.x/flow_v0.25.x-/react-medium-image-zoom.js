declare module "react-medium-image-zoom" {
  import typeof * as React from "react";

  declare export interface ImageZoom_Image {
    src: string;
    alt?: string;
    className?: string;
    style?: { [key: string]: any };
  }
  declare export interface ImageZoom_ZoomImage {
    src?: string;
    alt?: string;
    className?: string;
    style?: { [key: string]: any };
  }
  declare export interface ImageZoomDefaultStyles {
    zoomContainer?: { [key: string]: any };
    overlay?: { [key: string]: any };
    image?: { [key: string]: any };
    zoomImage?: { [key: string]: any };
  }
  declare export interface ImageZoomProps {
    image: ImageZoom_Image;
    zoomImage?: ImageZoom_ZoomImage;
    zoomMargin?: number;
    isZoomed?: boolean;
    shouldHandleZoom?: () => boolean;
    shouldReplaceImage?: boolean;
    shouldRespectMaxDimension?: boolean;
    defaultStyles?: ImageZoomDefaultStyles;
    onZoom?: () => { [key: string]: any };
    onUnzoom?: () => { [key: string]: any };
  }
  declare export default class ImageZoom
    mixins React.Component<ImageZoomProps, any> {}
}
