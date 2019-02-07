declare module "react-headroom" {
  import type { CSSProperties, ReactNode, Component } from "react";

  declare class Headroom mixins Component<ReactHeadroomProps> {
    constructor(props: ReactHeadroomProps): this;
  }
  declare export interface ReactHeadroomProps {
    style?: CSSProperties;
    onPin?: () => void;
    onUnpin?: () => void;
    onUnfix?: () => void;
    upTolerance?: number;
    downTolerance?: number;
    disable?: boolean;
    wrapperStyle?: CSSProperties;
    parent?: () => any;
    pinStart?: number;
    calcHeightOnResize?: boolean;
    disableInlineStyles?: boolean;
    className?: string;
    children: ReactNode;
  }
  declare export default typeof Headroom;
}
