declare module "react-sticky-box" {
  import typeof * as React from "react";

  declare type ReactStickyBox$StickyBoxMode =
    | "relative"
    | "stickyBottom"
    | "stickyTop";

  declare interface ReactStickyBox$StickyBoxProps {
    bottom?: boolean;
    offsetTop?: number;
    offsetBottom?: number;
    onChangeMode?: (
      oldMode: ReactStickyBox$StickyBoxMode,
      newMode: ReactStickyBox$StickyBoxMode
    ) => void;
  }
  declare var ReactStickyBox: React.ComponentClass<ReactStickyBox$ReactStickyBox$StickyBoxProps>;
  declare module.exports: typeof ReactStickyBox;
}
