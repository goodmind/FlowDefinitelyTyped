declare module "react-content-loader" {
  import typeof * as React from "react";

  declare export interface ContentLoaderProps {
    style?: React.CSSProperties;
    animate?: boolean;
    speed?: number;
    width?: number;
    height?: number;
    primaryColor?: string;
    secondaryColor?: string;
    primaryOpacity?: number;
    secondaryOpacity?: number;
    preserveAspectRatio?:
      | "none"
      | "xMinYMin meet"
      | "xMidYMin meet"
      | "xMaxYMin meet"
      | "xMinYMid meet"
      | "xMidYMid meet"
      | "xMaxYMid meet"
      | "xMinYMax meet"
      | "xMidYMax meet"
      | "xMaxYMax meet"
      | "xMinYMin slice"
      | "xMidYMin slice"
      | "xMaxYMin slice"
      | "xMinYMid slice"
      | "xMidYMid slice"
      | "xMaxYMid slice"
      | "xMinYMax slice"
      | "xMidYMax slice"
      | "xMaxYMax slice";
    uniquekey?: string;
    className?: string;
    ariaLabel?: string;
  }
  declare export default class ContentLoader
    mixins React.Component<ContentLoaderProps> {}
  declare export class Facebook mixins React.Component<ContentLoaderProps> {}
  declare export class Instagram mixins React.Component<ContentLoaderProps> {}
  declare export class Code mixins React.Component<ContentLoaderProps> {}
  declare export class List mixins React.Component<ContentLoaderProps> {}
  declare export class BulletList mixins React.Component<ContentLoaderProps> {}
}
