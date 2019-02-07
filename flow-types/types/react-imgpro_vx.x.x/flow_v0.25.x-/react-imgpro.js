declare module "react-imgpro" {
  import typeof * as React from "react";

  declare export default typeof ReactImgpro$ProcessImage;

  declare type ReactImgpro$Mode =
    | "neighbor"
    | "bilinear"
    | "bicubic"
    | "hermite"
    | "bezier";

  declare interface ReactImgpro$Shape {
    width?: number;
    height?: number;
    mode?: ReactImgpro$Mode;
  }

  declare interface ReactImgpro$Size {
    width: number;
    height: number;
    mode:
      | "horizontal_left"
      | "horizontal_center"
      | "horizontal_right"
      | "vertical_top"
      | "vertical_bottom"
      | "vertical_middle";
  }

  declare interface ReactImgpro$ProcessImageProps {
    image: string;
    resize?: ReactImgpro$Shape;
    quality?: number;
    greyscale?: boolean;
    normalize?: boolean;
    invert?: boolean;
    opaque?: boolean;
    sepia?: boolean;
    dither565?: boolean;
    scale?: boolean;
    scaleToFitImage?: {
      width: number,
      height: number
    };
    flip?: {
      horizontal?: boolean,
      vertical?: boolean
    };
    rotate?: {
      degree: number,
      mode: ReactImgpro$Mode
    };
    brightness?: number;
    contrast?: number;
    fade?: number;
    opacity?: number;
    blur?: number;
    posterize?: number;
    cover?: ReactImgpro$Size;
    contain?: ReactImgpro$Size;
    colors?: {
      lighten?: number,
      brighten?: number,
      darken?: number,
      desaturate?: number,
      saturate?: number,
      greyscale?: number,
      spin?: number,
      mix?: {
        color?: string,
        amount?: number
      },
      tint?: number,
      xor?: number,
      shade?: number,
      red?: number,
      green?: number,
      blue?: number
    };
    storage?: boolean;
    disableWebWorker?: boolean;
    disableRerender?: boolean;
    customCdn?: string;
    onProcessFinish: () => void;
  }

  declare class ReactImgpro$ProcessImage
    mixins React.Component<ReactImgpro$ProcessImageProps> {}
}
